(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{205:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},206:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},221:function(e,t,n){e.exports=n(409)},226:function(e,t,n){},227:function(e,t,n){},298:function(e,t,n){},318:function(e,t,n){},322:function(e,t,n){},340:function(e,t,n){},401:function(e,t,n){},402:function(e,t,n){},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(39),r=n.n(l),o=(n(226),n(421)),c=n(192),d=n(419),s=n(211),m=n(418),u=n(49);n(227);function k(e){return"bordered"===e}var p=function(e){return i.a.createElement("a",{href:e.link.link},i.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.surroundedInColor,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},f=function(e){return i.a.createElement("div",null,e.links.group.map((function(e){return i.a.createElement(p,{link:e})})))},v=(n(298),function(e){return i.a.createElement(s.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),x=(n(318),function(e){return i.a.createElement("div",null,i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),i.a.createElement(m.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},i.a.createElement(o.a,{textAlign:"center",className:"RCSpace-5"},i.a.createElement(o.a.Row,null,i.a.createElement(f,{links:e.links})),i.a.createElement(o.a.Row,{className:"RCNoTopPadding"},i.a.createElement(o.a.Column,{textAlign:"center"},i.a.createElement(v,{src:e.profileImg}))))))}),b=n(415),S=n(417),h=(n(322),function(e){return i.a.createElement(m.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),g=n(193),E=n.n(g),T=function(e){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})};n(340);var C=function(e){return i.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?i.a.createElement(s.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?i.a.createElement(T,{video:n,w:"100%",h:"100%",poster:a}):i.a.createElement(E.a,{url:n,width:"100%",height:"100%"})),i.a.createElement(b.a.Description,{className:"pushOff-y"},i.a.createElement("h3",null,e.link.mainMedia.mediaText)));var t,n,a},y=(n(401),function(e){return i.a.createElement(S.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),z=(n(402),n(403),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(b.a,{size:"small",trigger:i.a.createElement(S.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.link.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(o.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(o.a.Row,{className:"RCTitleFix"},i.a.createElement(h,{data:e.links})),i.a.createElement(o.a.Row,null,i.a.createElement(b.a.Content,{image:!0,className:"RCCenter RCPushDown"},i.a.createElement(C,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e){return i.a.createElement(y,{link:e})})):" ")))))}),A=n(88),w=n(58),R=function(e){var t=function(){return i.a.createElement("span",null,e.completeText)};return i.a.createElement(w.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,l=e.minutes,r=e.seconds;return e.completed?i.a.createElement(t,null):i.a.createElement("span",null,n," days ",Object(w.b)(a),":",Object(w.b)(l),":",Object(w.b)(r))}})},P=(n(404),function(e){return i.a.createElement("div",null,e.timer?i.a.createElement(A.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text,"  ",i.a.createElement(R,{dateTime:e.timer,text:e.completeText})):i.a.createElement(A.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),N=(n(80),function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(z,{links:e.link})):i.a.createElement(z,{links:e.link}))}),L=(n(405),function(e){var t=e.link.buttonColor;return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(S.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):i.a.createElement(S.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))}),O=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(C,{link:e.link,type:e.link.type,deviceSize:e.deviceSize})):i.a.createElement(C,{link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},M=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(P,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement("a",{href:e.link.link},i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):i.a.createElement("div",null,i.a.createElement(s.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(m.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},D=function(e){var t=e.link.linkSpaced,n=e.link.colored;return i.a.createElement("div",null,"internal"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(N,{link:e.link,deviceSize:e.deviceSize})):"item"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(O,{link:e.link,deviceSize:e.deviceSize})):"still/external"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(M,{link:e.link,deviceSize:e.deviceSize})):i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(L,{link:e.link,deviceSize:e.deviceSize})))},I=(n(406),function(e){return i.a.createElement("div",{className:"stretched"},i.a.createElement(m.a,{as:"h2"},i.a.createElement("span",null,e.links.groupName)),i.a.createElement("div",null,e.links.group.map((function(t){return i.a.createElement(D,{link:t,deviceSize:e.deviceSize})}))))}),j=n(205),F=n.n(j),W=n(206),B=n.n(W),_=function(e){return i.a.createElement(o.a,{centered:!0},i.a.createElement(o.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(x,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return i.a.createElement(o.a.Row,null,i.a.createElement(I,{key:n,links:t,deviceSize:e.deviceSize}))})),i.a.createElement(d.a,{basic:!0},i.a.createElement(s.a,{src:(t=e.logo,"white"===t?B.a:F.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0})));var t},G=n(89),X=n(210),H={title:"P2P Rixh",color:"RLWhite"},Y=!0,J="https://res.cloudinary.com/rightlink/image/upload/v1594868601/p2pRich/logo_vcg55z.png",K="background-image: linear-gradient(to right top, #000000, #1a1a1a, #2d2d2d, #424242, #585858, #585858, #585858, #585858, #424242, #2d2d2d, #1a1a1a, #000000);",V={group:[{name:"Instagram",iconName:"instagram",link:"https://instagram.com/p2prixhmusic",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/pay2playrich",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Sound Cloud",iconName:"soundcloud",link:"https://soundcloud.com/p2prixh",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},q=n(208),U=Object(X.a)({backgroundImg:{"background-image":"url(".concat(Y?J:"",")"),"background-repeat":"no-repeat","background-position":"50% 45%","background-attachment":"fixed","background-size":"contain"}}),$=[{groupName:"",groupColor:"",group:[{name:"First Class (Freestyle)",link:"https://music.apple.com/us/artist/p2p-rixh/1508644813",linkSpaced:!0,type:"still/external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1610061917/p2pRich/FirstClass_hk4aft.jpg",mediaText:"First Class (Freestyle)",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"Spaceships in the Suburbs",link:"https://music.apple.com/us/album/spaceships-in-the-suburbs-ep/1529346651",linkSpaced:!0,type:"still/external",typeAction:"",internal:!1,featured:!0,featuredText:"New EP",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1598754596/p2pRich/p2pEP_kzbolj.png",mediaText:"Spaceships In The Suburbs",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"Artist Website",link:"https://unitedmasters.com/p2p-rich",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"HipHopOverLoad - Interview",link:"https://www.hiphopoverload.com/spotlight/pay2play-rixh-vas-finest/",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"4am in Richmond - Video",link:"https://youtu.be/vs2LWrJYVdA",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"IYKYK - Single",link:"https://music.apple.com/us/album/iykyk/1526778685?i=1526778686",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"Apple Music",link:"https://music.apple.com/us/artist/p2p-rixh/1508644813",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"Youtube",link:"https://www.youtube.com/channel/UCHybzOI-tm24v8XftT2aMng?app=desktop",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"First Class (Freestyle)",link:"https://unitedmasters.com/p2p-rich",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}}]}],Q=function(){var e=Object(G.useMediaPredicate)("(max-width: 415px)"),t=Object(G.useMediaPredicate)("(max-width: 768px)"),n=Object(G.useMediaPredicate)("(max-width: 1024px)"),a=U();return i.a.createElement("div",{className:a.backgroundImg},i.a.createElement(q.a,null,i.a.createElement("title",null,"Right-Link"),i.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(K," \n               }\n            "))),i.a.createElement(_,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:V,profileTitle:H,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1592673758/p2pRich/Profile1_hohiq3.jpg",linkGroups:$,logo:"colored"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){}},[[221,1,2]]]);
//# sourceMappingURL=main.a57d2db6.chunk.js.map