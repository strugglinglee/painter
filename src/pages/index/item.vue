<template>
    <view class="item" @tap="onClick">
        <image class="img" :src="url" mode="widthFix"></image>
        <view class="text">
            <image class="text_png" :src="datePng" mode="widthFix" />
            <view class="text_top">
                {{ `${dateInfo.monthCn} / ${dateInfo.dayCn}` }}
            </view>
            <view v-if="dateInfo.term">
                {{ dateInfo.term }}
            </view>
            <view class="text_solar">
                {{ dateInfo.solarText }}
            </view>
            <view class="text_bottom"> {{ title }} </view>
        </view>
    </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'
import datePng from '../../assets/image_date.png'

export default {
    name: 'Index',
    components: {},
    props: {
        url: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        dateInfo: {
            type: Object,
            default: () => {}
        }
    },
    setup(props, { emit }) {
        const onClick = () => {
            emit('itemClick')
        }
        return {
            onClick,
            datePng
        }
    }
}
</script>

<style lang="scss">
.item {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: stretch;
    min-height: 100px;
    border: 1px solid #c0c0c0;
    border-radius: 8px;

    &:nth-child(2n) {
        flex-direction: row-reverse;

        .text {
            &_bottom {
                position: absolute;
                left: 20px;
            }
        }
    }

    .img {
        width: 70%;
    }

    .text {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        flex-shrink: 0;
        text-align: left;
        padding-left: 20px;
        padding-top: 20px;

        &_top {
            display: flex;
            justify-content: space-between;
        }

        &_png {
            width: 50px;
        }

        &_bottom {
            position: absolute;
            bottom: 20px;
            right: 20px;
        }

        &_solar {
            font-size: 22px;
        }
    }
}
</style>
