import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
  id: 'UA-141772507-1',
  disabled: true,
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
