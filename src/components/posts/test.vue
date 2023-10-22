<script setup>
import { marked } from 'marked';
const code = `# This is a Heading 1
## Heading 2 here

> This is a quote

I just love **bold text**.

Italicized text is the _cat's meow_.

I love \`inline code\`

There is a really good [article here](https://www.example.com)

i really like ~~strike through words~~

---

1. First item
2. Second item
3. Third item
4. Fourth item

- First item
- Second item
- Third item
- Fourth item

\`\`\`css
.main {
  margin: 30px;
  * {
    min-width: 300px;
  }
}
\`\`\`

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

## Doesn't Work
### Checklist
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Highlight
I need to highlight these ==very important words==.
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
