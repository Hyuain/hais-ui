import Row from "../src/row"

const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'
import Col from "../src/col"

Vue.component('u-tabs', Tabs)
Vue.component('u-tabs-head', TabsHead)
Vue.component('u-tabs-body', TabsBody)
Vue.component('u-tabs-item', TabsItem)
Vue.component('u-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('接受 selected 属性.', (done) => {
    Vue.component('u-row', Row)
    Vue.component('u-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-tabs selected="finance">
        <u-tabs-head>
          <u-tabs-item name="anime"> 动漫 </u-tabs-item>
          <u-tabs-item name="finance"> 财经 </u-tabs-item>
          <u-tabs-item name="sports"> 体育 </u-tabs-item>
        </u-tabs-head>
        <u-tabs-body>
          <u-tabs-pane name="anime"> 动漫相关资讯 </u-tabs-pane>
          <u-tabs-pane name="finance"> 财经相关资讯 </u-tabs-pane>
          <u-tabs-pane name="sports"> 体育相关资讯 </u-tabs-pane>
        </u-tabs-body>
      </u-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      expect(vm.$el.querySelector(`.tabs-item[data-name="finance"]`).classList.contains('active')).to.be.true
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

})