import React from 'react';

const Nav = () => {
  return (
    <div className="bignav">
      <a href='/'><span className="lilnav">Home</span></a>
      <a href="/band"><span className="lilnav">The Band</span></a>
      <a href="/tour"><span className="lilnav">Tour</span></a>
      <a href="/media"><span className="lilnav">Media</span></a>
      <a href="/store"><span className="lilnav">Store</span></a>
      <a href="/contact"><span className="lilnav">Contact</span></a>
    </div>
  )
}

export default Nav;