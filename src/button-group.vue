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
  .u-button-group {
    display: inline-flex;
    vertical-align: middle;
    > .u-button {
      border-radius: 0;
      &:not(:first-child) {
        margin-left: -1px;
      }
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>