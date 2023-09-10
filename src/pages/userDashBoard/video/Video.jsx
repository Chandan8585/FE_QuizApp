import React from 'react';
import "./video.css"
export default function Video(props) {
    return (
        <div className="video-container">
            <div className="video-content">
                <iframe src={props.link} className="video-iframe"></iframe>
                <div className="video-details">
                    <div className="video-title">Title: {props.title}</div>
                    <p className="video-description">Description: {props.description}</p>
                </div>
            </div>
        </div>
    );
}
