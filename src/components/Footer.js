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
