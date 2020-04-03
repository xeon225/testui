module.exports = {
  title: 'cyanmaple_cli',
  description: '高效的描述型框架，简单不简单',
  serviceWorker:true,
  evergreen: true,
  cache:false,
  themeConfig:{
    sidebar: [
      '/guide/'
    ],
    nav:[
        {text:'样式',link:'/Cyan/'},
        {text:'组件',link:'/components/'},
        {text:'方法',link:'/methods/'},
        {text:'官网',items:[
                {text:'官网',link:'http://www.bingshangroup.com'},
                {text:'陪你读书',link:'https://www.ximalaya.com/jiaoyu/3740790/'},
                {text:'立体二维码',link:'http://www.bingshangroup.com#/qc'}
            ]},
        {text:'技术博客',link:'http://www.bingshangroup.com/blog2'}
    ]
  }
};