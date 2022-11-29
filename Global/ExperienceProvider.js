import React, { createContext, useState } from 'react'
export const ExperienceContext = createContext({});
import * as ImagePicker from 'expo-image-picker';
import { firestore } from './Firebase';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const ExperienceProvider = ({children}) =>{
        const [data, setData] = useState()


    const pickImage = async () =>{
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setPoster(result.assets[0].uri);
        }
        };

        const createExperience = async() => {
            const collection = await firestore.collection(`Experiences`)
            return collection.add({experience_name, experience_price, experience_description,
                destination, pickup, departure, poster
            })
        }

        const getAllExperiences = async() => {
            var query = await firestore
            .collection('Experiences')
            .get().then(collectionSnapshot => {
                collectionSnapshot.forEach(
                    documentSnapshot => {
                        setData(...prevState, documentSnapshot.data())
                    }
                )
            })
        }
    const [experience_name, setExperienceName] = useState('')
    const [experience_price, setExperiencePrice] = useState('')
    const [experience_description, setExperienceDescription] = useState('')
    const [destination, setDestination] = useState('')
    const [pickup, setPickup] = useState('')
    const [departure, setDeparture] = useState('')
    const [hasGalleryPermission, setGalleryPermission]=useState(false)
    const [poster, setPoster] = useState(null)
    return (
        <ExperienceContext.Provider value={{
            experience_description,setExperienceDescription,
            experience_name, setExperienceName,
            experience_price, setExperiencePrice,
            destination, setDestination,
            departure, setDeparture,
            pickup, setPickup,
            poster, setPoster,
            pickImage, getAllExperiences,
            data
        }}>
          {children}
        </ExperienceContext.Provider>
      )
}
export default ExperienceProvider