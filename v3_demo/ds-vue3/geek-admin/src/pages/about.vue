<template>
  <div>
    <h3>About</h3>
    <!-- <RateVue :value="score" @update-rate="update" /> -->
    <!-- <RateVue :value="score[1]" theme="yellow" />
    <RateVue :value="score[2]" theme="green" />
    <RateVue :value="score[3]" theme="purple" /> -->

    <RateVue v-model="score">课程评分：</RateVue>
    <RateVue v-model="score">课程评分2：</RateVue>
    <RateVue v-model="score1[2]" theme="green">服务评分：</RateVue>
    <Count />
  </div>
</template>
<script setup>
import { ref } from 'vue'
import RateVue from '../components/Rate.vue'
import Count from '../components/Count.vue'

let score1 = ref([1, 2, 3, 3.5])
let score = ref(1)

function update(num) {
  console.log(num)
  score.value = num
}
</script>
<style></style>
