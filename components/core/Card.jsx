import React from "react";

export function Card({variant="default",interactive=false,rule=false,as="div",children,className="",...rest}){
  const Tag=as;
  return <Tag className={["aitc-card","aitc-card--"+variant,interactive?"aitc-card--interactive":"",className].filter(Boolean).join(" ")} {...rest}>
    {rule?<span className="aitc-card__rule" />:null}
    {children}
  </Tag>;
}
