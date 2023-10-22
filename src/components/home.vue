<script setup>
let posts = [
  { title: 'Vue.js & Github Pages', date: 'Oct 22, 2023', tag: 'How To', route: 'githubvue' },
  { title: 'Custom Email Domains', date: 'Sep 25, 2023', tag: 'How To', route: 'customemail' },
  { title: 'TinyMCE', date: 'Sep 10, 2023', tag: 'How To', route: 'tinymce' },
  { title: 'Date Time', date: 'July 21, 2023', tag: 'Functionality', route: 'datetime' },
  { title: 'Media Queries', date: 'Feb 20, 2023', tag: 'Functionality', route: 'mediaqueries' },
  { title: 'Grid', date: 'Feb 10, 2023', tag: 'Design', route: 'grid' },
  { title: 'Centering', date: 'Feb 8, 2023', tag: 'Design', route: 'centering' },
];
</script>

<template>
  <div>
    <h1>Welcome to my Blog!</h1>
    <p>
      Hi! I primarily work on front end coding, so that's what I'll mainly be writing about. I try to keep my notes
      short and concise, but still include all relavant info.
    </p>
    <div class="blog">
      <router-link :to="'/post/' + item.route" class="post" v-for="(item, i) in posts" :key="i">
        <div class="title">{{ item.title }}</div>
        <div class="inner-grid">
          <div class="date">{{ item.date }}</div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blog {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
  margin-top: 15px;
}

.post {
  padding: 15px;
  background: var(--dark-gray);
  border-radius: 10px;
  border: 2px solid var(--dark-gray);
}

.post .title {
  color: var(--cyan);
  font-size: 18px;
  margin-bottom: 8px;
}
.post:hover {
  text-decoration: none;
  border-color: var(--medium-gray);
}

.inner-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.post .tag {
  text-align: end;
}

.tag span {
  background: var(--cyan-80);
  color: var(--dark-gray);
  padding: 2px 4px;
  border-radius: 5px;
  font-weight: 600;
}

@media (max-width: 959px) {
  .blog {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 599px) {
  .blog {
    grid-template-columns: 1fr;
  }
}
</style>
