import React from "react";
import Widgets from "../components/Widgets"
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const PostList = (props) => {
    return (
        <React.Fragment>
            <Sidebar />
            <Feed/>
            <Widgets />
        </React.Fragment>
        
    )
}


export default PostList;