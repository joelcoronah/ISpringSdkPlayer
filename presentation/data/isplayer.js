(function() {
    var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (c.get || c.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
        },
        ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

    function ca() {
        ca = function() {};
        ba.Symbol || (ba.Symbol = da)
    }
    var ea = 0;

    function da(a) {
        return "jscomp_symbol_" + (a || "") + ea++
    }

    function fa() {
        ca();
        var a = ba.Symbol.iterator;
        a || (a = ba.Symbol.iterator = ba.Symbol("iterator"));
        "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {
            configurable: !0,
            writable: !0,
            value: function() {
                return ga(this)
            }
        });
        fa = function() {}
    }

    function ga(a) {
        var b = 0;
        return ha(function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        })
    }

    function ha(a) {
        fa();
        a = {
            next: a
        };
        a[ba.Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function ia(a) {
        fa();
        var b = a[Symbol.iterator];
        return b ? b.call(a) : ga(a)
    }

    function ja(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
        return c
    }
    for (var ka = ba, la = ["Array", "prototype", "fill"], ma = 0; ma < la.length - 1; ma++) {
        var na = la[ma];
        na in ka || (ka[na] = {});
        ka = ka[na]
    }
    var oa = la[la.length - 1],
        pa = ka[oa],
        qa = pa ? pa : function(a, b, c) {
            var d = this.length || 0;
            0 > b && (b = Math.max(0, d + b));
            if (null == c || c > d) c = d;
            c = Number(c);
            0 > c && (c = Math.max(0, d + c));
            for (b = Number(b || 0); b < c; b++) this[b] = a;
            return this
        };
    qa != pa && null != qa && aa(ka, oa, {
        configurable: !0,
        writable: !0,
        value: qa
    });
    var ra = this;

    function l(a) {
        return void 0 !== a
    }

    function m(a, b, c) {
        a = a.split(".");
        c = c || ra;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && l(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
    }

    function sa(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c) return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == b && "undefined" == typeof a.call) return "object";
        return b
    }

    function ta(a) {
        return "array" == sa(a)
    }

    function ua(a) {
        var b = sa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        return "string" == typeof a
    }

    function wa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    var ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        za = 0;

    function Aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ca(a, b, c) {
        Ca = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Aa : Ba;
        return Ca.apply(null, arguments)
    }
    var Da = Date.now || function() {
        return +new Date
    };

    function n(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Ta = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.pm = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };

    function Ea() {}
    m("ispring.events.IEventDispatcher", Ea, void 0);
    Ea.prototype.addHandler = function() {};
    Ea.prototype.addHandler = Ea.prototype.addHandler;
    Ea.prototype.removeHandler = function() {};
    Ea.prototype.removeHandler = Ea.prototype.removeHandler;
    var Fa = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function Ga(a) {
        if (!Ha.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ia, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ja, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ka, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(La, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ma, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Na, "&#0;"));
        return a
    }
    var Ia = /&/g,
        Ja = /</g,
        Ka = />/g,
        La = /"/g,
        Ma = /'/g,
        Na = /\x00/g,
        Ha = /[\x00&<>"']/;

    function Oa() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Da()).toString(36)
    }

    function Pa(a, b) {
        for (var c = 0, d = Fa(String(a)).split("."), e = Fa(String(b)).split("."), f = Math.max(d.length, e.length), h = 0; 0 == c && h < f; h++) {
            var k = d[h] || "",
                t = e[h] || "";
            do {
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                t = /(\d*)(\D*)(.*)/.exec(t) || ["", "", "", ""];
                if (0 == k[0].length && 0 == t[0].length) break;
                c = Qa(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == t[1].length ? 0 : parseInt(t[1], 10)) || Qa(0 == k[2].length, 0 == t[2].length) || Qa(k[2], t[2]);
                k = k[3];
                t = t[3]
            } while (0 == c)
        }
        return c
    }

    function Qa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function Ra(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function Sa(a) {
        var b = va(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function Ta(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function Ua(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = b.call(void 0, a[d], d, a);
        return c
    }
    var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Wa(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Va.length; f++) c = Va[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    }

    function Xa(a) {
        var b = arguments.length;
        if (1 == b && ta(arguments[0])) return Xa.apply(null, arguments[0]);
        for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
        return c
    };
    var Ya = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (va(a)) return va(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Za = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = va(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        };

    function $a(a, b) {
        var c = Ya(a, b);
        0 <= c && Array.prototype.splice.call(a, c, 1)
    }

    function ab(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function bb(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (ua(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var h = 0; h < f; h++) a[e + h] = d[h]
            } else a.push(d)
        }
    }

    function cb(a, b, c, d) {
        Array.prototype.splice.apply(a, db(arguments, 1))
    }

    function db(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    };
    var eb;
    a: {
        var fb = ra.navigator;
        if (fb) {
            var gb = fb.userAgent;
            if (gb) {
                eb = gb;
                break a
            }
        }
        eb = ""
    }

    function p(a) {
        return -1 != eb.indexOf(a)
    };

    function hb() {
        return p("iPhone") && !p("iPod") && !p("iPad")
    };

    function ib(a, b) {
        var c = jb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var kb = p("Opera"),
        lb = p("Trident") || p("MSIE"),
        mb = p("Edge"),
        nb = mb || lb,
        ob = p("Gecko") && !(-1 != eb.toLowerCase().indexOf("webkit") && !p("Edge")) && !(p("Trident") || p("MSIE")) && !p("Edge"),
        pb = -1 != eb.toLowerCase().indexOf("webkit") && !p("Edge"),
        qb = p("Windows");

    function rb() {
        var a = ra.document;
        return a ? a.documentMode : void 0
    }
    var sb;
    a: {
        var tb = "",
            ub = function() {
                var a = eb;
                if (ob) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (mb) return /Edge\/([\d\.]+)/.exec(a);
                if (lb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (pb) return /WebKit\/(\S+)/.exec(a);
                if (kb) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();ub && (tb = ub ? ub[1] : "");
        if (lb) {
            var vb = rb();
            if (null != vb && vb > parseFloat(tb)) {
                sb = String(vb);
                break a
            }
        }
        sb = tb
    }
    var jb = {};

    function wb(a) {
        return ib(a, function() {
            return 0 <= Pa(sb, a)
        })
    }
    var xb;
    var yb = ra.document;
    xb = yb && lb ? rb() || ("CSS1Compat" == yb.compatMode ? parseInt(sb, 10) : 5) : void 0;
    lb && wb("9");
    !pb || wb("528");
    ob && wb("1.9b") || lb && wb("8") || kb && wb("9.5") || pb && wb("528");
    ob && !wb("8") || lb && wb("9");

    function zb() {};

    function Ab(a, b) {
        return Math.min(Math.max(a, 0), b)
    };

    function Bb(a, b) {
        this.width = a;
        this.height = b
    }
    g = Bb.prototype;
    g.clone = function() {
        return new Bb(this.width, this.height)
    };
    g.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    g.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    g.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    g.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" == typeof b ? b : a;
        return this
    };

    function Cb() {
        this.wb = "";
        this.Og = Db
    }
    Cb.prototype.xg = !0;

    function Eb(a) {
        if (a instanceof Cb && a.constructor === Cb && a.Og === Db) return a.wb;
        sa(a);
        return "type_error:SafeUrl"
    }
    var Fb = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i;

    function Gb(a) {
        if (a instanceof Cb) return a;
        a = a.xg ? a.wb : String(a);
        Fb.test(a) || (a = "about:invalid#zClosurez");
        return Hb(a)
    }
    var Db = {};

    function Hb(a) {
        var b = new Cb;
        b.wb = a;
        return b
    }
    Hb("about:blank");

    function Ib() {
        this.wb = "";
        this.Ng = Jb
    }
    Ib.prototype.xg = !0;

    function Kb(a) {
        if (a instanceof Ib && a.constructor === Ib && a.Ng === Jb) return a.wb;
        sa(a);
        return "type_error:SafeHtml"
    }
    var Jb = {};
    Ib.prototype.jj = function(a) {
        this.wb = a;
        return this
    };
    var Lb = !lb || 9 <= Number(xb);
    !ob && !lb || lb && 9 <= Number(xb) || ob && wb("1.9.1");
    var Mb = lb && !wb("9");

    function Nb(a, b) {
        Ta(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : Ob.hasOwnProperty(d) ? a.setAttribute(Ob[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var Ob = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function Pb(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            h = d[1];
        if (!Lb && h && (h.name || h.type)) {
            f = ["<", f];
            h.name && f.push(' name="', Ga(h.name), '"');
            if (h.type) {
                f.push(' type="', Ga(h.type), '"');
                var k = {};
                Wa(k, h);
                delete k.type;
                h = k
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        h && (va(h) ? f.className = h : ta(h) ? f.className = h.join(" ") : Nb(f, h));
        2 < d.length && Qb(e, f, d);
        return f
    }

    function Qb(a, b, c) {
        function d(c) {
            c && b.appendChild(va(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ua(f) || wa(f) && 0 < f.nodeType ? d(f) : Za(Rb(f) ? ab(f) : f, d)
        }
    }
    var Sb = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        Tb = {
            IMG: " ",
            BR: "\n"
        };

    function Ub(a) {
        if (Mb && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            Vb(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        Mb || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Vb(a, b, c) {
        if (!(a.nodeName in Sb))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in Tb) b.push(Tb[a.nodeName]);
        else
            for (a = a.firstChild; a;) Vb(a, b, c), a = a.nextSibling
    }

    function Rb(a) {
        if (a && "number" == typeof a.length) {
            if (wa(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ("function" == sa(a)) return "function" == typeof a.item
        }
        return !1
    };

    function Wb(a) {
        var b = {
            width: "1px",
            height: "1px",
            border: "0"
        };
        if (va(b))(b = Xb(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a,
                    e = b[c],
                    f = Xb(d, c);
                f && (d.style[f] = e)
            }
    }
    var Yb = {};

    function Xb(a, b) {
        var c = Yb[b];
        if (!c) {
            var d = Ra(b),
                c = d;
            void 0 === a.style[d] && (d = (pb ? "Webkit" : ob ? "Moz" : lb ? "ms" : kb ? "O" : null) + Sa(d), void 0 !== a.style[d] && (c = d));
            Yb[b] = c
        }
        return c
    }

    function Zb(a, b, c) {
        var d;
        d = b;
        b = c;
        a.style.left = $b(d, !1);
        a.style.top = $b(b, !1)
    }

    function ac(a, b, c) {
        if (b instanceof Bb) c = b.height, b = b.width;
        else if (void 0 == c) throw Error("missing height argument");
        a.style.width = $b(b, !0);
        a.style.height = $b(c, !0)
    }

    function $b(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    };

    function bc(a) {
        if ("function" != sa(a))
            if (a && "function" == typeof a.handleEvent) a = Ca(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        2147483647 < Number(100) || ra.setTimeout(a, 100)
    };
    var cc = "StopIteration" in ra ? ra.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function dc() {}
    dc.prototype.next = function() {
        throw cc;
    };
    dc.prototype.Ea = function() {
        return this
    };

    function fc(a) {
        if (a instanceof dc) return a;
        if ("function" == typeof a.Ea) return a.Ea(!1);
        if (ua(a)) {
            var b = 0,
                c = new dc;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw cc;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function gc(a, b) {
        if (ua(a)) try {
            Za(a, b, void 0)
        } catch (c) {
            if (c !== cc) throw c;
        } else {
            a = fc(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== cc) throw c;
            }
        }
    }

    function hc(a) {
        if (ua(a)) return ab(a);
        a = fc(a);
        var b = [];
        gc(a, function(a) {
            b.push(a)
        });
        return b
    };

    function ic(a, b) {
        this.ga = {};
        this.F = [];
        this.pc = this.ob = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else a && this.addAll(a)
    }

    function jc(a) {
        kc(a);
        return a.F.concat()
    }
    g = ic.prototype;
    g.clear = function() {
        this.ga = {};
        this.pc = this.ob = this.F.length = 0
    };
    g.remove = function(a) {
        return Object.prototype.hasOwnProperty.call(this.ga, a) ? (delete this.ga[a], this.ob--, this.pc++, this.F.length > 2 * this.ob && kc(this), !0) : !1
    };

    function kc(a) {
        if (a.ob != a.F.length) {
            for (var b = 0, c = 0; b < a.F.length;) {
                var d = a.F[b];
                Object.prototype.hasOwnProperty.call(a.ga, d) && (a.F[c++] = d);
                b++
            }
            a.F.length = c
        }
        if (a.ob != a.F.length) {
            for (var e = {}, c = b = 0; b < a.F.length;) d = a.F[b], Object.prototype.hasOwnProperty.call(e, d) || (a.F[c++] = d, e[d] = 1), b++;
            a.F.length = c
        }
    }
    g.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.ga, a) ? this.ga[a] : b
    };
    g.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.ga, a) || (this.ob++, this.F.push(a), this.pc++);
        this.ga[a] = b
    };
    g.addAll = function(a) {
        var b;
        if (a instanceof ic) {
            b = jc(a);
            kc(a);
            for (var c = [], d = 0; d < a.F.length; d++) c.push(a.ga[a.F[d]]);
            a = c
        } else {
            b = [];
            var d = 0,
                e;
            for (e in a) b[d++] = e;
            d = [];
            e = 0;
            for (c in a) d[e++] = a[c];
            a = d
        }
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    };
    g.forEach = function(a, b) {
        for (var c = jc(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    g.clone = function() {
        return new ic(this)
    };
    g.transpose = function() {
        for (var a = new ic, b = 0; b < this.F.length; b++) {
            var c = this.F[b];
            a.set(this.ga[c], c)
        }
        return a
    };
    g.Ea = function(a) {
        kc(this);
        var b = 0,
            c = this.pc,
            d = this,
            e = new dc;
        e.next = function() {
            if (c != d.pc) throw Error("The map has changed since the iterator was created");
            if (b >= d.F.length) throw cc;
            var e = d.F[b++];
            return a ? e : d.ga[e]
        };
        return e
    };

    function lc(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }

    function mc(a) {
        a = String(a);
        if (lc(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function nc(a) {
        this.Lc = a
    }
    nc.prototype.eb = function(a) {
        var b = [];
        oc(this, a, b);
        return b.join("")
    };

    function oc(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (ta(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], oc(a, a.Lc ? a.Lc.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), pc(d, c), c.push(":"), oc(a, a.Lc ? a.Lc.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    pc(b,
                        c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var qc = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        rc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function pc(a, b) {
        b.push('"', a.replace(rc, function(a) {
            var b = qc[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), qc[a] = b);
            return b
        }), '"')
    };
    var sc = p("Firefox"),
        tc = p("Safari") && !((p("Chrome") || p("CriOS")) && !p("Edge") || p("Coast") || p("Opera") || p("Edge") || p("Silk") || p("Android")) && !(hb() || p("iPad") || p("iPod"));
    var uc = null,
        vc = ob || pb && !tc || kb || "function" == typeof ra.btoa;

    function wc(a, b) {
        this.u = a;
        this.Qg = b || []
    }
    m("iSpring.ios.mobile.MobileAppCommand", wc, void 0);
    wc.prototype.id = function() {
        return this[ya] || (this[ya] = ++za)
    };

    function xc(a) {
        try {
            var b = document.createElement("iframe");
            Wb(b);
            b.src = a;
            document.body.appendChild(b);
            bc(function() {
                b && b.parentNode && b.parentNode.removeChild(b)
            })
        } catch (c) {}
    };

    function yc(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
    }
    yc.prototype.BYTES_PER_ELEMENT = 8;
    yc.prototype.set = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
    };
    yc.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            yc.BYTES_PER_ELEMENT = 8
        } catch (a) {}
        yc.prototype.BYTES_PER_ELEMENT = yc.prototype.BYTES_PER_ELEMENT;
        yc.prototype.set = yc.prototype.set;
        yc.prototype.toString = yc.prototype.toString;
        m("Float64Array", yc, void 0)
    };

    function zc(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
    }
    zc.prototype.BYTES_PER_ELEMENT = 4;
    zc.prototype.set = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
    };
    zc.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (zc.BYTES_PER_ELEMENT = 4, zc.prototype.BYTES_PER_ELEMENT = zc.prototype.BYTES_PER_ELEMENT, zc.prototype.set = zc.prototype.set, zc.prototype.toString = zc.prototype.toString, m("Float32Array", zc, void 0));

    function Ac(a, b) {
        b || (b = {});
        var c = window,
            d;
        d = a instanceof Cb ? a : Gb("undefined" != typeof a.href ? a.href : String(a));
        var e = b.target || a.target,
            f = [],
            h;
        for (h in b) switch (h) {
            case "width":
            case "height":
            case "top":
            case "left":
                f.push(h + "=" + b[h]);
                break;
            case "target":
            case "noreferrer":
                break;
            default:
                f.push(h + "=" + (b[h] ? 1 : 0))
        }
        f = f.join(",");
        (hb() || p("iPad") || p("iPod")) && c.navigator && c.navigator.standalone && e && "_self" != e ? (f = c.document.createElement("A"), d = d instanceof Cb ? d : Gb(d), f.href = Eb(d), f.setAttribute("target", e),
            b.noreferrer && f.setAttribute("rel", "noreferrer"), d = document.createEvent("MouseEvent"), d.initMouseEvent("click", !0, !0, c, 1), f.dispatchEvent(d), c = {}) : b.noreferrer ? (c = c.open("", e, f), d = Eb(d), c && (nb && -1 != d.indexOf(";") && (d = "'" + d.replace(/'/g, "%27") + "'"), c.opener = null, d = '<META HTTP-EQUIV="refresh" content="0; url=' + Ga(d) + '">', c.document.write(Kb((new Ib).jj(d))), c.document.close())) : c = c.open(Eb(d), e, f);
        return c
    };

    function Bc(a, b, c, d) {
        c = c || 0;
        var e = Array.prototype.slice.call(arguments, 3);
        setTimeout(function() {
            a.apply(b || null, e)
        }, c)
    }

    function Cc() {
        var a;
        var b = window.location.search.substr(1);
        if (b) {
            a = {};
            for (var b = b.split("&"), c = 0; c < b.length; ++c) {
                var d = b[c].split("=");
                if (2 == d.length) {
                    try {
                        var e = decodeURIComponent(d[0].replace(/\+/g, " "))
                    } catch (h) {
                        e = d[0]
                    }
                    try {
                        var f = decodeURIComponent(d[1].replace(/\+/g, " "))
                    } catch (h) {
                        f = d[1]
                    }
                    e = e.toLowerCase();
                    a[e] = f
                }
            }
        } else a = {};
        return a
    }

    function Dc() {
        if (Ec) {
            var a = new wc("closeWindow");
            if (Ec) {
                var b = a.u,
                    c = a.Qg,
                    a = a.id(),
                    d = (new nc(null)).eb(c);
                if (vc) c = ra.btoa(d);
                else {
                    for (var c = [], e = 0, f = 0; f < d.length; f++) {
                        for (var h = d.charCodeAt(f); 255 < h;) c[e++] = h & 255, h >>= 8;
                        c[e++] = h
                    }
                    if (!uc)
                        for (uc = {}, d = 0; 65 > d; d++) uc[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
                    d = uc;
                    e = [];
                    for (f = 0; f < c.length; f += 3) {
                        var k = c[f],
                            t = (h = f + 1 < c.length) ? c[f + 1] : 0,
                            H = f + 2 < c.length,
                            xa = H ? c[f + 2] : 0,
                            ec = k >> 2,
                            k = (k & 3) << 4 | t >> 4,
                            t = (t & 15) << 2 | xa >> 6,
                            xa = xa & 63;
                        H || (xa =
                            64, h || (t = 64));
                        e.push(d[ec], d[k], d[t], d[xa])
                    }
                    c = e.join("")
                }
                xc("isplayer://" + b + "/" + a + "/" + c)
            }
        } else try {
            Fc || (window.open("", "_self", ""), window.close())
        } catch (lf) {}
    };
    (function() {
        function a(a) {
            try {
                return a.ISPlayer && (window.ISPlayer = a.ISPlayer), a.ISPVideoPlayer && (window.ISPVideoPlayer = a.ISPVideoPlayer), a.ISPQuizPlayer && (window.ISPQuizPlayer = a.ISPQuizPlayer), a.ISPInteractionPlayerCore && (window.ISPInteractionPlayerCore = a.ISPInteractionPlayerCore), a.ISPBookPlayer && (window.ISPBookPlayer = a.ISPBookPlayer), a.ISPScenarioPlayer && (window.ISPScenarioPlayer = a.ISPScenarioPlayer), !0
            } catch (e) {
                return !1
            }
        }
        if (function() {
                var a;
                try {
                    a = window.frameElement
                } catch (e) {}
                return null != a
            }())
            for (var b =
                    window, c = 7; b && b.parent != b && 0 != c-- && !a(b.parent);) b = b.parent
    })();
    var Gc;
    var Hc = Cc().user_agent;
    Gc = Hc ? Hc : eb || "";
    var Ic = "1" == Cc().small_screen,
        Jc = -1 != Gc.toLowerCase().indexOf("chrome"),
        Fc = -1 == Gc.toLowerCase().indexOf("windows phone") && -1 != Gc.toLowerCase().indexOf("android") && !Jc && !sc && !kb,
        Ec = -1 != Gc.indexOf("ismobile");
    if (p("Windows")) {
        var Kc = eb,
            Lc = "",
            Mc;
        if (p("Windows")) {
            Mc = /Windows (?:NT|Phone) ([0-9.]+)/;
            var Nc = Mc.exec(Kc),
                Lc = Nc ? Nc[1] : "0.0"
        } else hb() || p("iPad") || p("iPod") ? (Mc = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, Lc = (Nc = Mc.exec(Kc)) && Nc[1].replace(/_/g, ".")) : p("Macintosh") ? (Mc = /Mac OS X ([0-9_.]+)/, Lc = (Nc = Mc.exec(Kc)) ? Nc[1].replace(/_/g, ".") : "10") : p("Android") ? (Mc = /Android\s+([^\);]+)(\)|;)/, Lc = (Nc = Mc.exec(Kc)) && Nc[1]) : p("CrOS") && (Mc = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, Lc = (Nc = Mc.exec(Kc)) && Nc[1]);
        Pa(Lc ||
            "", "6")
    };

    function Oc() {
        this.Cf = [];
        this.ra = []
    }
    Oc.prototype.push = function(a, b) {
        if (!(b in this.ra)) {
            this.ra[b] = [];
            var c = this.Cf,
                d;
            d = 0;
            for (var e = c.length, f; d < e;) {
                var h = d + e >> 1,
                    k;
                k = c[h];
                k = b > k ? 1 : b < k ? -1 : 0;
                0 < k ? d = h + 1 : (e = h, f = !k)
            }
            d = f ? d : ~d;
            0 > d && cb(c, -(d + 1), 0, b)
        }
        this.ra[b].push(a)
    };
    Oc.prototype.remove = function(a, b) {
        b in this.ra && $a(this.ra[b], a)
    };

    function Pc(a, b) {
        return b in a.ra ? a.ra[b] : []
    }

    function Qc(a) {
        var b = [],
            c = a.ra;
        a = a.Cf;
        for (var d = 0; d < a.length; ++d) bb(b, c[a[d]]);
        return b
    };

    function q() {
        this.hb = new Oc
    }
    n(q, zb);
    var Rc = 0;
    q.prototype.addHandler = function(a, b, c) {
        this.hb.push({
            Hd: a,
            context: b
        }, c || 0);
        ++Rc
    };
    q.prototype.addHandler = q.prototype.addHandler;
    q.prototype.removeHandler = function(a, b, c) {
        c = c || 0;
        for (var d = Pc(this.hb, c), e = d.length, f = 0; f < e; ++f) {
            var h = d[f];
            if (h.Hd == a && h.context == b) {
                a = this.hb;
                c in a.ra && Array.prototype.splice.call(a.ra[c], f, 1);
                --Rc;
                break
            }
        }
    };
    q.prototype.removeHandler = q.prototype.removeHandler;
    q.prototype.gj = function(a, b, c) {
        c = Pc(this.hb, c || 0);
        for (var d = c.length, e = 0; e < d; ++e) {
            var f = c[e];
            if (f.Hd == a && f.context == b) return !0
        }
        return !1
    };
    q.prototype.hasHandler = q.prototype.gj;
    q.prototype.i = function(a) {
        for (var b = Qc(this.hb), c = b.length, d = 0; d < c; ++d) {
            var e = b[d];
            if (-1 != Ya(Qc(this.hb), e)) try {
                e.Hd.apply(e.context, arguments)
            } catch (f) {
                1 != window._ispringDebug && "1" != Cc().isdebug || alert(f)
            }
        }
    };
    q.prototype.dispatch = q.prototype.i;

    function r(a) {
        this.Rc = Sc;
        this.ei = a
    }
    r.prototype.Ma = 0;
    r.prototype.fb = !1;
    r.prototype.Ja = !1;
    r.prototype.slideIndex = function() {
        return this.Ma
    };
    r.prototype.slideIndex = r.prototype.slideIndex;
    r.prototype.Gg = function(a) {
        this.Ja |= this.Ma != a;
        this.Ma = a
    };
    r.prototype.setSlideIndex = r.prototype.Gg;
    r.prototype.action = function() {
        return this.Rc
    };
    r.prototype.action = r.prototype.action;
    r.prototype.Eg = function(a) {
        this.Ja |= this.Rc != a;
        this.Rc = a
    };
    r.prototype.setAction = r.prototype.Eg;
    r.prototype.autoStart = function() {
        return this.fb
    };
    r.prototype.autoStart = r.prototype.autoStart;
    r.prototype.Nc = function(a) {
        this.Ja |= this.fb != a;
        this.fb = a
    };
    r.prototype.setAutoStart = r.prototype.Nc;
    r.prototype.jk = function() {
        return this.ei
    };
    r.prototype.startupController = r.prototype.jk;
    var Sc = "gotoSlide",
        Tc = {
            Pl: "resumePlayback",
            Wk: Sc,
            Pk: "delayStartup"
        };
    m("ispring.presenter.player.startup.PresentationStartup.Action", Tc, void 0);
    m("RESUME_PLAYBACK", "resumePlayback", Tc);
    m("GOTO_SLIDE", Sc, Tc);
    m("DELAY_STARTUP", "delayStartup", Tc);

    function Uc() {}
    m("ispring.presenter.presentation.ITimestamp", Uc, void 0);
    Uc.prototype.slideIndex = function() {};
    Uc.prototype.slideIndex = Uc.prototype.slideIndex;
    Uc.prototype.stepIndex = function() {};
    Uc.prototype.stepIndex = Uc.prototype.stepIndex;
    Uc.prototype.timeOffset = function() {};
    Uc.prototype.timeOffset = Uc.prototype.timeOffset;

    function Vc() {}
    Vc.prototype.wd = function() {
        return []
    };
    Vc.prototype.activeTracks = Vc.prototype.wd;
    Vc.prototype.view = function() {
        throw Error("unsupported operation");
    };
    Vc.prototype.view = Vc.prototype.view;
    Vc.prototype.Qd = function() {
        return !1
    };
    Vc.prototype.isBuffering = Vc.prototype.Qd;

    function Wc() {}
    Wc.prototype.wd = function() {
        return []
    };
    Wc.prototype.activeTracks = Wc.prototype.wd;
    Wc.prototype.Qd = function() {
        return !1
    };
    Wc.prototype.isBuffering = Wc.prototype.Qd;

    function Xc() {}
    m("ispring.utils.assets.IAsset", Xc, void 0);
    Xc.prototype.isLoaded = function() {};
    Xc.prototype.isLoaded = Xc.prototype.isLoaded;
    Xc.prototype.Kj = function() {};
    Xc.prototype.progress = Xc.prototype.Kj;
    Xc.prototype.load = function() {};
    Xc.prototype.load = Xc.prototype.load;
    Xc.prototype.Ae = function() {};
    Xc.prototype.unload = Xc.prototype.Ae;
    Xc.prototype.tj = function() {};
    Xc.prototype.loadCompleteEvent = Xc.prototype.tj;
    Xc.prototype.uj = function() {};
    Xc.prototype.loadFailedEvent = Xc.prototype.uj;
    Xc.prototype.vj = function() {};
    Xc.prototype.loadProgressEvent = Xc.prototype.vj;

    function Yc() {}
    m("ispring.utils.assets.IGraphicAsset", Yc, void 0);
    Yc.prototype.width = function() {};
    Yc.prototype.width = Yc.prototype.width;
    Yc.prototype.height = function() {};
    Yc.prototype.height = Yc.prototype.height;
    Yc.prototype.Ni = function() {};
    Yc.prototype.createInstance = Yc.prototype.Ni;
    Yc.prototype.Mi = function() {};
    Yc.prototype.createImgInstance = Yc.prototype.Mi;

    function Zc() {}
    m("ispring.presenter.presentation.ICompany", Zc, void 0);
    Zc.prototype.Rd = function() {};
    Zc.prototype.logo = Zc.prototype.Rd;
    Zc.prototype.webSiteUrl = function() {};
    Zc.prototype.webSiteUrl = Zc.prototype.webSiteUrl;
    Zc.prototype.webSiteTarget = function() {};
    Zc.prototype.webSiteTarget = Zc.prototype.webSiteTarget;

    function u() {}
    m("ispring.presenter.presentation.IPresenter", u, void 0);
    u.prototype.name = function() {};
    u.prototype.name = u.prototype.name;
    u.prototype.jobTitle = function() {};
    u.prototype.jobTitle = u.prototype.jobTitle;
    u.prototype.biography = function() {};
    u.prototype.biography = u.prototype.biography;
    u.prototype.webSiteUrl = function() {};
    u.prototype.webSiteUrl = u.prototype.webSiteUrl;
    u.prototype.email = function() {};
    u.prototype.email = u.prototype.email;
    u.prototype.phone = function() {};
    u.prototype.phone = u.prototype.phone;
    u.prototype.company = function() {};
    u.prototype.company = u.prototype.company;
    u.prototype.Xd = function() {};
    u.prototype.photo = u.prototype.Xd;

    function $c() {}
    m("ispring.presenter.presentation.IPresenters", $c, void 0);
    $c.prototype.count = function() {};
    $c.prototype.count = $c.prototype.count;
    $c.prototype.Jd = function() {};
    $c.prototype.getPresenter = $c.prototype.Jd;

    function ad() {}
    m("ispring.presenter.presentation.resources.references.IReference", ad, void 0);
    ad.prototype.type = function() {};
    ad.prototype.type = ad.prototype.type;
    ad.prototype.title = function() {};
    ad.prototype.title = ad.prototype.title;
    ad.prototype.url = function() {};
    ad.prototype.url = ad.prototype.url;
    ad.prototype.target = function() {};
    ad.prototype.target = ad.prototype.target;
    ad.prototype.navigate = function() {};
    ad.prototype.navigate = ad.prototype.navigate;

    function bd() {}
    m("ispring.presenter.presentation.resources.references.IReferences", bd, void 0);
    bd.prototype.count = function() {};
    bd.prototype.count = bd.prototype.count;
    bd.prototype.Kd = function() {};
    bd.prototype.getReference = bd.prototype.Kd;

    function cd() {}
    m("ispring.presenter.presentation.resources.IResources", cd, void 0);
    cd.prototype.ce = function() {};
    cd.prototype.references = cd.prototype.ce;

    function v() {}
    m("ispring.presenter.presentation.IPresentation", v, void 0);
    v.prototype.ze = function() {};
    v.prototype.uniqueId = v.prototype.ze;
    v.prototype.Cb = function() {};
    v.prototype.slides = v.prototype.Cb;
    v.prototype.title = function() {};
    v.prototype.title = v.prototype.title;
    v.prototype.ne = function() {};
    v.prototype.slideWidth = v.prototype.ne;
    v.prototype.me = function() {};
    v.prototype.slideHeight = v.prototype.me;
    v.prototype.$d = function() {};
    v.prototype.presenters = v.prototype.$d;
    v.prototype.company = function() {};
    v.prototype.company = v.prototype.company;
    v.prototype.ee = function() {};
    v.prototype.resources = v.prototype.ee;

    function dd() {}
    m("ispring.presenter.player.transitions.ISlideTransitionController", dd, void 0);
    dd.prototype.ye = function() {};
    dd.prototype.transitionProgress = dd.prototype.ye;
    dd.prototype.state = function() {};
    dd.prototype.state = dd.prototype.state;
    dd.prototype.oc = function() {};
    dd.prototype.transitionEffectStartEvent = dd.prototype.oc;
    dd.prototype.xe = function() {};
    dd.prototype.transitionEffectCompleteEvent = dd.prototype.xe;

    function w() {}
    m("ispring.presenter.player.clock.IPresentationClock", w, void 0);
    w.prototype.timestamp = function() {};
    w.prototype.timestamp = w.prototype.timestamp;
    w.prototype.pe = function() {};
    w.prototype.started = w.prototype.pe;
    w.prototype.state = function() {};
    w.prototype.state = w.prototype.state;
    w.prototype.suspended = function() {};
    w.prototype.suspended = w.prototype.suspended;
    w.prototype.he = function() {};
    w.prototype.running = w.prototype.he;
    w.prototype.Dd = function() {};
    w.prototype.buffering = w.prototype.Dd;
    w.prototype.ve = function() {};
    w.prototype.tickEvent = w.prototype.ve;
    w.prototype.oe = function() {};
    w.prototype.startEvent = w.prototype.oe;
    w.prototype.se = function() {};
    w.prototype.stopEvent = w.prototype.se;
    w.prototype.re = function() {};
    w.prototype.stateChangeEvent = w.prototype.re;
    w.prototype.Cd = function() {};
    w.prototype.bufferStateChangeEvent = w.prototype.Cd;
    w.prototype.mg = function() {};

    function x() {}
    m("ispring.presenter.player.IPresentationPlaybackController", x, void 0);
    x.prototype.play = function() {};
    x.prototype.play = x.prototype.play;
    x.prototype.pause = function() {};
    x.prototype.pause = x.prototype.pause;
    x.prototype.gc = function() {};
    x.prototype.gotoSlide = x.prototype.gc;
    x.prototype.bc = function() {};
    x.prototype.gotoLastSlideViewed = x.prototype.bc;
    x.prototype.$b = function() {};
    x.prototype.gotoFirstSlide = x.prototype.$b;
    x.prototype.ac = function() {};
    x.prototype.gotoLastSlide = x.prototype.ac;
    x.prototype.cc = function() {};
    x.prototype.gotoNextSlide = x.prototype.cc;
    x.prototype.ec = function() {};
    x.prototype.gotoPreviousSlide = x.prototype.ec;
    x.prototype.dc = function() {};
    x.prototype.gotoNextStep = x.prototype.dc;
    x.prototype.fc = function() {};
    x.prototype.gotoPreviousStep = x.prototype.fc;
    x.prototype.hc = function() {};
    x.prototype.gotoTimestamp = x.prototype.hc;
    x.prototype.qb = function() {};
    x.prototype.firstSlideIndex = x.prototype.qb;
    x.prototype.rb = function() {};
    x.prototype.lastSlideIndex = x.prototype.rb;
    x.prototype.sb = function() {};
    x.prototype.nextSlideIndex = x.prototype.sb;
    x.prototype.vb = function() {};
    x.prototype.previousSlideIndex = x.prototype.vb;
    x.prototype.I = function() {};
    x.prototype.currentSlideIndex = x.prototype.I;
    x.prototype.pb = function() {};
    x.prototype.currentSlide = x.prototype.pb;
    x.prototype.playbackState = function() {};
    x.prototype.playbackState = x.prototype.playbackState;
    x.prototype.Ra = function() {};
    x.prototype.clock = x.prototype.Ra;
    x.prototype.Ab = function() {};
    x.prototype.slideChangeEvent = x.prototype.Ab;
    x.prototype.Db = function() {};
    x.prototype.stepChangeEvent = x.prototype.Db;
    x.prototype.tb = function() {};
    x.prototype.playbackCompleteEvent = x.prototype.tb;
    x.prototype.jc = function() {};
    x.prototype.kc = function() {};
    x.prototype.Bb = function() {};
    x.prototype.slideTransitionController = x.prototype.Bb;

    function ed(a, b, c) {
        this.Ma = a;
        this.Zf = b;
        this.eg = c
    }
    ed.prototype.Ma = 0;
    ed.prototype.Zf = 0;
    ed.prototype.eg = 0;
    ed.prototype.slideIndex = function() {
        return this.Ma
    };
    ed.prototype.slideIndex = ed.prototype.slideIndex;
    ed.prototype.stepIndex = function() {
        return this.Zf
    };
    ed.prototype.stepIndex = ed.prototype.stepIndex;
    ed.prototype.timeOffset = function() {
        return this.eg
    };
    ed.prototype.timeOffset = ed.prototype.timeOffset;

    function y() {}
    m("ispring.presenter.presentation.slides.ISlides", y, void 0);
    y.prototype.Sa = function() {};
    y.prototype.getSlide = y.prototype.Sa;
    y.prototype.count = function() {};
    y.prototype.count = y.prototype.count;
    y.prototype.duration = function() {};
    y.prototype.duration = y.prototype.duration;
    y.prototype.Ed = function() {};
    y.prototype.convertTimestampToTime = y.prototype.Ed;
    y.prototype.bb = function() {};
    y.prototype.convertTimeToTimestamp = y.prototype.bb;
    y.prototype.Pc = function() {};
    y.prototype.visibleSlidesCount = y.prototype.Pc;
    y.prototype.Nd = function() {};
    y.prototype.getVisibleSlide = y.prototype.Nd;
    y.prototype.Ce = function() {};
    y.prototype.visibleSlidesDuration = y.prototype.Ce;
    y.prototype.Be = function() {};
    y.prototype.visibleAnimationStepsDuration = y.prototype.Be;
    y.prototype.Fd = function() {};
    y.prototype.createTimestamp = y.prototype.Fd;

    function fd(a, b, c, d) {
        this.Ye = a;
        this.Xe = b;
        this.Sf = c || null;
        this.hi = d || !1
    }
    fd.prototype.Sf = null;
    fd.prototype.effectType = function() {
        return this.Ye
    };
    fd.prototype.effectType = fd.prototype.effectType;
    fd.prototype.duration = function() {
        return this.Xe
    };
    fd.prototype.duration = fd.prototype.duration;
    fd.prototype.clone = function() {
        return new fd(this.Ye, this.Xe, this.Sf, this.hi)
    };
    m("ispring.presenter.presentation.assets.ISlideThumbnail", function() {}, void 0);

    function gd() {
        this.na = {}
    }
    gd.prototype.Ic = function(a) {
        var b = this.na;
        return null !== b && a in b ? b[a] : !0
    };
    gd.prototype.navigationActionIsEnabled = gd.prototype.Ic;

    function hd() {}
    m("ispring.presenter.presentation.slides.IAnimationStep", hd, void 0);
    hd.prototype.automaticAdvance = function() {};
    hd.prototype.automaticAdvance = hd.prototype.automaticAdvance;
    hd.prototype.duration = function() {};
    hd.prototype.duration = hd.prototype.duration;
    hd.prototype.startTime = function() {};
    hd.prototype.startTime = hd.prototype.startTime;

    function id() {}
    m("ispring.presenter.presentation.slides.IAnimationSteps", id, void 0);
    id.prototype.count = function() {};
    id.prototype.count = id.prototype.count;
    id.prototype.Ld = function() {};
    id.prototype.getStep = id.prototype.Ld;
    id.prototype.duration = function() {};
    id.prototype.duration = id.prototype.duration;

    function jd() {}
    m("ispring.presenter.presentation.slides.ISlideNotes", jd, void 0);
    jd.prototype.text = function() {};
    jd.prototype.text = jd.prototype.text;
    jd.prototype.html = function() {};
    jd.prototype.html = jd.prototype.html;

    function z() {}
    m("ispring.presenter.presentation.slides.ISlide", z, void 0);
    z.prototype.type = function() {};
    z.prototype.type = z.prototype.type;
    z.prototype.index = function() {};
    z.prototype.index = z.prototype.index;
    z.prototype.visibleIndex = function() {};
    z.prototype.visibleIndex = z.prototype.visibleIndex;
    z.prototype.visible = function() {};
    z.prototype.visible = z.prototype.visible;
    z.prototype.isLoaded = function() {};
    z.prototype.isLoaded = z.prototype.isLoaded;
    z.prototype.title = function() {};
    z.prototype.title = z.prototype.title;
    z.prototype.slideNotes = function() {};
    z.prototype.slideNotes = z.prototype.slideNotes;
    z.prototype.transition = function() {};
    z.prototype.transition = z.prototype.transition;
    z.prototype.duration = function() {};
    z.prototype.duration = z.prototype.duration;
    z.prototype.ue = function() {};
    z.prototype.thumbnail = z.prototype.ue;
    z.prototype.startTime = function() {};
    z.prototype.startTime = z.prototype.startTime;
    z.prototype.nestingLevel = function() {};
    z.prototype.nestingLevel = z.prototype.nestingLevel;
    z.prototype.text = function() {};
    z.prototype.text = z.prototype.text;
    z.prototype.Td = function() {};
    z.prototype.metaCommands = z.prototype.Td;
    z.prototype.presenter = function() {};
    z.prototype.presenter = z.prototype.presenter;
    z.prototype.navigationSettings = function() {};
    z.prototype.Fc = function() {};
    z.prototype.animationSteps = z.prototype.Fc;
    z.prototype.bb = function() {};
    z.prototype.convertTimeToTimestamp = z.prototype.bb;

    function kd() {}
    m("ispring.presenter.player.IRestrictedPresentationPlaybackController", kd, void 0);
    kd.prototype.Jc = function() {};
    kd.prototype.navigationRestrictedEvent = kd.prototype.Jc;
    kd.prototype.oc = function() {};

    function A() {}
    m("ispring.presenter.player.sound.ISoundController", A, void 0);
    A.prototype.volume = function() {};
    A.prototype.volume = A.prototype.volume;
    A.prototype.setVolume = function() {};
    A.prototype.setVolume = A.prototype.setVolume;
    A.prototype.Ud = function() {};
    A.prototype.mute = A.prototype.Ud;
    A.prototype.muted = function() {};
    A.prototype.muted = A.prototype.muted;
    A.prototype.ae = function() {};
    A.prototype.realVolume = A.prototype.ae;
    A.prototype.De = function() {};
    A.prototype.volumeChangedEvent = A.prototype.De;
    A.prototype.be = function() {};
    A.prototype.realVolumeChangedEvent = A.prototype.be;
    A.prototype.Vd = function() {};
    A.prototype.muteStateToggledEvent = A.prototype.Vd;

    function ld() {}
    m("ispring.presenter.player.IPresentationView", ld, void 0);
    ld.prototype.playbackController = ld.prototype.yg;
    ld.prototype.restrictedPlaybackController = ld.prototype.Cg;
    ld.prototype.soundController = ld.prototype.soundController;
    ld.prototype.displayObject = ld.prototype.displayObject;
    ld.prototype.setOverlayDisplayed = function() {};
    ld.prototype.width = ld.prototype.width;
    ld.prototype.height = ld.prototype.height;
    ld.prototype.resize = ld.prototype.resize;

    function md() {}
    m("ispring.presenter.player.IPresentationPlayer", md, void 0);
    md.prototype.presentation = md.prototype.zg;
    md.prototype.view = md.prototype.view;
    md.prototype.version = md.prototype.version;

    function nd(a) {
        this.lb = a;
        this.Ze = new q
    }
    nd.prototype.Gd = function() {
        return this.Ze
    };
    var od = {
        Ck: "activated",
        Ok: "deactivated",
        Ik: "buffering"
    };
    m("ispring.presenter.presentation.narration.NarrationTrackPlaybackState", od, void 0);
    m("ACTIVATED", "activated", od);
    m("DEACTIVATED", "deactivated", od);
    m("BUFFERING", "buffering", od);

    function pd(a, b, c) {
        this.ci = a;
        this.$g = b;
        this.ti = l(c) ? c : 1;
        this.Jh = new q
    }
    pd.prototype.Ih = "deactivated";
    pd.prototype.startTimestamp = function() {
        return this.ci
    };
    pd.prototype.startTimestamp = pd.prototype.startTimestamp;
    pd.prototype.endTimestamp = function() {
        return this.$g
    };
    pd.prototype.endTimestamp = pd.prototype.endTimestamp;
    pd.prototype.volume = function() {
        return this.ti
    };
    pd.prototype.playbackState = function() {
        return this.Ih
    };
    pd.prototype.playbackState = pd.prototype.playbackState;
    pd.prototype.playbackStateChangedEvent = function() {
        return this.Jh
    };
    pd.prototype.playbackStateChangedEvent = pd.prototype.playbackStateChangedEvent;

    function qd(a, b, c) {
        pd.call(this, a, b, c)
    }
    n(qd, pd);

    function rd(a) {
        this.f = a
    }
    rd.prototype.count = function() {
        return this.f.audioTracks_getCount()
    };
    rd.prototype.count = rd.prototype.count;
    rd.prototype.og = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of range");
        a = this.f.audioTracks_getAudioTrack(a);
        return new qd(new ed(a.startTimestamp.slideIndex, a.startTimestamp.stepIndex, a.startTimestamp.timeOffset), new ed(a.endTimestamp.slideIndex, a.endTimestamp.stepIndex, a.endTimestamp.timeOffset))
    };
    rd.prototype.getAudioTrack = rd.prototype.og;
    rd.prototype.Md = function(a) {
        return this.og(a)
    };
    rd.prototype.getTrack = rd.prototype.Md;

    function sd(a, b, c) {
        pd.call(this, a, b, c)
    }
    n(sd, pd);
    sd.prototype.width = function() {
        return 100
    };
    sd.prototype.width = sd.prototype.width;
    sd.prototype.height = function() {
        return 100
    };
    sd.prototype.height = sd.prototype.height;

    function td(a) {
        this.f = a
    }
    td.prototype.count = function() {
        return this.f.videoTracks_getCount()
    };
    td.prototype.count = td.prototype.count;
    td.prototype.vg = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of range");
        a = this.f.videoTracks_getVideoTrack(a);
        return new sd(new ed(a.startTimestamp.slideIndex, a.startTimestamp.stepIndex, a.startTimestamp.timeOffset), new ed(a.endTimestamp.slideIndex, a.endTimestamp.stepIndex, a.endTimestamp.timeOffset))
    };
    td.prototype.getVideoTrack = td.prototype.vg;
    td.prototype.Md = function(a) {
        return this.vg(a)
    };
    td.prototype.getTrack = td.prototype.Md;

    function ud(a) {
        this.Sg = new rd(a);
        this.ri = new td(a)
    }
    ud.prototype.Bi = function() {
        return this.Sg
    };
    ud.prototype.audioTracks = ud.prototype.Bi;
    ud.prototype.wk = function() {
        return this.ri
    };
    ud.prototype.videoTracks = ud.prototype.wk;

    function vd() {}
    vd.prototype.oh = null;
    vd.prototype.Sb = "";
    vd.prototype.Ac = "_blank";
    vd.prototype.Rd = function() {
        return this.oh
    };
    vd.prototype.logo = vd.prototype.Rd;
    vd.prototype.webSiteUrl = function() {
        return this.Sb
    };
    vd.prototype.webSiteUrl = vd.prototype.webSiteUrl;
    vd.prototype.zb = function(a) {
        this.Sb = a
    };
    vd.prototype.webSiteTarget = function() {
        return this.Ac
    };
    vd.prototype.webSiteTarget = vd.prototype.webSiteTarget;

    function B() {}
    g = B.prototype;
    g.Z = "";
    g.ed = "";
    g.Vc = "";
    g.Sb = "";
    g.$c = "";
    g.md = "";
    g.Xc = null;
    g.Gh = null;
    g.name = function() {
        return this.Z
    };
    B.prototype.name = B.prototype.name;
    B.prototype.jobTitle = function() {
        return this.ed
    };
    B.prototype.jobTitle = B.prototype.jobTitle;
    B.prototype.biography = function() {
        return this.Vc
    };
    B.prototype.biography = B.prototype.biography;
    B.prototype.webSiteUrl = function() {
        return this.Sb
    };
    B.prototype.webSiteUrl = B.prototype.webSiteUrl;
    B.prototype.zb = function(a) {
        this.Sb = a
    };
    B.prototype.email = function() {
        return this.$c
    };
    B.prototype.email = B.prototype.email;
    B.prototype.phone = function() {
        return this.md
    };
    B.prototype.phone = B.prototype.phone;
    B.prototype.company = function() {
        return this.Xc
    };
    B.prototype.company = B.prototype.company;
    B.prototype.Xd = function() {
        return this.Gh
    };
    B.prototype.photo = B.prototype.Xd;

    function wd(a) {
        this.f = a
    }
    wd.prototype.count = function() {
        return this.f.presenters_getCount()
    };
    wd.prototype.count = wd.prototype.count;
    wd.prototype.Jd = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of range");
        a = this.f.presenters_getPresenter(a);
        var b = new B;
        b.Z = a.name;
        b.ed = a.jobTitle;
        b.Vc = a.biography;
        b.zb(a.webSiteUrl);
        b.$c = a.email;
        b.md = a.phone;
        if (null != a.company) {
            var c = new vd;
            c.zb(a.company.webSiteUrl);
            c.Ac = a.company.webSiteTarget;
            b.Xc = c
        }
        return b
    };
    wd.prototype.getPresenter = wd.prototype.Jd;

    function xd(a) {
        this.Pb = a
    }
    xd.prototype.automaticAdvance = function() {
        return this.Pb.automaticAdvance
    };
    xd.prototype.automaticAdvance = xd.prototype.automaticAdvance;
    xd.prototype.duration = function() {
        return this.Pb.duration
    };
    xd.prototype.duration = xd.prototype.duration;
    xd.prototype.startTime = function() {
        return this.Pb.startTime
    };
    xd.prototype.startTime = xd.prototype.startTime;
    xd.prototype.animationDuration = function() {
        return this.Pb.animationDuration
    };
    xd.prototype.animationDuration = xd.prototype.animationDuration;
    xd.prototype.pauseDuration = function() {
        return this.Pb.pauseDuration
    };
    xd.prototype.pauseDuration = xd.prototype.pauseDuration;

    function yd(a, b) {
        this.f = a;
        this.jb = b;
        this.Qb = [];
        for (var c = 0; c < this.count(); c++) this.Qb.push(null)
    }
    yd.prototype.count = function() {
        return this.f.animationSteps_getCount(this.jb)
    };
    yd.prototype.count = yd.prototype.count;
    yd.prototype.Ld = function(a) {
        if (0 > a || a >= this.Qb.length) throw Error("stepIndex is out of range");
        if (null == this.Qb[a]) {
            var b = this.f.animationSteps_getStep(this.jb, a);
            this.Qb[a] = new xd(b)
        }
        return this.Qb[a]
    };
    yd.prototype.getStep = yd.prototype.Ld;
    yd.prototype.duration = function() {
        return this.f.animationSteps_getDuration(this.jb)
    };
    yd.prototype.duration = yd.prototype.duration;

    function zd(a) {
        this.Re = a
    }
    zd.prototype.name = function() {
        return this.Re.name
    };
    zd.prototype.name = zd.prototype.name;
    zd.prototype.params = function() {
        return this.Re.params
    };
    zd.prototype.params = zd.prototype.params;

    function Ad(a, b) {
        this.f = a;
        this.jb = b;
        this.qc = [];
        for (var c = 0; c < this.count(); c++) this.qc.push(null)
    }
    Ad.prototype.count = function() {
        return this.f.metaCommands_getCount(this.jb)
    };
    Ad.prototype.count = Ad.prototype.count;
    Ad.prototype.bj = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        if (null == this.qc[a]) {
            var b = this.f.metaCommands_getMetaCommand(this.jb, a);
            this.qc[a] = new zd(b)
        }
        return this.qc[a]
    };
    Ad.prototype.getMetaCommand = Ad.prototype.bj;
    var Bd = {
        bm: "switchToNextSlide",
        dm: "switchToPreviousSlide",
        Ek: "arbitrarySlideSwitching",
        am: "slideShowControl",
        cm: "switchToNextStep",
        em: "switchToPreviousStep",
        tl: "playPauseControl",
        Dl: "presentationSeeking",
        $l: "slideSeeking",
        Kl: "quizSwitchToNextSlide",
        Ll: "quizSwitchToNextSlideWithoutBranching",
        Hl: "quizArbitrarySlideSwitching",
        Ul: "scenarioSwitchToNextSlide",
        Vl: "scenarioSwitchToNextSlideWithoutBranching",
        Rl: "ScenarioArbitrarySlideSwitching"
    };
    m("ispring.presenter.player.restriction.NavigationActionType", Bd, void 0);
    Bd.all = function() {
        return "switchToNextSlide switchToPreviousSlide arbitrarySlideSwitching slideShowControl switchToNextStep switchToPreviousStep playPauseControl presentationSeeking slideSeeking".split(" ")
    };
    m("SWITCH_TO_NEXT_SLIDE", "switchToNextSlide", Bd);
    m("SWITCH_TO_PREVIOUS_SLIDE", "switchToPreviousSlide", Bd);
    m("ARBITRARY_SLIDE_SWITCHING", "arbitrarySlideSwitching", Bd);
    m("SLIDE_SHOW_CONTROL", "slideShowControl", Bd);
    m("SWITCH_TO_NEXT_STEP", "switchToNextStep", Bd);
    m("SWITCH_TO_PREVIOUS_STEP", "switchToPreviousStep", Bd);
    m("PLAY_PAUSE_CONTROL", "playPauseControl", Bd);
    m("PRESENTATION_SEEKING", "presentationSeeking", Bd);
    m("SLIDE_SEEKING", "slideSeeking", Bd);

    function Cd(a) {
        this.qa = new gd;
        this.qa.na.switchToNextSlide = a.switchingToNextSlideIsEnabled;
        this.qa.na.switchToPreviousSlide = a.switchingToPreviousSlideIsEnabled;
        this.qa.na.arbitrarySlideSwitching = a.arbitrarySlideSwitchingIsEnabled;
        this.qa.na.slideShowControl = a.slideShowControlIsEnabled;
        this.qa.na.switchToNextStep = a.switchingToNextStepIsEnabled;
        this.qa.na.switchToPreviousStep = a.switchingToPreviousStepIsEnabled;
        this.qa.na.playPauseControl = a.playPauseControlIsEnabled;
        this.qa.na.presentationSeeking = a.presentationSeekingIsEnabled;
        this.qa.na.slideSeeking = a.slideSeekingIsEnabled
    }
    Cd.prototype.Ic = function(a) {
        return this.qa.Ic(a)
    };
    Cd.prototype.navigationActionIsEnabled = Cd.prototype.Ic;

    function Dd(a, b) {
        this.Aa = a || "";
        this.gh = b || ""
    }
    Dd.prototype.text = function() {
        return this.Aa
    };
    Dd.prototype.text = Dd.prototype.text;
    Dd.prototype.html = function() {
        return this.gh
    };
    Dd.prototype.html = Dd.prototype.html;

    function C(a, b) {
        this.w = a;
        this.f = b
    }
    C.prototype.Fc = function() {
        null == this.He && (this.He = new yd(this.f, this.index()));
        return this.He
    };
    C.prototype.animationSteps = C.prototype.Fc;
    C.prototype.duration = function() {
        return this.w.transition.duration + this.Fc().duration()
    };
    C.prototype.duration = C.prototype.duration;
    C.prototype.type = function() {
        return this.w.type
    };
    C.prototype.type = C.prototype.type;
    C.prototype.index = function() {
        return this.w.index
    };
    C.prototype.index = C.prototype.index;
    C.prototype.visibleIndex = function() {
        if (!this.visible()) throw Error("slide is hidden");
        return this.w.visibleIndex
    };
    C.prototype.visibleIndex = C.prototype.visibleIndex;
    C.prototype.visible = function() {
        return this.w.visible
    };
    C.prototype.visible = C.prototype.visible;
    C.prototype.isLoaded = function() {
        return this.w.isLoaded
    };
    C.prototype.isLoaded = C.prototype.isLoaded;
    C.prototype.title = function() {
        return this.w.title
    };
    C.prototype.title = C.prototype.title;
    C.prototype.slideNotes = function() {
        if (!l(this.qf)) {
            var a = this.w.slideNotes;
            this.qf = new Dd(a.text, a.html)
        }
        return this.qf
    };
    C.prototype.slideNotes = C.prototype.slideNotes;
    C.prototype.transition = function() {
        if (!l(this.fg)) {
            var a = this.w.transition;
            this.fg = new fd(a.effectType, a.duration, null)
        }
        return this.fg
    };
    C.prototype.transition = C.prototype.transition;
    C.prototype.ue = function() {
        return null
    };
    C.prototype.thumbnail = C.prototype.ue;
    C.prototype.startTime = function() {
        return this.w.startTime
    };
    C.prototype.startTime = C.prototype.startTime;
    C.prototype.nestingLevel = function() {
        return this.w.nestingLevel
    };
    C.prototype.nestingLevel = C.prototype.nestingLevel;
    C.prototype.text = function() {
        return this.w.text
    };
    C.prototype.text = C.prototype.text;
    C.prototype.presenter = function() {
        if (null == this.w.presenter) return null;
        if (!l(this.xa) && (this.xa = new B, this.xa.Z = this.w.presenter.name, this.xa.ed = this.w.presenter.jobTitle, this.xa.Vc = this.w.presenter.biography, this.xa.zb(this.w.presenter.webSiteUrl), this.xa.$c = this.w.presenter.email, this.xa.md = this.w.presenter.phone, null != this.w.presenter.company)) {
            var a = new vd;
            a.zb(this.w.presenter.company.webSiteUrl);
            a.Ac = this.w.presenter.company.webSiteTarget;
            this.xa.Xc = a
        }
        return this.xa
    };
    C.prototype.presenter = C.prototype.presenter;
    C.prototype.navigationSettings = function() {
        var a = this.w.navigationSettings;
        return null == a ? new gd : new Cd(a)
    };
    C.prototype.navigationSettings = C.prototype.navigationSettings;
    C.prototype.Td = function() {
        null == this.kf && (this.kf = new Ad(this.f, this.index()));
        return this.kf
    };
    C.prototype.metaCommands = C.prototype.Td;
    C.prototype.bb = function(a, b) {
        b = l(b) ? b : !0;
        var c = this.f.slides_convertSlideTimeToTimestamp(this.index(), a, b);
        if (!c) throw Error("incorrect input data");
        return new ed(c.slideIndex, c.stepIndex, c.timeOffset)
    };
    C.prototype.convertTimeToTimestamp = C.prototype.bb;
    var Ed = {
        Fl: "slide",
        bl: "interaction",
        Jl: "quiz",
        Tl: "scenario"
    };
    m("ispring.presenter.presentation.slides.SlideType", Ed, void 0);
    m("PRESENTATION_SLIDE", "slide", Ed);
    m("INTERACTION_SLIDE", "interaction", Ed);
    m("QUIZ_SLIDE", "quiz", Ed);
    m("SCENARIO_SLIDE", "scenario", Ed);

    function Fd(a, b) {
        C.call(this, a, b)
    }
    n(Fd, C);

    function D(a) {
        this.f = a;
        this.S = [];
        for (a = 0; a < this.count(); a++) this.S.push(null)
    }
    D.prototype.count = function() {
        return this.f.slides_getCount()
    };
    D.prototype.count = D.prototype.count;
    D.prototype.duration = function() {
        return this.f.slides_getDuration()
    };
    D.prototype.duration = D.prototype.duration;
    D.prototype.Pc = function() {
        return this.f.slides_getVisibleCount()
    };
    D.prototype.visibleSlidesCount = D.prototype.Pc;
    D.prototype.Nd = function(a) {
        if (0 > a || a >= this.Pc()) throw Error("Slide index is out of range");
        a = this.f.slides_visibleIndexToIndex(a);
        return this.Sa(a)
    };
    D.prototype.getVisibleSlide = D.prototype.Nd;
    D.prototype.Ce = function() {
        return this.f.slides_getVisibleDuration()
    };
    D.prototype.visibleSlidesDuration = D.prototype.Ce;
    D.prototype.Be = function() {
        return this.f.slides_getVisibleDurationWithoutTransitions()
    };
    D.prototype.visibleAnimationStepsDuration = D.prototype.Be;
    D.prototype.Sa = function(a) {
        if (0 > a || a >= this.S.length) throw Error("slideIndex is out of range");
        if (null == this.S[a]) {
            var b = this.f.slides_getSlide(a);
            switch (b.type) {
                case "slide":
                    this.S[a] = new Fd(b, this.f);
                    break;
                default:
                    this.S[a] = new C(b, this.f)
            }
        }
        return this.S[a]
    };
    D.prototype.getSlide = D.prototype.Sa;
    D.prototype.bb = function(a, b, c) {
        l(b) || (b = !0);
        l(c) || (c = !0);
        a = this.f.slides_convertTimeToTimestamp(a, b, c);
        if (null == a) throw Error("incorrect input specified");
        return new ed(a.slideIndex, a.stepIndex, a.timeOffset)
    };
    D.prototype.convertTimeToTimestamp = D.prototype.bb;
    D.prototype.Fd = function(a, b, c) {
        return new ed(a, b, c)
    };
    D.prototype.createTimestamp = D.prototype.Fd;
    D.prototype.Ed = function(a, b, c) {
        l(b) || (b = !0);
        l(c) || (c = !0);
        a = {
            slideIndex: a.slideIndex(),
            stepIndex: a.stepIndex(),
            timeOffset: a.timeOffset()
        };
        b = this.f.slides_convertTimestampToTime(a, b, c);
        if (isNaN(b)) throw Error("incorrect input specified");
        return b
    };
    D.prototype.convertTimestampToTime = D.prototype.Ed;

    function Gd(a, b, c, d) {
        this.u = a;
        this.oi = b;
        this.jg = c;
        this.cg = d
    }
    Gd.prototype.type = function() {
        return this.u
    };
    Gd.prototype.type = Gd.prototype.type;
    Gd.prototype.title = function() {
        return this.oi
    };
    Gd.prototype.title = Gd.prototype.title;
    Gd.prototype.url = function() {
        return this.jg
    };
    Gd.prototype.url = Gd.prototype.url;
    Gd.prototype.target = function() {
        return this.cg
    };
    Gd.prototype.target = Gd.prototype.target;
    Gd.prototype.navigate = function(a) {
        Ac(this.jg, {
            target: a || this.cg
        })
    };
    Gd.prototype.navigate = Gd.prototype.navigate;

    function Hd(a) {
        this.f = a;
        this.Mb = {}
    }
    Hd.prototype.count = function() {
        return this.f.references_getCount()
    };
    Hd.prototype.count = Hd.prototype.count;
    Hd.prototype.Kd = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of range");
        if (!l(this.Mb[a])) {
            var b = this.f.references_getReference(a);
            this.Mb[a] = new Gd(b.type, b.title, b.url, b.target)
        }
        return this.Mb[a]
    };
    Hd.prototype.getReference = Hd.prototype.Kd;

    function Id(a) {
        this.Mb = new Hd(a)
    }
    Id.prototype.ce = function() {
        return this.Mb
    };
    Id.prototype.references = Id.prototype.ce;

    function Jd() {}
    Jd.prototype.af = !0;
    Jd.prototype.Zi = function() {
        return this.af
    };
    Jd.prototype.fitToWindow = Jd.prototype.Zi;
    var Kd = {
        Gl: "prompt",
        Dk: "always",
        ml: "never"
    };
    m("ispring.presenter.presentation.settings.PresentationResumeMode", Kd, void 0);
    m("PROMPT_TO_RESUME", "prompt", Kd);
    m("ALWAYS_RESUME", "always", Kd);
    m("NEVER_RESUME", "never", Kd);

    function Ld() {}
    Ld.prototype.jf = !1;
    Ld.prototype.fb = !1;
    Ld.prototype.Mf = "never";
    Ld.prototype.xj = function() {
        return this.jf
    };
    Ld.prototype.loopPlayback = Ld.prototype.xj;
    Ld.prototype.autoStart = function() {
        return this.fb
    };
    Ld.prototype.autoStart = Ld.prototype.autoStart;
    Ld.prototype.Nc = function(a) {
        this.fb = a
    };
    Ld.prototype.Rj = function() {
        return this.Mf
    };
    Ld.prototype.resumeMode = Ld.prototype.Rj;

    function Md() {
        this.Ia = !0
    }
    Md.prototype.enabled = function() {
        return this.Ia
    };
    Md.prototype.enabled = Md.prototype.enabled;
    Md.prototype.Oc = function(a) {
        this.Ia = a
    };

    function Nd(a) {
        this.mf = new Md;
        this.mf.Oc(a.mouse.enabled);
        this.wh = a.navigationType
    }
    Nd.prototype.mouse = function() {
        return this.mf
    };
    Nd.prototype.mouse = Nd.prototype.mouse;
    Nd.prototype.navigationType = function() {
        return this.wh
    };
    Nd.prototype.navigationType = Nd.prototype.navigationType;

    function Od(a) {
        new Nd(a.navigation);
        a = a.playback;
        this.tc = new Ld;
        this.tc.Nc(a.autoStart);
        this.tc.jf = a.loopPresentation;
        this.tc.Mf = a.resumePresentationPlayback;
        this.Ie = new Jd;
        this.Ie.af = !1
    }
    Od.prototype.xi = function() {
        return this.Ie
    };
    Od.prototype.appearance = Od.prototype.xi;
    Od.prototype.le = function() {
        return null
    };
    Od.prototype.skin = Od.prototype.le;
    Od.prototype.Od = function() {
        return null
    };
    Od.prototype.i18n = Od.prototype.Od;
    Od.prototype.playback = function() {
        return this.tc
    };
    Od.prototype.playback = Od.prototype.playback;

    function E(a) {
        this.f = a;
        this.ca = new Od(this.f.settings_getSettings())
    }
    E.prototype.ze = function() {
        return this.f.presentation_getUniqueId()
    };
    E.prototype.uniqueId = E.prototype.ze;
    E.prototype.Cb = function() {
        null == this.S && (this.S = new D(this.f));
        return this.S
    };
    E.prototype.slides = E.prototype.Cb;
    E.prototype.title = function() {
        return this.f.presentation_getTitle()
    };
    E.prototype.title = E.prototype.title;
    E.prototype.ne = function() {
        return this.f.presentation_getSlideWidth()
    };
    E.prototype.slideWidth = E.prototype.ne;
    E.prototype.me = function() {
        return this.f.presentation_getSlideHeight()
    };
    E.prototype.slideHeight = E.prototype.me;
    E.prototype.settings = function() {
        return this.ca
    };
    E.prototype.settings = E.prototype.settings;
    E.prototype.$d = function() {
        null == this.Bf && (this.Bf = new wd(this.f));
        return this.Bf
    };
    E.prototype.presenters = E.prototype.$d;
    E.prototype.company = function() {
        var a = this.f.presentation_getCompany();
        if (null == a) return null;
        var b = new vd;
        b.zb(a.webSiteUrl);
        b.Ac = a.webSiteTarget;
        return b
    };
    E.prototype.company = E.prototype.company;
    E.prototype.zj = function() {
        null == this.pf && (this.pf = new ud(this.f));
        return this.pf
    };
    E.prototype.narration = E.prototype.zj;
    E.prototype.ee = function() {
        null == this.If && (this.If = new Id(this.f));
        return this.If
    };
    E.prototype.resources = E.prototype.ee;

    function Pd() {}
    Pd.prototype.Ee = !1;
    Pd.prototype.preventAction = function() {
        this.Ee = !0
    };
    Pd.prototype.preventAction = Pd.prototype.preventAction;
    Pd.prototype.actionPrevented = function() {
        return this.Ee
    };
    Pd.prototype.actionPrevented = Pd.prototype.actionPrevented;
    var Qd = {
        Cl: "presentationNavigationType",
        Yl: "slideNavigationSettings",
        Il: "quizNavigationSettings",
        Sl: "scenarioNavigationSettings",
        Bl: "presentationFlow"
    };
    m("ispring.presenter.player.restriction.NavigationRestrictionSource", Qd, void 0);
    m("PRESENTATION_NAVIGATION_TYPE", "presentationNavigationType", Qd);
    m("SLIDE_NAVIGATION_SETTINGS", "slideNavigationSettings", Qd);
    m("PRESENTATION_FLOW", "presentationFlow", Qd);

    function Rd() {}
    m("ispring.presenter.player.restriction.INavigationRestrictionReason", Rd, void 0);
    Rd.prototype.type = function() {};
    Rd.prototype.type = Rd.prototype.type;
    Rd.prototype.relatedSlideIndex = function() {};
    Rd.prototype.relatedSlideIndex = Rd.prototype.relatedSlideIndex;

    function Sd(a, b) {
        this.u = a;
        this.Lh = b
    }
    Sd.prototype.type = function() {
        return this.u
    };
    Sd.prototype.type = Sd.prototype.type;
    Sd.prototype.relatedSlideIndex = function() {
        return this.Lh
    };
    Sd.prototype.relatedSlideIndex = Sd.prototype.relatedSlideIndex;
    var Td = {
        Mk: "currentSlideIsLocked",
        Nk: "currentSlideIsNotCompleted",
        Jk: "currentSlideIsFirstSlide",
        Lk: "currentSlideIsLastSlide",
        Kk: "currentSlideIsInteraction",
        Gk: "backwardNavigationIsRestricted",
        Vk: "forwardNavigationIsRestricted",
        El: "presentationSeekingDisabled",
        al: "interactionNotCompleted",
        xl: "precedingQuizNotPassed",
        wl: "precedingQuizNotCompleted",
        vl: "precedingQuizFailed",
        zl: "precedingScenarioNotCompleted",
        Al: "precedingScenarioNotPassed",
        yl: "precedingScenarioFailed"
    };
    m("ispring.presenter.player.restriction.NavigationRestrictionReasonType", Td, void 0);
    m("CURRENT_SLIDE_IS_LOCKED", "currentSlideIsLocked", Td);
    m("CURRENT_SLIDE_IS_NOT_COMPLETED", "currentSlideIsNotCompleted", Td);
    m("CURRENT_SLIDE_IS_LAST_SLIDE", "currentSlideIsLastSlide", Td);
    m("CURRENT_SLIDE_IS_FIRST_SLIDE", "currentSlideIsFirstSlide", Td);
    m("BACKWARD_NAVIGATION_IS_RESTRICTED", "backwardNavigationIsRestricted", Td);
    m("FORWARD_NAVIGATION_IS_RESTRICTED", "forwardNavigationIsRestricted", Td);
    m("PRESENTATION_SEEKING_DISABLED", "presentationSeekingDisabled", Td);
    m("PRECEDING_QUIZ_NOT_PASSED", "precedingQuizNotPassed", Td);
    m("PRECEDING_QUIZ_NOT_COMPLETED", "precedingQuizNotCompleted", Td);
    m("PRECEDING_QUIZ_FAILED", "precedingQuizFailed", Td);
    m("PRECEDING_SCENARIO_NOT_COMPLETED", "precedingScenarioNotCompleted", Td);
    m("PRECEDING_SCENARIO_FAILED", "precedingScenarioFailed", Td);
    m("PRECEDING_SCENARIO_NOT_PASSED", "precedingScenarioNotPassed", Td);

    function Ud() {}
    m("ispring.presenter.player.restriction.INavigationRestriction", Ud, void 0);
    Ud.prototype.Wd = function() {};
    Ud.prototype.navigationAction = Ud.prototype.Wd;
    Ud.prototype.ge = function() {};
    Ud.prototype.restrictionSource = Ud.prototype.ge;
    Ud.prototype.fe = function() {};
    Ud.prototype.restrictionReason = Ud.prototype.fe;
    Ud.prototype.relatedSlideIndex = function() {};
    Ud.prototype.relatedSlideIndex = Ud.prototype.relatedSlideIndex;
    Ud.prototype.relatedTimestamp = function() {};
    Ud.prototype.relatedTimestamp = Ud.prototype.relatedTimestamp;
    Ud.prototype.Ag = function() {};

    function Vd(a, b, c, d, e, f) {
        this.uh = a;
        this.Qh = b;
        this.Ph = c;
        this.Ma = null != d ? d : null;
        this.ni = e || null;
        this.Yh = f || null
    }
    Vd.prototype.Wd = function() {
        return this.uh
    };
    Vd.prototype.navigationAction = Vd.prototype.Wd;
    Vd.prototype.ge = function() {
        return this.Qh
    };
    Vd.prototype.restrictionSource = Vd.prototype.ge;
    Vd.prototype.fe = function() {
        return this.Ph
    };
    Vd.prototype.restrictionReason = Vd.prototype.fe;
    Vd.prototype.relatedSlideIndex = function() {
        return this.Ma
    };
    Vd.prototype.relatedSlideIndex = Vd.prototype.relatedSlideIndex;
    Vd.prototype.relatedTimestamp = function() {
        return this.ni
    };
    Vd.prototype.relatedTimestamp = Vd.prototype.relatedTimestamp;
    Vd.prototype.Ag = function() {
        return this.Yh
    };
    Vd.prototype.relatedSlideShow = Vd.prototype.Ag;

    function F(a, b, c) {
        this.f = b;
        this.M = a;
        this.vh = new q;
        Wd[c] = function(a) {
            var b = "",
                c = null;
            switch (a.type) {
                case "none":
                    return null;
                case "slideIsLocked":
                    b = "slideNavigationSettings";
                    c = new Sd("currentSlideIsLocked");
                    break;
                case "illegalOperation":
                    b = "presentationFlow";
                    c = new Sd("backwardNavigationIsRestricted");
                    break;
                case "navigationIsRestricted":
                    b = "presentationNavigationType", c = new Sd("forwardNavigationIsRestricted")
            }
            var d = void 0,
                k = a.relatedTimestamp;
            k && (d = new ed(k.slideIndex, k.stepIndex, k.timeOffset));
            this.Jc.i(new Vd("switchToNextSlide",
                b, c, a.relatedSlideIndex, d, void 0))
        }
    }
    var Wd = {};
    m("ispring.as3proxy.presenter.player.RestrictedPresentationPlaybackController.onNavigationRestrictedHandlers", Wd, void 0);
    F.prototype.Jc = function() {
        return this.vh
    };
    F.prototype.navigationRestrictedEvent = F.prototype.Jc;
    F.prototype.play = function() {
        if (0 > this.I()) throw Error("Invalid slide index");
        this.f.restrictedPresentationPlaybackController_play()
    };
    F.prototype.play = F.prototype.play;
    F.prototype.pause = function() {
        this.f.restrictedPresentationPlaybackController_pause()
    };
    F.prototype.pause = F.prototype.pause;
    F.prototype.gc = function(a, b) {
        b = l(b) ? b : !0;
        this.f.restrictedPresentationPlaybackController_gotoSlide(a, b)
    };
    F.prototype.gotoSlide = F.prototype.gc;
    F.prototype.bc = function(a) {
        a = l(a) ? a : !0;
        this.f.restrictedPresentationPlaybackController_gotoLastSlideViewed(a)
    };
    F.prototype.gotoLastSlideViewed = F.prototype.bc;
    F.prototype.qb = function() {
        return this.M.qb()
    };
    F.prototype.firstSlideIndex = F.prototype.qb;
    F.prototype.rb = function() {
        return this.M.rb()
    };
    F.prototype.lastSlideIndex = F.prototype.rb;
    F.prototype.$b = function(a) {
        a = l(a) ? a : !0;
        this.f.restrictedPresentationPlaybackController_gotoFirstSlide(a)
    };
    F.prototype.gotoFirstSlide = F.prototype.$b;
    F.prototype.ac = function(a) {
        a = l(a) ? a : !0;
        this.f.restrictedPresentationPlaybackController_gotoLastSlide(a)
    };
    F.prototype.gotoLastSlide = F.prototype.ac;
    F.prototype.cc = function(a) {
        a = l(a) ? a : !0;
        this.f.restrictedPresentationPlaybackController_gotoNextSlide(a)
    };
    F.prototype.gotoNextSlide = F.prototype.cc;
    F.prototype.ec = function(a) {
        a = l(a) ? a : !0;
        if (0 > this.I()) throw Error("current slide is null");
        this.f.restrictedPresentationPlaybackController_gotoPreviousSlide(a)
    };
    F.prototype.gotoPreviousSlide = F.prototype.ec;
    F.prototype.dc = function() {
        this.f.restrictedPresentationPlaybackController_gotoNextStep()
    };
    F.prototype.gotoNextStep = F.prototype.dc;
    F.prototype.fc = function() {
        this.f.restrictedPresentationPlaybackController_gotoPreviousStep()
    };
    F.prototype.gotoPreviousStep = F.prototype.fc;
    F.prototype.hc = function(a, b, c, d) {
        d = l(d) ? d : !1;
        this.f.restrictedPresentationPlaybackController_gotoTimestamp(a, b, c, d)
    };
    F.prototype.gotoTimestamp = F.prototype.hc;
    F.prototype.vb = function() {
        return this.M.vb()
    };
    F.prototype.previousSlideIndex = F.prototype.vb;
    F.prototype.sb = function() {
        return this.M.sb()
    };
    F.prototype.nextSlideIndex = F.prototype.sb;
    F.prototype.playbackState = function() {
        return this.M.playbackState()
    };
    F.prototype.playbackState = F.prototype.playbackState;
    F.prototype.I = function() {
        return this.M.I()
    };
    F.prototype.currentSlideIndex = F.prototype.I;
    F.prototype.pb = function() {
        return this.M.pb()
    };
    F.prototype.currentSlide = F.prototype.pb;
    F.prototype.Ra = function() {
        return this.M.Ra()
    };
    F.prototype.clock = F.prototype.Ra;
    F.prototype.Ab = function() {
        return this.M.Ab()
    };
    F.prototype.slideChangeEvent = F.prototype.Ab;
    F.prototype.Db = function() {
        return this.M.Db()
    };
    F.prototype.stepChangeEvent = F.prototype.Db;
    F.prototype.oc = function() {};
    F.prototype.tb = function() {
        return this.M.tb()
    };
    F.prototype.playbackCompleteEvent = F.prototype.tb;
    F.prototype.jc = function() {
        return this.M.jc()
    };
    F.prototype.quizPlayer = F.prototype.jc;
    F.prototype.kc = function() {
        return this.M.kc()
    };
    F.prototype.scenarioPlayer = F.prototype.kc;
    F.prototype.Bb = function() {
        return this.M.Bb()
    };
    F.prototype.slideTransitionController = F.prototype.Bb;

    function G(a, b) {
        this.f = a;
        this.kg = new q;
        this.Gf = new q;
        this.nf = new q;
        var c = this;
        Xd[b] = function() {
            c.kg.i()
        };
        Yd[b] = function() {
            c.Gf.i()
        };
        Zd[b] = function() {
            c.nf.i()
        }
    }
    var Xd = {};
    m("ispring.as3proxy.presenter.player.sound.SoundController.onVolumeChanged", Xd, void 0);
    var Yd = {};
    m("ispring.as3proxy.presenter.player.sound.SoundController.onRealVolumeChanged", Yd, void 0);
    var Zd = {};
    m("ispring.as3proxy.presenter.player.sound.SoundController.onMuteStateToggled", Zd, void 0);
    G.prototype.volume = function() {
        return this.f.soundController_getVolume()
    };
    G.prototype.volume = G.prototype.volume;
    G.prototype.setVolume = function(a) {
        if (0 > a || 1 < a) throw Error("Sound volume is out of range");
        this.f.soundController_setVolume(a)
    };
    G.prototype.setVolume = G.prototype.setVolume;
    G.prototype.Ud = function(a) {
        this.f.soundController_setMuteState(a)
    };
    G.prototype.mute = G.prototype.Ud;
    G.prototype.muted = function() {
        return this.f.soundController_getMuteState()
    };
    G.prototype.muted = G.prototype.muted;
    G.prototype.ae = function() {
        return this.f.soundController_getRealVolume()
    };
    G.prototype.realVolume = G.prototype.ae;
    G.prototype.De = function() {
        return this.kg
    };
    G.prototype.volumeChangedEvent = G.prototype.De;
    G.prototype.be = function() {
        return this.Gf
    };
    G.prototype.realVolumeChangedEvent = G.prototype.be;
    G.prototype.Vd = function() {
        return this.nf
    };
    G.prototype.muteStateToggledEvent = G.prototype.Vd;

    function $d(a, b) {
        this.f = a;
        this.Ua = b
    }
    var ae = {};

    function be(a, b, c) {
        var d = new $d(a, b);
        a.quizplayer_available && a.quizplayer_available(b, "connection") ? c(d) : ae[b] = function() {
            c(d)
        }
    }
    m("ispring.quiz.flashapi.onConnectionReady", function(a) {
        if (a in ae) ae[a]()
    }, void 0);
    g = $d.prototype;
    g.Da = "quizplayer_";
    g.o = function(a, b, c, d) {
        c = this.bd(c, d);
        this.f[this.Da + "setListener"](this.Ua, a.name(), b, c)
    };
    g.removeListener = function(a, b) {
        this.f[this.Da + "removeListener"](this.Ua, a.name(), b)
    };
    g.c = function(a, b, c) {
        c = ab(arguments);
        c[1] = c[0].name();
        c[0] = this.Ua;
        b = this.Da + b;
        if (b in this.f) return this.f[b].apply(this.f, c)
    };
    g.bd = function(a, b) {
        b && (a = Ca(a, b));
        window.gen_handlers || (window.gen_handlers = {});
        var c = "_" + Oa();
        window.gen_handlers[c] = a;
        return "gen_handlers." + c
    };

    function ce(a, b, c) {
        this.f = a;
        this.Ua = b;
        this.Da = de = c
    }
    var ee = {};

    function fe(a, b, c, d) {
        var e = d();
        ge(a, b) ? c(e) : ee[b] = function() {
            c(e)
        }
    }

    function ge(a, b) {
        var c = de + "available";
        return a[c] ? a[c](b, "connection") : !1
    }
    var de = "";
    g = ce.prototype;
    g.Da = de;
    g.o = function(a, b, c, d) {
        c = this.bd(c, d);
        this.f[this.Da + "setListener"](this.Ua, a.name(), b, c)
    };
    g.removeListener = function(a, b) {
        this.f[this.Da + "removeListener"](this.Ua, a.name(), b)
    };
    g.c = function(a, b, c) {
        c = ab(arguments);
        c[1] = c[0].name();
        c[0] = this.Ua;
        b = this.Da + b;
        if (b in this.f) return this.f[b].apply(this.f, c)
    };
    g.bd = function(a, b) {
        b && (a = Ca(a, b));
        window.gen_handlers || (window.gen_handlers = {});
        var c = "_" + Oa();
        window.gen_handlers[c] = a;
        return "gen_handlers." + c
    };

    function I(a, b) {
        this.f = a;
        this.dg = new q;
        this.Tf = new q;
        this.$f = new q;
        this.Wf = new q;
        this.Ne = new q;
        this.Ug = new q;
        var c = this;
        he[b] = function() {
            c.dg.i(c)
        };
        ie[b] = function() {
            c.Tf.i(c)
        };
        je[b] = function() {
            c.$f.i(c)
        };
        ke[b] = function() {
            c.Wf.i(c)
        };
        le[b] = function() {
            c.Ne.i(c)
        }
    }
    I.prototype.timestamp = function() {
        var a = this.f.presentationClock_getTimestamp();
        return new ed(a.slideIndex, a.stepIndex, a.timeOffset)
    };
    I.prototype.timestamp = I.prototype.timestamp;
    I.prototype.pe = function() {
        return this.f.presentationClock_getStarted()
    };
    I.prototype.started = I.prototype.pe;
    I.prototype.he = function() {
        return this.f.presentationClock_getRunning()
    };
    I.prototype.running = I.prototype.he;
    I.prototype.state = function() {
        return this.f.presentationClock_getState()
    };
    I.prototype.state = I.prototype.state;
    I.prototype.suspended = function() {
        return this.f.presentationClock_getSuspended()
    };
    I.prototype.suspended = I.prototype.suspended;
    I.prototype.Dd = function() {
        return this.f.presentationClock_getBuffering()
    };
    I.prototype.buffering = I.prototype.Dd;
    I.prototype.Ra = function() {
        return this
    };
    I.prototype.clock = I.prototype.Ra;
    var he = {};
    m("ispring.as3proxy.presenter.player.clock.PresentationClock.onTickHandlers", he, void 0);
    I.prototype.ve = function() {
        return this.dg
    };
    I.prototype.tickEvent = I.prototype.ve;
    var ie = {};
    m("ispring.as3proxy.presenter.player.clock.PresentationClock.onStartHandlers", ie, void 0);
    I.prototype.oe = function() {
        return this.Tf
    };
    I.prototype.startEvent = I.prototype.oe;
    var je = {};
    m("ispring.as3proxy.presenter.player.clock.PresentationClock.onStopHandlers", je, void 0);
    I.prototype.se = function() {
        return this.$f
    };
    I.prototype.stopEvent = I.prototype.se;
    var ke = {};
    m("ispring.as3proxy.presenter.player.clock.PresentationClock.onStateChangeHandlers", ke, void 0);
    I.prototype.re = function() {
        return this.Wf
    };
    I.prototype.stateChangeEvent = I.prototype.re;
    var le = {};
    m("ispring.as3proxy.presenter.player.clock.PresentationClock.onBufferStateChangeHandlers", le, void 0);
    I.prototype.Cd = function() {
        return this.Ne
    };
    I.prototype.bufferStateChangeEvent = I.prototype.Cd;
    I.prototype.mg = function() {
        return this.Ug
    };
    I.prototype.bufferedObjectChangeEvent = I.prototype.mg;

    function me() {
        this.Ia = !1;
        this.Ya = 0;
        this.Fe = !1;
        this.We = "user"
    }
    me.prototype.enabled = function() {
        return this.Ia
    };
    me.prototype.enabled = me.prototype.enabled;
    me.prototype.Oc = function(a) {
        this.Ia = a
    };
    me.prototype.passingScore = function() {
        return this.Ya
    };
    me.prototype.passingScore = me.prototype.passingScore;
    me.prototype.lc = function(a) {
        this.Ya = a
    };
    me.prototype.allowRetake = function() {
        return this.Fe
    };
    me.prototype.allowRetake = me.prototype.allowRetake;
    me.prototype.Si = function() {
        return this.We
    };
    me.prototype.displayScore = me.prototype.Si;

    function ne() {
        this.ah = new me
    }
    ne.prototype.evaluationSettings = function() {
        return this.ah
    };
    ne.prototype.evaluationSettings = ne.prototype.evaluationSettings;
    ne.prototype.Ad = function() {
        return this.Sc
    };
    ne.prototype.authorizationFormSettings = ne.prototype.Ad;

    function oe(a, b, c) {
        this.a = a;
        this.l = b;
        this.aa = c
    }
    m("ispring.as3proxy.scenario.scenes.scene.reply.ReplyProxy", oe, void 0);
    oe.prototype.text = function() {
        return this.Aa || (this.Aa = this.a.c(this.l, "getReplyText"))
    };
    oe.prototype.text = oe.prototype.text;
    oe.prototype.ia = function() {
        return this.pa || (this.pa = this.a.c(this.l, "getReplyScore"))
    };
    oe.prototype.score = oe.prototype.ia;
    oe.prototype.rk = function() {
        var a = this.ji || (this.ji = this.a.c(this.l, "getReplyTargetSceneId"));
        return null != a ? this.aa.Zb(a) : null
    };
    oe.prototype.targetScene = oe.prototype.rk;

    function pe(a, b, c) {
        this.a = a;
        this.l = b;
        this.aa = c;
        b = this.count();
        this.La = [];
        for (var d = 0; d < b; d++) {
            var e = this.l.extend("reply_" + d);
            this.La.push(new oe(a, e, c))
        }
    }
    m("ispring.as3proxy.scenario.scenes.scene.reply.RepliesProxy", pe, void 0);
    pe.prototype.count = function() {
        return this.Mh || (this.Mh = this.a.c(this.l, "getRepliesCount"))
    };
    pe.prototype.count = pe.prototype.count;
    pe.prototype.rg = function(a) {
        return this.La[a]
    };
    pe.prototype.getReply = pe.prototype.rg;

    function qe(a, b, c) {
        this.a = a;
        this.l = b;
        this.La = new pe(a, b, c)
    }
    m("ispring.as3proxy.scenario.scenes.scene.MessageProxy", qe, void 0);
    qe.prototype.text = function() {
        return this.Aa || (this.Aa = this.a.c(this.l, "getMessageText"))
    };
    qe.prototype.text = qe.prototype.text;
    qe.prototype.de = function() {
        return this.La
    };
    qe.prototype.replies = qe.prototype.de;

    function re(a) {
        this.ad = a
    }
    m("ispring.as3proxy.scenario.scenes.scene.DummyCharacterInfo", re, void 0);
    re.prototype.Ti = function() {
        return this.ad
    };
    re.prototype.emotion = re.prototype.Ti;

    function se(a, b, c) {
        this.a = a;
        this.l = b;
        if (this.wg()) {
            var d = this.l.extend("message_");
            this.th = new qe(a, d, c)
        }
        this.La = new pe(a, b, c)
    }
    m("ispring.as3proxy.scenario.scenes.scene.SceneProxy", se, void 0);
    se.prototype.wg = function() {
        return this.a.c(this.l, "getHasMessage")
    };
    se.prototype.hasMessage = se.prototype.wg;
    se.prototype.id = function() {
        return this.D || (this.D = this.a.c(this.l, "getSceneId"))
    };
    se.prototype.id = se.prototype.id;
    se.prototype.hk = function() {
        return this.bi || (this.bi = this.a.c(this.l, "getSceneSpeech"))
    };
    se.prototype.speech = se.prototype.hk;
    se.prototype.Hi = function() {
        var a = this.ad || (this.ad = this.a.c(this.l, "getEmotion"));
        return new re(a)
    };
    se.prototype.characterInfo = se.prototype.Hi;
    se.prototype.de = function() {
        return this.La
    };
    se.prototype.replies = se.prototype.de;
    se.prototype.background = function() {
        throw Error("do nothing");
    };
    se.prototype.message = function() {
        return this.th
    };
    se.prototype.message = se.prototype.message;

    function te(a, b, c) {
        this.a = a;
        this.l = b;
        this.mb = c;
        this.aa = {};
        a = this.Uh || (this.Uh = this.a.c(this.l, "getScenesIdsMap"));
        for (var d in a) this.Zb(d)
    }
    m("ispring.as3proxy.scenario.scenes.ScenesProxy", te, void 0);
    te.prototype.Wj = function() {
        return this.Th || (this.Th = this.a.c(this.l, "getScenesCount"))
    };
    te.prototype.scenesCount = te.prototype.Wj;
    te.prototype.ik = function() {
        var a = this.di || (this.di = this.a.c(this.l, "getStartingSceneId"));
        return this.aa[a]
    };
    te.prototype.startingScene = te.prototype.ik;
    te.prototype.Zb = function(a) {
        if (this.aa[a]) return this.aa[a];
        var b = this.l.extend("scene_" + a),
            b = new se(this.a, b, this);
        return this.aa[a] = b
    };
    te.prototype.getSceneById = te.prototype.Zb;

    function J(a, b) {
        this.a = a;
        this.l = b;
        this.aa = new te(a, this.l, this);
        this.Wa()
    }
    m("ispring.as3proxy.scenario.ScenarioProxy", J, void 0);
    J.prototype.Wa = function() {
        var a = this.a.c(this.l, "getSettings");
        this.ca = new ne;
        var b = this.ca.evaluationSettings();
        b.Oc(a.enabled);
        b.lc(a.passingScore);
        b.Fe = a.allowRetake;
        b.We = a.displayScore
    };
    J.prototype.id = function() {
        return this.a.c(this.l, "getScenarioId")
    };
    J.prototype.id = J.prototype.id;
    J.prototype.title = function() {
        return this.a.c(this.l, "getScenarioTitle")
    };
    J.prototype.title = J.prototype.title;
    J.prototype.Ij = function() {
        var a = this.a.c(this.l, "getScenarioPlayerSize");
        return new Bb(a.width, a.height)
    };
    J.prototype.playerSize = J.prototype.Ij;
    J.prototype.Ei = function() {
        throw Error("not implemented");
    };
    J.prototype.backgrounds = J.prototype.Ei;
    J.prototype.Ii = function() {
        throw Error("not implemented");
    };
    J.prototype.characters = J.prototype.Ii;
    J.prototype.scenes = function() {
        return this.aa
    };
    J.prototype.scenes = J.prototype.scenes;
    J.prototype.settings = function() {
        return this.ca
    };
    J.prototype.settings = J.prototype.settings;
    var ue = {
        Lg: "initializing",
        Jg: "authorizating",
        Mg: "inProgress",
        Kg: "completed"
    };
    m("ispring.scenario.session.ScenarioState", ue, void 0);
    m("INITIALIZING", "initializing", ue);
    m("IN_PROGRESS", "inProgress", ue);
    m("COMPLETED", "completed", ue);
    m("AUTHORIZATING", "authorizating", ue);
    var ve = null;

    function we() {
        this.Le = {};
        this.Pe = {}
    };
    var xe = !0;

    function ye(a, b, c) {
        this.a = a;
        this.l = b;
        this.pd = c;
        this.Qe = this.Ke = null
    }
    m("ispring.as3proxy.scenario.session.SessionHistoryItemProxy", ye, void 0);
    ye.prototype.scene = function() {
        return this.pd
    };
    ye.prototype.scene = ye.prototype.scene;
    ye.prototype.background = function() {
        throw Error("not implemented");
    };
    ye.prototype.Ub = function() {
        return this.Ke || (this.Ke = this.a.c(this.l, "getBackgroundId"))
    };
    ye.prototype.backgroundId = ye.prototype.Ub;
    ye.prototype.Vb = function() {
        return this.Qe || (this.Qe = this.a.c(this.l, "getCharacterId"))
    };
    ye.prototype.characterId = ye.prototype.Vb;
    ye.prototype.Mc = function() {
        return this.a.c(this.l, "getSelectedReplyIndex")
    };
    ye.prototype.selectedReplyIndex = ye.prototype.Mc;
    ye.prototype.eb = function(a) {
        var b;
        ve || (ve = {
            nm: "a",
            duration: "d",
            Dg: "s",
            history: {
                self: "h",
                id: "i",
                Ub: "b",
                Vb: "c",
                Mc: "r"
            },
            om: {
                self: "A",
                qm: "s",
                ng: "f"
            }
        });
        b = ve;
        b = b.history;
        var c = xe,
            d = {};
        d[c ? b.id : "sceneId"] = this.scene().id();
        var e = c ? b.Ub : "backgroundId",
            f;
        null != this.Ub() ? (f = this.Ub(), f = null != a.Le[f] ? a.Le[f] : f) : f = null;
        d[e] = f;
        e = c ? b.Vb : "characterId";
        null != this.Vb() ? (f = this.Vb(), a = null != a.Pe[f] ? a.Pe[f] : f) : a = null;
        d[e] = a;
        d[c ? b.Mc : "selectedReplyIndex"] = this.Mc();
        return d
    };

    function ze(a, b, c) {
        this.a = a;
        this.l = b;
        this.aa = c;
        this.R = {};
        a.o(b, "historyChanged", this.df, this);
        this.df()
    }
    m("ispring.as3proxy.scenario.session.SessionHistoryProxy", ze, void 0);
    ze.prototype.df = function() {
        var a = this.a.c(this.l, "getItemsIdsMap"),
            b;
        for (b in a) {
            b = parseInt(b, 10);
            var c = this.aa.Zb(a[b]);
            if (null != c) {
                var d = b;
                if (!this.R[d]) {
                    var e = this.l.extend("historyItem_" + d);
                    this.R[d] = new ye(this.a, e, c)
                }
            }
        }
    };
    ze.prototype.count = function() {
        var a = this.R,
            b = 0,
            c;
        for (c in a) b++;
        return b
    };
    ze.prototype.count = ze.prototype.count;
    ze.prototype.getItem = function(a) {
        if (this.R[a]) return this.R[a];
        throw Error("index is out of bounds");
    };
    ze.prototype.getItem = ze.prototype.getItem;
    ze.prototype.eb = function(a) {
        for (var b = [], c = 0; c < this.count(); c++) {
            var d = this.getItem(c).eb(a);
            b.push(d)
        }
        return b
    };
    ze.prototype.serialize = ze.prototype.eb;

    function Ae(a, b, c) {
        this.a = a;
        this.l = b;
        this.pd = c
    }
    m("ispring.as3proxy.scenario.session.SceneStateProxy", Ae, void 0);
    Ae.prototype.background = function() {
        throw Error("do nothing");
    };
    Ae.prototype.scene = function() {
        return this.pd
    };
    Ae.prototype.scene = Ae.prototype.scene;

    function K(a, b, c) {
        this.a = a;
        this.l = b;
        this.mb = c;
        this.Se = new q;
        this.tf = new q;
        this.Qf = new q;
        this.Vg = new q;
        this.fh = new ze(this.a, this.l, this.mb.scenes());
        a.o(b, "currentSceneChanged", this.xh, this);
        a.o(b, "onReplySelected", this.Ch, this);
        a.o(b, "showTerminalScene", this.Eh, this);
        a.o(b, "scenarioStateChanged", this.Dh, this)
    }
    m("ispring.as3proxy.scenario.session.ScenarioSessionProxy", K, void 0);
    K.prototype.scenario = function() {
        return this.mb
    };
    K.prototype.scenario = K.prototype.scenario;
    K.prototype.Dg = function() {
        return this.a.c(this.l, "getScenarioState")
    };
    K.prototype.scenarioState = K.prototype.Dg;
    g = K.prototype;
    g.xh = function() {
        this.Se.i()
    };
    g.Ch = function(a, b) {
        var c = void 0;
        null != a && (c = this.currentSceneState().scene(), c = (b ? c.message().La : c.La).rg(a));
        this.tf.i(c)
    };
    g.Eh = function() {
        this.Qf.i()
    };
    g.Dh = function() {
        this.Vg.i()
    };
    g.Oi = function() {
        return this.Se
    };
    K.prototype.currentSceneChangedEvent = K.prototype.Oi;
    K.prototype.start = function() {
        throw Error("do nothing");
    };
    K.prototype.finish = function() {
        throw Error("do nothing");
    };
    K.prototype.stateChangedEvent = function() {
        throw Error("do nothing");
    };
    K.prototype.currentSceneState = function() {
        var a = this.a.c(this.l, "getCurrentSceneId"),
            a = this.mb.scenes().Zb(a);
        return new Ae(this.a, this.l, a)
    };
    K.prototype.currentSceneState = K.prototype.currentSceneState;
    K.prototype.completed = function() {
        return this.a.c(this.l, "getSessionCompleted")
    };
    K.prototype.completed = K.prototype.completed;
    K.prototype.Cj = function() {
        return this.tf
    };
    K.prototype.onReplySelectedEvent = K.prototype.Cj;
    K.prototype.ak = function() {
        return this.Qf
    };
    K.prototype.showTerminalSceneEvent = K.prototype.ak;
    K.prototype.history = function() {
        return this.fh
    };
    K.prototype.history = K.prototype.history;
    K.prototype.duration = function() {
        return this.a.c(this.l, "getDuration")
    };
    K.prototype.duration = K.prototype.duration;
    K.prototype.summary = function() {
        var a = {};
        a.score = Math.max(0, this.Ig());
        a.duration = this.duration();
        var b = this.history();
        xe = !1;
        b = b.eb(new we);
        xe = !0;
        a.history = b;
        return a
    };
    K.prototype.summary = K.prototype.summary;
    K.prototype.lc = function(a) {
        this.a.c(this.l, "setPassingScore", a)
    };
    K.prototype.setPassingScore = K.prototype.lc;
    K.prototype.ta = function() {
        return this.sh || (this.sh = this.a.c(this.l, "getMaxScore"))
    };
    K.prototype.maxScore = K.prototype.ta;
    K.prototype.Ig = function() {
        return this.a.c(this.l, "getUserScore")
    };
    K.prototype.userScore = K.prototype.Ig;
    K.prototype.scenarioPassed = function() {
        return this.a.c(this.l, "getScenarioPassed")
    };
    K.prototype.scenarioPassed = K.prototype.scenarioPassed;

    function Be(a) {
        this.Z = a
    }
    Be.prototype.name = function() {
        return this.Z
    };
    Be.prototype.extend = function(a) {
        return new Be(this.Z + "." + a)
    };

    function L(a, b) {
        this.a = a;
        this.b = Ce;
        this.jh = b;
        this.Fb = new q;
        this.Ha = new q;
        this.ef = new q;
        this.Oa = new q;
        this.Pa = new q;
        var c = this.a.c(this.b, "getScenarioName"),
            c = this.b.extend(c);
        this.mb = new J(this.a, c);
        this.Rb();
        this.a.o(this.b, "currentSessionChangedEvent", this.gd, this);
        this.a.o(this.b, "closeWindowEvent", this.Hb, this);
        this.a.o(this.b, "initializationCompleteEvent", this.zh, this);
        this.a.o(this.b, "startupCompletedEvent", this.kb, this);
        this.a.o(this.b, "initialSessionStateRequestEvent", this.hd, this);
        this.a.o(this.b,
            "stateChangedEvent", this.Jb, this);
        this.a.o(this.b, "getLaunchMode", this.Ib, this)
    }
    m("ispring.as3proxy.scenario.ScenarioPlayerProxy", L, void 0);
    var Ce = new Be("scenarioplayer");
    L.prototype.Xb = function() {
        return this.Ha
    };
    L.prototype.closeWindowEvent = L.prototype.Xb;
    L.prototype.lj = function() {
        return this.ef
    };
    L.prototype.initializationCompleteEvent = L.prototype.lj;
    L.prototype.startupCompletedEvent = function() {
        return this.Oa
    };
    L.prototype.startupCompletedEvent = L.prototype.startupCompletedEvent;
    L.prototype.hd = function() {
        return this.jh
    };
    L.prototype.Rb = function() {
        var a = this.a.c(this.b, "getCurrentSessionName");
        null === a ? this.Y = null : (a = this.b.extend(a), this.Y = new K(this.a, a, this.mb))
    };
    L.prototype.currentSession = function() {
        return this.Y
    };
    L.prototype.currentSession = L.prototype.currentSession;
    L.prototype.gd = function() {
        var a = this.Y;
        this.Rb();
        this.Fb.i(this.Y, a)
    };
    L.prototype.currentSessionChangedEvent = function() {
        return this.Fb
    };
    L.prototype.currentSessionChangedEvent = L.prototype.currentSessionChangedEvent;
    L.prototype.mj = function() {
        return this.a.c(this.b, "getInitialized")
    };
    L.prototype.initialized = L.prototype.mj;
    L.prototype.qe = function() {
        return this.a.c(this.b, "getStartupCompleted")
    };
    L.prototype.startupCompleted = L.prototype.qe;
    L.prototype.persistState = function() {
        return this.a.c(this.b, "persistState")
    };
    L.prototype.persistState = L.prototype.persistState;
    g = L.prototype;
    g.Hb = function() {
        this.Ha.i();
        return !0
    };
    g.zh = function() {
        this.ef.i()
    };
    g.kb = function() {
        this.Oa.i()
    };
    g.Jb = function() {
        this.Pa.i(new Pd)
    };
    g.Ib = function() {
        return window.launchMode
    };
    g.stateChangedEvent = function() {
        return this.Pa
    };
    L.prototype.stateChangedEvent = L.prototype.stateChangedEvent;
    L.prototype.isResumed = function() {
        return this.a.c(this.b, "getIsResumed")
    };
    L.prototype.isResumed = L.prototype.isResumed;
    L.prototype.ke = function(a, b) {
        this.a.c(this.b, "setUserInfo", a, b)
    };
    L.prototype.setUserInfo = L.prototype.ke;
    L.prototype.uk = function() {
        return this.a.c(this.b, "getUserInfoIsLoaded")
    };
    L.prototype.userInfoIsLoaded = L.prototype.uk;

    function De(a, b) {
        this.f = a;
        this.hg = new q;
        this.gg = new q;
        var c = this;
        Ee[b] = function(a) {
            c.hg.i(a)
        };
        Fe[b] = function(a) {
            c.gg.i(a)
        }
    }
    De.prototype.ye = function() {
        return this.f.slideTransitionController_getTransitionProgress()
    };
    De.prototype.transitionProgress = De.prototype.ye;
    De.prototype.state = function() {
        return this.f.slideTransitionController_getState()
    };
    De.prototype.state = De.prototype.state;
    var Ee = {};
    m("ispring.as3proxy.presenter.player.transitions.SlideTransitionController.onTransitionEffectStartHandlers", Ee, void 0);
    De.prototype.oc = function() {
        return this.hg
    };
    De.prototype.transitionEffectStartEvent = De.prototype.oc;
    var Fe = {};
    m("ispring.as3proxy.presenter.player.transitions.SlideTransitionController.onTransitionEffectCompleteHandlers", Fe, void 0);
    De.prototype.xe = function() {
        return this.gg
    };
    De.prototype.transitionEffectCompleteEvent = De.prototype.xe;

    function Ge(a, b) {
        ce.call(this, a, b, "scenarioplayer_")
    }
    n(Ge, ce);
    m("ispring.scenario.flashapi.onConnectionReady", function(a) {
        if (a in ee) ee[a]()
    }, void 0);

    function He(a, b) {
        this.Pf = [];
        this.a = a;
        this.b = b
    }
    He.prototype.$i = function(a) {
        a = Ya(this.Pf, a);
        if (-1 == a) throw Error("unknown session");
        return this.a.c(this.b, "generateSessionXml", a)
    };
    He.prototype.generateSessionXml = He.prototype.$i;

    function Ie(a, b, c) {
        ta(b) || (b = [b]);
        var d, e, f = !1;
        Za(b, function(b) {
            var h = a.indexOf(b, c);
            0 <= h && (!l(d) || h < d) && (d = h, e = b, f = !0)
        });
        return f ? new Je(e, d) : null
    }

    function Je(a, b) {
        this.mk = a;
        this.Kc = b
    };
    Xa("A AREA BUTTON HEAD INPUT LINK MENU META OPTGROUP OPTION PROGRESS STYLE SELECT SOURCE TEXTAREA TITLE TRACK".split(" "));

    function M(a) {
        this.hh = a;
        if (l(a)) a: {
            var b = "\r";
            if (0 == a.length) a = "";
            else {
                null != b || (b = "");
                var c = 0,
                    d = "",
                    e = a.length;
                do {
                    var f = Ie(a, ["<p>", "<p "], c);
                    if (f && f.Kc > c) {
                        var c = a.substr(c, f.Kc - c),
                            h = Pb("DIV");
                        h.innerHTML = c;
                        d += (h.textContent || h.innerText || Ub(h)) + b;
                        c = f.Kc
                    }
                    if (h = Ie(a, ["</p>", "</p >"], c)) {
                        var f = h.Kc + h.mk.length - c,
                            k = a.substr(c, f),
                            h = Pb("DIV");
                        h.innerHTML = k;
                        d += (h.textContent || h.innerText || Ub(h)) + b;
                        c += f
                    } else {
                        h = Pb("DIV");
                        h.innerHTML = a.substr(c, e - c);
                        a = d + (h.textContent || h.innerText || Ub(h));
                        break a
                    }
                } while (c <
                    e);
                a = d
            }
        }
        else a = "";
        this.Aa = a
    }
    M.prototype.text = function() {
        return this.Aa
    };
    M.prototype.text = M.prototype.text;
    M.prototype.htmlText = function() {
        return this.hh
    };

    function N(a, b) {
        if (!l(a) && !l(b)) throw Error("both textRange and pictureAttachment can't be undefined");
        this.T = a;
        this.Hh = b
    }
    N.prototype.id = function() {
        return this.D
    };
    N.prototype.id = N.prototype.id;
    N.prototype.ie = function(a) {
        this.D = a
    };
    N.prototype.setId = N.prototype.ie;
    N.prototype.W = function() {
        return this.T
    };
    N.prototype.textRange = N.prototype.W;
    N.prototype.Fj = function() {
        return this.Hh
    };
    N.prototype.pictureAttachment = N.prototype.Fj;

    function Ke(a, b, c) {
        N.call(this, a, b);
        this.Zg = c || !1
    }
    n(Ke, N);
    Ke.prototype.Qi = function() {
        return this.Zg
    };
    Ke.prototype.customAnswerEnabled = Ke.prototype.Qi;

    function Le() {
        this.hf = []
    }
    Le.prototype.wj = function() {
        return this.hf
    };
    Le.prototype.lockedChoices = Le.prototype.wj;

    function Me(a) {
        this.ld = a;
        this.pa = 0;
        this.Ka = void 0
    }
    Me.prototype.ia = function() {
        return l(this.pa) ? this.pa : this.Ka * this.ld.ta()
    };
    Me.prototype.score = Me.prototype.ia;
    Me.prototype.Ca = function(a) {
        if (isNaN(a)) throw Error("argument error: value is NaN");
        this.pa = a;
        this.Ka = void 0
    };
    Me.prototype.Ba = function() {
        return 0 == this.ld.ta() ? 0 : l(this.Ka) ? this.Ka : this.pa / this.ld.ta()
    };
    Me.prototype.percent = Me.prototype.Ba;
    Me.prototype.xb = function(a) {
        if (isNaN(a)) throw Error("argument error: value is NaN");
        if (1 < a || 0 > a) throw Error("Percent is out of range");
        this.Ka = a;
        this.pa = void 0
    };

    function Ne(a, b, c) {
        N.call(this, b, c);
        this.Yc = !1;
        this.C = new Me(a)
    }
    n(Ne, N);
    Ne.prototype.ia = function() {
        return this.C.ia()
    };
    Ne.prototype.score = Ne.prototype.ia;
    Ne.prototype.Ca = function(a) {
        this.C.Ca(a)
    };
    Ne.prototype.Ba = function() {
        return this.C.Ba()
    };
    Ne.prototype.percent = Ne.prototype.Ba;
    Ne.prototype.xb = function(a) {
        this.C.xb(a)
    };
    Ne.prototype.Li = function() {
        return this.Yc
    };
    Ne.prototype.correct = Ne.prototype.Li;

    function Oe(a, b, c, d, e, f) {
        for (var h = b.c(c, "getChoicesCount"), k = 0; k < h; ++k) {
            var t = b.c(c, "getChoiceProperties", k),
                H;
            H = new M(t.text);
            f ? (H = new Ne(a, H), H.Yc = t.correct, H.Ca(t.score)) : H = new Ke(H, void 0, t.customAnswerEnabled);
            d instanceof Pe ? d.H(H) : d instanceof Qe && d.H(H);
            t.isLocked && e.hf.push(k)
        }
    };

    function Pe(a) {
        this.j = a || []
    }
    Pe.prototype.count = function() {
        return this.j.length
    };
    Pe.prototype.count = Pe.prototype.count;
    Pe.prototype.A = function(a) {
        if (0 > a || a >= this.count()) throw Error("Index out of bounds");
        return this.j[a]
    };
    Pe.prototype.getChoice = Pe.prototype.A;
    Pe.prototype.H = function(a) {
        a.ie(this.count());
        this.j.push(a)
    };
    Pe.prototype.Id = function(a) {
        return Ya(this.j, a)
    };
    Pe.prototype.getChoiceIndex = Pe.prototype.Id;

    function Re(a) {
        this.j = [];
        l(a) || (a = Number.MAX_VALUE);
        this.rh = a
    }
    n(Re, Pe);
    Re.prototype.pg = function(a) {
        return this.A(a)
    };
    Re.prototype.getGradedChoice = Re.prototype.pg;
    Re.prototype.H = function(a) {
        if (!(a instanceof Ne)) throw Error("only GradedChoice is supported");
        if (this.count() == this.rh) throw Error("cannot add more choices than specified maximum");
        Re.Ta.H.call(this, a)
    };

    function O(a, b) {
        this.a = a;
        this.l = b
    }
    O.prototype.b = function() {
        return this.l
    };
    O.prototype.id = function() {
        return this.D || (this.D = this.a.c(this.b(), "getSlideId"))
    };
    O.prototype.id = O.prototype.id;
    O.prototype.type = function() {
        return this.u || (this.u = this.a.c(this.b(), "getSlideType"))
    };
    O.prototype.type = O.prototype.type;

    function Se(a, b) {
        O.call(this, a, b)
    }
    n(Se, O);
    Se.prototype.description = function() {
        var a = this.a.c(this.b(), "getDescription");
        return new M(a)
    };
    Se.prototype.description = Se.prototype.description;
    Se.prototype.ck = function() {
        return this.a.c(this.b(), "skippable")
    };
    Se.prototype.skippable = Se.prototype.ck;

    function Te(a, b) {
        O.call(this, a, b)
    }
    n(Te, Se);

    function Ue(a, b) {
        O.call(this, a, b)
    }
    n(Ue, Te);
    Ue.prototype.yj = function() {
        return this.a.c(this.b(), "getMaxAttempts")
    };
    Ue.prototype.maxAttempts = Ue.prototype.yj;
    Ue.prototype.ta = function() {
        return this.a.c(this.b(), "getMaxScore")
    };
    Ue.prototype.maxScore = Ue.prototype.ta;
    Ue.prototype.we = function() {
        if (this.a.c(this.b(), "limitTime")) return this.a.c(this.b(), "getTime")
    };
    Ue.prototype.timeLimit = Ue.prototype.we;

    function Ve(a, b) {
        O.call(this, a, b);
        this.j = new Re;
        this.Fa = new Le;
        new Oe(this, a, this.b(), this.j, this.Fa, !0)
    }
    n(Ve, Ue);
    Ve.prototype.v = function() {
        return this.j
    };
    Ve.prototype.choices = Ve.prototype.v;
    Ve.prototype.Wb = function() {
        return this.Fa
    };
    Ve.prototype.choicesBinding = Ve.prototype.Wb;
    Ve.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    Ve.prototype.shuffleAnswers = Ve.prototype.V;
    var P = {
        Zl: "slidePool",
        Fk: "authorizationForm",
        $k: "informationSlide",
        cl: "introSlide",
        Ol: "resultSlide",
        Zk: "hotspotQuestion",
        fl: "likertScaleQuestion",
        jm: "wordBankQuestion",
        Sk: "essayQuestion",
        hm: "typeInQuestion",
        Xl: "shortAnswerQuestion",
        Tk: "fillInTheBlankQuestion",
        Uk: "fillInTheBlankSurveyQuestion",
        nl: "numericQuestion",
        ol: "numericSurveyQuestion",
        Wl: "sequenceQuestion",
        Ml: "rankingQuestion",
        im: "whichWordQuestion",
        jl: "multipleChoiceTextQuestion",
        kl: "multipleChoiceTextSurveyQuestion",
        il: "multipleChoiceQuestion",
        ll: "multipleResponseQuestion",
        rl: "pickOneQuestion",
        ql: "pickManyQuestion",
        gm: "trueFalseQuestion",
        km: "yesNoQuestion",
        gl: "matchingQuestion",
        hl: "matchingSurveyQuestion"
    };
    m("ispring.quiz.slides.SlideType", P, void 0);
    m("SLIDE_POOL", "slidePool", P);
    m("INFORMATION_SLIDE", "informationSlide", P);
    m("INTRO_SLIDE", "introSlide", P);
    m("HOTSPOT_QUESTION", "hotspotQuestion", P);
    m("LIKERT_SCALE_QUESTION", "likertScaleQuestion", P);
    m("WORD_BANK_QUESTION", "wordBankQuestion", P);
    m("RESULT_SLIDE", "resultSlide", P);
    m("ESSAY_QUESTION", "essayQuestion", P);
    m("TYPE_IN_QUESTION", "typeInQuestion", P);
    m("SHORT_ANSWER_QUESTION", "shortAnswerQuestion", P);
    m("FILL_IN_THE_BLANK_QUESTION", "fillInTheBlankQuestion", P);
    m("FILL_IN_THE_BLANK_SURVEY_QUESTION", "fillInTheBlankSurveyQuestion", P);
    m("NUMERIC_QUESTION", "numericQuestion", P);
    m("NUMERIC_SURVEY_QUESTION", "numericSurveyQuestion", P);
    m("SEQUENCE_QUESTION", "sequenceQuestion", P);
    m("RANKING_QUESTION", "rankingQuestion", P);
    m("WHICH_WORD_QUESTION", "whichWordQuestion", P);
    m("MULTIPLE_CHOICE_TEXT_QUESTION", "multipleChoiceTextQuestion", P);
    m("MULTIPLE_CHOICE_TEXT_SURVEY_QUESTION", "multipleChoiceTextSurveyQuestion", P);
    m("MULTIPLE_CHOICE_QUESTION", "multipleChoiceQuestion", P);
    m("MULTIPLE_RESPONSE_QUESTION", "multipleResponseQuestion", P);
    m("PICK_ONE_QUESTION", "pickOneQuestion", P);
    m("PICK_MANY_QUESTION", "pickManyQuestion", P);
    m("TRUE_FALSE_QUESTION", "trueFalseQuestion", P);
    m("YES_NO_QUESTION", "yesNoQuestion", P);
    m("MATCHING_QUESTION", "matchingQuestion", P);
    m("MATCHING_SURVEY_QUESTION", "matchingSurveyQuestion", P);
    var We = {
        Rk: "equal",
        Qk: "notEqual",
        Xk: "greaterThan",
        dl: "lessThan",
        Yk: "greaterThanOrEqual",
        el: "lessThanOrEqual",
        Hk: "between"
    };
    m("ispring.quiz.slides.questions.graded.answers.numeric.ComparisonOperation", We, void 0);
    m("EQUALS", "equal", We);
    m("DIFFERS", "notEqual", We);
    m("GREATER_THAN", "greaterThan", We);
    m("LESS_THAN", "lessThan", We);
    m("GREATER_THAN_OR_EQUALS", "greaterThanOrEqual", We);
    m("LESS_THAN_OR_EQUALS", "lessThanOrEqual", We);
    m("BETWEEN", "between", We);

    function Xe(a) {
        for (var b = !1, c = Ye.length, d = 0; d < c; ++d)
            if (Ye[d] == a) {
                b = !0;
                break
            }
        if (!b) throw Error("invalid comparison operation");
        this.Yg = a
    }
    var Ye = "equal notEqual greaterThan lessThan greaterThanOrEqual lessThanOrEqual between".split(" ");
    Xe.prototype.Ki = function() {
        return this.Yg
    };
    Xe.prototype.comparisonOperation = Xe.prototype.Ki;

    function Ze() {
        this.J = []
    }
    Ze.prototype.Dc = function(a) {
        this.J.push(a)
    };
    Ze.prototype.Yb = function(a) {
        if (0 > a || a >= this.J.length) throw Error("index is out of range");
        return this.J[a]
    };
    Ze.prototype.getAnswer = Ze.prototype.Yb;
    Ze.prototype.count = function() {
        return this.J.length
    };
    Ze.prototype.count = Ze.prototype.count;

    function $e(a, b) {
        Xe.call(this, a);
        if ("between" == a) throw Error("BETWEEN is binary operation");
        this.Fh = b
    }
    n($e, Xe);
    $e.prototype.Dj = function() {
        return this.Fh
    };
    $e.prototype.operand = $e.prototype.Dj;

    function af(a, b, c) {
        Xe.call(this, a);
        if ("between" != a) throw Error("only BETWEEN operation is supported");
        if (b > c) throw Error("left operand cannot be greater than right operand");
        this.mh = b;
        this.Sh = c
    }
    n(af, Xe);
    af.prototype.sj = function() {
        return this.mh
    };
    af.prototype.leftOperand = af.prototype.sj;
    af.prototype.Tj = function() {
        return this.Sh
    };
    af.prototype.rightOperand = af.prototype.Tj;

    function bf(a, b) {
        O.call(this, a, b);
        this.Zc()
    }
    n(bf, Ue);
    bf.prototype.ab = function() {
        return this.J
    };
    bf.prototype.answers = bf.prototype.ab;
    bf.prototype.Zc = function() {
        for (var a = new Ze, b = this.a, c = this.b(), d = b.c(c, "getAnswersCount"), e = 0; e < d; ++e) {
            var f = b.c(c, "getAnswerComparisonOperation", e),
                h = b.c(c, "getAnswerData", e),
                f = "between" == f ? new af(f, h.leftOperand, h.rightOperand) : new $e(f, h.operand);
            a.Dc(f)
        }
        this.J = a
    };
    var cf = {
        fm: "textSection",
        sl: "placeholderSection"
    };
    m("ispring.quiz.slides.questions.SectionType", cf, void 0);
    m("TEXT_SECTION", "textSection", cf);
    m("PLACEHOLDER_SECTION", "placeholderSection", cf);

    function df(a) {
        this.u = a
    }
    df.prototype.type = function() {
        return this.u
    };
    df.prototype.type = df.prototype.type;

    function ef(a, b) {
        this.u = b;
        if (!a) throw Error("text range must not be null");
        this.T = a
    }
    n(ef, df);
    ef.prototype.W = function() {
        return this.T
    };
    ef.prototype.textRange = ef.prototype.W;

    function ff(a) {
        this.$a = a
    }
    ff.prototype.width = function() {
        return this.$a
    };
    ff.prototype.width = ff.prototype.width;

    function gf(a, b, c) {
        this.u = c;
        if (!a) throw Error("answers must not be null");
        this.J = a;
        this.Qa = new ff(b)
    }
    n(gf, df);
    gf.prototype.ab = function() {
        return this.J
    };
    gf.prototype.answers = gf.prototype.ab;
    gf.prototype.style = function() {
        return this.Qa
    };
    gf.prototype.style = gf.prototype.style;

    function hf() {
        this.h = []
    }
    hf.prototype.ka = function() {
        return this.h.length
    };
    hf.prototype.sectionsCount = hf.prototype.ka;
    hf.prototype.ea = function(a) {
        a = new ef(a, "textSection");
        this.h.push(a);
        return a
    };
    hf.prototype.zd = function(a, b) {
        var c = new gf(a, b, "placeholderSection");
        this.h.push(c);
        return c
    };
    hf.prototype.m = function(a) {
        if (0 > a || a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    hf.prototype.getSection = hf.prototype.m;

    function jf(a, b) {
        O.call(this, a, b);
        this.K = new hf;
        for (var c = this.a.c(this.b(), "getSectionsCount"), d = 0; d < c; ++d) {
            var e = this.a.c(this.b(), "getSection", d);
            if ("placeholderSection" == e.type) {
                for (var f = new Re, h = e.answers, k = 0; k < h.length; ++k) {
                    var t = h[k],
                        H = new Ne(this, new M(t.text));
                    H.Ca(t.score);
                    f.H(H)
                }
                this.K.zd(f, e.width)
            } else this.K.ea(new M(e.text))
        }
        this.ud = new Pe;
        c = this.a.c(this.b(), "getTextAnswersCount");
        for (d = 0; d < c; ++d) e = this.a.c(this.b(), "getTextAnswer", d), e = new M(e.text), this.ud.H(new N(e))
    }
    n(jf, Ue);
    jf.prototype.content = function() {
        return this.K
    };
    jf.prototype.content = jf.prototype.content;
    jf.prototype.Wi = function() {
        return this.ud
    };
    jf.prototype.extraItems = jf.prototype.Wi;

    function kf(a, b) {
        O.call(this, a, b)
    }
    n(kf, Se);
    kf.prototype.content = function() {
        var a = this.a.c(this.b(), "getContentText");
        return new M(a)
    };
    kf.prototype.content = kf.prototype.content;

    function mf(a, b) {
        O.call(this, a, b)
    }
    n(mf, kf);

    function nf(a, b) {
        O.call(this, a, b)
    }
    n(nf, Te);

    function of (a, b) {
        O.call(this, a, b)
    }
    n( of , nf);

    function pf(a) {
        this.u = a
    }
    pf.prototype.type = function() {
        return this.u
    };
    pf.prototype.type = pf.prototype.type;

    function qf(a, b, c) {
        this.u = c;
        if (null == a) throw Error("choices must not be null");
        this.j = a;
        this.Qa = new ff(b)
    }
    n(qf, pf);
    qf.prototype.v = function() {
        return this.j
    };
    qf.prototype.choices = qf.prototype.v;
    qf.prototype.style = function() {
        return this.Qa
    };
    qf.prototype.style = qf.prototype.style;

    function rf(a, b) {
        this.u = b;
        if (!a) throw Error("text range must not be null");
        this.T = a
    }
    n(rf, pf);
    rf.prototype.W = function() {
        return this.T
    };
    rf.prototype.textRange = rf.prototype.W;

    function sf() {
        this.h = []
    }
    sf.prototype.ka = function() {
        return this.h.length
    };
    sf.prototype.sectionsCount = sf.prototype.ka;
    sf.prototype.m = function(a) {
        if (a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    sf.prototype.getSection = sf.prototype.m;
    sf.prototype.ea = function(a) {
        a = new rf(a, "textSection");
        this.h.push(a);
        return a
    };
    sf.prototype.yd = function(a, b) {
        var c = new qf(a, b, "placeholderSection");
        this.h.push(c);
        return c
    };

    function tf(a, b) {
        O.call(this, a, b);
        this.K = new sf;
        for (var c = this.a.c(this.b(), "getSectionsCount"), d = 0; d < c; ++d) {
            var e = this.a.c(this.b(), "getSection", d);
            if ("placeholderSection" == e.type) {
                for (var f = new Re, h = e.choices, k = 0; k < h.length; ++k) {
                    var t = h[k],
                        H = new M(t.text),
                        H = new Ne(this, H);
                    H.Yc = t.correct;
                    H.Ca(t.score);
                    f.H(H)
                }
                this.K.yd(f, e.width)
            } else this.K.ea(new M(e.text))
        }
    }
    n(tf, Ue);
    tf.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    tf.prototype.shuffleAnswers = tf.prototype.V;
    tf.prototype.fa = function() {
        return this.a.c(this.b(), "allowPartialAnswer")
    };
    tf.prototype.allowPartialAnswer = tf.prototype.fa;
    tf.prototype.content = function() {
        return this.K
    };
    tf.prototype.content = tf.prototype.content;

    function uf(a) {
        this.u = a
    }
    uf.prototype.type = function() {
        return this.u
    };
    uf.prototype.type = uf.prototype.type;

    function vf(a) {
        this.u = "textSection";
        if (null == a) throw Error("text range must not be null");
        this.T = a
    }
    n(vf, uf);
    vf.prototype.W = function() {
        return this.T
    };
    vf.prototype.textRange = vf.prototype.W;

    function wf(a) {
        this.u = "placeholderSection";
        this.$a = a
    }
    n(wf, uf);
    wf.prototype.width = function() {
        return this.$a
    };
    wf.prototype.width = wf.prototype.width;
    wf.prototype.te = function() {
        return this.ki
    };
    wf.prototype.textStyle = wf.prototype.te;

    function xf() {
        this.h = []
    }
    xf.prototype.ka = function() {
        return this.h.length
    };
    xf.prototype.sectionsCount = xf.prototype.ka;
    xf.prototype.m = function(a) {
        if (a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    xf.prototype.getSection = xf.prototype.m;
    xf.prototype.ea = function(a) {
        a = new vf(a);
        this.h.push(a);
        return a
    };
    xf.prototype.xd = function(a) {
        a = new wf(a);
        this.h.push(a);
        return a
    };

    function yf(a, b) {
        O.call(this, a, b);
        for (var c = new xf, d = this.a, e = this.b(), f = d.c(e, "getSectionsCount"), h = 0; h < f; ++h) {
            var k = d.c(e, "getSectionProperties", h);
            "placeholderSection" == k.type ? c.xd(k.width) : c.ea(new M(k.text))
        }
        this.K = c
    }
    n(yf, nf);
    yf.prototype.content = function() {
        return this.K
    };
    yf.prototype.content = yf.prototype.content;

    function zf(a) {
        this.u = a
    }
    zf.prototype.type = function() {
        return this.u
    };
    zf.prototype.type = zf.prototype.type;

    function Af(a, b, c) {
        this.u = c;
        if (null == a) throw Error("choices must not be null");
        this.j = a;
        this.$a = b
    }
    n(Af, zf);
    Af.prototype.v = function() {
        return this.j
    };
    Af.prototype.choices = Af.prototype.v;
    Af.prototype.width = function() {
        return this.$a
    };
    Af.prototype.width = Af.prototype.width;

    function Bf(a, b) {
        this.u = b;
        if (null == a) throw Error("text range must not be null");
        this.T = a
    }
    n(Bf, zf);
    Bf.prototype.W = function() {
        return this.T
    };
    Bf.prototype.textRange = Bf.prototype.W;

    function Cf() {
        this.h = []
    }
    Cf.prototype.ka = function() {
        return this.h.length
    };
    Cf.prototype.sectionsCount = Cf.prototype.ka;
    Cf.prototype.m = function(a) {
        if (a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    Cf.prototype.getSection = Cf.prototype.m;
    Cf.prototype.ea = function(a) {
        a = new Bf(a, "textSection");
        this.h.push(a);
        return a
    };
    Cf.prototype.yd = function(a, b) {
        var c = new Af(a, b, "placeholderSection");
        this.h.push(c);
        return c
    };

    function Df(a, b) {
        O.call(this, a, b);
        this.K = new Cf;
        for (var c = this.a.c(this.b(), "getSectionsCount"), d = 0; d < c; ++d) {
            var e = this.a.c(this.b(), "getSection", d);
            if ("placeholderSection" == e.type) {
                for (var f = new Pe, h = e.choices, k = 0; k < h.length; ++k) {
                    var t = new M(h[k]),
                        t = new N(t);
                    f.H(t)
                }
                this.K.yd(f, e.width)
            } else this.K.ea(new M(e.text))
        }
    }
    n(Df, nf);
    Df.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    Df.prototype.shuffleAnswers = Df.prototype.V;
    Df.prototype.content = function() {
        return this.K
    };
    Df.prototype.content = Df.prototype.content;

    function Ef(a, b) {
        for (var c = new Pe, d = a.c(b, "getItemsCount"), e = 0; e < d; ++e) {
            var f = a.c(b, "getChoiceText", e),
                f = new N(new M(f));
            c.H(f)
        }
        return c
    };

    function Ff(a, b) {
        O.call(this, a, b);
        this.R = Ef(a, this.b())
    }
    n(Ff, Ue);
    Ff.prototype.fa = function() {
        return this.a.c(this.b(), "getAllowPartialAnswer")
    };
    Ff.prototype.allowPartialAnswer = Ff.prototype.fa;
    Ff.prototype.items = function() {
        return this.R
    };
    Ff.prototype.items = Ff.prototype.items;

    function Gf(a, b) {
        if (null == a) throw Error("premise must not be null");
        if (null == b) throw Error("premise must not be null");
        this.wc = a;
        this.Nh = b
    }
    Gf.prototype.Jj = function() {
        return this.wc
    };
    Gf.prototype.premise = Gf.prototype.Jj;
    Gf.prototype.response = function() {
        return this.Nh
    };
    Gf.prototype.response = Gf.prototype.response;

    function Hf() {
        this.G = []
    }
    Hf.prototype.Ec = function(a, b) {
        var c = new Gf(a, b);
        this.G.push(c);
        return c
    };
    Hf.prototype.Bg = function(a) {
        a = Ya(this.G, a);
        if (-1 == a) throw Error("incorrect match");
        this.G.splice(a, 1)
    };
    Hf.prototype.count = function() {
        return this.G.length
    };
    Hf.prototype.count = Hf.prototype.count;
    Hf.prototype.Gc = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.G[a]
    };
    Hf.prototype.getMatch = Hf.prototype.Gc;

    function If(a, b, c) {
        var d = {},
            e = new Pe,
            f = new Pe,
            h, k, t, H = b.c(c, "getMatchesCount");
        for (h = 0; h < H; ++h) k = b.c(c, "getPremiseText", h), t = b.c(c, "getResponseText", h), k = new N(new M(k)), t = new N(new M(t)), e.H(k), f.H(t);
        d.premises = e;
        d.responses = f;
        if (a) {
            a = new Hf;
            for (h = 0; h < e.count(); ++h) k = e.A(h), t = f.A(h), a.Ec(k, t);
            d.matches = a
        }
        return d
    };

    function Jf(a, b) {
        O.call(this, a, b);
        this.Va()
    }
    n(Jf, Ue);
    Jf.prototype.fa = function() {
        return this.a.c(this.b(), "getAllowPartialAnswer")
    };
    Jf.prototype.allowPartialAnswer = Jf.prototype.fa;
    Jf.prototype.matches = function() {
        return this.G
    };
    Jf.prototype.matches = Jf.prototype.matches;
    Jf.prototype.ha = function() {
        return this.oa
    };
    Jf.prototype.premises = Jf.prototype.ha;
    Jf.prototype.O = function() {
        return this.X
    };
    Jf.prototype.responses = Jf.prototype.O;
    Jf.prototype.Va = function() {
        var a = If(!0, this.a, this.b());
        this.G = a.matches;
        this.oa = a.premises;
        this.X = a.responses
    };

    function Kf(a, b) {
        this.Bc = a;
        this.Cc = b
    }
    Kf.prototype.x = function() {
        return this.Bc
    };
    Kf.prototype.x = Kf.prototype.x;
    Kf.prototype.y = function() {
        return this.Cc
    };
    Kf.prototype.y = Kf.prototype.y;
    var Lf = {
        pl: "oval",
        Nl: "rectangle",
        ul: "freeform",
        Bk: "abstract"
    };
    m("ispring.quiz.slides.questions.graded.answers.hotarea.HotAreaType", Lf, void 0);
    m("OVAL", "oval", Lf);
    m("RECTANGLE", "rectangle", Lf);
    m("POLYGONAL", "freeform", Lf);
    m("ABSTRACT", "abstract", Lf);

    function Q(a, b, c, d, e) {
        this.sc = a;
        this.zc = b;
        this.$a = c;
        this.eh = d;
        this.u = e || "abstract";
        this.gf = ""
    }
    Q.prototype.left = function() {
        return this.sc
    };
    Q.prototype.left = Q.prototype.left;
    Q.prototype.top = function() {
        return this.zc
    };
    Q.prototype.top = Q.prototype.top;
    Q.prototype.width = function() {
        return this.$a
    };
    Q.prototype.width = Q.prototype.width;
    Q.prototype.height = function() {
        return this.eh
    };
    Q.prototype.height = Q.prototype.height;
    Q.prototype.type = function() {
        return this.u
    };
    Q.prototype.type = Q.prototype.type;
    Q.prototype.label = function() {
        return this.gf
    };
    Q.prototype.label = Q.prototype.label;
    Q.prototype.cb = function() {
        throw Error("cannot hitTest abstract hot area");
    };
    Q.prototype.hitTest = Q.prototype.cb;

    function Mf(a, b, c) {
        this.B = c;
        if (!this.B || 3 > this.B.length) throw Error("there must be at least 3 points");
        c = this.B[0].x();
        for (var d = this.B[0].y(), e = 1; e < this.B.length; ++e) {
            var f = this.B[e];
            if (!Kf.prototype.isPrototypeOf(f)) throw Error("all points must be instances of Point class");
            0 > f.x() || 0 > f.y() || 1 < f.x() || f.y();
            c = Math.max(f.x(), c);
            d = Math.max(f.y(), d)
        }
        c = new Kf(c, d);
        Q.call(this, a, b, c.x(), c.y(), "freeform")
    }
    n(Mf, Q);
    Mf.prototype.Zd = function() {
        return this.B.concat()
    };
    Mf.prototype.points = Mf.prototype.Zd;
    Mf.prototype.cb = function(a, b) {
        if (!this.gb) {
            var c = 1024 * this.width(),
                d = 1024 * this.height();
            this.gb = document.createElement("CANVAS");
            this.gb.width = c;
            this.gb.height = d;
            var e = this.gb.getContext("2d");
            e.fillStyle = "rgba(0, 0, 0, 255)";
            e.fillRect(0, 0, c, d);
            c = this.B[0];
            d = this.gb.getContext("2d");
            d.beginPath();
            d.fillStyle = "rgba(255, 255, 255, 255)";
            d.moveTo(1024 * c.x(), 1024 * c.y());
            for (e = 0; e < this.B.length; ++e) {
                var f = this.B[e];
                d.lineTo(1024 * f.x(), 1024 * f.y())
            }
            d.lineTo(1024 * c.x(), 1024 * c.y());
            d.fill()
        }
        c = 1024 * this.width();
        f = 1024 * this.height();
        d = a - this.left();
        e = b - this.top();
        if (0 > d || 0 > e || d >= this.width() || e >= this.height()) return !1;
        c = this.gb.getContext("2d").getImageData(0, 0, c, f);
        d = 4 * (Math.floor(1024 * d) + Math.floor(1024 * e) * c.width);
        e = c.data[d + 1];
        f = c.data[d + 2];
        return 255 == c.data[d] && 255 == e && 255 == f
    };
    Mf.prototype.hitTest = Mf.prototype.cb;

    function Nf() {
        this.ib = []
    }
    Nf.prototype.count = function() {
        return this.ib.length
    };
    Nf.prototype.count = Nf.prototype.count;
    Nf.prototype.aj = function(a) {
        if (0 > a || a >= this.ib.length) throw Error("index is out of range");
        return this.ib[a]
    };
    Nf.prototype.getHotArea = Nf.prototype.aj;

    function Of(a, b, c, d) {
        Q.call(this, a, b, c, d, "rectangle")
    }
    n(Of, Q);
    Of.prototype.cb = function(a, b) {
        var c = this.left() + this.width(),
            d = this.top() + this.height();
        return this.left() <= a && a <= c && this.top() <= b && b <= d
    };
    Of.prototype.hitTest = Of.prototype.cb;

    function Pf(a, b, c, d) {
        Q.call(this, a, b, c, d, "oval");
        this.Qc = c / 2;
        this.Tc = d / 2
    }
    n(Pf, Q);
    Pf.prototype.cb = function(a, b) {
        var c = a - this.Qc - this.left(),
            d = b - this.Tc - this.top();
        return 1 >= c * c / (this.Qc * this.Qc) + d * d / (this.Tc * this.Tc)
    };
    Pf.prototype.hitTest = Pf.prototype.cb;

    function Qf(a, b) {
        O.call(this, a, b);
        for (var c = new Nf, d = this.a, e = this.b(), f = d.c(e, "getHotAreasCount"), h = 0; h < f; ++h) {
            for (var k = d.c(e, "getHotAreaProperties", h), t = k.points, H = [], xa = 0; xa < t.length; ++xa) {
                var ec = t[xa];
                H.push(new Kf(ec.x, ec.y))
            }
            switch (k.type) {
                case "oval":
                    t = new Pf(k.left, k.top, k.width, k.height);
                    break;
                case "rectangle":
                    t = new Of(k.left, k.top, k.width, k.height);
                    break;
                case "freeform":
                    t = new Mf(k.left, k.top, H);
                    break;
                default:
                    throw Error("invalid hot area type");
            }
            t.gf = null != k.label ? k.label : "";
            c.ib.push(t)
        }
        this.ib =
            c
    }
    n(Qf, Ue);
    Qf.prototype.ij = function() {
        return this.a.c(this.b(), "getImageWidth")
    };
    Qf.prototype.imageWidth = Qf.prototype.ij;
    Qf.prototype.hj = function() {
        return this.ib
    };
    Qf.prototype.hotAreas = Qf.prototype.hj;
    Qf.prototype.fa = function() {
        return this.a.c(this.b(), "allowPartialAnswer")
    };
    Qf.prototype.allowPartialAnswer = Qf.prototype.fa;

    function Qe() {
        this.j = []
    }
    Qe.prototype.count = function() {
        return this.j.length
    };
    Qe.prototype.count = Qe.prototype.count;
    Qe.prototype.A = function(a) {
        if (0 > a || a >= this.count()) throw new RangeError("Index out of bounds");
        return this.j[a]
    };
    Qe.prototype.getChoice = Qe.prototype.A;
    Qe.prototype.Id = function(a) {
        return Ya(this.j, a)
    };
    Qe.prototype.getChoiceIndex = Qe.prototype.Id;
    Qe.prototype.H = function(a) {
        a.ie(this.count());
        this.j.push(a)
    };

    function Rf(a, b) {
        O.call(this, a, b);
        this.j = new Qe;
        this.Fa = new Le;
        new Oe(this, a, this.b(), this.j, this.Fa, !1)
    }
    n(Rf, nf);
    Rf.prototype.v = function() {
        return this.j
    };
    Rf.prototype.choices = Rf.prototype.v;
    Rf.prototype.Wb = function() {
        return this.Fa
    };
    Rf.prototype.choicesBinding = Rf.prototype.Wb;
    Rf.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    Rf.prototype.shuffleAnswers = Rf.prototype.V;

    function Sf(a, b) {
        Rf.call(this, a, b)
    }
    n(Sf, Rf);

    function Tf(a, b) {
        O.call(this, a, b);
        this.j = new Qe;
        this.Fa = new Le;
        new Oe(this, a, this.b(), this.j, this.Fa, !1)
    }
    n(Tf, nf);
    Tf.prototype.v = function() {
        return this.j
    };
    Tf.prototype.choices = Tf.prototype.v;
    Tf.prototype.Wb = function() {
        return this.Fa
    };
    Tf.prototype.choicesBinding = Tf.prototype.Wb;
    Tf.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    Tf.prototype.shuffleAnswers = Tf.prototype.V;
    Tf.prototype.Sd = function() {
        return this.a.c(this.b(), "maxResponseCount")
    };
    Tf.prototype.maxResponseCount = Tf.prototype.Sd;

    function Uf() {
        this.Za = []
    }
    Uf.prototype.count = function() {
        return this.Za.length
    };
    Uf.prototype.count = Uf.prototype.count;
    Uf.prototype.sg = function(a) {
        if (0 > a || a >= this.count()) throw Error("invalid index");
        return this.Za[a]
    };
    Uf.prototype.getScale = Uf.prototype.sg;

    function Vf(a) {
        if (null == a) throw Error("textRange cannot be null");
        this.T = a
    }
    Vf.prototype.W = function() {
        return this.T
    };
    Vf.prototype.textRange = Vf.prototype.W;

    function Wf() {}
    Wf.prototype.Nf = "labels";
    Wf.prototype.Vj = function() {
        return this.Nf
    };
    Wf.prototype.scalesHeaderStyle = Wf.prototype.Vj;

    function Xf(a, b) {
        O.call(this, a, b);
        this.Za = new Uf;
        for (var c = this.a.c(this.b(), "getScalesCount"), d = 0; d < c; ++d) {
            var e = this.a.c(this.b(), "getScaleText", d),
                e = new M(e),
                e = new Vf(e);
            this.Za.Za.push(e)
        }
        this.Xf = new Pe;
        c = this.a.c(this.b(), "getChoicesCount");
        for (d = 0; d < c; ++d) e = this.a.c(this.b(), "getChoiceText", d), e = new M(e), e = new N(e), this.Xf.H(e);
        c = this.a.c(this.b(), "getScalesHeaderStyle");
        this.Qa = new Wf;
        if ("labels" != c && "numbers" != c) throw Error("unknown scales header style");
        this.Qa.Nf = c
    }
    n(Xf, nf);
    Xf.prototype.nc = function() {
        return this.Xf
    };
    Xf.prototype.statements = Xf.prototype.nc;
    Xf.prototype.Uj = function() {
        return this.Za
    };
    Xf.prototype.scales = Xf.prototype.Uj;
    Xf.prototype.style = function() {
        return this.Qa
    };
    Xf.prototype.style = Xf.prototype.style;

    function Yf(a, b) {
        O.call(this, a, b);
        this.R = Ef(a, this.b())
    }
    n(Yf, nf);
    Yf.prototype.V = function() {
        return this.a.c(this.b(), "getShuffleAnswers")
    };
    Yf.prototype.shuffleAnswers = Yf.prototype.V;
    Yf.prototype.items = function() {
        return this.R
    };
    Yf.prototype.items = Yf.prototype.items;

    function Zf(a, b, c) {
        O.call(this, a, b);
        this.Xh = c;
        this.S = []
    }
    n(Zf, O);
    Zf.prototype.mc = function() {
        return l(this.xc) ? this.xc : this.xc = this.a.c(this.b(), "getSlidesCount")
    };
    Zf.prototype.slidesCount = Zf.prototype.mc;
    Zf.prototype.name = function() {
        return l(this.Z) ? this.Z : this.Z = this.a.c(this.b(), "getName")
    };
    Zf.prototype.name = Zf.prototype.name;
    Zf.prototype.Sa = function(a) {
        if (this.S[a]) return this.S[a];
        var b = this.a.c(this.b(), "getChildSlideId", a),
            c = this.a.c(this.b(), "getChildSlideType", a),
            b = $f(this.Xh, this.a, b, c);
        return this.S[a] = b
    };
    Zf.prototype.getSlide = Zf.prototype.Sa;
    Zf.prototype.forEach = function(a) {
        for (var b = this.mc(), c = 0; c < b; ++c) {
            var d = this.Sa(c);
            a.apply(this, [d]);
            "slidePool" == d.type() && d.forEach(a)
        }
    };
    Zf.prototype.forEach = Zf.prototype.forEach;

    function ag(a) {
        this.u = a
    }
    ag.prototype.type = function() {
        return this.u
    };
    ag.prototype.type = ag.prototype.type;

    function bg(a, b) {
        this.u = b;
        if (!a) throw Error("text range must not be null");
        this.T = a
    }
    n(bg, ag);
    bg.prototype.W = function() {
        return this.T
    };
    bg.prototype.textRange = bg.prototype.W;

    function cg(a) {
        this.u = a
    }
    n(cg, ag);

    function dg() {
        this.h = []
    }
    dg.prototype.ka = function() {
        return this.h.length
    };
    dg.prototype.sectionsCount = dg.prototype.ka;
    dg.prototype.ea = function(a) {
        a = new bg(a, "textSection");
        this.h.push(a);
        return a
    };
    dg.prototype.zd = function() {
        var a = new cg("placeholderSection");
        this.h.push(a);
        return a
    };
    dg.prototype.m = function(a) {
        if (0 > a || a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    dg.prototype.getSection = dg.prototype.m;

    function eg(a, b) {
        O.call(this, a, b);
        this.K = new dg;
        for (var c = this.a.c(this.b(), "getSectionsCount"), d = 0; d < c; ++d) {
            var e = this.a.c(this.b(), "getSection", d);
            "placeholderSection" == e.type ? this.K.zd() : this.K.ea(new M(e.text))
        }
        this.vd = new Pe;
        c = this.a.c(this.b(), "getTextAnswersCount");
        for (d = 0; d < c; ++d) e = this.a.c(this.b(), "getTextAnswer", d), e = new M(e.text), this.vd.H(new N(e))
    }
    n(eg, nf);
    eg.prototype.content = function() {
        return this.K
    };
    eg.prototype.content = eg.prototype.content;
    eg.prototype.Ak = function() {
        return this.vd
    };
    eg.prototype.words = eg.prototype.Ak;

    function fg(a, b) {
        Ve.call(this, a, b)
    }
    n(fg, Ve);

    function gg(a, b) {
        O.call(this, a, b);
        this.Va()
    }
    n(gg, nf);
    gg.prototype.V = function() {
        return this.a.c(this.b(), "getShuffleAnswers")
    };
    gg.prototype.shuffleAnswers = gg.prototype.V;
    gg.prototype.ha = function() {
        return this.oa
    };
    gg.prototype.premises = gg.prototype.ha;
    gg.prototype.O = function() {
        return this.X
    };
    gg.prototype.responses = gg.prototype.O;
    gg.prototype.Va = function() {
        var a = If(!1, this.a, this.b());
        this.oa = a.premises;
        this.X = a.responses
    };

    function hg(a, b) {
        O.call(this, a, b)
    }
    n(hg, nf);

    function ig(a, b) {
        this.Aa = a;
        this.Oe = b || !1
    }
    ig.prototype.text = function() {
        return this.Aa
    };
    ig.prototype.text = ig.prototype.text;
    ig.prototype.Gi = function() {
        return this.Oe
    };
    ig.prototype.caseSensitive = ig.prototype.Gi;

    function jg(a, b) {
        var c = kg,
            d = lg;

        function e(a, b) {
            if (a == b) return !0;
            if (c)
                for (var e = c.length, f = 0; f < e; ++f) {
                    var h = c[f];
                    if (0 <= h.indexOf(a) && 0 <= h.indexOf(b)) return !0
                }
            if (!d) return !1;
            for (var k in d)
                if (d.hasOwnProperty(k) && (e = d[k], 0 <= k.indexOf(a) && 0 <= e.indexOf(b))) return !0;
            return !1
        }
        if (a == b) return !0;
        if (a.length != b.length || !ta(c) && !wa(d)) return !1;
        for (var f = a.length, h = 0; h < f; ++h)
            if (!e(a.charAt(h), b.charAt(h))) return !1;
        return !0
    };

    function mg(a, b, c) {
        ig.call(this, b, c);
        this.C = new Me(a)
    }
    n(mg, ig);
    var kg = ["'\u2018\u2019\u201b", '\u00ab\u201e\u201c"', '\u00bb\u201f\u201d"', "-\u2010", "\u2012\u2013\u2014-"],
        lg = {
            "\u201a": "'\u2018"
        };
    mg.prototype.qj = function(a) {
        return this.Oe ? jg(this.text(), a) : jg(this.text().toLowerCase(), a.toLowerCase())
    };
    mg.prototype.isCorrectText = mg.prototype.qj;
    mg.prototype.ia = function() {
        return this.C.ia()
    };
    mg.prototype.score = mg.prototype.ia;
    mg.prototype.Ca = function(a) {
        this.C.Ca(a)
    };
    mg.prototype.Ba = function() {
        return this.C.Ba()
    };
    mg.prototype.percent = mg.prototype.Ba;
    mg.prototype.xb = function(a) {
        this.C.xb(a)
    };

    function ng(a) {
        this.J = a || []
    }
    ng.prototype.count = function() {
        return this.J.length
    };
    ng.prototype.count = ng.prototype.count;
    ng.prototype.Yb = function(a) {
        if (a >= this.count()) throw Error("Answer index is out of range");
        return this.J[a]
    };
    ng.prototype.getAnswer = ng.prototype.Yb;
    ng.prototype.Dc = function(a) {
        if (!a) throw Error("Invalid answer");
        this.J.push(a)
    };

    function og(a, b) {
        O.call(this, a, b);
        this.Zc()
    }
    n(og, Ue);
    og.prototype.ab = function() {
        return this.J
    };
    og.prototype.answers = og.prototype.ab;
    og.prototype.Zc = function() {
        for (var a = this.a, b = this.b(), c = new ng, d = a.c(b, "getAnswersCount"), e = 0; e < d; ++e) {
            var f = a.c(b, "getAnswerScore", e);
            a.c(b, "getAnswerPercent", e);
            var h = a.c(b, "getAnswerText", e),
                k = a.c(b, "getAnswerCaseSensitive", e),
                h = new mg(this, h, k);
            h.Ca(f);
            c.Dc(h)
        }
        this.J = c
    };

    function pg(a) {
        this.u = a
    }
    pg.prototype.type = function() {
        return this.u
    };
    pg.prototype.type = pg.prototype.type;

    function qg(a, b) {
        this.u = "placeholderSection";
        if (null == a) throw Error("choices must not be null");
        this.J = a;
        this.Qa = new ff(b)
    }
    n(qg, pg);
    qg.prototype.ab = function() {
        return this.J
    };
    qg.prototype.answers = qg.prototype.ab;
    qg.prototype.style = function() {
        return this.Qa
    };
    qg.prototype.style = qg.prototype.style;
    qg.prototype.te = function() {
        return this.ki
    };
    qg.prototype.textStyle = qg.prototype.te;

    function rg(a) {
        this.u = "textSection";
        if (!a) throw Error("text range must not be null");
        this.T = a
    }
    n(rg, pg);
    rg.prototype.W = function() {
        return this.T
    };
    rg.prototype.textRange = rg.prototype.W;

    function sg() {
        this.h = []
    }
    sg.prototype.ka = function() {
        return this.h.length
    };
    sg.prototype.sectionsCount = sg.prototype.ka;
    sg.prototype.m = function(a) {
        if (a >= this.h.length) throw Error("index is out of bounds");
        return this.h[a]
    };
    sg.prototype.getSection = sg.prototype.m;
    sg.prototype.ea = function(a) {
        a = new rg(a);
        this.h.push(a);
        return a
    };
    sg.prototype.xd = function(a, b) {
        var c = new qg(a, b);
        this.h.push(c);
        return c
    };

    function tg(a, b) {
        O.call(this, a, b);
        for (var c = new sg, d = this.a, e = this.b(), f = d.c(e, "getSectionsCount"), h = 0; h < f; ++h) {
            var k = d.c(e, "getSectionProperties", h);
            if ("placeholderSection" == k.type) {
                for (var t = new ng, H = k.answersProperties, xa = 0; xa < H.length; ++xa) {
                    var ec = H[xa],
                        lf = new mg(this, ec.text, ec.caseSensitive);
                    lf.Ca(ec.score);
                    t.Dc(lf)
                }
                c.xd(t, k.width)
            } else c.ea(new M(k.text))
        }
        this.li = c
    }
    n(tg, Ue);
    tg.prototype.content = function() {
        return this.li
    };
    tg.prototype.content = tg.prototype.content;
    tg.prototype.fa = function() {
        return this.a.c(this.b(), "getAllowPartialAnswer")
    };
    tg.prototype.allowPartialAnswer = tg.prototype.fa;

    function ug(a, b) {
        O.call(this, a, b)
    }
    n(ug, nf);

    function vg(a, b) {
        O.call(this, a, b);
        this.X = new Re;
        this.Jf = new Le;
        new Oe(this, a, this.b(), this.X, this.Jf, !0)
    }
    n(vg, Ue);
    vg.prototype.O = function() {
        return this.X
    };
    vg.prototype.responses = vg.prototype.O;
    vg.prototype.Oj = function() {
        return this.Jf
    };
    vg.prototype.responsesBinding = vg.prototype.Oj;
    vg.prototype.V = function() {
        return this.a.c(this.b(), "shuffleAnswers")
    };
    vg.prototype.shuffleAnswers = vg.prototype.V;
    vg.prototype.fa = function() {
        return this.a.c(this.b(), "allowPartialAnswer")
    };
    vg.prototype.allowPartialAnswer = vg.prototype.fa;
    vg.prototype.Sd = function() {
        return this.a.c(this.b(), "maxResponseCount")
    };
    vg.prototype.maxResponseCount = vg.prototype.Sd;

    function wg(a, b) {
        O.call(this, a, b)
    }
    n(wg, Se);
    wg.prototype.Vi = function() {
        return this.a.c(this.b(), "reviewEnabled")
    };
    wg.prototype.enableQuizReview = wg.prototype.Vi;
    wg.prototype.Ui = function() {
        return this.a.c(this.b(), "showDetailedResults")
    };
    wg.prototype.enableDetailedResults = wg.prototype.Ui;
    wg.prototype.wi = function() {
        return this.a.c(this.b(), "allowPrintResults")
    };
    wg.prototype.allowToPrintResults = wg.prototype.wi;
    wg.prototype.bk = function() {
        return this.a.c(this.b(), "showUserScore")
    };
    wg.prototype.showUserScore = wg.prototype.bk;
    wg.prototype.$j = function() {
        return this.a.c(this.b(), "showPassingScore")
    };
    wg.prototype.showPassingScore = wg.prototype.$j;
    wg.prototype.Zj = function() {
        return this.a.c(this.b(), "showCorrectAnswers")
    };
    wg.prototype.showCorrectAnswers = wg.prototype.Zj;

    function xg(a) {
        this.Uc = a
    }

    function $f(a, b, c, d) {
        c = a.Uc.extend("slide_" + c);
        switch (d) {
            case "slidePool":
                return new Zf(b, c, a);
            case "informationSlide":
                return new kf(b, c);
            case "hotspotQuestion":
                return new Qf(b, c);
            case "likertScaleQuestion":
                return new Xf(b, c);
            case "wordBankQuestion":
                return new jf(b, c);
            case "typeInQuestion":
                return new og(b, c);
            case "numericQuestion":
                return new bf(b, c);
            case "sequenceQuestion":
                return new Ff(b, c);
            case "rankingQuestion":
                return new Yf(b, c);
            case "essayQuestion":
                return new hg(b, c);
            case "shortAnswerQuestion":
                return new of (b,
                    c);
            case "numericSurveyQuestion":
                return new ug(b, c);
            case "introSlide":
                return new mf(b, c);
            case "resultSlide":
                return new wg(b, c);
            case "fillInTheBlankQuestion":
                return new tg(b, c);
            case "fillInTheBlankSurveyQuestion":
                return new yf(b, c);
            case "whichWordQuestion":
                return new eg(b, c);
            case "multipleChoiceTextQuestion":
                return new tf(b, c);
            case "multipleChoiceQuestion":
                return new Ve(b, c);
            case "multipleResponseQuestion":
                return new vg(b, c);
            case "multipleChoiceTextSurveyQuestion":
                return new Df(b, c);
            case "pickOneQuestion":
                return new Rf(b,
                    c);
            case "pickManyQuestion":
                return new Tf(b, c);
            case "trueFalseQuestion":
                return new fg(b, c);
            case "yesNoQuestion":
                return new Sf(b, c);
            case "matchingQuestion":
                return new Jf(b, c);
            case "matchingSurveyQuestion":
                return new gg(b, c);
            default:
                throw Error("unknown slide type");
        }
    };

    function R(a, b) {
        this.a = a;
        this.l = b;
        this.Gb(a, new xg(b));
        this.Wa(a)
    }
    R.prototype.b = function() {
        return this.l
    };
    R.prototype.Gb = function(a, b) {
        var c = a.c(this.b(), "getSlidePoolId");
        this.Ob = $f(b, a, c, "slidePool");
        if (c = a.c(this.b(), "getIntroSlideId")) this.ff = $f(b, a, c, "introSlide")
    };
    R.prototype.Wa = function() {
        var a = this.a.c(this.b(), "getSettings"),
            b = this.ca;
        b.mi = a.timeLimit;
        b.Df = a.questionsSubmitType;
        b.Me = a.branchingEnabled;
        b.Ge = !a.requireAllSlidesSatisfied
    };
    R.prototype.id = function() {
        return this.a.c(this.b(), "getQuizId")
    };
    R.prototype.id = R.prototype.id;
    R.prototype.version = function() {
        return this.a.c(this.b(), "getQuizVersion")
    };
    R.prototype.version = R.prototype.version;
    R.prototype.title = function() {
        return this.a.c(this.b(), "getQuizTitle")
    };
    R.prototype.title = R.prototype.title;
    R.prototype.fk = function() {
        return this.Ob
    };
    R.prototype.slidePool = R.prototype.fk;
    R.prototype.oj = function() {
        return this.ff
    };
    R.prototype.introSlide = R.prototype.oj;
    R.prototype.settings = function() {
        return this.ca
    };
    R.prototype.settings = R.prototype.settings;

    function yg(a, b) {
        R.call(this, a, b)
    }
    n(yg, R);
    yg.prototype.type = function() {
        return "survey"
    };
    yg.prototype.type = yg.prototype.type;
    yg.prototype.Gb = function(a, b) {
        yg.Ta.Gb.call(this, a, b);
        var c = a.c(this.b(), "getResultSlideId");
        c && (this.Lf = $f(b, a, c, "resultSlide"))
    };
    yg.prototype.Wa = function(a) {
        this.ca = new S;
        yg.Ta.Wa.call(this, a)
    };
    yg.prototype.Pj = function() {
        return this.Lf
    };
    yg.prototype.resultSlide = yg.prototype.Pj;
    var zg = {
        Lg: "initializing",
        Mg: "inProgress",
        Ql: "reviewing",
        Kg: "completed",
        Jg: "authorizating"
    };
    m("ispring.quiz.session.QuizState", zg, void 0);
    m("INITIALIZING", "initializing", zg);
    m("IN_PROGRESS", "inProgress", zg);
    m("REVIEWING", "reviewing", zg);
    m("COMPLETED", "completed", zg);
    m("AUTHORIZATING", "authorizating", zg);

    function Ag(a) {
        this.Wc = a;
        this.qd = !1;
        this.g = new q
    }
    Ag.prototype.N = function() {
        return this.g
    };
    Ag.prototype.changeEvent = Ag.prototype.N;
    Ag.prototype.Ji = function() {
        return this.Wc
    };
    Ag.prototype.choice = Ag.prototype.Ji;
    Ag.prototype.selected = function() {
        return this.qd
    };
    Ag.prototype.selected = Ag.prototype.selected;
    Ag.prototype.yb = function(a) {
        this.qd != a && (this.qd = a, this.g.i(this))
    };
    Ag.prototype.setSelected = Ag.prototype.yb;

    function Bg(a) {
        Ag.call(this, a);
        this.g = new q
    }
    n(Bg, Ag);
    Bg.prototype.Ue = "";
    Bg.prototype.Pi = function() {
        return this.Ue
    };
    Bg.prototype.customAnswer = Bg.prototype.Pi;
    Bg.prototype.Fg = function(a) {
        this.Ue = a
    };
    Bg.prototype.setCustomAnswer = Bg.prototype.Fg;
    Bg.prototype.N = function() {
        return this.g
    };
    Bg.prototype.Ri = function() {
        return this.Wc
    };
    Bg.prototype.customizableChoice = Bg.prototype.Ri;

    function Cg(a) {
        Ag.call(this, a)
    }
    n(Cg, Ag);
    Cg.prototype.ej = function() {
        return this.Wc
    };
    Cg.prototype.gradedChoice = Cg.prototype.ej;

    function Dg(a, b, c, d, e) {
        Eg(a, b, c, d);
        a.o(b, "answerChanged", function(a) {
            this.L(a, c, e)
        }, this)
    }

    function Eg(a, b, c, d) {
        a = a.c(b, "getChoicesIndexes");
        for (b = 0; b < a.length; ++b) {
            var e = d.A(a[b]);
            c instanceof Fg ? c.nb(new Cg(e)) : c instanceof Gg && c.nb(new Bg(e))
        }
    }
    Dg.prototype.L = function(a, b, c) {
        for (var d = 0; d < a.length; ++d) {
            var e = b.sa(d),
                f = a[d];
            e.yb(f.selected);
            c || e.Fg(f.customAnswer)
        }
    };

    function Hg(a, b, c) {
        this.a = a;
        this.l = b;
        this.w = c
    }
    Hg.prototype.b = function() {
        return this.l
    };
    Hg.prototype.ek = function() {
        return this.w
    };
    Hg.prototype.slide = Hg.prototype.ek;

    function T(a, b, c) {
        Hg.call(this, a, b, c)
    }
    n(T, Hg);
    T.prototype.zk = function() {
        return this.a.c(this.b(), "visited")
    };
    T.prototype.visited = T.prototype.zk;
    T.prototype.fj = function() {
        return this.a.c(this.b(), "hasFeedback")
    };
    T.prototype.hasFeedback = T.prototype.fj;
    T.prototype.Xi = function() {
        return this.a.c(this.b(), "feedbackWasShown")
    };
    T.prototype.feedbackWasShown = T.prototype.Xi;
    T.prototype.dk = function() {
        return this.a.c(this.b(), "skipped")
    };
    T.prototype.skipped = T.prototype.dk;
    T.prototype.yk = function() {
        return this.a.c(this.b(), "viewing")
    };
    T.prototype.viewing = T.prototype.yk;
    T.prototype.Yi = function() {
        var a = this.a.c(this.b(), "getFirstVisitTime");
        return new Date(a)
    };
    T.prototype.firstVisitTime = T.prototype.Yi;
    T.prototype.xk = function() {
        return this.a.c(this.b(), "getViewDuration")
    };
    T.prototype.viewDuration = T.prototype.xk;

    function U(a, b, c) {
        Hg.call(this, a, b, c);
        this.ag = new q;
        a.o(this.b(), "questionSubmitted", this.Ah, this)
    }
    n(U, T);
    U.prototype.completed = function() {
        return this.a.c(this.b(), "getCompleted")
    };
    U.prototype.completed = U.prototype.completed;
    U.prototype.nj = function() {
        return this.a.c(this.b(), "getInitiated")
    };
    U.prototype.initiated = U.prototype.nj;
    U.prototype.qk = function() {
        return this.a.c(this.b(), "getSubmitted")
    };
    U.prototype.submitted = U.prototype.qk;
    U.prototype.nk = function() {
        return this.a.c(this.b(), "getSubmitEnabled")
    };
    U.prototype.submitEnabled = U.prototype.nk;
    U.prototype.Ah = function() {
        this.ag.i(this)
    };
    U.prototype.pk = function() {
        return this.ag
    };
    U.prototype.submitEvent = U.prototype.pk;

    function Ig(a, b, c) {
        U.call(this, a, b, c)
    }
    n(Ig, U);

    function Gg() {
        this.j = []
    }
    Gg.prototype.count = function() {
        return this.j.length
    };
    Gg.prototype.count = Gg.prototype.count;
    Gg.prototype.sa = function(a) {
        if (a >= this.count()) throw new RangeError("index out of bounds");
        return this.j[a]
    };
    Gg.prototype.getChoiceState = Gg.prototype.sa;
    Gg.prototype.nb = function(a) {
        if (null == a) throw Error("Null ICustomizableChoiceState reference is not accepted");
        this.j.push(a)
    };

    function Jg(a, b, c) {
        U.call(this, a, b, c);
        this.Ga = new Gg;
        new Dg(a, this.b(), this.Ga, c.v(), !1)
    }
    n(Jg, Ig);
    Jg.prototype.v = function() {
        return this.Ga
    };
    Jg.prototype.choices = Jg.prototype.v;

    function Kg(a, b) {
        this.gi = a;
        this.Tg = b
    }
    Kg.prototype.Tb = function() {
        return this.Tg
    };
    Kg.prototype.awardedScore = Kg.prototype.Tb;
    Kg.prototype.status = function() {
        return this.gi
    };
    Kg.prototype.status = Kg.prototype.status;

    function Lg(a, b, c) {
        U.call(this, a, b, c)
    }
    n(Lg, U);
    Lg.prototype.tk = function() {
        return this.a.c(this.b(), "getUsedAttempts")
    };
    Lg.prototype.usedAttempts = Lg.prototype.tk;
    Lg.prototype.zi = function() {
        return this.a.c(this.b(), "getAttemptsExceeded")
    };
    Lg.prototype.attemptsExceeded = Lg.prototype.zi;
    Lg.prototype.Sj = function() {
        var a = this.a.c(this.b(), "getReview");
        return null != a ? new Kg(a.status, a.score) : null
    };
    Lg.prototype.review = Lg.prototype.Sj;

    function Mg(a, b) {
        this.Bc = a;
        this.Cc = b;
        this.nd = new q;
        this.uc = new q
    }
    Mg.prototype.x = function() {
        return this.Bc
    };
    Mg.prototype.x = Mg.prototype.x;
    Mg.prototype.y = function() {
        return this.Cc
    };
    Mg.prototype.y = Mg.prototype.y;
    Mg.prototype.move = function(a, b) {
        l(a) && (this.Bc = a);
        l(b) && (this.Cc = b);
        this.nd.i()
    };
    Mg.prototype.remove = function() {
        this.uc.i(this)
    };

    function Ng() {
        this.B = [];
        this.uc = new q;
        this.g = new q
    }
    Ng.prototype.N = function() {
        return this.g
    };
    Ng.prototype.count = function() {
        return this.B.length
    };
    Ng.prototype.count = Ng.prototype.count;
    Ng.prototype.qg = function(a) {
        if (a >= this.count() || 0 > a) throw Error("index is out of range");
        return this.B[a]
    };
    Ng.prototype.getPoint = Ng.prototype.qg;

    function Og(a, b, c) {
        b = new Mg(b, c);
        b.uc.addHandler(a.sf, a);
        b.nd.addHandler(a.rf, a);
        a.B.push(b);
        a.g.i()
    }
    Ng.prototype.clear = function() {
        0 < this.B.length && (Za(this.B, this.Hf, this), this.B = [], this.g.i())
    };
    Ng.prototype.Hf = function(a) {
        a.uc.removeHandler(this.sf, this);
        a.nd.removeHandler(this.rf, this)
    };
    Ng.prototype.sf = function(a) {
        $a(this.B, a);
        this.Hf(a);
        this.g.i()
    };
    Ng.prototype.rf = function() {
        this.g.i()
    };

    function Pg(a, b, c) {
        U.call(this, a, b, c);
        this.B = new Ng;
        b = this.a;
        c = b.c(this.b(), "getPointsCount");
        for (var d = 0; d < c; ++d) {
            var e = b.c(this.b(), "getPoint", d);
            Og(this.B, e.x, e.y)
        }
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(Pg, Lg);
    Pg.prototype.Zd = function() {
        return this.B
    };
    Pg.prototype.points = Pg.prototype.Zd;
    Pg.prototype.L = function(a) {
        var b, c = this.B;
        if (c.count() <= a.length)
            for (var d = 0; d < c.count(); ++d) {
                var e = c.qg(d);
                b = a[d];
                e.move(b.x, b.y)
            } else c.clear();
        for (d = c.count(); d < a.length; ++d) b = a[d], Og(c, b.x, b.y)
    };

    function Qg() {
        this.sd = []
    }
    Qg.prototype.count = function() {
        return this.sd.length
    };
    Qg.prototype.count = Qg.prototype.count;
    Qg.prototype.ug = function(a) {
        if (0 > a || a >= this.count()) throw Error("invalid index");
        return this.sd[a]
    };
    Qg.prototype.getStatementState = Qg.prototype.ug;

    function Rg(a) {
        if (null == a) throw Error("invalid statement");
        this.fi = a;
        this.od = null;
        this.g = new q
    }
    Rg.prototype.lk = function() {
        return this.fi
    };
    Rg.prototype.statement = Rg.prototype.lk;
    Rg.prototype.scale = function() {
        return this.od
    };
    Rg.prototype.scale = Rg.prototype.scale;
    Rg.prototype.N = function() {
        return this.g
    };

    function Sg(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.yc = new Qg;
        for (b = 0; b < this.s.nc().count(); ++b) c = new Rg(this.s.nc().A(b)), this.yc.sd.push(c);
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(Sg, Ig);
    Sg.prototype.nc = function() {
        return this.yc
    };
    Sg.prototype.statements = Sg.prototype.nc;
    Sg.prototype.L = function() {
        for (var a = 0; a < this.yc.count(); ++a) {
            var b = this.a.c(this.b(), "getSelectedScaleIndex", a);
            if (-1 != b) {
                var b = this.s.Za.sg(b),
                    c = this.yc.ug(a);
                c.od != b && (c.od = b, c.g.i(c))
            }
        }
    };

    function Fg() {
        this.j = [];
        this.g = new q
    }
    Fg.prototype.N = function() {
        return this.g
    };
    Fg.prototype.count = function() {
        return this.j.length
    };
    Fg.prototype.count = Fg.prototype.count;
    Fg.prototype.sa = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.j[a]
    };
    Fg.prototype.getChoiceState = Fg.prototype.sa;
    Fg.prototype.nb = function(a) {
        this.j.push(a);
        a.g.addHandler(this.g.i, this.g)
    };

    function Tg(a, b, c) {
        U.call(this, a, b, c);
        this.Ga = new Fg;
        new Dg(a, this.b(), this.Ga, c.v(), !0)
    }
    n(Tg, Lg);
    Tg.prototype.v = function() {
        return this.Ga
    };
    Tg.prototype.choices = Tg.prototype.v;

    function Ug(a, b, c) {
        Tg.call(this, a, b, c)
    }
    n(Ug, Tg);

    function Vg(a, b) {
        if (null == a) throw Error("section must not be null");
        if (null == b) throw Error("choices must not be null");
        this.ba = a;
        this.j = b;
        this.g = new q;
        this.j.g.addHandler(this.g.i, this.g)
    }
    Vg.prototype.ja = function() {
        return this.ba
    };
    Vg.prototype.section = Vg.prototype.ja;
    Vg.prototype.v = function() {
        return this.j
    };
    Vg.prototype.choices = Vg.prototype.v;
    Vg.prototype.N = function() {
        return this.g
    };

    function Wg() {
        this.h = [];
        this.g = new q
    }
    Wg.prototype.count = function() {
        return this.h.length
    };
    Wg.prototype.count = Wg.prototype.count;
    Wg.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    Wg.prototype.getSection = Wg.prototype.m;
    Wg.prototype.da = function(a, b) {
        var c = new Vg(a, b);
        this.h.push(c);
        c.g.addHandler(this.g.i, this.g);
        return c
    };
    Wg.prototype.N = function() {
        return this.g
    };

    function Xg() {
        this.j = [];
        this.g = new q
    }
    Xg.prototype.N = function() {
        return this.g
    };
    Xg.prototype.sa = function(a) {
        if (0 > a || a >= this.count()) throw Error("index out of bounds");
        return this.j[a]
    };
    Xg.prototype.getChoiceState = Xg.prototype.sa;
    Xg.prototype.nb = function(a) {
        this.j.push(a);
        a.g.addHandler(this.Aj, this)
    };
    Xg.prototype.Aj = function(a) {
        this.g.i(a)
    };
    Xg.prototype.count = function() {
        return this.j.length
    };
    Xg.prototype.count = Xg.prototype.count;

    function Yg(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.za = [];
        this.j = new Wg;
        for (c = b = 0; c < this.s.content().h.length; ++c) {
            var d = this.s.content().m(c);
            if ("placeholderSection" == d.type()) {
                for (var e = d.v(), f = new Xg, h = this.a.c(this.b(), "getChoicesIndexes", c, b), k = 0; k < h.length; ++k) {
                    var t = new Ag(e.A(h[k]));
                    f.nb(t)
                }
                this.j.da(d, f);
                ++b;
                this.za.push(-1)
            }
        }
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(Yg, Ig);
    Yg.prototype.v = function() {
        return this.j
    };
    Yg.prototype.choices = Yg.prototype.v;
    Yg.prototype.L = function() {
        for (var a = 0; a < this.j.count(); ++a) {
            var b = this.a.c(this.b(), "getSelectedChoiceIndex", a); - 1 != b && (-1 != this.za[a] && this.j.m(a).v().sa(this.za[a]).yb(!1), this.j.m(a).v().sa(b).yb(!0), this.za[a] = b)
        }
    };

    function Zg(a, b, c) {
        Hg.call(this, a, b, c)
    }
    n(Zg, T);

    function $g(a, b, c) {
        U.call(this, a, b, c)
    }
    n($g, Ig);
    $g.prototype.U = function() {
        return this.a.c(this.b(), "getAnswer")
    };
    $g.prototype.answer = $g.prototype.U;

    function ah(a, b, c) {
        U.call(this, a, b, c)
    }
    n(ah, Ig);
    ah.prototype.U = function() {
        return this.a.c(this.b(), "getAnswer")
    };
    ah.prototype.answer = ah.prototype.U;

    function bh(a, b) {
        if (null == a) throw Error("section must not be null");
        if (null == b) throw Error("choices must not be null");
        this.ba = a;
        this.j = b;
        this.g = new q;
        this.j.g.addHandler(this.g.i, this.g)
    }
    bh.prototype.ja = function() {
        return this.ba
    };
    bh.prototype.section = bh.prototype.ja;
    bh.prototype.v = function() {
        return this.j
    };
    bh.prototype.choices = bh.prototype.v;
    bh.prototype.N = function() {
        return this.g
    };

    function ch() {
        this.h = [];
        this.g = new q
    }
    ch.prototype.count = function() {
        return this.h.length
    };
    ch.prototype.count = ch.prototype.count;
    ch.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    ch.prototype.getSection = ch.prototype.m;
    ch.prototype.da = function(a, b) {
        var c = new bh(a, b);
        this.h.push(c);
        c.g.addHandler(this.g.i, this.g);
        return c
    };
    ch.prototype.N = function() {
        return this.g
    };

    function dh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.za = [];
        this.Eb = new ch;
        for (c = b = 0; c < this.s.content().h.length; ++c) {
            var d = this.s.content().m(c);
            if ("placeholderSection" == d.type()) {
                for (var e = d.v(), f = new Fg, h = this.a.c(this.b(), "getChoicesIndexes", c, b), k = 0; k < h.length; ++k) {
                    var t = new Cg(e.pg(h[k]));
                    f.nb(t)
                }
                this.Eb.da(d, f);
                ++b;
                this.za.push(-1)
            }
        }
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(dh, Lg);
    dh.prototype.v = function() {
        return this.Eb
    };
    dh.prototype.choices = dh.prototype.v;
    dh.prototype.L = function() {
        for (var a = 0; a < this.Eb.count(); ++a) {
            var b = this.a.c(this.b(), "getSelectedChoiceIndex", a); - 1 != b && (-1 != this.za[a] && this.Eb.m(a).v().sa(this.za[a]).yb(!1), this.Eb.m(a).v().sa(b).yb(!0), this.za[a] = b)
        }
    };

    function eh(a) {
        this.ba = a;
        this.C = "";
        this.g = new q
    }
    eh.prototype.ja = function() {
        return this.ba
    };
    eh.prototype.section = eh.prototype.ja;
    eh.prototype.U = function() {
        return this.C
    };
    eh.prototype.answer = eh.prototype.U;
    eh.prototype.$ = function(a) {
        this.C = a;
        this.g.i()
    };
    eh.prototype.setAnswer = eh.prototype.$;
    eh.prototype.N = function() {
        return this.g
    };

    function fh() {
        this.h = [];
        this.g = new q
    }
    fh.prototype.count = function() {
        return this.h.length
    };
    fh.prototype.count = fh.prototype.count;
    fh.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    fh.prototype.getSection = fh.prototype.m;
    fh.prototype.N = function() {
        return this.g
    };
    fh.prototype.da = function(a) {
        a = new eh(a);
        a.g.addHandler(this.g.i, this.g);
        this.h.push(a);
        return a
    };

    function gh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.cd();
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(gh, Ig);
    gh.prototype.Bd = function() {
        return this.ua
    };
    gh.prototype.blanks = gh.prototype.Bd;
    gh.prototype.L = function(a) {
        for (var b = 0; b < this.ua.count(); ++b) this.ua.m(b).$(a[b])
    };
    gh.prototype.cd = function() {
        this.ua = new fh;
        for (var a = this.s.content(), b = 0, c = 0; c < a.h.length; ++c) {
            var d = a.m(c);
            if ("placeholderSection" == d.type()) {
                var d = this.ua.da(d),
                    e = this.a.c(this.b(), "getSectionStateAnswer", b++);
                d.$(e)
            }
        }
    };

    function hh(a) {
        if (null == a) throw Error("section must not be null");
        this.ba = a;
        this.Nb = new q
    }
    hh.prototype.C = null;
    hh.prototype.ja = function() {
        return this.ba
    };
    hh.prototype.section = hh.prototype.ja;
    hh.prototype.$ = function(a) {
        this.C = a;
        this.Nb.i()
    };
    hh.prototype.U = function() {
        return this.C
    };
    hh.prototype.answer = hh.prototype.U;

    function ih() {
        this.h = [];
        this.g = new q
    }
    ih.prototype.da = function(a) {
        a = new hh(a);
        this.h.push(a);
        a.Nb.addHandler(this.g.i, this.g);
        return a
    };
    ih.prototype.N = function() {
        return this.g
    };
    ih.prototype.count = function() {
        return this.h.length
    };
    ih.prototype.count = ih.prototype.count;
    ih.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    ih.prototype.getSection = ih.prototype.m;

    function jh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.dd();
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(jh, Lg);
    jh.prototype.Yd = function() {
        return this.wa
    };
    jh.prototype.placeholders = jh.prototype.Yd;
    jh.prototype.L = function() {
        for (var a = 0; a < this.wa.count(); ++a) {
            var b = this.wa.m(a),
                c = this.a.c(this.b(), "getPlaceholderAnswer", a);
            if (c) {
                var d;
                "extraItems" == c.container ? (c = c.answerIndex, d = this.s.ud.A(c)) : (d = c.sectionIndex, c = c.answerIndex, d = this.s.content().m(d).J.A(c));
                b.$(d)
            } else b.$(null)
        }
    };
    jh.prototype.dd = function() {
        this.wa = new ih;
        for (var a = 0; a < this.s.content().h.length; ++a) {
            var b = this.s.content().m(a);
            "placeholderSection" == b.type() && this.wa.da(b)
        }
    };

    function kh(a, b, c) {
        U.call(this, a, b, c);
        this.Kf = new Fg;
        new Dg(a, this.b(), this.Kf, c.O(), !0)
    }
    n(kh, Lg);
    kh.prototype.O = function() {
        return this.Kf
    };
    kh.prototype.responses = kh.prototype.O;

    function lh(a, b, c) {
        U.call(this, a, b, c);
        this.Ga = new Gg;
        new Dg(a, this.b(), this.Ga, c.v(), !1)
    }
    n(lh, Ig);
    lh.prototype.v = function() {
        return this.Ga
    };
    lh.prototype.choices = lh.prototype.v;

    function mh(a, b, c) {
        lh.call(this, a, b, c)
    }
    n(mh, lh);

    function nh(a, b, c, d) {
        Hg.call(this, a, b, c);
        this.Zh = d;
        this.rd = []
    }
    n(nh, Hg);
    nh.prototype.mc = function() {
        return l(this.xc) ? this.xc : this.a.c(this.b(), "getSlidesCount")
    };
    nh.prototype.slidesCount = nh.prototype.mc;
    nh.prototype.ta = function() {
        return this.a.c(this.b(), "getMaxScore")
    };
    nh.prototype.maxScore = nh.prototype.ta;
    nh.prototype.Tb = function() {
        return this.a.c(this.b(), "getAwardedScore")
    };
    nh.prototype.awardedScore = nh.prototype.Tb;
    nh.prototype.rj = function() {
        return this.a.c(this.b(), "getIsPassed")
    };
    nh.prototype.isPassed = nh.prototype.rj;
    nh.prototype.tg = function(a) {
        if (this.rd[a]) return this.rd[a];
        var b = this.a.c(this.b(), "getChildSlideId", a),
            b = oh(this.Zh, this.a, b);
        return this.rd[a] = b
    };
    nh.prototype.getSlideState = nh.prototype.tg;
    nh.prototype.I = function() {
        return this.a.c(this.b(), "getCurrentSlideIndex")
    };
    nh.prototype.currentSlideIndex = nh.prototype.I;
    nh.prototype.forEach = function(a) {
        for (var b = this.mc(), c = 0; c < b; ++c) {
            var d = this.tg(c);
            a.apply(this, [d]);
            "slidePool" == d.w.type() && d.forEach(a)
        }
    };
    nh.prototype.forEach = nh.prototype.forEach;

    function ph() {
        this.j = [];
        this.Wg = new q
    }
    n(ph, Pe);
    ph.prototype.H = function(a) {
        this.j.push(a)
    };

    function qh(a, b, c) {
        var d = Ya(a.j, b);
        d != c && (a.j.splice(d, 1), a.j.splice(c, 0, b));
        a.Wg.i(b, c)
    };

    function rh(a, b, c) {
        a = a.items();
        for (var d = new ph, e = b.c(c, "getItemsCount"), f = 0; f < e; ++f) {
            var h = b.c(c, "getChoiceCorrectIndex", f),
                h = a.A(h);
            d.H(h)
        }
        return d
    };

    function sh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.R = rh(this.s, a, this.b());
        a.o(this.b(), "choiceMoved", this.fd, this)
    }
    n(sh, Lg);
    sh.prototype.items = function() {
        return this.R
    };
    sh.prototype.items = sh.prototype.items;
    sh.prototype.fd = function(a, b) {
        var c = this.R,
            d = this.s.items().A(a);
        qh(c, d, b)
    };

    function th(a, b, c) {
        Hg.call(this, a, b, c)
    }
    n(th, Hg);

    function uh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.R = rh(this.s, a, this.b());
        a.o(this.b(), "choiceMoved", this.fd, this)
    }
    n(uh, Ig);
    uh.prototype.items = function() {
        return this.R
    };
    uh.prototype.items = uh.prototype.items;
    uh.prototype.fd = function(a, b) {
        var c = this.R,
            d = this.s.items().A(a);
        qh(c, d, b)
    };

    function vh(a) {
        if (null == a) throw Error("section must not be null");
        this.ba = a;
        this.Nb = new q
    }
    vh.prototype.C = null;
    vh.prototype.ja = function() {
        return this.ba
    };
    vh.prototype.section = vh.prototype.ja;
    vh.prototype.$ = function(a) {
        this.C = a;
        this.Nb.i()
    };
    vh.prototype.U = function() {
        return this.C
    };
    vh.prototype.answer = vh.prototype.U;

    function wh() {
        this.h = [];
        this.g = new q
    }
    wh.prototype.da = function(a) {
        a = new vh(a);
        this.h.push(a);
        a.Nb.addHandler(this.g.i, this.g);
        return a
    };
    wh.prototype.N = function() {
        return this.g
    };
    wh.prototype.count = function() {
        return this.h.length
    };
    wh.prototype.count = wh.prototype.count;
    wh.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    wh.prototype.getSection = wh.prototype.m;

    function xh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.dd();
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(xh, Ig);
    xh.prototype.Yd = function() {
        return this.wa
    };
    xh.prototype.placeholders = xh.prototype.Yd;
    xh.prototype.L = function() {
        for (var a = 0; a < this.wa.count(); ++a) {
            var b = this.wa.m(a),
                c = this.a.c(this.b(), "getPlaceholderAnswerIndex", a); - 1 != c ? (c = this.s.vd.A(c), b.$(c)) : b.$(null)
        }
    };
    xh.prototype.dd = function() {
        this.wa = new wh;
        for (var a = 0; a < this.s.content().h.length; ++a) {
            var b = this.s.content().m(a);
            "placeholderSection" == b.type() && this.wa.da(b)
        }
    };

    function yh(a) {
        this.ba = a;
        this.C = "";
        this.g = new q
    }
    yh.prototype.ja = function() {
        return this.ba
    };
    yh.prototype.section = yh.prototype.ja;
    yh.prototype.U = function() {
        return this.C
    };
    yh.prototype.answer = yh.prototype.U;
    yh.prototype.$ = function(a) {
        this.C = a;
        this.g.i()
    };
    yh.prototype.N = function() {
        return this.g
    };

    function zh() {
        this.h = [];
        this.g = new q
    }
    zh.prototype.m = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.h[a]
    };
    zh.prototype.getSection = zh.prototype.m;
    zh.prototype.count = function() {
        return this.h.length
    };
    zh.prototype.count = zh.prototype.count;
    zh.prototype.da = function(a) {
        a = new yh(a);
        a.g.addHandler(this.g.i, this.g);
        this.h.push(a);
        return a
    };
    zh.prototype.N = function() {
        return this.g
    };

    function Ah(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.cd();
        a.o(this.b(), "answerChanged", this.L, this)
    }
    n(Ah, Lg);
    Ah.prototype.Bd = function() {
        return this.ua
    };
    Ah.prototype.blanks = Ah.prototype.Bd;
    Ah.prototype.L = function(a) {
        for (var b = 0; b < this.ua.count(); ++b) this.ua.m(b).$(a[b])
    };
    Ah.prototype.cd = function() {
        this.ua = new zh;
        for (var a = this.s.content(), b = 0, c = 0; c < a.h.length; ++c) {
            var d = a.m(c);
            if ("placeholderSection" == d.type()) {
                var d = this.ua.da(d),
                    e = this.a.c(this.b(), "getSectionStateAnswer", b++);
                d.$(e)
            }
        }
    };

    function Bh(a, b, c) {
        U.call(this, a, b, c)
    }
    n(Bh, Lg);
    Bh.prototype.U = function() {
        return this.a.c(this.b(), "getAnswer")
    };
    Bh.prototype.answer = Bh.prototype.U;

    function Ch(a, b, c) {
        U.call(this, a, b, c)
    }
    n(Ch, Ig);
    Ch.prototype.U = function() {
        return this.a.c(this.b(), "getAnswer")
    };
    Ch.prototype.answer = Ch.prototype.U;

    function Dh(a, b, c) {
        U.call(this, a, b, c)
    }
    n(Dh, Lg);
    Dh.prototype.Yb = function() {
        return this.a.c(this.b(), "getAnswer")
    };
    Dh.prototype.getAnswer = Dh.prototype.Yb;

    function Eh(a, b, c) {
        Hg.call(this, a, b, c)
    }
    n(Eh, Hg);

    function Fh(a, b) {
        this.G = [];
        this.oa = [];
        this.X = [];
        this.qh = new q;
        this.ph = new q;
        var c;
        for (c = 0; c < a.count(); ++c) this.oa.push(a.A(c));
        for (c = 0; c < b.count(); ++c) this.X.push(b.A(c))
    }
    Fh.prototype.Ec = function(a, b) {
        var c = this.count(),
            d = new Gf(a, b);
        this.G.splice(c, 0, d);
        this.ph.i(d.wc, d.response());
        return d
    };
    Fh.prototype.Bg = function(a) {
        var b = Ya(this.G, a);
        if (-1 == b) throw Error("incorrect match");
        this.G.splice(b, 1);
        this.qh.i(a.wc, a.response())
    };
    Fh.prototype.count = function() {
        return this.G.length
    };
    Fh.prototype.count = Fh.prototype.count;
    Fh.prototype.Gc = function(a) {
        if (0 > a || a >= this.count()) throw Error("index is out of bounds");
        return this.G[a]
    };
    Fh.prototype.getMatch = Fh.prototype.Gc;
    Fh.prototype.ha = function() {
        return this.oa
    };
    Fh.prototype.premises = Fh.prototype.ha;
    Fh.prototype.O = function() {
        return this.X
    };
    Fh.prototype.responses = Fh.prototype.O;

    function Gh(a, b, c) {
        var d = a.ha();
        a = a.O();
        for (var e = new Pe, f = b.c(c, "getPremisesCount"), h = 0; h < f; ++h) {
            var k = b.c(c, "getPremiseCorrectIndex", h),
                t = d.A(k);
            e.H(t)
        }
        f = new Pe;
        t = b.c(c, "getResponsesCount");
        for (h = 0; h < t; ++h) k = b.c(c, "getResponseCorrectIndex", h), k = a.A(k), f.H(k);
        for (var H = new Fh(e, f), xa = b.c(c, "getMatchesCount"), h = 0; h < xa; ++h) k = b.c(c, "getMatchData", h).premiseIndex, t = d.A(k), k = a.A(k), H.Ec(t, k);
        return {
            matches: H,
            premises: e,
            responses: f
        }
    }

    function Hh(a, b, c, d, e) {
        var f = d.O();
        b = d.ha().A(b);
        c = f.A(c);
        if (a) e.Ec(b, c);
        else
            for (a = 0; a < e.count(); ++a)
                if (f = e.Gc(a), f.wc == b && f.response() == c) {
                    e.Bg(f);
                    break
                }
    };

    function Ih(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.Va();
        a.o(this.b(), "matchChanged", this.jd, this)
    }
    n(Ih, Lg);
    Ih.prototype.matches = function() {
        return this.G
    };
    Ih.prototype.matches = Ih.prototype.matches;
    Ih.prototype.ha = function() {
        return this.oa
    };
    Ih.prototype.premises = Ih.prototype.ha;
    Ih.prototype.O = function() {
        return this.X
    };
    Ih.prototype.responses = Ih.prototype.O;
    Ih.prototype.Va = function() {
        var a = Gh(this.s, this.a, this.b());
        this.G = a.matches;
        this.oa = a.premises;
        this.X = a.responses
    };
    Ih.prototype.jd = function(a, b, c) {
        Hh(a, b, c, this.s, this.G)
    };

    function Jh(a, b, c) {
        U.call(this, a, b, c);
        this.s = c;
        this.Va();
        a.o(this.b(), "matchChanged", this.jd, this)
    }
    n(Jh, Ig);
    Jh.prototype.matches = function() {
        return this.G
    };
    Jh.prototype.matches = Jh.prototype.matches;
    Jh.prototype.ha = function() {
        return this.oa
    };
    Jh.prototype.premises = Jh.prototype.ha;
    Jh.prototype.O = function() {
        return this.X
    };
    Jh.prototype.responses = Jh.prototype.O;
    Jh.prototype.Va = function() {
        var a = Gh(this.s, this.a, this.b());
        this.G = a.matches;
        this.oa = a.premises;
        this.X = a.responses
    };
    Jh.prototype.jd = function(a, b, c) {
        Hh(a, b, c, this.s, this.G)
    };

    function Kh(a, b) {
        this.Uc = a;
        this.Ob = b
    }

    function oh(a, b, c) {
        va(c) && (c = Lh(a, c));
        var d = a.Uc.extend("slideState_" + c.id());
        switch (c.type()) {
            case "slidePool":
                return new nh(b, d, c, a);
            case "informationSlide":
                return new Zg(b, d, c);
            case "hotspotQuestion":
                return new Pg(b, d, c);
            case "likertScaleQuestion":
                return new Sg(b, d, c);
            case "wordBankQuestion":
                return new jh(b, d, c);
            case "typeInQuestion":
                return new Bh(b, d, c);
            case "numericQuestion":
                return new Dh(b, d, c);
            case "sequenceQuestion":
                return new sh(b, d, c);
            case "rankingQuestion":
                return new uh(b, d, c);
            case "essayQuestion":
                return new Ch(b,
                    d, c);
            case "shortAnswerQuestion":
                return new $g(b, d, c);
            case "numericSurveyQuestion":
                return new ah(b, d, c);
            case "introSlide":
                return new Eh(b, d, c);
            case "resultSlide":
                return new th(b, d, c);
            case "fillInTheBlankQuestion":
                return new Ah(b, d, c);
            case "fillInTheBlankSurveyQuestion":
                return new gh(b, d, c);
            case "whichWordQuestion":
                return new xh(b, d, c);
            case "multipleChoiceTextQuestion":
                return new dh(b, d, c);
            case "multipleChoiceQuestion":
                return new Tg(b, d, c);
            case "multipleResponseQuestion":
                return new kh(b, d, c);
            case "multipleChoiceTextSurveyQuestion":
                return new Yg(b,
                    d, c);
            case "pickOneQuestion":
                return new lh(b, d, c);
            case "pickManyQuestion":
                return new Jg(b, d, c);
            case "trueFalseQuestion":
                return new Ug(b, d, c);
            case "yesNoQuestion":
                return new mh(b, d, c);
            case "matchingQuestion":
                return new Ih(b, d, c);
            case "matchingSurveyQuestion":
                return new Jh(b, d, c);
            default:
                throw Error("unknown slide type");
        }
    }

    function Lh(a, b) {
        var c = a.Ob,
            d = c.id() == b ? c : null;
        c.forEach(function(a) {
            a.id() == b && (d = a)
        });
        if (!d) throw Error("can't find slide with id: " + b);
        return d
    };

    function V(a, b, c) {
        this.a = a;
        this.l = b;
        this.ya = c;
        this.Ff = new q;
        this.Te = new q;
        a.o(b, "quizStateChanged", this.Bh, this);
        a.o(b, "currentSlideChanged", this.yh, this);
        c = this.ya.Ob;
        b = new Kh(b, c);
        this.Wh = oh(b, a, c);
        if (c = this.ya.ff) this.lh = oh(b, a, c)
    }
    V.prototype.b = function() {
        return this.l
    };
    V.prototype.quizState = function() {
        return this.a.c(this.b(), "getQuizState")
    };
    V.prototype.quizState = V.prototype.quizState;
    V.prototype.sk = function() {
        return this.a.c(this.b(), "getTestDuration")
    };
    V.prototype.testDuration = V.prototype.sk;
    V.prototype.quiz = function() {
        return this.ya
    };
    V.prototype.quiz = V.prototype.quiz;
    V.prototype.settings = function() {
        return this.ya.settings()
    };
    V.prototype.settings = V.prototype.settings;
    V.prototype.gk = function() {
        return this.Wh
    };
    V.prototype.slidePoolState = V.prototype.gk;
    V.prototype.pj = function() {
        return this.lh
    };
    V.prototype.introSlideState = V.prototype.pj;
    V.prototype.Qj = function() {
        return this.Rh
    };
    V.prototype.resultSlideState = V.prototype.Qj;
    V.prototype.Ci = function() {};
    V.prototype.authorizationFormSlideState = V.prototype.Ci;
    V.prototype.Bh = function(a) {
        if ("inProgress" == a) {
            var b = this.a.c(this.b(), "getResultSlideId");
            if (b) {
                var c = new Kh(this.b(), this.ya.Ob),
                    b = this.cf(b);
                this.Rh = oh(c, this.a, b)
            }
        }
        this.Ff.i(a)
    };
    V.prototype.yh = function() {
        this.Te.i()
    };
    V.prototype.quizStateChangeEvent = function() {
        return this.Ff
    };
    V.prototype.quizStateChangeEvent = V.prototype.quizStateChangeEvent;
    V.prototype.currentSlideChangeEvent = function() {
        return this.Te
    };
    V.prototype.currentSlideChangeEvent = V.prototype.currentSlideChangeEvent;

    function Mh(a, b, c) {
        V.call(this, a, b, c)
    }
    n(Mh, V);
    Mh.prototype.cf = function(a) {
        var b = this.quiz().Lf;
        if (b && b.id() == a) return b;
        throw Error("invalid result slide id");
    };

    function Nh(a, b) {
        if (!l(a) && !l(b)) throw Error("one of score or percent must be undefined");
        if (l(a) && l(b)) throw Error("either score or percent must be NaN");
        this.pa = l(a) ? Math.floor(100 * a) / 100 : void 0;
        this.Ka = l(b) ? Math.floor(1E4 * b) / 1E4 : void 0
    }
    Nh.prototype.ia = function() {
        return this.pa
    };
    Nh.prototype.score = Nh.prototype.ia;
    Nh.prototype.Ba = function() {
        return this.Ka
    };
    Nh.prototype.percent = Nh.prototype.Ba;
    Nh.prototype.xb = function(a) {
        l(a) && (this.Ka = a, this.pa = void 0)
    };

    function Oh() {}
    Oh.prototype.Ia = !1;
    Oh.prototype.bh = [];
    Oh.prototype.enabled = function() {
        return this.Ia
    };
    Oh.prototype.enabled = Oh.prototype.enabled;
    Oh.prototype.Oc = function(a) {
        this.Ia = a
    };
    Oh.prototype.ng = function() {
        return this.bh
    };
    Oh.prototype.fields = Oh.prototype.ng;

    function S() {
        this.Sc = new Oh
    }
    g = S.prototype;
    g.Df = "eachQuestion";
    g.Vh = !1;
    g.Me = !1;
    g.Pg = !1;
    g.Ge = !0;
    g.Od = function() {
        return this.lm
    };
    S.prototype.i18n = S.prototype.Od;
    S.prototype.we = function() {
        return this.mi
    };
    S.prototype.timeLimit = S.prototype.we;
    S.prototype.Lj = function() {
        return this.Df
    };
    S.prototype.questionsSubmitType = S.prototype.Lj;
    S.prototype.Ad = function() {
        return this.Sc
    };
    S.prototype.authorizationFormSettings = S.prototype.Ad;
    S.prototype.Xj = function() {
        return this.Vh
    };
    S.prototype.sendResultsToStudentEmailEnabled = S.prototype.Xj;
    S.prototype.Fi = function() {
        return this.Me
    };
    S.prototype.branchingEnabled = S.prototype.Fi;
    S.prototype.ui = function() {
        return this.Pg
    };
    S.prototype.allowQuestionPostponing = S.prototype.ui;
    S.prototype.vi = function() {
        return this.Ge
    };
    S.prototype.allowSlideSkipping = S.prototype.vi;
    S.prototype.le = function() {
        return this.mm
    };
    S.prototype.skin = S.prototype.le;

    function Ph() {
        this.wf = "byQuiz";
        this.Sc = new Oh
    }
    n(Ph, S);
    Ph.prototype.Je = 1;
    Ph.prototype.Ej = function() {
        return this.wf
    };
    Ph.prototype.passingScoreType = Ph.prototype.Ej;
    Ph.prototype.passingScore = function() {
        return this.Ya
    };
    Ph.prototype.passingScore = Ph.prototype.passingScore;
    Ph.prototype.lc = function(a) {
        this.Ya = a
    };
    Ph.prototype.je = function(a) {
        this.Ya ? this.Ya.xb(a) : this.Ya = new Nh(void 0, a)
    };
    Ph.prototype.setPassingPercent = Ph.prototype.je;
    Ph.prototype.yi = function() {
        return this.Je
    };
    Ph.prototype.attemptsCount = Ph.prototype.yi;

    function Qh(a, b) {
        R.call(this, a, b)
    }
    n(Qh, R);
    Qh.prototype.type = function() {
        return "graded"
    };
    Qh.prototype.type = Qh.prototype.type;
    Qh.prototype.Gb = function(a, b) {
        Qh.Ta.Gb.call(this, a, b);
        var c = a.c(this.b(), "getPassedResultSlideId");
        c && (this.vf = $f(b, a, c, "resultSlide"));
        if (c = a.c(this.b(), "getFailedResultSlideId")) this.$e = $f(b, a, c, "resultSlide")
    };
    Qh.prototype.Wa = function(a) {
        this.ca = new Ph;
        var b = a.c(this.b(), "getGradedSettings"),
            c = b.passingScoreData,
            c = new Nh(isNaN(c.score) ? void 0 : c.score, isNaN(c.percent) ? void 0 : c.percent),
            d = b.passingScoreType ? b.passingScoreType : "byQuiz";
        this.ca.Je = b.attemptsCount;
        this.ca.lc(c);
        this.ca.wf = d;
        Qh.Ta.Wa.call(this, a)
    };
    Qh.prototype.Nj = function() {
        return this.vf
    };
    Qh.prototype.quizPassedResultSlide = Qh.prototype.Nj;
    Qh.prototype.Mj = function() {
        return this.$e
    };
    Qh.prototype.quizFailedResultSlide = Qh.prototype.Mj;

    function Rh(a, b, c) {
        V.call(this, a, b, c)
    }
    n(Rh, V);
    Rh.prototype.cf = function(a) {
        var b = this.quiz(),
            c = b.vf,
            b = b.$e;
        if (c && c.id() == a) return c;
        if (b && b.id() == a) return b;
        throw Error("invalid result slide id");
    };
    Rh.prototype.quizPassed = function() {
        return this.a.c(this.b(), "getQuizPassed")
    };
    Rh.prototype.quizPassed = Rh.prototype.quizPassed;
    Rh.prototype.ta = function() {
        return this.a.c(this.b(), "getMaxScore")
    };
    Rh.prototype.maxScore = Rh.prototype.ta;
    Rh.prototype.Tb = function() {
        return this.a.c(this.b(), "getAwardedScore")
    };
    Rh.prototype.awardedScore = Rh.prototype.Tb;
    Rh.prototype.Di = function() {
        return this.a.c(this.b(), "getAwardedPercent")
    };
    Rh.prototype.awardedPercent = Rh.prototype.Di;
    Rh.prototype.je = function(a) {
        this.a.c(this.b(), "setPassingPercent", a)
    };
    Rh.prototype.setPassingPercent = Rh.prototype.je;

    function Sh(a) {
        this.Z = a
    }
    Sh.prototype.name = function() {
        return this.Z
    };
    Sh.prototype.extend = function(a) {
        return new Sh(this.Z + "." + a)
    };

    function Th() {}
    Th.prototype.bg = !1;
    Th.prototype.suspend = function() {
        this.bg = !0
    };
    Th.prototype.suspend = Th.prototype.suspend;
    Th.prototype.suspended = function() {
        return this.bg
    };
    Th.prototype.suspended = Th.prototype.suspended;

    function W(a, b) {
        this.a = a;
        this.b = Uh;
        this.ih = b;
        this.Ve = new He(a, this.b);
        var c = this.a.c(this.b, "getQuizType"),
            d = this.a.c(this.b, "getQuizName"),
            d = this.b.extend(d);
        this.ya = "graded" == c ? new Qh(this.a, d) : new yg(this.a, d);
        this.Rb();
        this.Fb = new q;
        this.Ha = new q;
        this.Pa = new q;
        this.Oa = new q;
        a.o(this.b, "currentSessionChangedEvent", this.gd, this);
        a.o(this.b, "closeWindowEvent", this.Hb, this);
        a.o(this.b, "initialSessionStateRequestEvent", this.hd, this);
        a.o(this.b, "stateChangedEvent", this.Jb, this);
        a.o(this.b, "startupCompletedEvent",
            this.kb, this);
        a.o(this.b, "getLaunchMode", this.Ib, this)
    }
    var Uh = new Sh("quizplayer");
    W.prototype.Y = null;
    W.prototype.Rb = function() {
        var a = this.a.c(this.b, "getCurrentSessionName");
        null === a ? this.Y = null : (a = this.b.extend(a), "graded" == this.ya.type() ? this.Y = new Rh(this.a, a, this.ya) : this.Y = new Mh(this.a, a, this.ya), this.Ve.Pf.push(this.Y))
    };
    W.prototype.gd = function() {
        var a = this.Y;
        this.Rb();
        this.Fb.i(this.Y, a)
    };
    W.prototype.currentSession = function() {
        return this.Y
    };
    W.prototype.currentSession = W.prototype.currentSession;
    W.prototype.currentSessionChangedEvent = function() {
        return this.Fb
    };
    W.prototype.currentSessionChangedEvent = W.prototype.currentSessionChangedEvent;
    W.prototype.Hb = function() {
        var a = new Th;
        this.Ha.i(a);
        a.suspended() || Dc();
        return !0
    };
    W.prototype.Xb = function() {
        return this.Ha
    };
    W.prototype.closeWindowEvent = W.prototype.Xb;
    W.prototype.Yj = function() {
        return this.Ve
    };
    W.prototype.sessionDetailsGenerator = W.prototype.Yj;
    W.prototype.restoreState = function() {};
    W.prototype.restoreState = W.prototype.restoreState;
    W.prototype.persistState = function() {
        return this.a.c(this.b, "persistState")
    };
    W.prototype.persistState = W.prototype.persistState;
    W.prototype.hd = function() {
        return this.ih
    };
    W.prototype.Jb = function() {
        this.Pa.i(new Pd)
    };
    W.prototype.stateChangedEvent = function() {
        return this.Pa
    };
    W.prototype.stateChangedEvent = W.prototype.stateChangedEvent;
    W.prototype.kb = function() {
        this.Oa.i()
    };
    W.prototype.Ib = function() {
        return window.launchMode
    };
    W.prototype.qe = function() {
        return this.a.c(this.b, "getStartupCompleted")
    };
    W.prototype.startupCompleted = W.prototype.qe;
    W.prototype.startupCompletedEvent = function() {
        return this.Oa
    };
    W.prototype.startupCompletedEvent = W.prototype.startupCompletedEvent;
    W.prototype.ke = function(a, b) {
        this.a.c(this.b, "setUserInfo", a, b)
    };
    W.prototype.setUserInfo = W.prototype.ke;

    function X(a, b, c) {
        this.f = a;
        this.S = c;
        this.Rf = new q;
        this.Yf = new q;
        this.xf = new q;
        var d = this;
        Vh[b] = function() {
            d.Rf.i(d.I())
        };
        Wh[b] = function(a) {
            d.Yf.i(a)
        };
        Xh[b] = function() {
            d.xf.i()
        };
        this.Xg = new I(this.f, b);
        this.Ef = {};
        this.Of = {};
        this.$h = new De(this.f, b)
    }
    X.prototype.I = function() {
        return this.f.presentationPlaybackController_currentSlideIndex()
    };
    X.prototype.currentSlideIndex = X.prototype.I;
    X.prototype.play = function() {
        if (0 > this.I()) throw Error("Invalid slide index");
        this.f.presentationPlaybackController_play()
    };
    X.prototype.play = X.prototype.play;
    X.prototype.pause = function() {
        this.f.presentationPlaybackController_pause()
    };
    X.prototype.pause = X.prototype.pause;
    X.prototype.gc = function(a, b) {
        b = l(b) ? b : !0;
        this.f.presentationPlaybackController_gotoSlide(a, b)
    };
    X.prototype.gotoSlide = X.prototype.gc;
    X.prototype.bc = function(a) {
        a = l(a) ? a : !0;
        this.f.presentationPlaybackController_gotoLastSlideViewed(a)
    };
    X.prototype.gotoLastSlideViewed = X.prototype.bc;
    X.prototype.qb = function() {
        return this.f.presentationPlaybackController_getFirstSlideIndex()
    };
    X.prototype.firstSlideIndex = X.prototype.qb;
    X.prototype.rb = function() {
        return this.f.presentationPlaybackController_getLastSlideIndex()
    };
    X.prototype.lastSlideIndex = X.prototype.rb;
    X.prototype.$b = function(a) {
        a = l(a) ? a : !0;
        this.f.presentationPlaybackController_gotoFirstSlide(a)
    };
    X.prototype.gotoFirstSlide = X.prototype.$b;
    X.prototype.ac = function(a) {
        a = l(a) ? a : !0;
        this.f.presentationPlaybackController_gotoLastSlide(a)
    };
    X.prototype.gotoLastSlide = X.prototype.ac;
    X.prototype.cc = function(a) {
        a = l(a) ? a : !0;
        if (0 > this.I()) throw Error("current slide is null");
        this.f.presentationPlaybackController_gotoNextSlide(a)
    };
    X.prototype.gotoNextSlide = X.prototype.cc;
    X.prototype.ec = function(a) {
        a = l(a) ? a : !0;
        if (0 > this.I()) throw Error("current slide is null");
        this.f.presentationPlaybackController_gotoPreviousSlide(a)
    };
    X.prototype.gotoPreviousSlide = X.prototype.ec;
    X.prototype.dc = function() {
        this.f.presentationPlaybackController_gotoNextStep()
    };
    X.prototype.gotoNextStep = X.prototype.dc;
    X.prototype.hc = function(a, b, c, d) {
        d = l(d) ? d : !1;
        this.f.presentationPlaybackController_gotoTimestamp(a, b, c, d)
    };
    X.prototype.gotoTimestamp = X.prototype.hc;
    X.prototype.vb = function() {
        return this.f.presentationPlaybackController_getPreviousSlideIndex()
    };
    X.prototype.previousSlideIndex = X.prototype.vb;
    X.prototype.fc = function() {
        this.f.presentationPlaybackController_gotoPreviousStep()
    };
    X.prototype.gotoPreviousStep = X.prototype.fc;
    X.prototype.sb = function() {
        return this.f.presentationPlaybackController_getNextSlideIndex()
    };
    X.prototype.nextSlideIndex = X.prototype.sb;
    X.prototype.playbackState = function() {
        return this.f.presentationPlaybackController_getPlaybackState()
    };
    X.prototype.playbackState = X.prototype.playbackState;
    X.prototype.Ra = function() {
        return this.Xg
    };
    X.prototype.clock = X.prototype.Ra;
    X.prototype.pb = function() {
        if (0 > this.I()) throw Error("Current slide is undefined");
        return this.S.Sa(this.I())
    };
    X.prototype.currentSlide = X.prototype.pb;
    var Vh = {};
    m("ispring.as3proxy.presenter.player.PresentationPlaybackController.onSlideChangeHandlers", Vh, void 0);
    var Wh = {};
    m("ispring.as3proxy.presenter.player.PresentationPlaybackController.onStepChangeHandlers", Wh, void 0);
    X.prototype.Ab = function() {
        return this.Rf
    };
    X.prototype.slideChangeEvent = X.prototype.Ab;
    X.prototype.Db = function() {
        return this.Yf
    };
    X.prototype.stepChangeEvent = X.prototype.Db;
    var Xh = {};
    m("ispring.as3proxy.presenter.player.PresentationPlaybackController.onPlaybackCompleteHandlers", Xh, void 0);
    X.prototype.tb = function() {
        return this.xf
    };
    X.prototype.playbackCompleteEvent = X.prototype.tb;

    function Yh(a, b) {
        var c = null;
        be(a.f, b, function(a) {
            c = a
        });
        return c
    }
    X.prototype.jc = function() {
        var a = this.I(),
            b = this.Ef[a];
        b || (b = new W(Yh(this, "quizConnection_" + a)), this.Ef[a] = b);
        return b
    };
    X.prototype.quizPlayer = X.prototype.jc;
    X.prototype.kc = function() {
        var a = this.I(),
            b = this.Of[a];
        if (!b) {
            var c = this.f,
                d = "scenarioConnection_" + a,
                e;
            fe(c, d, function(a) {
                e = a
            }, function() {
                return new Ge(c, d)
            });
            b = new L(e);
            this.Of[a] = b
        }
        return b
    };
    X.prototype.scenarioPlayer = X.prototype.kc;
    X.prototype.Bb = function() {
        return this.$h
    };
    X.prototype.slideTransitionController = X.prototype.Bb;

    function Y(a, b, c) {
        this.f = a;
        this.M = new X(this.f, b, c);
        this.Oh = new F(this.M, this.f, b);
        this.ai = new G(this.f, b)
    }
    Y.prototype.yg = function() {
        return this.M
    };
    Y.prototype.playbackController = Y.prototype.yg;
    Y.prototype.Cg = function() {
        return this.Oh
    };
    Y.prototype.restrictedPlaybackController = Y.prototype.Cg;
    Y.prototype.soundController = function() {
        return this.ai
    };
    Y.prototype.soundController = Y.prototype.soundController;
    Y.prototype.displayObject = function() {
        return this.f
    };
    Y.prototype.displayObject = Y.prototype.displayObject;
    Y.prototype.width = function() {
        return this.f.presentationView_getWidth()
    };
    Y.prototype.width = Y.prototype.width;
    Y.prototype.height = function() {
        return this.f.presentationView_getHeight()
    };
    Y.prototype.height = Y.prototype.height;
    Y.prototype.resize = function(a, b) {
        this.f.presentationView_resize(a, b)
    };
    Y.prototype.resize = Y.prototype.resize;
    Y.prototype.setOverlayDisplayed = function() {};
    Y.prototype.setOverlayDisplayed = Y.prototype.setOverlayDisplayed;

    function Z(a, b, c) {
        this.f = a;
        this.D = b;
        this.lb = new E(this.f);
        this.si = new Y(this.f, this.D, this.lb.Cb());
        this.Uf = new q;
        this.Oa = new q;
        this.kh = new q;
        this.Ha = new q;
        this.Pa = new q;
        var d = this;
        Zh[this.D] = function(a) {
            var b = new r(new $h(d.f, d));
            b.Nc(a.autoStart);
            b.Eg(a.action);
            b.Gg(a.slideIndex);
            b.Ja = !1;
            d.Uf.i(b);
            b.Ja ? (a.action = b.action(), a.autoStart = b.autoStart(), a.slideIndex = b.slideIndex()) : a = void 0;
            return a
        };
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_onPresentationStartup", "ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationStartupHandlers." +
            this.D);
        ai[this.D] = function(a, b, c) {
            d.Oa.i(a, b, c)
        };
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_onPresentationStartupCompleted", "ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationStartupCompletedHandlers." + this.D);
        this.lf = new nd(this.lb);
        bi[this.D] = function(a) {
            d.lf.Ze.i(new zd(a))
        };
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_onExecuteMetaCommand", "ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationExecuteMetaCommandsHandlers." +
            this.D);
        ci[this.D] = Ca(this.Hb, this);
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_closeWindow", "ispring.as3proxy.presenter.player.PresentationPlayer.onCloseWindowHandlers." + this.D);
        di[this.D] = Ca(this.Ib, this);
        this.f.presentationPlayer_setEventListener("getLaunchMode", "ispring.as3proxy.presenter.player.PresentationPlayer.onGetLaunchMode." + this.D);
        ei[this.D] = function() {
            return c
        };
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_restoreState", "ispring.as3proxy.presenter.player.PresentationPlayer.onRestorePresentationStateHandlers." +
            this.D);
        fi[this.D] = function() {
            d.Jb()
        };
        this.f.presentationPlayer_setEventListener("presentationPlayerListener_stateChanged", "ispring.as3proxy.presenter.player.PresentationPlayer.onStateChangedHandlers." + this.D);
        this.Rg = new Wc;
        this.pi = new Vc
    }
    var Zh = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationStartupHandlers", Zh, void 0);
    var ai = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationStartupCompletedHandlers", ai, void 0);
    var bi = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onPresentationExecuteMetaCommandsHandlers", bi, void 0);
    var ci = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onCloseWindowHandlers", ci, void 0);
    var di = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onGetLaunchMode", di, void 0);
    var ei = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onRestorePresentationStateHandlers", ei, void 0);
    var fi = {};
    m("ispring.as3proxy.presenter.player.PresentationPlayer.onStateChangedHandlers", fi, void 0);
    Z.prototype.zg = function() {
        return this.lb
    };
    Z.prototype.presentation = Z.prototype.zg;
    Z.prototype.view = function() {
        return this.si
    };
    Z.prototype.view = Z.prototype.view;
    Z.prototype.version = function() {
        return this.f.presentationPlayer_getVersion()
    };
    Z.prototype.version = Z.prototype.version;
    Z.prototype.kk = function() {
        return this.Uf
    };
    Z.prototype.startupEvent = Z.prototype.kk;
    Z.prototype.startupCompletedEvent = function() {
        return this.Oa
    };
    Z.prototype.startupCompletedEvent = Z.prototype.startupCompletedEvent;
    Z.prototype.kj = function() {
        return this.kh
    };
    Z.prototype.initialSlideShownEvent = Z.prototype.kj;
    Z.prototype.Gd = function() {
        return this.lf.Gd()
    };
    Z.prototype.executeMetaCommandEvent = Z.prototype.Gd;
    Z.prototype.Xb = function() {
        return this.Ha
    };
    Z.prototype.closeWindowEvent = Z.prototype.Xb;
    Z.prototype.Ai = function() {
        return this.Rg
    };
    Z.prototype.audioNarrationController = Z.prototype.Ai;
    Z.prototype.vk = function() {
        return this.pi
    };
    Z.prototype.videoNarrationController = Z.prototype.vk;
    Z.prototype.Hb = function() {
        var a = new Pd;
        this.Ha.i(a);
        a.actionPrevented() || Dc();
        return !0
    };
    Z.prototype.Ib = function() {
        return window.launchMode
    };
    Z.prototype.persistState = function() {
        return this.f.presentationPlayer_persistState()
    };
    Z.prototype.persistState = Z.prototype.persistState;
    Z.prototype.Jb = function() {
        this.Pa.i(new Pd)
    };
    Z.prototype.stateChangedEvent = function() {
        return this.Pa
    };
    Z.prototype.stateChangedEvent = Z.prototype.stateChangedEvent;

    function $h(a, b) {
        this.f = a;
        this.Lb = b
    }
    $h.prototype.Af = !1;
    $h.prototype.start = function(a, b) {
        if (this.Af) throw Error("presentation was already started");
        a = Ab(a, this.Lb.lb.Cb().count() - 1);
        this.f.presentationPlayer_startupControllerStart(a, b)
    };
    $h.prototype.start = $h.prototype.start;
    $h.prototype.resume = function(a, b) {
        if (this.Af) throw Error("presentation was already started");
        a = Ab(a, this.Lb.lb.Cb().count() - 1);
        this.f.presentationPlayer_startupControllerResume(a, b)
    };
    $h.prototype.resume = $h.prototype.resume;

    function gi(a) {
        return Ua(a, function(a) {
            return ua(a) ? Array.prototype.slice.call(a) : wa(a) ? gi(a) : a
        })
    };

    function hi(a, b, c) {
        this.uf = "string" == typeof b ? document.getElementById(b) : b;
        this.Lb = "string" == typeof c ? document.getElementById(c) : c;
        this.vc = {};
        this.Na = {};
        ii[a] = this;
        ji = a
    }
    var ji, ii = {};
    hi.prototype.zc = 0;
    hi.prototype.sc = 0;

    function ki(a) {
        l(a) || (a = ji);
        return ii[a]
    }

    function li(a, b, c, d, e) {
        a = ki(a);
        var f = {
                resizable: !0,
                statusbar: !1,
                toolbar: !1,
                location: !1,
                scrollbars: !1,
                menubar: !1
            },
            h = d || e;
        l(d) && l(e) ? h && (f.width = Math.max(d, 100), f.height = Math.max(e, 100)) : (f.width = screen.availWidth, f.height = screen.availHeight, f.top = 0, f.left = 0);
        a.vc[b] = Ac(c, f)
    }
    m("ispring.as3proxy.presenter.player.webobjects.WebObjectsConnector.showWebObjectInNewWindow", li, void 0);

    function mi(a, b, c) {
        a = ki(a);
        var d = document.createElement("iframe");
        d.style.position = "absolute";
        d.style.backgroundColor = "#ffffff";
        d.src = c;
        d.id = b;
        d.style.left = "0";
        d.style.top = "0";
        d.style.margin = a.zc + "px 0 0 " + a.sc + "px";
        d.setAttribute("allowFullScreen", "");
        a.uf.appendChild(d);
        try {
            d.contentWindow.ispringPresentationPlayer = a.Kh
        } catch (e) {}
        d.style.border = 0;
        a.Na[b] = d
    }
    m("ispring.as3proxy.presenter.player.webobjects.WebObjectsConnector.showWebObject", mi, void 0);

    function ni(a, b) {
        var c = ki(a);
        null != c.vc[b] ? (c.vc[b].close(), delete c.vc[b]) : null != c.Na[b] && (c.uf.removeChild(c.Na[b]), delete c.Na[b])
    }
    m("ispring.as3proxy.presenter.player.webobjects.WebObjectsConnector.closeWebObject", ni, void 0);

    function oi(a, b, c, d, e, f) {
        var h = ki(a);
        a = h.Lb.clientWidth;
        var k = h.Lb.clientHeight;
        b = h.Na[b];
        Zb(b, Math.round(c * a), Math.round(d * k));
        ac(b, Math.round(e * a), Math.round(f * k))
    }
    m("ispring.as3proxy.presenter.player.webobjects.WebObjectsConnector.setWebObjectPosition", oi, void 0);
    hi.prototype.setPosition = function(a, b) {
        for (var c in this.Na) this.Na.hasOwnProperty(c) && (this.Na[c].style.margin = b + "px 0 0 " + a + "px");
        this.sc = a;
        this.zc = b
    };
    m("ispring_webObject_showInNewWindow", function(a, b, c, d, e) {
        li(void 0, a, b, d, e)
    }, void 0);
    m("ispring_webObject_show", function(a, b) {
        mi(void 0, a, b)
    }, void 0);
    m("ispring_webObject_close", function(a) {
        ni(void 0, a)
    }, void 0);
    m("ispring_webObject_setPosition", function(a, b, c, d, e) {
        oi(void 0, a, b, c, d, e)
    }, void 0);

    function pi(a, b) {
        this.td = window.swfobject;
        this.td.switchOffAutoHideShow();
        this.dh = a;
        this.Vf = b;
        this.zf = new q
    }
    pi.prototype.Xa = "";
    pi.prototype.load = function(a, b, c, d, e, f) {
        if (this.td.hasFlashPlayerVersion("10.1.0")) {
            a += window.location.search;
            var h = Ca(this.nh, this, a, b, c, d, e, f);
            if (this.Vf) {
                var k = this;
                this.Vf(function() {
                    k.kb.apply(k, [].concat(arguments instanceof Array ? arguments : ja(ia(arguments))));
                    h()
                })
            } else h()
        } else try {
            location.replace(this.dh)
        } catch (t) {}
    };
    pi.prototype.load = pi.prototype.load;
    pi.prototype.Hj = function() {
        return this.zf
    };
    pi.prototype.playerPositionChangedEvent = pi.prototype.Hj;
    g = pi.prototype;
    g.kb = function() {};
    g.nh = function(a, b, c, d, e, f) {
        this.ma && (this.Xa = "", this.ma.innerHTML = "");
        if ("string" == typeof b)
            if (b = document.getElementById(b)) this.ma = b;
            else return;
        else this.ma = b;
        this.ma.style.position = "absolute";
        Zb(this.ma, 0, 0);
        b = 1 == Cc().fit_content;
        if ((this.bf = !l(d) || !l(e)) || b) d = qi() || 720, e = ri() || 540;
        this.Xa = c;
        b = document.createElement("div");
        b.setAttribute("id", c);
        this.ma.appendChild(b);
        void 0 === f && (f = "");
        f = {
            id: c,
            resume: f
        };
        c = {
            id: c,
            name: c,
            style: "position:absolute",
            wmodefixed: "true",
            wmode: tc && qb ? "window" : ""
        };
        this.td.embedSWF(a,
            b.getAttribute("id"), d, e, "10.1.0", !1, f, {
                allowscriptaccess: "sameDomain",
                allowfullscreen: !0,
                allowFullScreenInteractive: !0,
                salign: "lt",
                wmode: "opaque"
            }, c, Ca(this.ii, this))
    };
    g.ii = function(a) {
        this.Kb(a.ref)
    };
    g.Kb = function(a) {
        this.va = a;
        window.onresize = Ca(this.ig, this);
        this.ig()
    };
    g.ig = function() {
        var a = qi(),
            b = ri();
        ac(this.ma, a, b);
        if (this.bf) a && b && (this.va.width = a + "px", this.va.height = b + "px");
        else {
            var c = Math.max(0, Math.floor((a - this.va.width) / 2)),
                d = Math.max(0, Math.floor((b - this.va.height) / 2));
            Zb(this.va, c, d);
            this.kd(c, d);
            this.ma.style.overflow = a >= this.va.width && b >= this.va.height ? "hidden" : "auto"
        }
        lb && 9 > parseInt(sb, 10) && (this.va.style.border = "1px solid transparent", Bc(function() {
            this.va.style.border = ""
        }, this))
    };
    g.kd = function(a, b) {
        this.zf.i(a, b)
    };

    function qi() {
        return window.innerWidth ? window.innerWidth : "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetWidth ? document.documentElement.offsetWidth : document.body.offsetWidth
    }

    function ri() {
        return window.innerHeight ? window.innerHeight : "CSS1Compat" == document.compatMode && document.documentElement && document.documentElement.offsetHeight ? document.documentElement.offsetHeight : document.body.offsetHeight
    };

    function si(a) {
        this.Hc = a
    }
    si.prototype.set = function(a, b) {
        l(b) ? this.Hc.set(a, (new nc(void 0)).eb(b)) : this.Hc.remove(a)
    };
    si.prototype.get = function(a) {
        var b;
        try {
            b = this.Hc.get(a)
        } catch (c) {
            return
        }
        if (null !== b) try {
            return mc(b)
        } catch (c) {
            throw "Storage: Invalid value was encountered";
        }
    };
    si.prototype.remove = function(a) {
        this.Hc.remove(a)
    };

    function ti() {};

    function ui() {}
    n(ui, ti);
    ui.prototype.set = function() {};
    ui.prototype.get = function() {
        return null
    };
    ui.prototype.remove = function() {};

    function vi() {}
    n(vi, ti);
    vi.prototype.clear = function() {
        var a = hc(this.Ea(!0)),
            b = this;
        Za(a, function(a) {
            b.remove(a)
        })
    };

    function wi(a, b) {
        this.ic = a;
        this.ub = b + "::"
    }
    n(wi, vi);
    wi.prototype.set = function(a, b) {
        this.ic.set(this.ub + a, b)
    };
    wi.prototype.get = function(a) {
        return this.ic.get(this.ub + a)
    };
    wi.prototype.remove = function(a) {
        this.ic.remove(this.ub + a)
    };
    wi.prototype.Ea = function(a) {
        var b = this.ic.Ea(!0),
            c = this,
            d = new dc;
        d.next = function() {
            for (var d = b.next(); d.substr(0, c.ub.length) != c.ub;) d = b.next();
            return a ? d.substr(c.ub.length) : c.ic.get(d)
        };
        return d
    };

    function xi(a) {
        this.la = a
    }
    n(xi, vi);
    g = xi.prototype;
    g.Pd = function() {
        if (!this.la) return !1;
        try {
            return this.la.setItem("__sak", "1"), this.la.removeItem("__sak"), !0
        } catch (a) {
            return !1
        }
    };
    g.set = function(a, b) {
        try {
            this.la.setItem(a, b)
        } catch (c) {
            if (0 == this.la.length) throw "Storage mechanism: Storage disabled";
            throw "Storage mechanism: Quota exceeded";
        }
    };
    g.get = function(a) {
        a = this.la.getItem(a);
        if (!va(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.remove = function(a) {
        this.la.removeItem(a)
    };
    g.Ea = function(a) {
        var b = 0,
            c = this.la,
            d = new dc;
        d.next = function() {
            if (b >= c.length) throw cc;
            var d = c.key(b++);
            if (a) return d;
            d = c.getItem(d);
            if (!va(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    g.clear = function() {
        this.la.clear()
    };
    g.key = function(a) {
        return this.la.key(a)
    };

    function yi() {
        var a = null;
        try {
            a = window.localStorage || null
        } catch (b) {}
        this.la = a
    }
    n(yi, xi);

    function zi(a, b) {
        this.Hg = a;
        this.P = null;
        if (lb && !(9 <= Number(xb))) {
            Ai || (Ai = new ic);
            this.P = Ai.get(a);
            this.P || (b ? this.P = document.getElementById(b) : (this.P = document.createElement("userdata"), this.P.addBehavior("#default#userData"), document.body.appendChild(this.P)), Ai.set(a, this.P));
            try {
                this.P.load(this.Hg)
            } catch (c) {
                this.P = null
            }
        }
    }
    n(zi, vi);
    var Bi = {
            ".": ".2E",
            "!": ".21",
            "~": ".7E",
            "*": ".2A",
            "'": ".27",
            "(": ".28",
            ")": ".29",
            "%": "."
        },
        Ai = null;

    function Ci(a) {
        return "_" + encodeURIComponent(a).replace(/[.!~*'()%]/g, function(a) {
            return Bi[a]
        })
    }
    g = zi.prototype;
    g.Pd = function() {
        return !!this.P
    };
    g.set = function(a, b) {
        this.P.setAttribute(Ci(a), b);
        Di(this)
    };
    g.get = function(a) {
        a = this.P.getAttribute(Ci(a));
        if (!va(a) && null !== a) throw "Storage mechanism: Invalid value was encountered";
        return a
    };
    g.remove = function(a) {
        this.P.removeAttribute(Ci(a));
        Di(this)
    };
    g.Ea = function(a) {
        var b = 0,
            c = this.P.XMLDocument.documentElement.attributes,
            d = new dc;
        d.next = function() {
            if (b >= c.length) throw cc;
            var d = c[b++];
            if (a) return decodeURIComponent(d.nodeName.replace(/\./g, "%")).substr(1);
            d = d.nodeValue;
            if (!va(d)) throw "Storage mechanism: Invalid value was encountered";
            return d
        };
        return d
    };
    g.clear = function() {
        for (var a = this.P.XMLDocument.documentElement, b = a.attributes.length; 0 < b; b--) a.removeAttribute(a.attributes[b - 1].nodeName);
        Di(this)
    };

    function Di(a) {
        try {
            a.P.save(a.Hg)
        } catch (b) {
            throw "Storage mechanism: Quota exceeded";
        }
    };

    function Ei(a) {
        a = Fi().get(a);
        return l(a) ? a : null
    }

    function Gi(a, b) {
        var c = Fi();
        try {
            c.set(a, b)
        } catch (d) {}
    }
    var Hi = null;

    function Fi() {
        if (!Hi) {
            var a = new yi;
            (a = a.Pd() ? new wi(a, "ispring") : null) || (a = new zi("ispring"), a = a.Pd() ? a : null);
            Hi = new si(a || new ui)
        }
        return Hi
    };

    function Ii(a) {
        pi.call(this, "data/flash-required.html", a)
    }
    n(Ii, pi);
    m("ispring.quiz.loader.FlashQuizLoader", Ii, void 0);
    m("ispring.quiz.flashapi.closeWindow", function() {
        Dc();
        return !0
    }, void 0);
    m("ispring.quiz.flashapi.loadState", function(a) {
        return Ei(a)
    }, void 0);
    m("ispring.quiz.flashapi.saveState", function(a, b) {
        Gi(a, b);
        return !0
    }, void 0);

    function Ji(a) {
        pi.call(this, "data/flash-required.html", a)
    }
    n(Ji, pi);
    m("ispring.presenter.loader.FlashPresentationLoader", Ji, void 0);
    Ji.prototype.kd = function(a, b) {
        Ji.Ta.kd.call(this, a, b);
        this.lg.setPosition(a, b)
    };
    Ji.prototype.Kb = function(a) {
        this.lg = new hi(this.Xa, this.ma, a);
        Ji.Ta.Kb.call(this, a)
    };
    m("ispring.presenter.flashapi.closeWindow", function() {
        Dc();
        return !0
    }, void 0);
    m("ispring.presenter.flashapi.loadState", function(a) {
        return Ei(a)
    }, void 0);
    m("ispring.presenter.flashapi.saveState", function(a, b) {
        Gi(a, b);
        return !0
    }, void 0);

    function Ki(a) {
        Ji.call(this, a);
        this.yf = new q
    }
    n(Ki, Ji);
    m("ispring.presenter.loader.FlashPresentationLoaderWithAPI", Ki, void 0);
    var Li = {};
    Ki.onPlayerInitHandlers = Li;
    Ki.prototype.kb = function(a) {
        if (this.rc = a) this.rc = gi(this.rc)
    };
    Ki.prototype.Kb = function(a) {
        Ki.Ta.Kb.call(this, a);
        Mi(this, a)
    };

    function Mi(a, b) {
        (a.f = b) && (Li[a.Xa] = function() {
            var b = new Z(a.f, a.Xa, a.rc);
            a.lg.Kh = b;
            a.yf.i(b)
        })
    }
    Ki.prototype.Gj = function() {
        return this.yf
    };
    Ki.prototype.playerInitEvent = Ki.prototype.Gj;
    Ki.prototype.Bj = function() {};
    Ki.prototype.onPlayerInit = Ki.prototype.Bj;
    Ki.prototype.cj = function() {
        return this.f
    };
    Ki.prototype.getMovie = Ki.prototype.cj;
    Ki.prototype.dj = function() {
        return this.Xa
    };
    Ki.prototype.getMovieId = Ki.prototype.dj;
    Ki.prototype.Ae = function() {
        this.Xa = "";
        this.ma.innerHTML = "";
        this.f = null
    };
    Ki.prototype.unload = Ki.prototype.Ae;
})();
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l, Q, E, B, J = false,
        a = false,
        n, G, m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();

    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }

    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }

    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }

    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }

    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }

    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }

    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }

    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }

    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }

    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }

    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }

    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }

    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }

    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }

    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }

    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }

    function C(X) {
        return j.createElement(X)
    }

    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }

    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }

    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }

    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }

    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();
       
	