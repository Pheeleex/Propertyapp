import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db, storage } from '../Firebase';
import { getDownloadURL, listAll, ref } from 'firebase/storage';

const propertiesLoader = async () => {
  try {
    const propertyCollectionRef = collection(db, "Properties");
    const orderedQuery = query(propertyCollectionRef, orderBy('id'));

    const querySnapshot = await getDocs(orderedQuery);
    const propertyData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

    const imageListPromises = propertyData.map((property) => {
      if (property.ImagePath) {
        const imageListRef = ref(storage, `${property.ImagePath}/`);
        return listAll(imageListRef).then((response) =>
          Promise.all(response.items.map((item) => getDownloadURL(item)))
        );
      }
      return Promise.resolve([]);
    });

    const imageListsData = await Promise.all(imageListPromises);

    const propertiesWithImages = propertyData.map((property, index) => ({
      ...property,
      images: imageListsData[index],
    }));

    return propertiesWithImages;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

export default propertiesLoader;
