/**
 * 模块描述文件
 */
import path from 'path'
import routes from './routes'

export default {
  name: 'demo',
  dependencies: ['frame'],
  extensions: {
    'vue.router.routes': {
      parent: 'frame',
      routes
    }
  },
  '@path': path.resolve()
}
