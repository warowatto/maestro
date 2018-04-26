import Vue from 'vue'
import Router from 'vue-router'

// page component
import IndexPage from '../pages/IndexPage'
import RootPage from '../pages/RootPage'

import EnsemblePage from '../pages/EnsemblePage'
import SymphonyPage from '../pages/SymphonyPage'

import MusicBox from '../components/MusicBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: MusicBox
    },
    {
      path: '/ensemble',
      component: RootPage
    },
    {
      path: '/symphony',
      component: SymphonyPage
    }
  ]
})
