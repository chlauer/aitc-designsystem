import React from "react";

export function Button({variant="primary",size="md",block=false,iconStart,iconEnd,href,disabled=false,children,className="",...rest}){
  const cls=["aitc-btn","aitc-btn--"+variant,"aitc-btn--"+size,block?"aitc-btn--block":"",className].filter(Boolean).join(" ");
  const inner=[iconStart?<span className="aitc-btn__icon" key="s">{iconStart}</span>:null,children,iconEnd?<span className="aitc-btn__icon" key="e">{iconEnd}</span>:null];
  if(href) return <a className={cls} href={disabled?undefined:href} aria-disabled={disabled||undefined} {...rest}>{inner}</a>;
  return <button className={cls} type={rest.type||"button"} disabled={disabled} {...rest}>{inner}</button>;
}
