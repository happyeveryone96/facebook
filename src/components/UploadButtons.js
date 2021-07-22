import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import {actionCreators as imageActions} from '../redux/modules/image';
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        // display: 'none',
      },
    },
    input: {
      display: 'none',
    },
  }));
  
  export default function UploadButtons(props) {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [image, setImage] = React.useState('');
    // console.log(image);
    // console.log(props.image);
    // const is_uploading = useSelector(state => state.image.uploading);
    const fileInput = React.useRef();

    const selectFile = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.files[0]);

        // console.log(fileInput.current.files[0]);

        // const reader = new FileReader();
        // const file = fileInput.current.files[0];

        // reader.readAsDataURL(file);

        // reader.onloadend = () => {
        //     console.log(reader.result);
        //     dispatch(imageActions.setPreview(reader.result));
        // }
    }

    // const uploadDB = () => {
    //     let image = fileInput.current.files[0];
    //     dispatch(imageActions.uploadImageDB(image));
        
    // }

    return (
      <div className={classes.root}>
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(event) => {
           setImage(event.target.value)}}
          ref={fileInput} 
          // disabled={is_uploading}
          // onChange={(event) => {
          //   setImage(event.target.value)}}
        />
        <label htmlFor="contained-button-file">
          <div style={{width:'440px',
                        border:'1px solid lightgray',
                        padding:'10px',
                        margin:'-30px 0',
                        borderRadius:'10px',}}>
          <Button id="upload" style={{color:'black', 
                                      width:'440px', 
                                      height:'200px', 
                                      textAlign:'center',
                                      alignItems: 'center',
                                      fontSize:'17px',
                                      display:'flex',
                                      backgroundColor:'rgb(247,248,250)',
                                      }} variant="contained" component="span">
          <div>
          <div style={{width:'40px',
                      height:'40px',
                      backgroundColor:'#E4E6EB', 
                      borderRadius:'40px',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      margin:'auto'}}>  
          <PhotoLibraryIcon style={{backgroundColor:'#E4E6EB'}}/>
          </div>
          <div>사진/동영상 추가</div>
          <div style={{fontSize:'12px', color:'#65676B'}}>또는 끌어서 놓습니다.</div>
          </div>
          </Button>
          </div>

        </label>
        <input accept="image/*" 
               className={classes.input} 
               id="icon-button-file" 
               type="file" 
              //  onChange={selectFile} 
              //  ref={fileInput}   
               />
      </div>
    );
  }
