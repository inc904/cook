//TODO: 手写mini Vuex， 暂时看不懂 没有使用
import { inject, reactive } from 'vue'

const STORE_KEY = '__store__'

function useStore() {
  return inject(STORE_KEY)
}

function createStore(options) {
  return new Store(options)
}

class Store {
  constructor(options) {
    this._state = reactive({
      data: options.state(),
    })

    this._mutations = options.mutations
  }
  get state(){
    return this._state.data
  }
  commit = (type, payload)=>{
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }

  install(app){
    app.provide(STORE_KEY, this)
  }
}

export { createStore, useStore }
