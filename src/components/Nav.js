import React, {Component} from 'react';

const Nav = () => {
  return (
    <div className="bignav">
      <a href='/'><span className="lilnav">Home</span></a>
      <a href="/band"><span className="lilnav">The Band</span></a>
      <span>Tour</span>
      <span>Media</span>
      <span>Store</span>
      <span>Contact</span>
    </div>
  )
}

export default Nav;