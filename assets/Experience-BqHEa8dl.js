import{a as e,d as t,i as n,m as r,r as i,s as a}from"./color-CvgIU9JW.js";import{r as o}from"./index-Blq7tTE6.js";var s=r(t()),c=e(),l=a.div`
  padding: 2rem;
  color: ${n};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,u=a.h1`
  font-size: 3rem;
  color: ${i};
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`,d=a.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background-color: ${i};
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
`,f=a.div`
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
    background-color: ${i};
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
`,p=a.span`
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${i};
`,m=a.h3`
  margin: 0 0 0.5rem 0;

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${i};
    }
  }
`,h=a.div`
  margin: 0;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`,g=a.div`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.85;
`,_=a.a`
  color: ${i};
  text-decoration: none;
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;

  &:hover {
    text-decoration: underline;
  }
`,v=a.p`
  margin: 0.5rem 0;
`,y=()=>{let[e,t]=(0,s.useState)([]);return(0,s.useEffect)(()=>{(async()=>{t(await o())})()},[]),(0,c.jsxs)(l,{children:[(0,c.jsx)(u,{children:`Experience`}),(0,c.jsx)(d,{children:e.map(e=>(0,c.jsxs)(f,{children:[(0,c.jsxs)(p,{children:[e.startDate,` - `,e.endDate]}),(0,c.jsx)(m,{children:e.title}),(0,c.jsxs)(h,{children:[(0,c.jsx)(_,{href:e.companyUrl,target:`_blank`,rel:`noopener noreferrer`,children:e.company}),(0,c.jsx)(v,{children:e.description}),(0,c.jsx)(g,{children:e.technologies})]})]},e.id))})]})};export{y as default};
//# sourceMappingURL=Experience-BqHEa8dl.js.map