// import { createAction, handleActions } from 'redux-actions';
import instance from '../../common/axios';
import { history } from "../configureStore";


const signupDB = (id, pwd, first_name, last_name, year, month, day, value) => {
  return function () {
    
    // instance
    //   .post('/users/signup', { name: `${first_name} ${last_name}`, email: id, password: pwd, birth: `${year}-${month}-${day}`, gender: value})
    //   .then((alert('회원가입 성공!')))
      instance({
        method:'post',
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

export default signupDB;