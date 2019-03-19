<template>
  <div class="wrapper">
    <s-slides :selected.sync="selected" :autoPlay="true">
      <s-slides-item name="1">
        <div class="box">1</div>
      </s-slides-item>
      <s-slides-item name="2">
        <div class="box">2</div>
      </s-slides-item>
      <s-slides-item name="3">
        <div class="box">3</div>
      </s-slides-item>
    </s-slides>

    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script>
import Slides from "../../../src/slides/slides";
import SlidesItem from "../../../src/slides/slides-item";
export default {
  components: {
    "s-slides": Slides,
    "s-slides-item": SlidesItem
  },
  data() {
    return {
      selected: "1",
      content: `
<s-slides :selected.sync="selected" :autoPlay="true">
    <s-slides-item name="1">
        <div>1</div>
    </s-slides-item>
    <s-slides-item name="2">
        <div>2</div>
    </s-slides-item>
    <s-slides-item name="3">
        <div>3</div>
    </s-slides-item>
</s-slides>

selected: '1',

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

.box {
  width: 100%;
  height: 300px;
  background: #40a9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: white;
}
</style>