(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{205:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},206:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},221:function(e,t,n){e.exports=n(409)},226:function(e,t,n){},227:function(e,t,n){},298:function(e,t,n){},318:function(e,t,n){},322:function(e,t,n){},340:function(e,t,n){},401:function(e,t,n){},402:function(e,t,n){},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(39),r=n.n(l),o=(n(226),n(421)),c=n(192),d=n(419),s=n(211),m=n(418),u=n(49);n(227);function k(e){return"bordered"===e}var p=function(e){return i.a.createElement("a",{href:e.link.link},i.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.surroundedInColor,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},f=function(e){return i.a.createElement("div",null,e.links.group.map((function(e){return i.a.createElement(p,{link:e})})))},v=(n(298),function(e){return i.a.createElement(s.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),h=(n(318),function(e){return i.a.createElement("div",null,i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),i.a.createElement(m.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},i.a.createElement(o.a,{textAlign:"center",className:"RCSpace-5"},i.a.createElement(o.a.Row,null,i.a.createElement(f,{links:e.links})),i.a.createElement(o.a.Row,{className:"RCNoTopPadding"},i.a.createElement(o.a.Column,{textAlign:"center"},i.a.createElement(v,{src:e.profileImg}))))))}),b=n(415),g=n(417),E=(n(322),function(e){return i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),S=n(193),x=n.n(S),T=function(e){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})};n(340);var C=function(e){return i.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?i.a.createElement(s.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?i.a.createElement(T,{video:n,w:"100%",h:"100%",poster:a}):i.a.createElement(x.a,{url:n,width:"100%",height:"100%"})),i.a.createElement(b.a.Description,{className:"pushOff-y"},i.a.createElement("h3",null,e.link.mainMedia.mediaText)));var t,n,a},w=(n(401),function(e){return i.a.createElement(g.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),y=(n(402),n(403),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(b.a,{size:"small",trigger:i.a.createElement(g.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding"}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(o.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(o.a.Row,{className:"RCTitleFix"},i.a.createElement(E,{data:e.links})),i.a.createElement(o.a.Row,null,i.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},i.a.createElement(C,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e){return i.a.createElement(w,{link:e})})):" ")))))}),z=n(88),N=n(58),R=function(e){var t=function(){return i.a.createElement("span",null,e.completeText)};return i.a.createElement(N.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,l=e.minutes,r=e.seconds;return e.completed?i.a.createElement(t,null):i.a.createElement("span",null,n," days ",Object(N.b)(a),":",Object(N.b)(l),":",Object(N.b)(r))}})},P=(n(404),function(e){return i.a.createElement("div",null,e.timer?i.a.createElement(z.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text,"  ",i.a.createElement(R,{dateTime:e.timer,text:e.completeText})):i.a.createElement(z.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),O=(n(80),function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(y,{links:e.link})):i.a.createElement(y,{links:e.link}))}),A=(n(405),function(e){var t=e.link.buttonColor;return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(g.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding"}:{className:"RCPadding RCWhiteBG"},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):i.a.createElement(g.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding"}:{className:"RCPadding RCWhiteBG"},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))}),L=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(C,{link:e.link,type:e.link.type,deviceSize:e.deviceSize})):i.a.createElement(C,{link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},M=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement("a",{href:e.link.link},i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):i.a.createElement("div",null,i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},j=function(e){var t=e.link.linkSpaced,n=e.link.colored;return i.a.createElement("div",null,"internal"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(O,{link:e.link,deviceSize:e.deviceSize})):"item"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(L,{link:e.link,deviceSize:e.deviceSize})):"still/external"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(M,{link:e.link,deviceSize:e.deviceSize})):i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(A,{link:e.link,deviceSize:e.deviceSize})))},I=(n(406),function(e){return i.a.createElement("div",{className:"stretched"},i.a.createElement(m.a,{as:"h2"},i.a.createElement("span",null,e.links.groupName)),i.a.createElement("div",null,e.links.group.map((function(t){return i.a.createElement(j,{link:t,deviceSize:e.deviceSize})}))))}),D=n(205),W=n.n(D),F=n(206),_=n.n(F),B=function(e){return i.a.createElement(o.a,{centered:!0},i.a.createElement(o.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(h,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return i.a.createElement(o.a.Row,null,i.a.createElement(I,{key:n,links:t,deviceSize:e.deviceSize}))})),i.a.createElement(d.a,{basic:!0},i.a.createElement(s.a,{src:(t=e.logo,"white"===t?_.a:W.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0})));var t},X=n(89),G=n(210),H={title:"Frsh Who",color:"RLWhite"},J=!1,U="",K="background-image: linear-gradient(to bottom, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000, #000000);",Y={group:[{name:"Instagram",iconName:"instagram",link:"https://www.instagram.com/frsh_who/",color:"black",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Facebook",iconName:"facebook",link:"https://www.facebook.com/watch/Frshwho-114761786887408/",color:"black",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Youtube",iconName:"youtube",link:"https://www.youtube.com/channel/UCh8FS0JptX7ChIE_XHOaK6Q",color:"black",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Sound Cloud",iconName:"soundcloud",link:"https://soundcloud.com/frsh_who",color:"black",secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},Q=n(208),Z=Object(G.a)({backgroundImg:{"background-image":"url(".concat(J?U:"",")"),"background-repeat":"no-repeat","background-position":"50% 45%","background-attachment":"fixed","background-size":"contain"}}),$=[{groupName:"",groupColor:"green",group:[{name:"Options",link:"",linkSpaced:!0,type:"item",typeAction:"",internal:!1,featured:!0,featuredText:"New Single",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",pinned:!1,mainMedia:{type:"media",link:"https://www.youtube.com/watch?v=ZBrgRanUF5Y&feature=youtu.be",mediaText:"#Options #FrshWho",videoPoster:""},additionalLinks:[],color:"blue",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"On These Nights",link:"",linkSpaced:!0,type:"item",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"blue",pinned:!0,mainMedia:{type:"video",link:"https://www.youtube.com/watch?v=ijW1eh3CY4w",mediaText:"#OnTheseNights #FrshWho",videoPoster:""},additionalLinks:[],color:"blue",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!0,text:""}},{name:"Jump Out - Single",link:"https://www.youtube.com/watch?v=UuHjEwsozsc",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",pinned:!1,mainMedia:{},additionalLinks:[],color:"blue",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Stream Now",link:"n/a",linkSpaced:!0,type:"internal",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",pinned:!0,mainMedia:{type:"still",link:"https://res.cloudinary.com/rightlink/image/upload/v1598413307/FrshWho/options_csrscb.jpg",mediaText:"Stream Now",videoPoster:""},additionalLinks:[{name:"Tidal",link:"https://listen.tidal.com/artist/19451376"},{name:"Spotify",link:"https://open.spotify.com/artist/3K9RGvFH19nWorKUa0mi1O"},{name:"Apple Music",link:"https://music.apple.com/us/artist/frsh-who/1511666176"},{name:"Sound Cloud",link:"https://soundcloud.com/frsh_who"},{name:"Youtube",link:"https://www.youtube.com/channel/UCh8FS0JptX7ChIE_XHOaK6Q"}],color:"blue",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}}]}],q=function(){var e=Object(X.useMediaPredicate)("(max-width: 415px)"),t=Object(X.useMediaPredicate)("(max-width: 768px)"),n=Object(X.useMediaPredicate)("(max-width: 1024px)"),a=Z();return i.a.createElement("div",{className:a.backgroundImg},i.a.createElement(Q.a,null,i.a.createElement("title",null,"Right-Link"),i.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(K," \n               }\n            "))),i.a.createElement(B,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:Y,profileTitle:H,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1598530968/FrshWho/frshwho2_hrcrul.jpg",linkGroups:$,logo:"white"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){}},[[221,1,2]]]);
//# sourceMappingURL=main.60445bb3.chunk.js.map