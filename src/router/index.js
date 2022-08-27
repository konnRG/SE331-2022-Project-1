import { createRouter, createWebHistory } from 'vue-router'
import PatientListView from '../views/PatientListView.vue'
import PatientLayoutView from '@/views/patient/PatientLayoutView.vue'
import PatientDetailView from '@/views/patient/PatientDetailsView.vue'
import PatientVaccineView from '@/views/patient/PatientVaccineView.vue'
import DoctorCommentView from '@/views/patient/DoctorCommentView.vue'
import PatientService from '@/services/PatientService'
import GStore from '@/store'
import NProgress from 'nprogress'

const routes = [
  {
    path: '/',
    name: 'PatientList',
    component: PatientListView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/patient/:id',
    name: 'PatientLayout',
    component: PatientLayoutView,
    props: true,
    beforeEnter: (to) => {
      return PatientService.getPatient(to.params.id)
        .then((response) => {
          GStore.patient = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: '404Resource',
              params: { resource: 'patient' }
            }
          } else {
            return { name: 'NetworkError' }
          }
        })
    },
    children: [
      {
        path: '',
        name: 'PatientDetails',
        component: PatientDetailView,
        props: true
      },
      {
        path: 'vaccine',
        name: 'PatientVaccine',
        props: true,
        component: PatientVaccineView
      },
      {
        path: 'doctor',
        name: 'DoctorComment',
        props: true,
        component: DoctorCommentView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
