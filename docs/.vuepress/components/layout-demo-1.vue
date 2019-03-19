<template>
  <div style="padding-top: 16px;">
    <s-layout style="color: white; margin-bottom:50px;">
      <s-header style="height: 50px; background:lightskyblue;">header</s-header>
      <s-content style="height: 100px; background:deepskyblue;">content</s-content>
      <s-footer style="height: 50px; background:lightskyblue;">footer</s-footer>
    </s-layout>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import SLayout from "../../../src/layout/layout";
import SHeader from "../../../src/layout/header";
import SFooter from "../../../src/layout/footer";
import SContent from "../../../src/layout/content";
import SSider from "../../../src/layout/sider";
export default {
  components: { SLayout, SHeader, SFooter, SContent, SSider },
  data() {
    return {
      content: `
<s-layout style="color: white; margin-bottom:50px;">
  <s-header style="height: 50px; background:lightskyblue;">
    header
  </s-header>
  <s-content style="height: 100px; background:deepskyblue;">
    content
  </s-content>
  <s-footer style="height: 50px; background:lightskyblue;">
    footer
  </s-footer>
</s-layout>
      `.trim()
    };
  }
};
</script>