"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[652],{9084:function(a,e,o){o.d(e,{Z:function(){return r}});o(2791);var n=o(4554),s=o(184);var r=function(a){return(0,s.jsx)(n.Z,{className:"card ".concat(a.className),sx:a.sx,id:a.id,onClick:a.onClick,children:a.children})}},7429:function(a,e,o){o.r(e),o.d(e,{default:function(){return F}});var n=o(3433),s=o(9439),r=o(2791),t=o(2703),i=o(4056),d=o(4554),l=o(9084),c=o(890),u=o(184);var m=function(a){return(0,u.jsxs)(l.Z,{className:a.className,children:[(0,u.jsx)(c.Z,{className:"card-titulo",children:a.titulo}),a.children]})};var p=function(a){return(0,u.jsx)(d.Z,{className:"metricas-container",children:a.metricas.map((function(a){return(0,u.jsx)(m,{className:"card-metrica",titulo:a.nome,children:4===a.id?(0,u.jsxs)(c.Z,{className:"card-valor",children:["R$ ",a.valor]}):(0,u.jsx)(c.Z,{className:"card-valor",children:a.valor})},a.id)}))})},f=o(5967),g=o(3623),h=o(1687);f.kL.register(f.uw,f.f$,f.od,f.jn,f.Dx,f.u,f.De);var v={scales:{x:{grid:{display:!1,drawBorder:!1,borderWidth:0}},y:{grid:{}}},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}}}},x=function(a){return h.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var b=function(a){var e=(0,r.useState)([]),o=(0,s.Z)(e,2),n=o[0],t=o[1],i=(0,r.useState)(0),l=(0,s.Z)(i,2),p=l[0],f=l[1],h=(0,r.useState)([]),b=(0,s.Z)(h,2),Z=b[0],j=b[1],S=(0,r.useState)([]),N=(0,s.Z)(S,2),A=N[0],y=N[1],k=a.adicionaAviso,C={labels:n,datasets:[{label:"M\xeas Atual",data:Z,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 1)",pointRadius:1.5},{label:"M\xeas Anterior",data:A,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 1)",pointRadius:1.5}]};return(0,r.useEffect)((function(){x("/usuarios/quantidade-cadastrados-mes").then((function(a){var e=a.data;console.log("Usu\xe1rios cadastrados no m\xeas: "),console.log(e);for(var o=[],n=1;n<=e.length;n++)o.push(n);t(o),j(e),f(e.reduce((function(a,e){return a+e}),0))})).catch((function(){k({mensagem:"Erro ao carregar usu\xe1rios cadastrados no m\xeas.",tipo:"erro"})})),x("/usuarios/quantidade-cadastrados-mes-anterior").then((function(a){var e=a.data;console.log("Usu\xe1rios cadastrados no m\xeas anterior: "),console.log(e),y(e)})).catch((function(){k({mensagem:"Erro ao carregar usu\xe1rios cadastrados no m\xeas anterior.",tipo:"erro"})}))}),[]),(0,u.jsxs)(m,{className:"card-cadastro-usuario",titulo:"Usu\xe1rios cadastrados no m\xeas",children:[(0,u.jsx)(g.x1,{data:C,options:v}),(0,u.jsxs)(d.Z,{className:"cadastro-mensal-container",children:[(0,u.jsx)(c.Z,{className:"cadastro-mensal-valor",children:p}),(0,u.jsx)(c.Z,{className:"cadastro-mensal-titulo",children:"Usu\xe1rios cadastrados nesse m\xeas"})]})]})};f.kL.register(f.uw,f.f$,f.Dx,f.u,f.De,f.od,f.jn,f.ZL);var Z=["Seg","Ter","Qua","Qui","Sex","Sab","Dom"],j={Seg:"Segunda",Ter:"Ter\xe7a",Qua:"Quarta",Qui:"Quinta",Sex:"Sexta",Sab:"S\xe1bado",Dom:"Domingo"},S={responsive:!0,scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!0}}},interaction:{intersect:!0,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}},title:{display:!1},tooltip:{callbacks:{title:function(a,e){return j[a[0].label]}}}}},N=function(a){return h.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},A=function(a,e,o){return{label:a,data:e,backgroundColor:o,borderColor:o,tension:.4,pointRadius:.3}};var y=function(a){var e=(0,r.useState)([]),o=(0,s.Z)(e,2),n=o[0],t=o[1],i=(0,r.useState)([]),d=(0,s.Z)(i,2),l=d[0],c=d[1],p=(0,r.useState)([]),f=(0,s.Z)(p,2),h=f[0],v=f[1],x=a.adicionaAviso,b={labels:Z,datasets:[A("Canceladas",h,"#FF6384"),A("Pendentes",l,"#FFCE56"),A("Realizadas",n,"#00a65a")]};return(0,r.useEffect)((function(){Promise.all([N("/pedidos/quantidade-realizadas-semana"),N("/pedidos/quantidade-pendentes-semana"),N("/pedidos/quantidade-canceladas-semana")]).then((function(a){var e=(0,s.Z)(a,3),o=e[0],n=e[1],r=e[2],i=o.data,d=n.data,l=r.data;console.log("Aulas Realizadas na semana: "),console.log(i),console.log("Aulas Pendentes na semana: "),console.log(d),console.log("Aulas Canceladas na semana: "),console.log(l),t(i),c(d),v(l)})).catch((function(a){console.log(a),x({mensagem:"Erro ao carregar aulas da semana.",tipo:"erro"})}))}),[]),(0,u.jsx)(m,{className:"card-quantidade-aulas",titulo:"Quantidade de aulas",children:(0,u.jsx)(g.$Q,{data:b,options:S})})};var k=function(a){var e=a.titulo,o=a.valor;return(0,u.jsxs)(l.Z,{className:"card-body",children:[(0,u.jsx)(d.Z,{children:(0,u.jsx)(c.Z,{className:"card-titulo titulo-kpi",children:e})}),(0,u.jsx)(d.Z,{className:"".concat(a.className),children:(0,u.jsx)(c.Z,{className:"card-texto",children:o})})]})};f.kL.register(f.uw,f.f$,f.od,f.jn,f.Dx,f.u,f.De);var C={scales:{x:{grid:{display:!1,drawBorder:!1,borderWidth:0}},y:{type:"linear",display:!0,position:"left",min:0},y1:{type:"linear",display:!0,position:"right",grid:{drawOnChartArea:!1},min:0}},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}}}},E=function(a){return h.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var D=function(a){var e=(0,r.useState)([]),o=(0,s.Z)(e,2),n=o[0],t=o[1],i=(0,r.useState)([]),d=(0,s.Z)(i,2),l=d[0],c=d[1],p=(0,r.useState)([]),f=(0,s.Z)(p,2),h=f[0],v=f[1],x={labels:h,datasets:[{label:"Aulas por dia",data:n,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 1)",pointRadius:1.5,yAxisID:"y"},{label:"Rendimento por dia",data:l,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 1)",pointRadius:1.5,yAxisID:"y1"}]};return(0,r.useEffect)((function(){E("/pedidos/quantidade-mes-por-dia").then((function(a){console.log("Recebi a resposta das aulas por dia: "),console.log(a.data);for(var e=[],o=1;o<=a.data.length;o++)e.push(o);v(e),t(a.data)})).catch((function(a){console.log(a)})),E("/pedidos/rendimento-mes-por-dia").then((function(a){console.log("Recebi a resposta do rendimento por dia: "),console.log(a.data),c(a.data)})).catch((function(a){console.log(a)}))}),[]),(0,u.jsx)(m,{titulo:"Aulas e rendimento no m\xeas",children:(0,u.jsx)(g.x1,{data:x,options:C})})},T=o(7689);var q=function(a){return(0,u.jsxs)(d.Z,{className:"taxa-container",children:[(0,u.jsx)(c.Z,{className:"quantidade-usuario-titulo",children:a.nome}),(0,u.jsxs)(c.Z,{className:"quantidade-usuario-valor",children:[a.valor," (",a.valor/a.valorTotal*100,"%)"]})]})};f.kL.register(f.uw,f.f$,f.Dx,f.u,f.De,f.od,f.jn,f.ZL);var R=["Seg","Ter","Qua","Qui","Sex","Sab","Dom"],w={Seg:"Segunda",Ter:"Ter\xe7a",Qua:"Quarta",Qui:"Quinta",Sex:"Sexta",Sab:"S\xe1bado",Dom:"Domingo"},Q={responsive:!0,scales:{x:{stacked:10,grid:{display:!1}},y:{stacked:!0,grid:{display:!0}}},interaction:{intersect:!0,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}},title:{display:!1},tooltip:{callbacks:{title:function(a,e){return w[a[0].label]}}}}},P=function(a){return h.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},z=function(a,e,o){return{label:a,data:e,backgroundColor:o,borderColor:o,tension:.4,pointRadius:.3}};var B=function(a){var e=(0,r.useState)([]),o=(0,s.Z)(e,2),n=o[0],t=o[1],i=(0,r.useState)([]),l=(0,s.Z)(i,2),c=l[0],p=l[1],f=a.adicionaAviso,h={labels:R,datasets:[z("Alunos Cadastrados",n,"#FF6384"),z("Professores Cadastrados",c,"#36A2EB")]};(0,r.useEffect)((function(){Promise.all([P("/alunos/quantidade-cadastrados-semana"),P("/professores/quantidade-cadastrados-semana")]).then((function(a){var e=(0,s.Z)(a,2),o=e[0],n=e[1],r=o.data,i=n.data;console.log("Alunos cadastrados na semana: "),console.log(r),console.log("Professores cadastrados na semana: "),console.log(i),t(r),p(i)})).catch((function(a){f({mensagem:"Erro ao carregar usu\xe1rios cadastrados na semana",tipo:"erro"})}))}),[]);var v=n.reduce((function(a,e){return a+e}),0)+c.reduce((function(a,e){return a+e}),0);return(0,u.jsxs)(m,{className:"card-cadastro-usuario-semana",titulo:"Usu\xe1rios cadastrados na semana",children:[(0,u.jsx)(g.$Q,{data:h,options:Q}),(0,u.jsxs)(d.Z,{className:"informacao-adicional-container",children:[(0,u.jsx)(q,{nome:"Alunos cadastrados:",valor:n.reduce((function(a,e){return a+e}),0),valorTotal:v}),(0,u.jsx)(q,{nome:"Professores cadastrados:",valor:c.reduce((function(a,e){return a+e}),0),valorTotal:v})]})]})},O=function(a){return h.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var F=function(a){var e=(0,r.useState)([]),o=(0,s.Z)(e,2),l=o[0],c=o[1],m=function(a){c([].concat((0,n.Z)(l),[a]))},f=(0,r.useState)([{id:1,nome:"Usu\xe1rios",endpoint:"/usuarios/quantidade-cadastrados-mes-soma",valor:0},{id:2,nome:"Aulas por aluno",endpoint:"/aulas/quantidade-por-aluno-mes",valor:0},{id:3,nome:"Aulas",endpoint:"/aulas/quantidade-mes",valor:0},{id:4,nome:"Rendimento dos Professores",endpoint:"/professores/dashboard/rendimentoTotal",valor:0}]),g=(0,s.Z)(f,2),h=g[0],v=g[1],x=(0,r.useState)([{id:1,nome:"Aulas Realizadas",endpoint:"/pedidos/quantidade-realizadas-semana-total",valor:0},{id:2,nome:"Aulas Pendentes",endpoint:"/pedidos/quantidade-pendentes-semana-total",valor:0},{id:3,nome:"Aulas Canceladas",endpoint:"/pedidos/quantidade-canceladas-semana-total",valor:0}]),Z=(0,s.Z)(x,2),j=Z[0],S=Z[1],N=(0,T.s0)();return(0,r.useEffect)((function(){(0,t.Wi)()&&N("/login"),h.forEach((function(a){4!==a.id&&O(a.endpoint).then((function(e){v((function(o){return o.map((function(o){return o.id===a.id&&(o.valor=e.data),o}))}))})).catch((function(){return m({mensagem:"Erro ao obter quantidade de ".concat(a.nome),tipo:"erro"})}))})),j.forEach((function(a){4!==a.id&&O(a.endpoint).then((function(e){S((function(o){return(0,n.Z)(o.map((function(o){return o.id===a.id&&(o.valor=e.data),o})))}))})).catch((function(){return m({mensagem:"Erro ao obter quantidade de ".concat(a.nome),tipo:"erro"})}))}))}),[]),(0,u.jsx)(i.Z,{tela:"dashboard",avisosState:{avisos:l,setAvisos:c},children:(0,u.jsxs)(d.Z,{className:"pagina-container",children:[(0,u.jsx)(p,{metricas:h}),(0,u.jsxs)(d.Z,{className:"secao secao-usuarios-retidos-cadastrados",children:[(0,u.jsx)(D,{}),(0,u.jsx)(b,{adicionaAviso:m}),(0,u.jsx)(B,{adicionaAviso:m})]}),(0,u.jsxs)(d.Z,{className:"secao secao-aulas",children:[(0,u.jsx)(y,{adicionaAviso:m}),(0,u.jsx)(k,{className:"realizadas",titulo:"Aulas Realizadas na semana",valor:j[0].valor}),(0,u.jsx)(k,{className:"pendentes",titulo:"Aulas Pendentes na semana",valor:j[1].valor}),(0,u.jsx)(k,{className:"canceladas",titulo:"Aulas Canceladas na semana",valor:j[2].valor})]})]})})}},2703:function(a,e,o){o.d(e,{Wi:function(){return t},Y8:function(){return i},mA:function(){return d}});var n=o(4165),s=o(5861),r=o(1243);function t(){var a=sessionStorage.TOKEN;return(null===a||""===a||a.length<186)&&(sessionStorage.TOKEN="",!0)}function i(a){var e=(a=a.split("/"))[0],o=a[1],n=a[2];return e<1||e>31?{error:!0,helperText:"Dia inv\xe1lido"}:o<1||o>12?{error:!0,helperText:"M\xeas inv\xe1lido"}:n<1900||n>(new Date).getFullYear()?{error:!0,helperText:"Ano inv\xe1lido"}:new Date(n,o-1,e)>new Date?{error:!0,helperText:"Data de Nascimento inv\xe1lida"}:{error:!1}}function d(a){return l.apply(this,arguments)}function l(){return(l=(0,s.Z)((0,n.Z)().mark((function a(e){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o={},a.next=3,r.Z.get("https://viacep.com.br/ws/".concat(e,"/json/")).then((function(a){o=a.data.erro?null:a.data})).catch((function(a){console.log(a)}));case 3:return console.log("Resposta:"),console.log(o),a.abrupt("return",o);case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=652.13f6a5c1.chunk.js.map