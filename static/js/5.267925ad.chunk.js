(this["webpackJsonpfila-project"]=this["webpackJsonpfila-project"]||[]).push([[5],{42:function(t,e,c){"use strict";c.d(e,"a",(function(){return s}));var i=c(23);function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],i=!0,s=!1,n=void 0;try{for(var r,a=t[Symbol.iterator]();!(i=(r=a.next()).done)&&(c.push(r.value),!e||c.length!==e);i=!0);}catch(l){s=!0,n=l}finally{try{i||null==a.return||a.return()}finally{if(s)throw n}}return c}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},45:function(t,e,c){},74:function(t,e,c){"use strict";c.r(e);var i=c(15),s=c(42),n=c(0),r=c(1),a=c(13),l=c(3),j=c(7);c(45);function d(t){return Object(n.jsxs)("div",{className:"box-list",children:[Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:t.item.thum,width:"80px",alt:""})}),Object(n.jsxs)("div",{className:"box-in-info",children:[Object(n.jsx)("div",{children:t.item.title}),Object(n.jsx)("div",{children:t.item.color}),Object(n.jsx)("div",{children:t.item.size})]})]})}e.default=Object(a.b)((function(t){return{fromCart:t.UserArray}}))((function(t){var e=Object(l.g)().id;console.log(t);var c=Object(l.f)(),a=t.data[e].imgUrlArray,b=Object(r.useState)(0),h=Object(s.a)(b,2),o=h[0],O=h[1],u=Object(r.useState)([]),x=Object(s.a)(u,2),m=x[0],f=x[1];function p(){this.thum=t.data[e].imgUrl[0],this.title=t.data[e].title,this.color=t.data[e].color,this.count=o,this.number=t.data[e].number,this.size=t.data[e].size,this.price=t.data[e].price}function v(){O(o+1)}console.log(m);var N=Object(r.useRef)(),g=function(t){var e=t.target.getAttribute("src");N.current.setAttribute("src",e)};return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{id:"container",className:"unit-page",children:[Object(n.jsxs)("div",{className:"mainInfo",children:[Object(n.jsxs)("div",{className:"item-img",children:[Object(n.jsx)("div",{className:"bg-circle"}),Object(n.jsx)("img",{src:t.data[e].imgUrl[0],alt:t.data[e].title,className:"image"})]}),Object(n.jsxs)("div",{className:"item-info",children:[Object(n.jsx)("p",{className:"number",children:t.data[e].number}),Object(n.jsx)("h2",{className:"title",children:t.data[e].title}),Object(n.jsxs)("h3",{children:["\uac00\uaca9",Object(n.jsx)("span",{className:"price",children:t.data[e].price})]}),Object(n.jsxs)("div",{className:"countWrap",children:[Object(n.jsx)("button",{className:"countbtn",onClick:function(){o>0?O(o-1):alert("\uc0c1\ud488\uac2f\uc218\ub294 \ub9c8\uc774\ub108\uc2a4\uac00 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")},children:"-"}),Object(n.jsx)("span",{children:o}),Object(n.jsx)("button",{className:"countbtn",onClick:function(){0===o?(!function(){var t=new p;f([].concat(Object(i.a)(m),[t]))}(),v()):v()},children:"+"})]}),Object(n.jsxs)("ul",{className:"item-color",children:[Object(n.jsx)("p",{children:"\uc0c9\uc0c1"}),t.data[e].diff?t.data[e].diff.map((function(e,c){return Object(n.jsx)("li",{children:Object(n.jsx)(j.b,{to:"/bag/"+e,children:Object(n.jsx)("img",{src:t.data[e].imgUrl[0],alt:"link"})},c)})})):null]}),Object(n.jsx)("div",{className:"selectItem",children:m?m.map((function(t,e){return Object(n.jsx)(d,{item:t},e)})):null}),Object(n.jsxs)("div",{className:"btn-buy",children:[Object(n.jsx)("button",{type:"button",children:"\uad6c\ub9e4\ud558\uae30"}),Object(n.jsx)("button",{type:"button",onClick:function(){c.push("/cart"),t.dispatch({type:"select",payload:m})},children:"\uc7a5\ubc14\uad6c\ub2c8\ub123\uae30"})]})]})]}),Object(n.jsx)("div",{className:"recomend"}),Object(n.jsxs)("div",{className:"intro",children:[Object(n.jsx)("p",{className:"title",children:t.data[e].title}),Object(n.jsx)("ul",{className:"desc",children:t.data[e].desc.map((function(t,e){return Object(n.jsx)("li",{children:t},e)}))})]}),Object(n.jsx)("div",{className:"display",children:Object(n.jsxs)("div",{className:"display-inner",children:[Object(n.jsx)("div",{className:"mag-img",children:Object(n.jsx)("img",{id:"mainImg",src:a[0],ref:N,alt:t.data[e].title})}),Object(n.jsx)("ul",{className:"cut-list",children:a.map((function(t,e){return Object(n.jsx)("li",{className:"cut-indicate",children:Object(n.jsx)("img",{onClick:g,src:t,alt:""})},e)}))})]})}),Object(n.jsx)("div",{className:"information",children:Object(n.jsxs)("table",{className:"table-info",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(n.jsx)("td",{children:t.data[e].title})]})}),Object(n.jsxs)("tbody",{children:[Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc81c\ud488\uc18c\uc7ac"}),Object(n.jsx)("td",{children:t.data[e].material})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc0c9\uc0c1"}),Object(n.jsx)("td",{children:t.data[e].color})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc0ac\uc774\uc988"}),Object(n.jsx)("td",{children:t.data[e].size})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc81c\uc870\uad6d"}),Object(n.jsx)("td",{children:t.data[e].country_Manufacture})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc81c\uc870\uc0ac"}),Object(n.jsx)("td",{children:"\ud720\ub77c\ucf54\ub9ac\uc544"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\uc138\ud0c1\ubc29\ubc95 \ubc0f \ucde8\uae09\uc2dc \uc8fc\uc758\uc0ac\ud56d"}),Object(n.jsx)("td",{children:"\uc0c1\uc138 \ucde8\uae09\ubc29\ubc95 \uc81c\ud488\ub77c\ubca8 \ucc38\uc870"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"\ud488\uc9c8\ubcf4\uc99d\uae30\uc900"}),Object(n.jsx)("td",{children:"\uad00\ub828\ubc95 \ubc0f \uc18c\ube44\uc790 \ubd84\uc7c1\ud574\uacb0\uae30\uc900\uc5d0 \ub530\ub984"})]}),Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"A/S \ucc45\uc784\uc790\uc640 \uc804\ud654\ubc88\ud638"}),Object(n.jsx)("td",{children:"\ud720\ub77c\ucf54\ub9ac\uc544\u321c \uc628\ub77c\uc778 \uace0\uac1d\uc13c\ud130 1577-3472"})]})]})]})})]})})}))}}]);
//# sourceMappingURL=5.267925ad.chunk.js.map