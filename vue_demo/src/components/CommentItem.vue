<template>

  <div class="cmt-item">
    <div class="top-info flex">
      <div class="fake-avatar"></div>
      <div class="info">
        <p>{{ nickname }}</p>
        <p>{{ ctime }}</p>
      </div>
    </div>
    <div class="mid-cmt"> <span class="at-str" v-if="target_user">@{{ target_user }}</span> {{ cmt }}</div>
    <div class="btm-reply" @click="replysomebody">☆ 回复</div>
  </div>
</template>
<script>
export default {
  name: 'cmt-item',
  props: ['nickname', 'cmt', 'ctime', 'target_user'],
  methods: {
    replysomebody () {
      this.$emit('replyCmt', this.nickname)
    }
  }
}
</script>
<style>
.cmt-item {
  margin-bottom: 10px;
}

.cmt-item div {
  margin-bottom: 8px;
}

.top-info {}

.fake-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee;
  margin-right: 10px;
}

.mid-cmt,
.btm-reply {
  padding-left: 50px;
  cursor: pointer;
}
.at-str{
  color: #409EFF;
}
</style>
