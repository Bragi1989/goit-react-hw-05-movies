"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76,328],{76:function(r,t,e){e.r(t),e.d(t,{default:function(){return d}});var n=e(683),a=e(861),c=e(439),u=e(687),o=e.n(u),s=e(791),i=e(689),p=e(952),f="Cast_castList__ARoWn",v="Cast_castItem__-Jcfe",h="Cast_castLink__xADzx",l=e(184);var d=function(){var r=(0,i.UO)().movieId,t=(0,s.useState)([]),e=(0,c.Z)(t,2),u=e[0],d=e[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,a.Z)(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.zv(r);case 3:e=t.sent,d(e.cast),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching cast:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[r]),(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.all(u.map(function(){var r=(0,a.Z)(o().mark((function r(t){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,p.pO(t.id);case 2:return e=r.sent,r.abrupt("return",(0,n.Z)((0,n.Z)({},t),{},{photo:e.profile_path}));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()));case 2:t=r.sent,d(t);case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();u.length>0&&r()}),[u]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Cast"}),(0,l.jsx)("ul",{className:f,children:u.map((function(r){return(0,l.jsxs)("li",{className:v,children:[r.photo&&(0,l.jsx)("img",{className:h,alt:"".concat(r.name," headshot"),src:"https://image.tmdb.org/t/p/w200".concat(r.photo)}),r.name]},r.id)}))})]})}},952:function(r,t,e){e.d(t,{Df:function(){return o},TP:function(){return i},pO:function(){return v},tx:function(){return f},z1:function(){return s},zv:function(){return p}});var n=e(861),a=e(687),c=e.n(a),u=e(294).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"117c7c107e7af0f4d9d4763ca17ce41d"}}),o=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/trending/all/day");case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),s=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/search/movie",{params:{query:t}});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),i=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(t));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(t,"/credits"));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/movie/".concat(t,"/reviews"));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.get("/person/".concat(t));case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching actor details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.833b6674.chunk.js.map