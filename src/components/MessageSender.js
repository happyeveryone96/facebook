import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam"
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibraryIcon"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticonIcon"

function MessageSender() {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <input 
                        className="messageSender__input"
                        placeholder='무슨 생각을 하고 계신가요?'/>
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <VideocamIcon style={{color:'red'}}/>
                <h3>Live Video</h3> 
                </div>
            </div>
        </div>
    )
}

export default MessageSender
