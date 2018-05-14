import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(){
        super()
    
    }

    render(){
        return (
            <div className="footer">
                <div className="logoholder">
                    <img className="logofooter" src="https://s3.us-east-2.amazonaws.com/thebandavd/AVDLogoNBGWhite.png" alt="AVD Logo" />
                    <div className="socialmediaholder">
                        <i className="smicon fab fa-twitter"></i>
                        <i className="smicon fab fa-facebook-f"></i>
                        <i className="smicon fab fa-instagram"></i>
                        <i className="smicon fab fa-youtube"></i>
                        <i className="smicon fab fa-spotify"></i>
                        <i className="smicon fab fa-soundcloud"></i>
                    </div>
                </div>
                <div className="emailholder">
                    <h2 className="emailtitle">Don't Miss Out!</h2>
                    <p className="emailwords">Sign-up for the newsletter to stay up to date with what the guys are up too!</p>
                    <input className="nameinput" placeholder="Your Name" />
                    <input className="emailinput" placeholder="your@email.com" />
                    <div className="subscribebutton" >Subscribe</div>
                </div>
            </div>
        )
    }
}