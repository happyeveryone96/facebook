import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// Actions
const UPLOADING = "UPLOADING";
const UPLOAD_IMAGE = "UPLOAD_IMAGE";
const SET_PREVIEW = "SET_PREVIEW";

// createAction
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));


const initialState = {
  image_url: "http://via.placeholder.com/400x300",
  uploading: false,
  preview: null,
};


const uploadImageDB = (image) => {
  return function (dispatch) {
    dispatch(uploading(true));
  };
}


export default handleActions({
  [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
    draft.image_url = action.payload.image_url;
    draft.uploading = false;
  }),

  [UPLOADING]: (state, action) => produce(state, (draft) => {
    draft.uploading = action.payload.uploading;
  }),

  
  [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
    draft.preview = action.payload.preview;
  }),
  },initialState
);

const actionCreators = {
  uploadImage,
  uploadImageDB,
  setPreview,
};

export { actionCreators };