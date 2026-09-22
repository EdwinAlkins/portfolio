import{n as e}from"./rolldown-runtime-CbXtAM7H.js";import{i as t,n}from"./analytics-CGLvg21U.js";import{r,t as i}from"./react-vendor-D-anasnh.js";import{a,c as o,i as s,o as c,s as l,u}from"./index-EbAZ2y9r.js";import{t as d}from"./mediaUtils-DHvxRvaD.js";var f=e(t()),p=i(),m=u(r)`
    text-decoration: none;
    color: inherit;
`,h=u.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    background: ${c};
    border-radius: 4px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(144, 205, 244, 0.2);
    }
`,g=u.div`
    position: relative;
    width: 100%;
    min-height: 180px;
    max-height: 240px;
    overflow: hidden;
    background: ${a};
    display: flex;
    align-items: center;
    justify-content: center;
`,_=u.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;

    ${h}:hover & {
        transform: scale(1.05);
    }
`,v=u.div`
    padding: 1rem;
`,y=u.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${o};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,b=u.p`
    margin: 0 0 0.75rem 0;
    font-size: 0.85rem;
    color: ${o};
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
`,x=u.div`
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: ${c};
    border: 1px solid rgba(144, 205, 244, 0.3);
    color: ${o};
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
        border-top-color: ${c};
    }
`,S=u.div`
    position: relative;
    width: 100%;

    &:hover ${x} {
        opacity: 1;
        visibility: visible;
    }
`,C=u.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`,w=u.span`
    background: rgba(144, 205, 244, 0.1);
    color: ${l};
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
`,T=u.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`,E=u.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({$status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
    margin-right: 6px;
`,D=u.span`
    font-size: 0.75rem;
    color: ${o};
    opacity: 0.6;
`,O=u.span`
    color: ${l};
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`,k=({project:e})=>{let t=n();return(0,p.jsx)(m,{to:`/portfolio/project/${e.id}`,onClick:()=>t?.capture(`project_card_clicked`,{project_id:e.id,project_title:e.title,category:e.category}),children:(0,p.jsxs)(h,{children:[(0,p.jsx)(g,{children:d(e.capsuleImage)?(0,p.jsx)(_,{as:`video`,src:e.capsuleImage,muted:!0,loop:!0,autoPlay:!0,playsInline:!0}):(0,p.jsx)(_,{src:e.capsuleImage,alt:e.title})}),(0,p.jsxs)(v,{children:[(0,p.jsx)(y,{children:e.title}),(0,p.jsxs)(S,{children:[(0,p.jsx)(b,{children:e.shortDescription}),(0,p.jsx)(x,{children:e.shortDescription})]}),(0,p.jsx)(C,{children:e.tags.slice(0,3).map(e=>(0,p.jsx)(w,{children:e},e))}),(0,p.jsxs)(T,{children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(E,{$status:e.status}),(0,p.jsx)(D,{children:e.category})]}),(0,p.jsx)(O,{children:`View Details →`})]})]})]})})},A=u.div`
  padding: 2rem;
  color: ${o};
`,j=u.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,M=u.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,N=u.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,P=u.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`,F=u.p`
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
`,I=u.div`
  display: flex;
  gap: 0.5rem;
`,L=u.button`
  background: ${({$active:e})=>e?`rgba(144, 205, 244, 0.15)`:`transparent`};
  color: ${({$active:e})=>e?l:o};
  border: 1px solid ${({$active:e})=>e?l:`rgba(255, 255, 255, 0.1)`};
  border-radius: 4px;
  padding: 0.4rem 0.85rem;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: ${({$active:e})=>e?1:.7};

  &:hover {
    opacity: 1;
    background: ${({$active:e})=>e?`rgba(144, 205, 244, 0.2)`:`rgba(255, 255, 255, 0.05)`};
  }
`,R=()=>{let e=n(),[t,r]=(0,f.useState)([]),[i,a]=(0,f.useState)(`all`);(0,f.useEffect)(()=>{(async()=>{let e=await s();r(e)})()},[]);let o=t.filter(e=>{if(i===`all`)return!0;let t=e.experienceId!==-1;return i===`professional`?t:i!==`personal`||!t}).sort((e,t)=>e.order===t.order?e.id-t.id:e.order-t.order);return(0,p.jsxs)(A,{children:[(0,p.jsxs)(M,{children:[(0,p.jsxs)(N,{children:[(0,p.jsx)(P,{children:`Projects`}),(0,p.jsx)(F,{children:`Browse my portfolio projects`})]}),(0,p.jsxs)(I,{children:[(0,p.jsx)(L,{$active:i===`all`,"aria-pressed":i===`all`,onClick:()=>{a(`all`),e?.capture(`projects_filter_changed`,{filter:`all`})},children:`Tous`}),(0,p.jsx)(L,{$active:i===`professional`,"aria-pressed":i===`professional`,onClick:()=>{a(`professional`),e?.capture(`projects_filter_changed`,{filter:`professional`})},children:`Professionnels`}),(0,p.jsx)(L,{$active:i===`personal`,"aria-pressed":i===`personal`,onClick:()=>{a(`personal`),e?.capture(`projects_filter_changed`,{filter:`personal`})},children:`Personnels`})]})]}),(0,p.jsx)(j,{children:o.map(e=>(0,p.jsx)(k,{project:e},e.id))})]})};export{R as default};