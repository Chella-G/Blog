import{C as e,_ as t,b as n,f as r,g as i,h as a,m as o,r as s,v as c}from"./index-tvdPkQCj.js";import{i as l,n as u,t as d}from"./SEO-9eg0E4H2.js";import{t as f}from"./Container-BYTrrVC1.js";var p=e(n(),1),m=a(),h=t.article`
  padding: 1.35rem 0;

  & + & {
    border-top: 1px solid ${({theme:e})=>`${e.colors.border}80`};
  }
`,g=t(c)`
  text-decoration: none;
  color: inherit;
  display: block;
`,_=t.time`
  display: block;
  font-size: 0.72rem;
  font-family: "JetBrains Mono", monospace;
  color: ${({theme:e})=>e.colors.muted};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 0.35rem;
`,v=t.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.35;
  transition: color 0.2s ease;

  ${g}:hover & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,y=t.p`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0.3rem 0 0;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 640px;
`,b=({post:e})=>(0,m.jsx)(h,{children:(0,m.jsxs)(g,{to:s.post(e.slug||e.id),children:[(0,m.jsx)(_,{children:u(e.publishedAt)}),(0,m.jsx)(v,{children:e.title}),e.excerpt&&(0,m.jsx)(y,{children:e.excerpt})]})}),x=t.div`
  display: flex;
  flex-direction: column;
`,S=i`
  to { transform: rotate(360deg); }
`,C=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
`,w=t.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${S} 0.8s linear infinite;
`,T=t.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  font-family: "JetBrains Mono", monospace;
`,E=t.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({theme:e})=>e.colors.muted};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
  }
`,D=({posts:e,loading:t})=>t?(0,m.jsxs)(C,{children:[(0,m.jsx)(w,{}),(0,m.jsx)(T,{children:`Loading posts...`})]}):e.length===0?(0,m.jsxs)(E,{children:[(0,m.jsx)(`h3`,{children:`No posts found`}),(0,m.jsx)(`p`,{children:`Try adjusting your search or filter criteria.`})]}):(0,m.jsx)(x,{children:e.map(e=>(0,m.jsx)(b,{post:e},e.id))}),O=i`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,k=t.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${O} 0.6s ease-out;
`,A=t.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.6rem;
  }
`,j=t.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,M=t.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin: 0.15rem 0 0;
`,N=i`
  from { opacity: 0; transform: scaleX(0.9); transform-origin: left center; }
  to { opacity: 1; transform: scaleX(1); transform-origin: left center; }
`,P=t.div`
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
  animation: ${N} 0.25s ease-out;
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
`,F=t.input`
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
`,I=t.button`
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
`,L=t.span`
  font-size: 0.85rem;
  white-space: nowrap;
  max-width: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-width 0.3s ease, opacity 0.25s ease;

  ${I}:hover &,
  ${I}:focus-visible & {
    max-width: 12rem;
    opacity: 1;
  }

  /* Touch devices have no hover; the tap opens search directly */
  @media (hover: none) {
    display: none;
  }
`,R=t.kbd`
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

  ${I}:hover &,
  ${I}:focus-visible & {
    max-width: 6rem;
    opacity: 1;
  }

  @media (max-width: 768px), (hover: none) {
    display: none;
  }
`,z=t.div`
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
  flex-shrink: 0;
  transition: color 0.25s;

  ${P}:focus-within &,
  ${I}:hover &,
  ${I}:focus-visible & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,B=t.button`
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
`,V=t.div`
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
`,H=t.button`
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
`,U=t.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin-bottom: 0.5rem;
`,W=t.div`
  padding-bottom: 2rem;
`,G=()=>{let{data:e,loading:t}=l(),[n,i]=(0,p.useState)(``),[a,c]=(0,p.useState)(`All`),[u,h]=(0,p.useState)(!1),g=(0,p.useRef)(null);(0,p.useEffect)(()=>{let e=e=>{(e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`k`?(e.preventDefault(),h(!0),g.current?.focus()):e.key===`Escape`&&document.activeElement===g.current&&(i(``),h(!1),g.current?.blur())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[]),(0,p.useEffect)(()=>{u&&g.current?.focus()},[u]);let _=(0,p.useMemo)(()=>{let t=new Set(e.map(e=>e.category));return[`All`,...Array.from(t)]},[e]),v=(0,p.useMemo)(()=>{let t=[...e];if(a!==`All`&&(t=t.filter(e=>e.category===a)),n.trim()){let e=n.toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.tags.some(t=>t.toLowerCase().includes(e)))}return t},[e,a,n]);return(0,m.jsxs)(f,{children:[(0,m.jsx)(d,{title:`Software Development Articles | Anony.blog`,description:`Browse practical software development tutorials, web engineering guides, and notes on tools and technology.`,path:s.home}),(0,m.jsxs)(k,{children:[(0,m.jsxs)(A,{children:[(0,m.jsxs)(j,{children:[`The `,(0,m.jsx)(`span`,{className:`accent`,children:`Blog`})]}),u?(0,m.jsxs)(P,{children:[(0,m.jsx)(z,{children:(0,m.jsx)(r,{size:17})}),(0,m.jsx)(F,{ref:g,type:`text`,placeholder:`Search posts...`,"aria-label":`Search posts`,autoComplete:`off`,autoCorrect:`off`,autoCapitalize:`off`,spellCheck:!1,enterKeyHint:`search`,value:n,onChange:e=>i(e.target.value),onBlur:()=>{n.trim()||h(!1)}}),n.trim()&&(0,m.jsx)(B,{onClick:()=>{i(``),g.current?.focus()},"aria-label":`Clear search`,children:(0,m.jsx)(o,{size:15})})]}):(0,m.jsxs)(I,{onClick:()=>h(!0),"aria-label":`Search posts`,children:[(0,m.jsx)(z,{children:(0,m.jsx)(r,{size:17})}),(0,m.jsx)(L,{children:`Click to search`}),(0,m.jsx)(R,{"aria-hidden":`true`,children:`Ctrl K`})]})]}),(0,m.jsx)(M,{children:`Explore articles on development, design, and engineering`}),(0,m.jsx)(V,{children:_.map(e=>(0,m.jsx)(H,{$active:a===e,onClick:()=>c(e),children:e},e))})]}),(0,m.jsxs)(W,{children:[!t&&(0,m.jsxs)(U,{children:[v.length,` post`,v.length!==1&&`s`,` found`]}),(0,m.jsx)(D,{posts:v,loading:t})]})]})};export{G as Blog};