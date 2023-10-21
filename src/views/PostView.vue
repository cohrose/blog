<script setup>
import { useRoute } from 'vue-router';
import grid from '../components/posts/grid.vue';

let $route = useRoute();
let name = $route.params.name;
</script>

<template>
  <div>
    <router-link to="/" class="link"><i class="fa-solid fa-arrow-left"></i>Back</router-link>
    <h1>This is an post page {{ name }}</h1>
    <div v-if="name == 'grid'"><grid /></div>
  </div>
</template>

<style scoped>
.link {
  padding: 8px 10px;
  font-size: 15px;
  background: var(--medium-gray);
  color: #fff;
  border-radius: 6px;
  border: none;
}

i {
  padding-right: 5px;
}

.link:hover {
  cursor: pointer;
  text-decoration: none;
}

h1 {
  margin-top: 15px;
}
</style>
