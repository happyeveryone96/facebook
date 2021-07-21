import React from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import ShareIcon from "@material-ui/icons/Share";



function Post({profilePic, image, username, timestamp, message}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username? username : '연다은'}</h3>
                    {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
                    <p>{timestamp? timestamp : '12분'}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>

            <div className="post__image">
                <img src={image} alt=""/>
            </div>

            <div className="post__counts">
                <div className="post__count">
                    <p>211</p> 
                </div>

                <div className="post__count__right">
                    <div className="post__count">
                        <p>댓글 56개</p> 
                    </div>

                    <div className="post_count">
                        <p>공유 2회</p> 
                    </div>
                </div>
            </div>

            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon/>
                    <p>좋아요</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineIcon/>
                    <p>댓글 달기</p>
                </div>
                <div className="post__option">
                    <ShareIcon/>
                    <p>공유하기</p>
                </div>
            </div>
        </div>
    )
}
 
export default Post