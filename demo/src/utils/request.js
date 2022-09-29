import axios from "axios"

const http=axios.create({
    baseURL:process.env.VUE_APP_SERVICE_URL,
    timeout:5000
})

// 请求拦截
http.interceptors.request.use(config=>{
    return config
})

// 响应拦截
http.interceptors.response.use(res=>{
    return res
})
export default request