import Vue from 'vue'
import Router from 'vue-router'
import {formatVersion, sampleFragment} from '@/sample'
import AppLayout from '@/AppLayout.vue'
import Docs from '@/components/Docs.vue'
import Gallery from '@/components/Gallery.vue'
import FurumaiApp from '@/components/FurumaiApp.vue'
import Licenses from '@/components/Licenses.vue'

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
        }, {
          path: 'docs/:lang',
          component: Docs,
          name: 'docs',
        }, {
          path: 'gallery',
          component: Gallery,
          name: 'gallery',
        }, {
          path: 'dependencies',
          component: Licenses,
          name: 'dependencies',
        },
      ],
    },
  ],
})
