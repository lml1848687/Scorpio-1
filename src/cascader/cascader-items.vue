<template>
  <div class="cascaderItems" :style="{height: height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" @click="onClickLabel(item)" :key="index">
        <span class="name">{{item.name}}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon name="loading" class="icon loading"></icon>
          </template>
          <template v-else>
            <icon v-if="!item.isLeaf" name="right" class="icon"></icon>
          </template>
        </span>
      </div>
    </div>
    <div class="right" v-if="rightItems" :loading-item="loadingItem">
      <gulu-cascader-items
        :items="rightItems"
        :height="height"
        :level="level+1"
        :selected="selected"
        @update:selected="onUpdateSelected"
      ></gulu-cascader-items>
    </div>
  </div>
</template>

<script>
import Icon from "../icon";
export default {
  name: "GuluCascaderItems",
  components: {
    Icon
  },
  props: {
    items: {
      type: Array
    },
    height: {
      type: String
    },
    selected: {
      type: Array,
      default: () => {
        return [];
      }
    },
    level: {
      type: Number,
      default: 0
    },
    loadingItem: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {};
  },
  computed: {
    rightItems() {
      if (this.selected[this.level]) {
        let item = this.items.filter(
          item => item.name === this.selected[this.level].name
        );
        if (item && item[0].children && item[0].children.length > 0) {
          return item[0].children;
        }
      }
    }
  },
  methods: {
    onClickLabel(item) {
      //this.seleceted[this.level] = item
      // this.$set(this.selected,this.level,item)
      let copy = JSON.parse(JSON.stringify(this.selected));
      copy[this.level] = item;
      copy.splice(this.level + 1);
      this.$emit("update:selected", copy);
    },
    onUpdateSelected(newSelected) {
      this.$emit("update:selected", newSelected);
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../styles/_var";
.cascaderItems {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100px;
  .left {
    height: 100%;
    padding: 0.3em 0;
    overflow: auto;
  }
  .right {
    height: 100%;
    border-left: 1px solid $border-color-light;
  }
  .label {
    padding: 0.3em 1em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    white-space: nowrap;
    &:hover {
      background: $grey;
    }
    > .name {
      margin-right: 1em;
      user-select: none;
    }
    .icons {
      margin-left: auto;
      transform: scale(0.8);
      .loading {
        animation: spin 2s infinite linear;
      }
    }
  }
}
</style>