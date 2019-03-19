<template>
  <div style="padding-top: 16px;">
    <div>
      <s-button @click="onClickButton">上方弹出</s-button>
    </div>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<style>
.gulu-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/plugin";
import SButton from "../../../src/button/button";
import Vue from "vue";
Vue.use(plugin);
export default {
  components: { SButton },
  data() {
    return {
      content: `
<div>
  <s-button @click="onClickButton">上方弹出</s-button>
</div>
methods: {
  onClickButton() {
    this.$toast('<strong style="color:red;">加粗的提示</strong>', {
      enableHtml: true
    });
  }
}
      `.trim()
    };
  },
  methods: {
    onClickButton() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      });
    }
  }
};
</script>