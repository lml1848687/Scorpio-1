<template>
  <div style="padding-top: 16px;">
    <s-input v-model="value"></s-input>
    <div>value: {{value}}</div>

    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import SInput from "../../../src/input";

export default {
  components: { SInput },
  data() {
    return {
      value: "1",
      content: `
data:{
  value: '1'
}

<s-input v-model="value"></s-input>
<div>
value: {{value}}
</div>
      `.trim()
    };
  }
};
</script>