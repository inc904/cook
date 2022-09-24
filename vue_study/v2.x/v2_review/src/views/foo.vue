<template>
  <div>
    <div>hello foo, {{ msg }}--{{ this.msg }}</div>
    <button @click="show">click</button>
  </div>
</template>
<script>
export default {
  name: "foo",
  data() {
    return {
      test: "hello",
      msg: "11",
    };
  },
  mounted() {
    this.msg = "JackJunce";
    console.log(this.$router);
    console.log(this.$route);
    console.log(this.$route.matched);
  },
  methods: {
    show() {
      console.log(this.msg);
    },
  },
};
</script>
