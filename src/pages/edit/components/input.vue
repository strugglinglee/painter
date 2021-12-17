<template>
  <transition name="slide-fade">
    <view class="pop" v-show="show">
      <view class="operate">
        <text class="no" @tap="close">×</text>
        <text class="yes" @tap="confirm">✔︎</text>
      </view>
      <input class="input" type="text" v-model="value" />
    </view>
  </transition>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const state = reactive({ value: '', show: false });
    console.log(props, 'props');

    const switchPop = () => {
      state.show = !state.show;
    };

    const close = () => {
      switchPop();
    };

    const confirm = () => {
      emit('update:text', state.value);
      switchPop();
    };

    onMounted(() => {
      state.value = props.text;
    });

    return { ...toRefs(state), switchPop, close, confirm };
  },
};
</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(100rpx);
  opacity: 0;
}

.pop {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 600rpx;
  background: rgba(0, 0, 0, 0.8);
}

.operate {
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20rpx;
}

.no,
.yes {
  color: #fff;
  font-size: 40rpx;
}

.input {
  width: 600rpx;
  margin: auto;
  color: #fff;
}
</style>
