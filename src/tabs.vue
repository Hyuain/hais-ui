<template>
  <div class="tabs" :class="{[`direction-${this.eventBus.direction}`]:true}">
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
    data() {
      return {
        eventBus: new Vue({
          data: () => {
            return {
              direction: this.direction
            }
          }
        })
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn(`<u-tabs> 的子组件应该是 <u-tabs-head> 和 <u-tabs-nav>，但是你没有写子组件`)
        }
      },
      selectTab() {
        this.$children.forEach(vm => {
          if (vm.$options.name === 'HaiTabsHead') {
            vm.$children.forEach(child => {
              if (child.$options.name === 'HaiTabsItem' && child.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, child)
                this.eventBus.$on('update:selected', () => {
                  this.$emit('update:selected', this.selected)
                })
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren()
      this.selectTab()
    }
  }
</script>

<style lang="scss" scoped>
  $text-color-dark: #282c34;
  .tabs {
    color: $text-color-dark;
    &.direction-vertical {
      display: flex;
    }
  }

</style>