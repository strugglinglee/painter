<template>
    <view class="detail">
        <!-- 创建一个Canvas组件 -->
        <canvas
            canvas-id="MyCanvas"
            class="MyCanvas"
            :style="{
                width: canvasWidth,
                height: canvasHeight
            }"
        />
        <image class="img" :src="imgUrl" mode="widthFix" />
        <button @tap="download">保存图片</button>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
// import React from 'react'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'
import { getDateInfo } from '@/utils/date'

export default {
    name: 'Detail',
    components: {},
    setup() {
        const state = reactive({
            detail: {},
            imgUrl: '',
            canvasWidth: '360px',
            canvasHeight: '360px'
        })
        const { params } = Taro.getCurrentInstance().router

        const drawImage = () => {
            // 定义画布对象
            const MyCanvas = Taro.createCanvasContext('MyCanvas')
            Taro.getImageInfo({
                src: state.detail.url,
                success(res) {
                    MyCanvas.drawImage(res.path, 0, 0, 360, 360)
                    // 在画布上绘制文本
                    const dateInfo = getDateInfo()
                    MyCanvas.setFontSize(20) // 文本大小

                    MyCanvas.setFillStyle('#fff') // 填充背景颜色
                    MyCanvas.fillText(dateInfo.solarText, 200, 315) // 文本、x轴位置、y轴位置
                    MyCanvas.setFontSize(14) // 文本大小
                    MyCanvas.fillText(dateInfo.lunarText, 210, 340) // 文本、x轴位置、y轴位置

                    MyCanvas.fill() // 用fill方法真正的画到canvas中
                    MyCanvas.draw() // 绘制
                    setTimeout(() => {
                        Taro.canvasToTempFilePath({
                            x: 0,
                            y: 0,
                            width: 400,
                            height: 400,
                            canvasId: 'MyCanvas',
                            success: function (res) {
                                state.imgUrl = res.tempFilePath
                            }
                        })
                    }, 100)
                }
            })
        }

        const download = () => {
            Taro.saveImageToPhotosAlbum({
                filePath: state.imgUrl, // canvasToTempFilePath返回的tempFilePath
                success: res => {
                    console.log(res)
                }
                // fail: err => {}
            })
        }

        onMounted(async () => {
            const { result } = await cloudApi({
                type: 'getDetail',
                id: params.id
            })
            state.detail = result
            Taro.setNavigationBarTitle({ title: state.detail.title })
            drawImage()
        })

        return {
            ...toRefs(state),
            download
        }
    }
}
</script>

<style>
.detail {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.MyCanvas {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    opacity: 0;
}

.img {
    margin: auto;
}
</style>
