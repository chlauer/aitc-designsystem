import React from "react";

export function Radio({label,description,disabled=false,className="",...rest}){
  return <label className={["aitc-choice",className].filter(Boolean).join(" ")} data-disabled={disabled}>
    <input type="radio" disabled={disabled} {...rest} />
    <span className="aitc-choice__box aitc-choice__box--radio"><span className="aitc-choice__dot" /></span>
    <span className="aitc-choice__text">{label}{description?<span className="aitc-choice__desc">{description}</span>:null}</span>
  </label>;
}
