"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[927],{1687:function(a,e,o){var s=o(1243).Z.create({baseURL:"http://".concat("44.218.142.250",":8080")});e.Z=s},3345:function(a,e,o){var s=o(9439),n=o(3044),r=o(2791),i=o(1659),t=o(184);function c(a,e){var o=a.id,c=a.nome,l=(0,r.useState)(""),d=(0,s.Z)(l,2),u=d[0],m=d[1],h=(0,r.useState)(!1),f=(0,s.Z)(h,2),x=(f[0],f[1]),Z=(0,r.useState)(!1),g=(0,s.Z)(Z,2),v=g[0],p=g[1];(0,r.useImperativeHandle)(e,(function(){return{getImgPerfilURL:function(){return u}}}),[u]);var j=function(a){var e="/imgs-perfil-usuario/".concat(a,"_ft_perfil");i.t.ref(e).getDownloadURL().then((function(a){m(a),x(!0)})).catch((function(){p(!0)}))};(0,r.useEffect)((function(){a.naoCarregar&&(a.imgUrl?m(a.imgUrl):j(o))}),[]),(0,r.useEffect)((function(){a.imgUrl?(m(a.imgUrl),p(!1)):j(o)}),[a.recarregarImg]);var N=v?"#099250":"#eeeeee",b=a.sx?a.sx:{};return b.bgcolor=N,v?(0,t.jsx)(n.Z,{className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:v?c.charAt(0):""}):(0,t.jsx)(n.Z,{src:v?null:u,className:a.className,onClick:a.onClick,"aria-controls":a.ariaControls,"aria-haspopup":a.ariaHaspopup,"aria-expanded":a.ariaExpanded,sx:b,children:v?c.charAt(0):""})}e.Z=(0,r.forwardRef)(c)},9084:function(a,e,o){o.d(e,{Z:function(){return r}});o(2791);var s=o(4554),n=o(184);var r=function(a){return(0,n.jsx)(s.Z,{className:"card ".concat(a.className),sx:a.sx,id:a.id,onClick:a.onClick,children:a.children})}},4056:function(a,e,o){o.d(e,{Z:function(){return _}});var s=o(9439),n=o(2791),r=o(4554),i=o(6151),t=o(9284),c=o(9310),l=o(2125),d=o(6630),u=o(9230),m=o(3709),h=o(13),f=o(2167),x=o(297),Z=o(533),g=o(890),v=o(184);var p=function(a){return(0,v.jsx)(Z.Z,{className:"navbar-lateral-card-container",href:a.href,underline:"none",children:(0,v.jsxs)(r.Z,{className:"navbar-lateral-card ".concat(a.active?"active":"not-active"),children:[a.hover?(0,v.jsx)(a.icon,{className:"navbar-lateral-card-img-hover"}):(0,v.jsx)(a.icon,{className:"navbar-lateral-card-img"}),a.hover?(0,v.jsx)(g.Z,{className:"navbar-lateral-card-texto",children:a.titulo}):""]})})},j=o(1687);var N=function(a){var e=n.useState(!1),o=(0,s.Z)(e,2),Z=o[0],g=o[1],j=sessionStorage.getItem("CATEGORIA").toLocaleLowerCase(),N={professor:[{titulo:"Dashboard",icon:c.Z,active:"dashboard"===a.tela,href:"/dashboard-professor"},{titulo:"Agenda",icon:l.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:d.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Aulas",icon:m.Z,active:"aulas"===a.tela,href:"/aulas"},{titulo:"Feedbacks",icon:h.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],aluno:[{titulo:"Encontrar",icon:f.Z,active:"encontrar"===a.tela,href:"/encontrar-professor"},{titulo:"Agenda",icon:l.Z,active:"agenda"===a.tela,href:"/agenda"},{titulo:"Pedidos",icon:d.Z,active:"pedidos"===a.tela,href:"/pedidos"},{titulo:"Chat",icon:u.Z,active:"chat"===a.tela,href:"/chat"},{titulo:"Feedbacks",icon:h.Z,active:"feedbacks"===a.tela,href:"/feedbacks"}],administrador:[{titulo:"Dashboard",icon:c.Z,active:"dashboard"===a.tela,href:"/dashboard-administrador"}]};return(0,v.jsx)(r.Z,{className:"navbar-lateral-background",children:(0,v.jsxs)(r.Z,{className:"navbar-lateral",onMouseEnter:function(){return setTimeout((function(){return g(!0)}),50)},onMouseLeave:function(){return setTimeout((function(){return g(!1)}),150)},children:[(0,v.jsxs)("a",{href:"/",className:"navbar-lateral-logo-container",children:[(0,v.jsx)(t.Z,{icon:!0,white:!0,height:"40px",className:"navbar-lateral-logo ".concat(Z?"hidden":"")}),(0,v.jsx)(t.Z,{white:!0,width:"200px",className:"navbar-lateral-logo ".concat(Z?"":"hidden")})]}),(0,v.jsxs)(r.Z,{className:"navbar-lateral-cards",children:[N[j].map((function(a){return(0,v.jsx)(p,{href:a.href,titulo:a.titulo,icon:a.icon,active:a.active,hover:Z},"opcao-navbar-".concat(a.titulo))})),"administrador"===j?(0,v.jsxs)(i.Z,{onClick:function(){fetch("http://localhost:8080/professores/download-csv",{method:"GET",responseType:"blob",headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){return a.blob()})).then((function(a){var e=window.URL.createObjectURL(a),o=document.createElement("a");o.href=e,o.download="data.csv",o.click(),window.URL.revokeObjectURL(e)})).catch((function(a){console.error("Erro:",a)}))},color:"primary",className:"button-export",children:[" ",(0,v.jsx)(x.Z,{className:"export-logo "})," ",(0,v.jsx)("h4",{className:"export-logo ".concat(Z?"":"hidden"),children:" Exporta\xe7\xe3o dados prof."})," "]}):""]})]})})},b=o(2),S=o(3021),C=o(3786),A=o.p+"static/media/business-proposal.0fb9562397d64134bfe0.png",E=o(5117);var I=function(a){return(0,v.jsx)(E.Z,{id:a.menuId,anchorEl:a.anchorEl,open:a.open,onClose:a.handleClose,MenuListProps:{"aria-labelledby":a.buttonClassName},children:a.children})},k=o(2426),w=o.n(k),T=(o(827),function(a,e){return j.Z.put(a,e,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})});var y=function(a){var e=sessionStorage.getItem("ID"),o=(0,n.useState)(0),i=(0,s.Z)(o,2),t=i[0],c=i[1],l=(0,n.useState)([]),d=(0,s.Z)(l,2),u=d[0],m=d[1],h=(0,n.useState)(0),f=(0,s.Z)(h,2),x=f[0],Z=f[1],p=(0,n.useState)(null),N=(0,s.Z)(p,2),E=N[0],k=N[1],y=!!E,M=function(){var a;(a="/notificacoes/usuario/".concat(sessionStorage.ID),j.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})).then((function(a){var e=a.data,o=e.content;console.log("Recebi a notificacao: "),console.log(o),204!==a.status?(o.forEach((function(a){a.tempo=w()(a.data).fromNow(),a.src=A})),c(e.totalPages),m(o),Z(o.filter((function(a){return!a.lida})).length)):m([])})).catch((function(a){console.log(a)}))};return(0,n.useEffect)((function(){M()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)(S.Z,{id:"notificacao-botao",className:"container-usuario-notificacao",color:"primary",badgeContent:x,"aria-controls":y?"notificacao-menu":void 0,"aria-haspopup":"true","aria-expanded":y?"true":void 0,onClick:function(a){k(a.currentTarget)},children:(0,v.jsx)(b.Z,{})}),(0,v.jsxs)(I,{menuId:"notificacao-menu",buttonClassName:"notificacao-botao",anchorEl:E,open:y,handleClose:function(){k(null)},className:"notificacao-card",children:[(0,v.jsxs)(r.Z,{className:"notificacao-menu-container-title",children:[(0,v.jsx)(g.Z,{className:"notificacao-menu-title",children:"Notifica\xe7\xf5es"}),x>0?(0,v.jsx)(g.Z,{className:"notificacao-menu-lido",onClick:function(){T("/notificacoes/lida-usuario/".concat(e),{}).then((function(a){200===a.status&&(u.forEach((function(a){a.lida=!0})),m(u),Z(0))})).catch((function(a){console.log(a)}))},children:"Marcar como visto"}):""]}),u.map((function(a){return(0,v.jsxs)(C.Z,{className:"notificacao-menu-item",onClick:function(){var e;e=a.id,T("/notificacoes/lida/".concat(e),{}).then((function(a){200===a.status&&(alert("Lendo a notificacao com id: "+e),u.forEach((function(a){a.id===e&&(a.lida=!0)})),m(u),x>0&&Z(x-1))})).catch((function(a){console.log(a)}))},sx:{backgroundColor:a.lido?"var(--notificacao-nao-lida)":"var(--notificacao-lida)"},children:[(0,v.jsxs)(r.Z,{className:"notificacao-menu-item-info-container",children:[(0,v.jsx)("img",{src:a.src,className:"notificacao-menu-item-img",alt:""}),(0,v.jsx)(g.Z,{className:"notificacao-menu-item-titulo",children:a.titulo})]}),(0,v.jsx)(r.Z,{className:"notificacao-menu-item-container-tempo",children:(0,v.jsx)(g.Z,{className:"notificacao-menu-item-tempo",children:a.tempo})})]},a.id)})),t>1?(0,v.jsx)(r.Z,{sx:{width:"100%",height:"fit-content",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,v.jsx)(g.Z,{className:"notificacao-menu-lido",children:"Mostrar Todos"})}):""]})]})},M=o.p+"static/media/user.05d0404ad8a0ab5bdefa.png",O=o.p+"static/media/logout.0becdbc391b7088ace83.png",U=o(7689),P=o(3345),z=[{id:1,src:M,titulo:"Meu Perfil",url:"/perfil"},{id:3,src:O,titulo:"Sair",url:"/"}],R=sessionStorage.getItem("NOME");var L=function(a){var e=(0,U.s0)(),o=n.useState(null),i=(0,s.Z)(o,2),t=i[0],c=i[1],l=Boolean(t),d=function(a){c(null),e(a.url)};return(0,v.jsxs)("div",{children:[(0,v.jsx)(P.Z,{id:sessionStorage.getItem("ID"),nome:R,className:"avatar-usuario-img",onClick:function(a){c(a.currentTarget)},ariaControls:l?"avatar-usuario-menu":void 0,ariaHaspopup:"true",ariaExpanded:l?"true":void 0,recarregarImg:a.recarregarTodasImgs}),(0,v.jsxs)(I,{menuId:"avatar-usuario-menu",buttonClassName:"avatar-usuario-botao",anchorEl:t,open:l,handleClose:d,children:[(0,v.jsxs)(r.Z,{className:"avatar-usuario-menu-user-info",children:[(0,v.jsx)(P.Z,{id:sessionStorage.getItem("ID"),className:"avatar-usuario-img",nome:R}),(0,v.jsxs)(r.Z,{className:"avatar-usuario-menu-user-info-text",children:[(0,v.jsx)(g.Z,{className:"avatar-usuario-menu-nome",children:R}),(0,v.jsx)(g.Z,{className:"avatar-usuario-menu-email",children:sessionStorage.getItem("EMAIL")})]})]}),(0,v.jsx)(r.Z,{className:"opcoes-container",children:z.map((function(a){return(0,v.jsxs)(C.Z,{className:"avatar-usuario-menu-item",onClick:function(){return d(a)},children:[(0,v.jsx)("img",{src:a.src,className:"avatar-usuario-menu-item-img",alt:""}),(0,v.jsx)(g.Z,{className:"avatar-usuario-menu-item-titulo",children:a.titulo})]},a.id)}))})]})]})};var B=function(a){return(0,v.jsxs)(r.Z,{className:"container-usuario",children:[(0,v.jsx)(y,{}),(0,v.jsx)(L,{recarregarTodasImgs:a.recarregarTodasImgs})]})},D=o(4070),F=o(3400),K=o(3503),G=o(6739);var _=function(a){var e=(0,n.useState)([]),o=(0,s.Z)(e,2),i=o[0],t=o[1],c=a.avisosState,l=(0,n.useState)(!1),d=(0,s.Z)(l,2),u=(d[0],d[1]),m=a.recarregarTodasImgs,h=(0,n.useState)(!1),f=(0,s.Z)(h,2),x=f[0],Z=f[1],g=a.carregarPaginaForcado;return(0,n.useEffect)((function(){c&&t(c.avisos)}),[c]),(0,n.useEffect)((function(){m&&u(m)}),[m]),(0,n.useEffect)((function(){Z(g||!0)}),[g]),(0,v.jsxs)(r.Z,{className:"mui-root",children:[(0,v.jsx)(r.Z,{className:"erro-container",children:i&&i.map((function(a,e){return function(a,e,o,s){var n;"erro"===a.tipo&&(n=D.Z);return(0,v.jsx)(n,{severity:"error",action:(0,v.jsx)(F.Z,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){return e(o.filter((function(a,e){return e!==s})))},children:(0,v.jsx)(G.Z,{fontSize:"inherit"})}),sx:{zIndex:1e3},children:a.mensagem},s)}(a,c.setAvisos,c.avisos,e)}))}),(0,v.jsx)(N,{tela:a.tela}),(0,v.jsxs)(r.Z,{className:"pagina-padrao-container",children:[(0,v.jsx)(B,{recarregarTodasImgs:m}),x?a.children:(0,v.jsx)(K.Z,{})]})]})}},1399:function(a,e,o){o.d(e,{Z:function(){return Z}});var s=o(1413),n=o(9439),r=o(2791),i=o(4554),t=o(6151),c=o(3827),l=o(890),d=o(8316),u=o(3006),m=o(9823),h=o(3345),f=o(1687),x=o(184);var Z=function(a){var e=r.useState(!1),o=(0,n.Z)(e,2),Z=o[0],g=o[1],v=function(){return g(!1)},p=r.useState(0),j=(0,n.Z)(p,2),N=j[0],b=j[1],S=a.stateUsuario,C=(0,r.useState)({dadosEnviar:!1}),A=(0,n.Z)(C,2),E=A[0],I=A[1],k=(0,r.useState)(""),w=(0,n.Z)(k,2),T=w[0],y=w[1],M=(0,r.useState)(!1),O=(0,n.Z)(M,2),U=O[0],P=O[1];function z(){var e={usuarioAvaliadorId:parseInt(sessionStorage.ID),valor:N,comentario:T,pedidoId:a.stateUsuario.id};console.log(e);var o=0;o="Professor"===sessionStorage.CATEGORIA?a.stateUsuario.aluno.id:a.stateUsuario.professor.id,f.Z.post("/usuarios/".concat(o,"/avaliacoes"),e,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){alert("Avalia\xe7\xe3o feita com sucesso!"),v()})).catch((function(a){console.log(a)}))}f.Z.get("/usuarios/".concat(a.stateUsuario.id,"/").concat(sessionStorage.ID),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){P(a.data)}));var R="Professor"===sessionStorage.CATEGORIA?S.aluno.id:S.professor.id,L="Professor"===sessionStorage.CATEGORIA?S.aluno.nome.charAt(0):S.professor.nome.charAt(0);return U?(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(i.Z,{className:"modal",children:(0,x.jsx)(i.Z,{className:"avaliado",children:(0,x.jsx)(i.Z,{className:"box-avaliado",children:"Avaliado"})})})}):(0,x.jsxs)(i.Z,{className:"modal",children:[(0,x.jsx)(t.Z,{className:"modal-button-open",onClick:function(){return g(!0)},children:"Avaliar Aula"}),(0,x.jsx)(c.Z,{open:Z,onClose:v,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,x.jsxs)(i.Z,{className:"modal-avaliacao",children:[(0,x.jsxs)(i.Z,{className:"modal-area",children:[(0,x.jsxs)(i.Z,{className:"modal-head",children:[(0,x.jsx)(h.Z,{id:R,nome:L,sx:{width:90,height:90,fontSize:35}}),(0,x.jsxs)(i.Z,{className:"modal-usuario",children:[(0,x.jsx)(l.Z,{id:"modal-modal-title",variant:"h8",component:"h2",children:"Professor"===sessionStorage.CATEGORIA?S.aluno.nome:S.professor.nome}),(0,x.jsxs)(i.Z,{className:"avaliacao-usuario",children:[(0,x.jsx)(d.Z,{className:"valor_avaliacao",value:N,precision:1,size:"medium",onChange:function(a,e){b(e)}}),(0,x.jsx)(i.Z,{className:"avaliacao-numero",children:N})]})]})]}),(0,x.jsx)(i.Z,{className:"modal-close",children:(0,x.jsx)(t.Z,{className:"button-close",onClick:v,children:(0,x.jsx)(m.Z,{})})})]}),(0,x.jsxs)(i.Z,{className:"modal-body",children:[(0,x.jsx)(i.Z,{className:"box-text-input",children:(0,x.jsx)(u.Z,{className:"comentario_avaliacao",onChange:function(a){return y(a.target.value)},multiline:!0,rows:6})}),(0,x.jsx)(t.Z,{onClick:function(){(0===N?(alert("Por favor, avalie o usu\xe1rio!"),1):T.length<=3&&(alert("Por favor, escreva um coment\xe1rio!"),1))||I((0,s.Z)((0,s.Z)({},E),{},{dadosEnviar:z()}))},className:"modal-button",children:"Avaliar"})]})]})})]})}},2290:function(a,e,o){o.r(e),o.d(e,{default:function(){return g}});var s=o(1413),n=o(9439),r=o(2791),i=o(4056),t=o(4554),c=o(890),l=o(8316),d=o(6151),u=o(9084),m=o(1687),h=o(1659),f=(o(1399),o(7689)),x=o(3345),Z=o(184);var g=function(){var a=(0,r.useState)({nome:"",avaliacaoMedia:0,categoria:"",bibliografia:"",bairro:"",cidade:"",estado:"",experiencias:[]}),e=(0,n.Z)(a,2),o=e[0],g=e[1],v=(0,r.useState)({avaliacoes:[]}),p=(0,n.Z)(v,2),j=p[0],N=p[1],b=(0,r.useState)({instrumentos:[]}),S=(0,n.Z)(b,2),C=S[0],A=S[1],E=(0,r.useState)(""),I=(0,n.Z)(E,2),k=(I[0],I[1]),w=(0,r.useState)({tempoMedio:""}),T=(0,n.Z)(w,2),y=T[0],M=T[1],O=(0,f.s0)(),U=new URLSearchParams(window.location.search).get("id");return(0,r.useEffect)((function(){if(U){console.log(U),m.Z.get("/usuarios/dados-perfil/".concat(U),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){var e=a.data;g((0,s.Z)((0,s.Z)({},o),{},{nome:e.nome,email:e.email,categoria:e.categoriaUsuario,avaliacaoMedia:e.avaliacaoMedia,bibliografia:e.bibliografia,bairro:e.endereco.bairro,cidade:e.endereco.cidade,estado:e.endereco.estado,experiencias:e.experiencia}))})).catch((function(a){console.log(a)})),m.Z.get("/usuarios/".concat(U,"/avaliacoes"),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){var e=a.data;N((0,s.Z)((0,s.Z)({},j),{},{avaliacoes:e}))})).catch((function(a){console.log(a)})),function(){var a="/imgs-perfil-usuario/".concat(U,"_ft_perfil");h.t.ref(a).getDownloadURL().then((function(a){console.log(a),k(a)})).catch((function(a){console.log(a)}))}(),function(){var a="";a=(o.categoria="Professor")?"professores":"alunos",m.Z.get("/".concat(a,"/").concat(U,"/instrumentos"),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){var e=a.data;A((0,s.Z)((0,s.Z)({},C),{},{instrumentos:e}))})).catch((function(a){console.log(a)}))}(),m.Z.get("/professores/dashboard/mes-atual/media-tempo-resposta/".concat(U),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(a){var e=a.data,o=Math.floor(e/60),n=(e%=60,Math.floor(o/24)),r="";n>0&&(r+=1==n?n+" dia ":n+" dias "),(o%=24)>0&&(r+=1==o?o+" hora ":o+" horas "),e>0&&(r+=1==e?e+" minuto ":e+" minutos "),M((0,s.Z)((0,s.Z)({},y),{},{tempoMedio:r}))})).catch((function(a){console.log(a)}))}else O(-1)}),[]),console.log(o),console.log(j),console.log(C),console.log(y),(0,Z.jsx)(i.Z,{className:"teste",children:(0,Z.jsxs)(t.Z,{className:"pagina",children:[(0,Z.jsx)(t.Z,{className:"pagina-perfil",children:(0,Z.jsxs)(u.Z,{className:"card-perfil",children:[(0,Z.jsxs)(t.Z,{className:"topo-card",children:[(0,Z.jsx)(x.Z,{id:U,nome:o.nome,className:"avatar-perfil",sx:{width:100,height:100,fontSize:"45px"}}),"Professor"===o.categoria&&""!==y.tempoMedio?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(t.Z,{className:"duracao",children:[(0,Z.jsx)(c.Z,{variant:"h8",component:"h3",children:"Tempo m\xe9dio de resposta"}),(0,Z.jsx)(t.Z,{children:y.tempoMedio})]})}):null]}),(0,Z.jsx)(t.Z,{className:"nome",children:o.nome}),(0,Z.jsx)(t.Z,{className:"categoria",children:o.categoria}),(0,Z.jsxs)(t.Z,{className:"avaliacao-usuario",children:[(0,Z.jsx)(l.Z,{value:o.avaliacaoMedia,readOnly:!0}),(0,Z.jsx)(t.Z,{className:"avaliacao-numero",children:o.avaliacaoMedia})]}),(0,Z.jsx)(t.Z,{className:"instrumentos",children:C.instrumentos.map((function(a){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(t.Z,{className:"item-instumento",children:a.nome})})}))}),(0,Z.jsxs)(t.Z,{children:[o.estado," - ",o.cidade," - ",o.bairro]}),"Professor"===o.categoria?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(t.Z,{className:"box-agendar",children:(0,Z.jsx)(d.Z,{className:"botao",onClick:function(){O("/pedido?id=".concat(U))},children:"Agende uma aula"})})}):null]})}),(0,Z.jsxs)(t.Z,{className:"pagina-informacoes",children:[(0,Z.jsxs)(u.Z,{className:"card-geral",children:[(0,Z.jsx)(t.Z,{className:"card-titulo",children:"Biografia"}),(0,Z.jsx)(t.Z,{children:""!==o.bibliografia?o.bibliografia:"Sem biografia"})]}),"Professor"===o.categoria?(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(u.Z,{className:"card-geral",children:[(0,Z.jsx)(t.Z,{className:"card-titulo",children:"Forma\xe7\xf5es"}),0!==o.experiencias.length?(0,Z.jsx)(t.Z,{children:o.experiencias.map((function(a){return(0,Z.jsxs)(t.Z,{className:"box-experiencia",children:[(0,Z.jsx)(t.Z,{className:"titulo-experiencia",children:a.titulo}),(0,Z.jsx)(t.Z,{className:"descricao-experiencia",children:a.descricao})]})}))}):"Sem forma\xe7\xf5es"]})}):null,0!==j.avaliacoes.length?(0,Z.jsxs)(u.Z,{className:"card-geral",children:[(0,Z.jsx)(t.Z,{className:"card-titulo",children:"Avalia\xe7\xf5es"}),j.avaliacoes.map((function(a){return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(t.Z,{className:"avaliacao",children:[(0,Z.jsxs)(t.Z,{className:"avaliacao-head",children:[(0,Z.jsx)(t.Z,{children:(0,Z.jsx)(x.Z,{id:a.usuarioAvaliador.id,nome:o.nome,sx:{width:50,height:50}})}),(0,Z.jsxs)(t.Z,{children:[(0,Z.jsxs)(t.Z,{className:"avaliacao-titulo",children:[(0,Z.jsx)(t.Z,{className:"avaliacao-nome",children:a.usuarioAvaliador.nome}),(0,Z.jsx)(l.Z,{value:a.valor,readOnly:!0}),(0,Z.jsx)(t.Z,{className:"avaliacao-numero",children:a.valor})]}),(0,Z.jsx)(t.Z,{className:"avaliacao-data",children:a.dataAvaliacao})]})]}),(0,Z.jsx)(t.Z,{className:"avaliacao-texto",children:a.comentario})]})})}))]}):null]})]})})}},1659:function(a,e,o){o.d(e,{db:function(){return r},t:function(){return i}});var s=o(3897),n=(o(2806),o(5778),s.Z.initializeApp({apiKey:"AIzaSyBlrwBDwFdwkutdVO2Ilg6KUPnFFwKWD2k",authDomain:"chat-harmonyo.firebaseapp.com",projectId:"chat-harmonyo",storageBucket:"chat-harmonyo.appspot.com",messagingSenderId:"295019787606",appId:"1:295019787606:web:eb01ac75f11c05b72d92f7",measurementId:"G-2K9ZW7N0C1"})),r=n.firestore(),i=n.storage("gs://chat-harmonyo.appspot.com/")},9823:function(a,e,o){var s=o(4836);e.Z=void 0;var n=s(o(5649)),r=o(184),i=(0,n.default)((0,r.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");e.Z=i}}]);
//# sourceMappingURL=927.795187b2.chunk.js.map