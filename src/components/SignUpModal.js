import React from "react";
import {Button, Grid, Input} from "../elements/index";
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {useDispatch} from "react-redux";
import signupDB from "../redux/modules/user";


const SignUpModal = (props) => {
    const dispatch = useDispatch();
    const date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = ("0" + (1 + date.getMonth())).slice(-2);
    let currentDay = ("0" + date.getDate()).slice(-2);

    const [first_name, setFirstName] = React.useState('');
    const [last_name, setLastName] = React.useState('');
    const [id, setId] = React.useState(''); // 휴대폰 번호 또는 이메일
    const [pwd, setPwd] = React.useState('');
    const [year, setYear] = React.useState(currentYear);
    const [month, setMonth] = React.useState(currentMonth);
    const [day, setDay] = React.useState(currentDay);
    // const [gender, setGender] = React.useState('');
    const [option, setOption] = React.useState('');

    const signup = () => {
        // if (id === '' || pwd === '' || first_name === "" || last_name === "") {
        //     window.alert('성, 이름, 비밀번호, 휴대폰 번호 또는 이메일을 모두 입력해주세요!');
        //     return;
        // }
        // dispatch(signupDB(last_name, last_name, id, pwd, year, month, day, gender, option));
        dispatch(signupDB(id, pwd, first_name, last_name, year,month,day,value));
        window.location.replace('/');
    }



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
    setValue(event.target.value);
    };

    return (
        <div>
            <Grid width="100px">
            <Button _onClick={handleClickOpen} width="128.14px" backgroundColor="#42b72a">새 계정 만들기</Button>
            </Grid>
            
            <Dialog style={{height:'800px', margin:'auto'}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <Grid is_flex>
            <DialogTitle id="form-dialog-title">가입하기</DialogTitle>
            <Button margin="0 10px 0 0" _onClick={handleClose} width="40px" backgroundColor="white" color="black">X</Button>
            </Grid>
            <DialogContent>
                
                <DialogContentText>
                빠르고 쉽습니다.
                </DialogContentText>
                <hr></hr>
                <Grid is_flex width={'400px'} margin={'10px'}>
                <Input 
                    width='194px' 
                    placeholder='성' 
                    _onChange={(event) => {
                        setLastName(event.target.value);
                }}/>
                <Input width='194px' 
                    margin={'0 0 0 10px'} 
                    placeholder='이름(성은 제외)'
                    _onChange={(event) => {
                        setFirstName(event.target.value);
                }}/>
                </Grid>
                <Input 
                    width='399px' 
                    margin={'10px'} 
                    placeholder='휴대폰 번호 또는 이메일' 
                    _onChange={(event) => {
                        setId(event.target.value);
                }}/>
                <Input 
                    width='399px'
                    type={'password'} 
                    margin={'10px'} 
                    placeholder='새 비밀번호' 
                    _onChange={(event) => {
                        setPwd(event.target.value);
                }}/>
                생일
                <Grid>
                
                

                <select onChange={(event) => {
                        setYear(event.target.value);}} 
                        style={{margin:'4px', width:'125px', height:'36px'}} 
                        name="year"
                        >
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>
                <select onChange={(event) => {
                        setMonth(event.target.value);}} 
                        style={{margin:'4px', width:'125px', height:'36px'}} name="month">
                    
                    <option value="7월">7월</option>
                    <option value="6월">6월</option>
                    <option value="5월">5월</option>
                    <option value="4월">4월</option>
                </select>
                <select onChange={(event) => {
                        setDay(event.target.value);}} 
                        style={{margin:'4px', width:'125px', height:'36px'}} name="day">
                    <option selected value="16">16</option>
                    <option value="15">15</option>
                    <option value="14">14</option>
                    <option value="13">13</option>
                </select>
                </Grid>
                <Grid>
                <FormControl component="fieldset">
                    <FormLabel style={{color:'black'}} component="legend">성별</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                        <Grid margin="20px">
                            <FormControlLabel style={{border:'2px solid gray', width:'112.95px'}} value="female" control={<Radio style={{color:'gray'}}/>} label="여성" />
                            <FormControlLabel style={{border:'2px solid gray', width:'112.95px'}} value="male" control={<Radio style={{color:'gray'}}/>} label="남성"/>
                            <FormControlLabel style={{border:'2px solid gray', width:'143.08px'}} value="other" control={<Radio style={{color:'gray'}}/>} label="직접 지정" />
                        </Grid>
                    </RadioGroup>
                </FormControl>
                
                </Grid>
                <select style={{margin:'4px', width:'400px', height:'36px', display:'block'}} name="year">
                    <option value="volvo">회원님을 어떻게 지칭할지 선택하세요</option>
                    
                    <option value="saab">2020</option>
                    <option value="fiat">2019</option>
                    <option value="audi">2018</option>
                </select>
                <div style={{marginLeft:'3px',fontSize:'11px'}}>선택한 항목이 모든 사람에게 공개됩니다.</div>
                <Input margin="4px" width="399px" placeholder="성별(선택 사항)"></Input>
                <div style={{marginLeft:'3px',fontSize:'11px'}}>가입하기 버튼을 클릭하면 Facebook의 <a href="https://www.facebook.com/legal/terms/update">약관</a>, <a href="https://www.facebook.com/about/privacy/update">데이터 정책</a> 및 <a href="https://www.facebook.com/policies/cookies/">쿠키 정책</a>에 동의하게 됩니다.<br></br> Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.</div>
            </DialogContent>
            <DialogActions>
                <Button width='194px' height='36px' backgroundColor='rgb(92,163,38)' _onClick={()=>signup()}>
                가입하기
                </Button>
                
            </DialogActions>
            </Dialog>
        </div>
    )
}

export default SignUpModal;