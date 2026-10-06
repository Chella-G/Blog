import{A as e,D as t,F as n,M as r,O as i,T as a,k as o,r as s,v as c,y as l}from"./index-DOoAA94h.js";import{t as u}from"./Container-DvuMIh4A.js";var d=n(r(),1),f=t(),p=i`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`,m=o.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
`,h=o.div`
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
`,g=o.div`
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
`,_=o.h1`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${({theme:e})=>e.colors.text};
  margin: 0 0 0.4rem;
  text-align: center;
`,v=o.p`
  color: ${({theme:e})=>e.colors.muted};
  text-align: center;
  margin: 0 0 0.5rem;
  font-size: 0.92rem;
`,y=o.form`
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
`,b=o.div`
  position: relative;
`,x=o.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({theme:e})=>e.colors.muted};
  display: flex;
`,S=o.input`
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
`,C=o.button`
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
`,w=o.p`
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
`,T=()=>{let[t,n]=(0,d.useState)(``),[r,i]=(0,d.useState)(``),[o,p]=(0,d.useState)(``),[T,E]=(0,d.useState)(``);return(0,f.jsx)(u,{children:(0,f.jsx)(m,{children:(0,f.jsxs)(h,{children:[(0,f.jsx)(g,{children:`A`}),(0,f.jsx)(_,{children:`Create Account`}),(0,f.jsx)(v,{children:`Join the community`}),(0,f.jsxs)(y,{onSubmit:e=>{if(e.preventDefault(),o!==T){alert(`Passwords do not match!`);return}console.log(`Register attempt:`,{name:t,email:r,password:o}),alert(`Registration will be connected once the Go backend is ready!`)},children:[(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(a,{size:16})}),(0,f.jsx)(S,{type:`text`,placeholder:`Full name`,value:t,onChange:e=>n(e.target.value),required:!0})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(l,{size:16})}),(0,f.jsx)(S,{type:`email`,placeholder:`Email address`,value:r,onChange:e=>i(e.target.value),required:!0})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(c,{size:16})}),(0,f.jsx)(S,{type:`password`,placeholder:`Password`,value:o,onChange:e=>p(e.target.value),required:!0,minLength:6})]}),(0,f.jsxs)(b,{children:[(0,f.jsx)(x,{children:(0,f.jsx)(c,{size:16})}),(0,f.jsx)(S,{type:`password`,placeholder:`Confirm password`,value:T,onChange:e=>E(e.target.value),required:!0,minLength:6})]}),(0,f.jsxs)(C,{type:`submit`,children:[`Create Account `,(0,f.jsx)(s,{size:16})]})]}),(0,f.jsxs)(w,{children:[`Already have an account? `,(0,f.jsx)(e,{to:`/login`,children:`Sign in`})]})]})})})};export{T as Register};