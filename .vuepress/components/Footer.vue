<template>
  <nav class="nav">
    <hr/>
    <div class="nav-left">
      <a>About</a>
      <a>Gallery</a>
      <a>GitHub Repository</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.nav-left {
  float: left;
}

.nav-left a {
  margin-right: 1rem;
}
</style>
