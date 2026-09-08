import React from "react";

export function StatFigure({value,unit,label,tone="default",ruled=false,className="",...rest}){
  return <div className={["aitc-stat",tone!=="default"?"aitc-stat--"+tone:"",ruled?"aitc-stat--ruled":"",className].filter(Boolean).join(" ")} {...rest}>
    <span className="aitc-stat__value">{value}{unit?<span className="aitc-stat__unit">{unit}</span>:null}</span>
    {label?<span className="aitc-stat__label">{label}</span>:null}
  </div>;
}
