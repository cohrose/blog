<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header></header>

  <RouterView />
</template>

<style scoped>
header {
  padding: 15px;
  margin-top: 30px;
}

@media (max-width: 599px) {
  header {
    margin-top: 10px;
    padding: 0;
  }
}
</style>
