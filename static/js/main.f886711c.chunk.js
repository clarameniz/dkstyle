(this.webpackJsonpdkstyle=this.webpackJsonpdkstyle||[]).push([[0],{116:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(42),i=a.n(r),c=a(4),l=a(5),s=a(7),m=a(6),u=a(23),d=a(2),h=a.n(d),p=a(14),f=a.n(p),E=a(9),v=a(10),b=a(19),w=a(11),g=a(20),y=a.n(g);v.b.add(b.a,w.a,w.b,w.c);var N=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.company,t=this.props.data.name,a=this.props.data.occupation,n=this.props.data.description,r=this.props.data.address.city,i=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E.a,{icon:[e.prefix,e.icon]})))}));return o.a.createElement("header",{id:"home"},o.a.createElement("nav",{id:"nav-wrap"},o.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),o.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),o.a.createElement("ul",{id:"nav",className:"nav"},o.a.createElement("li",{className:f()({current:"home"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),o.a.createElement("li",{className:f()({current:"about"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#about"},"Sobre mi")),o.a.createElement("li",{className:f()({current:"portfolio"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Trabajos")),o.a.createElement("li",{className:f()({current:"testimonials"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonios")),o.a.createElement("li",{className:f()({current:"videos"===this.props.section})},o.a.createElement("a",{className:"smoothscroll",href:"#videos"},"V\xeddeos")))),o.a.createElement("div",{className:"row banner"},o.a.createElement("div",{className:"banner-text"},o.a.createElement("h1",{className:"responsive-headline"},e),o.a.createElement("h3",null,y()(t),", ",y()(a)," ",r,". ",y()(n),"."),o.a.createElement("hr",null),o.a.createElement("ul",{className:"social"},i))),o.a.createElement("p",{className:"scrolldown"},o.a.createElement("a",{className:"smoothscroll",href:"#about"},o.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),k=a(13);v.b.add(b.a,w.a,w.b);var j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement(E.a,{icon:[e.prefix,e.icon]})))}));return o.a.createElement("footer",null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns"},o.a.createElement("ul",{className:"social-links"},e),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"Coded with ",o.a.createElement(E.a,{icon:k.a})," by",o.a.createElement("a",{title:"clarameniz github",href:"https://github.com/clarameniz",target:"_blank",rel:"noopener noreferrer"}," Clara Meniz"))),o.a.createElement("ul",{className:"copyright"},o.a.createElement("li",null,"\xa9 Copyright 2020 DKstyle"),o.a.createElement("li",null,"Design by ",o.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),o.a.createElement("div",{id:"go-top"},o.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},o.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),O=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e="".concat("","/images/").concat(this.props.data.image),t=this.props.data.biointro,a=this.props.data.biodesc;return o.a.createElement("section",{id:"about"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"three columns"},o.a.createElement("img",{className:"profile-pic",src:e,alt:"Manuel Duque"})),o.a.createElement("div",{className:"nine columns main-col"},o.a.createElement("h2",null,"Sobre m\xed"),o.a.createElement("p",null,t),o.a.createElement("p",null,a))))}}]),a}(n.Component),S=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return o.a.createElement("li",{key:e.user},o.a.createElement("blockquote",null,o.a.createElement("p",null,e.text),o.a.createElement("cite",null,e.user)))}));return o.a.createElement("section",{id:"testimonials"},o.a.createElement("div",{className:"text-container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"two columns header-col"},o.a.createElement("h1",null,o.a.createElement(E.a,{icon:k.c}),o.a.createElement("span",null,"Testimonios"))),o.a.createElement("div",{className:"ten columns flex-container"},o.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),C=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="".concat("","/images/portfolio/").concat(e.image);return o.a.createElement("div",{key:e.title,className:"columns portfolio-item"},e.image&&o.a.createElement("div",{className:"item-wrap d-none d-md-inline"},o.a.createElement("a",{href:e.url,title:e.title,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("img",{alt:e.title,src:t}),o.a.createElement("div",{className:"overlay"},o.a.createElement("div",{className:"portfolio-item-meta"},o.a.createElement("h5",null,e.title),o.a.createElement("p",null,e.category))),o.a.createElement("div",{className:"link-icon"},o.a.createElement(E.a,{icon:k.b})))))}));return o.a.createElement("section",{id:"portfolio"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns collapsed"},o.a.createElement("h1",null,"Algunos de mis trabajos"),o.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),x=a(43),W=a.n(x),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.videos.map((function(e){return o.a.createElement("div",{key:e.url,className:"columns videos-item"},o.a.createElement("div",{className:"item-wrap"},o.a.createElement(W.a,{url:e.url,controls:!0})))}));return o.a.createElement("section",{id:"videos"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"twelve columns collapsed"},o.a.createElement("h1",null,"Algunos v\xeddeos"),o.a.createElement("div",{id:"videos-wrapper",className:"bgrid-thirds s-bgrid-halves cf"},e))))}}]),a}(n.Component),T=a(44),z=a.n(T),D=a(15),q=function(){h()(".smoothscroll").on("click",(function(e){e.preventDefault();var t=this.hash,a=h()(t);h()("html, body").stop().animate({scrollTop:a.offset().top},800,"swing",(function(){window.location.hash=t}))}))},R=function(){h()("header").css({height:window.innerHeight}),h()(window).on("resize",(function(){h()("header").css({height:window.innerHeight}),h()("body").css({width:window.innerWidth})}))},H=function(){h()(window).on("scroll",(function(){var e=h()("header").height(),t=h()(window).scrollTop(),a=h()("#nav-wrap");t>.5*e&&t<e&&h()(window).outerWidth()>768?a.addClass("opaque").fadeIn("fast"):t<.5*e?a.removeClass("opaque").fadeIn("fast"):a.addClass("opaque").fadeIn("fast")}))},I=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={data:{},section:"home"},u.a.initialize("UA-167430634-1"),u.a.pageview(window.location.pathname),n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getData(),this.initializeJS()}},{key:"getData",value:function(){h.a.ajax({url:"".concat("","/data.json"),dataType:"json",cache:!1,success:function(e){this.setState({data:e})}.bind(this),error:function(e,t,a){console.log(a),alert(a)}})}},{key:"initializeJS",value:function(){q(),R(),H()}},{key:"handleSection",value:function(e){this.setState({section:e})}},{key:"forceRedimension",value:function(){window.dispatchEvent(new Event("resize"))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(D.a,{key:"home",onEnter:function(){return e.handleSection("home")}}),o.a.createElement(z.a,{videoId:this.state.data.video,onReady:this.forceRedimension},o.a.createElement(N,{data:this.state.data.main,section:this.state.section})),o.a.createElement(D.a,{key:"about",bottomOffset:"100px",onEnter:function(){return e.handleSection("about")}}),o.a.createElement(O,{data:this.state.data.main}),o.a.createElement(D.a,{key:"portfolio",bottomOffset:"1250px",onEnter:function(){return e.handleSection("portfolio")}}),o.a.createElement(C,{data:this.state.data.portfolio}),o.a.createElement(D.a,{key:"testimonials",bottomOffset:"560px",onEnter:function(){return e.handleSection("testimonials")}}),o.a.createElement(S,{data:this.state.data.testimonials}),o.a.createElement(D.a,{key:"videos",bottomOffset:"1200px",onEnter:function(){return e.handleSection("videos")}}),o.a.createElement(A,{data:this.state.data.portfolio}),o.a.createElement(j,{data:this.state.data.main}))}}]),a}(n.Component),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()},46:function(e,t,a){e.exports=a(116)},80:function(e,t){}},[[46,1,2]]]);
//# sourceMappingURL=main.f886711c.chunk.js.map