(this["webpackJsonprandom-tools"]=this["webpackJsonprandom-tools"]||[]).push([[0],{54:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),c=n.n(i),l=(n(54),n(91)),o=n(95),s=n(22),u=n(98),j=n(99),d=n(96),b=n(97);function p(e,t){return h(e)||h(t)?Math.random()*(t-e)+e:Math.floor(Math.random()*(t-e+1)+e)}function h(e){var t=String(e);return parseInt(t)!==parseFloat(t)}var g=n(6),m=Object(l.a)((function(e){return{generateButton:{margin:"5px"},result:{padding:"10px",minHeight:"10pt"},resultTitle:{paddingTop:"5px",paddingLeft:"5px",minHeight:"10pt",fontWeight:"bold"}}}));var f=function(){var e=Object(a.useState)(0),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),c=Object(s.a)(i,2),l=c[0],h=c[1],f=Object(a.useState)(""),O=Object(s.a)(f,2),x=O[0],v=O[1],N=m();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{children:[Object(g.jsx)(u.a,{name:"minVal",type:"number",defaultValue:0,label:"Min Value",onChange:function(e){v(""),r(Number.parseFloat(e.target.value))}}),Object(g.jsx)(u.a,{name:"maxVal",type:"number",defaultValue:0,label:"Max Value",onChange:function(e){v(""),h(Number.parseFloat(e.target.value))}})]}),Object(g.jsx)(j.a,{variant:"contained",color:"primary",className:N.generateButton,disabled:n>l,onClick:function(e){var t=p(n,l);t&&v(t)},children:"Generate"}),Object(g.jsx)(o.a,{children:Object(g.jsxs)(d.a,{in:!!x,children:[Object(g.jsx)(b.a,{className:N.resultTitle,children:"Result"}),Object(g.jsx)(b.a,{className:N.result,children:x})]})})]})},O=n(45);function x(e){var t=v(function(e){var t=[];return t.push.apply(t,Object(O.a)(e.split("\n"))),t}(e));t=function(e){var t=v(e),n=[];t.forEach((function(e){return n.push(void 0)}));for(;t.length>0;){for(var a=t.pop(),r=p(0,n.length-1);void 0!==n[r];)r=(r+1)%n.length;n[r]=a}return n}(t);for(var n="",a=0;a<t.length;a++){var r=t[a];n+=0===a?r:"\n".concat(r)}return n}function v(e){var t=[];return e.forEach((function(e){void 0!==e&&null!==e&&"string"===typeof e&&e.length>0&&t.push(e)})),t}var N=Object(l.a)((function(e){return{randomizeButton:{margin:"5px"},resultTitle:{paddingTop:"5px",paddingLeft:"5px",minHeight:"10pt",fontWeight:"bold"},result:{padding:"5px",minHeight:"10pt",whiteSpace:"pre-wrap"},input:{minWidth:"85vw"}}}));var F=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),c=Object(s.a)(i,2),l=c[0],p=c[1],h=N();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(u.a,{multiline:!0,className:h.input,label:"Items (on separate lines)",onChange:function(e){r(e.target.value),e.target.value.length<n.length&&p("")}}),Object(g.jsx)("div",{children:Object(g.jsx)(j.a,{variant:"contained",color:"primary",className:h.randomizeButton,onClick:function(e){p(x(n))},children:"Randomize"})}),Object(g.jsx)(d.a,{in:!!l,children:Object(g.jsxs)(o.a,{elevation:10,children:[Object(g.jsx)(b.a,{className:h.resultTitle,children:"Result"}),Object(g.jsx)(b.a,{className:h.result,children:l})]})})]})},S=(n(59),Object(l.a)((function(e){return{root:{margin:"15px",padding:"5px",minWidth:"20vw"}}})));var C=function(){var e=S();return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(o.a,{className:e.root,children:Object(g.jsx)(f,{})}),Object(g.jsx)(o.a,{className:e.root,children:Object(g.jsx)(F,{})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(C,{})}),document.getElementById("root")),T()}},[[60,1,2]]]);
//# sourceMappingURL=main.02f56827.chunk.js.map