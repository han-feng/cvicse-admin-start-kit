import { frameRoute } from './routes'

export default {
  created () {
    // 处理路由 得到每一级的路由设置
    this.$store.commit('d2admin/page/init', [ frameRoute ])
  },
  mounted () {
    // 用户登录后从数据库加载一系列的设置
    this.$store.dispatch('d2admin/account/load')
    // 获取并记录用户 UA
    this.$store.commit('d2admin/ua/get')
    // 初始化全屏监听
    this.$store.dispatch('d2admin/fullscreen/listen')
  }
}
