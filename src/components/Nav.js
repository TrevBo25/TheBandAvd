import React, {Component} from 'react';

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      background: "dark"
    }
  }

  listenScrollEvent = e => {
    console.log(window.scrollY);
    if (window.scrollY > 1000 && window.scrollY < 2874) {
      this.setState({background: "light"})
    } else {
      this.setState({background: "dark"})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className={this.state.background}>
        <div className="navbuttonholder">
          <a href="#home"><span className="lilnav">HOME</span></a>
          <a href="#band"><span className="lilnav">THE BAND</span></a>
          <a href="#tour"><span className="lilnav">TOUR</span></a>
          <a href="#media"><span className="lilnav">MEDIA</span></a>
          {/* <a href="#store"><span className="lilnav">STORE</span></a> */}
          <a href="#contact"><span className="lilnav">CONTACT</span></a>
        </div>
      </div>
    )
  }
}
