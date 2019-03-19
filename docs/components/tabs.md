---
title:Tabs
---

# Tabs

## 需求演示

- 默认选中第一项

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

## API

| 参数     | 说明           | 类型   | 默认值  |
| -------- | -------------- | ------ | ------- |
| selected | 默认选中某一项 | String | name 值 |
| name     | 每一项的名字   | String | 必须写  |

## 实现逻辑

- 组件通信,在父组件使用 provide 建立事件中心

```js
data(){
  return{
      eventBus: new Vue()
  }
},
provide(){
    return {
        eventBus:this.eventBus
    }
},
```

在子组件或孙组件使用 inject 注入

```js
inject:['eventBus'],
```

- .sync 的使用方式,它是一个语法糖

```js
//子组件触发
this.$emit('update:selected', newTitle)
//父组件监听
<s-tabs :selected.sync="selectedTab"></s-tabs>
//父组件监听等价于
<s-tabs :selected="selectedTab"
    @update:selected="selectedTab= $event">
</s-tabs>
```

- 标签有 `class style`，且组件内部有`class style`,两者会共存合并其他则会默认覆盖
- `getBoundingClientRect()`得到一个元素的 `width height top left`
- 组件 `name`的作用性，通过 `this.$options.name` 找到
- `this.$children`，只能获得子组件不能获得子元素
- `this.$nextTick` 添加到任务队列中
- `console.warn` 报警告,但是有些浏览器没有这个函数，所以要检测下 `console&&console.warn`
