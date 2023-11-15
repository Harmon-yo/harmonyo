"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[955],{6773:function(e,a,t){t.r(a),t.d(a,{default:function(){return ze}});var o=t(3433),n=t(9439),s=t(2791),r=t(4056),i=t(4554),c=t(9164),l=t(890),d=t(1413),u=t(4223),m=t(184),h=(0,u.Z)((0,m.jsx)("path",{d:"M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"}),"CalendarMonthOutlined"),f=t(6151),p=t(41),Z=t(6117),x=t(7054),v=t(4913);function g(e){return e.substring(2).toLowerCase()}var j=function(e){var a=e.children,t=e.disableReactTree,o=void 0!==t&&t,n=e.mouseEvent,r=void 0===n?"onClick":n,i=e.onClickAway,c=e.touchEvent,l=void 0===c?"onTouchEnd":c,d=s.useRef(!1),u=s.useRef(null),h=s.useRef(!1),f=s.useRef(!1);s.useEffect((function(){return setTimeout((function(){h.current=!0}),0),function(){h.current=!1}}),[]);var p=(0,Z.Z)(a.ref,u),j=(0,x.Z)((function(e){var a=f.current;f.current=!1;var t=(0,v.Z)(u.current);!h.current||!u.current||"clientX"in e&&function(e,a){return a.documentElement.clientWidth<e.clientX||a.documentElement.clientHeight<e.clientY}(e,t)||(d.current?d.current=!1:(e.composedPath?e.composedPath().indexOf(u.current)>-1:!t.documentElement.contains(e.target)||u.current.contains(e.target))||!o&&a||i(e))})),N=function(e){return function(t){f.current=!0;var o=a.props[e];o&&o(t)}},C={ref:p};return!1!==l&&(C[l]=N(l)),s.useEffect((function(){if(!1!==l){var e=g(l),a=(0,v.Z)(u.current),t=function(){d.current=!0};return a.addEventListener(e,j),a.addEventListener("touchmove",t),function(){a.removeEventListener(e,j),a.removeEventListener("touchmove",t)}}}),[j,l]),!1!==r&&(C[r]=N(r)),s.useEffect((function(){if(!1!==r){var e=g(r),a=(0,v.Z)(u.current);return a.addEventListener(e,j),function(){a.removeEventListener(e,j)}}}),[j,r]),(0,m.jsx)(s.Fragment,{children:s.cloneElement(a,C)})},N=t(4942),C=t(7462),S=t(3366),b=t(831),A=t(2466),w=t(4419),k=t(1217),F=t(3457),D=t(6083),P=t(8519),E=t(2173),I=t(1184),y=t(5682),R=["component","direction","spacing","divider","children","className","useFlexGap"],z=(0,E.Z)(),M=(0,F.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,a){return a.root}});function T(e){return(0,D.Z)({props:e,name:"MuiStack",defaultTheme:z})}function O(e,a){var t=s.Children.toArray(e).filter(Boolean);return t.reduce((function(e,o,n){return e.push(o),n<t.length-1&&e.push(s.cloneElement(a,{key:"separator-".concat(n)})),e}),[])}var L=function(e){var a=e.ownerState,t=e.theme,o=(0,C.Z)({display:"flex",flexDirection:"column"},(0,I.k9)({theme:t},(0,I.P$)({values:a.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(a.spacing){var n=(0,y.hB)(t),s=Object.keys(t.breakpoints.values).reduce((function(e,t){return("object"===typeof a.spacing&&null!=a.spacing[t]||"object"===typeof a.direction&&null!=a.direction[t])&&(e[t]=!0),e}),{}),r=(0,I.P$)({values:a.direction,base:s}),i=(0,I.P$)({values:a.spacing,base:s});"object"===typeof r&&Object.keys(r).forEach((function(e,a,t){if(!r[e]){var o=a>0?r[t[a-1]]:"column";r[e]=o}}));o=(0,A.Z)(o,(0,I.k9)({theme:t},i,(function(e,t){return a.useFlexGap?{gap:(0,y.NA)(n,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":(0,N.Z)({},"margin".concat((o=t?r[t]:a.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,y.NA)(n,e))};var o})))}return o=(0,I.dt)(t.breakpoints,o)};var W=t(6934),G=t(1402),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.createStyledComponent,t=void 0===a?M:a,o=e.useThemeProps,n=void 0===o?T:o,r=e.componentName,i=void 0===r?"MuiStack":r,c=t(L),l=s.forwardRef((function(e,a){var t=n(e),o=(0,P.Z)(t),s=o.component,r=void 0===s?"div":s,l=o.direction,d=void 0===l?"column":l,u=o.spacing,h=void 0===u?0:u,f=o.divider,p=o.children,Z=o.className,x=o.useFlexGap,v=void 0!==x&&x,g=(0,S.Z)(o,R),j={direction:d,spacing:h,useFlexGap:v},N=(0,w.Z)({root:["root"]},(function(e){return(0,k.Z)(i,e)}),{});return(0,m.jsx)(c,(0,C.Z)({as:r,ownerState:j,ref:a,className:(0,b.Z)(N.root,Z)},g,{children:f?O(p,f):p}))}));return l}({createStyledComponent:(0,W.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,a){return a.root}}),useThemeProps:function(e){return(0,G.Z)({props:e,name:"MuiStack"})}}),U=H,B=t(2022),V=function(e){return e.match(/^([A-Za-z]+)Range(Calendar|Clock)$/)?"multi-panel-UI-view":e.match(/^([A-Za-z]*)(DigitalClock)$/)?"Tall-UI-view":e.match(/^Static([A-Za-z]+)/)||e.match(/^([A-Za-z]+)(Calendar|Clock)$/)?"UI-view":e.match(/^MultiInput([A-Za-z]+)RangeField$/)||e.match(/^([A-Za-z]+)RangePicker$/)?"multi-input-range-field":e.match(/^SingleInput([A-Za-z]+)RangeField$/)?"single-input-range-field":"single-input-field"},K=function(e){return e.includes("DateTime")?"date-time":e.includes("Date")?"date":"time"};function Y(e){var a=e.children,t=e.components,o=e.sx,n=new Set,s=new Set;t.forEach((function(e){n.add(V(e)),s.add(K(e))}));var r,i,c=function(e){return"row"===e?n.has("UI-view")||n.has("Tall-UI-view")?3:2:n.has("UI-view")?4:3},l=(0,C.Z)({overflow:"auto",pt:1},o);return t.length>2||n.has("multi-input-range-field")||n.has("single-input-range-field")||n.has("multi-panel-UI-view")||n.has("UI-view")||s.has("date-time")?(r="column",i=c("column")):(r={xs:"column",lg:"row"},i={xs:c("column"),lg:c("row")}),n.has("UI-view")||(l=n.has("single-input-range-field")?s.has("date-time")?(0,C.Z)({},l,(0,N.Z)({},"& > .".concat(B.Z.root),{minWidth:{xs:300,md:400}})):(0,C.Z)({},l,(0,N.Z)({},"& > .".concat(B.Z.root),{minWidth:300})):s.has("date-time")?(0,C.Z)({},l,(0,N.Z)({},"& > .".concat(B.Z.root),{minWidth:270})):(0,C.Z)({},l,(0,N.Z)({},"& > .".concat(B.Z.root),{minWidth:200}))),(0,m.jsx)(U,{direction:r,spacing:i,sx:l,children:a})}var $=t(1652),_=t(4750),X=t(5185),J=t(7892),q=t.n(J);var Q=function(e){var a=s.useState(null),t=(0,n.Z)(a,2),o=t[0],r=t[1],c=function(e){r(o?null:e.currentTarget)},u=Boolean(o),Z=u?"simple-popper":void 0,x=s.useState(null),v=(0,n.Z)(x,2),g=v[0],N=v[1],C=s.useState(null),S=(0,n.Z)(C,2),b=S[0],A=S[1];return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{onClick:c,className:"button",children:(0,m.jsx)(h,{sx:{color:"black"}})}),(0,m.jsx)(p.Z,{className:"calen-popper",id:Z,open:u,anchorEl:o,placement:"bottom",children:(0,m.jsx)(j,{onClickAway:c,children:(0,m.jsx)(i.Z,{className:"calen-popup",children:(0,m.jsx)($._,{dateAdapter:_.y,children:(0,m.jsx)(Y,{components:["DatePicker","DatePicker"],children:(0,m.jsxs)(i.Z,{className:"calen-popup-body",children:[(0,m.jsx)(l.Z,{children:"Selecione o intevalo de dias:"}),(0,m.jsx)(X.M,{className:"calen-popup-item",label:"In\xedcio",value:g,onChange:function(e){return N(e)}}),(0,m.jsx)(X.M,{className:"calen-popup-item",label:"Fim",value:b,onChange:function(e){return A(e)}}),(0,m.jsx)(f.Z,{onClick:function(){if(null!==g&&null!==b&&g<=b){var a=q()(g).format("YYYY-MM-DD"),t=q()(b).format("YYYY-MM-DD");e.filtroState.setFiltro((0,d.Z)((0,d.Z)({},e.filtroState.filtro),{},{dataInicio:a,dataFim:t})),console.log(e.filtroState.filtro)}else alert("Data de in\xedcio deve ser menor ou igual a data de fim")},className:"button-submit",children:"Aplicar"})]})})})})})})]})},ee=t(2672),ae=t(4479);var te=function(e){var a=s.useState(null),t=(0,n.Z)(a,2),o=t[0],r=t[1],c=function(e){r(o?null:e.currentTarget)},u=Boolean(o),h=u?"simple-popper":void 0,Z=e.filtroState,x=Z.filtro,v=Z.setFiltro,g=s.useState({semFilto:!0,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1,emFila:!1}),N=(0,n.Z)(g,2),C=N[0],S=N[1],b=C.semFilto,A=C.pendente,w=C.confirmado,k=C.cancelado,F=C.recusado,D=C.concluido,P=C.aguardando,E=C.emFila;function I(e){switch(e){case"Sem Filtro":return S({semFilto:!0,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1,emFila:!1}),e;case"Pendente":return S({semFilto:!1,pendente:!0,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1,emFila:!1}),e;case"Confirmado":return S({semFilto:!1,pendente:!1,confirmado:!0,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1,emFila:!1}),e;case"Cancelado":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!0,recusado:!1,concluido:!1,aguardando:!1,emFila:!1}),e;case"Recusado":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!0,concluido:!1,aguardando:!1,emFila:!1}),e;case"Conclu\xeddo":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!0,aguardando:!1,emFila:!1}),e;case"Aguardando":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!0,emFila:!1}),e;case"Em Fila":return S({semFilto:!1,pendente:!1,confirmado:!1,cancelado:!1,recusado:!1,concluido:!1,aguardando:!1,emFila:!0}),e}return e}return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(i.Z,{className:"modal",children:[(0,m.jsx)(f.Z,{className:"button",id:"basic-button","aria-controls":u?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":u?"true":void 0,onClick:c,children:(0,m.jsx)(ee.Z,{sx:{color:"black"}})}),(0,m.jsx)(p.Z,{className:"filtro-popper",id:h,open:u,anchorEl:o,placement:"bottom-start",children:(0,m.jsx)(j,{onClickAway:c,children:(0,m.jsxs)(i.Z,{className:"filtro-popup",children:[(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:b,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Sem Filtro")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Sem Filtros"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:A,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Pendente")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Pendente"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:w,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Confirmado")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Confirmado"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:k,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Cancelado")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Cancelado"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:F,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Recusado")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Recusado"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:D,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Conclu\xeddo")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Conclu\xeddo"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:P,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Aguardando")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Aguardando"})]}),(0,m.jsxs)(i.Z,{className:"filtro-popup-item",children:[(0,m.jsx)(ae.Z,{color:"success",checked:E,onChange:function(){v((0,d.Z)((0,d.Z)({},x),{},{status:I("Em Fila")}))}}),(0,m.jsx)(l.Z,{className:"filtro-popup-text",children:"Em Fila"})]})]})})})]})})},oe=t(3006),ne=t(3466),se=(0,u.Z)((0,m.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"SearchOutlined");var re=function(e){var a=s.useState(""),t=(0,n.Z)(a,2),o=t[0],r=t[1];return(0,s.useEffect)((function(){e.filtroState.setFiltro((0,d.Z)((0,d.Z)({},e.filtroState.filtro),{},{nomeFiltro:o}))}),[o]),(0,m.jsx)(oe.Z,{placeholder:"Filtrar",className:"input_filtro",name:"input_filtro",value:o,onChange:function(e){r(e.target.value)},InputProps:{endAdornment:(0,m.jsx)(ne.Z,{position:"end",children:(0,m.jsx)(se,{className:"lupa"})})},variant:"standard"})};var ie=function(e){var a=e.filtroState,t=a.filtro,o=a.setFiltro;return(0,m.jsxs)(c.Z,{className:"container",children:[(0,m.jsx)(l.Z,{className:"titulo",children:"Pedidos"}),(0,m.jsxs)(i.Z,{className:"direita",children:[(0,m.jsx)(re,{filtroState:{filtro:t,setFiltro:o}}),(0,m.jsx)(Q,{filtroState:{filtro:t,setFiltro:o}}),(0,m.jsx)(te,{filtroState:{filtro:t,setFiltro:o}})]})]})},ce=t(9281),le=t(9836),de=t(6890),ue=t(5855),me=t(3994),he=t(3382),fe=t(3239),pe=t(3345),Ze=t(7689);var xe=function(e){var a=(0,Ze.s0)();return(0,m.jsxs)(i.Z,{onClick:function(){a("/exibicao-perfil?id="+e.id)},className:"perfil-container",children:[(0,m.jsx)(pe.Z,{id:e.id,nome:e.nome.toUpperCase(),className:"avatar"}),(0,m.jsx)(l.Z,{className:"nome",children:e.nome})]},"usuario-pedido-".concat(e.id))},ve=t(1687);var ge=function(e){var a=s.useState(0),t=(0,n.Z)(a,2),o=t[0],r=t[1];return"Recusado"===e.status||"Cancelado"===e.status?(0,m.jsx)(i.Z,{className:"status recusadoCancelado",children:e.status}):"Confirmado"===e.status?(0,m.jsx)(i.Z,{className:"status confirmado",children:e.status}):"Pendente"===e.status||"Aguardando Pagamento"===e.status?(0,m.jsx)(i.Z,{className:"status pendente",children:e.status}):"Em Fila"===e.status?(ve.Z.get("/pedidos/fila-espera/posicao/".concat(e.pedidoState.id),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){r(e.data)})).catch((function(e){console.log(e)})),(0,m.jsxs)(i.Z,{className:"status emFila",children:[e.status,": ",o]})):(0,m.jsx)(i.Z,{className:"status concluido",children:e.status})},je=t(4165),Ne=t(5861),Ce=t(3827),Se=t(6739),be=(0,u.Z)((0,m.jsx)("path",{d:"M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"}),"MessageOutlined"),Ae=t(1659),we=t(1978),ke=function(e,a){return ve.Z.put(e,a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},Fe=function(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"confirmar";return(0,m.jsx)(f.Z,{className:"btnModal ".concat(t),onClick:a,children:e})};var De=function(e){var a=e.pedido,t=s.useState([]),o=(0,n.Z)(t,2),r=o[0],c=o[1],d=s.useState([]),u=(0,n.Z)(d,2),h=u[0],p=u[1],Z=s.useState([]),x=(0,n.Z)(Z,2),v=x[0],g=x[1],j=e.adicionaAviso,N=function(e,a){switch(e.response.status){case 400:j({mensagem:"Erro ao ".concat(a," pedido!"),tipo:"erro"});break;case 401:j({mensagem:"Voc\xea n\xe3o tem permiss\xe3o para ".concat(a," este pedido!"),tipo:"erro"});break;case 404:j({mensagem:"Pedido n\xe3o encontrado!",tipo:"erro"});break;case 409:j({mensagem:"Voc\xea n\xe3o pode realizar essa a\xe7\xe3o",tipo:"erro"});break;default:j({mensagem:"Erro desconhecido!",tipo:"erro"})}};(0,s.useEffect)((function(){void 0!==a&&(c([{id:1,desc:"".concat(a.aluno.nome," fez uma proposta de ").concat(a.aula.instrumento.nome," para ").concat(a.professor.nome," no dia ").concat(new Date(a.dataAula).toLocaleDateString())}]),C())}),[a]);var C=function(){ve.Z.get("/pedidos/fila-espera/pai/".concat(a.id),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){console.log(e.data),p({nomeAluno:e.data.aluno.nome,instrumento:e.data.aula.instrumento.nome,dataAula:e.data.dataAula})})).catch((function(e){console.log(e)})),ve.Z.get("/pedidos/fila-espera/posicao/".concat(a.id),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){console.log(e.data),g(e.data)})).catch((function(e){console.log(e)}))},S=(0,Ze.s0)(),b=function(){ke("/pedidos/aceita-pedido",{idPedido:a.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(j({mensagem:"Pedido confirmado com sucesso!",tipo:"sucesso"}),S(0))})).catch((function(e){N(e,"confirmar")}))},A=function(){ke("/pedidos/cancela-pedido",{idPedido:a.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(j({mensagem:"Pedido cancelado com sucesso!",tipo:"sucesso"}),S(0))})).catch((function(e){N(e,"cancelar")}))},w=function(){ke("/pedidos/recusa-pedido",{idPedido:a.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(j({mensagem:"Pedido recusado com sucesso!",tipo:"sucesso"}),S(0))})).catch((function(e){N(e,"recusar")}))},k=function(){ke("/pedidos/conclui-pedido",{idPedido:a.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(j({mensagem:"Pedido confirmado com sucesso!",tipo:"sucesso"}),S(0))})).catch((function(e){N(e,"confirmar")}))},F=function(){ke("/pedidos/realiza-pagamento",{idPedido:a.id,idUsuario:sessionStorage.ID,motivo:""}).then((function(e){200===e.status&&(j({mensagem:"Pagamento realizado com sucesso!",tipo:"sucesso"}),S(0))})).catch((function(e){N(e,"realizar pagamento")}))};function D(){return(D=(0,Ne.Z)((0,je.Z)().mark((function e(){var t,o,n;return(0,je.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,we.IO)((0,we.hJ)(Ae.db,"chats"),(0,we.xD)((0,we.ar)("idProfessor","==",Number(a.professor.id)),(0,we.ar)("idAluno","==",Number(a.aluno.id)))),e.next=3,(0,we.PL)(t);case 3:(o=e.sent).empty?(n=(0,we.Bt)(),Ae.db.collection("chats").add({bloqueado:!1,idAluno:Number(a.aluno.id),idProfessor:Number(a.professor.id),nomeAluno:a.aluno.nome.split(" ")[0],nomeProfessor:a.professor.nome.split(" ")[0],timestamp:n,ultimaMensagem:"Envie uma mensagem para iniciar a conversa!"}).then((function(e){e.get().then((function(e){console.log(e.id),S("/chat",{state:{idChatAtivo:e.id,chatAtivo:e.data()}})}))})).catch((function(e){console.error("Error adding document: ",e)}))):S("/chat",{state:{idChatAtivo:o.docs[0].id,chatAtivo:o.docs[0].data()}});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}if(void 0!==a)return(0,m.jsx)(Ce.Z,{open:e.open,onClose:e.onClose,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsxs)(i.Z,{className:"containerModal",children:[(0,m.jsxs)(i.Z,{className:"container-historico",children:[(0,m.jsxs)(i.Z,{className:"conteudoTop",children:[(0,m.jsx)(l.Z,{className:"tituloModal",children:"Informa\xe7\xf5es"}),(0,m.jsx)(f.Z,{onClick:function(){e.onClose()},children:(0,m.jsx)(Se.Z,{className:"icon-color"})})]}),"Aluno"===sessionStorage.CATEGORIA?(0,m.jsx)(xe,{nome:a.professor.nome}):(0,m.jsx)(xe,{nome:a.aluno.nome}),(0,m.jsxs)(i.Z,{className:"tudoConteudo",children:[(0,m.jsxs)(i.Z,{className:"conteudoB1",children:[(0,m.jsx)(l.Z,{className:"tituloDetalhe",children:"Instrumento:"}),(0,m.jsx)(l.Z,{className:"valorDetalhe",children:a.aula.instrumento.nome})]}),(0,m.jsxs)(i.Z,{className:"conteudoB1",children:[(0,m.jsx)(l.Z,{className:"tituloDetalhe",children:"Data: "}),(0,m.jsxs)(l.Z,{className:"valorDetalhe",children:[new Date(a.dataAula).toLocaleDateString()+" \xe0s ",new Date(a.dataAula).getHours()<10?" 0"+new Date(a.dataAula).getHours():new Date(a.dataAula).getHours(),":",new Date(a.dataAula).getMinutes()<10?"0"+new Date(a.dataAula).getMinutes():new Date(a.dataAula).getMinutes()]})]})]}),(0,m.jsxs)(i.Z,{className:"historicoModal",children:[(0,m.jsx)(l.Z,{className:"tituloModal",children:"Hist\xf3rico"}),(0,m.jsx)(i.Z,{className:"historico-lista",children:r.map((function(e){return(0,m.jsx)(l.Z,{className:"descHistorico",children:e.desc})}))})]}),"Professor"===sessionStorage.CATEGORIA&&"Em Fila"===a.status.descricao?(0,m.jsxs)(i.Z,{className:"filaModal",children:[(0,m.jsx)(l.Z,{className:"tituloModal",children:"Fila"}),(0,m.jsxs)(l.Z,{children:["Este pedido est\xe1 na posi\xe7\xe3o: ",(0,m.jsx)("b",{children:v})]}),(0,m.jsx)(l.Z,{children:"Pedido que est\xe1 no topo da fila:"}),(0,m.jsxs)(i.Z,{className:"fila-lista",children:[(0,m.jsxs)(l.Z,{children:[(0,m.jsx)("b",{children:"Aluno:"})," ",h.nomeAluno]}),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)("b",{children:"Instrumento:"})," ",h.instrumento]}),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)("b",{children:"Data:"})," ",new Date(h.dataAula).toLocaleDateString()]})]})]}):null]}),(0,m.jsxs)(i.Z,{className:"footerModal",children:["Aguardando Pagamento"===a.status.descricao||"Pendente"===a.status.descricao||"Confirmado"===a.status.descricao?(0,m.jsxs)(f.Z,{className:"msgChat",onClick:function(){return D.apply(this,arguments)},children:[(0,m.jsx)(be,{className:"icon-color msg-icon"}),(0,m.jsx)(l.Z,{className:"txtChat",children:"Mandar mensagem"})]}):null,(0,m.jsx)(i.Z,{className:"botoesModal",children:function(e){var t=sessionStorage.CATEGORIA;if("Aluno"===t)switch(e){case"Pendente":return Fe("Cancelar",A,"cancelar");case"Aguardando Pagamento":return(0,m.jsxs)(m.Fragment,{children:[Fe("Realizar Pagamento",F,"confirmar"),Fe("Cancelar",A,"cancelar")]});case"Confirmado":if(new Date>new Date(a.dataAula))return Fe("Concluir Pedido",k,"aceitar");default:return null}else if("Professor"===t)switch(e){case"Pendente":return(0,m.jsxs)(m.Fragment,{children:[Fe("Confirmar",b,"confirmar"),Fe("Recusar",w,"cancelar")]});case"Aguardando Pagamento":return Fe("Cancelar",A,"cancelar");default:return null}}(a.status.descricao)})]})]})})},Pe=t(8316),Ee=t(9823);var Ie=function(e){var a=s.useState(!1),t=(0,n.Z)(a,2),o=t[0],r=t[1],c=function(){return r(!1)},u=s.useState(0),h=(0,n.Z)(u,2),p=h[0],Z=h[1],x=e.stateUsuario,v=(0,s.useState)({dadosEnviar:!1}),g=(0,n.Z)(v,2),j=g[0],N=g[1],C=(0,s.useState)(""),S=(0,n.Z)(C,2),b=S[0],A=S[1],w=(0,s.useState)(!1),k=(0,n.Z)(w,2),F=k[0],D=k[1];function P(){var a={usuarioAvaliadorId:parseInt(sessionStorage.ID),valor:p,comentario:b,pedidoId:e.stateUsuario.id};console.log(a);var t=0;t="Professor"===sessionStorage.CATEGORIA?e.stateUsuario.aluno.id:e.stateUsuario.professor.id,ve.Z.post("/usuarios/".concat(t,"/avaliacoes"),a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){alert("Avalia\xe7\xe3o feita com sucesso!"),c()})).catch((function(e){console.log(e)}))}ve.Z.get("/usuarios/".concat(e.stateUsuario.id,"/").concat(sessionStorage.ID),{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){D(e.data)}));var E="Professor"===sessionStorage.CATEGORIA?x.aluno.id:x.professor.id,I="Professor"===sessionStorage.CATEGORIA?x.aluno.nome.charAt(0):x.professor.nome.charAt(0);return F?(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(i.Z,{className:"modal",children:(0,m.jsx)(i.Z,{className:"avaliado",children:(0,m.jsx)(i.Z,{className:"box-avaliado",children:"Avaliado"})})})}):(0,m.jsxs)(i.Z,{className:"modal",children:[(0,m.jsx)(f.Z,{className:"modal-button-open",onClick:function(){return r(!0)},children:"Avaliar Aula"}),(0,m.jsx)(Ce.Z,{open:o,onClose:c,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,m.jsxs)(i.Z,{className:"modal-avaliacao",children:[(0,m.jsxs)(i.Z,{className:"modal-area",children:[(0,m.jsxs)(i.Z,{className:"modal-head",children:[(0,m.jsx)(pe.Z,{id:E,nome:I,sx:{width:90,height:90,fontSize:35}}),(0,m.jsxs)(i.Z,{className:"modal-usuario",children:[(0,m.jsx)(l.Z,{id:"modal-modal-title",variant:"h8",component:"h2",children:"Professor"===sessionStorage.CATEGORIA?x.aluno.nome:x.professor.nome}),(0,m.jsxs)(i.Z,{className:"avaliacao-usuario",children:[(0,m.jsx)(Pe.Z,{className:"valor_avaliacao",value:p,precision:1,size:"medium",onChange:function(e,a){Z(a)}}),(0,m.jsx)(i.Z,{className:"avaliacao-numero",children:p})]})]})]}),(0,m.jsx)(i.Z,{className:"modal-close",children:(0,m.jsx)(f.Z,{className:"button-close",onClick:c,children:(0,m.jsx)(Ee.Z,{})})})]}),(0,m.jsxs)(i.Z,{className:"modal-body",children:[(0,m.jsx)(i.Z,{className:"box-text-input",children:(0,m.jsx)(oe.Z,{className:"comentario_avaliacao",onChange:function(e){return A(e.target.value)},multiline:!0,rows:6})}),(0,m.jsx)(f.Z,{onClick:function(){(0===p?(alert("Por favor, avalie o usu\xe1rio!"),1):b.length<=3&&(alert("Por favor, escreva um coment\xe1rio!"),1))||N((0,d.Z)((0,d.Z)({},j),{},{dadosEnviar:P()}))},className:"modal-button",children:"Avaliar"})]})]})})]})};var ye=function(e){var a=(0,s.useState)([]),t=(0,n.Z)(a,2),o=t[0],r=t[1],i=e.adicionaAviso,c=(0,s.useState)(!1),l=(0,n.Z)(c,2),d=l[0],u=l[1],h=e.filtroState.filtro;console.log(h);var p="";p="Sem Filtro"===h.status?"/pedidos/usuario/".concat(sessionStorage.ID):"/pedidos/usuario/hashing/".concat(sessionStorage.ID,"?status=").concat(h.status),(0,s.useEffect)((function(){ve.Z.get(p,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}}).then((function(e){var a=e.data;""!==a?(a=a.sort((function(e,a){return new Date(a.horaCriacao)-new Date(e.horaCriacao)})),null!==h.dataInicio&&null!==h.dataFim&&(a=a.filter((function(e){var a=new Date(e.dataAula).toLocaleDateString(),t=new Date(h.dataInicio);t.setDate(t.getDate()+1),t=t.toLocaleDateString();var o=new Date(h.dataFim);return o.setDate(o.getDate()+1),o=o.toLocaleDateString(),console.log(a+" / "+t+" / "+o),a>=t&&a<=o}))),"Professor"===sessionStorage.getItem("CATEGORIA")?""!==h.nomeFiltro&&(a=a.filter((function(e){return e.aluno.nome.toLowerCase().includes(h.nomeFiltro.toLowerCase())}))):""!==h.nomeFiltro&&(a=a.filter((function(e){return e.professor.nome.toLowerCase().includes(h.nomeFiltro.toLowerCase())}))),r(a),console.log(a),u(!0)):r([])})).catch((function(e){console.log(e),i({conteudo:"Erro ao obter pedidos",tipo:"erro"})}))}),[h]);var Z=(0,s.useState)(!1),x=(0,n.Z)(Z,2),v=x[0],g=x[1],j=(0,s.useState)(),N=(0,n.Z)(j,2),C=N[0],S=N[1];return(0,m.jsxs)(ce.Z,{style:{maxHeight:"90%",overflow:"scroll"},children:[(0,m.jsxs)(le.Z,{stickyHeader:!0,sx:{minWidth:650},"aria-label":"simple table",children:[(0,m.jsx)(de.Z,{className:"head",children:(0,m.jsxs)(ue.Z,{children:[(0,m.jsx)(me.Z,{className:"topCelula",align:"left",children:"Professor"===sessionStorage.getItem("CATEGORIA")?"Aluno":"Professor"}),(0,m.jsx)(me.Z,{className:"topCelula",align:"center",children:"Instrumento"}),(0,m.jsx)(me.Z,{className:"topCelula",align:"center",children:"Status"}),(0,m.jsx)(me.Z,{className:"topCelula",align:"center",children:"Data"}),(0,m.jsx)(me.Z,{className:"topCelula",align:"center",children:"Valor"}),(0,m.jsx)(me.Z,{className:"topCelula",align:"center"})]})}),(0,m.jsx)(he.Z,{className:"conteudoTabela",children:d?0!==o.length?o.map((function(e){return(0,m.jsxs)(ue.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,m.jsx)(me.Z,{className:"bodyCelula",align:"left",children:(0,m.jsx)(xe,{id:"Professor"===sessionStorage.CATEGORIA?e.aluno.id:e.professor.id,nome:"Professor"===sessionStorage.CATEGORIA?e.aluno.nome:e.professor.nome})}),(0,m.jsx)(me.Z,{className:"bodyCelula",align:"center",children:e.aula.instrumento.nome}),(0,m.jsx)(me.Z,{className:"bodyCelula",align:"center",children:(0,m.jsx)(ge,{pedidoState:e,status:e.status.descricao})}),(0,m.jsx)(me.Z,{className:"bodyCelula",align:"center",children:(a=e.dataAula,new Date(a).toLocaleDateString())}),(0,m.jsxs)(me.Z,{className:"bodyCelula",style:{fontWeight:"bold"},align:"left",children:["R$ ",e.valorAula.toFixed(2)]}),(0,m.jsx)(me.Z,{className:"bodyCelula",align:"center",children:"Conclu\xeddo"===e.status.descricao?(0,m.jsx)(Ie,{stateUsuario:e}):(0,m.jsx)(f.Z,{variant:"outlined",className:"botao",onClick:function(){var a;a=e,console.log(a),g(!0),S(a)},children:" Detalhes"})})]},e.id);var a})):(0,m.jsx)(ue.Z,{children:(0,m.jsx)(me.Z,{colSpan:6,className:"bodyCelula",align:"center",children:"Nenhum pedido encontrado"})}):(0,m.jsx)(ue.Z,{children:(0,m.jsx)(me.Z,{colSpan:6,className:"bodyCelula",align:"center",children:(0,m.jsx)(fe.Z,{color:"success"})})})})]}),(0,m.jsx)(De,{open:v,onClose:function(){return g(!1)},pedido:C,adicionaAviso:i})]})},Re=t(2703);var ze=function(){var e=(0,s.useState)([]),a=(0,n.Z)(e,2),t=a[0],c=a[1],l=(0,Ze.s0)();(0,s.useEffect)((function(){(0,Re.Wi)()&&l(-1)}),[]);var d=(0,s.useState)({status:"Sem Filtro",dataInicio:null,dataFim:null,nomeFiltro:""}),u=(0,n.Z)(d,2),h=u[0],f=u[1];return(0,m.jsx)(r.Z,{tela:"pedidos",avisosState:{avisos:t,setAvisos:c},children:(0,m.jsx)(i.Z,{className:"pagina-container",children:(0,m.jsxs)(i.Z,{className:"pagina-conteudo",children:[(0,m.jsx)(ie,{filtroState:{filtro:h,setFiltro:f}}),(0,m.jsx)(i.Z,{className:"divider"}),(0,m.jsx)(ye,{adicionaAviso:function(e){c([].concat((0,o.Z)(t),[e]))},filtroState:{filtro:h,setFiltro:f}})]})})})}},2703:function(e,a,t){t.d(a,{Wi:function(){return r},Y8:function(){return i},mA:function(){return c}});var o=t(4165),n=t(5861),s=t(1243);function r(){var e=sessionStorage.TOKEN;return(null===e||""===e||e.length<186)&&(sessionStorage.TOKEN="",!0)}function i(e){var a=(e=e.split("/"))[0],t=e[1],o=e[2];return a<1||a>31?{error:!0,helperText:"Dia inv\xe1lido"}:t<1||t>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:o<1900||o>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(o,t-1,a)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function c(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)((0,o.Z)().mark((function e(a){var t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},e.next=3,s.Z.get("https://viacep.com.br/ws/".concat(a,"/json/")).then((function(e){t=e.data.erro?null:e.data})).catch((function(e){console.log(e)}));case 3:return console.log("Resposta:"),console.log(t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},9823:function(e,a,t){var o=t(4836);a.Z=void 0;var n=o(t(5649)),s=t(184),r=(0,n.default)((0,s.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");a.Z=r},2672:function(e,a,t){var o=t(4836);a.Z=void 0;var n=o(t(5649)),s=t(184),r=(0,n.default)((0,s.jsx)("path",{d:"M7 6h10l-5.01 6.3L7 6zm-2.75-.39C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z"}),"FilterAltOutlined");a.Z=r},9164:function(e,a,t){t.d(a,{Z:function(){return S}});var o=t(4942),n=t(3366),s=t(7462),r=t(2791),i=t(831),c=t(1122),l=t(1217),d=t(4419),u=t(6083),m=t(3457),h=t(2173),f=t(184),p=["className","component","disableGutters","fixed","maxWidth","classes"],Z=(0,h.Z)(),x=(0,m.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["maxWidth".concat((0,c.Z)(String(t.maxWidth)))],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),v=function(e){return(0,u.Z)({props:e,name:"MuiContainer",defaultTheme:Z})};var g=t(4036),j=t(6934),N=t(1402),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.createStyledComponent,t=void 0===a?x:a,u=e.useThemeProps,m=void 0===u?v:u,h=e.componentName,Z=void 0===h?"MuiContainer":h,g=t((function(e){var a=e.theme,t=e.ownerState;return(0,s.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&(0,o.Z)({paddingLeft:a.spacing(2),paddingRight:a.spacing(2)},a.breakpoints.up("sm"),{paddingLeft:a.spacing(3),paddingRight:a.spacing(3)}))}),(function(e){var a=e.theme;return e.ownerState.fixed&&Object.keys(a.breakpoints.values).reduce((function(e,t){var o=t,n=a.breakpoints.values[o];return 0!==n&&(e[a.breakpoints.up(o)]={maxWidth:"".concat(n).concat(a.breakpoints.unit)}),e}),{})}),(function(e){var a=e.theme,t=e.ownerState;return(0,s.Z)({},"xs"===t.maxWidth&&(0,o.Z)({},a.breakpoints.up("xs"),{maxWidth:Math.max(a.breakpoints.values.xs,444)}),t.maxWidth&&"xs"!==t.maxWidth&&(0,o.Z)({},a.breakpoints.up(t.maxWidth),{maxWidth:"".concat(a.breakpoints.values[t.maxWidth]).concat(a.breakpoints.unit)}))})),j=r.forwardRef((function(e,a){var t=m(e),o=t.className,r=t.component,u=void 0===r?"div":r,h=t.disableGutters,x=void 0!==h&&h,v=t.fixed,j=void 0!==v&&v,N=t.maxWidth,C=void 0===N?"lg":N,S=(0,n.Z)(t,p),b=(0,s.Z)({},t,{component:u,disableGutters:x,fixed:j,maxWidth:C}),A=function(e,a){var t=e.classes,o=e.fixed,n=e.disableGutters,s=e.maxWidth,r={root:["root",s&&"maxWidth".concat((0,c.Z)(String(s))),o&&"fixed",n&&"disableGutters"]};return(0,d.Z)(r,(function(e){return(0,l.Z)(a,e)}),t)}(b,Z);return(0,f.jsx)(g,(0,s.Z)({as:u,ownerState:b,className:(0,i.Z)(A.root,o),ref:a},S))}));return j}({createStyledComponent:(0,j.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a["maxWidth".concat((0,g.Z)(String(t.maxWidth)))],t.fixed&&a.fixed,t.disableGutters&&a.disableGutters]}}),useThemeProps:function(e){return(0,N.Z)({props:e,name:"MuiContainer"})}}),S=C},3457:function(e,a,t){var o=(0,t(4046).ZP)();a.Z=o},1978:function(e,a,t){t.d(a,{Bt:function(){return o.Bt},EK:function(){return o.EK},IO:function(){return o.IO},PL:function(){return o.PL},Xo:function(){return o.Xo},ar:function(){return o.ar},cf:function(){return o.cf},hJ:function(){return o.hJ},or:function(){return o.or},xD:function(){return o.xD}});var o=t(3577)}}]);
//# sourceMappingURL=955.c1c133b3.chunk.js.map