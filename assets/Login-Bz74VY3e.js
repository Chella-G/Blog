import{C as e,_ as t,a as n,b as r,d as i,g as a,h as o,r as s,u as c,v as l}from"./index-tvdPkQCj.js";import{t as u}from"./Container-BYTrrVC1.js";var d=e(r(),1),f=o(),p=a`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,m=t.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`,h=t.div`
  width: 100%;
  max-width: 420px;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(16px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 28px;
  padding: 2.5rem;
  box-shadow: ${({theme:e})=>e.shadows.glass};
  animation: ${p} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem;
    border-radius: 20px;
  }
`,g=t.div`
  width: 48px;
  height: 48px;
  border-radius: 18px;
  background: ${({theme:e})=>e.gradients.accent};
  color: #fff;
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.5rem;
  box-shadow: ${({theme:e})=>e.shadows.glow};
`,_=t.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.4rem;
  text-align: center;
`,v=t.p`
  color: ${({theme:e})=>e.colors.muted};
  text-align: center;
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
`,y=t.form`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,b=t.div`
  position: relative;
`,x=t.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,S=t.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.75rem;
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 50px;
  background: ${({theme:e})=>e.colors.backgroundAlt};
  color: ${({theme:e})=>e.colors.text};
  font-size: 16px; /* Prevents auto zoom on mobile */
  outline: none;
  transition: border-color 0.25s, box-shadow 0.25s;
  box-sizing: border-box;

  &::placeholder {
    color: ${({theme:e})=>e.colors.muted};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 3px ${({theme:e})=>e.colors.primary}18,
                ${({theme:e})=>e.shadows.glow};
  }

  @media (min-width: 769px) {
    font-size: 0.92rem;
  }
`,C=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.85rem;
  border: none;
  border-radius: 50px;
  background: ${({theme:e})=>e.gradients.accent};
  color: #fff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s;
  margin-top: 0.5rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({theme:e})=>e.shadows.glowStrong};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`,w=t.p`
  text-align: center;
  color: ${({theme:e})=>e.colors.muted};
  font-size: 0.88rem;
  margin: 1.5rem 0 0;

  a {
    color: ${({theme:e})=>e.colors.primary};
    text-decoration: none;
    font-weight: 600;

    &:hover {
      text-decoration: underline;
    }
  }
`,T=()=>{let[e,t]=(0,d.useState)(``),[r,a]=(0,d.useState)(``);return(0,f.jsx)(u,{children:(0,f.jsx)(m,{children:(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:`A`}),(0,f.jsx)(_,{children:`Welcome Back`}),(0,f.jsx)(v,{children:`Sign in to your account`}),(0,f.jsxs)(y,{onSubmit:t=>{t.preventDefault(),console.log(`Login attempt:`,{email:e,password:r}),alert(`Login functionality will be connected once the Go backend is ready!`)},children:[(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(i,{size:16})}),(0,f.jsx)(S,{type:`email`,placeholder:`Email address`,value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(c,{size:16})}),(0,f.jsx)(S,{type:`password`,placeholder:`Password`,value:r,onChange:e=>a(e.target.value),required:!0})]}),(0,f.jsxs)(C,{type:`submit`,children:[`Sign In `,(0,f.jsx)(n,{size:16})]})]}),(0,f.jsxs)(w,{children:[`Don't have an account? `,(0,f.jsx)(l,{to:s.register,children:`Sign up`})]})]})})})};export{T as Login};