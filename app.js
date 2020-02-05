import Vue from 'vue'
import Button from './src/button.vue'
import Icon from './src/icon.vue'
import ButtonGroup from './src/button-group.vue'
import Input from './src/input.vue'
import Row from './src/row.vue'
import Col from './src/col.vue'
import Container from './src/container.vue'
import Header from './src/header'
import Content from './src/content'
import Sider from './src/sider'
import Footer from './src/footer'
import plugin from "./src/plugin"
import Tabs from './src/tabs'
import TabsHead from './src/tabs-head'
import TabsBody from './src/tabs-body'
import TabsItem from './src/tabs-item'
import TabsPane from './src/tabs-pane'
import Popover from './src/popover'
import Collapse from './src/collapse'
import CollapseItem from './src/collapse-item'


Vue.component('hai-button', Button)
Vue.component('hai-icon', Icon)
Vue.component('hai-button-group', ButtonGroup)
Vue.component('hai-input', Input)
Vue.component('hai-row', Row)
Vue.component('hai-col', Col)
Vue.component('hai-container', Container)
Vue.component('hai-header', Header)
Vue.component('hai-content', Content)
Vue.component('hai-sider', Sider)
Vue.component('hai-footer', Footer)
Vue.component('hai-tabs', Tabs)
Vue.component('hai-tabs-head', TabsHead)
Vue.component('hai-tabs-body', TabsBody)
Vue.component('hai-tabs-item', TabsItem)
Vue.component('hai-tabs-pane', TabsPane)
Vue.component('hai-popover', Popover)
Vue.use(plugin)
Vue.component('hai-collapse', Collapse)
Vue.component('hai-collapse-item', CollapseItem)


new Vue({
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
    selectedTab: ['3'],
  },
  methods: {
    showToast1() {
      this.showToast('top')
    },
    showToast2() {
      this.showToast('middle')
    },
    showToast3() {
      this.showToast('bottom')
    },
    focus2(e) {
      console.log(e)
    },
    showToast(position) {
      this.$toast(`当前功能不稳定，如果遇到 Bug 请关闭该功能，${parseInt(Math.random() * 100)}`,
        {
          autoClose: false,
          position,
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