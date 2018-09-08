import React, {Component} from 'react';

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      background: "dark"
    }
  }

  listenScrollEvent = e => {
    var bodytop = document.body.getBoundingClientRect().top;
    var bandtop = document.getElementById("theband").getBoundingClientRect().top;
    var mediatop = document.getElementById("mediael").getBoundingClientRect().top;
    if ((window.scrollY + 54) > (bandtop - bodytop) &&(window.scrollY + 54) < (mediatop - bodytop)) {
      this.setState({background: "light"})
    } else {
      this.setState({background: "dark"})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    console.log( window.innerWidth, window.innerHeight );
  }

  render() {
    return (
      <div className={this.state.background}>
        <div className="navbuttonholder">
          <a href="#home"><span className="lilnav">HOME</span></a>
          <a href="#band"><span className="lilnav">THE BAND</span></a>
          <a href="#tour"><span className="lilnav">TOUR</span></a>
          <a href="#media"><span className="lilnav">MEDIA</span></a>
          <a href="#contact"><span className="lilnav">CONTACT</span></a>
          <a href="http://signalflowpr.com/avon-dale/" target="_blank" rel="noopener noreferrer" ><span className="lilnav">EPK</span></a>
        </div>
      </div>
    )
  }
}
