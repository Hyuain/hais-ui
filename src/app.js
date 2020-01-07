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
import plugin from "./plugin"
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


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
Vue.component('u-popover', Popover)
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
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },

    showToast(position) {
      this.$toast(`当前功能不稳定，如果遇到 Bug 请关闭该功能，${parseInt(Math.random()*100)}`,
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