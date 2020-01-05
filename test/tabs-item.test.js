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

describe('TabsItem', () => {

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
          if (head.$options.name === 'HaiTabsHead') {
            head.$children.forEach((item) => {
              expect(item.$el.getAttribute('data-name')).to.eq('anime')
            })
          }
        })
      })
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it('接收 disabled 属性.', (done) => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <u-tabs selected="anime">
        <u-tabs-head>
          <u-tabs-item name="anime" disabled> 动漫 </u-tabs-item>
          <u-tabs-item name="finance"> 经济 </u-tabs-item>
        </u-tabs-head>
        <u-tabs-body>
          <u-tabs-pane name="anime"> 动漫相关资讯 </u-tabs-pane>
          <u-tabs-pane name="finance"> 经济相关资讯 </u-tabs-pane>
        </u-tabs-body>
      </u-tabs>
    `
    const vm = new Vue({
      el: div
    })
    const callback = sinon.fake()
    vm.$nextTick(() => {
      vm.$children.forEach((tabs) => {
        tabs.$children.forEach((head) => {
          if (head.$options.name === 'HaiTabsHead') {
            head.$children.forEach((item) => {
              if (item.name === 'anime') {
                expect(item.$el.classList.contains('disabled')).to.be.true
                item.$on('click', callback)
                item.$el.click()
                expect(callback).to.have.not.been.called
              }
              if (item.name === 'finance') {
                expect(item.$el.classList.contains('disabled')).to.be.false
                item.$on('click', callback)
                item.$el.click()
                expect(callback).to.have.been.called
              }
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