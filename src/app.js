import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)
Vue.component('u-button-group', ButtonGroup)
Vue.component('u-input', Input)


new Vue({
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  },
  methods: {
    inputChange(e){
      console.log(e)
    }
  }
}).$mount('#app')