export default {
  render() {
    return <h1 on-click={() => { console.log(111) }} style={{ color: red }}>1111</h1>
    // h('h1', {}, 'Hello')
  }
}
