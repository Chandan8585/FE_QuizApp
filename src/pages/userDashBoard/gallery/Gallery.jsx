import Data from "../Data";

import "./gallery.css"
import React, { useEffect} from 'react'
import Video from "../video/Video";
import { useLecture } from "../../../components/context/lectureContext";
import axios from "axios";

const Gallery = () => {
    const arr = Data[0].tutorials;
    const {lecture,lectureCategory, link, image, title, description, lectureDispatch} = useLecture();
    // const [tutorialData, setTutorialData] = useState(arr);
    // const [selectedLink ,setSelectedLink] = useState("");
   
    useEffect(()=> {
        const arr = Data[0].tutorials;
          (async() => {
          try {
            const response = await axios.get("https://fair-pink-angler-cape.cyclic.app/category");
            const { data } = response;
            const { tutorials } = data[0].lecture[0];
            const filteredData = data && data.length>0 && data.filter(({catergory})=> catergory === lectureCategory)
            if(filteredData && filteredData.length>0){
              lectureDispatch({
                type: "SET_LECTURES",
                payload: filteredData
            })
            }
          } catch (error) {
            
          }
          })()

     
     
    },[]);
   
   const handleTutorialData = (link)=> {
         lectureDispatch({
            type: "SET_LINK",
            payload : link
         })
         lectureDispatch({
            type: "SET_TITLE",
            payload: title  
         })
         lectureDispatch({
            type: "SET_IMAGE",
            payload: image
         })
         lectureDispatch({
          type: "SET_DESCRIPTION",
          payload:  description
         })

   }
  return (  
    <div className="tutorial-container">
    <div className="custom-container">
      {lecture.map(({ link, image, title,  description }) => {
        return (
          <div
            onClick={() => handleTutorialData(link, title, image, description)}
            key={image}
            className="item-detail"
          >
           
            <p>{title && title.slice(0, 28).concat("...")}</p>
            <img src={image} alt={title} />
            {/* <p>Description : {description}</p> */}
          </div>
        );
      })}
    </div>
    <div className="video-container">
      {link && (
        <div className="video-content">
          <Video />
        </div>
      )}
      {
        
        title && description && (
          
          <div className="video-details">
            <div className="video-title">Title: {title}</div>
             <p className="video-description">Description: {description}</p>
          </div>
        )
      }
    </div>
  </div>
 
      
  )
}

export default Gallery


