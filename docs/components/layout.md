---
title:Layout
---

# Layout

## 需求演示

- 布局一

<ClientOnly>
   <layout-demo-1></layout-demo-1>
</ClientOnly>

- 布局二

<ClientOnly>
   <layout-demo-2></layout-demo-2>
</ClientOnly>

- 布局三

<ClientOnly>
   <layout-demo-3></layout-demo-3>
</ClientOnly>

## 实现逻辑

- 在 `layout` 组件中检测子组件是否含有`sider` 组件
- 如果为 `true` 那么 `flex-direction：row`
- 如果为`false`那么为 `column` 方式排列

```js
mounted(){
    this.$children.forEach((vm)=>{
      if (vm.$options.name === 'Sider') {
        this.layoutClass.hasSider = true
      }
    })
  }
```
