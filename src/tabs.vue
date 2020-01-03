<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "HaiTabs",
    props: {
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data(){
      return {
        eventBus: new Vue()
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.$children.forEach(vm => {
        if(vm.$options.name === 'HaiTabsHead') {
          vm.$children.forEach(child => {
            if (child.$options.name === 'HaiTabsItem' && child.name === this.selected) {
              console.log(child.$el)
              this.eventBus.$emit('update:selected', this.selected, child)
            }
          })
        }
      })
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
  }
</style>