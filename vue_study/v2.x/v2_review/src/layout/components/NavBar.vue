<template>
  <div class="header d-flex">
    <div>xxx</div>
    <div class="personal d-flex">
      <div class="avatar">
        <img src="@/assets/images/avatar (3).jpg" alt="" />
      </div>
      <div class="name">Jacky</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        avatar: require('@/assets//images/avatar (1).jpg')
      }
    }
  }
</script>
<style scoped lang="scss">
  $headerWidth: 60px;
  $avatarWidth: 40px;

  .d-flex {
    display: flex;
    align-items: center;
  }
  .header {
    height: $headerWidth;
    line-height: $headerWidth;
    justify-content: space-between;
    .avatar {
      width: $avatarWidth;
      height: $avatarWidth;
      margin-right: 10px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
</style>
