import React from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import SignUpModal from "./SignUpModal";
import { useEffect, useState } from 'react';
import post, {actionCreators as postActions} from '../redux/modules/post';
import {useDispatch} from "react-redux";
import axios from 'axios';

import Post from './Post';
import Rooms from './Rooms';
import { Sort } from '@material-ui/icons';

function Feed() {
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);
    const getData = async() => {
        try{
            const response = await axios.get('http://localhost:3001/post');  
            setPosts(response.data);  
            console.log(response.data);
            console.log(response.data[0]);
            console.log(posts[0].content)
          }
        catch(e){
            console.log(e);
          }
    }
    useEffect(() => 
    {
        dispatch(postActions.getPostDB());
        getData();
      }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            {/* MessageSender */}
            <Rooms/>
            {posts.map(post => (
            <Post
                key={post.id}
                profilePic={post.profileImage}
                message={post.content}
                timestamp={post.createdAt}
                username={post.name}
                image={post.image}
            />
            ))}

            <Post
            profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhQIf8hw2HQqTD6CMzRg3kKvQjX_PY7kpRw&usqp=CAU'
            message='Hi'
            timestamp='This is a timestamp'
            username='dogggg'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD86QHQVJAnrh-RVilO90FQjg0Yp_5acBMgg&usqp=CAU'
            />
            <Post
            profilePic='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhQIf8hw2HQqTD6CMzRg3kKvQjX_PY7kpRw&usqp=CAU'
            message='WoW'
            timestamp='This is a timestamp'
            username='dogggg'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD86QHQVJAnrh-RVilO90FQjg0Yp_5acBMgg&usqp=CAU'
            />
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