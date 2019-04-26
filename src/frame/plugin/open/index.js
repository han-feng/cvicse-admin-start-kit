import util from '@/frame/libs/util'

export default {
  install (Vue, options) {
    Vue.prototype.$open = util.open
  }
}
