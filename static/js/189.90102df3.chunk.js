"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[189,186],{186:function(r,e,t){t.r(e);var n=t(439),c=t(791),a=t(952),u=t(689),o=t(184);e.default=function(){var r=(0,u.UO)().movieId,e=(0,c.useState)(null),t=(0,n.Z)(e,2),s=t[0],i=t[1];return(0,c.useEffect)((function(){a.tx(r).then((function(r){return i(r)}))}),[r]),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"Movie Reviews"}),s&&s.results&&s.results.length>0?(0,o.jsx)("ul",{children:s.results.map((function(r){return(0,o.jsxs)("li",{children:[(0,o.jsx)("h3",{children:r.author}),(0,o.jsx)("p",{children:r.content})]},r.id)}))}):(0,o.jsx)("p",{children:"No reviews available"})]})}},952:function(r,e,t){t.d(e,{Df:function(){return o},TP:function(){return i},pO:function(){return v},tx:function(){return f},z1:function(){return s},zv:function(){return p}});var n=t(861),c=t(687),a=t.n(c),u=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"117c7c107e7af0f4d9d4763ca17ce41d"}}),o=function(){var r=(0,n.Z)(a().mark((function r(){var e;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/trending/all/day");case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/search/movie",{params:{query:e}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(e,"/credits"));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(e,"/reviews"));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(a().mark((function r(e){var t;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/person/".concat(e));case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching actor details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=189.90102df3.chunk.js.map