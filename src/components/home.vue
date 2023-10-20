<script setup>
let posts = [
  { title: 'the title here', date: 'Oct 23, 2023', tag: 'Angular' },
  { title: 'really cool stuff', date: 'Oct 20, 2023', tag: 'Something' },
  { title: 'more things here', date: 'Oct 22, 2023', tag: 'Code here' },
  { title: 'the title here', date: 'Oct 21, 2023', tag: 'Angular' },
  { title: 'really cool stuff', date: 'Oct 20, 2023', tag: 'Something' },
  { title: 'more things here', date: 'Oct 20, 2023', tag: 'Code here' },
];
</script>

<template>
  <div>
    <div class="blog">
      <div class="post" v-for="(item, i) in posts" :key="i">
        <div class="title">{{ item.title }}</div>
        <div class="inner-grid">
          <div class="date">{{ item.date }}</div>
          <div class="tag">
            <span>{{ item.tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;
}

.post {
  padding: 15px;
  background: var(--dark-gray);
  border-radius: 10px;
}

.post .title {
  color: var(--cyan);
  font-size: 18px;
  margin-bottom: 8px;
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
</style>
