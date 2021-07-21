import React from "react";
import Widgets from "../components/Widgets"
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Header from '../components/Header';

const PostList = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Sidebar />
            <Feed />
            <Widgets />
        </React.Fragment>
    )
}


export default PostList;