(this["webpackJsonpcoin-watcher"]=this["webpackJsonpcoin-watcher"]||[]).push([[0],{152:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(44),r=n.n(s),o=(n(51),n(3)),i=n.n(o),l=n(7),u=n(6),d=(n(53),function(){var e=Object(l.a)(i.a.mark((function e(t){var n,c,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.join(","),"dfefebdbd94a685c9254e78c92d5658b",c="https://api.nomics.com/v1/currencies/ticker?key=".concat("dfefebdbd94a685c9254e78c92d5658b","&ids=").concat(n),e.next=5,fetch(c);case 5:return a=e.sent,e.next=8,a.json();case 8:return s=e.sent,e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"dfefebdbd94a685c9254e78c92d5658b",t="https://api.nomics.com/v1/currencies?key=".concat("dfefebdbd94a685c9254e78c92d5658b","&attributes=id,name,logo_url,description"),e.next=4,fetch(t);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){return JSON.parse(localStorage.getItem("savedCoins"))},m=function(){return j().map((function(e){return e.symbol}))},f=function(e){for(var t,n=j(),c=0;c<n.length;c++)if(n[c].symbol===e){t=n[c].holdAmount;break}return t},x=n(46),h=n(0),p="cursor-pointer ml-2 flex",v="h-12 w-12",O="ml-1",g="text-xs",y="text-sm",N=function(e){var t=e.logo,n=e.id,c=e.name,a=e.setNewCoinSymbol,s=e.setSearchBoxHidden;return Object(h.jsxs)("div",{className:p,onClick:function(){s(!0),a(n)},children:[Object(h.jsx)("img",{src:t,className:v}),Object(h.jsxs)("div",{className:O,children:[Object(h.jsxs)("p",{className:g,children:["(",n,")"]}),Object(h.jsx)("p",{className:y,children:c})]})]})},C="relative h-12 z-10 flex justify-center items-center bg-englishLavender",w="h-3/4 w-56 rounded-md p-1 bg-white text-black",S="transition-all z-10 duration-1000 absolute top-12 overflow-hidden bg-englishLavender",k=function(e){var t=e.availableCoins,n=e.setNewCoinSymbol,a=Object(c.useRef)(),s=Object(c.useRef)(),r=Object(c.useState)(!0),o=Object(u.a)(r,2),i=o[0],l=o[1];return Object(h.jsxs)("div",{className:C,onMouseLeave:function(){return l(!0)},onMouseEnter:function(){return l(!1)},children:[Object(h.jsx)("input",{onFocus:function(){return l(!1)},ref:a,className:w,placeholder:"Search Name",onChange:function(){for(var e=0,n=a.current.value.toLowerCase(),c=0;c<t.length;c++){var r=t[c].name.toLowerCase();if(r===n){e=c;break}r.startsWith(n)&&0===e&&(e=c)}s.current.scrollToItem(e,"start")}}),Object(h.jsx)("div",{className:"".concat(S," ").concat(i?"h-0":"h-80"),children:0===t.length?"":Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x.a,{ref:s,height:400,itemCount:t.length,itemSize:80,width:320,children:function(e){var c=e.index,a=e.style;return Object(h.jsx)("div",{style:a,children:Object(h.jsx)(N,{logo:t[c].logo_url,id:t[c].id,name:t[c].name,setNewCoinSymbol:n,setSearchBoxHidden:l})})}})})})]})},L=function(e){var t=e.string,n=e.handleClick;return Object(h.jsx)("button",{onClick:n,className:"h-11 bg-englishLavender rounded border border-spaceCadet py-2 px-3 mb-2",children:t})},F=function(e){for(var t=j(),n=0;n<t.length;n++)t[n].symbol===e&&(t.splice(n,1),localStorage.setItem("savedCoins",JSON.stringify(t)))},E=function(e,t){for(var n=Number(t).toFixed(8),c=Number(n),a=j(),s=0;s<a.length;s++)a[s].symbol===e&&(a[s].holdAmount=c,localStorage.setItem("savedCoins",JSON.stringify(a)))},H="absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10",I="ml-2 w-36 p-1 text-black",M="text-xl",J="my-4 text-center",T=function(e){var t=e.symbol,n=e.hold,a=e.setViewingEditModal,s=e.updateSavedCoins,r=Object(c.useRef)();return Object(h.jsxs)("div",{className:H,children:[Object(h.jsxs)("p",{className:M,children:[" Coin: ",t]}),Object(h.jsxs)("p",{className:J,children:["Hold Amount:"," ",Object(h.jsx)("input",{ref:r,className:I,type:"number",step:"any",min:"0",defaultValue:n})]}),Object(h.jsx)(L,{string:"Delete",handleClick:function(){F(t),a(!1),s()}}),Object(h.jsx)(L,{string:"Okay",handleClick:function(){var e=r.current.value;E(t,e),a(!1),s()}})]})},V={container:"flex flex-col items-center p-2 my-4 mx-2",headerHolder:"flex items-center space-x-1",coinLogo:"w-10 h-10",smTxt:"text-xs",headingText:"text-base",coinPriceInfoHolder:"text-sm my-3 text-center",totalWorth:"text-xl mt-2"},W=function(e,t){var n=(e*t).toFixed(2);return Number(n).toLocaleString(2)},z=function(e){var t=e.logo,n=e.name,a=e.symbol,s=e.hold,r=e.price,o=e.updateSavedCoins,i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],b=l[1],j=parseFloat(r).toFixed(2),m=Number(j).toLocaleString();return Object(h.jsxs)("div",{className:V.container,children:[d?Object(h.jsx)(T,{updateSavedCoins:o,symbol:a,hold:s,setViewingEditModal:b}):"",Object(h.jsxs)("div",{className:V.headerHolder,children:[Object(h.jsx)("img",{alt:"Coin logo",src:t,className:V.coinLogo}),Object(h.jsxs)("div",{className:V.wordBox,children:[Object(h.jsxs)("p",{className:V.smTxt,children:["(",a,")"]}),Object(h.jsx)("p",{className:V.headingText,children:n})]})]}),Object(h.jsxs)("div",{className:V.coinPriceInfoHolder,children:[Object(h.jsxs)("p",{children:["Hold: ",s]}),Object(h.jsxs)("p",{children:["@ $",m]}),Object(h.jsxs)("p",{className:V.totalWorth,children:["$",W(r,s)]})]}),Object(h.jsx)(L,{string:"Edit",handleClick:function(){b(!0)}})]})},A="flex flex-col items-center bg-spaceCadet p-4",B="flex flex-wrap w-100 justify-center",D="text-2xl",P=function(e){var t=e.coinsData,n=e.updateSavedCoins,c=function(){for(var e=0,n=0;n<t.length;n++){e+=f(t[n].symbol)*t[n].price}var c=e.toFixed(2);return Number(c).toLocaleString()}();return Object(h.jsxs)("div",{className:A,children:[Object(h.jsxs)("p",{className:D,children:["Total: $",c]}),Object(h.jsx)("div",{className:B,children:t.map((function(e){return Object(h.jsx)(z,{logo:e.logo_url,name:e.name,symbol:e.symbol,hold:f(e.symbol),price:e.price,updateSavedCoins:n},e.name)}))}),Object(h.jsx)(L,{string:"Update Prices",handleClick:n})]})},R=n.p+"static/media/eyecoin.9a3b9641.png",_=n.p+"static/media/ethcoin.2b11334e.png",U="bg-white flex flex-col justify-center items-center",$="relative flex justify-center items-center mb-10",Y="",q="absolute h-28 w-28 animate-coinSpin",G="text-xl text-center bg-englishLavender p-5",K=function(){return Object(h.jsxs)("div",{style:{height:"calc(100vh - 3rem)"},className:U,children:[Object(h.jsxs)("div",{className:$,children:[Object(h.jsx)("img",{className:q,alt:"ethcoin",src:_}),Object(h.jsx)("img",{className:Y,src:R,alt:"coin eye"})]}),Object(h.jsx)("div",{className:G,children:"Looks like you have no coins! Use the search bar above to add some."})]})},Q="bg-spaceCadet h-16 flex justify-center items-center text-center",X="p-1 underline cursor-pointer",Z=function(){return Object(h.jsx)("div",{className:Q,children:Object(h.jsx)("a",{href:"https://nomics.com/",target:"_blank",rel:"noreferrer",className:X,children:"Crypto Market Cap & Pricing Data Provided By Nomics"})})},ee="flex my-40 mx-auto w-32 justify-center",te="rounded-circle h-6 w-6 mx-1 animate-pulse",ne=function(){return Object(h.jsxs)("div",{className:ee,children:[Object(h.jsx)("div",{className:"".concat(te," bg-black")}),Object(h.jsx)("div",{className:"".concat(te," bg-russianViolet")}),Object(h.jsx)("div",{className:"".concat(te," bg-spaceCadet")})]})},ce=n(2),ae=function(e,t){var n=Number(t).toFixed(8),c={symbol:e,holdAmount:Number(n)},a=j();if(null===a){var s=[c];localStorage.setItem("savedCoins",JSON.stringify(s))}else{for(var r=!1,o=0;o<a.length;o++)e===a[o].symbol&&(r=!0);if(!1===r){var i=[].concat(Object(ce.a)(a),[c]);localStorage.setItem("savedCoins",JSON.stringify(i))}else alert("You have already added this coin before! Edit hold amount or delete using edit button.")}},se="absolute z-10 flex flex-col justify-center items-center w-4/5 h-4/5 bg-russianViolet top-1/10 left-1/10",re="text-center p-2 text-md",oe="p-1 w-40 my-3 text-black",ie="text-xs my-1",le=function(e){var t=e.hideModal,n=e.symbol,a=e.updateSavedCoins,s=Object(c.useRef)();return Object(h.jsxs)("div",{className:se,children:[Object(h.jsxs)("p",{className:re,children:["How many ",n," do you currently have?"]}),Object(h.jsx)("p",{className:ie,children:"(Up to 8 decimal points)"}),Object(h.jsx)("input",{ref:s,type:"number",step:"any",maxLength:"12",min:"0",className:oe}),Object(h.jsx)(L,{string:"Add Coin",handleClick:function(){ae(n,s.current.value),t(),a()}}),Object(h.jsx)(L,{string:"Cancel",handleClick:t})]})},ue=n(45),de=function(e){for(var t=e.data,n=[],c=[],a=0;a<t.length;a++)n.push(t[a].symbol),c.push(t[a].totalWorth);var s={labels:n,datasets:[{data:c,backgroundColor:["#ff0000","#0000ff","#065535","#ff80ed","#ffa500","#ffd700","#00ffff","#003366","#66cdaa","#f5f5f5"]}]};return Object(h.jsx)(ue.Doughnut,{data:s})},be=j();var je=function(){var e=Object(c.useState)("loading"),t=Object(u.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(u.a)(s,2),o=r[0],j=r[1],x=Object(c.useState)([]),p=Object(u.a)(x,2),v=p[0],O=p[1],g=Object(c.useState)(""),y=Object(u.a)(g,2),N=y[0],C=y[1],w=function(e){for(var t=[],n=0;n<e.length;n++){var c=(f(e[n].symbol)*e[n].price).toFixed(2),a=Number(c),s={symbol:e[n].symbol,totalWorth:a};t.push(s)}j(t)},S=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=m(),console.log(t),a("loading"),0!==t.length){e.next=8;break}console.log("hello"),a(null),e.next=13;break;case 8:return e.next=10,d(t);case 10:n=e.sent,w(n),a(n);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){var e=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("fetching saved data"),null!==be&&0!==be.length?S():a(null);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setTimeout((function(){return e()}),3e3)}),[]),Object(c.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,console.log("fetching available coins"),n=[],t.forEach((function(e){""!==e.logo_url&&""!==e.description&&n.push(e)})),O(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(h.jsxs)(h.Fragment,{children:[""!==N?Object(h.jsx)(le,{hideModal:function(){C("")},symbol:N,updateSavedCoins:S}):"",Object(h.jsx)(k,{availableCoins:v,setNewCoinSymbol:C}),null===n?Object(h.jsx)(K,{}):"loading"===n?Object(h.jsx)(ne,{}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(P,{coinsData:n,updateSavedCoins:S}),Object(h.jsxs)("div",{style:{maxWidth:"30rem"},className:"mx-auto text-center my-4",children:[Object(h.jsx)("p",{className:"text-2xl text-black mb-4",children:"Coins Ratio"}),Object(h.jsx)(de,{data:o})]})]}),Object(h.jsx)(Z,{})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(je,{})}),document.getElementById("root"))},51:function(e,t,n){},53:function(e,t,n){}},[[152,1,2]]]);
//# sourceMappingURL=main.1ef9cb2d.chunk.js.map