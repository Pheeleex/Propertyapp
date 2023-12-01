import { doc, getDoc } from "firebase/firestore";
import Property from "../../Pages/Property";
import { db, storage } from "../Firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
export const propertyLoader = async ({ params }) => {

    const fetchDataBasedOnPropertyId = async (propertyId) => {
        try {
          const propertyDocRef = doc(db, 'Properties', propertyId);
          const docSnapshot = await getDoc(propertyDocRef);
      
          if (docSnapshot.exists()) {
            const propertyData = docSnapshot.data();
      
            // Fetch images based on ImagePath from Firestore data
            if (propertyData.ImagePath) {
              const imageListRef = ref(storage, `${propertyData.ImagePath}/`);
              const imageUrls = await listAll(imageListRef).then((response) =>
                Promise.all(response.items.map((item) => getDownloadURL(item)))
              );
      
              // Combine property data with image URLs
              return { ...propertyData, images: imageUrls };
            } else {
              // If ImagePath is not available, return property data without images
              return propertyData;
            }
          } else {
            throw new Error('Property not found');
          }
        } catch (error) {
          console.error('Error fetching property data:', error);
          throw error;
        }
      };
      
    const { propertyId } = params;
    
    try {
      const propertyData = await fetchDataBasedOnPropertyId(propertyId);
      return propertyData;
    } catch (error) {
      console.log('Error fetching property data:', error);
      return {};
    }
  };