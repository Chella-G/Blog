import{_ as e,h as t,i as n,r,t as i,v as a}from"./index-tvdPkQCj.js";import{t as o}from"./Container-BYTrrVC1.js";var s=t(),c=e.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 55vh;
  padding: 3rem 0;
  text-align: center;
`,l=e.span`
  font-family: "JetBrains Mono", monospace;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  color: ${({theme:e})=>e.colors.primary};
  margin-bottom: 0.75rem;
`,u=e.h1`
  font-size: 1.9rem;
  font-weight: 800;
  letter-spacing: -0.5px;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.5rem;
`,d=e.p`
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${({theme:e})=>e.colors.muted};
  max-width: 420px;
  margin: 0 0 2rem;
`,f=e(a)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0.6rem 1.4rem;
  border: 1px solid ${({theme:e})=>e.colors.primary};
  border-radius: 50px;
  color: ${({theme:e})=>e.colors.primary};
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: background 0.25s, color 0.25s, box-shadow 0.25s;

  &:hover {
    background: ${({theme:e})=>e.colors.primary};
    color: #fff;
    box-shadow: ${({theme:e})=>e.shadows.glow};
  }
`,p=()=>(0,s.jsxs)(o,{children:[(0,s.jsxs)(i,{children:[(0,s.jsx)(`title`,{children:`Page not found | Anony.blog`}),(0,s.jsx)(`meta`,{name:`robots`,content:`noindex`})]}),(0,s.jsxs)(c,{children:[(0,s.jsx)(l,{children:`404`}),(0,s.jsx)(u,{children:`Page not found`}),(0,s.jsx)(d,{children:`The page you are looking for does not exist or may have been moved.`}),(0,s.jsxs)(f,{to:r.home,children:[(0,s.jsx)(n,{}),` Back to the blog`]})]})]});export{p as NotFound};