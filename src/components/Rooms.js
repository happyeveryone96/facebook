import React from 'react';
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";

import './Rooms.css';

function Rooms() {
    return (
        <div className="rooms">
            <div className="make__rooms">
                <VideocamIcon style={{color:'purple'}}/>
                <p>룸스 만들기</p>
            </div>

            <div className="avatars">
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
                <Avatar style={{margin:'10px'}}/>
            </div>
        </div>
    )
}

export default Rooms
