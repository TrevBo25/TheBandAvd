import React from 'react';

const Member = ({flip}) => {
    return(
        <div className={flip ? "memberholderflip" : "memberholder"}>
            <div className="memberphoto">
                <img src="http://3.bp.blogspot.com/-Y4-tPEAfFls/TgMs1KnIyOI/AAAAAAAAAh8/gocIwiJr-rw/s1600/nedstark.png" alt="Band Member Image" className="memberimg" />
            </div>
            <div className="memberinfo">
                <h3 className="memberjob">Warden of the North / Dead Dude</h3>
                <h1 className="membername">Eddard Stark</h1>
                <p className="memberbio">Lord Eddard Stark, also known as Ned Stark, was the head of House Stark, the Lord of Winterfell, Lord Paramount and Warden of the North, and later Hand of the King to King Robert I Baratheon. He was the older brother of Benjen, Lyanna and the younger brother of Brandon Stark. He is the father of Robb, Sansa, Arya, Bran and Rickon by his wife, Catelyn Tully, and uncle of Jon Snow, who he raised as his bastard son. He was a dedicated husband and father, a loyal friend and an honorable lord.</p>
            </div>
        </div>
    )
}

export default Member;