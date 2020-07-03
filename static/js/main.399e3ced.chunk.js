(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{114:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(6),c=a.n(i),o=(a(82),a(15)),l=a(11),s=a(18),m=a(19),p=a(22),u=a(21),d=(a(83),a(7)),f=a(149),h=a(72),y=a(154),v=a(33),b=a(59),g=a.n(b),E=a(116),j=a(136),k=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{variant:"subtitle1",href:this.props.repo.clone_url},this.props.repo.name),r.a.createElement(E.a,{variant:"body2"},this.props.repo.description))}}],[{key:"compare",value:function(e,t){return e.updated_at>t.updated_at?-1:e.updated_at<t.updated_at?1:0}}]),t}(n.Component),x=Object(d.translate)((function(e){var t,a=Object(n.useState)(null),i=Object(v.a)(a,2),c=i[0],o=i[1];return Object(n.useEffect)((function(){g.a.get("https://api.github.com/users/RomainCharpentier/repos").then((function(e){o(e.data)})).catch((function(e){console.log("Error fetching and parsing data",e)}))})),c&&c.length>0&&(c.sort(k.compare),t=c.map((function(e){return r.a.createElement(k,{key:e.id,repo:e})}))),r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h5",className:e.className},e.t("git.title")),t)})),O=a(139),_=a(140),w=a(141),N=a(142),C=a(143),S=a(151),I=a(152),D=a(4),T=a(62),R=a.n(T);function B(e){var t=e.children,a=e.window,n=Object(O.a)({target:a?a():void 0});return r.a.createElement(_.a,{appear:!1,direction:"down",in:!n},t)}var F=function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},z=Object(D.a)((function(e){return{nav:{backgroundColor:"transparent !important",display:"flex",flexDirection:"row"},item:{"&:hover":{color:"#F06000"},fontWeight:"bold",justifyContent:"center",textShadow:"1px 1px 2px red, 0 0 1em blue",textTransform:"uppercase",letterSpacing:"2.5px",margin:"10px"},appBar:{backgroundColor:"transparent",boxShadow:"none",alignItems:"center","&:hover":{cursor:"pointer"}},menuButton:{justifyContent:"left"}}}))(Object(d.translate)((function(e){var t=e.classes,a=e.refs,i=Object(n.useState)(F()),c=Object(v.a)(i,2),o=c[0],l=c[1],s=r.a.useState(null),m=Object(v.a)(s,2),p=m[0],u=m[1],d=Boolean(p),f=function(){u(null)},h=a.map((function(a){return r.a.createElement(E.a,{className:t.item,onClick:function(){x(a.ref)}},e.t("".concat(a.title,".title")))})),y=r.a.createElement(w.a,{edge:"start",className:t.menuButton,color:"inherit",onClick:function(e){u(e.currentTarget)}},r.a.createElement(R.a,null)),b=Object(n.useState)(o>500?h:y),g=Object(v.a)(b,2),j=g[0],k=g[1],x=function(e){e.current.scrollIntoView({behavior:"smooth"})};return Object(n.useEffect)((function(){var e=function(){l(F()),k(o>500?h:y),f()};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}})),r.a.createElement(B,e,r.a.createElement(N.a,{className:t.appBar},r.a.createElement(C.a,{className:t.nav},j,r.a.createElement(S.a,{anchorEl:p,keepMounted:!0,open:d,onClose:f},a.map((function(a){return r.a.createElement(I.a,{key:a.key,onClick:function(){x(a.ref),f()}},r.a.createElement(E.a,{className:t.item},e.t("".concat(a.title,".title"))))}))))))}))),L=a(146),P=a(147),W=a(68),q=a.n(W),J=a(144),M=a(145),V=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={value:0},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({value:Math.min(e.props.maxValue,e.state.value+1)})}),2e3/this.props.maxValue)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.name;return r.a.createElement(J.a,{item:!0,className:t.root,borderColor:"primary.main"},r.a.createElement("div",{className:t.div},r.a.createElement(E.a,{variant:"subtitle1"},a),r.a.createElement(J.a,{container:!0,spacing:3,alignItems:"center"},r.a.createElement(J.a,{item:!0,xs:9},r.a.createElement(M.a,{variant:"determinate",className:t.slider,value:this.state.value})),r.a.createElement(J.a,{item:!0,xs:3},r.a.createElement(E.a,{variant:"body2"},this.state.value," %")))))}}]),t}(n.Component),U=Object(D.a)((function(e){return{root:{width:"300px","& > * + *":{marginTop:e.spacing(2)}},div:{border:"solid "+e.palette.primary.dark,padding:"inherit"},slider:{height:"10px"}}}))(V),H=a(63),A=Object(d.translate)((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h5",className:e.className},e.t("skills.title")),r.a.createElement(J.a,{container:!0,spacing:3,alignItems:"center",justify:"center"},H.body.map((function(e){return r.a.createElement(U,{name:e.name,maxValue:e.level})}))))})),G=(a(114),a(153)),Y=a(64),$=a.n(Y),K=a(65),Q=a.n(K),X=a(66),Z=a.n(X),ee=a(67),te=a.n(ee),ae=r.a.forwardRef((function(e,t){var a=e.classes;return r.a.createElement("div",{className:a.root,id:"back-to-top-anchor",ref:t},r.a.createElement("div",{className:a.content},r.a.createElement("div",{className:a.text},r.a.createElement(J.a,{container:!0,alignItems:"center",justify:"center"},r.a.createElement(G.a,{src:"https://avatars2.githubusercontent.com/u/35954925?s=460&v=4",className:a.avatar})),r.a.createElement(E.a,{variant:"h1"},e.t("home.name")),r.a.createElement(E.a,{variant:"h3"},e.t("home.description_1")),r.a.createElement(E.a,{variant:"h4"},e.t("home.description_2"))),r.a.createElement("div",null,r.a.createElement(w.a,{href:"https://www.linkedin.com/in/romain-charpentier",className:a.iconButton},r.a.createElement(Q.a,{className:a.icon})),r.a.createElement(w.a,{href:"https://github.com/RomainCharpentier",className:a.iconButton},r.a.createElement(Z.a,{className:a.icon}))),r.a.createElement(w.a,{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#key2");t&&t.scrollIntoView({behavior:"smooth",block:"start"})},className:a.iconButton},r.a.createElement(te.a,{className:a.icon}))))})),ne=Object(D.a)((function(e){return{root:{background:"#161415 url("+$.a+") no-repeat center",backgroundSize:"cover !important",height:"100vh",textAlign:"-webkit-center"},avatar:{width:e.spacing(20),height:e.spacing(20)},content:{position:"relative",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},appBar:{backgroundColor:"transparent",boxShadow:"none",alignItems:"center","&:hover":{cursor:"pointer"}},iconButton:{"&:hover":{backgroundColor:"transparent",color:e.palette.info.light}},icon:{fontSize:"30px"},text:{width:"65%",margin:"auto",lineHeight:"200%"}}}))(Object(d.translate)(ae)),re=Object(d.translate)((function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"subtitle1"},e.title),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block"}},e.place),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block",margin:"0px 5px 0px 5px"}},"\u2022"),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block"}},e.start_year," - ",e.end_year),r.a.createElement(E.a,{variant:"body2"},e.description))})),ie=Object(d.translate)((function(e){for(var t=[],a="education.".concat(t.length,".title"),n={title:e.t("".concat(a,".title")),description:e.t("".concat(a,".description")),place:e.t("".concat(a,".place")),start_year:e.t("".concat(a,".start_year")),end_year:e.t("".concat(a,".end_year"))};n.title!==e.t("education.title");)t.push(n),a="education.".concat(t.length),n={title:e.t("".concat(a,".title")),description:e.t("".concat(a,".description")),place:e.t("".concat(a,".place")),start_year:e.t("".concat(a,".start_year")),end_year:e.t("".concat(a,".end_year"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h5",className:e.className},e.t("education.title")),t.map((function(e){return r.a.createElement(re,e)})))})),ce=Object(d.translate)((function(e){return r.a.createElement("div",null,r.a.createElement(E.a,{variant:"subtitle1"},e.title),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block"}},e.place),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block",margin:"0px 5px 0px 5px"}},"\u2022"),r.a.createElement(E.a,{variant:"body2",style:{display:"inline-block"}},e.start_year," - ",e.end_year),r.a.createElement(E.a,{variant:"body2"},e.description))})),oe=Object(d.translate)((function(e){for(var t=[],a="experience.".concat(t.length,".title"),n={title:e.t("".concat(a,".title")),description:e.t("".concat(a,".description")),place:e.t("".concat(a,".place")),start_year:e.t("".concat(a,".start_year")),end_year:e.t("".concat(a,".end_year"))};n.title!==e.t("experience.title");)t.push(n),a="experience.".concat(t.length),n={title:e.t("".concat(a,".title")),description:e.t("".concat(a,".description")),place:e.t("".concat(a,".place")),start_year:e.t("".concat(a,".start_year")),end_year:e.t("".concat(a,".end_year"))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{variant:"h5",className:e.className},e.t("experience.title")),t.map((function(e){return r.a.createElement(ce,e)})))})),le=function(e){var t=e.children,a=e.window,n=e.classes,i=Object(O.a)({target:a?a():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(L.a,{in:i},r.a.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},className:n.scrollTop},t))},se={content:[{key:0,title:"home",ref:r.a.createRef(),component:ne},{key:1,title:"skills",ref:r.a.createRef(),component:A},{key:2,title:"git",ref:r.a.createRef(),component:x},{key:3,title:"education",ref:r.a.createRef(),component:ie},{key:4,title:"experience",ref:r.a.createRef(),component:oe}]},me=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes;e.t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,{refs:se.content}),se.content.map((function(e){var a=t.section;return e.key%2!==0&&(a="".concat(t.section," ").concat(t.section2)),0===e.key&&(a=""),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a,ref:e.ref,id:"key".concat(e.key)},r.a.createElement(e.component,{className:t.sectionTitle})))})),r.a.createElement(le,this.props,r.a.createElement(P.a,{color:"primary",size:"small","aria-label":"scroll back to top"},r.a.createElement(q.a,null))))}}]),t}(n.Component),pe=Object(D.a)((function(e){return{copyRight:{flex:1,justifyContent:"flex-end"},scrollTop:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},section:{paddingTop:"20px",paddingBottom:"20px"},section2:{backgroundColor:"rgb(36, 36, 36)"},sectionTitle:{textTransform:"uppercase"},center:{margin:"auto"}}}))(Object(d.translate)(me)),ue=a(69),de=a.n(ue),fe=a(148),he=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(fe.a,{maxWidth:"sm"},r.a.createElement("img",{className:e.logo,alt:"under construction logo",src:de.a}))}}]),t}(n.Component),ye=(Object(D.a)({logo:{width:"inherit",height:"auto"}})(he),function(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(j.a,{color:"inherit",href:"https://romaincharpentier.github.io"},"Romain Charpentier")," ",(new Date).getFullYear(),".")}),ve=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).toggleDarkTheme=function(){var e="light"===a.state.theme.palette.type?"dark":"light";a.setState({theme:{palette:{type:e}}})},a.state={theme:{palette:{type:"dark",text:{default:"#fff",primary:"#1976d2",secondary:"#a9a9a9"},textColor:"#fff",primary:{main:"#1976d2",dark:"#fff"}},typography:{h1:{color:"#fff",fontFamily:'Times New Roman", Times, serif',fontSize:"3rem",textShadow:"0px 0px 10px rgba(0, 0, 0, 1)"},h3:{color:"#fff",fontFamily:"caption",fontSize:"1.5rem"},h4:{color:"#e3e3e3",fontFamily:"caption",fontSize:"1.2rem"},h5:{color:"#00ffff"},subtitle1:{color:"#fff"},body2:{color:"#a9a9a9"}}}},a.toggleDarkTheme.bind(Object(p.a)(a)),navigator.language.indexOf("fr")>-1?Object(d.setLanguage)("fr"):Object(d.setLanguage)("en"),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;return e=r.a.createElement(pe,null),r.a.createElement("div",{className:"App"},r.a.createElement(f.a,{theme:Object(h.a)(this.state.theme)},r.a.createElement(y.a,null),e,r.a.createElement(ye,null)))}}]),t}(r.a.Component),be=Object(d.translate)(ve);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(70),Ee=a(71);Object(d.setDefaultTranslations)({fr:ge,en:Ee}),Object(d.setDefaultLanguage)("en"),c.a.render(r.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e){e.exports=JSON.parse('{"body":[{"name":"Java","level":85},{"name":"Javascript","level":70},{"name":"React","level":60},{"name":"Git","level":50}]}')},64:function(e,t,a){e.exports=a.p+"static/media/header_wallpaper.3467c903.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/under_construction.ba4c2dda.png"},70:function(e){e.exports=JSON.parse('{"home":{"title":"Accueil","name":"Romain Charpentier","description_1":"Passionn\xe9 de d\xe9veloppement informatique, j\u2019aime comprendre et d\xe9couvrir de nouvelles technologies.","description_2":"Titulaire d\'un Master Informatique sp\xe9cialis\xe9 en Conception Logicielle, je continue d\xe9sormais d\'apprendre avec mes exp\xe9riences professionnelles mais \xe9galement avec une formation en autodidacte pendant mon temps libre."},"skills":{"title":"Comp\xe9tences"},"git":{"title":"Git"},"education":{"0":{"title":"Master Informatique","description":"Description","place":"University of Poitiers","start_year":"2017","end_year":"2019"},"1":{"title":"Licence Informatique","description":"Description","place":"University of Poitiers","start_year":"2014","end_year":"2017"},"title":"Education"},"experience":{"0":{"title":"Ing\xe9nieur d\xe9veloppement","description":"Description","place":"Chauray","start_year":"2014","end_year":"2017"},"1":{"title":"Stagiaire","description":"Description","place":"Poitiers","start_year":"2014","end_year":"2017"},"title":"Experience"}}')},71:function(e){e.exports=JSON.parse('{"home":{"title":"Home","name":"Romain Charpentier","description_1":"Passionate about IT development, I like to understand and discover new technologies.","description_2":"Holding a IT Master specializing in Software Design, I am continuing to learn with my professional experiences but also with self-taught training during my free time."},"skills":{"title":"Skills"},"git":{"title":"Git"},"education":{"0":{"title":"Master degree in computer science","description":"Description","place":"University of Poitiers","start_year":"2014","end_year":"2017"},"1":{"title":"Licence Informatique","description":"Description","place":"University of Poitiers","start_year":"2014","end_year":"2017"},"title":"Education"},"experience":{"0":{"title":"Software developper","description":"Description","place":"Chauray","start_year":"2014","end_year":"2017"},"1":{"title":"Intership","description":"Description","place":"Poitiers","start_year":"2014","end_year":"2017"},"title":"Exp\xe9rience"}}')},77:function(e,t,a){e.exports=a(115)},82:function(e,t,a){},83:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.399e3ced.chunk.js.map