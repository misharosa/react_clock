(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),i=n.n(c),o=n(2),r=n(3),a=n(5),s=n(4),l=n(1),u=n.n(l),h=(n(12),n(0)),b=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).timerId=void 0,t.state={time:new Date},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.setState({time:new Date}),console.log(t.state.time.toLocaleTimeString())}),1e3)}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("p",{children:["Current time:"," ",t.toLocaleTimeString()]})})}}]),n}(u.a.Component),j=function(t){Object(a.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isClockVisible:!0},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"})," ",Object(h.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),t&&Object(h.jsx)(b,{})]})}}]),n}(u.a.Component);i.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.28edd26a.chunk.js.map