<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Welcome to my Blog!</h1>
    <p>
      Hi! I primarily work on front end coding, so that's what I'll mainly be writing about. I try to keep my notes
      short and concise, but still include all relavant info.
    </p>
  </header>

  <router-view></router-view>
</template>

<style scoped>
header {
  padding: 15px;
  margin-top: 30px;
}
</style>
