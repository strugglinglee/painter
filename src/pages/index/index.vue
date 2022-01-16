<template>
    <view class="index">
        <view v-for="item in list" :key="item.src" @tap="goDetail(item._id)">
            <image :src="item.url" mode="widthFix" />
            <view>{{ item.title }}</view>
        </view>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'

export default {
    name: 'Index',
    components: {},
    setup() {
        const state = reactive({
            list: []
        })

        onMounted(async () => {
            const {
                result: { data }
            } = await cloudApi({ type: 'getList' })
            state.list = data
        })

        const goDetail = id => {
            Taro.navigateTo({
                url: `/pages/detail/index?id=${id}`
            })
        }
        return {
            ...toRefs(state),
            goDetail
        }
    }
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
