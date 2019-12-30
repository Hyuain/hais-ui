import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)
Vue.component('u-button-group', ButtonGroup)

new Vue({
  data: {
    loading1: false,
    loading2: true,
    loading3: false
  }
}).$mount('#app')


import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)
const expect = chai.expect
// 单元测试
try {
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
    console.log(vm.$el)
    expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
  }
  {
    const div = document.createElement('div')
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
    const div = document.createElement('div')
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
    let spy = chai.spy(function () {
    })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors && window.errors.forEach((error) => {
    console.error(error.message)
  })
}