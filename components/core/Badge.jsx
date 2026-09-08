import React from "react";

export function Badge({tone="neutral",outline=false,icon,children,className="",...rest}){
  return <span className={["aitc-badge","aitc-badge--"+tone,outline?"aitc-badge--outline":"",className].filter(Boolean).join(" ")} {...rest}>
    {icon}{children}
  </span>;
}
