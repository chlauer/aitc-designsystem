function App(){
  const [route,setRoute]=React.useState("home");
  const go=(r)=>{setRoute(r);window.scrollTo({top:0});};
  const screen=route==="network"?<NetworkScreen go={go}/>
    :route==="insight"?<InsightScreen go={go}/>
    :route==="contact"?<ContactScreen go={go}/>
    :route==="topics"?<HomeScreen go={go}/>
    :<HomeScreen go={go}/>;
  return <React.Fragment>
    <SiteHeader route={route} go={go}/>
    {screen}
    <SiteFooter go={go}/>
  </React.Fragment>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
