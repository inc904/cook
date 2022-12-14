<template>
  <div>
    <p>count: {{ count }}</p>
    <p>double: {{ count }} * 2 = {{ double }}</p>
    <button @click="add">Add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
let store = useStore()

let count = computed(() => store.state.count)
let double = computed(() => store.getters.double)

function add() {
  store.commit('add')
}

function asyncAdd() {
  store.dispatch('asyncAdd')
}
</script>
<style lang=""></style>
