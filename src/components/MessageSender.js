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
import {useDispatch} from "react-redux";
import {Button, Grid, Input} from "../elements/index";
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';
import ForumSharpIcon from '@material-ui/icons/ForumSharp';
import LocationOnSharpIcon from '@material-ui/icons/LocationOnSharp';
import MoreHorizSharpIcon from '@material-ui/icons/MoreHorizSharp';
import UploadButtons from './UploadButtons'


function MessageSender() {
    // const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);



    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
      };

    const handleClose = (e) => {
       
        setOpen(false);
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
                            정진우님, 무슨 생각을 하고 계신가요?  
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
                            <p style={{fontSize:'15px', fontWeight:'bold'}}>정진우</p>
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
                                    placeholder="정진우님,무슨 생각을 하고 계신가요?">
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
                                _onClick={handleClose} 
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