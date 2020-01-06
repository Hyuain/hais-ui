<template>
  <div>
    <u-button @click="showToast">有关闭按钮的弹出信息</u-button>
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
        this.$toast('有关闭按钮的弹出信息',
          {
            autoClose: false,
            closeButton: {
              text: '知道了',
              callback(toast) {
                console.log('用户说他知道了')
                console.log(toast)
              }
            },
            enableHtml: false
          }
        )
      }
    }
  }

</script>