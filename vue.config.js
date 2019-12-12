module.exports = {
  //axios域代理，解决axios跨域问题
  publicPath: "./",
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.8.10:8091",
        changeOrigin: true,
        https: false,
        ws: true,
        pathRewrite: {
          "^/api": "/api"
        }
      }
    }
  }
};
