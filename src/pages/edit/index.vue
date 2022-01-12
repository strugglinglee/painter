<template>
  <view class="index">
    <Edit v-model:editInfo="editInfo"></Edit>
  </view>
</template>

<script>
import Edit from './components/edit.vue';
import { templates } from '../../mock/edit';
import { reactive, toRefs } from 'vue';
export default {
  name: 'Index',
  components: {
    Edit,
  },
  setup() {
    const state = reactive({
      editInfo: templates[0],
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
