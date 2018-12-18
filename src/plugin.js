import Toast from './toast'
//工程组件
 export default {
   install (Vue, options) {
     //组件create方法
     Vue.prototype.$toast = function (message,toastOptions) {
       let Constructor = Vue.extend(Toast)
       let toast = new Constructor({
        propsData: toastOptions
       })
       toast.$slots.default = [message]
       toast.$mount()//挂载
       document.body.appendChild(toast.$el)
     }
   }
 } 