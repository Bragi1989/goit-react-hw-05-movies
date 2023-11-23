"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[888],{888:function(e,t,r){r.r(t),r.d(t,{default:function(){return w}});var n=r(439),a=r(791),c=r(689),s=r(87),i=r(952),o="MovieDetails_moviedetailsSection__W5E9Q",u="MovieDetails_moviedetailsButton__PUFCW",l="MovieDetails_moviedetailsList__mEB-9",v="MovieDetails_moviedetailsItem__ntfD2",p="MovieDetails_moviedetailsPar__otz5l",h="MovieDetails_moviedetailsMenu__UU43V",d="MovieDetails_moviedetailsLink__zYrKz",f=r(184),m=(0,a.lazy)((function(){return r.e(328).then(r.bind(r,76))})),x=(0,a.lazy)((function(){return r.e(186).then(r.bind(r,186))}));var w=function(){var e=(0,c.UO)().movieId,t=(0,a.useState)(null),r=(0,n.Z)(t,2),w=r[0],_=r[1],j=(0,c.s0)();return(0,a.useEffect)((function(){i.TP(e).then((function(e){return _(e)}))}),[e]),w?(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("button",{className:u,onClick:function(){j("/")},children:"Go back"}),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("img",{src:w.poster_path?"https://image.tmdb.org/t/p/w200".concat(w.poster_path):"https://placehold.it/200x300",alt:w.title}),(0,f.jsxs)("div",{className:v,children:[(0,f.jsx)("h2",{children:w.title}),(0,f.jsx)("p",{className:p,children:w.overview})]})]}),(0,f.jsx)("nav",{children:(0,f.jsxs)("ul",{className:h,children:[(0,f.jsx)("li",{className:l,children:(0,f.jsx)(s.rU,{className:d,to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,f.jsx)("li",{className:l,children:(0,f.jsx)(s.rU,{className:d,to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})}),(0,f.jsx)(a.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsxs)(c.Z5,{children:[(0,f.jsx)(c.AW,{path:"cast",element:(0,f.jsx)(m,{})}),(0,f.jsx)(c.AW,{path:"reviews",element:(0,f.jsx)(x,{})})]})})]}):(0,f.jsx)("div",{children:"Loading..."})}},952:function(e,t,r){r.d(t,{Df:function(){return i},TP:function(){return u},pO:function(){return p},tx:function(){return v},z1:function(){return o},zv:function(){return l}});var n=r(861),a=r(687),c=r.n(a),s=r(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"117c7c107e7af0f4d9d4763ca17ce41d"}}),i=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/trending/all/day");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching trending movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/search/movie",{params:{query:t}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error searching movies:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t,"/credits"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie credits:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/movie/".concat(t,"/reviews"));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching movie reviews:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.get("/person/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching actor details:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=888.2cca3210.chunk.js.map