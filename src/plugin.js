import Toast from './toast.vue'
export default {
  install(Vue, options){
    Vue.prototype.$toast = function (message, options = {}) {
      const Constructor = Vue.extend(Toast)
      const toast = new Constructor({
        data(){
          return {
            message
          }
        },
        propsData: options
      })
      console.log(options)
      toast.$slots.default = [message]
      toast.$mount()
      document.body.appendChild(toast.$el)
    }
  }
}