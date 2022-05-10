import babel from 'rollup-plugin-babel'

export default {
  input: './src/index.js',
  output: {
    file: './dist/vue.js',
    name: 'Vue',
    format: 'umd', // esm es6 commonJs iife umd统一模块规范
    sourcemap: true
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
