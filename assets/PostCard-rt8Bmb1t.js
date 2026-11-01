import{b as e,v as t,x as n}from"./index-CltCT092.js";import{t as r}from"./formatDate-DVSfY8V-.js";var i=t(),a=e.article`
  padding: 1.35rem 0;

  & + & {
    border-top: 1px solid ${({theme:e})=>`${e.colors.border}80`};
  }
`,o=e(n)`
  text-decoration: none;
  color: inherit;
  display: block;
`,s=e.time`
  display: block;
  font-size: 0.72rem;
  font-family: "JetBrains Mono", monospace;
  color: ${({theme:e})=>e.colors.muted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`,c=e.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.35;
  transition: color 0.2s ease;

  ${o}:hover & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,l=e.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0.3rem 0 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 640px;
`,u=({post:e})=>(0,i.jsx)(a,{children:(0,i.jsxs)(o,{to:`/blog/${e.slug||e.id}`,children:[(0,i.jsx)(s,{children:r(e.publishedAt)}),(0,i.jsx)(c,{children:e.title}),e.excerpt&&(0,i.jsx)(l,{children:e.excerpt})]})});export{u as t};