(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{37:function(e,t,n){},58:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n.n(c),r=n(28),i=n.n(r),o=(n(37),n(8)),j=n(3),l=n(12),m=n.n(l),u=n(17),d=n(19),b=n(29),h=n.n(b),O=(n(58),n(1)),v=function(e){var t=e.id,n=e.year,s=e.title,c=e.rating,a=e.summary,r=e.poster,i=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:r,rating:c,genres:i}},children:[Object(O.jsx)("img",{src:r,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h3",{className:"movie__title",children:s}),Object(O.jsx)("h5",{className:"movie__year",children:n}),Object(O.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(O.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(O.jsxs)("p",{className:"movie__rating",children:["\u2b50 ",c]}),Object(O.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},p=function(e){var t=e.movies;return Object(O.jsx)("div",{className:"movies",children:t.map((function(e){return Object(O.jsx)(v,{id:e.id,year:e.year,title:e.title,rating:e.rating,genres:e.genres,summary:e.summary,poster:e.medium_cover_image},e.id)}))})},x=n(31),f=n(13),_=n(32),g=n.n(_),N=(Object(f.css)(s||(s=Object(x.a)(["\n    display: block;\n    margin: 0 auto;\n"]))),function(){return Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("div",{className:"sweet-loading",children:Object(O.jsx)(g.a,{color:"#19262b",loading:!0,size:100,css:f.css})})})}),y=(n(73),function(){var e=Object(c.useState)(!0),t=Object(d.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)([]),r=Object(d.a)(a,2),i=r[0],o=r[1];Object(c.useEffect)((function(){(function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,o(t),s(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var j=function(){var e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating",{headers:{"Content-Type":"Application/json"}}).then((function(e){return e.data.data.movies})).catch((function(e){return console.error(e)}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("section",{className:"container",children:n?Object(O.jsx)(N,{}):Object(O.jsx)(p,{movies:i})})}),w=(n(74),function(){return Object(O.jsxs)("div",{className:"about__container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})}),k=(n(75),function(e){var t=e.location,n=e.history,s=t.state;void 0===s&&n.push("/"),Object(c.useEffect)((function(){window.scrollTo(0,0)}),[]);var a=t.state,r=a.title,i=a.year,o=a.summary,j=a.poster,l=a.rating,m=a.genres;return console.log(r),Object(O.jsx)("div",{className:"container",children:Object(O.jsx)("div",{className:"movieInfo",children:s?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("img",{src:j,alt:r,title:r}),Object(O.jsxs)("div",{className:"movie__data",children:[Object(O.jsx)("h1",{className:"movie__title",children:r}),Object(O.jsxs)("div",{className:"movide__meta-data",children:[Object(O.jsx)("p",{className:"movie__year",children:i}),Object(O.jsxs)("p",{className:"movie__rating",children:["\u2b50 ",l]})]}),Object(O.jsx)("ul",{className:"movie__genres",children:m.map((function(e,t){return Object(O.jsx)("li",{className:"movie__genre",children:e},t)}))}),Object(O.jsx)("p",{className:"movie__summary",children:o})]})]}):Object(O.jsx)("span",{children:"No data"})})})}),E=(n(76),function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(o.b,{to:"/",children:"Home"}),Object(O.jsx)(o.b,{to:"/about",children:"About"})]})}),I=(n(77),function(){return Object(O.jsxs)(o.a,{children:[Object(O.jsx)(E,{}),Object(O.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(O.jsx)(j.a,{path:"/about",component:w}),Object(O.jsx)(j.a,{path:"/movie/:id",component:k})]})});i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.510a5bf1.chunk.js.map