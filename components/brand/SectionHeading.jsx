import React from "react";
import { Eyebrow } from "./Eyebrow.jsx";

export function SectionHeading({eyebrow,title,lead,size="md",align="start",eyebrowTone="brand",className="",...rest}){
  const sizeCls=size==="lg"?"aitc-heading__title--lg":size==="sm"?"aitc-heading__title--sm":"";
  return <header className={["aitc-heading",align==="center"?"aitc-heading--center":"",className].filter(Boolean).join(" ")} {...rest}>
    {eyebrow?<Eyebrow tone={eyebrowTone}>{eyebrow}</Eyebrow>:null}
    <h2 className={["aitc-heading__title",sizeCls].filter(Boolean).join(" ")}>{title}</h2>
    {lead?<p className="aitc-heading__lead">{lead}</p>:null}
  </header>;
}
