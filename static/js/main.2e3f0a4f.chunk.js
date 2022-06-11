(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c,l=n(9),o=n.n(l),i=(n(14),n(15),n(16),n(7)),a=n(2),r=n(1),d=n(3),u=n.n(d),s=n(0),j=function(e){var t=e.handleSubmit,n=Object(r.useState)(""),c=Object(a.a)(n,2),l=c[0],o=c[1];return Object(s.jsx)("form",{onSubmit:function(e){t(e,l),o("")},children:Object(s.jsx)("input",{value:l,type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:function(e){return o(e.target.value)}})})},f=n(6),b=function(e){var t,n=e.todo,c=e.index,l=e.editTodoTitle,o=e.editCompletedStatus,i=Object(r.useState)(!1),d=Object(a.a)(i,2),j=d[0],b=d[1],m=Object(r.useState)(n.title),p=Object(a.a)(m,2),h=p[0],O=p[1],g=Object(r.useState)(h),v=Object(a.a)(g,2),x=v[0],C=v[1],k=Object(r.useRef)(null),S=u()({completed:n.completed&&!j,editing:j}),y=u()((t={},Object(f.a)(t,"toggle-view".concat(c),!n.completed&&!j),Object(f.a)(t,"toggle-completed",n.completed&&!j),Object(f.a)(t,"toggle-editing",j),t));return Object(s.jsxs)("li",{className:S,children:[Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)("input",{type:"checkbox",className:"toggle",id:y,onChange:function(){return o(!n.completed,n.id)},checked:n.completed}),Object(s.jsx)("label",{htmlFor:y,onClick:function(e){return e.preventDefault()},onDoubleClick:function(){b(!0),C(h),setTimeout((function(){var e;null===(e=k.current)||void 0===e||e.focus()}),0)},children:n.title}),Object(s.jsx)("button",{type:"button","data-cy":"deleteTodo",className:"destroy",onClick:function(){return l("",n.id)}})]}),Object(s.jsx)("input",{value:h,ref:k,type:"text",className:"edit",onChange:function(e){return O(e.target.value)},onKeyDown:function(e){return function(e){if("Escape"===e.key)return b(!1),void O(n.title);"Enter"===e.key&&(x!==h&&(C(h),l(h,n.id)),b(!1))}(e)},onBlur:function(){x!==h&&l(h,n.id),b(!1)}})]})},m=function(e){var t=e.items,n=e.editTodoTitle,c=e.editCompletedStatus;return Object(s.jsx)("ul",{className:"todo-list",children:t.map((function(e,t){return Object(s.jsx)(b,{todo:e,index:t,editTodoTitle:n,editCompletedStatus:c},e.id)}))})},p=function(e){var t=e.todos.filter((function(e){return!1===e.completed})).length;return Object(s.jsx)("span",{"data-cy":"todosCounter",className:"todo-count",children:"".concat(t," ").concat(1===t?"item":"items"," left")})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(c||(c={}));var h=c,O=function(e){var t=e.applyFilter,n=Object(r.useState)(h.All),c=Object(a.a)(n,2),l=c[0],o=c[1],i=function(e){o(e),t(e)};return Object(s.jsxs)("ul",{className:"filters",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/",className:l===h.All?"selected":"",onClick:function(){return i(h.All)},children:"All"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/active",className:l===h.Active?"selected":"",onClick:function(){return i(h.Active)},children:"Active"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#/completed",className:l===h.Completed?"selected":"",onClick:function(){return i(h.Completed)},children:"Completed"})})]})},g=function(e){var t=e.completedTodosLength,n=e.handleClearCompletedClick,c=u()({"clear-completed":!0,hidden:0===t});return Object(s.jsx)("button",{type:"button",className:c,onClick:n,children:"Clear completed"})},v=function(e){var t=e.toggleAllStatus,n=e.handleToggleAllClick;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"checkbox","data-cy":"toggleAll",id:"toggle-all",className:"toggle-all",checked:t,onClick:n}),Object(s.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]})},x=[],C=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],l=Object(r.useState)(!1),o=Object(a.a)(l,2),d=o[0],f=o[1],b=Object(r.useState)(h.All),C=Object(a.a)(b,2),k=C[0],S=C[1];x=Object(i.a)(n);var y=u()({main:!0,hidden:0===n.length}),N=u()({footer:!0,hidden:0===n.length}),A=function(){var e=JSON.stringify(x);localStorage.setItem("todos",e)};return Object(r.useEffect)((function(){var e=localStorage.getItem("todos")||"",t=[];(e&&(t=JSON.parse(e)),t.length>0)&&(c(Object(i.a)(t)),0===t.filter((function(e){return!e.completed})).length&&f(!0))}),[]),Object(r.useEffect)((function(){return window.addEventListener("beforeunload",A),function(){window.removeEventListener("beforeunload",A)}}),[]),Object(s.jsxs)("section",{className:"todoapp",children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"todos"}),Object(s.jsx)(j,{"data-cy":"createTodo",handleSubmit:function(e,t){e.preventDefault(),t&&c((function(e){return[].concat(Object(i.a)(e),[{id:+new Date,title:t,completed:!1}])}))}})]}),Object(s.jsxs)("section",{className:y,children:[Object(s.jsx)(v,{toggleAllStatus:d,handleToggleAllClick:function(){c((function(e){return e.map((function(e){return{id:e.id,title:e.title,completed:!d}}))})),f((function(e){return!e}))}}),Object(s.jsx)(m,{"data-cy":"todoList",items:function(){switch(k){case h.Active:return n.filter((function(e){return!1===e.completed}));case h.Completed:return n.filter((function(e){return!0===e.completed}));default:return n}}(),editTodoTitle:function(e,t){var l=n.map((function(n){return n.id===t?{id:n.id,title:e,completed:n.completed}:n}));c(l.filter((function(e){return""!==e.title})))},editCompletedStatus:function(e,t){var l=n.map((function(n){return n.id===t?{id:n.id,title:n.title,completed:e}:n}));l.find((function(e){return!1===e.completed}))||f(!0),d&&f(!1),c(l)}})]}),Object(s.jsxs)("footer",{className:N,children:[Object(s.jsx)(p,{"data-cy":"todosCounter",todos:n}),Object(s.jsx)(O,{applyFilter:function(e){switch(e){case h.Active:S(h.Active);break;case h.Completed:S(h.Completed);break;default:S(h.All)}}}),Object(s.jsx)(g,{completedTodosLength:n.filter((function(e){return e.completed})).length,handleClearCompletedClick:function(){0===function(){var e=n.filter((function(e){return!e.completed}));return c(e),e.length}()&&f((function(e){return!e}))}})]})]})};o.a.render(Object(s.jsx)(C,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.2e3f0a4f.chunk.js.map