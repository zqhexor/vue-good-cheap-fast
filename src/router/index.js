import Vue from 'vue'
import Router from 'vue-router'
import Output from '@/components/Output.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Output',
      component: Output
    }
  ]
})
