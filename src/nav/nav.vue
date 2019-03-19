<template>
  <div class="g-nav" :class="{vertical:vertical}">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "GuluNav",
  provide() {
    return {
      root: this,
      vertical: this.vertical
    };
  },
  props: {
    selected: {
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      items: [],
      namePath: []
    };
  },
  mounted() {
    this.updatedChildren();
    this.listenToChildren();
  },
  updated() {
    this.updatedChildren();
  },
  computed: {},
  methods: {
    addItem(vm) {
      this.items.push(vm);
    },
    updatedChildren() {
      this.items.forEach(vm => {
        if (this.selected === vm.name) {
          vm.selected = true;
        } else {
          vm.selected = false;
        }
      });
    },
    listenToChildren() {
      this.items.forEach(vm => {
        vm.$on("update:selected", name => {
          this.$emit("update:selected", name);
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
.g-nav {
  display: flex;
  border-bottom: 1px solid $grey;
  color: $color;
  user-select: none;
  cursor: default;
  &.vertical {
    flex-direction: column;
    border: 1px solid $grey;
  }
}
</style>
