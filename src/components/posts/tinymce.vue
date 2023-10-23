<script setup>
import { marked } from 'marked';
const code = `# TinyMCE

## Angular Implementation

Download all [tinymce](https://www.tiny.cloud/get-tiny/self-hosted/) files and upload them into the assets folder.
Add script tag to \`index.html\` to reference imported files. 
\`\`\`html
<script src="assets/tinymce/js/tinymce/tinymce.min.js"><\/script>
\`\`\`

Install tinymce package: \`npm install tinymce\`

Import Editor Module from TinyMCE in \`shared.module.ts\`
\`\`\`javascript
import { EditorModule } from '@tinymce/tinymce-angular';

imports: [ EditorModule ],
exports: [ EditorModule ],
\`\`\`

Add plugin object to \`util.service.ts\`
\`\`\`javascript
export const plugins = {
  plugins: ['lists', 'advlist', 'autoresize', 'link', 'wordcount'],
  link_context_toolbar: true,
  default_link_target: '_blank',
  forced_root_block: 'div',
  menubar: false,
  max_height: 500,
  content_style: 'body {font-size: 16px; font-family: Arial;}',
  toolbar: 'undo redo | bold italic | bullist numlist | link',
};
\`\`\`

**HTML File**
\`\`\`html
<editor
  [formControl]="tinyMCE"
  (onKeyUp)="handleEvent($event.event.target.innerHTML)"
  (onChange)="handleEvent($event.event.level.content)"
  [init]="plugins"
></editor>
<mat-hint 
  fxLayoutAlign="end" 
  [class.red]="bodyLength > 500"
>{{ bodyLength }}/500</mat-hint>
\`\`\`

**Typescript File**
\`\`\`typescript
import { TinyMCE } from 'src/assets/tinymce/js/tinymce/tinymce';
declare const tinymce: TinyMCE;

/** body length */
bodyLength: number = 0;
/** tiny mce plugins */
plugins = plugins;
/** tiny MCE editor form control */
tinyMCE = new FormControl();

/** handle tiny mce changes */
handleEvent(change: string): void {
  this.notification.body = change;
  this.bodyLength = tinymce.activeEditor.plugins.wordcount.body.getCharacterCount();
}
\`\`\`

**Advanced plugin (optional)**
\`\`\`javascript
export const advancedPlugins = {
  plugins: ['lists', 'advlist', 'autoresize', 'link', 'code', 'wordcount'],
  link_context_toolbar: true,
  default_link_target: '_blank',
  forced_root_block: 'div',
  menubar: false,
  max_height: 500,
  content_style: 'body {font-size: 16px; font-family: Arial;}',
  font_formats: 'Arial=arial,helvetica,sans-serif;',
  formats: {
    aligncenter: { inline: 'div', classes: 'center', styles: { 'text-align': 'center' } },
    alignright: { inline: 'div', classes: 'right', styles: { 'text-align': 'end' } },
    alignleft: { inline: 'div', classes: 'left', styles: { 'text-align': 'start' } },
    alignjustify: { inline: 'div', classes: 'justify', styles: { 'text-align': 'justify' } },
  },
  style_formats: [
    {
      title: 'Headers',
      items: [
        { title: 'Heading 2', block: 'h2' },
        { title: 'Heading 3', block: 'h3' },
        { title: 'Heading 4', block: 'h4' },
      ],
    },
    {
      title: 'Blocks',
      items: [
        { title: 'Blockquote', block: 'blockquote' },
        { title: 'Div', block: 'div' },
        { title: 'Pre', block: 'div', classes: 'pre', styles: { 'font-family': 'monospace' } },
      ],
    },
    {
      title: 'Inline',
      items: [
        { title: 'Strikethrough', inline: 's', icon: 'strikethrough' },
        { title: 'Superscript', inline: 'sup', icon: 'superscript' },
        { title: 'Subscript', inline: 'sub', icon: 'subscript' },
        { title: 'Code', inline: 'code', icon: 'code' },
      ],
    },
  ],
  toolbar:
    'undo redo | styles fontfamily fontsize | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | code',
};
\`\`\`

**Note**
\`\`\`javascript
plugins: ['lists, advlist, autoresize, link, textcolor, code'],
plugins: ['lists', 'advlist', 'autoresize', 'link', 'code'] // use when files are local
\`\`\`
`;

const mark = marked(code);
console.log(mark);
</script>

<template>
  <div v-html="mark" class="markdown"></div>
</template>
