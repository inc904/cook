import { h, defineComponent } from "vue";
export default defineComponent({
  name: 'jsx-header',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  // h 函数形式
  // setup(props, { slots }) {
  //   return () => h('h' + props.level, {}, slots.default())
  // }

  // jsx 语法形式
  setup(props, { slots }) {
    const tag = 'h' + props.level
    return () => <tag>{slots.default()}</tag>
  }
})
