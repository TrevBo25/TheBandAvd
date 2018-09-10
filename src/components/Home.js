import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'

import Nav from './Nav';
import Footer from './Footer';
import TheBand from './TheBand';
import Tour from './Tour';
import Media from './Media';
import Store from './Store';
import Hero from './Hero';
import gif from '../styles/assets/AVDgif.gif';

export default class Home extends Component {
  constructor(){
    super()
    this.state = {
    }
  }

  componentWillMount(){
    configureAnchors({offset: -54, scrollDuration: 600})
  }

  render(){
    return(
      <div className="holder">
          <Nav />
        <ScrollableAnchor id={'home'}>
          <Hero />
        </ScrollableAnchor>
        <div className="whitebar" ></div>
        <ScrollableAnchor id={'band'}>
          <TheBand />
        </ScrollableAnchor>
        <ScrollableAnchor id={'tour'}>
          <Tour />
        </ScrollableAnchor>
        <ScrollableAnchor id={'media'}>
          <Media />
        </ScrollableAnchor>
        <div className="whitebar" ></div>
        <div className="gifholder" >
          <img src={gif} alt="" className="thegif" />
        </div>
        <div className="whitebar"></div>
        <ScrollableAnchor id={'contact'}>
          {/* <Contact /> */}
          <Footer />
        </ScrollableAnchor>
      </div>
    )
  }
}
