<template>
  <div>
    <input type="text" v-model="title" @keydown.enter="addTodo" />
    <button v-if="active > all" @click="clear">Clear</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos">
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.title }}</span>
        </label>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      全选 <input type="checkbox" v-model="allDone" />
      <span>{{ active }}/{{ all }}</span>
    </div>

    <hr />
    <p @click="add">{{ count }}</p>
  </div>
</template>
<script setup>
import { ref, computed, watchEffect } from "vue"

let count = ref([])
function add() {
  count.value.push(1)
  console.log(0,count.value)
}
watchEffect(() => {
  console.log(1, count.value)
  // console.log(2, count.value.length)
})

const title = ref("")
const todos = ref([{ title: "学习Vue", done: false }])

let active = computed(() => {
  return todos.value.filter((v) => !v.done).length
})

let all = computed(() => {
  return todos.value.length
})

let allDone = computed({
  get: function () {
    return active.value === 0
  },
  set: function (value) {
    todos.value.forEach((todo) => {
      todo.value = value
    })
  },
})

watchEffect(() => {
  console.log("todos", todos.value)
})

function addTodo() {
  if (!title.value) return
  todos.value.push({
    title: title.value,
    done: false,
  })
  title.value = ""
}

function clear() {
  todos.value = todos.value.filter((v) => !v.done)
}

// use function example
function useTodos() {
  let title = ref("")
  let todos = ref([{ title: "学习Vue", done: false }])
  function addTodo() {
    todos.value.push({
      title: title.value,
      done: false,
    })
    title.value = ""
  }
  function clear() {
    todos.value = todos.value.filter((v) => !v.done)
  }
  let active = computed(() => {
    return todos.value.filter((v) => !v.done).length
  })
  let all = computed(() => todos.value.length)
  let allDone = computed({
    get: function () {
      return active.value === 0
    },
    set: function (value) {
      todos.value.forEach((todo) => {
        todo.done = value
      })
    },
  })
  return { title, todos, addTodo, clear, active, all, allDone }
}
</script>
<style>
h1 {
  color: red;
}

.done {
  text-decoration: line-through;
}
</style>
