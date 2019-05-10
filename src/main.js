import Modular from 'modular-core'
import modules from '../modular.config' // 通过 ModularLoader 加载所有模块配置
import util from '@xportal/frame/libs/util'
import App from '@/App'
import menu from '@/app/menu'
import setting from '@/setting'

// 应用配置
const application = {
  name: process.env.VUE_APP_NAME,
  version: process.env.VUE_APP_VERSION,
  extensions: {
    'vue.app': {
      component: App
    },
    'vue.options': {
      created () {
        // 设置菜单
        this.$store.dispatch('d2admin/menu/set', menu)
        // 初始化菜单搜索功能
        this.$store.commit('d2admin/search/init', menu)
      },
      mounted () {
        // 展示系统信息
        // this.$store.commit('d2admin/releases/versionShow')
        util.log.capsule(
          setting.releases.name,
          `v${setting.releases.version} (${setting.releases.buildTime})`
        )
        console.log(process.env)
      }
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
