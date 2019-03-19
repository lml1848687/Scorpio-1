---
title:Toast
---

# Toast

## 需求演示

- 不同方向的弹出
  <ClientOnly>
  <toast-demo-1></toast-demo-1>
  </ClientOnly>

- 点击关闭
  <ClientOnly>
  <toast-demo-2></toast-demo-2>
  </ClientOnly>
- 支持 HTML
  <ClientOnly>
  <toast-demo-3></toast-demo-3>
  </ClientOnly>

## API

| 参数        | 说明              | 类型    | 默认值                            |
| ----------- | ----------------- | ------- | --------------------------------- |
| position    | 出现的位置        | String  | top                               |
| enableHtml  | 是否可以传入 html | Boolean | false                             |
| closeButton | 关闭及回调        | obj     | text: '关闭', callback: undefined |

## 实现逻辑

- 使用 `plugin`，用户使用`Vue.use(plugin)`可以避免工程问题：1）挂在原型链名字重复；2）引用 Vue 版本不一致；

- `props` 的属性的默认值不能是一个对象，但可以是一个函数返回一个对象
- 假 `slot:<div v-html="$slots.default"></div>` 实现可以传 `html` 进入插槽
- 如果眼睛看到的不为 0 ，而 JS 打出来是 0，一般就是异步的问题，解决方案尝试用`this.$nextTick（()=>{}）`加入到队列中
