/*action*/

import { message } from 'antd';

// import { Redirect } from 'react-router-dom';
import request from "../../api/ajax";
import { push } from 'react-router-redux';
export const LOGINSUCCESS = "counter/LOGINSUCCESS";
export const LOGINFAIL = "counter/LOGINFAIL";
// let that=this;
// const history = createBrowserHistory()
export function loginSuccess(action) {
        return {type: LOGINSUCCESS,userInfo:action}
    // that.props.history.push('/Manage');
}

export function loginFail() {
    return {type: LOGINFAIL}
}
export function login(action) {
    const options = {
        method: 'post',
        body: action.data,
        // body: JSON.stringify(action.data),
    };
    const data = {url: action.url, options: options};
    return (dispatch) => {
        return request(data, (data) => {
            message.success('登录成功');
            dispatch(push('/manage'));
            dispatch(loginSuccess(data));
        }, (mes) => {
            message.error(mes);
        });
    }
}


