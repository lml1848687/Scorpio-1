---
title:Popover
---

# Popover

## 需求演示

- 击按钮弹出浮层，再次点击关闭浮层
- 如果容器上有 `overflow: hidden`，浮层依然能完整显示
- 浮层可以显示在四种位置：`left right top bottom`
- 内容支持文本，`html`
- 支持点击 `popover` 里的关闭按钮，进行关闭
- 支持 `click` 触发

<ClientOnly>
   <popover-demo-1></popover-demo-1>
</ClientOnly>

- 支持 `hover` 触发

<ClientOnly>
   <popover-demo-2></popover-demo-2>
</ClientOnly>

## API

| 参数     | 说明             | 类型   | 默认值 |
| -------- | ---------------- | ------ | ------ |
| trigger  | 触发方式         | String | click  |
| position | 弹出内容出现位置 | String | top    |

## 实现的逻辑

- 根据 `position` 的传入，`prop` 获取，给弹出的标签设定 `class`
- 使用了 `calc` 计算 `css` 长宽
- 使用 `addEventListene`r 来做`hover` 和 `click` 的事件监听，用传入的值来判断选择哪种监听方式
- 使用 `contains`来判断点击的元素是否包含目标元素
- `popover` 如果是一个过长的单词不换行，`word-break:break-all;`
- `window.scrollY+top` 和 `window.scrollX+left`，解决相对定位不准 bug
- 使用了 `beforeDestory`去除事件监听器,监听器过多会浪费内存,关闭 `popover removeEventListener`

```js
//把popover放在body里,而不是在原来的同级元素里
document.body.appendChild(xxx);
```
