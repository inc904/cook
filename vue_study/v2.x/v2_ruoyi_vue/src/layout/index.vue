<template>
  <div class="app-wrapper">
    <a-side />
    <div class="main-container">
      <div>
        <a-header />
        <TagsView />
      </div>
      <a-main />
    </div>
  </div>
</template>
<script>
import AHeader from './components/AHeader'
import ASide from './components/ASide'
import AMain from './components/AMain'
import TagsView from './components/TagsView'

export default {
  name: 'Layout',
  components: { ASide, AHeader, AMain, TagsView },
  mounted() {
  }

}
</script>
<style lang="scss">
.app-wrapper {
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }

  .main-container {
    width: 100%;
    height: 100%;
  }
}
</style>
