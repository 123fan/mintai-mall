import login from './reducers/login';
// import shopdEditor from 'reducers/shopdEditor';
import {combineReducers} from "redux";
// export default function combineReducers(state = {}, action) {
//     return {
//         counter: counter(state.counter, action),
//         userInfo: userInfo(state.userInfo, action)
//     }
// }
export default combineReducers({
    login,
    // shopdEditor
});