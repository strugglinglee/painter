<template>
    <view class="index"> 1 </view>
</template>

<script>
import Taro from '@tarojs/taro'
import globalData from '@/globalData'

export default {
    name: 'Index',
    components: {},
    setup() {
        console.log(globalData, 'globalData')
        Taro.cloud
            .callFunction({
                name: 'quickstartFunctions',
                config: {
                    env: globalData.envId,
                },
                data: {
                    type: 'getOpenId',
                },
            })
            .then((resp) => {
                console.log(resp)
            })
            .catch((e) => {})
        return {}
    },
}
</script>

<style>
.index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
