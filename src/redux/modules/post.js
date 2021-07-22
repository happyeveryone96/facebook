import instance from '../../common/axios';
import moment from "moment";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// ACTION
const SET_POST = 'SET_POST';
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = "DELETE_POST";


const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const createPost = createAction(CREATE_POST, (post) => ({ post }));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));

const initialState = {
  list: [],
  paging: { start: null, next: null, size: 3 },
  is_loading: false,
  preview: null,
};

//게시글 하나의 정보(post의 defaultProps)
const initialPost = {
  id: "",
  content: "오늘 클론코딩 조 정해졌다",
  name: "",
  createdAt: moment().format("YYYY-MM-DD"),
  image: "hanghae.jpg",
  profileImage: "daeun.jpg"
}


const getPostDB = () => {
  return function (dispatch) {
    instance
      .get('/posts/')
      .then((res) => {
        console.log(res);
        console.log(res.data);
        dispatch(setPost(res.data.posts));
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
      .post('/post', { name: name, createdAt: createdAt, content: content, image: image, profileImage: profileImage })
      .then((window.location.reload()))
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode, errorMessage);
      });
  };
};

//   return function (dispatch) {
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('createdAt', createdAt);
//     formData.append('content', content);
//     formData.append('profileImage', profileImage);
//     formData.append('image', image);
//     for (let key of formData.keys()) { console.log(key); }
//     for (var value of formData.values()) { console.log(value); }

//     const headers = {
//       "Content-Type": "multipart/form-data",
//     };

//     axios({
//       method: 'post',
//       url: 'http://localhost:3001/memo',
//       data: formData,
//       headers: { headers },
//     })
//       .then((res) => {
//         console.log(res);
//         console.log(res.data);

//         const new_post = {
//           // name:name,
//           createdAt: moment().format("YYYY년 MM월 DD일 hh:mm"),
//           // content:content,
//           // image: res.data.result.image,
//           // profileImage:profileImage,
//       }
//       dispatch(createPost(new_post));
//       }).catch(err => {
//       console.log("실패.", err);
//     })
// }
// }


const deletePostDB = (id) => {
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/posts/${id}`)
      .then((res) => {
        console.log(res);
        dispatch(deletePost(res.data.id));
      })
      .catch((err) => {
        window.alert("본인이 작성한 게시글만 지울 수 있어요");
        console.log("-------> 에러 확인: ", err);
      });
  }
}


export default handleActions({
  [SET_POST]: (state, action) => {
    return produce(state, (draft) => {
      draft.list.push(...action.payload.post_list);
    })
  },
  [CREATE_POST]: (state, action) => produce(state, (draft) => {
    draft.list.unshift(action.payload.post);
  }),
  [DELETE_POST]: (state, action) => produce(state, (draft) => {
    let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
    console.log(idx);

    if (idx !== -1) {
      draft.list.splice(idx, 1);
    }
  })
}, initialState
);

const actionCreators = {
  setPost,
  createPost,
  getPostDB,
  addPostDB,
  deletePost,
  deletePostDB,
}

export { actionCreators }