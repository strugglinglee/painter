<template>
    <view class="index">
        <view v-for="item in list" :key="item.src">
            <image :src="item.url" mode="widthFix" />
            <view>{{ item.title }}</view>
        </view>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import globalData from '@/globalData'
import { reactive, onMounted, toRefs } from 'vue'

export default {
    name: 'Index',
    components: {},
    setup() {
        const state = reactive({
            list: [],
        })

        onMounted(async () => {
            const {
                result: { data },
            } = await Taro.cloud.callFunction({
                name: 'painterFunctions',
                config: {
                    env: globalData.envId,
                },
                data: {
                    type: 'getList',
                },
            })
            state.list = data
        })
        return {
            ...toRefs(state),
        }
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
    margin: 20px;
}
</style>
