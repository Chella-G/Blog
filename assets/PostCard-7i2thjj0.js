import{A as e,D as t,a as n,k as r,p as i}from"./index-DOoAA94h.js";import{t as a}from"./formatDate-BmYYM-mA.js";var o=t(),s=r.article`
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.border};
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({theme:e})=>e.gradients.accent};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: ${({theme:e})=>e.colors.borderHover};
    box-shadow: ${({theme:e})=>e.shadows.glow};

    &::before {
      opacity: 1;
    }
  }
`,c=r(e)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`,l=r.div`
  width: 100%;
  height: 200px;
  background: url(${({$src:e})=>e}) center/cover no-repeat;
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease;

  ${s}:hover & {
    transform: scale(1.03);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(transparent, ${({theme:e})=>e.colors.surface});
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`,u=r.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 480px) {
    padding: 1.25rem 1rem;
  }
`,d=r.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
`,f=r.span`
  display: inline-block;
  padding: 0.2rem 0.65rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  background: ${({theme:e})=>e.colors.primary}18;
  color: ${({theme:e})=>e.colors.primary};
  border: 1px solid ${({theme:e})=>e.colors.primary}25;
`,p=r.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.72rem;
  color: ${({theme:e})=>e.colors.muted};
`,m=r.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: ${({theme:e})=>e.colors.text};
  line-height: 1.4;
  transition: color 0.2s;

  ${s}:hover & {
    color: ${({theme:e})=>e.colors.primary};
  }
`,h=r.p`
  font-size: 0.88rem;
  color: ${({theme:e})=>e.colors.textSecondary};
  margin: 0.25rem 0 1.25rem;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,g=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.5rem;
`,_=r.span`
  font-size: 0.78rem;
  color: ${({theme:e})=>e.colors.muted};
`,v=r.span`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({theme:e})=>e.colors.primary};
  font-weight: 600;
  font-size: 0.82rem;
  transition: gap 0.25s ease;

  ${s}:hover & {
    gap: 8px;
  }
`,y=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({theme:e})=>e.colors.border};
`,b=r.span`
  padding: 0.15rem 0.5rem;
  border-radius: 50px;
  font-size: 0.68rem;
  font-weight: 500;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  color: ${({theme:e})=>e.colors.muted};
  font-family: "JetBrains Mono", monospace;
`,x=({post:e})=>(0,o.jsx)(s,{children:(0,o.jsxs)(c,{to:`/post/${e.id}`,children:[e.thumbnail&&(0,o.jsx)(l,{$src:e.thumbnail}),(0,o.jsxs)(u,{children:[(0,o.jsxs)(d,{children:[(0,o.jsx)(f,{children:e.category}),(0,o.jsxs)(p,{children:[(0,o.jsx)(i,{size:12}),e.readTime]})]}),(0,o.jsx)(m,{children:e.title}),(0,o.jsx)(h,{children:e.excerpt}),(0,o.jsxs)(g,{children:[(0,o.jsx)(_,{children:a(e.publishedAt)}),(0,o.jsxs)(v,{children:[`Read `,(0,o.jsx)(n,{size:14})]})]}),(0,o.jsx)(y,{children:e.tags.slice(0,3).map(e=>(0,o.jsxs)(b,{children:[`#`,e]},e))})]})]})});export{x as t};