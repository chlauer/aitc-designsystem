import React from "react";

export function Textarea({invalid=false,rows=4,className="",...rest}){
  return <textarea rows={rows} aria-invalid={invalid||undefined} className={["aitc-textarea",className].filter(Boolean).join(" ")} {...rest} />;
}
