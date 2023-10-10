"use strict";(self.webpackChunkharmonyo=self.webpackChunkharmonyo||[]).push([[48],{5790:function(a,e,s){s.r(e),s.d(e,{default:function(){return M}});var o=s(3433),n=s(9439),r=s(2791),t=s(2703),i=s(4056),d=s(4554),l=s(9084),c=s(890),u=s(184);var m=function(a){return(0,u.jsxs)(l.Z,{className:a.className,children:[(0,u.jsx)(c.Z,{className:"card-titulo",children:a.titulo}),a.children]})};var f=function(a){return(0,u.jsx)(d.Z,{className:"metricas-container",children:a.metricas.map((function(a){return(0,u.jsx)(m,{className:"card-metrica",titulo:a.nome,children:(0,u.jsx)(c.Z,{className:"card-valor",children:a.valor})},a.id)}))})},p=s(5967),g=s(3623);var v=function(a){return(0,u.jsxs)(d.Z,{className:"taxa-container",children:[(0,u.jsx)(c.Z,{className:"quantidade-usuario-titulo",children:a.nome}),(0,u.jsxs)(c.Z,{className:"quantidade-usuario-valor",children:[a.valor," (",a.valor/a.valorTotal*100,"%)"]})]})};p.kL.register(p.uw,p.f$,p.Dx,p.u,p.De,p.od,p.jn,p.ZL);var h={responsive:!0,scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}},interaction:{intersect:!0,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}},title:{display:!1}}},x=function(a,e,s){return{label:a,data:e,backgroundColor:s,borderColor:s,tension:.4,pointRadius:.3}},Z={labels:["Usu\xe1rios","Professores","Alunos"],datasets:[x("Total",[10,5,5],"#1568"),x("Retidos",[6,3,3],"#FF6384")]},j=[{nome:"Usu\xe1rios retidos",valorTotal:10,valor:6},{nome:"Professores retidos",valorTotal:5,valor:3},{nome:"Alunos retidos",valorTotal:5,valor:3}];var b=function(a){return(0,u.jsxs)(m,{className:"card-usuario-",titulo:"Quantidade de usu\xe1rios",children:[(0,u.jsx)(g.$Q,{data:Z,options:h}),(0,u.jsx)(d.Z,{className:"taxas-container",children:j.map((function(a){return(0,u.jsx)(v,{nome:a.nome,valor:a.valor,valorTotal:a.valorTotal})}))})]})},S=s(1687);p.kL.register(p.uw,p.f$,p.od,p.jn,p.Dx,p.u,p.De);var N={scales:{x:{grid:{display:!1,drawBorder:!1,borderWidth:0}},y:{grid:{}}},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}}}},y=function(a){return S.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var E,A=function(a){var e=(0,r.useState)([]),s=(0,n.Z)(e,2),o=s[0],t=s[1],i=(0,r.useState)(0),l=(0,n.Z)(i,2),f=l[0],p=l[1],v=(0,r.useState)([]),h=(0,n.Z)(v,2),x=h[0],Z=h[1],j=(0,r.useState)([]),b=(0,n.Z)(j,2),S=b[0],E=b[1],A={labels:o,datasets:[{label:"M\xeas Atual",data:x,fill:!1,backgroundColor:"rgb(54, 162, 235)",borderColor:"rgba(54, 162, 235, 1)",pointRadius:1.5},{label:"M\xeas Anterior",data:S,fill:!1,backgroundColor:"rgb(255, 99, 132)",borderColor:"rgba(255, 99, 132, 1)",pointRadius:1.5}]};return(0,r.useEffect)((function(){y("/usuarios/quantidade-cadastrados-mes").then((function(a){var e=a.data;console.log("Usu\xe1rios cadastrados no m\xeas: "),console.log(e);for(var s=[],o=1;o<=e.length;o++)s.push(o);t(s),Z(e),p(e.reduce((function(a,e){return a+e}),0))})).catch((function(){a.adicionaErro("Erro ao carregar usu\xe1rios cadastrados no m\xeas")})),y("/usuarios/quantidade-cadastrados-mes-anterior").then((function(a){var e=a.data;console.log("Usu\xe1rios cadastrados no m\xeas anterior: "),console.log(e),E(e)})).catch((function(){a.adicionaErro("Erro ao carregar usu\xe1rios cadastrados no m\xeas anterior")}))}),[]),(0,u.jsxs)(m,{className:"card-cadastro-usuario",titulo:"Usu\xe1rios cadastrados no m\xeas",children:[(0,u.jsx)(g.x1,{data:A,options:N}),(0,u.jsxs)(d.Z,{className:"cadastro-mensal-container",children:[(0,u.jsx)(c.Z,{className:"cadastro-mensal-valor",children:f}),(0,u.jsx)(c.Z,{className:"cadastro-mensal-titulo",children:"Usu\xe1rios cadastrados nesse m\xeas"})]})]})},k=s(4942);p.kL.register(p.uw,p.f$,p.Dx,p.u,p.De,p.od,p.jn,p.ZL);var C=["S","T","Q","Q","S","S","D"],T=(E={S:"Segunda",T:"Ter\xe7a",Q:"Quarta"},(0,k.Z)(E,"Q","Quinta"),(0,k.Z)(E,"S","Sexta"),(0,k.Z)(E,"S","S\xe1bado"),(0,k.Z)(E,"D","Domingo"),E),q={responsive:!0,scales:{x:{stacked:!0,grid:{display:!1}},y:{stacked:!0,grid:{display:!0}}},interaction:{intersect:!0,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}},title:{display:!1},tooltip:{callbacks:{title:function(a,e){return T[a[0].label]}}}}},Q=function(a){return S.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},P=function(a,e,s){return{label:a,data:e,backgroundColor:s,borderColor:s,tension:.4,pointRadius:.3}};var D=function(a){var e=a.adicionaErro,s=(0,r.useState)([]),o=(0,n.Z)(s,2),t=o[0],i=o[1],d=(0,r.useState)([]),l=(0,n.Z)(d,2),c=l[0],f=l[1],p=(0,r.useState)([]),v=(0,n.Z)(p,2),h=v[0],x=v[1],Z={labels:C,datasets:[P("Canceladas",h,"#FF6384"),P("Pendentes",c,"#FFCE56"),P("Realizadas",t,"#00a65a")]};return(0,r.useEffect)((function(){Promise.all([Q("/pedidos/quantidade-realizadas-semana"),Q("/pedidos/quantidade-pendentes-semana"),Q("/pedidos/quantidade-canceladas-semana")]).then((function(a){var e=(0,n.Z)(a,3),s=e[0],o=e[1],r=e[2],t=s.data,d=o.data,l=r.data;console.log("Aulas Realizadas na semana: "),console.log(t),console.log("Aulas Pendentes na semana: "),console.log(d),console.log("Aulas Canceladas na semana: "),console.log(l),i(t),f(d),x(l)})).catch((function(a){e(a)}))}),[]),(0,u.jsx)(m,{className:"card-quantidade-aulas",titulo:"Quantidade de aulas",children:(0,u.jsx)(g.$Q,{data:Z,options:q})})};var z,R=function(a){var e=a.titulo,s=a.valor;return(0,u.jsxs)(l.Z,{className:"card-body",children:[(0,u.jsx)(d.Z,{children:(0,u.jsx)(c.Z,{className:"card-titulo titulo-kpi",children:e})}),(0,u.jsx)(d.Z,{className:"".concat(a.className),children:(0,u.jsx)(c.Z,{className:"card-texto",children:s})})]})},w=s(7689);p.kL.register(p.uw,p.f$,p.Dx,p.u,p.De,p.od,p.jn,p.ZL);var F=["S","T","Q","Q","S","S","D"],U=(z={S:"Segunda",T:"Ter\xe7a",Q:"Quarta"},(0,k.Z)(z,"Q","Quinta"),(0,k.Z)(z,"S","Sexta"),(0,k.Z)(z,"S","S\xe1bado"),(0,k.Z)(z,"D","Domingo"),z),L={responsive:!0,scales:{x:{stacked:10,grid:{display:!1}},y:{stacked:!0,grid:{display:!0}}},interaction:{intersect:!0,mode:"index"},plugins:{legend:{display:!0,position:"top",align:"end",labels:{usePointStyle:!0}},title:{display:!1},tooltip:{callbacks:{title:function(a,e){return U[a[0].label]}}}}},$=function(a){return S.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})},B=function(a,e,s){return{label:a,data:e,backgroundColor:s,borderColor:s,tension:.4,pointRadius:.3}};var K=function(a){var e=(0,r.useState)([]),s=(0,n.Z)(e,2),o=s[0],t=s[1],i=(0,r.useState)([]),l=(0,n.Z)(i,2),c=l[0],f=l[1],p={labels:F,datasets:[B("Alunos Cadastrados",o,"#FF6384"),B("Professores Cadastrados",c,"#36A2EB")]};(0,r.useEffect)((function(){Promise.all([$("/alunos/quantidade-cadastrados-semana"),$("/professores/quantidade-cadastrados-semana")]).then((function(a){var e=(0,n.Z)(a,2),s=e[0],o=e[1],r=s.data,i=o.data;console.log("Alunos cadastrados na semana: "),console.log(r),console.log("Professores cadastrados na semana: "),console.log(i),t(r),f(i)})).catch((function(e){a.adicionaErro("Erro ao carregar usu\xe1rios cadastrados na semana")}))}),[]);var h=o.reduce((function(a,e){return a+e}),0)+c.reduce((function(a,e){return a+e}),0);return(0,u.jsxs)(m,{className:"card-cadastro-usuario-semana",titulo:"Usu\xe1rios cadastrados na semana",children:[(0,u.jsx)(g.$Q,{data:p,options:L}),(0,u.jsxs)(d.Z,{className:"informacao-adicional-container",children:[(0,u.jsx)(v,{nome:"Alunos cadastrados:",valor:o.reduce((function(a,e){return a+e}),0),valorTotal:h}),(0,u.jsx)(v,{nome:"Professores cadastrados:",valor:c.reduce((function(a,e){return a+e}),0),valorTotal:h})]})]})},O=function(a){return S.Z.get(a,{headers:{Authorization:"Bearer ".concat(sessionStorage.TOKEN)}})};var M=function(a){var e=(0,r.useState)([]),s=(0,n.Z)(e,2),l=s[0],c=s[1],m=function(a){c([].concat((0,o.Z)(l),[a]))},p=(0,r.useState)([{id:1,nome:"Usu\xe1rios",endpoint:"/usuarios/quantidade",valor:0},{id:2,nome:"Aulas por aluno",endpoint:"/aulas/quantidade-por-aluno",valor:0},{id:3,nome:"Aulas",endpoint:"/aulas/quantidade",valor:0},{id:4,nome:"Avalia\xe7\xf5es",endpoint:"",valor:0}]),g=(0,n.Z)(p,2),v=g[0],h=g[1],x=(0,r.useState)([{id:1,nome:"Aulas Realizadas",endpoint:"/pedidos/quantidade-realizadas-semana-total",valor:0},{id:2,nome:"Aulas Pendentes",endpoint:"/pedidos/quantidade-pendentes-semana-total",valor:0},{id:3,nome:"Aulas Canceladas",endpoint:"/pedidos/quantidade-canceladas-semana-total",valor:0}]),Z=(0,n.Z)(x,2),j=Z[0],S=Z[1],N=(0,w.s0)();return(0,r.useEffect)((function(){(0,t.Wi)()&&N("/login"),v.forEach((function(a){4!==a.id&&O(a.endpoint).then((function(e){h((function(s){return s.map((function(s){return s.id===a.id&&(s.valor=e.data),s}))}))})).catch((function(){return m("Erro ao obter quantidade de ".concat(a.nome))}))})),j.forEach((function(a){4!==a.id&&O(a.endpoint).then((function(e){S((function(s){return(0,o.Z)(s.map((function(s){return s.id===a.id&&(s.valor=e.data),s})))}))})).catch((function(){return m("Erro ao obter quantidade de ".concat(a.nome))}))}))}),[]),(0,u.jsx)(i.Z,{tela:"dashboard",errosState:{erros:l,setErros:c},children:(0,u.jsxs)(d.Z,{className:"pagina-container",children:[(0,u.jsx)(f,{metricas:v}),(0,u.jsxs)(d.Z,{className:"secao secao-usuarios-retidos-cadastrados",children:[(0,u.jsx)(b,{}),(0,u.jsx)(A,{adicionaErro:m}),(0,u.jsx)(K,{adicionaErro:m})]}),(0,u.jsxs)(d.Z,{className:"secao secao-aulas",children:[(0,u.jsx)(d.Z,{sx:{width:"30%",height:"100%"},children:(0,u.jsx)(D,{adicionaErro:m})}),(0,u.jsx)(R,{className:"realizadas",titulo:"Aulas Realizadas na semana",valor:j[0].valor}),(0,u.jsx)(R,{className:"pendentes",titulo:"Aulas Pendentes na semana",valor:j[1].valor}),(0,u.jsx)(R,{className:"canceladas",titulo:"Aulas Canceladas na semana",valor:j[2].valor})]})]})})}}}]);
//# sourceMappingURL=48.0fe5a685.chunk.js.map