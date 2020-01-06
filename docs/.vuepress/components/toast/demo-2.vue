<template>
  <div>
    <u-button @click="showToast1">String</u-button>
    <u-button @click="showToast2">Html</u-button>
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
      showToast1() {
        this.$toast('Hais Teatime')
      },
      showToast2() {
        this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
          enableHtml: true
        })
      }
    }
  }

</script>