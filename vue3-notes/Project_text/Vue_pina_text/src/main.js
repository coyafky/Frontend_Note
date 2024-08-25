

import { createApp } from 'vue'
import  { createPinia } from 'pinia'
import App from './App.vue'

// 1.导入createPinia

const pinia = createPinia()
createApp(App).use(pinia).mount('#app')
