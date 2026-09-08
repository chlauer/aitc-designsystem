import React from "react";

export function Tag({children,selected=false,onClick,onRemove,className="",...rest}){
  const interactive=Boolean(onClick);
  return <span className={["aitc-tag",interactive?"aitc-tag--interactive":"",selected?"aitc-tag--selected":"",className].filter(Boolean).join(" ")}
    onClick={onClick} role={interactive?"button":undefined} tabIndex={interactive?0:undefined} {...rest}>
    {children}
    {onRemove?<button type="button" className="aitc-tag__remove" aria-label="Entfernen" onClick={(e)=>{e.stopPropagation();onRemove(e);}}>×</button>:null}
  </span>;
}
