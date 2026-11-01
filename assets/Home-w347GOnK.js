import{b as e,h as t,i as n,l as r,o as i,v as a,x as o,y as s}from"./index-CltCT092.js";import{t as c}from"./Container-uUY9frpK.js";import{t as l}from"./SEO-CIa-k4k_.js";import{r as u}from"./formatDate-DVSfY8V-.js";import{t as d}from"./PostCard-rt8Bmb1t.js";var f=a(),p=s`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,m=s`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,h=s`
  0%, 100% { box-shadow: 0 0 20px hsla(160, 60%, 45%, 0.15); }
  50% { box-shadow: 0 0 40px hsla(160, 60%, 45%, 0.3); }
`,g=e.section`
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  background: ${({theme:e})=>e.colors.background};
  padding: 3rem 1.5rem;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 2.5rem 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({theme:e})=>e.gradients.heroOverlay};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(${({theme:e})=>e.colors.border} 1px, transparent 1px),
      linear-gradient(90deg, ${({theme:e})=>e.colors.border} 1px, transparent 1px);
    background-size: 80px 80px;
    opacity: 0.3;
  }
`,_=e.div`
  position: relative;
  z-index: 1;
  animation: ${p} 0.8s ease-out;
`,v=e.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  font-size: 0.8rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin-bottom: 2rem;
  animation: ${p} 0.8s ease-out 0.1s both;
`,y=e.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary};
  animation: ${h} 2s ease-in-out infinite;
`,b=e.h1`
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(2.2rem, 7vw, 4rem);
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 1.5rem;
  line-height: 1.15;
  letter-spacing: -1.5px;

  .highlight {
    background: ${({theme:e})=>e.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .secondary {
    color: ${({theme:e})=>e.colors.secondary};
  }
`,x=e.p`
  font-size: clamp(1rem, 2.5vw, 1.15rem);
  color: ${({theme:e})=>e.colors.textSecondary};
  max-width: 550px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
  animation: ${p} 0.8s ease-out 0.3s both;
`,S=e.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${p} 0.8s ease-out 0.5s both;
`,C=e(o)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: ${({theme:e})=>e.gradients.accent};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glowStrong};
  }
`,w=e(o)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.75rem 1.75rem;
  border-radius: 50px;
  background: transparent;
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.text};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({theme:e})=>e.colors.primary};
    background: ${({theme:e})=>e.colors.surface};
    transform: translateY(-2px);
  }
`,T=e.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  pointer-events: none;

  &.green {
    background: hsl(160, 60%, 45%);
    top: 20%;
    left: 10%;
    animation: ${m} 8s ease-in-out infinite;
  }

  &.purple {
    background: hsl(270, 55%, 60%);
    bottom: 15%;
    right: 10%;
    animation: ${m} 10s ease-in-out infinite reverse;
  }
`,E=e.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`,D=e.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`,O=e.h2`
  font-size: clamp(1.4rem, 4vw, 1.75rem);
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0;
  letter-spacing: -0.5px;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,k=e(o)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap 0.2s ease;

  &:hover {
    gap: 10px;
  }
`,A=e.div`
  display: flex;
  flex-direction: column;
`,j=e.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 1.25rem;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`,M=e.div`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(8px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 24px;
  padding: 1.75rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({theme:e})=>e.shadows.elevationHover};
    border-color: ${({theme:e})=>e.colors.borderHover};
  }
`,N=e.div`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: ${({$color:e,theme:t})=>e===`green`?`${t.colors.primary}15`:e===`purple`?`${t.colors.secondary}15`:`${t.colors.accent}15`};
  color: ${({$color:e,theme:t})=>e===`green`?t.colors.primary:e===`purple`?t.colors.secondary:t.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.3rem;
`,P=e.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.5rem;
`,F=e.p`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.muted};
  margin: 0;
  line-height: 1.6;
`,I=e.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 0;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1.5rem 2rem;
    padding: 1.5rem 0;
  }
`,L=e.div`
  text-align: center;
`,R=e.div`
  font-family: "JetBrains Mono", monospace;
  font-size: 2rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.primary};
`,z=e.div`
  font-size: 0.85rem;
  color: ${({theme:e})=>e.colors.muted};
  margin-top: 0.25rem;
`,B=()=>{let{data:e,loading:a}=u({limit:3});return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l,{title:`Anony.blog | Software Development Blog`,description:`Practical tutorials and notes on software development, React, TypeScript, classroom technology, and building for the web.`,path:`/`}),(0,f.jsxs)(g,{children:[(0,f.jsx)(T,{className:`green`}),(0,f.jsx)(T,{className:`purple`}),(0,f.jsxs)(_,{children:[(0,f.jsxs)(v,{children:[(0,f.jsx)(y,{}),`Available for work`]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(`span`,{className:`highlight`,children:`Thoughts`}),`,`,` `,(0,f.jsx)(`span`,{className:`secondary`,children:`Ideas`}),(0,f.jsx)(`br`,{}),`& Code`]}),(0,f.jsx)(x,{children:`A place where I share my journey through software engineering, clean code practices, and modern web development.`}),(0,f.jsxs)(S,{children:[(0,f.jsxs)(C,{to:`/blog`,children:[`Read the Blog `,(0,f.jsx)(n,{})]}),(0,f.jsx)(w,{to:`/about`,children:`About Me`})]})]})]}),(0,f.jsxs)(c,{children:[(0,f.jsxs)(I,{children:[(0,f.jsxs)(L,{children:[(0,f.jsx)(R,{children:`6+`}),(0,f.jsx)(z,{children:`Articles`})]}),(0,f.jsxs)(L,{children:[(0,f.jsx)(R,{children:`5+`}),(0,f.jsx)(z,{children:`Topics`})]}),(0,f.jsxs)(L,{children:[(0,f.jsx)(R,{children:`∞`}),(0,f.jsx)(z,{children:`Learning`})]})]}),(0,f.jsxs)(E,{children:[(0,f.jsxs)(D,{children:[(0,f.jsxs)(O,{children:[`Latest `,(0,f.jsx)(`span`,{className:`accent`,children:`Posts`})]}),(0,f.jsxs)(k,{to:`/blog`,children:[`View all posts `,(0,f.jsx)(n,{size:16})]})]}),a?(0,f.jsx)(`p`,{style:{textAlign:`center`},children:`Loading…`}):(0,f.jsx)(A,{children:e.map(e=>(0,f.jsx)(d,{post:e},e.id))})]}),(0,f.jsxs)(E,{children:[(0,f.jsxs)(O,{style:{textAlign:`center`,marginBottom:`0.5rem`},children:[`What You'll `,(0,f.jsx)(`span`,{className:`accent`,children:`Find`}),` Here`]}),(0,f.jsx)(`p`,{style:{textAlign:`center`,maxWidth:`500px`,margin:`0 auto`,fontSize:`1rem`},children:`Dive into topics I'm passionate about`}),(0,f.jsxs)(j,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{$color:`green`,children:(0,f.jsx)(r,{})}),(0,f.jsx)(P,{children:`Clean Code`}),(0,f.jsx)(F,{children:`Best practices and patterns for writing maintainable, readable software.`})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{$color:`purple`,children:(0,f.jsx)(i,{})}),(0,f.jsx)(P,{children:`Tutorials`}),(0,f.jsx)(F,{children:`Step-by-step guides on modern tooling.`})]}),(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{$color:`gold`,children:(0,f.jsx)(t,{})}),(0,f.jsx)(P,{children:`Dev Insights`}),(0,f.jsx)(F,{children:`Thoughts on architecture, developer productivity, and career growth.`})]})]})]})]})]})};export{B as Home};