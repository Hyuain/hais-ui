module.exports = {
  title: 'Hais UI',
  base:'/hais-ui/',
  description: '一个简单好用的 UI 框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'External', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/','/get-started/']
      },
      {
        title: '组件',
        children: ['/components/button', '/components/input', '/components/grid', '/components/layer']
      },
    ]
  }
}