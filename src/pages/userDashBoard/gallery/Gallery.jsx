import Data from "../Data";


import React, { useEffect, useState } from 'react'
import Video from "../video/Video";
import { useLecture } from "../../../components/context/lectureContext";

const Gallery = () => {
    const arr = Data[0].tutorials;
    const {lecture,lectureDispatch} = useLecture();
    const [tutorialData, setTutorialData] = useState(arr);
    const [selectedLink ,setSelectedLink] = useState("");
   
    useEffect(()=> {
        const arr = Data[0].tutorials;
        // lectureDispatch({
        //     type: "SET_LECTURES",
        //     payload: arr
        // })
        setTutorialData(arr);
    },[]);
   
   const handleTutorialData = (link)=> {
    setSelectedLink(link);
   }
  return (
    <div>
    {
        tutorialData.map((tutorial)=> {
            return (
                   <div onClick={()=> handleTutorialData(tutorial.link)}>
                    <p>{tutorial.title}</p>
                   </div>
            )
        })

    }{
    <Video link={selectedLink}/>
    }
   </div>
  )
}

export default Gallery


