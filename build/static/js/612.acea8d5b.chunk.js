"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[612],{1687:function(a,e,r){var o=r(1243).Z.create({baseURL:"http://localhost:8080"});e.Z=o},3345:function(a,e,r){var o=r(9439),n=r(3044),s=r(2791),i=r(1659),t=r(184);function c(a,e){var r=a.id,c=a.nome,l=(0,s.useState)(""),u=(0,o.Z)(l,2),d=u[0],m=u[1],f=(0,s.useState)(!1),h=(0,o.Z)(f,2),x=(h[0],h[1]),p=(0,s.useState)(!1),v=(0,o.Z)(p,2),Z=v[0],g=v[1];(0,s.useImperativeHandle)(e,(function(){return{getImgPerfilURL:function(){return d}}}),[d]);var j=function(a){var e="/imgs-perfil-usuario/".concat(a,"_ft_perfil");i.t.ref(e).getDownloadURL().then((function(a){m(a),x(!0)})).catch((function(){g(!0)}))};(0,s.useEffect)((function(){a.naoCarregar&&(a.imgUrl?m(a.imgUrl):j(r))}),[]),(0,s.useEffect)((function(){a.imgUrl?(m(a.imgUrl),g(!1)):j(r)}),[a.recarregarImg]);var N=Z?"#099250":"#eeeeee",b=a.sx?a.sx:{};return b.bgcolor=N,Z?(0,t.jsx)(n.Z,{className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:Z?c.charAt(0):""}):(0,t.jsx)(n.Z,{src:Z?null:d,className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:Z?c.charAt(0):""})}e.Z=(0,s.forwardRef)(c)},9084:function(a,e,r){r.d(e,{Z:function(){return s}});r(2791);var o=r(4554),n=r(184);var s=function(a){return(0,n.jsx)(o.Z,{className:"card ".concat(a.className),sx:a.sx,id:a.id,onClick:a.onClick,children:a.children})}},4056:function(a,e,r){r.d(e,{Z:function(){return B}});var o=r(9439),n=r(2791),s=r(4554),i=r(9284),t=r(9310),c=r(2125),l=r(6630),u=r(9230),d=r(3709),m=r(2167),f=r(13),h=r(533),x=r(890),p=r(184);var v=function(a){return(0,p.jsx)(h.Z,{className:"navbar-lateral-card-container",href:a.href,underline:"none",children:(0,p.jsxs)(s.Z,{className:"navbar-lateral-card ".concat(a.active?"active":"not-active"),children:[a.hover?(0,p.jsx)(a.icon,{className:"navbar-lateral-card-img-hover"}):(0,p.jsx)(a.icon,{className:"navbar-lateral-card-img"}),a.hover?(0,p.jsx)(x.Z,{className:"navbar-lateral-card-texto",children:a.titulo}):""]})})};var Z=function(a){var e=n.useState(!1),r=(0,o.Z)(e,2),h=r[0],x=r[1],Z=sessionStorage.getItem("CATEGORIA").toLocaleLowerCase(),g={professor:[{titulo:"Dashboard",icon:t.Z,active:"dashboard"===a.tela,href:"/dashboard-professor"},{titulo:"Agenda",icon:c.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:l.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Aulas",icon:d.Z,active:"aulas"===a.tela,href:"/aulas"}],aluno:[{titulo:"Encontrar",icon:m.Z,active:"encontrar"===a.tela,href:"/encontrar-professor"},{titulo:"Agenda",icon:c.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:l.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Feedbacks",icon:f.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],administrador:[{titulo:"Dashboard",icon:t.Z,active:"dashboard"===a.tela,href:"/dashboard-administrador"}]};return(0,p.jsx)(s.Z,{className:"navbar-lateral-background",children:(0,p.jsxs)(s.Z,{className:"navbar-lateral",onMouseEnter:function(){return setTimeout((function(){return x(!0)}),50)},onMouseLeave:function(){return setTimeout((function(){return x(!1)}),150)},children:[(0,p.jsxs)("a",{href:"/",className:"navbar-lateral-logo-container",children:[(0,p.jsx)(i.Z,{icon:!0,white:!0,height:"40px",className:"navbar-lateral-logo ".concat(h?"hidden":"")}),(0,p.jsx)(i.Z,{white:!0,width:"200px",className:"navbar-lateral-logo ".concat(h?"":"hidden")})]}),(0,p.jsx)(s.Z,{className:"navbar-lateral-cards",children:g[Z].map((function(a){return(0,p.jsx)(v,{href:a.href,titulo:a.titulo,icon:a.icon,active:a.active,hover:h},"opcao-navbar-".concat(a.titulo))}))})]})})},g=r(2),j=r(8121),N=r(3786),b=r.p+"static/media/business-proposal.0fb9562397d64134bfe0.png",C=r(5117);var S=function(a){return(0,p.jsx)(C.Z,{id:a.menuId,anchorEl:a.anchorEl,open:a.open,onClose:a.handleClose,MenuListProps:{"aria-labelledby":a.buttonClassName},children:a.children})},k=r(2426),E=r.n(k),I=(r(827),r(1687)),P=function(a,e){return I.Z.put(a,e,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var y=function(a){var e=sessionStorage.getItem("ID"),r=(0,n.useState)(0),i=(0,o.Z)(r,2),t=i[0],c=i[1],l=(0,n.useState)([]),u=(0,o.Z)(l,2),d=u[0],m=u[1],f=(0,n.useState)(0),h=(0,o.Z)(f,2),v=h[0],Z=h[1],C=(0,n.useState)(null),k=(0,o.Z)(C,2),y=k[0],A=k[1],w=!!y,M=function(){var a;(a="/notificacoes/usuario/".concat(sessionStorage.ID),I.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})).then((function(a){var e=a.data,r=e.content;console.log("Recebi a notificacao: "),console.log(r),204!==a.status?(r.forEach((function(a){a.tempo=E()(a.data).fromNow(),a.src=b})),c(e.totalPages),m(r),Z(r.filter((function(a){return!a.lida})).length)):m([])})).catch((function(a){console.log(a)}))};return(0,n.useEffect)((function(){M()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)(j.Z,{id:"notificacao-botao",className:"container-usuario-notificacao",color:"primary",badgeContent:v,"aria-controls":w?"notificacao-menu":void 0,"aria-haspopup":"true","aria-expanded":w?"true":void 0,onClick:function(a){A(a.currentTarget)},children:(0,p.jsx)(g.Z,{})}),(0,p.jsxs)(S,{menuId:"notificacao-menu",buttonClassName:"notificacao-botao",anchorEl:y,open:w,handleClose:function(){A(null)},className:"notificacao-card",children:[(0,p.jsxs)(s.Z,{className:"notificacao-menu-container-title",children:[(0,p.jsx)(x.Z,{className:"notificacao-menu-title",children:"Notifica\xe7\xf5es"}),v>0?(0,p.jsx)(x.Z,{className:"notificacao-menu-lido",onClick:function(){P("/notificacoes/lida-usuario/".concat(e),{}).then((function(a){200===a.status&&(d.forEach((function(a){a.lida=!0})),m(d),Z(0))})).catch((function(a){console.log(a)}))},children:"Marcar como visto"}):""]}),d.map((function(a){return(0,p.jsxs)(N.Z,{className:"notificacao-menu-item",onClick:function(){var e;e=a.id,P("/notificacoes/lida/".concat(e),{}).then((function(a){200===a.status&&(alert("Lendo a notificacao com id: "+e),d.forEach((function(a){a.id===e&&(a.lida=!0)})),m(d),v>0&&Z(v-1))})).catch((function(a){console.log(a)}))},sx:{backgroundColor:a.lido?"var(--notificacao-nao-lida)":"var(--notificacao-lida)"},children:[(0,p.jsxs)(s.Z,{className:"notificacao-menu-item-info-container",children:[(0,p.jsx)("img",{src:a.src,className:"notificacao-menu-item-img",alt:""}),(0,p.jsx)(x.Z,{className:"notificacao-menu-item-titulo",children:a.titulo})]}),(0,p.jsx)(s.Z,{className:"notificacao-menu-item-container-tempo",children:(0,p.jsx)(x.Z,{className:"notificacao-menu-item-tempo",children:a.tempo})})]},a.id)})),t>1?(0,p.jsx)(s.Z,{sx:{width:"100%",height:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,p.jsx)(x.Z,{className:"notificacao-menu-lido",children:"Mostrar Todos"})}):""]})]})},A=r.p+"static/media/user.05d0404ad8a0ab5bdefa.png",w=r.p+"static/media/logout.0becdbc391b7088ace83.png",M=r(7689),T=r(3345),D=[{id:1,src:A,titulo:"Meu Perfil",url:"/perfil"},{id:3,src:w,titulo:"Sair",url:"/"}],z=sessionStorage.getItem("NOME");var K=function(a){var e=(0,M.s0)(),r=n.useState(null),i=(0,o.Z)(r,2),t=i[0],c=i[1],l=Boolean(t),u=function(a){c(null),e(a.url)};return(0,p.jsxs)("div",{children:[(0,p.jsx)(T.Z,{id:sessionStorage.getItem("ID"),nome:z,className:"avatar-usuario-img",onClick:function(a){c(a.currentTarget)},ariaControls:l?"avatar-usuario-menu":void 0,ariaHaspopup:"true",ariaExpanded:l?"true":void 0,recarregarImg:a.recarregarTodasImgs}),(0,p.jsxs)(S,{menuId:"avatar-usuario-menu",buttonClassName:"avatar-usuario-botao",anchorEl:t,open:l,handleClose:u,children:[(0,p.jsxs)(s.Z,{className:"avatar-usuario-menu-user-info",children:[(0,p.jsx)(T.Z,{id:sessionStorage.getItem("ID"),className:"avatar-usuario-img",nome:z}),(0,p.jsxs)(s.Z,{className:"avatar-usuario-menu-user-info-text",children:[(0,p.jsx)(x.Z,{className:"avatar-usuario-menu-nome",children:z}),(0,p.jsx)(x.Z,{className:"avatar-usuario-menu-email",children:sessionStorage.getItem("EMAIL")})]})]}),(0,p.jsx)(s.Z,{className:"opcoes-container",children:D.map((function(a){return(0,p.jsxs)(N.Z,{className:"avatar-usuario-menu-item",onClick:function(){return u(a)},children:[(0,p.jsx)("img",{src:a.src,className:"avatar-usuario-menu-item-img",alt:""}),(0,p.jsx)(x.Z,{className:"avatar-usuario-menu-item-titulo",children:a.titulo})]},a.id)}))})]})]})};var R=function(a){return(0,p.jsxs)(s.Z,{className:"container-usuario",children:[(0,p.jsx)(y,{}),(0,p.jsx)(K,{recarregarTodasImgs:a.recarregarTodasImgs})]})},L=r(9658),O=r(3400),q=r(6739);var B=function(a){var e=(0,n.useState)(!1),r=(0,o.Z)(e,2),i=(r[0],r[1]),t=(0,n.useState)([]),c=(0,o.Z)(t,2),l=c[0],u=c[1],d=a.recarregarTodasImgs;return(0,n.useEffect)((function(){a.errosState&&u(a.errosState.erros)}),[a.errosState]),(0,n.useEffect)((function(){d&&i(d)}),[d]),(0,p.jsxs)(s.Z,{className:"mui-root",children:[(0,p.jsx)(s.Z,{className:"erro-container",children:l&&l.map((function(e,r){return(0,p.jsx)(L.Z,{severity:"error",action:(0,p.jsx)(O.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return a.errosState.setErros(l.filter((function(a,e){return e!==r})))},children:(0,p.jsx)(q.Z,{fontSize:"inherit"})}),sx:{zIndex:1e3},children:e},r)}))}),(0,p.jsx)(Z,{tela:a.tela}),(0,p.jsxs)(s.Z,{className:"pagina-padrao-container",children:[(0,p.jsx)(R,{recarregarTodasImgs:d}),a.children]})]})}},978:function(a,e,r){r.r(e),r.d(e,{default:function(){return B}});var o=r(4942),n=r(1413),s=r(3433),i=r(9439),t=r(2791),c=r(7689),l=r(4554),u=r(4056),d=r(3239),m=r(890),f=r(9084),h=r(68),x=r(3345),p=r(7130),v=r(7267),Z=r(184);var g=function(a){return(0,Z.jsxs)(l.Z,{className:"professor-popular-card",onClick:a.onClick,children:[(0,Z.jsxs)(l.Z,{className:"card-info-usuario",children:[(0,Z.jsx)(x.Z,{id:a.id,nome:a.nome,className:"avatar-usuario-img"}),(0,Z.jsx)(l.Z,{className:"card-nome-container",children:(0,Z.jsx)(h.Z,{title:a.nome,placement:"right",children:(0,Z.jsx)(m.Z,{className:"card-info-nome",noWrap:!0,children:a.nome})})})]}),(0,Z.jsxs)(l.Z,{className:"card-info-avaliacao",children:[(0,Z.jsx)(p.Z,{className:"card-avaliacao-icon"}),(0,Z.jsx)(m.Z,{className:"card-avaliacao-valor",children:a.avaliacao}),(0,Z.jsx)(v.Z,{className:"card-info-separacao"}),(0,Z.jsx)(l.Z,{className:"card-cidade-container",children:(0,Z.jsx)(h.Z,{title:a.localizacao,placement:"right",children:(0,Z.jsx)(m.Z,{className:"card-cidade",variant:"subtitle2",noWrap:!0,children:a.localizacao})})})]})]},"popular-".concat(a.id))},j=r(1687);var N=function(a){return(0,Z.jsxs)(l.Z,{className:"professores-populares-container",children:[(0,Z.jsx)(l.Z,{className:"professor-populares-container-titulo",children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",children:"Popular"})}),a.isCarregando?(0,Z.jsx)(d.Z,{color:"success"}):(0,Z.jsx)(f.Z,{className:"professores-populares-card",children:a.professores.map((function(e,r){return(0,Z.jsx)(g,{id:e.id,nome:e.nome,instrumentos:e.instrumentos,localizacao:e.localizacao,avaliacao:e.mediaAvaliacao,onClick:function(){return a.onClick(e)}},r)}))})]})},b=r(8316),C=r(1588);var S=function(a){return(0,Z.jsxs)(f.Z,{className:"professor-card",onClick:a.onClick,children:[(0,Z.jsx)(l.Z,{className:"professor-card-primeira-parte",children:(0,Z.jsx)(x.Z,{id:a.id,nome:a.nome})}),(0,Z.jsxs)(l.Z,{className:"professor-card-segunda-parte",children:[(0,Z.jsx)(m.Z,{variant:"h5",className:"professor-nome-texto",children:a.nome}),(0,Z.jsxs)(l.Z,{className:"professor-informacoes-adicionais-container",children:[(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.idade," anos")}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.bairro)}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.cidade)}),"-",(0,Z.jsx)(m.Z,{className:"professor-informacoes-adicionais-texto",children:"".concat(a.distancia," Km")}),"-",(0,Z.jsx)(m.Z,{className:"professor-preco-texto",children:"R$ ".concat(a.precoMinimo,"~R$").concat(a.precoMaximo)})]}),(0,Z.jsxs)(l.Z,{className:"professor-avaliacao-localizacao-container",children:[(0,Z.jsx)(b.Z,{name:"half-rating-read",defaultValue:a.avaliacao,precision:.5,readOnly:!0}),(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professores-avaliacao-texto",children:a.avaliacao}),(0,Z.jsxs)(l.Z,{className:"professor-localizacao",children:[(0,Z.jsx)(C.Z,{className:"professor-localizacao-texto"}),(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professor-localizacao-texto",children:"".concat(a.cidade," - ").concat(a.estado)})]})]}),(0,Z.jsx)(l.Z,{className:"professor-instrumentos-container",children:a.instrumentos.map((function(a,e){return(0,Z.jsx)(f.Z,{className:"professor-instrumentos-card",children:(0,Z.jsx)(m.Z,{variant:"subtitle1",className:"professor-instrumentos-card-texto",children:a.nome})},e)}))})]})]},"resumido-".concat(a.id))};var k=function(a){return(0,c.s0)(),(0,Z.jsxs)(l.Z,{children:[(0,Z.jsx)(l.Z,{children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",children:"Professores"})}),a.isCarregando?(0,Z.jsx)(d.Z,{color:"success"}):(0,Z.jsx)(f.Z,{className:"professores-cards",children:a.professores.map((function(e,r){return(0,Z.jsx)(S,{onClick:function(){return a.onClick(e)},id:e.id,nome:e.nome,instrumentos:e.instrumentos,idade:e.idade,bairro:e.bairro,distancia:e.distancia,precoMinimo:e.valorMinimo,precoMaximo:e.valorMaximo,descricao:e.descricao,avaliacao:e.mediaAvaliacao,cidade:e.cidade,estado:e.estado},r)}))})]})},E=r(8559),I=r.n(E),P=r.p+"static/media/user-map-marker.3985e39e25b4a574b73a.png";new(I().Icon)({iconUrl:P,iconRetinaUrl:P,iconSize:new(I().Point)(60,60),className:"leaflet-div-icon"});var y=r(5332),A=r(9709);var w=function(a){var e=(0,t.useState)({minimo:0,maximo:0,valor:[0,0]}),r=(0,i.Z)(e,2),o=r[0],s=r[1],c=a.adicionarCarregamento,u=a.adicionarParametro,d=(0,t.useState)({minimo:0,maximo:0,valor:[0,0]}),h=(0,i.Z)(d,2),x=h[0],p=h[1],v=(0,t.useState)(5),g=(0,i.Z)(v,2),j=g[0],N=g[1];return(0,t.useEffect)((function(){a.requisicaoGet("/usuarios/filtro-minimo-maximo").then((function(a){var e=a.data.precoMinimo,r=a.data.precoMaximo,o=a.data.distanciaMinima,n=a.data.distanciaMaxima;s({minimo:e,maximo:r,valor:[e,r]}),p({minimo:o,maximo:n,valor:[o,n]}),u("preco",[e,r],"><"),u("distancia",[o,n],"><"),c(!0)})).catch((function(){a.exibirErro("Erro ao carregar valores do filtro."),c(!1)}))}),[]),(0,Z.jsxs)(f.Z,{className:"filtro-card",children:[(0,Z.jsx)(l.Z,{className:"filtro-card-titulo",children:(0,Z.jsx)(m.Z,{className:"encontrar-professor-titulo",sx:{marginBottom:"0 !important"},children:"Filtro"})}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Pre\xe7o"}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(y.ZP,{size:"small",getAriaLabel:function(){return"Pre\xe7o m\xednimo"},value:o.valor,onChange:function(a,e,r){!Array.isArray(e)||0===o.minimo&&0===o.maximo||s(0===r?function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[Math.min(e[0],o.valor[1]-1),o.valor[1]]})}:function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[o.valor[0],Math.max(e[1],o.valor[0]+1)]})})},valueLabelDisplay:"auto",getAriaValueText:function(a){return"R$ ".concat(a)},disableSwap:!0,min:o.minimo,max:o.maximo,sx:{color:"black",marginBottom:"4px"}}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-min-max-container",children:[(0,Z.jsxs)(m.Z,{className:"filtro-slider-minimo",variant:"subtitle2",children:["R$ ",o.minimo]}),(0,Z.jsxs)(m.Z,{className:"filtro-slider-maximo",variant:"subtitle2",children:["R$ ",o.maximo]})]})]})]}),(0,Z.jsxs)(l.Z,{className:"filtro-avaliacao-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Avalia\xe7\xe3o"}),(0,Z.jsxs)(l.Z,{className:"filtro-avaliacao-rating-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-avaliacao-texto",children:j}),(0,Z.jsx)(b.Z,{name:"half-rating",value:j,defaultValue:5,precision:.5,onChange:function(a,e){N(e)}})]})]}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(m.Z,{className:"filtro-titulo",children:"Dist\xe2ncia"}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-container",children:[(0,Z.jsx)(y.ZP,{size:"small",getAriaLabel:function(){return"Dist\xe2ncia m\xednima"},value:x.valor,onChange:function(a,e,r){!Array.isArray(e)||0===x.minimo&&0===x.maximo||p(0===r?function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[Math.min(e[0],x.valor[1]-1),x.valor[1]]})}:function(a){return(0,n.Z)((0,n.Z)({},a),{},{valor:[x.valor[0],Math.max(e[1],x.valor[0]+1)]})})},valueLabelDisplay:"auto",getAriaValueText:function(a){return"".concat(a," Km")},disableSwap:!0,min:x.minimo,max:x.maximo,sx:{color:"black",marginBottom:"4px"}}),(0,Z.jsxs)(l.Z,{className:"filtro-slider-min-max-container",children:[(0,Z.jsxs)(m.Z,{className:"filtro-slider-minimo",variant:"subtitle2",children:[x.minimo," Km"]}),(0,Z.jsxs)(m.Z,{className:"filtro-slider-maximo",variant:"subtitle2",children:[x.maximo," Km"]})]})]})]}),(0,Z.jsx)(A.Z,{loading:a.isCarregando,onClick:function(){u("preco",o.valor,"><"),u("distancia",x.valor,"><"),u("avaliacao",j,">:")},className:"filtro-botao",children:(0,Z.jsx)(m.Z,{className:"loading-text",children:"Filtrar"})})]})},M=r(5403),T=r(8096),D=r(9321),z=r(3786),K=r(3006),R=r(3466);var L=function(a){var e=t.useState(""),r=(0,i.Z)(e,2),o=r[0],n=r[1],s=t.useState([]),c=(0,i.Z)(s,2),u=c[0],d=c[1],x=a.setProfessoresFiltrados,p=a.adicionarParametro,v=t.useState(""),g=(0,i.Z)(v,2),j=g[0],N=g[1];return(0,t.useEffect)((function(){a.requisicaoGet("/enderecos/cidades").then((function(e){var r=e.data;r.length>0?(d(r),n(r[0]),p("cidade",r[0],":"),a.adicionarCarregamento(!0)):0==r.length&&(n("?"),a.adicionarCarregamento(!1))})).catch((function(){a.exibirErro("Erro ao carregar cidades cadastradas."),a.adicionarCarregamento(!1)}))}),[]),(0,Z.jsxs)(f.Z,{className:"professores-busca-card",children:[(0,Z.jsxs)(l.Z,{className:"professores-busca-lugar",children:[(0,Z.jsx)(C.Z,{}),(0,Z.jsx)(T.Z,{sx:{width:"70%"},children:(0,Z.jsx)(D.Z,{labelId:"demo-simple-select-label",id:"select-cidade",value:o,renderValue:function(a){return(0,Z.jsx)(h.Z,{title:a,placement:"right",children:(0,Z.jsx)(m.Z,{className:"professores-busca-lugar-nome",children:a.length>13?a.substring(0,13)+"...":a})})},label:"",onChange:function(a){n(a.target.value),p("cidade",a.target.value,":")},SelectProps:{IconComponent:function(){return null}},sx:{"& .MuiSelect-select":{padding:0,display:"flex",alignItems:"center",fontWeight:"700 !important"}},children:u.map((function(a){return(0,Z.jsx)(z.Z,{value:a,children:a})}))})})]}),(0,Z.jsx)(l.Z,{className:"professores-busca-campo",children:(0,Z.jsx)(K.Z,{className:"busca-campo-input",value:j,onKeyUp:function(e){if(e.preventDefault(),"Enter"===e.key){var r=j.replace("*","").replace("~",""),n="nome~*".concat(r,"*,instrumentos~*").concat(r,"*,cidade:").concat(o);a.requisicaoGet("/professores/busca?params=".concat(n)).then((function(a){200===a.status?(console.log("Professores encontrados: "+a.data.length),console.log(a.data),x(a.data)):(console.log("Nenhum professor encontrado."),x([]))}))}},onChange:function(a){a.preventDefault(),N(a.target.value)},placeholder:"Buscar",InputProps:{endAdornment:(0,Z.jsx)(R.Z,{children:(0,Z.jsx)(M.Z,{})}),readOnly:a.isCarregando}})})]})},O=r(2703);function q(a){var e,r,o,n="";console.log("Iniciando Filtragem dos parametros..."),console.log("Valores para serem filtrados: "),console.log(a);var s=Object.keys(a);for(var i in a)if(e=a[i].valor,r=a[i].operacao,"disponibilidade"!==i){if(Array.isArray(e)){n+="".concat(i).concat(r).concat(e[0]),o=a[i].orPredicate?";":"-";for(var t=1;t<e.length;t++)n+="".concat(o).concat(e[t])}else n+="".concat(i).concat(r).concat(e);s.indexOf(i)<s.length-1&&(n+=",")}return console.log("Filtragem dos parametros finalizada! Novo valor: "+n),n}var B=function(a){var e=(0,t.useState)([]),r=(0,i.Z)(e,2),d=r[0],m=r[1],f=(0,t.useState)({}),h=(0,i.Z)(f,2),x=h[0],p=h[1],v=(0,t.useMemo)((function(){return[q(x)]}),[x]),g=(0,t.useState)([]),b=(0,i.Z)(g,2),C=b[0],S=b[1],E=(0,t.useState)([]),I=(0,i.Z)(E,2),P=I[0],y=I[1],A=(0,t.useState)([]),M=(0,i.Z)(A,2),T=M[0],D=M[1],z=!T.every((function(a){return!0===a})),K=(0,t.useState)(!1),R=(0,i.Z)(K,2),B=R[0],F=R[1],U=function(a){D((function(e){return[].concat((0,s.Z)(e),[a])}))},G=function(a,e,r){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];Object.keys(x).includes(a),p((function(i){return(0,n.Z)((0,n.Z)({},i),{},(0,o.Z)({},a,{valor:e,operacao:r,orPredicate:s}))}))},V=(0,c.s0)(),W=function(a){return j.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},$=function(a){return m((function(e){return[].concat((0,s.Z)(e),[a])}))};(0,t.useEffect)((function(){(0,O.Wi)()&&V(-1)}),[]),(0,t.useEffect)((function(){0!==v.length&&(console.log("Pesquisando professores..."),H())}),[v]);var H=function(){y([]),S([]),Promise.all([W("/professores/busca".concat(v?"?params=".concat(v):"")),W("/professores/populares")]).then((function(a){console.log("Responses Professores:"),console.log(a);var e=a[0].data,r=a[1].data;null==e?$("Erro ao carregar professores filtrados."):null==r?$("Erro ao carregar professores populares."):(204===a[0].status?($("Nenhum professor encontrado."),y([])):y(e),204===a[1].status?($("Nenhum professor encontrado."),S([])):S(r))}))},Y=function(a){console.log("Testado"),V("/exibicao-perfil?id=".concat(a.id))};return(0,Z.jsx)(u.Z,{tela:"encontrar",errosState:{erros:d,setErros:m},children:(0,Z.jsxs)(l.Z,{className:"pagina-container",children:[(0,Z.jsx)(w,{isCarregando:z,requisicaoGet:W,iniciarPesquisaState:{iniciarPesquisa:B,setIniciarPesquisa:F},adicionarCarregamento:U,adicionarParametro:G,exibirErro:$}),(0,Z.jsxs)(l.Z,{className:"encontrar-professor-conteudo",children:[(0,Z.jsx)(L,{requisicaoGet:W,isCarregando:z,iniciarPesquisaState:{setIniciarPesquisa:F},adicionarCarregamento:U,adicionarParametro:G,exibirErro:$,setProfessoresFiltrados:y}),(0,Z.jsx)(N,{professores:C,isCarregando:z,onClick:Y}),(0,Z.jsx)(k,{professores:P,isCarregando:z,onClick:Y})]})]})})}},1659:function(a,e,r){r.d(e,{db:function(){return s},t:function(){return i}});var o=r(3897),n=(r(2806),r(5778),o.Z.initializeApp({apiKey:"AIzaSyBlrwBDwFdwkutdVO2Ilg6KUPnFFwKWD2k",authDomain:"chat-harmonyo.firebaseapp.com",projectId:"chat-harmonyo",storageBucket:"chat-harmonyo.appspot.com",messagingSenderId:"295019787606",appId:"1:295019787606:web:eb01ac75f11c05b72d92f7",measurementId:"G-2K9ZW7N0C1"})),s=n.firestore(),i=n.storage("gs://chat-harmonyo.appspot.com/")},2703:function(a,e,r){r.d(e,{Wi:function(){return i},Y8:function(){return t},mA:function(){return c}});var o=r(4165),n=r(5861),s=r(1243);function i(){var a=sessionStorage.TOKEN;return(null===a||""===a||a.length<186)&&(sessionStorage.TOKEN="",!0)}function t(a){var e=(a=a.split("/"))[0],r=a[1],o=a[2];return e<1||e>31?{error:!0,helperText:"Dia inv\xe1lido"}:r<1||r>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:o<1900||o>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(o,r-1,e)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function c(a){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,o.Z)().mark((function a(e){var r;return(0,o.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r={},a.next=3,s.Z.get("https://viacep.com.br/ws/".concat(e,"/json/")).then((function(a){r=a.data.erro?null:a.data})).catch((function(a){console.log(a)}));case 3:return console.log("Resposta:"),console.log(r),a.abrupt("return",r);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=612.acea8d5b.chunk.js.map