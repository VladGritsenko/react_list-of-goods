(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),o=n.n(r),c=n(3),s=n(4),i=n(6),u=n(5),h=n(7),d=(n(13),function(e){var t=e.onClick,n=e.className,a=e.name;return l.a.createElement("button",{type:"button",onClick:t,className:n},a)}),m=(n(14),n(15),function(e){var t=e.handleReset,n=e.handleReverse,a=e.handleSortByLength,r=e.handleSort,o=e.handleWordLength,c=e.currentSelect;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement(d,{type:"button",className:"button",onClick:n,value:c,name:"Reverse"}),l.a.createElement(d,{type:"button",className:"button",onClick:a,name:"Sort By length"}),l.a.createElement(d,{type:"button",className:"button",onClick:r,name:"Sort alhabetically"}),l.a.createElement(d,{type:"button",className:"button",onClick:t,name:"Reset"})),l.a.createElement("div",{className:"wrapper"},l.a.createElement("label",{htmlFor:"goodsLength",className:"label"},"Good length:"," "),l.a.createElement("select",{name:"select",id:"goodsLength",onChange:o,value:c},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10"))))}),g=function(e){var t=e.handleReset,n=e.handleReverse,a=e.handleSortByLength,r=e.handleSort,o=e.handleWordLength,c=e.goods,s=e.currentSelect;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{currentSelect:s,handleReset:t,handleReverse:n,handleSortByLength:a,handleSort:r,handleWordLength:o}),l.a.createElement("ul",{className:"content"},c.map(function(e){return l.a.createElement("li",{key:e,className:"content__item"},e)})))},v=(n(16),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),p=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={goods:v,currentSelect:1,isVisible:!0},n.handleReset=function(){return n.setState({goods:[].concat(v),currentSelect:1})},n.handleReverse=function(){return n.setState({goods:[].concat(v).reverse()})},n.handleSort=function(){return n.setState({goods:[].concat(v).sort()})},n.handleSortByLength=function(){return n.setState({goods:[].concat(v).sort(function(e,t){return e.length-t.length})})},n.handleClick=function(){return n.setState(function(e){return{isVisible:!e.isVisible}})},n.handleWordLength=function(e){var t=e.target.value;n.setState({currentSelect:t,goods:[].concat(v).filter(function(e){return e.length>=t})})},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",{className:"title"},"Goods"," ",v.length),l.a.createElement(d,{onClick:this.handleClick,className:this.state.isVisible?"button":"button button--invisible",name:"Show more"}),!this.state.isVisible&&l.a.createElement(g,{handleReset:this.handleReset,handleReverse:this.handleReverse,handleSortByLength:this.handleSortByLength,handleSort:this.handleSort,handleWordLength:this.handleWordLength,goods:this.state.goods,currentSelect:this.state.currentSelect}))}}]),t}(l.a.Component);o.a.render(l.a.createElement(p,{test:123}),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.9df45d80.chunk.js.map