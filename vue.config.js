
const px2rem = require("postcss-px2rem")
module.exports = {

    lintOnSave: false,
    
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    px2rem({ remUnit: 19.2 })//1rem等于多少px
                ]
            }
        }
    },
    devServer: {
        // proxy: "http://segmenth50422.utools.club",
        // proxy: {
        //   "/api": {
        //     target: "http://flash.weather.com.cn/wmaps/xml/shenzhen.xml",
        //     ws: true,
        //     changeOrigin: true,
        //     pathRewrite: {
        //       "^/api": ""
        //     }
        //   }
        // }
      }
    

}
