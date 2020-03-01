//applyMiddleware,compose是为了使用下面两个插件
import {createStore,applyMiddleware,compose} from 'redux' //引入redux
import thunk from 'redux-thunk' //引入redux中间件插件
import reducer from './reducer'    //引用reducer中的数据

//浏览器安装的仓库插件 调试面板
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

//redux中间件插件 此函数为了兼容两个插件并行
const enhancer = composeEnhancers(applyMiddleware(thunk))

//定义一个仓库 唯一的 不能有两个仓库 createStore仓库只接收两个参数
const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store  //将仓库导出