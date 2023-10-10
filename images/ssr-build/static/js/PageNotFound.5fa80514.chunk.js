(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [39], {
        687: function(e, t, a) {
            "use strict";
            a.r(t);
            var i = a(3),
                o = a.n(i),
                c = a(30),
                s = a(740),
                n = (a(788), a(40)),
                l = a(738),
                r = a(8),
                d = a(14),
                m = a(12),
                p = a(0),
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
            t.default = Object(c.c)("", (function(e) {
                return {
                    fetchSiteSettings: function(t, a) {
                        return e(Object(n.b)(t, a))
                    }
                }
            }))((function(e) {
                var t = e.statusCode,
                    a = e.isMobileReq;
                Object(i.useEffect)((function() {
                    e.fetchSiteSettings();
                    var t = {
                        action: "404_error",
                        eventCategory: "404_page",
                        eventLabel: "shown"
                    };
                    Object(r.f)(t), Object(d.d)("clickEvent", t)
                }), []);
                return Object(p.jsxs)(p.Fragment, {
                    children: [Object(p.jsx)("section", {
                        className: "page-not-found",
                        children: 404 === t || 400 === t ? Object(p.jsxs)(o.a.Fragment, {
                            children: [Object(p.jsx)("div", {
                                className: "page-content",
                                children: Object(p.jsxs)("div", {
                                    className: "page-not-found-content",
                                    children: [Object(p.jsxs)("div", {
                                        className: "page-content-inner",
                                        children: [Object(p.jsxs)("div", {
                                            className: "page-some-content",
                                            children: [Object(p.jsx)("h2", {
                                                children: "Something went wrong"
                                            }), Object(p.jsx)("h3", {
                                                children: "But it\u2019s OK, We Got You"
                                            }), Object(p.jsx)("a", {
                                                href: "/",
                                                onClick: function() {
                                                    var e = {
                                                        action: "CTA_button",
                                                        eventCategory: "404_page",
                                                        eventLabel: "Click"
                                                    };
                                                    Object(r.f)(e), Object(d.d)("clickEvent", e)
                                                },
                                                target: "_self",
                                                children: "Back to Home"
                                            })]
                                        }), Object(p.jsx)("div", {
                                            className: "img-wrapper",
                                            children: "true" === a ? Object(p.jsx)("img", {
                                                src: "https://imgcdn.floweraura.com/image_404/img_mob404.png",
                                                alt: "Page Not Found"
                                            }) : Object(p.jsx)("img", {
                                                src: "https://imgcdn.floweraura.com/image_404/img404.png",
                                                alt: "Page Not Found"
                                            })
                                        })]
                                    }), Object(p.jsx)("div", {
                                        className: "occasion-container",
                                        children: Object(p.jsxs)("div", {
                                            className: "slideupdown-category",
                                            children: [Object(p.jsx)("h2", {
                                                children: "Find your new favorites"
                                            }), Object(p.jsx)("ul", {
                                                className: "slideupdown",
                                                children: j.map((function(e, t) {
                                                    return Object(p.jsx)("li", {
                                                        children: Object(p.jsxs)("a", {
                                                            href: e.url,
                                                            onClick: function() {
                                                                ! function(e) {
                                                                    var t = {
                                                                        action: "category_click",
                                                                        eventCategory: "404_page",
                                                                        eventLabel: e
                                                                    };
                                                                    Object(r.f)(t), Object(d.d)("clickEvent", t)
                                                                }(e.title), Object(m.n)("404_page", "Find your new favorites", e.title, e.url)
                                                            },
                                                            children: [Object(p.jsx)(l.a, {
                                                                src: "true" === a ? e.img_mob : e.img_desk,
                                                                alt: e.title,
                                                                title: e.title,
                                                                noLazyLoad: !1
                                                            }), Object(p.jsx)("h4", {
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
                            }), Object(p.jsx)("div", {
                                id: "searchModal"
                            })]
                        }) : null
                    }), Object(p.jsx)(s.a, {
                        isMobileReq: a
                    })]
                })
            }))
        },
        738: function(e, t, a) {
            "use strict";
            var i = a(1),
                o = a(3),
                c = a(2),
                s = a(0);
            t.a = function(e) {
                var t = e.alt,
                    a = void 0 === t ? "" : t,
                    n = e.title,
                    l = void 0 === n ? "" : n,
                    r = e.src,
                    d = void 0 === r ? "" : r,
                    m = e.srcset,
                    p = void 0 === m ? "" : m,
                    j = e.noLazyLoad,
                    u = void 0 !== j && j,
                    b = e.itemProp,
                    h = void 0 === b ? null : b,
                    g = e.id,
                    f = void 0 === g ? null : g,
                    w = e.isMobileReq,
                    O = void 0 === w ? "false" : w,
                    v = e.originalImageMobile,
                    x = void 0 === v ? "" : v,
                    _ = e.originalImageDesktop,
                    y = void 0 === _ ? "" : _,
                    k = {},
                    N = {},
                    F = {};
                f && (k = {
                    id: f
                }), h && (N = {
                    itemProp: h
                }), Object(c.a)(p) || (F = {
                    srcSet: p
                });
                var A = d;
                return A = "" === d && "true" === O ? y : "" === d && "false" === O ? x : d, Object(c.a)(A) ? null : Object(s.jsx)(o.Fragment, {
                    children: Object(s.jsx)("span", {
                        children: Object(s.jsx)("img", Object(i.a)(Object(i.a)(Object(i.a)({
                            src: A,
                            loading: u ? "eager" : "lazy",
                            alt: a
                        }, F), {}, {
                            title: l,
                            style: {
                                display: "inline",
                                width: "100%",
                                height: "100%"
                            }
                        }, N), k))
                    })
                })
            }
        },
        740: function(e, t, a) {
            "use strict";
            var i = a(3),
                o = a(30),
                c = (a(234), a(742)),
                s = a(143),
                n = a(0);
            t.a = Object(o.c)((function(e) {
                return {
                    location: e.router.location
                }
            }))((function(e) {
                return "app" === Object(s.a)("fa-source", e.location.search) ? null : Object(n.jsx)(i.Fragment, {
                    children: Object(n.jsxs)(n.Fragment, {
                        children: [Object(n.jsx)(c.a, {
                            isMobileReq: e.isMobileReq,
                            location: e.location
                        }), "true" === e.isMobileReq ? Object(n.jsxs)("div", {
                            className: "paymentFooterImage",
                            children: [Object(n.jsxs)("div", {
                                className: "payementAcceptFooter",
                                children: [Object(n.jsx)("h5", {
                                    className: "pfHeading",
                                    children: "We Accept:"
                                }), Object(n.jsx)("div", {
                                    className: "payementType",
                                    children: Object(n.jsx)("div", {
                                        className: "payementImg",
                                        children: Object(n.jsx)("img", {
                                            loading: "lazy",
                                            src: "https://imgcdn.floweraura.com/paymentFooter.png",
                                            alt: "payement",
                                            width: "100%",
                                            height: "100%"
                                        })
                                    })
                                })]
                            }), Object(n.jsx)("div", {
                                className: "copyright",
                                children: Object(n.jsxs)("div", {
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
            var i = a(0);
            t.a = function(e) {
                var t = e.videoUrl,
                    a = e.youtubeImg,
                    o = e.height,
                    c = e.defaultIcon,
                    s = void 0 === c || c;
                return Object(i.jsx)(i.Fragment, {
                    children: Object(i.jsx)("div", {
                        children: Object(i.jsx)("iframe", {
                            title: "Youtube",
                            "aria-hidden": "true",
                            height: o,
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                            allowFullScreen: !0,
                            webkitallowfullscreen: "true",
                            mozallowfullscreen: "true",
                            srcDoc: "<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=".concat(t, "/?autoplay=1&;enablejsapi=1><img src=").concat(a, " loading=\"lazy\" alt='The Journey of FlowerAura.com Gets Featured on CNBC Awaaz'>").concat("object" === typeof s ? Object(i.jsx)("span", {
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
            var i = a(3),
                o = a.p + "static/media/fb.4545cbb8.svg",
                c = a.p + "static/media/insta.2843d8f7.svg",
                s = a.p + "static/media/linkedin.a070936f.svg",
                n = a.p + "static/media/pinterest.7127d571.svg",
                l = a.p + "static/media/tweet.2e3db5c9.svg",
                r = a.p + "static/media/youtube.5da4739a.svg",
                d = (a(743), a.p, a(741)),
                m = a(2),
                p = a(738),
                j = a(230),
                u = a(179),
                b = a(12),
                h = a(0),
                g = "https://imgcdn.floweraura.com/fa-media/play_store.svg",
                f = "https://imgcdn.floweraura.com/fa-media/app_store.svg",
                w = [{
                    img: o,
                    position: "1",
                    name: "facebook",
                    url: "https://www.facebook.com/floweraura"
                }, {
                    img: l,
                    position: "2",
                    name: "twitter",
                    url: "https://twitter.com/floweraura"
                }, {
                    img: r,
                    position: "3",
                    name: "youtube",
                    url: "https://www.youtube.com/channel/UCKHMl8G_5dkJFUvORqQBHTA/featured"
                }, {
                    img: n,
                    position: "4",
                    name: "pinterest",
                    url: "https://in.pinterest.com/FlowerAuraOfficial"
                }, {
                    img: c,
                    position: "5",
                    name: "instagram",
                    url: "https://www.instagram.com/flowerauraofficial"
                }, {
                    img: s,
                    position: "6",
                    name: "linkedin",
                    url: "https://in.linkedin.com/company/floweraura"
                }],
                O = [{
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
                    o = "";
                Object(i.useEffect)((function() {
                    c(), window.addEventListener("scroll", Object(u.a)((function() {
                        window.innerHeight + window.scrollY >= document.body.offsetHeight - 600 && "true" === e.isMobileReq ? Object(b.q)("footer_mob", "app_download_button", window.location.pathname) : window.innerHeight + window.scrollY >= document.body.offsetHeight - 250 && "false" === e.isMobileReq && Object(b.q)("footer_desktop", "app_download_button", window.location.pathname)
                    }), 1e3))
                }), []);
                var c = function() {
                        t || (window && window.loadVideoFrame(), t = !0)
                    },
                    s = w.map((function(e) {
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
                    n = O.map((function(e) {
                        return Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    })),
                    l = O.map((function(e, t) {
                        return t < 6 && Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    })),
                    r = O.map((function(e, t) {
                        return t > 5 && Object(h.jsx)("li", {
                            children: Object(h.jsx)("a", {
                                href: e.url,
                                title: e.name,
                                children: e.name
                            })
                        }, e.position)
                    }));
                "false" === e.isMobileReq ? (a = "https://play.google.com/store/apps/details?id=com.floweraura&referrer=utm_source%3Dfooter_web%26utm_medium%3Dweb%26utm_campaign%3Dapp_download_web_footer", o = "https://apps.apple.com/in/app/floweraura/id1490812119") : (a = "https://play.google.com/store/apps/details?id=com.floweraura&referrer=utm_source%3Dfooter_mob%26utm_medium%3Dmob%26utm_campaign%3Dapp_download_mob_footer", o = "https://apps.apple.com/app/apple-store/id1490812119?pt=120793467&ct=mob_footer&mt=8");
                var v = "",
                    x = !1;
                e.location.pathname.includes("blog") && (v = "blogFooter", x = !0);
                var _ = function() {
                    "false" === e.isMobileReq ? Object(b.a)("footer_desktop", "app_download", window.location.pathname) : Object(b.a)("footer_mob", "app_download", window.location.pathname)
                };
                return Object(h.jsxs)("div", {
                    className: "footer-inner",
                    children: [Object(h.jsxs)("div", {
                        className: "fh_all ".concat(v),
                        children: [Object(h.jsxs)("div", {
                            className: "fh_first",
                            children: [Object(h.jsxs)("div", {
                                className: "downloadPlayGoogle",
                                children: [x && Object(h.jsxs)("div", {
                                    className: "letUsMake",
                                    children: ["Loved what you read? You will also love our range of Gifts, Cakes, & Flowers on the ", Object(h.jsx)("span", {
                                        children: "FlowerAura app"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    className: "downloadApp_show",
                                    children: [!x && Object(h.jsx)("div", {
                                        className: "letUsMake",
                                        children: "Let us make you feel special"
                                    }), Object(h.jsx)("div", {
                                        className: "googleAppstore",
                                        children: Object(h.jsxs)("ul", {
                                            className: "flowerauraApplink",
                                            children: [Object(h.jsx)("li", {
                                                children: Object(h.jsx)("a", {
                                                    onClick: _,
                                                    href: a,
                                                    target: "_blank",
                                                    title: "Download App",
                                                    children: Object(h.jsx)(p.a, {
                                                        src: g,
                                                        srcset: "false" === e.isMobileReq ? Object(j.a)(g, 150, 44) : Object(j.a)(g, 160, 50),
                                                        alt: "Download App From Play Store",
                                                        title: "Download App",
                                                        noLazyLoad: !1
                                                    })
                                                })
                                            }), Object(h.jsx)("li", {
                                                children: Object(h.jsx)("a", {
                                                    onClick: _,
                                                    href: o,
                                                    target: "_blank",
                                                    title: "Download App",
                                                    children: Object(h.jsx)(p.a, {
                                                        src: f,
                                                        srcset: "false" === e.isMobileReq ? Object(j.a)(f, 150, 44) : Object(j.a)(f, 160, 50),
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
                            }), !Object(m.a)("") && Object(h.jsx)("div", {
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
                                    children: s
                                })
                            })]
                        })]
                    }), "false" === e.isMobileReq ? Object(h.jsx)("div", {
                        className: "links-wrap fh_second",
                        children: Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: n
                        })
                    }) : Object(h.jsxs)("div", {
                        className: "links-wrap fh_second",
                        children: [Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: l
                        }), Object(h.jsx)("ul", {
                            className: "menu clearfix column",
                            children: r
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
        788: function(e, t, a) {}
    }
]);