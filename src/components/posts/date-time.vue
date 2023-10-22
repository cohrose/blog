<script setup>
import { marked } from 'marked';
const code = `# Date Time

When formatting dates, you have to consider if you want the \`local\` time, or the \`UTC\` time.
\`\`\`javascript
// Local Time - slashes 
new Date("2023/07/08") 
Sat Jul 08 2023 00:00:00 GMT-0400 (Eastern Daylight Time) 
// UTC Time - dashes 
new Date("2023-07-08") 
Fri Jul 07 2023 20:00:00 GMT-0400 (Eastern Daylight Time)
\`\`\`

If you need to “reverse engineer” this method, you can use the following:
\`\`\`javascript
let time = "2023-07-08T00:00:00Z" 
let newtime = time.split('T')[0]; 
newtime = newtime.replace(/-/g, '/'); 
const options = { year: 'numeric', month: 'short', day: 'numeric' }; 
return new Date(newtime).toLocaleDateString(undefined, options); 
==> 'Jul 8, 2023'
\`\`\`

The reason you would need to do this, is when the date you get from a database is set to local time, but it uses dashes in the formatting, transforming it to \`UTC\` time when you run \`new Date()\`.

In this scenario, you want to show the date as July 8, but instead you get July 7.
By re-formatting the date with slashes before running \`new Date()\`, you get the intended result.
\`\`\`javascript
let time = "2023-07-08T00:00:00Z" 
// intended result: July 8, 2023 
const options = { year: 'numeric', month: 'short', day: 'numeric' }; 
return new Date(newtime).toLocaleDateString(undefined, options); 
// actual result 
==> 'Jul 7, 2023' 

let time = "2023-07-08T00:00:00Z" 
let newtime = time.split('T')[0]; 
// re-formatting with slashes 
newtime = newtime.replace(/-/g, '/'); 
const options = { year: 'numeric', month: 'short', day: 'numeric' }; 
return new Date(newtime).toLocaleDateString(undefined, options); 
// intended result 
==> 'Jul 8, 2023'
\`\`\`
`;

const mark = marked(code);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>

<style scoped></style>
