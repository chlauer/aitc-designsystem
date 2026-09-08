import React from "react";

export function PullQuote({quote,author,role,size="lg",tone="default",className="",...rest}){
  return <figure className={["aitc-quote",tone==="invert"?"aitc-quote--invert":"",className].filter(Boolean).join(" ")} style={{margin:0}} {...rest}>
    <blockquote className={["aitc-quote__text",size==="sm"?"aitc-quote__text--sm":""].filter(Boolean).join(" ")}>{quote}</blockquote>
    {author?<figcaption className="aitc-quote__attr"><strong>{author}</strong>{role?<span>{role}</span>:null}</figcaption>:null}
  </figure>;
}
