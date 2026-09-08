import React from "react";

export function Select({options=[],placeholder,invalid=false,className="",...rest}){
  return <select className={["aitc-select",className].filter(Boolean).join(" ")} aria-invalid={invalid||undefined} defaultValue={placeholder?"":undefined} {...rest}>
    {placeholder?<option value="" disabled>{placeholder}</option>:null}
    {options.map((o)=>{const v=typeof o==="string"?o:o.value;const l=typeof o==="string"?o:o.label;
      return <option key={v} value={v}>{l}</option>;})}
  </select>;
}
