/*!
 * Powered by uimix.com;
 * Vivo product project - 产品库页面开发框架;
 * Version: 3.15.0;
 * Released on: 2020-08-20;
 */
! function (e) {
    function t(r) {
        if (n[r]) return n[r].exports;
        var o = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    t.m = e, t.c = n, t.p = "", t(0)
}({
    0: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var o = n(1),
            i = r(o),
            u = n(143),
            a = r(u);
        (0, i.default)(function () {
            new a.default({
                header: "#gb-subpage-header",
                menu: ".subpage-menu a",
                stage: ".stage"
            })
        })
    },
    1: function (e, t, n) {
        ! function (t, n) {
            e.exports = n()
        }(0, function () {
            var e, t = [],
                n = document,
                r = n.documentElement.doScroll,
                o = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
            return o || n.addEventListener("DOMContentLoaded", e = function () {
                    for (n.removeEventListener("DOMContentLoaded", e), o = 1; e = t.shift();) e()
                }),
                function (e) {
                    o ? setTimeout(e, 0) : t.push(e)
                }
        })
    },
    13: function (e, t, n) {
        var r = n(14),
            o = n(15),
            i = n(16),
            u = n(18),
            a = function (e, t, n) {
                var s, c, f, l = e & a.F,
                    d = e & a.G,
                    p = e & a.S,
                    h = e & a.P,
                    m = e & a.B,
                    v = e & a.W,
                    b = d ? o : o[t] || (o[t] = {}),
                    y = b.prototype,
                    w = d ? r : p ? r[t] : (r[t] || {}).prototype;
                d && (n = t);
                for (s in n)(c = !l && w && void 0 !== w[s]) && s in b || (f = c ? w[s] : n[s], b[s] = d && "function" != typeof w[s] ? n[s] : m && c ? i(f, r) : v && w[s] == f ? function (e) {
                    var t = function (t, n, r) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(t);
                                case 2:
                                    return new e(t, n)
                            }
                            return new e(t, n, r)
                        }
                        return e.apply(this, arguments)
                    };
                    return t.prototype = e.prototype, t
                }(f) : h && "function" == typeof f ? i(Function.call, f) : f, h && ((b.virtual || (b.virtual = {}))[s] = f, e & a.R && y && !y[s] && u(y, s, f)))
            };
        a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, e.exports = a
    },
    14: function (e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    15: function (e, t) {
        var n = e.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = n)
    },
    16: function (e, t, n) {
        var r = n(17);
        e.exports = function (e, t, n) {
            if (r(e), void 0 === t) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function (n, r, o) {
                        return e.call(t, n, r, o)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
    },
    17: function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    18: function (e, t, n) {
        var r = n(19),
            o = n(27);
        e.exports = n(23) ? function (e, t, n) {
            return r.f(e, t, o(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        }
    },
    19: function (e, t, n) {
        var r = n(20),
            o = n(22),
            i = n(26),
            u = Object.defineProperty;
        t.f = n(23) ? Object.defineProperty : function (e, t, n) {
            if (r(e), t = i(t, !0), r(n), o) try {
                return u(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    20: function (e, t, n) {
        var r = n(21);
        e.exports = function (e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    21: function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    22: function (e, t, n) {
        e.exports = !n(23) && !n(24)(function () {
            return 7 != Object.defineProperty(n(25)("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    23: function (e, t, n) {
        e.exports = !n(24)(function () {
            return 7 != Object.defineProperty({}, "a", {
                get: function () {
                    return 7
                }
            }).a
        })
    },
    24: function (e, t) {
        e.exports = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    25: function (e, t, n) {
        var r = n(21),
            o = n(14).document,
            i = r(o) && r(o.createElement);
        e.exports = function (e) {
            return i ? o.createElement(e) : {}
        }
    },
    26: function (e, t, n) {
        var r = n(21);
        e.exports = function (e, t) {
            if (!r(e)) return e;
            var n, o;
            if (t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            if ("function" == typeof (n = e.valueOf) && !r(o = n.call(e))) return o;
            if (!t && "function" == typeof (n = e.toString) && !r(o = n.call(e))) return o;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    27: function (e, t) {
        e.exports = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    71: function (e, t) {
        "use strict";
        t.__esModule = !0, t.default = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
    },
    72: function (e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(73),
            o = function (e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(r);
        t.default = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
                }
            }
            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()
    },
    73: function (e, t, n) {
        e.exports = {
            default: n(74),
            __esModule: !0
        }
    },
    74: function (e, t, n) {
        n(75);
        var r = n(15).Object;
        e.exports = function (e, t, n) {
            return r.defineProperty(e, t, n)
        }
    },
    75: function (e, t, n) {
        var r = n(13);
        r(r.S + r.F * !n(23), "Object", {
            defineProperty: n(19).f
        })
    },
    119: function (e, t) {
        e.exports = function (e, t, n) {
            function r() {
                var c = Date.now() - a;
                c < t && c >= 0 ? o = setTimeout(r, t - c) : (o = null, n || (s = e.apply(u, i), u = i = null))
            }
            var o, i, u, a, s;
            null == t && (t = 100);
            var c = function () {
                u = this, i = arguments, a = Date.now();
                var c = n && !o;
                return o || (o = setTimeout(r, t)), c && (s = e.apply(u, i), u = i = null), s
            };
            return c.clear = function () {
                o && (clearTimeout(o), o = null)
            }, c
        }
    },
    143: function (e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = n(71),
            i = r(o),
            u = n(72),
            a = r(u),
            s = n(119),
            c = r(s),
            f = function () {
                function e(t) {
                    (0, i.default)(this, e), this.win = $(window), this.mobileHeader = $(t.header), this.stage = $(t.stage), this.$menuBtn = this.mobileHeader.find(t.menu), this.isOpenMobileHeader = !1, this.isfollow = !this.mobileHeader.data("not-follow"), this.theme = this.mobileHeader.data("def-theme") || !1, this.win.on({
                        scroll: (0, c.default)(this.scroll.bind(this), 10),
                        resize: (0, c.default)(this.resize.bind(this), 10)
                    }), this.scroll(), this.menu(), $(document).on("keydown", function (e) {
                        72 === (e.keyCode || e.which) && ($("#ux-rule").is(":visible") ? $("#ux-rule").hide() : $("#ux-rule").show())
                    })
                }
                return (0, a.default)(e, [{
                    key: "scroll",
                    value: function () {
                        if (this.isfollow) {
                            var e = this.win.scrollTop(),
                                t = this;
                            e >= (this.winWidth > 768 ? 44 : 56) ? (TweenMax.set(t.mobileHeader, {
                                position: "fixed",
                                top: 0
                            }), setTimeout(function () {
                                t.mobileHeader.addClass("nav-locked"), t.theme && t.mobileHeader.addClass("nav-theme-" + t.theme)
                            }, 1)) : (t.mobileHeader.removeClass("nav-locked"), t.theme && t.mobileHeader.removeClass("nav-theme-" + t.theme), setTimeout(function () {
                                TweenMax.set(t.mobileHeader, {
                                    position: "",
                                    top: ""
                                })
                            }, 1)), this.close_menu()
                        }
                    }
                }, {
                    key: "resize",
                    value: function () {
                        this.winWidth = this.win.width(), this.scroll(), this.winWidth > 768 && this.close_menu()
                    }
                }, {
                    key: "menu",
                    value: function () {
                        var e = this;
                        e.$menuBtn.click(function (t) {
                            if (e.isOpenMobileHeader) e.mobileHeader.removeClass("open-subpage-menu"), e.isOpenMobileHeader = !1;
                            else {
                                if (!$(this).is(":visible")) return !1;
                                e.mobileHeader.addClass("open-subpage-menu"), e.isOpenMobileHeader = !0
                            }
                            t.preventDefault()
                        })
                    }
                }, {
                    key: "close_menu",
                    value: function () {
                        this.isOpenMobileHeader && this.$menuBtn.click()
                    }
                }, {
                    key: "theme",
                    value: function () {
                        this.stage.first().hasClass("theme-black") && !this.mobileHeader.hasClass("theme-black") && this.mobileHeader.addClass("theme-black")
                    }
                }]), e
            }();
        t.default = f
    }
});