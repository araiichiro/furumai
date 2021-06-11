import Vue from 'vue'
import Router from 'vue-router'
import {formatVersion, sampleFragment} from '@/furumai/sample'
import AppLayout from '@/AppLayout.vue'
import FurumaiApp from '@/components/FurumaiApp.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          redirect: {
            name: 'furumai',
            params: {
              format: formatVersion,
              data: sampleFragment,
            },
          },
        }, {
          path: 'apps/:format/:data',
          component: FurumaiApp,
          name: 'furumai',
        },
      ],
    },
  ],
})
