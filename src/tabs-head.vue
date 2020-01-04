<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HaiTabsHead",
    inject: ['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected', (item, vm) => {
        const {width} = vm.$el.getBoundingClientRect()
        const left = vm.$el.offsetLeft
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
      })
    }
  }
</script>

<style lang="scss" scoped>
  $tab-height: 40px;
  $active-color: blue;
  $border-color: rgba(0,0,0,.1);
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: -1px;
      border-bottom: 2px solid blue;
      transition: all .3s;
    }
    > .actions-wrapper {
      margin-left: auto;
      display: flex;
      align-items: center;
      padding: 0 1em;
    }
  }
</style>