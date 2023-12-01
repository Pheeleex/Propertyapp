import { useEffect, useState } from 'react';
import { db, storage } from '../Config/Firebase';
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

const useGetProperties = () => {
  const [property, setProperty] = useState([]);
  const [imageLists, setImageLists] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state


  useEffect(() => {
    const fetchData = async () => {
      try {
        const propertyCollectionRef = collection(db, 'Properties');
        const querySnapshot = await getDocs(propertyCollectionRef);
        const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

        setProperty(docs);

        // Fetch images based on ImagePath from Firestore data
        const imageListPromises = docs.map((prop) => {
          if (prop.ImagePath) {
            const imageListRef = ref(storage, `${prop.ImagePath}/`);
            return listAll(imageListRef).then((response) =>
              Promise.all(response.items.map((item) => getDownloadURL(item)))
            );
          }
          return Promise.resolve([]); // Resolve with an empty array if no ImagePath
        });

        Promise.all(imageListPromises)
          .then((imageListsData) => {
            const updatedImageLists = docs.reduce((acc, prop, index) => {
              acc[prop.ImagePath] = imageListsData[index];
              return acc;
            }, {});
            setImageLists(updatedImageLists);
            setLoading(false); // Set loading to false once data is fetched
          })
          .catch((error) => console.error('Error fetching image URLs:', error));
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    const propertyCollectionRef = collection(db, 'Properties');
    const unsubscribe = onSnapshot(query(propertyCollectionRef), () => {
      fetchData();
    });

    // Initial data fetch
    fetchData();

    return () => unsubscribe();
  }, []);

  return { property, imageLists };
};

export default useGetProperties;
