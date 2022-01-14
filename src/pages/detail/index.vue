<template>
    <view class="detail">
        <canvas id="canvas" />
        <image class="img" :src="imgUrl" mode="widthFix" />
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import React from 'react'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'

export default {
    name: 'Detail',
    components: {},
    setup() {
        const state = reactive({
            detail: {},
            imgUrl: '',
        })
        const { params } = Taro.getCurrentInstance().router
        const drawImage = () => {}

        onMounted(async () => {
            const { result } = await cloudApi({
                type: 'getDetail',
                id: params.id,
            })
            state.detail = result
            Taro.setNavigationBarTitle({ title: state.detail.title })
            drawImage()
        })

        return {
            ...toRefs(state),
        }
    },
}
</script>

<style>
.detail {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 20px;
}

.img {
    margin: auto;
}
</style>
