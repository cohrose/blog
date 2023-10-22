<script setup>
import { marked } from 'marked';
const code = `# Grid

Grid is an extremely powerful tool if you know how to use it properly.

You always want to make sure you're making your websites responsive, so don't forget to adjust the columns for each media size:

**HTML**
\`\`\`html
<div class="grid">
  <div>Box One</div> 
  <div>Box Two</div> 
  <div>Box Three</div>
</div>
\`\`\`

**CSS**
\`\`\`css
/* default */
.grid { 
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr; 
  gap: 30px;
}

/* large devices */
@media screen and (max-width: 1279px) {  
  .grid { 
    grid-template-columns: 1fr 1fr 1fr; 
    gap: 20px; 
  }
}

/* medium devices */
@media screen and (max-width: 959px) { 
  .grid {  
    grid-template-columns: 1fr 1fr;  
    gap: 15px;  
  }
}

/* small devices */
@media screen and (max-width: 599px) { 
  .grid {  
    grid-template-columns: 1fr;  
    gap: 10px;  
  }
}
\`\`\`

If you need the columns to be the ~exact~ same width you should use \`minmax\`:
\`\`\`css 
grid-template-columns: repeat(3, minmax(0, 1fr));
\`\`\`

## Grid Direction
Depending on the design of your website, you may need a grid layout to have the direction of right to left.
It's actually very simple, you only need to add one css property:
\`\`\`css 
.grid {  
  direction: rtl; /* right to left */
}
\`\`\`

By default, this property is set to \`ltr\` (left to right).
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
