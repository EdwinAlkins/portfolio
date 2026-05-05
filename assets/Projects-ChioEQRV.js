import{a as e,c as t,d as n,i as r,n as i,r as a,s as o,t as s}from"./color-B4VygJcq.js";import{a as c,o as l,t as u}from"./index-DFEDFoql.js";var d=n(t()),f=e(),p=o(l)`
    text-decoration: none;
    color: inherit;
`,m=o.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    background: ${i};
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(144, 205, 244, 0.2);
    }
`,h=o.div`
    position: relative;
    width: 100%;
    min-height: 180px;
    max-height: 240px;
    overflow: hidden;
    background: ${s};
    display: flex;
    align-items: center;
    justify-content: center;
`,g=o.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;

    ${m}:hover & {
        transform: scale(1.05);
    }
`,_=o.div`
    padding: 1rem;
`,v=o.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${r};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,y=o.p`
    margin: 0 0 0.75rem 0;
    font-size: 0.85rem;
    color: ${r};
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
`,b=o.div`
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: ${i};
    border: 1px solid rgba(144, 205, 244, 0.3);
    color: ${r};
    padding: 0.75rem 1rem;
    border-radius: 4px;
    font-size: 0.85rem;
    line-height: 1.5;
    max-width: 350px;
    width: max-content;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.2s ease;
    z-index: 10;

    &::after {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-top-color: ${i};
    }
`,x=o.div`
    position: relative;
    width: 100%;

    &:hover ${b} {
        opacity: 1;
        visibility: visible;
    }
`,S=o.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`,C=o.span`
    background: rgba(144, 205, 244, 0.1);
    color: ${a};
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
`,w=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`,T=o.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
    margin-right: 6px;
`,E=o.span`
    font-size: 0.75rem;
    color: ${r};
    opacity: 0.6;
`,D=o.span`
    color: ${a};
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`,O=({project:e})=>{let t=u();return(0,f.jsx)(p,{to:`/portfolio/project/${e.id}`,onClick:()=>t?.capture(`project_card_clicked`,{project_id:e.id,project_title:e.title,category:e.category}),children:(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{children:(0,f.jsx)(g,{src:e.capsuleImage,alt:e.title})}),(0,f.jsxs)(_,{children:[(0,f.jsx)(v,{children:e.title}),(0,f.jsxs)(x,{children:[(0,f.jsx)(y,{children:e.shortDescription}),(0,f.jsx)(b,{children:e.shortDescription})]}),(0,f.jsx)(S,{children:e.tags.slice(0,3).map(e=>(0,f.jsx)(C,{children:e},e))}),(0,f.jsxs)(w,{children:[(0,f.jsxs)(`div`,{children:[(0,f.jsx)(T,{status:e.status}),(0,f.jsx)(E,{children:e.category})]}),(0,f.jsx)(D,{children:`View Details →`})]})]})]})})},k=o.div`
  padding: 2rem;
  color: ${r};
`,A=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,j=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,M=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,N=o.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`,P=o.p`
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
`,F=o.div`
  display: flex;
  gap: 0.5rem;
`,I=o.button`
  background: ${({active:e})=>e?`rgba(144, 205, 244, 0.15)`:`transparent`};
  color: ${({active:e})=>e?a:r};
  border: 1px solid ${({active:e})=>e?a:`rgba(255, 255, 255, 0.1)`};
  border-radius: 4px;
  padding: 0.4rem 0.85rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${({active:e})=>e?1:.7};

  &:hover {
    opacity: 1;
    background: ${({active:e})=>e?`rgba(144, 205, 244, 0.2)`:`rgba(255, 255, 255, 0.05)`};
  }
`,L=()=>{let e=u(),[t,n]=(0,d.useState)([]),[r,i]=(0,d.useState)(`all`);(0,d.useEffect)(()=>{(async()=>{n(await c())})()},[]);let a=t.filter(e=>{if(r===`all`)return!0;let t=e.experienceId!==-1;return r===`professional`?t:r===`personal`?!t:!0});return(0,f.jsxs)(k,{children:[(0,f.jsxs)(j,{children:[(0,f.jsxs)(M,{children:[(0,f.jsx)(N,{children:`Projects`}),(0,f.jsx)(P,{children:`Browse my portfolio projects`})]}),(0,f.jsxs)(F,{children:[(0,f.jsx)(I,{active:r===`all`,onClick:()=>{i(`all`),e?.capture(`projects_filter_changed`,{filter:`all`})},children:`Tous`}),(0,f.jsx)(I,{active:r===`professional`,onClick:()=>{i(`professional`),e?.capture(`projects_filter_changed`,{filter:`professional`})},children:`Professionnels`}),(0,f.jsx)(I,{active:r===`personal`,onClick:()=>{i(`personal`),e?.capture(`projects_filter_changed`,{filter:`personal`})},children:`Personnels`})]})]}),(0,f.jsx)(A,{children:a.map(e=>(0,f.jsx)(O,{project:e},e.id))})]})};export{L as default};
//# sourceMappingURL=Projects-ChioEQRV.js.map