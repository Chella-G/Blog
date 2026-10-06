import{D as e,O as t,b as n,g as r,h as i,k as a,w as o,y as s}from"./index-DOoAA94h.js";import{t as c}from"./Container-DvuMIh4A.js";var l=e(),u=t`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,d=a.div`
  padding: 2rem 0 2rem;
  animation: ${u} 0.6s ease-out;
`,f=a.div`
  text-align: center;
  margin-bottom: 0.5rem;
`,p=a.div`
  position: relative;
  width: 130px;
  height: 130px;
  margin: 0 auto 0.5rem;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`,m=a.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: ${({theme:e})=>e.gradients.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "JetBrains Mono", monospace;
  font-size: 3.5rem;
  color: #fff;
  font-weight: 800;
  box-shadow: ${({theme:e})=>e.shadows.glowStrong};
  border: 3px solid ${({theme:e})=>e.colors.primary}40;

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    font-size: 2.75rem;
  }
`,h=a.span`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${({theme:e})=>e.colors.primary};
  border: 3px solid ${({theme:e})=>e.colors.background};
  box-shadow: 0 0 10px ${({theme:e})=>e.colors.primary};

  @media (max-width: 480px) {
    width: 14px;
    height: 14px;
    bottom: 4px;
    right: 4px;
  }
`,g=a.h1`
  font-family: "JetBrains Mono", monospace;
  font-size: clamp(1.75rem, 5vw, 2.25rem);
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.5rem;
  letter-spacing: -1px;
`,_=a.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`,v=a.span`
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  font-size: 0.82rem;
  font-weight: 600;
  border: 1px solid;
  font-family: "JetBrains Mono", monospace;

  ${({$variant:e,theme:t})=>{switch(e){case`purple`:return`
          color: ${t.colors.secondary};
          background: ${t.colors.secondary}12;
          border-color: ${t.colors.secondary}25;
        `;case`gold`:return`
          color: ${t.colors.accent};
          background: ${t.colors.accent}12;
          border-color: ${t.colors.accent}25;
        `;default:return`
          color: ${t.colors.primary};
          background: ${t.colors.primary}12;
          border-color: ${t.colors.primary}25;
        `}}}
`,y=a.p`
  color: ${({theme:e})=>e.colors.muted};
  font-size: clamp(0.92rem, 2.5vw, 1.05rem);
  max-width: 520px;
  margin: 0 auto 0.5rem;
  line-height: 1.6;
  padding: 0 0.5rem;
`,b=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.88rem;
  margin-bottom: 0.5rem;
`,x=a.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
`,S=a.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50px;
  background: ${({theme:e})=>e.colors.surface};
  border: 1px solid ${({theme:e})=>e.colors.border};
  color: ${({theme:e})=>e.colors.textSecondary};
  text-decoration: none;
  transition: all 0.25s;
  font-size: 1.1rem;

  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: #fff;
    border-color: ${({theme:e})=>e.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,C=a.section`
  margin-bottom: 0.5rem;
`,w=a.h2`
  font-size: 1.35rem;
  font-weight: 700;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({theme:e})=>e.colors.border};
  display: flex;
  align-items: center;
  gap: 8px;

  .accent {
    color: ${({theme:e})=>e.colors.primary};
  }
`,T=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`,E=a.span`
  padding: 0.4rem 0.9rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 500;
  font-family: "JetBrains Mono", monospace;
  background: ${({theme:e})=>e.colors.primary}10;
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid ${({theme:e})=>e.colors.primary}20;
  transition: all 0.2s;

  &:hover {
    background: ${({theme:e})=>e.colors.primary}20;
    border-color: ${({theme:e})=>e.colors.primary}40;
  }
`,D=a.div`
  max-width: 700px;
  margin: 0 auto;
`,O=a.p`
  color: ${({theme:e})=>e.colors.textSecondary};
  line-height: 1.8;
  font-size: 1rem;
  margin-bottom: 1rem;
`,k=()=>(0,l.jsx)(c,{children:(0,l.jsxs)(d,{children:[(0,l.jsxs)(f,{children:[(0,l.jsxs)(p,{children:[(0,l.jsx)(m,{children:`A`}),(0,l.jsx)(h,{})]}),(0,l.jsx)(g,{children:`Anony`}),(0,l.jsxs)(_,{children:[(0,l.jsx)(v,{$variant:`green`,children:`<> Full Stack Developer`}),(0,l.jsx)(v,{$variant:`purple`,children:`> Cybersecurity Enthusiast`})]}),(0,l.jsx)(y,{children:`Passionate software developer crafting secure, scalable applications. Sharing knowledge through clean code and modern web technologies.`}),(0,l.jsxs)(b,{children:[(0,l.jsx)(n,{size:14}),`India`]}),(0,l.jsxs)(x,{children:[(0,l.jsx)(S,{href:`https://github.com/anony`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`GitHub`,children:(0,l.jsx)(i,{})}),(0,l.jsx)(S,{href:`https://linkedin.com/in/anony`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`LinkedIn`,children:(0,l.jsx)(r,{})}),(0,l.jsx)(S,{href:`https://twitter.com/anony`,target:`_blank`,rel:`noopener noreferrer`,"aria-label":`Twitter`,children:(0,l.jsx)(o,{})}),(0,l.jsx)(S,{href:`mailto:anony@example.com`,"aria-label":`Email`,children:(0,l.jsx)(s,{})})]})]}),(0,l.jsxs)(D,{children:[(0,l.jsxs)(C,{children:[(0,l.jsxs)(w,{children:[`About This `,(0,l.jsx)(`span`,{className:`accent`,children:`Blog`})]}),(0,l.jsx)(O,{children:`Welcome to my corner of the internet! I write about software engineering, clean code practices, and the tools and frameworks that power the modern web.`}),(0,l.jsx)(O,{children:`Whether you're a beginner looking for tutorials or an experienced developer exploring new patterns, you'll find something valuable here.`})]}),(0,l.jsxs)(C,{children:[(0,l.jsxs)(w,{children:[`Skills & `,(0,l.jsx)(`span`,{className:`accent`,children:`Technologies`})]}),(0,l.jsxs)(T,{children:[(0,l.jsx)(E,{children:`React`}),(0,l.jsx)(E,{children:`TypeScript`}),(0,l.jsx)(E,{children:`Go`}),(0,l.jsx)(E,{children:`Node.js`}),(0,l.jsx)(E,{children:`PostgreSQL`}),(0,l.jsx)(E,{children:`Docker`}),(0,l.jsx)(E,{children:`Git`}),(0,l.jsx)(E,{children:`REST APIs`}),(0,l.jsx)(E,{children:`CSS / Styled Components`}),(0,l.jsx)(E,{children:`Vite`}),(0,l.jsx)(E,{children:`Linux`}),(0,l.jsx)(E,{children:`Python`})]})]}),(0,l.jsxs)(C,{children:[(0,l.jsxs)(w,{children:[`Get In `,(0,l.jsx)(`span`,{className:`accent`,children:`Touch`})]}),(0,l.jsx)(O,{children:`Have a question, suggestion, or just want to say hello? Feel free to reach out through any of the social links above or drop me an email. I'd love to hear from you!`})]})]})]})});export{k as About};