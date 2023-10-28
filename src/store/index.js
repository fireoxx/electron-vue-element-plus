
import { createStore } from 'vuex'  // 引入createStore， 这里跟vue2不一样
import Cookies from "js-cookie"


export default createStore({
    state: {
        // state里面定义了一些要使用的变量
        access_token: ''
    },
    mutations: {
        setAccessToken(state, val) {
            state.access_token = val
            var date = new Date();
            date.setTime(date.getTime() + (60 * 60 * 1000));
            Cookies.set('access_token', val, { expires: date })
        },
        clearAccessToken(state) {
            state.access_token = ''
            Cookies.remove('access_token')
        },
        getAccessToken(state) {
            state.access_token = state.access_token || Cookies.get('access_token')
        }
    }
})
