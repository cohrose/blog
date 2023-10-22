<script setup>
import { useRoute } from 'vue-router';
import grid from '../components/posts/grid.vue';
import centering from '../components/posts/centering.vue';
import mediaqueries from '../components/posts/media-queries.vue';
import datetime from '../components/posts/date-time.vue';
import tinymce from '../components/posts/tinymce.vue';
import customemail from '../components/posts/custom-email.vue';
import githubvue from '../components/posts/github-vue.vue';

// import test from '../components/posts/test.vue';

let $route = useRoute();
let name = $route.params.name;
</script>

<template>
  <div>
    <!-- <router-link to="/" class="link"><i class="fa-solid fa-arrow-left"></i>Back</router-link> -->
    <div v-if="name == 'grid'"><grid /></div>
    <div v-if="name == 'centering'"><centering /></div>
    <div v-if="name == 'mediaqueries'"><mediaqueries /></div>
    <div v-if="name == 'datetime'"><datetime /></div>
    <div v-if="name == 'tinymce'"><tinymce /></div>
    <div v-if="name == 'customemail'"><customemail /></div>
    <div v-if="name == 'githubvue'"><githubvue /></div>
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
