<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

@Component({
  components: {Footer, Header},
})
export default class App extends Vue {
}
</script>

<style>
@import "https://unpkg.com/chota@0.6.2/dist/chota.min.css";

:root {
  --font-size: 1.4rem;
}
</style>
