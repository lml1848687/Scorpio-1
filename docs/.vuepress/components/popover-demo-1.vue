<template>
  <div class="wrapper">
    <div class="block">
      <s-popover trigger="click" position="left" class="popover">
        <s-button>左</s-button>
        <div slot="content">你好</div>
      </s-popover>
      <s-popover trigger="click" position="top" class="popover">
        <s-button>上</s-button>
        <div slot="content">你好</div>
      </s-popover>
      <s-popover trigger="click" position="bottom" class="popover">
        <s-button>下</s-button>
        <div slot="content">你好</div>
      </s-popover>
      <s-popover trigger="click" position="right" class="popover">
        <s-button>右</s-button>
        <div slot="content">你好</div>
      </s-popover>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>

<script>
import SPopover from "../../../src/popover";
import SButton from "../../../src/button/button";
export default {
  components: {
    SPopover,
    SButton
  },
  data() {
    return {
      content: `
<s-popover trigger="click" position="left" class="popover">
    <s-button>左</s-button>
    <div slot="content">你好</div>
</s-popover>
<s-popover trigger="click" position="top" class="popover">
    <s-button>上</s-button>
    <div slot="content">你好</div>
</s-popover>
<s-popover trigger="click" position="bottom" class="popover">
    <s-button>下</s-button>
    <div slot="content">你好</div>
</s-popover>
<s-popover trigger="click" position="right" class="popover">
    <s-button>右</s-button>
    <div slot="content">你好</div>
</s-popover>
      `.trim()
    };
  }
};
</script>

<style scoped lang="scss">
.wrapper {
  .popover {
    margin-left: 20px;
  }
}
</style>