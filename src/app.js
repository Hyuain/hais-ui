import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Container from './container.vue'
import Header from './header'
import Content from './content'
import Sider from './sider'
import Footer from './footer'
import Toast from './toast'
import plugin from "./plugin"

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)
Vue.component('u-button-group', ButtonGroup)
Vue.component('u-input', Input)
Vue.component('u-row', Row)
Vue.component('u-col', Col)
Vue.component('u-container', Container)
Vue.component('u-header', Header)
Vue.component('u-content', Content)
Vue.component('u-sider', Sider)
Vue.component('u-footer', Footer)
Vue.use(plugin)

new Vue({
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi'
  },
  methods: {
    showToast() {
      this.$toast(`当前功能不稳定，如果遇到 Bug 请关闭该功能，${parseInt(Math.random()*100)}`,
        {
          autoClose: false,
          autoCloseDelay: 3,
          position: 'middle',
          closeButton: {
            text: '知道了',
            callback(toast) {
              console.log('用户说他知道了')
            },
          },
          enableHtml: false
        }
      )
    }
  }
}).$mount('#app')