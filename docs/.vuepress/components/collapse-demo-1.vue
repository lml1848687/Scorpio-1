<template>
  <div>
    <s-collapse :selected.sync="tabs">
      <s-collapse-item title="标题1" name="one">这是内容</s-collapse-item>
      <s-collapse-item title="标题2" name="two">这是内容</s-collapse-item>
      <s-collapse-item title="标题3" name="three">这是内容</s-collapse-item>
    </s-collapse>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Collapse from "../../../src/coollapse/collapse";
import CollapseItem from "../../../src/coollapse/collapse-item";

export default {
  name: "collapse-demo-1",
  data() {
    return {
      tabs: ["one", "two"],
      content: `
tabs:['one','two'],

<s-collapse :selected.sync="tabs" >
    <s-collapse-item title="标题1" name="one">这是内容</s-collapse-item>
    <s-collapse-item title="标题2" name="two">这是内容</s-collapse-item>
    <s-collapse-item title="标题3"  name="three">这是内容</s-collapse-item>
</s-collapse>
                `.trim()
    };
  },
  components: {
    "s-collapse": Collapse,
    "s-collapse-item": CollapseItem
  }
};
</script>

<style scoped lang="scss">
</style>