module.exports = {
  title: 'cyanmaple_cli',
  description: 'CMUI脚手架：快点干活，早点下班',
  base:'/cli/',
  serviceWorker:true,
  evergreen: true,
  cache:false,
  themeConfig:{
    sidebar: [
      // '/guide/'
      {
        title:'使用说明书',
        path:'/guide/',
        // children:['/guide/component.md']
      },
      {
        title:'脚手架内置组件',
        path:'/component/',
        sidebarDepth: 2,
        children:[
          '/component/form.md',
          '/component/backTop.md',
        ]
      }
    ],
    // sidebar: 'auto',
    nav:[
        {text:'CMUI',link:'http://www.cyanmaple.design'},
        {text:'官网',items:[
                {text:'官网',link:'http://www.bingshangroup.com'},
                {text:'陪你读书',link:'https://www.ximalaya.com/jiaoyu/3740790/'},
                {text:'立体二维码',link:'http://www.bingshangroup.com#/qc'}
            ]},
        {text:'技术博客',link:'http://www.bingshangroup.com/blog2'}
    ]
  }
};