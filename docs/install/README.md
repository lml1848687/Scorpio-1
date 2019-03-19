---
title: 安装
---

# 安装

- 文件夹里包含一个 demo,可以参考如何使用，注意引入的路径
- 下载仓库代码

```shell
git clone https://github.com/liujian891010/Scorpio.git
```

- 安装依赖

```shell
npm install
```

- 运行

```shell
npm run serve
```

- Demo

```js
import Vue from "vue";
import { Button } from "Scropio";

new Vue({
  el: "#app",
  components: {
    Button
  }
});
```

```html
<div>
  <button></button>
</div>
```
