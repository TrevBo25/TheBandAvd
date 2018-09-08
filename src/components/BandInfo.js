import React from 'react';

import Member from './Member'

const BandInfo = () =>{
    return(
        <div className="bandinfoholder">
            <Member flip={false} photo="https://s3.us-east-2.amazonaws.com/thebandavd/andrew.jpg" job="Bass Guitar" name="Andrew Allen"/>
            <hr />
            <Member flip={true} photo="https://s3.us-east-2.amazonaws.com/thebandavd/al.jpg" job="Drums" name="Alec Heist"/>
            <hr />
            <Member flip={false} photo="https://s3.us-east-2.amazonaws.com/thebandavd/con.jpg" job="Lead Vocals" name="Conrad Polz"/>
            <hr />
            <Member flip={true} photo="https://s3.us-east-2.amazonaws.com/thebandavd/pat.jpg" job="Guitar" name="Patrick Vaughan"/>
        </div>
    )
}

export default BandInfo;