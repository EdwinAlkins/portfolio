import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,n}from"./analytics-CpScIfsJ.js";import{t as r}from"./react-vendor-kOwVo2tE.js";import{c as i,l as a,s as o,t as s,u as c}from"./index-CVeBxgEM.js";var l=e(t()),u=r(),d=c.div`
  padding: 2rem;
  color: ${i};
`,f=c.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,p=c.a`
  display: block;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: ${i};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${o};
    transform: translateY(-2px);
  }
`,m=c.h2`
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,h=c.i`
  color: ${o};
  font-size: 0.85rem;
`,g=c.p`
  margin: 0;
  color: ${a};
  font-size: 0.95rem;
  line-height: 1.5;
`,_=()=>{let[e,t]=(0,l.useState)([]),r=n();return(0,l.useEffect)(()=>{(async()=>{t(await s())})()},[]),(0,u.jsxs)(d,{children:[(0,u.jsx)(`h1`,{children:`Articles`}),(0,u.jsx)(f,{children:e.map(e=>(0,u.jsxs)(p,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`article_clicked`,{article_id:e.id,title:e.title,url:e.url}),children:[(0,u.jsxs)(m,{children:[e.title,(0,u.jsx)(h,{className:`fas fa-external-link-alt`})]}),e.description&&(0,u.jsx)(g,{children:e.description})]},e.id))})]})};export{_ as default};