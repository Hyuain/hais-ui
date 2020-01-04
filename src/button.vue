<template>
  <button class="u-button" :class="{[`icon-${iconPosition}`]: true}" @click="$emit('click')">
    <u-icon class="icon" v-if="icon && !loading" :name="icon"></u-icon>
    <u-icon class="icon loading" name="loading" v-if="loading"></u-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
import Icon from "./icon.vue";

export default {
  name: 'HaiButton',
  components: {
    "u-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      default: "left",
      type: String,
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: white;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.u-button {
  font-size: $font-size;
  height: $button-height;
  line-height: $button-height;
  padding: 0 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .icon {
    order: 1;
    margin-right: 0.3em;
  }
  > .content {
    order: 2;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-right: 0;
      margin-left: 0.3em;
    }
    > .content {
      order: 1;
    }
  }
  .loading {
    animation: spin 2s linear infinite;
  }
}
</style>
