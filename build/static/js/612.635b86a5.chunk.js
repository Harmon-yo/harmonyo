"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[612,870,7],{1687:function(a,e,r){var o=r(1243).Z.create({baseURL:"http://".concat("44.218.142.250",":8080")});e.Z=o},3345:function(a,e,r){var o=r(9439),n=r(3044),s=r(2791),i=r(1659),t=r(184);function c(a,e){var r=a.id,c=a.nome,l=(0,s.useState)(""),u=(0,o.Z)(l,2),d=u[0],m=u[1],f=(0,s.useState)(!1),h=(0,o.Z)(f,2),p=(h[0],h[1]),x=(0,s.useState)(!1),v=(0,o.Z)(x,2),Z=v[0],g=v[1];(0,s.useImperativeHandle)(e,(function(){return{getImgPerfilURL:function(){return d}}}),[d]);var j=function(a){var e="/imgs-perfil-usuario/".concat(a,"_ft_perfil");i.t.ref(e).getDownloadURL().then((function(a){m(a),p(!0)})).catch((function(){g(!0)}))};(0,s.useEffect)((function(){a.naoCarregar&&(a.imgUrl?m(a.imgUrl):j(r))}),[]),(0,s.useEffect)((function(){a.imgUrl?(m(a.imgUrl),g(!1)):j(r)}),[a.recarregarImg]);var N=Z?"#099250":"#eeeeee",b=a.sx?a.sx:{};return b.bgcolor=N,Z?(0,t.jsx)(n.Z,{className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:Z?c.charAt(0):""}):(0,t.jsx)(n.Z,{src:Z?null:d,className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:Z?c.charAt(0):""})}e.Z=(0,s.forwardRef)(c)},9084:function(a,e,r){r.d(e,{Z:function(){return s}});r(2791);var o=r(4554),n=r(184);var s=function(a){return(0,n.jsx)(o.Z,{className:"card ".concat(a.className),sx:a.sx,id:a.id,onClick:a.onClick,children:a.children})}},4056:function(a,e,r){r.d(e,{Z:function(){return G}});var o=r(9439),n=r(2791),s=r(4554),i=r(6151),t=r(9284),c=r(9310),l=r(2125),u=r(6630),d=r(9230),m=r(3709),f=r(13),h=r(2167),p=r(297),x=r(533),v=r(890),Z=r(184);var g=function(a){return(0,Z.jsx)(x.Z,{className:"navbar-lateral-card-container",href:a.href,underline:"none",children:(0,Z.jsxs)(s.Z,{className:"navbar-lateral-card ".concat(a.active?"active":"not-active"),children:[a.hover?(0,Z.jsx)(a.icon,{className:"navbar-lateral-card-img-hover"}):(0,Z.jsx)(a.icon,{className:"navbar-lateral-card-img"}),a.hover?(0,Z.jsx)(v.Z,{className:"navbar-lateral-card-texto",children:a.titulo}):""]})})},j=r(1687);var N=function(a){var e=n.useState(!1),r=(0,o.Z)(e,2),x=r[0],v=r[1],j=sessionStorage.getItem("CATEGORIA").toLocaleLowerCase(),N={professor:[{titulo:"Dashboard",icon:c.Z,active:"dashboard"===a.tela,href:"/dashboard-professor"},{titulo:"Agenda",icon:l.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:u.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:d.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Aulas",icon:m.Z,active:"aulas"===a.tela,href:"/aulas"},{titulo:"Feedbacks",icon:f.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],aluno:[{titulo:"Encontrar",icon:h.Z,active:"encontrar"===a.tela,href:"/encontrar-professor"},{titulo:"Agenda",icon:l.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:u.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:d.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Feedbacks",icon:f.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],administrador:[{titulo:"Dashboard",icon:c.Z,active:"dashboard"===a.tela,href:"/dashboard-administrador"}]};return(0,Z.jsx)(s.Z,{className:"navbar-lateral-background",children:(0,Z.jsxs)(s.Z,{className:"navbar-lateral",onMouseEnter:function(){return setTimeout((function(){return v(!0)}),50)},onMouseLeave:function(){return setTimeout((function(){return v(!1)}),150)},children:[(0,Z.jsxs)("a",{href:"/",className:"navbar-lateral-logo-container",children:[(0,Z.jsx)(t.Z,{icon:!0,white:!0,height:"40px",className:"navbar-lateral-logo ".concat(x?"hidden":"")}),(0,Z.jsx)(t.Z,{white:!0,width:"200px",className:"navbar-lateral-logo ".concat(x?"":"hidden")})]}),(0,Z.jsxs)(s.Z,{className:"navbar-lateral-cards",children:[N[j].map((function(a){return(0,Z.jsx)(g,{href:a.href,titulo:a.titulo,icon:a.icon,active:a.active,hover:x},"opcao-navbar-".concat(a.titulo))})),"administrador"===j?(0,Z.jsxs)(i.Z,{onClick:function(){fetch("http://localhost:8080/professores/download-csv",{method:"GET",responseType:"blob",headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){return a.blob()})).then((function(a){var e=window.URL.createObjectURL(a),r=document.createElement("a");r.href=e,r.download="data.csv",r.click(),window.URL.revokeObjectURL(e)})).catch((function(a){console.error("Erro:",a)}))},color:"primary",className:"button-export",children:[" ",(0,Z.jsx)(p.Z,{className:"export-logo "})," ",(0,Z.jsx)("h4",{className:"export-logo ".concat(x?"":"hidden"),children:" Exporta\xe7\xe3o dados prof."})," "]}):""]})]})})},b=r(2),C=r(3021),S=r(3786),k=r.p+"static/media/business-proposal.0fb9562397d64134bfe0.png",E=r(5117);var I=function(a){return(0,Z.jsx)(E.Z,{id:a.menuId,anchorEl:a.anchorEl,open:a.open,onClose:a.handleClose,MenuListProps:{"aria-labelledby":a.buttonClassName},children:a.children})},P=r(2426),y=r.n(P),w=(r(827),function(a,e){return j.Z.put(a,e,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})});var A=function(a){var e=sessionStorage.getItem("ID"),r=(0,n.useState)(0),i=(0,o.Z)(r,2),t=i[0],c=i[1],l=(0,n.useState)([]),u=(0,o.Z)(l,2),d=u[0],m=u[1],f=(0,n.useState)(0),h=(0,o.Z)(f,2),p=h[0],x=h[1],g=(0,n.useState)(null),N=(0,o.Z)(g,2),E=N[0],P=N[1],A=!!E,T=function(){var a;(a="/notificacoes/usuario/".concat(sessionStorage.ID),j.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})).then((function(a){var e=a.data,r=e.content;console.log("Recebi a notificacao: "),console.log(r),204!==a.status?(r.forEach((function(a){a.tempo=y()(a.data).fromNow(),a.src=k})),c(e.totalPages),m(r),x(r.filter((function(a){return!a.lida})).length)):m([])})).catch((function(a){console.log(a)}))};return(0,n.useEffect)((function(){T()}),[]),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(C.Z,{id:"notificacao-botao",className:"container-usuario-notificacao",color:"primary",badgeContent:p,"aria-controls":A?"notificacao-menu":void 0,"aria-haspopup":"true","aria-expanded":A?"true":void 0,onClick:function(a){P(a.currentTarget)},children:(0,Z.jsx)(b.Z,{})}),(0,Z.jsxs)(I,{menuId:"notificacao-menu",buttonClassName:"notificacao-botao",anchorEl:E,open:A,handleClose:function(){P(null)},className:"notificacao-card",children:[(0,Z.jsxs)(s.Z,{className:"notificacao-menu-container-title",children:[(0,Z.jsx)(v.Z,{className:"notificacao-menu-title",children:"Notifica\xe7\xf5es"}),p>0?(0,Z.jsx)(v.Z,{className:"notificacao-menu-lido",onClick:function(){w("/notificacoes/lida-usuario/".concat(e),{}).then((function(a){200===a.status&&(d.forEach((function(a){a.lida=!0})),m(d),x(0))})).catch((function(a){console.log(a)}))},children:"Marcar como visto"}):""]}),d.map((function(a){return(0,Z.jsxs)(S.Z,{className:"notificacao-menu-item",onClick:function(){var e;e=a.id,w("/notificacoes/lida/".concat(e),{}).then((function(a){200===a.status&&(alert("Lendo a notificacao com id: "+e),d.forEach((function(a){a.id===e&&(a.lida=!0)})),m(d),p>0&&x(p-1))})).catch((function(a){console.log(a)}))},sx:{backgroundColor:a.lido?"var(--notificacao-nao-lida)":"var(--notificacao-lida)"},children:[(0,Z.jsxs)(s.Z,{className:"notificacao-menu-item-info-container",children:[(0,Z.jsx)("img",{src:a.src,className:"notificacao-menu-item-img",alt:""}),(0,Z.jsx)(v.Z,{className:"notificacao-menu-item-titulo",children:a.titulo})]}),(0,Z.jsx)(s.Z,{className:"notificacao-menu-item-container-tempo",children:(0,Z.jsx)(v.Z,{className:"notificacao-menu-item-tempo",children:a.tempo})})]},a.id)})),t>1?(0,Z.jsx)(s.Z,{sx:{width:"100%",height:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(v.Z,{className:"notificacao-menu-lido",children:"Mostrar Todos"})}):""]})]})},T=r.p+"static/media/user.05d0404ad8a0ab5bdefa.png",M=r.p+"static/media/logout.0becdbc391b7088ace83.png",z=r(7689),D=r(3345),R=[{id:1,src:T,titulo:"Meu Perfil",url:"/perfil"},{id:3,src:M,titulo:"Sair",url:"/"}],L=sessionStorage.getItem("NOME");var O=function(a){var e=(0,z.s0)(),r=n.useState(null),i=(0,o.Z)(r,2),t=i[0],c=i[1],l=Boolean(t),u=function(a){c(null),e(a.url)};return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(D.Z,{id:sessionStorage.getItem("ID"),nome:L,className:"avatar-usuario-img",onClick:function(a){c(a.currentTarget)},ariaControls:l?"avatar-usuario-menu":void 0,ariaHaspopup:"true",ariaExpanded:l?"true":void 0,recarregarImg:a.recarregarTodasImgs}),(0,Z.jsxs)(I,{menuId:"avatar-usuario-menu",buttonClassName:"avatar-usuario-botao",anchorEl:t,open:l,handleClose:u,children:[(0,Z.jsxs)(s.Z,{className:"avatar-usuario-menu-user-info",children:[(0,Z.jsx)(D.Z,{id:sessionStorage.getItem("ID"),className:"avatar-usuario-img",nome:L}),(0,Z.jsxs)(s.Z,{className:"avatar-usuario-menu-user-info-text",children:[(0,Z.jsx)(v.Z,{className:"avatar-usuario-menu-nome",children:L}),(0,Z.jsx)(v.Z,{className:"avatar-usuario-menu-email",children:sessionStorage.getItem("EMAIL")})]})]}),(0,Z.jsx)(s.Z,{className:"opcoes-container",children:R.map((function(a){return(0,Z.jsxs)(S.Z,{className:"avatar-usuario-menu-item",onClick:function(){return u(a)},children:[(0,Z.jsx)("img",{src:a.src,className:"avatar-usuario-menu-item-img",alt:""}),(0,Z.jsx)(v.Z,{className:"avatar-usuario-menu-item-titulo",children:a.titulo})]},a.id)}))})]})]})};var K=function(a){return(0,Z.jsxs)(s.Z,{className:"container-usuario",children:[(0,Z.jsx)(A,{}),(0,Z.jsx)(O,{recarregarTodasImgs:a.recarregarTodasImgs})]})},U=r(4070),F=r(3400),B=r(3503),q=r(6739);var G=function(a){var e=(0,n.useState)([]),r=(0,o.Z)(e,2),i=r[0],t=r[1],c=a.avisosState,l=(0,n.useState)(!1),u=(0,o.Z)(l,2),d=(u[0],u[1]),m=a.recarregarTodasImgs,f=(0,n.useState)(!1),h=(0,o.Z)(f,2),p=h[0],x=h[1],v=a.carregarPaginaForcado;return(0,n.useEffect)((function(){c&&t(c.avisos)}),[c]),(0,n.useEffect)((function(){m&&d(m)}),[m]),(0,n.useEffect)((function(){x(v||!0)}),[v]),(0,Z.jsxs)(s.Z,{className:"mui-root",children:[(0,Z.jsx)(s.Z,{className:"erro-container",children:i&&i.map((function(a,e){return function(a,e,r,o){var n;"erro"===a.tipo&&(n=U.Z);return(0,Z.jsx)(n,{severity:"error",action:(0,Z.jsx)(F.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return e(r.filter((function(a,e){return e!==o})))},children:(0,Z.jsx)(q.Z,{fontSize:"inherit"})}),sx:{zIndex:1e3},children:a.mensagem},o)}(a,c.setAvisos,c.avisos,e)}))}),(0,Z.jsx)(N,{tela:a.tela}),(0,Z.jsxs)(s.Z,{className:"pagina-padrao-container",children:[(0,Z.jsx)(K,{recarregarTodasImgs:m}),p?a.children:(0,Z.jsx)(B.Z,{})]})]})}},978:function(a,e,r){r.r(e),r.d(e,{default:function(){return F}});var o=r(4942),n=r(1413),s=r(3433),i=r(9439),t=r(2791),c=r(7689),l=r(4554),u=r(4056),d=r(3239),m=r(890),f=r(9084),h=r(68),p=r(3345),x=r(7130),v=r(7267),Z=r(184);var g=function(a){return(0,Z.jsxs)(l.Z,{className:"professor-popular-card",onClick:a.onClick,children:[(0,Z.jsxs)(l.Z,{className:"card-info-usuario",children:[(0,Z.jsx)(p.Z,{id:a.id,nome:a.nome,className:"avatar-usuario-img"}),(0,Z.jsx)(l.Z,{className:"card-nome-container",children:(0,Z.jsx)(h.Z,{title:a.nome,placement:"right",children:(0,Z.jsx)(m.Z,{className:"card-info-nome",noWrap:!0,children:a.nome})})})]}),(0,Z.jsxs)(l.Z,{className:"card-info-avaliacao",children:[(0,Z.jsx)(x.Z,{className:"card-avaliacao-icon"}),(0,Z.jsx)(m.Z,{className:"card-avaliacao-valor",children:a.avaliacao}),(0,Z.jsx)(v.Z,{className:"card-info-separacao"}),(0,Z.jsx)(l.Z,{className:"card-cidade-container",children:(0,Z.jsx)(h.Z,{title:a.localizacao,placement:"right",children:(0,Z.jsx)(m.Z,{className:"card-cidade",variant:"subtitle2",noWrap:!0,children:a.localizacao})})})]})]},"popular-".concat(a.id))},j=r(1687);var N=function(a){return(0,Z.jsxs)(l.Z,{className:"professores-populares-container",children:[(0,Z.jsx)(l.Z,{className:"professor-populares-container-titulo",children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",children:"Popular"})}),a.isCarregando?(0,Z.jsx)(d.Z,{color:"success"}):(0,Z.jsx)(f.Z,{className:"professores-populares-card",children:a.professores.map((function(e,r){return(0,Z.jsx)(g,{id:e.id,nome:e.nome,instrumentos:e.instrumentos,localizacao:e.localizacao,avaliacao:e.mediaAvaliacao,onClick:function(){return a.onClick(e)}},r)}))})]})},b=r(8316),C=r(1588);var S=function(a){return(0,Z.jsxs)(f.Z,{className:"professor-card",onClick:a.onClick,children:[(0,Z.jsx)(l.Z,{className:"professor-card-primeira-parte",children:(0,Z.jsx)(p.Z,{id:a.id,nome:a.nome})}),(0,Z.jsxs)(l.Z,{className:"professor-card-segunda-parte",children:[(0,Z.jsx)(m.Z,{variant:"h5",className:"professor-nome-texto",children:a.nome}),(0,Z.jsxs)(l.Z,{className:"professor-informacoes-adicionais-container",children:[(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.idade," anos")}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.bairro)}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.cidade)}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.distancia," Km")}),"-",(0,Z.jsx)(m.Z,{className:"professor-preco-texto",children:"R$ ".concat(a.precoMinimo,"~R$").concat(a.precoMaximo)})]}),(0,Z.jsxs)(l.Z,{className:"professor-avaliacao-localizacao-container",children:[(0,Z.jsx)(b.Z,{name:"half-rating-read",defaultValue:a.avaliacao,precision:.5,readOnly:!0}),(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professores-avaliacao-texto",children:a.avaliacao}),(0,Z.jsxs)(l.Z,{className:"professor-localizacao",children:[(0,Z.jsx)(C.Z,{className:"professor-localizacao-texto"}),(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professor-localizacao-texto",children:"".concat(a.cidade," - ").concat(a.estado)})]})]}),(0,Z.jsx)(l.Z,{className:"professor-instrumentos-container",children:a.instrumentos.map((function(a,e){return(0,Z.jsx)(f.Z,{className:"professor-instrumentos-card",children:(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professor-instrumentos-card-texto",children:a.nome})},e)}))})]})]},"resumido-".concat(a.id))};var k=function(a){return(0,c.s0)(),(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",children:"Professores"})}),a.isCarregando?(0,Z.jsx)(d.Z,{color:"success"}):(0,Z.jsx)(f.Z,{className:"professores-cards",children:a.professores.map((function(e,r){return(0,Z.jsx)(S,{onClick:function(){return a.onClick(e)},id:e.id,nome:e.nome,instrumentos:e.instrumentos,idade:e.idade,bairro:e.bairro,distancia:e.distancia,precoMinimo:e.valorMinimo,precoMaximo:e.valorMaximo,descricao:e.descricao,avaliacao:e.mediaAvaliacao,cidade:e.cidade,estado:e.estado},r)}))})]})},E=r(8559),I=r.n(E),P=r.p+"static/media/user-map-marker.3985e39e25b4a574b73a.png";new(I().Icon)({iconUrl:P,iconRetinaUrl:P,iconSize:new(I().Point)(60,60),className:"leaflet-div-icon"});var y=r(5332),w=r(9709);var A=function(a){var e=(0,t.useState)({minimo:0,maximo:0,valor:[0,0]}),r=(0,i.Z)(e,2),o=r[0],s=r[1],c=a.adicionarCarregamento,u=a.adicionarParametro,d=(0,t.useState)({minimo:0,maximo:0,valor:[0,0]}),h=(0,i.Z)(d,2),p=h[0],x=h[1],v=(0,t.useState)(5),g=(0,i.Z)(v,2),j=g[0],N=g[1];return(0,t.useEffect)((function(){a.requisicaoGet("/usuarios/filtro-minimo-maximo").then((function(a){var e=a.data.precoMinimo,r=a.data.precoMaximo,o=a.data.distanciaMinima,n=a.data.distanciaMaxima;s({minimo:e,maximo:r,valor:[e,r]}),x({minimo:o,maximo:n,valor:[o,n]}),u("preco",[e,r],"><"),u("distancia",[o,n],"><"),c(!0)})).catch((function(){a.exibirErro("Erro ao carregar valores do filtro."),c(!1)}))}),[]),(0,Z.jsxs)(f.Z,{className:"filtro-card",children:[(0,Z.jsx)(l.Z,{className:"filtro-card-titulo",children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",sx:{marginBottom:"0 !important"},children:"Filtro"})}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Pre\xe7o"}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(y.ZP,{size:"small",getAriaLabel:function(){return"Pre\xe7o m\xednimo"},value:o.valor,onChange:function(a,e,r){!Array.isArray(e)||0===o.minimo&&0===o.maximo||s(0===r?function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[Math.min(e[0],o.valor[1]-1),o.valor[1]]})}:function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[o.valor[0],Math.max(e[1],o.valor[0]+1)]})})},valueLabelDisplay:"auto",getAriaValueText:function(a){return"R$ ".concat(a)},disableSwap:!0,min:o.minimo,max:o.maximo,sx:{color:"black",marginBottom:"4px"}}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-min-max-container",children:[(0,Z.jsxs)(m.Z,{className:"filtro-slider-minimo",variant:"subtitle2",children:["R$ ",o.minimo]}),(0,Z.jsxs)(m.Z,{className:"filtro-slider-maximo",variant:"subtitle2",children:["R$ ",o.maximo]})]})]})]}),(0,Z.jsxs)(l.Z,{className:"filtro-avaliacao-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Avalia\xe7\xe3o"}),(0,Z.jsxs)(l.Z,{className:"filtro-avaliacao-rating-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-avaliacao-texto",children:j}),(0,Z.jsx)(b.Z,{name:"half-rating",value:j,defaultValue:5,precision:.5,onChange:function(a,e){N(e)}})]})]}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Dist\xe2ncia"}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(y.ZP,{size:"small",getAriaLabel:function(){return"Dist\xe2ncia m\xednima"},value:p.valor,onChange:function(a,e,r){!Array.isArray(e)||0===p.minimo&&0===p.maximo||x(0===r?function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[Math.min(e[0],p.valor[1]-1),p.valor[1]]})}:function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[p.valor[0],Math.max(e[1],p.valor[0]+1)]})})},valueLabelDisplay:"auto",getAriaValueText:function(a){return"".concat(a," Km")},disableSwap:!0,min:p.minimo,max:p.maximo,sx:{color:"black",marginBottom:"4px"}}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-min-max-container",children:[(0,Z.jsxs)(m.Z,{className:"filtro-slider-minimo",variant:"subtitle2",children:[p.minimo," Km"]}),(0,Z.jsxs)(m.Z,{className:"filtro-slider-maximo",variant:"subtitle2",children:[p.maximo," Km"]})]})]})]}),(0,Z.jsx)(w.Z,{loading:a.isCarregando,onClick:function(){u("preco",o.valor,"><"),u("distancia",p.valor,"><"),u("avaliacao",j,">:")},className:"filtro-botao",children:(0,Z.jsx)(m.Z,{className:"loading-text",children:"Filtrar"})})]})},T=r(5403),M=r(8096),z=r(8406),D=r(3786),R=r(3006),L=r(3466);var O=function(a){var e=t.useState(""),r=(0,i.Z)(e,2),o=r[0],n=r[1],s=t.useState([]),c=(0,i.Z)(s,2),u=c[0],d=c[1],p=a.setProfessoresFiltrados,x=a.adicionarParametro,v=t.useState(""),g=(0,i.Z)(v,2),j=g[0],N=g[1];return(0,t.useEffect)((function(){a.requisicaoGet("/enderecos/cidades").then((function(e){var r=e.data;r.length>0?(d(r),n(r[0]),x("cidade",r[0],":"),a.adicionarCarregamento(!0)):0==r.length&&(n("?"),a.adicionarCarregamento(!1))})).catch((function(){a.exibirErro("Erro ao carregar cidades cadastradas."),a.adicionarCarregamento(!1)}))}),[]),(0,Z.jsxs)(f.Z,{className:"professores-busca-card",children:[(0,Z.jsxs)(l.Z,{className:"professores-busca-lugar",children:[(0,Z.jsx)(C.Z,{}),(0,Z.jsx)(M.Z,{sx:{width:"70%"},children:(0,Z.jsx)(z.Z,{labelId:"demo-simple-select-label",id:"select-cidade",value:o,renderValue:function(a){return(0,Z.jsx)(h.Z,{title:a,placement:"right",children:(0,Z.jsx)(m.Z,{className:"professores-busca-lugar-nome",children:a.length>13?a.substring(0,13)+"...":a})})},label:"",onChange:function(a){n(a.target.value),x("cidade",a.target.value,":")},SelectProps:{IconComponent:function(){return null}},sx:{"& .MuiSelect-select":{padding:0,display:"flex",alignItems:"center",fontWeight:"700 !important"}},children:u.map((function(a){return(0,Z.jsx)(D.Z,{value:a,children:a})}))})})]}),(0,Z.jsx)(l.Z,{className:"professores-busca-campo",children:(0,Z.jsx)(R.Z,{className:"busca-campo-input",value:j,onKeyUp:function(e){if(e.preventDefault(),"Enter"===e.key){var r=j.replace("*","").replace("~",""),n="nome~*".concat(r,"*,instrumentos~*").concat(r,"*,cidade:").concat(o);a.requisicaoGet("/professores/busca?params=".concat(n)).then((function(a){200===a.status?(console.log("Professores encontrados: "+a.data.length),console.log(a.data),p(a.data)):(console.log("Nenhum professor encontrado."),p([]))}))}},onChange:function(a){a.preventDefault(),N(a.target.value)},placeholder:"Buscar",InputProps:{endAdornment:(0,Z.jsx)(L.Z,{children:(0,Z.jsx)(T.Z,{})}),readOnly:a.isCarregando}})})]})},K=r(2703);function U(a){var e,r,o,n="";console.log("Iniciando Filtragem dos parametros..."),console.log("Valores para serem filtrados: "),console.log(a);var s=Object.keys(a);for(var i in a)if(e=a[i].valor,r=a[i].operacao,"disponibilidade"!==i){if(Array.isArray(e)){n+="".concat(i).concat(r).concat(e[0]),o=a[i].orPredicate?";":"-";for(var t=1;t<e.length;t++)n+="".concat(o).concat(e[t])}else n+="".concat(i).concat(r).concat(e);s.indexOf(i)<s.length-1&&(n+=",")}return console.log("Filtragem dos parametros finalizada! Novo valor: "+n),n}var F=function(a){var e=(0,t.useState)([]),r=(0,i.Z)(e,2),d=r[0],m=r[1],f=(0,t.useState)({}),h=(0,i.Z)(f,2),p=h[0],x=h[1],v=(0,t.useMemo)((function(){return[U(p)]}),[p]),g=(0,t.useState)([]),b=(0,i.Z)(g,2),C=b[0],S=b[1],E=(0,t.useState)([]),I=(0,i.Z)(E,2),P=I[0],y=I[1],w=(0,t.useState)([]),T=(0,i.Z)(w,2),M=T[0],z=T[1],D=!M.every((function(a){return!0===a})),R=(0,t.useState)(!1),L=(0,i.Z)(R,2),F=L[0],B=L[1],q=function(a){z((function(e){return[].concat((0,s.Z)(e),[a])}))},G=function(a,e,r){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object.keys(p).includes(a),x((function(i){return(0,n.Z)((0,n.Z)({},i),{},(0,o.Z)({},a,{valor:e,operacao:r,orPredicate:s}))}))},V=(0,c.s0)(),W=function(a){return j.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},$=function(a){return m((function(e){return[].concat((0,s.Z)(e),[a])}))};(0,t.useEffect)((function(){(0,K.Wi)()&&V(-1)}),[]),(0,t.useEffect)((function(){0!==v.length&&(console.log("Pesquisando professores..."),H())}),[v]);var H=function(){y([]),S([]),Promise.all([W("/professores/busca".concat(v?"?params=".concat(v):"")),W("/professores/populares")]).then((function(a){console.log("Responses Professores:"),console.log(a);var e=a[0].data,r=a[1].data;null==e?$("Erro ao carregar professores filtrados."):null==r?$("Erro ao carregar professores populares."):(204===a[0].status?($("Nenhum professor encontrado."),y([])):y(e),204===a[1].status?($("Nenhum professor encontrado."),S([])):S(r))}))},Y=function(a){console.log("Testado"),V("/exibicao-perfil?id=".concat(a.id))};return(0,Z.jsx)(u.Z,{tela:"encontrar",errosState:{erros:d,setErros:m},children:(0,Z.jsxs)(l.Z,{className:"pagina-container",children:[(0,Z.jsx)(A,{isCarregando:D,requisicaoGet:W,iniciarPesquisaState:{iniciarPesquisa:F,setIniciarPesquisa:B},adicionarCarregamento:q,adicionarParametro:G,exibirErro:$}),(0,Z.jsxs)(l.Z,{className:"encontrar-professor-conteudo",children:[(0,Z.jsx)(O,{requisicaoGet:W,isCarregando:D,iniciarPesquisaState:{setIniciarPesquisa:B},adicionarCarregamento:q,adicionarParametro:G,exibirErro:$,setProfessoresFiltrados:y}),(0,Z.jsx)(N,{professores:C,isCarregando:D,onClick:Y}),(0,Z.jsx)(k,{professores:P,isCarregando:D,onClick:Y})]})]})})}},1659:function(a,e,r){r.d(e,{db:function(){return s},t:function(){return i}});var o=r(3897),n=(r(2806),r(5778),o.Z.initializeApp({apiKey:"AIzaSyBlrwBDwFdwkutdVO2Ilg6KUPnFFwKWD2k",authDomain:"chat-harmonyo.firebaseapp.com",projectId:"chat-harmonyo",storageBucket:"chat-harmonyo.appspot.com",messagingSenderId:"295019787606",appId:"1:295019787606:web:eb01ac75f11c05b72d92f7",measurementId:"G-2K9ZW7N0C1"})),s=n.firestore(),i=n.storage("gs://chat-harmonyo.appspot.com/")},2703:function(a,e,r){r.d(e,{Wi:function(){return i},Y8:function(){return t},mA:function(){return c}});var o=r(4165),n=r(5861),s=r(1243);function i(){var a=sessionStorage.TOKEN;return(null===a||""===a||a.length<186)&&(sessionStorage.TOKEN="",!0)}function t(a){var e=(a=a.split("/"))[0],r=a[1],o=a[2];return e<1||e>31?{error:!0,helperText:"Dia inv\xe1lido"}:r<1||r>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:o<1900||o>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(o,r-1,e)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function c(a){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,o.Z)().mark((function a(e){var r;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={},a.next=3,s.Z.get("https://viacep.com.br/ws/".concat(e,"/json/")).then((function(a){r=a.data.erro?null:a.data})).catch((function(a){console.log(a)}));case 3:return console.log("Resposta:"),console.log(r),a.abrupt("return",r);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=612.635b86a5.chunk.js.map