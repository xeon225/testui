# FORM表单

## 代码片段

```vue
<gc-form :data="fromData" v-model="fromModel" />
<script>
import * as validator from "@/lib/validator.js";
export default {
  data(){
    return {
      fromData:[
        {label:'用户名',prop:'userName',rules:[validator.stringLen(8)]},
        {label:'性别',prop:'sex',type:'radio',options:{男:1,女:2}}
      ],
      fromModel:{},
    }
  }
}
</script>
```

## props属性

| 属性名      | 类型   | 默认值 | 说明           |
| ----------- | ------ | ------ | -------------- |
| label-width | string | 80px   | 标签宽度       |
| data        | Array  | []     | 显示表单的数据 |
| v-model     | Object | {}     | 表单绑定的数据 |

## data结构

| 属性名   | 类型                | 作用                                                         |
| -------- | ------------------- | ------------------------------------------------------------ |
| label    | String              | 表单显示名称                                                 |
| prop     | String              | 要传给后台的字段                                             |
| type     | String              | 显示的类型，不填默认为input，可以使用CMUI中所有的表单组件    |
| props    | Object              | 表单项接收的属性，具体参见表单项                             |
| disabled | Function \| Boolean | 是否禁用 如果是函数需要返回一个布尔类型的值                  |
| show     | Function \| Boolean | 是否显示 如果是函数需要返回一个布尔类型的值                  |
| options  | Array \| Object     | 对于select radio CheckBox 可以设置一个表示选项的数组，结构为{label,value,disabled}，也可以使用object，其中的key表示要显示的选项，value为对应的值 |
| required | Function \| Boolean | 是否必须 如果是函数需要返回一个布尔类型的值                  |
| rules    | Array               | 表单验证规则                                                 |
## v-model

用于设置表单的初始数据和获取最终数据，通常设置一个空对象即可，如果需要设置默认值，可以对和prop相同的key赋值。

```javascript
export default {
  data(){
    return {
      fromData:[
        {label:'用户名',prop:'userName'},
        {label:'性别',prop:'sex',type:'radio',options:{男:1,女:2}}
      ],
      fromModel:{userName:'默认用户名'},
    }
  }
}
```

## methods

| 事件名称   | 说明                                                 | 参数                                                         |
| ---------- | ---------------------------------------------------- | ------------------------------------------------------------ |
| validate   | 对表单进行全局验证，返回值为布尔类型                 | 无                                                           |
| getData    | 获取表单内容                                         | 无                                                           |
| clear      | 清空表单项                                           | 默认清空所有表单，可以以数组的形式传入prop名称来指定清除对应项。 |
| reset      | 重置表单项                                           | 通常情况为它和clear的作用是相同的，区别在于如果model绑定了默认值，使用该方法可以还原到默认值，而clear会全部清空 |
| setOptions | 对需要设置options进行批量设置通常是select checkbox等 | 表示选项和属性对应关系的对象                                 |

## methods Exp

```javascript
this.$refs.form.validate()//true or false
this.$refs.form.getData()//相当于直接获取model
this.$refs.form.clear(['name','sex'])//清空name sex两个表单项
//调用接口获取下来菜单的值，并异步设置
service.getData().then(data=>{
  this.$refs.form.setOptions({
    sex:data.map(i=>({value:i.name,value:i.id}))
  }) 
})
```

## slot

遇到复杂的表单结构可以使用作用域插槽的方式来进行自定义开发。

1：设置type为slot并指定对应的prop

2：使用template结合并指定slot

```vue
<tgos-form :data="fromData" v-model="fromModel" label-width="120px">
  <template slot="yugao">
    <cmui-radio-group v-model="fromModel.yugao">
      <cmui-radio :label="1"> 不预告 </cmui-radio>
      <cmui-radio :label="2"> 活动开始前 <cmui-input></cmui-input>小时预告 </cmui-radio>
    </cmui-radio-group>
  </template>
</tgos-form>
<script>
export default {
  data() {
    return {
      fromModel: { },
      fromData: [
        { label: "预告设置", prop: "yugao", type: "slot" }
      ]
    };
  }
};
</script>
```

## 前置和后置文本

有时需要对表单项增加前置和后置的说明文案，此时可以使用prepend和append属性进行控制

```javascript
fromData: [
  { label: "邮箱", prop: "email", append:'@163.com' }
]
```

## 显示隐藏和禁用

formData中的item提供show和disable两个属性，用于显示和禁用该项，如果它是一个动态的值，可以使用返回布尔类型的函数

```javascript
export default {
  data() {
    let _this=this;//这里需要注意一定要保留this
    return {
      fromModel: { },
      fromData: [
        { label: "输入状态", prop: "sss", type: "radio" ,options:{禁用:2,显示:1,隐藏:0} },
        { label: "输入项", prop: "name", 
         show:() => _this.fromModel.sss,
         disable:()=>_this.fromModel.sss===2
        }
      ]
    };
  }
};
```




