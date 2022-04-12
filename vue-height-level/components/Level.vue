<template>
  <div>
    <h1 v-if="t == 1"><slot /></h1>
    <h2 v-if="t == 2"><slot /></h2>
    <h3 v-if="t == 3"><slot /></h3>
    <h4 v-if="t == 4"><slot /></h4>
    <h5 v-if="t == 5"><slot /></h5>
    <h6 v-if="t == 6"><slot /></h6>
  </div>
</template>

<script>
export default {
  props: {
    t: {
      type: Number,
    },
  },
};
</script>
