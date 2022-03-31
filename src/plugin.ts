import type { App } from 'vue-demi'
import { markRaw } from "vue";

export function createPlugin(options = {}) {
  return markRaw({
    install(app: App) {
      console.log('hello world')
    }
  })
}
