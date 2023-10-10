(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [38], {
        687: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(3),
                r = n.n(c),
                a = n(30),
                i = n(740),
                o = (n(788), n(40)),
                s = n(738),
                u = n(8),
                l = n(14),
                d = n(12),
                f = n(0),
                j = [{
                    img_desk: "https://imgcdn.floweraura.com/flower_desktop-new.jpg",
                    img_mob: "https://imgcdn.floweraura.com/flower_desktop-new_0.jpg",
                    url: "/flowers",
                    title: "Flowers"
                }, {
                    img_desk: "https://imgcdn.floweraura.com/cake_desktop-new.jpg",
                    img_mob: "https://imgcdn.floweraura.com/cake_desktop-new_0.jpg",
                    url: "/cakes",
                    title: "Cakes"
                }, {
                    img_desk: "https://imgcdn.floweraura.com/gift_desktop_3.jpg",
                    img_mob: "https://imgcdn.floweraura.com/gift_desktop_2.jpg",
                    url: "/gifts",
                    title: "Gifts"
                }, {
                    img_desk: "https://imgcdn.floweraura.com/combo_desktop_0.jpg",
                    img_mob: "https://imgcdn.floweraura.com/combo_desktop_1.jpg",
                    url: "/combos",
                    title: "Combos"
                }, {
                    img_desk: "https://imgcdn.floweraura.com/personalised_gift_desktop.jpg",
                    img_mob: "https://imgcdn.floweraura.com/personalised_gift_desktop_0.jpg",
                    url: "/personalised-gifts",
                    title: "Personalized Gifts"
                }, {
                    img_desk: "https://imgcdn.floweraura.com/plant_desktop.jpg",
                    img_mob: "https://imgcdn.floweraura.com/plant_desktop_1.jpg",
                    url: "/plants",
                    title: "Plants"
                }];
            t.default = Object(a.c)("", (function(e) {
                return {
                    fetchSiteSettings: function(t, n) {
                        return e(Object(o.b)(t, n))
                    }
                }
            }))((function(e) {
                var t = e.statusCode,
                    n = e.isMobileReq;
                Object(c.useEffect)((function() {
                    e.fetchSiteSettings();
                    var t = {
                        action: "404_error",
                        eventCategory: "404_page",
                        eventLabel: "shown"
                    };
                    Object(u.f)(t), Object(l.d)("clickEvent", t)
                }), []);
                return Object(f.jsxs)(f.Fragment, {
                    children: [Object(f.jsx)("section", {
                        className: "page-not-found",
                        children: 404 === t || 400 === t ? Object(f.jsxs)(r.a.Fragment, {
                            children: [Object(f.jsx)("div", {
                                className: "page-content",
                                children: Object(f.jsxs)("div", {
                                    className: "page-not-found-content",
                                    children: [Object(f.jsxs)("div", {
                                        className: "page-content-inner",
                                        children: [Object(f.jsxs)("div", {
                                            className: "page-some-content",
                                            children: [Object(f.jsx)("h2", {
                                                children: "Something went wrong"
                                            }), Object(f.jsx)("h3", {
                                                children: "But it\u2019s OK, We Got You"
                                            }), Object(f.jsx)("a", {
                                                href: "/",
                                                onClick: function() {
                                                    var e = {
                                                        action: "CTA_button",
                                                        eventCategory: "404_page",
                                                        eventLabel: "Click"
                                                    };
                                                    Object(u.f)(e), Object(l.d)("clickEvent", e)
                                                },
                                                target: "_self",
                                                children: "Back to Home"
                                            })]
                                        }), Object(f.jsx)("div", {
                                            className: "img-wrapper",
                                            children: "true" === n ? Object(f.jsx)("img", {
                                                src: "https://imgcdn.floweraura.com/image_404/img_mob404.png",
                                                alt: "Page Not Found"
                                            }) : Object(f.jsx)("img", {
                                                src: "https://imgcdn.floweraura.com/image_404/img404.png",
                                                alt: "Page Not Found"
                                            })
                                        })]
                                    }), Object(f.jsx)("div", {
                                        className: "occasion-container",
                                        children: Object(f.jsxs)("div", {
                                            className: "slideupdown-category",
                                            children: [Object(f.jsx)("h2", {
                                                children: "Find your new favorites"
                                            }), Object(f.jsx)("ul", {
                                                className: "slideupdown",
                                                children: j.map((function(e, t) {
                                                    return Object(f.jsx)("li", {
                                                        children: Object(f.jsxs)("a", {
                                                            href: e.url,
                                                            onClick: function() {
                                                                ! function(e) {
                                                                    var t = {
                                                                        action: "category_click",
                                                                        eventCategory: "404_page",
                                                                        eventLabel: e
                                                                    };
                                                                    Object(u.f)(t), Object(l.d)("clickEvent", t)
                                                                }(e.title), Object(d.n)("404_page", "Find your new favorites", e.title, e.url)
                                                            },
                                                            children: [Object(f.jsx)(s.a, {
                                                                src: "true" === n ? e.img_mob : e.img_desk,
                                                                alt: e.title,
                                                                title: e.title,
                                                                noLazyLoad: !1
                                                            }), Object(f.jsx)("h4", {
                                                                className: "catgorySpanName",
                                                                children: e.title
                                                            })]
                                                        })
                                                    }, t)
                                                }))
                                            })]
                                        })
                                    })]
                                })
                            }), Object(f.jsx)("div", {
                                id: "searchModal"
                            })]
                        }) : null
                    }), Object(f.jsx)(i.a, {
                        isMobileReq: n
                    })]
                })
            }))
        },
        718: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(31),
                r = n(122),
                a = n(178),
                i = n(30),
                o = n(101),
                s = n(231),
                u = n(102),
                l = n(93),
                d = n.n(l),
                f = n(9),
                j = n.n(f),
                b = n(40),
                p = n(224),
                g = n(168),
                O = n(242),
                h = n(36),
                m = n(104),
                v = n(182),
                w = n(232),
                k = n(233),
                x = n(2),
                y = n(41),
                _ = n(1),
                C = n(25),
                P = n(26),
                S = n(34),
                L = n(35),
                N = n(3),
                D = n.n(N),
                M = n(11),
                A = n.n(M),
                R = n(739),
                F = n(687),
                T = n(13),
                E = n(6),
                q = n(143),
                I = n(8),
                U = n(14),
                H = n(236),
                G = n.n(H),
                z = (n(962), n(957)),
                J = n(180),
                B = n(0),
                Q = function() {
                    var e = Object(N.useState)(!1),
                        t = Object(c.a)(e, 2),
                        n = t[0],
                        i = t[1],
                        o = Object(N.useState)(!1),
                        s = Object(c.a)(o, 2),
                        u = s[0],
                        l = s[1],
                        d = Object(N.useState)(null),
                        f = Object(c.a)(d, 2),
                        j = f[0],
                        b = f[1],
                        p = Object(N.useState)(null),
                        g = Object(c.a)(p, 2),
                        O = g[0],
                        h = g[1];
                    Object(N.useEffect)((function() {
                        m(), Object(x.a)(localStorage.getItem("showhellotap")) && !n && setTimeout((function() {
                            i(!0)
                        }), 2e3)
                    }), []);
                    var m = function() {
                        var e = Object(a.a)(Object(r.a)().mark((function e() {
                            var t, n, c, a;
                            return Object(r.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, G.a.get("".concat(E.z, "/api/floweraura/fa/genratetoken"));
                                    case 2:
                                        t = e.sent, n = t.data, c = n.error, a = n.data, c || b(a.token);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    Object(N.useEffect)((function() {
                        var e = localStorage.getItem("showhellotap") || "";
                        if (!Object(x.a)(e)) {
                            var t = JSON.parse(e);
                            Object.keys(t).length && i(t.showStatus)
                        }
                    }), []), Object(N.useEffect)((function() {
                        var e = {
                                showStatus: n
                            },
                            t = JSON.stringify(e);
                        localStorage.setItem("showhellotap", t)
                    }), [n]);
                    return Object(B.jsxs)(B.Fragment, {
                        children: [O && Object(B.jsx)(J.a, {}), n && Object(B.jsxs)("div", {
                            className: "hello-tap selfHello_chat",
                            children: [Object(B.jsxs)("div", {
                                onClick: function() {
                                    return l(!0)
                                },
                                className: "hello-tap-title",
                                children: ["Hello! Tap here if you need any help", Object(B.jsx)("span", {})]
                            }), Object(B.jsx)("em", {
                                onClick: function() {
                                    return i(!1)
                                },
                                className: "selfChatCloseIcon"
                            })]
                        }), u ? Object(B.jsx)(z.a, {
                            close: function() {
                                l(!1)
                            },
                            token: j,
                            baseUrl: E.z,
                            setIsLoading: h
                        }) : Object(B.jsx)("div", {
                            onClick: function() {
                                return function(e) {
                                    if (e) {
                                        var t = {
                                            action: window.location.href,
                                            eventCategory: "Self-Service Icon",
                                            eventLabel: "Clicked"
                                        };
                                        Object(I.f)(t), Object(U.d)("clickEvent", t)
                                    }
                                    l(e)
                                }(!0)
                            },
                            className: "selfChatLogo",
                            children: Object(B.jsx)("span", {})
                        })]
                    })
                },
                Y = Object(i.c)((function(e) {
                    return {
                        location: e.router.location
                    }
                }))((function(e) {
                    var t = Object(N.useState)(!1),
                        n = Object(c.a)(t, 2),
                        r = n[0],
                        a = n[1];
                    return Object(N.useEffect)((function() {
                        setTimeout((function() {
                            a(!0)
                        }), 3e3)
                    }), []), Object(N.useEffect)((function() {
                        if (r) {
                            var e = {
                                action: window.location.href,
                                eventCategory: "Self-Service Icon",
                                eventLabel: "Shown"
                            };
                            Object(I.f)(e), Object(U.d)("clickEvent", e)
                        }
                    }), [r]), "app" === Object(q.a)("fa-source", e.location.search) ? null : Object(B.jsx)(N.Fragment, {
                        children: Object(B.jsx)("div", {
                            className: "selfChatIcon",
                            children: r && Object(B.jsx)(Q, {})
                        })
                    })
                })),
                K = n(745),
                W = (n(100), A()({
                    loader: function() {
                        return Promise.all([n.e(3), n.e(5), n.e(7), n.e(8), n.e(42)]).then(n.bind(null, 1111))
                    },
                    modules: ["../ProductListingPage"],
                    webpack: function() {
                        return [1111]
                    },
                    loading: T.a
                })),
                $ = A()({
                    loader: function() {
                        return Promise.all([n.e(3), n.e(7), n.e(70), n.e(41)]).then(n.bind(null, 1112))
                    },
                    modules: ["../ProductLandingPage"],
                    webpack: function() {
                        return [1112]
                    },
                    loading: T.a
                }),
                V = A()({
                    loader: function() {
                        return Promise.all([n.e(3), n.e(5), n.e(4), n.e(7), n.e(43)]).then(n.bind(null, 1110))
                    },
                    modules: ["../ProductPage"],
                    webpack: function() {
                        return [1110]
                    },
                    loading: T.a
                }),
                X = function(e) {
                    Object(S.a)(n, e);
                    var t = Object(L.a)(n);

                    function n() {
                        var e;
                        Object(C.a)(this, n);
                        for (var c = arguments.length, r = new Array(c), a = 0; a < c; a++) r[a] = arguments[a];
                        return (e = t.call.apply(t, [this].concat(r))).showLoader = function() {
                            var t = e.props.categoryProducts,
                                n = e.props.listing,
                                c = e.props.pageData.pageType;
                            if (e.props.pageData.isLoading && Object(x.a)(c)) return !0;
                            if (!Object(x.a)(c))
                                if ("landing_page" === c) {
                                    if (E.t && Object(x.a)(t.page)) return !0
                                } else if ("listing_page" === c && E.t && Object(x.a)(n.itemList)) return !0;
                            return !1
                        }, e
                    }
                    return Object(P.a)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props.pageData,
                                t = this.props.siteHeaderSettings.selfServiceStatus,
                                n = e.pageType,
                                c = this.showLoader(),
                                r = null;
                            if (0 === E.s && (r = Object(B.jsx)(K.Helmet, {
                                    children: Object(B.jsx)("meta", {
                                        name: "robots",
                                        content: "noindex,nofollow"
                                    })
                                })), !Object(x.a)(e) && -1 !== E.A.error.indexOf(e.statusCode)) {
                                var a = 404 === e.statusCode || 400 === e.statusCode ? "Page not found" : "Something went wrong";
                                return Object(B.jsxs)(D.a.Fragment, {
                                    children: [Object(B.jsx)(R.a, {
                                        title: a
                                    }), Object(B.jsx)(F.default, {
                                        statusCode: e.statusCode,
                                        isMobileReq: this.props.isMobileReq
                                    })]
                                })
                            }
                            return 301 !== e.statusCode && 302 !== e.statusCode || Object(x.a)(e.redirectUrl) ? c ? Object(B.jsx)(T.a, {}) : Object(B.jsxs)(D.a.Fragment, {
                                children: ["landing_page" === n ? Object(B.jsx)($, Object(_.a)({}, this.props)) : "listing_page" === n ? Object(B.jsx)(W, Object(_.a)({}, this.props)) : "detail_page" === n ? Object(B.jsx)(V, Object(_.a)({}, this.props)) : null, t && "/instant-delivery" !== this.props.location.pathname && Object(B.jsx)(Y, {}), r]
                            }) : Object(B.jsx)(o.a, {
                                to: {
                                    pathname: "".concat(E.c.replace(/\/$/, ""), "/").concat(e.redirectUrl),
                                    state: {
                                        statusCode: e.statusCode
                                    }
                                }
                            })
                        }
                    }]), n
                }(D.a.Component),
                Z = X,
                ee = function() {
                    var e = Object(a.a)(Object(r.a)().mark((function e(t) {
                        var n, i, o, s, u, l, f, j, b, p, g, O, h, m, v;
                        return Object(r.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.fetchPageData, i = t.location, o = t.cookies, s = t.fetchAppMenu, u = t.fetchLikeAndReviewProduct, l = t.fetchListingQuickLinks, f = t.fetchLeftSideNavigationMenu, j = i.search, "/" === (b = i.pathname) ? b = "/homepage" : "/giftfinder" === b && (b = "/fa/giftfinder"), p = Object(y.b)("fc_cn", o), (g = d.a.parse(j)).metainfo = 1, O = null, h = !1, g.rsource = "web", "true" === t.isMobileReq && (g.rsource = "mob"), g.page && (g.current_page = g.page), p && (g.fc_cn = p), m = function() {
                                        var e = Object(a.a)(Object(r.a)().mark((function e() {
                                            return Object(r.a)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!O) {
                                                            e.next = 8;
                                                            break
                                                        }
                                                        if ("true" !== t.isMobileReq) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return e.next = 4, f(b, O);
                                                    case 4:
                                                        e.next = 8;
                                                        break;
                                                    case 6:
                                                        return e.next = 8, s(b, O);
                                                    case 8:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.next = 15, Promise.all([n(b, g), m()]).then(function() {
                                        var e = Object(a.a)(Object(r.a)().mark((function e(n) {
                                            var a, i, o;
                                            return Object(r.a)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a = Object(c.a)(n, 2), i = a[0], o = a[1], O = i, "/giftfinder" === t.location.pathname && (O.page_type = "listing_page"), Object(x.a)(o) || (h = !0);
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        return console.log("Something went wrong", e)
                                    }));
                                case 15:
                                    if (v = e.sent, h || !O) {
                                        e.next = 25;
                                        break
                                    }
                                    if (console.log("Again fetching Menu API at ".concat(Date().toLocaleString(), " after getting 403 error in server-side rendering")), "true" !== t.isMobileReq) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 21, f(b, O);
                                case 21:
                                    e.next = 25;
                                    break;
                                case 23:
                                    return e.next = 25, s(b, O);
                                case 25:
                                    if (!O || Object(x.a)(O.page_type) || "detail_page" !== O.page_type || Object(x.a)(O.nid)) {
                                        e.next = 28;
                                        break
                                    }
                                    return e.next = 28, u(+O.nid, []);
                                case 28:
                                    if (Object(x.a)(O)) {
                                        e.next = 31;
                                        break
                                    }
                                    return e.next = 31, l(b);
                                case 31:
                                    return e.abrupt("return", v);
                                case 32:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            Z.contextTypes = {
                data: j.a.oneOfType([j.a.object, j.a.string])
            };
            t.default = Object(u.b)(Object(o.h)(Object(i.c)((function(e) {
                return {
                    listing: e.listing,
                    cityPopupData: e.cityPopupData.data || [],
                    lockdownCities: e.settings.lockdownCities || [],
                    review: e.productReview,
                    quickLinks: e.quickLinks,
                    pageData: e.pageData,
                    applyOffset: e.settings.applyOffset,
                    earliestDeliveryDateDynamic: e.settings.earliestDeliveryDateDynamic,
                    siteHeaderSettings: e.settings,
                    categoryProducts: e.productList.categoryProducts,
                    fetchingCategoryProducts: e.productList.fetchingCategoryProducts,
                    productInfo: e.product,
                    productReview: e.productReview,
                    selectedAttributes: e.addToCart.attributes,
                    selectedAddons: e.addToCart.addon,
                    validationError: e.addToCart,
                    contactNumber: e.settings.contactNumber,
                    deliveryAddress: e.deliveryAddressObj.deliveryAddress,
                    serverDateTime: e.settings.serverDateTime,
                    customLikedProducts: e.product.customLikedProducts || [],
                    allCities: e.cities.cities,
                    userPickedCity: e.settings.userPickedCity || "",
                    userPickedState: e.settings.userPickedState || "",
                    statusCode: e.pageData.statusCode,
                    isMobileReq: e.pageData.isMobile,
                    isFlowerauraReferrer: e.pageData.isFlowerauraReferrer,
                    apply_offset: !!e.settings.hasOwnProperty("apply_offset") && e.settings.apply_offset,
                    earliest_delivery_date: e.settings.hasOwnProperty("earliest_delivery_date") ? e.settings.earliest_delivery_date : "",
                    userPickedPincode: e.settings.userPickedPincode || "",
                    birthdayNumber: e.addToCart.birthdayNumber,
                    selectedOccsion: e.addToCart.selectedOccsion,
                    showCityStatus: e.addToCart.showCityStatus,
                    isLockDown: e.addToCart.isLockDown,
                    multiplePopup: e.pageData.multiplePopup
                }
            }), (function(e) {
                return {
                    fetchCityPopupData: function(t) {
                        return e(Object(O.a)(t))
                    },
                    fetchListPageData: function(t, n) {
                        return e(Object(g.b)(t, n))
                    },
                    fetchSiteSettings: function(t, n, c) {
                        return e(Object(b.b)(t, n, c))
                    },
                    fetchProductListFooterData: function(t) {
                        return e(Object(g.d)(t))
                    },
                    fetchFilterData: function(t, n) {
                        return e(Object(g.a)(t, n))
                    },
                    loadMoreItemsStatus: function(t) {
                        return e(Object(g.e)(t))
                    },
                    resetListPageData: function(t) {
                        return e(Object(g.f)(t))
                    },
                    fetchLockdownCities: function() {
                        return e(Object(b.a)())
                    },
                    fetchPageData: function(t, n) {
                        return e(Object(h.a)(t, n))
                    },
                    fetchCategoryProducts: function(t) {
                        return e(Object(p.a)(t))
                    },
                    fetchLikeAndReviewProduct: function(t, n) {
                        return e(Object(m.e)(t, n))
                    },
                    fetchAddon: function(t, n) {
                        return e(Object(m.a)(t, n))
                    },
                    selectAttribute: function(t, n, c) {
                        return e(Object(v.g)(t, n, c))
                    },
                    buyNowProduct: function(t, n, c, r, a, i, o, s) {
                        return e(Object(v.a)(t, n, c, r, a, i, o, s))
                    },
                    setAttributeError: function(t, n) {
                        return e(Object(v.j)(t, n))
                    },
                    removeAttributeError: function(t) {
                        return e(Object(v.h)(t))
                    },
                    fetchYouMayLike: function(t) {
                        return e(Object(m.d)(t))
                    },
                    setUserPickedCity: function(t) {
                        return e(Object(b.f)(t))
                    },
                    setUserPickedState: function(t) {
                        return e(Object(b.k)(t))
                    },
                    fetchProductInfo: function(t) {
                        return e(Object(m.b)(t))
                    },
                    setProductPageUrl: function(t) {
                        return e(Object(m.i)(t))
                    },
                    fetchAppMenu: function(t, n) {
                        return e(Object(w.a)(t, n))
                    },
                    fetchListingQuickLinks: function(t) {
                        return e(Object(g.c)(t))
                    },
                    fetchLeftSideNavigationMenu: function(t, n) {
                        return e(Object(k.a)(t, n))
                    },
                    onRemoveAddonToCart: function(t) {
                        return e(Object(v.f)(t))
                    },
                    setUserPickedPincode: function(t) {
                        return e(Object(b.j)(t))
                    },
                    cityCheckError: function(t) {
                        return e(Object(v.b)(t))
                    },
                    cityCheckLockDown: function(t) {
                        return e(Object(v.c)(t))
                    }
                }
            }))(Object(s.frontloadConnect)(ee, {
                onMount: !0,
                onUpdate: !1
            })(Z))))
        },
        734: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n(122),
                r = n(31),
                a = n(178),
                i = n(30),
                o = n(101),
                s = n(231),
                u = n(102),
                l = n(25),
                d = n(26),
                f = n(34),
                j = n(35),
                b = n(3),
                p = n.n(b),
                g = (n(860), n(740)),
                O = n(6),
                h = n(739),
                m = n(0),
                v = function(e) {
                    Object(f.a)(n, e);
                    var t = Object(j.a)(n);

                    function n() {
                        return Object(l.a)(this, n), t.apply(this, arguments)
                    }
                    return Object(d.a)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.fetchSiteSettings()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.location.pathname;
                            return Object(m.jsxs)(b.Fragment, {
                                children: [Object(m.jsx)(h.a, {
                                    title: "Customer Protection Policy | FlowerAura",
                                    canonical: O.c + e
                                }), Object(m.jsxs)("div", {
                                    className: "mid-wrapper-content",
                                    children: [Object(m.jsxs)("div", {
                                        className: "wrapper-show grievance-container",
                                        children: [Object(m.jsx)("h6", {
                                            children: "1. Registration of Complaints:"
                                        }), Object(m.jsxs)("ol", {
                                            className: "adjustOlAlign",
                                            children: [Object(m.jsx)("li", {
                                                children: "a. Customers can reach us on :"
                                            }), Object(m.jsxs)("ol", {
                                                type: "i",
                                                children: [Object(m.jsxs)("li", {
                                                    children: ["i.", Object(m.jsx)("a", {
                                                        href: "mailto:care@floweraura.com",
                                                        children: " wecare@floweraura.com (Grievance officer - Rohit Pradhan) "
                                                    })]
                                                }), Object(m.jsxs)("li", {
                                                    children: ["ii.", Object(m.jsx)("a", {
                                                        href: "tel:+91\xa09650062220",
                                                        children: " +91\xa09650062220"
                                                    })]
                                                })]
                                            })]
                                        }), Object(m.jsx)("h6", {
                                            children: "2. Escalations can be shared at :"
                                        }), Object(m.jsxs)("ol", {
                                            className: "adjustOlAlign",
                                            children: [Object(m.jsx)("li", {
                                                children: "a. nodal@floweraura.com (Nodal Officer - Trilok Chand)."
                                            }), Object(m.jsx)("li", {
                                                children: "b. write to us at: FA Gifts Private Limited, C 2, Old DLF Colony, Sector 14, Gurugram Haryana."
                                            }), Object(m.jsx)("li", {
                                                children: "c. Through FA Gifts Private Limited website (www.floweraura.com), using contact us."
                                            })]
                                        }), Object(m.jsx)("h6", {
                                            children: "3. Timeline for responding/resolving complaints"
                                        }), Object(m.jsxs)("ol", {
                                            className: "adjustOlAlign",
                                            children: [Object(m.jsx)("li", {
                                                children: "a. Normal cases : 7 working days."
                                            }), Object(m.jsx)("li", {
                                                children: "b. Fraud cases, Legal cases and cases which need retrieval of documents and exceptionally old records : 15 working days."
                                            }), Object(m.jsx)("li", {
                                                children: "c. Cases involving third party : 30 working days."
                                            })]
                                        })]
                                    }), Object(m.jsx)(g.a, {
                                        isMobileReq: this.props.isMobileReq
                                    })]
                                })]
                            })
                        }
                    }]), n
                }(p.a.Component),
                w = v,
                k = n(40),
                x = n(232),
                y = n(233),
                _ = n(2),
                C = function() {
                    var e = Object(a.a)(Object(c.a)().mark((function e(t) {
                        var n, i;
                        return Object(c.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = !1, e.next = 3, Promise.all([Object(k.a)(), "true" === t.isMobileReq ? t.fetchLeftSideNavigationMenu() : t.fetchAppMenu()]).then(function() {
                                        var e = Object(a.a)(Object(c.a)().mark((function e(t) {
                                            var a, i;
                                            return Object(c.a)().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        a = Object(r.a)(t, 1), i = a[0], Object(_.a)(i) || (n = !0);
                                                    case 2:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()).catch((function(e) {
                                        return console.log("Something went wrong", e)
                                    }));
                                case 3:
                                    return i = e.sent, n || (console.log("Again fetching Menu API at ".concat(Date().toLocaleString(), " after getting 403 error in server-side rendering")), "true" === t.isMobileReq ? t.fetchLeftSideNavigationMenu() : t.fetchAppMenu()), e.abrupt("return", i);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            t.default = Object(u.b)(Object(o.h)(Object(i.c)((function(e) {
                return {
                    siteHeaderSettings: e.settings,
                    isMobileReq: e.pageData.isMobile
                }
            }), (function(e) {
                return {
                    fetchSiteSettings: function(t, n) {
                        return e(Object(k.b)(t, n))
                    },
                    fetchLockdownCities: function() {
                        return e(Object(k.a)())
                    },
                    fetchLeftSideNavigationMenu: function() {
                        return e(Object(y.a)())
                    },
                    fetchAppMenu: function() {
                        return e(Object(x.a)())
                    }
                }
            }))(Object(s.frontloadConnect)(C, {
                onMount: !0,
                onUpdate: !1
            })(w))))
        },
        788: function(e, t, n) {},
        860: function(e, t, n) {},
        962: function(e, t, n) {}
    }
]);