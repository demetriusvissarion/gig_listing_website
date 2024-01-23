import React from "react";
import './Gig.css';

const Gig = () => {
    const imageUrl = "/assets/queen.jpg";

    return (    
        <div id="gig-container">
            <h3 id="band-name">Queen</h3>
            <div>
                <img id="band-image" src={imageUrl} alt="Description of the image" />
            </div>
            <p id="band-description">Makers' favourite rock band</p>
            <p id="event-time">Event date: 26/01/2024 @20:00</p>
            <p id="event-location">Location: O2 Arena</p>
        </div>
    );
};

export default Gig;
