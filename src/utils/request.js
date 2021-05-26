import axios from 'axios'

const service = axios.create({
    withCredentials: true,
})

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.baseURL = 'http:/localhost:8001'
axios.defaults.timeout = 5000
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// 注意这里的content-type,可以跟axios.defaults.headers.post['Content-Type']对比一下，传递到后端的数据格式是不一样的，一种是json一种是form data
axios.defaults.headers["Accept"] = "*/*";
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(response => {
    const res = response.data;
    if(res.code == 'success' || res.code == 'error') {
        return res;
    } else {
        return Promise.reject('error')
    }
  },error => {
      console.log("错误码", error);
      return Promise.reject(error);
  }
)

export default service;
