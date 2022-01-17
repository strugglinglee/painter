<template>
    <view class="mine"> 我的 </view>
</template>

<script>
import Taro from '@tarojs/taro'
import { reactive, onMounted, toRefs } from 'vue'
import { cloudApi } from '@/utils/api'

export default {
    name: 'Mine',
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

        return {
            ...toRefs(state)
        }
    }
}
</script>

<style lang="scss">
.mine {
}
</style>
