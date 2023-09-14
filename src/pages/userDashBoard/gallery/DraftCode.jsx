
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Video from '../video/Video';
import './gallery.css';
import { useLecture } from '../../../components/context/lectureContext';
import { useQuiz } from '../../../components/context/quiz-context';
import Data from '../Data';
const Gallery = () => {
    const [data, setData] = useState([]);
    const {lecture, link, image, select, description, lectureDispatch} = useLecture();
    const [activeVid, setActiveVid] = useState("https://www.youtube.com/embed/ER9SspLe4Hg?si=G5fNiy51LKHH1jBm");
    const [activeTitle, setActiveTitle] = useState("GFG POTD");

    const {quizCategory} = useQuiz();
    useEffect(() => {
        (async () => {
            try {
                const {data} = await axios.get("https://fair-pink-angler-cape.cyclic.app/quiz",{
                    headers: {authorization : localStorage.getItem("token")}
                }); 
                const filteredData =data && data.length> 0 && data.filter(({category})=> category === quizCategory);
                if(filteredData && filteredData.length>0){
                    lectureDispatch({
                        type: "SET_VIDEOS",
                        payload: filteredData.data[0].lecture[0].tutorials 
                    })
                } 
                const tutorialData = fetchedData.data[0].lecture[0].tutorials;
                // console.log(tutorialData);
                console.log(fetchedData.data[0].lecture[0]);
                setData(fetchedData.data[0].lecture[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        })();
    }, []);
           console.log(data.heading);
           
            console.log("data.tutorials", data.tutorials)
        
    return (
        <div className="tutorial-container">
            <div className="custom-container" style={{ height: "min(38vw, 650px)" }}>
                {/* Check if data is defined before accessing its properties */}
                {data.length > 0 && (
                    <>
                        <h3 className="heading">{data.heading}</h3>
                        {/* <p className="subheading">{data.subHeading}</p> */}
                        
                        { 
                        data.tutorials && data.tutorials.map((e) => (
                            <div
                                className={`custom-item ${e.select ? "select" : ""}`}
                                key={e.title}
                                onClick={() => {
                                    console.log("e.link",   e.link);
                                    setActiveVid(e.link);
                                    setActiveTitle(e.title);
                                    setActiveDescription(e.description);
                                    console.log("Link",link)
                                }}
                            >
                                <div className="item-detail">
                                    <img className="" src={e.img} alt={e.title} />
                                    <p className="">{e.title}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <Video
                link={activeVid}
                title={activeTitle}
                description={description}
            />
        </div>
    );
};

export default Gallery;















/* Assuming you want to apply these styles to the div with the combined class */
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.tutorial-container{
    display: flex;
    flex-direction: row;
    /* background-color: #FA7020; */
    background-color: burlywood;
    width: 100vw;
    height: 100vh;
    padding-left: 1rem;
    overflow-y: scroll;
}

.custom-container{
    background-color: white;
    width: 40%;
    overflow-y: scroll;
    border-radius: 5px;
    max-height: 70%;
    border: 1px solid grey;
    margin: 1rem 0 10rem 5rem;


}
.custom-container::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers (Chrome, Safari, etc.) */
  }
.item-detail{
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid grey;
    margin-bottom: 1px;
    padding: 1rem;
    cursor: pointer;
justify-content: space-between;
align-items: center;
    /* height: 6rem; */
}
.item-detail img{
    border-radius: 50%;
}
.custom-item :active{
    background-color: burlywood;
}
.select {
    background-color: red;
}

.heading{
    font-size: large;
    color: black;
}

.tutorial-container{
    height: 50vh;
    width: 50vh;
    overflow-x: scroll;
}