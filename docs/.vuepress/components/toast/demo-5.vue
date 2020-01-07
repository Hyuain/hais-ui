<template>
  <div>
    <hai-button @click="showToast1">不使用 HTML</hai-button>
    <hai-button @click="showToast2">使用 HTML</hai-button>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Button from '../../../../src/button'
  import plugin from '../../../../src/plugin'
  Vue.use(plugin)
  export default {
    components: {
      'hai-button': Button
    },
    methods: {
      showToast1() {
        this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>')
      },
      showToast2() {
        this.$toast('<a href="http://hais-teatime.com">Hais Teatime</a>', {
          enableHtml: true
        })
      }
    }
  }

</script>