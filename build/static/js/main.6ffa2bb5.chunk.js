(this["webpackJsonpstylish-sunglass"]=this["webpackJsonpstylish-sunglass"]||[]).push([[0],{159:function(e,t,n){},160:function(e,t,n){},204:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(52),r=n.n(a),i=(n(159),n(24)),o=n(23),l=(n(160),n(9)),d=n(129),j={apiKey:"AIzaSyA_vpdMzqOfUpAm34nBSgMipahLhI2BTG8",authDomain:"stylish-sunglass.firebaseapp.com",projectId:"stylish-sunglass",storageBucket:"stylish-sunglass.appspot.com",messagingSenderId:"275676103277",appId:"1:275676103277:web:12dfccead9c6445bf33564"},u=function(){return Object(d.a)(j)},A=n(59);u();var b=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1],d=Object(c.useState)(!0),j=Object(l.a)(d,2),u=j[0],b=j[1],h=Object(c.useState)(!1),x=Object(l.a)(h,2),O=x[0],m=x[1],p=Object(A.b)();Object(c.useEffect)((function(){var e=Object(A.c)(p,(function(e){s(e||{}),b(!1)}));return function(){return e}}),[]),Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/users/".concat(n.email)).then((function(e){return e.json()})).then((function(e){m(e.admin)}))}),[n.email]);var f=function(e,t){var n={email:e,displayName:t};fetch("https://aqueous-ravine-85233.herokuapp.com/users",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then()};return{user:n,error:i,isLoading:u,admin:O,registerToWeb:function(e,t,n,c){b(!0),Object(A.a)(p,e,t).then((function(t){s({email:e,displayName:c}),Object(A.f)(p.currentUser,{displayName:c}).then((function(){})).catch((function(e){})),f(e,c),console.log(t),n.push("/"),o("")})).catch((function(e){var t=e.message;o(t)})).finally((function(){return b(!1)}))},loginToWeb:function(e,t,n,c){b(!0),Object(A.d)(p,e,t).then((function(e){var t,s=(null===n||void 0===n||null===(t=n.state)||void 0===t?void 0:t.from)||"/";c.push(s),o("")})).catch((function(e){var t=e.message;o(t)})).finally((function(){return b(!1)}))},logOut:function(){b(!0),Object(A.e)(p).then((function(e){})).catch((function(e){})).finally((function(){return b(!1)}))}}},h=n(0),x=Object(c.createContext)(),O=function(e){var t=e.children,n=b();return Object(h.jsx)(x.Provider,{value:n,children:t})},m=n(271),p=n(252),f=n(253),v=n(251),y=n(265),g=n(269),S=n(133),w=n.n(S),k=n(272),T=n(270),q=n(268),P=n(273),E=n(266),U=n(274),z=n(261),W=n(258),N=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!1),r=Object(l.a)(a,2),i=r[0],o=r[1];return Object(h.jsx)(P.a,{children:Object(h.jsxs)(E.a,{sx:{mt:8},container:!0,spacing:2,children:[Object(h.jsxs)(E.a,{item:!0,xs:12,md:6,children:[Object(h.jsx)("h1",{children:"Make Sure To Create An Admin"}),Object(h.jsx)("h3",{children:"An admin will see -Manage All Orders-, -Add A Product-, -Make Admin-, -Manage Products-. And an admin can change the name of these menu items."})]}),Object(h.jsx)(E.a,{item:!0,xs:12,md:6,children:Object(h.jsx)("form",{onSubmit:function(e){var t={email:n};fetch("https://aqueous-ravine-85233.herokuapp.com/users/admin",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount>0&&o(!0),console.log(e)})),e.preventDefault()},children:Object(h.jsxs)(U.a,{elevation:2,sx:{py:5,textAlign:"center"},children:[Object(h.jsx)("h3",{style:{textAlign:"center"},children:"Create An Admin"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Email",type:"email",onBlur:function(e){s(e.target.value)},size:"small"}),Object(h.jsx)(q.a,{color:"secondary",variant:"contained",sx:{width:"80%",mt:5},type:"submit",children:"Add Admin"}),i&&Object(h.jsx)(W.a,{severity:"success",children:"Make Admin Successfully!"})]})})})]})})},B=function(e){var t=e.order,n=e.manageOrders,c=e.setManageOrders,s=t.image,a=t.productName,r=t.phone,i=t.address,l=t.email,d=t._id,j=t.status,u=Object(o.g)();return Object(h.jsx)(E.a,{item:!0,xs:12,md:3,children:Object(h.jsxs)(U.a,{sx:{minHeight:"100%",m:1,p:1},elevation:3,children:[Object(h.jsx)(T.a,{sx:{textTransform:"uppercase",textAlign:"center",my:1},variant:"h5",color:"secondary",children:j}),Object(h.jsx)(q.a,{onClick:function(){return e=d,void(window.confirm("Are You Sure To Cencel This Order?")&&fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("Cenceled Order Successfully");var s=n.filter((function(t){return t._id!==e}));c(s)}})));var e},sx:{width:"100%"},color:"secondary",variant:"contained",children:"Cencel Order"}),Object(h.jsx)(q.a,{onClick:function(){fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(d),{method:"PUT"}).then((function(e){return e.json()})).then((function(e){e.modifiedCount>0&&(alert("Status Approved"),u.go(0))}))},sx:{width:"100%",mt:1},color:"secondary",variant:"contained",children:"Update Status"}),Object(h.jsx)("img",{style:{width:"100%"},src:s,alt:""}),Object(h.jsx)("h2",{children:a}),Object(h.jsxs)("h4",{children:["Order From: ",l]}),Object(h.jsxs)("p",{children:["Phone: ",r]}),Object(h.jsxs)("p",{children:["Address: ",i]})]})})},C=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/orders").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(T.a,{variant:"h2",sx:{my:8,textAlign:"center"},children:"Manage All Orders"}),Object(h.jsx)(E.a,{container:!0,spacing:2,children:n.map((function(e){return Object(h.jsx)(B,{order:e,manageOrders:n,setManageOrders:s},e._id)}))})]})},L=function(){return Object(c.useContext)(x)},D=function(e){var t=e.order,n=e.myOrders,c=e.setMyOrders,s=t.image,a=t.productName,r=t.phone,i=t.address,o=t.email,l=t._id,d=t.status;return Object(h.jsx)(E.a,{item:!0,xs:12,md:3,children:Object(h.jsxs)(U.a,{sx:{minHeight:"100%",m:1,p:1},elevation:3,children:[Object(h.jsx)(T.a,{sx:{textTransform:"uppercase",textAlign:"center",my:1},variant:"h5",color:"secondary",children:d}),Object(h.jsx)(q.a,{onClick:function(){return e=l,void(window.confirm("Are You Sure To Cencel This Order?")&&fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("Cenceled Order Successfully");var s=n.filter((function(t){return t._id!==e}));c(s)}})));var e},sx:{width:"100%"},color:"secondary",variant:"contained",children:"Cencel Order"}),Object(h.jsx)("img",{style:{width:"100%"},src:s,alt:""}),Object(h.jsx)("h2",{children:a}),Object(h.jsxs)("h4",{children:["Order From: ",o]}),Object(h.jsxs)("p",{children:["Phone: ",r]}),Object(h.jsxs)("p",{children:["Address: ",i]})]})})},J=function(){var e=L().user,t=Object(c.useState)([]),n=Object(l.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){var t="https://aqueous-ravine-85233.herokuapp.com/orders?email=".concat(e.email);fetch(t).then((function(e){return e.json()})).then((function(e){a(e),console.log(e)}))}),[e.email]),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(T.a,{variant:"h2",sx:{my:8,textAlign:"center"},children:"Your All Ordered Item"}),Object(h.jsx)(E.a,{container:!0,spacing:2,children:s.map((function(t){if(t.email===e.email)return Object(h.jsx)(D,{order:t,myOrders:s,setMyOrders:a},t._id)}))})]})},M=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h2",{children:"Payment system coming soon."})})},R=n(277),V=n(262),K=n(255),F=n(263),G=n(250),X=function(){var e=L().user,t=Object(c.useState)(""),n=Object(l.a)(t,2),s=n[0],a=n[1],r=Object(c.useState)(""),i=Object(l.a)(r,2),o=i[0],d=i[1];console.log(o);return Object(h.jsxs)(G.a,{sx:{minWidth:120,maxWidth:500,mx:"auto",mt:8},children:[Object(h.jsx)(T.a,{sx:{my:3,textAlign:"center"},variant:"h3",color:"secondary",children:"Select Your Rating"}),Object(h.jsxs)(R.a,{fullWidth:!0,children:[Object(h.jsx)(V.a,{id:"demo-simple-select-label",children:"Rating"}),Object(h.jsxs)(K.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:o,label:"Rating",onChange:function(e){d(e.target.value)},children:[Object(h.jsx)(F.a,{value:1,children:"One"}),Object(h.jsx)(F.a,{value:2,children:"Two"}),Object(h.jsx)(F.a,{value:3,children:"Three"}),Object(h.jsx)(F.a,{value:4,children:"Four"}),Object(h.jsx)(F.a,{value:5,children:"Five"})]}),Object(h.jsx)(q.a,{variant:"contained",color:"secondary",onClick:function(){var t={rating:o,userName:e.displayName};fetch("https://aqueous-ravine-85233.herokuapp.com/reviews",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&a(e)}))},children:"Submit"})]}),s&&Object(h.jsx)(W.a,{severity:"success",children:"Thanks For Given Rating!"})]})},Y=function(){var e=L(),t=e.user,n=e.logOut;return Object(h.jsx)(G.a,{sx:{flexGrow:1},children:Object(h.jsx)(m.a,{color:"secondary",position:"static",children:Object(h.jsxs)(k.a,{sx:{flexWrap:"wrap"},children:[Object(h.jsx)(T.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"StylishSunGlass"}),Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"white"},to:"/home",children:Object(h.jsx)(q.a,{color:"inherit",children:"Home"})}),Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"white"},to:"/sunglasses",children:Object(h.jsx)(q.a,{color:"inherit",children:"Sunglasses"})}),Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"white"},to:"/dashboard",children:Object(h.jsx)(q.a,{color:"inherit",children:"Dashboard"})}),(null===t||void 0===t?void 0:t.email)?Object(h.jsx)(q.a,{onClick:n,color:"inherit",children:"Sign Out"}):Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"white"},to:"/login",children:Object(h.jsx)(q.a,{color:"inherit",children:"Login"})})]})})})},Q=function(e){var t=e.product,n=e.allProducts,c=e.setAllProducts,s=t.name,a=t.desc,r=t.price,i=t.img,o=t._id;return Object(h.jsx)(E.a,{item:!0,xs:12,md:4,children:Object(h.jsxs)(U.a,{elevation:3,sx:{p:5,textAlign:"center"},children:[Object(h.jsx)("img",{style:{width:"100%"},src:i,alt:""}),Object(h.jsx)("h3",{children:s}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Price: ",r]})}),Object(h.jsx)("p",{children:a}),Object(h.jsx)(q.a,{onClick:function(){var e;e=o,window.confirm("Are You Sure To Delete This Product?")&&fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses/".concat(e),{method:"DELETE"}).then((function(e){return e.json()})).then((function(t){if(t.deletedCount>0){alert("Product Deleted Successfully");var s=n.filter((function(t){return t._id!==e}));c(s)}}))},sx:{width:"100%"},color:"secondary",variant:"contained",children:"Delete Product"})]})})},Z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(P.a,{children:[Object(h.jsx)(T.a,{sx:{my:5,textAlign:"center"},variant:"h2",children:"Manage All Products"}),Object(h.jsx)(E.a,{container:!0,spacing:2,children:n.map((function(e){return Object(h.jsx)(Q,{product:e,allProducts:n,setAllProducts:s},e._id)}))})]})})},I=n(28),H=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)({}),r=Object(l.a)(a,2),i=r[0],o=r[1],d=function(e){var t=e.target.name,n=e.target.value,c=Object(I.a)({},i);c[t]=n,o(c)};return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(P.a,{children:Object(h.jsxs)(G.a,{sx:{width:"75%",textAlign:"center",mx:"auto",mt:16},children:[Object(h.jsx)("form",{id:"addProduct",onSubmit:function(e){var t={name:i.name,desc:i.desc,details:i.details,price:"".concat(i.price," TK"),img:i.img,status:"pending"};i.img&&i.name&&i.desc&&fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&(s(!0),document.getElementById("addProduct").reset())})),e.preventDefault()},children:Object(h.jsxs)(U.a,{elevation:2,sx:{py:5},children:[Object(h.jsx)(T.a,{color:"secondary",sx:{mb:5},variant:"h5",children:"Add A Product"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Name",name:"name",onBlur:d,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Short Description",name:"desc",onBlur:d,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Full Description",name:"details",onBlur:d,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Price",name:"price",onBlur:d,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Image",name:"img",onBlur:d,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1,display:"none"},id:"outlined-size-small",label:"status",name:"status",onBlur:d,size:"small",defaultValue:"pending"}),Object(h.jsx)(q.a,{color:"secondary",variant:"contained",sx:{width:"80%",mt:5},type:"submit",children:"Add Product"})]})}),n&&Object(h.jsx)(W.a,{severity:"success",children:"Create Product Successfully!"})]})})})},_=n(84),$=n(278),ee=["children"],te=function(e){var t=e.children,n=Object(_.a)(e,ee),c=L(),s=c.user,a=c.admin;return c.isLoading?Object(h.jsx)($.a,{}):Object(h.jsx)(o.b,Object(I.a)(Object(I.a)({},n),{},{render:function(e){var n=e.location;return s.email&&a?t:Object(h.jsx)(o.a,{to:{pathname:"/",state:{from:n}}})}}))},ne=240;var ce=function(e){var t=L(),n=t.logOut,s=t.admin,a=Object(o.j)(),r=a.path,d=a.url,j=e.window,u=c.useState(!1),A=Object(l.a)(u,2),b=A[0],x=A[1],O=function(){x(!b)},S=Object(h.jsxs)("div",{children:[Object(h.jsx)(k.a,{}),Object(h.jsx)(v.a,{}),!s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/my-orders"),children:Object(h.jsx)(q.a,{sx:{width:"100%",mt:5,mb:1},color:"secondary",variant:"outlined",children:"My Orders"})}),!s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/payment"),children:Object(h.jsx)(q.a,{sx:{width:"100%",my:1},color:"secondary",variant:"outlined",children:"Payment"})}),!s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/review"),children:Object(h.jsx)(q.a,{sx:{width:"100%",mb:5,mt:1},color:"secondary",variant:"outlined",children:"Review"})}),s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/manage-orders"),children:Object(h.jsx)(q.a,{sx:{width:"100%",mt:5,mb:1},color:"secondary",variant:"outlined",children:"Manage All Orders"})}),s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/manage-products"),children:Object(h.jsx)(q.a,{sx:{width:"100%",my:1},color:"secondary",variant:"outlined",children:"Manage All Pruducts"})}),s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/add-product"),children:Object(h.jsx)(q.a,{sx:{width:"100%",my:1},color:"secondary",variant:"outlined",children:"Add A Product"})}),s&&Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"".concat(d,"/make-admin"),children:Object(h.jsx)(q.a,{sx:{width:"100%",mb:5,mt:1},color:"secondary",variant:"outlined",children:"Make Admin"})}),Object(h.jsx)(v.a,{}),Object(h.jsx)(i.b,{style:{textDecoration:"none",color:"#1976D2"},to:"/",children:Object(h.jsx)(q.a,{sx:{width:"100%",mt:5,mb:1},color:"secondary",variant:"outlined",children:"Back To Home"})}),Object(h.jsx)(q.a,{onClick:n,sx:{width:"100%",my:1},color:"secondary",variant:"outlined",children:"LogOut"})]}),P=void 0!==j?function(){return j().document.body}:void 0;return Object(h.jsxs)(p.a,{sx:{display:"flex"},children:[Object(h.jsx)(f.a,{}),Object(h.jsx)(m.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(ne,"px)")},ml:{sm:"".concat(ne,"px")}},children:Object(h.jsxs)(k.a,{style:{backgroundColor:"#9C27B0"},children:[Object(h.jsx)(g.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:O,sx:{mr:2,display:{sm:"none"}},children:Object(h.jsx)(w.a,{})}),Object(h.jsx)(T.a,{variant:"h6",noWrap:!0,component:"div",children:"Responsive drawer"})]})}),Object(h.jsxs)(p.a,{component:"nav",sx:{width:{sm:ne},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(h.jsx)(y.a,{container:P,variant:"temporary",open:b,onClose:O,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ne}},children:S}),Object(h.jsx)(y.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:ne}},open:!0,children:S})]}),Object(h.jsxs)(p.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(ne,"px)")}},children:[Object(h.jsx)(k.a,{}),Object(h.jsxs)(o.d,{children:[!s&&Object(h.jsx)(o.b,{exact:!0,path:r,children:Object(h.jsx)(J,{})}),!s&&Object(h.jsx)(o.b,{path:"".concat(r,"/my-orders"),children:Object(h.jsx)(J,{})}),!s&&Object(h.jsx)(o.b,{path:"".concat(r,"/payment"),children:Object(h.jsx)(M,{})}),!s&&Object(h.jsx)(o.b,{path:"".concat(r,"/review"),children:Object(h.jsx)(X,{})}),s&&Object(h.jsx)(te,{exact:!0,path:r,children:Object(h.jsx)(C,{})}),s&&Object(h.jsx)(te,{path:"".concat(r,"/manage-orders"),children:Object(h.jsx)(C,{})}),s&&Object(h.jsx)(te,{path:"".concat(r,"/add-product"),children:Object(h.jsx)(H,{})}),s&&Object(h.jsx)(te,{path:"".concat(r,"/make-admin"),children:Object(h.jsx)(N,{})}),s&&Object(h.jsx)(te,{path:"".concat(r,"/manage-products"),children:Object(h.jsx)(Z,{})})]})]})]})},se=n.p+"static/media/banner.3f0446e5.png",ae=function(){return Object(h.jsx)(G.a,{children:Object(h.jsxs)(E.a,{container:!0,spacing:2,children:[Object(h.jsx)(E.a,{item:!0,xs:12,md:6,children:Object(h.jsxs)(U.a,{elevation:0,sx:{p:8},children:[Object(h.jsx)(T.a,{variant:"h2",color:"secondary",sx:{textTransform:"uppercase",mx:"auto",width:"70%",mt:8},children:"Make Your Own Style With Our Glass"}),Object(h.jsx)(T.a,{variant:"body1",sx:{letterSpacing:"1px",mx:"auto",width:"70%",mt:8},children:"Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs."})]})}),Object(h.jsx)(E.a,{item:!0,xs:12,md:6,children:Object(h.jsx)("img",{style:{width:"100%"},src:se,alt:""})})]})})},re=n(254),ie=n(279),oe=n(7),le=n.p+"static/media/brand1.684959da.jpg",de=n.p+"static/media/brand2.26695255.jpg",je=n.p+"static/media/brand4.953460a4.jpg",ue=n.p+"static/media/brand5.c7f09720.jpg",Ae=n.p+"static/media/brand6.710e4515.jpg",be=(Object(oe.a)(U.a)((function(e){var t=e.theme;return Object(I.a)(Object(I.a)({},t.typography.body2),{},{color:t.palette.text.secondary,border:"1px solid black",borderBottomLeftRadius:0,borderBottomRightRadius:0,display:"flex",alignItems:"center",justifyContent:"center"})})),[{img:le,title:"Camping Car"},{img:de,title:"Hats"},{img:"data:image/jpeg;base64,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",title:"Tomato basil"},{img:je,title:"Mountain"},{img:ue,title:"Bike"},{img:Ae,title:"Bike"}]);var he=function(){return Object(h.jsx)(P.a,{children:Object(h.jsxs)(p.a,{sx:{width:"100%",minHeight:829},children:[Object(h.jsx)(T.a,{variant:"h3",sx:{my:8,textAlign:"center"},children:"Some Sunglass Brands"}),Object(h.jsx)(ie.a,{columns:3,spacing:1,children:be.map((function(e,t){return Object(h.jsx)(re.a,{children:Object(h.jsx)("img",{src:"".concat(e.img,"?w=162&auto=format"),srcSet:"".concat(e.img),alt:"",loading:"lazy",style:{borderBottomLeftRadius:4,borderBottomRightRadius:4}})},t)}))})]})})},xe=function(e){var t=e.product,n=t.name,c=t.desc,s=t.price,a=t.img,r=t._id;return Object(h.jsx)(E.a,{sx:{},item:!0,xs:12,md:4,children:Object(h.jsxs)(U.a,{elevation:3,sx:{p:5,textAlign:"center"},children:[Object(h.jsx)("img",{style:{width:"100%"},src:a,alt:""}),Object(h.jsx)("h3",{children:n}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Price: ",s]})}),Object(h.jsx)("p",{children:c}),Object(h.jsx)(i.b,{to:"/sunglasses/".concat(r),style:{textDecoration:"none"},children:Object(h.jsx)(q.a,{sx:{width:"100%"},color:"secondary",variant:"contained",children:"Buy Now"})})]})})},Oe=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function(e){return e.json()})).then((function(e){s(e.slice(0,6)),console.log(e)}))}),[]),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(T.a,{sx:{my:5,textAlign:"center"},variant:"h2",children:"Featured Sunglasses"}),Object(h.jsx)(E.a,{container:!0,spacing:2,children:n.map((function(e){return Object(h.jsx)(xe,{product:e},e._id)}))})]})},me=n(36),pe=n(264),fe=n(113),ve=n.n(fe),ye=n(114),ge=n.n(ye),Se=n(259),we=n(134),ke=n(135),Te=n.n(ke),qe=Object(we.autoPlay)(Te.a);var Pe=function(){var e=c.useState([]),t=Object(l.a)(e,2),n=t[0],s=t[1];c.useEffect((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/reviews").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]);var a=Object(me.a)(),r=c.useState(0),i=Object(l.a)(r,2),o=i[0],d=i[1],j=n.length;return Object(h.jsx)(P.a,{sx:{my:16},children:Object(h.jsx)(U.a,{elevation:3,sx:{my:4,p:5,textAlign:"center"},children:Object(h.jsxs)(p.a,{sx:{mx:"auto",maxWidth:400,flexGrow:1},children:[Object(h.jsx)(T.a,{sx:{textAlign:"center"},variant:"h3",children:" User Reviews"}),Object(h.jsx)(U.a,{square:!0,elevation:0,sx:{display:"flex",alignItems:"center",height:50,pl:2,bgcolor:"background.default"}}),Object(h.jsx)(qe,{axis:"rtl"===a.direction?"x-reverse":"x",index:o,onChangeIndex:function(e){d(e)},enableMouseEvents:!0,children:n.map((function(e,t){return Object(h.jsx)("div",{children:Math.abs(o-t)<=2?Object(h.jsxs)(p.a,{sx:{textAlign:"center"},children:[Object(h.jsx)(T.a,{component:"legend",children:e.userName}),Object(h.jsx)(Se.a,{name:"read-only",value:e.rating,readOnly:!0})]}):null})}))}),Object(h.jsx)(pe.a,{steps:j,position:"static",activeStep:o,nextButton:Object(h.jsxs)(q.a,{size:"small",onClick:function(){d((function(e){return e+1}))},disabled:o===j-1,children:["Next","rtl"===a.direction?Object(h.jsx)(ve.a,{}):Object(h.jsx)(ge.a,{})]}),backButton:Object(h.jsxs)(q.a,{size:"small",onClick:function(){d((function(e){return e-1}))},disabled:0===o,children:["rtl"===a.direction?Object(h.jsx)(ge.a,{}):Object(h.jsx)(ve.a,{}),"Back"]})})]})})})},Ee=(n(204),function(){return Object(h.jsxs)("div",{className:"footer",children:[Object(h.jsx)("div",{className:"footer-content container",children:Object(h.jsxs)("div",{className:"aboutus",children:[Object(h.jsx)("div",{className:"footer-logo",children:Object(h.jsx)("img",{src:"",alt:""})}),Object(h.jsx)("div",{className:"about-content",children:Object(h.jsx)("p",{children:"Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs. Prescription Sunglasses tailored to your needs. Explore our online selection of prescription sunglasses and find your perfect match with the new Sunglass Hut service, online only. Prescription Sunglasses tailored to your needs."})}),Object(h.jsxs)("div",{className:"icons",children:[Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-facebook-f"})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-youtube"})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-twitter"})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-instagram"})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("i",{className:"fab fa-dribbble"})})]})]})}),Object(h.jsx)("div",{className:"copyright-text",children:Object(h.jsx)("p",{children:"Copyright \xa9 2021 BD TOUR Rights Reserved."})})]})}),Ue=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{}),Object(h.jsx)(ae,{}),Object(h.jsx)(Oe,{}),Object(h.jsx)(Pe,{}),Object(h.jsx)(he,{}),Object(h.jsx)(Ee,{})]})},ze=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],s=t[1],a=L(),r=a.loginToWeb,d=a.isLoading,j=a.user,u=a.error,A=Object(o.h)(),b=Object(o.g)(),x=function(e){var t=e.target.name,c=e.target.value,a=Object(I.a)({},n);a[t]=c,s(a)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{}),Object(h.jsx)(P.a,{children:Object(h.jsxs)(G.a,{sx:{width:"75%",textAlign:"center",mx:"auto",mt:16},children:[!d&&Object(h.jsx)("form",{onSubmit:function(e){r(n.email,n.password,A,b),e.preventDefault()},children:Object(h.jsxs)(U.a,{elevation:2,sx:{py:5},children:[Object(h.jsx)(T.a,{color:"secondary",sx:{mb:5},variant:"h5",children:"Login"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Email",type:"email",name:"email",onBlur:x,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Password",name:"password",onBlur:x,type:"password",size:"small"}),Object(h.jsx)(q.a,{color:"secondary",variant:"contained",sx:{width:"80%",mt:5},type:"submit",children:"Sign In"}),Object(h.jsx)(i.b,{to:"/register",children:Object(h.jsx)(q.a,{color:"secondary",variant:"text",sx:{mt:5},type:"submit",children:"New User? Please Register First"})})]})}),d&&Object(h.jsx)(G.a,{sx:{display:"flex"},children:Object(h.jsx)($.a,{})}),(null===j||void 0===j?void 0:j.email)&&Object(h.jsx)(W.a,{severity:"success",children:"Login User Successfully!"}),u&&Object(h.jsx)(W.a,{severity:"error",children:u})]})})]})},We=["children"],Ne=function(e){var t=e.children,n=Object(_.a)(e,We),c=L(),s=c.user;return c.isLoading?Object(h.jsx)($.a,{}):Object(h.jsx)(o.b,Object(I.a)(Object(I.a)({},n),{},{render:function(e){var n=e.location;return s.email?t:Object(h.jsx)(o.a,{to:{pathname:"/login",state:{from:n}}})}}))},Be=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],s=t[1],a=L(),r=a.registerToWeb,d=a.isLoading,j=a.user,u=a.error,A=function(e){var t=e.target.name,c=e.target.value,a=Object(I.a)({},n);a[t]=c,s(a)},b=Object(o.g)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{}),Object(h.jsx)(P.a,{children:Object(h.jsxs)(G.a,{sx:{width:"75%",textAlign:"center",mx:"auto",mt:16},children:[!d&&Object(h.jsx)("form",{onSubmit:function(e){n.password===n.password2?(r(n.email,n.password,b,n.name),e.preventDefault()):alert("your password did not matched")},children:Object(h.jsxs)(U.a,{elevation:2,sx:{py:5},children:[Object(h.jsx)(T.a,{color:"secondary",sx:{mb:5},variant:"h5",children:"Register"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Name",name:"name",onBlur:A,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Email",type:"email",name:"email",onBlur:A,size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Password",name:"password",onBlur:A,type:"password",size:"small"}),Object(h.jsx)(z.a,{sx:{width:"80%",m:1},id:"outlined-size-small",label:"Re-Enter Password",name:"password2",onBlur:A,type:"password",size:"small"}),Object(h.jsx)(q.a,{color:"secondary",variant:"contained",sx:{width:"80%",mt:5},type:"submit",children:"Register"}),Object(h.jsx)(i.b,{to:"/login",children:Object(h.jsx)(q.a,{color:"secondary",variant:"text",sx:{mt:5},type:"submit",children:"Already Registered? Please Login"})})]})}),d&&Object(h.jsx)(G.a,{sx:{display:"flex"},children:Object(h.jsx)($.a,{})}),(null===j||void 0===j?void 0:j.email)&&Object(h.jsx)(W.a,{severity:"success",children:"Create User Successfully!"}),u&&Object(h.jsx)(W.a,{severity:"error",children:u})]})})]})},Ce=function(){var e=L().user,t=Object(c.useState)({}),n=Object(l.a)(t,2),s=n[0],a=n[1],r={userName:e.displayName,email:e.email},i=Object(c.useState)(r),d=Object(l.a)(i,2),j=d[0],u=d[1],A=Object(c.useState)(!1),b=Object(l.a)(A,2),x=b[0],O=b[1],m=Object(o.i)().sunglassId;Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses/".concat(m)).then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var p=Object(o.g)(),f=function(e){var t=e.target.name,n=e.target.value,c=Object(I.a)({},j);c[t]=n,u(c)};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{}),Object(h.jsx)(P.a,{children:Object(h.jsxs)(E.a,{container:!0,spacing:2,children:[Object(h.jsx)(E.a,{item:!0,xs:12,md:6,children:Object(h.jsxs)(U.a,{elevation:0,sx:{p:5},children:[Object(h.jsx)("img",{style:{width:"100%"},src:null===s||void 0===s?void 0:s.img,alt:""}),Object(h.jsx)("h2",{children:null===s||void 0===s?void 0:s.name}),Object(h.jsx)("p",{children:Object(h.jsx)("small",{children:null===s||void 0===s?void 0:s.price})}),Object(h.jsx)("p",{children:null===s||void 0===s?void 0:s.details})]})}),Object(h.jsx)(E.a,{item:!0,xs:12,md:6,sx:{mt:16},children:Object(h.jsxs)(U.a,{elevation:3,sx:{p:5},children:[Object(h.jsxs)("form",{onSubmit:function(e){var t=Object(I.a)(Object(I.a)({},r),{},{image:null===s||void 0===s?void 0:s.img,productName:null===s||void 0===s?void 0:s.name,phone:j.phone,address:j.address,status:null===s||void 0===s?void 0:s.status});fetch("https://aqueous-ravine-85233.herokuapp.com/orders",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.insertedId&&(O(!0),p.push("/"))})),e.preventDefault()},children:[Object(h.jsx)(T.a,{color:"secondary",sx:{my:3,textAlign:"center"},variant:"h3",children:"BUY NOW"}),Object(h.jsx)(z.a,{label:"Your Name",sx:{width:"100%",my:2},id:"outlined-size-normal",size:"normal",defaultValue:e.displayName,name:"name",onBlur:f}),Object(h.jsx)(z.a,{label:"Your Email",sx:{width:"100%",my:2},id:"outlined-size-normal",size:"normal",defaultValue:e.email,name:"email",onBlur:f}),Object(h.jsx)(z.a,{label:"Your Phone",sx:{width:"100%",my:2},id:"outlined-size-normal",size:"normal",name:"phone",onBlur:f}),Object(h.jsx)(z.a,{label:"Your Address",sx:{width:"100%",my:2},id:"outlined-size-normal",size:"normal",name:"address",onBlur:f}),Object(h.jsx)(q.a,{type:"submit",sx:{mt:3,width:"100%"},size:"large",color:"secondary",variant:"contained",children:"Confirm Purchase"})]}),x&&Object(h.jsx)(W.a,{severity:"success",children:"Login User Successfully!"})]})})]})})]})},Le=function(e){var t=e.product,n=t.name,c=t.desc,s=t.price,a=t.img,r=t._id;return Object(h.jsx)(E.a,{item:!0,xs:12,md:4,children:Object(h.jsxs)(U.a,{elevation:3,sx:{p:5,textAlign:"center"},children:[Object(h.jsx)("img",{style:{width:"100%"},src:a,alt:""}),Object(h.jsx)("h3",{children:n}),Object(h.jsx)("p",{children:Object(h.jsxs)("strong",{children:["Price: ",s]})}),Object(h.jsx)("p",{children:c}),Object(h.jsx)(i.b,{to:"/sunglasses/".concat(r),style:{textDecoration:"none"},children:Object(h.jsx)(q.a,{sx:{width:"100%"},color:"secondary",variant:"contained",children:"Buy Now"})})]})})},De=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1];return Object(c.useEffect)((function(){fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Y,{}),Object(h.jsxs)(P.a,{children:[Object(h.jsx)(T.a,{sx:{my:5,textAlign:"center"},variant:"h2",children:"Our All Sunglasses"}),Object(h.jsx)(E.a,{container:!0,spacing:2,children:n.map((function(e){return Object(h.jsx)(Le,{product:e},e._id)}))})]})]})};var Je=function(){return Object(h.jsx)(O,{children:Object(h.jsx)(i.a,{children:Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{exact:!0,path:"/",children:Object(h.jsx)(Ue,{})}),Object(h.jsx)(o.b,{path:"/home",children:Object(h.jsx)(Ue,{})}),Object(h.jsx)(o.b,{path:"/login",children:Object(h.jsx)(ze,{})}),Object(h.jsx)(o.b,{path:"/register",children:Object(h.jsx)(Be,{})}),Object(h.jsx)(Ne,{path:"/sunglasses/:sunglassId",children:Object(h.jsx)(Ce,{})}),Object(h.jsx)(Ne,{path:"/dashboard",children:Object(h.jsx)(ce,{})}),Object(h.jsx)(o.b,{path:"/sunglasses",children:Object(h.jsx)(De,{})})]})})})},Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,281)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(Je,{})}),document.getElementById("root")),Me()}},[[205,1,2]]]);
//# sourceMappingURL=main.6ffa2bb5.chunk.js.map