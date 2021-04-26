import axios from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import errorCode from './errorCode'
import VueAxios from 'vue-axios'

const service = axios.create({
    baseURL: '',//api的基础base_url
    withCredentials: false,
    timeout: 10000
})


export default service;
