<template>
  <div class="row card">
    Dependencies:
    <table id="dependencies">
      <tr>
        <td>Name</td>
        <td>License</td>
      </tr>
      <tr v-for="(license, key) in licenses">
        <td><a :href="license.repository">{{ key }}</a></td>
        <td><a :href="license.licenseFile">{{ license.licenses }}</a></td>
      </tr>
    </table>
  </div>
</template>

<script>
import licensesJson from './dependencies'
export default {
  data() {
    return {
      licenses: licensesJson
    };
  },
}
</script>
<style>
#dependencies table, #dependencies td {
  border-collapse: collapse;
  border:1px solid #888;
}
</style>
