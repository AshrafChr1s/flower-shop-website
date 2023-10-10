(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [70], {
        1063: function(e, t, r) {
            var n;
            n = function(e) {
                return function() {
                    "use strict";
                    var t = {
                            931: function(e, t, r) {
                                r.r(t), r.d(t, {
                                    default: function() {
                                        return l
                                    }
                                });
                                var n = r(639),
                                    i = r.n(n),
                                    o = ["styles"];

                                function a() {
                                    return a = Object.assign ? Object.assign.bind() : function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var r = arguments[t];
                                            for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                                        }
                                        return e
                                    }, a.apply(this, arguments)
                                }

                                function u(e, t) {
                                    if (null == e) return {};
                                    var r, n, i = function(e, t) {
                                        if (null == e) return {};
                                        var r, n, i = {},
                                            o = Object.keys(e);
                                        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                                        return i
                                    }(e, t);
                                    if (Object.getOwnPropertySymbols) {
                                        var o = Object.getOwnPropertySymbols(e);
                                        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                                    }
                                    return i
                                }
                                var l = function(e) {
                                    e.styles;
                                    var t = u(e, o);
                                    return i().createElement("svg", a({
                                        width: "44",
                                        height: "44",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        stroke: "#fff"
                                    }, t), i().createElement("g", {
                                        fill: "none",
                                        fillRule: "evenodd",
                                        strokeWidth: "2"
                                    }, i().createElement("circle", {
                                        cx: "22",
                                        cy: "22",
                                        r: "1"
                                    }, i().createElement("animate", {
                                        attributeName: "r",
                                        begin: "0s",
                                        dur: "1.8s",
                                        values: "1; 20",
                                        calcMode: "spline",
                                        keyTimes: "0; 1",
                                        keySplines: "0.165, 0.84, 0.44, 1",
                                        repeatCount: "indefinite"
                                    }), i().createElement("animate", {
                                        attributeName: "stroke-opacity",
                                        begin: "0s",
                                        dur: "1.8s",
                                        values: "1; 0",
                                        calcMode: "spline",
                                        keyTimes: "0; 1",
                                        keySplines: "0.3, 0.61, 0.355, 1",
                                        repeatCount: "indefinite"
                                    })), i().createElement("circle", {
                                        cx: "22",
                                        cy: "22",
                                        r: "1"
                                    }, i().createElement("animate", {
                                        attributeName: "r",
                                        begin: "-0.9s",
                                        dur: "1.8s",
                                        values: "1; 20",
                                        calcMode: "spline",
                                        keyTimes: "0; 1",
                                        keySplines: "0.165, 0.84, 0.44, 1",
                                        repeatCount: "indefinite"
                                    }), i().createElement("animate", {
                                        attributeName: "stroke-opacity",
                                        begin: "-0.9s",
                                        dur: "1.8s",
                                        values: "1; 0",
                                        calcMode: "spline",
                                        keyTimes: "0; 1",
                                        keySplines: "0.3, 0.61, 0.355, 1",
                                        repeatCount: "indefinite"
                                    }))))
                                }
                            },
                            120: function(e, t, r) {
                                function n(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function i(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    u = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                                        return a(t, e), t
                                    },
                                    l = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var c = u(r(639)),
                                    s = l(r(267)),
                                    f = l(r(486)),
                                    d = l(r(552)),
                                    p = l(r(832)),
                                    y = l(r(913)),
                                    v = l(r(342));
                                t.default = function() {
                                    var e = n((0, c.useState)(0), 2),
                                        t = e[0],
                                        r = e[1],
                                        i = n((0, c.useState)(!0), 2),
                                        o = i[0],
                                        a = i[1],
                                        u = n((0, c.useState)(!0), 2),
                                        l = u[0],
                                        m = u[1],
                                        b = n((0, c.useState)(0), 2),
                                        g = b[0],
                                        _ = b[1],
                                        O = (0, v.default)(),
                                        w = (0, c.useRef)(),
                                        j = (0, c.useContext)(s.default),
                                        M = j.width,
                                        S = j.height,
                                        x = j.loop,
                                        E = j.currentIndex,
                                        C = j.isPaused,
                                        A = j.keyboardNavigation,
                                        P = j.preventDefault,
                                        z = j.storyContainerStyles,
                                        D = void 0 === z ? {} : z,
                                        I = j.onAllStoriesEnd,
                                        k = (0, c.useContext)(f.default).stories;
                                    (0, c.useEffect)((function() {
                                        "number" === typeof E && (E >= 0 && E < k.length ? R((function() {
                                            return E
                                        })) : console.error("Index out of bounds. Current index was set to value more than the length of stories array.", E))
                                    }), [E]), (0, c.useEffect)((function() {
                                        "boolean" === typeof C && a(C)
                                    }), [C]), (0, c.useEffect)((function() {
                                        if ("undefined" !== typeof window && window.document && "boolean" === typeof A && A) return document.addEventListener("keydown", T),
                                            function() {
                                                document.removeEventListener("keydown", T)
                                            }
                                    }), [A]);
                                    var T = function(e) {
                                            "ArrowLeft" === e.key ? N() : "ArrowRight" === e.key && B()
                                        },
                                        W = function(e, t) {
                                            a("pause" === e), m(!!t)
                                        },
                                        R = function(e) {
                                            r(e), W("pause", !0)
                                        },
                                        N = function() {
                                            R((function(e) {
                                                return e > 0 ? e - 1 : e
                                            }))
                                        },
                                        B = function() {
                                            O() && (x ? F() : L())
                                        },
                                        F = function() {
                                            R((function(e) {
                                                return e >= k.length - 1 && I && I(t, k), (e + 1) % k.length
                                            }))
                                        },
                                        L = function() {
                                            R((function(e) {
                                                return e < k.length - 1 ? e + 1 : (I && I(t, k), e)
                                            }))
                                        },
                                        H = function(e) {
                                            e.preventDefault(), w.current = setTimeout((function() {
                                                W("pause")
                                            }), 200)
                                        },
                                        U = function(e) {
                                            return function(t) {
                                                t.preventDefault(), w.current && clearTimeout(w.current), o ? W("play") : "next" === e ? B() : N()
                                            }
                                        };
                                    return c.default.createElement("div", {
                                        style: Object.assign(Object.assign(Object.assign({}, h.container), D), {
                                            width: M,
                                            height: S
                                        })
                                    }, c.default.createElement(d.default.Provider, {
                                        value: {
                                            bufferAction: l,
                                            videoDuration: g,
                                            currentId: t,
                                            pause: o,
                                            next: B
                                        }
                                    }, c.default.createElement(y.default, null)), c.default.createElement(p.default, {
                                        action: W,
                                        bufferAction: l,
                                        playState: o,
                                        story: k[t],
                                        getVideoDuration: function(e) {
                                            _(1e3 * e)
                                        }
                                    }), !P && c.default.createElement("div", {
                                        style: h.overlay
                                    }, c.default.createElement("div", {
                                        style: {
                                            width: "50%",
                                            zIndex: 999
                                        },
                                        onTouchStart: H,
                                        onTouchEnd: U("previous"),
                                        onMouseDown: H,
                                        onMouseUp: U("previous")
                                    }), c.default.createElement("div", {
                                        style: {
                                            width: "50%",
                                            zIndex: 999
                                        },
                                        onTouchStart: H,
                                        onTouchEnd: U("next"),
                                        onMouseDown: H,
                                        onMouseUp: U("next")
                                    })))
                                };
                                var h = {
                                    container: {
                                        display: "flex",
                                        flexDirection: "column",
                                        background: "#111",
                                        position: "relative",
                                        WebkitUserSelect: "none"
                                    },
                                    overlay: {
                                        position: "absolute",
                                        height: "inherit",
                                        width: "inherit",
                                        display: "flex"
                                    }
                                }
                            },
                            463: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var i = n(r(639)),
                                    o = {
                                        main: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        img: {
                                            width: 40,
                                            height: 40,
                                            borderRadius: 40,
                                            marginRight: 10,
                                            filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
                                            border: "2px solid rgba(255, 255, 255, 0.8)"
                                        },
                                        text: {
                                            display: "flex",
                                            flexDirection: "column",
                                            filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))"
                                        },
                                        heading: {
                                            fontSize: "1rem",
                                            color: "rgba(255, 255, 255, 0.9)",
                                            margin: 0,
                                            marginBottom: 2
                                        },
                                        subheading: {
                                            fontSize: "0.6rem",
                                            color: "rgba(255, 255, 255, 0.8)",
                                            margin: 0
                                        }
                                    };
                                t.default = function(e) {
                                    var t = e.profileImage,
                                        r = e.heading,
                                        n = e.subheading;
                                    return i.default.createElement("div", {
                                        style: o.main
                                    }, t && i.default.createElement("img", {
                                        style: o.img,
                                        src: t
                                    }), i.default.createElement("span", {
                                        style: o.text
                                    }, i.default.createElement("p", {
                                        style: o.heading
                                    }, r), i.default.createElement("p", {
                                        style: o.subheading
                                    }, n)))
                                }
                            },
                            911: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    },
                                    a = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var u = o(r(639)),
                                    l = a(r(424)),
                                    c = a(r(267)),
                                    s = a(r(552));
                                t.default = function(e) {
                                    var t = (0, u.useContext)(c.default).progressStyles,
                                        r = (0, u.useContext)(s.default),
                                        n = r.bufferAction,
                                        i = r.pause,
                                        o = e.width,
                                        a = e.active;
                                    return u.default.createElement(l.default, {
                                        width: o,
                                        pause: i,
                                        bufferAction: n
                                    }, u.default.createElement("div", {
                                        style: Object.assign(Object.assign(Object.assign({}, f.inner), t), function(t) {
                                            switch (t.active) {
                                                case 2:
                                                    return {
                                                        width: "100%"
                                                    };
                                                case 1:
                                                    return {
                                                        transform: "scaleX(".concat(e.count / 100, ")")
                                                    };
                                                default:
                                                    return {
                                                        width: 0
                                                    }
                                            }
                                        }({
                                            active: a
                                        }))
                                    }))
                                };
                                var f = {
                                    inner: {
                                        background: "#fff",
                                        height: "100%",
                                        maxWidth: "100%",
                                        borderRadius: 2,
                                        transformOrigin: "center left",
                                        WebkitBackfaceVisibility: "hidden",
                                        MozBackfaceVisibility: "hidden",
                                        msBackfaceVisibility: "hidden",
                                        backfaceVisibility: "hidden",
                                        WebkitPerspective: 1e3,
                                        MozPerspective: 1e3,
                                        msPerspective: 1e3,
                                        perspective: 1e3
                                    }
                                }
                            },
                            913: function(e, t, r) {
                                function n(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function i(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    u = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                                        return a(t, e), t
                                    },
                                    l = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var c = u(r(639)),
                                    s = l(r(911)),
                                    f = l(r(552)),
                                    d = l(r(267)),
                                    p = l(r(486)),
                                    y = r(335);
                                t.default = function() {
                                    var e = n((0, c.useState)(0), 2),
                                        t = e[0],
                                        r = e[1],
                                        i = (0, c.useRef)(),
                                        o = (0, c.useContext)(f.default),
                                        a = o.currentId,
                                        u = o.next,
                                        l = o.videoDuration,
                                        h = o.pause,
                                        m = o.bufferAction,
                                        b = (0, c.useContext)(d.default),
                                        g = b.defaultInterval,
                                        _ = b.onStoryEnd,
                                        O = b.onStoryStart,
                                        w = b.progressContainerStyles,
                                        j = (0, c.useContext)(p.default).stories;
                                    (0, c.useEffect)((function() {
                                        r(0)
                                    }), [a, j]), (0, c.useEffect)((function() {
                                        return h || (M.current = requestAnimationFrame(x), i.current = (0, y.timestamp)()),
                                            function() {
                                                cancelAnimationFrame(M.current)
                                            }
                                    }), [a, h]);
                                    var M = (0, c.useRef)(),
                                        S = t,
                                        x = function e() {
                                            0 === S && E(), void 0 == i.current && (i.current = (0, y.timestamp)());
                                            var t = (0, y.timestamp)(),
                                                n = t - i.current;
                                            i.current = t, r((function(e) {
                                                var t = A();
                                                return S = e + 100 * n / t
                                            })), S < 100 ? M.current = requestAnimationFrame(e) : (C(), cancelAnimationFrame(M.current), u())
                                        },
                                        E = function() {
                                            O && O(a, j[a])
                                        },
                                        C = function() {
                                            _ && _(a, j[a])
                                        },
                                        A = function() {
                                            return "video" === j[a].type ? l : "number" === typeof j[a].duration ? j[a].duration : g
                                        },
                                        P = {
                                            opacity: h && !m ? 0 : 1
                                        };
                                    return c.default.createElement("div", {
                                        style: Object.assign(Object.assign(Object.assign({}, v.progressArr), w), P)
                                    }, j.map((function(e, r) {
                                        return c.default.createElement(s.default, {
                                            key: r,
                                            count: t,
                                            width: 1 / j.length,
                                            active: r === a ? 1 : r < a ? 2 : 0
                                        })
                                    })))
                                };
                                var v = {
                                    progressArr: {
                                        display: "flex",
                                        justifyContent: "center",
                                        maxWidth: "100%",
                                        flexWrap: "nowrap",
                                        position: "absolute",
                                        width: "98%",
                                        padding: 5,
                                        paddingTop: 7,
                                        alignSelf: "center",
                                        zIndex: 1001,
                                        filter: "drop-shadow(0 1px 8px #222)",
                                        transition: "opacity 400ms ease-in-out"
                                    }
                                }
                            },
                            424: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    },
                                    a = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var u = o(r(639)),
                                    l = a(r(267)),
                                    c = function(e) {
                                        var t = e.width;
                                        return {
                                            width: "".concat(100 * t, "%")
                                        }
                                    },
                                    s = {
                                        progress: {
                                            height: 2,
                                            maxWidth: "100%",
                                            background: "#555",
                                            margin: 2,
                                            borderRadius: 2,
                                            WebkitBackfaceVisibility: "hidden",
                                            MozBackfaceVisibility: "hidden",
                                            msBackfaceVisibility: "hidden",
                                            backfaceVisibility: "hidden"
                                        }
                                    };
                                t.default = function(e) {
                                    var t = (0, u.useContext)(l.default).progressWrapperStyles;
                                    return u.default.createElement("div", {
                                        style: Object.assign(Object.assign(Object.assign({}, s.progress), t), c(e))
                                    }, e.children)
                                }
                            },
                            771: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    },
                                    a = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var u = o(r(639)),
                                    l = a(r(267));
                                t.default = function(e) {
                                    var t = e.seeMoreContent,
                                        r = e.customCollapsed,
                                        n = (0, u.useContext)(l.default).keyboardNavigation;
                                    (0, u.useEffect)((function() {
                                        if ("undefined" !== typeof window && window.document && "boolean" === typeof n && n) return document.addEventListener("keydown", i),
                                            function() {
                                                document.removeEventListener("keydown", i)
                                            }
                                    }), [n]);
                                    var i = function(t) {
                                        "ArrowUp" === t.key ? (t.preventDefault(), e.toggleMore(!0)) : "ArrowDown" !== t.key && "Escape" !== t.key || (t.preventDefault(), e.toggleMore(!1))
                                    };
                                    return e.showContent ? u.default.createElement("div", {
                                        style: c.seeMoreExpanded
                                    }, u.default.createElement(t, {
                                        close: function() {
                                            return e.toggleMore(!1)
                                        }
                                    })) : r ? u.default.createElement(r, {
                                        action: e.action,
                                        toggleMore: e.toggleMore
                                    }) : u.default.createElement("div", {
                                        style: c.seeMore,
                                        onClick: function(t) {
                                            t.preventDefault(), t.stopPropagation(), e.toggleMore(!0)
                                        }
                                    }, u.default.createElement("span", {
                                        style: c.seeMoreIcon
                                    }, "\u2303"), u.default.createElement("span", {
                                        style: c.seeMoreText
                                    }, "See more"))
                                };
                                var c = {
                                    seeMore: {
                                        height: "10vh",
                                        background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2))",
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        alignItems: "center",
                                        justifyContent: "flex-end",
                                        bottom: 0
                                    },
                                    seeMoreExpanded: {
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        boxSizing: "border-box",
                                        zIndex: 99999
                                    },
                                    seeMoreText: {
                                        color: "white",
                                        textAlign: "center",
                                        letterSpacing: "0.1em",
                                        marginBottom: "2.2vh",
                                        textTransform: "capitalize",
                                        opacity: "1",
                                        fontSize: "0.8em",
                                        transition: "opacity 300ms ease-in-out"
                                    },
                                    seeMoreIcon: {
                                        color: "white",
                                        textAlign: "center",
                                        letterSpacing: "0.2em",
                                        marginBottom: "0.4vh",
                                        opacity: "1",
                                        filter: "drop-shadow(0 0 5px black)",
                                        textTransform: "capitalize",
                                        transition: "opacity 300ms ease-in-out"
                                    },
                                    seeMoreClose: {
                                        position: "absolute",
                                        filter: "drop-shadow(0 3px 2px #ccc)",
                                        right: "0.5rem",
                                        top: "0.5rem",
                                        fontSize: "1.5rem",
                                        opacity: "0.7",
                                        padding: "1rem"
                                    }
                                }
                            },
                            353: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var i = n(r(639)),
                                    o = n(r(931));
                                t.default = function() {
                                    return i.default.createElement(o.default, null)
                                }
                            },
                            832: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    },
                                    a = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var u = o(r(639)),
                                    l = a(r(267)),
                                    c = {
                                        story: {
                                            display: "flex",
                                            position: "relative",
                                            overflow: "hidden",
                                            alignItems: "center"
                                        },
                                        storyContent: {
                                            width: "auto",
                                            maxWidth: "100%",
                                            maxHeight: "100%",
                                            margin: "auto"
                                        }
                                    };
                                t.default = function(e) {
                                    var t = (0, u.useContext)(l.default),
                                        r = t.width,
                                        n = t.height,
                                        i = t.loader,
                                        o = t.header,
                                        a = t.storyStyles,
                                        s = t.storyInnerContainerStyles,
                                        f = void 0 === s ? {} : s,
                                        d = function(t, r) {
                                            if ("UPDATE_VIDEO_DURATION" === t) return e.getVideoDuration(r.duration), {
                                                ack: "OK"
                                            }
                                        };
                                    return u.default.createElement("div", {
                                        style: Object.assign(Object.assign(Object.assign({}, c.story), f), {
                                            width: r,
                                            height: n
                                        })
                                    }, function() {
                                        var t = e.story.content,
                                            l = {
                                                width: r,
                                                height: n,
                                                loader: i,
                                                header: o,
                                                storyStyles: a
                                            };
                                        return u.default.createElement(t, {
                                            action: e.action,
                                            isPaused: e.playState,
                                            story: e.story,
                                            config: l,
                                            messageHandler: d
                                        })
                                    }())
                                }
                            },
                            267: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.initialContext = void 0;
                                var i = n(r(639));
                                t.initialContext = {
                                    defaultInterval: 4e3,
                                    width: 360,
                                    height: 640
                                };
                                var o = i.default.createContext(t.initialContext);
                                t.default = o
                            },
                            552: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var i = n(r(639));
                                t.default = i.default.createContext({
                                    currentId: 0,
                                    videoDuration: 0,
                                    bufferAction: !1,
                                    pause: !1,
                                    next: function() {}
                                })
                            },
                            486: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.initialContext = void 0;
                                var i = n(r(639));
                                t.initialContext = {
                                    stories: []
                                };
                                var o = i.default.createContext(t.initialContext);
                                t.default = o
                            },
                            370: function(e, t, r) {
                                function n(e) {
                                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    }, n(e)
                                }

                                function i(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return o(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? o(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function o(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var a = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    u = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    l = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && a(t, e, r);
                                        return u(t, e), t
                                    },
                                    c = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.WithSeeMore = t.WithHeader = void 0;
                                var s = l(r(639)),
                                    f = c(r(120)),
                                    d = c(r(267)),
                                    p = c(r(486)),
                                    y = r(371),
                                    v = r(942),
                                    h = c(r(803)),
                                    m = c(r(763)),
                                    b = function(e) {
                                        var t = e.renderers ? e.renderers.concat(v.renderers) : v.renderers,
                                            r = {
                                                width: e.width,
                                                height: e.height,
                                                loader: e.loader,
                                                header: e.header,
                                                storyContainerStyles: e.storyContainerStyles,
                                                storyInnerContainerStyles: e.storyInnerContainerStyles,
                                                storyStyles: e.storyStyles,
                                                progressContainerStyles: e.progressContainerStyles,
                                                progressWrapperStyles: e.progressWrapperStyles,
                                                progressStyles: e.progressStyles,
                                                loop: e.loop,
                                                defaultInterval: e.defaultInterval,
                                                isPaused: e.isPaused,
                                                currentIndex: e.currentIndex,
                                                onStoryStart: e.onStoryStart,
                                                onStoryEnd: e.onStoryEnd,
                                                onAllStoriesEnd: e.onAllStoriesEnd,
                                                keyboardNavigation: e.keyboardNavigation,
                                                preventDefault: e.preventDefault
                                            },
                                            n = i((0, s.useState)({
                                                stories: g(e.stories, t)
                                            }), 2),
                                            o = n[0],
                                            a = n[1];
                                        return (0, s.useEffect)((function() {
                                            a({
                                                stories: g(e.stories, t)
                                            })
                                        }), [e.stories, e.renderers]), s.default.createElement(d.default.Provider, {
                                            value: r
                                        }, s.default.createElement(p.default.Provider, {
                                            value: o
                                        }, s.default.createElement(f.default, null)))
                                    },
                                    g = function(e, t) {
                                        return e.map((function(e) {
                                            var r = {};
                                            "string" === typeof e ? (r.url = e, r.type = "image") : "object" === n(e) && (r = Object.assign(r, e));
                                            var i = (0, y.getRenderer)(r, t);
                                            return r.originalContent = r.content, r.content = i, r
                                        }))
                                    };
                                b.defaultProps = {
                                    width: 360,
                                    height: 640,
                                    defaultInterval: 4e3
                                }, t.WithHeader = h.default, t.WithSeeMore = m.default, t.default = b
                            },
                            350: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.tester = t.renderer = void 0;
                                var a = o(r(639));
                                t.renderer = function(e) {
                                    a.useEffect((function() {
                                        e.action("play")
                                    }), [e.story]);
                                    var t = e.story.originalContent;
                                    return a.createElement(t, Object.assign({}, e))
                                }, t.tester = function(e) {
                                    return {
                                        condition: !!e.content,
                                        priority: 2
                                    }
                                }, t.default = {
                                    renderer: t.renderer,
                                    tester: t.tester
                                }
                            },
                            248: function(e, t, r) {
                                var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    o = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                                        return i(t, e), t
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.tester = t.renderer = void 0;
                                var a = o(r(639));
                                t.renderer = function(e) {
                                    var t = e.story,
                                        r = e.action;
                                    return a.useEffect((function() {
                                        r("play")
                                    }), [t]), a.createElement("div", {
                                        style: u.storyContent
                                    }, a.createElement("p", {
                                        style: u.text
                                    }, "This story could not be loaded."))
                                };
                                var u = {
                                    storyContent: {
                                        width: "100%",
                                        maxHeight: "100%",
                                        margin: "auto"
                                    },
                                    text: {
                                        textAlign: "center",
                                        color: "white",
                                        width: "90%",
                                        margin: "auto"
                                    }
                                };
                                t.tester = function() {
                                    return {
                                        condition: !0,
                                        priority: 1
                                    }
                                }, t.default = {
                                    renderer: t.renderer,
                                    tester: t.tester
                                }
                            },
                            209: function(e, t, r) {
                                function n(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function i(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    u = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                                        return a(t, e), t
                                    },
                                    l = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.tester = t.renderer = void 0;
                                var c = u(r(639)),
                                    s = l(r(353)),
                                    f = l(r(803)),
                                    d = l(r(763));
                                t.renderer = function(e) {
                                    var t = e.story,
                                        r = e.action,
                                        i = (e.isPaused, e.config),
                                        o = n(c.useState(!1), 2),
                                        a = o[0],
                                        u = o[1],
                                        l = i.width,
                                        y = i.height,
                                        v = i.loader,
                                        h = i.storyStyles,
                                        m = Object.assign(Object.assign({}, p.storyContent), h || {});
                                    return c.createElement(f.default, Object.assign({}, {
                                        story: t,
                                        globalHeader: i.header
                                    }), c.createElement(d.default, Object.assign({}, {
                                        story: t,
                                        action: r
                                    }), c.createElement("div", null, c.createElement("img", {
                                        style: m,
                                        src: t.url,
                                        onLoad: function() {
                                            u(!0), r("play")
                                        }
                                    }), !a && c.createElement("div", {
                                        style: {
                                            width: l,
                                            height: y,
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            background: "rgba(0, 0, 0, 0.9)",
                                            zIndex: 9,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ccc"
                                        }
                                    }, v || c.createElement(s.default, null)))))
                                };
                                var p = {
                                    story: {
                                        display: "flex",
                                        position: "relative",
                                        overflow: "hidden"
                                    },
                                    storyContent: {
                                        width: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        margin: "auto"
                                    }
                                };
                                t.tester = function(e) {
                                    return {
                                        condition: !e.content && (!e.type || "image" === e.type),
                                        priority: 2
                                    }
                                }, t.default = {
                                    renderer: t.renderer,
                                    tester: t.tester
                                }
                            },
                            544: function(e, t, r) {
                                function n(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function i(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    u = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                                        return a(t, e), t
                                    },
                                    l = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.tester = t.renderer = void 0;
                                var c = u(r(639)),
                                    s = l(r(353)),
                                    f = l(r(803)),
                                    d = l(r(763));
                                t.renderer = function(e) {
                                    var t = e.story,
                                        r = e.action,
                                        i = e.isPaused,
                                        o = e.config,
                                        a = e.messageHandler,
                                        u = n(c.useState(!1), 2),
                                        l = u[0],
                                        y = u[1],
                                        v = n(c.useState(!1), 2),
                                        h = v[0],
                                        m = v[1],
                                        b = o.width,
                                        g = o.height,
                                        _ = o.loader,
                                        O = o.storyStyles,
                                        w = Object.assign(Object.assign({}, p.storyContent), O || {}),
                                        j = c.useRef(null);
                                    return c.useEffect((function() {
                                        j.current && (i ? j.current.pause() : j.current.play().catch((function() {})))
                                    }), [i]), c.createElement(f.default, Object.assign({}, {
                                        story: t,
                                        globalHeader: o.header
                                    }), c.createElement(d.default, Object.assign({}, {
                                        story: t,
                                        action: r
                                    }), c.createElement("div", {
                                        style: p.videoContainer
                                    }, c.createElement("video", {
                                        ref: j,
                                        style: w,
                                        src: t.url,
                                        controls: !1,
                                        onLoadedData: function() {
                                            a("UPDATE_VIDEO_DURATION", {
                                                duration: j.current.duration
                                            }), y(!0), j.current.play().then((function() {
                                                r("play")
                                            })).catch((function() {
                                                m(!0), j.current.play().finally((function() {
                                                    r("play")
                                                }))
                                            }))
                                        },
                                        playsInline: !0,
                                        onWaiting: function() {
                                            r("pause", !0)
                                        },
                                        onPlaying: function() {
                                            r("play", !0)
                                        },
                                        muted: h,
                                        autoPlay: !0,
                                        "webkit-playsinline": "true"
                                    }), !l && c.createElement("div", {
                                        style: {
                                            width: b,
                                            height: g,
                                            position: "absolute",
                                            left: 0,
                                            top: 0,
                                            background: "rgba(0, 0, 0, 0.9)",
                                            zIndex: 9,
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            color: "#ccc"
                                        }
                                    }, _ || c.createElement(s.default, null)))))
                                };
                                var p = {
                                    storyContent: {
                                        width: "auto",
                                        maxWidth: "100%",
                                        maxHeight: "100%",
                                        margin: "auto"
                                    },
                                    videoContainer: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }
                                };
                                t.tester = function(e) {
                                    return {
                                        condition: "video" === e.type,
                                        priority: 2
                                    }
                                }, t.default = {
                                    renderer: t.renderer,
                                    tester: t.tester
                                }
                            },
                            942: function(e, t, r) {
                                var n = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.renderers = void 0;
                                var i = n(r(209)),
                                    o = n(r(544)),
                                    a = n(r(248)),
                                    u = n(r(350));
                                t.renderers = [i.default, o.default, u.default, a.default]
                            },
                            803: function(e, t, r) {
                                function n(e) {
                                    return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                                        return typeof e
                                    } : function(e) {
                                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                                    }, n(e)
                                }
                                var i = this && this.__importDefault || function(e) {
                                    return e && e.__esModule ? e : {
                                        default: e
                                    }
                                };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var o = i(r(639)),
                                    a = i(r(463));
                                t.default = function(e) {
                                    var t = e.story,
                                        r = e.globalHeader,
                                        i = e.children;
                                    return o.default.createElement(o.default.Fragment, null, i, t.header && o.default.createElement("div", {
                                        style: {
                                            position: "absolute",
                                            left: 12,
                                            top: 20,
                                            zIndex: 19
                                        }
                                    }, "object" === n(t) ? r ? r(t.header) : o.default.createElement(a.default, {
                                        heading: t.header.heading,
                                        subheading: t.header.subheading,
                                        profileImage: t.header.profileImage
                                    }) : null))
                                }
                            },
                            763: function(e, t, r) {
                                function n(e, t) {
                                    return function(e) {
                                        if (Array.isArray(e)) return e
                                    }(e) || function(e, t) {
                                        var r = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                        if (null != r) {
                                            var n, i, o, a, u = [],
                                                l = !0,
                                                c = !1;
                                            try {
                                                if (o = (r = r.call(e)).next, 0 === t) {
                                                    if (Object(r) !== r) return;
                                                    l = !1
                                                } else
                                                    for (; !(l = (n = o.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                                            } catch (s) {
                                                c = !0, i = s
                                            } finally {
                                                try {
                                                    if (!l && null != r.return && (a = r.return(), Object(a) !== a)) return
                                                } finally {
                                                    if (c) throw i
                                                }
                                            }
                                            return u
                                        }
                                    }(e, t) || function(e, t) {
                                        if (e) {
                                            if ("string" === typeof e) return i(e, t);
                                            var r = Object.prototype.toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                                        }
                                    }(e, t) || function() {
                                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                    }()
                                }

                                function i(e, t) {
                                    (null == t || t > e.length) && (t = e.length);
                                    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                                    return n
                                }
                                var o = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                                        void 0 === n && (n = r);
                                        var i = Object.getOwnPropertyDescriptor(t, r);
                                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                                            enumerable: !0,
                                            get: function() {
                                                return t[r]
                                            }
                                        }), Object.defineProperty(e, n, i)
                                    } : function(e, t, r, n) {
                                        void 0 === n && (n = r), e[n] = t[r]
                                    }),
                                    a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                                        Object.defineProperty(e, "default", {
                                            enumerable: !0,
                                            value: t
                                        })
                                    } : function(e, t) {
                                        e.default = t
                                    }),
                                    u = this && this.__importStar || function(e) {
                                        if (e && e.__esModule) return e;
                                        var t = {};
                                        if (null != e)
                                            for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && o(t, e, r);
                                        return a(t, e), t
                                    },
                                    l = this && this.__importDefault || function(e) {
                                        return e && e.__esModule ? e : {
                                            default: e
                                        }
                                    };
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var c = u(r(639)),
                                    s = l(r(771));
                                t.default = function(e) {
                                    var t = e.story,
                                        r = e.action,
                                        i = e.customCollapsed,
                                        o = e.children,
                                        a = n((0, c.useState)(!1), 2),
                                        u = a[0],
                                        l = a[1],
                                        f = s.default;
                                    return c.default.createElement(c.default.Fragment, null, o, t.seeMore && c.default.createElement("div", {
                                        style: {
                                            position: "absolute",
                                            margin: "auto",
                                            bottom: u ? "unset" : 0,
                                            zIndex: 9999,
                                            width: "100%",
                                            height: u ? "100%" : "auto"
                                        }
                                    }, c.default.createElement(f, {
                                        action: r,
                                        toggleMore: function(e) {
                                            r(e ? "pause" : "play"), l(e)
                                        },
                                        showContent: u,
                                        seeMoreContent: t.seeMore,
                                        customCollapsed: i || t.seeMoreCollapsed
                                    })))
                                }
                            },
                            371: function(e, t) {
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.getRenderer = void 0, t.getRenderer = function(e, t) {
                                    var r = t.map((function(t) {
                                        return Object.assign(Object.assign({}, t), {
                                            testerResult: t.tester(e)
                                        })
                                    })).filter((function(e) {
                                        return e.testerResult.condition
                                    }));
                                    return r.sort((function(e, t) {
                                        return t.testerResult.priority - e.testerResult.priority
                                    })), r[0].renderer
                                }
                            },
                            335: function(e, t) {
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                }), t.timestamp = void 0, t.timestamp = function() {
                                    return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                                }
                            },
                            342: function(e, t, r) {
                                Object.defineProperty(t, "__esModule", {
                                    value: !0
                                });
                                var n = r(639);
                                t.default = function() {
                                    var e = (0, n.useRef)(!1);
                                    return (0, n.useEffect)((function() {
                                        return e.current = !0,
                                            function() {
                                                e.current = !1
                                            }
                                    }), []), (0, n.useCallback)((function() {
                                        return e.current
                                    }), [])
                                }
                            },
                            639: function(t) {
                                t.exports = e
                            }
                        },
                        r = {};

                    function n(e) {
                        var i = r[e];
                        if (void 0 !== i) return i.exports;
                        var o = r[e] = {
                            exports: {}
                        };
                        return t[e].call(o.exports, o, o.exports, n), o.exports
                    }
                    return n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return n.d(t, {
                            a: t
                        }), t
                    }, n.d = function(e, t) {
                        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t[r]
                        })
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, n.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, n(370)
                }()
            }, e.exports = n(r(3))
        },
        762: function(e, t, r) {
            var n, i, o = r(763),
                a = r(764),
                u = 0,
                l = 0;
            e.exports = function(e, t, r) {
                var c = t && r || 0,
                    s = t || [],
                    f = (e = e || {}).node || n,
                    d = void 0 !== e.clockseq ? e.clockseq : i;
                if (null == f || null == d) {
                    var p = o();
                    null == f && (f = n = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = i = 16383 & (p[6] << 8 | p[7]))
                }
                var y = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    v = void 0 !== e.nsecs ? e.nsecs : l + 1,
                    h = y - u + (v - l) / 1e4;
                if (h < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (h < 0 || y > u) && void 0 === e.nsecs && (v = 0), v >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                u = y, l = v, i = d;
                var m = (1e4 * (268435455 & (y += 122192928e5)) + v) % 4294967296;
                s[c++] = m >>> 24 & 255, s[c++] = m >>> 16 & 255, s[c++] = m >>> 8 & 255, s[c++] = 255 & m;
                var b = y / 4294967296 * 1e4 & 268435455;
                s[c++] = b >>> 8 & 255, s[c++] = 255 & b, s[c++] = b >>> 24 & 15 | 16, s[c++] = b >>> 16 & 255, s[c++] = d >>> 8 | 128, s[c++] = 255 & d;
                for (var g = 0; g < 6; ++g) s[c + g] = f[g];
                return t || a(s)
            }
        },
        763: function(e, t) {
            var r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
            if (r) {
                var n = new Uint8Array(16);
                e.exports = function() {
                    return r(n), n
                }
            } else {
                var i = new Array(16);
                e.exports = function() {
                    for (var e, t = 0; t < 16; t++) 0 === (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
                    return i
                }
            }
        },
        764: function(e, t) {
            for (var r = [], n = 0; n < 256; ++n) r[n] = (n + 256).toString(16).substr(1);
            e.exports = function(e, t) {
                var n = t || 0,
                    i = r;
                return [i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], "-", i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]], i[e[n++]]].join("")
            }
        },
        767: function(e, t, r) {
            ! function(t, r) {
                var n = function(e, t, r) {
                    "use strict";
                    var n, i;
                    if (function() {
                            var t, r = {
                                lazyClass: "lazyload",
                                loadedClass: "lazyloaded",
                                loadingClass: "lazyloading",
                                preloadClass: "lazypreload",
                                errorClass: "lazyerror",
                                autosizesClass: "lazyautosizes",
                                fastLoadedClass: "ls-is-cached",
                                iframeLoadMode: 0,
                                srcAttr: "data-src",
                                srcsetAttr: "data-srcset",
                                sizesAttr: "data-sizes",
                                minSize: 40,
                                customMedia: {},
                                init: !0,
                                expFactor: 1.5,
                                hFac: .8,
                                loadMode: 2,
                                loadHidden: !0,
                                ricTimeout: 0,
                                throttleDelay: 125
                            };
                            for (t in i = e.lazySizesConfig || e.lazysizesConfig || {}, r) t in i || (i[t] = r[t])
                        }(), !t || !t.getElementsByClassName) return {
                        init: function() {},
                        cfg: i,
                        noSupport: !0
                    };
                    var o = t.documentElement,
                        a = e.HTMLPictureElement,
                        u = "addEventListener",
                        l = "getAttribute",
                        c = e[u].bind(e),
                        s = e.setTimeout,
                        f = e.requestAnimationFrame || s,
                        d = e.requestIdleCallback,
                        p = /^picture$/i,
                        y = ["load", "error", "lazyincluded", "_lazyloaded"],
                        v = {},
                        h = Array.prototype.forEach,
                        m = function(e, t) {
                            return v[t] || (v[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), v[t].test(e[l]("class") || "") && v[t]
                        },
                        b = function(e, t) {
                            m(e, t) || e.setAttribute("class", (e[l]("class") || "").trim() + " " + t)
                        },
                        g = function(e, t) {
                            var r;
                            (r = m(e, t)) && e.setAttribute("class", (e[l]("class") || "").replace(r, " "))
                        },
                        _ = function e(t, r, n) {
                            var i = n ? u : "removeEventListener";
                            n && e(t, r), y.forEach((function(e) {
                                t[i](e, r)
                            }))
                        },
                        O = function(e, r, i, o, a) {
                            var u = t.createEvent("Event");
                            return i || (i = {}), i.instance = n, u.initEvent(r, !o, !a), u.detail = i, e.dispatchEvent(u), u
                        },
                        w = function(t, r) {
                            var n;
                            !a && (n = e.picturefill || i.pf) ? (r && r.src && !t[l]("srcset") && t.setAttribute("srcset", r.src), n({
                                reevaluate: !0,
                                elements: [t]
                            })) : r && r.src && (t.src = r.src)
                        },
                        j = function(e, t) {
                            return (getComputedStyle(e, null) || {})[t]
                        },
                        M = function(e, t, r) {
                            for (r = r || e.offsetWidth; r < i.minSize && t && !e._lazysizesWidth;) r = t.offsetWidth, t = t.parentNode;
                            return r
                        },
                        S = function() {
                            var e, r, n = [],
                                i = [],
                                o = n,
                                a = function() {
                                    var t = o;
                                    for (o = n.length ? i : n, e = !0, r = !1; t.length;) t.shift()();
                                    e = !1
                                },
                                u = function(n, i) {
                                    e && !i ? n.apply(this, arguments) : (o.push(n), r || (r = !0, (t.hidden ? s : f)(a)))
                                };
                            return u._lsFlush = a, u
                        }(),
                        x = function(e, t) {
                            return t ? function() {
                                S(e)
                            } : function() {
                                var t = this,
                                    r = arguments;
                                S((function() {
                                    e.apply(t, r)
                                }))
                            }
                        },
                        E = function(e) {
                            var t, n = 0,
                                o = i.throttleDelay,
                                a = i.ricTimeout,
                                u = function() {
                                    t = !1, n = r.now(), e()
                                },
                                l = d && a > 49 ? function() {
                                    d(u, {
                                        timeout: a
                                    }), a !== i.ricTimeout && (a = i.ricTimeout)
                                } : x((function() {
                                    s(u)
                                }), !0);
                            return function(e) {
                                var i;
                                (e = !0 === e) && (a = 33), t || (t = !0, (i = o - (r.now() - n)) < 0 && (i = 0), e || i < 9 ? l() : s(l, i))
                            }
                        },
                        C = function(e) {
                            var t, n, i = 99,
                                o = function() {
                                    t = null, e()
                                },
                                a = function e() {
                                    var t = r.now() - n;
                                    t < i ? s(e, i - t) : (d || o)(o)
                                };
                            return function() {
                                n = r.now(), t || (t = s(a, i))
                            }
                        },
                        A = function() {
                            var a, d, y, v, M, A, z, D, I, k, T, W, R = /^img$/i,
                                N = /^iframe$/i,
                                B = "onscroll" in e && !/(gle|ing)bot/.test(navigator.userAgent),
                                F = 0,
                                L = 0,
                                H = 0,
                                U = -1,
                                $ = function(e) {
                                    H--, (!e || H < 0 || !e.target) && (H = 0)
                                },
                                V = function(e) {
                                    return null == W && (W = "hidden" == j(t.body, "visibility")), W || !("hidden" == j(e.parentNode, "visibility") && "hidden" == j(e, "visibility"))
                                },
                                q = function(e, r) {
                                    var n, i = e,
                                        a = V(e);
                                    for (D -= r, T += r, I -= r, k += r; a && (i = i.offsetParent) && i != t.body && i != o;)(a = (j(i, "opacity") || 1) > 0) && "visible" != j(i, "overflow") && (n = i.getBoundingClientRect(), a = k > n.left && I < n.right && T > n.top - 1 && D < n.bottom + 1);
                                    return a
                                },
                                J = function() {
                                    var e, r, u, c, s, f, p, y, h, m, b, g, _ = n.elements;
                                    if ((v = i.loadMode) && H < 8 && (e = _.length)) {
                                        for (r = 0, U++; r < e; r++)
                                            if (_[r] && !_[r]._lazyRace)
                                                if (!B || n.prematureUnveil && n.prematureUnveil(_[r])) te(_[r]);
                                                else if ((y = _[r][l]("data-expand")) && (f = 1 * y) || (f = L), m || (m = !i.expand || i.expand < 1 ? o.clientHeight > 500 && o.clientWidth > 500 ? 500 : 370 : i.expand, n._defEx = m, b = m * i.expFactor, g = i.hFac, W = null, L < b && H < 1 && U > 2 && v > 2 && !t.hidden ? (L = b, U = 0) : L = v > 1 && U > 1 && H < 6 ? m : F), h !== f && (A = innerWidth + f * g, z = innerHeight + f, p = -1 * f, h = f), u = _[r].getBoundingClientRect(), (T = u.bottom) >= p && (D = u.top) <= z && (k = u.right) >= p * g && (I = u.left) <= A && (T || k || I || D) && (i.loadHidden || V(_[r])) && (d && H < 3 && !y && (v < 3 || U < 4) || q(_[r], f))) {
                                            if (te(_[r]), s = !0, H > 9) break
                                        } else !s && d && !c && H < 4 && U < 4 && v > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !y && (T || k || I || D || "auto" != _[r][l](i.sizesAttr))) && (c = a[0] || _[r]);
                                        c && !s && te(c)
                                    }
                                },
                                Q = E(J),
                                K = function(e) {
                                    var t = e.target;
                                    t._lazyCache ? delete t._lazyCache : ($(e), b(t, i.loadedClass), g(t, i.loadingClass), _(t, G), O(t, "lazyloaded"))
                                },
                                X = x(K),
                                G = function(e) {
                                    X({
                                        target: e.target
                                    })
                                },
                                Y = function(e, t) {
                                    var r = e.getAttribute("data-load-mode") || i.iframeLoadMode;
                                    0 == r ? e.contentWindow.location.replace(t) : 1 == r && (e.src = t)
                                },
                                Z = function(e) {
                                    var t, r = e[l](i.srcsetAttr);
                                    (t = i.customMedia[e[l]("data-media") || e[l]("media")]) && e.setAttribute("media", t), r && e.setAttribute("srcset", r)
                                },
                                ee = x((function(e, t, r, n, o) {
                                    var a, u, c, f, d, v;
                                    (d = O(e, "lazybeforeunveil", t)).defaultPrevented || (n && (r ? b(e, i.autosizesClass) : e.setAttribute("sizes", n)), u = e[l](i.srcsetAttr), a = e[l](i.srcAttr), o && (f = (c = e.parentNode) && p.test(c.nodeName || "")), v = t.firesLoad || "src" in e && (u || a || f), d = {
                                        target: e
                                    }, b(e, i.loadingClass), v && (clearTimeout(y), y = s($, 2500), _(e, G, !0)), f && h.call(c.getElementsByTagName("source"), Z), u ? e.setAttribute("srcset", u) : a && !f && (N.test(e.nodeName) ? Y(e, a) : e.src = a), o && (u || f) && w(e, {
                                        src: a
                                    })), e._lazyRace && delete e._lazyRace, g(e, i.lazyClass), S((function() {
                                        var t = e.complete && e.naturalWidth > 1;
                                        v && !t || (t && b(e, i.fastLoadedClass), K(d), e._lazyCache = !0, s((function() {
                                            "_lazyCache" in e && delete e._lazyCache
                                        }), 9)), "lazy" == e.loading && H--
                                    }), !0)
                                })),
                                te = function(e) {
                                    if (!e._lazyRace) {
                                        var t, r = R.test(e.nodeName),
                                            n = r && (e[l](i.sizesAttr) || e[l]("sizes")),
                                            o = "auto" == n;
                                        (!o && d || !r || !e[l]("src") && !e.srcset || e.complete || m(e, i.errorClass) || !m(e, i.lazyClass)) && (t = O(e, "lazyunveilread").detail, o && P.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, H++, ee(e, t, o, n, r))
                                    }
                                },
                                re = C((function() {
                                    i.loadMode = 3, Q()
                                })),
                                ne = function() {
                                    3 == i.loadMode && (i.loadMode = 2), re()
                                },
                                ie = function e() {
                                    d || (r.now() - M < 999 ? s(e, 999) : (d = !0, i.loadMode = 3, Q(), c("scroll", ne, !0)))
                                };
                            return {
                                _: function() {
                                    M = r.now(), n.elements = t.getElementsByClassName(i.lazyClass), a = t.getElementsByClassName(i.lazyClass + " " + i.preloadClass), c("scroll", Q, !0), c("resize", Q, !0), c("pageshow", (function(e) {
                                        if (e.persisted) {
                                            var r = t.querySelectorAll("." + i.loadingClass);
                                            r.length && r.forEach && f((function() {
                                                r.forEach((function(e) {
                                                    e.complete && te(e)
                                                }))
                                            }))
                                        }
                                    })), e.MutationObserver ? new MutationObserver(Q).observe(o, {
                                        childList: !0,
                                        subtree: !0,
                                        attributes: !0
                                    }) : (o[u]("DOMNodeInserted", Q, !0), o[u]("DOMAttrModified", Q, !0), setInterval(Q, 999)), c("hashchange", Q, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach((function(e) {
                                        t[u](e, Q, !0)
                                    })), /d$|^c/.test(t.readyState) ? ie() : (c("load", ie), t[u]("DOMContentLoaded", Q), s(ie, 2e4)), n.elements.length ? (J(), S._lsFlush()) : Q()
                                },
                                checkElems: Q,
                                unveil: te,
                                _aLSL: ne
                            }
                        }(),
                        P = function() {
                            var e, r = x((function(e, t, r, n) {
                                    var i, o, a;
                                    if (e._lazysizesWidth = n, n += "px", e.setAttribute("sizes", n), p.test(t.nodeName || ""))
                                        for (o = 0, a = (i = t.getElementsByTagName("source")).length; o < a; o++) i[o].setAttribute("sizes", n);
                                    r.detail.dataAttr || w(e, r.detail)
                                })),
                                n = function(e, t, n) {
                                    var i, o = e.parentNode;
                                    o && (n = M(e, o, n), (i = O(e, "lazybeforesizes", {
                                        width: n,
                                        dataAttr: !!t
                                    })).defaultPrevented || (n = i.detail.width) && n !== e._lazysizesWidth && r(e, o, i, n))
                                },
                                o = C((function() {
                                    var t, r = e.length;
                                    if (r)
                                        for (t = 0; t < r; t++) n(e[t])
                                }));
                            return {
                                _: function() {
                                    e = t.getElementsByClassName(i.autosizesClass), c("resize", o)
                                },
                                checkElems: o,
                                updateElem: n
                            }
                        }(),
                        z = function e() {
                            !e.i && t.getElementsByClassName && (e.i = !0, P._(), A._())
                        };
                    return s((function() {
                        i.init && z()
                    })), n = {
                        cfg: i,
                        autoSizer: P,
                        loader: A,
                        init: z,
                        uP: w,
                        aC: b,
                        rC: g,
                        hC: m,
                        fire: O,
                        gW: M,
                        rAF: S
                    }
                }(t, t.document, Date);
                t.lazySizes = n, e.exports && (e.exports = n)
            }("undefined" != typeof window ? window : {})
        },
        802: function(e, t, r) {
            (function(t) {
                var r = "Expected a function",
                    n = NaN,
                    i = "[object Symbol]",
                    o = /^\s+|\s+$/g,
                    a = /^[-+]0x[0-9a-f]+$/i,
                    u = /^0b[01]+$/i,
                    l = /^0o[0-7]+$/i,
                    c = parseInt,
                    s = "object" == typeof t && t && t.Object === Object && t,
                    f = "object" == typeof self && self && self.Object === Object && self,
                    d = s || f || Function("return this")(),
                    p = Object.prototype.toString,
                    y = Math.max,
                    v = Math.min,
                    h = function() {
                        return d.Date.now()
                    };

                function m(e, t, n) {
                    var i, o, a, u, l, c, s = 0,
                        f = !1,
                        d = !1,
                        p = !0;
                    if ("function" != typeof e) throw new TypeError(r);

                    function m(t) {
                        var r = i,
                            n = o;
                        return i = o = void 0, s = t, u = e.apply(n, r)
                    }

                    function _(e) {
                        var r = e - c;
                        return void 0 === c || r >= t || r < 0 || d && e - s >= a
                    }

                    function O() {
                        var e = h();
                        if (_(e)) return w(e);
                        l = setTimeout(O, function(e) {
                            var r = t - (e - c);
                            return d ? v(r, a - (e - s)) : r
                        }(e))
                    }

                    function w(e) {
                        return l = void 0, p && i ? m(e) : (i = o = void 0, u)
                    }

                    function j() {
                        var e = h(),
                            r = _(e);
                        if (i = arguments, o = this, c = e, r) {
                            if (void 0 === l) return function(e) {
                                return s = e, l = setTimeout(O, t), f ? m(e) : u
                            }(c);
                            if (d) return l = setTimeout(O, t), m(c)
                        }
                        return void 0 === l && (l = setTimeout(O, t)), u
                    }
                    return t = g(t) || 0, b(n) && (f = !!n.leading, a = (d = "maxWait" in n) ? y(g(n.maxWait) || 0, t) : a, p = "trailing" in n ? !!n.trailing : p), j.cancel = function() {
                        void 0 !== l && clearTimeout(l), s = 0, i = c = o = l = void 0
                    }, j.flush = function() {
                        return void 0 === l ? u : w(h())
                    }, j
                }

                function b(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function g(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && p.call(e) == i
                        }(e)) return n;
                    if (b(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = b(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(o, "");
                    var r = u.test(e);
                    return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? n : +e
                }
                e.exports = function(e, t, n) {
                    var i = !0,
                        o = !0;
                    if ("function" != typeof e) throw new TypeError(r);
                    return b(n) && (i = "leading" in n ? !!n.leading : i, o = "trailing" in n ? !!n.trailing : o), m(e, t, {
                        leading: i,
                        maxWait: t,
                        trailing: o
                    })
                }
            }).call(this, r(69))
        },
        817: function(e, t, r) {
            var n, i, o;
            ! function(a, u) {
                if (a) {
                    u = u.bind(null, a, a.document), e.exports ? u(r(767)) : (i = [r(767)], void 0 === (o = "function" === typeof(n = u) ? n.apply(t, i) : n) || (e.exports = o))
                }
            }("undefined" != typeof window ? window : 0, (function(e, t, r) {
                "use strict";
                if (e.addEventListener) {
                    var n = /\s+(\d+)(w|h)\s+(\d+)(w|h)/,
                        i = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/,
                        o = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,
                        a = /^picture$/i,
                        u = r.cfg,
                        l = {
                            getParent: function(t, r) {
                                var n = t,
                                    i = t.parentNode;
                                return r && "prev" != r || !i || !a.test(i.nodeName || "") || (i = i.parentNode), "self" != r && (n = "prev" == r ? t.previousElementSibling : r && (i.closest || e.jQuery) && (i.closest ? i.closest(r) : jQuery(i).closest(r)[0]) || i), n
                            },
                            getFit: function(e) {
                                var t, r, n = getComputedStyle(e, null) || {},
                                    a = n.content || n.fontFamily,
                                    u = {
                                        fit: e._lazysizesParentFit || e.getAttribute("data-parent-fit")
                                    };
                                return !u.fit && a && (t = a.match(i)) && (u.fit = t[1]), u.fit ? (!(r = e._lazysizesParentContainer || e.getAttribute("data-parent-container")) && a && (t = a.match(o)) && (r = t[1]), u.parent = l.getParent(e, r)) : u.fit = n.objectFit, u
                            },
                            getImageRatio: function(t) {
                                var r, i, o, l, c, s, f, d = t.parentNode,
                                    p = d && a.test(d.nodeName || "") ? d.querySelectorAll("source, img") : [t];
                                for (r = 0; r < p.length; r++)
                                    if (i = (t = p[r]).getAttribute(u.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "", o = t._lsMedia || t.getAttribute("media"), o = u.customMedia[t.getAttribute("data-media") || o] || o, i && (!o || (e.matchMedia && matchMedia(o) || {}).matches)) {
                                        (l = parseFloat(t.getAttribute("data-aspectratio"))) || ((c = i.match(n)) ? "w" == c[2] ? (s = c[1], f = c[3]) : (s = c[3], f = c[1]) : (s = t.getAttribute("width"), f = t.getAttribute("height")), l = s / f);
                                        break
                                    }
                                return l
                            },
                            calculateSize: function(e, t) {
                                var r, n, i, o = this.getFit(e),
                                    a = o.fit,
                                    u = o.parent;
                                return "width" == a || ("contain" == a || "cover" == a) && (n = this.getImageRatio(e)) ? (u ? t = u.clientWidth : u = e, i = t, "width" == a ? i = t : (r = t / u.clientHeight) && ("cover" == a && r < n || "contain" == a && r > n) && (i = t * (n / r)), i) : t
                            }
                        };
                    r.parentFit = l, t.addEventListener("lazybeforesizes", (function(e) {
                        if (!e.defaultPrevented && e.detail.instance == r) {
                            var t = e.target;
                            e.detail.width = l.calculateSize(t, e.detail.width)
                        }
                    }))
                }
            }))
        }
    }
]);