"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[444],{1687:function(a,e,t){var n=t(1243).Z.create({baseURL:"http://localhost:8080"});e.Z=n},3345:function(a,e,t){var n=t(9439),s=t(3044),r=t(2791),o=t(1659),i=t(184);function c(a,e){var t=a.id,c=a.nome,l=(0,r.useState)(""),u=(0,n.Z)(l,2),d=u[0],h=u[1],m=(0,r.useState)(!1),f=(0,n.Z)(m,2),p=(f[0],f[1]),x=(0,r.useState)(!1),Z=(0,n.Z)(x,2),g=Z[0],v=Z[1];(0,r.useImperativeHandle)(e,(function(){return{getImgPerfilURL:function(){return d}}}),[d]);var j=function(a){var e="/imgs-perfil-usuario/".concat(a,"_ft_perfil");o.t.ref(e).getDownloadURL().then((function(a){h(a),p(!0)})).catch((function(){v(!0)}))};(0,r.useEffect)((function(){a.naoCarregar&&(a.imgUrl?h(a.imgUrl):j(t))}),[]),(0,r.useEffect)((function(){a.imgUrl?(h(a.imgUrl),v(!1)):j(t)}),[a.recarregarImg]);var b=g?"#099250":"#eeeeee",N=a.sx?a.sx:{};return N.bgcolor=b,g?(0,i.jsx)(s.Z,{className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:N,children:g?c.charAt(0):""}):(0,i.jsx)(s.Z,{src:g?null:d,className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:N,children:g?c.charAt(0):""})}e.Z=(0,r.forwardRef)(c)},9084:function(a,e,t){t.d(e,{Z:function(){return r}});t(2791);var n=t(4554),s=t(184);var r=function(a){return(0,s.jsx)(n.Z,{className:"card ".concat(a.className),sx:a.sx,id:a.id,onClick:a.onClick,children:a.children})}},4056:function(a,e,t){t.d(e,{Z:function(){return Q}});var n=t(9439),s=t(2791),r=t(4554),o=t(9284),i=t(9310),c=t(2125),l=t(6630),u=t(9230),d=t(3709),h=t(2167),m=t(13),f=t(533),p=t(890),x=t(184);var Z=function(a){return(0,x.jsx)(f.Z,{className:"navbar-lateral-card-container",href:a.href,underline:"none",children:(0,x.jsxs)(r.Z,{className:"navbar-lateral-card ".concat(a.active?"active":"not-active"),children:[a.hover?(0,x.jsx)(a.icon,{className:"navbar-lateral-card-img-hover"}):(0,x.jsx)(a.icon,{className:"navbar-lateral-card-img"}),a.hover?(0,x.jsx)(p.Z,{className:"navbar-lateral-card-texto",children:a.titulo}):""]})})};var g=function(a){var e=s.useState(!1),t=(0,n.Z)(e,2),f=t[0],p=t[1],g=sessionStorage.getItem("CATEGORIA").toLocaleLowerCase(),v={professor:[{titulo:"Dashboard",icon:i.Z,active:"dashboard"===a.tela,href:"/dashboard-professor"},{titulo:"Agenda",icon:c.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:l.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Aulas",icon:d.Z,active:"aulas"===a.tela,href:"/aulas"}],aluno:[{titulo:"Encontrar",icon:h.Z,active:"encontrar"===a.tela,href:"/encontrar-professor"},{titulo:"Agenda",icon:c.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:l.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Feedbacks",icon:m.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],administrador:[{titulo:"Dashboard",icon:i.Z,active:"dashboard"===a.tela,href:"/dashboard-administrador"}]};return(0,x.jsx)(r.Z,{className:"navbar-lateral-background",children:(0,x.jsxs)(r.Z,{className:"navbar-lateral",onMouseEnter:function(){return setTimeout((function(){return p(!0)}),50)},onMouseLeave:function(){return setTimeout((function(){return p(!1)}),150)},children:[(0,x.jsxs)("a",{href:"/",className:"navbar-lateral-logo-container",children:[(0,x.jsx)(o.Z,{icon:!0,white:!0,height:"40px",className:"navbar-lateral-logo ".concat(f?"hidden":"")}),(0,x.jsx)(o.Z,{white:!0,width:"200px",className:"navbar-lateral-logo ".concat(f?"":"hidden")})]}),(0,x.jsx)(r.Z,{className:"navbar-lateral-cards",children:v[g].map((function(a){return(0,x.jsx)(Z,{href:a.href,titulo:a.titulo,icon:a.icon,active:a.active,hover:f},"opcao-navbar-".concat(a.titulo))}))})]})})},v=t(2),j=t(8121),b=t(3786),N=t.p+"static/media/business-proposal.0fb9562397d64134bfe0.png",S=t(5117);var C=function(a){return(0,x.jsx)(S.Z,{id:a.menuId,anchorEl:a.anchorEl,open:a.open,onClose:a.handleClose,MenuListProps:{"aria-labelledby":a.buttonClassName},children:a.children})},I=t(2426),k=t.n(I),E=(t(827),t(1687)),D=function(a,e){return E.Z.put(a,e,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var A=function(a){var e=sessionStorage.getItem("ID"),t=(0,s.useState)(0),o=(0,n.Z)(t,2),i=o[0],c=o[1],l=(0,s.useState)([]),u=(0,n.Z)(l,2),d=u[0],h=u[1],m=(0,s.useState)(0),f=(0,n.Z)(m,2),Z=f[0],g=f[1],S=(0,s.useState)(null),I=(0,n.Z)(S,2),A=I[0],T=I[1],w=!!A,y=function(){var a;(a="/notificacoes/usuario/".concat(sessionStorage.ID),E.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})).then((function(a){var e=a.data,t=e.content;console.log("Recebi a notificacao: "),console.log(t),204!==a.status?(t.forEach((function(a){a.tempo=k()(a.data).fromNow(),a.src=N})),c(e.totalPages),h(t),g(t.filter((function(a){return!a.lida})).length)):h([])})).catch((function(a){console.log(a)}))};return(0,s.useEffect)((function(){y()}),[]),(0,x.jsxs)("div",{children:[(0,x.jsx)(j.Z,{id:"notificacao-botao",className:"container-usuario-notificacao",color:"primary",badgeContent:Z,"aria-controls":w?"notificacao-menu":void 0,"aria-haspopup":"true","aria-expanded":w?"true":void 0,onClick:function(a){T(a.currentTarget)},children:(0,x.jsx)(v.Z,{})}),(0,x.jsxs)(C,{menuId:"notificacao-menu",buttonClassName:"notificacao-botao",anchorEl:A,open:w,handleClose:function(){T(null)},className:"notificacao-card",children:[(0,x.jsxs)(r.Z,{className:"notificacao-menu-container-title",children:[(0,x.jsx)(p.Z,{className:"notificacao-menu-title",children:"Notifica\xe7\xf5es"}),Z>0?(0,x.jsx)(p.Z,{className:"notificacao-menu-lido",onClick:function(){D("/notificacoes/lida-usuario/".concat(e),{}).then((function(a){200===a.status&&(d.forEach((function(a){a.lida=!0})),h(d),g(0))})).catch((function(a){console.log(a)}))},children:"Marcar como visto"}):""]}),d.map((function(a){return(0,x.jsxs)(b.Z,{className:"notificacao-menu-item",onClick:function(){var e;e=a.id,D("/notificacoes/lida/".concat(e),{}).then((function(a){200===a.status&&(alert("Lendo a notificacao com id: "+e),d.forEach((function(a){a.id===e&&(a.lida=!0)})),h(d),Z>0&&g(Z-1))})).catch((function(a){console.log(a)}))},sx:{backgroundColor:a.lido?"var(--notificacao-nao-lida)":"var(--notificacao-lida)"},children:[(0,x.jsxs)(r.Z,{className:"notificacao-menu-item-info-container",children:[(0,x.jsx)("img",{src:a.src,className:"notificacao-menu-item-img",alt:""}),(0,x.jsx)(p.Z,{className:"notificacao-menu-item-titulo",children:a.titulo})]}),(0,x.jsx)(r.Z,{className:"notificacao-menu-item-container-tempo",children:(0,x.jsx)(p.Z,{className:"notificacao-menu-item-tempo",children:a.tempo})})]},a.id)})),i>1?(0,x.jsx)(r.Z,{sx:{width:"100%",height:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,x.jsx)(p.Z,{className:"notificacao-menu-lido",children:"Mostrar Todos"})}):""]})]})},T=t.p+"static/media/user.05d0404ad8a0ab5bdefa.png",w=t.p+"static/media/logout.0becdbc391b7088ace83.png",y=t(7689),R=t(3345),z=[{id:1,src:T,titulo:"Meu Perfil",url:"/perfil"},{id:3,src:w,titulo:"Sair",url:"/"}],B=sessionStorage.getItem("NOME");var F=function(a){var e=(0,y.s0)(),t=s.useState(null),o=(0,n.Z)(t,2),i=o[0],c=o[1],l=Boolean(i),u=function(a){c(null),e(a.url)};return(0,x.jsxs)("div",{children:[(0,x.jsx)(R.Z,{id:sessionStorage.getItem("ID"),nome:B,className:"avatar-usuario-img",onClick:function(a){c(a.currentTarget)},ariaControls:l?"avatar-usuario-menu":void 0,ariaHaspopup:"true",ariaExpanded:l?"true":void 0,recarregarImg:a.recarregarTodasImgs}),(0,x.jsxs)(C,{menuId:"avatar-usuario-menu",buttonClassName:"avatar-usuario-botao",anchorEl:i,open:l,handleClose:u,children:[(0,x.jsxs)(r.Z,{className:"avatar-usuario-menu-user-info",children:[(0,x.jsx)(R.Z,{id:sessionStorage.getItem("ID"),className:"avatar-usuario-img",nome:B}),(0,x.jsxs)(r.Z,{className:"avatar-usuario-menu-user-info-text",children:[(0,x.jsx)(p.Z,{className:"avatar-usuario-menu-nome",children:B}),(0,x.jsx)(p.Z,{className:"avatar-usuario-menu-email",children:sessionStorage.getItem("EMAIL")})]})]}),(0,x.jsx)(r.Z,{className:"opcoes-container",children:z.map((function(a){return(0,x.jsxs)(b.Z,{className:"avatar-usuario-menu-item",onClick:function(){return u(a)},children:[(0,x.jsx)("img",{src:a.src,className:"avatar-usuario-menu-item-img",alt:""}),(0,x.jsx)(p.Z,{className:"avatar-usuario-menu-item-titulo",children:a.titulo})]},a.id)}))})]})]})};var L=function(a){return(0,x.jsxs)(r.Z,{className:"container-usuario",children:[(0,x.jsx)(A,{}),(0,x.jsx)(F,{recarregarTodasImgs:a.recarregarTodasImgs})]})},M=t(9658),K=t(3400),O=t(6739);var Q=function(a){var e=(0,s.useState)(!1),t=(0,n.Z)(e,2),o=(t[0],t[1]),i=(0,s.useState)([]),c=(0,n.Z)(i,2),l=c[0],u=c[1],d=a.recarregarTodasImgs;return(0,s.useEffect)((function(){a.errosState&&u(a.errosState.erros)}),[a.errosState]),(0,s.useEffect)((function(){d&&o(d)}),[d]),(0,x.jsxs)(r.Z,{className:"mui-root",children:[(0,x.jsx)(r.Z,{className:"erro-container",children:l&&l.map((function(e,t){return(0,x.jsx)(M.Z,{severity:"error",action:(0,x.jsx)(K.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return a.errosState.setErros(l.filter((function(a,e){return e!==t})))},children:(0,x.jsx)(O.Z,{fontSize:"inherit"})}),sx:{zIndex:1e3},children:e},t)}))}),(0,x.jsx)(g,{tela:a.tela}),(0,x.jsxs)(r.Z,{className:"pagina-padrao-container",children:[(0,x.jsx)(L,{recarregarTodasImgs:d}),a.children]})]})}},9856:function(a,e,t){t.r(e),t.d(e,{default:function(){return w}});var n=t(1413),s=t(9439),r=t(2791),o=t(5228),i=t(3896),c=t(4554),l=(t.p,t(4056)),u=t(9084),d=t(3239),h=t(890),m=t(1687),f=t(184);var p=function(a){var e=(0,r.useState)("0,00"),t=(0,s.Z)(e,2),n=t[0],o=t[1],i=(0,r.useState)(!0),c=(0,s.Z)(i,2),l=c[0],p=c[1],x={headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}};return(0,r.useEffect)((function(){"Rendimento total"===a.titulo?o(function(){var e="";e=0===a.periodo?"mes-atual":"ano-atual";var t="/professores/dashboard/".concat(e,"/rendimento/")+sessionStorage.ID;m.Z.get(t,x).then((function(a){console.log(t),p(!1),o("R$ "+a.data)}))}()):"Quantidade de alunos"===a.titulo?o(function(){var e="";e=0===a.periodo?"mes-atual":"ano-atual";var t="/professores/dashboard/".concat(e,"/qtd-alunos/")+sessionStorage.ID;m.Z.get(t,x).then((function(a){p(!1),o(a.data)}))}()):"Quantidade de aulas"===a.titulo?o(function(){var e="";e=0===a.periodo?"mes-atual":"ano-atual";var t="/professores/dashboard/".concat(e,"/qtd-aulas/")+sessionStorage.ID;m.Z.get(t,x).then((function(a){p(!1),o(a.data)}))}()):"Tempo de resposta"===a.titulo&&o(function(){var e="";e=0===a.periodo?"mes-atual":"ano-atual";var t="/professores/dashboard/".concat(e,"/media-tempo-resposta/")+sessionStorage.ID;m.Z.get(t,x).then((function(a){if(0===a.data)return o("Sem dados"),void p(!1);var e=a.data,t=Math.floor(e/60),n=(e=e%60,Math.floor(t/24)),s="";n>0&&(s+=1==n?n+" dia ":n+" dias "),(t=t%24)>0&&(s+=1==t?t+" hora ":t+" horas "),e>0&&(s+=1==e?e+" minuto ":e+" minutos "),p(!1),o(s)}))}())}),[a.periodo]),l?(0,f.jsx)(u.Z,{className:"kpi-item",children:(0,f.jsx)(d.Z,{style:{color:"#16B364"}})}):(0,f.jsxs)(u.Z,{className:"kpi-item",children:[(0,f.jsx)(h.Z,{className:"kpi-titulo",children:a.titulo}),(0,f.jsx)(h.Z,{className:"kpi-valor",children:n})]})},x=t(9281),Z=t(9836),g=t(6890),v=t(5855),j=t(3994),b=t(3382),N=t(68);var S=function(a){return(0,f.jsxs)(v.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,f.jsx)(j.Z,{component:"th",scope:"row",align:"center",children:(0,f.jsx)(N.Z,{title:a.item.nomeInstrumento,placement:"right",children:(0,f.jsx)(h.Z,{children:a.item.nomeInstrumento})})}),(0,f.jsx)(j.Z,{align:"center",children:(0,f.jsx)(h.Z,{variant:"subtitle1",children:a.item.quantidadeAulas})}),(0,f.jsx)(j.Z,{align:"center",children:(0,f.jsxs)(h.Z,{variant:"subtitle1",children:["R$ ",a.item.rendimentoTotal]})})]},a.item.idInstrumento)};var C=function(a){var e=(0,r.useState)(!0),t=(0,s.Z)(e,2),n=t[0],o=t[1],i={headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}},l=(0,r.useState)([]),p=(0,s.Z)(l,2),N=p[0],C=p[1];return(0,r.useEffect)((function(){console.log(a.periodo),0===a.periodo?m.Z.get("/professores/dashboard/minhas-aulas-mes/"+sessionStorage.ID,i).then((function(a){console.log(a.data),o(!1),C(a.data)})).catch((function(a){console.log(a)})):m.Z.get("/professores/dashboard/minhas-aulas-ano/"+sessionStorage.ID,i).then((function(a){console.log(a.data),o(!1),C(a.data)})).catch((function(a){console.log(a)}))}),[a.periodo]),(0,f.jsxs)(u.Z,{className:"card-tabela",children:[(0,f.jsx)(h.Z,{className:"chart-title",variant:"h5",children:"Minhas aulas"}),(0,f.jsx)(c.Z,{className:"chart-instrumentos-container",children:(0,f.jsx)(x.Z,{sx:{width:"99%",maxHeight:" !important"},children:(0,f.jsxs)(Z.Z,{"aria-label":"simple table",children:[(0,f.jsx)(g.Z,{children:(0,f.jsxs)(v.Z,{children:[(0,f.jsx)(j.Z,{align:"center",children:"Instrumento"}),(0,f.jsx)(j.Z,{align:"center",children:"Quantidade Aulas"}),(0,f.jsx)(j.Z,{align:"center",children:"Rendimento total"})]})}),(0,f.jsx)(b.Z,{children:n||0!==N.length?n?(0,f.jsx)(d.Z,{style:{color:"#16B364"}}):N?N.map((function(a){return(0,f.jsx)(S,{item:a})})):(0,f.jsx)(f.Fragment,{}):(0,f.jsx)(v.Z,{children:(0,f.jsx)(j.Z,{align:"center",colSpan:3,children:"Nenhuma aula encontrada"})})})]})})})]})},I=t(3623),k=t(5967);k.kL.register(k.De,k.Dx,k.uw,k.f$,k.ZL,k.u,k.qi);var E=function(){var a=(0,r.useState)(0),e=(0,s.Z)(a,2),t=e[0],n=e[1],o=(0,r.useState)(0),i=(0,s.Z)(o,2),l=i[0],p=i[1],x=(0,r.useState)(0),Z=(0,s.Z)(x,2),g=Z[0],v=Z[1],j=(0,r.useState)(!0),b=(0,s.Z)(j,2),N=b[0],S=b[1];(0,r.useEffect)((function(){m.Z.get("/professores/dashboard/grafico/aulas-realizadas-mes-atual/"+sessionStorage.ID,C).then((function(a){p(a.data.aulasRealizadas),n(a.data.aulasCanceladas),v(a.data.aulasRecusadas),S(!1)}))}),[]);var C={headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}},k={labels:["Canceladas","Realizadas","Recusadas"],datasets:[{label:"Quantidade de aulas",data:[t,l,g],backgroundColor:["#DF3939","#39DF73","#0263FF"],cutout:"80%",hoverOffset:4}]};return N?(0,f.jsxs)(u.Z,{className:"chart-card",children:[(0,f.jsx)(h.Z,{className:"chart-title",variant:"h5",children:"Aulas nesse m\xeas"}),(0,f.jsx)(c.Z,{className:"chart-info-container",children:(0,f.jsx)(c.Z,{className:"chart-container",children:(0,f.jsx)(d.Z,{style:{color:"#16B364"}})})})]}):(console.log(t,l,g),0===t&&0===l&&0===g?(0,f.jsxs)(u.Z,{className:"chart-card",children:[(0,f.jsx)(h.Z,{className:"chart-title",variant:"h5",children:"Aulas nesse m\xeas"}),(0,f.jsx)(c.Z,{className:"chart-info-container",children:(0,f.jsx)(c.Z,{className:"chart-container",children:(0,f.jsx)(h.Z,{variant:"h6",className:"chart-info",children:"Nenhuma aula nesse m\xeas"})})})]}):(0,f.jsxs)(u.Z,{className:"chart-card",children:[(0,f.jsx)(h.Z,{className:"chart-title",variant:"h5",children:"Aulas nesse m\xeas"}),(0,f.jsx)(c.Z,{className:"chart-info-container",children:(0,f.jsx)(I.$I,{options:{responsive:!0,plugins:{legend:{display:!0,position:"right"},title:{display:!1}}},data:k})})]}))};var D=function(){k.kL.register(k.uw,k.f$,k.ZL,k.Dx,k.u,k.De);var a=(0,r.useState)(!0),e=(0,s.Z)(a,2),t=e[0],n=e[1],o=(0,r.useState)([]),i=(0,s.Z)(o,2),c=i[0],l=i[1],d=(0,r.useState)([]),p=(0,s.Z)(d,2),x=p[0],Z=p[1],g=(0,r.useState)([]),v=(0,s.Z)(g,2),j=v[0],b=v[1],N=(0,r.useState)([]),S=(0,s.Z)(N,2),C=S[0],E=S[1];(0,r.useEffect)((function(){m.Z.get("/professores/dashboard/dados-aulas-anual/"+sessionStorage.ID,D).then((function(a){var e=[],t=[],s=[],r=[];a.data.map((function(a){e.push(a.mes),t.push(a.aulasCanceladas),r.push(a.aulasConcluidas),s.push(a.aulasRecusadas)})),l(e),Z(t),E(r),b(s),n(!1)})).catch((function(a){console.log(a)}))}),[]);var D={headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}},A={labels:c,datasets:[{label:"Aulas Canceladas",data:x,backgroundColor:"#DF3939"},{label:"Aulas Recusadas",data:j,backgroundColor:"rgb(75, 192, 192)"},{label:"Aulas Conclu\xeddas",data:C,backgroundColor:"rgb(53, 162, 235)"}]};return(0,f.jsxs)(u.Z,{className:"card-tabela",children:[(0,f.jsx)(h.Z,{className:"chart-title",variant:"h5",children:"Aulas por m\xeas"}),t?(0,f.jsx)("p",{children:"Carregando..."}):(0,f.jsx)(I.$Q,{options:{plugins:{title:{display:!1,text:"Chart.js Bar Chart - Stacked"},legends:{display:!0},pointStyle:"circle"},responsive:!0,scales:{x:{grid:{display:!1},stacked:!0},y:{stacked:!0}}},data:A})]})},A=t(2703),T=t(7689);var w=function(){var a=r.useState(0),e=(0,s.Z)(a,2),t=e[0],u=e[1];function d(a){return{id:"simple-tab-".concat(a),className:"dashboard-professor-tabs-item","aria-controls":"simple-tabpanel-".concat(a)}}var h=(0,T.s0)();(0,r.useEffect)((function(){(0,A.Wi)()&&h(-1)}),[]);var m="Vis\xe3o Geral - ".concat((new Date).getFullYear());return(0,f.jsxs)(l.Z,{tela:"dashboard",children:[(0,f.jsxs)(o.Z,{value:t,onChange:function(a,e){u(e)},"aria-label":"tabs",className:"dashboard-professor-tabs",children:[(0,f.jsx)(i.Z,(0,n.Z)({label:"Vis\xe3o Mensal",className:"tab_dash"},d(0))),(0,f.jsx)(i.Z,(0,n.Z)({label:m,className:"tab_dash"},d(1)))]}),(0,f.jsx)(c.Z,{className:"pagina-container-dash",children:0===t?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.Z,{className:"kpi-container",children:[(0,f.jsx)(p,{titulo:"Rendimento total",periodo:t}),(0,f.jsx)(p,{titulo:"Quantidade de alunos",periodo:t}),(0,f.jsx)(p,{titulo:"Quantidade de aulas",periodo:t}),(0,f.jsx)(p,{titulo:"Tempo de resposta",periodo:t})]}),(0,f.jsxs)(c.Z,{className:"charts-container",children:[(0,f.jsx)(E,{}),(0,f.jsx)(C,{periodo:t})]})]}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c.Z,{className:"kpi-container",children:[(0,f.jsx)(p,{titulo:"Rendimento total"}),(0,f.jsx)(p,{titulo:"Quantidade de alunos"}),(0,f.jsx)(p,{titulo:"Quantidade de aulas"}),(0,f.jsx)(p,{titulo:"Tempo de resposta"})]}),(0,f.jsxs)(c.Z,{className:"charts-container",children:[(0,f.jsx)(D,{}),(0,f.jsx)(C,{periodo:t})]})]})})]})}},1659:function(a,e,t){t.d(e,{db:function(){return r},t:function(){return o}});var n=t(3897),s=(t(2806),t(5778),n.Z.initializeApp({apiKey:"AIzaSyBlrwBDwFdwkutdVO2Ilg6KUPnFFwKWD2k",authDomain:"chat-harmonyo.firebaseapp.com",projectId:"chat-harmonyo",storageBucket:"chat-harmonyo.appspot.com",messagingSenderId:"295019787606",appId:"1:295019787606:web:eb01ac75f11c05b72d92f7",measurementId:"G-2K9ZW7N0C1"})),r=s.firestore(),o=s.storage("gs://chat-harmonyo.appspot.com/")},2703:function(a,e,t){t.d(e,{Wi:function(){return o},Y8:function(){return i},mA:function(){return c}});var n=t(4165),s=t(5861),r=t(1243);function o(){var a=sessionStorage.TOKEN;return(null===a||""===a||a.length<186)&&(sessionStorage.TOKEN="",!0)}function i(a){var e=(a=a.split("/"))[0],t=a[1],n=a[2];return e<1||e>31?{error:!0,helperText:"Dia inv\xe1lido"}:t<1||t>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:n<1900||n>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(n,t-1,e)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function c(a){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,n.Z)().mark((function a(e){var t;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t={},a.next=3,r.Z.get("https://viacep.com.br/ws/".concat(e,"/json/")).then((function(a){t=a.data.erro?null:a.data})).catch((function(a){console.log(a)}));case 3:return console.log("Resposta:"),console.log(t),a.abrupt("return",t);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=444.98c8e938.chunk.js.map