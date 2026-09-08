/* React wrapper around the Lucide UMD build (CDN). Load lucide.js and React before this file. */
(function(){
  function AITCIcon(props){
    var name=props.name,size=props.size||20,strokeWidth=props.strokeWidth||1.6;
    var ref=React.useRef(null);
    React.useEffect(function(){
      var L=window.lucide;if(!L||!ref.current)return;
      var node=(L.icons&&L.icons[name])||L[name];if(!node)return;
      ref.current.innerHTML="";
      var el=L.createElement(node);
      el.setAttribute("width",size);el.setAttribute("height",size);el.setAttribute("stroke-width",strokeWidth);
      ref.current.appendChild(el);
    },[name,size,strokeWidth]);
    return React.createElement("span",{ref:ref,className:props.className,style:Object.assign({display:"inline-flex",lineHeight:0,color:"inherit"},props.style||{})});
  }
  window.AITCIcon=AITCIcon;
})();
