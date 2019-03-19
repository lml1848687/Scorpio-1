<template>
  <div class="g-sub-nav" :class="{active,vertical}" v-click-outside="close">
    <span class="g-sub-nav-label" @click="onClick">
      <slot name="title"></slot>
      <span class="g-sub-nav-icon" :class="{open,vertical}">
        <g-icon name="right"></g-icon>
      </span>
    </span>
    <template v-if="vertical">
      <transition @enter="enter" @leave="leave" @after-enter="afterEnter" @after-leave="afterLeave">
        <div class="g-sub-nav-popover" v-show="open" :class="{vertical}">
          <slot></slot>
        </div>
      </transition>
    </template>
    <template v-else>
      <div class="g-sub-nav-popover" v-show="open">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script type="text/javascript">
import ClickOutside from "../click-outside.js";
import GIcon from "../../src/icon";
export default {
  name: "GuluSubNav",
  directives: { ClickOutside },
  components: { GIcon },
  inject: ["root", "vertical"],
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    active() {
      return this.root.namePath.indexOf(this.name) >= 0 ? true : false;
    }
  },
  methods: {
    enter(el, done) {
      el.style.height = "auto";
      let { height } = el.getBoundingClientRect();
      el.style.height = 0;
      el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterEnter(el) {
      el.style.height = "auto";
    },
    leave(el, done) {
      let { height } = el.getBoundingClientRect();
      el.style.height = `${height}px`;
      el.getBoundingClientRect();
      el.style.height = 0;
      el.addEventListener("transitionend", () => {
        done();
      });
    },
    afterLeave(el) {
      el.style.height = "auto";
    },
    close() {
      this.open = false;
    },
    onClick() {
      this.open = !this.open;
    },
    updateNamePath() {
      this.root.namePath.unshift(this.name);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
        //this.root.namePath = [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../styles/_var.scss";
.g-sub-nav {
  position: relative;
  &.active {
    position: relative;
    &:not(.vertical) {
      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        border-bottom: 1px solid $blue;
        width: 100%;
      }
    }
  }
  &-label {
    padding: 10px 20px;
    display: block;
    white-space: nowrap;
  }
  &-icon {
    display: none;
  }
  &-popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 2px;
    white-space: nowrap;
    background: white;
    box-shadow: 0 0 3px fade-out(black, 0.8);
    border-radius: $border-radius;
    background: $grey;
    color: $color;
    min-width: 8em;
    &.vertical {
      position: static;
      border-radius: none;
      border: none;
      box-shadow: none;
      transition: height 1s;
      overflow: hidden;
    }
  }
}
.g-sub-nav .g-sub-nav {
  &.active {
    &::after {
      display: none;
    }
  }
  .g-sub-nav {
    &-popover {
      top: 0;
      left: 100%;
      margin-left: 8px;
    }
    &-icon {
      display: inline-flex;
      margin-left: 0.5em;
      transition: transform 250ms;
      svg {
        fill: $light-color;
      }
      &.vertical {
        transform: rotate(90deg);
        &.open {
          transform: rotate(270deg);
        }
      }
      &.open {
        transform: rotate(180deg);
      }
    }
    &-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
