(this["webpackJsonpbmi-react-app"]=this["webpackJsonpbmi-react-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),i=c.n(a),r=(c(9),c.p,c(10),c(2)),j=c(0);function b(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(r.a)(a,2),b=i[0],l=i[1],u=Object(n.useState)(""),o=Object(r.a)(u,2),O=o[0],h=o[1],d=Object(n.useState)(""),x=Object(r.a)(d,2),p=x[0],v=x[1];var g={color:"black",fontSize:20};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"bmi",children:[Object(j.jsx)("h1",{children:"BMI CALCULATOR"}),Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("span",{children:"HEIGHT"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"in cm",value:c,onChange:function(e){s(e.target.value)}}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{children:"WEIGHT"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",placeholder:"in kg",value:b,onChange:function(e){l(e.target.value)}})]}),Object(j.jsx)("span",{className:"button",children:Object(j.jsx)("button",{onClick:function(){var e=Number(b/Math.pow(c/100,2)).toFixed(2);h(e);var t=function(e){return e<18.5?"Underweight":e>=18.5&&e<24.9?"Normal":e>=25&&e<29.9?"Overweight":"Obese"}(e);v(t),s(""),l("")},children:" CACLULATE BMI "})})]}),Object(j.jsx)("div",{className:"check-result",children:O&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("h2",{style:g,children:["Your BMI is ",O]}),Object(j.jsxs)("h2",{style:g,children:["You are ",p]})]})})]})}var l=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),l()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.67a06347.chunk.js.map