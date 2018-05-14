import React, {Component} from 'react';

export default class Footer extends Component {
    constructor(){
        super()
    
    }

    render(){
        return (
        <div className="footer">
            <div className="footerholder">
                <h1 style={{"fontSize": "60px", "textAlign": "center"}}>This is the footer</h1>
                <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Here is where the contact information and such will go</h3>
                <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Twitter, YoutTube, Facebook, Spotify, All the good stuff</h3>
                <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Also we can put a email news letter sign up input here if you so choose</h3>
            </div>
        </div>
        )
    }
}