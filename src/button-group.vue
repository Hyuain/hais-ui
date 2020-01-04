<template>
  <div class="u-button-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'HaiButtonGroup',
    mounted() {
      for (let node of this.$el.children) {
        let nodeName = node.nodeName.toLowerCase()
        if (nodeName !== 'button') {
          console && console.warn &&
          console.warn(`<u-button-group> 的子元素应该为 <u-button>，而不能是 <${nodeName}>`)
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
  .u-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .u-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
      }
      &:last-child {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>