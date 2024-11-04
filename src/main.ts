import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Dashboard from './views/Dashboard.vue'
import Analytics from './views/Analytics.vue'
import Settings from './views/Settings.vue'

declare global {
  interface Window {
    wpData: {
      apiUrl: string;
      nonce: string;
      pluginUrl: string;
    };
  }
}

const routes = [
  { path: '/', component: Dashboard },
  { path: '/analytics', component: Analytics },
  { path: '/settings', component: Settings }
]

const router = createRouter({
  history: createWebHistory(window.wpData?.pluginUrl ?? '/'),
  routes
})

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')