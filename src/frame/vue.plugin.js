import Auth from '@/frame/libs/Auth'
import Validator from '@/frame/libs/Validator'

export default {
  install (Vue) {
    // 授权 mixin
    Vue.mixin(Auth)
    // 输入校验
    Vue.mixin(Validator)
  }
}
