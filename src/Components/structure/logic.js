import React, { useEffect, useState } from 'react'
import {db, storage} from '../Config/Firebase'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { getDownloadURL, listAll, ref } from 'firebase/storage'


const Properties = () => {
    const [property, setProperty] = useState([])
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'HouseA/')

    useEffect(() => {
        const propertyCollectionRef = collection(db, 'Properties')
        const unsubscribe = onSnapshot(query(propertyCollectionRef), (snapshot)=>{
            let docs = []
            snapshot.forEach((doc)=> {
                const data = doc.data()
                const id = doc.id
                docs.push({...data, id })
                console.log(docs)
                setProperty(docs);
            })
        })    
        listAll(imageListRef).then((response)=> {
            response.items.forEach((item)=> {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })
        return () => unsubscribe();
    }, []) }