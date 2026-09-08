const {Badge,Eyebrow,PullQuote,StatFigure,Card,Button,ExpertCard,SectionHeading,Tag}=window.AITransformationCollectiveDesignSystem_5cdd67;

function InsightScreen({go}){
  return <main style={{background:"var(--surface-sand)"}}>
    <article style={{paddingTop:"var(--space-16)",paddingBottom:"var(--section-y)"}}>
      <div className="wrap" style={{maxWidth:"var(--container-narrow)"}}>
        <div style={{display:"flex",gap:"var(--space-3)",alignItems:"center",marginBottom:"var(--space-6)"}}>
          <Badge tone="brand">Whitepaper</Badge><Badge outline>14 Min Lesezeit</Badge>
          <span style={{fontFamily:"var(--font-mono)",fontSize:"var(--text-label)",letterSpacing:"var(--tracking-wide)",color:"var(--text-3)"}}>MÄRZ 2026</span>
        </div>
        <h1 style={{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"var(--text-display-3)",fontWeight:500,lineHeight:"var(--leading-display)",letterSpacing:"var(--tracking-display)",margin:"0 0 var(--space-6)"}}>
          Warum KI-Pilotprojekte den Betrieb nie erreichen
        </h1>
        <p style={{fontSize:"var(--text-lead)",lineHeight:"var(--leading-snug)",color:"var(--text-2)",margin:"0 0 var(--space-10)"}}>
          Eine Auswertung von 34 Vorhaben aus dem Mittelstand. Der häufigste Grund für den Abbruch ist nicht die Modellqualität, sondern eine offene Zuständigkeitsfrage.
        </p>

        <div style={{display:"flex",alignItems:"center",gap:"var(--space-4)",padding:"var(--space-4) 0",borderTop:"1px solid var(--sand-300)",borderBottom:"1px solid var(--sand-300)",marginBottom:"var(--space-10)"}}>
          <span style={{width:44,height:44,borderRadius:"50%",background:"var(--sand-300)",display:"grid",placeItems:"center",fontFamily:"var(--font-display)",color:"var(--sand-500)"}}>AW</span>
          <span style={{fontSize:"var(--text-body-sm)",color:"var(--text-2)"}}><strong style={{display:"block",color:"var(--text-1)"}}>Dr. Anna Weiß</strong>Datenstrategie · AI Transformation Collective</span>
          <span style={{marginLeft:"auto",display:"flex",gap:"var(--space-2)"}}><Button variant="secondary" size="sm" iconStart={<Icon name="Download" size={15}/>}>PDF laden</Button></span>
        </div>

        <p>34 Vorhaben, 19 Organisationen, ein wiederkehrendes Muster: Der Pilot funktioniert technisch, und trotzdem geht er nicht in Betrieb. In 21 von 34 Fällen war beim Übergang niemand benannt, der die laufenden Kosten, die Modellpflege und die fachliche Verantwortung übernimmt.</p>
        <h2 style={{marginTop:"var(--space-10)"}}>Der Übergang ist die Projektphase, die niemand plant</h2>
        <p>Projektpläne enden mit dem Abnahmetermin. Was danach kommt — Monitoring, Nachtraining, Eskalationswege — steht in keinem Angebot, weil es keine Projektleistung ist, sondern Linienarbeit. Genau dort bricht die Kette.</p>
        <div style={{margin:"var(--space-12) 0",padding:"var(--space-8) 0",borderTop:"var(--rule-width) solid var(--surface-brand)",borderBottom:"1px solid var(--sand-300)"}}>
          <PullQuote size="sm" quote="Die Frage ist nicht, ob das Modell gut ist. Die Frage ist, wer montags um neun draufschaut."/>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"var(--space-6)",margin:"var(--space-10) 0"}}>
          <StatFigure ruled value="21" unit="/34" label="Vorhaben ohne benannte Betriebsverantwortung"/>
          <StatFigure ruled value="7" unit="Mon." label="Median bis zum Abbruch nach Abnahme"/>
          <StatFigure ruled value="4" label="Rollen, die vor dem Start geklärt sein müssen"/>
        </div>
        <h2>Vier Rollen, die vor dem Start feststehen müssen</h2>
        <p>Fachliche Verantwortung, technischer Betrieb, Datenqualität, Freigabe. Sind diese vier Rollen vor dem ersten Sprint namentlich besetzt, steigt die Betriebsquote in unserer Auswertung von 38 auf 71 Prozent.</p>
        <div style={{display:"flex",gap:"var(--space-2)",flexWrap:"wrap",margin:"var(--space-10) 0"}}>
          {["Betriebsübergang","Governance","MLOps","Mittelstand"].map(t=><Tag key={t} onClick={()=>{}}>{t}</Tag>)}
        </div>
      </div>

      <div className="wrap" style={{marginTop:"var(--space-16)"}}>
        <SectionHeading eyebrow="Weiterlesen" title="Aus dem gleichen Themenfeld" size="sm"/>
        <div className="grid3" style={{marginTop:"var(--space-8)"}}>
          {[["Impuls","Der EU AI Act als Freigabeprozess","Was Risikoklassen für Ihre bestehende Governance bedeuten."],
            ["Whitepaper","Reifegrad ohne Reifegradmodell","Sechs Interviews sagen mehr als ein 40-seitiger Fragebogen."],
            ["Podcast","Folge 12: Wer trägt das Modell?","Gespräch über Betriebsverantwortung mit Tobias Krenz."]].map(([k,t,d])=>
            <Card key={t} interactive rule onClick={()=>go("insight")}>
              <Badge tone="sand" style={{alignSelf:"flex-start",marginBottom:"var(--space-3)"}}>{k}</Badge>
              <h3 style={{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"var(--text-h4)",fontWeight:500,margin:"0 0 var(--space-2)"}}>{t}</h3>
              <p style={{fontSize:"var(--text-body-sm)",color:"var(--text-2)",margin:0}}>{d}</p>
            </Card>)}
        </div>
      </div>
    </article>
  </main>;
}
Object.assign(window,{InsightScreen});
