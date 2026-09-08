import React from "react";

export function Checkbox({label,description,disabled=false,className="",...rest}){
  return <label className={["aitc-choice",className].filter(Boolean).join(" ")} data-disabled={disabled}>
    <input type="checkbox" disabled={disabled} {...rest} />
    <span className="aitc-choice__box">
      <svg className="aitc-choice__mark" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"><path d="M1.5 6.2 4.4 9 10.5 2.6" /></svg>
    </span>
    <span className="aitc-choice__text">{label}{description?<span className="aitc-choice__desc">{description}</span>:null}</span>
  </label>;
}
