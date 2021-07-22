import instance from '../../common/axios';
import moment from "moment";
import axios from "axios";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import { history } from "../redux/configureStore";

// ACTION
const SET_POST = 'SET_POST';
const CREATE_POST = 'CREATE_POST';




const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const createPost = createAction(CREATE_POST, (post) => ({ post }));


const initialPost = {
        content: "오늘 클론코딩 조 정해졌다",
        name: "",
        createdAt: moment().format("YYYY-MM-DD"),
        image: "hanghae.jpg",
        profileImage: "daeun.jpg"
}

const initialState = {
    list: [],
    paging: { start: null, next: null, size: 3 },
    is_loading: false,
    preview: null,
    title: "",
    price: "",
    content: "",
  };


const getPostDB = () => {
    return function (dispatch) {


      instance
        // .get('/posts/post')
        .get('/post')
        .then((res) => {
            console.log(res);
            console.log(res.data);
            dispatch(setPost(res.data.result));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    };
  };

  export const UploadPost = (data) =>
  async (dispatch, getState, { history }) => {
    try {
      const upload = await instance.post("/post", data);
      console.log(upload);
    } catch (error) {
      window.alert(error.message);
    }
  };



const addPostDB = (name, createdAt, content, image, profileImage) => {
    return function () {

    instance
        // .post('/posts/post', { name: name, createdAt: createdAt, content: content, image: image, profileImage: profileImage})
        .post('/post', { name: name, createdAt: createdAt, content: content, image: image, profileImage: profileImage})
        .then((window.location.reload()))
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode, errorMessage);
        });
    };
  };

//     return function (dispatch) {
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('createdAt', createdAt);
//       formData.append('content', content);
//       formData.append('profileImage', profileImage);
//       formData.append('image', image);
//       for (let key of formData.keys()) { console.log(key); }
//       for (var value of formData.values()) { console.log(value); }
//       console.log(formData);
//       const headers = {
//         "Content-Type": "multipart/form-data",
//       };
  
//       axios({
//         method: 'post',
//         url: 'http://52.78.22.71/posts/post',
//         // url: 'http://localhost:3001/post',
//         data: formData,
//         headers: { headers },
//       })
//         .then((res) => {
//           console.log(res);
//           console.log(res.data);

//           const new_post = {
//             name:name,
//             createdAt: moment().format("YYYY년 MM월 DD일 hh:mm"),
//             content:content,
//             // image: res.data.result.image,
//             profileImage:profileImage,
//             image:image,
//         }
//         dispatch(createPost(new_post));
//         }).catch(err => {
//         console.log("실패.", err);
//       })
//   }
// };


export default handleActions({
    [SET_POST]: (state, action) => {
      return produce(state, (draft) => {
        draft.list.push(...action.payload.post_list)
      })
    },
    [CREATE_POST]: (state, action) => produce(state, (draft) => {
      draft.list.unshift(action.payload.post);
    })
    
  },
    initialPost
);

const actionCreators = {
    setPost,
    createPost,
    getPostDB,
    addPostDB,
}

export { actionCreators }