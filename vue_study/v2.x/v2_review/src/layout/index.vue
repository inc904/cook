<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <router-link to="/foo/12">Foo</router-link>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'layout',
  components: {
    HelloWorld
  },
}
</script>
