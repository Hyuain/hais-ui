<template>
  <div class="container" :class="containerClass">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "HaiContainer",
    data(){
      return{
        containerClass: {
          hasSider: false
        }
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if(vm.$options.name === 'HaiSider') {
          this.containerClass.hasSider = true
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    &.hasSider{
      flex-direction: row;
    }
  }
</style>