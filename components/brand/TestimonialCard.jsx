import React from "react";

function initials(name=""){return name.split(" ").filter(Boolean).slice(0,2).map(w=>w[0]).join("");}

export function TestimonialCard({quote,author,role,company,avatar,className="",...rest}){
  return <figure className={["aitc-testimonial",className].filter(Boolean).join(" ")} style={{margin:0}} {...rest}>
    <blockquote className="aitc-testimonial__text">{quote}</blockquote>
    <figcaption className="aitc-testimonial__foot">
      {avatar?<img className="aitc-testimonial__avatar" src={avatar} alt={author} />:<span className="aitc-testimonial__avatar">{initials(author)}</span>}
      <span className="aitc-testimonial__who"><strong>{author}</strong>{[role,company].filter(Boolean).join(", ")}</span>
    </figcaption>
  </figure>;
}
