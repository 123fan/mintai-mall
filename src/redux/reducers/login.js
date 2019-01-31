import {LOGINFAIL, LOGINSUCCESS} from '../actions/login';


const initState = {
    isLoading: false,
    userInfo: {},
    errorMsg: ''
};

export default function reducer(state = initState, action) {
    switch (action.type) {
        case LOGINSUCCESS:
            return{
             ...state,
            isLoading: false,
            userInfo: action.userInfo,
            errorMsg: ''

            };
        case LOGINFAIL:
            return {
                ...state,
                isLoading: true,
                userInfo: {},
                errorMsg: ''
            };
        default:
            return state;
    }
}