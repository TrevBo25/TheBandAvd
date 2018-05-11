import React, {Component} from 'react';
import { Parallax } from 'react-scroll-parallax';
import {Link} from 'react-router-dom';
import { CLIENT_RENEG_WINDOW } from 'tls';

import Nav from './Nav'

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.pageYOffset > 722 && !this.state.show){
      this.setState({show:true})
    } else if (window.pageYOffset < 722 && this.state.show){
      this.setState({show:false})
    }
  }

  render(){
    console.log(window.pageYOffset)
    return(
      <div className="holder" >
        <div></div>
          <Nav />
        <div style={{"overflow":"hidden"}}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={100}
            offsetYMin={-100}
            slowerScrollRate
            tag="figure"
          >
            <img src='https://s3.us-east-2.amazonaws.com/thebandavd/AVDLogoNBG.png' alt='AVD Band logo' style={styles.logo}/>
          </Parallax>
        </div>
        <div className="middle" >
          <div className="middleholder">
            <h1 style={{"fontSize": "50px", "textAlign": "center"}}>This is where some information about the new album could go</h1>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Spotify song/album links</h3>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Album Art</h3>
            <h3 style={{"fontSize": "30px", "textAlign": "center"}}>Purchase now spot</h3>
            <p style={{"fontSize": "15px", "textAlign": "center"}}>Some of you favorite lyrics from a few songs could carousel here: <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
        <div style={{"overflow":"hidden", }}>
          <Parallax
            styleOuter={styles.hero}
            offsetYMax={200}
            offsetYMin={-200}
            slowerScrollRate
            tag="figure"
          >
            <img src='https://s3.us-east-2.amazonaws.com/thebandavd/AvonDaleStudio-126.jpg' alt='AVD Band picture' style={styles.logo}/>
          </Parallax>
        </div>
        <div style={styles.gifholder}>
        </div>
        <div className="footer">
          <div className="footerholder">
            <h1 style={{"fontSize": "60px", "textAlign": "center"}}>This is the footer</h1>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Here is where the contact information and such will go</h3>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Twitter, YoutTube, Facebook, Spotify, All the good stuff</h3>
            <h3 style={{"fontSize": "25px", "textAlign": "center"}}>Also we can put a email news letter sign up input here if you so choose</h3>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  hero: {
    "width": "100%",
    "minHeight": "100vh",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center"
  },
  logo:{
    "width": "100%",
    "height": "auto",
    "objectFit": "cover",
    "margin": "0 auto"
  },
  gifholder:{
    "height": "800px",
    "width": "100%",
    "backgroundImage": `url(${'https://s3.us-east-2.amazonaws.com/thebandavd/avdcolor.gif'})`,
    "backgroundSize": "cover",
  }
}