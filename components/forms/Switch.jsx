import React from "react";

export function Switch({label,disabled=false,className="",...rest}){
  return <label className={["aitc-switch",className].filter(Boolean).join(" ")} data-disabled={disabled}>
    <input type="checkbox" role="switch" disabled={disabled} {...rest} />
    <span className="aitc-switch__track"><span className="aitc-switch__knob" /></span>
    {label?<span>{label}</span>:null}
  </label>;
}
