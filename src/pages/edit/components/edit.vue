<template>
  <view>
    <movable-area class="area">
      <movable-view class="move" style="" direction="all">带我走</movable-view>
    </movable-area>
  </view>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
.area {
  height: 200px;
  width: 200px;
  background: red;
}
.move {
  height: 50px;
  width: 50px;
  background: blue;
}
</style>
