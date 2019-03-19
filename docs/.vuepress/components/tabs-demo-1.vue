<template>
  <div style="padding-top: 16px;">
    <s-tabs :selected="selected">
      <s-tabs-head>
        <s-tabs-item name="1">1</s-tabs-item>
        <s-tabs-item name="2">2</s-tabs-item>
      </s-tabs-head>
      <s-tabs-body>
        <s-tabs-pane name="1">content 1</s-tabs-pane>
        <s-tabs-pane name="2">content 2</s-tabs-pane>
      </s-tabs-body>
    </s-tabs>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
import STabs from "../../../src/tabs/tabs";
import STabsBody from "../../../src/tabs/tabs-body";
import STabsHead from "../../../src/tabs/tabs-head";
import STabsItem from "../../../src/tabs/tabs-item";
import STabsPane from "../../../src/tabs/tabs-pane";

export default {
  components: { STabs, STabsBody, STabsHead, STabsItem, STabsPane },
  data() {
    return {
      selected: "1",
      content: `
data:{
  selected: '1'
}

<s-tabs :selected="selected">
  <s-tabs-head>
    <s-tabs-item name="1">1</s-tabs-item>
    <s-tabs-item name="2">2</s-tabs-item>
  </s-tabs-head>
  <s-tabs-body>
    <s-tabs-pane name="1">content 1</s-tabs-pane>
    <s-tabs-pane name="2">content 2</s-tabs-pane>
  </s-tabs-body>
</s-tabs>
      `.trim()
    };
  }
};
</script>