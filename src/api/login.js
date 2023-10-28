import request from "./request.js"

export default {
    login(params) {
        if (params.username == 'admin' && params.password == 'admin') {
          return {
            status: 200,
            data: {
              access: '123456789',
              refresh: '123456789'
            }
          }
        } else {
          return {}
        }
        
        // return request({
        //     url: '/api/token/',
        //     method: 'post',
        //     data: params,
        //     mock: false
        // })
    },
    refreshToken(params) {
        return request({
            url: '/api/token/refresh',
            method: 'post',
            data: params,
            mock: false
        })
    }
}
