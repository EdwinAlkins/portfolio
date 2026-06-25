import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t}from"./analytics-CpScIfsJ.js";import{t as n}from"./react-vendor-kOwVo2tE.js";import{c as r,l as i,s as a,t as o,u as s}from"./index-yeR75fkA.js";var c=e(t()),l=n(),u=s.div`
  padding: 2rem;
  color: ${r};
`,d=s.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,f=s.a`
  display: block;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: ${r};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${a};
    transform: translateY(-2px);
  }
`,p=s.h2`
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,m=s.i`
  color: ${a};
  font-size: 0.85rem;
`,h=s.p`
  margin: 0;
  color: ${i};
  font-size: 0.95rem;
  line-height: 1.5;
`,g=()=>{let[e,t]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{t(await o())})()},[]),(0,l.jsxs)(u,{children:[(0,l.jsx)(`h1`,{children:`Articles`}),(0,l.jsx)(d,{children:e.map(e=>(0,l.jsxs)(f,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,l.jsxs)(p,{children:[e.title,(0,l.jsx)(m,{className:`fas fa-external-link-alt`})]}),e.description&&(0,l.jsx)(h,{children:e.description})]},e.id))})]})};export{g as default};