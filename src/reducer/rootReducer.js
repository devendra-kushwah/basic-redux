import { combineReducers } from "redux";
import count from './count';
import postsReducer from '../Features/Posts/PostsSlice';

const rootReducer = combineReducers({
  count,
  posts: postsReducer

});

export default rootReducer;
