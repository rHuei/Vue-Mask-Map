module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Vue-Mask-Map/'
    : '/',

    configureWebpack: {
      performance: {
        hints:false
      }
    } 
}