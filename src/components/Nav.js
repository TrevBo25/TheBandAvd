import React from 'react';


const Nav = () => {
  return (
    <div className="bignav">
      <div className="navbuttonholder">
        <a href="#home"><span className="lilnav">HOME</span></a>
        <a href="#band"><span className="lilnav">THE BAND</span></a>
        <a href="#tour"><span className="lilnav">TOUR</span></a>
        <a href="#media"><span className="lilnav">MEDIA</span></a>
        <a href="#store"><span className="lilnav">STORE</span></a>
        <a href="#contact"><span className="lilnav">CONTACT</span></a>
      </div>
    </div>
  )
}

export default Nav;