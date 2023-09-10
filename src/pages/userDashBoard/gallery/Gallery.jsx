import React, { useState } from 'react'
import Data from '../Data';
import Video from '../video/Video';
import "./gallery.css"
const Gallery = () => {
    const [activeVid, setActiveVid] = useState("https://www.youtube.com/embed/0PfTU9JI6Lg?list=PLM68oyaqFM7TCNz4d5J_hxfFg8w41jTYJ")
    const [activeTitle, setActiveTitle] = useState("GFG POTD 1")
    const [description, setActiveDescription] = useState(
        "We will learn DFS of Graph in this problem"
    );
    const arr = Data;
  return (
    <div className="tutorial-container">

    <div
        className="custom-container"
        style={{ height: "min(38vw, 650px)" }}
    >
        <h3 className="">POTD-August</h3>
        <p className="px-2"> GFG Practice</p>
        {arr.map((e) => {
            return (
                <div
                    className="custom-item"
                    onClick={() => {
                        setActiveVid(e.link);
                        setActiveTitle(e.title);
                        setActiveDescription(e.description);
                    }}
                >
                    {/* <img className="" src={e.img} /> */}
                    <p className="" >{e.title}</p>
                    <p className="px-2">{e.description}</p>
                </div>
            );
        })}
    </div>
    <Video 
        link={activeVid}
        title={activeTitle}
        description={description}
    />
</div>
  )
}

export default Gallery