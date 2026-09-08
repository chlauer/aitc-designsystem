import React from "react";

export function DotMotif({size=420,opacity=0.5,position="right",tone="white",assetBase="assets",style={},className="",...rest}){
  const pos=position==="right"?{right:"-8%",top:"-10%"}:position==="left"?{left:"-12%",bottom:"-15%"}:{left:"50%",top:"50%",transform:"translate(-50%,-50%)"};
  return <span aria-hidden="true" className={["aitc-motif",className].filter(Boolean).join(" ")}
    style={{width:size,height:size,opacity,backgroundImage:"url("+assetBase+"/motif-dots-"+tone+".png)",...pos,...style}} {...rest} />;
}
