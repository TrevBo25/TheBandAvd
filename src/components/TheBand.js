import React, {Component} from 'react';
import BandInfo from './BandInfo';

export default class TheBand extends Component {
  constructor(){
    super()
    this.state = {
      show: false
    }

    this.toggleBand = this.toggleBand.bind(this);
  }

  componentWillMount(){
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount(){
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick = (e) => {
    if(this.bandHolder){
      if(this.bandHolder.contains(e.target) || this.learnButton.contains(e.target)){
        return;
      }
  
      this.toggleBand(false)
    }
  }

  toggleBand(showModal){
    console.log('showModal', showModal, 'state', this.state.show);
    if(this.state.show && showModal){
      console.log('hit');
      return;
    }
    this.setState((state) => ({show: showModal}))
  }
  

  render(){
    return(
      <div className="bandholder">
        {this.state.show ? <div className="modalholder" ref={bandHolder => this.bandHolder = bandHolder}><BandInfo /></div> : null}
        <h1 className="bandtitle">The Band Avon Dale</h1>
        <div className="infoholder">
          <p className="bandinfo">
          <br />
          A few years ago, the band Avon Dale played a series of shows to bid farewell to its founding guitarist, leaving the band to teach abroad. That mini-tour hit three cities, each of which could stake a claim at being the band’s hometown: Champaign-Urbana, Chicago, and Memphis.
          <br />
          <br />
          The band first formed in the cornfields of the Midwest in their college town of Champaign-Urbana. Chicago was home, where they found their most loyal fanbase. And in 2013, they moved to Memphis, where they found the legendary Ardent Studios and producer/engineer Mike Wilson, who has helmed all three of their records – EPs <i>Dress it Up</i> (2014) and <i>Little Ditty</i> (2016), and their forthcoming debut full-length, <i>Whiskey and Sherbet</i>. 
          <br />
          <br />
          But fittingly those cities also serve as a sort of sonic road map for Avon Dale, whose sound is Midwest roots rock meets Chicago blues meets Southern soul. They’ve spent plenty of time tearing up the roads between those cities, and across the country, touring steadily since the release of their debut EP. Their 2017 summer outing, dubbed the Strings and Rust Tour after a lyric on the <i>Little Ditty</i> EP, was both an initiation and a three-month long celebration – they’d quit their day jobs to pursue music full-time. 
          <br />
          <br />
          With so much time spent on the road, it’s no surprise that the four-piece – Conrad Polz (lead vocal, guitar), Alec Heist (drums), Drew Allen (bass), Patrick Vaughan (guitar) – is a powerful live act. Their tight rhythm section, blues-inspired electric guitar riffs and soulful vocals make them danceable, drinkable, perfect for your fleeting night out – and their songs, which range from tender and plaintive to gritty and wry, are what bring you back as a lifelong fan. 
          <br />
          <br />
          </p>
        </div>
        <div className="bandimgholder">
          <img src="https://s3.us-east-2.amazonaws.com/thebandavd/GroupCropped.jpg" alt="" className="bandimg"/>
        </div>
        {this.state.show ? <div className="bandbutton" ref={learnButton => this.learnButton = learnButton} onClick={()=> this.toggleBand(false)}>LEARN LESS</div> : <div className="bandbutton" onClick={()=> this.toggleBand(true)}>LEARN MORE</div>}
      </div>
    )
  }
}