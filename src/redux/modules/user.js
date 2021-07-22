import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../common/axios';
import jwt_decode from "jwt-decode";

const LOG_IN = "LOG_IN";
const LOGIN_CHECK = "LOGIN_CHECK";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const loginCheck = createAction(LOGIN_CHECK, (local) => ({ local }));

const initialState = {
    is_login: false,
};

// Accept헤더
//자신에게 이러한 데이터 타입만 허용하겠다는 뜻입니다.
// 즉 브라우저가 요청 메시지의 Accept 헤더 값을 application/json이라고 설정했다면
// 웹서버에게 나는 json 데이터만 처리할 수 있으니 json 데이터 형식으로 응답을 돌려줘 라고 말하는것과 같습니다.
// -> 굳이 적을 필요x

// Content-Type부분
//designates the content to be in JSON format, encoded in the UTF-8 character encoding.
// UTF-8부분 무시하고 "Content-Type": "application/json" 까지만 적어도 괜찮음. 애초에 디폴트값이 json임

// Access-Control-Allow-Origin: *
// 브라우저에 리소스에 접근하는 임의의 origin으로부터의 요청을 허용한다고 알리는 응답

//login_check 하나 필요: 새로고침 했을때 확인 가능하게끔 (id, pwd대신 token 주고 유저정보 받아올 친구)

const logInDB = (email, pwd) => {
    return function (dispatch, getState, { history }) {
        instance
            .post('/users/login',
                {
                    email: email,
                    password: pwd,
                },
            )
            .then((res) => {
                console.log(res);
                localStorage.setItem("email", `${email}`);
                localStorage.setItem("token", res.data.token);
                dispatch(logIn({ email: email }));
                // window.alert("로그인 성공");
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                window.alert("아이디와 비밀번호를 확인해주세요.");
            });
    };
};


const signupDB = (id, pwd, first_name, last_name, year, month, day, value) => {
    return function () {

        // instance
        //   .post('/users/signup', { name: `${first_name} ${last_name}`, email: id, password: pwd, birth: `${year}-${month}-${day}`, gender: value})
        //   .then((alert('회원가입 성공!')))
        instance({
            method: 'post',
            url: '/users/signup',
            // url: '/signup',
            data: {
                name: `${first_name} ${last_name}`,
                // id: id,
                email: id,
                password: pwd,
                birth: `${year}-${month}-${day}`,
                gender: value
            }
        })
            // .then((history.replace('/')))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });
    };
};

// signupDB ".then" 에 적힐 내용
// 회원가입 후 바로 메인페이지로 이동하게 만들건지? 그렇다면 세션스토리지에 token, 리덕스에 유저정보 필요.
// 회원가입 후 다시 로그인 페이지로 돌려버리면 토큰도 로그인하면서 주어지다보니 우린 편하지(하지만 유저가 불편하지)
// 즉, 토큰 유무에 따라서 떨구기


export default handleActions(
    {
        [LOG_IN]: (state, action) => produce(state, (draft) => {
            draft.user = action.payload.user;
            draft.is_login = true;
        }),
        [LOGIN_CHECK]: (state, action) => produce(state, (draft) => {
            draft.is_login = action.payload.local;
        }),
    },
    initialState
);


const actionCreators = {
    logIn,
    logInDB,
    signupDB,
    loginCheck,
}

export { actionCreators };