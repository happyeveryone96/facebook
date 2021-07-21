import { Avatar } from '@material-ui/core';
import React from 'react';
import './MessageSender.css';
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {useDispatch, useSelector} from "react-redux";
import {Button, Grid, Input} from "../elements/index";
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import UploadButtons from './UploadButtons'
import {actionCreators as postActions} from '../redux/modules/post';
import {actionCreators as imageActions} from '../redux/modules/image';
import { history } from '../redux/configureStore';



function MessageSender() {
    // function timeForToday(value) {
    //     const today = new Date();
    //     const timeValue = new Date(value);

    //     const betweenTime = Math.floor((today.getTime() - timeValue.getTime()) / 1000 / 60);
    //     if (betweenTime < 1) return '방금전';
    //     if (betweenTime < 60) {
    //         return `${betweenTime}분전`;
    //     }

    //     const betweenTimeHour = Math.floor(betweenTime / 60);
    //     if (betweenTimeHour < 24) {
    //         return `${betweenTimeHour}시간전`;
    //     }

    //     const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
    //     if (betweenTimeDay < 365) {
    //         return `${betweenTimeDay}일전`;
    //     }

    //     return `${Math.floor(betweenTimeDay / 365)}년전`;
    // }

    const date = new Date();
    let currentHour = date.getHours();
    let currentMinute = date.getMinutes();
    let currentYear = date.getFullYear();
    let currentMonth = ("0" + (1 + date.getMonth())).slice(-2);
    let currentDay = ("0" + date.getDate()).slice(-2);
    // const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    // const preview = useSelector((state) => state.image.preview);
    // const post_list = useSelector((state) => state.post.list);
    const [contents, setContents] = React.useState("");
    const [name, setName] = React.useState('');
    // const [createdAt, setCreatedAt] = React.useState(timeForToday(`${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}`));
    const [createdAt, setCreatedAt] = React.useState(`${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinute}`);
    const [content, setContent] = React.useState('');
    const [image, setImage] = React.useState('');
    const [profileImage, setProfileImage] = React.useState('');

    const changeContents = (e) => {
        setContents(e.target.value);
        // console.log(e.target.value)
    }


    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
      };

      const addPost = () => {
        dispatch(postActions.addPostDB(name, createdAt, content, image, profileImage));
        console.log(contents);
        // uploadDB();
        handleClose();
      };

    const handleUploadButtonOpen = () => {
        const loadButton = document.getElementsByClassName('uploadButtons');
        // console.log(loadButton[0].style['0']);
        // console.log(loadButton[0].style);
        // console.log(loadButton[0].style['cssText']);
        if(loadButton[0].style['cssText'] === "display: none;") {
            loadButton[0].style['cssText'] = "display: block;"
        } 
    }

    const handleUploadButtonClose = () => {
        const loadButton = document.getElementsByClassName('uploadButtons');
        // console.log(loadButton[0].style['0']);
        // console.log(loadButton[0].style);
        // console.log(loadButton[0].style['cssText']);
        if(loadButton[0].style['cssText'] === "display: block;") {
            loadButton[0].style['cssText'] = "display: none;"
        } 
    }



    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form>
                    <button 
                        onClick={handleClickOpen} 
                        className="messageSender__button">
                            연다은님, 무슨 생각을 하고 계신가요?  
                    </button>
                    <div>
                        <Dialog  style={{width:'700px', margin:'auto'}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">

                            <DialogTitle 
                                style={{margin:'auto', 
                                        width:'450px', 
                                        textAlign:'center', 
                                        borderBottom:'1px solid lightgray'}} 
                                id="form-dialog-title">
                                게시물 만들기
                            </DialogTitle>
                            
                            <Grid is_flex>
                            <Avatar style={{margin:'10px 0 20px 20px'}}/>
                            <Grid margin="-10px 20px">
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>연다은</p>
                            <Button
                                margin="-4px 0 10px -4px"
                                color="black" 
                                backgroundColor="#E4E6EB" 
                                // padding="4px 0 10px 0" 
                                padding="4px 8px"
                                fontSize="13px" 
                                width="81.75px" 
                                height="24px">친구만</Button>
                            </Grid>
                            </Grid>
                            
                            <DialogContent>
                            <DialogContentText>
                                <textarea 
                                    style={{resize:'none',
                                            width:'430px', 
                                            fontSize:'20px', 
                                            border:'none', 
                                            overflow:'hidden',
                                            margin:'0 10px'}} 
                                    rows='4' 
                                    placeholder="정진우님,무슨 생각을 하고 계신가요?"
                                    onChange={(event) => {
                                        setContent(event.target.value)}}>
                                </textarea>
                                
                                <div className="uploadButtons" 
                                    style={{display:'none'}}>
                                <UploadButtons/>
                                <button style={{backgroundColor:'white', 
                                                border:'0', 
                                                width:'30px', 
                                                height:'30px', 
                                                borderRadius:'30px', 
                                                color:'gray',
                                                position: 'relative',
                                                left:'415px',
                                                bottom:'200px'
                                                }}
                                        onClick={()=>handleUploadButtonClose()}
                                >X</button>
                                </div>
                            
                            </DialogContentText>
                            
                            <div style={{border:'1px solid lightgray', 
                                        borderRadius:'5px', 
                                        padding:'5px', 
                                        width:'450px',
                                        margin:'auto'}}>
                            <Grid is_flex>
                                <Grid>
                                <p>게시물에 추가</p>
                                </Grid>
                                <Grid is_flex>
                                <PhotoLibraryIcon onClick={()=>handleUploadButtonOpen()} style={{color:'green'}}/>
                                <PersonAddSharpIcon style={{color:'blue'}}/>
                                <InsertEmoticonIcon style={{color:'orange'}}/>
                                <LocationOnSharpIcon style={{color:'red'}}/>
                                <ForumSharpIcon style={{color:'red'}}/>
                                <MoreHorizSharpIcon />
                                </Grid>
                            </Grid>
                            </div>
                            
                            </DialogContent>
                            <DialogActions>
                           
                            <Button 
                                width="468px" 
                                height="36px" 
                                _onClick={addPost} 
                                color="white" 
                                backgroundColor="rgb(68,114,227)">
                                게시
                            </Button>
                            
                            </DialogActions>
                        </Dialog>
                     </div>
                    
                    {/* <input 
                        className="messageSender__input"
                        placeholder='무슨 생각을 하고 계신가요?'/> */}
                    {/* <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button> */}
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                <VideocamIcon style={{color:'red'}}/>
                <h3>라이브 방송</h3> 
                </div>

                <div className="messageSender__option">
                <PhotoLibraryIcon style={{color:'green'}}/>
                <h3>사진/동영상</h3> 
                </div>

                <div className="messageSender__option">
                <InsertEmoticonIcon style={{color:'orange'}}/>
                <h3>기분/활동</h3> 
                </div>
            </div>

        </div>
    )
}

export default MessageSender