(this["webpackJsonpstylish-sunglass"] = this["webpackJsonpstylish-sunglass"] || []).push([[0], { 158: function (e, t, n) { }, 159: function (e, t, n) { }, 203: function (e, t, n) { "use strict"; n.r(t); var c = n(1), s = n.n(c), a = n(52), r = n.n(a), i = (n(158), n(24)), o = n(23), l = (n(159), n(9)), d = n(127), j = { apiKey: "AIzaSyA_vpdMzqOfUpAm34nBSgMipahLhI2BTG8", authDomain: "stylish-sunglass.firebaseapp.com", projectId: "stylish-sunglass", storageBucket: "stylish-sunglass.appspot.com", messagingSenderId: "275676103277", appId: "1:275676103277:web:12dfccead9c6445bf33564" }, u = function () { return Object(d.a)(j) }, h = n(58); u(); var b = function () { var e = Object(c.useState)({}), t = Object(l.a)(e, 2), n = t[0], s = t[1], a = Object(c.useState)(""), r = Object(l.a)(a, 2), i = r[0], o = r[1], d = Object(c.useState)(!0), j = Object(l.a)(d, 2), u = j[0], b = j[1], x = Object(c.useState)(!1), O = Object(l.a)(x, 2), m = O[0], f = O[1], p = Object(h.b)(); Object(c.useEffect)((function () { var e = Object(h.c)(p, (function (e) { s(e || {}), b(!1) })); return function () { return e } }), []), Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/users/".concat(n.email)).then((function (e) { return e.json() })).then((function (e) { f(e.admin) })) }), [n.email]); var g = function (e, t) { var n = { email: e, displayName: t }; fetch("https://aqueous-ravine-85233.herokuapp.com/users", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(n) }).then() }; return { user: n, error: i, isLoading: u, admin: m, registerToWeb: function (e, t, n, c) { b(!0), Object(h.a)(p, e, t).then((function (t) { s({ email: e, displayName: c }), Object(h.f)(p.currentUser, { displayName: c }).then((function () { })).catch((function (e) { })), g(e, c), console.log(t), n.push("/"), o("") })).catch((function (e) { var t = e.message; o(t) })).finally((function () { return b(!1) })) }, loginToWeb: function (e, t, n, c) { b(!0), Object(h.d)(p, e, t).then((function (e) { var t, s = (null === n || void 0 === n || null === (t = n.state) || void 0 === t ? void 0 : t.from) || "/"; c.push(s), o("") })).catch((function (e) { var t = e.message; o(t) })).finally((function () { return b(!1) })) }, logOut: function () { b(!0), Object(h.e)(p).then((function (e) { })).catch((function (e) { })).finally((function () { return b(!1) })) } } }, x = n(0), O = Object(c.createContext)(), m = function (e) { var t = e.children, n = b(); return Object(x.jsx)(O.Provider, { value: n, children: t }) }, f = n(267), p = n(249), g = n(250), v = n(248), y = n(261), w = n(265), S = n(131), A = n.n(S), P = n(268), z = n(266), D = n(264), C = n(269), B = n(262), k = n(270), T = n(257), E = n(254), N = function () { var e = Object(c.useState)(""), t = Object(l.a)(e, 2), n = t[0], s = t[1], a = Object(c.useState)(!1), r = Object(l.a)(a, 2), i = r[0], o = r[1]; return Object(x.jsx)(C.a, { children: Object(x.jsxs)(B.a, { sx: { mt: 8 }, container: !0, spacing: 2, children: [Object(x.jsxs)(B.a, { item: !0, xs: 12, md: 6, children: [Object(x.jsx)("h1", { children: "Make Sure To Create An Admin" }), Object(x.jsx)("h3", { children: "An admin will see -Manage All Orders-, -Add A Product-, -Make Admin-, -Manage Products-. And an admin can change the name of these menu items." })] }), Object(x.jsx)(B.a, { item: !0, xs: 12, md: 6, children: Object(x.jsx)("form", { onSubmit: function (e) { var t = { email: n }; fetch("https://aqueous-ravine-85233.herokuapp.com/users/admin", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(t) }).then((function (e) { return e.json() })).then((function (e) { e.modifiedCount > 0 && o(!0), console.log(e) })), e.preventDefault() }, children: Object(x.jsxs)(k.a, { elevation: 2, sx: { py: 5, textAlign: "center" }, children: [Object(x.jsx)("h3", { style: { textAlign: "center" }, children: "Create An Admin" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Email", type: "email", onBlur: function (e) { s(e.target.value) }, size: "small" }), Object(x.jsx)(D.a, { color: "secondary", variant: "contained", sx: { width: "80%", mt: 5 }, type: "submit", children: "Add Admin" }), i && Object(x.jsx)(E.a, { severity: "success", children: "Make Admin Successfully!" })] }) }) })] }) }) }, M = function (e) { var t = e.order, n = e.manageOrders, c = e.setManageOrders, s = t.image, a = t.productName, r = t.phone, i = t.address, l = t.email, d = t._id, j = t.status, u = Object(o.g)(); return Object(x.jsx)(B.a, { item: !0, xs: 12, md: 3, children: Object(x.jsxs)(k.a, { sx: { minHeight: "100%", m: 1, p: 1 }, elevation: 3, children: [Object(x.jsx)(z.a, { sx: { textTransform: "uppercase", textAlign: "center", my: 1 }, variant: "h5", color: "secondary", children: j }), Object(x.jsx)(D.a, { onClick: function () { return e = d, void (window.confirm("Are You Sure To Cencel This Order?") && fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(e), { method: "DELETE" }).then((function (e) { return e.json() })).then((function (t) { if (t.deletedCount > 0) { alert("Cenceled Order Successfully"); var s = n.filter((function (t) { return t._id !== e })); c(s) } }))); var e }, sx: { width: "100%" }, color: "secondary", variant: "contained", children: "Cencel Order" }), Object(x.jsx)(D.a, { onClick: function () { fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(d), { method: "PUT" }).then((function (e) { return e.json() })).then((function (e) { e.modifiedCount > 0 && (alert("Status Approved"), u.go(0)) })) }, sx: { width: "100%", mt: 1 }, color: "secondary", variant: "contained", children: "Update Status" }), Object(x.jsx)("img", { style: { width: "100%" }, src: s, alt: "" }), Object(x.jsx)("h2", { children: a }), Object(x.jsxs)("h4", { children: ["Order From: ", l] }), Object(x.jsxs)("p", { children: ["Phone: ", r] }), Object(x.jsxs)("p", { children: ["Address: ", i] })] }) }) }, F = function () { var e = Object(c.useState)([]), t = Object(l.a)(e, 2), n = t[0], s = t[1]; return Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/orders").then((function (e) { return e.json() })).then((function (e) { s(e), console.log(e) })) }), []), Object(x.jsxs)(C.a, { children: [Object(x.jsx)(z.a, { variant: "h2", sx: { my: 8, textAlign: "center" }, children: "Manage All Orders" }), Object(x.jsx)(B.a, { container: !0, spacing: 2, children: n.map((function (e) { return Object(x.jsx)(M, { order: e, manageOrders: n, setManageOrders: s }, e._id) })) })] }) }, I = function () { return Object(c.useContext)(O) }, L = function (e) { var t = e.order, n = e.myOrders, c = e.setMyOrders, s = t.image, a = t.productName, r = t.phone, i = t.address, o = t.email, l = t._id, d = t.status; return Object(x.jsx)(B.a, { item: !0, xs: 12, md: 3, children: Object(x.jsxs)(k.a, { sx: { minHeight: "100%", m: 1, p: 1 }, elevation: 3, children: [Object(x.jsx)(z.a, { sx: { textTransform: "uppercase", textAlign: "center", my: 1 }, variant: "h5", color: "secondary", children: d }), Object(x.jsx)(D.a, { onClick: function () { return e = l, void (window.confirm("Are You Sure To Cencel This Order?") && fetch("https://aqueous-ravine-85233.herokuapp.com/orders/".concat(e), { method: "DELETE" }).then((function (e) { return e.json() })).then((function (t) { if (t.deletedCount > 0) { alert("Cenceled Order Successfully"); var s = n.filter((function (t) { return t._id !== e })); c(s) } }))); var e }, sx: { width: "100%" }, color: "secondary", variant: "contained", children: "Cencel Order" }), Object(x.jsx)("img", { style: { width: "100%" }, src: s, alt: "" }), Object(x.jsx)("h2", { children: a }), Object(x.jsxs)("h4", { children: ["Order From: ", o] }), Object(x.jsxs)("p", { children: ["Phone: ", r] }), Object(x.jsxs)("p", { children: ["Address: ", i] })] }) }) }, _ = function () { var e = I().user, t = Object(c.useState)([]), n = Object(l.a)(t, 2), s = n[0], a = n[1]; return Object(c.useEffect)((function () { var t = "https://aqueous-ravine-85233.herokuapp.com/orders?email=".concat(e.email); fetch(t).then((function (e) { return e.json() })).then((function (e) { a(e), console.log(e) })) }), [e.email]), Object(x.jsxs)(C.a, { children: [Object(x.jsx)(z.a, { variant: "h2", sx: { my: 8, textAlign: "center" }, children: "Your All Ordered Item" }), Object(x.jsx)(B.a, { container: !0, spacing: 2, children: s.map((function (t) { if (t.email === e.email) return Object(x.jsx)(L, { order: t, myOrders: s, setMyOrders: a }, t._id) })) })] }) }, R = function () { return Object(x.jsx)("div", { children: Object(x.jsx)("h2", { children: "Payment system coming soon." }) }) }, U = n(273), W = n(258), Y = n(251), G = n(259), J = n(247), H = function () { var e = I().user, t = Object(c.useState)(""), n = Object(l.a)(t, 2), s = n[0], a = n[1], r = Object(c.useState)(""), i = Object(l.a)(r, 2), o = i[0], d = i[1]; console.log(o); return Object(x.jsxs)(J.a, { sx: { minWidth: 120, maxWidth: 500, mx: "auto", mt: 8 }, children: [Object(x.jsx)(z.a, { sx: { my: 3, textAlign: "center" }, variant: "h3", color: "secondary", children: "Select Your Rating" }), Object(x.jsxs)(U.a, { fullWidth: !0, children: [Object(x.jsx)(W.a, { id: "demo-simple-select-label", children: "Rating" }), Object(x.jsxs)(Y.a, { labelId: "demo-simple-select-label", id: "demo-simple-select", value: o, label: "Rating", onChange: function (e) { d(e.target.value) }, children: [Object(x.jsx)(G.a, { value: 1, children: "One" }), Object(x.jsx)(G.a, { value: 2, children: "Two" }), Object(x.jsx)(G.a, { value: 3, children: "Three" }), Object(x.jsx)(G.a, { value: 4, children: "Four" }), Object(x.jsx)(G.a, { value: 5, children: "Five" })] }), Object(x.jsx)(D.a, { variant: "contained", color: "secondary", onClick: function () { var t = { rating: o, userName: e.displayName }; fetch("https://aqueous-ravine-85233.herokuapp.com/reviews", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(t) }).then((function (e) { return e.json() })).then((function (e) { e.insertedId && a(e) })) }, children: "Submit" })] }), s && Object(x.jsx)(E.a, { severity: "success", children: "Thanks For Given Rating!" })] }) }, V = function () { var e = I(), t = e.user, n = e.logOut; return Object(x.jsx)(J.a, { sx: { flexGrow: 1 }, children: Object(x.jsx)(f.a, { color: "secondary", position: "static", children: Object(x.jsxs)(P.a, { children: [Object(x.jsx)(z.a, { variant: "h6", component: "div", sx: { flexGrow: 1 }, children: "StylishSunGlass" }), Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "white" }, to: "/sunglasses", children: Object(x.jsx)(D.a, { color: "inherit", children: "Sunglasses" }) }), Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "white" }, to: "/dashboard", children: Object(x.jsx)(D.a, { color: "inherit", children: "Dashboard" }) }), (null === t || void 0 === t ? void 0 : t.email) ? Object(x.jsx)(D.a, { onClick: n, color: "inherit", children: "Sign Out" }) : Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "white" }, to: "/login", children: Object(x.jsx)(D.a, { color: "inherit", children: "Login" }) })] }) }) }) }, q = function (e) { var t = e.product, n = e.allProducts, c = e.setAllProducts, s = t.name, a = t.desc, r = t.price, i = t.img, o = t._id; return Object(x.jsx)(B.a, { item: !0, xs: 12, md: 4, children: Object(x.jsxs)(k.a, { elevation: 3, sx: { p: 5, textAlign: "center" }, children: [Object(x.jsx)("img", { style: { width: "100%" }, src: i, alt: "" }), Object(x.jsx)("h3", { children: s }), Object(x.jsx)("p", { children: Object(x.jsxs)("strong", { children: ["Price: ", r] }) }), Object(x.jsx)("p", { children: a }), Object(x.jsx)(D.a, { onClick: function () { var e; e = o, window.confirm("Are You Sure To Delete This Product?") && fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses/".concat(e), { method: "DELETE" }).then((function (e) { return e.json() })).then((function (t) { if (t.deletedCount > 0) { alert("Product Deleted Successfully"); var s = n.filter((function (t) { return t._id !== e })); c(s) } })) }, sx: { width: "100%" }, color: "secondary", variant: "contained", children: "Delete Product" })] }) }) }, K = function () { var e = Object(c.useState)([]), t = Object(l.a)(e, 2), n = t[0], s = t[1]; return Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function (e) { return e.json() })).then((function (e) { s(e) })) }), []), Object(x.jsx)(x.Fragment, { children: Object(x.jsxs)(C.a, { children: [Object(x.jsx)(z.a, { sx: { my: 5, textAlign: "center" }, variant: "h2", children: "Manage All Products" }), Object(x.jsx)(B.a, { container: !0, spacing: 2, children: n.map((function (e) { return Object(x.jsx)(q, { product: e, allProducts: n, setAllProducts: s }, e._id) })) })] }) }) }, Q = n(33), X = function () { var e = Object(c.useState)(!1), t = Object(l.a)(e, 2), n = t[0], s = t[1], a = Object(c.useState)({}), r = Object(l.a)(a, 2), i = r[0], o = r[1], d = function (e) { var t = e.target.name, n = e.target.value, c = Object(Q.a)({}, i); c[t] = n, o(c) }; return Object(x.jsx)(x.Fragment, { children: Object(x.jsx)(C.a, { children: Object(x.jsxs)(J.a, { sx: { width: "75%", textAlign: "center", mx: "auto", mt: 16 }, children: [Object(x.jsx)("form", { id: "addProduct", onSubmit: function (e) { var t = { name: i.name, desc: i.desc, details: i.details, price: i.price, img: i.img, status: "pending" }; i.img && i.name && i.desc && fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(t) }).then((function (e) { return e.json() })).then((function (e) { e.insertedId && (s(!0), document.getElementById("addProduct").reset()) })), e.preventDefault() }, children: Object(x.jsxs)(k.a, { elevation: 2, sx: { py: 5 }, children: [Object(x.jsx)(z.a, { color: "secondary", sx: { mb: 5 }, variant: "h5", children: "Add A Product" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Name", name: "name", onBlur: d, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Short Description", name: "desc", onBlur: d, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Full Description", name: "details", onBlur: d, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Price", name: "price", onBlur: d, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Image", name: "img", onBlur: d, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1, display: "none" }, id: "outlined-size-small", label: "status", name: "status", onBlur: d, size: "small", defaultValue: "pending" }), Object(x.jsx)(D.a, { color: "secondary", variant: "contained", sx: { width: "80%", mt: 5 }, type: "submit", children: "Add Product" })] }) }), n && Object(x.jsx)(E.a, { severity: "success", children: "Create Product Successfully!" })] }) }) }) }, Z = n(84), $ = n(274), ee = ["children"], te = function (e) { var t = e.children, n = Object(Z.a)(e, ee), c = I(), s = c.user, a = c.admin; return c.isLoading ? Object(x.jsx)($.a, {}) : Object(x.jsx)(o.b, Object(Q.a)(Object(Q.a)({}, n), {}, { render: function (e) { var n = e.location; return s.email && a ? t : Object(x.jsx)(o.a, { to: { pathname: "/", state: { from: n } } }) } })) }, ne = 240; var ce = function (e) { var t = I(), n = t.logOut, s = t.admin, a = Object(o.j)(), r = a.path, d = a.url, j = e.window, u = c.useState(!1), h = Object(l.a)(u, 2), b = h[0], O = h[1], m = function () { O(!b) }, S = Object(x.jsxs)("div", { children: [Object(x.jsx)(P.a, {}), Object(x.jsx)(v.a, {}), !s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/my-orders"), children: Object(x.jsx)(D.a, { sx: { width: "100%", mt: 5, mb: 1 }, color: "secondary", variant: "outlined", children: "My Orders" }) }), !s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/payment"), children: Object(x.jsx)(D.a, { sx: { width: "100%", my: 1 }, color: "secondary", variant: "outlined", children: "Payment" }) }), !s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/review"), children: Object(x.jsx)(D.a, { sx: { width: "100%", mb: 5, mt: 1 }, color: "secondary", variant: "outlined", children: "Review" }) }), s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/manage-orders"), children: Object(x.jsx)(D.a, { sx: { width: "100%", mt: 5, mb: 1 }, color: "secondary", variant: "outlined", children: "Manage All Orders" }) }), s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/manage-products"), children: Object(x.jsx)(D.a, { sx: { width: "100%", my: 1 }, color: "secondary", variant: "outlined", children: "Manage All Pruducts" }) }), s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/add-product"), children: Object(x.jsx)(D.a, { sx: { width: "100%", my: 1 }, color: "secondary", variant: "outlined", children: "Add A Product" }) }), s && Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "".concat(d, "/make-admin"), children: Object(x.jsx)(D.a, { sx: { width: "100%", mb: 5, mt: 1 }, color: "secondary", variant: "outlined", children: "Make Admin" }) }), Object(x.jsx)(v.a, {}), Object(x.jsx)(i.b, { style: { textDecoration: "none", color: "#1976D2" }, to: "/", children: Object(x.jsx)(D.a, { sx: { width: "100%", mt: 5, mb: 1 }, color: "secondary", variant: "outlined", children: "Back To Home" }) }), Object(x.jsx)(D.a, { onClick: n, sx: { width: "100%", my: 1 }, color: "secondary", variant: "outlined", children: "LogOut" })] }), C = void 0 !== j ? function () { return j().document.body } : void 0; return Object(x.jsxs)(p.a, { sx: { display: "flex" }, children: [Object(x.jsx)(g.a, {}), Object(x.jsx)(f.a, { position: "fixed", sx: { width: { sm: "calc(100% - ".concat(ne, "px)") }, ml: { sm: "".concat(ne, "px") } }, children: Object(x.jsxs)(P.a, { style: { backgroundColor: "#9C27B0" }, children: [Object(x.jsx)(w.a, { color: "inherit", "aria-label": "open drawer", edge: "start", onClick: m, sx: { mr: 2, display: { sm: "none" } }, children: Object(x.jsx)(A.a, {}) }), Object(x.jsx)(z.a, { variant: "h6", noWrap: !0, component: "div", children: "Responsive drawer" })] }) }), Object(x.jsxs)(p.a, { component: "nav", sx: { width: { sm: ne }, flexShrink: { sm: 0 } }, "aria-label": "mailbox folders", children: [Object(x.jsx)(y.a, { container: C, variant: "temporary", open: b, onClose: m, ModalProps: { keepMounted: !0 }, sx: { display: { xs: "block", sm: "none" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: ne } }, children: S }), Object(x.jsx)(y.a, { variant: "permanent", sx: { display: { xs: "none", sm: "block" }, "& .MuiDrawer-paper": { boxSizing: "border-box", width: ne } }, open: !0, children: S })] }), Object(x.jsxs)(p.a, { component: "main", sx: { flexGrow: 1, p: 3, width: { sm: "calc(100% - ".concat(ne, "px)") } }, children: [Object(x.jsx)(P.a, {}), Object(x.jsxs)(o.d, { children: [!s && Object(x.jsx)(o.b, { exact: !0, path: r, children: Object(x.jsx)(_, {}) }), !s && Object(x.jsx)(o.b, { path: "".concat(r, "/my-orders"), children: Object(x.jsx)(_, {}) }), !s && Object(x.jsx)(o.b, { path: "".concat(r, "/payment"), children: Object(x.jsx)(R, {}) }), !s && Object(x.jsx)(o.b, { path: "".concat(r, "/review"), children: Object(x.jsx)(H, {}) }), s && Object(x.jsx)(te, { exact: !0, path: r, children: Object(x.jsx)(F, {}) }), s && Object(x.jsx)(te, { path: "".concat(r, "/manage-orders"), children: Object(x.jsx)(F, {}) }), s && Object(x.jsx)(te, { path: "".concat(r, "/add-product"), children: Object(x.jsx)(X, {}) }), s && Object(x.jsx)(te, { path: "".concat(r, "/make-admin"), children: Object(x.jsx)(N, {}) }), s && Object(x.jsx)(te, { path: "".concat(r, "/manage-products"), children: Object(x.jsx)(K, {}) })] })] })] }) }, se = function (e) { var t = e.product, n = t.name, c = t.desc, s = t.price, a = t.img, r = t._id; return Object(x.jsx)(B.a, { item: !0, xs: 12, md: 4, children: Object(x.jsxs)(k.a, { elevation: 3, sx: { p: 5, textAlign: "center" }, children: [Object(x.jsx)("img", { style: { width: "100%" }, src: a, alt: "" }), Object(x.jsx)("h3", { children: n }), Object(x.jsx)("p", { children: Object(x.jsxs)("strong", { children: ["Price: ", s] }) }), Object(x.jsx)("p", { children: c }), Object(x.jsx)(i.b, { to: "/sunglasses/".concat(r), style: { textDecoration: "none" }, children: Object(x.jsx)(D.a, { sx: { width: "100%" }, color: "secondary", variant: "contained", children: "Buy Now" }) })] }) }) }, ae = function () { var e = Object(c.useState)([]), t = Object(l.a)(e, 2), n = t[0], s = t[1]; return Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function (e) { return e.json() })).then((function (e) { s(e.slice(0, 6)), console.log(e) })) }), []), Object(x.jsxs)(C.a, { children: [Object(x.jsx)(z.a, { sx: { my: 5, textAlign: "center" }, variant: "h2", children: "Featured Sunglasses" }), Object(x.jsx)(B.a, { container: !0, spacing: 2, children: n.map((function (e) { return Object(x.jsx)(se, { product: e }, e._id) })) })] }) }, re = n(35), ie = n(260), oe = n(111), le = n.n(oe), de = n(112), je = n.n(de), ue = n(255), he = n(132), be = n(133), xe = n.n(be), Oe = Object(he.autoPlay)(xe.a); var me = function () { var e = c.useState([]), t = Object(l.a)(e, 2), n = t[0], s = t[1]; c.useEffect((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/reviews").then((function (e) { return e.json() })).then((function (e) { return s(e) })) }), []); var a = Object(re.a)(), r = c.useState(0), i = Object(l.a)(r, 2), o = i[0], d = i[1], j = n.length; return Object(x.jsx)(C.a, { sx: { my: 16 }, children: Object(x.jsx)(k.a, { elevation: 3, sx: { my: 4, p: 5, textAlign: "center" }, children: Object(x.jsxs)(p.a, { sx: { mx: "auto", maxWidth: 400, flexGrow: 1 }, children: [Object(x.jsx)(z.a, { sx: { textAlign: "center" }, variant: "h3", children: " User Reviews" }), Object(x.jsx)(k.a, { square: !0, elevation: 0, sx: { display: "flex", alignItems: "center", height: 50, pl: 2, bgcolor: "background.default" } }), Object(x.jsx)(Oe, { axis: "rtl" === a.direction ? "x-reverse" : "x", index: o, onChangeIndex: function (e) { d(e) }, enableMouseEvents: !0, children: n.map((function (e, t) { return Object(x.jsx)("div", { children: Math.abs(o - t) <= 2 ? Object(x.jsxs)(p.a, { sx: { textAlign: "center" }, children: [Object(x.jsx)(z.a, { component: "legend", children: e.userName }), Object(x.jsx)(ue.a, { name: "read-only", value: e.rating, readOnly: !0 })] }) : null }) })) }), Object(x.jsx)(ie.a, { steps: j, position: "static", activeStep: o, nextButton: Object(x.jsxs)(D.a, { size: "small", onClick: function () { d((function (e) { return e + 1 })) }, disabled: o === j - 1, children: ["Next", "rtl" === a.direction ? Object(x.jsx)(le.a, {}) : Object(x.jsx)(je.a, {})] }), backButton: Object(x.jsxs)(D.a, { size: "small", onClick: function () { d((function (e) { return e - 1 })) }, disabled: 0 === o, children: ["rtl" === a.direction ? Object(x.jsx)(je.a, {}) : Object(x.jsx)(le.a, {}), "Back"] }) })] }) }) }) }, fe = function () { return Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(V, {}), Object(x.jsx)(ae, {}), Object(x.jsx)(me, {})] }) }, pe = function () { var e = Object(c.useState)({}), t = Object(l.a)(e, 2), n = t[0], s = t[1], a = I(), r = a.loginToWeb, d = a.isLoading, j = a.user, u = a.error, h = Object(o.h)(), b = Object(o.g)(), O = function (e) { var t = e.target.name, c = e.target.value, a = Object(Q.a)({}, n); a[t] = c, s(a) }; return Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(V, {}), Object(x.jsx)(C.a, { children: Object(x.jsxs)(J.a, { sx: { width: "75%", textAlign: "center", mx: "auto", mt: 16 }, children: [!d && Object(x.jsx)("form", { onSubmit: function (e) { r(n.email, n.password, h, b), e.preventDefault() }, children: Object(x.jsxs)(k.a, { elevation: 2, sx: { py: 5 }, children: [Object(x.jsx)(z.a, { color: "secondary", sx: { mb: 5 }, variant: "h5", children: "Login" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Email", type: "email", name: "email", onBlur: O, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Password", name: "password", onBlur: O, type: "password", size: "small" }), Object(x.jsx)(D.a, { color: "secondary", variant: "contained", sx: { width: "80%", mt: 5 }, type: "submit", children: "Sign In" }), Object(x.jsx)(i.b, { to: "/register", children: Object(x.jsx)(D.a, { color: "secondary", variant: "text", sx: { mt: 5 }, type: "submit", children: "New User? Please Register First" }) })] }) }), d && Object(x.jsx)(J.a, { sx: { display: "flex" }, children: Object(x.jsx)($.a, {}) }), (null === j || void 0 === j ? void 0 : j.email) && Object(x.jsx)(E.a, { severity: "success", children: "Login User Successfully!" }), u && Object(x.jsx)(E.a, { severity: "error", children: u })] }) })] }) }, ge = ["children"], ve = function (e) { var t = e.children, n = Object(Z.a)(e, ge), c = I(), s = c.user; return c.isLoading ? Object(x.jsx)($.a, {}) : Object(x.jsx)(o.b, Object(Q.a)(Object(Q.a)({}, n), {}, { render: function (e) { var n = e.location; return s.email ? t : Object(x.jsx)(o.a, { to: { pathname: "/login", state: { from: n } } }) } })) }, ye = function () { var e = Object(c.useState)({}), t = Object(l.a)(e, 2), n = t[0], s = t[1], a = I(), r = a.registerToWeb, d = a.isLoading, j = a.user, u = a.error, h = function (e) { var t = e.target.name, c = e.target.value, a = Object(Q.a)({}, n); a[t] = c, s(a) }, b = Object(o.g)(); return Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(V, {}), Object(x.jsx)(C.a, { children: Object(x.jsxs)(J.a, { sx: { width: "75%", textAlign: "center", mx: "auto", mt: 16 }, children: [!d && Object(x.jsx)("form", { onSubmit: function (e) { n.password === n.password2 ? (r(n.email, n.password, b, n.name), e.preventDefault()) : alert("your password did not matched") }, children: Object(x.jsxs)(k.a, { elevation: 2, sx: { py: 5 }, children: [Object(x.jsx)(z.a, { color: "secondary", sx: { mb: 5 }, variant: "h5", children: "Register" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Name", name: "name", onBlur: h, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Email", type: "email", name: "email", onBlur: h, size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Password", name: "password", onBlur: h, type: "password", size: "small" }), Object(x.jsx)(T.a, { sx: { width: "80%", m: 1 }, id: "outlined-size-small", label: "Re-Enter Password", name: "password2", onBlur: h, type: "password", size: "small" }), Object(x.jsx)(D.a, { color: "secondary", variant: "contained", sx: { width: "80%", mt: 5 }, type: "submit", children: "Register" }), Object(x.jsx)(i.b, { to: "/login", children: Object(x.jsx)(D.a, { color: "secondary", variant: "text", sx: { mt: 5 }, type: "submit", children: "Already Registered? Please Login" }) })] }) }), d && Object(x.jsx)(J.a, { sx: { display: "flex" }, children: Object(x.jsx)($.a, {}) }), (null === j || void 0 === j ? void 0 : j.email) && Object(x.jsx)(E.a, { severity: "success", children: "Create User Successfully!" }), u && Object(x.jsx)(E.a, { severity: "error", children: u })] }) })] }) }, we = function () { var e = I().user, t = Object(c.useState)({}), n = Object(l.a)(t, 2), s = n[0], a = n[1], r = { userName: e.displayName, email: e.email }, i = Object(c.useState)(r), d = Object(l.a)(i, 2), j = d[0], u = d[1], h = Object(c.useState)(!1), b = Object(l.a)(h, 2), O = b[0], m = b[1], f = Object(o.i)().sunglassId; Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses/".concat(f)).then((function (e) { return e.json() })).then((function (e) { return a(e) })) }), []); var p = Object(o.g)(), g = function (e) { var t = e.target.name, n = e.target.value, c = Object(Q.a)({}, j); c[t] = n, u(c) }; return Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(V, {}), Object(x.jsx)(C.a, { children: Object(x.jsxs)(B.a, { container: !0, spacing: 2, children: [Object(x.jsx)(B.a, { item: !0, xs: 12, md: 6, children: Object(x.jsxs)(k.a, { elevation: 0, sx: { p: 5 }, children: [Object(x.jsx)("img", { style: { width: "100%" }, src: null === s || void 0 === s ? void 0 : s.img, alt: "" }), Object(x.jsx)("h2", { children: null === s || void 0 === s ? void 0 : s.name }), Object(x.jsx)("p", { children: Object(x.jsx)("small", { children: null === s || void 0 === s ? void 0 : s.price }) }), Object(x.jsx)("p", { children: null === s || void 0 === s ? void 0 : s.details })] }) }), Object(x.jsx)(B.a, { item: !0, xs: 12, md: 6, sx: { mt: 16 }, children: Object(x.jsxs)(k.a, { elevation: 3, sx: { p: 5 }, children: [Object(x.jsxs)("form", { onSubmit: function (e) { var t = Object(Q.a)(Object(Q.a)({}, r), {}, { image: null === s || void 0 === s ? void 0 : s.img, productName: null === s || void 0 === s ? void 0 : s.name, phone: j.phone, address: j.address, status: null === s || void 0 === s ? void 0 : s.status }); fetch("https://aqueous-ravine-85233.herokuapp.com/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(t) }).then((function (e) { return e.json() })).then((function (e) { e.insertedId && (m(!0), p.push("/")) })), e.preventDefault() }, children: [Object(x.jsx)(z.a, { color: "secondary", sx: { my: 3, textAlign: "center" }, variant: "h3", children: "BUY NOW" }), Object(x.jsx)(T.a, { label: "Your Name", sx: { width: "100%", my: 2 }, id: "outlined-size-normal", size: "normal", defaultValue: e.displayName, name: "name", onBlur: g }), Object(x.jsx)(T.a, { label: "Your Email", sx: { width: "100%", my: 2 }, id: "outlined-size-normal", size: "normal", defaultValue: e.email, name: "email", onBlur: g }), Object(x.jsx)(T.a, { label: "Your Phone", sx: { width: "100%", my: 2 }, id: "outlined-size-normal", size: "normal", name: "phone", onBlur: g }), Object(x.jsx)(T.a, { label: "Your Address", sx: { width: "100%", my: 2 }, id: "outlined-size-normal", size: "normal", name: "address", onBlur: g }), Object(x.jsx)(D.a, { type: "submit", sx: { mt: 3, width: "100%" }, size: "large", color: "secondary", variant: "contained", children: "Confirm Purchase" })] }), O && Object(x.jsx)(E.a, { severity: "success", children: "Login User Successfully!" })] }) })] }) })] }) }, Se = function (e) { var t = e.product, n = t.name, c = t.desc, s = t.price, a = t.img, r = t._id; return Object(x.jsx)(B.a, { item: !0, xs: 12, md: 4, children: Object(x.jsxs)(k.a, { elevation: 3, sx: { p: 5, textAlign: "center" }, children: [Object(x.jsx)("img", { style: { width: "100%" }, src: a, alt: "" }), Object(x.jsx)("h3", { children: n }), Object(x.jsx)("p", { children: Object(x.jsxs)("strong", { children: ["Price: ", s] }) }), Object(x.jsx)("p", { children: c }), Object(x.jsx)(i.b, { to: "/sunglasses/".concat(r), style: { textDecoration: "none" }, children: Object(x.jsx)(D.a, { sx: { width: "100%" }, color: "secondary", variant: "contained", children: "Buy Now" }) })] }) }) }, Ae = function () { var e = Object(c.useState)([]), t = Object(l.a)(e, 2), n = t[0], s = t[1]; return Object(c.useEffect)((function () { fetch("https://aqueous-ravine-85233.herokuapp.com/sunglasses").then((function (e) { return e.json() })).then((function (e) { s(e) })) }), []), Object(x.jsxs)(x.Fragment, { children: [Object(x.jsx)(V, {}), Object(x.jsxs)(C.a, { children: [Object(x.jsx)(z.a, { sx: { my: 5, textAlign: "center" }, variant: "h2", children: "Our All Sunglasses" }), Object(x.jsx)(B.a, { container: !0, spacing: 2, children: n.map((function (e) { return Object(x.jsx)(Se, { product: e }, e._id) })) })] })] }) }; var Pe = function () { return Object(x.jsx)(m, { children: Object(x.jsx)(i.a, { children: Object(x.jsxs)(o.d, { children: [Object(x.jsx)(o.b, { exact: !0, path: "/", children: Object(x.jsx)(fe, {}) }), Object(x.jsx)(o.b, { path: "/login", children: Object(x.jsx)(pe, {}) }), Object(x.jsx)(o.b, { path: "/register", children: Object(x.jsx)(ye, {}) }), Object(x.jsx)(ve, { path: "/sunglasses/:sunglassId", children: Object(x.jsx)(we, {}) }), Object(x.jsx)(ve, { path: "/dashboard", children: Object(x.jsx)(ce, {}) }), Object(x.jsx)(o.b, { path: "/sunglasses", children: Object(x.jsx)(Ae, {}) })] }) }) }) }, ze = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 276)).then((function (t) { var n = t.getCLS, c = t.getFID, s = t.getFCP, a = t.getLCP, r = t.getTTFB; n(e), c(e), s(e), a(e), r(e) })) }; r.a.render(Object(x.jsx)(s.a.StrictMode, { children: Object(x.jsx)(Pe, {}) }), document.getElementById("root")), ze() } }, [[203, 1, 2]]]);
//# sourceMappingURL=main.9e2a9482.chunk.js.map