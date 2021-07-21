// import { createAction, handleActions } from 'redux-actions';
import instance from '../../common/axios';


const signupDB = (id, pwd, first_name, last_name, year, month, day, value) => {
  return function () {
    
    // instance
    //   .post('/signup', { name: `${first_name} ${last_name}`, id: id, password: pwd, birth: `${year}-${month}-${day}`, gender: value})
    //   .then((alert('회원가입 성공!')))
      instance({
        method:'post',
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

export default signupDB;