(this.webpackJsonprightclick=this.webpackJsonprightclick||[]).push([[0],{214:function(e,t,a){e.exports=a.p+"static/media/Logo.d9d4f134.png"},215:function(e,t,a){e.exports=a.p+"static/media/LogoWhite.17285244.png"},231:function(e,t,a){e.exports=a(426)},236:function(e,t,a){},237:function(e,t,a){},308:function(e,t,a){},330:function(e,t,a){},336:function(e,t,a){},355:function(e,t,a){},416:function(e,t,a){},417:function(e,t,a){},418:function(e,t,a){},419:function(e,t,a){},420:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){},426:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(42),l=a.n(r),i=(a(236),a(440)),c=a(201),m=a(438),d=a(219),s=a(23),u=a(437),f=a(22),p=a(52);a(237);function g(e){return"bordered"===e}var v=function(e){var t,a=e.link;return o.a.createElement("a",{href:a.link},o.a.createElement(p.a,{className:"RLSocialPad ".concat(a.secondaryColor?a.secondaryColor:""),name:a.iconName,inverted:a.inverted,circular:(t=a.surrounded,"circular"===t),bordered:g(a.surrounded),color:a.color}))},E=function(e){var t=e.socialLinks;return o.a.createElement("div",null,t.group.map((function(e,t){return o.a.createElement(v,{key:"social-link-".concat(t+1),link:e})})))},k=(a(308),function(e){var t=e.src;return o.a.createElement(d.a,{src:t,className:"RLFixCenter RLOneSize",rounded:!0})}),x=(a(330),["socialLinks","profileImage","profileTitle"]),b=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),h=function(e){var t=e.socialLinks,a=e.profileImage,n=e.profileTitle,r=Object(s.a)(e,x),l=b(r);return o.a.createElement("div",null,o.a.createElement(u.a,{as:"h1",textAlign:"center",className:"RCTopPadding RCMarginBottom ".concat(n.color," ").concat(l.customFont),style:{fontSize:"2.5em"}},n.title),o.a.createElement(u.a,{as:"h2",textAlign:"center",className:"RCMarginTop"},o.a.createElement(i.a,{textAlign:"center",className:"RCSpace-5"},o.a.createElement(i.a.Row,{className:"RCNoTopPadding ".concat(t.group[0].surrounded?"RCMarginBottom-2":"")},o.a.createElement(E,{socialLinks:t})),o.a.createElement(i.a.Row,{className:"RCNoTopPadding"},o.a.createElement(i.a.Column,{textAlign:"center"},o.a.createElement(k,{src:a}))))))},C=a(434),T=a(436),S=(a(336),function(e){var t=e.link;return console.log("link",t),o.a.createElement(u.a,{as:"h1",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.name)}),y=a(202),P=a.n(y),R=function(e){var t=e.w,a=e.h,n=e.poster,r=e.video;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:'\n            <video\n            loop\n            muted\n            playsinline\n            autoplay\n            style="width:'.concat(t,"; height:").concat(a,'"\n            poster="').concat(n,'"\n            >\n            <source type="video/mp4" src="').concat(r,'" />\n            </video>')}})},N=(a(355),["link","deviceSize"]),w=Object(f.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:["Lato","!important"]}}});var z=function(e){var t=e.link,a=(e.deviceSize,Object(s.a)(e,N)),n=w(a);return o.a.createElement("div",{className:"center"},function(e,t,a,n){return"still"===e?o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t}):"mp4"===e?o.a.createElement(R,{video:t,w:"100%",h:"100%",poster:n}):o.a.createElement(P.a,{url:t,width:"100%",height:"100%"})}(t.mainMedia.type,t.mainMedia.link,0,t.mainMedia.videoPoster),o.a.createElement(C.a.Description,{className:"pushOff-y"},o.a.createElement("h3",{className:n.customFont},t.mainMedia.mediaText)))},F=(a(416),function(e){var t=e.link;return o.a.createElement(T.a,{as:"a",href:t.link,fluid:!0,className:"pushoffButtom"},t.name)}),L=(a(417),a(418),["link","deviceSize"]),A=Object(f.a)({customFont:{"font-family":function(e){return e.customFont}}}),M=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,L),r=A(n),l=t.buttonColor;return o.a.createElement("div",null,o.a.createElement(C.a,{size:"small",trigger:o.a.createElement(T.a,Object.assign({fluid:!0,size:"big",color:t.buttonColor},l?{className:"RCPadding fontColor ".concat(t.fontColor," ").concat(r.customFont)}:{className:"RCPadding RCWhiteBG ".concat(r.customFont)}),t.name),closeIcon:!0},o.a.createElement(i.a,{centered:!0,columns:2},t.modalAlternativeText.removed?"":o.a.createElement(i.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{link:t})),o.a.createElement(i.a.Row,null,o.a.createElement(C.a.Content,{image:!0,className:"RCCenter RCPushDown"},o.a.createElement(z,{link:t,deviceSize:a}),t.additionalLinks?t.additionalLinks.map((function(e,t){return o.a.createElement(F,{key:"links-modal-".concat(t+1),link:e})})):" ")))))},O=a(97),j=a(65),_=function(e){var t=e.dateTime,a=e.completeText,n=function(){return o.a.createElement("span",null,a)};return o.a.createElement(j.a,{date:t,renderer:function(e){var t=e.days,a=e.hours,r=e.minutes,l=e.seconds;return e.completed?o.a.createElement(n,null):o.a.createElement("span",null,t," days ",Object(j.b)(a),":",Object(j.b)(r),":",Object(j.b)(l))}})},I=(a(419),function(e){var t=e.text,a=e.color,n=e.bannerSide,r=e.deviceSize,l=e.timer,i=e.completeText,c=e.altColor;return o.a.createElement("div",null,l?o.a.createElement(O.a,{as:"a",color:a,ribbon:!!n,className:"".concat(r," ").concat(c)},t," ",o.a.createElement(_,{dateTime:l,completeText:i})):o.a.createElement(O.a,{as:"a",color:a,ribbon:!!n,className:"".concat(r," ").concat(c)},t))}),D=(a(61),function(e){var t=e.link,a=e.deviceSize,n=e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(M,{link:t,customFont:n,deviceSize:a})):o.a.createElement(M,{link:t,customFont:n,deviceSize:a}))}),B=(a(420),["link","deviceSize"]),G=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),W=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,B),r=G(n),l=t.buttonColor;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(T.a,Object.assign({as:"a",href:t.link},l?{className:"RCPadding ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")},{color:t.buttonColor,size:"big",fluid:!0}),t.name)):o.a.createElement(T.a,Object.assign({as:"a",href:t.link},l?{className:"RCPadding ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")}:{className:"RCPadding RCWhiteBG ".concat(r.customFont," ").concat(t.fontColor?"fontColor ".concat(t.fontColor):"")},{color:t.buttonColor,size:"big",fluid:!0}),t.name))},X=function(e){var t=e.link,a=e.deviceSize,n=e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(z,{customFont:n,link:t,type:t.type,deviceSize:a})):o.a.createElement(z,{customFont:n,link:t,type:t.type,deviceSize:a}))},H=["link","deviceSize"],Z=Object(f.a)({customFont:{"font-family":function(e){return e.customFont?[e.customFont,"!important"]:""}}}),q=function(e){var t=e.link,a=e.deviceSize,n=Object(s.a)(e,H),r=Z(n);return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement("a",{href:t.link},o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t.mainMedia.link}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff ".concat(r.customFont)},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText))):o.a.createElement("a",{href:t.link},o.a.createElement(d.a,{wrapped:!0,size:"medium",src:t.mainMedia.link}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff TEST ".concat(r.customFont)},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)))},J=a(220),U=a(19),V=a(433),$=a(221),K=a(432),Q=function(e){var t=e.slides,a=e.size;return o.a.createElement(K.a,{textAlign:"center"},o.a.createElement(T.a.Group,{size:a},Object($.a)(Array(t).keys()).map((function(e){return o.a.createElement(T.a,{as:U.d,key:e,icon:"circle",slide:e})}))))};Q.defaultProps={size:"mini"};var Y=Q,ee=(a(421),function(e){var t=e.collection,a=e.linkType,r=e.link,l=e.additionalLinks,c=e.name,m=e.modalAlternativeText,d=Object(n.useState)(!1),s=Object(J.a)(d,2),u=s[0],f=s[1],p={modalAlternativeText:m,name:c};return o.a.createElement(o.a.Fragment,null,o.a.createElement(U.c,{naturalSlideWidth:100,naturalSlideHeight:110,totalSlides:t.length,interval:t.speed,isPlaying:!0},"internal"===a?o.a.createElement(U.g,null,t.map((function(e,t){return o.a.createElement(U.f,{key:"Slide-image-".concat(t+1),index:t,onClick:function(){return f(!0)}},o.a.createElement(U.e,{src:e}))}))):"external"===a?o.a.createElement(U.g,null,t.map((function(e,t){return o.a.createElement(U.f,{key:"Slide-image-".concat(t+1),index:t,tag:"a",href:r},o.a.createElement(U.e,{src:e}))}))):o.a.createElement(U.g,null,t.map((function(e,t){return o.a.createElement(U.f,{key:"Slide-image-".concat(t+1),index:t},o.a.createElement(U.e,{src:e}))}))),o.a.createElement(V.a,null),t.length>7?o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{className:"ui button"},"Back"),o.a.createElement(U.b,{className:"ui button"},"Next")):o.a.createElement(Y,{slides:t.length})),"internal"===a?o.a.createElement(C.a,{size:"small",onClose:function(){return f(!1)},onOpen:function(){return f(!0)},open:u,closeIcon:!0},o.a.createElement(i.a,{centered:!0,columns:2},o.a.createElement(i.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{link:p})),o.a.createElement(i.a.Row,null,o.a.createElement(C.a.Content,{image:!0,className:"RCCenter RCPushDown"},l?l.map((function(e,t){return o.a.createElement(F,{key:"links-modal-".concat(t+1),link:e})})):" ")))):"")}),te=function(e){var t=e.link,a=e.deviceSize;e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),console.log("slideshow link",t),o.a.createElement(ee,{collection:t.mainMedia.collection,linkType:t.mainMedia.linkType,link:t.link,name:t.mainMedia.mediaText,modalAlternativeText:t.modalAlternativeText,additionalLinks:t.additionalLinks}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)):o.a.createElement("div",null,o.a.createElement(ee,{collection:t.mainMedia.collection,link:t.link,linkType:t.mainMedia.linkType,name:t.mainMedia.mediaText,modalAlternativeText:t.modalAlternativeText,additionalLinks:t.additionalLinks}),o.a.createElement(u.a,{as:"h3",textAlign:"center",className:"RCborderNone RCtopPushoff"},t.modalAlternativeText.text?t.modalAlternativeText.text:t.mainMedia.mediaText)))},ae=(a(422),function(e){var t=e.link,a=t.buttonColor;return o.a.createElement("div",null,o.a.createElement(C.a,{size:"small",trigger:o.a.createElement(T.a,Object.assign({fluid:!0,size:"big",color:t.buttonColor},a?{className:"RCPadding fontColor ".concat(t.fontColor)}:{className:"RCPadding RCWhiteBG"}),t.name),closeIcon:!0},o.a.createElement(i.a,{centered:!0,columns:2},t.modalAlternativeText.removed?"":o.a.createElement(i.a.Row,{className:"RCTitleFix"},o.a.createElement(S,{link:t})),o.a.createElement(i.a.Row,{className:"RLBio"},o.a.createElement(C.a.Content,{image:!0,className:"RCCenter RCPushDown"},t.bioContent.map((function(e,t){return o.a.createElement(u.a,{as:"h2",key:"Bio-header-".concat(t+1)},e.header,o.a.createElement(u.a.Subheader,{content:e.subHeader}))})))))))}),ne=function(e){var t=e.link,a=e.deviceSize;e.customFont;return o.a.createElement("div",null,t.featured?o.a.createElement("div",null,o.a.createElement(I,{text:t.featuredText,color:t.featuredColor,bannerSide:t.bannerSide,deviceSize:"xs"===a?"bannerPositionS":"md"===a?"bannerPositionM":"lg"===a?"bannerPositionL":"bannerPositionXL",timer:t.featuredTimerDate,completeText:t.featuredTimerText,altColor:t.featuredAltStyle}),o.a.createElement(ae,{link:t})):o.a.createElement(ae,{link:t}))},oe=function(e){var t=e.link,a=e.deviceSize,n=e.customFont,r=t.linkSpaced,l=t.colored;return o.a.createElement("div",null,"internal"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(D,{link:t,deviceSize:a,customFont:n})):"item"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(X,{link:t,deviceSize:a,customFont:n})):"still/external"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(q,{link:t,deviceSize:a,customFont:n})):"slideshow"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(te,{link:t,deviceSize:a,customFont:n})):"bio"===t.type?o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(ne,{link:t,deviceSize:a,customFont:n})):o.a.createElement(m.a,Object.assign({color:t.color},l?{inverted:!0}:{},r?{raised:!0,className:"pushDown ".concat(t.additionalStyle," ").concat(t.color?"":t.colorOveride)}:{}),o.a.createElement(W,{link:t,deviceSize:a,customFont:n})))},re=(a(423),["links","deviceSize"]),le=Object(f.a)({customFont:{"font-family":function(e){return[e.customFont,"!important"]}}}),ie=function(e){var t=e.links,a=e.deviceSize,n=Object(s.a)(e,re);le(n);return o.a.createElement("div",{className:"stretched"},o.a.createElement(u.a,{as:"h2",color:t.groupColor.startsWith("RL")?"black":t.groupColor,className:t.groupColor.startsWith("RL")?t.groupColor:""},o.a.createElement("span",null,t.groupName)),o.a.createElement("div",null,t.group.map((function(e,t){return o.a.createElement(oe,{key:"Social-links-".concat(t+1),link:e,deviceSize:a,customFont:n.customFont})}))))},ce=a(214),me=a.n(ce),de=a(215),se=a.n(de),ue=(a(424),function(e){return"white"===e?se.a:me.a}),fe=function(e){var t=e.deviceSize,a=e.socialLinks,n=e.profileTitle,r=e.profileImage,l=e.linkGroups,s=e.logo,u=e.background,f=e.customFont;return o.a.createElement(i.a,{centered:!0,className:"RCMarginTop-1"},o.a.createElement(i.a.Row,{className:"RCMarginBottom-2"},o.a.createElement(c.a,null,o.a.createElement(h,{socialLinks:a,profileImage:r,profileTitle:n,customFont:f}))),l.map((function(e,a){return o.a.createElement(i.a.Row,{key:"linkgroup-".concat(a+1),className:"RCNoTopPadding RCMarginBottom-2"},o.a.createElement(ie,{key:a,links:e,deviceSize:t,customFont:f}))})),o.a.createElement("div",null,u.logoLink?o.a.createElement(i.a.Row,{className:"RCLogoZeroBottom"},o.a.createElement(m.a,{basic:!0,className:"RCLogoZeroBottom"},o.a.createElement(d.a,{className:"RCLogoZeroBottom",src:u.logoLink,as:"a",size:"tiny",href:u.logoActiveLink,target:"_blank",spaced:!0}))):"",o.a.createElement(m.a,{basic:!0,className:"".concat(u.logoLink?"RCDoubleLogo":"RCMarginBottom-1")},o.a.createElement(d.a,{src:ue(s),as:"a",size:"small",href:"https://rightclickrva.com/business",target:"_blank",spaced:!0}))))},pe=a(98),ge=a(216),ve=a.n(ge),Ee={title:"Perfect Place RVA",color:""},ke={imageLink:"",imageSize:"",logoLink:"",logoActiveLink:"",color:""},xe={group:[{name:"Instagram",iconName:"instagram",link:"https://www.instagram.com/theperfectplaceevents/",color:"orange",inverted:!0,secondaryColor:"",surrounded:"circular",surroundedInColor:!0}]},be={groupName:"",groupColor:"",groupFont:"",group:[{name:"Website",link:"https://perfectplacerva.com",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"orange",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]},{name:"Event Rental Prices!",link:"https://www.perfectplacerva.com/services",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"orange",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]},{name:"Contact Us Now!",link:"https://www.perfectplacerva.com/contact",linkSpaced:!0,type:"external",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{},additionalLinks:[],color:"orange",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]},{name:"Slideshow",link:"https://book.thecut.co/CutsByBen",linkSpaced:!0,type:"slideshow",typeAction:"",internal:!1,featured:!1,featuredText:"",featuredTimerDate:"",featuredTimerText:"",featuredColor:"",featuredAltStyle:"",pinned:!0,mainMedia:{type:"slideshow",speed:1e3,mediaText:"We Also Do Ballons!",collection:["https://res.cloudinary.com/rightlink/image/upload/v1668189575/PerfectPlace/IMG_6684_rdwdp3.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189750/PerfectPlace/IMG_6679_cropped_znqgyh.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668190219/PerfectPlace/IMG_7448_p3rgex.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189565/PerfectPlace/IMG_6692_dnnbpa.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189630/PerfectPlace/IMG_6685_ytwymm.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189619/PerfectPlace/IMG_6693_ulwybu.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668190305/PerfectPlace/IMG_6776_lm9dix.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668190231/PerfectPlace/IMG_7396_xp9xa5.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189624/PerfectPlace/IMG_6687_ddqieu.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189584/PerfectPlace/IMG_6688_ggsd7p.jpg","https://res.cloudinary.com/rightlink/image/upload/v1668189565/PerfectPlace/IMG_6692_dnnbpa.jpg"]},additionalLinks:[],color:"orange",colorOveride:"",fontColor:"",colored:!1,buttonColor:"",bannerSide:"left",additionalStyle:"longText",modalAlternativeText:{removed:!1,text:""},bioContent:[]}]},he=a(217),Ce=(a(425),[be]),Te=function(){var e=Object(pe.useMediaPredicate)("(max-width: 430px)"),t=Object(pe.useMediaPredicate)("(max-width: 768px)"),a=Object(pe.useMediaPredicate)("(max-width: 1024px)");return o.a.createElement("div",null,o.a.createElement(he.a,null,o.a.createElement("title",null,"Right-Link"),o.a.createElement("style",null,"\n              .RLgradient {\n                ".concat(ke.imageLink?ke.imageLink:ke.color?ke.color:"","\n               }\n                .root {\n                    height: 100%;\n                    overflow-x: hidden;\n                }\n            "))),be.groupFont?o.a.createElement(ve.a,{fonts:[{font:be.groupFont,weights:[400]}]}):"",o.a.createElement(fe,{deviceSize:e?"xs":t?"md":a?"lg":"xl",socialLinks:xe,profileTitle:Ee,profileImage:"https://res.cloudinary.com/rightlink/image/upload/v1668188635/PerfectPlace/Planning_and_rentals_logo_j16yry.png",linkGroups:Ce,logo:"",background:ke,customFont:be.groupFont}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,a){}},[[231,1,2]]]);
//# sourceMappingURL=main.9faf1032.chunk.js.map