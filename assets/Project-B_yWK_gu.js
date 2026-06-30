import{n as e}from"./rolldown-runtime-Bh1tDfsg.js";import{i as t,n}from"./analytics-CpScIfsJ.js";import{r,s as i,t as a}from"./react-vendor-kOwVo2tE.js";import{c as o,i as s,n as c,o as l,s as u,u as d}from"./index-CVeBxgEM.js";import ee from"./NotFound-CFSSS8MQ.js";var f=e(t()),p=a(),m={github:{icon:`fab fa-github`,label:`GitHub`},demo:{icon:`fas fa-external-link-alt`,label:`Live Demo`},documentation:{icon:`fas fa-book`,label:`Documentation`},pypi:{label:`PyPI`},article:{label:`Article`}},h=e=>e.charAt(0).toUpperCase()+e.slice(1),g=d.div`
  color: ${o};
`,_=d.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`,v=d(r)`
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
`,y=d.div`
  margin-bottom: 2rem;
`,b=d.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`,x=d.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,S=d.span`
  background: rgba(144, 205, 244, 0.15);
  color: ${u};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,C=d.a`
  background: rgba(144, 205, 244, 0.15);
  color: ${u};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(144, 205, 244, 0.25);
  }
`,w=d.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${o};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,te=d.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
  margin-right: 6px;
`,T=d.section`
  margin-bottom: 2rem;
`,E=d.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(144, 205, 244, 0.3);
`,D=d.div`
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
    color: ${u};
    font-weight: 600;
  }
`,O=e=>{if(!e)return null;let t=e.split(`
`),n=[],r=[],i=[],a=()=>{if(i.length>0){let e=i.join(` `);n.push((0,p.jsx)(`p`,{children:s(e)},`p-${n.length}`)),i=[]}},o=()=>{r.length>0&&(n.push((0,p.jsx)(`ul`,{children:r.map((e,t)=>(0,p.jsx)(`li`,{children:e},`li-${t}`))},`ul-${n.length}`)),r=[])},s=e=>{let t=[],n=/\*\*(.+?)\*\*/g,r=0,i;for(;(i=n.exec(e))!==null;)i.index>r&&t.push(e.substring(r,i.index)),t.push((0,p.jsx)(`strong`,{children:i[1]},`b-${i.index}`)),r=i.index+i[0].length;return r<e.length&&t.push(e.substring(r)),t.length>0?t:e};for(let e=0;e<t.length;e++){let n=t[e].trim();if(n.startsWith(`- `)||n.startsWith(`* `)){a();let e=n.substring(2);r.push(s(e))}else n===``?(a(),o()):(o(),i.push(n))}return a(),o(),n},k=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,A=d.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,j=d.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,M=d.img`
  width: 100%;
  border-radius: 4px;
  background: ${l};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(144, 205, 244, 0.2);
  }
`,N=d.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,P=d.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.15);
  color: ${u};
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
`,F=d.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,I=d.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`,L=d.div`
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
`,R=d.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,z=d.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`,B=d.button`
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
    color: ${u};
  }
`,V=d.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(144, 205, 244, 0.2);
  border: none;
  color: ${u};
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
`,H=d(V)`
  left: -80px;
`,U=d(V)`
  right: -80px;
`,W=d.div`
  color: ${o};
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`,G=()=>{let{id:e}=i(),t=n(),[r,a]=(0,f.useState)(null),[o,l]=(0,f.useState)(!0),[d,V]=(0,f.useState)(null),[G,K]=(0,f.useState)(!1),[q,J]=(0,f.useState)(0),Y=(0,f.useRef)(void 0);(0,f.useEffect)(()=>{Y.current=r?.title},[r]),(0,f.useEffect)(()=>{if(!e)return;let n=Date.now();return()=>{let r=Math.round((Date.now()-n)/1e3);r<1||(t?.capture(`project_view_time`,{project_id:e,project_title:Y.current,time_spent_seconds:r}),r>20&&t?.setPersonProperties({is_engaged_reader:!0}))}},[e,t]),(0,f.useEffect)(()=>{(async()=>{l(!0);try{let t=(await s()).find(t=>String(t.id)===e)||null;a(t),t?.experienceId&&t.experienceId>0?V(await c(t.experienceId)||null):V(null)}finally{l(!1)}})()},[e]);let X=(0,f.useCallback)(n=>{J(n),K(!0),t?.capture(`project_image_modal_opened`,{project_id:e,image_index:n})},[e,t]),Z=(0,f.useCallback)(()=>{K(!1)},[]),Q=(0,f.useCallback)(()=>{r&&q>0&&J(q-1)},[r,q]),$=(0,f.useCallback)(()=>{r&&q<r.images.length-1&&J(q+1)},[r,q]);return(0,f.useEffect)(()=>{let e=e=>{G&&(e.key===`Escape`&&Z(),e.key===`ArrowLeft`&&Q(),e.key===`ArrowRight`&&$())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[G,Z,Q,$]),o?(0,p.jsx)(g,{children:(0,p.jsx)(_,{children:`Loading...`})}):r?(0,p.jsxs)(g,{children:[(0,p.jsxs)(_,{children:[(0,p.jsx)(v,{to:`/portfolio/projects`,children:`← Back to Projects`}),(0,p.jsxs)(y,{children:[(0,p.jsx)(b,{children:r.title}),(0,p.jsxs)(x,{children:[(0,p.jsxs)(S,{children:[(0,p.jsx)(te,{status:r.status}),r.status]}),(0,p.jsx)(S,{children:r.category}),d?(0,p.jsxs)(C,{href:d.companyUrl,target:`_blank`,rel:`noopener noreferrer`,children:[d.company,` (`,d.startDate,` - `,d.endDate,`)`]}):(0,p.jsx)(w,{children:`Personal Project`})]})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{children:`About`}),(0,p.jsx)(D,{children:O(r.longDescription)})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{children:`Tags`}),(0,p.jsx)(k,{children:r.tags.map(e=>(0,p.jsx)(A,{children:e},e))})]}),(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{children:`Technologies`}),(0,p.jsx)(F,{children:r.technologies.map(e=>(0,p.jsxs)(I,{children:[(0,p.jsx)(`i`,{className:`fab fa-${e}`,style:{color:u,fontSize:`1.1rem`}}),(0,p.jsx)(`span`,{children:e})]},e))})]}),r.images&&r.images.length>0&&(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{children:`Project Images`}),(0,p.jsx)(j,{children:r.images.map((e,t)=>(0,p.jsx)(M,{src:e,alt:`${r.title} - Image ${t+1}`,onClick:()=>X(t)},t))})]}),r.links&&Object.keys(r.links).length>0&&(0,p.jsxs)(T,{children:[(0,p.jsx)(E,{children:`Links`}),(0,p.jsx)(N,{children:Object.entries(r.links).map(([n,r])=>{if(!r)return null;let i=m[n],a=i?.icon,o=i?.label??h(n),s=Array.isArray(r)?r:[r];return s.map((r,i)=>(0,p.jsxs)(P,{href:r,target:`_blank`,rel:`noopener noreferrer`,onClick:()=>t?.capture(`project_link_clicked`,{project_id:e,link_type:n,url:r}),children:[a&&(0,p.jsx)(`i`,{className:a}),` `,o,s.length>1?` #${i+1}`:``]},`${n}-${i}`))})})]})]}),G&&r&&(0,p.jsx)(L,{onClick:Z,children:(0,p.jsxs)(R,{onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(B,{onClick:Z,children:`×`}),(0,p.jsx)(H,{onClick:Q,disabled:q===0,children:`‹`}),(0,p.jsx)(z,{src:r.images[q],alt:`${r.title} - Image ${q+1}`}),(0,p.jsx)(U,{onClick:$,disabled:q===r.images.length-1,children:`›`}),(0,p.jsxs)(W,{children:[q+1,` / `,r.images.length]})]})})]}):(0,p.jsx)(ee,{})};export{G as default};