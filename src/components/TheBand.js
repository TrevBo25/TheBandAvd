import React, {Component} from 'react';
import Nav from './Nav';
import BandInfo from './BandInfo';

export default class TheBand extends Component{
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
          <p className="bandinfo">The Legion of Doom is one of several supervillain teams that have risen up in opposition to the Justice League over the years. The team roster remains pretty fluid, but the main goal of the Legion of Doom is always the same - to join forces and ensure that the Justice League are never able to rid the world of evil through sheer, overwhelming numbers. The Legion of Doom are pretty straightforward in their goals. They don't pretend to be fighting on the right side of history or helping the innocent. After all, they have a hidden lair in a place called Slaughter Swamp. They're simply a group of pragmatic villains who reluctantly work together in order to avoid having to take on the Justice League alone. The Legion of Doom has been through many incarnations over the years, and the roster has changed quite a bit in that time. However, the original group of 13 villains introduced in the animated series Challenge of the Super Friends tends to be looked at as the gold standard. Lex Luthor, Gorilla Grodd, Bizarro, Black Manta, Brainiac, Captain Cold, Cheetah, Giganta, Riddler, Scarecrow, Sinestro, Solomon Grundy, and Toyman.</p>
        </div>
        <div className="bandimgholder">
          <img src="https://s3.us-east-2.amazonaws.com/thebandavd/GroupCropped.jpg" alt="AVD Band Photo" className="bandimg"/>
        </div>
        {this.state.show ? <div className="bandbutton" ref={learnButton => this.learnButton = learnButton} onClick={()=> this.toggleBand(false)}>LEARN LESS</div> : <div className="bandbutton" onClick={()=> this.toggleBand(true)}>LEARN MORE</div>}
      </div>
    )
  }
}