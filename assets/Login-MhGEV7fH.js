import{A as e,D as t,F as n,M as r,O as i,k as a,r as o,v as s,y as c}from"./index-DOoAA94h.js";import{t as l}from"./Container-DvuMIh4A.js";var u=n(r(),1),d=t(),f=i`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,p=a.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`,m=a.div`
  width: 100%;
  max-width: 420px;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(16px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 28px;
  padding: 2.5rem;
  box-shadow: ${({theme:e})=>e.shadows.glass};
  animation: ${f} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem;
    border-radius: 20px;
  }
`,h=a.div`
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
`,g=a.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.4rem;
  text-align: center;
`,_=a.p`
  color: ${({theme:e})=>e.colors.muted};
  text-align: center;
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
`,v=a.form`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,y=a.div`
  position: relative;
`,b=a.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,x=a.input`
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
`,S=a.button`
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
`,C=a.p`
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
`,w=()=>{let[t,n]=(0,u.useState)(``),[r,i]=(0,u.useState)(``);return(0,d.jsx)(l,{children:(0,d.jsx)(p,{children:(0,d.jsxs)(m,{children:[(0,d.jsx)(h,{children:`A`}),(0,d.jsx)(g,{children:`Welcome Back`}),(0,d.jsx)(_,{children:`Sign in to your account`}),(0,d.jsxs)(v,{onSubmit:e=>{e.preventDefault(),console.log(`Login attempt:`,{email:t,password:r}),alert(`Login functionality will be connected once the Go backend is ready!`)},children:[(0,d.jsxs)(y,{children:[(0,d.jsx)(b,{children:(0,d.jsx)(c,{size:16})}),(0,d.jsx)(x,{type:`email`,placeholder:`Email address`,value:t,onChange:e=>n(e.target.value),required:!0})]}),(0,d.jsxs)(y,{children:[(0,d.jsx)(b,{children:(0,d.jsx)(s,{size:16})}),(0,d.jsx)(x,{type:`password`,placeholder:`Password`,value:r,onChange:e=>i(e.target.value),required:!0})]}),(0,d.jsxs)(S,{type:`submit`,children:[`Sign In `,(0,d.jsx)(o,{size:16})]})]}),(0,d.jsxs)(C,{children:[`Don't have an account? `,(0,d.jsx)(e,{to:`/register`,children:`Sign up`})]})]})})})};export{w as Login};