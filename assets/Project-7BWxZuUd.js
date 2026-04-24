import{a as e,c as t,d as n,i as r,n as i,r as a,s as o}from"./color-B4VygJcq.js";import{a as s,i as c,n as l,o as u}from"./index-DOFxZhe-.js";var d=n(t()),f=e(),p=o.div`
  color: ${r};
`,m=o.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`,h=o(s)`
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
`,g=o.div`
  margin-bottom: 2rem;
`,_=o.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
  font-weight: 700;
`,v=o.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`,y=o.span`
  background: rgba(144, 205, 244, 0.15);
  color: ${a};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,b=o.a`
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
`,x=o.span`
  background: rgba(255, 255, 255, 0.1);
  color: ${r};
  padding: 4px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  font-weight: 500;
`,S=o.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
  margin-right: 6px;
`,C=o.section`
  margin-bottom: 2rem;
`,w=o.h2`
  font-size: 1.25rem;
  margin: 0 0 1rem 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(144, 205, 244, 0.3);
`,T=o.div`
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
`,E=e=>{if(!e)return null;let t=e.split(`
`),n=[],r=[],i=[],a=()=>{if(i.length>0){let e=i.join(` `);n.push((0,f.jsx)(`p`,{children:s(e)},`p-${n.length}`)),i=[]}},o=()=>{r.length>0&&(n.push((0,f.jsx)(`ul`,{children:r.map((e,t)=>(0,f.jsx)(`li`,{children:e},`li-${t}`))},`ul-${n.length}`)),r=[])},s=e=>{let t=[],n=/\*\*(.+?)\*\*/g,r=0,i;for(;(i=n.exec(e))!==null;)i.index>r&&t.push(e.substring(r,i.index)),t.push((0,f.jsx)(`strong`,{children:i[1]},`b-${i.index}`)),r=i.index+i[0].length;return r<e.length&&t.push(e.substring(r)),t.length>0?t:e};for(let e=0;e<t.length;e++){let n=t[e].trim();if(n.startsWith(`- `)||n.startsWith(`* `)){a();let e=n.substring(2);r.push(s(e))}else n===``?(a(),o()):(o(),i.push(n))}return a(),o(),n},D=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`,O=o.span`
  background: rgba(255, 255, 255, 0.05);
  padding: 6px 12px;
  border-radius: 2px;
  font-size: 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`,k=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
`,A=o.img`
  width: 100%;
  border-radius: 4px;
  background: ${i};
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 16px rgba(144, 205, 244, 0.2);
  }
`,j=o.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,M=o.a`
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
`,N=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`,P=o.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(144, 205, 244, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
`,F=o.div`
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
`,I=o.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`,L=o.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`,R=o.button`
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
`,z=o.button`
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
`,B=o(z)`
  left: -80px;
`,V=o(z)`
  right: -80px;
`,H=o.div`
  color: ${r};
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.7;
`,U=()=>{let{id:e}=u(),[t,n]=(0,d.useState)(null),[r,i]=(0,d.useState)(null),[o,s]=(0,d.useState)(!1),[z,U]=(0,d.useState)(0);(0,d.useEffect)(()=>{(async()=>{let t=(await c()).find(t=>String(t.id)===e)||null;n(t),t?.experienceId&&t.experienceId>0?i(await l(t.experienceId)||null):i(null)})()},[e]);let W=(0,d.useCallback)(e=>{U(e),s(!0)},[]),G=(0,d.useCallback)(()=>{s(!1)},[]),K=(0,d.useCallback)(()=>{t&&z>0&&U(z-1)},[t,z]),q=(0,d.useCallback)(()=>{t&&z<t.images.length-1&&U(z+1)},[t,z]);return(0,d.useEffect)(()=>{let e=e=>{o&&(e.key===`Escape`&&G(),e.key===`ArrowLeft`&&K(),e.key===`ArrowRight`&&q())};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[o,G,K,q]),t?(0,f.jsxs)(p,{children:[(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{to:`/portfolio/projects`,children:`← Back to Projects`}),(0,f.jsxs)(g,{children:[(0,f.jsx)(_,{children:t.title}),(0,f.jsxs)(v,{children:[(0,f.jsxs)(y,{children:[(0,f.jsx)(S,{status:t.status}),t.status]}),(0,f.jsx)(y,{children:t.category}),r?(0,f.jsxs)(b,{href:r.companyUrl,target:`_blank`,rel:`noopener noreferrer`,children:[r.company,` (`,r.startDate,` - `,r.endDate,`)`]}):(0,f.jsx)(x,{children:`Personal Project`})]})]}),(0,f.jsxs)(C,{children:[(0,f.jsx)(w,{children:`About`}),(0,f.jsx)(T,{children:E(t.longDescription)})]}),(0,f.jsxs)(C,{children:[(0,f.jsx)(w,{children:`Tags`}),(0,f.jsx)(D,{children:t.tags.map(e=>(0,f.jsx)(O,{children:e},e))})]}),(0,f.jsxs)(C,{children:[(0,f.jsx)(w,{children:`Technologies`}),(0,f.jsx)(N,{children:t.technologies.map(e=>(0,f.jsxs)(P,{children:[(0,f.jsx)(`i`,{className:`fab fa-${e}`,style:{color:a,fontSize:`1.1rem`}}),(0,f.jsx)(`span`,{children:e})]},e))})]}),t.images&&t.images.length>0&&(0,f.jsxs)(C,{children:[(0,f.jsx)(w,{children:`Project Images`}),(0,f.jsx)(k,{children:t.images.map((e,n)=>(0,f.jsx)(A,{src:e,alt:`${t.title} - Image ${n+1}`,onClick:()=>W(n)},n))})]}),t.links&&Object.keys(t.links).length>0&&(0,f.jsxs)(C,{children:[(0,f.jsx)(w,{children:`Links`}),(0,f.jsxs)(j,{children:[t.links.github&&(0,f.jsx)(f.Fragment,{children:Array.isArray(t.links.github)?t.links.github.map((e,n)=>(0,f.jsxs)(M,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fab fa-github`}),` GitHub `,t.links.github.length>1?`#${n+1}`:``]},n)):(0,f.jsxs)(M,{href:t.links.github,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fab fa-github`}),` GitHub`]})}),t.links.demo&&(0,f.jsx)(f.Fragment,{children:Array.isArray(t.links.demo)?t.links.demo.map((e,n)=>(0,f.jsxs)(M,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo `,t.links.demo.length>1?`#${n+1}`:``]},n)):(0,f.jsxs)(M,{href:t.links.demo,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fas fa-external-link-alt`}),` Live Demo`]})}),t.links.documentation&&(0,f.jsx)(f.Fragment,{children:Array.isArray(t.links.documentation)?t.links.documentation.map((e,n)=>(0,f.jsxs)(M,{href:e,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fas fa-book`}),` Documentation `,t.links.documentation.length>1?`#${n+1}`:``]},n)):(0,f.jsxs)(M,{href:t.links.documentation,target:`_blank`,rel:`noopener noreferrer`,children:[(0,f.jsx)(`i`,{className:`fas fa-book`}),` Documentation`]})})]})]})]}),o&&t&&(0,f.jsx)(F,{onClick:G,children:(0,f.jsxs)(I,{onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(R,{onClick:G,children:`×`}),(0,f.jsx)(B,{onClick:K,disabled:z===0,children:`‹`}),(0,f.jsx)(L,{src:t.images[z],alt:`${t.title} - Image ${z+1}`}),(0,f.jsx)(V,{onClick:q,disabled:z===t.images.length-1,children:`›`}),(0,f.jsxs)(H,{children:[z+1,` / `,t.images.length]})]})})]}):(0,f.jsx)(p,{children:`Loading...`})};export{U as default};
//# sourceMappingURL=Project-7BWxZuUd.js.map