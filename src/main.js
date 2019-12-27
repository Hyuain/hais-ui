import Vue from '../node_modules/vue/dist/vue.js'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)
Vue.component('u-button-group', ButtonGroup)

new Vue({
  data:{
    loading1: false,
    loading2: true,
    loading3: false
  }
}).$mount('#app')

import chai from 'chai'
import spies from 'chai-spies'
const expect = chai.expect
// 单元测试
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-settings')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')
  vm.$el.remove()
  vm.$destroy()
}
{
  const div =document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
    }
  })
  vm.$mount()
  vm.$on('click', function () {
    console.log(1)
  })
  let button = vm.$el
  button.click()
}