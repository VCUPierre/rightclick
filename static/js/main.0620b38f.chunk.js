(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{207:function(e,t,n){e.exports=n.p+"static/media/Logo.d9d4f134.png"},208:function(e,t,n){e.exports=n.p+"static/media/LogoWhite.17285244.png"},223:function(e,t,n){e.exports=n(411)},228:function(e,t,n){},229:function(e,t,n){},300:function(e,t,n){},320:function(e,t,n){},324:function(e,t,n){},342:function(e,t,n){},403:function(e,t,n){},404:function(e,t,n){},405:function(e,t,n){},406:function(e,t,n){},407:function(e,t,n){},408:function(e,t,n){},411:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(39),r=n.n(l),o=(n(228),n(423)),c=n(194),d=n(421),m=n(213),s=n(420),u=n(49);n(229);function k(e){return"bordered"===e}var p=function(e){return i.a.createElement("a",{href:e.link.link},i.a.createElement(u.a,{className:"RLSocialPad ".concat(e.link.secondaryColor?e.link.secondaryColor:""),name:e.link.iconName,inverted:e.link.surroundedInColor,circular:(t=e.link.surrounded,"circular"===t),bordered:k(e.link.surrounded),color:e.link.color}));var t},f=function(e){return i.a.createElement("div",null,e.links.group.map((function(e){return i.a.createElement(p,{link:e})})))},v=(n(300),function(e){return i.a.createElement(m.a,{src:e.src,className:"RLFixCenter RLOneSize",rounded:!0})}),g=(n(320),function(e){return i.a.createElement("div",null,i.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(e.profileTitle.color),style:{fontSize:"2.5em"}},e.profileTitle.title),i.a.createElement(s.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},i.a.createElement(o.a,{textAlign:"center",className:"RCSpace-5"},i.a.createElement(o.a.Row,null,i.a.createElement(f,{links:e.links})),i.a.createElement(o.a.Row,{className:"RCNoTopPadding"},i.a.createElement(o.a.Column,{textAlign:"center"},i.a.createElement(v,{src:e.profileImg}))))))}),h=n(417),b=n(419),E=(n(324),function(e){return i.a.createElement(s.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.data.modalAlternativeText.text?e.data.modalAlternativeText.text:e.data.name)}),x=n(195),S=n.n(x),C=function(e){return i.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(e.w,"; height:").concat(e.h,'"\n            poster="').concat(e.poster,'"\n            >\n            <source type="video/mp4" src="').concat(e.video,'" />\n            </video>')}})};n(342);var T=function(e){return i.a.createElement("div",{className:"center"},(t=e.link.mainMedia.type,n=e.link.mainMedia.link,e.deviceSize,a=e.link.mainMedia.videoPoster,"still"===t?i.a.createElement(m.a,{wrapped:!0,size:"medium",src:n}):"mp4"===t?i.a.createElement(C,{video:n,w:"100%",h:"100%",poster:a}):i.a.createElement(S.a,{url:n,width:"100%",height:"100%"})),i.a.createElement(h.a.Description,{className:"pushOff-y"},i.a.createElement("h3",null,e.link.mainMedia.mediaText)));var t,n,a},y=(n(403),function(e){return i.a.createElement(b.a,{as:"a",href:e.link.link,fluid:!0,className:"pushoffButtom"},e.link.name)}),z=(n(404),n(405),function(e){var t=e.links.buttonColor;return i.a.createElement("div",null,i.a.createElement(h.a,{size:"small",trigger:i.a.createElement(b.a,Object.assign({fluid:!0,size:"big",color:e.links.buttonColor},t?{className:"RCPadding fontColor ".concat(e.link.fontColor)}:{className:"RCPadding RCWhiteBG"}),e.links.name),closeIcon:!0},i.a.createElement(o.a,{centered:!0,columns:2},e.links.modalAlternativeText.removed?"":i.a.createElement(o.a.Row,{className:"RCTitleFix"},i.a.createElement(E,{data:e.links})),i.a.createElement(o.a.Row,null,i.a.createElement(h.a.Content,{image:!0,className:"RCCenter RCPushDown"},i.a.createElement(T,{link:e.links}),e.links.additionalLinks?e.links.additionalLinks.map((function(e){return i.a.createElement(y,{link:e})})):" ")))))}),P=n(88),R=n(58),N=function(e){var t=function(){return i.a.createElement("span",null,e.completeText)};return i.a.createElement(R.a,{date:e.dateTime,renderer:function(e){var n=e.days,a=e.hours,l=e.minutes,r=e.seconds;return e.completed?i.a.createElement(t,null):i.a.createElement("span",null,n," days ",Object(R.b)(a),":",Object(R.b)(l),":",Object(R.b)(r))}})},A=(n(406),function(e){return i.a.createElement("div",null,e.timer?i.a.createElement(P.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text,"  ",i.a.createElement(N,{dateTime:e.timer,text:e.completeText})):i.a.createElement(P.a,{as:"a",color:e.color,ribbon:e.bannerSide,className:"".concat(e.deviceSize," ").concat(e.altColor)},e.text))}),w=(n(80),function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(z,{links:e.link})):i.a.createElement(z,{links:e.link}))}),L=(n(407),function(e){var t=e.link.buttonColor;return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(b.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name)):i.a.createElement(b.a,Object.assign({as:"a",href:e.link.link},t?{className:"RCPadding ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(e.link.fontColor?"fontColor ".concat(e.link.fontColor):"")},{color:e.link.buttonColor,size:"big",fluid:!0}),e.link.name))}),M=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement(T,{link:e.link,type:e.link.type,deviceSize:e.deviceSize})):i.a.createElement(T,{link:e.link,type:e.link.type,deviceSize:e.deviceSize}))},O=function(e){return i.a.createElement("div",null,e.link.featured?i.a.createElement("div",null,i.a.createElement(A,{text:e.link.featuredText,color:e.link.featuredColor,bannerSide:e.link.bannerSide,deviceSize:"xs"===e.deviceSize?"bannerPositionS":"md"===e.deviceSize?"bannerPositionM":"lg"===e.deviceSize?"bannerPositionL":"bannerPositionXL",timer:e.link.featuredTimerDate,completeText:e.link.featuredTimerText,altColor:e.link.featuredAltStyle}),i.a.createElement("a",{href:e.link.link},i.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText))):i.a.createElement("div",null,i.a.createElement(m.a,{wrapped:!0,size:"medium",src:e.link.mainMedia.link}),i.a.createElement(s.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},e.link.modalAlternativeText.text?e.link.modalAlternativeText.text:e.link.mainMedia.mediaText)))},j=function(e){var t=e.link.linkSpaced,n=e.link.colored;return i.a.createElement("div",null,"internal"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(w,{link:e.link,deviceSize:e.deviceSize})):"item"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(M,{link:e.link,deviceSize:e.deviceSize})):"still/external"===e.link.type?i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(O,{link:e.link,deviceSize:e.deviceSize})):i.a.createElement(d.a,Object.assign({color:e.link.color},n?{inverted:!0}:{},t?{raised:!0,className:"pushDown ".concat(e.link.additionalStyle," ").concat(e.link.color?"":e.link.colorOveride)}:{}),i.a.createElement(L,{link:e.link,deviceSize:e.deviceSize})))},D=(n(408),function(e){return i.a.createElement("div",{className:"stretched"},i.a.createElement(s.a,{as:"h2"},i.a.createElement("span",null,e.links.groupName)),i.a.createElement("div",null,e.links.group.map((function(t){return i.a.createElement(j,{link:t,deviceSize:e.deviceSize})}))))}),I=n(207),W=n.n(I),B=n(208),_=n.n(B),H=function(e){return i.a.createElement(o.a,{centered:!0},i.a.createElement(o.a.Row,null,i.a.createElement(c.a,null,i.a.createElement(g,{links:e.socialLinks,deviceSize:e.deviceSize,profileImg:e.profileImage,profileTitle:e.profileTitle}))),e.linkGroups.map((function(t,n){return i.a.createElement(o.a.Row,null,i.a.createElement(D,{key:n,links:t,deviceSize:e.deviceSize}))})),i.a.createElement(d.a,{basic:!0},i.a.createElement(m.a,{src:(t=e.logo,"white"===t?_.a:W.a),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0})));var t},G=n(89),J=n(212),V={title:"P2P Rixh",color:"RLWhite"},X=!0,Y="https://res.cloudinary.com/rightlink/image/upload/v1594868601/p2pRich/logo_vcg55z.png",F="background-image: linear-gradient(to right top, #000000, #1a1a1a, #2d2d2d, #424242, #585858, #585858, #585858, #585858, #424242, #2d2d2d, #1a1a1a, #000000);",K={group:[{name:"Instagram",iconName:"instagram",link:"https://instagram.com/p2prixhmusic",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/pay2playrich",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Sound Cloud",iconName:"soundcloud",link:"https://soundcloud.com/p2prixh",color:"red",secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},q=n(210),$=Object(J.a)({backgroundImg:{"background-image":"url(".concat(X?Y:"",")"),"background-repeat":"no-repeat","background-position":"50% 45%","background-attachment":"fixed","background-size":"contain"}}),Q=[{groupName:"",groupColor:"",group:[{name:"Latest EP",link:"https://music.apple.com/us/album/spaceships-in-the-suburbs-2-ep/1572887903",linkSpaced:!0,type:"still/external",typeAction:"",internal:!1,featured:!1,featuredText:"something",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1625325370/p2pRich/SITB2_kg1lcl.jpg",mediaText:"Latest EP",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:"4 The Common Wealth - EP",link:"https://music.apple.com/us/album/4-the-common-wealth-ep/1561290292",linkSpaced:!0,type:"still/external",typeAction:"",internal:!1,featured:!1,featuredText:"something",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"still/external",link:"https://res.cloudinary.com/rightlink/image/upload/v1617817684/p2pRich/4_The_Common_Wealth_dznnwy.jpg",mediaText:"4 The Common Wealth - EP",videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}},{name:'Hit Single "Playing 4 Keeps"',link:"https://youtu.be/B4R1YHoSpbM",linkSpaced:!0,type:"item",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"video",link:"https://youtu.be/B4R1YHoSpbM",mediaText:'Hit Single "Playing 4 Keeps" Video',videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longestText",modalAlternativeText:{removed:!1,text:""}},{name:'Hit Single "4am in Richmond"',link:"https://youtu.be/vs2LWrJYVdA",linkSpaced:!0,type:"item",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"red",featuredAltStyle:"",pinned:!0,mainMedia:{type:"video",link:"https://youtu.be/vs2LWrJYVdA",mediaText:'Hit Single "4am in Richmond" Video',videoPoster:""},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longestText",modalAlternativeText:{removed:!1,text:""}},{name:"Artist Website",link:"https://unitedmasters.com/p2p-rich",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"black",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"",modalAlternativeText:{removed:!1,text:""}}]}],U=function(){var e=Object(G.useMediaPredicate)("(max-width: 415px)"),t=Object(G.useMediaPredicate)("(max-width: 768px)"),n=Object(G.useMediaPredicate)("(max-width: 1024px)"),a=$();return i.a.createElement("div",{className:a.backgroundImg},i.a.createElement(q.a,null,i.a.createElement("title",null,"Right-Link"),i.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(F," \n               }\n            "))),i.a.createElement(H,{deviceSize:e?"xs":t?"md":n?"lg":"xl",socialLinks:K,profileTitle:V,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1592673758/p2pRich/Profile1_hohiq3.jpg",linkGroups:Q,logo:"colored"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,n){}},[[223,1,2]]]);
//# sourceMappingURL=main.0620b38f.chunk.js.map