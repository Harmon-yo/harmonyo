"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[780],{2890:function(e,t,n){n.r(t),n.d(t,{default:function(){return ye}});var a=n(9439),o=n(2791),r=n(4056),s=n(4554),i=n(9164),c=n(890),l=n(1413),u=n(4223),d=n(184),m=(0,u.Z)((0,d.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonthOutlined"),f=n(6151),h=n(41),p=n(6117),v=n(7054),Z=n(4913);function x(e){return e.substring(2).toLowerCase()}var g=function(e){var t=e.children,n=e.disableReactTree,a=void 0!==n&&n,r=e.mouseEvent,s=void 0===r?"onClick":r,i=e.onClickAway,c=e.touchEvent,l=void 0===c?"onTouchEnd":c,u=o.useRef(!1),m=o.useRef(null),f=o.useRef(!1),h=o.useRef(!1);o.useEffect((function(){return setTimeout((function(){f.current=!0}),0),function(){f.current=!1}}),[]);var g=(0,p.Z)(t.ref,m),j=(0,v.Z)((function(e){var t=h.current;h.current=!1;var n=(0,Z.Z)(m.current);!f.current||!m.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,n)||(u.current?u.current=!1:(e.composedPath?e.composedPath().indexOf(m.current)>-1:!n.documentElement.contains(e.target)||m.current.contains(e.target))||!a&&t||i(e))})),C=function(e){return function(n){h.current=!0;var a=t.props[e];a&&a(n)}},N={ref:g};return!1!==l&&(N[l]=C(l)),o.useEffect((function(){if(!1!==l){var e=x(l),t=(0,Z.Z)(m.current),n=function(){u.current=!0};return t.addEventListener(e,j),t.addEventListener("touchmove",n),function(){t.removeEventListener(e,j),t.removeEventListener("touchmove",n)}}}),[j,l]),!1!==s&&(N[s]=C(s)),o.useEffect((function(){if(!1!==s){var e=x(s),t=(0,Z.Z)(m.current);return t.addEventListener(e,j),function(){t.removeEventListener(e,j)}}}),[j,s]),(0,d.jsx)(o.Fragment,{children:o.cloneElement(t,N)})},j=n(4942),C=n(7462),N=n(3366),S=n(831),b=n(2466),w=n(4419),k=n(1217),A=n(3457),D=n(6083),P=n(8519),F=n(2173),E=n(1184),y=n(5682),I=["component","direction","spacing","divider","children","className","useFlexGap"],M=(0,F.Z)(),R=(0,A.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function z(e){return(0,D.Z)({props:e,name:"MuiStack",defaultTheme:M})}function T(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,a,r){return e.push(a),r<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(r)})),e}),[])}var L=function(e){var t=e.ownerState,n=e.theme,a=(0,C.Z)({display:"flex",flexDirection:"column"},(0,E.k9)({theme:n},(0,E.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,y.hB)(n),r=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),s=(0,E.P$)({values:t.direction,base:r}),i=(0,E.P$)({values:t.spacing,base:r});"object"===typeof s&&Object.keys(s).forEach((function(e,t,n){if(!s[e]){var a=t>0?s[n[t-1]]:"column";s[e]=a}}));a=(0,b.Z)(a,(0,E.k9)({theme:n},i,(function(e,n){return t.useFlexGap?{gap:(0,y.NA)(o,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,j.Z)({},"margin".concat((a=n?s[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[a])),(0,y.NA)(o,e))};var a})))}return a=(0,E.dt)(n.breakpoints,a)};var W=n(6934),H=n(1402),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?R:t,a=e.useThemeProps,r=void 0===a?z:a,s=e.componentName,i=void 0===s?"MuiStack":s,c=n(L),l=o.forwardRef((function(e,t){var n=r(e),a=(0,P.Z)(n),o=a.component,s=void 0===o?"div":o,l=a.direction,u=void 0===l?"column":l,m=a.spacing,f=void 0===m?0:m,h=a.divider,p=a.children,v=a.className,Z=a.useFlexGap,x=void 0!==Z&&Z,g=(0,N.Z)(a,I),j={direction:u,spacing:f,useFlexGap:x},b=(0,w.Z)({root:["root"]},(function(e){return(0,k.Z)(i,e)}),{});return(0,d.jsx)(c,(0,C.Z)({as:s,ownerState:j,ref:t,className:(0,S.Z)(b.root,v)},g,{children:h?T(p,h):p}))}));return l}({createStyledComponent:(0,W.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,H.Z)({props:e,name:"MuiStack"})}}),G=O,U=n(2022),B=function(e){return e.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)?"multi-panel-UI-view":e.match(/^([A-Za-z]*)(DigitalClock)$/)?"Tall-UI-view":e.match(/^Static([A-Za-z]+)/)||e.match(/^([A-Za-z]+)(Calendar|Clock)$/)?"UI-view":e.match(/^MultiInput([A-Za-z]+)RangeField$/)||e.match(/^([A-Za-z]+)RangePicker$/)?"multi-input-range-field":e.match(/^SingleInput([A-Za-z]+)RangeField$/)?"single-input-range-field":"single-input-field"},V=function(e){return e.includes("DateTime")?"date-time":e.includes("Date")?"date":"time"};function Y(e){var t=e.children,n=e.components,a=e.sx,o=new Set,r=new Set;n.forEach((function(e){o.add(B(e)),r.add(V(e))}));var s,i,c=function(e){return"row"===e?o.has("UI-view")||o.has("Tall-UI-view")?3:2:o.has("UI-view")?4:3},l=(0,C.Z)({overflow:"auto",pt:1},a);return n.length>2||o.has("multi-input-range-field")||o.has("single-input-range-field")||o.has("multi-panel-UI-view")||o.has("UI-view")||r.has("date-time")?(s="column",i=c("column")):(s={xs:"column",lg:"row"},i={xs:c("column"),lg:c("row")}),o.has("UI-view")||(l=o.has("single-input-range-field")?r.has("date-time")?(0,C.Z)({},l,(0,j.Z)({},"& > .".concat(U.Z.root),{minWidth:{xs:300,md:400}})):(0,C.Z)({},l,(0,j.Z)({},"& > .".concat(U.Z.root),{minWidth:300})):r.has("date-time")?(0,C.Z)({},l,(0,j.Z)({},"& > .".concat(U.Z.root),{minWidth:270})):(0,C.Z)({},l,(0,j.Z)({},"& > .".concat(U.Z.root),{minWidth:200}))),(0,d.jsx)(G,{direction:s,spacing:i,sx:l,children:t})}var $=n(1652),K=n(4750),X=n(5185),J=n(7892),_=n.n(J);var q=function(e){var t=o.useState(null),n=(0,a.Z)(t,2),r=n[0],i=n[1],u=function(e){i(r?null:e.currentTarget)},p=Boolean(r),v=p?"simple-popper":void 0,Z=o.useState(null),x=(0,a.Z)(Z,2),j=x[0],C=x[1],N=o.useState(null),S=(0,a.Z)(N,2),b=S[0],w=S[1];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(f.Z,{onClick:u,className:"button",children:(0,d.jsx)(m,{sx:{color:"black"}})}),(0,d.jsx)(h.Z,{className:"calen-popper",id:v,open:p,anchorEl:r,placement:"bottom",children:(0,d.jsx)(g,{onClickAway:u,children:(0,d.jsx)(s.Z,{className:"calen-popup",children:(0,d.jsx)($._,{dateAdapter:K.y,children:(0,d.jsx)(Y,{components:["DatePicker","DatePicker"],children:(0,d.jsxs)(s.Z,{className:"calen-popup-body",children:[(0,d.jsx)(c.Z,{children:"Selecione o intevalo de dias:"}),(0,d.jsx)(X.M,{className:"calen-popup-item",label:"In\xedcio",value:j,onChange:function(e){return C(e)}}),(0,d.jsx)(X.M,{className:"calen-popup-item",label:"Fim",value:b,onChange:function(e){return w(e)}}),(0,d.jsx)(f.Z,{onClick:function(){if(null!==j&&null!==b&&j<=b){var t=_()(j).format("YYYY-MM-DD"),n=_()(b).format("YYYY-MM-DD");e.filtroState.setFiltro((0,l.Z)((0,l.Z)({},e.filtroState.filtro),{},{dataInicio:t,dataFim:n})),console.log(e.filtroState.filtro)}else alert("Data de in\xedcio deve ser menor ou igual a data de fim")},className:"button-submit",children:"Aplicar"})]})})})})})})]})},Q=n(2672),ee=n(4479);var te=function(e){var t=o.useState(null),n=(0,a.Z)(t,2),r=n[0],i=n[1],u=function(e){i(r?null:e.currentTarget)},m=Boolean(r),p=m?"simple-popper":void 0,v=e.filtroState,Z=v.filtro,x=v.setFiltro,j=o.useState({semFilto:!0,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1}),C=(0,a.Z)(j,2),N=C[0],S=C[1],b=N.semFilto,w=N.pendente,k=N.confirmado,A=N.cancelado,D=N.recusado,P=N.concluido,F=N.aguardando;function E(e){switch(e){case"Sem Filtro":return S({semFilto:!0,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1}),e;case"Pendente":return S({semFilto:!1,pendente:!0,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1}),e;case"Confirmado":return S({semFilto:!1,pendente:!1,confirmado:!0,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1}),e;case"Cancelado":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!0,recusado:!1,concluido:!1,aguardando:!1}),e;case"Recusado":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!0,concluido:!1,aguardando:!1}),e;case"Conclu\xeddo":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!0,aguardando:!1}),e;case"Aguardando":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!0}),e}return e}return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)(s.Z,{className:"modal",children:[(0,d.jsx)(f.Z,{className:"button",id:"basic-button","aria-controls":m?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":m?"true":void 0,onClick:u,children:(0,d.jsx)(Q.Z,{sx:{color:"black"}})}),(0,d.jsx)(h.Z,{className:"filtro-popper",id:p,open:m,anchorEl:r,placement:"bottom-start",children:(0,d.jsx)(g,{onClickAway:u,children:(0,d.jsxs)(s.Z,{className:"filtro-popup",children:[(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:b,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Sem Filtro")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Sem Filtros"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:w,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Pendente")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Pendente"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:k,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Confirmado")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Confirmado"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:A,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Cancelado")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Cancelado"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:D,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Recusado")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Recusado"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:P,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Conclu\xeddo")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Conclu\xeddo"})]}),(0,d.jsxs)(s.Z,{className:"filtro-popup-item",children:[(0,d.jsx)(ee.Z,{color:"success",checked:F,onChange:function(){x((0,l.Z)((0,l.Z)({},Z),{},{status:E("Aguardando")}))}}),(0,d.jsx)(c.Z,{className:"filtro-popup-text",children:"Aguardando"})]})]})})})]})})},ne=n(3006),ae=n(3466),oe=(0,u.Z)((0,d.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined");var re=function(e){var t=o.useState(""),n=(0,a.Z)(t,2),r=n[0],s=n[1];return(0,o.useEffect)((function(){e.filtroState.setFiltro((0,l.Z)((0,l.Z)({},e.filtroState.filtro),{},{nomeFiltro:r}))}),[r]),(0,d.jsx)(ne.Z,{placeholder:"Filtrar",className:"input_filtro",name:"input_filtro",value:r,onChange:function(e){s(e.target.value)},InputProps:{endAdornment:(0,d.jsx)(ae.Z,{position:"end",children:(0,d.jsx)(oe,{className:"lupa"})})},variant:"standard"})};var se=function(e){var t=e.filtroState,n=t.filtro,a=t.setFiltro;return(0,d.jsxs)(i.Z,{className:"container",children:[(0,d.jsx)(c.Z,{className:"titulo",children:"Pedidos"}),(0,d.jsxs)(s.Z,{className:"direita",children:[(0,d.jsx)(re,{filtroState:{filtro:n,setFiltro:a}}),(0,d.jsx)(q,{filtroState:{filtro:n,setFiltro:a}}),(0,d.jsx)(te,{filtroState:{filtro:n,setFiltro:a}})]})]})},ie=n(9281),ce=n(9836),le=n(6890),ue=n(5855),de=n(3994),me=n(3382),fe=n(3345),he=n(7689);var pe=function(e){var t=(0,he.s0)(),n=o.useState(null),r=(0,a.Z)(n,2),i=(r[0],r[1]);return(0,d.jsxs)(s.Z,{onClick:function(){return i(null),void t("/exibicao-perfil?id="+e.id)},className:"perfil-container",children:[(0,d.jsx)(fe.Z,{id:e.id,nome:e.nome.toUpperCase(),className:"avatar"}),(0,d.jsx)(c.Z,{className:"nome",children:e.nome})]},"usuario-pedido-".concat(e.id))};var ve=function(e){return"Recusado"===e.status||"Cancelado"===e.status?(0,d.jsx)(s.Z,{className:"status recusadoCancelado",children:e.status}):"Confirmado"===e.status?(0,d.jsx)(s.Z,{className:"status confirmado",children:e.status}):"Pendente"===e.status||"Aguardando Pagamento"===e.status?(0,d.jsx)(s.Z,{className:"status pendente",children:e.status}):(0,d.jsx)(s.Z,{className:"status concluido",children:e.status})},Ze=n(4165),xe=n(5861),ge=n(3433),je=n(3827),Ce=n(6739),Ne=(0,u.Z)((0,d.jsx)("path",{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"}),"MessageOutlined"),Se=n(1687),be=n(1659),we=n(1978),ke=function(e,t){return Se.Z.put(e,t,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},Ae=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"confirmar";return(0,d.jsx)(f.Z,{className:"btnModal ".concat(n),onClick:t,children:e})};var De=function(e){var t=e.pedido,n=o.useState([]),r=(0,a.Z)(n,2),i=r[0],l=r[1],u=e.errosState.erros,m=function(t){e.errosState.setErros([].concat((0,ge.Z)(u),[t]))},h=function(e,t){switch(e.response.status){case 400:m("Erro ao ".concat(t," pedido!"));break;case 401:m("Voc\xea n\xe3o tem permiss\xe3o para ".concat(t," este pedido!"));break;case 404:m("Pedido n\xe3o encontrado!");break;case 409:m("Voc\xea n\xe3o pode realizar essa a\xe7\xe3o");break;default:m("Erro desconhecido!")}};(0,o.useEffect)((function(){void 0!==t&&l([{id:1,desc:"".concat(t.aluno.nome," fez uma proposta de ").concat(t.aula.instrumento.nome," para ").concat(t.professor.nome," no dia ").concat(new Date(t.dataAula).toLocaleDateString())}])}),[t]);var p=(0,he.s0)(),v=function(){ke("/pedidos/aceita-pedido",{idPedido:t.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(m("Pedido confirmado com sucesso!"),p(0))})).catch((function(e){h(e,"confirmar")}))},Z=function(){ke("/pedidos/cancela-pedido",{idPedido:t.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(m("Pedido cancelado com sucesso!"),p(0))})).catch((function(e){h(e,"cancelar")}))},x=function(){ke("/pedidos/recusa-pedido",{idPedido:t.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(m("Pedido recusado com sucesso!"),p(0))})).catch((function(e){h(e,"recusar")}))},g=function(){ke("/pedidos/conclui-pedido",{idPedido:t.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(m("Pedido confirmado com sucesso!"),p(0))})).catch((function(e){h(e,"confirmar")}))},j=function(){ke("/pedidos/realiza-pagamento",{idPedido:t.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(m("Pagamento realizado com sucesso!"),p(0))})).catch((function(e){h(e,"realizar pagamento")}))};function C(){return(C=(0,xe.Z)((0,Ze.Z)().mark((function e(){var n,a,o;return(0,Ze.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,we.IO)((0,we.hJ)(be.db,"chats"),(0,we.xD)((0,we.ar)("idProfessor","==",Number(t.professor.id)),(0,we.ar)("idAluno","==",Number(t.aluno.id)))),e.next=3,(0,we.PL)(n);case 3:(a=e.sent).empty?(o=(0,we.Bt)(),be.db.collection("chats").add({bloqueado:!1,idAluno:Number(t.aluno.id),idProfessor:Number(t.professor.id),nomeAluno:t.aluno.nome.split(" ")[0],nomeProfessor:t.professor.nome.split(" ")[0],timestamp:o,ultimaMensagem:"Envie uma mensagem para iniciar a conversa!"}).then((function(e){e.get().then((function(e){console.log(e.id),p("/chat",{state:{idChatAtivo:e.id,chatAtivo:e.data()}})}))})).catch((function(e){console.error("Error adding document: ",e)}))):p("/chat",{state:{idChatAtivo:a.docs[0].id,chatAtivo:a.docs[0].data()}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(void 0!==t)return(0,d.jsx)(je.Z,{open:e.open,onClose:e.onClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,d.jsxs)(s.Z,{className:"containerModal",children:[(0,d.jsxs)(s.Z,{className:"container-historico",children:[(0,d.jsxs)(s.Z,{className:"conteudoTop",children:[(0,d.jsx)(c.Z,{className:"tituloModal",children:"Informa\xe7\xf5es"}),(0,d.jsx)(f.Z,{onClick:function(){e.onClose()},children:(0,d.jsx)(Ce.Z,{className:"icon-color"})})]}),"Aluno"===sessionStorage.CATEGORIA?(0,d.jsx)(pe,{nome:t.professor.nome}):(0,d.jsx)(pe,{nome:t.aluno.nome}),(0,d.jsxs)(s.Z,{className:"tudoConteudo",children:[(0,d.jsxs)(s.Z,{className:"conteudoB1",children:[(0,d.jsx)(c.Z,{className:"tituloDetalhe",children:"Instrumento:"}),(0,d.jsx)(c.Z,{className:"valorDetalhe",children:t.aula.instrumento.nome})]}),(0,d.jsxs)(s.Z,{className:"conteudoB1",children:[(0,d.jsx)(c.Z,{className:"tituloDetalhe",children:"Data: "}),(0,d.jsxs)(c.Z,{className:"valorDetalhe",children:[new Date(t.dataAula).toLocaleDateString()+" \xe0s ",new Date(t.dataAula).getHours()<10?" 0"+new Date(t.dataAula).getHours():new Date(t.dataAula).getHours(),":",new Date(t.dataAula).getMinutes()<10?"0"+new Date(t.dataAula).getMinutes():new Date(t.dataAula).getMinutes()]})]})]}),(0,d.jsxs)(s.Z,{className:"historicoModal",children:[(0,d.jsx)(c.Z,{className:"tituloModal",children:"Hist\xf3rico"}),(0,d.jsx)(s.Z,{className:"historico-lista",children:i.map((function(e){return(0,d.jsx)(c.Z,{className:"descHistorico",children:e.desc})}))})]})]}),(0,d.jsxs)(s.Z,{className:"footerModal",children:["Aguardando Pagamento"===t.status.descricao||"Pendente"===t.status.descricao||"Confirmado"===t.status.descricao?(0,d.jsxs)(f.Z,{className:"msgChat",onClick:function(){return C.apply(this,arguments)},children:[(0,d.jsx)(Ne,{className:"icon-color msg-icon"}),(0,d.jsx)(c.Z,{className:"txtChat",children:"Mandar mensagem"})]}):null,(0,d.jsx)(s.Z,{className:"botoesModal",children:function(e){var n=sessionStorage.CATEGORIA;if("Aluno"===n)switch(e){case"Pendente":return Ae("Cancelar",Z,"cancelar");case"Aguardando Pagamento":return(0,d.jsxs)(d.Fragment,{children:[Ae("Realizar Pagamento",j,"confirmar"),Ae("Cancelar",Z,"cancelar")]});case"Confirmado":if(new Date>new Date(t.dataAula))return Ae("Concluir Pedido",g,"aceitar");default:return null}else if("Professor"===n)switch(e){case"Pendente":return(0,d.jsxs)(d.Fragment,{children:[Ae("Confirmar",v,"confirmar"),Ae("Recusar",x,"cancelar")]});case"Aguardando Pagamento":return Ae("Cancelar",Z,"cancelar");default:return null}}(t.status.descricao)})]})]})})},Pe=n(1399);var Fe=function(e){var t=(0,o.useState)([]),n=(0,a.Z)(t,2),r=n[0],s=n[1],i=e.errosState,c=i.erros,l=i.setErros,u=e.filtroState.filtro;console.log(u);var m="";m="Sem Filtro"===u.status?"/pedidos/usuario/".concat(sessionStorage.ID):"/pedidos/usuario/hashing/".concat(sessionStorage.ID,"?status=").concat(u.status),(0,o.useEffect)((function(){Se.Z.get(m,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){var t=e.data;""!==t?(t=t.sort((function(e,t){return new Date(t.horaCriacao)-new Date(e.horaCriacao)})),null!==u.dataInicio&&null!==u.dataFim&&(t=t.filter((function(e){var t=new Date(e.dataAula).toLocaleDateString(),n=new Date(u.dataInicio);n.setDate(n.getDate()+1),n=n.toLocaleDateString();var a=new Date(u.dataFim);return a.setDate(a.getDate()+1),a=a.toLocaleDateString(),console.log(t+" / "+n+" / "+a),t>=n&&t<=a}))),"Professor"===sessionStorage.getItem("CATEGORIA")?""!==u.nomeFiltro&&(t=t.filter((function(e){return e.aluno.nome.toLowerCase().includes(u.nomeFiltro.toLowerCase())}))):""!==u.nomeFiltro&&(t=t.filter((function(e){return e.professor.nome.toLowerCase().includes(u.nomeFiltro.toLowerCase())}))),s(t),console.log(t)):s([])}))}),[u]);var h=(0,o.useState)(!1),p=(0,a.Z)(h,2),v=p[0],Z=p[1],x=(0,o.useState)(),g=(0,a.Z)(x,2),j=g[0],C=g[1];return(0,d.jsxs)(ie.Z,{style:{maxHeight:"90%",overflow:"scroll"},children:[(0,d.jsxs)(ce.Z,{stickyHeader:!0,sx:{minWidth:650},"aria-label":"simple table",children:[(0,d.jsx)(le.Z,{className:"head",children:(0,d.jsxs)(ue.Z,{children:[(0,d.jsx)(de.Z,{className:"topCelula",align:"left",children:"Professor"===sessionStorage.getItem("CATEGORIA")?"Aluno":"Professor"}),(0,d.jsx)(de.Z,{className:"topCelula",align:"center",children:"Instrumento"}),(0,d.jsx)(de.Z,{className:"topCelula",align:"center",children:"Status"}),(0,d.jsx)(de.Z,{className:"topCelula",align:"center",children:"Data"}),(0,d.jsx)(de.Z,{className:"topCelula",align:"center",children:"Valor"}),(0,d.jsx)(de.Z,{className:"topCelula",align:"center"})]})}),(0,d.jsx)(me.Z,{className:"conteudoTabela",children:0!==r.length?r.map((function(e){return(0,d.jsxs)(ue.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,d.jsx)(de.Z,{className:"bodyCelula",align:"left",children:(0,d.jsx)(pe,{id:"Professor"===sessionStorage.CATEGORIA?e.aluno.id:e.professor.id,nome:"Professor"===sessionStorage.CATEGORIA?e.aluno.nome:e.professor.nome})}),(0,d.jsx)(de.Z,{className:"bodyCelula",align:"center",children:e.aula.instrumento.nome}),(0,d.jsx)(de.Z,{className:"bodyCelula",align:"center",children:(0,d.jsx)(ve,{status:e.status.descricao})}),(0,d.jsx)(de.Z,{className:"bodyCelula",align:"center",children:(t=e.dataAula,new Date(t).toLocaleDateString())}),(0,d.jsxs)(de.Z,{className:"bodyCelula",style:{fontWeight:"bold"},align:"left",children:["R$ ",e.aula.valorAula.toFixed(2)]}),(0,d.jsx)(de.Z,{className:"bodyCelula",align:"center",children:"Conclu\xeddo"===e.status.descricao?(0,d.jsx)(Pe.Z,{stateUsuario:e}):(0,d.jsx)(f.Z,{variant:"outlined",className:"botao",onClick:function(){var t;t=e,console.log(t),Z(!0),C(t)},children:" Detalhes"})})]},e.id);var t})):(0,d.jsx)(ue.Z,{children:(0,d.jsx)(de.Z,{colSpan:6,className:"bodyCelula",align:"center",children:"Nenhum pedido encontrado"})})})]}),(0,d.jsx)(De,{open:v,onClose:function(){return Z(!1)},pedido:j,errosState:{erros:c,setErros:l}})]})},Ee=n(2703);var ye=function(){var e=o.useState([]),t=(0,a.Z)(e,2),n=t[0],i=t[1],c=(0,he.s0)();(0,o.useEffect)((function(){(0,Ee.Wi)()&&c(-1)}),[]);var l=o.useState({status:"Sem Filtro",dataInicio:null,dataFim:null,nomeFiltro:""}),u=(0,a.Z)(l,2),m=u[0],f=u[1];return(0,d.jsx)(r.Z,{tela:"pedidos",errosState:{erros:n,setErros:i},children:(0,d.jsx)(s.Z,{className:"pagina-container",children:(0,d.jsxs)(s.Z,{className:"pagina-conteudo",children:[(0,d.jsx)(se,{filtroState:{filtro:m,setFiltro:f}}),(0,d.jsx)(s.Z,{className:"divider"}),(0,d.jsx)(Fe,{errosState:{erros:n,setErros:i},filtroState:{filtro:m,setFiltro:f}})]})})})}},2703:function(e,t,n){n.d(t,{Wi:function(){return s},Y8:function(){return i},mA:function(){return c}});var a=n(4165),o=n(5861),r=n(1243);function s(){var e=sessionStorage.TOKEN;return(null===e||""===e||e.length<186)&&(sessionStorage.TOKEN="",!0)}function i(e){var t=(e=e.split("/"))[0],n=e[1],a=e[2];return t<1||t>31?{error:!0,helperText:"Dia inv\xe1lido"}:n<1||n>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:a<1900||a>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(a,n-1,t)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function c(e){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,a.Z)().mark((function e(t){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={},e.next=3,r.Z.get("https://viacep.com.br/ws/".concat(t,"/json/")).then((function(e){n=e.data.erro?null:e.data})).catch((function(e){console.log(e)}));case 3:return console.log("Resposta:"),console.log(n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2672:function(e,t,n){var a=n(4836);t.Z=void 0;var o=a(n(5649)),r=n(184),s=(0,o.default)((0,r.jsx)("path",{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAltOutlined");t.Z=s},9164:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(4942),o=n(3366),r=n(7462),s=n(2791),i=n(831),c=n(1122),l=n(1217),u=n(4419),d=n(6083),m=n(3457),f=n(2173),h=n(184),p=["className","component","disableGutters","fixed","maxWidth","classes"],v=(0,f.Z)(),Z=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,c.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),x=function(e){return(0,d.Z)({props:e,name:"MuiContainer",defaultTheme:v})};var g=n(4036),j=n(6934),C=n(1402),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?Z:t,d=e.useThemeProps,m=void 0===d?x:d,f=e.componentName,v=void 0===f?"MuiContainer":f,g=n((function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!n.disableGutters&&(0,a.Z)({paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}))}),(function(e){var t=e.theme;return e.ownerState.fixed&&Object.keys(t.breakpoints.values).reduce((function(e,n){var a=n,o=t.breakpoints.values[a];return 0!==o&&(e[t.breakpoints.up(a)]={maxWidth:"".concat(o).concat(t.breakpoints.unit)}),e}),{})}),(function(e){var t=e.theme,n=e.ownerState;return(0,r.Z)({},"xs"===n.maxWidth&&(0,a.Z)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),n.maxWidth&&"xs"!==n.maxWidth&&(0,a.Z)({},t.breakpoints.up(n.maxWidth),{maxWidth:"".concat(t.breakpoints.values[n.maxWidth]).concat(t.breakpoints.unit)}))})),j=s.forwardRef((function(e,t){var n=m(e),a=n.className,s=n.component,d=void 0===s?"div":s,f=n.disableGutters,Z=void 0!==f&&f,x=n.fixed,j=void 0!==x&&x,C=n.maxWidth,N=void 0===C?"lg":C,S=(0,o.Z)(n,p),b=(0,r.Z)({},n,{component:d,disableGutters:Z,fixed:j,maxWidth:N}),w=function(e,t){var n=e.classes,a=e.fixed,o=e.disableGutters,r=e.maxWidth,s={root:["root",r&&"maxWidth".concat((0,c.Z)(String(r))),a&&"fixed",o&&"disableGutters"]};return(0,u.Z)(s,(function(e){return(0,l.Z)(t,e)}),n)}(b,v);return(0,h.jsx)(g,(0,r.Z)({as:d,ownerState:b,className:(0,i.Z)(w.root,a),ref:t},S))}));return j}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t["maxWidth".concat((0,g.Z)(String(n.maxWidth)))],n.fixed&&t.fixed,n.disableGutters&&t.disableGutters]}}),useThemeProps:function(e){return(0,C.Z)({props:e,name:"MuiContainer"})}}),S=N},3457:function(e,t,n){var a=(0,n(4046).ZP)();t.Z=a},1978:function(e,t,n){n.d(t,{Bt:function(){return a.Bt},EK:function(){return a.EK},IO:function(){return a.IO},PL:function(){return a.PL},Xo:function(){return a.Xo},ar:function(){return a.ar},cf:function(){return a.cf},hJ:function(){return a.hJ},or:function(){return a.or},xD:function(){return a.xD}});var a=n(3577)}}]);
//# sourceMappingURL=780.4996b702.chunk.js.map