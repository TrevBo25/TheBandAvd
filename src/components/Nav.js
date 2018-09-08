import React, {Component} from 'react';

// const Nav = () => {
//   return (
//     <div className="bignav">
//       <div className="navbuttonholder">
//         <a href="#home"><span className="lilnav">HOME</span></a>
//         <a href="#band"><span className="lilnav">THE BAND</span></a>
//         <a href="#tour"><span className="lilnav">TOUR</span></a>
//         <a href="#media"><span className="lilnav">MEDIA</span></a>
//         <a href="#store"><span className="lilnav">STORE</span></a>
//         <a href="#contact"><span className="lilnav">CONTACT</span></a>
//       </div>
//     </div>
//   )
// }

// export default Nav;

export default class Nav extends Component {
  constructor() {
    super()
    this.state = {
      background: styles.dark,
      lil: styles.lilnavdark
    }
  }

  listenScrollEvent = e => {
    if (window.scrollY > 1000) {
      this.setState({background: styles.orange, lil: styles.lilnavlight})
    } else {
      this.setState({background: styles.dark, lil: styles.lilnavdark})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className="bignav" style={this.state.background}>
        <div className="navbuttonholder">
          <a href="#home"><span className="lilnav" style={this.state.lil} >HOME</span></a>
          <a href="#band"><span className="lilnav" style={this.state.lil} >THE BAND</span></a>
          <a href="#tour"><span className="lilnav" style={this.state.lil} >TOUR</span></a>
          <a href="#media"><span className="lilnav" style={this.state.lil} >MEDIA</span></a>
          <a href="#store"><span className="lilnav" style={this.state.lil} >STORE</span></a>
          <a href="#contact"><span className="lilnav" style={this.state.lil} >CONTACT</span></a>
        </div>
      </div>
    )
  }
}

const styles = {
  dark: {
    "backgroundColor": "#202020",
    "borderTop": "2px white solid",
    "borderBottom": "2px white solid"
  },
  lilnavdark: {
    "color": "white"
  },
  orange: {
    "backgroundImage": "url('https://s3.us-east-2.amazonaws.com/thebandavd/Selection_004.png')"
  },
  lilnavlight: {
    "color": "black"
  }  
}