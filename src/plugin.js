import Toast from './toast'
//工程组件
 export default {
   install (Vue, options) {
     Vue.prototype.$toast = function (message) {
       let Constructor = Vue.extend(Toast)
       let toast = new Constructor()
       toast.$slots.default = [message]
       toast.$mount()//挂载
       document.body.appendChild(toast.$el)
     }
   }
 } 