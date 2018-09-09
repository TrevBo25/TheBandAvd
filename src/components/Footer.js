import React, {Component} from 'react';
import axios from 'axios';

export default class Footer extends Component {
    constructor(){
        super()
        this.state = {
            fname: "",
            lname: "",
            email: ""
        }

        this.buildJSON = this.buildJSON.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }

    subscribe() {
        var json = this.buildJSON();
        console.log(json);
        axios.post("https://us8.api.mailchimp.com/3.0/lists/49cb96b476/members", json, {"Authorization": "apikey f6ca1735ed5ffed5b5600b229d425d94-us8"})
            .then( response => console.log(response))
            .catch(err => console.log(err))
    }

    buildJSON() {
        return {
            "email_address": `${this.state.email}`,
            "status": "subscribed",
            "merge_fields": {
                "MMERGE1": `${this.state.fname}`,
                "MMERGE2": `${this.state.lname}`
            }
        }
    }

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
                    <p className="emailwords">Sign-up for the newsletter to stay up to date with what the guys are up too!</p>
                    <div className="nameinputholder">
                        <input className="nameinput" placeholder="your first name" onChange={e => this.setState({fname: e.target.value})} value={this.state.fname}  />
                        <input className="nameinput" placeholder="your last name" onChange={e => this.setState({lname: e.target.value})} value={this.state.lname}  />
                    </div>
                    <input className="emailinput" type="email" placeholder="your@email.com" onChange={e => this.setState({email: e.target.value})} value={this.state.email} />
                    <div className="subscribebutton" onClick={this.subscribe} >Subscribe</div>
                </div>
            </div>
        )
    }
}