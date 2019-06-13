import VueAnalytics from 'vue-analytics'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(VueAnalytics, {
    id: 'UA-141772507-1',
    disabled: true
  })
  this.$ga.page('/')
}
