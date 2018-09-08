import React from 'react';

const Member = ({flip, photo, job, name}) => {
    return(
        <div className={flip ? "memberholderflip" : "memberholder"}>
            <div className="memberphoto">
                <img src={photo} alt="" className="memberimg" />
            </div>
            <div className="memberinfo">
                <h3 className="memberjob">{job}</h3>
                <h1 className="membername">{name}</h1>
            </div>
        </div>
    )
}

export default Member;