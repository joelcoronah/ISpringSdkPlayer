(function() {
    var h, l = this;

    function p(a) {
        return void 0 !== a
    }

    function q(a, b, c) {
        a = a.split(".");
        c = c || l;
        a[0] in c || !c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) !a.length && p(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {}
    }

    function aa(a) {
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

    function ba(a) {
        var b = aa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function r(a) {
        return "string" == typeof a
    }

    function ca(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function da(a) {
        return a[ea] || (a[ea] = ++fa)
    }
    var ea = "closure_uid_" + (1E9 * Math.random() >>> 0),
        fa = 0;

    function ga(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ha(a, b, c) {
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

    function t(a, b, c) {
        t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ga : ha;
        return t.apply(null, arguments)
    }
    var ia = Date.now || function() {
        return +new Date
    };

    function u(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.g = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Sc = function(a, c, f) {
            for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
            return b.prototype[c].apply(a, d)
        }
    };

    function v() {}
    q("ispring.events.IEventDispatcher", v, void 0);
    v.prototype.addHandler = function() {};
    v.prototype.addHandler = v.prototype.addHandler;
    v.prototype.removeHandler = function() {};
    v.prototype.removeHandler = v.prototype.removeHandler;
    var ja = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };

    function ka(a) {
        if (!la.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(ma, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(na, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(oa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(pa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(qa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ra, "&#0;"));
        return a
    }
    var ma = /&/g,
        na = /</g,
        oa = />/g,
        pa = /"/g,
        qa = /'/g,
        ra = /\x00/g,
        la = /[\x00&<>"']/;

    function sa(a, b) {
        for (var c = 0, d = ja(String(a)).split("."), e = ja(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
            var k = d[g] || "",
                m = e[g] || "";
            do {
                k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                m = /(\d*)(\D*)(.*)/.exec(m) || ["", "", "", ""];
                if (0 == k[0].length && 0 == m[0].length) break;
                c = ta(0 == k[1].length ? 0 : parseInt(k[1], 10), 0 == m[1].length ? 0 : parseInt(m[1], 10)) || ta(0 == k[2].length, 0 == m[2].length) || ta(k[2], m[2]);
                k = k[3];
                m = m[3]
            } while (0 == c)
        }
        return c
    }

    function ta(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }

    function ua(a) {
        return String(a).replace(/\-([a-z])/g, function(a, c) {
            return c.toUpperCase()
        })
    }

    function va(a) {
        var b = r(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
        return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
            return b + e.toUpperCase()
        })
    };

    function wa(a, b) {
        for (var c in a) b.call(void 0, a[c], c, a)
    }

    function xa(a) {
        var b = 0,
            c;
        for (c in a) b++;
        return b
    }

    function ya(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }

    function za(a, b, c) {
        return null !== a && b in a ? a[b] : c
    }
    var Aa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ba(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Aa.length; f++) c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Ca = Array.prototype.indexOf ? function(a, b, c) {
            return Array.prototype.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (r(a)) return r(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        w = Array.prototype.forEach ? function(a, b, c) {
            Array.prototype.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = r(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Da = Array.prototype.filter ? function(a, b, c) {
            return Array.prototype.filter.call(a,
                b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = r(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var m = g[k];
                    b.call(c, m, k, a) && (e[f++] = m)
                }
            return e
        },
        Ea = Array.prototype.map ? function(a, b, c) {
            return Array.prototype.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = r(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        };

    function Fa(a, b) {
        var c;
        a: {
            c = a.length;
            for (var d = r(a) ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    c = e;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : r(a) ? a.charAt(c) : a[c]
    }

    function Ga(a) {
        return Array.prototype.concat.apply(Array.prototype, arguments)
    }

    function Ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ia(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (ba(d)) {
                var e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (var g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Ja(a, b, c, d) {
        Array.prototype.splice.apply(a, Ka(arguments, 1))
    }

    function Ka(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function La(a) {
        for (var b = {}, c = 0, d = 0; d < a.length;) {
            var e = a[d++],
                f;
            f = e;
            f = ca(f) ? "o" + da(f) : (typeof f).charAt(0) + f;
            Object.prototype.hasOwnProperty.call(b, f) || (b[f] = !0, a[c++] = e)
        }
        a.length = c
    };
    var x;
    a: {
        var Ma = l.navigator;
        if (Ma) {
            var Na = Ma.userAgent;
            if (Na) {
                x = Na;
                break a
            }
        }
        x = ""
    }

    function y(a) {
        return -1 != x.indexOf(a)
    };

    function Oa() {
        return y("iPhone") && !y("iPod") && !y("iPad")
    };

    function Pa(a, b) {
        var c = Qa;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ra = y("Opera"),
        z = y("Trident") || y("MSIE"),
        Sa = y("Edge"),
        A = y("Gecko") && !(-1 != x.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
        Ta = -1 != x.toLowerCase().indexOf("webkit") && !y("Edge");

    function Ua() {
        var a = l.document;
        return a ? a.documentMode : void 0
    }
    var Va;
    a: {
        var Wa = "",
            Xa = function() {
                var a = x;
                if (A) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (Sa) return /Edge\/([\d\.]+)/.exec(a);
                if (z) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ta) return /WebKit\/(\S+)/.exec(a);
                if (Ra) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Xa && (Wa = Xa ? Xa[1] : "");
        if (z) {
            var Ya = Ua();
            if (null != Ya && Ya > parseFloat(Wa)) {
                Va = String(Ya);
                break a
            }
        }
        Va = Wa
    }
    var Qa = {};

    function B(a) {
        return Pa(a, function() {
            return 0 <= sa(Va, a)
        })
    }
    var Za;
    var $a = l.document;
    Za = $a && z ? Ua() || ("CSS1Compat" == $a.compatMode ? parseInt(Va, 10) : 5) : void 0;
    z && B("9");
    !Ta || B("528");
    A && B("1.9b") || z && B("8") || Ra && B("9.5") || Ta && B("528");
    A && !B("8") || z && B("9");

    function ab() {};
    var bb = !z || 9 <= Number(Za);
    !A && !z || z && 9 <= Number(Za) || A && B("1.9.1");
    var cb = z && !B("9");

    function db(a, b) {
        wa(b, function(b, d) {
            "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : eb.hasOwnProperty(d) ? a.setAttribute(eb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
        })
    }
    var eb = {
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

    function fb(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!bb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', ka(g.name), '"');
            if (g.type) {
                f.push(' type="', ka(g.type), '"');
                var k = {};
                Ba(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = e.createElement(f);
        g && (r(g) ? f.className = g : "array" == aa(g) ? f.className = g.join(" ") : db(f, g));
        2 < d.length && gb(e, f, d);
        return f
    }

    function gb(a, b, c) {
        function d(c) {
            c && b.appendChild(r(c) ? a.createTextNode(c) : c)
        }
        for (var e = 2; e < c.length; e++) {
            var f = c[e];
            !ba(f) || ca(f) && 0 < f.nodeType ? d(f) : w(hb(f) ? Ha(f) : f, d)
        }
    }
    var ib = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        jb = {
            IMG: " ",
            BR: "\n"
        };

    function kb(a) {
        if (cb && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
        else {
            var b = [];
            lb(a, b, !0);
            a = b.join("")
        }
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        cb || (a = a.replace(/ +/g, " "));
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function lb(a, b, c) {
        if (!(a.nodeName in ib))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in jb) b.push(jb[a.nodeName]);
        else
            for (a = a.firstChild; a;) lb(a, b, c), a = a.nextSibling
    }

    function hb(a) {
        if (a && "number" == typeof a.length) {
            if (ca(a)) return "function" == typeof a.item || "string" == typeof a.item;
            if ("function" == aa(a)) return "function" == typeof a.item
        }
        return !1
    };

    function mb(a) {
        var b = {
            width: "1px",
            height: "1px",
            border: "0"
        };
        if (r(b))(b = nb(a, b)) && (a.style[b] = void 0);
        else
            for (var c in b) {
                var d = a,
                    e = b[c],
                    f = nb(d, c);
                f && (d.style[f] = e)
            }
    }
    var ob = {};

    function nb(a, b) {
        var c = ob[b];
        if (!c) {
            var d = ua(b),
                c = d;
            void 0 === a.style[d] && (d = (Ta ? "Webkit" : A ? "Moz" : z ? "ms" : Ra ? "O" : null) + va(d), void 0 !== a.style[d] && (c = d));
            ob[b] = c
        }
        return c
    };

    function pb(a, b) {
        if ("function" != aa(a))
            if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);
            else throw Error("Invalid listener argument");
        2147483647 < Number(b) || l.setTimeout(a, b || 0)
    };

    function qb(a) {
        return /^\s*$/.test(a) ? !1 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
    }

    function rb(a) {
        a = String(a);
        if (qb(a)) try {
            return eval("(" + a + ")")
        } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }

    function sb(a) {
        this.Aa = a
    }
    sb.prototype.serialize = function(a) {
        var b = [];
        tb(this, a, b);
        return b.join("")
    };

    function tb(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if ("array" == aa(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), e = d[f], tb(a, a.Aa ? a.Aa.call(d, String(f), e) : e, c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (e = b[d], "function" != typeof e && (c.push(f), ub(d, c), c.push(":"), tb(a, a.Aa ? a.Aa.call(b, d, e) : e, c), f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    ub(b,
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
    var vb = {
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
        wb = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;

    function ub(a, b) {
        b.push('"', a.replace(wb, function(a) {
            var b = vb[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1), vb[a] = b);
            return b
        }), '"')
    };
    var xb = y("Firefox"),
        yb = y("Safari") && !((y("Chrome") || y("CriOS")) && !y("Edge") || y("Coast") || y("Opera") || y("Edge") || y("Silk") || y("Android")) && !(Oa() || y("iPad") || y("iPod"));
    var zb = null,
        Ab = A || Ta && !yb || Ra || "function" == typeof l.btoa;

    function Bb(a, b) {
        this.c = a;
        this.xb = b || []
    }
    q("iSpring.ios.mobile.MobileAppCommand", Bb, void 0);
    Bb.prototype.id = function() {
        return da(this)
    };
    Bb.prototype.bb = function(a, b) {
        var c = this.id(),
            d = (new sb(null)).serialize(b),
            e;
        if (Ab) e = l.btoa(d);
        else {
            e = [];
            for (var f = 0, g = 0; g < d.length; g++) {
                for (var k = d.charCodeAt(g); 255 < k;) e[f++] = k & 255, k >>= 8;
                e[f++] = k
            }
            if (!zb)
                for (zb = {}, d = 0; 65 > d; d++) zb[d] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d);
            d = zb;
            f = [];
            for (g = 0; g < e.length; g += 3) {
                var m = e[g],
                    n = (k = g + 1 < e.length) ? e[g + 1] : 0,
                    C = g + 2 < e.length,
                    P = C ? e[g + 2] : 0,
                    sd = m >> 2,
                    m = (m & 3) << 4 | n >> 4,
                    n = (n & 15) << 2 | P >> 6,
                    P = P & 63;
                C || (P = 64, k || (n = 64));
                f.push(d[sd], d[m],
                    d[n], d[P])
            }
            e = f.join("")
        }
        return "isplayer://" + a + "/" + c + "/" + e
    };

    function Cb(a) {
        try {
            var b = document.createElement("iframe");
            mb(b);
            b.src = a;
            document.body.appendChild(b);
            pb(function() {
                b && b.parentNode && b.parentNode.removeChild(b)
            }, 100)
        } catch (c) {}
    };

    function D(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
    }
    D.prototype.BYTES_PER_ELEMENT = 8;
    D.prototype.set = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
    };
    D.prototype.toString = Array.prototype.join;
    if ("undefined" == typeof Float64Array) {
        try {
            D.BYTES_PER_ELEMENT = 8
        } catch (a) {}
        D.prototype.BYTES_PER_ELEMENT = D.prototype.BYTES_PER_ELEMENT;
        D.prototype.set = D.prototype.set;
        D.prototype.toString = D.prototype.toString;
        q("Float64Array", D, void 0)
    };

    function E(a) {
        this.length = a.length || a;
        for (var b = 0; b < this.length; b++) this[b] = a[b] || 0
    }
    E.prototype.BYTES_PER_ELEMENT = 4;
    E.prototype.set = function(a, b) {
        b = b || 0;
        for (var c = 0; c < a.length && b + c < this.length; c++) this[b + c] = a[c]
    };
    E.prototype.toString = Array.prototype.join;
    "undefined" == typeof Float32Array && (E.BYTES_PER_ELEMENT = 4, E.prototype.BYTES_PER_ELEMENT = E.prototype.BYTES_PER_ELEMENT, E.prototype.set = E.prototype.set, E.prototype.toString = E.prototype.toString, q("Float32Array", E, void 0));

    function Db() {
        var a;
        var b = window.location.search.substr(1);
        if (b) {
            a = {};
            for (var b = b.split("&"), c = 0; c < b.length; ++c) {
                var d = b[c].split("=");
                if (2 == d.length) {
                    try {
                        var e = decodeURIComponent(d[0].replace(/\+/g, " "))
                    } catch (g) {
                        e = d[0]
                    }
                    try {
                        var f = decodeURIComponent(d[1].replace(/\+/g, " "))
                    } catch (g) {
                        f = d[1]
                    }
                    e = e.toLowerCase();
                    a[e] = f
                }
            }
        } else a = {};
        return a
    }

    function Eb() {
        if (Fb) {
            var a = new Bb("closeWindow");
            Fb && (a = a.bb(a.c, a.xb), Cb(a))
        } else try {
            Gb || (window.open("", "_self", ""), window.close())
        } catch (b) {}
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
    var Hb;
    var Ib = Db().user_agent;
    Hb = Ib ? Ib : x || "";
    Db();
    var Jb = -1 != Hb.toLowerCase().indexOf("chrome"),
        Gb = -1 == Hb.toLowerCase().indexOf("windows phone") && -1 != Hb.toLowerCase().indexOf("android") && !Jb && !xb && !Ra,
        Fb = -1 != Hb.indexOf("ismobile");

    function Kb() {
        return 1 == window._ispringDebug || "1" == Db().isdebug
    }
    if (y("Windows")) {
        var Lb = x,
            Mb = "",
            F;
        if (y("Windows")) {
            F = /Windows (?:NT|Phone) ([0-9.]+)/;
            var G = F.exec(Lb),
                Mb = G ? G[1] : "0.0"
        } else Oa() || y("iPad") || y("iPod") ? (F = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, Mb = (G = F.exec(Lb)) && G[1].replace(/_/g, ".")) : y("Macintosh") ? (F = /Mac OS X ([0-9_.]+)/, Mb = (G = F.exec(Lb)) ? G[1].replace(/_/g, ".") : "10") : y("Android") ? (F = /Android\s+([^\);]+)(\)|;)/, Mb = (G = F.exec(Lb)) && G[1]) : y("CrOS") && (F = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, Mb = (G = F.exec(Lb)) && G[1]);
        sa(Mb || "", "6")
    };

    function Nb() {
        this.ob = [];
        this.C = []
    }
    Nb.prototype.push = function(a, b) {
        if (!(b in this.C)) {
            this.C[b] = [];
            var c = this.ob,
                d;
            d = 0;
            for (var e = c.length, f; d < e;) {
                var g = d + e >> 1,
                    k;
                k = c[g];
                k = b > k ? 1 : b < k ? -1 : 0;
                0 < k ? d = g + 1 : (e = g, f = !k)
            }
            d = f ? d : ~d;
            0 > d && Ja(c, -(d + 1), 0, b)
        }
        this.C[b].push(a)
    };
    Nb.prototype.remove = function(a, b) {
        if (b in this.C) {
            var c = this.C[b],
                d = Ca(c, a);
            0 <= d && Array.prototype.splice.call(c, d, 1)
        }
    };

    function Ob(a, b) {
        return b in a.C ? a.C[b] : []
    }

    function Pb(a) {
        var b = [],
            c = a.C;
        a = a.ob;
        for (var d = 0; d < a.length; ++d) Ia(b, c[a[d]]);
        return b
    };

    function H() {
        this.W = new Nb
    }
    u(H, ab);
    var Qb = 0;
    H.prototype.addHandler = function(a, b, c) {
        this.W.push({
            Xa: a,
            context: b
        }, c || 0);
        ++Qb
    };
    H.prototype.addHandler = H.prototype.addHandler;
    H.prototype.removeHandler = function(a, b, c) {
        c = c || 0;
        for (var d = Ob(this.W, c), e = d.length, f = 0; f < e; ++f) {
            var g = d[f];
            if (g.Xa == a && g.context == b) {
                a = this.W;
                c in a.C && Array.prototype.splice.call(a.C[c], f, 1);
                --Qb;
                break
            }
        }
    };
    H.prototype.removeHandler = H.prototype.removeHandler;
    H.prototype.Qb = function(a, b, c) {
        c = Ob(this.W, c || 0);
        for (var d = c.length, e = 0; e < d; ++e) {
            var f = c[e];
            if (f.Xa == a && f.context == b) return !0
        }
        return !1
    };
    H.prototype.hasHandler = H.prototype.Qb;
    H.prototype.Wa = function(a) {
        for (var b = Pb(this.W), c = b.length, d = 0; d < c; ++d) {
            var e = b[d];
            if (-1 != Ca(Pb(this.W), e)) try {
                e.Xa.apply(e.context, arguments)
            } catch (f) {
                Kb() && alert(f)
            }
        }
    };
    H.prototype.dispatch = H.prototype.Wa;
    var I = {
        Lc: "slidePool",
        Vb: "authorizationForm",
        jc: "informationSlide",
        lc: "introSlide",
        Gc: "resultSlide",
        hc: "hotspotQuestion",
        pc: "likertScaleQuestion",
        Qc: "wordBankQuestion",
        bc: "essayQuestion",
        Oc: "typeInQuestion",
        Kc: "shortAnswerQuestion",
        cc: "fillInTheBlankQuestion",
        dc: "fillInTheBlankSurveyQuestion",
        yc: "numericQuestion",
        zc: "numericSurveyQuestion",
        Jc: "sequenceQuestion",
        Fc: "rankingQuestion",
        Pc: "whichWordQuestion",
        tc: "multipleChoiceTextQuestion",
        uc: "multipleChoiceTextSurveyQuestion",
        sc: "multipleChoiceQuestion",
        vc: "multipleResponseQuestion",
        Cc: "pickOneQuestion",
        Bc: "pickManyQuestion",
        Nc: "trueFalseQuestion",
        Rc: "yesNoQuestion",
        qc: "matchingQuestion",
        rc: "matchingSurveyQuestion"
    };
    q("ispring.quiz.slides.SlideType", I, void 0);

    function Rb(a) {
        return "slidePool" != a && "informationSlide" != a && "introSlide" != a && "resultSlide" != a
    }
    q("SLIDE_POOL", "slidePool", I);
    q("INFORMATION_SLIDE", "informationSlide", I);
    q("INTRO_SLIDE", "introSlide", I);
    q("HOTSPOT_QUESTION", "hotspotQuestion", I);
    q("LIKERT_SCALE_QUESTION", "likertScaleQuestion", I);
    q("WORD_BANK_QUESTION", "wordBankQuestion", I);
    q("RESULT_SLIDE", "resultSlide", I);
    q("ESSAY_QUESTION", "essayQuestion", I);
    q("TYPE_IN_QUESTION", "typeInQuestion", I);
    q("SHORT_ANSWER_QUESTION", "shortAnswerQuestion", I);
    q("FILL_IN_THE_BLANK_QUESTION", "fillInTheBlankQuestion", I);
    q("FILL_IN_THE_BLANK_SURVEY_QUESTION", "fillInTheBlankSurveyQuestion", I);
    q("NUMERIC_QUESTION", "numericQuestion", I);
    q("NUMERIC_SURVEY_QUESTION", "numericSurveyQuestion", I);
    q("SEQUENCE_QUESTION", "sequenceQuestion", I);
    q("RANKING_QUESTION", "rankingQuestion", I);
    q("WHICH_WORD_QUESTION", "whichWordQuestion", I);
    q("MULTIPLE_CHOICE_TEXT_QUESTION", "multipleChoiceTextQuestion", I);
    q("MULTIPLE_CHOICE_TEXT_SURVEY_QUESTION", "multipleChoiceTextSurveyQuestion", I);
    q("MULTIPLE_CHOICE_QUESTION", "multipleChoiceQuestion", I);
    q("MULTIPLE_RESPONSE_QUESTION", "multipleResponseQuestion", I);
    q("PICK_ONE_QUESTION", "pickOneQuestion", I);
    q("PICK_MANY_QUESTION", "pickManyQuestion", I);
    q("TRUE_FALSE_QUESTION", "trueFalseQuestion", I);
    q("YES_NO_QUESTION", "yesNoQuestion", I);
    q("MATCHING_QUESTION", "matchingQuestion", I);
    q("MATCHING_SURVEY_QUESTION", "matchingSurveyQuestion", I);
    var Sb = {
        Ec: "prompt",
        Tb: "always",
        wc: "never"
    };
    q("ispring.presenter.presentation.settings.PresentationResumeMode", Sb, void 0);
    q("PROMPT_TO_RESUME", "prompt", Sb);
    q("ALWAYS_RESUME", "always", Sb);
    q("NEVER_RESUME", "never", Sb);

    function Tb(a, b) {
        this.Ta = a;
        this.sb = b;
        this.tb = new H
    }
    h = Tb.prototype;
    h.O = !1;
    h.Y = 0;
    h.sa = 0;
    h.ua = -1;
    h.va = 0;
    h.Fa = 0;
    h.start = function(a) {
        this.O || (this.va = this.Y = a || 0, a = this.Y >= this.Ta, a && this.sb || (this.O = !0, this.sa = ia(), a || (this.ua = setTimeout(t(this.Pa, this), this.Ta - this.Y))))
    };
    h.Pa = function() {
        this.sb && (this.stop(), this.va = this.Ta);
        this.tb.Wa()
    };
    h.stop = function() {
        this.O && (this.O = !1, 0 < this.ua && (clearTimeout(this.ua), this.ua = -1), this.Fa = ia() - this.sa, this.va = this.Fa + this.Y)
    };

    function Ub(a) {
        this.Eb = a
    };

    function Vb(a) {
        this.eb = a
    }
    Vb.prototype.Pb = function(a, b, c) {
        c = this.eb.hasOwnProperty(a) ? this.eb[a] : c;
        if (p(c)) {
            if (p(b)) {
                a = this.zb;
                for (var d in b)
                    if (b.hasOwnProperty(d)) {
                        var e = b[d];
                        a && (d = a(d));
                        c = c.replace(new RegExp(d, "g"), e)
                    }
            }
            return c
        }
        return ""
    };
    Vb.prototype.getMessage = Vb.prototype.Pb;
    Vb.prototype.zb = function(a) {
        return "%" + a.toUpperCase() + "%"
    };

    function Wb(a, b, c, d, e, f, g) {
        this.Ra = b;
        this.Ab = new Vb(c);
        this.A = g
    }
    Wb.prototype.i18n = function() {
        return this.Ab
    };

    function Xb(a, b, c) {
        var d = window.iSpring.LMSAPI;
        switch (a) {
            case "1.2":
                return new d.Scorm12Api(b);
            case "2004":
                return new d.Scorm2004Api(b);
            case "aicc":
                return new d.AiccApi(b);
            case "tincan":
                return new d.TinCanApi(b, c);
            case "cmi-5":
                return new d.Cmi5Api(b, c);
            default:
                throw Error("unknown api");
        }
    };

    function Yb() {
        this.Lb = new H
    };

    function Zb(a, b, c, d) {
        this.Mb = a;
        this.Ga = b;
        this.Jb = c;
        this.Bb = d
    }
    Zb.prototype.timeLimit = function() {
        return this.Mb
    };
    Zb.prototype.message = function() {
        return this.Bb
    };
    var $b = {
        kc: "initializing",
        mc: "inProgress",
        Ic: "reviewing",
        Xb: "completed",
        Ub: "authorizating"
    };
    q("ispring.quiz.session.QuizState", $b, void 0);
    q("INITIALIZING", "initializing", $b);
    q("IN_PROGRESS", "inProgress", $b);
    q("REVIEWING", "reviewing", $b);
    q("COMPLETED", "completed", $b);
    q("AUTHORIZATING", "authorizating", $b);
    var ac = {
        Hc: "resumePlayback",
        ec: "gotoSlide",
        Zb: "delayStartup"
    };
    q("ispring.presenter.player.startup.PresentationStartup.Action", ac, void 0);
    q("RESUME_PLAYBACK", "resumePlayback", ac);
    q("GOTO_SLIDE", "gotoSlide", ac);
    q("DELAY_STARTUP", "delayStartup", ac);

    function bc(a) {
        var b = "\r";
        if (0 == a.length) return "";
        null != b || (b = "");
        var c = 0,
            d = "",
            e = a.length;
        do {
            var f = cc(a, ["<p>", "<p "], c);
            if (f && f.za > c) {
                var c = a.substr(c, f.za - c),
                    g = fb("DIV");
                g.innerHTML = c;
                d += (g.textContent || g.innerText || kb(g)) + b;
                c = f.za
            }
            if (g = cc(a, ["</p>", "</p >"], c)) {
                var f = g.za + g.Sb.length - c,
                    k = a.substr(c, f),
                    g = fb("DIV");
                g.innerHTML = k;
                d += (g.textContent || g.innerText || kb(g)) + b;
                c += f
            } else return g = fb("DIV"), g.innerHTML = a.substr(c, e - c), d + (g.textContent || g.innerText || kb(g))
        } while (c < e);
        return d
    }

    function cc(a, b, c) {
        "array" == aa(b) || (b = [b]);
        var d, e, f = !1;
        w(b, function(b) {
            var g = a.indexOf(b, c);
            0 <= g && (!p(d) || g < d) && (d = g, e = b, f = !0)
        });
        return f ? new dc(e, d) : null
    }

    function dc(a, b) {
        this.Sb = a;
        this.za = b
    };

    function J(a, b) {
        this.ha = a;
        this.D = b
    }
    J.prototype.id = function() {
        return this.ha
    };
    J.prototype.description = function() {
        return this.D
    };

    function ec() {
        this.V = []
    }
    ec.prototype.count = function() {
        return this.V.length
    };

    function K(a, b) {
        a.V.push(b)
    }
    ec.prototype.getChoice = function(a) {
        if (0 > a || a >= this.count()) throw Error("Index out of bounds");
        return this.V[a]
    };

    function L() {
        this.V = new ec
    }
    L.prototype.choices = function() {
        return this.V
    };

    function M(a) {
        a = ja(a);
        return a = a.replace(/[^\w-]/g, "_")
    }

    function N(a, b) {
        return "0123456789abcdefghijklmnopqrstuvwxyz" [((null != b ? b : 1) ? a : 35 - a) % 36]
    };

    function fc(a, b, c, d, e) {
        this.qa = a;
        this.Hb = b;
        this.Ib = c;
        this.Gb = d;
        this.Sa = e
    }

    function gc(a) {
        a = bc(a.text());
        a = ka(a);
        if (!a) return "";
        var b = document.createElement("div");
        b.innerHTML = a;
        return b.firstChild.nodeValue
    }
    fc.prototype.create = function() {
        var a = 0,
            b = [],
            c = this.Hb,
            d = this.Gb,
            e = new hc(c.id() + "_" + a),
            a = a + 1;
        e.c = O;
        var f;
        null != c.message() ? (f = c.message().text(), f = bc(f), e.D = f, f = c.message().replies(), null != c.speech() && 0 < bc(c.speech()) && (a = new hc(c.id() + "_" + a), a.c = Q, c = bc(c.speech()), a.D = c, a.$ = ic, jc(this, a), b.push(a))) : (f = bc(c.speech()), e.D = f, f = c.replies());
        0 == f.count() && (e.c = Q);
        for (var c = null, g = a = 0, k = -1, m = [], n = 0; n < f.count(); n++) {
            var C = f.getReply(n);
            null != d && C == d && (k = n);
            a = Math.max(a, C.score());
            m.push(kc(this, n, gc(C)))
        }
        null !=
            d && (c = kc(this, k, gc(d)), g = Math.max(g, d.score()));
        d = f;
        f = new L;
        for (k = 0; k < d.count(); ++k) n = gc(d.getReply(k)), K(f.choices(), new J(M(k + "_" + n), n));
        e.h = c;
        e.i = m;
        this.qa.scenario().settings().evaluationSettings().enabled() && (e.T(a), e.ma = g);
        e.$ = ic;
        jc(this, e);
        b.push(e);
        return b
    };

    function kc(a, b, c) {
        c = M(b + "_" + c);
        b = N(b);
        return a.Ib ? b : c
    }

    function jc(a, b) {
        null != a.Sa && (b.Ua = new Date(a.Sa), b.Ba(ia() - a.Sa))
    };
    var O = "choice",
        Q = "other";
    var lc = {
            id: "http://adlnet.gov/expapi/verbs/experienced",
            display: {
                "en-US": "experienced"
            }
        },
        mc = {
            id: "http://adlnet.gov/expapi/verbs/answered",
            display: {
                "en-US": "answered"
            }
        },
        nc = {
            id: "http://adlnet.gov/expapi/verbs/responded",
            display: {
                "en-US": "responded"
            }
        };

    function oc() {
        function a(a) {
            try {
                for (var b = 0; 255 > b; ++b) {
                    if (a.API) return a.API;
                    var c = a.parent;
                    if (!c || a == c) break;
                    a = c
                }
            } catch (f) {}
            return null
        }
        var b = window;
        return a(b) || b.opener && a(b.opener)
    }

    function pc(a) {
        var b = Math.floor(a / 3600),
            c = Math.floor(a % 3600 / 60);
        a = Math.floor(a % 60);
        return (10 > b ? "0" + b : b) + ":" + (10 > c ? "0" + c : c) + ":" + (10 > a ? "0" + a : a)
    }

    function qc() {
        try {
            var a = document.getElementById("preloader");
            a && a.parentNode.removeChild(a)
        } catch (b) {}
    };

    function rc(a, b, c) {
        this.ha = a;
        this.Cb = b;
        this.yb = c
    }
    rc.prototype.id = function() {
        return this.ha
    };
    rc.prototype.name = function() {
        return this.Cb
    };
    rc.prototype.email = function() {
        return this.yb
    };
    var ic = "neutral";

    function hc(a) {
        this.ha = a
    }
    h = hc.prototype;
    h.D = "";
    h.h = null;
    h.i = null;
    h.$ = "unanticipated";
    h.pb = 0;
    h.ma = null;
    h.L = null;
    h.Ua = null;
    h.id = function() {
        return this.ha
    };
    h.type = function() {
        return this.c
    };
    h.description = function() {
        return this.D
    };
    h.ka = function() {
        return this.h
    };
    h.Va = function() {
        return this.i
    };

    function sc(a, b) {
        a.i = b
    }
    h.result = function() {
        return this.$
    };
    h.score = function() {
        return this.pb
    };
    h.T = function(a) {
        this.pb = a
    };
    h.awardedScore = function() {
        return this.ma
    };
    h.duration = function() {
        return this.L
    };
    h.Ba = function(a) {
        this.L = a
    };
    h.$a = function() {
        return this.Ua
    };

    function tc() {};

    function uc() {}
    uc.prototype.create = function(a) {
        var b = a.slide().id(),
            b = new hc(this.f(b));
        this.a(b, a);
        return b
    };
    uc.prototype.a = function(a, b) {
        var c = b.slide().name();
        a.D = c;
        a.c = Q;
        a.T(b.maxScore());
        c = b.awardedScore();
        a.ma = c;
        c = b.isPassed() ? "correct" : "incorrect";
        a.$ = c
    };
    uc.prototype.f = function(a) {
        return M(a)
    };

    function vc() {}
    h = vc.prototype;
    h.wb = null;
    h.maxScore = null;
    h.awardedScore = null;
    h.ya = null;
    h.duration = null;

    function wc(a, b) {
        this.s = a;
        this.qa = b
    }

    function xc(a) {
        "byGroups" == a.qa.settings().passingScoreType() && a.qa.slidePoolState().forEach(function(a) {
            "slidePool" == a.slide().type() && (new uc).create(a)
        })
    };

    function yc(a, b, c, d, e) {
        this.type = a;
        this.ya = b;
        this.maxScore = p(c) ? c : null;
        this.Rb = p(d) ? d : null;
        this.Za = p(e) ? e : null
    }
    yc.prototype.Ya = function() {
        var a = {};
        a[zc] = this.ya;
        a[Ac] = this.maxScore;
        a[Bc] = this.Rb;
        a[Cc] = this.Za;
        a[Dc] = this.type;
        return a
    };

    function Ec(a) {
        if ("graded" == a.quiz().type()) {
            var b = "byGroups" == a.settings().passingScoreType(),
                c = a.awardedScore();
            if (b) {
                var d = 0,
                    e = 0;
                a.slidePoolState().forEach(function(a) {
                    "slidePool" == a.slide().type() && 0 != a.maxScore() && (e++, a.isPassed() && d++)
                });
                c = 100 * (e ? d / e : 0)
            }
            var f = b ? 100 : a.maxScore(),
                b = b ? 0 < f ? Math.round(c / f * 1E4) / 1E4 : 1 : a.awardedPercent();
            return new yc(Fc, a.quizPassed(), f, c, b)
        }
        return new yc(Fc, !0)
    }
    var zc = "p",
        Ac = "m",
        Bc = "r",
        Cc = "s",
        Dc = "t",
        Fc = "quiz";

    function Gc() {
        this.R = [];
        this.I = {}
    }
    h = Gc.prototype;
    h.oa = -1;
    h.L = 0;
    h.pa = null;
    h.duration = function() {
        return this.L
    };
    h.Ba = function(a) {
        this.L = a
    };
    h.Ya = function() {
        var a = {};
        a[Hc] = this.L;
        a[Ic] = this.oa;
        a[Jc] = this.R;
        a[Kc] = this.pa;
        var b = {},
            c;
        for (c in this.I) b[c] = this.I[c].Ya();
        a[Lc] = b;
        return a
    };
    var Ic = "l",
        Jc = "v",
        Hc = "d",
        Kc = "p",
        Lc = "q";

    function Mc(a) {
        for (var b = 0, c = 0; c < a.length; ++c) b += a[c];
        return b
    };

    function Nc(a, b, c, d, e, f) {
        this.J = a;
        this.Kb = b;
        this.Nb = e;
        this.Fb = f;
        this.G = {};
        for (a = 0; a < c.length; ++a) b = c[a], e = b[1], this.G[b[0]] = e, 0 < e && ++this.ea;
        this.Z = {};
        for (a = 0; a < d.length; ++a) c = d[a], b = c[1], this.Z[c[0]] = b, 0 < b && ++this.ea
    }
    h = Nc.prototype;
    h.ea = 0;
    h.slidesWeight = function() {
        return 0 < this.J ? this.Kb : 0
    };
    h.slidesToView = function() {
        return this.J
    };
    h.totalScore = function() {
        return this.Nb
    };
    h.passingScore = function() {
        return this.Fb
    };

    function Oc(a, b, c, d) {
        for (var e = d ? "," : "[,]", f = d ? "." : "[.]", g = [], k = 0; k < a.count(); ++k) {
            var m = a.getMatch(k),
                n = m.premise(),
                m = m.response(),
                C = b.getChoiceIndex(n),
                P = c.getChoiceIndex(m),
                n = d ? N(C, !0) : C + "_" + n.textRange().text(),
                m = d ? N(P, !1) : P + "_" + m.textRange().text(),
                n = M(n) + f + M(m);
            g.push(n)
        }
        return g.join(e)
    }

    function Pc(a, b, c) {
        for (var d = c ? "," : "[,]", e = [], f = 0; f < b.count(); ++f) {
            var g = b.getChoice(f),
                k = g.textRange().text(),
                g = a.getChoiceIndex(g);
            e.push(M(c ? N(g, !0) : g + "_" + k))
        }
        return e.join(d)
    };

    function Qc() {}
    Qc.prototype.create = function(a) {
        if (!a.submitted()) return null;
        var b = a.slide().id(),
            b = new hc(this.f(b));
        this.a(b, a);
        return b
    };
    Qc.prototype.a = function(a, b) {
        var c = b.slide().description().text();
        a.D = c;
        b.visited() && (a.Ba(b.viewDuration()), c = b.firstVisitTime(), a.Ua = c)
    };
    Qc.prototype.f = function(a) {
        return M(a)
    };

    function R() {}
    u(R, Qc);
    R.prototype.a = function(a, b) {
        R.g.a.call(this, a, b);
        a.$ = ic
    };

    function Rc(a) {
        this.w = a
    }
    u(Rc, R);
    Rc.prototype.w = !1;
    Rc.prototype.a = function(a, b) {
        Rc.g.a.call(this, a, b);
        a.c = "sequencing";
        var c = b.slide().items(),
            d = Pc(c, b.items(), this.w);
        a.h = d;
        a.i = [d];
        this.v(c)
    };
    Rc.prototype.v = function(a) {
        for (var b = new L, c = 0; c < a.count(); ++c) {
            var d = a.getChoice(c).textRange().text();
            K(b.choices(), new J(this.f(c + "_" + d), d))
        }
        return b
    };
    var Sc = {
        Yb: "correct",
        Ac: "partiallyCorrect",
        ic: "incorrect",
        xc: "notAnswered"
    };
    q("ispring.quiz.session.slides.questions.graded.review.GradedQuestionStatus", Sc, void 0);
    q("CORRECT", "correct", Sc);
    q("PARTIALLY_CORRECT", "partiallyCorrect", Sc);
    q("INCORRECT", "incorrect", Sc);
    q("NOT_ANSWERED", "notAnswered", Sc);

    function S() {}
    u(S, Qc);
    S.prototype.a = function(a, b) {
        S.g.a.call(this, a, b);
        var c = b.slide();
        a.T(c.maxScore());
        if (c = b.review()) {
            var d = Math.max(0, c.awardedScore());
            a.ma = d;
            d = "unanticipated";
            switch (c.status()) {
                case "correct":
                    d = "correct";
                    break;
                case "incorrect":
                    d = "incorrect";
                    break;
                case "partiallyCorrect":
                    d = "partially"
            }
            a.$ = d
        }
    };
    var T = {
        ac: "equal",
        $b: "notEqual",
        fc: "greaterThan",
        nc: "lessThan",
        gc: "greaterThanOrEqual",
        oc: "lessThanOrEqual",
        Wb: "between"
    };
    q("ispring.quiz.slides.questions.graded.answers.numeric.ComparisonOperation", T, void 0);
    q("EQUALS", "equal", T);
    q("DIFFERS", "notEqual", T);
    q("GREATER_THAN", "greaterThan", T);
    q("LESS_THAN", "lessThan", T);
    q("GREATER_THAN_OR_EQUALS", "greaterThanOrEqual", T);
    q("LESS_THAN_OR_EQUALS", "lessThanOrEqual", T);
    q("BETWEEN", "between", T);

    function Tc(a) {
        this.b = a
    }
    u(Tc, S);
    Tc.prototype.a = function(a, b) {
        Tc.g.a.call(this, a, b);
        var c = b.slide(),
            d = b.initiated() ? b.getAnswer().toString() : "",
            c = c.answers(),
            e;
        a: {
            for (e = 0; e < c.count(); ++e)
                if ("notEqual" == c.getAnswer(e).comparisonOperation()) {
                    e = !0;
                    break a
                }
            e = !1
        }
        a.c = this.b || e ? "fill-in" : "numeric";
        for (var f = (e = this.b || e) ? "[,]" : "[.]", g = [], k = 0; k < c.count(); ++k) {
            var m = "",
                n = c.getAnswer(k),
                C = n.comparisonOperation();
            if ("between" == C) m = n, m = e ? "between " + m.leftOperand() + " and " + m.rightOperand() : m.leftOperand() + "[:]" + m.rightOperand();
            else switch (C) {
                case "notEqual":
                    e &&
                        (m = "not equal to " + n.operand());
                    break;
                case "equal":
                    m = e ? "equal to " + n.operand() : n.operand() + "[:]" + n.operand();
                    break;
                case "greaterThan":
                    m = e ? "greater than " + n.operand() : n.operand() + "[:]";
                    break;
                case "greaterThanOrEqual":
                    m = e ? "greater than or equal to " + n.operand() : n.operand() + "[:]";
                    break;
                case "lessThan":
                    m = e ? "less than " + n.operand() : "[:]" + n.operand();
                    break;
                case "lessThanOrEqual":
                    m = e ? "less than or equal to " + n.operand() : "[:]" + n.operand()
            }
            g.push(m)
        }
        c = g.join(f);
        a.h = d;
        a.i = [c]
    };

    function Uc(a, b) {
        this.b = a;
        this.wa = b
    }
    u(Uc, R);
    Uc.prototype.a = function(a, b) {
        Uc.g.a.call(this, a, b);
        a.c = this.b ? Q : "fill-in";
        var c = this.Ka(b.blanks()),
            d = c.join("[,]");
        a.h = d;
        a.i = this.b || this.wa ? [d] : c
    };
    Uc.prototype.Ka = function(a) {
        for (var b = [], c = 0; c < a.count(); ++c) b.push(a.getSection(c).answer());
        return b
    };

    function Vc(a) {
        this.w = a
    }
    u(Vc, S);
    Vc.prototype.w = !1;
    Vc.prototype.a = function(a, b) {
        Vc.g.a.call(this, a, b);
        a.c = "sequencing";
        var c = b.slide().items(),
            d = Pc(c, b.items(), this.w),
            e = Pc(c, c, this.w);
        a.h = d;
        a.i = [e];
        this.v(c)
    };
    Vc.prototype.v = function(a) {
        for (var b = new L, c = 0; c < a.count(); ++c) {
            var d = a.getChoice(c).textRange().text();
            K(b.choices(), new J(this.f(c + "_" + d), d))
        }
        return b
    };

    function U(a, b) {
        this.length = b;
        for (var c = 0; c < b; ++c) this[c] = a(c)
    };

    function Wc(a) {
        this.b = a
    }
    u(Wc, S);

    function Xc(a, b, c) {
        w(new U(function(a) {
            return b.getChoice(a)
        }, b.count()), function(b) {
            b = b.textRange().text();
            var d = c.choices().count();
            K(c.choices(), new J(a.f(d + "_" + b), b))
        })
    }
    Wc.prototype.Ha = function(a, b, c) {
        var d = this;
        w(a, function(a) {
            a = a.section().answers().getGradedChoice(0).textRange().text();
            var e = b.choices().count(),
                e = d.f(e + "_" + a);
            c.push(e);
            K(b.choices(), new J(e, a))
        })
    };
    Wc.prototype.Ia = function(a, b, c) {
        w(a, function(a) {
            var d = a.answer();
            null != d && (a = Fa(new U(function(a) {
                return b.choices().getChoice(a)
            }, b.choices().count()), function(a) {
                return a.description() == d.textRange().text()
            }), c.push(a.id()))
        })
    };
    Wc.prototype.a = function(a, b) {
        Wc.g.a.call(this, a, b);
        a.c = this.b ? Q : O;
        var c = b.slide(),
            d = [],
            e = [],
            f = new L;
        Xc(this, c.extraItems(), f);
        var g = b.placeholders(),
            c = new U(function(a) {
                return g.getSection(a)
            }, g.count());
        this.Ha(c, f, e);
        this.Ia(c, f, d);
        a.h = d.join("[,]");
        sc(a, [e.join("[,]")])
    };

    function Yc(a) {
        this.b = a
    }
    u(Yc, R);
    Yc.prototype.a = function(a, b) {
        Yc.g.a.call(this, a, b);
        a.c = this.b ? "fill-in" : "numeric";
        var c = "",
            d = "";
        b.initiated() && (c = b.answer().toString(), d = this.b ? c : c + "[:]" + c);
        a.h = c;
        a.i = [d]
    };

    function Zc() {
        this.V = new ec;
        this.ab = []
    }
    u(Zc, L);

    function $c(a) {
        this.b = a
    }
    u($c, R);
    $c.prototype.a = function(a, b) {
        $c.g.a.call(this, a, b);
        a.c = O;
        var c = b.slide().choices(),
            d = b.choices(),
            e = this.Ja(c, d);
        a.h = e;
        a.i = [e];
        this.v(c, d)
    };
    $c.prototype.v = function(a, b) {
        for (var c = new Zc, d = 0; d < a.count(); ++d) {
            var e = a.getChoice(d),
                f;
            a: {
                for (f = 0; f < b.count(); ++f) {
                    var g = b.getChoiceState(f);
                    if (g.choice() === e) {
                        f = g;
                        break a
                    }
                }
                throw Error("can't find choice state");
            }
            g = e.textRange().text();
            g = new J(this.fa(f, d), g);
            K(c.choices(), g);
            e = e.customAnswerEnabled() ? f.customAnswer() : "";
            c.ab[d] = e
        }
        return c
    };
    $c.prototype.Ja = function(a, b) {
        for (var c = [], d = 0; d < b.count(); ++d) {
            var e = b.getChoiceState(d);
            if (e.selected()) {
                var f = a.getChoiceIndex(e.choice()),
                    e = this.fa(e, f);
                c.push(e)
            }
        }
        return c.join("[,]")
    };
    $c.prototype.fa = function(a, b) {
        var c = a.customizableChoice(),
            d = c.textRange().text(),
            d = b + "_" + d;
        c.customAnswerEnabled() && (c = a.customAnswer(), d += c ? "_" + c : "");
        return this.b ? N(b) : this.f(d)
    };

    function ad() {
        this.ra = new ec;
        this.ta = new ec
    };

    function bd(a) {
        this.w = a
    }
    u(bd, R);
    bd.prototype.a = function(a, b) {
        bd.g.a.call(this, a, b);
        a.c = "matching";
        var c = b.slide(),
            d = Oc(b.matches(), c.premises(), c.responses(), this.w);
        a.h = d;
        a.i = [d];
        this.K(c)
    };
    bd.prototype.K = function(a) {
        var b = new ad,
            c = a.premises();
        a = a.responses();
        for (var d = 0; d < c.count(); ++d) {
            var e = c.getChoice(d).textRange().text(),
                f = a.getChoice(d).textRange().text();
            K(b.ra, new J(this.f(d + "_" + e), e));
            K(b.ta, new J(this.f(d + "_" + f), f))
        }
        return b
    };

    function cd(a) {
        this.b = a
    }
    u(cd, S);
    cd.prototype.a = function(a, b) {
        cd.g.a.call(this, a, b);
        a.c = O;
        var c = b.slide().responses(),
            d = this.La(c, b.responses()),
            e = this.ga(c);
        a.h = d;
        a.i = [e];
        this.v(c)
    };
    cd.prototype.v = function(a) {
        for (var b = new L, c = 0; c < a.count(); ++c) {
            var d = a.getGradedChoice(c).textRange().text();
            K(b.choices(), new J(this.f(c + "_" + d), d))
        }
        return b
    };
    cd.prototype.La = function(a, b) {
        for (var c = [], d = 0; d < b.count(); ++d) {
            var e = b.getChoiceState(d),
                f = e.gradedChoice(),
                g = f.textRange().text();
            e.selected() && (e = a.getChoiceIndex(f), g = this.b ? N(e) : this.f(e + "_" + g), c.push(g))
        }
        return c.join("[,]")
    };
    cd.prototype.ga = function(a) {
        for (var b = [], c = 0; c < a.count(); ++c) {
            var d = a.getGradedChoice(c);
            d.correct() && (d = this.b ? N(c) : this.f(c + "_" + d.textRange().text()), b.push(d))
        }
        return b.join("[,]")
    };
    var dd = {
        Mc: "textSection",
        Dc: "placeholderSection"
    };
    q("ispring.quiz.slides.questions.SectionType", dd, void 0);
    q("TEXT_SECTION", "textSection", dd);
    q("PLACEHOLDER_SECTION", "placeholderSection", dd);

    function ed(a) {
        this.b = a
    }
    u(ed, S);
    ed.prototype.a = function(a, b) {
        var c = this;
        ed.g.a.call(this, a, b);
        a.c = this.b ? Q : "matching";
        var d = b.slide(),
            e = [],
            f = [],
            g = new L,
            k = b.choices();
        w(new U(function(a) {
            return k.getSection(a)
        }, k.count()), function(a, b) {
            var d = Fa(new U(function(b) {
                    return a.choices().getChoiceState(b)
                }, a.choices().count()), function(a) {
                    return a.selected()
                }),
                k = a.section().choices();
            w(new U(function(a) {
                return k.getGradedChoice(a)
            }, k.count()), function(a) {
                var k = a.textRange().text(),
                    m = g.choices().count(),
                    m = b + "[.]" + c.f(m + "_" + k);
                a.correct() &&
                    f.push(m);
                null != d && k == d.gradedChoice().textRange().text() && e.push(m);
                K(g.choices(), new J(m, k))
            })
        });
        a.h = e.join("[,]");
        sc(a, [f.join("[,]")]);
        tc(this.K(d))
    };
    ed.prototype.K = function(a) {
        var b = new ad,
            c = 0,
            d = 0;
        a = a.content();
        for (var e = 0; e < a.sectionsCount(); ++e) {
            var f = a.getSection(e);
            if ("placeholderSection" == f.type()) {
                var f = f.choices(),
                    g = c++ + "";
                K(b.ra, new J(g, g));
                for (g = 0; g < f.count(); ++g) {
                    var k = f.getChoice(g).textRange().text(),
                        m = this.f(d++ + "_" + k);
                    K(b.ta, new J(m, k))
                }
            }
        }
        return b
    };

    function V(a) {
        this.b = a
    }
    u(V, S);
    V.prototype.a = function(a, b) {
        V.g.a.call(this, a, b);
        a.c = O;
        var c = b.slide().choices(),
            d = this.La(c, b.choices()),
            e = this.ga(c);
        a.h = d;
        a.i = [e];
        this.v(c)
    };
    V.prototype.v = function(a) {
        for (var b = new L, c = 0; c < a.count(); ++c) {
            var d = a.getGradedChoice(c).textRange().text();
            K(b.choices(), new J(this.f(c + "_" + d), d))
        }
        return b
    };
    V.prototype.La = function(a, b) {
        for (var c = "", d = 0; d < b.count(); ++d) {
            var e = b.getChoiceState(d);
            if (e.selected()) {
                c = a.getChoiceIndex(e.gradedChoice());
                c = this.b ? N(c) : this.f(c + "_" + e.gradedChoice().textRange().text());
                break
            }
        }
        return c
    };
    V.prototype.ga = function(a) {
        for (var b = "", c = 0; c < a.count(); ++c) {
            var d = a.getGradedChoice(c);
            if (d.correct()) {
                b = this.b ? N(c) : this.f(c + "_" + d.textRange().text());
                break
            }
        }
        return b
    };

    function fd() {}
    u(fd, R);
    fd.prototype.a = function(a, b) {
        fd.g.a.call(this, a, b);
        a.c = "fill-in";
        var c = b.answer();
        a.h = c;
        c = [b.answer()];
        a.i = c
    };

    function W(a) {
        this.b = a
    }
    u(W, R);
    W.prototype.a = function(a, b) {
        W.g.a.call(this, a, b);
        a.c = O;
        var c = b.slide().choices(),
            d = b.choices(),
            e = this.Ja(c, d);
        a.h = e;
        a.i = [e];
        this.v(c, d)
    };
    W.prototype.v = function(a, b) {
        for (var c = new Zc, d = 0; d < a.count(); ++d) {
            var e = a.getChoice(d),
                f;
            a: {
                for (f = 0; f < b.count(); ++f) {
                    var g = b.getChoiceState(f);
                    if (g.choice() === e) {
                        f = g;
                        break a
                    }
                }
                throw Error("can't find choice state");
            }
            g = e.textRange().text();
            g = new J(this.fa(f, d), g);
            K(c.choices(), g);
            e = e.customAnswerEnabled() ? f.customAnswer() : "";
            c.ab[d] = e
        }
        return c
    };
    W.prototype.Ja = function(a, b) {
        for (var c = 0; c < b.count(); ++c) {
            var d = b.getChoiceState(c);
            if (d.selected()) return c = a.getChoiceIndex(d.choice()), this.fa(d, c)
        }
        return ""
    };
    W.prototype.fa = function(a, b) {
        var c = a.customizableChoice(),
            d = c.textRange().text(),
            d = b + "_" + d;
        c.customAnswerEnabled() && (c = a.customAnswer(), d += c ? "_" + c : "");
        return this.b ? N(b) : this.f(d)
    };

    function gd() {}
    u(gd, W);

    function hd() {}
    u(hd, S);
    hd.prototype.a = function(a, b) {
        hd.g.a.call(this, a, b);
        a.c = "fill-in";
        var c = b.slide(),
            c = this.ga(c.answers()),
            d = b.answer();
        a.h = d;
        a.i = c
    };
    hd.prototype.ga = function(a) {
        for (var b = [], c = 0; c < a.count(); ++c) {
            var d = a.getAnswer(c);
            b.push(d.text())
        }
        return b
    };

    function id(a) {
        this.b = a
    }
    u(id, R);
    id.prototype.a = function(a, b) {
        var c = this;
        id.g.a.call(this, a, b);
        a.c = this.b ? Q : "matching";
        var d = b.slide(),
            e = [],
            f = new L,
            g = b.choices();
        w(new U(function(a) {
            return g.getSection(a)
        }, g.count()), function(a, b) {
            var d = a.choices();
            w(new U(function(a) {
                return d.getChoiceState(a)
            }, d.count()), function(a) {
                var d = a.choice().textRange().text(),
                    g = f.choices().count(),
                    g = b + "[.]" + c.f(g + "_" + d);
                a.selected() && e.push(g);
                K(f.choices(), new J(g, d))
            })
        });
        a.h = e.join("[,]");
        sc(a, [e.join("[,]")]);
        tc(this.K(d))
    };
    id.prototype.K = function(a) {
        var b = new ad,
            c = 0,
            d = 0;
        a = a.content();
        for (var e = 0; e < a.sectionsCount(); ++e) {
            var f = a.getSection(e);
            if ("placeholderSection" == f.type()) {
                var f = f.choices(),
                    g = c++ + "";
                K(b.ra, new J(g, g));
                for (g = 0; g < f.count(); ++g) {
                    var k = f.getChoice(g).textRange().text(),
                        m = this.f(d++ + "_" + k);
                    K(b.ta, new J(m, k))
                }
            }
        }
        return b
    };

    function jd(a, b) {
        this.b = a;
        this.wa = b
    }
    u(jd, S);
    jd.prototype.a = function(a, b) {
        jd.g.a.call(this, a, b);
        a.c = this.b ? Q : "fill-in";
        var c = this.Ka(b.blanks());
        a.h = c.ka;
        c = c.Va;
        if (this.b || this.wa) c = [c.join(this.b ? "[.]" : "[,]")];
        a.i = c
    };
    jd.prototype.Ka = function(a) {
        for (var b = [], c = [], d = 0; d < a.count(); ++d) {
            var e = [],
                f = a.getSection(d),
                g = f.section().answers();
            b.push(f.answer());
            if (this.wa) c.push(g.getAnswer(0).text());
            else {
                for (f = 0; f < g.count(); ++f) e.push(g.getAnswer(f).text());
                c.push(e.join("[,]"))
            }
        }
        return {
            ka: b.join("[,]"),
            Va: c
        }
    };

    function kd(a) {
        this.b = a
    }
    u(kd, S);
    kd.prototype.Ha = function(a, b, c) {
        var d = this;
        w(a, function(a, f) {
            var e = a.label(),
                k = d.f(f + "_" + e);
            c.push(k);
            K(b.choices(), new J(k, e))
        })
    };

    function ld(a, b) {
        var c = [];
        w(new U(function(b) {
            return a.getPoint(b)
        }, a.count()), function(a) {
            c = Ga(c, Da(b, function(b) {
                return b.hitTest(a.x(), a.y())
            }))
        });
        c = Ea(c, function(a) {
            return Ca(b, a) + "_" + a.label()
        });
        La(c);
        return c
    }
    kd.prototype.a = function(a, b) {
        kd.g.a.call(this, a, b);
        a.c = this.b ? Q : O;
        var c = b.slide(),
            d = [],
            e = [],
            d = new L,
            f = new U(function(a) {
                return c.hotAreas().getHotArea(a)
            }, c.hotAreas().count());
        this.Ha(f, d, e);
        d = ld(b.points(), f);
        a.h = d.join("[,]");
        sc(a, [e.join("[,]")])
    };

    function md() {}
    u(md, R);
    md.prototype.a = function(a, b) {
        md.g.a.call(this, a, b);
        a.c = "long-fill-in";
        var c = b.answer();
        a.h = c;
        c = [b.answer()];
        a.i = c
    };

    function nd(a) {
        this.w = a
    }
    u(nd, S);
    nd.prototype.w = !1;
    nd.prototype.a = function(a, b) {
        nd.g.a.call(this, a, b);
        a.c = "matching";
        var c = b.slide(),
            d = Oc(b.matches(), c.premises(), c.responses(), this.w),
            e = Oc(c.matches(), c.premises(), c.responses(), this.w);
        a.h = d;
        a.i = [e];
        this.K(c)
    };
    nd.prototype.K = function(a) {
        var b = new ad;
        a = a.matches();
        for (var c = 0; c < a.count(); ++c) {
            var d = a.getMatch(c),
                e = d.premise().textRange().text(),
                d = d.response().textRange().text();
            K(b.ra, new J(this.f(c + "_" + e), e));
            K(b.ta, new J(this.f(c + "_" + d), d))
        }
        return b
    };

    function od(a) {
        this.b = a
    }
    u(od, R);

    function pd(a, b, c) {
        w(new U(function(a) {
            return b.getChoice(a)
        }, b.count()), function(b, e) {
            var d = b.textRange().text();
            K(c.choices(), new J(a.f(e + "_" + d), d))
        })
    }
    od.prototype.Ia = function(a, b, c) {
        w(new U(t(a.getSection, a), a.count()), function(a) {
            var d = a.answer();
            null != d && (a = Fa(new U(function(a) {
                return b.choices().getChoice(a)
            }, b.choices().count()), function(a) {
                return a.description() == d.textRange().text()
            }), c.push(a.id()))
        })
    };
    od.prototype.a = function(a, b) {
        od.g.a.call(this, a, b);
        a.c = this.b ? Q : O;
        var c = b.slide(),
            d = [],
            e = new L;
        pd(this, c.words(), e);
        this.Ia(b.placeholders(), e, d);
        a.h = d.join("[,]");
        a.i = [d.join("[,]")]
    };

    function qd() {}
    u(qd, R);
    qd.prototype.a = function(a, b) {
        qd.g.a.call(this, a, b);
        a.c = O;
        for (var c = b.slide(), d = b.statements(), e = d.count(), f = [], c = c.statements(), g = 0; g < e; ++g) {
            var k = d.getStatementState(g),
                m = k.scale(),
                k = k.statement();
            m && f.push(this.f(c.getChoiceIndex(k) + "_" + m.textRange().text()))
        }
        d = f.join("[,]");
        a.h = d;
        a.i = [d];
        this.v(c)
    };
    qd.prototype.v = function(a) {
        for (var b = new L, c = 0; c < a.count(); ++c) {
            var d = a.getChoice(c).textRange().text();
            K(b.choices(), new J(this.f(c + "_" + d), d))
        }
        return b
    };

    function rd(a) {
        this.b = a
    }
    u(rd, V);
    rd.prototype.a = function(a, b) {
        rd.g.a.call(this, a, b);
        if (this.b) {
            a.c = "true-false";
            for (var c = b.slide().choices(), d = b.choices(), e = c.getGradedChoice(0).correct() ? "t" : "f", f = "t" == e ? "f" : "t", c = c.getGradedChoice(0).correct() ? c.getGradedChoice(0).id() : c.getGradedChoice(1).id(), g = null, k = 0; 2 > k; ++k) {
                var m = d.getChoiceState(k);
                if (m.selected()) {
                    g = m.choice().id() == c ? e : f;
                    break
                }
            }
            a.h = g;
            a.i = [e]
        }
    };

    function td(a, b) {
        var c = "1.2" == b || "aicc" == b,
            d = "tincan" == b;
        switch (a) {
            case "essayQuestion":
                return new md;
            case "likertScaleQuestion":
                return new qd;
            case "hotspotQuestion":
                return new kd(c);
            case "fillInTheBlankQuestion":
                return new jd(c, d);
            case "wordBankQuestion":
                return new Wc(c);
            case "typeInQuestion":
                return new hd;
            case "fillInTheBlankSurveyQuestion":
                return new Uc(c, d);
            case "shortAnswerQuestion":
                return new fd;
            case "whichWordQuestion":
                return new od(c);
            case "numericQuestion":
                return new Tc(c);
            case "multipleChoiceQuestion":
                return new V(c);
            case "multipleResponseQuestion":
                return new cd(c);
            case "numericSurveyQuestion":
                return new Yc(c);
            case "multipleChoiceTextQuestion":
                return new ed(c);
            case "sequenceQuestion":
                return new Vc(c);
            case "multipleChoiceTextSurveyQuestion":
                return new id(c);
            case "rankingQuestion":
                return new Rc(c);
            case "pickManyQuestion":
                return new $c(c);
            case "matchingQuestion":
                return new nd(c);
            case "matchingSurveyQuestion":
                return new bd(c);
            case "pickOneQuestion":
                return new W(c);
            case "trueFalseQuestion":
                return new rd(c);
            case "yesNoQuestion":
                return new gd
        }
        return null
    };

    function X(a, b, c) {
        try {
            this.Da = b;
            this.o = new Gc;
            this.na = {};
            this.M = new Nc(c.slidesToView, c.slidesWeight, c.quizzes || {}, c.scenarios || {}, c.totalScore, c.passingScore);
            this.P = new Zb(1E3 * c.timeLimit, c.exitOnTimeout, c.showMessageOnTimeout, c.timeoutMessage);
            this.aa = new Tb(this.P.timeLimit(), this.P.Ga);
            var d = new Ub(c.flags);
            this.A = "never" != c.resumeMode;
            var e = new Wb(0, d, c.tincan.i18n, 0, 0, 0, this.A);
            this.qb = new Yb;
            this.s = Xb(b, e, this.qb)
        } catch (f) {
            Kb() && alert(f)
        }
    }
    h = X.prototype;
    h.B = !1;
    h.ia = null;
    h.la = !1;
    h.m = null;
    h.N = null;
    h.rb = !1;
    h.F = null;
    h.H = null;
    var ud = h.ja = null;
    q("iSpring.LMS.create", function(a, b, c) {
        return ud = new X(0, b, c)
    }, void 0);
    q("iSpring.LMS.instance", function() {
        return ud
    }, void 0);
    X.prototype.S = function(a) {
        this.ia = a;
        null != this.s ? this.s.S(t(this.Db, this), t(this.ib, this)) : this.ib()
    };
    X.prototype.initialize = X.prototype.S;
    X.prototype.Db = function() {
        this.X = "normal";
        var a = null,
            b = this.s.l.ca("cmi.suspend_data"),
            c;
        if (b) a: {
            b = LZString.decompressFromBase64(b);
            try {
                c = rb(b);
                break a
            } catch (d) {}
            c = null
        }
        else c = null;
        switch (this.X) {
            case "browse":
                a = null;
                break;
            case "review":
                c && (a = vd(this, c));
                break;
            case "normal":
                this.A && c && (a = vd(this, c))
        }
        window.launchMode = this.X;
        p(a) && (this.B = !0, this.ia && this.ia(a))
    };

    function vd(a, b) {
        var c = new Gc;
        c.L = za(b, Hc, 0);
        c.oa = za(b, Ic, -1);
        c.R = za(b, Jc, []);
        c.pa = za(b, Kc, null);
        var d = {},
            e = za(b, Lc, {}),
            f;
        for (f in e) {
            var g = e[f];
            d[f] = new yc(g[Dc], g[zc], g[Ac], g[Bc], g[Cc])
        }
        c.I = d;
        a.N = c;
        c = a.N.duration();
        if (a.P.Ga && c >= a.P.timeLimit()) alert("You have already exceeded available time for viewing this content."), qc(), Eb();
        else return a.N.pa
    }
    X.prototype.ib = function() {
        this.ia && this.ia()
    };
    X.prototype.start = function(a) {
        this.B && (this.m = a, this.la = !0, this.qb.Lb.Wa(a.presentation().title()), a.startupEvent().addHandler(this.jb, this), a.startupCompletedEvent().addHandler(this.kb, this), a.closeWindowEvent().addHandler(this.fb, this))
    };
    X.prototype.start = X.prototype.start;
    X.prototype.jb = function(a) {
        this.m.startupEvent().removeHandler(this.jb, this);
        var b = (this.A || "review" == this.X) && this.N ? this.N.oa : -1;
        0 <= b ? (a.setSlideIndex(b), a.setAction("resumePlayback")) : (b = this.m.view().playbackController().firstSlideIndex(), a.setSlideIndex(b), a.setAction("gotoSlide"))
    };
    X.prototype.kb = function(a, b) {
        this.m.startupCompletedEvent().removeHandler(this.kb, this);
        this.rb = !0;
        "resumePlayback" == a && this.N && (this.o = this.N);
        var c = this.o.duration();
        this.aa.O || (this.aa.tb.addHandler(this.Pa, this), this.aa.start(c));
        c = this.m.view().playbackController();
        c.slideChangeEvent().addHandler(this.Ma, this);
        c = c.currentSlideIndex();
        c == b && this.Ma(c);
        this.m.stateChangedEvent().addHandler(this.lb, this)
    };
    X.prototype.ub = function() {
        this.la && wd(this, this.A)
    };
    X.prototype.closeLms = X.prototype.ub;

    function wd(a, b) {
        a.la && (a.la = !1, a.rb && (a.aa.stop(), xd(a), a.m.view().playbackController().slideChangeEvent().removeHandler(a.Ma, a)), a.m.closeWindowEvent().removeHandler(a.fb, a), a.m.stateChangedEvent().removeHandler(a.lb, a), b ? a.s.suspend() : a.s.terminate())
    }
    h = X.prototype;
    h.Ma = function(a) {
        if (this.F) {
            var b = this.F;
            b.currentSessionChangedEvent().removeHandler(this.gb, this);
            (b = b.currentSession()) && yd(this, b);
            this.F = null
        }
        this.H && (this.H.currentSessionChangedEvent().removeHandler(this.hb, this), null != this.ja && zd(this), this.H = null);
        b = this.m.view().playbackController();
        if (a in this.M.G) {
            var c = this.F = b.quizPlayer(),
                d = da(c) + "";
            d in this.na || (this.na[d] = !0, (d = Ad(this.s.l)) && c.setUserInfo(d.id(), {
                USER_NAME: d.name(),
                USER_EMAIL: d.email()
            }));
            c.currentSessionChangedEvent().addHandler(this.gb,
                this);
            (c = c.currentSession()) && Bd(this, c)
        }
        a in this.M.Z && (b = this.H = b.scenarioPlayer(), c = da(b) + "", c in this.na || (this.na[c] = !0, c = Ad(this.s.l), d = !b.userInfoIsLoaded(), c && d && b.setUserInfo(c.id(), {
            USER_NAME: c.name(),
            USER_EMAIL: c.email()
        })), c = b.currentSession(), null != c && Cd(this, c), b.currentSessionChangedEvent().addHandler(this.hb, this));
        b = this.m.presentation().slides().getSlide(a);
        "normal" == this.X && b.title() && b.title();
        b = this.o.R;
        0 <= Ca(b, a) || b.push(a);
        this.o.oa = a;
        Dd(this)
    };

    function xd(a) {
        var b = a.aa,
            b = b.O ? ia() - b.sa + b.Y : b.va,
            c = a.aa,
            c = c.O ? ia() - c.sa : c.Fa;
        a.o.Ba(b);
        a.s.l.j("cmi.core.session_time", pc(c / 1E3));
        b = a.m.persistState();
        a.o.pa = b;
        b = a.s.l;
        a = (new sb(void 0)).serialize(a.o.Ya());
        a = LZString.compressToBase64(a);
        b.j("cmi.suspend_data", a)
    }

    function Dd(a) {
        var b = a.M;
        if (0 < b.J || 0 < b.ea) {
            var c = Ed(a),
                d = b.totalScore() * c;
            a.s.T(c, 0, b.totalScore(), d)
        }
        a.m.presentation().slides().count();
        a.s.U(Fd(a), Gd(a));
        xd(a);
        a.s.ba()
    }

    function Fd(a) {
        var b = a.M,
            c;
        if (!(c = !(0 < b.J || 0 < b.ea)) && (c = a.A)) {
            var d;
            a: if (0 < a.M.J && 0 < a.o.R.length) d = !0;
                else {
                    c = a.o.I;
                    for (d in c)
                        if (-1 != Ca(a.o.R, parseInt(d, 10))) {
                            d = !0;
                            break a
                        }
                    d = !1
                }
            c = !d
        }
        return c ? null : Ed(a) * b.totalScore() >= b.passingScore()
    }

    function Gd(a) {
        var b = a.M,
            c = 0 < b.J ? b.slidesToView() : a.m.presentation().slides().count(),
            b = xa(a.o.I) == xa(b.G) + xa(b.Z);
        return a.o.R.length >= c && b
    }

    function Ed(a) {
        var b = a.M;
        if (!(0 < b.J || 0 < b.ea)) return 0;
        var c = 0,
            d = a.o.I,
            e;
        for (e in d) var f = d[e],
            g = parseInt(e, 10),
            c = c + (null != f.Za ? f.Za : 1) * (null != (g in b.G ? b.G[g] : null) ? g in b.G ? b.G[g] : 0 : g in b.Z ? b.Z[g] : 0);
        d = 0;
        0 < b.J && (d = a.m.presentation().slides().count(), d = a.o.R.length / d * b.slidesWeight());
        a = Mc(ya(b.G)) + Mc(ya(b.Z)) + b.slidesWeight();
        return (c + d) / a
    }
    h.hb = function() {
        null != this.ja && zd(this);
        var a = this.H.currentSession();
        Cd(this, a)
    };

    function Cd(a, b) {
        "normal" == a.X && (a.ja = b, b.showTerminalSceneEvent().addHandler(a.Oa, a), b.onReplySelectedEvent().addHandler(a.Na, a), b.scenario().id(), b.scenario().title(), b.completed() && a.Oa())
    }

    function zd(a) {
        var b = a.ja;
        a.ja = null;
        b.showTerminalSceneEvent().removeHandler(a.Oa, a);
        b.onReplySelectedEvent().removeHandler(a.Na, a)
    }
    h.Oa = function() {
        var a = this.H.currentSession(),
            b = a.currentSceneState().scene();
        null != b && (null != b.speech() && 0 < b.speech().length || null != b.message() && 0 < b.message().text().length) && this.Na();
        if (a.scenario().settings().evaluationSettings().enabled()) var b = Math.max(0, a.maxScore()),
            c = Math.max(0, a.userScore()),
            d = 0 < b - 0 ? c / (b - 0) : 1,
            b = new yc("scenario", a.scenarioPassed(), b, c, d);
        else b = new yc("scenario", !0);
        c = this.m.view().playbackController().currentSlideIndex();
        this.o.I[c + ""] = b;
        b = new vc;
        b.duration = a.duration();
        a.scenario().settings().evaluationSettings().enabled() && (b.wb = 0, b.maxScore = Math.max(0, a.maxScore()), b.awardedScore = Math.max(0, a.userScore()), b.ya = a.scenarioPassed());
        a.scenario().id();
        a.scenario().title();
        Dd(this)
    };
    h.Na = function(a) {
        var b = this.H.currentSession(),
            c = b.currentSceneState().scene();
        null != c && (a = (new fc(b, c, "1.2" == this.Da, a)).create(), w(a, function(a) {
            if ("tincan" == this.Da || a.type() == O) {
                var c = "/scenarios/" + b.scenario().id(),
                    d = c + "/scenes/" + a.id(),
                    g;
                g = a.type() == O ? nc : lc;
                this.s.xa(c, d, g, a)
            }
        }, this))
    };

    function Bd(a, b) {
        "normal" == a.X && (b.quizStateChangeEvent().addHandler(a.nb, a), b.slidePoolState().forEach(function(b) {
            var c = b.slide().type();
            Rb(c) && b.submitEvent().addHandler(a.mb, a)
        }), b.quiz().id(), b.quiz().title())
    }

    function yd(a, b) {
        b.quizStateChangeEvent().removeHandler(a.nb, a);
        b.slidePoolState().forEach(function(b) {
            var c = b.slide().type();
            Rb(c) && b.submitEvent().removeHandler(a.mb, a)
        })
    }
    h.gb = function(a, b) {
        b && yd(this, b);
        Bd(this, a)
    };
    h.nb = function(a) {
        "inProgress" == a && Hd(this)
    };

    function Hd(a) {
        var b = a.F.currentSession(),
            c = Ec(b),
            d = a.m.view().playbackController().currentSlideIndex();
        a.o.I[d + ""] = c;
        c = new vc;
        c.duration = b.testDuration();
        if ("graded" == b.quiz().type()) {
            d = "byGroups" == b.settings().passingScoreType();
            c.wb = 0;
            c.maxScore = d ? 100 : b.maxScore();
            if (d) {
                var e = 0,
                    f = 0;
                b.slidePoolState().forEach(function(a) {
                    "slidePool" == a.slide().type() && 0 != a.maxScore() && (f++, a.isPassed() && e++)
                });
                c.awardedScore = 100 * (f ? e / f : 0)
            } else c.awardedScore = b.awardedScore();
            c.ya = b.quizPassed();
            Id(a)
        }
        b.quiz().id();
        b.quiz().title();
        Dd(a)
    }
    h.mb = function(a) {
        var b = this.F.currentSession();
        if (a.initiated() && (a = td(a.slide().type(), this.Da).create(a))) {
            var b = "/quizzes/" + b.quiz().id(),
                c = b + "/questions/" + a.id();
            this.s.xa(b, c, mc, a)
        }
    };

    function Id(a) {
        var b = a.F.currentSession();
        xc(new wc(a.s, b))
    }
    h.fb = function(a) {
        a.preventAction();
        this.ub()
    };
    h.Pa = function() {
        this.P.Jb && alert(this.P.message());
        this.P.Ga && wd(this, !1)
    };
    h.lb = function(a) {
        a.actionPrevented() || (a.preventAction(), xd(this))
    };

    function Jd() {}
    h = Jd.prototype;
    h.l = null;
    h.vb = function() {
        throw Error("unimplemented abstract method");
    };
    h.S = function(a, b) {
        if (this.l = this.vb()) {
            var c = this.l;
            c.B ? a() : null != c.u ? (c.B = c.u.S(), c.B ? a() : b()) : (c.B = !1, b())
        } else b()
    };
    h.ba = function() {
        this.l.ba()
    };
    h.suspend = function() {
        this.l.terminate(!0)
    };
    h.terminate = function() {
        this.l.terminate(!1)
    };
    h.U = function(a, b) {
        this.l.Ca(a);
        this.l.U(a, b)
    };
    h.T = function(a, b, c, d) {
        this.l.T(d, b, c, a)
    };
    h.xa = function(a, b, c, d) {
        this.l.xa(d)
    };

    function Kd(a, b) {
        this.da = a;
        this.Qa = !1;
        this.Ea = 0;
        this.A = b
    }
    h = Kd.prototype;
    h.S = function() {
        try {
            return "true" == this.da.LMSInitialize("")
        } catch (a) {}
        return !1
    };
    h.terminate = function(a) {
        this.j("cmi.core.exit", a ? this.Qa ? "" : "suspend" : "");
        this.ba();
        try {
            return "true" == this.da.LMSFinish("")
        } catch (b) {}
        return !1
    };
    h.ba = function() {
        0 == this.Ea && this.j("cmi.core.exit", this.A ? this.Qa ? "" : "suspend" : "");
        try {
            var a = "true" == this.da.LMSCommit("");
            this.Ea += 1;
            return a
        } catch (b) {}
        return !1
    };
    h.Ca = function(a) {
        this.Qa = a
    };
    h.ca = function(a) {
        try {
            return this.da.LMSGetValue(a)
        } catch (b) {}
        return ""
    };
    h.j = function(a, b) {
        if ("number" == typeof b) {
            var c;
            (c = p(c) ? c : !0) ? c = parseFloat(b.toFixed(2)) + "": (c = Math.pow(10, 2), c = Math.floor(b * c) / c + "");
            b = c + ""
        }
        try {
            return "true" == this.da.LMSSetValue(a, b)
        } catch (d) {}
        return !1
    };
    var Y = {
            id: "id",
            type: "type",
            score: "weighting",
            Ob: "correct_responses.%INDEX%.pattern",
            ka: "student_response",
            result: "result",
            duration: "latency",
            $a: "time"
        },
        Ld = {};

    function Md(a, b, c) {
        var d = a.id() + "_" + a.description(),
            d = M(d.substr(0, 255));
        c.j(b + Y.id, d);
        c.j(b + Y.type, a.type());
        c.j(b + Y.score, a.score());
        for (var d = a.Va() || [], e = 0; e < d.length; ++e) {
            var f = Y.Ob.replace("%INDEX%", e);
            c.j(b + f, d[e])
        }(d = a.ka()) && c.j(b + Y.ka, d);
        c.j(b + Y.result, function(a) {
            return "incorrect" == a ? "wrong" : a
        }(a.result()))
    };

    function Nd() {}
    q("Tincan.MobileHttpTransport.onRequestComplete", function(a, b, c) {
        var d;
        Od || (Od = new Nd);
        d = Od;
        var e = d.cb[a];
        if (null == e) return "";
        delete d.cb[a];
        pb(function() {
            if (b) e.onload(c);
            else e.onerror()
        }, 10);
        return "ok"
    }, void 0);
    var Od = null;
    Nd.prototype.cb = {};
    Nd.prototype.bb = function(a) {
        return new Bb("tincanRequest", [a])
    };

    function Ad(a) {
        return new rc(a.ca("cmi.core.student_id"), a.ca("cmi.core.student_name"), "")
    };

    function Pd(a) {
        var b = oc();
        this.u = b ? new Kd(b, a) : null;
        this.B = !1
    }
    h = Pd.prototype;
    h.S = function() {
        return this.B ? !0 : this.B = null != this.u ? this.u.S() : !1
    };
    h.terminate = function(a) {
        return null != this.u ? this.u.terminate(a) : !1
    };
    h.ba = function() {
        return null != this.u ? this.u.ba() : !1
    };
    h.ca = function(a) {
        return null != this.u ? this.u.ca(a) : ""
    };
    h.j = function(a, b) {
        return null != this.u ? this.u.j(a, b) : !1
    };
    h.T = function(a, b, c) {
        this.j("cmi.core.score.raw", a);
        this.j("cmi.core.score.min", b);
        this.j("cmi.core.score.max", c)
    };
    h.U = function(a, b) {
        null === a ? null === b ? this.j("cmi.core.lesson_status", "unknown") : this.j("cmi.core.lesson_status", b ? "completed" : "incomplete") : this.j("cmi.core.lesson_status", a ? "passed" : "failed")
    };
    h.Ca = function(a) {
        this.u.Ca(a)
    };
    h.xa = function(a) {
        var b = a.id(),
            c;
        a.id() in Ld ? c = Ld[b] : (c = parseInt(this.ca("cmi.interactions._count"), 10), c = 250 <= c ? -1 : c, Ld[b] = c);
        0 > c || (b = "cmi.interactions." + c + ".", Md(a, b, this), c = a.duration(), null === c || this.j(b + Y.duration, pc(c / 1E3)), a = a.$a(), null === a || this.j(b + Y.$a, pc(3600 * a.getHours() + 60 * a.getMinutes() + a.getSeconds())))
    };

    function Z(a) {
        this.Ra = a.Ra;
        this.A = a.A
    }
    u(Z, Jd);
    q("iSpring.LMSAPI.Scorm12Api", Z, void 0);
    Z.prototype.vb = function() {
        return new Pd(this.A)
    };
    Z.prototype.U = function(a, b) {
        var c = null === a,
            d = c ? b : a;
        this.l.Ca(a);
        null === d ? this.l.U(null, null) : !c && this.Ra.Eb & (d ? 2 : 1) ? this.l.U(d, null) : this.l.U(null, d)
    };
    Z.prototype.suspend = function() {
        Z.g.suspend.call(this);
        qc();
        Eb()
    };
    Z.prototype.terminate = function() {
        Z.g.terminate.call(this);
        qc();
        Eb()
    };
})();
var LZString = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    _f: String.fromCharCode,
    compressToBase64: function(e) {
        if (e == null) return "";
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = LZString.compress(e);
        while (f < e.length * 2) {
            if (f % 2 == 0) {
                n = e.charCodeAt(f / 2) >> 8;
                r = e.charCodeAt(f / 2) & 255;
                if (f / 2 + 1 < e.length) i = e.charCodeAt(f / 2 + 1) >> 8;
                else i = NaN
            } else {
                n = e.charCodeAt((f - 1) / 2) & 255;
                if ((f + 1) / 2 < e.length) {
                    r = e.charCodeAt((f + 1) / 2) >> 8;
                    i = e.charCodeAt((f + 1) / 2) & 255
                } else r = i = NaN
            }
            f += 3;
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + LZString._keyStr.charAt(s) + LZString._keyStr.charAt(o) + LZString._keyStr.charAt(u) + LZString._keyStr.charAt(a)
        }
        return t
    },
    decompressFromBase64: function(e) {
        if (e == null) return "";
        var t = "",
            n = 0,
            r, i, s, o, u, a, f, l, c = 0,
            h = LZString._f;
        e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (c < e.length) {
            u = LZString._keyStr.indexOf(e.charAt(c++));
            a = LZString._keyStr.indexOf(e.charAt(c++));
            f = LZString._keyStr.indexOf(e.charAt(c++));
            l = LZString._keyStr.indexOf(e.charAt(c++));
            i = u << 2 | a >> 4;
            s = (a & 15) << 4 | f >> 2;
            o = (f & 3) << 6 | l;
            if (n % 2 == 0) {
                r = i << 8;
                if (f != 64) {
                    t += h(r | s)
                }
                if (l != 64) {
                    r = o << 8
                }
            } else {
                t = t + h(r | i);
                if (f != 64) {
                    r = s << 8
                }
                if (l != 64) {
                    t += h(r | o)
                }
            }
            n += 3
        }
        return LZString.decompress(t)
    },
    compressToUTF16: function(e) {
        if (e == null) return "";
        var t = "",
            n, r, i, s = 0,
            o = LZString._f;
        e = LZString.compress(e);
        for (n = 0; n < e.length; n++) {
            r = e.charCodeAt(n);
            switch (s++) {
                case 0:
                    t += o((r >> 1) + 32);
                    i = (r & 1) << 14;
                    break;
                case 1:
                    t += o(i + (r >> 2) + 32);
                    i = (r & 3) << 13;
                    break;
                case 2:
                    t += o(i + (r >> 3) + 32);
                    i = (r & 7) << 12;
                    break;
                case 3:
                    t += o(i + (r >> 4) + 32);
                    i = (r & 15) << 11;
                    break;
                case 4:
                    t += o(i + (r >> 5) + 32);
                    i = (r & 31) << 10;
                    break;
                case 5:
                    t += o(i + (r >> 6) + 32);
                    i = (r & 63) << 9;
                    break;
                case 6:
                    t += o(i + (r >> 7) + 32);
                    i = (r & 127) << 8;
                    break;
                case 7:
                    t += o(i + (r >> 8) + 32);
                    i = (r & 255) << 7;
                    break;
                case 8:
                    t += o(i + (r >> 9) + 32);
                    i = (r & 511) << 6;
                    break;
                case 9:
                    t += o(i + (r >> 10) + 32);
                    i = (r & 1023) << 5;
                    break;
                case 10:
                    t += o(i + (r >> 11) + 32);
                    i = (r & 2047) << 4;
                    break;
                case 11:
                    t += o(i + (r >> 12) + 32);
                    i = (r & 4095) << 3;
                    break;
                case 12:
                    t += o(i + (r >> 13) + 32);
                    i = (r & 8191) << 2;
                    break;
                case 13:
                    t += o(i + (r >> 14) + 32);
                    i = (r & 16383) << 1;
                    break;
                case 14:
                    t += o(i + (r >> 15) + 32, (r & 32767) + 32);
                    s = 0;
                    break
            }
        }
        return t + o(i + 32)
    },
    decompressFromUTF16: function(e) {
        if (e == null) return "";
        var t = "",
            n, r, i = 0,
            s = 0,
            o = LZString._f;
        while (s < e.length) {
            r = e.charCodeAt(s) - 32;
            switch (i++) {
                case 0:
                    n = r << 1;
                    break;
                case 1:
                    t += o(n | r >> 14);
                    n = (r & 16383) << 2;
                    break;
                case 2:
                    t += o(n | r >> 13);
                    n = (r & 8191) << 3;
                    break;
                case 3:
                    t += o(n | r >> 12);
                    n = (r & 4095) << 4;
                    break;
                case 4:
                    t += o(n | r >> 11);
                    n = (r & 2047) << 5;
                    break;
                case 5:
                    t += o(n | r >> 10);
                    n = (r & 1023) << 6;
                    break;
                case 6:
                    t += o(n | r >> 9);
                    n = (r & 511) << 7;
                    break;
                case 7:
                    t += o(n | r >> 8);
                    n = (r & 255) << 8;
                    break;
                case 8:
                    t += o(n | r >> 7);
                    n = (r & 127) << 9;
                    break;
                case 9:
                    t += o(n | r >> 6);
                    n = (r & 63) << 10;
                    break;
                case 10:
                    t += o(n | r >> 5);
                    n = (r & 31) << 11;
                    break;
                case 11:
                    t += o(n | r >> 4);
                    n = (r & 15) << 12;
                    break;
                case 12:
                    t += o(n | r >> 3);
                    n = (r & 7) << 13;
                    break;
                case 13:
                    t += o(n | r >> 2);
                    n = (r & 3) << 14;
                    break;
                case 14:
                    t += o(n | r >> 1);
                    n = (r & 1) << 15;
                    break;
                case 15:
                    t += o(n | r);
                    i = 0;
                    break
            }
            s++
        }
        return LZString.decompress(t)
    },
    compress: function(e) {
        if (e == null) return "";
        var t, n, r = {},
            i = {},
            s = "",
            o = "",
            u = "",
            a = 2,
            f = 3,
            l = 2,
            c = "",
            h = 0,
            p = 0,
            d, v = LZString._f;
        for (d = 0; d < e.length; d += 1) {
            s = e.charAt(d);
            if (!Object.prototype.hasOwnProperty.call(r, s)) {
                r[s] = f++;
                i[s] = true
            }
            o = u + s;
            if (Object.prototype.hasOwnProperty.call(r, o)) {
                u = o
            } else {
                if (Object.prototype.hasOwnProperty.call(i, u)) {
                    if (u.charCodeAt(0) < 256) {
                        for (t = 0; t < l; t++) {
                            h = h << 1;
                            if (p == 15) {
                                p = 0;
                                c += v(h);
                                h = 0
                            } else {
                                p++
                            }
                        }
                        n = u.charCodeAt(0);
                        for (t = 0; t < 8; t++) {
                            h = h << 1 | n & 1;
                            if (p == 15) {
                                p = 0;
                                c += v(h);
                                h = 0
                            } else {
                                p++
                            }
                            n = n >> 1
                        }
                    } else {
                        n = 1;
                        for (t = 0; t < l; t++) {
                            h = h << 1 | n;
                            if (p == 15) {
                                p = 0;
                                c += v(h);
                                h = 0
                            } else {
                                p++
                            }
                            n = 0
                        }
                        n = u.charCodeAt(0);
                        for (t = 0; t < 16; t++) {
                            h = h << 1 | n & 1;
                            if (p == 15) {
                                p = 0;
                                c += v(h);
                                h = 0
                            } else {
                                p++
                            }
                            n = n >> 1
                        }
                    }
                    a--;
                    if (a == 0) {
                        a = Math.pow(2, l);
                        l++
                    }
                    delete i[u]
                } else {
                    n = r[u];
                    for (t = 0; t < l; t++) {
                        h = h << 1 | n & 1;
                        if (p == 15) {
                            p = 0;
                            c += v(h);
                            h = 0
                        } else {
                            p++
                        }
                        n = n >> 1
                    }
                }
                a--;
                if (a == 0) {
                    a = Math.pow(2, l);
                    l++
                }
                r[o] = f++;
                u = String(s)
            }
        }
        if (u !== "") {
            if (Object.prototype.hasOwnProperty.call(i, u)) {
                if (u.charCodeAt(0) < 256) {
                    for (t = 0; t < l; t++) {
                        h = h << 1;
                        if (p == 15) {
                            p = 0;
                            c += v(h);
                            h = 0
                        } else {
                            p++
                        }
                    }
                    n = u.charCodeAt(0);
                    for (t = 0; t < 8; t++) {
                        h = h << 1 | n & 1;
                        if (p == 15) {
                            p = 0;
                            c += v(h);
                            h = 0
                        } else {
                            p++
                        }
                        n = n >> 1
                    }
                } else {
                    n = 1;
                    for (t = 0; t < l; t++) {
                        h = h << 1 | n;
                        if (p == 15) {
                            p = 0;
                            c += v(h);
                            h = 0
                        } else {
                            p++
                        }
                        n = 0
                    }
                    n = u.charCodeAt(0);
                    for (t = 0; t < 16; t++) {
                        h = h << 1 | n & 1;
                        if (p == 15) {
                            p = 0;
                            c += v(h);
                            h = 0
                        } else {
                            p++
                        }
                        n = n >> 1
                    }
                }
                a--;
                if (a == 0) {
                    a = Math.pow(2, l);
                    l++
                }
                delete i[u]
            } else {
                n = r[u];
                for (t = 0; t < l; t++) {
                    h = h << 1 | n & 1;
                    if (p == 15) {
                        p = 0;
                        c += v(h);
                        h = 0
                    } else {
                        p++
                    }
                    n = n >> 1
                }
            }
            a--;
            if (a == 0) {
                a = Math.pow(2, l);
                l++
            }
        }
        n = 2;
        for (t = 0; t < l; t++) {
            h = h << 1 | n & 1;
            if (p == 15) {
                p = 0;
                c += v(h);
                h = 0
            } else {
                p++
            }
            n = n >> 1
        }
        while (true) {
            h = h << 1;
            if (p == 15) {
                c += v(h);
                break
            } else p++
        }
        return c
    },
    decompress: function(e) {
        if (e == null) return "";
        if (e == "") return null;
        var t = [],
            n, r = 4,
            i = 4,
            s = 3,
            o = "",
            u = "",
            a, f, l, c, h, p, d, v = LZString._f,
            m = {
                string: e,
                val: e.charCodeAt(0),
                position: 32768,
                index: 1
            };
        for (a = 0; a < 3; a += 1) {
            t[a] = a
        }
        l = 0;
        h = Math.pow(2, 2);
        p = 1;
        while (p != h) {
            c = m.val & m.position;
            m.position >>= 1;
            if (m.position == 0) {
                m.position = 32768;
                m.val = m.string.charCodeAt(m.index++)
            }
            l |= (c > 0 ? 1 : 0) * p;
            p <<= 1
        }
        switch (n = l) {
            case 0:
                l = 0;
                h = Math.pow(2, 8);
                p = 1;
                while (p != h) {
                    c = m.val & m.position;
                    m.position >>= 1;
                    if (m.position == 0) {
                        m.position = 32768;
                        m.val = m.string.charCodeAt(m.index++)
                    }
                    l |= (c > 0 ? 1 : 0) * p;
                    p <<= 1
                }
                d = v(l);
                break;
            case 1:
                l = 0;
                h = Math.pow(2, 16);
                p = 1;
                while (p != h) {
                    c = m.val & m.position;
                    m.position >>= 1;
                    if (m.position == 0) {
                        m.position = 32768;
                        m.val = m.string.charCodeAt(m.index++)
                    }
                    l |= (c > 0 ? 1 : 0) * p;
                    p <<= 1
                }
                d = v(l);
                break;
            case 2:
                return ""
        }
        t[3] = d;
        f = u = d;
        while (true) {
            if (m.index > m.string.length) {
                return ""
            }
            l = 0;
            h = Math.pow(2, s);
            p = 1;
            while (p != h) {
                c = m.val & m.position;
                m.position >>= 1;
                if (m.position == 0) {
                    m.position = 32768;
                    m.val = m.string.charCodeAt(m.index++)
                }
                l |= (c > 0 ? 1 : 0) * p;
                p <<= 1
            }
            switch (d = l) {
                case 0:
                    l = 0;
                    h = Math.pow(2, 8);
                    p = 1;
                    while (p != h) {
                        c = m.val & m.position;
                        m.position >>= 1;
                        if (m.position == 0) {
                            m.position = 32768;
                            m.val = m.string.charCodeAt(m.index++)
                        }
                        l |= (c > 0 ? 1 : 0) * p;
                        p <<= 1
                    }
                    t[i++] = v(l);
                    d = i - 1;
                    r--;
                    break;
                case 1:
                    l = 0;
                    h = Math.pow(2, 16);
                    p = 1;
                    while (p != h) {
                        c = m.val & m.position;
                        m.position >>= 1;
                        if (m.position == 0) {
                            m.position = 32768;
                            m.val = m.string.charCodeAt(m.index++)
                        }
                        l |= (c > 0 ? 1 : 0) * p;
                        p <<= 1
                    }
                    t[i++] = v(l);
                    d = i - 1;
                    r--;
                    break;
                case 2:
                    return u
            }
            if (r == 0) {
                r = Math.pow(2, s);
                s++
            }
            if (t[d]) {
                o = t[d]
            } else {
                if (d === i) {
                    o = f + f.charAt(0)
                } else {
                    return null
                }
            }
            u += o;
            t[i++] = f + o.charAt(0);
            r--;
            f = o;
            if (r == 0) {
                r = Math.pow(2, s);
                s++
            }
        }
    }
};
if (typeof module !== "undefined" && module != null) {
    module.exports = LZString
}

