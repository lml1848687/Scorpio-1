---
title:Nav
---

# Nav

## 需求演示

<ClientOnly>
  <nav-demo-1></nav-demo-1>
  <nav-demo-2></nav-demo-2>
</ClientOnly>

## API

| 参数     | 说明           | 类型   | 默认值 |
| -------- | -------------- | ------ | ------ |
| selected | 默认选中某一项 | String | 必须写 |
| vertical | 竖向展开       | String | 可选   |

## 实现逻辑

- 组件通信,在父组件使用 provide

```js
provide() {
    return {
      root: this,
      vertical: this.vertical
    };
  },
```

在子组件或孙组件使用 inject 注入

```js
inject: ["root", "vertical"],
```

- 没有什么类

```css
&:not(.vertical) {
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid $blue;
    width: 100%;
  }
}
```
