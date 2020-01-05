const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('u-tabs', Tabs)
Vue.component('u-tabs-head', TabsHead)
Vue.component('u-tabs-body', TabsBody)
Vue.component('u-tabs-item', TabsItem)
Vue.component('u-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsPane', () => {

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('接收 name 属性.', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-tabs selected="anime">
        <u-tabs-head>
          <u-tabs-item name="anime"> 动漫 </u-tabs-item>
        </u-tabs-head>
        <u-tabs-body>
          <u-tabs-pane name="anime"> 动漫相关资讯 </u-tabs-pane>
        </u-tabs-body>
      </u-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      vm.$children.forEach((tabs) => {
        tabs.$children.forEach((head) => {
          if (head.$options.name === 'HaiTabsBody') {
            head.$children.forEach((pane) => {
              expect(pane.$el.getAttribute('data-name')).to.eq('anime')
            })
          }
        })
      })
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })
})