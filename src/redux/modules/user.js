import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import instance from '../../common/axios';

const LOG_IN = "LOG_IN";

const logIn = createAction(LOG_IN, (user) => ({ user }));

const initialState = {
    id: "",
    is_login: false,
};

const logInDB = (id, pwd) => {
    return function (dispatch, getState, { history }) {
        instance({
            method: "POST",
            url: "/login",
            headers: {
                Accept: "application/json", //클라이언트가 서버한테 요청하는(원하는) 타입
                "Content-Type": "application/json;charset=UTF-8", //현재 서버한테 보내는 데이터 타입
                "Access-Control-Allow-Origin": "*",
                // "Authorization": `Bearer ${sessionStorage.getItem("token")}`,
            },
            data: {
                "id": id,
                "password": pwd,
            },
        })
            .then((res) => {
                console.log(res);
                localStorage.setItem("id", JSON.stringify(`${id}`)); //JSON.stringfy 사용하여 텍스트 형으로 변환. 스토리지에 넣을 수 있게 만들어줌
                sessionStorage.setItem("token", res.data.accessToken);
                dispatch(logIn({ id: id, password: pwd, }));
                history.push("/");
            })
            .catch((error) => {
                console.log(error);
                // window.alert("아이디와 비밀번호를 확인해주세요.");
            });
    };
};



const signupDB = (id, pwd, first_name, last_name, year, month, day, value) => {
    return function () {

        // instance
        //   .post('/signup', { name: `${first_name} ${last_name}`, id: id, password: pwd, birth: `${year}-${month}-${day}`, gender: value})
        //   .then((alert('회원가입 성공!')))
        instance({
            method: 'post',
            url: '/signup',
            data: {
                name: `${first_name} ${last_name}`,
                id: id,
                password: pwd,
                birth: `${year}-${month}-${day}`,
                gender: value
            }
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode, errorMessage);
            });
    };
};

export default handleActions(
    {
        [LOG_IN]: (state, action) => produce(state, (draft) => {
            draft.id = action.payload.user.id;
            draft.is_login = true;
        }),
    },
    initialState
);

//action creator export
const actionCreators = {
    logIn,
    logInDB,
    signupDB,
};

export { actionCreators };
