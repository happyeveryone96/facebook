// import { createAction, handleActions } from 'redux-actions';
import instance from '../../common/axios';


const signupDB = (id, pwd, first_name, last_name, year, month, day, value) => {
  return function () {
    
    instance
      .post('/memo', { name: `${first_name} ${last_name}`, id: id, password: pwd, birth: `${year}-${month}-${day}`, gender: value})
      .then((alert('회원가입 성공!')))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

export default signupDB;