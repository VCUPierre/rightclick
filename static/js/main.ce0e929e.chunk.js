(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{214:function(e,t,a){e.exports=a.p+"static/media/Logo.d9d4f134.png"},215:function(e,t,a){e.exports=a.p+"static/media/LogoWhite.17285244.png"},231:function(e,t,a){e.exports=a(426)},236:function(e,t,a){},237:function(e,t,a){},308:function(e,t,a){},330:function(e,t,a){},336:function(e,t,a){},355:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(42),i=a.n(r),l=(a(236),a(440)),c=a(201),m=a(438),d=a(219),s=a(23),u=a(437),f=a(22),p=a(52);a(237);function E(e){return"bordered"===e}var v=function(e){var t,a=e.link;return o.a.createElement("a",{href:a.link},o.a.createElement(p.a,{className:"RLSocialPad ".concat(a.secondaryColor?a.secondaryColor:""),name:a.iconName,inverted:a.inverted,circular:(t=a.surrounded,"circular"===t),bordered:E(a.surrounded),color:a.color}))},g=function(e){var t=e.socialLinks;return o.a.createElement("div",null,t.group.map((function(e,t){return o.a.createElement(v,{key:"social-link-".concat(t+1),link:e})})))},k=(a(308),function(e){var t=e.src;return o.a.createElement(d.a,{src:t,className:"RLFixCenter RLOneSize",rounded:!0})}),b=(a(330),["socialLinks","profileImage","profileTitle"]),C=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),x=function(e){var t=e.socialLinks,a=e.profileImage,n=e.profileTitle,r=Object(s.a)(e,b),i=C(r);return o.a.createElement("div",null,o.a.createElement(u.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(n.color," ").concat(i.customFont),style:{fontSize:"2.5em"}},n.title),o.a.createElement(u.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},o.a.createElement(l.a,{textAlign:"center",className:"RCSpace-5"},o.a.createElement(l.a.Row,{className:"RCNoTopPadding ".concat(t.group[0].surrounded?"RCMarginBottom-2":"")},o.a.createElement(g,{socialLinks:t})),o.a.createElement(l.a.Row,{className:"RCNoTopPadding"},o.a.createElement(l.a.Column,{textAlign:"center"},o.a.createElement(k,{src:a}))))))},h=a(434),T=a(436),S=(a(336),function(e){var t=e.link;return o.a.createElement(u.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.name)}),y=a(202),R=a.n(y),N=function(e){var t=e.w,a=e.h,n=e.poster,r=e.video;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(t,"; height:").concat(a,'"\n            poster="').concat(n,'"\n            >\n            <source type="video/mp4" src="').concat(r,'" />\n            </video>')}})},z=(a(355),["link","deviceSize"]),w=Object(f.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:["Lato","!important"]}}});var F=function(e){var t=e.link,a=(e.deviceSize,Object(s.a)(e,z)),n=w(a);return o.a.createElement("div",{className:"center"},function(e,t,a,n){return"still"===e?o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t}):"mp4"===e?o.a.createElement(N,{video:t,w:"100%",h:"100%",poster:n}):o.a.createElement(R.a,{url:t,width:"100%",height:"100%"})}(t.mainMedia.type,t.mainMedia.link,0,t.mainMedia.videoPoster),o.a.createElement(h.a.Description,{className:"pushOff-y"},o.a.createElement("h3",{className:n.customFont},t.mainMedia.mediaText)))},P=(a(416),function(e){var t=e.link;return o.a.createElement(T.a,{as:"a",href:t.link,fluid:!0,className:"pushoffButtom"},t.name)}),L=(a(417),a(418),["link","deviceSize"]),A=Object(f.a)({customFont:{"font-family":function(e){return e.customFont}}}),O=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,L),r=A(n),i=t.buttonColor;return o.a.createElement("div",null,o.a.createElement(h.a,{size:"small",trigger:o.a.createElement(T.a,Object.assign({fluid:!0,size:"big",color:t.buttonColor},i?{className:"RCPadding fontColor ".concat(t.fontColor," ").concat(r.customFont)}:{className:"RCPadding RCWhiteBG ".concat(r.customFont)}),t.name),closeIcon:!0},o.a.createElement(l.a,{centered:!0,columns:2},t.modalAlternativeText.removed?"":o.a.createElement(l.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{link:t})),o.a.createElement(l.a.Row,null,o.a.createElement(h.a.Content,{image:!0,className:"RCCenter RCPushDown"},o.a.createElement(F,{link:t,deviceSize:a}),t.additionalLinks?t.additionalLinks.map((function(e,t){return o.a.createElement(P,{key:"links-modal-".concat(t+1),link:e})})):" ")))))},M=a(97),j=a(65),B=function(e){var t=e.dateTime,a=e.completeText,n=function(){return o.a.createElement("span",null,a)};return o.a.createElement(j.a,{date:t,renderer:function(e){var t=e.days,a=e.hours,r=e.minutes,i=e.seconds;return e.completed?o.a.createElement(n,null):o.a.createElement("span",null,t," days ",Object(j.b)(a),":",Object(j.b)(r),":",Object(j.b)(i))}})},D=(a(419),function(e){var t=e.text,a=e.color,n=e.bannerSide,r=e.deviceSize,i=e.timer,l=e.completeText,c=e.altColor;return o.a.createElement("div",null,i?o.a.createElement(M.a,{as:"a",color:a,ribbon:!!n,className:"".concat(r," ").concat(c)},t," ",o.a.createElement(B,{dateTime:i,completeText:l})):o.a.createElement(M.a,{as:"a",color:a,ribbon:!!n,className:"".concat(r," ").concat(c)},t))}),I=(a(61),function(e){var t=e.link,a=e.deviceSize,n=e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(O,{link:t,customFont:n,deviceSize:a})):o.a.createElement(O,{link:t,customFont:n,deviceSize:a}))}),_=(a(420),["link","deviceSize"]),W=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),G=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,_),r=W(n),i=t.buttonColor;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(T.a,Object.assign({as:"a",href:t.link},i?{className:"RCPadding ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")},{color:t.buttonColor,size:"big",fluid:!0}),t.name)):o.a.createElement(T.a,Object.assign({as:"a",href:t.link},i?{className:"RCPadding ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")},{color:t.buttonColor,size:"big",fluid:!0}),t.name))},X=function(e){var t=e.link,a=e.deviceSize,n=e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(F,{customFont:n,link:t,type:t.type,deviceSize:a})):o.a.createElement(F,{customFont:n,link:t,type:t.type,deviceSize:a}))},Z=["link","deviceSize"],H=Object(f.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:""}}}),q=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,Z),r=H(n);return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement("a",{href:t.link},o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t.mainMedia.link}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff ".concat(r.customFont)},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText))):o.a.createElement("a",{href:t.link},o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t.mainMedia.link}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff TEST ".concat(r.customFont)},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)))},Y=a(220),J=a(19),U=a(433),$=a(221),V=a(432),K=function(e){var t=e.slides,a=e.size;return o.a.createElement(V.a,{textAlign:"center"},o.a.createElement(T.a.Group,{size:a},Object($.a)(Array(t).keys()).map((function(e){return o.a.createElement(T.a,{as:J.d,key:e,icon:"circle",slide:e})}))))};K.defaultProps={size:"mini"};var Q=K,ee=(a(421),function(e){var t=e.collection,a=e.linkType,r=e.link,i=e.name,c=e.additionalLinks,m=Object(n.useState)(!1),d=Object(Y.a)(m,2),s=d[0],u=d[1],f={modalAlternativeText:{text:""},name:i};return o.a.createElement(o.a.Fragment,null,o.a.createElement(J.c,{naturalSlideWidth:100,naturalSlideHeight:110,totalSlides:t.length,interval:t.speed,isPlaying:!0},"internal"===a?o.a.createElement(J.g,null,t.map((function(e,t){return o.a.createElement(J.f,{key:"Slide-image-".concat(t+1),index:t,onClick:function(){return u(!0)}},o.a.createElement(J.e,{src:e}))}))):"external"===a?o.a.createElement(J.g,null,t.map((function(e,t){return o.a.createElement(J.f,{key:"Slide-image-".concat(t+1),index:t,tag:"a",href:r},o.a.createElement(J.e,{src:e}))}))):o.a.createElement(J.g,null,t.map((function(e,t){return o.a.createElement(J.f,{key:"Slide-image-".concat(t+1),index:t},o.a.createElement(J.e,{src:e}))}))),o.a.createElement(U.a,null),t.length>7?o.a.createElement(o.a.Fragment,null,o.a.createElement(J.a,{className:"ui button"},"Back"),o.a.createElement(J.b,{className:"ui button"},"Next")):o.a.createElement(Q,{slides:t.length})),"internal"===a?o.a.createElement(h.a,{size:"small",onClose:function(){return u(!1)},onOpen:function(){return u(!0)},open:s,closeIcon:!0},o.a.createElement(l.a,{centered:!0,columns:2},o.a.createElement(l.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{data:f})),o.a.createElement(l.a.Row,null,o.a.createElement(h.a.Content,{image:!0,className:"RCCenter RCPushDown"},c?c.map((function(e,t){return o.a.createElement(P,{key:"links-modal-".concat(t+1),link:e})})):" ")))):"")}),te=function(e){var t=e.link,a=e.deviceSize;e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(ee,{collection:t.mainMedia.collection,linkType:t.mainMedia.linkType,link:t.link,name:t.mainMedia.mediaText,additionalLinks:t.additionalLinks}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)):o.a.createElement("div",null,o.a.createElement(ee,{collection:t.mainMedia.collection,link:t.link,linkType:t.mainMedia.linkType,name:t.mainMedia.mediaText,additionalLinks:t.additionalLinks}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)))},ae=(a(422),function(e){var t=e.link,a=t.buttonColor;return o.a.createElement("div",null,o.a.createElement(h.a,{size:"small",trigger:o.a.createElement(T.a,Object.assign({fluid:!0,size:"big",color:t.buttonColor},a?{className:"RCPadding fontColor ".concat(t.fontColor)}:{className:"RCPadding RCWhiteBG"}),t.name),closeIcon:!0},o.a.createElement(l.a,{centered:!0,columns:2},t.modalAlternativeText.removed?"":o.a.createElement(l.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{link:t})),o.a.createElement(l.a.Row,{className:"RLBio"},o.a.createElement(h.a.Content,{image:!0,className:"RCCenter RCPushDown"},t.bioContent.map((function(e,t){return o.a.createElement(u.a,{as:"h2",key:"Bio-header-".concat(t+1)},e.header,o.a.createElement(u.a.Subheader,{content:e.subHeader}))})))))))}),ne=function(e){var t=e.link,a=e.deviceSize;e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(D,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(ae,{link:t})):o.a.createElement(ae,{link:t}))},oe=function(e){var t=e.link,a=e.deviceSize,n=e.customFont,r=t.linkSpaced,i=t.colored;return o.a.createElement("div",null,"internal"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(I,{link:t,deviceSize:a,customFont:n})):"item"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(X,{link:t,deviceSize:a,customFont:n})):"still/external"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(q,{link:t,deviceSize:a,customFont:n})):"slideshow"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(te,{link:t,deviceSize:a,customFont:n})):"bio"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(ne,{link:t,deviceSize:a,customFont:n})):o.a.createElement(m.a,Object.assign({color:t.color},i?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(G,{link:t,deviceSize:a,customFont:n})))},re=(a(423),["links","deviceSize"]),ie=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),le=function(e){var t=e.links,a=e.deviceSize,n=Object(s.a)(e,re);ie(n);return o.a.createElement("div",{className:"stretched"},o.a.createElement(u.a,{as:"h2",color:t.groupColor.startsWith("RL")?"black":t.groupColor,className:t.groupColor.startsWith("RL")?t.groupColor:""},o.a.createElement("span",null,t.groupName)),o.a.createElement("div",null,t.group.map((function(e,t){return o.a.createElement(oe,{key:"Social-links-".concat(t+1),link:e,deviceSize:a,customFont:n.customFont})}))))},ce=a(214),me=a.n(ce),de=a(215),se=a.n(de),ue=(a(424),function(e){return"white"===e?se.a:me.a}),fe=function(e){var t=e.deviceSize,a=e.socialLinks,n=e.profileTitle,r=e.profileImage,i=e.linkGroups,s=e.logo,u=e.background,f=e.customFont;return o.a.createElement(l.a,{centered:!0,className:"RCMarginTop-1"},o.a.createElement(l.a.Row,{className:"RCMarginBottom-2"},o.a.createElement(c.a,null,o.a.createElement(x,{socialLinks:a,profileImage:r,profileTitle:n,customFont:f}))),i.map((function(e,a){return o.a.createElement(l.a.Row,{key:"linkgroup-".concat(a+1),className:"RCNoTopPadding RCMarginBottom-2"},o.a.createElement(le,{key:a,links:e,deviceSize:t,customFont:f}))})),o.a.createElement("div",null,u.logoLink?o.a.createElement(l.a.Row,{className:"RCLogoZeroBottom"},o.a.createElement(m.a,{basic:!0,className:"RCLogoZeroBottom"},o.a.createElement(d.a,{className:"RCLogoZeroBottom",src:u.logoLink,as:"a",size:"tiny",href:u.logoActiveLink,target:"_blank",spaced:!0}))):"",o.a.createElement(m.a,{basic:!0,className:"".concat(u.logoLink?"RCDoubleLogo":"RCMarginBottom-1")},o.a.createElement(d.a,{src:ue(s),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0}))))},pe=a(98),Ee=a(216),ve=a.n(Ee),ge={title:"Rayzor Ramon",color:"RLWhite"},ke={image:!1,imageLink:"",color:"background-image: linear-gradient(to right bottom, #12000d, #140016, #12001e, #140728, #110e33, #0b133e, #1a194d, #2a1e5c, #3b236a, #4e2778);"},be={group:[{name:"Instagram",iconName:"instagram",link:"https://www.instagram.com/rayzor_ramon_the_barber_",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Twitter",iconName:"twitter",link:"https://twitter.com/rayzzorramon",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Facebook",iconName:"facebook f",link:"https://www.facebook.com/Rayzor-Ramon-The-Bar-Ber-202433150376767/",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0},{name:"Youtube",iconName:"youtube",link:"https://youtube.com/channel/UCwUd_9OcxPl9qOyEk6PRihA",color:"red",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},Ce={groupName:"Book a Cut Today",groupColor:"RLWhite",groupFont:"",group:[{name:"Personal Appointments",link:"https://book.thecut.co/RAYZORAMONTHEBARBER",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Shop Appointments",link:"https://online.getsquire.com/book/taylors-barbershop-richmond/professional/sergio-31",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Rayzor Ramon's Store",link:"https://rayzorramons.com",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!1,mainMedia:{},additionalLinks:[],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""}},{name:"Slideshow",link:"https://venmo.com/code?user_id=2920916300333056019&created=1647041532.732115&printed=1",linkSpaced:!0,type:"slideshow",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{type:"slideshow",linkType:"internal",speed:1e3,mediaText:"Purchase a Proof",collection:["https://res.cloudinary.com/rightlink/image/upload/v1647041982/RazorRamon/proofs-2_cwuvkr.jpg","https://res.cloudinary.com/rightlink/image/upload/v1647040173/RazorRamon/proofs-1_y0q12y.jpg"]},additionalLinks:[{name:"Venmo",link:"https://venmo.com/code?user_id=2920916300333056019&created=1647041532.732115&printed=1"},{name:"Cash App",link:"https://cash.app/$RaYZorRamon"},{name:"Store",link:"https://google.com"}],color:"red",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]}]},xe=a(217),he=(a(425),[Ce]),Te=function(){var e=Object(pe.useMediaPredicate)("(max-width: 430px)"),t=Object(pe.useMediaPredicate)("(max-width: 768px)"),a=Object(pe.useMediaPredicate)("(max-width: 1024px)");return o.a.createElement("div",null,o.a.createElement(xe.a,null,o.a.createElement("title",null,"Right-Link"),o.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(ke.imageLink?ke.imageLink:ke.color?ke.color:"","\n               }\n                .root {\n                    height: 100%;\n                    overflow-x: hidden;\n                }\n            "))),Ce.groupFont?o.a.createElement(ve.a,{fonts:[{font:Ce.groupFont,weights:[400]}]}):"",o.a.createElement(fe,{deviceSize:e?"xs":t?"md":a?"lg":"xl",socialLinks:be,profileTitle:ge,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1640960524/RazorRamon/razorRamon_hwe9lz.jpg",linkGroups:he,logo:"colored",background:ke,customFont:Ce.groupFont}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){}},[[231,1,2]]]);
//# sourceMappingURL=main.ce0e929e.chunk.js.map