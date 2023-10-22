var ie=Object.defineProperty;var se=(a,n,e)=>n in a?ie(a,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[n]=e;var k=(a,n,e)=>(se(a,typeof n!="symbol"?n+"":n,e),e),re=(a,n,e)=>{if(!n.has(a))throw TypeError("Cannot "+e)};var U=(a,n,e)=>{if(n.has(a))throw TypeError("Cannot add the same private member more than once");n instanceof WeakSet?n.add(a):n.set(a,e)};var j=(a,n,e)=>(re(a,n,"access private method"),e);import{o as y,c as w,u as b,_ as oe,a as le,r as ae,b as S,w as ce,d as R,e as ue,p as he,f as pe,g as de}from"./index-a5f16d79.js";function O(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}let C=O();function X(a){C=a}const ee=/[&<>"']/,fe=new RegExp(ee.source,"g"),te=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,ge=new RegExp(te.source,"g"),me={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},J=a=>me[a];function _(a,n){if(n){if(ee.test(a))return a.replace(fe,J)}else if(te.test(a))return a.replace(ge,J);return a}const ke=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function xe(a){return a.replace(ke,(n,e)=>(e=e.toLowerCase(),e==="colon"?":":e.charAt(0)==="#"?e.charAt(1)==="x"?String.fromCharCode(parseInt(e.substring(2),16)):String.fromCharCode(+e.substring(1)):""))}const ye=/(^|[^\[])\^/g;function m(a,n){a=typeof a=="string"?a:a.source,n=n||"";const e={replace:(t,i)=>(i=typeof i=="object"&&"source"in i?i.source:i,i=i.replace(ye,"$1"),a=a.replace(t,i),e),getRegex:()=>new RegExp(a,n)};return e}function Y(a){try{a=encodeURI(a).replace(/%25/g,"%")}catch{return null}return a}const D={exec:()=>null};function K(a,n){const e=a.replace(/\|/g,(s,r,o)=>{let l=!1,d=r;for(;--d>=0&&o[d]==="\\";)l=!l;return l?"|":" |"}),t=e.split(/ \|/);let i=0;if(t[0].trim()||t.shift(),t.length>0&&!t[t.length-1].trim()&&t.pop(),n)if(t.length>n)t.splice(n);else for(;t.length<n;)t.push("");for(;i<t.length;i++)t[i]=t[i].trim().replace(/\\\|/g,"|");return t}function M(a,n,e){const t=a.length;if(t===0)return"";let i=0;for(;i<t;){const s=a.charAt(t-i-1);if(s===n&&!e)i++;else if(s!==n&&e)i++;else break}return a.slice(0,t-i)}function we(a,n){if(a.indexOf(n[1])===-1)return-1;let e=0;for(let t=0;t<a.length;t++)if(a[t]==="\\")t++;else if(a[t]===n[0])e++;else if(a[t]===n[1]&&(e--,e<0))return t;return-1}function W(a,n,e,t){const i=n.href,s=n.title?_(n.title):null,r=a[1].replace(/\\([\[\]])/g,"$1");if(a[0].charAt(0)!=="!"){t.state.inLink=!0;const o={type:"link",raw:e,href:i,title:s,text:r,tokens:t.inlineTokens(r)};return t.state.inLink=!1,o}return{type:"image",raw:e,href:i,title:s,text:_(r)}}function be(a,n){const e=a.match(/^(\s+)(?:```)/);if(e===null)return n;const t=e[1];return n.split(`
`).map(i=>{const s=i.match(/^\s+/);if(s===null)return i;const[r]=s;return r.length>=t.length?i.slice(t.length):i}).join(`
`)}class H{constructor(n){k(this,"options");k(this,"rules");k(this,"lexer");this.options=n||C}space(n){const e=this.rules.block.newline.exec(n);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(n){const e=this.rules.block.code.exec(n);if(e){const t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:M(t,`
`)}}}fences(n){const e=this.rules.block.fences.exec(n);if(e){const t=e[0],i=be(t,e[3]||"");return{type:"code",raw:t,lang:e[2]?e[2].trim().replace(this.rules.inline._escapes,"$1"):e[2],text:i}}}heading(n){const e=this.rules.block.heading.exec(n);if(e){let t=e[2].trim();if(/#$/.test(t)){const i=M(t,"#");(this.options.pedantic||!i||/ $/.test(i))&&(t=i.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:t,tokens:this.lexer.inline(t)}}}hr(n){const e=this.rules.block.hr.exec(n);if(e)return{type:"hr",raw:e[0]}}blockquote(n){const e=this.rules.block.blockquote.exec(n);if(e){const t=M(e[0].replace(/^ *>[ \t]?/gm,""),`
`),i=this.lexer.state.top;this.lexer.state.top=!0;const s=this.lexer.blockTokens(t);return this.lexer.state.top=i,{type:"blockquote",raw:e[0],tokens:s,text:t}}}list(n){let e=this.rules.block.list.exec(n);if(e){let t=e[1].trim();const i=t.length>1,s={type:"list",raw:"",ordered:i,start:i?+t.slice(0,-1):"",loose:!1,items:[]};t=i?`\\d{1,9}\\${t.slice(-1)}`:`\\${t}`,this.options.pedantic&&(t=i?t:"[*+-]");const r=new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`);let o="",l="",d=!1;for(;n;){let u=!1;if(!(e=r.exec(n))||this.rules.block.hr.test(n))break;o=e[0],n=n.substring(o.length);let f=e[2].split(`
`,1)[0].replace(/^\t+/,q=>" ".repeat(3*q.length)),p=n.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,l=f.trimStart()):(x=e[2].search(/[^ ]/),x=x>4?1:x,l=f.slice(x),x+=e[1].length);let $=!1;if(!f&&/^ *$/.test(p)&&(o+=p+`
`,n=n.substring(p.length+1),u=!0),!u){const q=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),N=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),V=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),G=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;n;){const Z=n.split(`
`,1)[0];if(p=Z,this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),V.test(p)||G.test(p)||q.test(p)||N.test(n))break;if(p.search(/[^ ]/)>=x||!p.trim())l+=`
`+p.slice(x);else{if($||f.search(/[^ ]/)>=4||V.test(f)||G.test(f)||N.test(f))break;l+=`
`+p}!$&&!p.trim()&&($=!0),o+=Z+`
`,n=n.substring(Z.length+1),f=p.slice(x)}}s.loose||(d?s.loose=!0:/\n *\n *$/.test(o)&&(d=!0));let z=null,I;this.options.gfm&&(z=/^\[[ xX]\] /.exec(l),z&&(I=z[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),s.items.push({type:"list_item",raw:o,task:!!z,checked:I,loose:!1,text:l,tokens:[]}),s.raw+=o}s.items[s.items.length-1].raw=o.trimEnd(),s.items[s.items.length-1].text=l.trimEnd(),s.raw=s.raw.trimEnd();for(let u=0;u<s.items.length;u++)if(this.lexer.state.top=!1,s.items[u].tokens=this.lexer.blockTokens(s.items[u].text,[]),!s.loose){const f=s.items[u].tokens.filter(x=>x.type==="space"),p=f.length>0&&f.some(x=>/\n.*\n/.test(x.raw));s.loose=p}if(s.loose)for(let u=0;u<s.items.length;u++)s.items[u].loose=!0;return s}}html(n){const e=this.rules.block.html.exec(n);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(n){const e=this.rules.block.def.exec(n);if(e){const t=e[1].toLowerCase().replace(/\s+/g," "),i=e[2]?e[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline._escapes,"$1"):e[3];return{type:"def",tag:t,raw:e[0],href:i,title:s}}}table(n){const e=this.rules.block.table.exec(n);if(e){if(!/[:|]/.test(e[2]))return;const t={type:"table",raw:e[0],header:K(e[1]).map(i=>({text:i,tokens:[]})),align:e[2].replace(/^\||\| *$/g,"").split("|"),rows:e[3]&&e[3].trim()?e[3].replace(/\n[ \t]*$/,"").split(`
`):[]};if(t.header.length===t.align.length){let i=t.align.length,s,r,o,l;for(s=0;s<i;s++){const d=t.align[s];d&&(/^ *-+: *$/.test(d)?t.align[s]="right":/^ *:-+: *$/.test(d)?t.align[s]="center":/^ *:-+ *$/.test(d)?t.align[s]="left":t.align[s]=null)}for(i=t.rows.length,s=0;s<i;s++)t.rows[s]=K(t.rows[s],t.header.length).map(d=>({text:d,tokens:[]}));for(i=t.header.length,r=0;r<i;r++)t.header[r].tokens=this.lexer.inline(t.header[r].text);for(i=t.rows.length,r=0;r<i;r++)for(l=t.rows[r],o=0;o<l.length;o++)l[o].tokens=this.lexer.inline(l[o].text);return t}}}lheading(n){const e=this.rules.block.lheading.exec(n);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(n){const e=this.rules.block.paragraph.exec(n);if(e){const t=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:t,tokens:this.lexer.inline(t)}}}text(n){const e=this.rules.block.text.exec(n);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(n){const e=this.rules.inline.escape.exec(n);if(e)return{type:"escape",raw:e[0],text:_(e[1])}}tag(n){const e=this.rules.inline.tag.exec(n);if(e)return!this.lexer.state.inLink&&/^<a /i.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(n){const e=this.rules.inline.link.exec(n);if(e){const t=e[2].trim();if(!this.options.pedantic&&/^</.test(t)){if(!/>$/.test(t))return;const r=M(t.slice(0,-1),"\\");if((t.length-r.length)%2===0)return}else{const r=we(e[2],"()");if(r>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+r;e[2]=e[2].substring(0,r),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let i=e[2],s="";if(this.options.pedantic){const r=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);r&&(i=r[1],s=r[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),/^</.test(i)&&(this.options.pedantic&&!/>$/.test(t)?i=i.slice(1):i=i.slice(1,-1)),W(e,{href:i&&i.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},e[0],this.lexer)}}reflink(n,e){let t;if((t=this.rules.inline.reflink.exec(n))||(t=this.rules.inline.nolink.exec(n))){let i=(t[2]||t[1]).replace(/\s+/g," ");if(i=e[i.toLowerCase()],!i){const s=t[0].charAt(0);return{type:"text",raw:s,text:s}}return W(t,i,t[0],this.lexer)}}emStrong(n,e,t=""){let i=this.rules.inline.emStrong.lDelim.exec(n);if(!i||i[3]&&t.match(/[\p{L}\p{N}]/u))return;if(!(i[1]||i[2]||"")||!t||this.rules.inline.punctuation.exec(t)){const r=[...i[0]].length-1;let o,l,d=r,u=0;const f=i[0][0]==="*"?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(f.lastIndex=0,e=e.slice(-1*n.length+i[0].length-1);(i=f.exec(e))!=null;){if(o=i[1]||i[2]||i[3]||i[4]||i[5]||i[6],!o)continue;if(l=[...o].length,i[3]||i[4]){d+=l;continue}else if((i[5]||i[6])&&r%3&&!((r+l)%3)){u+=l;continue}if(d-=l,d>0)continue;l=Math.min(l,l+d+u);const p=[...n].slice(0,r+i.index+l+1).join("");if(Math.min(r,l)%2){const $=p.slice(1,-1);return{type:"em",raw:p,text:$,tokens:this.lexer.inlineTokens($)}}const x=p.slice(2,-2);return{type:"strong",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}}}codespan(n){const e=this.rules.inline.code.exec(n);if(e){let t=e[2].replace(/\n/g," ");const i=/[^ ]/.test(t),s=/^ /.test(t)&&/ $/.test(t);return i&&s&&(t=t.substring(1,t.length-1)),t=_(t,!0),{type:"codespan",raw:e[0],text:t}}}br(n){const e=this.rules.inline.br.exec(n);if(e)return{type:"br",raw:e[0]}}del(n){const e=this.rules.inline.del.exec(n);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(n){const e=this.rules.inline.autolink.exec(n);if(e){let t,i;return e[2]==="@"?(t=_(e[1]),i="mailto:"+t):(t=_(e[1]),i=t),{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}url(n){let e;if(e=this.rules.inline.url.exec(n)){let t,i;if(e[2]==="@")t=_(e[0]),i="mailto:"+t;else{let s;do s=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])[0];while(s!==e[0]);t=_(e[0]),e[1]==="www."?i="http://"+e[0]:i=e[0]}return{type:"link",raw:e[0],text:t,href:i,tokens:[{type:"text",raw:t,text:t}]}}}inlineText(n){const e=this.rules.inline.text.exec(n);if(e){let t;return this.lexer.state.inRawBlock?t=e[0]:t=_(e[0]),{type:"text",raw:e[0],text:t}}}}const h={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:D,lheading:/^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/};h._label=/(?!\s*\])(?:\\.|[^\[\]\\])+/;h._title=/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;h.def=m(h.def).replace("label",h._label).replace("title",h._title).getRegex();h.bullet=/(?:[*+-]|\d{1,9}[.)])/;h.listItemStart=m(/^( *)(bull) */).replace("bull",h.bullet).getRegex();h.list=m(h.list).replace(/bull/g,h.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+h.def.source+")").getRegex();h._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";h._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/;h.html=m(h.html,"i").replace("comment",h._comment).replace("tag",h._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();h.lheading=m(h.lheading).replace(/bull/g,h.bullet).getRegex();h.paragraph=m(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.blockquote=m(h.blockquote).replace("paragraph",h.paragraph).getRegex();h.normal={...h};h.gfm={...h.normal,table:"^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"};h.gfm.table=m(h.gfm.table).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.gfm.paragraph=m(h._paragraph).replace("hr",h.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",h.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",h._tag).getRegex();h.pedantic={...h.normal,html:m(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",h._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:D,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:m(h.normal._paragraph).replace("hr",h.hr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};const c={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:D,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,rDelimAst:/^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:D,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^((?![*_])[\spunctuation])/};c._punctuation="\\p{P}$+<=>`^|~";c.punctuation=m(c.punctuation,"u").replace(/punctuation/g,c._punctuation).getRegex();c.blockSkip=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;c.anyPunctuation=/\\[punct]/g;c._escapes=/\\([punct])/g;c._comment=m(h._comment).replace("(?:-->|$)","-->").getRegex();c.emStrong.lDelim=m(c.emStrong.lDelim,"u").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimAst=m(c.emStrong.rDelimAst,"gu").replace(/punct/g,c._punctuation).getRegex();c.emStrong.rDelimUnd=m(c.emStrong.rDelimUnd,"gu").replace(/punct/g,c._punctuation).getRegex();c.anyPunctuation=m(c.anyPunctuation,"gu").replace(/punct/g,c._punctuation).getRegex();c._escapes=m(c._escapes,"gu").replace(/punct/g,c._punctuation).getRegex();c._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;c._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;c.autolink=m(c.autolink).replace("scheme",c._scheme).replace("email",c._email).getRegex();c._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;c.tag=m(c.tag).replace("comment",c._comment).replace("attribute",c._attribute).getRegex();c._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;c._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;c._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;c.link=m(c.link).replace("label",c._label).replace("href",c._href).replace("title",c._title).getRegex();c.reflink=m(c.reflink).replace("label",c._label).replace("ref",h._label).getRegex();c.nolink=m(c.nolink).replace("ref",h._label).getRegex();c.reflinkSearch=m(c.reflinkSearch,"g").replace("reflink",c.reflink).replace("nolink",c.nolink).getRegex();c.normal={...c};c.pedantic={...c.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:m(/^!?\[(label)\]\((.*?)\)/).replace("label",c._label).getRegex(),reflink:m(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",c._label).getRegex()};c.gfm={...c.normal,escape:m(c.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/};c.gfm.url=m(c.gfm.url,"i").replace("email",c.gfm._extended_email).getRegex();c.breaks={...c.gfm,br:m(c.br).replace("{2,}","*").getRegex(),text:m(c.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class T{constructor(n){k(this,"tokens");k(this,"options");k(this,"state");k(this,"tokenizer");k(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=n||C,this.options.tokenizer=this.options.tokenizer||new H,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const e={block:h.normal,inline:c.normal};this.options.pedantic?(e.block=h.pedantic,e.inline=c.pedantic):this.options.gfm&&(e.block=h.gfm,this.options.breaks?e.inline=c.breaks:e.inline=c.gfm),this.tokenizer.rules=e}static get rules(){return{block:h,inline:c}}static lex(n,e){return new T(e).lex(n)}static lexInline(n,e){return new T(e).inlineTokens(n)}lex(n){n=n.replace(/\r\n|\r/g,`
`),this.blockTokens(n,this.tokens);let e;for(;e=this.inlineQueue.shift();)this.inlineTokens(e.src,e.tokens);return this.tokens}blockTokens(n,e=[]){this.options.pedantic?n=n.replace(/\t/g,"    ").replace(/^ +$/gm,""):n=n.replace(/^( *)(\t+)/gm,(o,l,d)=>l+"    ".repeat(d.length));let t,i,s,r;for(;n;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(o=>(t=o.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.space(n)){n=n.substring(t.raw.length),t.raw.length===1&&e.length>0?e[e.length-1].raw+=`
`:e.push(t);continue}if(t=this.tokenizer.code(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(t=this.tokenizer.fences(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.heading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.hr(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.blockquote(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.list(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.html(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.def(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&(i.type==="paragraph"||i.type==="text")?(i.raw+=`
`+t.raw,i.text+=`
`+t.raw,this.inlineQueue[this.inlineQueue.length-1].src=i.text):this.tokens.links[t.tag]||(this.tokens.links[t.tag]={href:t.href,title:t.title});continue}if(t=this.tokenizer.table(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.lheading(n)){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startBlock){let o=1/0;const l=n.slice(1);let d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},l),typeof d=="number"&&d>=0&&(o=Math.min(o,d))}),o<1/0&&o>=0&&(s=n.substring(0,o+1))}if(this.state.top&&(t=this.tokenizer.paragraph(s))){i=e[e.length-1],r&&i.type==="paragraph"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t),r=s.length!==n.length,n=n.substring(t.raw.length);continue}if(t=this.tokenizer.text(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&i.type==="text"?(i.raw+=`
`+t.raw,i.text+=`
`+t.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=i.text):e.push(t);continue}if(n){const o="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,e}inline(n,e=[]){return this.inlineQueue.push({src:n,tokens:e}),e}inlineTokens(n,e=[]){let t,i,s,r=n,o,l,d;if(this.tokens.links){const u=Object.keys(this.tokens.links);if(u.length>0)for(;(o=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)u.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(o=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,o.index)+"["+"a".repeat(o[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(o=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,o.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;n;)if(l||(d=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(u=>(t=u.call({lexer:this},n,e))?(n=n.substring(t.raw.length),e.push(t),!0):!1))){if(t=this.tokenizer.escape(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.tag(n)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.link(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.reflink(n,this.tokens.links)){n=n.substring(t.raw.length),i=e[e.length-1],i&&t.type==="text"&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(t=this.tokenizer.emStrong(n,r,d)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.codespan(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.br(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.del(n)){n=n.substring(t.raw.length),e.push(t);continue}if(t=this.tokenizer.autolink(n)){n=n.substring(t.raw.length),e.push(t);continue}if(!this.state.inLink&&(t=this.tokenizer.url(n))){n=n.substring(t.raw.length),e.push(t);continue}if(s=n,this.options.extensions&&this.options.extensions.startInline){let u=1/0;const f=n.slice(1);let p;this.options.extensions.startInline.forEach(x=>{p=x.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(s=n.substring(0,u+1))}if(t=this.tokenizer.inlineText(s)){n=n.substring(t.raw.length),t.raw.slice(-1)!=="_"&&(d=t.raw.slice(-1)),l=!0,i=e[e.length-1],i&&i.type==="text"?(i.raw+=t.raw,i.text+=t.text):e.push(t);continue}if(n){const u="Infinite loop on byte: "+n.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return e}}class P{constructor(n){k(this,"options");this.options=n||C}code(n,e,t){var s;const i=(s=(e||"").match(/^\S*/))==null?void 0:s[0];return n=n.replace(/\n$/,"")+`
`,i?'<pre><code class="language-'+_(i)+'">'+(t?n:_(n,!0))+`</code></pre>
`:"<pre><code>"+(t?n:_(n,!0))+`</code></pre>
`}blockquote(n){return`<blockquote>
${n}</blockquote>
`}html(n,e){return n}heading(n,e,t){return`<h${e}>${n}</h${e}>
`}hr(){return`<hr>
`}list(n,e,t){const i=e?"ol":"ul",s=e&&t!==1?' start="'+t+'"':"";return"<"+i+s+`>
`+n+"</"+i+`>
`}listitem(n,e,t){return`<li>${n}</li>
`}checkbox(n){return"<input "+(n?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(n){return`<p>${n}</p>
`}table(n,e){return e&&(e=`<tbody>${e}</tbody>`),`<table>
<thead>
`+n+`</thead>
`+e+`</table>
`}tablerow(n){return`<tr>
${n}</tr>
`}tablecell(n,e){const t=e.header?"th":"td";return(e.align?`<${t} align="${e.align}">`:`<${t}>`)+n+`</${t}>
`}strong(n){return`<strong>${n}</strong>`}em(n){return`<em>${n}</em>`}codespan(n){return`<code>${n}</code>`}br(){return"<br>"}del(n){return`<del>${n}</del>`}link(n,e,t){const i=Y(n);if(i===null)return t;n=i;let s='<a href="'+n+'"';return e&&(s+=' title="'+e+'"'),s+=">"+t+"</a>",s}image(n,e,t){const i=Y(n);if(i===null)return t;n=i;let s=`<img src="${n}" alt="${t}"`;return e&&(s+=` title="${e}"`),s+=">",s}text(n){return n}}class Q{strong(n){return n}em(n){return n}codespan(n){return n}del(n){return n}html(n){return n}text(n){return n}link(n,e,t){return""+t}image(n,e,t){return""+t}br(){return""}}class v{constructor(n){k(this,"options");k(this,"renderer");k(this,"textRenderer");this.options=n||C,this.options.renderer=this.options.renderer||new P,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new Q}static parse(n,e){return new v(e).parse(n)}static parseInline(n,e){return new v(e).parseInline(n)}parse(n,e=!0){let t="";for(let i=0;i<n.length;i++){const s=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=s,o=this.options.extensions.renderers[r.type].call({parser:this},r);if(o!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(r.type)){t+=o||"";continue}}switch(s.type){case"space":continue;case"hr":{t+=this.renderer.hr();continue}case"heading":{const r=s;t+=this.renderer.heading(this.parseInline(r.tokens),r.depth,xe(this.parseInline(r.tokens,this.textRenderer)));continue}case"code":{const r=s;t+=this.renderer.code(r.text,r.lang,!!r.escaped);continue}case"table":{const r=s;let o="",l="";for(let u=0;u<r.header.length;u++)l+=this.renderer.tablecell(this.parseInline(r.header[u].tokens),{header:!0,align:r.align[u]});o+=this.renderer.tablerow(l);let d="";for(let u=0;u<r.rows.length;u++){const f=r.rows[u];l="";for(let p=0;p<f.length;p++)l+=this.renderer.tablecell(this.parseInline(f[p].tokens),{header:!1,align:r.align[p]});d+=this.renderer.tablerow(l)}t+=this.renderer.table(o,d);continue}case"blockquote":{const r=s,o=this.parse(r.tokens);t+=this.renderer.blockquote(o);continue}case"list":{const r=s,o=r.ordered,l=r.start,d=r.loose;let u="";for(let f=0;f<r.items.length;f++){const p=r.items[f],x=p.checked,$=p.task;let z="";if(p.task){const I=this.renderer.checkbox(!!x);d?p.tokens.length>0&&p.tokens[0].type==="paragraph"?(p.tokens[0].text=I+" "+p.tokens[0].text,p.tokens[0].tokens&&p.tokens[0].tokens.length>0&&p.tokens[0].tokens[0].type==="text"&&(p.tokens[0].tokens[0].text=I+" "+p.tokens[0].tokens[0].text)):p.tokens.unshift({type:"text",text:I+" "}):z+=I+" "}z+=this.parse(p.tokens,d),u+=this.renderer.listitem(z,$,!!x)}t+=this.renderer.list(u,o,l);continue}case"html":{const r=s;t+=this.renderer.html(r.text,r.block);continue}case"paragraph":{const r=s;t+=this.renderer.paragraph(this.parseInline(r.tokens));continue}case"text":{let r=s,o=r.tokens?this.parseInline(r.tokens):r.text;for(;i+1<n.length&&n[i+1].type==="text";)r=n[++i],o+=`
`+(r.tokens?this.parseInline(r.tokens):r.text);t+=e?this.renderer.paragraph(o):o;continue}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}parseInline(n,e){e=e||this.renderer;let t="";for(let i=0;i<n.length;i++){const s=n[i];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[s.type]){const r=this.options.extensions.renderers[s.type].call({parser:this},s);if(r!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(s.type)){t+=r||"";continue}}switch(s.type){case"escape":{const r=s;t+=e.text(r.text);break}case"html":{const r=s;t+=e.html(r.text);break}case"link":{const r=s;t+=e.link(r.href,r.title,this.parseInline(r.tokens,e));break}case"image":{const r=s;t+=e.image(r.href,r.title,r.text);break}case"strong":{const r=s;t+=e.strong(this.parseInline(r.tokens,e));break}case"em":{const r=s;t+=e.em(this.parseInline(r.tokens,e));break}case"codespan":{const r=s;t+=e.codespan(r.text);break}case"br":{t+=e.br();break}case"del":{const r=s;t+=e.del(this.parseInline(r.tokens,e));break}case"text":{const r=s;t+=e.text(r.text);break}default:{const r='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(r),"";throw new Error(r)}}}return t}}class L{constructor(n){k(this,"options");this.options=n||C}preprocess(n){return n}postprocess(n){return n}}k(L,"passThroughHooks",new Set(["preprocess","postprocess"]));var E,F,B,ne;class _e{constructor(...n){U(this,E);U(this,B);k(this,"defaults",O());k(this,"options",this.setOptions);k(this,"parse",j(this,E,F).call(this,T.lex,v.parse));k(this,"parseInline",j(this,E,F).call(this,T.lexInline,v.parseInline));k(this,"Parser",v);k(this,"parser",v.parse);k(this,"Renderer",P);k(this,"TextRenderer",Q);k(this,"Lexer",T);k(this,"lexer",T.lex);k(this,"Tokenizer",H);k(this,"Hooks",L);this.use(...n)}walkTokens(n,e){var i,s;let t=[];for(const r of n)switch(t=t.concat(e.call(this,r)),r.type){case"table":{const o=r;for(const l of o.header)t=t.concat(this.walkTokens(l.tokens,e));for(const l of o.rows)for(const d of l)t=t.concat(this.walkTokens(d.tokens,e));break}case"list":{const o=r;t=t.concat(this.walkTokens(o.items,e));break}default:{const o=r;(s=(i=this.defaults.extensions)==null?void 0:i.childTokens)!=null&&s[o.type]?this.defaults.extensions.childTokens[o.type].forEach(l=>{t=t.concat(this.walkTokens(o[l],e))}):o.tokens&&(t=t.concat(this.walkTokens(o.tokens,e)))}}return t}use(...n){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return n.forEach(t=>{const i={...t};if(i.async=this.defaults.async||i.async||!1,t.extensions&&(t.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const r=e.renderers[s.name];r?e.renderers[s.name]=function(...o){let l=s.renderer.apply(this,o);return l===!1&&(l=r.apply(this,o)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const r=e[s.level];r?r.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),i.extensions=e),t.renderer){const s=this.defaults.renderer||new P(this.defaults);for(const r in t.renderer){const o=t.renderer[r],l=r,d=s[l];s[l]=(...u)=>{let f=o.apply(s,u);return f===!1&&(f=d.apply(s,u)),f||""}}i.renderer=s}if(t.tokenizer){const s=this.defaults.tokenizer||new H(this.defaults);for(const r in t.tokenizer){const o=t.tokenizer[r],l=r,d=s[l];s[l]=(...u)=>{let f=o.apply(s,u);return f===!1&&(f=d.apply(s,u)),f}}i.tokenizer=s}if(t.hooks){const s=this.defaults.hooks||new L;for(const r in t.hooks){const o=t.hooks[r],l=r,d=s[l];L.passThroughHooks.has(r)?s[l]=u=>{if(this.defaults.async)return Promise.resolve(o.call(s,u)).then(p=>d.call(s,p));const f=o.call(s,u);return d.call(s,f)}:s[l]=(...u)=>{let f=o.apply(s,u);return f===!1&&(f=d.apply(s,u)),f}}i.hooks=s}if(t.walkTokens){const s=this.defaults.walkTokens,r=t.walkTokens;i.walkTokens=function(o){let l=[];return l.push(r.call(this,o)),s&&(l=l.concat(s.call(this,o))),l}}this.defaults={...this.defaults,...i}}),this}setOptions(n){return this.defaults={...this.defaults,...n},this}}E=new WeakSet,F=function(n,e){return(t,i)=>{const s={...i},r={...this.defaults,...s};this.defaults.async===!0&&s.async===!1&&(r.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),r.async=!0);const o=j(this,B,ne).call(this,!!r.silent,!!r.async);if(typeof t>"u"||t===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(r.hooks&&(r.hooks.options=r),r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then(l=>n(l,r)).then(l=>r.walkTokens?Promise.all(this.walkTokens(l,r.walkTokens)).then(()=>l):l).then(l=>e(l,r)).then(l=>r.hooks?r.hooks.postprocess(l):l).catch(o);try{r.hooks&&(t=r.hooks.preprocess(t));const l=n(t,r);r.walkTokens&&this.walkTokens(l,r.walkTokens);let d=e(l,r);return r.hooks&&(d=r.hooks.postprocess(d)),d}catch(l){return o(l)}}},B=new WeakSet,ne=function(n,e){return t=>{if(t.message+=`
Please report this to https://github.com/markedjs/marked.`,n){const i="<p>An error occurred:</p><pre>"+_(t.message+"",!0)+"</pre>";return e?Promise.resolve(i):i}if(e)return Promise.reject(t);throw t}};const A=new _e;function g(a,n){return A.parse(a,n)}g.options=g.setOptions=function(a){return A.setOptions(a),g.defaults=A.defaults,X(g.defaults),g};g.getDefaults=O;g.defaults=C;g.use=function(...a){return A.use(...a),g.defaults=A.defaults,X(g.defaults),g};g.walkTokens=function(a,n){return A.walkTokens(a,n)};g.parseInline=A.parseInline;g.Parser=v;g.parser=v.parse;g.Renderer=P;g.TextRenderer=Q;g.Lexer=T;g.lexer=T.lex;g.Tokenizer=H;g.Hooks=L;g.parse=g;g.options;g.setOptions;g.use;g.walkTokens;g.parseInline;v.parse;T.lex;const Te=["innerHTML"],ve=`# Grid

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
`,$e={__name:"grid",setup(a){const n=g(ve);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Te))}},ze=["innerHTML"],Se=`# Centering

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
`,Ie={__name:"centering",setup(a){const n=g(Se);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,ze))}},Re=["innerHTML"],Ae=`# Media Queries

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
`,Ce={__name:"media-queries",setup(a){const n=g(Ae);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Re))}},Le=["innerHTML"],Ee=`# Date Time

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
`,je={__name:"date-time",setup(a){const n=g(Ee);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Le))}},Me=["innerHTML"],De=`# TinyMCE

## Angular Implementation

Download all [tinymce](https://www.tiny.cloud/get-tiny/self-hosted/) files upload them into the assets folder.
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
`,He={__name:"tinymce",setup(a){const n=g(De);return console.log(n),(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Me))}},Pe=["innerHTML"],Be=`# Custom Email Domain

## Set Up Custom Domain
1. Purchase a custom domain name; I used ~[namecheap](https://www.namecheap.com/)~.
2. Purchase an ~[email account](https://www.namecheap.com/hosting/email/)~ under the domain provider.
3. Create a mailbox for your custom domain.
   * Choose a mailbox name, example: \`john@yourdomain.com\`
   * Create a password for your new mailbox. You will need this later on.
4. Go to the DNS settings for your domain, and make sure “Private Email” is selected for your Mail Settings.

## Add Email to Email client
1. Choose email client, I chose ~[Spark](https://sparkmailapp.com/)~.
2. Type in the email address, and password you created from earlier.
3. Choose “Additional Settings”
4. Here you will configure the custom domain settings:

### Inbox server (IMAP)
* **Username**: your full email address (ex. ~[john@yourdomain.com](mailto:john@yourdomain.com)~)
* **Password**: password for this mail account
* **Server**: ~[mail.privateemail.com](http://mail.privateemail.com/)~
* **Port**: 993
* **Protection**: SSL
### Outbox server (SMTP)
* **Username**: your full email address (ex. ~[john@yourdomain.com](mailto:john@yourdomain.com)~)
* **Password**: password for this mail account
* **Server**: ~[mail.privateemail.com](http://mail.privateemail.com/)~
* **Port**: 465
* **Protection**: SSL

If everything was configured correctly, you should now be logged in to your custom email domain.

Keep in mind, you can still view your email mailbox from your domain provider.
`,qe={__name:"custom-email",setup(a){const n=g(Be);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Pe))}},Ze=["innerHTML"],Ue=`# Deploy Vue.js project to GitHub Pages

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
  publicPath: "production" === 'production' ? '/repo-name/' : '/',
});
\`\`\`

Once you're ready to push your changes, you can run \`npm run build\` and all your build files will be created/updated. Now all you need to do is commit, and push your files. 

You can now check on your progress in your GitHub repository settings under Pages.
`,Fe={__name:"github-vue",setup(a){const n=g(Ue);return(e,t)=>(y(),w("div",{innerHTML:b(n),class:"markdown"},null,8,Ze))}};const Oe=a=>(he("data-v-6cfb8ef7"),a=a(),pe(),a),Qe=Oe(()=>de("i",{class:"fa-solid fa-arrow-left"},null,-1)),Ne={key:0},Ve={key:1},Ge={key:2},Je={key:3},Ye={key:4},Ke={key:5},We={key:6},Xe={__name:"PostView",setup(a){let e=le().params.name;return(t,i)=>{const s=ae("router-link");return y(),w("div",null,[S(s,{to:"/",class:"link"},{default:ce(()=>[Qe,ue("Back")]),_:1}),b(e)=="grid"?(y(),w("div",Ne,[S($e)])):R("",!0),b(e)=="centering"?(y(),w("div",Ve,[S(Ie)])):R("",!0),b(e)=="mediaqueries"?(y(),w("div",Ge,[S(Ce)])):R("",!0),b(e)=="datetime"?(y(),w("div",Je,[S(je)])):R("",!0),b(e)=="tinymce"?(y(),w("div",Ye,[S(He)])):R("",!0),b(e)=="customemail"?(y(),w("div",Ke,[S(qe)])):R("",!0),b(e)=="githubvue"?(y(),w("div",We,[S(Fe)])):R("",!0)])}}},nt=oe(Xe,[["__scopeId","data-v-6cfb8ef7"]]);export{nt as default};
