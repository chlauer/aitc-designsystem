const {SectionHeading,Field,Input,Textarea,Select,Checkbox,Radio,Button,Card,Toast,Badge,Eyebrow,DotMotif}=window.AITransformationCollectiveDesignSystem_5cdd67;

function ContactScreen(){
  const [sent,setSent]=React.useState(false);
  const [err,setErr]=React.useState("");
  const [mail,setMail]=React.useState("");
  const submit=(e)=>{e.preventDefault();
    if(!mail.includes("@")){setErr("Bitte eine gültige E-Mail-Adresse angeben.");return;}
    setErr("");setSent(true);};
  return <main>
    <section style={{position:"relative",overflow:"hidden",background:"var(--surface-ink)",color:"#fff",padding:"var(--space-16) 0"}}>
      <DotMotif tone="white" size={480} opacity={.2} position="right" assetBase={ASSETS}/>
      <div className="wrap" style={{position:"relative"}}>
        <SectionHeading eyebrowTone="invert" eyebrow="Kontakt" title="45 Minuten, eine ehrliche Einordnung"
          lead="Sie schildern das Vorhaben, wir sagen, ob und wie wir helfen können."/>
      </div>
    </section>
    <section className="sect"><div className="wrap" style={{display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:"var(--space-16)",alignItems:"start"}}>
      <form onSubmit={submit} style={{display:"grid",gap:"var(--space-6)"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-6)"}}>
          <Field label="Name" required htmlFor="n"><Input id="n" placeholder="Vor- und Nachname"/></Field>
          <Field label="Organisation" htmlFor="o"><Input id="o" placeholder="Firma, Behörde, Verband"/></Field>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"var(--space-6)"}}>
          <Field label="E-Mail" required htmlFor="e" error={err}>
            <Input id="e" type="email" placeholder="name@unternehmen.de" value={mail} invalid={Boolean(err)} onChange={(ev)=>setMail(ev.target.value)}/>
          </Field>
          <Field label="Themenfeld" htmlFor="t"><Select id="t" placeholder="Bitte wählen" options={["Strategie & Roadmap","Daten & Plattform","Befähigung","Governance & Recht","Noch unklar"]}/></Field>
        </div>
        <Field label="Ihr Vorhaben" hint="Zwei bis drei Sätze reichen für das erste Gespräch."><Textarea rows={5} placeholder="Wir prüfen gerade, ob …"/></Field>
        <Field label="Wie sollen wir antworten?">
          <div style={{display:"flex",gap:"var(--space-6)",marginTop:"var(--space-1)"}}>
            <Radio name="w" label="Per E-Mail" defaultChecked/><Radio name="w" label="Rückruf"/><Radio name="w" label="Video-Termin"/>
          </div>
        </Field>
        <Checkbox label="Ich habe die Datenschutzhinweise gelesen." description="Wir nutzen Ihre Angaben ausschließlich für die Beantwortung."/>
        <div><Button type="submit" size="lg" iconEnd={<Icon name="Send" size={17}/>}>Anfrage senden</Button></div>
      </form>
      <div style={{display:"grid",gap:"var(--space-6)"}}>
        <Card variant="sand" rule>
          <Eyebrow rule={false}>Direkt</Eyebrow>
          <p style={{margin:"var(--space-3) 0 0"}}>kontakt@ai-transformation-collective.de<br/>+49 40 555 01 22</p>
          <p style={{margin:"var(--space-3) 0 0",fontSize:"var(--text-body-sm)",color:"var(--text-2)"}}>Antwort innerhalb von zwei Werktagen, auch wenn wir absagen.</p>
        </Card>
        <Card>
          <Badge tone="brand" style={{alignSelf:"flex-start",marginBottom:"var(--space-3)"}}>Für Expert:innen</Badge>
          <h3 style={{fontFamily:"var(--font-display)",textTransform:"uppercase",fontSize:"var(--text-h4)",fontWeight:500,margin:"0 0 var(--space-2)"}}>Im Netzwerk mitarbeiten</h3>
          <p style={{fontSize:"var(--text-body-sm)",color:"var(--text-2)",margin:"0 0 var(--space-4)"}}>Wir nehmen Menschen auf, die mindestens ein Vorhaben bis in den Betrieb begleitet haben.</p>
          <Button variant="secondary" size="sm">Profil einreichen</Button>
        </Card>
      </div>
    </div></section>
    {sent?<div className="toasts"><Toast tone="success" title="Anfrage gesendet" description="Wir melden uns innerhalb von zwei Werktagen." onClose={()=>setSent(false)}/></div>:null}
  </main>;
}
Object.assign(window,{ContactScreen});
