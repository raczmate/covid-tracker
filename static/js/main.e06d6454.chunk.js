(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{34:function(e,t,a){e.exports={"fullscreen-container":"Loader_fullscreen-container__32jwg","item-container":"Loader_item-container__2RJ11",loadIcon:"Loader_loadIcon__1dWoz",loadText:"Loader_loadText__bNB-O"}},42:function(e,t,a){e.exports={"covid-card":"DataCard_covid-card__PQuv1","card-shadow":"DataCard_card-shadow__3xaL7","bg-image":"DataCard_bg-image__1KdUU"}},71:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(19),s=a.n(c),i=(a(71),a(16)),l=a.n(i),d=a(28),u=a(33),b=Object(r.createContext)({Countries:null,Global:null,Date:null}),j=function(){return Object(r.useContext)(b)},h=b,m=function(e){return Number.isInteger(e)?e.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,"."):e},g=a(24),p=a.n(g);p.a.defaults.headers.get["Content-Type"]="application/json",p.a.defaults.headers.get["Cache-Control"]="no-cache",p.a.defaults.headers.get["Access-Control-Allow-Origin"]="*",p.a.interceptors.response.use(void 0,(function(e){return{error:e.response?e.response.data:"Sikertelen kapcsol\xf3d\xe1s",status:e.response?e.response.status:503}}));var f=p.a.create({baseURL:"https://api.covid19api.com"}),x=p.a.create({baseURL:"https://ip-api.com/json"}),O=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a,n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get("/summary");case 2:return t=e.sent,a=t.data,n=a.Countries,r=a.Global,o=a.Date,e.abrupt("return",{Countries:n,Global:r,Date:o});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(d.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get();case 2:return t=e.sent,a=t.data.country,e.abrupt("return",{country:a});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=a(34),v=a.n(w),C=a(25),k=a(23),S=a(60),z=a.n(S);var _=function(){return Object(n.jsx)("div",{className:v.a["fullscreen-container"],children:Object(n.jsx)(z.a,{children:Object(n.jsxs)("div",{className:v.a["item-container"],children:[Object(n.jsx)(C.a,{icon:k.d,size:"6x",spin:!0,className:v.a.loadIcon}),Object(n.jsx)("p",{className:v.a.loadText,children:"Adatok szinkroniz\xe1l\xe1sa folyamatban..."})]})})})},D=a(47),I=a(109),N=a(63),L=a(110),R=a(64),A=a(31);var F=function(e){var t,a=e.refreshData,r=j().Date,o=new Date(r).toISOString().substring(0,10);return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(I.a,{bg:"dark",variant:"dark",sticky:"top",children:[Object(n.jsx)(I.a.Brand,{href:"#",as:A.b,to:{pathname:"/"},children:"Covid-tracker"}),Object(n.jsx)(N.a,(t={variant:"dark",style:{alignSelf:"center"},as:A.b,to:{pathname:"/countries"}},Object(D.a)(t,"style",{textDecoration:"none"}),Object(D.a)(t,"children","Orsz\xe1gok"),t)),Object(n.jsxs)(L.a,{style:{marginLeft:"auto"},children:[Object(n.jsxs)(L.a.Link,{as:"li",style:{alignSelf:"center"},children:["Utols\xf3 API friss\xedt\xe9s d\xe1tuma: ",o]}),Object(n.jsx)(N.a,{variant:"dark",onClick:a,style:{alignSelf:"center"},children:"Adatok friss\xedt\xe9se"}),Object(n.jsx)(L.a.Link,{href:"https://github.com/raczmate/covid-tracker",target:"_blank",style:{color:"white"},children:Object(n.jsx)(C.a,{icon:R.a,size:"3x",color:"white"})})]})]})})},T=a(111),B=a(104),E=a(3),M=a.n(E),G=a(42),P=a.n(G);function U(e){switch(e){case"Confirmed":return k.a;case"Deaths":return k.c;case"Recovered":return k.e;default:return k.b}}function W(e){var t,a,r,o,c,s=e.data;return Object(n.jsxs)(T.a,{style:{padding:null!==(t=s.padding)&&void 0!==t?t:"0.5rem",borderRadius:"0.5rem",marginTop:null!==(a=s.topMargin)&&void 0!==a?a:"2rem",backgroundRepeat:"no-repeat",marginBottom:null!==(r=s.bottomMargin)&&void 0!==r?r:"0.5rem"},className:"".concat(s.withShadow?P.a["card-shadow"]:""," ").concat(P.a["covid-card"]),children:[Object(n.jsx)(B.a,{className:P.a["bg-image"],src:s.bgImage,styles:{position:"absolute"}}),!s.Component&&Object(n.jsxs)(T.a.Body,{children:[s.title&&Object(n.jsx)(T.a.Title,{children:s.title}),Object(n.jsx)(T.a.Subtitle,{className:"text-muted",style:{marginBottom:"0.5rem",textShadow:"0 0 2px white"},children:s.subtitle}),Object(n.jsx)(T.a.Text,{style:{color:s.bodyColor?s.bodyColor:s.black,fontWeight:"500",float:s.icon?"left":"none",fontSize:null!==(o=s.bodyFontSize)&&void 0!==o?o:"1.3rem",textShadow:"0 0 2px white"},children:s.body}),s.icon&&Object(n.jsx)(T.a.Text,{style:{float:"right",textShadow:"0 0 2px white"},children:Object(n.jsx)(C.a,{icon:U(s.icon),style:{color:null!==(c=s.bodyColor)&&void 0!==c?c:"black"},size:"4x"})})]}),s.Component&&Object(n.jsx)(s.Component,{})]})}W.prototype={data:M.a.shape({title:M.a.string,subtitle:M.a.string,body:M.a.string,bodyFontSize:M.a.string,bodyColor:M.a.string,bgImage:M.a.string,icon:M.a.string,padding:M.a.string,topMargin:M.a.string,withShadow:M.a.bool,Component:M.a.element})};var J=W,H=a(105),V=a(106);var K=function(){var e=j().Global;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"display-4 text-center text-md-left",children:"Glob\xe1lis adatok"}),Object(n.jsxs)(H.a,{children:[Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{data:{title:"\xdaj esetek sz\xe1ma",bodyColor:"red",body:m(e.NewConfirmed)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Confirmed",bgImage:"https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg",withShadow:!0}})}),Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{data:{title:"\xdaj elhal\xe1loz\xe1sok sz\xe1ma",bodyColor:"red",body:m(e.NewDeaths)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Deaths",bgImage:"https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg",withShadow:!0}})}),Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{data:{title:"\xdaj gy\xf3gyultak sz\xe1ma",bodyColor:"green",body:m(e.NewRecovered)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Recovered",bgImage:"https://upload.wikimedia.org/wikipedia/commons/a/ad/BlankMap-World_gray.svg",withShadow:!0}})})]})]})};var Q=function(e){var t=e.country,a=t.CountryCode.toLowerCase();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(H.a,{children:[Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{style:{marginBottom:"30rem"},data:{title:"\xdaj esetek sz\xe1ma",bodyColor:"red",body:m(t.NewConfirmed)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Confirmed",bgImage:"http://www.geonames.org/flags/x/".concat(a,".gif"),withShadow:!0}})}),Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{data:{title:"\xdaj elhal\xe1loz\xe1sok sz\xe1ma",bodyColor:"red",body:m(t.NewDeaths)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Deaths",bgImage:"http://www.geonames.org/flags/x/".concat(a,".gif"),withShadow:!0}})}),Object(n.jsx)(V.a,{lg:4,sm:12,children:Object(n.jsx)(J,{data:{title:"\xdaj gy\xf3gyultak sz\xe1ma",bodyColor:"green",body:m(t.NewRecovered)+" f\u0151",subtitle:"Az elm\xfalt 24 \xf3r\xe1ban",icon:"Recovered",bgImage:"http://www.geonames.org/flags/x/".concat(a,".gif"),withShadow:!0}})})]})})};var q=function(){var e=j().Countries,t=localStorage.getItem("preferredCountry"),a=e.find((function(e){return e.Country===t}));return a?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{className:"display-4 text-center text-md-left",children:"Helyi adatok"}),Object(n.jsx)(Q,{country:a})]}):null},X=a(108),Y=function(e){var t=e.addCountry,a=e.removeCountry,r=e.selected,o=j().Countries;return o.map((function(e){return e.Country})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(H.a,{children:Object(n.jsx)(V.a,{xs:12,md:6,className:"mt-2 mx-auto",children:Object(n.jsxs)(X.a,{children:[Object(n.jsx)(X.a.Toggle,{variant:"info",id:"dropdown-basic",children:"Orsz\xe1g kiv\xe1laszt\xe1sa"}),Object(n.jsx)(X.a.Menu,{children:o.map((function(e){return Object(n.jsx)(X.a.Item,{onClick:r.includes(e)?function(){return a(e)}:function(){return t(e)},style:{backgroundColor:r.includes(e)?"LightSlateGrey":"white"},children:e.Country},e.Country)}))})]})})}),r.map((function(e){return Object(n.jsx)(Q,{country:e},e.Country)}))]})},Z=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(J,{data:{Component:K,padding:"4rem"}}),Object(n.jsx)(J,{data:{Component:q,padding:"4rem"}})]})},$=a(35),ee=[];function te(e,t){switch(t.type){case"ADD":return e.includes(t.payload)?Object($.a)(e):[].concat(Object($.a)(e),[t.payload]);case"REMOVE":return e.includes(t.payload)?e.filter((function(e){return e.Country!==t.payload.Country})):Object($.a)(e);case"RESET":return e.length=0,Object($.a)(e);default:throw new Error("Helytelen m\u0171velet!")}}var ae=function(){var e=Object(r.useReducer)(te,ee),t=Object(u.a)(e,2),a=t[0],o=t[1];return Object(n.jsx)("div",{children:Object(n.jsx)(Y,{addCountry:function(e){return o({type:"ADD",payload:e})},removeCountry:function(e){return o({type:"REMOVE",payload:e})},selected:a})})},ne=a(7),re=a(107);var oe=function(){var e=Object(r.useState)(null),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(r.useState)(!0),s=Object(u.a)(c,2),i=s[0],b=s[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O().then((function(e){if(e.error)throw Error("Sikertelen api h\xedv\xe1s");o(e),b(!1)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();a&&!i||setTimeout((function(){e()}),1500)}),[i]),Object(r.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y().then((function(e){e.error?console.log("Sikertelen lok\xe1ci\xf3 lek\xe9r\xe9s..."):localStorage.setItem("preferredCountry",e.country)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();localStorage.getItem("preferredCountry")||e()}),[]),i?Object(n.jsx)(_,{}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(h.Provider,{value:a,children:Object(n.jsxs)(A.a,{children:[Object(n.jsx)(F,{refreshData:function(){return b(!0)}}),Object(n.jsx)(re.a,{fluid:!0,children:Object(n.jsxs)(ne.c,{children:[Object(n.jsx)(ne.a,{exact:!0,path:"/",component:Z}),Object(n.jsx)(ne.a,{exact:!0,path:"/countries",component:ae}),Object(n.jsx)(ne.a,{path:"*",component:Z})]})})]})})})},ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(oe,{})}),document.getElementById("root")),ce()}},[[99,1,2]]]);
//# sourceMappingURL=main.e06d6454.chunk.js.map