import counterReducer from './counter';
import loggedInReducer from './isLogged';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loggedInReducer    
})

export default rootReducer;