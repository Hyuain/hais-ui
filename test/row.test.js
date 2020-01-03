const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

  it('存在.', () => {
    expect(Row).to.exist
    expect(Col).to.exist
  })
  it('接收 gutter 属性.', (done) => {
    Vue.component('u-row', Row)
    Vue.component('u-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-row gutter="20">
        <u-col span="12"></u-col>
        <u-col span="12"></u-col>
      </u-row>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(() => {
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it('接收 align 属性', () => {
    const Constructor = Vue.extend(Row)
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
      propsData: {
        align: 'center'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('center')
    vm.$destroy()
    div.remove()
  })
})