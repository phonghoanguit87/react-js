import { combineReducers } from 'redux'
import todosReducer from './../components/todosReducer';

const rootReducer = combineReducers({
    todos: todosReducer,
})

export default rootReducer