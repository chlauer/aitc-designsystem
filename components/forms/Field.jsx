import React from "react";

export function Field({label,hint,error,required=false,htmlFor,children,className="",...rest}){
  return <div className={["aitc-field",className].filter(Boolean).join(" ")} {...rest}>
    {label?<label className="aitc-field__label" htmlFor={htmlFor}>{label}{required?<span className="aitc-field__req">*</span>:null}</label>:null}
    {children}
    {error?<span className="aitc-field__error">{error}</span>:hint?<span className="aitc-field__hint">{hint}</span>:null}
  </div>;
}
