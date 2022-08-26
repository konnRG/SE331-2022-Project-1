import { createRouter, createWebHistory } from 'vue-router'
import PatientListView from '../views/PatientListView.vue'

const routes = [
  {
    path: '/',
    name: 'PatientList',
    component: PatientListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'about'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
