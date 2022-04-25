<template>
<div>
  <h2>hello</h2>
  <Level :t="1" >标题</Level>
  <Level :t="2" >标题</Level>
  <Level :t="3" >标题</Level>
  <Level :t="4" >标题</Level>
  <Level :t="5" >标题</Level>
  <Level :t="6" >标题</Level>

</div>
</template>
<script>
// import Level from  './components/Level.vue'
import Level from  './components/LevelFunc'
export default {
  name: 'App',
  components:{
    Level
  }

}
</script>
