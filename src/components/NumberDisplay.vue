<template>
    <view>
        <text class="title">{{ getNumbers }}</text>
    </view>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup() {
        const data = reactive({
            url: '',
            showHead: false
        })

        return {
            ...toRefs(data)
        }
    }
}
</script>

<style>
.title {
    font-size: 40px;
}
</style>
