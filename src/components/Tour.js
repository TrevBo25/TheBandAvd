import React, {Component} from 'react';

export default class Tour extends Component{

  render(){
    return(
      <div className="tourholder">
        <h1 className="tourtitle">TOUR</h1>
        <div className="tourdateholder">
          <div className="dateholder">
          <a  class="bit-widget-initializer" 
              data-artist-name="The Band Avon Dale" 
              data-display-local-dates="false" 
              data-display-past-dates="true" 
              data-auto-style="false" 
              data-text-color="#1a1a1a" 
              data-link-color="#007577" 
              data-popup-background-color="#EFFCFA" 
              data-background-color="#EFFCFA" 
              data-display-limit="20" 
              data-link-text-color="#FFFFFF">
            </a>
          </div>
        </div>
      </div>
    )
  }
}