import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import albumsReducer from '../Reducers/albumsReducer';
import songsReducer from '../Reducers/songsReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    albumSearch: songsReducer,
    albums: albumsReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;