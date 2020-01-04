<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: "HaiCollapse",
    props: {
      alone: {
        type: Boolean,
        default: false
      },
      selected: {
        type: Array,
      }
    },
    data() {
      return {
        eventBus: new Vue({}),
      }
    },
    provide() {
      return {
        eventBus: this.eventBus
      }
    },
    mounted() {
      this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('add:selected', (name) => {
        let selectedTemp = JSON.parse(JSON.stringify(this.selected))
        if (this.alone) {
          selectedTemp = [name]
        } else {
          selectedTemp.push(name)
        }
        this.eventBus.$emit('update:selected', selectedTemp)
        this.$emit('update:selected', selectedTemp)
      })
      this.eventBus.$on('remove:selected', (name) => {
        let selectedTemp = JSON.parse(JSON.stringify(this.selected))
        const index = selectedTemp.indexOf(name)
        selectedTemp.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedTemp)
        this.$emit('update:selected', selectedTemp)
      })
    }
  }
</script>

<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $border-color;
    border-radius: $border-radius;
  }
</style>