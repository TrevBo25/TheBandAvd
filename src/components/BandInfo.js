import React from 'react';

import Member from './Member'

const BandInfo = () =>{
    return(
        <div className="bandinfoholder">
            <Member flip={false}/>
            <hr />
            <Member flip={true}/>
            <hr />
            <Member flip={false}/>
            <hr />
            <Member flip={true}/>
        </div>
    )
}

export default BandInfo;