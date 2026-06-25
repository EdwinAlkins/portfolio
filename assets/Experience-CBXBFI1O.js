import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,n}from"./analytics-CpScIfsJ.js";import{t as r}from"./react-vendor-kOwVo2tE.js";import{c as i,r as a,s as o,u as s}from"./index-CSX-IDSQ.js";var c=e(t()),l=r(),u=s.div`
  padding: 2rem;
  color: ${i};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,d=s.h1`
  font-size: 3rem;
  color: ${o};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,f=s.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${o};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
    z-index: 0;
  }

  @media (max-width: 768px) {
    &::after {
      left: 31px;
    }
  }
`,p=s.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    text-align: right;
  }

  &:nth-child(even) {
    left: 50%;
    text-align: left;
  }

  &::after {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: ${o};
    border-radius: 50%;
    top: 15px;
    right: -8px;
    z-index: 1;
  }

  &:nth-child(even)::after {
    left: -8px;
    right: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;

    &:nth-child(odd), &:nth-child(even) {
      left: 0;
      text-align: left;
    }

    &::after {
      left: 23px !important;
      right: auto !important;
    }
  }
`,m=s.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${o};
`,h=s.h3`
  margin: 0 0 0.5rem 0;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${o};
    }
  }
`,g=s.div`
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,_=s.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.85;
`,v=s.a`
  color: ${o};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`,y=s.p`
  margin: 0.5rem 0;
`,b=()=>{let e=n(),[t,r]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(async()=>{r(await a())})()},[]),(0,l.jsxs)(u,{children:[(0,l.jsx)(d,{children:`Experience`}),(0,l.jsx)(f,{children:t.map(t=>(0,l.jsxs)(p,{children:[(0,l.jsxs)(m,{children:[t.startDate,` - `,t.endDate]}),(0,l.jsx)(h,{children:t.title}),(0,l.jsxs)(g,{children:[(0,l.jsx)(v,{href:t.companyUrl,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>e?.capture(`experience_company_link_clicked`,{company:t.company,url:t.companyUrl}),children:t.company}),(0,l.jsx)(y,{children:t.description}),(0,l.jsx)(_,{children:t.technologies})]})]},t.id))})]})};export{b as default};