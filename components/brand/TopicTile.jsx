import React from "react";

export function TopicTile({title,description,index,icon,href,variant="default",cta="Mehr erfahren →",onClick,className="",...rest}){
  const Tag=href?"a":"div";
  return <Tag className={["aitc-topic","aitc-topic--"+variant,!href&&onClick?"aitc-topic--interactive":"",className].filter(Boolean).join(" ")}
    href={href} onClick={onClick} {...rest}>
    {index?<span className="aitc-topic__num">{index}</span>:null}
    {icon?<span className="aitc-topic__icon">{icon}</span>:null}
    <h3 className="aitc-topic__title">{title}</h3>
    {description?<p className="aitc-topic__desc">{description}</p>:null}
    {cta?<span className="aitc-topic__arrow">{cta}</span>:null}
  </Tag>;
}
