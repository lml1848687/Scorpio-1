<template>
  <div style="padding-top: 16px;">
    <s-input value="中文"></s-input>
    <s-input value="中文" disabled></s-input>
    <s-input value="中文" readonly></s-input>
    <hr>
    <s-input value="123" error="请重新输入手机号码" class="input"></s-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import SInput from "../../../src/input";

export default {
  components: { SInput },
  data() {
    return {
      selected: "1",
      content: `
<s-input></s-input>
<s-input value="中文"></s-input>
<s-input value="中文" disabled></s-input>
<s-input value="中文" readonly></s-input>
<s-input value="123" error="请重新输入手机号码" class="input"></s-input>
  `.trim()
    };
  }
};
</script>