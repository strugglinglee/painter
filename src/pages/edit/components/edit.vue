<template>
  <view>
    <movable-area class="area">
      <movable-view class="move" style="" direction="all" @click="showInput">
        {{ inputText }}
      </movable-view>
    </movable-area>
    <p-input v-model:text="inputText"></p-input>
  </view>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue';
import PInput from './p-input.vue';
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
    const state = reactive({
      bgStyle: {},
      inputText: '移动区域',
    });

    const initData = () => {
      const {
        full_info: {
          doc: { pageAttr },
        },
      } = props.editInfo;
      console.log(pageAttr, 'fi');
    };

    const showInput = () => {
      emit('showInput');
    };

    onMounted(() => {
      initData();
    });

    return { ...toRefs(state), showInput };
  },
};
</script>

<style>
.area {
  height: 100vh;
  width: 100vw;
  background: yellow;
}
.move {
  height: 100px;
  width: 100px;
  background: green;
}
</style>
