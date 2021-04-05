import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import First from '@/components/First.vue'
import A from '@/components/A.vue'
import B from '@/components/B.vue'
import A1 from '@/components/A1.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'First',
      component: First,
      children: [
        {
          path: '/b',
          component: B
        }
      ]
    },
    {
      path: '/a',
      component: A,
      children: [
        {
          path: '/a1',
          component: A1
        }
      ]
    }
  ]
})
