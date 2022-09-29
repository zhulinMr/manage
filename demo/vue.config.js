const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    port:9999,  //端口号
    open:true,  //启动时自动打开
    https:false, //是否开启htts
    host:'localhost',  //主机名
    proxy:{
      [process.env.VUE_APP_BASE_API]:{
        target:process.env.VUE_APP_SERVICE_URL,
        changeOrigin:true,
        pathRewrite:{
          ["^"+process.env.VUE_APP_SERVICE_URL]:""
        }
      }
    }
  }
})
