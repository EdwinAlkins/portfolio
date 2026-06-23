import{a as e,c as t,d as n,f as r,g as i,h as a,l as o,m as s,p as c,r as l,s as u,t as d}from"./index-C9qPAoau.js";import f from"./NotFound-Cgwyc5Pk.js";var p=i(a()),m=n(),h=r.div`
  color: ${o};
`,g=r.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`,_=r(c)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${o};
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 1.5rem;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`,v=r.div`
  margin-bottom: 2rem;
`,y=r.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`,b=r.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,x=r.span`
  background: rgba(144, 205, 244, 0.15);
  color: ${t};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,S=r.a`
  background: rgba(144, 205, 244, 0.15);
  color: ${t};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
  }
`,C=r.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${o};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,w=r.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
  margin-right: 6px;
`,T=r.section`
  margin-bottom: 2rem;
`,E=r.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(144, 205, 244, 0.3);
`,D=r.div`
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
    color: ${t};
    font-weight: 600;
  }
`,O=e=>{if(!e)return null;let t=e.split(`
`),n=[],r=[],i=[],a=()=>{if(i.length>0){let e=i.join(` `);n.push((0,m.jsx)(`p`,{children:s(e)},`p-${n.length}`)),i=[]}},o=()=>{r.length>0&&(n.push((0,m.jsx)(`ul`,{children:r.map((e,t)=>(0,m.jsx)(`li`,{children:e},`li-${t}`))},`ul-${n.length}`)),r=[])},s=e=>{let t=[],n=/\*\*(.+?)\*\*/g,r=0,i;for(;(i=n.exec(e))!==null;)i.index>r&&t.push(e.substring(r,i.index)),t.push((0,m.jsx)(`strong`,{children:i[1]},`b-${i.index}`)),r=i.index+i[0].length;return r<e.length&&t.push(e.substring(r)),t.length>0?t:e};for(let e=0;e<t.length;e++){let n=t[e].trim();if(n.startsWith(`- `)||n.startsWith(`* `)){a();let e=n.substring(2);r.push(s(e))}else n===``?(a(),o()):(o(),i.push(n))}return a(),o(),n},k=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,A=r.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,j=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,M=r.img`
  width: 100%;
  border-radius: 4px;
  background: ${u};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(144, 205, 244, 0.2);
  }
`,N=r.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,P=r.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.15);
  color: ${t};
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
`,F=r.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,I=r.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`,L=r.div`
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
`,R=r.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=r.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`,B=r.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: ${o};
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${t};
  }
`,V=r.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(144, 205, 244, 0.2);
  border: none;
  color: ${t};
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
`,H=r(V)`
  left: -80px;
`,U=r(V)`
  right: -80px;
`,W=r.div`
  color: ${o};
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`,G=()=>{let{id:n}=s(),r=d(),[i,a]=(0,p.useState)(null),[o,c]=(0,p.useState)(!0),[u,V]=(0,p.useState)(null),[G,K]=(0,p.useState)(!1),[q,J]=(0,p.useState)(0);(0,p.useEffect)(()=>{(async()=>{c(!0);try{let t=(await e()).find(e=>String(e.id)===n)||null;a(t),t?.experienceId&&t.experienceId>0?V(await l(t.experienceId)||null):V(null)}finally{c(!1)}})()},[n]);let Y=(0,p.useCallback)(e=>{J(e),K(!0),r?.capture(`project_image_modal_opened`,{project_id:n,image_index:e})},[n,r]),X=(0,p.useCallback)(()=>{K(!1)},[]),Z=(0,p.useCallback)(()=>{i&&q>0&&J(q-1)},[i,q]),Q=(0,p.useCallback)(()=>{i&&q<i.images.length-1&&J(q+1)},[i,q]);return(0,p.useEffect)(()=>{let e=e=>{G&&(e.key===`Escape`&&X(),e.key===`ArrowLeft`&&Z(),e.key===`ArrowRight`&&Q())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[G,X,Z,Q]),o?(0,m.jsx)(h,{children:(0,m.jsx)(g,{children:`Loading...`})}):i?(0,m.jsxs)(h,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(_,{to:`/portfolio/projects`,children:`← Back to Projects`}),(0,m.jsxs)(v,{children:[(0,m.jsx)(y,{children:i.title}),(0,m.jsxs)(b,{children:[(0,m.jsxs)(x,{children:[(0,m.jsx)(w,{status:i.status}),i.status]}),(0,m.jsx)(x,{children:i.category}),u?(0,m.jsxs)(S,{href:u.companyUrl,target:`_blank`,rel:`noopener noreferrer`,children:[u.company,` (`,u.startDate,` - `,u.endDate,`)`]}):(0,m.jsx)(C,{children:`Personal Project`})]})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`About`}),(0,m.jsx)(D,{children:O(i.longDescription)})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Tags`}),(0,m.jsx)(k,{children:i.tags.map(e=>(0,m.jsx)(A,{children:e},e))})]}),(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Technologies`}),(0,m.jsx)(F,{children:i.technologies.map(e=>(0,m.jsxs)(I,{children:[(0,m.jsx)(`i`,{className:`fab fa-${e}`,style:{color:t,fontSize:`1.1rem`}}),(0,m.jsx)(`span`,{children:e})]},e))})]}),i.images&&i.images.length>0&&(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Project Images`}),(0,m.jsx)(j,{children:i.images.map((e,t)=>(0,m.jsx)(M,{src:e,alt:`${i.title} - Image ${t+1}`,onClick:()=>Y(t)},t))})]}),i.links&&Object.keys(i.links).length>0&&(0,m.jsxs)(T,{children:[(0,m.jsx)(E,{children:`Links`}),(0,m.jsxs)(N,{children:[i.links.github&&(0,m.jsx)(m.Fragment,{children:Array.isArray(i.links.github)?i.links.github.map((e,t)=>(0,m.jsxs)(P,{href:e,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`github`,url:e}),children:[(0,m.jsx)(`i`,{className:`fab fa-github`}),` GitHub `,i.links.github.length>1?`#${t+1}`:``]},t)):(0,m.jsxs)(P,{href:i.links.github,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`github`,url:i.links.github}),children:[(0,m.jsx)(`i`,{className:`fab fa-github`}),` GitHub`]})}),i.links.demo&&(0,m.jsx)(m.Fragment,{children:Array.isArray(i.links.demo)?i.links.demo.map((e,t)=>(0,m.jsxs)(P,{href:e,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`demo`,url:e}),children:[(0,m.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo `,i.links.demo.length>1?`#${t+1}`:``]},t)):(0,m.jsxs)(P,{href:i.links.demo,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`demo`,url:i.links.demo}),children:[(0,m.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo`]})}),i.links.documentation&&(0,m.jsx)(m.Fragment,{children:Array.isArray(i.links.documentation)?i.links.documentation.map((e,t)=>(0,m.jsxs)(P,{href:e,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`documentation`,url:e}),children:[(0,m.jsx)(`i`,{className:`fas fa-book`}),` Documentation `,i.links.documentation.length>1?`#${t+1}`:``]},t)):(0,m.jsxs)(P,{href:i.links.documentation,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>r?.capture(`project_link_clicked`,{project_id:n,link_type:`documentation`,url:i.links.documentation}),children:[(0,m.jsx)(`i`,{className:`fas fa-book`}),` Documentation`]})})]})]})]}),G&&i&&(0,m.jsx)(L,{onClick:X,children:(0,m.jsxs)(R,{onClick:e=>e.stopPropagation(),children:[(0,m.jsx)(B,{onClick:X,children:`×`}),(0,m.jsx)(H,{onClick:Z,disabled:q===0,children:`‹`}),(0,m.jsx)(z,{src:i.images[q],alt:`${i.title} - Image ${q+1}`}),(0,m.jsx)(U,{onClick:Q,disabled:q===i.images.length-1,children:`›`}),(0,m.jsxs)(W,{children:[q+1,` / `,i.images.length]})]})})]}):(0,m.jsx)(f,{})};export{G as default};
//# sourceMappingURL=Project-CXTC8Hgl.js.map