import { combineReducers } from 'redux';
import userReducer from './userReducer';
import EntregasReducer from './EntregasReducer';




const rootReducer = combineReducers({
    
    userReducer: userReducer,
    EntregasReducer: EntregasReducer,

    
});
export default rootReducer;