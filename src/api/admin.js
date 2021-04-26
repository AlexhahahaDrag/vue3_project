import { request } from '@u/request';
import { httpMethod } from '@u/http'

//获取管理员列表
export funtion getAdminList(params) {
    return request({
        url: process.env.ADMIN_API + '/admin/getList',
        method: httpMethod.GET,
        params
    })
}