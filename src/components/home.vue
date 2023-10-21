<script setup>
let posts = [
  { title: 'Grid', date: 'Oct 23, 2023', tag: 'Angular', route: 'grid' },
  { title: 'TinyMCE', date: 'Oct 20, 2023', tag: 'Something', route: 'tinymce' },
  { title: 'Date Time', date: 'Oct 22, 2023', tag: 'Code here', route: 'datetime' },
  { title: 'Media Queries', date: 'Oct 21, 2023', tag: 'Angular', route: 'mediaqueries' },
  { title: 'Centering', date: 'Oct 20, 2023', tag: 'Something', route: 'centering' },
  { title: 'Custom Email Domains', date: 'Oct 20, 2023', tag: 'Code here', route: 'emaildomains' },
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
  background: var(--cyan);
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
