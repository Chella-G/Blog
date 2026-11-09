import{S as e,_ as t,d as n,g as r,h as i,m as a,p as o,y as s}from"./index-Cb7mL68F.js";import{i as c,n as l,t as u}from"./SEO-B6RS4Ryw.js";import{t as d}from"./Container-B8VYeG2d.js";var f=e(s(),1),p=a(),m=r.article`
  padding: 1.35rem 0;

  & + & {
    border-top: 1px solid ${({theme:e})=>`${e.colors.border}80`};
  }
`,h=r(t)`
  text-decoration: none;
  color: inherit;
  display: block;
`,g=r.time`
  display: block;
  font-size: 0.72rem;
  font-family: "JetBrains Mono", monospace;
  color: ${({theme:e})=>e.colors.muted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`,_=r.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.35;
  transition: color 0.2s ease;

  ${h}:hover & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,v=r.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0.3rem 0 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 640px;
`,y=({post:e})=>(0,p.jsx)(m,{children:(0,p.jsxs)(h,{to:`/blog/${e.slug||e.id}`,children:[(0,p.jsx)(g,{children:l(e.publishedAt)}),(0,p.jsx)(_,{children:e.title}),e.excerpt&&(0,p.jsx)(v,{children:e.excerpt})]})}),b=r.div`
  display: flex;
  flex-direction: column;
`,x=i`
  to { transform: rotate(360deg); }
`,S=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
`,C=r.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${x} 0.8s linear infinite;
`,w=r.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  font-family: "JetBrains Mono", monospace;
`,T=r.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({theme:e})=>e.colors.muted};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
  }
`,E=({posts:e,loading:t})=>t?(0,p.jsxs)(S,{children:[(0,p.jsx)(C,{}),(0,p.jsx)(w,{children:`Loading posts...`})]}):e.length===0?(0,p.jsxs)(T,{children:[(0,p.jsx)(`h3`,{children:`No posts found`}),(0,p.jsx)(`p`,{children:`Try adjusting your search or filter criteria.`})]}):(0,p.jsx)(b,{children:e.map(e=>(0,p.jsx)(y,{post:e},e.id))}),D=i`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,O=r.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${D} 0.6s ease-out;
`,k=r.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`,A=r.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,j=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin: 0.15rem 0 0;
`,M=i`
  from { opacity: 0; transform: scaleX(0.9); transform-origin: left center; }
  to { opacity: 1; transform: scaleX(1); transform-origin: left center; }
`,N=r.div`
  display: flex;
  align-items: center;
  flex: 1 1 260px;
  max-width: 380px;
  height: 40px;
  padding: 0 0.5rem 0 0.95rem;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.surface};
  cursor: text;
  -webkit-tap-highlight-color: transparent;
  animation: ${M} 0.25s ease-out;
  box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20,
    ${({theme:e})=>e.shadows.glow};
  transition: border-color 0.25s, box-shadow 0.25s, background 0.25s;

  /* Mobile: stays inline; wraps under the title only on very narrow screens */
  @media (max-width: 768px) {
    flex: 1 1 240px;
    max-width: 100%;
    height: 48px;
    padding: 0 0.65rem 0 1.05rem;
  }

  @media (max-width: 480px) {
    height: 46px;
  }
`,P=r.input`
  flex: 1;
  min-width: 0;
  height: 100%;
  padding: 0 0.4rem;
  border: none;
  background: transparent;
  color: ${({theme:e})=>e.colors.text};
  font-size: 16px; /* Prevents auto-zoom on mobile */
  outline: none;

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  @media (min-width: 769px) {
    font-size: 0.88rem;
  }
`,F=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  width: max-content;
  max-width: 40px;
  padding: 0;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 999px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.muted};
  cursor: pointer;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  transition: max-width 0.3s ease, padding 0.3s ease, gap 0.3s ease,
    border-color 0.25s, box-shadow 0.25s, color 0.25s;

  /* No gap while collapsed so the icon sits dead-center of the circle */
  gap: 0;

  &:hover,
  &:focus-visible {
    gap: 0.5rem;
    max-width: 280px;
    padding: 0 0.65rem;
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e})=>e.colors.text};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20;
  }

  @media (max-width: 768px) {
    height: 44px;
    min-width: 44px;
    max-width: 44px;

    &:hover,
    &:focus-visible {
      max-width: 240px;
    }
  }
`,I=r.span`
  font-size: 0.85rem;
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.3s ease, opacity 0.25s ease;

  ${F}:hover &,
  ${F}:focus-visible & {
    max-width: 12rem;
    opacity: 1;
  }

  /* Touch devices have no hover; the tap opens search directly */
  @media (hover: none) {
    display: none;
  }
`,L=r.kbd`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.62rem;
  letter-spacing: 0.5px;
  padding: 0.2rem 0.45rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 6px;
  background: ${({theme:e})=>e.colors.surfaceHover};
  color: ${({theme:e})=>e.colors.muted};
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transition: max-width 0.3s ease, opacity 0.25s ease, padding 0.25s ease;

  ${F}:hover &,
  ${F}:focus-visible & {
    max-width: 6rem;
    opacity: 1;
  }

  @media (max-width: 768px), (hover: none) {
    display: none;
  }
`,R=r.div`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  flex-shrink: 0;
  transition: color 0.25s;

  ${N}:focus-within &,
  ${F}:hover &,
  ${F}:focus-visible & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,z=r.button`
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.muted};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 50px;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s;

  /* 44px touch target on mobile */
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    margin-left: 0.15rem;
  }

  &:hover {
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.colors.surfaceHover};
  }

  &:active {
    transform: scale(0.9);
  }
`,B=r.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  overflow-x: auto;
  padding: 0.2rem 0 0.4rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  @media (min-width: 769px) {
    flex-wrap: wrap;
    overflow-x: visible;
  }
`,V=r.button`
  padding: 0.35rem 0.95rem;
  border-radius: 50px;
  white-space: nowrap;
  flex-shrink: 0;
  border: 1px solid
    ${({theme:e,$active:t})=>t?e.colors.primary:e.colors.border};
  background: ${({theme:e,$active:t})=>t?e.colors.primary:`transparent`};
  color: ${({theme:e,$active:t})=>t?`#fff`:e.colors.textSecondary};
  font-size: 0.78rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    color: ${({theme:e,$active:t})=>t?`#fff`:e.colors.primary};
    background: ${({theme:e,$active:t})=>t?e.colors.primaryHover:`${e.colors.primary}10`};
  }
`,H=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin-bottom: 0.5rem;
`,U=r.div`
  padding-bottom: 2rem;
`,W=()=>{let{data:e,loading:t}=c(),[r,i]=(0,f.useState)(``),[a,s]=(0,f.useState)(`All`),[l,m]=(0,f.useState)(!1),h=(0,f.useRef)(null);(0,f.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`?(e.preventDefault(),m(!0),h.current?.focus()):e.key===`Escape`&&document.activeElement===h.current&&(i(``),m(!1),h.current?.blur())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,f.useEffect)(()=>{l&&h.current?.focus()},[l]);let g=(0,f.useMemo)(()=>{let t=new Set(e.map(e=>e.category));return[`All`,...Array.from(t)]},[e]),_=(0,f.useMemo)(()=>{let t=[...e];if(a!==`All`&&(t=t.filter(e=>e.category===a)),r.trim()){let e=r.toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.tags.some(t=>t.toLowerCase().includes(e)))}return t},[e,a,r]);return(0,p.jsxs)(d,{children:[(0,p.jsx)(u,{title:`Software Development Articles | Anony.blog`,description:`Browse practical software development tutorials, web engineering guides, and notes on tools and technology.`,path:`/blog`}),(0,p.jsxs)(O,{children:[(0,p.jsxs)(k,{children:[(0,p.jsxs)(A,{children:[`The `,(0,p.jsx)(`span`,{className:`accent`,children:`Blog`})]}),l?(0,p.jsxs)(N,{children:[(0,p.jsx)(R,{children:(0,p.jsx)(n,{size:17})}),(0,p.jsx)(P,{ref:h,type:`text`,placeholder:`Search posts...`,"aria-label":`Search posts`,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:!1,enterKeyHint:`search`,value:r,onChange:e=>i(e.target.value),onBlur:()=>{r.trim()||m(!1)}}),r.trim()&&(0,p.jsx)(z,{onClick:()=>{i(``),h.current?.focus()},"aria-label":`Clear search`,children:(0,p.jsx)(o,{size:15})})]}):(0,p.jsxs)(F,{onClick:()=>m(!0),"aria-label":`Search posts`,children:[(0,p.jsx)(R,{children:(0,p.jsx)(n,{size:17})}),(0,p.jsx)(I,{children:`Click to search`}),(0,p.jsx)(L,{"aria-hidden":`true`,children:`Ctrl K`})]})]}),(0,p.jsx)(j,{children:`Explore articles on development, design, and engineering`}),(0,p.jsx)(B,{children:g.map(e=>(0,p.jsx)(V,{$active:a===e,onClick:()=>s(e),children:e},e))})]}),(0,p.jsxs)(U,{children:[!t&&(0,p.jsxs)(H,{children:[_.length,` post`,_.length!==1&&`s`,` found`]}),(0,p.jsx)(E,{posts:_,loading:t})]})]})};export{W as Blog};