---
title:Input
---

# Input

## 需求演示

- 默认状态/禁用状态/不可编辑状态/警示状态

<ClientOnly>
  <input-demo-1></input-demo-1>
  <input-demo-2></input-demo-2>
</ClientOnly>

## API

| 参数     | 说明           | 类型    | 默认值 |
| -------- | -------------- | ------- | ------ |
| disabled | 是否禁用       | Boolean | false  |
| value    | 默认显示的提示 | String  | -      |
| readonly | 是否可编辑     | Boolean | false  |

## 实现逻辑

- 子组件触发事件，父组件监听

```js
@change="$emit('change', $event.target.value)"
@input="$emit('input', $event.target.value)"
@focus="$emit('focus', $event.target.value)"
@blur="$emit('blur', $event.target.value)"
```

- 根据 `props` 获取的 `disabled readonly value` 值来对 `input` 状态进行绑定
- 根据 `props` 获取的 `error` 值，判断是否存在添加`class`来切换 `input` 样式状态，以及提示是否显示
