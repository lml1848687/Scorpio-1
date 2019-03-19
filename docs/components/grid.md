---
title:Grid
---

# Grid

## 需求演示

- 布局一

<ClientOnly>
   <grid-demo-1></grid-demo-1>
</ClientOnly>

- 布局二 gutter

<ClientOnly>
   <grid-demo-2></grid-demo-2>
</ClientOnly>

- 布局三 offset

<ClientOnly>
   <grid-demo-3></grid-demo-3>
</ClientOnly>

## API

| 参数   | 说明   | 类型          | 默认值 |
| ------ | ------ | ------------- | ------ |
| gutter | 间隔   | Number/String | -      |
| align  | 位置   | String        | -      |
| span   | 跨度   | Number/String | -      |
| offset | 空格块 | Number/String | -      |

## 实现逻辑

- `col`使用 `margin:0 gutter px`
- `row` 使用 `margin:0 -gutter/2 px`
- 同时在`row`使用 `flex-wrap:nowrap`
- `offset` 使用了`margin-left` 来设置
- 跨度样式使用了 `SASS` 的 `forEach`

```css
$class-prefix: col-;
@for $n from 1 through 24 {
  &.#{$class-prefix}#{$n} {
    width: ($n / 24) * 100%;
  }
}
```
