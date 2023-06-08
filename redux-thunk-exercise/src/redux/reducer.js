import { combineReducers } from 'redux';
import postReducer from '../components/postReducer';

const rootReducer = combineReducers({
    posts: postReducer,
});

export default rootReducer;
