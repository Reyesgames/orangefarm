/** Cooked with Flambe, https://getflambe.com */
'use strict';
(function() {
    function x(a, b) {
        function c() {}
        c.prototype = a;
        var e = new c,
            d;
        for (d in b) e[d] = b[d];
        b.toString !== Object.prototype.toString && (e.toString = b.toString);
        return e
    }

    function uc(a) {
        return a instanceof Array ? function() {
            return B.iter(a)
        } : "function" == typeof a.iterator ? t(a, a.iterator) : a.iterator
    }

    function t(a, b) {
        if (null == b) return null;
        null == b.__id__ && (b.__id__ = We++);
        var c;
        null == a.hx__closures__ ? a.hx__closures__ = {} : c = a.hx__closures__[b.__id__];
        null == c && (c = function() {
            return c.method.apply(c.scope,
                arguments)
        }, c.scope = a, c.method = b, a.hx__closures__[b.__id__] = c);
        return c
    }
    var g = {},
        h = function() {
            return ta.__string_rec(this, "")
        },
        Ib = function(a, b) {
            b = b.split("u").join("");
            this.r = RegExp(a, b)
        };
    g.EReg = Ib;
    Ib.__name__ = ["EReg"];
    Ib.prototype = {
        match: function(a) {
            this.r.global && (this.r.lastIndex = 0);
            this.r.m = this.r.exec(a);
            this.r.s = a;
            return null != this.r.m
        },
        matched: function(a) {
            if (null != this.r.m && 0 <= a && a < this.r.m.length) return this.r.m[a];
            throw "EReg::matched";
        },
        matchedPos: function() {
            if (null == this.r.m) throw "No string matched";
            return {
                pos: this.r.m.index,
                len: this.r.m[0].length
            }
        },
        __class__: Ib
    };
    var vc = function() {};
    g.FlambePointExtender = vc;
    vc.__name__ = ["FlambePointExtender"];
    vc.sub = function(a, b) {
        a.set(a.x - b.x, a.y - b.y);
        return a
    };
    var B = function() {};
    g.HxOverrides = B;
    B.__name__ = ["HxOverrides"];
    B.dateStr = function(a) {
        var b = a.getMonth() + 1,
            c = a.getDate(),
            e = a.getHours(),
            d = a.getMinutes(),
            j = a.getSeconds();
        return a.getFullYear() + "-" + (10 > b ? "0" + b : "" + b) + "-" + (10 > c ? "0" + c : "" + c) + " " + (10 > e ? "0" + e : "" + e) + ":" + (10 > d ? "0" + d : "" + d) + ":" + (10 > j ? "0" + j : "" + j)
    };
    B.strDate = function(a) {
        switch (a.length) {
            case 8:
                var a = a.split(":"),
                    b = new Date;
                b.setTime(0);
                b.setUTCHours(a[0]);
                b.setUTCMinutes(a[1]);
                b.setUTCSeconds(a[2]);
                return b;
            case 10:
                return a = a.split("-"), new Date(a[0], a[1] - 1, a[2], 0, 0, 0);
            case 19:
                return b = a.split(" "), a = b[0].split("-"), b = b[1].split(":"), new Date(a[0], a[1] - 1, a[2], b[0], b[1], b[2]);
            default:
                throw "Invalid date format : " + a;
        }
    };
    B.cca = function(a, b) {
        var c = a.charCodeAt(b);
        return c != c ? void 0 : c
    };
    B.substr = function(a, b, c) {
        if (null != b && 0 != b && null != c && 0 > c) return "";
        null == c && (c = a.length);
        0 > b ? (b = a.length + b, 0 > b && (b = 0)) : 0 > c && (c = a.length + c - b);
        return a.substr(b, c)
    };
    B.remove = function(a, b) {
        var c = a.indexOf(b);
        if (-1 == c) return !1;
        a.splice(c, 1);
        return !0
    };
    B.iter = function(a) {
        return {
            cur: 0,
            arr: a,
            hasNext: function() {
                return this.cur < this.arr.length
            },
            next: function() {
                return this.arr[this.cur++]
            }
        }
    };
    var Sa = function() {};
    g.Lambda = Sa;
    Sa.__name__ = ["Lambda"];
    Sa.array = function(a) {
        for (var b = [], a = uc(a)(); a.hasNext();) {
            var c = a.next();
            b.push(c)
        }
        return b
    };
    Sa.map = function(a, b) {
        for (var c = new Ka,
                e = uc(a)(); e.hasNext();) {
            var d = e.next();
            c.add(b(d))
        }
        return c
    };
    Sa.exists = function(a, b) {
        for (var c = uc(a)(); c.hasNext();) {
            var e = c.next();
            if (b(e)) return !0
        }
        return !1
    };
    Sa.fold = function(a, b, c) {
        for (a = uc(a)(); a.hasNext();) var e = a.next(),
            c = b(e, c);
        return c
    };
    Sa.count = function(a, b) {
        var c = 0;
        if (null == b)
            for (var e = uc(a)(); e.hasNext();) e.next(), c++;
        else
            for (e = uc(a)(); e.hasNext();) {
                var d = e.next();
                b(d) && c++
            }
        return c
    };
    var Ka = function() {
        this.length = 0
    };
    g.List = Ka;
    Ka.__name__ = ["List"];
    Ka.prototype = {
        add: function(a) {
            a = [a];
            null ==
                this.h ? this.h = a : this.q[1] = a;
            this.q = a;
            this.length++
        },
        first: function() {
            return null == this.h ? null : this.h[0]
        },
        isEmpty: function() {
            return null == this.h
        },
        remove: function(a) {
            for (var b = null, c = this.h; null != c;) {
                if (c[0] == a) return null == b ? this.h = c[1] : b[1] = c[1], this.q == c && (this.q = b), this.length--, !0;
                b = c;
                c = c[1]
            }
            return !1
        },
        iterator: function() {
            return {
                h: this.h,
                hasNext: function() {
                    return null != this.h
                },
                next: function() {
                    if (null == this.h) return null;
                    var a = this.h[0];
                    this.h = this.h[1];
                    return a
                }
            }
        },
        map: function(a) {
            for (var b = new Ka,
                    c = this.h; null != c;) {
                var e = c[0],
                    c = c[1];
                b.add(a(e))
            }
            return b
        },
        __class__: Ka
    };
    var wc = function() {};
    g.IMap = wc;
    wc.__name__ = ["IMap"];
    Math.__name__ = ["Math"];
    var O = function() {};
    g.Reflect = O;
    O.__name__ = ["Reflect"];
    O.field = function(a, b) {
        try {
            return a[b]
        } catch (c) {
            return null
        }
    };
    O.setField = function(a, b, c) {
        a[b] = c
    };
    O.callMethod = function(a, b, c) {
        return b.apply(a, c)
    };
    O.fields = function(a) {
        var b = [];
        if (null != a) {
            var c = Object.prototype.hasOwnProperty,
                e;
            for (e in a) "__id__" != e && "hx__closures__" != e && c.call(a, e) && b.push(e)
        }
        return b
    };
    O.isFunction = function(a) {
        return "function" == typeof a && !(a.__name__ || a.__ename__)
    };
    O.compare = function(a, b) {
        return a == b ? 0 : a > b ? 1 : -1
    };
    O.isEnumValue = function(a) {
        return null != a && null != a.__enum__
    };
    O.deleteField = function(a, b) {
        if (!Object.prototype.hasOwnProperty.call(a, b)) return !1;
        delete a[b];
        return !0
    };
    var Nd = function() {
        this.myMap = new jb
    };
    g.Set = Nd;
    Nd.__name__ = ["Set"];
    Nd.prototype = {
        clear: function() {
            this.myMap = new jb
        },
        insert: function(a) {
            this.myMap.set(a, !0)
        },
        exists: function(a) {
            return null != this.myMap.h.__keys__[a.__id__]
        },
        iterator: function() {
            return this.myMap.keys()
        },
        __class__: Nd
    };
    var n = function() {};
    g.Std = n;
    n.__name__ = ["Std"];
    n.is = function(a, b) {
        return ta.__instanceof(a, b)
    };
    n.instance = function(a, b) {
        return a instanceof b ? a : null
    };
    n.string = function(a) {
        return ta.__string_rec(a, "")
    };
    n["int"] = function(a) {
        return a | 0
    };
    n.parseInt = function(a) {
        var b = parseInt(a, 10);
        if (0 == b && (120 == B.cca(a, 1) || 88 == B.cca(a, 1))) b = parseInt(a);
        return isNaN(b) ? null : b
    };
    n.parseFloat = function(a) {
        return parseFloat(a)
    };
    n.random = function(a) {
        return 0 >= a ? 0 : Math.floor(Math.random() *
            a)
    };
    var Jb = function() {
        this.b = ""
    };
    g.StringBuf = Jb;
    Jb.__name__ = ["StringBuf"];
    Jb.prototype = {
        add: function(a) {
            this.b += n.string(a)
        },
        addSub: function(a, b, c) {
            this.b = null == c ? this.b + B.substr(a, b, null) : this.b + B.substr(a, b, c)
        },
        __class__: Jb
    };
    var F = function() {};
    g.StringTools = F;
    F.__name__ = ["StringTools"];
    F.startsWith = function(a, b) {
        return a.length >= b.length && B.substr(a, 0, b.length) == b
    };
    F.isSpace = function(a, b) {
        var c = B.cca(a, b);
        return 8 < c && 14 > c || 32 == c
    };
    F.ltrim = function(a) {
        for (var b = a.length, c = 0; c < b && F.isSpace(a, c);) c++;
        return 0 < c ? B.substr(a, c, b - c) : a
    };
    F.rtrim = function(a) {
        for (var b = a.length, c = 0; c < b && F.isSpace(a, b - c - 1);) c++;
        return 0 < c ? B.substr(a, 0, b - c) : a
    };
    F.trim = function(a) {
        return F.ltrim(F.rtrim(a))
    };
    F.lpad = function(a, b, c) {
        if (0 >= b.length) return a;
        for (; a.length < c;) a = b + a;
        return a
    };
    F.fastCodeAt = function(a, b) {
        return a.charCodeAt(b)
    };
    var H = g.ValueType = {
        __ename__: ["ValueType"],
        __constructs__: "TNull,TInt,TFloat,TBool,TObject,TFunction,TClass,TEnum,TUnknown".split(",")
    };
    H.TNull = ["TNull", 0];
    H.TNull.toString = h;
    H.TNull.__enum__ =
        H;
    H.TInt = ["TInt", 1];
    H.TInt.toString = h;
    H.TInt.__enum__ = H;
    H.TFloat = ["TFloat", 2];
    H.TFloat.toString = h;
    H.TFloat.__enum__ = H;
    H.TBool = ["TBool", 3];
    H.TBool.toString = h;
    H.TBool.__enum__ = H;
    H.TObject = ["TObject", 4];
    H.TObject.toString = h;
    H.TObject.__enum__ = H;
    H.TFunction = ["TFunction", 5];
    H.TFunction.toString = h;
    H.TFunction.__enum__ = H;
    H.TClass = function(a) {
        a = ["TClass", 6, a];
        a.__enum__ = H;
        a.toString = h;
        return a
    };
    H.TEnum = function(a) {
        a = ["TEnum", 7, a];
        a.__enum__ = H;
        a.toString = h;
        return a
    };
    H.TUnknown = ["TUnknown", 8];
    H.TUnknown.toString =
        h;
    H.TUnknown.__enum__ = H;
    H.__empty_constructs__ = [H.TNull, H.TInt, H.TFloat, H.TBool, H.TObject, H.TFunction, H.TUnknown];
    var S = function() {};
    g.Type = S;
    S.__name__ = ["Type"];
    S.getClass = function(a) {
        return null == a ? null : a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    S.getClassName = function(a) {
        return a.__name__.join(".")
    };
    S.getEnumName = function(a) {
        return a.__ename__.join(".")
    };
    S.resolveClass = function(a) {
        a = g[a];
        return null == a || !a.__name__ ? null : a
    };
    S.resolveEnum = function(a) {
        a = g[a];
        return null == a || !a.__ename__ ?
            null : a
    };
    S.createEmptyInstance = function(a) {
        function b() {}
        b.prototype = a.prototype;
        return new b
    };
    S.createEnum = function(a, b, c) {
        var e = O.field(a, b);
        if (null == e) throw "No such constructor " + b;
        if (O.isFunction(e)) {
            if (null == c) throw "Constructor " + b + " need parameters";
            return e.apply(a, c)
        }
        if (null != c && 0 != c.length) throw "Constructor " + b + " does not need parameters";
        return e
    };
    S.createEnumIndex = function(a, b, c) {
        var e = a.__constructs__[b];
        if (null == e) throw b + " is not a valid enum constructor index";
        return S.createEnum(a,
            e, c)
    };
    S.getEnumConstructs = function(a) {
        return a.__constructs__.slice()
    };
    S["typeof"] = function(a) {
        switch (typeof a) {
            case "boolean":
                return H.TBool;
            case "string":
                return H.TClass(String);
            case "number":
                return Math.ceil(a) == a % 2147483648 ? H.TInt : H.TFloat;
            case "object":
                if (null == a) return H.TNull;
                var b = a.__enum__;
                if (null != b) return H.TEnum(b);
                a = a instanceof Array && null == a.__enum__ ? Array : a.__class__;
                return null != a ? H.TClass(a) : H.TObject;
            case "function":
                return a.__name__ || a.__ename__ ? H.TObject : H.TFunction;
            case "undefined":
                return H.TNull;
            default:
                return H.TUnknown
        }
    };
    S.enumIndex = function(a) {
        return a[1]
    };
    S.allEnums = function(a) {
        return a.__empty_constructs__
    };
    var Od = function(a, b) {
        this.now = a;
        this.limit = b
    };
    g.DecIter = Od;
    Od.__name__ = ["DecIter"];
    Od.prototype = {
        hasNext: function() {
            return this.now >= this.limit
        },
        next: function() {
            return this.now--
        },
        __class__: Od
    };
    var pb = function(a) {
        var b = this;
        this.id = setInterval(function() {
            b.run()
        }, a)
    };
    g["haxe.Timer"] = pb;
    pb.__name__ = ["haxe", "Timer"];
    pb.delay = function(a, b) {
        var c = new pb(b);
        c.run = function() {
            c.stop();
            a()
        };
        return c
    };
    pb.stamp = function() {
        return (new Date).getTime() / 1E3
    };
    pb.prototype = {
        stop: function() {
            null != this.id && (clearInterval(this.id), this.id = null)
        },
        run: function() {},
        __class__: pb
    };
    var P = function() {};
    g.Util = P;
    P.__name__ = ["Util"];
    P.Assert = function(a) {
        a || P.NullRef.charAt(0)
    };
    P.NegIter = function(a, b) {
        return new Od(a, b)
    };
    P.LimitI = function(a, b, c) {
        a < b && (a = b);
        a > c && (a = c);
        return a
    };
    P.LimitF = function(a, b, c) {
        a < b && (a = b);
        a > c && (a = c);
        return a
    };
    var kb = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b;
        null
    };
    g.Vec2 = kb;
    kb.__name__ = ["Vec2"];
    kb.GetTForClosestPointOnLine = function(a, b, c) {
        var e = b.x * b.x + b.y * b.y;
        return 0 == e ? 0 : (new kb(c.x - a.x, c.y - a.y)).dot(b) / e
    };
    kb.prototype = {
        rotate: function(a) {
            var b = a * (Math.PI / 180),
                a = Math.cos(b),
                b = -Math.sin(b),
                c = this.x * b + this.y * a;
            this.x = this.x * a - this.y * b;
            this.y = c;
            null
        },
        dot: function(a) {
            return this.x * a.x + this.y * a.y
        },
        __class__: kb
    };
    var Za = function() {};
    g["flambe.util.Disposable"] = Za;
    Za.__name__ = ["flambe", "util", "Disposable"];
    Za.prototype = {
        __class__: Za
    };
    var k = function() {
        this._flags =
            0;
        this.owner = this.next = null
    };
    g["flambe.Component"] = k;
    k.__name__ = ["flambe", "Component"];
    k.__interfaces__ = [Za];
    k.prototype = {
        onAdded: function() {},
        onRemoved: function() {},
        onStart: function() {},
        onStop: function() {},
        onUpdate: function() {},
        dispose: function() {
            null != this.owner && this.owner.remove(this)
        },
        get_name: function() {
            return null
        },
        __class__: k
    };
    var lb = function() {
        k.call(this);
        this._disposables = []
    };
    g["flambe.Disposer"] = lb;
    lb.__name__ = ["flambe", "Disposer"];
    lb.__super__ = k;
    lb.prototype = x(k.prototype, {
        get_name: function() {
            return "Disposer_20"
        },
        add: function(a) {
            this._disposables.push(a);
            return this
        },
        onRemoved: function() {
            this.freeDisposables()
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.freeDisposables()
        },
        freeDisposables: function() {
            var a = this._disposables;
            this._disposables = [];
            for (var b = 0; b < a.length;) {
                var c = a[b];
                ++b;
                c.dispose()
            }
        },
        __class__: lb
    });
    var p = function() {
        this.parent = this.firstChild = this.next = this.firstComponent = null;
        this._compMap = {}
    };
    g["flambe.Entity"] = p;
    p.__name__ = ["flambe", "Entity"];
    p.__interfaces__ = [Za];
    p.prototype = {
        add: function(a) {
            null !=
                a.owner && a.owner.remove(a);
            var b = a.get_name(),
                c = this._compMap[b];
            null != c && this.remove(c);
            this._compMap[b] = a;
            b = null;
            for (c = this.firstComponent; null != c;) b = c, c = c.next;
            null != b ? b.next = a : this.firstComponent = a;
            a.owner = this;
            a.next = null;
            a.onAdded();
            return this
        },
        remove: function(a) {
            for (var b = null, c = this.firstComponent; null != c;) {
                var e = c.next;
                if (c == a) return null == b ? this.firstComponent = e : (b.owner = this, b.next = e), delete this._compMap[c.get_name()], 0 != (c._flags & 1) && (c.onStop(), c._flags &= -2), c.onRemoved(), c.owner = null,
                    c.next = null, !0;
                b = c;
                c = e
            }
            return !1
        },
        addChild: function(a, b) {
            null == b && (b = !0);
            null != a.parent && a.parent.removeChild(a);
            a.parent = this;
            if (b) {
                for (var c = null, e = this.firstChild; null != e;) c = e, e = e.next;
                null != c ? c.next = a : this.firstChild = a
            } else a.next = this.firstChild, this.firstChild = a;
            return this
        },
        removeChild: function(a) {
            for (var b = null, c = this.firstChild; null != c;) {
                var e = c.next;
                if (c == a) {
                    null == b ? this.firstChild = e : b.next = e;
                    c.parent = null;
                    c.next = null;
                    break
                }
                b = c;
                c = e
            }
        },
        disposeChildren: function() {
            for (; null != this.firstChild;) this.firstChild.dispose()
        },
        dispose: function() {
            for (null != this.parent && this.parent.removeChild(this); null != this.firstComponent;) this.firstComponent.dispose();
            this.disposeChildren()
        },
        __class__: p
    };
    var Ie = function() {};
    g["flambe.util.PackageLog"] = Ie;
    Ie.__name__ = ["flambe", "util", "PackageLog"];
    var Pd = function() {};
    g["flambe.platform.Platform"] = Pd;
    Pd.__name__ = ["flambe", "platform", "Platform"];
    Pd.prototype = {
        __class__: Pd
    };
    var qb = function() {};
    g["flambe.platform.html.HtmlPlatform"] = qb;
    qb.__name__ = ["flambe", "platform", "html", "HtmlPlatform"];
    qb.__interfaces__ = [Pd];
    qb.prototype = {
        init: function() {
            var a = this;
            I.fixAndroidMath();
            var b = null;
            try {
                b = window.flambe.canvas
            } catch (c) {}
            b.setAttribute("tabindex", "0");
            b.style.outlineStyle = "none";
            b.style.webkitTapHighlightColor = "transparent";
            b.setAttribute("moz-opaque", "true");
            I.callLater(function() {
                b.style.opacity = "0.99";
                I.callLater(function() {
                    b.style.opacity = "1.0";
                    null
                }, 200)
            });
            this._stage = new Kb(b);
            this._pointer = new ua;
            this._mouse = new xc(this._pointer, b);
            this._renderer = this.createRenderer(b);
            this.mainLoop =
                new Lb;
            this.musicPlaying = !1;
            this._canvas = b;
            this._container = b.parentElement;
            this._container.style.overflow = "hidden";
            this._container.style.position = "relative";
            this._container.style.msTouchAction = "none";
            var e = 0,
                d = function(c) {
                    if (!(1E3 > c.timeStamp - e)) {
                        var d = b.getBoundingClientRect(),
                            j = a.getX(c, d),
                            d = a.getY(c, d);
                        switch (c.type) {
                            case "mousedown":
                                c.target == b && (c.preventDefault(), a._mouse.submitDown(j, d, c.button), b.focus());
                                break;
                            case "mousemove":
                                a._mouse.submitMove(j, d);
                                break;
                            case "mouseup":
                                a._mouse.submitUp(j,
                                    d, c.button);
                                break;
                            case "mousewheel":
                            case "DOMMouseScroll":
                                a._mouse.submitScroll(j, d, "mousewheel" == c.type ? c.wheelDelta / 40 : -c.detail) && c.preventDefault()
                        }
                    }
                };
            window.addEventListener("mousedown", d, !1);
            window.addEventListener("mousemove", d, !1);
            window.addEventListener("mouseup", d, !1);
            b.addEventListener("mousewheel", d, !1);
            b.addEventListener("DOMMouseScroll", d, !1);
            b.addEventListener("contextmenu", function(a) {
                a.preventDefault()
            }, !1);
            var j = "undefined" != typeof window.ontouchstart,
                d = "msMaxTouchPoints" in window.navigator &&
                1 < window.navigator.msMaxTouchPoints;
            if (j || d) {
                var f = new yc(this._pointer, j ? 4 : window.navigator.msMaxTouchPoints);
                this._touch = f;
                d = function(b) {
                    var c;
                    c = j ? b.changedTouches : [b];
                    var d = b.target.getBoundingClientRect();
                    e = b.timeStamp;
                    switch (b.type) {
                        case "touchstart":
                        case "MSPointerDown":
                        case "pointerdown":
                            b.preventDefault();
                            I.SHOULD_HIDE_MOBILE_BROWSER && I.hideMobileBrowser();
                            for (b = 0; b < c.length;) {
                                var s = c[b];
                                ++b;
                                var g = a.getX(s, d),
                                    w = a.getY(s, d);
                                f.submitDown((j ? s.identifier : s.pointerId) | 0, g, w)
                            }
                            break;
                        case "touchmove":
                        case "MSPointerMove":
                        case "pointermove":
                            b.preventDefault();
                            for (b = 0; b < c.length;) s = c[b], ++b, g = a.getX(s, d), w = a.getY(s, d), f.submitMove((j ? s.identifier : s.pointerId) | 0, g, w);
                            break;
                        case "touchend":
                        case "touchcancel":
                        case "MSPointerUp":
                        case "pointerup":
                            for (b = 0; b < c.length;) s = c[b], ++b, g = a.getX(s, d), w = a.getY(s, d), f.submitUp((j ? s.identifier : s.pointerId) | 0, g, w)
                    }
                };
                j ? (b.addEventListener("touchstart", d, !1), b.addEventListener("touchmove", d, !1), b.addEventListener("touchend", d, !1), b.addEventListener("touchcancel", d, !1)) : (b.addEventListener("MSPointerDown", d, !1), b.addEventListener("MSPointerMove",
                    d, !1), b.addEventListener("MSPointerUp", d, !1))
            } else this._touch = new zc;
            var s = window.onerror;
            window.onerror = function(a, b, c) {
                o.uncaughtError.emit(a);
                return null != s ? s(a, b, c) : !1
            };
            var g = I.loadExtension("hidden", window.document);
            null != g.value ? (d = function() {
                o.hidden.set__(O.field(window.document, g.field))
            }, d(null), window.document.addEventListener(g.prefix + "visibilitychange", d, !1)) : (d = function(a) {
                o.hidden.set__("pagehide" == a.type || "blur" == a.type)
            }, window.addEventListener("pageshow", d, !1), window.addEventListener("pagehide",
                d, !1), window.addEventListener("focus", d, !1), window.addEventListener("blur", d, !1));
            o.hidden.get_changed().connect(function(b) {
                b || (a._skipFrame = !0)
            });
            this._skipFrame = !1;
            this._lastUpdate = Date.now();
            var Y = I.loadExtension("requestAnimationFrame").value;
            if (null != Y) {
                var h = window.performance,
                    i = null != h && I.polyfill("now", h);
                i ? this._lastUpdate = h.now() : null;
                var k = null,
                    k = function(c) {
                        a.update(i ? h.now() : c);
                        Y(k, b)
                    };
                Y(k, b)
            } else window.setInterval(function() {
                a.update(Date.now())
            }, 16);
            Yb.info("Initialized HTML platform", ["renderer", this._renderer.get_type()])
        },
        loadAssetPack: function(a) {
            return (new da(this, a)).promise
        },
        getStage: function() {
            return this._stage
        },
        getStorage: function() {
            if (null == this._storage) {
                var a = Je.getLocalStorage();
                this._storage = null != a ? new Ac(a) : new Bc
            }
            return this._storage
        },
        update: function(a) {
            var b = (a - this._lastUpdate) / 1E3;
            this._lastUpdate = a;
            o.hidden._value || (this._skipFrame ? this._skipFrame = !1 : (this.mainLoop.update(b), this.mainLoop.render(this._renderer)))
        },
        getPointer: function() {
            return this._pointer
        },
        getKeyboard: function() {
            var a = this;
            if (null == this._keyboard) {
                this._keyboard = new $a;
                var b = function(b) {
                    switch (b.type) {
                        case "keydown":
                            a._keyboard.submitDown(b.keyCode) && b.preventDefault();
                            break;
                        case "keyup":
                            a._keyboard.submitUp(b.keyCode)
                    }
                };
                this._canvas.addEventListener("keydown", b, !1);
                this._canvas.addEventListener("keyup", b, !1)
            }
            return this._keyboard
        },
        getWeb: function() {
            null == this._web && (this._web = new Cc(this._container));
            return this._web
        },
        getRenderer: function() {
            return this._renderer
        },
        getX: function(a, b) {
            return (a.clientX -
                b.left) * this._stage.get_width() / b.width
        },
        getY: function(a, b) {
            return (a.clientY - b.top) * this._stage.get_height() / b.height
        },
        createRenderer: function(a) {
            if (-1 != window.navigator.userAgent.indexOf("MSIE") || -1 != window.navigator.userAgent.indexOf("Trident")) return new zb(a);
            try {
                var b = Ke.getContextWebGL(a, {
                    alpha: !1,
                    depth: !1,
                    failIfMajorPerformanceCaveat: !0
                });
                if (null != b)
                    if (I.detectSlowDriver(b)) null;
                    else return new Dc(this._stage, b)
            } catch (c) {}
            return new zb(a)
        },
        __class__: qb
    };
    var ga = function(a, b) {
        this._value = a;
        this._changed =
            null != b ? new Zb(b) : null
    };
    g["flambe.util.Value"] = ga;
    ga.__name__ = ["flambe", "util", "Value"];
    ga.prototype = {
        watch: function(a) {
            a(this._value, this._value);
            return this.get_changed().connect(a)
        },
        get__: function() {
            return this._value
        },
        set__: function(a) {
            var b = this._value;
            a != b && (this._value = a, null != this._changed && this._changed.emit(a, b));
            return a
        },
        get_changed: function() {
            null == this._changed && (this._changed = new Zb);
            return this._changed
        },
        toString: function() {
            return "" + n.string(this._value)
        },
        __class__: ga
    };
    var Mb = function(a,
        b) {
        this._next = null;
        this._signal = a;
        this._listener = b;
        this.stayInList = !0
    };
    g["flambe.util.SignalConnection"] = Mb;
    Mb.__name__ = ["flambe", "util", "SignalConnection"];
    Mb.__interfaces__ = [Za];
    Mb.prototype = {
        once: function() {
            this.stayInList = !1;
            return this
        },
        dispose: function() {
            null != this._signal && (this._signal.disconnect(this), this._signal = null)
        },
        __class__: Mb
    };
    var oa = function(a) {
        this._head = null != a ? new Mb(this, a) : null;
        this._deferredTasks = null
    };
    g["flambe.util.SignalBase"] = oa;
    oa.__name__ = ["flambe", "util", "SignalBase"];
    oa.prototype = {
        connectImpl: function(a, b) {
            var c = this,
                e = new Mb(this, a);
            this._head == oa.DISPATCHING_SENTINEL ? this.defer(function() {
                c.listAdd(e, b)
            }) : this.listAdd(e, b);
            return e
        },
        disconnect: function(a) {
            var b = this;
            this._head == oa.DISPATCHING_SENTINEL ? this.defer(function() {
                b.listRemove(a)
            }) : this.listRemove(a)
        },
        defer: function(a) {
            for (var b = null, c = this._deferredTasks; null != c;) b = c, c = c.next;
            a = new Qd(a);
            null != b ? b.next = a : this._deferredTasks = a
        },
        willEmit: function() {
            var a = this._head;
            this._head = oa.DISPATCHING_SENTINEL;
            return a
        },
        didEmit: function(a) {
            this._head = a;
            a = this._deferredTasks;
            for (this._deferredTasks = null; null != a;) a.fn(), a = a.next
        },
        listAdd: function(a, b) {
            if (b) a._next = this._head, this._head = a;
            else {
                for (var c = null, e = this._head; null != e;) c = e, e = e._next;
                null != c ? c._next = a : this._head = a
            }
        },
        listRemove: function(a) {
            for (var b = null, c = this._head; null != c;) {
                if (c == a) {
                    a = c._next;
                    null == b ? this._head = a : b._next = a;
                    break
                }
                b = c;
                c = c._next
            }
        },
        __class__: oa
    };
    var Zb = function(a) {
        oa.call(this, a)
    };
    g["flambe.util.Signal2"] = Zb;
    Zb.__name__ = ["flambe",
        "util", "Signal2"
    ];
    Zb.__super__ = oa;
    Zb.prototype = x(oa.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a, b) {
            var c = this;
            this._head == oa.DISPATCHING_SENTINEL ? this.defer(function() {
                c.emitImpl(a, b)
            }) : this.emitImpl(a, b)
        },
        emitImpl: function(a, b) {
            for (var c = this.willEmit(), e = c; null != e;) e._listener(a, b), e.stayInList || e.dispose(), e = e._next;
            this.didEmit(c)
        },
        __class__: Zb
    });
    var W = function(a) {
        oa.call(this, a)
    };
    g["flambe.util.Signal1"] = W;
    W.__name__ = ["flambe", "util", "Signal1"];
    W.__super__ = oa;
    W.prototype = x(oa.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function(a) {
            var b = this;
            this._head == oa.DISPATCHING_SENTINEL ? this.defer(function() {
                b.emitImpl(a)
            }) : this.emitImpl(a)
        },
        emitImpl: function(a) {
            for (var b = this.willEmit(), c = b; null != c;) c._listener(a), c.stayInList || c.dispose(), c = c._next;
            this.didEmit(b)
        },
        __class__: W
    });
    var Z = function(a, b) {
        this._behavior = null;
        ga.call(this, a, b)
    };
    g["flambe.animation.AnimatedFloat"] = Z;
    Z.__name__ = ["flambe", "animation",
        "AnimatedFloat"
    ];
    Z.__super__ = ga;
    Z.prototype = x(ga.prototype, {
        set__: function(a) {
            this._behavior = null;
            return ga.prototype.set__.call(this, a)
        },
        update: function(a) {
            null != this._behavior && (ga.prototype.set__.call(this, this._behavior.update(a)), this._behavior.isComplete() && (this._behavior = null))
        },
        animateTo: function(a, b, c) {
            this.set_behavior(new Nb(this._value, a, b, c))
        },
        set_behavior: function(a) {
            this._behavior = a;
            this.update(0);
            return a
        },
        __class__: Z
    });
    var o = function() {};
    g["flambe.System"] = o;
    o.__name__ = ["flambe",
        "System"
    ];
    o.init = function() {
        o._calledInit || (o._platform.init(), o._calledInit = !0)
    };
    o.loadAssetPack = function(a) {
        return o._platform.loadAssetPack(a)
    };
    var Yb = function() {};
    g["flambe.Log"] = Yb;
    Yb.__name__ = ["flambe", "Log"];
    Yb.info = function() {
        null
    };
    Yb.__super__ = Ie;
    Yb.prototype = x(Ie.prototype, {
        __class__: Yb
    });
    var Rd = function() {
        this._realDt = 0
    };
    g["flambe.SpeedAdjuster"] = Rd;
    Rd.__name__ = ["flambe", "SpeedAdjuster"];
    Rd.__super__ = k;
    Rd.prototype = x(k.prototype, {
        get_name: function() {
            return "SpeedAdjuster_14"
        },
        onUpdate: function(a) {
            0 <
                this._realDt && (a = this._realDt, this._realDt = 0);
            this.scale.update(a)
        },
        __class__: Rd
    });
    var Ec = function() {};
    g["flambe.animation.Behavior"] = Ec;
    Ec.__name__ = ["flambe", "animation", "Behavior"];
    Ec.prototype = {
        __class__: Ec
    };
    var y = function() {};
    g["flambe.animation.Ease"] = y;
    y.__name__ = ["flambe", "animation", "Ease"];
    y.linear = function(a) {
        return a
    };
    y.sineInOut = function(a) {
        return 0.5 - Math.cos(3.141592653589793 * a) / 2
    };
    y.bounceIn = function(a) {
        a = 1 - a;
        return 0.36363636363636365 > a ? 1 - 7.5625 * a * a : 0.7272727272727273 > a ? 1 - (7.5625 *
            (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) : 0.9090909090909091 > a ? 1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375) : 1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)
    };
    y.bounceOut = function(a) {
        return 0.36363636363636365 > a ? 7.5625 * a * a : 0.7272727272727273 > a ? 7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75 : 0.9090909090909091 > a ? 7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375 : 7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375
    };
    y.bounceInOut =
        function(a) {
            if (0.5 > a) return a = 1 - 2 * a, 0.36363636363636365 > a ? (1 - 7.5625 * a * a) / 2 : 0.7272727272727273 > a ? (1 - (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75)) / 2 : 0.9090909090909091 > a ? (1 - (7.5625 * (a - 0.8181818181818182) * (a - 0.8181818181818182) + 0.9375)) / 2 : (1 - (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375)) / 2;
            a = 2 * a - 1;
            return 0.36363636363636365 > a ? 7.5625 * a * a / 2 + 0.5 : 0.7272727272727273 > a ? (7.5625 * (a - 0.5454545454545454) * (a - 0.5454545454545454) + 0.75) / 2 + 0.5 : 0.9090909090909091 > a ? (7.5625 * (a - 0.8181818181818182) *
                (a - 0.8181818181818182) + 0.9375) / 2 + 0.5 : (7.5625 * (a - 0.9545454545454546) * (a - 0.9545454545454546) + 0.984375) / 2 + 0.5
        };
    y.circIn = function(a) {
        return 1 - Math.sqrt(1 - a * a)
    };
    y.circOut = function(a) {
        --a;
        return Math.sqrt(1 - a * a)
    };
    y.circInOut = function(a) {
        return 0.5 >= a ? (Math.sqrt(1 - 4 * a * a) - 1) / -2 : (Math.sqrt(1 - (2 * a - 2) * (2 * a - 2)) + 1) / 2
    };
    y.expoOut = function(a) {
        return -Math.pow(2, -10 * a) + 1
    };
    y.expoInOut = function(a) {
        return 0.5 > a ? Math.pow(2, 10 * (2 * a - 1)) / 2 : (-Math.pow(2, -10 * (2 * a - 1)) + 2) / 2
    };
    var $b = function(a, b, c, e, d) {
        null == d && (d = 0);
        null == e &&
            (e = 0);
        null == c && (c = 1);
        this.start = a;
        this.end = b;
        this.cycles = e;
        this.speed = new Z(c);
        this._count = 1.5707963267948966 + d * (3.141592653589793 / c);
        this._distance = 0.5 * (a - b);
        this._center = b + this._distance
    };
    g["flambe.animation.Sine"] = $b;
    $b.__name__ = ["flambe", "animation", "Sine"];
    $b.__interfaces__ = [Ec];
    $b.prototype = {
        update: function(a) {
            this.speed.update(a);
            this._count += a * (3.141592653589793 / this.speed._value);
            return this._center + Math.sin(this._count) * this._distance
        },
        isComplete: function() {
            return 0 < this.cycles && 0.5 * ((this._count -
                1.5707963267948966) / 3.141592653589793) >= this.cycles
        },
        __class__: $b
    };
    var Nb = function(a, b, c, e) {
        this._from = a;
        this._to = b;
        this._duration = c;
        this.elapsed = 0;
        this._easing = null != e ? e : y.linear
    };
    g["flambe.animation.Tween"] = Nb;
    Nb.__name__ = ["flambe", "animation", "Tween"];
    Nb.__interfaces__ = [Ec];
    Nb.prototype = {
        update: function(a) {
            this.elapsed += a;
            return this.elapsed >= this._duration ? this._to : this._from + (this._to - this._from) * this._easing(this.elapsed / this._duration)
        },
        isComplete: function() {
            return this.elapsed >= this._duration
        },
        __class__: Nb
    };
    var Ab = function() {};
    g["flambe.asset.Asset"] = Ab;
    Ab.__name__ = ["flambe", "asset", "Asset"];
    Ab.__interfaces__ = [Za];
    Ab.prototype = {
        __class__: Ab
    };
    var m = g["flambe.asset.AssetFormat"] = {
        __ename__: ["flambe", "asset", "AssetFormat"],
        __constructs__: "WEBP,JXR,PNG,JPG,GIF,DDS,PVR,PKM,MP3,M4A,OPUS,OGG,WAV,Data".split(",")
    };
    m.WEBP = ["WEBP", 0];
    m.WEBP.toString = h;
    m.WEBP.__enum__ = m;
    m.JXR = ["JXR", 1];
    m.JXR.toString = h;
    m.JXR.__enum__ = m;
    m.PNG = ["PNG", 2];
    m.PNG.toString = h;
    m.PNG.__enum__ = m;
    m.JPG = ["JPG", 3];
    m.JPG.toString =
        h;
    m.JPG.__enum__ = m;
    m.GIF = ["GIF", 4];
    m.GIF.toString = h;
    m.GIF.__enum__ = m;
    m.DDS = ["DDS", 5];
    m.DDS.toString = h;
    m.DDS.__enum__ = m;
    m.PVR = ["PVR", 6];
    m.PVR.toString = h;
    m.PVR.__enum__ = m;
    m.PKM = ["PKM", 7];
    m.PKM.toString = h;
    m.PKM.__enum__ = m;
    m.MP3 = ["MP3", 8];
    m.MP3.toString = h;
    m.MP3.__enum__ = m;
    m.M4A = ["M4A", 9];
    m.M4A.toString = h;
    m.M4A.__enum__ = m;
    m.OPUS = ["OPUS", 10];
    m.OPUS.toString = h;
    m.OPUS.__enum__ = m;
    m.OGG = ["OGG", 11];
    m.OGG.toString = h;
    m.OGG.__enum__ = m;
    m.WAV = ["WAV", 12];
    m.WAV.toString = h;
    m.WAV.__enum__ = m;
    m.Data = ["Data", 13];
    m.Data.toString =
        h;
    m.Data.__enum__ = m;
    m.__empty_constructs__ = [m.WEBP, m.JXR, m.PNG, m.JPG, m.GIF, m.DDS, m.PVR, m.PKM, m.MP3, m.M4A, m.OPUS, m.OGG, m.WAV, m.Data];
    var Sd = function(a, b, c, e) {
        this.name = a;
        this.url = b;
        this.format = c;
        this.bytes = e
    };
    g["flambe.asset.AssetEntry"] = Sd;
    Sd.__name__ = ["flambe", "asset", "AssetEntry"];
    Sd.prototype = {
        __class__: Sd
    };
    var ac = function() {};
    g["flambe.asset.AssetPack"] = ac;
    ac.__name__ = ["flambe", "asset", "AssetPack"];
    ac.__interfaces__ = [Za];
    ac.prototype = {
        __class__: ac
    };
    var bc = function() {};
    g["flambe.asset.File"] = bc;
    bc.__name__ = ["flambe", "asset", "File"];
    bc.__interfaces__ = [Ab];
    bc.prototype = {
        __class__: bc
    };
    var La = function() {
        this._localBase = this._remoteBase = null;
        this._entries = []
    };
    g["flambe.asset.Manifest"] = La;
    La.__name__ = ["flambe", "asset", "Manifest"];
    La.fromAssets = function(a, b) {
        null == b && (b = !0);
        var c = O.field(Le.getType(La).assets[0], a);
        if (null == c) {
            if (b) throw Da.withFields("Missing asset pack", ["name", a]);
            return null
        }
        var e = new La;
        e.set_localBase("assets");
        for (var d = 0; d < c.length;) {
            var j = c[d];
            ++d;
            var f = j.name,
                s = a + "/" +
                f + "?v=" + n.string(j.md5),
                g = La.inferFormat(f);
            g != m.Data && (f = Da.removeFileExtension(f));
            e.add(f, s, j.bytes, g)
        }
        return e
    };
    La.inferFormat = function(a) {
        a = Da.getUrlExtension(a);
        if (null != a) switch (a.toLowerCase()) {
            case "gif":
                return m.GIF;
            case "jpg":
            case "jpeg":
                return m.JPG;
            case "jxr":
            case "wdp":
                return m.JXR;
            case "png":
                return m.PNG;
            case "webp":
                return m.WEBP;
            case "dds":
                return m.DDS;
            case "pvr":
                return m.PVR;
            case "pkm":
                return m.PKM;
            case "m4a":
                return m.M4A;
            case "mp3":
                return m.MP3;
            case "ogg":
                return m.OGG;
            case "opus":
                return m.OPUS;
            case "wav":
                return m.WAV
        } else null;
        return m.Data
    };
    La.prototype = {
        add: function(a, b, c, e) {
            null == c && (c = 0);
            null == e && (e = La.inferFormat(b));
            a = new Sd(a, b, e, c);
            this._entries.push(a);
            return a
        },
        iterator: function() {
            return B.iter(this._entries)
        },
        getFullURL: function(a) {
            var b;
            b = null != this.get_remoteBase() && La._supportsCrossOrigin ? this.get_remoteBase() : this.get_localBase();
            return null != b ? Da.joinPath(b, a.url) : a.url
        },
        get_localBase: function() {
            return this._localBase
        },
        set_localBase: function(a) {
            null != a && cc.that(!F.startsWith(a,
                "http://") && !F.startsWith(a, "https://"), "localBase must be a path on the same domain, NOT starting with http(s)://", null);
            return this._localBase = a
        },
        get_remoteBase: function() {
            return this._remoteBase
        },
        __class__: La
    };
    var V = g["flambe.display.BlendMode"] = {
        __ename__: ["flambe", "display", "BlendMode"],
        __constructs__: "Normal,Add,Multiply,Screen,Mask,Copy".split(",")
    };
    V.Normal = ["Normal", 0];
    V.Normal.toString = h;
    V.Normal.__enum__ = V;
    V.Add = ["Add", 1];
    V.Add.toString = h;
    V.Add.__enum__ = V;
    V.Multiply = ["Multiply", 2];
    V.Multiply.toString =
        h;
    V.Multiply.__enum__ = V;
    V.Screen = ["Screen", 3];
    V.Screen.toString = h;
    V.Screen.__enum__ = V;
    V.Mask = ["Mask", 4];
    V.Mask.toString = h;
    V.Mask.__enum__ = V;
    V.Copy = ["Copy", 5];
    V.Copy.toString = h;
    V.Copy.__enum__ = V;
    V.__empty_constructs__ = [V.Normal, V.Add, V.Multiply, V.Screen, V.Mask, V.Copy];
    var Ma = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.x = a;
        this.y = b
    };
    g["flambe.math.Point"] = Ma;
    Ma.__name__ = ["flambe", "math", "Point"];
    Ma.prototype = {
        set: function(a, b) {
            this.x = a;
            this.y = b
        },
        normalize: function() {
            var a = this.magnitude();
            this.x /=
                a;
            this.y /= a
        },
        magnitude: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        distanceTo: function(a, b) {
            return Math.sqrt(this.distanceToSquared(a, b))
        },
        distanceToSquared: function(a, b) {
            var c = this.x - a,
                e = this.y - b;
            return c * c + e * e
        },
        clone: function(a) {
            if (null == a) return new Ma(this.x, this.y);
            a.set(this.x, this.y);
            return a
        },
        __class__: Ma
    };
    var u = function() {
        this._viewMatrixUpdateCount = this._parentViewMatrixUpdateCount = 0;
        this.blendMode = this.scissor = this._viewMatrix = null;
        var a = this;
        k.call(this);
        this._flags |= 54;
        this._localMatrix = new Xa;
        var b = function() {
            a._flags |= 24
        };
        this.x = new Z(0, b);
        this.y = new Z(0, b);
        this.rotation = new Z(0, b);
        this.scaleX = new Z(1, b);
        this.scaleY = new Z(1, b);
        this.anchorX = new Z(0, b);
        this.anchorY = new Z(0, b);
        this.alpha = new Z(1)
    };
    g["flambe.display.Sprite"] = u;
    u.__name__ = ["flambe", "display", "Sprite"];
    u.hitTest = function(a, b, c) {
        var e = a._compMap.Sprite_12;
        if (null != e) {
            if (6 != (e._flags & 6)) return null;
            e.getLocalMatrix().inverseTransform(b, c, u._scratchPoint) && (b = u._scratchPoint.x, c = u._scratchPoint.y);
            var d =
                e.scissor;
            if (null != d && !d.contains(b, c)) return null
        }
        a = u.hitTestBackwards(a.firstChild, b, c);
        return null != a ? a : null != e && e.containsLocal(b, c) ? e : null
    };
    u.getBounds = function(a, b) {
        null == b && (b = new qa);
        b.set(1.79769313486231E308, 1.79769313486231E308, -1.79769313486231E308, -1.79769313486231E308);
        u.getBoundsImpl(a, null, b);
        b.width -= b.x;
        b.height -= b.y;
        return b
    };
    u.render = function(a, b) {
        var c = a._compMap.Sprite_12;
        if (null != c) {
            var e = c.alpha._value;
            if (0 == (c._flags & 2) || 0 >= e) return;
            b.save();
            1 > e && b.multiplyAlpha(e);
            null !=
                c.blendMode && b.setBlendMode(c.blendMode);
            var e = c.getLocalMatrix(),
                d = e.m02,
                j = e.m12;
            0 != (c._flags & 32) && (d = Math.round(d), j = Math.round(j));
            b.transform(e.m00, e.m10, e.m01, e.m11, d, j);
            e = c.scissor;
            null != e && b.applyScissor(e.x, e.y, e.width, e.height);
            c.draw(b)
        }
        e = a._compMap.Director_13;
        if (null != e) {
            e = e.occludedScenes;
            for (d = 0; d < e.length;) j = e[d], ++d, u.render(j, b)
        }
        for (e = a.firstChild; null != e;) d = e.next, u.render(e, b), e = d;
        null != c && b.restore()
    };
    u.hitTestBackwards = function(a, b, c) {
        if (null != a) {
            var e = u.hitTestBackwards(a.next,
                b, c);
            return null != e ? e : u.hitTest(a, b, c)
        }
        return null
    };
    u.getBoundsImpl = function(a, b, c) {
        var e = a._compMap.Sprite_12;
        if (null != e) {
            var b = null != b ? Xa.multiply(b, e.getLocalMatrix()) : e.getLocalMatrix(),
                d = e.getNaturalWidth(),
                e = e.getNaturalHeight();
            0 < d && 0 < e && (u.extendRect(b, 0, 0, c), u.extendRect(b, d, 0, c), u.extendRect(b, d, e, c), u.extendRect(b, 0, e, c))
        }
        d = a._compMap.Director_13;
        if (null != d)
            for (var d = d.occludedScenes, e = 0, j = d.length; e < j;) u.getBoundsImpl(d[e], b, c), ++e;
        for (a = a.firstChild; null != a;) d = a.next, u.getBoundsImpl(a,
            b, c), a = d
    };
    u.extendRect = function(a, b, c, e) {
        a = a.transform(b, c, u._scratchPoint);
        b = a.x;
        c = a.y;
        b < e.x && (e.x = b);
        c < e.y && (e.y = c);
        b > e.width && (e.width = b);
        c > e.height && (e.height = c)
    };
    u.__super__ = k;
    u.prototype = x(k.prototype, {
        get_name: function() {
            return "Sprite_12"
        },
        getNaturalWidth: function() {
            return 0
        },
        getNaturalHeight: function() {
            return 0
        },
        containsLocal: function(a, b) {
            return 0 <= a && a < this.getNaturalWidth() && 0 <= b && b < this.getNaturalHeight()
        },
        getLocalMatrix: function() {
            0 != (this._flags & 8) && (this._flags &= -9, this._localMatrix.compose(this.x._value,
                this.y._value, this.scaleX._value, this.scaleY._value, 3.141592653589793 * this.rotation._value / 180), this._localMatrix.translate(-this.anchorX._value, -this.anchorY._value));
            return this._localMatrix
        },
        getViewMatrix: function() {
            if (this.isViewMatrixDirty()) {
                var a = this.getParentSprite();
                this._viewMatrix = null != a ? Xa.multiply(a.getViewMatrix(), this.getLocalMatrix(), this._viewMatrix) : this.getLocalMatrix().clone(this._viewMatrix);
                this._flags &= -17;
                null != a && (this._parentViewMatrixUpdateCount = a._viewMatrixUpdateCount);
                ++this._viewMatrixUpdateCount
            }
            return this._viewMatrix
        },
        setAnchor: function(a, b) {
            this.anchorX.set__(a);
            this.anchorY.set__(b);
            return this
        },
        centerAnchor: function() {
            this.anchorX.set__(this.getNaturalWidth() / 2);
            this.anchorY.set__(this.getNaturalHeight() / 2);
            return this
        },
        setXY: function(a, b) {
            this.x.set__(a);
            this.y.set__(b);
            return this
        },
        setAlpha: function(a) {
            this.alpha.set__(a);
            return this
        },
        setRotation: function(a) {
            this.rotation.set__(a);
            return this
        },
        setScale: function(a) {
            this.scaleX.set__(a);
            this.scaleY.set__(a);
            return this
        },
        setScaleXY: function(a, b) {
            this.scaleX.set__(a);
            this.scaleY.set__(b);
            return this
        },
        disablePointer: function() {
            this.set_pointerEnabled(!1);
            return this
        },
        onAdded: function() {
            0 != (this._flags & 64) && this.connectHover()
        },
        onRemoved: function() {
            null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
        },
        onUpdate: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.rotation.update(a);
            this.scaleX.update(a);
            this.scaleY.update(a);
            this.alpha.update(a);
            this.anchorX.update(a);
            this.anchorY.update(a)
        },
        draw: function() {},
        isViewMatrixDirty: function() {
            if (0 != (this._flags & 16)) return !0;
            var a = this.getParentSprite();
            return null == a ? !1 : this._parentViewMatrixUpdateCount != a._viewMatrixUpdateCount || a.isViewMatrixDirty()
        },
        getParentSprite: function() {
            if (null == this.owner) return null;
            for (var a = this.owner.parent; null != a;) {
                var b = a._compMap.Sprite_12;
                if (null != b) return b;
                a = a.parent
            }
            return null
        },
        get_pointerDown: function() {
            null == this._pointerDown && (this._pointerDown = new W);
            return this._pointerDown
        },
        get_pointerMove: function() {
            null ==
                this._pointerMove && (this._pointerMove = new W);
            return this._pointerMove
        },
        get_pointerUp: function() {
            null == this._pointerUp && (this._pointerUp = new W);
            return this._pointerUp
        },
        get_pointerIn: function() {
            null == this._pointerIn && (this._pointerIn = new W);
            return this._pointerIn
        },
        get_pointerOut: function() {
            null == this._pointerOut && (this._pointerOut = new W);
            return this._pointerOut
        },
        connectHover: function() {
            var a = this;
            null == this._hoverConnection && (this._hoverConnection = o._platform.getPointer().move.connect(function(b) {
                for (var c =
                        b.hit; null != c;) {
                    if (c == a) return;
                    c = c.getParentSprite()
                }
                null != a._pointerOut && 0 != (a._flags & 64) && a._pointerOut.emit(b);
                a._flags &= -65;
                null != a._hoverConnection && (a._hoverConnection.dispose(), a._hoverConnection = null)
            }))
        },
        get_visible: function() {
            return 0 != (this._flags & 2)
        },
        set_visible: function(a) {
            this._flags = Td.set(this._flags, 2, a);
            return a
        },
        set_pointerEnabled: function(a) {
            this._flags = Td.set(this._flags, 4, a);
            return a
        },
        onPointerDown: function(a) {
            this.onHover(a);
            null != this._pointerDown && this._pointerDown.emit(a)
        },
        onPointerMove: function(a) {
            this.onHover(a);
            null != this._pointerMove && this._pointerMove.emit(a)
        },
        onHover: function(a) {
            if (0 == (this._flags & 64) && (this._flags |= 64, null != this._pointerIn || null != this._pointerOut)) null != this._pointerIn && this._pointerIn.emit(a), this.connectHover()
        },
        onPointerUp: function(a) {
            switch (a.source[1]) {
                case 1:
                    null != this._pointerOut && 0 != (this._flags & 64) && this._pointerOut.emit(a), this._flags &= -65, null != this._hoverConnection && (this._hoverConnection.dispose(), this._hoverConnection = null)
            }
            null !=
                this._pointerUp && this._pointerUp.emit(a)
        },
        __class__: u
    });
    var Bb = function(a, b, c) {
        u.call(this);
        this.color = a;
        this.width = new Z(b);
        this.height = new Z(c)
    };
    g["flambe.display.FillSprite"] = Bb;
    Bb.__name__ = ["flambe", "display", "FillSprite"];
    Bb.__super__ = u;
    Bb.prototype = x(u.prototype, {
        draw: function(a) {
            a.fillRect(this.color, 0, 0, this.width._value, this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this,
                a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: Bb
    });
    var Fc = function(a) {
        this._reloadCount = new ga(0);
        this.reloadCount = new ga(0);
        this._rawData = Me.run(Ob.decode(a)).toString()
    };
    g["flambe.display.CompressedFile"] = Fc;
    Fc.__name__ = ["flambe", "display", "CompressedFile"];
    Fc.__interfaces__ = [bc];
    Fc.prototype = {
        toString: function() {
            return this._rawData
        },
        dispose: function() {},
        get_reloadCount: function() {
            return this._reloadCount
        },
        __class__: Fc
    };
    var Gc = function(a) {
        this._kernings = null;
        this.xOffset = this.yOffset =
            this.xAdvance = 0;
        this.page = null;
        this.x = this.y = this.width = this.height = 0;
        this.charCode = a
    };
    g["flambe.display.Glyph"] = Gc;
    Gc.__name__ = ["flambe", "display", "Glyph"];
    Gc.prototype = {
        draw: function(a, b, c) {
            0 < this.width && a.drawSubTexture(this.page, b + this.xOffset, c + this.yOffset, this.x, this.y, this.width, this.height)
        },
        getKerning: function(a) {
            return null != this._kernings ? n["int"](this._kernings.get(a)) : 0
        },
        setKerning: function(a, b) {
            null == this._kernings && (this._kernings = new Na);
            this._kernings.set(a, b)
        },
        __class__: Gc
    };
    var Cb =
        function(a, b) {
            this.name = b;
            this._pack = a;
            var c = a.getFile(b + ".fnt.cmp", !1);
            null != c ? this._file = new Fc(c.toString()) : (this._file = a.getFile(b + ".fnt"), null);
            this.reload()
        };
    g["flambe.display.Font"] = Cb;
    Cb.__name__ = ["flambe", "display", "Font"];
    Cb.prototype = {
        layoutText: function(a, b, c, e, d) {
            null == d && (d = 0);
            null == e && (e = 0);
            null == c && (c = 0);
            null == b && (b = ja.Left);
            return new Db(this, a, b, c, e, d)
        },
        reload: function() {
            this._glyphs = new Na;
            this._glyphs.set(Cb.NEWLINE.charCode, Cb.NEWLINE);
            for (var a = new Pb(this._file.toString()),
                    b = new Na, c = this.name.lastIndexOf("/"), c = 0 <= c ? B.substr(this.name, 0, c + 1) : "", e = a.keywords(); e.hasNext();) switch (e.next()) {
                case "info":
                    for (var d = a.pairs(); d.hasNext();) {
                        var j = d.next();
                        switch (j.key) {
                            case "size":
                                this.size = j.getInt()
                        }
                    }
                    break;
                case "common":
                    for (d = a.pairs(); d.hasNext();) switch (j = d.next(), j.key) {
                        case "lineHeight":
                            this.lineHeight = j.getInt()
                    }
                    break;
                case "page":
                    for (var d = 0, j = null, f = a.pairs(); f.hasNext();) {
                        var s = f.next();
                        switch (s.key) {
                            case "id":
                                d = s.getInt();
                                break;
                            case "file":
                                j = s.getString()
                        }
                    }
                    j = this._pack.getTexture(c +
                        Da.removeFileExtension(j));
                    b.set(d, j);
                    break;
                case "char":
                    d = null;
                    for (j = a.pairs(); j.hasNext();) switch (f = j.next(), f.key) {
                        case "id":
                            d = new Gc(f.getInt());
                            break;
                        case "x":
                            d.x = f.getInt();
                            break;
                        case "y":
                            d.y = f.getInt();
                            break;
                        case "width":
                            d.width = f.getInt();
                            break;
                        case "height":
                            d.height = f.getInt();
                            break;
                        case "page":
                            f = f.getInt();
                            d.page = b.get(f);
                            break;
                        case "xoffset":
                            d.xOffset = f.getInt();
                            break;
                        case "yoffset":
                            d.yOffset = f.getInt();
                            break;
                        case "xadvance":
                            d.xAdvance = f.getInt()
                    }
                    this._glyphs.set(d.charCode, d);
                    break;
                case "kerning":
                    d =
                        null;
                    f = j = 0;
                    for (s = a.pairs(); s.hasNext();) {
                        var g = s.next();
                        switch (g.key) {
                            case "first":
                                d = this._glyphs.get(g.getInt());
                                break;
                            case "second":
                                j = g.getInt();
                                break;
                            case "amount":
                                f = g.getInt()
                        }
                    }
                    null != d && 0 != f && d.setKerning(j, f)
            }
        },
        __class__: Cb
    };
    var ja = g["flambe.display.TextAlign"] = {
        __ename__: ["flambe", "display", "TextAlign"],
        __constructs__: ["Left", "Center", "Right"]
    };
    ja.Left = ["Left", 0];
    ja.Left.toString = h;
    ja.Left.__enum__ = ja;
    ja.Center = ["Center", 1];
    ja.Center.toString = h;
    ja.Center.__enum__ = ja;
    ja.Right = ["Right", 2];
    ja.Right.toString =
        h;
    ja.Right.__enum__ = ja;
    ja.__empty_constructs__ = [ja.Left, ja.Center, ja.Right];
    var Db = function(a, b, c, e, d, j) {
        this.lines = 0;
        var f = this;
        this._font = a;
        this._glyphs = [];
        this._offsets = [];
        this._lineOffset = Math.round(a.lineHeight + j);
        this.bounds = new qa;
        for (var s = [], j = b.length, g = 0; g < j;) {
            var Y = g++,
                Y = b.charCodeAt(Y),
                Y = a._glyphs.get(Y);
            null != Y ? this._glyphs.push(Y) : null
        }
        for (var b = -1, h = 0, i = 0, a = a._glyphs.get(10), j = function() {
                f.bounds.width = va.max(f.bounds.width, h);
                f.bounds.height += i;
                s[f.lines] = h;
                i = h = 0;
                ++f.lines
            }, g = 0; g <
            this._glyphs.length;) {
            Y = this._glyphs[g];
            this._offsets[g] = Math.round(h);
            var k = 0 < e && h + Y.width > e;
            k || Y == a ? (k && (0 <= b ? (this._glyphs[b] = a, h = this._offsets[b], g = b) : this._glyphs.splice(g, 0, a)), b = -1, i = this._lineOffset, j()) : (32 == Y.charCode && (b = g), h += Y.xAdvance + d, i = va.max(i, Y.height + Y.yOffset), g + 1 < this._glyphs.length && (h += Y.getKerning(this._glyphs[g + 1].charCode)));
            ++g
        }
        j();
        d = 0;
        a = Db.getAlignOffset(c, s[0], e);
        b = 1.79769313486231E308;
        j = -1.79769313486231E308;
        Y = g = 0;
        for (k = this._glyphs.length; Y < k;) {
            var l = this._glyphs[Y];
            10 == l.charCode && (d += this._lineOffset, ++g, a = Db.getAlignOffset(c, s[g], e));
            this._offsets[Y] += a;
            var m = d + l.yOffset;
            b < m || (b = m);
            j = va.max(j, m + l.height);
            ++Y
        }
        this.bounds.x = Db.getAlignOffset(c, this.bounds.width, e);
        this.bounds.y = b;
        this.bounds.height = j - b
    };
    g["flambe.display.TextLayout"] = Db;
    Db.__name__ = ["flambe", "display", "TextLayout"];
    Db.getAlignOffset = function(a, b) {
        switch (a[1]) {
            case 0:
                return 0;
            case 2:
                return -b;
            case 1:
                return Math.round(-b / 2)
        }
    };
    Db.prototype = {
        draw: function(a) {
            for (var b = 0, c = 0, e = this._glyphs.length; c <
                e;) {
                var d = this._glyphs[c];
                10 == d.charCode ? b += this._lineOffset : d.draw(a, this._offsets[c], b);
                ++c
            }
        },
        __class__: Db
    };
    var Pb = function(a) {
        this._configText = a;
        this._keywordPattern = new Ib("([A-Za-z]+)(.*)", "");
        this._pairPattern = new Ib('([A-Za-z]+)=("[^"]*"|[^\\s]+)', "")
    };
    g["flambe.display._Font.ConfigParser"] = Pb;
    Pb.__name__ = ["flambe", "display", "_Font", "ConfigParser"];
    Pb.advance = function(a, b) {
        var c = b.matchedPos();
        return B.substr(a, c.pos + c.len, a.length)
    };
    Pb.prototype = {
        keywords: function() {
            var a = this,
                b = this._configText;
            return {
                next: function() {
                    b = Pb.advance(b, a._keywordPattern);
                    a._pairText = a._keywordPattern.matched(2);
                    return a._keywordPattern.matched(1)
                },
                hasNext: function() {
                    return a._keywordPattern.match(b)
                }
            }
        },
        pairs: function() {
            var a = this,
                b = this._pairText;
            return {
                next: function() {
                    b = Pb.advance(b, a._pairPattern);
                    return new Ud(a._pairPattern.matched(1), a._pairPattern.matched(2))
                },
                hasNext: function() {
                    return a._pairPattern.match(b)
                }
            }
        },
        __class__: Pb
    };
    var Ud = function(a, b) {
        this.key = a;
        this._value = b
    };
    g["flambe.display._Font.ConfigPair"] =
        Ud;
    Ud.__name__ = ["flambe", "display", "_Font", "ConfigPair"];
    Ud.prototype = {
        getInt: function() {
            return n.parseInt(this._value)
        },
        getString: function() {
            return 34 != this._value.charCodeAt(0) ? null : B.substr(this._value, 1, this._value.length - 2)
        },
        __class__: Ud
    };
    var Vd = function() {};
    g["flambe.display.Graphics"] = Vd;
    Vd.__name__ = ["flambe", "display", "Graphics"];
    Vd.prototype = {
        __class__: Vd
    };
    var z = function(a) {
        u.call(this);
        this.texture = a
    };
    g["flambe.display.ImageSprite"] = z;
    z.__name__ = ["flambe", "display", "ImageSprite"];
    z.__super__ =
        u;
    z.prototype = x(u.prototype, {
        draw: function(a) {
            null != this.texture && a.drawTexture(this.texture, 0, 0)
        },
        getNaturalWidth: function() {
            return null != this.texture ? this.texture.get_width() : 0
        },
        getNaturalHeight: function() {
            return null != this.texture ? this.texture.get_height() : 0
        },
        __class__: z
    });
    var Oa = g["flambe.display.Orientation"] = {
        __ename__: ["flambe", "display", "Orientation"],
        __constructs__: ["Portrait", "Landscape"]
    };
    Oa.Portrait = ["Portrait", 0];
    Oa.Portrait.toString = h;
    Oa.Portrait.__enum__ = Oa;
    Oa.Landscape = ["Landscape",
        1
    ];
    Oa.Landscape.toString = h;
    Oa.Landscape.__enum__ = Oa;
    Oa.__empty_constructs__ = [Oa.Portrait, Oa.Landscape];
    var eb = function(a, b, c) {
        null == c && (c = -1);
        null == b && (b = -1);
        u.call(this);
        this.texture = a;
        0 > b && (b = null != a ? a.get_width() : 0);
        this.width = new Z(b);
        0 > c && (c = null != a ? a.get_height() : 0);
        this.height = new Z(c)
    };
    g["flambe.display.PatternSprite"] = eb;
    eb.__name__ = ["flambe", "display", "PatternSprite"];
    eb.__super__ = u;
    eb.prototype = x(u.prototype, {
        draw: function(a) {
            null != this.texture && a.drawPattern(this.texture, 0, 0, this.width._value,
                this.height._value)
        },
        getNaturalWidth: function() {
            return this.width._value
        },
        getNaturalHeight: function() {
            return this.height._value
        },
        setSize: function(a, b) {
            this.width.set__(a);
            this.height.set__(b);
            return this
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this, a);
            this.width.update(a);
            this.height.update(a)
        },
        __class__: eb
    });
    var Hc = function() {};
    g["flambe.display.Texture"] = Hc;
    Hc.__name__ = ["flambe", "display", "Texture"];
    Hc.__interfaces__ = [Ab];
    Hc.prototype = {
        __class__: Hc
    };
    var Ne = function() {};
    g["flambe.display.SubTexture"] =
        Ne;
    Ne.__name__ = ["flambe", "display", "SubTexture"];
    Ne.__interfaces__ = [Hc];
    var Eb = function(a, b) {
        null == b && (b = "");
        this._layout = null;
        var c = this;
        u.call(this);
        this._font = a;
        this._text = b;
        this._align = ja.Left;
        this._flags |= 128;
        var e = function() {
            c._flags |= 128
        };
        this.wrapWidth = new Z(0, e);
        this.letterSpacing = new Z(0, e);
        this.lineSpacing = new Z(0, e)
    };
    g["flambe.display.TextSprite"] = Eb;
    Eb.__name__ = ["flambe", "display", "TextSprite"];
    Eb.__super__ = u;
    Eb.prototype = x(u.prototype, {
        draw: function(a) {
            this.updateLayout();
            this._layout.draw(a)
        },
        getNaturalWidth: function() {
            this.updateLayout();
            return 0 < this.wrapWidth._value ? this.wrapWidth._value : this._layout.bounds.width
        },
        getNaturalHeight: function() {
            this.updateLayout();
            var a = this._layout.lines * (this._font.lineHeight + this.lineSpacing._value),
                b = this._layout.bounds.height;
            return a > b ? a : b
        },
        containsLocal: function(a, b) {
            this.updateLayout();
            return this._layout.bounds.contains(a, b)
        },
        setWrapWidth: function(a) {
            this.wrapWidth.set__(a);
            return this
        },
        setAlign: function(a) {
            this.set_align(a);
            return this
        },
        set_text: function(a) {
            a !=
                this._text && (this._text = a, this._flags |= 128);
            return a
        },
        set_align: function(a) {
            a != this._align && (this._align = a, this._flags |= 128);
            return a
        },
        updateLayout: function() {
            0 != (this._flags & 128) && (this._flags &= -129, this._layout = this._font.layoutText(this._text, this._align, this.wrapWidth._value, this.letterSpacing._value, this.lineSpacing._value))
        },
        onUpdate: function(a) {
            u.prototype.onUpdate.call(this, a);
            this.wrapWidth.update(a);
            this.letterSpacing.update(a);
            this.lineSpacing.update(a)
        },
        __class__: Eb
    });
    var f = g["flambe.input.Key"] = {
        __ename__: ["flambe", "input", "Key"],
        __constructs__: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,Number0,Number1,Number2,Number3,Number4,Number5,Number6,Number7,Number8,Number9,Numpad0,Numpad1,Numpad2,Numpad3,Numpad4,Numpad5,Numpad6,Numpad7,Numpad8,Numpad9,NumpadAdd,NumpadDecimal,NumpadDivide,NumpadEnter,NumpadMultiply,NumpadSubtract,F1,F2,F3,F4,F5,F6,F7,F8,F9,F10,F11,F12,F13,F14,F15,Left,Up,Right,Down,Alt,Backquote,Backslash,Backspace,CapsLock,Comma,Command,Control,Delete,End,Enter,Equals,Escape,Home,Insert,LeftBracket,Minus,PageDown,PageUp,Period,Quote,RightBracket,Semicolon,Shift,Slash,Space,Tab,Menu,Search,Unknown".split(",")
    };
    f.A = ["A", 0];
    f.A.toString = h;
    f.A.__enum__ = f;
    f.B = ["B", 1];
    f.B.toString = h;
    f.B.__enum__ = f;
    f.C = ["C", 2];
    f.C.toString = h;
    f.C.__enum__ = f;
    f.D = ["D", 3];
    f.D.toString = h;
    f.D.__enum__ = f;
    f.E = ["E", 4];
    f.E.toString = h;
    f.E.__enum__ = f;
    f.F = ["F", 5];
    f.F.toString = h;
    f.F.__enum__ = f;
    f.G = ["G", 6];
    f.G.toString = h;
    f.G.__enum__ = f;
    f.H = ["H", 7];
    f.H.toString = h;
    f.H.__enum__ = f;
    f.I = ["I", 8];
    f.I.toString = h;
    f.I.__enum__ = f;
    f.J = ["J", 9];
    f.J.toString = h;
    f.J.__enum__ = f;
    f.K = ["K", 10];
    f.K.toString = h;
    f.K.__enum__ = f;
    f.L = ["L", 11];
    f.L.toString = h;
    f.L.__enum__ =
        f;
    f.M = ["M", 12];
    f.M.toString = h;
    f.M.__enum__ = f;
    f.N = ["N", 13];
    f.N.toString = h;
    f.N.__enum__ = f;
    f.O = ["O", 14];
    f.O.toString = h;
    f.O.__enum__ = f;
    f.P = ["P", 15];
    f.P.toString = h;
    f.P.__enum__ = f;
    f.Q = ["Q", 16];
    f.Q.toString = h;
    f.Q.__enum__ = f;
    f.R = ["R", 17];
    f.R.toString = h;
    f.R.__enum__ = f;
    f.S = ["S", 18];
    f.S.toString = h;
    f.S.__enum__ = f;
    f.T = ["T", 19];
    f.T.toString = h;
    f.T.__enum__ = f;
    f.U = ["U", 20];
    f.U.toString = h;
    f.U.__enum__ = f;
    f.V = ["V", 21];
    f.V.toString = h;
    f.V.__enum__ = f;
    f.W = ["W", 22];
    f.W.toString = h;
    f.W.__enum__ = f;
    f.X = ["X", 23];
    f.X.toString =
        h;
    f.X.__enum__ = f;
    f.Y = ["Y", 24];
    f.Y.toString = h;
    f.Y.__enum__ = f;
    f.Z = ["Z", 25];
    f.Z.toString = h;
    f.Z.__enum__ = f;
    f.Number0 = ["Number0", 26];
    f.Number0.toString = h;
    f.Number0.__enum__ = f;
    f.Number1 = ["Number1", 27];
    f.Number1.toString = h;
    f.Number1.__enum__ = f;
    f.Number2 = ["Number2", 28];
    f.Number2.toString = h;
    f.Number2.__enum__ = f;
    f.Number3 = ["Number3", 29];
    f.Number3.toString = h;
    f.Number3.__enum__ = f;
    f.Number4 = ["Number4", 30];
    f.Number4.toString = h;
    f.Number4.__enum__ = f;
    f.Number5 = ["Number5", 31];
    f.Number5.toString = h;
    f.Number5.__enum__ =
        f;
    f.Number6 = ["Number6", 32];
    f.Number6.toString = h;
    f.Number6.__enum__ = f;
    f.Number7 = ["Number7", 33];
    f.Number7.toString = h;
    f.Number7.__enum__ = f;
    f.Number8 = ["Number8", 34];
    f.Number8.toString = h;
    f.Number8.__enum__ = f;
    f.Number9 = ["Number9", 35];
    f.Number9.toString = h;
    f.Number9.__enum__ = f;
    f.Numpad0 = ["Numpad0", 36];
    f.Numpad0.toString = h;
    f.Numpad0.__enum__ = f;
    f.Numpad1 = ["Numpad1", 37];
    f.Numpad1.toString = h;
    f.Numpad1.__enum__ = f;
    f.Numpad2 = ["Numpad2", 38];
    f.Numpad2.toString = h;
    f.Numpad2.__enum__ = f;
    f.Numpad3 = ["Numpad3", 39];
    f.Numpad3.toString =
        h;
    f.Numpad3.__enum__ = f;
    f.Numpad4 = ["Numpad4", 40];
    f.Numpad4.toString = h;
    f.Numpad4.__enum__ = f;
    f.Numpad5 = ["Numpad5", 41];
    f.Numpad5.toString = h;
    f.Numpad5.__enum__ = f;
    f.Numpad6 = ["Numpad6", 42];
    f.Numpad6.toString = h;
    f.Numpad6.__enum__ = f;
    f.Numpad7 = ["Numpad7", 43];
    f.Numpad7.toString = h;
    f.Numpad7.__enum__ = f;
    f.Numpad8 = ["Numpad8", 44];
    f.Numpad8.toString = h;
    f.Numpad8.__enum__ = f;
    f.Numpad9 = ["Numpad9", 45];
    f.Numpad9.toString = h;
    f.Numpad9.__enum__ = f;
    f.NumpadAdd = ["NumpadAdd", 46];
    f.NumpadAdd.toString = h;
    f.NumpadAdd.__enum__ = f;
    f.NumpadDecimal = ["NumpadDecimal", 47];
    f.NumpadDecimal.toString = h;
    f.NumpadDecimal.__enum__ = f;
    f.NumpadDivide = ["NumpadDivide", 48];
    f.NumpadDivide.toString = h;
    f.NumpadDivide.__enum__ = f;
    f.NumpadEnter = ["NumpadEnter", 49];
    f.NumpadEnter.toString = h;
    f.NumpadEnter.__enum__ = f;
    f.NumpadMultiply = ["NumpadMultiply", 50];
    f.NumpadMultiply.toString = h;
    f.NumpadMultiply.__enum__ = f;
    f.NumpadSubtract = ["NumpadSubtract", 51];
    f.NumpadSubtract.toString = h;
    f.NumpadSubtract.__enum__ = f;
    f.F1 = ["F1", 52];
    f.F1.toString = h;
    f.F1.__enum__ = f;
    f.F2 = ["F2", 53];
    f.F2.toString =
        h;
    f.F2.__enum__ = f;
    f.F3 = ["F3", 54];
    f.F3.toString = h;
    f.F3.__enum__ = f;
    f.F4 = ["F4", 55];
    f.F4.toString = h;
    f.F4.__enum__ = f;
    f.F5 = ["F5", 56];
    f.F5.toString = h;
    f.F5.__enum__ = f;
    f.F6 = ["F6", 57];
    f.F6.toString = h;
    f.F6.__enum__ = f;
    f.F7 = ["F7", 58];
    f.F7.toString = h;
    f.F7.__enum__ = f;
    f.F8 = ["F8", 59];
    f.F8.toString = h;
    f.F8.__enum__ = f;
    f.F9 = ["F9", 60];
    f.F9.toString = h;
    f.F9.__enum__ = f;
    f.F10 = ["F10", 61];
    f.F10.toString = h;
    f.F10.__enum__ = f;
    f.F11 = ["F11", 62];
    f.F11.toString = h;
    f.F11.__enum__ = f;
    f.F12 = ["F12", 63];
    f.F12.toString = h;
    f.F12.__enum__ = f;
    f.F13 = ["F13", 64];
    f.F13.toString = h;
    f.F13.__enum__ = f;
    f.F14 = ["F14", 65];
    f.F14.toString = h;
    f.F14.__enum__ = f;
    f.F15 = ["F15", 66];
    f.F15.toString = h;
    f.F15.__enum__ = f;
    f.Left = ["Left", 67];
    f.Left.toString = h;
    f.Left.__enum__ = f;
    f.Up = ["Up", 68];
    f.Up.toString = h;
    f.Up.__enum__ = f;
    f.Right = ["Right", 69];
    f.Right.toString = h;
    f.Right.__enum__ = f;
    f.Down = ["Down", 70];
    f.Down.toString = h;
    f.Down.__enum__ = f;
    f.Alt = ["Alt", 71];
    f.Alt.toString = h;
    f.Alt.__enum__ = f;
    f.Backquote = ["Backquote", 72];
    f.Backquote.toString = h;
    f.Backquote.__enum__ = f;
    f.Backslash = ["Backslash", 73];
    f.Backslash.toString = h;
    f.Backslash.__enum__ = f;
    f.Backspace = ["Backspace", 74];
    f.Backspace.toString = h;
    f.Backspace.__enum__ = f;
    f.CapsLock = ["CapsLock", 75];
    f.CapsLock.toString = h;
    f.CapsLock.__enum__ = f;
    f.Comma = ["Comma", 76];
    f.Comma.toString = h;
    f.Comma.__enum__ = f;
    f.Command = ["Command", 77];
    f.Command.toString = h;
    f.Command.__enum__ = f;
    f.Control = ["Control", 78];
    f.Control.toString = h;
    f.Control.__enum__ = f;
    f.Delete = ["Delete", 79];
    f.Delete.toString = h;
    f.Delete.__enum__ = f;
    f.End = ["End", 80];
    f.End.toString = h;
    f.End.__enum__ =
        f;
    f.Enter = ["Enter", 81];
    f.Enter.toString = h;
    f.Enter.__enum__ = f;
    f.Equals = ["Equals", 82];
    f.Equals.toString = h;
    f.Equals.__enum__ = f;
    f.Escape = ["Escape", 83];
    f.Escape.toString = h;
    f.Escape.__enum__ = f;
    f.Home = ["Home", 84];
    f.Home.toString = h;
    f.Home.__enum__ = f;
    f.Insert = ["Insert", 85];
    f.Insert.toString = h;
    f.Insert.__enum__ = f;
    f.LeftBracket = ["LeftBracket", 86];
    f.LeftBracket.toString = h;
    f.LeftBracket.__enum__ = f;
    f.Minus = ["Minus", 87];
    f.Minus.toString = h;
    f.Minus.__enum__ = f;
    f.PageDown = ["PageDown", 88];
    f.PageDown.toString = h;
    f.PageDown.__enum__ =
        f;
    f.PageUp = ["PageUp", 89];
    f.PageUp.toString = h;
    f.PageUp.__enum__ = f;
    f.Period = ["Period", 90];
    f.Period.toString = h;
    f.Period.__enum__ = f;
    f.Quote = ["Quote", 91];
    f.Quote.toString = h;
    f.Quote.__enum__ = f;
    f.RightBracket = ["RightBracket", 92];
    f.RightBracket.toString = h;
    f.RightBracket.__enum__ = f;
    f.Semicolon = ["Semicolon", 93];
    f.Semicolon.toString = h;
    f.Semicolon.__enum__ = f;
    f.Shift = ["Shift", 94];
    f.Shift.toString = h;
    f.Shift.__enum__ = f;
    f.Slash = ["Slash", 95];
    f.Slash.toString = h;
    f.Slash.__enum__ = f;
    f.Space = ["Space", 96];
    f.Space.toString =
        h;
    f.Space.__enum__ = f;
    f.Tab = ["Tab", 97];
    f.Tab.toString = h;
    f.Tab.__enum__ = f;
    f.Menu = ["Menu", 98];
    f.Menu.toString = h;
    f.Menu.__enum__ = f;
    f.Search = ["Search", 99];
    f.Search.toString = h;
    f.Search.__enum__ = f;
    f.Unknown = function(a) {
        a = ["Unknown", 100, a];
        a.__enum__ = f;
        a.toString = h;
        return a
    };
    f.__empty_constructs__ = [f.A, f.B, f.C, f.D, f.E, f.F, f.G, f.H, f.I, f.J, f.K, f.L, f.M, f.N, f.O, f.P, f.Q, f.R, f.S, f.T, f.U, f.V, f.W, f.X, f.Y, f.Z, f.Number0, f.Number1, f.Number2, f.Number3, f.Number4, f.Number5, f.Number6, f.Number7, f.Number8, f.Number9, f.Numpad0,
        f.Numpad1, f.Numpad2, f.Numpad3, f.Numpad4, f.Numpad5, f.Numpad6, f.Numpad7, f.Numpad8, f.Numpad9, f.NumpadAdd, f.NumpadDecimal, f.NumpadDivide, f.NumpadEnter, f.NumpadMultiply, f.NumpadSubtract, f.F1, f.F2, f.F3, f.F4, f.F5, f.F6, f.F7, f.F8, f.F9, f.F10, f.F11, f.F12, f.F13, f.F14, f.F15, f.Left, f.Up, f.Right, f.Down, f.Alt, f.Backquote, f.Backslash, f.Backspace, f.CapsLock, f.Comma, f.Command, f.Control, f.Delete, f.End, f.Enter, f.Equals, f.Escape, f.Home, f.Insert, f.LeftBracket, f.Minus, f.PageDown, f.PageUp, f.Period, f.Quote, f.RightBracket,
        f.Semicolon, f.Shift, f.Slash, f.Space, f.Tab, f.Menu, f.Search
    ];
    var Wd = function() {
        this.init(0, null)
    };
    g["flambe.input.KeyboardEvent"] = Wd;
    Wd.__name__ = ["flambe", "input", "KeyboardEvent"];
    Wd.prototype = {
        init: function(a, b) {
            this.id = a;
            this.key = b
        },
        __class__: Wd
    };
    var ka = g["flambe.input.MouseButton"] = {
        __ename__: ["flambe", "input", "MouseButton"],
        __constructs__: ["Left", "Middle", "Right", "Unknown"]
    };
    ka.Left = ["Left", 0];
    ka.Left.toString = h;
    ka.Left.__enum__ = ka;
    ka.Middle = ["Middle", 1];
    ka.Middle.toString = h;
    ka.Middle.__enum__ =
        ka;
    ka.Right = ["Right", 2];
    ka.Right.toString = h;
    ka.Right.__enum__ = ka;
    ka.Unknown = function(a) {
        a = ["Unknown", 3, a];
        a.__enum__ = ka;
        a.toString = h;
        return a
    };
    ka.__empty_constructs__ = [ka.Left, ka.Middle, ka.Right];
    var Ea = g["flambe.input.MouseCursor"] = {
        __ename__: ["flambe", "input", "MouseCursor"],
        __constructs__: ["Default", "Button", "None"]
    };
    Ea.Default = ["Default", 0];
    Ea.Default.toString = h;
    Ea.Default.__enum__ = Ea;
    Ea.Button = ["Button", 1];
    Ea.Button.toString = h;
    Ea.Button.__enum__ = Ea;
    Ea.None = ["None", 2];
    Ea.None.toString = h;
    Ea.None.__enum__ =
        Ea;
    Ea.__empty_constructs__ = [Ea.Default, Ea.Button, Ea.None];
    var Xd = function() {
        this.init(0, 0, 0, null)
    };
    g["flambe.input.MouseEvent"] = Xd;
    Xd.__name__ = ["flambe", "input", "MouseEvent"];
    Xd.prototype = {
        init: function(a, b, c, e) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.button = e
        },
        __class__: Xd
    };
    var dc = g["flambe.input.EventSource"] = {
        __ename__: ["flambe", "input", "EventSource"],
        __constructs__: ["Mouse", "Touch"]
    };
    dc.Mouse = function(a) {
        a = ["Mouse", 0, a];
        a.__enum__ = dc;
        a.toString = h;
        return a
    };
    dc.Touch = function(a) {
        a = ["Touch", 1, a];
        a.__enum__ = dc;
        a.toString = h;
        return a
    };
    dc.__empty_constructs__ = [];
    var Yd = function() {
        this.init(0, 0, 0, null, null)
    };
    g["flambe.input.PointerEvent"] = Yd;
    Yd.__name__ = ["flambe", "input", "PointerEvent"];
    Yd.prototype = {
        init: function(a, b, c, e, d) {
            this.id = a;
            this.viewX = b;
            this.viewY = c;
            this.hit = e;
            this.source = d;
            this._stopped = !1
        },
        __class__: Yd
    };
    var Zd = function(a) {
        this.id = a;
        this._source = dc.Touch(this)
    };
    g["flambe.input.TouchPoint"] = Zd;
    Zd.__name__ = ["flambe", "input", "TouchPoint"];
    Zd.prototype = {
        init: function(a, b) {
            this.viewX = a;
            this.viewY = b
        },
        __class__: Zd
    };
    var va = function() {};
    g["flambe.math.FMath"] = va;
    va.__name__ = ["flambe", "math", "FMath"];
    va.max = function(a, b) {
        return a > b ? a : b
    };
    va.min = function(a, b) {
        return a < b ? a : b
    };
    var Xa = function() {
        this.identity()
    };
    g["flambe.math.Matrix"] = Xa;
    Xa.__name__ = ["flambe", "math", "Matrix"];
    Xa.multiply = function(a, b, c) {
        null == c && (c = new Xa);
        var e = a.m00 * b.m00 + a.m01 * b.m10,
            d = a.m00 * b.m01 + a.m01 * b.m11,
            j = a.m00 * b.m02 + a.m01 * b.m12 + a.m02;
        c.m00 = e;
        c.m01 = d;
        c.m02 = j;
        e = a.m10 * b.m00 + a.m11 * b.m10;
        d = a.m10 * b.m01 + a.m11 * b.m11;
        j =
            a.m10 * b.m02 + a.m11 * b.m12 + a.m12;
        c.m10 = e;
        c.m11 = d;
        c.m12 = j;
        return c
    };
    Xa.prototype = {
        set: function(a, b, c, e, d, j) {
            this.m00 = a;
            this.m01 = c;
            this.m02 = d;
            this.m10 = b;
            this.m11 = e;
            this.m12 = j
        },
        identity: function() {
            this.set(1, 0, 0, 1, 0, 0)
        },
        compose: function(a, b, c, e, d) {
            var j = Math.sin(d),
                d = Math.cos(d);
            this.set(d * c, j * c, -j * e, d * e, a, b)
        },
        translate: function(a, b) {
            this.m02 += this.m00 * a + this.m01 * b;
            this.m12 += this.m11 * b + this.m10 * a
        },
        invert: function() {
            var a = this.determinant();
            if (0 == a) return !1;
            this.set(this.m11 / a, -this.m01 / a, -this.m10 / a, this.m00 /
                a, (this.m01 * this.m12 - this.m11 * this.m02) / a, (this.m10 * this.m02 - this.m00 * this.m12) / a);
            return !0
        },
        transform: function(a, b, c) {
            null == c && (c = new Ma);
            c.x = a * this.m00 + b * this.m01 + this.m02;
            c.y = a * this.m10 + b * this.m11 + this.m12;
            return c
        },
        transformArray: function(a, b, c) {
            for (var e = 0; e < b;) {
                var d = a[e],
                    j = a[e + 1];
                c[e++] = d * this.m00 + j * this.m01 + this.m02;
                c[e++] = d * this.m10 + j * this.m11 + this.m12
            }
        },
        determinant: function() {
            return this.m00 * this.m11 - this.m01 * this.m10
        },
        inverseTransform: function(a, b, c) {
            var e = this.determinant();
            if (0 == e) return !1;
            a -= this.m02;
            b -= this.m12;
            c.x = (a * this.m11 - b * this.m01) / e;
            c.y = (b * this.m00 - a * this.m10) / e;
            return !0
        },
        clone: function(a) {
            null == a && (a = new Xa);
            a.set(this.m00, this.m10, this.m01, this.m11, this.m02, this.m12);
            return a
        },
        __class__: Xa
    };
    var qa = function(a, b, c, e) {
        null == e && (e = 0);
        null == c && (c = 0);
        null == b && (b = 0);
        null == a && (a = 0);
        this.set(a, b, c, e)
    };
    g["flambe.math.Rectangle"] = qa;
    qa.__name__ = ["flambe", "math", "Rectangle"];
    qa.prototype = {
        set: function(a, b, c, e) {
            this.x = a;
            this.y = b;
            this.width = c;
            this.height = e
        },
        contains: function(a, b) {
            a -=
                this.x;
            if (0 <= this.width) {
                if (0 > a || a > this.width) return !1
            } else if (0 < a || a < this.width) return !1;
            b -= this.y;
            if (0 <= this.height) {
                if (0 > b || b > this.height) return !1
            } else if (0 < b || b < this.height) return !1;
            return !0
        },
        intersects: function(a, b) {
            var c = va.max(this.x, a.x),
                e = va.min(this.get_right(), a.get_right());
            if (c > e) return !1;
            var d = va.max(this.y, a.y),
                j = va.min(this.get_bottom(), a.get_bottom());
            if (d > j) return !1;
            null != b && b.set(c, d, e - c, j - d);
            return !0
        },
        clone: function(a) {
            null == a && (a = new qa);
            a.set(this.x, this.y, this.width, this.height);
            return a
        },
        equals: function(a) {
            return this.x == a.x && this.y == a.y && this.width == a.width && this.height == a.height
        },
        get_right: function() {
            return this.x + this.width
        },
        get_bottom: function() {
            return this.y + this.height
        },
        get_centerX: function() {
            return this.x + this.width / 2
        },
        get_centerY: function() {
            return this.y + this.height / 2
        },
        __class__: qa
    };
    var ha = function() {
        this._reloadCount = null;
        this._disposed = !1
    };
    g["flambe.platform.BasicAsset"] = ha;
    ha.__name__ = ["flambe", "platform", "BasicAsset"];
    ha.__interfaces__ = [Ab];
    ha.prototype = {
        dispose: function() {
            this._disposed ||
                (this._disposed = !0, this.onDisposed())
        },
        onDisposed: function() {
            null
        },
        get_reloadCount: function() {
            null == this._reloadCount && (this._reloadCount = new ga(0));
            return this._reloadCount
        },
        __class__: ha
    };
    var Fb = function(a, b) {
        var c = this;
        this.manifest = b;
        this._platform = a;
        this.promise = new ec;
        this._bytesLoaded = new R;
        this._pack = new Ic(b, this);
        var e = Sa.array(b);
        if (0 == e.length) this.handleSuccess();
        else {
            for (var d = new R, j = 0; j < e.length;) {
                var f = e[j];
                ++j;
                var g = d.get(f.name);
                null == g && (g = [], d.set(f.name, g));
                g.push(f)
            }
            this._assetsRemaining =
                Sa.count(d);
            for (e = d.iterator(); e.hasNext();) d = [e.next()], this.pickBestEntry(d[0], function(a) {
                return function(d) {
                    if (null != d) {
                        var e = b.getFullURL(d);
                        try {
                            c.loadEntry(e, d)
                        } catch (j) {
                            c.handleError(d, "Unexpected error: " + n.string(j))
                        }
                        e = c.promise;
                        e.set_total(e._total + d.bytes)
                    } else d = a[0][0], Fb.isAudio(d.format) ? c.handleLoad(d, Ya.getInstance()) : c.handleError(d, "Could not find a supported format to load")
                }
            }(d))
        }
    };
    g["flambe.platform.BasicAssetPackLoader"] = Fb;
    Fb.__name__ = ["flambe", "platform", "BasicAssetPackLoader"];
    Fb.isAudio = function(a) {
        switch (a[1]) {
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                return !0;
            default:
                return !1
        }
    };
    Fb.prototype = {
        onDisposed: function() {},
        pickBestEntry: function(a, b) {
            this.getAssetFormats(function(c) {
                for (var e = 0; e < c.length;) {
                    var d = c[e];
                    ++e;
                    for (var j = 0; j < a.length;) {
                        var f = a[j];
                        ++j;
                        if (f.format == d) {
                            b(f);
                            return
                        }
                    }
                }
                b(null)
            })
        },
        loadEntry: function() {
            null
        },
        getAssetFormats: function() {
            null
        },
        handleLoad: function(a, b) {
            if (!this._pack.disposed) {
                this.handleProgress(a, a.bytes);
                var c;
                switch (a.format[1]) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        c =
                            this._pack.textures;
                        break;
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        c = this._pack.sounds;
                        break;
                    case 13:
                        c = this._pack.files
                }
                c.set(a.name, b);
                this._assetsRemaining -= 1;
                0 == this._assetsRemaining && this.handleSuccess()
            }
        },
        handleProgress: function(a, b) {
            this._bytesLoaded.set(a.name, b);
            for (var c = 0, e = this._bytesLoaded.iterator(); e.hasNext();) var d = e.next(),
                c = c + d;
            this.promise.set_progress(c)
        },
        handleSuccess: function() {
            this.promise.set_result(this._pack)
        },
        handleError: function(a, b) {
            this.promise.error.emit(Da.withFields(b, ["url", a.url]))
        },
        handleTextureError: function(a) {
            this.handleError(a, "Failed to create texture. Is the GPU context unavailable?")
        },
        __class__: Fb
    };
    var Ic = function(a, b) {
        this.disposed = !1;
        this._manifest = a;
        this.loader = b;
        this.textures = new R;
        this.sounds = new R;
        this.files = new R
    };
    g["flambe.platform._BasicAssetPackLoader.BasicAssetPack"] = Ic;
    Ic.__name__ = ["flambe", "platform", "_BasicAssetPackLoader", "BasicAssetPack"];
    Ic.__interfaces__ = [ac];
    Ic.prototype = {
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.textures.get(a);
            if (null == c && b) throw Da.withFields("Missing texture", ["name", a]);
            return c
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            var c = this.sounds.get(a);
            if (null == c && b) throw Da.withFields("Missing sound", ["name", a]);
            return c
        },
        getFile: function(a, b) {
            null == b && (b = !0);
            var c = this.files.get(a);
            if (null == c && b) throw Da.withFields("Missing file", ["name", a]);
            return c
        },
        dispose: function() {
            if (!this.disposed) {
                this.disposed = !0;
                for (var a = this.textures.iterator(); a.hasNext();) a.next().dispose();
                this.textures = null;
                for (a = this.sounds.iterator(); a.hasNext();) a.next().dispose();
                this.sounds = null;
                for (a = this.files.iterator(); a.hasNext();) a.next().dispose();
                this.files = null;
                this.loader.onDisposed()
            }
        },
        __class__: Ic
    };
    var fc = function(a) {
        ha.call(this);
        this._content = a
    };
    g["flambe.platform.BasicFile"] = fc;
    fc.__name__ = ["flambe", "platform", "BasicFile"];
    fc.__interfaces__ = [bc];
    fc.__super__ = ha;
    fc.prototype = x(ha.prototype, {
        toString: function() {
            return this._content
        },
        onDisposed: function() {
            this._content = null
        },
        __class__: fc
    });
    var $d = function() {};
    g["flambe.subsystem.KeyboardSystem"] = $d;
    $d.__name__ = ["flambe", "subsystem", "KeyboardSystem"];
    $d.prototype = {
        __class__: $d
    };
    var $a = function() {
        this.down = new W;
        this.up = new W;
        this.backButton = new rb;
        this._keyStates = new Na
    };
    g["flambe.platform.BasicKeyboard"] = $a;
    $a.__name__ = ["flambe", "platform", "BasicKeyboard"];
    $a.__interfaces__ = [$d];
    $a.prototype = {
        isDown: function(a) {
            return this.isCodeDown(gc.toKeyCode(a))
        },
        isCodeDown: function(a) {
            return this._keyStates.exists(a)
        },
        submitDown: function(a) {
            if (16777238 == a) return null != this.backButton._head ? (this.backButton.emit(), !0) : !1;
            this._keyStates.exists(a) || (this._keyStates.set(a, !0), $a._sharedEvent.init($a._sharedEvent.id + 1, gc.toKey(a)), this.down.emit($a._sharedEvent));
            return !0
        },
        submitUp: function(a) {
            this._keyStates.exists(a) && (this._keyStates.remove(a), $a._sharedEvent.init($a._sharedEvent.id + 1, gc.toKey(a)), this.up.emit($a._sharedEvent))
        },
        __class__: $a
    };
    var Te = function() {};
    g["flambe.subsystem.MouseSystem"] = Te;
    Te.__name__ = ["flambe", "subsystem", "MouseSystem"];
    var Ta = function(a) {
        this._pointer = a;
        this._source = dc.Mouse(Ta._sharedEvent);
        this.down = new W;
        this.move = new W;
        this.up = new W;
        this.scroll = new W;
        this._y = this._x = 0;
        this._cursor = Ea.Default;
        this._buttonStates = new Na
    };
    g["flambe.platform.BasicMouse"] = Ta;
    Ta.__name__ = ["flambe", "platform", "BasicMouse"];
    Ta.__interfaces__ = [Te];
    Ta.prototype = {
        submitDown: function(a, b, c) {
            this._buttonStates.exists(c) || (this._buttonStates.set(c, !0), this.prepare(a, b, ae.toButton(c)), this._pointer.submitDown(a, b, this._source), this.down.emit(Ta._sharedEvent))
        },
        submitMove: function(a, b) {
            this.prepare(a, b, null);
            this._pointer.submitMove(a,
                b, this._source);
            this.move.emit(Ta._sharedEvent)
        },
        submitUp: function(a, b, c) {
            this._buttonStates.exists(c) && (this._buttonStates.remove(c), this.prepare(a, b, ae.toButton(c)), this._pointer.submitUp(a, b, this._source), this.up.emit(Ta._sharedEvent))
        },
        submitScroll: function(a, b, c) {
            this._x = a;
            this._y = b;
            if (null == this.scroll._head) return !1;
            this.scroll.emit(c);
            return !0
        },
        prepare: function(a, b, c) {
            this._x = a;
            this._y = b;
            Ta._sharedEvent.init(Ta._sharedEvent.id + 1, a, b, c)
        },
        __class__: Ta
    };
    var be = function() {};
    g["flambe.subsystem.PointerSystem"] =
        be;
    be.__name__ = ["flambe", "subsystem", "PointerSystem"];
    be.prototype = {
        __class__: be
    };
    var ua = function(a, b, c) {
        null == c && (c = !1);
        null == b && (b = 0);
        null == a && (a = 0);
        this.down = new W;
        this.move = new W;
        this.up = new W;
        this._x = a;
        this._y = b;
        this._isDown = c
    };
    g["flambe.platform.BasicPointer"] = ua;
    ua.__name__ = ["flambe", "platform", "BasicPointer"];
    ua.__interfaces__ = [be];
    ua.prototype = {
        get_x: function() {
            return this._x
        },
        get_y: function() {
            return this._y
        },
        isDown: function() {
            return this._isDown
        },
        submitDown: function(a, b, c) {
            if (!this._isDown) {
                this.submitMove(a,
                    b, c);
                this._isDown = !0;
                var e = [],
                    d = u.hitTest(o.root, a, b);
                if (null != d) {
                    var j = d.owner;
                    do {
                        var f = j._compMap.Sprite_12;
                        null != f && e.push(f);
                        j = j.parent
                    } while (null != j)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerDown(ua._sharedEvent), ua._sharedEvent._stopped) return;
                this.down.emit(ua._sharedEvent)
            }
        },
        submitMove: function(a, b, c) {
            if (!(a == this._x && b == this._y)) {
                var e = [],
                    d = u.hitTest(o.root, a, b);
                if (null != d) {
                    var j = d.owner;
                    do {
                        var f = j._compMap.Sprite_12;
                        null != f && e.push(f);
                        j = j.parent
                    } while (null != j)
                }
                this.prepare(a,
                    b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerMove(ua._sharedEvent), ua._sharedEvent._stopped) return;
                this.move.emit(ua._sharedEvent)
            }
        },
        submitUp: function(a, b, c) {
            if (this._isDown) {
                this.submitMove(a, b, c);
                this._isDown = !1;
                var e = [],
                    d = u.hitTest(o.root, a, b);
                if (null != d) {
                    var j = d.owner;
                    do {
                        var f = j._compMap.Sprite_12;
                        null != f && e.push(f);
                        j = j.parent
                    } while (null != j)
                }
                this.prepare(a, b, d, c);
                for (a = 0; a < e.length;)
                    if (b = e[a], ++a, b.onPointerUp(ua._sharedEvent), ua._sharedEvent._stopped) return;
                this.up.emit(ua._sharedEvent)
            }
        },
        prepare: function(a, b, c, e) {
            this._x = a;
            this._y = b;
            ua._sharedEvent.init(ua._sharedEvent.id + 1, a, b, c, e)
        },
        __class__: ua
    };
    var fb = function(a, b, c) {
        this._x = this._y = 0;
        this._parent = null;
        this.rootX = this.rootY = 0;
        ha.call(this);
        this.root = a;
        this._width = b;
        this._height = c
    };
    g["flambe.platform.BasicTexture"] = fb;
    fb.__name__ = ["flambe", "platform", "BasicTexture"];
    fb.__interfaces__ = [Ne];
    fb.__super__ = ha;
    fb.prototype = x(ha.prototype, {
        subTexture: function(a, b, c, e) {
            c = this.root.createTexture(c, e);
            c._parent = this;
            c._x = a;
            c._y = b;
            c.rootX =
                this.rootX + a;
            c.rootY = this.rootY + b;
            return c
        },
        onDisposed: function() {
            null == this._parent && this.root.dispose()
        },
        get_reloadCount: function() {
            return this.root.get_reloadCount()
        },
        get_width: function() {
            return this._width
        },
        get_height: function() {
            return this._height
        },
        __class__: fb
    });
    var Oe = function() {};
    g["flambe.subsystem.TouchSystem"] = Oe;
    Oe.__name__ = ["flambe", "subsystem", "TouchSystem"];
    var yc = function(a, b) {
        null == b && (b = 4);
        this._pointer = a;
        this._maxPoints = b;
        this._pointMap = new Na;
        this._points = [];
        this.down = new W;
        this.move =
            new W;
        this.up = new W
    };
    g["flambe.platform.BasicTouch"] = yc;
    yc.__name__ = ["flambe", "platform", "BasicTouch"];
    yc.__interfaces__ = [Oe];
    yc.prototype = {
        submitDown: function(a, b, c) {
            if (!this._pointMap.exists(a)) {
                var e = new Zd(a);
                e.init(b, c);
                this._pointMap.set(a, e);
                this._points.push(e);
                null == this._pointerTouch && (this._pointerTouch = e, this._pointer.submitDown(b, c, e._source));
                this.down.emit(e)
            }
        },
        submitMove: function(a, b, c) {
            a = this._pointMap.get(a);
            null != a && (a.init(b, c), this._pointerTouch == a && this._pointer.submitMove(b,
                c, a._source), this.move.emit(a))
        },
        submitUp: function(a, b, c) {
            var e = this._pointMap.get(a);
            null != e && (e.init(b, c), this._pointMap.remove(a), B.remove(this._points, e), this._pointerTouch == e && (this._pointerTouch = null, this._pointer.submitUp(b, c, e._source)), this.up.emit(e))
        },
        __class__: yc
    };
    var hc = function() {};
    g["flambe.sound.Sound"] = hc;
    hc.__name__ = ["flambe", "sound", "Sound"];
    hc.__interfaces__ = [Ab];
    hc.prototype = {
        __class__: hc
    };
    var Ya = function() {
        ha.call(this);
        this._playback = new Jc(this)
    };
    g["flambe.platform.DummySound"] =
        Ya;
    Ya.__name__ = ["flambe", "platform", "DummySound"];
    Ya.__interfaces__ = [hc];
    Ya.getInstance = function() {
        null == Ya._instance && (Ya._instance = new Ya);
        return Ya._instance
    };
    Ya.__super__ = ha;
    Ya.prototype = x(ha.prototype, {
        play: function() {
            return this._playback
        },
        loop: function() {
            return this._playback
        },
        get_duration: function() {
            return 0
        },
        onDisposed: function() {},
        __class__: Ya
    });
    var ic = function() {};
    g["flambe.sound.Playback"] = ic;
    ic.__name__ = ["flambe", "sound", "Playback"];
    ic.__interfaces__ = [Za];
    ic.prototype = {
        __class__: ic
    };
    var Jc = function(a) {
        this._sound = a;
        this.volume = new Z(0);
        this._complete = new ga(!0)
    };
    g["flambe.platform.DummyPlayback"] = Jc;
    Jc.__name__ = ["flambe", "platform", "DummyPlayback"];
    Jc.__interfaces__ = [ic];
    Jc.prototype = {
        set_paused: function() {
            return !0
        },
        dispose: function() {},
        __class__: Jc
    };
    var Kc = function() {};
    g["flambe.subsystem.StorageSystem"] = Kc;
    Kc.__name__ = ["flambe", "subsystem", "StorageSystem"];
    Kc.prototype = {
        __class__: Kc
    };
    var Bc = function() {
        this.clear()
    };
    g["flambe.platform.DummyStorage"] = Bc;
    Bc.__name__ = ["flambe",
        "platform", "DummyStorage"
    ];
    Bc.__interfaces__ = [Kc];
    Bc.prototype = {
        set: function(a, b) {
            this._hash.set(a, b);
            return !0
        },
        get: function(a, b) {
            return this._hash.exists(a) ? this._hash.get(a) : b
        },
        remove: function(a) {
            this._hash.remove(a)
        },
        clear: function() {
            this._hash = new R
        },
        __class__: Bc
    };
    var zc = function() {
        this.down = new W;
        this.move = new W;
        this.up = new W
    };
    g["flambe.platform.DummyTouch"] = zc;
    zc.__name__ = ["flambe", "platform", "DummyTouch"];
    zc.__interfaces__ = [Oe];
    zc.prototype = {
        __class__: zc
    };
    var Lc = function() {
        this._entries = []
    };
    g["flambe.platform.EventGroup"] = Lc;
    Lc.__name__ = ["flambe", "platform", "EventGroup"];
    Lc.__interfaces__ = [Za];
    Lc.prototype = {
        addListener: function(a, b, c) {
            a.addEventListener(b, c, !1);
            this._entries.push(new ce(a, b, c))
        },
        addDisposingListener: function(a, b, c) {
            var e = this;
            this.addListener(a, b, function(a) {
                e.dispose();
                c(a)
            })
        },
        dispose: function() {
            for (var a = 0, b = this._entries; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispatcher.removeEventListener(c.type, c.listener, !1)
            }
            this._entries = []
        },
        __class__: Lc
    };
    var ce = function(a, b, c) {
        this.dispatcher =
            a;
        this.type = b;
        this.listener = c
    };
    g["flambe.platform._EventGroup.Entry"] = ce;
    ce.__name__ = ["flambe", "platform", "_EventGroup", "Entry"];
    ce.prototype = {
        __class__: ce
    };
    var jc = function() {};
    g["flambe.platform.InternalGraphics"] = jc;
    jc.__name__ = ["flambe", "platform", "InternalGraphics"];
    jc.__interfaces__ = [Vd];
    jc.prototype = {
        __class__: jc
    };
    var de = function() {};
    g["flambe.subsystem.RendererSystem"] = de;
    de.__name__ = ["flambe", "subsystem", "RendererSystem"];
    de.prototype = {
        __class__: de
    };
    var kc = function() {};
    g["flambe.platform.InternalRenderer"] =
        kc;
    kc.__name__ = ["flambe", "platform", "InternalRenderer"];
    kc.__interfaces__ = [de];
    kc.prototype = {
        __class__: kc
    };
    var gc = function() {};
    g["flambe.platform.KeyCodes"] = gc;
    gc.__name__ = ["flambe", "platform", "KeyCodes"];
    gc.toKey = function(a) {
        switch (a) {
            case 65:
                return f.A;
            case 66:
                return f.B;
            case 67:
                return f.C;
            case 68:
                return f.D;
            case 69:
                return f.E;
            case 70:
                return f.F;
            case 71:
                return f.G;
            case 72:
                return f.H;
            case 73:
                return f.I;
            case 74:
                return f.J;
            case 75:
                return f.K;
            case 76:
                return f.L;
            case 77:
                return f.M;
            case 78:
                return f.N;
            case 79:
                return f.O;
            case 80:
                return f.P;
            case 81:
                return f.Q;
            case 82:
                return f.R;
            case 83:
                return f.S;
            case 84:
                return f.T;
            case 85:
                return f.U;
            case 86:
                return f.V;
            case 87:
                return f.W;
            case 88:
                return f.X;
            case 89:
                return f.Y;
            case 90:
                return f.Z;
            case 48:
                return f.Number0;
            case 49:
                return f.Number1;
            case 50:
                return f.Number2;
            case 51:
                return f.Number3;
            case 52:
                return f.Number4;
            case 53:
                return f.Number5;
            case 54:
                return f.Number6;
            case 55:
                return f.Number7;
            case 56:
                return f.Number8;
            case 57:
                return f.Number9;
            case 96:
                return f.Numpad0;
            case 97:
                return f.Numpad1;
            case 98:
                return f.Numpad2;
            case 99:
                return f.Numpad3;
            case 100:
                return f.Numpad4;
            case 101:
                return f.Numpad5;
            case 102:
                return f.Numpad6;
            case 103:
                return f.Numpad7;
            case 104:
                return f.Numpad8;
            case 105:
                return f.Numpad9;
            case 107:
                return f.NumpadAdd;
            case 110:
                return f.NumpadDecimal;
            case 111:
                return f.NumpadDivide;
            case 108:
                return f.NumpadEnter;
            case 106:
                return f.NumpadMultiply;
            case 109:
                return f.NumpadSubtract;
            case 112:
                return f.F1;
            case 113:
                return f.F2;
            case 114:
                return f.F3;
            case 115:
                return f.F4;
            case 116:
                return f.F5;
            case 117:
                return f.F6;
            case 118:
                return f.F7;
            case 119:
                return f.F8;
            case 120:
                return f.F9;
            case 121:
                return f.F10;
            case 122:
                return f.F11;
            case 123:
                return f.F12;
            case 37:
                return f.Left;
            case 38:
                return f.Up;
            case 39:
                return f.Right;
            case 40:
                return f.Down;
            case 18:
                return f.Alt;
            case 192:
                return f.Backquote;
            case 220:
                return f.Backslash;
            case 8:
                return f.Backspace;
            case 20:
                return f.CapsLock;
            case 188:
                return f.Comma;
            case 15:
                return f.Command;
            case 17:
                return f.Control;
            case 46:
                return f.Delete;
            case 35:
                return f.End;
            case 13:
                return f.Enter;
            case 187:
                return f.Equals;
            case 27:
                return f.Escape;
            case 36:
                return f.Home;
            case 45:
                return f.Insert;
            case 219:
                return f.LeftBracket;
            case 189:
                return f.Minus;
            case 34:
                return f.PageDown;
            case 33:
                return f.PageUp;
            case 190:
                return f.Period;
            case 222:
                return f.Quote;
            case 221:
                return f.RightBracket;
            case 186:
                return f.Semicolon;
            case 16:
                return f.Shift;
            case 191:
                return f.Slash;
            case 32:
                return f.Space;
            case 9:
                return f.Tab;
            case 16777234:
                return f.Menu;
            case 16777247:
                return f.Search
        }
        return f.Unknown(a)
    };
    gc.toKeyCode =
        function(a) {
            switch (a[1]) {
                case 0:
                    return 65;
                case 1:
                    return 66;
                case 2:
                    return 67;
                case 3:
                    return 68;
                case 4:
                    return 69;
                case 5:
                    return 70;
                case 6:
                    return 71;
                case 7:
                    return 72;
                case 8:
                    return 73;
                case 9:
                    return 74;
                case 10:
                    return 75;
                case 11:
                    return 76;
                case 12:
                    return 77;
                case 13:
                    return 78;
                case 14:
                    return 79;
                case 15:
                    return 80;
                case 16:
                    return 81;
                case 17:
                    return 82;
                case 18:
                    return 83;
                case 19:
                    return 84;
                case 20:
                    return 85;
                case 21:
                    return 86;
                case 22:
                    return 87;
                case 23:
                    return 88;
                case 24:
                    return 89;
                case 25:
                    return 90;
                case 26:
                    return 48;
                case 27:
                    return 49;
                case 28:
                    return 50;
                case 29:
                    return 51;
                case 30:
                    return 52;
                case 31:
                    return 53;
                case 32:
                    return 54;
                case 33:
                    return 55;
                case 34:
                    return 56;
                case 35:
                    return 57;
                case 36:
                    return 96;
                case 37:
                    return 97;
                case 38:
                    return 98;
                case 39:
                    return 99;
                case 40:
                    return 100;
                case 41:
                    return 101;
                case 42:
                    return 102;
                case 43:
                    return 103;
                case 44:
                    return 104;
                case 45:
                    return 105;
                case 46:
                    return 107;
                case 47:
                    return 110;
                case 48:
                    return 111;
                case 49:
                    return 108;
                case 50:
                    return 106;
                case 51:
                    return 109;
                case 52:
                    return 112;
                case 53:
                    return 113;
                case 54:
                    return 114;
                case 55:
                    return 115;
                case 56:
                    return 116;
                case 57:
                    return 117;
                case 58:
                    return 118;
                case 59:
                    return 119;
                case 60:
                    return 120;
                case 61:
                    return 121;
                case 62:
                    return 122;
                case 63:
                    return 123;
                case 64:
                    return 124;
                case 65:
                    return 125;
                case 66:
                    return 126;
                case 67:
                    return 37;
                case 68:
                    return 38;
                case 69:
                    return 39;
                case 70:
                    return 40;
                case 71:
                    return 18;
                case 72:
                    return 192;
                case 73:
                    return 220;
                case 74:
                    return 8;
                case 75:
                    return 20;
                case 76:
                    return 188;
                case 77:
                    return 15;
                case 78:
                    return 17;
                case 79:
                    return 46;
                case 80:
                    return 35;
                case 81:
                    return 13;
                case 82:
                    return 187;
                case 83:
                    return 27;
                case 84:
                    return 36;
                case 85:
                    return 45;
                case 86:
                    return 219;
                case 87:
                    return 189;
                case 88:
                    return 34;
                case 89:
                    return 33;
                case 90:
                    return 190;
                case 91:
                    return 222;
                case 92:
                    return 221;
                case 93:
                    return 186;
                case 94:
                    return 16;
                case 95:
                    return 191;
                case 96:
                    return 32;
                case 97:
                    return 9;
                case 98:
                    return 16777234;
                case 99:
                    return 16777247;
                case 100:
                    return a[2]
            }
        };
    var Lb = function() {
        this._tickables = []
    };
    g["flambe.platform.MainLoop"] = Lb;
    Lb.__name__ = ["flambe", "platform", "MainLoop"];
    Lb.updateEntity = function(a, b) {
        var c = a._compMap.SpeedAdjuster_14;
        if (null != c && (c._realDt = b, b *= c.scale._value, 0 >= b)) {
            c.onUpdate(b);
            return
        }
        for (c = a.firstComponent; null != c;) {
            var e = c.next;
            0 == (c._flags & 1) && (c._flags |= 1, c.onStart());
            c.onUpdate(b);
            c = e
        }
        for (c = a.firstChild; null != c;) e = c.next, Lb.updateEntity(c, b), c = e
    };
    Lb.prototype = {
        update: function(a) {
            if (!(0 >= a)) {
                0.25 < a && (a = 0.25);
                for (var b = 0; b < this._tickables.length;) {
                    var c = this._tickables[b];
                    null == c || c.update(a) ? this._tickables.splice(b, 1) : ++b
                }
                o.volume.update(a);
                Lb.updateEntity(o.root, a)
            }
        },
        render: function(a) {
            var b = a.graphics;
            null != b && (a.willRender(), u.render(o.root, b), a.didRender())
        },
        addTickable: function(a) {
            this._tickables.push(a)
        },
        __class__: Lb
    };
    var ee = function() {};
    g["flambe.platform.MathUtil"] = ee;
    ee.__name__ = ["flambe", "platform", "MathUtil"];
    ee.nextPowerOfTwo = function(a) {
        for (var b = 1; b < a;) b <<= 1;
        return b
    };
    var ae = function() {};
    g["flambe.platform.MouseCodes"] = ae;
    ae.__name__ = ["flambe", "platform", "MouseCodes"];
    ae.toButton = function(a) {
        switch (a) {
            case 0:
                return ka.Left;
            case 1:
                return ka.Middle;
            case 2:
                return ka.Right
        }
        return ka.Unknown(a)
    };
    var Mc = function() {};
    g["flambe.platform.TextureRoot"] = Mc;
    Mc.__name__ = ["flambe", "platform", "TextureRoot"];
    Mc.prototype = {
        __class__: Mc
    };
    var Nc = function() {};
    g["flambe.platform.Tickable"] = Nc;
    Nc.__name__ = ["flambe", "platform", "Tickable"];
    Nc.prototype = {
        __class__: Nc
    };
    var Oc = function(a, b) {
        this._firstDraw = !1;
        this._canvasCtx = a.getContext("2d", {
            alpha: b
        })
    };
    g["flambe.platform.html.CanvasGraphics"] = Oc;
    Oc.__name__ = ["flambe", "platform", "html", "CanvasGraphics"];
    Oc.__interfaces__ = [jc];
    Oc.prototype = {
        save: function() {
            this._canvasCtx.save()
        },
        transform: function(a, b, c, e, d, j) {
            this._canvasCtx.transform(a, b, c, e, d, j)
        },
        restore: function() {
            this._canvasCtx.restore()
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, e, d, j, f) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawSubTexture(a, b, c, e, d, j, f), this._canvasCtx.globalCompositeOperation = "source-over") : this._canvasCtx.drawImage(a.root.image, a.rootX + e | 0, a.rootY + d | 0, j | 0, f | 0, b | 0, c | 0, j |
                0, f | 0)
        },
        drawPattern: function(a, b, c, e, d) {
            this._firstDraw ? (this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.drawPattern(a, b, c, e, d), this._canvasCtx.globalCompositeOperation = "source-over") : (this._canvasCtx.fillStyle = a.getPattern(), this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0))
        },
        fillRect: function(a, b, c, e, d) {
            if (this._firstDraw) this._firstDraw = !1, this._canvasCtx.globalCompositeOperation = "copy", this.fillRect(a, b, c, e, d), this._canvasCtx.globalCompositeOperation = "source-over";
            else {
                for (a = (16777215 &
                        a).toString(16); 6 > a.length;) a = "0" + n.string(a);
                this._canvasCtx.fillStyle = "#" + n.string(a);
                this._canvasCtx.fillRect(b | 0, c | 0, e | 0, d | 0)
            }
        },
        multiplyAlpha: function(a) {
            this._canvasCtx.globalAlpha *= a
        },
        setBlendMode: function(a) {
            var b;
            switch (a[1]) {
                case 0:
                    b = "source-over";
                    break;
                case 1:
                    b = "lighter";
                    break;
                case 2:
                    b = "multiply";
                    break;
                case 3:
                    b = "screen";
                    break;
                case 4:
                    b = "destination-in";
                    break;
                case 5:
                    b = "copy"
            }
            this._canvasCtx.globalCompositeOperation = b
        },
        applyScissor: function(a, b, c, e) {
            this._canvasCtx.beginPath();
            this._canvasCtx.rect(a |
                0, b | 0, c | 0, e | 0);
            this._canvasCtx.clip()
        },
        willRender: function() {
            this._firstDraw = !0
        },
        didRender: function() {},
        onResize: function() {},
        __class__: Oc
    };
    var zb = function(a) {
        this.graphics = new Oc(a, !1);
        this._hasGPU = new ga(!0)
    };
    g["flambe.platform.html.CanvasRenderer"] = zb;
    zb.__name__ = ["flambe", "platform", "html", "CanvasRenderer"];
    zb.__interfaces__ = [kc];
    zb.prototype = {
        get_type: function() {
            return wa.Canvas
        },
        createTextureFromImage: function(a) {
            a = new lc(zb.CANVAS_TEXTURES ? I.createCanvas(a) : a);
            return a.createTexture(a.width,
                a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        __class__: zb
    };
    var Pc = function(a, b, c) {
        this._rootUpdateCount = 0;
        this._pattern = null;
        fb.call(this, a, b, c)
    };
    g["flambe.platform.html.CanvasTexture"] = Pc;
    Pc.__name__ = ["flambe", "platform", "html", "CanvasTexture"];
    Pc.__super__ = fb;
    Pc.prototype = x(fb.prototype, {
        getPattern: function() {
            if (this._rootUpdateCount != this.root.updateCount ||
                null == this._pattern) this._rootUpdateCount = this.root.updateCount, this._pattern = this.root.createPattern(this.rootX, this.rootY, this._width, this._height);
            return this._pattern
        },
        __class__: Pc
    });
    var lc = function(a) {
        this._graphics = null;
        this.updateCount = 0;
        ha.call(this);
        this.image = a;
        this.width = a.width;
        this.height = a.height
    };
    g["flambe.platform.html.CanvasTextureRoot"] = lc;
    lc.__name__ = ["flambe", "platform", "html", "CanvasTextureRoot"];
    lc.__interfaces__ = [Mc];
    lc.__super__ = ha;
    lc.prototype = x(ha.prototype, {
        createTexture: function(a,
            b) {
            return new Pc(this, a, b)
        },
        createPattern: function(a, b, c, e) {
            var d = this.getContext2d(),
                j = this.image;
            if (0 != a || 0 != b || c != this.width || e != this.height) j = I.createEmptyCanvas(c, e), c = j.getContext("2d"), c.globalCompositeOperation = "copy", c.drawImage(this.image, -a, -b);
            return d.createPattern(j, "repeat")
        },
        getContext2d: function() {
            ta.__instanceof(this.image, HTMLCanvasElement) || (this.image = I.createCanvas(this.image));
            return this.image.getContext("2d")
        },
        onDisposed: function() {
            this._graphics = this.image = null
        },
        __class__: lc
    });
    var da = function(a, b) {
        Fb.call(this, a, b)
    };
    g["flambe.platform.html.HtmlAssetPackLoader"] = da;
    da.__name__ = ["flambe", "platform", "html", "HtmlAssetPackLoader"];
    da.detectImageFormats = function(a) {
        var b = [m.PNG, m.JPG, m.GIF],
            c = 2,
            e;
        e = window.document.createElement("img");
        e.onload = e.onerror = function() {
            1 == e.width && b.unshift(m.WEBP);
            --c;
            0 == c && a(b)
        };
        e.src = "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";
        var d;
        d = window.document.createElement("img");
        d.onload = d.onerror = function() {
            1 == d.width && b.unshift(m.JXR);
            --c;
            0 == c && a(b)
        };
        d.src = "data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA=="
    };
    da.detectAudioFormats = function() {
        var a;
        a = window.document.createElement("audio");
        if (null == a || null == t(a, a.canPlayType)) return [];
        T.get_supported();
        for (var b = [{
                    format: m.M4A,
                    mimeType: "audio/mp4; codecs=mp4a"
                }, {
                    format: m.MP3,
                    mimeType: "audio/mpeg"
                }, {
                    format: m.OPUS,
                    mimeType: "audio/ogg; codecs=opus"
                },
                {
                    format: m.OGG,
                    mimeType: "audio/ogg; codecs=vorbis"
                }, {
                    format: m.WAV,
                    mimeType: "audio/wav"
                }
            ], c = [], e = 0; e < b.length;) {
            var d = b[e];
            ++e;
            var j = "";
            try {
                j = a.canPlayType(d.mimeType)
            } catch (f) {}
            "" != j && c.push(d.format)
        }
        return c
    };
    da.supportsBlob = function() {
        if (da._detectBlobSupport) {
            da._detectBlobSupport = !1;
            if ((new Ib("\\bSilk\\b", "")).match(window.navigator.userAgent) || null == window.Blob) return !1;
            var a = new XMLHttpRequest;
            a.open("GET", ".", !0);
            if ("" != a.responseType) return !1;
            a.responseType = "blob";
            if ("blob" != a.responseType) return !1;
            da._URL = I.loadExtension("URL").value
        }
        return null != da._URL && null != da._URL.createObjectURL
    };
    da.__super__ = Fb;
    da.prototype = x(Fb.prototype, {
        loadEntry: function(a, b) {
            var c = this;
            switch (b.format[1]) {
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    var e;
                    e = window.document.createElement("img");
                    var d = new Lc;
                    d.addDisposingListener(e, "load", function() {
                        da.supportsBlob() && da._URL.revokeObjectURL(e.src);
                        var a = c._platform.getRenderer().createTextureFromImage(e);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    d.addDisposingListener(e,
                        "error",
                        function() {
                            c.handleError(b, "Failed to load image")
                        });
                    da.supportsBlob() ? this.download(a, b, "blob", function(a) {
                        e.src = da._URL.createObjectURL(a)
                    }) : e.src = a;
                    break;
                case 5:
                case 6:
                case 7:
                    this.download(a, b, "arraybuffer", function() {
                        var a = c._platform.getRenderer().createCompressedTexture(b.format, null);
                        null != a ? c.handleLoad(b, a) : c.handleTextureError(b)
                    });
                    break;
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                    T.get_supported() ? this.download(a, b, "arraybuffer", function(a) {
                        T.ctx.decodeAudioData(a, function(a) {
                            c.handleLoad(b,
                                new T(a))
                        }, function() {
                            c.handleLoad(b, Ya.getInstance())
                        })
                    }) : this.handleLoad(b, Ya.getInstance());
                    break;
                case 13:
                    this.download(a, b, "text", function(a) {
                        c.handleLoad(b, new fc(a))
                    })
            }
        },
        getAssetFormats: function(a) {
            var b = this;
            null == da._supportedFormats && (da._supportedFormats = new ec, da.detectImageFormats(function(a) {
                da._supportedFormats.set_result(b._platform.getRenderer().getCompressedTextureFormats().concat(a).concat(da.detectAudioFormats()).concat([m.Data]))
            }));
            da._supportedFormats.get(a)
        },
        download: function(a,
            b, c, e) {
            var d = this,
                j = null,
                f = null,
                g = 0,
                w = !1,
                Y = function() {
                    w && (w = !1, window.clearInterval(g))
                },
                h = 3,
                i = function() {
                    --h;
                    return 0 <= h ? (f(), !0) : !1
                },
                f = function() {
                    Y();
                    null != j && j.abort();
                    j = new XMLHttpRequest;
                    j.open("GET", a, !0);
                    j.responseType = c;
                    var f = 0;
                    j.onprogress = function(a) {
                        w || (w = !0, g = window.setInterval(function() {
                            4 != j.readyState && 5E3 < Date.now() - f && !i() && (Y(), d.handleError(b, "Download stalled"))
                        }, 1E3));
                        f = Date.now();
                        d.handleProgress(b, a.loaded)
                    };
                    j.onerror = function() {
                        if (0 != j.status || !i()) Y(), d.handleError(b, "HTTP error " +
                            j.status)
                    };
                    j.onload = function() {
                        var a = j.response;
                        null == a && (a = j.responseText);
                        Y();
                        e(a)
                    };
                    j.send()
                };
            f()
        },
        __class__: da
    });
    var xc = function(a, b) {
        Ta.call(this, a);
        this._canvas = b
    };
    g["flambe.platform.html.HtmlMouse"] = xc;
    xc.__name__ = ["flambe", "platform", "html", "HtmlMouse"];
    xc.__super__ = Ta;
    xc.prototype = x(Ta.prototype, {
        __class__: xc
    });
    var fe = function() {};
    g["flambe.subsystem.StageSystem"] = fe;
    fe.__name__ = ["flambe", "subsystem", "StageSystem"];
    fe.prototype = {
        __class__: fe
    };
    var Kb = function(a) {
        var b = this;
        this._canvas = a;
        this.resize =
            new rb;
        this.scaleFactor = Kb.computeScaleFactor();
        1 != this.scaleFactor && (I.setVendorStyle(this._canvas, "transform-origin", "top left"), I.setVendorStyle(this._canvas, "transform", "scale(" + 1 / this.scaleFactor + ")"));
        I.SHOULD_HIDE_MOBILE_BROWSER && (window.addEventListener("orientationchange", function() {
            I.callLater(t(b, b.hideMobileBrowser), 200)
        }, !1), this.hideMobileBrowser());
        window.addEventListener("resize", t(this, this.onWindowResize), !1);
        this.onWindowResize(null);
        this.orientation = new ga(null);
        null != window.orientation &&
            (window.addEventListener("orientationchange", t(this, this.onOrientationChange), !1), this.onOrientationChange(null));
        this.fullscreen = new ga(!1);
        I.addVendorListener(window.document, "fullscreenchange", function() {
            b.updateFullscreen()
        }, !1);
        this.updateFullscreen()
    };
    g["flambe.platform.html.HtmlStage"] = Kb;
    Kb.__name__ = ["flambe", "platform", "html", "HtmlStage"];
    Kb.__interfaces__ = [fe];
    Kb.computeScaleFactor = function() {
        var a = window.devicePixelRatio;
        null == a && (a = 1);
        var b = window.document.createElement("canvas").getContext("2d"),
            b = I.loadExtension("backingStorePixelRatio", b).value;
        null == b && (b = 1);
        a /= b;
        b = window.screen.height;
        return 1136 < a * window.screen.width || 1136 < a * b ? 1 : a
    };
    Kb.prototype = {
        get_width: function() {
            return this._canvas.width
        },
        get_height: function() {
            return this._canvas.height
        },
        get_fullscreenSupported: function() {
            return !0 == I.loadFirstExtension(["fullscreenEnabled", "fullScreenEnabled"], window.document).value
        },
        lockOrientation: function(a) {
            try {
                var b = I.loadExtension("lockOrientation", window.screen).value;
                if (null != b) {
                    var c;
                    switch (a[1]) {
                        case 0:
                            c =
                                "portrait";
                            break;
                        case 1:
                            c = "landscape"
                    }
                    b.apply(window.screen, [c]) || null
                }
            } catch (e) {
                null
            }
        },
        requestFullscreen: function(a) {
            null == a && (a = !0);
            if (a) {
                var a = window.document.documentElement,
                    b = I.loadFirstExtension(["requestFullscreen", "requestFullScreen"], a).value;
                null != b && b.apply(a, [])
            } else a = I.loadFirstExtension(["cancelFullscreen", "cancelFullScreen"], window.document).value, null != a && O.callMethod(window.document, a, [])
        },
        onWindowResize: function() {
            var a = this._canvas.parentElement.getBoundingClientRect();
            this.resizeCanvas(a.width,
                a.height)
        },
        resizeCanvas: function(a, b) {
            var c = this.scaleFactor * a,
                e = this.scaleFactor * b;
            if (this._canvas.width == c && this._canvas.height == e) return !1;
            this._canvas.width = c | 0;
            this._canvas.height = e | 0;
            this.resize.emit();
            return !0
        },
        hideMobileBrowser: function() {
            var a = this,
                b = window.document.documentElement.style;
            b.height = window.innerHeight + 100 + "px";
            b.width = window.innerWidth + "px";
            b.overflow = "visible";
            I.callLater(function() {
                I.hideMobileBrowser();
                I.callLater(function() {
                        b.height = window.innerHeight + "px";
                        a.onWindowResize(null)
                    },
                    100)
            })
        },
        onOrientationChange: function() {
            this.orientation.set__(I.orientation(window.orientation))
        },
        updateFullscreen: function() {
            this.fullscreen.set__(!0 == I.loadFirstExtension(["fullscreen", "fullScreen", "isFullScreen"], window.document).value)
        },
        __class__: Kb
    };
    var Ac = function(a) {
        this._storage = a
    };
    g["flambe.platform.html.HtmlStorage"] = Ac;
    Ac.__name__ = ["flambe", "platform", "html", "HtmlStorage"];
    Ac.__interfaces__ = [Kc];
    Ac.prototype = {
        set: function(a, b) {
            var c;
            try {
                var e = new mb;
                e.useCache = !0;
                e.useEnumIndex = !1;
                e.serialize(b);
                c = e.toString()
            } catch (d) {
                return !1
            }
            try {
                this._storage.setItem("sto.OR:" + a, c)
            } catch (j) {
                return !1
            }
            return !0
        },
        get: function(a, b) {
            var c = null;
            try {
                c = this._storage.getItem("sto.OR:" + a)
            } catch (e) {
                null
            }
            if (null != c) try {
                return Fa.run(c)
            } catch (d) {
                null
            }
            return b
        },
        remove: function(a) {
            try {
                this._storage.removeItem("sto.OR:" + a)
            } catch (b) {
                null
            }
        },
        clear: function() {
            for (var a = [], b = this._storage.length, c = 0; c < b;) {
                var e = this._storage.key(c++);
                F.startsWith(e, "sto.OR:") && a.push(e)
            }
            for (b = 0; b < a.length;) {
                c = a[b];
                ++b;
                try {
                    this._storage.removeItem(c)
                } catch (d) {
                    null
                }
            }
        },
        __class__: Ac
    };
    var I = function() {};
    g["flambe.platform.html.HtmlUtil"] = I;
    I.__name__ = ["flambe", "platform", "html", "HtmlUtil"];
    I.callLater = function(a, b) {
        null == b && (b = 0);
        window.setTimeout(a, b)
    };
    I.hideMobileBrowser = function() {
        window.scrollTo(1, 0)
    };
    I.loadExtension = function(a, b) {
        null == b && (b = window);
        var c = O.field(b, a);
        if (null != c) return {
            prefix: "",
            field: a,
            value: c
        };
        for (var c = a.charAt(0).toUpperCase() + B.substr(a, 1, null), e = 0, d = I.VENDOR_PREFIXES; e < d.length;) {
            var j = d[e];
            ++e;
            var f = j + c,
                g = O.field(b, f);
            if (null != g) return {
                prefix: j,
                field: f,
                value: g
            }
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    I.loadFirstExtension = function(a, b) {
        for (var c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            e = I.loadExtension(e, b);
            if (null != e.field) return e
        }
        return {
            prefix: null,
            field: null,
            value: null
        }
    };
    I.polyfill = function(a, b) {
        null == b && (b = window);
        var c = I.loadExtension(a, b).value;
        if (null == c) return !1;
        b[a] = c;
        return !0
    };
    I.setVendorStyle = function(a, b, c) {
        for (var a = a.style, e = 0, d = I.VENDOR_PREFIXES; e < d.length;) {
            var j = d[e];
            ++e;
            a.setProperty("-" + j + "-" + b, c)
        }
        a.setProperty(b, c)
    };
    I.addVendorListener =
        function(a, b, c, e) {
            for (var d = 0, j = I.VENDOR_PREFIXES; d < j.length;) {
                var f = j[d];
                ++d;
                a.addEventListener(f + b, c, e)
            }
            a.addEventListener(b, c, e)
        };
    I.orientation = function(a) {
        switch (a) {
            case -90:
            case 90:
                return Oa.Landscape;
            default:
                return Oa.Portrait
        }
    };
    I.createEmptyCanvas = function(a, b) {
        var c;
        c = window.document.createElement("canvas");
        c.width = a;
        c.height = b;
        return c
    };
    I.createCanvas = function(a) {
        var b = I.createEmptyCanvas(a.width, a.height),
            c = b.getContext("2d");
        c.save();
        c.globalCompositeOperation = "copy";
        c.drawImage(a, 0, 0);
        c.restore();
        return b
    };
    I.detectSlowDriver = function(a) {
        if (0 <= window.navigator.platform.indexOf("Win") && null != window.chrome) {
            for (var b = 0, a = a.getSupportedExtensions(); b < a.length;) {
                var c = a[b];
                ++b;
                if (0 <= c.indexOf("WEBGL_compressed_texture")) return !1
            }
            return !0
        }
        return !1
    };
    I.fixAndroidMath = function() {
        if (0 <= window.navigator.userAgent.indexOf("Linux; U; Android 4")) {
            var a = Math.sin,
                b = Math.cos;
            Math.sin = function(b) {
                return 0 == b ? 0 : a(b)
            };
            Math.cos = function(a) {
                return 0 == a ? 1 : b(a)
            }
        }
    };
    var ge = function() {};
    g["flambe.subsystem.WebSystem"] =
        ge;
    ge.__name__ = ["flambe", "subsystem", "WebSystem"];
    ge.prototype = {
        __class__: ge
    };
    var Cc = function(a) {
        this._container = a
    };
    g["flambe.platform.html.HtmlWeb"] = Cc;
    Cc.__name__ = ["flambe", "platform", "html", "HtmlWeb"];
    Cc.__interfaces__ = [ge];
    Cc.prototype = {
        createView: function(a, b, c, e) {
            var d;
            d = window.document.createElement("iframe");
            d.style.position = "absolute";
            d.style.border = "0";
            d.scrolling = "no";
            this._container.appendChild(d);
            a = new Qc(d, a, b, c, e);
            qb.instance.mainLoop.addTickable(a);
            return a
        },
        openBrowser: function(a) {
            window.open(a,
                "_blank")
        },
        __class__: Cc
    };
    var Rc = function() {};
    g["flambe.web.WebView"] = Rc;
    Rc.__name__ = ["flambe", "web", "WebView"];
    Rc.__interfaces__ = [Za];
    Rc.prototype = {
        __class__: Rc
    };
    var Qc = function(a, b, c, e, d) {
        var j = this;
        this.iframe = a;
        a = function() {
            j.updateBounds()
        };
        this.x = new Z(b, a);
        this.y = new Z(c, a);
        this.width = new Z(e, a);
        this.height = new Z(d, a);
        this.updateBounds();
        this.url = new ga(null, function(a) {
            j.loadUrl(a)
        });
        this.error = new W
    };
    g["flambe.platform.html.HtmlWebView"] = Qc;
    Qc.__name__ = ["flambe", "platform", "html", "HtmlWebView"];
    Qc.__interfaces__ = [Nc, Rc];
    Qc.prototype = {
        dispose: function() {
            null != this.iframe && (this.iframe.parentNode.removeChild(this.iframe), this.iframe = null)
        },
        update: function(a) {
            this.x.update(a);
            this.y.update(a);
            this.width.update(a);
            this.height.update(a);
            return null == this.iframe
        },
        updateBounds: function() {
            null != this.iframe && (this.iframe.style.left = this.x._value + "px", this.iframe.style.top = this.y._value + "px", this.iframe.width = this.width._value, this.iframe.height = this.height._value)
        },
        loadUrl: function(a) {
            null != this.iframe &&
                (this.iframe.src = a)
        },
        __class__: Qc
    };
    var T = function(a) {
        ha.call(this);
        this.buffer = a
    };
    g["flambe.platform.html.WebAudioSound"] = T;
    T.__name__ = ["flambe", "platform", "html", "WebAudioSound"];
    T.__interfaces__ = [hc];
    T.get_supported = function() {
        if (T._detectSupport) {
            T._detectSupport = !1;
            var a = I.loadExtension("AudioContext").value;
            null != a && (T.ctx = new a, T.gain = T.createGain(), T.gain.connect(T.ctx.destination), o.volume.watch(function(a) {
                T.gain.gain.value = a
            }))
        }
        return null != T.ctx
    };
    T.createGain = function() {
        return null != T.ctx.createGain ?
            T.ctx.createGain() : T.ctx.createGainNode()
    };
    T.start = function(a, b) {
        null != a.start ? a.start(b) : a.noteOn(b)
    };
    T.__super__ = ha;
    T.prototype = x(ha.prototype, {
        play: function(a) {
            null == a && (a = 1);
            return new mc(this, a, !1)
        },
        loop: function(a) {
            null == a && (a = 1);
            return new mc(this, a, !0)
        },
        get_duration: function() {
            return this.buffer.duration
        },
        onDisposed: function() {
            this.buffer = null
        },
        __class__: T
    });
    var mc = function(a, b, c) {
        var e = this;
        this._sound = a;
        this._head = T.gain;
        this._complete = new ga(!1);
        this._sourceNode = T.ctx.createBufferSource();
        this._sourceNode.buffer = a.buffer;
        this._sourceNode.loop = c;
        this._sourceNode.onended = function() {
            e._complete.set__(!0)
        };
        T.start(this._sourceNode, 0);
        this.playAudio();
        this.volume = new Z(b, function(a) {
            e.setVolume(a)
        });
        1 != b && this.setVolume(b);
        o.hidden._value && this.set_paused(!0)
    };
    g["flambe.platform.html._WebAudioSound.WebAudioPlayback"] = mc;
    mc.__name__ = ["flambe", "platform", "html", "_WebAudioSound", "WebAudioPlayback"];
    mc.__interfaces__ = [Nc, ic];
    mc.prototype = {
        set_paused: function(a) {
            a != 0 <= this._pausedAt && (a ? (this._sourceNode.disconnect(),
                this._pausedAt = this.get_position()) : this.playAudio());
            return a
        },
        get_position: function() {
            return this._complete._value ? this._sound.get_duration() : 0 <= this._pausedAt ? this._pausedAt : (T.ctx.currentTime - this._startedAt) % this._sound.get_duration()
        },
        update: function(a) {
            this.volume.update(a);
            3 == this._sourceNode.playbackState && this._complete.set__(!0);
            return this._complete._value || 0 <= this._pausedAt ? (this._tickableAdded = !1, this._hideBinding.dispose(), !0) : !1
        },
        dispose: function() {
            this.set_paused(!0);
            this._complete.set__(!0)
        },
        setVolume: function(a) {
            null == this._gainNode && (this._gainNode = T.createGain(), this.insertNode(this._gainNode));
            this._gainNode.gain.value = a
        },
        insertNode: function(a) {
            0 <= this._pausedAt || (this._sourceNode.disconnect(), this._sourceNode.connect(a));
            a.connect(this._head);
            this._head = a
        },
        playAudio: function() {
            var a = this;
            this._sourceNode.connect(this._head);
            this._startedAt = T.ctx.currentTime;
            this._pausedAt = -1;
            this._tickableAdded || (qb.instance.mainLoop.addTickable(this), this._tickableAdded = !0, this._hideBinding = o.hidden.get_changed().connect(function(b) {
                b ?
                    (a._wasPaused = 0 <= a._pausedAt, a.set_paused(!0)) : a.set_paused(a._wasPaused)
            }))
        },
        __class__: mc
    };
    var he = function(a) {
        this._quads = this._maxQuads = this._dataOffset = this._backbufferWidth = this._backbufferHeight = 0;
        this._pendingSetScissor = !1;
        this._lastBlendMode = this._lastRenderTarget = this._lastShader = this._lastTexture = this._lastScissor = this._currentBlendMode = this._currentShader = this._currentTexture = this._currentRenderTarget = null;
        this._gl = a;
        a.clearColor(0, 0, 0, 0);
        a.enable(3042);
        a.pixelStorei(37441, 1);
        this._vertexBuffer =
            a.createBuffer();
        a.bindBuffer(34962, this._vertexBuffer);
        this._quadIndexBuffer = a.createBuffer();
        a.bindBuffer(34963, this._quadIndexBuffer);
        this._drawTextureShader = new Sc(a);
        this._drawPatternShader = new Tc(a);
        this._fillRectShader = new Uc(a);
        this.resize(16)
    };
    g["flambe.platform.html.WebGLBatcher"] = he;
    he.__name__ = ["flambe", "platform", "html", "WebGLBatcher"];
    he.prototype = {
        resizeBackbuffer: function(a, b) {
            this._gl.viewport(0, 0, a, b);
            this._backbufferWidth = a;
            this._backbufferHeight = b
        },
        willRender: function() {},
        didRender: function() {
            this.flush()
        },
        bindTexture: function(a) {
            this.flush();
            this._currentTexture = this._lastTexture = null;
            this._gl.bindTexture(3553, a)
        },
        deleteTexture: function(a) {
            null != this._lastTexture && this._lastTexture.root == a && (this.flush(), this._currentTexture = this._lastTexture = null);
            this._gl.deleteTexture(a.nativeTexture)
        },
        deleteFramebuffer: function(a) {
            a == this._lastRenderTarget && (this.flush(), this._currentRenderTarget = this._lastRenderTarget = null);
            this._gl.deleteFramebuffer(a.framebuffer)
        },
        prepareDrawTexture: function(a, b, c, e) {
            e != this._lastTexture &&
                (this.flush(), this._lastTexture = e);
            return this.prepareQuad(5, a, b, c, this._drawTextureShader)
        },
        prepareDrawPattern: function(a, b, c, e) {
            e != this._lastTexture && (this.flush(), this._lastTexture = e);
            return this.prepareQuad(5, a, b, c, this._drawPatternShader)
        },
        prepareFillRect: function(a, b, c) {
            return this.prepareQuad(6, a, b, c, this._fillRectShader)
        },
        prepareQuad: function(a, b, c, e, d) {
            b != this._lastRenderTarget && (this.flush(), this._lastRenderTarget = b);
            c != this._lastBlendMode && (this.flush(), this._lastBlendMode = c);
            d != this._lastShader &&
                (this.flush(), this._lastShader = d);
            if (null != e || null != this._lastScissor)
                if (null == e || null == this._lastScissor || !this._lastScissor.equals(e)) this.flush(), this._lastScissor = null != e ? e.clone(this._lastScissor) : null, this._pendingSetScissor = !0;
            this._quads >= this._maxQuads && this.resize(2 * this._maxQuads);
            ++this._quads;
            b = this._dataOffset;
            this._dataOffset += 4 * a;
            return b
        },
        flush: function() {
            if (!(1 > this._quads)) {
                this._lastRenderTarget != this._currentRenderTarget && this.bindRenderTarget(this._lastRenderTarget);
                if (this._lastBlendMode !=
                    this._currentBlendMode) {
                    switch (this._lastBlendMode[1]) {
                        case 0:
                            this._gl.blendFunc(1, 771);
                            break;
                        case 1:
                            this._gl.blendFunc(1, 1);
                            break;
                        case 2:
                            this._gl.blendFunc(774, 771);
                            break;
                        case 3:
                            this._gl.blendFunc(1, 769);
                            break;
                        case 4:
                            this._gl.blendFunc(0, 770);
                            break;
                        case 5:
                            this._gl.blendFunc(1, 0)
                    }
                    this._currentBlendMode = this._lastBlendMode
                }
                this._pendingSetScissor && (null != this._lastScissor ? (this._gl.enable(3089), this._gl.scissor(this._lastScissor.x | 0, this._lastScissor.y | 0, this._lastScissor.width | 0, this._lastScissor.height |
                    0)) : this._gl.disable(3089), this._pendingSetScissor = !1);
                this._lastTexture != this._currentTexture && (this._gl.bindTexture(3553, this._lastTexture.root.nativeTexture), this._currentTexture = this._lastTexture);
                this._lastShader != this._currentShader && (this._lastShader.useProgram(), this._lastShader.prepare(), this._currentShader = this._lastShader);
                if (this._lastShader == this._drawPatternShader) {
                    var a = this._lastTexture,
                        b = a.root;
                    this._drawPatternShader.setRegion(a.rootX / b.width, a.rootY / b.height, a._width / b.width, a._height /
                        b.height)
                }
                this._gl.bufferData(34962, this.data.subarray(0, this._dataOffset), 35040);
                this._gl.drawElements(4, 6 * this._quads, 5123, 0);
                this._dataOffset = this._quads = 0
            }
        },
        resize: function(a) {
            this.flush();
            if (!(1024 < a)) {
                this._maxQuads = a;
                this.data = new Float32Array(24 * a);
                this._gl.bufferData(34962, 4 * this.data.length, 35040);
                for (var b = new Uint16Array(6 * a), c = 0; c < a;) {
                    var e = c++;
                    b[6 * e] = 4 * e;
                    b[6 * e + 1] = 4 * e + 1;
                    b[6 * e + 2] = 4 * e + 2;
                    b[6 * e + 3] = 4 * e + 2;
                    b[6 * e + 4] = 4 * e + 3;
                    b[6 * e + 5] = 4 * e
                }
                this._gl.bufferData(34963, b, 35044)
            }
        },
        bindRenderTarget: function(a) {
            null !=
                a ? (this._gl.bindFramebuffer(36160, a.framebuffer), this._gl.viewport(0, 0, a.width, a.height)) : (this._gl.bindFramebuffer(36160, null), this._gl.viewport(0, 0, this._backbufferWidth, this._backbufferHeight));
            this._lastRenderTarget = this._currentRenderTarget = a
        },
        __class__: he
    };
    var ab = function(a, b) {
        this._inverseProjection = this._stateList = null;
        null == ab._scratchQuadArray && (ab._scratchQuadArray = new Float32Array(8));
        this._batcher = a;
        this._renderTarget = b
    };
    g["flambe.platform.html.WebGLGraphics"] = ab;
    ab.__name__ = ["flambe",
        "platform", "html", "WebGLGraphics"
    ];
    ab.__interfaces__ = [jc];
    ab.prototype = {
        save: function() {
            var a = this._stateList,
                b = this._stateList.next;
            null == b && (b = new Vc, b.prev = a, a.next = b);
            a.matrix.clone(b.matrix);
            b.alpha = a.alpha;
            b.blendMode = a.blendMode;
            b.scissor = null != a.scissor ? a.scissor.clone(b.scissor) : null;
            this._stateList = b
        },
        transform: function(a, b, c, e, d, j) {
            var f = this._stateList;
            ab._scratchMatrix.set(a, b, c, e, d, j);
            Xa.multiply(f.matrix, ab._scratchMatrix, f.matrix)
        },
        restore: function() {
            this._stateList = this._stateList.prev
        },
        drawTexture: function(a, b, c) {
            this.drawSubTexture(a, b, c, 0, 0, a.get_width(), a.get_height())
        },
        drawSubTexture: function(a, b, c, e, d, j, f) {
            var g = this._stateList,
                w = a.root,
                b = this.transformQuad(b, c, j, f),
                c = w.width,
                w = w.height,
                e = (a.rootX + e) / c,
                d = (a.rootY + d) / w,
                j = e + j / c,
                f = d + f / w,
                c = g.alpha,
                a = this._batcher.prepareDrawTexture(this._renderTarget, g.blendMode, g.scissor, a),
                g = this._batcher.data;
            g[a] = b[0];
            g[++a] = b[1];
            g[++a] = e;
            g[++a] = d;
            g[++a] = c;
            g[++a] = b[2];
            g[++a] = b[3];
            g[++a] = j;
            g[++a] = d;
            g[++a] = c;
            g[++a] = b[4];
            g[++a] = b[5];
            g[++a] = j;
            g[++a] = f;
            g[++a] = c;
            g[++a] = b[6];
            g[++a] = b[7];
            g[++a] = e;
            g[++a] = f;
            g[++a] = c
        },
        drawPattern: function(a, b, c, e, d) {
            var j = this._stateList,
                f = a.root,
                b = this.transformQuad(b, c, e, d),
                e = e / f.width,
                d = d / f.height,
                f = j.alpha,
                a = this._batcher.prepareDrawPattern(this._renderTarget, j.blendMode, j.scissor, a),
                j = this._batcher.data;
            j[a] = b[0];
            j[++a] = b[1];
            j[++a] = 0;
            j[++a] = 0;
            j[++a] = f;
            j[++a] = b[2];
            j[++a] = b[3];
            j[++a] = e;
            j[++a] = 0;
            j[++a] = f;
            j[++a] = b[4];
            j[++a] = b[5];
            j[++a] = e;
            j[++a] = d;
            j[++a] = f;
            j[++a] = b[6];
            j[++a] = b[7];
            j[++a] = 0;
            j[++a] = d;
            j[++a] = f
        },
        fillRect: function(a, b, c, e, d) {
            var j = this._stateList,
                b = this.transformQuad(b, c, e, d),
                c = (a & 16711680) / 16711680,
                e = (a & 65280) / 65280,
                a = (a & 255) / 255,
                d = j.alpha,
                j = this._batcher.prepareFillRect(this._renderTarget, j.blendMode, j.scissor),
                f = this._batcher.data;
            f[j] = b[0];
            f[++j] = b[1];
            f[++j] = c;
            f[++j] = e;
            f[++j] = a;
            f[++j] = d;
            f[++j] = b[2];
            f[++j] = b[3];
            f[++j] = c;
            f[++j] = e;
            f[++j] = a;
            f[++j] = d;
            f[++j] = b[4];
            f[++j] = b[5];
            f[++j] = c;
            f[++j] = e;
            f[++j] = a;
            f[++j] = d;
            f[++j] = b[6];
            f[++j] = b[7];
            f[++j] = c;
            f[++j] = e;
            f[++j] = a;
            f[++j] = d
        },
        multiplyAlpha: function(a) {
            this._stateList.alpha *=
                a
        },
        setBlendMode: function(a) {
            this._stateList.blendMode = a
        },
        applyScissor: function(a, b, c, e) {
            var d = this._stateList,
                j = ab._scratchQuadArray;
            j[0] = a;
            j[1] = b;
            j[2] = a + c;
            j[3] = b + e;
            d.matrix.transformArray(j, 4, j);
            this._inverseProjection.transformArray(j, 4, j);
            a = j[0];
            b = j[1];
            c = j[2] - a;
            e = j[3] - b;
            0 > c && (a += c, c = -c);
            0 > e && (b += e, e = -e);
            d.applyScissor(a, b, c, e)
        },
        willRender: function() {
            this._batcher.willRender()
        },
        didRender: function() {
            this._batcher.didRender()
        },
        onResize: function(a, b) {
            this._stateList = new Vc;
            var c;
            c = null != this._renderTarget ?
                -1 : 1;
            this._stateList.matrix.set(2 / a, 0, 0, -2 * c / b, -1, c);
            this._inverseProjection = new Xa;
            this._inverseProjection.set(2 / a, 0, 0, 2 / b, -1, -1);
            this._inverseProjection.invert()
        },
        transformQuad: function(a, b, c, e) {
            var c = a + c,
                e = b + e,
                d = ab._scratchQuadArray;
            d[0] = a;
            d[1] = b;
            d[2] = c;
            d[3] = b;
            d[4] = c;
            d[5] = e;
            d[6] = a;
            d[7] = e;
            this._stateList.matrix.transformArray(d, 8, d);
            return d
        },
        __class__: ab
    };
    var Vc = function() {
        this.scissor = this.prev = this.next = null;
        this.matrix = new Xa;
        this.alpha = 1;
        this.blendMode = V.Normal
    };
    g["flambe.platform.html._WebGLGraphics.DrawingState"] =
        Vc;
    Vc.__name__ = ["flambe", "platform", "html", "_WebGLGraphics", "DrawingState"];
    Vc.prototype = {
        applyScissor: function(a, b, c, e) {
            if (null != this.scissor) var d = va.max(this.scissor.x, a),
                j = va.max(this.scissor.y, b),
                c = va.min(this.scissor.x + this.scissor.width, a + c),
                e = va.min(this.scissor.y + this.scissor.height, b + e),
                a = d,
                b = j,
                c = c - d,
                e = e - j;
            else this.scissor = new qa;
            this.scissor.set(Math.round(a), Math.round(b), Math.round(c), Math.round(e))
        },
        __class__: Vc
    };
    var Dc = function(a, b) {
        var c = this;
        this._hasGPU = new ga(!0);
        this.gl = b;
        b.canvas.addEventListener("webglcontextlost",
            function(a) {
                a.preventDefault();
                c._hasGPU.set__(!1)
            }, !1);
        b.canvas.addEventListener("webglcontextrestore", function() {
            c.init();
            c._hasGPU.set__(!0)
        }, !1);
        a.resize.connect(t(this, this.onResize));
        this.init()
    };
    g["flambe.platform.html.WebGLRenderer"] = Dc;
    Dc.__name__ = ["flambe", "platform", "html", "WebGLRenderer"];
    Dc.__interfaces__ = [kc];
    Dc.prototype = {
        get_type: function() {
            return wa.WebGL
        },
        createTextureFromImage: function(a) {
            if (this.gl.isContextLost()) return null;
            var b = new Gb(this, a.width, a.height);
            b.uploadImageData(a);
            return b.createTexture(a.width, a.height)
        },
        getCompressedTextureFormats: function() {
            return []
        },
        createCompressedTexture: function() {
            this.gl.isContextLost();
            return null
        },
        willRender: function() {
            this.graphics.willRender()
        },
        didRender: function() {
            this.graphics.didRender()
        },
        onResize: function() {
            var a = this.gl.canvas.width,
                b = this.gl.canvas.height;
            this.batcher.resizeBackbuffer(a, b);
            this.graphics.onResize(a, b)
        },
        init: function() {
            this.batcher = new he(this.gl);
            this.graphics = new ab(this.batcher, null);
            this.onResize()
        },
        __class__: Dc
    };
    var Wc = function(a, b, c) {
        fb.call(this, a, b, c)
    };
    g["flambe.platform.html.WebGLTexture"] = Wc;
    Wc.__name__ = ["flambe", "platform", "html", "WebGLTexture"];
    Wc.__super__ = fb;
    Wc.prototype = x(fb.prototype, {
        __class__: Wc
    });
    var Gb = function(a, b, c) {
        this.framebuffer = this._graphics = null;
        ha.call(this);
        this._renderer = a;
        this.width = va.max(2, ee.nextPowerOfTwo(b));
        this.height = va.max(2, ee.nextPowerOfTwo(c));
        b = a.gl;
        this.nativeTexture = b.createTexture();
        a.batcher.bindTexture(this.nativeTexture);
        b.texParameteri(3553, 10242, 33071);
        b.texParameteri(3553,
            10243, 33071);
        b.texParameteri(3553, 10240, 9729);
        b.texParameteri(3553, 10241, 9729)
    };
    g["flambe.platform.html.WebGLTextureRoot"] = Gb;
    Gb.__name__ = ["flambe", "platform", "html", "WebGLTextureRoot"];
    Gb.__interfaces__ = [Mc];
    Gb.drawBorder = function(a, b, c) {
        var e = a.getContext("2d");
        e.drawImage(a, b - 1, 0, 1, c, b, 0, 1, c);
        e.drawImage(a, 0, c - 1, b, 1, 0, c, b, 1)
    };
    Gb.__super__ = ha;
    Gb.prototype = x(ha.prototype, {
        createTexture: function(a, b) {
            return new Wc(this, a, b)
        },
        uploadImageData: function(a) {
            if (this.width != a.width || this.height != a.height) {
                var b =
                    I.createEmptyCanvas(this.width, this.height);
                b.getContext("2d").drawImage(a, 0, 0);
                Gb.drawBorder(b, a.width, a.height);
                a = b
            }
            this._renderer.batcher.bindTexture(this.nativeTexture);
            this._renderer.gl.texImage2D(3553, 0, 6408, 6408, 5121, a)
        },
        onDisposed: function() {
            var a = this._renderer.batcher;
            a.deleteTexture(this);
            null != this.framebuffer && a.deleteFramebuffer(this);
            this._graphics = this.framebuffer = this.nativeTexture = null
        },
        __class__: Gb
    });
    var Pa = function(a, b, c) {
        c = "#ifdef GL_ES\nprecision mediump float;\n#endif\n" + c;
        this._gl = a;
        this._program = a.createProgram();
        a.attachShader(this._program, Pa.createShader(a, 35633, b));
        a.attachShader(this._program, Pa.createShader(a, 35632, c));
        a.linkProgram(this._program);
        a.useProgram(this._program)
    };
    g["flambe.platform.shader.ShaderGL"] = Pa;
    Pa.__name__ = ["flambe", "platform", "shader", "ShaderGL"];
    Pa.createShader = function(a, b, c) {
        b = a.createShader(b);
        a.shaderSource(b, c);
        a.compileShader(b);
        return b
    };
    Pa.prototype = {
        useProgram: function() {
            this._gl.useProgram(this._program)
        },
        prepare: function() {
            null
        },
        getAttribLocation: function(a) {
            return this._gl.getAttribLocation(this._program, a)
        },
        getUniformLocation: function(a) {
            return this._gl.getUniformLocation(this._program, a)
        },
        __class__: Pa
    };
    var Tc = function(a) {
        Pa.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}", "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nuniform mediump vec4 u_region;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, u_region.xy + mod(v_uv, u_region.zw)) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.u_region = this.getUniformLocation("u_region");
        this.setTexture(0)
    };
    g["flambe.platform.shader.DrawPatternGL"] = Tc;
    Tc.__name__ = ["flambe", "platform", "shader", "DrawPatternGL"];
    Tc.__super__ = Pa;
    Tc.prototype = x(Pa.prototype, {
        setTexture: function(a) {
            this._gl.uniform1i(this.u_texture, a)
        },
        setRegion: function(a, b, c, e) {
            this._gl.uniform4f(this.u_region,
                a, b, c, e)
        },
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_uv);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
            this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
        },
        __class__: Tc
    });
    var Sc = function(a) {
        Pa.call(this, a, "attribute highp vec2 a_pos;\nattribute mediump vec2 a_uv;\nattribute lowp float a_alpha;\nvarying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nvoid main (void) {\nv_uv = a_uv;\nv_alpha = a_alpha;\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying mediump vec2 v_uv;\nvarying lowp float v_alpha;\nuniform lowp sampler2D u_texture;\nvoid main (void) {\ngl_FragColor = texture2D(u_texture, v_uv) * v_alpha;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_uv = this.getAttribLocation("a_uv");
        this.a_alpha = this.getAttribLocation("a_alpha");
        this.u_texture = this.getUniformLocation("u_texture");
        this.setTexture(0)
    };
    g["flambe.platform.shader.DrawTextureGL"] = Sc;
    Sc.__name__ = ["flambe", "platform", "shader", "DrawTextureGL"];
    Sc.__super__ = Pa;
    Sc.prototype =
        x(Pa.prototype, {
            setTexture: function(a) {
                this._gl.uniform1i(this.u_texture, a)
            },
            prepare: function() {
                this._gl.enableVertexAttribArray(this.a_pos);
                this._gl.enableVertexAttribArray(this.a_uv);
                this._gl.enableVertexAttribArray(this.a_alpha);
                this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 20, 0);
                this._gl.vertexAttribPointer(this.a_uv, 2, 5126, !1, 20, 8);
                this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 20, 16)
            },
            __class__: Sc
        });
    var Uc = function(a) {
        Pa.call(this, a, "attribute highp vec2 a_pos;\nattribute lowp vec3 a_rgb;\nattribute lowp float a_alpha;\nvarying lowp vec4 v_color;\nvoid main (void) {\nv_color = vec4(a_rgb*a_alpha, a_alpha);\ngl_Position = vec4(a_pos, 0, 1);\n}",
            "varying lowp vec4 v_color;\nvoid main (void) {\ngl_FragColor = v_color;\n}");
        this.a_pos = this.getAttribLocation("a_pos");
        this.a_rgb = this.getAttribLocation("a_rgb");
        this.a_alpha = this.getAttribLocation("a_alpha")
    };
    g["flambe.platform.shader.FillRectGL"] = Uc;
    Uc.__name__ = ["flambe", "platform", "shader", "FillRectGL"];
    Uc.__super__ = Pa;
    Uc.prototype = x(Pa.prototype, {
        prepare: function() {
            this._gl.enableVertexAttribArray(this.a_pos);
            this._gl.enableVertexAttribArray(this.a_rgb);
            this._gl.enableVertexAttribArray(this.a_alpha);
            this._gl.vertexAttribPointer(this.a_pos, 2, 5126, !1, 24, 0);
            this._gl.vertexAttribPointer(this.a_rgb, 3, 5126, !1, 24, 8);
            this._gl.vertexAttribPointer(this.a_alpha, 1, 5126, !1, 24, 20)
        },
        __class__: Uc
    });
    var Xc = function() {
        this._width = this._height = -1;
        this._transitor = null;
        k.call(this);
        this.scenes = [];
        this.occludedScenes = [];
        this._root = new p
    };
    g["flambe.scene.Director"] = Xc;
    Xc.__name__ = ["flambe", "scene", "Director"];
    Xc.__super__ = k;
    Xc.prototype = x(k.prototype, {
        get_name: function() {
            return "Director_13"
        },
        setSize: function(a, b) {
            this._width =
                a;
            this._height = b;
            return this
        },
        pushScene: function(a, b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            null != e ? this.playTransition(e, a, b, function() {
                c.hide(e)
            }) : (this.add(a), this.invalidateVisibility())
        },
        popScene: function(a) {
            var b = this;
            this.completeTransition();
            var c = this.get_topScene();
            if (null != c) {
                this.scenes.pop();
                var e = this.get_topScene();
                null != e ? this.playTransition(c, e, a, function() {
                    b.hideAndDispose(c)
                }) : (this.hideAndDispose(c), this.invalidateVisibility())
            }
        },
        unwindToScene: function(a,
            b) {
            var c = this;
            this.completeTransition();
            var e = this.get_topScene();
            if (null != e) {
                if (e != a) {
                    for (this.scenes.pop(); 0 < this.scenes.length && this.scenes[this.scenes.length - 1] != a;) this.scenes.pop().dispose();
                    this.playTransition(e, a, b, function() {
                        c.hideAndDispose(e)
                    })
                }
            } else this.pushScene(a, b)
        },
        onAdded: function() {
            this.owner.addChild(this._root)
        },
        onRemoved: function() {
            this.completeTransition();
            for (var a = 0, b = this.scenes; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
            this.scenes = [];
            this.occludedScenes = [];
            this._root.dispose()
        },
        onUpdate: function(a) {
            null != this._transitor && this._transitor.update(a) && this.completeTransition()
        },
        get_topScene: function() {
            var a = this.scenes.length;
            return 0 < a ? this.scenes[a - 1] : null
        },
        add: function(a) {
            var b = this.get_topScene();
            null != b && this._root.removeChild(b);
            B.remove(this.scenes, a);
            this.scenes.push(a);
            this._root.addChild(a)
        },
        hide: function(a) {
            a = a._compMap.Scene_15;
            null != a && a.hidden.emit()
        },
        hideAndDispose: function(a) {
            this.hide(a);
            a.dispose()
        },
        show: function(a) {
            a = a._compMap.Scene_15;
            null != a && a.shown.emit()
        },
        invalidateVisibility: function() {
            for (var a = this.scenes.length; 0 < a;) {
                var b = this.scenes[--a]._compMap.Scene_15;
                if (null == b || b.opaque) break
            }
            this.occludedScenes = 0 < this.scenes.length ? this.scenes.slice(a, this.scenes.length - 1) : [];
            a = this.get_topScene();
            null != a && this.show(a)
        },
        completeTransition: function() {
            null != this._transitor && (this._transitor.complete(), this._transitor = null, this.invalidateVisibility())
        },
        playTransition: function(a, b, c, e) {
            this.completeTransition();
            this.add(b);
            null != c ? (this.occludedScenes.push(a),
                this._transitor = new ie(a, b, c, e), this._transitor.init(this)) : (e(), this.invalidateVisibility())
        },
        __class__: Xc
    });
    var ie = function(a, b, c, e) {
        this._from = a;
        this._to = b;
        this._transition = c;
        this._onComplete = e
    };
    g["flambe.scene._Director.Transitor"] = ie;
    ie.__name__ = ["flambe", "scene", "_Director", "Transitor"];
    ie.prototype = {
        init: function(a) {
            this._transition.init(a, this._from, this._to)
        },
        update: function(a) {
            return this._transition.update(a)
        },
        complete: function() {
            this._transition.complete();
            this._onComplete()
        },
        __class__: ie
    };
    var nc = function() {};
    g["flambe.scene.Transition"] = nc;
    nc.__name__ = ["flambe", "scene", "Transition"];
    nc.prototype = {
        init: function(a, b, c) {
            this._director = a;
            this._from = b;
            this._to = c
        },
        update: function() {
            return !0
        },
        complete: function() {},
        __class__: nc
    };
    var sb = function(a, b) {
        this._duration = a;
        this._ease = null != b ? b : y.linear
    };
    g["flambe.scene.TweenTransition"] = sb;
    sb.__name__ = ["flambe", "scene", "TweenTransition"];
    sb.__super__ = nc;
    sb.prototype = x(nc.prototype, {
        init: function(a, b, c) {
            nc.prototype.init.call(this, a, b, c);
            this._elapsed =
                0
        },
        update: function(a) {
            this._elapsed += a;
            return this._elapsed >= this._duration
        },
        interp: function(a, b) {
            return a + (b - a) * this._ease(this._elapsed / this._duration)
        },
        __class__: sb
    });
    var Yc = function(a, b) {
        sb.call(this, a, b)
    };
    g["flambe.scene.FadeTransition"] = Yc;
    Yc.__name__ = ["flambe", "scene", "FadeTransition"];
    Yc.__super__ = sb;
    Yc.prototype = x(sb.prototype, {
        init: function(a, b, c) {
            sb.prototype.init.call(this, a, b, c);
            a = this._to._compMap.Sprite_12;
            null == a && this._to.add(a = new u);
            a.alpha.set__(0)
        },
        update: function(a) {
            a = sb.prototype.update.call(this,
                a);
            this._to._compMap.Sprite_12.alpha.set__(this.interp(0, 1));
            return a
        },
        complete: function() {
            this._to._compMap.Sprite_12.alpha.set__(1)
        },
        __class__: Yc
    });
    var je = function() {};
    g["flambe.scene.Scene"] = je;
    je.__name__ = ["flambe", "scene", "Scene"];
    je.__super__ = k;
    je.prototype = x(k.prototype, {
        get_name: function() {
            return "Scene_15"
        },
        __class__: je
    });
    var tb = function() {};
    g["flambe.script.Action"] = tb;
    tb.__name__ = ["flambe", "script", "Action"];
    tb.prototype = {
        __class__: tb
    };
    var bb = function(a, b, c, e) {
        this._value = a;
        this._by = b;
        this._seconds =
            c;
        this._easing = e
    };
    g["flambe.script.AnimateBy"] = bb;
    bb.__name__ = ["flambe", "script", "AnimateBy"];
    bb.__interfaces__ = [tb];
    bb.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new Nb(this._value._value, this._value._value + this._by, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: bb
    };
    var ub = function(a, b, c, e) {
        this._value =
            a;
        this._to = b;
        this._seconds = c;
        this._easing = e
    };
    g["flambe.script.AnimateTo"] = ub;
    ub.__name__ = ["flambe", "script", "AnimateTo"];
    ub.__interfaces__ = [tb];
    ub.prototype = {
        update: function(a) {
            null == this._tween && (this._tween = new Nb(this._value._value, this._to, this._seconds, this._easing), this._value.set_behavior(this._tween), this._value.update(a));
            if (this._value._behavior != this._tween) {
                var b = this._tween.elapsed - this._seconds;
                this._tween = null;
                return 0 < b ? Math.max(0, a - b) : 0
            }
            return -1
        },
        __class__: ub
    };
    var oc = function(a) {
        this._fn =
            a
    };
    g["flambe.script.CallFunction"] = oc;
    oc.__name__ = ["flambe", "script", "CallFunction"];
    oc.__interfaces__ = [tb];
    oc.prototype = {
        update: function() {
            this._fn();
            return 0
        },
        __class__: oc
    };
    var pc = function(a) {
        this._completedActions = [];
        this._runningActions = null != a ? a.slice() : []
    };
    g["flambe.script.Parallel"] = pc;
    pc.__name__ = ["flambe", "script", "Parallel"];
    pc.__interfaces__ = [tb];
    pc.prototype = {
        update: function(a, b) {
            for (var c = !0, e = 0, d = 0, j = this._runningActions.length; d < j;) {
                var f = d++,
                    g = this._runningActions[f];
                if (null != g) {
                    var w =
                        g.update(a, b);
                    0 <= w ? (this._runningActions[f] = null, this._completedActions.push(g), w > e && (e = w)) : c = !1
                }
            }
            return c ? (this._runningActions = this._completedActions, this._completedActions = [], e) : -1
        },
        __class__: pc
    };
    var Zc = function(a, b) {
        null == b && (b = -1);
        this._action = a;
        this._remaining = this._count = b
    };
    g["flambe.script.Repeat"] = Zc;
    Zc.__name__ = ["flambe", "script", "Repeat"];
    Zc.__interfaces__ = [tb];
    Zc.prototype = {
        update: function(a, b) {
            if (0 == this._count) return 0;
            var c = this._action.update(a, b);
            return 0 < this._count && 0 <= c && 0 == --this._remaining ?
                (this._remaining = this._count, c) : -1
        },
        __class__: Zc
    };
    var Qb = function() {
        k.call(this);
        this.stopAll()
    };
    g["flambe.script.Script"] = Qb;
    Qb.__name__ = ["flambe", "script", "Script"];
    Qb.__super__ = k;
    Qb.prototype = x(k.prototype, {
        get_name: function() {
            return "Script_11"
        },
        run: function(a) {
            a = new $c(a);
            this._handles.push(a);
            return a
        },
        stopAll: function() {
            this._handles = []
        },
        onUpdate: function(a) {
            for (var b = 0; b < this._handles.length;) {
                var c = this._handles[b];
                c.removed || 0 <= c.action.update(a, this.owner) ? this._handles.splice(b, 1) : ++b
            }
        },
        __class__: Qb
    });
    var $c = function(a) {
        this.removed = !1;
        this.action = a
    };
    g["flambe.script._Script.Handle"] = $c;
    $c.__name__ = ["flambe", "script", "_Script", "Handle"];
    $c.__interfaces__ = [Za];
    $c.prototype = {
        dispose: function() {
            this.removed = !0;
            this.action = null
        },
        __class__: $c
    };
    var vb = function(a) {
        this._idx = 0;
        this._runningActions = null != a ? a.slice() : []
    };
    g["flambe.script.Sequence"] = vb;
    vb.__name__ = ["flambe", "script", "Sequence"];
    vb.__interfaces__ = [tb];
    vb.prototype = {
        update: function(a, b) {
            for (var c = 0;;) {
                var e = this._runningActions[this._idx];
                if (null != e)
                    if (e = e.update(a - c, b), 0 <= e) c += e;
                    else return -1;
                ++this._idx;
                if (this._idx >= this._runningActions.length) {
                    this._idx = 0;
                    break
                } else if (c > a) return -1
            }
            return c
        },
        __class__: vb
    };
    var wa = g["flambe.subsystem.RendererType"] = {
        __ename__: ["flambe", "subsystem", "RendererType"],
        __constructs__: ["Stage3D", "WebGL", "Canvas"]
    };
    wa.Stage3D = ["Stage3D", 0];
    wa.Stage3D.toString = h;
    wa.Stage3D.__enum__ = wa;
    wa.WebGL = ["WebGL", 1];
    wa.WebGL.toString = h;
    wa.WebGL.__enum__ = wa;
    wa.Canvas = ["Canvas", 2];
    wa.Canvas.toString = h;
    wa.Canvas.__enum__ =
        wa;
    wa.__empty_constructs__ = [wa.Stage3D, wa.WebGL, wa.Canvas];
    var cc = function() {};
    g["flambe.util.Assert"] = cc;
    cc.__name__ = ["flambe", "util", "Assert"];
    cc.that = function() {};
    var Td = function() {};
    g["flambe.util.BitSets"] = Td;
    Td.__name__ = ["flambe", "util", "BitSets"];
    Td.set = function(a, b, c) {
        return c ? a | b : a & ~b
    };
    var ke = function(a) {
        this._capacity = 2147483647;
        this._allocator = a;
        this._freeObjects = []
    };
    g["flambe.util.Pool"] = ke;
    ke.__name__ = ["flambe", "util", "Pool"];
    ke.prototype = {
        take: function() {
            return 0 < this._freeObjects.length ?
                this._freeObjects.pop() : this._allocator()
        },
        put: function(a) {
            this._freeObjects.length < this._capacity && this._freeObjects.push(a)
        },
        __class__: ke
    };
    var ec = function() {
        this.success = new W;
        this.error = new W;
        this.progressChanged = new rb;
        this.hasResult = !1;
        this._total = this._progress = 0
    };
    g["flambe.util.Promise"] = ec;
    ec.__name__ = ["flambe", "util", "Promise"];
    ec.prototype = {
        set_result: function(a) {
            if (this.hasResult) throw "Promise result already assigned";
            this._result = a;
            this.hasResult = !0;
            this.success.emit(a);
            return a
        },
        get: function(a) {
            return this.hasResult ?
                (a(this._result), null) : this.success.connect(a).once()
        },
        set_progress: function(a) {
            this._progress != a && (this._progress = a, this.progressChanged.emit());
            return a
        },
        set_total: function(a) {
            this._total != a && (this._total = a, this.progressChanged.emit());
            return a
        },
        __class__: ec
    };
    var rb = function(a) {
        oa.call(this, a)
    };
    g["flambe.util.Signal0"] = rb;
    rb.__name__ = ["flambe", "util", "Signal0"];
    rb.__super__ = oa;
    rb.prototype = x(oa.prototype, {
        connect: function(a, b) {
            null == b && (b = !1);
            return this.connectImpl(a, b)
        },
        emit: function() {
            var a =
                this;
            this._head == oa.DISPATCHING_SENTINEL ? this.defer(function() {
                a.emitImpl()
            }) : this.emitImpl()
        },
        emitImpl: function() {
            for (var a = this.willEmit(), b = a; null != b;) b._listener(), b.stayInList || b.dispose(), b = b._next;
            this.didEmit(a)
        },
        __class__: rb
    });
    var Qd = function(a) {
        this.next = null;
        this.fn = a
    };
    g["flambe.util._SignalBase.Task"] = Qd;
    Qd.__name__ = ["flambe", "util", "_SignalBase", "Task"];
    Qd.prototype = {
        __class__: Qd
    };
    var Da = function() {};
    g["flambe.util.Strings"] = Da;
    Da.__name__ = ["flambe", "util", "Strings"];
    Da.getFileExtension =
        function(a) {
            var b = a.lastIndexOf(".");
            return 0 < b ? B.substr(a, b + 1, null) : null
        };
    Da.removeFileExtension = function(a) {
        var b = a.lastIndexOf(".");
        return 0 < b ? B.substr(a, 0, b) : a
    };
    Da.getUrlExtension = function(a) {
        var b = a.lastIndexOf("?");
        0 <= b && (a = B.substr(a, 0, b));
        b = a.lastIndexOf("/");
        0 <= b && (a = B.substr(a, b + 1, null));
        return Da.getFileExtension(a)
    };
    Da.joinPath = function(a, b) {
        0 < a.length && 47 != a.charCodeAt(a.length - 1) && (a += "/");
        return a + b
    };
    Da.withFields = function(a, b) {
        var c = b.length;
        if (0 < c) {
            for (var a = 0 < a.length ? a + " [" : a + "[",
                    e = 0; e < c;) {
                0 < e && (a += ", ");
                var d = b[e],
                    f = b[e + 1];
                if (n.is(f, Error)) {
                    var yb = f.stack;
                    null != yb && (f = yb)
                }
                a += d + "=" + n.string(f);
                e += 2
            }
            a += "]"
        }
        return a
    };
    var xa = function() {
        this.myAnimations = new R;
        k.call(this)
    };
    g["game.Animator"] = xa;
    xa.__name__ = ["game", "Animator"];
    xa.__super__ = k;
    xa.prototype = x(k.prototype, {
        get_name: function() {
            return "Animator_10"
        },
        Play: function(a, b, c) {
            this.myAnimations.exists(a) || this.myAnimations.set(a, []);
            var e = this.myAnimations.get(a),
                b = [new le(b, c)];
            this.myAnimations.set(a, b);
            for (a = 0; a < e.length;) b =
                e[a], ++a, b.myAnimation.Cancel(), null != b.myCb && b.myCb();
            return this
        },
        Stop: function(a) {
            if (this.myAnimations.exists(a)) {
                for (var b = this.myAnimations.get(a), c = 0; c < b.length;) {
                    var e = b[c];
                    ++c;
                    e.myAnimation.Cancel();
                    null != e.myCb && e.myCb()
                }
                this.myAnimations.remove(a)
            }
        },
        IsPlaying: function(a) {
            a = this.myAnimations.get(a);
            return null != a && 0 < a.length
        },
        onUpdate: function(a) {
            for (var b = this.myAnimations.iterator(); b.hasNext();) {
                var c = b.next();
                0 != c.length && c[0].myAnimation.Update(a) && (c = c.shift().myCb, null != c && c())
            }
        },
        __class__: xa
    });
    var Rb = function() {};
    g["game.Collider"] = Rb;
    Rb.__name__ = ["game", "Collider"];
    var nb = function() {};
    g["game.Animation"] = nb;
    nb.__name__ = ["game", "Animation"];
    nb.prototype = {
        __class__: nb
    };
    var ad = function(a, b, c, e, d) {
        this.myIsCancelled = !1;
        this.mySprite = a;
        this.myYVel = b;
        this.myXVel = c;
        this.myYAcc = e;
        this.myFloorLevel = d
    };
    g["game.GravityAnimation"] = ad;
    ad.__name__ = ["game", "GravityAnimation"];
    ad.__interfaces__ = [nb];
    ad.prototype = {
        Update: function(a) {
            if (this.myIsCancelled || this.mySprite.y._value >= this.myFloorLevel) return !0;
            var b = this.mySprite.getNaturalWidth() / 2;
            0 > this.myXVel && this.mySprite.x._value < Rb.LEFT_WALL_POS + b && (this.myXVel = -this.myXVel);
            0 < this.myXVel && this.mySprite.x._value > Rb.RIGHT_WALL_POS - b && (this.myXVel = -this.myXVel);
            0 > this.myYVel && this.mySprite.y._value < 65 + b && (this.myYVel = -this.myYVel);
            b = this.mySprite.y;
            b.set__(b._value + this.myYVel * a);
            b = this.mySprite.x;
            b.set__(b._value + this.myXVel * a);
            this.myYVel += this.myYAcc * a;
            return !1
        },
        Cancel: function() {
            this.myIsCancelled = !0
        },
        Restart: function() {},
        __class__: ad
    };
    var la =
        function(a) {
            this.myAnimations = a
        };
    g["game.AnimationGroup"] = la;
    la.__name__ = ["game", "AnimationGroup"];
    la.__interfaces__ = [nb];
    la.prototype = {
        Update: function(a) {
            for (var b = !0, c = 0, e = this.myAnimations; c < e.length;) {
                var d = e[c];
                ++c;
                d.Update(a) || (b = !1)
            }
            return b
        },
        Restart: function() {
            for (var a = 0, b = this.myAnimations; a < b.length;) {
                var c = b[a];
                ++a;
                c.Restart()
            }
        },
        Cancel: function() {
            for (var a = 0, b = this.myAnimations; a < b.length;) {
                var c = b[a];
                ++a;
                c.Cancel()
            }
        },
        __class__: la
    };
    var Ua = function(a) {
        this.myIgnoreCancel = !1;
        this.myCurrent =
            0;
        this.myAnimations = a
    };
    g["game.AnimationSequence"] = Ua;
    Ua.__name__ = ["game", "AnimationSequence"];
    Ua.__interfaces__ = [nb];
    Ua.prototype = {
        Update: function(a) {
            if (this.myCurrent == this.myAnimations.length) return !0;
            this.myAnimations[this.myCurrent].Update(a) && (this.myCurrent += 1);
            return this.myCurrent == this.myAnimations.length
        },
        Restart: function() {
            for (var a = 0, b = this.myAnimations; a < b.length;) {
                var c = b[a];
                ++a;
                c.Restart()
            }
            this.myCurrent = 0
        },
        Cancel: function() {
            if (!this.myIgnoreCancel)
                for (; this.myCurrent < this.myAnimations.length;) this.myAnimations[this.myCurrent].Cancel(),
                    this.myCurrent += 1
        },
        SetIgnoreCancel: function(a) {
            this.myIgnoreCancel = a;
            return this
        },
        __class__: Ua
    };
    var Hb = function(a) {
        this.myAnimation = a
    };
    g["game.AnimationLoop"] = Hb;
    Hb.__name__ = ["game", "AnimationLoop"];
    Hb.__interfaces__ = [nb];
    Hb.prototype = {
        Update: function(a) {
            this.myAnimation.Update(a) && this.myAnimation.Restart();
            return !1
        },
        Cancel: function() {
            this.myAnimation.Cancel()
        },
        Restart: function() {
            this.myAnimation.Restart()
        },
        __class__: Hb
    };
    var C = function(a, b, c, e) {
        this.myElapsed = 0;
        this.myVariable = a;
        this.myDuration =
            b;
        this.myFunc = c;
        this.myInitializer = e
    };
    g["game.VarAnimation"] = C;
    C.__name__ = ["game", "VarAnimation"];
    C.__interfaces__ = [nb];
    C.Wobble = function(a, b, c, e, d) {
        return a + c * Math.sin(b + d * e) * (1 - d) * (1 - d)
    };
    C.ForwardRewind = function(a) {
        return function(b) {
            b *= 2;
            return 1 > b ? a(b) : a(2 - b)
        }
    };
    C.ExpIn = function(a, b, c) {
        return a + b * c * c
    };
    C.ExpOut = function(a, b, c) {
        return a + b * C.ExpIn(1, -1, 1 - c)
    };
    C.ExpInOut = function(a, b, c) {
        return 0.5 > c ? C.ExpIn(a, 0.5 * b, 2 * c) : C.ExpOut(a + 0.5 * b, 0.5 * b, 2 * (c - 0.5))
    };
    C.CircularIn = function(a, b, c) {
        return -b * (Math.sqrt(1 -
            c * c) - 1) + a
    };
    C.CircularOut = function(a, b, c) {
        c -= 1;
        return b * Math.sqrt(1 - c * c) + a
    };
    C.Linear = function(a, b, c) {
        return a + b * c
    };
    C.prototype = {
        Update: function(a) {
            null != this.myInitializer && (this.myFunc = this.myInitializer(), this.myInitializer = null);
            var b = !1;
            this.myElapsed += a;
            this.myElapsed >= this.myDuration && (this.myElapsed = this.myDuration, b = !0);
            this.myVariable.set__(this.myFunc(this.myElapsed / this.myDuration));
            return b
        },
        Restart: function() {
            this.myElapsed = 0
        },
        Cancel: function() {
            null != this.myInitializer && (this.myFunc = this.myInitializer(),
                this.myInitializer = null);
            this.myVariable.set__(this.myFunc(1))
        },
        __class__: C
    };
    var M = function(a, b, c, e, d) {
        null == d && (d = y.linear);
        var f = c - b;
        C.call(this, a, e, function(a) {
            return b + f * d(a)
        })
    };
    g["game.VarAnimationFromTo"] = M;
    M.__name__ = ["game", "VarAnimationFromTo"];
    M.__super__ = C;
    M.prototype = x(C.prototype, {
        __class__: M
    });
    var G = function() {};
    g["game.AnimationHelpers"] = G;
    G.__name__ = ["game", "AnimationHelpers"];
    G.CreateWobbleSpriteAnim = function(a, b, c, e, d) {
        null == d && (d = 18);
        null == e && (e = 1);
        null == c && (c = 0.2);
        null == b && (b =
            1.3);
        return new la([new C(a.scaleX, b, function(a, b, c, d, e) {
            return function(f) {
                return a(b, c, d, e, f)
            }
        }(C.Wobble, e, 0, c, d)), new C(a.scaleY, b, function(a, b, c, d, e) {
            return function(f) {
                return a(b, c, d, e, f)
            }
        }(C.Wobble, e, 0, -c, d))])
    };
    G.CreateWobbleSpriteAnimAnchored = function(a, b, c, e, d, f, yb) {
        null == yb && (yb = 18);
        null == f && (f = 1);
        null == d && (d = 0.2);
        null == e && (e = 1.3);
        b = a.anchorX._value - b;
        c = a.anchorY._value - c;
        return new la([new C(a.scaleX, e, function(a, b, c, d, e) {
            return function(f) {
                return a(b, c, d, e, f)
            }
        }(C.Wobble, f, 0, d, yb)), new C(a.scaleY,
            e,
            function(a, b, c, d, e) {
                return function(f) {
                    return a(b, c, d, e, f)
                }
            }(C.Wobble, f, 0, -d, yb)), new C(a.x, e, function(a, b, c, d, e) {
            return function(f) {
                return a(b, c, d, e, f)
            }
        }(C.Wobble, a.x._value, 0, b * d, yb)), new C(a.y, e, function(a, b, c, d, e) {
            return function(f) {
                return a(b, c, d, e, f)
            }
        }(C.Wobble, a.y._value, 0, -c * d, yb))])
    };
    G.ChangeScale = function(a, b, c) {
        return new la([new C(a.scaleX, b, function(a, b, c) {
            return function(f) {
                return a(b, c, f)
            }
        }(C.ExpIn, a.scaleX._value, c)), new C(a.scaleY, b, function(a, b, c) {
            return function(f) {
                return a(b,
                    c, f)
            }
        }(C.ExpIn, a.scaleY._value, c))])
    };
    G.ChangeScaleFromTo = function(a, b, c, e, d) {
        return new la([new C(a.scaleX, b, function(a, b, c) {
            return function(d) {
                return a(b, c, d)
            }
        }(d, c, e - c)), new C(a.scaleY, b, function(a, b, c) {
            return function(d) {
                return a(b, c, d)
            }
        }(d, c, e - c))])
    };
    G.MoveTo = function(a, b, c, e) {
        return G.MoveFromTo(a, b, a.x._value, a.y._value, c, e)
    };
    G.MoveFromTo = function(a, b, c, e, d, f) {
        return new la([new C(a.x, b, function(a, b, c) {
            return function(d) {
                return a(b, c, d)
            }
        }(C.Linear, c, d - c)), new C(a.y, b, function(a, b, c) {
            return function(d) {
                return a(b,
                    c, d)
            }
        }(C.Linear, e, f - e))])
    };
    G.MoveFromToJuicy = function(a, b, c, e, d, f) {
        var d = d - c,
            g = f - e,
            f = new kb(d, g);
        f.rotate(90);
        var s = function(a, b, c) {
                return function(d) {
                    return a(b, c, d)
                }
            }(C.ExpInOut, c, d),
            w = function(a, b, c) {
                return function(d) {
                    return a(b, c, d)
                }
            }(C.ExpInOut, e, g),
            c = 0.4 * (Math.random() - 0.5),
            h = C.ForwardRewind(function(a, b, c) {
                return function(d) {
                    return a(b, c, d)
                }
            }(C.ExpInOut, 0, c * f.x)),
            i = C.ForwardRewind(function(a, b, c) {
                return function(d) {
                    return a(b, c, d)
                }
            }(C.ExpInOut, 0, c * f.y));
        return new la([new C(a.x, b, function(a) {
            return s(a) +
                h(a)
        }), new C(a.y, b, function(a) {
            return w(a) + i(a)
        })])
    };
    G.ShakeHorizontally = function(a, b, c, e) {
        return new C(a.x, b, null, function() {
            var b = a.x._value;
            return function(a) {
                return b + c * Math.sin(2 * Math.PI * a * e)
            }
        })
    };
    G.BounceScale = function(a, b, c, e, d) {
        null == d && (d = !1);
        null == e && (e = 0.3);
        null == c && (c = 1.3);
        null == b && (b = 1);
        if (d) {
            var f = 0,
                g = 0;
            return new Ua([G.Function(function() {
                    f = a.anchorX._value;
                    g = a.anchorY._value;
                    ca.centerAnchorKeepPosition(a)
                }, !0), G.ChangeScaleFromTo(a, e / 2, b, c, C.ExpIn), G.ChangeScaleFromTo(a, e / 2, c, b, C.ExpIn),
                G.Function(function() {
                    ca.setAnchorKeepPosition(a, f, g)
                }, !0)
            ])
        }
        return new Ua([G.ChangeScaleFromTo(a, e / 2, b, c, C.ExpIn), G.ChangeScaleFromTo(a, e / 2, c, b, C.ExpIn)])
    };
    G.Delay = function(a) {
        return new bd(a)
    };
    G.Function = function(a, b) {
        null == b && (b = !1);
        return new cd(a, b)
    };
    G.FadeOut = function(a, b) {
        return new C(a.alpha, b, function(a, b, d) {
            return function(f) {
                return a(b, d, f)
            }
        }(C.CircularOut, 1, -1))
    };
    G.FadeIn = function(a, b) {
        return new C(a.alpha, b, function(a, b, d) {
            return function(f) {
                return a(b, d, f)
            }
        }(C.CircularIn, 0, 1))
    };
    var le =
        function(a, b) {
            this.myAnimation = a;
            this.myCb = b
        };
    g["game.AnimationWithCompletionCallback"] = le;
    le.__name__ = ["game", "AnimationWithCompletionCallback"];
    le.prototype = {
        __class__: le
    };
    var bd = function(a) {
        this.myRemainingSecs = this.myWaitSecs = a
    };
    g["game._Animator.Delay"] = bd;
    bd.__name__ = ["game", "_Animator", "Delay"];
    bd.__interfaces__ = [nb];
    bd.prototype = {
        Update: function(a) {
            if (0 >= this.myRemainingSecs) return !0;
            this.myRemainingSecs -= a;
            return !1
        },
        Restart: function() {
            this.myRemainingSecs = this.myWaitSecs
        },
        Cancel: function() {
            this.myRemainingSecs = -1
        },
        __class__: bd
    };
    var cd = function(a, b) {
        this.myWasCalled = !1;
        this.myFn = a;
        this.myCallOnCancel = b
    };
    g["game._Animator.CallFunction"] = cd;
    cd.__name__ = ["game", "_Animator", "CallFunction"];
    cd.__interfaces__ = [nb];
    cd.prototype = {
        Update: function() {
            this.CallOnce();
            return !0
        },
        Cancel: function() {
            this.myCallOnCancel && this.CallOnce()
        },
        Restart: function() {
            this.myWasCalled = !1
        },
        CallOnce: function() {
            this.myWasCalled || (this.myFn(), this.myWasCalled = !0)
        },
        __class__: cd
    };
    var dd = function(a) {
        this.myTextures = new R;
        this.myInnerPack = a
    };
    g["game.AtlasAssetPackExtender"] = dd;
    dd.__name__ = ["game", "AtlasAssetPackExtender"];
    dd.__interfaces__ = [ac];
    dd.prototype = {
        addAtlasEx: function(a, b) {
            for (var c = this.myInnerPack.getTexture(a), e = 0; e < b.length;) {
                var d = b[e];
                ++e;
                var f = c.subTexture(d.x, d.y, d.width, d.height);
                this.myTextures.set(d.path, f);
                f
            }
        },
        getTexture: function(a, b) {
            null == b && (b = !0);
            var c = this.myTextures.get(a);
            return null != c ? c : this.myInnerPack.getTexture(a, b)
        },
        getSound: function(a, b) {
            null == b && (b = !0);
            return this.myInnerPack.getSound(a, b)
        },
        getFile: function(a,
            b) {
            null == b && (b = !0);
            return this.myInnerPack.getFile(a, b)
        },
        dispose: function() {
            for (var a = this.myTextures.iterator(); a.hasNext();) a.next().dispose();
            this.myInnerPack.dispose()
        },
        __class__: dd
    };
    var ed = function(a, b, c, e, d) {
        k.call(this);
        this.myBoosterSelectedCb = b;
        this.myPlayerState = c;
        this.myLaserSightAlreadyEnabled = e;
        this.myMatchAnyAlreadyEnabled = d;
        this.myRoot = new p;
        this.myRoot.add(new u);
        this.myRoot._compMap.Sprite_12.scissor = new qa(0, 0, D.TargetWidth, D.TargetHeight);
        J.PopulateEnt("booster-menu", this.myRoot,
            t(this, this.ExtDataFetcher));
        a = this.myRoot._compMap.WidgetBindings_19;
        a.SetActionHandler("close", t(this, this.dispose));
        d || a.SetActionHandler("match_any", function(a, b) {
            return function() {
                return a(b)
            }
        }(t(this, this.BoosterSelected), Ga.MatchAny));
        e || a.SetActionHandler("aim", function(a, b) {
            return function() {
                return a(b)
            }
        }(t(this, this.BoosterSelected), Ga.LaserSight));
        (!i.MatchAnyBoosterEnabled() || this.myMatchAnyAlreadyEnabled) && a.GetNamedItem("booster-icon.match_any").alpha.set__(0.25);
        this.myLaserSightAlreadyEnabled &&
            a.GetNamedItem("booster-icon.aim").alpha.set__(0.25)
    };
    g["game.BoosterMenuWidget"] = ed;
    ed.__name__ = ["game", "BoosterMenuWidget"];
    ed.__super__ = k;
    ed.prototype = x(k.prototype, {
        get_name: function() {
            return "BoosterMenuWidget_23"
        },
        ExtDataFetcher: function(a) {
            var b = this.myPlayerState.AimBoosterCount().get__();
            0 < b && this.myLaserSightAlreadyEnabled && (b -= 1);
            var c = this.myPlayerState.MatchAnyBoosterCount().get__();
            0 < c && this.myMatchAnyAlreadyEnabled && (c -= 1);
            switch (a) {
                case "count.aim":
                    return "" + b;
                case "count.match_any":
                    return "" +
                        c
            }
            return "<unknown key: " + a + ">"
        },
        onAdded: function() {
            k.prototype.onAdded.call(this);
            this.owner.addChild(this.myRoot)
        },
        onRemoved: function() {
            k.prototype.onRemoved.call(this);
            this.owner.removeChild(this.myRoot)
        },
        dispose: function() {
            this.myRoot.dispose();
            k.prototype.dispose.call(this)
        },
        BoosterSelected: function(a) {
            if (a == Ga.LaserSight) {
                if (0 >= this.myPlayerState.AimBoosterCount().get__()) return
            } else if (a == Ga.MatchAny && 0 >= this.myPlayerState.MatchAnyBoosterCount().get__()) return;
            this.dispose();
            this.myBoosterSelectedCb(a)
        },
        __class__: ed
    });
    var fa = function() {
        k.call(this);
        this.myRoot = new p
    };
    g["game.Widget"] = fa;
    fa.__name__ = ["game", "Widget"];
    fa.__super__ = k;
    fa.prototype = x(k.prototype, {
        get_name: function() {
            return "Widget_5"
        },
        onAdded: function() {
            k.prototype.onAdded.call(this);
            this.owner.addChild(this.myRoot)
        },
        onRemoved: function() {
            k.prototype.onRemoved.call(this);
            this.myRoot.parent.removeChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        __class__: fa
    });
    var fd = function(a) {
        fa.call(this);
        this.myPlayerState =
            a;
        J.PopulateEnt("booster-shop", this.myRoot, t(this, this.ExtDataFetcher));
        a = this.myRoot._compMap.WidgetBindings_19;
        a.SetActionHandler("close", t(this, this.dispose));
        a.SetActionHandler("buy.aim", function(a, c) {
            return function() {
                return a(c)
            }
        }(t(this, this.OnBuyClicked), "aim"));
        a.SetActionHandler("buy.match_any", function(a, c) {
            return function() {
                return a(c)
            }
        }(t(this, this.OnBuyClicked), "match_any"));
        this.myRoot.add(new xa)
    };
    g["game.BoosterShopWidget"] = fd;
    fd.__name__ = ["game", "BoosterShopWidget"];
    fd.__super__ =
        fa;
    fd.prototype = x(fa.prototype, {
        get_name: function() {
            return "BoosterShopWidget_24"
        },
        ExtDataFetcher: function(a) {
            return "balance" == a ? "" + n.string(this.myPlayerState.Balance()) : "count.aim" == a ? "" + this.myPlayerState.AimBoosterCount().get__() : "count.match_any" == a ? "" + this.myPlayerState.MatchAnyBoosterCount().get__() : "<unknown key: " + a + ">"
        },
        OnBuyClicked: function(a) {
            var b = this.myRoot._compMap.WidgetBindings_19,
                c = Math.round(b.GetMetaF("price." + a)),
                e = Math.round(b.GetMetaF("max-count." + a)),
                d = null;
            "aim" == a ? d = this.myPlayerState.AimBoosterCount() :
                "match_any" == a ? d = this.myPlayerState.MatchAnyBoosterCount() : P.Assert(!1);
            c > this.myPlayerState.Balance().get__() ? (a = b.GetNamedItem("balance"), this.myRoot._compMap.Animator_10.Play("", G.ShakeHorizontally(a, 0.5, 4, 7))) : d._value >= e ? (a = b.GetNamedItem("count." + a), this.myRoot._compMap.Animator_10.Play("", G.ShakeHorizontally(a, 0.5, 4, 7))) : (e = b.GetNamedItem("booster-icon." + a), null != e && this.myRoot._compMap.Animator_10.Play("icon", G.BounceScale(e, 1, 1.3, 0.3, !0)), e = b.GetNamedItem("count." + a), null != e && this.myRoot._compMap.Animator_10.Play("count",
                G.BounceScale(e, 1, 1.3, 0.3, !0)), N.Play("sfx/coins", 0.6), d.set__(d._value + 1), d = this.myPlayerState.Balance(), d.set__(d._value - c), b.ReloadNamedItem("balance"), b.ReloadNamedItem("count." + a), b.ReloadNamedItem("booster-icon." + a + ".count"))
        },
        __class__: fd
    });
    var Ga = g["game.BoosterType"] = {
        __ename__: ["game", "BoosterType"],
        __constructs__: ["MatchAny", "LaserSight"]
    };
    Ga.MatchAny = ["MatchAny", 0];
    Ga.MatchAny.toString = h;
    Ga.MatchAny.__enum__ = Ga;
    Ga.LaserSight = ["LaserSight", 1];
    Ga.LaserSight.toString = h;
    Ga.LaserSight.__enum__ =
        Ga;
    Ga.__empty_constructs__ = [Ga.MatchAny, Ga.LaserSight];
    var q = g["game.BubbleType"] = {
        __ename__: ["game", "BubbleType"],
        __constructs__: "GREEN,YELLOW,RED,BLUE,PURPLE,S_ORANGE,BLACK,MATCH_ANY".split(",")
    };
    q.GREEN = ["GREEN", 0];
    q.GREEN.toString = h;
    q.GREEN.__enum__ = q;
    q.YELLOW = ["YELLOW", 1];
    q.YELLOW.toString = h;
    q.YELLOW.__enum__ = q;
    q.RED = ["RED", 2];
    q.RED.toString = h;
    q.RED.__enum__ = q;
    q.BLUE = ["BLUE", 3];
    q.BLUE.toString = h;
    q.BLUE.__enum__ = q;
    q.PURPLE = ["PURPLE", 4];
    q.PURPLE.toString = h;
    q.PURPLE.__enum__ = q;
    q.S_ORANGE = ["S_ORANGE",
        5
    ];
    q.S_ORANGE.toString = h;
    q.S_ORANGE.__enum__ = q;
    q.BLACK = ["BLACK", 6];
    q.BLACK.toString = h;
    q.BLACK.__enum__ = q;
    q.MATCH_ANY = ["MATCH_ANY", 7];
    q.MATCH_ANY.toString = h;
    q.MATCH_ANY.__enum__ = q;
    q.__empty_constructs__ = [q.GREEN, q.YELLOW, q.RED, q.BLUE, q.PURPLE, q.S_ORANGE, q.BLACK, q.MATCH_ANY];
    var U = g["game.State"] = {
        __ename__: ["game", "State"],
        __constructs__: ["Initial", "Spawning", "Falling", "FallCompleted", "Stationary"]
    };
    U.Initial = ["Initial", 0];
    U.Initial.toString = h;
    U.Initial.__enum__ = U;
    U.Spawning = ["Spawning", 1];
    U.Spawning.toString =
        h;
    U.Spawning.__enum__ = U;
    U.Falling = ["Falling", 2];
    U.Falling.toString = h;
    U.Falling.__enum__ = U;
    U.FallCompleted = ["FallCompleted", 3];
    U.FallCompleted.toString = h;
    U.FallCompleted.__enum__ = U;
    U.Stationary = ["Stationary", 4];
    U.Stationary.toString = h;
    U.Stationary.__enum__ = U;
    U.__empty_constructs__ = [U.Initial, U.Spawning, U.Falling, U.FallCompleted, U.Stationary];
    var gd = function(a, b) {
        this.myDelayedFuncDelay = -1;
        this.myAnchorPosition = null;
        this.mySpawnTimer = 0;
        this.myState = U.Initial;
        this.myDisposalEnqueued = !1;
        this.rotationSpeed =
            7;
        k.call(this);
        this.myType = a;
        this.myPack = b
    };
    g["game.BubbleLogic"] = gd;
    gd.__name__ = ["game", "BubbleLogic"];
    gd.__super__ = k;
    gd.prototype = x(k.prototype, {
        get_name: function() {
            return "BubbleLogic_2"
        },
        MakeStationary: function(a, b, c) {
            null == c && (c = !1);
            c && this.owner._compMap.Animator_10.Play("", G.CreateWobbleSpriteAnim(this.owner._compMap.Sprite_12, 1.4, 0.3));
            this.myState = U.Stationary;
            this.myAnchorPosition = a;
            this.owner._compMap.Sprite_12.setXY(a.x, a.y)
        },
        MakeFalling: function(a) {
            P.Assert(null != this.owner);
            this.myAnchorPosition =
                null;
            var b;
            this.myType == q.S_ORANGE ? (b = this.myPack.getSound("sfx/completed", !1), null != b && 0 < b.get_duration() && b.play(1), b = this.PopAnimationOrange(), this.owner.parent.addChild(this.owner), this.myEmitter = new hd(this.owner.parent), this.myEmitter.mySpawnX = this.owner._compMap.Sprite_12.x._value, this.myEmitter.mySpawnY = this.owner._compMap.Sprite_12.y._value, this.myEmitter.myVelX = 6, this.myEmitter.myVelY = -20, this.myEmitter.myTexture = this.myPack.getTexture("gfx/particle1"), this.myEmitter.mySpawnInterval = 0.1,
                this.myEmitter.myParticleTtl = 0.6, this.myEmitter.myMaxParticles = 10, this.myEmitter.Start(), this.owner.add(this.myEmitter)) : b = this.FallAnimation();
            this.owner._compMap.Animator_10.Play("", b, function(a, b) {
                return function() {
                    return a(b)
                }
            }(t(this, this.OnPopCompleted), a));
            this.myState = U.Falling
        },
        StartPopAnim: function(a, b) {
            this.myAnchorPosition = null;
            var c;
            this.myType == q.S_ORANGE ? (c = this.PopAnimationOrange(), this.owner.parent.addChild(this.owner)) : c = this.PopAnimation();
            this.myState = U.Falling;
            c = function(a, b,
                c, f) {
                return function() {
                    return a(b, c, f)
                }
            }((ya = this.owner._compMap.Animator_10, t(ya, ya.Play)), "", c, function(a, b) {
                return function() {
                    return a(b)
                }
            }(t(this, this.OnPopCompleted), b));
            0 != a ? (this.myDelayedFuncDelay = a, this.myDelayedFunc = c) : c()
        },
        AnimateShot: function(a, b) {
            for (var c = null, e = [], d = 0; d < a.length;) {
                var f = a[d];
                ++d;
                if (null == c) c = f.clone();
                else {
                    var g = (new Ma(f.x - c.x, f.y - c.y)).magnitude(),
                        g = G.MoveFromTo(this.owner._compMap.Sprite_12, g / 2300, c.x, c.y, f.x, f.y),
                        c = f.clone();
                    e.push(g)
                }
            }
            this.owner._compMap.Animator_10.Play("",
                new Ua(e), b)
        },
        PopAnimation: function() {
            return G.ChangeScale(this.owner._compMap.Sprite_12, 0.19 + 0.03 * Math.random(), 0.6)
        },
        RotationX: function(a) {
            return 350 * (1 - a * a * a * a) * Math.sin(3.5 + a * -this.rotationSpeed) + 130 * (1 - a)
        },
        RotationY: function(a) {
            return 350 * (1 - a * a * a * a) * Math.cos(3.5 + a * -this.rotationSpeed)
        },
        Smooth: function(a, b) {
            for (var c = a(Math.min(1, Math.max(0, b))), e = 1, d = 1, f = 0; 5 > f;) var g = f++,
                d = 0.75 * d,
                c = c + a(Math.min(1, Math.max(0, b - 0.04 * g))) * d,
                c = c + a(Math.min(1, Math.max(0, b + 0.04 * g))) * d,
                e = e + 2 * d;
            return c / e
        },
        Interpolate3: function(a,
            b, c, e, d, f) {
            if (f < b) return d = f / b, d *= d, a(f) * (1 - d) + c(f) * d;
            if (f < e) return c(f);
            a = (f - e) / (1 - e);
            a *= a;
            return c(f) * (1 - a) + d(f) * a
        },
        CompositeX: function(a, b) {
            var c = this;
            return this.Smooth(function(a, b, c, f, g, w) {
                return function(h) {
                    return a(b, c, f, g, w, h)
                }
            }(t(this, this.Interpolate3), function() {
                return a
            }, 0.4, function(a) {
                return 350 + c.RotationX(a)
            }, 0.85, function() {
                return 2E3
            }), b)
        },
        CompositeY: function(a, b) {
            var c = this;
            return this.Smooth(function(a, b, c, f, g, w) {
                return function(h) {
                    return a(b, c, f, g, w, h)
                }
            }(t(this, this.Interpolate3),
                function() {
                    return a
                }, 0.4,
                function(a) {
                    return 550 + c.RotationY(a)
                }, 0.85,
                function() {
                    return -170
                }), b)
        },
        PopAnimationOrange: function() {
            return new la([G.ChangeScale(this.owner._compMap.Sprite_12, 1.2, 4), new C(this.owner._compMap.Sprite_12.x, 1.2, function(a, b) {
                return function(c) {
                    return a(b, c)
                }
            }(t(this, this.CompositeX), this.owner._compMap.Sprite_12.x._value)), new C(this.owner._compMap.Sprite_12.y, 1.2, function(a, b) {
                return function(c) {
                    return a(b, c)
                }
            }(t(this, this.CompositeY), this.owner._compMap.Sprite_12.y._value))])
        },
        FallAnimation: function() {
            return new ad(this.owner._compMap.Sprite_12, -600 + -400 * Math.random(), 1200 * (Math.random() - 0.5), 3300, D.TargetHeight - 200)
        },
        OnPopCompleted: function(a) {
            this.myState = U.FallCompleted;
            this.myType != q.S_ORANGE && (0.7 > Math.random() ? this.myPack.getSound("sfx/pop").play() : this.myPack.getSound("sfx/pop2").play(0.8), this.PlayExplosionEffect(this.owner._compMap.Sprite_12.x._value, this.owner._compMap.Sprite_12.y._value));
            a()
        },
        MakeSpawning: function(a, b, c) {
            null == c && (c = -1);
            this.owner._compMap.Sprite_12.setXY(a.x,
                a.y);
            this.mySpawnTimer = 0;
            this.myState = U.Spawning;
            a = this.owner._compMap.Sprite_12;
            a.setScale(0);
            b = function(a, b, c, f) {
                return function() {
                    return a(b, c, f)
                }
            }((ya = this.owner._compMap.Animator_10, t(ya, ya.Play)), "", G.ChangeScale(a, 0.4, 1), function(a, b) {
                return function() {
                    return a(b)
                }
            }(t(this, this.SpawnCompleted), b));
            0 < c ? (this.myDelayedFuncDelay = c, this.myDelayedFunc = b) : b()
        },
        SpawnCompleted: function(a) {
            this.myState = U.Stationary;
            a()
        },
        StartCollisionAnim: function() {
            this.myType != q.BLACK && this.owner._compMap.Animator_10.Play("",
                G.CreateWobbleSpriteAnim(this.owner._compMap.Sprite_12, 1 + 0.2 * Math.random(), 0.1))
        },
        GetType: function() {
            return this.myType
        },
        onUpdate: function(a) {
            0 <= this.myDelayedFuncDelay && (this.myDelayedFuncDelay -= a, 0 >= this.myDelayedFuncDelay && this.myDelayedFunc());
            null != this.myEmitter && (a = this.owner._compMap.Sprite_12, this.myEmitter.mySpawnX = a.x._value, this.myEmitter.mySpawnY = a.y._value, this.myEmitter.mySpawnScale = a.scaleX._value, this.owner.parent.addChild(this.owner));
            this.myDisposalEnqueued && this.owner.dispose()
        },
        dispose: function() {
            null != this.myEmitter && (this.myEmitter.dispose(), this.myEmitter = null);
            k.prototype.dispose.call(this)
        },
        EnqueueDisposal: function() {
            this.myDisposalEnqueued = !0
        },
        PlayExplosionEffect: function(a, b) {
            var c = (new p).add((new z(this.myPack.getTexture("gfx/pop_circle"))).setXY(a, b).setScale(0.5).centerAnchor()).add(new Qb);
            c._compMap.Script_11.run(new vb([new pc([new ub(c._compMap.Sprite_12.scaleX, 2, 0.3, y.expoOut), new ub(c._compMap.Sprite_12.scaleY, 2, 0.3, y.expoOut), new ub(c._compMap.Sprite_12.alpha,
                0, 0.3, y.expoOut)]), new oc(function() {
                c.dispose()
            })]));
            null != this.owner && null != this.owner.parent && this.owner.parent.addChild(c)
        },
        __class__: gd
    });
    var za = function(a, b) {
        k.call(this);
        this.myPack = a;
        this.myWallCollisionCb = b
    };
    g["game.BubbleFactory"] = za;
    za.__name__ = ["game", "BubbleFactory"];
    za.RandomBubbleType = function(a) {
        var b = [q.BLUE, q.RED, q.YELLOW, q.GREEN, q.PURPLE];
        P.Assert(0 < a);
        P.Assert(a <= b.length);
        return b[n.random(a)]
    };
    za.GetTextureForType = function(a, b) {
        var c = za.myTextureCache.get(b);
        if (null != c) return c;
        b == q.GREEN ? c = a.getTexture("gfx/bubble_green") : b == q.RED ? c = a.getTexture("gfx/bubble_red") : b == q.YELLOW ? c = a.getTexture("gfx/bubble_yellow") : b == q.BLUE ? c = a.getTexture("gfx/bubble_blue") : b == q.PURPLE ? c = a.getTexture("gfx/bubble_purple") : b == q.S_ORANGE ? c = a.getTexture("gfx/orange") : b == q.BLACK ? c = a.getTexture("gfx/bubble_black") : b == q.MATCH_ANY && (c = a.getTexture("gfx/bubble_match_any"));
        P.Assert(null != c);
        za.myTextureCache.set(b, c);
        return c
    };
    za.GetImageForType = function(a, b) {
        return (new z(za.GetTextureForType(a, b))).centerAnchor()
    };
    za.__super__ = k;
    za.prototype = x(k.prototype, {
        get_name: function() {
            return "BubbleFactory_1"
        },
        Spawn: function(a) {
            return (new p).add(za.GetImageForType(this.myPack, a)).add(new gd(a, this.myPack)).add(new xa)
        },
        __class__: za
    });
    var $ = function(a, b) {
        null == b && (b = 0);
        null == a && (a = 0);
        this.myX = a;
        this.myY = b
    };
    g["game.GridCoord"] = $;
    $.__name__ = ["game", "GridCoord"];
    $.equals = function(a, b) {
        return a.myX == b.myX && a.myY == b.myY
    };
    $.prototype = {
        __class__: $
    };
    var ia = g["game.UpdateResult"] = {
        __ename__: ["game", "UpdateResult"],
        __constructs__: ["None",
            "LevelCompleted", "LevelLost"
        ]
    };
    ia.None = ["None", 0];
    ia.None.toString = h;
    ia.None.__enum__ = ia;
    ia.LevelCompleted = ["LevelCompleted", 1];
    ia.LevelCompleted.toString = h;
    ia.LevelCompleted.__enum__ = ia;
    ia.LevelLost = ["LevelLost", 2];
    ia.LevelLost.toString = h;
    ia.LevelLost.__enum__ = ia;
    ia.__empty_constructs__ = [ia.None, ia.LevelCompleted, ia.LevelLost];
    var X = function(a, b, c, e, d) {
        this.myBubbleTypes = new Nd;
        this.myAnimatingBubblesCounter = new id;
        this.myPostAnimationActions = [];
        this.myNeedsFallingBubbleCheck = !1;
        this.BubbleCollisionRadiusWhenResolving =
            39;
        this.BubbleCollisionRadius = 25;
        this.myScoreManager = c;
        this.myBubbleFactory = d;
        this.myRoot = new p;
        a.addChild(this.myRoot);
        this.myVerticalScreenShakeFunc = b;
        this.myMissHandler = e;
        this.myGrid = [];
        this.myGridWidth = 9;
        this.myGridHeight = 13;
        this.myGridGameOverLevel = 11;
        a = 0;
        for (b = this.myGridWidth * this.myGridHeight; a < b;) a++, this.myGrid.push(null)
    };
    g["game.BubbleManager"] = X;
    X.__name__ = ["game", "BubbleManager"];
    X.IsExcluded = function(a, b) {
        return Sa.exists(a, function(a) {
            return $.equals(a, b)
        })
    };
    X.prototype = {
        IsNeighbour: function(a,
            b) {
            for (var c = this.GetNeighbourCoords(a), e = 0; e < c.length;) {
                var d = c[e];
                ++e;
                if ($.equals(d, b)) return !0
            }
            return !1
        },
        IsValidPosForBlackBubble: function(a, b, c) {
            if (0 == a.myY || $.equals(a, b)) return !1;
            for (var e = 0; e < c.length;) {
                var d = c[e];
                ++e;
                if ($.equals(d, a) || this.IsNeighbour(d, a)) return !1
            }
            return this.IsNeighbour(a, b) ? !1 : !0
        },
        GenerateBlackBubbleCoords: function(a, b, c) {
            for (var e = []; e.length < a;) {
                var d = new $(n.random(this.myGridWidth), 1 + n.random(c - 1));
                this.IsValidPosForBlackBubble(d, b, e) && (e.push(d), null)
            }
            return e
        },
        InitLevel: function(a,
            b, c, e) {
            for (var e = e ? new $(n.random(this.myGridWidth), 1) : new $(1 + n.random(this.myGridWidth - 2), 1), c = this.GenerateBlackBubbleCoords(c, e, a), d = 0, a = this.myGridWidth * a; d < a;) {
                for (var f = d++, g = za.RandomBubbleType(b), s = this.GridCoordFromIndex(f), w = 0; w < c.length;) {
                    var h = c[w];
                    ++w;
                    if ($.equals(s, h)) {
                        g = q.BLACK;
                        break
                    }
                }
                $.equals(s, e) && (g = q.S_ORANGE);
                g = this.myBubbleFactory.Spawn(g);
                s = f / this.myGridWidth | 0;
                w = [this.myAnimatingBubblesCounter.CreateToken()];
                g._compMap.BubbleLogic_2.MakeSpawning(this.GridToWorldCoords(f % this.myGridWidth,
                    s), function(a) {
                    return function() {
                        a[0].Dispose()
                    }
                }(w), 0.5 + 0.1 * s);
                P.Assert(null == this.myGrid[f]);
                this.myGrid[f] = g;
                this.myRoot.addChild(g)
            }
            this.RefreshBubbleTypes()
        },
        InitLevelWithData: function(a) {
            for (var b = 0, c = a.length; b < c;)
                for (var e = b++, d = a[e], f = 0, g = d.length; f < g;) {
                    var s = f++,
                        w = d.charAt(s);
                    if (" " != w) {
                        var h;
                        if ("1" == w) h = q.BLUE;
                        else if ("2" == w) h = q.RED;
                        else if ("3" == w) h = q.YELLOW;
                        else if ("o" == w) h = q.S_ORANGE;
                        else continue;
                        w = this.GridCoordToIndex(new $(s, e));
                        h = this.myBubbleFactory.Spawn(h);
                        h._compMap.BubbleLogic_2.MakeStationary(this.GridToWorldCoords(s,
                            e), !1);
                        this.myGrid[w] = h;
                        this.myRoot.addChild(h)
                    }
                }
            this.RefreshBubbleTypes()
        },
        InitLevelWithDetails: function(a) {
            var b = this,
                c = function(a, c) {
                    var d = b.myBubbleFactory.Spawn(c),
                        e = b.GridCoordFromIndex(a);
                    d._compMap.BubbleLogic_2.MakeStationary(b.GridToWorldCoords(e.myX, e.myY), !1);
                    b.myGrid[a] = d;
                    b.myRoot.addChild(d)
                },
                e = function() {
                    return S.createEnumIndex(q, a.enabledColors[n.random(a.enabledColors.length)])
                };
            if (null != a.format)
                for (var d = 0, f = 0, g = a.format; f < g.length;) {
                    var s = g[f];
                    ++f;
                    switch (s[1]) {
                        case 4:
                            c(d, q.BLACK);
                            break;
                        case 1:
                            c(d, e());
                            break;
                        case 2:
                            c(d, q.S_ORANGE);
                            break;
                        case 3:
                            c(d, S.createEnumIndex(q, s[2]))
                    }
                    d += 1
                } else {
                    c = a.nearBorderAllowed ? new $(n.random(this.myGridWidth), 1) : new $(1 + n.random(this.myGridWidth - 2), 1);
                    d = this.GenerateBlackBubbleCoords(a.blockerCount, c, a.numRows);
                    f = 0;
                    for (g = this.myGridWidth * a.numRows; f < g;) {
                        for (var s = f++, w = e(), h = this.GridCoordFromIndex(s), i = 0; i < d.length;) {
                            var k = d[i];
                            ++i;
                            if ($.equals(h, k)) {
                                w = q.BLACK;
                                break
                            }
                        }
                        $.equals(h, c) && (w = q.S_ORANGE);
                        w = this.myBubbleFactory.Spawn(w);
                        P.Assert(null == this.myGrid[s]);
                        this.myGrid[s] = w;
                        this.myRoot.addChild(w)
                    }
                }
            e = 0;
            for (c = this.myGrid.length; e < c;) d = e++, f = this.myGrid[d], null != f && (g = d / this.myGridWidth | 0, s = [this.myAnimatingBubblesCounter.CreateToken()], f._compMap.BubbleLogic_2.MakeSpawning(this.GridToWorldCoords(d % this.myGridWidth, g), function(a) {
                return function() {
                    a[0].Dispose()
                }
            }(s), 0.5 + 0.1 * g));
            this.RefreshBubbleTypes()
        },
        RefreshBubbleTypes: function() {
            this.myBubbleTypes.clear();
            for (var a = 0, b = this.myGrid; a < b.length;) {
                var c = b[a];
                ++a;
                null != c && (c = c._compMap.BubbleLogic_2.GetType(),
                    c == q.S_ORANGE || c == q.BLACK || c == q.MATCH_ANY || this.myBubbleTypes.insert(c))
            }
        },
        SpawnRegrowth: function() {
            N.Play("sfx/swish", 0.5);
            for (var a = 0, b = this.myGridWidth; a < b;)
                for (var c = a++, e = P.NegIter(this.myGridHeight - 1, 0); e.hasNext();) {
                    var d = e.next();
                    if (0 == d || null != this.GetBubbleAt(new $(c, d - 1))) {
                        P.Assert(null == this.myGrid[this.GridCoordToIndex(new $(c, d))]);
                        e = this.myBubbleFactory.Spawn(this.RandomAvailableBubbleType());
                        this.myGrid[this.GridCoordToIndex(new $(c, d))] = e;
                        c = this.GridToWorldCoords(c, d);
                        e._compMap.BubbleLogic_2.MakeSpawning(c,
                            function(a, b) {
                                return function() {
                                    return a(b)
                                }
                            }(t(this, this.BubbleSpawnCompleted), this.myAnimatingBubblesCounter.CreateToken()));
                        this.myRoot.addChild(e);
                        break
                    }
                }
        },
        BubbleSpawnCompleted: function(a) {
            a.Dispose()
        },
        RegisterActive: function(a, b) {
            this.myRoot.addChild(a);
            a._compMap.BubbleLogic_2.AnimateShot(b, function(a, b, d, f) {
                return function() {
                    return a(b, d, f)
                }
            }(t(this, this.ShotAnimationCompleted), a, b[b.length - 1], this.myAnimatingBubblesCounter.CreateToken()))
        },
        ShotAnimationCompleted: function(a, b, c) {
            var e = this;
            null == X.allMatchableBubbleTypes && (X.allMatchableBubbleTypes = S.allEnums(q), B.remove(X.allMatchableBubbleTypes, q.S_ORANGE), B.remove(X.allMatchableBubbleTypes, q.MATCH_ANY), B.remove(X.allMatchableBubbleTypes, q.BLACK));
            c.Dispose();
            c = this.WorldToGridCoords(b.x, b.y);
            b = this.GridCoordToIndex(c);
            P.Assert(null == this.myGrid[b]);
            this.myGrid[b] = a;
            this.myVerticalScreenShakeFunc();
            a._compMap.BubbleLogic_2.MakeStationary(this.GridToWorldCoords(c.myX, c.myY), !1, !0);
            [].push(a);
            this.AddPushAnimToNeighbours(c);
            var b = !0,
                d = this.GetType(a);
            if (d == q.MATCH_ANY)
                for (var a = 0, d = q.BLUE, f = 0, g = X.allMatchableBubbleTypes; f < g.length;) {
                    var s = g[f];
                    ++f;
                    var w = [];
                    this.FindGroupByType(c, w, s);
                    w.length > a && (a = w.length, d = s)
                }
            a = [];
            if (this.FindGroupByType(c, a, d) && 3 <= a.length) {
                b = !1;
                this.myNeedsFallingBubbleCheck = !0;
                for (f = d = c = 0; f < a.length;) g = a[f], ++f, d += g.myX, c += g.myY;
                d /= a.length;
                c /= a.length;
                c = this.GridToWorldCoords(Math.round(d), Math.round(c));
                20 <= a.length ? this.myScoreManager.AddScore(120, ra.Enabled, c.x, c.y, "OH MY GOD.") : 10 <= a.length ? this.myScoreManager.AddScore(60,
                    ra.Enabled, c.x, c.y, "GOOD JOB!") : 5 <= a.length && this.myScoreManager.AddScore(25, ra.Enabled, c.x, c.y, "BONUS");
                this.myPostAnimationActions.push((ya = this.myScoreManager, t(ya, ya.IncrementMultiplier)));
                for (c = 0; c < a.length;) d = [a[c]], ++c, this.GridToWorldCoords(d[0].myX, d[0].myY), f = [this.GetBubbleAt(d[0])], P.Assert(null != f[0]), g = [this.myAnimatingBubblesCounter.CreateToken()], f[0]._compMap.BubbleLogic_2.StartPopAnim(0, function(a, b, c) {
                    return function() {
                        a[0].Dispose();
                        var d = b[0]._compMap.Sprite_12;
                        e.myScoreManager.AddScore(5,
                            ra.Enabled, d.x._value, d.y._value, null);
                        e.myGrid[e.GridCoordToIndex(c[0])] = null;
                        e.myNeedsFallingBubbleCheck = !0;
                        e.AddPushAnimToNeighbours(c[0]);
                        b[0]._compMap.BubbleLogic_2.EnqueueDisposal()
                    }
                }(g, f, d))
            } else this.myScoreManager.ResetMultiplier();
            b && this.myMissHandler()
        },
        Clear: function() {
            this.myRoot.disposeChildren();
            this.myAnimatingBubblesCounter = new id;
            for (var a = 0, b = this.myGrid.length; a < b;) this.myGrid[a++] = null
        },
        GetCollisionDistLeftWall: function(a, b, c) {
            if (0 <= b.x) return Math.POSITIVE_INFINITY;
            a = (c + this.BubbleCollisionRadius -
                a.x) / b.x;
            return 0 > a ? Math.POSITIVE_INFINITY : a * b.magnitude()
        },
        GetCollisionDistRightWall: function(a, b, c) {
            if (0 >= b.x) return Math.POSITIVE_INFINITY;
            a = (c - this.BubbleCollisionRadius - a.x) / b.x;
            return 0 > a ? Math.POSITIVE_INFINITY : a * b.magnitude()
        },
        GetCollisionDistCeil: function(a, b, c) {
            if (0 == b.y) return Math.POSITIVE_INFINITY;
            a = (c - a.y) / b.y;
            return 0 > a ? Math.POSITIVE_INFINITY : a * b.magnitude()
        },
        GetCollisionDistBubble: function(a, b, c, e) {
            c = this.GridToWorldCoords(c, e);
            e = kb.GetTForClosestPointOnLine(new kb(a.x, a.y), new kb(b.x,
                b.y), c);
            if ((new Ma(a.x + b.x * e, a.y + b.y * e)).distanceTo(c.x, c.y) > 2 * this.BubbleCollisionRadius) return Math.POSITIVE_INFINITY;
            for (var d = 0, f = 0; 1E3 > f && !(f++, d += 0.2, (new Ma(a.x + b.x * (e - d), a.y + b.y * (e - d))).distanceTo(c.x, c.y) > 2 * this.BubbleCollisionRadiusWhenResolving););
            return (e - d) * b.magnitude()
        },
        GetPathForBubbleShot: function(a, b) {
            var c = b.clone();
            c.normalize();
            P.Assert(0 > c.y);
            var e = [],
                d = a.clone();
            e.push(a.clone());
            for (var f = Math.POSITIVE_INFINITY, g = !1, s = 0; 100 > s;) {
                s++;
                var w = this.GetCollisionDistCeil(d, c, X.myGridYOffset);
                w < f && (f = w, g = !0);
                w = this.GetCollisionDistLeftWall(d, c, Rb.LEFT_WALL_POS);
                w < f && (f = w, g = !1);
                w = this.GetCollisionDistRightWall(d, c, Rb.RIGHT_WALL_POS);
                w < f && (f = w, g = !1);
                for (var w = 0, h = this.myGridHeight; w < h;)
                    for (var i = w++, k = 0, l = this.myGridWidth; k < l;) {
                        var m = k++;
                        null != this.GetBubbleAt(new $(m, i)) && (m = this.GetCollisionDistBubble(d, c, m, i), m < f && (f = m, g = !0))
                    }
                if (2 > e.length || 0 < f) d.set(d.x + c.x * f, d.y + c.y * f), e.push(d.clone());
                if (g) return this.BacktrackPathToFreeSlot(e), e;
                c.x = -c.x;
                f = Math.POSITIVE_INFINITY
            }
            this.BacktrackPathToFreeSlot(e);
            return e
        },
        BacktrackPathToFreeSlot: function(a) {
            P.Assert(2 <= a.length);
            P.Assert(a[a.length - 2].y >= a[a.length - 1].y);
            for (var b = a[a.length - 1], c = a[a.length - 2], e = vc.sub(b.clone(), c).magnitude(), d = 0; !this.IsWorldPosEmpty(b.x, b.y);) {
                var f = vc.sub(b.clone(), c),
                    g = f.magnitude();
                if (d + 0.5 >= e) a.pop(), P.Assert(2 <= a.length), b = a[a.length - 1], c = a[a.length - 2], e = vc.sub(b.clone(), c).magnitude(), d = 0;
                else {
                    var s = Math.min(g, 5);
                    b.x -= s * f.x / g;
                    b.y -= s * f.y / g;
                    d += s
                }
            }
            P.Assert(2 <= a.length);
            P.Assert(a[a.length - 2].y >= a[a.length - 1].y)
        },
        IsWorldPosEmpty: function(a,
            b) {
            return null == this.myGrid[this.GridCoordToIndex(this.WorldToGridCoords(a, b))]
        },
        IsAnimating: function() {
            return 0 != this.myAnimatingBubblesCounter.GetCount() ? !0 : !1
        },
        GetType: function(a) {
            return a._compMap.BubbleLogic_2.GetType()
        },
        Update: function() {
            var a = this,
                b = this.myNeedsFallingBubbleCheck || !1;
            this.myNeedsFallingBubbleCheck = !1;
            if (b) {
                for (var b = new Na, c = 0, e = this.myGridHeight; c < e;)
                    for (var d = c++, f = 0, g = this.myGridWidth; f < g;) {
                        var s = f++,
                            s = [new $(s, d)],
                            w = [this.GetBubbleAt(s[0])];
                        if (null != w[0] && this.ShouldFall(s[0],
                                b)) {
                            if (w[0]._compMap.BubbleLogic_2.GetType() == q.S_ORANGE) {
                                var h = w[0]._compMap.Sprite_12;
                                this.myScoreManager.AddScore(1E3, ra.Enabled, h.x._value, h.y._value, "")
                            }
                            h = [this.myAnimatingBubblesCounter.CreateToken()];
                            this.myGrid[this.GridCoordToIndex(s[0])] = null;
                            w[0]._compMap.BubbleLogic_2.MakeFalling(function(b, c, d) {
                                return function() {
                                    b[0].Dispose();
                                    var e = c[0]._compMap.Sprite_12;
                                    c[0]._compMap.BubbleLogic_2.GetType() != q.S_ORANGE && a.myScoreManager.AddScore(5, ra.Enabled, e.x._value, e.y._value, null);
                                    a.AddPushAnimToNeighbours(d[0]);
                                    c[0]._compMap.BubbleLogic_2.EnqueueDisposal()
                                }
                            }(h, w, s));
                            w[0]._compMap.BubbleLogic_2.GetType() == q.S_ORANGE && this.StartEndLevelPopFest()
                        }
                    }
                this.RefreshBubbleTypes()
            }
            if (!this.IsAnimating() && 0 != this.myPostAnimationActions.length) {
                b = 0;
                for (c = this.myPostAnimationActions; b < c.length;) e = c[b], ++b, e();
                this.myPostAnimationActions = []
            }
            b = this.myGridGameOverLevel;
            for (c = this.myGridHeight; b < c;) {
                e = b++;
                d = 0;
                for (f = this.myGridWidth; d < f;)
                    if (g = d++, null != this.myGrid[this.GridCoordToIndex(new $(g, e))]) return ia.LevelLost
            }
            b = !1;
            c = 0;
            for (e = this.myGrid; c < e.length;)
                if (d = e[c], ++c, null != d && this.GetType(d) == q.S_ORANGE) {
                    b = !0;
                    break
                }
            return !b ? ia.LevelCompleted : ia.None
        },
        StartEndLevelPopFest: function() {
            for (var a = this, b = 0, c = this.myGridWidth; b < c;) {
                var e = [b++],
                    d = [this.myGrid[e[0]]];
                if (null != d[0]) {
                    var f = [this.myAnimatingBubblesCounter.CreateToken()];
                    d[0]._compMap.BubbleLogic_2.StartPopAnim(0.8 + 0.06 * e[0], function(b, c, d) {
                        return function() {
                            b[0].Dispose();
                            var e = c[0]._compMap.Sprite_12;
                            a.myScoreManager.AddScore(5, ra.Enabled, e.x._value, e.y._value,
                                null);
                            a.myRoot.removeChild(c[0]);
                            c[0]._compMap.BubbleLogic_2.EnqueueDisposal();
                            a.myGrid[d[0]] = null;
                            a.myNeedsFallingBubbleCheck = !0
                        }
                    }(f, d, e))
                }
            }
        },
        ShouldFall: function(a, b) {
            if (0 == a.myY) return !1;
            var c;
            c = this.GridCoordToIndex(a);
            c = b.get(c);
            if (null != c) return c;
            c = [];
            this.FindConnectedGroup(a, c);
            for (var e = 0; e < c.length;) {
                var d = c[e];
                ++e;
                if (0 == d.myY) {
                    for (e = 0; e < c.length;) d = c[e], ++e, d = this.GridCoordToIndex(d), b.set(d, !1);
                    return !1
                }
            }
            for (e = 0; e < c.length;) d = c[e], ++e, d = this.GridCoordToIndex(d), b.set(d, !0);
            return !0
        },
        GetBubbleAt: function(a) {
            a =
                this.GridCoordToIndex(a);
            return -1 == a ? null : this.myGrid[a]
        },
        FindGroupByType: function(a, b, c, e) {
            null == e && (e = [], e.push(a));
            b.push(a);
            this.GridCoordToIndex(a);
            var d = this.GetBubbleAt(a);
            P.Assert(null != d);
            a = this.GetNeighbourCoords(a);
            for (d = 0; d < a.length;) {
                var f = a[d];
                ++d;
                var g = this.GetBubbleAt(f);
                null != g && (g = this.GetType(g), !(g != q.MATCH_ANY && g != c) && !X.IsExcluded(e, f) && (e.push(f), this.FindGroupByType(f, b, c, e)))
            }
            return 1 < b.length
        },
        FindConnectedGroup: function(a, b, c) {
            null == c && (c = [], c.push(a));
            b.push(a);
            this.GridCoordToIndex(a);
            var e = this.GetBubbleAt(a);
            P.Assert(null != e);
            a = this.GetNeighbourCoords(a);
            for (e = 0; e < a.length;) {
                var d = a[e];
                ++e;
                null != this.GetBubbleAt(d) && !X.IsExcluded(c, d) && (c.push(d), this.FindConnectedGroup(d, b, c))
            }
            return 1 < b.length
        },
        AddPushAnimToNeighbours: function(a) {
            for (var b = this.GridToWorldCoords(a.myX, a.myY), a = this.GetNeighbourCoords(a), c = 0; c < a.length;) {
                var e = a[c];
                ++c;
                var d = this.GetBubbleAt(e);
                null != d && (e = this.GridToWorldCoords(e.myX, e.myY), e.x -= b.x, e.y -= b.y, e.x *= 0.04, e.y *= 0.04, null, d._compMap.BubbleLogic_2.StartCollisionAnim(e.x,
                    e.y))
            }
        },
        GetNeighbourCoords: function(a) {
            var b = [0, 1, -1, 1, 0, 1];
            0 == a.myY % 2 && (b = [-1, 0, -1, 1, -1, 0]);
            for (var c = [-1, -1, 0, 0, 1, 1], e = [], d = 0; 6 > d;) {
                var f = d++,
                    g = a.myX + b[f],
                    f = a.myY + c[f];
                0 > g || g >= this.myGridWidth || 0 > f || f >= this.myGridHeight || e.push(new $(g, f))
            }
            return e
        },
        GridToWorldCoords: function(a, b) {
            return new kb(0.5 * (b % 2) * X.myBubbleGridXDist + X.myGridXOffset + a * X.myBubbleGridXDist, X.myGridYOffset + b * X.myBubbleGridYDist)
        },
        WorldToGridCoords: function(a, b) {
            var c = (b - X.myGridYOffset) / X.myBubbleGridYDist + 0.5 | 0,
                e = (a - X.myGridXOffset -
                    0.5 * (c % 2) * X.myBubbleGridXDist) / X.myBubbleGridXDist + 0.5 | 0,
                c = P.LimitI(c, 0, this.myGridHeight - 1),
                e = P.LimitI(e, 0, this.myGridWidth - 1);
            return new $(e, c)
        },
        GridCoordToIndex: function(a) {
            return 0 > a.myX || a.myX >= this.myGridWidth || 0 > a.myY || a.myY >= this.myGridHeight ? -1 : a.myY * this.myGridWidth + a.myX
        },
        GridCoordFromIndex: function(a) {
            return 0 > a || a >= this.myGrid.length ? null : new $(a % this.myGridWidth, a / this.myGridWidth | 0)
        },
        GetAvailableBubbleTypes: function() {
            return this.myBubbleTypes
        },
        RandomAvailableBubbleType: function() {
            var a =
                Sa.array(this.myBubbleTypes);
            return 0 == a.length ? za.RandomBubbleType(2) : a[n.random(a.length)]
        },
        GetLineCount: function() {
            for (var a = new $(0, 0), b = 0, c = this.myGridGameOverLevel + 1; b < c;) {
                for (var e = b++, d = !0, f = 0, g = this.myGridWidth; f < g;) {
                    var s = f++;
                    a.myX = s;
                    a.myY = e;
                    if (null != this.myGrid[this.GridCoordToIndex(a)]) {
                        d = !1;
                        break
                    }
                }
                if (d) return e
            }
            return this.myGridGameOverLevel + 1
        },
        GetMaxLineCount: function() {
            return this.myGridGameOverLevel
        },
        GetDeathLineYPos: function() {
            return X.myGridYOffset + X.myBubbleGridYDist * (this.GetMaxLineCount() -
                0.6)
        },
        __class__: X
    };
    var Aa = function() {};
    g["game.Button"] = Aa;
    Aa.__name__ = ["game", "Button"];
    Aa.Create = function(a, b, c, e, d, f, g) {
        var s = b.Normal,
            b = null,
            b = "small" == g ? new z(a.getTexture("gfx/button_150x60")) : new z(a.getTexture("gfx/button_300x80"));
        b.setXY(c, e);
        a = (new Eb(s, d)).centerAnchor().setXY(b.getNaturalWidth() / 2, b.getNaturalHeight() / 2);
        "small" == g && (g = a.y, g.set__(g._value - 2));
        return (new p).add(b).add(new Sb(f)).addChild((new p).add(a))
    };
    Aa.CreateImageBtn = function(a, b, c, e, d, f) {
        a = a.getTexture(b);
        c = (new z(a)).setXY(c,
            e).centerAnchor();
        d = (new p).add(c).add(new Sb(d));
        f && (f = d._compMap.Sprite_12, f.scaleX.set_behavior(new $b(0.95, 1.05)), f.scaleY.set_behavior(new $b(1.05, 0.95)));
        return d
    };
    Aa.CreateToggleBtn = function(a, b, c, e, d, f) {
        var g = a.getTexture(b),
            s = a.getTexture(c),
            h = new z(f._value ? g : s);
        h.setXY(e, d).centerAnchor();
        a = new p;
        a.add(h);
        a.add(new Sb(function() {
            f.set__(!f._value)
        }));
        a.add(new jd(f, function(a) {
            h.texture = a ? g : s
        }));
        return a
    };
    var jd = function(a, b) {
        k.call(this);
        this.mySignalConnection = a.get_changed().connect(b)
    };
    g["game.ToggleHelper"] = jd;
    jd.__name__ = ["game", "ToggleHelper"];
    jd.__super__ = k;
    jd.prototype = x(k.prototype, {
        get_name: function() {
            return "ToggleHelper_17"
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.mySignalConnection.dispose()
        },
        __class__: jd
    });
    var Sb = function(a) {
        this.myDownY = 0;
        this.myIsPressed = !1;
        k.call(this);
        this.myAction = a
    };
    g["game.ButtonLogic"] = Sb;
    Sb.__name__ = ["game", "ButtonLogic"];
    Sb.__super__ = k;
    Sb.prototype = x(k.prototype, {
        get_name: function() {
            return "ButtonLogic_16"
        },
        onAdded: function() {
            var a =
                this.owner._compMap.Sprite_12;
            this.myPointerDownConnection = a.get_pointerDown().connect(t(this, this.OnPointerDown));
            this.myPointerUpConnection = a.get_pointerUp().connect(t(this, this.OnPointerUp));
            this.myPointerOutConnection = a.get_pointerOut().connect(t(this, this.OnPointerUp))
        },
        onRemoved: function() {
            this.myPointerDownConnection.dispose();
            this.myPointerDownConnection = null;
            this.myPointerUpConnection.dispose();
            this.myPointerUpConnection = null
        },
        OnPointerDown: function(a) {
            this.myIsPressed = !0;
            this.myDownY = a.viewY
        },
        OnPointerUp: function(a) {
            this.myIsPressed && (15 < Math.abs(a.viewY - this.myDownY) ? this.myIsPressed = !1 : (a._stopped = !0, this.myIsPressed = !1, null != this.myAction && this.myAction()))
        },
        __class__: Sb
    });
    var aa = g["game.AnimType"] = {
        __ename__: ["game", "AnimType"],
        __constructs__: ["PushForward", "Replace2", "ReplaceBoth"]
    };
    aa.PushForward = ["PushForward", 0];
    aa.PushForward.toString = h;
    aa.PushForward.__enum__ = aa;
    aa.Replace2 = ["Replace2", 1];
    aa.Replace2.toString = h;
    aa.Replace2.__enum__ = aa;
    aa.ReplaceBoth = ["ReplaceBoth", 2];
    aa.ReplaceBoth.toString =
        h;
    aa.ReplaceBoth.__enum__ = aa;
    aa.__empty_constructs__ = [aa.PushForward, aa.Replace2, aa.ReplaceBoth];
    var Tb = function(a) {
        this.myIsAnimating = !1;
        this.myEnqueuedAnimationType = null;
        this.myBubbleQueue = [];
        k.call(this);
        this.myPack = a
    };
    g["game.CannonController"] = Tb;
    Tb.__name__ = ["game", "CannonController"];
    Tb.CreateCannon = function(a, b, c) {
        return (new p).add((new u).setXY(a, b)).add(new Tb(c))
    };
    Tb.__super__ = k;
    Tb.prototype = x(k.prototype, {
        get_name: function() {
            return "CannonController_21"
        },
        onAdded: function() {
            this.myCannon =
                new p;
            this.myCannon.add((new z(this.myPack.getTexture("gfx/cannon"))).setAnchor(57.5, 184));
            this.myNextBubbleIcon1 = (new p).add((new z(null)).setXY(0, 0)).add(new xa);
            this.myNextBubbleIcon2 = (new p).add((new z(null)).setXY(0, 70).setScale(0.5)).add(new xa);
            this.HideSprite1();
            this.HideSprite2();
            this.owner.addChild(this.myNextBubbleIcon2);
            this.owner.addChild(this.myCannon);
            this.owner.addChild(this.myNextBubbleIcon1)
        },
        FilterBubbleQueue: function(a, b) {
            if (1 <= this.myBubbleQueue.length && !(a.exists(this.myBubbleQueue[0]) ||
                    b && this.myBubbleQueue[0] == q.MATCH_ANY)) this.myBubbleQueue.shift(), this.myEnqueuedAnimationType = aa.PushForward;
            2 <= this.myBubbleQueue.length && !a.exists(this.myBubbleQueue[1]) && (this.myBubbleQueue.splice(1, 1), this.myEnqueuedAnimationType = this.myEnqueuedAnimationType == aa.PushForward ? aa.ReplaceBoth : aa.Replace2)
        },
        PopFromBubbleQueue: function() {
            this.myBubbleQueue.shift();
            null == this.myEnqueuedAnimationType && (this.myEnqueuedAnimationType = aa.PushForward, this.HideSprite1())
        },
        ClearBubbleQueue: function() {
            for (; 0 <
                this.myBubbleQueue.length;) this.myBubbleQueue.shift();
            this.myEnqueuedAnimationType = aa.ReplaceBoth
        },
        PushBubbleQueue: function(a) {
            P.Assert(null != a);
            if (2 == this.myBubbleQueue.length) return !0;
            null == this.myEnqueuedAnimationType && (this.myEnqueuedAnimationType = 0 == this.myBubbleQueue.length ? aa.ReplaceBoth : aa.PushForward);
            this.myBubbleQueue.push(a);
            return 2 == this.myBubbleQueue.length ? !0 : !1
        },
        SetAimDir: function(a, b) {
            if (!(0 <= b)) {
                var c = this.myCannon._compMap.Sprite_12,
                    e = 180 * (Math.atan2(b, a) + 0.5 * Math.PI) / Math.PI;
                c.rotation.set__(P.LimitF(e, -75, 75))
            }
        },
        GetCannonRot: function() {
            return this.myCannon._compMap.Sprite_12.rotation._value
        },
        GetNextBubbleType: function() {
            return 0 == this.myBubbleQueue.length ? null : this.myBubbleQueue[0]
        },
        SetNextBubbleType: function(a) {
            0 == this.myBubbleQueue.length ? this.myBubbleQueue.push(a) : this.myBubbleQueue[0] = a;
            this.UpdateSprite1()
        },
        UpdateAnimation: function() {
            var a = this;
            null == this.myEnqueuedAnimationType || this.myIsAnimating || (this.myEnqueuedAnimationType == aa.Replace2 ? (this.UpdateSprite2(),
                this.AnimBubble2IntoPlace(this.myNextBubbleIcon2), this.myIsAnimating = !1, this.myEnqueuedAnimationType = null) : this.myEnqueuedAnimationType == aa.PushForward ? (this.myIsAnimating = !0, this.UpdateSprite1(), this.AnimBubble1IntoPlace(this.myNextBubbleIcon1, function() {
                a.myIsAnimating = !1
            }), this.UpdateSprite2(), this.AnimBubble2IntoPlace(this.myNextBubbleIcon2), this.myEnqueuedAnimationType = null) : this.myEnqueuedAnimationType == aa.ReplaceBoth && (this.myIsAnimating = !0, this.UpdateSprite1(), this.UpdateSprite2(), this.AnimBubble1IntoPlaceFrom3(this.myNextBubbleIcon1,
                function() {
                    a.myIsAnimating = !1
                }), this.AnimBubble2IntoPlace(this.myNextBubbleIcon2), this.myEnqueuedAnimationType = null))
        },
        IsAnimating: function() {
            return null != this.myEnqueuedAnimationType || this.myIsAnimating
        },
        UpdateSprite1: function() {
            this.myNextBubbleIcon1._compMap.Sprite_12.set_visible(!0);
            n.instance(this.myNextBubbleIcon1._compMap.Sprite_12, z).texture = za.GetTextureForType(this.myPack, this.myBubbleQueue[0]);
            n.instance(this.myNextBubbleIcon1._compMap.Sprite_12, z).centerAnchor()
        },
        UpdateSprite2: function() {
            this.myNextBubbleIcon2._compMap.Sprite_12.set_visible(!0);
            n.instance(this.myNextBubbleIcon2._compMap.Sprite_12, z).texture = za.GetTextureForType(this.myPack, this.myBubbleQueue[1]);
            n.instance(this.myNextBubbleIcon2._compMap.Sprite_12, z).centerAnchor()
        },
        HideSprite1: function() {
            this.myNextBubbleIcon1._compMap.Sprite_12.set_visible(!1)
        },
        HideSprite2: function() {
            this.myNextBubbleIcon2._compMap.Sprite_12.set_visible(!1)
        },
        AnimBubble1IntoPlace: function(a, b) {
            a._compMap.Animator_10.Play("", new la([new M(n.instance(a._compMap.Sprite_12, z).y, 70, 0, 0.3, y.expoInOut), new la([new M(n.instance(a._compMap.Sprite_12,
                z).scaleX, 0.5, 1, 0.2, y.expoInOut), new M(n.instance(a._compMap.Sprite_12, z).scaleY, 0.5, 1, 0.2, y.expoInOut)])]), function() {
                a._compMap.Animator_10.Play("", G.CreateWobbleSpriteAnim(n.instance(a._compMap.Sprite_12, z), 1.3, 0.2, 1));
                b()
            })
        },
        AnimBubble1IntoPlaceFrom3: function(a, b) {
            a._compMap.Animator_10.Play("", new la([new M(n.instance(a._compMap.Sprite_12, z).y, 140, 0, 0.5, y.expoInOut), new la([new M(n.instance(a._compMap.Sprite_12, z).scaleX, 0.4, 1, 0.2, y.expoInOut), new M(n.instance(a._compMap.Sprite_12, z).scaleY,
                0.4, 1, 0.2, y.expoInOut)])]), function() {
                a._compMap.Animator_10.Play("", G.CreateWobbleSpriteAnim(n.instance(a._compMap.Sprite_12, z), 1.3, 0.2, 1));
                b()
            })
        },
        AnimBubble2IntoPlace: function(a, b) {
            a._compMap.Sprite_12.setScale(0.5);
            a._compMap.Animator_10.Play("", new M(a._compMap.Sprite_12.y, 120, 70, 0.5, y.expoInOut), b)
        },
        StartShootAnim: function() {
            var a = 18 * Math.cos(Math.PI / 180 * (this.myCannon._compMap.Sprite_12.rotation._value + 90)),
                b = 18 * Math.sin(Math.PI / 180 * (this.myCannon._compMap.Sprite_12.rotation._value + 90)),
                c = new Qb,
                a = new vb([new pc([new vb([new bb(this.myCannon._compMap.Sprite_12.x, a, 0.06, y.bounceOut), new bb(this.myCannon._compMap.Sprite_12.x, -a, 0.06, y.bounceIn), new bb(this.myCannon._compMap.Sprite_12.x, -0.15 * a, 0.06, y.bounceOut), new bb(this.myCannon._compMap.Sprite_12.x, 0.15 * a, 0.06, y.bounceIn)]), new vb([new bb(this.myCannon._compMap.Sprite_12.y, b, 0.06, y.bounceOut), new bb(this.myCannon._compMap.Sprite_12.y, -b, 0.06, y.bounceIn), new bb(this.myCannon._compMap.Sprite_12.y, -0.15 * b, 0.06, y.bounceOut), new bb(this.myCannon._compMap.Sprite_12.y,
                    0.15 * b, 0.06, y.bounceIn)])]), new oc(t(c, c.dispose))]);
            c.run(a);
            null == this.myCannon._compMap.Script_11 && this.myCannon.add(c)
        },
        dispose: function() {
            k.prototype.dispose.call(this)
        },
        __class__: Tb
    });
    var qc = function() {};
    g["game.CashBundle"] = qc;
    qc.__name__ = ["game", "CashBundle"];
    var me = function(a) {
        this.myDisposeHandler = a
    };
    g["game.ConcurrencyToken"] = me;
    me.__name__ = ["game", "ConcurrencyToken"];
    me.prototype = {
        Dispose: function() {
            null != this.myDisposeHandler && this.myDisposeHandler();
            this.myDisposeHandler = null
        },
        __class__: me
    };
    var id = function() {
        this.myCount = 0
    };
    g["game.ConcurrencyCounter"] = id;
    id.__name__ = ["game", "ConcurrencyCounter"];
    id.prototype = {
        CreateToken: function() {
            this.myCount += 1;
            return new me(t(this, this.DecrementCount))
        },
        GetCount: function() {
            return this.myCount
        },
        DecrementCount: function() {
            this.myCount -= 1
        },
        __class__: id
    };
    var ne = function(a, b) {
        this.price = a;
        this.buyerPreference = b
    };
    g["game.ResourceDetails"] = ne;
    ne.__name__ = ["game", "ResourceDetails"];
    ne.prototype = {
        __class__: ne
    };
    var ld = function(a, b, c, e, d, f) {
        this.myCustomers = [];
        this.myTimedCbs = new kd;
        this.myResourceDetails = new R;
        this.configString = null;
        this.AvailableSpritesCount = this.MaxQueueLength = 4;
        fa.call(this);
        this.myAssets = a;
        this.myXOffset = b;
        this.myYOffset = c;
        this.myTargetCount = e;
        this.mySpawnInterval = d;
        this.mySpawnIntervalVariance = f;
        this.renderRoot = new p;
        this.renderRoot.add(new u);
        e = 0;
        for (d = this.MaxQueueLength; e < d;) {
            var g = e++,
                f = (0 < g ? 20 : 0) + 90 * g,
                g = 0 < g ? 15 + 10 * Math.random() : 0,
                s = new p;
            s.add(new xa);
            s.add((new z(a.getTexture("gfx/customer1"))).setXY(b + f, c + g));
            s._compMap.Sprite_12.set_visible(!1);
            this.renderRoot.addChild(s);
            this.myCustomers.push(s)
        }
        this.myOrderBubble = new p;
        this.myOrderBubble.add((new z(this.myAssets.getTexture("gfx/orderbubble"))).setXY(b + 115, c - 45));
        this.myOrderBubble._compMap.Sprite_12.set_visible(!1);
        this.renderRoot.addChild(this.myOrderBubble);
        this.myOrderBubbleItem = new p;
        this.myOrderBubbleItem.add((new z(this.myAssets.getTexture("gfx/res_part_orange"))).setXY(47, 38));
        this.myOrderBubble.addChild(this.myOrderBubbleItem);
        a = this.mySpawnIntervalVariance * (Math.random() - 0.5);
        i.ConstantCrowdWaitTime() && (a = 0.5);
        this.myTimedCbs.Add(a, t(this, this.SpawnCustomer))
    };
    g["game.Crowd"] = ld;
    ld.__name__ = ["game", "Crowd"];
    ld.__super__ = fa;
    ld.prototype = x(fa.prototype, {
        get_name: function() {
            return "Crowd_34"
        },
        AddResourceType: function(a, b, c) {
            b = new ne(b, c);
            this.myResourceDetails.set(a, b)
        },
        onUpdate: function(a) {
            if (sa.TimeJumpActive)
                for (var b = 0, c = this.myCustomers; b < c.length;) {
                    var e = c[b];
                    ++b;
                    e._compMap.Animator_10.onUpdate(a)
                }
            b = this.owner._compMap.Sprite_12;
            c = this.renderRoot._compMap.Sprite_12;
            c.x.set__(b.x._value);
            c.y.set__(b.y._value);
            this.myTimedCbs.Update(a)
        },
        EnqueCustomerSpawn: function() {
            var a = this.mySpawnInterval + this.mySpawnIntervalVariance * (Math.random() - 0.5);
            i.ConstantCrowdWaitTime() && 0 == (this.myCustomers[0]._compMap.Sprite_12._flags & 2) && (a = 1);
            this.myTimedCbs.Add(a, t(this, this.SpawnCustomer))
        },
        SpawnCustomer: function() {
            if (null != this.PickRandomResource())
                for (var a = 0, b = this.myCustomers; a < b.length;) {
                    var c = b[a];
                    ++a;
                    var e = n.instance(c._compMap.Sprite_12, z);
                    if (!1 == (0 != (e._flags & 2))) {
                        e.texture =
                            this.GetRandomCharacterTexture();
                        e.alpha.set__(1);
                        e.set_visible(!0);
                        c == this.myCustomers[0] && this.EnqueuePurchase();
                        sa.TimeJumpActive || N.Play("sfx/swish", 0.2);
                        this.EnqueCustomerSpawn();
                        return
                    }
                }
            this.EnqueCustomerSpawn()
        },
        EnqueuePurchase: function() {
            var a = this,
                b;
            b = 0 + (1 + 5 * Math.random());
            this.myTimedCbs.Add(b, function() {
                var b = n.instance(a.myOrderBubbleItem._compMap.Sprite_12, z),
                    e = a.PickRandomResource();
                if (null == e) a.myCustomers[0]._compMap.Animator_10.Play("order-bubble", G.FadeOut(a.myOrderBubble._compMap.Sprite_12,
                    0.2), function() {
                    a.myOrderBubble._compMap.Sprite_12.set_visible(!1);
                    a.myOrderBubble._compMap.Sprite_12.alpha.set__(1);
                    a.RemoveFirstCustomer()
                });
                else {
                    n.random(1E4);
                    var d = a.owner._compMap.ResourceQueue_30.ReserveResource(e, 1);
                    a.myOrderBubble._compMap.Sprite_12.set_visible(!0);
                    a.myOrderBubble._compMap.Sprite_12.alpha.set__(1);
                    a.myOrderBubbleItem._compMap.Sprite_12.set_visible(!1);
                    sa.TimeJumpActive || N.Play("sfx/enqueue", 0.2);
                    a.myTimedCbs.Add(0.1 + 0.4 * Math.random(), function() {
                        var f = a.myResourceDetails.get(e).price;
                        b.texture = a.myAssets.getTexture("gfx/res_part_" + e);
                        b.centerAnchor();
                        b.set_visible(!0);
                        sa.TimeJumpActive || N.Play("sfx/orange", 0.2);
                        a.myTimedCbs.Add(1.2, function() {
                            var b = a.owner._compMap.GardenItemAnimator_33;
                            null != b && b.OnEvent(Ba.EVENT_CONV_END);
                            for (var b = a.owner._compMap.Sprite_12, c = f; c >= qc.ContainsCount;) Ha.Post(new wb("cash_bundle", ca.centerX(b), ca.centerY(b))), c -= qc.ContainsCount;
                            for (; 1 <= c;) Ha.Post(new wb("cash", ca.centerX(b), ca.centerY(b))), c -= 1;
                            d();
                            a.myTimedCbs.Add(0.5, t(a, a.RemoveFirstCustomer))
                        })
                    })
                }
            })
        },
        GetRandomCharacterTexture: function() {
            return this.myAssets.getTexture("gfx/customer" + (1 + n.random(this.AvailableSpritesCount)))
        },
        RemoveFirstCustomer: function() {
            var a = this;
            this.myOrderBubble._compMap.Sprite_12.set_visible(!1);
            this.myOrderBubbleItem._compMap.Sprite_12.set_visible(!1);
            sa.TimeJumpActive || N.Play("sfx/swish", 0.2);
            var b = this.myCustomers[0];
            b._compMap.Animator_10.Play("", G.FadeOut(b._compMap.Sprite_12, 0.2), function() {
                for (var b = 0, e = a.myCustomers.length - 1; b < e;) {
                    var d = b++;
                    n.instance(a.myCustomers[d]._compMap.Sprite_12,
                        z).texture = n.instance(a.myCustomers[d + 1]._compMap.Sprite_12, z).texture;
                    n.instance(a.myCustomers[d]._compMap.Sprite_12, z).set_visible(n.instance(a.myCustomers[d + 1]._compMap.Sprite_12, z).get_visible());
                    n.instance(a.myCustomers[d]._compMap.Sprite_12, z).alpha.set__(1)
                }
                n.instance(a.myCustomers[a.myCustomers.length - 1]._compMap.Sprite_12, z).set_visible(!1);
                0 != (a.myCustomers[0]._compMap.Sprite_12._flags & 2) && a.EnqueuePurchase()
            })
        },
        PickRandomResource: function() {
            for (var a = this.owner._compMap.ResourceQueue_30,
                    b = !1, c = 0, e = this.myResourceDetails.keys(); e.hasNext();) {
                var d = e.next();
                a.CanReserveResource(d, 1) && (b = !0, d = this.myResourceDetails.get(d), c += d.buyerPreference)
            }
            if (!b) return null;
            b = Math.random() * c;
            c = 0;
            for (e = this.myResourceDetails.keys(); e.hasNext();)
                if (d = e.next(), a.CanReserveResource(d, 1)) {
                    var f = this.myResourceDetails.get(d),
                        c = c + f.buyerPreference;
                    if (c >= b) return d
                }
            return null
        },
        dispose: function() {
            fa.prototype.dispose.call(this);
            this.renderRoot.dispose()
        },
        __class__: ld
    });
    var md = function(a, b, c) {
        this.myFullActivationEnabled = !1;
        this.myMaxAlpha = 0.6;
        this.myMinAlpha = 0.1;
        k.call(this);
        this.myPack = a;
        this.myBubbleManager = c;
        this.myRoot = (new p).add((new z(a.getTexture("gfx/deathline"))).setXY(b, c.GetDeathLineYPos() + 15).centerAnchor().setAlpha(this.myMinAlpha))
    };
    g["game.DeathLineWidget"] = md;
    md.__name__ = ["game", "DeathLineWidget"];
    md.__super__ = k;
    md.prototype = x(k.prototype, {
        get_name: function() {
            return "DeathLineWidget_7"
        },
        onAdded: function() {
            this.owner.addChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        onUpdate: function() {
            var a;
            a = this.myBubbleManager.GetLineCount();
            a = 6 > a ? 0 : (a - 6) / (this.myBubbleManager.GetMaxLineCount() - 6);
            this.myFullActivationEnabled && (a = 1);
            var b = this.myMinAlpha + a * (this.myMaxAlpha - this.myMinAlpha);
            0.9 < a && (b = 0.6 + 0.4 * Math.sin(6 * pb.stamp()));
            n.instance(this.myRoot._compMap.Sprite_12, z).setAlpha(b)
        },
        SetFullActivation: function(a) {
            this.myFullActivationEnabled = a
        },
        __class__: md
    });
    var nd = function() {};
    g["game.DebugKeys"] = nd;
    nd.__name__ = ["game", "DebugKeys"];
    nd.IsDown = function(a) {
        return nd.debugKeysEnabled &&
            o._platform.getKeyboard().isDown(a)
    };
    var ob = function() {
        var a = this;
        fa.call(this);
        var b = null,
            c = ob.GetScaleFactor(),
            e = o.root._compMap.Sprite_12.scaleX._value / c,
            d = D.TargetWidth * e,
            e = D.TargetHeight * e,
            f = o._platform.getStage().get_width() / 2 / c - d / 2,
            c = o._platform.getStage().get_height() / 2 / c - e / 2,
            b = o._platform.getWeb().createView(f, c, d, e);
        Qa.GetDisposer(this.myRoot).add(b);
        Qa.GetDisposer(this.myRoot).add(b.error.connect(function() {
            a.dispose()
        }));
        Qa.GetDisposer(this.myRoot).add(b.url.get_changed().connect(t(this,
            this.OnUrlChanged)));
        Qa.GetDisposer(this.myRoot).add(o._platform.getStage().resize.connect(function() {
            var a = ob.GetScaleFactor(),
                c = o.root._compMap.Sprite_12.scaleX._value / a,
                d = 170 * c,
                e = (D.TargetWidth - 40) * c,
                c = D.TargetHeight / 3 * c,
                f = o._platform.getStage().get_width() / 2 / a - e / 2,
                a = o._platform.getStage().get_height() / 2 / a - c / 2 + d;
            b.x.set__(f);
            b.y.set__(a);
            b.width.set__(e);
            b.height.set__(c)
        }));
        b.iframe.scrolling = "yes";
        b.url.set__("#")
    };
    g["game.EmailSignupWidget"] =
        ob;
    ob.__name__ = ["game", "EmailSignupWidget"];
    ob.GetScaleFactor = function() {
        var a = 1;
        return a = o._platform.getStage().scaleFactor
    };
    ob.__super__ = fa;
    ob.prototype = x(fa.prototype, {
        get_name: function() {
            return "EmailSignupWidget_38"
        },
        OnUrlChanged: function(a) {
            F.startsWith(a, "#") && (this.myCompletionHandler(), this.dispose())
        },
        __class__: ob
    });
    var Qa = function() {};
    g["game.EntityExtender"] = Qa;
    Qa.__name__ = ["game", "EntityExtender"];
    Qa.sortChildren =
        function(a, b) {
            for (var c = !0; c;)
                for (var c = !1, e = null, d = a.firstChild; null != d && null != d.next;) {
                    if (0 > b(d, d.next)) {
                        var c = d.next,
                            f = d.next.next;
                        null == e ? a.firstChild = c : e.next = c;
                        c.next = d;
                        d.next = f;
                        c = !0
                    }
                    e = d;
                    d = d.next
                }
        };
    Qa.GetDisposer = function(a) {
        var b = a._compMap.Disposer_20;
        if (null != b) return b;
        b = new lb;
        a.add(b);
        return b
    };
    var oe = function() {};
    g["game.Fonts"] = oe;
    oe.__name__ = ["game", "Fonts"];
    oe.prototype = {
        __class__: oe
    };
    var od = function(a, b) {
        var c = this;
        fa.call(this);
        J.PopulateEnt("game-over-menu", this.myRoot, null);
        this.myRoot._compMap.WidgetBindings_19.SetActionHandler("retry",
            function() {
                c.dispose();
                a()
            });
        this.myRoot._compMap.WidgetBindings_19.SetActionHandler("back", function() {
            c.dispose();
            b()
        })
    };
    g["game.GameOverWidget"] = od;
    od.__name__ = ["game", "GameOverWidget"];
    od.__super__ = fa;
    od.prototype = x(fa.prototype, {
        get_name: function() {
            return "GameOverWidget_6"
        },
        __class__: od
    });
    var Pe = function() {};
    g["game.GameSceneEntity"] = Pe;
    Pe.__name__ = ["game", "GameSceneEntity"];
    Pe.CreateGameScene = function(a, b, c, e, d, f, g, h, w) {
        return (new p).add(new u).add(new D(a, b, c, e, d, f, g, h, w))
    };
    var D = function(a,
        b, c, e, d, f, g, h, w) {
        this.myEnterLevelMessageActive = !0;
        this.myLaserSightEnabled = !1;
        this.myScoreManager = new pe;
        this.myInputEnabled = !1;
        k.call(this);
        this.myPack = a;
        this.myLocalization = b;
        this.myFonts = c;
        this.myPlayerState = e;
        this.mySoundEnabled = d;
        this.myWinHandler = h;
        this.myLossHandler = g;
        this.myLevelDetailsLoader = w;
        this.myLevel = f
    };
    g["game.GameSceneController"] = D;
    D.__name__ = ["game", "GameSceneController"];
    D.__super__ = k;
    D.prototype = x(k.prototype, {
        get_name: function() {
            return "GameSceneController_4"
        },
        onStart: function() {
            var a =
                new z(this.myPack.getTexture("gfx/bg"));
            this.myBackgroundEnt = new p;
            this.myBackgroundEnt.add(a);
            this.myLaserSightRoot = new p;
            var b = (new p).add((new Bb(0, 50, a.getNaturalHeight())).setXY(-50, 0).setAlpha(-0.01)),
                a = (new p).add((new Bb(0, 50, a.getNaturalHeight())).setXY(a.getNaturalWidth(), 0).setAlpha(-0.01));
            this.owner.addChild(this.myBackgroundEnt);
            this.owner.addChild(b);
            this.owner.addChild(a);
            this.owner.addChild(this.myLaserSightRoot);
            this.owner.add(new za(this.myPack, null));
            this.myBubbleManager = new X(this.owner,
                t(this, this.StartVerticalScreenShake), this.myScoreManager, t(this, this.onMiss), this.owner._compMap.BubbleFactory_1);
            this.owner.add(new pd(this.myPack, 20, 1062));
            this.myDeathLineWidget = new md(this.myPack, D.TargetWidth / 2, this.myBubbleManager);
            this.owner.add(this.myDeathLineWidget);
            this.myLevelNumText = new Eb(this.myFonts.Normal, this.myLocalization.GetI("HARVEST.LEVEL", this.myLevel));
            this.myLevelNumText.set_align(ja.Center);
            this.myLevelNumText.setXY(D.TargetWidth / 2, 4);
            this.owner.addChild((new p).add(this.myLevelNumText));
            this.myCannon = Tb.CreateCannon(D.TargetWidth / 2, D.TargetHeight - 100, this.myPack);
            this.owner.addChild(this.myCannon);
            this.owner._compMap.Sprite_12.get_pointerDown().connect(t(this, this.onPointerDown));
            this.owner._compMap.Sprite_12.get_pointerUp().connect(t(this, this.onPointerUp));
            this.owner._compMap.Sprite_12.get_pointerMove().connect(t(this, this.onPointerMoved));
            this.myPauseButton = Aa.CreateImageBtn(this.myPack, "gfx/button_pause", D.TargetWidth - 65, D.TargetHeight - 65, t(this, this.OnPauseButtonClicked), !1);
            this.owner.addChild(this.myPauseButton);
            this.myBoosterButton = Aa.CreateImageBtn(this.myPack, "gfx/button_booster", D.TargetWidth - 65, D.TargetHeight - 195, t(this, this.OnBoosterButtonClicked), !1);
            this.owner.addChild(this.myBoosterButton);
            this.LoadLevel(this.myLevel);
            this.SectionEnablerEnterLevelSequence()
        },
        BoosterOrPauseMenuOpen: function() {
            return null != this.owner._compMap.PauseMenuWidget_22 || null != this.owner._compMap.BoosterMenuWidget_23
        },
        CloseBoosterAndPauseMenu: function() {
            var a = this.owner._compMap.PauseMenuWidget_22;
            null != a && a.dispose();
            a = this.owner._compMap.BoosterMenuWidget_23;
            null != a && a.dispose()
        },
        OnBoosterButtonClicked: function() {
            if (this.BoosterOrPauseMenuOpen()) this.CloseBoosterAndPauseMenu();
            else if (this.myInputEnabled) {
                var a = this.myLaserSightEnabled,
                    b = this.myCannon._compMap.CannonController_21.GetNextBubbleType() == q.MATCH_ANY;
                this.owner.add(new ed(this.myPack, t(this, this.OnBoosterSelected), this.myPlayerState, a, b))
            }
        },
        OnBoosterSelected: function(a) {
            a == Ga.MatchAny ? this.myCannon._compMap.CannonController_21.SetNextBubbleType(q.MATCH_ANY) :
                a == Ga.LaserSight ? (this.myLaserSightEnabled = !0, this.UpdateLaserSight()) : null
        },
        UpdateLaserSight: function() {
            if (this.myLaserSightEnabled) {
                var a = this.myCannon._compMap.Sprite_12,
                    b = this.myCannon._compMap.CannonController_21.GetCannonRot(),
                    c = Math.PI / 180 * b,
                    b = Math.sin(c),
                    c = -Math.cos(c),
                    a = this.myBubbleManager.GetPathForBubbleShot(new Ma(a.x._value, a.y._value), new Ma(b, c));
                Ia.Show(this.myPack, this.myLaserSightRoot, a)
            } else Ia.Hide(this.myLaserSightRoot)
        },
        OnPauseButtonClicked: function() {
            this.BoosterOrPauseMenuOpen() ?
                this.CloseBoosterAndPauseMenu() : this.myInputEnabled && this.owner.add(new qd(this.myPack, this.myFonts, this.myLocalization, this.myLossHandler, this.mySoundEnabled))
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            null != this.myReloadLevelConnection && this.myReloadLevelConnection.dispose()
        },
        SetTutorialCompleted: function() {
            o._platform.getStorage().set("tutorialCompleted", !0)
        },
        StartVerticalScreenShake: function() {},
        LoadLevel: function(a) {
            this.myBubbleManager.Clear();
            this.myRegrowthInterval = this.myRegrowthMaxInterval =
                6;
            var b = this.myColorCount = 3,
                c = 0,
                e = !1;
            (function() {
                var b = 0 > a;
                return !1 != b ? b : 30 < a
            })(this) ? (this.myRegrowthInterval = this.myRegrowthMaxInterval = 4, b = 8, this.myColorCount = 5, c = 6, e = !0) : function() {
                var b = 0 > a;
                return !1 != b ? b : 17 < a
            }(this) ? (this.myRegrowthInterval = this.myRegrowthMaxInterval = 4, b = 7, this.myColorCount = 5, c = 4, e = !0) : function() {
                var b = 0 > a;
                return !1 != b ? b : 9 < a
            }(this) ? (this.myRegrowthInterval = this.myRegrowthMaxInterval = 4, b = 6, this.myColorCount = 5, c = 1, e = !0) : function() {
                var b = 0 > a;
                return !1 != b ? b : 3 < a
            }(this) ? (this.myColorCount =
                b = this.myRegrowthInterval = this.myRegrowthMaxInterval = 5, e = !0) : function() {
                var b = 0 > a;
                return !1 != b ? b : 1 < a
            }(this) && (b = this.myRegrowthInterval = this.myRegrowthMaxInterval = 5, this.myColorCount = 4);
            this.myCannon._compMap.CannonController_21.ClearBubbleQueue();
            var d = null,
                f = a;
            (function() {
                var a = 0 > f;
                return !1 != a ? a : 130 < f
            })(this) && (f = 129);
            d = this.myLevelDetailsLoader.Load(a);
            null != d ? (this.myRegrowthInterval = this.myRegrowthMaxInterval = d.regrowthInterval, this.myBubbleManager.InitLevelWithDetails(d), null == this.myReloadLevelConnection &&
                (this.myReloadLevelConnection = d.reloaded.connect(function(a, b) {
                    return function() {
                        return a(b)
                    }
                }(t(this, this.LoadLevel), a)))) : 1 == (0 > a ? 4294967296 + a : a + 0) ? (this.myBubbleManager.InitLevelWithData(["22   111", "2     o"]), this.myCannon._compMap.CannonController_21.PushBubbleQueue(q.RED), this.myCannon._compMap.CannonController_21.PushBubbleQueue(q.BLUE), b = [new rc(D.TargetWidth / 2, D.TargetHeight / 2, this.myLocalization.Get("T1")), new rc(D.TargetWidth / 2 - 30, D.TargetHeight / 2 + 20, this.myLocalization.Get("T2"), new rd(633,
                283, -75)), new rc(D.TargetWidth / 2 + 65, D.TargetHeight / 2, this.myLocalization.Get("T3"), new rd(87, 727, 155), function(a, b) {
                return function() {
                    return a(b)
                }
            }((ya = this.myDeathLineWidget, t(ya, ya.SetFullActivation)), !0), function(a, b) {
                return function() {
                    return a(b)
                }
            }((ya = this.myDeathLineWidget, t(ya, ya.SetFullActivation)), !1))], this.myTutorialWidget = Qe.Create(this.myPack, this.myFonts, b, t(this, this.OnTutorialWidgetClose)), this.owner.addChild(this.myTutorialWidget)) : this.myBubbleManager.InitLevel(b, this.myColorCount,
                c, e);
            this.myRegrowthCounter = this.myRegrowthMaxInterval;
            this.owner._compMap.RegrowthCounterWidget_8.SetCounterValue(this.myRegrowthCounter, this.myRegrowthMaxInterval)
        },
        SectionEnablerEnterLevelSequence: function() {
            var a = this;
            i.BoostersEnabled() || this.myBoosterButton._compMap.Sprite_12.set_visible(!1);
            i.OnEnterLevel(this.owner, function() {
                a.myEnterLevelMessageActive = !1;
                i.BoosterShopEnabled() && a.owner.add(new fd(a.myPlayerState));
                if (i.HighlightBoosterButton()) {
                    var b = new xa;
                    a.myBoosterButton.add(b);
                    b.Play("",
                        new Ua([G.Delay(0.3), G.BounceScale(a.myBoosterButton._compMap.Sprite_12)]))
                }
            })
        },
        RestartLevel: function() {
            this.myGameOverWidget = null;
            this.myScoreManager.Reset();
            this.LoadLevel(this.myLevel);
            this.SectionEnablerEnterLevelSequence()
        },
        OnTutorialWidgetClose: function() {
            this.myTutorialWidget = null
        },
        onPointerDown: function(a) {
            a._stopped = !0;
            this.myInputEnabled && this.UpdateAim(a)
        },
        onPointerMoved: function(a) {
            a._stopped = !0;
            this.myInputEnabled && this.UpdateAim(a)
        },
        onPointerUp: function(a) {
            a._stopped = !0;
            if (this.myInputEnabled &&
                this.UpdateAim(a)) {
                this.myLaserSightEnabled && 0 < this.myPlayerState.AimBoosterCount().get__() && (a = this.myPlayerState.AimBoosterCount(), a.set__(a._value - 1));
                a = this.myCannon._compMap.CannonController_21.GetNextBubbleType();
                if (a == q.MATCH_ANY && 0 < this.myPlayerState.MatchAnyBoosterCount().get__()) {
                    var b = this.myPlayerState.MatchAnyBoosterCount();
                    b.set__(b._value - 1)
                }
                a = this.owner._compMap.BubbleFactory_1.Spawn(a);
                a._compMap.Sprite_12.x.set__(this.myCannon._compMap.Sprite_12.x._value);
                a._compMap.Sprite_12.y.set__(this.myCannon._compMap.Sprite_12.y._value);
                this.myCannon._compMap.CannonController_21.PopFromBubbleQueue();
                this.myCannon._compMap.CannonController_21.StartShootAnim();
                this.updateBubbleQueue();
                var b = this.myCannon._compMap.CannonController_21.GetCannonRot(),
                    c = Math.PI / 180 * b,
                    b = Math.sin(c),
                    c = -Math.cos(c),
                    b = this.myBubbleManager.GetPathForBubbleShot(new Ma(this.myCannon._compMap.Sprite_12.x._value, this.myCannon._compMap.Sprite_12.y._value), new Ma(b, c));
                this.myBubbleManager.RegisterActive(a, b);
                this.myLaserSightEnabled = !1;
                this.UpdateLaserSight()
            }
        },
        UpdateAim: function(a) {
            var b = a.viewX,
                a = a.viewY,
                c = new Ma;
            this.owner._compMap.Sprite_12.getViewMatrix().inverseTransform(b, a, c);
            b = c.x;
            a = c.y;
            a -= this.myCannon._compMap.Sprite_12.y._value;
            this.myCannon._compMap.CannonController_21.SetAimDir(b - this.myCannon._compMap.Sprite_12.x._value, a);
            this.UpdateLaserSight();
            return 0 > a
        },
        onMiss: function() {
            this.myRegrowthCounter--;
            this.owner._compMap.RegrowthCounterWidget_8.SetCounterValue(this.myRegrowthCounter, this.myRegrowthMaxInterval)
        },
        onUpdate: function() {
            this.myInputEnabled = !1;
            var a = this.myBubbleManager.Update();
            if (!this.myBubbleManager.IsAnimating() && (a == ia.LevelCompleted || nd.IsDown(f.Enter))) 0 == this.myLevel && (this.SetTutorialCompleted(), this.myExtraOrangeCount = 1), null == this.owner._compMap.NextLevelMenuWidget_25 && (this.myPlayerState.MoveToNextLevel(), this.owner.add(new sd(this.myPack, this.myFonts, D.TargetWidth / 2, D.TargetHeight / 2, this.myWinHandler, this.myLocalization)));
            a != ia.LevelCompleted && a != ia.LevelLost && (this.updateBubbleQueue(), this.myCannon._compMap.CannonController_21.UpdateAnimation());
            !this.myBubbleManager.IsAnimating() && null == this.owner._compMap.NextLevelMenuWidget_25 && null == this.myTutorialWidget && null == this.owner._compMap.PauseMenuWidget_22 && null == this.owner._compMap.BoosterMenuWidget_23 && null == this.owner._compMap.BoosterShopWidget_24 && !1 == this.myEnterLevelMessageActive && (a == ia.LevelLost ? null == this.myGameOverWidget && (a = this.myPack.getSound("sfx/game_over", !1), null != a && 0 < a.get_duration() && a.play(), this.myGameOverWidget = new od(t(this, this.RestartLevel), this.myLossHandler), this.owner.add(this.myGameOverWidget)) :
                0 >= this.myRegrowthCounter ? (this.myRegrowthInterval -= 1, 0 >= this.myRegrowthInterval && (this.myRegrowthInterval = this.myRegrowthMaxInterval), this.myRegrowthCounter = this.myRegrowthInterval, this.owner._compMap.RegrowthCounterWidget_8.SetCounterValue(this.myRegrowthCounter, this.myRegrowthMaxInterval), this.myBubbleManager.SpawnRegrowth()) : this.myCannon._compMap.CannonController_21.IsAnimating() || (this.myInputEnabled = !0));
            null != this.owner._compMap.NextLevelMenuWidget_25 || null != this.myTutorialWidget || null != this.owner._compMap.PauseMenuWidget_22 ||
                null != this.owner._compMap.BoosterMenuWidget_23 || null != this.owner._compMap.BoosterShopWidget_24 ? (this.myPauseButton._compMap.Sprite_12.set_visible(!1), this.myBoosterButton._compMap.Sprite_12.set_visible(!1)) : (this.myPauseButton._compMap.Sprite_12.set_visible(!0), i.BoostersEnabled() && this.myBoosterButton._compMap.Sprite_12.set_visible(!0))
        },
        updateBubbleQueue: function() {
            var a = this.myBubbleManager.GetAvailableBubbleTypes(),
                b = Sa.array(a),
                c = b.length;
            this.myCannon._compMap.CannonController_21.FilterBubbleQueue(a, !0);
            if (0 < c)
                for (; !1 == this.myCannon._compMap.CannonController_21.PushBubbleQueue(b[n.random(c)]););
        },
        __class__: D
    });
    var Ba = function() {
        k.call(this);
        this.myAnimations = new R
    };
    g["game.GardenItemAnimator"] = Ba;
    Ba.__name__ = ["game", "GardenItemAnimator"];
    Ba.__super__ = k;
    Ba.prototype = x(k.prototype, {
        get_name: function() {
            return "GardenItemAnimator_33"
        },
        onAdded: function() {
            k.prototype.onAdded.call(this);
            null == this.owner._compMap.Animator_10 && this.owner.add(new xa)
        },
        RegisterAnimation: function(a, b) {
            var c = this.myAnimations.get(a);
            null == c && (c = [], this.myAnimations.set(a, c));
            c.push(b)
        },
        OnEvent: function(a) {
            a = this.myAnimations.get(a);
            if (null != a)
                for (var b = this.owner._compMap.WidgetBindings_19, c = this.owner._compMap.Animator_10, e = 0; e < a.length;) {
                    var d = a[e];
                    ++e;
                    if ("shake-long" == d) d = b.GetNamedItem("item-sprite"), null != d && c.Play("_pos", G.ShakeHorizontally(d, 60, 1.5, 300)), d = b.GetNamedItem("wheel-sprite"), null != d && c.Play("_wheel", new Hb(new M(d.rotation, -3600, 0, 6))), d = b.GetNamedItem("pressure-meter-sprite1"), null != d && !c.IsPlaying("_pressure-meter1") &&
                        c.Play("_pressure-meter1", new Hb((new Ua([new M(d.rotation, d.rotation._value, 30, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 30, 20, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 20, 90, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 90, 40, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 40, 50, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 50, d.rotation._value, 0.5 + Math.random(), y.bounceInOut)])).SetIgnoreCancel(!0))), d = b.GetNamedItem("pressure-meter-sprite2"), null != d && !c.IsPlaying("_pressure-meter2") &&
                        c.Play("_pressure-meter2", new Hb((new Ua([new M(d.rotation, d.rotation._value, 30, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 30, 20, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 20, -90, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, -90, 40, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 40, 50, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 50, d.rotation._value, 0.5 + Math.random(), y.bounceInOut)])).SetIgnoreCancel(!0))), d = b.GetNamedItem("pressure-meter-sprite3"), null != d && !c.IsPlaying("_pressure-meter3") &&
                        c.Play("_pressure-meter3", new Hb((new Ua([new M(d.rotation, d.rotation._value, 30, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 30, 20, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 20, 90, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 90, -20, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, -20, 50, 0.5 + Math.random(), y.bounceInOut), new M(d.rotation, 50, d.rotation._value, 0.5 + Math.random(), y.bounceInOut)])).SetIgnoreCancel(!0))), d = b.GetNamedItem("juice-pour"), null != d && d.set_visible(!0);
                    else if ("clear" ==
                        d) c.Stop("_pos"), c.Stop("_wheel"), c.Stop("_pressure-meter1"), c.Stop("_pressure-meter2"), c.Stop("_pressure-meter3"), d = b.GetNamedItem("juice-pour"), null != d && d.set_visible(!1);
                    else if ("bounce-scale" == d) sa.TimeJumpActive || (d = b.GetNamedItem("item-sprite"), null != d ? c.Play("_scale", G.BounceScale(d, 1, 1.1, 0.2)) : null);
                    else if ("shrink-and-bounce" == d) {
                        if (!sa.TimeJumpActive)
                            if (d = b.GetNamedItem("item-sprite"), null != d) {
                                var f = d.y._value,
                                    g = f + 8;
                                c.Play("_scale", new Ua([new la([new M(d.scaleY, 1, 0.9, 0.15, y.circIn), new M(d.scaleX,
                                    1, 1.05, 0.15, y.circIn), new M(d.y, f, g, 0.15, y.circIn)]), new la([new M(d.scaleY, 0.9, 1, 0.1, y.expoOut), new M(d.scaleX, 1.05, 1, 0.1, y.expoOut), new M(d.y, g, f, 0.1, y.expoOut)])]))
                            } else null
                    } else if ("landing" == d) sa.TimeJumpActive || (d = b.GetNamedItem("item-sprite"), null != d ? (f = u.getBounds(d.owner), c.Play("_scale", new la([new Ua([G.Delay(0.05), G.Function(function() {
                        return N.Play("sfx/hit", 1)
                    })]), G.CreateWobbleSpriteAnimAnchored(d, 0.5 * f.width, f.height, 0.7, 0.5, 1, 13)]))) : null);
                    else break
                }
        },
        __class__: Ba
    });
    var cb = function(a,
        b, c, e, d, f) {
        this.myTimedCallbacks = new kd;
        this.myLastTimeStapTimer = cb.StoreTimeStampFreqSeconds;
        this.myHasCompletedTimeJump = !1;
        this.viewStack = [];
        var g = this;
        k.call(this);
        this.myPack = a;
        this.myStartLevelFn = f;
        this.myPlayerState = c;
        this.myStoredState = e;
        this.myFonts = b;
        this.myShowMainMenuFn = d;
        this.myLevelCompletedReactionTimer = 1;
        this.myRoot = new p;
        this.myRoot.add(new lb);
        this.myRoot.add(new z(a.getTexture("gfx/garden")));
        this.myRoot._compMap.Sprite_12.scissor = new qa(0, 0, D.TargetWidth, D.TargetHeight);
        this.myGardenRoot =
            new p;
        this.myRoot.addChild(this.myGardenRoot);
        this.myLowUiRoot = new p;
        this.myRoot.addChild(this.myLowUiRoot);
        this.myParticleRoot = new p;
        this.myRoot.addChild(this.myParticleRoot);
        this.myCharacterRoot = new p;
        this.myRoot.addChild(this.myCharacterRoot);
        this.viewSwitchTo("garden-view");
        this.myRoot._compMap.Disposer_20.add(this.myStoredState.balance.get_changed().connect(function() {
            g.ReloadAllWithName("balance")
        }));
        this.myRoot._compMap.Disposer_20.add(this.myStoredState.currentLevel.get_changed().connect(function() {
            g.ReloadAllWithName("level")
        }));
        a = this.myPlayerState.GetGardenItems();
        for (b = 0; b < a.length;) c = a[b], ++b, this.CreateGardenItem(c.id, c.x, c.y, c.stateId);
        this.myRoot._compMap.Disposer_20.add(o.hidden.get_changed().connect(function(a) {
            a || g.TimeJump()
        }))
    };
    g["game.GardenView"] = cb;
    cb.__name__ = ["game", "GardenView"];
    cb.__super__ = k;
    cb.prototype = x(k.prototype, {
        get_name: function() {
            return "GardenView_29"
        },
        registerActionHandlers: function(a) {
            var b = this;
            a.SetActionHandler("harvest", t(this, this.StartLevel));
            a.SetActionHandler("main-menu", this.myShowMainMenuFn);
            a.SetActionHandler("close", t(this, this.viewClose));
            a.SetActionHandlerWithMeta("overlay", function(a) {
                b.viewOverlay(a[0])
            });
            a.SetActionHandlerWithMeta("switch-to", function(a) {
                b.viewSwitchTo(a[0])
            });
            a.SetActionHandlerWithMeta("buy", function(a, b) {
                return function(d) {
                    return a(b, d)
                }
            }(t(this, this.OnTryBuy), a))
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        viewDataFetcher: function(a) {
            return "balance" == a ? "" + n.string(this.myPlayerState.Balance()) : "level" == a ? "" + this.myStoredState.currentLevel._value :
                "invalid key: " + a
        },
        viewSwitchTo: function(a) {
            for (var b = this; 0 < this.viewStack.length;) {
                var c = this.viewStack[this.viewStack.length - 1];
                c.dispose();
                B.remove(this.viewStack, c)
            }
            var e = new p;
            J.PopulateEnt(a, e, t(this, this.viewDataFetcher));
            this.registerActionHandlers(e._compMap.WidgetBindings_19);
            this.myRoot.addChild(e);
            if ("garden-view" == a) {
                var d = e._compMap.WidgetBindings_19.GetNamedItem("tutorial-layer");
                i.ShopEnabled() || e._compMap.WidgetBindings_19.GetNamedItem("shop-button").set_visible(!1);
                i.OnEnterGarden(this.myRoot,
                    function() {
                        Q.OnEnterGardenView(d)
                    }, t(this, this.PopulateInnerItem))
            }
            "shop" == a && (c = e._compMap.WidgetBindings_19.GetNamedItem("tutorial-layer"), Q.OnEnterShop(c), i.JuicerEnabled() || (c = e._compMap.WidgetBindings_19.GetNamedItem("shop-button.SHOP-PROCESSING"), null != c && c.set_visible(!1)));
            "shop-section.widget.SHOP-TREES" == a && (c = e._compMap.WidgetBindings_19.GetNamedItem("tutorial-layer"), Q.OnEnterShopTreeSection(c));
            c = function(a) {
                a = e._compMap.WidgetBindings_19.GetNamedItem(a);
                null != a && a._compMap.Sprite_12.set_visible(!1)
            }; -
            1 != a.indexOf("shop-section") && (i.JuicerEnabled() || c("shop-root.JUICER"), i.Juicer2Enabled() || c("shop-root.JUICER2"), i.IceCreamMakerEnabled() || c("shop-root.ICECREAMMAKER"), i.IceCreamMaker2Enabled() || c("shop-root.ICECREAMMAKER2"), i.Otree4Enabled() || c("shop-root.OTREE4"), i.Stand3Enabled() || c("shop-root.STAND3"));
            a = e._compMap.WidgetBindings_19.GetNamedItem("low-ui-layer");
            null != a && (this.myLowUiRoot.addChild(a), Qa.GetDisposer(e).add(a));
            ob.supported && !this.myPlayerState.HasCompletedEmailSignup().get__() &&
                (a = e._compMap.WidgetBindings_19.GetNamedItem("ad-space"), null != a && (c = new z(this.myPack.getTexture("gfx/email_coins_ad")), Qa.GetDisposer(a).add(c.get_pointerDown().connect(function(a) {
                    a._stopped = !0;
                    b.myRoot.add(new ob(function() {
                        var a = b.myPlayerState.Balance();
                        a.set__(a._value + 100);
                        b.myPlayerState.HasCompletedEmailSignup().set__(!0);
                        null
                    }))
                })), a.addChild((new p).add(c))));
            this.viewStack.push(e);
            return e
        },
        viewOverlay: function(a) {
            var b = this.myRoot;
            0 < this.viewStack.length && (b = this.viewStack[this.viewStack.length -
                1]);
            var c = new p;
            J.PopulateEnt(a, c, t(this, this.viewDataFetcher));
            this.registerActionHandlers(c._compMap.WidgetBindings_19);
            this.PopulateInnerItem(c);
            b.addChild(c);
            this.viewStack.push(c);
            return c
        },
        viewClose: function() {
            if (0 < this.viewStack.length) {
                var a = this.viewStack[this.viewStack.length - 1];
                a.dispose();
                B.remove(this.viewStack, a)
            }
            0 == this.viewStack.length && this.viewSwitchTo("garden-view")
        },
        ReloadAllWithName: function(a) {
            for (var b = 0, c = this.viewStack; b < c.length;) {
                var e = c[b];
                ++b;
                e._compMap.WidgetBindings_19.ReloadNamedItem(a)
            }
        },
        GetNamedItem: function(a, b) {
            for (var c = 0, e = this.viewStack; c < e.length;) {
                var d = e[c];
                ++c;
                d = d._compMap.WidgetBindings_19;
                if (a == d.widgetId) return d.GetNamedItem(b)
            }
            return null
        },
        StartLevel: function() {
            this.myStartLevelFn(this.myStoredState.currentLevel._value)
        },
        DoResourceAnim: function(a, b, c, e, d, f) {
            if (sa.TimeJumpActive) f();
            else {
                var g = 0.8 + 0.4 * Math.random(),
                    h = -15 + 30 * Math.random(),
                    w = h + 10 * Math.random(),
                    i = new p;
                i.add(new xa);
                i.add((new z(this.myPack.getTexture("gfx/res_part_" + a))).centerAnchor());
                i._compMap.Animator_10.Play("",
                    new la([G.MoveFromToJuicy(i._compMap.Sprite_12, g, b, c, e, d), new M(i._compMap.Sprite_12.rotation, h, w, g, y.circInOut)]),
                    function() {
                        f();
                        i.dispose()
                    });
                this.myParticleRoot.addChild(i)
            }
        },
        HandleResource: function(a, b, c) {
            var e = this;
            if ("cash" == a) {
                sa.TimeJumpActive || N.Play("sfx/coins");
                var d = this.GetNamedItem("garden-view", "balance-coin");
                if (null != d) {
                    var f = d.owner.parent._compMap.Sprite_12,
                        a = f.x._value + ca.centerX(d),
                        d = f.y._value + ca.centerY(d);
                    this.DoResourceAnim("cash", b, c, a, d, function() {
                        var a = e.myStoredState.balance;
                        a.set__(a._value + 1)
                    })
                } else b = this.myStoredState.balance, b.set__(b._value + 1)
            } else if ("cash_bundle" == a) sa.TimeJumpActive || N.Play("sfx/coins"), d = this.GetNamedItem("garden-view", "balance"), null != d ? (f = d.owner.parent._compMap.Sprite_12, a = f.x._value + ca.centerX(d), d = f.y._value + ca.centerY(d), this.DoResourceAnim("cash_bundle", b, c, a, d, function() {
                var a = e.myStoredState.balance;
                a.set__(a._value + qc.ContainsCount);
                sa.TimeJumpActive || N.Play("sfx/cash_count", 0.25)
            })) : (b = this.myStoredState.balance, b.set__(b._value +
                qc.ContainsCount));
            else {
                sa.TimeJumpActive || N.Play("sfx/orange", 0.25);
                for (var d = [], f = 0, g = this.myGardenRoot.firstChild; null != g;) {
                    var h = g._compMap.ResourceQueue_30;
                    if (null != h) {
                        var w = h.GetPriority(a),
                            i = h.GetNumAvailableSlots(a);
                        w >= f && 0 < i && (w > f && (f = w, d = []), d.push(h))
                    }
                    g = g.next
                }
                if (0 == d.length) this.myGardenRoot.addChild(Ub.Create(this.myPack, a, b, c, 90, 100 * (Math.random() - 0.5), 100 * (Math.random() - 0.5))), this.SortGardenItems();
                else {
                    var d = d[n.random(d.length)],
                        f = d.owner._compMap.Sprite_12,
                        k = d.ReserveSlot(a);
                    this.DoResourceAnim(a,
                        b, c, ca.centerX(f) + d.GetXOffset(a), ca.centerY(f) + d.GetYOffset(a),
                        function() {
                            k();
                            sa.TimeJumpActive || N.Play("sfx/enqueue", 0.6)
                        })
                }
            }
        },
        CreateGardenItem: function(a, b, c, e) {
            var d = this,
                f = new p;
            f.add(new sc);
            f.add((new u).setXY(b, c));
            f._compMap.WidgetBindings_19.SetActionHandlerWithMeta("init", function(a) {
                for (var b = 0; b < a.length;) {
                    var c = a[b];
                    ++b;
                    if (F.startsWith(c, "comp:")) {
                        var g = B.substr(c, 5, null),
                            h = g.split(";"),
                            c = h[0];
                        if ("resourceQueue" == c) {
                            c = h.slice(1);
                            g = new td(new ud(d.myStoredState, e));
                            for (f.add(g); 5 <= c.length;) {
                                var h =
                                    c[2],
                                    i = c[3],
                                    k = c[4];
                                g.AddQueue(c[0], n.parseInt(c[1]), n.parseInt(h), n.parseInt(i), n.parseInt(k));
                                c = c.slice(5)
                            }
                            g.changed.connect(function() {
                                var a = f._compMap.WidgetBindings_19;
                                null != a && (a.ReloadNamedItem("orange-queue-label"), a.ReloadNamedItem("juice-queue-label"), a.ReloadNamedItem("icecream-queue-label"))
                            });
                            g.Load()
                        } else if ("resourceConverter" == c) {
                            c = new vd;
                            f.add(c);
                            for (g = h.slice(1); 5 <= g.length;) {
                                var h = g[0],
                                    i = g[1],
                                    k = n.parseInt(g[2]),
                                    l = n.parseInt(g[3]),
                                    m = n.parseInt(g[4]),
                                    o = n.parseInt(g[5]),
                                    p = n.parseInt(g[6]);
                                c.Add(h, i, k, l, m, o, p);
                                g = g.slice(5)
                            }
                        } else if ("orangeMultiplier" == c) c = h.slice(1), c = n.parseInt(c[0]), c = new gb(c, new ud(d.myStoredState, e), d.myTimedCallbacks), f.add(c);
                        else if ("crowd" == c) {
                            if (!(null != f._compMap.Crowd_34 && f._compMap.Crowd_34.configString == g)) {
                                c = h.slice(1);
                                h = n.parseInt(c[0]);
                                i = n.parseInt(c[1]);
                                k = n.parseInt(c[2]);
                                l = n.parseFloat(c[3]);
                                m = n.parseFloat(c[4]);
                                c = c.slice(5);
                                h = new ld(d.myPack, h, i, k, l, m);
                                h.configString = g;
                                for (d.myCharacterRoot.addChild(h.renderRoot); 3 <= c.length;) g = c[0], i = n.parseInt(c[1]),
                                    k = n.parseFloat(c[2]), c = c.slice(3), h.AddResourceType(g, i, k);
                                f.add(h)
                            }
                        } else if ("animator" == c) {
                            c = new Ba;
                            for (g = h.slice(1); 0 < g.length;) h = g.shift(), i = g.shift(), c.RegisterAnimation(h, i);
                            f.add(c)
                        } else "out-of-stock-alt-img" == c ? (c = h.slice(1), c = new wd(d.myPack, c[0], c[1]), f.add(c)) : "resourceDisplayHider" == c && f.add(new xd)
                    } else null
                }
            });
            f._compMap.Sprite_12.get_pointerDown().connect(function() {
                var b = new p;
                J.PopulateEnt("garden." + a + ".details", b, null);
                d.PopulateInnerItem(b);
                b._compMap.WidgetBindings_19.SetActionHandler("close",
                    t(b, b.dispose));
                b._compMap.WidgetBindings_19.SetActionHandler("recycle", function() {
                    0 == a.indexOf("OTREE") && 1 == d.myPlayerState.GetTreeCount() ? (b.dispose(), d.viewOverlay("cannot-recycle-tree")) : 0 == a.indexOf("STAND") && 1 == d.myPlayerState.GetStandCount() ? (b.dispose(), d.viewOverlay("cannot-recycle-stand")) : (N.Play("sfx/swish", 0.8), null == f._compMap.Animator_10 && f.add(new xa), f._compMap.Animator_10.Play("", new la([G.FadeOut(f._compMap.Sprite_12, 0.2), G.MoveTo(f._compMap.Sprite_12, 0.2, f._compMap.Sprite_12.x._value,
                        f._compMap.Sprite_12.y._value - 50)]), function() {
                        d.myPlayerState.RemoveGardenItem(e);
                        f.dispose()
                    }), b.dispose())
                });
                b._compMap.WidgetBindings_19.SetActionHandler("move", function() {
                    b.dispose();
                    f._compMap.Sprite_12.set_visible(!1);
                    d.EnterMoveMode("garden." + a, f._compMap.Sprite_12.x._value, f._compMap.Sprite_12.y._value, function(a, b) {
                        var c = a | 0,
                            g = b | 0;
                        f._compMap.Sprite_12.set_visible(!0);
                        f._compMap.Sprite_12.x.set__(c);
                        f._compMap.Sprite_12.y.set__(g);
                        d.myPlayerState.MoveGardenItem(e, c, g);
                        d.SortGardenItems();
                        c = f._compMap.GardenItemAnimator_33;
                        null != c && c.OnEvent(Ba.EVENT_ITEM_MOVE_COMPLETED)
                    }, function() {
                        f._compMap.Sprite_12.set_visible(!0)
                    })
                });
                d.myRoot.addChild(b)
            });
            J.PopulateEnt("garden." + a, f, function(a) {
                var b = f._compMap.ResourceQueue_30;
                if (null != b) {
                    if ("orange-queue-length" == a || "orange-queue-max-length" == a) return "" + b.GetQueueLengthExReservedSlots("orange");
                    if ("juice-queue-length" == a || "juice-queue-max-length" == a) return "" + b.GetQueueLengthExReservedSlots("juice");
                    if ("icecream-queue-length" == a || "icecream-queue-max-length" ==
                        a) return "" + b.GetQueueLengthExReservedSlots("icecream")
                }
                return "invalid key: " + a
            });
            this.GardenItemAddAnimatedParts(f);
            this.myGardenRoot.addChild(f);
            this.SortGardenItems();
            return f
        },
        SortGardenItems: function() {
            Qa.sortChildren(this.myGardenRoot, function(a, b) {
                var c;
                c = a._compMap.LostResource_37;
                c = null != c ? c.myGroundPos : u.getBounds(a, cb._sortRectA).get_bottom();
                var e;
                e = b._compMap.LostResource_37;
                e = null != e ? e.myGroundPos + 0.5 * b._compMap.Sprite_12.getNaturalHeight() : u.getBounds(b, cb._sortRectB).get_bottom();
                return c >
                    e ? -1 : c < e ? 1 : 0
            })
        },
        GardenItemAddWheelIfApplicable: function(a) {
            var a = a._compMap.WidgetBindings_19,
                b = a.GetMetaF("wheel-x"),
                c = a.GetMetaF("wheel-y");
            if (!(null == b || null == b)) {
                var e = new p,
                    d = new z(this.myPack.getTexture("gfx/wheel"));
                d.centerAnchor();
                d.setXY(b, c);
                e.add(d);
                b = a.GetNamedItem("item-sprite");
                null != b && (b.owner.addChild(e), a.SetNamedItem("wheel-sprite", d, null))
            }
        },
        GardenItemAddPressureMeterIfApplicable: function(a) {
            for (var b = 1; 4 > b;) {
                var c = b++,
                    e = "pressure-meter" + c,
                    d = a._compMap.WidgetBindings_19,
                    f = d.GetMetaF(e +
                        "-x"),
                    g = d.GetMetaF(e + "-y");
                if (null == f || null == f) break;
                var e = new p,
                    h = new z(this.myPack.getTexture("gfx/wheel_2"));
                h.centerAnchor();
                h.setXY(f, g);
                h.setRotation(3 == c ? -40 : 55 * (c - 1));
                e.add(h);
                f = d.GetNamedItem("item-sprite");
                if (null == f) break;
                f.owner.addChild(e);
                d.SetNamedItem("pressure-meter-sprite" + c, h, null)
            }
        },
        GardenItemAddJuicePourIfApplicable: function(a) {
            var a = a._compMap.WidgetBindings_19,
                b = 1,
                c = a.GetMetaF("juice-pour-x"),
                e = a.GetMetaF("juice-pour-y");
            if (null == c || null == e) b = 2, c = a.GetMetaF("juice-pour2-x"),
                e = a.GetMetaF("juice-pour2-y");
            if (!(null == c || null == e)) {
                var d = new p,
                    b = new z(this.myPack.getTexture(1 == b ? "gfx/JUICER_JUICE" : "gfx/JUICER2_JUICE"));
                b.setXY(c, e);
                b.set_visible(!1);
                d.add(b);
                c = a.GetNamedItem("item-sprite");
                null != c && (c.owner.addChild(d), a.SetNamedItem("juice-pour", b, null))
            }
        },
        EnterMoveMode: function(a, b, c, e, d) {
            var f = this,
                g = this.viewSwitchTo("shop-select-position");
            null == g._compMap.Disposer_20 && g.add(new lb);
            var h = new p;
            J.PopulateEnt(a + ".move", h, null);
            this.GardenItemAddAnimatedParts(h);
            var i =
                100,
                k = D.TargetHeight - 200,
                l = function(a) {
                    var d = b + a;
                    320 > c && 526 < b + a && (Math.abs(c - 320) < Math.abs(d - 526) ? c = 320 : b = 526 - a)
                },
                a = h._compMap.WidgetBindings_19;
            null != a && (null != a.GetMetaF("min-y") && (i = a.GetMetaF("min-y")), null != a.GetMetaF("max-y") && (k = a.GetMetaF("max-y")));
            a = u.getBounds(h);
            0 > b && 0 > c && (b = D.TargetWidth / 2 - a.width / 2, c = D.TargetHeight / 2 - a.height / 2);
            c = P.LimitF(c, i, k - a.height);
            l(a.width);
            h.add((new u).setXY(b, c));
            var m = (new p).add(new Bb(16711680, 1, 1)),
                n = (new p).add(new Bb(16711680, 1, 1));
            m._compMap.Sprite_12.setAlpha(0.25);
            n._compMap.Sprite_12.setAlpha(0.25);
            m._compMap.Sprite_12.set_visible(!1);
            n._compMap.Sprite_12.set_visible(!1);
            m._compMap.Sprite_12.set_pointerEnabled(!1);
            n._compMap.Sprite_12.set_pointerEnabled(!1);
            g.addChild(m);
            g.addChild(n);
            g._compMap.WidgetBindings_19.GetNamedItem("item-layer").addChild(h);
            var q, a = g._compMap.WidgetBindings_19.GetNamedItem("tutorial-layer"),
                r = u.getBounds(h),
                v = new p,
                x = r.get_centerX() > D.TargetWidth / 2;
            v.add((new u).setXY(x ? r.x : r.get_right(), r.y));
            J.PopulateEnt(x ? "select-position-tut-left" :
                "select-position-tut-right", v, null);
            a.addChild(v);
            v.add(new xa);
            v._compMap.Animator_10.Play("", G.FadeIn(v._compMap.Sprite_12, 0.25));
            var z = !1;
            q = function() {
                z || (z = !0, v._compMap.Animator_10.Play("", G.FadeOut(v._compMap.Sprite_12, 0.5)))
            };
            var A = function() {
                    for (var a = function(a) {
                            a.x += 0.1 * a.width;
                            a.y += 0.1 * a.height;
                            a.width -= 0.2 * a.width;
                            a.height -= 0.2 * a.height;
                            return a
                        }, b = a(u.getBounds(h)), c = null, d = f.myGardenRoot.firstChild; null != d;) {
                        var e = d._compMap.WidgetBindings_19;
                        if (null != e && (e = e.GetNamedItem("item-sprite"), !(!1 == (0 != (d._compMap.Sprite_12._flags & 2)) || null == e)))
                            if (e = u.getBounds(e.owner), e.x = d._compMap.Sprite_12.x._value, e.y = d._compMap.Sprite_12.y._value, a(e), b.intersects(e)) {
                                c = e;
                                break
                            }
                        d = d.next
                    }
                    null == c ? (m._compMap.Sprite_12.set_visible(!1), n._compMap.Sprite_12.set_visible(!1), g._compMap.WidgetBindings_19.GetNamedItem("done").set_visible(!0), g._compMap.WidgetBindings_19.GetNamedItem("overlap-warning").set_visible(!1)) : (a = m._compMap.Sprite_12, a.set_visible(!0), a.setXY(b.x, b.y), a.setScaleXY(b.width, b.height),
                        b = n._compMap.Sprite_12, b.set_visible(!0), b.setXY(c.x, c.y), b.setScaleXY(c.width, c.height), g._compMap.WidgetBindings_19.GetNamedItem("done").set_visible(!1), g._compMap.WidgetBindings_19.GetNamedItem("overlap-warning").set_visible(!0))
                },
                y = new Ma,
                B = !1,
                a = (ya = g._compMap.Disposer_20, t(ya, ya.add));
            a(h._compMap.Sprite_12.get_pointerDown().connect(function(a) {
                B = !0;
                y.x = h._compMap.Sprite_12.x._value - o._platform.getPointer().get_x() / o.root._compMap.Sprite_12.scaleX._value;
                y.y = h._compMap.Sprite_12.y._value - o._platform.getPointer().get_y() /
                    o.root._compMap.Sprite_12.scaleX._value;
                a._stopped = !0
            }, !0));
            a(o._platform.getPointer().move.connect(function() {
                if (B) {
                    b = o._platform.getPointer().get_x() / o.root._compMap.Sprite_12.scaleX._value + y.x;
                    c = o._platform.getPointer().get_y() / o.root._compMap.Sprite_12.scaleY._value + y.y;
                    var a = u.getBounds(h);
                    b = P.LimitF(b, 10, D.TargetWidth - 10 - a.width);
                    c = P.LimitF(c, i, k - a.height);
                    l(a.width);
                    h._compMap.Sprite_12.setXY(b, c);
                    A();
                    q()
                }
            }));
            a(o._platform.getPointer().up.connect(function() {
                B = !1
            }));
            g._compMap.WidgetBindings_19.SetActionHandler("close",
                function() {
                    f.viewClose();
                    null != e && e(b, c)
                });
            g._compMap.WidgetBindings_19.SetActionHandler("cancel", function() {
                f.viewClose();
                null != d && d()
            });
            this.myRoot.addChild(g);
            A()
        },
        OnTryBuy: function(a, b) {
            var c = this;
            this.myPlayerState.Balance();
            var e = b[0],
                d = n.parseInt(b[1]);
            if (this.myPlayerState.Balance().get__() < d) {
                var f = a.GetNamedItem("balance"),
                    g = a.GetNamedItem("price-label." + e),
                    h = f.owner._compMap.Animator_10;
                null == h && (h = new xa, f.owner.add(h));
                h.Play("", new la([G.ShakeHorizontally(f, 0.5, 4, 7), G.ShakeHorizontally(g,
                    0.5, 4, 7)]))
            } else N.Play("sfx/coins", 0.6), Q.OnShopPurchase(), this.EnterMoveMode("garden." + e, -1, -1, function(a, b) {
                var f = c.myPlayerState.AddGardenItem(e, a | 0, b | 0),
                    f = c.CreateGardenItem(e, a | 0, b | 0, f),
                    g = c.myPlayerState.Balance();
                g.set__(g._value - d);
                f = f._compMap.GardenItemAnimator_33;
                null != f && f.OnEvent(Ba.EVENT_ITEM_MOVE_COMPLETED)
            }, function() {})
        },
        onAdded: function() {
            this.owner.addChild(this.myRoot)
        },
        onUpdate: function(a) {
            this.myHasCompletedTimeJump || (this.TimeJump(), this.myHasCompletedTimeJump = !0);
            0 >= this.myLastTimeStapTimer &&
                (this.myStoredState.gardenViewTimeStamp.set__(new Date), this.myLastTimeStapTimer = cb.StoreTimeStampFreqSeconds);
            for (this.myLastTimeStapTimer -= a;;) {
                var b = Ha.FetchMessage(qe);
                if (null == b) break;
                b.DoIt()
            }
            if (0 < this.myLevelCompletedReactionTimer) this.myLevelCompletedReactionTimer -= a;
            else if (null != Ha.FetchMessage(yd)) {
                for (var b = 0, c = this.myGardenRoot.firstChild; null != c;) null != c._compMap.OrangeMultiplier_32 && (b += 1), c = c.next;
                b *= 0.3;
                for (c = this.myGardenRoot.firstChild; null != c;) {
                    var e = c._compMap.OrangeMultiplier_32;
                    null != e && e.EnqueueSpawns(b, this.myTimedCallbacks);
                    c = c.next
                }
            }
            this.myTimedCallbacks.Update(a);
            do a = Ha.FetchMessage(wb), null != a && this.HandleResource(a.type, a.x, a.y); while (null != a)
        },
        GardenItemAddAnimatedParts: function(a) {
            this.GardenItemAddWheelIfApplicable(a);
            this.GardenItemAddJuicePourIfApplicable(a);
            this.GardenItemAddPressureMeterIfApplicable(a)
        },
        PopulateInnerItem: function(a) {
            a = a._compMap.WidgetBindings_19.GetNamedItem("inner-item");
            null != a && this.GardenItemAddAnimatedParts(a)
        },
        TimeJump: function() {
            sa.TimeJumpActive = !0;
            for (var a = 0.001 * ((new Date).getTime() - this.myStoredState.gardenViewTimeStamp._value.getTime()), a = P.LimitF(a, 0, 3600); 0 < a;) {
                var b = !1;
                this.myTimedCallbacks.Update(2);
                for (var c = this.myGardenRoot.firstChild; null != c;) {
                    var e = c._compMap.ResourceConverter_31;
                    null != e && (b = !0, e.onUpdate(2));
                    e = c._compMap.Crowd_34;
                    null != e && (b = !0, e.onUpdate(2));
                    c = c.next
                }
                do c = Ha.FetchMessage(wb), null != c && (b = !0, this.HandleResource(c.type, c.x, c.y)); while (null != c);
                if (!b) break;
                a -= 2
            }
            this.myStoredState.gardenViewTimeStamp.set__(new Date);
            sa.TimeJumpActive = !1;
            null
        },
        __class__: cb
    });
    var re = function() {};
    g["game.OutFloat"] = re;
    re.__name__ = ["game", "OutFloat"];
    re.prototype = {
        __class__: re
    };
    var Ia = function() {};
    g["game.LaserSight"] = Ia;
    Ia.__name__ = ["game", "LaserSight"];
    Ia.Show = function(a, b, c) {
        Ia.ClearRoot(b);
        for (var e = 140, d = new re, f = c.length - 1, g = 0; g < f;) {
            var h = g++;
            b.addChild(Ia.CreateLineFromTo(a, c[h], c[h + 1], e, d));
            e = d.val
        }
    };
    Ia.Hide = function(a) {
        Ia.ClearRoot(a)
    };
    Ia.ClearRoot = function(a) {
        for (var b = a.firstChild; null != b;) {
            var c = b.next;
            a.removeChild(b);
            Ia.myRecycledLines.push(b);
            b = c
        }
    };
    Ia.GetEnt = function(a) {
        if (0 < Ia.myRecycledLines.length) return Ia.myRecycledLines.pop();
        var b = new p;
        b.add(new eb(a.getTexture("gfx/aim_line")));
        return b
    };
    Ia.CreateLineFromTo = function(a, b, c, e, d) {
        var a = Ia.GetEnt(a),
            f = n.instance(a._compMap.Sprite_12, eb).texture.get_width(),
            g = n.instance(a._compMap.Sprite_12, eb).texture.get_height(),
            h = b.x - c.x,
            i = b.y - c.y,
            k = Math.sqrt(h * h + i * i),
            l = Math.max(0, k - e),
            g = Math.floor(l / g) * g,
            m = (c.x - b.x) / k,
            c = (c.y - b.y) / k;
        d.val = -(l - g);
        d = 180 / Math.PI * Math.atan2(h, -i);
        n.instance(a._compMap.Sprite_12, eb).setSize(f, g).setAnchor(f / 2, 0).setRotation(d).setXY(b.x + e * m, b.y + e * c);
        return a
    };
    var yd = function() {};
    g["game.LevelCompletedMsg"] = yd;
    yd.__name__ = ["game", "LevelCompletedMsg"];
    yd.prototype = {
        __class__: yd
    };
    var ba = g["game.TileMode"] = {
        __ename__: ["game", "TileMode"],
        __constructs__: ["Empty", "RandomBubble", "Orange", "Color", "Blocker"]
    };
    ba.Empty = ["Empty", 0];
    ba.Empty.toString = h;
    ba.Empty.__enum__ = ba;
    ba.RandomBubble = ["RandomBubble", 1];
    ba.RandomBubble.toString = h;
    ba.RandomBubble.__enum__ =
        ba;
    ba.Orange = ["Orange", 2];
    ba.Orange.toString = h;
    ba.Orange.__enum__ = ba;
    ba.Color = function(a) {
        a = ["Color", 3, a];
        a.__enum__ = ba;
        a.toString = h;
        return a
    };
    ba.Blocker = ["Blocker", 4];
    ba.Blocker.toString = h;
    ba.Blocker.__enum__ = ba;
    ba.__empty_constructs__ = [ba.Empty, ba.RandomBubble, ba.Orange, ba.Blocker];
    var se = function() {
        this.numRows = null;
        this.blockerCount = 0;
        this.reloaded = new rb
    };
    g["game.LevelDetails"] = se;
    se.__name__ = ["game", "LevelDetails"];
    se.prototype = {
        __class__: se
    };
    var te = function(a) {
        this.myLevels = new Na;
        this.myAssets =
            a;
        this.myScriptHandler = new zd;
        this.ReloadScript(0, 0)
    };
    g["game.LevelDetailsLoader"] = te;
    te.__name__ = ["game", "LevelDetailsLoader"];
    te.prototype = {
        ReloadScript: function() {
            var a = this;
            this.myScriptHandler.SetFunctionSimple("level", function(b) {
                for (var c = b.iterator(), b = r.GetIntOrThrow(c.next()), e = r.GetExpressionOrThrow(c.next()).iterator(), d = [], f = function(a, b) {
                        var c = new L(b);
                        d.push(function(b, d) {
                            b == a && (c.ref = r.GetStringOrThrow(d))
                        });
                        return c
                    }, g = function(a, b) {
                        var c = new L(b);
                        d.push(function(b, d) {
                            b == a && (c.ref =
                                r.GetIntOrThrow(d))
                        });
                        return c
                    }, c = g("blocker-count", 0), h = f("enabled-colors", ""), i = g("num-rows", 0), f = f("format", null), k = g("near-border-allowed", 0), g = g("regrowth-interval", 6); e.hasNext();)
                    for (var l = r.GetStringOrThrow(e.next()), m = e.next(), n = 0; n < d.length;) {
                        var o = d[n];
                        ++n;
                        o(l, m)
                    }
                e = a.myLevels.get(b);
                null == e && (e = new se, a.myLevels.set(b, e));
                e.enabledColors = a.ParseEnabledColors(h.ref);
                e.blockerCount = c.ref;
                e.numRows = i.ref;
                e.nearBorderAllowed = 0 != k.ref;
                e.regrowthInterval = g.ref;
                e.format = null != f.ref ? a.ParseFormat(f.ref) :
                    null;
                e.reloaded.emit()
            });
            this.myScriptHandler.Run("", this.LoadHardcoded())
        },
        LoadHardcoded: function() {
            var a = function() {
                    var a = new Ka,
                        b = null;
                    return b = function(c) {
                        if (null == c) return a;
                        a.add(c);
                        return b
                    }
                },
                b = A.Expr,
                c = function(a) {
                    return A.Atom(v.Num(a))
                },
                e = function(a) {
                    return A.Atom(v.Str(a))
                },
                d = function(a) {
                    return A.Atom(v.Identifier(a))
                };
            A.Atom(v.Nil);
            A.Atom(v.Quote);
            return b(a()(d("do"))(b(a()(d("'"))(e("HELPER MACROS"))(null)))(b(a()(d("macro"))(d("def-level-g-exp"))(b(a()(d("num"))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(d("near-border-allowed"))(null)))(b(a()(d("level"))(d("num"))(b(a()(d("list"))(e("blocker-count"))(d("blocker-count"))(e("enabled-colors"))(d("colors"))(e("num-rows"))(d("rows"))(e("regrowth-interval"))(d("regrowth-interval"))(e("near-border-allowed"))(d("near-border-allowed"))(null)))(null)))(null)))(b(a()(d("macro"))(d("def-level-g"))(b(a()(d("num"))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(null)))(b(a()(d("def-level-g-exp"))(d("num"))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(c(1))(null)))(null)))(b(a()(d("macro"))(d("def-levels-g"))(b(a()(d("numbers"))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(null)))(b(a()(d("do"))(b(a()(d("def-level-g"))(b(a()(d("head"))(d("numbers"))(null)))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(null)))(b(a()(d("unless-empty"))(b(a()(d("tail"))(d("numbers"))(null)))(b(a()(d("def-levels-g"))(b(a()(d("tail"))(d("numbers"))(null)))(d("rows"))(d("colors"))(d("blocker-count"))(d("regrowth-interval"))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("def-level-f"))(b(a()(d("num"))(d("colors"))(d("regrowth-interval"))(d("format"))(null)))(b(a()(d("level"))(d("num"))(b(a()(d("list"))(e("blocker-count"))(c(0))(e("enabled-colors"))(d("colors"))(e("regrowth-interval"))(d("regrowth-interval"))(e("format"))(d("format"))(null)))(null)))(null)))(b(a()(d("'"))(e("LEVELS"))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(5))(c(6))(null)))(c(5))(e("0123"))(c(0))(c(5))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(7))(c(8))(null)))(c(6))(e("0123"))(c(0))(c(5))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(9))(c(10))(null)))(c(7))(e("0123"))(c(0))(c(5))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(11))(c(12))(null)))(c(5))(e("01234"))(c(1))(c(5))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(13))(c(14))(null)))(c(5))(e("01234"))(c(1))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(16))(c(17))(null)))(c(5))(e("01234"))(c(1))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(19))(c(20))(null)))(c(6))(e("01234"))(c(4))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(21))(c(22))(null)))(c(6))(e("01234"))(c(4))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(23))(c(25))(null)))(c(6))(e("01234"))(c(4))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(26))(c(27))(null)))(c(5))(e("01234"))(c(6))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(28))(c(40))(null)))(c(6))(e("01234"))(c(5))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(40))(c(50))(null)))(c(7))(e("01234"))(c(6))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(60))(c(70))(null)))(c(7))(e("01234"))(c(7))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(70))(c(76))(null)))(c(5))(e("01234"))(c(7))(c(3))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(76))(c(79))(null)))(c(8))(e("01234"))(c(7))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(79))(c(80))(null)))(c(7))(e("01234"))(c(7))(c(4))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(80))(c(90))(null)))(c(6))(e("01234"))(c(7))(c(3))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(90))(c(110))(null)))(c(6))(e("01234"))(c(8))(c(3))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(110))(c(120))(null)))(c(7))(e("01234"))(c(8))(c(3))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(120))(c(130))(null)))(c(8))(e("01234"))(c(8))(c(3))(null)))(b(a()(d("def-levels-g"))(b(a()(d("range"))(c(130))(c(140))(null)))(c(9))(e("01234"))(c(8))(c(3))(null)))(b(a()(d("def-level-f"))(c(2))(e("012"))(c(6))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bb  o  bb"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(3))(e("012"))(c(6))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(null)))(null)))(b(a()(d("def-level-f"))(c(4))(e("012"))(c(6))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bb bb  bb"))(e("bb  o  bb"))(e("bbb  bbbb"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(6))(e("0123"))(c(5))(b(a()(d("str"))(e(" bbbbbbbb"))(e("bb    obb"))(e("bb     bb"))(e("bb    bbb"))(e("bbbbbbbbb"))(e("bbbbbbbb "))(e("  bbbbb  "))(null)))(null)))(b(a()(d("def-level-f"))(c(8))(e("0123"))(c(5))(b(a()(d("str"))(e("bbbbbbbbb"))(e("b b o b b"))(e("b b b b b"))(e("b b b b b"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(10))(e("0123"))(c(4))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(e("bbobbbbbb"))(e("bbbbbbbbb"))(e("       b "))(e("      b  "))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(12))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbbbbbb"))(e("b b o b b"))(e("b b b b b"))(e("b b b b b"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(14))(e("01234"))(c(5))(b(a()(d("str"))(e("b b b b b"))(e("bbbbbbbbb"))(e("bbbbbobbb"))(e("bbbbbbbbb"))(e("  X    X "))(e("  X   X  "))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(15))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("bbbobbbb "))(e("bbbbbbbbb"))(e("  bbb    "))(e("   b     "))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(17))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("b b  b b "))(e("b  bob  b"))(e("b b  b b "))(e(" bb   bb "))(e("b b  b b "))(e("b  bbb  b"))(e("bbb  bbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(18))(e("01234"))(c(5))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(e("  bbbbb  "))(e(" bbbbbb  "))(e(" bbbbbbb "))(e("bbbbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(20))(e("01234"))(c(5))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bbbobbbbb"))(e("bbbbbbbbb"))(e("bbbbbXXXX"))(null)))(null)))(b(a()(d("def-level-f"))(c(22))(e("01234"))(c(5))(b(a()(d("str"))(e("bbbbXbbbb"))(e("bbbXXbbbo"))(e("bbbXXXbbb"))(e("bb    bbb"))(e("bb     bb"))(e("b      bb"))(e("b       b"))(null)))(null)))(b(a()(d("def-level-f"))(c(25))(e("01234"))(c(5))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(e("  bbbbb  "))(e(" bbbbbb  "))(e(" bXbbbbb "))(e("bbbbbXbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(27))(e("01234"))(c(5))(b(a()(d("str"))(e(" bbbbbbb "))(e("bb    obb"))(e("bb     bb"))(e("bbb  bbbb"))(e("bbbbbbbbb"))(e("X b X b X"))(e("b X b X b"))(null)))(null)))(b(a()(d("def-level-f"))(c(30))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("b b  b b "))(e("b  bob  b"))(e("b b  b b "))(e(" bb   bb "))(e("b b  b b "))(e("b  bbb  b"))(e("bbb  bbb "))(e("bbb  bbbb"))(e("  bbb    "))(null)))(null)))(b(a()(d("def-level-f"))(c(33))(e("01234"))(c(5))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(35))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("bb  b  bb"))(e("bb  o  bb"))(e("bbb   bbb"))(e("bbbbbbbbb"))(e("X b X b X"))(e("b X b X b"))(null)))(null)))(b(a()(d("def-level-f"))(c(36))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbXbbbb"))(e("bbbXXbbbo"))(e("bbbXXXbbb"))(e("bb    bbb"))(e("bb     bX"))(e("X      bb"))(e("b       b"))(null)))(null)))(b(a()(d("def-level-f"))(c(37))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbXbbbb"))(e("bbbXXbbbo"))(e("bbbXXXbbb"))(e("bbXXXXbbb"))(e("bb     bX"))(e("X      bb"))(e("b       b"))(null)))(null)))(b(a()(d("def-level-f"))(c(40))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bbbobbbbb"))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(e("bbbbbXXXX"))(null)))(null)))(b(a()(d("def-level-f"))(c(42))(e("01234"))(c(3))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(44))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bXXbbbobb"))(e("bbbbbbbbb"))(e("bbbXXbbbb"))(e("bbbbbbbbb"))(e("bbbbXXbXX"))(null)))(null)))(b(a()(d("def-level-f"))(c(48))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("b b  b b "))(e("X  bob  X"))(e("b b  b b "))(e(" Xb   bX "))(e("b b  b b "))(e("b  XbX  b"))(e("bbb  bbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(50))(e("01234"))(c(4))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(e("  bbXbb  "))(e(" bbbbbb  "))(e(" XbbXbbX "))(e("bbbbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(54))(e("01234"))(c(5))(b(a()(d("str"))(e(" bbbbbbb "))(e("bb  b  bb"))(e("bb  o  bb"))(e("bbb   bbb"))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(e("b X X X b"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(56))(e("01234"))(c(5))(b(a()(d("str"))(e("XbbbbbbbX"))(e("XbbbbbobX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(null)))(null)))(b(a()(d("def-level-f"))(c(59))(e("01234"))(c(4))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(60))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("b b  b b "))(e("b  bob  b"))(e("b b  b b "))(e(" bb   bb "))(e("b b  b b "))(e("b  bbb  b"))(e("bbb  bbb "))(e("   bbb   "))(null)))(null)))(b(a()(d("def-level-f"))(c(63))(e("01234"))(c(5))(b(a()(d("str"))(e("XbbbbbbbX"))(e("XbbbobbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(null)))(null)))(b(a()(d("def-level-f"))(c(66))(e("01234"))(c(3))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(e("bbobbbbbb"))(e("bbbbbbbbb"))(e("       b "))(e("      b  "))(e("bbbbbbbbb"))(e("bXbXbXbXb"))(null)))(null)))(b(a()(d("def-level-f"))(c(70))(e("01234"))(c(3))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbXbbb  "))(e("  bbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(73))(e("01234"))(c(4))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(e("  bbXbb  "))(e(" bbbbbb  "))(e(" XbbXbbX "))(e("bbbbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(74))(e("01234"))(c(3))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bXXbbbobb"))(e("bbbbbbbbb"))(e("bbbXXbbbb"))(e("bbbbbbbbb"))(e("bbbbXXbXX"))(null)))(null)))(b(a()(d("def-level-f"))(c(78))(e("01234"))(c(4))(b(a()(d("str"))(e("bbbbbbbbb"))(e("bXXbbbobb"))(e("bb  X  bb"))(e("bbbXXbbbb"))(e("bbbbbbbbb"))(e("bbbbXXbXX"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(80))(e("01234"))(c(4))(b(a()(d("str"))(e(" bbbbbbb "))(e("bb  b  bb"))(e("bb  o  bb"))(e("bbb   bbb"))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(e("b X X X b"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(81))(e("01234"))(c(4))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bXbXbX "))(e(" bbbbbb  "))(e("  bXXXXb "))(e(" bbbbbb  "))(e("  bXXXXb "))(e(" bbbbbb  "))(null)))(null)))(b(a()(d("def-level-f"))(c(84))(e("01234"))(c(4))(b(a()(d("str"))(e("  bbbbbb "))(e(" bbbobb  "))(e("  bbbbbb "))(e(" bbbbbb  "))(e("  bbbbbb "))(e(" bbbXbb  "))(e("  bbXXbb "))(e(" bbbXbb  "))(null)))(null)))(b(a()(d("def-level-f"))(c(90))(e("01234"))(c(2))(b(a()(d("str"))(e(" bbbbbbb "))(e("b b  b b "))(e("b  bob  b"))(e("b b  b b "))(e(" bb   bb "))(e("b b  b b "))(e("b  bbb  b"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(94))(e("01234"))(c(3))(b(a()(d("str"))(e("   bbb   "))(e("  bbob   "))(e("  bbXbb  "))(e(" bbbbbb  "))(e(" XbbXbbX "))(e("bbbbbbbb "))(e("bbbbbbbbb"))(e("bbbbbbbbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(95))(e("01234"))(c(3))(b(a()(d("str"))(e("   bbb   "))(e("  bbob   "))(e("  bbXbb  "))(e(" bbbbbb  "))(e(" XbbXbbX "))(e("bbbbbbbb "))(e("bXbbbbbbb"))(e("bbbXbbbbb"))(e("bbbbbbXbb"))(null)))(null)))(b(a()(d("def-level-f"))(c(105))(e("01234"))(c(3))(b(a()(d("str"))(e("XbbbbbbbX"))(e("XbbbobbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(null)))(null)))(b(a()(d("def-level-f"))(c(120))(e("01234"))(c(3))(b(a()(d("str"))(e("    b    "))(e("   bo    "))(e("   bbb   "))(e("  bbbb   "))(e("  bbXbb  "))(e(" bbbbbb  "))(e(" XbbXbbX "))(e("bbbbbbbb "))(null)))(null)))(b(a()(d("def-level-f"))(c(130))(e("01234"))(c(3))(b(a()(d("str"))(e("XbbbbbbbX"))(e("XbbbobbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(e("XbbbbbbbX"))(null)))(null)))(null))
        },
        Load: function(a) {
            return this.myLevels.get(a)
        },
        ParseFormat: function(a) {
            for (var b = [], c = a.length, e = 0; e < c;) {
                var d = e++;
                switch (a.charAt(d)) {
                    case "b":
                        b.push(ba.RandomBubble);
                        break;
                    case "X":
                        b.push(ba.Blocker);
                        break;
                    case " ":
                        b.push(ba.Empty);
                        break;
                    case "o":
                        b.push(ba.Orange);
                        break;
                    default:
                        null
                }
            }
            return b
        },
        ParseEnabledColors: function(a) {
            for (var b = [], c = function(a, c) {
                    "" + a == c && -1 == b.indexOf(a) && b.push(a)
                }, e = a.length, d = 0; d < e;) {
                var f = d++,
                    f = a.charAt(f);
                c(0, f);
                c(1, f);
                c(2, f);
                c(3, f);
                c(4, f)
            }
            return b
        },
        __class__: te
    };
    var ue =
        function(a, b) {
            var c = this,
                e = a.getFile("loc/loc.json"),
                d;
            e.get_reloadCount().watch(function() {
                try {
                    d = Re.parse(e.toString())
                } catch (a) {
                    return
                }
                var f = O.field(d, b),
                    g = O.fields(f);
                c.myLocalizationTable = new R;
                for (var h = 0; h < g.length;) {
                    var i = g[h];
                    ++h;
                    var k = O.field(f, i);
                    c.myLocalizationTable.set(i, k);
                    k
                }
            })
        };
    g["game.Localization"] = ue;
    ue.__name__ = ["game", "Localization"];
    ue.prototype = {
        Get: function(a) {
            if (null == this.myLocalizationTable) throw "Localization table not loaded";
            if (!this.myLocalizationTable.exists(a)) throw "Localization key missing: " +
                a;
            return this.myLocalizationTable.get(a)
        },
        GetI: function(a, b) {
            var c = this.Get(a),
                e = c.indexOf("__i__");
            return -1 == e ? c : B.substr(c, 0, e) + b + B.substr(c, e + 5, null)
        },
        __class__: ue
    };
    var Ub = function(a, b, c) {
        this.myDidHitGround = !1;
        this.myLifeTimer = 4;
        k.call(this);
        this.myHeight = a;
        this.myVelX = b;
        this.myVelY = c
    };
    g["game.LostResource"] = Ub;
    Ub.__name__ = ["game", "LostResource"];
    Ub.Create = function(a, b, c, e, d, f, g) {
        return (new p).add((new z(a.getTexture("gfx/res_part_" + b))).centerAnchor().setXY(c, e)).add(new Ub(d, f, g))
    };
    Ub.__super__ =
        k;
    Ub.prototype = x(k.prototype, {
        get_name: function() {
            return "LostResource_37"
        },
        onAdded: function() {
            k.prototype.onAdded.call(this);
            this.myGroundPos = this.owner._compMap.Sprite_12.y._value + this.myHeight
        },
        onUpdate: function(a) {
            var b = this.owner._compMap.Sprite_12,
                c = b.x;
            c.set__(c._value + this.myVelX * a);
            c = b.y;
            c.set__(c._value + this.myVelY * a);
            this.myVelY += 700 * a;
            b.y._value > this.myGroundPos && (b.y.set__(this.myGroundPos), this.myVelY *= -0.2, this.myVelX *= 0.5, this.myDidHitGround || (b.rotation.animateTo(0 > this.myVelX ? -90 :
                90, 0.3 * Math.random()), this.myDidHitGround = !0));
            this.myLifeTimer -= a;
            0 >= this.myLifeTimer ? this.owner.dispose() : 0.5 > this.myLifeTimer && b.alpha.set__(y.circOut(2 * this.myLifeTimer))
        },
        __class__: Ub
    });
    var l = function() {};
    g["game.Main"] = l;
    l.__name__ = ["game", "Main"];
    l.main = function() {
        o.init();
        tc.Init();
        var a = La.fromAssets("preloader");
        o._platform.loadAssetPack(a).get(l.onSuccess);
        o.root.add(new u).add((new Xc).setSize(D.TargetWidth, D.TargetHeight));
        o._platform.getStage().resize.connect(l.onResize);
        o._platform.getStage().get_fullscreenSupported() &&
            o._platform.getStage().requestFullscreen();
        o._platform.getStage().lockOrientation(Oa.Portrait);
        o._platform.getStage().orientation.watch(l.OnOrientationChange);
        l.onResize()
    };
    l.OnOrientationChange = function(a) {
        a == Oa.Landscape && null;
        l.ShowRotateDeviceImageIfNeeded()
    };
    l.ShowRotateDeviceImageIfNeeded = function() {
        if (null != l.myBootstrapAssets) {
            if (null == o._platform.getStage().orientation._value || o._platform.getStage().orientation._value == Oa.Portrait) {
                if (null != l.myRotateDeviceScene) {
                    l.myRotateDeviceScene = null;
                    o.root._compMap.Director_13.popScene();
                    l.onResize();
                    l.RefreshScissor();
                    return
                }
            } else null == l.myRotateDeviceScene && (l.myRotateDeviceScene = Se.Create(l.myBootstrapAssets), o.root._compMap.Director_13.pushScene(l.myRotateDeviceScene), l.RefreshScissor());
            l.onResize()
        }
    };
    l.onSuccess = function(a) {
        l.myPreloaderAssets = a;
        o.root.add(new Ad(a.getTexture("bg")));
        l.myPreloader = (new p).add(new Bd(a, l.OnPreloaderCompleted));
        l.ShowScene(l.myPreloader, !1)
    };
    l.OnPreloaderCompleted = function(a) {
        var b = new dd(a);
        b.addAtlasEx("gfx/atlas_ingame", [{
            path: "gfx/aim_line",
            x: 0,
            y: 0,
            width: 13,
            height: 40
        }, {
            path: "gfx/bubble_black",
            x: 14,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_blue",
            x: 93,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_green",
            x: 172,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_icon",
            x: 251,
            y: 0,
            width: 32,
            height: 32
        }, {
            path: "gfx/bubble_icon_crossed",
            x: 284,
            y: 0,
            width: 32,
            height: 32
        }, {
            path: "gfx/bubble_match_any",
            x: 317,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_pink",
            x: 396,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_purple",
            x: 475,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_red",
            x: 554,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/bubble_yellow",
            x: 633,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/button_booster",
            x: 712,
            y: 0,
            width: 111,
            height: 111
        }, {
            path: "gfx/button_pause",
            x: 824,
            y: 0,
            width: 111,
            height: 111
        }, {
            path: "gfx/cannon",
            x: 0,
            y: 79,
            width: 115,
            height: 229
        }, {
            path: "gfx/deathline",
            x: 116,
            y: 112,
            width: 750,
            height: 6
        }, {
            path: "gfx/orange",
            x: 936,
            y: 0,
            width: 78,
            height: 78
        }, {
            path: "gfx/particle1",
            x: 251,
            y: 33,
            width: 64,
            height: 64
        }, {
            path: "gfx/pop_circle",
            x: 116,
            y: 119,
            width: 230,
            height: 230
        }]);
        b.addAtlasEx("gfx/atlas_0", [{
                path: "gfx/arrow",
                x: 0,
                y: 0,
                width: 155,
                height: 124
            }, {
                path: "gfx/boostermenu_numberbox",
                x: 156,
                y: 0,
                width: 45,
                height: 45
            }, {
                path: "gfx/booster_aim",
                x: 202,
                y: 0,
                width: 122,
                height: 122
            }, {
                path: "gfx/booster_match_any",
                x: 325,
                y: 0,
                width: 122,
                height: 122
            }, {
                path: "gfx/button_150x60",
                x: 448,
                y: 0,
                width: 150,
                height: 60
            }, {
                path: "gfx/button_300x80",
                x: 599,
                y: 0,
                width: 300,
                height: 80
            }, {
                path: "gfx/button_again",
                x: 448,
                y: 61,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_back",
                x: 596,
                y: 81,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_credits",
                x: 900,
                y: 0,
                width: 110,
                height: 110
            }, {
                path: "gfx/button_gamepad",
                x: 744,
                y: 81,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_home",
                x: 156,
                y: 123,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_options",
                x: 0,
                y: 125,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_play",
                x: 304,
                y: 229,
                width: 308,
                height: 308
            }, {
                path: "gfx/button_play_small",
                x: 613,
                y: 229,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_sound_off",
                x: 761,
                y: 229,
                width: 147,
                height: 147
            }, {
                path: "gfx/button_sound_on",
                x: 148,
                y: 271,
                width: 147,
                height: 147
            }, {
                path: "gfx/customer1",
                x: 0,
                y: 273,
                width: 114,
                height: 196
            }, {
                path: "gfx/customer2",
                x: 613,
                y: 377,
                width: 140,
                height: 194
            },
            {
                path: "gfx/customer3",
                x: 909,
                y: 111,
                width: 113,
                height: 206
            }, {
                path: "gfx/customer4",
                x: 909,
                y: 318,
                width: 113,
                height: 206
            }, {
                path: "gfx/ICECREAMMAKER",
                x: 754,
                y: 377,
                width: 125,
                height: 149
            }, {
                path: "gfx/ICECREAMMAKER2",
                x: 115,
                y: 419,
                width: 149,
                height: 182
            }, {
                path: "gfx/inv_label_bg",
                x: 304,
                y: 123,
                width: 69,
                height: 47
            }, {
                path: "gfx/JUICER",
                x: 754,
                y: 527,
                width: 201,
                height: 137
            }, {
                path: "gfx/JUICER2",
                x: 265,
                y: 538,
                width: 222,
                height: 154
            }, {
                path: "gfx/JUICER2_JUICE",
                x: 156,
                y: 46,
                width: 39,
                height: 46
            }, {
                path: "gfx/JUICER_JUICE",
                x: 1011,
                y: 0,
                width: 7,
                height: 11
            },
            {
                path: "gfx/orderbubble",
                x: 0,
                y: 470,
                width: 95,
                height: 74
            }, {
                path: "gfx/OTREE",
                x: 488,
                y: 572,
                width: 127,
                height: 167
            }, {
                path: "gfx/OTREE2",
                x: 0,
                y: 602,
                width: 149,
                height: 166
            }, {
                path: "gfx/OTREE3",
                x: 616,
                y: 572,
                width: 82,
                height: 188
            }, {
                path: "gfx/OTREE4",
                x: 699,
                y: 665,
                width: 156,
                height: 143
            }, {
                path: "gfx/OTREE5",
                x: 150,
                y: 693,
                width: 173,
                height: 147
            }, {
                path: "gfx/res_part_cash",
                x: 374,
                y: 123,
                width: 30,
                height: 30
            }, {
                path: "gfx/res_part_cash_bundle",
                x: 156,
                y: 93,
                width: 45,
                height: 27
            }, {
                path: "gfx/res_part_icecream",
                x: 405,
                y: 123,
                width: 30,
                height: 40
            }, {
                path: "gfx/res_part_juice",
                x: 374,
                y: 154,
                width: 18,
                height: 41
            }, {
                path: "gfx/res_part_orange",
                x: 393,
                y: 164,
                width: 32,
                height: 32
            }, {
                path: "gfx/STAND",
                x: 324,
                y: 761,
                width: 333,
                height: 154
            }, {
                path: "gfx/STAND2",
                x: 658,
                y: 809,
                width: 304,
                height: 150
            }, {
                path: "gfx/STAND3",
                x: 0,
                y: 841,
                width: 304,
                height: 150
            }, {
                path: "gfx/STAND3_display_icecream",
                x: 0,
                y: 545,
                width: 94,
                height: 55
            }, {
                path: "gfx/STAND3_display_juice",
                x: 150,
                y: 602,
                width: 85,
                height: 61
            }, {
                path: "gfx/STAND3_display_orange",
                x: 856,
                y: 665,
                width: 94,
                height: 55
            }, {
                path: "gfx/STAND_display_icecream",
                x: 324,
                y: 693,
                width: 94,
                height: 55
            }, {
                path: "gfx/STAND_display_juice",
                x: 856,
                y: 721,
                width: 85,
                height: 61
            }, {
                path: "gfx/STAND_display_orange",
                x: 0,
                y: 769,
                width: 94,
                height: 55
            }, {
                path: "gfx/wheel",
                x: 956,
                y: 525,
                width: 64,
                height: 64
            }, {
                path: "gfx/wheel_2",
                x: 304,
                y: 171,
                width: 23,
                height: 23
            }
        ]);
        l.myBootstrapAssets = b;
        l.mySoundEnabled = new ga(o._platform.getStorage().get("soundEnabled", !0));
        l.mySoundEnabled.get_changed().connect(l.SoundEnabledChanged);
        l.InternalSetSoundEnabled(l.mySoundEnabled._value);
        N.Init(l.myBootstrapAssets, null);
        hb.Init(l.myBootstrapAssets);
        l.myLocalization = new ue(a, "en");
        l.myFonts = new oe;
        l.myFonts.Normal = new Cb(a, "fonts/ubuntu");
        l.myFonts.Small = new Cb(a, "fonts/ubuntu_small");
        J.Init(l.myBootstrapAssets, l.myFonts, l.myLocalization, "scripts/widgets.lsp");
        l.myStoredState = new ve;
        l.myStoredState.Initialize();
        l.myPlayerState = new we(l.myStoredState);
        Q.Init(l.myStoredState);
        i.Init(l.myStoredState);
        l.myLevelDetailsLoader = new te(l.myBootstrapAssets);
        l.LoadMainMenu();
        l.ShowRotateDeviceImageIfNeeded()
    };
    l.InternalSetSoundEnabled = function(a) {
        o.volume.set__(a ?
            1 : 0)
    };
    l.SoundEnabledChanged = function(a) {
        o._platform.getStorage().set("soundEnabled", a);
        l.InternalSetSoundEnabled(a);
        l.StartBgMusicIfNeeded()
    };
    l.ShowScene = function(a) {
        var b = new Yc(0.5, y.circIn);
        o.root._compMap.Director_13.unwindToScene(a, b);
        l.RefreshScissor(null != a._compMap.GameSceneController_4)
    };
    l.StartBgMusicIfNeeded = function() {
        N.Loop("sfx/ingame", 0.4)
    };
    l.OnMainMenuAction = function(a) {
        a == Va.Start && (l.StartBgMusicIfNeeded(), l.ShowGardenView());
        a == Va.MoreGames && o._platform.getWeb().openBrowser("#")
    };
    l.LoadLevel = function(a) {
        l.myIsIngame = !0;
        l.StartBgMusicIfNeeded();
        a = Pe.CreateGameScene(l.myBootstrapAssets, l.myLocalization, l.myFonts, l.myPlayerState, l.mySoundEnabled, a, l.LevelLost, l.LevelWon, l.myLevelDetailsLoader);
        l.ShowScene(a, !0)
    };
    l.LevelWon = function() {
        l.myIsIngame = !1;
        l.StartBgMusicIfNeeded();
        Ha.Post(new yd);
        Q.OnHarvestEnd(!0);
        l.ShowGardenView()
    };
    l.LevelLost = function() {
        l.myIsIngame = !1;
        l.StartBgMusicIfNeeded();
        Q.OnHarvestEnd(!1);
        l.ShowGardenView()
    };
    l.ShowGardenView = function() {
        var a = (new p).add(new cb(l.myBootstrapAssets,
            l.myFonts, l.myPlayerState, l.myStoredState, l.LoadMainMenu, l.LoadLevel));
        l.ShowScene(a, !0)
    };
    l.LoadMainMenu = function() {
        var a = (new p).add(new Cd(l.myBootstrapAssets, l.myPreloaderAssets, l.myFonts, l.myPlayerState, l.OnMainMenuAction, l.mySoundEnabled)).add(new u);
        l.ShowScene(a, !l.firstMainMenuLoad);
        l.firstMainMenuLoad = !1
    };
    l.onResize = function() {
        var a = D.TargetWidth,
            b = D.TargetHeight;
        null != l.myRotateDeviceScene && o.root._compMap.Director_13.get_topScene() == l.myRotateDeviceScene && (b = D.TargetWidth, a = D.TargetHeight);
        var c = va.min(o._platform.getStage().get_width() / a, o._platform.getStage().get_height() / b);
        o.root._compMap.Sprite_12.setScale(c).setXY((o._platform.getStage().get_width() - a * c) / 2, (o._platform.getStage().get_height() - b * c) / 2);
        a = o.root._compMap.ResponsiveBackground_27;
        null != a && a.Refresh()
    };
    l.RefreshScissor = function() {
        null != l.myRotateDeviceScene && o.root._compMap.Director_13.get_topScene()
    };
    var Va = g["game.MainMenuAction"] = {
        __ename__: ["game", "MainMenuAction"],
        __constructs__: ["Start", "MoreGames"]
    };
    Va.Start = ["Start", 0];
    Va.Start.toString = h;
    Va.Start.__enum__ = Va;
    Va.MoreGames = ["MoreGames", 1];
    Va.MoreGames.toString = h;
    Va.MoreGames.__enum__ = Va;
    Va.__empty_constructs__ = [Va.Start, Va.MoreGames];
    var Cd = function(a, b, c, e, d, f) {
        k.call(this);
        this.myPack = a;
        this.myPlayerState = e;
        this.myActionCallback = d;
        this.mySoundEnabled = f;
        this.myRoot = (new p).add(new u);
        this.myBg = (new p).add(new z(b.getTexture("mainmenu")));
        this.myRoot.addChild(this.myBg);
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_play", D.TargetWidth / 2, D.TargetHeight /
            2 + 100,
            function(a, b) {
                return function() {
                    return a(b)
                }
            }(d, Va.Start), !0));
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_gamepad", 100, D.TargetHeight - 100, function(a, b) {
            return function() {
                return a(b)
            }
        }(d, Va.MoreGames), !1));
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_options", D.TargetWidth - 100, D.TargetHeight - 100, t(this, this.ShowOptions), !1));
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_credits", D.TargetWidth / 2, D.TargetHeight - 100, t(this, this.ShowCredits), !1))
    };
    g["game.MainMenuWidget"] =
        Cd;
    Cd.__name__ = ["game", "MainMenuWidget"];
    Cd.__super__ = k;
    Cd.prototype = x(k.prototype, {
        get_name: function() {
            return "MainMenuWidget_0"
        },
        ShowCredits: function() {
            var a = new p;
            J.PopulateEnt("credits-menu", a, null);
            a._compMap.WidgetBindings_19.SetActionHandler("close", t(a, a.dispose));
            this.myRoot.addChild(a)
        },
        ShowOptions: function() {
            null == this.myRoot._compMap.OptionsWidget_26 && this.myRoot.add(new Dd(this.myPack, this.mySoundEnabled, this.myPlayerState))
        },
        onAdded: function() {
            this.owner.addChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        __class__: Cd
    });
    var Ha = function() {};
    g["game.MessageHub"] = Ha;
    Ha.__name__ = ["game", "MessageHub"];
    Ha.Post = function(a) {
        var b = S.getClassName(S.getClass(a)),
            c = Ha.myMessages.get(b);
        null == c && (c = [], Ha.myMessages.set(b, c));
        c.push(a)
    };
    Ha.FetchMessage = function(a) {
        a = S.getClassName(a);
        a = Ha.myMessages.get(a);
        return null == a ? null : a.shift()
    };
    var L = function(a) {
        this.ref = a
    };
    g["game.OutRef"] = L;
    L.__name__ = ["game", "OutRef"];
    L.prototype = {
        __class__: L
    };
    var A = g["game.SExpression"] = {
        __ename__: ["game", "SExpression"],
        __constructs__: ["Expr", "Atom"]
    };
    A.Expr = function(a) {
        a = ["Expr", 0, a];
        a.__enum__ = A;
        a.toString = h;
        return a
    };
    A.Atom = function(a) {
        a = ["Atom", 1, a];
        a.__enum__ = A;
        a.toString = h;
        return a
    };
    A.__empty_constructs__ = [];
    var v = g["game.AtomValue"] = {
        __ename__: ["game", "AtomValue"],
        __constructs__: "Nil,Quote,Str,Num,Identifier,Function".split(",")
    };
    v.Nil = ["Nil", 0];
    v.Nil.toString = h;
    v.Nil.__enum__ = v;
    v.Quote = ["Quote", 1];
    v.Quote.toString = h;
    v.Quote.__enum__ = v;
    v.Str = function(a) {
        a = ["Str", 2, a];
        a.__enum__ = v;
        a.toString = h;
        return a
    };
    v.Num =
        function(a) {
            a = ["Num", 3, a];
            a.__enum__ = v;
            a.toString = h;
            return a
        };
    v.Identifier = function(a) {
        a = ["Identifier", 4, a];
        a.__enum__ = v;
        a.toString = h;
        return a
    };
    v.Function = function(a, b) {
        var c = ["Function", 5, a, b];
        c.__enum__ = v;
        c.toString = h;
        return c
    };
    v.__empty_constructs__ = [v.Nil, v.Quote];
    var r = function() {};
    g["game.SExpressionHelpers"] = r;
    r.__name__ = ["game", "SExpressionHelpers"];
    r.Stringify = function(a) {
        switch (a[1]) {
            case 0:
                return "(" + Sa.fold(a[2], function(a, c) {
                    return c + ("" == c ? "" : " ") + r.Stringify(a)
                }, "") + ")";
            case 1:
                switch (a =
                    a[2], a[1]) {
                    case 5:
                        return "*function*";
                    case 4:
                        return a[2];
                    case 0:
                        return "Nil";
                    case 3:
                        return "" + a[2];
                    case 1:
                        return "'";
                    case 2:
                        return '"' + a[2] + '"'
                }
        }
    };
    r.IsString = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 2:
                        return !0;
                    default:
                        return !1
                }
            default:
                return !1
        }
    };
    r.IsNil = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 0:
                        return !0;
                    default:
                        return !1
                }
            default:
                return !1
        }
    };
    r.GetStringOrThrow = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 2:
                        return a[2][2];
                    default:
                        throw "Expected string, got: " + r.Stringify(a);
                }
            default:
                throw "Expected string, got: " + r.Stringify(a);
        }
    };
    r.GetIdentifierOrThrow = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 4:
                        return a[2][2];
                    default:
                        throw "Expected identifier, got: " + r.Stringify(a);
                }
            default:
                throw "Expected identifier, got: " + r.Stringify(a);
        }
    };
    r.GetFuncOrThrow = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 5:
                        return a[2][2];
                    default:
                        throw "Expected function, got: " + r.Stringify(a);
                }
            default:
                throw "Expected function, got: " + r.Stringify(a);
        }
    };
    r.GetIntOrThrow = function(a) {
        switch (a[1]) {
            case 1:
                switch (a[2][1]) {
                    case 3:
                        return a[2][2];
                    default:
                        throw "Expected number, got: " + r.Stringify(a);
                }
            default:
                throw "Expected number, got: " + r.Stringify(a);
        }
    };
    r.GetExpressionOrThrow = function(a) {
        switch (a[1]) {
            case 0:
                return a[2];
            default:
                throw "Expected expression, got: " + r.Stringify(a);
        }
    };
    var Ra = function(a, b, c) {
        this.expression = a;
        this.srcRemainder = b;
        this.error = c
    };
    g["game.ParseResult"] = Ra;
    Ra.__name__ = ["game", "ParseResult"];
    Ra.prototype = {
        __class__: Ra
    };
    var Wa = function() {};
    g["game.Parse"] = Wa;
    Wa.__name__ = ["game", "Parse"];
    Wa.parseString = function(a) {
        for (var b =
                a.length, c = "", e = !1, d = 0; d < b;) {
            var f = d++,
                g = a.charAt(f);
            if (!e && '"' == g) return new Ra(A.Atom(v.Str(c)), a.substring(f + 1));
            !e && "\\" == g ? e = !0 : (e = !1, c += g)
        }
        return new Ra(null, "", "Missing '\"'")
    };
    Wa.parseIdentifier = function(a) {
        a = F.trim(a);
        if ("" == a) return new Ra(null, "", "Expected identifier, got empty string");
        for (var b = a.length, c = "", e = 0; e < b;) {
            var d = e++,
                f = a.charAt(d);
            if (F.isSpace(f, 0) || ")" == f) return new Ra(A.Atom(v.Identifier(c)), a.substring(d));
            c += f
        }
        return new Ra(A.Atom(v.Identifier(c)), "")
    };
    Wa.parseNumber = function(a) {
        a =
            F.trim(a);
        if ("" == a) return new Ra(null, "", "Expected number, got empty string");
        for (var b = a.length, c = "", e = 0; e < b;) {
            var d = e++,
                f = a.charAt(d);
            if (F.isSpace(f, 0) || ")" == f) return new Ra(A.Atom(v.Num(n.parseInt(c))), a.substring(d));
            c += f
        }
        return new Ra(A.Atom(v.Num(n.parseInt(c))), "")
    };
    Wa.parseElement = function(a) {
        a = F.trim(a);
        if ("" == a) return new Ra(null, "");
        var b = a.charAt(0);
        if ("(" == b) return Wa.parseExpression(a.substring(1));
        if ('"' == b) return Wa.parseString(a.substring(1));
        var c = null;
        2 <= a.length && (c = a.charAt(1));
        return "-" == b && null != c && B.cca(c, 0) >= B.cca("0", 0) && B.cca(c, 0) <= B.cca("9", 0) || B.cca(b, 0) >= B.cca("0", 0) && B.cca(b, 0) <= B.cca("9", 0) ? Wa.parseNumber(a) : Wa.parseIdentifier(a)
    };
    Wa.parseExpression = function(a) {
        for (var b = new Ka, a = F.trim(a);;) {
            a = F.trim(a);
            if ("" == a) return new Ra(null, "", "missing ')'");
            if (")" == a.charAt(0)) return new Ra(A.Expr(b), a.substring(1));
            a = Wa.parseElement(a);
            if (null != a.error) return new Ra(null, "", a.error);
            b.add(a.expression);
            a = a.srcRemainder
        }
    };
    Wa.Parse = function(a) {
        return Wa.parseElement(a)
    };
    var K = function() {};
    g["game.StackHelpers"] = K;
    K.__name__ = ["game", "StackHelpers"];
    K.createStack = function() {
        var a = [];
        a.push(new R);
        return a
    };
    K.registerGlobal = function(a, b, c) {
        a[0].set(b, c)
    };
    K.stackPush = function(a) {
        a.push(new R)
    };
    K.stackPop = function(a) {
        a.pop()
    };
    K.stackDump = function(a) {
        for (var b = "", c = 0; c < a.length;) {
            var e = a[c];
            ++c;
            for (var b = b + "[ ", d = e.keys(); d.hasNext();) var f = d.next(),
                g = e.get(f),
                b = b + (f + ": " + r.Stringify(g));
            b += " ]\n"
        }
        return b
    };
    K.stackSet = function(a, b, c) {
        a[a.length - 1].set(b, c)
    };
    K.stackGet =
        function(a, b) {
            var c = a.length - 1;
            do {
                var e = a[c].get(b);
                if (null != e) return e;
                c--
            } while (0 <= c);
            throw "unknown identifier: " + b + ". stackdump: " + K.stackDump(a);
        };
    var ma = function() {};
    g["game.Scriptrun"] = ma;
    ma.__name__ = ["game", "Scriptrun"];
    ma.resolveIdentifier = function(a, b) {
        switch (a[1]) {
            case 1:
                var c = a[2];
                switch (c[1]) {
                    case 4:
                        var c = c[2],
                            e = K.stackGet(b, c);
                        if (null == e) throw "Unknown identifier: " + c;
                        return e;
                    default:
                        return a
                }
            default:
                return a
        }
    };
    ma.removeFirst = function(a) {
        for (var b = new Ka, c = !0, a = a.iterator(); a.hasNext();) {
            var e =
                a.next();
            c || b.add(e);
            c = !1
        }
        return b
    };
    ma.eval = function(a, b) {
        switch (a[1]) {
            case 1:
                var c = a[2];
                switch (c[1]) {
                    case 4:
                        return K.stackGet(b, c[2]);
                    default:
                        return a
                }
            case 0:
                var e = a[2];
                ma.level += 1;
                if (e.isEmpty()) return a;
                K.stackPush(b);
                var d = ma.eval(ma.resolveIdentifier(e.first(), b), b);
                K.stackPop(b);
                var c = null,
                    f = !1;
                switch (d[1]) {
                    case 1:
                        switch (d[2][1]) {
                            case 5:
                                f = d[2][3];
                                c = d[2][2];
                                break;
                            default:
                                throw "expected function, got " + r.Stringify(d);
                        }
                        break;
                    default:
                        throw "expected function, got " + r.Stringify(d);
                }
                e = ma.removeFirst(e);
                f && (e = e.map(function(a) {
                    return ma.resolveIdentifier(a, b)
                }), e = e.map(function(a) {
                    return ma.eval(a, b)
                }));
                K.stackPush(b);
                c = c(e, b);
                K.stackPop(b);
                ma.level -= 1;
                return c
        }
    };
    var sd = function(a, b, c, e, d) {
        fa.call(this);
        J.PopulateEnt("level-completed-menu", this.myRoot, null);
        this.myRoot._compMap.WidgetBindings_19.SetActionHandler("close", function() {
            d()
        })
    };
    g["game.NextLevelMenuWidget"] = sd;
    sd.__name__ = ["game", "NextLevelMenuWidget"];
    sd.__super__ = fa;
    sd.prototype = x(fa.prototype, {
        get_name: function() {
            return "NextLevelMenuWidget_25"
        },
        __class__: sd
    });
    var Dd = function(a, b, c) {
        fa.call(this);
        this.myPlayerState = c;
        this.mySoundEnabled = b;
        J.PopulateEnt("options-menu", this.myRoot, null);
        c = this.myRoot._compMap.WidgetBindings_19;
        tc.isSupported ? c.GetNamedItem("mute-button-layer").addChild(Aa.CreateToggleBtn(a, "gfx/button_sound_on", "gfx/button_sound_off", 0, 0, b)) : c.GetNamedItem("mute-root")._compMap.Sprite_12.set_visible(!1);
        c.SetActionHandler("close", t(this, this.dispose));
        c.SetActionHandler("reset", t(this, this.OnResetClicked))
    };
    g["game.OptionsWidget"] =
        Dd;
    Dd.__name__ = ["game", "OptionsWidget"];
    Dd.__super__ = fa;
    Dd.prototype = x(fa.prototype, {
        get_name: function() {
            return "OptionsWidget_26"
        },
        OnResetClicked: function() {
            if (null == this.myConfirmMenu) {
                this.myConfirmMenu = new p;
                J.PopulateEnt("options-menu-confirm-reset", this.myConfirmMenu, null);
                var a = this.myConfirmMenu._compMap.WidgetBindings_19;
                a.SetActionHandler("reset-confirm-yes", function(a, c) {
                    return function() {
                        return a(c)
                    }
                }(t(this, this.ConfirmMenuResult), !0));
                a.SetActionHandler("reset-confirm-no", function(a,
                    c) {
                    return function() {
                        return a(c)
                    }
                }(t(this, this.ConfirmMenuResult), !1));
                this.myRoot.addChild(this.myConfirmMenu)
            }
        },
        ConfirmMenuResult: function(a) {
            P.Assert(null != this.myConfirmMenu);
            this.myConfirmMenu.dispose();
            this.myConfirmMenu = null;
            a && (this.myPlayerState.ResetPlayerState(), this.mySoundEnabled.get_changed().emit(this.mySoundEnabled._value, !0))
        },
        __class__: Dd
    });
    var Ed = function(a, b) {
        this.count = a;
        this.interval = b
    };
    g["game.OrangeMultiplierState"] = Ed;
    Ed.__name__ = ["game", "OrangeMultiplierState"];
    Ed.prototype = {
        __class__: Ed
    };
    var gb = function(a, b, c) {
        this.remainingSpawns = 0;
        this.disposed = !1;
        k.call(this);
        this.multiplier = a;
        this.stateHelper = b;
        this.Load(c)
    };
    g["game.OrangeMultiplier"] = gb;
    gb.__name__ = ["game", "OrangeMultiplier"];
    gb.__super__ = k;
    gb.prototype = x(k.prototype, {
        get_name: function() {
            return "OrangeMultiplier_32"
        },
        Load: function(a) {
            this.spawnInterval = this.remainingSpawns = 0;
            var b = this.stateHelper.GetState("OrangeMultiplier");
            if (null != b) {
                this.remainingSpawns = b.count;
                this.spawnInterval = b.interval;
                for (var c = b = 0, e =
                        this.remainingSpawns; c < e;) c++, b += Math.random() * this.spawnInterval, a.Add(b + gb.animationTimeOffset, t(this, this.StartSpawnAnim)), a.Add(b, t(this, this.SpawnAndUpdateState))
            }
        },
        Save: function() {
            gb.tmpState.count = this.remainingSpawns;
            gb.tmpState.interval = this.spawnInterval;
            this.stateHelper.SetState("OrangeMultiplier", new Ed(this.remainingSpawns, this.spawnInterval))
        },
        SpawnAndUpdateState: function() {
            if (!this.disposed) {
                P.Assert(1 <= this.remainingSpawns);
                var a = this.owner._compMap.Sprite_12;
                Ha.Post(new wb("orange",
                    ca.centerX(a), ca.centerY(a)));
                this.remainingSpawns -= 1;
                this.Save()
            }
        },
        StartSpawnAnim: function() {
            var a = this.owner._compMap.GardenItemAnimator_33;
            null != a && a.OnEvent(Ba.EVENT_ORANGE_SPAWN)
        },
        EnqueueSpawns: function(a, b) {
            this.spawnInterval = 0 != this.remainingSpawns ? 0.5 * (a + this.spawnInterval) : a;
            this.remainingSpawns += this.multiplier;
            for (var c = 0, e = 0, d = this.multiplier; e < d;) e++, c += Math.random() * a, b.Add(c + gb.animationTimeOffset, t(this, this.StartSpawnAnim)), b.Add(c, t(this, this.SpawnAndUpdateState));
            this.Save()
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.disposed = !0
        },
        __class__: gb
    });
    var pa = g["game.AltImageState"] = {
        __ename__: ["game", "AltImageState"],
        __constructs__: ["NotSet", "Normal", "Alt"]
    };
    pa.NotSet = ["NotSet", 0];
    pa.NotSet.toString = h;
    pa.NotSet.__enum__ = pa;
    pa.Normal = ["Normal", 1];
    pa.Normal.toString = h;
    pa.Normal.__enum__ = pa;
    pa.Alt = ["Alt", 2];
    pa.Alt.toString = h;
    pa.Alt.__enum__ = pa;
    pa.__empty_constructs__ = [pa.NotSet, pa.Normal, pa.Alt];
    var wd = function(a, b, c) {
        this.myAltImageState = pa.NotSet;
        k.call(this);
        this.myTexture = a.getTexture(b);
        this.myAltTexture = a.getTexture(c)
    };
    g["game.OutOfStockAltImg"] = wd;
    wd.__name__ = ["game", "OutOfStockAltImg"];
    wd.__super__ = k;
    wd.prototype = x(k.prototype, {
        get_name: function() {
            return "OutOfStockAltImg_35"
        },
        onUpdate: function() {
            var a = this.IsOutOfStock();
            if (this.myAltImageState == pa.NotSet || this.myAltImageState == pa.Normal && a || this.myAltImageState == pa.Alt && !a) this.owner._compMap.WidgetBindings_19.GetNamedItem("item-sprite").texture = a ? this.myAltTexture : this.myTexture
        },
        IsOutOfStock: function() {
            var a = this.owner._compMap.ResourceQueue_30;
            return 0 != a.GetQueueLengthExReservedSlots("orange") ||
                0 != a.GetQueueLengthExReservedSlots("juice") || 0 != a.GetQueueLengthExReservedSlots("icecream") ? !1 : !0
        },
        __class__: wd
    });
    var qd = function(a, b, c, e, d) {
        k.call(this);
        this.myEndGameFunc = e;
        this.myBg = hb.Create(0, 0, 632, 278, "standard");
        this.myRoot = (new p).add((new u).setXY(0.5 * D.TargetWidth - 316, 0.5 * D.TargetHeight - 139)).addChild(this.myBg);
        tc.isSupported && this.myRoot.addChild(Aa.CreateToggleBtn(a, "gfx/button_sound_on", "gfx/button_sound_off", 493, 139, d));
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_home", 316,
            139, t(this, this.HomeClicked), !1));
        this.myRoot.addChild(Aa.CreateImageBtn(a, "gfx/button_back", 139, 139, t(this, this.BackClicked), !1))
    };
    g["game.PauseMenuWidget"] = qd;
    qd.__name__ = ["game", "PauseMenuWidget"];
    qd.__super__ = k;
    qd.prototype = x(k.prototype, {
        get_name: function() {
            return "PauseMenuWidget_22"
        },
        onAdded: function() {
            this.owner.addChild(this.myRoot)
        },
        onRemoved: function() {
            this.myRoot.parent.removeChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        HomeClicked: function() {
            this.myEndGameFunc();
            this.dispose()
        },
        BackClicked: function() {
            this.dispose()
        },
        __class__: qd
    });
    var ud = function(a, b) {
        this.myStoredState = a;
        this.myStateId = b
    };
    g["game.GardenItemStateHelper"] = ud;
    ud.__name__ = ["game", "GardenItemStateHelper"];
    ud.prototype = {
        GetState: function(a) {
            a = this.myStoredState.GetGardenItemState(this.myStateId, a).get__();
            return "" == a ? null : (new ib(a)).parseRec()
        },
        SetState: function(a, b) {
            var c = xb.print(b, null, null);
            this.myStoredState.GetGardenItemState(this.myStateId, a).set__(c)
        },
        __class__: ud
    };
    var we = function(a) {
        this.myStoredState =
            a;
        this.Initialize()
    };
    g["game.PlayerState"] = we;
    we.__name__ = ["game", "PlayerState"];
    we.prototype = {
        Initialize: function() {
            0 == this.GetGardenItems().length && 50 > this.myStoredState.balance._value && (this.AddGardenItem("STAND", 54, 760), this.AddGardenItem("OTREE", 370, 285), this.myStoredState.balance.set__(75))
        },
        ResetPlayerState: function() {
            this.myStoredState.Reset();
            this.Initialize()
        },
        MoveToNextLevel: function() {
            var a = this.myStoredState.currentLevel;
            a.set__(a._value + 1)
        },
        Balance: function() {
            return this.myStoredState.balance
        },
        AimBoosterCount: function() {
            return this.myStoredState.aimBoosterCount
        },
        MatchAnyBoosterCount: function() {
            return this.myStoredState.matchAnyBoosterCount
        },
        AddGardenItem: function(a, b, c) {
            var e = this.myStoredState.GenerateGardenItemStateId(),
                d = (new ib(this.myStoredState.gardenItems._value)).parseRec();
            d.items.push({
                id: a,
                x: b,
                y: c,
                stateId: e
            });
            this.myStoredState.gardenItems.set__(xb.print(d, null, null));
            return e
        },
        RemoveGardenItem: function(a) {
            for (var b = (new ib(this.myStoredState.gardenItems._value)).parseRec(),
                    c = 0, e = b.items; c < e.length;) {
                var d = e[c];
                ++c;
                if (d.stateId == a) {
                    B.remove(b.items, d);
                    this.myStoredState.gardenItems.set__(xb.print(b, null, null));
                    this.myStoredState.RemoveGardenItemState(a);
                    return
                }
            }
            this.myStoredState.RemoveGardenItemState(a);
            null
        },
        GetTreeCount: function() {
            for (var a = 0, b = 0, c = (new ib(this.myStoredState.gardenItems._value)).parseRec().items; b < c.length;) {
                var e = c[b];
                ++b;
                0 == e.id.indexOf("OTREE") && (a += 1)
            }
            return a
        },
        GetStandCount: function() {
            for (var a = 0, b = 0, c = (new ib(this.myStoredState.gardenItems._value)).parseRec().items; b <
                c.length;) {
                var e = c[b];
                ++b;
                0 == e.id.indexOf("STAND") && (a += 1)
            }
            return a
        },
        MoveGardenItem: function(a, b, c) {
            for (var e = (new ib(this.myStoredState.gardenItems._value)).parseRec(), d = 0, f = e.items; d < f.length;) {
                var g = f[d];
                ++d;
                if (g.stateId == a) {
                    g.x = b;
                    g.y = c;
                    this.myStoredState.gardenItems.set__(xb.print(e, null, null));
                    return
                }
            }
            null
        },
        GetGardenItems: function() {
            return (new ib(this.myStoredState.gardenItems._value)).parseRec().items
        },
        HasCompletedEmailSignup: function() {
            return this.myStoredState.emailSignupCompleted
        },
        __class__: we
    };
    var Bd = function(a, b) {
        this.myConnections = [];
        this.myFakeSlowDownload = !1;
        k.call(this);
        this.myPreloaderPack = a;
        this.myLoadCompletedCallback = b;
        this.myProgress = new Z(0);
        !0 == this.myFakeSlowDownload ? this.StartFakeDownload() : this.StartRealDownload()
    };
    g["game.PreloaderWidget"] = Bd;
    Bd.__name__ = ["game", "PreloaderWidget"];
    Bd.__super__ = k;
    Bd.prototype = x(k.prototype, {
        get_name: function() {
            return "PreloaderWidget_28"
        },
        StartRealDownload: function() {
            this.myLoader = o.loadAssetPack(La.fromAssets("bootstrap"));
            this.myConnections.push(this.myLoader.progressChanged.connect(t(this,
                this.OnProgressChanged)));
            this.myConnections.push(this.myLoader.success.connect(t(this, this.OnLoadCompleted)))
        },
        StartFakeDownload: function() {
            this.myLoader = new ec;
            this.myLoader.set_total(4E3);
            pb.delay(function(a, b) {
                return function() {
                    return a(b)
                }
            }(t(this, this.ContinueFakeDownload), 1), 20);
            this.myLoader.progressChanged.connect(t(this, this.OnProgressChanged));
            this.myLoader.success.connect(t(this, this.OnLoadCompleted))
        },
        ContinueFakeDownload: function(a) {
            var b = this;
            this.myLoader.set_progress(a / 300 * this.myLoader._total);
            300 == a ? o.loadAssetPack(La.fromAssets("bootstrap")).success.connect(function(a) {
                b.myLoader.set_result(a)
            }) : pb.delay(function(a, b) {
                return function() {
                    return a(b)
                }
            }(t(this, this.ContinueFakeDownload), a + 1), 20)
        },
        onUpdate: function(a) {
            this.myProgress.update(a);
            if (null != this.myProgressBar) {
                var a = this.myPreloaderPack.getTexture("progress"),
                    b = Math.max(1, this.myProgress._value * a.get_width());
                n.instance(this.myProgressBar._compMap.Sprite_12, z).texture = a.subTexture(0, 0, Math.floor(Math.min(b, a.get_width())), a.get_height())
            }
        },
        onAdded: function() {
            this.myRoot = new p;
            this.myRoot.add(new z(this.myPreloaderPack.getTexture("mainmenu")));
            this.myRoot.addChild((new p).add((new z(this.myPreloaderPack.getTexture("progress_bg"))).setXY(75, 987)));
            this.myProgressBar = (new p).add((new z(this.myPreloaderPack.getTexture("progress").subTexture(0, 0, 1, 64))).setXY(80.5, 992));
            this.myRoot.addChild(this.myProgressBar);
            this.owner.addChild(this.myRoot);
            this.OnProgressChanged()
        },
        onRemoved: function() {
            this.owner.removeChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose();
            for (var a = 0, b = this.myConnections; a < b.length;) {
                var c = b[a];
                ++a;
                c.dispose()
            }
        },
        OnProgressChanged: function() {
            this.myProgress.animateTo(this.myLoader._progress / this.myLoader._total, 0.3)
        },
        OnLoadCompleted: function(a) {
            this.myLoadCompletedCallback(a)
        },
        __class__: Bd
    });
    var pd = function(a, b, c) {
        this.myCrossedIcons = [];
        this.myIcons = [];
        this.IconXSpacing = 32;
        this.IconScale = 1;
        k.call(this);
        this.myPack = a;
        this.myRoot = (new p).add((new u).setXY(b, c))
    };
    g["game.RegrowthCounterWidget"] = pd;
    pd.__name__ = ["game",
        "RegrowthCounterWidget"
    ];
    pd.__super__ = k;
    pd.prototype = x(k.prototype, {
        get_name: function() {
            return "RegrowthCounterWidget_8"
        },
        onAdded: function() {
            this.owner.addChild(this.myRoot)
        },
        onRemoved: function() {
            this.myRoot.parent.removeChild(this.myRoot)
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        createBubbleIcon: function(a, b) {
            return (new p).add((new z(this.myPack.getTexture("gfx/bubble_icon"))).setXY(a, b).setScale(this.IconScale))
        },
        createCrossedBubbleIcon: function(a, b) {
            return (new p).add((new z(this.myPack.getTexture("gfx/bubble_icon_crossed"))).setXY(a,
                b).setScale(this.IconScale))
        },
        SetCounterValue: function(a, b) {
            for (; this.myIcons.length < b;) {
                var c = this.myIcons.length * this.IconXSpacing,
                    e = this.createBubbleIcon(c, 0);
                this.myRoot.addChild(e);
                this.myIcons.push(e);
                c = this.createCrossedBubbleIcon(c, 0);
                this.myRoot.addChild(c);
                this.myCrossedIcons.push(c)
            }
            c = this.myIcons.length;
            for (e = 0; e < c;) {
                var d = e++;
                d < a - 1 ? (this.myCrossedIcons[d]._compMap.Sprite_12.set_visible(!1), this.myIcons[d]._compMap.Sprite_12.set_visible(!0)) : (d < b - 1 ? this.myCrossedIcons[d]._compMap.Sprite_12.set_visible(!0) :
                    this.myCrossedIcons[d]._compMap.Sprite_12.set_visible(!1), this.myIcons[d]._compMap.Sprite_12.set_visible(!1))
            }
        },
        __class__: pd
    });
    var qe = function() {};
    g["game.ReloadGardenItemMsg"] = qe;
    qe.__name__ = ["game", "ReloadGardenItemMsg"];
    qe.prototype = {
        DoIt: function() {
            this.ent._compMap.WidgetBindings_19.ReloadWidget()
        },
        __class__: qe
    };
    var vd = function() {
        this.myConverters = new R;
        k.call(this)
    };
    g["game.ResourceConverter"] = vd;
    vd.__name__ = ["game", "ResourceConverter"];
    vd.__super__ = k;
    vd.prototype = x(k.prototype, {
        get_name: function() {
            return "ResourceConverter_31"
        },
        Add: function(a, b, c, e, d, f, g) {
            this.myConverters.set(a, {
                to: b,
                fromCount: c,
                toCount: e,
                coolDownSeconds: d,
                xOffset: f,
                yOffset: g,
                ongoingConversionRemainderSecs: -1,
                conversionCompletedFn: null
            })
        },
        onUpdate: function(a) {
            for (var b = this, c = this.owner._compMap.ResourceQueue_30, e = this.owner._compMap.GardenItemAnimator_33, d = this.myConverters.keys(); d.hasNext();) {
                var f = d.next(),
                    g = [this.myConverters.get(f)];
                if (0 < g[0].ongoingConversionRemainderSecs) g[0].ongoingConversionRemainderSecs -= a, 0 >= g[0].ongoingConversionRemainderSecs &&
                    null != g[0].conversionCompletedFn && g[0].conversionCompletedFn();
                else {
                    if (null == c) break;
                    c.CanReserveResource(f, g[0].fromCount) ? (f = [c.ReserveResource(f, g[0].fromCount)], null != e && e.OnEvent(Ba.EVENT_CONV_START), g[0].ongoingConversionRemainderSecs = g[0].coolDownSeconds - 0.5 + Math.random(), g[0].conversionCompletedFn = function(a, c) {
                        return function() {
                            a[0]();
                            null != e && e.OnEvent(Ba.EVENT_CONV_END);
                            for (var d = b.owner._compMap.Sprite_12, f = 0, g = c[0].toCount; f < g;) f++, Ha.Post(new wb(c[0].to, ca.centerX(d) + c[0].xOffset, ca.centerY(d) +
                                c[0].yOffset))
                        }
                    }(f, g)) : (g[0].ongoingConversionRemainderSecs = 0.5 * Math.random(), g[0].conversionCompletedFn = null)
                }
            }
        },
        __class__: vd
    });
    var wb = function(a, b, c) {
        this.type = a;
        this.x = b;
        this.y = c
    };
    g["game.ResourceCreatedMsg"] = wb;
    wb.__name__ = ["game", "ResourceCreatedMsg"];
    wb.prototype = {
        __class__: wb
    };
    var xd = function() {
        k.call(this)
    };
    g["game.ResourceDisplayHider"] = xd;
    xd.__name__ = ["game", "ResourceDisplayHider"];
    xd.__super__ = k;
    xd.prototype = x(k.prototype, {
        get_name: function() {
            return "ResourceDisplayHider_36"
        },
        onStart: function() {
            k.prototype.onStart.call(this);
            this.myResourceQueue = this.owner._compMap.ResourceQueue_30;
            Qa.GetDisposer(this.owner).add(this.myResourceQueue.changed.connect(t(this, this.RefreshVisibility)));
            var a = this.owner._compMap.WidgetBindings_19;
            this.myOrangeDisp = a.GetNamedItem("display.orange");
            this.myJuiceDisp = a.GetNamedItem("display.juice");
            this.myIceCreamDisp = a.GetNamedItem("display.icecream");
            this.RefreshVisibility()
        },
        RefreshVisibility: function() {
            this.myOrangeDisp.set_visible(0 < this.myResourceQueue.GetQueueLengthExReservedSlots("orange"));
            this.myJuiceDisp.set_visible(0 < this.myResourceQueue.GetQueueLengthExReservedSlots("juice"));
            this.myIceCreamDisp.set_visible(0 < this.myResourceQueue.GetQueueLengthExReservedSlots("icecream"))
        },
        __class__: xd
    });
    var xe = function(a, b, c, e, d) {
        this.priority = a;
        this.count = b;
        this.maxCount = c;
        this.reservedResources = this.reservedSlots = 0;
        this.xOffset = e;
        this.yOffset = d
    };
    g["game._ResourceQueue.InnerRQueue"] = xe;
    xe.__name__ = ["game", "_ResourceQueue", "InnerRQueue"];
    xe.prototype = {
        __class__: xe
    };
    var td = function(a) {
        this.changed =
            new rb;
        k.call(this);
        this.myQueues = new R;
        this.myStateHelper = a
    };
    g["game.ResourceQueue"] = td;
    td.__name__ = ["game", "ResourceQueue"];
    td.__super__ = k;
    td.prototype = x(k.prototype, {
        get_name: function() {
            return "ResourceQueue_30"
        },
        AddQueue: function(a, b, c, e, d) {
            cc.that(!this.myQueues.exists(a), null, null);
            b = new xe(b, 0, c, e, d);
            this.myQueues.set(a, b)
        },
        Load: function() {
            var a = this.myStateHelper.GetState("ResourceQueue");
            if (null != a) {
                for (var b = 0, c = O.fields(a); b < c.length;) {
                    var e = c[b];
                    ++b;
                    var d = this.myQueues.get(e);
                    null != d ? d.count =
                        O.field(a, e) : null
                }
                null
            }
        },
        Save: function() {
            for (var a = new R, b = this.myQueues.keys(); b.hasNext();) {
                var c = b.next();
                a.set(c, this.myQueues.get(c).count)
            }
            this.myStateHelper.SetState("ResourceQueue", a);
            this.changed.emit()
        },
        GetPriority: function(a) {
            a = this.myQueues.get(a);
            return null == a ? -1 : 2 > a.count + a.reservedSlots ? a.priority + 100 : a.priority
        },
        GetNumAvailableSlots: function(a) {
            a = this.myQueues.get(a);
            return null == a ? 0 : a.maxCount - a.count - a.reservedSlots
        },
        ReserveSlot: function(a) {
            var b = this;
            this.myQueues.get(a).reservedSlots +=
                1;
            return function() {
                var c = b.myQueues.get(a);
                null != c && (c.count += 1, c.reservedSlots -= 1, b.Save(), null != b.owner && (c = b.owner._compMap.GardenItemAnimator_33, null != c && c.OnEvent(Ba.EVENT_QUEUE_ADD)))
            }
        },
        CanReserveResource: function(a, b) {
            var c = this.myQueues.get(a);
            return null == c ? !1 : c.count - c.reservedResources >= b
        },
        ReserveResource: function(a, b) {
            var c = this,
                e = this.myQueues.get(a);
            cc.that(this.CanReserveResource(a, b), null, null);
            e.reservedResources += b;
            return function() {
                e.reservedResources -= b;
                e.count -= b;
                c.Save()
            }
        },
        GetQueueLengthExReservedSlots: function(a) {
            a = this.myQueues.get(a);
            return null == a ? 0 : a.count
        },
        GetXOffset: function(a) {
            a = this.myQueues.get(a);
            return null == a ? 0 : a.xOffset
        },
        GetYOffset: function(a) {
            a = this.myQueues.get(a);
            return null == a ? 0 : a.yOffset
        },
        __class__: td
    });
    var Ad = function(a) {
        k.call(this);
        this.mySprite1 = new eb(a);
        this.mySprite1.disablePointer();
        this.mySprite2 = new eb(a);
        this.mySprite2.disablePointer();
        this.myRoot = new p;
        this.myRoot.addChild((new p).add(this.mySprite1));
        this.myRoot.addChild((new p).add(this.mySprite2))
    };
    g["game.ResponsiveBackground"] = Ad;
    Ad.__name__ = ["game", "ResponsiveBackground"];
    Ad.__super__ = k;
    Ad.prototype = x(k.prototype, {
        get_name: function() {
            return "ResponsiveBackground_27"
        },
        Refresh: function() {
            var a = this.owner._compMap.Sprite_12,
                b = a.x._value / a.scaleX._value + 1,
                c = a.y._value / a.scaleY._value;
            b > c ? (this.mySprite1.x.set__(-a.x._value / a.scaleX._value), this.mySprite1.y.set__(-a.y._value / a.scaleY._value), this.mySprite1.width.set__(b), this.mySprite1.height.set__(o._platform.getStage().get_height() / a.scaleY._value),
                this.mySprite2.x.set__((o._platform.getStage().get_width() - a.x._value) / a.scaleX._value - b), this.mySprite2.y.set__(a.y._value / a.scaleY._value), this.mySprite2.width.set__(b), this.mySprite2.height.set__(o._platform.getStage().get_height() / a.scaleY._value)) : (this.mySprite1.x.set__(-a.x._value / a.scaleX._value), this.mySprite1.y.set__(-a.y._value / a.scaleY._value), this.mySprite1.width.set__(o._platform.getStage().get_width() / a.scaleX._value), this.mySprite1.height.set__(c), this.mySprite2.x.set__(-a.x._value /
                a.scaleX._value), this.mySprite2.y.set__((o._platform.getStage().get_height() - a.y._value) / a.scaleY._value - c), this.mySprite2.width.set__(o._platform.getStage().get_width() / a.scaleX._value), this.mySprite2.height.set__(c))
        },
        onAdded: function() {
            k.prototype.onAdded.call(this);
            this.owner.addChild(this.myRoot, !1);
            this.Refresh()
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        __class__: Ad
    });
    var Se = function() {};
    g["game.RotateDeviceScene"] = Se;
    Se.__name__ = ["game", "RotateDeviceScene"];
    Se.Create = function(a) {
        return (new p).addChild((new p).add((new z(a.getTexture("gfx/rotate_device"))).centerAnchor().setXY(D.TargetHeight / 2, D.TargetWidth / 2)))
    };
    var ra = g["game.MultiplierConfig"] = {
        __ename__: ["game", "MultiplierConfig"],
        __constructs__: ["Enabled", "Disabled"]
    };
    ra.Enabled = ["Enabled", 0];
    ra.Enabled.toString = h;
    ra.Enabled.__enum__ = ra;
    ra.Disabled = ["Disabled", 1];
    ra.Disabled.toString = h;
    ra.Disabled.__enum__ = ra;
    ra.__empty_constructs__ = [ra.Enabled, ra.Disabled];
    var ye = function(a, b, c, e, d) {
        this.score =
            a;
        this.currentMultiplier = b;
        this.x = c;
        this.y = e;
        this.bonusTag = d
    };
    g["game.ScoreIncrementMsg"] = ye;
    ye.__name__ = ["game", "ScoreIncrementMsg"];
    ye.prototype = {
        __class__: ye
    };
    var pe = function() {
        this.OnScoreUpdated = new W;
        this.OnScoreIncrement = new W;
        this.MultiplierMax = 21;
        this.Reset()
    };
    g["game.ScoreManager"] = pe;
    pe.__name__ = ["game", "ScoreManager"];
    pe.prototype = {
        Reset: function() {
            this.myScore = 0;
            this.OnScoreUpdated.emit(this.myScore);
            this.ResetMultiplier()
        },
        IncrementMultiplier: function() {
            this.myMultiplier >= this.MultiplierMax ||
                (this.myMultiplier += 1)
        },
        ResetMultiplier: function() {
            this.myMultiplier = 1
        },
        AddScore: function(a, b, c, e, d) {
            a = b == ra.Enabled ? a * this.myMultiplier : a;
            this.myScore += a;
            this.OnScoreIncrement.emit(new ye(a, this.myMultiplier, c, e, d));
            this.OnScoreUpdated.emit(this.myScore)
        },
        __class__: pe
    };
    var zd = function() {
        this.FinalizeId = "_finalize";
        this.IgnoreElemId = "_ignoreElem";
        var a = this;
        this.myStack = K.createStack();
        K.stackSet(this.myStack, "do", A.Atom(v.Function(function(a, c) {
            for (var e = A.Atom(v.Nil), d = a.iterator(); d.hasNext();) e =
                d.next(), e = ma.eval(e, c);
            return e
        }, !1)));
        K.stackSet(this.myStack, "defn", A.Atom(v.Function(function(b, c) {
            var e = b.iterator(),
                d = r.GetIdentifierOrThrow(e.next()),
                e = e.next(),
                e = a.Eval(e);
            K.registerGlobal(c, d, e);
            return A.Atom(v.Nil)
        }, !1)));
        K.stackSet(this.myStack, "make-hash", A.Atom(v.Function(function(a) {
            for (var c = new Vb, a = a.iterator(); a.hasNext();) {
                var e = a.next(),
                    d = a.next();
                c.set(e, d)
            }
            return A.Atom(v.Function(function(a) {
                a = a.first();
                a = c.get(a);
                return null == a ? A.Atom(v.Nil) : a
            }, !0))
        }, !0)));
        K.stackSet(this.myStack,
            "'", A.Atom(v.Function(function(a) {
                return A.Expr(a)
            }, !1)));
        K.stackSet(this.myStack, "list", A.Atom(v.Function(function(a) {
            return A.Expr(a)
        }, !0)));
        K.stackSet(this.myStack, "append", A.Atom(v.Function(function(a) {
            for (var c = new Ka, a = a.iterator(); a.hasNext();)
                for (var e = a.next(), e = r.GetExpressionOrThrow(e).iterator(); e.hasNext();) {
                    var d = e.next();
                    c.add(d)
                }
            return A.Expr(c)
        }, !0)));
        K.stackSet(this.myStack, "range", A.Atom(v.Function(function(a) {
            for (var c = a.iterator(), a = c.next(), c = c.next(), e = r.GetIntOrThrow(a), a =
                    r.GetIntOrThrow(c) + 1, c = new Ka; e < a;) {
                var d = e++;
                c.add(A.Atom(v.Num(d)))
            }
            return A.Expr(c)
        }, !0)));
        K.stackSet(this.myStack, "head", A.Atom(v.Function(function(a) {
            a = a.first();
            return r.IsNil(a) ? a : r.GetExpressionOrThrow(a).first()
        }, !0)));
        K.stackSet(this.myStack, "tail", A.Atom(v.Function(function(a) {
            a = a.first();
            if (r.IsNil(a)) return a;
            var c = r.GetExpressionOrThrow(a);
            if (2 > c.length) return A.Atom(v.Nil);
            for (var a = new Ka, e = !0, c = c.iterator(); c.hasNext();) {
                var d = c.next();
                e || a.add(d);
                e = !1
            }
            return A.Expr(a)
        }, !0)));
        K.stackSet(this.myStack,
            "unless-empty", A.Atom(v.Function(function(a, c) {
                var e = a.iterator(),
                    d = ma.eval(e.next(), c);
                if (r.IsNil(d)) return d;
                e = e.next();
                return ma.eval(e, c)
            }, !1)));
        K.stackSet(this.myStack, "if", A.Atom(v.Function(function(b) {
            var c = b.iterator(),
                b = c.next(),
                e = c.next(),
                c = c.next(),
                b = a.Eval(b);
            if (r.IsNil(b)) {
                if (null != c) return a.Eval(c)
            } else return a.Eval(e);
            return A.Atom(v.Nil)
        }, !1)));
        K.stackSet(this.myStack, "nil", A.Atom(v.Nil));
        K.stackSet(this.myStack, "#f", A.Atom(v.Nil));
        K.stackSet(this.myStack, "#t", A.Atom(v.Num(1)));
        K.stackSet(this.myStack, "/", A.Atom(v.Function(function(a) {
            var c = a.iterator(),
                a = c.next(),
                c = c.next(),
                a = r.GetIntOrThrow(a),
                c = r.GetIntOrThrow(c);
            return A.Atom(v.Num(Math.round(a / c)))
        }, !0)));
        K.stackSet(this.myStack, "+", A.Atom(v.Function(function(a) {
            for (var c = 0, a = a.iterator(); a.hasNext();) var e = a.next(),
                c = c + r.GetIntOrThrow(e);
            return A.Atom(v.Num(c))
        }, !0)));
        K.stackSet(this.myStack, "-", A.Atom(v.Function(function(a) {
            for (var c = !0, e = 0, a = a.iterator(); a.hasNext();) {
                var d = a.next();
                c ? (c = !1, e += r.GetIntOrThrow(d)) :
                    e -= r.GetIntOrThrow(d)
            }
            return A.Atom(v.Num(e))
        }, !0)));
        K.stackSet(this.myStack, "str", A.Atom(v.Function(function(a) {
            for (var c = "", a = a.iterator(); a.hasNext();) var e = a.next(),
                c = r.IsString(e) ? c + r.GetStringOrThrow(e) : c + r.Stringify(e);
            return A.Atom(v.Str(c))
        }, !0)));
        K.stackSet(this.myStack, "macro", A.Atom(v.Function(function(b) {
            var b = b.iterator(),
                c = r.GetIdentifierOrThrow(b.next()),
                e = b.next(),
                e = r.GetExpressionOrThrow(e),
                d = Sa.map(e, r.GetIdentifierOrThrow),
                f = b.next(),
                b = A.Atom(v.Function(function(a, b) {
                    var e = new R;
                    if (a.length != d.length) throw "invalid argument count in call to " + c;
                    for (var g = d.iterator(), h = a.iterator(); g.hasNext();) {
                        var i = g.next(),
                            k = h.next();
                        e.set(i, k)
                    }
                    var l = null,
                        l = function(a) {
                            switch (a[1]) {
                                case 0:
                                    return A.Expr(Sa.map(a[2], l));
                                case 1:
                                    switch (a[2][1]) {
                                        case 4:
                                            var b = a[2][2];
                                            return e.exists(b) ? e.get(b) : a;
                                        default:
                                            return a
                                    }
                            }
                        },
                        g = l(f);
                    return ma.eval(g, b)
                }, !1));
            K.registerGlobal(a.myStack, c, b);
            return b
        }, !1)))
    };
    g["game.ScriptHandler"] = zd;
    zd.__name__ = ["game", "ScriptHandler"];
    zd.prototype = {
        SetFunctionSimple: function(a,
            b) {
            K.stackSet(this.myStack, a, A.Atom(v.Function(function(a) {
                b(a);
                return A.Atom(v.Nil)
            }, !0)))
        },
        SetHandler: function(a, b) {
            var c = this;
            K.stackSet(this.myStack, a, A.Atom(v.Function(function(a, d) {
                K.stackSet(d, c.IgnoreElemId, A.Atom(v.Nil));
                K.stackSet(d, c.FinalizeId, A.Atom(v.Nil));
                b(a);
                if (!r.IsNil(K.stackGet(d, c.IgnoreElemId))) return A.Atom(v.Nil);
                for (var f = a.iterator(); f.hasNext();) {
                    var g = f.next();
                    ma.eval(g, d)
                }
                f = K.stackGet(d, c.FinalizeId);
                r.IsNil(f) || r.GetFuncOrThrow(f)(new Ka, d);
                return A.Atom(v.Nil)
            }, !1)))
        },
        ClearHandler: function(a) {
            this.SetHandler(a, function() {
                throw "Handler " + a + " is not available in this scope";
            })
        },
        SetFinalizer: function(a) {
            this.SetHandler(this.FinalizeId, function() {
                a()
            })
        },
        Eval: function(a) {
            return ma.eval(a, this.myStack)
        },
        Run: function(a, b) {
            var c = null;
            if (null != b) c = b;
            else {
                c = Wa.Parse(a);
                if (null != c.error) throw c.error;
                c = c.expression
            }
            ma.eval(c, this.myStack)
        },
        __class__: zd
    };
    var Fd = function(a) {
        this.width = this.height = -1;
        this.myStartY = this.myPrevY = this.myContentHeight = 0;
        this.myIsScrolling = !1;
        this.tmpRect =
            new qa;
        this.ScrollTolerance = 15;
        u.call(this);
        this.myScrollSprite = a
    };
    g["game.ScrollViewController"] = Fd;
    Fd.__name__ = ["game", "ScrollViewController"];
    Fd.__super__ = u;
    Fd.prototype = x(u.prototype, {
        onAdded: function() {
            u.prototype.onAdded.call(this);
            null == this.owner._compMap.Disposer_20 && this.owner.add(new lb);
            this.owner._compMap.Disposer_20.add(this.get_pointerDown().connect(t(this, this.OnPointerDown)));
            this.owner._compMap.Disposer_20.add(this.get_pointerUp().connect(t(this, this.OnPointerUp)));
            this.owner._compMap.Disposer_20.add(this.get_pointerMove().connect(t(this,
                this.OnPointerMove)));
            this.owner._compMap.Disposer_20.add(this.get_pointerIn().connect(t(this, this.OnPointerIn)));
            this.owner._compMap.Disposer_20.add(this.get_pointerOut().connect(t(this, this.OnPointerOut)))
        },
        RefreshContentHeight: function() {
            this.myContentHeight = u.getBounds(this.myScrollSprite.owner, this.tmpRect).height
        },
        OnPointerDown: function() {
            this.myIsScrolling = !1;
            this.myStartY = o._platform.getPointer().get_y();
            this.RefreshContentHeight()
        },
        OnPointerUp: function() {
            this.myIsScrolling = !1
        },
        OnPointerMove: function() {
            if (o._platform.getPointer().isDown())
                if (this.myIsScrolling) {
                    var a =
                        o._platform.getPointer().get_y() - this.myPrevY,
                        b = -this.myContentHeight + this.height;
                    0 < b && (b = 0);
                    this.myScrollSprite.y.set__(Math.max(b, Math.min(this.myScrollSprite.y._value + a, 0)));
                    this.myPrevY = o._platform.getPointer().get_y()
                } else Math.abs(this.myStartY - o._platform.getPointer().get_y()) > this.ScrollTolerance && (this.myIsScrolling = !0, this.myPrevY = o._platform.getPointer().get_y());
            else this.myIsScrolling = !1
        },
        OnPointerIn: function() {
            this.myIsScrolling = !1
        },
        OnPointerOut: function() {
            this.myIsScrolling = !1
        },
        getNaturalWidth: function() {
            return this.width
        },
        getNaturalHeight: function() {
            return this.height
        },
        __class__: Fd
    });
    var i = function() {};
    g["game.SectionEnabler"] = i;
    i.__name__ = ["game", "SectionEnabler"];
    i.Init = function(a) {
        i.myStoredState = a
    };
    i.OnEnterLevel = function(a, b) {
        if (i.myStoredState.currentLevel._value >= i.EnableBoostersAtLevel && i.NextStepIs(i.PostBoostersId)) i.myStoredState.aimBoosterCount.set__(3), a.addChild(i.CreateMessageView("message-boosters", i.PostBoostersId, b, null));
        else if (i.myStoredState.currentLevel._value >= i.EnableMatchAnyAtLevel && i.NextStepIs(i.PostMatchAnyId)) i.myStoredState.matchAnyBoosterCount.set__(2),
            a.addChild(i.CreateMessageView("message-match-any", i.PostMatchAnyId, b, null));
        else if (i.myStoredState.currentLevel._value >= i.EnableBoosterShopAtLevel && i.NextStepIs(i.PostBoosterShopId)) a.addChild(i.CreateMessageView("message-boostershop", i.PostBoosterShopId, b, null));
        else {
            if (i.IsReadyForGifting()) {
                if (i.myStoredState.currentLevel._value > i.EnableBoostersAtLevel && 2 > i.myStoredState.aimBoosterCount._value && (i.myStoredState.currentLevel._value < i.EnableBoosterShopAtLevel || 1E3 > i.myStoredState.balance._value) &&
                    0 == n.random(3)) {
                    a.addChild(i.CreateMessageView("message-gift-aim", null, b, null));
                    var c = i.myStoredState.aimBoosterCount;
                    c.set__(c._value + 1);
                    i.myStoredState.lastGiftTimeStamp.set__(new Date);
                    return
                }
                if (i.myStoredState.currentLevel._value > i.EnableMatchAnyAtLevel && 2 > i.myStoredState.matchAnyBoosterCount._value && (i.myStoredState.currentLevel._value < i.EnableBoosterShopAtLevel || 1400 > i.myStoredState.balance._value) && 0 == n.random(3)) {
                    a.addChild(i.CreateMessageView("message-gift-match-any", null, b, null));
                    c = i.myStoredState.matchAnyBoosterCount;
                    c.set__(c._value + 1);
                    i.myStoredState.lastGiftTimeStamp.set__(new Date);
                    return
                }
            }
            null != b && b()
        }
    };
    i.OnEnterGarden = function(a, b, c) {
        i.NextStepIs(i.PostInitId) ? a.addChild(i.CreateMessageView("message-welcome", i.PostInitId, b, c)) : i.myStoredState.currentLevel._value >= i.EnableShopAtLevel && i.NextStepIs(i.PostShopId) ? a.addChild(i.CreateMessageView("message-shop", i.PostShopId, b, c)) : i.myStoredState.currentLevel._value >= i.EnableJuicerAtLevel && i.NextStepIs(i.PostJuicerId) ? a.addChild(i.CreateMessageView("message-juicer",
            i.PostJuicerId, b, c)) : i.myStoredState.currentLevel._value >= i.EnableIceCreamMakerAtLevel && i.NextStepIs(i.PostIceCreaMakerId) ? a.addChild(i.CreateMessageView("message-icecreammaker", i.PostIceCreaMakerId, b, c)) : i.myStoredState.currentLevel._value >= i.EnableJuicer2AtLevel && i.NextStepIs(i.PostJuicer2Id) ? a.addChild(i.CreateMessageView("message-juicer2", i.PostJuicer2Id, b, c)) : i.myStoredState.currentLevel._value >= i.EnableOtree4AtLevel && i.NextStepIs(i.PostOtree4Id) ? a.addChild(i.CreateMessageView("message-otree4",
            i.PostOtree4Id, b, c)) : i.myStoredState.currentLevel._value >= i.EnableStand3AtLevel && i.NextStepIs(i.PostStand3Id) ? a.addChild(i.CreateMessageView("message-stand3", i.PostStand3Id, b, c)) : null != b && b()
    };
    i.BoostersEnabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableBoostersAtLevel
    };
    i.MatchAnyBoosterEnabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableMatchAnyAtLevel
    };
    i.BoosterShopEnabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableBoosterShopAtLevel
    };
    i.ShopEnabled =
        function() {
            return i.myStoredState.currentLevel._value >= i.EnableShopAtLevel
        };
    i.ConstantCrowdWaitTime = function() {
        return i.myStoredState.currentLevel._value <= i.EnableShopAtLevel
    };
    i.JuicerEnabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableJuicerAtLevel
    };
    i.Juicer2Enabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableJuicer2AtLevel
    };
    i.IceCreamMakerEnabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableIceCreamMakerAtLevel
    };
    i.IceCreamMaker2Enabled = function() {
        return i.myStoredState.currentLevel._value >=
            i.EnableJuicer2AtLevel
    };
    i.Otree4Enabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableOtree4AtLevel
    };
    i.Stand3Enabled = function() {
        return i.myStoredState.currentLevel._value >= i.EnableStand3AtLevel
    };
    i.CreateMessageView = function(a, b, c, e) {
        var d = new p;
        J.PopulateEnt(a, d, null);
        d._compMap.WidgetBindings_19.SetActionHandler("close", function() {
            d.dispose();
            null != b && i.myStoredState.enabledSectionState.set__(b);
            null != c && c()
        });
        null != e && e(d);
        return d
    };
    i.HighlightBoosterButton = function() {
        return i.myStoredState.currentLevel._value ==
            i.EnableBoostersAtLevel || i.myStoredState.currentLevel._value == i.EnableMatchAnyAtLevel
    };
    i.NextStepIs = function(a) {
        for (var b = i.EventOrder.length, c = 1; c < b;) {
            var e = c++;
            if (i.EventOrder[e] == a) return i.EventOrder[e - 1] == i.myStoredState.enabledSectionState._value
        }
        return !1
    };
    i.IsReadyForGifting = function() {
        return 1200 < 0.001 * ((new Date).getTime() - i.myStoredState.lastGiftTimeStamp._value.getTime())
    };
    var Wb = function() {};
    g["game._SfxHelper.SfxQueueItem"] = Wb;
    Wb.__name__ = ["game", "_SfxHelper", "SfxQueueItem"];
    Wb.prototype = {
        Recycle: function() {
            Wb.myPool.put(this)
        },
        __class__: Wb
    };
    var Gd = function(a) {
        k.call(this);
        this.myUpdateFn = a
    };
    g["game._SfxHelper.SfxHelperUpdater"] = Gd;
    Gd.__name__ = ["game", "_SfxHelper", "SfxHelperUpdater"];
    Gd.__super__ = k;
    Gd.prototype = x(k.prototype, {
        get_name: function() {
            return "SfxHelperUpdater_18"
        },
        onUpdate: function(a) {
            this.myUpdateFn(a)
        },
        __class__: Gd
    });
    var ze = function(a) {
        this.myAnimator = new xa;
        this.myLoopingSounds = new R;
        this.myAssets = a
    };
    g["game.InnerSfxHelper"] = ze;
    ze.__name__ = ["game", "InnerSfxHelper"];
    ze.prototype = {
        Play: function(a, b) {
            var c = this.myAssets.getSound(a, !1);
            null != c && c.play(b)
        },
        Loop: function(a, b) {
            var c = this.myLoopingSounds.get(a);
            null != c ? (c.set_paused(!1), c.volume.set__(0), this.myAnimator.Play(a, new M(c.volume, 0, b, 0.7, y.circIn))) : (c = this.myAssets.getSound(a, !1), null != c && (c = c.loop(0), this.myLoopingSounds.set(a, c), this.myAnimator.Play(a, new M(c.volume, 0, b, 0.7, y.circIn))))
        },
        StopLoop: function(a) {
            var b = this.myLoopingSounds.get(a);
            null != b && this.myAnimator.Play(a, new M(b.volume, b.volume._value, 0, 0.6, y.circOut),
                function() {
                    b.set_paused(!0)
                })
        },
        Update: function(a) {
            this.myAnimator.onUpdate(a)
        },
        __class__: ze
    };
    var N = function() {};
    g["game.SfxHelper"] = N;
    N.__name__ = ["game", "SfxHelper"];
    N.Init = function(a, b) {
        N.myInnserSfxHelper = new ze(a, b);
        N.myAssets = a;
        o.root.add(new Gd(N.Update))
    };
    N.Play = function(a, b) {
        null == b && (b = 1);
        if (!N.QueueContains(a)) {
            var c = Wb.myPool.take();
            c.path = a;
            c.vol = b;
            N.myQueue.push(c)
        }
    };
    N.Loop = function(a, b) {
        null == b && (b = 1);
        if (!N.myLooping.exists(a)) {
            for (var c = N.myLooping.keys(); c.hasNext();) {
                var e = c.next();
                N.myInnserSfxHelper.StopLoop(e);
                N.myLooping.remove(e)
            }
            N.myInnserSfxHelper.Loop(a, b);
            N.myLooping.set(a, !0)
        }
    };
    N.Update = function(a) {
        for (N.myInnserSfxHelper.Update(a); 0 != N.myQueue.length;) a = N.myQueue.pop(), N.myInnserSfxHelper.Play(a.path, a.vol), a.Recycle()
    };
    N.QueueContains = function(a) {
        for (var b = 0, c = N.myQueue; b < c.length;) {
            var e = c[b];
            ++b;
            if (e.path == a) return !0
        }
        return !1
    };
    var hd = function(a) {
        this.myParticles = [];
        this.mySpawnTimer = 0;
        this.myEnabled = !1;
        this.mySpawnScale = 1;
        this.mySpawnInterval = 0.15;
        this.myMaxParticles =
            10;
        this.myParticleTtl = 0.3;
        this.mySpawnX = this.mySpawnY = this.myVelX = this.myVelY = 0;
        k.call(this);
        this.myRoot = new p;
        a.addChild(this.myRoot)
    };
    g["game.SimpleParticleEffect"] = hd;
    hd.__name__ = ["game", "SimpleParticleEffect"];
    hd.__super__ = k;
    hd.prototype = x(k.prototype, {
        get_name: function() {
            return "SimpleParticleEffect_3"
        },
        Start: function() {
            this.myEnabled = !0
        },
        onUpdate: function(a) {
            if (this.myParticles.length < this.myMaxParticles) {
                var b = new Ae;
                b.ttl = -1;
                var c = new p;
                b.sprite = new z(this.myTexture);
                b.sprite.set_visible(!1);
                b.sprite.centerAnchor();
                c.add(b.sprite);
                this.myRoot.addChild(c);
                this.myParticles.push(b)
            }
            b = 0;
            for (c = this.myParticles; b < c.length;) {
                var e = c[b];
                ++b;
                if (!(0 > e.ttl)) {
                    var d = e.sprite;
                    e.ttl -= a;
                    if (0 > e.ttl) d.set_visible(!1);
                    else {
                        d.alpha.set__(e.ttl / e.initialTtl);
                        var f = d.x;
                        f.set__(f._value + e.velX * a);
                        d = d.y;
                        d.set__(d._value + e.velY * a)
                    }
                }
            }
            this.myEnabled && (this.mySpawnTimer -= a, 0 > this.mySpawnTimer && (this.mySpawnTimer = this.mySpawnInterval, this.EmittOne()))
        },
        EmittOne: function() {
            for (var a = 0, b = this.myParticles; a < b.length;) {
                var c =
                    b[a];
                ++a;
                if (0 > c.ttl) {
                    c.sprite.set_visible(!0);
                    c.sprite.alpha.set__(1);
                    c.sprite.setScale(this.mySpawnScale);
                    c.sprite.x.set__(this.mySpawnX);
                    c.sprite.y.set__(this.mySpawnY);
                    c.ttl = c.initialTtl = this.myParticleTtl;
                    c.velX = this.myVelX;
                    c.velY = this.myVelY;
                    break
                }
            }
        },
        dispose: function() {
            k.prototype.dispose.call(this);
            this.myRoot.dispose()
        },
        __class__: hd
    });
    var Ae = function() {
        this.velX = this.velY = this.ttl = this.initialTtl = 0
    };
    g["game.Particle"] = Ae;
    Ae.__name__ = ["game", "Particle"];
    Ae.prototype = {
        __class__: Ae
    };
    var tc = function() {};
    g["game.SoundSupport"] = tc;
    tc.__name__ = ["game", "SoundSupport"];
    tc.Init = function() {
        tc.isSupported = T.get_supported()
    };
    var ca = function() {};
    g["game.SpriteExtender"] = ca;
    ca.__name__ = ["game", "SpriteExtender"];
    ca.centerX = function(a) {
        return u.getBounds(a.owner, ca.tmpRect).get_centerX()
    };
    ca.centerY = function(a) {
        return u.getBounds(a.owner, ca.tmpRect).get_centerY()
    };
    ca.centerAnchorKeepPosition = function(a) {
        ca.setAnchorKeepPosition(a, a.getNaturalWidth() / 2, a.getNaturalHeight() / 2)
    };
    ca.setAnchorKeepPosition = function(a,
        b, c) {
        var e = a.x;
        e.set__(e._value - (a.anchorX._value - b));
        e = a.y;
        e.set__(e._value - (a.anchorY._value - c));
        a.anchorX.set__(b);
        a.anchorY.set__(c)
    };
    var ve = function() {
        this.myDisposables = [];
        this.LastGiftTimeStampId = "lastGiftTimeStamp";
        this.EnabledSectionsStateId = "enabledSectionsState";
        this.EmailSignupDoneId = "emailSignupDone";
        this.TutorialStateId = "tutorialState";
        this.GardenViewTimeStampId = "gardenViewTimeStamp";
        this.MatchAnyBoosterCountId = "matchAnyBoosterCount";
        this.AimBoosterCountId = "aimBoosterCount";
        this.GardenItemStatesId_Prefix =
            "gardenItemStates";
        this.GardenItemStateIdsId = "gardenItemStateIds";
        this.GardenItemsId = "gardenItems";
        this.BalanceId = "balance";
        this.CurrentLevelId = "curLev"
    };
    g["game.StoredState"] = ve;
    ve.__name__ = ["game", "StoredState"];
    ve.prototype = {
        Initialize: function() {
            this.currentLevel = this.CreateStoredValue(this.CurrentLevelId, 1);
            this.balance = this.CreateStoredValue(this.BalanceId, 0);
            this.gardenItems = this.CreateStoredValue(this.GardenItemsId, '{"version": 0, "items": []}');
            this.aimBoosterCount = this.CreateStoredValue(this.AimBoosterCountId,
                0);
            this.matchAnyBoosterCount = this.CreateStoredValue(this.MatchAnyBoosterCountId, 0);
            this.gardenViewTimeStamp = this.CreateStoredValue(this.GardenViewTimeStampId, new Date);
            this.gardenItemStateIds = this.CreateStoredValue(this.GardenItemStateIdsId, []);
            this.gardenItemStates = new R;
            this.tutorialState = this.CreateStoredValue(this.TutorialStateId, "first-harvest");
            this.enabledSectionState = this.CreateStoredValue(this.EnabledSectionsStateId, "init");
            this.emailSignupCompleted = this.CreateStoredValue(this.EmailSignupDoneId, !1);
            this.lastGiftTimeStamp = this.CreateStoredValue(this.LastGiftTimeStampId, null);
            null == this.lastGiftTimeStamp._value && this.lastGiftTimeStamp.set__(new Date)
        },
        GenerateGardenItemStateId: function() {
            return "" + n["int"]((new Date).getTime()) + "-" + n.random(2E9)
        },
        GetGardenItemState: function(a, b) {
            var c = this.gardenItemStates.get(a);
            if (null == c) {
                c = this.GardenItemStatesId_Prefix + "." + a + "." + b;
                if (-1 == this.gardenItemStateIds._value.indexOf(c)) {
                    var e = this.gardenItemStateIds._value.slice();
                    e.push(c);
                    this.gardenItemStateIds.set__(e)
                }
                c =
                    this.CreateStoredValue(c, "");
                this.gardenItemStates.set(a, c)
            }
            return c
        },
        RemoveGardenItemState: function(a) {
            for (var b = [], a = this.GardenItemStatesId_Prefix + "." + a + ".", c = 0, e = this.gardenItemStateIds._value; c < e.length;) {
                var d = e[c];
                ++c;
                F.startsWith(d, a) && (b.push(d), this.gardenItemStates.remove(d), o._platform.getStorage().remove(d))
            }
            for (a = 0; a < b.length;) c = b[a], ++a, B.remove(this.gardenItemStateIds._value, c);
            this.gardenItemStateIds.get_changed().emit(this.gardenItemStateIds._value, this.gardenItemStateIds._value)
        },
        CreateStoredValue: function(a, b) {
            var c = new ga(o._platform.getStorage().get(a, b));
            this.myDisposables.push(c.get_changed().connect(function(a, b) {
                return function(c, f) {
                    return a(b, c, f)
                }
            }(t(this, this.OnValueChanged), a)));
            return c
        },
        OnValueChanged: function(a, b) {
            o._platform.getStorage().set(a, b)
        },
        Reset: function() {
            o._platform.getStorage().clear();
            this.Initialize()
        },
        __class__: ve
    };
    var sa = function() {};
    g["game.TimeJumpState"] = sa;
    sa.__name__ = ["game", "TimeJumpState"];
    var Be = function(a, b) {
        this.next = null;
        this.delay =
            a;
        this.cb = b
    };
    g["game.Cb"] = Be;
    Be.__name__ = ["game", "Cb"];
    Be.prototype = {
        __class__: Be
    };
    var kd = function() {
        this.myCbs = null
    };
    g["game.TimedCallbacks"] = kd;
    kd.__name__ = ["game", "TimedCallbacks"];
    kd.prototype = {
        Add: function(a, b) {
            var c = new Be(a, b);
            if (null == this.myCbs) this.myCbs = c;
            else {
                for (var e = null, d = this.myCbs; null != d;) {
                    if (d.delay > c.delay) {
                        d.delay -= c.delay;
                        null == e ? this.myCbs = c : e.next = c;
                        c.next = d;
                        return
                    }
                    c.delay -= d.delay;
                    e = d;
                    d = d.next
                }
                e.next = c
            }
        },
        Update: function(a) {
            if (null != this.myCbs)
                for (; 0 < a && null != this.myCbs;) {
                    if (this.myCbs.delay >
                        a) {
                        this.myCbs.delay -= a;
                        break
                    }
                    var a = a - this.myCbs.delay,
                        b = this.myCbs;
                    this.myCbs = this.myCbs.next;
                    b.cb()
                }
        },
        __class__: kd
    };
    var Q = function() {};
    g["game.TutorialController"] = Q;
    Q.__name__ = ["game", "TutorialController"];
    Q.Init = function(a) {
        Q.myStoredState = a
    };
    Q.OnHarvestEnd = function(a) {
        a && ("first-harvest" == Q.myStoredState.tutorialState._value || "second-harvest" == Q.myStoredState.tutorialState._value) && Q.MoveToNextMajorStep()
    };
    Q.OnEnterGardenView = function(a) {
        "first-harvest" == Q.myStoredState.tutorialState._value ? J.PopulateEnt("tutorial-harvest-button",
            a, null) : "second-harvest" == Q.myStoredState.tutorialState._value ? J.PopulateEnt("tutorial-harvest-button-2", a, null) : "first-purchase" == Q.myStoredState.tutorialState._value && 25 <= Q.myStoredState.balance._value && 3 <= Q.myStoredState.currentLevel._value && J.PopulateEnt("tutorial-purchase-item", a, null)
    };
    Q.OnEnterShop = function(a) {
        "first-purchase" == Q.myStoredState.tutorialState._value && J.PopulateEnt("tutorial-purchase-item-shop-main", a, null)
    };
    Q.OnEnterShopTreeSection = function(a) {
        "first-purchase" == Q.myStoredState.tutorialState._value &&
            J.PopulateEnt("tutorial-purchase-item-shop-trees", a, null)
    };
    Q.OnShopPurchase = function() {
        "first-purchase" == Q.myStoredState.tutorialState._value && Q.MoveToNextMajorStep()
    };
    Q.MoveToNextMajorStep = function() {
        var a = Q.mySteps.indexOf(Q.myStoredState.tutorialState._value);
        Q.myStoredState.tutorialState.set__(Q.mySteps[a + 1]);
        Q.myInnerState = ""
    };
    var Qe = function() {};
    g["game.TutorialWidget"] = Qe;
    Qe.__name__ = ["game", "TutorialWidget"];
    Qe.Create = function(a, b, c, e) {
        return (new p).add(new Hd(a, b, c, e))
    };
    var rd = function(a,
        b, c) {
        this.x = a;
        this.y = b;
        this.rot = c
    };
    g["game.PointerDetails"] = rd;
    rd.__name__ = ["game", "PointerDetails"];
    rd.prototype = {
        __class__: rd
    };
    var rc = function(a, b, c, e, d, f) {
        this.x = a;
        this.y = b;
        this.text = c;
        this.pointer = e;
        this.enterCb = d;
        this.leaveCb = f
    };
    g["game.TutorialStep"] = rc;
    rc.__name__ = ["game", "TutorialStep"];
    rc.prototype = {
        __class__: rc
    };
    var Hd = function(a, b, c, e) {
        this.myCurrentStep = 0;
        k.call(this);
        this.myAssets = a;
        this.mySteps = c;
        this.myCompletionHandler = e;
        this.myFonts = b
    };
    g["game.LegacyTutorialController"] = Hd;
    Hd.__name__ = ["game", "LegacyTutorialController"];
    Hd.__super__ = k;
    Hd.prototype = x(k.prototype, {
        get_name: function() {
            return "LegacyTutorialController_9"
        },
        onAdded: function() {
            this.LoadStep(this.mySteps[this.myCurrentStep])
        },
        LoadStep: function(a) {
            this.owner.disposeChildren();
            var b = hb.Create(0, 0, 620, 470, "standard"),
                c = new Eb(this.myFonts.Normal, a.text);
            c.setWrapWidth(580);
            c.setAlign(ja.Center);
            c.setXY(310, 160 - c.getNaturalHeight() / 2);
            this.owner.addChild((new p).add((new u).setXY(a.x, a.y).setAnchor(310, 235)).addChild(b).addChild((new p).add(c)).addChild(Aa.CreateImageBtn(this.myAssets,
                "gfx/button_play_small", 310, 370, t(this, this.OnContinuePressed), !0)));
            null != a.pointer && (b = (new z(this.myAssets.getTexture("gfx/arrow"))).setXY(a.pointer.x, a.pointer.y).setRotation(a.pointer.rot - 1.5).centerAnchor(), c = (new p).add(b).add(new Qb), c._compMap.Script_11.run(new Zc(new vb([new ub(b.rotation, a.pointer.rot + 3, 0.8, y.sineInOut), new ub(b.rotation, a.pointer.rot - 3, 0.8, y.sineInOut)]))), this.owner.addChild(c));
            null != a.enterCb && a.enterCb()
        },
        OnContinuePressed: function() {
            null != this.mySteps[this.myCurrentStep].leaveCb &&
                this.mySteps[this.myCurrentStep].leaveCb();
            this.myCurrentStep += 1;
            this.myCurrentStep == this.mySteps.length ? (this.myCompletionHandler(), this.owner.dispose()) : this.LoadStep(this.mySteps[this.myCurrentStep])
        },
        __class__: Hd
    });
    var hb = function() {};
    g["game.UiBg"] = hb;
    hb.__name__ = ["game", "UiBg"];
    hb.Init = function(a) {
        hb.myAssets = a
    };
    hb.Create = function(a, b, c, e, d, f) {
        null == f && (f = new p);
        var g = hb.myAssets.getTexture("gfx/uibg_" + d + "-corner"),
            h = hb.myAssets.getTexture("gfx/uibg_" + d + "-side"),
            i = hb.myAssets.getTexture("gfx/uibg_" +
                d + "-fill"),
            d = c - 2 * g.get_width() + 2,
            k = e - 2 * g.get_height() + 2,
            i = new eb(i);
        i.setXY(a + g.get_width() - 1, b + g.get_height() - 1);
        i.width.set__(d);
        i.height.set__(k);
        f.addChild((new p).add(i));
        d = new z(h);
        d.setXY(a + g.get_width() - 1, b);
        d.setScaleXY((c - 2 * g.get_width() + 2) / h.get_width(), 1);
        d.setRotation(0);
        f.addChild((new p).add(d));
        d = new z(h);
        d.setXY(a + c - g.get_width() + 1, b + e);
        d.setScaleXY((c - 2 * g.get_width() + 2) / h.get_width(), 1);
        d.setRotation(180);
        f.addChild((new p).add(d));
        d = new z(h);
        d.setXY(a, b + e - g.get_height() + 1);
        d.setScaleXY((e -
            2 * g.get_height() + 2) / h.get_width(), 1);
        d.setRotation(-90);
        f.addChild((new p).add(d));
        d = new z(h);
        d.setXY(a + c, b + g.get_height() - 1);
        d.setScaleXY((e - 2 * g.get_height() + 2) / h.get_width(), 1);
        d.setRotation(90);
        f.addChild((new p).add(d));
        h = new z(g);
        h.setXY(a, b);
        h.setRotation(0);
        f.addChild((new p).add(h));
        h = new z(g);
        h.setXY(a + c, b);
        h.setRotation(90);
        f.addChild((new p).add(h));
        h = new z(g);
        h.setXY(a + c, b + e);
        h.setRotation(180);
        f.addChild((new p).add(h));
        c = new z(g);
        c.setXY(a, b + e);
        c.setRotation(270);
        f.addChild((new p).add(c));
        return f
    };
    var sc = function() {
        this.myNamedReloaders = new R;
        this.myNamedItems = new R;
        this.myActionHandlers = new R;
        k.call(this)
    };
    g["game.WidgetBindings"] = sc;
    sc.__name__ = ["game", "WidgetBindings"];
    sc.__super__ = k;
    sc.prototype = x(k.prototype, {
        get_name: function() {
            return "WidgetBindings_19"
        },
        OnAction: function(a, b) {
            var c = this.myActionHandlers.get(a);
            null != c && c(b)
        },
        SetActionHandler: function(a, b) {
            this.myActionHandlers.set(a, function() {
                b()
            })
        },
        SetActionHandlerWithMeta: function(a, b) {
            this.myActionHandlers.set(a, b)
        },
        ReloadNamedItem: function(a) {
            a =
                this.myNamedReloaders.get(a);
            null != a && a()
        },
        GetNamedItem: function(a) {
            return this.myNamedItems.get(a)
        },
        SetNamedItem: function(a, b, c) {
            this.myNamedItems.set(a, b);
            this.myNamedReloaders.set(a, c)
        },
        ReloadWidget: function() {
            null != this.myReloadFunc && this.myReloadFunc()
        },
        _SetReloadFunc: function(a) {
            this.myReloadFunc = a
        },
        GetMetaF: function(a) {
            return null == this.myMeta ? null : this.myMeta.GetF(a)
        },
        SetMetaF: function(a, b) {
            null == this.myMeta && (this.myMeta = new Ce);
            this.myMeta.SetF(a, b)
        },
        __class__: sc
    });
    var De = function() {};
    g["game.WidgetFactoryInput"] =
        De;
    De.__name__ = ["game", "WidgetFactoryInput"];
    De.prototype = {
        __class__: De
    };
    var Id = function() {
        this.mySteps = []
    };
    g["game.PipelineBuilder"] = Id;
    Id.__name__ = ["game", "PipelineBuilder"];
    Id.prototype = {
        AddStep: function(a) {
            this.GetLast().mySteps.push(a)
        },
        PushLayer: function() {
            this.GetLast().myInnerPipeline = new Id
        },
        PopLayer: function() {
            var a = this;
            if (null != a.myInnerPipeline)
                for (; null != a.myInnerPipeline.myInnerPipeline;) a = a.myInnerPipeline;
            if (null == a.myInnerPipeline) {
                var b = a.mySteps;
                a.mySteps = [];
                return b
            }
            b = a.myInnerPipeline.mySteps;
            a.myInnerPipeline = null;
            return b
        },
        IsTopLayer: function() {
            return null == this.myInnerPipeline
        },
        GetLast: function() {
            for (var a = this; null != a.myInnerPipeline;) a = a.myInnerPipeline;
            return a
        },
        __class__: Id
    };
    var J = function() {};
    g["game.WidgetBuilder"] = J;
    J.__name__ = ["game", "WidgetBuilder"];
    J.Init = function(a, b, c) {
        J.myAssets = a;
        J.myFonts = b;
        J.myLocalization = c;
        J.myWidgetFactories = new R;
        J.ReloadScript(0, 0)
    };
    J.PopulateEnt = function(a, b, c, e) {
        var d = J.myWidgetFactories.get(a);
        if (null != d) {
            if (null == e) e = new p, b.addChild(e);
            else {
                e.disposeChildren();
                for (var f = e.firstComponent; null != f;) f.dispose(), f = f.next
            }
            null == b._compMap.WidgetBindings_19 && b.add(new sc);
            f = b._compMap.WidgetBindings_19;
            f.widgetId = a;
            f._SetReloadFunc(function(a, b, c, d, e) {
                return function() {
                    return a(b, c, d, e)
                }
            }(J.PopulateEnt, a, b, c, e));
            var g = new De;
            g.ent = b;
            g.child = e;
            g.extDataFetcher = c;
            g.widgetBindings = f;
            g.childBounds = new qa(0, 0, D.TargetWidth, D.TargetHeight);
            d._value(g);
            null == e._compMap.Disposer_20 && e.add(new lb);
            e._compMap.Disposer_20.add(d.get_changed().connect(function() {
                J.PopulateEnt(a,
                    b, c, e)
            }))
        }
    };
    J.ReloadScript = function() {
        var a = function(a) {
                return function(b) {
                    a.ref = r.GetIntOrThrow(b.first())
                }
            },
            b = function(a) {
                return function(b) {
                    b = b.first();
                    a.ref = r.IsString(b) ? n.parseFloat(r.GetStringOrThrow(b)) : r.GetIntOrThrow(b)
                }
            },
            c = function(a) {
                return function(b) {
                    a.ref = r.GetStringOrThrow(b.first())
                }
            },
            e = new zd;
        e.SetHandler("widget", function(d) {
            var f = d.first();
            d.remove(f);
            var f = e.Eval(f),
                g = r.GetStringOrThrow(f),
                h = new Id;
            h.PushLayer();
            e.ClearHandler("widget");
            e.SetHandler("bg-img", function(a) {
                e.ClearHandler("bg-img");
                var b = r.GetStringOrThrow(e.Eval(a.first()));
                h.AddStep(function(a) {
                    null == a.child._compMap.Disposer_20 && a.child.add(new lb);
                    var c = new z(J.myAssets.getTexture(b));
                    a.child._compMap.Disposer_20.add(c.get_pointerDown().connect(function() {
                        a.widgetBindings.OnAction("pointerDown", null)
                    }));
                    null != a.child._compMap.Sprite_12 && null;
                    a.child.add(c)
                })
            });
            e.SetHandler("init", function(a) {
                for (var b = [], a = r.GetExpressionOrThrow(e.Eval(a.first())).iterator(); a.hasNext();) {
                    var c = a.next(),
                        c = e.Eval(c);
                    r.IsString(c) ? b.push(r.GetStringOrThrow(c)) :
                        b.push(r.Stringify(c))
                }
                h.AddStep(function(a) {
                    a.widgetBindings.OnAction("init", b)
                })
            });
            e.SetHandler("meta-f", function(a) {
                var b = a.iterator(),
                    a = b.next(),
                    b = b.next(),
                    a = e.Eval(a),
                    b = e.Eval(b),
                    c = r.GetStringOrThrow(e.Eval(a)),
                    d = r.GetStringOrThrow(e.Eval(b));
                h.AddStep(function(a) {
                    a.widgetBindings.SetMetaF(c, n.parseFloat(d))
                })
            });
            e.SetHandler("scroll-view", function() {
                h.PushLayer();
                var b = new L(0),
                    c = new L(0),
                    d = new L(100),
                    f = new L(100);
                e.SetFunctionSimple("x", a(b));
                e.SetFunctionSimple("y", a(c));
                e.SetFunctionSimple("w",
                    a(d));
                e.SetFunctionSimple("h", a(f));
                e.SetFinalizer(function() {
                    var a = h.PopLayer();
                    h.AddStep(function(e) {
                        var g = new p;
                        e.child.addChild(g);
                        var h = new p,
                            j = new u;
                        h.add(j);
                        g.addChild(h);
                        j = new Fd(j);
                        g.add(j);
                        j.x.set__(b.ref);
                        j.y.set__(c.ref);
                        j.scissor = new qa(0, 0, d.ref, f.ref);
                        j.width = d.ref;
                        j.height = f.ref;
                        g = e.child;
                        j = e.childBounds;
                        e.child = h;
                        e.childBounds = new qa(b.ref, c.ref, d.ref, f.ref);
                        for (h = 0; h < a.length;) {
                            var i = a[h];
                            ++h;
                            i(e)
                        }
                        e.child = g;
                        e.childBounds = j
                    })
                })
            });
            e.SetHandler("text", function() {
                e.ClearHandler("text");
                var b = new L,
                    d = new L("large"),
                    f = new L("left"),
                    g = new L(0),
                    j = !1,
                    i = new L(0),
                    k = new L(-1),
                    l = new L(""),
                    m = new L(1);
                e.SetFunctionSimple("name", c(b));
                e.SetFunctionSimple("text", c(l));
                e.SetFunctionSimple("style", c(d));
                e.SetFunctionSimple("align", c(f));
                e.SetFunctionSimple("width", a(k));
                e.SetFunctionSimple("localization", a(m));
                e.SetFunctionSimple("pos", function(a) {
                    var b = a.iterator(),
                        a = b.next(),
                        b = b.next();
                    r.IsString(a) && "center" == r.GetStringOrThrow(a) ? j = !0 : g.ref = r.GetIntOrThrow(a);
                    i.ref = r.GetIntOrThrow(b)
                });
                e.SetFinalizer(function() {
                    h.AddStep(function(a) {
                        var c =
                            new p;
                        a.child.addChild(c);
                        var e = J.myFonts.Normal;
                        "small" == d.ref && (e = J.myFonts.Small);
                        var h = new Eb(e);
                        c.add(h);
                        0 < k.ref && h.setWrapWidth(k.ref);
                        c = function() {
                            var b;
                            b = 1 == m.ref ? J.myLocalization.Get(l.ref) : l.ref;
                            h.set_text(function(b) {
                                if (null == a.extDataFetcher) return b;
                                for (var c = "";;) {
                                    var d = b.indexOf("$(");
                                    if (-1 == d) {
                                        c += b;
                                        break
                                    }
                                    c += b.substring(0, d);
                                    b = b.substring(d);
                                    d = b.indexOf(")");
                                    if (-1 == d) break;
                                    var e = b.substring(2, d),
                                        c = c + a.extDataFetcher(e),
                                        b = b.substring(d + 1)
                                }
                                return c
                            }(b));
                            "center" == f.ref ? h.set_align(ja.Center) :
                                "right" == f.ref && h.set_align(ja.Right);
                            b = g.ref;
                            j && (b = Math.round(a.childBounds.width / 2));
                            h.setXY(b, i.ref)
                        };
                        c();
                        null != b.ref && a.widgetBindings.SetNamedItem(b.ref, h, c)
                    })
                })
            });
            e.SetHandler("child", function() {
                h.PushLayer();
                var a = new L(null),
                    d = new L(0),
                    f = new L(0);
                e.SetFunctionSimple("name", c(a));
                e.SetFunctionSimple("x", b(d));
                e.SetFunctionSimple("y", b(f));
                e.SetFinalizer(function() {
                    var b = h.PopLayer();
                    h.AddStep(function(c) {
                        var e = c.child;
                        c.child = new p;
                        null != a.ref && c.widgetBindings.SetNamedItem(a.ref, c.child, null);
                        e.addChild(c.child);
                        for (var g = 0; g < b.length;) {
                            var h = b[g];
                            ++g;
                            h(c)
                        }
                        null == c.child._compMap.Sprite_12 && c.child.add(new u);
                        c.child._compMap.Sprite_12.setXY(d.ref, f.ref);
                        c.child = e
                    })
                })
            });
            e.SetHandler("subwidget", function() {
                var b = new L(0),
                    d = new L(0),
                    f = new L(0),
                    g = new L(null),
                    j = new L(null);
                e.SetFunctionSimple("x", a(b));
                e.SetFunctionSimple("y", a(d));
                e.SetFunctionSimple("name", c(g));
                e.SetFunctionSimple("widget-name", c(j));
                e.SetFunctionSimple("center-anchor", a(f));
                e.SetFinalizer(function() {
                    h.AddStep(function(a) {
                        var c =
                            new p;
                        J.PopulateEnt(j.ref, c, null);
                        null == c._compMap.Sprite_12 && c.add(new u);
                        if (0 != f.ref) {
                            var e = u.getBounds(c, J.tmpRect);
                            c._compMap.Sprite_12.setAnchor(e.get_centerX(), e.get_centerY())
                        }
                        c._compMap.Sprite_12.setXY(b.ref, d.ref);
                        null != g.ref && a.widgetBindings.SetNamedItem(g.ref, c, null);
                        a.child.addChild(c)
                    })
                })
            });
            e.SetHandler("uibg", function() {
                h.PushLayer();
                var b = new L(0),
                    d = new L(0),
                    f = new L(null),
                    g = new L(0),
                    j = new L(0),
                    i = new L("standard"),
                    k = new L(null);
                e.SetFunctionSimple("x", a(b));
                e.SetFunctionSimple("y",
                    a(d));
                e.SetFunctionSimple("width", a(g));
                e.SetFunctionSimple("height", a(j));
                e.SetFunctionSimple("center", c(f));
                e.SetFunctionSimple("style", c(i));
                e.SetFunctionSimple("name", c(k));
                e.SetFinalizer(function() {
                    var a = h.PopLayer();
                    h.AddStep(function(c) {
                        null != f.ref && (-1 != f.ref.indexOf("x") && (b.ref = Math.round(0.5 * c.childBounds.width - 0.5 * g.ref)), -1 != f.ref.indexOf("y") && (d.ref = Math.round(0.5 * c.childBounds.height - 0.5 * j.ref)));
                        var e = c.child,
                            h = c.childBounds;
                        c.child = (new p).add(new u);
                        c.childBounds = new qa(b.ref, d.ref,
                            g.ref, j.ref);
                        e.addChild(c.child);
                        c.child._compMap.Sprite_12.setXY(b.ref, d.ref);
                        var l = hb.Create(0, 0, g.ref, j.ref, i.ref);
                        c.child.addChild(l, !1);
                        for (l = 0; l < a.length;) {
                            var m = a[l];
                            ++l;
                            m(c)
                        }
                        null != k.ref && c.widgetBindings.SetNamedItem(k.ref, c.child, null);
                        c.child = e;
                        c.childBounds = h
                    })
                })
            });
            e.SetHandler("image", function() {
                h.PushLayer();
                var d = new L(0),
                    f = new L(0),
                    g = new L(0),
                    j = new L(1),
                    i = new L(1),
                    k = new L(0),
                    l = new L(0),
                    m = new L("image path not set"),
                    n = new L(null),
                    o = new L(null);
                e.SetFunctionSimple("x", a(d));
                e.SetFunctionSimple("y",
                    a(f));
                e.SetFunctionSimple("rot", a(g));
                e.SetFunctionSimple("scale-x", b(j));
                e.SetFunctionSimple("scale-y", b(i));
                e.SetFunctionSimple("center-anchor", a(k));
                e.SetFunctionSimple("center-anchor-same-pos", a(l));
                e.SetFunctionSimple("path", c(m));
                e.SetFunctionSimple("name", c(n));
                e.SetFunctionSimple("action", c(o));
                e.SetFinalizer(function() {
                    var a = h.PopLayer();
                    h.AddStep(function(b) {
                        var c = new p,
                            e = new z(J.myAssets.getTexture(m.ref));
                        c.add(e);
                        e.setXY(d.ref, f.ref);
                        if (0 != k.ref) e.centerAnchor();
                        else if (0 != l.ref) {
                            e.centerAnchor();
                            var h = e.x;
                            h.set__(h._value + e.anchorX._value);
                            h = e.y;
                            h.set__(h._value + e.anchorY._value)
                        }
                        0 != g.ref && e.rotation.set__(g.ref);
                        if (null != o.ref) {
                            var s = !1;
                            Qa.GetDisposer(c).add(e.get_pointerDown().connect(function(a) {
                                s = !0;
                                a._stopped = !0
                            }));
                            Qa.GetDisposer(c).add(e.get_pointerMove().connect(function(a) {
                                a._stopped = !0
                            }));
                            Qa.GetDisposer(c).add(e.get_pointerOut().connect(function(a) {
                                a._stopped = !0
                            }));
                            Qa.GetDisposer(c).add(e.get_pointerUp().connect(function(a) {
                                a._stopped = !0;
                                s && b.widgetBindings.OnAction(o.ref, null);
                                s = !1
                            }))
                        }
                        e.scaleX.set__(j.ref);
                        e.scaleY.set__(i.ref);
                        h = b.child;
                        h.addChild(c);
                        b.child = c;
                        for (c = 0; c < a.length;) {
                            var q = a[c];
                            ++c;
                            q(b)
                        }
                        null != n.ref && b.widgetBindings.SetNamedItem(n.ref, e, null);
                        b.child = h
                    })
                })
            });
            e.SetHandler("enter-transition", function() {
                var a = [];
                e.SetFunctionSimple("fade-in", function(b) {
                    var c = n.parseFloat(r.GetStringOrThrow(e.Eval(b.first())));
                    a.push(function(a) {
                        return G.FadeIn(a._compMap.Sprite_12, c)
                    })
                });
                e.SetFunctionSimple("delay", function(b) {
                    var c = n.parseFloat(r.GetStringOrThrow(e.Eval(b.first())));
                    a.push(function() {
                        return G.Delay(c)
                    })
                });
                e.SetFunctionSimple("set-alpha", function(b) {
                    var c = n.parseFloat(r.GetStringOrThrow(e.Eval(b.first())));
                    a.push(function(a) {
                        return G.Function(function() {
                            a._compMap.Sprite_12.alpha.set__(c)
                        })
                    })
                });
                e.SetFinalizer(function() {
                    h.AddStep(function(b) {
                        var c = b.child._compMap.Animator_10;
                        null == c && (c = new xa, b.child.add(c));
                        null == b.child._compMap.Sprite_12 && b.child.add(new u);
                        for (var d = [], e = 0; e < a.length;) {
                            var f = a[e];
                            ++e;
                            d.push(f(b.child))
                        }
                        c.Play("enter-transition", new Ua(d))
                    })
                })
            });
            e.SetHandler("button", function() {
                e.ClearHandler("button");
                var a = null,
                    b = null,
                    c = null,
                    d = null,
                    f = null,
                    g = 0,
                    j = 0,
                    i = "normal",
                    k = !1;
                e.SetFunctionSimple("name", function(b) {
                    a = r.GetStringOrThrow(b.first())
                });
                e.SetFunctionSimple("style", function(a) {
                    i = r.GetStringOrThrow(a.first())
                });
                e.SetFunctionSimple("action", function(a) {
                    var a = a.iterator(),
                        d = a.next();
                    b = r.GetStringOrThrow(d);
                    if (a.hasNext()) {
                        c = [];
                        for (a = r.GetExpressionOrThrow(a.next()).iterator(); a.hasNext();) d = a.next(), d = e.Eval(d), r.IsString(d) ? c.push(r.GetStringOrThrow(d)) :
                            c.push(r.Stringify(d))
                    }
                });
                e.SetFunctionSimple("image", function(a) {
                    d = r.GetStringOrThrow(a.first())
                });
                e.SetFunctionSimple("text", function(a) {
                    f = r.GetStringOrThrow(a.first())
                });
                e.SetFunctionSimple("pos", function(a) {
                    var b = a.iterator(),
                        a = b.next(),
                        b = b.next();
                    r.IsString(a) && "center" == r.GetStringOrThrow(a) ? k = !0 : g = r.GetIntOrThrow(a);
                    j = r.GetIntOrThrow(b)
                });
                e.SetFinalizer(function() {
                    h.AddStep(function(e) {
                        var h = function() {
                            null != b && e.widgetBindings.OnAction(b, c)
                        };
                        k && (g = Math.round(e.childBounds.width / 2));
                        var l =
                            null;
                        if (null != f) {
                            if (l = J.myLocalization.Get(f), l = Aa.Create(J.myAssets, J.myFonts, g, j, l, h, i), k) {
                                var h = l._compMap.Sprite_12,
                                    m = h.x;
                                m.set__(m._value - h.getNaturalWidth() / 2)
                            }
                        } else if (null != d) l = Aa.CreateImageBtn(J.myAssets, d, g, j, h, "dance" == i);
                        else return;
                        null != a && e.widgetBindings.SetNamedItem(a, l._compMap.Sprite_12, null);
                        e.child.addChild(l)
                    })
                })
            });
            e.SetFinalizer(function() {
                var a = h.PopLayer();
                cc.that(h.IsTopLayer(), null, null);
                var b = function(b) {
                        for (var c = 0; c < a.length;) {
                            var d = a[c];
                            ++c;
                            d(b)
                        }
                    },
                    c = J.myWidgetFactories.get(g);
                null == c ? (b = new ga(b), J.myWidgetFactories.set(g, b)) : c.set__(b)
            })
        });
        e.Run("", J.LoadHardcoded())
    };
    J.LoadHardcoded = function() {
        var a = function() {
                var a = new Ka,
                    b = null;
                return b = function(c) {
                    if (null == c) return a;
                    a.add(c);
                    return b
                }
            },
            b = A.Expr,
            c = function(a) {
                return A.Atom(v.Num(a))
            },
            e = function(a) {
                return A.Atom(v.Str(a))
            },
            d = function(a) {
                return A.Atom(v.Identifier(a))
            };
        A.Atom(v.Nil);
        A.Atom(v.Quote);
        return b(a()(d("do"))(b(a()(d("macro"))(d("ext"))(b(a()(d("key"))(null)))(b(a()(d("str"))(e("$("))(d("key"))(e(")"))(null)))(null)))(b(a()(d("macro"))(d("ui-box"))(b(a()(d("_x"))(d("_y"))(d("w"))(d("h"))(d("contents"))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(d("_x"))(null)))(b(a()(d("y"))(d("_y"))(null)))(b(a()(d("width"))(d("w"))(null)))(b(a()(d("height"))(d("h"))(null)))(b(a()(d("style"))(e("standard"))(null)))(d("contents"))(null)))(null)))(b(a()(d("defn"))(d("center-x"))(b(a()(d("/"))(c(750))(c(2))(null)))(null)))(b(a()(d("defn"))(d("center-y"))(b(a()(d("/"))(c(1100))(c(2))(null)))(null)))(b(a()(d("macro"))(d("ui-box-centered"))(b(a()(d("w"))(d("h"))(d("contents"))(null)))(b(a()(d("ui-box"))(b(a()(d("-"))(d("center-x"))(b(a()(d("/"))(d("w"))(c(2))(null)))(null)))(b(a()(d("-"))(d("center-y"))(b(a()(d("/"))(d("h"))(c(2))(null)))(null)))(d("w"))(d("h"))(d("contents"))(null)))(null)))(b(a()(d("macro"))(d("coin-image"))(b(a()(d("_x"))(d("_y"))(d("scale"))(null)))(b(a()(d("image"))(b(a()(d("x"))(d("_x"))(null)))(b(a()(d("y"))(d("_y"))(null)))(b(a()(d("scale-x"))(d("scale"))(null)))(b(a()(d("scale-y"))(d("scale"))(null)))(b(a()(d("path"))(e("gfx/res_part_cash"))(null)))(null)))(null)))(b(a()(d("macro"))(d("make-item"))(b(a()(d("id"))(d("price"))(d("init-metas"))(d("widget-meta-fs"))(null)))(b(a()(d("make-hash"))(e("id"))(d("id"))(e("price"))(d("price"))(e("action"))(e("buy"))(e("action-meta"))(b(a()(d("'"))(d("id"))(d("price"))(null)))(e("init-meta"))(d("init-metas"))(e("widget-meta-fs"))(d("widget-meta-fs"))(e("display-name"))(b(a()(d("str"))(d("id"))(e(".DISP_NAME"))(null)))(e("description"))(b(a()(d("str"))(d("id"))(e(".DESC"))(null)))(e("widget-id"))(b(a()(d("str"))(e("garden."))(d("id"))(null)))(e("widget-move-id"))(b(a()(d("str"))(e("garden."))(d("id"))(e(".move"))(null)))(e("widget-centered-id"))(b(a()(d("str"))(e("garden."))(d("id"))(e(".centered"))(null)))(e("widget-details-id"))(b(a()(d("str"))(e("garden."))(d("id"))(e(".details"))(null)))(e("widget-shop-details-id"))(b(a()(d("str"))(e("garden.shop."))(d("id"))(e(".details"))(null)))(e("bg-img"))(b(a()(d("str"))(e("gfx/"))(d("id"))(null)))(e("shop-root-name"))(b(a()(d("str"))(e("shop-root."))(d("id"))(null)))(null)))(null)))(b(a()(d("macro"))(d("format-comp-params"))(b(a()(d("prefix"))(d("params"))(null)))(b(a()(d("if"))(d("params"))(b(a()(d("format-comp-params"))(b(a()(d("str"))(d("prefix"))(b(a()(d("head"))(d("params"))(null)))(e(";"))(b(a()(d("head"))(b(a()(d("tail"))(d("params"))(null)))(null)))(e(";"))(null)))(b(a()(d("tail"))(b(a()(d("tail"))(d("params"))(null)))(null)))(null)))(d("prefix"))(null)))(null)))(b(a()(d("macro"))(d("animator"))(b(a()(d("prefix"))(d("params"))(null)))(b(a()(d("format-comp-params"))(e("comp:animator;"))(d("params"))(null)))(null)))(b(a()(d("macro"))(d("centered-text"))(b(a()(d("y"))(d("str"))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(d("y"))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("text"))(d("str"))(null)))(null)))(null)))(b(a()(d("macro"))(d("centered-text-wordwrap"))(b(a()(d("y"))(d("w"))(d("str"))(null)))(b(a()(d("text"))(b(a()(d("width"))(d("w"))(null)))(b(a()(d("pos"))(e("center"))(d("y"))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("text"))(d("str"))(null)))(null)))(null)))(b(a()(d("macro"))(d("centered-text-small-wordwrap"))(b(a()(d("y"))(d("w"))(d("str"))(null)))(b(a()(d("text"))(b(a()(d("width"))(d("w"))(null)))(b(a()(d("pos"))(e("center"))(d("y"))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("text"))(d("str"))(null)))(b(a()(d("style"))(e("small"))(null)))(null)))(null)))(b(a()(d("defn"))(d("animations-bounces"))(b(a()(d("animator"))(e(""))(b(a()(d("'"))(e("conv_end"))(e("bounce-scale"))(e("queue_add"))(e("bounce-scale"))(e("item-move-completed"))(e("landing"))(null)))(null)))(null)))(b(a()(d("defn"))(d("animations-factory"))(b(a()(d("animator"))(e(""))(b(a()(d("'"))(e("conv_start"))(e("shake-long"))(e("conv_end"))(e("clear"))(e("conv_end"))(e("bounce-scale"))(e("queue_add"))(e("bounce-scale"))(e("item-move-completed"))(e("landing"))(null)))(null)))(null)))(b(a()(d("defn"))(d("animations-tree"))(b(a()(d("animator"))(e(""))(b(a()(d("'"))(e("orange_spawn"))(e("shrink-and-bounce"))(e("item-move-completed"))(e("landing"))(null)))(null)))(null)))(b(a()(d("macro"))(d("meta-impl"))(b(a()(d("prefix"))(d("details"))(null)))(b(a()(d("if"))(d("details"))(b(a()(d("meta-impl"))(b(a()(d("str"))(d("prefix"))(b(a()(d("head"))(d("details"))(null)))(b(a()(d("head"))(b(a()(d("tail"))(d("details"))(null)))(null)))(b(a()(d("head"))(b(a()(d("tail"))(b(a()(d("tail"))(d("details"))(null)))(null)))(null)))(null)))(b(a()(d("tail"))(b(a()(d("tail"))(b(a()(d("tail"))(d("details"))(null)))(null)))(null)))(null)))(d("prefix"))(null)))(null)))(b(a()(d("macro"))(d("meta-fs"))(b(a()(d("lst"))(null)))(b(a()(d("if"))(b(a()(d("tail"))(d("lst"))(null)))(b(a()(d("do"))(b(a()(d("meta-f"))(b(a()(d("head"))(d("lst"))(null)))(b(a()(d("head"))(b(a()(d("tail"))(d("lst"))(null)))(null)))(null)))(b(a()(d("meta-fs"))(b(a()(d("tail"))(b(a()(d("tail"))(d("lst"))(null)))(null)))(null)))(null)))(c(0))(null)))(null)))(b(a()(d("macro"))(d("position-limit-stand"))(b(a()(null)))(b(a()(d("'"))(e("min-y"))(e("914"))(e("max-y"))(e("914"))(null)))(null)))(b(a()(d("macro"))(d("wheel"))(b(a()(d("x"))(d("y"))(null)))(b(a()(d("'"))(e("wheel-x"))(d("x"))(e("wheel-y"))(d("y"))(null)))(null)))(b(a()(d("macro"))(d("juice-pour1"))(b(a()(d("x"))(d("y"))(null)))(b(a()(d("'"))(e("juice-pour-x"))(d("x"))(e("juice-pour-y"))(d("y"))(null)))(null)))(b(a()(d("macro"))(d("juice-pour2"))(b(a()(d("x"))(d("y"))(null)))(b(a()(d("'"))(e("juice-pour2-x"))(d("x"))(e("juice-pour2-y"))(d("y"))(null)))(null)))(b(a()(d("macro"))(d("pressure-meter"))(b(a()(d("num"))(d("x"))(d("y"))(null)))(b(a()(d("'"))(b(a()(d("str"))(e("pressure-meter"))(d("num"))(e("-x"))(null)))(d("x"))(b(a()(d("str"))(e("pressure-meter"))(d("num"))(e("-y"))(null)))(d("y"))(null)))(null)))(b(a()(d("defn"))(d("items"))(b(a()(d("make-hash"))(e("STAND"))(b(a()(d("make-item"))(e("STAND"))(c(50))(b(a()(d("'"))(e("comp:resourceQueue;orange;1;40;-90;-35;juice;1;40;0;-35;icecream;1;40;90;-35"))(e("comp:crowd;80;25;2;20;15;orange;10;1.0;juice;22;1.5;icecream;24;2.0"))(e("comp:resourceDisplayHider"))(d("animations-bounces"))(null)))(b(a()(d("position-limit-stand"))(null)))(null)))(e("STAND2"))(b(a()(d("make-item"))(e("STAND2"))(c(249))(b(a()(d("'"))(e("comp:resourceQueue;orange;2;70;-90;-35;juice;2;70;0;-35;icecream;2;70;90;-35"))(e("comp:crowd;100;25;3;10;11;orange;11;1.0;juice;23;1.5;icecream;25;2.0"))(e("comp:resourceDisplayHider"))(d("animations-bounces"))(null)))(b(a()(d("position-limit-stand"))(null)))(null)))(e("STAND3"))(b(a()(d("make-item"))(e("STAND3"))(c(1399))(b(a()(d("'"))(e("comp:resourceQueue;orange;3;99;-90;-35;juice;3;99;0;-35;icecream;3;99;90;-35"))(e("comp:crowd;100;25;4;7;11;orange;13;1.0;juice;25;1.5;icecream;27;2.0"))(e("comp:resourceDisplayHider"))(d("animations-bounces"))(null)))(b(a()(d("position-limit-stand"))(null)))(null)))(e("OTREE"))(b(a()(d("make-item"))(e("OTREE"))(c(25))(b(a()(d("'"))(e("comp:orangeMultiplier;1"))(d("animations-tree"))(null)))(b(a()(d("'"))(null)))(null)))(e("OTREE2"))(b(a()(d("make-item"))(e("OTREE2"))(c(99))(b(a()(d("'"))(e("comp:orangeMultiplier;2"))(d("animations-tree"))(null)))(b(a()(d("'"))(null)))(null)))(e("OTREE3"))(b(a()(d("make-item"))(e("OTREE3"))(c(399))(b(a()(d("'"))(e("comp:orangeMultiplier;3"))(d("animations-tree"))(null)))(b(a()(d("'"))(null)))(null)))(e("OTREE4"))(b(a()(d("make-item"))(e("OTREE4"))(c(1599))(b(a()(d("'"))(e("comp:orangeMultiplier;4"))(d("animations-tree"))(null)))(b(a()(d("'"))(null)))(null)))(e("JUICER"))(b(a()(d("make-item"))(e("JUICER"))(c(95))(b(a()(d("'"))(e("comp:resourceQueue;orange;10;6;30;-69"))(e("comp:resourceConverter;orange;juice;2;1;16;-100;40"))(d("animations-factory"))(null)))(b(a()(d("append"))(b(a()(d("wheel"))(e("142"))(e("80"))(null)))(b(a()(d("juice-pour1"))(e("17"))(e("84"))(null)))(null)))(null)))(e("JUICER2"))(b(a()(d("make-item"))(e("JUICER2"))(c(1499))(b(a()(d("'"))(e("comp:resourceQueue;orange;11;25;34;-67"))(e("comp:resourceConverter;orange;juice;2;1;10;-107;46"))(d("animations-factory"))(null)))(b(a()(d("append"))(b(a()(d("wheel"))(e("158"))(e("90"))(null)))(b(a()(d("juice-pour2"))(e("0"))(e("97"))(null)))(null)))(null)))(e("ICECREAMMAKER"))(b(a()(d("make-item"))(e("ICECREAMMAKER"))(c(197))(b(a()(d("'"))(e("comp:resourceQueue;juice;12;5;0;0"))(e("comp:resourceConverter;juice;icecream;1;1;20;0;0"))(d("animations-factory"))(null)))(b(a()(d("append"))(b(a()(d("pressure-meter"))(c(1))(e("96"))(e("66"))(null)))(b(a()(d("pressure-meter"))(c(2))(e("96"))(e("93"))(null)))(null)))(null)))(e("ICECREAMMAKER2"))(b(a()(d("make-item"))(e("ICECREAMMAKER2"))(c(2995))(b(a()(d("'"))(e("comp:resourceQueue;juice;13;20;0;0"))(e("comp:resourceConverter;juice;icecream;1;1;14;0;0"))(d("animations-factory"))(null)))(b(a()(d("append"))(b(a()(d("pressure-meter"))(c(1))(e("105"))(e("61"))(null)))(b(a()(d("pressure-meter"))(c(2))(e("118"))(e("87"))(null)))(b(a()(d("pressure-meter"))(c(3))(e("105"))(e("113"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("shop-button"))(b(a()(d("item"))(d("x"))(d("y"))(null)))(b(a()(d("child"))(b(a()(d("name"))(b(a()(d("item"))(e("shop-root-name"))(null)))(null)))(b(a()(d("do"))(b(a()(d("text"))(b(a()(d("text"))(b(a()(d("item"))(e("display-name"))(null)))(null)))(b(a()(d("pos"))(d("x"))(d("y"))(null)))(null)))(b(a()(d("text"))(b(a()(d("pos"))(d("x"))(b(a()(d("+"))(d("y"))(c(62))(null)))(null)))(b(a()(d("text"))(e("SHOP.PRICE"))(null)))(null)))(b(a()(d("text"))(b(a()(d("name"))(b(a()(d("str"))(e("price-label."))(b(a()(d("item"))(e("id"))(null)))(null)))(null)))(b(a()(d("localization"))(c(0))(null)))(b(a()(d("align"))(e("right"))(null)))(b(a()(d("text"))(b(a()(d("str"))(b(a()(d("item"))(e("price"))(null)))(null)))(null)))(b(a()(d("pos"))(b(a()(d("+"))(d("x"))(c(230))(null)))(b(a()(d("+"))(d("y"))(c(62))(null)))(null)))(null)))(b(a()(d("coin-image"))(b(a()(d("+"))(d("x"))(c(233))(null)))(b(a()(d("+"))(d("y"))(c(76))(null)))(e("1.0"))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP.INFO"))(null)))(b(a()(d("pos"))(b(a()(d("+"))(d("x"))(c(300))(null)))(b(a()(d("+"))(d("y"))(c(60))(null)))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("action"))(e("overlay"))(b(a()(d("'"))(b(a()(d("item"))(e("widget-shop-details-id"))(null)))(null)))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP.BUY"))(null)))(b(a()(d("pos"))(b(a()(d("+"))(d("x"))(c(500))(null)))(b(a()(d("+"))(d("y"))(c(60))(null)))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("action"))(b(a()(d("item"))(e("action"))(null)))(b(a()(d("item"))(e("action-meta"))(null)))(null)))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("shop-buttons"))(b(a()(d("list"))(d("x"))(d("y"))(null)))(b(a()(d("unless-empty"))(d("list"))(b(a()(d("do"))(b(a()(d("shop-button"))(b(a()(d("items"))(b(a()(d("head"))(d("list"))(null)))(null)))(d("x"))(d("y"))(null)))(b(a()(d("shop-buttons"))(b(a()(d("tail"))(d("list"))(null)))(d("x"))(b(a()(d("+"))(d("y"))(c(170))(null)))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("level-and-balance-view"))(b(a()(d("in-menu"))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(480))(null)))(b(a()(d("y"))(c(-50))(null)))(b(a()(d("width"))(c(500))(null)))(b(a()(d("height"))(c(200))(null)))(b(a()(d("style"))(e("standard"))(null)))(b(a()(d("if"))(d("in-menu"))(b(a()(d("name"))(e("low-ui-layer"))(null)))(null)))(b(a()(d("do"))(b(a()(d("text"))(b(a()(d("name"))(e("level"))(null)))(b(a()(d("text"))(e("GARDEN.LEVEL"))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("pos"))(c(145))(c(58))(null)))(null)))(b(a()(d("image"))(b(a()(d("name"))(e("balance-coin"))(null)))(b(a()(d("x"))(c(200))(null)))(b(a()(d("y"))(c(130))(null)))(b(a()(d("path"))(e("gfx/res_part_cash"))(null)))(null)))(b(a()(d("text"))(b(a()(d("name"))(e("balance"))(null)))(b(a()(d("text"))(e("BALANCE"))(null)))(b(a()(d("align"))(e("right"))(null)))(b(a()(d("pos"))(c(194))(c(113))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("garden-view"))(b(a()(d("child"))(b(a()(d("name"))(e("tutorial-layer"))(null)))(null)))(b(a()(d("level-and-balance-view"))(d("#t"))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("MENU_BTN"))(null)))(b(a()(d("pos"))(c(10))(c(10))(null)))(b(a()(d("action"))(e("main-menu"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP_BTN"))(null)))(b(a()(d("pos"))(c(10))(c(1010))(null)))(b(a()(d("action"))(e("switch-to"))(b(a()(d("'"))(e("shop"))(null)))(null)))(b(a()(d("name"))(e("shop-button"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("HARVEST_BTN"))(null)))(b(a()(d("pos"))(c(440))(c(1010))(null)))(b(a()(d("action"))(e("harvest"))(null)))(null)))(null)))(b(a()(d("macro"))(d("make-shop-section"))(b(a()(d("id"))(d("items"))(null)))(b(a()(d("make-hash"))(e("id"))(d("id"))(e("display-name"))(b(a()(d("str"))(d("id"))(e(".DISP_NAME"))(null)))(e("items"))(d("items"))(e("widget-id"))(b(a()(d("str"))(e("shop-section.widget."))(d("id"))(null)))(null)))(null)))(b(a()(d("defn"))(d("shop-sections"))(b(a()(d("make-hash"))(e("SHOP-TREES"))(b(a()(d("make-shop-section"))(e("SHOP-TREES"))(b(a()(d("'"))(e("OTREE"))(e("OTREE2"))(e("OTREE3"))(e("OTREE4"))(null)))(null)))(e("SHOP-SALES"))(b(a()(d("make-shop-section"))(e("SHOP-SALES"))(b(a()(d("'"))(e("STAND"))(e("STAND2"))(e("STAND3"))(null)))(null)))(e("SHOP-PROCESSING"))(b(a()(d("make-shop-section"))(e("SHOP-PROCESSING"))(b(a()(d("'"))(e("JUICER"))(e("ICECREAMMAKER"))(e("JUICER2"))(e("ICECREAMMAKER2"))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("defn-shop-section"))(b(a()(d("id"))(null)))(b(a()(d("widget"))(b(a()(b(a()(d("shop-sections"))(d("id"))(null)))(e("widget-id"))(null)))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(10))(null)))(b(a()(d("y"))(c(10))(null)))(b(a()(d("width"))(c(730))(null)))(b(a()(d("height"))(c(1080))(null)))(null)))(b(a()(d("centered-text"))(c(70))(b(a()(b(a()(d("shop-sections"))(d("id"))(null)))(e("display-name"))(null)))(null)))(b(a()(d("text"))(b(a()(d("name"))(e("balance"))(null)))(b(a()(d("text"))(e("SHOP-BALANCE"))(null)))(b(a()(d("pos"))(c(680))(c(128))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("align"))(e("right"))(null)))(null)))(b(a()(d("coin-image"))(c(683))(c(133))(e("0.75"))(null)))(b(a()(d("scroll-view"))(b(a()(d("y"))(c(200))(null)))(b(a()(d("w"))(c(800))(null)))(b(a()(d("h"))(c(700))(null)))(b(a()(d("shop-buttons"))(b(a()(b(a()(d("shop-sections"))(d("id"))(null)))(e("items"))(null)))(c(50))(c(0))(null)))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("tutorial-layer"))(null)))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("ad-space"))(null)))(b(a()(d("x"))(c(405))(null)))(b(a()(d("y"))(c(895))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP.BACK"))(null)))(b(a()(d("pos"))(c(50))(c(970))(null)))(b(a()(d("action"))(e("switch-to"))(b(a()(d("'"))(e("shop"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("shop-section-button"))(b(a()(d("x"))(d("y"))(d("id"))(null)))(b(a()(d("button"))(b(a()(d("name"))(b(a()(d("str"))(e("shop-button."))(d("id"))(null)))(null)))(b(a()(d("text"))(b(a()(b(a()(d("shop-sections"))(d("id"))(null)))(e("display-name"))(null)))(null)))(b(a()(d("pos"))(d("x"))(d("y"))(null)))(b(a()(d("action"))(e("switch-to"))(b(a()(d("'"))(b(a()(b(a()(d("shop-sections"))(d("id"))(null)))(e("widget-id"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("defn-shop-section"))(e("SHOP-TREES"))(null)))(b(a()(d("defn-shop-section"))(e("SHOP-SALES"))(null)))(b(a()(d("defn-shop-section"))(e("SHOP-PROCESSING"))(null)))(b(a()(d("widget"))(e("shop"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("level-and-balance-view"))(d("#f"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(750))(null)))(b(a()(d("text"))(b(a()(d("text"))(e("SHOP"))(null)))(b(a()(d("pos"))(c(300))(c(70))(null)))(b(a()(d("align"))(e("center"))(null)))(null)))(b(a()(d("shop-section-button"))(c(160))(c(200))(e("SHOP-TREES"))(null)))(b(a()(d("shop-section-button"))(c(160))(c(300))(e("SHOP-SALES"))(null)))(b(a()(d("shop-section-button"))(c(160))(c(400))(e("SHOP-PROCESSING"))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("tutorial-layer"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP.BACK"))(null)))(b(a()(d("pos"))(c(160))(c(600))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("booster-icon"))(b(a()(d("_x"))(d("_y"))(d("id"))(null)))(b(a()(d("image"))(b(a()(d("x"))(d("_x"))(null)))(b(a()(d("y"))(d("_y"))(null)))(b(a()(d("path"))(b(a()(d("str"))(e("gfx/booster_"))(d("id"))(null)))(null)))(b(a()(d("name"))(b(a()(d("str"))(e("booster-icon."))(d("id"))(null)))(null)))(b(a()(d("action"))(d("id"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(85))(null)))(b(a()(d("y"))(c(-6))(null)))(b(a()(d("path"))(e("gfx/boostermenu_numberbox"))(null)))(b(a()(d("text"))(b(a()(d("name"))(b(a()(d("str"))(e("booster-icon."))(d("id"))(e(".count"))(null)))(null)))(b(a()(d("pos"))(c(16))(c(5))(null)))(b(a()(d("localization"))(c(0))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("text"))(b(a()(d("str"))(b(a()(d("ext"))(b(a()(d("str"))(e("count."))(d("id"))(null)))(null)))(null)))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("booster-menu"))(b(a()(d("uibg"))(b(a()(d("x"))(c(550))(null)))(b(a()(d("y"))(c(475))(null)))(b(a()(d("width"))(c(300))(null)))(b(a()(d("height"))(c(500))(null)))(b(a()(d("booster-icon"))(c(53))(c(45))(e("aim"))(null)))(b(a()(d("booster-icon"))(c(53))(c(185))(e("match_any"))(null)))(b(a()(d("image"))(b(a()(d("path"))(e("gfx/button_back"))(null)))(b(a()(d("x"))(c(112))(null)))(b(a()(d("y"))(c(395))(null)))(b(a()(d("scale-x"))(e("0.8"))(null)))(b(a()(d("scale-y"))(e("0.8"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("booster-shop-item"))(b(a()(d("y-offset"))(d("id"))(d("price"))(d("max-count"))(null)))(b(a()(d("do"))(b(a()(d("meta-f"))(b(a()(d("str"))(e("max-count."))(d("id"))(null)))(b(a()(d("str"))(d("max-count"))(null)))(null)))(b(a()(d("meta-f"))(b(a()(d("str"))(e("price."))(d("id"))(null)))(b(a()(d("str"))(d("price"))(null)))(null)))(b(a()(d("text"))(b(a()(d("pos"))(c(200))(b(a()(d("+"))(d("y-offset"))(c(150))(null)))(null)))(b(a()(d("width"))(c(400))(null)))(b(a()(d("text"))(b(a()(d("str"))(e("BOOSTERSHOP."))(d("id"))(e(".DISP_NAME"))(null)))(null)))(null)))(b(a()(d("text"))(b(a()(d("name"))(b(a()(d("str"))(e("count."))(d("id"))(null)))(null)))(b(a()(d("localization"))(c(0))(null)))(b(a()(d("'"))(d("align"))(e("center"))(null)))(b(a()(d("pos"))(c(460))(b(a()(d("+"))(d("y-offset"))(c(150))(null)))(null)))(b(a()(d("text"))(b(a()(d("str"))(b(a()(d("ext"))(b(a()(d("str"))(e("count."))(d("id"))(null)))(null)))(e("/"))(d("max-count"))(null)))(null)))(null)))(b(a()(d("booster-icon"))(c(60))(b(a()(d("+"))(d("y-offset"))(c(155))(null)))(d("id"))(null)))(b(a()(d("coin-image"))(c(340))(b(a()(d("+"))(d("y-offset"))(c(223))(null)))(e("1.0"))(null)))(b(a()(d("text"))(b(a()(d("name"))(b(a()(d("str"))(e("price."))(d("id"))(null)))(null)))(b(a()(d("pos"))(c(335))(b(a()(d("+"))(d("y-offset"))(c(208))(null)))(null)))(b(a()(d("localization"))(c(0))(null)))(b(a()(d("align"))(e("right"))(null)))(b(a()(d("text"))(b(a()(d("str"))(d("price"))(null)))(null)))(null)))(b(a()(d("button"))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("pos"))(c(380))(b(a()(d("+"))(d("y-offset"))(c(210))(null)))(null)))(b(a()(d("text"))(e("BOOSTERSHOP.BUY"))(null)))(b(a()(d("action"))(b(a()(d("str"))(e("buy."))(d("id"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("booster-shop"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("0.5"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(750))(null)))(b(a()(d("centered-text"))(c(40))(e("BOOSTERSHOP.HEADER"))(null)))(b(a()(d("text"))(b(a()(d("name"))(e("balance"))(null)))(b(a()(d("text"))(e("BOOSTERSHOP.BALANCE"))(null)))(b(a()(d("pos"))(c(509))(c(110))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("align"))(e("right"))(null)))(null)))(b(a()(d("coin-image"))(c(510))(c(116))(e("0.75"))(null)))(b(a()(d("booster-shop-item"))(c(30))(e("aim"))(c(499))(c(5))(null)))(b(a()(d("booster-shop-item"))(c(210))(e("match_any"))(c(699))(c(5))(null)))(b(a()(d("button"))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("pos"))(c(500))(c(650))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("options-menu"))(b(a()(d("enter-transition"))(b(a()(d("fade-in"))(e("0.1"))(null)))(null)))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(750))(null)))(b(a()(d("centered-text"))(c(40))(e("OPTIONS.HEADER"))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("mute-root"))(null)))(b(a()(d("text"))(b(a()(d("text"))(e("OPTIONS.SOUND"))(null)))(b(a()(d("pos"))(c(100))(c(200))(null)))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("mute-button-layer"))(null)))(b(a()(d("x"))(c(420))(null)))(b(a()(d("y"))(c(230))(null)))(null)))(null)))(b(a()(d("centered-text"))(c(360))(e("OPTIONS.RESET"))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("OPTIONS.RESET.BUTTON"))(null)))(b(a()(d("pos"))(e("center"))(c(430))(null)))(b(a()(d("action"))(e("reset"))(null)))(null)))(b(a()(d("button"))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("pos"))(c(500))(c(650))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("options-menu-confirm-reset"))(b(a()(d("enter-transition"))(b(a()(d("fade-in"))(e("0.1"))(null)))(null)))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(740))(null)))(b(a()(d("height"))(c(500))(null)))(b(a()(d("centered-text-wordwrap"))(c(60))(c(500))(e("OPTIONS.RESET.CONFIRM.HEADER"))(null)))(b(a()(d("centered-text-wordwrap"))(c(160))(c(500))(e("OPTIONS.RESET.CONFIRM"))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("OPTIONS.RESET.CONFIRM.NO"))(null)))(b(a()(d("pos"))(c(55))(c(340))(null)))(b(a()(d("action"))(e("reset-confirm-no"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("OPTIONS.RESET.CONFIRM.YES"))(null)))(b(a()(d("pos"))(c(385))(c(340))(null)))(b(a()(d("action"))(e("reset-confirm-yes"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("credits-menu"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(650))(null)))(b(a()(d("centered-text-wordwrap"))(c(80))(c(550))(e("CREDITS.TEXT"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(203))(c(550))(e("CREDITS.STO_URL"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(300))(c(550))(e("CREDITS.NOTICE"))(null)))(b(a()(d("button"))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("pos"))(c(300))(c(520))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("shop-select-position"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("tutorial-layer"))(null)))(null)))(b(a()(d("child"))(b(a()(d("name"))(e("item-layer"))(null)))(null)))(b(a()(d("level-and-balance-view"))(d("#t"))(null)))(b(a()(d("text"))(b(a()(d("text"))(e("MOVE.OVERLAP"))(null)))(b(a()(d("name"))(e("overlap-warning"))(null)))(b(a()(d("pos"))(c(375))(c(940))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("style"))(e("small"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("MOVE.CANCEL"))(null)))(b(a()(d("pos"))(c(10))(c(1E3))(null)))(b(a()(d("action"))(e("cancel"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("MOVE.DONE"))(null)))(b(a()(d("name"))(e("done"))(null)))(b(a()(d("pos"))(c(440))(c(1E3))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(b(a()(d("widget"))(e("select-position-tut-left"))(b(a()(d("text"))(b(a()(d("pos"))(c(-210))(c(-100))(null)))(b(a()(d("align"))(e("left"))(null)))(b(a()(d("width"))(c(340))(null)))(b(a()(d("text"))(e("MOVE.TUTORIAL"))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(-80))(null)))(b(a()(d("y"))(c(70))(null)))(b(a()(d("scale-x"))(c(1))(null)))(b(a()(d("rot"))(c(65))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("select-position-tut-right"))(b(a()(d("text"))(b(a()(d("pos"))(c(210))(c(-100))(null)))(b(a()(d("align"))(e("right"))(null)))(b(a()(d("width"))(c(340))(null)))(b(a()(d("text"))(e("MOVE.TUTORIAL"))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(100))(null)))(b(a()(d("y"))(c(70))(null)))(b(a()(d("scale-x"))(c(-1))(null)))(b(a()(d("rot"))(c(-65))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("tutorial-harvest-button"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("1.0"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(180))(null)))(b(a()(d("y"))(c(760))(null)))(b(a()(d("width"))(c(400))(null)))(b(a()(d("height"))(c(160))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(c(20))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("width"))(c(360))(null)))(b(a()(d("text"))(e("HARVEST_BTN_TUTORIAL"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(630))(null)))(b(a()(d("y"))(c(910))(null)))(b(a()(d("scale-x"))(c(-1))(null)))(b(a()(d("rot"))(c(205))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("tutorial-harvest-button-2"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("11.0"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(180))(null)))(b(a()(d("y"))(c(760))(null)))(b(a()(d("width"))(c(400))(null)))(b(a()(d("height"))(c(160))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(c(20))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("width"))(c(360))(null)))(b(a()(d("text"))(e("HARVEST_BTN_TUTORIAL"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(630))(null)))(b(a()(d("y"))(c(910))(null)))(b(a()(d("scale-x"))(c(-1))(null)))(b(a()(d("rot"))(c(205))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("tutorial-purchase-item"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("1.0"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(180))(null)))(b(a()(d("y"))(c(760))(null)))(b(a()(d("width"))(c(400))(null)))(b(a()(d("height"))(c(160))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(c(20))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("width"))(c(360))(null)))(b(a()(d("text"))(e("SHOP.TUTORIAL.ENTER"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(130))(null)))(b(a()(d("y"))(c(910))(null)))(b(a()(d("scale-x"))(c(1))(null)))(b(a()(d("rot"))(c(-205))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("tutorial-purchase-item-shop-main"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("0.5"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(80))(null)))(b(a()(d("y"))(c(310))(null)))(b(a()(d("width"))(c(450))(null)))(b(a()(d("height"))(c(180))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(c(30))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("width"))(c(390))(null)))(b(a()(d("text"))(e("SHOP.TUTORIAL.VIEW_TREES"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(100))(null)))(b(a()(d("y"))(c(310))(null)))(b(a()(d("scale-x"))(c(-1))(null)))(b(a()(d("rot"))(c(80))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("tutorial-purchase-item-shop-trees"))(b(a()(d("enter-transition"))(b(a()(d("set-alpha"))(e("0.0"))(null)))(b(a()(d("delay"))(e("0.5"))(null)))(b(a()(d("fade-in"))(e("0.3"))(null)))(null)))(b(a()(d("uibg"))(b(a()(d("x"))(c(100))(null)))(b(a()(d("y"))(c(400))(null)))(b(a()(d("width"))(c(400))(null)))(b(a()(d("height"))(c(100))(null)))(b(a()(d("text"))(b(a()(d("pos"))(e("center"))(c(20))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("width"))(c(360))(null)))(b(a()(d("text"))(e("SHOP.TUTORIAL.BUY"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(570))(null)))(b(a()(d("y"))(c(400))(null)))(b(a()(d("scale-x"))(c(1))(null)))(b(a()(d("rot"))(c(-10))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/arrow"))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-welcome"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(450))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.WELCOME.HEADER"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(120))(c(630))(e("MESSAGE.WELCOME.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(320))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-shop"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(480))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.SHOP.HEADER"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(120))(c(630))(e("MESSAGE.SHOP.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(360))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-boosters"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.BOOSTERS.HEADER"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_aim"))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(300))(c(630))(e("MESSAGE.BOOSTERS.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-juicer"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.JUICER.HEADER"))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(b(a()(d("items"))(e("JUICER"))(null)))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(320))(c(630))(e("MESSAGE.JUICER.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-icecreammaker"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(730))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(650))(e("MESSAGE.ICECREAMMAKER.HEADER"))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(b(a()(d("items"))(e("ICECREAMMAKER"))(null)))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(210))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(330))(c(650))(e("MESSAGE.ICECREAMMAKER.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-match-any"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.MATCHANY.HEADER"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_match_any"))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(300))(c(630))(e("MESSAGE.MATCHANY.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-boostershop"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.BOOSTERSHOP.HEADER"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(260))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_aim"))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(430))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_match_any"))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(320))(c(630))(e("MESSAGE.BOOSTERSHOP.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-juicer2"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.JUICER2.HEADER"))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(b(a()(d("items"))(e("JUICER2"))(null)))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(310))(c(630))(e("MESSAGE.JUICER2.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-otree4"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.OTREE4.HEADER"))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(b(a()(d("items"))(e("OTREE4"))(null)))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(310))(c(630))(e("MESSAGE.OTREE4.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-stand3"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(700))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.STAND3.HEADER"))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(b(a()(d("items"))(e("STAND3"))(null)))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(220))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(340))(c(610))(e("MESSAGE.STAND3.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(570))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-gift-aim"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(650))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.GIFT_AIM.HEADER"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_aim"))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(305))(c(630))(e("MESSAGE.GIFT_AIM.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(520))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("message-gift-match-any"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(700))(null)))(b(a()(d("height"))(c(650))(null)))(b(a()(d("centered-text-wordwrap"))(c(40))(c(630))(e("MESSAGE.GIFT_MATCHANY.HEADER"))(null)))(b(a()(d("image"))(b(a()(d("x"))(c(350))(null)))(b(a()(d("y"))(c(200))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(e("gfx/booster_match_any"))(null)))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(300))(c(630))(e("MESSAGE.GIFT_MATCHANY.TEXT"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(350))(c(520))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("game-over-menu"))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(500))(null)))(b(a()(d("height"))(c(500))(null)))(b(a()(d("centered-text"))(c(100))(e("GAME_OVER.HEADER"))(null)))(b(a()(d("centered-text"))(c(200))(e("GAME_OVER.CTA"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(380))(c(380))(null)))(b(a()(d("image"))(e("gfx/button_again"))(null)))(b(a()(d("action"))(e("retry"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(120))(c(380))(null)))(b(a()(d("image"))(e("gfx/button_home"))(null)))(b(a()(d("action"))(e("back"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("level-completed-menu"))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(500))(null)))(b(a()(d("centered-text"))(c(80))(e("LEVEL_COMPLETED.H1"))(null)))(b(a()(d("centered-text"))(c(190))(e("LEVEL_COMPLETED.H2"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(300))(c(360))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("cannot-recycle-tree"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(450))(null)))(b(a()(d("centered-text"))(c(70))(e("CANNOT_RECYCLE.HEADER"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(170))(c(520))(e("CANNOT_RECYCLE.TREE"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(300))(c(325))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(b(a()(d("widget"))(e("cannot-recycle-stand"))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("uibg"))(b(a()(d("center"))(e("xy"))(null)))(b(a()(d("width"))(c(600))(null)))(b(a()(d("height"))(c(450))(null)))(b(a()(d("centered-text"))(c(70))(e("CANNOT_RECYCLE.HEADER"))(null)))(b(a()(d("centered-text-small-wordwrap"))(c(170))(c(520))(e("CANNOT_RECYCLE.STAND"))(null)))(b(a()(d("button"))(b(a()(d("pos"))(c(300))(c(325))(null)))(b(a()(d("image"))(e("gfx/button_play_small"))(null)))(b(a()(d("action"))(e("close"))(null)))(b(a()(d("style"))(e("dance"))(null)))(null)))(null)))(null)))(b(a()(d("'"))(e("GARDEN ITEM HELPER MACROS"))(null)))(b(a()(d("macro"))(d("garden-item"))(b(a()(d("item"))(d("extra"))(null)))(b(a()(d("garden-item-ex"))(d("item"))(d("extra"))(d("nil"))(null)))(null)))(b(a()(d("macro"))(d("garden-item-ex"))(b(a()(d("item"))(d("extra"))(d("inlined-extra"))(null)))(b(a()(d("do"))(b(a()(d("widget"))(b(a()(d("item"))(e("widget-id"))(null)))(b(a()(d("init"))(b(a()(d("item"))(e("init-meta"))(null)))(null)))(b(a()(d("meta-fs"))(b(a()(d("item"))(e("widget-meta-fs"))(null)))(null)))(b(a()(d("image"))(b(a()(d("path"))(b(a()(d("item"))(e("bg-img"))(null)))(null)))(b(a()(d("center-anchor-same-pos"))(c(1))(null)))(b(a()(d("name"))(e("item-sprite"))(null)))(d("inlined-extra"))(null)))(d("extra"))(null)))(b(a()(d("widget"))(b(a()(d("item"))(e("widget-move-id"))(null)))(b(a()(d("meta-fs"))(b(a()(d("item"))(e("widget-meta-fs"))(null)))(null)))(b(a()(d("image"))(b(a()(d("path"))(b(a()(d("item"))(e("bg-img"))(null)))(null)))(b(a()(d("center-anchor-same-pos"))(c(1))(null)))(b(a()(d("name"))(e("item-sprite"))(null)))(d("inlined-extra"))(null)))(null)))(b(a()(d("widget"))(b(a()(d("item"))(e("widget-shop-details-id"))(null)))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("ui-box"))(c(50))(c(250))(c(650))(c(540))(b(a()(d("'"))(null)))(null)))(b(a()(d("text"))(b(a()(d("text"))(b(a()(d("item"))(e("display-name"))(null)))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("pos"))(c(375))(c(270))(null)))(null)))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(d("item"))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(375))(null)))(b(a()(d("y"))(c(430))(null)))(null)))(b(a()(d("text"))(b(a()(d("text"))(b(a()(d("item"))(e("description"))(null)))(null)))(b(a()(d("width"))(c(560))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("pos"))(c(90))(c(530))(null)))(b(a()(d("align"))(e("left"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("SHOP_DETAILS.CLOSE"))(null)))(b(a()(d("pos"))(c(240))(c(660))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(b(a()(d("widget"))(b(a()(d("item"))(e("widget-details-id"))(null)))(b(a()(d("bg-img"))(e("gfx/overlay"))(null)))(b(a()(d("ui-box-centered"))(c(550))(c(750))(b(a()(d("do"))(b(a()(d("subwidget"))(b(a()(d("widget-name"))(b(a()(d("item"))(e("widget-move-id"))(null)))(null)))(b(a()(d("name"))(e("inner-item"))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("x"))(c(275))(null)))(b(a()(d("y"))(c(145))(null)))(null)))(b(a()(d("text"))(b(a()(d("text"))(b(a()(d("item"))(e("description"))(null)))(null)))(b(a()(d("width"))(c(440))(null)))(b(a()(d("style"))(e("small"))(null)))(b(a()(d("pos"))(c(55))(c(240))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("ITEM_DETAILS.MOVE"))(null)))(b(a()(d("pos"))(c(125))(c(380))(null)))(b(a()(d("action"))(e("move"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("ITEM_DETAILS.RECYCLE"))(null)))(b(a()(d("pos"))(c(125))(c(480))(null)))(b(a()(d("action"))(e("recycle"))(null)))(null)))(b(a()(d("button"))(b(a()(d("text"))(e("ITEM_DETAILS.CLOSE"))(null)))(b(a()(d("pos"))(c(125))(c(580))(null)))(b(a()(d("action"))(e("close"))(null)))(null)))(null)))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("resource-queue-label"))(b(a()(d("id"))(d("pos-x"))(d("pos-y"))(null)))(b(a()(d("do"))(b(a()(d("image"))(b(a()(d("x"))(b(a()(d("-"))(d("pos-x"))(c(22))(null)))(null)))(b(a()(d("y"))(b(a()(d("-"))(d("pos-y"))(c(8))(null)))(null)))(b(a()(d("center-anchor"))(c(0))(null)))(b(a()(d("path"))(b(a()(d("str"))(e("gfx/inv_label_bg"))(null)))(null)))(null)))(b(a()(d("image"))(b(a()(d("x"))(b(a()(d("-"))(d("pos-x"))(c(3))(null)))(null)))(b(a()(d("y"))(b(a()(d("+"))(d("pos-y"))(c(15))(null)))(null)))(b(a()(d("center-anchor"))(c(1))(null)))(b(a()(d("path"))(b(a()(d("str"))(e("gfx/res_part_"))(d("id"))(null)))(null)))(null)))(b(a()(d("text"))(b(a()(d("name"))(b(a()(d("str"))(d("id"))(e("-queue-label"))(null)))(null)))(b(a()(d("pos"))(b(a()(d("+"))(d("pos-x"))(c(29))(null)))(b(a()(d("-"))(d("pos-y"))(c(1))(null)))(null)))(b(a()(d("localization"))(c(0))(null)))(b(a()(d("text"))(b(a()(d("str"))(b(a()(d("ext"))(b(a()(d("str"))(d("id"))(e("-queue-length"))(null)))(null)))(null)))(null)))(b(a()(d("'"))(b(a()(e("/"))(b(a()(d("ext"))(b(a()(d("str"))(d("id"))(e("-queue-max-length"))(null)))(null)))(null)))(null)))(b(a()(d("align"))(e("center"))(null)))(b(a()(d("style"))(e("small"))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("resource-queue-labels"))(b(a()(d("pos-x"))(d("pos-y"))(null)))(b(a()(d("do"))(b(a()(d("resource-queue-label"))(e("orange"))(b(a()(d("+"))(d("pos-x"))(c(0))(null)))(b(a()(d("+"))(d("pos-y"))(c(0))(null)))(null)))(b(a()(d("resource-queue-label"))(e("juice"))(b(a()(d("+"))(d("pos-x"))(c(80))(null)))(b(a()(d("+"))(d("pos-y"))(c(0))(null)))(null)))(b(a()(d("resource-queue-label"))(e("icecream"))(b(a()(d("+"))(d("pos-x"))(c(160))(null)))(b(a()(d("+"))(d("pos-y"))(c(0))(null)))(null)))(null)))(null)))(b(a()(d("macro"))(d("resource-rendering"))(b(a()(d("type"))(d("pos-x"))(d("pos-y"))(d("stand-postfix"))(null)))(b(a()(d("image"))(b(a()(d("path"))(b(a()(d("str"))(e("gfx/STAND"))(d("stand-postfix"))(e("_display_"))(d("type"))(null)))(null)))(b(a()(d("x"))(d("pos-x"))(null)))(b(a()(d("y"))(d("pos-y"))(null)))(b(a()(d("name"))(b(a()(d("str"))(e("display."))(d("type"))(null)))(null)))(null)))(null)))(b(a()(d("'"))(e("GARDEN ITEM WIDGET DEFINITIONS"))(null)))(b(a()(d("garden-item-ex"))(b(a()(d("items"))(e("STAND"))(null)))(b(a()(d("resource-queue-labels"))(c(65))(c(-40))(null)))(b(a()(d("do"))(b(a()(d("resource-rendering"))(e("orange"))(c(19))(c(2))(e(""))(null)))(b(a()(d("resource-rendering"))(e("juice"))(c(118))(c(-2))(e(""))(null)))(b(a()(d("resource-rendering"))(e("icecream"))(c(209))(c(2))(e(""))(null)))(null)))(null)))(b(a()(d("garden-item-ex"))(b(a()(d("items"))(e("STAND2"))(null)))(b(a()(d("resource-queue-labels"))(c(65))(c(-40))(null)))(b(a()(d("do"))(b(a()(d("resource-rendering"))(e("orange"))(c(15))(c(6))(e(""))(null)))(b(a()(d("resource-rendering"))(e("juice"))(c(110))(c(3))(e(""))(null)))(b(a()(d("resource-rendering"))(e("icecream"))(c(194))(c(6))(e(""))(null)))(null)))(null)))(b(a()(d("garden-item-ex"))(b(a()(d("items"))(e("STAND3"))(null)))(b(a()(d("resource-queue-labels"))(c(65))(c(-40))(null)))(b(a()(d("do"))(b(a()(d("resource-rendering"))(e("orange"))(c(16))(c(7))(e("3"))(null)))(b(a()(d("resource-rendering"))(e("juice"))(c(110))(c(4))(e("3"))(null)))(b(a()(d("resource-rendering"))(e("icecream"))(c(195))(c(8))(e("3"))(null)))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("JUICER"))(null)))(b(a()(d("resource-queue-label"))(e("orange"))(c(36))(c(-8))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("JUICER2"))(null)))(b(a()(d("resource-queue-label"))(e("orange"))(c(45))(c(-3))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("ICECREAMMAKER"))(null)))(b(a()(d("resource-queue-label"))(e("juice"))(c(-11))(c(-13))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("ICECREAMMAKER2"))(null)))(b(a()(d("resource-queue-label"))(e("juice"))(c(-14))(c(-4))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("OTREE"))(null)))(b(a()(d("'"))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("OTREE2"))(null)))(b(a()(d("'"))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("OTREE3"))(null)))(b(a()(d("'"))(null)))(null)))(b(a()(d("garden-item"))(b(a()(d("items"))(e("OTREE4"))(null)))(b(a()(d("'"))(null)))(null)))(null))
    };
    var Ce = function() {
        this.myFloats = new R
    };
    g["game.WidgetMeta"] = Ce;
    Ce.__name__ = ["game", "WidgetMeta"];
    Ce.prototype = {
        SetF: function(a, b) {
            this.myFloats.set(a, b)
        },
        GetF: function(a) {
            return this.myFloats.get(a)
        },
        __class__: Ce
    };
    var Re = function() {};
    g["haxe.Json"] = Re;
    Re.__name__ = ["haxe", "Json"];
    Re.parse = function(a) {
        return (new ib(a)).parseRec()
    };
    var mb = function() {
        this.buf = new Jb;
        this.cache = [];
        this.useCache = mb.USE_CACHE;
        this.useEnumIndex = mb.USE_ENUM_INDEX;
        this.shash = new R;
        this.scount = 0
    };
    g["haxe.Serializer"] = mb;
    mb.__name__ = ["haxe", "Serializer"];
    mb.prototype = {
        toString: function() {
            return this.buf.b
        },
        serializeString: function(a) {
            var b = this.shash.get(a);
            null != b ? (this.buf.b += "R", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)) : (this.shash.set(a, this.scount++), this.buf.b += "y", a = encodeURIComponent(a), this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length), this.buf.b += ":", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a))
        },
        serializeRef: function(a) {
            for (var b = typeof a, c = 0, e = this.cache.length; c < e;) {
                var d =
                    c++,
                    f = this.cache[d];
                if (typeof f == b && f == a) return this.buf.b += "r", this.buf.b = null == d ? this.buf.b + "null" : this.buf.b + ("" + d), !0
            }
            this.cache.push(a);
            return !1
        },
        serializeFields: function(a) {
            for (var b = 0, c = O.fields(a); b < c.length;) {
                var e = c[b];
                ++b;
                this.serializeString(e);
                this.serialize(O.field(a, e))
            }
            this.buf.b += "g"
        },
        serialize: function(a) {
            var b = S["typeof"](a);
            switch (b[1]) {
                case 0:
                    this.buf.b += "n";
                    break;
                case 1:
                    if (0 == a) {
                        this.buf.b += "z";
                        break
                    }
                    this.buf.b += "i";
                    this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                    break;
                case 2:
                    Math.isNaN(a) ? this.buf.b += "k" : Math.isFinite(a) ? (this.buf.b += "d", this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)) : this.buf.b = 0 > a ? this.buf.b + "m" : this.buf.b + "p";
                    break;
                case 3:
                    this.buf.b = a ? this.buf.b + "t" : this.buf.b + "f";
                    break;
                case 6:
                    b = b[2];
                    if (b == String) {
                        this.serializeString(a);
                        break
                    }
                    if (this.useCache && this.serializeRef(a)) break;
                    switch (b) {
                        case Array:
                            b = 0;
                            this.buf.b += "a";
                            for (var c = a.length, e = 0; e < c;) {
                                var d = e++;
                                null == a[d] ? b++ : (0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b +
                                    "null" : this.buf.b + ("" + b)), b = 0), this.serialize(a[d]))
                            }
                            0 < b && (1 == b ? this.buf.b += "n" : (this.buf.b += "u", this.buf.b = null == b ? this.buf.b + "null" : this.buf.b + ("" + b)));
                            this.buf.b += "h";
                            break;
                        case Ka:
                            this.buf.b += "l";
                            for (a = a.iterator(); a.hasNext();) this.serialize(a.next());
                            this.buf.b += "h";
                            break;
                        case Date:
                            this.buf.b += "v";
                            this.buf.add(B.dateStr(a));
                            break;
                        case R:
                            this.buf.b += "b";
                            for (b = a.keys(); b.hasNext();) c = b.next(), this.serializeString(c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case Na:
                            this.buf.b += "q";
                            for (b =
                                a.keys(); b.hasNext();) c = b.next(), this.buf.b += ":", this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c), this.serialize(a.get(c));
                            this.buf.b += "h";
                            break;
                        case jb:
                            this.buf.b += "M";
                            for (b = a.keys(); b.hasNext();) c = b.next(), e = O.field(c, "__id__"), O.deleteField(c, "__id__"), this.serialize(c), c.__id__ = e, this.serialize(a.h[c.__id__]);
                            this.buf.b += "h";
                            break;
                        case Ca:
                            e = 0;
                            d = a.length - 2;
                            b = new Jb;
                            for (c = mb.BASE64; e < d;) {
                                var f = a.get(e++),
                                    g = a.get(e++),
                                    h = a.get(e++);
                                b.add(c.charAt(f >> 2));
                                b.add(c.charAt((f << 4 | g >> 4) & 63));
                                b.add(c.charAt((g <<
                                    2 | h >> 6) & 63));
                                b.add(c.charAt(h & 63))
                            }
                            e == d ? (d = a.get(e++), a = a.get(e++), b.add(c.charAt(d >> 2)), b.add(c.charAt((d << 4 | a >> 4) & 63)), b.add(c.charAt(a << 2 & 63))) : e == d + 1 && (a = a.get(e++), b.add(c.charAt(a >> 2)), b.add(c.charAt(a << 4 & 63)));
                            a = b.b;
                            this.buf.b += "s";
                            this.buf.b = null == a.length ? this.buf.b + "null" : this.buf.b + ("" + a.length);
                            this.buf.b += ":";
                            this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a);
                            break;
                        default:
                            this.useCache && this.cache.pop(), null != a.hxSerialize ? (this.buf.b += "C", this.serializeString(S.getClassName(b)),
                                this.useCache && this.cache.push(a), a.hxSerialize(this), this.buf.b += "g") : (this.buf.b += "c", this.serializeString(S.getClassName(b)), this.useCache && this.cache.push(a), this.serializeFields(a))
                    }
                    break;
                case 4:
                    if (this.useCache && this.serializeRef(a)) break;
                    this.buf.b += "o";
                    this.serializeFields(a);
                    break;
                case 7:
                    b = b[2];
                    if (this.useCache) {
                        if (this.serializeRef(a)) break;
                        this.cache.pop()
                    }
                    this.buf.b = this.useEnumIndex ? this.buf.b + "j" : this.buf.b + "w";
                    this.serializeString(S.getEnumName(b));
                    this.useEnumIndex ? (this.buf.b += ":",
                        this.buf.b += n.string(a[1])) : this.serializeString(a[0]);
                    this.buf.b += ":";
                    b = a.length;
                    this.buf.b += n.string(b - 2);
                    for (c = 2; c < b;) e = c++, this.serialize(a[e]);
                    this.useCache && this.cache.push(a);
                    break;
                case 5:
                    throw "Cannot serialize function";
                default:
                    throw "Cannot serialize " + n.string(a);
            }
        },
        __class__: mb
    };
    var Fa = function(a) {
        this.buf = a;
        this.length = a.length;
        this.pos = 0;
        this.scache = [];
        this.cache = [];
        a = Fa.DEFAULT_RESOLVER;
        null == a && (a = S, Fa.DEFAULT_RESOLVER = a);
        this.setResolver(a)
    };
    g["haxe.Unserializer"] = Fa;
    Fa.__name__ = ["haxe",
        "Unserializer"
    ];
    Fa.initCodes = function() {
        for (var a = [], b = 0, c = Fa.BASE64.length; b < c;) {
            var e = b++;
            a[Fa.BASE64.charCodeAt(e)] = e
        }
        return a
    };
    Fa.run = function(a) {
        return (new Fa(a)).unserialize()
    };
    Fa.prototype = {
        setResolver: function(a) {
            this.resolver = null == a ? {
                resolveClass: function() {
                    return null
                },
                resolveEnum: function() {
                    return null
                }
            } : a
        },
        get: function(a) {
            return this.buf.charCodeAt(a)
        },
        readDigits: function() {
            for (var a = 0, b = !1, c = this.pos;;) {
                var e = this.buf.charCodeAt(this.pos);
                if (e != e) break;
                if (45 == e) {
                    if (this.pos != c) break;
                    b = !0
                } else {
                    if (48 > e || 57 < e) break;
                    a = 10 * a + (e - 48)
                }
                this.pos++
            }
            b && (a *= -1);
            return a
        },
        unserializeObject: function(a) {
            for (;;) {
                if (this.pos >= this.length) throw "Invalid object";
                if (103 == this.buf.charCodeAt(this.pos)) break;
                var b = this.unserialize();
                if ("string" != typeof b) throw "Invalid object key";
                var c = this.unserialize();
                a[b] = c
            }
            this.pos++
        },
        unserializeEnum: function(a, b) {
            if (58 != this.get(this.pos++)) throw "Invalid enum format";
            var c = this.readDigits();
            if (0 == c) return S.createEnum(a, b);
            for (var e = []; 0 < c--;) e.push(this.unserialize());
            return S.createEnum(a, b, e)
        },
        unserialize: function() {
            switch (this.get(this.pos++)) {
                case 110:
                    return null;
                case 116:
                    return !0;
                case 102:
                    return !1;
                case 122:
                    return 0;
                case 105:
                    return this.readDigits();
                case 100:
                    for (var a = this.pos;;) {
                        var b = this.buf.charCodeAt(this.pos);
                        if (43 <= b && 58 > b || 101 == b || 69 == b) this.pos++;
                        else break
                    }
                    return n.parseFloat(B.substr(this.buf, a, this.pos - a));
                case 121:
                    a = this.readDigits();
                    if (58 != this.get(this.pos++) || this.length - this.pos < a) throw "Invalid string length";
                    b = B.substr(this.buf, this.pos, a);
                    this.pos += a;
                    b = decodeURIComponent(b.split("+").join(" "));
                    this.scache.push(b);
                    return b;
                case 107:
                    return Math.NaN;
                case 109:
                    return Math.NEGATIVE_INFINITY;
                case 112:
                    return Math.POSITIVE_INFINITY;
                case 97:
                    a = [];
                    for (this.cache.push(a);;) {
                        b = this.buf.charCodeAt(this.pos);
                        if (104 == b) {
                            this.pos++;
                            break
                        }
                        117 == b ? (this.pos++, b = this.readDigits(), a[a.length + b - 1] = null) : a.push(this.unserialize())
                    }
                    return a;
                case 111:
                    return a = {}, this.cache.push(a), this.unserializeObject(a), a;
                case 114:
                    a = this.readDigits();
                    if (0 > a || a >= this.cache.length) throw "Invalid reference";
                    return this.cache[a];
                case 82:
                    a = this.readDigits();
                    if (0 > a || a >= this.scache.length) throw "Invalid string reference";
                    return this.scache[a];
                case 120:
                    throw this.unserialize();
                case 99:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = S.createEmptyInstance(b);
                    this.cache.push(a);
                    this.unserializeObject(a);
                    return a;
                case 119:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    a = this.unserializeEnum(b, this.unserialize());
                    this.cache.push(a);
                    return a;
                case 106:
                    a = this.unserialize();
                    b = this.resolver.resolveEnum(a);
                    if (null == b) throw "Enum not found " + a;
                    this.pos++;
                    var c = this.readDigits(),
                        e = S.getEnumConstructs(b)[c];
                    if (null == e) throw "Unknown enum index " + a + "@" + c;
                    a = this.unserializeEnum(b, e);
                    this.cache.push(a);
                    return a;
                case 108:
                    a = new Ka;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) a.add(this.unserialize());
                    this.pos++;
                    return a;
                case 98:
                    a = new R;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 113:
                    a = new Na;
                    this.cache.push(a);
                    for (b = this.get(this.pos++); 58 == b;) b = this.readDigits(), a.set(b, this.unserialize()), b = this.get(this.pos++);
                    if (104 != b) throw "Invalid IntMap format";
                    return a;
                case 77:
                    a = new jb;
                    for (this.cache.push(a); 104 != this.buf.charCodeAt(this.pos);) b = this.unserialize(), a.set(b, this.unserialize());
                    this.pos++;
                    return a;
                case 118:
                    return a = B.substr(this.buf, this.pos, 19), a = B.strDate(a), this.cache.push(a), this.pos += 19, a;
                case 115:
                    a = this.readDigits();
                    e = this.buf;
                    if (58 != this.get(this.pos++) ||
                        this.length - this.pos < a) throw "Invalid bytes length";
                    var d = Fa.CODES;
                    null == d && (d = Fa.initCodes(), Fa.CODES = d);
                    for (var f = this.pos, g = a & 3, h = f + (a - g), b = Ca.alloc(3 * (a >> 2) + (2 <= g ? g - 1 : 0)), c = 0; f < h;) {
                        var i = d[F.fastCodeAt(e, f++)],
                            k = d[F.fastCodeAt(e, f++)];
                        b.set(c++, i << 2 | k >> 4);
                        i = d[F.fastCodeAt(e, f++)];
                        b.set(c++, k << 4 | i >> 2);
                        k = d[F.fastCodeAt(e, f++)];
                        b.set(c++, i << 6 | k)
                    }
                    2 <= g && (k = d[F.fastCodeAt(e, f++)], h = d[F.fastCodeAt(e, f++)], b.set(c++, k << 2 | h >> 4), 3 == g && (e = d[F.fastCodeAt(e, f++)], b.set(c++, h << 4 | e >> 2)));
                    this.pos += a;
                    this.cache.push(b);
                    return b;
                case 67:
                    a = this.unserialize();
                    b = this.resolver.resolveClass(a);
                    if (null == b) throw "Class not found " + a;
                    a = S.createEmptyInstance(b);
                    this.cache.push(a);
                    a.hxUnserialize(this);
                    if (103 != this.get(this.pos++)) throw "Invalid custom data";
                    return a
            }
            this.pos--;
            throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
        },
        __class__: Fa
    };
    var Xb = function() {
        this.a1 = 1;
        this.a2 = 0
    };
    g["haxe.crypto.Adler32"] = Xb;
    Xb.__name__ = ["haxe", "crypto", "Adler32"];
    Xb.read = function(a) {
        var b = new Xb,
            c = a.readByte(),
            e = a.readByte(),
            d = a.readByte(),
            a = a.readByte();
        b.a1 = d << 8 | a;
        b.a2 = c << 8 | e;
        return b
    };
    Xb.prototype = {
        update: function(a, b, c) {
            for (var e = this.a1, d = this.a2, f = b, b = b + c; f < b;) c = f++, e = (e + a.b[c]) % 65521, d = (d + e) % 65521;
            this.a1 = e;
            this.a2 = d
        },
        equals: function(a) {
            return a.a1 == this.a1 && a.a2 == this.a2
        },
        __class__: Xb
    };
    var Ca = function(a, b) {
        this.length = a;
        this.b = b
    };
    g["haxe.io.Bytes"] = Ca;
    Ca.__name__ = ["haxe", "io", "Bytes"];
    Ca.alloc = function(a) {
        for (var b = [], c = 0; c < a;) c++, b.push(0);
        return new Ca(a, b)
    };
    Ca.ofString = function(a) {
        for (var b = [], c = 0; c < a.length;) {
            var e =
                F.fastCodeAt(a, c++);
            55296 <= e && 56319 >= e && (e = e - 55232 << 10 | F.fastCodeAt(a, c++) & 1023);
            127 >= e ? b.push(e) : (2047 >= e ? b.push(192 | e >> 6) : (65535 >= e ? b.push(224 | e >> 12) : (b.push(240 | e >> 18), b.push(128 | e >> 12 & 63)), b.push(128 | e >> 6 & 63)), b.push(128 | e & 63))
        }
        return new Ca(b.length, b)
    };
    Ca.prototype = {
        get: function(a) {
            return this.b[a]
        },
        set: function(a, b) {
            this.b[a] = b & 255
        },
        blit: function(a, b, c, e) {
            if (0 > a || 0 > c || 0 > e || a + e > this.length || c + e > b.length) throw ea.OutsideBounds;
            var d = this.b,
                b = b.b;
            if (d == b && a > c)
                for (; 0 < e;) e--, d[e + a] = b[e + c];
            else
                for (var f =
                        0; f < e;) {
                    var g = f++;
                    d[g + a] = b[g + c]
                }
        },
        getString: function(a, b) {
            if (0 > a || 0 > b || a + b > this.length) throw ea.OutsideBounds;
            for (var c = "", e = this.b, d = String.fromCharCode, f = a, g = a + b; f < g;) {
                var h = e[f++];
                if (128 > h) {
                    if (0 == h) break;
                    c += d(h)
                } else if (224 > h) c += d((h & 63) << 6 | e[f++] & 127);
                else if (240 > h) var i = e[f++],
                    c = c + d((h & 31) << 12 | (i & 127) << 6 | e[f++] & 127);
                else var i = e[f++],
                    k = e[f++],
                    h = (h & 15) << 18 | (i & 127) << 12 | (k & 127) << 6 | e[f++] & 127,
                    c = c + d((h >> 10) + 55232),
                    c = c + d(h & 1023 | 56320)
            }
            return c
        },
        toString: function() {
            return this.getString(0, this.length)
        },
        __class__: Ca
    };
    var Ob = function() {};
    g["haxe.crypto.Base64"] = Ob;
    Ob.__name__ = ["haxe", "crypto", "Base64"];
    Ob.decode = function(a, b) {
        null == b && (b = !0);
        if (b)
            for (; 61 == B.cca(a, a.length - 1);) a = B.substr(a, 0, -1);
        return (new Ee(Ob.BYTES)).decodeBytes(Ca.ofString(a))
    };
    var Ee = function(a) {
        for (var b = a.length, c = 1; b > 1 << c;) c++;
        if (8 < c || b != 1 << c) throw "BaseCode : base length must be a power of two.";
        this.base = a;
        this.nbits = c
    };
    g["haxe.crypto.BaseCode"] = Ee;
    Ee.__name__ = ["haxe", "crypto", "BaseCode"];
    Ee.prototype = {
        initTable: function() {
            for (var a = [], b = 0; 256 > b;) {
                var c = b++;
                a[c] = -1
            }
            b = 0;
            for (c = this.base.length; b < c;) {
                var e = b++;
                a[this.base.b[e]] = e
            }
            this.tbl = a
        },
        decodeBytes: function(a) {
            var b = this.nbits;
            null == this.tbl && this.initTable();
            for (var c = this.tbl, e = a.length * b >> 3, d = Ca.alloc(e), f = 0, g = 0, h = 0, i = 0; i < e;) {
                for (; 8 > g;) {
                    var g = g + b,
                        f = f << b,
                        k = c[a.get(h++)];
                    if (-1 == k) throw "BaseCode : invalid encoded char";
                    f |= k
                }
                g -= 8;
                d.set(i++, f >> g & 255)
            }
            return d
        },
        __class__: Ee
    };
    var Jd = function() {};
    g["haxe.ds.BalancedTree"] = Jd;
    Jd.__name__ = ["haxe", "ds", "BalancedTree"];
    Jd.prototype = {
        set: function(a, b) {
            this.root = this.setLoop(a, b, this.root)
        },
        get: function(a) {
            for (var b = this.root; null != b;) {
                var c = this.compare(a, b.key);
                if (0 == c) return b.value;
                b = 0 > c ? b.left : b.right
            }
            return null
        },
        setLoop: function(a, b, c) {
            if (null == c) return new Ja(null, a, b, null);
            var e = this.compare(a, c.key);
            if (0 == e) return new Ja(c.left, a, b, c.right, null == c ? 0 : c._height);
            if (0 > e) return this.balance(this.setLoop(a, b, c.left), c.key, c.value, c.right);
            a = this.setLoop(a, b, c.right);
            return this.balance(c.left, c.key, c.value, a)
        },
        balance: function(a,
            b, c, e) {
            var d;
            d = null == a ? 0 : a._height;
            var f;
            f = null == e ? 0 : e._height;
            return d > f + 2 ? function() {
                var b = a.left;
                return null == b ? 0 : b._height
            }(this) >= function() {
                var b = a.right;
                return null == b ? 0 : b._height
            }(this) ? new Ja(a.left, a.key, a.value, new Ja(a.right, b, c, e)) : new Ja(new Ja(a.left, a.key, a.value, a.right.left), a.right.key, a.right.value, new Ja(a.right.right, b, c, e)) : f > d + 2 ? function() {
                var a = e.right;
                return null == a ? 0 : a._height
            }(this) > function() {
                var a = e.left;
                return null == a ? 0 : a._height
            }(this) ? new Ja(new Ja(a, b, c, e.left), e.key,
                e.value, e.right) : new Ja(new Ja(a, b, c, e.left.left), e.left.key, e.left.value, new Ja(e.left.right, e.key, e.value, e.right)) : new Ja(a, b, c, e, (d > f ? d : f) + 1)
        },
        compare: function(a, b) {
            return O.compare(a, b)
        },
        __class__: Jd
    };
    var Ja = function(a, b, c, e, d) {
        null == d && (d = -1);
        this.left = a;
        this.key = b;
        this.value = c;
        this.right = e;
        this._height = -1 == d ? (function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) > function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this) ? function(a) {
            a = a.left;
            return null == a ? 0 : a._height
        }(this) : function(a) {
            a = a.right;
            return null == a ? 0 : a._height
        }(this)) + 1 : d
    };
    g["haxe.ds.TreeNode"] = Ja;
    Ja.__name__ = ["haxe", "ds", "TreeNode"];
    Ja.prototype = {
        __class__: Ja
    };
    var Vb = function() {};
    g["haxe.ds.EnumValueMap"] = Vb;
    Vb.__name__ = ["haxe", "ds", "EnumValueMap"];
    Vb.__interfaces__ = [wc];
    Vb.__super__ = Jd;
    Vb.prototype = x(Jd.prototype, {
        compare: function(a, b) {
            var c = a[1] - b[1];
            if (0 != c) return c;
            var c = a.slice(2),
                e = b.slice(2);
            return 0 == c.length && 0 == e.length ? 0 : this.compareArgs(c, e)
        },
        compareArgs: function(a, b) {
            var c = a.length - b.length;
            if (0 != c) return c;
            for (var c =
                    0, e = a.length; c < e;) {
                var d = c++,
                    d = this.compareArg(a[d], b[d]);
                if (0 != d) return d
            }
            return 0
        },
        compareArg: function(a, b) {
            return O.isEnumValue(a) && O.isEnumValue(b) ? this.compare(a, b) : a instanceof Array && null == a.__enum__ && b instanceof Array && null == b.__enum__ ? this.compareArgs(a, b) : O.compare(a, b)
        },
        __class__: Vb
    });
    var Na = function() {
        this.h = {}
    };
    g["haxe.ds.IntMap"] = Na;
    Na.__name__ = ["haxe", "ds", "IntMap"];
    Na.__interfaces__ = [wc];
    Na.prototype = {
        set: function(a, b) {
            this.h[a] = b
        },
        get: function(a) {
            return this.h[a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty(a)
        },
        remove: function(a) {
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b | 0);
            return B.iter(a)
        },
        __class__: Na
    };
    var jb = function() {
        this.h = {};
        this.h.__keys__ = {}
    };
    g["haxe.ds.ObjectMap"] = jb;
    jb.__name__ = ["haxe", "ds", "ObjectMap"];
    jb.__interfaces__ = [wc];
    jb.prototype = {
        set: function(a, b) {
            var c = a.__id__ || (a.__id__ = ++jb.count);
            this.h[c] = b;
            this.h.__keys__[c] = a
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h.__keys__) this.h.hasOwnProperty(b) &&
                a.push(this.h.__keys__[b]);
            return B.iter(a)
        },
        __class__: jb
    };
    var R = function() {
        this.h = {}
    };
    g["haxe.ds.StringMap"] = R;
    R.__name__ = ["haxe", "ds", "StringMap"];
    R.__interfaces__ = [wc];
    R.prototype = {
        set: function(a, b) {
            this.h["$" + a] = b
        },
        get: function(a) {
            return this.h["$" + a]
        },
        exists: function(a) {
            return this.h.hasOwnProperty("$" + a)
        },
        remove: function(a) {
            a = "$" + a;
            if (!this.h.hasOwnProperty(a)) return !1;
            delete this.h[a];
            return !0
        },
        keys: function() {
            var a = [],
                b;
            for (b in this.h) this.h.hasOwnProperty(b) && a.push(b.substr(1));
            return B.iter(a)
        },
        iterator: function() {
            return {
                ref: this.h,
                it: this.keys(),
                hasNext: function() {
                    return this.it.hasNext()
                },
                next: function() {
                    return this.ref["$" + this.it.next()]
                }
            }
        },
        __class__: R
    };
    var ib = function(a) {
        this.str = a;
        this.pos = 0
    };
    g["haxe.format.JsonParser"] = ib;
    ib.__name__ = ["haxe", "format", "JsonParser"];
    ib.prototype = {
        parseRec: function() {
            for (;;) {
                var a = F.fastCodeAt(this.str, this.pos++);
                switch (a) {
                    case 32:
                    case 13:
                    case 10:
                    case 9:
                        break;
                    case 123:
                        for (var a = {}, b = null, c = null;;) switch (F.fastCodeAt(this.str, this.pos++)) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 125:
                                return (null != b || !1 == c) && this.invalidChar(), a;
                            case 58:
                                null == b && this.invalidChar();
                                O.setField(a, b, this.parseRec());
                                b = null;
                                c = !0;
                                break;
                            case 44:
                                c ? c = !1 : this.invalidChar();
                                break;
                            case 34:
                                c && this.invalidChar();
                                b = this.parseString();
                                break;
                            default:
                                this.invalidChar()
                        }
                        break;
                    case 91:
                        a = [];
                        for (b = null;;) switch (F.fastCodeAt(this.str, this.pos++)) {
                            case 32:
                            case 13:
                            case 10:
                            case 9:
                                break;
                            case 93:
                                return !1 == b && this.invalidChar(), a;
                            case 44:
                                b ? b = !1 : this.invalidChar();
                                break;
                            default:
                                b && this.invalidChar(), this.pos--, a.push(this.parseRec()),
                                    b = !0
                        }
                        break;
                    case 116:
                        a = this.pos;
                        if (114 != F.fastCodeAt(this.str, this.pos++) || 117 != F.fastCodeAt(this.str, this.pos++) || 101 != F.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
                        return !0;
                    case 102:
                        a = this.pos;
                        if (97 != F.fastCodeAt(this.str, this.pos++) || 108 != F.fastCodeAt(this.str, this.pos++) || 115 != F.fastCodeAt(this.str, this.pos++) || 101 != F.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
                        return !1;
                    case 110:
                        a = this.pos;
                        if (117 != F.fastCodeAt(this.str, this.pos++) || 108 != F.fastCodeAt(this.str,
                                this.pos++) || 108 != F.fastCodeAt(this.str, this.pos++)) this.pos = a, this.invalidChar();
                        return null;
                    case 34:
                        return this.parseString();
                    case 48:
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                    case 45:
                        return this.parseNumber(a);
                    default:
                        this.invalidChar()
                }
            }
        },
        parseString: function() {
            for (var a = this.pos, b = new Jb;;) {
                var c = F.fastCodeAt(this.str, this.pos++);
                if (34 == c) break;
                if (92 == c) {
                    b.addSub(this.str, a, this.pos - a - 1);
                    c = F.fastCodeAt(this.str, this.pos++);
                    switch (c) {
                        case 114:
                            b.b += "\r";
                            break;
                        case 110:
                            b.b +=
                                "\n";
                            break;
                        case 116:
                            b.b += "\t";
                            break;
                        case 98:
                            b.b += "\u0008";
                            break;
                        case 102:
                            b.b += "\u000c";
                            break;
                        case 47:
                        case 92:
                        case 34:
                            b.b += String.fromCharCode(c);
                            break;
                        case 117:
                            a = n.parseInt("0x" + B.substr(this.str, this.pos, 4));
                            this.pos += 4;
                            b.b += String.fromCharCode(a);
                            break;
                        default:
                            throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
                    }
                    a = this.pos
                } else if (c != c) throw "Unclosed string";
            }
            b.addSub(this.str, a, this.pos - a - 1);
            return b.b
        },
        parseNumber: function(a) {
            for (var b = this.pos - 1, c = 45 == a, e = !c,
                    d = 48 == a, f = !1, g = !1, h = !1, i = !1;;) {
                a = F.fastCodeAt(this.str, this.pos++);
                switch (a) {
                    case 48:
                        d && !f && this.invalidNumber(b);
                        c && (c = !1, d = !0);
                        e = !0;
                        break;
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        d && !f && this.invalidNumber(b);
                        c && (c = !1);
                        e = !0;
                        d = !1;
                        break;
                    case 46:
                        (c || f) && this.invalidNumber(b);
                        e = !1;
                        f = !0;
                        break;
                    case 101:
                    case 69:
                        (c || d || g) && this.invalidNumber(b);
                        e = !1;
                        g = !0;
                        break;
                    case 43:
                    case 45:
                        (!g || h) && this.invalidNumber(b);
                        e = !1;
                        h = !0;
                        break;
                    default:
                        e || this.invalidNumber(b), this.pos--, i = !0
                }
                if (i) break
            }
            a =
                n.parseFloat(B.substr(this.str, b, this.pos - b));
            b = a | 0;
            return b == a ? b : a
        },
        invalidChar: function() {
            this.pos--;
            throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
        },
        invalidNumber: function(a) {
            throw "Invalid number at position " + a + ": " + B.substr(this.str, a, this.pos - a);
        },
        __class__: ib
    };
    var xb = function(a, b) {
        this.replacer = a;
        this.indent = b;
        this.pretty = null != b;
        this.nind = 0;
        this.buf = new Jb
    };
    g["haxe.format.JsonPrinter"] = xb;
    xb.__name__ = ["haxe", "format", "JsonPrinter"];
    xb.print = function(a, b, c) {
        b = new xb(b,
            c);
        b.write("", a);
        return b.buf.b
    };
    xb.prototype = {
        ipad: function() {
            if (this.pretty) {
                var a = F.lpad("", this.indent, this.nind * this.indent.length);
                this.buf.b = null == a ? this.buf.b + "null" : this.buf.b + ("" + a)
            }
        },
        write: function(a, b) {
            null != this.replacer && (b = this.replacer(a, b));
            var c = S["typeof"](b);
            switch (c[1]) {
                case 8:
                    this.buf.b += '"???"';
                    break;
                case 4:
                    this.fieldsString(b, O.fields(b));
                    break;
                case 1:
                    c = b;
                    this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c);
                    break;
                case 2:
                    c = Math.isFinite(b) ? b : "null";
                    this.buf.b = null == c ? this.buf.b +
                        "null" : this.buf.b + ("" + c);
                    break;
                case 5:
                    this.buf.b += '"<fun>"';
                    break;
                case 6:
                    c = c[2];
                    if (c == String) this.quote(b);
                    else if (c == Array) {
                        c = b;
                        this.buf.b += "[";
                        for (var e = c.length, d = e - 1, f = 0; f < e;) {
                            var g = f++;
                            0 < g ? this.buf.b += "," : this.nind++;
                            this.pretty && (this.buf.b += "\n");
                            this.ipad();
                            this.write(g, c[g]);
                            g == d && (this.nind--, this.pretty && (this.buf.b += "\n"), this.ipad())
                        }
                        this.buf.b += "]"
                    } else if (c == R) {
                        c = b;
                        e = {};
                        for (d = c.keys(); d.hasNext();) f = d.next(), O.setField(e, f, c.get(f));
                        this.fieldsString(e, O.fields(e))
                    } else c == Date ? this.quote(B.dateStr(b)) :
                        this.fieldsString(b, O.fields(b));
                    break;
                case 7:
                    c = S.enumIndex(b);
                    this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c);
                    break;
                case 3:
                    c = b;
                    this.buf.b = null == c ? this.buf.b + "null" : this.buf.b + ("" + c);
                    break;
                case 0:
                    this.buf.b += "null"
            }
        },
        fieldsString: function(a, b) {
            this.buf.b += "{";
            for (var c = b.length, e = c - 1, d = 0; d < c;) {
                var f = d++,
                    g = b[f],
                    h = O.field(a, g);
                O.isFunction(h) || (0 < f ? this.buf.b += "," : this.nind++, this.pretty && (this.buf.b += "\n"), this.ipad(), this.quote(g), this.buf.b += ":", this.pretty && (this.buf.b += " "), this.write(g,
                    h), f == e && (this.nind--, this.pretty && (this.buf.b += "\n"), this.ipad()))
            }
            this.buf.b += "}"
        },
        quote: function(a) {
            this.buf.b += '"';
            for (var b = 0;;) {
                var c = F.fastCodeAt(a, b++);
                if (c != c) break;
                switch (c) {
                    case 34:
                        this.buf.b += '\\"';
                        break;
                    case 92:
                        this.buf.b += "\\\\";
                        break;
                    case 10:
                        this.buf.b += "\\n";
                        break;
                    case 13:
                        this.buf.b += "\\r";
                        break;
                    case 9:
                        this.buf.b += "\\t";
                        break;
                    case 8:
                        this.buf.b += "\\b";
                        break;
                    case 12:
                        this.buf.b += "\\f";
                        break;
                    default:
                        this.buf.b += String.fromCharCode(c)
                }
            }
            this.buf.b += '"'
        },
        __class__: xb
    };
    var Fe = function() {
        this.b = []
    };
    g["haxe.io.BytesBuffer"] = Fe;
    Fe.__name__ = ["haxe", "io", "BytesBuffer"];
    Fe.prototype = {
        addBytes: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw ea.OutsideBounds;
            for (var a = a.b, e = b, b = b + c; e < b;) c = e++, this.b.push(a[c])
        },
        getBytes: function() {
            var a = new Ca(this.b.length, this.b);
            this.b = null;
            return a
        },
        __class__: Fe
    };
    var Kd = function() {};
    g["haxe.io.Input"] = Kd;
    Kd.__name__ = ["haxe", "io", "Input"];
    Kd.prototype = {
        readByte: function() {
            throw "Not implemented";
        },
        readBytes: function(a, b, c) {
            var e = c,
                d = a.b;
            if (0 > b || 0 > c || b + c > a.length) throw ea.OutsideBounds;
            for (; 0 < e;) d[b] = this.readByte(), b++, e--;
            return c
        },
        read: function(a) {
            for (var b = Ca.alloc(a), c = 0; 0 < a;) {
                var e = this.readBytes(b, c, a);
                if (0 == e) throw ea.Blocked;
                c += e;
                a -= e
            }
            return b
        },
        readUInt16: function() {
            var a = this.readByte(),
                b = this.readByte();
            return this.bigEndian ? b | a << 8 : a | b << 8
        },
        __class__: Kd
    };
    var Ld = function(a, b, c) {
        null == b && (b = 0);
        null == c && (c = a.length - b);
        if (0 > b || 0 > c || b + c > a.length) throw ea.OutsideBounds;
        this.b = a.b;
        this.pos = b;
        this.totlen = this.len = c
    };
    g["haxe.io.BytesInput"] = Ld;
    Ld.__name__ = ["haxe", "io", "BytesInput"];
    Ld.__super__ = Kd;
    Ld.prototype = x(Kd.prototype, {
        readByte: function() {
            if (0 == this.len) throw new Md;
            this.len--;
            return this.b[this.pos++]
        },
        readBytes: function(a, b, c) {
            if (0 > b || 0 > c || b + c > a.length) throw ea.OutsideBounds;
            if (0 == this.len && 0 < c) throw new Md;
            this.len < c && (c = this.len);
            for (var e = this.b, a = a.b, d = 0; d < c;) {
                var f = d++;
                a[b + f] = e[this.pos + f]
            }
            this.pos += c;
            this.len -= c;
            return c
        },
        __class__: Ld
    });
    var Md = function() {};
    g["haxe.io.Eof"] = Md;
    Md.__name__ = ["haxe", "io", "Eof"];
    Md.prototype = {
        toString: function() {
            return "Eof"
        },
        __class__: Md
    };
    var ea = g["haxe.io.Error"] = {
        __ename__: ["haxe", "io", "Error"],
        __constructs__: ["Blocked", "Overflow", "OutsideBounds", "Custom"]
    };
    ea.Blocked = ["Blocked", 0];
    ea.Blocked.toString = h;
    ea.Blocked.__enum__ = ea;
    ea.Overflow = ["Overflow", 1];
    ea.Overflow.toString = h;
    ea.Overflow.__enum__ = ea;
    ea.OutsideBounds = ["OutsideBounds", 2];
    ea.OutsideBounds.toString = h;
    ea.OutsideBounds.__enum__ = ea;
    ea.Custom = function(a) {
        a = ["Custom", 3, a];
        a.__enum__ = ea;
        a.toString = h;
        return a
    };
    ea.__empty_constructs__ = [ea.Blocked, ea.Overflow, ea.OutsideBounds];
    var Le = function() {};
    g["haxe.rtti.Meta"] = Le;
    Le.__name__ = ["haxe", "rtti", "Meta"];
    Le.getType = function(a) {
        a = a.__meta__;
        return null == a || null == a.obj ? {} : a.obj
    };
    var db = g["haxe.zip.Huffman"] = {
        __ename__: ["haxe", "zip", "Huffman"],
        __constructs__: ["Found", "NeedBit", "NeedBits"]
    };
    db.Found = function(a) {
        a = ["Found", 0, a];
        a.__enum__ = db;
        a.toString = h;
        return a
    };
    db.NeedBit = function(a, b) {
        var c = ["NeedBit", 1, a, b];
        c.__enum__ = db;
        c.toString = h;
        return c
    };
    db.NeedBits = function(a, b) {
        var c = ["NeedBits", 2, a, b];
        c.__enum__ = db;
        c.toString = h;
        return c
    };
    db.__empty_constructs__ = [];
    var Ge = function() {};
    g["haxe.zip.HuffTools"] = Ge;
    Ge.__name__ = ["haxe", "zip", "HuffTools"];
    Ge.prototype = {
        treeDepth: function(a) {
            switch (a[1]) {
                case 0:
                    return 0;
                case 2:
                    throw "assert";
                case 1:
                    var b = a[3],
                        a = this.treeDepth(a[2]),
                        b = this.treeDepth(b);
                    return 1 + (a < b ? a : b)
            }
        },
        treeCompress: function(a) {
            var b = this.treeDepth(a);
            if (0 == b) return a;
            if (1 == b) switch (a[1]) {
                case 1:
                    return b = a[3], db.NeedBit(this.treeCompress(a[2]), this.treeCompress(b));
                default:
                    throw "assert";
            }
            for (var c = 1 << b, e = [], d =
                    0; d < c;) d++, e.push(db.Found(-1));
            this.treeWalk(e, 0, 0, b, a);
            return db.NeedBits(b, e)
        },
        treeWalk: function(a, b, c, e, d) {
            switch (d[1]) {
                case 1:
                    var f = d[3],
                        g = d[2];
                    0 < e ? (this.treeWalk(a, b, c + 1, e - 1, g), this.treeWalk(a, b | 1 << c, c + 1, e - 1, f)) : a[b] = this.treeCompress(d);
                    break;
                default:
                    a[b] = this.treeCompress(d)
            }
        },
        treeMake: function(a, b, c, e) {
            if (e > b) throw "Invalid huffman";
            var d = c << 5 | e;
            if (a.exists(d)) return db.Found(a.get(d));
            c <<= 1;
            e += 1;
            return db.NeedBit(this.treeMake(a, b, c, e), this.treeMake(a, b, c | 1, e))
        },
        make: function(a, b, c, e) {
            var d = [],
                f = [];
            if (32 < e) throw "Invalid huffman";
            for (var g = 0; g < e;) g++, d.push(0), f.push(0);
            for (g = 0; g < c;) {
                var h = g++,
                    h = a[h + b];
                if (h >= e) throw "Invalid huffman";
                d[h]++
            }
            for (var g = 0, h = 1, i = e - 1; h < i;) {
                var k = h++,
                    g = g + d[k] << 1;
                f[k] = g
            }
            d = new Na;
            for (g = 0; g < c;) h = g++, i = a[h + b], 0 != i && (k = f[i - 1], f[i - 1] = k + 1, d.set(k << 5 | i, h));
            return this.treeCompress(db.NeedBit(this.treeMake(d, e, 0, 1), this.treeMake(d, e, 1, 1)))
        },
        __class__: Ge
    };
    var He = function(a) {
        this.buffer = Ca.alloc(65536);
        this.pos = 0;
        a && (this.crc = new Xb)
    };
    g["haxe.zip._InflateImpl.Window"] =
        He;
    He.__name__ = ["haxe", "zip", "_InflateImpl", "Window"];
    He.prototype = {
        slide: function() {
            null != this.crc && this.crc.update(this.buffer, 0, 32768);
            var a = Ca.alloc(65536);
            this.pos -= 32768;
            a.blit(0, this.buffer, 32768, this.pos);
            this.buffer = a
        },
        addBytes: function(a, b, c) {
            65536 < this.pos + c && this.slide();
            this.buffer.blit(this.pos, a, b, c);
            this.pos += c
        },
        addByte: function(a) {
            65536 == this.pos && this.slide();
            this.buffer.b[this.pos] = a & 255;
            this.pos++
        },
        getLastChar: function() {
            return this.buffer.b[this.pos - 1]
        },
        available: function() {
            return this.pos
        },
        checksum: function() {
            null != this.crc && this.crc.update(this.buffer, 0, this.pos);
            return this.crc
        },
        __class__: He
    };
    var E = g["haxe.zip._InflateImpl.State"] = {
        __ename__: ["haxe", "zip", "_InflateImpl", "State"],
        __constructs__: "Head,Block,CData,Flat,Crc,Dist,DistOne,Done".split(",")
    };
    E.Head = ["Head", 0];
    E.Head.toString = h;
    E.Head.__enum__ = E;
    E.Block = ["Block", 1];
    E.Block.toString = h;
    E.Block.__enum__ = E;
    E.CData = ["CData", 2];
    E.CData.toString = h;
    E.CData.__enum__ = E;
    E.Flat = ["Flat", 3];
    E.Flat.toString = h;
    E.Flat.__enum__ = E;
    E.Crc = ["Crc",
        4
    ];
    E.Crc.toString = h;
    E.Crc.__enum__ = E;
    E.Dist = ["Dist", 5];
    E.Dist.toString = h;
    E.Dist.__enum__ = E;
    E.DistOne = ["DistOne", 6];
    E.DistOne.toString = h;
    E.DistOne.__enum__ = E;
    E.Done = ["Done", 7];
    E.Done.toString = h;
    E.Done.__enum__ = E;
    E.__empty_constructs__ = [E.Head, E.Block, E.CData, E.Flat, E.Crc, E.Dist, E.DistOne, E.Done];
    var na = function(a, b, c) {
        null == c && (c = !0);
        null == b && (b = !0);
        this["final"] = !1;
        this.htools = new Ge;
        this.huffman = this.buildFixedHuffman();
        this.huffdist = null;
        this.dist = this.len = 0;
        this.state = b ? E.Head : E.Block;
        this.input =
            a;
        this.needed = this.nbits = this.bits = 0;
        this.output = null;
        this.outpos = 0;
        this.lengths = [];
        for (a = 0; 19 > a;) a++, this.lengths.push(-1);
        this.window = new He(c)
    };
    g["haxe.zip.InflateImpl"] = na;
    na.__name__ = ["haxe", "zip", "InflateImpl"];
    na.run = function(a, b) {
        null == b && (b = 65536);
        for (var c = Ca.alloc(b), e = new Fe, d = new na(a);;) {
            var f = d.readBytes(c, 0, b);
            e.addBytes(c, 0, f);
            if (f < b) break
        }
        return e.getBytes()
    };
    na.prototype = {
        buildFixedHuffman: function() {
            if (null != na.FIXED_HUFFMAN) return na.FIXED_HUFFMAN;
            for (var a = [], b = 0; 288 > b;) {
                var c =
                    b++;
                a.push(143 >= c ? 8 : 255 >= c ? 9 : 279 >= c ? 7 : 8)
            }
            na.FIXED_HUFFMAN = this.htools.make(a, 0, 288, 10);
            return na.FIXED_HUFFMAN
        },
        readBytes: function(a, b, c) {
            this.needed = c;
            this.outpos = b;
            this.output = a;
            if (0 < c)
                for (; this.inflateLoop(););
            return c - this.needed
        },
        getBits: function(a) {
            for (; this.nbits < a;) this.bits |= this.input.readByte() << this.nbits, this.nbits += 8;
            var b = this.bits & (1 << a) - 1;
            this.nbits -= a;
            this.bits >>= a;
            return b
        },
        getBit: function() {
            0 == this.nbits && (this.nbits = 8, this.bits = this.input.readByte());
            var a = 1 == (this.bits & 1);
            this.nbits--;
            this.bits >>= 1;
            return a
        },
        getRevBits: function(a) {
            return 0 == a ? 0 : this.getBit() ? 1 << a - 1 | this.getRevBits(a - 1) : this.getRevBits(a - 1)
        },
        resetBits: function() {
            this.nbits = this.bits = 0
        },
        addBytes: function(a, b, c) {
            this.window.addBytes(a, b, c);
            this.output.blit(this.outpos, a, b, c);
            this.needed -= c;
            this.outpos += c
        },
        addByte: function(a) {
            this.window.addByte(a);
            this.output.b[this.outpos] = a & 255;
            this.needed--;
            this.outpos++
        },
        addDistOne: function(a) {
            for (var b = this.window.getLastChar(), c = 0; c < a;) c++, this.addByte(b)
        },
        addDist: function(a,
            b) {
            this.addBytes(this.window.buffer, this.window.pos - a, b)
        },
        applyHuffman: function(a) {
            switch (a[1]) {
                case 0:
                    return a[2];
                case 1:
                    var b = a[3],
                        a = a[2];
                    return this.applyHuffman(this.getBit() ? b : a);
                case 2:
                    return this.applyHuffman(a[3][this.getBits(a[2])])
            }
        },
        inflateLengths: function(a, b) {
            for (var c = 0, e = 0; c < b;) {
                var d = this.applyHuffman(this.huffman);
                switch (d) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                        e = d;
                        a[c] = d;
                        c++;
                        break;
                    case 16:
                        d = c + 3 + this.getBits(2);
                        if (d > b) throw "Invalid data";
                        for (; c < d;) a[c] = e, c++;
                        break;
                    case 17:
                        c += 3 + this.getBits(3);
                        if (c > b) throw "Invalid data";
                        break;
                    case 18:
                        c += 11 + this.getBits(7);
                        if (c > b) throw "Invalid data";
                        break;
                    default:
                        throw "Invalid data";
                }
            }
        },
        inflateLoop: function() {
            switch (this.state[1]) {
                case 0:
                    var a = this.input.readByte();
                    if (8 != (a & 15) || 7 != a >> 4) throw "Invalid data";
                    var b = this.input.readByte();
                    if (0 != ((a << 8) + b) % 31) throw "Invalid data";
                    if (0 != (b & 32)) throw "Unsupported dictionary";
                    this.state = E.Block;
                    return !0;
                case 4:
                    a = this.window.checksum();
                    if (null == a) return this.state = E.Done, !0;
                    b = Xb.read(this.input);
                    if (!a.equals(b)) throw "Invalid CRC";
                    this.state = E.Done;
                    return !0;
                case 7:
                    return !1;
                case 1:
                    switch (this["final"] = this.getBit(), this.getBits(2)) {
                        case 0:
                            this.len = this.input.readUInt16();
                            if (this.input.readUInt16() != 65535 - this.len) throw "Invalid data";
                            this.state = E.Flat;
                            a = this.inflateLoop();
                            this.resetBits();
                            return a;
                        case 1:
                            return this.huffman = this.buildFixedHuffman(), this.huffdist = null, this.state = E.CData, !0;
                        case 2:
                            for (var a = this.getBits(5) + 257, b = this.getBits(5) +
                                    1, c = this.getBits(4) + 4, e = 0; e < c;) {
                                var d = e++;
                                this.lengths[na.CODE_LENGTHS_POS[d]] = this.getBits(3)
                            }
                            for (; 19 > c;) e = c++, this.lengths[na.CODE_LENGTHS_POS[e]] = 0;
                            this.huffman = this.htools.make(this.lengths, 0, 19, 8);
                            c = [];
                            e = 0;
                            for (d = a + b; e < d;) e++, c.push(0);
                            this.inflateLengths(c, a + b);
                            this.huffdist = this.htools.make(c, a, b, 16);
                            this.huffman = this.htools.make(c, 0, a, 16);
                            this.state = E.CData;
                            return !0;
                        default:
                            throw "Invalid data";
                    }
                case 3:
                    return a = this.len < this.needed ? this.len : this.needed, b = this.input.read(a), this.len -= a, this.addBytes(b,
                        0, a), 0 == this.len && (this.state = this["final"] ? E.Crc : E.Block), 0 < this.needed;
                case 6:
                    return a = this.len < this.needed ? this.len : this.needed, this.addDistOne(a), this.len -= a, 0 == this.len && (this.state = E.CData), 0 < this.needed;
                case 5:
                    for (; 0 < this.len && 0 < this.needed;) a = this.len < this.dist ? this.len : this.dist, a = this.needed < a ? this.needed : a, this.addDist(this.dist, a), this.len -= a;
                    0 == this.len && (this.state = E.CData);
                    return 0 < this.needed;
                case 2:
                    b = this.applyHuffman(this.huffman);
                    if (256 > b) return this.addByte(b), 0 < this.needed;
                    if (256 ==
                        b) this.state = this["final"] ? E.Crc : E.Block;
                    else {
                        b -= 257;
                        a = na.LEN_EXTRA_BITS_TBL[b];
                        if (-1 == a) throw "Invalid data";
                        this.len = na.LEN_BASE_VAL_TBL[b] + this.getBits(a);
                        b = null == this.huffdist ? this.getRevBits(5) : this.applyHuffman(this.huffdist);
                        a = na.DIST_EXTRA_BITS_TBL[b];
                        if (-1 == a) throw "Invalid data";
                        this.dist = na.DIST_BASE_VAL_TBL[b] + this.getBits(a);
                        if (this.dist > this.window.available()) throw "Invalid data";
                        this.state = 1 == this.dist ? E.DistOne : E.Dist
                    }
                    return !0
            }
        },
        __class__: na
    };
    var Me = function() {};
    g["haxe.zip.Uncompress"] =
        Me;
    Me.__name__ = ["haxe", "zip", "Uncompress"];
    Me.run = function(a, b) {
        return na.run(new Ld(a), b)
    };
    var ta = function() {};
    g["js.Boot"] = ta;
    ta.__name__ = ["js", "Boot"];
    ta.getClass = function(a) {
        return a instanceof Array && null == a.__enum__ ? Array : a.__class__
    };
    ta.__string_rec = function(a, b) {
        if (null == a) return "null";
        if (5 <= b.length) return "<...>";
        var c = typeof a;
        if ("function" == c && (a.__name__ || a.__ename__)) c = "object";
        switch (c) {
            case "object":
                if (a instanceof Array) {
                    if (a.__enum__) {
                        if (2 == a.length) return a[0];
                        for (var c = a[0] + "(",
                                b = b + "\t", e = 2, d = a.length; e < d;) var f = e++,
                            c = 2 != f ? c + ("," + ta.__string_rec(a[f], b)) : c + ta.__string_rec(a[f], b);
                        return c + ")"
                    }
                    c = a.length;
                    e = "[";
                    b += "\t";
                    for (d = 0; d < c;) f = d++, e += (0 < f ? "," : "") + ta.__string_rec(a[f], b);
                    return e + "]"
                }
                try {
                    e = a.toString
                } catch (g) {
                    return "???"
                }
                if (null != e && e != Object.toString && (c = a.toString(), "[object Object]" != c)) return c;
                c = null;
                e = "{\n";
                b += "\t";
                d = null != a.hasOwnProperty;
                for (c in a)
                    if (!d || a.hasOwnProperty(c)) "prototype" == c || "__class__" == c || "__super__" == c || "__interfaces__" == c || "__properties__" ==
                        c || (2 != e.length && (e += ", \n"), e += b + c + " : " + ta.__string_rec(a[c], b));
                b = b.substring(1);
                return e + ("\n" + b + "}");
            case "function":
                return "<function>";
            case "string":
                return a;
            default:
                return "" + a
        }
    };
    ta.__interfLoop = function(a, b) {
        if (null == a) return !1;
        if (a == b) return !0;
        var c = a.__interfaces__;
        if (null != c)
            for (var e = 0, d = c.length; e < d;) {
                var f = e++,
                    f = c[f];
                if (f == b || ta.__interfLoop(f, b)) return !0
            }
        return ta.__interfLoop(a.__super__, b)
    };
    ta.__instanceof = function(a, b) {
        if (null == b) return !1;
        switch (b) {
            case Xe:
                return (a | 0) === a;
            case Ue:
                return "number" ==
                    typeof a;
            case Ve:
                return "boolean" == typeof a;
            case String:
                return "string" == typeof a;
            case Array:
                return a instanceof Array && null == a.__enum__;
            case Ye:
                return !0;
            default:
                if (null != a) {
                    if ("function" == typeof b && (a instanceof b || ta.__interfLoop(ta.getClass(a), b))) return !0
                } else return !1;
                return b == Ze && null != a.__name__ || b == $e && null != a.__ename__ ? !0 : a.__enum__ == b
        }
    };
    var Je = function() {};
    g["js.Browser"] = Je;
    Je.__name__ = ["js", "Browser"];
    Je.getLocalStorage = function() {
        try {
            var a = window.localStorage;
            a.getItem("");
            return a
        } catch (b) {
            return null
        }
    };
    var Ke = function() {};
    g["js.html._CanvasElement.CanvasUtil"] = Ke;
    Ke.__name__ = ["js", "html", "_CanvasElement", "CanvasUtil"];
    Ke.getContextWebGL = function(a, b) {
        for (var c = 0, e = ["webgl", "experimental-webgl"]; c < e.length;) {
            var d = e[c];
            ++c;
            d = a.getContext(d, b);
            if (null != d) return d
        }
        return null
    };
    var ya, We = 0;
    Math.NaN = Number.NaN;
    Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
    g.Math = Math;
    Math.isFinite = function(a) {
        return isFinite(a)
    };
    Math.isNaN = function(a) {
        return isNaN(a)
    };
    String.prototype.__class__ = g.String = String;
    String.__name__ = ["String"];
    g.Array = Array;
    Array.__name__ = ["Array"];
    Date.prototype.__class__ = g.Date = Date;
    Date.__name__ = ["Date"];
    var Xe = g.Int = {
            __name__: ["Int"]
        },
        Ye = g.Dynamic = {
            __name__: ["Dynamic"]
        },
        Ue = g.Float = Number;
    Ue.__name__ = ["Float"];
    var Ve = g.Bool = Boolean;
    Ve.__ename__ = ["Bool"];
    var Ze = g.Class = {
            __name__: ["Class"]
        },
        $e = {};
    qb.instance = new qb;
    oa.DISPATCHING_SENTINEL = new Mb(null, null);
    o.root = new p;
    o.uncaughtError = new W;
    o.hidden = new ga(!1);
    o.volume = new Z(1);
    o._platform =
        qb.instance;
    o._calledInit = !1;
    La.__meta__ = {
        obj: {
            assets: [{
                preloader: [{
                    bytes: 1013,
                    md5: "6457cb512c8f3af41864bbaf3bc63099",
                    name: "bg.png"
                }, {
                    bytes: 119834,
                    md5: "91f799630589a56d9d07568fc0f29858",
                    name: "mainmenu.png"
                }, {
                    bytes: 2665,
                    md5: "d4300e262b8be996bb5af8f5e954bb83",
                    name: "progress.png"
                }, {
                    bytes: 5281,
                    md5: "3fa9936caf7835ef8bc97673e340dd9c",
                    name: "progress_bg.png"
                }],
                bootstrap: [{
                        bytes: 10076,
                        md5: "d1fa481acc17af1091179656bfe7ada8",
                        name: "fonts/ubuntu.fnt.cmp"
                    }, {
                        bytes: 76719,
                        md5: "c15fa152931a395f34c939e0a81ccdba",
                        name: "fonts/ubuntu_0.png"
                    },
                    {
                        bytes: 11720,
                        md5: "bab560665bc4a6c0d087942fa21225d8",
                        name: "fonts/ubuntu_small.fnt.cmp"
                    }, {
                        bytes: 58483,
                        md5: "3cbb4e712ab96ce304a2b404c3cbfcc5",
                        name: "fonts/ubuntu_small_0.png"
                    }, {
                        bytes: 149358,
                        md5: "407c6c5f26e8fc0bb6ac759f682a8994",
                        name: "gfx/atlas_0.png"
                    }, {
                        bytes: 140283,
                        md5: "984b870835bafd77c0d0cdb202809e94",
                        name: "gfx/atlas_ingame.png"
                    }, {
                        bytes: 87067,
                        md5: "c368959f7f0dc9d2e6ad2a0057cb19be",
                        name: "gfx/bg.png"
                    }, {
                        bytes: 61211,
                        md5: "78afc112e3916e7069d34f15502d70f6",
                        name: "gfx/garden.png"
                    }, {
                        bytes: 225,
                        md5: "4ad3376964e76fe38b6ca8bf72fe5e11",
                        name: "gfx/overlay.png"
                    }, {
                        bytes: 27040,
                        md5: "f3cded6f3029af338909775d966855ed",
                        name: "gfx/rotate_device.png"
                    }, {
                        bytes: 813,
                        md5: "413653789c148b71f80abab008c456cc",
                        name: "gfx/uibg_standard-corner.png"
                    }, {
                        bytes: 100,
                        md5: "2a3839886d6bec6d8b5a3169fbf94e9a",
                        name: "gfx/uibg_standard-fill.png"
                    }, {
                        bytes: 225,
                        md5: "81433cfe7ad756709c41c29188bda43a",
                        name: "gfx/uibg_standard-side.png"
                    }, {
                        bytes: 6432,
                        md5: "8ff580ab470affc3cc798401f35fbaed",
                        name: "loc/loc.json"
                    }, {
                        bytes: 8754,
                        md5: "024b0d2550c81176dac705c8888d8aa5",
                        name: "sfx/cash_count.m4a"
                    },
                    {
                        bytes: 7223,
                        md5: "9db826aee033583fb0e842af869f9a31",
                        name: "sfx/cash_count.ogg"
                    }, {
                        bytes: 11042,
                        md5: "1a0095df700e5cd881c5069e517ed1ae",
                        name: "sfx/coins.m4a"
                    }, {
                        bytes: 10486,
                        md5: "56b607bf58de468810947312fe35143a",
                        name: "sfx/coins.ogg"
                    }, {
                        bytes: 50730,
                        md5: "fcaab1bc2ceac788dca30b4ded7c98dc",
                        name: "sfx/completed.m4a"
                    }, {
                        bytes: 27794,
                        md5: "21f570f4a3c17da925940a30e8f974f3",
                        name: "sfx/completed.ogg"
                    }, {
                        bytes: 3888,
                        md5: "21e23ec230fd2b4d376d0074199d56d6",
                        name: "sfx/enqueue.m4a"
                    }, {
                        bytes: 5394,
                        md5: "7c28bdc9abbfe32de34d10751cb8afaf",
                        name: "sfx/enqueue.ogg"
                    }, {
                        bytes: 21910,
                        md5: "8efea5e7a5f81c6dca592966629eceb6",
                        name: "sfx/game_over.m4a"
                    }, {
                        bytes: 15485,
                        md5: "b854a766da4f59f466ae7e546cd7752c",
                        name: "sfx/game_over.ogg"
                    }, {
                        bytes: 10516,
                        md5: "c4a17284307698ab93735699a63ebfb2",
                        name: "sfx/hit.m4a"
                    }, {
                        bytes: 7952,
                        md5: "bd587b8adcfeb88a14a8054981d6de04",
                        name: "sfx/hit.ogg"
                    }, {
                        bytes: 262580,
                        md5: "5fdf6acc33f6c06b3630d30c89c34a33",
                        name: "sfx/ingame.m4a"
                    }, {
                        bytes: 274221,
                        md5: "f4e7e26a8321caae5f53d7064a4c410a",
                        name: "sfx/ingame.ogg"
                    }, {
                        bytes: 3606,
                        md5: "6c0a206bb1e34b6e2f2707e25b9165ac",
                        name: "sfx/orange.m4a"
                    }, {
                        bytes: 5277,
                        md5: "c833c15d67b44761bd523b4b1b87fbbc",
                        name: "sfx/orange.ogg"
                    }, {
                        bytes: 5404,
                        md5: "6995efc1c2f52bb0d5a3c98c3d32934e",
                        name: "sfx/pop.m4a"
                    }, {
                        bytes: 5450,
                        md5: "159f9c0c14d13d4bcf35834fd9a0378c",
                        name: "sfx/pop.ogg"
                    }, {
                        bytes: 5179,
                        md5: "c1c7d005e6d010641216a0be5cb5481c",
                        name: "sfx/pop2.m4a"
                    }, {
                        bytes: 5565,
                        md5: "78e80dcbc03b9fadec7f25ce071b96a9",
                        name: "sfx/pop2.ogg"
                    }, {
                        bytes: 4750,
                        md5: "6707e0576aac34a2ebd527ac91f82595",
                        name: "sfx/swish.m4a"
                    }, {
                        bytes: 5668,
                        md5: "dc04a70890d8d7fde49639169f165f2d",
                        name: "sfx/swish.ogg"
                    }
                ]
            }]
        }
    };
    La._supportsCrossOrigin = function() {
        var a;
        a = 0 <= window.navigator.userAgent.indexOf("Linux; U; Android") ? !1 : null != (new XMLHttpRequest).withCredentials;
        a || null;
        return a
    }();
    u._scratchPoint = new Ma;
    Cb.NEWLINE = new Gc(10);
    $a._sharedEvent = new Wd;
    Ta._sharedEvent = new Xd;
    ua._sharedEvent = new Yd;
    zb.CANVAS_TEXTURES = (new Ib("(iPhone|iPod|iPad)", "")).match(window.navigator.userAgent);
    da._detectBlobSupport = !0;
    I.VENDOR_PREFIXES = ["webkit", "moz", "ms", "o", "khtml"];
    I.SHOULD_HIDE_MOBILE_BROWSER = !1;
    T._detectSupport = !0;
    ab._scratchMatrix = new Xa;
    Rb.LEFT_WALL_POS = 0;
    Rb.RIGHT_WALL_POS = 750;
    za.myTextureCache = new Vb;
    X.myGridXOffset = 47;
    X.myGridYOffset = 105;
    X.myBubbleGridXDist = 77;
    X.myBubbleGridYDist = 67;
    qc.ContainsCount = 5;
    nd.debugKeysEnabled = !1;
    ob.supported = !1;
    D.TargetWidth = 750;
    D.TargetHeight = 1100;
    Ba.EVENT_CONV_START = "conv_start";
    Ba.EVENT_CONV_END = "conv_end";
    Ba.EVENT_QUEUE_ADD = "queue_add";
    Ba.EVENT_ORANGE_SPAWN = "orange_spawn";
    Ba.EVENT_ITEM_MOVE_COMPLETED = "item-move-completed";
    cb.StoreTimeStampFreqSeconds =
        2;
    cb._sortRectA = new qa;
    cb._sortRectB = new qa;
    Ia.myRecycledLines = [];
    l.firstMainMenuLoad = !0;
    l.myIsIngame = !1;
    Ha.myMessages = new R;
    ma.level = 0;
    gb.animationTimeOffset = -0.18;
    gb.tmpState = new Ed(0, 0);
    i.EnableShopAtLevel = 3;
    i.EnableBoostersAtLevel = 7;
    i.EnableJuicerAtLevel = 10;
    i.EnableIceCreamMakerAtLevel = 15;
    i.EnableMatchAnyAtLevel = 17;
    i.EnableBoosterShopAtLevel = 23;
    i.EnableJuicer2AtLevel = 25;
    i.EnableOtree4AtLevel = 30;
    i.EnableStand3AtLevel = 35;
    i.InitId = "init";
    i.PostInitId = "init_post";
    i.PostShopId = "shop_post";
    i.PostBoostersId =
        "boosters_post";
    i.PostJuicerId = "juicer_post";
    i.PostIceCreaMakerId = "icecreammaker_post";
    i.PostMatchAnyId = "matchany_post";
    i.PostBoosterShopId = "boostershop_post";
    i.PostJuicer2Id = "juicer2_post";
    i.PostOtree4Id = "otree4_post";
    i.PostStand3Id = "stand3_post";
    i.EventOrder = [i.InitId, i.PostInitId, i.PostShopId, i.PostBoostersId, i.PostJuicerId, i.PostIceCreaMakerId, i.PostMatchAnyId, i.PostBoosterShopId, i.PostJuicer2Id, i.PostOtree4Id, i.PostStand3Id];
    Wb.myPool = new ke(function() {
        return new Wb
    });
    N.myQueue = [];
    N.myLooping =
        new R;
    ca.tmpRect = new qa;
    sa.TimeJumpActive = !1;
    Q.mySteps = ["first-harvest", "second-harvest", "first-purchase", "done"];
    Q.myInnerState = "";
    J.tmpRect = new qa;
    mb.USE_CACHE = !1;
    mb.USE_ENUM_INDEX = !1;
    mb.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Fa.DEFAULT_RESOLVER = S;
    Fa.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
    Ob.CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    Ob.BYTES = Ca.ofString(Ob.CHARS);
    jb.count = 0;
    na.LEN_EXTRA_BITS_TBL = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, -1, -1];
    na.LEN_BASE_VAL_TBL = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
    na.DIST_EXTRA_BITS_TBL = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, -1, -1];
    na.DIST_BASE_VAL_TBL = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
    na.CODE_LENGTHS_POS = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    l.main()
})();