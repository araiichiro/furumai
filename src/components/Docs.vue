<template>
  <div>
    <div v-if="lang === 'ja'" class="description">
      ja
    </div>
    <div v-if="lang === 'en'" class="description">
      en
    </div>

    <DocSnippet
      filename="./gallery/docs/align-center.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5AIYA2lSVOESALtDQNwA6SARSgIArgAcABBXSTgAyZIC2-JIqSrFCVQF9VQkROkAGOQskAvZBEun5axZLqbHAIxd7zVpDYuz7jpI4Lor4HrqqINh0SHBKdByIKKigdDiJkGgcUKIQOjpAA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/basic-shapes.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIADgIb75xIDmAvAOQBMADAwNwA6S3ZOALgijoA2jAAWZEhEbTYyBgF0uSJAQiiJUmQwBGCAB5KVMQVDI0NYydMY4AngBtqhKMe68BQ9AAIAtAB8PmqE6CohGv5BpkIWGiog2GRIcAC2ZPyIKKigfJmQaPxQAK4QAL5lQA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/array-list.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkj2HPABGcADZwALgE8qACzj5CSbryQUoCAK4AHAAQBDKFD2SdwHjp1JGAbToGKcJFQAMmHVr0LH1dK50B3eXEZKgAOPxkIShlxMIBWNxE9QQgRWhoAXWULHHRsnRwAJnycAGYSgBYSuJKANmsklLSaADo2mjcYcXUAayYaKyQITJKAdhLQ5QBfZQBaeZ5c61iaPXRC0pHFwuXaQXWKraQy3ZpcwrijnArT-HXao-nZxbjTiHXRq9rlHHHFyZ4IGweiQcDs4kQKFQoD0OAhkDQ3Q0ECmUyAA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/delete.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUiQAQC0AfA9VVU91YQDYQALhAaNW7Tkm5NeEAcIkpsJJHAC2JQYhSpQJHFshpBUAK4QAvhaA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/diff-mode.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEauyAZnAOYC8A5ALYERX5ymk0DcAOkjwIbckAIwDaYOPCFwANnAAuATyoALOPkJIAuoJxiJcKbMUq1G7TwC0V-gAILAPhtDBVizyF3HOQSGx8kcHR8cogoqKB8OCGQaHJQAK4QAL5JQA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/dx-dy.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnVQOZQICuADgARMBMXwKly746wiGK4AzOgF9GSElwC0APi44A2vgAeAXgDMABgC6daivUMq+S9LoQ7U7QE9DpuiGwkkcALYkAC6IKKigJDjBkGiBUGwQsrJAA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/eye-catch.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkADAAQDsbLAugG4AOkhF0oCAK4AHDjgA2cCEgAuMDsBEcOAVRjRyMABbVpEVmdjJ+wpNoBCEgO76otgL62xEmR1eRYDS0OAEFpaVttABF7QxMzVhwAT0UkQigbEXcREQBafJE9aA5cgD4ORwQXAxVWRmlJFRZMPxUJAGsIXPxqY1ooaiSmIRAADg5RkcEcpHzckUrqqBLysOlyWpZqHBwIGBhMpDWVjhiODdYAYQAlHSjDkGxqJDgaFUQUVFBt98g0NskEHc7iAA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/group-zone.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIA5lAgK4AOABDujcADpI01IEQDaAtgIZQScJAF4mIAOwAGcQF0A3CzY9uMABZ8qEEQHItsZDoVKaAI3IB3GNHSLWNAC4IEAG1ssAvnbKVa1qGBwOBAMzPYAXsgQNHzhoSZsVOQAHgCe7vZspnw4ANYQSPjoJl4mkUjRsQBMjAk0SQhpVXZsWTn5hVUldqVILCo0ALQAfGaW-hlOrgwjYwhWNnYs5vMTQ6MNaRkrC1AzGympzSyb6etm7QVFdqc1s9l5V8co2HxIcPwOiCiooDlfkDQDigFAgHg8QA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/label-text.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBE6A2jABYCGADhALwDkARggB4uYAEALqzxJ+EEb2rQILALoBuADpJaOfgiiUaDZi0axkPXgBtabCEdYAVanBi9bvAIL4AtnCRPZipDDVRaAObkVHSMQgCeRu6EUIYmZhYs1g4OANIAagDKhoIsFADWEOHoqLxgtEYAruQyXkog2LRIcC60-IgoqKAq7ZBo-FDVAL5DQA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/margin-padding.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIS6A2gLYCGUA5nEgLwDkATAAwAE637XAzH2YBdANwAdJElaUa9Jsx5Ku6diIlJJtKAgCuAB060ewSZ04AvZBEsmz5ztToNGq9hoed9VfPga1XPg8HJAIIWWcmNzF7cyp0UU4AIwT7AF9gqyQbC1ZOUyRPJ3lXYPNvX39S2M4qRKTgjPssnP58muKXVMKHCr8kAO7PKn5GjTTJEGwqJDhqABdEFFRQKhxFyDR5qF0INLSgA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/simple-animation.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaIAhgNwA6SARpUjnQLTNUkAEjAfG7Vc41WoduDKiGwkkcALYkALohSpQJHAsho5UAK4QAvnqA')"
    ></DocSnippet>

    <DocSnippet
      filename="./gallery/docs/svg-attributes.furumai"
      :url="urlOf('v1/N4IgbgpgTgzglgewHYgFwEYA0IDGCAmEaISBEA2gLYCGUA5nEgLwDkA7AAwAEATBywF0A3AB0kYpOnJiuXGABcoCANYRWAYg4BOAGYtMMuYpUQAtABtGEHNQAOTESCUBXJPkeGdcc+Y0AOACMcFk9keVN4AC81RzYeDyRZeQgAD3kAOgUlVQ0dADZqFlFErmS09K8fBxB1fOoE4TEJHmKJdC5TAD4uJB5pEqyTUwB3OHx5AAtWdH4DAeNVCysbexYXN31DQcX8ahgJ2ihqAE9q9DzeABYE2QRbahw4eVPHDnSAVgbikGxqJDgaPJEChUKAHkDIGhFM4IABfWFAA')"
    ></DocSnippet>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import DocSnippet from '@/components/DocSnippet.vue'
import {Route} from 'vue-router'

@Component({
  components: {DocSnippet},
})
export default class Docs extends Vue {
  private lang = 'en'

  @Watch('$route')
  public onRouteChanged(route: Route, oldRoute: Route) {
    this.lang = route.params.lang
  }

  public created() {
    const params = this.$route.params as any
    this.lang = params.lang
  }

  public urlOf(encoded: string): string {
    return `#/apps/${encoded}`
  }
}
</script>

<style>
.description {
  padding: 1rem;
  margin: 1rem;
}
</style>
