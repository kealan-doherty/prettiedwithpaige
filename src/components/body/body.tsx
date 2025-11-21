import React from "react";
import img1 from './paige11.jpeg';
import img2 from './paige12.jpeg';
import img3 from './paige2.jpeg';
import img4 from './paige9.jpeg';

const Body = () => {
    return (
        <body className = 'body'>
                <p className="welcomeMessage"> Welcome message will go here </p>

                <img src = {img1} className="mainImage" alt = 'welcome picture'/>

                <img src = {img2} className = 'secImage'/>

                <img src = {img3} className = 'img3'/>

                <img src = {img4} className = 'img4' />
        </body>
    );
}


export default Body;