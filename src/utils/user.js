import request from '@u/request'
import { HttpMethod } from '@u/http'

export default {
    //条件分页查询
    page(params) {
        return request({
            url: 'user/page',
            method: HttpMethod.GET,
            params
        })
    }
}