import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,n}from"./analytics-CpScIfsJ.js";import{r,t as i}from"./react-vendor-kOwVo2tE.js";import{c as a,l as o,s,u as c}from"./index-CVeBxgEM.js";var l=e(t()),u=i(),d=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
  text-align: center;
  color: ${a};
`,f=c.h1`
  font-size: 6rem;
  margin: 0;
  color: ${s};
  line-height: 1;
`,p=c.p`
  font-size: 1.25rem;
  margin: 1rem 0 0.5rem;
`,m=c.p`
  color: ${o};
  margin: 0 0 2rem;
`,h=c(r)`
  color: ${s};
  text-decoration: none;
  border: 1px solid ${s};
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${s};
    color: #030711;
  }
`,g=()=>{let e=n();return(0,l.useEffect)(()=>{e?.capture(`page_not_found`,{attempted_path:window.location.pathname,referrer:document.referrer})},[e]),(0,u.jsxs)(d,{children:[(0,u.jsx)(f,{children:`404`}),(0,u.jsx)(p,{children:`Page introuvable`}),(0,u.jsx)(m,{children:`La page que vous cherchez n'existe pas ou a été déplacée.`}),(0,u.jsx)(h,{to:`/portfolio`,children:`Retour à l'accueil`})]})};export{g as default};