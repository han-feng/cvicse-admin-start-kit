import Modular from 'modular-core'
import modules from '../modular.config'
import App from './App'

// 应用配置
const application = {
  name: process.env.VUE_APP_NAME,
  version: process.env.VUE_APP_VERSION,
  extensions: {
    'vue.app': {
      component: App
    }
  }
}

// 模块化组装
const modular = new Modular({
  modules,
  application
})

window.$modular = Object.freeze(modular)

// 应用启动
modular.start()
