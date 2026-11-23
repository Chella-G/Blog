import{C as e,_ as t,a as n,b as r,d as i,g as a,h as o,p as s,r as c,u as l,v as u}from"./index-tvdPkQCj.js";import{t as d}from"./Container-BYTrrVC1.js";var f=e(r(),1),p=o(),m=a`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,h=t.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`,g=t.div`
  width: 100%;
  max-width: 420px;
  background: ${({theme:e})=>e.colors.surface};
  backdrop-filter: blur(16px);
  border: 1px solid ${({theme:e})=>e.colors.border};
  border-radius: 28px;
  padding: 2.5rem;
  box-shadow: ${({theme:e})=>e.shadows.glass};
  animation: ${m} 0.6s ease-out;

  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem;
    border-radius: 20px;
  }
`,_=t.div`
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
`,v=t.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.4rem;
  text-align: center;
`,y=t.p`
  color: ${({theme:e})=>e.colors.muted};
  text-align: center;
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
`,b=t.form`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,x=t.div`
  position: relative;
`,S=t.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,C=t.input`
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
`,w=t.button`
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
`,T=t.p`
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
`,E=()=>{let[e,t]=(0,f.useState)(``),[r,a]=(0,f.useState)(``),[o,m]=(0,f.useState)(``),[E,D]=(0,f.useState)(``);return(0,p.jsx)(d,{children:(0,p.jsx)(h,{children:(0,p.jsxs)(g,{children:[(0,p.jsx)(_,{children:`A`}),(0,p.jsx)(v,{children:`Create Account`}),(0,p.jsx)(y,{children:`Join the community`}),(0,p.jsxs)(b,{onSubmit:t=>{if(t.preventDefault(),o!==E){alert(`Passwords do not match!`);return}console.log(`Register attempt:`,{name:e,email:r,password:o}),alert(`Registration will be connected once the Go backend is ready!`)},children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:(0,p.jsx)(s,{size:16})}),(0,p.jsx)(C,{type:`text`,placeholder:`Full name`,value:e,onChange:e=>t(e.target.value),required:!0})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:(0,p.jsx)(i,{size:16})}),(0,p.jsx)(C,{type:`email`,placeholder:`Email address`,value:r,onChange:e=>a(e.target.value),required:!0})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:(0,p.jsx)(l,{size:16})}),(0,p.jsx)(C,{type:`password`,placeholder:`Password`,value:o,onChange:e=>m(e.target.value),required:!0,minLength:6})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(S,{children:(0,p.jsx)(l,{size:16})}),(0,p.jsx)(C,{type:`password`,placeholder:`Confirm password`,value:E,onChange:e=>D(e.target.value),required:!0,minLength:6})]}),(0,p.jsxs)(w,{type:`submit`,children:[`Create Account `,(0,p.jsx)(n,{size:16})]})]}),(0,p.jsxs)(T,{children:[`Already have an account? `,(0,p.jsx)(u,{to:c.login,children:`Sign in`})]})]})})})};export{E as Register};