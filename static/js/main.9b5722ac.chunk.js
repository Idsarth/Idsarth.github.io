(this["webpackJsonppersonal-portfolio"]=this["webpackJsonppersonal-portfolio"]||[]).push([[0],{19:function(e,a,t){e.exports=t(30)},29:function(e,a,t){},30:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),c=t(14),r=t.n(c),i=t(5),s=t(2),m=t(6),o=function(e){var a=e.title;return n.a.createElement("div",{className:"title-content"},n.a.createElement("h2",{className:"title"},a),n.a.createElement("span",null))},u=function(e){var a=e.children,t=e.title,l=e.subtitle;return n.a.createElement("div",{className:"category"},n.a.createElement("div",{className:"category-circle"},a),n.a.createElement("div",{className:"category-info"},n.a.createElement("h2",null,t),n.a.createElement("span",null,l)))},E=function(e){var a=e.onClick,t=e.message;return n.a.createElement("input",{type:"button",onClick:a,value:t,className:"button button-success"})},d=function(e){var a=e.title,t=(e.avatar,e.children),l=e.className;return n.a.createElement("div",{className:l?"".concat(l," card"):"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"card-avatar"},n.a.createElement("img",{src:"https://abyeneregia.net/assets/img/theme/av.png",alt:"Idsarth Juarez"})),n.a.createElement("div",{className:"card-info"},n.a.createElement("h2",{className:"card-title"},a),t)),n.a.createElement("div",{className:"card-footer"},n.a.createElement(u,{title:"4 Years Job",subtitle:"Experience"},n.a.createElement(m.b,{size:20,color:"#c8cdd0"})),n.a.createElement(u,{title:"Freelance",subtitle:"Available"},n.a.createElement(m.d,{size:20,color:"#c8cdd0"})),n.a.createElement(u,{title:"Github",subtitle:"Projects"},n.a.createElement(m.c,{size:20,color:"#c8cdd0"})),n.a.createElement(E,{message:"Download CV",onClick:function(){}})))},v=t(15),p=function(e){var a=e.color,t=e.percent,l=e.skill;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"progress-info"},n.a.createElement("span",null,l),n.a.createElement("p",null,t,"%")),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{style:{width:"".concat(t,"%"),backgroundColor:a},className:"progress-percent"})))},N=function(e){return Object(v.a)(e),n.a.createElement("div",{className:"card-profile card"},n.a.createElement("div",{className:"card-skill"},n.a.createElement("div",null,n.a.createElement(p,{color:"#25ca7f",percent:95,skill:"JavaScript"}),n.a.createElement(p,{color:"#25ca7f",percent:90,skill:"TypeScript"}),n.a.createElement(p,{color:"#25ca7f",percent:98,skill:"React"}),n.a.createElement(p,{color:"#25ca7f",percent:92,skill:"React Native"})),n.a.createElement("div",null,n.a.createElement(p,{color:"#25ca7f",percent:70,skill:"Angular"}),n.a.createElement(p,{color:"#25ca7f",percent:85,skill:"Flutter"}),n.a.createElement(p,{color:"#25ca7f",percent:90,skill:"NodeJS"}),n.a.createElement(p,{color:"#25ca7f",percent:85,skill:"Graphql"}))))},b=[{id:1,path:"/",exact:!0,page:function(){return n.a.createElement("div",{className:"container l-layout"},n.a.createElement("main",null,n.a.createElement(o,{title:"About Me"}),n.a.createElement(d,{className:"card-profile",title:"Idsarth Juarez"},n.a.createElement("div",{className:"card-details"},n.a.createElement(m.a,{className:"card-icon"}),n.a.createElement("span",{className:"card-subtitle"},"Managua, Nicaragua")),n.a.createElement("p",{className:"card-description"},"Hello! I'm Idsarth Juarez FullStack and Mobile developer, with extensive experience in developing native and multi-platform applications for iOS and Android."),n.a.createElement("p",{className:"card-description"},"With solid knowledge in technologies such as ReactJS, React Native, NextJS, NodeJS, Graphql, Flutter, Golang and Python."))),n.a.createElement("section",{className:"l-layout"},n.a.createElement(o,{title:"Skills"}),n.a.createElement(N,null)))}},{id:2,path:"/resume",exact:!0,page:function(){return n.a.createElement("div",{className:"l-layout container"},n.a.createElement("section",{className:""},n.a.createElement(o,{title:"Resume"}),n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement(o,{title:"Experience"}),n.a.createElement("div",{className:"card"})),n.a.createElement("div",null,n.a.createElement(o,{title:"Education"}),n.a.createElement("div",{className:"card"})))))}},{id:3,path:"/portfolio",exact:!0,page:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Portfolio"))}},{id:4,path:"/contact",exact:!0,page:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"Contact"))}},{id:5,path:"*",page:function(){return n.a.createElement("div",null,n.a.createElement("p",null,"404 not found :c"))}}],f=t(18),h=t(16),g=function(){var e=Object(l.useState)(!1),a=Object(f.a)(e,2),t=a[0],c=a[1];return n.a.createElement("header",{className:"l-navbar"},n.a.createElement("nav",{className:"container navbar"},n.a.createElement("div",{className:"navbar-brand"},n.a.createElement("span",{className:"navbar-name"},"Idsarth")),n.a.createElement("div",{onClick:function(){c(!t)},className:"navbar-toggle"},n.a.createElement(h.a,{className:"navbar-icon",size:30})),n.a.createElement("ul",{className:t?"navbar-list navbar-show":"navbar-list"},n.a.createElement("li",{className:"navbar-item"},n.a.createElement(i.b,{activeClassName:"navbar-link-active",className:"navbar-link",to:"/"},"About Me")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(i.b,{activeClassName:"navbar-link-active",className:"navbar-link",to:"/resume"},"Resume")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(i.b,{activeClassName:"navbar-link-active",className:"navbar-link",to:"/portfolio"},"Portfolio")),n.a.createElement("li",{className:"navbar-item"},n.a.createElement(i.b,{activeClassName:"navbar-link-active",className:"navbar-link",to:"/contact"},"Contact Me")))))},k=function(){return n.a.createElement(i.a,null,n.a.createElement(g,null),n.a.createElement(s.c,null,b.map((function(e){return n.a.createElement(s.a,{key:e.id,path:e.path,exact:e.exact},n.a.createElement(e.page,null))}))))};t(29);r.a.render(n.a.createElement(k,null),document.getElementById("app"))}},[[19,1,2]]]);
//# sourceMappingURL=main.9b5722ac.chunk.js.map