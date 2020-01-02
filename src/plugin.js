import Toast from './toast.vue'

let currentToast

export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, options = {}) {
      if(currentToast){
        currentToast.close()
      }
      currentToast = createToast({Vue, message, propsData: options})
    }
  }
}

/* helpers */

function createToast({Vue, message, propsData}) {
  const Constructor = Vue.extend(Toast)
  const toast = new Constructor({
    data() {
      return {message}
    },
    propsData
  })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  return toast
}