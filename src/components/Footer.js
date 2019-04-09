import React, {Component} from 'react';
import SubscribePage from './SubscribePage';

export default class Footer extends Component {

    render(){
        return (
            <div className="footer">
                <div className="logoholder">
                    <img className="logofooter" src="https://s3.us-east-2.amazonaws.com/thebandavd/AVDLogoNBGWhite.png" alt="AVD Logo" />
                    <div className="socialmediaholder">
                        <a href="https://twitter.com/avdbnd?lang=en" target="_blank" rel="noopener noreferrer" ><i className="smicon fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/thebandavondale/" target="_blank" rel="noopener noreferrer" ><i className="smicon fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/thebandavondale/" target="_blank" rel="noopener noreferrer" ><i className="smicon fab fa-instagram"></i></a>
                        <a href="https://www.youtube.com/user/thebandavondale" target="_blank" rel="noopener noreferrer" ><i className="smicon fab fa-youtube"></i></a>
                        <a href="https://open.spotify.com/artist/1s6Fgx0rDx46sATrAURbq5" target="_blank" rel="noopener noreferrer" ><i className="smicon fab fa-spotify"></i></a>
                    </div>
                    <div className="booking">
                        <div className="al-booking">
                            <p className="booking-title">Booking information:</p>
                            <p className="booking-text">Nightclubs and restaurants</p>
                            <p className="booking-text">Alec Heist</p>
                            <p className="booking-text">(309) 781-4324</p>
                        </div>
                        <div className="al-booking">
                            <p className="booking-title">All other booking inquiries:</p>
                            <p className="booking-text">Rollin Riggs</p>
                            <p className="booking-text">Riggs Entertainment LLC</p>
                            <p className="booking-text">(901) 341-6565</p>
                            <p className="booking-text">rollin@riggsentertainmentllc.com</p>
                            <a href="https://riggsentertainmentllc.com/entertainers/avon-dale" target="_blank" rel="noopener noreferrer"><span className="booking-text underline">Avon Dale on Riggs Entertainment!</span></a>
                        </div>
                    </div>
                </div>
                <div className="emailholder">
                    <h2 className="emailtitle">Don't Miss Out!</h2>
                    <p className="emailwords">Sign-up for the newsletter to stay up to date with what the guys are up to!</p>
                    <SubscribePage />
                </div>
            </div>
        )
    }
}
