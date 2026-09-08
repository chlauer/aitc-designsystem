import React from "react";

export function IconButton({icon,label,variant="ghost",size="md",disabled=false,className="",...rest}){
  return <button type="button" aria-label={label} title={label} disabled={disabled}
    className={["aitc-iconbtn","aitc-iconbtn--"+variant,"aitc-iconbtn--"+size,className].filter(Boolean).join(" ")} {...rest}>{icon}</button>;
}
