<template>
  <div>
    <u-button @click="showToast">弹出信息</u-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../../src/button'
  import plugin from '../../../../src/plugin'
  Vue.use(plugin)
  export default {
    components: {
      'u-button': Button
    },
    methods: {
      showToast() {
        this.$toast('这是一条弹出信息')
      }
    }
  }

</script>