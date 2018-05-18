import React, {Component} from 'react';

import TourDate from './TourDate';

export default class Tour extends Component{

  render(){
    return(
      <div className="tourholder">
        <h1 className="tourtitle">TOUR</h1>
        <div className="tourdateholder">
          <h3 className="toursubtitle">Upcoming Shows</h3>
          <div className="dateholder">
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
            <TourDate />
          </div>
        </div>
      </div>
    )
  }
}