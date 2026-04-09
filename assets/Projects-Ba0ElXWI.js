import{a as e,d as t,i as n,m as r,n as i,r as a,s as o,t as s}from"./color-CvgIU9JW.js";import{a as c,i as l}from"./index-Blq7tTE6.js";var u=r(t()),d=e(),f=o(c)`
    text-decoration: none;
    color: inherit;
`,p=o.div`
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
`,m=o.div`
    position: relative;
    width: 100%;
    min-height: 180px;
    max-height: 240px;
    overflow: hidden;
    background: ${s};
    display: flex;
    align-items: center;
    justify-content: center;
`,h=o.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s ease;

    ${p}:hover & {
        transform: scale(1.05);
    }
`,g=o.div`
    padding: 1rem;
`,_=o.h3`
    margin: 0 0 0.5rem 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${n};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`,v=o.p`
    margin: 0 0 0.75rem 0;
    font-size: 0.85rem;
    color: ${n};
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    line-height: 1.4;
`,y=o.div`
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%);
    background: ${i};
    border: 1px solid rgba(144, 205, 244, 0.3);
    color: ${n};
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
`,b=o.div`
    position: relative;
    width: 100%;

    &:hover ${y} {
        opacity: 1;
        visibility: visible;
    }
`,x=o.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 0.75rem;
`,S=o.span`
    background: rgba(144, 205, 244, 0.1);
    color: ${a};
    padding: 2px 8px;
    border-radius: 2px;
    font-size: 0.75rem;
    font-weight: 500;
`,C=o.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.75rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
`,w=o.div`
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({status:e})=>e===`Production`?`#4ade80`:e===`Beta`?`#fbbf24`:`#f87171`};
    margin-right: 6px;
`,T=o.span`
    font-size: 0.75rem;
    color: ${n};
    opacity: 0.6;
`,E=o.span`
    color: ${a};
    font-size: 0.85rem;
    font-weight: 500;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`,D=({project:e})=>(0,d.jsx)(f,{to:`/portfolio/project/${e.id}`,children:(0,d.jsxs)(p,{children:[(0,d.jsx)(m,{children:(0,d.jsx)(h,{src:e.capsuleImage,alt:e.title})}),(0,d.jsxs)(g,{children:[(0,d.jsx)(_,{children:e.title}),(0,d.jsxs)(b,{children:[(0,d.jsx)(v,{children:e.shortDescription}),(0,d.jsx)(y,{children:e.shortDescription})]}),(0,d.jsx)(x,{children:e.tags.slice(0,3).map(e=>(0,d.jsx)(S,{children:e},e))}),(0,d.jsxs)(C,{children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(w,{status:e.status}),(0,d.jsx)(T,{children:e.category})]}),(0,d.jsx)(E,{children:`View Details →`})]})]})]})}),O=o.div`
  padding: 2rem;
  color: ${n};
`,k=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 0 auto;
`,A=o.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`,j=o.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`,M=o.h1`
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
`,N=o.p`
  margin: 0;
  opacity: 0.7;
  font-size: 0.9rem;
`,P=o.div`
  display: flex;
  gap: 0.5rem;
`,F=o.button`
  background: ${({active:e})=>e?`rgba(144, 205, 244, 0.15)`:`transparent`};
  color: ${({active:e})=>e?a:n};
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
`,I=()=>{let[e,t]=(0,u.useState)([]),[n,r]=(0,u.useState)(`all`);(0,u.useEffect)(()=>{(async()=>{t(await l())})()},[]);let i=e.filter(e=>{if(n===`all`)return!0;let t=e.experienceId!==-1;return n===`professional`?t:n===`personal`?!t:!0});return(0,d.jsxs)(O,{children:[(0,d.jsxs)(A,{children:[(0,d.jsxs)(j,{children:[(0,d.jsx)(M,{children:`Projects`}),(0,d.jsx)(N,{children:`Browse my portfolio projects`})]}),(0,d.jsxs)(P,{children:[(0,d.jsx)(F,{active:n===`all`,onClick:()=>r(`all`),children:`Tous`}),(0,d.jsx)(F,{active:n===`professional`,onClick:()=>r(`professional`),children:`Professionnels`}),(0,d.jsx)(F,{active:n===`personal`,onClick:()=>r(`personal`),children:`Personnels`})]})]}),(0,d.jsx)(k,{children:i.map(e=>(0,d.jsx)(D,{project:e},e.id))})]})};export{I as default};
//# sourceMappingURL=Projects-Ba0ElXWI.js.map