module.exports = {
  base: "/Scorpio/",
  title: "Scorpio UI",
  description:
    "Scorpio UI 是一个好用的 UI 框架，提供了......一系列的常用组件，适合移动端和 PC 端的使用",
  themeConfig: {
    base: "/Scorpio/",
    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "文档",
        link: "/guide/"
      },
      {
        text: "交流",
        link: "https://github.com/liujian891010/Scorpio"
      }
    ],
    sidebar: [
      {
        title: "入门",
        children: ["/install/"]
      },

      {
        title: "组件",
        children: [
          "/components/button",
          "/components/grid",
          "/components/input",
          "/components/tabs",
          "/components/toast",
          "/components/layout",
          "./components/popover",
          "./components/slides",
          "./components/collapse",
          "./components/cascader",
          "./components/nav"
        ]
      }
    ]
  }
};
