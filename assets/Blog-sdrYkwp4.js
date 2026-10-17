import{C as e,O as t,S as n,T as r,_ as i,j as a,w as o}from"./index-DMlALWwS.js";import{t as s}from"./Container-5a2-OY7D.js";import{r as c}from"./formatDate-CvoECMD2.js";import{t as l}from"./PostCard-CcrSAB61.js";var u=a(t(),1),d=e(),f=r.div`
  display: flex;
  flex-direction: column;
`,p=o`
  to { transform: rotate(360deg); }
`,m=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;
`,h=r.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${({theme:e})=>e.colors.border};
  border-top-color: ${({theme:e})=>e.colors.primary};
  border-radius: 50%;
  animation: ${p} 0.8s linear infinite;
`,g=r.span`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  font-family: "JetBrains Mono", monospace;
`,_=r.div`
  text-align: center;
  padding: 4rem 2rem;
  color: ${({theme:e})=>e.colors.muted};

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: ${({theme:e})=>e.colors.text};
  }
`,v=({posts:e,loading:t})=>t?(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{}),(0,d.jsx)(g,{children:`Loading posts...`})]}):e.length===0?(0,d.jsxs)(_,{children:[(0,d.jsx)(`h3`,{children:`No posts found`}),(0,d.jsx)(`p`,{children:`Try adjusting your search or filter criteria.`})]}):(0,d.jsx)(f,{children:e.map(e=>(0,d.jsx)(l,{post:e},e.id))}),y=o`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,b=r.div`
  padding: 1.5rem 0 0.5rem;
  animation: ${y} 0.6s ease-out;
`,x=r.div`
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
`,S=r.div`
  flex-shrink: 0;
`,C=r.h1`
  font-size: 1.75rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  letter-spacing: -1px;
  line-height: 1.2;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,w=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin: 0.15rem 0 0;
`,T=r.div`
  position: relative;
  flex: 1;
  max-width: 380px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`,E=r.input`
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
`,D=r.div`
  position: absolute;
  left: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,O=r.button`
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
`,k=r.div`
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
`,A=r.button`
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
`,j=r.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.78rem;
  margin-bottom: 0.5rem;
`,M=r.div`
  padding-bottom: 2rem;
`,N=()=>{let{data:e,loading:t}=c(),[r,a]=(0,u.useState)(``),[o,l]=(0,u.useState)(`All`),f=(0,u.useMemo)(()=>{let t=new Set(e.map(e=>e.category));return[`All`,...Array.from(t)]},[e]),p=(0,u.useMemo)(()=>{let t=[...e];if(o!==`All`&&(t=t.filter(e=>e.category===o)),r.trim()){let e=r.toLowerCase();t=t.filter(t=>t.title.toLowerCase().includes(e)||t.excerpt.toLowerCase().includes(e)||t.tags.some(t=>t.toLowerCase().includes(e)))}return t},[e,o,r]);return(0,d.jsxs)(s,{children:[(0,d.jsxs)(b,{children:[(0,d.jsxs)(x,{children:[(0,d.jsxs)(S,{children:[(0,d.jsxs)(C,{children:[`The `,(0,d.jsx)(`span`,{className:`accent`,children:`Blog`})]}),(0,d.jsx)(w,{children:`Explore articles on development, design, and engineering`})]}),(0,d.jsxs)(T,{children:[(0,d.jsx)(D,{children:(0,d.jsx)(i,{size:16})}),(0,d.jsx)(E,{type:`text`,placeholder:`Search posts...`,value:r,onChange:e=>a(e.target.value)}),r&&(0,d.jsx)(O,{onClick:()=>a(``),children:(0,d.jsx)(n,{size:16})})]})]}),(0,d.jsx)(k,{children:f.map(e=>(0,d.jsx)(A,{$active:o===e,onClick:()=>l(e),children:e},e))})]}),(0,d.jsxs)(M,{children:[!t&&(0,d.jsxs)(j,{children:[p.length,` post`,p.length!==1&&`s`,` found`]}),(0,d.jsx)(v,{posts:p,loading:t})]})]})};export{N as Blog};