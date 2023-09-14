import React from 'react';
import "./video.css"
import { useLecture } from '../../../components/context/lectureContext';
export default function Video() {
    const {link, title, description} = useLecture();
    console.log("link ", title, description);
    return (
        <div className="video-container">
            <div className="video-content">
                <iframe src={link} className="video-iframe"></iframe>
                <div className="video-details">
                    <div className="video-title">Title: {title}</div>
                    <p className="video-description">Description: {description}</p>
                </div>
            </div>
        </div>
    );
}
