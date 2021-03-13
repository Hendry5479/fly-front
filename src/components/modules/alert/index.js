import AlertComponent from './Alert.vue'

const Alert = {}

Alert.install = (Vue) => {
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()

  // 绑定到新建的div
  instance.$mount(document.createElement('div'))

  // alert组件动态添加在instance.el上面
  document.body.appendChild(instance.$el)

  // 4. 添加实例方法
  Vue.prototype.$alert = (msg) => {
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = true
  }

  // 使用window.vue.$confirm 调试
  Vue.prototype.$confirm = (msg, success, cancel) => {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = true
    if (typeof success !== 'undefined') {
      instance.success = success
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel
    }
  }
}

export default Alert
