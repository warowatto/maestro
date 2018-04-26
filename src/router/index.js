import Vue from 'vue'
import Router from 'vue-router'

// page component
import IndexPage from '../pages/IndexPage'
import RootPage from '../pages/RootPage'

import EnsemblePage from '../pages/EnsemblePage'
import SymphonyPage from '../pages/SymphonyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      component: IndexPage
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
