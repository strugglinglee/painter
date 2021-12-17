<template>
  <view>
    <button class="btn" @tap="download">下载</button>
    <movable-area class="area" ref="imgRef">
      <movable-view
        class="move"
        style=""
        direction="all"
        :scale="true"
        @tap="inputShowHandler"
      >
        {{ inputText }}
      </movable-view>
    </movable-area>
    <PInput ref="inputRef" v-model:text="inputText"></PInput>
    <canvas canvas-id="canvas-map" class="share-canvas"></canvas>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from 'vue';
import PInput from './input.vue';

export default {
  components: {
    PInput,
  },
  props: {
    editInfo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props, emit) {
    const inputRef = ref(null);
    const imgRef = ref(null);
    const state = reactive({
      bgStyle: {},
      inputText: '移动区域',
      showInput: false,
    });

    const initData = () => {
      const {
        full_info: {
          doc: { pageAttr },
        },
      } = props.editInfo;
      console.log(pageAttr, 'fi');
    };

    const download = () => {
      console.log('download');
    };

    const inputShowHandler = () => {
      inputRef.value.switchPop();
    };

    onMounted(() => {
      initData();
    });

    return { ...toRefs(state), inputShowHandler, download, inputRef, imgRef };
  },
};
</script>

<style>
.btn {
  height: 62rpx;
  line-height: 62rpx;
  font-size: 32rpx;
}
.area {
  height: 100vh;
  width: 100vw;
  background: yellow;
}
.move {
  height: 200rpx;
  width: 200rpx;
  background: green;
}
</style>
