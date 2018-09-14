import React, {Component} from 'react';
import HamburgerMenu from 'react-hamburger-menu';

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      background: "dark",
      open: false
    }
  }

  listenScrollEvent = e => {
    var bodytop = document.body.getBoundingClientRect().top;
    var bandtop = document.getElementById("theband").getBoundingClientRect().top;
    var mediatop = document.getElementById("mediael").getBoundingClientRect().top;
    if ((window.scrollY + 56) > (bandtop - bodytop) &&(window.scrollY + 56) < (mediatop - bodytop)) {
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
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
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
        <div className="mobilenav">
          <h1 className="mobiletitle">THE BAND AVON DALE</h1>
          <div className="hamburger">
            <HamburgerMenu
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={24}
              height={22}
              strokeWidth={1}
              rotate={0}
              color={this.state.background === "dark" ? 'white' : 'black'}
              borderRadius={0}
              animationDuration={0.5}
            />
          </div>
          <div className={this.state.open ? "dropdown" : "dropdownno"}>
            <div className="dholder">
              <div className="navwords"><a href="#home"><span className="lilnav">HOME</span></a></div>
              <div className="navwords"><a href="#band"><span className="lilnav">THE BAND</span></a></div>
              <div className="navwords"><a href="#tour"><span className="lilnav">TOUR</span></a></div>
              <div className="navwords"><a href="#media"><span className="lilnav">MEDIA</span></a></div>
              <div className="navwords"><a href="#contact"><span className="lilnav">CONTACT</span></a></div>
              <div className="navwords"><a href="http://signalflowpr.com/avon-dale/" target="_blank" rel="noopener noreferrer" ><span className="lilnav">EPK</span></a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
