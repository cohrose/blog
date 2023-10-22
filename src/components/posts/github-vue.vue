<script setup>
import { marked } from 'marked';
const code = `# Deploy Vue.js project to GitHub Pages

## Creating Project
First, create your project: \`npm create vue@latest\`

You will be presented with prompts for several optional features such as TypeScript and testing support. Once your scaffolding is complete, run the following:
\`\`\`
cd <your-project>
npm install
npm run dev
\`\`\`

You should now have your first project running.

## Deploying to GitHub Pages
If you want this to build on GitHub Pages as your base project, then you only need to add a build config in your \`vite.config.js\` file so that the build files are created/updated in the \`docs\` folder.
\`\`\`javascript
export default defineConfig({
  build: {
    outDir: 'docs',
  },
});
\`\`\`

However, if this project will be a on an additional repository, you will need to add these changes.
1. Add build config
2. Add base url
3. Add public path

\`\`\`javascript
export default defineConfig({
  build: {
    outDir: 'repo-name',
  },
  base: '/repo-name/',
  publicPath: process.env.NODE_ENV === 'production' ? '/repo-name/' : '/',
});
\`\`\`

Once you're ready to push your changes, you can run \`npm run build\` and all your build files will be created/updated. Now all you need to do is commit, and push your files. 

You can now check on your progress in your GitHub repository settings under Pages.
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
