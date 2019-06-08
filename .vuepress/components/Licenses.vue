<template>
  <div>
    <table id="dependencies">
      <tr>
        <td>Name</td>
        <td>License</td>
      </tr>
      <tr v-for="(license, key) in licenses">
        <td><a :href="license.repository">{{ key }}</a></td>
        <td><a :href="urlOf(license.licenseFile)">{{ license.licenses }}</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
import licensesJson from './dependencies'

export default {
  data() {
    return {
      licenses: licensesJson,
    }
  },
  methods: {
    urlOf(a) {
      return a
    }
  }
}
</script>
<style>
</style>
