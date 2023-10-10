/*! For license information please see 2.007e5f32.chunk.js.LICENSE.txt */
(this["webpackJsonpfloweraura-react"] = this["webpackJsonpfloweraura-react"] || []).push([
    [2], {
        756: function(e, r, t) {
            "use strict";
            t.d(r, "a", (function() {
                return je
            }));
            var n = t(237),
                u = t(122),
                a = t(31),
                i = t(178),
                c = t(29),
                s = t(55),
                o = t(3),
                f = function(e) {
                    return e instanceof HTMLElement
                },
                l = {
                    BLUR: "blur",
                    CHANGE: "change",
                    INPUT: "input"
                },
                b = {
                    onBlur: "onBlur",
                    onChange: "onChange",
                    onSubmit: "onSubmit",
                    onTouched: "onTouched",
                    all: "all"
                },
                d = "select",
                v = "undefined",
                O = {
                    max: "max",
                    min: "min",
                    maxLength: "maxLength",
                    minLength: "minLength",
                    pattern: "pattern",
                    required: "required",
                    validate: "validate"
                };
            var g = function(e) {
                    return null == e
                },
                h = function(e) {
                    return "object" === typeof e
                },
                j = function(e) {
                    return !g(e) && !Array.isArray(e) && h(e) && !(e instanceof Date)
                },
                y = function(e) {
                    return /^\w*$/.test(e)
                },
                p = function(e) {
                    return e.filter(Boolean)
                },
                m = function(e) {
                    return p(e.replace(/["|']/g, "").replace(/\[/g, ".").replace(/\]/g, "").split("."))
                };

            function k(e, r, t) {
                for (var n = -1, u = y(r) ? [r] : m(r), a = u.length, i = a - 1; ++n < a;) {
                    var c = u[n],
                        s = t;
                    if (n !== i) {
                        var o = e[c];
                        s = j(o) || Array.isArray(o) ? o : isNaN(+u[n + 1]) ? {} : []
                    }
                    e[c] = s, e = e[c]
                }
                return e
            }
            var x = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    for (var t in e) y(t) ? r[t] = e[t] : k(r, t, e[t]);
                    return r
                },
                A = function(e) {
                    return void 0 === e
                },
                V = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 ? arguments[2] : void 0,
                        n = p(r.split(/[,[\].]+?/)).reduce((function(e, r) {
                            return g(e) ? e : e[r]
                        }), e);
                    return A(n) || n === e ? A(e[r]) ? t : e[r] : n
                },
                R = function(e, r) {
                    for (var t in e)
                        if (V(r, t)) {
                            var n = e[t];
                            if (n) {
                                if (n.ref.focus && A(n.ref.focus())) break;
                                if (n.options) {
                                    n.options[0].ref.focus();
                                    break
                                }
                            }
                        }
                },
                C = function(e, r) {
                    f(e) && e.removeEventListener && (e.removeEventListener(l.INPUT, r), e.removeEventListener(l.CHANGE, r), e.removeEventListener(l.BLUR, r))
                },
                w = {
                    isValid: !1,
                    value: null
                },
                S = function(e) {
                    return Array.isArray(e) ? e.reduce((function(e, r) {
                        return r && r.ref.checked ? {
                            isValid: !0,
                            value: r.ref.value
                        } : e
                    }), w) : w
                },
                D = function(e) {
                    return Object(s.a)(e).filter((function(e) {
                        return e.selected
                    })).map((function(e) {
                        return e.value
                    }))
                },
                F = function(e) {
                    return "radio" === e.type
                },
                E = function(e) {
                    return "file" === e.type
                },
                L = function(e) {
                    return "checkbox" === e.type
                },
                N = function(e) {
                    return e.type === "".concat(d, "-multiple")
                },
                B = {
                    value: !1,
                    isValid: !1
                },
                T = {
                    value: !0,
                    isValid: !0
                },
                M = function(e) {
                    if (Array.isArray(e)) {
                        if (e.length > 1) {
                            var r = e.filter((function(e) {
                                return e && e.ref.checked
                            })).map((function(e) {
                                return e.ref.value
                            }));
                            return {
                                value: r,
                                isValid: !!r.length
                            }
                        }
                        var t = e[0].ref,
                            n = t.checked,
                            u = t.value,
                            a = t.attributes;
                        return n ? a && !A(a.value) ? A(u) || "" === u ? T : {
                            value: u,
                            isValid: !0
                        } : T : B
                    }
                    return B
                };

            function U(e, r, t, n, u) {
                var a = e.current[r];
                if (a) {
                    var i = a.ref,
                        c = i.value,
                        s = i.disabled,
                        o = a.ref,
                        f = a.valueAsNumber,
                        l = a.valueAsDate,
                        b = a.setValueAs;
                    if (s && n) return;
                    return E(o) ? o.files : F(o) ? S(a.options).value : N(o) ? D(o.options) : L(o) ? M(a.options).value : u ? c : f ? "" === c ? NaN : +c : l ? o.valueAsDate : b ? b(c) : c
                }
                if (t) return V(t.current, r)
            }

            function W(e) {
                return !e || e instanceof HTMLElement && e.nodeType !== Node.DOCUMENT_NODE && W(e.parentNode)
            }
            var P = function(e) {
                    return j(e) && !Object.keys(e).length
                },
                H = function(e) {
                    return "boolean" === typeof e
                };

            function q(e, r) {
                var t, n = y(r) ? [r] : m(r),
                    u = 1 == n.length ? e : function(e, r) {
                        for (var t = r.slice(0, -1).length, n = 0; n < t;) e = A(e) ? n++ : e[r[n++]];
                        return e
                    }(e, n),
                    a = n[n.length - 1];
                u && delete u[a];
                for (var i = 0; i < n.slice(0, -1).length; i++) {
                    var c = -1,
                        s = void 0,
                        o = n.slice(0, -(i + 1)),
                        f = o.length - 1;
                    for (i > 0 && (t = e); ++c < o.length;) {
                        var l = o[c];
                        s = s ? s[l] : e[l], f === c && (j(s) && P(s) || Array.isArray(s) && !s.filter((function(e) {
                            return j(e) && !P(e) || H(e)
                        })).length) && (t ? delete t[l] : delete e[l]), t = s
                    }
                }
                return e
            }
            var I = function(e, r) {
                return e && e.ref === r
            };
            var G = function(e) {
                return g(e) || !h(e)
            };

            function J(e, r) {
                if (G(e) || G(r)) return r;
                for (var t in r) {
                    var n = e[t],
                        u = r[t];
                    try {
                        e[t] = j(n) && j(u) || Array.isArray(n) && Array.isArray(u) ? J(n, u) : u
                    } catch (a) {}
                }
                return e
            }

            function z(e, r, t) {
                if (G(e) || G(r) || e instanceof Date || r instanceof Date) return e === r;
                if (!Object(o.isValidElement)(e)) {
                    var n = Object.keys(e),
                        u = Object.keys(r);
                    if (n.length !== u.length) return !1;
                    for (var a = 0, i = n; a < i.length; a++) {
                        var c = i[a],
                            s = e[c];
                        if (!t || "ref" !== c) {
                            var f = r[c];
                            if ((j(s) || Array.isArray(s)) && (j(f) || Array.isArray(f)) ? !z(s, f, t) : s !== f) return !1
                        }
                    }
                }
                return !0
            }

            function $(e, r, t, n, u) {
                for (var a = -1; ++a < e.length;) {
                    for (var i in e[a]) Array.isArray(e[a][i]) ? (!t[a] && (t[a] = {}), t[a][i] = [], $(e[a][i], V(r[a] || {}, i, []), t[a][i], t[a], i)) : z(V(r[a] || {}, i), e[a][i]) ? k(t[a] || {}, i) : t[a] = Object.assign(Object.assign({}, t[a]), Object(c.a)({}, i, !0));
                    n && !t.length && delete n[u]
                }
                return t
            }
            var _ = function(e, r, t) {
                    return J($(e, r, t.slice(0, e.length)), $(r, e, t.slice(0, e.length)))
                },
                K = function(e) {
                    return "string" === typeof e
                },
                Q = function(e, r, t, n, u) {
                    var a = {},
                        i = function(r) {
                            (A(u) || (K(u) ? r.startsWith(u) : Array.isArray(u) && u.find((function(e) {
                                return r.startsWith(e)
                            })))) && (a[r] = U(e, r, void 0, n))
                        };
                    for (var c in e.current) i(c);
                    return t ? x(a) : J(r, x(a))
                },
                X = function(e) {
                    var r = e.errors,
                        t = e.name,
                        n = e.error,
                        u = e.validFields,
                        a = e.fieldsWithValidation,
                        i = A(n),
                        c = V(r, t);
                    return i && !!c || !i && !z(c, n, !0) || i && V(a, t) && !V(u, t)
                },
                Y = function(e) {
                    return e instanceof RegExp
                },
                Z = function(e) {
                    return j(e) && !Y(e) ? e : {
                        value: e,
                        message: ""
                    }
                },
                ee = function(e) {
                    return "function" === typeof e
                },
                re = function(e) {
                    return K(e) || Object(o.isValidElement)(e)
                };

            function te(e, r) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "validate";
                if (re(e) || H(e) && !e) return {
                    type: t,
                    message: re(e) ? e : "",
                    ref: r
                }
            }
            var ne = function(e, r, t, n, u) {
                    return r ? Object.assign(Object.assign({}, t[e]), {
                        types: Object.assign(Object.assign({}, t[e] && t[e].types ? t[e].types : {}), Object(c.a)({}, n, u || !0))
                    }) : {}
                },
                ue = function() {
                    var e = Object(i.a)(Object(u.a)().mark((function e(r, t, n, i) {
                        var c, s, o, f, l, b, d, v, h, y, p, m, k, x, A, V, R, C, w, D, E, N, B, T, W, q, I, G, J, z, $, _, Q, X, ue, ae, ie, ce, se, oe, fe, le, be, de, ve, Oe;
                        return Object(u.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c = n.ref, s = n.ref.value, o = n.options, f = n.required, l = n.maxLength, b = n.minLength, d = n.min, v = n.max, h = n.pattern, y = n.validate, p = c.name, m = {}, k = F(c), x = L(c), A = k || x, V = "" === s, R = ne.bind(null, p, t, m), C = function(e, r, t) {
                                            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : O.maxLength,
                                                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : O.minLength,
                                                a = e ? r : t;
                                            m[p] = Object.assign({
                                                type: e ? n : u,
                                                message: a,
                                                ref: c
                                            }, R(e ? n : u, a))
                                        }, !f || !(!k && !x && (V || g(s)) || H(s) && !s || x && !M(o).isValid || k && !S(o).isValid)) {
                                        e.next = 15;
                                        break
                                    }
                                    if (w = re(f) ? {
                                            value: !!f,
                                            message: f
                                        } : Z(f), D = w.value, E = w.message, !D) {
                                        e.next = 15;
                                        break
                                    }
                                    if (m[p] = Object.assign({
                                            type: O.required,
                                            message: E,
                                            ref: A ? ((r.current[p].options || [])[0] || {}).ref : c
                                        }, R(O.required, E)), t) {
                                        e.next = 15;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 15:
                                    if (g(d) && g(v) || "" === s) {
                                        e.next = 23;
                                        break
                                    }
                                    if (T = Z(v), W = Z(d), isNaN(s) ? (I = c.valueAsDate || new Date(s), K(T.value) && (N = I > new Date(T.value)), K(W.value) && (B = I < new Date(W.value))) : (q = c.valueAsNumber || parseFloat(s), g(T.value) || (N = q > T.value), g(W.value) || (B = q < W.value)), !N && !B) {
                                        e.next = 23;
                                        break
                                    }
                                    if (C(!!N, T.message, W.message, O.max, O.min), t) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 23:
                                    if (!K(s) || V || !l && !b) {
                                        e.next = 32;
                                        break
                                    }
                                    if (G = Z(l), J = Z(b), z = !g(G.value) && s.length > G.value, $ = !g(J.value) && s.length < J.value, !z && !$) {
                                        e.next = 32;
                                        break
                                    }
                                    if (C(z, G.message, J.message), t) {
                                        e.next = 32;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 32:
                                    if (!K(s) || !h || V) {
                                        e.next = 38;
                                        break
                                    }
                                    if (_ = Z(h), Q = _.value, X = _.message, !Y(Q) || Q.test(s)) {
                                        e.next = 38;
                                        break
                                    }
                                    if (m[p] = Object.assign({
                                            type: O.pattern,
                                            message: X,
                                            ref: c
                                        }, R(O.pattern, X)), t) {
                                        e.next = 38;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 38:
                                    if (!y) {
                                        e.next = 71;
                                        break
                                    }
                                    if (ue = U(r, p, i, !1, !0), ae = A && o ? o[0].ref : c, !ee(y)) {
                                        e.next = 52;
                                        break
                                    }
                                    return e.next = 44, y(ue);
                                case 44:
                                    if (ie = e.sent, !(ce = te(ie, ae))) {
                                        e.next = 50;
                                        break
                                    }
                                    if (m[p] = Object.assign(Object.assign({}, ce), R(O.validate, ce.message)), t) {
                                        e.next = 50;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 50:
                                    e.next = 71;
                                    break;
                                case 52:
                                    if (!j(y)) {
                                        e.next = 71;
                                        break
                                    }
                                    se = {}, oe = 0, fe = Object.entries(y);
                                case 55:
                                    if (!(oe < fe.length)) {
                                        e.next = 67;
                                        break
                                    }
                                    if (le = Object(a.a)(fe[oe], 2), be = le[0], de = le[1], P(se) || t) {
                                        e.next = 59;
                                        break
                                    }
                                    return e.abrupt("break", 67);
                                case 59:
                                    return e.next = 61, de(ue);
                                case 61:
                                    ve = e.sent, (Oe = te(ve, ae, be)) && (se = Object.assign(Object.assign({}, Oe), R(be, Oe.message)), t && (m[p] = se));
                                case 64:
                                    oe++, e.next = 55;
                                    break;
                                case 67:
                                    if (P(se)) {
                                        e.next = 71;
                                        break
                                    }
                                    if (m[p] = Object.assign({
                                            ref: ae
                                        }, se), t) {
                                        e.next = 71;
                                        break
                                    }
                                    return e.abrupt("return", m);
                                case 71:
                                    return e.abrupt("return", m);
                                case 72:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r, t, n, u) {
                        return e.apply(this, arguments)
                    }
                }(),
                ae = function e(r, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    for (var u in t) {
                        var a = r + (j(t) ? ".".concat(u) : "[".concat(u, "]"));
                        G(t[u]) ? n.push(a) : e(a, t[u], n)
                    }
                    return n
                },
                ie = function(e, r, t, n, u) {
                    var a = void 0;
                    return t.add(r), P(e) || (a = V(e, r), (j(a) || Array.isArray(a)) && ae(r, a).forEach((function(e) {
                        return t.add(e)
                    }))), A(a) ? u ? n : V(n, r) : a
                },
                ce = function(e) {
                    var r = e.isOnBlur,
                        t = e.isOnChange,
                        n = e.isOnTouch,
                        u = e.isTouched,
                        a = e.isReValidateOnBlur,
                        i = e.isReValidateOnChange,
                        c = e.isBlurEvent,
                        s = e.isSubmitted;
                    return !e.isOnAll && (!s && n ? !(u || c) : (s ? a : r) ? !c : !(s ? i : t) || c)
                },
                se = function(e) {
                    return e.substring(0, e.indexOf("["))
                },
                oe = function(e, r) {
                    return RegExp("^".concat(r, "([|.)\\d+").replace(/\[/g, "\\[").replace(/\]/g, "\\]")).test(e)
                },
                fe = function(e, r) {
                    return Object(s.a)(e).some((function(e) {
                        return oe(r, e)
                    }))
                },
                le = function(e) {
                    return e.type === "".concat(d, "-one")
                };
            var be = typeof window !== v && typeof document !== v;

            function de(e) {
                var r, t;
                if (G(e) || be && (e instanceof File || f(e))) return e;
                if (!["Set", "Map", "Object", "Date", "Array"].includes(null === (r = e.constructor) || void 0 === r ? void 0 : r.name)) return e;
                if (e instanceof Date) return t = new Date(e.getTime());
                if (e instanceof Set) {
                    t = new Set;
                    var u, a = Object(n.a)(e);
                    try {
                        for (a.s(); !(u = a.n()).done;) {
                            var i = u.value;
                            t.add(i)
                        }
                    } catch (b) {
                        a.e(b)
                    } finally {
                        a.f()
                    }
                    return t
                }
                if (e instanceof Map) {
                    t = new Map;
                    var c, s = Object(n.a)(e.keys());
                    try {
                        for (s.s(); !(c = s.n()).done;) {
                            var o = c.value;
                            t.set(o, de(e.get(o)))
                        }
                    } catch (b) {
                        s.e(b)
                    } finally {
                        s.f()
                    }
                    return t
                }
                for (var l in t = Array.isArray(e) ? [] : {}, e) t[l] = de(e[l]);
                return t
            }
            var ve = function(e) {
                    return {
                        isOnSubmit: !e || e === b.onSubmit,
                        isOnBlur: e === b.onBlur,
                        isOnChange: e === b.onChange,
                        isOnAll: e === b.all,
                        isOnTouch: e === b.onTouched
                    }
                },
                Oe = function(e) {
                    return F(e) || L(e)
                },
                ge = typeof window === v,
                he = be ? "Proxy" in window : typeof Proxy !== v;

            function je() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.mode,
                    t = void 0 === r ? b.onSubmit : r,
                    d = e.reValidateMode,
                    v = void 0 === d ? b.onChange : d,
                    O = e.resolver,
                    h = e.context,
                    m = e.defaultValues,
                    w = void 0 === m ? {} : m,
                    S = e.shouldFocusError,
                    D = void 0 === S || S,
                    B = e.shouldUnregister,
                    T = void 0 === B || B,
                    M = e.criteriaMode,
                    H = Object(o.useRef)({}),
                    J = Object(o.useRef)({}),
                    $ = Object(o.useRef)({}),
                    Y = Object(o.useRef)(new Set),
                    Z = Object(o.useRef)({}),
                    re = Object(o.useRef)({}),
                    te = Object(o.useRef)({}),
                    ne = Object(o.useRef)({}),
                    oe = Object(o.useRef)(w),
                    je = Object(o.useRef)(!1),
                    ye = Object(o.useRef)(!1),
                    pe = Object(o.useRef)(),
                    me = Object(o.useRef)({}),
                    ke = Object(o.useRef)({}),
                    xe = Object(o.useRef)(h),
                    Ae = Object(o.useRef)(O),
                    Ve = Object(o.useRef)(new Set),
                    Re = Object(o.useRef)(ve(t)),
                    Ce = Re.current,
                    we = Ce.isOnSubmit,
                    Se = Ce.isOnTouch,
                    De = M === b.all,
                    Fe = Object(o.useState)({
                        isDirty: !1,
                        isValidating: !1,
                        dirtyFields: {},
                        isSubmitted: !1,
                        submitCount: 0,
                        touched: {},
                        isSubmitting: !1,
                        isSubmitSuccessful: !1,
                        isValid: !we,
                        errors: {}
                    }),
                    Ee = Object(a.a)(Fe, 2),
                    Le = Ee[0],
                    Ne = Ee[1],
                    Be = Object(o.useRef)({
                        isDirty: !he,
                        dirtyFields: !he,
                        touched: !he || Se,
                        isValidating: !he,
                        isSubmitting: !he,
                        isValid: !he
                    }),
                    Te = Object(o.useRef)(Le),
                    Me = Object(o.useRef)(),
                    Ue = Object(o.useRef)(ve(v)).current,
                    We = Ue.isOnBlur,
                    Pe = Ue.isOnChange;
                xe.current = h, Ae.current = O, Te.current = Le, me.current = T ? {} : P(me.current) ? de(w) : me.current;
                var He = Object(o.useCallback)((function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        je.current || (Te.current = Object.assign(Object.assign({}, Te.current), e), Ne(Te.current))
                    }), []),
                    qe = function() {
                        return Be.current.isValidating && He({
                            isValidating: !0
                        })
                    },
                    Ie = Object(o.useCallback)((function(e, r) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            u = arguments.length > 4 ? arguments[4] : void 0,
                            a = t || X({
                                errors: Te.current.errors,
                                error: r,
                                name: e,
                                validFields: ne.current,
                                fieldsWithValidation: te.current
                            }),
                            i = V(Te.current.errors, e);
                        r ? (q(ne.current, e), a = a || !i || !z(i, r, !0), k(Te.current.errors, e, r)) : ((V(te.current, e) || Ae.current) && (k(ne.current, e, !0), a = a || i), q(Te.current.errors, e)), (a && !g(t) || !P(n) || Be.current.isValidating) && He(Object.assign(Object.assign(Object.assign({}, n), Ae.current ? {
                            isValid: !!u
                        } : {}), {
                            isValidating: !1
                        }))
                    }), []),
                    Ge = Object(o.useCallback)((function(e, r) {
                        var t = H.current[e],
                            n = t.ref,
                            u = t.options,
                            a = be && f(n) && g(r) ? "" : r;
                        F(n) ? (u || []).forEach((function(e) {
                            var r = e.ref;
                            return r.checked = r.value === a
                        })) : E(n) && !K(a) ? n.files = a : N(n) ? Object(s.a)(n.options).forEach((function(e) {
                            return e.selected = a.includes(e.value)
                        })) : L(n) && u ? u.length > 1 ? u.forEach((function(e) {
                            var r = e.ref;
                            return r.checked = Array.isArray(a) ? !!a.find((function(e) {
                                return e === r.value
                            })) : a === r.value
                        })) : u[0].ref.checked = !!a : n.value = a
                    }), []),
                    Je = Object(o.useCallback)((function(e, r) {
                        if (Be.current.isDirty) {
                            var t = rr();
                            return e && r && k(t, e, r), !z(t, oe.current)
                        }
                        return !1
                    }), []),
                    ze = Object(o.useCallback)((function(e) {
                        var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        if (Be.current.isDirty || Be.current.dirtyFields) {
                            var t = !z(V(oe.current, e), U(H, e, me)),
                                n = V(Te.current.dirtyFields, e),
                                u = Te.current.isDirty;
                            t ? k(Te.current.dirtyFields, e, !0) : q(Te.current.dirtyFields, e);
                            var a = {
                                    isDirty: Je(),
                                    dirtyFields: Te.current.dirtyFields
                                },
                                i = Be.current.isDirty && u !== a.isDirty || Be.current.dirtyFields && n !== V(Te.current.dirtyFields, e);
                            return i && r && He(a), i ? a : {}
                        }
                        return {}
                    }), []),
                    $e = Object(o.useCallback)(function() {
                        var e = Object(i.a)(Object(u.a)().mark((function e(r, t) {
                            var n;
                            return Object(u.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        e.next = 4;
                                        break;
                                    case 4:
                                        return e.next = 6, ue(H, De, H.current[r], me);
                                    case 6:
                                        return e.t0 = r, n = e.sent[e.t0], Ie(r, n, t), e.abrupt("return", A(n));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r, t) {
                            return e.apply(this, arguments)
                        }
                    }(), [Ie, De]),
                    _e = Object(o.useCallback)(function() {
                        var e = Object(i.a)(Object(u.a)().mark((function e(r) {
                            var t, n, a, i, c;
                            return Object(u.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, Ae.current(rr(), xe.current, De);
                                    case 2:
                                        if (t = e.sent, n = t.errors, a = Te.current.isValid, !Array.isArray(r)) {
                                            e.next = 11;
                                            break
                                        }
                                        return i = r.map((function(e) {
                                            var r = V(n, e);
                                            return r ? k(Te.current.errors, e, r) : q(Te.current.errors, e), !r
                                        })).every(Boolean), He({
                                            isValid: P(n),
                                            isValidating: !1
                                        }), e.abrupt("return", i);
                                    case 11:
                                        return c = V(n, r), Ie(r, c, a !== P(n), {}, P(n)), e.abrupt("return", !c);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }(), [Ie, De]),
                    Ke = Object(o.useCallback)(function() {
                        var e = Object(i.a)(Object(u.a)().mark((function e(r) {
                            var t, n;
                            return Object(u.a)().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t = r || Object.keys(H.current), qe(), !Ae.current) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", _e(t));
                                    case 4:
                                        if (!Array.isArray(t)) {
                                            e.next = 11;
                                            break
                                        }
                                        return !r && (Te.current.errors = {}), e.next = 8, Promise.all(t.map(function() {
                                            var e = Object(i.a)(Object(u.a)().mark((function e(r) {
                                                return Object(u.a)().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 2, $e(r, null);
                                                        case 2:
                                                            return e.abrupt("return", e.sent);
                                                        case 3:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(r) {
                                                return e.apply(this, arguments)
                                            }
                                        }()));
                                    case 8:
                                        return n = e.sent, He({
                                            isValidating: !1
                                        }), e.abrupt("return", n.every(Boolean));
                                    case 11:
                                        return e.next = 13, $e(t);
                                    case 13:
                                        return e.abrupt("return", e.sent);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r) {
                            return e.apply(this, arguments)
                        }
                    }(), [_e, $e]),
                    Qe = Object(o.useCallback)((function(e, r, t) {
                        var u = t.shouldDirty,
                            a = t.shouldValidate,
                            i = {};
                        k(i, e, r);
                        var c, s = Object(n.a)(ae(e, r));
                        try {
                            for (s.s(); !(c = s.n()).done;) {
                                var o = c.value;
                                H.current[o] && (Ge(o, V(i, o)), u && ze(o), a && Ke(o))
                            }
                        } catch (f) {
                            s.e(f)
                        } finally {
                            s.f()
                        }
                    }), [Ke, Ge, ze]),
                    Xe = Object(o.useCallback)((function(e, r, t) {
                        if (!T && !G(r) && k(me.current, e, Array.isArray(r) ? Object(s.a)(r) : Object.assign({}, r)), H.current[e]) Ge(e, r), t.shouldDirty && ze(e), t.shouldValidate && Ke(e);
                        else if (!G(r) && (Qe(e, r, t), Ve.current.has(e))) {
                            var n = se(e) || e;
                            k(J.current, e, r), ke.current[n](Object(c.a)({}, n, V(J.current, n))), (Be.current.isDirty || Be.current.dirtyFields) && t.shouldDirty && (k(Te.current.dirtyFields, e, _(r, V(oe.current, e, []), V(Te.current.dirtyFields, e, []))), He({
                                isDirty: !z(Object.assign(Object.assign({}, rr()), Object(c.a)({}, e, r)), oe.current)
                            }))
                        }!T && k(me.current, e, r)
                    }), [ze, Ge, Qe]),
                    Ye = function(e) {
                        return ye.current || Y.current.has(e) || Y.current.has((e.match(/\w+/) || [])[0])
                    },
                    Ze = function(e) {
                        var r = !0;
                        if (!P(Z.current))
                            for (var t in Z.current) e && Z.current[t].size && !Z.current[t].has(e) && !Z.current[t].has(se(e)) || (re.current[t](), r = !1);
                        return r
                    };

                function er(e) {
                    if (!T) {
                        var r, t = de(e),
                            u = Object(n.a)(Ve.current);
                        try {
                            for (u.s(); !(r = u.n()).done;) {
                                var a = r.value;
                                y(a) && !t[a] && (t = Object.assign(Object.assign({}, t), Object(c.a)({}, a, [])))
                            }
                        } catch (i) {
                            u.e(i)
                        } finally {
                            u.f()
                        }
                        return t
                    }
                    return e
                }

                function rr(e) {
                    if (K(e)) return U(H, e, me);
                    if (Array.isArray(e)) {
                        var r, t = {},
                            u = Object(n.a)(e);
                        try {
                            for (u.s(); !(r = u.n()).done;) {
                                var a = r.value;
                                k(t, a, U(H, a, me))
                            }
                        } catch (i) {
                            u.e(i)
                        } finally {
                            u.f()
                        }
                        return t
                    }
                    return er(Q(H, de(me.current), T))
                }
                pe.current = pe.current ? pe.current : function() {
                    var e = Object(i.a)(Object(u.a)().mark((function e(r) {
                        var t, n, a, i, c, s, o, f, b, d, v, O, g, h, j;
                        return Object(u.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.type, n = r.target, a = n.name, !(i = H.current[a])) {
                                        e.next = 32;
                                        break
                                    }
                                    if (o = t === l.BLUR, f = ce(Object.assign({
                                            isBlurEvent: o,
                                            isReValidateOnChange: Pe,
                                            isReValidateOnBlur: We,
                                            isTouched: !!V(Te.current.touched, a),
                                            isSubmitted: Te.current.isSubmitted
                                        }, Re.current)), b = ze(a, !1), d = !P(b) || !o && Ye(a), o && !V(Te.current.touched, a) && Be.current.touched && (k(Te.current.touched, a, !0), b = Object.assign(Object.assign({}, b), {
                                            touched: Te.current.touched
                                        })), !T && L(n) && k(me.current, a, U(H, a)), !f) {
                                        e.next = 13;
                                        break
                                    }
                                    return !o && Ze(a), e.abrupt("return", (!P(b) || d && P(b)) && He(b));
                                case 13:
                                    if (qe(), !Ae.current) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.next = 17, Ae.current(rr(), xe.current, De);
                                case 17:
                                    v = e.sent, O = v.errors, g = Te.current.isValid, c = V(O, a), L(n) && !c && Ae.current && (h = se(a), (j = V(O, h, {})).type && j.message && (c = j), h && (j || V(Te.current.errors, h)) && (a = h)), s = P(O), g !== s && (d = !0), e.next = 30;
                                    break;
                                case 26:
                                    return e.next = 28, ue(H, De, i, me);
                                case 28:
                                    e.t0 = a, c = e.sent[e.t0];
                                case 30:
                                    !o && Ze(a), Ie(a, c, d, b, s);
                                case 32:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }();
                var tr = Object(o.useCallback)(Object(i.a)(Object(u.a)().mark((function e() {
                        var r, t, n, a, i, c = arguments;
                        return Object(u.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 0 && void 0 !== c[0] ? c[0] : {}, t = P(H.current) ? oe.current : {}, e.next = 4, Ae.current(Object.assign(Object.assign(Object.assign({}, t), rr()), r), xe.current, De);
                                case 4:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 7;
                                        break
                                    }
                                    e.t0 = {};
                                case 7:
                                    n = e.t0, a = n.errors, i = P(a), Te.current.isValid !== i && He({
                                        isValid: i
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), [De]),
                    nr = Object(o.useCallback)((function(e, r) {
                        ! function(e, r, t, n, u, a) {
                            var i = t.ref,
                                c = t.ref.name,
                                s = e.current[c];
                            if (!u) {
                                var o = U(e, c, n);
                                !A(o) && k(n.current, c, o)
                            }
                            i.type && s ? F(i) || L(i) ? Array.isArray(s.options) && s.options.length ? (p(s.options).forEach((function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 ? arguments[1] : void 0;
                                (W(e.ref) && I(e, e.ref) || a) && (C(e.ref, r), q(s.options, "[".concat(t, "]")))
                            })), s.options && !p(s.options).length && delete e.current[c]) : delete e.current[c] : (W(i) && I(s, i) || a) && (C(i, r), delete e.current[c]) : delete e.current[c]
                        }(H, pe.current, e, me, T, r), T && (q(ne.current, e.ref.name), q(te.current, e.ref.name))
                    }), [T]),
                    ur = Object(o.useCallback)((function(e) {
                        if (ye.current) He();
                        else {
                            var r, t = Object(n.a)(Y.current);
                            try {
                                for (t.s(); !(r = t.n()).done;) {
                                    if (r.value.startsWith(e)) {
                                        He();
                                        break
                                    }
                                }
                            } catch (u) {
                                t.e(u)
                            } finally {
                                t.f()
                            }
                            Ze(e)
                        }
                    }), []),
                    ar = Object(o.useCallback)((function(e, r) {
                        e && (nr(e, r), T && !p(e.options || []).length && (q(Te.current.errors, e.ref.name), k(Te.current.dirtyFields, e.ref.name, !0), He({
                            isDirty: Je()
                        }), Be.current.isValid && Ae.current && tr(), ur(e.ref.name)))
                    }), [tr, nr]);
                var ir = Object(o.useCallback)((function(e, r, t) {
                    var n = t ? Z.current[t] : Y.current,
                        u = Q(H, de(me.current), T, !1, e);
                    if (K(e)) {
                        var a = se(e) || e;
                        return Ve.current.has(a) && (u = Object.assign(Object.assign({}, $.current), u)), ie(u, e, n, A(V(oe.current, e)) ? r : V(oe.current, e), !0)
                    }
                    var i = A(r) ? oe.current : r;
                    return Array.isArray(e) ? e.reduce((function(e, r) {
                        return Object.assign(Object.assign({}, e), Object(c.a)({}, r, ie(u, r, n, i)))
                    }), {}) : (ye.current = A(t), x(!P(u) && u || i))
                }), []);

                function cr(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    var t, n = e.name,
                        u = e.type,
                        a = e.value,
                        i = Object.assign({
                            ref: e
                        }, r),
                        c = H.current,
                        o = Oe(e),
                        b = fe(Ve.current, n),
                        d = function(r) {
                            return be && (!f(e) || r === e)
                        },
                        v = c[n],
                        O = !0;
                    if (v && (o ? Array.isArray(v.options) && p(v.options).find((function(e) {
                            return a === e.ref.value && d(e.ref)
                        })) : d(v.ref))) c[n] = Object.assign(Object.assign({}, v), r);
                    else {
                        v = u ? o ? Object.assign({
                            options: [].concat(Object(s.a)(p(v && v.options || [])), [{
                                ref: e
                            }]),
                            ref: {
                                type: u,
                                name: n
                            }
                        }, r) : Object.assign({}, i) : i, c[n] = v;
                        var g = A(V(me.current, n));
                        P(oe.current) && g || (t = V(g ? oe.current : me.current, n), (O = A(t)) || b || Ge(n, t)), P(r) || (k(te.current, n, !0), !we && Be.current.isValid && ue(H, De, v, me).then((function(e) {
                            var r = Te.current.isValid;
                            P(e) ? k(ne.current, n, !0) : q(ne.current, n), r !== P(e) && He()
                        }))), !T || b && O || !b && q(Te.current.dirtyFields, n), u && function(e, r, t) {
                            var n = e.ref;
                            f(n) && t && (n.addEventListener(r ? l.CHANGE : l.INPUT, t), n.addEventListener(l.BLUR, t))
                        }(o && v.options ? v.options[v.options.length - 1] : v, o || le(e), pe.current)
                    }
                }
                var sr = Object(o.useCallback)((function(e, r) {
                        return function() {
                            var t = Object(i.a)(Object(u.a)().mark((function t(n) {
                                var a, i, c, s, o, f, l, b, d, v;
                                return Object(u.a)().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n && n.preventDefault && (n.preventDefault(), n.persist()), a = {}, i = er(Q(H, de(me.current), T, !0)), Be.current.isSubmitting && He({
                                                    isSubmitting: !0
                                                }), t.prev = 4, !Ae.current) {
                                                t.next = 15;
                                                break
                                            }
                                            return t.next = 8, Ae.current(i, xe.current, De);
                                        case 8:
                                            c = t.sent, s = c.errors, o = c.values, Te.current.errors = a = s, i = o, t.next = 27;
                                            break;
                                        case 15:
                                            f = 0, l = Object.values(H.current);
                                        case 16:
                                            if (!(f < l.length)) {
                                                t.next = 27;
                                                break
                                            }
                                            if (!(b = l[f])) {
                                                t.next = 24;
                                                break
                                            }
                                            return d = b.ref.name, t.next = 22, ue(H, De, b, me);
                                        case 22:
                                            (v = t.sent)[d] ? (k(a, d, v[d]), q(ne.current, d)) : V(te.current, d) && (q(Te.current.errors, d), k(ne.current, d, !0));
                                        case 24:
                                            f++, t.next = 16;
                                            break;
                                        case 27:
                                            if (!P(a) || !Object.keys(Te.current.errors).every((function(e) {
                                                    return e in H.current
                                                }))) {
                                                t.next = 33;
                                                break
                                            }
                                            return He({
                                                errors: {},
                                                isSubmitting: !0
                                            }), t.next = 31, e(i, n);
                                        case 31:
                                            t.next = 39;
                                            break;
                                        case 33:
                                            if (Te.current.errors = Object.assign(Object.assign({}, Te.current.errors), a), t.t0 = r, !t.t0) {
                                                t.next = 38;
                                                break
                                            }
                                            return t.next = 38, r(Te.current.errors, n);
                                        case 38:
                                            D && R(H.current, Te.current.errors);
                                        case 39:
                                            return t.prev = 39, Te.current.isSubmitting = !1, He({
                                                isSubmitted: !0,
                                                isSubmitting: !1,
                                                isSubmitSuccessful: P(Te.current.errors),
                                                submitCount: Te.current.submitCount + 1
                                            }), t.finish(39);
                                        case 43:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [4, , 39, 43]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }()
                    }), [D, De]),
                    or = function(e) {
                        var r = e.errors,
                            t = e.isDirty,
                            n = e.isSubmitted,
                            u = e.touched,
                            a = e.isValid,
                            i = e.submitCount,
                            c = e.dirtyFields;
                        a || (ne.current = {}, te.current = {}), J.current = {}, Y.current = new Set, ye.current = !1, He({
                            submitCount: i ? Te.current.submitCount : 0,
                            isDirty: !!t && Te.current.isDirty,
                            isSubmitted: !!n && Te.current.isSubmitted,
                            isValid: !!a && Te.current.isValid,
                            dirtyFields: c ? Te.current.dirtyFields : {},
                            touched: u ? Te.current.touched : {},
                            errors: r ? Te.current.errors : {},
                            isSubmitting: !1,
                            isSubmitSuccessful: !1
                        })
                    };
                Object(o.useEffect)((function() {
                    O && Be.current.isValid && tr(), Me.current = Me.current || !be ? Me.current : function(e, r) {
                        var t = new MutationObserver((function() {
                            for (var t = 0, u = Object.values(e.current); t < u.length; t++) {
                                var a = u[t];
                                if (a && a.options) {
                                    var i, c = Object(n.a)(a.options);
                                    try {
                                        for (c.s(); !(i = c.n()).done;) {
                                            var s = i.value;
                                            s && s.ref && W(s.ref) && r(a)
                                        }
                                    } catch (o) {
                                        c.e(o)
                                    } finally {
                                        c.f()
                                    }
                                } else a && W(a.ref) && r(a)
                            }
                        }));
                        return t.observe(window.document, {
                            childList: !0,
                            subtree: !0
                        }), t
                    }(H, ar)
                }), [ar, oe.current]), Object(o.useEffect)((function() {
                    return function() {
                        Me.current && Me.current.disconnect(), je.current = !0, Object.values(H.current).forEach((function(e) {
                            return ar(e, !0)
                        }))
                    }
                }), []), !O && Be.current.isValid && (Le.isValid = z(ne.current, te.current) && P(Te.current.errors));
                var fr = {
                        trigger: Ke,
                        setValue: Object(o.useCallback)((function(e, r, t) {
                            Xe(e, r, t || {}), Ye(e) && He(), Ze(e)
                        }), [Xe, Ke]),
                        getValues: Object(o.useCallback)(rr, []),
                        register: Object(o.useCallback)((function(e, r) {
                            if (!ge)
                                if (K(e)) cr({
                                    name: e
                                }, r);
                                else {
                                    if (!j(e) || !("name" in e)) return function(r) {
                                        return r && cr(r, e)
                                    };
                                    cr(e, r)
                                }
                        }), [oe.current]),
                        unregister: Object(o.useCallback)((function(e) {
                            var r, t = Object(n.a)(Array.isArray(e) ? e : [e]);
                            try {
                                for (t.s(); !(r = t.n()).done;) {
                                    var u = r.value;
                                    ar(H.current[u], !0)
                                }
                            } catch (a) {
                                t.e(a)
                            } finally {
                                t.f()
                            }
                        }), []),
                        formState: he ? new Proxy(Le, {
                            get: function(e, r) {
                                if (r in e) return Be.current[r] = !0, e[r]
                            }
                        }) : Le
                    },
                    lr = Object(o.useMemo)((function() {
                        return Object.assign({
                            isFormDirty: Je,
                            updateWatchedValue: ur,
                            shouldUnregister: T,
                            updateFormState: He,
                            removeFieldEventListener: nr,
                            watchInternal: ir,
                            mode: Re.current,
                            reValidateMode: {
                                isReValidateOnBlur: We,
                                isReValidateOnChange: Pe
                            },
                            validateResolver: O ? tr : void 0,
                            fieldsRef: H,
                            resetFieldArrayFunctionRef: ke,
                            useWatchFieldsRef: Z,
                            useWatchRenderFunctionsRef: re,
                            fieldArrayDefaultValuesRef: J,
                            validFieldsRef: ne,
                            fieldsWithValidationRef: te,
                            fieldArrayNamesRef: Ve,
                            readFormStateRef: Be,
                            formStateRef: Te,
                            defaultValuesRef: oe,
                            shallowFieldsStateRef: me,
                            fieldArrayValuesRef: $
                        }, fr)
                    }), [oe.current, ur, T, nr, ir]);
                return Object.assign({
                    watch: function(e, r) {
                        return ir(e, r)
                    },
                    control: lr,
                    handleSubmit: sr,
                    reset: Object(o.useCallback)((function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (be)
                            for (var t = 0, n = Object.values(H.current); t < n.length; t++) {
                                var u = n[t];
                                if (u) {
                                    var a = u.ref,
                                        i = u.options,
                                        c = Oe(a) && Array.isArray(i) ? i[0].ref : a;
                                    if (f(c)) try {
                                        c.closest("form").reset();
                                        break
                                    } catch (s) {}
                                }
                            }
                        H.current = {}, oe.current = Object.assign({}, e || oe.current), e && Ze(""), Object.values(ke.current).forEach((function(e) {
                            return ee(e) && e()
                        })), me.current = T ? {} : de(e || oe.current), or(r)
                    }), []),
                    clearErrors: Object(o.useCallback)((function(e) {
                        e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                            return H.current[e] && y(e) ? delete Te.current.errors[e] : q(Te.current.errors, e)
                        })), He({
                            errors: e ? Te.current.errors : {}
                        })
                    }), []),
                    setError: Object(o.useCallback)((function(e, r) {
                        var t = (H.current[e] || {}).ref;
                        k(Te.current.errors, e, Object.assign(Object.assign({}, r), {
                            ref: t
                        })), He({
                            isValid: !1
                        }), r.shouldFocus && t && t.focus && t.focus()
                    }), []),
                    errors: Le.errors
                }, fr)
            }
            var ye = Object(o.createContext)(null);
            ye.displayName = "RHFContext"
        }
    }
]);