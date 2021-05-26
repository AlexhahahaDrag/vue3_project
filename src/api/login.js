import request from '@u/request'

export function login(param) {
    return request({
        // url: process.env.ADMIN_API + '/auth/login',
        // url: 'auth/login',
        url: 'auth/login',
        method: 'post',
        // data: param
    })
}