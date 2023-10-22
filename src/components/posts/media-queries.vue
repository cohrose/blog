<script setup>
import { marked } from 'marked';
const code = `# Media Queries

When making responsive websites, you want to be consistent with your media queries so everything collapses at the same time.
Common breakpoints are as follows:
\`\`\`css
/* small devices */ 
@media screen and (max-width: 599px) {} 
/* medium devices */ 
@media screen and (max-width: 959px) {} 
/* large devices */ 
@media screen and (max-width: 1279px) {}
\`\`\`
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
