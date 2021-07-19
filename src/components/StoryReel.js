import React from 'react';
import Story from './Story';
import './StoryReel.css';
import ArrowRightAltTwoToneIcon from '@material-ui/icons/ArrowRightAltTwoTone';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="Jay" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="Frankie" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="James" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="Rudy" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="HIHI"/>
            <button className="arrowButton"><ArrowRightAltTwoToneIcon/></button>


            
        </div>
    )
}

export default StoryReel;