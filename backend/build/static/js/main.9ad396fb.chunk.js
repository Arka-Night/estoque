(this.webpackJsonpestoque=this.webpackJsonpestoque||[]).push([[0],{121:function(e,t){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(58),s=a.n(r),u=a(5),o=a(10),l=a(2),i=a.n(l),m=a(4),d=a(3),p=(a(70),a(59)),f=a.n(p).a.create({baseURL:"http://10.5.50.78:80/"});function E(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),u=Object(d.a)(s,2),l=u[0],p=u[1],E=Object(n.useState)("InputBox"),v=Object(d.a)(E,2),b=v[0],h=v[1],N=Object(n.useState)("InputBox"),g=Object(d.a)(N,2),I=g[0],x=g[1],O=Object(o.f)(),j=localStorage.getItem("accountId");function k(){return(k=Object(m.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!a||!l){e.next=16;break}return e.prev=2,e.next=5,f.post("/enterProfile",{name:a,password:l});case 5:n=e.sent,h("InputBox"),x("InputBox"),"adm"===n.data.accountType?(localStorage.setItem("accountId",n.data.accountId),O.push("/adm")):(localStorage.setItem("accountId",n.data.accountId),O.push("/user")),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),"doesn't exist any user with this name"===e.t0.response.data.error?(h("ErrorBox"),x("InputBox"),setTimeout((function(){h("InputBox")}),5e3)):(x("ErrorBox"),h("InputBox"),setTimeout((function(){x("InputBox")}),5e3));case 14:e.next=19;break;case 16:h("ErrorBox"),x("ErrorBox"),setTimeout((function(){h("InputBox"),x("InputBox")}),5e3);case 19:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}Object(n.useEffect)((function(){S()}));var S=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/enterProfileById",{id:j});case 3:"adm"===(t=e.sent).data[0].type?(localStorage.setItem("accountId",t.data[0].id),O.push("/adm")):(localStorage.setItem("accountId",t.data[0].id),O.push("/user")),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"LogPage"},c.a.createElement("h1",{className:"Title"},"Estoque Tecnet"),c.a.createElement("form",{className:"Form",onSubmit:function(e){return k.apply(this,arguments)}},c.a.createElement("h1",{className:"Header"},"Login"),c.a.createElement("input",{className:b,placeholder:"Usu\xe1rio",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("input",{className:I,type:"password",placeholder:"Senha",value:l,onChange:function(e){p(e.target.value)}}),c.a.createElement("button",{className:"Submit",type:"submit"},"Entrar")))}var v=a(11),b=a(23),h=a(63),N=(a(91),a(62)),g=a.n(N)()();function I(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(o.f)(),l=Object(n.useState)(0),p=Object(d.a)(l,2),E=p[0],N=p[1],I=Object(n.useState)(!1),x=Object(d.a)(I,2),O=x[0],j=x[1],k=Object(n.useState)(""),S=Object(d.a)(k,2),y=S[0],q=S[1],A=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("stock");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("accountId"),e.prev=1,e.next=4,f.post("/enterProfileById",{id:t});case 4:"adm"===(a=e.sent).data[0].type?localStorage.setItem("accountId",a.data[0].id):"user"===a.data[0].type?(localStorage.setItem("accountId",a.data[0].id),s.push("/user")):s.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s.push("/");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){B(),A(),P(),T()}),[]);var w=function(){var e=Object(m.a)(i.a.mark((function e(t,n,c){var s,u,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=o.length>3&&void 0!==o[3]?o[3]:{},"blur"!==c){e.next=17;break}return e.prev=2,e.next=5,f.post("stock",{id:t.id,changeType:"itemName",change:t.itemName});case 5:u=e.sent,a[n]=u.data[0],r(a),g.emit("reloadEmit"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.response.data);case 14:N(E+1),e.next=18;break;case 17:"Enter"===s.key&&s.currentTarget.blur();case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(m.a)(i.a.mark((function e(t,n,c){var s,u,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=o.length>3&&void 0!==o[3]?o[3]:{},"blur"!==c){e.next=17;break}return e.prev=2,e.next=5,f.post("stock",{id:t.id,changeType:"itemQuant",change:t.itemQuant});case 5:u=e.sent,a[n]=u.data[0],r(a),g.emit("reloadEmit"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.response.data);case 14:N(E+1),e.next=18;break;case 17:"Enter"===s.key&&s.currentTarget.blur();case 18:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,a,n){return e.apply(this,arguments)}}(),C=function(){var e=Object(m.a)(i.a.mark((function e(t,n){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.delete("stock/".concat(t.id));case 3:g.emit("reloadEmit"),a.splice(n,1),r(a),N(E+1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),R=function(e,t){return c.a.createElement("div",{className:"AdmItensDiv",key:e.id},c.a.createElement("div",{className:"AdmItens"},c.a.createElement("div",{className:"AdmItemText"},c.a.createElement("input",{className:"InputItemText",value:e.itemName,onChange:function(t){!function(e,t){e.itemName=t.target.value,N(E+1)}(e,t)},onBlur:function(){w(e,t,"blur")},onKeyPress:function(a){w(e,t,"teclado",a)}})),c.a.createElement("div",{className:"AdmItemQuant"},c.a.createElement("input",{className:"InputItemQuant",value:e.itemQuant,type:"number",onChange:function(t){!function(e,t){String(t.target.value).length>=5||(e.itemQuant=t.target.value),N(E+1)}(e,t)},onBlur:function(){Q(e,t,"blur")},onKeyPress:function(a){Q(e,t,"teclado",a)}})),c.a.createElement("button",{className:"DeleteButton",onClick:function(){C(e,t)}},c.a.createElement(b.a,{size:20,color:"#E02041"}))))},P=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("accountId"),e.prev=1,e.next=4,f.post("/enterProfileById",{id:t});case 4:a=e.sent,q(a.data[0].name),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),T=function(){g.on("reload",(function(){A()})),g.emit("requestsRequest",""),g.on("requests",(function(e){0===e.length?j(!1):j(!0)}))};return c.a.createElement("div",{className:"AdmPage"},c.a.createElement("div",{className:"AdmHeader"},c.a.createElement("div",{className:"AdmInitialHeader"},c.a.createElement("h1",{className:"AdmName"},"Ol\xe1, ",y,"!"),c.a.createElement("button",{className:"AdmBackButton",onClick:function(){localStorage.setItem("accountId",""),s.push("/")}},c.a.createElement(v.a,{size:20,color:"#E02041"})))),c.a.createElement("div",{className:"AdmTextDiv"},c.a.createElement("div",{className:"AdmTexts"},c.a.createElement("div",null,"Itens"),c.a.createElement("div",null,"Quantidade"),c.a.createElement("div",null,"A\xe7\xf5es"))),c.a.createElement("div",{className:"Controller"},c.a.createElement("div",{className:"stockVisualization"},a.map((function(e,t){return R(e,t)})))),c.a.createElement("div",{className:"PageButtons"},c.a.createElement(u.b,{to:"/adm/addItens"},c.a.createElement(v.c,{size:"30",color:"#3ddb18"}))),c.a.createElement("div",{className:"RequestsButtons"},c.a.createElement(u.b,{className:"RequestsLink",to:"/adm/requests"},O?c.a.createElement(h.a,{size:"25",color:"white"}):void 0,"Pedidos"),c.a.createElement(u.b,{className:"EntriesAndExitsButton",to:"/adm/entriesAndExits"},"Entradas e saidas")),c.a.createElement(u.b,{className:"EntriesAndExitsButton",to:"/adm/REAE"},"Registrar entradas/saidas"))}var x=a(16);a(124);function O(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(o.f)(),u=localStorage.getItem("accountId"),l=Object(n.useState)(""),p=Object(d.a)(l,2),E=p[0],b=p[1],h=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.get("stock");case 3:t=e.sent,r(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/enterProfileById",{id:u});case 3:"adm"===(t=e.sent).data[0].type?(localStorage.setItem("accountId",t.data[0].id),s.push("/adm")):"user"===t.data[0].type?localStorage.setItem("accountId",t.data[0].id):s.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(),z(),h(),D()}),[]);var I=Object(n.useState)([]),O=Object(d.a)(I,2),j=O[0],k=O[1],S=Object(n.useState)(!1),y=Object(d.a)(S,2),q=y[0],A=y[1],B=Object(n.useState)(1),w=Object(d.a)(B,2),Q=w[0],C=w[1],R=function(e,t,a){switch(t){case"+":j[a].requestQuant<=e.itemQuant-1&&(e.requestQuant=e.requestQuant+1),j[a]=e,k(j),g.emit("request",j),console.log(3),C(Q+1);break;default:e.requestQuant=e.requestQuant-1,j[a]=e,0===j[a].requestQuant?(j.splice(a,1),k(j),C(Q+1),0===j.length&&A(!1)):(k(j),C(Q+1)),g.emit("request",j)}},P=function(){k([]),A(!1),g.emit("request",[])},T=function(e){return c.a.createElement("div",{className:"ItensDiv"},c.a.createElement("div",{className:"Itens"},c.a.createElement("div",{className:"ItemText"},e.itemName),c.a.createElement("div",{className:"ItemQuant"},e.itemQuant),c.a.createElement("button",{className:"Request",onClick:function(){!function(e){var t=e.itemName,a=e.itemQuant,n=e.id;switch(j.length){case 0:var c=[{name:E,accountId:u,itemName:t,itemQuant:a,id:n,requestQuant:1}];k(c),A(!0),g.emit("request",c);break;case 4:break;default:var r=!1;if(j.forEach((function(e){e.id===n&&(r=!0)})),!1===r){var s=[].concat(Object(x.a)(j),[{name:E,accountId:u,itemName:t,itemQuant:a,id:n,requestQuant:1}]);k(s),A(!0),C(Q+1),g.emit("request",s)}}}(e)}},c.a.createElement(v.d,{size:20,color:"#1134e7"}))))},z=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/enterProfileById",{id:u});case 3:t=e.sent,b(t.data[0].name),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){g.on("reload",(function(){h()})),g.emit("requestsRequest",""),g.on("requests",(function(e){k(e),C(Q+1);var t=0;e.forEach((function(e){e.accountId===u&&t++})),A(0!==t)}))};return c.a.createElement("div",{className:"UserPage"},c.a.createElement("div",{className:"UserHeader"},c.a.createElement("div",{className:"InitialHeader"},c.a.createElement("h1",null,"Ol\xe1, ",E,"!"),c.a.createElement("button",{className:"BackButton",onClick:function(){localStorage.setItem("accountId",""),s.push("/")}},c.a.createElement(v.a,{size:20,color:"#E02041"})))),c.a.createElement("div",{className:"TextDiv"},c.a.createElement("div",{className:"Texts"},c.a.createElement("div",null,"Itens"),c.a.createElement("div",null,"Quantidade"),c.a.createElement("div",null,"A\xe7\xf5es"))),c.a.createElement("div",{className:"ConfigVisualization"},c.a.createElement("div",{className:"UserStockVisualization"},a.map((function(e){return T(e)})))),c.a.createElement("div",{className:"Requests"},c.a.createElement("div",null,"Pedidos(max: 4):"),c.a.createElement("div",{className:"RequestList"},j.map((function(e,t){if(e.accountId===u)return function(e,t){return c.a.createElement("div",{className:"RequestItem"},c.a.createElement("button",{className:"Buttons",onClick:function(){R(e,"+",t)}},c.a.createElement(v.c,{size:20,color:"#3ddb18"})),c.a.createElement("div",{className:"RequestName"},e.itemName,": ",e.requestQuant),c.a.createElement("button",{className:"Buttons",onClick:function(){R(e,"-",t)}},c.a.createElement(v.b,{size:20,color:"#fa0404"})))}(e,t)})))),q?c.a.createElement("div",{className:"CancelDiv"},c.a.createElement("button",{className:"CancelButton",onClick:P},"Cancelar todos os pedidos")):c.a.createElement("div",null))}var j=a(9);a(125);function k(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(""),l=Object(d.a)(s,2),p=l[0],E=l[1],v=Object(o.f)();Object(n.useEffect)((function(){b()}),[]);var b=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=localStorage.getItem("accountId"),e.prev=1,e.next=4,f.post("/enterProfileById",{id:t});case 4:"adm"===(a=e.sent).data[0].type?localStorage.setItem("accountId",a.data[0].id):"user"===a.data[0].type?(localStorage.setItem("accountId",a.data[0].id),v.push("/user")):v.push("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),v.push("/");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"AddPage"},c.a.createElement("div",{className:"AddHeader"},c.a.createElement("h1",null,"Adicionar itens!"),c.a.createElement(u.b,{to:"/adm"},c.a.createElement(j.a,{size:20,color:"#E02041"}))),c.a.createElement("form",{className:"AddForm",onSubmit:function(e){try{var t=f.post("createStock",{itemName:a,itemQuant:p});g.emit("reloadEmit"),console.log(t.data)}catch(n){console.log(n.response)}}},c.a.createElement("div",{className:"Inputs"},c.a.createElement("input",{placeholder:"Nome do item",className:"IntoInputs",value:a,onChange:function(e){r(e.target.value)}}),c.a.createElement("input",{placeholder:"Quantidade do item",className:"IntoInputs",type:"number",value:p,onChange:function(e){String(e.target.value).length>=5||E(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"AddButton"},"Criar")))}a(126);function S(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(1),l=Object(d.a)(s,2),p=l[0],E=l[1],v=localStorage.getItem("accountId"),h=Object(o.f)(),N=function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.post("/enterProfileById",{id:v});case 3:"adm"===(t=e.sent).data[0].type?localStorage.setItem("accountId",t.data[0].id):"user"===t.data[0].type?(localStorage.setItem("accountId",t.data[0].id),h.push("/user")):h.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),h.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(),I()}),[]);var I=function(){g.emit("requestsRequest",""),g.on("requests",(function(e,t){t!==v&&(r(e),E(p+1))}))},x=function(){var e=Object(m.a)(i.a.mark((function e(t,n){var c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=t.itemQuant-t.requestQuant,e.next=4,f.post("/stock",{id:t.id,changeType:"itemQuant",change:c});case 4:return e.next=6,f.post("/EntriesExits",{type:"exit",changes:t.requestQuant,itemThatChange:t.itemName,alterator:t.name,state:c});case 6:g.emit("reloadEmit"),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:a.splice(n,1),s=a,g.emit("requestComplete",s,v),r(s),E(p+1);case 16:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,a){return e.apply(this,arguments)}}(),O=function(e,t){return c.a.createElement("div",{className:"RequestsItem"},c.a.createElement("div",{className:"RequestsName"},e.itemName),c.a.createElement("div",{className:"RequestUser"},"de ",e.name),"|",c.a.createElement("div",{className:"RequestQuant"},"quantidade: ",e.requestQuant),"|",c.a.createElement("button",{onClick:function(){x(e,t)},className:"RequestsButton"},"Pedido entregue"),"|",c.a.createElement("button",{onClick:function(){!function(e){a.splice(e,1);var t=a;g.emit("requestComplete",t,v),r(t),E(p+1)}(t)},className:"DeleteRequest"},c.a.createElement(b.a,{size:"30",color:"#E02041"})))};return c.a.createElement("div",{className:"RequestPage"},c.a.createElement("div",{className:"RequestHeader"},"Pedidos",c.a.createElement(u.b,{to:"/adm"},c.a.createElement(j.a,{size:20,color:"#E02041"}))),a.map((function(e,t){return O(e,t)})))}var y=a(32);a(127);function q(){var e=localStorage.getItem("accountId"),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],s=a[1],l=Object(n.useState)([]),p=Object(d.a)(l,2),E=p[0],v=p[1],b=Object(n.useState)(!1),h=Object(d.a)(b,2),N=h[0],I=h[1],O=Object(n.useState)(!1),k=Object(d.a)(O,2),S=k[0],q=k[1],A=Object(n.useState)([]),B=Object(d.a)(A,2),w=B[0],Q=B[1],C=Object(n.useState)("Aguardando..."),R=Object(d.a)(C,2),P=R[0],T=R[1],z=Object(n.useState)("Desactivated"),D=Object(d.a)(z,2),H=D[0],U=D[1],V=Object(o.f)(),L=function(){var t=Object(m.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,f.post("/enterProfileById",{id:e});case 3:"adm"===(a=t.sent).data[0].type?localStorage.setItem("accountId",a.data[0].id):"user"===a.data[0].type?(localStorage.setItem("accountId",a.data[0].id),V.push("/user")):V.push("/"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),V.push("/");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),_=function(){var e=Object(m.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T("Aguardando"),U("Desactivated"),Q([]),I(!1),q(!1),e.prev=5,e.next=8,f.get("/EntriesExits");case 8:null!==(t=e.sent).data.last_date.date?(a=t.data.entries_and_exits.reverse(),s(a),n=[t.data.last_date.date],v(n),T(t.data.last_date.date),a.forEach((function(e){n=[].concat(Object(x.a)(n),[e.date])})),s(a.reverse()),n.forEach((function(e,t){n.forEach((function(a){e===a&&n.splice(t,1)}))})),v(n)):T("Aguardando..."),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(5);case 14:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),F=function(e){return c.a.createElement("div",{className:"Alteration"},"Altera\xe7\xe3o em ",e.itemThatChange,": foi ","entries"===e.type?"adicionado":"retirado"," ",e.changes," ",parseInt(e.changes)>1?"unidades":"unidade",c.a.createElement("div",null,"Quantidade final: ",e.state),c.a.createElement("div",null,"Hor\xe1rio da altera\xe7\xe3o: ",e.time),c.a.createElement("div",null,"Alterador: ",e.alterator))};return Object(n.useEffect)((function(){L(),g.on("reload",(function(){_()})),_()}),[]),Object(n.useEffect)((function(){!function(){var e=[];I(!1),q(!1),r.forEach((function(t){t.date===P&&(e=[].concat(Object(x.a)(e),[t]),Q(e))})),0!==e.length?e.forEach((function(e){"entries"===e.type?I(!0):"exit"===e.type&&q(!0)})):(I(!1),q(!1))}()}),[P]),c.a.createElement("div",{className:"EAEPage"},c.a.createElement("div",{className:"EAEHeader"},c.a.createElement("h1",null,"Entradas e Saidas"),c.a.createElement("div",{className:"SelectBox",onClick:function(){U("Desactivated"===H?"Activated":"Desactivated")}},"Aguardando..."!==P?c.a.createElement("div",null,c.a.createElement("div",{className:"Selected",id:H},c.a.createElement("label",{className:"OptionValue",id:"Selected"},P),"Desactivated"===H?c.a.createElement(y.a,{size:20,color:"black"}):c.a.createElement(y.b,{size:20,color:"black"})),c.a.createElement("div",{className:"Options",id:H},E.map((function(e){return function(e){return c.a.createElement("div",{className:"Option",onClick:function(){T(e)}},c.a.createElement("label",{className:"OptionValue"},e))}(e)})))):c.a.createElement("div",{className:"Selected",id:"Nothing"},c.a.createElement("label",{className:"OptionValue",id:"Selected"},P))),c.a.createElement(u.b,{className:"EAEReturnButton",to:"/adm"},c.a.createElement(j.a,{size:20,color:"#E02041"}))),"Aguardando..."!==P?c.a.createElement("div",null,c.a.createElement("div",{className:"EAEDiv"},c.a.createElement("h1",null,"Entradas"),N?c.a.createElement("div",{className:"EAEOfTheDay"},w.map((function(e){if("entries"===e.type)return F(e)}))):c.a.createElement("div",{className:"NothingEAE"},"Nenhuma entrada nesse dia")),c.a.createElement("div",{className:"EAEDiv"},c.a.createElement("h1",null,"Saidas"),S?c.a.createElement("div",{className:"EAEOfTheDay"},w.map((function(e){if("exit"===e.type)return F(e)}))):c.a.createElement("div",{className:"NothingEAE"},"Nenhuma sa\xedda nesse dia"))):c.a.createElement("div",null))}a(128);function A(){return c.a.createElement("div",{className:"REAEPage"},c.a.createElement("div",{className:"REAEHeader"},c.a.createElement("h1",{className:"REAEh1"},"Registrar entradas e saidas"),c.a.createElement(u.b,{to:"/adm"},c.a.createElement(j.a,{size:20,color:"#E02041"}))))}function B(){return c.a.createElement(u.a,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:E}),c.a.createElement(o.a,{path:"/adm",exact:!0,component:I}),c.a.createElement(o.a,{path:"/user",component:O}),c.a.createElement(o.a,{path:"/adm/addItens",component:k}),c.a.createElement(o.a,{path:"/adm/requests",component:S}),c.a.createElement(o.a,{path:"/adm/entriesAndExits",component:q}),c.a.createElement(o.a,{path:"/adm/REAE",component:A})))}var w=function(){return c.a.createElement(B,null)};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root"))},64:function(e,t,a){e.exports=a(129)},70:function(e,t,a){},91:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.9ad396fb.chunk.js.map