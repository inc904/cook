import { ref, inject } from 'vue'

const ROUTER_KEY = '__router__'

function createRouter(options) {
  return new Router(options)
}

function useRouter() {
  return inject(ROUTER_KEY)
}

function createWebHashHistory() {
  function bindEvents(fn) {
    window.addEventListener('hashchange', fn)
  }

  return {
    bindEvents,
    url: window.location.hash.slice(1) || '/',
  }
}

class Router {
  constructor(options) {
    this.history = options.history
    this.router = options.router
    this.current = ref(this.history.url)

    this.history.bindEvents(() => {
      this.current.value = window.location.hash.slice(1)
    })
  }

  install(app) {
    app.provide(ROUTER_KEY)
  }
}

export { createRouter, createWebHashHistory, useRouter }
