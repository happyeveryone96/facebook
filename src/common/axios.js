// common/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: "http://52.78.22.71", // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': '*',
    "Authorization": `Bearer ${localStorage.getItem("token")}`,
  }
});

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
// instance.defaults.headers.common["Authorization"] = USER_TOKEN; 

export default instance;