const {NavBar,Button,LogoLockup,Eyebrow}=window.AITransformationCollectiveDesignSystem_5cdd67;
const Icon=window.AITCIcon;
const ASSETS="../../assets";

const NAV=[{label:"Themenfelder",href:"topics"},{label:"Netzwerk",href:"network"},{label:"Wissen",href:"insight"},{label:"Kontakt",href:"contact"}];

function SiteHeader({route,go}){
  return <NavBar
    brand={<LogoLockup size={36} showWordmark assetBase={ASSETS} href="#" onClick={(e)=>{e.preventDefault();go("home");}}/>}
    activeHref={route}
    links={NAV.map(l=>({...l,onClick:(e)=>{e.preventDefault();go(l.href);}}))}
    actions={<Button size="sm" onClick={()=>go("contact")}>Gespräch vereinbaren</Button>}/>;
}

function SiteFooter({go}){
  return <footer className="foot"><div className="wrap">
    <div style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"var(--space-8)"}}>
      <div>
        <LogoLockup tone="white" size={40} showWordmark assetBase={ASSETS}/>
        <p style={{color:"rgba(255,255,255,.66)",fontSize:"var(--text-body-sm)",marginTop:"var(--space-5)",maxWidth:"32ch"}}>
          Ein Expertennetzwerk für KI-Transformation. Sitz in Hamburg, Arbeit im gesamten deutschsprachigen Raum.
        </p>
      </div>
      {[["Themenfelder",["Strategie & Roadmap","Daten & Plattform","Befähigung","Governance"]],
        ["Netzwerk",["Expert:innen","Mitmachen","Partner"]],
        ["Wissen",["Whitepaper","Impulse","Podcast"]]].map(([t,items])=>
        <div key={t}>
          <Eyebrow tone="invert" rule={false}>{t}</Eyebrow>
          <div style={{display:"flex",flexDirection:"column",gap:"var(--space-2)",marginTop:"var(--space-4)"}}>
            {items.map(i=><a key={i} href="#" onClick={(e)=>{e.preventDefault();go("network");}}>{i}</a>)}
          </div>
        </div>)}
    </div>
    <div style={{display:"flex",justifyContent:"space-between",marginTop:"var(--space-16)",paddingTop:"var(--space-5)",borderTop:"1px solid rgba(255,255,255,.12)",fontFamily:"var(--font-mono)",fontSize:"var(--text-label)",letterSpacing:"var(--tracking-wide)",color:"rgba(255,255,255,.5)",textTransform:"uppercase"}}>
      <span>© 2026 AI Transformation Collective</span>
      <span style={{display:"flex",gap:"var(--space-6)"}}><a href="#">Impressum</a><a href="#">Datenschutz</a><a href="#">LinkedIn</a></span>
    </div>
  </div></footer>;
}

Object.assign(window,{SiteHeader,SiteFooter,NAV,ASSETS,Icon});
