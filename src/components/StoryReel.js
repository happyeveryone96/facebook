import React from 'react';
import Story from './Story';
import './StoryReel.css';
import ArrowRightAltTwoToneIcon from '@material-ui/icons/ArrowRightAltTwoTone';

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4N8cMkO-iH2_uLa81IUOjpaQuazCofceQBg&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQX1J1OCW6-8DmB6eYYVM__XX9zKx8gAfW2Q&usqp=CAU"
            title="Jay" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpBa_49MxYoQrzgt5WvrTR2bozCdSsIBCRDA&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCGpdyz4G6QXgU6tQgfa3d8QBsLy02cKMPw&usqp=CAU"
            title="Frankie" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_akifMI9zohwaVXcmM6oD_o0Jt65w9UH4ZA&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz3gtWuYs1ZBtpCeVPwQTiAtds5xLNuLP2WA&usqp=CAU"
            title="James" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbvN09GRh7I_fMnd9Dp9IctN7OyjJ3oTp5xQ&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl9aJgPD4kRSdV9HSYqadQsEzojzhMhz1vmg&usqp=CAU"
            title="POPO" />
            <Story
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNrg1g4GuzegRkczKQAbgImsSvHauKIORAiw&usqp=CAU"
            profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjkrYz-hPQYmtoKPYsSsEIPovttmPpkb5Gw&usqp=CAU"
            title="HIHI"/>
            <button className="arrowButton"><ArrowRightAltTwoToneIcon/></button>


            
        </div>
    )
}

export default StoryReel;