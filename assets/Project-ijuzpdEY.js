import{a as e,c as t,d as n,i as r,n as i,r as a,s as o}from"./color-B4VygJcq.js";import{a as s,o as c,r as l,s as u,t as d}from"./index-DFEDFoql.js";var f=n(t()),p=e(),m=o.div`
  color: ${r};
`,h=o.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`,g=o(c)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${r};
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`,_=o.div`
  margin-bottom: 2rem;
`,v=o.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`,y=o.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,b=o.span`
  background: rgba(144, 205, 244, 0.15);
  color: ${a};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,x=o.a`
  background: rgba(144, 205, 244, 0.15);
  color: ${a};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
  }
`,S=o.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${r};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,C=o.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
  margin-right: 6px;
`,w=o.section`
  margin-bottom: 2rem;
`,T=o.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(144, 205, 244, 0.3);
`,E=o.div`
  font-size: 1rem;
  line-height: 1.7;
  opacity: 0.9;

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin: 0.25rem 0;
  }

  strong {
    color: ${a};
    font-weight: 600;
  }
`,D=e=>{if(!e)return null;let t=e.split(`
`),n=[],r=[],i=[],a=()=>{if(i.length>0){let e=i.join(` `);n.push((0,p.jsx)(`p`,{children:s(e)},`p-${n.length}`)),i=[]}},o=()=>{r.length>0&&(n.push((0,p.jsx)(`ul`,{children:r.map((e,t)=>(0,p.jsx)(`li`,{children:e},`li-${t}`))},`ul-${n.length}`)),r=[])},s=e=>{let t=[],n=/\*\*(.+?)\*\*/g,r=0,i;for(;(i=n.exec(e))!==null;)i.index>r&&t.push(e.substring(r,i.index)),t.push((0,p.jsx)(`strong`,{children:i[1]},`b-${i.index}`)),r=i.index+i[0].length;return r<e.length&&t.push(e.substring(r)),t.length>0?t:e};for(let e=0;e<t.length;e++){let n=t[e].trim();if(n.startsWith(`- `)||n.startsWith(`* `)){a();let e=n.substring(2);r.push(s(e))}else n===``?(a(),o()):(o(),i.push(n))}return a(),o(),n},O=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,k=o.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,A=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,j=o.img`
  width: 100%;
  border-radius: 4px;
  background: ${i};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(144, 205, 244, 0.2);
  }
`,M=o.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,N=o.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.15);
  color: ${a};
  padding: 0.75rem 1.25rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  border: 1px solid rgba(144, 205, 244, 0.3);
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
    transform: translateY(-2px);
  }
`,P=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,F=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`,I=o.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,L=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,R=o.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`,z=o.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: ${r};
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${a};
  }
`,B=o.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(144, 205, 244, 0.2);
  border: none;
  color: ${a};
  font-size: 2rem;
  cursor: pointer;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.4);
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`,V=o(B)`
  left: -80px;
`,H=o(B)`
  right: -80px;
`,U=o.div`
  color: ${r};
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`,W=()=>{let{id:e}=u(),t=d(),[n,r]=(0,f.useState)(null),[i,o]=(0,f.useState)(null),[c,B]=(0,f.useState)(!1),[W,G]=(0,f.useState)(0);(0,f.useEffect)(()=>{(async()=>{let t=(await s()).find(t=>String(t.id)===e)||null;r(t),t?.experienceId&&t.experienceId>0?o(await l(t.experienceId)||null):o(null)})()},[e]);let K=(0,f.useCallback)(n=>{G(n),B(!0),t?.capture(`project_image_modal_opened`,{project_id:e,image_index:n})},[e,t]),q=(0,f.useCallback)(()=>{B(!1)},[]),J=(0,f.useCallback)(()=>{n&&W>0&&G(W-1)},[n,W]),Y=(0,f.useCallback)(()=>{n&&W<n.images.length-1&&G(W+1)},[n,W]);return(0,f.useEffect)(()=>{let e=e=>{c&&(e.key===`Escape`&&q(),e.key===`ArrowLeft`&&J(),e.key===`ArrowRight`&&Y())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[c,q,J,Y]),n?(0,p.jsxs)(m,{children:[(0,p.jsxs)(h,{children:[(0,p.jsx)(g,{to:`/portfolio/projects`,children:`← Back to Projects`}),(0,p.jsxs)(_,{children:[(0,p.jsx)(v,{children:n.title}),(0,p.jsxs)(y,{children:[(0,p.jsxs)(b,{children:[(0,p.jsx)(C,{status:n.status}),n.status]}),(0,p.jsx)(b,{children:n.category}),i?(0,p.jsxs)(x,{href:i.companyUrl,target:`_blank`,rel:`noopener noreferrer`,children:[i.company,` (`,i.startDate,` - `,i.endDate,`)`]}):(0,p.jsx)(S,{children:`Personal Project`})]})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(T,{children:`About`}),(0,p.jsx)(E,{children:D(n.longDescription)})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(T,{children:`Tags`}),(0,p.jsx)(O,{children:n.tags.map(e=>(0,p.jsx)(k,{children:e},e))})]}),(0,p.jsxs)(w,{children:[(0,p.jsx)(T,{children:`Technologies`}),(0,p.jsx)(P,{children:n.technologies.map(e=>(0,p.jsxs)(F,{children:[(0,p.jsx)(`i`,{className:`fab fa-${e}`,style:{color:a,fontSize:`1.1rem`}}),(0,p.jsx)(`span`,{children:e})]},e))})]}),n.images&&n.images.length>0&&(0,p.jsxs)(w,{children:[(0,p.jsx)(T,{children:`Project Images`}),(0,p.jsx)(A,{children:n.images.map((e,t)=>(0,p.jsx)(j,{src:e,alt:`${n.title} - Image ${t+1}`,onClick:()=>K(t)},t))})]}),n.links&&Object.keys(n.links).length>0&&(0,p.jsxs)(w,{children:[(0,p.jsx)(T,{children:`Links`}),(0,p.jsxs)(M,{children:[n.links.github&&(0,p.jsx)(p.Fragment,{children:Array.isArray(n.links.github)?n.links.github.map((r,i)=>(0,p.jsxs)(N,{href:r,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`github`,url:r}),children:[(0,p.jsx)(`i`,{className:`fab fa-github`}),` GitHub `,n.links.github.length>1?`#${i+1}`:``]},i)):(0,p.jsxs)(N,{href:n.links.github,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`github`,url:n.links.github}),children:[(0,p.jsx)(`i`,{className:`fab fa-github`}),` GitHub`]})}),n.links.demo&&(0,p.jsx)(p.Fragment,{children:Array.isArray(n.links.demo)?n.links.demo.map((r,i)=>(0,p.jsxs)(N,{href:r,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`demo`,url:r}),children:[(0,p.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo `,n.links.demo.length>1?`#${i+1}`:``]},i)):(0,p.jsxs)(N,{href:n.links.demo,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`demo`,url:n.links.demo}),children:[(0,p.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo`]})}),n.links.documentation&&(0,p.jsx)(p.Fragment,{children:Array.isArray(n.links.documentation)?n.links.documentation.map((r,i)=>(0,p.jsxs)(N,{href:r,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`documentation`,url:r}),children:[(0,p.jsx)(`i`,{className:`fas fa-book`}),` Documentation `,n.links.documentation.length>1?`#${i+1}`:``]},i)):(0,p.jsxs)(N,{href:n.links.documentation,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:`documentation`,url:n.links.documentation}),children:[(0,p.jsx)(`i`,{className:`fas fa-book`}),` Documentation`]})})]})]})]}),c&&n&&(0,p.jsx)(I,{onClick:q,children:(0,p.jsxs)(L,{onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(z,{onClick:q,children:`×`}),(0,p.jsx)(V,{onClick:J,disabled:W===0,children:`‹`}),(0,p.jsx)(R,{src:n.images[W],alt:`${n.title} - Image ${W+1}`}),(0,p.jsx)(H,{onClick:Y,disabled:W===n.images.length-1,children:`›`}),(0,p.jsxs)(U,{children:[W+1,` / `,n.images.length]})]})})]}):(0,p.jsx)(m,{children:`Loading...`})};export{W as default};
//# sourceMappingURL=Project-ijuzpdEY.js.map