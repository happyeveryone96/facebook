import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import SignUpModal from "./SignUpModal";

import Post from './Post';
import Rooms from './Rooms';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <SignUpModal />
            {/* MessageSender */}
            <Rooms/>
            <Post
            profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhQIf8hw2HQqTD6CMzRg3kKvQjX_PY7kpRw&usqp=CAU'
            message='WoW'
            timestamp='This is a timestamp'
            username='dogggg'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD86QHQVJAnrh-RVilO90FQjg0Yp_5acBMgg&usqp=CAU'
            />
        </div>
    )
}

export default Feed;