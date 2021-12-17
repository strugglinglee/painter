<template>
  <div class="wrap">
    <div></div>
    <input type="text" :value="text"/>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  setup() {
    const store = useStore();
    const getNumbers = computed(() => store.getters.getNumbers);

    return {
      getNumbers,
    };
  },
};
</script>

<style>
.wrap {
  position: fixed;
  bottom: 0;
}
</style>
