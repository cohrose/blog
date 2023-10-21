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
</style>
