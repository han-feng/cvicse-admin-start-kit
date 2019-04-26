import Modular from 'modular-core'
import vueModule from 'modular-vue'
import App from './App'

// 加载外部依赖模块配置
const modules = [vueModule]

// 遍历目录，获取本地模块配置
const files = require.context('./', true, /module\.config\.js$/)

files.keys().forEach(key => {
  modules.push(files(key).default)
})

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
