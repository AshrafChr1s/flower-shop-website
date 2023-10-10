(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [64], {
        100: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return n
            })), a.d(t, "a", (function() {
                return r
            }));
            a(352);
            var n = function(e, t, a, n) {
                    var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "body";
                    return n = n || "4219487942", t = t || !1, a = a || !1, new Promise((function(i, o) {
                        var c = r,
                            s = document.createElement("script");
                        s.setAttribute("src", e), s.setAttribute("type", "text/javascript"), t && s.setAttribute("async", !0), a && s.setAttribute("defer", !0), s.setAttribute("crossorigin", "anonymous"), n && s.setAttribute("nonce", n), s.onload = function(e) {
                            i(s)
                        }, s.onerror = function(e) {
                            console.error("Error Loading Js", e), o(e)
                        }, document[c].appendChild(s)
                    }))
                },
                r = function(e) {
                    return new Promise((function(t, a) {
                        var n = document.createElement("link");
                        n.setAttribute("type", "text/css"), n.setAttribute("rel", "stylesheet"), n.setAttribute("href", e), n.onload = function(e) {
                            t(n)
                        }, n.onerror = function(e) {
                            a(e)
                        }, document.head.appendChild(n)
                    }))
                }
        },
        104: function(e, t, a) {
            "use strict";
            a.d(t, "i", (function() {
                return g
            })), a.d(t, "g", (function() {
                return j
            })), a.d(t, "j", (function() {
                return O
            })), a.d(t, "e", (function() {
                return v
            })), a.d(t, "d", (function() {
                return y
            })), a.d(t, "a", (function() {
                return _
            })), a.d(t, "b", (function() {
                return C
            })), a.d(t, "c", (function() {
                return w
            })), a.d(t, "h", (function() {
                return k
            })), a.d(t, "f", (function() {
                return S
            }));
            var n = a(1),
                r = a(122),
                i = a(178),
                o = a(4),
                c = a(17),
                s = a(6),
                l = a(175),
                u = (a(176), a(40)),
                d = a(182),
                p = a(36),
                h = a(2),
                b = a(7),
                f = function(e) {
                    return function(t) {
                        var a;
                        return Object(h.a)(e.cities) || Object(h.a)(e.cities.all) || t((a = e.cities.all, function(e) {
                            return e({
                                type: o.E,
                                cities: a
                            })
                        })), t({
                            type: o.Yb,
                            productInfo: e
                        })
                    }
                },
                m = function(e) {
                    return function(t) {
                        return t({
                            type: o.Wb,
                            addon: e
                        })
                    }
                },
                g = function(e) {
                    return function(t) {
                        return t({
                            type: o.xb,
                            productPageUrl: e
                        })
                    }
                },
                j = function(e) {
                    return function(t) {
                        return t({
                            type: o.r,
                            data: e
                        })
                    }
                },
                O = function(e) {
                    return function(t) {
                        return t({
                            type: o.yb,
                            data: e
                        })
                    }
                },
                v = function(e, t) {
                    return function(t) {
                        return c.f.get("/you-may-like-review/".concat(e)).then((function(e) {
                            var a = e.data.result,
                                n = a.status,
                                r = a.data;
                            if (!0 === n) return t(Object(l.a)(r.review_data)), t(function(e) {
                                return function(t) {
                                    return t({
                                        type: o.gb,
                                        data: e
                                    })
                                }
                            }(r))
                        })).catch((function(e) {
                            console.log("You may like api is not working ", e)
                        }))
                    }
                },
                y = function(e) {
                    return function(t) {
                        return c.a.post("".concat("https://post-apis.floweraura.com", "/user-like-data/get_user_data"), {
                            fa_uuid: e
                        }, {
                            timeout: 5e3
                        }).then((function(e) {
                            var a = e.data.result,
                                n = a.status,
                                r = a.data;
                            if (n) return t(function(e) {
                                return function(t) {
                                    return t({
                                        type: o.bb,
                                        data: e
                                    })
                                }
                            }(r))
                        })).catch((function(e) {
                            console.log("Error", e)
                        }))
                    }
                },
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(a) {
                        var n = null,
                            r = "/api/floweraura/addon/".concat(e);
                        return b.a.get("fc_cn") && (n = {
                            fc_cn: b.a.get("fc_cn")
                        }), Object(h.a)(t) || (r = "".concat(r, "?ddate=").concat(t)), c.d.get("".concat(r), {
                            params: n
                        }).then((function(e) {
                            if (!0 === e.data.success) return a(m(e.data.data))
                        })).catch((function(e) {
                            console.log("Error", e)
                        }))
                    }
                },
                C = function(e) {
                    return function(t) {
                        return new Promise((function(a, n) {
                            return t(Object(p.e)(!0)), c.d.get("/api/floweraura".concat(e), {
                                params: {
                                    metainfo: 1
                                }
                            }).then((function(e) {
                                t(Object(p.e)(!1));
                                var c, s = 0;
                                if (Object(h.a)(e.data)) n("Product page api is not working ", s);
                                else {
                                    var l = e.data.data;
                                    if (Object(p.f)(), (s = e.data.status_code) && t(Object(p.g)(s)), 301 !== s && 302 !== s || t(Object(p.f)(l.url)), 200 === s) {
                                        var b = {
                                            product: l,
                                            settings: l.settings
                                        };
                                        a(b), t((c = 0, {
                                            type: o.wb,
                                            productNotFound: c
                                        })), t(f(b.product)), t(Object(u.c)(b.settings.contactNumber));
                                        var m = b.product.attributes;
                                        Object.keys(m).map(function() {
                                            var e = Object(i.a)(Object(r.a)().mark((function e(a) {
                                                var n, i;
                                                return Object(r.a)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return 1 === +m[a].display && (n = m[a].attribute_id, i = +Object.keys(m[a].options)[0], t(Object(d.g)(n, i, 1))), e.abrupt("return", "");
                                                        case 2:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    } else n("Product not found ", s)
                                }
                            })).catch((function(e) {
                                t({
                                    type: "RESET_STORE_DATA"
                                }), t(Object(p.e)(!1)), n(e);
                                var a = 502;
                                Object(h.a)(e.status) || -1 !== s.A.error.indexOf(e.status) && (a = e.status), t(Object(p.g)(a))
                            }))
                        }))
                    }
                },
                w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    return function(r) {
                        if (a) {
                            var i = {
                                withCredentials: !0
                            };
                            return b.a.get("fact") && (i = {
                                headers: {
                                    fact: b.a.get("fact")
                                },
                                withCredentials: !0
                            }), c.d.get("api/fa/facart/valentine-surcharge-date/".concat(e, "/").concat(t), Object(n.a)({}, i)).then((function(e) {
                                if (e && !Object(h.a)(e.data)) return e.data.fact && b.a.set("fact", e.data.fact, 7, s.f), e.data.valentine_date = t, r(O(e.data))
                            })).catch((function(e) {
                                console.log("Something went wrong")
                            }))
                        }
                        return c.a.get("/fa-get-page-data/valentine-surcharge-date/".concat(e, "/").concat(t)).then((function(e) {
                            if (e && !Object(h.a)(e.data)) return e.data.valentine_date = t, r(O(e.data))
                        })).catch((function(e) {
                            console.log("Something went wrong")
                        }))
                    }
                },
                k = function(e, t) {
                    var a = e.data;
                    if (!Object(h.a)(a)) {
                        var n = {
                            product: a,
                            settings: a.settings
                        };
                        t(f(n.product)), t(Object(u.c)(n.settings.contactNumber));
                        var o = n.product.attributes;
                        Object.keys(o).map(function() {
                            var e = Object(i.a)(Object(r.a)().mark((function e(a) {
                                var n, i;
                                return Object(r.a)().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return 1 === +o[a].display && (n = o[a].attribute_id, i = +Object.keys(o[a].options)[0], t(Object(d.g)(n, i, 1))), e.abrupt("return", "");
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }
                },
                S = function(e) {
                    return function(t) {
                        return t((a = e, function(e) {
                            return e({
                                type: o.ub,
                                data: a
                            })
                        }));
                        var a
                    }
                }
        },
        12: function(e, t, a) {
            "use strict";
            a.d(t, "j", (function() {
                return i
            })), a.d(t, "h", (function() {
                return o
            })), a.d(t, "d", (function() {
                return c
            })), a.d(t, "c", (function() {
                return s
            })), a.d(t, "i", (function() {
                return l
            })), a.d(t, "b", (function() {
                return u
            })), a.d(t, "p", (function() {
                return d
            })), a.d(t, "l", (function() {
                return p
            })), a.d(t, "m", (function() {
                return h
            })), a.d(t, "r", (function() {
                return b
            })), a.d(t, "o", (function() {
                return f
            })), a.d(t, "n", (function() {
                return m
            })), a.d(t, "e", (function() {
                return g
            })), a.d(t, "g", (function() {
                return j
            })), a.d(t, "q", (function() {
                return O
            })), a.d(t, "t", (function() {
                return v
            })), a.d(t, "s", (function() {
                return y
            })), a.d(t, "u", (function() {
                return _
            })), a.d(t, "f", (function() {
                return C
            })), a.d(t, "a", (function() {
                return w
            })), a.d(t, "k", (function() {
                return k
            }));
            var n = a(8),
                r = a(2),
                i = function(e, t, a) {
                    var r = {
                        heading: e,
                        sub_heading: t,
                        redirect_url: a
                    };
                    Object(n.d)("menu_click", r)
                },
                o = function(e, t) {
                    var a = {
                        icon_name: e,
                        redirect_url: t
                    };
                    Object(n.d)("icon_click", a)
                },
                c = function(e, t, a, r, i) {
                    var o = {
                        screen_name: e,
                        heading: t,
                        sub_heading: a,
                        redirect_url: r,
                        page_location: i
                    };
                    Object(n.d)("heading_card_click", o)
                },
                s = function(e, t, a, r, i, o, c) {
                    var s = {
                        screen_name: e,
                        button_name: t,
                        heading: a,
                        user_type: r,
                        validation_message: i,
                        sub_heading: o,
                        page_location: c
                    };
                    Object(n.d)("button_click", s)
                },
                l = function(e, t, a) {
                    var r = {
                        method: t,
                        user_type: a
                    };
                    Object(n.d)(e, r)
                },
                u = function(e, t, a, i, o) {
                    var c = null;
                    c = Object(r.a)(e) || Object(r.a)(t) ? !Object(r.a)(e) && Object(r.a)(t) ? "".concat(e) : "".concat(t) : "".concat(e, "-").concat(t);
                    var s = {
                        city_name_pincode: "".concat(o).concat(c),
                        source: a,
                        availability: i
                    };
                    Object(n.d)("area_set", s)
                },
                d = function(e, t, a) {
                    var r = {
                        section_name: t,
                        page_location: a
                    };
                    Object(n.d)(e, r)
                },
                p = function(e, t, a) {
                    var r = {
                        heading: e,
                        sub_heading: t,
                        redirect_url: a
                    };
                    Object(n.d)("link_click", r)
                },
                h = function(e, t, a, r) {
                    var i = {
                        heading: e,
                        filter_name: t,
                        page_location: a,
                        status: r
                    };
                    Object(n.d)("quick_filter", i)
                },
                b = function(e, t, a) {
                    var r = {
                        heading: e,
                        sub_heading: t,
                        page_location: a
                    };
                    Object(n.d)("upsell", r)
                },
                f = function(e, t, a) {
                    var r = {
                        heading: e,
                        method: t,
                        page_location: a
                    };
                    Object(n.d)("share", r)
                },
                m = function(e, t, a, r) {
                    var i = {
                        screen_name: e,
                        heading: t,
                        sub_heading: a,
                        redirect_url: r
                    };
                    Object(n.d)("section_click", i)
                },
                g = function(e, t, a, r) {
                    var i = {
                        heading: e,
                        checkbox_name: t,
                        page_location: a,
                        status: r
                    };
                    Object(n.d)("checkbox", i)
                },
                j = function(e, t, a, r, i) {
                    var o = {
                        screen_name: e,
                        heading: t,
                        sub_heading: a,
                        field_text: r,
                        page_location: i
                    };
                    Object(n.d)("field_type", o)
                },
                O = function(e, t, a) {
                    var r = {
                        screen_name: e,
                        section_name: t,
                        page_location: a
                    };
                    Object(n.d)("shown", r)
                },
                v = function(e, t, a, r, i) {
                    var o = {
                        screen_name: t,
                        section_name: a,
                        page_location: r,
                        heading: i
                    };
                    Object(n.d)(e, o)
                },
                y = function(e, t, a, r, i) {
                    var o = {
                        screen_name: e,
                        button_name: t,
                        heading: a,
                        sub_heading: r,
                        page_location: i
                    };
                    Object(n.d)("button_click", o)
                },
                _ = function(e, t, a, r) {
                    var i = {
                        screen_name: t,
                        heading: a,
                        sub_heading: r
                    };
                    Object(n.d)(e, i)
                },
                C = function(e, t) {
                    var a = {
                        screen_name: e,
                        heading: t
                    };
                    Object(n.d)("checkout_step0", a)
                },
                w = function(e, t, a) {
                    var r = {
                        screen_name: e,
                        section_name: t,
                        page_location: a
                    };
                    Object(n.d)("button_click", r)
                },
                k = function(e, t, a, r, i) {
                    var o = {
                        heading: t,
                        screen_name: a,
                        page_location: r,
                        button_name: i
                    };
                    Object(n.d)(e, o)
                }
        },
        120: function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return o
            })), a.d(t, "d", (function() {
                return c
            })), a.d(t, "b", (function() {
                return s
            })), a.d(t, "a", (function() {
                return l
            }));
            var n = a(4),
                r = a(17),
                i = a(12),
                o = function(e, t) {
                    return {
                        type: n.Mb,
                        accountLinks: e,
                        userInfo: t
                    }
                },
                c = function(e, t) {
                    var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                    return {
                        type: n.Tb,
                        isUserAnonymous: e,
                        cartCount: t,
                        walletPoint: a
                    }
                },
                s = function(e) {
                    return function(t) {
                        return r.a.post("/fa/api/v1/fa-social-login/google", e.profileObj).then((function(e) {
                            !0 === e.data.status && (Object(i.i)("login", "single_tap", "Registered_Verified"), window.location.reload())
                        })).catch((function(t) {
                            e.errors = {
                                main: "Something went wrong. Please try after sometime or refresh the page."
                            }
                        }))
                    }
                },
                l = function(e, t) {
                    return function(a) {
                        return a(function(e, t) {
                            return {
                                type: n.Lb,
                                userAccount: e,
                                isUserAnonymous: t
                            }
                        }(e, t))
                    }
                }
        },
        123: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(2),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        r = JSON.parse(sessionStorage.getItem("login_popup_content_configuration"));
                    Object(n.a)(r) ? ((r = {}).modalHeading = e, r.textContent1 = t, r.isSliderActive = a, sessionStorage.setItem("login_popup_content_configuration", JSON.stringify(r))) : (r.modalHeading = e, r.textContent1 = t, r.isSliderActive = a, sessionStorage.setItem("login_popup_content_configuration", JSON.stringify(r)))
                }
        },
        13: function(e, t, a) {
            "use strict";
            a(3), a(594);
            var n = a(0);
            t.a = function() {
                return Object(n.jsx)("div", {
                    className: "product-loader",
                    children: Object(n.jsx)("span", {})
                })
            }
        },
        14: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return f
            })), a.d(t, "d", (function() {
                return m
            })), a.d(t, "b", (function() {
                return g
            })), a.d(t, "c", (function() {
                return j
            }));
            a(360);
            var n = a(1),
                r = {
                    ProductPageView: {
                        ecommerce: {
                            detail: {
                                actionField: {
                                    action: "detail"
                                },
                                products: [{
                                    id: "<%-id%>",
                                    name: "<%-title%>",
                                    price: "<%-price%>",
                                    quantity: "<%-quantity%>",
                                    variant: "<%-variant%>",
                                    product_url: "<%-product_url%>",
                                    image_url: "<%-image_url%>",
                                    currency: "INR",
                                    category: "<%-category%>"
                                }]
                            }
                        }
                    },
                    HeaderIconClickClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Header - Mobile",
                        eventLabel: "<%-label%>"
                    },
                    ProductImageSwipe: {
                        event: "clickEvent",
                        eventAction: "Product Image Swipe",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-label%>"
                    },
                    ProductImageThumbnailClick: {
                        event: "clickEvent",
                        eventAction: "Product Image Thumbnail",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-index%>"
                    },
                    ZoomIconClick: {
                        event: "clickEvent",
                        eventAction: "Product Image Thumb Icon",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "Click"
                    },
                    UpgradeProduct: {
                        event: "clickEvent",
                        eventAction: "Upgrade Products - <%-eventAction%>",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-productName%>-<%-operation%>"
                    },
                    UpgradeProductSelectList: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-weight%>"
                    },
                    ProductClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-title%> - <%-position%>"
                    },
                    AreaPincodeSelectionEvent: {
                        event: "clickEvent",
                        eventAction: "Area-Pin Code Section",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-area_details%>-<%-pincode_availablity%>"
                    },
                    AreaPincodeEditAddress: {
                        event: "clickEvent",
                        eventAction: "Area-Pin Code Section",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "Edit"
                    },
                    MoreLinksClick: {
                        event: "clickEvent",
                        eventAction: "Quick Links Section",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-link_name%>"
                    },
                    BuyNow: {
                        event: "clickEvent",
                        eventAction: "Buy Now",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-url%>"
                    },
                    "Add To Cart": {
                        event: "clickEvent",
                        eventAction: "Add To Cart",
                        eventCategory: "Product Details Page",
                        eventLabel: "<%-url%>"
                    },
                    QuickLinksClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-label%>"
                    },
                    LeftSideMenuLinksClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Menu - Mobile - Main",
                        eventLabel: "<%-label%>"
                    },
                    ComboProductsClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Product Details Page- Mobile",
                        eventLabel: "<%-label%>"
                    },
                    QuickLinkShow: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    QuickLinkOpen: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    AreaPinCodeClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    CitySelectInput: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    PageType: {
                        pageType: "<%-type%>"
                    },
                    OnCheckCity: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    OnCategoriesLinkClick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    OnAreaPinCodeValidation: {
                        event: "validations",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    },
                    OnNavigationMenuCick: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    }
                },
                i = {
                    ProductPageType: {
                        pageType: "<%-type%>"
                    },
                    ListPageClickEvent: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-category%>",
                        eventLabel: "<%-label%>"
                    },
                    BannerClickEvent: {
                        event: "clickEvent",
                        eventAction: "Banner",
                        eventCategory: "<%-category%>",
                        eventLabel: "Product Listing Page - Mobile"
                    }
                },
                o = {
                    PageClickEvent: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-category%>",
                        eventLabel: "<%-label%>"
                    }
                },
                c = {
                    RecentlyViewedApp: {
                        event: "clickEvent",
                        eventAction: "<%-action%>",
                        eventCategory: "Recently viewed icon",
                        eventLabel: "<%-label%>"
                    },
                    RecentlyViewedOnProductClick: {
                        event: "clickEvent",
                        eventAction: "Product Click",
                        eventCategory: "Recently viewed icon",
                        eventLabel: "<%-label%>"
                    }
                },
                s = {
                    VirtualPageviewStep1: {
                        event: "VirtualPageview",
                        eventAction: "Step 1 - Login",
                        eventCategory: "Checkout-Digital",
                        eventLabel: "initiated",
                        virtualPageTitle: "Step 1 - Login",
                        virtualPageURL: "/order/step1-login",
                        digitalGiftUser: "digitalGiftUser"
                    },
                    VirtualPageviewStep2: {
                        event: "VirtualPageview",
                        eventAction: "Step 2 - Receiver Details",
                        eventCategory: "Checkout-Digital",
                        eventLabel: "initiated",
                        virtualPageTitle: "Step 2 - Delivery Address",
                        virtualPageURL: "/order/step2-delivery-address"
                    },
                    VirtualPageviewStep3: {
                        event: "VirtualPageview",
                        eventAction: "Step 3 - Delivery Address",
                        eventCategory: "Checkout-Digital",
                        eventLabel: "<%-delivery_date%>",
                        virtualPageTitle: "Step 3 - Delivery Address",
                        virtualPageURL: "/order/step3-delivery-address"
                    },
                    StepEcom: {
                        ecommerce: {
                            event: "checkout",
                            checkout: {
                                actionField: {
                                    action: "checkout",
                                    option: "<%-option%>",
                                    step: "<%-step%>"
                                },
                                "cart-link": ""
                            }
                        }
                    },
                    senderDataPush: {
                        event: "userDataPush",
                        gender: "<%-title%>",
                        userName: "<%-fullName%>",
                        userMobile: "<%-mobileNumber%>",
                        userEmail: "<%-email%>"
                    },
                    receiverDataPush: {
                        event: "receiverUserDetails",
                        receiverGender: "<%-title%>",
                        receiverUserName: "<%-fullName%>",
                        receiverUserMobile: "<%-mobileNumber%>",
                        receiverUserEmail: "<%-email%>"
                    }
                },
                l = {
                    ValidationEventList: {
                        event: "validations",
                        eventAction: "<%-action%>",
                        eventCategory: "<%-eventCategory%>",
                        eventLabel: "<%-eventLabel%>"
                    }
                },
                u = Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({}, r), i), o), c), s), l),
                d = a(41),
                p = new(a(737).a)({
                    loaded: !1
                }),
                h = {
                    scriptIsLoaded: function() {
                        return p.next({
                            loaded: !0
                        })
                    },
                    isLoaded: function() {
                        return p.asObservable()
                    }
                },
                b = a(614),
                f = h,
                m = function(e, t, a) {
                    if (a = a || "dataLayer", !window.hasOwnProperty(a)) return !1;
                    var n = null;
                    if (u.hasOwnProperty(e)) {
                        if (n = Object.assign({}, u[e], {}), t) {
                            n = JSON.stringify(n);
                            var r = b(n);
                            n = JSON.parse(r(t))
                        }
                        if (n) {
                            Object({
                                NODE_ENV: "production",
                                PUBLIC_URL: "https://imgcdn.floweraura.com/ssr-build",
                                WDS_SOCKET_HOST: void 0,
                                WDS_SOCKET_PATH: void 0,
                                WDS_SOCKET_PORT: void 0,
                                FAST_REFRESH: !0,
                                REACT_APP_GTM_ID: "GTM-K23HC7",
                                REACT_APP_GTM_ID_DEV: "GTM-PXT36NR",
                                REACT_APP_AWS_POST_API_ENDPOINT: "https://post-apis.floweraura.com",
                                REACT_APP_AWS_POST_API_KEY: "kOXd44wIsx7ViR6gYpw046TjhYvSoFtd42Z7TF6N",
                                REACT_APP_JQUERY_PATH: "https://img.floweraura.com/sites/all/modules/jquery_update/replace/jquery/1.7/jquery.min.js",
                                REACT_APP_QUICK_LINKS_JS_PATH: "/sites/all/themes/skeletontheme/js/quick-links.js",
                                REACT_APP_GA_ID_DEV: "UA-124749434-1",
                                REACT_APP_FACEBOOK_ID: "1420586741537528",
                                REACT_APP_GA_ID: "UA-18681439-1",
                                REACT_APP_GTM_DATALAYER_NAME: "dataLayer",
                                REACT_APP_PRODUCTION_DOMAINS: "m.floweraura.com|www.floweraura.com|floweraura.com",
                                REACT_APP_SSR_BUILD: "true"
                            }).REACT_APP_GTM_DATALAYER_DEBUG && (console.log(n), console.log(window.dataLayer))
                        }
                    }
                },
                g = function() {
                    var e = Object(d.g)() ? "GTM-K23HC7" : "GTM-PXT36NR";
                    if (e) {
                        h.scriptIsLoaded()
                    }
                },
                j = function(e) {
                    return m("ProductPageView", {
                        id: e.sku,
                        title: e.title,
                        price: e.price,
                        quantity: 1,
                        variant: "",
                        product_url: window.location.href,
                        image_url: e.fullSizeImages && e.fullSizeImages[0],
                        category: e.type
                    })
                }
        },
        143: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    a = null === t ? window.location.search : t,
                    n = 0;
                if ("" === a) return n;
                for (var r = (a = a.substring(1)).split("&"), i = 0; i < r.length; i++) {
                    var o = r[i].split("=");
                    if (o[0] === e) {
                        n = o[1];
                        break
                    }
                }
                return n
            }
        },
        168: function(e, t, a) {
            "use strict";
            a.d(t, "f", (function() {
                return h
            })), a.d(t, "e", (function() {
                return b
            })), a.d(t, "b", (function() {
                return f
            })), a.d(t, "d", (function() {
                return g
            })), a.d(t, "c", (function() {
                return j
            })), a.d(t, "a", (function() {
                return O
            })), a.d(t, "g", (function() {
                return v
            }));
            var n = a(4),
                r = a(17),
                i = a(2),
                o = a(175),
                c = a(176),
                s = a(36),
                l = a(40),
                u = function(e) {
                    return {
                        type: n.hb,
                        status: e
                    }
                },
                d = function(e) {
                    return function(t) {
                        return t({
                            type: n.I,
                            value: e
                        })
                    }
                },
                p = function(e) {
                    return {
                        type: n.db,
                        data: e
                    }
                },
                h = function(e) {
                    return function(t) {
                        return t({
                            type: n.B,
                            data: e
                        }), Promise.resolve(e)
                    }
                },
                b = function(e) {
                    return function(t) {
                        return t({
                            type: n.ib,
                            status: e
                        }), Promise.resolve(e)
                    }
                },
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(a) {
                        return new Promise((function(n, o) {
                            t.page && (t.current_page = parseInt(t.current_page) || 1, delete t.page), t.current_page && +t.current_page < 1 && (t.current_page = 1);
                            var c = {
                                params: t
                            };
                            return a(u(!0)), r.d.get("/api/floweraura".concat(e), c).then((function(t) {
                                var r = t.data;
                                if (!Object(i.a)(r.status_code)) {
                                    var o = +r.status_code;
                                    a(Object(s.g)(o)), 301 !== o && 302 !== o || a(Object(s.f)(r.data.url)), 200 === o && (e.includes("giftfinder") && (r.data.content = {}, r.data.settings = {}), v(r, a)), Object(i.a)(r.data.results) && 0 === (r.data.results && r.data.results.length) ? a(m()) : a(d(!1))
                                }
                                a(u(!1)), n(r)
                            })).catch((function(e) {
                                o(e), a(u(!1))
                            }))
                        }))
                    }
                },
                m = function() {
                    return function(e) {
                        return r.d.get("/api/floweraura/best-seller").then((function(t) {
                            var a = t.data;
                            if (!Object(i.a)(a.status_code)) {
                                var n = +a.status_code;
                                e(Object(s.g)(n)), 301 !== n && 302 !== n || e(Object(s.f)(a.data.url)), 200 === n && v(a, e), e(d(!0))
                            }
                        })).catch((function(t) {
                            console.log("Error", t), e(d(!1))
                        }))
                    }
                },
                g = function(e) {
                    return function(t) {
                        if (Object(i.a)(e)) return !1;
                        var a = {
                                "cake-delivery": "cake",
                                sendflowers: "flower",
                                plants: "plant"
                            },
                            n = e.split("/"),
                            s = {},
                            l = "";
                        if (n[1] in a)
                            if (n > 2) {
                                var u = n[2].replace("-", " ");
                                l = "city/".concat(a[n[1]], "/").concat(n[2]), s.reviewUrl = "reviews/c/".concat(n[2]), s.reviewTitle = "Floweaura Reviews For Flowers Delivery in ".concat(u.toUpperCase())
                            } else l = "city/".concat(a[n[1]], "/-");
                        else if (e === "/flowers/occasion/".concat(n[3])) {
                            var d = n[3].replace("-", " ");
                            l = "occasion/".concat(n[3], "/-"), s.reviewUrl = "reviews", s.reviewTitle = "Floweaura Reviews for ".concat(d.toUpperCase(), " Flowers")
                        } else l = "product-list/-/-";
                        return new Promise((function(e, a) {
                            return r.f.get("api/get-view-footer-info/".concat(l)).then((function(a) {
                                var n = a.data.result,
                                    r = n.status,
                                    i = n.review_data,
                                    l = n.footer_links;
                                !0 === r && (t(Object(c.a)(l)), i && t(Object(o.a)(i, s))), e({
                                    status: r,
                                    review_data: i,
                                    footer_links: l
                                })
                            })).catch((function(e) {
                                a(e)
                            }))
                        }))
                    }
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return function(t) {
                        return new Promise((function(a, n) {
                            return r.c.get("api/floweraura/quicklinks".concat(e)).then((function(e) {
                                if (200 === e.status && !1 === e.data.error) {
                                    var n = e.data.data;
                                    t(Object(c.a)(n))
                                }
                                a()
                            })).catch((function(e) {
                                n(e)
                            }))
                        }))
                    }
                },
                O = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(a) {
                        return new Promise((function(n, o) {
                            var c = {
                                    params: t
                                },
                                s = null;
                            return s = e.includes("giftfinder") ? "/api/floweraura/fa/giftfinder/filters" : "/api/floweraura/filters".concat(e), r.d.get(s, c).then((function(e) {
                                e.data && !Object(i.a)(e.data.data) && 200 === +e.data.status_code && a(p(e.data.data)), n()
                            })).catch((function(e) {
                                o(e)
                            }))
                        }))
                    }
                },
                v = function(e, t) {
                    t(function(e) {
                        return {
                            type: n.Xb,
                            data: e
                        }
                    }(e)), Object(i.a)(e.data.settings.plant_end_time) || t(Object(l.d)(e.data.settings.plant_end_time))
                }
        },
        17: function(e, t, a) {
            "use strict";
            a.d(t, "f", (function() {
                return c
            })), a.d(t, "a", (function() {
                return s
            })), a.d(t, "b", (function() {
                return l
            })), a.d(t, "d", (function() {
                return u
            })), a.d(t, "c", (function() {
                return d
            })), a.d(t, "e", (function() {
                return p
            }));
            var n = a(240),
                r = a.n(n),
                i = a(6);
            r.a.polyfill();
            var o = a(236),
                c = o.create({
                    baseURL: i.c
                }),
                s = o.create({
                    baseURL: i.a
                }),
                l = o.create({
                    baseURL: i.c
                }),
                u = (o.create({
                    baseURL: i.c
                }), o.create({
                    baseURL: i.b
                })),
                d = o.create({
                    baseURL: i.y
                }),
                p = o.create({
                    baseURL: i.B
                })
        },
        172: function(e, t, a) {
            "use strict";
            var n = a(25),
                r = a(26),
                i = a(68),
                o = a(34),
                c = a(35),
                s = a(3),
                l = a(30),
                u = a(42),
                d = a.n(u),
                p = {
                    content: {
                        top: "32px",
                        left: "7px",
                        right: "7px",
                        bottom: "auto",
                        padding: "0px",
                        border: "0"
                    }
                },
                h = (a(617), a(7)),
                b = a(11),
                f = a.n(b),
                m = a(13),
                g = a(144),
                j = a.n(g),
                O = (a(235), a(101)),
                v = a(6),
                y = a(0),
                _ = f()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(19)]).then(a.bind(null, 716))
                    },
                    modules: ["./CityList"],
                    webpack: function() {
                        return [716]
                    },
                    loading: m.a
                }),
                C = f()({
                    loader: function() {
                        return a.e(14).then(a.bind(null, 690))
                    },
                    modules: ["./AvailableCategory"],
                    webpack: function() {
                        return [690]
                    },
                    loading: m.a
                });
            d.a.setAppElement("#flowerauraReactApp");
            var w = function(e) {
                Object(o.a)(a, e);
                var t = Object(c.a)(a);

                function a(e) {
                    var r;
                    return Object(n.a)(this, a), (r = t.call(this, e)).splitPathNameForProductPage = function() {
                        return window.location.pathname.split("/")[1]
                    }, r._handleUserSelectCityForPopUp = function() {
                        void 0 === h.a.get("user_select_city") && h.a.set("user_select_city", "", 10, v.f)
                    }, r._pageReloadWhileCityChange = function() {
                        var e = window.location.pathname.split("/");
                        if (e.length > 0 && "p" !== e[1]) return r.props.toggleCategoryDivStatus(!0, !1), !0
                    }, r.callbackFunction = function(e) {
                        r.setState({
                            citySearchForBottomSlider: e
                        })
                    }, r.afterOpenModal = function() {
                        r.props.location.pathname.includes("giftfinder") ? r.props.history.push("".concat(r.props.location.pathname).concat(r.props.location.search), {
                            isCityPopUpOpened: !0
                        }) : r.props.history.push(r.props.location.pathname, {
                            isCityPopUpOpened: !0
                        })
                    }, r.state = {
                        citySearchForBottomSlider: !0
                    }, r.openCityMenuModal = r.openCityMenuModal.bind(Object(i.a)(r)), r.closeCityMenuModal = r.closeCityMenuModal.bind(Object(i.a)(r)), r
                }
                return Object(r.a)(a, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this;
                        this.props.history.listen((function(t) {
                            "POP" === e.props.history.action && e.closeCityMenuModal()
                        }))
                    }
                }, {
                    key: "openCityMenuModal",
                    value: function() {
                        this.setState({
                            modalIsOpen: !0
                        })
                    }
                }, {
                    key: "closeCityMenuModal",
                    value: function(e) {
                        this._handleUserSelectCityForPopUp(), "p" === this.splitPathNameForProductPage(window.location.pathname) ? this.props.onCloseCityModal && this.props.onCloseCityModal() : "pickedCity" === e ? this._pageReloadWhileCityChange() : this.props.onCloseCityModal && this.props.onCloseCityModal()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return Object(y.jsx)("div", {
                            children: "false" !== this.props.isMobileReq && this.props.isCityModalOpenProps ? Object(y.jsx)("div", {
                                children: Object(y.jsx)(j.a, {
                                    from: "bottom",
                                    width: "100%",
                                    overlayClassName: "overlay_slider",
                                    isOpen: this.props.isCityModalOpenProps,
                                    onAfterOpen: this.afterOpenModal,
                                    onRequestClose: this.closeCityMenuModal,
                                    style: p,
                                    className: this.state.citySearchForBottomSlider || this.props.onlyCityListShow ? "".concat(this.props.cityModalOpenFrom, " bottomSlidePane slide-pane_bottom") : "".concat(this.props.cityModalOpenFrom),
                                    contentLabel: "all_city_popup_list",
                                    children: !1 === this.props.showCategoryDiv ? Object(y.jsx)(_, {
                                        parentCallback: this.callbackFunction,
                                        setUserPickedCity: this.props.setUserPickedCity,
                                        setUserPickedState: this.props.setUserPickedState,
                                        allcitiesList: this.props.cityPopupData,
                                        closeMainModal: this.closeCityMenuModal,
                                        isInternational: this.props.isInternational,
                                        cityModalOpenFrom: this.props.cityModalOpenFrom,
                                        isMobileReq: this.props.isMobileReq
                                    }) : Object(y.jsx)(C, {
                                        toggleCategoryDivStatus: this.props.toggleCategoryDivStatus,
                                        showCategoryDiv: this.props.showCategoryDiv,
                                        setUserPickedCity: this.props.setUserPickedCity,
                                        setUserPickedState: this.props.setUserPickedState,
                                        allcitiesList: this.props.cityPopupData,
                                        isInternational: this.props.isInternational,
                                        cityModalOpenFrom: this.props.cityModalOpenFrom,
                                        lockdownCities: this.props.lockdownCities
                                    })
                                })
                            }) : Object(y.jsx)(d.a, {
                                isOpen: this.props.isCityModalOpenProps,
                                onAfterOpen: this.afterOpenModal,
                                onRequestClose: this.closeCityMenuModal,
                                style: p,
                                className: this.props.cityModalOpenFrom,
                                contentLabel: "all_city_popup_list",
                                parentCallback: this.callbackFunction,
                                shouldCloseOnOverlayClick: !1,
                                children: !1 === this.props.showCategoryDiv ? Object(y.jsx)(_, {
                                    setUserPickedCity: this.props.setUserPickedCity,
                                    setUserPickedState: this.props.setUserPickedState,
                                    allcitiesList: this.props.cityPopupData,
                                    closeMainModal: this.closeCityMenuModal,
                                    isInternational: this.props.isInternational,
                                    cityModalOpenFrom: this.props.cityModalOpenFrom,
                                    isMobileReq: this.props.isMobileReq
                                }) : Object(y.jsx)(C, {
                                    toggleCategoryDivStatus: this.props.toggleCategoryDivStatus,
                                    showCategoryDiv: this.props.showCategoryDiv,
                                    setUserPickedCity: this.props.setUserPickedCity,
                                    setUserPickedState: this.props.setUserPickedState,
                                    allcitiesList: this.props.cityPopupData,
                                    isInternational: this.props.isInternational,
                                    cityModalOpenFrom: this.props.cityModalOpenFrom,
                                    lockdownCities: this.props.lockdownCities
                                })
                            })
                        })
                    }
                }]), a
            }(s.Component);
            t.a = Object(l.c)((function(e) {
                return {
                    isMobileReq: e.pageData.isMobile
                }
            }))(Object(O.h)(w))
        },
        175: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(4),
                r = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(a) {
                        return a({
                            type: n.zb,
                            reviewData: e,
                            settings: t
                        })
                    }
                }
        },
        176: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(4),
                r = function(e) {
                    return function(t) {
                        return t({
                            type: n.Bb,
                            quickLinks: e
                        })
                    }
                }
        },
        179: function(e, t, a) {
            "use strict";
            t.a = function(e, t) {
                var a;
                return function() {
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    var o = this;
                    a && clearTimeout(a), a = setTimeout((function() {
                        a = null, e.apply(o, r)
                    }), t)
                }
            }
        },
        180: function(e, t, a) {
            "use strict";
            a(3), a(597);
            var n = a(0);
            t.a = function(e) {
                return Object(n.jsx)("div", {
                    className: "loaderIcon",
                    children: Object(n.jsx)("span", {})
                })
            }
        },
        181: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var n = function(e, t) {
                window && window.webengage && window.webengage.track(e, t)
            }
        },
        182: function(e, t, a) {
            "use strict";
            a.d(t, "e", (function() {
                return h
            })), a.d(t, "f", (function() {
                return b
            })), a.d(t, "g", (function() {
                return f
            })), a.d(t, "i", (function() {
                return m
            })), a.d(t, "j", (function() {
                return g
            })), a.d(t, "h", (function() {
                return j
            })), a.d(t, "b", (function() {
                return O
            })), a.d(t, "c", (function() {
                return v
            })), a.d(t, "k", (function() {
                return y
            })), a.d(t, "l", (function() {
                return _
            })), a.d(t, "a", (function() {
                return C
            })), a.d(t, "d", (function() {
                return w
            }));
            var n = a(1),
                r = {
                    setSelectedCity: null,
                    formatted_address: {}
                },
                i = a(184),
                o = a(7),
                c = a(4),
                s = a(17),
                l = a(2),
                u = a(80),
                d = a(6),
                p = function(e) {
                    if ("addToCart" !== e) return window.location = "".concat(d.e), window.location
                },
                h = function(e) {
                    return function(t) {
                        return t({
                            type: c.a,
                            addon: e
                        })
                    }
                },
                b = function(e) {
                    return function(t) {
                        return t({
                            type: c.y,
                            addonId: e
                        })
                    }
                },
                f = function(e, t, a, n) {
                    return function(r) {
                        return r({
                            type: c.G,
                            payload: {
                                attributeId: e,
                                attributeValue: t,
                                attributeDisplay: a,
                                attributeName: n
                            }
                        })
                    }
                },
                m = function(e) {
                    return function(t) {
                        return t({
                            type: c.A,
                            payload: {
                                productAttribute: e
                            }
                        })
                    }
                },
                g = function(e, t) {
                    return function(a) {
                        return a({
                            type: c.H,
                            payload: {
                                attributeId: e,
                                error: t
                            }
                        })
                    }
                },
                j = function(e) {
                    return {
                        type: c.z,
                        payload: {
                            attributeId: e
                        }
                    }
                },
                O = function(e) {
                    return {
                        type: c.c,
                        showCityStatus: e
                    }
                },
                v = function(e) {
                    return {
                        type: c.d,
                        isLockDown: e
                    }
                },
                y = function(e, t) {
                    return {
                        type: c.Hb,
                        selectedCandlesPrice: t,
                        birthdayNumber: e
                    }
                },
                _ = function(e) {
                    return {
                        type: c.Ib,
                        selectedOccsion: e
                    }
                },
                C = function(e, t, a, c, h) {
                    var b = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
                        f = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "",
                        m = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "";
                    return function(g) {
                        var j = {},
                            O = {},
                            v = {},
                            y = {};
                        t.length > 0 && Object.keys(t).map((function(e) {
                            if (3 === +t[e].attributeDisplay) j["product_attributes[".concat(+t[e].attributeId, "]")] = t[e].attributeValue;
                            else 15 === +t[e].attributeId || 16 === +t[e].attributeId ? j["product_attribute[".concat(+t[e].attributeId, "]")] = encodeURIComponent(t[e].attributeValue) : j["product_attribute[".concat(+t[e].attributeId, "]")] = t[e].attributeValue;
                            return ""
                        })), a.length > 0 && Object.keys(a).map((function(e) {
                            return O["product_addons[".concat(+a[e].nid, "]")] = +a[e].nid, ""
                        })), !Object(l.a)(f) && f.length > 0 && (v = {
                            addon_age: f
                        }), Object(l.a)(m) || (y = {
                            addon_occasion: m
                        });
                        var _ = Object(n.a)(Object(n.a)(Object(n.a)(Object(n.a)({
                            nid: e,
                            combo_nid: -1
                        }, j), O), v), y);
                        c && c.store_pincode && (_.store_pincode = !0);
                        var C = {
                            withCredentials: !0
                        };
                        return o.a.get("fact") && (C = {
                            headers: {
                                fact: o.a.get("fact")
                            },
                            withCredentials: !0
                        }), b ? s.d.post("api/fa/facart/add", u.a.get(_), Object(n.a)({}, C)).then((function(e) {
                            var t = e.data,
                                a = t.data.fact,
                                n = t.error,
                                s = t.success;
                            if (!n && s) {
                                a && o.a.set("fact", a, 7, d.f), c && i.a.set("faSelectedPlace", c), r.setSelectedCity && o.a.set("user_select_city", r.setSelectedCity, 10, d.f);
                                var u = document.getElementById("user-selected-city-input");
                                null !== u && (u.value = r.setSelectedCity), !e.data.status || 1 !== e.data.is_digital_cart && !0 !== e.data.is_digital_cart || Object(l.a)(e.data.primary_email) || o.a.set("digital_checkout_email", e.data.primary_email, 10, d.f), p(h)
                            }
                        })).catch((function(e) {
                            console.log("There is something went wrong. Please try again or refresh the page", e)
                        })) : s.b.post("fa/add-to-cart/product-api", u.a.get(_)).then((function(e) {
                            if (e.data.status) {
                                c && i.a.set("faSelectedPlace", c), r.setSelectedCity && o.a.set("user_select_city", r.setSelectedCity, 10, d.f);
                                var t = document.getElementById("user-selected-city-input");
                                null !== t && (t.value = r.setSelectedCity)
                            }!e.data.status || 1 !== e.data.is_digital_cart && !0 !== e.data.is_digital_cart || Object(l.a)(e.data.primary_email) || o.a.set("digital_checkout_email", e.data.primary_email, 10, d.f), p(h)
                        })).catch((function(e) {
                            console.log("There is something went wrong. Please try again or refresh the page", e)
                        }))
                    }
                },
                w = function() {
                    return function(e) {
                        return new Promise((function(t, a) {
                            s.d.get("/api/floweraura/getocassions").then((function(a) {
                                var n, r = a.data;
                                Object(l.a)(r.data) || 200 !== r.status_code || e((n = r.data, {
                                    type: c.nb,
                                    occasionList: n
                                })), t(r)
                            })).catch((function(e) {
                                console.log("Something went wrong while fetching Occasion List"), a(e)
                            }))
                        }))
                    }
                }
        },
        183: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            })), a.d(t, "b", (function() {
                return i
            })), a.d(t, "c", (function() {
                return o
            }));
            var n = a(7),
                r = function(e, t) {
                    var a = "",
                        r = "product_referer_value";
                    switch (e) {
                        case "read":
                            a = n.a.get(r);
                            break;
                        case "write":
                            a = n.a.set(r, t, 1, window.location.hostname);
                            break;
                        case "delete":
                            a = n.a.set(r, null, -1, window.location.hostname);
                            break;
                        default:
                            return n.a.get(r)
                    }
                    return a
                },
                i = function(e, t) {
                    n.a.set("clicked_from", e, {
                        path: "/",
                        domain: window.location.hostname,
                        expires: 1
                    }), n.a.set("product_referer", window.location.href, {
                        path: "/",
                        domain: window.location.hostname,
                        expires: 1
                    }), n.a.set("product_clicked_position", t, {
                        path: "/",
                        domain: window.location.hostname,
                        expires: 1
                    })
                },
                o = function(e) {
                    e && n.a.set("referered_nid", e, {
                        path: "/",
                        domain: window.location.hostname,
                        expires: 1
                    })
                }
        },
        184: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return c
            }));
            var n = a(26),
                r = a(25),
                i = a(173),
                o = a.n(i),
                c = Object(n.a)((function e() {
                    Object(r.a)(this, e)
                }));
            c.set = function(e, t) {
                o.a.set(e, t)
            }, c.get = function(e) {
                return o.a.get(e)
            }, c.remove = function(e) {
                o.a.remove(e)
            }
        },
        2: function(e, t, a) {
            "use strict";
            t.a = function(e) {
                return void 0 === e || null === e || "null" === e || "object" === typeof e && 0 === Object.keys(e).length || "string" === typeof e && 0 === e.trim().length
            }
        },
        224: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            })), a.d(t, "b", (function() {
                return l
            }));
            var n = a(4),
                r = a(36),
                i = a(17),
                o = a(2),
                c = function(e) {
                    return {
                        type: n.V,
                        fetchingCategoryProducts: e
                    }
                },
                s = function(e) {
                    return function(t) {
                        return new Promise((function(a, n) {
                            return t(c(!0)), e = function(e) {
                                return [""].includes(e) || ("/" === e && (e += "home"), e += "/landing-page"), e
                            }(e), Object(i.d)("/api/floweraura".concat(e)).then((function(e) {
                                t(c(!1));
                                var i = e.data;
                                if (Object(o.a)(i)) n("Landing page api is not working");
                                else {
                                    var s = Object(o.a)(i.status_code) ? 500 : +i.status_code;
                                    t(Object(r.g)(s)), 301 !== s && 302 !== s || t(Object(r.f)(i.url)), 200 === s && l(i, t), a(!0)
                                }
                            })).catch((function(e) {
                                t(c(!1)), console.log("Error found while fetching products", e)
                            }))
                        }))
                    }
                },
                l = function(e, t) {
                    var a;
                    t((a = e.data, {
                        type: n.U,
                        categoryProducts: a
                    }))
                }
        },
        226: function(e) {
            e.exports = JSON.parse('{"data":[{"name":"Gurgaon","id":32,"cities":["Gurgaon","Gurugram","Gurgaon Rural"]},{"name":"Delhi","id":23,"cities":["Delhi","Faridabad","Ghaziabad","Noida","Greater Noida"]},{"name":"Bangalore","id":10,"cities":["Bangalore","Chandigarh","Hyderabad","Jaipur","Lucknow","Mohali","Mumbai","Navi Mumbai","Panchkula","Thane"]},{"name":"Pune","id":76,"cities":["Agra","Ahmedabad","Allahabad","Amritsar","Aurangabad","Bhopal","Bhubaneswar","Chennai","Coimbatore","Dehradun","Guwahati","Howrah","Indore","Jabalpur","Jalandhar","Jamshedpur","Kanpur","Kharar","Kolkata","Ludhiana","Meerut","Mysore","Nagpur","Patiala","Patna","Pune","Ranchi","Secunderabad","Surat","Udaipur","Vadodara","Varanasi","Zirakpur","Manesar","Bareilly","Gorakhpur","Kashipur","Visakhapatnam","Nashik","Kochi"]},{"name":"Kota","id":51,"cities":["Amravati","Gandhinagar","Gwalior","Jammu","Karnal","Kolhapur","Kota","Mangalore","Panipat","Phagwara","Raipur","Rajkot","Rajpura","Solan","Trivandrum","Vijayawada","Hooghly","Hisar","Haridwar","Ajmer","Dhanbad","Ujjain","Cochin","Khanna","Moga","Jodhpur","Bhiwadi","Rohtak","Hapur","Pathankot","Yavatmal","Jhansi","Durgapur","Asansol","Raniganj","Barabanki","Ernakulam","Gaya","Dharuhera","Nabha","Jatni"]},{"name":"Akola","id":3,"cities":["Siliguri","Aligarh","Ambala","Baroda","Bhavnagar","Bhilai","Calicut","Cuttack","Dera Bassi","Durg","Firozabad","Goa","Guntur","Kalka","Kapurthala","Manipal","Margao (Goa)","Mathura","Moradabad","Nagercoil","Panaji","Panvel","Pondicherry","Roorkee","Sahibabad","Salem","Shimla","Solapur","Sonipat","Tarn Taran","Vasco (Goa)","Vellore","Vidyanagar","Vizag","Kanchipuram","Chengalpattu","Navalur","Ambarnath","Mobor","Ropar","Bikaner","Hubli","Hoshiarpur","Saharanpur","Mapusa (Goa)","Kurukshetra","Rewari","Bathinda","Udupi","Alwar","Goraya","Fatehgarh Sahib","Adampur","Sambalpur","Siliguri","Muzaffarnagar","Bhiwani","Yamunanagar","Nanded","Bhagalpur","Bilaspur","Korba","Raigarh","Rourkela","Rudrapur","Haldwani","Jalgaon","Trichy","Ooty","Rishikesh","Vapi","Raebareli","Modinagar","Muradnagar","Anand","Parbhani","Jalna","Latur","Sangamner","Akole","Sinnar","Shrirampur","Bhuj","Gandhidham","Ahmednagar","Jharsuguda","Bokaro","Erode","Sangli","Jamnagar","Belgaum","Gurdaspur","Deoghar","Ambikapur","Sangrur","Singrauli","Waidhan","Sikar","Rampur","Budaun","Pilibhit","Faizabad","Begusarai","kharagpur","Darbhanga","Medinipur","Bharatpur","Beawar","Hosur","Cooch Behar","Muzaffarpur","North Goa","South Goa","Amroha","Bahadurgarh","Bhiwandi","Dahegam","Datia","Dewas","Dinara","Fatehgarh Churian","Karera","Kollam","Kottayam","Medak","Nadiad","Nawanshahr","Orchha","Pinjore","Rajnandgaon","Reasi","Sehore","Sholinghur","Udhampur","Unnao","Vallabh Vidyanagar","Wardha","Vangal","Bodh-gaya","Satna","Katihar","Brahmapur","Chhindwara","Bhilwara","Shahjahanpur","Jallandhar","Kakinada","Madurai","Hazaribagh","Mehsana","Anakapalle","Dibrugarh","Gulbarga","Lonavala","Mandi","Rajahmundry","Puri","Sagar","Hassan","Warangal","Ambattur","Kozhikode","Srinagar","Arrah","Dharamshala","Kangra","Avadi","Badlapur","Abohar","Achalpur","Adilabad","Tenali","Adoni","Agartala","Aizawl","Alappuzha","Aliganj","Anantnag","Bongaigaon","Jaunpur","Barmer","Canacona","Bundi","Chandrapur","Amaravathi","Thiruvananthapuram","Daman and Diu","Darjeeling","Davanagere","Gopalpur","Gudivada","Guna","Guntakal","Hajipur","Dindigul","Dimapur","Dungarpur","Dharmavaram","Dhule","Dwarka","Eluru","Nalgonda","Khammam","Kodad","Miryalaguda","Suryapet","Huzurnagar","Valsad","Faridkot","Farrukhabad","Fatehabad","Firozpur","Gandevi","Gondia","Ratlam","Anantapur","Bulandshahr","Chhatarpur","Chittorgarh","Chittoor","Cuddalore","Etawah","Bharuch","Shikohabad","Jorhat","Ramnagar","Lakhimpur","Navsari","Ambajogai","Ulhasnagar","Ambernath","Raikot","Kaithal","Mandi Gobindgarh","Palanpur","Sirsa","Tirupati","Baramati","Satara","Narasaraopet","Jaisalmer","Baddi","Mandsaur","Khurja","Barnala","Vijayapura","Morbi","Ankleshwar","Palia Kalan","Tarapur","Sitamarhi","Hardoi","Sitapur","Azamgarh","Fazilka","Jhunjhunu","Khandwa","Ballia","Karimnagar","Katni","Sri Muktsar Sahib","Junagadh","Shikrapur","Tonk","Sri Ganganagar","Sawai Madhopur","Balaghat","Buxar","Batala","Chapra","Dhampur","Samana","Bahraich","Kotdwar","Hathras","Haldia","Shamli","Mainpuri","Etah","Gonda","Akbarpur","Mau","Najibabad","Mansa","Motihari","Malerkotla","Ambasamudram","Tirunelveli","Maharajganj","Balasore","Jagdalpur","Pudukkottai","Basti","Ballari","Deoria","Ghazipur","Ramgarh Cantonment","Jind","Bhawanipatna","Rewa","Betul","Jhajjar","Narnaul","Godhra","Hanumangarh","Bardoli","Seohara","Noorpur","Haldaur","Afzalgarh","Nagina","Bijapur","Rath","Sultanpur","Sundergarh","Vidisha","Jetpur","Gondal","Neemrana","Narwana","Gohana","Tohana","Jaspur","Khatima","Kichha","Paonta Sahib","Nahan","Tiruppur","Burhanpur","Bhind","Shivpuri","Khargone","Udumalaipettai","Udgir","Hoshangabad","Hinganghat","Barshi","Jalalabad","Banda","Naraingarh","Mughalsarai","Mirzapur","Sunam","Baripada","Bhadrak","Barbil","Nakodar","Kartarpur","Sirhind","Banswara","Nawalgarh","Jhalawar","Nagaur","Rajsamand","Dholpur","Baran","Gadarpur","Porbandar","Veraval","Puranpur","Vizianagaram","Patan","Wankaner","Gozaria","Vijapur","Visnagar","Kheda","Rajpipla","Bilimora","Valanchery","Mahasamund","Ongole","Shivamogga","Tumakuru","Bidar","Chikmagalur","Hosapete","Raichur","Hampi","Madikeri","Karwar","Chakdaha","Bolpur","Berhampore","Kalimpong","Bardhaman","Malda","Kalyani","Raiganj","Bankura","Krishnanagar","Kurseong","Jhargram","Ranaghat","Pratapgarh","Churu","Nellore","Una","Giddalur","Nayagarh","Bolagarh","Thiruvallur","Washim","Kavali","Malegaon","Kurnool","Machilipatnam","Kadapa","Nandyala","Nizamabad","Paradeep","Vikarabad","Mancherial","Newasa","Guruvayur","Ranipet","Sahibganj","Viluppuram","Ratnagiri","Osmanabad","Beed","Alibag","Shirdi","Rahata","Manmad","Amalner","Bhusawal","Palghar","Bina","Joginder Nagar","Tenkasi","Saifai","Biaora","Palakkad","Kathua","Bijnor","Silchar","Umargam","Banga","Sasaram","Munger","Unjha","Becharaji","Thanjavur","Purnia","Samastipur","Bettiah","Bagalkot","Midnapore","Thrissur","Kishangarh","Shillong","Fatehpur","Laxmangarh","Mukundgarh","Shrimadhopur","Bhuntar","Himatnagar","Pilani","Saharsa","Thoothukudi","Tanda","Ramagundam","Siwan","Supaul","Sujangarh","Sidhi","Safidon","Jagtial","Kamareddy","Pipariya","Gopalganj","Srikakulam","Uttarkashi","Bhimavaram","Qadian","Panna","Mandya","Madhepura","Kotputli","Dhuri","Port Blair","Kochin","Akot","Ranebennur","Sherpur","Dalhousie","Behror","Rajgarh","Ramgarh","Suratgarh","Nasirabad","Palampur","Kagaznagar","Manali","Kullu","Fatehnagar","Ratangarh","Sadulpur","Bihar Sharif","Gumla","Giridih","Dumka","Daltonganj","Lohardaga","Chakradharpur","Moonak","Dhar","Kolar","Madanapalle","Budhana","Auraiya","Jalaun","Nagaon","Orai","Navapur","Palwal","Nuh","Chhota-Udepur","Botad","Dasuya","Kanhangad","Garhdiwala","Pali","Jagraon","Siddipet","Jhumri telaiya","Koderma","Ganaur","Butibori","Mukerian","Nainital","Rairangpur","Bhim","Kekri","Gulabpura","Sundar Nagar","Nurpur","Coonoor","Kotagiri","Ketty","Ichalkaranji","Vikasnagar","Thakurdwara","Tumsar","Jansath","Hamirpur","Makrana","Kairana","Jehanabad","Baraut","Jalore","Ranpur","Dahod","Bhandara","Dombivali","Ajitwal","Karur","Kumbakonam","Sambhal","Chirawa","Ashoknagar","Rajouri","Tezpur","Pattukkottai","Samrala","Piduguralla","Ibrahimpatnam","Vadakara","Naggar","Chakan","Naugawan Sadat","Kayamkulam","Theni","Sultanpur Lodhi","Ramtek","Bhadohi","Tindivanam","Chaibasa","Mundra","Hojai","Barwala","Kala Amb","Raipur Rani","Kopargaon","Rahuri","Assandh","Jaysingpur","Shirol","Salasar","Mahendragarh","Barara","Armur","Chitrakoot","Dharmanagar","Habra","Itarsi","Jamalpur","Kasganj","Nirmal","Khariar Road","Nuapada","Harihar","Kumarghat","Karimganj","Gannavaram","Proddatur","Phalodi","Balotra","Mount Abu","Abu Road","Kovilpatti","Garhwa","Santalpur","Golaghat","Godda","Malappuram","Palani","Kushinagar","Fatehpur Shekhawati","Ambaliyasan","Radhanpur","Chikodi","Satnali","Nangal","Charkhi Dadri","Runnisaidpur","Madhupur","Chatra","Pakur","Latehar","Simdega","Patratu","Chhipadohar","Contai","Lehragaga","Budhlada","Cheeka","Kamrej","Malout","Muvattupuzha","Alipurduar","Thuraiyur","Sultan Bathery","Kailashahar","Kodungallur","Punalur","Vadgaon","Peth-Vadgaon","Adimali","Savli","Nipani","Bhanvad","Nanpara","Pithoragarh","Sirsi","Phoolpur","Imphal","Cherthala","Dhuliyan","Kangeyam","Rayagada","Wai","Anchal","Kilimanoor","Panchgani","Attingal","Ramachandrapuram","Mahabaleshwar","Angul","Kasauli","Amalapuram","Talwara","Gidderbaha","Goindwal Sahib","Forbesganj","Metpally","Chabal Kalan","Sankeshwar","Patti","Mehta Chowk","Kagal","Iglas","Kurali","Mahbubnagar","Almora","Ranikhet","Bageshwar","Sardarshahar","Joshimath","Modasa","Kannur","Kadi","Pathanamthitta"]}]}')
        },
        230: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(6),
                r = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = "";
                    return e.includes(" ") && (e = encodeURI(e)), t && a ? (r += "".concat(e, "?tr=w-").concat(t, ",h-").concat(a, ",q-").concat(n.r, " 1x"), r += ",".concat(e, "?tr=w-").concat(t, ",h-").concat(a, ",dpr-1.5,q-").concat(n.r, " 1.5x"), r += ",".concat(e, "?tr=w-").concat(t, ",h-").concat(a, ",dpr-2,q-").concat(n.r, " 2x")) : t ? (r += "".concat(e, "?tr=w-").concat(t, ",q-").concat(n.r, " 1x"), r += ",".concat(e, "?tr=w-").concat(t, ",dpr-1.5,q-").concat(n.r, " 1.5x"), r += ",".concat(e, "?tr=w-").concat(t, ",dpr-2,q-").concat(n.r, " 2x")) : a && (r += "".concat(e, "?tr=h-").concat(a, ",q-").concat(n.r, " 1x"), r += ",".concat(e, "?tr=h-").concat(a, ",dpr-1.5,q-").concat(n.r, " 1.5x"), r += ",".concat(e, "?tr=h-").concat(a, ",dpr-2,q-").concat(n.r, " 2x")), r
                }
        },
        232: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return l
            }));
            var n = a(1),
                r = a(4),
                i = a(17),
                o = a(2),
                c = a(36),
                s = function(e) {
                    return Object(n.a)({
                        type: r.F
                    }, e)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return function(a) {
                        var n = "",
                            r = "";
                        return Object(o.a)(t.category) || (n = t.category.toLowerCase()), r = -1 !== e.search("corporate") || "corporate" === n ? n || "corporate" : window.location && window.location.pathname ? window.location.pathname.split("/")[1] : e.split("/")[1], i.d.get("/api/floweraura/menu/web?country=".concat(r, "&rsource=").concat("web")).then((function(e) {
                            var t = e.data.data,
                                n = t.menu,
                                r = t.logo,
                                i = void 0 === r ? null : r;
                            return i && a(Object(c.c)(JSON.parse(i))), a(s({
                                menu: n
                            }))
                        })).catch((function(e) {
                            console.log(e, "error"), e.response && 403 === +e.response.status && console.log("Menu API providing 403 error in server-side rendering at ".concat(Date().toLocaleString())), console.log("Error", e)
                        }))
                    }
                }
        },
        233: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return l
            }));
            var n = a(1),
                r = a(4),
                i = a(17),
                o = a(2),
                c = a(36),
                s = function(e) {
                    return Object(n.a)({
                        type: r.fb
                    }, e)
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    return function(a) {
                        var n = "",
                            r = "";
                        Object(o.a)(t.category) || (n = t.category.toLowerCase()), r = -1 !== e.search("corporate") || "corporate" === n ? n || "corporate" : window.location && window.location.pathname ? window.location.pathname.split("/")[1] : e.split("/")[1];
                        try {
                            return i.d.get("/api/floweraura/menu/web?country=".concat(r, "&rsource=mob")).then((function(e) {
                                var t = e.data.data,
                                    n = t.menu,
                                    r = t.logo,
                                    i = void 0 === r ? null : r;
                                return i && a(Object(c.c)(JSON.parse(i))), a(s({
                                    result: {
                                        menus: n
                                    }
                                }))
                            })).catch((function(e) {
                                console.log(e, "error"), e.response && 403 === +e.response.status && console.log("Menu API providing 403 error in server-side rendering at ".concat(Date().toLocaleString())), console.log("Error", e)
                            }))
                        } catch (l) {
                            return l
                        }
                    }
                }
        },
        234: function(e, t, a) {
            "use strict";
            var n = a(25),
                r = a(26),
                i = a(34),
                o = a(35),
                c = a(3),
                s = a(42),
                l = a.n(s),
                u = a(51),
                d = a(14),
                p = (a(665), a(6)),
                h = a(11),
                b = a.n(h),
                f = a(339),
                m = a(8),
                g = a(0),
                j = b()({
                    loader: function() {
                        return a.e(45).then(a.bind(null, 364))
                    },
                    modules: ["./RecentlyViewedPane"],
                    webpack: function() {
                        return [364]
                    },
                    loading: f.a
                }),
                O = ["usa", "uk", "australia", "uae", "canada"],
                v = ["cart", "sell-with-us"],
                y = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a(e) {
                        var r;
                        return Object(n.a)(this, a), (r = t.call(this, e)).onClickOpenModal = function() {
                            var e = document.documentElement.clientHeight;
                            document.body.style.height = e + "px", r.setState({
                                isPaneOpen: !0
                            });
                            var t = {
                                label: window.location.href,
                                action: "Clicked"
                            };
                            Object(m.f)(t), Object(d.d)("RecentlyViewedApp", t)
                        }, r.onClickCloseModal = function() {
                            document.body.style.height = "auto", r.setState({
                                isPaneOpen: !1
                            })
                        }, r.pushEventToDataLayer = function() {
                            r._getPorductsCount() && (r.gtmInitializationService = d.a.isLoaded().subscribe((function(e) {
                                if (e && !r.state.isEventPushed) {
                                    var t = {
                                        label: window.location.href,
                                        action: "Shown"
                                    };
                                    Object(m.f)(t), Object(d.d)("RecentlyViewedApp", t), r.state.isEventPushed || r.setState({
                                        isEventPushed: !0
                                    })
                                }
                            })))
                        }, r.state = {
                            isPaneOpen: !1,
                            isPaneOpenLeft: !1,
                            isEventPushed: !1
                        }, r
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            l.a.setAppElement(this.el), this.pushEventToDataLayer()
                        }
                    }, {
                        key: "_getPorductsCount",
                        value: function() {
                            var e = (new u.a).get("rv_prods") || "";
                            return e.length > 0 ? e.split("|").length : 0
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            if (p.t) return null;
                            var t = (new u.a).get("rv_prods") || "",
                                a = window.location.pathname.split("/")[1],
                                n = O.indexOf(a),
                                r = v.indexOf(a),
                                i = "detail_page" === this.props.pageType ? null : Object(g.jsx)("div", {
                                    className: "eye_box_count",
                                    onClick: function() {
                                        return e.onClickOpenModal()
                                    },
                                    children: Object(g.jsxs)("div", {
                                        className: "eye_relative",
                                        children: [Object(g.jsx)("span", {
                                            className: "eye_show"
                                        }), Object(g.jsx)("div", {
                                            className: "eye_count",
                                            children: "Recently Viewed"
                                        })]
                                    })
                                });
                            return Object(g.jsxs)("div", {
                                ref: function(t) {
                                    return e.el = t
                                },
                                children: [-1 === n && -1 === r && t.length > 0 && void 0 !== t ? i : "", this.state.isPaneOpen ? Object(g.jsx)(j, {
                                    isMobileReq: this.props.isMobileReq,
                                    onClickCloseModal: this.onClickCloseModal,
                                    isPaneOpen: this.state.isPaneOpen
                                }) : null]
                            })
                        }
                    }]), a
                }(c.Component);
            t.a = y
        },
        241: function(e, t, a) {
            "use strict";
            var n = a(237),
                r = a(1),
                i = a(31),
                o = a(3),
                c = a(30),
                s = a(238),
                l = a.n(s),
                u = a(239),
                d = a.n(u),
                p = a(168),
                h = a(7),
                b = a(41),
                f = a(14),
                m = a(8),
                g = a(17),
                j = a(144),
                O = a.n(j),
                v = (a(235), a(42)),
                y = a.n(v),
                _ = a(6),
                C = a(2),
                w = a(180),
                k = a(93),
                S = a.n(k),
                P = (a(681), a(12)),
                E = a(0);
            y.a.setAppElement("#flowerauraReactApp");
            var x = {
                content: {
                    top: "30%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    transform: "translate(-50%, -50%)",
                    width: "30%",
                    maxWidth: "400px",
                    height: "auto",
                    backgroundColor: "#ffffff",
                    overflow: "visible"
                }
            };
            t.a = Object(c.c)((function(e) {
                return {
                    isMobileReq: e.pageData.isMobile,
                    settings: e.settings,
                    allcitiesList: e.cityPopupData.data || [],
                    pageData: e.pageData
                }
            }), (function(e) {
                return {
                    setListingPageData: function(t) {
                        return e(Object(p.g)(t, e))
                    }
                }
            }))((function(e) {
                var t = Object(o.useState)(e.isPaneOpen),
                    a = Object(i.a)(t, 2),
                    c = a[0],
                    s = a[1],
                    u = Object(o.useState)(!0),
                    p = Object(i.a)(u, 2),
                    j = p[0],
                    v = p[1],
                    k = Object(o.useState)(!0),
                    D = Object(i.a)(k, 2),
                    N = D[0],
                    T = D[1],
                    M = Object(o.useState)([]),
                    A = Object(i.a)(M, 2),
                    L = A[0],
                    I = A[1],
                    R = Object(o.useState)([]),
                    U = Object(i.a)(R, 2),
                    F = U[0],
                    B = U[1],
                    G = Object(o.useState)([]),
                    H = Object(i.a)(G, 2),
                    V = H[0],
                    q = H[1],
                    K = Object(o.useState)({
                        search: "",
                        selectedCityName: "",
                        error: !1
                    }),
                    J = Object(i.a)(K, 2),
                    W = J[0],
                    z = J[1],
                    Y = Object(o.useState)({
                        error: !1,
                        occasionName: ""
                    }),
                    Q = Object(i.a)(Y, 2),
                    Z = Q[0],
                    X = Q[1],
                    $ = Object(o.useState)({
                        error: !1,
                        arriveDate: "",
                        arriveDay: ""
                    }),
                    ee = Object(i.a)($, 2),
                    te = ee[0],
                    ae = ee[1],
                    ne = Object(o.useState)({
                        openCalander: !1,
                        currentDate: new Date
                    }),
                    re = Object(i.a)(ne, 2),
                    ie = re[0],
                    oe = re[1],
                    ce = Object(o.useState)({
                        today: !1,
                        tomorrow: !1,
                        later: !1
                    }),
                    se = Object(i.a)(ce, 2),
                    le = se[0],
                    ue = se[1],
                    de = Object(o.useState)(null),
                    pe = Object(i.a)(de, 2),
                    he = pe[0],
                    be = pe[1],
                    fe = Object(o.useState)(!1),
                    me = Object(i.a)(fe, 2),
                    ge = me[0],
                    je = me[1],
                    Oe = Object(o.useRef)(null);
                Object(o.useEffect)((function() {
                    Pe(), De("View - Home Page", "Gift Genie", "Home Page");
                    var e = JSON.parse(sessionStorage.getItem("gift_genie_details"));
                    if (!Object(C.a)(e)) {
                        z((function(t) {
                            return Object(r.a)(Object(r.a)({}, t), {}, {
                                search: e.city,
                                selectedCityName: e.city
                            })
                        })), X((function(t) {
                            return Object(r.a)(Object(r.a)({}, t), {}, {
                                occasionName: e.occasion
                            })
                        })), ae((function(t) {
                            return Object(r.a)(Object(r.a)({}, t), {}, {
                                arriveDate: e.date,
                                arriveDay: e.day
                            })
                        })), ue((function(t) {
                            return Object(r.a)(Object(r.a)({}, t), {}, {
                                today: e.today,
                                tomorrow: e.tomorrow,
                                later: e.later
                            })
                        }));
                        var t = S.a.parse(window.location.search);
                        Object.hasOwnProperty.bind(t)("when") && be(t.when)
                    }
                    Object(C.a)(h.a.get("user_select_city")) || z((function(e) {
                        return Object(r.a)(Object(r.a)({}, e), {}, {
                            search: h.a.get("user_select_city"),
                            selectedCityName: h.a.get("user_select_city")
                        })
                    }))
                }), []), Object(o.useEffect)((function() {
                    return document.addEventListener("click", Ne, !1),
                        function() {
                            document.removeEventListener("click", Ne, !1)
                        }
                }), []);
                var ve = function(e) {
                        return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date(e).getDay()]
                    },
                    ye = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                            a = e.getDate(),
                            n = e.getMonth() + 1,
                            r = e.getFullYear();
                        return a = +a <= 9 ? "0".concat(a) : a, n = +n <= 9 ? "0".concat(n) : n, "".concat(a).concat(t).concat(n).concat(t).concat(r)
                    },
                    _e = function() {
                        s(!1), e.openGenieModal(!1), Object(P.p)("close", "gift_finder", window.location.pathname)
                    },
                    Ce = function(e) {
                        var t = new Date,
                            a = t.getFullYear(),
                            n = e.getFullYear(),
                            r = t.getMonth() + 1,
                            i = e.getMonth() + 1,
                            o = t.getDate(),
                            c = e.getDate(),
                            s = "".concat(r, "/").concat(o, "/").concat(a),
                            l = "".concat(i, "/").concat(c, "/").concat(n),
                            u = new Date(s),
                            d = new Date(l),
                            p = Math.abs(d - u),
                            h = Math.ceil(p / 864e5);
                        return 0 === parseInt(h) ? "same_day" : "other"
                    },
                    we = function(e) {
                        var t = e.split("-");
                        return function(e) {
                            var t = new Date,
                                a = t.getFullYear(),
                                n = t.getMonth() + 1,
                                r = t.getDate(),
                                i = "".concat(n, "/").concat(r, "/").concat(a),
                                o = new Date(i),
                                c = new Date(e),
                                s = Math.abs(c - o),
                                l = Math.ceil(s / 864e5),
                                u = parseInt(l);
                            return 0 === u || 1 === u ? "same_day" : "other"
                        }("".concat(t[1], "/").concat(t[0], "/").concat(t[2]))
                    },
                    ke = function(e, t) {
                        var a = Object(C.a)(W.selectedCityName) ? null : W.selectedCityName,
                            n = Object(C.a)(Z.occasionName) ? null : Z.occasionName,
                            r = "deliverto=".concat(a),
                            i = "&when=".concat(e),
                            o = "&occasion=".concat(n),
                            c = "";
                        Object(C.a)(a) || (c += r), Object(C.a)(n) || (c += o), Object(C.a)(e) || (c += i), window.location.href = "Birthday" === n ? "".concat(_.c, "/gp/giftsfinder/birthday") : "Anniversary" === n ? "".concat(_.c, "/gp/giftsfinder/anniversary") : "".concat(_.c, "/giftfinder?").concat(c, "&rsource=").concat(t)
                    },
                    Se = function(e) {
                        v(!0), g.a.get("fa-get-page-data/api/get-city-list-all?search_char=".concat(e)).then((function(e) {
                            I(e.data.result), v(!1), T(!0)
                        })).catch((function(e) {
                            console.log("error", e), v(!1)
                        }))
                    },
                    Pe = function() {
                        v(!0), g.d.get("api/floweraura/fa/giftfinder/filters").then((function(e) {
                            var t = e && e.data && e.data.data && e.data.data.occasions || [];
                            t && q(t), v(!1)
                        })).catch((function(e) {
                            console.log("error", e), v(!1)
                        }))
                    },
                    Ee = F.map((function(t, a) {
                        return Object(E.jsxs)("li", {
                            onClick: function(a) {
                                return function(t) {
                                    z({
                                        search: t.cityName,
                                        selectedCityName: t.cityName,
                                        error: !1
                                    }), T(!1), De("City", "Gift Genie", "".concat(t.cityName)), Object(P.g)(e.pageData.pageType, "gift finder", "Select Delivery City", t.cityName, window.location.pathname)
                                }(t)
                            },
                            children: [t.cityName, Object(E.jsx)("div", {
                                className: "stateName",
                                children: t.stateName
                            })]
                        }, a)
                    })),
                    xe = V.map((function(t, a) {
                        return Object(E.jsx)("li", {
                            onClick: function(a) {
                                return function(t) {
                                    je(!1), Object(C.a)(t) || Object(C.a)(t.name) ? X({
                                        error: !0,
                                        occasionName: ""
                                    }) : (X({
                                        error: !1,
                                        occasionName: t.name
                                    }), De("Occasion", "Gift Genie", "".concat(t.name)), Object(P.g)(e.pageData.pageType, "gift finder", "Select Occasion?", t.name, window.location.pathname))
                                }(t)
                            },
                            className: Object(C.a)(Z.occasionName) || Z.occasionName != t.name ? "item" : "selected-item",
                            children: t.name
                        }, a)
                    })),
                    De = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        if (!Object(C.a)(e) && !Object(C.a)(t) && !Object(C.a)(a)) {
                            var n = {
                                action: e,
                                eventCategory: t,
                                eventLabel: a
                            };
                            Object(m.f)(n), Object(f.d)("clickEvent", n)
                        }
                    },
                    Ne = function(e) {
                        Oe.current && !Oe.current.contains(e.target) && oe({
                            openCalander: !1,
                            currentDate: new Date
                        })
                    },
                    Te = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if ("today" === t) {
                            var a = new Date;
                            ae({
                                arriveDate: ye(a),
                                error: !1,
                                arriveDay: ve(a)
                            }), De("Date", "Gift Genie", "today"), Object(P.g)(e.pageData.pageType, "gift finder", "When should it arrive?", "today", window.location.pathname);
                            var n = Ce(a);
                            be(n), ue({
                                today: !0,
                                tomorrow: !1,
                                later: !1
                            })
                        } else if ("tomorrow" === t) {
                            var r = new Date;
                            r.setDate(r.getDate() + 1), ae({
                                arriveDate: ye(r),
                                error: !1,
                                arriveDay: ve(r)
                            }), De("Date", "Gift Genie", "tomorrow"), Object(P.g)(e.pageData.pageType, "gift finder", "When should it arrive?", "tomorrow", window.location.pathname);
                            var i = Ce(r);
                            be(i), ue({
                                today: !1,
                                tomorrow: !0,
                                later: !1
                            })
                        }
                        oe({
                            openCalander: !1
                        })
                    },
                    Me = le.today ? "todayTab active" : "todayTab",
                    Ae = le.tomorrow ? "tomorrowTab active" : "tomorrowTab",
                    Le = le.later ? "taterTab active" : "taterTab",
                    Ie = Object(E.jsxs)("div", {
                        className: "false" === e.isMobileReq ? "giftGenieBox giftGenieBoxDesktop" : "giftGenieBox giftGenieBoxMobile",
                        children: [Object(E.jsxs)("div", {
                            className: "ggHead",
                            children: [Object(E.jsx)("h3", {
                                children: "Gift Finder"
                            }), Object(E.jsx)("h6", {
                                children: "Find the Perfect Gift in Just 3 mins"
                            }), Object(E.jsx)("em", {
                                onClick: function() {
                                    return _e()
                                }
                            })]
                        }), Object(E.jsxs)("div", {
                            className: "gift-genie-container",
                            children: [Object(E.jsx)("div", {
                                className: "giftGenieBgImg",
                                children: Object(E.jsxs)("div", {
                                    className: "ggBottom",
                                    children: [Object(E.jsxs)("div", {
                                        className: "search_product_city_box ggInputForm",
                                        children: [Object(E.jsx)("label", {
                                            htmlFor: "typeCityName",
                                            children: "Select Delivery City"
                                        }), Object(E.jsx)("input", {
                                            type: "text",
                                            onChange: function(e) {
                                                return function(e) {
                                                    var t = L;
                                                    z({
                                                        search: e.target.value
                                                    }), 1 === e.target.value.length && e.target.value[0] !== W.search[0] && Se(e.target.value);
                                                    var a = e.target.value.toLowerCase();
                                                    if (t) {
                                                        var r, i = [],
                                                            o = Object(n.a)(t);
                                                        try {
                                                            for (o.s(); !(r = o.n()).done;) {
                                                                var c = r.value;
                                                                i.push({
                                                                    cityName: c.city,
                                                                    stateName: c.state
                                                                })
                                                            }
                                                        } catch (u) {
                                                            o.e(u)
                                                        } finally {
                                                            o.f()
                                                        }
                                                        var s = l.a.go(a, i, {
                                                            key: "cityName"
                                                        }).map((function(e) {
                                                            return e.obj
                                                        }));
                                                        B(s)
                                                    }!1 === N && e.target.value.length > 1 && T(!0), je(!1)
                                                }(e)
                                            },
                                            value: W.search,
                                            id: "typeCityName",
                                            placeholder: "Type city name",
                                            autoComplete: "off",
                                            onFocus: function() {
                                                return 0 === L.length && W.search.length > 0 && Se(W.search[0]), void je(!1)
                                            }
                                        }), F.length > 0 && N ? Object(E.jsx)("ul", {
                                            className: "filter_City_Result",
                                            children: Ee
                                        }) : ""]
                                    }), Object(E.jsxs)("div", {
                                        className: "ggInputForm calenderIcon calenderGenieBox",
                                        ref: Oe,
                                        children: [Object(E.jsx)("label", {
                                            htmlFor: "todayDate",
                                            children: "When should it arrive?"
                                        }), Object(E.jsxs)("ul", {
                                            className: "gift-finder-date",
                                            children: [Object(E.jsx)("li", {
                                                className: Me,
                                                onClick: function() {
                                                    return Te("today")
                                                },
                                                children: Object(E.jsxs)("span", {
                                                    className: "date-slection",
                                                    children: [Object(E.jsx)("span", {
                                                        className: "day",
                                                        children: "Today"
                                                    }), Object(E.jsx)("span", {
                                                        className: "gf-date",
                                                        children: function() {
                                                            var e = new Date,
                                                                t = String(e.getDate()).padStart(2, "0"),
                                                                a = e.toLocaleString("default", {
                                                                    month: "short"
                                                                });
                                                            return "".concat(t, " ").concat(a)
                                                        }()
                                                    })]
                                                })
                                            }), Object(E.jsx)("li", {
                                                className: Ae,
                                                onClick: function() {
                                                    return Te("tomorrow")
                                                },
                                                children: Object(E.jsxs)("span", {
                                                    className: "date-slection",
                                                    children: [Object(E.jsx)("span", {
                                                        className: "day",
                                                        children: "Tomorrow"
                                                    }), Object(E.jsx)("span", {
                                                        className: "gf-date",
                                                        children: function() {
                                                            var e = new Date;
                                                            e.setDate(e.getDate() + 1);
                                                            var t = String(e.getDate()).padStart(2, "0"),
                                                                a = e.toLocaleString("default", {
                                                                    month: "short"
                                                                });
                                                            return "".concat(t, " ").concat(a)
                                                        }()
                                                    })]
                                                })
                                            }), Object(E.jsx)("li", {
                                                className: Le,
                                                onClick: function() {
                                                    return function() {
                                                        var e = te.arriveDate;
                                                        if (Object(C.a)(e)) oe((function(e) {
                                                            return Object(r.a)(Object(r.a)({}, e), {}, {
                                                                openCalander: !ie.openCalander
                                                            })
                                                        }));
                                                        else {
                                                            var t = e.split("-"),
                                                                a = Number(t[0]),
                                                                n = Number(t[1]) - 1,
                                                                i = Number(t[2]);
                                                            oe((function(e) {
                                                                return Object(r.a)(Object(r.a)({}, e), {}, {
                                                                    openCalander: !ie.openCalander,
                                                                    currentDate: new Date(i, n, a)
                                                                })
                                                            }))
                                                        }
                                                        je(!1)
                                                    }()
                                                },
                                                children: !Object(C.a)(te.arriveDate) && le.later ? Object(E.jsxs)("span", {
                                                    className: "date-slection selected-date",
                                                    children: [Object(E.jsx)("span", {
                                                        className: "later",
                                                        children: te.arriveDay
                                                    }), Object(E.jsx)("span", {
                                                        className: "calender-date",
                                                        children: te.arriveDate
                                                    })]
                                                }) : Object(E.jsx)("span", {
                                                    className: "date-slection",
                                                    children: Object(E.jsx)("span", {
                                                        className: "later",
                                                        children: "Select date"
                                                    })
                                                })
                                            })]
                                        }), ie.openCalander ? Object(E.jsx)(d.a, {
                                            value: ie.currentDate,
                                            onChange: function(t) {
                                                ae({
                                                    arriveDate: ye(t),
                                                    error: !1,
                                                    arriveDay: ve(t)
                                                }), oe({
                                                    openCalander: !1
                                                }), ue({
                                                    today: !1,
                                                    tomorrow: !1,
                                                    later: !0
                                                }), De("Date", "Gift Genie", "later"), Object(P.g)(e.pageData.pageType, "gift finder", "When should it arrive?", ye(t), window.location.pathname);
                                                var a = Ce(t);
                                                be(a)
                                            },
                                            minDate: new Date
                                        }) : ""]
                                    }), Object(E.jsxs)("div", {
                                        className: "ggInputDrop ggInputForm",
                                        children: [Object(E.jsx)("label", {
                                            htmlFor: "occashionList",
                                            children: "Select Occasion?"
                                        }), Object(E.jsx)("input", {
                                            type: "text",
                                            id: "occashionList",
                                            onClick: function(e) {
                                                je((function(e) {
                                                    return !e
                                                }))
                                            },
                                            value: Z.occasionName,
                                            placeholder: "Select Occasion",
                                            autoComplete: "off",
                                            readonly: "readonly"
                                        }), ge ? Object(E.jsx)("ul", {
                                            className: "occassion-list",
                                            children: xe
                                        }) : ""]
                                    })]
                                })
                            }), Object(E.jsx)("div", {
                                className: "ggSubmitBtn",
                                children: Object(E.jsx)("button", {
                                    onClick: function() {
                                        return function() {
                                            var t = "web";
                                            if ("true" === e.isMobileReq && (t = "mob"), Object(C.a)(W.selectedCityName) && z({
                                                    search: "",
                                                    error: !0,
                                                    selectedCityName: ""
                                                }), Object(C.a)(Z.occasionName) && X({
                                                    error: !0
                                                }), Object(C.a)(te.arriveDate) && ae({
                                                    error: !0
                                                }), De("Search", "Gift Genie", "City - ".concat(W.selectedCityName, " - Occasion - ").concat(Z.occasionName, " - Date - ").concat(te.arriveDate)), !Object(C.a)(W.selectedCityName) || !Object(C.a)(Z.occasionName) || !Object(C.a)(te.arriveDate) || !Object(C.a)(te.arriveDay)) {
                                                var a = JSON.parse(sessionStorage.getItem("gift_genie_details"));
                                                if (null === a || void 0 === a) {
                                                    var n = {};
                                                    n.city = W.selectedCityName ? W.selectedCityName : "", n.occasion = Z.occasionName ? Z.occasionName : "", n.date = te.arriveDate ? te.arriveDate : "", n.day = te.arriveDay ? te.arriveDay : "", n.today = !!le.today && le.today, n.tomorrow = !!le.tomorrow && le.tomorrow, n.later = !!le.later && le.later, sessionStorage.setItem("gift_genie_details", JSON.stringify(n))
                                                } else a = {
                                                    city: W.selectedCityName ? W.selectedCityName : "",
                                                    occasion: Z.occasionName ? Z.occasionName : "",
                                                    date: te.arriveDate ? te.arriveDate : "",
                                                    day: te.arriveDay ? te.arriveDay : "",
                                                    today: !!le.today && le.today,
                                                    tomorrow: !!le.tomorrow && le.tomorrow,
                                                    later: !!le.later && le.later
                                                }, sessionStorage.setItem("gift_genie_details", JSON.stringify(a))
                                            }
                                            if (Object(C.a)(W.selectedCityName))
                                                if (Object(C.a)(he) && !Object(C.a)(te.arriveDate)) {
                                                    var r = we(te.arriveDate);
                                                    be(r), ke(r, t)
                                                } else ke(he, t);
                                            else {
                                                h.a.set("user_select_city", W.selectedCityName, 10, _.f);
                                                var i = e.allcitiesList.all_cities,
                                                    o = Object.keys(i).filter((function(e) {
                                                        return W.selectedCityName === i[e]
                                                    })),
                                                    c = Object(b.c)(W.selectedCityName, o);
                                                if (void 0 !== o && c > 0 && (o = c), h.a.set("fc_cn", o, 10, _.f), Object(C.a)(he) && !Object(C.a)(te.arriveDate)) {
                                                    var s = we(te.arriveDate);
                                                    be(s), ke(s, t)
                                                } else ke(he, t)
                                            }
                                        }()
                                    },
                                    children: "Find Gifts"
                                })
                            })]
                        })]
                    });
                return Object(E.jsxs)(E.Fragment, {
                    children: [j ? Object(E.jsx)(w.a, {}) : "", "false" === e.isMobileReq ? Object(E.jsx)(y.a, {
                        isOpen: c,
                        onRequestClose: function() {
                            return _e()
                        },
                        style: x,
                        className: "giftgeniesearch",
                        children: Ie
                    }) : Object(E.jsx)("div", {
                        className: "genieBoxSlide",
                        children: Object(E.jsx)(O.a, {
                            className: "genieSearchModal",
                            overlayClassName: "genieSearchModalOverlay",
                            isOpen: c,
                            title: "",
                            subtitle: "",
                            from: "bottom",
                            width: "100%",
                            onRequestClose: function() {
                                s(!1), e.openGenieModal(!1), Object(P.p)("close", "gift_finder", window.location.pathname)
                            },
                            children: Ie
                        })
                    })]
                })
            }))
        },
        242: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            }));
            var n = a(4),
                r = a(6),
                i = function(e) {
                    return function(t) {
                        var a = e ? "".concat(r.b, "/api/floweraura/all/cities") : "".concat(r.a, "/get-all-cities-product");
                        return fetch(a, {
                            referrer: r.a
                        }).then((function(e) {
                            return e.json()
                        })).then((function(e) {
                            return t((a = e.data, function(e) {
                                return e({
                                    type: n.Y,
                                    cityPopupData: a
                                })
                            }));
                            var a
                        })).catch((function(e) {
                            console.log("Error", e)
                        }))
                    }
                }
        },
        338: function(e, t, a) {
            "use strict";
            var n = a(25),
                r = a(26),
                i = a(34),
                o = a(35),
                c = a(3),
                s = a(30),
                l = a(7),
                u = a(6),
                d = a(40),
                p = a(2),
                h = (a(663), a(8)),
                b = a(12),
                f = a(0),
                m = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        var e;
                        Object(n.a)(this, a);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).state = {
                            isDropDownOpen: !1,
                            isDefaultGeoCurrencySet: !1
                        }, e.setCurrency = function(t, a) {
                            var n = e.props.location.location.pathname;
                            e.props.setUserPickedCurrencyCountry(a.currency_code), e.props.setUserPickedCurrencyRate(a.conversion_factor), e.props.setUserPickedCurrencyIcon(a.country_label), l.a.set("user_select_currency", a.currency_code, 10, u.f), l.a.set("user_select_rate", a.conversion_factor, 10, u.f), l.a.set("user_select_icon", a.country_label, 10, u.f), Object(h.d)("currency_set", {
                                currency: a.currency_code
                            }), "true" === e.props.isMobileReq && e.props.onClickCloseCurrencySlideMenu(), e.setState({
                                isDropDownOpen: !1
                            }), n && "/cart" === n && window.location.reload()
                        }, e.setGeoCurrencyCookies = function() {
                            var t = e.props.currencyInfoList,
                                a = e.props.siteHeaderSettings && e.props.siteHeaderSettings.geoCurrency,
                                n = null;
                            Object(p.a)(t) || (t.forEach((function(e) {
                                e.currency_code === a && (n = e)
                            })), null === n && (n = t[0])), Object(p.a)(n) || (e.props.setUserPickedCurrencyCountry(n.currency_code), e.props.setUserPickedCurrencyRate(n.conversion_factor), e.props.setUserPickedCurrencyIcon(n.country_label), l.a.set("user_select_currency", n.currency_code, 10, u.f), l.a.set("user_select_rate", n.conversion_factor, 10, u.f), l.a.set("user_select_icon", n.country_label, 10, u.f))
                        }, e.cickOnCurrencyClose = function() {
                            e.props.onClickCloseCurrencySlideMenu()
                        }, e.mouseEnter = function() {
                            e.setState({
                                isDropDownOpen: !0
                            })
                        }, e.mouseOuter = function() {
                            e.setState({
                                isDropDownOpen: !1
                            })
                        }, e
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            Object(p.a)(l.a.get("user_select_currency")) || (this.props.setUserPickedCurrencyCountry(l.a.get("user_select_currency")), this.props.setUserPickedCurrencyRate(l.a.get("user_select_rate")), this.props.setUserPickedCurrencyIcon(l.a.get("user_select_icon")))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            !Object(p.a)(l.a.get("user_select_currency")) || Object(p.a)(this.props.currencyInfoList) || this.state.isDefaultGeoCurrencySet || (this.setState({
                                isDefaultGeoCurrencySet: !0
                            }), this.setGeoCurrencyCookies())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.currencyInfoList,
                                a = null,
                                n = "";
                            return t.length > 0 && (n = t.map((function(t, a) {
                                return Object(f.jsxs)("li", {
                                    onClick: function(a) {
                                        e.setCurrency(a, t), Object(b.h)(t.currency_name, "null")
                                    },
                                    className: t.currency_code === e.props.userPickedCurrencyCountry ? "active" : "",
                                    children: [t.currency_code, " - ", t.currency_name]
                                }, a)
                            }))), this.state.isDropDownOpen && (a = Object(f.jsx)("div", {
                                className: "mlListItem",
                                children: Object(f.jsx)("ul", {
                                    children: n
                                })
                            })), Object(f.jsxs)(f.Fragment, {
                                children: ["false" === this.props.isMobileReq ? Object(f.jsxs)("span", {
                                    className: "action_wrapper",
                                    onMouseEnter: function() {
                                        return e.mouseEnter()
                                    },
                                    onMouseLeave: function() {
                                        return e.mouseOuter()
                                    },
                                    children: [Object(f.jsx)("a", {
                                        href: "#",
                                        children: Object(f.jsx)("span", {
                                            className: "currencyText",
                                            children: this.props.userPickedCurrencyCountry
                                        })
                                    }), a]
                                }) : null, "true" === this.props.isMobileReq ? Object(f.jsx)("div", {
                                    className: "mobileCurencyBox",
                                    children: Object(f.jsxs)("div", {
                                        className: "mobileCurrencyMenuList",
                                        children: [Object(f.jsx)("em", {
                                            className: "closeCurrIcon closeCurrIcon12",
                                            onClick: function() {
                                                return e.cickOnCurrencyClose()
                                            }
                                        }), Object(f.jsx)("ul", {
                                            children: n
                                        })]
                                    })
                                }) : null]
                            })
                        }
                    }]), a
                }(c.Component);
            t.a = Object(s.c)((function(e) {
                return {
                    siteHeaderSettings: e.settings,
                    location: e.router,
                    searchtap_resources: e.settings.searchtap_resources || {},
                    userPickedCurrencyCountry: e.settings.userPickedCurrencyCountry || "",
                    userPickedCurrencyRate: e.settings.userPickedCurrencyRate || "",
                    userPickedCurrencyIcon: e.settings.userPickedCurrencyIcon || "",
                    currencyInfoList: e.settings.currency_info || [],
                    isMobileReq: e.pageData.isMobile
                }
            }), (function(e) {
                return {
                    setUserPickedCurrencyCountry: function(t) {
                        return e(Object(d.g)(t))
                    },
                    setUserPickedCurrencyRate: function(t) {
                        return e(Object(d.i)(t))
                    },
                    setUserPickedCurrencyIcon: function(t) {
                        return e(Object(d.h)(t))
                    }
                }
            }))(m)
        },
        339: function(e, t, a) {
            "use strict";
            a(3);
            var n = a(147),
                r = a(0);
            t.a = function() {
                return Object(r.jsxs)(n.a, {
                    height: 475,
                    width: 400,
                    speed: 2,
                    primaryColor: "#f3f3f3",
                    secondaryColor: "#ecebeb",
                    children: [Object(r.jsx)("rect", {
                        x: "19",
                        y: "89",
                        rx: "5",
                        ry: "5",
                        width: "160",
                        height: "152"
                    }), Object(r.jsx)("rect", {
                        x: "220",
                        y: "90",
                        rx: "5",
                        ry: "5",
                        width: "160",
                        height: "152"
                    }), Object(r.jsx)("rect", {
                        x: "222",
                        y: "257",
                        rx: "4",
                        ry: "4",
                        width: "100",
                        height: "13"
                    }), Object(r.jsx)("rect", {
                        x: "21",
                        y: "254",
                        rx: "4",
                        ry: "4",
                        width: "100",
                        height: "13"
                    }), Object(r.jsx)("rect", {
                        x: "20",
                        y: "24",
                        rx: "4",
                        ry: "4",
                        width: "346",
                        height: "15"
                    }), Object(r.jsx)("rect", {
                        x: "21",
                        y: "53",
                        rx: "4",
                        ry: "4",
                        width: "100",
                        height: "13"
                    }), Object(r.jsx)("rect", {
                        x: "21",
                        y: "280",
                        rx: "4",
                        ry: "4",
                        width: "82",
                        height: "10"
                    }), Object(r.jsx)("rect", {
                        x: "222",
                        y: "278",
                        rx: "4",
                        ry: "4",
                        width: "82",
                        height: "11"
                    })]
                })
            }
        },
        346: function(e, t, a) {
            "use strict";
            a(3);
            var n = a(147),
                r = a(0),
                i = function() {
                    for (var e = 75, t = 112, a = [], n = 0; n < 10; n++) {
                        var i = 0 === n ? e : e + 50,
                            o = 0 === n ? t : t + 50;
                        a.push(Object(r.jsx)("rect", {
                            x: "5",
                            y: i,
                            rx: "0",
                            ry: "0",
                            width: "95%",
                            height: "25"
                        }, i)), a.push(Object(r.jsx)("rect", {
                            x: "2",
                            y: o,
                            rx: "0",
                            ry: "0",
                            width: "100%",
                            height: "1"
                        }, o)), 0 !== n && (t += 50, e += 50)
                    }
                    return a
                };
            t.a = function() {
                return Object(r.jsxs)(n.a, {
                    height: 600,
                    speed: 2,
                    primaryColor: "#f3f3f3",
                    secondaryColor: "#ecebeb",
                    children: [Object(r.jsx)("rect", {
                        x: "0",
                        y: "0",
                        rx: "0",
                        ry: "0",
                        width: "100%",
                        height: "40"
                    }), i()]
                })
            }
        },
        348: function(e, t, a) {
            "use strict";
            var n, r = a(91),
                i = a(354),
                o = a(6),
                c = a(1),
                s = a(4),
                l = a(2),
                u = {
                    nid: 0,
                    title: "",
                    price: 0,
                    list_price: 0,
                    disc_per: 0,
                    type: "",
                    combo_type_exist: 0,
                    end_time: "",
                    preparation_time: "",
                    description: "",
                    caringTips: "",
                    disclaimer: "",
                    through: "",
                    contains: null,
                    images: null,
                    image: null,
                    fullSizeImages: null,
                    attributes: null,
                    availableCities: null,
                    reviewRating: null,
                    rating_recommends: null,
                    review_list: "",
                    likeProducts: null,
                    recentlyViewedProducts: null,
                    moreLinks: null,
                    addon: null,
                    plantDetailIcon: null,
                    thirdPartyVendor: 0,
                    deliveryType: 0,
                    earliestDeliveryDate: null,
                    remainingTimeInSeconds: null,
                    country: 0,
                    internationalPrice: 0,
                    currencyIconClass: "",
                    showAddon: !0,
                    showPincodeField: !1,
                    showGmapField: !1,
                    sku: null,
                    showEarliestDeliveryDate: !1,
                    deliveryEndTiming: null,
                    isThroughVendor: !1,
                    isTypeGift: !1,
                    isThirdPartyVendor: !1,
                    isProductAvailable: !0,
                    relatedProduct: "",
                    isSingleSlotProduct: !1,
                    video: "",
                    metaDetails: "",
                    productNotFound: 0,
                    productPageUrl: "",
                    valentineMessage: null,
                    valentineDate: "",
                    displayValentineField: 0,
                    isInternational: !1,
                    deliveryMedium: "",
                    digitalGiftsBanner: null,
                    callRecommendationApi: null,
                    isVendorCityRequired: !1,
                    isCityMandatory: 0,
                    defaultMsgCourier: "",
                    pinCodeEarlistDeliveryDate: null,
                    currencyImage: "",
                    gogreenBanner: "",
                    gogreenBannersAllDevice: null,
                    whyFlowerauraFooterMsg: null,
                    covid19MeasuresFooter: null,
                    breadCrum: null,
                    category: null,
                    moq: null,
                    wallet_points: null,
                    earnWalletpoint: null,
                    earnLoginPoints: null,
                    earnWalletpointValue: null,
                    earnLoginPointsValue: null,
                    price_breakup: null,
                    browse_category: null,
                    review_images: null,
                    customer_review_video: null,
                    chef: null,
                    rakhiPromoVideo: null,
                    international_disclaimer: null,
                    isNddProduct: !1,
                    variant: null,
                    variantProduct: null
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.Yb:
                            var a = null,
                                n = null,
                                r = null,
                                i = null,
                                d = null,
                                p = null,
                                h = Object(l.a)(t.productInfo.internationalPrice) ? 0 : t.productInfo.internationalPrice,
                                b = Object(l.a)(t.productInfo.currencyIconClass) ? 0 : t.productInfo.currencyIconClass,
                                f = t.productInfo,
                                m = f.nid,
                                g = f.title,
                                j = f.price,
                                O = f.list_price,
                                v = f.disc_per,
                                y = f.through,
                                _ = f.contains,
                                C = f.description,
                                w = f.images,
                                k = f.fullSizeImages,
                                S = f.type,
                                P = f.combo_type_exist,
                                E = f.end_time,
                                x = f.preparation_time,
                                D = f.attributes,
                                N = f.reviewRating,
                                T = f.rating_recommends,
                                M = f.caringTips,
                                A = f.disclaimer,
                                L = f.plantDetailIcon,
                                I = f.thirdPartyVendor,
                                R = f.deliveryType,
                                U = f.earliestDeliveryDate,
                                F = f.remainingTimeInSeconds,
                                B = f.country,
                                G = f.showAddon,
                                H = f.showGmapField,
                                V = f.showPincodeField,
                                q = f.sku,
                                K = f.showEarliestDeliveryDate,
                                J = f.deliveryEndTiming,
                                W = f.isThroughVendor,
                                z = f.isTypeGift,
                                Y = f.isThirdPartyVendor,
                                Q = f.isSingleSlotProduct,
                                Z = f.valentineMessage,
                                X = f.valentineDate,
                                $ = f.displayValentineField,
                                ee = f.isInternational,
                                te = f.meta_details,
                                ae = f.delivery_medium,
                                ne = f.digital_gifts_banner,
                                re = f.call_recommendation_api,
                                ie = f.isVendorCityRequired,
                                oe = f.is_city_mandatory,
                                ce = f.default_msg_courier,
                                se = f.currency_image,
                                le = f.gogreenBanner,
                                ue = f.gogreenBanners,
                                de = f.footer_msg,
                                pe = f.covid_19_measures_footer,
                                he = f.crumb,
                                be = f.category,
                                fe = f.moq,
                                me = f.image,
                                ge = f.wallet_points,
                                je = f.earnWalletpoint,
                                Oe = f.earnLoginPoints,
                                ve = f.price_breakup,
                                ye = f.browse_category,
                                _e = f.earnWalletpointValue,
                                Ce = f.earnLoginPointsValue,
                                we = f.review_images,
                                ke = f.customer_review_video,
                                Se = f.chef,
                                Pe = f.rakhi_promo_video,
                                Ee = f.international_disclaimer,
                                xe = f.isNddProduct,
                                De = f.extraSettings,
                                Ne = void 0 === De ? null : De;
                            f.variantProduct, f.variant;
                            Object(l.a)(t.productInfo.cities) || (i = t.productInfo.cities.available), Object(l.a)(t.productInfo.relatedProduct) ? Object(l.a)(Ne) || !0 === Ne.reloadRelatedProduct || (a = e.relatedProduct) : a = Object(l.a)(Ne) || !0 === Ne.reloadRelatedProduct ? t.productInfo.relatedProduct : e.relatedProduct, Object(l.a)(t.productInfo.variantProduct) ? Object(l.a)(Ne) || !0 === Ne.reloadVariantProduct || (d = e.variantProduct, p = e.variant) : Object(l.a)(Ne) || !0 === Ne.reloadVariantProduct ? (d = t.productInfo.variantProduct, p = t.productInfo.variant) : (d = e.variantProduct, p = e.variant), Object(l.a)(t.productInfo.review_list) || (n = t.productInfo.review_list), Object(l.a)(t.productInfo.video) || (r = t.productInfo.video);
                            var Te = o.k;
                            "flower" === t.productInfo.type ? Te = o.l : "gift" === t.productInfo.type ? Te = o.g : "plant" === t.productInfo.type && (Te = o.x);
                            var Me = te,
                                Ae = String(ae).toLowerCase();
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                nid: m,
                                title: g,
                                price: j,
                                list_price: O,
                                disc_per: v,
                                through: y,
                                contains: _,
                                description: C,
                                images: w,
                                fullSizeImages: k,
                                type: S,
                                combo_type_exist: P,
                                end_time: E,
                                preparation_time: x,
                                attributes: D,
                                availableCities: i,
                                reviewRating: N,
                                rating_recommends: T,
                                review_list: n,
                                caringTips: M,
                                disclaimer: A,
                                plantDetailIcon: L,
                                thirdPartyVendor: I,
                                deliveryType: R,
                                earliestDeliveryDate: U,
                                remainingTimeInSeconds: F,
                                country: B,
                                internationalPrice: h,
                                currencyIconClass: b,
                                showAddon: G,
                                showPincodeField: V,
                                showGmapField: H,
                                sku: q,
                                showEarliestDeliveryDate: K,
                                deliveryEndTiming: J || Te,
                                isThroughVendor: W,
                                isTypeGift: z,
                                isThirdPartyVendor: Y,
                                relatedProduct: a,
                                isSingleSlotProduct: Q,
                                video: r,
                                valentineMessage: Z,
                                valentineDate: X,
                                displayValentineField: $,
                                isInternational: ee,
                                metaDetails: Me,
                                deliveryMedium: Ae,
                                digitalGiftsBanner: ne,
                                callRecommendationApi: re,
                                isVendorCityRequired: ie,
                                isCityMandatory: oe,
                                defaultMsgCourier: ce,
                                currencyImage: se,
                                gogreenBanner: le,
                                gogreenBannersAllDevice: Object(l.a)(ue) ? null : ue,
                                whyFlowerauraFooterMsg: Object(l.a)(de) ? null : de,
                                covid19MeasuresFooter: Object(l.a)(pe) ? null : pe,
                                breadCrum: Object(l.a)(he) ? null : he,
                                category: Object(l.a)(be) ? null : be,
                                moq: Object(l.a)(fe) ? null : fe,
                                image: me,
                                wallet_points: ge,
                                earnWalletpoint: je,
                                earnLoginPoints: Oe,
                                earnWalletpointValue: _e,
                                earnLoginPointsValue: Ce,
                                price_breakup: ve,
                                browse_category: ye,
                                review_images: we,
                                customer_review_video: ke,
                                rakhiPromoVideo: Object(l.a)(Pe) ? null : Pe,
                                chef: Object(l.a)(Se) ? null : Se,
                                international_disclaimer: Object(l.a)(Ee) ? null : Ee,
                                isNddProduct: xe,
                                variantProduct: d,
                                variant: p
                            });
                        case s.gb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                likeProducts: t.data.like_product_list,
                                recentlyViewedProducts: t.data.recent_product_list,
                                moreLinks: t.data.more_links
                            });
                        case s.bb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                customLikedProducts: t.data.like_product_list
                            });
                        case s.Wb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addon: t.addon
                            });
                        case s.r:
                            var Le = !0;
                            return Object(l.a)(t.data) || (Le = 1 === +t.data.isAvailable), Object(c.a)(Object(c.a)({}, e), {}, {
                                isProductAvailable: Le
                            });
                        case s.wb:
                            return Object(c.a)(Object(c.a)({}, u), {}, {
                                productNotFound: t.productNotFound
                            });
                        case s.xb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                productPageUrl: t.productPageUrl
                            });
                        case s.C:
                            return Object(c.a)({}, u);
                        case s.yb:
                            var Ie = t.data,
                                Re = Ie.attr_sp_arr,
                                Ue = Ie.vday_msg,
                                Fe = Ie.c_price,
                                Be = Ie.valentine_date,
                                Ge = e.attributes;
                            for (var He in Re)
                                if (3 === +Ge[He].display) {
                                    var Ve = Object.keys(Ge[He].options)[0];
                                    Ge[He].options[Ve].price = Re[He]
                                }
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                valentineMessage: Ue,
                                price: +Fe,
                                attributes: Object(c.a)({}, Ge),
                                valentineDate: Be
                            });
                        case s.ub:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                pinCodeEarlistDeliveryDate: t.data
                            });
                        default:
                            return e
                    }
                },
                p = {
                    cities: null
                },
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.E ? Object(c.a)(Object(c.a)({}, e), {}, {
                        cities: t.cities
                    }) : e
                },
                b = {
                    data: {
                        all_cities: [],
                        popular_cities: []
                    }
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : b,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.Y ? Object(c.a)(Object(c.a)({}, e), {}, {
                        data: t.cityPopupData
                    }) : e
                },
                m = {
                    reviewList: null,
                    rating: 0,
                    recommends: 0,
                    settings: null
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (t.type === s.zb) {
                        var a = t.reviewData,
                            n = a.rating_recommends,
                            r = a.review_list;
                        return Object(c.a)(Object(c.a)({}, e), {}, {
                            reviewList: r,
                            rating: Object(l.a)(n) ? 0 : n.rating,
                            recommends: Object(l.a)(n) ? 0 : n.recommends,
                            settings: t.settings
                        })
                    }
                    return e
                },
                j = a(55),
                O = {
                    addon: [],
                    attributes: [],
                    errors: null,
                    birthdayNumber: null,
                    selectedCandlesPrice: "",
                    occasionList: {},
                    selectedOccsion: null,
                    showCityStatus: !1,
                    isLockDown: 0
                },
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : O,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.a:
                            var a = [].concat(Object(j.a)(e.addon), [t.addon]);
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addon: a
                            });
                        case s.y:
                            var n = e.addon.filter((function(e) {
                                return +e.nid !== +t.addonId
                            }));
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addon: n
                            });
                        case s.G:
                            var r = !1,
                                i = e.attributes,
                                o = i.filter((function(e) {
                                    return +e.attributeId !== +t.payload.attributeId
                                }));
                            return o.length !== i.length && 245 !== +t.payload.attributeDisplay || (o.push(t.payload), r = !0), !1 !== r || 1 !== +t.payload.attributeDisplay && 0 !== +t.payload.attributeDisplay || o.push(t.payload), Object(c.a)(Object(c.a)({}, e), {}, {
                                attributes: o
                            });
                        case s.H:
                            var u = Object(c.a)({}, e.errors);
                            return u[t.payload.attributeId] = {
                                error: t.payload.error
                            }, Object(c.a)(Object(c.a)({}, e), {}, {
                                errors: u
                            });
                        case s.z:
                            var d = Object(c.a)({}, e.errors);
                            return Object(l.a)(d[t.payload.attributeId]) || delete d[t.payload.attributeId], Object(c.a)(Object(c.a)({}, e), {}, {
                                errors: d
                            });
                        case s.Hb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                selectedCandlesPrice: t.selectedCandlesPrice,
                                birthdayNumber: t.birthdayNumber
                            });
                        case s.Ib:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                selectedOccsion: t.selectedOccsion
                            });
                        case s.nb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                occasionList: t.occasionList
                            });
                        case s.c:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                showCityStatus: t.showCityStatus
                            });
                        case s.d:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isLockDown: t.isLockDown
                            });
                        case s.A:
                            var p = t.payload,
                                h = i.filter((function(e) {
                                    return +e.attributeId in p
                                }));
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addon: [],
                                attributes: h,
                                errors: null,
                                birthdayNumber: null,
                                selectedCandlesPrice: "",
                                selectedOccsion: null
                            });
                        default:
                            return e
                    }
                },
                y = {
                    contactNumber: 9650062220,
                    countCount: 0,
                    serverDateTime: {
                        date: null,
                        hour: null,
                        minutes: null,
                        seconds: null,
                        day: null,
                        nextDate: null,
                        dayAfterTomorrow: null
                    },
                    searchtap_resources: {
                        css: [],
                        js: []
                    },
                    earliestDeliveryDate: 20,
                    plantEarliestDeliveryDate: 17,
                    earliestDateEndTimingSingleSlot: 14,
                    earliestDateEndTimingGiftVendor: 19,
                    applyOffset: null,
                    earliestDeliveryDateDynamic: null,
                    skipOffsetForCities: "",
                    skipOffsetForProductType: "",
                    lockdownCities: null,
                    isUserAnonymous: !0,
                    isSiteHeaderRequestCompleted: !1,
                    userPickedCurrencyCountry: "INR",
                    userPickedCurrencyRate: 1,
                    userPickedCurrencyIcon: "Rs",
                    enableMultiCurrency: !0,
                    isUserInterNational: !1,
                    reloadPageValue: !0,
                    directLoginFromCart: 0,
                    in_cart: !1,
                    addToCartEnable: !0,
                    geoCurrency: "INR",
                    isNewAddressSelectionEnable: !1,
                    lastUsedAddressId: null,
                    userPickedPincode: "",
                    isCartMovedToAPI: !0,
                    selfServiceStatus: !0,
                    cityName: ""
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.Z:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                contactNumber: t.contactNumber
                            });
                        case s.Jb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                applyOffset: t.siteSettings.apply_offset || null,
                                earliestDeliveryDateDynamic: t.siteSettings.earliest_delivery_date || null,
                                skipOffsetForCities: t.siteSettings.skip_offset_for_cities || "",
                                skipOffsetForProductType: t.siteSettings.skip_offset_for_product_type || "",
                                enableMultiCurrency: 1 === t.siteSettings.is_multicurrency,
                                isUserInterNational: t.siteSettings.user_is_international,
                                directLoginFromCart: t.siteSettings.directLoginFromCart,
                                isSiteHeaderRequestCompleted: !0,
                                in_cart: t.siteSettings.in_cart || !1,
                                addToCartEnable: 1 === t.siteSettings.new_add_to_cart_feature,
                                geoCurrency: t.siteSettings.geoCurrency || null,
                                isNewAddressSelectionEnable: 1 === t.siteSettings.last_address_on_detail,
                                lastUsedAddressId: t.siteSettings.last_address_id || null,
                                isCartMovedToAPI: 1 === +t.siteSettings.new_cart_api,
                                selfServiceStatus: 1 === +t.siteSettings.self_service_status
                            }, t.siteSettings);
                        case s.Nb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedCity: t.userPickedCity
                            });
                        case s.Rb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedPincode: t.userPickedPincode
                            });
                        case s.Sb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedState: t.userPickedState
                            });
                        case s.cb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                cityName: t.cityName
                            });
                        case s.Ob:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedCurrencyCountry: t.userPickedCurrencyCountry
                            });
                        case s.Qb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedCurrencyRate: t.userPickedCurrencyRate
                            });
                        case s.Pb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userPickedCurrencyIcon: t.userPickedCurrencyIcon
                            });
                        case s.Db:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                reloadPageValue: t.reloadPageValue
                            });
                        case s.vb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                plantEarliestDeliveryDate: t.data
                            });
                        case s.jb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                lockdownCities: t.lockdownCities
                            });
                        default:
                            return e
                    }
                },
                C = {
                    deliveryMsg: "",
                    deliveryMsgStatus: null
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : C,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.g ? Object(c.a)(Object(c.a)({}, e), {}, {
                        deliveryMsg: t.deliveryMsg,
                        deliveryMsgStatus: t.deliveryMsgStatus
                    }) : e
                },
                k = {
                    deliveryAddress: null,
                    deliveryPinAddress: "Enter delivery area or pincode"
                },
                S = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : k,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.f ? Object(c.a)(Object(c.a)({}, e), {}, {
                        deliveryAddress: t.deliveryAddress,
                        deliveryPinAddress: t.deliveryPinAddress
                    }) : e
                },
                P = {
                    zoomStatus: !1
                },
                E = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : P,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.Vb ? Object(c.a)(Object(c.a)({}, e), {}, {
                        zoomStatus: t.zoomStatus
                    }) : e
                },
                x = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return "FETCH_PRODUCT_LIST" === t.type ? t.payload : e
                },
                D = {
                    links: {},
                    name: "Guest",
                    login_link: {
                        has_children: 0,
                        href: "/user",
                        level: 1,
                        open_new_page: !1,
                        title: "Sign In",
                        only_mobile: !0
                    },
                    isUserAnonymous: !0,
                    siteHeaderCallComplete: !1,
                    cartCount: 0,
                    walletPoint: 0
                },
                N = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : D,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.Lb:
                            return Object(c.a)(Object(c.a)(Object(c.a)({}, e), t.userAccount), {}, {
                                isUserAnonymous: t.isUserAnonymous,
                                siteHeaderCallComplete: !0
                            });
                        case s.Mb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                accountLinks: Object(c.a)({}, t.accountLinks),
                                userInfo: Object(c.a)({}, t.userInfo)
                            });
                        case s.Tb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isUserAnonymous: t.isUserAnonymous,
                                cartCount: t.cartCount,
                                walletPoint: t.walletPoint
                            });
                        default:
                            return e
                    }
                },
                T = {},
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.F ? Object(c.a)(Object(c.a)({}, e), t.menu) : e
                },
                A = {},
                L = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : A,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.fb ? Object(c.a)(Object(c.a)({}, e), t.result) : e
                },
                I = {
                    categoryProducts: {},
                    fetchingCategoryProducts: !1,
                    footerData: null
                },
                R = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.i:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                categoryProducts: t.categoryProducts
                            });
                        case s.V:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                fetchingCategoryProducts: t.fetchingCategoryProducts
                            });
                        case s.U:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                categoryProducts: t.categoryProducts,
                                footerData: t.categoryProducts.page.footer
                            });
                        default:
                            return e
                    }
                },
                U = {
                    quickLinks: null
                },
                F = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return t.type === s.Bb ? Object(c.a)(Object(c.a)({}, e), {}, {
                        quickLinks: t.quickLinks
                    }) : e
                },
                B = {
                    statusCode: 200,
                    statusText: "",
                    redirectUrl: null,
                    isLoading: !1,
                    pageType: null,
                    isMobile: "false",
                    logoData: null,
                    multiplePopup: !1
                },
                G = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : B,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.sb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                statusCode: t.statusCode
                            });
                        case s.qb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                redirectUrl: t.data
                            });
                        case s.pb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isLoading: t.isLoading
                            });
                        case s.tb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                pageType: t.pageType
                            });
                        case s.lb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                logoData: Object(c.a)({}, t.data)
                            });
                        case s.mb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                multiplePopup: t.value
                            });
                        default:
                            return e
                    }
                },
                H = a(141),
                V = a(29),
                q = (n = {
                    reviews: [],
                    itemList: [],
                    full_header: null,
                    fh_contains: "",
                    header: null,
                    schemaHeader: null,
                    footer: null,
                    settings: null,
                    unlockBanners: [],
                    todayBanners: [],
                    topUnlockBanners: [],
                    loadMoreBtn: !1,
                    blog: [],
                    cityModalOpenFrom: "",
                    autoCityPopUp: 1,
                    reviewData: null,
                    pager: {
                        pages: 0,
                        page: 0,
                        count: 0,
                        limit: 0
                    },
                    isFetching: !1,
                    metaDetails: null,
                    filterData: {
                        filterItems: [],
                        sortByItems: [],
                        primary_filter: [],
                        isFilterDataFetched: !1
                    },
                    isFilterEnabled: 0,
                    hasMoreItems: !0,
                    currentPage: 1,
                    pageScrolled: 1,
                    nextPage: 0
                }, Object(V.a)(n, "loadMoreBtn", !1), Object(V.a)(n, "isFilterApplied", 0), Object(V.a)(n, "isInternational", !1), Object(V.a)(n, "showEarliestDeliveryDate", !1), Object(V.a)(n, "covid19MeasuresFooter", null), Object(V.a)(n, "crumb", null), Object(V.a)(n, "price_range", null), Object(V.a)(n, "show_new_city_popup", !1), Object(V.a)(n, "schema_tag", null), Object(V.a)(n, "review_after_footer_key", !1), Object(V.a)(n, "cardSectionData", {
                    cardPosition: 6,
                    cardData: {
                        card_type: 1,
                        heading: "",
                        sub_heading: null,
                        class_name: "rakhiBoxContainer",
                        items: []
                    }
                }), Object(V.a)(n, "extra_content", null), Object(V.a)(n, "page_background_color", null), Object(V.a)(n, "rakhi_country_show", null), Object(V.a)(n, "related_blogs", null), Object(V.a)(n, "rakhiPromoVideo", null), Object(V.a)(n, "show_star_chef", null), Object(V.a)(n, "footer_teaser", null), Object(V.a)(n, "footer_content", null), Object(V.a)(n, "isShowResult", !1), n),
                K = function(e, t) {
                    var a = e.data,
                        n = a.content,
                        r = a.reviews,
                        i = a.results,
                        o = a.settings,
                        s = a.pager,
                        u = a.autoCityPopUp,
                        d = a.meta_details,
                        p = a.is_filter_enabled,
                        h = a.is_filter_applied,
                        b = a.is_primary_filter_enabled,
                        f = a.isInternational,
                        m = a.showEarliestDeliveryDate,
                        g = a.ntype,
                        O = a.covid_19_measures_footer,
                        v = a.crumb,
                        y = a.price_range,
                        _ = a.show_new_city_popup,
                        C = a.schema_tag,
                        w = a.review_after_footer_key,
                        k = a.category_card,
                        S = a.extra_content,
                        P = a.page_background_color,
                        E = a.related_blogs,
                        x = a.rakhi_promo_video,
                        D = a.rakhi_country_show,
                        N = a.show_star_chef,
                        T = n.header,
                        M = n.schemaHeader,
                        A = n.full_header,
                        L = n.footer,
                        I = n.unlock_banners,
                        R = n.today_banners,
                        U = n.top_unlock_banners,
                        F = n.review,
                        B = n.blog,
                        G = n.fh_contains,
                        H = n.footer_teaser,
                        V = n.footer_content;
                    Object(l.a)(s) || (s = {
                        pages: s.total_pages,
                        page: s.current,
                        count: s.total_records,
                        limit: s.item_per_page
                    });
                    var q = {},
                        K = +s.page + 1;
                    if (q.reviews = Object(l.a)(r) ? t.reviews : t.reviews.concat(r), q.itemList = Object(l.a)(i) ? [] : t.itemList.concat(i), q.todayBanners = Object(l.a)(R) ? t.todayBanners : R, q.topUnlockBanners = Object(l.a)(U) ? t.topUnlockBanners : U, q.unlockBanners = Object(l.a)(I) ? t.unlockBanners : I, q.reviewData = Object(l.a)(F) ? t.reviewData : F, q.header = Object(l.a)(T) ? t.header : T, q.schemaHeader = Object(l.a)(M) ? t.schemaHeader : M, q.full_header = Object(l.a)(A) ? t.full_header : A, q.fh_contains = Object(l.a)(G) ? t.fh_contains : G, q.footer = Object(l.a)(L) ? t.footer : L, q.settings = Object(l.a)(o) ? t.settings : o, q.pager = Object(l.a)(s) ? t.pager : s, q.blog = Object(l.a)(B) ? t.blog : B, q.autoCityPopUp = Object(l.a)(u) ? 1 : u, q.metaDetails = Object(l.a)(d) ? t.metaDetails : d, q.isFilterEnabled = Object(l.a)(p) ? t.isFilterEnabled : p, q.isFilterApplied = Object(l.a)(h) ? 0 : h, q.isPrimaryFilterEnabled = Object(l.a)(b) ? t.isPrimaryFilterEnabled : b, q.currentPage = +s.page, q.pageScrolled = K, q.loadMoreBtn = !1, q.isInternational = !Object(l.a)(f) && f, q.showEarliestDeliveryDate = !Object(l.a)(m) && m, q.ntype = Object(l.a)(g) ? "" : g, q.covid19MeasuresFooter = Object(l.a)(O) ? null : O, q.crumb = Object(l.a)(v) ? null : v, q.price_range = Object(l.a)(y) ? null : y, q.show_new_city_popup = !Object(l.a)(_) && _, q.schema_tag = !Object(l.a)(C) && C, q.review_after_footer_key = !Object(l.a)(w) && w, q.extra_content = Object(l.a)(S) ? null : S, q.page_background_color = Object(l.a)(P) ? null : P, q.rakhi_country_show = Object(l.a)(D) ? null : D, q.show_star_chef = Object(l.a)(N) ? null : N, q.related_blogs = Object(l.a)(E) ? null : E, q.rakhiPromoVideo = Object(l.a)(x) ? null : x, q.footer_teaser = Object(l.a)(H) ? null : H, q.footer_content = Object(l.a)(V) ? null : V, +s.pages === +s.page && (q.hasMoreItems = !1), Number(s.pages) >= K && (q.hasMoreItems = !0, K % 5 === 0 && (q.hasMoreItems = !1, q.loadMoreBtn = !0)), Object(l.a)(k)) q.cardSectionData = {};
                    else {
                        var J = {
                            cardPosition: k.position ? k.position : 6,
                            cardData: {
                                items: Object(l.a)(k.cards) ? [] : Object(j.a)(k.cards),
                                card_type: k.card_type || 1,
                                heading: k.title ? k.title : ""
                            }
                        };
                        q.cardSectionData = Object(c.a)({}, J)
                    }
                    return q
                },
                J = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.Xb:
                            return Object(c.a)(Object(c.a)({}, e), K(t.data, e));
                        case s.hb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isFetching: t.status
                            });
                        case s.db:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                filterData: {
                                    filterItems: Object(l.a)(t.data.filter) ? [] : t.data.filter,
                                    sortByItems: Object(l.a)(t.data.sort_by) ? [] : t.data.sort_by,
                                    primary_filter: Object(l.a)(t.data.primary_filter) ? [] : t.data.primary_filter,
                                    isFilterDataFetched: !0
                                }
                            });
                        case s.ib:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                loadMoreBtn: !1,
                                hasMoreItems: t.status
                            });
                        case s.B:
                            return Object(c.a)(Object(c.a)({}, e), t.data);
                        case s.I:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isShowResult: t.value
                            });
                        default:
                            return e
                    }
                },
                W = {
                    showStep2: !1,
                    cartTotal: 0,
                    cart_total_new: 0,
                    currency: "Rs.",
                    products: [],
                    lineItem: [],
                    payment_url: "",
                    ajaxError: !1,
                    errorMessage: ""
                },
                z = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : W,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (t.type === s.h) {
                        var a = t.values.products ? t.values.products : [],
                            n = t.values.cart_total,
                            r = t.values.cart_total_new,
                            i = t.values.currency,
                            o = !!t.values.showStep2 && t.values.showStep2,
                            u = t.values.payment_url ? t.values.payment_url : "",
                            d = t.values.line_itens ? t.values.line_itens : [],
                            p = !1,
                            h = "";
                        return Object(l.a)(t.values.errors) || (h = t.values.errors.main, p = !0), Object(c.a)(Object(c.a)({}, e), {}, {
                            showStep2: o,
                            cartTotal: n,
                            cart_total_new: r,
                            currency: i,
                            products: a,
                            errorMessage: h,
                            ajaxError: p,
                            lineItem: d,
                            payment_url: u
                        })
                    }
                    return Object(c.a)({}, e)
                },
                Y = {
                    profileDetailFromGetProfileDetailsAPI: {},
                    APIresponseOnProfileUpdate: "",
                    upiCards: [],
                    orderDetail: {},
                    orders: {},
                    reviews: {},
                    cardDetails: [],
                    notificationSettings: {},
                    walletDetail: {},
                    addresses: []
                },
                Q = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Y,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.Ab:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                profileDetailFromGetProfileDetailsAPI: Object(c.a)({}, t.payload)
                            });
                        case s.D:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                APIresponseOnProfileUpdate: t.payload
                            });
                        case s.ob:
                            var a = t.payload;
                            return e.orders && e.orders.results && (a.results = Object(c.a)(Object(c.a)({}, e.orders.results), a.results)), Object(c.a)(Object(c.a)({}, e), {}, {
                                orders: Object(c.a)({}, a)
                            });
                        case s.n:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                orderDetail: t.payload
                            });
                        case s.j:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                cardDetails: t.payload
                            });
                        case s.Ub:
                            var n = t.payload;
                            return e.walletDetail.history && (n.history = [].concat(Object(j.a)(e.walletDetail.history), Object(j.a)(n.history))), Object(c.a)(Object(c.a)({}, e), {}, {
                                walletDetail: Object(c.a)({}, n)
                            });
                        case s.l:
                            var r = t.payload;
                            return e.reviews.data && (r.data = Object(c.a)(Object(c.a)({}, e.reviews.data), r.data)), Object(c.a)(Object(c.a)({}, e), {}, {
                                reviews: r
                            });
                        case s.k:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                notificationSettings: t.payload
                            });
                        case s.m:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addresses: t.payload
                            });
                        case s.b:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addresses: [].concat(Object(j.a)(e.addresses), [t.payload])
                            });
                        case s.Zb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addresses: e.addresses.map((function(e) {
                                    return e.sno === t.payload.sno ? t.payload : e
                                }))
                            });
                        case s.e:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                addresses: e.addresses.filter((function(e) {
                                    return e.sno !== t.payload
                                }))
                            });
                        default:
                            return e
                    }
                },
                Z = {
                    isShow: !0,
                    formError: null,
                    messageList: null,
                    serviceType: null,
                    selectedCategory: null,
                    categories: null,
                    showTicketForm: null,
                    ticketFormMessage: null,
                    userData: null,
                    validateTicketMessage: null,
                    ticketSubmit: null,
                    ticketSubmitLoading: null,
                    subject: null,
                    path: null,
                    imageValidation: null,
                    subjectHeading: null,
                    displayMessage: null,
                    productList: null,
                    showBox: null,
                    productData: null,
                    sendToLastForm: null,
                    whatsAppLinkforMobile: null,
                    whatsAppLinkforDesktop: null,
                    modalIsOpen: null,
                    orderData: null,
                    otherId: null,
                    tickets: null,
                    successMessage: null,
                    showStatus: null,
                    orderStatus: null,
                    checkStatus: null,
                    isDelivered: null
                },
                X = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if ("SET_NEEDHELP_DATA" === t.type) {
                        var a = t.payload,
                            n = void 0 === a ? {} : a;
                        return Object(c.a)(Object(c.a)({}, e), {}, {
                            formError: n.formError ? t.payload.formError : e.formError,
                            messageList: t.payload.formError ? t.payload.formError : e.formError,
                            serviceType: t.payload.formError ? t.payload.formError : e.formError,
                            selectedCategory: t.payload.formError ? t.payload.formError : e.formError,
                            categories: t.payload.formError ? t.payload.formError : e.formError,
                            showTicketForm: t.payload.formError ? t.payload.formError : e.formError,
                            ticketFormMessage: t.payload.formError ? t.payload.formError : e.formError,
                            userData: t.payload.formError ? t.payload.formError : e.formError,
                            validateTicketMessage: t.payload.formError ? t.payload.formError : e.formError,
                            ticketSubmit: t.payload.formError ? t.payload.formError : e.formError,
                            ticketSubmitLoading: t.payload.formError ? t.payload.formError : e.formError,
                            subject: t.payload.formError ? t.payload.formError : e.formError,
                            path: t.payload.formError ? t.payload.formError : e.formError,
                            imageValidation: t.payload.formError ? t.payload.formError : e.formError,
                            subjectHeading: t.payload.formError ? t.payload.formError : e.formError,
                            displayMessage: t.payload.formError ? t.payload.formError : e.formError,
                            productList: t.payload.formError ? t.payload.formError : e.formError,
                            showBox: t.payload.formError ? t.payload.formError : e.formError,
                            productData: t.payload.formError ? t.payload.formError : e.formError,
                            sendToLastForm: t.payload.formError ? t.payload.formError : e.formError,
                            whatsAppLinkforMobile: t.payload.formError ? t.payload.formError : e.formError,
                            whatsAppLinkforDesktop: t.payload.formError ? t.payload.formError : e.formError,
                            modalIsOpen: t.payload.formError ? t.payload.formError : e.formError,
                            orderData: t.payload.formError ? t.payload.formError : e.formError,
                            otherId: t.payload.formError ? t.payload.formError : e.formError,
                            tickets: t.payload.formError ? t.payload.formError : e.formError,
                            successMessage: t.payload.formError ? t.payload.formError : e.formError,
                            showStatus: t.payload.formError ? t.payload.formError : e.formError,
                            orderStatus: t.payload.formError ? t.payload.formError : e.formError,
                            checkStatus: t.payload.formError ? t.payload.formError : e.formError,
                            isDelivered: t.payload.formError ? t.payload.formError : e.formError
                        })
                    }
                    return e
                },
                $ = {
                    nameTitle: "",
                    countryCode: "91",
                    countryCodeList: void 0,
                    countryDataWithName: void 0,
                    check_mobile: 0,
                    fullName: "",
                    email: "",
                    mobileNumber: "",
                    otpNumber: "",
                    is_register_user: void 0,
                    is_verified_user: void 0,
                    is_otp_send: 0,
                    message: "",
                    uid: 0,
                    changeEmailText: "",
                    showMobile: 0,
                    emailVerified: 0,
                    errors: null,
                    isValid: !1,
                    userEditFormStage: 1,
                    phoneChangeMessage: "",
                    showScreen: null,
                    is_fb_login: null,
                    is_email_different: null,
                    fbId: null,
                    fbIdToken: "",
                    fbIdPhoto: "",
                    fbIdfamilyName: "",
                    fbIdgivenName: "",
                    multipleCountryFlag: 0,
                    isMobileNumberEmpty: !1,
                    checkSingleTabPopUp: !1
                },
                ee = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.u:
                            var a = t.values,
                                n = a.email,
                                r = a.mobileNumber,
                                i = a.otpNumber,
                                o = a.errors,
                                u = a.nameTitle,
                                d = a.is_register_user,
                                p = a.is_verified_user,
                                h = a.is_otp_send,
                                b = a.message,
                                f = a.countryCodeList,
                                m = a.check_mobile,
                                g = a.changeEmailText,
                                O = a.showMobile,
                                v = a.fullName,
                                y = a.country_data,
                                _ = (a.showScreen, !0);
                            return !Object(l.a)(n) && !Object(l.a)(i) && Object(l.a)(o) && Object(l.a)(r) && Object(l.a)(b) && Object(l.a)(i) || (_ = !1), Object(c.a)(Object(c.a)({}, e), {}, {
                                nameTitle: u,
                                countryCode: Object(l.a)(f) ? "91" : f[0],
                                check_mobile: m,
                                email: n,
                                mobileNumber: t.values.mobileNumber,
                                is_register_user: d,
                                is_verified_user: p,
                                is_otp_send: h,
                                countryCodeList: f,
                                changeEmailText: g,
                                showMobile: O,
                                message: b,
                                errors: o,
                                otpNumber: "",
                                emailVerified: 0,
                                isValid: _,
                                fullName: v,
                                countryDataWithName: y,
                                showScreen: 1
                            });
                        case s.v:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                nameTitle: Object(l.a)(t.values.nameTitle) ? e.nameTitle : t.values.nameTitle,
                                countryCode: Object(l.a)(t.values.countryCode) ? e.countryCode : t.values.countryCode,
                                mobileNumber: Object(l.a)(t.values.mobileNumber) ? e.mobileNumber : t.values.mobileNumber,
                                fullName: Object(l.a)(t.values.fullName) ? e.fullName : t.values.fullName,
                                email: Object(l.a)(t.values.email) ? e.email : t.values.email,
                                otpNumber: t.values.otpNumber,
                                is_verified_user: Object(l.a)(t.values.is_verified_user) ? e.is_verified_user : t.values.is_verified_user,
                                emailVerified: Object(l.a)(t.values.emailVerified) ? e.emailVerified : t.values.emailVerified,
                                uid: Object(l.a)(t.values.uid) ? e.uid : t.values.uid,
                                is_otp_send: t.values.is_otp_send,
                                errors: t.values.errors,
                                isValid: !0,
                                multipleCountryFlag: Object(l.a)(t.values.multipleCountryFlag) ? e.multipleCountryFlag : t.values.multipleCountryFlag,
                                isMobileNumberEmpty: !!Object(l.a)(t.values.mobileNumber)
                            });
                        case s.ac:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                uid: t.values.uid,
                                otpNumber: t.values.otpNumber,
                                errors: t.values.errors,
                                isValid: !0
                            });
                        case s.x:
                            var C = "undefined" === t.values.mobileNumber ? "" : t.values.mobileNumber,
                                w = Object(l.a)(t.values.nameTitle) ? "Mr" : t.values.nameTitle;
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                nameTitle: w,
                                countryCode: t.values.countryCode,
                                check_mobile: t.values.check_mobile,
                                mobileNumber: C,
                                fullName: t.values.fullName,
                                email: t.values.email,
                                is_register_user: t.values.is_register_user,
                                is_verified_user: t.values.is_verified_user,
                                emailVerified: t.values.emailVerified,
                                is_otp_send: t.values.is_otp_send,
                                message: t.values.message,
                                changeEmailText: t.values.changeEmailText,
                                showMobile: t.values.showMobile,
                                errors: t.values.errors,
                                otpNumber: "",
                                isValid: !0
                            });
                        case s.w:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                nameTitle: t.values.nameTitle,
                                fullName: t.values.fullName,
                                mobileNumber: t.values.mobileNumber,
                                email: t.values.email,
                                errors: t.values.errors,
                                uid: t.values.uid,
                                isMobileNumberEmpty: !1,
                                isValid: !0
                            });
                        case s.t:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                showMobile: t.values.showMobile
                            });
                        case s.s:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                userEditFormStage: t.userEditFormStage,
                                isValid: !1
                            });
                        case s.q:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                mobileNumber: t.values.mobileNumber,
                                errors: t.values.errors,
                                phoneChangeMessage: t.values.message || e.phoneChangeMessage,
                                otpNumber: t.values.otpNumber,
                                isValid: !1
                            });
                        case s.ab:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                countryCodeList: t.countryCodeList
                            });
                        case s.kb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                errors: t.errors
                            });
                        case s.W:
                            var k = t.values;
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                errors: k.errors,
                                email: k.user_email,
                                otpNumber: k.otpNumber,
                                isValid: !1
                            });
                        case s.X:
                            var S = t.values;
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                is_register_user: S.is_register_user,
                                is_verified_user: S.is_verified_user,
                                is_otp_send: S.is_otp_send,
                                check_mobile: S.check_mobile,
                                fullName: S.user_name,
                                email: S.user_email,
                                showMobile: S.show_mobile,
                                showScreen: Object(l.a)(S.show_screen) ? e.showScreen : S.show_screen,
                                message: S.message,
                                is_fb_login: S.is_fb_login,
                                is_email_different: S.is_email_different,
                                fbId: Object(l.a)(S.fbId) ? e.fbId : S.fbId,
                                mobileNumber: Object(l.a)(S.mobile_number) ? e.mobileNumber : S.mobile_number,
                                changeEmailText: Object(l.a)(S.label) ? e.changeEmailText : S.label,
                                countryCodeList: Object(l.a)(S.country_code) ? e.countryCodeList : Object(j.a)(S.country_code),
                                countryDataWithName: Object(l.a)(S.country_data) ? e.countryCodeList : Object(j.a)(S.country_data),
                                fbIdToken: Object(l.a)(S.fbIdTokenn) ? e.fbIdTokenn : S.fbIdTokenn,
                                fbIdPhoto: Object(l.a)(S.fbIdPhoto) ? e.fbId : S.fbIdPhoto,
                                fbIdfamilyName: Object(l.a)(S.familyName) ? e.fbIdfamilyName : S.familyName,
                                fbIdgivenName: Object(l.a)(S.givenName) ? e.fbIdgivenName : S.givenName,
                                otpNumber: S.otpNumber,
                                isValid: !1,
                                isMobileNumberEmpty: !!Object(l.a)(S.mobile_number) && !Object(l.a)(e.mobileNumber),
                                countryCode: Object(l.a)(S.selectedCountryCode) ? e.countryCode : S.selectedCountryCode
                            });
                        case s.eb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                uid: t.uid,
                                checkSingleTabPopUp: !0
                            });
                        case s.Gb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                showScreen: t.screenValue
                            });
                        case s.o:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                changeEmailText: t.textValue
                            });
                        case s.p:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isMobileNumberEmpty: t.isMobileEmpty
                            });
                        default:
                            return Object(c.a)({}, e)
                    }
                },
                te = {
                    reviewsData: {},
                    reviewPageTitle: "Floweraura",
                    isProductReviewPage: !1
                },
                ae = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : te,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    switch (t.type) {
                        case s.rb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                reviewsData: t.payload
                            });
                        case s.Eb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                reviewPageTitle: t.payload
                            });
                        case s.Fb:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isProductReviewPage: t.payload
                            });
                        default:
                            return e
                    }
                },
                ne = {
                    cartPageLoader: !0,
                    isCartPageLoginModal: !1,
                    productObject: {},
                    deleteProductObject: {},
                    isLoding: !0,
                    hasError: !1,
                    isProductOutOfStock: !0,
                    outOfStockAddOnMsg: void 0,
                    cartProductMessageUpdate: {},
                    moveForward: !0,
                    cartPageAction: !1
                },
                re = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ne,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    switch (t.type) {
                        case s.Q:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                productObject: t.cartProductList,
                                isLoding: !1
                            });
                        case s.T:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                productObject: t.cartProductList.cart_details,
                                deleteProductObject: t.cartProductList.deleted_product,
                                isLoding: !1
                            });
                        case s.P:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                productObject: t.cartProductList,
                                isLoding: !1,
                                cartPageAction: !1
                            });
                        case s.R:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                cartProductMessageUpdate: t.cartProductMessageUpdate,
                                isLoding: !1
                            });
                        case s.S:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                productObject: t.outOfStockData.data.cart_details,
                                outOfStockAddOnMsg: t.outOfStockData.message,
                                moveForward: t.outOfStockData.data.move_forward,
                                isLoding: !1
                            });
                        case s.N:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isLoding: t.cartPageLoaderValue
                            });
                        case s.M:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isLoding: !1,
                                hasError: t.cartProductError
                            });
                        case s.O:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                isCartPageLoginModal: t.isLoginValue
                            });
                        default:
                            return e
                    }
                },
                ie = {
                    blogMenuData: [],
                    blogQuickLink: [],
                    blogCategoryData: []
                },
                oe = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    switch (t.type) {
                        case s.K:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                blogMenuData: t.blogMenu
                            });
                        case s.L:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                blogQuickLink: t.blogQuickLink
                            });
                        case s.J:
                            return Object(c.a)(Object(c.a)({}, e), {}, {
                                blogCategoryData: t.blogCategory
                            });
                        default:
                            return e
                    }
                },
                ce = {
                    rakhiChefDetailsData: null
                },
                se = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return t.type === s.Cb ? Object(c.a)(Object(c.a)({}, e), {}, {
                        rakhiChefDetailsData: t.rakhiChefDetails
                    }) : e
                },
                le = function(e) {
                    return Object(r.c)({
                        router: Object(H.b)(e),
                        product: d,
                        cities: h,
                        productReview: g,
                        addToCart: v,
                        settings: _,
                        deliveryMessage: w,
                        deliveryAddressObj: S,
                        zoomSettings: E,
                        ProductLists: x,
                        cityPopupData: f,
                        userAccount: N,
                        menu: M,
                        leftSideNavigationMenuReducer: L,
                        productList: R,
                        quickLinks: F,
                        pageData: G,
                        listing: J,
                        digitalCheckout: z,
                        loginInformation: ee,
                        review: ae,
                        userDashboard: Q,
                        cartPage: re,
                        needHelp: X,
                        blogPage: oe,
                        RakhiChefDetailsPage: se
                    })
                },
                ue = a(347),
                de = a(62);
            t.a = function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "/",
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = a.isMobile,
                    c = void 0 === n ? "false" : n,
                    s = a.isFlowerauraReferrer,
                    l = void 0 !== s && s,
                    u = o.t ? Object(de.d)({
                        initialEntries: [t]
                    }) : Object(de.a)(),
                    d = [i.a, Object(ue.a)(u)],
                    p = r.d.apply(void 0, [r.a.apply(void 0, d)].concat([])),
                    h = {
                        statusCode: 200,
                        statusText: "",
                        redirectUrl: null,
                        isLoading: !1,
                        pageType: null,
                        isMobile: c.toString(),
                        isFlowerauraReferrer: l
                    },
                    b = o.t ? {
                        pageData: h
                    } : function() {
                        var e = document.getElementById("__PRELOADED_STATE__");
                        return null !== e && "undefined" !== e ? JSON.parse(e.innerHTML) : {}
                    }();
                return {
                    store: Object(r.e)((e = le(u), function(t, a) {
                        return "RESET_STORE_DATA" === a.type && (t = void 0), e(t, a)
                    }), b, p),
                    history: u
                }
            }
        },
        351: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(1),
                r = a(25),
                i = a(26),
                o = a(68),
                c = a(34),
                s = a(35),
                l = a(3),
                u = a.n(l),
                d = (a(355), a(621), a(93)),
                p = a.n(d),
                h = a(100),
                b = a(6),
                f = a(2),
                m = a(17),
                g = a(80),
                j = a(8),
                O = a(14),
                v = a(179),
                y = a(7),
                _ = a(41),
                C = a(12),
                w = a(0),
                k = [{
                    productTitle: "Birthday Cakes"
                }, {
                    productTitle: "Flowers"
                }, {
                    productTitle: "Anniversary Combos"
                }, {
                    productTitle: "Combos"
                }, {
                    productTitle: "Birthday"
                }, {
                    productTitle: "Gifts"
                }, {
                    productTitle: "Anniversary"
                }, {
                    productTitle: "Chocolates"
                }, {
                    productTitle: "Birthday Combos"
                }, {
                    productTitle: "Birthday Flowers"
                }],
                S = function(e) {
                    Object(c.a)(a, e);
                    var t = Object(s.a)(a);

                    function a(e) {
                        var i;
                        return Object(r.a)(this, a), (i = t.call(this, e)).state = {
                            searchValue: "",
                            query: "",
                            resultPageView: !0,
                            isOpenSearchModal: i.props.isOpenSearchModal,
                            removePopularProduct: !1,
                            showInput: !1,
                            userAgent: ""
                        }, i.showAutoTypeText = function() {
                            var e = function(e, t, a) {
                                this.txtElement = e, this.words = t, this.txt = "", this.wordIndex = 0, this.wait = parseInt(a, 10), this.type(), this.isDeleting = !1
                            };
                            e.prototype.type = function() {
                                var e = this,
                                    t = this.wordIndex % this.words.length,
                                    a = this.words[t];
                                this.isDeleting ? this.txt = a.substring(0, this.txt.length - 1) : this.txt = a.substring(0, this.txt.length + 1), this.txtElement.innerHTML = '<span class="txt">'.concat(this.txt, "</span>");
                                this.isDeleting, this.isDeleting || this.txt !== a ? this.isDeleting && "" === this.txt && (this.isDeleting = !1, this.wordIndex++) : (this.wait, this.isDeleting = !0), setTimeout((function() {
                                    return e.type()
                                }), 300)
                            }, i.checkDeviceIsIOS() || function() {
                                var t = document.querySelector(".txt-type"),
                                    a = JSON.parse(t.getAttribute("data-words")),
                                    n = t.getAttribute("data-wait");
                                new e(t, a, n)
                            }()
                        }, i.handleSearchDataLayer = function() {
                            var e = {
                                action: "Query",
                                eventCategory: "Search",
                                eventLabel: i.state.query
                            };
                            Object(j.f)(e), Object(O.d)("clickEvent", e)
                        }, i.handleScroll = function() {
                            if (window.scrollY > 650 && window.scrollY < 3e3 && i.state.resultPageView) {
                                i.setState({
                                    resultPageView: !1
                                });
                                var e = {
                                    action: "Search Results Page Viewed",
                                    eventCategory: "Search",
                                    eventLabel: i.state.query
                                };
                                Object(j.f)(e), Object(O.d)("scrollEvent", e)
                            }
                            window.scrollY > 200 && i.setState({
                                isOpenSearchModal: !1
                            })
                        }, i.closeSearchBar = function() {
                            i.props.onCloseSearchBar && (document.getElementById("header-show-mobile").style.display = "block", i.props.onCloseSearchBar())
                        }, i.loadSearchTapAppCss = function() {
                            i.searchTapAppCss.map((function(e, t) {
                                Object(h.a)(b.c + "/" + e).then((function(e) {})).catch((function(e) {
                                    console.error("Unable to load the css", e)
                                }))
                            }))
                        }, i.loadSearchTapApp = function() {
                            if (i.searchTapAppJs) {
                                var e = i.searchTapAppJs.length;
                                i.searchTapAppJs.map((function(t, a) {
                                    Object(h.b)(b.c + "/" + t).then((function(t) {
                                        e - 1 === a && window.FaSearchTap && (window.FaSearchTap(), document.getElementById("quick-links").style.display = "none")
                                    })).catch((function(e) {
                                        console.error("Unable to load the scrips", e)
                                    }))
                                }))
                            }
                        }, i.directSearchValue = function() {
                            if (i.state.searchValue.length >= 5) {
                                var e = document.getElementsByClassName("img-wrapper"),
                                    t = document.getElementsByClassName("page-not-found-content"),
                                    a = document.getElementsByClassName("region-footer");
                                Object(f.a)(e) || (e[0].style.display = "none"), Object(f.a)(t) || (t[0].style.display = "none"), Object(f.a)(a) || (a[0].style.display = "none")
                            }
                        }, i.handleChange = function(e) {
                            e.persist();
                            var t = e.target.value;
                            Object(f.a)(t) ? (i.setState({
                                isOpenSearchModal: !0
                            }), Object(C.p)("shown", "popular search", i.props.locationPathname)) : (i.setState({
                                isOpenSearchModal: !1,
                                removePopularProduct: !1
                            }), Object(C.p)("close", "popular search", i.props.locationPathname)), i.setState({
                                query: e.target.value
                            }), t.length >= 3 && i.hideNotFound()
                        }, i.hideNotFound = function() {
                            var e = document.getElementsByClassName("app-main-content"),
                                t = document.getElementsByClassName("img-wrapper"),
                                a = document.getElementsByClassName("page-not-found-content");
                            Object(f.a)(e) || (e[0].style.display = "none"), Object(f.a)(t) || (t[0].style.display = "none"), Object(f.a)(a) || (a[0].style.display = "none")
                        }, i.handleSearchApiKey = function() {
                            var e = {
                                withCredentials: !0
                            };
                            y.a.get("fact") && (e = {
                                headers: {
                                    fact: y.a.get("fact")
                                },
                                withCredentials: !0
                            }), m.d.post("/api/floweraura/fa/search_data_save", g.a.get({
                                email: i.props.settings.user_info && i.props.settings.user_info.mail,
                                search_tags: i.state.query
                            }), Object(n.a)({}, e)).then((function(e) {})).catch((function(e) {
                                console.log(e)
                            }))
                        }, i.onClickOnInput = function() {
                            if ((i.searchTapAppJs = i.props.resources.js, i.searchTapAppCss = i.props.resources.css, i.loadSearchTapAppCss(), i.loadSearchTapApp(), Object(f.a)(i.state.query)) && !i.state.isOpenSearchModal) {
                                var e = {
                                    action: "Popular Search Shown",
                                    eventCategory: "Popular Search",
                                    eventLabel: window.location.href
                                };
                                Object(j.f)(e), Object(O.d)("clickEvent", e), Object(C.p)("shown", "popular search", i.props.locationPathname), i.setState({
                                    isOpenSearchModal: !0
                                })
                            }
                        }, i.removeData = function() {
                            if (!Object(f.a)(i.state.query) && i.state.removePopularProduct) {
                                i.setState({
                                    query: "",
                                    isOpenSearchModal: !0
                                }), Object(C.p)("shown", "popular search", i.props.locationPathname);
                                var e = window.location.pathname,
                                    t = p.a.parse(""),
                                    a = "/st-search?term=".concat(p.a.stringify(t));
                                "/st-search?term=" === a && (a = e), Object(_.i)({}, "", a)
                            }
                        }, i.setProductTitle = function(e) {
                            i.setState({
                                query: e,
                                isOpenSearchModal: !1,
                                removePopularProduct: !0,
                                showInput: !0
                            }, (function() {
                                i.loadSearchTapApp()
                            }));
                            var t = {
                                action: "Popular Search Clicked",
                                eventCategory: "Popular Search",
                                eventLabel: e
                            };
                            Object(j.f)(t), Object(O.d)("clickEvent", t);
                            var a = window.location.pathname,
                                n = p.a.parse(e),
                                r = "/st-search?term=".concat(p.a.stringify(n));
                            "/st-search?term=" === r && (r = a), Object(_.i)({}, "", r), i.hideNotFound(), Object(C.l)("popular search", e, r), Object(C.p)("close", "popular search", i.props.locationPathname)
                        }, i.handleOutsideClick = function(e) {
                            i.myRef.current.contains(e.target) || (i.setState({
                                isOpenSearchModal: !1
                            }), Object(C.p)("close", "popular search", i.props.locationPathname))
                        }, i.hideSearchDropDown = function(e) {
                            i.setState({
                                isOpenSearchModal: !1
                            })
                        }, i.showInputText = function() {
                            i.searchTapAppJs = i.props.resources.js, i.searchTapAppCss = i.props.resources.css, i.loadSearchTapAppCss(), i.loadSearchTapApp(), i.setState({
                                showInput: !0,
                                isOpenSearchModal: !0
                            }), Object(C.p)("shown", "popular search", i.props.locationPathname)
                        }, i.checkDeviceIsIOS = function() {
                            return /iPad|iPhone|iPod/.test(i.state.userAgent) && !window.MSStream
                        }, i.searchTapAppJs = i.props.resources.js, i.searchTapAppCss = i.props.resources.css, i.myRef = u.a.createRef(), i.handleSearchApiKey = Object(v.a)(i.handleSearchApiKey.bind(Object(o.a)(i)), 500), i.handleSearchDataLayer = Object(v.a)(i.handleSearchDataLayer.bind(Object(o.a)(i)), 500), i
                    }
                    return Object(i.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            if ("/st-search" === this.props.locationPathname && !Object(f.a)(window.location.search)) {
                                this.props.resources.js = ["sites/all/modules/custom/searchtap/react/js/2.searchtap.chunk.js", "sites/all/modules/custom/searchtap/react/js/main.searchtap.chunk.js"], this.props.resources.css = ["sites/all/modules/custom/searchtap/react/css/main.searchtap.chunk.css"], this.searchTapAppJs = this.props.resources.js, this.searchTapAppCss = this.props.resources.css, this.getSearchData();
                                var e = window.location.search;
                                Object(f.a)(e) || this.setState({
                                    searchValue: e,
                                    isOpenSearchModal: !1,
                                    showInput: !0
                                })
                            }
                            window.addEventListener("scroll", this.handleScroll), document.addEventListener("mousedown", this.handleOutsideClick), "false" === this.props.isMobileReq && document.querySelector(".tb-megamenu-nav").addEventListener("mouseover", this.hideSearchDropDown), this.setState({
                                userAgent: navigator.userAgent
                            }), this.showAutoTypeText()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            window.removeEventListener("scroll", this.handleScroll), document.removeEventListener("mousedown", this.handleOutsideClick)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            "/st-search" !== this.props.locationPathname || Object(f.a)(this.state.searchValue) || (this.directSearchValue(), this.loadSearchTapAppCss()), Object(f.a)(this.state.query) || this.handleSearchDataLayer(), this.props.settings.isUserAnonymous || Object(f.a)(this.state.query) || this.handleSearchApiKey()
                        }
                    }, {
                        key: "getSearchData",
                        value: function() {
                            var e = this;
                            setTimeout((function() {
                                e.loadSearchTapApp()
                            }), 2e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = {
                                    overflow: "hidden",
                                    display: this.props.show ? "block" : "none"
                                },
                                a = k.map((function(t) {
                                    return Object(w.jsx)("li", {
                                        onClick: function() {
                                            return e.setProductTitle(t.productTitle)
                                        },
                                        children: t.productTitle
                                    })
                                })),
                                n = function() {
                                    return e.state.isOpenSearchModal && Object(w.jsx)("div", {
                                        className: "search-dropdown",
                                        children: Object(w.jsx)("div", {
                                            className: "search-ui-dropdown",
                                            children: Object(w.jsxs)("div", {
                                                className: "search-ui-box",
                                                children: [Object(w.jsx)("h2", {
                                                    children: "Popular Searches"
                                                }), Object(w.jsx)("div", {
                                                    className: "search-ui-inner",
                                                    children: Object(w.jsx)("ul", {
                                                        children: a
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                };
                            return Object(w.jsx)(l.Fragment, {
                                children: "false" === this.props.isMobileReq ? Object(w.jsxs)("div", {
                                    ref: this.myRef,
                                    className: "react-search-box search-box",
                                    children: [Object(w.jsx)("div", {
                                        className: "search-container",
                                        style: {
                                            display: "block"
                                        },
                                        children: Object(w.jsxs)("div", {
                                            className: "container-inline-new desktop",
                                            children: [this.state.showInput ? Object(w.jsx)("input", {
                                                title: "Enter the terms you wish to search for.",
                                                type: "text",
                                                id: "search_block",
                                                name: "search_block_form",
                                                value: this.state.query,
                                                size: "15",
                                                maxLength: "128",
                                                className: "form-text ui-autocomplete-input",
                                                placeholder: "Search for gifts, flowers...",
                                                autoComplete: "off",
                                                autoFocus: !0,
                                                onChange: function(t) {
                                                    return e.handleChange(t)
                                                },
                                                onClick: function() {
                                                    e.onClickOnInput(), e.removeData()
                                                }
                                            }) : Object(w.jsxs)("p", {
                                                onClick: function() {
                                                    return e.showInputText()
                                                },
                                                children: ["Search for", Object(w.jsx)("span", {
                                                    className: "txt-type",
                                                    "data-wait": "3000",
                                                    "data-words": '[" flowers ", " cakes ", " gifts ", " plants ", " combos "]'
                                                })]
                                            }), Object(w.jsx)("em", {})]
                                        })
                                    }), n()]
                                }) : Object(w.jsxs)("div", {
                                    ref: this.myRef,
                                    className: "react-search-box search-box",
                                    children: [Object(w.jsx)("div", {
                                        className: "search-container",
                                        style: t,
                                        children: Object(w.jsxs)("div", {
                                            className: "container-inline-new mobile",
                                            children: [Object(w.jsx)("div", {
                                                className: "search-close",
                                                onClick: this.closeSearchBar,
                                                children: "X"
                                            }), this.checkDeviceIsIOS() ? Object(w.jsx)("input", {
                                                title: "Enter the terms you wish to search for.",
                                                type: "text",
                                                id: "search_block",
                                                name: "search_block_form",
                                                value: this.state.query,
                                                size: "15",
                                                maxLength: "128",
                                                className: "form-text ui-autocomplete-input",
                                                placeholder: "Search for gifts, flowers...",
                                                autoComplete: "off",
                                                onChange: function(t) {
                                                    return e.handleChange(t)
                                                },
                                                onClick: function() {
                                                    e.onClickOnInput(), e.removeData()
                                                }
                                            }) : this.state.showInput ? Object(w.jsx)("input", {
                                                title: "Enter the terms you wish to search for.",
                                                type: "text",
                                                id: "search_block",
                                                name: "search_block_form",
                                                value: this.state.query,
                                                size: "15",
                                                maxLength: "128",
                                                autoFocus: !0,
                                                className: "form-text ui-autocomplete-input",
                                                placeholder: "Search for gifts, flowers...",
                                                autoComplete: "off",
                                                onChange: function(t) {
                                                    return e.handleChange(t)
                                                },
                                                onClick: function() {
                                                    e.onClickOnInput(), e.removeData()
                                                }
                                            }) : Object(w.jsxs)("p", {
                                                onClick: function() {
                                                    return e.showInputText()
                                                },
                                                children: ["Search for", Object(w.jsx)("span", {
                                                    className: "txt-type",
                                                    "data-wait": "3000",
                                                    "data-words": '[" flowers ", " cakes ", " gifts ", " plants ", " combos "]'
                                                })]
                                            }), Object(w.jsx)("em", {})]
                                        })
                                    }), n()]
                                })
                            })
                        }
                    }]), a
                }(l.Component);
            t.default = S
        },
        358: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var n = a(1),
                r = Object.freeze(Object(n.a)({}, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    withCredentials: !0
                }))
        },
        36: function(e, t, a) {
            "use strict";
            a.d(t, "g", (function() {
                return u
            })), a.d(t, "f", (function() {
                return d
            })), a.d(t, "e", (function() {
                return p
            })), a.d(t, "c", (function() {
                return b
            })), a.d(t, "d", (function() {
                return f
            })), a.d(t, "a", (function() {
                return g
            })), a.d(t, "b", (function() {
                return j
            }));
            var n = a(55),
                r = a(4),
                i = a(2),
                o = a(17),
                c = a(224),
                s = a(168),
                l = a(104),
                u = function(e) {
                    return function(t) {
                        return t({
                            type: r.sb,
                            statusCode: e
                        })
                    }
                },
                d = function(e) {
                    return function(t) {
                        return t({
                            type: r.qb,
                            data: e
                        })
                    }
                },
                p = function(e) {
                    return function(t) {
                        return t({
                            type: r.pb,
                            isLoading: e
                        })
                    }
                },
                h = function(e) {
                    return function(t) {
                        return t({
                            type: r.tb,
                            pageType: e
                        })
                    }
                },
                b = function(e) {
                    return function(t) {
                        return t({
                            type: r.lb,
                            data: e
                        })
                    }
                },
                f = function(e) {
                    return function(t) {
                        return t({
                            type: r.mb,
                            value: e
                        })
                    }
                },
                m = function(e) {
                    return e.page && (e.current_page = parseInt(e.current_page) || 1, delete e.page), e.current_page && +e.current_page < 1 && (e.current_page = 1), {
                        params: e
                    }
                },
                g = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    return function(r) {
                        return new Promise((function(b, f) {
                            var g = m(t);
                            r(p(!0)), o.d.get("/api/floweraura".concat(e), g).then((function(t) {
                                r(p(!1));
                                var o = t.data;
                                if (Object(i.a)(o)) r(u("500")), r(p(!1)), f("Something went wrong");
                                else {
                                    var m = Object(i.a)(o.status_code) ? 500 : +o.status_code,
                                        j = !1,
                                        O = "";
                                    if (O = o.error ? o.error_message.split(" ").join("_") : o.message.split(" ").join("_"), 200 !== m && console.log(new Date, {
                                            pathname: e
                                        }, {
                                            statusCode: m
                                        }, "page_type :", o.data.page_type, "response_message :", O, "PM2_FA"), r(u(m)), 301 !== m && 302 !== m || r(d(o.data.url)), 200 === m) {
                                        if (e.includes("giftfinder") && (o.data.page_type = "listing_page", o.data.content = {}, o.data.settings = {}), r(h(o.data.page_type)), "landing_page" === o.data.page_type) g.params.current_page ? r(u(404)) : (j = !0, Object(c.b)(o, r));
                                        if ("listing_page" === o.data.page_type) {
                                            j = !0, Object(s.g)(o, r);
                                            var v = o.data,
                                                y = v.sections,
                                                _ = void 0 === y ? null : y,
                                                C = v.page_theme,
                                                w = v.title;
                                            if (_ && _.length > 0) {
                                                var k = {
                                                    data: {
                                                        page: {
                                                            sections: Object(n.a)(_),
                                                            footer: null,
                                                            title: w || null
                                                        },
                                                        page_theme: C || null
                                                    }
                                                };
                                                Object(c.b)(k, r)
                                            }
                                        }
                                        "detail_page" === o.data.page_type && (o.data.extraSettings = a, j = !0, Object(l.h)(o, r)), !1 === j && r(u(404))
                                    }
                                    b(o.data)
                                }
                            })).catch((function(e) {
                                r(u(404)), r(p(!1)), f(e)
                            }))
                        }))
                    }
                },
                j = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return function(a) {
                        return new Promise((function(n, r) {
                            var c = m(t);
                            a(p(!0)), o.d.get("/api/floweraura".concat(e), c).then((function(e) {
                                a(p(!1));
                                var t = e.data;
                                Object(i.a)(t) ? (a(u("500")), a(p(!1)), r("Something went wrong")) : (Object(l.h)(t, a), n(t.data))
                            })).catch((function(e) {
                                a(u(404)), a(p(!1)), r(e)
                            }))
                        }))
                    }
                }
        },
        4: function(e, t, a) {
            "use strict";
            a.d(t, "Yb", (function() {
                return n
            })), a.d(t, "E", (function() {
                return r
            })), a.d(t, "gb", (function() {
                return i
            })), a.d(t, "zb", (function() {
                return o
            })), a.d(t, "Wb", (function() {
                return c
            })), a.d(t, "a", (function() {
                return s
            })), a.d(t, "y", (function() {
                return l
            })), a.d(t, "G", (function() {
                return u
            })), a.d(t, "H", (function() {
                return d
            })), a.d(t, "z", (function() {
                return p
            })), a.d(t, "r", (function() {
                return h
            })), a.d(t, "A", (function() {
                return b
            })), a.d(t, "cb", (function() {
                return f
            })), a.d(t, "Bb", (function() {
                return m
            })), a.d(t, "g", (function() {
                return g
            })), a.d(t, "f", (function() {
                return j
            })), a.d(t, "Z", (function() {
                return O
            })), a.d(t, "Vb", (function() {
                return v
            })), a.d(t, "Y", (function() {
                return y
            })), a.d(t, "Lb", (function() {
                return _
            })), a.d(t, "Jb", (function() {
                return C
            })), a.d(t, "F", (function() {
                return w
            })), a.d(t, "V", (function() {
                return k
            })), a.d(t, "U", (function() {
                return S
            })), a.d(t, "i", (function() {
                return P
            })), a.d(t, "bb", (function() {
                return E
            })), a.d(t, "Nb", (function() {
                return x
            })), a.d(t, "Sb", (function() {
                return D
            })), a.d(t, "Ob", (function() {
                return N
            })), a.d(t, "Qb", (function() {
                return T
            })), a.d(t, "Pb", (function() {
                return M
            })), a.d(t, "wb", (function() {
                return A
            })), a.d(t, "xb", (function() {
                return L
            })), a.d(t, "C", (function() {
                return I
            })), a.d(t, "sb", (function() {
                return R
            })), a.d(t, "qb", (function() {
                return U
            })), a.d(t, "pb", (function() {
                return F
            })), a.d(t, "tb", (function() {
                return B
            })), a.d(t, "yb", (function() {
                return G
            })), a.d(t, "vb", (function() {
                return H
            })), a.d(t, "Xb", (function() {
                return V
            })), a.d(t, "B", (function() {
                return q
            })), a.d(t, "hb", (function() {
                return K
            })), a.d(t, "db", (function() {
                return J
            })), a.d(t, "ib", (function() {
                return W
            })), a.d(t, "h", (function() {
                return z
            })), a.d(t, "jb", (function() {
                return Y
            })), a.d(t, "ub", (function() {
                return Q
            })), a.d(t, "fb", (function() {
                return Z
            })), a.d(t, "Mb", (function() {
                return X
            })), a.d(t, "Tb", (function() {
                return $
            })), a.d(t, "eb", (function() {
                return ee
            })), a.d(t, "u", (function() {
                return te
            })), a.d(t, "v", (function() {
                return ae
            })), a.d(t, "x", (function() {
                return ne
            })), a.d(t, "w", (function() {
                return re
            })), a.d(t, "t", (function() {
                return ie
            })), a.d(t, "s", (function() {
                return oe
            })), a.d(t, "q", (function() {
                return ce
            })), a.d(t, "ab", (function() {
                return se
            })), a.d(t, "kb", (function() {
                return le
            })), a.d(t, "X", (function() {
                return ue
            })), a.d(t, "W", (function() {
                return de
            })), a.d(t, "Gb", (function() {
                return pe
            })), a.d(t, "o", (function() {
                return he
            })), a.d(t, "p", (function() {
                return be
            })), a.d(t, "ac", (function() {
                return fe
            })), a.d(t, "rb", (function() {
                return me
            })), a.d(t, "Eb", (function() {
                return ge
            })), a.d(t, "Fb", (function() {
                return je
            })), a.d(t, "Ab", (function() {
                return Oe
            })), a.d(t, "D", (function() {
                return ve
            })), a.d(t, "ob", (function() {
                return ye
            })), a.d(t, "n", (function() {
                return _e
            })), a.d(t, "l", (function() {
                return Ce
            })), a.d(t, "j", (function() {
                return we
            })), a.d(t, "k", (function() {
                return ke
            })), a.d(t, "Kb", (function() {
                return Se
            })), a.d(t, "Ub", (function() {
                return Pe
            })), a.d(t, "m", (function() {
                return Ee
            })), a.d(t, "b", (function() {
                return xe
            })), a.d(t, "Zb", (function() {
                return De
            })), a.d(t, "e", (function() {
                return Ne
            })), a.d(t, "Db", (function() {
                return Te
            })), a.d(t, "N", (function() {
                return Me
            })), a.d(t, "O", (function() {
                return Ae
            })), a.d(t, "Q", (function() {
                return Le
            })), a.d(t, "T", (function() {
                return Ie
            })), a.d(t, "P", (function() {
                return Re
            })), a.d(t, "R", (function() {
                return Ue
            })), a.d(t, "S", (function() {
                return Fe
            })), a.d(t, "M", (function() {
                return Be
            })), a.d(t, "K", (function() {
                return Ge
            })), a.d(t, "L", (function() {
                return He
            })), a.d(t, "J", (function() {
                return Ve
            })), a.d(t, "Cb", (function() {
                return qe
            })), a.d(t, "Rb", (function() {
                return Ke
            })), a.d(t, "Hb", (function() {
                return Je
            })), a.d(t, "Ib", (function() {
                return We
            })), a.d(t, "nb", (function() {
                return ze
            })), a.d(t, "lb", (function() {
                return Ye
            })), a.d(t, "I", (function() {
                return Qe
            })), a.d(t, "c", (function() {
                return Ze
            })), a.d(t, "d", (function() {
                return Xe
            })), a.d(t, "mb", (function() {
                return $e
            }));
            var n = "STORE_PRODUCT_INFORMATION",
                r = "SET_ALL_CITIES_LIST",
                i = "SET_LIKE_PRODUCTS",
                o = "SET_PRODUCT_REVIEW",
                c = "STORE_ADDON",
                s = "ADD_ADDON_T0_CART",
                l = "REMOVE_ADDON_T0_CART",
                u = "SET_ATTRIBUTE",
                d = "SET_ATTRIBUTE_ERROR",
                p = "REMOVE_ATTRIBUTE_ERROR",
                h = "MANAGE_PRODUCT_STOCK",
                b = "RESET_ADD_TO_CART_ATTRIBUTE",
                f = "SET_DEFAULT_CITY_IN_COOKIE",
                m = "SET_QUICK_LINKS",
                g = "DELIVERY_MESSAGE",
                j = "DELIVERY_ADDRESS_OBJ",
                O = "SET_CONTACT_NUMBER",
                v = "SET_ZOOM_STATUS",
                y = "SET_CITY_POPUP_DATA",
                _ = "SET_USER_ACCOUNT_DETAILS",
                C = "SET_SITE_SETTINGS",
                w = "SET_APP_MENU",
                k = "SET_CATEGORY_PRODUCTS_FETCHING_STATUS",
                S = "SET_CATEGORY_PRODUCTS",
                P = "FETCH_CATEGORY_PRODUCTS",
                E = "SET_CUSTOM_LIKED_PRODUCTS",
                x = "SET_USER_PICKED_CITY",
                D = "SET_USER_PICKED_STATE",
                N = "SET_USER_PICKED_CURRENCY_COUNTRY",
                T = "SET_USER_PICKED_CURRENCY_RATE",
                M = "SET_USER_PICKED_CURRENCY_ICON",
                A = "SET_PRODUCT_NOT_FOUND",
                L = "SET_PRODUCT_PAGE_URL",
                I = "RESET_PRODUCT_PAGE_STATES",
                R = "SET_PAGE_STATUS_CODE",
                U = "SET_PAGE_REDIRECT_URL",
                F = "SET_PAGE_LOADER",
                B = "SET_PAGE_TYPE",
                G = "SET_PRODUCT_PRICE_BASED_ON_VALENTINE",
                H = "SET_PLANT_END_TIME",
                V = "STORE_LIST_PAGE_DATA",
                q = "RESET_LIST_PAGE_DATA",
                K = "SET_LIST_PAGE_DATA_FETCHING",
                J = "SET_FILTER_DATA",
                W = "SET_LOAD_MORE_ITEMS_STATUS",
                z = "DIGITAL_CHECKOUT",
                Y = "SET_LOCKDOWN_CITIES",
                Q = "SET_PINCODE_EARLIST_DATE",
                Z = "SET_LEFTSIDE_NAVIGATION_MENUS",
                X = "SET_USER_ACCOUNT_LINKS",
                $ = "SET_USER_TYPE",
                ee = "SET_GLOBAL_USER",
                te = "OTP_EMAIL_DETAILS",
                ae = "OTP_RECEIVED_DETAILS",
                ne = "OTP_USER_REGISTRAION_DETAILS",
                re = "OTP_STORED_USER_INFORMATION",
                ie = "OTP_CHANGE_EMAIL_MOBILE",
                oe = "MOVE_USER_EDIT_FORM_STAGE",
                ce = "MANAGE_PHONE_CHANGE_REQUEST",
                se = "SET_COUNTRY_CODE_LIST",
                le = "SET_LOGIN_OTP_ERROR",
                ue = "SET_CHECK_USER_FB_RESPONSE",
                de = "SET_CHECK_USER_FB_ERROR",
                pe = "SET_SCREEN_TYPE",
                he = "MANAGE_CHANGE_LABEL_TEXT",
                be = "MANAGE_OTP_MOBILE_NUMBER_EMPTY",
                fe = "UPDATE_MOBILE_NUMBER_SINGLE_TAPUSER",
                me = "SET_PAGE_REVIEWS",
                ge = "SET_REVIEW_PAGE_TITLE",
                je = "SET_REVIEW_PRODUCT_PAGE",
                Oe = "SET_PROFILE_DETAIL",
                ve = "SAVE_PROFILE_RESPONSE",
                ye = "SET_ORDERS",
                _e = "GET_SPECIFIC_ORDER_DETAIL",
                Ce = "GET_REVIEWS",
                we = "GET_CARD_DETAILS",
                ke = "GET_NOTIFICATION_SETTINGS",
                Se = "SET_UPI_DETAIL",
                Pe = "SET_WALLET_DETAIL",
                Ee = "GET_SAVED_ADDRESSES",
                xe = "ADD_ADDRESSES",
                De = "UPDATE_ADDRESSES",
                Ne = "DELETE_ADDRESSES",
                Te = "SET_RELOAD_PAGE",
                Me = "SET_CART_PAGE_LOADER",
                Ae = "SET_CART_PAGE_LOGIN_MODAL",
                Le = "SET_CART_PAGE_PRODUCT_LIST",
                Ie = "SET_CART_PAGE_PRODUCT_REMOVE",
                Re = "SET_CART_PAGE_PRODUCT_INCREMENT_DECREMENT",
                Ue = "SET_CART_PAGE_PRODUCT_MSG_UPDATE",
                Fe = "SET_CART_PAGE_PRODUCT_OUTOFSTOCK",
                Be = "SET_CART_PAGE_ERROR",
                Ge = "SET_BLOG_MENU",
                He = "SET_BLOG_QUICK_LINK",
                Ve = "SET_BLOG_CATEGORY_DATA",
                qe = "SET_RAKHI_CHEF_DETAILS",
                Ke = "SET_USER_PICKED_PINCODE",
                Je = "SET_SELECTED_CANDLES_PRICE",
                We = "SET_SELECTED_OCCASION",
                ze = "SET_OCASSION_LIST",
                Ye = "SET_LOGO_DATA",
                Qe = "SET_BEST_SELLER_DATA",
                Ze = "CITY_CHECK_ERROR",
                Xe = "CITY_CHECK_LOCKDOWN",
                $e = "SET_MULTIPLE_POPUP"
        },
        40: function(e, t, a) {
            "use strict";
            a.d(t, "c", (function() {
                return f
            })), a.d(t, "d", (function() {
                return g
            })), a.d(t, "b", (function() {
                return j
            })), a.d(t, "f", (function() {
                return O
            })), a.d(t, "j", (function() {
                return y
            })), a.d(t, "k", (function() {
                return _
            })), a.d(t, "g", (function() {
                return C
            })), a.d(t, "i", (function() {
                return w
            })), a.d(t, "h", (function() {
                return k
            })), a.d(t, "e", (function() {
                return S
            })), a.d(t, "a", (function() {
                return E
            }));
            var n = a(29),
                r = a(1),
                i = a(4),
                o = (a(358), a(17)),
                c = a(120),
                s = a(104),
                l = a(7),
                u = a(2),
                d = a(6),
                p = (a(236), a(14)),
                h = a(80),
                b = a(8),
                f = function(e) {
                    return {
                        type: i.Z,
                        contactNumber: e
                    }
                },
                m = function(e) {
                    return function(t) {
                        return t({
                            type: i.Jb,
                            siteSettings: e
                        })
                    }
                },
                g = function(e) {
                    return {
                        type: i.vb,
                        data: e
                    }
                },
                j = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return function(f) {
                        var g = null !== e ? "?nid=".concat(e) : "";
                        if (g += null !== t ? "" === g ? "?city=".concat(t) : "&city=".concat(t) : "", !Object(u.a)(t))
                            if (f(v(t)), -1 !== t.indexOf("-")) {
                                var j = t.replace(/[^A-Z0-9]/gi, " ");
                                l.a.set("user_select_city", j, 10, d.f), l.a.set("user_select_pincode", "", 10, d.f)
                            } else l.a.set("user_select_city", t, 10, d.f), l.a.set("user_select_pincode", "", 10, d.f);
                        var O = [],
                            y = [],
                            _ = "",
                            C = "",
                            w = {
                                withCredentials: !0
                            };
                        if (l.a.get("fact") && (w = {
                                headers: {
                                    fact: l.a.get("fact")
                                },
                                withCredentials: !0
                            }), !a) {
                            var k = "";
                            "undefined" !== window && (k = window.location.search), _ = (O = (y = k && k.slice(1) && k.slice(1).split("&")) && y[0] && y[0].split("=")) && O[0], C = O && O[1]
                        }
                        var S = l.a.getCookieData("is_seo_organic") || 0,
                            P = window.location.search;
                        if (P = P.replace("?", ""), 1 === +S && !1 === d.t) {
                            l.a.set("is_seo_organic", 0, 10, d.f), g += "" === g ? "?utm_source=seo_organic" : "&utm_source=seo_organic";
                            var E = {
                                utm_source: "seo_organic",
                                url_params: P
                            };
                            return o.d.post("/api/fa/newfacart/site-header".concat(g), Object(r.a)({}, E), Object(r.a)({}, w)).then((function(e) {
                                var t = e.data.data,
                                    a = t.cookieData,
                                    n = t.removeCookie;
                                M(e), l.a.set("is_seo_organic", 0, 10, d.f), Object(u.a)(a) || N(a), Object(u.a)(n) || T(n)
                            })).catch((function(e) {
                                console.log("Error", e)
                            }))
                        }
                        if (Object(u.a)(O) || !1 === ["utm_source", "fa-source", "gclid", "fclid"].indexOf(_)) return o.d.post("/api/fa/newfacart/site-header".concat(g), h.a.get({
                            purl: window.location.pathname.slice(1)
                        }), Object(r.a)({}, w)).then((function(e) {
                            var t = e.data.data,
                                a = t.cookieData,
                                n = t.removeCookie;
                            M(e), Object(u.a)(a) || N(a), Object(u.a)(n) || T(n)
                        })).catch((function(e) {
                            console.log("Error", e)
                        }));
                        var x, D = (x = {}, Object(n.a)(x, _, C), Object(n.a)(x, "url_params", P), x);
                        return o.d.post("/api/fa/newfacart/site-header".concat(g), Object(r.a)({}, D), Object(r.a)({}, w)).then((function(e) {
                            var t = e.data.data,
                                a = t.cookieData,
                                n = t.removeCookie;
                            M(e), Object(u.a)(a) || N(a), Object(u.a)(n) || T(n)
                        })).catch((function(e) {
                            console.log("Error", e)
                        }));

                        function N(e) {
                            e.map((function(e, t) {
                                Object.keys(e).map((function(t) {
                                    l.a.set(t, e[t], 10, d.f)
                                }))
                            }))
                        }

                        function T(e) {
                            e.map((function(e, t) {
                                Object.keys(e).map((function(e) {
                                    l.a.delete(e)
                                }))
                            }))
                        }

                        function M(e) {
                            if (e.data.data.cityId && l.a.set("fc_cn", e.data.data.cityId, 10, d.f), f(Object(c.a)(e.data.data.user_account, e.data.data.isUserAnonymous)), delete e.data.data.user_account, f(Object(s.g)(e.data.data.stock)), !Object(u.a)(e.data.data.valentine_data)) {
                                var t = Object(r.a)({}, e.data.data.valentine_data);
                                t.valentine_date = e.data.data.pdate, f(Object(s.j)(t))
                            }
                            var a = e.data.data.walletPoint ? e.data.data.walletPoint : 0;
                            f(Object(c.d)(e.data.data.isUserAnonymous, e.data.data.cartCount, a)), e.data.data.isUserAnonymous || f(Object(c.c)(e.data.data.users_link, e.data.data.user_info));
                            var n = e.data.data.isUserAnonymous ? "Guest" : "loggedIn",
                                o = {
                                    userStatus: n
                                };
                            return Object(b.d)("user_status", {
                                "User Login Status": n
                            }), Object(b.f)(o), Object(p.d)("userLoginStatus", o), 0 === e.data.data.is_multicurrency && (l.a.set("user_select_currency", "INR", 10, d.f), l.a.set("user_select_rate", 1, 10, d.f), l.a.set("user_select_icon", "Rs", 10, d.f)), f({
                                type: i.Jb,
                                siteSettings: e.data.data
                            }), f(m(e.data.data))
                        }
                    }
                },
                O = function(e) {
                    return {
                        type: i.Nb,
                        userPickedCity: e
                    }
                },
                v = function(e) {
                    return {
                        type: i.cb,
                        cityName: e
                    }
                },
                y = function(e) {
                    return {
                        type: i.Rb,
                        userPickedPincode: e
                    }
                },
                _ = function(e) {
                    return {
                        type: i.Sb,
                        userPickedState: e
                    }
                },
                C = function(e) {
                    return {
                        type: i.Ob,
                        userPickedCurrencyCountry: e
                    }
                },
                w = function(e) {
                    return {
                        type: i.Qb,
                        userPickedCurrencyRate: e
                    }
                },
                k = function(e) {
                    return {
                        type: i.Pb,
                        userPickedCurrencyIcon: e
                    }
                },
                S = function(e) {
                    return {
                        type: i.Db,
                        reloadPageValue: e
                    }
                },
                P = function(e) {
                    return {
                        type: i.jb,
                        lockdownCities: e
                    }
                },
                E = function() {
                    return function(e) {
                        return new Promise((function(t, a) {
                            o.d.get("/api/floweraura/citiesmapping").then((function(a) {
                                var n = a.data;
                                Object(u.a)(n.data) || 200 !== n.status_code || e(P(n.data)), t(n)
                            })).catch((function(e) {
                                console.log("Something went wrong while fetching cities"), a(e)
                            }))
                        }))
                    }
                }
        },
        41: function(e, t, a) {
            "use strict";
            a.d(t, "g", (function() {
                return o
            })), a.d(t, "a", (function() {
                return c
            })), a.d(t, "c", (function() {
                return s
            })), a.d(t, "d", (function() {
                return l
            })), a.d(t, "i", (function() {
                return u
            })), a.d(t, "j", (function() {
                return d
            })), a.d(t, "e", (function() {
                return p
            })), a.d(t, "b", (function() {
                return h
            })), a.d(t, "f", (function() {
                return b
            })), a.d(t, "h", (function() {
                return f
            }));
            var n = a(6),
                r = a(2),
                i = a(226),
                o = function() {
                    return !!"m.floweraura.com|www.floweraura.com|floweraura.com".split("|").includes(n.p)
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return null != e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : e
                },
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = i.data;
                    "object" === typeof t && (t = "undefined" !== typeof t[0] ? +t[0] : null);
                    var n = 0;
                    if (a.length > 0)
                        for (var r = 0; r < a.length; r++) {
                            var o = a[r];
                            if (o.id === t) return o.id;
                            var c = o.cities;
                            if ("undefined" !== typeof c && c.length > 0)
                                for (var s = 0; s < c.length; s++) {
                                    if (e == c[s]) {
                                        n = o.id;
                                        break
                                    }
                                }
                            if (n > 0) break
                        }
                    return 0 === n ? 3 : n
                },
                l = function(e) {
                    var t = i.data,
                        a = 0;
                    if (t.length > 0)
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n].cities;
                            if ("undefined" !== typeof r && r.length > 0)
                                for (var o = 0; o < r.length; o++) {
                                    var c = r[o];
                                    if (e.toLowerCase() == c.toLowerCase()) {
                                        a = 1;
                                        break
                                    }
                                }
                            if (a > 0) break
                        }
                    return a
                },
                u = function(e, t, a) {
                    window.history.pushState(e, t, a)
                },
                d = function(e) {
                    var t = {};
                    if (null !== e && "undefined" !== e)
                        for (var a in e) null !== e[a] && e[a].length > 0 && "undefined" !== e[a] && (t[a] = e[a]);
                    return t
                },
                p = function() {
                    for (var e = n.i.split("|"), t = window.location.origin, a = 0; a < e.length; a++)
                        if (-1 !== t.indexOf(e[a])) return !0;
                    return !1
                },
                h = function(e, t) {
                    return Object(r.a)(t) ? null : t.get(e)
                },
                b = function() {
                    return "localhost" === window.location.hostname
                },
                f = function(e) {
                    var t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
                        a = decodeURIComponent(atob(t).split("").map((function(e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                        })).join(""));
                    return JSON.parse(a)
                }
        },
        594: function(e, t, a) {},
        597: function(e, t, a) {},
        6: function(e, t, a) {
            "use strict";
            a.d(t, "s", (function() {
                return l
            })), a.d(t, "t", (function() {
                return u
            })), a.d(t, "i", (function() {
                return f
            })), a.d(t, "c", (function() {
                return m
            })), a.d(t, "q", (function() {
                return g
            })), a.d(t, "z", (function() {
                return j
            })), a.d(t, "f", (function() {
                return O
            })), a.d(t, "a", (function() {
                return v
            })), a.d(t, "e", (function() {
                return y
            })), a.d(t, "p", (function() {
                return _
            })), a.d(t, "m", (function() {
                return C
            })), a.d(t, "b", (function() {
                return w
            })), a.d(t, "B", (function() {
                return k
            })), a.d(t, "o", (function() {
                return S
            })), a.d(t, "h", (function() {
                return P
            })), a.d(t, "y", (function() {
                return E
            })), a.d(t, "u", (function() {
                return x
            })), a.d(t, "v", (function() {
                return D
            })), a.d(t, "j", (function() {
                return N
            })), a.d(t, "k", (function() {
                return T
            })), a.d(t, "g", (function() {
                return M
            })), a.d(t, "l", (function() {
                return A
            })), a.d(t, "x", (function() {
                return L
            })), a.d(t, "r", (function() {
                return I
            })), a.d(t, "A", (function() {
                return R
            })), a.d(t, "w", (function() {
                return U
            })), a.d(t, "d", (function() {
                return F
            })), a.d(t, "n", (function() {
                return B
            }));
            var n = a(2),
                r = null,
                i = null,
                o = null,
                c = "";
            Object(n.a)(window.location) || (o = window.location.origin.split("//")[1].split("."));
            var s = 1;
            switch (!Object(n.a)(o) && o.length > 0 && (-1 !== o.indexOf("floweraura") ? s = 1 : -1 !== o.indexOf("bakewish") && (s = 0), r = o.map((function(e) {
                return {
                    name: e
                }
            }))), Object(n.a)(r) || (i = r.filter((function(e) {
                return "dilip" === e.name || "prachi" === e.name || "bambam" === e.name || "mayank" === e.name || "saurabh" === e.name || "crm5" === e.name || "amit" === e.name || "jitendra" === e.name
            }))), !Object(n.a)(i) && i.length > 0 && (c = i[0].name), c) {
                case "dilip":
                    "https://dilipapis.bakewish.in";
                    break;
                case "bambam":
                    "https://bambamapis.bakewish.in";
                    break;
                case "amit":
                    "https://amitapis.bakewish.in";
                    break;
                case "mayank":
                    "https://mayankapis.bakewish.in";
                    break;
                case "saurabh":
                    "https://saurabhapis.bakewish.in";
                    break;
                case "prachi":
                    "https://prachiapis.bakewish.in";
                    break;
                case "crm5":
                    "https://crmapis5.bakewish.in";
                    break;
                case "jitendra":
                    "https://jitendrapis.bakewish.in";
                    break;
                case "mintu":
                    "https://mintuapis.bakewish.in";
                    break;
                default:
                    "https://bakewishapis.bakewish.in"
            }
            var l = s,
                u = !(!Object(n.a)(window) && !Object(n.a)(window.document)),
                d = function(e) {
                    if (u) return e;
                    var t = window.location.origin;
                    return t.indexOf("product.bakewish") > 0 || "localhost" === window.location.hostname ? e : t
                },
                p = {
                    ENV: l ? "production" : "development",
                    production: {
                        BASE_URL: d("https://www.floweraura.com"),
                        API_ENDPOINT: "https://apis.floweraura.com",
                        GOOGLE_PLACES_API_KEY: "AIzaSyAqnwJULK5ZJ3RBkSr4bLUaV02uZ-wm2Pc",
                        GOOGLE_CLIENT_ID: "680967075954-dd4n370j2bs4lgnh4s8iskg9s1n9f2np.apps.googleusercontent.com",
                        IMAGE_BASE_URL: "https://imgcdn.floweraura.com",
                        ORGANIC_URL: "https://www.google.com/",
                        COOKIE_BASE_DOMAIN: ".floweraura.com",
                        SELF_SERVICE_URL: "https://apis.floweraura.com",
                        TRACK_ORDER_API: "https://opr.floweraura.com",
                        HEADER_OPR_KEY: "FrdfHSFsdetrESRSDDCSDg9ytrewtwerR",
                        WEBENGAGE_LICENSE: "d3a4ab04",
                        CRITEO_LICENSE: 96452
                    },
                    development: {
                        BASE_URL: d("https://www.mintu.bakewish.in"),
                        API_ENDPOINT: "https://mintuapis.bakewish.in",
                        API_ENDPOINT_FOR_QUICK_LINKS: "https://mintuapis.bakewish.in",
                        GOOGLE_PLACES_API_KEY: "AIzaSyAqnwJULK5ZJ3RBkSr4bLUaV02uZ-wm2Pc",
                        GOOGLE_CLIENT_ID: "121966078619-mkppae1a09adb07271hpt924dtklqa8m.apps.googleusercontent.com",
                        IMAGE_BASE_URL: "https://www.bakewish.in/",
                        ORGANIC_URL: "https://www.bakewish.in/",
                        COOKIE_BASE_DOMAIN: ".bakewish.in",
                        SELF_SERVICE_URL: "https://zenddeskapis.bakewish.in",
                        TRACK_ORDER_API: "https://devoprnew.bakewish.in",
                        HEADER_OPR_KEY: "FrdfHSFsdetrESRSDDCSDg9ytrewtwerR",
                        WEBENGAGE_LICENSE: "aa132652",
                        CRITEO_LICENSE: 12345
                    }
                },
                h = p[p.ENV],
                b = h.BASE_URL,
                f = "floweraura|bakewish|localhost",
                m = b,
                g = h.IMAGE_BASE_URL,
                j = (h.ORGANIC_URL, h.SELF_SERVICE_URL),
                O = h.COOKIE_BASE_DOMAIN,
                v = "".concat(b),
                y = "".concat(b, "/cart"),
                _ = !0 === u ? "localhost" : window.location.hostname,
                C = (h.GOOGLE_PLACES_API_KEY, h.GOOGLE_CLIENT_ID),
                w = h.API_ENDPOINT,
                k = h.TRACK_ORDER_API,
                S = h.HEADER_OPR_KEY,
                P = (h.WEBENGAGE_LICENSE, h.CRITEO_LICENSE),
                E = 0 === l ? h.API_ENDPOINT_FOR_QUICK_LINKS : h.API_ENDPOINT,
                x = 0,
                D = 0,
                N = 1,
                T = 20,
                M = 14,
                A = 20,
                L = 17,
                I = 70,
                R = {
                    success: "200,201,202,301,302,304",
                    error: "400,401,402,403,404,429,500,501,502,503,504"
                },
                U = 1,
                F = 47114,
                B = 228
        },
        616: function(e, t, a) {},
        617: function(e, t, a) {},
        621: function(e, t, a) {},
        652: function(e, t, a) {},
        663: function(e, t, a) {},
        664: function(e, t, a) {},
        665: function(e, t, a) {},
        666: function(e, t, a) {},
        681: function(e, t, a) {},
        682: function(e, t, a) {},
        683: function(e, t, a) {},
        684: function(e, t, a) {},
        685: function(e, t, a) {},
        686: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(25),
                r = a(26),
                i = a(34),
                o = a(35),
                c = (a(366), a(382), a(3)),
                s = a.n(c),
                l = a(102),
                u = a(101),
                d = a(9),
                p = a.n(d),
                h = a(11),
                b = a.n(h),
                f = a(13),
                m = a(143),
                g = a(30),
                j = (a(180), a(42)),
                O = a.n(j),
                v = a(7),
                y = a(350),
                _ = a.n(y),
                C = a(14),
                w = a(183),
                k = a(2),
                S = a(1),
                P = (a(616), a(172)),
                E = a(41),
                x = a(8),
                D = a(0),
                N = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        var e;
                        Object(n.a)(this, a);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).state = {
                            isCityModalOpen: !1,
                            cityModalOpenFrom: ""
                        }, e.openCityPopup = function() {
                            e.props.fetchCityPopupData(), e.setState({
                                isCityModalOpen: !0
                            })
                        }, e.checkIfCityIsUnderLockdown = function(t, a) {
                            var n = {
                                isCityIsUnderLockdown: -1
                            };
                            if (!Object(k.a)(a)) {
                                a = String(a).toLowerCase();
                                var r = [];
                                if (!Object(k.a)(t) && !Object(k.a)(t.city_list)) {
                                    for (var i = t.city_list, o = Object.keys(i), c = !1, s = 0; s < o.length; s++) {
                                        var l = o[s];
                                        if (o[s] = o[s].toLowerCase(), i[o[s]] = i[l], l !== o[s] && delete i[l], o[s] === a) {
                                            c = !0;
                                            break
                                        }
                                    }
                                    var u = t.cat_details || [];
                                    if (c && !Object(k.a)(u)) {
                                        var d = Object.assign({}, i[a].categories || []),
                                            p = Object.values(d);
                                        p.includes(100) || p.push(100), Object(k.a)(p) || (r = e.getObjectsFromCategories(p, u)), n.isCityIsUnderLockdown = 0
                                    } else r = e.getObjectsFromCategories([100], u), n.isCityIsUnderLockdown = 1
                                }
                                n.deliverableCategories = r
                            }
                            return n
                        }, e.getObjectsFromCategories = function(e, t) {
                            var a = [];
                            return Object(k.a)(e) || Object(k.a)(t) || e.map((function(e) {
                                return Object(k.a)(t[e]) || t[e].map((function(e) {
                                    return a.push(e), null
                                })), null
                            })), a
                        }, e.generateLinkTags = function(t) {
                            var a = [];
                            if (!Object(k.a)(t)) {
                                var n = t.length - 1;
                                t.map((function(t, r) {
                                    var i = "";
                                    r < n && (n > 1 && (i += ", "), r === n - 1 && (i += " & ")), a.push(Object(D.jsxs)(s.a.Fragment, {
                                        children: [Object(D.jsx)("a", {
                                            onClick: function(a) {
                                                return e.onCategoriesLinkClick(a, t)
                                            },
                                            href: t.url,
                                            children: Object(E.a)(t.label)
                                        }), i]
                                    }, r))
                                }))
                            }
                            return a
                        }, e.onCloseCityModal = function() {
                            e.setState({
                                isCityModalOpen: !1,
                                cityModalOpenFrom: ""
                            })
                        }, e.openCityModalGTM = function() {
                            e.props.openCityModal();
                            var t = {
                                action: "Check City",
                                eventCategory: "Strip",
                                eventLabel: "Click"
                            };
                            Object(x.f)(t), Object(C.d)("OnCheckCity", t)
                        }, e.onCategoriesLinkClick = function(e, t) {
                            var a = {
                                action: "categories available",
                                eventCategory: "Strip",
                                eventLabel: t.label
                            };
                            Object(x.f)(a), Object(C.d)("OnCheckCity", a)
                        }, e
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            Object(k.a)(this.props.lockdownCities)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.lockdownCities;
                            if (Object(k.a)(t)) return null;
                            var a = this.props.getCookie("user_select_city"),
                                n = this.checkIfCityIsUnderLockdown(t, a),
                                r = n.isCityIsUnderLockdown,
                                i = n.deliverableCategories,
                                o = {
                                    headline: "Latest Update: Delivery Available in selected Cities",
                                    href: "https://www.floweraura.com/blog/latest-update-limited-delivery",
                                    text: "Check City",
                                    style: {
                                        backgroundColor: "#ff5f5d"
                                    },
                                    link: !0
                                };
                            if (0 === r) {
                                o.href = "/cakes/regular", o.text = "Send Cakes", o.style = {
                                    backgroundColor: "#199100",
                                    borderBottomColor: "#199100"
                                }, o.link = !1;
                                var c = this.generateLinkTags(i);
                                Object(k.a)(c) && (o.link = !0, c.push("Cakes")), o.headline = Object(D.jsxs)("span", {
                                    className: "latestUpdte",
                                    children: ["We are delivering ", c, " in ", Object(E.a)(a)]
                                })
                            }
                            return 1 === r && (o.headline = "Send digital gifts during Lockdown", o.href = "/digital-gifts", o.text = "Send Gifts", o.style = {
                                backgroundColor: "#ec913c",
                                borderBottomColor: "#ec913c"
                            }), Object(D.jsxs)(s.a.Fragment, {
                                children: [Object(D.jsx)(P.a, {
                                    isCityModalOpenProps: this.state.isCityModalOpen,
                                    onCloseCityModal: this.onCloseCityModal,
                                    cityPopupData: this.props.cityPopupData,
                                    cityModalOpenFrom: this.state.cityModalOpenFrom
                                }), Object(D.jsx)("div", {
                                    className: "latest_update",
                                    children: Object(D.jsx)("div", {
                                        className: "latest_text",
                                        style: o.style,
                                        children: Object(D.jsxs)("p", {
                                            children: [o.headline, o.link ? Object(D.jsx)("a", Object(S.a)(Object(S.a)({
                                                rel: "noopener noreferrer"
                                            }, "Check City" === o.text ? {
                                                onClick: function(t) {
                                                    t.preventDefault(), e.openCityModalGTM()
                                                }
                                            } : {}), {}, {
                                                href: o.href,
                                                target: "_blank",
                                                children: o.text
                                            })) : null]
                                        })
                                    })
                                })]
                            })
                        }
                    }]), a
                }(c.Component),
                T = N,
                M = a(6),
                A = a(51),
                L = a(351),
                I = (a(652), a.p + "static/media/signin.acb7d4e3.svg"),
                R = a(12),
                U = Object(g.c)((function(e) {
                    return {
                        accountLinks: e.userAccount.accountLinks,
                        userInfo: e.userAccount.userInfo,
                        locationPathname: e.router.location.pathname
                    }
                }))((function(e) {
                    var t = null,
                        a = null,
                        n = e.locationPathname.substring(1),
                        r = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            localStorage.removeItem("needhelp"), localStorage.removeItem("needhelpformdata"), v.a.delete("fact"), window.location = M.c + e
                        };
                    return e.accountLinks && (t = Object.keys(e.accountLinks).map((function(t, i, o) {
                        if (e.accountLinks[i].hasOwnProperty("showInAccount") && !0 === e.accountLinks[i].showInAccount) return Object(D.jsx)("li", {
                            className: "item".concat(i),
                            children: "Logout" === e.accountLinks[i].title ? "" !== n ? Object(D.jsx)("a", {
                                href: "javascript:void(0)",
                                title: e.accountLinks[i].title,
                                className: "logout-first-btn",
                                onClick: function() {
                                    r("".concat(e.accountLinks[i].href, "?destination=").concat(n)), Object(R.h)(e.accountLinks[i].title, e.accountLinks[i].href)
                                },
                                children: e.accountLinks[i].title
                            }, e.accountLinks[i].key) : Object(D.jsx)("a", {
                                href: "javascript:void(0)",
                                title: e.accountLinks[i].title,
                                onClick: function() {
                                    r(e.accountLinks[i].href), Object(R.h)(e.accountLinks[i].title, e.accountLinks[i].href)
                                },
                                className: "logout-second-btn",
                                children: e.accountLinks[i].title
                            }, e.accountLinks[i].key) : Object(D.jsx)("a", {
                                href: e.accountLinks[i].href,
                                title: e.accountLinks[i].title,
                                children: e.accountLinks[i].title
                            }, e.accountLinks[i].key)
                        });
                        "edit" === e.accountLinks[i].key && (a = Object(D.jsx)("a", {
                            href: e.accountLinks[i].href,
                            children: e.accountLinks[i].title
                        }))
                    }))), Object(D.jsx)("div", {
                        className: "user-login-menu",
                        children: Object(D.jsxs)("div", {
                            className: "my_account_wrap",
                            children: [Object(D.jsxs)("div", {
                                className: "user_wrap",
                                children: [Object(D.jsx)("img", {
                                    src: I,
                                    alt: "Amit",
                                    title: "Amit"
                                }), Object(D.jsx)("span", {
                                    className: "user-name",
                                    children: e.userInfo && e.userInfo.name
                                }), Object(D.jsxs)("div", {
                                    className: "user_info",
                                    children: [Object(D.jsx)("span", {
                                        className: "mobno",
                                        children: e.userInfo && e.userInfo.number
                                    }), " ", "|", " ", Object(D.jsx)("span", {
                                        className: "user_mail",
                                        children: e.userInfo && e.userInfo.mail
                                    })]
                                }), a]
                            }), Object(D.jsx)("ul", {
                                className: "links user-menu-link",
                                children: t
                            })]
                        })
                    })
                })),
                F = a(338),
                B = a(181),
                G = a(31),
                H = (a(664), function(e) {
                    var t = Object(c.useState)(!1),
                        a = Object(G.a)(t, 2),
                        n = a[0],
                        r = a[1];
                    Object(c.useEffect)((function() {
                        Object(k.a)(localStorage.getItem("currency_tooltip")) && !n && (setTimeout((function() {
                            r(!0)
                        }), 3e3), setTimeout((function() {
                            r(!1)
                        }), 12e3))
                    }), []), Object(c.useEffect)((function() {
                        var t = JSON.stringify(e.geoCurrency);
                        Object(k.a)(e.geoCurrency) || "INR" === e.geoCurrency || localStorage.setItem("currency_tooltip", t)
                    }), [e.geoCurrency]);
                    return Object(D.jsx)(D.Fragment, {
                        children: n && "INR" !== e.geoCurrency && Object(D.jsx)("div", {
                            className: "currencyToolTip",
                            children: Object(D.jsxs)("p", {
                                children: ["We have changed the currency to ", e.geoCurrency, ". If you want to switch, you can change it from here"]
                            })
                        })
                    })
                }),
                V = a(123),
                q = a(234),
                K = (a(666), function(e) {
                    var t = Object(c.useState)(!1),
                        a = Object(G.a)(t, 2),
                        n = a[0],
                        r = a[1];
                    Object(c.useEffect)((function() {
                        Object(k.a)(v.a.get("user_select_city")) && Object(k.a)(e.userPickedCity) && !n && (setTimeout((function() {
                            r(!0)
                        }), 2e3), setTimeout((function() {
                            r(!1)
                        }), 5e3))
                    }), [e.cityName]);
                    return Object(D.jsx)(D.Fragment, {
                        children: n && Object(D.jsx)("div", {
                            className: "cityToolTip",
                            children: Object(D.jsx)("p", {
                                children: "Choose Delivery Location"
                            })
                        })
                    })
                }),
                J = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(10), a.e(9), a.e(11)]).then(a.bind(null, 357))
                    },
                    modules: ["../../../../Pages/UserLogin/DesktopPage"],
                    webpack: function() {
                        return [357]
                    },
                    loading: f.a
                }),
                W = {
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: 0
                    }
                };
            O.a.setAppElement("#flowerauraReactApp");
            var z = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        var e;
                        Object(n.a)(this, a);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).state = {
                            modalIsOpen: !1,
                            isInitialState: !0
                        }, e._subMenu = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                            if (null === t) return null;
                            var i, o = null;
                            if (null === (i = Object.keys(t).map((function(a) {
                                    return Object(D.jsx)("div", {
                                        className: "tb-megamenu-column span2 mega-col-nav",
                                        children: Object(D.jsx)("ul", {
                                            className: "tb-megamenu-subnav mega-nav level-1 items-1",
                                            children: Object(D.jsxs)("li", {
                                                className: "tb-megamenu-item level-2 mega mega-group",
                                                children: [Object(D.jsx)("a", {
                                                    className: "mega-group-title",
                                                    children: t[a].title
                                                }), 1 === t[a].has_children ? e._subChild(t[a].submenus, t[a].title, n) : null]
                                            })
                                        })
                                    }, a)
                                }))) || Object(k.a)(r) || (o = Object(D.jsx)("div", {
                                    className: "tb-megamenu-column span2 mega-col-nav menubanner",
                                    children: Object(D.jsx)("ul", {
                                        className: "tb-megamenu-subnav mega-nav level-1 items-1",
                                        children: Object(D.jsx)("li", {
                                            className: "tb-megamenu-item level-2 mega mega-group",
                                            children: Object(D.jsx)("div", {
                                                className: "tb-megamenu-submenu mega-group-ct nav-child",
                                                children: Object(D.jsx)("div", {
                                                    className: "mega-dropdown-inner",
                                                    children: Object(D.jsx)("div", {
                                                        className: "tb-megamenu-row row-fluid",
                                                        children: Object(D.jsx)("div", {
                                                            className: "tb-megamenu-column span12 mega-col-nav",
                                                            children: Object(D.jsx)("div", {
                                                                className: "tb-megamenu-subnav mega-nav level-2 items-10",
                                                                children: Object(D.jsx)("img", {
                                                                    src: r,
                                                                    title: "Menu Banner",
                                                                    alt: "Menu Banner"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })), null !== i) {
                                var c = i.length >= 6 ? "fixesMenu" : "";
                                return Object(D.jsx)("div", {
                                    className: "tb-megamenu-submenu dropdown-menu mega-dropdown-menu nav-child ".concat(c),
                                    id: "parent-".concat(a),
                                    children: Object(D.jsx)("div", {
                                        className: "mega-dropdown-inner",
                                        children: Object(D.jsxs)("div", {
                                            className: "tb-megamenu-row row-fluid",
                                            children: [i, o]
                                        })
                                    })
                                })
                            }
                            return i
                        }, e._subChild = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            if (null === e) return null;
                            var n;
                            return null !== (n = Object.keys(e).map((function(n) {
                                return Object(D.jsx)("li", {
                                    className: "tb-megamenu-item level-3 mega",
                                    children: Object(D.jsxs)("a", {
                                        onClick: function() {
                                            Object(B.a)("category", {
                                                category_url: e[n].href || e[n].link_path
                                            }), Object(R.j)(a, t, e[n].href || e[n].link_path)
                                        },
                                        href: "".concat(M.c).concat(e[n].href || e[n].link_path),
                                        children: [e[n].title, !Object(k.a)(e[n].new) && !0 === e[n].new && Object(D.jsx)("span", {
                                            className: "menu-new",
                                            children: "60% OFF"
                                        }), e[n].attributes && "offer" === e[n].attributes.id && !Object(k.a)(e[n].attributes.name) && Object(D.jsx)("span", {
                                            className: e[n].attributes.id,
                                            children: e[n].attributes.name
                                        }), e[n].attributes && "new" === e[n].attributes.id && !Object(k.a)(e[n].attributes.name) && Object(D.jsx)("span", {
                                            className: e[n].attributes.id,
                                            children: e[n].attributes.name
                                        })]
                                    })
                                }, n)
                            }))) ? Object(D.jsx)("div", {
                                className: "tb-megamenu-submenu mega-group-ct nav-child",
                                children: Object(D.jsx)("div", {
                                    className: "mega-dropdown-inner",
                                    children: Object(D.jsx)("div", {
                                        className: "tb-megamenu-row row-fluid",
                                        children: Object(D.jsx)("div", {
                                            className: "tb-megamenu-column span12 mega-col-nav",
                                            children: Object(D.jsx)("ul", {
                                                className: "tb-megamenu-subnav mega-nav level-2 items-10",
                                                children: n
                                            })
                                        })
                                    })
                                })
                            }) : null
                        }, e._getWalletLink = function() {
                            var t = null;
                            return e.props.accountLinks && Object.keys(e.props.accountLinks).map((function(a, n) {
                                "wallet" !== e.props.accountLinks[n].key || (t = e.props.accountLinks[n].href)
                            })), t
                        }, e.openUserLogin = function() {
                            e.props.isSiteHeaderRequestCompleted && (Object(V.a)("Hello!", "Please enter your email", !0), Object(R.p)("shown", "loginpopup", e.props.locationPathname), e.setState({
                                modalIsOpen: !0
                            }))
                        }, e.closeUserLogin = function() {
                            e.setState({
                                modalIsOpen: !1
                            })
                        }, e.logoClickEvent = function() {
                            var e = {
                                action: "click",
                                eventCategory: "fa_logo",
                                eventLabel: window.location.href
                            };
                            Object(x.f)(e), Object(C.d)("clickEvent", e)
                        }, e
                    }
                    return Object(r.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = null;
                            if (this.props.menuData) {
                                var a = this.props.menuData;
                                t = Object.keys(a).map((function(t, n) {
                                    var r = Object.getOwnPropertyNames(a[t] && a[t].submenus || {}).length - 1,
                                        i = "dropdown-toggle";
                                    if (Object(k.a)(a[t].image) || (r += 1), "<nolink>" !== a[t].href && (i = "dropdown-toggle linkableMenu"), !a[t].hasOwnProperty("only_mobile")) return Object(D.jsxs)("li", {
                                        className: "tb-megamenu-item level-1 mega mega-align-justify dropdown megaMenuParent_".concat(r, " megaMenuWithIndex_").concat(n + 1),
                                        id: "".concat(t),
                                        children: [Object(D.jsx)("a", {
                                            className: i,
                                            onClick: function() {
                                                return Object(B.a)("category", {
                                                    category_url: a[t].href
                                                })
                                            },
                                            href: "<nolink>" === a[t].href ? "#" : "".concat(M.c).concat(a[t].href),
                                            children: a[t].title
                                        }), 1 === a[t].has_children ? e._subMenu(a[t].submenus, t, a[t].title, a[t].image) : null]
                                    }, t)
                                }))
                            }
                            var n = this.props.locationPathname.split("/")[1],
                                r = (new A.a).get("rv_products"),
                                i = null;
                            i = 0 !== (r && r.length) && this.props.getCookie("rv_prods") && "detail_page" !== this.props.pageType && -1 === this.props.checkInternational && -1 === this.props.checkDisableUrl ? "recently-viewShow" : "recently-viewHide";
                            var o = "Deliver to";
                            o = Object(k.a)(this.props.cityName) || Object(k.a)(this.props.cityPincode) ? Object(k.a)(this.props.cityName) ? Object(k.a)(this.props.cityPincode) ? "Deliver to" : "".concat(this.props.cityPincode) : "".concat(this.props.cityName) : "".concat(this.props.cityPincode, ", ").concat(this.props.cityName);
                            var c = "https://imgcdn.floweraura.com/logo_web.svg";
                            if (this.props && this.props.logoData) {
                                var s = this.props.logoData,
                                    l = s.dynamic_logo,
                                    u = void 0 === l ? null : l,
                                    d = s.logo_img,
                                    p = void 0 === d ? null : d;
                                u && p && (c = p)
                            }
                            var h = this.props.isUserAnonymous ? "logout" : "login";
                            return Object(D.jsxs)("section", {
                                className: "header-main",
                                children: [Object(D.jsxs)("header", {
                                    id: "header-wrap",
                                    children: [Object(D.jsx)("div", {
                                        className: "outer",
                                        children: Object(D.jsxs)("div", {
                                            className: "header-inner",
                                            children: [Object(D.jsxs)("div", {
                                                className: "logo falogo",
                                                children: [Object(D.jsx)("a", {
                                                    href: "/",
                                                    title: "Home",
                                                    rel: "home",
                                                    id: "logo",
                                                    children: Object(D.jsx)("img", {
                                                        src: c,
                                                        alt: "Floweraura.com - Online Flower Delivery",
                                                        onClick: this.logoClickEvent
                                                    })
                                                }), Object(D.jsx)("div", {
                                                    id: "name-and-slogan",
                                                    className: "element-invisible",
                                                    children: Object(D.jsx)("div", {
                                                        id: "site-name",
                                                        className: "element-invisible",
                                                        children: Object(D.jsx)("strong", {
                                                            children: Object(D.jsx)("a", {
                                                                href: "/",
                                                                title: "Home",
                                                                rel: "home",
                                                                children: Object(D.jsx)("span", {
                                                                    children: "FlowerAura"
                                                                })
                                                            })
                                                        })
                                                    })
                                                })]
                                            }), Object(D.jsx)("div", {
                                                className: "right-section",
                                                children: Object(D.jsx)("div", {
                                                    className: "region region-header",
                                                    children: Object(D.jsx)("div", {
                                                        id: "block-block-52",
                                                        className: "block block-block",
                                                        children: Object(D.jsxs)("div", {
                                                            className: "content",
                                                            children: [Object(D.jsxs)("div", {
                                                                className: "search-bar ".concat(h),
                                                                children: ["product-reviews" !== n ? Object(D.jsx)("div", {
                                                                    className: "city-popup",
                                                                    children: Object(D.jsx)("div", {
                                                                        id: "user-selected-city-input",
                                                                        className: "txt",
                                                                        onClick: this.props.onClickCityPopPup,
                                                                        children: o
                                                                    })
                                                                }) : null, Object(D.jsx)(K, {
                                                                    cityName: this.props.cityName,
                                                                    userPickedCity: this.props.userPickedCity
                                                                }), Object(D.jsx)(L.default, {
                                                                    isMobileReq: this.props.isMobileReq,
                                                                    show: !0,
                                                                    resources: this.props.searchtap_resources,
                                                                    locationPathname: this.props.locationPathname,
                                                                    settings: this.props.settings,
                                                                    setMultiplePopup: this.props.setMultiplePopup
                                                                })]
                                                            }), Object(D.jsx)("div", {
                                                                className: "accounts header-icon ".concat(h),
                                                                id: "usermenublock",
                                                                children: Object(D.jsxs)("ul", {
                                                                    className: "menu clearfix",
                                                                    children: [Object(D.jsx)("li", {
                                                                        className: "leaf",
                                                                        children: Object(D.jsxs)("a", {
                                                                            onClick: function() {
                                                                                return Object(R.h)("Track Order", "/trackorder")
                                                                            },
                                                                            href: "/trackorder",
                                                                            title: "Track Order",
                                                                            children: [Object(D.jsx)("em", {
                                                                                className: "bgSpriteTrackOrder"
                                                                            }), Object(D.jsx)("span", {
                                                                                children: "Track Order"
                                                                            })]
                                                                        })
                                                                    }), this.props.show_gift_genie ? Object(D.jsxs)("li", {
                                                                        className: "leaf giftGenieSearch",
                                                                        onClick: function() {
                                                                            e.props.onClickGiftGeniePopUp(), Object(R.h)("Gift Finder", "null")
                                                                        },
                                                                        children: [Object(D.jsx)("em", {
                                                                            className: "bgGenieIcon"
                                                                        }), Object(D.jsxs)("span", {
                                                                            children: ["Gift Finder", " "]
                                                                        })]
                                                                    }) : null, Object(D.jsx)("li", {
                                                                        className: "mycart leaf",
                                                                        children: Object(D.jsxs)("a", {
                                                                            onClick: function() {
                                                                                e.props.handleOnCartIconClick(), Object(R.h)("Cart", "/cart")
                                                                            },
                                                                            href: "/cart",
                                                                            children: [Object(D.jsx)("p", {
                                                                                className: "count cart-icon",
                                                                                id: "cartCountId",
                                                                                children: this.props.cartCount || 0
                                                                            }), Object(D.jsx)("em", {
                                                                                className: "bgSpriteCart"
                                                                            }), Object(D.jsx)("span", {
                                                                                children: "Cart"
                                                                            })]
                                                                        })
                                                                    }), this.props.isUserAnonymous ? Object(D.jsxs)("li", {
                                                                        className: "leaf myaccount",
                                                                        onClick: function(t) {
                                                                            e.openUserLogin(t), Object(R.h)("Sign In", "null")
                                                                        },
                                                                        children: [Object(D.jsx)("em", {
                                                                            className: "bgSpriteSignIn"
                                                                        }), Object(D.jsxs)("span", {
                                                                            children: ["Sign In", " "]
                                                                        })]
                                                                    }) : null, this.props.isUserAnonymous ? null : Object(D.jsxs)("li", {
                                                                        className: "leaf myaccount",
                                                                        children: [Object(D.jsxs)("a", {
                                                                            href: this.props.isUserAnonymous ? "/user" : "#",
                                                                            title: "My Account  ",
                                                                            children: [Object(D.jsx)("em", {
                                                                                className: "bgSpriteSignIn"
                                                                            }), Object(D.jsxs)("span", {
                                                                                children: [this.props.isUserAnonymous ? "Sign In" : "My Account", " "]
                                                                            })]
                                                                        }), this.props.isUserAnonymous ? null : Object(D.jsx)(U, {})]
                                                                    }), Object(D.jsxs)("li", {
                                                                        className: "last leaf more-icon",
                                                                        children: [Object(D.jsxs)("a", {
                                                                            href: "#",
                                                                            children: [Object(D.jsx)("em", {
                                                                                className: "bgSpriteMenu"
                                                                            }), Object(D.jsx)("span", {
                                                                                children: "More"
                                                                            })]
                                                                        }), Object(D.jsx)("div", {
                                                                            className: "more-menu",
                                                                            children: Object(D.jsxs)("ul", {
                                                                                className: "links more-menu-link",
                                                                                children: [Object(D.jsx)("li", {
                                                                                    className: "item1 first",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("Corporate Gifts", "/corporate")
                                                                                        },
                                                                                        href: "/corporate",
                                                                                        title: "Corporate Gifts",
                                                                                        children: "Corporate Gifts"
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    className: "item2",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("Franchise", "/franchise")
                                                                                        },
                                                                                        href: "/franchise",
                                                                                        title: "Franchise",
                                                                                        children: "Franchise"
                                                                                    })
                                                                                }), this.props.enableMultiCurrency ? Object(D.jsx)("li", {
                                                                                    className: "item3 multiCurrency",
                                                                                    children: Object(D.jsx)(F.a, {})
                                                                                }) : "", Object(D.jsx)("li", {
                                                                                    className: "item4",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("FAQ", "/need-help")
                                                                                        },
                                                                                        href: "/need-help",
                                                                                        title: "FAQ",
                                                                                        children: "FAQ"
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    className: "item5",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("About Us", "/about-us")
                                                                                        },
                                                                                        href: "/about-us",
                                                                                        title: "About Us",
                                                                                        children: "About Us"
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    className: "item6",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("Sell With Us", "/sell-with-us")
                                                                                        },
                                                                                        href: "/sell-with-us",
                                                                                        title: "Sell With Us",
                                                                                        children: "Sell With Us"
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    className: "item7",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("Contact Details", "/contact-details")
                                                                                        },
                                                                                        href: "/contact-details",
                                                                                        title: "Contact Details",
                                                                                        children: "Contact Us"
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    id: "recently-viewShow",
                                                                                    className: "item8 ".concat(i),
                                                                                    children: Object(D.jsx)(q.a, {
                                                                                        isMobileReq: this.props.isMobileReq,
                                                                                        pageType: this.props.pageType
                                                                                    })
                                                                                }), Object(D.jsx)("li", {
                                                                                    className: "item9 last",
                                                                                    children: Object(D.jsx)("a", {
                                                                                        onClick: function() {
                                                                                            return Object(R.h)("WhatsApp", "/https://api.whatsapp.com/send?l=&amp;phone=919650062220")
                                                                                        },
                                                                                        target: "_blank",
                                                                                        href: "https://api.whatsapp.com/send?l=&phone=919650062220",
                                                                                        title: "WhatsApp",
                                                                                        children: "WhatsApp"
                                                                                    })
                                                                                })]
                                                                            })
                                                                        })]
                                                                    })]
                                                                })
                                                            }), Object(D.jsx)(H, {
                                                                geoCurrency: this.props.geoCurrency
                                                            })]
                                                        })
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(D.jsx)("nav", {
                                        children: Object(D.jsx)("div", {
                                            className: "main-menu",
                                            children: Object(D.jsx)("div", {
                                                className: "region region-primarymenus",
                                                children: Object(D.jsx)("ul", {
                                                    className: "tb-megamenu-nav nav level-0 items-36",
                                                    children: t
                                                })
                                            })
                                        })
                                    })]
                                }), Object(D.jsx)("div", {
                                    children: Object(D.jsx)(O.a, {
                                        isOpen: this.state.modalIsOpen,
                                        style: W,
                                        contentLabel: "userLoginModalLabel",
                                        className: "userLoginModal",
                                        parentClass: "ishimdar",
                                        children: Object(D.jsx)(J, {
                                            closeUserLogin: this.closeUserLogin
                                        })
                                    })
                                })]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if ("/" === e.locationData.pathname && e.locationData && e.locationData.query && 1 === +e.locationData.query.user_login_popup && !1 === t.modalIsOpen && t.isInitialState && e.isUserAnonymous && e.isSiteHeaderRequestCompleted) return Object(V.a)("Hello!", "Please enter your email", !0), {
                                modalIsOpen: !0,
                                isInitialState: !1
                            }
                        }
                    }]), a
                }(c.Component),
                Y = Object(g.c)((function(e) {
                    return {
                        accountLinks: e.userAccount.accountLinks,
                        isUserAnonymous: e.userAccount.isUserAnonymous,
                        cartCount: e.userAccount.cartCount,
                        walletPoint: e.userAccount.walletPoint,
                        searchtap_resources: e.settings.searchtap_resources || {},
                        locationPathname: e.router.location.pathname,
                        locationData: e.router.location,
                        enableMultiCurrency: e.settings.enableMultiCurrency,
                        isSiteHeaderRequestCompleted: e.settings.isSiteHeaderRequestCompleted,
                        categoryProducts: e.productList.categoryProducts,
                        logoData: e.pageData.logoData,
                        settings: e.settings
                    }
                }))(z),
                Q = a(241),
                Z = function(e) {
                    var t = Object(c.useState)(!1),
                        a = Object(G.a)(t, 2),
                        n = a[0],
                        r = a[1];
                    return Object(c.useEffect)((function() {
                        var e = setInterval((function() {
                            r((function(e) {
                                return !e
                            }))
                        }), 2e3);
                        return function() {
                            return clearInterval(e)
                        }
                    }), []), Object(D.jsx)("span", {
                        className: " genieIcon ".concat(n ? "giftgenieflex " : ""),
                        onClick: function() {
                            e.openGenieModal(!0), Object(R.h)("Gift Finder", "null")
                        }
                    })
                },
                X = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        var e;
                        Object(n.a)(this, a);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).state = {
                            showSingleTabPopUp: !0,
                            path: "",
                            isPaneOpen: !1,
                            isTooltipOpen: !0,
                            cityName: "",
                            cityPincode: ""
                        }, e.onLogoClick = function() {
                            Object(w.b)("from_logo", 0)
                        }, e.openSideMenu = function() {
                            e.props.onOpenSideMenu && e.props.onOpenSideMenu(), Object(w.b)("from_menu", 0)
                        }, e.openSearchBox = function() {
                            var t = {
                                action: "Search Icon",
                                label: window.location.href
                            };
                            Object(x.f)(t), Object(C.d)("HeaderIconClickClick", t), e.props.onOpenSearchBox && e.props.onOpenSearchBox()
                        }, e.handleOnCartIconClick = function() {
                            var e = {
                                action: "Cart Icon",
                                label: window.location.href
                            };
                            Object(x.f)(e), Object(C.d)("HeaderIconClickClick", e), localStorage.setItem("cart_icon", !0)
                        }, e.rightSideOption = function() {
                            var t = document.documentElement.clientHeight;
                            document.body.style.height = t + "px", document.body.style.overflow = "hidden", e.props.openRightSideOption()
                        }, e.onClickOpenCityModal = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (t) {
                                var a = {
                                    action: "City Pop Up",
                                    eventCategory: "Header",
                                    eventLabel: "Available Option - Click"
                                };
                                Object(x.f)(a), Object(C.d)("CitySelectInput", a)
                            } else if (Object(k.a)(v.a.get("user_select_city")))
                                if (1 === M.w) {
                                    var n = {
                                        action: "City Pincode Popup",
                                        eventCategory: "Header",
                                        eventLabel: "Click"
                                    };
                                    Object(x.f)(n), Object(C.d)("clickEvent", n)
                                } else {
                                    var r = {
                                        action: "Select Delivery City - First",
                                        eventCategory: "City Pop Up - Menu",
                                        eventLabel: "Pop Up Open"
                                    };
                                    Object(x.f)(r), Object(C.d)("CitySelectInput", r);
                                    var i = {
                                        action: "City Pop Up",
                                        eventCategory: "Select Delivery City",
                                        eventLabel: "City Selection"
                                    };
                                    Object(x.f)(i), Object(C.d)("CitySelectInput", i)
                                }
                            else {
                                var o = {
                                    action: "Select Delivery City - Edit",
                                    eventCategory: "City Pop Up - Menu",
                                    eventLabel: "Pop Up Open"
                                };
                                Object(x.f)(o), Object(C.d)("CitySelectInput", o);
                                var c = {
                                    action: "City Pop Up",
                                    eventCategory: "Select Delivery City",
                                    eventLabel: "City Edited"
                                };
                                Object(x.f)(c), Object(C.d)("CitySelectInput", c)
                            }
                            e.props.openCityModalFromHeader(t)
                        }, e.hideContentOnFollowingUrl = function(t) {
                            var a = e.props.location.pathname;
                            return -1 !== t.indexOf(a)
                        }, e.handleGoogleCredentialResponse = function(t) {
                            var a = Object(E.h)(t.credential),
                                n = {
                                    profileObj: {
                                        email: a.email,
                                        gtoken: t.credential,
                                        name: a.given_name
                                    }
                                };
                            e.props.googleSocialLogin(n)
                        }, e.openGenieModal = function(t) {
                            e.setState({
                                isPaneOpen: t,
                                isTooltipOpen: !1
                            }), Object(R.p)("shown", "gift_finder", e.props.location.pathname), e._pushToGTM()
                        }, e._pushToGTM = function() {
                            var e = {
                                action: "Click - Home Page",
                                eventCategory: "Gift Genie",
                                eventLabel: "Home Page"
                            };
                            Object(x.f)(e), Object(C.d)("clickEvent", e)
                        }, e.getCityName = function() {
                            var t = v.a.get("user_select_city"),
                                a = v.a.get("user_select_pincode");
                            if (e.setState({
                                    cityName: t
                                }), !Object(k.a)(t) && Object(k.a)(a)) {
                                var n = {
                                    action: "Deliver_to",
                                    eventCategory: "Header",
                                    eventLabel: "".concat(t, "-selected")
                                };
                                Object(x.f)(n), Object(C.d)("clickEvent", n)
                            }
                        }, e.getPinCode = function() {
                            var t = v.a.get("user_select_pincode"),
                                a = v.a.get("user_select_city");
                            e.setState({
                                cityPincode: t
                            });
                            var n = {
                                action: "Pincode-city",
                                eventCategory: "Header",
                                eventLabel: "Set"
                            };
                            if (Object(x.f)(n), Object(C.d)("clickEvent", n), !Object(k.a)(t) && !Object(k.a)(a)) {
                                var r = {
                                    action: "Deliver_to",
                                    eventCategory: "Header",
                                    eventLabel: "".concat(t, "-").concat(a, "-selected")
                                };
                                Object(x.f)(r), Object(C.d)("clickEvent", r)
                            }
                        }, e.logoClickEvent = function() {
                            var e = {
                                action: "click",
                                eventCategory: "fa_logo",
                                eventLabel: window.location.href
                            };
                            Object(x.f)(e), Object(C.d)("clickEvent", e)
                        }, e
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = v.a.get("user_select_city");
                            this.getCityName(), 1 === M.w && this.getPinCode(), this.setState({
                                path: window.location.href
                            });
                            var t = {
                                action: "Deliver_to",
                                eventCategory: "Header",
                                eventLabel: "shown"
                            };
                            Object(x.f)(t), Object(C.d)("clickEvent", t);
                            var a = {},
                                n = {},
                                r = {};
                            Object(k.a)(e) ? (a = {
                                action: "Shown",
                                eventCategory: "Select Delivery City",
                                eventLabel: "Shown"
                            }, r = {
                                action: "Deliver_to",
                                eventCategory: "Header",
                                eventLabel: "null_selected"
                            }, Object(x.f)(r), Object(C.d)("clickEvent", r)) : (a = {
                                action: "City Pop Up",
                                eventCategory: "Header",
                                eventLabel: "Available Option - Shown"
                            }, n = {
                                citySetSource: "alreadySet",
                                deliveryCityChosen: e
                            }, Object(x.f)(n), Object(C.d)("cityChosen", n), Object(x.d)("city_chosen", {
                                cityChosen: e
                            }), Object(x.d)("city_source", {
                                citySetSource: "alreadySet"
                            })), Object(x.f)(a), Object(C.d)("clickEvent", a)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            e.userPickedCity !== this.props.userPickedCity && this.getCityName(), e.userPickedPincode !== this.props.userPickedPincode && 1 === M.w && this.getPinCode()
                        }
                    }, {
                        key: "componentWillReceiveProps",
                        value: function(e) {
                            if (e.userAccount.isUserAnonymous && this.state.showSingleTabPopUp && e.userAccount.siteHeaderCallComplete) {
                                var t = window.google = window.google ? window.google : {};
                                if (t && !Object(k.a)(t.accounts)) {
                                    var a = {
                                        action: "GPlus_SingleTap",
                                        eventCategory: "Login",
                                        eventLabel: "Shown"
                                    };
                                    Object(x.f)(a), Object(C.d)("clickEvent", a), t.accounts.id.initialize({
                                        client_id: M.m,
                                        callback: this.handleGoogleCredentialResponse
                                    }), t.accounts.id.prompt((function(e) {
                                        if (e.isNotDisplayed() || e.isSkippedMoment()) {
                                            var t = {
                                                action: "GPlus_SingleTap",
                                                eventCategory: "Login",
                                                eventLabel: "Close"
                                            };
                                            Object(x.f)(t), Object(C.d)("clickEvent", t)
                                        }
                                    })), this.setState({
                                        showSingleTabPopUp: !1
                                    })
                                }
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.show_new_city_popup,
                                a = !this.state.path.includes("giftfinder") && this.state.path.includes("fa-source=app"),
                                n = ["/cart", "/product-reviews", "/giftfinder", "/flower-facts", "/plant-riddles", "/video-message"],
                                r = this.hideContentOnFollowingUrl(n),
                                i = this.hideContentOnFollowingUrl(n),
                                o = this.hideContentOnFollowingUrl(n),
                                s = this.hideContentOnFollowingUrl(["/user", "/profile", "/my-orders", "/credits", "/cards", "/upi", "/my-reviews", "/notifications", "/change-password", "/my-address", "/delete-account"]),
                                l = this.props.location.pathname.split("/")[1],
                                u = !this.state.path.includes("cart") && !this.state.path.includes("retry-payment") && !0 !== s && !0 !== this.props.isInternational,
                                d = this.state.cityName,
                                p = this.state.cityPincode,
                                h = a ? "" : t ? "topBarHeader fixed-height-city" : "topBarHeader";
                            this.props.isInternational && (h += " internationalProduct"), o && (h += " cityStripHidden"), "product-reviews" === l && (h += " cityStripHidden"), "record-video" === l && (h += " cityStripHidden"), s && (h += "true" === this.props.isMobileReq ? " cityStripHidden" : ""), o && (h += " topbarStripHidden");
                            var b = u ? Object(D.jsx)("div", {
                                    className: "genieIconParent genieTooltip",
                                    children: Object(D.jsx)(Z, {
                                        openGenieModal: this.openGenieModal
                                    })
                                }) : null,
                                f = null;
                            if (this.props && this.props.logoData) {
                                var m = this.props.logoData,
                                    g = m.dynamic_logo,
                                    j = void 0 === g ? null : g,
                                    O = m.logo_img,
                                    v = void 0 === O ? null : O;
                                j && v && (f = v)
                            }
                            var y = "Deliver to";
                            return Object(k.a)(d) || Object(k.a)(p) ? Object(k.a)(d) ? Object(k.a)(p) || (y = "".concat(p)) : y = "".concat(d) : y = "".concat(p, ", ").concat(d), Object(D.jsxs)("div", {
                                className: h,
                                children: [Object(D.jsxs)(_.a, {
                                    style: {
                                        zIndex: 99
                                    },
                                    children: [1 !== M.u || i || this.props.isInternational ? "" : Object(D.jsx)(T, {
                                        getCookie: this.props.getCookie,
                                        fetchLockdownCities: this.props.fetchLockdownCities,
                                        lockdownCities: this.props.lockdownCities,
                                        openCityModal: this.onClickOpenCityModal
                                    }), "false" === this.props.isMobileReq ? Object(D.jsxs)(c.Fragment, {
                                        children: [1 !== M.v || i || this.props.isInternational ? "" : Object(D.jsx)(T, {
                                            getCookie: this.props.getCookie,
                                            fetchLockdownCities: this.props.fetchLockdownCities,
                                            lockdownCities: this.props.lockdownCities,
                                            openCityModal: this.onClickOpenCityModal
                                        }), Object(D.jsx)(Y, {
                                            menuData: this.props.menuData,
                                            onClickCityPopPup: function() {
                                                return e.onClickOpenCityModal(!1)
                                            },
                                            cityName: d,
                                            cityPincode: p,
                                            isMobileReq: this.props.isMobileReq,
                                            show_gift_genie: u,
                                            onClickGiftGeniePopUp: function() {
                                                return e.openGenieModal(!0)
                                            },
                                            userPickedCurrencyCountry: this.props.userPickedCurrencyCountry,
                                            geoCurrency: this.props.geoCurrency,
                                            rakhiPromoVideo: this.props.rakhiPromoVideo,
                                            pageType: this.props.pageType,
                                            getCookie: this.props.getCookie,
                                            checkInternational: this.props.checkInternational,
                                            checkDisableUrl: this.props.checkDisableUrl,
                                            handleOnCartIconClick: this.handleOnCartIconClick,
                                            userPickedCity: this.props.userPickedCity,
                                            setMultiplePopup: this.props.setMultiplePopup
                                        })]
                                    }) : a ? null : Object(D.jsx)("header", {
                                        children: Object(D.jsxs)("div", {
                                            id: "header-show-mobile",
                                            className: "headerTop",
                                            children: [Object(D.jsx)("div", {
                                                className: "header_left_r",
                                                children: Object(D.jsx)("span", {
                                                    className: "common_span menu_icon",
                                                    onClick: this.openSideMenu
                                                })
                                            }), Object(D.jsx)("div", {
                                                className: "logo_main_r mobile-logo",
                                                onClick: function() {
                                                    return e.onLogoClick()
                                                },
                                                children: Object(D.jsx)("a", {
                                                    href: "/",
                                                    children: Object(D.jsx)("img", {
                                                        src: f || "https://imgcdn.floweraura.com/logo_mob.svg",
                                                        alt: "Floweraura",
                                                        width: "100%",
                                                        height: "100%",
                                                        onClick: this.logoClickEvent
                                                    })
                                                })
                                            }), Object(D.jsxs)("div", {
                                                className: "header_right_r",
                                                children: [b, Object(D.jsx)("a", {
                                                    href: "/cart",
                                                    onClick: function() {
                                                        e.handleOnCartIconClick(), Object(R.h)("Cart", "/cart")
                                                    },
                                                    children: Object(D.jsx)("span", {
                                                        className: "cart-icon",
                                                        children: Object(D.jsx)("span", {
                                                            className: "cart-count",
                                                            id: "cartCountId",
                                                            children: this.props.cartCount
                                                        })
                                                    })
                                                }), r ? null : Object(D.jsx)("span", {
                                                    className: "common_span search_icon",
                                                    onClick: function() {
                                                        e.openSearchBox(), Object(R.h)("Search", "null")
                                                    }
                                                }), Object(D.jsx)("div", {
                                                    className: "side_option",
                                                    children: Object(D.jsx)("em", {
                                                        onClick: function() {
                                                            return e.rightSideOption()
                                                        }
                                                    })
                                                })]
                                            }), Object(D.jsx)(H, {
                                                geoCurrency: this.props.geoCurrency
                                            }), this.props.isInternational || o || this.props.show_new_city_popup || Object(k.a)(y) ? null : Object(D.jsx)(K, {
                                                cityName: this.state.cityName,
                                                userPickedCity: this.props.userPickedCity
                                            }), this.props.isInternational || o || this.props.show_new_city_popup || Object(k.a)(y) ? "" : Object(D.jsx)("div", {
                                                className: "city-popup",
                                                children: Object(D.jsxs)("div", {
                                                    id: "user-selected-city-input",
                                                    className: "",
                                                    onClick: function() {
                                                        return e.onClickOpenCityModal(!1)
                                                    },
                                                    children: [y, Object(D.jsx)("em", {
                                                        className: "dropdown-img"
                                                    })]
                                                })
                                            })]
                                        })
                                    })]
                                }), this.state.isPaneOpen ? Object(D.jsx)(Q.a, {
                                    openGenieModal: this.openGenieModal,
                                    isPaneOpen: this.state.isPaneOpen,
                                    isMobileReq: this.props.isMobileReq
                                }) : ""]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            return e.cityName && e.cityName !== t.cityName && !t.cityPincode || e.cityName && e.cityName !== t.cityName && t.cityPincode ? {
                                cityName: e.cityName,
                                cityPincode: e.cityPincode
                            } : void 0
                        }
                    }]), a
                }(c.Component),
                $ = Object(g.c)((function(e) {
                    return {
                        logoData: e.pageData.logoData
                    }
                }))(X),
                ee = function() {
                    var e = window.innerHeight || (document.documentElement || document.body).clientHeight,
                        t = te(),
                        a = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop,
                        n = t - e;
                    return Math.floor(a / n * 100)
                },
                te = function() {
                    var e = document;
                    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
                },
                ae = (a(682), a(232)),
                ne = a(242),
                re = a(40),
                ie = a(120),
                oe = a(233),
                ce = a(346),
                se = (a(683), a(230)),
                le = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(10), a.e(9), a.e(11)]).then(a.bind(null, 357))
                    },
                    modules: ["../../../Pages/UserLogin/DesktopPage"],
                    webpack: function() {
                        return [357]
                    },
                    loading: f.a
                }),
                ue = {
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: 0
                    }
                },
                de = function(e) {
                    return Object(D.jsx)("div", {
                        children: Object(D.jsx)(O.a, {
                            isOpen: e.modalIsOpen,
                            style: ue,
                            contentLabel: "userLoginModalLabel",
                            className: "userLoginModal",
                            children: Object(D.jsx)(le, {
                                closeUserLogin: e.closeUserLogin
                            })
                        })
                    })
                },
                pe = b()({
                    loader: function() {
                        return a.e(35).then(a.bind(null, 691))
                    },
                    modules: ["./MobileMenu"],
                    webpack: function() {
                        return [691]
                    },
                    loading: f.a
                }),
                he = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a(e) {
                        var r;
                        return Object(n.a)(this, a), (r = t.call(this, e)).openCityModalModal = function() {
                            r.props.openCityModalFromLeftSide()
                        }, r.backMainMenu = function(e) {
                            var t = {
                                action: r.state.titleHeading,
                                eventLabel: "Close",
                                eventCategory: "Mobile_Menu"
                            };
                            Object(x.f)(t), Object(C.d)("OnNavigationMenuCick", t), r.setState({
                                showTabScreenState: 0,
                                childrenSelectedIndex: 0,
                                titleHeading: "",
                                subcategoryHeading: ""
                            })
                        }, r.showTabScreen = function(e, t, a) {
                            r.setState({
                                showTabScreenState: 1,
                                menuId: t.menu_id,
                                tabMenus: t.submenus,
                                tabRightSideList: t.submenus[0] || [],
                                parentIndex: a,
                                titleHeading: t.title || "",
                                subcategoryHeading: t.submenus[0].title || ""
                            });
                            var n = {
                                action: t.title,
                                eventLabel: "Open",
                                eventCategory: "Mobile_Menu"
                            };
                            Object(x.f)(n), Object(C.d)("OnNavigationMenuCick", n)
                        }, r.onNavigationTabCick = function(e, t, a) {
                            r.setState({
                                tabRightSideList: t,
                                childrenSelectedIndex: a,
                                subcategoryHeading: t.title || ""
                            });
                            var n = {
                                action: r.state.titleHeading,
                                eventLabel: t.title,
                                eventCategory: "Mobile_Menu"
                            };
                            Object(x.f)(n), Object(C.d)("OnNavigationMenuCick", n)
                        }, r.onClickCloseSlideMenu = function() {
                            r.props.onSideMenuClose && r.props.onSideMenuClose()
                        }, r.onClickSubCategory = function(e, t) {
                            var a = {
                                action: r.state.titleHeading,
                                eventLabel: "".concat(r.state.subcategoryHeading, " | ").concat(t.link_path),
                                eventCategory: "Mobile_Menu"
                            };
                            Object(x.f)(a), Object(C.d)("OnNavigationMenuCick", a), Object(R.j)(r.state.titleHeading, r.state.subcategoryHeading, t.link_path)
                        }, r.getRenderNavigationComponent = function() {
                            var e = r.props.userAccount,
                                t = e && e.login_link && e.login_link.href || "",
                                a = e && e.login_link && e.login_link.title || "";
                            return Object(k.a)(r.props.leftSideNavigationMenu) ? Object(D.jsx)(ce.a, {}) : Object(D.jsxs)("div", {
                                className: "navigationParent",
                                children: [Object(D.jsxs)("div", {
                                    className: "navigationHead",
                                    children: [Object(D.jsxs)("div", {
                                        children: [1 !== r.state.showTabScreenState ? Object(D.jsx)("em", {
                                            onClick: function() {
                                                return r.onClickCloseSlideMenu()
                                            },
                                            className: "navCloseModal navCloseBackCom"
                                        }) : Object(D.jsx)("em", {
                                            onClick: function(e) {
                                                return r.backMainMenu(e)
                                            },
                                            className: "navBackParentMenu navCloseBackCom"
                                        }), "" !== r.state.titleHeading ? Object(D.jsx)("strong", {
                                            className: "showParentHeading",
                                            children: r.state.titleHeading
                                        }) : Object(D.jsxs)("span", {
                                            className: "navUser",
                                            children: ["Hi ", e.name, " (", " ", Object(D.jsx)("a", {
                                                href: t,
                                                children: a
                                            }), " )"]
                                        })]
                                    }), Object(D.jsx)("a", {
                                        title: "downloadApp",
                                        href: r.getMobileDevice(),
                                        target: "_blank",
                                        children: Object(D.jsx)("span", {
                                            className: "downloadApp",
                                            children: " "
                                        })
                                    })]
                                }), Object(D.jsx)("div", {
                                    className: "navMenuList",
                                    children: 1 === r.state.showTabScreenState ? r.getRenderNavigationTab(r.state.tabMenus, r.state.parentIndex, r.state.tabRightSideList, r.state.childrenSelectedIndex) : Object(D.jsx)("ul", {
                                        className: "navParentMneu",
                                        children: r.navMenuListItem()
                                    })
                                })]
                            })
                        }, r.getMobileDevice = function() {
                            var e = r.state.navigator || window.opera;
                            return /android/i.test(e) ? "https://play.google.com/store/apps/details?id=com.floweraura&referrer=utm_source%3Dmobile_menu_header%26utm_medium%3Dm_web%26utm_campaign%3Dapp_download" : /iPad|iPhone|iPod/.test(e) && !window.MSStream ? "https://apps.apple.com/app/apple-store/id1490812119?pt=120793467&ct=mobile_menu_header&mt=8" : void 0
                        }, r.showSignUp = function(e, t, a) {
                            return "Sign In" === e ? t ? Object(D.jsx)("a", {
                                onClick: function() {
                                    r.openPopup(), Object(R.j)(e, "", "")
                                },
                                children: e
                            }) : Object(D.jsx)("a", {
                                onClick: function() {
                                    return Object(R.j)(e, "", "".concat(M.c).concat(a))
                                },
                                href: "".concat(M.c).concat(a),
                                children: "My Account"
                            }) : Object(D.jsx)("a", {
                                onClick: function() {
                                    return Object(R.j)(e, "", a)
                                },
                                href: "".concat(M.c).concat(a),
                                children: e
                            })
                        }, r.navMenuListItem = function() {
                            var e = r.props.userAccount.isUserAnonymous,
                                t = r.props.leftSideNavigationMenu.menus || [],
                                a = "",
                                n = -1,
                                i = !1,
                                o = !1;
                            return t.length > 0 && (a = t.map((function(a, c) {
                                return o && (i = !0), 0 === +a.has_children && (o = !0), 0 === a.hide_menu && r.props.open && (n += 1), "<nolink>" === a.link_path ? Object(D.jsxs)("li", {
                                    id: c,
                                    onClick: function(e) {
                                        return r.showTabScreen(e, a, c)
                                    },
                                    className: "navSubChild navSubChildComm",
                                    children: [Object(D.jsx)("span", {
                                        children: a.title
                                    }), r.props.open ? "" : r._getSubMenuForSSR(a.submenus, a.title)]
                                }, c) : Object(D.jsxs)(D.Fragment, {
                                    children: [0 === n && r.props.open && 0 === a.hide_menu && Object(D.jsx)("li", {
                                        className: "navSubChildWithAnchor navSubChildComm",
                                        children: Object(D.jsx)("a", {
                                            href: r.getMobileDevice(),
                                            target: "_blank",
                                            children: "Download App"
                                        })
                                    }, "downloadapp"), !i && o ? Object(D.jsx)("li", {
                                        className: "navSubChildWithAnchor navSubChildComm",
                                        children: Object(D.jsx)("a", {
                                            onClick: function() {
                                                return Object(R.j)("Download App", "", r.getMobileDevice())
                                            },
                                            href: r.getMobileDevice(),
                                            target: "_blank",
                                            children: "Download App"
                                        })
                                    }, "downloadapp") : null, Object(D.jsx)("li", {
                                        id: c,
                                        className: "navSubChildWithAnchor navSubChildComm",
                                        children: a && a.href && a.href.includes("tel:") ? Object(D.jsx)("a", {
                                            href: "".concat(a.href),
                                            children: "Sign In" === a.title ? e ? a.title : "My Account" : a.title
                                        }) : r.showSignUp(a.title, e, a.href)
                                    }, c), c === t.length - 1 ? Object(D.jsx)("li", {
                                        id: c + 1,
                                        className: "navSubChildWithAnchor navSubChildComm",
                                        children: r.showSignUp("Sign In", e, "/user")
                                    }, c + 1) : null]
                                })
                            }))), a
                        }, r.getRenderNavigationTab = function(e, t, a, n) {
                            var i = e;
                            return Object(D.jsxs)("div", {
                                className: "navSubMenuTab",
                                children: [Object(D.jsx)("div", {
                                    className: "navLeftSubMenu",
                                    children: Object(D.jsx)("ul", {
                                        className: "navLeftSubMenuUl",
                                        children: r.getRenderLeftSideTab(i, n)
                                    })
                                }), Object(D.jsx)("div", {
                                    className: "navRightSubList",
                                    children: Object(D.jsx)("ul", {
                                        className: "navRightSubListUL",
                                        children: r.getRenderRightSideTab(a, n)
                                    })
                                })]
                            })
                        }, r.getRenderLeftSideTab = function(e, t) {
                            var a;
                            return a = e.map((function(e, t) {
                                return Object(D.jsx)("li", {
                                    onClick: function(a) {
                                        return r.onNavigationTabCick(a, e, t)
                                    },
                                    id: e.menu_id,
                                    className: r.state.childrenSelectedIndex === t ? "active navLeftSubMenuLi" : "navLeftSubMenuLi",
                                    children: Object(D.jsx)("span", {
                                        className: "navType",
                                        children: e.title
                                    })
                                }, e.menu_id)
                            })), a
                        }, r.getRenderRightSideTab = function(e, t) {
                            var a = e.submenus || [],
                                n = e && e.title || "";
                            return a.map((function(e) {
                                if (!Object(k.a)(e.image)) {
                                    var t = "".concat(M.q, "/").concat(e.image);
                                    Object(se.a)(t, 60)
                                }
                                return "Price" !== n ? Object(D.jsx)("li", {
                                    id: e.menu_id,
                                    className: "navRightSubListLi",
                                    onClick: function(t) {
                                        return r.onClickSubCategory(t, e)
                                    },
                                    children: Object(D.jsxs)("a", {
                                        href: "".concat(M.c).concat(e.link_path),
                                        children: [Object(D.jsx)("img", {
                                            src: e.image,
                                            alt: e.title,
                                            className: e.image
                                        }), Object(D.jsx)("span", {
                                            children: e.title
                                        })]
                                    })
                                }, e.menu_id) : Object(D.jsx)("li", {
                                    id: e.menu_id,
                                    className: "navRightSubListLiPrice",
                                    onClick: function(t) {
                                        return r.onClickSubCategory(t, e)
                                    },
                                    children: Object(D.jsx)("a", {
                                        href: "".concat(M.c).concat(e.link_path),
                                        children: Object(D.jsx)("span", {
                                            children: e.title
                                        })
                                    })
                                }, e.menu_id)
                            }))
                        }, r._getSubMenuForSSR = function(e, t) {
                            var a = [],
                                n = [],
                                r = M.c;
                            return "object" === typeof e && null !== e && void 0 !== e && Object.keys(e).map((function(t) {
                                e[t].hasOwnProperty("submenus") && e[t].submenus.length > 0 && (n = [], Object.keys(e[t].submenus).map((function(a) {
                                    n.push(Object(D.jsx)("li", {
                                        children: Object(D.jsx)("a", {
                                            href: "".concat(r, "/").concat(e[t].submenus[a].link_path),
                                            children: e[t].submenus[a].title
                                        })
                                    }, e[t].submenus[a].title.toLowerCase()))
                                })), a.push(Object(D.jsxs)("div", {
                                    children: [Object(D.jsx)("span", {
                                        children: e[t].title
                                    }), " ", Object(D.jsx)("ul", {
                                        children: n
                                    })]
                                }, e[t].title.toLowerCase())))
                            })), Object(D.jsx)("ul", {
                                className: "parentMenuR submenu",
                                children: a
                            })
                        }, r.openPopup = function() {
                            r.setState({
                                modalIsOpen: !0
                            })
                        }, r.closePopup = function() {
                            r.setState({
                                modalIsOpen: !1
                            })
                        }, r.state = {
                            isPaneOpenLeft: !1,
                            selectedMenu: {},
                            showSubMenuID: null,
                            checkMenuLevel: 0,
                            showTabScreenState: 0,
                            menuId: "",
                            tabMenus: [],
                            tabRightSideList: [],
                            parentIndex: 0,
                            childrenSelectedIndex: 0,
                            titleHeading: "",
                            subcategoryHeading: "",
                            navigator: "",
                            modalIsOpen: !1,
                            isInitialState: !0
                        }, r.selectedLevels = {}, r.cachedRenderedOutput = "", r.dynamicLinksInserted = !1, r
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            O.a.setAppElement(this.el), this.setState({
                                navigator: navigator.userAgent || navigator.vendor
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return Object(D.jsxs)(D.Fragment, {
                                children: [Object(D.jsxs)("div", {
                                    ref: function(t) {
                                        return e.el = t
                                    },
                                    children: [this.props.open ? Object(D.jsx)(pe, Object(S.a)(Object(S.a)({
                                        navMenuListItem: this.navMenuListItem,
                                        state: this.state,
                                        onClickCloseSlideMenu: this.onClickCloseSlideMenu,
                                        backMainMenu: this.backMainMenu,
                                        getMobileDevice: this.getMobileDevice(),
                                        getRenderNavigationTab: this.getRenderNavigationTab
                                    }, this.props), {}, {
                                        openPopup: this.openPopup
                                    })) : "", this.props.open ? null : Object(D.jsx)("div", {
                                        className: "menu_display_ssr",
                                        children: this.props.open ? "" : this.getRenderNavigationComponent()
                                    })]
                                }), Object(D.jsx)(de, {
                                    modalIsOpen: this.state.modalIsOpen,
                                    closeUserLogin: this.closePopup
                                })]
                            })
                        }
                    }], [{
                        key: "getDerivedStateFromProps",
                        value: function(e, t) {
                            if ("/" === e.locationData.pathname && e.locationData && e.locationData.query && 1 === +e.locationData.query.user_login_popup && !1 === t.modalIsOpen && t.isInitialState && e.isUserAnonymous && e.isSiteHeaderRequestCompleted) return Object(V.a)("Hello!", "Please enter your email", !0), {
                                modalIsOpen: !0,
                                isInitialState: !1
                            }
                        }
                    }]), a
                }(c.Component),
                be = Object(g.c)((function(e) {
                    return {
                        userAccount: e.userAccount,
                        leftSideNavigationMenu: e.leftSideNavigationMenuReducer,
                        isMobileReq: e.pageData.isMobile,
                        locationData: e.router.location,
                        isUserAnonymous: e.userAccount.isUserAnonymous,
                        isSiteHeaderRequestCompleted: e.settings.isSiteHeaderRequestCompleted
                    }
                }))(he),
                fe = a(100),
                me = a(36),
                ge = s.a.lazy((function() {
                    return Promise.resolve().then(a.bind(null, 351))
                })),
                je = b()({
                    loader: function() {
                        return a.e(48).then(a.bind(null, 689))
                    },
                    modules: ["./RightSideOptionMenu"],
                    webpack: function() {
                        return [689]
                    },
                    loading: f.a
                }),
                Oe = b()({
                    loader: function() {
                        return a.e(48).then(a.bind(null, 688))
                    },
                    modules: ["../../Utils/Utility/CityPincodeMenu"],
                    webpack: function() {
                        return [688]
                    },
                    loading: function() {
                        return Object(D.jsx)("div", {
                            className: "city-loadable"
                        })
                    }
                }),
                ve = ["usa", "uk", "australia", "uae", "canada"],
                ye = ["cart", "sell-with-us"],
                _e = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a(e) {
                        var r;
                        return Object(n.a)(this, a), (r = t.call(this, e)).state = {
                            openSideMenu: !1,
                            showSearchBar: !1,
                            isRightSideOptionOpen: !1,
                            isCityModalOpen: !1,
                            cityModalOpenFrom: "",
                            isCityLoding: !1,
                            showCategoryDiv: !1,
                            isDefaultGeoCurrencySet: !1,
                            cityPopUp: !1,
                            isOpenSearchModal: !1,
                            cityPopupFromHeader: !1,
                            showdefaultSetPopup: !1
                        }, r.toggleUserAccountMenu = function(e) {
                            var t = e ? "Open" : "Close";
                            r.setState({
                                isRightSideOptionOpen: e
                            });
                            var a = {
                                action: "Right Menu Icon_ " + t,
                                eventLabel: window.location.href,
                                eventCategory: "Right Menu - " + t
                            };
                            Object(x.f)(a), Object(C.d)("HeaderIconClickClick", a)
                        }, r._toggleSideMenu = function() {
                            Object(k.a)(r.props.leftSideNavigationMenu) && r.props.fetchLeftSideNavigationMenu();
                            var e = !r.state.openSideMenu,
                                t = e ? "open" : "close";
                            r.setState({
                                openSideMenu: e
                            });
                            var a = {
                                action: "Menu Icon - " + t,
                                eventLabel: window.location.href,
                                eventCategory: "Mobile_Menu"
                            };
                            Object(x.f)(a), Object(C.d)("HeaderIconClickClick", a), Object(R.q)("mobile_menu", "app_download_button", r.props.location.pathname)
                        }, r.openSearchBox = function() {
                            document.getElementById("header-show-mobile").style.display = "none", r.loadSearchTapAppCss(), r.setState({
                                showSearchBar: !0,
                                isOpenSearchModal: !0
                            }), r.props.setMultiplePopup(!0)
                        }, r.loadSearchTapAppCss = function() {
                            r.searchTapAppCss.map((function(e, t) {
                                Object(fe.a)(M.c + "/" + e).then((function(e) {})).catch((function(e) {
                                    console.error("Unable to load the css", e)
                                }))
                            }))
                        }, r.onCloseSearchBar = function() {
                            document.getElementById("header-show-mobile").style.display = "block", r.setState({
                                showSearchBar: !1
                            })
                        }, r.openCityModalFromLeftSide = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            Object(k.a)(r.props.settings.lockdownCities) ? r.setState({
                                showCategoryDiv: !1
                            }) : r.setState({
                                showCategoryDiv: e
                            }), r._setLoader(!0), Object(k.a)(r.props.cityPopupData.all_cities) && r.props.fetchCityPopupData(r.state.cityPopUp).then((function(e) {
                                var t = e.cityPopupData;
                                Object(k.a)(t.popular_cities) || (r.setState({
                                    isCityModalOpen: !0,
                                    cityModalOpenFrom: "unlockBannerHead",
                                    cityPopupFromHeader: !0
                                }), Object(R.p)("shown", "citypopup", window.location.pathname), r._setLoader(!1))
                            })).catch((function(e) {
                                r._setLoader(!1)
                            })), Object(k.a)(r.props.cityPopupData.all_cities) || (r._setLoader(!1), r.setState({
                                isCityModalOpen: !0,
                                cityModalOpenFrom: "unlockBannerHead",
                                cityPopupFromHeader: !0
                            }), Object(R.p)("shown", "citypopup", window.location.pathname))
                        }, r.onCloseCityModal = function() {
                            r.setState({
                                isCityModalOpen: !1,
                                cityPopupFromHeader: !1
                            }), Object(R.p)("close", "citypopup", window.location.pathname)
                        }, r.handleQuickLinks = function() {
                            var e = document.getElementById("quick-links");
                            e && (e.querySelectorAll("span.nolink").forEach((function(e) {
                                e.classList.add("plus-sign")
                            })), e.querySelectorAll("li.expanded").forEach((function(e) {
                                e.querySelectorAll("ul > li").forEach((function(t) {
                                    t.addEventListener("click", (function(a) {
                                        a.stopPropagation();
                                        var n = e.querySelector("span.nolink");
                                        Object(C.d)("QuickLinksClick", {
                                            action: n.innerHTML,
                                            label: t.querySelector("a").innerHTML
                                        })
                                    }))
                                })), e.addEventListener("click", (function() {
                                    var t = e.querySelector("ul"),
                                        a = e.querySelector("span.nolink");
                                    r.selectedQuickLink.menu && (r.selectedQuickLink.menu.style.display = "none", r.selectedQuickLink.title.classList.remove("minus-sign"), r.selectedQuickLink.title.classList.add("plus-sign"));
                                    var n = "open",
                                        i = {
                                            title: a.innerHTML
                                        };
                                    r.selectedQuickLink.menu !== t ? (r.selectedQuickLink.menu = t, r.selectedQuickLink.title = a, t.style.display = "block", a.classList.add("minus-sign"), a.classList.remove("plus-sign")) : (n = "close", r.selectedQuickLink = {}), Object(C.d)("QuickLinksClick", {
                                        action: i.title,
                                        label: n
                                    })
                                }))
                            })))
                        }, r.unvielHiddenContent = function() {
                            var e = document.getElementsByClassName("react-app-default-hidden");
                            e.length && ee() > 60 && (e.map((function(e) {
                                e.style.display = "block"
                            })), window.removeEventListener("scroll", r.unvielHiddenContent))
                        }, r.hideCityPopup = function(e) {
                            var t = r.props.location.pathname;
                            return e.some((function(e) {
                                return t.includes(e)
                            }))
                        }, r.setGeoCurrencyCookies = function() {
                            var e = r.props.currencyInfoList,
                                t = r.props.settings && r.props.settings.geoCurrency,
                                a = null;
                            Object(k.a)(e) || (e.forEach((function(e) {
                                e.currency_code === t && (a = e)
                            })), null === a && (a = e[0])), Object(k.a)(a) || (r.props.setUserPickedCurrencyCountry(a.currency_code), r.props.setUserPickedCurrencyRate(a.conversion_factor), r.props.setUserPickedCurrencyIcon(a.country_label), v.a.set("user_select_currency", a.currency_code, 10, M.f), v.a.set("user_select_rate", a.conversion_factor, 10, M.f), v.a.set("user_select_icon", a.country_label, 10, M.f))
                        }, r.randomNumberInRange = function(e, t) {
                            return Math.floor(Math.random() * (t - e + 1)) + e
                        }, r.checkEvenOdd = function() {
                            return r.setState({
                                cityPopUp: !0
                            }), !0
                        }, r.evenOddEvent = function(e) {
                            var t = {
                                action: "city popup",
                                eventCategory: "A/b test",
                                eventLabel: e
                            };
                            Object(x.f)(t), Object(C.d)("clickEvent", t)
                        }, r.newEvenOddEvent = function(e) {
                            var t = {
                                action: "pop up",
                                eventCategory: "new old popup",
                                eventLabel: e
                            };
                            Object(x.f)(t), Object(C.d)("clickEvent", t)
                        }, r._setLoader = function(e) {
                            r.setState({
                                isCityLoding: e
                            })
                        }, r.getCookie = function(e) {
                            var t = r.props.cookies;
                            return Object(k.a)(t) ? null : t.get(e)
                        }, r.toggleCategoryDivStatus = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            r.setState({
                                showCategoryDiv: e,
                                isCityModalOpen: t
                            }), t && Object(C.d)("CitySelectInput", {
                                action: "Change City",
                                eventCategory: "Category Screen",
                                eventLabel: "Click"
                            })
                        }, r.getCookie = function(e) {
                            var t = r.props.cookies;
                            return Object(k.a)(t) ? null : t.get(e)
                        }, r.googleSocialLogin = function(e) {
                            r.props.googleSocialLogin(e)
                        }, r.selectedQuickLink = {}, r.searchTapAppCss = r.props.searchtap_resources.css, r
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this,
                                t = !1;
                            1 === M.w && (t = this.checkEvenOdd()), Object(k.a)(v.a.get("user_select_currency")) || (this.props.setUserPickedCurrencyCountry(v.a.get("user_select_currency")), this.props.setUserPickedCurrencyRate(v.a.get("user_select_rate")), this.props.setUserPickedCurrencyIcon(v.a.get("user_select_icon"))), Object(k.a)(v.a.get("user_select_currency") || this.props.userPickedCurrencyCountry) || Object(x.d)("currency_set", {
                                currency: v.a.get("user_select_currency") || this.props.userPickedCurrencyCountry
                            }), this.props.searchtap_resources.css = ["sites/all/modules/custom/searchtap/react/css/main.searchtap.chunk.css"], this.searchTapAppCss = this.props.searchtap_resources.css, Object(k.a)(this.props.settings.lockdownCities) && this.setState({
                                showCategoryDiv: !1
                            }), this.handleQuickLinks(), window.addEventListener("scroll", this.unvielHiddenContent), Object(k.a)(this.props.appMenu) && "false" === this.props.isMobileReq && this.props.fetchAppMenu(), Object(k.a)(this.props.cityPopupData.all_cities) && this.props.fetchCityPopupData(t).then((function(t) {
                                var a = t.cityPopupData;
                                if ((!Object(k.a)(a.popular_cities) || !Object(k.a)(a.all_cities)) && void 0 === v.a.get("user_select_city") && "listing_page" !== e.props.pageType) {
                                    var n = e.hideCityPopup(["/product-reviews", "/cart", "/flower-facts", "/plant-riddles", "/record-video", "/p/", "/video-message"]);
                                    e.props.locationPathname.search("rakhi");
                                    setTimeout((function() {
                                        e.setState({
                                            isCityModalOpen: !["/profile", "/my-orders", "/credits", "/cards", "/upi", "/orders", "/my-reviews", "/notifications", "/change-password", "/send-rakhi", "/download-app", "/my-address", "/contactus", "/user", "/trackorder", "/spinthewheel", "/instant-delivery", "/valentine"].includes(e.props.history.location.pathname),
                                            cityModalOpenFrom: "unlockBannerHead",
                                            cityPopupFromHeader: !1
                                        }), n && e.setState({
                                            isCityModalOpen: !1
                                        }), Object(C.d)("CitySelectInput", {
                                            event: "clickEvent",
                                            action: "Automatic",
                                            eventCategory: "City Pop Up",
                                            eventLabel: window.location.href
                                        }), Object(R.p)("shown", "citypopup", window.location.pathname), e._setLoader(!1)
                                    }), 9e3)
                                }
                            })).catch((function(t) {
                                console.log({
                                    error: t
                                }), e._setLoader(!1)
                            }));
                            var a = {
                                action: "Change City",
                                eventCategory: "Category Screen",
                                eventLabel: "Click"
                            };
                            Object(x.f)(a), Object(C.d)("CitySelectInput", a), "/st-search" === this.props.locationPathname && "true" === this.props.isMobileReq && (document.getElementById("header-show-mobile").style.display = "none", this.setState({
                                showSearchBar: !0
                            }))
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            !Object(k.a)(v.a.get("user_select_currency")) || Object(k.a)(this.props.currencyInfoList) || this.state.isDefaultGeoCurrencySet || (this.setState({
                                isDefaultGeoCurrencySet: !0
                            }), this.setGeoCurrencyCookies())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props.isInternationalLandingListingPage,
                                a = void 0 !== t && t,
                                n = this.props.locationPathname.split("/")[1],
                                r = ve.indexOf(n),
                                i = ye.indexOf(n);
                            return Object(D.jsxs)(D.Fragment, {
                                children: [1 === M.w && this.state.cityPopUp ? Object(D.jsx)(Oe, {
                                    isCityModalOpenProps: !a && this.state.isCityModalOpen,
                                    onCloseCityModal: this.onCloseCityModal,
                                    cityPopupData: this.props.cityPopupData,
                                    setUserPickedCity: this.props.setUserPickedCity,
                                    setUserPickedState: this.props.setUserPickedState,
                                    cityModalOpenFrom: this.state.cityModalOpenFrom,
                                    lockdownCities: this.props.settings.lockdownCities,
                                    showCategoryDiv: this.state.showCategoryDiv,
                                    cityPopupFromHeader: this.state.cityPopupFromHeader,
                                    toggleCategoryDivStatus: this.toggleCategoryDivStatus,
                                    setUserPickedPincode: this.props.setUserPickedPincode
                                }) : Object(D.jsx)(P.a, {
                                    isCityModalOpenProps: !a && this.state.isCityModalOpen,
                                    onCloseCityModal: this.onCloseCityModal,
                                    cityPopupData: this.props.cityPopupData,
                                    setUserPickedCity: this.props.setUserPickedCity,
                                    setUserPickedState: this.props.setUserPickedState,
                                    cityModalOpenFrom: this.state.cityModalOpenFrom,
                                    lockdownCities: this.props.settings.lockdownCities,
                                    showCategoryDiv: this.state.showCategoryDiv,
                                    toggleCategoryDivStatus: this.toggleCategoryDivStatus
                                }), this.state.isRightSideOptionOpen ? Object(D.jsx)(je, {
                                    closeRightSideOption: function() {
                                        return e.toggleUserAccountMenu(!1)
                                    },
                                    userAccount: this.props.userAccount,
                                    locationPathname: this.props.locationPathname,
                                    userPickedCurrencyIcon: this.props.userPickedCurrencyIcon,
                                    enableMultiCurrency: this.props.enableMultiCurrency,
                                    pageType: this.props.pageType,
                                    isMobileReq: this.props.isMobileReq,
                                    checkInternational: r,
                                    checkDisableUrl: i,
                                    getCookie: this.getCookie,
                                    setMultiplePopup: this.props.setMultiplePopup
                                }) : "", Object(D.jsx)($, {
                                    openRightSideOption: function() {
                                        return e.toggleUserAccountMenu(!0)
                                    },
                                    onOpenSideMenu: this._toggleSideMenu,
                                    onOpenSearchBox: this.openSearchBox,
                                    cartCount: this.props.cartCount,
                                    openCityModalFromHeader: this.openCityModalFromLeftSide,
                                    isInternational: "detail_page" === this.props.pageType ? this.props.isInternational : this.props.isInternationalLandingListingPage,
                                    getCookie: this.getCookie,
                                    location: this.props.location,
                                    lockdownCities: this.props.settings.lockdownCities,
                                    userAccount: this.props.userAccount,
                                    fetchLockdownCities: this.props.fetchLockdownCities,
                                    menuData: this.props.appMenu,
                                    isMobileReq: this.props.isMobileReq,
                                    googleSocialLogin: this.googleSocialLogin,
                                    show_new_city_popup: this.props.listing.show_new_city_popup,
                                    userPickedCurrencyCountry: this.props.userPickedCurrencyCountry,
                                    geoCurrency: Object(k.a)(this.props.settings.geoCurrency) ? null : this.props.settings.geoCurrency,
                                    pageType: this.props.pageType,
                                    userPickedCity: this.props.userPickedCity,
                                    rakhiPromoVideo: this.props.categoryProducts.rakhi_promo_video || this.props.productInfo.rakhiPromoVideo || this.props.listing.rakhiPromoVideo,
                                    checkInternational: r,
                                    checkDisableUrl: i,
                                    userPickedPincode: this.props.userPickedPincode,
                                    randomNo: v.a.get("city_popup_randomNo"),
                                    setMultiplePopup: this.props.setMultiplePopup,
                                    cityName: this.props.settings.cityName
                                }), "true" === this.props.isMobileReq && this.props.leftSideNavigationMenu && Object(D.jsx)(be, {
                                    openCityModalFromLeftSide: this.openCityModalFromLeftSide,
                                    open: this.state.openSideMenu,
                                    onSideMenuClose: this._toggleSideMenu,
                                    isInternational: this.props.isInternational
                                }), this.state.showSearchBar && Object(D.jsx)(c.Suspense, {
                                    fallback: Object(D.jsx)("div", {}),
                                    children: Object(D.jsx)("div", {
                                        className: "searchTapTopShown",
                                        children: Object(D.jsx)(ge, {
                                            isMobileReq: this.props.isMobileReq,
                                            show: this.state.showSearchBar,
                                            onCloseSearchBar: this.onCloseSearchBar,
                                            resources: this.props.searchtap_resources,
                                            locationPathname: this.props.locationPathname,
                                            settings: this.props.settings,
                                            isOpenSearchModal: this.state.isOpenSearchModal,
                                            setMultiplePopup: this.props.setMultiplePopup
                                        })
                                    })
                                })]
                            })
                        }
                    }]), a
                }(c.Component),
                Ce = Object(g.c)((function(e) {
                    return {
                        listing: e.listing,
                        appMenu: e.menu || [],
                        cartCount: e.settings.cartCount,
                        cityPopupData: e.cityPopupData.data || [],
                        userAccount: e.userAccount || {},
                        searchtap_resources: e.settings.searchtap_resources || {},
                        userPickedCity: e.settings.userPickedCity || "",
                        userPickedState: e.settings.userPickedState || "",
                        userPickedCurrencyIcon: e.settings.userPickedCurrencyIcon || "",
                        userPickedCurrencyCountry: e.settings.userPickedCurrencyCountry || "",
                        isInternational: e.product.isInternational,
                        settings: e.settings,
                        pageType: e.pageData.pageType || "",
                        isInternationalLandingListingPage: e.productList.categoryProducts.isInternational || e.listing.isInternational,
                        leftSideNavigationMenu: e.leftSideNavigationMenuReducer,
                        isMobileReq: e.pageData.isMobile,
                        locationPathname: e.router.location.pathname,
                        enableMultiCurrency: e.settings.enableMultiCurrency,
                        currencyInfoList: e.settings.currency_info || [],
                        categoryProducts: e.productList.categoryProducts,
                        productInfo: e.product,
                        userPickedPincode: e.settings.userPickedPincode || "",
                        multiplePopup: e.pageData.multiplePopup
                    }
                }), (function(e) {
                    return {
                        fetchAppMenu: function() {
                            return e(Object(ae.a)())
                        },
                        fetchCityPopupData: function(t) {
                            return e(Object(ne.a)(t))
                        },
                        setUserPickedCity: function(t) {
                            return e(Object(re.f)(t))
                        },
                        setUserPickedPincode: function(t) {
                            return e(Object(re.j)(t))
                        },
                        setUserPickedState: function(t) {
                            return e(Object(re.k)(t))
                        },
                        fetchLockdownCities: function() {
                            return e(Object(re.a)())
                        },
                        fetchLeftSideNavigationMenu: function() {
                            return e(Object(oe.a)())
                        },
                        googleSocialLogin: function(t) {
                            return e(Object(ie.b)(t))
                        },
                        setUserPickedCurrencyCountry: function(t) {
                            return e(Object(re.g)(t))
                        },
                        setUserPickedCurrencyRate: function(t) {
                            return e(Object(re.i)(t))
                        },
                        setUserPickedCurrencyIcon: function(t) {
                            return e(Object(re.h)(t))
                        },
                        setMultiplePopup: function(t) {
                            return e(Object(me.d)(t))
                        }
                    }
                }))(Object(l.b)(Object(u.h)(_e))),
                we = Object(g.c)((function(e) {
                    return {
                        isSiteHeaderRequestCompleted: e.settings.isSiteHeaderRequestCompleted
                    }
                }))((function(e) {
                    var t = Object(c.useState)(!1),
                        n = Object(G.a)(t, 2),
                        r = n[0],
                        i = n[1],
                        o = Object(c.useState)(""),
                        s = Object(G.a)(o, 2),
                        l = (s[0], s[1]);
                    return Object(c.useEffect)((function() {
                        if (!r && e.isSiteHeaderRequestCompleted && "undefined" !== typeof window && "undefined" !== typeof navigator) {
                            var t = !!window.opr && !!window.opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0,
                                n = "undefined" !== typeof InstallTrigger,
                                o = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || "undefined" !== typeof safari && window.safari.pushNotification).toString(),
                                c = !!document.documentMode,
                                s = !c && !!window.StyleMedia,
                                u = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime || !!window.chrome.app),
                                d = u && -1 != navigator.userAgent.indexOf("Edg"),
                                p = (u || t) && !!window.CSS;
                            l(navigator.userAgent);
                            var h = navigator.userAgent;
                            if ((h.match(/chrome|chromium|crios/i) || h.match(/firefox|fxios/i) || h.match(/safari/i) || h.match(/opr\//i) || h.match(/edg/i)) && !0, u || d || t || n || o || c || s || p) {
                                var b = a(185).default;
                                b.init("1420586741537528"), b.pageView(), Object(x.e)(), i(!0)
                            } else {
                                if (["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) && "ontouchend" in document) {
                                    var f = a(185).default;
                                    f.init("1420586741537528"), f.pageView(), Object(x.e)(), i(!0)
                                } else if (!h.includes("Lighthouse")) {
                                    var m = a(185).default;
                                    m.init("1420586741537528"), m.pageView(), Object(x.e)(), i(!0)
                                }
                            }
                        }
                    }), [e.isSiteHeaderRequestCompleted]), Object(D.jsx)(c.Fragment, {
                        children: Object(D.jsx)("div", {
                            style: {
                                display: "none"
                            }
                        })
                    })
                })),
                ke = Object(g.c)((function(e) {
                    return {
                        isSiteHeaderRequestCompleted: e.settings.isSiteHeaderRequestCompleted,
                        isUserAnonymous: e.userAccount.isUserAnonymous
                    }
                }))((function(e) {
                    Object(c.useEffect)((function() {
                        e.isSiteHeaderRequestCompleted && !1 === e.isUserAnonymous && (v.a.get("fact", null) || (window.location = M.c + "/user/logout"))
                    }), [e.isSiteHeaderRequestCompleted]);
                    var t = e.location.pathname;
                    return "app" === Object(m.a)("fa-source", e.location.search) ? null : Object(D.jsxs)(s.a.Fragment, {
                        children: [
                            [""].includes(t) ? null : Object(D.jsx)(Ce, {}), e.children, Object(D.jsx)(we, {})
                        ]
                    })
                })),
                Se = Object(u.h)(ke),
                Pe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(12), a.e(38)]).then(a.bind(null, 718))
                    },
                    modules: ["./containers/PageDataContainer"],
                    webpack: function() {
                        return [718]
                    },
                    loading: f.a
                }),
                Ee = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(4), a.e(18)]).then(a.bind(null, 706))
                    },
                    modules: ["./containers/CartPageContainer"],
                    webpack: function() {
                        return [706]
                    },
                    loading: f.a
                }),
                xe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(53)]).then(a.bind(null, 695))
                    },
                    modules: ["./containers/TrackOrderContainr"],
                    webpack: function() {
                        return [695]
                    },
                    loading: f.a
                }),
                De = b()({
                    loader: function() {
                        return Promise.all([a.e(4), a.e(26)]).then(a.bind(null, 707))
                    },
                    modules: ["./containers/DigitalCheckoutContainer"],
                    webpack: function() {
                        return [707]
                    },
                    loading: f.a
                }),
                Ne = b()({
                    loader: function() {
                        return Promise.all([a.e(1), a.e(39)]).then(a.bind(null, 687))
                    },
                    modules: ["./components/UI/PageNotFound"],
                    webpack: function() {
                        return [687]
                    },
                    loading: f.a
                }),
                Te = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(12), a.e(20)]).then(a.bind(null, 719))
                    },
                    modules: ["./containers/ContactUsPageContainer"],
                    webpack: function() {
                        return [719]
                    },
                    loading: f.a
                }),
                Me = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(13)]).then(a.bind(null, 724))
                    },
                    modules: ["./containers/AboutUsPageContainer"],
                    webpack: function() {
                        return [724]
                    },
                    loading: f.a
                }),
                Ae = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(16)]).then(a.bind(null, 725))
                    },
                    modules: ["./containers/CancelRefundContainer"],
                    webpack: function() {
                        return [725]
                    },
                    loading: f.a
                }),
                Le = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(29)]).then(a.bind(null, 726))
                    },
                    modules: ["./containers/FaqPageContainer"],
                    webpack: function() {
                        return [726]
                    },
                    loading: f.a
                }),
                Ie = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(7), a.e(22)]).then(a.bind(null, 712))
                    },
                    modules: ["./containers/CouponDealsContainer"],
                    webpack: function() {
                        return [712]
                    },
                    loading: f.a
                }),
                Re = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(5), a.e(17)]).then(a.bind(null, 721))
                    },
                    modules: ["./containers/CareerPageContainer"],
                    webpack: function() {
                        return [721]
                    },
                    loading: f.a
                }),
                Ue = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(40)]).then(a.bind(null, 727))
                    },
                    modules: ["./containers/PrivacyPolicyContainer"],
                    webpack: function() {
                        return [727]
                    },
                    loading: f.a
                }),
                Fe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(52)]).then(a.bind(null, 728))
                    },
                    modules: ["./containers/TermConditionContainer"],
                    webpack: function() {
                        return [728]
                    },
                    loading: f.a
                }),
                Be = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(27)]).then(a.bind(null, 729))
                    },
                    modules: ["./containers/DisclaimerPageContainer"],
                    webpack: function() {
                        return [729]
                    },
                    loading: f.a
                }),
                Ge = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(34)]).then(a.bind(null, 730))
                    },
                    modules: ["./containers/MediaPageContainer"],
                    webpack: function() {
                        return [730]
                    },
                    loading: f.a
                }),
                He = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(50)]).then(a.bind(null, 731))
                    },
                    modules: ["./containers/SitemapContainer"],
                    webpack: function() {
                        return [731]
                    },
                    loading: f.a
                }),
                Ve = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(69), a.e(36)]).then(a.bind(null, 698))
                    },
                    modules: ["./containers/OccasionPageContainer"],
                    webpack: function() {
                        return [698]
                    },
                    loading: f.a
                }),
                qe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(49)]).then(a.bind(null, 704))
                    },
                    modules: ["./containers/SellWithUsPageContainer"],
                    webpack: function() {
                        return [704]
                    },
                    loading: f.a
                }),
                Ke = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(8), a.e(37)]).then(a.bind(null, 697))
                    },
                    modules: ["./containers/OrderReviewContainer"],
                    webpack: function() {
                        return [697]
                    },
                    loading: f.a
                }),
                Je = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(6), a.e(60)]).then(a.bind(null, 701))
                    },
                    modules: ["./containers/UserProfileContainer"],
                    webpack: function() {
                        return [701]
                    },
                    loading: f.a
                }),
                We = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(6), a.e(55)]).then(a.bind(null, 708))
                    },
                    modules: ["./containers/UserCardContainer"],
                    webpack: function() {
                        return [708]
                    },
                    loading: f.a
                }),
                ze = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(5), a.e(6), a.e(58)]).then(a.bind(null, 694))
                    },
                    modules: ["./containers/UserOrdersContainer"],
                    webpack: function() {
                        return [694]
                    },
                    loading: f.a
                }),
                Ye = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(6), a.e(63)]).then(a.bind(null, 713))
                    },
                    modules: ["./containers/UserWalletContainer"],
                    webpack: function() {
                        return [713]
                    },
                    loading: f.a
                }),
                Qe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(6), a.e(61)]).then(a.bind(null, 699))
                    },
                    modules: ["./containers/UserReviewsContainer"],
                    webpack: function() {
                        return [699]
                    },
                    loading: f.a
                }),
                Ze = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(6), a.e(62)]).then(a.bind(null, 709))
                    },
                    modules: ["./containers/UserUPIContainer"],
                    webpack: function() {
                        return [709]
                    },
                    loading: f.a
                }),
                Xe = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(73), a.e(57)]).then(a.bind(null, 714))
                    },
                    modules: ["./containers/UserNotificationContainer"],
                    webpack: function() {
                        return [714]
                    },
                    loading: f.a
                }),
                $e = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(46)]).then(a.bind(null, 700))
                    },
                    modules: ["./containers/RetryPaymentContainer"],
                    webpack: function() {
                        return [700]
                    },
                    loading: f.a
                }),
                et = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(8), a.e(47)]).then(a.bind(null, 702))
                    },
                    modules: ["./containers/ReviewPageContainer"],
                    webpack: function() {
                        return [702]
                    },
                    loading: f.a
                }),
                tt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(5), a.e(56)]).then(a.bind(null, 720))
                    },
                    modules: ["./containers/UserChangePasswordContainer"],
                    webpack: function() {
                        return [720]
                    },
                    loading: f.a
                }),
                at = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(28)]).then(a.bind(null, 710))
                    },
                    modules: ["./containers/DownloadPageContainer"],
                    webpack: function() {
                        return [710]
                    },
                    loading: f.a
                }),
                nt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(5), a.e(54)]).then(a.bind(null, 696))
                    },
                    modules: ["./containers/UserAddressContainer"],
                    webpack: function() {
                        return [696]
                    },
                    loading: f.a
                }),
                rt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(8), a.e(25)]).then(a.bind(null, 715))
                    },
                    modules: ["./containers/DeleteAccountContainer"],
                    webpack: function() {
                        return [715]
                    },
                    loading: f.a
                }),
                it = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(59)]).then(a.bind(null, 722))
                    },
                    modules: ["./containers/UserPagesContainer"],
                    webpack: function() {
                        return [722]
                    },
                    loading: f.a
                }),
                ot = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(59)]).then(a.bind(null, 723))
                    },
                    modules: ["./containers/SpinTheWheelContainer"],
                    webpack: function() {
                        return [723]
                    },
                    loading: f.a
                }),
                ct = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(71), a.e(15)]).then(a.bind(null, 692))
                    },
                    modules: ["./containers/BlogPageContainer"],
                    webpack: function() {
                        return [692]
                    },
                    loading: f.a
                }),
                st = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(71), a.e(15)]).then(a.bind(null, 732))
                    },
                    modules: ["./containers/FlowerFactContainer"],
                    webpack: function() {
                        return [732]
                    },
                    loading: f.a
                }),
                lt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(3), a.e(71), a.e(15)]).then(a.bind(null, 733))
                    },
                    modules: ["./containers/PlantRiddlesContainer"],
                    webpack: function() {
                        return [733]
                    },
                    loading: f.a
                }),
                ut = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(32)]).then(a.bind(null, 717))
                    },
                    modules: ["./containers/HippoVideoContainer"],
                    webpack: function() {
                        return [717]
                    },
                    loading: f.a
                }),
                dt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(68), a.e(33)]).then(a.bind(null, 711))
                    },
                    modules: ["./containers/HippoVideoMessageContainer"],
                    webpack: function() {
                        return [711]
                    },
                    loading: f.a
                }),
                pt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(12), a.e(38)]).then(a.bind(null, 734))
                    },
                    modules: ["./containers/CustomerProtectionPolicyContainer"],
                    webpack: function() {
                        return [734]
                    },
                    loading: f.a
                }),
                ht = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(21)]).then(a.bind(null, 693))
                    },
                    modules: ["./containers/CorporatePageContainer"],
                    webpack: function() {
                        return [693]
                    },
                    loading: f.a
                }),
                bt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(2), a.e(3), a.e(31)]).then(a.bind(null, 703))
                    },
                    modules: ["./containers/FranchisePageContainer"],
                    webpack: function() {
                        return [703]
                    },
                    loading: f.a
                }),
                ft = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(30)]).then(a.bind(null, 705))
                    },
                    modules: ["./containers/FlowerSubscriptionsPageContainer"],
                    webpack: function() {
                        return [705]
                    },
                    loading: f.a
                }),
                mt = b()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(1), a.e(23)]).then(a.bind(null, 735))
                    },
                    modules: ["./containers/CouponsPaypalContainer"],
                    webpack: function() {
                        return [735]
                    },
                    loading: f.a
                }),
                gt = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        return Object(n.a)(this, a), t.apply(this, arguments)
                    }
                    return Object(r.a)(a, [{
                        key: "render",
                        value: function() {
                            var e = this,
                                t = Object(m.a)("amp", this.props.location.search);
                            return Object(D.jsxs)(D.Fragment, {
                                children: [this.props.location.pathname.includes("checkout-digital") || this.props.location.pathname.includes("blog") || this.props.location.pathname.includes("my-occasion") ? "" : Object(D.jsx)(Se, {}), "true" === t || "false" === t ? Object(D.jsx)(u.d, {
                                    children: Object(D.jsx)(u.b, {
                                        path: "*",
                                        component: function() {
                                            return Object(D.jsx)(Ne, {
                                                statusCode: 404,
                                                isMobileReq: e.props.isMobileReq
                                            })
                                        },
                                        status: 404
                                    })
                                }) : Object(D.jsxs)(u.d, {
                                    children: [Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/",
                                        component: Pe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/cart",
                                        component: Ee
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/contactus",
                                        component: Te
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/about-us",
                                        component: Me
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/cancellation-and-refund",
                                        component: Ae
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/need-help",
                                        component: Le
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/coupon-deals",
                                        component: Ie
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/career-page",
                                        component: Re
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/privacy-page",
                                        component: Ue
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/termcondition",
                                        component: Fe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/customer-protection-policy",
                                        component: pt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/disclaimer-page",
                                        component: Be
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/show-media",
                                        component: Ge
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/show-sitemap",
                                        component: He
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/blog",
                                        component: ct
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/profile",
                                        component: Je
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/my-orders",
                                        component: ze
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/cards",
                                        component: We
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/my-occasion",
                                        component: Ve
                                    }), Object(D.jsx)(u.b, {
                                        path: "/reviews",
                                        name: "ReviewsPage",
                                        component: et
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/sell-with-us",
                                        component: qe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/corporate",
                                        component: ht
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/franchise",
                                        component: bt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/flowers/subscriptions",
                                        component: ft
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/coupons/paypal",
                                        component: mt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/trackorder",
                                        component: xe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/credits",
                                        component: Ye
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/my-reviews",
                                        component: Qe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/upi",
                                        component: Ze
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/my-address",
                                        component: nt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/change-password",
                                        component: tt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/download-app",
                                        component: at
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/flower-facts",
                                        component: st
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/plant-riddles",
                                        component: lt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/user",
                                        component: it
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/delete-account",
                                        component: rt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/product-reviews/:id/:userId?",
                                        component: Ke
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/spinthewheel",
                                        component: ot
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/retry-payment/:orderid",
                                        component: $e
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/notifications",
                                        component: Xe
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/checkout-digital/:orderid",
                                        component: De
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/blog:category?/:subcat?/:subsubcat",
                                        component: ct
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/record-video/:enorderid/:orderid",
                                        component: ut
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/video-message",
                                        component: dt
                                    }), Object(D.jsx)(u.b, {
                                        exact: !0,
                                        path: "/:category?/:subcat?/:subsubcat?/:levelfour?/:levelfive",
                                        component: Pe
                                    })]
                                })]
                            })
                        }
                    }]), a
                }(c.Component);
            gt.contextTypes = {
                data: p.a.oneOfType([p.a.object, p.a.string])
            };
            var jt = Object(l.b)(Object(u.h)(gt)),
                Ot = (a(684), a(685), a(103)),
                vt = a(231),
                yt = a(141),
                _t = a(348),
                Ct = Object(_t.a)(),
                wt = Ct.store,
                kt = Ct.history,
                St = document.querySelector("#flowerauraReactApp"),
                Pt = Object(E.f)(),
                Et = function(e) {
                    Object(i.a)(a, e);
                    var t = Object(o.a)(a);

                    function a() {
                        var e;
                        Object(n.a)(this, a);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return (e = t.call.apply(t, [this].concat(i))).libraryUrl = !1, e.erroredImage = function(e) {
                            "IMG" == e.target.nodeName && (e.target.src = "https://imgcdn.floweraura.com/images/common/default_image.svg", e.target.srcset = "https://imgcdn.floweraura.com/images/common/default_image.svg")
                        }, e
                    }
                    return Object(r.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            (document && document.addEventListener("error", this.erroredImage, !0), document && document.referrer) && (document.referrer.match(/^https?:\/\/([^\/]+\.)?google\.com(\/|$)/i) ? v.a.set("google", 1, 10, M.f) : v.a.set("google", 0, 10, M.f))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            document && document.removeEventListener("error", this.erroredImage)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return Object(D.jsx)(g.a, {
                                store: wt,
                                children: Object(D.jsx)(yt.a, {
                                    history: kt,
                                    children: Object(D.jsx)(vt.Frontload, {
                                        noServerRender: Pt,
                                        children: Object(D.jsx)(l.a, {
                                            children: Object(D.jsx)(jt, {})
                                        })
                                    })
                                })
                            })
                        }
                    }]), a
                }(s.a.Component),
                xt = kt.location.pathname,
                Dt = ["/sendflowers/brahmapur", "/sendflowers/chhindwara", "/sendflowers/bhilwara", "/sendflowers/shahjahanpur", "/sendflowers/ahmedabad", "/flowers/roses", "/flowers/basket", "sendflowers/chennai", "sendflowers/mumbai", "sendflowers/bangalore"].indexOf(xt),
                Nt = Object(E.e)();
            (-1 !== Dt || Nt) && (null !== St && !0 === St.hasChildNodes() ? b.a.preloadReady().then((function() {
                Object(Ot.hydrate)(Object(D.jsx)(Et, {}), St)
            })) : Object(Ot.render)(Object(D.jsx)(Et, {}), St))
        },
        7: function(e, t, a) {
            "use strict";
            var n = a(26),
                r = a(25),
                i = a(51),
                o = Object(n.a)((function e() {
                    Object(r.a)(this, e)
                }));
            o.set = function(e, t, a, n) {
                var r = new Date;
                r.setTime(r.getTime() + 24 * a * 60 * 60 * 1e3);
                var i = e + "=" + t + ";path=/; expires=" + r.toGMTString() + ";";
                i += "domain=" + (n = n || "." + window.location.hostname) + ";", document.cookie = i
            }, o.get = function(e) {
                if ("user_select_city" === e) return (new i.a).get(e);
                if ("city_popup_randomNo" === e) return (new i.a).get(e);
                if ("user_select_pincode" === e) return (new i.a).get(e);
                if ("user_select_state" === e) return (new i.a).get(e);
                for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
                    for (var r = a[n];
                        " " === r.charAt(0);) r = r.substring(1);
                    if (0 === r.indexOf(t)) return r.substring(t.length, r.length)
                }
                return ""
            }, o.delete = function(e) {
                document.cookie = e + "= ; expires = Thu, 01 Jan 1970 00:00:00 GMT", document.cookie = e + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            }, o.getCookieData = function(e) {
                return (new i.a).get(e)
            }, t.a = o
        },
        8: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            })), a.d(t, "e", (function() {
                return u
            })), a.d(t, "g", (function() {
                return d
            })), a.d(t, "b", (function() {
                return h
            })), a.d(t, "f", (function() {
                return b
            })), a.d(t, "h", (function() {
                return f
            })), a.d(t, "d", (function() {
                return m
            })), a.d(t, "c", (function() {
                return j
            }));
            var n = a(92),
                r = a(41),
                i = a(9),
                o = a.n(i),
                c = new(a(737).a)({
                    loaded: !1
                }),
                s = {
                    scriptIsLoaded: function() {
                        return c.next({
                            loaded: !0
                        })
                    },
                    isLoaded: function() {
                        return c.asObservable()
                    }
                },
                l = !1,
                u = function() {
                    var e = Object(r.g)() ? "UA-18681439-1" : "UA-124749434-1";
                    e && (n.a.initialize(e), s.scriptIsLoaded())
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    e.includes("ec:") && !l && (n.a.ga("require", "ec"), l = !0), a ? n.a.ga(e, a, t) : t ? n.a.ga(e, t) : n.a.ga(e, a)
                },
                p = {
                    id: o.a.string.isRequired,
                    name: o.a.string.isRequired,
                    category: o.a.string.isRequired,
                    brand: o.a.string.isRequired,
                    variant: o.a.string.isRequired,
                    list: o.a.string.isRequired,
                    position: o.a.number.isRequired
                },
                h = function(e) {
                    var t = e.id,
                        a = void 0 === t ? e.sku ? e.sku : e.nid : t,
                        n = e.title,
                        r = void 0 === n ? "" : n,
                        i = e.type,
                        c = void 0 === i ? "" : i,
                        s = (e.type, e.list),
                        l = void 0 === s ? "/giftfinder" === e.url ? window.location.pathname + window.location.search : e.url : s,
                        u = e.position,
                        d = void 0 === u ? "" : u,
                        h = e.amount,
                        b = void 0 === h ? 0 : h,
                        f = e.price,
                        m = void 0 === f ? 0 : f;
                    o.a.checkPropTypes(p, e);
                    var g = {
                        id: a,
                        name: r,
                        category: c,
                        brand: "FA",
                        variant: ""
                    };
                    return b && (g.price = Number(b)), m && (g.price = Number(m)), d && (g.position = Number(d)), l && (g.list = l), g
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e;
                    if (e.eventCategory && (t.category = e.eventCategory), e.eventAction && (t.action = e.eventAction), e.eventLabel && (t.label = e.eventLabel), window) try {
                        window && window.gtag("event", "customEvent", t), n.a.event(t)
                    } catch (a) {
                        console.log("Something went wrong in window.gtag 3", a)
                    }
                },
                f = function(e) {
                    window && window.gtag("event", "screen_view", {
                        screen_name: e
                    }), n.a.pageview(e)
                },
                m = function(e, t) {
                    try {
                        window && window.gtag("event", "".concat(e), t)
                    } catch (a) {
                        console.log("Something went wrong in window.gtag 2", a)
                    }
                },
                g = {
                    item_list_name: o.a.string.isRequired,
                    item_id: o.a.string.isRequired,
                    item_name: o.a.string.isRequired,
                    currency: o.a.string.isRequired,
                    index: o.a.number.isRequired,
                    item_brand: o.a.string.isRequired,
                    item_category: o.a.string.isRequired,
                    price: o.a.number.isRequired,
                    quantity: o.a.number.isRequired
                },
                j = function(e) {
                    var t = e.item_list_name,
                        a = void 0 === t ? "" : t,
                        n = e.item_id,
                        r = void 0 === n ? "" : n,
                        i = e.item_name,
                        c = void 0 === i ? "" : i,
                        s = e.currency,
                        l = void 0 === s ? "" : s,
                        u = e.index,
                        d = void 0 === u ? "" : u,
                        p = e.item_brand,
                        h = void 0 === p ? "" : p,
                        b = e.item_category,
                        f = void 0 === b ? "" : b,
                        m = e.price,
                        j = void 0 === m ? "" : m,
                        O = e.quantity,
                        v = void 0 === O ? "" : O;
                    return o.a.checkPropTypes(g, e), {
                        item_list_name: a,
                        item_id: r,
                        item_name: c,
                        currency: l,
                        index: Number(d),
                        item_brand: h,
                        item_category: f,
                        price: Number(j),
                        quantity: v
                    }
                }
        },
        80: function(e, t, a) {
            "use strict";
            var n = a(31),
                r = a(26),
                i = a(25),
                o = Object(r.a)((function e() {
                    Object(i.a)(this, e)
                }));
            o.get = function(e) {
                for (var t = "", a = 0, r = Object.entries(e); a < r.length; a++) {
                    var i = Object(n.a)(r[a], 2),
                        o = i[0],
                        c = i[1];
                    t += "&".concat(o, "=").concat(c)
                }
                return t = t.slice(1)
            }, t.a = o
        }
    },
    [
        [686, 65, 66]
    ]
]);