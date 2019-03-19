<template>
  <div>
    <div>
      <s-nav :selected.sync="selected" vertical style="width:200px; margin:20px;">
        <s-nav-item name="home">首页</s-nav-item>
        <s-sub-nav name="about">
          <template slot="title">关于</template>
          <s-nav-item name="culture">企业文化</s-nav-item>
          <s-nav-item name="developers">开发团队</s-nav-item>
          <s-sub-nav name="contacts">
            <template slot="title">联系方式</template>
            <s-nav-item name="wechat">微信</s-nav-item>
            <s-nav-item name="qq">QQ</s-nav-item>
            <s-sub-nav name="phone">
              <template slot="title">手机</template>
              <s-nav-item name="cm">移动</s-nav-item>
              <s-nav-item name="cu">联通</s-nav-item>
              <s-nav-item name="cn">电信</s-nav-item>
            </s-sub-nav>
          </s-sub-nav>
        </s-sub-nav>
        <s-nav-item name="hire">招聘</s-nav-item>
      </s-nav>
    </div>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import SNav from "../../../src/nav/nav";
import SNavItem from "../../../src/nav/nav-item";
import SSubNav from "../../../src/nav/sub-nav";
export default {
  name: "demo",
  components: { SNav, SNavItem, SSubNav },
  data() {
    return {
      selected: "culture",
      content: `
selected: "culture"

<div>
  <s-sub-nav :selected.sync="selected" vertical style="width:200px; margin:20px;">
    <s-nav-item name="home">首页</s-nav-item>
    <s-sub-nav name="about">
      <template slot="title">关于</template>
      <s-nav-item name="culture">企业文化</s-nav-item>
      <s-nav-item name="developers">开发团队</s-nav-item>
      <s-sub-nav name="contacts">
        <template slot="title">联系方式</template>
        <s-nav-item name="wechat">微信</s-nav-item>
        <s-nav-item name="qq">QQ</s-nav-item>
        <s-sub-nav name="phone">
          <template slot="title">手机</template>
          <s-nav-item name="cm">移动</s-nav-item>
          <s-nav-item name="cu">联通</s-nav-item>
          <s-nav-item name="cn">电信</s-nav-item>
        </s-sub-nav>
      </s-sub-nav>
    </s-sub-nav>
    <s-nav-item name="hire">招聘</s-nav-item>
  </s-sub-nav>
</div>
      `.trim()
    };
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>