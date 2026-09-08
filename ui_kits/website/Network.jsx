const {SectionHeading,ExpertCard,Tabs,Input,Switch,Tag,Badge,Card,Button,Dialog,Eyebrow}=window.AITransformationCollectiveDesignSystem_5cdd67;

const ALL=[
  {name:"Anna Weiß",role:"Datenstrategie",field:"Daten",bio:"Baut Datenplattformen, die Fachbereiche selbst nutzen.",tags:["Data Mesh","Governance"],city:"Hamburg"},
  {name:"Jonas Feld",role:"Change & Befähigung",field:"Befähigung",bio:"Bringt Pilotprojekte in den Regelbetrieb.",tags:["Enablement","Workshops"],city:"Leipzig"},
  {name:"Rana Sahin",role:"Recht & Compliance",field:"Governance",bio:"Übersetzt den EU AI Act in Freigabeprozesse.",tags:["EU AI Act","DSGVO"],city:"Berlin"},
  {name:"Tobias Krenz",role:"MLOps",field:"Daten",bio:"Betreibt Modelle, die nach dem Launch nicht verwaisen.",tags:["Monitoring","Cloud"],city:"München"},
  {name:"Miriam Dahl",role:"Strategie",field:"Strategie",bio:"Priorisiert Anwendungsfälle nach Wirkung, nicht nach Neuheit.",tags:["Portfolio","Business Case"],city:"Wien"},
  {name:"Ellen Ruck",role:"Prozessanalyse",field:"Strategie",bio:"Findet die Stellen, an denen Automatisierung Arbeit wirklich spart.",tags:["Process Mining"],city:"Köln"},
  {name:"Said Barzani",role:"Produkt & Interaktion",field:"Befähigung",bio:"Gestaltet Werkzeuge, die Mitarbeitende freiwillig nutzen.",tags:["UX","Adoption"],city:"Zürich"},
  {name:"Katrin Loos",role:"Datenschutz",field:"Governance",bio:"Verhandelt zwischen Datenschutz und Machbarkeit.",tags:["DSGVO","Auditierung"],city:"Bremen"}
];
const FIELDS=["Alle","Strategie","Daten","Befähigung","Governance"];

function NetworkScreen(){
  const [field,setField]=React.useState("Alle");
  const [q,setQ]=React.useState("");
  const [onlyFree,setOnlyFree]=React.useState(false);
  const [detail,setDetail]=React.useState(null);
  const list=ALL.filter(e=>(field==="Alle"||e.field===field)&&(q===""||(e.name+e.role+e.tags.join()).toLowerCase().includes(q.toLowerCase())))
                .filter((e,i)=>!onlyFree||i%2===0);
  return <main>
    <section style={{background:"var(--surface-sand)",paddingTop:"var(--space-16)",paddingBottom:"var(--space-12)"}}><div className="wrap">
      <SectionHeading eyebrow="Netzwerk" title="Vierzig Köpfe, ein Zugang"
        lead="Sie können jede Person direkt anfragen. Wer nicht passt, sagt das — und nennt jemanden, der passt."/>
    </div></section>

    <section style={{position:"sticky",top:"var(--header-height)",zIndex:20,background:"color-mix(in oklab,var(--surface-page) 92%,transparent)",backdropFilter:"blur(10px)",borderBottom:"1px solid var(--border-1)"}}>
      <div className="wrap" style={{display:"flex",alignItems:"center",flexWrap:"wrap",gap:"var(--space-4) var(--space-6)",padding:"var(--space-4) var(--gutter)"}}>
        <div style={{flex:"0 0 280px",minWidth:220}}><Input placeholder="Name, Rolle, Stichwort" value={q} onChange={(e)=>setQ(e.target.value)} iconStart={<Icon name="Search" size={18}/>}/></div>
        <Tabs variant="pills" items={FIELDS} value={field} onChange={setField}/>
        <div style={{marginLeft:"auto"}}><Switch label="Nur kurzfristig verfügbar" checked={onlyFree} onChange={(e)=>setOnlyFree(e.target.checked)}/></div>
      </div>
    </section>

    <section className="sect" style={{paddingTop:"var(--space-10)"}}><div className="wrap">
      <div style={{display:"flex",alignItems:"baseline",gap:"var(--space-3)",marginBottom:"var(--space-8)"}}>
        <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--text-label)",letterSpacing:"var(--tracking-label)",textTransform:"uppercase",color:"var(--text-3)"}}>{list.length} Personen</span>
        {field!=="Alle"?<Tag onRemove={()=>setField("Alle")}>{field}</Tag>:null}
      </div>
      <div className="grid4">
        {list.map(e=><ExpertCard key={e.name} {...e} onClick={()=>setDetail(e)}/>)}
      </div>
      {list.length===0?<Card variant="sand" style={{alignItems:"flex-start"}}><strong>Niemand gefunden.</strong><p style={{margin:"var(--space-2) 0 0",color:"var(--text-2)"}}>Schreiben Sie uns Ihre Frage — wir vermitteln.</p></Card>:null}
    </div></section>

    <Dialog open={Boolean(detail)} wide title={detail&&detail.name} onClose={()=>setDetail(null)}
      footer={<><Button variant="secondary" onClick={()=>setDetail(null)}>Schließen</Button><Button iconEnd={<Icon name="ArrowRight" size={16}/>}>Anfrage senden</Button></>}>
      {detail?<div style={{display:"grid",gridTemplateColumns:"160px 1fr",gap:"var(--space-6)"}}>
        <div style={{aspectRatio:"4/5",background:"var(--surface-sand-deep)",display:"grid",placeItems:"center",fontFamily:"var(--font-display)",fontSize:32,color:"var(--sand-500)"}}>
          {detail.name.split(" ").map(w=>w[0]).join("")}
        </div>
        <div>
          <Eyebrow>{detail.role}</Eyebrow>
          <p style={{marginTop:"var(--space-4)"}}>{detail.bio}</p>
          <p style={{color:"var(--text-2)",fontSize:"var(--text-body-sm)"}}>Standort {detail.city} · Themenfeld {detail.field}</p>
          <div style={{display:"flex",gap:"var(--space-2)",flexWrap:"wrap",marginTop:"var(--space-4)"}}>{detail.tags.map(t=><Tag key={t}>{t}</Tag>)}</div>
        </div>
      </div>:null}
    </Dialog>
  </main>;
}
Object.assign(window,{NetworkScreen});
