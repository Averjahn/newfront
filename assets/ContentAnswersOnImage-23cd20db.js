import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import{r as u,f as $,o,c as i,a as z,F as m,i as p,j as _,b as S,k as I}from"./index-d438237c.js";const k={class:"answesOnImage-wrapper"},A=["src"],D=["onClick"],L=["onClick"],O={__name:"ContentAnswersOnImage",props:["componentData","testStyle"],emits:["switchAnswer"],setup(d,{emit:w}){const v=w,r=d,h=e=>{v("switchAnswer",e)},n=(e,s)=>e/105*s,t=u({width:0,height:0}),f=u(null),l=u(null),x=(e,s)=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${n(e.size,t.value.width)}px`,height:`${n(e.size,t.value.width)}px`,background:s?"green":e.color,hover:{width:`${n(e.size,t.value.width)*1.05}px`,height:`${n(e.size,t.value.width)*1.05}px`}}),y=e=>({position:"absolute",top:`${e.y}%`,left:`${e.x}%`,transform:"translate(-50%, -50%)",width:`${n(e.hitboxSize,t.value.width)}px`,height:`${n(e.hitboxSize,t.value.width)}px`,backgroundColor:`${e.color}55`,borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",cursor:"pointer"}),g=()=>{I(()=>{if(l.value&&l.value.complete){const{width:e,height:s}=l.value.getBoundingClientRect();t.value.width=e,t.value.height=s}else console.log("Изображение еще не загружено или элемент не найден")})};return $(()=>{g()}),(e,s)=>(o(),i("div",k,[d.componentData.isAnswersOnImage?(o(),i("div",{key:0,class:"image-container",ref_key:"imageContainer",ref:f},[z("img",{src:r.componentData.imagesData.imagesList[0].imageURL,class:"content-image",ref_key:"imageElement",ref:l,onLoad:g},null,40,A),(o(!0),i(m,null,p(r.componentData.answersList,(c,a)=>(o(),i("div",{class:"marker",key:a,style:_(x(c.style,c.isChecked)),onClick:b=>h(a)},null,12,D))),128)),(o(!0),i(m,null,p(r.componentData.answersList,(c,a)=>(o(),i("div",{class:"hitbox",key:a,style:_(y(c.style)),onClick:b=>h(a)},null,12,L))),128))],512)):S("",!0)]))}},R=C(O,[["__scopeId","data-v-8bfac04b"]]);export{R as default};
