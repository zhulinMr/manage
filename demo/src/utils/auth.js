// 本地存储


const TOKEN_KEY="token"
const USER_INFO_KEY="userinfo"


// token储存到本地
const setToken=(token)=>{
    localStorage.setItem(TOKEN_KEY,token)
}
// 从本地获取
const getToken=()=>{
    return localStorage.getItem(TOKEN_KEY)
}
// userinfo储存到本地
const setUserinfo=(userinfo)=>{
    localStorage.setItem(USER_INFO_KEY,JSON.stringify(userinfo))
}
// 从本地获取
const getUserinfo=()=>{
   return  JSON.parse(localStorage.getItem(USER_INFO_KEY || {}))
}
export default {
    setToken,
    getToken,
    setUserinfo,
    getUserinfo
}