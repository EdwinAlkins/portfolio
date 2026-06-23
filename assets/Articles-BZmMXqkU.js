import{c as e,d as t,f as n,g as r,h as i,l as a,n as o,u as s}from"./index-C9qPAoau.js";var c=r(i()),l=t(),u=n.div`
  padding: 2rem;
  color: ${a};
`,d=n.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
`,f=n.a`
  display: block;
  padding: 1.25rem 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  text-decoration: none;
  color: ${a};
  transition: border-color 0.2s ease, transform 0.2s ease;

  &:hover {
    border-color: ${e};
    transform: translateY(-2px);
  }
`,p=n.h2`
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,m=n.i`
  color: ${e};
  font-size: 0.85rem;
`,h=n.p`
  margin: 0;
  color: ${s};
  font-size: 0.95rem;
  line-height: 1.5;
`,g=()=>{let[e,t]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{t(await o())})()},[]),(0,l.jsxs)(u,{children:[(0,l.jsx)(`h1`,{children:`Articles`}),(0,l.jsx)(d,{children:e.map(e=>(0,l.jsxs)(f,{href:e.url,target:`_blank`,rel:`noopener noreferrer`,children:[(0,l.jsxs)(p,{children:[e.title,(0,l.jsx)(m,{className:`fas fa-external-link-alt`})]}),e.description&&(0,l.jsx)(h,{children:e.description})]},e.id))})]})};export{g as default};
//# sourceMappingURL=Articles-BZmMXqkU.js.map