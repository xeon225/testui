module.exports = {
  title: 'cyanmaple_cli',
  description: '快速建站脚手架',
  serviceWorker:true,
  evergreen: true,
  cache:false,
  themeConfig:{
    sidebar: [
      '/guide/'
    ],
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