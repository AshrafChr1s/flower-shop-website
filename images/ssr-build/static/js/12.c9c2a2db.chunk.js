(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [12], {
        738: function(e, t, a) {
            "use strict";
            var s = a(1),
                c = a(3),
                r = a(2),
                n = a(0);
            t.a = function(e) {
                var t = e.alt,
                    a = void 0 === t ? "" : t,
                    i = e.title,
                    o = void 0 === i ? "" : i,
                    l = e.src,
                    d = void 0 === l ? "" : l,
                    u = e.srcset,
                    m = void 0 === u ? "" : u,
                    j = e.noLazyLoad,
                    p = void 0 !== j && j,
                    b = e.itemProp,
                    h = void 0 === b ? null : b,
                    O = e.id,
                    g = void 0 === O ? null : O,
                    f = e.isMobileReq,
                    v = void 0 === f ? "false" : f,
                    x = e.originalImageMobile,
                    y = void 0 === x ? "" : x,
                    N = e.originalImageDesktop,
                    w = void 0 === N ? "" : N,
                    k = {},
                    _ = {},
                    S = {};
                g && (k = {
                    id: g
                }), h && (_ = {
                    itemProp: h
                }), Object(r.a)(m) || (S = {
                    srcSet: m
                });
                var C = d;
                return C = "" === d && "true" === v ? w : "" === d && "false" === v ? y : d, Object(r.a)(C) ? null : Object(n.jsx)(c.Fragment, {
                    children: Object(n.jsx)("span", {
                        children: Object(n.jsx)("img", Object(s.a)(Object(s.a)(Object(s.a)({
                            src: C,
                            loading: p ? "eager" : "lazy",
                            alt: a
                        }, S), {}, {
                            title: o,
                            style: {
                                display: "inline",
                                width: "100%",
                                height: "100%"
                            }
                        }, _), k))
                    })
                })
            }
        },
        739: function(e, t, a) {
            "use strict";
            a(3);
            var s = a(30),
                c = a(745),
                r = a(101),
                n = a(2),
                i = a(0);
            t.a = Object(s.c)((function(e) {
                return {
                    isMobileReq: e.pageData.isMobile,
                    pageData: e.pageData
                }
            }))((function(e) {
                Object(r.g)();
                var t = e.title,
                    a = e.description,
                    s = e.keywords,
                    o = e.canonical,
                    l = e.dynamicElements;
                return t = Object(n.a)(t) ? "" : t, o && (o = o.replace("/home-page", "")), Object(i.jsxs)(c.Helmet, {
                    children: [Object(i.jsx)("title", {
                        children: t
                    }), Object(n.a)(a) ? null : Object(i.jsx)("meta", {
                        name: "description",
                        content: a
                    }), Object(n.a)(s) ? null : Object(i.jsx)("meta", {
                        name: "keywords",
                        content: s
                    }), Object(n.a)(o) ? null : Object(i.jsx)("link", {
                        rel: "canonical",
                        href: o
                    }), Object(n.a)(l) ? null : l]
                })
            }))
        },
        740: function(e, t, a) {
            "use strict";
            var s = a(3),
                c = a(30),
                r = (a(234), a(742)),
                n = a(143),
                i = a(0);
            t.a = Object(c.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                return "app" === Object(n.a)("fa-source", e.location.search) ? null : Object(i.jsx)(s.Fragment, {
                    children: Object(i.jsxs)(i.Fragment, {
                        children: [Object(i.jsx)(r.a, {
                            isMobileReq: e.isMobileReq,
                            location: e.location
                        }), "true" === e.isMobileReq ? Object(i.jsxs)("div", {
                            className: "paymentFooterImage",
                            children: [Object(i.jsxs)("div", {
                                className: "payementAcceptFooter",
                                children: [Object(i.jsx)("h5", {
                                    className: "pfHeading",
                                    children: "We Accept:"
                                }), Object(i.jsx)("div", {
                                    className: "payementType",
                                    children: Object(i.jsx)("div", {
                                        className: "payementImg",
                                        children: Object(i.jsx)("img", {
                                            loading: "lazy",
                                            src: "https://imgcdn.floweraura.com/paymentFooter.png",
                                            alt: "payement",
                                            width: "100%",
                                            height: "100%"
                                        })
                                    })
                                })]
                            }), Object(i.jsx)("div", {
                                className: "copyright",
                                children: Object(i.jsxs)("div", {
                                    children: ["Copyright.", " ", (new Date).getFullYear(), ". FA GIFTS PVT. LTD"]
                                })
                            })]
                        }) : null]
                    })
                })
            }))
        },
        741: function(e, t, a) {
            "use strict";
            a(3);
            var s = a(0);
            t.a = function(e) {
                var t = e.videoUrl,
                    a = e.youtubeImg,
                    c = e.height,
                    r = e.defaultIcon,
                    n = void 0 === r || r;
                return Object(s.jsx)(s.Fragment, {
                    children: Object(s.jsx)("div", {
                        children: Object(s.jsx)("iframe", {
                            title: "Youtube",
                            "aria-hidden": "true",
                            height: c,
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            webkitallowfullscreen: "true",
                            mozallowfullscreen: "true",
                            srcDoc: "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(t, "/?autoplay=1&;enablejsapi=1><img src=").concat(a, " loading=\"lazy\" alt='The Journey of FlowerAura.com Gets Featured on CNBC Awaaz'>").concat("object" === typeof n ? Object(s.jsx)("span", {
                                children: "\u25b6"
                            }) : "", "</a>"),
                            id: "youtube-ad-video"
                        })
                    })
                })
            }
        },
        742: function(e, t, a) {
            "use strict";
            var s = a(3),
                c = a.p + "static/media/fb.4545cbb8.svg",
                r = a.p + "static/media/insta.2843d8f7.svg",
                n = a.p + "static/media/linkedin.a070936f.svg",
                i = a.p + "static/media/pinterest.7127d571.svg",
                o = a.p + "static/media/tweet.2e3db5c9.svg",
                l = a.p + "static/media/youtube.5da4739a.svg",
                d = (a(743), a.p, a(741)),
                u = a(2),
                m = a(738),
                j = a(230),
                p = a(179),
                b = a(12),
                h = a(0),
                O = "https://imgcdn.floweraura.com/fa-media/play_store.svg",
                g = "https://imgcdn.floweraura.com/fa-media/app_store.svg",
                f = [{
                    img: c,
                    position: "1",
                    name: "facebook",
                    url: "https://www.facebook.com/floweraura"
                }, {
                    img: o,
                    position: "2",
                    name: "twitter",
                    url: "https://twitter.com/floweraura"
                }, {
                    img: l,
                    position: "3",
                    name: "youtube",
                    url: "https://www.youtube.com/channel/UCKHMl8G_5dkJFUvORqQBHTA/featured"
                }, {
                    img: i,
                    position: "4",
                    name: "pinterest",
                    url: "https://in.pinterest.com/FlowerAuraOfficial"
                }, {
                    img: r,
                    position: "5",
                    name: "instagram",
                    url: "https://www.instagram.com/flowerauraofficial"
                }, {
                    img: n,
                    position: "6",
                    name: "linkedin",
                    url: "https://in.linkedin.com/company/floweraura"
                }],
                v = [{
                    position: "1",
                    name: "About Us",
                    url: "/about-us"
                }, {
                    position: "2",
                    name: "Sell With Us",
                    url: "/sell-with-us"
                }, {
                    position: "3",
                    name: "Coupons & Deals",
                    url: "/coupon-deals"
                }, {
                    position: "4",
                    name: "Cancellation & Refund",
                    url: "/cancellation-and-refund"
                }, {
                    position: "5",
                    name: "Terms and Conditions",
                    url: "/termcondition"
                }, {
                    position: "6",
                    name: "Career",
                    url: "/career-page"
                }, {
                    position: "7",
                    name: "Media",
                    url: "/show-media"
                }, {
                    position: "8",
                    name: "Privacy Policy",
                    url: "/privacy-page"
                }, {
                    position: "9",
                    name: "Reviews",
                    url: "/reviews"
                }, {
                    position: "10",
                    name: "Blog",
                    url: "/blog"
                }, {
                    position: "11",
                    name: "Sitemap",
                    url: "/show-sitemap"
                }];
            t.a = function(e) {
                var t = !1,
                    a = "",
                    c = "";
                Object(s.useEffect)((function() {
                    r(), window.addEventListener("scroll", Object(p.a)((function() {
                        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 && "true" === e.isMobileReq ? Object(b.q)("footer_mob", "app_download_button", window.location.pathname) : window.innerHeight + window.scrollY >= document.body.offsetHeight - 250 && "false" === e.isMobileReq && Object(b.q)("footer_desktop", "app_download_button", window.location.pathname)
                    }), 1e3))
                }), []);
                var r = function() {
                        t || (window && window.loadVideoFrame(), t = !0)
                    },
                    n = f.map((function(e) {
                        return Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                target: "_blank",
                                rel: "nofollow",
                                className: "socialIconSprite socialIconSprite-".concat(e.position)
                            })
                        }, e.position)
                    })),
                    i = v.map((function(e) {
                        return Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    })),
                    o = v.map((function(e, t) {
                        return t < 6 && Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    })),
                    l = v.map((function(e, t) {
                        return t > 5 && Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    }));
                "false" === e.isMobileReq ? (a = "https://play.google.com/store/apps/details?id=com.floweraura&referrer=utm_source%3Dfooter_web%26utm_medium%3Dweb%26utm_campaign%3Dapp_download_web_footer", c = "https://apps.apple.com/in/app/floweraura/id1490812119") : (a = "https://play.google.com/store/apps/details?id=com.floweraura&referrer=utm_source%3Dfooter_mob%26utm_medium%3Dmob%26utm_campaign%3Dapp_download_mob_footer", c = "https://apps.apple.com/app/apple-store/id1490812119?pt=120793467&ct=mob_footer&mt=8");
                var x = "",
                    y = !1;
                e.location.pathname.includes("blog") && (x = "blogFooter", y = !0);
                var N = function() {
                    "false" === e.isMobileReq ? Object(b.a)("footer_desktop", "app_download", window.location.pathname) : Object(b.a)("footer_mob", "app_download", window.location.pathname)
                };
                return Object(h.jsxs)("div", {
                    className: "footer-inner",
                    children: [Object(h.jsxs)("div", {
                        className: "fh_all ".concat(x),
                        children: [Object(h.jsxs)("div", {
                            className: "fh_first",
                            children: [Object(h.jsxs)("div", {
                                className: "downloadPlayGoogle",
                                children: [y && Object(h.jsxs)("div", {
                                    className: "letUsMake",
                                    children: ["Loved what you read? You will also love our range of Gifts, Cakes, & Flowers on the ", Object(h.jsx)("span", {
                                        children: "FlowerAura app"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    className: "downloadApp_show",
                                    children: [!y && Object(h.jsx)("div", {
                                        className: "letUsMake",
                                        children: "Let us make you feel special"
                                    }), Object(h.jsx)("div", {
                                        className: "googleAppstore",
                                        children: Object(h.jsxs)("ul", {
                                            className: "flowerauraApplink",
                                            children: [Object(h.jsx)("li", {
                                                children: Object(h.jsx)("a", {
                                                    onClick: N,
                                                    href: a,
                                                    target: "_blank",
                                                    title: "Download App",
                                                    children: Object(h.jsx)(m.a, {
                                                        src: O,
                                                        srcset: "false" === e.isMobileReq ? Object(j.a)(O, 150, 44) : Object(j.a)(O, 160, 50),
                                                        alt: "Download App From Play Store",
                                                        title: "Download App",
                                                        noLazyLoad: !1
                                                    })
                                                })
                                            }), Object(h.jsx)("li", {
                                                children: Object(h.jsx)("a", {
                                                    onClick: N,
                                                    href: c,
                                                    target: "_blank",
                                                    title: "Download App",
                                                    children: Object(h.jsx)(m.a, {
                                                        src: g,
                                                        srcset: "false" === e.isMobileReq ? Object(j.a)(g, 150, 44) : Object(j.a)(g, 160, 50),
                                                        alt: "Download App From App Store",
                                                        title: "Download App",
                                                        noLazyLoad: !1
                                                    })
                                                })
                                            })]
                                        })
                                    }), Object(h.jsx)("img", {
                                        width: "100",
                                        height: "100",
                                        alt: "scanQr",
                                        src: "https://imgcdn.floweraura.com/fa-qr.png"
                                    })]
                                })]
                            }), !Object(u.a)("") && Object(h.jsx)("div", {
                                className: "fafooterVideoLink",
                                children: Object(h.jsx)(d.a, {
                                    videoUrl: "",
                                    youtubeImg: "https://imgcdn.floweraura.com/ourNews.jpg",
                                    height: "159"
                                })
                            })]
                        }), Object(h.jsxs)("div", {
                            className: "fh_third",
                            children: [Object(h.jsx)("div", {
                                className: "subscribe email-box-footer",
                                children: Object(h.jsx)("h3", {
                                    children: "Spread The Love On Social Media"
                                })
                            }), Object(h.jsx)("div", {
                                className: "social-warp",
                                children: Object(h.jsx)("ul", {
                                    children: n
                                })
                            })]
                        })]
                    }), "false" === e.isMobileReq ? Object(h.jsx)("div", {
                        className: "links-wrap fh_second",
                        children: Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: i
                        })
                    }) : Object(h.jsxs)("div", {
                        className: "links-wrap fh_second",
                        children: [Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: o
                        }), Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: l
                        })]
                    }), Object(h.jsxs)("div", {
                        className: "partner-container",
                        children: [Object(h.jsxs)("div", {
                            className: "floweraura_copyright",
                            children: [Object(h.jsx)("div", {
                                className: "logo_bottom",
                                children: Object(h.jsx)("img", {
                                    src: "https://imgcdn.floweraura.com/logo_web.svg",
                                    alt: "fa_logo"
                                })
                            }), "false" === e.isMobileReq && Object(h.jsxs)("span", {
                                children: ["Copyright. ", (new Date).getFullYear(), ". FA GIFTS PVT. LTD"]
                            })]
                        }), "false" === e.isMobileReq && Object(h.jsxs)("div", {
                            className: "we-accept",
                            children: [Object(h.jsx)("span", {
                                className: "label",
                                children: "We Accept:"
                            }), Object(h.jsx)("div", {
                                className: "pay-option",
                                children: Object(h.jsx)("img", {
                                    src: "https://imgcdn.floweraura.com/alloccasion/footer/desktop-payment-option.png",
                                    alt: "visa",
                                    title: "visa",
                                    height: "30",
                                    loading: "lazy",
                                    style: {
                                        width: "100%"
                                    }
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        851: function(e, t, a) {},
        957: function(e, t, a) {
            "use strict";
            var s = a(1),
                c = a(55),
                r = a(122),
                n = a(178),
                i = a(31),
                o = a(3),
                l = a(30),
                d = a(756),
                u = (a(851), a.p + "static/media/refresh.ce62815a.svg"),
                m = a.p + "static/media/cross.e1eb5721.svg",
                j = a(743),
                p = a(236),
                b = a.n(p),
                h = a(6),
                O = a(2),
                g = a.p + "static/media/whatsapp.ab9e8924.svg",
                f = a(0),
                v = function() {
                    return Object(f.jsxs)("div", {
                        className: "hello-message",
                        children: [Object(f.jsx)("span", {
                            className: "hello-title",
                            children: "Hello!"
                        }), Object(f.jsx)("span", {
                            className: "emoji"
                        })]
                    })
                },
                x = function(e) {
                    return Object(f.jsxs)("div", {
                        className: "helpYou-message",
                        children: [Object(f.jsx)("div", {
                            className: "hello-title",
                            children: "How we can help you?"
                        }), Object(f.jsx)("div", {
                            className: "need-order",
                            onClick: function() {
                                return e(2)
                            },
                            children: "I need to place order"
                        }), Object(f.jsx)("div", {
                            className: "already-order",
                            onClick: function() {
                                return e(1)
                            },
                            children: "I have already placed the order"
                        })]
                    })
                },
                y = function(e, t, a, s, c, r) {
                    var n = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "true",
                        i = "https://web.whatsapp.com/send?phone=".concat(c.phone),
                        l = "https://api.whatsapp.com/send?phone=".concat(c.phone);
                    return Object(f.jsx)(o.Fragment, {
                        children: Object(f.jsx)("div", {
                            className: "helpMsgCloseWindow",
                            children: Object(f.jsxs)("div", {
                                className: "last-details",
                                children: [Object(f.jsxs)("div", {
                                    className: "helpYou-message related-last-category",
                                    children: [Object(f.jsx)("h2", {
                                        className: "more-help",
                                        children: "Get more help"
                                    }), "true" === n ? Object(f.jsx)("div", {
                                        className: "need-order",
                                        children: Object(f.jsx)("a", {
                                            href: "tel:+9659389899",
                                            children: "Call Us"
                                        })
                                    }) : null, Object(f.jsx)("div", {
                                        className: "already-order",
                                        onClick: function() {
                                            e(2), s()
                                        },
                                        children: "Raise a new Query"
                                    }), "true" === n ? Object(f.jsx)("a", {
                                        target: "_blank",
                                        href: a || l,
                                        children: Object(f.jsxs)("div", {
                                            className: "already-order whatsappIconDiv",
                                            children: [Object(f.jsx)(j.LazyLoadImage, {
                                                src: g,
                                                alt: "whatsappIcon"
                                            }), "\xa0\xa0 Get updates on WhatsApp"]
                                        })
                                    }) : Object(f.jsxs)(f.Fragment, {
                                        children: [" ", Object(f.jsx)("a", {
                                            target: "_blank",
                                            href: t || i,
                                            children: Object(f.jsxs)("div", {
                                                className: "already-order whatsappIconDiv",
                                                children: [Object(f.jsx)(j.LazyLoadImage, {
                                                    src: g,
                                                    alt: "whatsappIcon"
                                                }), "\xa0\xa0 Get updates on WhatsApp"]
                                            })
                                        }), " "]
                                    })]
                                }), Object(f.jsxs)("div", {
                                    className: "close-window-last",
                                    onClick: function() {
                                        e(3), r()
                                    },
                                    children: ["Close Window", " "]
                                })]
                            })
                        })
                    })
                },
                N = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return Object(f.jsx)("div", {
                        className: "hello-message",
                        children: Object(f.jsx)("span", {
                            className: "hello-title error_message",
                            children: "".concat(e)
                        })
                    })
                },
                w = a(42),
                k = a.n(w),
                _ = a(11),
                S = a.n(_),
                C = a(13),
                D = a(239),
                I = a.n(D),
                T = a(17),
                L = a(738),
                M = a(8),
                F = a(14),
                P = null,
                q = function(e, t, a, r, n, i, o, l, d, u, m, j, p) {
                    return Object(f.jsx)("div", {
                        className: "details-confirm genie-preScale ticketIdGenerate_Form1",
                        children: Object(f.jsxs)("form", {
                            autoComplete: "off",
                            className: "ss_Form1",
                            onSubmit: e((function(e) {
                                if (r && r.length > 9) return null;
                                P = "false" === m ? "rsource=web" : "rsource=mob";
                                var t = {
                                        message: e.cityPin,
                                        funcName: null,
                                        messageType: 2
                                    },
                                    a = {
                                        message: "",
                                        funcName: "selectOccasionData",
                                        messageType: 1
                                    },
                                    o = {
                                        message: "",
                                        funcName: "ticketValidateMessage",
                                        messageType: 1
                                    },
                                    p = {
                                        message: "",
                                        funcName: "lastMessage",
                                        messageType: 1
                                    },
                                    b = Object(c.a)(r);
                                Y("Great, Where you to deliver ?", l), i(!0), T.d.get("/api/floweraura/fa/check_delivery?search=".concat(l)).then((function(e) {
                                    var r = e && e.data;
                                    i(!1), j(!0), d(r.error_message), r.success ? (i(!0), T.d.get("/api/floweraura/fa/giftfinder/filters?deliverto=".concat(l, "&").concat(P)).then((function(e) {
                                        var r = e.data && e.data.data;
                                        i(!1), u(r), e.data && e.data.success && (b.push(Object(s.a)({}, t)), b.push(Object(s.a)({}, a)), n(Object(c.a)(b)))
                                    })).catch((function(e) {
                                        console.log("error", e), i(!1)
                                    }))) : (b.push(Object(s.a)({}, o)), b.push(Object(s.a)({}, p))), n(Object(c.a)(b))
                                })).catch((function(e) {
                                    console.log("error", e), i(!1)
                                }))
                            })),
                            children: [Object(f.jsxs)("div", {
                                className: "details-category helpYou-message ticketIdGenerate_comment",
                                children: [Object(f.jsx)("h2", {
                                    children: "Great, Where you to deliver ?"
                                }), p ? Object(f.jsx)("input", {
                                    type: "text",
                                    ref: t({
                                        maxLength: 20,
                                        required: !0
                                    }),
                                    name: "cityPin",
                                    placeholder: "Enter City or Pin Code",
                                    defaultValue: l,
                                    readOnly: !0
                                }) : Object(f.jsx)("input", {
                                    type: "text",
                                    ref: t({
                                        maxLength: 20,
                                        required: !0
                                    }),
                                    name: "cityPin",
                                    placeholder: "Enter City or Pin Code",
                                    defaultValue: l,
                                    onChange: function(e) {
                                        return o(e.target.value)
                                    }
                                }), a.cityPin && Object(f.jsx)("div", {
                                    className: "error_message-account",
                                    children: "Please enter valid City or Pin Code*"
                                })]
                            }), Object(f.jsx)("input", {
                                className: p ? "needHelp_hideButton" : "confirm",
                                type: "submit"
                            })]
                        })
                    })
                },
                E = function(e, t, a, r, n, i, o) {
                    var l = function(e) {
                            r({
                                error: !1,
                                occasionName: e.target.value
                            })
                        },
                        d = null;
                    return Object(O.a)(a) || (d = a.occasions && a.occasions.map((function(e) {
                        return Object(f.jsx)("option", {
                            value: e.name,
                            children: e.name
                        }, e.id)
                    }))), Object(f.jsxs)("div", {
                        className: "details-confirm genie-preScale ticketIdGenerate_Form1",
                        children: [Object(f.jsxs)("div", {
                            className: "details-category helpYou-message ticketIdGenerate_comment",
                            children: [Object(f.jsx)("h2", {
                                children: "What's the occasion ?"
                            }), o ? Object(f.jsx)("select", {
                                className: "form-select",
                                onChange: function(e) {
                                    return l(e)
                                },
                                value: n.occasionName,
                                disabled: !0,
                                children: Object(f.jsx)("option", {
                                    value: n.occasionName,
                                    children: n.occasionName
                                })
                            }) : Object(f.jsxs)("select", {
                                className: "form-select",
                                onChange: function(e) {
                                    return l(e)
                                },
                                value: n.occasionName,
                                children: [Object(f.jsx)("option", {
                                    value: "0",
                                    selected: "selected",
                                    children: "Select occasion"
                                }), d]
                            }), n.error && Object(f.jsx)("div", {
                                className: "error_message-account",
                                children: "Please choose your occasion*"
                            })]
                        }), Object(f.jsx)("div", {
                            onClick: function() {
                                if (e && e.length > 11) return null;
                                if (Object(O.a)(n.occasionName)) r({
                                    occasionName: "",
                                    error: !0
                                });
                                else {
                                    var a = {
                                            message: n.occasionName,
                                            funcName: null,
                                            messageType: 2
                                        },
                                        o = Object(c.a)(e);
                                    o.push(Object(s.a)({}, a)), o.push(Object(s.a)({}, {
                                        message: "",
                                        funcName: "selectDeliveryDate",
                                        messageType: 1
                                    })), t(Object(c.a)(o)), i(!0), Y("What's the occasion ?", n.occasionName)
                                }
                            },
                            className: o ? "needHelp_hideButton" : "confirm",
                            children: "Submit "
                        })]
                    })
                },
                A = function(e, t, a, r, n, i, o, l) {
                    var d = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                a = e.getDate(),
                                s = e.getMonth() + 1,
                                c = e.getFullYear();
                            return a = +a <= 9 ? "0".concat(a) : a, s = +s <= 9 ? "0".concat(s) : s, "".concat(a).concat(t).concat(s).concat(t).concat(c)
                        },
                        u = function() {
                            var e = n.arriveDate;
                            if (Object(O.a)(e)) r((function(e) {
                                return Object(s.a)(Object(s.a)({}, e), {}, {
                                    openCalander: !i.openCalander
                                })
                            }));
                            else {
                                var t = e.split("/"),
                                    a = Number(t[0]),
                                    c = Number(t[1]) - 1,
                                    o = Number(t[2]);
                                r((function(e) {
                                    return Object(s.a)(Object(s.a)({}, e), {}, {
                                        openCalander: !i.openCalander,
                                        currentDate: new Date(o, c, a)
                                    })
                                }))
                            }
                        };
                    return Object(f.jsxs)("div", {
                        className: "details-confirm genie-preScale calenderGenieShow ticketIdGenerate_Form1",
                        children: [Object(f.jsxs)("div", {
                            className: "details-category helpYou-message ticketIdGenerate_comment",
                            children: [Object(f.jsx)("h2", {
                                children: "When you want to deliver ?"
                            }), l ? Object(f.jsx)("input", {
                                type: "text",
                                value: n.arriveDate,
                                id: "todayDate",
                                placeholder: "DD/MM/YYYY",
                                readOnly: !0
                            }) : Object(f.jsx)("input", {
                                type: "text",
                                value: n.arriveDate,
                                onClick: function() {
                                    return u()
                                },
                                id: "todayDate",
                                placeholder: "DD/MM/YYYY",
                                readOnly: !0
                            }), l ? Object(f.jsx)("em", {}) : Object(f.jsx)("em", {
                                onClick: function() {
                                    return u()
                                }
                            }), n.error && Object(f.jsx)("div", {
                                className: "error_message-account",
                                children: "Please choose arrive Date*"
                            }), i.openCalander ? Object(f.jsx)(I.a, {
                                value: i.currentDate,
                                onChange: function(e) {
                                    a({
                                        arriveDate: d(e),
                                        error: !1
                                    }), r({
                                        openCalander: !1
                                    })
                                },
                                minDate: new Date
                            }) : null]
                        }), Object(f.jsx)("div", {
                            onClick: function() {
                                if (e && e.length > 13) return null;
                                if (Object(O.a)(n.arriveDate)) a({
                                    arriveDate: "",
                                    error: !0
                                });
                                else {
                                    var r = {
                                            message: n.arriveDate,
                                            funcName: null,
                                            messageType: 2
                                        },
                                        i = Object(c.a)(e);
                                    i.push(Object(s.a)({}, r)), i.push(Object(s.a)({}, {
                                        message: "",
                                        funcName: "selectCategory",
                                        messageType: 1
                                    })), t(Object(c.a)(i)), o(!0), Y("When you want to deliver ?", n.arriveDate)
                                }
                            },
                            className: l ? "needHelp_hideButton" : "confirm",
                            children: "Submit "
                        })]
                    })
                },
                z = function(e, t, a, r, n, i, o, l) {
                    var d = null;
                    return Object(O.a)(n) || (d = (n.filter[2] && n.filter[2].data).map((function(n, d) {
                        return Object(f.jsx)("div", {
                            onClick: function() {
                                ! function(n) {
                                    if (e && e.length > 15) return null;
                                    P = "false" === l ? "rsource=web" : "rsource=mob";
                                    var d = {
                                            message: n,
                                            funcName: null,
                                            messageType: 2
                                        },
                                        u = {
                                            message: "",
                                            funcName: "bestSellerData",
                                            messageType: 1
                                        },
                                        m = Object(c.a)(e);
                                    a(!0), T.d.get("/api/floweraura/fa/giftfinder?deliverto=".concat(r, "&when=22-02-2022&occasion=").concat(i.occasionName, "&gift_category=").concat(n, "&").concat(P)).then((function(e) {
                                        var r = e.data && e.data.data;
                                        a(!1), o(r), e.data && e.data.success && (m.push(Object(s.a)({}, d)), m.push(Object(s.a)({}, u)), t(Object(c.a)(m)))
                                    })).catch((function(e) {
                                        console.log("error", e), a(!1)
                                    })), Y("What you want to deliver ?", n)
                                }(n.name)
                            },
                            className: "already-order",
                            children: n.name
                        }, d)
                    }))), Object(f.jsxs)("div", {
                        className: "helpYou-message related-category",
                        children: [Object(f.jsx)("h2", {
                            children: "What you want to deliver ?"
                        }), d]
                    })
                },
                R = function(e) {
                    var t = null;
                    return Object(O.a)(e) || (t = e && e.results.slice(0, 2).map((function(e, t) {
                        var a = e && e.image[0];
                        return Object(f.jsx)("li", {
                            onClick: function() {
                                return Y("Product Slider", "Product Click")
                            },
                            className: "productslider-item",
                            children: Object(f.jsxs)("a", {
                                href: "".concat(h.c, "/").concat(e.url),
                                children: [Object(f.jsx)("div", {
                                    className: "product_img",
                                    children: Object(f.jsx)(L.a, {
                                        src: a.src,
                                        srcset: a.src,
                                        alt: a.alt,
                                        title: a.title,
                                        height: "100%",
                                        width: "100%",
                                        noLazyLoad: !1
                                    })
                                }), Object(f.jsx)("div", {
                                    className: "prod_name",
                                    children: e.title
                                }), Object(f.jsxs)("div", {
                                    className: "prod_price",
                                    children: ["Rs ", e.sell_price]
                                })]
                            })
                        }, t)
                    }))), Object(f.jsxs)("div", {
                        className: "bestSeller_inner",
                        children: [Object(f.jsx)("h2", {
                            children: "Here are the best sellers for you"
                        }), Object(f.jsx)("div", {
                            className: "seller-item",
                            children: Object(f.jsx)("ul", {
                                className: "seller-slider",
                                children: t
                            })
                        }), Object(f.jsx)("div", {
                            onClick: function() {
                                return Y("Product Slider", "View All")
                            },
                            children: Object(f.jsx)("a", {
                                href: e.redirect_url,
                                className: "genie_all-Gifts",
                                children: "View All Gifts"
                            })
                        })]
                    })
                },
                Y = function(e, t) {
                    var a = {
                        action: e,
                        eventCategory: "Self Service - Pre Sales",
                        eventLabel: t
                    };
                    Object(M.f)(a), Object(F.d)("clickEvent", a)
                },
                H = a(123),
                V = a(12),
                G = S()({
                    loader: function() {
                        return Promise.all([a.e(0), a.e(4), a.e(10), a.e(9), a.e(11)]).then(a.bind(null, 357))
                    },
                    modules: ["../../Pages/UserLogin/DesktopPage"],
                    webpack: function() {
                        return [357]
                    },
                    loading: C.a
                }),
                B = {
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
            t.a = Object(l.c)((function(e) {
                return {
                    isMobileReq: e.pageData.isMobile,
                    siteHeaderSettings: e.settings
                }
            }))((function(e) {
                var t = Object(d.a)(),
                    a = t.register,
                    l = t.handleSubmit,
                    p = t.reset,
                    g = t.errors,
                    w = (t.setValue, Object(o.useState)("")),
                    _ = Object(i.a)(w, 2),
                    S = _[0],
                    C = _[1],
                    D = Object(o.useState)([{
                        message: "",
                        funcName: "helloMessage",
                        messageType: 1
                    }, {
                        message: "",
                        funcName: "askHelpMessage",
                        messageType: 1
                    }]),
                    I = Object(i.a)(D, 2),
                    T = I[0],
                    L = I[1],
                    M = Object(o.useState)(0),
                    F = Object(i.a)(M, 2),
                    P = F[0],
                    Y = F[1],
                    W = Object(o.useState)(0),
                    U = Object(i.a)(W, 2),
                    K = U[0],
                    J = U[1],
                    Q = Object(o.useState)([]),
                    $ = Object(i.a)(Q, 2),
                    X = $[0],
                    Z = $[1],
                    ee = Object(o.useState)(!1),
                    te = Object(i.a)(ee, 2),
                    ae = te[0],
                    se = te[1],
                    ce = Object(o.useState)(!1),
                    re = Object(i.a)(ce, 2),
                    ne = re[0],
                    ie = re[1],
                    oe = Object(o.useState)(null),
                    le = Object(i.a)(oe, 2),
                    de = le[0],
                    ue = le[1],
                    me = Object(o.useState)(""),
                    je = Object(i.a)(me, 2),
                    pe = je[0],
                    be = je[1],
                    he = Object(o.useState)(!1),
                    Oe = Object(i.a)(he, 2),
                    ge = Oe[0],
                    fe = Oe[1],
                    ve = Object(o.useState)(!1),
                    xe = Object(i.a)(ve, 2),
                    ye = xe[0],
                    Ne = xe[1],
                    we = Object(o.useState)(""),
                    ke = Object(i.a)(we, 2),
                    _e = ke[0],
                    Se = ke[1],
                    Ce = Object(o.useState)(""),
                    De = Object(i.a)(Ce, 2),
                    Ie = De[0],
                    Te = De[1],
                    Le = Object(o.useState)(""),
                    Me = Object(i.a)(Le, 2),
                    Fe = Me[0],
                    Pe = Me[1],
                    qe = Object(o.useState)(""),
                    Ee = Object(i.a)(qe, 2),
                    Ae = Ee[0],
                    ze = Ee[1],
                    Re = Object(o.useState)(""),
                    Ye = Object(i.a)(Re, 2),
                    He = Ye[0],
                    Ve = Ye[1],
                    Ge = Object(o.useState)(""),
                    Be = Object(i.a)(Ge, 2),
                    We = Be[0],
                    Ue = Be[1],
                    Ke = Object(o.useState)(!0),
                    Je = Object(i.a)(Ke, 2),
                    Qe = Je[0],
                    $e = Je[1],
                    Xe = Object(o.useState)([]),
                    Ze = Object(i.a)(Xe, 2),
                    et = Ze[0],
                    tt = Ze[1],
                    at = Object(o.useState)(""),
                    st = Object(i.a)(at, 2),
                    ct = st[0],
                    rt = st[1],
                    nt = Object(o.useState)(""),
                    it = Object(i.a)(nt, 2),
                    ot = it[0],
                    lt = it[1],
                    dt = Object(o.useState)(""),
                    ut = Object(i.a)(dt, 2),
                    mt = ut[0],
                    jt = ut[1],
                    pt = Object(o.useState)(!1),
                    bt = Object(i.a)(pt, 2),
                    ht = bt[0],
                    Ot = bt[1],
                    gt = Object(o.useState)(""),
                    ft = Object(i.a)(gt, 2),
                    vt = ft[0],
                    xt = ft[1],
                    yt = Object(o.useState)(""),
                    Nt = Object(i.a)(yt, 2),
                    wt = Nt[0],
                    kt = Nt[1],
                    _t = Object(o.useState)({}),
                    St = Object(i.a)(_t, 2),
                    Ct = St[0],
                    Dt = St[1],
                    It = Object(o.useState)(""),
                    Tt = Object(i.a)(It, 2),
                    Lt = Tt[0],
                    Mt = Tt[1],
                    Ft = Object(o.useState)(!1),
                    Pt = Object(i.a)(Ft, 2),
                    qt = Pt[0],
                    Et = Pt[1],
                    At = Object(o.useState)(""),
                    zt = Object(i.a)(At, 2),
                    Rt = zt[0],
                    Yt = zt[1],
                    Ht = Object(o.useState)(!1),
                    Vt = Object(i.a)(Ht, 2),
                    Gt = Vt[0],
                    Bt = Vt[1],
                    Wt = Object(o.useState)(!1),
                    Ut = Object(i.a)(Wt, 2),
                    Kt = Ut[0],
                    Jt = Ut[1],
                    Qt = Object(o.useState)(""),
                    $t = Object(i.a)(Qt, 2),
                    Xt = $t[0],
                    Zt = $t[1],
                    ea = Object(o.useState)({}),
                    ta = Object(i.a)(ea, 2),
                    aa = ta[0],
                    sa = ta[1],
                    ca = Object(o.useState)({
                        error: !1,
                        occasionName: ""
                    }),
                    ra = Object(i.a)(ca, 2),
                    na = ra[0],
                    ia = ra[1],
                    oa = Object(o.useState)({} || localStorage.getItem("dilip")),
                    la = Object(i.a)(oa, 2),
                    da = la[0],
                    ua = la[1],
                    ma = Object(o.useState)({
                        error: !1,
                        arriveDate: ""
                    }),
                    ja = Object(i.a)(ma, 2),
                    pa = ja[0],
                    ba = ja[1],
                    ha = Object(o.useState)({
                        openCalander: !1,
                        currentDate: new Date
                    }),
                    Oa = Object(i.a)(ha, 2),
                    ga = Oa[0],
                    fa = Oa[1],
                    va = Object(o.useState)(!1),
                    xa = Object(i.a)(va, 2),
                    ya = xa[0],
                    Na = xa[1],
                    wa = Object(o.useState)(!1),
                    ka = Object(i.a)(wa, 2),
                    _a = ka[0],
                    Sa = ka[1],
                    Ca = Object(o.useState)(!1),
                    Da = Object(i.a)(Ca, 2),
                    Ia = Da[0],
                    Ta = Da[1],
                    La = Object(o.useState)(!1),
                    Ma = Object(i.a)(La, 2),
                    Fa = Ma[0],
                    Pa = Ma[1],
                    qa = {
                        SERVICE_TYPE: 1 === +P ? "postOrder" : "preOrder",
                        preOrder: {
                            TICKET_INFO: "".concat(h.z, "/api/floweraura/fa/ticketpreorder"),
                            CREATE_TICKET: "".concat(h.z, "/api/floweraura/fa/createpreorderticket"),
                            VALIDATE_TICKET: "".concat(h.z, "/api/floweraura/fa/categorytktstatus"),
                            FIELDS: ["email", "phone"]
                        },
                        postOrder: {
                            TICKET_INFO: "".concat(h.z, "/api/floweraura/fa/ticketpostorder"),
                            CREATE_TICKET: "".concat(h.z, "/api/floweraura/fa/createpostorderticket"),
                            VALIDATE_TICKET: "".concat(h.z, "/api/floweraura/fa/categorytktstatuspo"),
                            FIELDS: ["email", "order_id"]
                        }
                    },
                    Ea = e && e.siteHeaderSettings,
                    Aa = null,
                    za = null,
                    Ra = null,
                    Ya = null;
                Object(O.a)(Ea) || (za = Ea.isUserAnonymous, Aa = Ea.user_info), Object(O.a)(Aa) || (Ra = Aa.uid, Ya = Aa.mail), Object(o.useEffect)((function() {
                    Te(window.location.href), e.token && Ra && !za && Va()
                }), [e.token, za, Ra]);
                var Ha = function() {
                        $e(!Qe)
                    },
                    Va = function() {
                        var t = Object(n.a)(Object(r.a)().mark((function t() {
                            var a, s;
                            return Object(r.a)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return a = {
                                            Authorization: e.token || ""
                                        }, s = {
                                            user_id: Ra,
                                            merchant: 1
                                        }, e.setIsLoading(!0), t.next = 5, b.a.post("".concat(h.z, "/api/floweraura/fa/getopentickets"), s, {
                                            headers: a
                                        }).then((function(t) {
                                            var a = t.data && t.data.data;
                                            Dt(a), e.setIsLoading(!1)
                                        })).catch((function(e) {
                                            console.log({
                                                err: e
                                            })
                                        }));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                var Ga = function(e) {
                        e && et.push(e);
                        var t, a, s = (t = et, a = "nid", Object(c.a)(new Map(t.map((function(e) {
                            return [e[a], e]
                        }))).values()));
                        rt(s)
                    },
                    Ba = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (!(T && T.length > 2)) {
                            Y(e);
                            var t = Object(c.a)(T);
                            t.push({
                                message: 1 === e ? "I have already placed the order" : "I need to place order",
                                funcName: null,
                                messageType: 2
                            }), t.push({
                                message: "",
                                funcName: "_generateForm",
                                messageType: 1
                            }), L(Object(c.a)(t))
                        }
                    },
                    Wa = function(t) {
                        var a = {
                                Authorization: e.token || ""
                            },
                            s = {
                                ticket_id: Ct.tickets[0].id,
                                merchant: 1,
                                comment: t.comment
                            };
                        e.setIsLoading(!0), b.a.post("".concat(h.z, "/api/floweraura/fa/saveticketcomment"), s, {
                            headers: a
                        }).then((function(t) {
                            var a = t && t.data;
                            Mt(a.message), e.setIsLoading(!1), a && a.success && (p({
                                comment: ""
                            }), Et(!0), setTimeout((function() {
                                Et(!1)
                            }), 3e3), ds(s))
                        })).catch((function(t) {
                            console.log({
                                err: t
                            }), e.setIsLoading(!1)
                        }))
                    },
                    Ua = function(e, t) {
                        return e === t
                    },
                    Ka = function() {
                        if (Ct.openTicket) {
                            var e = us();
                            return Object(f.jsxs)("form", {
                                autoComplete: "off",
                                className: "ss_Form1",
                                onSubmit: l(Wa),
                                children: [Object(f.jsxs)("div", {
                                    className: "details-category helpYou-message ticketIdGenerate_comment",
                                    children: [Object(f.jsxs)("div", {
                                        children: ["Hi ", Aa.name, ", we found ticket id ", Object(f.jsx)("span", {
                                            children: Ct.tickets[0].id
                                        }), " is already is in open state against your order no ", Object(f.jsx)("span", {
                                            children: Ct.tickets[0].order_id
                                        }), " raised by you on ", Object(f.jsx)("span", {
                                            children: Ct.tickets[0].dtime
                                        })]
                                    }), Object(f.jsx)("input", {
                                        type: "text",
                                        className: "email-number",
                                        name: "comment",
                                        placeholder: "Comment",
                                        autoComplete: "off",
                                        ref: a({
                                            required: !0,
                                            minLength: 30,
                                            maxLength: 250
                                        }),
                                        defaultValue: e.comment || ""
                                    }), (t = g.comment && g.comment.type, "required" === t ? Object(f.jsx)("p", {
                                        className: "error_message-account",
                                        children: "Message is required*"
                                    }) : "minLength" === t ? Object(f.jsx)("p", {
                                        className: "error_message-account",
                                        children: "Minimum 30 characters required*"
                                    }) : "maxLength" === t ? Object(f.jsx)("p", {
                                        className: "error_message-account",
                                        children: "Maximum 250 characters required*"
                                    }) : void 0)]
                                }), Object(f.jsx)("input", {
                                    className: "confirm",
                                    type: "submit",
                                    value: "Comment"
                                })]
                            })
                        }
                        return Object(O.a)(Ct.orders) ? Object(f.jsx)("div", {
                            className: "not_found-ticket need-place",
                            children: "There is no order against this email id"
                        }) : Object(f.jsxs)("form", {
                            autoComplete: "off",
                            className: "ss_Form1",
                            onSubmit: l(Za),
                            children: [Object(f.jsxs)("div", {
                                className: "helpYou-message ticketIdGenerate_order",
                                children: [Object(f.jsxs)("div", {
                                    className: "lastspecificData orderId_content_show",
                                    children: [Object(f.jsx)("h2", {
                                        children: "Please select an Order ID"
                                    }), Object(f.jsx)("ul", {
                                        children: Ct.orders && Ct.orders.map((function(e) {
                                            return Object(f.jsx)("li", {
                                                children: Object(f.jsxs)("label", {
                                                    className: "input_box-show",
                                                    children: [e.id, ya ? Object(f.jsx)("input", {
                                                        ref: a({
                                                            required: !0
                                                        }),
                                                        name: "allData",
                                                        disabled: !0,
                                                        type: "radio",
                                                        defaultChecked: Ua(+e.id, +vt)
                                                    }) : Object(f.jsx)("input", {
                                                        ref: a({
                                                            required: !0
                                                        }),
                                                        name: "allData",
                                                        onClick: function() {
                                                            xt(e.id), C("")
                                                        },
                                                        type: "radio",
                                                        defaultChecked: Ua(+e.id, +vt)
                                                    }), Object(f.jsx)("span", {
                                                        className: "radio_checkmark"
                                                    })]
                                                })
                                            })
                                        }))
                                    }), "Other" === vt && Object(f.jsx)("input", {
                                        type: "number",
                                        ref: a({
                                            required: !0,
                                            pattern: /\d+/
                                        }),
                                        name: "orderNumber",
                                        defaultValue: wt,
                                        onChange: function(e) {
                                            return kt(e.target.value)
                                        }
                                    }), g.allData && Object(f.jsx)("div", {
                                        className: "error_message-account",
                                        children: "Order Id is mandatory*"
                                    }), g.orderNumber && Object(f.jsx)("div", {
                                        className: "error_message-account",
                                        children: "Please enter valid Order Id*"
                                    })]
                                }), S && Object(f.jsx)("p", {
                                    className: "formError",
                                    children: S
                                })]
                            }), Object(f.jsx)("input", {
                                className: ya ? "needHelp_hideButton" : "confirm",
                                type: "submit"
                            })]
                        });
                        var t
                    },
                    Ja = function() {
                        return Object(f.jsxs)("div", {
                            className: "details-confirm ticketIdGenerate_Form1",
                            children: [qt && Object(f.jsx)("div", {
                                className: "flex account_message-update items-center text-white text-sm font-bold px-4 py-3",
                                role: "alert",
                                children: Object(f.jsx)("p", {
                                    className: "mb-0 pb-0",
                                    children: Lt
                                })
                            }), za ? Object(f.jsx)("div", {
                                onClick: function() {
                                    return e = !0, Object(H.a)("Hello!", "Please login to continue", !1), Object(V.p)("shown", "loginpopup", window.location.pathname), void Ot(e);
                                    var e
                                },
                                className: "LoginToContinue",
                                children: "Login To Continue"
                            }) : Ka()]
                        })
                    },
                    Qa = function(e, t) {
                        return "email" === e ? "email" : "true" === t ? "tel" : "number"
                    },
                    $a = null;
                $a = ya ? "needHelp_hideButton" : "confirm";
                var Xa = function() {
                        if (0 === P) return null;
                        var t = qa[qa.SERVICE_TYPE].FIELDS.map((function(t) {
                            var c = {
                                required: !0
                            };
                            "email" === t ? c.pattern = {
                                value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                                message: "Please enter valid email id"
                            } : "phone" !== t && "order_id" !== t || (c.minLength = {
                                value: "phone" === t ? 8 : 6,
                                message: "Please enter valid ".concat(t)
                            }, c.maxLength = {
                                value: 15,
                                message: "Please enter valid ".concat(t)
                            });
                            var r = t.replace("_", "");
                            r = r.charAt(0).toUpperCase() + r.slice(1);
                            var n = us();
                            return Object(f.jsxs)(o.Fragment, {
                                children: [ya ? Object(f.jsx)("input", {
                                    type: Qa(t, e.isMobileReq),
                                    className: "email-number",
                                    name: t,
                                    placeholder: r,
                                    autoComplete: "off",
                                    readOnly: !0,
                                    size: "60",
                                    ref: a(Object(s.a)({}, c)),
                                    defaultValue: n[t] || ""
                                }) : Object(f.jsx)("input", {
                                    type: Qa(t, e.isMobileReq),
                                    className: "email-number",
                                    name: t,
                                    placeholder: r,
                                    autoComplete: "off",
                                    size: "60",
                                    ref: a(Object(s.a)({}, c)),
                                    defaultValue: n[t] || ""
                                }), g[t] && "required" === g[t].type && Object(f.jsx)("p", {
                                    className: "required-error",
                                    children: "This field is required."
                                }), g[t] && "pattern" === g[t].type && Object(f.jsx)("p", {
                                    className: "required-error",
                                    children: g[t].message
                                }), g[t] && "minLength" === g[t].type && Object(f.jsx)("p", {
                                    className: "required-error",
                                    children: g[t].message
                                }), g[t] && "maxLength" === g[t].type && Object(f.jsx)("p", {
                                    className: "required-error",
                                    children: g[t].message
                                })]
                            }, t)
                        }));
                        return Object(f.jsxs)(f.Fragment, {
                            children: [2 === +P ? Object(f.jsx)("form", {
                                onSubmit: l(Za),
                                className: "ss_Form1",
                                children: Object(f.jsx)("div", {
                                    className: "details-confirm",
                                    children: Object(f.jsxs)(f.Fragment, {
                                        children: [Object(f.jsxs)("div", {
                                            className: "helpYou-message details-category",
                                            children: [Object(f.jsx)("h2", {
                                                children: "Please enter your detail"
                                            }), t, S && Object(f.jsx)("p", {
                                                className: "formError",
                                                children: S
                                            })]
                                        }), Object(f.jsx)("input", {
                                            className: $a,
                                            type: "submit"
                                        })]
                                    })
                                })
                            }) : Ja(), Object(f.jsx)("div", {
                                children: Object(f.jsx)(k.a, {
                                    isOpen: ht,
                                    style: B,
                                    contentLabel: "userLoginModalLabel",
                                    className: "userLoginModal",
                                    parentClass: "ishimdar",
                                    children: Object(f.jsx)(G, {
                                        closeUserLogin: function() {
                                            return Ot(!1)
                                        },
                                        fromSelfService: !0
                                    })
                                })
                            })]
                        })
                    },
                    Za = function(t) {
                        if (!(T && T.length > 4)) {
                            C(""), ue(Object(s.a)({}, t));
                            var a = qa[qa.SERVICE_TYPE].TICKET_INFO,
                                r = {
                                    Authorization: e.token || ""
                                };
                            1 === +P && (t = "Other" === vt ? {
                                email: Ya,
                                order_id: wt
                            } : {
                                email: Ya,
                                order_id: vt
                            }), e.setIsLoading(!0), b.a.post(a, Object(s.a)({}, t), {
                                headers: r
                            }).then((function(a) {
                                var s = a.data,
                                    r = s.status,
                                    n = s.categoryData;
                                if (e.setIsLoading(!1), "suceess" === r && n) {
                                    Z(Object(c.a)(n));
                                    var i = Object(c.a)(T);
                                    i.push({
                                        message: "",
                                        funcName: "renderParentCategory",
                                        messageType: 1
                                    }), Na(!0), L(Object(c.a)(i)), ds(t)
                                } else {
                                    var o = a.data.error;
                                    C(o), kt("")
                                }
                            })).catch((function(t) {
                                console.log("error", t), e.setIsLoading(!1)
                            }))
                        }
                    },
                    es = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = null;
                        if (X) {
                            var a = null === K || 0 === K ? 0 : K.id,
                                s = null;
                            (s = null === e ? X.filter((function(e) {
                                return +e.Parent_id === +a
                            })) : X.filter((function(t) {
                                return +t.Parent_id === +e
                            }))) && (t = s.map((function(e) {
                                return Object(f.jsx)("div", {
                                    className: "already-order",
                                    onClick: function() {
                                        return ss(e)
                                    },
                                    children: e.name
                                }, e.id)
                            })), K && Array.isArray(s) && 0 === s.length && !1 === ae && se(!0))
                        }
                        return Object(f.jsxs)("div", {
                            className: "helpYou-message related-category",
                            children: [Object(f.jsx)("h2", {
                                children: "Please choose related category"
                            }), t]
                        })
                    },
                    ts = function(e, t) {
                        var a = {
                            phone: 0,
                            body: "Not received order",
                            categoryid: e.id,
                            subject: e.name,
                            priority: e.priority || "high"
                        };
                        t && is(a)
                    },
                    as = function(e) {
                        if (Gt) return Object(f.jsxs)("div", {
                            children: [Object(f.jsxs)("div", {
                                className: "helpYou-message related-category",
                                children: [Object(f.jsx)("h2", {
                                    children: "Show Order Status"
                                }), Object(f.jsx)("div", {
                                    className: "cursor-default already-order",
                                    children: Rt
                                })]
                            }), e && es()]
                        })
                    },
                    ss = function() {
                        var e = Object(n.a)(Object(r.a)().mark((function e() {
                            var t, a, n, i = arguments;
                            return Object(r.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(0 === +(t = i.length > 0 && void 0 !== i[0] ? i[0] : null).Parent_id && T.length > 5)) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 5:
                                        if (!(+t.Parent_id > 0 && T.length > 7)) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 7:
                                        if (a = !0, !(+t.Parent_id > 0) || Kt || "Need assistance in placing order" === t.name) {
                                            e.next = 13;
                                            break
                                        }
                                        return e.next = 11, rs(+t.id);
                                    case 11:
                                        !1 === e.sent && (a = !1);
                                    case 13:
                                        0 === +t.Parent_id && "My order status" === t.name && cs(t), (n = Object(c.a)(T)).push({
                                            message: t.name,
                                            funcName: null,
                                            messageType: 2
                                        }), 0 === +t.Parent_id ? n.push({
                                            message: "",
                                            funcName: "renderChildCategory",
                                            messageType: 1
                                        }) : a && "Need assistance in placing order" !== t.name ? n.push({
                                            message: "",
                                            funcName: "generateTicketForm",
                                            messageType: 1
                                        }) : "Need assistance in placing order" === t.name ? n.push({
                                            message: "",
                                            funcName: "pincodeForm",
                                            messageType: 1
                                        }) : (n.push({
                                            message: "",
                                            funcName: "ticketValidateMessage",
                                            messageType: 1
                                        }), n.push({
                                            message: "",
                                            funcName: "lastMessage",
                                            messageType: 1
                                        })), L(Object(c.a)(n)), J(Object(s.a)({}, t)), "" === _e ? Se(t.name) : (Se("".concat(_e, " | ").concat(t.name)), ze(t.heading));
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }(),
                    cs = function() {
                        var t = Object(n.a)(Object(r.a)().mark((function t() {
                            var a, c, n, i, o, l = arguments;
                            return Object(r.a)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(a = l.length > 0 && void 0 !== l[0] ? l[0] : null)) {
                                            t.next = 10;
                                            break
                                        }
                                        return c = {
                                            Authorization: e.token || ""
                                        }, n = null, i = {
                                            merchant: 1,
                                            user_id: Ra,
                                            email: Ya,
                                            cat_id: +a.id
                                        }, n = "Other" === vt ? {
                                            order_id: wt
                                        } : {
                                            order_id: vt
                                        }, o = "".concat(h.z, "/api/floweraura/fa/getorderstatus"), e.setIsLoading(!0), t.next = 10, b.a.post(o, Object(s.a)(Object(s.a)({}, n), i), {
                                            headers: c
                                        }).then((function(t) {
                                            var s = t.data && t.data.data;
                                            e.setIsLoading(!1), Yt(s.message), Bt(!0), ts(a, s.createTicket), Jt(s.isDelivered)
                                        })).catch((function(t) {
                                            console.log("error", t), e.setIsLoading(!1)
                                        }));
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    rs = function() {
                        var t = Object(n.a)(Object(r.a)().mark((function t() {
                            var a, c, n, i, o, l = arguments;
                            return Object(r.a)().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(a = l.length > 0 && void 0 !== l[0] ? l[0] : null)) {
                                            t.next = 12;
                                            break
                                        }
                                        return c = {
                                            Authorization: e.token || ""
                                        }, n = Object(s.a)({}, de), 1 === +P && (n = "Other" === vt ? {
                                            order_id: wt
                                        } : {
                                            order_id: vt
                                        }), n.cid = a, i = qa[qa.SERVICE_TYPE].VALIDATE_TICKET, o = !0, e.setIsLoading(!0), t.next = 11, b.a.post(i, Object(s.a)({}, n), {
                                            headers: c
                                        }).then((function(t) {
                                            var a = t.data,
                                                s = a.status,
                                                c = a.error;
                                            a.ticketid;
                                            Ve(t.data.displaymsg), e.setIsLoading(!1);
                                            var r = t.data.productdata,
                                                n = void 0 === r ? [] : r;
                                            Ue(n), 403 === +s && (be(c), o = !1), n.length > 0 && $e(!1)
                                        })).catch((function(t) {
                                            console.log("error", t), e.setIsLoading(!1)
                                        }));
                                    case 11:
                                        return t.abrupt("return", o);
                                    case 12:
                                        return t.abrupt("return", !0);
                                    case 13:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }(),
                    ns = function() {
                        var e = 0 != K.attachmentmandatory;
                        return Object(f.jsx)("form", {
                            onSubmit: l(is),
                            className: "ss_Form2",
                            children: Object(f.jsxs)("div", {
                                className: "details-confirm",
                                children: [He && Object(f.jsx)("div", {
                                    className: "helpYou-message details-category",
                                    children: Object(f.jsx)("h2", {
                                        children: He
                                    })
                                }), de && de.order_id && Object(f.jsx)(f.Fragment, {
                                    children: Object(O.a)(We) ? "" : Object(f.jsxs)("div", {
                                        className: "product-slection-message",
                                        children: ["Awsm! We got some products with this Order ID (", de.order_id, ")"]
                                    })
                                }), Object(O.a)(We) ? "" : Object(f.jsxs)("div", {
                                    className: "product-list-area",
                                    children: [Object(f.jsx)("span", {
                                        className: "choose-product-title",
                                        children: "Please choose your product"
                                    }), We && We.map((function(e) {
                                        return Object(f.jsxs)("div", {
                                            style: {
                                                marginBottom: "10px"
                                            },
                                            children: [Object(f.jsx)("div", {
                                                children: Object(f.jsx)(j.LazyLoadImage, {
                                                    src: e.imageurl,
                                                    width: "90px",
                                                    height: "90px"
                                                })
                                            }), Object(f.jsx)("div", {
                                                className: "product-name",
                                                children: e.title
                                            }), Object(f.jsx)("div", {
                                                className: "checkbox-placement",
                                                children: Object(f.jsxs)("label", {
                                                    className: "container",
                                                    children: [Object(f.jsx)("input", {
                                                        type: "checkbox",
                                                        onChange: function(t) {
                                                            return Ga(e)
                                                        },
                                                        disabled: Qe
                                                    }), Object(f.jsx)("span", {
                                                        className: "checkmark"
                                                    })]
                                                })
                                            })]
                                        })
                                    }))]
                                }), !Qe && de.order_id && We.length > 0 && Object(f.jsx)("input", {
                                    type: "submit",
                                    className: "confirm",
                                    value: "Confirm",
                                    onClick: Ha
                                }), Qe && Object(f.jsxs)("div", {
                                    className: "helpYou-message details-category",
                                    children: [Ae ? Object(f.jsx)(f.Fragment, {
                                        children: Object(f.jsx)("h2", {
                                            children: Ae
                                        })
                                    }) : Object(f.jsx)(f.Fragment, {
                                        children: Object(f.jsx)("h2", {
                                            children: "Please enter your detail"
                                        })
                                    }), ge ? Object(f.jsx)("textarea", {
                                        type: "text",
                                        className: "email-number for_address",
                                        name: "body",
                                        placeholder: "Brief Description..",
                                        autoComplete: "off",
                                        readOnly: !0,
                                        size: "60",
                                        ref: a({
                                            required: !0
                                        })
                                    }) : Object(f.jsx)("textarea", {
                                        type: "text",
                                        className: "email-number for_address",
                                        name: "body",
                                        placeholder: "Brief Description..",
                                        autoComplete: "off",
                                        size: "60",
                                        ref: a({
                                            required: !0
                                        })
                                    }), g.body && Object(f.jsx)("p", {
                                        className: "required-error",
                                        children: "This field is required."
                                    }), Object(f.jsxs)("div", {
                                        className: "image-upload",
                                        children: [ge ? Object(f.jsx)("input", {
                                            id: "uploadimage",
                                            type: "file",
                                            name: "files",
                                            disabled: !0,
                                            accept: "image/jpg, image/jpeg, image/png"
                                        }) : Object(f.jsx)("input", {
                                            id: "uploadimage",
                                            type: "file",
                                            name: "files",
                                            accept: "image/jpg, image/jpeg, image/png",
                                            onChange: function(e) {
                                                return function(e) {
                                                    if (!Object(O.a)(e)) {
                                                        var t = e[0];
                                                        t.size / 1024 / 1024 > 8 ? Pe("File must be less than 7MB") : t.size < 54208 ? Pe("File must be greater than 50KB") : ["image/jpeg", "image/jpg", "image/png"].includes(t.type) ? Pe("") : Pe("Files only with extensions :- png, jpg, jpeg are allowed")
                                                    }
                                                }(e.target.files)
                                            },
                                            ref: a({
                                                required: e
                                            })
                                        }), Fe || g.files ? Object(f.jsxs)("p", {
                                            className: "required-error",
                                            children: [" ", g.files ? "This field is required." : Fe, " "]
                                        }) : null]
                                    }), Object(f.jsx)("div", {
                                        className: "ticketMessage",
                                        children: Object(f.jsx)("p", {
                                            children: ne
                                        })
                                    })]
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "subject",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: _e,
                                    readOnly: !0
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "categoryid",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: +K.id,
                                    readOnly: !0
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "priority",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: K.priority || "high",
                                    readOnly: !0
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "email",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: de.email || "",
                                    readOnly: !0
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "phone",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: de.phone || 0,
                                    readOnly: !0
                                }), Object(f.jsx)("input", {
                                    type: "hidden",
                                    name: "orderid",
                                    ref: a({
                                        required: !1
                                    }),
                                    value: de.order_id || 0,
                                    readOnly: !0
                                }), Qe && Object(f.jsx)("input", {
                                    className: ge ? "needHelp_hideButton" : "confirm",
                                    type: "submit"
                                })]
                            })
                        })
                    },
                    is = function(t) {
                        if (!(T && T.length > 9) && !0 !== ye && !0 !== ge) {
                            var a = ct && ct.map((function(e) {
                                    return e.nid
                                })),
                                s = new FormData;
                            s.append("phone", t.phone), s.append("body", t.body), s.append("subject", t.subject), s.append("categoryid", t.categoryid), s.append("priority", t.priority), 1 === +P ? ("Other" === vt ? s.append("orderid", wt) : s.append("orderid", vt), s.append("email", Ya)) : (s.append("orderid", t.orderid), s.append("email", t.email)), s.append("nid", a), s.append("uid", Ra), Object(O.a)(t.files) || s.append("files", t.files[0]);
                            var r = qa[qa.SERVICE_TYPE].CREATE_TICKET,
                                n = {
                                    Authorization: e.token || "",
                                    "content-type": "multipart/form-data"
                                };
                            Ne(!0), 1 === +P && (t.subject = "Other" === vt ? "".concat(wt, " | ").concat(_e || t.subject) : "".concat(vt, " | ").concat(_e || t.subject), s.append("subject", t.subject)), e.setIsLoading(!0), b.a.post(r, s, {
                                headers: n
                            }).then((function(a) {
                                var s, r = a.data,
                                    n = r.error,
                                    i = (r.message, r.data),
                                    o = i.TicketId,
                                    l = i.comment,
                                    d = i.uploadimagepath;
                                if (lt(a.data.data.whatsapplink.mobile), jt(a.data.data.whatsapplink.web), e.setIsLoading(!1), !n) {
                                    var u = Object(c.a)(T),
                                        m = {
                                            img: d ? Object(f.jsx)("img", {
                                                src: d,
                                                title: "customer uploaded image"
                                            }) : "",
                                            htmlBreak: Object(f.jsx)("br", {}),
                                            body: Object(f.jsx)("span", {
                                                className: "mesg",
                                                children: l
                                            })
                                        };
                                    u.push({
                                        message: Object(f.jsxs)("div", {
                                            className: "message-data",
                                            children: [m.body, " ", m.htmlBreak, " ", m.img]
                                        }),
                                        funcName: null,
                                        messageType: 2
                                    }), u.push({
                                        message: (s = o, Object(f.jsx)("div", {
                                            className: "hello-message",
                                            children: Object(f.jsxs)("span", {
                                                className: "hello-title",
                                                children: ["Thank you for writing to us. Your query has been registered with us against ", Object(f.jsxs)("strong", {
                                                    children: ["ticket ", "".concat(s)]
                                                }), " , one of our specialist will reach out to you with a resolution to your satisfaction in next 2 business hours."]
                                            })
                                        })),
                                        funcName: "ticketMessage",
                                        messageType: 1
                                    }), u.push({
                                        message: "",
                                        funcName: "lastMessage",
                                        messageType: 1
                                    }), L(Object(c.a)(u)), fe(!0), ds(t)
                                }
                                Ne(!1)
                            })).catch((function(t) {
                                console.log("error", t), e.setIsLoading(!1)
                            }))
                        }
                    },
                    os = function() {
                        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null) {
                            case "helloMessage":
                                return v();
                            case "askHelpMessage":
                                return x(Ba);
                            case "_generateForm":
                                return Xa();
                            case "renderParentCategory":
                                return es(0);
                            case "renderChildCategory":
                                if (0 !== +K.Parent_id) return es(K.Parent_id);
                                if (0 === +K.Parent_id) return Gt ? as(Kt) : es();
                            case "pincodeForm":
                                return q(l, a, g, Object(c.a)(T), L, e.setIsLoading, Zt, Xt, be, sa, e.isMobileReq, Sa, _a);
                            case "selectOccasionData":
                                return E(Object(c.a)(T), L, aa, ia, na, Ta, Ia);
                            case "selectDeliveryDate":
                                return A(Object(c.a)(T), L, ba, fa, pa, ga, Pa, Fa);
                            case "selectCategory":
                                return z(Object(c.a)(T), L, e.setIsLoading, Xt, aa, na, ua, e.isMobileReq);
                            case "bestSellerData":
                                return R(da);
                            case "generateTicketForm":
                                return ns();
                            case "lastMessage":
                                return y(ms, mt, ot, Va, de, js, e.isMobileReq);
                            case "ticketValidateMessage":
                                return N(pe);
                            default:
                                return null
                        }
                    },
                    ls = function() {
                        $e(!0);
                        var e = [];
                        e.push({
                            message: "",
                            funcName: "helloMessage",
                            messageType: 1
                        }), e.push({
                            message: "",
                            funcName: "askHelpMessage",
                            messageType: 1
                        }), C(""), L([].concat(e)), Se(""), Ne(!1), fe(!1), be(""), ue(null), ie(!1), se(!1), Z([]), J(0), Y(0), tt([]), Bt(!1), Jt(!1), kt(""), xt(""), Zt(""), ia({}), ba({}), ua({}), fa({}), Na(!1), Sa(!1), Ta(!1), Pa(!1), localStorage.removeItem("needhelpformdata")
                    },
                    ds = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if ("object" === typeof e && Object.keys(e).length) {
                            var t = localStorage.getItem("needhelpformdata") || null;
                            if (t) {
                                var a = JSON.parse(t),
                                    s = Object.assign(a, e);
                                localStorage.setItem("needhelpformdata", JSON.stringify(s))
                            } else localStorage.setItem("needhelpformdata", JSON.stringify(e))
                        }
                    },
                    us = function() {
                        var e = localStorage.getItem("needhelpformdata") || {};
                        return "object" === typeof e && 0 === Object.keys(e).length ? {} : e ? JSON.parse(e) : {}
                    },
                    ms = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        t > 0 && (2 === +t ? ls() : 3 === +t && e.close())
                    },
                    js = function() {
                        !0 === ge && (localStorage.removeItem("needhelpformdata"), localStorage.removeItem("needhelp")), e.close()
                    };
                Object(o.useEffect)((function() {
                    var e = localStorage.getItem("needhelp") || "";
                    if (!Object(O.a)(e)) {
                        var t = JSON.parse(e);
                        Object.keys(t).length && (C(t.formError), L(t.messageList), Y(t.serviceType), J(t.selectedCategory), Z(t.categories), se(t.showTicketForm), ie(t.ticketFormMessage), ue(t.userData), be(t.validateTicketMessage), fe(t.ticketSubmit), Ne(t.ticketSubmitLoading), Se(t.subject), Te(t.path), Pe(t.imageValidation), ze(t.subjectHeading), Ve(t.displayMessage), Ue(t.productList), $e(t.showBox), tt(t.productData), rt(t.sendToLastForm), lt(t.whatsAppLinkforMobile), jt(t.whatsAppLinkforDesktop), Ot(t.modalIsOpen), xt(t.orderData), kt(t.otherId), Dt(t.tickets), Mt(t.successMessage), Et(t.showStatus), Yt(t.orderStatus), Bt(t.checkStatus), Jt(t.isDelivered), Zt(t.cityPincode), sa(t.occasionData), ua(t.sellersData), ia(t.occasionValue), ba(t.dateDetails), Na(t.submitMobile), Sa(t.submitPincode), Ta(t.submitOccasion), Pa(t.submitDate))
                    }
                }), []), Object(o.useEffect)((function() {
                    var e = {
                            formError: S,
                            messageList: T,
                            serviceType: P,
                            selectedCategory: K,
                            categories: X,
                            showTicketForm: ae,
                            ticketFormMessage: ne,
                            userData: de,
                            validateTicketMessage: pe,
                            ticketSubmit: ge,
                            ticketSubmitLoading: ye,
                            subject: _e,
                            path: Ie,
                            imageValidation: Fe,
                            subjectHeading: Ae,
                            displayMessage: He,
                            productList: We,
                            showBox: Qe,
                            productData: et,
                            sendToLastForm: ct,
                            whatsAppLinkforMobile: ot,
                            whatsAppLinkforDesktop: mt,
                            modalIsOpen: ht,
                            orderData: vt,
                            otherId: wt,
                            tickets: Ct,
                            successMessage: Lt,
                            showStatus: qt,
                            orderStatus: Rt,
                            checkStatus: Gt,
                            isDelivered: Kt,
                            cityPincode: Xt,
                            occasionData: aa,
                            occasionValue: na,
                            sellersData: da,
                            dateDetails: pa,
                            submitMobile: ya,
                            submitPincode: _a,
                            submitOccasion: Ia,
                            submitDate: Fa
                        },
                        t = JSON.stringify(e);
                    localStorage.setItem("needhelp", t)
                }), [T]);
                var ps = Ie.includes("fa-source=app");
                return Object(f.jsx)("div", {
                    className: "needHelpPage",
                    children: Object(f.jsx)("div", {
                        className: "need-header-content",
                        children: Object(f.jsxs)("div", {
                            className: "need-show",
                            children: [ps ? null : Object(f.jsxs)("div", {
                                className: "header-inner",
                                children: [Object(f.jsx)("div", {
                                    className: "logo",
                                    children: Object(f.jsx)("img", {
                                        src: "https://imgcdn.floweraura.com/logolist/logo.svg",
                                        alt: "Floweraura.com - Online Flower Delivery"
                                    })
                                }), Object(f.jsxs)("div", {
                                    className: "reload-close",
                                    children: [Object(f.jsx)("div", {
                                        className: "reload-image",
                                        onClick: ls,
                                        children: Object(f.jsx)("img", {
                                            src: u,
                                            alt: "reload"
                                        })
                                    }), Object(f.jsx)("div", {
                                        onClick: js,
                                        className: "close-image",
                                        children: Object(f.jsx)("img", {
                                            src: m,
                                            alt: "close"
                                        })
                                    })]
                                })]
                            }), Object(f.jsxs)("div", {
                                className: "all_data_show",
                                id: "message-list",
                                children: [T.map((function(e, t) {
                                    return Object(f.jsx)(o.Fragment, {
                                        children: 1 === e.messageType ? Object(f.jsx)(o.Fragment, {
                                            children: Object(f.jsxs)("div", {
                                                className: "logo-hello",
                                                children: ["lastMessage" === e.funcName ? "" : Object(f.jsx)("span", {
                                                    className: "contact-logo"
                                                }), e.message, os(e.funcName)]
                                            }, t)
                                        }) : Object(f.jsxs)("div", {
                                            className: "logo-hello people-logo",
                                            children: [Object(f.jsxs)("div", {
                                                className: "hello-title need-place",
                                                children: [e.message, " ", Object(f.jsx)("br", {}), " "]
                                            }), Object(f.jsx)("span", {
                                                className: "profile-logo"
                                            })]
                                        })
                                    }, t)
                                })), void setTimeout((function() {
                                    var e = document.getElementById("message-list");
                                    e && e.scrollHeight && (e.scrollTop = e.scrollHeight)
                                }), 300)]
                            })]
                        })
                    })
                })
            }))
        }
    }
]);