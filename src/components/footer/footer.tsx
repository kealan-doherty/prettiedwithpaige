import react from 'react';
import img1 from './paige3.jpeg';
import img2 from './paige4.jpeg';
import img3 from './paige5.jpeg';
import img4 from './paige6.jpeg';

const Footer = () => {
    return(
        <footer className = 'footer'>
            <div>
                <h2 className = 'personalStateHeading'>About Me:</h2>
                <p className = 'personalState'>person statement will go here when you write one
                    khdfkjaflfsfsdfhdfhsssssssssjsdfkskjf
                    adjskfskdfdsfskfdskfdfs
                    sdkfjhasdsdksdsdfsdfkadshfshdfkjsdksdaf
                    sdfhjhsfkhsdfksdfksdfshdfkjsdksdasdsdfk
                </p>
            </div>

            <h2 className = 'bookingHeader'> 
                Booking Infomation
            </h2>
            <img src = {img1} className = 'infoImg1'/>
            <img src = {img2} className = 'infoImg2'/>
            <img src = {img3} className = 'infoImg3'/>
            <img src = {img4} className = 'infoImg4'/>
        </footer>
    );
}

export default Footer;