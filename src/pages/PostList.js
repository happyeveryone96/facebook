import React from "react";
import SignUpModal from "../components/SignUpModal"
import Post from "../components/Post";
import Feed from "../components/Feed";

const PostList = (props) => {
    return (
        <React.Fragment>
            <SignUpModal></SignUpModal>
            <Feed></Feed>
            <Post></Post>
        </React.Fragment>
        
    )
}


export default PostList;