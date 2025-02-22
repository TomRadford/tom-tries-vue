import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp({
  data() {
    return {
      count: 0,
    }
  },
  beforeMount() {
    console.log(this.count)
  },
  mounted() {
    setTimeout(() => this.count++, 1000)

    console.log(this.count)
  },

  render() {
    return this.count
  },
  template() {
    return
  },
})

app.use(createPinia())
app.use(router)

app.mount('#app')
