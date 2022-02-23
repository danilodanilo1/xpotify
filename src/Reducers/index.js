import { combineReducers } from "redux";
import tokenReducer from './tokenReducer';
import albumsReducer from './albumsReducer';
import songsReducer from './songsReducer';

export default combineReducers({
  tokenReducer,
  albumsReducer,
  songsReducer
});
