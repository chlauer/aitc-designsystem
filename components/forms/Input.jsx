import React from "react";

export function Input({size="md",invalid=false,iconStart,iconEnd,className="",...rest}){
  const cls=["aitc-input","aitc-input--"+size,iconStart?"aitc-input--has-start":"",iconEnd?"aitc-input--has-end":"",className].filter(Boolean).join(" ");
  const input=<input className={cls} aria-invalid={invalid||undefined} {...rest} />;
  if(!iconStart&&!iconEnd) return input;
  return <span className="aitc-inputwrap">
    {iconStart?<span className="aitc-inputwrap__affix aitc-inputwrap__affix--start">{iconStart}</span>:null}
    {input}
    {iconEnd?<span className="aitc-inputwrap__affix aitc-inputwrap__affix--end">{iconEnd}</span>:null}
  </span>;
}
