import React from "react";

/* The only supplied asset is the full square logo (swirl + baked-in wordmark), which is
   illegible below ~64px. So: with showWordmark we typeset the wordmark and show no mark;
   without it we show the full logo asset, which already carries the wordmark. */
export function LogoLockup({src,tone="teal",size=40,showWordmark=false,href,assetBase="assets",className="",...rest}){
  const url=src || assetBase+"/logo-aitc-"+(tone==="white"?"white":tone==="square"?"square":"teal")+".png";
  const Tag=href?"a":"span";
  const color=tone==="white"?"#fff":"var(--text-1)";
  if(showWordmark){
    return <Tag className={["aitc-lockup",className].filter(Boolean).join(" ")} href={href} style={{height:size}} {...rest}>
      <span className="aitc-lockup__text" style={{color}}>
        <span className="aitc-lockup__ai" style={{fontSize:size*0.62,marginBottom:size*0.08}}>AI</span>
        <span className="aitc-lockup__sub" style={{fontSize:size*0.24}}>Transformation Collective</span>
      </span>
    </Tag>;
  }
  return <Tag className={["aitc-lockup",className].filter(Boolean).join(" ")} href={href} style={{height:size}} {...rest}>
    <span className="aitc-lockup__mark" style={{height:size,width:size,background:tone==="square"?"var(--surface-brand)":"transparent"}}>
      <img src={url} alt="AI Transformation Collective" style={{height:size,width:size,objectFit:"contain"}} />
    </span>
  </Tag>;
}
