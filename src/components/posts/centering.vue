<script setup>
import { marked } from 'marked';
const code = `# Centering

There are many ways to center elements and text, below are a few of the most common ways divided up into two categories: centering text, and centering a div.
## Centering Text
### Horizontally
If you're only looking to center text, the \`text-align\` property will do the trick.
\`\`\`css
.center { text-align: center; }
\`\`\`

### Horizontally with FlexBox
If you're using a flex component, \`text-align\` will not work. You will need to use the \`justify-content\` property.
\`\`\`css
.center {
  display: flex;
  justify-content: center;
}
\`\`\`

### Horizontally & Vertically Using FlexBox
If you're using a flex component, AND you have a defined height, you cannot use \`justify-content\` alone if you want the text to be both vertically and horizontally centered. You will need to use the \`align-items\` property as well.
\`\`\`css
.center {
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
}
\`\`\`

## Centering a Div
For the below examples, the HTML will look like this:
\`\`\`html
<div class="parent">
  <div class="child">This div is centered.</div>
</div>
\`\`\`

### Horizontally
To center a div horizontally, it's actually quite easy. Simply set the width, and set the margin to \`auto\`.
\`\`\`css
.child {
  width: 50%;
  margin: auto;
}
\`\`\`

### Vertically
In order to center a div vertically, you'll need to do a little more work.
1. First, you want to make sure the "parent" component to what you're centering has the position property set to \`relative\`.
2. Second, you will set the "child" component to have a position property of \`absolute\`.
3. Third, you will set the top property to \`50%\`, and set the transform property to \`translate(0, -50%)\`. We have to set the transform property like this, otherwise the "top" of the div will be at the center, and not the middle of the div like we want.
\`\`\`css
.parent {
  position: relative;
  background: aqua;
  height: 200px;
  width: 200px;
}
.child {
  position: absolute;
  background: yellow;
  height: 100px;
  width: 100px;
  top: 50%;
  transform: translate(0, -50%);
}
\`\`\`

### Horizontally & Vertically
To center a div both horizontally and vertically, you will want to copy all the code you used when centering vertically, and add a few things.
The main difference here, is that you're also going to set the left property to \`50%\`, and replace the 0 value in your translate property to \`-50%\`.
\`\`\`css
.parent {
  position: relative;
  background: aqua;
  height: 200px;
  width: 200px;
}
.child {
  position: absolute;
  background: yellow;
  height: 100px;
  width: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
\`\`\`

### Horizontally & Vertically Using FlexBox
To center a div both horizontally and vertically with FlexBox, it's actually quite similar to centering text using Flex like we did above, by using \`justify-content\` and \`align-items\`.

\`\`\`css
.parent {
  display: flex;
  background: aqua;
  height: 200px;
  width: 200px;
  align-items: center;
  justify-content: center;
}
.child {
  background-color: yellow;
  height: 100px;
  width: 100px;
}
\`\`\`
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
