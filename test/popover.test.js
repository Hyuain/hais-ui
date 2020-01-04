import Row from "../src/row"

const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'
import Col from "../src/col"

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.be.ok
  })

  it('可以设置position.', (done) => {
    Vue.component('u-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-popover position="bottom" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </u-popover>
    `
    const vm = new Vue({
      el: div
    })
    vm.$el.querySelector('button').click()
    vm.$nextTick(() => {
      const {contentWrapper} = vm.$refs.popover.$refs
      expect(contentWrapper.classList.contains('position-bottom')).to.be.true
      done()
    })
  })

  xit('可以设置trigger.', (done) => {
    Vue.component('u-popover', Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-popover trigger="hover" ref="popover">
        <template slot="content">
          弹出内容
        </template>
        <button>点我</button>
      </u-popover>
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=> {
      const event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      vm.$nextTick(()=> {
        const {contentWrapper} = vm.$refs.popover.$refs
        expect(contentWrapper).to.exist
        done()
      })
    },200)
  })


})