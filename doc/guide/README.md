# 使用说明书
## 安装
为了照顾更多的国内用户，本次安装工具提供了码云的Git地址，你可以到https://gitee.com/qqkillqq/cyanmaple_cli将项目克隆到本地，直接初始化即可开始使用
### 命令行安装和使用
```shell
git clone -b dev https://gitee.com/qqkillqq/cyanmaple_cli.git
cd cyanmaple_cli
```
## 初始化和启动
CyanMapleCLI基于VueCLI进行搭建，为保证国内用户的顺利安装，建议使用cnpm 进行依赖的安装。
```shell
cnpm i 
npm run serve
```
## 目录结构

```js
.
├──src
│   ├──components 
│   │   ├──async //异步组件
│   │   ├──globle //全局组件
│   ├──lib //项目库文件大部分共用的操作都在这里
│   ├──router 
│   ├──store 
│   ├──views //单页文件配置
│   │   ├──about.vue //全局组件
│   │   ├──about.vue //全局组件
│   │   ├──autoImport.js //用于自动导入单页的文件，不要删除

```

## 新建页面
现在你已经可以通过http://localhost:8080 进行项目的访问了,在这里你可以看到一些DEMO的展示,CyanMapleCLI已经为你搭建好了自动化的路由导入，如果你需要建立新的页面，你只需要在src/views下直接新建Vue文件即可，是不是很简单。例如你可以在views文件夹下建立test.vue文件，之后你就可以通过http://localhost:8080/test访问到这个页面了。
## 组件
CyanMapleCLI将组件分为全局组件和异步组件，分别存放在src/components的global和async目录下，他们的区别是全局组件会直接加载，并打包到chunk-ventors中，异步组件会将每个组件独立打包，并异步加载，但是他们的使用方式是完全相同的。如果你建立的是全局组件，你可以使用 "gc-文件名"来调用，如果你建立的是异步组件，可以使用“ac-文件名”来使用。
