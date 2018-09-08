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
import Hero from './Hero';

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
          <Hero />
        </ScrollableAnchor>
        <div className="whitebar" ></div>
        <ScrollableAnchor id={'band'}>
          <TheBand />
        </ScrollableAnchor>
        <div className="whitebar" ></div>
        <ScrollableAnchor id={'tour'}>
          <Tour />
        </ScrollableAnchor>
        <ScrollableAnchor id={'media'}>
          <Media />
        </ScrollableAnchor>
        <ScrollableAnchor id={'store'}>
          <Store />
        </ScrollableAnchor>
        <div className="whitebar" ></div>
        <div className="gifholder" ></div>
        <div className="whitebar"></div>
        <ScrollableAnchor id={'contact'}>
          <Contact />
        </ScrollableAnchor>
        <Footer />
      </div>
    )
  }
}
