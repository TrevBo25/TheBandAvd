import React, {Component} from 'react';
import { Parallax } from 'react-scroll-parallax';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import Nav from './Nav';
import Footer from './Footer';
import TheBand from './TheBand';
import Tour from './Tour';
import Media from './Media';
import Store from './Store';
import Contact from './Contact';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentWillMount(){
    configureAnchors({offset: -56, scrollDuration: 600})
  }

  render(){
    return(
      <div className="holder">
        <Nav />
        <ScrollableAnchor id={'home'}>
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
        </ScrollableAnchor>
        <div style={styles.whitebar}></div>
        <ScrollableAnchor id={'band'}>
          <TheBand />
        </ScrollableAnchor>
        <div style={styles.whitebar}></div>
        <ScrollableAnchor id={'tour'}>
          <Tour />
        </ScrollableAnchor>
        <ScrollableAnchor id={'media'}>
          <Media />
        </ScrollableAnchor>
        <ScrollableAnchor id={'store'}>
          <Store />
        </ScrollableAnchor>
        <div style={styles.whitebar}></div>
        <div style={styles.gifholder}></div>
        <div style={styles.whitebar}></div>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
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
  },
  whitebar:{
    "height": "3px",
    "width": "100%",
    "backgroundColor": "white"
  }
}