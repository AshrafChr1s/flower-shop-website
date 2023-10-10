(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [41], {
        1060: function(e, t, a) {},
        1061: function(e, t, a) {},
        1062: function(e, t, a) {},
        1064: function(e, t, a) {},
        1112: function(e, t, a) {
            "use strict";
            a.r(t);
            var i = a(1),
                c = a(25),
                s = a(26),
                n = a(34),
                r = a(35),
                l = a(3),
                o = a.n(l),
                d = a(2),
                j = a(30),
                b = (a(1060), a(831)),
                m = a(845),
                u = a(832),
                h = a(833),
                p = a(834),
                O = a(836),
                g = a(0),
                v = function(e) {
                    return Object(g.jsx)("div", {
                        className: "view-header",
                        children: Object(g.jsx)("div", {
                            className: "js-page-banner",
                            children: Object(g.jsx)("h1", {
                                style: {
                                    color: e.color
                                },
                                children: e.title
                            })
                        })
                    })
                },
                x = a(786),
                f = a(835),
                _ = a(848),
                w = a(837),
                y = a(838),
                N = a(884),
                k = a(849),
                T = a(839),
                L = a(850),
                S = a(843),
                C = a(840),
                P = a(841),
                D = a(14),
                R = a(41),
                I = a(7),
                A = a(766),
                M = a(183),
                E = a(740),
                G = a(8),
                z = a(745),
                q = a(755),
                F = a(181),
                H = a(885),
                B = a(887),
                V = a(889),
                U = a(888),
                W = a(891),
                Y = a(143),
                K = a(892),
                J = a(738),
                X = a(230),
                Z = (a(1061), a(746), function(e) {
                    var t = e.items,
                        a = (e.pushToGtm, e.background_color),
                        i = e.cardName,
                        c = (e.location, e.isMobileReq),
                        s = t.map((function(e, t) {
                            return Object(g.jsxs)("li", {
                                children: [Object(g.jsx)("div", {
                                    className: "productCardImage",
                                    children: Object(g.jsx)(J.a, {
                                        src: e.img,
                                        srcset: "true" === c ? Object(X.a)(e.img, 212, 190) : Object(X.a)(e.img, 367, 289),
                                        alt: e.title,
                                        noLazyLoad: !1
                                    })
                                }), Object(g.jsxs)("div", {
                                    className: "productImageLink",
                                    children: [Object(g.jsx)("div", {
                                        className: "productImageTitle",
                                        children: e.title
                                    }), Object(g.jsx)("div", {
                                        className: "productImageDesc",
                                        dangerouslySetInnerHTML: {
                                            __html: e.description
                                        }
                                    })]
                                })]
                            }, t)
                        }));
                    return Object(g.jsx)("div", {
                        className: "productWithLinkCard ".concat(i),
                        children: Object(g.jsx)("div", {
                            style: {
                                background: a
                            },
                            className: "productWithLinkCardInner",
                            children: Object(g.jsx)("ul", {
                                children: s
                            })
                        })
                    })
                }),
                Q = a(893),
                $ = a(926),
                ee = a(31),
                te = (a(1062), a(42)),
                ae = a.n(te),
                ie = a(775),
                ce = a(12),
                se = a(744),
                ne = function(e) {
                    var t = e.banner_desk,
                        a = e.banner_mob,
                        i = e.link_one,
                        c = e.link_two,
                        s = e.title_one,
                        n = e.title_two,
                        r = e.isMobileReq,
                        o = e.noLazyLoad,
                        j = void 0 !== o && o,
                        b = Object(l.useState)(!1),
                        m = Object(ee.a)(b, 2),
                        u = m[0],
                        h = m[1],
                        p = Object(l.useState)(""),
                        O = Object(ee.a)(p, 2),
                        v = O[0],
                        x = O[1];
                    Object(l.useEffect)((function() {
                        x(navigator.userAgent)
                    }), []);
                    if (!Object(d.a)(t) && !Object(d.a)(a)) return !(/Mac|iPad|iPhone|iPod/.test(v) && !window.MSStream) && Object(g.jsxs)("div", {
                        className: "hippoBannerBox",
                        children: [Object(g.jsx)("div", {
                            className: "hippoBanner",
                            children: Object(g.jsxs)("div", {
                                className: "hippoBannerImg",
                                children: ["true" === r ? Object(g.jsx)(ie.a, {
                                    src: a,
                                    srcset: a,
                                    noLazyLoad: j,
                                    alt: "hippo banner",
                                    title: "hippo banner"
                                }) : Object(g.jsx)(ie.a, {
                                    src: t,
                                    srcset: t,
                                    noLazyLoad: j,
                                    alt: "hippo banner",
                                    title: "hippo bannern"
                                }), Object(g.jsxs)("div", {
                                    className: "shop-works",
                                    children: [Object(g.jsx)("a", {
                                        onClick: function() {
                                            return Object(ce.d)(Object(se.a)(), "hippo video banner", s, i, window.location.pathname)
                                        },
                                        href: i,
                                        children: s
                                    }), Object(g.jsx)("div", {
                                        className: "howitsWork",
                                        onClick: function() {
                                            h(!0), Object(ce.d)(Object(se.a)(), "hippo video banner", n, c, window.location.pathname)
                                        },
                                        children: n
                                    })]
                                })]
                            })
                        }), u && Object(g.jsx)(ae.a, {
                            className: "hippo-video-modal",
                            contentLabel: "hippo-video-modal",
                            overlayClassName: "hippo-video-overlay",
                            isOpen: u,
                            children: Object(g.jsxs)("div", {
                                id: "sendVideoMessage",
                                className: "modal-box",
                                children: [Object(g.jsx)("div", {
                                    className: "hippo-modal-close",
                                    onClick: function() {
                                        h(!1)
                                    },
                                    children: "X"
                                }), Object(g.jsx)("div", {
                                    className: "modal-body",
                                    children: Object(g.jsx)("iframe", {
                                        src: c,
                                        title: "hippoVideo",
                                        width: 560,
                                        height: 460,
                                        frameBorder: "0",
                                        allowFullScreen: !0
                                    })
                                })]
                            })
                        })]
                    })
                },
                re = a(6),
                le = a(55),
                oe = a(1063),
                de = a.n(oe),
                je = a.p + "static/media/storyClose.66b65fb0.svg",
                be = a.p + "static/media/upArrow.ca863742.svg",
                me = a(743),
                ue = (a(1064), {
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: 0
                    }
                }),
                he = {
                    width: "100vw",
                    height: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                pe = {
                    backgroundColor: "#FF7F7D"
                },
                Oe = {
                    backgroundColor: "#FFFFFF"
                };
            var ge = Object(j.c)((function(e) {
                    return {}
                }))((function(e) {
                    var t = e.hideStories,
                        a = e.storyVideoJson,
                        i = e.pageData,
                        c = e.pathname,
                        s = Object(l.useState)([]),
                        n = Object(ee.a)(s, 2),
                        r = n[0],
                        o = n[1],
                        j = Object(l.useState)([]),
                        b = Object(ee.a)(j, 2),
                        m = b[0],
                        u = b[1],
                        h = Object(l.useState)(!1),
                        p = Object(ee.a)(h, 2),
                        O = p[0],
                        v = p[1],
                        x = Object(l.useState)(!0),
                        f = Object(ee.a)(x, 2),
                        _ = f[0],
                        w = f[1],
                        y = Object(l.useState)(null),
                        N = Object(ee.a)(y, 2),
                        k = N[0],
                        T = N[1],
                        L = Object(l.useState)(0),
                        S = Object(ee.a)(L, 2),
                        C = S[0],
                        P = S[1],
                        D = "/" === c ? "home_page" : i.pageType;
                    Object(l.useEffect)((function() {
                        if (o(a), Object(d.a)(localStorage.getItem("stories"))) localStorage.setItem("stories", "[]");
                        else {
                            var e = a,
                                t = localStorage.getItem("stories"),
                                i = JSON.parse(t);
                            u(i);
                            var c = Object(le.a)(e);
                            i.forEach((function(t) {
                                e.forEach((function(e) {
                                    if (t == e.nid) {
                                        var a = c.findIndex((function(t) {
                                                return t.nid == e.nid
                                            })),
                                            i = c.splice(a, 1)[0];
                                        c.filter((function(t) {
                                            return t.nid == e.nid
                                        })), c.push(i)
                                    }
                                }))
                            })), o(c)
                        }
                    }), []), Object(l.useEffect)((function() {
                        _ && (a.forEach((function(e) {
                            Object(ce.t)("shown", D, "FA stories", c, e.title)
                        })), w(!1))
                    }), [_]);
                    var R, I = function() {
                            v(!1), T(null), P(0), Object(ce.t)("Close", D, "FA stories", c, k.title)
                        },
                        A = function(e, t) {
                            var a = e;
                            return a.length > t && (a = a.substring(0, t) + "..."), a
                        };
                    return t ? null : Object(g.jsx)(g.Fragment, {
                        children: Object(g.jsxs)("div", {
                            className: "fa-stories ".concat(i.pageType),
                            children: [r.length > 0 ? r.map((function(e, t) {
                                return Object(g.jsxs)("div", {
                                    className: "story-container",
                                    onClick: function() {
                                        return T(e), void v(!0)
                                    },
                                    children: [Object(g.jsx)("div", {
                                        className: "story-circles ".concat(1 == e.nid ? "rainbow-border" : "", " ").concat(m.includes(e.nid) ? "seen" : ""),
                                        children: Object(g.jsx)(me.LazyLoadImage, {
                                            className: "bakery-thumbnail ".concat(1 == e.nid ? "rainbow-thumbnail" : ""),
                                            src: e.thumbnail,
                                            alt: "bakery"
                                        })
                                    }), Object(g.jsx)("label", {
                                        className: "story-main-title ".concat(1 == e.nid ? "rainbow-text" : ""),
                                        children: A(e.title, 15)
                                    })]
                                }, t)
                            })) : [1, 2, 3, 4, 5].map((function(e) {
                                return Object(g.jsxs)("div", {
                                    className: "story-container",
                                    children: [Object(g.jsx)("div", {
                                        className: "story-circles-shimmer"
                                    }), Object(g.jsx)("label", {
                                        className: "title-line",
                                        children: "Mango Cakes"
                                    })]
                                }, e)
                            })), Object(g.jsx)(ae.a, {
                                isOpen: O,
                                style: ue,
                                onRequestClose: I,
                                className: "storyModal",
                                overlayClassName: "fa-story-overlay",
                                children: Object(g.jsx)("div", {
                                    className: "bk-story-overlay1",
                                    children: Object(d.a)(k) ? null : Object(g.jsxs)(g.Fragment, {
                                        children: [Object(g.jsxs)("div", {
                                            className: "storyHeader",
                                            children: [Object(g.jsx)("div", {
                                                class: "story-circles-header ".concat(1 == k.nid ? "rainbow-header" : ""),
                                                children: Object(g.jsx)("img", {
                                                    className: "bakery-thumbnail-header ".concat(1 == k.nid ? "rainbow-bakery" : ""),
                                                    src: k.data[C].productImage,
                                                    alt: "bakery"
                                                })
                                            }), Object(g.jsxs)("div", {
                                                className: "story-circle-content",
                                                children: [Object(g.jsx)("label", {
                                                    className: "story-header-title ".concat(1 == k.nid ? "rainbow" : ""),
                                                    children: A(k.data[C].long_title, 25)
                                                }), Object(d.a)(k.data[C].sell_price) ? null : Object(g.jsxs)("div", {
                                                    className: "story-cake-pricing",
                                                    children: [Object(g.jsxs)("label", {
                                                        className: "story-cake-price",
                                                        children: ["\u20b9 ", k.data[C].sell_price]
                                                    }), Object(d.a)(k.data[C].oldPrice) ? null : Object(g.jsxs)("label", {
                                                        className: "story-cake-price-old",
                                                        children: ["\u20b9 ", k.data[C].oldPrice]
                                                    }), Object(d.a)(k.data[C].discount) ? null : Object(g.jsxs)("label", {
                                                        className: "story-cake-discount",
                                                        children: ["( ", k.data[C].discount, " )"]
                                                    })]
                                                })]
                                            }), Object(g.jsx)(me.LazyLoadImage, {
                                                src: je,
                                                className: "closeStory",
                                                onClick: function() {
                                                    return I()
                                                }
                                            })]
                                        }), Object(g.jsx)(de.a, {
                                            stories: k.data,
                                            width: "100vw",
                                            height: "100vh",
                                            defaultInterval: 3e4,
                                            storyStyles: he,
                                            progressStyles: pe,
                                            progressWrapperStyles: Oe,
                                            currentIndex: C,
                                            onStoryStart: function(e, t) {
                                                P(e), Object(ce.u)("video_start", D, "FA stories", k.title)
                                            },
                                            onStoryEnd: function(e, t) {
                                                e < k.data.length - 1 && P(e + 1), Object(ce.u)("video_completed", D, "FA stories", k.title)
                                            },
                                            onAllStoriesEnd: function(e, t) {
                                                return function() {
                                                    var e = k.nid,
                                                        t = m.findIndex((function(t) {
                                                            return t == e
                                                        })),
                                                        a = Object(le.a)(m),
                                                        i = Object(le.a)(r);
                                                    if (-1 == t) {
                                                        a.unshift(e), u(a);
                                                        var c = JSON.stringify(a);
                                                        localStorage.setItem("stories", c);
                                                        var s = i.findIndex((function(t) {
                                                                return t.nid == e
                                                            })),
                                                            n = i.splice(s, 1)[0];
                                                        i.filter((function(t) {
                                                            return t.nid == e
                                                        })), i.push(n), o(i)
                                                    }
                                                    if (r.length > 1) {
                                                        var l = r.findIndex((function(t) {
                                                            return t.nid == e
                                                        }));
                                                        if (l == r.length - 1) I();
                                                        else {
                                                            var d = r[l + 1],
                                                                j = r[l + 1].nid;
                                                            a.includes(j) ? I() : (P(0), T(d))
                                                        }
                                                    } else I()
                                                }()
                                            }
                                        }, C), (R = k.title, Object(g.jsx)("div", {
                                            className: "view-now-container",
                                            children: Object(g.jsxs)("div", {
                                                className: "viewMoreInner",
                                                children: [Object(g.jsx)(me.LazyLoadImage, {
                                                    src: be,
                                                    className: "up-arrowStory",
                                                    alt: "Up Arrow"
                                                }), Object(g.jsx)("a", {
                                                    onClick: function() {
                                                        return Object(ce.s)(D, "View", "FA stories", R, c)
                                                    },
                                                    href: k.data[C].href,
                                                    className: "story-order-now",
                                                    children: "Shop Now"
                                                })]
                                            })
                                        }))]
                                    })
                                })
                            })]
                        })
                    })
                })),
                ve = function(e) {
                    Object(n.a)(a, e);
                    var t = Object(r.a)(a);

                    function a(e) {
                        var s;
                        return Object(c.a)(this, a), (s = t.call(this, e)).renderPage = function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return !Object(d.a)(e) && e.map((function(e, a) {
                                return 8 !== e.card_type ? s.renderComponentsByCardTypes(e, a, s.props.isMobileReq, t, s.props.siteHeaderSettings) : null
                            }))
                        }, s.contentAfterFooter = function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return !Object(d.a)(e) && e.filter((function(e) {
                                return 8 === e.card_type
                            })).map((function(e) {
                                return s.renderComponentsByCardTypes(e, e.card_type, s.props.isMobileReq, t, s.props.siteHeaderSettings)
                            }))
                        }, s._pushToGtm = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                i = s.props.location.pathname;
                            "/" === i[0] && (i = Object(R.a)(i.substring(1)));
                            var c = {
                                action: "".concat(e),
                                label: "".concat(t, " - ").concat(a),
                                category: "".concat(i, " Landing Page - ").concat(Object(A.a)() ? "Mobile" : "Desktop")
                            };
                            Object(G.f)(c), Object(D.d)("PageClickEvent", c), Object(M.b)("landing_page_view", 0)
                        }, s.setProductRefererCookie = function() {
                            I.a.set("product_referer_value", window.location.href, 10, re.f)
                        }, s.renderComponentsByCardTypes = function(e, t, a, c, n) {
                            var r = !(!s.props.categoryProducts || !s.props.categoryProducts.is_city_page || 1 !== +s.props.categoryProducts.is_city_page),
                                l = Object(d.a)(s.props.listing.reviews) ? null : s.props.listing.reviews[0].rating,
                                o = s.props.categoryProducts && s.props.categoryProducts.page_type,
                                j = !1;
                            0 === t && 7 !== e.card_type ? j = !0 : 0 === t && 7 === e.card_type && s.state.showOnlyOneTime ? s.setState({
                                isPreviousSectionHeader: !0,
                                showOnlyOneTime: !1
                            }) : 1 === t && s.state.isPreviousSectionHeader && (j = !0);
                            var v = null,
                                D = null;
                            switch (s.props.categoryProducts && !Object(d.a)(s.props.categoryProducts.valentine) ? v = s.props.categoryProducts && s.props.categoryProducts.valentine : s.props.categoryProducts && !Object(d.a)(s.props.categoryProducts.home_section) && (v = s.props.categoryProducts && s.props.categoryProducts.home_section), Object(d.a)(s.props.categoryProducts) || Object(d.a)(s.props.categoryProducts.new_view_all) || (D = s.props.categoryProducts.new_view_all), e.card_type) {
                                case 1:
                                    return Object(g.jsx)(b.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a,
                                        indexValue: t
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        pathname: s.props.location.pathname,
                                        noLazyLoad: parseInt(t) <= 2,
                                        isShowHeading: j
                                    }), t);
                                case 2:
                                    return Object(g.jsx)(m.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a,
                                        setProductRefererCookie: s.setProductRefererCookie
                                    }, e), {}, {
                                        showEarliestDeliveryDate: c,
                                        pushToGtm: s._pushToGtm,
                                        pageType: o,
                                        siteHeaderSettings: n,
                                        new_view_all_mobile: D,
                                        noLazyLoad: parseInt(t) <= 2
                                    }), t);
                                case 3:
                                    return Object(g.jsx)(u.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a,
                                        indexValue: t
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        mainHeading: !(0 !== t || !r),
                                        noLazyLoad: parseInt(t) <= 2,
                                        valentine: v,
                                        isShowHeading: j
                                    }), t);
                                case 4:
                                    return Object(g.jsx)(h.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a,
                                        indexValue: t
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) <= 2,
                                        pathname: s.props.location.pathname,
                                        isShowHeading: j
                                    }), t);
                                case 5:
                                    return Object(g.jsx)(p.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) <= 2,
                                        pathname: s.props.location.pathname,
                                        valentine: v,
                                        isShowHeading: j
                                    }), t);
                                case 6:
                                    return Object(g.jsx)(O.a, Object(i.a)(Object(i.a)({}, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 7:
                                    return Object(g.jsx)(x.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        title: s.props.categoryProducts.page.title,
                                        preloadFirstImage: 0 === parseInt(t),
                                        location: s.props.location
                                    }), t);
                                case 8:
                                    return Object(g.jsx)(f.a, Object(i.a)({}, e), t);
                                case 9:
                                    return Object(g.jsx)(_.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 10:
                                    return Object(g.jsx)(w.a, Object(i.a)(Object(i.a)({
                                        locationPathName: s.props.location,
                                        isMobileReq: a,
                                        indexValue: t
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) < 2,
                                        isShowHeading: j
                                    }), t);
                                case 11:
                                    return Object(g.jsx)(S.a, Object(i.a)({
                                        isMobileReq: a
                                    }, e), t);
                                case 12:
                                    return Object(g.jsx)(y.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        pathname: s.props.location.pathname
                                    }), t);
                                case 13:
                                    return Object(g.jsx)(k.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) < 2
                                    }), t);
                                case 14:
                                    return Object(g.jsx)(T.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 15:
                                    return Object(g.jsx)(L.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) < 2
                                    }), t);
                                case 16:
                                    return Object(g.jsx)(C.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 17:
                                    return Object(g.jsx)(P.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a,
                                        indexValue: t
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        mainHeading: !(0 !== t || !r),
                                        isShowHeading: j
                                    }), t);
                                case 18:
                                    return Object(g.jsx)(N.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) < 2
                                    }), t);
                                case 19:
                                    return Object(g.jsx)(H.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 20:
                                    return Object(g.jsx)(B.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        reviewRating: l,
                                        isShowHeading: j
                                    }), t);
                                case 21:
                                    return Object(g.jsx)(V.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        pathname: s.props.location.pathname,
                                        isShowHeading: j
                                    }), t);
                                case 22:
                                    return Object(g.jsx)(U.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        siteHeaderSettings: n,
                                        showEarliestDeliveryDate: c
                                    }), t);
                                case 23:
                                    return Object(g.jsx)(Z, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        location: s.props.location
                                    }), t);
                                case 24:
                                    return Object(g.jsx)(Q.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        noLazyLoad: parseInt(t) <= 2
                                    }), t);
                                case 100:
                                    return Object(g.jsx)(W.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm,
                                        isShowHeading: j
                                    }), t);
                                case 101:
                                    return Object(g.jsx)(K.a, Object(i.a)(Object(i.a)({
                                        isMobileReq: a
                                    }, e), {}, {
                                        pushToGtm: s._pushToGtm
                                    }), t);
                                case 102:
                                    return Object(g.jsx)(ne, Object(i.a)({
                                        isMobileReq: a
                                    }, e), t);
                                default:
                                    return null
                            }
                        }, s.handleScriptInject = function(e) {
                            var t = e.scriptTags;
                            t && t[0] && Object(F.a)("landing page")
                        }, s.readMore = function() {
                            s.setState({
                                content: !0
                            })
                        }, s.readLess = function() {
                            s.setState({
                                content: !1
                            }), s.handleScroll()
                        }, s.handleScroll = function() {
                            "app" !== Object(Y.a)("fa-source", s.props.location.search) && document.querySelector(".footer-container-box").scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                                inline: "nearest"
                            })
                        }, s.getMoreFooterText = function(e, t) {
                            if ("app" !== Object(Y.a)("fa-source", s.props.location.search)) return Object(d.a)(e) ? null : Object(g.jsx)("div", {
                                id: s.state.content ? "show-footer-content" : "hide-footer-content",
                                className: "font-fix ".concat(t.replace("/", "")),
                                dangerouslySetInnerHTML: {
                                    __html: e + "".concat(s.state.content ? '<div class="readLess"><span id="readMoreSpan">Read Less</span></div>' : "")
                                }
                            })
                        }, s.state = {
                            content: !1,
                            isPreviousSectionHeader: !1,
                            showOnlyOneTime: !0
                        }, s
                    }
                    return Object(s.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props,
                                t = e.location,
                                a = e.pageData,
                                i = {
                                    pageType: t && "/" === t.pathname ? "HomePage" : "occasionLandingPage",
                                    deviceType: "false" === a.isMobile ? "desktop" : "mobile"
                                },
                                c = {
                                    action: "once per session",
                                    eventCategory: "landing page",
                                    eventLabel: window.location.href
                                };
                            Object(G.d)("page_type", {
                                ecomm_pagetype: i.pageType
                            }), Object(G.d)("set", {
                                content_group: t && "/" === t.pathname ? "home_page" : "landing_page"
                            }), Object(G.f)(i), Object(G.f)(c), Object(D.d)("clickEvent", c)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {}
                    }, {
                        key: "componentWillUnmount",
                        value: function() {}
                    }, {
                        key: "render",
                        value: function() {
                            var e, t = this,
                                a = this.props.categoryProducts,
                                i = a.page,
                                c = i.footer,
                                s = i.title,
                                n = i.sections,
                                r = (i.footer_teaser, i.footer_content),
                                o = i.footerClassName,
                                j = (i.val_img_desk, i.val_img_mob, a.showEarliestDeliveryDate),
                                b = a.page_type,
                                m = this.props.location.pathname,
                                u = (this.state.content, this.props.categoryProducts && this.props.categoryProducts.page_background_color),
                                h = this.props.categoryProducts && this.props.categoryProducts.heading_color,
                                p = this.props.categoryProducts && this.props.categoryProducts.storyVideoJson,
                                O = null,
                                x = (this.getMoreFooterText(r, m), "pd-10");
                            "true" === this.props.isMobileReq && (x = "pd-10 mob-heading", O = Object(d.a)(h) ? "" : h), e = {
                                background: Object(d.a)(u) ? "#edf1f7" : u
                            };
                            var f = "view-content view-landing";
                            return "/" !== m && "/homepage" !== m || "landing_page" !== b || (f = "view-content view-landing newLandingPage"), "/" !== m && "/home-page" !== m && "landing_page" === b && (f = "view-content view-landing valentineLanding fullBannerLanding"), Object(d.a)(this.props.categoryProducts) || "rakhi" !== this.props.categoryProducts.page_theme || (f = "view-content view-landing valentineLanding fullBannerLanding rakhiLanding"), Object(d.a)(this.props.categoryProducts) || "valentine" !== this.props.categoryProducts.page_theme || (f = "view-content view-landing valentineLanding fullBannerLanding valentineNewLanding"), Object(g.jsxs)("div", {
                                className: "app-main-content",
                                children: [this.props.isFlowerauraReferrer ? Object(g.jsx)(z.Helmet, {
                                    onChangeClientState: function(e, a) {
                                        return t.handleScriptInject(a)
                                    },
                                    children: "undefined" !== typeof window && Object(g.jsx)("script", {
                                        id: "_webengage_script_tag",
                                        type: "text/javascript",
                                        children: q.c
                                    })
                                }) : null, "true" === this.props.isMobileReq && "/send-rakhi" !== m && "/send-rakhi/overseas" !== m ? Object(g.jsx)($.a, {
                                    pathname: m,
                                    isMobileReq: this.props.isMobileReq
                                }) : null, Object(g.jsxs)("div", {
                                    style: e,
                                    className: f,
                                    children: ["true" !== this.props.isMobileReq || "/" !== m || Object(d.a)(p) ? null : Object(g.jsx)(ge, {
                                        pageData: this.props.pageData,
                                        storyVideoJson: p
                                    }), "/" === m || "/home-page" === m ? Object(g.jsx)("div", {
                                        className: "pd-11"
                                    }) : Object(g.jsx)(l.Fragment, {
                                        children: Object(d.a)(s) || "rakhi" !== this.props.categoryProducts.page_theme && "valentine" !== this.props.categoryProducts.page_theme ? "" : Object(g.jsx)("div", {
                                            className: x,
                                            children: Object(g.jsx)(v, {
                                                color: O,
                                                title: s
                                            })
                                        })
                                    }), this.renderPage(n, j), "app" === Object(Y.a)("fa-source", this.props.location.search) ? null : Object(g.jsx)(l.Fragment, {
                                        children: !Object(d.a)(c) && Object(g.jsx)("div", {
                                            className: "footer-container-box ".concat(o),
                                            children: Object(g.jsx)("div", {
                                                id: "lesser-footer",
                                                className: "font-fix ".concat(m.replace("/", "")),
                                                dangerouslySetInnerHTML: {
                                                    __html: c
                                                }
                                            })
                                        })
                                    }), this.contentAfterFooter(n, j)]
                                }), Object(g.jsx)(E.a, {
                                    covid19MeasuresFooter: this.props.categoryProducts.covid_19_measures_footer,
                                    isMobileReq: this.props.isMobileReq,
                                    rakhiPromoVideo: this.props.categoryProducts.rakhi_promo_video
                                })]
                            })
                        }
                    }]), a
                }(l.Component),
                xe = Object(j.c)((function(e) {
                    return {
                        location: e.router.location
                    }
                }))(ve),
                fe = a(739),
                _e = a(339),
                we = a(818),
                ye = a(873),
                Ne = (a(882), a(883), a(753)),
                ke = '\n  window.criteo_q = window.criteo_q || [];\n  var deviceType = /iPad/.test(navigator.userAgent) ? "t" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk/.test(navigator.userAgent) ? "m" : "d";\n  window.criteo_q.push(\n      { event: "setAccount", account: '.concat(re.h, ' },\n      { event: "setSiteType", type: deviceType},\n      { event: "setZipcode", zipcode: "##Zip Code##" },\n      { event: "viewHome" }\n  )'),
                Te = function(e) {
                    Object(n.a)(a, e);
                    var t = Object(r.a)(a);

                    function a() {
                        var e;
                        Object(c.a)(this, a);
                        for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++) s[n] = arguments[n];
                        return (e = t.call.apply(t, [this].concat(s))).isChatScriptLoaded = !1, e.state = {
                            isLoader: !1
                        }, e.getCookie = function(e) {
                            for (var t = e + "=", a = decodeURIComponent(document.cookie).split(";"), i = 0; i < a.length; i++) {
                                for (var c = a[i];
                                    " " == c.charAt(0);) c = c.substring(1);
                                if (0 == c.indexOf(t)) return c.substring(t.length, c.length)
                            }
                            return ""
                        }, e.pushToDynamo = function() {
                            var t = new Date,
                                a = (e.getCookie("_fa_uuid"), e.getCookie("fc_cn")),
                                i = {
                                    fa_uuid: {
                                        S: Object(Ne.a)()
                                    },
                                    site_name: {
                                        S: window.location.origin
                                    },
                                    step: {
                                        S: "landing-page-view"
                                    },
                                    url: {
                                        S: window.location.href
                                    },
                                    referered: {
                                        S: window.location.href
                                    },
                                    clicked_from: {
                                        S: "landing_page_view"
                                    },
                                    city: {
                                        S: a
                                    },
                                    date: {
                                        S: t.getFullYear() + "-" + t.getMonth() + "-" + t.getDate()
                                    },
                                    is_mobile: {
                                        BOOL: "true" === e.props.isMobileReq
                                    }
                                };
                            Object(ye.a)(i)
                        }, e
                    }
                    return Object(s.a)(a, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            Object(d.a)(this.props.categoryProducts);
                            var t = window.location.pathname.split("/"); - 1 !== ["gifts"].indexOf(t[1]) ? "plants" === t[1] && t.length > 2 ? 1 === Object(R.d)(t[2]) ? this.props.fetchSiteSettings(null, t[2]) : this.props.fetchSiteSettings() : "for-her" === t[2] || "for-him" === t[2] ? this.props.fetchSiteSettings() : this.props.fetchSiteSettings(null, t[2]) : this.props.fetchSiteSettings();
                            this.pushToDynamo(), this.props.categoryProducts && this.setState({
                                isLoader: !1
                            }), setTimeout((function() {
                                e.props.siteHeaderSettings.selfServiceStatus || Object(we.a)()
                            }), 3e3)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.history && this.props.history.location.pathname,
                                t = e && "/valentine" === e,
                                a = e && "/home-page" === e || "/" === e;
                            return Object(g.jsxs)(o.a.Fragment, {
                                children: [Object(d.a)(this.props.categoryProducts.meta) ? null : Object(g.jsx)(fe.a, {
                                    title: this.props.categoryProducts.meta.title,
                                    description: this.props.categoryProducts.meta.desc,
                                    canonical: this.props.categoryProducts.meta.canonical,
                                    keywords: this.props.categoryProducts.meta.keywords
                                }), t ? Object(g.jsx)(z.Helmet, {
                                    children: "undefined" !== typeof window && "undefined" === typeof myScript && Object(g.jsx)("script", {
                                        id: "valentine_ga_script",
                                        type: "text/javascript",
                                        children: "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n    ga('create', 'UA-18681439-1', 'auto');\n    ga('send', 'pageview');"
                                    })
                                }) : null, a ? Object(g.jsx)(z.Helmet, {
                                    children: "undefined" !== typeof window && "undefined" === typeof myScript && Object(g.jsx)("script", {
                                        id: "criteoHomePage",
                                        type: "text/javascript",
                                        children: ke
                                    })
                                }) : null, Object(d.a)(this.props.categoryProducts) ? Object(g.jsx)(_e.a, {}) : Object(g.jsx)(xe, Object(i.a)({
                                    pushToDynamo: this.pushToDynamo
                                }, this.props)), Object(g.jsx)("div", {
                                    id: "searchModal",
                                    className: "mb-20"
                                })]
                            })
                        }
                    }]), a
                }(l.Component);
            t.default = Te
        },
        744: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return c
            }));
            var i = a(41),
                c = function() {
                    var e = window.location.pathname;
                    return "/" === e[0] && (e = Object(i.a)(e.substring(1))), "/" === window.location.pathname ? "Home Page" : "".concat(e, " Landing Page")
                }
        },
        746: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a(17),
                s = a(0);
            t.a = function(e) {
                return Object(s.jsx)(i.Fragment, {
                    children: Object(s.jsx)("div", {
                        className: e.className,
                        onClick: function() {
                            e.url && c.d.get("/api/floweraura".concat(e.url, "?fa_source=app&metainfo=1&rsource=mob")).then((function(t) {
                                var a = t.data;
                                a && t.data && t.data.data && (t.data.data.page_url = e.url);
                                try {
                                    window && window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(a))
                                } catch (i) {
                                    console.log("something went wrong in reactnativewebview", i)
                                }
                            }))
                        },
                        children: e.children
                    })
                })
            }
        },
        750: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            }));
            var i = function(e, t) {
                var a = e * (void 0 !== t ? t : 1);
                return 1 === t || "1" === t ? a.toFixed(0) : a.toFixed(2)
            }
        },
        753: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var i = a(762),
                c = a.n(i),
                s = a(7),
                n = a(6),
                r = function() {
                    var e = s.a.get("_fa_uuid");
                    if (!e) {
                        n.p;
                        e = c()(), s.a.set("_fa_uuid", e, 365, n.f)
                    }
                    return e
                }
        },
        755: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return i
            })), a.d(t, "a", (function() {
                return c
            })), a.d(t, "c", (function() {
                return s
            }));
            var i = 200,
                c = 400,
                s = ' var webengage; !function(w,e,b,n,g){function o(e,t){e[t[t.length-1]]=function(){r.__queue.push([t.join("."),arguments])}}var i,s,r=w[b],z=" ",l="init options track screen onReady".split(z),a="feedback survey notification".split(z),c="options render clear abort".split(z),p="Open Close Submit Complete View Click".split(z),u="identify login logout setAttribute".split(z);if(!r||!r.__v){for(w[b]=r={__queue:[],__v:"6.0",user:{}},i=0;i<l.length;i++)o(r,[l[i]]);for(i=0;i<a.length;i++){for(r[a[i]]={},s=0;s<c.length;s++)o(r[a[i]],[a[i],c[s]]);for(s=0;s<p.length;s++)o(r[a[i]],[a[i],"on"+p[s]])}for(i=0;i<u.length;i++)o(r.user,["user",u[i]]);setTimeout(function(){var f=e.createElement("script"),d=e.getElementById("_webengage_script_tag");f.type="text/javascript",f.async=!0,f.src=("https:"==e.location.protocol?"https://ssl.widgets.webengage.com":"http://cdn.widgets.webengage.com")+"/js/webengage-min-v-6.0.js",d.parentNode.insertBefore(f,d)})}}(window,document,"webengage");\nwebengage.init(\'d3a4ab04\');\ndataLayer = [ {"webengageCode" : "webengage-main-code-fired", "webenageMainCodeFired": "yes"} ];'
        },
        766: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            }));
            var i = function() {
                var e, t = !1;
                return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0), t
            }
        },
        775: function(e, t, a) {
            "use strict";
            var i = a(1),
                c = a(3),
                s = (a(767), a(817), a(2)),
                n = a(0);
            t.a = function(e) {
                var t = e.alt,
                    a = void 0 === t ? "" : t,
                    r = e.title,
                    l = void 0 === r ? "" : r,
                    o = e.src,
                    d = void 0 === o ? "" : o,
                    j = e.srcset,
                    b = void 0 === j ? "" : j,
                    m = e.noLazyLoad,
                    u = void 0 !== m && m,
                    h = e.itemProp,
                    p = void 0 === h ? null : h,
                    O = {},
                    g = {},
                    v = {},
                    x = {};
                return p && (O = {
                    itemProp: p
                }), u && !Object(s.a)(b) && (g = {
                    srcSet: b
                }, x = {
                    "data-sizes": "auto"
                }), Object(s.a)(b) || (v = {
                    "data-srcset": b
                }), Object(n.jsxs)(c.Fragment, {
                    children: [Object(n.jsx)("span", {
                        children: Object(n.jsx)("img", Object(i.a)(Object(i.a)(Object(i.a)(Object(i.a)({
                            src: u ? d : "https://imgcdn.floweraura.com/images/common/default_image.svg"
                        }, x), {}, {
                            alt: a
                        }, v), g), {}, {
                            title: l,
                            style: {
                                display: "inline",
                                height: "100%",
                                width: "100%"
                            },
                            "data-src": d,
                            className: u ? "nolazyload" : "lazyload"
                        }, O))
                    }), Object(n.jsx)("noscript", {
                        children: Object(n.jsx)("img", {
                            typeof: "foaf:Image",
                            src: e.src,
                            height: e.height || 250,
                            width: e.width || 250,
                            alt: e.alt,
                            title: e.title,
                            style: {
                                display: "inline"
                            }
                        })
                    })]
                })
            }
        },
        781: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return r
            }));
            var i = a(55),
                c = a(6),
                s = a(7),
                n = a(2),
                r = function(e, t, a, r) {
                    var l = [],
                        o = [];
                    Object(n.a)(s.a.get("click_order_source")) || (l = s.a.get("click_order_source")), Object(n.a)(l) || (o = JSON.parse(l));
                    var d = {
                            type: e,
                            url: a,
                            nid: r,
                            item_list_name: t
                        },
                        j = [].concat(Object(i.a)(o), [d]);
                    j.length > 5 && j.shift(), s.a.set("click_order_source", JSON.stringify(j), 1 / 48, c.f)
                }
        },
        782: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            a(7);
            var i = a(753),
                c = a(17),
                s = a(41),
                n = function(e, t, a, n) {
                    var r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                    if (void 0 === n) return !1;
                    var l = {
                            refered: {
                                type: "S",
                                value: t
                            },
                            clicked_from: {
                                type: "S",
                                value: e
                            },
                            referer: {
                                type: "S",
                                value: a
                            },
                            nid: {
                                type: "N",
                                value: n.toString()
                            }
                        },
                        o = {
                            fa_uuid: {
                                S: Object(i.a)()
                            },
                            site_name: {
                                S: window.location.origin
                            },
                            product_source_data: {
                                S: e
                            },
                            url: {
                                S: window.location.href
                            },
                            is_mobile: {
                                BOOL: r
                            }
                        };
                    for (var d in l) {
                        var j = l[d];
                        j.value && (o[d] = {}, o[d][j.type] = j.value)
                    }
                    var b = Object(s.g)(),
                        m = b ? "user-data-v1" : "test-user-data-v1";
                    c.a.post("".concat("https://post-apis.floweraura.com", "/").concat(m, "/user-data"), {
                        userdata: {
                            Item: o
                        },
                        env: b ? "live" : "dev"
                    }, {
                        headers: {
                            "X-API-Key": "kOXd44wIsx7ViR6gYpw046TjhYvSoFtd42Z7TF6N"
                        }
                    }).then((function(e) {
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
                        }).REACT_APP_DEBUG && console.log("User push data api response", e)
                    })).catch((function(e) {
                        console.log("Error", e)
                    }))
                }
        },
        786: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(759),
                c = a.n(i),
                s = a(745),
                n = (a(791), a(2)),
                r = a(738),
                l = a(230),
                o = a(8),
                d = a(14),
                j = a(143),
                b = a(17),
                m = a(12),
                u = a(744),
                h = a(0);
            t.a = function(e) {
                var t = e.items,
                    a = (e.heading, e.sub_heading, e.pushToGtm, e.title, e.location),
                    i = e.cardName,
                    p = e.isMobileReq,
                    O = e.preloadFirstImage,
                    g = void 0 !== O && O,
                    v = e.isInternational,
                    x = 0,
                    f = [],
                    _ = function(e) {
                        return Object(h.jsxs)(h.Fragment, {
                            children: [e.noLazyLoad ? Object(h.jsx)(s.Helmet, {
                                children: Object(h.jsx)("link", {
                                    rel: "preload",
                                    as: "image",
                                    href: e.original,
                                    imagesrcset: "true" == p ? Object(l.a)(e.original, 323) : Object(l.a)(e.original, 1583)
                                })
                            }) : null, Object(h.jsx)(r.a, {
                                alt: e.originalAlt,
                                title: e.originalTitle,
                                src: e.original,
                                srcset: "true" == p ? Object(l.a)(e.original, 323) : Object(l.a)(e.original, 1583),
                                noLazyLoad: e.noLazyLoad,
                                id: "MainPageBanner-" + e.imageIndex
                            })]
                        })
                    };
                Object(n.a)(t) || (f = Object.keys(t).map((function(e) {
                    return {
                        original: "true" === p ? t[e].img : "".concat(t[e].img),
                        originalAlt: "true" === p ? t[e].img_alt_mobile : "".concat(t[e].img_alt),
                        originalTitle: "true" === p ? t[e].img_title_mobile : "".concat(t[e].img_title),
                        originalClass: "eachslide_banner",
                        noLazyLoad: !(!g || 0 !== parseInt(e)),
                        imageIndex: String(e),
                        renderItem: _
                    }
                })));
                var w = function(e, t) {
                        var a = {
                            action: window.location.href + " - banner",
                            eventCategory: "Landing Page - ".concat(t),
                            eventLabel: e
                        };
                        Object(o.f)(a), Object(d.d)("clickEvent", a)
                    },
                    y = function(e, i) {
                        if (!Object(n.a)(t[x].url) && "app" === Object(j.a)("fa-source", a.search)) return b.d.get("/api/floweraura".concat(t[x].url, "?fa_source=app&metainfo=1&rsource=mob")).then((function(e) {
                            var a = e.data;
                            a && e.data && e.data.data && (e.data.data.page_url = t[x].url);
                            try {
                                window && window.ReactNativeWebView && window.ReactNativeWebView.postMessage(JSON.stringify(a))
                            } catch (i) {
                                console.log("something went wrong in reactnativewebview", i)
                            }
                        })), !1;
                        Object(m.d)(Object(u.a)(), "Banner", t[x].title, t[x].url, a.pathname), Object(n.a)(t[x].url) || ("desktop" === i ? (window.open(t[x].url), w(t[x].url, "desktop")) : (window.location = t[x].url, w(t[x].url, "mobile")))
                    },
                    N = function(e) {
                        x = e
                    },
                    k = Object(n.a)(t) || Object(n.a)(t[x].url) ? "" : "cursorShow",
                    T = v ? "prod-category int-category" : "prod-category";
                return Object(h.jsxs)("div", {
                    className: "".concat(T, " ").concat(i),
                    children: ["true" === p ? Object(h.jsx)("div", {
                        className: "slide-container",
                        children: Object(n.a)(f) ? null : Object(h.jsx)(c.a, {
                            onClick: function(e) {
                                return y()
                            },
                            items: f,
                            showFullscreenButton: !1,
                            showPlayButton: !1,
                            showIndex: !1,
                            slideOnThumbnailOver: !0,
                            showThumbnails: !1,
                            showBullets: f.length > 1,
                            showNav: !1,
                            autoPlay: !0,
                            slideInterval: 9e3,
                            onSlide: function(e) {
                                return N(e)
                            }
                        })
                    }) : null, "false" === p ? Object(h.jsx)("div", {
                        className: "slide-container slide-container-desktop ".concat(k),
                        children: Object(n.a)(f) ? null : Object(h.jsx)(c.a, {
                            onClick: function(e) {
                                return y(0, "desktop")
                            },
                            items: f,
                            showFullscreenButton: !1,
                            showPlayButton: !1,
                            showIndex: !1,
                            slideOnThumbnailOver: !0,
                            showThumbnails: !1,
                            showBullets: f.length > 1,
                            showNav: "/" !== a.pathname,
                            autoPlay: !0,
                            slideInterval: 9e3,
                            onSlide: function(e) {
                                return N(e)
                            }
                        })
                    }) : null]
                })
            }
        },
        791: function(e, t, a) {},
        795: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            })), a.d(t, "b", (function() {
                return c
            })), a.d(t, "c", (function() {
                return s
            }));
            var i = function(e) {
                    return {
                        eventAction: "Shown",
                        eventCategory: "Category Screen",
                        eventLabel: e
                    }
                },
                c = function(e, t) {
                    return {
                        eventAction: e,
                        eventCategory: "Category Screen",
                        eventLabel: t
                    }
                },
                s = function(e) {
                    return {
                        dataLayer: {
                            event: e
                        },
                        dataLayerName: "dataLayer"
                    }
                }
        },
        797: function(e, t, a) {
            "use strict";
            var i = a(25),
                c = a(26),
                s = a(34),
                n = a(35),
                r = a(3),
                l = a(30),
                o = a(7),
                d = a(2),
                j = a(6),
                b = a(0),
                m = function(e) {
                    Object(s.a)(a, e);
                    var t = Object(n.a)(a);

                    function a(e) {
                        var c;
                        return Object(i.a)(this, a), (c = t.call(this, e))._calcluatePreparationTime = function() {
                            var e = c.props.productInformation,
                                t = c.props.serverDateTime;
                            if (!Object(d.a)(e) && !Object(d.a)(+t.hour)) {
                                var a = Object(d.a)(e.end_time) ? 0 : +e.end_time,
                                    i = Object(d.a)(e.preparation_time) ? 0 : +e.preparation_time,
                                    s = +t.hour,
                                    n = c.props.earliestDeliveryDate;
                                if (0 === a && i > 0 && (a = n), a > 0) return s + i < a ? c.state.availableDates[c.state.dates.TODAY] : c.state.availableDates[c.state.dates.TOMORROW]
                            }
                            return null
                        }, c._earliestDeliveryDayForCourierCity = function(e) {
                            var t = "";
                            return Object(d.a)(e) || (t = e.toLowerCase()), "gurgaon" === t ? 7 === +c.props.serverDateTime.day ? c.state.availableDates[c.state.dates.TOMORROW] : 6 === +c.props.serverDateTime.day ? +c.props.serverDateTime.hour >= j.g ? c.state.availableDates[c.state.dates.TWO_THREE_DAYS] : c.state.availableDates[c.state.dates.TWO_DAYS] : +c.props.serverDateTime.hour >= j.g ? c.state.availableDates[c.state.dates.TOMORROW] : c.state.availableDates[c.state.dates.TODAY] : "delhi" === t || "noida" === t ? 6 === +c.props.serverDateTime.day || 7 === +c.props.serverDateTime.day ? c.state.availableDates[c.state.dates.TWO_THREE_DAYS] : +c.props.serverDateTime.hour >= j.g ? c.state.availableDates[c.state.dates.TWO_DAYS] : c.state.availableDates[c.state.dates.TOMORROW] : ""
                        }, c._earliestDeliveryDay = function(e) {
                            if ("digital" === String(e.delivery_medium).toLowerCase()) return +c.props.serverDateTime.hour >= +c.props.earliestDeliveryDate ? c.state.availableDates[c.state.dates.TOMORROW] : e.gift_types.length > 0 && -1 !== e.gift_types.indexOf("Celebrity") ? c.state.availableDates[c.state.dates.TWO_THREE_DAYS] : c.state.availableDates[c.state.dates.TODAY];
                            var t = c._calcluatePreparationTime();
                            if (null !== t) return t;
                            var a = o.a.get("user_select_city"),
                                i = e.type.toLowerCase();
                            switch (e.deliveryThrough || (e.deliveryThrough = e.through), i) {
                                case "combo":
                                case "cake":
                                case "flower":
                                    return +c.props.serverDateTime.hour >= +c.props.earliestDeliveryDate ? c.state.availableDates[c.state.dates.TOMORROW] : c.state.availableDates[c.state.dates.TODAY];
                                case "rakhi":
                                case "gift":
                                    if (1 === +e.thirdPartyVendor) return c.state.availableDates[c.state.dates.THREE_FIVE_DAYS];
                                    if (!Object(d.a)(e.deliveryThrough) && "vendor" === e.deliveryThrough.toLowerCase()) return c.props.serverDateTime.hour < c.props.earliestDateEndTimingGiftVendor ? c.state.availableDates[c.state.dates.TODAY] : c.state.availableDates[c.state.dates.TOMORROW];
                                    var s = c._earliestDeliveryDayForCourierCity(a);
                                    return "" !== s ? s : c.state.availableDates[c.state.dates.TWO_THREE_DAYS];
                                case "plant":
                                    if (void 0 !== e.deliveryThrough) {
                                        if ("vendor" === e.deliveryThrough.toLowerCase()) return +c.props.serverDateTime.hour >= c.props.plantEarliestDeliveryDate ? c.state.availableDates[c.state.dates.TOMORROW] : c.state.availableDates[c.state.dates.TODAY];
                                        var n = c._earliestDeliveryDayForCourierCity(a);
                                        return "" !== n ? n : c.state.availableDates[c.state.dates.TWO_THREE_DAYS]
                                    }
                                    return c.state.availableDates[c.state.dates.TODAY]
                            }
                        }, c.state = {
                            earliestDelivery: c.props,
                            dates: {
                                TODAY: 1,
                                TOMORROW: 2,
                                TWO_DAYS: 3,
                                TWO_THREE_DAYS: 4,
                                THREE_FIVE_DAYS: 5
                            },
                            availableDates: {
                                1: "Today",
                                2: "Tomorrow",
                                3: "2 days",
                                4: "2-3 days",
                                5: "3-5 days"
                            }
                        }, c
                    }
                    return Object(c.a)(a, [{
                        key: "render",
                        value: function() {
                            return Object(b.jsx)(r.Fragment, {
                                children: this._earliestDeliveryDay(this.props.productInformation)
                            })
                        }
                    }]), a
                }(r.Component);
            t.a = Object(l.c)((function(e) {
                return {
                    serverDateTime: e.settings.serverDateTime,
                    earliestDeliveryDate: e.settings.earliestDeliveryDate,
                    plantEarliestDeliveryDate: e.settings.plantEarliestDeliveryDate,
                    earliestDateEndTimingSingleSlot: e.settings.earliestDateEndTimingSingleSlot,
                    earliestDateEndTimingGiftVendor: e.settings.earliestDateEndTimingGiftVendor
                }
            }))(m)
        },
        798: function(e, t, a) {},
        816: function(e, t, a) {},
        818: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var i = a(360),
                c = a.n(i),
                s = a(795),
                n = function() {
                    var e = document.createElement("script");
                    e.src = "https://v2.zopim.com/?nvLg3R67lSfcex2Q8qdPuX3iXNPftMdE", e.async = !0, document.body.appendChild(e),
                        function() {
                            var e = "optimize.activate";
                            c.a.dataLayer(Object(s.c)(e))
                        }()
                }
        },
        831: function(e, t, a) {
            "use strict";
            var i = a(31),
                c = a(3),
                s = a(30),
                n = (a(743), a(878), a(355), a(738)),
                r = a(230),
                l = a(2),
                o = a(143),
                d = a(746),
                j = a(12),
                b = a(744),
                m = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.items,
                    a = e.heading,
                    s = e.sub_heading,
                    u = e.pushToGtm,
                    h = e.isMobileReq,
                    p = (e.indexValue, e.pathname, e.cardName),
                    O = e.class_name,
                    g = e.is_shadow,
                    v = e.background_color,
                    x = (e.isShowHeading, e.bgClass),
                    f = void 0 !== x && x,
                    _ = e.noLazyLoad,
                    w = void 0 !== _ && _,
                    y = e.location,
                    N = e.showTopLine,
                    k = e.showTopSpace,
                    T = e.showMobTopLine,
                    L = e.showMobTopSpace,
                    S = Object(c.useState)(!1),
                    C = Object(i.a)(S, 2),
                    P = C[0],
                    D = C[1],
                    R = g ? "shadowActive" : "shadowNo",
                    I = "",
                    A = "";
                "true" === h ? (I = 1 === T ? "show-top-line-mob" : "", A = 1 === L ? "show-top-space-mob" : "") : (I = 1 === N ? "show-top-line-desk" : "", A = 1 === k ? "show-top-space-desk" : "");
                var M = "";
                Object(l.a)(v) || (M = "showBackground");
                var E = a.replace(/<[^>]+>/g, ""),
                    G = "true" === h ? "rakhi-sets" : "send-rakhi-abroad";
                return "app" === Object(o.a)("fa-source", y.search) ? Object(m.jsx)("div", {
                    id: "send-rakhi-abroad",
                    style: {
                        background: v
                    },
                    className: "occasion-container-box ".concat(R, " ").concat(p),
                    children: Object(m.jsx)("div", {
                        className: "occasion-container flowers-landing ".concat(null !== O ? O : ""),
                        children: Object(m.jsxs)("div", {
                            className: "slideupdown-category birthday-gifts ".concat(M, " ").concat(f ? "bg-gray-landing" : ""),
                            children: [Object(m.jsx)("div", {
                                className: "heading",
                                dangerouslySetInnerHTML: {
                                    __html: a
                                }
                            }), Object(m.jsx)("p", {
                                className: "sub-heading",
                                children: s
                            }), Object(m.jsx)("ul", {
                                className: "slideupdown" + (!0 === P ? " active" : ""),
                                children: t.map((function(e, t) {
                                    return Object(m.jsx)("li", {
                                        className: t > 7 && !0 === P ? "fadeOut" : "fadeIn",
                                        children: Object(m.jsxs)(d.a, {
                                            url: e.url,
                                            className: "appFiveLanding",
                                            children: [Object(m.jsx)(n.a, {
                                                src: "".concat(e.img, "?tr=h-69,w-69"),
                                                srcset: e.img,
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title,
                                                noLazyLoad: w || !1
                                            }), Object(m.jsx)("span", {
                                                className: "catgorySpanName",
                                                children: e.title
                                            })]
                                        }, t)
                                    })
                                }))
                            }), t.length > 8 && Object(m.jsx)("div", {
                                className: "".concat(P ? "v_sap_arraw" : "v_sap_arraw active"),
                                onClick: function() {
                                    return D(!P)
                                }
                            })]
                        })
                    })
                }) : Object(m.jsx)(c.Fragment, {
                    children: !Object(l.a)(t) && t.length > 0 && Object(m.jsx)("div", {
                        id: G,
                        style: {
                            background: v
                        },
                        className: "occasion-container-box ".concat(R, " ").concat(p),
                        children: Object(m.jsx)("div", {
                            className: "occasion-container flowers-landing ".concat(null !== O ? O : "", " ").concat(I, " ").concat(A),
                            children: Object(m.jsxs)("div", {
                                className: "slideupdown-category birthday-gifts ".concat(M, " ").concat(f ? "bg-gray-landing" : ""),
                                children: [Object(l.a)(s) ? Object(m.jsx)("div", {
                                    className: "heading",
                                    dangerouslySetInnerHTML: {
                                        __html: a
                                    }
                                }) : Object(m.jsx)("div", {
                                    className: "heading manage_space",
                                    dangerouslySetInnerHTML: {
                                        __html: a
                                    }
                                }), Object(m.jsx)("p", {
                                    className: "sub-heading",
                                    children: s
                                }), "app" === Object(o.a)("fa-source", y.search) ? Object(m.jsx)("ul", {
                                    className: "slideupdown" + (!0 === P ? " active" : ""),
                                    children: t.map((function(e, t) {
                                        return Object(m.jsx)(d.a, {
                                            url: e.url,
                                            children: Object(m.jsxs)("li", {
                                                className: t > 7 && !0 === P ? "fadeOut" : "fadeIn",
                                                children: [Object(m.jsx)(n.a, {
                                                    src: "".concat(e.img, "?tr=h-69,w-69"),
                                                    srcset: Object(r.a)(e.img, 69),
                                                    alt: e.img_alt_mobile || e.title,
                                                    title: e.img_title_mobile || e.title,
                                                    noLazyLoad: w || !1
                                                }), Object(m.jsx)("span", {
                                                    className: "catgorySpanName",
                                                    children: e.title
                                                })]
                                            }, t)
                                        })
                                    }))
                                }) : null, "true" === h ? Object(m.jsx)("ul", {
                                    className: "slideupdown" + (!0 === P ? " active" : ""),
                                    children: t.map((function(e, t) {
                                        return Object(m.jsx)("li", {
                                            className: t > 7 && !0 === P ? "fadeOut" : "fadeIn",
                                            children: Object(m.jsxs)("a", {
                                                href: e.url,
                                                onClick: function() {
                                                    u(a, e.title, e.url), Object(j.d)(Object(b.a)(), E, e.title, e.url, y.pathname)
                                                },
                                                children: [Object(m.jsx)(n.a, {
                                                    src: "".concat(e.img),
                                                    srcset: e.img,
                                                    alt: e.img_alt_mobile || e.title,
                                                    title: e.img_title_mobile || e.title,
                                                    noLazyLoad: w || !1
                                                }), Object(m.jsx)("span", {
                                                    className: "catgorySpanName",
                                                    children: e.title
                                                })]
                                            })
                                        }, t)
                                    }))
                                }) : null, "true" === h ? t.length > 8 && Object(m.jsx)("div", {
                                    className: "".concat(P ? "v_sap_arraw" : "v_sap_arraw active"),
                                    onClick: function() {
                                        return D(!P)
                                    }
                                }) : null, "false" !== h || Object(m.jsx)("ul", {
                                    className: "slideupdown" + (!0 === P ? " active" : ""),
                                    children: t.map((function(e, t) {
                                        return Object(m.jsx)("li", {
                                            className: "".concat(t > 5 ? "fadeIn removeBtMrgn" : "fadeIn addBtMrgn"),
                                            children: Object(m.jsxs)("a", {
                                                href: e.url,
                                                onClick: function() {
                                                    u(a, e.title, e.url), Object(j.d)(Object(b.a)(), E, e.title, e.url, y.pathname)
                                                },
                                                children: [Object(m.jsx)(n.a, {
                                                    src: "".concat(e.img, "?tr=h-164,w-164"),
                                                    srcset: e.img,
                                                    alt: e.img_alt_mobile || e.title,
                                                    title: e.img_title_mobile || e.title
                                                }), Object(m.jsx)("span", {
                                                    className: "catgorySpanName",
                                                    children: e.title
                                                })]
                                            })
                                        }, t)
                                    }))
                                })]
                            })
                        })
                    })
                })
            }))
        },
        832: function(e, t, a) {
            "use strict";
            var i = a(55),
                c = a(3),
                s = a.n(c),
                n = a(30),
                r = (a(743), a(230)),
                l = (a(880), a(749)),
                o = a.n(l),
                d = (a(748), a(355), a(738)),
                j = a(2),
                b = a(143),
                m = a(746),
                u = a(12),
                h = a(744),
                p = a(0),
                O = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(n.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.sub_heading,
                    c = e.items,
                    n = e.pushToGtm,
                    l = e.isMobileReq,
                    g = (e.indexValue, e.class_name),
                    v = e.showTabs,
                    x = e.is_shadow,
                    f = e.background_color,
                    _ = e.cardName,
                    w = e.valentine,
                    y = (e.val_img_desk, e.isShowHeading, e.mainHeading, e.noLazyLoad),
                    N = void 0 !== y && y,
                    k = e.location,
                    T = e.showTopLine,
                    L = e.showTopSpace,
                    S = e.showMobTopLine,
                    C = e.showMobTopSpace,
                    P = x ? "shadowActive" : "shadowNo",
                    D = "",
                    R = "";
                !Object(j.a)(w) && w.bg_color && (D = w.bg_color), Object(j.a)(v) || "3" !== v || (R = "showthreeProduct");
                var I = "",
                    A = "";
                "true" === l ? (I = 1 === S ? "show-top-line-mob" : "", A = 1 === C ? "show-top-space-mob" : "") : (I = 1 === T ? "show-top-line-desk" : "", A = 1 === L ? "show-top-space-desk" : "");
                var M = t.replace(/<[^>]+>/g, ""),
                    E = "true" === l ? "send-rakhi-abroad" : "rakhi-sets";
                if ("app" === Object(b.a)("fa-source", k.search)) return Object(p.jsx)(s.a.Fragment, {
                    children: !Object(j.a)(c) && Object(p.jsxs)("div", {
                        id: "rakhi-sets",
                        style: {
                            background: f
                        },
                        className: "occasion-container-box paddingBt1 ".concat(P, "  ").concat(_),
                        children: [" ", Object(p.jsxs)("div", {
                            className: "prod-category gifts-category ".concat(g),
                            children: [Object(p.jsx)("div", {
                                className: "heading",
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            }), Object(p.jsx)("p", {
                                className: "sub-heading",
                                children: a
                            }), Object(p.jsx)("ul", {
                                className: "slider1 ".concat(R),
                                children: c.length > 0 && c.map((function(e, t) {
                                    return Object(p.jsx)("li", {
                                        children: Object(p.jsxs)(m.a, {
                                            url: e.url,
                                            className: "app-height",
                                            children: [Object(p.jsx)(d.a, {
                                                src: "".concat(e.img, "?tr=h-81,w-81"),
                                                srcset: Object(r.a)(e.img, 81, 81),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title
                                            }), Object(p.jsx)("span", {
                                                className: "showTitle",
                                                children: e.title
                                            })]
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                });
                var G = Object(i.a)(c);
                return "/valentine" !== k.pathname && "/" !== k.pathname || Object(j.a)(w) || G.splice(4, 0, "newData", "newData1"), Object(p.jsx)(s.a.Fragment, {
                    children: !Object(j.a)(G) && Object(p.jsxs)("div", {
                        id: E,
                        style: {
                            background: f
                        },
                        className: "occasion-container-box paddingBt1 ".concat(P, " ").concat(_),
                        children: [" ", Object(p.jsxs)("div", {
                            style: {
                                backgroundColor: D
                            },
                            className: "prod-category gifts-category ".concat(g, " ").concat(I, " ").concat(A),
                            children: ["/" === k.pathname && !Object(j.a)(w) && !Object(j.a)(w.left_mob) && Object(p.jsxs)(p.Fragment, {
                                children: [Object(p.jsx)("img", {
                                    className: "landing_left_image",
                                    src: "true" === l ? w.left_mob : w.left_desktop,
                                    alt: ""
                                }), Object(p.jsx)("img", {
                                    className: "landing_right_image",
                                    src: "true" === l ? w.right_mob : w.right_desktop,
                                    alt: ""
                                })]
                            }), Object(p.jsx)("div", {
                                className: "heading",
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            }), Object(j.a)(a) ? Object(p.jsx)("p", {
                                className: "sub-heading",
                                children: a
                            }) : Object(p.jsx)("p", {
                                className: "sub-heading manage_space",
                                children: a
                            }), "false" === l ? Object(p.jsx)(o.a, {
                                responsive: O,
                                ssr: !0,
                                deviceType: "desktop",
                                containerClass: "slider1 sliderDesktop",
                                children: G.length > 0 && G.map((function(e, a) {
                                    return 4 !== a || "/valentine" !== k.pathname && "/" !== k.pathname || Object(j.a)(w) || Object(j.a)(w.card_one) ? 5 !== a || "/valentine" !== k.pathname && "/" !== k.pathname || Object(j.a)(w) || Object(j.a)(w.card_two) ? Object(p.jsxs)("a", {
                                        href: e.url,
                                        target: "_self",
                                        onClick: function() {
                                            n(t, e.title, e.url), Object(u.d)(Object(h.a)(), M, e.title, e.url, k.pathname)
                                        },
                                        children: [Object(p.jsx)(d.a, {
                                            src: "".concat(e.img),
                                            srcset: Object(r.a)(e.img, 300, 300),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: N || !1
                                        }), Object(p.jsx)("span", {
                                            className: "showTitle",
                                            children: e.title
                                        })]
                                    }, a) : Object(p.jsx)("div", {
                                        className: "weekPlanInner",
                                        children: Object(p.jsxs)("a", {
                                            href: w.card_two.url,
                                            onClick: function() {
                                                n(w.card_two.title, w.card_two.title, w.card_two.url), Object(u.d)(Object(h.a)(), M, w.card_two.title, w.card_two.url, k.pathname)
                                            },
                                            children: [Object(p.jsx)(d.a, {
                                                src: w.card_two.img_desk,
                                                srcset: w.card_two.img_desk,
                                                alt: w.card_two.img_title,
                                                title: w.card_two.img_title,
                                                height: 150,
                                                width: 150
                                            }), Object(p.jsx)("span", {
                                                className: "showTitle extraCardTitle",
                                                children: w.card_two.title
                                            })]
                                        })
                                    }) : Object(p.jsx)("div", {
                                        className: "weekPlanInner",
                                        children: Object(p.jsxs)("a", {
                                            href: w.card_one.url,
                                            onClick: function() {
                                                n(w.card_one.title, w.card_one.title, w.card_one.url), Object(u.d)(Object(h.a)(), M, w.card_one.title, w.card_one.url, k.pathname)
                                            },
                                            children: [Object(p.jsx)(d.a, {
                                                src: w.card_one.img_desk,
                                                srcset: w.card_one.img_desk,
                                                alt: w.card_one.img_title,
                                                title: w.card_one.img_title,
                                                height: 150,
                                                width: 150
                                            }), Object(p.jsx)("span", {
                                                className: "showTitle extraCardTitle",
                                                children: w.card_one.title
                                            })]
                                        })
                                    })
                                }))
                            }) : null, "true" === l ? Object(p.jsx)("ul", {
                                className: "slider1 ".concat(R),
                                children: c.length > 0 && c.map((function(e, a) {
                                    return Object(p.jsx)("li", {
                                        children: Object(p.jsxs)("a", {
                                            href: e.url,
                                            target: "_self",
                                            onClick: function() {
                                                n(t, e.title, e.url), Object(u.d)(Object(h.a)(), M, e.title, e.url, k.pathname)
                                            },
                                            children: [Object(p.jsx)(d.a, {
                                                src: "".concat(e.img, "?tr=h-81,w-81"),
                                                srcset: Object(r.a)(e.img, 81, 81),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title
                                            }), Object(p.jsx)("span", {
                                                className: "showTitle",
                                                children: e.title
                                            })]
                                        })
                                    }, a)
                                }))
                            }) : null]
                        }), " "]
                    })
                })
            }))
        },
        833: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = (a(743), a(881), a(2)),
                r = a(738),
                l = a(230),
                o = (a(355), a(749)),
                d = a.n(o),
                j = (a(748), a(143)),
                b = a(746),
                m = a(12),
                u = a(744),
                h = a(0),
                p = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.sub_heading,
                    i = e.items,
                    s = e.pushToGtm,
                    o = e.isMobileReq,
                    O = (e.indexValue, e.is_shadow),
                    g = e.background_color,
                    v = e.pathname,
                    x = e.cardName,
                    f = (e.isShowHeading, e.bgClass),
                    _ = void 0 !== f && f,
                    w = e.noLazyLoad,
                    y = void 0 !== w && w,
                    N = e.location,
                    k = e.showTopLine,
                    T = e.showTopSpace,
                    L = e.showMobTopLine,
                    S = e.showMobTopSpace,
                    C = O ? "shadowActive" : "shadowNo";
                var P = "",
                    D = "";
                "true" === o ? (P = 1 === L ? "show-top-line-mob" : "", D = 1 === S ? "show-top-space-mob" : "") : (P = 1 === k ? "show-top-line-desk" : "", D = 1 === T ? "show-top-space-desk" : "");
                var R = t.replace(/<[^>]+>/g, "");
                return i && i.length > 0 && "app" === Object(j.a)("fa-source", N.search) ? Object(h.jsxs)("div", {
                    style: {
                        background: g
                    },
                    className: "occasion-container-box slideupDownParent paddingBt2 ".concat(x, " ").concat(C),
                    children: [" ", Object(h.jsxs)("div", {
                        className: "slideupdown-category2 more-occasion ".concat(_ ? "bg-gray-landing" : ""),
                        children: [Object(h.jsx)("div", {
                            className: "heading",
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }), Object(h.jsx)("p", {
                            className: "sub-heading",
                            children: a
                        }), Object(h.jsx)("ul", {
                            className: "slideupdown2",
                            children: i.length > 0 && i.map((function(e, t) {
                                return Object(h.jsx)("li", {
                                    children: Object(h.jsxs)(b.a, {
                                        url: e.url,
                                        className: "appBellLanding",
                                        children: [Object(h.jsx)(r.a, {
                                            src: "".concat(e.img, "?tr=h-96,w-96"),
                                            srcset: Object(l.a)(e.img, 96),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: y
                                        }), Object(h.jsx)("span", {
                                            className: "giftsellername",
                                            children: e.title
                                        })]
                                    })
                                }, t)
                            }))
                        })]
                    })]
                }) : Object(h.jsx)(c.a.Fragment, {
                    children: !Object(n.a)(i) && Object(h.jsxs)("div", {
                        className: "occasion-container-box slideupDownParent paddingBt2 ".concat(x, " ").concat(C),
                        children: [" ", Object(h.jsxs)("div", {
                            style: {
                                background: g
                            },
                            className: "slideupdown-category2 more-occasion ".concat(_ ? "bg-gray-landing" : "", " ").concat(P, " ").concat(D),
                            children: [Object(h.jsx)("div", {
                                className: "heading",
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            }), Object(h.jsx)("p", {
                                className: "sub-heading",
                                children: a
                            }), "true" === o ? Object(h.jsx)("ul", {
                                className: "slideupdown2",
                                children: i.length > 0 && i.map((function(e, a) {
                                    return Object(h.jsx)("li", {
                                        children: Object(h.jsxs)("a", {
                                            href: e.url,
                                            target: "_self",
                                            onClick: function() {
                                                s(t, e.title, e.url), Object(m.d)(Object(u.a)(), R, e.title, e.url, N.pathname)
                                            },
                                            children: [Object(h.jsx)(r.a, {
                                                src: e.img,
                                                srcset: Object(l.a)(e.img),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title,
                                                noLazyLoad: y
                                            }), Object(h.jsx)("span", {
                                                className: "giftsellername",
                                                children: e.title
                                            })]
                                        })
                                    }, a)
                                }))
                            }) : null, "false" === o ? Object(h.jsx)(d.a, {
                                responsive: p,
                                ssr: !0,
                                deviceType: "desktop",
                                itemClass: "productslider-item",
                                containerClass: "content-slider content-slider-desktop",
                                children: i.length > 0 && i.map((function(e, a) {
                                    return Object(h.jsxs)("a", {
                                        href: e.url,
                                        target: "_self",
                                        onClick: function() {
                                            s(t, e.title, e.url), Object(m.d)(Object(u.a)(), R, e.title, e.url, N.pathname)
                                        },
                                        children: [Object(h.jsx)(r.a, {
                                            src: "".concat(e.img, "?tr=h-298,w-298"),
                                            srcset: Object(l.a)(e.img, 298, 298),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: y
                                        }), Object(h.jsx)("span", {
                                            className: "giftname",
                                            children: e.title
                                        })]
                                    }, a)
                                }))
                            }) : null]
                        }), " "]
                    })
                })
            }))
        },
        834: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = (a(743), a(230)),
                r = a(749),
                l = a.n(r),
                o = (a(748), a(355), a(738)),
                d = a(2),
                j = a(143),
                b = a(746),
                m = a(12),
                u = a(744),
                h = a(0),
                p = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.sub_heading,
                    i = e.items,
                    s = e.pushToGtm,
                    r = e.isMobileReq,
                    O = e.is_shadow,
                    g = e.background_color,
                    v = e.valentine,
                    x = (e.isShowHeading, e.noLazyLoad),
                    f = void 0 !== x && x,
                    _ = e.location,
                    w = O ? "shadowActive" : "shadowNo",
                    y = "";
                !Object(d.a)(v) && v.bg_color && (y = v.bg_color);
                var N = t.replace(/<[^>]+>/g, "");
                return "app" === Object(j.a)("fa-source", _.search) ? Object(h.jsx)("div", {
                    style: {
                        background: g
                    },
                    className: "occasion-container-box prod-category2 anniversary-gifts ".concat(w),
                    children: Object(h.jsxs)("div", {
                        className: "prod-category2-inner",
                        children: [Object(h.jsx)("div", {
                            className: "heading",
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        }), Object(h.jsx)("p", {
                            className: "sub-heading",
                            children: a
                        }), Object(h.jsx)("ul", {
                            className: "slider2",
                            children: i.length > 0 && i.map((function(e, t) {
                                return Object(h.jsxs)(h.Fragment, {
                                    children: [Object(h.jsx)("li", {
                                        children: Object(h.jsxs)(b.a, {
                                            url: e.url,
                                            children: [Object(h.jsx)(o.a, {
                                                src: "".concat(e.img, "?tr=h-170,w-170"),
                                                srcset: Object(n.a)(e.img, 170, 170),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title,
                                                noLazyLoad: f || !1
                                            }), Object(h.jsx)("span", {
                                                className: "rowImgTitle",
                                                children: e.title
                                            })]
                                        })
                                    }, t), 3 === t && "/valentine" === _.pathname && !Object(d.a)(v.card_one) && Object(h.jsx)("li", {
                                        children: Object(h.jsx)("div", {
                                            className: "weekPlanInner",
                                            children: Object(h.jsxs)(b.a, {
                                                url: v.card_one.url,
                                                children: [Object(h.jsx)(o.a, {
                                                    src: v.card_one.img_mob,
                                                    alt: v.card_one.title,
                                                    title: v.card_one.title,
                                                    height: 150,
                                                    width: 150
                                                }), Object(h.jsx)("span", {
                                                    className: "rowImgTitle extraCardTitle",
                                                    children: v.card_one.title
                                                })]
                                            })
                                        })
                                    }), 7 === t && "/valentine" === _.pathname && !Object(d.a)(v.card_two) && Object(h.jsx)("li", {
                                        children: Object(h.jsx)("div", {
                                            className: "weekPlanInner",
                                            children: Object(h.jsxs)(b.a, {
                                                url: v.card_two.url,
                                                children: [Object(h.jsx)(o.a, {
                                                    src: v.card_two.img_mob,
                                                    alt: v.card_two.title,
                                                    title: v.card_two.title,
                                                    height: 150,
                                                    width: 150
                                                }), Object(h.jsx)("span", {
                                                    className: "rowImgTitle extraCardTitle",
                                                    children: v.card_two.title
                                                })]
                                            })
                                        })
                                    })]
                                })
                            }))
                        })]
                    })
                }) : Object(h.jsx)(c.a.Fragment, {
                    children: !Object(d.a)(i) && Object(h.jsxs)("div", {
                        style: {
                            background: g || y
                        },
                        className: "occasion-container-box prod-category2 anniversary-gifts ".concat(w),
                        children: ["/" === _.pathname && !Object(d.a)(v) && !Object(d.a)(v.left_mob) && Object(h.jsxs)(h.Fragment, {
                            children: [Object(h.jsx)("img", {
                                className: "landing_left_image",
                                src: "true" === r ? v.left_mob : v.left_desktop,
                                alt: ""
                            }), Object(h.jsx)("img", {
                                className: "landing_right_image",
                                src: "true" === r ? v.right_mob : v.right_desktop,
                                alt: ""
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "prod-category2-inner",
                            children: [Object(h.jsx)("div", {
                                className: "heading",
                                dangerouslySetInnerHTML: {
                                    __html: t
                                }
                            }), Object(h.jsx)("p", {
                                className: "sub-heading",
                                children: a
                            }), "false" === r ? Object(h.jsx)(l.a, {
                                responsive: p,
                                ssr: !0,
                                deviceType: "desktop",
                                containerClass: "slider2 sliderDesktop2",
                                children: i.length > 0 && i.map((function(e, a) {
                                    return Object(h.jsxs)("a", {
                                        href: e.url,
                                        target: "_self",
                                        onClick: function() {
                                            s(t, e.title, e.url), Object(m.d)(Object(u.a)(), N, e.title, e.url, _.pathname)
                                        },
                                        children: [Object(h.jsx)(o.a, {
                                            src: "".concat(e.img, "?tr=h-300,w-300"),
                                            srcset: Object(n.a)(e.img, 300, 300),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: f || !1
                                        }), Object(h.jsx)("span", {
                                            className: "testTitleDesk",
                                            children: e.title
                                        })]
                                    }, a)
                                }))
                            }) : null, "true" === r ? Object(h.jsx)("ul", {
                                className: "slider2",
                                children: i.length > 0 && i.map((function(e, a) {
                                    return Object(h.jsxs)(h.Fragment, {
                                        children: [Object(h.jsx)("li", {
                                            children: Object(h.jsxs)("a", {
                                                href: e.url,
                                                target: "_self",
                                                onClick: function() {
                                                    s(t, e.title, e.url), Object(m.d)(Object(u.a)(), N, e.title, e.url, _.pathname)
                                                },
                                                children: [Object(h.jsx)(o.a, {
                                                    src: "".concat(e.img, "?tr=h-170,w-170"),
                                                    srcset: Object(n.a)(e.img, 170, 170),
                                                    alt: e.img_alt_mobile || e.title,
                                                    title: e.img_title_mobile || e.title,
                                                    noLazyLoad: f || !1
                                                }), Object(h.jsx)("span", {
                                                    className: "rowImgTitle",
                                                    children: e.title
                                                })]
                                            })
                                        }, a), 3 === a && ("/valentine" === _.pathname || "/" === _.pathname) && !Object(d.a)(v) && !Object(d.a)(v.card_one) && Object(h.jsx)("li", {
                                            children: Object(h.jsx)("div", {
                                                className: "weekPlanInner",
                                                children: Object(h.jsxs)("a", {
                                                    href: v.card_one.url,
                                                    onClick: function() {
                                                        s(v.card_one.title, v.card_one.title, v.card_one.url), Object(m.d)(Object(u.a)(), N, v.card_one.title, v.card_one.url, _.pathname)
                                                    },
                                                    children: [Object(h.jsx)(o.a, {
                                                        src: v.card_one.img_mob,
                                                        srcset: v.card_one.img_mob,
                                                        alt: v.card_one.title,
                                                        title: v.card_one.title,
                                                        height: 150,
                                                        width: 150
                                                    }), Object(h.jsx)("span", {
                                                        className: "rowImgTitle extraCardTitle",
                                                        children: v.card_one.title
                                                    })]
                                                })
                                            })
                                        }), 7 === a && "/valentine" === _.pathname && !Object(d.a)(v) && !Object(d.a)(v.card_two) && Object(h.jsx)("li", {
                                            children: Object(h.jsx)("div", {
                                                className: "weekPlanInner",
                                                children: Object(h.jsxs)("a", {
                                                    href: v.card_two.url,
                                                    onClick: function() {
                                                        s(v.card_two.title, v.card_two.title, v.card_two.url), Object(m.d)(Object(u.a)(), N, v.card_two.title, v.card_two.url, _.pathname)
                                                    },
                                                    children: [Object(h.jsx)(o.a, {
                                                        src: v.card_two.img_mob,
                                                        srcset: v.card_two.img_mob,
                                                        alt: v.card_two.title,
                                                        title: v.card_two.title,
                                                        height: 150,
                                                        width: 150
                                                    }), Object(h.jsx)("span", {
                                                        className: "rowImgTitle extraCardTitle",
                                                        children: v.card_two.title
                                                    })]
                                                })
                                            })
                                        })]
                                    })
                                }))
                            }) : null]
                        }), "/" === _.pathname && !Object(d.a)(v) && Object(h.jsx)("a", {
                            className: "viewAllMobile",
                            onClick: function() {
                                s(t, "view all", v.card_two.url), Object(m.d)(Object(u.a)(), N, "view all", v.card_two.url, _.pathname)
                            },
                            href: v.card_two.url,
                            target: "_self",
                            children: "View All"
                        })]
                    })
                })
            }))
        },
        835: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = a(143),
                r = a(2),
                l = a(746),
                o = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.items,
                    i = e.location;
                return Object(o.jsx)(c.a.Fragment, {
                    children: !Object(r.a)(a) && Object(o.jsx)("div", {
                        className: "blog-container-box asss",
                        children: Object(o.jsxs)("div", {
                            className: "prod-category card-blog",
                            children: [Object(o.jsx)("div", {
                                className: "heading",
                                children: t
                            }), Object(o.jsx)("ul", {
                                children: a.length > 0 && a.map((function(e, t) {
                                    return Object(o.jsxs)("li", {
                                        children: [Object(o.jsx)("div", {
                                            className: "blog-title",
                                            children: Object(o.jsx)("span", {
                                                className: "field-content",
                                                children: e.title
                                            })
                                        }), Object(o.jsxs)("div", {
                                            className: "blog-body",
                                            children: [Object(o.jsx)("div", {
                                                className: "field-content",
                                                children: e.description
                                            }), "app" === Object(n.a)("fa-source", i.search) ? Object(o.jsx)(l.a, {
                                                children: Object(o.jsx)("p", {
                                                    onClick: e.link,
                                                    children: "Read More..."
                                                })
                                            }) : Object(o.jsx)("a", {
                                                href: e.link,
                                                className: "views-more-link",
                                                target: "_self",
                                                children: "Read More..."
                                            })]
                                        })]
                                    }, t++)
                                }))
                            })]
                        })
                    })
                })
            }))
        },
        836: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = a(143),
                r = a(2),
                l = a(746),
                o = a(12),
                d = a(744),
                j = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.items,
                    i = e.pushToGtm,
                    s = e.is_shadow,
                    b = e.background_color,
                    m = e.location,
                    u = s ? "shadowActive" : "shadowNo";
                return "app" === Object(n.a)("fa-source", m.search) ? Object(j.jsx)(c.a.Fragment, {
                    children: !Object(r.a)(a) && Object(j.jsx)("div", {
                        style: {
                            background: b
                        },
                        className: "prod-category more-occasion browse-price ".concat(u),
                        children: Object(j.jsxs)("div", {
                            className: "browse_price_inner",
                            children: [Object(j.jsx)("h2", {
                                className: "heading",
                                children: t
                            }), Object(j.jsx)("ul", {
                                className: "category-list",
                                children: a.length > 0 && a.map((function(e, t) {
                                    return Object(j.jsx)("li", {
                                        children: Object(j.jsx)(l.a, {
                                            url: e.url,
                                            children: Object(j.jsx)("span", {
                                                children: e.title
                                            })
                                        })
                                    }, t)
                                }))
                            })]
                        })
                    })
                }) : Object(j.jsx)(c.a.Fragment, {
                    children: !Object(r.a)(a) && Object(j.jsx)("div", {
                        style: {
                            background: b
                        },
                        className: "prod-category more-occasion browse-price ".concat(u),
                        children: Object(j.jsxs)("div", {
                            className: "browse_price_inner",
                            children: [Object(j.jsx)("h2", {
                                className: "heading",
                                children: t
                            }), Object(j.jsx)("ul", {
                                className: "category-list",
                                children: a.length > 0 && a.map((function(e, a) {
                                    return Object(j.jsx)("li", {
                                        children: Object(j.jsx)("a", {
                                            href: e.url,
                                            target: "_self",
                                            onClick: function() {
                                                i(t, e.title, e.url), Object(o.d)(Object(d.a)(), t, e.title, e.url, m.pathname)
                                            },
                                            children: Object(j.jsx)("span", {
                                                children: e.title
                                            })
                                        })
                                    }, a)
                                }))
                            })]
                        })
                    })
                })
            }))
        },
        837: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = (a(816), a(738)),
                s = (a(230), a(143)),
                n = a(746),
                r = a(12),
                l = a(744),
                o = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.background_color,
                    a = e.is_shadow ? "shadowActive" : "shadowNo",
                    i = e.items || [],
                    d = i.map((function(t, a) {
                        return "app" === Object(s.a)("fa-source", e.location.search) ? Object(o.jsx)("li", {
                            children: Object(o.jsxs)(n.a, {
                                url: t.url,
                                className: "appBellSqaure",
                                children: [Object(o.jsx)(c.a, {
                                    src: t.img,
                                    srcset: t.img,
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                }), Object(o.jsx)("h3", {
                                    children: t.title
                                })]
                            })
                        }, a) : Object(o.jsx)("li", {
                            children: Object(o.jsxs)("a", {
                                href: t.url,
                                onClick: function() {
                                    e.pushToGtm(e.heading, t.title, t.url), Object(r.d)(Object(l.a)(), e.heading, t.title, t.url, e.location.pathname)
                                },
                                children: [Object(o.jsx)(c.a, {
                                    src: t.img,
                                    srcset: t.img,
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                }), Object(o.jsx)("h3", {
                                    children: t.title
                                })]
                            })
                        }, a)
                    })),
                    j = {
                        width: i.length / 2 * 122
                    };
                return Object(o.jsx)("div", {
                    id: "combo-rakhi",
                    className: "occasion-container-box ".concat(a, " ").concat(e.cardName),
                    children: Object(o.jsx)("div", {
                        style: {
                            background: t
                        },
                        className: "more-gift-main ".concat(e.class_name, " ").concat(e.locationPathName && "/valentine" === e.locationPathName.pathname ? "addHeartBg" : "removeHeartBg"),
                        children: Object(o.jsx)("div", {
                            className: "more-gift-inner",
                            children: Object(o.jsxs)("div", {
                                className: "moreGiftShadow",
                                children: [Object(o.jsxs)("div", {
                                    className: "more-gift-heading",
                                    children: [e.isShowHeading ? Object(o.jsx)("h1", {
                                        className: "heading",
                                        children: e.heading
                                    }) : Object(o.jsx)("h2", {
                                        className: "heading",
                                        children: e.heading
                                    }), Object(o.jsx)("p", {
                                        className: "sub-heading",
                                        children: e.sub_heading
                                    }), Object(o.jsx)("span", {
                                        className: "heart-red-image"
                                    })]
                                }), "true" == e.isMobileReq ? Object(o.jsx)("div", {
                                    className: "mobileList",
                                    children: Object(o.jsx)("ul", {
                                        className: "more-gift-card",
                                        style: j,
                                        children: d
                                    })
                                }) : Object(o.jsx)("ul", {
                                    className: "more-gift-card",
                                    children: d
                                })]
                            })
                        })
                    })
                })
            }))
        },
        838: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = (a(816), a(738)),
                s = a(2),
                n = a(41),
                r = a(143),
                l = a(746),
                o = (a(230), a(12)),
                d = a(744),
                j = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = "",
                    a = "";
                "true" === e.isMobileReq ? (t = 1 === e.showMobTopLine ? "show-top-line-mob" : "", a = 1 === e.showMobTopSpace ? "show-top-space-mob" : "") : (t = 1 === e.showTopLine ? "show-top-line-desk" : "", a = 1 === e.showTopSpace ? "show-top-space-desk" : "");
                var i = e.items || [],
                    b = e.pathname.split("/") || "";
                var m = i.map((function(t, a) {
                    return "app" === Object(r.a)("fa-source", e.location.search) ? Object(j.jsxs)("li", {
                        children: [Object(j.jsx)(l.a, {
                            url: t.url,
                            className: "forHimImg",
                            children: Object(j.jsx)(c.a, {
                                src: t.img,
                                alt: t.img_alt,
                                title: t.img_title,
                                height: 150,
                                width: 150
                            })
                        }), Object(j.jsxs)("div", {
                            className: "gift-her-him",
                            children: [Object(j.jsxs)("div", {
                                className: "gift-her-him-text",
                                children: [Object(j.jsx)("div", {
                                    className: "her-him-title",
                                    children: t.title
                                }), Object(j.jsx)("div", {
                                    className: "her-him-desc",
                                    children: t.description
                                })]
                            }), Object(j.jsx)(l.a, {
                                url: t.url,
                                className: "her-send-gift",
                                children: "View All"
                            })]
                        })]
                    }, a) : Object(j.jsxs)("li", {
                        children: [Object(j.jsx)("a", {
                            href: t.url,
                            className: "forHimImg",
                            onClick: function() {
                                e.pushToGtm(t.title, "send gifts", t.url), Object(o.d)(Object(d.a)(), e.heading, t.title, t.url, e.location.pathname)
                            },
                            children: Object(j.jsx)(c.a, {
                                src: t.img,
                                srcset: t.img,
                                alt: t.img_alt,
                                title: t.img_title,
                                height: 150,
                                width: 150,
                                noLazyLoad: !1
                            })
                        }), Object(j.jsxs)("div", {
                            className: "gift-her-him",
                            children: [Object(j.jsxs)("div", {
                                className: "gift-her-him-text",
                                children: [Object(j.jsx)("div", {
                                    className: "her-him-title",
                                    children: t.title
                                }), Object(j.jsx)("div", {
                                    className: "her-him-desc",
                                    children: t.description
                                })]
                            }), Object(j.jsx)("a", {
                                href: t.url,
                                onClick: function() {
                                    e.pushToGtm(t.title, "", t.url), Object(o.d)(Object(d.a)(), e.heading, "view all", t.url, e.location.pathname)
                                },
                                className: "her-send-gift",
                                children: "View All"
                            })]
                        })]
                    }, a)
                }));
                return Object(j.jsx)("div", {
                    id: "special-rakhi",
                    className: "giftHerHim-box ".concat(e.cardName),
                    children: Object(j.jsxs)("div", {
                        style: {
                            background: e.background_color
                        },
                        className: "her-him-main".concat(" ", e.class_name, " ").concat(t, " ").concat(a),
                        children: [Object(j.jsx)("h2", {
                            className: "heading",
                            children: e.heading
                        }), Object(j.jsx)("p", {
                            className: "sub-heading",
                            children: e.sub_heading
                        }), "/usa/send-rakhi" !== e.pathname && "/uk/send-rakhi" !== e.pathname && "/australia/send-rakhi" !== e.pathname && "/canada/send-rakhi" !== e.pathname || Object(s.a)(b) ? null : Object(j.jsx)("h1", {
                            className: "send-rakhi-to-country",
                            children: "Send Rakhi to ".concat(b = "usa" === b[1] || "uk" === b[1] ? b[1].toUpperCase() : Object(n.a)(b[1]))
                        }), Object(j.jsx)("ul", {
                            children: m
                        })]
                    })
                })
            }))
        },
        839: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(143),
                s = a(738),
                n = a(746),
                r = a(2),
                l = a(12),
                o = a(744),
                d = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                e.items;
                var t = e.items && e.items[0] && e.items[0].img || "",
                    a = e.items && e.items[0] && e.items[0].url || "",
                    i = (e.items && e.items[0] && e.items[0].title, e.items && e.items[0] && e.items[0].img_title || ""),
                    j = e.items && e.items[0] && e.items[0].img_alt || "",
                    b = e.heading;
                return Object(d.jsxs)("div", {
                    className: "week-plan-main ".concat(e.class_name),
                    children: [!Object(r.a)(b) && Object(d.jsx)("h2", {
                        className: "heading",
                        children: b
                    }), Object(d.jsx)("div", {
                        className: "weekPlanInner",
                        children: "app" === Object(c.a)("fa-source", e.location.search) ? Object(d.jsx)(n.a, {
                            url: a,
                            children: Object(d.jsx)(s.a, {
                                src: t,
                                alt: j,
                                title: i,
                                height: 150,
                                width: 150
                            })
                        }) : Object(d.jsx)("a", {
                            href: a,
                            onClick: function() {
                                e.pushToGtm("Plan a week full of love", "Plan a week full of love", a), Object(l.d)(Object(o.a)(), b, i, a, e.location.pathname)
                            },
                            children: Object(d.jsx)(s.a, {
                                src: t,
                                srcset: t,
                                alt: j,
                                title: i,
                                height: 150,
                                width: 150
                            })
                        })
                    })]
                })
            }))
        },
        840: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = (a(2), a(0));
            t.a = function(e) {
                var t = e.heading,
                    a = (e.items, e.pushToGtm, e.isMobileReq, e.sub_heading);
                e.mainHeading;
                return Object(s.jsx)(c.a.Fragment, {
                    children: Object(s.jsxs)("div", {
                        className: "headeingTextBox",
                        children: [Object(s.jsx)("div", {
                            className: "headBox",
                            children: Object(s.jsx)("h1", {
                                children: t
                            })
                        }), Object(s.jsx)("div", {
                            className: "htextBox",
                            children: Object(s.jsx)("p", {
                                children: a
                            })
                        })]
                    })
                })
            }
        },
        841: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = (a(743), a(230)),
                r = a(749),
                l = a.n(r),
                o = (a(748), a(355), a(775)),
                d = a(2),
                j = a(143),
                b = a(746),
                m = a(12),
                u = a(744),
                h = a(0),
                p = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.items,
                    i = e.pushToGtm,
                    s = e.isMobileReq,
                    r = (e.indexValue, e.card_type, e.class_name),
                    O = e.is_shadow,
                    g = e.isShowHeading,
                    v = e.background_color,
                    x = e.mainHeading,
                    f = void 0 !== x && x,
                    _ = e.location,
                    w = O ? "shadowActive" : "shadowNo";
                return "app" === Object(j.a)("fa-source", _.search) ? Object(h.jsx)(c.a.Fragment, {
                    children: !Object(d.a)(a) && Object(h.jsxs)("div", {
                        style: {
                            background: v
                        },
                        className: "occasion-container-box ".concat(w),
                        children: [" ", Object(h.jsxs)("div", {
                            className: "prod-category gifts-category ".concat(r),
                            children: [f || g ? Object(h.jsx)("h1", {
                                children: t
                            }) : Object(h.jsx)("h2", {
                                children: t
                            }), Object(h.jsx)("ul", {
                                className: "slider1",
                                children: a.length > 0 && a.map((function(e, t) {
                                    return Object(h.jsx)("li", {
                                        children: Object(h.jsxs)(b.a, {
                                            url: e.url,
                                            children: [Object(h.jsx)(o.a, {
                                                src: "".concat(e.img, "?tr=h-81,w-81"),
                                                srcset: Object(n.a)(e.img, 81, 81),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title
                                            }), Object(h.jsx)("span", {
                                                children: e.title
                                            })]
                                        })
                                    }, t)
                                }))
                            })]
                        })]
                    })
                }) : Object(h.jsx)(c.a.Fragment, {
                    children: !Object(d.a)(a) && Object(h.jsxs)("div", {
                        style: {
                            background: v
                        },
                        className: "occasion-container-box ".concat(w),
                        children: [" ", Object(h.jsxs)("div", {
                            className: "prod-category gifts-category ".concat(r),
                            children: [f || g ? Object(h.jsx)("h1", {
                                children: t
                            }) : Object(h.jsx)("h2", {
                                children: t
                            }), "false" === s ? Object(h.jsx)(l.a, {
                                responsive: p,
                                ssr: !0,
                                deviceType: "desktop",
                                containerClass: "slider1 sliderRectangle sliderDesktop",
                                children: a.length > 0 && a.map((function(e, a) {
                                    return Object(h.jsxs)("a", {
                                        href: e.url,
                                        target: "_self",
                                        onClick: function() {
                                            i(t, e.title, e.url), Object(m.d)(Object(u.a)(), t, e.title, e.url, _.pathname)
                                        },
                                        children: [Object(h.jsx)(o.a, {
                                            src: "".concat(e.img),
                                            srcset: Object(n.a)(e.img, 300),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title
                                        }), Object(h.jsx)("span", {
                                            children: e.title
                                        })]
                                    }, a)
                                }))
                            }) : null, "true" === s ? Object(h.jsx)("ul", {
                                className: "slider1",
                                children: a.length > 0 && a.map((function(e, a) {
                                    return Object(h.jsx)("li", {
                                        children: Object(h.jsxs)("a", {
                                            href: e.url,
                                            target: "_self",
                                            onClick: function() {
                                                i(t, e.title, e.url), Object(m.d)(Object(u.a)(), t, e.title, e.url, _.pathname)
                                            },
                                            children: [Object(h.jsx)(o.a, {
                                                src: "".concat(e.img, "?tr=h-81,w-81"),
                                                srcset: Object(n.a)(e.img, 81, 81),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title
                                            }), Object(h.jsx)("span", {
                                                children: e.title
                                            })]
                                        })
                                    }, a)
                                }))
                            }) : null]
                        })]
                    })
                })
            }))
        },
        843: function(e, t, a) {
            "use strict";
            var i = a(31),
                c = a(3),
                s = a(42),
                n = a.n(s),
                r = a(749),
                l = a.n(r),
                o = (a(748), a(798), a.p, a.p, a(0)),
                d = function(e) {
                    var t = e.confessionDes,
                        a = e.confessionDes && e.confessionDes.portfolio || [],
                        i = a.map((function(e, t) {
                            return Object(o.jsx)("span", {
                                className: "couple-boy",
                                children: Object(o.jsx)("img", {
                                    src: e.image,
                                    alt: e.display_name,
                                    title: e.display_name
                                })
                            }, t)
                        }));
                    return Object(o.jsx)("div", {
                        className: "valentine-popup-show",
                        children: Object(o.jsxs)("div", {
                            className: "valentine-modal-show",
                            children: [Object(o.jsxs)("div", {
                                className: "valentine-popup-heading",
                                children: [Object(o.jsx)("h2", {
                                    children: "lovey dovey moment"
                                }), Object(o.jsx)("span", {
                                    className: "heart-red-image"
                                })]
                            }), Object(o.jsx)("p", {
                                children: t && t.description
                            }), Object(o.jsxs)("div", {
                                className: "couple-image",
                                children: [Object(o.jsx)("div", {
                                    className: "couple-background",
                                    children: i
                                }), a.length > 1 ? Object(o.jsx)("div", {
                                    className: "couple-name",
                                    children: "".concat(a[0].display_name, " & ").concat(a[1].display_name)
                                }) : ""]
                            }), Object(o.jsx)("div", {
                                className: "valentine-close-button",
                                onClick: function() {
                                    e.closeModalPopu()
                                }
                            })]
                        })
                    })
                },
                j = (a(775), {
                    content: {
                        top: "auto",
                        left: "0%",
                        right: "auto",
                        bottom: "0",
                        marginRight: "0",
                        padding: "16px",
                        borderRadius: "0"
                    }
                });
            t.a = function(e) {
                var t = e.items,
                    a = Object(c.useState)(0),
                    s = Object(i.a)(a, 2),
                    r = s[0],
                    b = s[1],
                    m = Object(c.useState)(!1),
                    u = Object(i.a)(m, 2),
                    h = u[0],
                    p = u[1],
                    O = Object(c.useState)({}),
                    g = Object(i.a)(O, 2),
                    v = g[0],
                    x = g[1],
                    f = function() {
                        p(!1), x({})
                    },
                    _ = t.map((function(e, t) {
                        return Object(o.jsxs)("div", {
                            className: "confessionStory",
                            children: [Object(o.jsx)("p", {
                                className: "confession-content",
                                children: e.description.substring(0, 90)
                            }), Object(o.jsx)("span", {
                                className: "read-story",
                                onClick: function(t) {
                                    return function(e) {
                                        p(!0), x(e)
                                    }(e)
                                },
                                children: e.title
                            })]
                        }, t)
                    })),
                    w = t.map((function(e, t) {
                        return Object(o.jsx)("img", {
                            src: e.img,
                            className: t === r ? "active" : "noActive",
                            title: e.img_title,
                            alt: e.img_alt
                        }, t)
                    }));
                return Object(o.jsxs)("div", {
                    className: "confessionContainer ".concat(e.class_name),
                    children: [Object(o.jsxs)("div", {
                        className: "confessionContainerInner",
                        children: [Object(o.jsxs)("div", {
                            className: "confessionFrame",
                            children: [Object(o.jsx)("div", {
                                className: "confessionFrameBgImg"
                            }), Object(o.jsx)("div", {
                                className: "confessionImg",
                                children: w
                            })]
                        }), Object(o.jsx)("div", {
                            className: "confession-story-main",
                            children: Object(o.jsxs)("div", {
                                className: "confession-story-inner",
                                children: [Object(o.jsxs)("div", {
                                    className: "confession-story-heading",
                                    children: [Object(o.jsx)("h2", {
                                        children: e.heading
                                    }), Object(o.jsx)("span", {
                                        className: "heart-white-image"
                                    })]
                                }), Object(o.jsx)(l.a, {
                                    beforeChange: function(e) {
                                        return function(e) {
                                            b(e)
                                        }(e)
                                    },
                                    responsive: {
                                        superLargeDesktop: {
                                            breakpoint: {
                                                max: 4e3,
                                                min: 3e3
                                            },
                                            items: 1
                                        },
                                        desktop: {
                                            breakpoint: {
                                                max: 3e3,
                                                min: 1024
                                            },
                                            items: 1,
                                            slidesToSlide: 1
                                        },
                                        tablet: {
                                            breakpoint: {
                                                max: 1024,
                                                min: 464
                                            },
                                            items: 1,
                                            slidesToSlide: 1
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 464,
                                                min: 0
                                            },
                                            items: 1,
                                            slidesToSlide: 1
                                        }
                                    },
                                    ssr: !0,
                                    showDots: !0,
                                    infinite: !1,
                                    itemClass: "confession-slider",
                                    containerClass: "carousel-container content-slider-confession",
                                    children: _
                                })]
                            })
                        })]
                    }), Object(o.jsx)(n.a, {
                        isOpen: h,
                        onRequestClose: function(e) {
                            return f()
                        },
                        contentLabel: "reviewModal",
                        style: j,
                        children: Object(o.jsx)("div", {
                            className: "fullPopupConffesion",
                            children: Object(o.jsx)(d, {
                                confessionDes: v,
                                closeModalPopu: f
                            })
                        })
                    })]
                })
            }
        },
        845: function(e, t, a) {
            "use strict";
            var i = a(1),
                c = a(31),
                s = a(3),
                n = a.n(s),
                r = a(30),
                l = a(743),
                o = (a(879), a(355), a(749)),
                d = a.n(o),
                j = (a(748), a(2)),
                b = a(738),
                m = a(797),
                u = a(230),
                h = a(750),
                p = a(8),
                O = a(781),
                g = a(143),
                v = a(746),
                x = a.p + "static/media/whiteStar.6dec93e9.png",
                f = a(12),
                _ = a(744),
                w = (a(7), a(782)),
                y = a(0),
                N = function(e) {
                    return "/" !== e[0] && -1 === e.indexOf("http") ? "/".concat(e) : e
                },
                k = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(r.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.setProductRefererCookie,
                    a = e.heading,
                    r = e.sub_heading,
                    o = e.link,
                    T = e.items,
                    L = e.pushToGtm,
                    S = e.pageType,
                    C = e.isMobileReq,
                    P = e.cardName,
                    D = e.showEarliestDeliveryDate,
                    R = e.siteHeaderSettings,
                    I = e.new_view_all_mobile,
                    A = e.noLazyLoad,
                    M = void 0 !== A && A,
                    E = e.location,
                    G = e.showTopLine,
                    z = e.showTopSpace,
                    q = e.showMobTopLine,
                    F = e.showMobTopSpace,
                    H = n.a.useState(0),
                    B = Object(c.a)(H, 2),
                    V = B[0],
                    U = B[1],
                    W = n.a.useState("next"),
                    Y = Object(c.a)(W, 2),
                    K = Y[0],
                    J = Y[1],
                    X = [],
                    Z = "",
                    Q = "";
                "true" === C ? (Z = 1 === q ? "show-top-line-mob" : "", Q = 1 === F ? "show-top-space-mob" : "") : (Z = 1 === G ? "show-top-line-desk" : "", Q = 1 === z ? "show-top-space-desk" : "");
                var $ = "true" === C,
                    ee = function(e) {
                        var t = Object(s.useRef)(null),
                            a = Object(s.useState)(!1),
                            i = Object(c.a)(a, 2),
                            n = i[0],
                            r = i[1],
                            l = function(e) {
                                var t = Object(c.a)(e, 1)[0];
                                r(t.isIntersecting)
                            };
                        return Object(s.useEffect)((function() {
                            var a = new IntersectionObserver(l, e);
                            return t.current && a.observe(t.current),
                                function() {
                                    t.current && a.unobserve(t.current)
                                }
                        }), [t, e]), [t, n]
                    }({
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    }),
                    te = Object(c.a)(ee, 2),
                    ae = te[0];
                te[1] && "next" === K && function(e, t) {
                    for (var a = 0; a < t.length; a++) {
                        var c = a + 1 + V,
                            s = {
                                item_list_name: e,
                                item_id: t[a].sku ? t[a].sku : t[a].nid,
                                item_name: t[a].title,
                                currency: "INR",
                                index: c,
                                item_brand: "FA",
                                item_category: t[a].prod_type,
                                price: Number(t[a].price),
                                quantity: 1
                            };
                        X.push(Object(i.a)({}, s)), Object(p.c)(s), Object(p.d)("view_item_list", {
                            item_list_name: e,
                            items: X
                        })
                    }
                }(a, T.slice(V, "true" === C ? V + 2 : V + 4));
                var ie = function(e) {
                        var t = e.onClick;
                        return Object(y.jsx)("button", {
                            onClick: function() {
                                U(Number(V) + 4), J("next"), t()
                            },
                            "aria-label": "Go to next slide",
                            className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right"
                        })
                    },
                    ce = function(e) {
                        var t = e.onClick;
                        return Object(y.jsx)("button", {
                            onClick: function() {
                                U(Number(V) - 5), J("previous"), t()
                            },
                            "aria-label": "Go to previous slide",
                            className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left"
                        })
                    };
                if (Object(j.a)(T)) return null;
                var se = function(e, t) {
                        var i = {
                            item_list_name: a,
                            item_id: e.nid.toString(),
                            item_name: e.title,
                            currency: "INR",
                            index: t,
                            item_brand: "FA",
                            item_category: e.prod_type,
                            price: e.price,
                            quantity: 1
                        };
                        Object(p.c)(i), Object(p.d)("select_item", {
                            item_list_name: a,
                            items: [i]
                        }), localStorage.setItem("product_category", a), localStorage.setItem("product_position", t)
                    },
                    ne = "landing_page" === S ? "lp" : "lip";
                return T && T.length > 0 && "app" === Object(g.a)("fa-source", E.search) ? Object(y.jsx)("div", {
                    id: "best-sellers",
                    className: "productoccasion gifts gray-bg-color ".concat(P),
                    children: Object(y.jsxs)("div", {
                        className: "productoccasion_inner",
                        children: [Object(y.jsxs)("div", {
                            className: "occasionday_main_product",
                            children: [Object(y.jsx)(v.a, {
                                url: o || null,
                                className: "viewAllNative",
                                children: Object(y.jsxs)("h2", {
                                    children: [a, " ", !Object(j.a)(o) && Object(y.jsx)("span", {
                                        children: "View All"
                                    })]
                                })
                            }), !Object(j.a)(r) && Object(y.jsx)("p", {
                                className: "best_seller",
                                children: r
                            })]
                        }), Object(y.jsxs)("div", {
                            className: "item",
                            ref: ae,
                            children: [Object(y.jsx)("ul", {
                                className: "content-slider",
                                children: T.map((function(e, t) {
                                    return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(y.jsx)("li", {
                                        className: "productslider-item",
                                        children: Object(y.jsxs)(v.a, {
                                            className: "showBorder",
                                            url: N(e.url),
                                            children: [Object(y.jsx)("div", {
                                                className: "product_img",
                                                children: Object(y.jsx)(b.a, {
                                                    src: Object(j.a)(e.images) ? "".concat(e.img, "?tr=h-153,w-153") : "".concat(e.images[0].src, "?tr=h-153,w-153"),
                                                    srcset: Object(j.a)(e.images) ? Object(u.a)(e.img, 153) : Object(u.a)(e.images[0].src, 153),
                                                    alt: Object(j.a)(e.images) ? e.title : e.images[0].alt,
                                                    title: Object(j.a)(e.images) ? e.title : e.images[0].title,
                                                    height: 150,
                                                    width: 150,
                                                    noLazyLoad: !!(M && parseInt(t) < 2) && M
                                                })
                                            }), Object(y.jsx)("div", {
                                                className: "prod_name",
                                                children: e.title
                                            }), Object(y.jsx)("div", {
                                                className: "prod_price showOther",
                                                children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))
                                            }), Object(y.jsxs)("div", {
                                                className: "price-offer",
                                                children: [Object(y.jsxs)("span", {
                                                    className: "prod_price",
                                                    children: [Object(y.jsx)("span", {
                                                        className: "prod_price_icon",
                                                        children: R.userPickedCurrencyIcon
                                                    }), " ", "".concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))]
                                                }), +e.list_price > 0 && Object(y.jsx)("span", {
                                                    className: "list-price",
                                                    children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.list_price, R.userPickedCurrencyRate))
                                                }), +e.product_discount > 0 && Object(y.jsxs)("span", {
                                                    className: "discount-price",
                                                    children: [+e.product_discount, "% OFF"]
                                                })]
                                            }), (e.rating > 0 || e.review_count > 0) && Object(y.jsxs)("div", {
                                                className: "startImgCount",
                                                children: [e.rating > 0 && Object(y.jsxs)("div", {
                                                    className: "starImgNum",
                                                    children: [Object(y.jsx)(l.LazyLoadImage, {
                                                        className: "starImg",
                                                        src: x,
                                                        alt: "Star Image"
                                                    }, "starImg".concat(t)), Object(y.jsx)("span", {
                                                        className: "starNum",
                                                        children: e.rating
                                                    })]
                                                }), e.review_count > 0 && Object(y.jsxs)("div", {
                                                    className: "starCount",
                                                    children: [Object(y.jsx)("span", {}), e.review_count, " ", 1 === e.review_count ? "review" : "reviews"]
                                                })]
                                            }), D ? Object(y.jsxs)("div", {
                                                className: "earliest-delivery",
                                                children: ["Earliest Delivery : ", Object(y.jsx)("span", {
                                                    className: "earliest-delivery-value",
                                                    children: Object(y.jsx)(m.a, {
                                                        productInformation: e
                                                    })
                                                })]
                                            }) : null]
                                        })
                                    }, t)
                                }))
                            }), (1 === I || "/" === E.pathname) && Object(y.jsx)(v.a, {
                                url: o || null,
                                children: Object(y.jsx)("a", {
                                    className: "viewAllMobile",
                                    children: "View All"
                                })
                            })]
                        })]
                    })
                }) : Object(y.jsx)(s.Fragment, {
                    children: Object(y.jsx)("div", {
                        id: "best-sellers",
                        className: "productoccasion gifts gray-bg-color ".concat(P),
                        children: Object(y.jsxs)("div", {
                            className: "productoccasion_inner ".concat(Z, " ").concat(Q),
                            children: [Object(y.jsxs)("div", {
                                className: "occasionday_main_product",
                                children: [Object(y.jsxs)("h2", {
                                    children: [a, " ", !Object(j.a)(o) && Object(y.jsx)("span", {
                                        onClick: function() {
                                            L(a, "view all", o), Object(f.d)(Object(_.a)(), a, "view all", o, E.pathname)
                                        },
                                        children: Object(y.jsx)("a", {
                                            href: o,
                                            target: "_self",
                                            children: "View All"
                                        })
                                    })]
                                }), !Object(j.a)(r) && Object(y.jsx)("p", {
                                    className: "best_seller",
                                    children: r
                                })]
                            }), "false" === C ? Object(y.jsx)("div", {
                                className: "item",
                                ref: ae,
                                children: Object(y.jsx)(d.a, {
                                    responsive: k,
                                    ssr: !0,
                                    deviceType: "desktop",
                                    itemClass: "productslider-item",
                                    containerClass: "content-slider content-slider-desktop",
                                    customRightArrow: Object(y.jsx)(ie, {}),
                                    customLeftArrow: Object(y.jsx)(ce, {}),
                                    children: T.length > 0 && T.map((function(e, i) {
                                        return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(y.jsxs)("a", {
                                            href: N(e.url),
                                            target: "_blank",
                                            onClick: function() {
                                                L(a, "Product", e.title, i + 1, "landing_page_view"), t(), se(e, i + 1), Object(O.a)(ne, a, window.location.pathname, e.nid), Object(w.a)(ne, a, window.location.pathname, +e.nid, $), Object(f.d)(Object(_.a)(), a, e.title, e.url, E.pathname)
                                            },
                                            children: [Object(y.jsx)("div", {
                                                className: "product_img",
                                                children: Object(y.jsx)(b.a, {
                                                    src: Object(j.a)(e.images) ? "".concat(e.img, "?tr=h-304,w-304") : "".concat(e.images[0].src, "?tr=h-304,w-304"),
                                                    srcset: Object(j.a)(e.images) ? Object(u.a)(e.img, 304) : Object(u.a)(e.images[0].src, 304),
                                                    alt: Object(j.a)(e.images) ? e.title : e.images[0].alt,
                                                    title: Object(j.a)(e.images) ? e.title : e.images[0].title,
                                                    height: 150,
                                                    width: 150,
                                                    noLazyLoad: !!(M && parseInt(i) < 4) && M
                                                })
                                            }), Object(y.jsx)("div", {
                                                className: "prod_name",
                                                children: e.title
                                            }), Object(y.jsx)("div", {
                                                className: "prod_price showOther",
                                                children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))
                                            }), Object(y.jsxs)("div", {
                                                className: "price-offer",
                                                children: [Object(y.jsxs)("span", {
                                                    className: "prod_price",
                                                    children: [Object(y.jsx)("span", {
                                                        className: "prod_price_icon",
                                                        children: R.userPickedCurrencyIcon
                                                    }), " ", "".concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))]
                                                }), +e.list_price > 0 && Object(y.jsx)("span", {
                                                    className: "list-price",
                                                    children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.list_price, R.userPickedCurrencyRate))
                                                }), +e.product_discount > 0 && Object(y.jsxs)("span", {
                                                    className: "discount-price",
                                                    children: [+e.product_discount, "% OFF"]
                                                })]
                                            }), Object(y.jsxs)("div", {
                                                className: "startImgCount",
                                                children: [e.rating > 0 && Object(y.jsxs)("div", {
                                                    className: "starImgNum",
                                                    children: [Object(y.jsx)(l.LazyLoadImage, {
                                                        className: "starImg",
                                                        src: x,
                                                        alt: "Star Image"
                                                    }, "starImg".concat(i)), Object(y.jsx)("span", {
                                                        className: "starNum",
                                                        children: e.rating
                                                    })]
                                                }), e.review_count > 0 && Object(y.jsxs)("div", {
                                                    className: "starCount",
                                                    children: [Object(y.jsx)("span", {}), e.review_count, " ", 1 === e.review_count ? "review" : "reviews"]
                                                })]
                                            }), D ? Object(y.jsxs)("div", {
                                                className: "earliest-delivery",
                                                style: {
                                                    marginLeft: "30px"
                                                },
                                                children: ["Earliest Delivery : ", Object(y.jsx)("span", {
                                                    className: "earliest-delivery-value",
                                                    children: Object(y.jsx)(m.a, {
                                                        productInformation: e
                                                    })
                                                })]
                                            }) : null]
                                        }, i)
                                    }))
                                })
                            }) : null, "true" === C ? Object(y.jsxs)("div", {
                                className: "item",
                                ref: ae,
                                children: [Object(y.jsx)("ul", {
                                    className: "content-slider",
                                    children: T.map((function(e, i) {
                                        return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(y.jsx)("li", {
                                            className: "productslider-item",
                                            children: Object(y.jsxs)("a", {
                                                href: N(e.url),
                                                onClick: function() {
                                                    L(a, "Product", e.title, i + 1, "landing_page_view"), t(), se(e, i + 1), Object(O.a)(ne, a, window.location.pathname, e.nid), Object(w.a)(ne, a, window.location.pathname, +e.nid, $), Object(f.d)(Object(_.a)(), a, e.title, e.url, E.pathname)
                                                },
                                                children: [Object(y.jsx)("div", {
                                                    className: "product_img",
                                                    children: Object(y.jsx)(b.a, {
                                                        src: Object(j.a)(e.images) ? "".concat(e.img, "?tr=h-153,w-153") : "".concat(e.images[0].src, "?tr=h-153,w-153"),
                                                        srcset: Object(j.a)(e.images) ? Object(u.a)(e.img, 153) : Object(u.a)(e.images[0].src, 153),
                                                        alt: Object(j.a)(e.images) ? e.title : e.images[0].alt,
                                                        title: Object(j.a)(e.images) ? e.title : e.images[0].title,
                                                        height: 150,
                                                        width: 150,
                                                        noLazyLoad: !!(M && parseInt(i) < 2) && M
                                                    })
                                                }), Object(y.jsx)("div", {
                                                    className: "prod_name",
                                                    children: e.title
                                                }), Object(y.jsx)("div", {
                                                    className: "prod_price showOther",
                                                    children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))
                                                }), Object(y.jsxs)("div", {
                                                    className: "price-offer",
                                                    children: [Object(y.jsxs)("span", {
                                                        className: "prod_price",
                                                        children: [Object(y.jsx)("span", {
                                                            className: "prod_price_icon",
                                                            children: R.userPickedCurrencyIcon
                                                        }), " ", "".concat(Object(h.a)(+e.price, R.userPickedCurrencyRate))]
                                                    }), +e.list_price > 0 && Object(y.jsx)("span", {
                                                        className: "list-price",
                                                        children: "".concat(R.userPickedCurrencyIcon, " ").concat(Object(h.a)(+e.list_price, R.userPickedCurrencyRate))
                                                    }), +e.product_discount > 0 && Object(y.jsxs)("span", {
                                                        className: "discount-price",
                                                        children: [+e.product_discount, "% OFF"]
                                                    })]
                                                }), (e.rating > 0 || e.review_count > 0) && Object(y.jsxs)("div", {
                                                    className: "startImgCount",
                                                    children: [e.rating > 0 && Object(y.jsxs)("div", {
                                                        className: "starImgNum",
                                                        children: [Object(y.jsx)(l.LazyLoadImage, {
                                                            className: "starImg",
                                                            src: x,
                                                            alt: "Star Image"
                                                        }, "starImg".concat(i)), Object(y.jsx)("span", {
                                                            className: "starNum",
                                                            children: e.rating
                                                        })]
                                                    }), e.review_count > 0 && Object(y.jsxs)("div", {
                                                        className: "starCount",
                                                        children: [Object(y.jsx)("span", {}), e.review_count, " ", 1 === e.review_count ? "review" : "reviews"]
                                                    })]
                                                }), D ? Object(y.jsxs)("div", {
                                                    className: "earliest-delivery",
                                                    children: ["Earliest Delivery : ", Object(y.jsx)("span", {
                                                        className: "earliest-delivery-value",
                                                        children: Object(y.jsx)(m.a, {
                                                            productInformation: e
                                                        })
                                                    })]
                                                }) : null]
                                            })
                                        }, i)
                                    }))
                                }), (1 === I || "/" === E.pathname) && Object(y.jsx)("a", {
                                    className: "viewAllMobile",
                                    onClick: function() {
                                        L(a, "view all", o), Object(f.d)(Object(_.a)(), a, "view all", o, E.pathname)
                                    },
                                    href: o,
                                    target: "_self",
                                    children: "View All"
                                })]
                            }) : null]
                        })
                    })
                })
            }))
        },
        848: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = (a(355), a(749)),
                r = a.n(n),
                l = (a(748), a(2)),
                o = a(25),
                d = a(26),
                j = a(68),
                b = a(34),
                m = a(35),
                u = a(42),
                h = a.n(u),
                p = a(0),
                O = {
                    content: {
                        top: "auto",
                        left: "0%",
                        right: "auto",
                        bottom: "0",
                        marginRight: "0",
                        padding: "16px",
                        borderRadius: "0"
                    }
                },
                g = function(e) {
                    Object(b.a)(a, e);
                    var t = Object(m.a)(a);

                    function a() {
                        var e;
                        return Object(o.a)(this, a), (e = t.call(this)).state = {
                            modalIsOpen: !1
                        }, e.openModal = e.openModal.bind(Object(j.a)(e)), e.closeModal = e.closeModal.bind(Object(j.a)(e)), e
                    }
                    return Object(d.a)(a, [{
                        key: "openModal",
                        value: function() {
                            this.setState({
                                modalIsOpen: !0
                            })
                        }
                    }, {
                        key: "closeModal",
                        value: function() {
                            this.setState({
                                modalIsOpen: !1
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.review,
                                t = null;
                            return e && (t = Array.from(Array(5).keys()).map((function(t) {
                                return Object(p.jsx)("sup", {
                                    className: t + 1 <= +e.ratings ? "fill-star" : "unfill-star"
                                }, t)
                            }))), Object(p.jsx)(p.Fragment, {
                                children: Object(p.jsxs)("div", {
                                    className: 1 === +e.uid_recommends ? "review-list recommand-service" : "review-list landing",
                                    children: ["/" !== this.props.pathname ? Object(p.jsxs)("div", {
                                        className: "otherLanding",
                                        children: [Object(p.jsxs)("h3", {
                                            children: [e.customer, e.city && Object(p.jsxs)("span", {
                                                children: ["(", e.city, ")"]
                                            })]
                                        }), Object(p.jsxs)("div", {
                                            className: "rating_review_recomend",
                                            children: [Object(p.jsx)("h6", {
                                                children: "Rating and Review"
                                            }), Object(p.jsx)("div", {
                                                className: "rating ratingstar",
                                                children: t
                                            })]
                                        }), Object(l.a)(e.recommends) || 1 !== +e.recommends ? null : Object(p.jsx)("div", {
                                            className: "recommended",
                                            children: Object(p.jsx)("span", {
                                                children: "Recommended"
                                            })
                                        }), Object(p.jsxs)("p", {
                                            itemProp: "description",
                                            className: "rating-desc",
                                            children: [e.body.length > 100 ? "".concat(e.body.substr(0, 100), "...") : e.body, e.body.length > 100 ? Object(p.jsx)("samp", {
                                                className: "readMore",
                                                onClick: this.openModal,
                                                children: "Read more"
                                            }) : ""]
                                        })]
                                    }) : Object(p.jsxs)("div", {
                                        className: "homeLanding",
                                        children: [Object(p.jsx)("p", {
                                            itemProp: "description",
                                            className: "rating-desc",
                                            children: e.body
                                        }), Object(p.jsxs)("div", {
                                            className: "rating_review_recomend rating_review_date",
                                            children: [Object(p.jsxs)("div", {
                                                className: "customer-image-rating",
                                                children: [Object(p.jsx)("div", {
                                                    className: "customer_name",
                                                    children: e.customer
                                                }), Object(p.jsxs)("div", {
                                                    className: "starImgNum",
                                                    children: [Object(p.jsx)("span", {
                                                        className: "starImage",
                                                        children: "\u2605"
                                                    }), Object(p.jsx)("span", {
                                                        className: "starNum",
                                                        children: +e.ratings
                                                    })]
                                                })]
                                            }), Object(p.jsxs)("div", {
                                                className: "customedate",
                                                children: [Object(p.jsx)("span", {
                                                    className: "customePost",
                                                    children: "Posted On :"
                                                }), Object(p.jsx)("span", {
                                                    children: e.date
                                                })]
                                            })]
                                        })]
                                    }), Object(p.jsxs)(h.a, {
                                        isOpen: this.state.modalIsOpen,
                                        onAfterOpen: this.afterOpenModal,
                                        onRequestClose: this.closeModal,
                                        contentLabel: "reviewModal",
                                        style: O,
                                        children: [Object(p.jsx)("div", {
                                            className: "full_reivew_nsg",
                                            children: Object(p.jsx)("p", {
                                                children: e.body
                                            })
                                        }), Object(p.jsx)("div", {
                                            className: "closeBtnReview",
                                            children: Object(p.jsx)("button", {
                                                onClick: this.closeModal,
                                                children: "close"
                                            })
                                        })]
                                    })]
                                })
                            })
                        }
                    }]), a
                }(i.Component),
                v = a(143),
                x = a(746),
                f = a(12),
                _ = a(744),
                w = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 3
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 3,
                        slidesToSlide: 3
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 3,
                        slidesToSlide: 3
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 3,
                        slidesToSlide: 3
                    }
                };
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.link,
                    i = e.items,
                    s = e.pushToGtm,
                    n = e.isMobileReq,
                    o = e.location;
                return "app" === Object(v.a)("fa-source", o.search) && (c.a.Fragment, !Object(l.a)(i) && (!Object(l.a)(a) && x.a, i.map((function(e, t) {
                    return Object(p.jsx)(g, {
                        review: e,
                        isMobileReq: n
                    }, t)
                })))), Object(p.jsx)(c.a.Fragment, {
                    children: !Object(l.a)(i) && Object(p.jsx)("div", {
                        className: "productoccasion gray-bg-color review-slider",
                        children: Object(p.jsxs)("div", {
                            className: "review-slider-inner",
                            children: [Object(p.jsx)("div", {
                                className: "occasionday_main_product heading",
                                children: Object(p.jsxs)("h2", {
                                    children: [t, " ", !Object(l.a)(a) && Object(p.jsx)("span", {
                                        children: Object(p.jsx)("a", {
                                            onClick: function() {
                                                s(t, "view all", a), Object(f.d)(Object(_.a)(), t, "view all", a, o.pathname)
                                            },
                                            href: a,
                                            target: "_self",
                                            children: "View All"
                                        })
                                    })]
                                })
                            }), "true" === n ? Object(p.jsxs)("div", {
                                className: "item",
                                children: [Object(p.jsx)("div", {
                                    className: "content-slider",
                                    children: i.map((function(e, t) {
                                        return Object(p.jsx)(g, {
                                            review: e,
                                            isMobileReq: n,
                                            pathname: o.pathname
                                        }, t)
                                    }))
                                }), "/" === o.pathname && Object(p.jsx)("a", {
                                    className: "viewAllMobile",
                                    onClick: function() {
                                        s(t, "view all", a), Object(f.d)(Object(_.a)(), t, "view all", a, o.pathname)
                                    },
                                    href: a,
                                    target: "_self",
                                    children: "View All"
                                })]
                            }) : null, "false" === n ? Object(p.jsx)("div", {
                                className: "item",
                                children: Object(p.jsx)(r.a, {
                                    responsive: w,
                                    ssr: !0,
                                    deviceType: "desktop",
                                    itemClass: "reviewSectio-slider",
                                    containerClass: "content-slider content-slider-desktop",
                                    children: i.map((function(e, t) {
                                        return Object(p.jsx)(g, {
                                            review: e,
                                            isMobileReq: n,
                                            pathname: o.pathname
                                        }, t)
                                    }))
                                })
                            }) : null]
                        })
                    })
                })
            }))
        },
        849: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = (a.p, a(738)),
                s = (a(2), a(230)),
                n = a(143),
                r = a(746),
                l = a(12),
                o = a(744),
                d = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = (e.items || []).map((function(t, a) {
                    return Object(d.jsxs)("li", {
                        children: [Object(d.jsx)(c.a, {
                            src: t.img,
                            srcset: "true" == e.isMobileReq ? Object(s.a)(t.img, 230) : Object(s.a)(t.img, 238),
                            alt: t.img_alt,
                            title: t.img_title,
                            height: 150,
                            width: 150,
                            noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                        }), "app" === Object(n.a)("fa-source", e.location.search) ? Object(d.jsx)(r.a, {
                            url: t.url,
                            children: Object(d.jsx)("p", {
                                children: t.title
                            })
                        }) : Object(d.jsx)("a", {
                            href: t.url,
                            onClick: function() {
                                e.pushToGtm(e.heading, t.title, t.url), Object(l.d)(Object(o.a)(), e.heading, t.title, t.url, e.location.pathname)
                            },
                            children: t.title
                        })]
                    }, a)
                }));
                return Object(d.jsx)("div", {
                    className: "love-week-main ".concat(e.class_name),
                    children: Object(d.jsx)("div", {
                        className: "love-week-inner",
                        children: Object(d.jsxs)("div", {
                            className: "love-week-day",
                            children: [Object(d.jsxs)("div", {
                                className: "love-week-heading",
                                children: [Object(d.jsx)("h2", {
                                    children: e.heading
                                }), Object(d.jsx)("span", {
                                    className: "heart-red-image"
                                })]
                            }), Object(d.jsx)("ul", {
                                className: "love-week-card",
                                children: t
                            }), Object(d.jsx)("div", {
                                className: "weekPlanInner",
                                children: "app" === Object(n.a)("fa-source", e.location.search) ? Object(d.jsx)(r.a, {
                                    url: "/valentine/serenade",
                                    children: Object(d.jsx)("img", {
                                        loading: "lazy",
                                        src: "https://imgcdn.floweraura.com/mobile_banner.jpg",
                                        alt: "Valentine Day Serenade Gift"
                                    })
                                }) : Object(d.jsx)("a", {
                                    href: "/valentine/serenade",
                                    onClick: function() {
                                        e.pushToGtm(e.heading, "Serenade Banner", "/serenade/valentine"), Object(l.d)(Object(o.a)(), e.heading, "Serenade Banner", "/serenade/valentine", e.location.pathname)
                                    },
                                    children: "true" === e.isMobileReq ? Object(d.jsx)("img", {
                                        loading: "lazy",
                                        src: "https://imgcdn.floweraura.com/mobile_banner.jpg",
                                        alt: "Valentine Day Serenade Gift"
                                    }) : Object(d.jsx)("img", {
                                        loading: "lazy",
                                        src: "https://imgcdn.floweraura.com/desktop_banner.jpg",
                                        alt: "Valentine Day Serenade Gift"
                                    })
                                })
                            })]
                        })
                    })
                })
            }))
        },
        850: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(738),
                s = a(2),
                n = a(230),
                r = (a(798), a.p, a(143)),
                l = a(746),
                o = a(12),
                d = a(744),
                j = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.note || "",
                    a = t.split("|"),
                    i = a[0],
                    b = a.length > 1 ? a[1] : "",
                    m = e.items || [],
                    u = {
                        background: null === e.background_color ? "" : e.background_color
                    },
                    h = m.map((function(t, a) {
                        return Object(j.jsx)("li", {
                            children: "app" === Object(r.a)("fa-source", e.location.search) ? Object(j.jsxs)(l.a, {
                                url: t.url,
                                children: [Object(j.jsx)(c.a, {
                                    src: t.img,
                                    srcset: "true" == e.isMobileReq ? Object(n.a)(t.img, 132) : Object(n.a)(t.img, 250),
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad,
                                    id: "SendGiftLoved-" + String(a)
                                }), Object(j.jsx)("h4", {
                                    children: t.title
                                })]
                            }) : Object(j.jsxs)("a", {
                                href: t.url,
                                onClick: function() {
                                    e.pushToGtm(e.heading, t.title, t.url), Object(o.d)(Object(d.a)(), e.heading, t.title, t.url, e.location.pathname)
                                },
                                children: [Object(j.jsx)(c.a, {
                                    src: t.img,
                                    srcset: "true" == e.isMobileReq ? Object(n.a)(t.img, 132) : Object(n.a)(t.img, 250),
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad,
                                    id: "SendGiftLoved-" + String(a)
                                }), Object(j.jsx)("h4", {
                                    children: t.title
                                })]
                            })
                        }, a)
                    }));
                return Object(j.jsx)("div", {
                    className: "card-up-box",
                    children: Object(j.jsx)("div", {
                        className: "sendGiftContaner ".concat(e.class_name),
                        children: Object(j.jsx)("div", {
                            className: "send-gift-main",
                            style: u,
                            children: Object(j.jsxs)("div", {
                                className: "send-gift-inner",
                                children: [Object(j.jsxs)("div", {
                                    className: "send-gift-heading",
                                    children: [Object(s.a)(t) ? Object(j.jsx)("h1", {
                                        className: "removeSpaceMar",
                                        children: e.heading
                                    }) : Object(j.jsx)("h1", {
                                        children: e.heading
                                    }), Object(j.jsx)("h5", {
                                        children: e.sub_heading
                                    }), Object(s.a)(t) ? null : Object(j.jsxs)("div", {
                                        className: "valentinDaysImg",
                                        children: [Object(j.jsx)("strong", {
                                            className: "dateValentine",
                                            children: i
                                        }), Object(j.jsx)("em", {
                                            className: "dateHeartMid"
                                        }), Object(j.jsx)("strong", {
                                            className: "eventValentine",
                                            children: b
                                        })]
                                    })]
                                }), Object(j.jsx)("ul", {
                                    className: "send-gift-card",
                                    children: h
                                })]
                            })
                        })
                    })
                })
            }))
        },
        873: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var i = a(7),
                c = (a(753), a(17)),
                s = a(41),
                n = function(e) {
                    var t = Object(s.g)(),
                        a = t ? "user-data-v1" : "test-user-data-v1";
                    c.a.post("".concat("https://post-apis.floweraura.com", "/").concat(a, "/user-data"), {
                        userdata: {
                            Item: e
                        },
                        env: t ? "live" : "dev"
                    }, {
                        headers: {
                            "X-API-Key": "kOXd44wIsx7ViR6gYpw046TjhYvSoFtd42Z7TF6N"
                        }
                    }).then((function(e) {
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
                        }).REACT_APP_DEBUG && console.log("User push data api response", e), i.a.delete("clicked_from")
                    })).catch((function(e) {
                        console.log("Error", e)
                    }))
                }
        },
        878: function(e, t, a) {},
        879: function(e, t, a) {},
        880: function(e, t, a) {},
        881: function(e, t, a) {},
        882: function(e, t, a) {},
        883: function(e, t, a) {},
        884: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(143),
                s = a(738),
                n = a(746),
                r = a(12),
                l = a(744),
                o = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = (e.items || []).map((function(t, a) {
                    return Object(o.jsxs)("li", {
                        className: "giftsForMainLi",
                        children: [Object(o.jsx)("div", {
                            className: "himHerImg",
                            children: "app" === Object(c.a)("fa-source", e.location.search) ? Object(o.jsx)(n.a, {
                                url: t.url,
                                children: Object(o.jsx)(s.a, {
                                    src: t.img,
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                })
                            }) : Object(o.jsx)("a", {
                                href: t.url,
                                onClick: function() {
                                    e.pushToGtm(t.title, "send gifts", t.url), Object(r.d)(Object(l.a)(), e.heading, t.title, t.url, e.location.pathname)
                                },
                                children: Object(o.jsx)(s.a, {
                                    src: t.img,
                                    alt: t.img_alt,
                                    title: t.img_title,
                                    height: 150,
                                    width: 150,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                })
                            })
                        }), Object(o.jsxs)("div", {
                            className: "giftHerHimUpdated",
                            children: [Object(o.jsxs)("div", {
                                className: "giftHerHimTextUpdated",
                                children: [Object(o.jsx)("div", {
                                    className: "herHimTitleUpdated",
                                    children: t.title
                                }), Object(o.jsx)("div", {
                                    className: "herHimDescUpdated",
                                    children: t.description
                                })]
                            }), "app" === Object(c.a)("fa-source", e.location.search) ? Object(o.jsx)(n.a, {
                                children: Object(o.jsx)(n.a, {
                                    url: t.url,
                                    children: Object(o.jsx)("p", {
                                        className: "herSendGiftUpdated",
                                        children: "View All"
                                    })
                                })
                            }) : Object(o.jsx)("a", {
                                href: t.url,
                                onClick: function() {
                                    e.pushToGtm(t.title, "send gifts", t.url), Object(r.d)(Object(l.a)(), e.heading, "view all", t.url, e.location.pathname)
                                },
                                className: "herSendGiftUpdated",
                                children: "View All"
                            })]
                        })]
                    }, a)
                }));
                return Object(o.jsx)("div", {
                    className: "giftHerHim-box",
                    children: Object(o.jsx)("div", {
                        className: "giftsForMainUpdated ".concat(e.class_name),
                        children: Object(o.jsx)("ul", {
                            className: "giftsForMainUl",
                            children: t
                        })
                    })
                })
            }))
        },
        885: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = (a(886), a(2)),
                r = a(738),
                l = a(230),
                o = a(143),
                d = a(746),
                j = a(12),
                b = a(744),
                m = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.items,
                    a = e.heading,
                    i = e.isMobileReq,
                    s = e.pushToGtm,
                    u = e.noLazyLoad,
                    h = void 0 !== u && u,
                    p = e.location;
                return Object(m.jsx)(c.a.Fragment, {
                    children: !Object(n.a)(t) && Object(m.jsx)("div", {
                        className: "card-up-box",
                        children: Object(m.jsx)("div", {
                            className: "rakhiBanner-card-blog",
                            children: Object(m.jsx)("ul", {
                                children: t.length > 0 && t.map((function(e, t) {
                                    return Object(m.jsx)("li", {
                                        children: "app" === Object(o.a)("fa-source", p.search) ? Object(m.jsxs)(d.a, {
                                            url: e.url,
                                            children: [Object(m.jsx)(r.a, {
                                                src: e.img,
                                                srcset: "true" === i ? Object(l.a)(e.img, 150, 150) : Object(l.a)(e.img, 310, 310),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title,
                                                noLazyLoad: h || !1
                                            }), Object(m.jsx)("h4", {
                                                className: "testTitleDesk",
                                                children: e.title
                                            })]
                                        }) : Object(m.jsxs)("a", {
                                            href: e.url,
                                            onClick: function() {
                                                s(a, e.title, e.url), Object(j.d)(Object(b.a)(), a, e.title, e.url, p.pathname)
                                            },
                                            children: [Object(m.jsx)(r.a, {
                                                src: e.img,
                                                srcset: "true" === i ? Object(l.a)(e.img, 150, 150) : Object(l.a)(e.img, 310, 310),
                                                alt: e.img_alt_mobile || e.title,
                                                title: e.img_title_mobile || e.title,
                                                noLazyLoad: h || !1
                                            }), Object(m.jsx)("h4", {
                                                className: "testTitleDesk",
                                                children: e.title
                                            })]
                                        })
                                    }, t)
                                }))
                            })
                        })
                    })
                })
            }))
        },
        886: function(e, t, a) {},
        887: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a.n(i),
                s = a(30),
                n = a(143),
                r = a(738),
                l = a(746),
                o = a(12),
                d = a(744),
                j = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.isMobileReq,
                    a = e.heading,
                    i = e.sub_heading,
                    s = e.items,
                    b = e.pushToGtm,
                    m = e.noLazyLoad,
                    u = void 0 !== m && m,
                    h = e.reviewRating,
                    p = e.isShowHeading,
                    O = e.location,
                    g = h && h.average;
                return s && s.length > 0 && "app" === Object(n.a)("fa-source", O.search) ? Object(j.jsx)("div", {
                    className: "true" === t ? "rakhi-collection" : "rakhi-collection desktop-rakhi-collection",
                    children: Object(j.jsx)("div", {
                        className: "rakhi-collectionInner",
                        children: Object(j.jsxs)("div", {
                            className: "collectionHeading-listing",
                            children: [Object(j.jsxs)("div", {
                                className: "rakhi-collection-wrap",
                                children: [p ? Object(j.jsx)("h1", {
                                    children: a
                                }) : Object(j.jsx)("h2", {
                                    children: a
                                }), Object(j.jsx)("h4", {
                                    children: i
                                }), Object(j.jsxs)("div", {
                                    className: "rakhi-ratingstar-wrap",
                                    children: [Object(j.jsx)("span", {
                                        className: "rating-value",
                                        children: g || "4.8"
                                    }), Object(j.jsx)("sup", {
                                        className: "fill-star"
                                    }), Object(j.jsx)("sup", {
                                        className: "fill-star"
                                    }), Object(j.jsx)("sup", {
                                        className: "fill-star"
                                    }), Object(j.jsx)("sup", {
                                        className: "fill-star"
                                    }), Object(j.jsx)("sup", {
                                        className: "fill-star"
                                    }), Object(j.jsx)("span", {
                                        className: "total-review",
                                        children: "3816 Reviews "
                                    })]
                                })]
                            }), Object(j.jsx)("div", {
                                className: "rakhi-col-banner-list",
                                children: Object(j.jsx)("ul", {
                                    children: s.map((function(e, a) {
                                        return Object(j.jsx)("li", {
                                            children: Object(j.jsxs)(l.a, {
                                                url: e.url,
                                                children: [Object(j.jsx)(r.a, {
                                                    src: "true" === t ? e.img : e.desktop_img,
                                                    srcset: e.img,
                                                    alt: e.img_alt_mobile || e.title,
                                                    title: e.img_title_mobile || e.title,
                                                    noLazyLoad: u || !1,
                                                    originalImageMobile: e.img,
                                                    originalImageDesktop: e.desktop_img,
                                                    isMobileReq: t
                                                }), Object(j.jsx)("span", {
                                                    className: "collectionTitle",
                                                    children: e.title
                                                })]
                                            })
                                        }, a)
                                    }))
                                })
                            })]
                        })
                    })
                }) : Object(j.jsx)(c.a.Fragment, {
                    children: Object(j.jsx)("div", {
                        className: "true" === t ? "rakhi-collection" : "rakhi-collection desktop-rakhi-collection",
                        children: Object(j.jsx)("div", {
                            className: "rakhi-collectionInner",
                            children: Object(j.jsxs)("div", {
                                className: "collectionHeading-listing",
                                children: [Object(j.jsxs)("div", {
                                    className: "rakhi-collection-wrap",
                                    children: [p ? Object(j.jsx)("h1", {
                                        children: a
                                    }) : Object(j.jsx)("h2", {
                                        children: a
                                    }), Object(j.jsx)("h4", {
                                        children: i
                                    }), Object(j.jsxs)("div", {
                                        className: "rakhi-ratingstar-wrap",
                                        children: [Object(j.jsx)("span", {
                                            className: "rating-value",
                                            children: g || "4.8"
                                        }), Object(j.jsx)("sup", {
                                            className: "fill-star"
                                        }), Object(j.jsx)("sup", {
                                            className: "fill-star"
                                        }), Object(j.jsx)("sup", {
                                            className: "fill-star"
                                        }), Object(j.jsx)("sup", {
                                            className: "fill-star"
                                        }), Object(j.jsx)("sup", {
                                            className: "fill-star"
                                        }), Object(j.jsx)("span", {
                                            className: "total-review",
                                            children: "3816 Reviews "
                                        })]
                                    })]
                                }), Object(j.jsx)("div", {
                                    className: "rakhi-col-banner-list",
                                    children: Object(j.jsx)("ul", {
                                        children: s.length > 0 && s.map((function(e, i) {
                                            return Object(j.jsx)("li", {
                                                children: Object(j.jsxs)("a", {
                                                    href: e.url,
                                                    onClick: function() {
                                                        b(a, e.title, e.url), Object(o.d)(Object(d.a)(), a, e.title, e.url, O.pathname)
                                                    },
                                                    children: [Object(j.jsx)(r.a, {
                                                        src: "true" === t ? e.img : e.desktop_img,
                                                        srcset: e.img,
                                                        alt: e.img_alt_mobile || e.title,
                                                        title: e.img_title_mobile || e.title,
                                                        noLazyLoad: u || !1,
                                                        originalImageMobile: e.img,
                                                        originalImageDesktop: e.desktop_img,
                                                        isMobileReq: t
                                                    }), Object(j.jsx)("span", {
                                                        className: "collectionTitle",
                                                        children: e.title
                                                    })]
                                                })
                                            }, i)
                                        }))
                                    })
                                })]
                            })
                        })
                    })
                })
            }))
        },
        888: function(e, t, a) {
            "use strict";
            var i = a(3),
                c = a(30),
                s = a(749),
                n = a.n(s),
                r = (a(748), a(2)),
                l = a(738),
                o = a(797),
                d = a(230),
                j = a(750),
                b = a(143),
                m = a(746),
                u = a(12),
                h = a(744),
                p = a(0),
                O = function(e) {
                    return "/" !== e[0] && -1 === e.indexOf("http") ? "/".concat(e) : e
                },
                g = {
                    superLargeDesktop: {
                        breakpoint: {
                            max: 4e3,
                            min: 3e3
                        },
                        items: 4
                    },
                    desktop: {
                        breakpoint: {
                            max: 3e3,
                            min: 1024
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    tablet: {
                        breakpoint: {
                            max: 1024,
                            min: 464
                        },
                        items: 4,
                        slidesToSlide: 4
                    },
                    mobile: {
                        breakpoint: {
                            max: 464,
                            min: 0
                        },
                        items: 4,
                        slidesToSlide: 4
                    }
                };
            t.a = Object(c.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.heading,
                    a = e.link,
                    c = e.items,
                    s = e.pushToGtm,
                    v = e.isMobileReq,
                    x = e.showEarliestDeliveryDate,
                    f = e.siteHeaderSettings,
                    _ = e.noLazyLoad,
                    w = void 0 !== _ && _,
                    y = e.location;
                return Object(r.a)(c) ? null : "app" === Object(b.a)("fa-source", y.search) ? Object(p.jsx)(i.Fragment, {
                    children: Object(p.jsx)("div", {
                        className: "rakhiOccasion",
                        children: Object(p.jsxs)("div", {
                            className: "rakhiOccasion_inner",
                            children: [Object(p.jsx)("div", {
                                className: "occasionday_main_product",
                                children: Object(p.jsxs)("h2", {
                                    children: [t, !Object(r.a)(a) && Object(p.jsxs)("span", {
                                        children: [Object(p.jsx)(m.a, {
                                            url: a
                                        }), "View All"]
                                    })]
                                })
                            }), Object(p.jsx)("div", {
                                className: "item",
                                children: Object(p.jsx)("ul", {
                                    className: "content-slider",
                                    children: c.map((function(e, t) {
                                        return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(p.jsx)("li", {
                                            className: "productslider-item",
                                            children: Object(p.jsxs)(m.a, {
                                                url: O(e.url),
                                                children: [Object(p.jsx)("div", {
                                                    className: "product_img",
                                                    children: Object(p.jsx)(l.a, {
                                                        src: Object(r.a)(e.images) ? "".concat(e.img, "?tr=h-153,w-153") : "".concat(e.images[0].src, "?tr=h-153,w-153"),
                                                        srcset: Object(r.a)(e.images) ? Object(d.a)(e.img, 153) : Object(d.a)(e.images[0].src, 153),
                                                        alt: Object(r.a)(e.images) ? e.title : e.images[0].alt,
                                                        title: Object(r.a)(e.images) ? e.title : e.images[0].title,
                                                        noLazyLoad: !!(w && parseInt(t) < 2) && w
                                                    })
                                                }), Object(p.jsx)("div", {
                                                    className: "prod_name",
                                                    children: e.title
                                                }), Object(p.jsx)("div", {
                                                    className: "prod_price",
                                                    children: "".concat(f.userPickedCurrencyIcon, " ").concat(Object(j.a)(+e.price, f.userPickedCurrencyRate))
                                                }), x ? Object(p.jsxs)("div", {
                                                    className: "earliest-delivery",
                                                    children: ["Delivery in :", Object(p.jsx)("span", {
                                                        className: "earliest-delivery-value",
                                                        children: Object(p.jsx)(o.a, {
                                                            productInformation: e
                                                        })
                                                    })]
                                                }) : null]
                                            })
                                        }, t)
                                    }))
                                })
                            })]
                        })
                    })
                }) : Object(p.jsx)(i.Fragment, {
                    children: Object(p.jsx)("div", {
                        className: "rakhiOccasion",
                        children: Object(p.jsxs)("div", {
                            className: "rakhiOccasion_inner",
                            children: [Object(p.jsx)("div", {
                                className: "occasionday_main_product",
                                children: Object(p.jsxs)("h2", {
                                    children: [t, " ", !Object(r.a)(a) && Object(p.jsx)("span", {
                                        onClick: function() {
                                            s(t, "view all", a), Object(u.d)(Object(h.a)(), t, "view all", a, y.pathname)
                                        },
                                        children: Object(p.jsx)("a", {
                                            href: a,
                                            target: "_self",
                                            children: "View All"
                                        })
                                    })]
                                })
                            }), "false" === v ? Object(p.jsx)("div", {
                                className: "item",
                                children: Object(p.jsx)(n.a, {
                                    responsive: g,
                                    ssr: !0,
                                    deviceType: "desktop",
                                    itemClass: "productslider-item",
                                    containerClass: "content-slider content-slider-desktop",
                                    children: c.length > 0 && c.map((function(e, a) {
                                        return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(p.jsxs)("a", {
                                            href: O(e.url),
                                            target: "_blank",
                                            onClick: function() {
                                                s(t, e.title, e.url), Object(u.d)(Object(h.a)(), t, e.title, e.url, y.pathname)
                                            },
                                            children: [Object(p.jsx)("div", {
                                                className: "product_img",
                                                children: Object(p.jsx)(l.a, {
                                                    src: Object(r.a)(e.images) ? "".concat(e.img, "?tr=h-304,w-304") : "".concat(e.images[0].src, "?tr=h-304,w-304"),
                                                    srcset: Object(r.a)(e.images) ? Object(d.a)(e.img, 304) : Object(d.a)(e.images[0].src, 304),
                                                    alt: Object(r.a)(e.images) ? e.title : e.images[0].alt,
                                                    title: Object(r.a)(e.images) ? e.title : e.images[0].title,
                                                    noLazyLoad: !!(w && parseInt(a) < 4) && w
                                                })
                                            }), Object(p.jsx)("div", {
                                                className: "prod_name",
                                                children: e.title
                                            }), Object(p.jsx)("div", {
                                                className: "prod_price",
                                                children: "".concat(f.userPickedCurrencyIcon, " ").concat(Object(j.a)(+e.price, f.userPickedCurrencyRate))
                                            }), x ? Object(p.jsxs)("div", {
                                                className: "earliest-delivery",
                                                children: ["Delivery in: ", Object(p.jsx)("span", {
                                                    className: "earliest-delivery-value",
                                                    children: Object(p.jsx)(o.a, {
                                                        productInformation: e
                                                    })
                                                })]
                                            }) : null]
                                        }, a)
                                    }))
                                })
                            }) : null, "true" === v ? Object(p.jsx)("div", {
                                className: "item",
                                children: Object(p.jsx)("ul", {
                                    className: "content-slider",
                                    children: c.map((function(e, a) {
                                        return e.deliveryThrough = e.delivery_through, e.type = e.prod_type, Object(p.jsx)("li", {
                                            className: "productslider-item",
                                            children: Object(p.jsxs)("a", {
                                                href: O(e.url),
                                                onClick: function() {
                                                    s(t, e.title, e.url), Object(u.d)(Object(h.a)(), t, e.title, e.url, y.pathname)
                                                },
                                                children: [Object(p.jsx)("div", {
                                                    className: "product_img",
                                                    children: Object(p.jsx)(l.a, {
                                                        src: Object(r.a)(e.images) ? "".concat(e.img, "?tr=h-153,w-153") : "".concat(e.images[0].src, "?tr=h-153,w-153"),
                                                        srcset: Object(r.a)(e.images) ? Object(d.a)(e.img, 153) : Object(d.a)(e.images[0].src, 153),
                                                        alt: Object(r.a)(e.images) ? e.title : e.images[0].alt,
                                                        title: Object(r.a)(e.images) ? e.title : e.images[0].title,
                                                        noLazyLoad: !!(w && parseInt(a) < 2) && w
                                                    })
                                                }), Object(p.jsx)("div", {
                                                    className: "prod_name",
                                                    children: e.title
                                                }), Object(p.jsx)("div", {
                                                    className: "prod_price",
                                                    children: "".concat(f.userPickedCurrencyIcon, " ").concat(Object(j.a)(+e.price, f.userPickedCurrencyRate))
                                                }), x ? Object(p.jsxs)("div", {
                                                    className: "earliest-delivery",
                                                    children: ["Delivery in :", Object(p.jsx)("span", {
                                                        className: "earliest-delivery-value",
                                                        children: Object(p.jsx)(o.a, {
                                                            productInformation: e
                                                        })
                                                    })]
                                                }) : null]
                                            })
                                        }, a)
                                    }))
                                })
                            }) : null]
                        })
                    })
                })
            }))
        },
        889: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(738),
                s = a(230),
                n = a(143),
                r = a(746),
                l = a(12),
                o = a(744),
                d = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = e.items,
                    a = e.heading,
                    i = e.isMobileReq,
                    j = e.pushToGtm,
                    b = e.pathname,
                    m = e.noLazyLoad,
                    u = void 0 !== m && m,
                    h = e.location,
                    p = e.isShowHeading,
                    O = "/send-rakhi" === b ? "rakhiHamperCard" : "rakhiHamperCard setOtherPage";
                return Object(d.jsx)("div", {
                    className: O,
                    children: Object(d.jsxs)("div", {
                        className: "rakhiBanner-card-blog rakhiHamperInnerCard",
                        children: [Object(d.jsx)("div", {
                            className: "rakhiHamper-heading",
                            children: p ? Object(d.jsx)("h1", {
                                children: a
                            }) : Object(d.jsx)("h2", {
                                children: a
                            })
                        }), Object(d.jsx)("ul", {
                            children: t.length > 0 && t.map((function(e, t) {
                                return Object(d.jsx)("li", {
                                    children: "app" === Object(n.a)("fa-source", h.search) ? Object(d.jsxs)(r.a, {
                                        url: e.url,
                                        children: [Object(d.jsx)(c.a, {
                                            src: "true" === i ? e.img : e.desktop_img,
                                            srcset: "true" === i ? Object(s.a)(e.img, 105, 105) : Object(s.a)(e.img, 382, 382),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: u || !1
                                        }), Object(d.jsx)("h4", {
                                            className: "testTitleDesk",
                                            children: e.title
                                        })]
                                    }) : Object(d.jsxs)("a", {
                                        href: e.url,
                                        onClick: function() {
                                            j(a, e.title, e.url), Object(l.d)(Object(o.a)(), a, e.title, e.url, h.pathname)
                                        },
                                        children: [Object(d.jsx)(c.a, {
                                            src: "true" === i ? e.img : e.desktop_img,
                                            srcset: "true" === i ? Object(s.a)(e.img, 105, 105) : Object(s.a)(e.img, 382, 382),
                                            alt: e.img_alt_mobile || e.title,
                                            title: e.img_title_mobile || e.title,
                                            noLazyLoad: u || !1
                                        }), Object(d.jsx)("h4", {
                                            className: "testTitleDesk",
                                            children: e.title
                                        })]
                                    })
                                }, t)
                            }))
                        })]
                    })
                })
            }))
        },
        890: function(e, t, a) {},
        891: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(738),
                s = a(230),
                n = a(2),
                r = a(143),
                l = a(746),
                o = a(12),
                d = a(744),
                j = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = null,
                    a = e.item || [],
                    i = e.isShowHeading ? "topShowWeekDay week-inner" : "week-inner",
                    b = a.map((function(a, i) {
                        t = Object(n.a)(a.is_today) || !0 !== a.is_today ? "week-date" : "week-date active";
                        var b = Object(n.a)(a.url) ? "inactive-cursor" : "active-cursor";
                        return "app" === Object(r.a)("fa-source", e.location.search) ? Object(j.jsx)("li", {
                            className: b,
                            children: Object(j.jsxs)(l.a, {
                                url: a.url,
                                children: [Object(j.jsxs)("span", {
                                    className: t,
                                    children: [a.Date, Object(j.jsx)("sup", {
                                        children: "th"
                                    }), Object(j.jsx)("span", {
                                        className: "monthDate",
                                        children: "Feb"
                                    })]
                                }), Object(j.jsx)(c.a, {
                                    src: a.image,
                                    srcset: Object(s.a)(a.image, 90, 90),
                                    alt: a.title + " Gifts",
                                    title: a.title,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                }), Object(j.jsx)("h4", {
                                    children: a.title
                                })]
                            })
                        }, i) : Object(j.jsx)("li", {
                            className: b,
                            children: Object(j.jsxs)("a", {
                                href: a.url,
                                onClick: function() {
                                    e.pushToGtm(e.heading, a.title, a.url), Object(o.d)(Object(d.a)(), e.heading, a.title, a.url, e.location.pathname)
                                },
                                children: [Object(j.jsxs)("span", {
                                    className: t,
                                    children: [a.Date, Object(j.jsx)("sup", {
                                        children: "th"
                                    }), Object(j.jsx)("span", {
                                        className: "monthDate",
                                        children: "Feb"
                                    })]
                                }), Object(j.jsx)(c.a, {
                                    src: a.image,
                                    srcset: Object(s.a)(a.image, 90, 90),
                                    alt: a.title + " Gifts",
                                    title: a.title,
                                    noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                }), Object(j.jsx)("h4", {
                                    children: a.title
                                })]
                            })
                        }, i)
                    }));
                return Object(j.jsx)("div", {
                    className: "week-days",
                    children: Object(j.jsx)("div", {
                        className: i,
                        children: Object(j.jsx)("ul", {
                            className: "week-card",
                            children: b
                        })
                    })
                })
            }))
        },
        892: function(e, t, a) {
            "use strict";
            var i = a(31),
                c = a(3),
                s = a(30),
                n = a(241),
                r = a(8),
                l = a(14),
                o = a(12),
                d = a(744),
                j = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = Object(c.useState)(!1),
                    a = Object(i.a)(t, 2),
                    s = a[0],
                    b = a[1],
                    m = "true" === e.isMobileReq ? "gift-genie-search-banner mob-gift-genie-banner" : "gift-genie-search-banner";
                Object(c.useEffect)((function() {
                    var t = {
                        action: "Giftfinder_banner",
                        eventCategory: "Landing Page - ".concat("true" === e.isMobileReq ? "Mobile" : "Desktop"),
                        eventLabel: "shown"
                    };
                    Object(r.f)(t), Object(l.d)("Giftfinder_banner", t)
                }), []);
                var u = function(t) {
                    b(t);
                    var a = {
                        action: "Giftfinder_banner",
                        eventCategory: "Landing Page - ".concat("true" === e.isMobileReq ? "Mobile" : "Desktop"),
                        eventLabel: "click"
                    };
                    Object(r.f)(a), Object(l.d)("clickEvent", a), Object(o.d)(Object(d.a)(), "Giftfinder_banner", "Gift Genie Search", "", e.location.pathname)
                };
                return Object(j.jsxs)(j.Fragment, {
                    children: [Object(j.jsx)("div", {
                        className: m,
                        children: Object(j.jsx)("div", {
                            className: "giftgenie-search-inner",
                            children: Object(j.jsx)("img", {
                                onClick: function() {
                                    return u(!0)
                                },
                                src: "true" === e.isMobileReq ? e.gift_finder_mob : e.gift_finder_desk,
                                alt: "Gift Genie Search",
                                title: "Gift Genie Search",
                                width: "100%",
                                height: "100%"
                            })
                        })
                    }), s ? Object(j.jsx)(n.a, {
                        openGenieModal: u,
                        isPaneOpen: s,
                        isMobileReq: e.isMobileReq
                    }) : ""]
                })
            }))
        },
        893: function(e, t, a) {
            "use strict";
            a(3);
            var i = a(30),
                c = a(738),
                s = a(230),
                n = (a(894), a(12)),
                r = a(744),
                l = a(143),
                o = a(746),
                d = a(0);
            t.a = Object(i.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                var t = "true" === e.isMobileReq ? "".concat(e.cardName, " mob-special-card") : "".concat(e.cardName, " desk-special-card");
                return "app" === Object(l.a)("fa-source", e.location.search) ? Object(d.jsxs)("div", {
                    id: "rakhi-collection",
                    className: "".concat(e.cardName, " mob-special-card"),
                    children: [Object(d.jsxs)("div", {
                        className: "top-corner-design",
                        children: [Object(d.jsx)("div", {
                            className: "left-corner-design"
                        }), Object(d.jsx)("div", {
                            className: "right-corner-design"
                        })]
                    }), Object(d.jsxs)("div", {
                        className: "special-prod-inner",
                        children: [Object(d.jsxs)("div", {
                            className: "special-prod-heading",
                            children: [Object(d.jsx)("div", {
                                className: "heading",
                                children: e.heading
                            }), Object(d.jsx)("div", {
                                className: "sub-heading",
                                children: e.sub_heading
                            })]
                        }), Object(d.jsx)("div", {
                            className: "special-prod-wrap",
                            children: Object(d.jsx)("ul", {
                                children: e.items.length > 0 && e.items.map((function(t, a) {
                                    return Object(d.jsx)("li", {
                                        children: Object(d.jsxs)(o.a, {
                                            url: t.url,
                                            children: [Object(d.jsx)(c.a, {
                                                src: "".concat(t.img, "?tr=h-170,w-170"),
                                                srcset: Object(s.a)(t.img, 170, 170),
                                                alt: t.img_alt_mobile || t.title,
                                                title: t.img_title_mobile || t.title,
                                                noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                            }), Object(d.jsx)("div", {
                                                className: "rowImgTitle",
                                                children: t.title
                                            })]
                                        })
                                    }, a)
                                }))
                            })
                        })]
                    })]
                }) : Object(d.jsxs)("div", {
                    id: "rakhi-collection",
                    className: t,
                    children: [Object(d.jsxs)("div", {
                        className: "top-corner-design",
                        children: [Object(d.jsx)("div", {
                            className: "left-corner-design"
                        }), Object(d.jsx)("div", {
                            className: "right-corner-design"
                        })]
                    }), Object(d.jsxs)("div", {
                        className: "special-prod-inner",
                        children: [Object(d.jsxs)("div", {
                            className: "special-prod-heading",
                            children: [Object(d.jsx)("h2", {
                                className: "heading",
                                children: e.heading
                            }), Object(d.jsx)("div", {
                                className: "sub-heading",
                                children: e.sub_heading
                            })]
                        }), Object(d.jsx)("div", {
                            className: "special-prod-wrap",
                            children: Object(d.jsx)("ul", {
                                children: e.items.length > 0 && e.items.map((function(t, a) {
                                    return Object(d.jsx)("li", {
                                        children: Object(d.jsxs)("a", {
                                            href: t.url,
                                            target: "_self",
                                            onClick: function() {
                                                e.pushToGtm(e.heading, t.title, t.url), Object(n.d)(Object(r.a)(), e.heading, t.title, t.url, e.location.pathname)
                                            },
                                            children: ["true" === e.isMobileReq ? Object(d.jsx)(c.a, {
                                                src: "".concat(t.img, "?tr=h-170,w-170"),
                                                srcset: Object(s.a)(t.img, 170, 170),
                                                alt: t.img_alt_mobile || t.title,
                                                title: t.img_title_mobile || t.title,
                                                noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                            }) : Object(d.jsx)(c.a, {
                                                src: "".concat(t.img, "?tr=h-286,w-286"),
                                                srcset: Object(s.a)(t.img, 286, 286),
                                                alt: t.img_alt || t.title,
                                                title: t.img_title || t.title,
                                                noLazyLoad: !!e.noLazyLoad && e.noLazyLoad
                                            }), Object(d.jsx)("div", {
                                                className: "rowImgTitle",
                                                children: t.title
                                            })]
                                        })
                                    }, a)
                                }))
                            })
                        })]
                    })]
                })
            }))
        },
        894: function(e, t, a) {},
        926: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return u
            }));
            var i = a(31),
                c = a(3),
                s = (a(890), a.p + "static/media/india.8044be65.png"),
                n = a.p + "static/media/usa.7893d3f1.png",
                r = a.p + "static/media/uk.5c725699.png",
                l = a.p + "static/media/uae.9c82ecaf.png",
                o = a.p + "static/media/canada.862f848e.png",
                d = a.p + "static/media/australia.aeb2178a.png",
                j = a.p + "static/media/overseas.c9763268.png",
                b = a(2),
                m = a(0);

            function u(e) {
                var t = e.pathname,
                    a = Object(c.useState)(!1),
                    u = Object(i.a)(a, 2),
                    h = u[0],
                    p = u[1],
                    O = Object(c.useState)(""),
                    g = Object(i.a)(O, 2),
                    v = g[0],
                    x = g[1],
                    f = Object(c.useState)(null),
                    _ = Object(i.a)(f, 2),
                    w = _[0],
                    y = _[1],
                    N = t.split("/"),
                    k = e.pathname.split("/");
                Object(c.useEffect)((function() {
                    if (window.addEventListener("pageshow", T), void 0 !== N && !0 === N.includes("send-rakhi")) {
                        var t = N[1];
                        if ("send-rakhi" === t) x("INDIA"), y(s);
                        else switch (t) {
                            case "usa":
                                x("USA"), y(n);
                                break;
                            case "uk":
                                x("UK"), y(r);
                                break;
                            case "uae":
                                x("UAE"), y(l);
                                break;
                            case "canada":
                                x("CANADA"), y(o);
                                break;
                            case "australia":
                                x("AUSTRALIA"), y(d);
                                break;
                            default:
                                x("OVERSEAS"), y(j)
                        }
                    }
                    return window.onscroll = function() {
                            var t = window.scrollY;
                            e.isMobileReq && t >= 102 ? (h && p(!1), "send-rakhi" === k[1] && (document.getElementById("navbar").style.top = "76px", document.getElementById("navbar").style.display = "none")) : "send-rakhi" === k[1] && (document.getElementById("navbar").style.top = "76px", document.getElementById("navbar").style.display = "block")
                        },
                        function() {
                            window.removeEventListener("pageshow", T)
                        }
                }), [h]);
                var T = function(e) {
                        var t = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
                        (e.persisted || "undefined" != typeof window.performance && "back_forward" === window.performance.getEntriesByType("navigation")[0].type && t) && window.location.reload()
                    },
                    L = [{
                        title: "INDIA",
                        desktop_img: s,
                        url: "/send-rakhi"
                    }, {
                        title: "USA",
                        desktop_img: n,
                        url: "/usa/send-rakhi"
                    }, {
                        title: "UK",
                        desktop_img: r,
                        url: "/uk/send-rakhi"
                    }, {
                        title: "UAE",
                        desktop_img: l,
                        url: "/uae/send-rakhi"
                    }, {
                        title: "Canada",
                        desktop_img: o,
                        url: "/canada/send-rakhi"
                    }, {
                        title: "Australia",
                        desktop_img: d,
                        url: "/australia/send-rakhi"
                    }, {
                        title: "Overseas",
                        desktop_img: j,
                        url: "/send-rakhi/overseas"
                    }];
                return Object(m.jsxs)(m.Fragment, {
                    children: [function() {
                        if (!Object(b.a)(w)) return Object(m.jsx)(m.Fragment, {
                            children: "send-rakhi" === k[1] && e.isMobileReq ? Object(m.jsxs)("div", {
                                id: "navbar",
                                className: "/send-rakhi" === t ? "rakhi-dropdown-action-box showDropDown" : "rakhi-dropdown-action-box other",
                                children: [Object(m.jsx)("div", {
                                    className: "send-rakhi-to-div hide-rakhi-div",
                                    children: Object(m.jsx)("h4", {
                                        children: "Send Rakhi To:"
                                    })
                                }), Object(m.jsxs)("div", {
                                    className: "rakhi-dropdown-label-arrow",
                                    onClick: function() {
                                        return p(!h)
                                    },
                                    children: [Object(m.jsxs)("div", {
                                        children: [Object(m.jsx)("img", {
                                            src: w,
                                            alt: "country-flag"
                                        }), Object(m.jsx)("h3", {
                                            className: "country-label",
                                            children: "true" === e.isMobileReq ? v.slice(0, 3) : v
                                        })]
                                    }), Object(m.jsx)("span", {
                                        className: h ? "up-arrow" : "down-arrow"
                                    })]
                                })]
                            }) : Object(m.jsxs)("div", {
                                id: "navbar2",
                                className: "/send-rakhi" === t ? "rakhi-dropdown-action-box showDropDown" : "rakhi-dropdown-action-box mob-position other",
                                children: [Object(m.jsx)("div", {
                                    className: "send-rakhi-to-div",
                                    children: Object(m.jsx)("h4", {
                                        children: "Send Rakhi To :"
                                    })
                                }), Object(m.jsxs)("div", {
                                    className: "rakhi-dropdown-label-arrow rakhi-dropdown-label-arrow-mob",
                                    onClick: function() {
                                        return p(!h)
                                    },
                                    children: [Object(m.jsxs)("div", {
                                        children: [Object(m.jsx)("img", {
                                            src: w,
                                            alt: "country-flag"
                                        }), Object(m.jsx)("h3", {
                                            className: "country-label",
                                            children: v
                                        })]
                                    }), Object(m.jsx)("span", {
                                        className: h ? "up-arrow up-arrow-mob" : "down-arrow down-arrow-mob"
                                    })]
                                })]
                            })
                        })
                    }(), h && Object(m.jsx)("div", {
                        className: "/send-rakhi" === t ? "rakhi-dropdown-rows-box setDropDown" : "send-rakhi" !== k[1] && e.isMobileReq ? "rakhi-dropdown-rows-box rakhi-dropdown-rows-box-mob others mob-others" : "rakhi-dropdown-rows-box others",
                        children: L.map((function(t, a) {
                            return Object(m.jsx)("a", {
                                href: t.url,
                                className: "send-rakhi" !== k[1] && e.isMobileReq ? "ml-13" : "",
                                children: Object(m.jsxs)("div", {
                                    onClick: function() {
                                        x(t.title), y(t.desktop_img), p(!1)
                                    },
                                    children: [Object(m.jsx)("img", {
                                        src: t.desktop_img,
                                        alt: "country-flag"
                                    }), Object(m.jsx)("h3", {
                                        children: t.title
                                    })]
                                }, a)
                            })
                        }))
                    })]
                })
            }
        }
    }
]);