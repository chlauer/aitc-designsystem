const {Button,SectionHeading,StatFigure,PullQuote,TopicTile,ExpertCard,TestimonialCard,DotMotif,Eyebrow,Badge}=window.AITransformationCollectiveDesignSystem_5cdd67;

const TOPICS=[
  {index:"01",title:"Strategie & Roadmap",icon:"Compass",description:"Reifegrad ermitteln, Anwendungsfälle priorisieren, Roadmap verabschieden."},
  {index:"02",title:"Daten & Plattform",icon:"Database",description:"Das Fundament, das Anwendungsfälle im Betrieb trägt."},
  {index:"03",title:"Befähigung",icon:"Users",description:"Teams, die nach dem Projekt selbst weiterarbeiten."},
  {index:"04",title:"Governance & Recht",icon:"Scale",description:"EU AI Act, Risikoklassen, Freigabeprozesse ohne Stillstand."},
  {index:"05",title:"Prozess & Automatisierung",icon:"Workflow",description:"Wo Automatisierung Arbeit spart und wo sie sie verlagert."},
  {index:"06",title:"Kultur & Führung",icon:"MessagesSquare",description:"Führungskräfte, die Entscheidungen mit KI treffen können."}
];

const EXPERTS=[
  {name:"Anna Weiß",role:"Datenstrategie",bio:"Baut Datenplattformen, die Fachbereiche selbst nutzen.",tags:["Data Mesh","Governance"]},
  {name:"Jonas Feld",role:"Change & Befähigung",bio:"Bringt Pilotprojekte in den Regelbetrieb.",tags:["Enablement"]},
  {name:"Rana Sahin",role:"Recht & Compliance",bio:"Übersetzt den EU AI Act in Freigabeprozesse.",tags:["EU AI Act"]},
  {name:"Tobias Krenz",role:"MLOps",bio:"Betreibt Modelle, die nach dem Launch nicht verwaisen.",tags:["Monitoring","Cloud"]}
];

function Hero({go}){
  return <section style={{position:"relative",overflow:"hidden",background:"var(--surface-brand)",color:"#fff",paddingTop:"var(--space-24)",paddingBottom:"var(--space-24)"}}>
    <DotMotif tone="white" size={720} opacity={.28} position="right" assetBase={ASSETS}/>
    <div className="wrap" style={{position:"relative"}}>
      <Eyebrow tone="invert">Expertennetzwerk für KI-Transformation</Eyebrow>
      <h1 style={{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"var(--text-display-1)",fontWeight:500,lineHeight:"var(--leading-display)",letterSpacing:"var(--tracking-display)",margin:"var(--space-6) 0 var(--space-6)",maxWidth:"18ch"}}>
        Erst die Organisation, dann das Modell
      </h1>
      <p style={{fontSize:"var(--text-lead)",lineHeight:"var(--leading-snug)",color:"rgba(255,255,255,.86)",maxWidth:"52ch",margin:"0 0 var(--space-10)"}}>
        Wir sind vierzig Fachleute, die KI-Vorhaben dort ansetzen, wo sie scheitern oder gelingen: in Prozessen, Daten und Entscheidungen. Sie sprechen mit einer Ansprechperson und arbeiten mit dem Team, das zu Ihrer Frage passt.
      </p>
      <div style={{display:"flex",gap:"var(--space-4)"}}>
        <Button variant="inverse" size="lg" onClick={()=>go("contact")} iconEnd={<Icon name="ArrowRight" size={18}/>}>Gespräch vereinbaren</Button>
        <Button variant="inverse" size="lg" onClick={()=>go("network")} style={{background:"transparent",color:"#fff",borderColor:"rgba(255,255,255,.5)"}}>Netzwerk ansehen</Button>
      </div>
    </div>
  </section>;
}

function HomeScreen({go}){
  return <main>
    <Hero go={go}/>

    <section className="sect"><div className="wrap">
      <div className="grid4">
        <StatFigure ruled value="40" unit="+" label="Expert:innen im Netzwerk"/>
        <StatFigure ruled value="6" unit="Wo." label="Vom Assessment zur verabschiedeten Roadmap"/>
        <StatFigure ruled value="3" label="Köpfe pro Projektteam — nicht mehr"/>
        <StatFigure ruled value="0" label="Lizenzverkauf, keine Toolagenda"/>
      </div>
    </div></section>

    <section className="sect" style={{background:"var(--surface-sand)"}}><div className="wrap">
      <SectionHeading eyebrow="Themenfelder" title="Sechs Felder, in denen wir arbeiten"
        lead="Jedes Feld hat im Netzwerk mindestens vier Fachleute. Projekte kombinieren zwei bis drei Felder."/>
      <div className="grid3" style={{marginTop:"var(--space-12)"}}>
        {TOPICS.map((t,i)=><TopicTile key={t.index} {...t} icon={<Icon name={t.icon} size={28}/>}
          variant={i===2?"ink":"default"} href="#" onClick={(e)=>{e.preventDefault();go("topics");}}/>)}
      </div>
    </div></section>

    <section style={{position:"relative",overflow:"hidden",background:"var(--surface-ink)",padding:"var(--section-y) 0"}}>
      <DotMotif tone="white" size={560} opacity={.22} position="left" assetBase={ASSETS}/>
      <div className="wrap" style={{position:"relative",maxWidth:"var(--container-narrow)"}}>
        <PullQuote tone="invert" quote="KI-Transformation ist eine Organisationsfrage. Die Technologie ist der einfachere Teil."
          author="Dr. Anna Weiß" role="Sprecherin des Kollektivs"/>
      </div>
    </section>

    <section className="sect"><div className="wrap">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"var(--space-8)"}}>
        <SectionHeading eyebrow="Das Netzwerk" title="Expertise, die zusammenarbeitet"
          lead="Keine Beratungspyramide: Sie arbeiten mit den Menschen, die auch im Angebot stehen."/>
        <Button variant="ghost" onClick={()=>go("network")} iconEnd={<Icon name="ArrowRight" size={16}/>}>Alle Expert:innen</Button>
      </div>
      <div className="grid4" style={{marginTop:"var(--space-12)"}}>
        {EXPERTS.map(e=><ExpertCard key={e.name} {...e} onClick={()=>go("network")}/>)}
      </div>
    </div></section>

    <section className="sect" style={{background:"var(--surface-sand)"}}><div className="wrap">
      <SectionHeading eyebrow="Referenzen" title="Was Auftraggeber:innen berichten" size="sm"/>
      <div className="grid3" style={{marginTop:"var(--space-10)"}}>
        <TestimonialCard quote="Nach acht Wochen hatten wir eine Roadmap, die intern getragen wird — nicht eine, die im Laufwerk liegt."
          author="Markus Lindner" role="CDO" company="Nordwerk AG"/>
        <TestimonialCard quote="Das Team hat uns widersprochen, wo es nötig war. Das war der Unterschied zu vorherigen Projekten."
          author="Sabine Ortmann" role="Bereichsleitung Operations" company="Hansa Logistik"/>
        <TestimonialCard quote="Zwei Anwendungsfälle laufen im Betrieb, vier haben wir bewusst verworfen. Beides war wertvoll."
          author="Dr. Peter Salm" role="Geschäftsführung" company="Rheinwerk Industrie"/>
      </div>
    </div></section>

    <section className="sect"><div className="wrap" style={{display:"flex",gap:"var(--space-12)",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
      <div>
        <Badge tone="brand">Kostenlos</Badge>
        <h2 style={{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"var(--text-display-3)",fontWeight:500,lineHeight:1,letterSpacing:"var(--tracking-display)",margin:"var(--space-4) 0 var(--space-3)"}}>
          45 Minuten, eine ehrliche Einordnung
        </h2>
        <p style={{color:"var(--text-2)",margin:0,maxWidth:"48ch"}}>Sie schildern das Vorhaben, wir sagen, ob und wie wir helfen können — auch wenn die Antwort „nicht wir“ lautet.</p>
      </div>
      <Button size="lg" onClick={()=>go("contact")} iconEnd={<Icon name="ArrowRight" size={18}/>}>Termin anfragen</Button>
    </div></section>
  </main>;
}

Object.assign(window,{HomeScreen,TOPICS,EXPERTS});
