import{C as e,E as t,_ as n,b as r,m as i,v as a,y as o}from"./index-BxAJ3Clw.js";import{t as s}from"./Container-qiR9fsRO.js";import{t as c}from"./SEO-BMn9-soi.js";import{r as l}from"./formatDate-Ckc212J5.js";import{t as u}from"./PostCard-Bod1HkCv.js";var d=t(e(),1),f=a(),p=r.div`
  display: flex;
  flex-direction: column;
`,m=o`
  to { transform: rotate(360deg); }
`,h=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
`,g=r.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${m} 0.8s linear infinite;
`,_=r.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  font-family: "JetBrains Mono", monospace;
`,v=r.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({theme:e})=>e.colors.muted};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
  }
`,y=({posts:e,loading:t})=>t?(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{}),(0,f.jsx)(_,{children:`Loading posts...`})]}):e.length===0?(0,f.jsxs)(v,{children:[(0,f.jsx)(`h3`,{children:`No posts found`}),(0,f.jsx)(`p`,{children:`Try adjusting your search or filter criteria.`})]}):(0,f.jsx)(p,{children:e.map(e=>(0,f.jsx)(u,{post:e},e.id))}),b=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,x=r.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${b} 0.6s ease-out;
`,S=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0.5rem;
  }
`,C=r.div`
  flex-shrink: 0;
`,w=r.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,T=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin: 0.15rem 0 0;
`,E=r.div`
  position: relative;
  flex: 1;
  max-width: 380px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,D=r.input`
  width: 100%;
  padding: 0.65rem 1.1rem 0.65rem 2.6rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 50px;
  background: ${({theme:e})=>e.colors.surface};
  color: ${({theme:e})=>e.colors.text};
  font-size: 16px; /* Prevents auto-zoom on mobile */
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}20,
                ${({theme:e})=>e.shadows.glow};
  }

  @media (min-width: 769px) {
    font-size: 0.85rem;
  }
`,O=r.div`
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,k=r.button`
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${({theme:e})=>e.colors.muted};
  cursor: pointer;
  display: flex;
  padding: 4px;
  border-radius: 50px;
  transition: all 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.text};
    background: ${({theme:e})=>e.colors.surfaceHover};
  }
`,A=r.div`
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
`,j=r.button`
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
`,M=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin-bottom: 0.5rem;
`,N=r.div`
  padding-bottom: 2rem;
`,P=()=>{let{data:e,loading:t}=l(),[r,a]=(0,d.useState)(``),[o,u]=(0,d.useState)(`All`),p=(0,d.useMemo)(()=>{let t=new Set(e.map(e=>e.category));return[`All`,...Array.from(t)]},[e]),m=(0,d.useMemo)(()=>{let t=[...e];if(o!==`All`&&(t=t.filter(e=>e.category===o)),r.trim()){let e=r.toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.tags.some(t=>t.toLowerCase().includes(e)))}return t},[e,o,r]);return(0,f.jsxs)(s,{children:[(0,f.jsx)(c,{title:`Software Development Articles | Anony.blog`,description:`Browse practical software development tutorials, web engineering guides, and notes on tools and technology.`,path:`/blog`}),(0,f.jsxs)(x,{children:[(0,f.jsxs)(S,{children:[(0,f.jsxs)(C,{children:[(0,f.jsxs)(w,{children:[`The `,(0,f.jsx)(`span`,{className:`accent`,children:`Blog`})]}),(0,f.jsx)(T,{children:`Explore articles on development, design, and engineering`})]}),(0,f.jsxs)(E,{children:[(0,f.jsx)(O,{children:(0,f.jsx)(i,{size:16})}),(0,f.jsx)(D,{type:`text`,placeholder:`Search posts...`,value:r,onChange:e=>a(e.target.value)}),r&&(0,f.jsx)(k,{onClick:()=>a(``),children:(0,f.jsx)(n,{size:16})})]})]}),(0,f.jsx)(A,{children:p.map(e=>(0,f.jsx)(j,{$active:o===e,onClick:()=>u(e),children:e},e))})]}),(0,f.jsxs)(N,{children:[!t&&(0,f.jsxs)(M,{children:[m.length,` post`,m.length!==1&&`s`,` found`]}),(0,f.jsx)(y,{posts:m,loading:t})]})]})};export{P as Blog};