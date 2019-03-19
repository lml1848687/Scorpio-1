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
  onClickButton () {
    this.$toast('你知道我在等你吗？', {
      closeButton: {
        text: '知道了',
        callback: () => {
          console.log('他说知道了')
        }
      }
    })
  }
},
      `.trim()
    };
  },
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          }
        }
      });
    }
  }
};
</script>