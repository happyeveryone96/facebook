import React from "react";
import { Button, Grid, Input } from "../elements/index";
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
import { useDispatch } from "react-redux";
import signupDB from "../redux/modules/user";
import { ShopOutlined } from "@material-ui/icons";


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

    const generateYearOptions = () => {
        const arr = [];
        const startYear = 1900;
        const endYear = new Date().getFullYear();
        for (let i = endYear; i >= startYear; i--) {
            arr.push(<option value={i}>{i}</option>);
        }
        return arr;
    };

    const generateMonthOptions = () => {
        const arr = [];
        const startMonth = 1;
        const endMonth = 12;
        for (let i = endMonth; i >= startMonth; i--) {
            arr.push(<option value={i}>{i}월</option>);
        }
        return arr;
    };

    const generateDayOptions = () => {
        const arr = [];
        const startDay = 1;
        const endDay = 31;
        for (let i = endDay; i >= startDay; i--) {
            arr.push(<option value={i}>{i}</option>);
        }
        return arr;
    };

    const showOptions = () => {
        const options = document.getElementById('options');
        if (options.style['cssText'] === "display: none;") {
            options.style['cssText'] = "display: block;"
        }
    }
    const hideOptions = () => {
        const options = document.getElementById('options');
        if (options.style['cssText'] === "display: block;") {
            options.style['cssText'] = "display: none;"
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleClose = (e) => {
        e.preventDefault();
        setOpen(false);
    };

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const signup = () => {
        if (id === '' || pwd === '' || first_name === "" || last_name === "") {
            window.alert('빈칸을 확인해주세요!');
            return;
        }
        return async (dispatch, { history }) => {
            // dispatch(signupDB(id, pwd, first_name, last_name, year,month,day,value));
            dispatch(signupDB(id, pwd, first_name, last_name, year, month, day, value));
            // .then((history.push('/')));
            // window.location.reload();
        }

    }

    return (
        <div>
            <Grid margin="0 130px" width="100px">
                <Button _onClick={handleClickOpen} width="128.14px" backgroundColor="#42b72a">새 계정 만들기</Button>
            </Grid>

            <Dialog style={{ height: '800px', margin: 'auto' }} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <Grid is_flex>
                    <DialogTitle id="form-dialog-title">가입하기</DialogTitle>
                    <Button margin="0 10px 0 0" _onClick={handleClose} width="40px" backgroundColor="white" color="black">X</Button>
                </Grid>
                <DialogContent>

                    <DialogContentText>
                        빠르고 쉽습니다.
                    </DialogContentText>
                    <hr></hr>
                    <Grid is_flex width={'400px'} margin='10px'>
                        <Input
                            width='194px'
                            placeholder='성(姓)'
                            _onChange={(event) => {
                                setLastName(event.target.value);
                            }} />
                        <Input width='194px'
                            margin={'0 0 0 10px'}
                            placeholder='이름(성은 제외)'
                            _onChange={(event) => {
                                setFirstName(event.target.value);
                            }} />
                    </Grid>
                    <Input
                        width='399px'
                        margin={'10px'}
                        placeholder='휴대폰 번호 또는 이메일'
                        _onChange={(event) => {
                            setId(event.target.value);
                        }} />
                    <Input
                        width='399px'
                        type={'password'}
                        margin={'10px'}
                        placeholder='새 비밀번호'
                        _onChange={(event) => {
                            setPwd(event.target.value);
                        }} />
                    생일
                    <Grid>



                        <select onChange={(event) => {
                            setYear(event.target.value);
                        }}
                            style={{ margin: '4px', width: '125px', height: '36px' }}
                            name="year"
                            value={year}
                        >
                            <option value='0'>연도</option>
                            {generateYearOptions()}
                            {/* <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option> */}
                        </select>
                        <select onChange={(event) => {
                            setMonth(event.target.value);
                        }}
                            style={{ margin: '4px', width: '125px', height: '36px' }}
                            name="month"
                            value={month}
                        >
                            <option value='0'>월</option>
                            {generateMonthOptions()}
                            {/* <option value="7월">7월</option>
                    <option value="6월">6월</option>
                    <option value="5월">5월</option>
                    <option value="4월">4월</option> */}
                        </select>
                        <select onChange={(event) => {
                            setDay(event.target.value);
                        }}
                            style={{ margin: '4px', width: '125px', height: '36px' }}
                            name="day"
                            value={day}>
                            <option value='0'>일</option>
                            {generateDayOptions()}
                            {/* <option selected value="16">16</option>
                    <option value="15">15</option>
                    <option value="14">14</option>
                    <option value="13">13</option> */}
                        </select>
                    </Grid>
                    <Grid>
                        <FormControl component="fieldset">
                            <FormLabel style={{ color: 'black' }} component="legend">성별</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                                <Grid margin="20px">
                                    <FormControlLabel onClick={() => hideOptions()} style={{ border: '2px solid gray', width: '112.95px' }} value="female" control={<Radio style={{ color: 'gray' }} />} label="여성" />
                                    <FormControlLabel onClick={() => hideOptions()} style={{ border: '2px solid gray', width: '112.95px' }} value="male" control={<Radio style={{ color: 'gray' }} />} label="남성" />
                                    <FormControlLabel onClick={() => showOptions()} style={{ border: '2px solid gray', width: '143.08px' }} value="other" control={<Radio style={{ color: 'gray' }} />} label="직접 지정" />
                                </Grid>
                            </RadioGroup>
                        </FormControl>

                    </Grid>
                    <div id="options" style={{ display: 'none' }}>
                        <select style={{ margin: '4px', width: '400px', height: '36px', display: 'block' }} name="option">
                            <option value="volvo">회원님을 어떻게 지칭할지 선택하세요</option>

                            <option value="female-birth">여성:"생일을 축하해주세요!"</option>
                            <option value="male-birth">남성:"생일을 축하해주세요!"</option>
                            <option value="others-birth">여러 명:"생일을 축하해 주세요!"</option>
                        </select>
                        <div style={{ marginLeft: '3px', fontSize: '11px' }}>선택한 항목이 모든 사람에게 공개됩니다.</div>
                        <Input margin="4px" width="399px" placeholder="성별(선택 사항)"></Input>
                    </div>
                    <div style={{ marginLeft: '3px', fontSize: '11px' }}>가입하기 버튼을 클릭하면 Facebook의 <a href="https://www.facebook.com/legal/terms/update">약관</a>, <a href="https://www.facebook.com/about/privacy/update">데이터 정책</a> 및 <a href="https://www.facebook.com/policies/cookies/">쿠키 정책</a>에 동의하게 됩니다.<br></br> Facebook으로부터 SMS 알림을 받을 수 있으며 알림은 언제든지 옵트 아웃할 수 있습니다.</div>
                </DialogContent>
                <DialogActions>
                    <Button width='194px' height='40px' margin="5px auto 10px" backgroundColor='rgb(92,163,38)' _onClick={() => signup()}>
                        가입하기
                    </Button>

                </DialogActions>
            </Dialog>
        </div>
    )
}

export default SignUpModal;