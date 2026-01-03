import { createRouter, createWebHistory } from 'vue-router'
import ProgramView from '../views/Program.vue'
import AboutView from '../views/About.vue'
import JeffDeveloper from '../components/developers/JeffDeveloper.vue'
import ReyDeveloper from '../components/developers/ReyDeveloper.vue'
import JazhmineDeveloper from '../components/developers/JazhmineDeveloper.vue'
import LisaDeveloper from '../components/developers/LisaDeveloper.vue'
import ChrishDeveloper from '../components/developers/ChrishDeveloper.vue'

// Placeholder for future developer components

// const DevPlaceholder = { template: '<div style="padding: 2rem; text-align: center;"><h3>Developer content not yet uploaded</h3></div>' }

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProgramView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  // Developers
  {
    path: '/developers/jk',
    name: 'jeff-developer',
    component: JeffDeveloper
  },
  {
    path: '/developers/rj',
    name: 'rey-developer',
    component: ReyDeveloper
  },
  {
    path: '/developers/jm',
    name: 'jazhmine-developer',
    component: JazhmineDeveloper
  },
  {
    path: '/developers/lm',
    name: 'lisa-developer',
    component: LisaDeveloper
  },
  {
    path: '/developers/ci',
    name: 'chrish-developer',
    component: ChrishDeveloper
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
