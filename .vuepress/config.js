module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  // permalink: '/:year/:month/:day/:slug'
  permalink: '/:slug',
  // plugins: [
  //   {
  //     resolve: 'vuepress-plugin-rss',
  //     options: {
  //       base_url: '/', // required
  //       site_url: 'http://localhost:8080', // required
  //       // copyright: '2018 Coralo' // optional
  //     }
  //   }
  // ]
  chainWebpack: (config, isServer) => {
    config.module
    .rule('coffee')
    .test(/\.coffee$/)
    .use('coffee-loader')
      .loader('coffee-loader')
      .end()
  }
}