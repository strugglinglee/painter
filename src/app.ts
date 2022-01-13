import { createApp } from 'vue'
import store from './store'
import Taro from '@tarojs/taro'

import './app.scss'

const App = createApp({
    onShow(options) {},
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
    onLaunch: function () {
        if (!Taro.cloud) {
            console.error('请使用 2.2.3 或以上的基础库以使用云能力')
        } else {
            Taro.cloud.init({
                // env 参数说明：
                //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
                //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
                //   如不填则使用默认环境（第一个创建的环境）
                env: 'cloud1-3gbvr43vf766c84d',
                traceUser: true,
            })
        }
    },
})
App.use(store)

export default App
