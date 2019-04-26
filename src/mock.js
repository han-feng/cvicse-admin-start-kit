// 遍历目录，获取本地模块配置
const req = context => context.keys().map(context)
req(require.context('./', true, /mock\.js$/))
