# Scropio UI 
[![Build Status](https://travis-ci.org/liujian891010/Scorpio.svg?branch=master)](https://travis-ci.org/liujian891010/Scorpio)

Scropio UI 是一个不太一样的 UI 框架（试验品）。

本 UI 框架是一个「面向源码阅读者」的框架。我制作这个框架的目的就是让自己学习轮子的制作思路,所有代码都追求可读性。

你可以通过查看逐个 commit 来学习本框架的制作思路

本 UI 框架是基于 Vue 2 实现的。

注意：本 UI 框架是学习时的副产品，请不要在生产环境中使用本 UI 框架。

## 学习目的

1. 单元测试、覆盖率、持续集成等工程概念
2. 重构、TDD/BDD、设计模式、单向数据流等技术概念
3. 熟练掌握 Vue 的使用

## 完成的 UI

- 轮子：按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴、级联选择、无缝轮播、响应式导航条

## 项目特点

1. 使用 Travis CI 进行持续集成
2. 有丰富的单元测试，项目完成时，期望测试覆盖率超过 90%
3. 自说明的代码，即使没有注释，你也能看懂
4. 初期我使用 parcel 构建方便上手，后期改为 Vue Cli 3 以实现更多功能

## UI 参考

本 UI 框架借鉴了一些成熟 UI 框架（如 Framework7、Element UI 和 Ant Design）的外观

## 源码学习

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
