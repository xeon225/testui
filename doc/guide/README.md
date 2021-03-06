# 使用说明书
## 安装
为了照顾更多的国内用户，本次安装工具提供了码云的Git地址，你可以到https://gitee.com/qqkillqq/cyanmaple_cli将项目克隆到本地，直接初始化即可开始使用
### 命令行安装和使用
```shell
git clone -b develop https://gitee.com/qqkillqq/cyanmaple_cli.git
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
│   │   ├──async //异步组件，此文件夹下的Vue文件可以自动加载并直接使用
│   │   ├──globle //全局组件，此文件夹下的Vue文件可以自动加载并直接使用
│   ├──lib //项目库文件大部分共用的操作都在这里
│   ├──router 
│   ├──store 
│   ├──views //视图文件，此文件夹下的Vue文件可以自动被访问
```

## 新建页面
现在你已经可以通过http://localhost:8080 进行项目的访问了,在这里你可以看到一些DEMO的展示,CyanMapleCLI已经为你搭建好了自动化的路由导入，如果你需要建立新的页面，你只需要在src/views下直接新建Vue文件即可，是不是很简单。例如你可以在views文件夹下建立test.vue文件，之后你就可以通过http://localhost:8080/test访问到这个页面了。
## 新建组件
CyanMapleCLI将组件分为全局组件和异步组件，分别存放在src/components的global和async目录下，他们的区别是全局组件会直接加载，并打包到chunk-ventors中，异步组件会将每个组件独立打包，并异步加载，但是他们的使用方式是完全相同的。如果你建立的是全局组件，你可以使用 "gc-文件名"来调用，如果你建立的是异步组件，可以使用“ac-文件名”来使用。

## 请求与缓存
CyanMapleCLI采用注入依赖的方式来实现对于模块的引用，请求注入的模块为$request，如果你需要在你的项目中使用请求，首先需要将$request模块注入你的VUE文件。然后在你的程序中使用this.$request来调用，并获得一个promise对象
```vue   
<script>
export default {
    inject:['$request']
    created(){
        this.$request({
            url:'',//请求的地址
            method:'',//请求方式，默认为GET
            useCache:true,//是否使用缓存以及缓存级别
            data:{},//发送的数据
            testData:{},//用于测试数据
            testDelay:200,//测试数据延迟
            error(message){}//接口请求成功但是seccess为false时的回调
        }).then(data=>{
            //接口请求成功的处理
        }).cath(e=>{
            //接口请求失败的处理
        })
    }
}
</script>
```
### useCache的使用
当你使用$requer发送请求的时候，CyanMapleCLI会将该接口的返回值进行缓存，下一次如果使用相同的方式向相同地址传递相同的参数的时候，会从缓存中直接返回数据，而不需要再次发送请求，这会极大的减少你的请求次数并增加页面的反馈，你可以使用Boolean类型或者0~3的数字来对useCache进行设置，默认为true。具体意义如下：
- 设置为0或false：不使用缓存，即每次重新请求接口
- 设置为1或true：使用变量级别缓存，即如果页面不刷新则从缓存读取数据
- 设置为2：session级别缓存，即如果不关闭浏览器，则从缓存读取数据
- 设置为3：本地local缓存，即如果不清除本地localstorage则从缓存中读取数据
### testData的使用
当你需要调试数据的时候CyanMapleCLI为你提供了比mock更简单的方式来制作测试数据，你只需要将testData的值设置为你需要的数据即可，此时$request将直接返回该值，一种很好的做法就当接口的数据格式已经确定，但是接口还无法调用的时候先使用testData调通本地所有的逻辑和交互，等到接口可以调用的时候直接将testData删除即可。这可以极大的降低你对接口的依赖，提升你的开发效率。
### testDelay的使用
当你使用测试数据的时候由于数据会直接返回，所以不能充分模拟在各种网络环境下的延迟，此时你可以通过testDelay来设置一个延迟时间，从而模拟出各种网络延迟的情况。

## Service设置
在日常开发中我们经常需要调用不同的SERVICE服务来获取数据，通常情况下这些服务器是在相同的域名下使用不同的网络名称，如"product.abc.com"或"coupon.abc.com"之类的。CyanMapleCLI为你提供了非常方便的区分不同service的方法。你只需要在src/lib/api目录下建立一个JS文件，并将下面的代码复制进去并做简单修改即可。
```javascript
import Super from "./_class.js";
let serviceName = "";
let injectName = "";
let serverList = {
  get: {},
  post: {}
};
let service = new Super(serverList, `${serviceName}`);
export default service;
export const SERVICE = {
  inject(app) {
    app.inject(`$${injectName}`, service);
  }
};
```
:::tip
我们的建议是将文件名和你的service服务器名称保持一致，这样会方便你的维护
:::
当你建立了service文件之后，你需要修改的地方有三处：
- serviceName：这里是需要调用的service的网络名称，如果你需要调用coupone.你的域名，那么你就可以在这里填写coupon
- injectName：这里是需要注入到APP的名称，如果你填写了couponService那么你就可以在你的程序中使用this.$couponService来调用
- serverList:这里是具体的接口地址设置，他是一个对象，key值表示请求类型，上面的代码给你提供了get和post两种方式，当然你也可增加更多。对应的value也是一个对象，value中的key值表示了具体的方法名称，后面的字符串表示具体的接口地址。
### 使用demo
新建coupon.js并放置到API文件夹下，设置情况如下
```javascript
cosnt serviceName="coupon";
cosnt injectName="coupon";
let serverList = {
  get: {
    info: "/public/getCouponInfo"
  },
  post: {
    price: "/public/getCouponPrice"
  }
};
```
src/view文件夹下的页面
```vue
<script>
export default {
    inject: ["$coupon"],//这里对应了coupon.js中的injectName并在前面增加了$
    created(){
        //通过get请求"/public/getCouponInfo"
        this.$coupon.info({
            data:{},//发送的数据
        })
        //通过post请求"/public/getCouponPrice"
        this.$coupon.price({
            data:{},//发送的数据
        })
    }
}
</script>
```
:::tip
所有的service类就继承于request因此你可以在生成的方法中使用request的各种特性
:::
:::warning
注意：在不同的method中使用相同的方法名会导致后面的方法不可用，如同时在get和post中添加info，请在设置的时候注意
:::
```javascript
let serverList = {
  get: {
    info: "/public/getCouponInfo"
  },
  post: {
    info: "/public/getCouponPrice"//get中已经存在info,因此post中的该接口将不可用
  }
};
```

## 滚动加载

CyanMapleCLI内置了全局的scrollLoad组件用于数据的滚动加载，你只需要将滚动加载的模块放置在gc-scroll-load组件内，并设置handler为加载数据的函数即可。需要注意的是在加载函数内你需要返回一个promise。如果需要停止滚动加载只需要返回Promise.reject()即可。
```vue
<template>
  <div>
    <gc-scroll-load :handler="getproduct">
      <div v-for="(item, index) in productList">
        {{ item.productName }}
      </div>
    </gc-scroll-load>
  </div>
</template>
<script>
export default {
  inject: ["$request"],
  data() {
    return {
      productList: [],
      startNum: 0,
      pageCount: 10
    };
  },
  created() {},
  methods: {
    getproduct() {
      return this.$request({
        data:{
          startNum: this.startNum,
        }
      }).then(data => {
          this.productList = this.productList.concat(data);
          this.startNum += 10;//每次调用的时候startNum增加10
          if (this.productList.length > 100) {//当商品数量大于100的时候停止滚动加载
            return Promise.reject();
          }
        });
    }
  }
};
</script>
```
## 功能注入
CyanMapleCLI的业务逻辑部分使用依赖注入来完成，并且会扫描src/lib下的带有注入接口的JS文件来进行注入，如果你需要增加更多的功能，只需要添加一个JS文件到src/lib文件夹下并按照下面的结构提供注入接口即可。

```javascript
//request模块的注入DEMO
export default request;
export const Request = {
  inject(app) {
    app.inject("$request", request);
  }
};
```

## 风格与主题设置
CMUI内置了一些色彩和基础尺寸[点击查看](http://www.cyanmaple.design/cyanMapleDoc/Cyan/color_and_size.html)，虽然我们参考了大量的案例给出了最合适的设置，但是依旧不能保证完全适合你的风格，因此，你可以通过自定的方式来修改这些设置。

src/style/_variables.scss文件是整个项目的SCSS变量配置文件。在这里你可以修改CMUI的基础颜色和基础尺寸来满足你的项目需要，你也可以定义更多的变量以便在项目中统一引用，所有和CMUI相关的变量都做了明确的注释
## 自动样式应用
CMUI的一大特点是动态样式的应用，比如为一个DOM节点添加名为padding15的class，那么在移动端下会自动添加对应750设计稿的15像素内边距并根据设备的不同自动缩放，在PC下会直接添加15像素的内边距。相同的特性已经在CyanMapleCLI中内置，你可以直接使用，详细规则如下
|类名|作用|exp|
|---|---|---|
|margin{num}|设置margin|margin20
|margin{pos}{num}|设置某个方向上的margin，{pos}的值为t,r,b,l,h,v六个值|marginr20
|margin{pos}-n{num}|设置某个方向上的**负**margin，{pos}的值为t,r,b,l,h,v六个值|marginr-n20
|padding{num}|设置padding|padding20
|padding{pos}{num}|设置某个方向上的margin，{pos}的值为t,r,b,l,h,v六个值|paddingt20
|{pos}{num}|在非相对定位时设置某个方向上的距离{pos}的值为top,right,left,bottom四个值|top-30
|{pos}-n{num}|在非相对定位时设置某个方向上的**负**距离{pos}的值为top,right,left,bottom四个值|bottom-n30
## 顶部head栏
CyanMapleCLI内置了ac-header组件用于设置页面的head栏，并在APP.VUE内进行引用，你只需要为Vue文件设置meta属性添加headerConfig属性，就可以非常方便的来对当前页面设置head的显示。
```vue
<script>
// src/views/about.vue 示例 
export default {
  mate: {
    headerConfig: {
      title: "关于我们",//即使将show设置为false，依然可以通过该属性来设置document.title的显示
      show:true//默认为true，可以省略，如果需要隐藏head可以设置为false
    }
  }
};
</script>
```