(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(3),o=c.n(n),a=c(4),i=c(5),r=c(7),l=c(6),s=c(1),m=c.n(s),u=(c(12),c(0));function d(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={clockName:"Clock-0",hasClock:!0,today:new Date},e.clockNameTimerId=0,e.clockIteratorTimerId=0,e.handleDocumentClick=function(){e.state.hasClock||(e.setState({hasClock:!0,today:new Date}),e.clockIteratorTimerId=e.runTimer())},e.handleDocumentContextMenu=function(t){t.preventDefault(),e.state.hasClock&&(e.setState({hasClock:!1}),window.clearInterval(e.clockIteratorTimerId))},e.runTimer=function(){return window.setInterval((function(){var t=new Date;e.setState({today:t}),console.info(t.toUTCString().slice(-12,-4))}),1e3)},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;document.addEventListener("click",this.handleDocumentClick),document.addEventListener("contextmenu",this.handleDocumentContextMenu),this.clockNameTimerId=window.setInterval((function(){e.setState({clockName:d()})}),3300),this.clockIteratorTimerId=this.runTimer()}},{key:"componentDidUpdate",value:function(e,t){t.clockName!==this.state.clockName&&this.state.hasClock&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.state.clockName))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("contextmenu",this.handleDocumentContextMenu),window.clearInterval(this.clockNameTimerId)}},{key:"render",value:function(){var e=this.state,t=e.clockName,c=e.hasClock,n=e.today;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),c&&Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:n.toUTCString().slice(-12,-4)})]})]})}}]),c}(m.a.Component);o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.db8c7f1a.chunk.js.map