<template>
    <view class="index">
        <Item
            v-for="item in list"
            :key="item.src"
            v-bind="item"
            class="item"
            :dateInfo="dateInfo"
            @itemClick="goDetail(item._id)"
        />
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'
import { getDateInfo } from '@/utils/date'
import Item from './item.vue'

export default {
    name: 'Index',
    components: { Item },
    setup() {
        const dateInfo = getDateInfo()
        console.log('dateInfo', dateInfo)
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
            goDetail,
            dateInfo
        }
    }
}
</script>

<style lang="scss">
.index {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 20px;

    .item {
        &:not(last-child) {
            margin-bottom: 20px;
        }
    }
}
</style>
