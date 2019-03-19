---
title:Collapse
---

# Collapse

## 需求演示

- 设置默认打开的面板
- 可以同时展开多个面板

<ClientOnly>
   <collapse-demo-1></collapse-demo-1>
</ClientOnly>

- 每次只可以展示一个面板

<ClientOnly>
   <collapse-demo-2></collapse-demo-2>
</ClientOnly>

## API

| 参数          | 说明           | 类型    | 默认值 |
| ------------- | -------------- | ------- | ------ |
| selected.sync | 默认打开项     | Array   | -      |
| single        | 每次只显示一项 | Boolean | false  |
| title         | 标题           | String  | 必须写 |
| name          | 每个 item 标记 | String  | 必须写 |

## 实现逻辑

- 单向数据流
  `collapse-item`自己得到了点击不更改状态，通知 `collapse`。由 `collapse` 通知所有的`item` 后再修改
