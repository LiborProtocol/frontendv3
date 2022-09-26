/* empty css              */import{m as w,_ as k,an as Q,r as o,f as x,W as Y,g as z,n as A,h as B,o as W,i as J,ao as U,ap as X,c as _,C as Z,j,ak as L,aq as P,d as ee,ar as re,H as ae,T as R,B as te}from"./index.616676ff.js";function y(){return y=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function M(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}function T(e){var a=e.loading,t=e.src,r=e.srcSet,n=e.onLoad,i=e.onError,l=e.crossOrigin,g=e.sizes,d=e.ignoreFallback,m=o.exports.useState("pending"),v=m[0],f=m[1];o.exports.useEffect(function(){f(t?"loading":"pending")},[t]);var s=o.exports.useRef(),h=o.exports.useCallback(function(){if(!!t){u();var c=new Image;c.src=t,l&&(c.crossOrigin=l),r&&(c.srcset=r),g&&(c.sizes=g),a&&(c.loading=a),c.onload=function(E){u(),f("loaded"),n==null||n(E)},c.onerror=function(E){u(),f("failed"),i==null||i(E)},s.current=c}},[t,l,r,g,n,i,a]),u=function(){s.current&&(s.current.onload=null,s.current.onerror=null,s.current=null)};return Y(function(){if(!d)return v==="loading"&&h(),function(){u()}},[v,h,d]),d?"loaded":v}var ne=["htmlWidth","htmlHeight","alt"],ie=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],$=o.exports.forwardRef(function(e,a){var t=e.htmlWidth,r=e.htmlHeight,n=e.alt,i=M(e,ne);return o.exports.createElement("img",y({width:t,height:r,ref:a,alt:n},i))}),H=w(function(e,a){var t=e.fallbackSrc,r=e.fallback,n=e.src,i=e.srcSet,l=e.align,g=e.fit,d=e.loading,m=e.ignoreFallback,v=e.crossOrigin,f=M(e,ie),s=d!=null||m||t===void 0&&r===void 0,h=T(y({},e,{ignoreFallback:s})),u=y({ref:a,objectFit:g,objectPosition:l},s?f:Q(f,["onError","onLoad"]));return h!=="loaded"?r||o.exports.createElement(x.img,y({as:$,className:"chakra-image__placeholder",src:t},u)):o.exports.createElement(x.img,y({as:$,src:n,srcSet:i,crossOrigin:v,loading:d,className:"chakra-image"},u))});k&&(H.displayName="Image");function O(e,a){if(e==null)return{};var t={},r=Object.keys(e),n,i;for(i=0;i<r.length;i++)n=r[i],!(a.indexOf(n)>=0)&&(t[n]=e[n]);return t}function b(){return b=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},b.apply(this,arguments)}var oe=["name","getInitials"],le=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],se=w(function(e,a){var t=z(),r=b({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},t.badge);return o.exports.createElement(x.div,b({ref:a},e,{className:A("chakra-avatar__badge",e.className),__css:r}))});k&&(se.displayName="AvatarBadge");function ce(e){var a=e.split(" "),t=a[0],r=a[1];return t&&r?""+t.charAt(0)+r.charAt(0):t.charAt(0)}var de=function(a){var t=a.name,r=a.getInitials,n=O(a,oe),i=z();return o.exports.createElement(x.div,b({role:"img","aria-label":t},n,{__css:i.label}),t?r==null?void 0:r(t):null)},D=function(a){return o.exports.createElement(x.svg,b({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},a),o.exports.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),o.exports.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},G={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},V=w(function(e,a){var t=B("Avatar",e),r=W(e),n=r.src,i=r.srcSet,l=r.name,g=r.showBorder,d=r.borderRadius,m=d===void 0?"full":d,v=r.onError,f=r.getInitials,s=f===void 0?ce:f,h=r.icon,u=h===void 0?o.exports.createElement(D,null):h,c=r.iconLabel,E=c===void 0?" avatar":c,F=r.loading,I=r.children,S=r.borderColor,N=r.ignoreFallback,p=O(r,le),C=b({borderRadius:m,borderWidth:g?"2px":void 0},G,t.container);return S&&(C.borderColor=S),o.exports.createElement(x.span,b({ref:a},p,{className:A("chakra-avatar",e.className),__css:C}),o.exports.createElement(J,{value:t},o.exports.createElement(q,{src:n,srcSet:i,loading:F,onError:v,getInitials:s,name:l,borderRadius:m,icon:u,iconLabel:E,ignoreFallback:N}),I))});k&&(V.displayName="Avatar");var q=function(a){var t=a.src,r=a.srcSet,n=a.onError,i=a.getInitials,l=a.name,g=a.borderRadius,d=a.loading,m=a.iconLabel,v=a.icon,f=v===void 0?o.exports.createElement(D,null):v,s=a.ignoreFallback,h=T({src:t,onError:n,ignoreFallback:s}),u=h==="loaded",c=!t||!u;return c?l?o.exports.createElement(de,{className:"chakra-avatar__initials",getInitials:i,name:l}):o.exports.cloneElement(f,{role:"img","aria-label":m}):o.exports.createElement(x.img,{src:t,srcSet:r,alt:l,className:"chakra-avatar__img",loading:d,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:g}})};k&&(q.displayName="AvatarImage");var ue=["children","borderColor","max","spacing","borderRadius"],fe=w(function(e,a){var t=B("Avatar",e),r=W(e),n=r.children,i=r.borderColor,l=r.max,g=r.spacing,d=g===void 0?"-0.75rem":g,m=r.borderRadius,v=m===void 0?"full":m,f=O(r,ue),s=U(n),h=l?s.slice(0,l):s,u=l!=null&&s.length-l,c=h.reverse(),E=c.map(function(S,N){var p,C=N===0,K={marginEnd:C?0:d,size:e.size,borderColor:(p=S.props.borderColor)!=null?p:i,showBorder:!0};return o.exports.cloneElement(S,X(K))}),F={display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"},I=b({borderRadius:v,marginStart:d},G,t.excessLabel);return o.exports.createElement(x.div,b({ref:a,role:"group",__css:F},f,{className:A("chakra-avatar__group",e.className)}),u>0&&o.exports.createElement(x.span,{className:"chakra-avatar__excess",__css:I},"+"+u),E)});k&&(fe.displayName="AvatarGroup");function ve(){return _(Z,{py:6,children:j(L,{maxW:"400px",w:"full",bg:P("#EEEEEE","gray.800"),boxShadow:"2xl",rounded:"md",overflow:"hidden",position:"relative",top:"10rem",children:[_(H,{h:"180px",w:"full",src:"https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",objectFit:"cover"}),_(ee,{justify:"center",mt:"-110px",children:_(V,{size:"3xl",src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",css:{border:"2px solid white"}})}),j(L,{p:8,children:[j(re,{spacing:2,align:"center",mb:5,children:[_(ae,{fontSize:"2xl",fontWeight:900,fontFamily:"Montserrat",children:"GD"}),_(R,{fontSize:"2xl",fontFamily:"Montserrat",children:"Founder"}),_(R,{fontSize:"xl",fontFamily:"Montserrat",children:" Previously in banking. Keen to build the dezentralized future."})]}),_(te,{w:"full",bg:P("#151f21","gray.900"),color:"#EEEEEE",rounded:"lg",fontFamily:"Montserrat",fontSize:"2xl",_hover:{transform:"translateY(-2px)",boxShadow:"lg"},children:"Follow"})]})]})})}export{ve as default};
