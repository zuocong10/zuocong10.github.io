/*!
 *  __  __                __                                     __
 * /\ \/\ \              /\ \             __                    /\ \
 * \ \ \_\ \   __  __    \_\ \      __   /\_\      __       ___ \ \ \/'\
 *  \ \  _  \ /\ \/\ \   /'_` \   /'__`\ \/\ \   /'__`\    /'___\\ \ , <
 *   \ \ \ \ \\ \ \_\ \ /\ \L\ \ /\  __/  \ \ \ /\ \L\.\_ /\ \__/ \ \ \\`\
 *    \ \_\ \_\\/`____ \\ \___,_\\ \____\ _\ \ \\ \__/.\_\\ \____\ \ \_\ \_\
 *     \/_/\/_/ `/___/> \\/__,_ / \/____//\ \_\ \\/__/\/_/ \/____/  \/_/\/_/
 *                 /\___/                \ \____/
 *                 \/__/                  \/___/
 *
 * Powered by Hydejack v8.5.2 <https://hydejack.com/>
 */
! function(t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
  }
  n.m = t, n.c = e, n.d = function(t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    })
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function(t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t)
      for (var o in t) n.d(r, o, function(e) {
        return t[e]
      }.bind(null, o));
    return r
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 298)
}([function(t, e, n) {
  var r = n(1),
    o = n(29),
    i = n(15),
    s = n(12),
    a = n(21),
    u = function t(e, n, u) {
      var c, l, f, h, p = e & t.F,
        d = e & t.G,
        y = e & t.P,
        v = e & t.B,
        m = d ? r : e & t.S ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
        b = d ? o : o[n] || (o[n] = {}),
        g = b.prototype || (b.prototype = {});
      for (c in d && (u = n), u) f = ((l = !p && m && void 0 !== m[c]) ? m : u)[c], h = v && l ? a(f, r) : y && "function" == typeof f ? a(Function.call, f) : f, m && s(m, c, f, e & t.U), b[c] != f && i(b, c, h), y && g[c] != f && (g[c] = f)
    };
  r.core = o, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, t.exports = u
}, function(t, e) {
  var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  t.exports = function(t) {
    return "object" === n(t) ? null !== t : "function" == typeof t
  }
}, function(t, e, n) {
  var r = n(2);
  t.exports = function(t) {
    if (!r(t)) throw TypeError(t + " is not an object!");
    return t
  }
}, function(t, e) {
  t.exports = function(t) {
    try {
      return !!t()
    } catch (t) {
      return !0
    }
  }
}, function(t, e, n) {
  var r = n(50)("wks"),
    o = n(33),
    i = n(1).Symbol,
    s = "function" == typeof i;
  (t.exports = function(t) {
    return r[t] || (r[t] = s && i[t] || (s ? i : o)("Symbol." + t))
  }).store = r
}, function(t, e, n) {
  t.exports = !n(4)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, n) {
  var r = n(3),
    o = n(91),
    i = n(20),
    s = Object.defineProperty;
  e.f = n(6) ? Object.defineProperty : function(t, e, n) {
    if (r(t), e = i(e, !0), r(n), o) try {
      return s(t, e, n)
    } catch (t) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (t[e] = n.value), t
  }
}, function(t, e, n) {
  var r = n(26),
    o = Math.min;
  t.exports = function(t) {
    return t > 0 ? o(r(t), 9007199254740991) : 0
  }
}, function(t, e, n) {
  var r = n(25);
  t.exports = function(t) {
    return Object(r(t))
  }
}, , function(t, e, n) {
  "use strict";
  (function(t) {
    n.d(e, "a", function() {
      return i
    });
    var r = "undefined" != typeof window && window,
      o = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
      i = r || void 0 !== t && t || o
  }).call(this, n(88))
}, function(t, e, n) {
  var r = n(1),
    o = n(15),
    i = n(16),
    s = n(33)("src"),
    a = n(123),
    u = ("" + a).split("toString");
  n(29).inspectSource = function(t) {
    return a.call(t)
  }, (t.exports = function(t, e, n, a) {
    var c = "function" == typeof n;
    c && (i(n, "name") || o(n, "name", e)), t[e] !== n && (c && (i(n, s) || o(n, s, t[e] ? "" + t[e] : u.join(String(e)))), t === r ? t[e] = n : a ? t[e] ? t[e] = n : o(t, e, n) : (delete t[e], o(t, e, n)))
  })(Function.prototype, "toString", function() {
    return "function" == typeof this && this[s] || a.call(this)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(4),
    i = n(25),
    s = /"/g,
    a = function(t, e, n, r) {
      var o = String(i(t)),
        a = "<" + e;
      return "" !== n && (a += " " + n + '="' + String(r).replace(s, "&quot;") + '"'), a + ">" + o + "</" + e + ">"
    };
  t.exports = function(t, e) {
    var n = {};
    n[t] = e(a), r(r.P + r.F * o(function() {
      var e = "" [t]('"');
      return e !== e.toLowerCase() || e.split('"').length > 3
    }), "String", n)
  }
}, , function(t, e, n) {
  var r = n(7),
    o = n(32);
  t.exports = n(6) ? function(t, e, n) {
    return r.f(t, e, o(1, n))
  } : function(t, e, n) {
    return t[e] = n, t
  }
}, function(t, e) {
  var n = {}.hasOwnProperty;
  t.exports = function(t, e) {
    return n.call(t, e)
  }
}, function(t, e) {
  t.exports = function(t) {
    if ("function" != typeof t) throw TypeError(t + " is not a function!");
    return t
  }
}, function(t, e, n) {
  var r = n(48),
    o = n(32),
    i = n(19),
    s = n(20),
    a = n(16),
    u = n(91),
    c = Object.getOwnPropertyDescriptor;
  e.f = n(6) ? c : function(t, e) {
    if (t = i(t), e = s(e, !0), u) try {
      return c(t, e)
    } catch (t) {}
    if (a(t, e)) return o(!r.f.call(t, e), t[e])
  }
}, function(t, e, n) {
  var r = n(51),
    o = n(25);
  t.exports = function(t) {
    return r(o(t))
  }
}, function(t, e, n) {
  var r = n(2);
  t.exports = function(t, e) {
    if (!r(t)) return t;
    var n, o;
    if (e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
    if ("function" == typeof(n = t.valueOf) && !r(o = n.call(t))) return o;
    if (!e && "function" == typeof(n = t.toString) && !r(o = n.call(t))) return o;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(t, e, n) {
  var r = n(17);
  t.exports = function(t, e, n) {
    if (r(t), void 0 === e) return t;
    switch (n) {
      case 1:
        return function(n) {
          return t.call(e, n)
        };
      case 2:
        return function(n, r) {
          return t.call(e, n, r)
        };
      case 3:
        return function(n, r, o) {
          return t.call(e, n, r, o)
        }
    }
    return function() {
      return t.apply(e, arguments)
    }
  }
}, function(t, e, n) {
  var r = n(21),
    o = n(51),
    i = n(9),
    s = n(8),
    a = n(93);
  t.exports = function(t, e) {
    var n = 1 == t,
      u = 2 == t,
      c = 3 == t,
      l = 4 == t,
      f = 6 == t,
      h = 5 == t || f,
      p = e || a;
    return function(e, a, d) {
      for (var y, v, m = i(e), b = o(m), g = r(a, d, 3), _ = s(b.length), w = 0, S = n ? p(e, _) : u ? p(e, 0) : void 0; _ > w; w++)
        if ((h || w in b) && (v = g(y = b[w], w, m), t))
          if (n) S[w] = v;
          else if (v) switch (t) {
        case 3:
          return !0;
        case 5:
          return y;
        case 6:
          return w;
        case 2:
          S.push(y)
      } else if (l) return !1;
      return f ? -1 : c || l ? l : S
    }
  }
}, function(t, e, n) {
  "use strict";
  var r = n(4);
  t.exports = function(t, e) {
    return !!t && r(function() {
      e ? t.call(null, function() {}, 1) : t.call(null)
    })
  }
}, function(t, e, n) {
  var r = n(0),
    o = n(29),
    i = n(4);
  t.exports = function(t, e) {
    var n = (o.Object || {})[t] || Object[t],
      s = {};
    s[t] = e(n), r(r.S + r.F * i(function() {
      n(1)
    }), "Object", s)
  }
}, function(t, e) {
  t.exports = function(t) {
    if (null == t) throw TypeError("Can't call method on  " + t);
    return t
  }
}, function(t, e) {
  var n = Math.ceil,
    r = Math.floor;
  t.exports = function(t) {
    return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
  }
}, function(t, e, n) {
  var r = n(16),
    o = n(9),
    i = n(73)("IE_PROTO"),
    s = Object.prototype;
  t.exports = Object.getPrototypeOf || function(t) {
    return t = o(t), r(t, i) ? t[i] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
  }
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  if (n(6)) {
    var o = n(30),
      i = n(1),
      s = n(4),
      a = n(0),
      u = n(63),
      c = n(87),
      l = n(21),
      f = n(45),
      h = n(32),
      p = n(15),
      d = n(44),
      y = n(26),
      v = n(8),
      m = n(117),
      b = n(40),
      g = n(20),
      _ = n(16),
      w = n(47),
      S = n(2),
      E = n(9),
      x = n(68),
      O = n(36),
      T = n(27),
      C = n(39).f,
      N = n(70),
      k = n(33),
      A = n(5),
      M = n(22),
      j = n(54),
      P = n(49),
      R = n(71),
      I = n(41),
      L = n(53),
      D = n(43),
      F = n(67),
      H = n(92),
      q = n(7),
      B = n(18),
      U = q.f,
      z = B.f,
      W = i.RangeError,
      V = i.TypeError,
      X = i.Uint8Array,
      $ = Array.prototype,
      G = c.ArrayBuffer,
      Y = c.DataView,
      K = M(0),
      J = M(2),
      Z = M(3),
      Q = M(4),
      tt = M(5),
      et = M(6),
      nt = j(!0),
      rt = j(!1),
      ot = R.values,
      it = R.keys,
      st = R.entries,
      at = $.lastIndexOf,
      ut = $.reduce,
      ct = $.reduceRight,
      lt = $.join,
      ft = $.sort,
      ht = $.slice,
      pt = $.toString,
      dt = $.toLocaleString,
      yt = A("iterator"),
      vt = A("toStringTag"),
      mt = k("typed_constructor"),
      bt = k("def_constructor"),
      gt = u.CONSTR,
      _t = u.TYPED,
      wt = u.VIEW,
      St = M(1, function(t, e) {
        return Ct(P(t, t[bt]), e)
      }),
      Et = s(function() {
        return 1 === new X(new Uint16Array([1]).buffer)[0]
      }),
      xt = !!X && !!X.prototype.set && s(function() {
        new X(1).set({})
      }),
      Ot = function(t, e) {
        var n = y(t);
        if (n < 0 || n % e) throw W("Wrong offset!");
        return n
      },
      Tt = function(t) {
        if (S(t) && _t in t) return t;
        throw V(t + " is not a typed array!")
      },
      Ct = function(t, e) {
        if (!(S(t) && mt in t)) throw V("It is not a typed array constructor!");
        return new t(e)
      },
      Nt = function(t, e) {
        return kt(P(t, t[bt]), e)
      },
      kt = function(t, e) {
        for (var n = 0, r = e.length, o = Ct(t, r); r > n;) o[n] = e[n++];
        return o
      },
      At = function(t, e, n) {
        U(t, e, {
          get: function() {
            return this._d[n]
          }
        })
      },
      Mt = function(t) {
        var e, n, r, o, i, s, a = E(t),
          u = arguments.length,
          c = u > 1 ? arguments[1] : void 0,
          f = void 0 !== c,
          h = N(a);
        if (null != h && !x(h)) {
          for (s = h.call(a), r = [], e = 0; !(i = s.next()).done; e++) r.push(i.value);
          a = r
        }
        for (f && u > 2 && (c = l(c, arguments[2], 2)), e = 0, n = v(a.length), o = Ct(this, n); n > e; e++) o[e] = f ? c(a[e], e) : a[e];
        return o
      },
      jt = function() {
        for (var t = 0, e = arguments.length, n = Ct(this, e); e > t;) n[t] = arguments[t++];
        return n
      },
      Pt = !!X && s(function() {
        dt.call(new X(1))
      }),
      Rt = function() {
        return dt.apply(Pt ? ht.call(Tt(this)) : Tt(this), arguments)
      },
      It = {
        copyWithin: function(t, e) {
          return H.call(Tt(this), t, e, arguments.length > 2 ? arguments[2] : void 0)
        },
        every: function(t) {
          return Q(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        fill: function(t) {
          return F.apply(Tt(this), arguments)
        },
        filter: function(t) {
          return Nt(this, J(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0))
        },
        find: function(t) {
          return tt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        findIndex: function(t) {
          return et(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        forEach: function(t) {
          K(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        indexOf: function(t) {
          return rt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        includes: function(t) {
          return nt(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        join: function(t) {
          return lt.apply(Tt(this), arguments)
        },
        lastIndexOf: function(t) {
          return at.apply(Tt(this), arguments)
        },
        map: function(t) {
          return St(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        reduce: function(t) {
          return ut.apply(Tt(this), arguments)
        },
        reduceRight: function(t) {
          return ct.apply(Tt(this), arguments)
        },
        reverse: function() {
          for (var t, e = Tt(this).length, n = Math.floor(e / 2), r = 0; r < n;) t = this[r], this[r++] = this[--e], this[e] = t;
          return this
        },
        some: function(t) {
          return Z(Tt(this), t, arguments.length > 1 ? arguments[1] : void 0)
        },
        sort: function(t) {
          return ft.call(Tt(this), t)
        },
        subarray: function(t, e) {
          var n = Tt(this),
            r = n.length,
            o = b(t, r);
          return new(P(n, n[bt]))(n.buffer, n.byteOffset + o * n.BYTES_PER_ELEMENT, v((void 0 === e ? r : b(e, r)) - o))
        }
      },
      Lt = function(t, e) {
        return Nt(this, ht.call(Tt(this), t, e))
      },
      Dt = function(t) {
        Tt(this);
        var e = Ot(arguments[1], 1),
          n = this.length,
          r = E(t),
          o = v(r.length),
          i = 0;
        if (o + e > n) throw W("Wrong length!");
        for (; i < o;) this[e + i] = r[i++]
      },
      Ft = {
        entries: function() {
          return st.call(Tt(this))
        },
        keys: function() {
          return it.call(Tt(this))
        },
        values: function() {
          return ot.call(Tt(this))
        }
      },
      Ht = function(t, e) {
        return S(t) && t[_t] && "symbol" != r(e) && e in t && String(+e) == String(e)
      },
      qt = function(t, e) {
        return Ht(t, e = g(e, !0)) ? h(2, t[e]) : z(t, e)
      },
      Bt = function(t, e, n) {
        return !(Ht(t, e = g(e, !0)) && S(n) && _(n, "value")) || _(n, "get") || _(n, "set") || n.configurable || _(n, "writable") && !n.writable || _(n, "enumerable") && !n.enumerable ? U(t, e, n) : (t[e] = n.value, t)
      };
    gt || (B.f = qt, q.f = Bt), a(a.S + a.F * !gt, "Object", {
      getOwnPropertyDescriptor: qt,
      defineProperty: Bt
    }), s(function() {
      pt.call({})
    }) && (pt = dt = function() {
      return lt.call(this)
    });
    var Ut = d({}, It);
    d(Ut, Ft), p(Ut, yt, Ft.values), d(Ut, {
      slice: Lt,
      set: Dt,
      constructor: function() {},
      toString: pt,
      toLocaleString: Rt
    }), At(Ut, "buffer", "b"), At(Ut, "byteOffset", "o"), At(Ut, "byteLength", "l"), At(Ut, "length", "e"), U(Ut, vt, {
      get: function() {
        return this[_t]
      }
    }), t.exports = function(t, e, n, r) {
      var c = t + ((r = !!r) ? "Clamped" : "") + "Array",
        l = "get" + t,
        h = "set" + t,
        d = i[c],
        y = d || {},
        b = d && T(d),
        g = !d || !u.ABV,
        _ = {},
        E = d && d.prototype,
        x = function(t, n) {
          U(t, n, {
            get: function() {
              return function(t, n) {
                var r = t._d;
                return r.v[l](n * e + r.o, Et)
              }(this, n)
            },
            set: function(t) {
              return function(t, n, o) {
                var i = t._d;
                r && (o = (o = Math.round(o)) < 0 ? 0 : o > 255 ? 255 : 255 & o), i.v[h](n * e + i.o, o, Et)
              }(this, n, t)
            },
            enumerable: !0
          })
        };
      g ? (d = n(function(t, n, r, o) {
        f(t, d, c, "_d");
        var i, s, a, u, l = 0,
          h = 0;
        if (S(n)) {
          if (!(n instanceof G || "ArrayBuffer" == (u = w(n)) || "SharedArrayBuffer" == u)) return _t in n ? kt(d, n) : Mt.call(d, n);
          i = n, h = Ot(r, e);
          var y = n.byteLength;
          if (void 0 === o) {
            if (y % e) throw W("Wrong length!");
            if ((s = y - h) < 0) throw W("Wrong length!")
          } else if ((s = v(o) * e) + h > y) throw W("Wrong length!");
          a = s / e
        } else a = m(n), i = new G(s = a * e);
        for (p(t, "_d", {
            b: i,
            o: h,
            l: s,
            e: a,
            v: new Y(i)
          }); l < a;) x(t, l++)
      }), E = d.prototype = O(Ut), p(E, "constructor", d)) : s(function() {
        d(1)
      }) && s(function() {
        new d(-1)
      }) && L(function(t) {
        new d, new d(null), new d(1.5), new d(t)
      }, !0) || (d = n(function(t, n, r, o) {
        var i;
        return f(t, d, c), S(n) ? n instanceof G || "ArrayBuffer" == (i = w(n)) || "SharedArrayBuffer" == i ? void 0 !== o ? new y(n, Ot(r, e), o) : void 0 !== r ? new y(n, Ot(r, e)) : new y(n) : _t in n ? kt(d, n) : Mt.call(d, n) : new y(m(n))
      }), K(b !== Function.prototype ? C(y).concat(C(b)) : C(y), function(t) {
        t in d || p(d, t, y[t])
      }), d.prototype = E, o || (E.constructor = d));
      var N = E[yt],
        k = !!N && ("values" == N.name || null == N.name),
        A = Ft.values;
      p(d, mt, !0), p(E, _t, c), p(E, wt, !0), p(E, bt, d), (r ? new d(1)[vt] == c : vt in E) || U(E, vt, {
        get: function() {
          return c
        }
      }), _[c] = d, a(a.G + a.W + a.F * (d != y), _), a(a.S, c, {
        BYTES_PER_ELEMENT: e
      }), a(a.S + a.F * s(function() {
        y.of.call(d, 1)
      }), c, {
        from: Mt,
        of: jt
      }), "BYTES_PER_ELEMENT" in E || p(E, "BYTES_PER_ELEMENT", e), a(a.P, c, It), D(c), a(a.P + a.F * xt, c, {
        set: Dt
      }), a(a.P + a.F * !k, c, Ft), o || E.toString == pt || (E.toString = pt), a(a.P + a.F * s(function() {
        new d(1).slice()
      }), c, {
        slice: Lt
      }), a(a.P + a.F * (s(function() {
        return [1, 2].toLocaleString() != new d([1, 2]).toLocaleString()
      }) || !s(function() {
        E.toLocaleString.call([1, 2])
      })), c, {
        toLocaleString: Rt
      }), I[c] = k ? N : A, o || k || p(E, yt, A)
    }
  } else t.exports = function() {}
}, function(t, e) {
  var n = t.exports = {
    version: "2.6.5"
  };
  "number" == typeof __e && (__e = n)
}, function(t, e) {
  t.exports = !1
}, function(t, e, n) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(33)("meta"),
    i = n(2),
    s = n(16),
    a = n(7).f,
    u = 0,
    c = Object.isExtensible || function() {
      return !0
    },
    l = !n(4)(function() {
      return c(Object.preventExtensions({}))
    }),
    f = function(t) {
      a(t, o, {
        value: {
          i: "O" + ++u,
          w: {}
        }
      })
    },
    h = t.exports = {
      KEY: o,
      NEED: !1,
      fastKey: function(t, e) {
        if (!i(t)) return "symbol" == r(t) ? t : ("string" == typeof t ? "S" : "P") + t;
        if (!s(t, o)) {
          if (!c(t)) return "F";
          if (!e) return "E";
          f(t)
        }
        return t[o].i
      },
      getWeak: function(t, e) {
        if (!s(t, o)) {
          if (!c(t)) return !0;
          if (!e) return !1;
          f(t)
        }
        return t[o].w
      },
      onFreeze: function(t) {
        return l && h.NEED && c(t) && !s(t, o) && f(t), t
      }
    }
}, function(t, e) {
  t.exports = function(t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e
    }
  }
}, function(t, e) {
  var n = 0,
    r = Math.random();
  t.exports = function(t) {
    return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
  }
}, function(t, e, n) {
  var r = n(5)("unscopables"),
    o = Array.prototype;
  null == o[r] && n(15)(o, r, {}), t.exports = function(t) {
    o[r][t] = !0
  }
}, function(t, e) {
  var n = {}.toString;
  t.exports = function(t) {
    return n.call(t).slice(8, -1)
  }
}, function(t, e, n) {
  var r = n(3),
    o = n(96),
    i = n(74),
    s = n(73)("IE_PROTO"),
    a = function() {},
    u = function() {
      var t, e = n(66)("iframe"),
        r = i.length;
      for (e.style.display = "none", n(98).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), u = t.F; r--;) delete u.prototype[i[r]];
      return u()
    };
  t.exports = Object.create || function(t, e) {
    var n;
    return null !== t ? (a.prototype = r(t), n = new a, a.prototype = null, n[s] = t) : n = u(), void 0 === e ? n : o(n, e)
  }
}, function(t, e, n) {
  var r = n(97),
    o = n(74);
  t.exports = Object.keys || function(t) {
    return r(t, o)
  }
}, function(t, e, n) {
  var r = n(2);
  t.exports = function(t, e) {
    if (!r(t) || t._t !== e) throw TypeError("Incompatible receiver, " + e + " required!");
    return t
  }
}, function(t, e, n) {
  var r = n(97),
    o = n(74).concat("length", "prototype");
  e.f = Object.getOwnPropertyNames || function(t) {
    return r(t, o)
  }
}, function(t, e, n) {
  var r = n(26),
    o = Math.max,
    i = Math.min;
  t.exports = function(t, e) {
    return (t = r(t)) < 0 ? o(t + e, 0) : i(t, e)
  }
}, function(t, e) {
  t.exports = {}
}, function(t, e, n) {
  var r = n(7).f,
    o = n(16),
    i = n(5)("toStringTag");
  t.exports = function(t, e, n) {
    t && !o(t = n ? t : t.prototype, i) && r(t, i, {
      configurable: !0,
      value: e
    })
  }
}, function(t, e, n) {
  "use strict";
  var r = n(1),
    o = n(7),
    i = n(6),
    s = n(5)("species");
  t.exports = function(t) {
    var e = r[t];
    i && e && !e[s] && o.f(e, s, {
      configurable: !0,
      get: function() {
        return this
      }
    })
  }
}, function(t, e, n) {
  var r = n(12);
  t.exports = function(t, e, n) {
    for (var o in e) r(t, o, e[o], n);
    return t
  }
}, function(t, e) {
  t.exports = function(t, e, n, r) {
    if (!(t instanceof e) || void 0 !== r && r in t) throw TypeError(n + ": incorrect invocation!");
    return t
  }
}, function(t, e, n) {
  var r = n(0),
    o = n(25),
    i = n(4),
    s = n(79),
    a = "[" + s + "]",
    u = RegExp("^" + a + a + "*"),
    c = RegExp(a + a + "*$"),
    l = function(t, e, n) {
      var o = {},
        a = i(function() {
          return !!s[t]() || "​" != "​" [t]()
        }),
        u = o[t] = a ? e(f) : s[t];
      n && (o[n] = u), r(r.P + r.F * a, "String", o)
    },
    f = l.trim = function(t, e) {
      return t = String(o(t)), 1 & e && (t = t.replace(u, "")), 2 & e && (t = t.replace(c, "")), t
    };
  t.exports = l
}, function(t, e, n) {
  var r = n(35),
    o = n(5)("toStringTag"),
    i = "Arguments" == r(function() {
      return arguments
    }());
  t.exports = function(t) {
    var e, n, s;
    return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
      try {
        return t[e]
      } catch (t) {}
    }(e = Object(t), o)) ? n : i ? r(e) : "Object" == (s = r(e)) && "function" == typeof e.callee ? "Arguments" : s
  }
}, function(t, e) {
  e.f = {}.propertyIsEnumerable
}, function(t, e, n) {
  var r = n(3),
    o = n(17),
    i = n(5)("species");
  t.exports = function(t, e) {
    var n, s = r(t).constructor;
    return void 0 === s || null == (n = r(s)[i]) ? e : o(n)
  }
}, function(t, e, n) {
  var r = n(29),
    o = n(1),
    i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
  (t.exports = function(t, e) {
    return i[t] || (i[t] = void 0 !== e ? e : {})
  })("versions", []).push({
    version: r.version,
    mode: n(30) ? "pure" : "global",
    copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
  })
}, function(t, e, n) {
  var r = n(35);
  t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
    return "String" == r(t) ? t.split("") : Object(t)
  }
}, function(t, e, n) {
  var r = n(35);
  t.exports = Array.isArray || function(t) {
    return "Array" == r(t)
  }
}, function(t, e, n) {
  var r = n(5)("iterator"),
    o = !1;
  try {
    var i = [7][r]();
    i.return = function() {
      o = !0
    }, Array.from(i, function() {
      throw 2
    })
  } catch (t) {}
  t.exports = function(t, e) {
    if (!e && !o) return !1;
    var n = !1;
    try {
      var i = [7],
        s = i[r]();
      s.next = function() {
        return {
          done: n = !0
        }
      }, i[r] = function() {
        return s
      }, t(i)
    } catch (t) {}
    return n
  }
}, function(t, e, n) {
  var r = n(19),
    o = n(8),
    i = n(40);
  t.exports = function(t) {
    return function(e, n, s) {
      var a, u = r(e),
        c = o(u.length),
        l = i(s, c);
      if (t && n != n) {
        for (; c > l;)
          if ((a = u[l++]) != a) return !0
      } else
        for (; c > l; l++)
          if ((t || l in u) && u[l] === n) return t || l || 0;
      return !t && -1
    }
  }
}, function(t, e, n) {
  var r = n(21),
    o = n(94),
    i = n(68),
    s = n(3),
    a = n(8),
    u = n(70),
    c = {},
    l = {};
  (e = t.exports = function(t, e, n, f, h) {
    var p, d, y, v, m = h ? function() {
        return t
      } : u(t),
      b = r(n, f, e ? 2 : 1),
      g = 0;
    if ("function" != typeof m) throw TypeError(t + " is not iterable!");
    if (i(m)) {
      for (p = a(t.length); p > g; g++)
        if ((v = e ? b(s(d = t[g])[0], d[1]) : b(t[g])) === c || v === l) return v
    } else
      for (y = m.call(t); !(d = y.next()).done;)
        if ((v = o(y, b, d.value, e)) === c || v === l) return v
  }).BREAK = c, e.RETURN = l
}, function(t, e, n) {
  "use strict";
  var r = n(1),
    o = n(0),
    i = n(12),
    s = n(44),
    a = n(31),
    u = n(55),
    c = n(45),
    l = n(2),
    f = n(4),
    h = n(53),
    p = n(42),
    d = n(75);
  t.exports = function(t, e, n, y, v, m) {
    var b = r[t],
      g = b,
      _ = v ? "set" : "add",
      w = g && g.prototype,
      S = {},
      E = function(t) {
        var e = w[t];
        i(w, t, "delete" == t ? function(t) {
          return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "has" == t ? function(t) {
          return !(m && !l(t)) && e.call(this, 0 === t ? 0 : t)
        } : "get" == t ? function(t) {
          return m && !l(t) ? void 0 : e.call(this, 0 === t ? 0 : t)
        } : "add" == t ? function(t) {
          return e.call(this, 0 === t ? 0 : t), this
        } : function(t, n) {
          return e.call(this, 0 === t ? 0 : t, n), this
        })
      };
    if ("function" == typeof g && (m || w.forEach && !f(function() {
        (new g).entries().next()
      }))) {
      var x = new g,
        O = x[_](m ? {} : -0, 1) != x,
        T = f(function() {
          x.has(1)
        }),
        C = h(function(t) {
          new g(t)
        }),
        N = !m && f(function() {
          for (var t = new g, e = 5; e--;) t[_](e, e);
          return !t.has(-0)
        });
      C || ((g = e(function(e, n) {
        c(e, g, t);
        var r = d(new b, e, g);
        return null != n && u(n, v, r[_], r), r
      })).prototype = w, w.constructor = g), (T || N) && (E("delete"), E("has"), v && E("get")), (N || O) && E(_), m && w.clear && delete w.clear
    } else g = y.getConstructor(e, t, v, _), s(g.prototype, n), a.NEED = !0;
    return p(g, t), S[t] = g, o(o.G + o.W + o.F * (g != b), S), m || y.setStrong(g, t, v), g
  }
}, function(t, e) {
  e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
  "use strict";
  t.exports = n(30) || !n(4)(function() {
    var t = Math.random();
    __defineSetter__.call(null, t, function() {}), delete n(1)[t]
  })
}, function(t, e, n) {
  var r = n(1).navigator;
  t.exports = r && r.userAgent || ""
}, function(t, e, n) {
  "use strict";
  var r = n(3);
  t.exports = function() {
    var t = r(this),
      e = "";
    return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
  }
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(47),
    i = RegExp.prototype.exec;
  t.exports = function(t, e) {
    var n = t.exec;
    if ("function" == typeof n) {
      var s = n.call(t, e);
      if ("object" !== r(s)) throw new TypeError("RegExp exec method returned something other than an Object or null");
      return s
    }
    if ("RegExp" !== o(t)) throw new TypeError("RegExp#exec called on incompatible receiver");
    return i.call(t, e)
  }
}, function(t, e, n) {
  "use strict";
  n(230);
  var r = n(12),
    o = n(15),
    i = n(4),
    s = n(25),
    a = n(5),
    u = n(84),
    c = a("species"),
    l = !i(function() {
      var t = /./;
      return t.exec = function() {
        var t = [];
        return t.groups = {
          a: "7"
        }, t
      }, "7" !== "".replace(t, "$<a>")
    }),
    f = function() {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function() {
        return e.apply(this, arguments)
      };
      var n = "ab".split(t);
      return 2 === n.length && "a" === n[0] && "b" === n[1]
    }();
  t.exports = function(t, e, n) {
    var h = a(t),
      p = !i(function() {
        var e = {};
        return e[h] = function() {
          return 7
        }, 7 != "" [t](e)
      }),
      d = p ? !i(function() {
        var e = !1,
          n = /a/;
        return n.exec = function() {
          return e = !0, null
        }, "split" === t && (n.constructor = {}, n.constructor[c] = function() {
          return n
        }), n[h](""), !e
      }) : void 0;
    if (!p || !d || "replace" === t && !l || "split" === t && !f) {
      var y = /./ [h],
        v = n(s, h, "" [t], function(t, e, n, r, o) {
          return e.exec === u ? p && !o ? {
            done: !0,
            value: y.call(e, n, r)
          } : {
            done: !0,
            value: t.call(n, e, r)
          } : {
            done: !1
          }
        }),
        m = v[0],
        b = v[1];
      r(String.prototype, t, m), o(RegExp.prototype, h, 2 == e ? function(t, e) {
        return b.call(t, this, e)
      } : function(t) {
        return b.call(t, this)
      })
    }
  }
}, function(t, e, n) {
  for (var r, o = n(1), i = n(15), s = n(33), a = s("typed_array"), u = s("view"), c = !(!o.ArrayBuffer || !o.DataView), l = c, f = 0, h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); f < 9;)(r = o[h[f++]]) ? (i(r.prototype, a, !0), i(r.prototype, u, !0)) : l = !1;
  t.exports = {
    ABV: c,
    CONSTR: l,
    TYPED: a,
    VIEW: u
  }
}, function(t, e, n) {
  "use strict";
  (function(t) {
    var n = function() {
        if ("undefined" != typeof Map) return Map;

        function t(t, e) {
          var n = -1;
          return t.some(function(t, r) {
            return t[0] === e && (n = r, !0)
          }), n
        }
        return function() {
          function e() {
            this.__entries__ = []
          }
          return Object.defineProperty(e.prototype, "size", {
            get: function() {
              return this.__entries__.length
            },
            enumerable: !0,
            configurable: !0
          }), e.prototype.get = function(e) {
            var n = t(this.__entries__, e),
              r = this.__entries__[n];
            return r && r[1]
          }, e.prototype.set = function(e, n) {
            var r = t(this.__entries__, e);
            ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
          }, e.prototype.delete = function(e) {
            var n = this.__entries__,
              r = t(n, e);
            ~r && n.splice(r, 1)
          }, e.prototype.has = function(e) {
            return !!~t(this.__entries__, e)
          }, e.prototype.clear = function() {
            this.__entries__.splice(0)
          }, e.prototype.forEach = function(t, e) {
            void 0 === e && (e = null);
            for (var n = 0, r = this.__entries__; n < r.length; n++) {
              var o = r[n];
              t.call(e, o[1], o[0])
            }
          }, e
        }()
      }(),
      r = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
      o = void 0 !== t && t.Math === Math ? t : "undefined" != typeof self && self.Math === Math ? self : "undefined" != typeof window && window.Math === Math ? window : Function("return this")(),
      i = "function" == typeof requestAnimationFrame ? requestAnimationFrame.bind(o) : function(t) {
        return setTimeout(function() {
          return t(Date.now())
        }, 1e3 / 60)
      },
      s = 2;
    var a = 20,
      u = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
      c = "undefined" != typeof MutationObserver,
      l = function() {
        function t() {
          this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(t, e) {
            var n = !1,
              r = !1,
              o = 0;

            function a() {
              n && (n = !1, t()), r && c()
            }

            function u() {
              i(a)
            }

            function c() {
              var t = Date.now();
              if (n) {
                if (t - o < s) return;
                r = !0
              } else n = !0, r = !1, setTimeout(u, e);
              o = t
            }
            return c
          }(this.refresh.bind(this), a)
        }
        return t.prototype.addObserver = function(t) {
          ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, t.prototype.removeObserver = function(t) {
          var e = this.observers_,
            n = e.indexOf(t);
          ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
        }, t.prototype.refresh = function() {
          this.updateObservers_() && this.refresh()
        }, t.prototype.updateObservers_ = function() {
          var t = this.observers_.filter(function(t) {
            return t.gatherActive(), t.hasActive()
          });
          return t.forEach(function(t) {
            return t.broadcastActive()
          }), t.length > 0
        }, t.prototype.connect_ = function() {
          r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, t.prototype.disconnect_ = function() {
          r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, t.prototype.onTransitionEnd_ = function(t) {
          var e = t.propertyName,
            n = void 0 === e ? "" : e;
          u.some(function(t) {
            return !!~n.indexOf(t)
          }) && this.refresh()
        }, t.getInstance = function() {
          return this.instance_ || (this.instance_ = new t), this.instance_
        }, t.instance_ = null, t
      }(),
      f = function(t, e) {
        for (var n = 0, r = Object.keys(e); n < r.length; n++) {
          var o = r[n];
          Object.defineProperty(t, o, {
            value: e[o],
            enumerable: !1,
            writable: !1,
            configurable: !0
          })
        }
        return t
      },
      h = function(t) {
        return t && t.ownerDocument && t.ownerDocument.defaultView || o
      },
      p = g(0, 0, 0, 0);

    function d(t) {
      return parseFloat(t) || 0
    }

    function y(t) {
      for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
      return e.reduce(function(e, n) {
        return e + d(t["border-" + n + "-width"])
      }, 0)
    }

    function v(t) {
      var e = t.clientWidth,
        n = t.clientHeight;
      if (!e && !n) return p;
      var r = h(t).getComputedStyle(t),
        o = function(t) {
          for (var e = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
            var o = r[n],
              i = t["padding-" + o];
            e[o] = d(i)
          }
          return e
        }(r),
        i = o.left + o.right,
        s = o.top + o.bottom,
        a = d(r.width),
        u = d(r.height);
      if ("border-box" === r.boxSizing && (Math.round(a + i) !== e && (a -= y(r, "left", "right") + i), Math.round(u + s) !== n && (u -= y(r, "top", "bottom") + s)), ! function(t) {
          return t === h(t).document.documentElement
        }(t)) {
        var c = Math.round(a + i) - e,
          l = Math.round(u + s) - n;
        1 !== Math.abs(c) && (a -= c), 1 !== Math.abs(l) && (u -= l)
      }
      return g(o.left, o.top, a, u)
    }
    var m = "undefined" != typeof SVGGraphicsElement ? function(t) {
      return t instanceof h(t).SVGGraphicsElement
    } : function(t) {
      return t instanceof h(t).SVGElement && "function" == typeof t.getBBox
    };

    function b(t) {
      return r ? m(t) ? function(t) {
        var e = t.getBBox();
        return g(0, 0, e.width, e.height)
      }(t) : v(t) : p
    }

    function g(t, e, n, r) {
      return {
        x: t,
        y: e,
        width: n,
        height: r
      }
    }
    var _ = function() {
        function t(t) {
          this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g(0, 0, 0, 0), this.target = t
        }
        return t.prototype.isActive = function() {
          var t = b(this.target);
          return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, t.prototype.broadcastRect = function() {
          var t = this.contentRect_;
          return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        }, t
      }(),
      w = function(t, e) {
        var n, r, o, i, s, a, u, c = (r = (n = e).x, o = n.y, i = n.width, s = n.height, a = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object, u = Object.create(a.prototype), f(u, {
          x: r,
          y: o,
          width: i,
          height: s,
          top: o,
          right: r + i,
          bottom: s + o,
          left: r
        }), u);
        f(this, {
          target: t,
          contentRect: c
        })
      },
      S = function() {
        function t(t, e, r) {
          if (this.activeObservations_ = [], this.observations_ = new n, "function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
          this.callback_ = t, this.controller_ = e, this.callbackCtx_ = r
        }
        return t.prototype.observe = function(t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) || (e.set(t, new _(t)), this.controller_.addObserver(this), this.controller_.refresh())
          }
        }, t.prototype.unobserve = function(t) {
          if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
          if ("undefined" != typeof Element && Element instanceof Object) {
            if (!(t instanceof h(t).Element)) throw new TypeError('parameter 1 is not of type "Element".');
            var e = this.observations_;
            e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
          }
        }, t.prototype.disconnect = function() {
          this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, t.prototype.gatherActive = function() {
          var t = this;
          this.clearActive(), this.observations_.forEach(function(e) {
            e.isActive() && t.activeObservations_.push(e)
          })
        }, t.prototype.broadcastActive = function() {
          if (this.hasActive()) {
            var t = this.callbackCtx_,
              e = this.activeObservations_.map(function(t) {
                return new w(t.target, t.broadcastRect())
              });
            this.callback_.call(t, e, t), this.clearActive()
          }
        }, t.prototype.clearActive = function() {
          this.activeObservations_.splice(0)
        }, t.prototype.hasActive = function() {
          return this.activeObservations_.length > 0
        }, t
      }(),
      E = "undefined" != typeof WeakMap ? new WeakMap : new n,
      x = function t(e) {
        if (!(this instanceof t)) throw new TypeError("Cannot call a class as a function.");
        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
        var n = l.getInstance(),
          r = new S(e, n, this);
        E.set(this, r)
      };
    ["observe", "unobserve", "disconnect"].forEach(function(t) {
      x.prototype[t] = function() {
        var e;
        return (e = E.get(this))[t].apply(e, arguments)
      }
    });
    var O = void 0 !== o.ResizeObserver ? o.ResizeObserver : x;
    e.a = O
  }).call(this, n(88))
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(293),
    i = n(296),
    s = [].slice,
    a = ["keyword", "gray", "hex"],
    u = {};
  Object.keys(i).forEach(function(t) {
    u[s.call(i[t].labels).sort().join("")] = t
  });
  var c = {};

  function l(t, e) {
    if (!(this instanceof l)) return new l(t, e);
    if (e && e in a && (e = null), e && !(e in i)) throw new Error("Unknown model: " + e);
    var n, r;
    if (null == t) this.model = "rgb", this.color = [0, 0, 0], this.valpha = 1;
    else if (t instanceof l) this.model = t.model, this.color = t.color.slice(), this.valpha = t.valpha;
    else if ("string" == typeof t) {
      var f = o.get(t);
      if (null === f) throw new Error("Unable to parse color from string: " + t);
      this.model = f.model, r = i[this.model].channels, this.color = f.value.slice(0, r), this.valpha = "number" == typeof f.value[r] ? f.value[r] : 1
    } else if (t.length) {
      this.model = e || "rgb", r = i[this.model].channels;
      var h = s.call(t, 0, r);
      this.color = d(h, r), this.valpha = "number" == typeof t[r] ? t[r] : 1
    } else if ("number" == typeof t) t &= 16777215, this.model = "rgb", this.color = [t >> 16 & 255, t >> 8 & 255, 255 & t], this.valpha = 1;
    else {
      this.valpha = 1;
      var p = Object.keys(t);
      "alpha" in t && (p.splice(p.indexOf("alpha"), 1), this.valpha = "number" == typeof t.alpha ? t.alpha : 0);
      var y = p.sort().join("");
      if (!(y in u)) throw new Error("Unable to parse color from object: " + JSON.stringify(t));
      this.model = u[y];
      var v = i[this.model].labels,
        m = [];
      for (n = 0; n < v.length; n++) m.push(t[v[n]]);
      this.color = d(m)
    }
    if (c[this.model])
      for (r = i[this.model].channels, n = 0; n < r; n++) {
        var b = c[this.model][n];
        b && (this.color[n] = b(this.color[n]))
      }
    this.valpha = Math.max(0, Math.min(1, this.valpha)), Object.freeze && Object.freeze(this)
  }

  function f(t, e, n) {
    return (t = Array.isArray(t) ? t : [t]).forEach(function(t) {
        (c[t] || (c[t] = []))[e] = n
      }), t = t[0],
      function(r) {
        var o;
        return arguments.length ? (n && (r = n(r)), (o = this[t]()).color[e] = r, o) : (o = this[t]().color[e], n && (o = n(o)), o)
      }
  }

  function h(t) {
    return function(e) {
      return Math.max(0, Math.min(t, e))
    }
  }

  function p(t) {
    return Array.isArray(t) ? t : [t]
  }

  function d(t, e) {
    for (var n = 0; n < e; n++) "number" != typeof t[n] && (t[n] = 0);
    return t
  }
  l.prototype = {
    toString: function() {
      return this.string()
    },
    toJSON: function() {
      return this[this.model]()
    },
    string: function(t) {
      var e = this.model in o.to ? this : this.rgb(),
        n = 1 === (e = e.round("number" == typeof t ? t : 1)).valpha ? e.color : e.color.concat(this.valpha);
      return o.to[e.model](n)
    },
    percentString: function(t) {
      var e = this.rgb().round("number" == typeof t ? t : 1),
        n = 1 === e.valpha ? e.color : e.color.concat(this.valpha);
      return o.to.rgb.percent(n)
    },
    array: function() {
      return 1 === this.valpha ? this.color.slice() : this.color.concat(this.valpha)
    },
    object: function() {
      for (var t = {}, e = i[this.model].channels, n = i[this.model].labels, r = 0; r < e; r++) t[n[r]] = this.color[r];
      return 1 !== this.valpha && (t.alpha = this.valpha), t
    },
    unitArray: function() {
      var t = this.rgb().color;
      return t[0] /= 255, t[1] /= 255, t[2] /= 255, 1 !== this.valpha && t.push(this.valpha), t
    },
    unitObject: function() {
      var t = this.rgb().object();
      return t.r /= 255, t.g /= 255, t.b /= 255, 1 !== this.valpha && (t.alpha = this.valpha), t
    },
    round: function(t) {
      return t = Math.max(t || 0, 0), new l(this.color.map(function(t) {
        return function(e) {
          return function(t, e) {
            return Number(t.toFixed(e))
          }(e, t)
        }
      }(t)).concat(this.valpha), this.model)
    },
    alpha: function(t) {
      return arguments.length ? new l(this.color.concat(Math.max(0, Math.min(1, t))), this.model) : this.valpha
    },
    red: f("rgb", 0, h(255)),
    green: f("rgb", 1, h(255)),
    blue: f("rgb", 2, h(255)),
    hue: f(["hsl", "hsv", "hsl", "hwb", "hcg"], 0, function(t) {
      return (t % 360 + 360) % 360
    }),
    saturationl: f("hsl", 1, h(100)),
    lightness: f("hsl", 2, h(100)),
    saturationv: f("hsv", 1, h(100)),
    value: f("hsv", 2, h(100)),
    chroma: f("hcg", 1, h(100)),
    gray: f("hcg", 2, h(100)),
    white: f("hwb", 1, h(100)),
    wblack: f("hwb", 2, h(100)),
    cyan: f("cmyk", 0, h(100)),
    magenta: f("cmyk", 1, h(100)),
    yellow: f("cmyk", 2, h(100)),
    black: f("cmyk", 3, h(100)),
    x: f("xyz", 0, h(100)),
    y: f("xyz", 1, h(100)),
    z: f("xyz", 2, h(100)),
    l: f("lab", 0, h(100)),
    a: f("lab", 1),
    b: f("lab", 2),
    keyword: function(t) {
      return arguments.length ? new l(t) : i[this.model].keyword(this.color)
    },
    hex: function(t) {
      return arguments.length ? new l(t) : o.to.hex(this.rgb().round().color)
    },
    rgbNumber: function() {
      var t = this.rgb().color;
      return (255 & t[0]) << 16 | (255 & t[1]) << 8 | 255 & t[2]
    },
    luminosity: function() {
      for (var t = this.rgb().color, e = [], n = 0; n < t.length; n++) {
        var r = t[n] / 255;
        e[n] = r <= .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)
      }
      return .2126 * e[0] + .7152 * e[1] + .0722 * e[2]
    },
    contrast: function(t) {
      var e = this.luminosity(),
        n = t.luminosity();
      return e > n ? (e + .05) / (n + .05) : (n + .05) / (e + .05)
    },
    level: function(t) {
      var e = this.contrast(t);
      return e >= 7.1 ? "AAA" : e >= 4.5 ? "AA" : ""
    },
    isDark: function() {
      var t = this.rgb().color;
      return (299 * t[0] + 587 * t[1] + 114 * t[2]) / 1e3 < 128
    },
    isLight: function() {
      return !this.isDark()
    },
    negate: function() {
      for (var t = this.rgb(), e = 0; e < 3; e++) t.color[e] = 255 - t.color[e];
      return t
    },
    lighten: function(t) {
      var e = this.hsl();
      return e.color[2] += e.color[2] * t, e
    },
    darken: function(t) {
      var e = this.hsl();
      return e.color[2] -= e.color[2] * t, e
    },
    saturate: function(t) {
      var e = this.hsl();
      return e.color[1] += e.color[1] * t, e
    },
    desaturate: function(t) {
      var e = this.hsl();
      return e.color[1] -= e.color[1] * t, e
    },
    whiten: function(t) {
      var e = this.hwb();
      return e.color[1] += e.color[1] * t, e
    },
    blacken: function(t) {
      var e = this.hwb();
      return e.color[2] += e.color[2] * t, e
    },
    grayscale: function() {
      var t = this.rgb().color,
        e = .3 * t[0] + .59 * t[1] + .11 * t[2];
      return l.rgb(e, e, e)
    },
    fade: function(t) {
      return this.alpha(this.valpha - this.valpha * t)
    },
    opaquer: function(t) {
      return this.alpha(this.valpha + this.valpha * t)
    },
    rotate: function(t) {
      var e = this.hsl(),
        n = e.color[0];
      return n = (n = (n + t) % 360) < 0 ? 360 + n : n, e.color[0] = n, e
    },
    mix: function(t, e) {
      if (!t || !t.rgb) throw new Error('Argument to "mix" was not a Color instance, but rather an instance of ' + r(t));
      var n = t.rgb(),
        o = this.rgb(),
        i = void 0 === e ? .5 : e,
        s = 2 * i - 1,
        a = n.alpha() - o.alpha(),
        u = ((s * a == -1 ? s : (s + a) / (1 + s * a)) + 1) / 2,
        c = 1 - u;
      return l.rgb(u * n.red() + c * o.red(), u * n.green() + c * o.green(), u * n.blue() + c * o.blue(), n.alpha() * i + o.alpha() * (1 - i))
    }
  }, Object.keys(i).forEach(function(t) {
    if (-1 === a.indexOf(t)) {
      var e = i[t].channels;
      l.prototype[t] = function() {
        if (this.model === t) return new l(this);
        if (arguments.length) return new l(arguments, t);
        var n = "number" == typeof arguments[e] ? e : this.valpha;
        return new l(p(i[this.model][t].raw(this.color)).concat(n), t)
      }, l[t] = function(n) {
        return "number" == typeof n && (n = d(s.call(arguments), e)), new l(n, t)
      }
    }
  }), t.exports = l
}, function(t, e, n) {
  var r = n(2),
    o = n(1).document,
    i = r(o) && r(o.createElement);
  t.exports = function(t) {
    return i ? o.createElement(t) : {}
  }
}, function(t, e, n) {
  "use strict";
  var r = n(9),
    o = n(40),
    i = n(8);
  t.exports = function(t) {
    for (var e = r(this), n = i(e.length), s = arguments.length, a = o(s > 1 ? arguments[1] : void 0, n), u = s > 2 ? arguments[2] : void 0, c = void 0 === u ? n : o(u, n); c > a;) e[a++] = t;
    return e
  }
}, function(t, e, n) {
  var r = n(41),
    o = n(5)("iterator"),
    i = Array.prototype;
  t.exports = function(t) {
    return void 0 !== t && (r.Array === t || i[o] === t)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(7),
    o = n(32);
  t.exports = function(t, e, n) {
    e in t ? r.f(t, e, o(0, n)) : t[e] = n
  }
}, function(t, e, n) {
  var r = n(47),
    o = n(5)("iterator"),
    i = n(41);
  t.exports = n(29).getIteratorMethod = function(t) {
    if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
  }
}, function(t, e, n) {
  "use strict";
  var r = n(34),
    o = n(95),
    i = n(41),
    s = n(19);
  t.exports = n(72)(Array, "Array", function(t, e) {
    this._t = s(t), this._i = 0, this._k = e
  }, function() {
    var t = this._t,
      e = this._k,
      n = this._i++;
    return !t || n >= t.length ? (this._t = void 0, o(1)) : o(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
  }, "values"), i.Arguments = i.Array, r("keys"), r("values"), r("entries")
}, function(t, e, n) {
  "use strict";
  var r = n(30),
    o = n(0),
    i = n(12),
    s = n(15),
    a = n(41),
    u = n(137),
    c = n(42),
    l = n(27),
    f = n(5)("iterator"),
    h = !([].keys && "next" in [].keys()),
    p = function() {
      return this
    };
  t.exports = function(t, e, n, d, y, v, m) {
    u(n, e, d);
    var b, g, _, w = function(t) {
        if (!h && t in O) return O[t];
        switch (t) {
          case "keys":
          case "values":
            return function() {
              return new n(this, t)
            }
        }
        return function() {
          return new n(this, t)
        }
      },
      S = e + " Iterator",
      E = "values" == y,
      x = !1,
      O = t.prototype,
      T = O[f] || O["@@iterator"] || y && O[y],
      C = T || w(y),
      N = y ? E ? w("entries") : C : void 0,
      k = "Array" == e && O.entries || T;
    if (k && (_ = l(k.call(new t))) !== Object.prototype && _.next && (c(_, S, !0), r || "function" == typeof _[f] || s(_, f, p)), E && T && "values" !== T.name && (x = !0, C = function() {
        return T.call(this)
      }), r && !m || !h && !x && O[f] || s(O, f, C), a[e] = C, a[S] = p, y)
      if (b = {
          values: E ? C : w("values"),
          keys: v ? C : w("keys"),
          entries: N
        }, m)
        for (g in b) g in O || i(O, g, b[g]);
      else o(o.P + o.F * (h || x), e, b);
    return b
  }
}, function(t, e, n) {
  var r = n(50)("keys"),
    o = n(33);
  t.exports = function(t) {
    return r[t] || (r[t] = o(t))
  }
}, function(t, e) {
  t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(t, e, n) {
  var r = n(2),
    o = n(76).set;
  t.exports = function(t, e, n) {
    var i, s = e.constructor;
    return s !== n && "function" == typeof s && (i = s.prototype) !== n.prototype && r(i) && o && o(t, i), t
  }
}, function(t, e, n) {
  var r = n(2),
    o = n(3),
    i = function(t, e) {
      if (o(t), !r(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
    };
  t.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, r) {
      try {
        (r = n(21)(Function.call, n(18).f(Object.prototype, "__proto__").set, 2))(t, []), e = !(t instanceof Array)
      } catch (t) {
        e = !0
      }
      return function(t, n) {
        return i(t, n), e ? t.__proto__ = n : r(t, n), t
      }
    }({}, !1) : void 0),
    check: i
  }
}, function(t, e) {
  t.exports = Math.sign || function(t) {
    return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
  }
}, function(t, e) {
  var n = Math.expm1;
  t.exports = !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17) ? function(t) {
    return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
  } : n
}, function(t, e) {
  t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
}, function(t, e, n) {
  var r, o, i, s = n(21),
    a = n(101),
    u = n(98),
    c = n(66),
    l = n(1),
    f = l.process,
    h = l.setImmediate,
    p = l.clearImmediate,
    d = l.MessageChannel,
    y = l.Dispatch,
    v = 0,
    m = {},
    b = function() {
      var t = +this;
      if (m.hasOwnProperty(t)) {
        var e = m[t];
        delete m[t], e()
      }
    },
    g = function(t) {
      b.call(t.data)
    };
  h && p || (h = function(t) {
    for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
    return m[++v] = function() {
      a("function" == typeof t ? t : Function(t), e)
    }, r(v), v
  }, p = function(t) {
    delete m[t]
  }, "process" == n(35)(f) ? r = function(t) {
    f.nextTick(s(b, t, 1))
  } : y && y.now ? r = function(t) {
    y.now(s(b, t, 1))
  } : d ? (i = (o = new d).port2, o.port1.onmessage = g, r = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (r = function(t) {
    l.postMessage(t + "", "*")
  }, l.addEventListener("message", g, !1)) : r = "onreadystatechange" in c("script") ? function(t) {
    u.appendChild(c("script")).onreadystatechange = function() {
      u.removeChild(this), b.call(t)
    }
  } : function(t) {
    setTimeout(s(b, t, 1), 0)
  }), t.exports = {
    set: h,
    clear: p
  }
}, function(t, e, n) {
  var r = n(2),
    o = n(35),
    i = n(5)("match");
  t.exports = function(t) {
    var e;
    return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
  }
}, function(t, e, n) {
  "use strict";
  var r = n(83)(!0);
  t.exports = function(t, e, n) {
    return e + (n ? r(t, e).length : 1)
  }
}, function(t, e, n) {
  var r = n(26),
    o = n(25);
  t.exports = function(t) {
    return function(e, n) {
      var i, s, a = String(o(e)),
        u = r(n),
        c = a.length;
      return u < 0 || u >= c ? t ? "" : void 0 : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? t ? a.charAt(u) : i : t ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
    }
  }
}, function(t, e, n) {
  "use strict";
  var r, o, i = n(60),
    s = RegExp.prototype.exec,
    a = String.prototype.replace,
    u = s,
    c = (r = /a/, o = /b*/g, s.call(r, "a"), s.call(o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
    l = void 0 !== /()??/.exec("")[1];
  (c || l) && (u = function(t) {
    var e, n, r, o, u = this;
    return l && (n = new RegExp("^" + u.source + "$(?!\\s)", i.call(u))), c && (e = u.lastIndex), r = s.call(u, t), c && r && (u.lastIndex = u.global ? r.index + r[0].length : e), l && r && r.length > 1 && a.call(r[0], n, function() {
      for (o = 1; o < arguments.length - 2; o++) void 0 === arguments[o] && (r[o] = void 0)
    }), r
  }), t.exports = u
}, function(t, e, n) {
  var r = n(81),
    o = n(25);
  t.exports = function(t, e, n) {
    if (r(e)) throw TypeError("String#" + n + " doesn't accept regex!");
    return String(o(t))
  }
}, function(t, e, n) {
  var r = n(5)("match");
  t.exports = function(t) {
    var e = /./;
    try {
      "/./" [t](e)
    } catch (n) {
      try {
        return e[r] = !1, !"/./" [t](e)
      } catch (t) {}
    }
    return !0
  }
}, function(t, e, n) {
  "use strict";
  var r = n(1),
    o = n(6),
    i = n(30),
    s = n(63),
    a = n(15),
    u = n(44),
    c = n(4),
    l = n(45),
    f = n(26),
    h = n(8),
    p = n(117),
    d = n(39).f,
    y = n(7).f,
    v = n(67),
    m = n(42),
    b = "prototype",
    g = "Wrong index!",
    _ = r.ArrayBuffer,
    w = r.DataView,
    S = r.Math,
    E = r.RangeError,
    x = r.Infinity,
    O = _,
    T = S.abs,
    C = S.pow,
    N = S.floor,
    k = S.log,
    A = S.LN2,
    M = o ? "_b" : "buffer",
    j = o ? "_l" : "byteLength",
    P = o ? "_o" : "byteOffset";

  function R(t, e, n) {
    var r, o, i, s = new Array(n),
      a = 8 * n - e - 1,
      u = (1 << a) - 1,
      c = u >> 1,
      l = 23 === e ? C(2, -24) - C(2, -77) : 0,
      f = 0,
      h = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
    for ((t = T(t)) != t || t === x ? (o = t != t ? 1 : 0, r = u) : (r = N(k(t) / A), t * (i = C(2, -r)) < 1 && (r--, i *= 2), (t += r + c >= 1 ? l / i : l * C(2, 1 - c)) * i >= 2 && (r++, i /= 2), r + c >= u ? (o = 0, r = u) : r + c >= 1 ? (o = (t * i - 1) * C(2, e), r += c) : (o = t * C(2, c - 1) * C(2, e), r = 0)); e >= 8; s[f++] = 255 & o, o /= 256, e -= 8);
    for (r = r << e | o, a += e; a > 0; s[f++] = 255 & r, r /= 256, a -= 8);
    return s[--f] |= 128 * h, s
  }

  function I(t, e, n) {
    var r, o = 8 * n - e - 1,
      i = (1 << o) - 1,
      s = i >> 1,
      a = o - 7,
      u = n - 1,
      c = t[u--],
      l = 127 & c;
    for (c >>= 7; a > 0; l = 256 * l + t[u], u--, a -= 8);
    for (r = l & (1 << -a) - 1, l >>= -a, a += e; a > 0; r = 256 * r + t[u], u--, a -= 8);
    if (0 === l) l = 1 - s;
    else {
      if (l === i) return r ? NaN : c ? -x : x;
      r += C(2, e), l -= s
    }
    return (c ? -1 : 1) * r * C(2, l - e)
  }

  function L(t) {
    return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
  }

  function D(t) {
    return [255 & t]
  }

  function F(t) {
    return [255 & t, t >> 8 & 255]
  }

  function H(t) {
    return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
  }

  function q(t) {
    return R(t, 52, 8)
  }

  function B(t) {
    return R(t, 23, 4)
  }

  function U(t, e, n) {
    y(t[b], e, {
      get: function() {
        return this[n]
      }
    })
  }

  function z(t, e, n, r) {
    var o = p(+n);
    if (o + e > t[j]) throw E(g);
    var i = t[M]._b,
      s = o + t[P],
      a = i.slice(s, s + e);
    return r ? a : a.reverse()
  }

  function W(t, e, n, r, o, i) {
    var s = p(+n);
    if (s + e > t[j]) throw E(g);
    for (var a = t[M]._b, u = s + t[P], c = r(+o), l = 0; l < e; l++) a[u + l] = c[i ? l : e - l - 1]
  }
  if (s.ABV) {
    if (!c(function() {
        _(1)
      }) || !c(function() {
        new _(-1)
      }) || c(function() {
        return new _, new _(1.5), new _(NaN), "ArrayBuffer" != _.name
      })) {
      for (var V, X = (_ = function(t) {
          return l(this, _), new O(p(t))
        })[b] = O[b], $ = d(O), G = 0; $.length > G;)(V = $[G++]) in _ || a(_, V, O[V]);
      i || (X.constructor = _)
    }
    var Y = new w(new _(2)),
      K = w[b].setInt8;
    Y.setInt8(0, 2147483648), Y.setInt8(1, 2147483649), !Y.getInt8(0) && Y.getInt8(1) || u(w[b], {
      setInt8: function(t, e) {
        K.call(this, t, e << 24 >> 24)
      },
      setUint8: function(t, e) {
        K.call(this, t, e << 24 >> 24)
      }
    }, !0)
  } else _ = function(t) {
    l(this, _, "ArrayBuffer");
    var e = p(t);
    this._b = v.call(new Array(e), 0), this[j] = e
  }, w = function(t, e, n) {
    l(this, w, "DataView"), l(t, _, "DataView");
    var r = t[j],
      o = f(e);
    if (o < 0 || o > r) throw E("Wrong offset!");
    if (o + (n = void 0 === n ? r - o : h(n)) > r) throw E("Wrong length!");
    this[M] = t, this[P] = o, this[j] = n
  }, o && (U(_, "byteLength", "_l"), U(w, "buffer", "_b"), U(w, "byteLength", "_l"), U(w, "byteOffset", "_o")), u(w[b], {
    getInt8: function(t) {
      return z(this, 1, t)[0] << 24 >> 24
    },
    getUint8: function(t) {
      return z(this, 1, t)[0]
    },
    getInt16: function(t) {
      var e = z(this, 2, t, arguments[1]);
      return (e[1] << 8 | e[0]) << 16 >> 16
    },
    getUint16: function(t) {
      var e = z(this, 2, t, arguments[1]);
      return e[1] << 8 | e[0]
    },
    getInt32: function(t) {
      return L(z(this, 4, t, arguments[1]))
    },
    getUint32: function(t) {
      return L(z(this, 4, t, arguments[1])) >>> 0
    },
    getFloat32: function(t) {
      return I(z(this, 4, t, arguments[1]), 23, 4)
    },
    getFloat64: function(t) {
      return I(z(this, 8, t, arguments[1]), 52, 8)
    },
    setInt8: function(t, e) {
      W(this, 1, t, D, e)
    },
    setUint8: function(t, e) {
      W(this, 1, t, D, e)
    },
    setInt16: function(t, e) {
      W(this, 2, t, F, e, arguments[2])
    },
    setUint16: function(t, e) {
      W(this, 2, t, F, e, arguments[2])
    },
    setInt32: function(t, e) {
      W(this, 4, t, H, e, arguments[2])
    },
    setUint32: function(t, e) {
      W(this, 4, t, H, e, arguments[2])
    },
    setFloat32: function(t, e) {
      W(this, 4, t, B, e, arguments[2])
    },
    setFloat64: function(t, e) {
      W(this, 8, t, q, e, arguments[2])
    }
  });
  m(_, "ArrayBuffer"), m(w, "DataView"), a(w[b], s.VIEW, !0), e.ArrayBuffer = _, e.DataView = w
}, function(t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var r;
  r = function() {
    return this
  }();
  try {
    r = r || new Function("return this")()
  } catch (t) {
    "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (r = window)
  }
  t.exports = r
}, function(t, e, n) {
  "use strict";
  var r;
  t.exports = ((r = document.createElement("div")).setAttribute("data-a-b", "c"), Boolean(r.dataset && "c" === r.dataset.aB) ? function(t) {
    return t.dataset
  } : function(t) {
    var e = {},
      n = t.attributes;

    function r() {
      return this.value
    }

    function o(t, e) {
      void 0 === e ? this.removeAttribute(t) : this.setAttribute(t, e)
    }
    for (var i = 0, s = n.length; i < s; i++) {
      var a = n[i];
      if (a) {
        var u = a.name;
        if (0 === u.indexOf("data-")) {
          var c = u.slice(5).replace(/-./g, function(t) {
              return t.charAt(1).toUpperCase()
            }),
            l = a.value;
          Object.defineProperty(e, c, {
            enumerable: !0,
            get: r.bind({
              value: l || ""
            }),
            set: o.bind(t, u)
          })
        }
      }
    }
    return e
  })
}, , function(t, e, n) {
  t.exports = !n(6) && !n(4)(function() {
    return 7 != Object.defineProperty(n(66)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(t, e, n) {
  "use strict";
  var r = n(9),
    o = n(40),
    i = n(8);
  t.exports = [].copyWithin || function(t, e) {
    var n = r(this),
      s = i(n.length),
      a = o(t, s),
      u = o(e, s),
      c = arguments.length > 2 ? arguments[2] : void 0,
      l = Math.min((void 0 === c ? s : o(c, s)) - u, s - a),
      f = 1;
    for (u < a && a < u + l && (f = -1, u += l - 1, a += l - 1); l-- > 0;) u in n ? n[a] = n[u] : delete n[a], a += f, u += f;
    return n
  }
}, function(t, e, n) {
  var r = n(125);
  t.exports = function(t, e) {
    return new(r(t))(e)
  }
}, function(t, e, n) {
  var r = n(3);
  t.exports = function(t, e, n, o) {
    try {
      return o ? e(r(n)[0], n[1]) : e(n)
    } catch (e) {
      var i = t.return;
      throw void 0 !== i && r(i.call(t)), e
    }
  }
}, function(t, e) {
  t.exports = function(t, e) {
    return {
      value: e,
      done: !!t
    }
  }
}, function(t, e, n) {
  var r = n(7),
    o = n(3),
    i = n(37);
  t.exports = n(6) ? Object.defineProperties : function(t, e) {
    o(t);
    for (var n, s = i(e), a = s.length, u = 0; a > u;) r.f(t, n = s[u++], e[n]);
    return t
  }
}, function(t, e, n) {
  var r = n(16),
    o = n(19),
    i = n(54)(!1),
    s = n(73)("IE_PROTO");
  t.exports = function(t, e) {
    var n, a = o(t),
      u = 0,
      c = [];
    for (n in a) n != s && r(a, n) && c.push(n);
    for (; e.length > u;) r(a, n = e[u++]) && (~i(c, n) || c.push(n));
    return c
  }
}, function(t, e, n) {
  var r = n(1).document;
  t.exports = r && r.documentElement
}, function(t, e, n) {
  var r = n(17),
    o = n(9),
    i = n(51),
    s = n(8);
  t.exports = function(t, e, n, a, u) {
    r(e);
    var c = o(t),
      l = i(c),
      f = s(c.length),
      h = u ? f - 1 : 0,
      p = u ? -1 : 1;
    if (n < 2)
      for (;;) {
        if (h in l) {
          a = l[h], h += p;
          break
        }
        if (h += p, u ? h < 0 : f <= h) throw TypeError("Reduce of empty array with no initial value")
      }
    for (; u ? h >= 0 : f > h; h += p) h in l && (a = e(a, l[h], h, c));
    return a
  }
}, function(t, e, n) {
  "use strict";
  var r = n(17),
    o = n(2),
    i = n(101),
    s = [].slice,
    a = {},
    u = function(t, e, n) {
      if (!(e in a)) {
        for (var r = [], o = 0; o < e; o++) r[o] = "a[" + o + "]";
        a[e] = Function("F,a", "return new F(" + r.join(",") + ")")
      }
      return a[e](t, n)
    };
  t.exports = Function.bind || function(t) {
    var e = r(this),
      n = s.call(arguments, 1),
      a = function r() {
        var o = n.concat(s.call(arguments));
        return this instanceof r ? u(e, o.length, o) : i(e, o, t)
      };
    return o(e.prototype) && (a.prototype = e.prototype), a
  }
}, function(t, e) {
  t.exports = function(t, e, n) {
    var r = void 0 === n;
    switch (e.length) {
      case 0:
        return r ? t() : t.call(n);
      case 1:
        return r ? t(e[0]) : t.call(n, e[0]);
      case 2:
        return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
      case 3:
        return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
      case 4:
        return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3])
    }
    return t.apply(n, e)
  }
}, function(t, e, n) {
  "use strict";
  var r = n(7).f,
    o = n(36),
    i = n(44),
    s = n(21),
    a = n(45),
    u = n(55),
    c = n(72),
    l = n(95),
    f = n(43),
    h = n(6),
    p = n(31).fastKey,
    d = n(38),
    y = h ? "_s" : "size",
    v = function(t, e) {
      var n, r = p(e);
      if ("F" !== r) return t._i[r];
      for (n = t._f; n; n = n.n)
        if (n.k == e) return n
    };
  t.exports = {
    getConstructor: function(t, e, n, c) {
      var l = t(function(t, r) {
        a(t, l, e, "_i"), t._t = e, t._i = o(null), t._f = void 0, t._l = void 0, t[y] = 0, null != r && u(r, n, t[c], t)
      });
      return i(l.prototype, {
        clear: function() {
          for (var t = d(this, e), n = t._i, r = t._f; r; r = r.n) r.r = !0, r.p && (r.p = r.p.n = void 0), delete n[r.i];
          t._f = t._l = void 0, t[y] = 0
        },
        delete: function(t) {
          var n = d(this, e),
            r = v(n, t);
          if (r) {
            var o = r.n,
              i = r.p;
            delete n._i[r.i], r.r = !0, i && (i.n = o), o && (o.p = i), n._f == r && (n._f = o), n._l == r && (n._l = i), n[y]--
          }
          return !!r
        },
        forEach: function(t) {
          d(this, e);
          for (var n, r = s(t, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
            for (r(n.v, n.k, this); n && n.r;) n = n.p
        },
        has: function(t) {
          return !!v(d(this, e), t)
        }
      }), h && r(l.prototype, "size", {
        get: function() {
          return d(this, e)[y]
        }
      }), l
    },
    def: function(t, e, n) {
      var r, o, i = v(t, e);
      return i ? i.v = n : (t._l = i = {
        i: o = p(e, !0),
        k: e,
        v: n,
        p: r = t._l,
        n: void 0,
        r: !1
      }, t._f || (t._f = i), r && (r.n = i), t[y]++, "F" !== o && (t._i[o] = i)), t
    },
    getEntry: v,
    setStrong: function(t, e, n) {
      c(t, e, function(t, n) {
        this._t = d(t, e), this._k = n, this._l = void 0
      }, function() {
        for (var t = this._k, e = this._l; e && e.r;) e = e.p;
        return this._t && (this._l = e = e ? e.n : this._t._f) ? l(0, "keys" == t ? e.k : "values" == t ? e.v : [e.k, e.v]) : (this._t = void 0, l(1))
      }, n ? "entries" : "values", !n, !0), f(e)
    }
  }
}, function(t, e) {
  t.exports = Math.log1p || function(t) {
    return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
  }
}, function(t, e, n) {
  var r = n(2),
    o = Math.floor;
  t.exports = function(t) {
    return !r(t) && isFinite(t) && o(t) === t
  }
}, function(t, e, n) {
  "use strict";
  var r = n(6),
    o = n(37),
    i = n(57),
    s = n(48),
    a = n(9),
    u = n(51),
    c = Object.assign;
  t.exports = !c || n(4)(function() {
    var t = {},
      e = {},
      n = Symbol(),
      r = "abcdefghijklmnopqrst";
    return t[n] = 7, r.split("").forEach(function(t) {
      e[t] = t
    }), 7 != c({}, t)[n] || Object.keys(c({}, e)).join("") != r
  }) ? function(t, e) {
    for (var n = a(t), c = arguments.length, l = 1, f = i.f, h = s.f; c > l;)
      for (var p, d = u(arguments[l++]), y = f ? o(d).concat(f(d)) : o(d), v = y.length, m = 0; v > m;) p = y[m++], r && !h.call(d, p) || (n[p] = d[p]);
    return n
  } : c
}, function(t, e, n) {
  var r = n(6),
    o = n(37),
    i = n(19),
    s = n(48).f;
  t.exports = function(t) {
    return function(e) {
      for (var n, a = i(e), u = o(a), c = u.length, l = 0, f = []; c > l;) n = u[l++], r && !s.call(a, n) || f.push(t ? [n, a[n]] : a[n]);
      return f
    }
  }
}, function(t, e, n) {
  var r = n(39),
    o = n(57),
    i = n(3),
    s = n(1).Reflect;
  t.exports = s && s.ownKeys || function(t) {
    var e = r.f(i(t)),
      n = o.f;
    return n ? e.concat(n(t)) : e
  }
}, function(t, e, n) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(19),
    i = n(39).f,
    s = {}.toString,
    a = "object" == ("undefined" == typeof window ? "undefined" : r(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  t.exports.f = function(t) {
    return a && "[object Window]" == s.call(t) ? function(t) {
      try {
        return i(t)
      } catch (t) {
        return a.slice()
      }
    }(t) : i(o(t))
  }
}, function(t, e) {
  t.exports = Object.is || function(t, e) {
    return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
  }
}, function(t, e, n) {
  "use strict";
  var r = n(17);

  function o(t) {
    var e, n;
    this.promise = new t(function(t, r) {
      if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
      e = t, n = r
    }), this.resolve = r(e), this.reject = r(n)
  }
  t.exports.f = function(t) {
    return new o(t)
  }
}, function(t, e, n) {
  var r = n(3),
    o = n(2),
    i = n(110);
  t.exports = function(t, e) {
    if (r(t), o(e) && e.constructor === t) return e;
    var n = i.f(t);
    return (0, n.resolve)(e), n.promise
  }
}, function(t, e, n) {
  n(6) && "g" != /./g.flags && n(7).f(RegExp.prototype, "flags", {
    configurable: !0,
    get: n(60)
  })
}, function(t, e, n) {
  e.f = n(5)
}, function(t, e, n) {
  var r = n(1),
    o = n(29),
    i = n(30),
    s = n(113),
    a = n(7).f;
  t.exports = function(t) {
    var e = o.Symbol || (o.Symbol = i ? {} : r.Symbol || {});
    "_" == t.charAt(0) || t in e || a(e, t, {
      value: s.f(t)
    })
  }
}, function(t, e, n) {
  var r = n(8),
    o = n(116),
    i = n(25);
  t.exports = function(t, e, n, s) {
    var a = String(i(t)),
      u = a.length,
      c = void 0 === n ? " " : String(n),
      l = r(e);
    if (l <= u || "" == c) return a;
    var f = l - u,
      h = o.call(c, Math.ceil(f / c.length));
    return h.length > f && (h = h.slice(0, f)), s ? h + a : a + h
  }
}, function(t, e, n) {
  "use strict";
  var r = n(26),
    o = n(25);
  t.exports = function(t) {
    var e = String(o(this)),
      n = "",
      i = r(t);
    if (i < 0 || i == 1 / 0) throw RangeError("Count can't be negative");
    for (; i > 0;
      (i >>>= 1) && (e += e)) 1 & i && (n += e);
    return n
  }
}, function(t, e, n) {
  var r = n(26),
    o = n(8);
  t.exports = function(t) {
    if (void 0 === t) return 0;
    var e = r(t),
      n = o(e);
    if (e !== n) throw RangeError("Wrong length!");
    return n
  }
}, function(t, e, n) {
  "use strict";
  var r = n(44),
    o = n(31).getWeak,
    i = n(3),
    s = n(2),
    a = n(45),
    u = n(55),
    c = n(22),
    l = n(16),
    f = n(38),
    h = c(5),
    p = c(6),
    d = 0,
    y = function(t) {
      return t._l || (t._l = new v)
    },
    v = function() {
      this.a = []
    },
    m = function(t, e) {
      return h(t.a, function(t) {
        return t[0] === e
      })
    };
  v.prototype = {
    get: function(t) {
      var e = m(this, t);
      if (e) return e[1]
    },
    has: function(t) {
      return !!m(this, t)
    },
    set: function(t, e) {
      var n = m(this, t);
      n ? n[1] = e : this.a.push([t, e])
    },
    delete: function(t) {
      var e = p(this.a, function(e) {
        return e[0] === t
      });
      return ~e && this.a.splice(e, 1), !!~e
    }
  }, t.exports = {
    getConstructor: function(t, e, n, i) {
      var c = t(function(t, r) {
        a(t, c, e, "_i"), t._t = e, t._i = d++, t._l = void 0, null != r && u(r, n, t[i], t)
      });
      return r(c.prototype, {
        delete: function(t) {
          if (!s(t)) return !1;
          var n = o(t);
          return !0 === n ? y(f(this, e)).delete(t) : n && l(n, this._i) && delete n[this._i]
        },
        has: function(t) {
          if (!s(t)) return !1;
          var n = o(t);
          return !0 === n ? y(f(this, e)).has(t) : n && l(n, this._i)
        }
      }), c
    },
    def: function(t, e, n) {
      var r = o(i(e), !0);
      return !0 === r ? y(t).set(e, n) : r[t._i] = n, t
    },
    ufstore: y
  }
}, function(t, e, n) {
  "use strict";
  t.exports = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50]
  }
}, function(t, e, n) {
  var r = n(119),
    o = {};
  for (var i in r) r.hasOwnProperty(i) && (o[r[i]] = i);
  var s = t.exports = {
    rgb: {
      channels: 3,
      labels: "rgb"
    },
    hsl: {
      channels: 3,
      labels: "hsl"
    },
    hsv: {
      channels: 3,
      labels: "hsv"
    },
    hwb: {
      channels: 3,
      labels: "hwb"
    },
    cmyk: {
      channels: 4,
      labels: "cmyk"
    },
    xyz: {
      channels: 3,
      labels: "xyz"
    },
    lab: {
      channels: 3,
      labels: "lab"
    },
    lch: {
      channels: 3,
      labels: "lch"
    },
    hex: {
      channels: 1,
      labels: ["hex"]
    },
    keyword: {
      channels: 1,
      labels: ["keyword"]
    },
    ansi16: {
      channels: 1,
      labels: ["ansi16"]
    },
    ansi256: {
      channels: 1,
      labels: ["ansi256"]
    },
    hcg: {
      channels: 3,
      labels: ["h", "c", "g"]
    },
    apple: {
      channels: 3,
      labels: ["r16", "g16", "b16"]
    },
    gray: {
      channels: 1,
      labels: ["gray"]
    }
  };
  for (var a in s)
    if (s.hasOwnProperty(a)) {
      if (!("channels" in s[a])) throw new Error("missing channels property: " + a);
      if (!("labels" in s[a])) throw new Error("missing channel labels property: " + a);
      if (s[a].labels.length !== s[a].channels) throw new Error("channel and label counts mismatch: " + a);
      var u = s[a].channels,
        c = s[a].labels;
      delete s[a].channels, delete s[a].labels, Object.defineProperty(s[a], "channels", {
        value: u
      }), Object.defineProperty(s[a], "labels", {
        value: c
      })
    } s.rgb.hsl = function(t) {
    var e, n, r = t[0] / 255,
      o = t[1] / 255,
      i = t[2] / 255,
      s = Math.min(r, o, i),
      a = Math.max(r, o, i),
      u = a - s;
    return a === s ? e = 0 : r === a ? e = (o - i) / u : o === a ? e = 2 + (i - r) / u : i === a && (e = 4 + (r - o) / u), (e = Math.min(60 * e, 360)) < 0 && (e += 360), n = (s + a) / 2, [e, 100 * (a === s ? 0 : n <= .5 ? u / (a + s) : u / (2 - a - s)), 100 * n]
  }, s.rgb.hsv = function(t) {
    var e, n, r, o, i, s = t[0] / 255,
      a = t[1] / 255,
      u = t[2] / 255,
      c = Math.max(s, a, u),
      l = c - Math.min(s, a, u),
      f = function(t) {
        return (c - t) / 6 / l + .5
      };
    return 0 === l ? o = i = 0 : (i = l / c, e = f(s), n = f(a), r = f(u), s === c ? o = r - n : a === c ? o = 1 / 3 + e - r : u === c && (o = 2 / 3 + n - e), o < 0 ? o += 1 : o > 1 && (o -= 1)), [360 * o, 100 * i, 100 * c]
  }, s.rgb.hwb = function(t) {
    var e = t[0],
      n = t[1],
      r = t[2];
    return [s.rgb.hsl(t)[0], 100 * (1 / 255 * Math.min(e, Math.min(n, r))), 100 * (r = 1 - 1 / 255 * Math.max(e, Math.max(n, r)))]
  }, s.rgb.cmyk = function(t) {
    var e, n = t[0] / 255,
      r = t[1] / 255,
      o = t[2] / 255;
    return [100 * ((1 - n - (e = Math.min(1 - n, 1 - r, 1 - o))) / (1 - e) || 0), 100 * ((1 - r - e) / (1 - e) || 0), 100 * ((1 - o - e) / (1 - e) || 0), 100 * e]
  }, s.rgb.keyword = function(t) {
    var e = o[t];
    if (e) return e;
    var n, i, s, a = 1 / 0;
    for (var u in r)
      if (r.hasOwnProperty(u)) {
        var c = r[u],
          l = (i = t, s = c, Math.pow(i[0] - s[0], 2) + Math.pow(i[1] - s[1], 2) + Math.pow(i[2] - s[2], 2));
        l < a && (a = l, n = u)
      } return n
  }, s.keyword.rgb = function(t) {
    return r[t]
  }, s.rgb.xyz = function(t) {
    var e = t[0] / 255,
      n = t[1] / 255,
      r = t[2] / 255;
    return [100 * (.4124 * (e = e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92) + .3576 * (n = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92) + .1805 * (r = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92)), 100 * (.2126 * e + .7152 * n + .0722 * r), 100 * (.0193 * e + .1192 * n + .9505 * r)]
  }, s.rgb.lab = function(t) {
    var e = s.rgb.xyz(t),
      n = e[0],
      r = e[1],
      o = e[2];
    return r /= 100, o /= 108.883, n = (n /= 95.047) > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116, [116 * (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116) - 16, 500 * (n - r), 200 * (r - (o = o > .008856 ? Math.pow(o, 1 / 3) : 7.787 * o + 16 / 116))]
  }, s.hsl.rgb = function(t) {
    var e, n, r, o, i, s = t[0] / 360,
      a = t[1] / 100,
      u = t[2] / 100;
    if (0 === a) return [i = 255 * u, i, i];
    e = 2 * u - (n = u < .5 ? u * (1 + a) : u + a - u * a), o = [0, 0, 0];
    for (var c = 0; c < 3; c++)(r = s + 1 / 3 * -(c - 1)) < 0 && r++, r > 1 && r--, i = 6 * r < 1 ? e + 6 * (n - e) * r : 2 * r < 1 ? n : 3 * r < 2 ? e + (n - e) * (2 / 3 - r) * 6 : e, o[c] = 255 * i;
    return o
  }, s.hsl.hsv = function(t) {
    var e = t[0],
      n = t[1] / 100,
      r = t[2] / 100,
      o = n,
      i = Math.max(r, .01);
    return n *= (r *= 2) <= 1 ? r : 2 - r, o *= i <= 1 ? i : 2 - i, [e, 100 * (0 === r ? 2 * o / (i + o) : 2 * n / (r + n)), 100 * ((r + n) / 2)]
  }, s.hsv.rgb = function(t) {
    var e = t[0] / 60,
      n = t[1] / 100,
      r = t[2] / 100,
      o = Math.floor(e) % 6,
      i = e - Math.floor(e),
      s = 255 * r * (1 - n),
      a = 255 * r * (1 - n * i),
      u = 255 * r * (1 - n * (1 - i));
    switch (r *= 255, o) {
      case 0:
        return [r, u, s];
      case 1:
        return [a, r, s];
      case 2:
        return [s, r, u];
      case 3:
        return [s, a, r];
      case 4:
        return [u, s, r];
      case 5:
        return [r, s, a]
    }
  }, s.hsv.hsl = function(t) {
    var e, n, r, o = t[0],
      i = t[1] / 100,
      s = t[2] / 100,
      a = Math.max(s, .01);
    return r = (2 - i) * s, n = i * a, [o, 100 * (n = (n /= (e = (2 - i) * a) <= 1 ? e : 2 - e) || 0), 100 * (r /= 2)]
  }, s.hwb.rgb = function(t) {
    var e, n, r, o, i, s, a, u = t[0] / 360,
      c = t[1] / 100,
      l = t[2] / 100,
      f = c + l;
    switch (f > 1 && (c /= f, l /= f), r = 6 * u - (e = Math.floor(6 * u)), 0 != (1 & e) && (r = 1 - r), o = c + r * ((n = 1 - l) - c), e) {
      default:
      case 6:
      case 0:
        i = n, s = o, a = c;
        break;
      case 1:
        i = o, s = n, a = c;
        break;
      case 2:
        i = c, s = n, a = o;
        break;
      case 3:
        i = c, s = o, a = n;
        break;
      case 4:
        i = o, s = c, a = n;
        break;
      case 5:
        i = n, s = c, a = o
    }
    return [255 * i, 255 * s, 255 * a]
  }, s.cmyk.rgb = function(t) {
    var e = t[0] / 100,
      n = t[1] / 100,
      r = t[2] / 100,
      o = t[3] / 100;
    return [255 * (1 - Math.min(1, e * (1 - o) + o)), 255 * (1 - Math.min(1, n * (1 - o) + o)), 255 * (1 - Math.min(1, r * (1 - o) + o))]
  }, s.xyz.rgb = function(t) {
    var e, n, r, o = t[0] / 100,
      i = t[1] / 100,
      s = t[2] / 100;
    return n = -.9689 * o + 1.8758 * i + .0415 * s, r = .0557 * o + -.204 * i + 1.057 * s, e = (e = 3.2406 * o + -1.5372 * i + -.4986 * s) > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e, n = n > .0031308 ? 1.055 * Math.pow(n, 1 / 2.4) - .055 : 12.92 * n, r = r > .0031308 ? 1.055 * Math.pow(r, 1 / 2.4) - .055 : 12.92 * r, [255 * (e = Math.min(Math.max(0, e), 1)), 255 * (n = Math.min(Math.max(0, n), 1)), 255 * (r = Math.min(Math.max(0, r), 1))]
  }, s.xyz.lab = function(t) {
    var e = t[0],
      n = t[1],
      r = t[2];
    return n /= 100, r /= 108.883, e = (e /= 95.047) > .008856 ? Math.pow(e, 1 / 3) : 7.787 * e + 16 / 116, [116 * (n = n > .008856 ? Math.pow(n, 1 / 3) : 7.787 * n + 16 / 116) - 16, 500 * (e - n), 200 * (n - (r = r > .008856 ? Math.pow(r, 1 / 3) : 7.787 * r + 16 / 116))]
  }, s.lab.xyz = function(t) {
    var e, n, r, o = t[0];
    e = t[1] / 500 + (n = (o + 16) / 116), r = n - t[2] / 200;
    var i = Math.pow(n, 3),
      s = Math.pow(e, 3),
      a = Math.pow(r, 3);
    return n = i > .008856 ? i : (n - 16 / 116) / 7.787, e = s > .008856 ? s : (e - 16 / 116) / 7.787, r = a > .008856 ? a : (r - 16 / 116) / 7.787, [e *= 95.047, n *= 100, r *= 108.883]
  }, s.lab.lch = function(t) {
    var e, n = t[0],
      r = t[1],
      o = t[2];
    return (e = 360 * Math.atan2(o, r) / 2 / Math.PI) < 0 && (e += 360), [n, Math.sqrt(r * r + o * o), e]
  }, s.lch.lab = function(t) {
    var e, n = t[0],
      r = t[1];
    return e = t[2] / 360 * 2 * Math.PI, [n, r * Math.cos(e), r * Math.sin(e)]
  }, s.rgb.ansi16 = function(t) {
    var e = t[0],
      n = t[1],
      r = t[2],
      o = 1 in arguments ? arguments[1] : s.rgb.hsv(t)[2];
    if (0 === (o = Math.round(o / 50))) return 30;
    var i = 30 + (Math.round(r / 255) << 2 | Math.round(n / 255) << 1 | Math.round(e / 255));
    return 2 === o && (i += 60), i
  }, s.hsv.ansi16 = function(t) {
    return s.rgb.ansi16(s.hsv.rgb(t), t[2])
  }, s.rgb.ansi256 = function(t) {
    var e = t[0],
      n = t[1],
      r = t[2];
    return e === n && n === r ? e < 8 ? 16 : e > 248 ? 231 : Math.round((e - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(e / 255 * 5) + 6 * Math.round(n / 255 * 5) + Math.round(r / 255 * 5)
  }, s.ansi16.rgb = function(t) {
    var e = t % 10;
    if (0 === e || 7 === e) return t > 50 && (e += 3.5), [e = e / 10.5 * 255, e, e];
    var n = .5 * (1 + ~~(t > 50));
    return [(1 & e) * n * 255, (e >> 1 & 1) * n * 255, (e >> 2 & 1) * n * 255]
  }, s.ansi256.rgb = function(t) {
    if (t >= 232) {
      var e = 10 * (t - 232) + 8;
      return [e, e, e]
    }
    var n;
    return t -= 16, [Math.floor(t / 36) / 5 * 255, Math.floor((n = t % 36) / 6) / 5 * 255, n % 6 / 5 * 255]
  }, s.rgb.hex = function(t) {
    var e = (((255 & Math.round(t[0])) << 16) + ((255 & Math.round(t[1])) << 8) + (255 & Math.round(t[2]))).toString(16).toUpperCase();
    return "000000".substring(e.length) + e
  }, s.hex.rgb = function(t) {
    var e = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
    if (!e) return [0, 0, 0];
    var n = e[0];
    3 === e[0].length && (n = n.split("").map(function(t) {
      return t + t
    }).join(""));
    var r = parseInt(n, 16);
    return [r >> 16 & 255, r >> 8 & 255, 255 & r]
  }, s.rgb.hcg = function(t) {
    var e, n = t[0] / 255,
      r = t[1] / 255,
      o = t[2] / 255,
      i = Math.max(Math.max(n, r), o),
      s = Math.min(Math.min(n, r), o),
      a = i - s;
    return e = a <= 0 ? 0 : i === n ? (r - o) / a % 6 : i === r ? 2 + (o - n) / a : 4 + (n - r) / a + 4, e /= 6, [360 * (e %= 1), 100 * a, 100 * (a < 1 ? s / (1 - a) : 0)]
  }, s.hsl.hcg = function(t) {
    var e = t[1] / 100,
      n = t[2] / 100,
      r = 1,
      o = 0;
    return (r = n < .5 ? 2 * e * n : 2 * e * (1 - n)) < 1 && (o = (n - .5 * r) / (1 - r)), [t[0], 100 * r, 100 * o]
  }, s.hsv.hcg = function(t) {
    var e = t[1] / 100,
      n = t[2] / 100,
      r = e * n,
      o = 0;
    return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
  }, s.hcg.rgb = function(t) {
    var e = t[0] / 360,
      n = t[1] / 100,
      r = t[2] / 100;
    if (0 === n) return [255 * r, 255 * r, 255 * r];
    var o, i = [0, 0, 0],
      s = e % 1 * 6,
      a = s % 1,
      u = 1 - a;
    switch (Math.floor(s)) {
      case 0:
        i[0] = 1, i[1] = a, i[2] = 0;
        break;
      case 1:
        i[0] = u, i[1] = 1, i[2] = 0;
        break;
      case 2:
        i[0] = 0, i[1] = 1, i[2] = a;
        break;
      case 3:
        i[0] = 0, i[1] = u, i[2] = 1;
        break;
      case 4:
        i[0] = a, i[1] = 0, i[2] = 1;
        break;
      default:
        i[0] = 1, i[1] = 0, i[2] = u
    }
    return o = (1 - n) * r, [255 * (n * i[0] + o), 255 * (n * i[1] + o), 255 * (n * i[2] + o)]
  }, s.hcg.hsv = function(t) {
    var e = t[1] / 100,
      n = e + t[2] / 100 * (1 - e),
      r = 0;
    return n > 0 && (r = e / n), [t[0], 100 * r, 100 * n]
  }, s.hcg.hsl = function(t) {
    var e = t[1] / 100,
      n = t[2] / 100 * (1 - e) + .5 * e,
      r = 0;
    return n > 0 && n < .5 ? r = e / (2 * n) : n >= .5 && n < 1 && (r = e / (2 * (1 - n))), [t[0], 100 * r, 100 * n]
  }, s.hcg.hwb = function(t) {
    var e = t[1] / 100,
      n = e + t[2] / 100 * (1 - e);
    return [t[0], 100 * (n - e), 100 * (1 - n)]
  }, s.hwb.hcg = function(t) {
    var e = t[1] / 100,
      n = 1 - t[2] / 100,
      r = n - e,
      o = 0;
    return r < 1 && (o = (n - r) / (1 - r)), [t[0], 100 * r, 100 * o]
  }, s.apple.rgb = function(t) {
    return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255]
  }, s.rgb.apple = function(t) {
    return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535]
  }, s.gray.rgb = function(t) {
    return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255]
  }, s.gray.hsl = s.gray.hsv = function(t) {
    return [0, 0, t[0]]
  }, s.gray.hwb = function(t) {
    return [0, 100, t[0]]
  }, s.gray.cmyk = function(t) {
    return [0, 0, 0, t[0]]
  }, s.gray.lab = function(t) {
    return [t[0], 0, 0]
  }, s.gray.hex = function(t) {
    var e = 255 & Math.round(t[0] / 100 * 255),
      n = ((e << 16) + (e << 8) + e).toString(16).toUpperCase();
    return "000000".substring(n.length) + n
  }, s.rgb.gray = function(t) {
    return [(t[0] + t[1] + t[2]) / 3 / 255 * 100]
  }
}, function(t, e, n) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }! function() {
    "use strict";

    function n() {
      var t = window,
        e = document;
      if (!("scrollBehavior" in e.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
        var n, o = t.HTMLElement || t.Element,
          i = 468,
          s = {
            scroll: t.scroll || t.scrollTo,
            scrollBy: t.scrollBy,
            elementScroll: o.prototype.scroll || c,
            scrollIntoView: o.prototype.scrollIntoView
          },
          a = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now,
          u = (n = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
        t.scroll = t.scrollTo = function() {
          void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? v.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : s.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== r(arguments[0]) ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
        }, t.scrollBy = function() {
          void 0 !== arguments[0] && (l(arguments[0]) ? s.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" !== r(arguments[0]) ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : v.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
        }, o.prototype.scroll = o.prototype.scrollTo = function() {
          if (void 0 !== arguments[0])
            if (!0 !== l(arguments[0])) {
              var t = arguments[0].left,
                e = arguments[0].top;
              v.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
            } else {
              if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
              s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== r(arguments[0]) ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
            }
        }, o.prototype.scrollBy = function() {
          void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
            left: ~~arguments[0].left + this.scrollLeft,
            top: ~~arguments[0].top + this.scrollTop,
            behavior: arguments[0].behavior
          }) : s.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
        }, o.prototype.scrollIntoView = function() {
          if (!0 !== l(arguments[0])) {
            var n = d(this),
              r = n.getBoundingClientRect(),
              o = this.getBoundingClientRect();
            n !== e.body ? (v.call(this, n, n.scrollLeft + o.left - r.left, n.scrollTop + o.top - r.top), "fixed" !== t.getComputedStyle(n).position && t.scrollBy({
              left: r.left,
              top: r.top,
              behavior: "smooth"
            })) : t.scrollBy({
              left: o.left,
              top: o.top,
              behavior: "smooth"
            })
          } else s.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
        }
      }

      function c(t, e) {
        this.scrollLeft = t, this.scrollTop = e
      }

      function l(t) {
        if (null === t || "object" !== r(t) || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior) return !0;
        if ("object" === r(t) && "smooth" === t.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function f(t, e) {
        return "Y" === e ? t.clientHeight + u < t.scrollHeight : "X" === e ? t.clientWidth + u < t.scrollWidth : void 0
      }

      function h(e, n) {
        var r = t.getComputedStyle(e, null)["overflow" + n];
        return "auto" === r || "scroll" === r
      }

      function p(t) {
        var e = f(t, "Y") && h(t, "Y"),
          n = f(t, "X") && h(t, "X");
        return e || n
      }

      function d(t) {
        for (; t !== e.body && !1 === p(t);) t = t.parentNode || t.host;
        return t
      }

      function y(e) {
        var n, r, o, s, u = (a() - e.startTime) / i;
        s = u = u > 1 ? 1 : u, n = .5 * (1 - Math.cos(Math.PI * s)), r = e.startX + (e.x - e.startX) * n, o = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, r, o), r === e.x && o === e.y || t.requestAnimationFrame(y.bind(t, e))
      }

      function v(n, r, o) {
        var i, u, l, f, h = a();
        n === e.body ? (i = t, u = t.scrollX || t.pageXOffset, l = t.scrollY || t.pageYOffset, f = s.scroll) : (i = n, u = n.scrollLeft, l = n.scrollTop, f = c), y({
          scrollable: i,
          method: f,
          startTime: h,
          startX: u,
          startY: l,
          x: r,
          y: o
        })
      }
    }
    "object" === r(e) && void 0 !== t ? t.exports = {
      polyfill: n
    } : n()
  }()
}, function(t, e, n) {
  var r = n(0);
  r(r.P, "Array", {
    copyWithin: n(92)
  }), n(34)("copyWithin")
}, function(t, e, n) {
  t.exports = n(50)("native-function-to-string", Function.toString)
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(4);
  r(r.P + r.F * !n(23)([].every, !0), "Array", {
    every: function(t) {
      return o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  var r = n(2),
    o = n(52),
    i = n(5)("species");
  t.exports = function(t) {
    var e;
    return o(t) && ("function" != typeof(e = t.constructor) || e !== Array && !o(e.prototype) || (e = void 0), r(e) && null === (e = e[i]) && (e = void 0)), void 0 === e ? Array : e
  }
}, function(t, e, n) {
  var r = n(0);
  r(r.P, "Array", {
    fill: n(67)
  }), n(34)("fill")
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(2);
  r(r.P + r.F * !n(23)([].filter, !0), "Array", {
    filter: function(t) {
      return o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(5),
    i = !0;
  "find" in [] && Array(1).find(function() {
    i = !1
  }), r(r.P + r.F * i, "Array", {
    find: function(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(34)("find")
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(6),
    i = "findIndex",
    s = !0;
  i in [] && Array(1)[i](function() {
    s = !1
  }), r(r.P + r.F * s, "Array", {
    findIndex: function(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(34)(i)
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(131),
    i = n(9),
    s = n(8),
    a = n(17),
    u = n(93);
  r(r.P, "Array", {
    flatMap: function(t) {
      var e, n, r = i(this);
      return a(t), e = s(r.length), n = u(r, 0), o(n, r, r, e, 0, 1, t, arguments[1]), n
    }
  }), n(34)("flatMap")
}, function(t, e, n) {
  "use strict";
  var r = n(52),
    o = n(2),
    i = n(8),
    s = n(21),
    a = n(5)("isConcatSpreadable");
  t.exports = function t(e, n, u, c, l, f, h, p) {
    for (var d, y, v = l, m = 0, b = !!h && s(h, p, 3); m < c;) {
      if (m in u) {
        if (d = b ? b(u[m], m, n) : u[m], y = !1, o(d) && (y = void 0 !== (y = d[a]) ? !!y : r(d)), y && f > 0) v = t(e, n, d, i(d.length), v, f - 1) - 1;
        else {
          if (v >= 9007199254740991) throw TypeError();
          e[v] = d
        }
        v++
      }
      m++
    }
    return v
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(0),
    i = n(23)([].forEach, !0);
  r(r.P + r.F * !i, "Array", {
    forEach: function(t) {
      return o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(21),
    o = n(0),
    i = n(9),
    s = n(94),
    a = n(68),
    u = n(8),
    c = n(69),
    l = n(70);
  o(o.S + o.F * !n(53)(function(t) {
    Array.from(t)
  }), "Array", {
    from: function(t) {
      var e, n, o, f, h = i(t),
        p = "function" == typeof this ? this : Array,
        d = arguments.length,
        y = d > 1 ? arguments[1] : void 0,
        v = void 0 !== y,
        m = 0,
        b = l(h);
      if (v && (y = r(y, d > 2 ? arguments[2] : void 0, 2)), null == b || p == Array && a(b))
        for (n = new p(e = u(h.length)); e > m; m++) c(n, m, v ? y(h[m], m) : h[m]);
      else
        for (f = b.call(h), n = new p; !(o = f.next()).done; m++) c(n, m, v ? s(f, y, [o.value, m], !0) : o.value);
      return n.length = m, n
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(54)(!0);
  r(r.P, "Array", {
    includes: function(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
  }), n(34)("includes")
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(54)(!1),
    i = [].indexOf,
    s = !!i && 1 / [1].indexOf(1, -0) < 0;
  r(r.P + r.F * (s || !n(23)(i)), "Array", {
    indexOf: function(t) {
      return s ? i.apply(this, arguments) || 0 : o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Array", {
    isArray: n(52)
  })
}, function(t, e, n) {
  "use strict";
  var r = n(36),
    o = n(32),
    i = n(42),
    s = {};
  n(15)(s, n(5)("iterator"), function() {
    return this
  }), t.exports = function(t, e, n) {
    t.prototype = r(s, {
      next: o(1, n)
    }), i(t, e + " Iterator")
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(19),
    i = n(26),
    s = n(8),
    a = [].lastIndexOf,
    u = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
  r(r.P + r.F * (u || !n(23)(a)), "Array", {
    lastIndexOf: function(t) {
      if (u) return a.apply(this, arguments) || 0;
      var e = o(this),
        n = s(e.length),
        r = n - 1;
      for (arguments.length > 1 && (r = Math.min(r, i(arguments[1]))), r < 0 && (r = n + r); r >= 0; r--)
        if (r in e && e[r] === t) return r || 0;
      return -1
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(1);
  r(r.P + r.F * !n(23)([].map, !0), "Array", {
    map: function(t) {
      return o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(69);
  r(r.S + r.F * n(4)(function() {
    function t() {}
    return !(Array.of.call(t) instanceof t)
  }), "Array", {
    of: function() {
      for (var t = 0, e = arguments.length, n = new("function" == typeof this ? this : Array)(e); e > t;) o(n, t, arguments[t++]);
      return n.length = e, n
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(99);
  r(r.P + r.F * !n(23)([].reduce, !0), "Array", {
    reduce: function(t) {
      return o(this, t, arguments.length, arguments[1], !1)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(99);
  r(r.P + r.F * !n(23)([].reduceRight, !0), "Array", {
    reduceRight: function(t) {
      return o(this, t, arguments.length, arguments[1], !0)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(22)(3);
  r(r.P + r.F * !n(23)([].some, !0), "Array", {
    some: function(t) {
      return o(this, t, arguments[1])
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(17),
    i = n(9),
    s = n(4),
    a = [].sort,
    u = [1, 2, 3];
  r(r.P + r.F * (s(function() {
    u.sort(void 0)
  }) || !s(function() {
    u.sort(null)
  }) || !n(23)(a)), "Array", {
    sort: function(t) {
      return void 0 === t ? a.call(i(this)) : a.call(i(this), o(t))
    }
  })
}, function(t, e, n) {
  n(43)("Array")
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Date", {
    now: function() {
      return (new Date).getTime()
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(148);
  r(r.P + r.F * (Date.prototype.toISOString !== o), "Date", {
    toISOString: o
  })
}, function(t, e, n) {
  "use strict";
  var r = n(4),
    o = Date.prototype.getTime,
    i = Date.prototype.toISOString,
    s = function(t) {
      return t > 9 ? t : "0" + t
    };
  t.exports = r(function() {
    return "0385-07-25T07:06:39.999Z" != i.call(new Date(-5e13 - 1))
  }) || !r(function() {
    i.call(new Date(NaN))
  }) ? function() {
    if (!isFinite(o.call(this))) throw RangeError("Invalid time value");
    var t = this,
      e = t.getUTCFullYear(),
      n = t.getUTCMilliseconds(),
      r = e < 0 ? "-" : e > 9999 ? "+" : "";
    return r + ("00000" + Math.abs(e)).slice(r ? -6 : -4) + "-" + s(t.getUTCMonth() + 1) + "-" + s(t.getUTCDate()) + "T" + s(t.getUTCHours()) + ":" + s(t.getUTCMinutes()) + ":" + s(t.getUTCSeconds()) + "." + (n > 99 ? n : "0" + s(n)) + "Z"
  } : i
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(20);
  r(r.P + r.F * n(4)(function() {
    return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
      toISOString: function() {
        return 1
      }
    })
  }), "Date", {
    toJSON: function(t) {
      var e = o(this),
        n = i(e);
      return "number" != typeof n || isFinite(n) ? e.toISOString() : null
    }
  })
}, function(t, e, n) {
  var r = n(5)("toPrimitive"),
    o = Date.prototype;
  r in o || n(15)(o, r, n(151))
}, function(t, e, n) {
  "use strict";
  var r = n(3),
    o = n(20);
  t.exports = function(t) {
    if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
    return o(r(this), "number" != t)
  }
}, function(t, e, n) {
  var r = Date.prototype,
    o = r.toString,
    i = r.getTime;
  new Date(NaN) + "" != "Invalid Date" && n(12)(r, "toString", function() {
    var t = i.call(this);
    return t == t ? o.call(this) : "Invalid Date"
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.P, "Function", {
    bind: n(100)
  })
}, function(t, e, n) {
  "use strict";
  var r = n(2),
    o = n(27),
    i = n(5)("hasInstance"),
    s = Function.prototype;
  i in s || n(7).f(s, i, {
    value: function(t) {
      if ("function" != typeof this || !r(t)) return !1;
      if (!r(this.prototype)) return t instanceof this;
      for (; t = o(t);)
        if (this.prototype === t) return !0;
      return !1
    }
  })
}, function(t, e, n) {
  var r = n(7).f,
    o = Function.prototype,
    i = /^\s*function ([^ (]*)/;
  "name" in o || n(6) && r(o, "name", {
    configurable: !0,
    get: function() {
      try {
        return ("" + this).match(i)[1]
      } catch (t) {
        return ""
      }
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(102),
    o = n(38);
  t.exports = n(56)("Map", function(t) {
    return function() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    get: function(t) {
      var e = r.getEntry(o(this, "Map"), t);
      return e && e.v
    },
    set: function(t, e) {
      return r.def(o(this, "Map"), 0 === t ? 0 : t, e)
    }
  }, r, !0)
}, function(t, e, n) {
  var r = n(0),
    o = n(103),
    i = Math.sqrt,
    s = Math.acosh;
  r(r.S + r.F * !(s && 710 == Math.floor(s(Number.MAX_VALUE)) && s(1 / 0) == 1 / 0), "Math", {
    acosh: function(t) {
      return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : o(t - 1 + i(t - 1) * i(t + 1))
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = Math.asinh;
  r(r.S + r.F * !(o && 1 / o(0) > 0), "Math", {
    asinh: function t(e) {
      return isFinite(e = +e) && 0 != e ? e < 0 ? -t(-e) : Math.log(e + Math.sqrt(e * e + 1)) : e
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = Math.atanh;
  r(r.S + r.F * !(o && 1 / o(-0) < 0), "Math", {
    atanh: function(t) {
      return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(77);
  r(r.S, "Math", {
    cbrt: function(t) {
      return o(t = +t) * Math.pow(Math.abs(t), 1 / 3)
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    clz32: function(t) {
      return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = Math.exp;
  r(r.S, "Math", {
    cosh: function(t) {
      return (o(t = +t) + o(-t)) / 2
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(78);
  r(r.S + r.F * (o != Math.expm1), "Math", {
    expm1: o
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    fround: n(165)
  })
}, function(t, e, n) {
  var r = n(77),
    o = Math.pow,
    i = o(2, -52),
    s = o(2, -23),
    a = o(2, 127) * (2 - s),
    u = o(2, -126);
  t.exports = Math.fround || function(t) {
    var e, n, o = Math.abs(t),
      c = r(t);
    return o < u ? c * (o / u / s + 1 / i - 1 / i) * u * s : (n = (e = (1 + s / i) * o) - (e - o)) > a || n != n ? c * (1 / 0) : c * n
  }
}, function(t, e, n) {
  var r = n(0),
    o = Math.abs;
  r(r.S, "Math", {
    hypot: function(t, e) {
      for (var n, r, i = 0, s = 0, a = arguments.length, u = 0; s < a;) u < (n = o(arguments[s++])) ? (i = i * (r = u / n) * r + 1, u = n) : i += n > 0 ? (r = n / u) * r : n;
      return u === 1 / 0 ? 1 / 0 : u * Math.sqrt(i)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = Math.imul;
  r(r.S + r.F * n(4)(function() {
    return -5 != o(4294967295, 5) || 2 != o.length
  }), "Math", {
    imul: function(t, e) {
      var n = +t,
        r = +e,
        o = 65535 & n,
        i = 65535 & r;
      return 0 | o * i + ((65535 & n >>> 16) * i + o * (65535 & r >>> 16) << 16 >>> 0)
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    log1p: n(103)
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    log10: function(t) {
      return Math.log(t) * Math.LOG10E
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    log2: function(t) {
      return Math.log(t) / Math.LN2
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    sign: n(77)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(78),
    i = Math.exp;
  r(r.S + r.F * n(4)(function() {
    return -2e-17 != !Math.sinh(-2e-17)
  }), "Math", {
    sinh: function(t) {
      return Math.abs(t = +t) < 1 ? (o(t) - o(-t)) / 2 : (i(t - 1) - i(-t - 1)) * (Math.E / 2)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(78),
    i = Math.exp;
  r(r.S, "Math", {
    tanh: function(t) {
      var e = o(t = +t),
        n = o(-t);
      return e == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (e - n) / (i(t) + i(-t))
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Math", {
    trunc: function(t) {
      return (t > 0 ? Math.floor : Math.ceil)(t)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(1),
    o = n(16),
    i = n(35),
    s = n(75),
    a = n(20),
    u = n(4),
    c = n(39).f,
    l = n(18).f,
    f = n(7).f,
    h = n(46).trim,
    p = r.Number,
    d = p,
    y = p.prototype,
    v = "Number" == i(n(36)(y)),
    m = "trim" in String.prototype,
    b = function(t) {
      var e = a(t, !1);
      if ("string" == typeof e && e.length > 2) {
        var n, r, o, i = (e = m ? e.trim() : h(e, 3)).charCodeAt(0);
        if (43 === i || 45 === i) {
          if (88 === (n = e.charCodeAt(2)) || 120 === n) return NaN
        } else if (48 === i) {
          switch (e.charCodeAt(1)) {
            case 66:
            case 98:
              r = 2, o = 49;
              break;
            case 79:
            case 111:
              r = 8, o = 55;
              break;
            default:
              return +e
          }
          for (var s, u = e.slice(2), c = 0, l = u.length; c < l; c++)
            if ((s = u.charCodeAt(c)) < 48 || s > o) return NaN;
          return parseInt(u, r)
        }
      }
      return +e
    };
  if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
    p = function(t) {
      var e = arguments.length < 1 ? 0 : t,
        n = this;
      return n instanceof p && (v ? u(function() {
        y.valueOf.call(n)
      }) : "Number" != i(n)) ? s(new d(b(e)), n, p) : b(e)
    };
    for (var g, _ = n(6) ? c(d) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), w = 0; _.length > w; w++) o(d, g = _[w]) && !o(p, g) && f(p, g, l(d, g));
    p.prototype = y, y.constructor = p, n(12)(r, "Number", p)
  }
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Number", {
    EPSILON: Math.pow(2, -52)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(1).isFinite;
  r(r.S, "Number", {
    isFinite: function(t) {
      return "number" == typeof t && o(t)
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Number", {
    isInteger: n(104)
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Number", {
    isNaN: function(t) {
      return t != t
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(104),
    i = Math.abs;
  r(r.S, "Number", {
    isSafeInteger: function(t) {
      return o(t) && i(t) <= 9007199254740991
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Number", {
    MAX_SAFE_INTEGER: 9007199254740991
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Number", {
    MIN_SAFE_INTEGER: -9007199254740991
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(184);
  r(r.S + r.F * (Number.parseFloat != o), "Number", {
    parseFloat: o
  })
}, function(t, e, n) {
  var r = n(1).parseFloat,
    o = n(46).trim;
  t.exports = 1 / r(n(79) + "-0") != -1 / 0 ? function(t) {
    var e = o(String(t), 3),
      n = r(e);
    return 0 === n && "-" == e.charAt(0) ? -0 : n
  } : r
}, function(t, e, n) {
  var r = n(0),
    o = n(186);
  r(r.S + r.F * (Number.parseInt != o), "Number", {
    parseInt: o
  })
}, function(t, e, n) {
  var r = n(1).parseInt,
    o = n(46).trim,
    i = n(79),
    s = /^[-+]?0[xX]/;
  t.exports = 8 !== r(i + "08") || 22 !== r(i + "0x16") ? function(t, e) {
    var n = o(String(t), 3);
    return r(n, e >>> 0 || (s.test(n) ? 16 : 10))
  } : r
}, function(t, e, n) {
  var r = n(0);
  r(r.S + r.F, "Object", {
    assign: n(105)
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Object", {
    create: n(36)
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(17),
    s = n(7);
  n(6) && r(r.P + n(58), "Object", {
    __defineGetter__: function(t, e) {
      s.f(o(this), t, {
        get: i(e),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(17),
    s = n(7);
  n(6) && r(r.P + n(58), "Object", {
    __defineSetter__: function(t, e) {
      s.f(o(this), t, {
        set: i(e),
        enumerable: !0,
        configurable: !0
      })
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S + r.F * !n(6), "Object", {
    defineProperty: n(7).f
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S + r.F * !n(6), "Object", {
    defineProperties: n(96)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(106)(!0);
  r(r.S, "Object", {
    entries: function(t) {
      return o(t)
    }
  })
}, function(t, e, n) {
  var r = n(2),
    o = n(31).onFreeze;
  n(24)("freeze", function(t) {
    return function(e) {
      return t && r(e) ? t(o(e)) : e
    }
  })
}, function(t, e, n) {
  var r = n(19),
    o = n(18).f;
  n(24)("getOwnPropertyDescriptor", function() {
    return function(t, e) {
      return o(r(t), e)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(107),
    i = n(19),
    s = n(18),
    a = n(69);
  r(r.S, "Object", {
    getOwnPropertyDescriptors: function(t) {
      for (var e, n, r = i(t), u = s.f, c = o(r), l = {}, f = 0; c.length > f;) void 0 !== (n = u(r, e = c[f++])) && a(l, e, n);
      return l
    }
  })
}, function(t, e, n) {
  n(24)("getOwnPropertyNames", function() {
    return n(108).f
  })
}, function(t, e, n) {
  var r = n(9),
    o = n(27);
  n(24)("getPrototypeOf", function() {
    return function(t) {
      return o(r(t))
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(20),
    s = n(27),
    a = n(18).f;
  n(6) && r(r.P + n(58), "Object", {
    __lookupGetter__: function(t) {
      var e, n = o(this),
        r = i(t, !0);
      do {
        if (e = a(n, r)) return e.get
      } while (n = s(n))
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(9),
    i = n(20),
    s = n(27),
    a = n(18).f;
  n(6) && r(r.P + n(58), "Object", {
    __lookupSetter__: function(t) {
      var e, n = o(this),
        r = i(t, !0);
      do {
        if (e = a(n, r)) return e.set
      } while (n = s(n))
    }
  })
}, function(t, e, n) {
  var r = n(2),
    o = n(31).onFreeze;
  n(24)("preventExtensions", function(t) {
    return function(e) {
      return t && r(e) ? t(o(e)) : e
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(47),
    o = {};
  o[n(5)("toStringTag")] = "z", o + "" != "[object z]" && n(12)(Object.prototype, "toString", function() {
    return "[object " + r(this) + "]"
  }, !0)
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Object", {
    is: n(109)
  })
}, function(t, e, n) {
  var r = n(2);
  n(24)("isFrozen", function(t) {
    return function(e) {
      return !r(e) || !!t && t(e)
    }
  })
}, function(t, e, n) {
  var r = n(2);
  n(24)("isSealed", function(t) {
    return function(e) {
      return !r(e) || !!t && t(e)
    }
  })
}, function(t, e, n) {
  var r = n(2);
  n(24)("isExtensible", function(t) {
    return function(e) {
      return !!r(e) && (!t || t(e))
    }
  })
}, function(t, e, n) {
  var r = n(9),
    o = n(37);
  n(24)("keys", function() {
    return function(t) {
      return o(r(t))
    }
  })
}, function(t, e, n) {
  var r = n(2),
    o = n(31).onFreeze;
  n(24)("seal", function(t) {
    return function(e) {
      return t && r(e) ? t(o(e)) : e
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Object", {
    setPrototypeOf: n(76).set
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(106)(!1);
  r(r.S, "Object", {
    values: function(t) {
      return o(t)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r, o, i, s, a = n(30),
    u = n(1),
    c = n(21),
    l = n(47),
    f = n(0),
    h = n(2),
    p = n(17),
    d = n(45),
    y = n(55),
    v = n(49),
    m = n(80).set,
    b = n(212)(),
    g = n(110),
    _ = n(213),
    w = n(59),
    S = n(111),
    E = u.TypeError,
    x = u.process,
    O = x && x.versions,
    T = O && O.v8 || "",
    C = u.Promise,
    N = "process" == l(x),
    k = function() {},
    A = o = g.f,
    M = !! function() {
      try {
        var t = C.resolve(1),
          e = (t.constructor = {})[n(5)("species")] = function(t) {
            t(k, k)
          };
        return (N || "function" == typeof PromiseRejectionEvent) && t.then(k) instanceof e && 0 !== T.indexOf("6.6") && -1 === w.indexOf("Chrome/66")
      } catch (t) {}
    }(),
    j = function(t) {
      var e;
      return !(!h(t) || "function" != typeof(e = t.then)) && e
    },
    P = function(t, e) {
      if (!t._n) {
        t._n = !0;
        var n = t._c;
        b(function() {
          for (var r = t._v, o = 1 == t._s, i = 0, s = function(e) {
              var n, i, s, a = o ? e.ok : e.fail,
                u = e.resolve,
                c = e.reject,
                l = e.domain;
              try {
                a ? (o || (2 == t._h && L(t), t._h = 1), !0 === a ? n = r : (l && l.enter(), n = a(r), l && (l.exit(), s = !0)), n === e.promise ? c(E("Promise-chain cycle")) : (i = j(n)) ? i.call(n, u, c) : u(n)) : c(r)
              } catch (t) {
                l && !s && l.exit(), c(t)
              }
            }; n.length > i;) s(n[i++]);
          t._c = [], t._n = !1, e && !t._h && R(t)
        })
      }
    },
    R = function(t) {
      m.call(u, function() {
        var e, n, r, o = t._v,
          i = I(t);
        if (i && (e = _(function() {
            N ? x.emit("unhandledRejection", o, t) : (n = u.onunhandledrejection) ? n({
              promise: t,
              reason: o
            }) : (r = u.console) && r.error && r.error("Unhandled promise rejection", o)
          }), t._h = N || I(t) ? 2 : 1), t._a = void 0, i && e.e) throw e.v
      })
    },
    I = function(t) {
      return 1 !== t._h && 0 === (t._a || t._c).length
    },
    L = function(t) {
      m.call(u, function() {
        var e;
        N ? x.emit("rejectionHandled", t) : (e = u.onrejectionhandled) && e({
          promise: t,
          reason: t._v
        })
      })
    },
    D = function(t) {
      var e = this;
      e._d || (e._d = !0, (e = e._w || e)._v = t, e._s = 2, e._a || (e._a = e._c.slice()), P(e, !0))
    },
    F = function t(e) {
      var n, r = this;
      if (!r._d) {
        r._d = !0, r = r._w || r;
        try {
          if (r === e) throw E("Promise can't be resolved itself");
          (n = j(e)) ? b(function() {
            var o = {
              _w: r,
              _d: !1
            };
            try {
              n.call(e, c(t, o, 1), c(D, o, 1))
            } catch (t) {
              D.call(o, t)
            }
          }): (r._v = e, r._s = 1, P(r, !1))
        } catch (t) {
          D.call({
            _w: r,
            _d: !1
          }, t)
        }
      }
    };
  M || (C = function(t) {
    d(this, C, "Promise", "_h"), p(t), r.call(this);
    try {
      t(c(F, this, 1), c(D, this, 1))
    } catch (t) {
      D.call(this, t)
    }
  }, (r = function(t) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }).prototype = n(44)(C.prototype, {
    then: function(t, e) {
      var n = A(v(this, C));
      return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = N ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
    },
    catch: function(t) {
      return this.then(void 0, t)
    }
  }), i = function() {
    var t = new r;
    this.promise = t, this.resolve = c(F, t, 1), this.reject = c(D, t, 1)
  }, g.f = A = function(t) {
    return t === C || t === s ? new i(t) : o(t)
  }), f(f.G + f.W + f.F * !M, {
    Promise: C
  }), n(42)(C, "Promise"), n(43)("Promise"), s = n(29).Promise, f(f.S + f.F * !M, "Promise", {
    reject: function(t) {
      var e = A(this);
      return (0, e.reject)(t), e.promise
    }
  }), f(f.S + f.F * (a || !M), "Promise", {
    resolve: function(t) {
      return S(a && this === s ? C : this, t)
    }
  }), f(f.S + f.F * !(M && n(53)(function(t) {
    C.all(t).catch(k)
  })), "Promise", {
    all: function(t) {
      var e = this,
        n = A(e),
        r = n.resolve,
        o = n.reject,
        i = _(function() {
          var n = [],
            i = 0,
            s = 1;
          y(t, !1, function(t) {
            var a = i++,
              u = !1;
            n.push(void 0), s++, e.resolve(t).then(function(t) {
              u || (u = !0, n[a] = t, --s || r(n))
            }, o)
          }), --s || r(n)
        });
      return i.e && o(i.v), n.promise
    },
    race: function(t) {
      var e = this,
        n = A(e),
        r = n.reject,
        o = _(function() {
          y(t, !1, function(t) {
            e.resolve(t).then(n.resolve, r)
          })
        });
      return o.e && r(o.v), n.promise
    }
  })
}, function(t, e, n) {
  var r = n(1),
    o = n(80).set,
    i = r.MutationObserver || r.WebKitMutationObserver,
    s = r.process,
    a = r.Promise,
    u = "process" == n(35)(s);
  t.exports = function() {
    var t, e, n, c = function() {
      var r, o;
      for (u && (r = s.domain) && r.exit(); t;) {
        o = t.fn, t = t.next;
        try {
          o()
        } catch (r) {
          throw t ? n() : e = void 0, r
        }
      }
      e = void 0, r && r.enter()
    };
    if (u) n = function() {
      s.nextTick(c)
    };
    else if (!i || r.navigator && r.navigator.standalone)
      if (a && a.resolve) {
        var l = a.resolve(void 0);
        n = function() {
          l.then(c)
        }
      } else n = function() {
        o.call(r, c)
      };
    else {
      var f = !0,
        h = document.createTextNode("");
      new i(c).observe(h, {
        characterData: !0
      }), n = function() {
        h.data = f = !f
      }
    }
    return function(r) {
      var o = {
        fn: r,
        next: void 0
      };
      e && (e.next = o), t || (t = o, n()), e = o
    }
  }
}, function(t, e) {
  t.exports = function(t) {
    try {
      return {
        e: !1,
        v: t()
      }
    } catch (t) {
      return {
        e: !0,
        v: t
      }
    }
  }
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(29),
    i = n(1),
    s = n(49),
    a = n(111);
  r(r.P + r.R, "Promise", {
    finally: function(t) {
      var e = s(this, o.Promise || i.Promise),
        n = "function" == typeof t;
      return this.then(n ? function(n) {
        return a(e, t()).then(function() {
          return n
        })
      } : t, n ? function(n) {
        return a(e, t()).then(function() {
          throw n
        })
      } : t)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(17),
    i = n(3),
    s = (n(1).Reflect || {}).apply,
    a = Function.apply;
  r(r.S + r.F * !n(4)(function() {
    s(function() {})
  }), "Reflect", {
    apply: function(t, e, n) {
      var r = o(t),
        u = i(n);
      return s ? s(r, e, u) : a.call(r, e, u)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(36),
    i = n(17),
    s = n(3),
    a = n(2),
    u = n(4),
    c = n(100),
    l = (n(1).Reflect || {}).construct,
    f = u(function() {
      function t() {}
      return !(l(function() {}, [], t) instanceof t)
    }),
    h = !u(function() {
      l(function() {})
    });
  r(r.S + r.F * (f || h), "Reflect", {
    construct: function(t, e) {
      i(t), s(e);
      var n = arguments.length < 3 ? t : i(arguments[2]);
      if (h && !f) return l(t, e, n);
      if (t == n) {
        switch (e.length) {
          case 0:
            return new t;
          case 1:
            return new t(e[0]);
          case 2:
            return new t(e[0], e[1]);
          case 3:
            return new t(e[0], e[1], e[2]);
          case 4:
            return new t(e[0], e[1], e[2], e[3])
        }
        var r = [null];
        return r.push.apply(r, e), new(c.apply(t, r))
      }
      var u = n.prototype,
        p = o(a(u) ? u : Object.prototype),
        d = Function.apply.call(t, p, e);
      return a(d) ? d : p
    }
  })
}, function(t, e, n) {
  var r = n(7),
    o = n(0),
    i = n(3),
    s = n(20);
  o(o.S + o.F * n(4)(function() {
    Reflect.defineProperty(r.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    })
  }), "Reflect", {
    defineProperty: function(t, e, n) {
      i(t), e = s(e, !0), i(n);
      try {
        return r.f(t, e, n), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(18).f,
    i = n(3);
  r(r.S, "Reflect", {
    deleteProperty: function(t, e) {
      var n = o(i(t), e);
      return !(n && !n.configurable) && delete t[e]
    }
  })
}, function(t, e, n) {
  var r = n(18),
    o = n(27),
    i = n(16),
    s = n(0),
    a = n(2),
    u = n(3);
  s(s.S, "Reflect", {
    get: function t(e, n) {
      var s, c, l = arguments.length < 3 ? e : arguments[2];
      return u(e) === l ? e[n] : (s = r.f(e, n)) ? i(s, "value") ? s.value : void 0 !== s.get ? s.get.call(l) : void 0 : a(c = o(e)) ? t(c, n, l) : void 0
    }
  })
}, function(t, e, n) {
  var r = n(18),
    o = n(0),
    i = n(3);
  o(o.S, "Reflect", {
    getOwnPropertyDescriptor: function(t, e) {
      return r.f(i(t), e)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(27),
    i = n(3);
  r(r.S, "Reflect", {
    getPrototypeOf: function(t) {
      return o(i(t))
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Reflect", {
    has: function(t, e) {
      return e in t
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(3),
    i = Object.isExtensible;
  r(r.S, "Reflect", {
    isExtensible: function(t) {
      return o(t), !i || i(t)
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.S, "Reflect", {
    ownKeys: n(107)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(3),
    i = Object.preventExtensions;
  r(r.S, "Reflect", {
    preventExtensions: function(t) {
      o(t);
      try {
        return i && i(t), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  var r = n(7),
    o = n(18),
    i = n(27),
    s = n(16),
    a = n(0),
    u = n(32),
    c = n(3),
    l = n(2);
  a(a.S, "Reflect", {
    set: function t(e, n, a) {
      var f, h, p = arguments.length < 4 ? e : arguments[3],
        d = o.f(c(e), n);
      if (!d) {
        if (l(h = i(e))) return t(h, n, a, p);
        d = u(0)
      }
      if (s(d, "value")) {
        if (!1 === d.writable || !l(p)) return !1;
        if (f = o.f(p, n)) {
          if (f.get || f.set || !1 === f.writable) return !1;
          f.value = a, r.f(p, n, f)
        } else r.f(p, n, u(0, a));
        return !0
      }
      return void 0 !== d.set && (d.set.call(p, a), !0)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(76);
  o && r(r.S, "Reflect", {
    setPrototypeOf: function(t, e) {
      o.check(t, e);
      try {
        return o.set(t, e), !0
      } catch (t) {
        return !1
      }
    }
  })
}, function(t, e, n) {
  var r = n(1),
    o = n(75),
    i = n(7).f,
    s = n(39).f,
    a = n(81),
    u = n(60),
    c = r.RegExp,
    l = c,
    f = c.prototype,
    h = /a/g,
    p = /a/g,
    d = new c(h) !== h;
  if (n(6) && (!d || n(4)(function() {
      return p[n(5)("match")] = !1, c(h) != h || c(p) == p || "/a/i" != c(h, "i")
    }))) {
    c = function(t, e) {
      var n = this instanceof c,
        r = a(t),
        i = void 0 === e;
      return !n && r && t.constructor === c && i ? t : o(d ? new l(r && !i ? t.source : t, e) : l((r = t instanceof c) ? t.source : t, r && i ? u.call(t) : e), n ? this : f, c)
    };
    for (var y = function(t) {
        t in c || i(c, t, {
          configurable: !0,
          get: function() {
            return l[t]
          },
          set: function(e) {
            l[t] = e
          }
        })
      }, v = s(l), m = 0; v.length > m;) y(v[m++]);
    f.constructor = c, c.prototype = f, n(12)(r, "RegExp", c)
  }
  n(43)("RegExp")
}, function(t, e, n) {
  "use strict";
  var r = n(3),
    o = n(8),
    i = n(82),
    s = n(61);
  n(62)("match", 1, function(t, e, n, a) {
    return [function(n) {
      var r = t(this),
        o = null == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
    }, function(t) {
      var e = a(n, t, this);
      if (e.done) return e.value;
      var u = r(t),
        c = String(this);
      if (!u.global) return s(u, c);
      var l = u.unicode;
      u.lastIndex = 0;
      for (var f, h = [], p = 0; null !== (f = s(u, c));) {
        var d = String(f[0]);
        h[p] = d, "" === d && (u.lastIndex = i(c, o(u.lastIndex), l)), p++
      }
      return 0 === p ? null : h
    }]
  })
}, function(t, e, n) {
  "use strict";
  var r = n(84);
  n(0)({
    target: "RegExp",
    proto: !0,
    forced: r !== /./.exec
  }, {
    exec: r
  })
}, function(t, e, n) {
  "use strict";
  var r = n(3),
    o = n(9),
    i = n(8),
    s = n(26),
    a = n(82),
    u = n(61),
    c = Math.max,
    l = Math.min,
    f = Math.floor,
    h = /\$([$&`']|\d\d?|<[^>]*>)/g,
    p = /\$([$&`']|\d\d?)/g;
  n(62)("replace", 2, function(t, e, n, d) {
    return [function(r, o) {
      var i = t(this),
        s = null == r ? void 0 : r[e];
      return void 0 !== s ? s.call(r, i, o) : n.call(String(i), r, o)
    }, function(t, e) {
      var o = d(n, t, this, e);
      if (o.done) return o.value;
      var f = r(t),
        h = String(this),
        p = "function" == typeof e;
      p || (e = String(e));
      var v = f.global;
      if (v) {
        var m = f.unicode;
        f.lastIndex = 0
      }
      for (var b = [];;) {
        var g = u(f, h);
        if (null === g) break;
        if (b.push(g), !v) break;
        "" === String(g[0]) && (f.lastIndex = a(h, i(f.lastIndex), m))
      }
      for (var _, w = "", S = 0, E = 0; E < b.length; E++) {
        g = b[E];
        for (var x = String(g[0]), O = c(l(s(g.index), h.length), 0), T = [], C = 1; C < g.length; C++) T.push(void 0 === (_ = g[C]) ? _ : String(_));
        var N = g.groups;
        if (p) {
          var k = [x].concat(T, O, h);
          void 0 !== N && k.push(N);
          var A = String(e.apply(void 0, k))
        } else A = y(x, h, O, T, N, e);
        O >= S && (w += h.slice(S, O) + A, S = O + x.length)
      }
      return w + h.slice(S)
    }];

    function y(t, e, r, i, s, a) {
      var u = r + t.length,
        c = i.length,
        l = p;
      return void 0 !== s && (s = o(s), l = h), n.call(a, l, function(n, o) {
        var a;
        switch (o.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return t;
          case "`":
            return e.slice(0, r);
          case "'":
            return e.slice(u);
          case "<":
            a = s[o.slice(1, -1)];
            break;
          default:
            var l = +o;
            if (0 === l) return n;
            if (l > c) {
              var h = f(l / 10);
              return 0 === h ? n : h <= c ? void 0 === i[h - 1] ? o.charAt(1) : i[h - 1] + o.charAt(1) : n
            }
            a = i[l - 1]
        }
        return void 0 === a ? "" : a
      })
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(81),
    o = n(3),
    i = n(49),
    s = n(82),
    a = n(8),
    u = n(61),
    c = n(84),
    l = n(4),
    f = Math.min,
    h = [].push,
    p = !l(function() {
      RegExp(4294967295, "y")
    });
  n(62)("split", 2, function(t, e, n, l) {
    var d;
    return d = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function(t, e) {
      var o = String(this);
      if (void 0 === t && 0 === e) return [];
      if (!r(t)) return n.call(o, t, e);
      for (var i, s, a, u = [], l = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""), f = 0, p = void 0 === e ? 4294967295 : e >>> 0, d = new RegExp(t.source, l + "g");
        (i = c.call(d, o)) && !((s = d.lastIndex) > f && (u.push(o.slice(f, i.index)), i.length > 1 && i.index < o.length && h.apply(u, i.slice(1)), a = i[0].length, f = s, u.length >= p));) d.lastIndex === i.index && d.lastIndex++;
      return f === o.length ? !a && d.test("") || u.push("") : u.push(o.slice(f)), u.length > p ? u.slice(0, p) : u
    } : "0".split(void 0, 0).length ? function(t, e) {
      return void 0 === t && 0 === e ? [] : n.call(this, t, e)
    } : n, [function(n, r) {
      var o = t(this),
        i = null == n ? void 0 : n[e];
      return void 0 !== i ? i.call(n, o, r) : d.call(String(o), n, r)
    }, function(t, e) {
      var r = l(d, t, this, e, d !== n);
      if (r.done) return r.value;
      var c = o(t),
        h = String(this),
        y = i(c, RegExp),
        v = c.unicode,
        m = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (p ? "y" : "g"),
        b = new y(p ? c : "^(?:" + c.source + ")", m),
        g = void 0 === e ? 4294967295 : e >>> 0;
      if (0 === g) return [];
      if (0 === h.length) return null === u(b, h) ? [h] : [];
      for (var _ = 0, w = 0, S = []; w < h.length;) {
        b.lastIndex = p ? w : 0;
        var E, x = u(b, p ? h : h.slice(w));
        if (null === x || (E = f(a(b.lastIndex + (p ? 0 : w)), h.length)) === _) w = s(h, w, v);
        else {
          if (S.push(h.slice(_, w)), S.length === g) return S;
          for (var O = 1; O <= x.length - 1; O++)
            if (S.push(x[O]), S.length === g) return S;
          w = _ = E
        }
      }
      return S.push(h.slice(_)), S
    }]
  })
}, function(t, e, n) {
  "use strict";
  var r = n(3),
    o = n(109),
    i = n(61);
  n(62)("search", 1, function(t, e, n, s) {
    return [function(n) {
      var r = t(this),
        o = null == n ? void 0 : n[e];
      return void 0 !== o ? o.call(n, r) : new RegExp(n)[e](String(r))
    }, function(t) {
      var e = s(n, t, this);
      if (e.done) return e.value;
      var a = r(t),
        u = String(this),
        c = a.lastIndex;
      o(c, 0) || (a.lastIndex = 0);
      var l = i(a, u);
      return o(a.lastIndex, c) || (a.lastIndex = c), null === l ? -1 : l.index
    }]
  })
}, function(t, e, n) {
  "use strict";
  n(112);
  var r = n(3),
    o = n(60),
    i = n(6),
    s = /./.toString,
    a = function(t) {
      n(12)(RegExp.prototype, "toString", t, !0)
    };
  n(4)(function() {
    return "/a/b" != s.call({
      source: "a",
      flags: "b"
    })
  }) ? a(function() {
    var t = r(this);
    return "/".concat(t.source, "/", "flags" in t ? t.flags : !i && t instanceof RegExp ? o.call(t) : void 0)
  }) : "toString" != s.name && a(function() {
    return s.call(this)
  })
}, function(t, e, n) {
  "use strict";
  var r = n(102),
    o = n(38);
  t.exports = n(56)("Set", function(t) {
    return function() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function(t) {
      return r.def(o(this, "Set"), t = 0 === t ? 0 : t, t)
    }
  }, r)
}, function(t, e, n) {
  "use strict";

  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(1),
    i = n(16),
    s = n(6),
    a = n(0),
    u = n(12),
    c = n(31).KEY,
    l = n(4),
    f = n(50),
    h = n(42),
    p = n(33),
    d = n(5),
    y = n(113),
    v = n(114),
    m = n(237),
    b = n(52),
    g = n(3),
    _ = n(2),
    w = n(9),
    S = n(19),
    E = n(20),
    x = n(32),
    O = n(36),
    T = n(108),
    C = n(18),
    N = n(57),
    k = n(7),
    A = n(37),
    M = C.f,
    j = k.f,
    P = T.f,
    R = o.Symbol,
    I = o.JSON,
    L = I && I.stringify,
    D = d("_hidden"),
    F = d("toPrimitive"),
    H = {}.propertyIsEnumerable,
    q = f("symbol-registry"),
    B = f("symbols"),
    U = f("op-symbols"),
    z = Object.prototype,
    W = "function" == typeof R && !!N.f,
    V = o.QObject,
    X = !V || !V.prototype || !V.prototype.findChild,
    $ = s && l(function() {
      return 7 != O(j({}, "a", {
        get: function() {
          return j(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function(t, e, n) {
      var r = M(z, e);
      r && delete z[e], j(t, e, n), r && t !== z && j(z, e, r)
    } : j,
    G = function(t) {
      var e = B[t] = O(R.prototype);
      return e._k = t, e
    },
    Y = W && "symbol" == r(R.iterator) ? function(t) {
      return "symbol" == r(t)
    } : function(t) {
      return t instanceof R
    },
    K = function(t, e, n) {
      return t === z && K(U, e, n), g(t), e = E(e, !0), g(n), i(B, e) ? (n.enumerable ? (i(t, D) && t[D][e] && (t[D][e] = !1), n = O(n, {
        enumerable: x(0, !1)
      })) : (i(t, D) || j(t, D, x(1, {})), t[D][e] = !0), $(t, e, n)) : j(t, e, n)
    },
    J = function(t, e) {
      g(t);
      for (var n, r = m(e = S(e)), o = 0, i = r.length; i > o;) K(t, n = r[o++], e[n]);
      return t
    },
    Z = function(t) {
      var e = H.call(this, t = E(t, !0));
      return !(this === z && i(B, t) && !i(U, t)) && (!(e || !i(this, t) || !i(B, t) || i(this, D) && this[D][t]) || e)
    },
    Q = function(t, e) {
      if (t = S(t), e = E(e, !0), t !== z || !i(B, e) || i(U, e)) {
        var n = M(t, e);
        return !n || !i(B, e) || i(t, D) && t[D][e] || (n.enumerable = !0), n
      }
    },
    tt = function(t) {
      for (var e, n = P(S(t)), r = [], o = 0; n.length > o;) i(B, e = n[o++]) || e == D || e == c || r.push(e);
      return r
    },
    et = function(t) {
      for (var e, n = t === z, r = P(n ? U : S(t)), o = [], s = 0; r.length > s;) !i(B, e = r[s++]) || n && !i(z, e) || o.push(B[e]);
      return o
    };
  W || (u((R = function() {
    if (this instanceof R) throw TypeError("Symbol is not a constructor!");
    var t = p(arguments.length > 0 ? arguments[0] : void 0),
      e = function e(n) {
        this === z && e.call(U, n), i(this, D) && i(this[D], t) && (this[D][t] = !1), $(this, t, x(1, n))
      };
    return s && X && $(z, t, {
      configurable: !0,
      set: e
    }), G(t)
  }).prototype, "toString", function() {
    return this._k
  }), C.f = Q, k.f = K, n(39).f = T.f = tt, n(48).f = Z, N.f = et, s && !n(30) && u(z, "propertyIsEnumerable", Z, !0), y.f = function(t) {
    return G(d(t))
  }), a(a.G + a.W + a.F * !W, {
    Symbol: R
  });
  for (var nt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), rt = 0; nt.length > rt;) d(nt[rt++]);
  for (var ot = A(d.store), it = 0; ot.length > it;) v(ot[it++]);
  a(a.S + a.F * !W, "Symbol", {
    for: function(t) {
      return i(q, t += "") ? q[t] : q[t] = R(t)
    },
    keyFor: function(t) {
      if (!Y(t)) throw TypeError(t + " is not a symbol!");
      for (var e in q)
        if (q[e] === t) return e
    },
    useSetter: function() {
      X = !0
    },
    useSimple: function() {
      X = !1
    }
  }), a(a.S + a.F * !W, "Object", {
    create: function(t, e) {
      return void 0 === e ? O(t) : J(O(t), e)
    },
    defineProperty: K,
    defineProperties: J,
    getOwnPropertyDescriptor: Q,
    getOwnPropertyNames: tt,
    getOwnPropertySymbols: et
  });
  var st = l(function() {
    N.f(1)
  });
  a(a.S + a.F * st, "Object", {
    getOwnPropertySymbols: function(t) {
      return N.f(w(t))
    }
  }), I && a(a.S + a.F * (!W || l(function() {
    var t = R();
    return "[null]" != L([t]) || "{}" != L({
      a: t
    }) || "{}" != L(Object(t))
  })), "JSON", {
    stringify: function(t) {
      for (var e, n, r = [t], o = 1; arguments.length > o;) r.push(arguments[o++]);
      if (n = e = r[1], (_(e) || void 0 !== t) && !Y(t)) return b(e) || (e = function(t, e) {
        if ("function" == typeof n && (e = n.call(this, t, e)), !Y(e)) return e
      }), r[1] = e, L.apply(I, r)
    }
  }), R.prototype[F] || n(15)(R.prototype, F, R.prototype.valueOf), h(R, "Symbol"), h(Math, "Math", !0), h(o.JSON, "JSON", !0)
}, function(t, e, n) {
  var r = n(37),
    o = n(57),
    i = n(48);
  t.exports = function(t) {
    var e = r(t),
      n = o.f;
    if (n)
      for (var s, a = n(t), u = i.f, c = 0; a.length > c;) u.call(t, s = a[c++]) && e.push(s);
    return e
  }
}, function(t, e, n) {
  n(114)("asyncIterator")
}, function(t, e, n) {
  "use strict";
  n(13)("anchor", function(t) {
    return function(e) {
      return t(this, "a", "name", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("big", function(t) {
    return function() {
      return t(this, "big", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("blink", function(t) {
    return function() {
      return t(this, "blink", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("bold", function(t) {
    return function() {
      return t(this, "b", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(83)(!1);
  r(r.P, "String", {
    codePointAt: function(t) {
      return o(this, t)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(8),
    i = n(85),
    s = "".endsWith;
  r(r.P + r.F * n(86)("endsWith"), "String", {
    endsWith: function(t) {
      var e = i(this, t, "endsWith"),
        n = arguments.length > 1 ? arguments[1] : void 0,
        r = o(e.length),
        a = void 0 === n ? r : Math.min(o(n), r),
        u = String(t);
      return s ? s.call(e, u, a) : e.slice(a - u.length, a) === u
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("fixed", function(t) {
    return function() {
      return t(this, "tt", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("fontcolor", function(t) {
    return function(e) {
      return t(this, "font", "color", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("fontsize", function(t) {
    return function(e) {
      return t(this, "font", "size", e)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(40),
    i = String.fromCharCode,
    s = String.fromCodePoint;
  r(r.S + r.F * (!!s && 1 != s.length), "String", {
    fromCodePoint: function(t) {
      for (var e, n = [], r = arguments.length, s = 0; r > s;) {
        if (e = +arguments[s++], o(e, 1114111) !== e) throw RangeError(e + " is not a valid code point");
        n.push(e < 65536 ? i(e) : i(55296 + ((e -= 65536) >> 10), e % 1024 + 56320))
      }
      return n.join("")
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(85);
  r(r.P + r.F * n(86)("includes"), "String", {
    includes: function(t) {
      return !!~o(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("italics", function(t) {
    return function() {
      return t(this, "i", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(83)(!0);
  n(72)(String, "String", function(t) {
    this._t = String(t), this._i = 0
  }, function() {
    var t, e = this._t,
      n = this._i;
    return n >= e.length ? {
      value: void 0,
      done: !0
    } : (t = r(e, n), this._i += t.length, {
      value: t,
      done: !1
    })
  })
}, function(t, e, n) {
  "use strict";
  n(13)("link", function(t) {
    return function(e) {
      return t(this, "a", "href", e)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(115),
    i = n(59),
    s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
  r(r.P + r.F * s, "String", {
    padStart: function(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(115),
    i = n(59),
    s = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(i);
  r(r.P + r.F * s, "String", {
    padEnd: function(t) {
      return o(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
    }
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(19),
    i = n(8);
  r(r.S, "String", {
    raw: function(t) {
      for (var e = o(t.raw), n = i(e.length), r = arguments.length, s = [], a = 0; n > a;) s.push(String(e[a++])), a < r && s.push(String(arguments[a]));
      return s.join("")
    }
  })
}, function(t, e, n) {
  var r = n(0);
  r(r.P, "String", {
    repeat: n(116)
  })
}, function(t, e, n) {
  "use strict";
  n(13)("small", function(t) {
    return function() {
      return t(this, "small", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(8),
    i = n(85),
    s = "".startsWith;
  r(r.P + r.F * n(86)("startsWith"), "String", {
    startsWith: function(t) {
      var e = i(this, t, "startsWith"),
        n = o(Math.min(arguments.length > 1 ? arguments[1] : void 0, e.length)),
        r = String(t);
      return s ? s.call(e, r, n) : e.slice(n, n + r.length) === r
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("strike", function(t) {
    return function() {
      return t(this, "strike", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("sub", function(t) {
    return function() {
      return t(this, "sub", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(13)("sup", function(t) {
    return function() {
      return t(this, "sup", "", "")
    }
  })
}, function(t, e, n) {
  "use strict";
  n(46)("trim", function(t) {
    return function() {
      return t(this, 3)
    }
  })
}, function(t, e, n) {
  "use strict";
  n(46)("trimLeft", function(t) {
    return function() {
      return t(this, 1)
    }
  }, "trimStart")
}, function(t, e, n) {
  "use strict";
  n(46)("trimRight", function(t) {
    return function() {
      return t(this, 2)
    }
  }, "trimEnd")
}, function(t, e, n) {
  "use strict";
  var r = n(0),
    o = n(63),
    i = n(87),
    s = n(3),
    a = n(40),
    u = n(8),
    c = n(2),
    l = n(1).ArrayBuffer,
    f = n(49),
    h = i.ArrayBuffer,
    p = i.DataView,
    d = o.ABV && l.isView,
    y = h.prototype.slice,
    v = o.VIEW;
  r(r.G + r.W + r.F * (l !== h), {
    ArrayBuffer: h
  }), r(r.S + r.F * !o.CONSTR, "ArrayBuffer", {
    isView: function(t) {
      return d && d(t) || c(t) && v in t
    }
  }), r(r.P + r.U + r.F * n(4)(function() {
    return !new h(2).slice(1, void 0).byteLength
  }), "ArrayBuffer", {
    slice: function(t, e) {
      if (void 0 !== y && void 0 === e) return y.call(s(this), t);
      for (var n = s(this).byteLength, r = a(t, n), o = a(void 0 === e ? n : e, n), i = new(f(this, h))(u(o - r)), c = new p(this), l = new p(i), d = 0; r < o;) l.setUint8(d++, c.getUint8(r++));
      return i
    }
  }), n(43)("ArrayBuffer")
}, function(t, e, n) {
  var r = n(0);
  r(r.G + r.W + r.F * !n(63).ABV, {
    DataView: n(87).DataView
  })
}, function(t, e, n) {
  n(28)("Int8", 1, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Uint8", 1, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Uint8", 1, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  }, !0)
}, function(t, e, n) {
  n(28)("Int16", 2, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Uint16", 2, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Int32", 4, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Uint32", 4, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Float32", 4, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  n(28)("Float64", 8, function(t) {
    return function(e, n, r) {
      return t(this, e, n, r)
    }
  })
}, function(t, e, n) {
  "use strict";
  var r, o = n(1),
    i = n(22)(0),
    s = n(12),
    a = n(31),
    u = n(105),
    c = n(118),
    l = n(2),
    f = n(38),
    h = n(38),
    p = !o.ActiveXObject && "ActiveXObject" in o,
    d = a.getWeak,
    y = Object.isExtensible,
    v = c.ufstore,
    m = function(t) {
      return function() {
        return t(this, arguments.length > 0 ? arguments[0] : void 0)
      }
    },
    b = {
      get: function(t) {
        if (l(t)) {
          var e = d(t);
          return !0 === e ? v(f(this, "WeakMap")).get(t) : e ? e[this._i] : void 0
        }
      },
      set: function(t, e) {
        return c.def(f(this, "WeakMap"), t, e)
      }
    },
    g = t.exports = n(56)("WeakMap", m, b, c, !0, !0);
  h && p && (u((r = c.getConstructor(m, "WeakMap")).prototype, b), a.NEED = !0, i(["delete", "has", "get", "set"], function(t) {
    var e = g.prototype,
      n = e[t];
    s(e, t, function(e, o) {
      if (l(e) && !y(e)) {
        this._f || (this._f = new r);
        var i = this._f[t](e, o);
        return "set" == t ? this : i
      }
      return n.call(this, e, o)
    })
  }))
}, function(t, e, n) {
  "use strict";
  var r = n(118),
    o = n(38);
  n(56)("WeakSet", function(t) {
    return function() {
      return t(this, arguments.length > 0 ? arguments[0] : void 0)
    }
  }, {
    add: function(t) {
      return r.def(o(this, "WeakSet"), t, !0)
    }
  }, r, !1, !0)
}, function(t, e, n) {
  var r = n(1),
    o = n(0),
    i = n(59),
    s = [].slice,
    a = /MSIE .\./.test(i),
    u = function(t) {
      return function(e, n) {
        var r = arguments.length > 2,
          o = !!r && s.call(arguments, 2);
        return t(r ? function() {
          ("function" == typeof e ? e : Function(e)).apply(this, o)
        } : e, n)
      }
    };
  o(o.G + o.B + o.F * a, {
    setTimeout: u(r.setTimeout),
    setInterval: u(r.setInterval)
  })
}, function(t, e, n) {
  var r = n(0),
    o = n(80);
  r(r.G + r.B, {
    setImmediate: o.set,
    clearImmediate: o.clear
  })
}, function(t, e, n) {
  for (var r = n(71), o = n(37), i = n(12), s = n(1), a = n(15), u = n(41), c = n(5), l = c("iterator"), f = c("toStringTag"), h = u.Array, p = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    }, d = o(p), y = 0; y < d.length; y++) {
    var v, m = d[y],
      b = p[m],
      g = s[m],
      _ = g && g.prototype;
    if (_ && (_[l] || a(_, l, h), _[f] || a(_, f, m), u[m] = h, b))
      for (v in r) _[v] || i(_, v, r[v], !0)
  }
}, function(t, e, n) {
  (function(t) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }
    var n = function(t) {
      "use strict";
      var n, r = Object.prototype,
        o = r.hasOwnProperty,
        i = "function" == typeof Symbol ? Symbol : {},
        s = i.iterator || "@@iterator",
        a = i.asyncIterator || "@@asyncIterator",
        u = i.toStringTag || "@@toStringTag";

      function c(t, e, n, r) {
        var o = e && e.prototype instanceof v ? e : v,
          i = Object.create(o.prototype),
          s = new N(r || []);
        return i._invoke = function(t, e, n) {
          var r = f;
          return function(o, i) {
            if (r === p) throw new Error("Generator is already running");
            if (r === d) {
              if ("throw" === o) throw i;
              return A()
            }
            for (n.method = o, n.arg = i;;) {
              var s = n.delegate;
              if (s) {
                var a = O(s, n);
                if (a) {
                  if (a === y) continue;
                  return a
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if (r === f) throw r = d, n.arg;
                n.dispatchException(n.arg)
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = p;
              var u = l(t, e, n);
              if ("normal" === u.type) {
                if (r = n.done ? d : h, u.arg === y) continue;
                return {
                  value: u.arg,
                  done: n.done
                }
              }
              "throw" === u.type && (r = d, n.method = "throw", n.arg = u.arg)
            }
          }
        }(t, n, s), i
      }

      function l(t, e, n) {
        try {
          return {
            type: "normal",
            arg: t.call(e, n)
          }
        } catch (t) {
          return {
            type: "throw",
            arg: t
          }
        }
      }
      t.wrap = c;
      var f = "suspendedStart",
        h = "suspendedYield",
        p = "executing",
        d = "completed",
        y = {};

      function v() {}

      function m() {}

      function b() {}
      var g = {};
      g[s] = function() {
        return this
      };
      var _ = Object.getPrototypeOf,
        w = _ && _(_(k([])));
      w && w !== r && o.call(w, s) && (g = w);
      var S = b.prototype = v.prototype = Object.create(g);

      function E(t) {
        ["next", "throw", "return"].forEach(function(e) {
          t[e] = function(t) {
            return this._invoke(e, t)
          }
        })
      }

      function x(t) {
        var n;
        this._invoke = function(r, i) {
          function s() {
            return new Promise(function(n, s) {
              ! function n(r, i, s, a) {
                var u = l(t[r], t, i);
                if ("throw" !== u.type) {
                  var c = u.arg,
                    f = c.value;
                  return f && "object" === e(f) && o.call(f, "__await") ? Promise.resolve(f.__await).then(function(t) {
                    n("next", t, s, a)
                  }, function(t) {
                    n("throw", t, s, a)
                  }) : Promise.resolve(f).then(function(t) {
                    c.value = t, s(c)
                  }, function(t) {
                    return n("throw", t, s, a)
                  })
                }
                a(u.arg)
              }(r, i, n, s)
            })
          }
          return n = n ? n.then(s, s) : s()
        }
      }

      function O(t, e) {
        var r = t.iterator[e.method];
        if (r === n) {
          if (e.delegate = null, "throw" === e.method) {
            if (t.iterator.return && (e.method = "return", e.arg = n, O(t, e), "throw" === e.method)) return y;
            e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
          }
          return y
        }
        var o = l(r, t.iterator, e.arg);
        if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, y;
        var i = o.arg;
        return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = n), e.delegate = null, y) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, y)
      }

      function T(t) {
        var e = {
          tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
      }

      function C(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e
      }

      function N(t) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t.forEach(T, this), this.reset(!0)
      }

      function k(t) {
        if (t) {
          var e = t[s];
          if (e) return e.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              i = function e() {
                for (; ++r < t.length;)
                  if (o.call(t, r)) return e.value = t[r], e.done = !1, e;
                return e.value = n, e.done = !0, e
              };
            return i.next = i
          }
        }
        return {
          next: A
        }
      }

      function A() {
        return {
          value: n,
          done: !0
        }
      }
      return m.prototype = S.constructor = b, b.constructor = m, b[u] = m.displayName = "GeneratorFunction", t.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === m || "GeneratorFunction" === (e.displayName || e.name))
      }, t.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(S), t
      }, t.awrap = function(t) {
        return {
          __await: t
        }
      }, E(x.prototype), x.prototype[a] = function() {
        return this
      }, t.AsyncIterator = x, t.async = function(e, n, r, o) {
        var i = new x(c(e, n, r, o));
        return t.isGeneratorFunction(n) ? i : i.next().then(function(t) {
          return t.done ? t.value : i.next()
        })
      }, E(S), S[u] = "Generator", S[s] = function() {
        return this
      }, S.toString = function() {
        return "[object Generator]"
      }, t.keys = function(t) {
        var e = [];
        for (var n in t) e.push(n);
        return e.reverse(),
          function n() {
            for (; e.length;) {
              var r = e.pop();
              if (r in t) return n.value = r, n.done = !1, n
            }
            return n.done = !0, n
          }
      }, t.values = k, N.prototype = {
        constructor: N,
        reset: function(t) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = n, this.done = !1, this.delegate = null, this.method = "next", this.arg = n, this.tryEntries.forEach(C), !t)
            for (var e in this) "t" === e.charAt(0) && o.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = n)
        },
        stop: function() {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval
        },
        dispatchException: function(t) {
          if (this.done) throw t;
          var e = this;

          function r(r, o) {
            return a.type = "throw", a.arg = t, e.next = r, o && (e.method = "next", e.arg = n), !!o
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
              a = s.completion;
            if ("root" === s.tryLoc) return r("end");
            if (s.tryLoc <= this.prev) {
              var u = o.call(s, "catchLoc"),
                c = o.call(s, "finallyLoc");
              if (u && c) {
                if (this.prev < s.catchLoc) return r(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
              } else if (u) {
                if (this.prev < s.catchLoc) return r(s.catchLoc, !0)
              } else {
                if (!c) throw new Error("try statement without catch or finally");
                if (this.prev < s.finallyLoc) return r(s.finallyLoc)
              }
            }
          }
        },
        abrupt: function(t, e) {
          for (var n = this.tryEntries.length - 1; n >= 0; --n) {
            var r = this.tryEntries[n];
            if (r.tryLoc <= this.prev && o.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
              var i = r;
              break
            }
          }
          i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
          var s = i ? i.completion : {};
          return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(s)
        },
        complete: function(t, e) {
          if ("throw" === t.type) throw t.arg;
          return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
        },
        finish: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), y
          }
        },
        catch: function(t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (n.tryLoc === t) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                C(n)
              }
              return o
            }
          }
          throw new Error("illegal catch attempt")
        },
        delegateYield: function(t, e, r) {
          return this.delegate = {
            iterator: k(t),
            resultName: e,
            nextLoc: r
          }, "next" === this.method && (this.arg = n), y
        }
      }, t
    }("object" === e(t) ? t.exports : {});
    try {
      regeneratorRuntime = n
    } catch (t) {
      Function("r", "regeneratorRuntime = r")(n)
    }
  }).call(this, n(282)(t))
}, function(t, e) {
  t.exports = function(t) {
    return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
      enumerable: !0,
      get: function() {
        return t.l
      }
    }), Object.defineProperty(t, "id", {
      enumerable: !0,
      get: function() {
        return t.i
      }
    }), t.webpackPolyfill = 1), t
  }
}, function(t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }! function() {
    "use strict";
    if ("object" === ("undefined" == typeof window ? "undefined" : n(window)))
      if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
          return this.intersectionRatio > 0
        }
      });
      else {
        var t = window.document,
          e = [];
        o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.USE_MUTATION_OBSERVER = !0, o.prototype.observe = function(t) {
          if (!this._observationTargets.some(function(e) {
              return e.element == t
            })) {
            if (!t || 1 != t.nodeType) throw new Error("target must be an Element");
            this._registerInstance(), this._observationTargets.push({
              element: t,
              entry: null
            }), this._monitorIntersections(), this._checkForIntersections()
          }
        }, o.prototype.unobserve = function(t) {
          this._observationTargets = this._observationTargets.filter(function(e) {
            return e.element != t
          }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
        }, o.prototype.disconnect = function() {
          this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
        }, o.prototype.takeRecords = function() {
          var t = this._queuedEntries.slice();
          return this._queuedEntries = [], t
        }, o.prototype._initThresholds = function(t) {
          var e = t || [0];
          return Array.isArray(e) || (e = [e]), e.sort().filter(function(t, e, n) {
            if ("number" != typeof t || isNaN(t) || t < 0 || t > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
            return t !== n[e - 1]
          })
        }, o.prototype._parseRootMargin = function(t) {
          var e = (t || "0px").split(/\s+/).map(function(t) {
            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
            if (!e) throw new Error("rootMargin must be specified in pixels or percent");
            return {
              value: parseFloat(e[1]),
              unit: e[2]
            }
          });
          return e[1] = e[1] || e[0], e[2] = e[2] || e[0], e[3] = e[3] || e[1], e
        }, o.prototype._monitorIntersections = function() {
          this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
          }))))
        }, o.prototype._unmonitorIntersections = function() {
          this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, s(window, "resize", this._checkForIntersections, !0), s(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
        }, o.prototype._checkForIntersections = function() {
          var t = this._rootIsInDom(),
            e = t ? this._getRootRect() : {
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: 0,
              height: 0
            };
          this._observationTargets.forEach(function(n) {
            var o = n.element,
              i = a(o),
              s = this._rootContainsTarget(o),
              u = n.entry,
              c = t && s && this._computeTargetAndRootIntersection(o, e),
              l = n.entry = new r({
                time: window.performance && performance.now && performance.now(),
                target: o,
                boundingClientRect: i,
                rootBounds: e,
                intersectionRect: c
              });
            u ? t && s ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
          }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
        }, o.prototype._computeTargetAndRootIntersection = function(e, n) {
          if ("none" != window.getComputedStyle(e).display) {
            for (var r, o, i, s, u, l, f, h, p = a(e), d = c(e), y = !1; !y;) {
              var v = null,
                m = 1 == d.nodeType ? window.getComputedStyle(d) : {};
              if ("none" == m.display) return;
              if (d == this.root || d == t ? (y = !0, v = n) : d != t.body && d != t.documentElement && "visible" != m.overflow && (v = a(d)), v && (r = v, o = p, i = void 0, s = void 0, u = void 0, l = void 0, f = void 0, h = void 0, i = Math.max(r.top, o.top), s = Math.min(r.bottom, o.bottom), u = Math.max(r.left, o.left), l = Math.min(r.right, o.right), h = s - i, !(p = (f = l - u) >= 0 && h >= 0 && {
                  top: i,
                  bottom: s,
                  left: u,
                  right: l,
                  width: f,
                  height: h
                }))) break;
              d = c(d)
            }
            return p
          }
        }, o.prototype._getRootRect = function() {
          var e;
          if (this.root) e = a(this.root);
          else {
            var n = t.documentElement,
              r = t.body;
            e = {
              top: 0,
              left: 0,
              right: n.clientWidth || r.clientWidth,
              width: n.clientWidth || r.clientWidth,
              bottom: n.clientHeight || r.clientHeight,
              height: n.clientHeight || r.clientHeight
            }
          }
          return this._expandRectByRootMargin(e)
        }, o.prototype._expandRectByRootMargin = function(t) {
          var e = this._rootMarginValues.map(function(e, n) {
              return "px" == e.unit ? e.value : e.value * (n % 2 ? t.width : t.height) / 100
            }),
            n = {
              top: t.top - e[0],
              right: t.right + e[1],
              bottom: t.bottom + e[2],
              left: t.left - e[3]
            };
          return n.width = n.right - n.left, n.height = n.bottom - n.top, n
        }, o.prototype._hasCrossedThreshold = function(t, e) {
          var n = t && t.isIntersecting ? t.intersectionRatio || 0 : -1,
            r = e.isIntersecting ? e.intersectionRatio || 0 : -1;
          if (n !== r)
            for (var o = 0; o < this.thresholds.length; o++) {
              var i = this.thresholds[o];
              if (i == n || i == r || i < n != i < r) return !0
            }
        }, o.prototype._rootIsInDom = function() {
          return !this.root || u(t, this.root)
        }, o.prototype._rootContainsTarget = function(e) {
          return u(this.root || t, e)
        }, o.prototype._registerInstance = function() {
          e.indexOf(this) < 0 && e.push(this)
        }, o.prototype._unregisterInstance = function() {
          var t = e.indexOf(this); - 1 != t && e.splice(t, 1)
        }, window.IntersectionObserver = o, window.IntersectionObserverEntry = r
      }
    function r(t) {
      this.time = t.time, this.target = t.target, this.rootBounds = t.rootBounds, this.boundingClientRect = t.boundingClientRect, this.intersectionRect = t.intersectionRect || {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      }, this.isIntersecting = !!t.intersectionRect;
      var e = this.boundingClientRect,
        n = e.width * e.height,
        r = this.intersectionRect,
        o = r.width * r.height;
      this.intersectionRatio = n ? Number((o / n).toFixed(4)) : this.isIntersecting ? 1 : 0
    }

    function o(t, e) {
      var n, r, o, i = e || {};
      if ("function" != typeof t) throw new Error("callback must be a function");
      if (i.root && 1 != i.root.nodeType) throw new Error("root must be an Element");
      this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, o = null, function() {
        o || (o = setTimeout(function() {
          n(), o = null
        }, r))
      }), this._callback = t, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(i.rootMargin), this.thresholds = this._initThresholds(i.threshold), this.root = i.root || null, this.rootMargin = this._rootMarginValues.map(function(t) {
        return t.value + t.unit
      }).join(" ")
    }

    function i(t, e, n, r) {
      "function" == typeof t.addEventListener ? t.addEventListener(e, n, r || !1) : "function" == typeof t.attachEvent && t.attachEvent("on" + e, n)
    }

    function s(t, e, n, r) {
      "function" == typeof t.removeEventListener ? t.removeEventListener(e, n, r || !1) : "function" == typeof t.detatchEvent && t.detatchEvent("on" + e, n)
    }

    function a(t) {
      var e;
      try {
        e = t.getBoundingClientRect()
      } catch (t) {}
      return e ? (e.width && e.height || (e = {
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        width: e.right - e.left,
        height: e.bottom - e.top
      }), e) : {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      }
    }

    function u(t, e) {
      for (var n = e; n;) {
        if (n == t) return !0;
        n = c(n)
      }
      return !1
    }

    function c(t) {
      var e = t.parentNode;
      return e && 11 == e.nodeType && e.host ? e.host : e && e.assignedSlot ? e.assignedSlot.parentNode : e
    }
  }()
}, function(t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var r, o;
  o = {},
    function(t, e) {
      function n() {
        this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = h
      }

      function r() {
        return t.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0)
      }

      function o(e, r, o) {
        var i = new n;
        return r && (i.fill = "both", i.duration = "auto"), "number" != typeof e || isNaN(e) ? void 0 !== e && Object.getOwnPropertyNames(e).forEach(function(n) {
          if ("auto" != e[n]) {
            if (("number" == typeof i[n] || "duration" == n) && ("number" != typeof e[n] || isNaN(e[n]))) return;
            if ("fill" == n && -1 == l.indexOf(e[n])) return;
            if ("direction" == n && -1 == f.indexOf(e[n])) return;
            if ("playbackRate" == n && 1 !== e[n] && t.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
            i[n] = e[n]
          }
        }) : i.duration = e, i
      }

      function i(t, e, n, r) {
        return t < 0 || t > 1 || n < 0 || n > 1 ? h : function(o) {
          function i(t, e, n) {
            return 3 * t * (1 - n) * (1 - n) * n + 3 * e * (1 - n) * n * n + n * n * n
          }
          if (o <= 0) {
            var s = 0;
            return t > 0 ? s = e / t : !e && n > 0 && (s = r / n), s * o
          }
          if (o >= 1) {
            var a = 0;
            return n < 1 ? a = (r - 1) / (n - 1) : 1 == n && t < 1 && (a = (e - 1) / (t - 1)), 1 + a * (o - 1)
          }
          for (var u = 0, c = 1; u < c;) {
            var l = (u + c) / 2,
              f = i(t, n, l);
            if (Math.abs(o - f) < 1e-5) return i(e, r, l);
            f < o ? u = l : c = l
          }
          return i(e, r, l)
        }
      }

      function s(t, e) {
        return function(n) {
          if (n >= 1) return 1;
          var r = 1 / t;
          return (n += e * r) - n % r
        }
      }

      function a(t) {
        m || (m = document.createElement("div").style), m.animationTimingFunction = "", m.animationTimingFunction = t;
        var e = m.animationTimingFunction;
        if ("" == e && r()) throw new TypeError(t + " is not a valid value for easing");
        return e
      }

      function u(t) {
        if ("linear" == t) return h;
        var e = g.exec(t);
        if (e) return i.apply(this, e.slice(1).map(Number));
        var n = _.exec(t);
        if (n) return s(Number(n[1]), y);
        var r = w.exec(t);
        return r ? s(Number(r[1]), {
          start: p,
          middle: d,
          end: y
        } [r[2]]) : v[t] || h
      }

      function c(t, e, n) {
        if (null == e) return S;
        var r = n.delay + t + n.endDelay;
        return e < Math.min(n.delay, r) ? E : e >= Math.min(n.delay + t, r) ? x : O
      }
      var l = "backwards|forwards|both|none".split("|"),
        f = "reverse|alternate|alternate-reverse".split("|"),
        h = function(t) {
          return t
        };
      n.prototype = {
        _setMember: function(e, n) {
          this["_" + e] = n, this._effect && (this._effect._timingInput[e] = n, this._effect._timing = t.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = t.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
        },
        get playbackRate() {
          return this._playbackRate
        },
        set delay(t) {
          this._setMember("delay", t)
        },
        get delay() {
          return this._delay
        },
        set endDelay(t) {
          this._setMember("endDelay", t)
        },
        get endDelay() {
          return this._endDelay
        },
        set fill(t) {
          this._setMember("fill", t)
        },
        get fill() {
          return this._fill
        },
        set iterationStart(t) {
          if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterationStart must be a non-negative number, received: " + t);
          this._setMember("iterationStart", t)
        },
        get iterationStart() {
          return this._iterationStart
        },
        set duration(t) {
          if ("auto" != t && (isNaN(t) || t < 0) && r()) throw new TypeError("duration must be non-negative or auto, received: " + t);
          this._setMember("duration", t)
        },
        get duration() {
          return this._duration
        },
        set direction(t) {
          this._setMember("direction", t)
        },
        get direction() {
          return this._direction
        },
        set easing(t) {
          this._easingFunction = u(a(t)), this._setMember("easing", t)
        },
        get easing() {
          return this._easing
        },
        set iterations(t) {
          if ((isNaN(t) || t < 0) && r()) throw new TypeError("iterations must be non-negative, received: " + t);
          this._setMember("iterations", t)
        },
        get iterations() {
          return this._iterations
        }
      };
      var p = 1,
        d = .5,
        y = 0,
        v = {
          ease: i(.25, .1, .25, 1),
          "ease-in": i(.42, 0, 1, 1),
          "ease-out": i(0, 0, .58, 1),
          "ease-in-out": i(.42, 0, .58, 1),
          "step-start": s(1, p),
          "step-middle": s(1, d),
          "step-end": s(1, y)
        },
        m = null,
        b = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
        g = new RegExp("cubic-bezier\\(" + b + "," + b + "," + b + "," + b + "\\)"),
        _ = /steps\(\s*(\d+)\s*\)/,
        w = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
        S = 0,
        E = 1,
        x = 2,
        O = 3;
      t.cloneTimingInput = function(t) {
        if ("number" == typeof t) return t;
        var e = {};
        for (var n in t) e[n] = t[n];
        return e
      }, t.makeTiming = o, t.numericTimingToObject = function(t) {
        return "number" == typeof t && (t = isNaN(t) ? {
          duration: 0
        } : {
          duration: t
        }), t
      }, t.normalizeTimingInput = function(e, n) {
        return o(e = t.numericTimingToObject(e), n)
      }, t.calculateActiveDuration = function(t) {
        return Math.abs(function(t) {
          return 0 === t.duration || 0 === t.iterations ? 0 : t.duration * t.iterations
        }(t) / t.playbackRate)
      }, t.calculateIterationProgress = function(t, e, n) {
        var r = c(t, e, n),
          o = function(t, e, n, r, o) {
            switch (r) {
              case E:
                return "backwards" == e || "both" == e ? 0 : null;
              case O:
                return n - o;
              case x:
                return "forwards" == e || "both" == e ? t : null;
              case S:
                return null
            }
          }(t, n.fill, e, r, n.delay);
        if (null === o) return null;
        var i = function(t, e, n, r, o) {
            var i = o;
            return 0 === t ? e !== E && (i += n) : i += r / t, i
          }(n.duration, r, n.iterations, o, n.iterationStart),
          s = function(t, e, n, r, o, i) {
            var s = t === 1 / 0 ? e % 1 : t % 1;
            return 0 !== s || n !== x || 0 === r || 0 === o && 0 !== i || (s = 1), s
          }(i, n.iterationStart, r, n.iterations, o, n.duration),
          a = function(t, e, n, r) {
            return t === x && e === 1 / 0 ? 1 / 0 : 1 === n ? Math.floor(r) - 1 : Math.floor(r)
          }(r, n.iterations, s, i),
          u = function(t, e, n) {
            var r = t;
            if ("normal" !== t && "reverse" !== t) {
              var o = e;
              "alternate-reverse" === t && (o += 1), r = "normal", o !== 1 / 0 && o % 2 != 0 && (r = "reverse")
            }
            return "normal" === r ? n : 1 - n
          }(n.direction, a, s);
        return n._easingFunction(u)
      }, t.calculatePhase = c, t.normalizeEasing = a, t.parseEasingFunction = u
    }(r = {}),
    function(t, e) {
      function n(t, e) {
        return t in u && u[t][e] || e
      }

      function r(t, e, r) {
        if (! function(t) {
            return "display" === t || 0 === t.lastIndexOf("animation", 0) || 0 === t.lastIndexOf("transition", 0)
          }(t)) {
          var o = i[t];
          if (o)
            for (var a in s.style[t] = e, o) {
              var u = o[a],
                c = s.style[u];
              r[u] = n(u, c)
            } else r[t] = n(t, e)
        }
      }

      function o(t) {
        var e = [];
        for (var n in t)
          if (!(n in ["easing", "offset", "composite"])) {
            var r = t[n];
            Array.isArray(r) || (r = [r]);
            for (var o, i = r.length, s = 0; s < i; s++)(o = {}).offset = "offset" in t ? t.offset : 1 == i ? 1 : s / (i - 1), "easing" in t && (o.easing = t.easing), "composite" in t && (o.composite = t.composite), o[n] = r[s], e.push(o)
          } return e.sort(function(t, e) {
          return t.offset - e.offset
        }), e
      }
      var i = {
          background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
          border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
          borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
          borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
          borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
          borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
          borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
          borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
          borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
          flex: ["flexGrow", "flexShrink", "flexBasis"],
          font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
          margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
          outline: ["outlineColor", "outlineStyle", "outlineWidth"],
          padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
        },
        s = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        a = {
          thin: "1px",
          medium: "3px",
          thick: "5px"
        },
        u = {
          borderBottomWidth: a,
          borderLeftWidth: a,
          borderRightWidth: a,
          borderTopWidth: a,
          fontSize: {
            "xx-small": "60%",
            "x-small": "75%",
            small: "89%",
            medium: "100%",
            large: "120%",
            "x-large": "150%",
            "xx-large": "200%"
          },
          fontWeight: {
            normal: "400",
            bold: "700"
          },
          outlineWidth: a,
          textShadow: {
            none: "0px 0px 0px transparent"
          },
          boxShadow: {
            none: "0px 0px 0px 0px transparent"
          }
        };
      t.convertToArrayForm = o, t.normalizeKeyframes = function(e) {
        if (null == e) return [];
        window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || (e = o(e));
        for (var n = e.map(function(e) {
            var n = {};
            for (var o in e) {
              var i = e[o];
              if ("offset" == o) {
                if (null != i) {
                  if (i = Number(i), !isFinite(i)) throw new TypeError("Keyframe offsets must be numbers.");
                  if (i < 0 || i > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.")
                }
              } else if ("composite" == o) {
                if ("add" == i || "accumulate" == i) throw {
                  type: DOMException.NOT_SUPPORTED_ERR,
                  name: "NotSupportedError",
                  message: "add compositing is not supported"
                };
                if ("replace" != i) throw new TypeError("Invalid composite mode " + i + ".")
              } else i = "easing" == o ? t.normalizeEasing(i) : "" + i;
              r(o, i, n)
            }
            return null == n.offset && (n.offset = null), null == n.easing && (n.easing = "linear"), n
          }), i = !0, s = -1 / 0, a = 0; a < n.length; a++) {
          var u = n[a].offset;
          if (null != u) {
            if (u < s) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
            s = u
          } else i = !1
        }
        return n = n.filter(function(t) {
          return t.offset >= 0 && t.offset <= 1
        }), i || function() {
          var t = n.length;
          null == n[t - 1].offset && (n[t - 1].offset = 1), t > 1 && null == n[0].offset && (n[0].offset = 0);
          for (var e = 0, r = n[0].offset, o = 1; o < t; o++) {
            var i = n[o].offset;
            if (null != i) {
              for (var s = 1; s < o - e; s++) n[e + s].offset = r + (i - r) * s / (o - e);
              e = o, r = i
            }
          }
        }(), n
      }
    }(r),
    function(t) {
      var e = {};
      t.isDeprecated = function(t, n, r, o) {
        var i = o ? "are" : "is",
          s = new Date,
          a = new Date(n);
        return a.setMonth(a.getMonth() + 3), !(s < a && (t in e || console.warn("Web Animations: " + t + " " + i + " deprecated and will stop working on " + a.toDateString() + ". " + r), e[t] = !0, 1))
      }, t.deprecated = function(e, n, r, o) {
        var i = o ? "are" : "is";
        if (t.isDeprecated(e, n, r, o)) throw new Error(e + " " + i + " no longer supported. " + r)
      }
    }(r),
    function() {
      if (document.documentElement.animate) {
        var t = document.documentElement.animate([], 0),
          e = !0;
        if (t && (e = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(n) {
            void 0 === t[n] && (e = !0)
          })), !e) return
      }! function(t, e, n) {
        e.convertEffectInput = function(n) {
          var r = function(t) {
              for (var e = {}, n = 0; n < t.length; n++)
                for (var r in t[n])
                  if ("offset" != r && "easing" != r && "composite" != r) {
                    var o = {
                      offset: t[n].offset,
                      easing: t[n].easing,
                      value: t[n][r]
                    };
                    e[r] = e[r] || [], e[r].push(o)
                  } for (var i in e) {
                var s = e[i];
                if (0 != s[0].offset || 1 != s[s.length - 1].offset) throw {
                  type: DOMException.NOT_SUPPORTED_ERR,
                  name: "NotSupportedError",
                  message: "Partial keyframes are not supported"
                }
              }
              return e
            }(t.normalizeKeyframes(n)),
            o = function(n) {
              var r = [];
              for (var o in n)
                for (var i = n[o], s = 0; s < i.length - 1; s++) {
                  var a = s,
                    u = s + 1,
                    c = i[a].offset,
                    l = i[u].offset,
                    f = c,
                    h = l;
                  0 == s && (f = -1 / 0, 0 == l && (u = a)), s == i.length - 2 && (h = 1 / 0, 1 == c && (a = u)), r.push({
                    applyFrom: f,
                    applyTo: h,
                    startOffset: i[a].offset,
                    endOffset: i[u].offset,
                    easingFunction: t.parseEasingFunction(i[a].easing),
                    property: o,
                    interpolation: e.propertyInterpolation(o, i[a].value, i[u].value)
                  })
                }
              return r.sort(function(t, e) {
                return t.startOffset - e.startOffset
              }), r
            }(r);
          return function(t, n) {
            if (null != n) o.filter(function(t) {
              return n >= t.applyFrom && n < t.applyTo
            }).forEach(function(r) {
              var o = n - r.startOffset,
                i = r.endOffset - r.startOffset,
                s = 0 == i ? 0 : r.easingFunction(o / i);
              e.apply(t, r.property, r.interpolation(s))
            });
            else
              for (var i in r) "offset" != i && "easing" != i && "composite" != i && e.clear(t, i)
          }
        }
      }(r, o),
      function(t, e, n) {
        function r(t) {
          return t.replace(/-(.)/g, function(t, e) {
            return e.toUpperCase()
          })
        }

        function o(t, e, n) {
          i[n] = i[n] || [], i[n].push([t, e])
        }
        var i = {};
        e.addPropertiesHandler = function(t, e, n) {
          for (var i = 0; i < n.length; i++) o(t, e, r(n[i]))
        };
        var s = {
          backgroundColor: "transparent",
          backgroundPosition: "0% 0%",
          borderBottomColor: "currentColor",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
          borderBottomWidth: "3px",
          borderLeftColor: "currentColor",
          borderLeftWidth: "3px",
          borderRightColor: "currentColor",
          borderRightWidth: "3px",
          borderSpacing: "2px",
          borderTopColor: "currentColor",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          borderTopWidth: "3px",
          bottom: "auto",
          clip: "rect(0px, 0px, 0px, 0px)",
          color: "black",
          fontSize: "100%",
          fontWeight: "400",
          height: "auto",
          left: "auto",
          letterSpacing: "normal",
          lineHeight: "120%",
          marginBottom: "0px",
          marginLeft: "0px",
          marginRight: "0px",
          marginTop: "0px",
          maxHeight: "none",
          maxWidth: "none",
          minHeight: "0px",
          minWidth: "0px",
          opacity: "1.0",
          outlineColor: "invert",
          outlineOffset: "0px",
          outlineWidth: "3px",
          paddingBottom: "0px",
          paddingLeft: "0px",
          paddingRight: "0px",
          paddingTop: "0px",
          right: "auto",
          strokeDasharray: "none",
          strokeDashoffset: "0px",
          textIndent: "0px",
          textShadow: "0px 0px 0px transparent",
          top: "auto",
          transform: "",
          verticalAlign: "0px",
          visibility: "visible",
          width: "auto",
          wordSpacing: "normal",
          zIndex: "auto"
        };
        e.propertyInterpolation = function(n, o, a) {
          var u = n;
          /-/.test(n) && !t.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (u = r(n)), "initial" != o && "initial" != a || ("initial" == o && (o = s[u]), "initial" == a && (a = s[u]));
          for (var c = o == a ? [] : i[u], l = 0; c && l < c.length; l++) {
            var f = c[l][0](o),
              h = c[l][0](a);
            if (void 0 !== f && void 0 !== h) {
              var p = c[l][1](f, h);
              if (p) {
                var d = e.Interpolation.apply(null, p);
                return function(t) {
                  return 0 == t ? o : 1 == t ? a : d(t)
                }
              }
            }
          }
          return e.Interpolation(!1, !0, function(t) {
            return t ? a : o
          })
        }
      }(r, o),
      function(t, e, n) {
        e.KeyframeEffect = function(n, r, o, i) {
          var s, a = function(e) {
              var n = t.calculateActiveDuration(e),
                r = function(r) {
                  return t.calculateIterationProgress(n, r, e)
                };
              return r._totalDuration = e.delay + n + e.endDelay, r
            }(t.normalizeTimingInput(o)),
            u = e.convertEffectInput(r),
            c = function() {
              u(n, s)
            };
          return c._update = function(t) {
            return null !== (s = a(t))
          }, c._clear = function() {
            u(n, null)
          }, c._hasSameTarget = function(t) {
            return n === t
          }, c._target = n, c._totalDuration = a._totalDuration, c._id = i, c
        }
      }(r, o),
      function(t, e) {
        function n(t, e, n) {
          n.enumerable = !0, n.configurable = !0, Object.defineProperty(t, e, n)
        }

        function r(t) {
          this._element = t, this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = t.style, this._length = 0, this._isAnimatedProperty = {}, this._updateSvgTransformAttr = function(t, e) {
            return !(!e.namespaceURI || -1 == e.namespaceURI.indexOf("/svg")) && (i in t || (t[i] = /Trident|MSIE|IEMobile|Edge|Android 4/i.test(t.navigator.userAgent)), t[i])
          }(window, t), this._savedTransformAttr = null;
          for (var e = 0; e < this._style.length; e++) {
            var n = this._style[e];
            this._surrogateStyle[n] = this._style[n]
          }
          this._updateIndices()
        }

        function o(t) {
          if (!t._webAnimationsPatchedStyle) {
            var e = new r(t);
            try {
              n(t, "style", {
                get: function() {
                  return e
                }
              })
            } catch (e) {
              t.style._set = function(e, n) {
                t.style[e] = n
              }, t.style._clear = function(e) {
                t.style[e] = ""
              }
            }
            t._webAnimationsPatchedStyle = t.style
          }
        }
        var i = "_webAnimationsUpdateSvgTransformAttr",
          s = {
            cssText: 1,
            length: 1,
            parentRule: 1
          },
          a = {
            getPropertyCSSValue: 1,
            getPropertyPriority: 1,
            getPropertyValue: 1,
            item: 1,
            removeProperty: 1,
            setProperty: 1
          },
          u = {
            removeProperty: 1,
            setProperty: 1
          };
        for (var c in r.prototype = {
            get cssText() {
              return this._surrogateStyle.cssText
            },
            set cssText(t) {
              for (var e = {}, n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
              for (this._surrogateStyle.cssText = t, this._updateIndices(), n = 0; n < this._surrogateStyle.length; n++) e[this._surrogateStyle[n]] = !0;
              for (var r in e) this._isAnimatedProperty[r] || this._style.setProperty(r, this._surrogateStyle.getPropertyValue(r))
            },
            get length() {
              return this._surrogateStyle.length
            },
            get parentRule() {
              return this._style.parentRule
            },
            _updateIndices: function() {
              for (; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, {
                configurable: !0,
                enumerable: !1,
                get: function(t) {
                  return function() {
                    return this._surrogateStyle[t]
                  }
                }(this._length)
              }), this._length++;
              for (; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, {
                configurable: !0,
                enumerable: !1,
                value: void 0
              })
            },
            _set: function(e, n) {
              this._style[e] = n, this._isAnimatedProperty[e] = !0, this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (null == this._savedTransformAttr && (this._savedTransformAttr = this._element.getAttribute("transform")), this._element.setAttribute("transform", t.transformToSvgMatrix(n)))
            },
            _clear: function(e) {
              this._style[e] = this._surrogateStyle[e], this._updateSvgTransformAttr && "transform" == t.unprefixedPropertyName(e) && (this._savedTransformAttr ? this._element.setAttribute("transform", this._savedTransformAttr) : this._element.removeAttribute("transform"), this._savedTransformAttr = null), delete this._isAnimatedProperty[e]
            }
          }, a) r.prototype[c] = function(t, e) {
          return function() {
            var n = this._surrogateStyle[t].apply(this._surrogateStyle, arguments);
            return e && (this._isAnimatedProperty[arguments[0]] || this._style[t].apply(this._style, arguments), this._updateIndices()), n
          }
        }(c, c in u);
        for (var l in document.documentElement.style) l in s || l in a || function(t) {
          n(r.prototype, t, {
            get: function() {
              return this._surrogateStyle[t]
            },
            set: function(e) {
              this._surrogateStyle[t] = e, this._updateIndices(), this._isAnimatedProperty[t] || (this._style[t] = e)
            }
          })
        }(l);
        t.apply = function(e, n, r) {
          o(e), e.style._set(t.propertyName(n), r)
        }, t.clear = function(e, n) {
          e._webAnimationsPatchedStyle && e.style._clear(t.propertyName(n))
        }
      }(o),
      function(t) {
        window.Element.prototype.animate = function(e, n) {
          var r = "";
          return n && n.id && (r = n.id), t.timeline._play(t.KeyframeEffect(this, e, n, r))
        }
      }(o),
      function(t, e) {
        t.Interpolation = function(t, e, n) {
          return function(r) {
            return n(function t(e, n, r) {
              if ("number" == typeof e && "number" == typeof n) return e * (1 - r) + n * r;
              if ("boolean" == typeof e && "boolean" == typeof n) return r < .5 ? e : n;
              if (e.length == n.length) {
                for (var o = [], i = 0; i < e.length; i++) o.push(t(e[i], n[i], r));
                return o
              }
              throw "Mismatched interpolation arguments " + e + ":" + n
            }(t, e, r))
          }
        }
      }(o),
      function(t, e) {
        var n = function() {
          function t(t, e) {
            for (var n = [
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0],
                [0, 0, 0, 0]
              ], r = 0; r < 4; r++)
              for (var o = 0; o < 4; o++)
                for (var i = 0; i < 4; i++) n[r][o] += e[r][i] * t[i][o];
            return n
          }
          return function(e, n, r, o, i) {
            for (var s = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
              ], a = 0; a < 4; a++) s[a][3] = i[a];
            for (a = 0; a < 3; a++)
              for (var u = 0; u < 3; u++) s[3][a] += e[u] * s[u][a];
            var c = o[0],
              l = o[1],
              f = o[2],
              h = o[3],
              p = [
                [1, 0, 0, 0],
                [0, 1, 0, 0],
                [0, 0, 1, 0],
                [0, 0, 0, 1]
              ];
            p[0][0] = 1 - 2 * (l * l + f * f), p[0][1] = 2 * (c * l - f * h), p[0][2] = 2 * (c * f + l * h), p[1][0] = 2 * (c * l + f * h), p[1][1] = 1 - 2 * (c * c + f * f), p[1][2] = 2 * (l * f - c * h), p[2][0] = 2 * (c * f - l * h), p[2][1] = 2 * (l * f + c * h), p[2][2] = 1 - 2 * (c * c + l * l), s = t(s, p);
            var d = [
              [1, 0, 0, 0],
              [0, 1, 0, 0],
              [0, 0, 1, 0],
              [0, 0, 0, 1]
            ];
            for (r[2] && (d[2][1] = r[2], s = t(s, d)), r[1] && (d[2][1] = 0, d[2][0] = r[0], s = t(s, d)), r[0] && (d[2][0] = 0, d[1][0] = r[0], s = t(s, d)), a = 0; a < 3; a++)
              for (u = 0; u < 3; u++) s[a][u] *= n[a];
            return function(t) {
              return 0 == t[0][2] && 0 == t[0][3] && 0 == t[1][2] && 0 == t[1][3] && 0 == t[2][0] && 0 == t[2][1] && 1 == t[2][2] && 0 == t[2][3] && 0 == t[3][2] && 1 == t[3][3]
            }(s) ? [s[0][0], s[0][1], s[1][0], s[1][1], s[3][0], s[3][1]] : s[0].concat(s[1], s[2], s[3])
          }
        }();
        t.composeMatrix = n, t.quat = function(e, n, r) {
          var o = t.dot(e, n),
            i = [];
          if (1 === (o = function(t, e, n) {
              return Math.max(Math.min(t, n), e)
            }(o, -1, 1))) i = e;
          else
            for (var s = Math.acos(o), a = 1 * Math.sin(r * s) / Math.sqrt(1 - o * o), u = 0; u < 4; u++) i.push(e[u] * (Math.cos(r * s) - o * a) + n[u] * a);
          return i
        }
      }(o),
      function(t, e, n) {
        t.sequenceNumber = 0;
        var r = function(t, e, n) {
          this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
        };
        e.Animation = function(e) {
          this.id = "", e && e._id && (this.id = e._id), this._sequenceNumber = t.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = e, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1
        }, e.Animation.prototype = {
          _ensureAlive: function() {
            this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, e.timeline._animations.push(this))
          },
          _tickCurrentTime: function(t, e) {
            t != this._currentTime && (this._currentTime = t, this._isFinished && !e && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
          },
          get currentTime() {
            return this._idle || this._currentTimePending ? null : this._currentTime
          },
          set currentTime(t) {
            t = +t, isNaN(t) || (e.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - t / this._playbackRate), this._currentTimePending = !1, this._currentTime != t && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(t, !0), e.applyDirtiedAnimation(this)))
          },
          get startTime() {
            return this._startTime
          },
          set startTime(t) {
            t = +t, isNaN(t) || this._paused || this._idle || (this._startTime = t, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), e.applyDirtiedAnimation(this))
          },
          get playbackRate() {
            return this._playbackRate
          },
          set playbackRate(t) {
            if (t != this._playbackRate) {
              var n = this.currentTime;
              this._playbackRate = t, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)), null != n && (this.currentTime = n)
            }
          },
          get _isFinished() {
            return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
          },
          get _totalDuration() {
            return this._effect._totalDuration
          },
          get playState() {
            return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
          },
          _rewind: function() {
            if (this._playbackRate >= 0) this._currentTime = 0;
            else {
              if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
              this._currentTime = this._totalDuration
            }
          },
          play: function() {
            this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), e.applyDirtiedAnimation(this)
          },
          pause: function() {
            this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0
          },
          finish: function() {
            this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, e.applyDirtiedAnimation(this))
          },
          cancel: function() {
            this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), e.applyDirtiedAnimation(this))
          },
          reverse: function() {
            this.playbackRate *= -1, this.play()
          },
          addEventListener: function(t, e) {
            "function" == typeof e && "finish" == t && this._finishHandlers.push(e)
          },
          removeEventListener: function(t, e) {
            if ("finish" == t) {
              var n = this._finishHandlers.indexOf(e);
              n >= 0 && this._finishHandlers.splice(n, 1)
            }
          },
          _fireEvents: function(t) {
            if (this._isFinished) {
              if (!this._finishedFlag) {
                var e = new r(this, this._currentTime, t),
                  n = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
                setTimeout(function() {
                  n.forEach(function(t) {
                    t.call(e.target, e)
                  })
                }, 0), this._finishedFlag = !0
              }
            } else this._finishedFlag = !1
          },
          _tick: function(t, e) {
            this._idle || this._paused || (null == this._startTime ? e && (this.startTime = t - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((t - this._startTime) * this.playbackRate)), e && (this._currentTimePending = !1, this._fireEvents(t))
          },
          get _needsTick() {
            return this.playState in {
              pending: 1,
              running: 1
            } || !this._finishedFlag
          },
          _targetAnimations: function() {
            var t = this._effect._target;
            return t._activeAnimations || (t._activeAnimations = []), t._activeAnimations
          },
          _markTarget: function() {
            var t = this._targetAnimations(); - 1 === t.indexOf(this) && t.push(this)
          },
          _unmarkTarget: function() {
            var t = this._targetAnimations(),
              e = t.indexOf(this); - 1 !== e && t.splice(e, 1)
          }
        }
      }(r, o),
      function(t, e, n) {
        function r(t) {
          var e = c;
          c = [], t < y.currentTime && (t = y.currentTime), y._animations.sort(o), y._animations = a(t, !0, y._animations)[0], e.forEach(function(e) {
            e[1](t)
          }), s()
        }

        function o(t, e) {
          return t._sequenceNumber - e._sequenceNumber
        }

        function i() {
          this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
        }

        function s() {
          p.forEach(function(t) {
            t()
          }), p.length = 0
        }

        function a(t, n, r) {
          d = !0, h = !1, e.timeline.currentTime = t, f = !1;
          var o = [],
            i = [],
            s = [],
            a = [];
          return r.forEach(function(e) {
            e._tick(t, n), e._inEffect ? (i.push(e._effect), e._markTarget()) : (o.push(e._effect), e._unmarkTarget()), e._needsTick && (f = !0);
            var r = e._inEffect || e._needsTick;
            e._inTimeline = r, r ? s.push(e) : a.push(e)
          }), p.push.apply(p, o), p.push.apply(p, i), f && requestAnimationFrame(function() {}), d = !1, [s, a]
        }
        var u = window.requestAnimationFrame,
          c = [],
          l = 0;
        window.requestAnimationFrame = function(t) {
          var e = l++;
          return 0 == c.length && u(r), c.push([e, t]), e
        }, window.cancelAnimationFrame = function(t) {
          c.forEach(function(e) {
            e[0] == t && (e[1] = function() {})
          })
        }, i.prototype = {
          _play: function(n) {
            n._timing = t.normalizeTimingInput(n.timing);
            var r = new e.Animation(n);
            return r._idle = !1, r._timeline = this, this._animations.push(r), e.restart(), e.applyDirtiedAnimation(r), r
          }
        };
        var f = !1,
          h = !1;
        e.restart = function() {
          return f || (f = !0, requestAnimationFrame(function() {}), h = !0), h
        }, e.applyDirtiedAnimation = function(t) {
          if (!d) {
            t._markTarget();
            var n = t._targetAnimations();
            n.sort(o), a(e.timeline.currentTime, !1, n.slice())[1].forEach(function(t) {
              var e = y._animations.indexOf(t); - 1 !== e && y._animations.splice(e, 1)
            }), s()
          }
        };
        var p = [],
          d = !1,
          y = new i;
        e.timeline = y
      }(r, o),
      function(t, e) {
        function n(t, e) {
          for (var n = 0, r = 0; r < t.length; r++) n += t[r] * e[r];
          return n
        }

        function r(t, e) {
          return [t[0] * e[0] + t[4] * e[1] + t[8] * e[2] + t[12] * e[3], t[1] * e[0] + t[5] * e[1] + t[9] * e[2] + t[13] * e[3], t[2] * e[0] + t[6] * e[1] + t[10] * e[2] + t[14] * e[3], t[3] * e[0] + t[7] * e[1] + t[11] * e[2] + t[15] * e[3], t[0] * e[4] + t[4] * e[5] + t[8] * e[6] + t[12] * e[7], t[1] * e[4] + t[5] * e[5] + t[9] * e[6] + t[13] * e[7], t[2] * e[4] + t[6] * e[5] + t[10] * e[6] + t[14] * e[7], t[3] * e[4] + t[7] * e[5] + t[11] * e[6] + t[15] * e[7], t[0] * e[8] + t[4] * e[9] + t[8] * e[10] + t[12] * e[11], t[1] * e[8] + t[5] * e[9] + t[9] * e[10] + t[13] * e[11], t[2] * e[8] + t[6] * e[9] + t[10] * e[10] + t[14] * e[11], t[3] * e[8] + t[7] * e[9] + t[11] * e[10] + t[15] * e[11], t[0] * e[12] + t[4] * e[13] + t[8] * e[14] + t[12] * e[15], t[1] * e[12] + t[5] * e[13] + t[9] * e[14] + t[13] * e[15], t[2] * e[12] + t[6] * e[13] + t[10] * e[14] + t[14] * e[15], t[3] * e[12] + t[7] * e[13] + t[11] * e[14] + t[15] * e[15]]
        }

        function o(t) {
          var e = t.rad || 0;
          return ((t.deg || 0) / 360 + (t.grad || 0) / 400 + (t.turn || 0)) * (2 * Math.PI) + e
        }

        function i(t) {
          switch (t.t) {
            case "rotatex":
              var e = o(t.d[0]);
              return [1, 0, 0, 0, 0, Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1];
            case "rotatey":
              return e = o(t.d[0]), [Math.cos(e), 0, -Math.sin(e), 0, 0, 1, 0, 0, Math.sin(e), 0, Math.cos(e), 0, 0, 0, 0, 1];
            case "rotate":
            case "rotatez":
              return e = o(t.d[0]), [Math.cos(e), Math.sin(e), 0, 0, -Math.sin(e), Math.cos(e), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "rotate3d":
              var n = t.d[0],
                r = t.d[1],
                i = t.d[2],
                s = (e = o(t.d[3]), n * n + r * r + i * i);
              if (0 === s) n = 1, r = 0, i = 0;
              else if (1 !== s) {
                var a = Math.sqrt(s);
                n /= a, r /= a, i /= a
              }
              var u = Math.sin(e / 2),
                c = u * Math.cos(e / 2),
                l = u * u;
              return [1 - 2 * (r * r + i * i) * l, 2 * (n * r * l + i * c), 2 * (n * i * l - r * c), 0, 2 * (n * r * l - i * c), 1 - 2 * (n * n + i * i) * l, 2 * (r * i * l + n * c), 0, 2 * (n * i * l + r * c), 2 * (r * i * l - n * c), 1 - 2 * (n * n + r * r) * l, 0, 0, 0, 0, 1];
            case "scale":
              return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scalex":
              return [t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scaley":
              return [1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "scalez":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, t.d[0], 0, 0, 0, 0, 1];
            case "scale3d":
              return [t.d[0], 0, 0, 0, 0, t.d[1], 0, 0, 0, 0, t.d[2], 0, 0, 0, 0, 1];
            case "skew":
              var f = o(t.d[0]),
                h = o(t.d[1]);
              return [1, Math.tan(h), 0, 0, Math.tan(f), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "skewx":
              return e = o(t.d[0]), [1, 0, 0, 0, Math.tan(e), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "skewy":
              return e = o(t.d[0]), [1, Math.tan(e), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
            case "translate":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, 0, 1];
            case "translatex":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, 0, 0, 1];
            case "translatey":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, r = t.d[0].px || 0, 0, 1];
            case "translatez":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, i = t.d[0].px || 0, 1];
            case "translate3d":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, n = t.d[0].px || 0, r = t.d[1].px || 0, i = t.d[2].px || 0, 1];
            case "perspective":
              return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, t.d[0].px ? -1 / t.d[0].px : 0, 0, 0, 0, 1];
            case "matrix":
              return [t.d[0], t.d[1], 0, 0, t.d[2], t.d[3], 0, 0, 0, 0, 1, 0, t.d[4], t.d[5], 0, 1];
            case "matrix3d":
              return t.d
          }
        }

        function s(t) {
          return 0 === t.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : t.map(i).reduce(r)
        }
        var a = function() {
          function t(t) {
            return t[0][0] * t[1][1] * t[2][2] + t[1][0] * t[2][1] * t[0][2] + t[2][0] * t[0][1] * t[1][2] - t[0][2] * t[1][1] * t[2][0] - t[1][2] * t[2][1] * t[0][0] - t[2][2] * t[0][1] * t[1][0]
          }

          function e(t) {
            var e = r(t);
            return [t[0] / e, t[1] / e, t[2] / e]
          }

          function r(t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2])
          }

          function o(t, e, n, r) {
            return [n * t[0] + r * e[0], n * t[1] + r * e[1], n * t[2] + r * e[2]]
          }
          return function(i) {
            var s = [i.slice(0, 4), i.slice(4, 8), i.slice(8, 12), i.slice(12, 16)];
            if (1 !== s[3][3]) return null;
            for (var a = [], u = 0; u < 4; u++) a.push(s[u].slice());
            for (u = 0; u < 3; u++) a[u][3] = 0;
            if (0 === t(a)) return null;
            var c, l = [];
            s[0][3] || s[1][3] || s[2][3] ? (l.push(s[0][3]), l.push(s[1][3]), l.push(s[2][3]), l.push(s[3][3]), c = function(t, e) {
              for (var n = [], r = 0; r < 4; r++) {
                for (var o = 0, i = 0; i < 4; i++) o += t[i] * e[i][r];
                n.push(o)
              }
              return n
            }(l, function(t) {
              return [
                [t[0][0], t[1][0], t[2][0], t[3][0]],
                [t[0][1], t[1][1], t[2][1], t[3][1]],
                [t[0][2], t[1][2], t[2][2], t[3][2]],
                [t[0][3], t[1][3], t[2][3], t[3][3]]
              ]
            }(function(e) {
              for (var n = 1 / t(e), r = e[0][0], o = e[0][1], i = e[0][2], s = e[1][0], a = e[1][1], u = e[1][2], c = e[2][0], l = e[2][1], f = e[2][2], h = [
                  [(a * f - u * l) * n, (i * l - o * f) * n, (o * u - i * a) * n, 0],
                  [(u * c - s * f) * n, (r * f - i * c) * n, (i * s - r * u) * n, 0],
                  [(s * l - a * c) * n, (c * o - r * l) * n, (r * a - o * s) * n, 0]
                ], p = [], d = 0; d < 3; d++) {
                for (var y = 0, v = 0; v < 3; v++) y += e[3][v] * h[v][d];
                p.push(y)
              }
              return p.push(1), h.push(p), h
            }(a)))) : c = [0, 0, 0, 1];
            var f = s[3].slice(0, 3),
              h = [];
            h.push(s[0].slice(0, 3));
            var p = [];
            p.push(r(h[0])), h[0] = e(h[0]);
            var d = [];
            h.push(s[1].slice(0, 3)), d.push(n(h[0], h[1])), h[1] = o(h[1], h[0], 1, -d[0]), p.push(r(h[1])), h[1] = e(h[1]), d[0] /= p[1], h.push(s[2].slice(0, 3)), d.push(n(h[0], h[2])), h[2] = o(h[2], h[0], 1, -d[1]), d.push(n(h[1], h[2])), h[2] = o(h[2], h[1], 1, -d[2]), p.push(r(h[2])), h[2] = e(h[2]), d[1] /= p[2], d[2] /= p[2];
            var y = function(t, e) {
              return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
            }(h[1], h[2]);
            if (n(h[0], y) < 0)
              for (u = 0; u < 3; u++) p[u] *= -1, h[u][0] *= -1, h[u][1] *= -1, h[u][2] *= -1;
            var v, m, b = h[0][0] + h[1][1] + h[2][2] + 1;
            return b > 1e-4 ? (v = .5 / Math.sqrt(b), m = [(h[2][1] - h[1][2]) * v, (h[0][2] - h[2][0]) * v, (h[1][0] - h[0][1]) * v, .25 / v]) : h[0][0] > h[1][1] && h[0][0] > h[2][2] ? m = [.25 * (v = 2 * Math.sqrt(1 + h[0][0] - h[1][1] - h[2][2])), (h[0][1] + h[1][0]) / v, (h[0][2] + h[2][0]) / v, (h[2][1] - h[1][2]) / v] : h[1][1] > h[2][2] ? (v = 2 * Math.sqrt(1 + h[1][1] - h[0][0] - h[2][2]), m = [(h[0][1] + h[1][0]) / v, .25 * v, (h[1][2] + h[2][1]) / v, (h[0][2] - h[2][0]) / v]) : (v = 2 * Math.sqrt(1 + h[2][2] - h[0][0] - h[1][1]), m = [(h[0][2] + h[2][0]) / v, (h[1][2] + h[2][1]) / v, .25 * v, (h[1][0] - h[0][1]) / v]), [f, p, d, m, c]
          }
        }();
        t.dot = n, t.makeMatrixDecomposition = function(t) {
          return [a(s(t))]
        }, t.transformListToMatrix = s
      }(o),
      function(t) {
        function e(t, e) {
          var n = t.exec(e);
          if (n) return [n = t.ignoreCase ? n[0].toLowerCase() : n[0], e.substr(n.length)]
        }

        function n(t, e) {
          var n = t(e = e.replace(/^\s*/, ""));
          if (n) return [n[0], n[1].replace(/^\s*/, "")]
        }

        function r(t, e, n, r, o) {
          for (var i = [], s = [], a = [], u = function(t, e) {
              for (var n = t, r = e; n && r;) n > r ? n %= r : r %= n;
              return t * e / (n + r)
            }(r.length, o.length), c = 0; c < u; c++) {
            var l = e(r[c % r.length], o[c % o.length]);
            if (!l) return;
            i.push(l[0]), s.push(l[1]), a.push(l[2])
          }
          return [i, s, function(e) {
            var r = e.map(function(t, e) {
              return a[e](t)
            }).join(n);
            return t ? t(r) : r
          }]
        }
        t.consumeToken = e, t.consumeTrimmed = n, t.consumeRepeated = function(t, r, o) {
          t = n.bind(null, t);
          for (var i = [];;) {
            var s = t(o);
            if (!s) return [i, o];
            if (i.push(s[0]), !(s = e(r, o = s[1])) || "" == s[1]) return [i, o];
            o = s[1]
          }
        }, t.consumeParenthesised = function(t, e) {
          for (var n = 0, r = 0; r < e.length && (!/\s|,/.test(e[r]) || 0 != n); r++)
            if ("(" == e[r]) n++;
            else if (")" == e[r] && (0 == --n && r++, n <= 0)) break;
          var o = t(e.substr(0, r));
          return null == o ? void 0 : [o, e.substr(r)]
        }, t.ignore = function(t) {
          return function(e) {
            var n = t(e);
            return n && (n[0] = void 0), n
          }
        }, t.optional = function(t, e) {
          return function(n) {
            return t(n) || [e, n]
          }
        }, t.consumeList = function(e, n) {
          for (var r = [], o = 0; o < e.length; o++) {
            var i = t.consumeTrimmed(e[o], n);
            if (!i || "" == i[0]) return;
            void 0 !== i[0] && r.push(i[0]), n = i[1]
          }
          if ("" == n) return r
        }, t.mergeNestedRepeated = r.bind(null, null), t.mergeWrappedNestedRepeated = r, t.mergeList = function(t, e, n) {
          for (var r = [], o = [], i = [], s = 0, a = 0; a < n.length; a++)
            if ("function" == typeof n[a]) {
              var u = n[a](t[s], e[s++]);
              r.push(u[0]), o.push(u[1]), i.push(u[2])
            } else ! function(t) {
              r.push(!1), o.push(!1), i.push(function() {
                return n[t]
              })
            }(a);
          return [r, o, function(t) {
            for (var e = "", n = 0; n < t.length; n++) e += i[n](t[n]);
            return e
          }]
        }
      }(o),
      function(t) {
        function e(e) {
          var n = {
              inset: !1,
              lengths: [],
              color: null
            },
            r = t.consumeRepeated(function(e) {
              var r = t.consumeToken(/^inset/i, e);
              return r ? (n.inset = !0, r) : (r = t.consumeLengthOrPercent(e)) ? (n.lengths.push(r[0]), r) : (r = t.consumeColor(e)) ? (n.color = r[0], r) : void 0
            }, /^/, e);
          if (r && r[0].length) return [n, r[1]]
        }
        var n = function(e, n, r, o) {
          function i(t) {
            return {
              inset: t,
              color: [0, 0, 0, 0],
              lengths: [{
                px: 0
              }, {
                px: 0
              }, {
                px: 0
              }, {
                px: 0
              }]
            }
          }
          for (var s = [], a = [], u = 0; u < r.length || u < o.length; u++) {
            var c = r[u] || i(o[u].inset),
              l = o[u] || i(r[u].inset);
            s.push(c), a.push(l)
          }
          return t.mergeNestedRepeated(e, n, s, a)
        }.bind(null, function(e, n) {
          for (; e.lengths.length < Math.max(e.lengths.length, n.lengths.length);) e.lengths.push({
            px: 0
          });
          for (; n.lengths.length < Math.max(e.lengths.length, n.lengths.length);) n.lengths.push({
            px: 0
          });
          if (e.inset == n.inset && !!e.color == !!n.color) {
            for (var r, o = [], i = [
                [], 0
              ], s = [
                [], 0
              ], a = 0; a < e.lengths.length; a++) {
              var u = t.mergeDimensions(e.lengths[a], n.lengths[a], 2 == a);
              i[0].push(u[0]), s[0].push(u[1]), o.push(u[2])
            }
            if (e.color && n.color) {
              var c = t.mergeColors(e.color, n.color);
              i[1] = c[0], s[1] = c[1], r = c[2]
            }
            return [i, s, function(t) {
              for (var n = e.inset ? "inset " : " ", i = 0; i < o.length; i++) n += o[i](t[0][i]) + " ";
              return r && (n += r(t[1])), n
            }]
          }
        }, ", ");
        t.addPropertiesHandler(function(n) {
          var r = t.consumeRepeated(e, /^,/, n);
          if (r && "" == r[1]) return r[0]
        }, n, ["box-shadow", "text-shadow"])
      }(o),
      function(t, e) {
        function n(t) {
          return t.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")
        }

        function r(t, e, n) {
          return Math.min(e, Math.max(t, n))
        }

        function o(t) {
          if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(t)) return Number(t)
        }

        function i(t, e) {
          return function(o, i) {
            return [o, i, function(o) {
              return n(r(t, e, o))
            }]
          }
        }

        function s(t) {
          var e = t.trim().split(/\s*[\s,]\s*/);
          if (0 !== e.length) {
            for (var n = [], r = 0; r < e.length; r++) {
              var i = o(e[r]);
              if (void 0 === i) return;
              n.push(i)
            }
            return n
          }
        }
        t.clamp = r, t.addPropertiesHandler(s, function(t, e) {
          if (t.length == e.length) return [t, e, function(t) {
            return t.map(n).join(" ")
          }]
        }, ["stroke-dasharray"]), t.addPropertiesHandler(o, i(0, 1 / 0), ["border-image-width", "line-height"]), t.addPropertiesHandler(o, i(0, 1), ["opacity", "shape-image-threshold"]), t.addPropertiesHandler(o, function(t, e) {
          if (0 != t) return i(0, 1 / 0)(t, e)
        }, ["flex-grow", "flex-shrink"]), t.addPropertiesHandler(o, function(t, e) {
          return [t, e, function(t) {
            return Math.round(r(1, 1 / 0, t))
          }]
        }, ["orphans", "widows"]), t.addPropertiesHandler(o, function(t, e) {
          return [t, e, Math.round]
        }, ["z-index"]), t.parseNumber = o, t.parseNumberList = s, t.mergeNumbers = function(t, e) {
          return [t, e, n]
        }, t.numberToString = n
      }(o),
      function(t, e) {
        t.addPropertiesHandler(String, function(t, e) {
          if ("visible" == t || "visible" == e) return [0, 1, function(n) {
            return n <= 0 ? t : n >= 1 ? e : "visible"
          }]
        }, ["visibility"])
      }(o),
      function(t, e) {
        function n(t) {
          t = t.trim(), i.fillStyle = "#000", i.fillStyle = t;
          var e = i.fillStyle;
          if (i.fillStyle = "#fff", i.fillStyle = t, e == i.fillStyle) {
            i.fillRect(0, 0, 1, 1);
            var n = i.getImageData(0, 0, 1, 1).data;
            i.clearRect(0, 0, 1, 1);
            var r = n[3] / 255;
            return [n[0] * r, n[1] * r, n[2] * r, r]
          }
        }

        function r(e, n) {
          return [e, n, function(e) {
            function n(t) {
              return Math.max(0, Math.min(255, t))
            }
            if (e[3])
              for (var r = 0; r < 3; r++) e[r] = Math.round(n(e[r] / e[3]));
            return e[3] = t.numberToString(t.clamp(0, 1, e[3])), "rgba(" + e.join(",") + ")"
          }]
        }
        var o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
        o.width = o.height = 1;
        var i = o.getContext("2d");
        t.addPropertiesHandler(n, r, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), t.consumeColor = t.consumeParenthesised.bind(null, n), t.mergeColors = r
      }(o),
      function(t, e) {
        function n(t) {
          function e() {
            var e = s.exec(t);
            i = e ? e[0] : void 0
          }

          function n() {
            if ("(" !== i) return function() {
              var t = Number(i);
              return e(), t
            }();
            e();
            var t = o();
            return ")" !== i ? NaN : (e(), t)
          }

          function r() {
            for (var t = n();
              "*" === i || "/" === i;) {
              var r = i;
              e();
              var o = n();
              "*" === r ? t *= o : t /= o
            }
            return t
          }

          function o() {
            for (var t = r();
              "+" === i || "-" === i;) {
              var n = i;
              e();
              var o = r();
              "+" === n ? t += o : t -= o
            }
            return t
          }
          var i, s = /([\+\-\w\.]+|[\(\)\*\/])/g;
          return e(), o()
        }

        function r(t, e) {
          if ("0" == (e = e.trim().toLowerCase()) && "px".search(t) >= 0) return {
            px: 0
          };
          if (/^[^(]*$|^calc/.test(e)) {
            e = e.replace(/calc\(/g, "(");
            var r = {};
            e = e.replace(t, function(t) {
              return r[t] = null, "U" + t
            });
            for (var o = "U(" + t.source + ")", i = e.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + o, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), s = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], a = 0; a < s.length;) s[a].test(i) ? (i = i.replace(s[a], "$1"), a = 0) : a++;
            if ("D" == i) {
              for (var u in r) {
                var c = n(e.replace(new RegExp("U" + u, "g"), "").replace(new RegExp(o, "g"), "*0"));
                if (!isFinite(c)) return;
                r[u] = c
              }
              return r
            }
          }
        }

        function o(t, e) {
          return i(t, e, !0)
        }

        function i(e, n, r) {
          var o, i = [];
          for (o in e) i.push(o);
          for (o in n) i.indexOf(o) < 0 && i.push(o);
          return e = i.map(function(t) {
            return e[t] || 0
          }), n = i.map(function(t) {
            return n[t] || 0
          }), [e, n, function(e) {
            var n = e.map(function(n, o) {
              return 1 == e.length && r && (n = Math.max(n, 0)), t.numberToString(n) + i[o]
            }).join(" + ");
            return e.length > 1 ? "calc(" + n + ")" : n
          }]
        }
        var s = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
          a = r.bind(null, new RegExp(s, "g")),
          u = r.bind(null, new RegExp(s + "|%", "g")),
          c = r.bind(null, /deg|rad|grad|turn/g);
        t.parseLength = a, t.parseLengthOrPercent = u, t.consumeLengthOrPercent = t.consumeParenthesised.bind(null, u), t.parseAngle = c, t.mergeDimensions = i;
        var l = t.consumeParenthesised.bind(null, a),
          f = t.consumeRepeated.bind(void 0, l, /^/),
          h = t.consumeRepeated.bind(void 0, f, /^,/);
        t.consumeSizePairList = h;
        var p = t.mergeNestedRepeated.bind(void 0, o, " "),
          d = t.mergeNestedRepeated.bind(void 0, p, ",");
        t.mergeNonNegativeSizePair = p, t.addPropertiesHandler(function(t) {
          var e = h(t);
          if (e && "" == e[1]) return e[0]
        }, d, ["background-size"]), t.addPropertiesHandler(u, o, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), t.addPropertiesHandler(u, i, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"])
      }(o),
      function(t, e) {
        function n(e) {
          return t.consumeLengthOrPercent(e) || t.consumeToken(/^auto/, e)
        }

        function r(e) {
          var r = t.consumeList([t.ignore(t.consumeToken.bind(null, /^rect/)), t.ignore(t.consumeToken.bind(null, /^\(/)), t.consumeRepeated.bind(null, n, /^,/), t.ignore(t.consumeToken.bind(null, /^\)/))], e);
          if (r && 4 == r[0].length) return r[0]
        }
        var o = t.mergeWrappedNestedRepeated.bind(null, function(t) {
          return "rect(" + t + ")"
        }, function(e, n) {
          return "auto" == e || "auto" == n ? [!0, !1, function(r) {
            var o = r ? e : n;
            if ("auto" == o) return "auto";
            var i = t.mergeDimensions(o, o);
            return i[2](i[0])
          }] : t.mergeDimensions(e, n)
        }, ", ");
        t.parseBox = r, t.mergeBoxes = o, t.addPropertiesHandler(r, o, ["clip"])
      }(o),
      function(t, e) {
        function n(t) {
          return function(e) {
            var n = 0;
            return t.map(function(t) {
              return t === c ? e[n++] : t
            })
          }
        }

        function r(t) {
          return t
        }

        function o(e) {
          if ("none" == (e = e.toLowerCase().trim())) return [];
          for (var n, r = /\s*(\w+)\(([^)]*)\)/g, o = [], i = 0; n = r.exec(e);) {
            if (n.index != i) return;
            i = n.index + n[0].length;
            var s = n[1],
              a = h[s];
            if (!a) return;
            var u = n[2].split(","),
              c = a[0];
            if (c.length < u.length) return;
            for (var p = [], d = 0; d < c.length; d++) {
              var y, v = u[d],
                m = c[d];
              if (void 0 === (y = v ? {
                  A: function(e) {
                    return "0" == e.trim() ? f : t.parseAngle(e)
                  },
                  N: t.parseNumber,
                  T: t.parseLengthOrPercent,
                  L: t.parseLength
                } [m.toUpperCase()](v) : {
                  a: f,
                  n: p[0],
                  t: l
                } [m])) return;
              p.push(y)
            }
            if (o.push({
                t: s,
                d: p
              }), r.lastIndex == e.length) return o
          }
        }

        function i(t) {
          return t.toFixed(6).replace(".000000", "")
        }

        function s(e, n) {
          if (e.decompositionPair !== n) {
            e.decompositionPair = n;
            var r = t.makeMatrixDecomposition(e)
          }
          if (n.decompositionPair !== e) {
            n.decompositionPair = e;
            var o = t.makeMatrixDecomposition(n)
          }
          return null == r[0] || null == o[0] ? [
            [!1],
            [!0],
            function(t) {
              return t ? n[0].d : e[0].d
            }
          ] : (r[0].push(0), o[0].push(1), [r, o, function(e) {
            var n = t.quat(r[0][3], o[0][3], e[5]);
            return t.composeMatrix(e[0], e[1], e[2], n, e[4]).map(i).join(",")
          }])
        }

        function a(t) {
          return t.replace(/[xy]/, "")
        }

        function u(t) {
          return t.replace(/(x|y|z|3d)?$/, "3d")
        }
        var c = null,
          l = {
            px: 0
          },
          f = {
            deg: 0
          },
          h = {
            matrix: ["NNNNNN", [c, c, 0, 0, c, c, 0, 0, 0, 0, 1, 0, c, c, 0, 1], r],
            matrix3d: ["NNNNNNNNNNNNNNNN", r],
            rotate: ["A"],
            rotatex: ["A"],
            rotatey: ["A"],
            rotatez: ["A"],
            rotate3d: ["NNNA"],
            perspective: ["L"],
            scale: ["Nn", n([c, c, 1]), r],
            scalex: ["N", n([c, 1, 1]), n([c, 1])],
            scaley: ["N", n([1, c, 1]), n([1, c])],
            scalez: ["N", n([1, 1, c])],
            scale3d: ["NNN", r],
            skew: ["Aa", null, r],
            skewx: ["A", null, n([c, f])],
            skewy: ["A", null, n([f, c])],
            translate: ["Tt", n([c, c, l]), r],
            translatex: ["T", n([c, l, l]), n([c, l])],
            translatey: ["T", n([l, c, l]), n([l, c])],
            translatez: ["L", n([l, l, c])],
            translate3d: ["TTL", r]
          };
        t.addPropertiesHandler(o, function(e, n) {
          var r = t.makeMatrixDecomposition && !0,
            o = !1;
          if (!e.length || !n.length) {
            e.length || (o = !0, e = n, n = []);
            for (var i = 0; i < e.length; i++) {
              var c = e[i].t,
                l = e[i].d,
                f = "scale" == c.substr(0, 5) ? 1 : 0;
              n.push({
                t: c,
                d: l.map(function(t) {
                  if ("number" == typeof t) return f;
                  var e = {};
                  for (var n in t) e[n] = f;
                  return e
                })
              })
            }
          }
          var p = function(t, e) {
              return "perspective" == t && "perspective" == e || ("matrix" == t || "matrix3d" == t) && ("matrix" == e || "matrix3d" == e)
            },
            d = [],
            y = [],
            v = [];
          if (e.length != n.length) {
            if (!r) return;
            d = [(E = s(e, n))[0]], y = [E[1]], v = [
              ["matrix", [E[2]]]
            ]
          } else
            for (i = 0; i < e.length; i++) {
              var m = e[i].t,
                b = n[i].t,
                g = e[i].d,
                _ = n[i].d,
                w = h[m],
                S = h[b];
              if (p(m, b)) {
                if (!r) return;
                var E = s([e[i]], [n[i]]);
                d.push(E[0]), y.push(E[1]), v.push(["matrix", [E[2]]])
              } else {
                if (m == b) c = m;
                else if (w[2] && S[2] && a(m) == a(b)) c = a(m), g = w[2](g), _ = S[2](_);
                else {
                  if (!w[1] || !S[1] || u(m) != u(b)) {
                    if (!r) return;
                    d = [(E = s(e, n))[0]], y = [E[1]], v = [
                      ["matrix", [E[2]]]
                    ];
                    break
                  }
                  c = u(m), g = w[1](g), _ = S[1](_)
                }
                for (var x = [], O = [], T = [], C = 0; C < g.length; C++) E = ("number" == typeof g[C] ? t.mergeNumbers : t.mergeDimensions)(g[C], _[C]), x[C] = E[0], O[C] = E[1], T.push(E[2]);
                d.push(x), y.push(O), v.push([c, T])
              }
            }
          if (o) {
            var N = d;
            d = y, y = N
          }
          return [d, y, function(t) {
            return t.map(function(t, e) {
              var n = t.map(function(t, n) {
                return v[e][1][n](t)
              }).join(",");
              return "matrix" == v[e][0] && 16 == n.split(",").length && (v[e][0] = "matrix3d"), v[e][0] + "(" + n + ")"
            }).join(" ")
          }]
        }, ["transform"]), t.transformToSvgMatrix = function(e) {
          var n = t.transformListToMatrix(o(e));
          return "matrix(" + i(n[0]) + " " + i(n[1]) + " " + i(n[4]) + " " + i(n[5]) + " " + i(n[12]) + " " + i(n[13]) + ")"
        }
      }(o),
      function(t) {
        function e(e) {
          return e = 100 * Math.round(e / 100), 400 === (e = t.clamp(100, 900, e)) ? "normal" : 700 === e ? "bold" : String(e)
        }
        t.addPropertiesHandler(function(t) {
          var e = Number(t);
          if (!(isNaN(e) || e < 100 || e > 900 || e % 100 != 0)) return e
        }, function(t, n) {
          return [t, n, e]
        }, ["font-weight"])
      }(o),
      function(t) {
        function e(t) {
          var e = {};
          for (var n in t) e[n] = -t[n];
          return e
        }

        function r(e) {
          return t.consumeToken(/^(left|center|right|top|bottom)\b/i, e) || t.consumeLengthOrPercent(e)
        }

        function o(e, o) {
          var i = t.consumeRepeated(r, /^/, o);
          if (i && "" == i[1]) {
            var a = i[0];
            if (a[0] = a[0] || "center", a[1] = a[1] || "center", 3 == e && (a[2] = a[2] || {
                px: 0
              }), a.length == e) {
              if (/top|bottom/.test(a[0]) || /left|right/.test(a[1])) {
                var u = a[0];
                a[0] = a[1], a[1] = u
              }
              if (/left|right|center|Object/.test(a[0]) && /top|bottom|center|Object/.test(a[1])) return a.map(function(t) {
                return "object" == n(t) ? t : s[t]
              })
            }
          }
        }

        function i(n) {
          var o = t.consumeRepeated(r, /^/, n);
          if (o) {
            for (var i = o[0], a = [{
                "%": 50
              }, {
                "%": 50
              }], u = 0, c = !1, l = 0; l < i.length; l++) {
              var f = i[l];
              "string" == typeof f ? (c = /bottom|right/.test(f), a[u = {
                left: 0,
                right: 0,
                center: u,
                top: 1,
                bottom: 1
              } [f]] = s[f], "center" == f && u++) : (c && ((f = e(f))["%"] = (f["%"] || 0) + 100), a[u] = f, u++, c = !1)
            }
            return [a, o[1]]
          }
        }
        var s = {
            left: {
              "%": 0
            },
            center: {
              "%": 50
            },
            right: {
              "%": 100
            },
            top: {
              "%": 0
            },
            bottom: {
              "%": 100
            }
          },
          a = t.mergeNestedRepeated.bind(null, t.mergeDimensions, " ");
        t.addPropertiesHandler(o.bind(null, 3), a, ["transform-origin"]), t.addPropertiesHandler(o.bind(null, 2), a, ["perspective-origin"]), t.consumePosition = i, t.mergeOffsetList = a;
        var u = t.mergeNestedRepeated.bind(null, a, ", ");
        t.addPropertiesHandler(function(e) {
          var n = t.consumeRepeated(i, /^,/, e);
          if (n && "" == n[1]) return n[0]
        }, u, ["background-position", "object-position"])
      }(o),
      function(t) {
        var e = t.consumeParenthesised.bind(null, t.parseLengthOrPercent),
          n = t.consumeRepeated.bind(void 0, e, /^/),
          r = t.mergeNestedRepeated.bind(void 0, t.mergeDimensions, " "),
          o = t.mergeNestedRepeated.bind(void 0, r, ",");
        t.addPropertiesHandler(function(r) {
          var o = t.consumeToken(/^circle/, r);
          if (o && o[0]) return ["circle"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), e, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], o[1]));
          var i = t.consumeToken(/^ellipse/, r);
          if (i && i[0]) return ["ellipse"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), n, t.ignore(t.consumeToken.bind(void 0, /^at/)), t.consumePosition, t.ignore(t.consumeToken.bind(void 0, /^\)/))], i[1]));
          var s = t.consumeToken(/^polygon/, r);
          return s && s[0] ? ["polygon"].concat(t.consumeList([t.ignore(t.consumeToken.bind(void 0, /^\(/)), t.optional(t.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), t.consumeSizePairList, t.ignore(t.consumeToken.bind(void 0, /^\)/))], s[1])) : void 0
        }, function(e, n) {
          if (e[0] === n[0]) return "circle" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["circle(", t.mergeDimensions, " at ", t.mergeOffsetList, ")"]) : "ellipse" == e[0] ? t.mergeList(e.slice(1), n.slice(1), ["ellipse(", t.mergeNonNegativeSizePair, " at ", t.mergeOffsetList, ")"]) : "polygon" == e[0] && e[1] == n[1] ? t.mergeList(e.slice(2), n.slice(2), ["polygon(", e[1], o, ")"]) : void 0
        }, ["shape-outside"])
      }(o),
      function(t, e) {
        function n(t, e) {
          e.concat([t]).forEach(function(e) {
            e in document.documentElement.style && (r[t] = e), o[e] = t
          })
        }
        var r = {},
          o = {};
        n("transform", ["webkitTransform", "msTransform"]), n("transformOrigin", ["webkitTransformOrigin"]), n("perspective", ["webkitPerspective"]), n("perspectiveOrigin", ["webkitPerspectiveOrigin"]), t.propertyName = function(t) {
          return r[t] || t
        }, t.unprefixedPropertyName = function(t) {
          return o[t] || t
        }
      }(o)
    }(),
    function() {
      if (void 0 === document.createElement("div").animate([]).oncancel) {
        if (window.performance && performance.now) var t = function() {
          return performance.now()
        };
        else t = function() {
          return Date.now()
        };
        var e = function(t, e, n) {
            this.target = t, this.currentTime = e, this.timelineTime = n, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = t, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
          },
          n = window.Element.prototype.animate;
        window.Element.prototype.animate = function(r, o) {
          var i = n.call(this, r, o);
          i._cancelHandlers = [], i.oncancel = null;
          var s = i.cancel;
          i.cancel = function() {
            s.call(this);
            var n = new e(this, null, t()),
              r = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
            setTimeout(function() {
              r.forEach(function(t) {
                t.call(n.target, n)
              })
            }, 0)
          };
          var a = i.addEventListener;
          i.addEventListener = function(t, e) {
            "function" == typeof e && "cancel" == t ? this._cancelHandlers.push(e) : a.call(this, t, e)
          };
          var u = i.removeEventListener;
          return i.removeEventListener = function(t, e) {
            if ("cancel" == t) {
              var n = this._cancelHandlers.indexOf(e);
              n >= 0 && this._cancelHandlers.splice(n, 1)
            } else u.call(this, t, e)
          }, i
        }
      }
    }(),
    function(t) {
      var e = document.documentElement,
        n = null,
        r = !1;
      try {
        var o = "0" == getComputedStyle(e).getPropertyValue("opacity") ? "1" : "0";
        (n = e.animate({
          opacity: [o, o]
        }, {
          duration: 1
        })).currentTime = 0, r = getComputedStyle(e).getPropertyValue("opacity") == o
      } catch (t) {} finally {
        n && n.cancel()
      }
      if (!r) {
        var i = window.Element.prototype.animate;
        window.Element.prototype.animate = function(e, n) {
          return window.Symbol && Symbol.iterator && Array.prototype.from && e[Symbol.iterator] && (e = Array.from(e)), Array.isArray(e) || null === e || (e = t.convertToArrayForm(e)), i.call(this, e, n)
        }
      }
    }(r)
}, function(t, e) {
  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  ! function() {
    "use strict";
    var t;
    if (!((t = document.createEvent("Event")).initEvent("foo", !0, !0), t.preventDefault(), t.defaultPrevented)) {
      var e = Event.prototype.preventDefault;
      Event.prototype.preventDefault = function() {
        this.cancelable && (e.call(this), Object.defineProperty(this, "defaultPrevented", {
          get: function() {
            return !0
          },
          configurable: !0
        }))
      }
    }
    var n = /Trident/.test(navigator.userAgent);
    if (!window.Event || n && "function" != typeof window.Event) {
      var r = window.Event;
      if (window.Event = function(t, e) {
          e = e || {};
          var n = document.createEvent("Event");
          return n.initEvent(t, Boolean(e.bubbles), Boolean(e.cancelable)), n
        }, r) {
        for (var o in r) window.Event[o] = r[o];
        window.Event.prototype = r.prototype
      }
    }
    if ((!window.CustomEvent || n && "function" != typeof window.CustomEvent) && (window.CustomEvent = function(t, e) {
        e = e || {};
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.detail), n
      }, window.CustomEvent.prototype = window.Event.prototype), !window.MouseEvent || n && "function" != typeof window.MouseEvent) {
      var i = window.MouseEvent;
      if (window.MouseEvent = function(t, e) {
          e = e || {};
          var n = document.createEvent("MouseEvent");
          return n.initMouseEvent(t, Boolean(e.bubbles), Boolean(e.cancelable), e.view || window, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget), n
        }, i)
        for (var o in i) window.MouseEvent[o] = i[o];
      window.MouseEvent.prototype = i.prototype
    }
    if (Array.from || (Array.from = function(t) {
        return [].slice.call(t)
      }), !Object.assign) {
      var s = function(t, e) {
        for (var n, r = Object.getOwnPropertyNames(e), o = 0; o < r.length; o++) t[n = r[o]] = e[n]
      };
      Object.assign = function(t, e) {
        for (var n, r = [].slice.call(arguments, 1), o = 0; o < r.length; o++)(n = r[o]) && s(t, n);
        return t
      }
    }
  }()
}, function(t, e) {
  Window.prototype.forceJURL = !1,
    function(t) {
      "use strict";
      var e = !1;
      if (!t.forceJURL) try {
        var n = new URL("b", "http://a");
        n.pathname = "c%20d", e = "http://a/c%20d" === n.href
      } catch (t) {}
      if (!e) {
        var r = Object.create(null);
        r.ftp = 21, r.file = 0, r.gopher = 70, r.http = 80, r.https = 443, r.ws = 80, r.wss = 443;
        var o = Object.create(null);
        o["%2e"] = ".", o[".%2e"] = "..", o["%2e."] = "..", o["%2e%2e"] = "..";
        var i = void 0,
          s = /[a-zA-Z]/,
          a = /[a-zA-Z0-9\+\-\.]/;
        v.prototype = {
          toString: function() {
            return this.href
          },
          get href() {
            if (this._isInvalid) return this._url;
            var t = "";
            return "" == this._username && null == this._password || (t = this._username + (null != this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + t + this.host : "") + this.pathname + this._query + this._fragment
          },
          set href(t) {
            y.call(this), d.call(this, t)
          },
          get protocol() {
            return this._scheme + ":"
          },
          set protocol(t) {
            this._isInvalid || d.call(this, t + ":", "scheme start")
          },
          get host() {
            return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
          },
          set host(t) {
            !this._isInvalid && this._isRelative && d.call(this, t, "host")
          },
          get hostname() {
            return this._host
          },
          set hostname(t) {
            !this._isInvalid && this._isRelative && d.call(this, t, "hostname")
          },
          get port() {
            return this._port
          },
          set port(t) {
            !this._isInvalid && this._isRelative && d.call(this, t, "port")
          },
          get pathname() {
            return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
          },
          set pathname(t) {
            !this._isInvalid && this._isRelative && (this._path = [], d.call(this, t, "relative path start"))
          },
          get search() {
            return this._isInvalid || !this._query || "?" == this._query ? "" : this._query
          },
          set search(t) {
            !this._isInvalid && this._isRelative && (this._query = "?", "?" == t[0] && (t = t.slice(1)), d.call(this, t, "query"))
          },
          get hash() {
            return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment
          },
          set hash(t) {
            this._isInvalid || (t ? (this._fragment = "#", "#" == t[0] && (t = t.slice(1)), d.call(this, t, "fragment")) : this._fragment = "")
          },
          get origin() {
            var t;
            if (this._isInvalid || !this._scheme) return "";
            switch (this._scheme) {
              case "data":
              case "file":
              case "javascript":
              case "mailto":
                return "null"
            }
            return (t = this.host) ? this._scheme + "://" + t : ""
          }
        };
        var u = t.URL;
        u && (v.createObjectURL = function(t) {
          return u.createObjectURL.apply(u, arguments)
        }, v.revokeObjectURL = function(t) {
          u.revokeObjectURL(t)
        }), t.URL = v
      }

      function c(t) {
        return void 0 !== r[t]
      }

      function l() {
        y.call(this), this._isInvalid = !0
      }

      function f(t) {
        return "" == t && l.call(this), t.toLowerCase()
      }

      function h(t) {
        var e = t.charCodeAt(0);
        return e > 32 && e < 127 && -1 == [34, 35, 60, 62, 63, 96].indexOf(e) ? t : encodeURIComponent(t)
      }

      function p(t) {
        var e = t.charCodeAt(0);
        return e > 32 && e < 127 && -1 == [34, 35, 60, 62, 96].indexOf(e) ? t : encodeURIComponent(t)
      }

      function d(t, e, n) {
        function u(t) {
          g.push(t)
        }
        var d = e || "scheme start",
          y = 0,
          v = "",
          m = !1,
          b = !1,
          g = [];
        t: for (;
          (t[y - 1] != i || 0 == y) && !this._isInvalid;) {
          var _ = t[y];
          switch (d) {
            case "scheme start":
              if (!_ || !s.test(_)) {
                if (e) {
                  u("Invalid scheme.");
                  break t
                }
                v = "", d = "no scheme";
                continue
              }
              v += _.toLowerCase(), d = "scheme";
              break;
            case "scheme":
              if (_ && a.test(_)) v += _.toLowerCase();
              else {
                if (":" != _) {
                  if (e) {
                    if (i == _) break t;
                    u("Code point not allowed in scheme: " + _);
                    break t
                  }
                  v = "", y = 0, d = "no scheme";
                  continue
                }
                if (this._scheme = v, v = "", e) break t;
                c(this._scheme) && (this._isRelative = !0), d = "file" == this._scheme ? "relative" : this._isRelative && n && n._scheme == this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
              }
              break;
            case "scheme data":
              "?" == _ ? (this._query = "?", d = "query") : "#" == _ ? (this._fragment = "#", d = "fragment") : i != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._schemeData += h(_));
              break;
            case "no scheme":
              if (n && c(n._scheme)) {
                d = "relative";
                continue
              }
              u("Missing scheme."), l.call(this);
              break;
            case "relative or authority":
              if ("/" != _ || "/" != t[y + 1]) {
                u("Expected /, got: " + _), d = "relative";
                continue
              }
              d = "authority ignore slashes";
              break;
            case "relative":
              if (this._isRelative = !0, "file" != this._scheme && (this._scheme = n._scheme), i == _) {
                this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = n._query, this._username = n._username, this._password = n._password;
                break t
              }
              if ("/" == _ || "\\" == _) "\\" == _ && u("\\ is an invalid code point."), d = "relative slash";
              else if ("?" == _) this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = "?", this._username = n._username, this._password = n._password, d = "query";
              else {
                if ("#" != _) {
                  var w = t[y + 1],
                    S = t[y + 2];
                  ("file" != this._scheme || !s.test(_) || ":" != w && "|" != w || i != S && "/" != S && "\\" != S && "?" != S && "#" != S) && (this._host = n._host, this._port = n._port, this._username = n._username, this._password = n._password, this._path = n._path.slice(), this._path.pop()), d = "relative path";
                  continue
                }
                this._host = n._host, this._port = n._port, this._path = n._path.slice(), this._query = n._query, this._fragment = "#", this._username = n._username, this._password = n._password, d = "fragment"
              }
              break;
            case "relative slash":
              if ("/" != _ && "\\" != _) {
                "file" != this._scheme && (this._host = n._host, this._port = n._port, this._username = n._username, this._password = n._password), d = "relative path";
                continue
              }
              "\\" == _ && u("\\ is an invalid code point."), d = "file" == this._scheme ? "file host" : "authority ignore slashes";
              break;
            case "authority first slash":
              if ("/" != _) {
                u("Expected '/', got: " + _), d = "authority ignore slashes";
                continue
              }
              d = "authority second slash";
              break;
            case "authority second slash":
              if (d = "authority ignore slashes", "/" != _) {
                u("Expected '/', got: " + _);
                continue
              }
              break;
            case "authority ignore slashes":
              if ("/" != _ && "\\" != _) {
                d = "authority";
                continue
              }
              u("Expected authority, got: " + _);
              break;
            case "authority":
              if ("@" == _) {
                m && (u("@ already seen."), v += "%40"), m = !0;
                for (var E = 0; E < v.length; E++) {
                  var x = v[E];
                  if ("\t" != x && "\n" != x && "\r" != x)
                    if (":" != x || null !== this._password) {
                      var O = h(x);
                      null !== this._password ? this._password += O : this._username += O
                    } else this._password = "";
                  else u("Invalid whitespace in authority.")
                }
                v = ""
              } else {
                if (i == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                  y -= v.length, v = "", d = "host";
                  continue
                }
                v += _
              }
              break;
            case "file host":
              if (i == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                2 != v.length || !s.test(v[0]) || ":" != v[1] && "|" != v[1] ? 0 == v.length ? d = "relative path start" : (this._host = f.call(this, v), v = "", d = "relative path start") : d = "relative path";
                continue
              }
              "\t" == _ || "\n" == _ || "\r" == _ ? u("Invalid whitespace in file host.") : v += _;
              break;
            case "host":
            case "hostname":
              if (":" != _ || b) {
                if (i == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _) {
                  if (this._host = f.call(this, v), v = "", d = "relative path start", e) break t;
                  continue
                }
                "\t" != _ && "\n" != _ && "\r" != _ ? ("[" == _ ? b = !0 : "]" == _ && (b = !1), v += _) : u("Invalid code point in host/hostname: " + _)
              } else if (this._host = f.call(this, v), v = "", d = "port", "hostname" == e) break t;
              break;
            case "port":
              if (/[0-9]/.test(_)) v += _;
              else {
                if (i == _ || "/" == _ || "\\" == _ || "?" == _ || "#" == _ || e) {
                  if ("" != v) {
                    var T = parseInt(v, 10);
                    T != r[this._scheme] && (this._port = T + ""), v = ""
                  }
                  if (e) break t;
                  d = "relative path start";
                  continue
                }
                "\t" == _ || "\n" == _ || "\r" == _ ? u("Invalid code point in port: " + _) : l.call(this)
              }
              break;
            case "relative path start":
              if ("\\" == _ && u("'\\' not allowed in path."), d = "relative path", "/" != _ && "\\" != _) continue;
              break;
            case "relative path":
              var C;
              if (i != _ && "/" != _ && "\\" != _ && (e || "?" != _ && "#" != _)) "\t" != _ && "\n" != _ && "\r" != _ && (v += h(_));
              else "\\" == _ && u("\\ not allowed in relative path."), (C = o[v.toLowerCase()]) && (v = C), ".." == v ? (this._path.pop(), "/" != _ && "\\" != _ && this._path.push("")) : "." == v && "/" != _ && "\\" != _ ? this._path.push("") : "." != v && ("file" == this._scheme && 0 == this._path.length && 2 == v.length && s.test(v[0]) && "|" == v[1] && (v = v[0] + ":"), this._path.push(v)), v = "", "?" == _ ? (this._query = "?", d = "query") : "#" == _ && (this._fragment = "#", d = "fragment");
              break;
            case "query":
              e || "#" != _ ? i != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._query += p(_)) : (this._fragment = "#", d = "fragment");
              break;
            case "fragment":
              i != _ && "\t" != _ && "\n" != _ && "\r" != _ && (this._fragment += _)
          }
          y++
        }
      }

      function y() {
        this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
      }

      function v(t, e) {
        void 0 === e || e instanceof v || (e = new v(String(e))), this._url = "" + t, y.call(this);
        var n = this._url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
        d.call(this, n, null, e)
      }
    }(window)
}, function(t, e) {
  /**
   * @license
   * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  ! function() {
    "use strict";
    var t = "undefined" == typeof HTMLTemplateElement,
      e = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
      n = !1;
    /Trident/.test(navigator.userAgent) && function() {
      n = !0;
      var t = Node.prototype.cloneNode;
      Node.prototype.cloneNode = function(e) {
        var n = t.call(this, e);
        return this instanceof DocumentFragment && (n.__proto__ = DocumentFragment.prototype), n
      }, DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll, DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector, Object.defineProperties(DocumentFragment.prototype, {
        nodeType: {
          get: function() {
            return Node.DOCUMENT_FRAGMENT_NODE
          },
          configurable: !0
        },
        localName: {
          get: function() {},
          configurable: !0
        },
        nodeName: {
          get: function() {
            return "#document-fragment"
          },
          configurable: !0
        }
      });
      var e = Node.prototype.insertBefore;

      function r(t, n) {
        if (t instanceof DocumentFragment)
          for (var r; r = t.firstChild;) e.call(this, r, n);
        else e.call(this, t, n);
        return t
      }
      Node.prototype.insertBefore = r;
      var o = Node.prototype.appendChild;
      Node.prototype.appendChild = function(t) {
        return t instanceof DocumentFragment ? r.call(this, t, null) : o.call(this, t), t
      };
      var i = Node.prototype.removeChild,
        s = Node.prototype.replaceChild;
      Node.prototype.replaceChild = function(t, e) {
        return t instanceof DocumentFragment ? (r.call(this, t, e), i.call(this, e)) : s.call(this, t, e), e
      }, Document.prototype.createDocumentFragment = function() {
        var t = this.createElement("df");
        return t.__proto__ = DocumentFragment.prototype, t
      };
      var a = Document.prototype.importNode;
      Document.prototype.importNode = function(t, e) {
        e = e || !1;
        var n = a.call(this, t, e);
        return t instanceof DocumentFragment && (n.__proto__ = DocumentFragment.prototype), n
      }
    }();
    var r = Node.prototype.cloneNode,
      o = Document.prototype.createElement,
      i = Document.prototype.importNode,
      s = Node.prototype.removeChild,
      a = Node.prototype.appendChild,
      u = Node.prototype.replaceChild,
      c = DOMParser.prototype.parseFromString,
      l = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || {
        get: function() {
          return this.innerHTML
        },
        set: function(t) {
          this.innerHTML = t
        }
      },
      f = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || {
        get: function() {
          return this.childNodes
        }
      },
      h = Element.prototype.querySelectorAll,
      p = Document.prototype.querySelectorAll,
      d = DocumentFragment.prototype.querySelectorAll;

    function y(t, e) {
      if (!t.childNodes.length) return [];
      switch (t.nodeType) {
        case Node.DOCUMENT_NODE:
          return p.call(t, e);
        case Node.DOCUMENT_FRAGMENT_NODE:
          return d.call(t, e);
        default:
          return h.call(t, e)
      }
    }
    var v = function() {
        if (!t) {
          var n = document.createElement("template"),
            r = document.createElement("template");
          r.content.appendChild(document.createElement("div")), n.content.appendChild(r);
          var o = n.cloneNode(!0);
          return 0 === o.content.childNodes.length || 0 === o.content.firstChild.content.childNodes.length || e
        }
      }(),
      m = function() {};
    if (t) {
      var b = document.implementation.createHTMLDocument("template"),
        g = !0,
        _ = document.createElement("style");
      _.textContent = "template{display:none;}";
      var w = document.head;
      w.insertBefore(_, w.firstElementChild), m.prototype = Object.create(HTMLElement.prototype);
      var S = !document.createElement("div").hasOwnProperty("innerHTML");
      m.decorate = function(t) {
        if (!t.content && t.namespaceURI === document.documentElement.namespaceURI) {
          var e;
          for (t.content = b.createDocumentFragment(); e = t.firstChild;) a.call(t.content, e);
          if (S) t.__proto__ = m.prototype;
          else if (t.cloneNode = function(t) {
              return m._cloneNode(this, t)
            }, g) try {
            x(t), O(t)
          } catch (t) {
            g = !1
          }
          m.bootstrap(t.content)
        }
      };
      var E = {
          option: ["select"],
          thead: ["table"],
          col: ["colgroup", "table"],
          tr: ["tbody", "table"],
          th: ["tr", "tbody", "table"],
          td: ["tr", "tbody", "table"]
        },
        x = function(t) {
          Object.defineProperty(t, "innerHTML", {
            get: function() {
              return R(this)
            },
            set: function(t) {
              var e = E[function(t) {
                return (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i.exec(t) || ["", ""])[1].toLowerCase()
              }(t)];
              if (e)
                for (var n = 0; n < e.length; n++) t = "<" + e[n] + ">" + t + "</" + e[n] + ">";
              for (b.body.innerHTML = t, m.bootstrap(b); this.content.firstChild;) s.call(this.content, this.content.firstChild);
              var r = b.body;
              if (e)
                for (var o = 0; o < e.length; o++) r = r.lastChild;
              for (; r.firstChild;) a.call(this.content, r.firstChild)
            },
            configurable: !0
          })
        },
        O = function(t) {
          Object.defineProperty(t, "outerHTML", {
            get: function() {
              return "<template>" + this.innerHTML + "</template>"
            },
            set: function(t) {
              if (!this.parentNode) throw new Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
              b.body.innerHTML = t;
              for (var e = this.ownerDocument.createDocumentFragment(); b.body.firstChild;) a.call(e, b.body.firstChild);
              u.call(this.parentNode, e, this)
            },
            configurable: !0
          })
        };
      x(m.prototype), O(m.prototype), m.bootstrap = function(t) {
        for (var e, n = y(t, "template"), r = 0, o = n.length; r < o && (e = n[r]); r++) m.decorate(e)
      }, document.addEventListener("DOMContentLoaded", function() {
        m.bootstrap(document)
      }), Document.prototype.createElement = function() {
        var t = o.apply(this, arguments);
        return "template" === t.localName && m.decorate(t), t
      }, DOMParser.prototype.parseFromString = function() {
        var t = c.apply(this, arguments);
        return m.bootstrap(t), t
      }, Object.defineProperty(HTMLElement.prototype, "innerHTML", {
        get: function() {
          return R(this)
        },
        set: function(t) {
          l.set.call(this, t), m.bootstrap(this)
        },
        configurable: !0,
        enumerable: !0
      });
      var T = /[&\u00A0"]/g,
        C = /[&\u00A0<>]/g,
        N = function(t) {
          switch (t) {
            case "&":
              return "&amp;";
            case "<":
              return "&lt;";
            case ">":
              return "&gt;";
            case '"':
              return "&quot;";
            case " ":
              return "&nbsp;"
          }
        },
        k = function(t) {
          return t.replace(T, N)
        },
        A = function(t) {
          for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
          return e
        },
        M = A(["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"]),
        j = A(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]),
        P = function(t, e, n) {
          switch (t.nodeType) {
            case Node.ELEMENT_NODE:
              for (var r, o = t.localName, i = "<" + o, s = t.attributes, a = 0; r = s[a]; a++) i += " " + r.name + '="' + k(r.value) + '"';
              return i += ">", M[o] ? i : i + R(t, n) + "</" + o + ">";
            case Node.TEXT_NODE:
              var u = t.data;
              return e && j[e.localName] ? u : function(t) {
                return t.replace(C, N)
              }(u);
            case Node.COMMENT_NODE:
              return "\x3c!--" + t.data + "--\x3e";
            default:
              throw window.console.error(t), new Error("not implemented")
          }
        },
        R = function(t, e) {
          "template" === t.localName && (t = t.content);
          for (var n, r = "", o = e ? e(t) : f.get.call(t), i = 0, s = o.length; i < s && (n = o[i]); i++) r += P(n, t, e);
          return r
        }
    }
    if (t || v) {
      m._cloneNode = function(t, e) {
        var n = r.call(t, !1);
        return this.decorate && this.decorate(n), e && (a.call(n.content, r.call(t.content, !0)), I(n.content, t.content)), n
      };
      var I = function(t, e) {
          if (e.querySelectorAll) {
            var n = y(e, "template");
            if (0 !== n.length)
              for (var r, o, i = y(t, "template"), s = 0, a = i.length; s < a; s++) o = n[s], r = i[s], m && m.decorate && m.decorate(o), u.call(r.parentNode, L.call(o, !0), r)
          }
        },
        L = Node.prototype.cloneNode = function(t) {
          var o;
          if (!n && e && this instanceof DocumentFragment) {
            if (!t) return this.ownerDocument.createDocumentFragment();
            o = D.call(this.ownerDocument, this, !0)
          } else o = this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? m._cloneNode(this, t) : r.call(this, t);
          return t && I(o, this), o
        },
        D = Document.prototype.importNode = function(t, e) {
          if (e = e || !1, "template" === t.localName) return m._cloneNode(t, e);
          var n = i.call(this, t, e);
          return e && (I(n, t), function(t) {
            for (var e, n, r = y(t, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'), i = 0; i < r.length; i++) {
              n = r[i], (e = o.call(document, "script")).textContent = n.textContent;
              for (var s, a = n.attributes, c = 0; c < a.length; c++) s = a[c], e.setAttribute(s.name, s.value);
              u.call(n.parentNode, e, n)
            }
          }(n)), n
        }
    }
    t && (window.HTMLTemplateElement = m)
  }()
}, function(t, e, n) {
  (function(t) {
    function e(t) {
      return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      })(t)
    }(function() {
      "use strict";
      var n;

      function r(t) {
        var e = 0;
        return function() {
          return e < t.length ? {
            done: !1,
            value: t[e++]
          } : {
            done: !0
          }
        }
      }

      function o(t) {
        var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
        return e ? e.call(t) : {
          next: r(t)
        }
      }

      function i(t) {
        for (var e, n = []; !(e = t.next()).done;) n.push(e.value);
        return n
      }
      var s = "undefined" != typeof window && window === this ? this : void 0 !== t && null != t ? t : this;

      function a(t, e) {
        return {
          index: t,
          o: [],
          v: e
        }
      }

      function u(t, e, n, r) {
        var o = 0,
          i = 0,
          s = 0,
          u = 0,
          l = Math.min(e - o, r - i);
        if (0 == o && 0 == i) t: {
          for (s = 0; s < l; s++)
            if (t[s] !== n[s]) break t;s = l
        }
        if (e == t.length && r == n.length) {
          u = t.length;
          for (var f = n.length, h = 0; h < l - s && c(t[--u], n[--f]);) h++;
          u = h
        }
        if (i += s, r -= u, 0 == (e -= u) - (o += s) && 0 == r - i) return [];
        if (o == e) {
          for (e = a(o, 0); i < r;) e.o.push(n[i++]);
          return [e]
        }
        if (i == r) return [a(o, e - o)];
        for (r = r - (s = i) + 1, u = e - (l = o) + 1, e = Array(r), f = 0; f < r; f++) e[f] = Array(u), e[f][0] = f;
        for (f = 0; f < u; f++) e[0][f] = f;
        for (f = 1; f < r; f++)
          for (h = 1; h < u; h++)
            if (t[l + h - 1] === n[s + f - 1]) e[f][h] = e[f - 1][h - 1];
            else {
              var p = e[f - 1][h] + 1,
                d = e[f][h - 1] + 1;
              e[f][h] = p < d ? p : d
            } for (l = e.length - 1, s = e[0].length - 1, r = e[l][s], t = []; 0 < l || 0 < s;) 0 == l ? (t.push(2), s--) : 0 == s ? (t.push(3), l--) : (u = e[l - 1][s - 1], (p = (f = e[l - 1][s]) < (h = e[l][s - 1]) ? f < u ? f : u : h < u ? h : u) == u ? (u == r ? t.push(0) : (t.push(1), r = u), l--, s--) : p == f ? (t.push(3), l--, r = f) : (t.push(2), s--, r = h));
        for (t.reverse(), e = void 0, l = [], s = 0; s < t.length; s++) switch (t[s]) {
          case 0:
            e && (l.push(e), e = void 0), o++, i++;
            break;
          case 1:
            e || (e = a(o, 0)), e.v++, o++, e.o.push(n[i]), i++;
            break;
          case 2:
            e || (e = a(o, 0)), e.v++, o++;
            break;
          case 3:
            e || (e = a(o, 0)), e.o.push(n[i]), i++
        }
        return e && l.push(e), l
      }

      function c(t, e) {
        return t === e
      }

      function l() {}

      function f(t) {
        return t.__shady || (t.__shady = new l), t.__shady
      }

      function h(t) {
        return t && t.__shady
      }
      l.prototype.toJSON = function() {
        return {}
      };
      var p = window.ShadyDOM || {};
      p.U = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
      var d = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
      p.f = !!(d && d.configurable && d.get), p.F = p.force || !p.U, p.g = p.noPatch || !1, p.J = p.preferPerformance;
      var y = navigator.userAgent.match("Trident");

      function v(t) {
        return (t = h(t)) && void 0 !== t.firstChild
      }

      function m(t) {
        return "ShadyRoot" === t.R
      }

      function b(t) {
        return (t = (t = h(t)) && t.root) && Pt(t)
      }
      p.L = y;
      var g = Element.prototype,
        _ = g.matches || g.matchesSelector || g.mozMatchesSelector || g.msMatchesSelector || g.oMatchesSelector || g.webkitMatchesSelector,
        w = document.createTextNode(""),
        S = 0,
        E = [];

      function x(t) {
        E.push(t), w.textContent = S++
      }
      new MutationObserver(function() {
        for (; E.length;) try {
          E.shift()()
        } catch (t) {
          throw w.textContent = S++, t
        }
      }).observe(w, {
        characterData: !0
      });
      var O = !!document.contains;

      function T(t, e) {
        for (; e;) {
          if (e == t) return !0;
          e = e.__shady_parentNode
        }
        return !1
      }

      function C(t) {
        for (var e = t.length - 1; 0 <= e; e--) {
          var n = t[e],
            r = n.getAttribute("id") || n.getAttribute("name");
          r && "length" !== r && isNaN(r) && (t[r] = n)
        }
        return t.item = function(e) {
          return t[e]
        }, t.namedItem = function(e) {
          if ("length" !== e && isNaN(e) && t[e]) return t[e];
          for (var n = o(t), r = n.next(); !r.done; r = n.next())
            if (((r = r.value).getAttribute("id") || r.getAttribute("name")) == e) return r;
          return null
        }, t
      }

      function N(t) {
        var e = [];
        for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) e.push(t);
        return e
      }

      function k(t) {
        var e = [];
        for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e.push(t);
        return e
      }

      function A(t, e, n, r) {
        for (var o in n = void 0 === n ? "" : n, e) {
          var i = e[o];
          if (!(r && 0 <= r.indexOf(o))) {
            i.configurable = !0;
            var s = n + o;
            if (i.value) t[s] = i.value;
            else try {
              Object.defineProperty(t, s, i)
            } catch (t) {}
          }
        }
      }

      function M(t) {
        var e = {};
        return Object.getOwnPropertyNames(t).forEach(function(n) {
          e[n] = Object.getOwnPropertyDescriptor(t, n)
        }), e
      }
      var j, P = [];

      function R(t) {
        j || (j = !0, x(I)), P.push(t)
      }

      function I() {
        j = !1;
        for (var t = !!P.length; P.length;) P.shift()();
        return t
      }
      I.list = P;
      var L, D = M({
          get childNodes() {
            return this.__shady_childNodes
          },
          get firstChild() {
            return this.__shady_firstChild
          },
          get lastChild() {
            return this.__shady_lastChild
          },
          get childElementCount() {
            return this.__shady_childElementCount
          },
          get children() {
            return this.__shady_children
          },
          get firstElementChild() {
            return this.__shady_firstElementChild
          },
          get lastElementChild() {
            return this.__shady_lastElementChild
          },
          get shadowRoot() {
            return this.__shady_shadowRoot
          }
        }),
        F = M({
          get textContent() {
            return this.__shady_textContent
          },
          set textContent(t) {
            this.__shady_textContent = t
          },
          get innerHTML() {
            return this.__shady_innerHTML
          },
          set innerHTML(t) {
            return this.__shady_innerHTML = t
          }
        }),
        H = M({
          get parentElement() {
            return this.__shady_parentElement
          },
          get parentNode() {
            return this.__shady_parentNode
          },
          get nextSibling() {
            return this.__shady_nextSibling
          },
          get previousSibling() {
            return this.__shady_previousSibling
          },
          get nextElementSibling() {
            return this.__shady_nextElementSibling
          },
          get previousElementSibling() {
            return this.__shady_previousElementSibling
          },
          get className() {
            return this.__shady_className
          },
          set className(t) {
            return this.__shady_className = t
          }
        });
      for (L in D) D[L].enumerable = !1;
      for (var q in F) F[q].enumerable = !1;
      for (var B in H) H[B].enumerable = !1;
      var U = p.f || p.g,
        z = U ? function() {} : function(t) {
          var e = f(t);
          e.N || (e.N = !0, A(t, H))
        },
        W = U ? function() {} : function(t) {
          var e = f(t);
          e.M || (e.M = !0, A(t, D), window.customElements && !p.g || A(t, F))
        };

      function V(t, e, n, r) {
        z(t), r = r || null;
        var o = f(t),
          i = r ? f(r) : null;
        o.previousSibling = r ? i.previousSibling : e.__shady_lastChild, (i = h(o.previousSibling)) && (i.nextSibling = t), (i = h(o.nextSibling = r)) && (i.previousSibling = t), o.parentNode = e, r ? r === n.firstChild && (n.firstChild = t) : (n.lastChild = t, n.firstChild || (n.firstChild = t)), n.childNodes = null
      }

      function X(t, e) {
        var n = f(t);
        if (e || void 0 === n.firstChild) {
          n.childNodes = null;
          var r = n.firstChild = t.__shady_native_firstChild;
          for (n.lastChild = t.__shady_native_lastChild, W(t), n = r, r = void 0; n; n = n.__shady_native_nextSibling) {
            var o = f(n);
            o.parentNode = e || t, o.nextSibling = n.__shady_native_nextSibling, o.previousSibling = r || null, r = n, z(n)
          }
        }
      }
      var $ = window.document,
        G = p.J,
        Y = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        K = Y && Y.get;

      function J(t) {
        for (var e; e = t.__shady_firstChild;) t.__shady_removeChild(e)
      }

      function Z(t, e, n) {
        (t = (t = h(t)) && t.m) && (e && t.addedNodes.push(e), n && t.removedNodes.push(n), function(t) {
          t.a || (t.a = !0, x(function() {
            t.flush()
          }))
        }(t))
      }
      var Q = M({
        get parentNode() {
          var t = h(this);
          return void 0 !== (t = t && t.parentNode) ? t : this.__shady_native_parentNode
        },
        get firstChild() {
          var t = h(this);
          return void 0 !== (t = t && t.firstChild) ? t : this.__shady_native_firstChild
        },
        get lastChild() {
          var t = h(this);
          return void 0 !== (t = t && t.lastChild) ? t : this.__shady_native_lastChild
        },
        get nextSibling() {
          var t = h(this);
          return void 0 !== (t = t && t.nextSibling) ? t : this.__shady_native_nextSibling
        },
        get previousSibling() {
          var t = h(this);
          return void 0 !== (t = t && t.previousSibling) ? t : this.__shady_native_previousSibling
        },
        get childNodes() {
          if (v(this)) {
            var t = h(this);
            if (!t.childNodes) {
              t.childNodes = [];
              for (var e = this.__shady_firstChild; e; e = e.__shady_nextSibling) t.childNodes.push(e)
            }
            var n = t.childNodes
          } else n = this.__shady_native_childNodes;
          return n.item = function(t) {
            return n[t]
          }, n
        },
        get parentElement() {
          var t = h(this);
          return (t = t && t.parentNode) && t.nodeType !== Node.ELEMENT_NODE && (t = null), void 0 !== t ? t : this.__shady_native_parentElement
        },
        get isConnected() {
          if (K && K.call(this)) return !0;
          if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
          var t = this.ownerDocument;
          if (O) {
            if (t.__shady_native_contains(this)) return !0
          } else if (t.documentElement && t.documentElement.__shady_native_contains(this)) return !0;
          for (t = this; t && !(t instanceof Document);) t = t.__shady_parentNode || (m(t) ? t.host : void 0);
          return !!(t && t instanceof Document)
        },
        get textContent() {
          if (v(this)) {
            for (var t = [], e = this.__shady_firstChild; e; e = e.__shady_nextSibling) e.nodeType !== Node.COMMENT_NODE && t.push(e.__shady_textContent);
            return t.join("")
          }
          return this.__shady_native_textContent
        },
        set textContent(t) {
          switch (null == t && (t = ""), this.nodeType) {
            case Node.ELEMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
              if (!v(this) && p.f) {
                var e = this.__shady_firstChild;
                (e != this.__shady_lastChild || e && e.nodeType != Node.TEXT_NODE) && J(this), this.__shady_native_textContent = t
              } else J(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(t));
              break;
            default:
              this.nodeValue = t
          }
        },
        insertBefore: function(t, e) {
          if (this.ownerDocument !== $ && t.ownerDocument !== $) return this.__shady_native_insertBefore(t, e), t;
          if (t === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
          if (e) {
            var n = h(e);
            if (void 0 !== (n = n && n.parentNode) && n !== this || void 0 === n && e.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.")
          }
          if (e === t) return t;
          var r = [],
            s = (n = Dt(this)) ? n.host.localName : Oe(this),
            a = t.__shady_parentNode;
          if (a) {
            var u = Oe(t),
              c = !!n || !Dt(t) || G && void 0 !== this.__noInsertionPoint;
            a.__shady_removeChild(t, c)
          }
          a = !0;
          var l = (!G || void 0 === t.__noInsertionPoint && void 0 === this.__noInsertionPoint) && ! function t(e, n) {
              var r = Ee();
              if (!r) return !0;
              if (e.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                for (r = !0, e = e.__shady_firstChild; e; e = e.__shady_nextSibling) r = r && t(e, n);
                return r
              }
              return e.nodeType !== Node.ELEMENT_NODE || r.currentScopeForNode(e) === n
            }(t, s),
            p = n && !t.__noInsertionPoint && (!G || t.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
          return (p || l) && (l && (u = u || Oe(t)), Te(t, function(t) {
            if (p && "slot" === t.localName && r.push(t), l) {
              var e = u;
              Ee() && (e && xe(t, e), (e = Ee()) && e.scopeNode(t, s))
            }
          })), r.length && (kt(n), n.c.push.apply(n.c, r instanceof Array ? r : i(o(r))), xt(n)), v(this) && (function(t, e, n) {
            W(e);
            var r = f(e);
            if (void 0 !== r.firstChild && (r.childNodes = null), t.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
              for (t = t.__shady_native_firstChild; t; t = t.__shady_native_nextSibling) V(t, e, r, n);
            else V(t, e, r, n)
          }(t, this, e), n = h(this), b(this) ? (xt(n.root), a = !1) : n.root && (a = !1)), a ? (n = m(this) ? this.host : this, e ? (e = function t(e) {
            var n = e;
            return e && "slot" === e.localName && (n = (n = (n = h(e)) && n.l) && n.length ? n[0] : t(e.__shady_nextSibling)), n
          }(e), n.__shady_native_insertBefore(t, e)) : n.__shady_native_appendChild(t)) : t.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(t), Z(this, t), t
        },
        appendChild: function(t) {
          if (this != t || !m(t)) return this.__shady_insertBefore(t)
        },
        removeChild: function(t, e) {
          if (e = void 0 !== e && e, this.ownerDocument !== $) return this.__shady_native_removeChild(t);
          if (t.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + t);
          var n = Dt(t),
            r = n && function(t, e) {
              if (t.a) {
                At(t);
                var n, r = t.b;
                for (n in r)
                  for (var o = r[n], i = 0; i < o.length; i++) {
                    var s = o[i];
                    if (T(e, s)) {
                      o.splice(i, 1);
                      var a = t.a.indexOf(s);
                      if (0 <= a && (t.a.splice(a, 1), (a = h(s.__shady_parentNode)) && a.u && a.u--), i--, s = h(s), a = s.l)
                        for (var u = 0; u < a.length; u++) {
                          var c = a[u],
                            l = c.__shady_native_parentNode;
                          l && l.__shady_native_removeChild(c)
                        }
                      s.l = [], s.assignedNodes = [], a = !0
                    }
                  }
                return a
              }
            }(n, t),
            o = h(this);
          if (v(this) && (function(t, e) {
              var n = f(t);
              t === (e = f(e)).firstChild && (e.firstChild = n.nextSibling), t === e.lastChild && (e.lastChild = n.previousSibling), t = n.previousSibling;
              var r = n.nextSibling;
              t && (f(t).nextSibling = r), r && (f(r).previousSibling = t), n.parentNode = n.previousSibling = n.nextSibling = void 0, void 0 !== e.childNodes && (e.childNodes = null)
            }(t, this), b(this))) {
            xt(o.root);
            var i = !0
          }
          if (Ee() && !e && n && t.nodeType !== Node.TEXT_NODE) {
            var s = Oe(t);
            Te(t, function(t) {
              xe(t, s)
            })
          }
          return function t(e) {
            var n = h(e);
            if (n && void 0 !== n.A)
              for (n = e.__shady_firstChild; n; n = n.__shady_nextSibling) t(n);
            (e = h(e)) && (e.A = void 0)
          }(t), n && ((e = this && "slot" === this.localName) && (i = !0), (r || e) && xt(n)), i || (i = m(this) ? this.host : this, (!o.root && "slot" !== t.localName || i === t.__shady_native_parentNode) && i.__shady_native_removeChild(t)), Z(this, null, t), t
        },
        replaceChild: function(t, e) {
          return this.__shady_insertBefore(t, e), this.__shady_removeChild(e), t
        },
        cloneNode: function(t) {
          if ("template" == this.localName) return this.__shady_native_cloneNode(t);
          var e = this.__shady_native_cloneNode(!1);
          if (t && e.nodeType !== Node.ATTRIBUTE_NODE) {
            t = this.__shady_firstChild;
            for (var n; t; t = t.__shady_nextSibling) n = t.__shady_cloneNode(!0), e.__shady_appendChild(n)
          }
          return e
        },
        getRootNode: function(t) {
          if (this && this.nodeType) {
            var e = f(this),
              n = e.A;
            return void 0 === n && (m(this) ? (n = this, e.A = n) : (n = (n = this.__shady_parentNode) ? n.__shady_getRootNode(t) : this, document.documentElement.__shady_native_contains(this) && (e.A = n))), n
          }
        },
        contains: function(t) {
          return T(this, t)
        }
      });

      function tt(t, e, n) {
        var r = [];
        return function t(e, n, r, o) {
          for (e = e.__shady_firstChild; e; e = e.__shady_nextSibling) {
            var i;
            if (i = e.nodeType === Node.ELEMENT_NODE) {
              var s = n,
                a = r,
                u = o,
                c = s(i = e);
              c && u.push(i), a && a(c) ? i = c : (t(i, s, a, u), i = void 0)
            }
            if (i) break
          }
        }(t, e, n, r), r
      }
      var et = M({
          get firstElementChild() {
            var t = h(this);
            if (t && void 0 !== t.firstChild) {
              for (t = this.__shady_firstChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
              return t
            }
            return this.__shady_native_firstElementChild
          },
          get lastElementChild() {
            var t = h(this);
            if (t && void 0 !== t.lastChild) {
              for (t = this.__shady_lastChild; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
              return t
            }
            return this.__shady_native_lastElementChild
          },
          get children() {
            return v(this) ? C(Array.prototype.filter.call(k(this), function(t) {
              return t.nodeType === Node.ELEMENT_NODE
            })) : this.__shady_native_children
          },
          get childElementCount() {
            var t = this.__shady_children;
            return t ? t.length : 0
          }
        }),
        nt = M({
          querySelector: function(t) {
            return tt(this, function(e) {
              return _.call(e, t)
            }, function(t) {
              return !!t
            })[0] || null
          },
          querySelectorAll: function(t, e) {
            if (e) {
              e = Array.prototype.slice.call(this.__shady_native_querySelectorAll(t));
              var n = this.__shady_getRootNode();
              return e.filter(function(t) {
                return t.__shady_getRootNode() == n
              })
            }
            return tt(this, function(e) {
              return _.call(e, t)
            })
          }
        }),
        rt = p.J && !p.g ? Object.assign({}, et) : et;
      Object.assign(et, nt);
      var ot = M({
          getElementById: function(t) {
            return "" === t ? null : tt(this, function(e) {
              return e.id == t
            }, function(t) {
              return !!t
            })[0] || null
          }
        }),
        it = M({
          get activeElement() {
            var t = p.f ? document.__shady_native_activeElement : document.activeElement;
            if (!t || !t.nodeType) return null;
            var e = !!m(this);
            if (!(this === document || e && this.host !== t && this.host.__shady_native_contains(t))) return null;
            for (e = Dt(t); e && e !== this;) e = Dt(t = e.host);
            return this === document ? e ? null : t : e === this ? t : null
          }
        }),
        st = /[&\u00A0"]/g,
        at = /[&\u00A0<>]/g;

      function ut(t) {
        switch (t) {
          case "&":
            return "&amp;";
          case "<":
            return "&lt;";
          case ">":
            return "&gt;";
          case '"':
            return "&quot;";
          case " ":
            return "&nbsp;"
        }
      }

      function ct(t) {
        for (var e = {}, n = 0; n < t.length; n++) e[t[n]] = !0;
        return e
      }
      var lt = ct("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        ft = ct("style script xmp iframe noembed noframes plaintext noscript".split(" "));

      function ht(t, e) {
        "template" === t.localName && (t = t.content);
        for (var n = "", r = e ? e(t) : t.childNodes, o = 0, i = r.length, s = void 0; o < i && (s = r[o]); o++) {
          t: {
            var a = s,
              u = t,
              c = e;
            switch (a.nodeType) {
              case Node.ELEMENT_NODE:
                for (var l, f = "<" + (u = a.localName), h = a.attributes, p = 0; l = h[p]; p++) f += " " + l.name + '="' + l.value.replace(st, ut) + '"';
                f += ">", a = lt[u] ? f : f + ht(a, c) + "</" + u + ">";
                break t;
              case Node.TEXT_NODE:
                a = a.data, a = u && ft[u.localName] ? a : a.replace(at, ut);
                break t;
              case Node.COMMENT_NODE:
                a = "\x3c!--" + a.data + "--\x3e";
                break t;
              default:
                throw window.console.error(a), Error("not implemented")
            }
          }
          n += a
        }
        return n
      }
      var pt = document.implementation.createHTMLDocument("inert"),
        dt = M({
          get innerHTML() {
            return v(this) ? ht("template" === this.localName ? this.content : this, k) : this.__shady_native_innerHTML
          },
          set innerHTML(t) {
            if ("template" === this.localName) this.__shady_native_innerHTML = t;
            else {
              J(this);
              var e = this.localName || "div";
              for (e = this.namespaceURI && this.namespaceURI !== pt.namespaceURI ? pt.createElementNS(this.namespaceURI, e) : pt.createElement(e), p.f ? e.__shady_native_innerHTML = t : e.innerHTML = t; t = e.__shady_firstChild;) this.__shady_insertBefore(t)
            }
          }
        }),
        yt = M({
          addEventListener: function(t, n, r) {
            "object" !== e(r) && (r = {
              capture: !!r
            }), r.i = r.i || this, this.host.__shady_addEventListener(t, n, r)
          },
          removeEventListener: function(t, n, r) {
            "object" !== e(r) && (r = {
              capture: !!r
            }), r.i = r.i || this, this.host.__shady_removeEventListener(t, n, r)
          }
        });

      function vt(t, e) {
        A(t, yt, e), A(t, it, e), A(t, dt, e), A(t, et, e), p.g && !e ? (A(t, Q, e), A(t, ot, e)) : p.f || (A(t, H), A(t, D), A(t, F))
      }
      var mt, bt, gt = {},
        _t = p.deferConnectionCallbacks && "loading" === document.readyState;

      function wt(t) {
        var e = [];
        do {
          e.unshift(t)
        } while (t = t.__shady_parentNode);
        return e
      }

      function St(t, e, n) {
        if (t !== gt) throw new TypeError("Illegal constructor");
        this.a = null, Et(this, e, n)
      }

      function Et(t, e, n) {
        if (t.R = "ShadyRoot", t.host = e, t.mode = n && n.mode, X(t.host), (e = f(t.host)).root = t, e.V = "closed" !== t.mode ? t : null, (e = f(t)).firstChild = e.lastChild = e.parentNode = e.nextSibling = e.previousSibling = null, p.preferPerformance)
          for (; e = t.host.__shady_native_firstChild;) t.host.__shady_native_removeChild(e);
        else xt(t)
      }

      function xt(t) {
        t.j || (t.j = !0, R(function() {
          return Ot(t)
        }))
      }

      function Ot(t) {
        var e;
        if (e = t.j) {
          for (var n; t;) t.j && (n = t), m(t = (e = t).host.__shady_getRootNode()) && (e = h(e.host)) && 0 < e.u || (t = void 0);
          e = n
        }(n = e) && n._renderSelf()
      }

      function Tt(t, e, n) {
        var r = f(e),
          o = r.C;
        r.C = null, n || (n = (t = t.b[e.__shady_slot || "__catchall"]) && t[0]), n ? (f(n).assignedNodes.push(e), r.assignedSlot = n) : r.assignedSlot = void 0, o !== r.assignedSlot && r.assignedSlot && (f(r.assignedSlot).D = !0)
      }

      function Ct(t, e, n) {
        for (var r = 0, o = void 0; r < n.length && (o = n[r]); r++)
          if ("slot" == o.localName) {
            var i = h(o).assignedNodes;
            i && i.length && Ct(t, e, i)
          } else e.push(n[r])
      }

      function Nt(t, e) {
        e.__shady_native_dispatchEvent(new Event("slotchange")), (e = h(e)).assignedSlot && Nt(t, e.assignedSlot)
      }

      function kt(t) {
        t.c = t.c || [], t.a = t.a || [], t.b = t.b || {}
      }

      function At(t) {
        if (t.c && t.c.length) {
          for (var e, n = t.c, r = 0; r < n.length; r++) {
            var o = n[r];
            X(o);
            var i = o.__shady_parentNode;
            X(i), (i = h(i)).u = (i.u || 0) + 1, i = Mt(o), t.b[i] ? ((e = e || {})[i] = !0, t.b[i].push(o)) : t.b[i] = [o], t.a.push(o)
          }
          if (e)
            for (var s in e) t.b[s] = jt(t.b[s]);
          t.c = []
        }
      }

      function Mt(t) {
        var e = t.name || t.getAttribute("name") || "__catchall";
        return t.O = e
      }

      function jt(t) {
        return t.sort(function(t, e) {
          t = wt(t);
          for (var n = wt(e), r = 0; r < t.length; r++) {
            e = t[r];
            var o = n[r];
            if (e !== o) return (t = k(e.__shady_parentNode)).indexOf(e) - t.indexOf(o)
          }
        })
      }

      function Pt(t) {
        return At(t), !(!t.a || !t.a.length)
      }
      if (St.prototype._renderSelf = function() {
          var t = _t;
          if (_t = !0, this.j = !1, this.a) {
            At(this);
            for (var e, n = 0; n < this.a.length; n++) {
              var r = h(e = this.a[n]),
                o = r.assignedNodes;
              if (r.assignedNodes = [], r.l = [], r.H = o)
                for (r = 0; r < o.length; r++) {
                  var i = h(o[r]);
                  i.C = i.assignedSlot, i.assignedSlot === e && (i.assignedSlot = null)
                }
            }
            for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) Tt(this, n);
            for (n = 0; n < this.a.length; n++) {
              if (!(o = h(e = this.a[n])).assignedNodes.length)
                for (r = e.__shady_firstChild; r; r = r.__shady_nextSibling) Tt(this, r, e);
              if ((r = (r = h(e.__shady_parentNode)) && r.root) && (Pt(r) || r.j) && r._renderSelf(), Ct(this, o.l, o.assignedNodes), r = o.H) {
                for (i = 0; i < r.length; i++) h(r[i]).C = null;
                o.H = null, r.length > o.assignedNodes.length && (o.D = !0)
              }
              o.D && (o.D = !1, Nt(this, e))
            }
            for (e = this.a, n = [], o = 0; o < e.length; o++)(i = h(r = e[o].__shady_parentNode)) && i.root || !(0 > n.indexOf(r)) || n.push(r);
            for (e = 0; e < n.length; e++) {
              for (o = (i = n[e]) === this ? this.host : i, r = [], i = i.__shady_firstChild; i; i = i.__shady_nextSibling)
                if ("slot" == i.localName)
                  for (var s = h(i).l, a = 0; a < s.length; a++) r.push(s[a]);
                else r.push(i);
              i = N(o), s = u(r, r.length, i, i.length);
              for (var c = a = 0, l = void 0; a < s.length && (l = s[a]); a++) {
                for (var f = 0, d = void 0; f < l.o.length && (d = l.o[f]); f++) d.__shady_native_parentNode === o && o.__shady_native_removeChild(d), i.splice(l.index + c, 1);
                c -= l.v
              }
              for (c = 0, l = void 0; c < s.length && (l = s[c]); c++)
                for (a = i[l.index], f = l.index; f < l.index + l.v; f++) d = r[f], o.__shady_native_insertBefore(d, a), i.splice(f, 0, d)
            }
          }
          if (!p.preferPerformance && !this.G)
            for (n = this.host.__shady_firstChild; n; n = n.__shady_nextSibling) e = h(n), n.__shady_native_parentNode !== this.host || "slot" !== n.localName && e.assignedSlot || this.host.__shady_native_removeChild(n);
          this.G = !0, _t = t, mt && mt()
        }, (bt = St.prototype).__proto__ = DocumentFragment.prototype, vt(bt, "__shady_"), vt(bt), Object.defineProperties(bt, {
          nodeType: {
            value: Node.DOCUMENT_FRAGMENT_NODE,
            configurable: !0
          },
          nodeName: {
            value: "#document-fragment",
            configurable: !0
          },
          nodeValue: {
            value: null,
            configurable: !0
          }
        }), ["localName", "namespaceURI", "prefix"].forEach(function(t) {
          Object.defineProperty(bt, t, {
            value: void 0,
            configurable: !0
          })
        }), ["ownerDocument", "baseURI", "isConnected"].forEach(function(t) {
          Object.defineProperty(bt, t, {
            get: function() {
              return this.host[t]
            },
            configurable: !0
          })
        }), window.customElements && p.F && !p.preferPerformance) {
        var Rt = new Map;
        mt = function() {
          var t = [];
          Rt.forEach(function(e, n) {
            t.push([n, e])
          }), Rt.clear();
          for (var e = 0; e < t.length; e++) {
            var n = t[e][0];
            t[e][1] ? n.__shadydom_connectedCallback() : n.__shadydom_disconnectedCallback()
          }
        }, _t && document.addEventListener("readystatechange", function() {
          _t = !1, mt()
        }, {
          once: !0
        });
        var It = window.customElements.define,
          Lt = function(t, e) {
            var n = e.prototype.connectedCallback,
              r = e.prototype.disconnectedCallback;
            It.call(window.customElements, t, function(t, e, n) {
              var r = 0,
                o = "__isConnected" + r++;
              return (e || n) && (t.prototype.connectedCallback = t.prototype.__shadydom_connectedCallback = function() {
                _t ? Rt.set(this, !0) : this[o] || (this[o] = !0, e && e.call(this))
              }, t.prototype.disconnectedCallback = t.prototype.__shadydom_disconnectedCallback = function() {
                _t ? this.isConnected || Rt.set(this, !1) : this[o] && (this[o] = !1, n && n.call(this))
              }), t
            }(e, n, r)), e.prototype.connectedCallback = n, e.prototype.disconnectedCallback = r
          };
        window.customElements.define = Lt, Object.defineProperty(window.CustomElementRegistry.prototype, "define", {
          value: Lt,
          configurable: !0
        })
      }

      function Dt(t) {
        if (m(t = t.__shady_getRootNode())) return t
      }

      function Ft() {
        this.a = !1, this.addedNodes = [], this.removedNodes = [], this.w = new Set
      }
      Ft.prototype.flush = function() {
        if (this.a) {
          this.a = !1;
          var t = this.takeRecords();
          t.length && this.w.forEach(function(e) {
            e(t)
          })
        }
      }, Ft.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
          var t = [{
            addedNodes: this.addedNodes,
            removedNodes: this.removedNodes
          }];
          return this.addedNodes = [], this.removedNodes = [], t
        }
        return []
      };
      var Ht = "__eventWrappers" + Date.now(),
        qt = function() {
          var t = Object.getOwnPropertyDescriptor(Event.prototype, "composed");
          return t ? function(e) {
            return t.get.call(e)
          } : null
        }(),
        Bt = function() {
          function t() {}
          var e = !1,
            n = {
              get capture() {
                e = !0
              }
            };
          return window.addEventListener("test", t, n), window.removeEventListener("test", t, n), e
        }();

      function Ut(t) {
        if (t && "object" === e(t)) var n = !!t.capture,
          r = !!t.once,
          o = !!t.passive,
          i = t.i;
        else n = !!t, o = r = !1;
        return {
          K: i,
          capture: n,
          once: r,
          passive: o,
          I: Bt ? t : n
        }
      }
      var zt = {
          blur: !0,
          focus: !0,
          focusin: !0,
          focusout: !0,
          click: !0,
          dblclick: !0,
          mousedown: !0,
          mouseenter: !0,
          mouseleave: !0,
          mousemove: !0,
          mouseout: !0,
          mouseover: !0,
          mouseup: !0,
          wheel: !0,
          beforeinput: !0,
          input: !0,
          keydown: !0,
          keyup: !0,
          compositionstart: !0,
          compositionupdate: !0,
          compositionend: !0,
          touchstart: !0,
          touchend: !0,
          touchmove: !0,
          touchcancel: !0,
          pointerover: !0,
          pointerenter: !0,
          pointerdown: !0,
          pointermove: !0,
          pointerup: !0,
          pointercancel: !0,
          pointerout: !0,
          pointerleave: !0,
          gotpointercapture: !0,
          lostpointercapture: !0,
          dragstart: !0,
          drag: !0,
          dragenter: !0,
          dragleave: !0,
          dragover: !0,
          drop: !0,
          dragend: !0,
          DOMActivate: !0,
          DOMFocusIn: !0,
          DOMFocusOut: !0,
          keypress: !0
        },
        Wt = {
          DOMAttrModified: !0,
          DOMAttributeNameChanged: !0,
          DOMCharacterDataModified: !0,
          DOMElementNameChanged: !0,
          DOMNodeInserted: !0,
          DOMNodeInsertedIntoDocument: !0,
          DOMNodeRemoved: !0,
          DOMNodeRemovedFromDocument: !0,
          DOMSubtreeModified: !0
        };

      function Vt(t) {
        return t instanceof Node ? t.__shady_getRootNode() : t
      }

      function Xt(t, e) {
        var n = [],
          r = t;
        for (t = Vt(t); r;) n.push(r), r = r.__shady_assignedSlot ? r.__shady_assignedSlot : r.nodeType === Node.DOCUMENT_FRAGMENT_NODE && r.host && (e || r !== t) ? r.host : r.__shady_parentNode;
        return n[n.length - 1] === document && n.push(window), n
      }

      function $t(t, e) {
        if (!m) return t;
        t = Xt(t, !0);
        for (var n, r, o = 0, i = void 0, s = void 0; o < e.length; o++)
          if ((r = Vt(n = e[o])) !== i && (s = t.indexOf(r), i = r), !m(r) || -1 < s) return n
      }

      function Gt(t) {
        function e(e, n) {
          return (e = new t(e, n)).__composed = n && !!n.composed, e
        }
        return e.__proto__ = t, e.prototype = t.prototype, e
      }
      var Yt = {
        focus: !0,
        blur: !0
      };

      function Kt(t) {
        return t.__target !== t.target || t.__relatedTarget !== t.relatedTarget
      }

      function Jt(t, e, n) {
        if (n = e.__handlers && e.__handlers[t.type] && e.__handlers[t.type][n])
          for (var r, o = 0;
            (r = n[o]) && (!Kt(t) || t.target !== t.relatedTarget) && (r.call(e, t), !t.__immediatePropagationStopped); o++);
      }

      function Zt(t) {
        var e, n = t.composedPath();
        Object.defineProperty(t, "currentTarget", {
          get: function() {
            return o
          },
          configurable: !0
        });
        for (var r = n.length - 1; 0 <= r; r--) {
          var o = n[r];
          if (Jt(t, o, "capture"), t.B) return
        }
        for (Object.defineProperty(t, "eventPhase", {
            get: function() {
              return Event.AT_TARGET
            }
          }), r = 0; r < n.length; r++) {
          var i = h(o = n[r]);
          if (i = i && i.root, (0 === r || i && i === e) && (Jt(t, o, "bubble"), o !== window && (e = o.__shady_getRootNode()), t.B)) break
        }
      }

      function Qt(t, e, n, r, o, i) {
        for (var s = 0; s < t.length; s++) {
          var a = t[s],
            u = a.type,
            c = a.capture,
            l = a.once,
            f = a.passive;
          if (e === a.node && n === u && r === c && o === l && i === f) return s
        }
        return -1
      }

      function te(t, n, r) {
        var o = Ut(r),
          i = o.capture,
          s = o.once,
          a = o.passive,
          u = o.K;
        if (o = o.I, n) {
          var c = e(n);
          if (("function" === c || "object" === c) && ("object" !== c || n.handleEvent && "function" == typeof n.handleEvent)) {
            if (Wt[t]) return this.__shady_native_addEventListener(t, n, o);
            var l = u || this;
            if (u = n[Ht]) {
              if (-1 < Qt(u, l, t, i, s, a)) return
            } else n[Ht] = [];
            u = function(e) {
              if (s && this.__shady_removeEventListener(t, n, r), e.__target || re(e), l !== this) {
                var o = Object.getOwnPropertyDescriptor(e, "currentTarget");
                Object.defineProperty(e, "currentTarget", {
                  get: function() {
                    return l
                  },
                  configurable: !0
                })
              }
              if (e.__previousCurrentTarget = e.currentTarget, (!m(l) && "slot" !== l.localName || -1 != e.composedPath().indexOf(l)) && (e.composed || -1 < e.composedPath().indexOf(l)))
                if (Kt(e) && e.target === e.relatedTarget) e.eventPhase === Event.BUBBLING_PHASE && e.stopImmediatePropagation();
                else if (e.eventPhase === Event.CAPTURING_PHASE || e.bubbles || e.target === l || l instanceof Window) {
                var i = "function" === c ? n.call(l, e) : n.handleEvent && n.handleEvent(e);
                return l !== this && (o ? (Object.defineProperty(e, "currentTarget", o), o = null) : delete e.currentTarget), i
              }
            }, n[Ht].push({
              node: l,
              type: t,
              capture: i,
              once: s,
              passive: a,
              W: u
            }), Yt[t] ? (this.__handlers = this.__handlers || {}, this.__handlers[t] = this.__handlers[t] || {
              capture: [],
              bubble: []
            }, this.__handlers[t][i ? "capture" : "bubble"].push(u)) : this.__shady_native_addEventListener(t, u, o)
          }
        }
      }

      function ee(t, e, n) {
        if (e) {
          var r = Ut(n);
          n = r.capture;
          var o = r.once,
            i = r.passive,
            s = r.K;
          if (r = r.I, Wt[t]) return this.__shady_native_removeEventListener(t, e, r);
          var a = s || this;
          s = void 0;
          var u = null;
          try {
            u = e[Ht]
          } catch (t) {}
          u && (-1 < (o = Qt(u, a, t, n, o, i)) && (s = u.splice(o, 1)[0].W, u.length || (e[Ht] = void 0))), this.__shady_native_removeEventListener(t, s || e, r), s && Yt[t] && this.__handlers && this.__handlers[t] && (-1 < (e = (t = this.__handlers[t][n ? "capture" : "bubble"]).indexOf(s)) && t.splice(e, 1))
        }
      }
      var ne = M({
        get composed() {
          return void 0 === this.__composed && (qt ? this.__composed = "focusin" === this.type || "focusout" === this.type || qt(this) : !1 !== this.isTrusted && (this.__composed = zt[this.type])), this.__composed || !1
        },
        composedPath: function() {
          return this.__composedPath || (this.__composedPath = Xt(this.__target, this.composed)), this.__composedPath
        },
        get target() {
          return $t(this.currentTarget || this.__previousCurrentTarget, this.composedPath())
        },
        get relatedTarget() {
          return this.__relatedTarget ? (this.__relatedTargetComposedPath || (this.__relatedTargetComposedPath = Xt(this.__relatedTarget, !0)), $t(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)) : null
        },
        stopPropagation: function() {
          Event.prototype.stopPropagation.call(this), this.B = !0
        },
        stopImmediatePropagation: function() {
          Event.prototype.stopImmediatePropagation.call(this), this.B = this.__immediatePropagationStopped = !0
        }
      });

      function re(t) {
        if (t.__target = t.target, t.__relatedTarget = t.relatedTarget, p.f) {
          var e = Object.getPrototypeOf(t);
          if (!Object.hasOwnProperty(e, "__shady_patchedProto")) {
            var n = Object.create(e);
            n.__shady_sourceProto = e, A(n, ne), e.__shady_patchedProto = n
          }
          t.__proto__ = e.__shady_patchedProto
        } else A(t, ne)
      }
      var oe = Gt(Event),
        ie = Gt(CustomEvent),
        se = Gt(MouseEvent);
      var ae = Object.getOwnPropertyNames(Document.prototype).filter(function(t) {
          return "on" === t.substring(0, 2)
        }),
        ue = p.f,
        ce = {
          querySelector: function(t) {
            return this.__shady_native_querySelector(t)
          },
          querySelectorAll: function(t) {
            return this.__shady_native_querySelectorAll(t)
          }
        },
        le = {};

      function fe(t) {
        le[t] = function(e) {
          return e["__shady_native_" + t]
        }
      }

      function he(t, e) {
        for (var n in A(t, e, "__shady_native_"), e) fe(n)
      }

      function pe(t, e) {
        e = void 0 === e ? [] : e;
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            o = Object.getOwnPropertyDescriptor(t, r);
          o && (Object.defineProperty(t, "__shady_native_" + r, o), o.value ? ce[r] || (ce[r] = o.value) : fe(r))
        }
      }
      var de = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        ye = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        ve = document.implementation.createHTMLDocument("inert");

      function me(t) {
        for (var e; e = t.__shady_native_firstChild;) t.__shady_native_removeChild(e)
      }
      var be = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        ge = ["querySelector", "querySelectorAll"];
      var _e = M({
          dispatchEvent: function(t) {
            return I(), this.__shady_native_dispatchEvent(t)
          },
          addEventListener: te,
          removeEventListener: ee
        }),
        we = M({
          get assignedSlot() {
            var t = this.__shady_parentNode;
            return (t = t && t.__shady_shadowRoot) && Ot(t), (t = h(this)) && t.assignedSlot || null
          }
        }),
        Se = null;

      function Ee() {
        return Se || (Se = window.ShadyCSS && window.ShadyCSS.ScopingShim), Se || null
      }

      function xe(t, e) {
        var n = Ee();
        n && n.unscopeNode(t, e)
      }

      function Oe(t) {
        if (t.nodeType !== Node.ELEMENT_NODE) return "";
        var e = Ee();
        return e ? e.currentScopeForNode(t) : ""
      }

      function Te(t, e) {
        if (t)
          for (t.nodeType === Node.ELEMENT_NODE && e(t), t = t.__shady_firstChild; t; t = t.__shady_nextSibling) t.nodeType === Node.ELEMENT_NODE && Te(t, e)
      }
      var Ce = window.document;

      function Ne(t, e) {
        if ("slot" === e) b(t = t.__shady_parentNode) && xt(h(t).root);
        else if ("slot" === t.localName && "name" === e && (e = Dt(t))) {
          if (e.a) {
            At(e);
            var n = t.O,
              r = Mt(t);
            if (r !== n) {
              var o = (n = e.b[n]).indexOf(t);
              0 <= o && n.splice(o, 1), (n = e.b[r] || (e.b[r] = [])).push(t), 1 < n.length && (e.b[r] = jt(n))
            }
          }
          xt(e)
        }
      }
      var ke = M({
          get previousElementSibling() {
            var t = h(this);
            if (t && void 0 !== t.previousSibling) {
              for (t = this.__shady_previousSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_previousSibling;
              return t
            }
            return this.__shady_native_previousElementSibling
          },
          get nextElementSibling() {
            var t = h(this);
            if (t && void 0 !== t.nextSibling) {
              for (t = this.__shady_nextSibling; t && t.nodeType !== Node.ELEMENT_NODE;) t = t.__shady_nextSibling;
              return t
            }
            return this.__shady_native_nextElementSibling
          },
          get slot() {
            return this.getAttribute("slot")
          },
          set slot(t) {
            this.__shady_setAttribute("slot", t)
          },
          get shadowRoot() {
            var t = h(this);
            return t && t.V || null
          },
          get className() {
            return this.getAttribute("class") || ""
          },
          set className(t) {
            this.__shady_setAttribute("class", t)
          },
          setAttribute: function(t, e) {
            var n;
            this.ownerDocument !== Ce ? this.__shady_native_setAttribute(t, e) : ((n = Ee()) && "class" === t ? (n.setElementClass(this, e), n = !0) : n = !1, n || (this.__shady_native_setAttribute(t, e), Ne(this, t)))
          },
          removeAttribute: function(t) {
            this.__shady_native_removeAttribute(t), Ne(this, t)
          },
          attachShadow: function(t) {
            if (!this) throw Error("Must provide a host.");
            if (!t) throw Error("Not enough arguments.");
            if (t.shadyUpgradeFragment && !p.L) {
              var e = t.shadyUpgradeFragment;
              if (e.__proto__ = ShadowRoot.prototype, Et(e, this, t), X(e, e), t = e.__noInsertionPoint ? null : e.querySelectorAll("slot"), e.__noInsertionPoint = void 0, t && t.length) {
                var n = e;
                kt(n), n.c.push.apply(n.c, t instanceof Array ? t : i(o(t))), xt(e)
              }
              e.host.__shady_native_appendChild(e)
            } else e = new St(gt, this, t);
            return e
          }
        }),
        Ae = M({
          blur: function() {
            var t = h(this);
            (t = (t = t && t.root) && t.activeElement) ? t.__shady_blur(): this.__shady_native_blur()
          }
        });
      ae.forEach(function(t) {
        Ae[t] = {
          set: function(e) {
            var n = f(this),
              r = t.substring(2);
            n.h || (n.h = {}), n.h[t] && this.removeEventListener(r, n.h[t]), this.__shady_addEventListener(r, e), n.h[t] = e
          },
          get: function() {
            var e = h(this);
            return e && e.h && e.h[t]
          },
          configurable: !0
        }
      });
      var Me = M({
          assignedNodes: function(t) {
            if ("slot" === this.localName) {
              var e = this.__shady_getRootNode();
              return e && m(e) && Ot(e), (e = h(this)) && (t && t.flatten ? e.l : e.assignedNodes) || []
            }
          },
          addEventListener: function(t, n, r) {
            if ("slot" !== this.localName || "slotchange" === t) te.call(this, t, n, r);
            else {
              "object" !== e(r) && (r = {
                capture: !!r
              });
              var o = this.__shady_parentNode;
              if (!o) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
              r.i = this, o.__shady_addEventListener(t, n, r)
            }
          },
          removeEventListener: function(t, n, r) {
            if ("slot" !== this.localName || "slotchange" === t) ee.call(this, t, n, r);
            else {
              "object" !== e(r) && (r = {
                capture: !!r
              });
              var o = this.__shady_parentNode;
              if (!o) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
              r.i = this, o.__shady_removeEventListener(t, n, r)
            }
          }
        }),
        je = window.document,
        Pe = M({
          importNode: function(t, e) {
            if (t.ownerDocument !== je || "template" === t.localName) return this.__shady_native_importNode(t, e);
            var n = this.__shady_native_importNode(t, !1);
            if (e)
              for (t = t.__shady_firstChild; t; t = t.__shady_nextSibling) e = this.__shady_importNode(t, !0), n.__shady_appendChild(e);
            return n
          }
        }),
        Re = M({
          addEventListener: te.bind(window),
          removeEventListener: ee.bind(window)
        }),
        Ie = {};
      Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Ie.parentElement = Q.parentElement), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Ie.contains = Q.contains), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Ie.children = et.children), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Ie.innerHTML = dt.innerHTML), Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Ie.className = ke.className);
      var Le = {
          EventTarget: [_e],
          Node: [Q, window.EventTarget ? null : _e],
          Text: [we],
          Element: [ke, et, we, !p.f || "innerHTML" in Element.prototype ? dt : null, window.HTMLSlotElement ? null : Me],
          HTMLElement: [Ae, Ie],
          HTMLSlotElement: [Me],
          DocumentFragment: [rt, ot],
          Document: [Pe, rt, ot, it],
          Window: [Re]
        },
        De = p.f ? null : ["innerHTML", "textContent"];

      function Fe(t) {
        var e, n = t ? null : De,
          r = {};
        for (e in Le) r.s = window[e] && window[e].prototype, Le[e].forEach(function(e) {
          return function(r) {
            return e.s && r && A(e.s, r, t, n)
          }
        }(r)), r = {
          s: r.s
        }
      }

      function He(t) {
        this.node = t
      }(n = He.prototype).addEventListener = function(t, e, n) {
        return this.node.__shady_addEventListener(t, e, n)
      }, n.removeEventListener = function(t, e, n) {
        return this.node.__shady_removeEventListener(t, e, n)
      }, n.appendChild = function(t) {
        return this.node.__shady_appendChild(t)
      }, n.insertBefore = function(t, e) {
        return this.node.__shady_insertBefore(t, e)
      }, n.removeChild = function(t) {
        return this.node.__shady_removeChild(t)
      }, n.replaceChild = function(t, e) {
        return this.node.__shady_replaceChild(t, e)
      }, n.cloneNode = function(t) {
        return this.node.__shady_cloneNode(t)
      }, n.getRootNode = function(t) {
        return this.node.__shady_getRootNode(t)
      }, n.contains = function(t) {
        return this.node.__shady_contains(t)
      }, n.dispatchEvent = function(t) {
        return this.node.__shady_dispatchEvent(t)
      }, n.setAttribute = function(t, e) {
        this.node.__shady_setAttribute(t, e)
      }, n.getAttribute = function(t) {
        return this.node.__shady_native_getAttribute(t)
      }, n.removeAttribute = function(t) {
        this.node.__shady_removeAttribute(t)
      }, n.attachShadow = function(t) {
        return this.node.__shady_attachShadow(t)
      }, n.focus = function() {
        this.node.__shady_native_focus()
      }, n.blur = function() {
        this.node.__shady_blur()
      }, n.importNode = function(t, e) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(t, e)
      }, n.getElementById = function(t) {
        if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(t)
      }, n.querySelector = function(t) {
        return this.node.__shady_querySelector(t)
      }, n.querySelectorAll = function(t, e) {
        return this.node.__shady_querySelectorAll(t, e)
      }, n.assignedNodes = function(t) {
        if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(t)
      }, s.Object.defineProperties(He.prototype, {
        activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            if (m(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement
          }
        },
        _activeElement: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.activeElement
          }
        },
        host: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            if (m(this.node)) return this.node.host
          }
        },
        parentNode: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_parentNode
          }
        },
        firstChild: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_firstChild
          }
        },
        lastChild: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_lastChild
          }
        },
        nextSibling: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_nextSibling
          }
        },
        previousSibling: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_previousSibling
          }
        },
        childNodes: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_childNodes
          }
        },
        parentElement: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_parentElement
          }
        },
        firstElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_firstElementChild
          }
        },
        lastElementChild: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_lastElementChild
          }
        },
        nextElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_nextElementSibling
          }
        },
        previousElementSibling: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_previousElementSibling
          }
        },
        children: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_children
          }
        },
        childElementCount: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_childElementCount
          }
        },
        shadowRoot: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_shadowRoot
          }
        },
        assignedSlot: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_assignedSlot
          }
        },
        isConnected: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_isConnected
          }
        },
        innerHTML: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_innerHTML
          },
          set: function(t) {
            this.node.__shady_innerHTML = t
          }
        },
        textContent: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_textContent
          },
          set: function(t) {
            this.node.__shady_textContent = t
          }
        },
        slot: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_slot
          },
          set: function(t) {
            this.node.__shady_slot = t
          }
        },
        className: {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return this.node.__shady_className
          },
          set: function(t) {
            return this.node.__shady_className = t
          }
        }
      }), ae.forEach(function(t) {
        Object.defineProperty(He.prototype, t, {
          get: function() {
            return this.node["__shady_" + t]
          },
          set: function(e) {
            this.node["__shady_" + t] = e
          },
          configurable: !0
        })
      });
      var qe = new WeakMap;
      p.F && (window.ShadyDOM = {
        inUse: p.F,
        patch: function(t) {
          return W(t), z(t), t
        },
        isShadyRoot: m,
        enqueue: R,
        flush: I,
        flushInitial: function(t) {
          !t.G && t.j && Ot(t)
        },
        settings: p,
        filterMutations: function(t, e) {
          var n = e.getRootNode();
          return t.map(function(t) {
            var e = n === t.target.getRootNode();
            if (e && t.addedNodes) {
              if ((e = Array.from(t.addedNodes).filter(function(t) {
                  return n === t.getRootNode()
                })).length) return t = Object.create(t), Object.defineProperty(t, "addedNodes", {
                value: e,
                configurable: !0
              }), t
            } else if (e) return t
          }).filter(function(t) {
            return t
          })
        },
        observeChildren: function(t, e) {
          var n = f(t);
          n.m || (n.m = new Ft), n.m.w.add(e);
          var r = n.m;
          return {
            P: e,
            T: r,
            S: t,
            takeRecords: function() {
              return r.takeRecords()
            }
          }
        },
        unobserveChildren: function(t) {
          var e = t && t.T;
          e && (e.w.delete(t.P), e.w.size || (f(t.S).m = null))
        },
        deferConnectionCallbacks: p.deferConnectionCallbacks,
        preferPerformance: p.preferPerformance,
        handlesDynamicScoping: !0,
        wrap: p.g ? function(t) {
          if (m(t) || t instanceof He) return t;
          var e = qe.get(t);
          return e || (e = new He(t), qe.set(t, e)), e
        } : function(t) {
          return t
        },
        Wrapper: He,
        composedPath: function(t) {
          return t.__composedPath || (t.__composedPath = Xt(t.target, !0)), t.__composedPath
        },
        noPatch: p.g,
        nativeMethods: ce,
        nativeTree: le
      }, function() {
        var t = ["dispatchEvent", "addEventListener", "removeEventListener"];
        window.EventTarget ? pe(window.EventTarget.prototype, t) : (pe(Node.prototype, t), pe(Window.prototype, t)), ue ? pe(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : he(Node.prototype, {
          parentNode: {
            get: function() {
              return de.currentNode = this, de.parentNode()
            }
          },
          firstChild: {
            get: function() {
              return de.currentNode = this, de.firstChild()
            }
          },
          lastChild: {
            get: function() {
              return de.currentNode = this, de.lastChild()
            }
          },
          previousSibling: {
            get: function() {
              return de.currentNode = this, de.previousSibling()
            }
          },
          nextSibling: {
            get: function() {
              return de.currentNode = this, de.nextSibling()
            }
          },
          childNodes: {
            get: function() {
              var t = [];
              de.currentNode = this;
              for (var e = de.firstChild(); e;) t.push(e), e = de.nextSibling();
              return t
            }
          },
          parentElement: {
            get: function() {
              return ye.currentNode = this, ye.parentNode()
            }
          },
          textContent: {
            get: function() {
              switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  for (var t, e = document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), n = ""; t = e.nextNode();) n += t.nodeValue;
                  return n;
                default:
                  return this.nodeValue
              }
            },
            set: function(t) {
              switch (null == t && (t = ""), this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                  me(this), (0 < t.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(t), void 0);
                  break;
                default:
                  this.nodeValue = t
              }
            }
          }
        }), pe(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" ")), pe(HTMLElement.prototype, ["parentElement", "contains"]), t = {
          firstElementChild: {
            get: function() {
              return ye.currentNode = this, ye.firstChild()
            }
          },
          lastElementChild: {
            get: function() {
              return ye.currentNode = this, ye.lastChild()
            }
          },
          children: {
            get: function() {
              var t = [];
              ye.currentNode = this;
              for (var e = ye.firstChild(); e;) t.push(e), e = ye.nextSibling();
              return C(t)
            }
          },
          childElementCount: {
            get: function() {
              return this.children ? this.children.length : 0
            }
          }
        }, ue ? (pe(Element.prototype, be), pe(Element.prototype, ["previousElementSibling", "nextElementSibling", "innerHTML", "className"]), pe(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (he(Element.prototype, t), he(Element.prototype, {
          previousElementSibling: {
            get: function() {
              return ye.currentNode = this, ye.previousSibling()
            }
          },
          nextElementSibling: {
            get: function() {
              return ye.currentNode = this, ye.nextSibling()
            }
          },
          innerHTML: {
            get: function() {
              return ht(this, N)
            },
            set: function(t) {
              var e = "template" === this.localName ? this.content : this;
              me(e);
              var n = this.localName || "div";
              for ((n = this.namespaceURI && this.namespaceURI !== ve.namespaceURI ? ve.createElementNS(this.namespaceURI, n) : ve.createElement(n)).innerHTML = t, t = "template" === this.localName ? n.content : n; n = t.__shady_native_firstChild;) e.__shady_native_insertBefore(n, void 0)
            }
          },
          className: {
            get: function() {
              return this.getAttribute("class") || ""
            },
            set: function(t) {
              this.setAttribute("class", t)
            }
          }
        })), pe(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" ")), pe(Element.prototype, ge), pe(HTMLElement.prototype, ["focus", "blur"]), window.HTMLTemplateElement && pe(window.HTMLTemplateElement.prototype, ["innerHTML"]), ue ? pe(DocumentFragment.prototype, be) : he(DocumentFragment.prototype, t), pe(DocumentFragment.prototype, ge), ue ? (pe(Document.prototype, be), pe(Document.prototype, ["activeElement"])) : he(Document.prototype, t), pe(Document.prototype, ["importNode", "getElementById"]), pe(Document.prototype, ge)
      }(), Fe("__shady_"), Object.defineProperty(document, "_activeElement", it.activeElement), A(Window.prototype, Re, "__shady_"), p.g || (Fe(), function() {
        if (!qt && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
          var t = function() {
            var t = new MouseEvent("click", {
              bubbles: !0,
              cancelable: !0,
              composed: !0
            });
            this.__shady_dispatchEvent(t)
          };
          Element.prototype.click ? Element.prototype.click = t : HTMLElement.prototype.click && (HTMLElement.prototype.click = t)
        }
      }()), function() {
        for (var t in Yt) window.__shady_native_addEventListener(t, function(t) {
          t.__target || (re(t), Zt(t))
        }, !0)
      }(), window.Event = oe, window.CustomEvent = ie, window.MouseEvent = se, window.ShadowRoot = St)
    }).call(this)
  }).call(this, n(88))
}, function(t, e) {
  (function() {
    "use strict";
    var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));

    function e(e) {
      var n = t.has(e);
      return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e
    }

    function n(t) {
      var e = t.isConnected;
      if (void 0 !== e) return e;
      for (; t && !(t.__CE_isImportDocument || t instanceof Document);) t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0);
      return !(!t || !(t.__CE_isImportDocument || t instanceof Document))
    }

    function r(t, e) {
      for (; e && e !== t && !e.nextSibling;) e = e.parentNode;
      return e && e !== t ? e.nextSibling : null
    }

    function o(t, e, n) {
      n = void 0 === n ? new Set : n;
      for (var i = t; i;) {
        if (i.nodeType === Node.ELEMENT_NODE) {
          var s = i;
          e(s);
          var a = s.localName;
          if ("link" === a && "import" === s.getAttribute("rel")) {
            if ((i = s.import) instanceof Node && !n.has(i))
              for (n.add(i), i = i.firstChild; i; i = i.nextSibling) o(i, e, n);
            i = r(t, s);
            continue
          }
          if ("template" === a) {
            i = r(t, s);
            continue
          }
          if (s = s.__CE_shadowRoot)
            for (s = s.firstChild; s; s = s.nextSibling) o(s, e, n)
        }
        i = i.firstChild ? i.firstChild : r(t, i)
      }
    }

    function i(t, e, n) {
      t[e] = n
    }

    function s() {
      this.a = new Map, this.g = new Map, this.c = [], this.f = [], this.b = !1
    }

    function a(t, e) {
      t.b && o(e, function(e) {
        return u(t, e)
      })
    }

    function u(t, e) {
      if (t.b && !e.__CE_patched) {
        e.__CE_patched = !0;
        for (var n = 0; n < t.c.length; n++) t.c[n](e);
        for (n = 0; n < t.f.length; n++) t.f[n](e)
      }
    }

    function c(t, e) {
      var n = [];
      for (o(e, function(t) {
          return n.push(t)
        }), e = 0; e < n.length; e++) {
        var r = n[e];
        1 === r.__CE_state ? t.connectedCallback(r) : h(t, r)
      }
    }

    function l(t, e) {
      var n = [];
      for (o(e, function(t) {
          return n.push(t)
        }), e = 0; e < n.length; e++) {
        var r = n[e];
        1 === r.__CE_state && t.disconnectedCallback(r)
      }
    }

    function f(t, e, n) {
      var r = (n = void 0 === n ? {} : n).u || new Set,
        i = n.i || function(e) {
          return h(t, e)
        },
        s = [];
      if (o(e, function(e) {
          if ("link" === e.localName && "import" === e.getAttribute("rel")) {
            var n = e.import;
            n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function() {
              var n = e.import;
              if (!n.__CE_documentLoadHandled) {
                n.__CE_documentLoadHandled = !0;
                var o = new Set(r);
                o.delete(n), f(t, n, {
                  u: o,
                  i: i
                })
              }
            })
          } else s.push(e)
        }, r), t.b)
        for (e = 0; e < s.length; e++) u(t, s[e]);
      for (e = 0; e < s.length; e++) i(s[e])
    }

    function h(t, e) {
      if (void 0 === e.__CE_state) {
        var r = e.ownerDocument;
        if ((r.defaultView || r.__CE_isImportDocument && r.__CE_hasRegistry) && (r = t.a.get(e.localName))) {
          r.constructionStack.push(e);
          var o = r.constructorFunction;
          try {
            try {
              if (new o !== e) throw Error("The custom element constructor did not produce the element being upgraded.")
            } finally {
              r.constructionStack.pop()
            }
          } catch (t) {
            throw e.__CE_state = 2, t
          }
          if (e.__CE_state = 1, e.__CE_definition = r, r.attributeChangedCallback)
            for (r = r.observedAttributes, o = 0; o < r.length; o++) {
              var i = r[o],
                s = e.getAttribute(i);
              null !== s && t.attributeChangedCallback(e, i, null, s, null)
            }
          n(e) && t.connectedCallback(e)
        }
      }
    }

    function p(t) {
      var e = document;
      this.c = t, this.a = e, this.b = void 0, f(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, {
        childList: !0,
        subtree: !0
      }))
    }

    function d(t) {
      t.b && t.b.disconnect()
    }

    function y() {
      var t = this;
      this.b = this.a = void 0, this.c = new Promise(function(e) {
        t.b = e, t.a && e(t.a)
      })
    }

    function v(t) {
      if (t.a) throw Error("Already resolved.");
      t.a = void 0, t.b && t.b(void 0)
    }

    function m(t) {
      this.c = !1, this.a = t, this.j = new Map, this.f = function(t) {
        return t()
      }, this.b = !1, this.g = [], this.o = new p(t)
    }
    s.prototype.connectedCallback = function(t) {
      var e = t.__CE_definition;
      e.connectedCallback && e.connectedCallback.call(t)
    }, s.prototype.disconnectedCallback = function(t) {
      var e = t.__CE_definition;
      e.disconnectedCallback && e.disconnectedCallback.call(t)
    }, s.prototype.attributeChangedCallback = function(t, e, n, r, o) {
      var i = t.__CE_definition;
      i.attributeChangedCallback && -1 < i.observedAttributes.indexOf(e) && i.attributeChangedCallback.call(t, e, n, r, o)
    }, p.prototype.f = function(t) {
      var e = this.a.readyState;
      for ("interactive" !== e && "complete" !== e || d(this), e = 0; e < t.length; e++)
        for (var n = t[e].addedNodes, r = 0; r < n.length; r++) f(this.c, n[r])
    }, m.prototype.l = function(t, n) {
      var r = this;
      if (!(n instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!e(t)) throw new SyntaxError("The element name '" + t + "' is not valid.");
      if (this.a.a.get(t)) throw Error("A custom element with name '" + t + "' has already been defined.");
      if (this.c) throw Error("A custom element is already being defined.");
      this.c = !0;
      try {
        var o = function(t) {
            var e = i[t];
            if (void 0 !== e && !(e instanceof Function)) throw Error("The '" + t + "' callback must be a function.");
            return e
          },
          i = n.prototype;
        if (!(i instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var s = o("connectedCallback"),
          a = o("disconnectedCallback"),
          u = o("adoptedCallback"),
          c = o("attributeChangedCallback"),
          l = n.observedAttributes || []
      } catch (t) {
        return
      } finally {
        this.c = !1
      }
      n = {
          localName: t,
          constructorFunction: n,
          connectedCallback: s,
          disconnectedCallback: a,
          adoptedCallback: u,
          attributeChangedCallback: c,
          observedAttributes: l,
          constructionStack: []
        },
        function(t, e, n) {
          t.a.set(e, n), t.g.set(n.constructorFunction, n)
        }(this.a, t, n), this.g.push(n), this.b || (this.b = !0, this.f(function() {
          return function(t) {
            if (!1 !== t.b) {
              t.b = !1;
              for (var e = t.g, n = [], r = new Map, o = 0; o < e.length; o++) r.set(e[o].localName, []);
              for (f(t.a, document, {
                  i: function(e) {
                    if (void 0 === e.__CE_state) {
                      var o = e.localName,
                        i = r.get(o);
                      i ? i.push(e) : t.a.a.get(o) && n.push(e)
                    }
                  }
                }), o = 0; o < n.length; o++) h(t.a, n[o]);
              for (; 0 < e.length;) {
                var i = e.shift();
                o = i.localName, i = r.get(i.localName);
                for (var s = 0; s < i.length; s++) h(t.a, i[s]);
                (o = t.j.get(o)) && v(o)
              }
            }
          }(r)
        }))
    }, m.prototype.i = function(t) {
      f(this.a, t)
    }, m.prototype.get = function(t) {
      if (t = this.a.a.get(t)) return t.constructorFunction
    }, m.prototype.m = function(t) {
      if (!e(t)) return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name."));
      var n = this.j.get(t);
      return n ? n.c : (n = new y, this.j.set(t, n), this.a.a.get(t) && !this.g.some(function(e) {
        return e.localName === t
      }) && v(n), n.c)
    }, m.prototype.s = function(t) {
      d(this.o);
      var e = this.f;
      this.f = function(n) {
        return t(function() {
          return e(n)
        })
      }
    }, window.CustomElementRegistry = m, m.prototype.define = m.prototype.l, m.prototype.upgrade = m.prototype.i, m.prototype.get = m.prototype.get, m.prototype.whenDefined = m.prototype.m, m.prototype.polyfillWrapFlushCallback = m.prototype.s;
    var b = window.Document.prototype.createElement,
      g = window.Document.prototype.createElementNS,
      _ = window.Document.prototype.importNode,
      w = window.Document.prototype.prepend,
      S = window.Document.prototype.append,
      E = window.DocumentFragment.prototype.prepend,
      x = window.DocumentFragment.prototype.append,
      O = window.Node.prototype.cloneNode,
      T = window.Node.prototype.appendChild,
      C = window.Node.prototype.insertBefore,
      N = window.Node.prototype.removeChild,
      k = window.Node.prototype.replaceChild,
      A = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
      M = window.Element.prototype.attachShadow,
      j = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
      P = window.Element.prototype.getAttribute,
      R = window.Element.prototype.setAttribute,
      I = window.Element.prototype.removeAttribute,
      L = window.Element.prototype.getAttributeNS,
      D = window.Element.prototype.setAttributeNS,
      F = window.Element.prototype.removeAttributeNS,
      H = window.Element.prototype.insertAdjacentElement,
      q = window.Element.prototype.insertAdjacentHTML,
      B = window.Element.prototype.prepend,
      U = window.Element.prototype.append,
      z = window.Element.prototype.before,
      W = window.Element.prototype.after,
      V = window.Element.prototype.replaceWith,
      X = window.Element.prototype.remove,
      $ = window.HTMLElement,
      G = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
      Y = window.HTMLElement.prototype.insertAdjacentElement,
      K = window.HTMLElement.prototype.insertAdjacentHTML,
      J = new function() {};

    function Z(t, e, r) {
      function o(e) {
        return function(r) {
          for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
          i = [];
          for (var s = [], a = 0; a < o.length; a++) {
            var u = o[a];
            if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment)
              for (u = u.firstChild; u; u = u.nextSibling) i.push(u);
            else i.push(u)
          }
          for (e.apply(this, o), o = 0; o < s.length; o++) l(t, s[o]);
          if (n(this))
            for (o = 0; o < i.length; o++)(s = i[o]) instanceof Element && c(t, s)
        }
      }
      void 0 !== r.h && (e.prepend = o(r.h)), void 0 !== r.append && (e.append = o(r.append))
    }
    var Q, tt = window.customElements;
    if (!tt || tt.forcePolyfill || "function" != typeof tt.define || "function" != typeof tt.get) {
      var et = new s;
      Q = et, window.HTMLElement = function() {
          function t() {
            var t = this.constructor,
              e = Q.g.get(t);
            if (!e) throw Error("The custom element being constructed was not registered with `customElements`.");
            var n = e.constructionStack;
            if (0 === n.length) return n = b.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), n.__CE_state = 1, n.__CE_definition = e, u(Q, n), n;
            var r = n[e = n.length - 1];
            if (r === J) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
            return n[e] = J, Object.setPrototypeOf(r, t.prototype), u(Q, r), r
          }
          return t.prototype = $.prototype, Object.defineProperty(t.prototype, "constructor", {
            writable: !0,
            configurable: !0,
            enumerable: !1,
            value: t
          }), t
        }(),
        function() {
          var t = et;
          i(Document.prototype, "createElement", function(e) {
            if (this.__CE_hasRegistry) {
              var n = t.a.get(e);
              if (n) return new n.constructorFunction
            }
            return e = b.call(this, e), u(t, e), e
          }), i(Document.prototype, "importNode", function(e, n) {
            return e = _.call(this, e, !!n), this.__CE_hasRegistry ? f(t, e) : a(t, e), e
          }), i(Document.prototype, "createElementNS", function(e, n) {
            if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
              var r = t.a.get(n);
              if (r) return new r.constructorFunction
            }
            return e = g.call(this, e, n), u(t, e), e
          }), Z(t, Document.prototype, {
            h: w,
            append: S
          })
        }(), Z(et, DocumentFragment.prototype, {
          h: E,
          append: x
        }),
        function() {
          function t(t, r) {
            Object.defineProperty(t, "textContent", {
              enumerable: r.enumerable,
              configurable: !0,
              get: r.get,
              set: function(t) {
                if (this.nodeType === Node.TEXT_NODE) r.set.call(this, t);
                else {
                  var o = void 0;
                  if (this.firstChild) {
                    var i = this.childNodes,
                      s = i.length;
                    if (0 < s && n(this)) {
                      o = Array(s);
                      for (var a = 0; a < s; a++) o[a] = i[a]
                    }
                  }
                  if (r.set.call(this, t), o)
                    for (t = 0; t < o.length; t++) l(e, o[t])
                }
              }
            })
          }
          var e = et;
          i(Node.prototype, "insertBefore", function(t, r) {
            if (t instanceof DocumentFragment) {
              var o = Array.prototype.slice.apply(t.childNodes);
              if (t = C.call(this, t, r), n(this))
                for (r = 0; r < o.length; r++) c(e, o[r]);
              return t
            }
            return o = n(t), r = C.call(this, t, r), o && l(e, t), n(this) && c(e, t), r
          }), i(Node.prototype, "appendChild", function(t) {
            if (t instanceof DocumentFragment) {
              var r = Array.prototype.slice.apply(t.childNodes);
              if (t = T.call(this, t), n(this))
                for (var o = 0; o < r.length; o++) c(e, r[o]);
              return t
            }
            return r = n(t), o = T.call(this, t), r && l(e, t), n(this) && c(e, t), o
          }), i(Node.prototype, "cloneNode", function(t) {
            return t = O.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? f(e, t) : a(e, t), t
          }), i(Node.prototype, "removeChild", function(t) {
            var r = n(t),
              o = N.call(this, t);
            return r && l(e, t), o
          }), i(Node.prototype, "replaceChild", function(t, r) {
            if (t instanceof DocumentFragment) {
              var o = Array.prototype.slice.apply(t.childNodes);
              if (t = k.call(this, t, r), n(this))
                for (l(e, r), r = 0; r < o.length; r++) c(e, o[r]);
              return t
            }
            o = n(t);
            var i = k.call(this, t, r),
              s = n(this);
            return s && l(e, r), o && l(e, t), s && c(e, t), i
          }), A && A.get ? t(Node.prototype, A) : function(t, e) {
            t.b = !0, t.c.push(e)
          }(e, function(e) {
            t(e, {
              enumerable: !0,
              configurable: !0,
              get: function() {
                for (var t = [], e = 0; e < this.childNodes.length; e++) {
                  var n = this.childNodes[e];
                  n.nodeType !== Node.COMMENT_NODE && t.push(n.textContent)
                }
                return t.join("")
              },
              set: function(t) {
                for (; this.firstChild;) N.call(this, this.firstChild);
                null != t && "" !== t && T.call(this, document.createTextNode(t))
              }
            })
          })
        }(),
        function() {
          function t(t, e) {
            Object.defineProperty(t, "innerHTML", {
              enumerable: e.enumerable,
              configurable: !0,
              get: e.get,
              set: function(t) {
                var r = this,
                  i = void 0;
                if (n(this) && (i = [], o(this, function(t) {
                    t !== r && i.push(t)
                  })), e.set.call(this, t), i)
                  for (var u = 0; u < i.length; u++) {
                    var c = i[u];
                    1 === c.__CE_state && s.disconnectedCallback(c)
                  }
                return this.ownerDocument.__CE_hasRegistry ? f(s, this) : a(s, this), t
              }
            })
          }

          function e(t, e) {
            i(t, "insertAdjacentElement", function(t, r) {
              var o = n(r);
              return t = e.call(this, t, r), o && l(s, r), n(t) && c(s, r), t
            })
          }

          function r(t, e) {
            function n(t, e) {
              for (var n = []; t !== e; t = t.nextSibling) n.push(t);
              for (e = 0; e < n.length; e++) f(s, n[e])
            }
            i(t, "insertAdjacentHTML", function(t, r) {
              if ("beforebegin" === (t = t.toLowerCase())) {
                var o = this.previousSibling;
                e.call(this, t, r), n(o || this.parentNode.firstChild, this)
              } else if ("afterbegin" === t) o = this.firstChild, e.call(this, t, r), n(this.firstChild, o);
              else if ("beforeend" === t) o = this.lastChild, e.call(this, t, r), n(o || this.firstChild, null);
              else {
                if ("afterend" !== t) throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
                o = this.nextSibling, e.call(this, t, r), n(this.nextSibling, o)
              }
            })
          }
          var s = et;
          M && i(Element.prototype, "attachShadow", function(t) {
              t = M.call(this, t);
              var e = s;
              if (e.b && !t.__CE_patched) {
                t.__CE_patched = !0;
                for (var n = 0; n < e.c.length; n++) e.c[n](t)
              }
              return this.__CE_shadowRoot = t
            }), j && j.get ? t(Element.prototype, j) : G && G.get ? t(HTMLElement.prototype, G) : function(t, e) {
              t.b = !0, t.f.push(e)
            }(s, function(e) {
              t(e, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                  return O.call(this, !0).innerHTML
                },
                set: function(t) {
                  var e = "template" === this.localName,
                    n = e ? this.content : this,
                    r = g.call(document, this.namespaceURI, this.localName);
                  for (r.innerHTML = t; 0 < n.childNodes.length;) N.call(n, n.childNodes[0]);
                  for (t = e ? r.content : r; 0 < t.childNodes.length;) T.call(n, t.childNodes[0])
                }
              })
            }), i(Element.prototype, "setAttribute", function(t, e) {
              if (1 !== this.__CE_state) return R.call(this, t, e);
              var n = P.call(this, t);
              R.call(this, t, e), e = P.call(this, t), s.attributeChangedCallback(this, t, n, e, null)
            }), i(Element.prototype, "setAttributeNS", function(t, e, n) {
              if (1 !== this.__CE_state) return D.call(this, t, e, n);
              var r = L.call(this, t, e);
              D.call(this, t, e, n), n = L.call(this, t, e), s.attributeChangedCallback(this, e, r, n, t)
            }), i(Element.prototype, "removeAttribute", function(t) {
              if (1 !== this.__CE_state) return I.call(this, t);
              var e = P.call(this, t);
              I.call(this, t), null !== e && s.attributeChangedCallback(this, t, e, null, null)
            }), i(Element.prototype, "removeAttributeNS", function(t, e) {
              if (1 !== this.__CE_state) return F.call(this, t, e);
              var n = L.call(this, t, e);
              F.call(this, t, e);
              var r = L.call(this, t, e);
              n !== r && s.attributeChangedCallback(this, e, n, r, t)
            }), Y ? e(HTMLElement.prototype, Y) : H ? e(Element.prototype, H) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), K ? r(HTMLElement.prototype, K) : q ? r(Element.prototype, q) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), Z(s, Element.prototype, {
              h: B,
              append: U
            }),
            function(t) {
              function e(e) {
                return function(r) {
                  for (var o = [], i = 0; i < arguments.length; ++i) o[i] = arguments[i];
                  i = [];
                  for (var s = [], a = 0; a < o.length; a++) {
                    var u = o[a];
                    if (u instanceof Element && n(u) && s.push(u), u instanceof DocumentFragment)
                      for (u = u.firstChild; u; u = u.nextSibling) i.push(u);
                    else i.push(u)
                  }
                  for (e.apply(this, o), o = 0; o < s.length; o++) l(t, s[o]);
                  if (n(this))
                    for (o = 0; o < i.length; o++)(s = i[o]) instanceof Element && c(t, s)
                }
              }
              var r = Element.prototype;
              void 0 !== z && (r.before = e(z)), void 0 !== z && (r.after = e(W)), void 0 !== V && i(r, "replaceWith", function(e) {
                for (var r = [], o = 0; o < arguments.length; ++o) r[o] = arguments[o];
                o = [];
                for (var i = [], s = 0; s < r.length; s++) {
                  var a = r[s];
                  if (a instanceof Element && n(a) && i.push(a), a instanceof DocumentFragment)
                    for (a = a.firstChild; a; a = a.nextSibling) o.push(a);
                  else o.push(a)
                }
                for (s = n(this), V.apply(this, r), r = 0; r < i.length; r++) l(t, i[r]);
                if (s)
                  for (l(t, this), r = 0; r < o.length; r++)(i = o[r]) instanceof Element && c(t, i)
              }), void 0 !== X && i(r, "remove", function() {
                var e = n(this);
                X.call(this), e && l(t, this)
              })
            }(s)
        }(), document.__CE_hasRegistry = !0;
      var nt = new m(et);
      Object.defineProperty(window, "customElements", {
        configurable: !0,
        enumerable: !0,
        value: nt
      })
    }
  }).call(self)
}, function(t, e) {
  function n(t) {
    return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }! function(t, e, r) {
    var o = [],
      i = {
        _version: "3.6.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !1
        },
        _q: [],
        on: function(t, e) {
          var n = this;
          setTimeout(function() {
            e(n[t])
          }, 0)
        },
        addTest: function(t, e, n) {
          o.push({
            name: t,
            fn: e,
            options: n
          })
        },
        addAsyncTest: function(t) {
          o.push({
            name: null,
            fn: t
          })
        }
      },
      s = function() {};
    s.prototype = i, s = new s;
    var a = t.CSS && t.CSS.supports.bind(t.CSS) || t.supportsCSS;

    function u(t, e) {
      return n(t) === e
    }
    s.addTest("customproperties", !!a && (a("--f:0") || a("--f", 0))), s.addTest("customelements", "customElements" in t), s.addTest("customevent", "CustomEvent" in t && "function" == typeof t.CustomEvent), s.addTest("eventlistener", "addEventListener" in t), s.addTest("queryselector", "querySelector" in e && "querySelectorAll" in e), s.addTest("history", function() {
      var e = navigator.userAgent;
      return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history)
    }), s.addTest("promises", function() {
      return "Promise" in t && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && (new t.Promise(function(t) {
        e = t
      }), "function" == typeof e);
      var e
    });
    var c = [];
    var l = i._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    i._prefixes = l;
    var f = e.documentElement;
    s.addTest("classlist", "classList" in f), s.addTest("documentfragment", function() {
      return "createDocumentFragment" in e && "appendChild" in f
    });
    var h = "svg" === f.nodeName.toLowerCase();

    function p() {
      return "function" != typeof e.createElement ? e.createElement(arguments[0]) : h ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function d(t) {
      return t.replace(/([a-z])-([a-z])/g, function(t, e, n) {
        return e + n.toUpperCase()
      }).replace(/^-/, "")
    }

    function y(t, n, r, o) {
      var i, s, a, u, c = "modernizr",
        l = p("div"),
        d = function() {
          var t = e.body;
          return t || ((t = p(h ? "svg" : "body")).fake = !0), t
        }();
      if (parseInt(r, 10))
        for (; r--;)(a = p("div")).id = o ? o[r] : c + (r + 1), l.appendChild(a);
      return (i = p("style")).type = "text/css", i.id = "s" + c, (d.fake ? d : l).appendChild(i), d.appendChild(l), i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)), l.id = c, d.fake && (d.style.background = "", d.style.overflow = "hidden", u = f.style.overflow, f.style.overflow = "hidden", f.appendChild(d)), s = n(l, t), d.fake ? (d.parentNode.removeChild(d), f.style.overflow = u, f.offsetHeight) : l.parentNode.removeChild(l), !!s
    }
    s.addTest("opacity", function() {
      var t = p("a").style;
      return t.cssText = l.join("opacity:.55;"), /^0.55$/.test(t.opacity)
    }), s.addTest("csspointerevents", function() {
      var t = p("a").style;
      return t.cssText = "pointer-events:auto", "auto" === t.pointerEvents
    }), s.addTest("cssremunit", function() {
      var t = p("a").style;
      try {
        t.fontSize = "3rem"
      } catch (t) {}
      return /rem/.test(t.fontSize)
    }), s.addTest("template", "content" in p("template"));
    var v = i.testStyles = y;
    s.addTest("touchevents", function() {
      var n;
      if ("ontouchstart" in t || t.DocumentTouch && e instanceof DocumentTouch) n = !0;
      else {
        var r = ["@media (", l.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
        v(r, function(t) {
          n = 9 === t.offsetTop
        })
      }
      return n
    });
    var m = i._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];
    i._cssomPrefixes = m;
    var b = function(e) {
      var n, o = l.length,
        i = t.CSSRule;
      if (void 0 === i) return r;
      if (!e) return !1;
      if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in i) return "@" + e;
      for (var s = 0; s < o; s++) {
        var a = l[s];
        if (a.toUpperCase() + "_" + n in i) return "@-" + a.toLowerCase() + "-" + e
      }
      return !1
    };
    i.atRule = b;
    var g = i._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];

    function _(t, e) {
      return function() {
        return t.apply(e, arguments)
      }
    }

    function w(t) {
      return t.replace(/([A-Z])/g, function(t, e) {
        return "-" + e.toLowerCase()
      }).replace(/^ms-/, "-ms-")
    }

    function S(e, n) {
      var o = e.length;
      if ("CSS" in t && "supports" in t.CSS) {
        for (; o--;)
          if (t.CSS.supports(w(e[o]), n)) return !0;
        return !1
      }
      if ("CSSSupportsRule" in t) {
        for (var i = []; o--;) i.push("(" + w(e[o]) + ":" + n + ")");
        return y("@supports (" + (i = i.join(" or ")) + ") { #modernizr { position: absolute; } }", function(e) {
          return "absolute" == function(e, n, r) {
            var o;
            if ("getComputedStyle" in t) {
              o = getComputedStyle.call(t, e, n);
              var i = t.console;
              null !== o ? r && (o = o.getPropertyValue(r)) : i && i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
            } else o = !n && e.currentStyle && e.currentStyle[r];
            return o
          }(e, null, "position")
        })
      }
      return r
    }
    i._domPrefixes = g;
    var E = {
      elem: p("modernizr")
    };
    s._q.push(function() {
      delete E.elem
    });
    var x = {
      style: E.elem.style
    };

    function O(t, e, n, o, i) {
      var s = t.charAt(0).toUpperCase() + t.slice(1),
        a = (t + " " + m.join(s + " ") + s).split(" ");
      return u(e, "string") || u(e, "undefined") ? function(t, e, n, o) {
        if (o = !u(o, "undefined") && o, !u(n, "undefined")) {
          var i = S(t, n);
          if (!u(i, "undefined")) return i
        }
        for (var s, a, c, l, f, h = ["modernizr", "tspan", "samp"]; !x.style && h.length;) s = !0, x.modElem = p(h.shift()), x.style = x.modElem.style;

        function y() {
          s && (delete x.style, delete x.modElem)
        }
        for (c = t.length, a = 0; a < c; a++)
          if (l = t[a], f = x.style[l], ~("" + l).indexOf("-") && (l = d(l)), x.style[l] !== r) {
            if (o || u(n, "undefined")) return y(), "pfx" != e || l;
            try {
              x.style[l] = n
            } catch (t) {}
            if (x.style[l] != f) return y(), "pfx" != e || l
          } return y(), !1
      }(a, e, o, i) : function(t, e, n) {
        var r;
        for (var o in t)
          if (t[o] in e) return !1 === n ? t[o] : u(r = e[t[o]], "function") ? _(r, n || e) : r;
        return !1
      }(a = (t + " " + g.join(s + " ") + s).split(" "), e, n)
    }

    function T(t, e, n) {
      return O(t, r, r, e, n)
    }
    s._q.unshift(function() {
      delete x.style
    }), i.testAllProps = O, i.testAllProps = T, s.addTest("cssanimations", T("animationName", "a", !0)), s.addTest("csstransforms", function() {
      return -1 === navigator.userAgent.indexOf("Android 2.") && T("transform", "scale(1)", !0)
    });
    var C = i.prefixed = function(t, e, n) {
      return 0 === t.indexOf("@") ? b(t) : (-1 != t.indexOf("-") && (t = d(t)), e ? O(t, e, n) : O(t, "pfx"))
    };
    s.addTest("requestanimationframe", !!C("requestAnimationFrame", t), {
        aliases: ["raf"]
      }), s.addTest("matchmedia", !!C("matchMedia", t)),
      function() {
        var t, e, n, r, i, a;
        for (var l in o)
          if (o.hasOwnProperty(l)) {
            if (t = [], (e = o[l]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
              for (n = 0; n < e.options.aliases.length; n++) t.push(e.options.aliases[n].toLowerCase());
            for (r = u(e.fn, "function") ? e.fn() : e.fn, i = 0; i < t.length; i++) 1 === (a = t[i].split(".")).length ? s[a[0]] = r : (!s[a[0]] || s[a[0]] instanceof Boolean || (s[a[0]] = new Boolean(s[a[0]])), s[a[0]][a[1]] = r), c.push((r ? "" : "no-") + a.join("-"))
          }
      }(), delete i.addTest, delete i.addAsyncTest;
    for (var N = 0; N < s._q.length; N++) s._q[N]();
    t.Modernizr = s
  }(window, document)
}, function(t, e) {
  window.requestIdleCallback = window.requestIdleCallback || function(t) {
    return window.setTimeout(t, 0)
  }, window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout
}, function(t, e) {
  console.log(" __  __                __                                     __         \r\n/\\ \\/\\ \\              /\\ \\             __                    /\\ \\        \r\n\\ \\ \\_\\ \\   __  __    \\_\\ \\      __   /\\_\\      __       ___ \\ \\ \\/'\\    \r\n \\ \\  _  \\ /\\ \\/\\ \\   /'_` \\   /'__`\\ \\/\\ \\   /'__`\\    /'___\\\\ \\ , <    \r\n  \\ \\ \\ \\ \\\\ \\ \\_\\ \\ /\\ \\L\\ \\ /\\  __/  \\ \\ \\ /\\ \\L\\.\\_ /\\ \\__/ \\ \\ \\\\`\\  \r\n   \\ \\_\\ \\_\\\\/`____ \\\\ \\___,_\\\\ \\____\\ _\\ \\ \\\\ \\__/.\\_\\\\ \\____\\ \\ \\_\\ \\_\\\r\n    \\/_/\\/_/ `/___/> \\\\/__,_ / \\/____//\\ \\_\\ \\\\/__/\\/_/ \\/____/  \\/_/\\/_/\r\n                /\\___/                \\ \\____/                           \r\n                \\/__/                  \\/___/                            \n\n"), console.log("Powered by Hydejack v8.5.2 <https://hydejack.com/>")
}, function(t, e, n) {
  var r = n(119),
    o = n(294),
    i = {};
  for (var s in r) r.hasOwnProperty(s) && (i[r[s]] = s);
  var a = t.exports = {
    to: {},
    get: {}
  };

  function u(t, e, n) {
    return Math.min(Math.max(e, t), n)
  }

  function c(t) {
    var e = t.toString(16).toUpperCase();
    return e.length < 2 ? "0" + e : e
  }
  a.get = function(t) {
    var e, n;
    switch (t.substring(0, 3).toLowerCase()) {
      case "hsl":
        e = a.get.hsl(t), n = "hsl";
        break;
      case "hwb":
        e = a.get.hwb(t), n = "hwb";
        break;
      default:
        e = a.get.rgb(t), n = "rgb"
    }
    return e ? {
      model: n,
      value: e
    } : null
  }, a.get.rgb = function(t) {
    if (!t) return null;
    var e, n, o, i = [0, 0, 0, 1];
    if (e = t.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)) {
      for (o = e[2], e = e[1], n = 0; n < 3; n++) {
        var s = 2 * n;
        i[n] = parseInt(e.slice(s, s + 2), 16)
      }
      o && (i[3] = Math.round(parseInt(o, 16) / 255 * 100) / 100)
    } else if (e = t.match(/^#([a-f0-9]{3,4})$/i)) {
      for (o = (e = e[1])[3], n = 0; n < 3; n++) i[n] = parseInt(e[n] + e[n], 16);
      o && (i[3] = Math.round(parseInt(o + o, 16) / 255 * 100) / 100)
    } else if (e = t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)) {
      for (n = 0; n < 3; n++) i[n] = parseInt(e[n + 1], 0);
      e[4] && (i[3] = parseFloat(e[4]))
    } else {
      if (!(e = t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/))) return (e = t.match(/(\D+)/)) ? "transparent" === e[1] ? [0, 0, 0, 0] : (i = r[e[1]]) ? (i[3] = 1, i) : null : null;
      for (n = 0; n < 3; n++) i[n] = Math.round(2.55 * parseFloat(e[n + 1]));
      e[4] && (i[3] = parseFloat(e[4]))
    }
    for (n = 0; n < 3; n++) i[n] = u(i[n], 0, 255);
    return i[3] = u(i[3], 0, 1), i
  }, a.get.hsl = function(t) {
    if (!t) return null;
    var e = t.match(/^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
    if (e) {
      var n = parseFloat(e[4]);
      return [(parseFloat(e[1]) + 360) % 360, u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
    }
    return null
  }, a.get.hwb = function(t) {
    if (!t) return null;
    var e = t.match(/^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);
    if (e) {
      var n = parseFloat(e[4]);
      return [(parseFloat(e[1]) % 360 + 360) % 360, u(parseFloat(e[2]), 0, 100), u(parseFloat(e[3]), 0, 100), u(isNaN(n) ? 1 : n, 0, 1)]
    }
    return null
  }, a.to.hex = function() {
    var t = o(arguments);
    return "#" + c(t[0]) + c(t[1]) + c(t[2]) + (t[3] < 1 ? c(Math.round(255 * t[3])) : "")
  }, a.to.rgb = function() {
    var t = o(arguments);
    return t.length < 4 || 1 === t[3] ? "rgb(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ")" : "rgba(" + Math.round(t[0]) + ", " + Math.round(t[1]) + ", " + Math.round(t[2]) + ", " + t[3] + ")"
  }, a.to.rgb.percent = function() {
    var t = o(arguments),
      e = Math.round(t[0] / 255 * 100),
      n = Math.round(t[1] / 255 * 100),
      r = Math.round(t[2] / 255 * 100);
    return t.length < 4 || 1 === t[3] ? "rgb(" + e + "%, " + n + "%, " + r + "%)" : "rgba(" + e + "%, " + n + "%, " + r + "%, " + t[3] + ")"
  }, a.to.hsl = function() {
    var t = o(arguments);
    return t.length < 4 || 1 === t[3] ? "hsl(" + t[0] + ", " + t[1] + "%, " + t[2] + "%)" : "hsla(" + t[0] + ", " + t[1] + "%, " + t[2] + "%, " + t[3] + ")"
  }, a.to.hwb = function() {
    var t = o(arguments),
      e = "";
    return t.length >= 4 && 1 !== t[3] && (e = ", " + t[3]), "hwb(" + t[0] + ", " + t[1] + "%, " + t[2] + "%" + e + ")"
  }, a.to.keyword = function(t) {
    return i[t.slice(0, 3)]
  }
}, function(t, e, n) {
  "use strict";
  var r = n(295),
    o = Array.prototype.concat,
    i = Array.prototype.slice,
    s = t.exports = function(t) {
      for (var e = [], n = 0, s = t.length; n < s; n++) {
        var a = t[n];
        r(a) ? e = o.call(e, i.call(a)) : e.push(a)
      }
      return e
    };
  s.wrap = function(t) {
    return function() {
      return t(s(arguments))
    }
  }
}, function(t, e) {
  t.exports = function(t) {
    return !(!t || "string" == typeof t) && (t instanceof Array || Array.isArray(t) || t.length >= 0 && (t.splice instanceof Function || Object.getOwnPropertyDescriptor(t, t.length - 1) && "String" !== t.constructor.name))
  }
}, function(t, e, n) {
  function r(t) {
    return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var o = n(120),
    i = n(297),
    s = {};
  Object.keys(o).forEach(function(t) {
    s[t] = {}, Object.defineProperty(s[t], "channels", {
      value: o[t].channels
    }), Object.defineProperty(s[t], "labels", {
      value: o[t].labels
    });
    var e = i(t);
    Object.keys(e).forEach(function(n) {
      var o = e[n];
      s[t][n] = function(t) {
        var e = function(e) {
          if (null == e) return e;
          arguments.length > 1 && (e = Array.prototype.slice.call(arguments));
          var n = t(e);
          if ("object" === r(n))
            for (var o = n.length, i = 0; i < o; i++) n[i] = Math.round(n[i]);
          return n
        };
        return "conversion" in t && (e.conversion = t.conversion), e
      }(o), s[t][n].raw = function(t) {
        var e = function(e) {
          return null == e ? e : (arguments.length > 1 && (e = Array.prototype.slice.call(arguments)), t(e))
        };
        return "conversion" in t && (e.conversion = t.conversion), e
      }(o)
    })
  }), t.exports = s
}, function(t, e, n) {
  var r = n(120);

  function o(t) {
    var e = function() {
        for (var t = {}, e = Object.keys(r), n = e.length, o = 0; o < n; o++) t[e[o]] = {
          distance: -1,
          parent: null
        };
        return t
      }(),
      n = [t];
    for (e[t].distance = 0; n.length;)
      for (var o = n.pop(), i = Object.keys(r[o]), s = i.length, a = 0; a < s; a++) {
        var u = i[a],
          c = e[u]; - 1 === c.distance && (c.distance = e[o].distance + 1, c.parent = o, n.unshift(u))
      }
    return e
  }

  function i(t, e) {
    return function(n) {
      return e(t(n))
    }
  }

  function s(t, e) {
    for (var n = [e[t].parent, t], o = r[e[t].parent][t], s = e[t].parent; e[s].parent;) n.unshift(e[s].parent), o = i(r[e[s].parent][s], o), s = e[s].parent;
    return o.conversion = n, o
  }
  t.exports = function(t) {
    for (var e = o(t), n = {}, r = Object.keys(e), i = r.length, a = 0; a < i; a++) {
      var u = r[a];
      null !== e[u].parent && (n[u] = s(u, e))
    }
    return n
  }
}, function(t, e, n) {
  "use strict";
  n.r(e);
  n(122), n(124), n(126), n(127), n(128), n(129), n(130), n(132), n(133), n(134), n(135), n(136), n(71), n(138), n(139), n(140), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(149), n(150), n(152), n(153), n(154), n(155), n(156), n(157), n(158), n(159), n(160), n(161), n(162), n(163), n(164), n(166), n(167), n(168), n(169), n(170), n(171), n(172), n(173), n(174), n(175), n(176), n(177), n(178), n(179), n(180), n(181), n(182), n(183), n(185), n(187), n(188), n(189), n(190), n(191), n(192), n(193), n(194), n(195), n(196), n(197), n(198), n(199), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(208), n(209), n(210), n(211), n(214), n(215), n(216), n(217), n(218), n(219), n(220), n(221), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(112), n(229), n(231), n(232), n(233), n(234), n(235), n(236), n(238), n(239), n(240), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), n(266), n(267), n(268), n(269), n(270), n(271), n(272), n(273), n(274), n(275), n(276), n(277), n(278), n(279), n(280), n(281), n(283);
  var r = n(64),
    o = (n(284), n(121)),
    i = n.n(o);
  n(285), n(286), n(287), n(288), n(289);
  var s = function t() {
    !
    /**
    @license
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    function(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }(this, t), this.start = 0, this.end = 0, this.previous = null, this.parent = null, this.rules = null, this.parsedCssText = "", this.cssText = "", this.atRule = !1, this.type = 0, this.keyframesName = "", this.selector = "", this.parsedSelector = ""
  };

  function a(t) {
    return function t(e, n) {
      var r = n.substring(e.start, e.end - 1);
      e.parsedCssText = e.cssText = r.trim();
      if (e.parent) {
        var o = e.previous ? e.previous.end : e.parent.start;
        r = (r = (r = function(t) {
          return t.replace(/\\([0-9a-f]{1,6})\s/gi, function() {
            for (var t = arguments[1], e = 6 - t.length; e--;) t = "0" + t;
            return "\\" + t
          })
        }(r = n.substring(o, e.start - 1))).replace(y.multipleSpaces, " ")).substring(r.lastIndexOf(";") + 1);
        var i = e.parsedSelector = e.selector = r.trim();
        e.atRule = 0 === i.indexOf(b), e.atRule ? 0 === i.indexOf(m) ? e.type = h.MEDIA_RULE : i.match(y.keyframesRule) && (e.type = h.KEYFRAMES_RULE, e.keyframesName = e.selector.split(y.multipleSpaces).pop()) : 0 === i.indexOf(v) ? e.type = h.MIXIN_RULE : e.type = h.STYLE_RULE
      }
      var s = e.rules;
      if (s)
        for (var a, u = 0, c = s.length; u < c && (a = s[u]); u++) t(a, n);
      return e
    }(function(t) {
      var e = new s;
      e.start = 0, e.end = t.length;
      for (var n = e, r = 0, o = t.length; r < o; r++)
        if (t[r] === p) {
          n.rules || (n.rules = []);
          var i = n,
            a = i.rules[i.rules.length - 1] || null;
          (n = new s).start = r + 1, n.parent = i, n.previous = a, i.rules.push(n)
        } else t[r] === d && (n.end = r + 1, n = n.parent || e);
      return e
    }(t = t.replace(y.comments, "").replace(y.port, "")), t)
  }

  function u(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      r = "";
    if (t.cssText || t.rules) {
      var o = t.rules;
      if (o && ! function(t) {
          var e = t[0];
          return Boolean(e) && Boolean(e.selector) && 0 === e.selector.indexOf(v)
        }(o))
        for (var i, s = 0, a = o.length; s < a && (i = o[s]); s++) r = u(i, e, r);
      else(r = (r = e ? t.cssText : function(t) {
        return function(t) {
          return t.replace(y.mixinApply, "").replace(y.varApply, "")
        }(t = c(t))
      }(t.cssText)).trim()) && (r = "  " + r + "\n")
    }
    return r && (t.selector && (n += t.selector + " " + p + "\n"), n += r, t.selector && (n += d + "\n\n")), n
  }

  function c(t) {
    return t.replace(y.customProp, "").replace(y.mixinProp, "")
  }
  var l, f, h = {
      STYLE_RULE: 1,
      KEYFRAMES_RULE: 7,
      MEDIA_RULE: 4,
      MIXIN_RULE: 1e3
    },
    p = "{",
    d = "}",
    y = {
      comments: /\/\*[^*]*\*+([^\/*][^*]*\*+)*\//gim,
      port: /@import[^;]*;/gim,
      customProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      mixinProp: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      mixinApply: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      varApply: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      keyframesRule: /^@[^\s]*keyframes/,
      multipleSpaces: /\s+/g
    },
    v = "--",
    m = "@media",
    b = "@",
    g = !(window.ShadyDOM && window.ShadyDOM.inUse);

  function _(t) {
    l = (!t || !t.shimcssproperties) && (g || Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) && window.CSS && CSS.supports && CSS.supports("box-shadow", "0 0 0 var(--foo)")))
  }
  window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (f = window.ShadyCSS.cssBuild);
  var w = Boolean(window.ShadyCSS && window.ShadyCSS.disableRuntime);
  window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? l = window.ShadyCSS.nativeCss : window.ShadyCSS ? (_(window.ShadyCSS), window.ShadyCSS = void 0) : _(window.WebComponents && window.WebComponents.flags);
  var S = l,
    E = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
    x = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
    O = /(--[\w-]+)\s*([:,;)]|$)/gi,
    T = /(animation\s*:)|(animation-name\s*:)/,
    C = /@media\s(.*)/,
    N = /\{[^}]*\}/g,
    k = new Set,
    A = "shady-unscoped";
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function M(t) {
    var e = t.textContent;
    if (!k.has(e)) {
      k.add(e);
      var n = t.cloneNode(!0);
      document.head.appendChild(n)
    }
  }

  function j(t) {
    return t.hasAttribute(A)
  }
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function P(t, e) {
    return t ? ("string" == typeof t && (t = a(t)), e && L(t, e), u(t, S)) : ""
  }

  function R(t) {
    return !t.__cssRules && t.textContent && (t.__cssRules = a(t.textContent)), t.__cssRules || null
  }

  function I(t) {
    return Boolean(t.parent) && t.parent.type === h.KEYFRAMES_RULE
  }

  function L(t, e, n, r) {
    if (t) {
      var o = !1,
        i = t.type;
      if (r && i === h.MEDIA_RULE) {
        var s = t.selector.match(C);
        s && (window.matchMedia(s[1]).matches || (o = !0))
      }
      i === h.STYLE_RULE ? e(t) : n && i === h.KEYFRAMES_RULE ? n(t) : i === h.MIXIN_RULE && (o = !0);
      var a = t.rules;
      if (a && !o)
        for (var u, c = 0, l = a.length; c < l && (u = a[c]); c++) L(u, e, n, r)
    }
  }

  function D(t, e, n, r) {
    var o = function(t, e) {
      var n = document.createElement("style");
      e && n.setAttribute("scope", e);
      return n.textContent = t, n
    }(t, e);
    return H(o, n, r), o
  }
  var F = null;

  function H(t, e, n) {
    e = e || document.head;
    var r = n && n.nextSibling || e.firstChild;
    (e.insertBefore(t, r), F) ? t.compareDocumentPosition(F) === Node.DOCUMENT_POSITION_PRECEDING && (F = t): F = t
  }

  function q(t, e) {
    for (var n = 0, r = e, o = t.length; r < o; r++)
      if ("(" === t[r]) n++;
      else if (")" === t[r] && 0 == --n) return r;
    return -1
  }

  function B(t, e) {
    g ? t.setAttribute("class", e) : window.ShadyDOM.nativeMethods.setAttribute.call(t, "class", e)
  }
  var U = window.ShadyDOM && window.ShadyDOM.wrap || function(t) {
    return t
  };

  function z(t) {
    var e = t.localName,
      n = "",
      r = "";
    return e ? e.indexOf("-") > -1 ? n = e : (r = e, n = t.getAttribute && t.getAttribute("is") || "") : (n = t.is, r = t.extends), {
      is: n,
      typeExtension: r
    }
  }

  function W(t) {
    for (var e = [], n = "", r = 0; r >= 0 && r < t.length; r++)
      if ("(" === t[r]) {
        var o = q(t, r);
        n += t.slice(r, o + 1), r = o
      } else "," === t[r] ? (e.push(n), n = "") : n += t[r];
    return n && e.push(n), e
  }
  var V = "css-build";

  function X(t) {
    if (void 0 !== f) return f;
    if (void 0 === t.__cssBuild) {
      var e = t.getAttribute(V);
      if (e) t.__cssBuild = e;
      else {
        var n = function(t) {
          var e = "template" === t.localName ? t.content.firstChild : t.firstChild;
          if (e instanceof Comment) {
            var n = e.textContent.trim().split(":");
            if (n[0] === V) return n[1]
          }
          return ""
        }(t);
        "" !== n && function(t) {
          var e = "template" === t.localName ? t.content.firstChild : t.firstChild;
          e.parentNode.removeChild(e)
        }
        /**
        @license
        Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
        Code distributed by Google as part of the polymer project is also
        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
        */
        (t), t.__cssBuild = n
      }
    }
    return t.__cssBuild || ""
  }

  function $(t) {
    return "" !== X(t)
  }

  function G() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return !("" === t || !S) && (g ? "shadow" === t : "shady" === t)
  }

  function Y(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  var K = function() {
      function t() {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t)
      }
      var e, n, r;
      return e = t, (n = [{
        key: "dom",
        value: function(t, e, n) {
          var r = this;
          this._transformDom(t, function(t) {
            r.element(t, e || "", n)
          })
        }
      }, {
        key: "domAddScope",
        value: function(t, e) {
          var n = this;
          this._transformDom(t, function(t) {
            n.element(t, e || "")
          })
        }
      }, {
        key: "_transformDom",
        value: function(t, e) {
          var n;
          if (t.nodeType === Node.ELEMENT_NODE && e(t), "template" === t.localName) {
            var r = t;
            n = (r.content || r._content || r).childNodes
          } else n = t.children || t.childNodes;
          if (n)
            for (var o = 0; o < n.length; o++) this._transformDom(n[o], e)
        }
      }, {
        key: "element",
        value: function(t, e, n) {
          if (e)
            if (t.classList) n ? (t.classList.remove("style-scope"), t.classList.remove(e)) : (t.classList.add("style-scope"), t.classList.add(e));
            else if (t.getAttribute) {
            var r = t.getAttribute(ft);
            if (n) {
              if (r) B(t, r.replace("style-scope", "").replace(e, ""))
            } else B(t, (r ? r + " " : "") + "style-scope " + e)
          }
        }
      }, {
        key: "domReplaceScope",
        value: function(t, e, n) {
          var r = this;
          this._transformDom(t, function(t) {
            r.element(t, e, !0), r.element(t, n)
          })
        }
      }, {
        key: "domRemoveScope",
        value: function(t, e) {
          var n = this;
          this._transformDom(t, function(t) {
            n.element(t, e || "", !0)
          })
        }
      }, {
        key: "elementStyles",
        value: function(t, e, n) {
          var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
            o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "";
          if ("" === o)
            if (g || "shady" === r) o = P(e, n);
            else {
              var i = z(t),
                s = i.is,
                a = i.typeExtension;
              o = this.css(e, s, a, n) + "\n\n"
            } return o.trim()
        }
      }, {
        key: "css",
        value: function(t, e, n, r) {
          var o = this._calcHostScope(e, n);
          e = this._calcElementScope(e);
          var i = this;
          return P(t, function(t) {
            t.isScoped || (i.rule(t, e, o), t.isScoped = !0), r && r(t, e, o)
          })
        }
      }, {
        key: "_calcElementScope",
        value: function(t) {
          return t ? ct + t : ""
        }
      }, {
        key: "_calcHostScope",
        value: function(t, e) {
          return e ? "[is=".concat(t, "]") : t
        }
      }, {
        key: "rule",
        value: function(t, e, n) {
          this._transformRule(t, this._transformComplexSelector, e, n)
        }
      }, {
        key: "_transformRule",
        value: function(t, e, n, r) {
          t.selector = t.transformedSelector = this._transformRuleCss(t, e, n, r)
        }
      }, {
        key: "_transformRuleCss",
        value: function(t, e, n, r) {
          var o = W(t.selector);
          if (!I(t))
            for (var i, s = 0, a = o.length; s < a && (i = o[s]); s++) o[s] = e.call(this, i, n, r);
          return o.filter(function(t) {
            return Boolean(t)
          }).join(Q)
        }
      }, {
        key: "_twiddleNthPlus",
        value: function(t) {
          return t.replace(J, function(t, e, n) {
            return n.indexOf("+") > -1 ? n = n.replace(/\+/g, "___") : n.indexOf("___") > -1 && (n = n.replace(/___/g, "+")), ":".concat(e, "(").concat(n, ")")
          })
        }
      }, {
        key: "_preserveMatchesPseudo",
        value: function(t) {
          for (var e, n = []; e = t.match(pt);) {
            var r = e.index,
              o = q(t, r);
            if (-1 === o) throw new Error("".concat(e.input, " selector missing ')'"));
            var i = t.slice(r, o + 1);
            t = t.replace(i, dt), n.push(i)
          }
          return {
            selector: t,
            matches: n
          }
        }
      }, {
        key: "_replaceMatchesPseudo",
        value: function(t, e) {
          var n = t.split(dt);
          return e.reduce(function(t, e, r) {
            return t + e + n[r + 1]
          }, n[0])
        }
      }, {
        key: "_transformComplexSelector",
        value: function(t, e, n) {
          var r = this,
            o = !1;
          t = t.trim();
          var i = J.test(t);
          i && (t = t.replace(J, function(t, e, n) {
            return ":".concat(e, "(").concat(n.replace(/\s/g, ""), ")")
          }), t = this._twiddleNthPlus(t));
          var s, a = pt.test(t);
          if (a) {
            var u = this._preserveMatchesPseudo(t);
            t = u.selector, s = u.matches
          }
          return t = (t = t.replace(it, "".concat(nt, " $1"))).replace(tt, function(t, i, s) {
            if (!o) {
              var a = r._transformCompoundSelector(s, i, e, n);
              o = o || a.stop, i = a.combinator, s = a.value
            }
            return i + s
          }), a && (t = this._replaceMatchesPseudo(t, s)), i && (t = this._twiddleNthPlus(t)), t = t.replace(ut, function(t, e, n, r) {
            return '[dir="'.concat(n, '"] ').concat(e).concat(r, ", ").concat(e, '[dir="').concat(n, '"]').concat(r)
          })
        }
      }, {
        key: "_transformCompoundSelector",
        value: function(t, e, n, r) {
          var o = t.indexOf(ot);
          t.indexOf(nt) >= 0 ? t = this._transformHostSelector(t, r) : 0 !== o && (t = n ? this._transformSimpleSelector(t, n) : t);
          var i, s = !1;
          return o >= 0 && (e = "", s = !0), s && (i = !0, s && (t = t.replace(at, function(t, e) {
            return " > ".concat(e)
          }))), {
            value: t,
            combinator: e,
            stop: i
          }
        }
      }, {
        key: "_transformSimpleSelector",
        value: function(t, e) {
          for (var n = t.split(/(\[.+?\])/), r = [], o = 0; o < n.length; o++)
            if (o % 2 == 1) r.push(n[o]);
            else {
              var i = n[o];
              if ("" !== i || o !== n.length - 1) {
                var s = i.split(lt);
                s[0] += e, r.push(s.join(lt))
              }
            } return r.join("")
        }
      }, {
        key: "_transformHostSelector",
        value: function(t, e) {
          var n = t.match(st),
            r = n && n[2].trim() || "";
          return r ? r[0].match(et) ? t.replace(st, function(t, n, r) {
            return e + r
          }) : r.split(et)[0] === e ? r : ht : t.replace(nt, e)
        }
      }, {
        key: "documentRule",
        value: function(t) {
          t.selector = t.parsedSelector, this.normalizeRootSelector(t), this._transformRule(t, this._transformDocumentSelector)
        }
      }, {
        key: "normalizeRootSelector",
        value: function(t) {
          t.selector === rt && (t.selector = "html")
        }
      }, {
        key: "_transformDocumentSelector",
        value: function(t) {
          return t.match(nt) ? "" : t.match(ot) ? this._transformComplexSelector(t, Z) : this._transformSimpleSelector(t.trim(), Z)
        }
      }, {
        key: "SCOPE_NAME",
        get: function() {
          return "style-scope"
        }
      }]) && Y(e.prototype, n), r && Y(e, r), t
    }(),
    J = /:(nth[-\w]+)\(([^)]+)\)/,
    Z = ":not(.".concat("style-scope", ")"),
    Q = ",",
    tt = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
    et = /[[.:#*]/,
    nt = ":host",
    rt = ":root",
    ot = "::slotted",
    it = new RegExp("^(".concat(ot, ")")),
    st = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    at = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
    ut = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
    ct = ".",
    lt = ":",
    ft = "class",
    ht = "should_not_match",
    pt = /:(?:matches|any|-(?:webkit|moz)-any)/,
    dt = "",
    yt = new K;

  function vt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function mt(t, e, n) {
    return e && vt(t.prototype, e), n && vt(t, n), t
  }
  var bt = function() {
    function t(e, n, r, o, i, s) {
      !
      /**
      @license
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.styleRules = e || null, this.placeholder = n || null, this.ownStylePropertyNames = r || [], this.overrideStyleProperties = null, this.elementName = o || "", this.cssBuild = s || "", this.typeExtension = i || "", this.styleProperties = null, this.scopeSelector = null, this.customStyle = null
    }
    return mt(t, null, [{
      key: "get",
      value: function(t) {
        return t ? t.__styleInfo : null
      }
    }, {
      key: "set",
      value: function(t, e) {
        return t.__styleInfo = e, e
      }
    }]), mt(t, [{
      key: "_getStyleRules",
      value: function() {
        return this.styleRules
      }
    }]), t
  }();

  function gt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  bt.prototype._getStyleRules = bt.prototype._getStyleRules;
  var _t = function(t) {
      var e = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector;
      return e && e.call(this, t)
    },
    wt = navigator.userAgent.match("Trident");
  var St = new(function() {
      function t() {
        !
        /**
        @license
        Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
        Code distributed by Google as part of the polymer project is also
        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
        */
        function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t)
      }
      var e, n, r;
      return e = t, (n = [{
        key: "decorateStyles",
        value: function(t) {
          var e = this,
            n = {},
            r = [],
            o = 0;
          L(t, function(t) {
            e.decorateRule(t), t.index = o++, e.collectPropertiesInCssText(t.propertyInfo.cssText, n)
          }, function(t) {
            r.push(t)
          }), t._keyframes = r;
          var i = [];
          for (var s in n) i.push(s);
          return i
        }
      }, {
        key: "decorateRule",
        value: function(t) {
          if (t.propertyInfo) return t.propertyInfo;
          var e = {},
            n = {};
          return this.collectProperties(t, n) && (e.properties = n, t.rules = null), e.cssText = this.collectCssText(t), t.propertyInfo = e, e
        }
      }, {
        key: "collectProperties",
        value: function(t, e) {
          var n = t.propertyInfo;
          if (!n) {
            for (var r, o, i, s = E, a = t.parsedCssText; r = s.exec(a);) "inherit" === (o = (r[2] || r[3]).trim()) && "unset" === o || (e[r[1].trim()] = o), i = !0;
            return i
          }
          if (n.properties) return Object.assign(e, n.properties), !0
        }
      }, {
        key: "collectCssText",
        value: function(t) {
          return this.collectConsumingCssText(t.parsedCssText)
        }
      }, {
        key: "collectConsumingCssText",
        value: function(t) {
          return t.replace(N, "").replace(E, "")
        }
      }, {
        key: "collectPropertiesInCssText",
        value: function(t, e) {
          for (var n; n = O.exec(t);) {
            var r = n[1];
            ":" !== n[2] && (e[r] = !0)
          }
        }
      }, {
        key: "reify",
        value: function(t) {
          for (var e, n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) t[e = n[r]] = this.valueForProperty(t[e], t)
        }
      }, {
        key: "valueForProperty",
        value: function(t, e) {
          if (t)
            if (t.indexOf(";") >= 0) t = this.valueForProperties(t, e);
            else {
              var n = this;
              t = function t(e, n) {
                var r = e.indexOf("var(");
                if (-1 === r) return n(e, "", "", "");
                var o = q(e, r + 3),
                  i = e.substring(r + 4, o),
                  s = e.substring(0, r),
                  a = t(e.substring(o + 1), n),
                  u = i.indexOf(",");
                return -1 === u ? n(s, i.trim(), "", a) : n(s, i.substring(0, u).trim(), i.substring(u + 1).trim(), a)
              }(t, function(t, r, o, i) {
                if (!r) return t + i;
                var s = n.valueForProperty(e[r], e);
                return s && "initial" !== s ? "apply-shim-inherit" === s && (s = "inherit") : s = n.valueForProperty(e[o] || o, e) || o, t + (s || "") + i
              })
            } return t && t.trim() || ""
        }
      }, {
        key: "valueForProperties",
        value: function(t, e) {
          for (var n, r, o = t.split(";"), i = 0; i < o.length; i++)
            if (n = o[i]) {
              if (x.lastIndex = 0, r = x.exec(n)) n = this.valueForProperty(e[r[1]], e);
              else {
                var s = n.indexOf(":");
                if (-1 !== s) {
                  var a = n.substring(s);
                  a = a.trim(), a = this.valueForProperty(a, e) || a, n = n.substring(0, s) + a
                }
              }
              o[i] = n && n.lastIndexOf(";") === n.length - 1 ? n.slice(0, -1) : n || ""
            } return o.join(";")
        }
      }, {
        key: "applyProperties",
        value: function(t, e) {
          var n = "";
          t.propertyInfo || this.decorateRule(t), t.propertyInfo.cssText && (n = this.valueForProperties(t.propertyInfo.cssText, e)), t.cssText = n
        }
      }, {
        key: "applyKeyframeTransforms",
        value: function(t, e) {
          var n = t.cssText,
            r = t.cssText;
          if (null == t.hasAnimations && (t.hasAnimations = T.test(n)), t.hasAnimations)
            if (null == t.keyframeNamesToTransform)
              for (var o in t.keyframeNamesToTransform = [], e) n !== (r = (0, e[o])(n)) && (n = r, t.keyframeNamesToTransform.push(o));
            else {
              for (var i = 0; i < t.keyframeNamesToTransform.length; ++i) n = (0, e[t.keyframeNamesToTransform[i]])(n);
              r = n
            } t.cssText = r
        }
      }, {
        key: "propertyDataFromStyles",
        value: function(t, e) {
          var n = this,
            r = {},
            o = [];
          return L(t, function(t) {
            t.propertyInfo || n.decorateRule(t);
            var i = t.transformedSelector || t.parsedSelector;
            e && t.propertyInfo.properties && i && _t.call(e, i) && (n.collectProperties(t, r), function(t, e) {
              var n = parseInt(t / 32, 10),
                r = 1 << t % 32;
              e[n] = (e[n] || 0) | r
            }(t.index, o))
          }, null, !0), {
            properties: r,
            key: o
          }
        }
      }, {
        key: "whenHostOrRootRule",
        value: function(t, e, n, r) {
          if (e.propertyInfo || this.decorateRule(e), e.propertyInfo.properties) {
            var o = z(t),
              i = o.is,
              s = o.typeExtension,
              a = i ? yt._calcHostScope(i, s) : "html",
              u = e.parsedSelector,
              c = ":host > *" === u || "html" === u,
              l = 0 === u.indexOf(":host") && !c;
            if ("shady" === n && (l = !(c = u === a + " > *." + a || -1 !== u.indexOf("html")) && 0 === u.indexOf(a)), c || l) {
              var f = a;
              l && (e.transformedSelector || (e.transformedSelector = yt._transformRuleCss(e, yt._transformComplexSelector, yt._calcElementScope(i), a)), f = e.transformedSelector || a), r({
                selector: f,
                isHost: l,
                isRoot: c
              })
            }
          }
        }
      }, {
        key: "hostAndRootPropertiesForScope",
        value: function(t, e, n) {
          var r = this,
            o = {},
            i = {};
          return L(e, function(e) {
            r.whenHostOrRootRule(t, e, n, function(n) {
              var s = t._element || t;
              _t.call(s, n.selector) && (n.isHost ? r.collectProperties(e, o) : r.collectProperties(e, i))
            })
          }, null, !0), {
            rootProps: i,
            hostProps: o
          }
        }
      }, {
        key: "transformStyles",
        value: function(t, e, n) {
          var r = this,
            o = z(t),
            i = o.is,
            s = o.typeExtension,
            a = yt._calcHostScope(i, s),
            u = t.extends ? "\\" + a.slice(0, -1) + "\\]" : a,
            c = new RegExp("(?:^|[^.#[:])" + u + "($|[.:[\\s>+~])"),
            l = bt.get(t),
            f = l.styleRules,
            h = l.cssBuild,
            p = this._elementKeyframeTransforms(t, f, n);
          return yt.elementStyles(t, f, function(t) {
            r.applyProperties(t, e), g || I(t) || !t.cssText || (r.applyKeyframeTransforms(t, p), r._scopeSelector(t, c, a, n))
          }, h)
        }
      }, {
        key: "_elementKeyframeTransforms",
        value: function(t, e, n) {
          var r = e._keyframes,
            o = {};
          if (!g && r)
            for (var i = 0, s = r[i]; i < r.length; s = r[++i]) this._scopeKeyframes(s, n), o[s.keyframesName] = this._keyframesRuleTransformer(s);
          return o
        }
      }, {
        key: "_keyframesRuleTransformer",
        value: function(t) {
          return function(e) {
            return e.replace(t.keyframesNameRx, t.transformedKeyframesName)
          }
        }
      }, {
        key: "_scopeKeyframes",
        value: function(t, e) {
          t.keyframesNameRx = new RegExp("\\b".concat(t.keyframesName, "(?!\\B|-)"), "g"), t.transformedKeyframesName = t.keyframesName + "-" + e, t.transformedSelector = t.transformedSelector || t.selector, t.selector = t.transformedSelector.replace(t.keyframesName, t.transformedKeyframesName)
        }
      }, {
        key: "_scopeSelector",
        value: function(t, e, n, r) {
          t.transformedSelector = t.transformedSelector || t.selector;
          for (var o, i = "." + r, s = W(t.transformedSelector), a = 0, u = s.length; a < u && (o = s[a]); a++) s[a] = o.match(e) ? o.replace(n, i) : i + " " + o;
          t.selector = s.join(",")
        }
      }, {
        key: "applyElementScopeSelector",
        value: function(t, e, n) {
          var r = t.getAttribute("class") || "",
            o = r;
          n && (o = r.replace(new RegExp("\\s*x-scope\\s*" + n + "\\s*", "g"), " ")), r !== (o += (o ? " " : "") + "x-scope " + e) && B(t, o)
        }
      }, {
        key: "applyElementStyle",
        value: function(t, e, n, r) {
          var o = r ? r.textContent || "" : this.transformStyles(t, e, n),
            i = bt.get(t),
            s = i.customStyle;
          return s && !g && s !== r && (s._useCount--, s._useCount <= 0 && s.parentNode && s.parentNode.removeChild(s)), g ? i.customStyle ? (i.customStyle.textContent = o, r = i.customStyle) : o && (r = D(o, n, t.shadowRoot, i.placeholder)) : r ? r.parentNode || (wt && o.indexOf("@media") > -1 && (r.textContent = o), H(r, null, i.placeholder)) : o && (r = D(o, n, null, i.placeholder)), r && (r._useCount = r._useCount || 0, i.customStyle != r && r._useCount++, i.customStyle = r), r
        }
      }, {
        key: "applyCustomStyle",
        value: function(t, e) {
          var n = R(t),
            r = this;
          t.textContent = P(n, function(t) {
            var n = t.cssText = t.parsedCssText;
            t.propertyInfo && t.propertyInfo.cssText && (n = c(n), t.cssText = r.valueForProperties(n, e))
          })
        }
      }, {
        key: "XSCOPE_NAME",
        get: function() {
          return "x-scope"
        }
      }]) && gt(e.prototype, n), r && gt(e, r), t
    }()),
    Et = {};
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function xt(t) {
    return Et[t] || null
  }

  function Ot(t) {
    var e, n, r, o;
    Et[t] || (Et[t] = (e = t, n = document.createComment(" Shady DOM styles for " + e + " "), r = F ? F.nextSibling : null, (o = document.head).insertBefore(n, r || o.firstChild), F = n, n))
  }
  var Tt = window.customElements;
  if (Tt && !g && !w) {
    var Ct = Tt.define;
    Tt.define = function(t, e, n) {
      Ot(t), Ct.call(Tt, t, e, n)
    }
  }
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function Nt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  var kt = function() {
      function t() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.cache = {}, this.typeMax = e
      }
      var e, n, r;
      return e = t, (n = [{
        key: "_validate",
        value: function(t, e, n) {
          for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (t.properties[o] !== e[o]) return !1
          }
          return !0
        }
      }, {
        key: "store",
        value: function(t, e, n, r) {
          var o = this.cache[t] || [];
          o.push({
            properties: e,
            styleElement: n,
            scopeSelector: r
          }), o.length > this.typeMax && o.shift(), this.cache[t] = o
        }
      }, {
        key: "fetch",
        value: function(t, e, n) {
          var r = this.cache[t];
          if (r)
            for (var o = r.length - 1; o >= 0; o--) {
              var i = r[o];
              if (this._validate(i, e, n)) return i
            }
        }
      }]) && Nt(e.prototype, n), r && Nt(e, r), t
    }(),
    At = function() {};
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var Mt = new RegExp("".concat(yt.SCOPE_NAME, "\\s*([^\\s]*)"));

  function jt(t) {
    var e = function(t) {
      return t.classList && t.classList.value ? t.classList.value : t.getAttribute("class") || ""
    }(t).match(Mt);
    return e ? e[1] : ""
  }

  function Pt(t) {
    var e = U(t).getRootNode();
    if (e === t || e === t.ownerDocument) return "";
    var n = e.host;
    return n ? z(n).is : ""
  }

  function Rt(t) {
    for (var e = window.ShadyDOM.nativeMethods.querySelectorAll.call(t, ":not(.".concat(yt.SCOPE_NAME, ")")), n = 0; n < e.length; n++) {
      var r = e[n],
        o = Pt(r);
      o && yt.element(r, o)
    }
  }

  function It(t) {
    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      if (n.target !== document.documentElement && n.target !== document.head)
        for (var r = 0; r < n.addedNodes.length; r++) {
          var o = n.addedNodes[r];
          if (o.nodeType === Node.ELEMENT_NODE) {
            var i = (o = o).getRootNode(),
              s = jt(o);
            if (s && i === o.ownerDocument && ("style" !== (u = o).localName && "template" !== u.localName || !$(u))) yt.domRemoveScope(o, s);
            else if (i instanceof ShadowRoot) {
              var a = Pt(o);
              a !== s && yt.domReplaceScope(o, s, a), Rt(o)
            }
          }
        }
    }
    var u
  }
  if (!(g || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
    var Lt = new MutationObserver(It),
      Dt = function(t) {
        Lt.observe(t, {
          childList: !0,
          subtree: !0
        })
      };
    if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Dt(document);
    else {
      var Ft = function() {
        Dt(document.body)
      };
      window.HTMLImports ? window.HTMLImports.whenReady(Ft) : requestAnimationFrame(function() {
        if ("loading" === document.readyState) {
          document.addEventListener("readystatechange", function t() {
            Ft(), document.removeEventListener("readystatechange", t)
          })
        } else Ft()
      })
    }
    At = function() {
      It(Lt.takeRecords())
    }
  }
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var Ht = {},
    qt = "_applyShimCurrentVersion",
    Bt = "_applyShimNextVersion",
    Ut = "_applyShimValidatingVersion",
    zt = Promise.resolve();

  function Wt(t) {
    var e = Ht[t];
    e && function(t) {
      t[qt] = t[qt] || 0, t[Ut] = t[Ut] || 0, t[Bt] = (t[Bt] || 0) + 1
    }(e)
  }

  function Vt(t) {
    return t[qt] === t[Bt]
  }

  function Xt(t) {
    return !Vt(t) && t[Ut] === t[Bt]
  }

  function $t(t) {
    t[Ut] = t[Bt], t._validating || (t._validating = !0, zt.then(function() {
      t[qt] = t[Bt], t._validating = !1
    }))
  }
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var Gt, Yt = null,
    Kt = window.HTMLImports && window.HTMLImports.whenReady || null;

  function Jt(t) {
    requestAnimationFrame(function() {
      Kt ? Kt(t) : (Yt || (Yt = new Promise(function(t) {
        Gt = t
      }), "complete" === document.readyState ? Gt() : document.addEventListener("readystatechange", function() {
        "complete" === document.readyState && Gt()
      })), Yt.then(function() {
        t && t()
      }))
    })
  }
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  function Zt(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  var Qt = "__shadyCSSCachedStyle",
    te = null,
    ee = null,
    ne = function() {
      function t() {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this.customStyles = [], this.enqueued = !1, Jt(function() {
          window.ShadyCSS.flushCustomStyles && window.ShadyCSS.flushCustomStyles()
        })
      }
      var e, n, r;
      return e = t, (n = [{
        key: "enqueueDocumentValidation",
        value: function() {
          !this.enqueued && ee && (this.enqueued = !0, Jt(ee))
        }
      }, {
        key: "addCustomStyle",
        value: function(t) {
          t.__seenByShadyCSS || (t.__seenByShadyCSS = !0, this.customStyles.push(t), this.enqueueDocumentValidation())
        }
      }, {
        key: "getStyleForCustomStyle",
        value: function(t) {
          return t[Qt] ? t[Qt] : t.getStyle ? t.getStyle() : t
        }
      }, {
        key: "processStyles",
        value: function() {
          for (var t = this.customStyles, e = 0; e < t.length; e++) {
            var n = t[e];
            if (!n[Qt]) {
              var r = this.getStyleForCustomStyle(n);
              if (r) {
                var o = r.__appliedElement || r;
                te && te(o), n[Qt] = o
              }
            }
          }
          return t
        }
      }]) && Zt(e.prototype, n), r && Zt(e, r), t
    }();

  function re(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  ne.prototype.addCustomStyle = ne.prototype.addCustomStyle, ne.prototype.getStyleForCustomStyle = ne.prototype.getStyleForCustomStyle, ne.prototype.processStyles = ne.prototype.processStyles, Object.defineProperties(ne.prototype, {
    transformCallback: {
      get: function() {
        return te
      },
      set: function(t) {
        te = t
      }
    },
    validateCallback: {
      get: function() {
        return ee
      },
      set: function(t) {
        var e = !1;
        ee || (e = !0), ee = t, e && this.enqueueDocumentValidation()
      }
    }
  });
  var oe = {},
    ie = new kt,
    se = function() {
      function t() {
        !
        /**
        @license
        Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
        This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
        The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
        The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
        Code distributed by Google as part of the polymer project is also
        subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
        */
        function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), this._scopeCounter = {}, this._documentOwner = document.documentElement;
        var e = new s;
        e.rules = [], this._documentOwnerStyleInfo = bt.set(this._documentOwner, new bt(e)), this._elementsHaveApplied = !1, this._applyShim = null, this._customStyleInterface = null
      }
      var e, n, r;
      return e = t, (n = [{
        key: "flush",
        value: function() {
          At()
        }
      }, {
        key: "_generateScopeSelector",
        value: function(t) {
          var e = this._scopeCounter[t] = (this._scopeCounter[t] || 0) + 1;
          return "".concat(t, "-").concat(e)
        }
      }, {
        key: "getStyleAst",
        value: function(t) {
          return R(t)
        }
      }, {
        key: "styleAstToString",
        value: function(t) {
          return P(t)
        }
      }, {
        key: "_gatherStyles",
        value: function(t) {
          return function(t) {
            for (var e = [], n = t.querySelectorAll("style"), r = 0; r < n.length; r++) {
              var o = n[r];
              j(o) ? g || (M(o), o.parentNode.removeChild(o)) : (e.push(o.textContent), o.parentNode.removeChild(o))
            }
            return e.join("").trim()
          }(t.content)
        }
      }, {
        key: "prepareTemplate",
        value: function(t, e, n) {
          this.prepareTemplateDom(t, e), this.prepareTemplateStyles(t, e, n)
        }
      }, {
        key: "prepareTemplateStyles",
        value: function(t, e, n) {
          if (!t._prepared && !w) {
            g || Ot(e), t._prepared = !0, t.name = e, t.extends = n, Ht[e] = t;
            var r = X(t),
              o = G(r),
              i = {
                is: e,
                extends: n
              },
              s = this._gatherStyles(t) + (oe[e] || "");
            if (this._ensure(), !o) {
              var u = !r && function(t) {
                  var e = x.test(t) || E.test(t);
                  return x.lastIndex = 0, E.lastIndex = 0, e
                }(s),
                c = a(s);
              u && S && this._applyShim && this._applyShim.transformRules(c, e), t._styleAst = c
            }
            var l = [];
            if (S || (l = St.decorateStyles(t._styleAst)), !l.length || S) {
              var f = g ? t.content : null,
                h = xt(e),
                p = this._generateStaticStyle(i, t._styleAst, f, h, r, o ? s : "");
              t._style = p
            }
            t._ownPropertyNames = l
          }
        }
      }, {
        key: "prepareAdoptedCssText",
        value: function(t, e) {
          oe[e] = t.join(" ")
        }
      }, {
        key: "prepareTemplateDom",
        value: function(t, e) {
          if (!w) {
            var n = X(t);
            g || "shady" === n || t._domPrepared || (t._domPrepared = !0, yt.domAddScope(t.content, e))
          }
        }
      }, {
        key: "_generateStaticStyle",
        value: function(t, e, n, r, o, i) {
          return (i = yt.elementStyles(t, e, null, o, i)).length ? D(i, t.is, n, r) : null
        }
      }, {
        key: "_prepareHost",
        value: function(t) {
          var e = z(t),
            n = e.is,
            r = e.typeExtension,
            o = xt(n),
            i = Ht[n];
          if (i) {
            var s = i._styleAst,
              a = i._ownPropertyNames,
              u = X(i),
              c = new bt(s, o, a, n, r, u);
            return bt.set(t, c), c
          }
        }
      }, {
        key: "_ensureApplyShim",
        value: function() {
          this._applyShim || window.ShadyCSS && window.ShadyCSS.ApplyShim && (this._applyShim = window.ShadyCSS.ApplyShim, this._applyShim.invalidCallback = Wt)
        }
      }, {
        key: "_ensureCustomStyleInterface",
        value: function() {
          var t = this;
          this._customStyleInterface || window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this._customStyleInterface = window.ShadyCSS.CustomStyleInterface, this._customStyleInterface.transformCallback = function(e) {
            t.transformCustomStyleForDocument(e)
          }, this._customStyleInterface.validateCallback = function() {
            requestAnimationFrame(function() {
              (t._customStyleInterface.enqueued || t._elementsHaveApplied) && t.flushCustomStyles()
            })
          })
        }
      }, {
        key: "_ensure",
        value: function() {
          this._ensureApplyShim(), this._ensureCustomStyleInterface()
        }
      }, {
        key: "flushCustomStyles",
        value: function() {
          if (!w && (this._ensure(), this._customStyleInterface)) {
            var t = this._customStyleInterface.processStyles();
            this._customStyleInterface.enqueued && (G(this._documentOwnerStyleInfo.cssBuild) || (S ? this._documentOwnerStyleInfo.cssBuild || this._revalidateCustomStyleApplyShim(t) : (this._updateProperties(this._documentOwner, this._documentOwnerStyleInfo), this._applyCustomStyles(t), this._elementsHaveApplied && this.styleDocument()), this._customStyleInterface.enqueued = !1))
          }
        }
      }, {
        key: "styleElement",
        value: function(t, e) {
          if (w) {
            if (e) {
              bt.get(t) || bt.set(t, new bt(null));
              var n = bt.get(t);
              this._mixOverrideStyleProps(n, e), this.styleElementNativeVariables(t, n)
            }
          } else {
            var r = bt.get(t) || this._prepareHost(t);
            r && (this._isRootOwner(t) || (this._elementsHaveApplied = !0), e && this._mixOverrideStyleProps(r, e), S ? this.styleElementNativeVariables(t, r) : this.styleElementShimVariables(t, r))
          }
        }
      }, {
        key: "_mixOverrideStyleProps",
        value: function(t, e) {
          t.overrideStyleProperties = t.overrideStyleProperties || {}, Object.assign(t.overrideStyleProperties, e)
        }
      }, {
        key: "styleElementShimVariables",
        value: function(t, e) {
          this.flush(), this._updateProperties(t, e), e.ownStylePropertyNames && e.ownStylePropertyNames.length && this._applyStyleProperties(t, e)
        }
      }, {
        key: "styleElementNativeVariables",
        value: function(t, e) {
          var n = z(t).is;
          e.overrideStyleProperties &&
            /**
            @license
            Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
            This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
            The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
            The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
            Code distributed by Google as part of the polymer project is also
            subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
            */
            function(t, e) {
              for (var n in e) null === n ? t.style.removeProperty(n) : t.style.setProperty(n, e[n])
            }(t, e.overrideStyleProperties);
          var r = Ht[n];
          if ((r || this._isRootOwner(t)) && (!r || !$(r)) && r && r._style && !Vt(r)) {
            if (Xt(r) || (this._ensure(), this._applyShim && this._applyShim.transformRules(r._styleAst, n), r._style.textContent = yt.elementStyles(t, e.styleRules), $t(r)), g) {
              var o = t.shadowRoot;
              if (o) {
                var i = o.querySelector("style");
                i && (i.textContent = yt.elementStyles(t, e.styleRules))
              }
            }
            e.styleRules = r._styleAst
          }
        }
      }, {
        key: "_styleOwnerForNode",
        value: function(t) {
          var e = U(t).getRootNode().host;
          return e ? bt.get(e) || this._prepareHost(e) ? e : this._styleOwnerForNode(e) : this._documentOwner
        }
      }, {
        key: "_isRootOwner",
        value: function(t) {
          return t === this._documentOwner
        }
      }, {
        key: "_applyStyleProperties",
        value: function(t, e) {
          var n = z(t).is,
            r = ie.fetch(n, e.styleProperties, e.ownStylePropertyNames),
            o = r && r.scopeSelector,
            i = r ? r.styleElement : null,
            s = e.scopeSelector;
          e.scopeSelector = o || this._generateScopeSelector(n);
          var a = St.applyElementStyle(t, e.styleProperties, e.scopeSelector, i);
          return g || St.applyElementScopeSelector(t, e.scopeSelector, s), r || ie.store(n, e.styleProperties, a, e.scopeSelector), a
        }
      }, {
        key: "_updateProperties",
        value: function(t, e) {
          var n = this._styleOwnerForNode(t),
            r = bt.get(n),
            o = r.styleProperties;
          n === this._documentOwner || o || (this._updateProperties(n, r), o = r.styleProperties);
          var i = Object.create(o || null),
            s = St.hostAndRootPropertiesForScope(t, e.styleRules, e.cssBuild),
            a = St.propertyDataFromStyles(r.styleRules, t).properties;
          Object.assign(i, s.hostProps, a, s.rootProps), this._mixinOverrideStyles(i, e.overrideStyleProperties), St.reify(i), e.styleProperties = i
        }
      }, {
        key: "_mixinOverrideStyles",
        value: function(t, e) {
          for (var n in e) {
            var r = e[n];
            (r || 0 === r) && (t[n] = r)
          }
        }
      }, {
        key: "styleDocument",
        value: function(t) {
          this.styleSubtree(this._documentOwner, t)
        }
      }, {
        key: "styleSubtree",
        value: function(t, e) {
          var n = U(t),
            r = n.shadowRoot;
          (r || this._isRootOwner(t)) && this.styleElement(t, e);
          var o = r && (r.children || r.childNodes);
          if (o)
            for (var i = 0; i < o.length; i++) {
              var s = o[i];
              this.styleSubtree(s)
            } else {
              var a = n.children || n.childNodes;
              if (a)
                for (var u = 0; u < a.length; u++) {
                  var c = a[u];
                  this.styleSubtree(c)
                }
            }
        }
      }, {
        key: "_revalidateCustomStyleApplyShim",
        value: function(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e],
              r = this._customStyleInterface.getStyleForCustomStyle(n);
            r && this._revalidateApplyShim(r)
          }
        }
      }, {
        key: "_applyCustomStyles",
        value: function(t) {
          for (var e = 0; e < t.length; e++) {
            var n = t[e],
              r = this._customStyleInterface.getStyleForCustomStyle(n);
            r && St.applyCustomStyle(r, this._documentOwnerStyleInfo.styleProperties)
          }
        }
      }, {
        key: "transformCustomStyleForDocument",
        value: function(t) {
          var e = this,
            n = X(t);
          if (n !== this._documentOwnerStyleInfo.cssBuild && (this._documentOwnerStyleInfo.cssBuild = n), !G(n)) {
            var r = R(t);
            L(r, function(t) {
              g ? yt.normalizeRootSelector(t) : yt.documentRule(t), S && "" === n && (e._ensure(), e._applyShim && e._applyShim.transformRule(t))
            }), S ? t.textContent = P(r) : this._documentOwnerStyleInfo.styleRules.rules.push(r)
          }
        }
      }, {
        key: "_revalidateApplyShim",
        value: function(t) {
          if (S && this._applyShim) {
            var e = R(t);
            this._ensure(), this._applyShim.transformRules(e), t.textContent = P(e)
          }
        }
      }, {
        key: "getComputedStyleValue",
        value: function(t, e) {
          var n;
          S || (n = (bt.get(t) || bt.get(this._styleOwnerForNode(t))).styleProperties[e]);
          return (n = n || window.getComputedStyle(t).getPropertyValue(e)) ? n.trim() : ""
        }
      }, {
        key: "setElementClass",
        value: function(t, e) {
          var n = U(t).getRootNode(),
            r = e ? e.split(/\s/) : [],
            o = n.host && n.host.localName;
          if (!o) {
            var i = t.getAttribute("class");
            if (i)
              for (var s = i.split(/\s/), a = 0; a < s.length; a++)
                if (s[a] === yt.SCOPE_NAME) {
                  o = s[a + 1];
                  break
                }
          }
          if (o && r.push(yt.SCOPE_NAME, o), !S) {
            var u = bt.get(t);
            u && u.scopeSelector && r.push(St.XSCOPE_NAME, u.scopeSelector)
          }
          B(t, r.join(" "))
        }
      }, {
        key: "_styleInfoForNode",
        value: function(t) {
          return bt.get(t)
        }
      }, {
        key: "scopeNode",
        value: function(t, e) {
          yt.element(t, e)
        }
      }, {
        key: "unscopeNode",
        value: function(t, e) {
          yt.element(t, e, !0)
        }
      }, {
        key: "scopeForNode",
        value: function(t) {
          return Pt(t)
        }
      }, {
        key: "currentScopeForNode",
        value: function(t) {
          return jt(t)
        }
      }]) && re(e.prototype, n), r && re(e, r), t
    }();
  se.prototype.flush = se.prototype.flush, se.prototype.prepareTemplate = se.prototype.prepareTemplate, se.prototype.styleElement = se.prototype.styleElement, se.prototype.styleDocument = se.prototype.styleDocument, se.prototype.styleSubtree = se.prototype.styleSubtree, se.prototype.getComputedStyleValue = se.prototype.getComputedStyleValue, se.prototype.setElementClass = se.prototype.setElementClass, se.prototype._styleInfoForNode = se.prototype._styleInfoForNode, se.prototype.transformCustomStyleForDocument = se.prototype.transformCustomStyleForDocument, se.prototype.getStyleAst = se.prototype.getStyleAst, se.prototype.styleAstToString = se.prototype.styleAstToString, se.prototype.flushCustomStyles = se.prototype.flushCustomStyles, se.prototype.scopeNode = se.prototype.scopeNode, se.prototype.unscopeNode = se.prototype.unscopeNode, se.prototype.scopeForNode = se.prototype.scopeForNode, se.prototype.currentScopeForNode = se.prototype.currentScopeForNode, se.prototype.prepareAdoptedCssText = se.prototype.prepareAdoptedCssText, Object.defineProperties(se.prototype, {
    nativeShadow: {
      get: function() {
        return g
      }
    },
    nativeCss: {
      get: function() {
        return S
      }
    }
  });
  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  var ae, ue, ce = new se;
  window.ShadyCSS && (ae = window.ShadyCSS.ApplyShim, ue = window.ShadyCSS.CustomStyleInterface), window.ShadyCSS = {
    ScopingShim: ce,
    prepareTemplate: function(t, e, n) {
      ce.flushCustomStyles(), ce.prepareTemplate(t, e, n)
    },
    prepareTemplateDom: function(t, e) {
      ce.prepareTemplateDom(t, e)
    },
    prepareTemplateStyles: function(t, e, n) {
      ce.flushCustomStyles(), ce.prepareTemplateStyles(t, e, n)
    },
    styleSubtree: function(t, e) {
      ce.flushCustomStyles(), ce.styleSubtree(t, e)
    },
    styleElement: function(t) {
      ce.flushCustomStyles(), ce.styleElement(t)
    },
    styleDocument: function(t) {
      ce.flushCustomStyles(), ce.styleDocument(t)
    },
    flushCustomStyles: function() {
      ce.flushCustomStyles()
    },
    getComputedStyleValue: function(t, e) {
      return ce.getComputedStyleValue(t, e)
    },
    nativeCss: S,
    nativeShadow: g,
    cssBuild: f,
    disableRuntime: w
  }, ae && (window.ShadyCSS.ApplyShim = ae), ue && (window.ShadyCSS.CustomStyleInterface = ue);
  var le = window.customElements,
    fe = !1,
    he = null;

  function pe() {
    window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document), he && he(), fe = !0, window.webComponentsReady = !0, document.dispatchEvent(new CustomEvent("WebComponentsReady", {
      bubbles: !0
    }))
  }
  le.polyfillWrapFlushCallback && le.polyfillWrapFlushCallback(function(t) {
    he = t, fe && t()
  }), "complete" !== document.readyState ? (window.addEventListener("load", pe), window.addEventListener("DOMContentLoaded", function() {
    window.removeEventListener("load", pe), pe()
  })) : pe();
  n(290), n(291), n(292);
  var de = "undefined" != typeof Set && 1 === new Set([1]).size ? Set : function() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return (t = t.filter(function(e, n) {
      return n === t.indexOf(e)
    })).size = t.length, t.has = function(e) {
      return t.indexOf(e) > -1
    }, t.add = function(e) {
      return t.has(e) || (t.size++, t.push(e)), t
    }, t.delete = function(e) {
      var n;
      return (n = t.has(e)) && (t.size--, t.splice(t.indexOf(e), 1)), n
    }, t.clear = function() {
      for (; t.pop(););
      t.size = 0
    }, t
  };

  function ye(t, e) {
    return t ? t(e) : e
  }

  function ve(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
    return t.replace(/([a-z\d])([A-Z])/g, "$1".concat(e, "$2")).replace(/([A-Z]+)([A-Z][a-z\d]+)/g, "$1".concat(e, "$2")).toLowerCase()
  }

  function me(t) {
    return (me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function be(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function ge(t, e, n) {
    return e && be(t.prototype, e), n && be(t, n), t
  }

  function _e(t, e) {
    return !e || "object" !== me(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function we(t) {
    return (we = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Se(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && Ee(t, e)
  }

  function Ee(t, e) {
    return (Ee = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function xe(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
  }
  var Oe = new de(["customevent"]),
    Te = Symbol || function(t) {
      return "_".concat(t)
    },
    Ce = Te("sroot"),
    Ne = Te("state");
  window.process = window.process || {}, window.process.env = window.process.env || {}, window.requestIdleCallback = window.requestIdleCallback || function(t) {
    return window.setTimeout(t, 0)
  }, window.cancelIdleCallback = window.cancelIdleCallback || window.clearTimeout;
  var ke = function t() {
      xe(this, t)
    },
    Ae = function() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke;
      return function(e) {
        function n() {
          return xe(this, n), _e(this, we(n).apply(this, arguments))
        }
        return Se(n, t), ge(n, [{
          key: "setupComponent",
          value: function(t, e) {
            var n = this.constructor.defaults;
            this[Ne] = Object.assign({}, n, e), this.setupProperties(this), this[Ce] = this.setupShadowDOM(t)
          }
        }, {
          key: "setupShadowDOM",
          value: function(t) {
            return t
          }
        }, {
          key: "connectComponent",
          value: function() {}
        }, {
          key: "disconnectComponent",
          value: function() {}
        }, {
          key: "adoptComponent",
          value: function() {}
        }, {
          key: "getRoot",
          value: function() {
            return this[Ce]
          }
        }, {
          key: "getEl",
          value: function() {
            return this[Ce]
          }
        }, {
          key: "fireEvent",
          value: function(t, e) {
            var n = this.constructor.componentName,
              r = new CustomEvent("".concat(n, "-").concat(t), e);
            this.el.dispatchEvent(r)
          }
        }, {
          key: "setInternalState",
          value: function(t, e) {
            this[Ne][t] = e
          }
        }, {
          key: "setupProperties",
          value: function() {
            var t = this,
              e = this.constructor.sideEffects;
            Object.keys(this[Ne]).forEach(function(n) {
              var r = e[n];
              t.setupProperty(n, r)
            })
          }
        }, {
          key: "setupProperty",
          value: function(t, e) {
            var n = this;
            Object.defineProperty(this, t, {
              get: function() {
                return n[Ne][t]
              },
              set: function(r) {
                var o = n[Ne][t];
                n.setInternalState(t, r), e && e.call(n, r, o)
              },
              enumerable: !0,
              configurable: !0
            })
          }
        }, {
          key: "sroot",
          get: function() {
            return this.getRoot()
          }
        }, {
          key: "el",
          get: function() {
            return this.getEl()
          }
        }]), n
      }()
    };

  function Me(t) {
    return (Me = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function je(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
  }

  function Pe(t, e, n) {
    return (Pe = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
      var r = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Re(t)););
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function Re(t) {
    return (Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ie(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Le(t, e, n) {
    return e && Ie(t.prototype, e), n && Ie(t, n), t
  }

  function De(t, e) {
    return (De = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Fe, He = new de([].concat(function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(Fe = Oe) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(Fe) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }(), ["template", "customelements"])),
    qe = null,
    Be = function(t) {
      return function(e) {
        function n() {
          var t, e;
          ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n);
          for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
          return (e = function(t, e) {
            return !e || "object" !== Me(e) && "function" != typeof e ? je(t) : e
          }(this, (t = Re(n)).call.apply(t, [this].concat(o)))).setupComponent(je(e), e.getStateFromAttributes()), e
        }
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && De(t, e)
        }(n, t), Le(n, null, [{
          key: "getObservedAttributes",
          value: function() {
            var t = this.types;
            return Object.keys(t).map(function(t) {
              return ve(t)
            })
          }
        }]), Le(n, [{
          key: "reflectAttribute",
          value: function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
              r = ve(t);
            n && (qe = r);
            var o = this.constructor.types,
              i = o[t];
            var s = i.stringify(e);
            null == s ? this.removeAttribute(r) : this.setAttribute(r, s)
          }
        }, {
          key: "getStateFromAttributes",
          value: function() {
            var t = this,
              e = this.constructor.types,
              n = {};
            return Object.keys(e).forEach(function(r) {
              var o = ve(r),
                i = t.hasAttribute(o) ? t.getAttribute(o) : null,
                s = ye(e[r], i);
              null != s && (n[r] = s)
            }), n
          }
        }, {
          key: "connectedCallback",
          value: function() {
            this.connectComponent()
          }
        }, {
          key: "disconnectedCallback",
          value: function() {
            this.disconnectComponent()
          }
        }, {
          key: "adoptedCallback",
          value: function() {
            this.adoptComponent()
          }
        }, {
          key: "attributeChangedCallback",
          value: function(t, e, n) {
            if (qe === t) qe = null;
            else if (e !== n) {
              var r = this.constructor.types,
                o = function() {
                  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                  var r = [].map.call(e, function(t) {
                    return t.trim()
                  }).filter(function(t) {
                    return t.length
                  }).join("-");
                  return 0 === r.length ? "" : 1 === r.length ? r.toLowerCase() : (r = function(t) {
                    for (var e = t, n = !1, r = !1, o = !1, i = 0; i < e.length; i++) {
                      var s = e.charAt(i);
                      n && /[a-zA-Z]/.test(s) && s.toUpperCase() === s ? (e = "".concat(e.substr(0, i), "-").concat(e.substr(i)), n = !1, o = r, r = !0, i++) : r && o && /[a-zA-Z]/.test(s) && s.toLowerCase() === s ? (e = "".concat(e.substr(0, i - 1), "-").concat(e.substr(i - 1)), o = r, r = !1, n = !0) : (n = s.toLowerCase() === s, o = r, r = s.toUpperCase() === s)
                    }
                    return e
                  }(r)).replace(/^[_.\- ]+/, "").toLowerCase().replace(/[_.\- ]+(\w|$)/g, function(t, e) {
                    return e.toUpperCase()
                  })
                }(t),
                i = ye(r[o], n);
              this[o] = null != i ? i : this.constructor.defaults[o]
            }
          }
        }, {
          key: "setInternalState",
          value: function(t, e) {
            Pe(Re(n.prototype), "setInternalState", this).call(this, t, e), this.reflectAttribute(t, e, !0)
          }
        }, {
          key: "setupShadowDOM",
          value: function(t) {
            var e = this.getTemplate();
            if (e) {
              if ("attachShadow" in Element.prototype) return t.attachShadow({
                mode: "open"
              }), t.shadowRoot.appendChild(e), t.shadowRoot;
              throw Error("ShadowDOM API not supported")
            }
            return t
          }
        }, {
          key: "getEl",
          value: function() {
            return this
          }
        }, {
          key: "getTemplate",
          value: function() {
            var t = this.constructor.componentName;
            return document.querySelector('link[href*="'.concat(t, '"]')).import.querySelector("#".concat(t, "-template")).content.cloneNode(!0)
          }
        }, {
          key: "template",
          get: function() {
            return this.getTemplate()
          }
        }]), n
      }()
    };

  function Ue() {
    var t = "function" == typeof window.HTMLElement ? window.HTMLElement : function() {};
    return Reflect.construct(t, [], this.__proto__.constructor)
  }
  Object.setPrototypeOf && (Object.setPrototypeOf(Ue.prototype, HTMLElement.prototype), Object.setPrototypeOf(Ue, HTMLElement));
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  var ze = function(t, e) {
    return (ze = Object.setPrototypeOf || {
        __proto__: []
      }
      instanceof Array && function(t, e) {
        t.__proto__ = e
      } || function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
      })(t, e)
  };

  function We(t, e) {
    function n() {
      this.constructor = t
    }
    ze(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
  }

  function Ve(t) {
    return "function" == typeof t
  }
  var Xe = !1,
    $e = {
      Promise: void 0,
      set useDeprecatedSynchronousErrorHandling(t) {
        t && (new Error).stack;
        Xe = t
      },
      get useDeprecatedSynchronousErrorHandling() {
        return Xe
      }
    };

  function Ge(t) {
    setTimeout(function() {
      throw t
    }, 0)
  }
  var Ye = {
      closed: !0,
      next: function(t) {},
      error: function(t) {
        if ($e.useDeprecatedSynchronousErrorHandling) throw t;
        Ge(t)
      },
      complete: function() {}
    },
    Ke = Array.isArray || function(t) {
      return t && "number" == typeof t.length
    };

  function Je(t) {
    return (Je = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Ze(t) {
    return null !== t && "object" === Je(t)
  }

  function Qe(t) {
    return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(t, e) {
      return e + 1 + ") " + t.toString()
    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
  }
  Qe.prototype = Object.create(Error.prototype);
  var tn = Qe;

  function en(t) {
    return (en = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var nn = function() {
    function t(t) {
      this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._unsubscribe = t)
    }
    return t.prototype.unsubscribe = function() {
      var e;
      if (!this.closed) {
        var n = this._parentOrParents,
          r = this._unsubscribe,
          o = this._subscriptions;
        if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
        else if (null !== n)
          for (var i = 0; i < n.length; ++i) {
            n[i].remove(this)
          }
        if (Ve(r)) try {
          r.call(this)
        } catch (t) {
          e = t instanceof tn ? rn(t.errors) : [t]
        }
        if (Ke(o)) {
          i = -1;
          for (var s = o.length; ++i < s;) {
            var a = o[i];
            if (Ze(a)) try {
              a.unsubscribe()
            } catch (t) {
              e = e || [], t instanceof tn ? e = e.concat(rn(t.errors)) : e.push(t)
            }
          }
        }
        if (e) throw new tn(e)
      }
    }, t.prototype.add = function(e) {
      var n = e;
      if (!e) return t.EMPTY;
      switch (en(e)) {
        case "function":
          n = new t(e);
        case "object":
          if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
          if (this.closed) return n.unsubscribe(), n;
          if (!(n instanceof t)) {
            var r = n;
            (n = new t)._subscriptions = [r]
          }
          break;
        default:
          throw new Error("unrecognized teardown " + e + " added to Subscription.")
      }
      var o = n._parentOrParents;
      if (null === o) n._parentOrParents = this;
      else if (o instanceof t) {
        if (o === this) return n;
        n._parentOrParents = [o, this]
      } else {
        if (-1 !== o.indexOf(this)) return n;
        o.push(this)
      }
      var i = this._subscriptions;
      return null === i ? this._subscriptions = [n] : i.push(n), n
    }, t.prototype.remove = function(t) {
      var e = this._subscriptions;
      if (e) {
        var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
      }
    }, t.EMPTY = function(t) {
      return t.closed = !0, t
    }(new t), t
  }();

  function rn(t) {
    return t.reduce(function(t, e) {
      return t.concat(e instanceof tn ? e.errors : e)
    }, [])
  }
  var on = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random();

  function sn(t) {
    return (sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  var an = function(t) {
      function e(n, r, o) {
        var i = t.call(this) || this;
        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
          case 0:
            i.destination = Ye;
            break;
          case 1:
            if (!n) {
              i.destination = Ye;
              break
            }
            if ("object" === sn(n)) {
              n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new un(i, n));
              break
            }
            default:
              i.syncErrorThrowable = !0, i.destination = new un(i, n, r, o)
        }
        return i
      }
      return We(e, t), e.prototype[on] = function() {
        return this
      }, e.create = function(t, n, r) {
        var o = new e(t, n, r);
        return o.syncErrorThrowable = !1, o
      }, e.prototype.next = function(t) {
        this.isStopped || this._next(t)
      }, e.prototype.error = function(t) {
        this.isStopped || (this.isStopped = !0, this._error(t))
      }, e.prototype.complete = function() {
        this.isStopped || (this.isStopped = !0, this._complete())
      }, e.prototype.unsubscribe = function() {
        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
      }, e.prototype._next = function(t) {
        this.destination.next(t)
      }, e.prototype._error = function(t) {
        this.destination.error(t), this.unsubscribe()
      }, e.prototype._complete = function() {
        this.destination.complete(), this.unsubscribe()
      }, e.prototype._unsubscribeAndRecycle = function() {
        var t = this._parentOrParents;
        return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
      }, e
    }(nn),
    un = function(t) {
      function e(e, n, r, o) {
        var i, s = t.call(this) || this;
        s._parentSubscriber = e;
        var a = s;
        return Ve(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== Ye && (Ve((a = Object.create(n)).unsubscribe) && s.add(a.unsubscribe.bind(a)), a.unsubscribe = s.unsubscribe.bind(s))), s._context = a, s._next = i, s._error = r, s._complete = o, s
      }
      return We(e, t), e.prototype.next = function(t) {
        if (!this.isStopped && this._next) {
          var e = this._parentSubscriber;
          $e.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
        }
      }, e.prototype.error = function(t) {
        if (!this.isStopped) {
          var e = this._parentSubscriber,
            n = $e.useDeprecatedSynchronousErrorHandling;
          if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
          else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Ge(t), this.unsubscribe();
          else {
            if (this.unsubscribe(), n) throw t;
            Ge(t)
          }
        }
      }, e.prototype.complete = function() {
        var t = this;
        if (!this.isStopped) {
          var e = this._parentSubscriber;
          if (this._complete) {
            var n = function() {
              return t._complete.call(t._context)
            };
            $e.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
          } else this.unsubscribe()
        }
      }, e.prototype.__tryOrUnsub = function(t, e) {
        try {
          t.call(this._context, e)
        } catch (t) {
          if (this.unsubscribe(), $e.useDeprecatedSynchronousErrorHandling) throw t;
          Ge(t)
        }
      }, e.prototype.__tryOrSetError = function(t, e, n) {
        if (!$e.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
        try {
          e.call(this._context, n)
        } catch (e) {
          return $e.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = e, t.syncErrorThrown = !0, !0) : (Ge(e), !0)
        }
        return !1
      }, e.prototype._unsubscribe = function() {
        var t = this._parentSubscriber;
        this._context = null, this._parentSubscriber = null, t.unsubscribe()
      }, e
    }(an);
  var cn = "function" == typeof Symbol && Symbol.observable || "@@observable";

  function ln() {}

  function fn(t) {
    return t ? 1 === t.length ? t[0] : function(e) {
      return t.reduce(function(t, e) {
        return e(t)
      }, e)
    } : ln
  }
  var hn = function() {
    function t(t) {
      this._isScalar = !1, t && (this._subscribe = t)
    }
    return t.prototype.lift = function(e) {
      var n = new t;
      return n.source = this, n.operator = e, n
    }, t.prototype.subscribe = function(t, e, n) {
      var r = this.operator,
        o = function(t, e, n) {
          if (t) {
            if (t instanceof an) return t;
            if (t[on]) return t[on]()
          }
          return t || e || n ? new an(t, e, n) : new an(Ye)
        }(t, e, n);
      if (r ? o.add(r.call(o, this.source)) : o.add(this.source || $e.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), $e.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
      return o
    }, t.prototype._trySubscribe = function(t) {
      try {
        return this._subscribe(t)
      } catch (e) {
        $e.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), ! function(t) {
          for (; t;) {
            var e = t,
              n = e.closed,
              r = e.destination,
              o = e.isStopped;
            if (n || o) return !1;
            t = r && r instanceof an ? r : null
          }
          return !0
        }(t) ? console.warn(e) : t.error(e)
      }
    }, t.prototype.forEach = function(t, e) {
      var n = this;
      return new(e = pn(e))(function(e, r) {
        var o;
        o = n.subscribe(function(e) {
          try {
            t(e)
          } catch (t) {
            r(t), o && o.unsubscribe()
          }
        }, r, e)
      })
    }, t.prototype._subscribe = function(t) {
      var e = this.source;
      return e && e.subscribe(t)
    }, t.prototype[cn] = function() {
      return this
    }, t.prototype.pipe = function() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return 0 === t.length ? this : fn(t)(this)
    }, t.prototype.toPromise = function(t) {
      var e = this;
      return new(t = pn(t))(function(t, n) {
        var r;
        e.subscribe(function(t) {
          return r = t
        }, function(t) {
          return n(t)
        }, function() {
          return t(r)
        })
      })
    }, t.create = function(e) {
      return new t(e)
    }, t
  }();

  function pn(t) {
    if (t || (t = $e.Promise || Promise), !t) throw new Error("no Promise impl found");
    return t
  }

  function dn() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
  }
  dn.prototype = Object.create(Error.prototype);
  var yn = dn,
    vn = function(t) {
      function e(e, n) {
        var r = t.call(this) || this;
        return r.subject = e, r.subscriber = n, r.closed = !1, r
      }
      return We(e, t), e.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.closed = !0;
          var t = this.subject,
            e = t.observers;
          if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
            var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
          }
        }
      }, e
    }(nn),
    mn = function(t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n.destination = e, n
      }
      return We(e, t), e
    }(an),
    bn = function(t) {
      function e() {
        var e = t.call(this) || this;
        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
      }
      return We(e, t), e.prototype[on] = function() {
        return new mn(this)
      }, e.prototype.lift = function(t) {
        var e = new gn(this, this);
        return e.operator = t, e
      }, e.prototype.next = function(t) {
        if (this.closed) throw new yn;
        if (!this.isStopped)
          for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
      }, e.prototype.error = function(t) {
        if (this.closed) throw new yn;
        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
        this.observers.length = 0
      }, e.prototype.complete = function() {
        if (this.closed) throw new yn;
        this.isStopped = !0;
        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
        this.observers.length = 0
      }, e.prototype.unsubscribe = function() {
        this.isStopped = !0, this.closed = !0, this.observers = null
      }, e.prototype._trySubscribe = function(e) {
        if (this.closed) throw new yn;
        return t.prototype._trySubscribe.call(this, e)
      }, e.prototype._subscribe = function(t) {
        if (this.closed) throw new yn;
        return this.hasError ? (t.error(this.thrownError), nn.EMPTY) : this.isStopped ? (t.complete(), nn.EMPTY) : (this.observers.push(t), new vn(this, t))
      }, e.prototype.asObservable = function() {
        var t = new hn;
        return t.source = this, t
      }, e.create = function(t, e) {
        return new gn(t, e)
      }, e
    }(hn),
    gn = function(t) {
      function e(e, n) {
        var r = t.call(this) || this;
        return r.destination = e, r.source = n, r
      }
      return We(e, t), e.prototype.next = function(t) {
        var e = this.destination;
        e && e.next && e.next(t)
      }, e.prototype.error = function(t) {
        var e = this.destination;
        e && e.error && this.destination.error(t)
      }, e.prototype.complete = function() {
        var t = this.destination;
        t && t.complete && this.destination.complete()
      }, e.prototype._subscribe = function(t) {
        return this.source ? this.source.subscribe(t) : nn.EMPTY
      }, e
    }(bn),
    _n = function(t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this;
        return r.scheduler = e, r.work = n, r.pending = !1, r
      }
      return We(e, t), e.prototype.schedule = function(t, e) {
        if (void 0 === e && (e = 0), this.closed) return this;
        this.state = t;
        var n = this.id,
          r = this.scheduler;
        return null != n && (this.id = this.recycleAsyncId(r, n, e)), this.pending = !0, this.delay = e, this.id = this.id || this.requestAsyncId(r, this.id, e), this
      }, e.prototype.requestAsyncId = function(t, e, n) {
        return void 0 === n && (n = 0), setInterval(t.flush.bind(t, this), n)
      }, e.prototype.recycleAsyncId = function(t, e, n) {
        if (void 0 === n && (n = 0), null !== n && this.delay === n && !1 === this.pending) return e;
        clearInterval(e)
      }, e.prototype.execute = function(t, e) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var n = this._execute(t, e);
        if (n) return n;
        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
      }, e.prototype._execute = function(t, e) {
        var n = !1,
          r = void 0;
        try {
          this.work(t)
        } catch (t) {
          n = !0, r = !!t && t || new Error(t)
        }
        if (n) return this.unsubscribe(), r
      }, e.prototype._unsubscribe = function() {
        var t = this.id,
          e = this.scheduler,
          n = e.actions,
          r = n.indexOf(this);
        this.work = null, this.state = null, this.pending = !1, this.scheduler = null, -1 !== r && n.splice(r, 1), null != t && (this.id = this.recycleAsyncId(e, t, null)), this.delay = null
      }, e
    }(function(t) {
      function e(e, n) {
        return t.call(this) || this
      }
      return We(e, t), e.prototype.schedule = function(t, e) {
        return void 0 === e && (e = 0), this
      }, e
    }(nn)),
    wn = function(t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this;
        return r.scheduler = e, r.work = n, r
      }
      return We(e, t), e.prototype.schedule = function(e, n) {
        return void 0 === n && (n = 0), n > 0 ? t.prototype.schedule.call(this, e, n) : (this.delay = n, this.state = e, this.scheduler.flush(this), this)
      }, e.prototype.execute = function(e, n) {
        return n > 0 || this.closed ? t.prototype.execute.call(this, e, n) : this._execute(e, n)
      }, e.prototype.requestAsyncId = function(e, n, r) {
        return void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : e.flush(this)
      }, e
    }(_n),
    Sn = function() {
      function t(e, n) {
        void 0 === n && (n = t.now), this.SchedulerAction = e, this.now = n
      }
      return t.prototype.schedule = function(t, e, n) {
        return void 0 === e && (e = 0), new this.SchedulerAction(this, t).schedule(n, e)
      }, t.now = function() {
        return Date.now()
      }, t
    }(),
    En = function(t) {
      function e(n, r) {
        void 0 === r && (r = Sn.now);
        var o = t.call(this, n, function() {
          return e.delegate && e.delegate !== o ? e.delegate.now() : r()
        }) || this;
        return o.actions = [], o.active = !1, o.scheduled = void 0, o
      }
      return We(e, t), e.prototype.schedule = function(n, r, o) {
        return void 0 === r && (r = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(n, r, o) : t.prototype.schedule.call(this, n, r, o)
      }, e.prototype.flush = function(t) {
        var e = this.actions;
        if (this.active) e.push(t);
        else {
          var n;
          this.active = !0;
          do {
            if (n = t.execute(t.state, t.delay)) break
          } while (t = e.shift());
          if (this.active = !1, n) {
            for (; t = e.shift();) t.unsubscribe();
            throw n
          }
        }
      }, e
    }(Sn),
    xn = new(function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return We(e, t), e
    }(En))(wn),
    On = new hn(function(t) {
      return t.complete()
    });

  function Tn(t) {
    return t ? function(t) {
      return new hn(function(e) {
        return t.schedule(function() {
          return e.complete()
        })
      })
    }(t) : On
  }

  function Cn(t) {
    return t && "function" == typeof t.schedule
  }
  var Nn, kn = function(t) {
    return function(e) {
      for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
      e.complete()
    }
  };

  function An(t, e) {
    return new hn(function(n) {
      var r = new nn,
        o = 0;
      return r.add(e.schedule(function() {
        o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
      })), r
    })
  }

  function Mn(t, e) {
    return e ? An(t, e) : new hn(kn(t))
  }

  function jn() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = t[t.length - 1];
    return Cn(n) ? (t.pop(), An(t, n)) : Mn(t)
  }

  function Pn(t) {
    var e = t.error;
    t.subscriber.error(e)
  }
  Nn || (Nn = {});
  var Rn = function() {
    function t(t, e, n) {
      this.kind = t, this.value = e, this.error = n, this.hasValue = "N" === t
    }
    return t.prototype.observe = function(t) {
      switch (this.kind) {
        case "N":
          return t.next && t.next(this.value);
        case "E":
          return t.error && t.error(this.error);
        case "C":
          return t.complete && t.complete()
      }
    }, t.prototype.do = function(t, e, n) {
      switch (this.kind) {
        case "N":
          return t && t(this.value);
        case "E":
          return e && e(this.error);
        case "C":
          return n && n()
      }
    }, t.prototype.accept = function(t, e, n) {
      return t && "function" == typeof t.next ? this.observe(t) : this.do(t, e, n)
    }, t.prototype.toObservable = function() {
      var t, e;
      switch (this.kind) {
        case "N":
          return jn(this.value);
        case "E":
          return t = this.error, new hn(e ? function(n) {
            return e.schedule(Pn, 0, {
              error: t,
              subscriber: n
            })
          } : function(e) {
            return e.error(t)
          });
        case "C":
          return Tn()
      }
      throw new Error("unexpected notification kind value")
    }, t.createNext = function(e) {
      return void 0 !== e ? new t("N", e) : t.undefinedValueNotification
    }, t.createError = function(e) {
      return new t("E", void 0, e)
    }, t.createComplete = function() {
      return t.completeNotification
    }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t
  }();
  var In = function() {
      function t(t, e) {
        void 0 === e && (e = 0), this.scheduler = t, this.delay = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Ln(t, this.scheduler, this.delay))
      }, t
    }(),
    Ln = function(t) {
      function e(e, n, r) {
        void 0 === r && (r = 0);
        var o = t.call(this, e) || this;
        return o.scheduler = n, o.delay = r, o
      }
      return We(e, t), e.dispatch = function(t) {
        var e = t.notification,
          n = t.destination;
        e.observe(n), this.unsubscribe()
      }, e.prototype.scheduleMessage = function(t) {
        this.destination.add(this.scheduler.schedule(e.dispatch, this.delay, new Dn(t, this.destination)))
      }, e.prototype._next = function(t) {
        this.scheduleMessage(Rn.createNext(t))
      }, e.prototype._error = function(t) {
        this.scheduleMessage(Rn.createError(t)), this.unsubscribe()
      }, e.prototype._complete = function() {
        this.scheduleMessage(Rn.createComplete()), this.unsubscribe()
      }, e
    }(an),
    Dn = function() {
      return function(t, e) {
        this.notification = t, this.destination = e
      }
    }(),
    Fn = function(t) {
      function e(e, n, r) {
        void 0 === e && (e = Number.POSITIVE_INFINITY), void 0 === n && (n = Number.POSITIVE_INFINITY);
        var o = t.call(this) || this;
        return o.scheduler = r, o._events = [], o._infiniteTimeWindow = !1, o._bufferSize = e < 1 ? 1 : e, o._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (o._infiniteTimeWindow = !0, o.next = o.nextInfiniteTimeWindow) : o.next = o.nextTimeWindow, o
      }
      return We(e, t), e.prototype.nextInfiniteTimeWindow = function(e) {
        var n = this._events;
        n.push(e), n.length > this._bufferSize && n.shift(), t.prototype.next.call(this, e)
      }, e.prototype.nextTimeWindow = function(e) {
        this._events.push(new Hn(this._getNow(), e)), this._trimBufferThenGetEvents(), t.prototype.next.call(this, e)
      }, e.prototype._subscribe = function(t) {
        var e, n = this._infiniteTimeWindow,
          r = n ? this._events : this._trimBufferThenGetEvents(),
          o = this.scheduler,
          i = r.length;
        if (this.closed) throw new yn;
        if (this.isStopped || this.hasError ? e = nn.EMPTY : (this.observers.push(t), e = new vn(this, t)), o && t.add(t = new Ln(t, o)), n)
          for (var s = 0; s < i && !t.closed; s++) t.next(r[s]);
        else
          for (s = 0; s < i && !t.closed; s++) t.next(r[s].value);
        return this.hasError ? t.error(this.thrownError) : this.isStopped && t.complete(), e
      }, e.prototype._getNow = function() {
        return (this.scheduler || xn).now()
      }, e.prototype._trimBufferThenGetEvents = function() {
        for (var t = this._getNow(), e = this._bufferSize, n = this._windowTime, r = this._events, o = r.length, i = 0; i < o && !(t - r[i].time < n);) i++;
        return o > e && (i = Math.max(i, o - e)), i > 0 && r.splice(0, i), r
      }, e
    }(bn),
    Hn = function() {
      return function(t, e) {
        this.time = t, this.value = e
      }
    }();

  function qn(t) {
    return (qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Bn(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Un(t, e) {
    return !e || "object" !== qn(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function zn(t, e, n) {
    return (zn = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
      var r = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Wn(t)););
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function Wn(t) {
    return (Wn = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Vn(t, e) {
    return (Vn = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Xn = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), Un(this, Wn(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && Vn(t, e)
        }(n, t), r = n, (o = [{
          key: "setupComponent",
          value: function(t, e) {
            var r = this,
              o = {};
            this.subjects = {}, this.subjects.disconnect = new bn, this.subjects.document = new Fn, Object.keys(this.constructor.types).map(function(t) {
              r.subjects[t] = new Fn(1), o[t] = function(e) {
                return r.subjects[t].next(e)
              }
            }), Object.defineProperty(this.constructor, "sideEffects", {
              get: function() {
                return o
              },
              set: function() {},
              enumerable: !0,
              configurable: !0
            }), zn(Wn(n.prototype), "setupComponent", this).call(this, t, e)
          }
        }, {
          key: "connectComponent",
          value: function() {
            var t = this;
            zn(Wn(n.prototype), "connectComponent", this).call(this), this.subjects.document.next(document), Object.keys(this.constructor.types).map(function(e) {
              return t.subjects[e].next(t[e])
            })
          }
        }, {
          key: "disconnectComponent",
          value: function() {
            zn(Wn(n.prototype), "disconnectComponent", this).call(this), this.subjects.disconnect.next({})
          }
        }, {
          key: "adaptComponent",
          value: function() {
            zn(Wn(n.prototype), "adaptComponent", this).call(this), this.subjects.document.next(document)
          }
        }]) && Bn(r.prototype, o), i && Bn(r, i), n
      }()
    },
    $n = function(t) {
      return function(e, n, r) {
        return hn.create(function(o) {
          var i = o.next.bind(o),
            s = new t(function(t) {
              return Array.from(t).forEach(i)
            }, n);
          return s.observe(e, r),
            function() {
              s.unobserve(e)
            }
        })
      }
    },
    Gn = function(t) {
      return null == t ? null : t.trim().replace(/^\[?(.*?)\]?$/, "$1").split(",").map(function(t) {
        return t.trim()
      }) || null
    };
  Gn.stringify = function(t) {
    return t && t.length > 0 ? t.join(",") : null
  };
  var Yn = function(t) {
      var e = function(e) {
        if (null == e) return null;
        var n = Gn(e).map(t);
        return n.reduce(function(t, e) {
          return t && null !== e
        }, !0) ? n : null
      };
      return e.stringify = function(e) {
        var n = e && e.map && e.map(t.stringify);
        return n && n.reduce(function(t, e) {
          return t && null !== e
        }, !0) ? Gn.stringify(n) : null
      }, e
    },
    Kn = function(t) {
      if (null == t) return !1;
      var e = t.trim && t.trim() || t;
      return !("false" === e || "null" === e || "undefined" === e || "0" === e || !1 === e)
    };
  Kn.stringify = function(t) {
    return t ? "" : null
  };
  var Jn = function(t) {
    return null == t ? null : Number(t)
  };
  Jn.stringify = function(t) {
    return null == t ? null : "".concat(t)
  };
  var Zn = function(t) {
      var e = function(e) {
        if (null == e) return null;
        var n = t.indexOf(e);
        return n > -1 ? t[n] : null
      };
      return e.stringify = function(e) {
        return -1 !== t.indexOf(e) ? e : null
      }, e
    },
    Qn = function(t) {
      if (null == t) return null;
      var e = (t.trim && t.trim() || t).match(/^\/?(.*?)(\/([gimy]*))?$/);
      return new RegExp(e[1], e[3])
    };
  Qn.stringify = function(t) {
    return t && t.toString() || null
  };
  var tr = function(t) {
    return t
  };
  tr.stringify = function(t) {
    return t
  };
  var er = function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return We(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
        this.destination.next(e)
      }, e.prototype.notifyError = function(t, e) {
        this.destination.error(t)
      }, e.prototype.notifyComplete = function(t) {
        this.destination.complete()
      }, e
    }(an),
    nr = function(t) {
      function e(e, n, r) {
        var o = t.call(this) || this;
        return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
      }
      return We(e, t), e.prototype._next = function(t) {
        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
      }, e.prototype._error = function(t) {
        this.parent.notifyError(t, this), this.unsubscribe()
      }, e.prototype._complete = function() {
        this.parent.notifyComplete(this), this.unsubscribe()
      }, e
    }(an);

  function rr() {
    return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
  }
  var or = rr(),
    ir = function(t) {
      return t && "number" == typeof t.length && "function" != typeof t
    };

  function sr(t) {
    return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
  }
  var ar = function(t) {
    if (t && "function" == typeof t[cn]) return r = t,
      function(t) {
        var e = r[cn]();
        if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
        return e.subscribe(t)
      };
    if (ir(t)) return kn(t);
    if (sr(t)) return n = t,
      function(t) {
        return n.then(function(e) {
          t.closed || (t.next(e), t.complete())
        }, function(e) {
          return t.error(e)
        }).then(null, Ge), t
      };
    if (t && "function" == typeof t[or]) return e = t,
      function(t) {
        for (var n = e[or]();;) {
          var r = n.next();
          if (r.done) {
            t.complete();
            break
          }
          if (t.next(r.value), t.closed) break
        }
        return "function" == typeof n.return && t.add(function() {
          n.return && n.return()
        }), t
      };
    var e, n, r, o = Ze(t) ? "an invalid object" : "'" + t + "'";
    throw new TypeError("You provided " + o + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
  };

  function ur(t, e, n, r, o) {
    if (void 0 === o && (o = new nr(t, n, r)), !o.closed) return e instanceof hn ? e.subscribe(o) : ar(e)(o)
  }
  var cr = {};

  function lr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = null,
      r = null;
    return Cn(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && Ke(t[0]) && (t = t[0]), Mn(t, r).lift(new fr(n))
  }
  var fr = function() {
      function t(t) {
        this.resultSelector = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new hr(t, this.resultSelector))
      }, t
    }(),
    hr = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
      }
      return We(e, t), e.prototype._next = function(t) {
        this.values.push(cr), this.observables.push(t)
      }, e.prototype._complete = function() {
        var t = this.observables,
          e = t.length;
        if (0 === e) this.destination.complete();
        else {
          this.active = e, this.toRespond = e;
          for (var n = 0; n < e; n++) {
            var r = t[n];
            this.add(ur(this, r, r, n))
          }
        }
      }, e.prototype.notifyComplete = function(t) {
        0 == (this.active -= 1) && this.destination.complete()
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        var i = this.values,
          s = i[n],
          a = this.toRespond ? s === cr ? --this.toRespond : this.toRespond : 0;
        i[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
      }, e.prototype._tryResultSelector = function(t) {
        var e;
        try {
          e = this.resultSelector.apply(this, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.next(e)
      }, e
    }(er);

  function pr(t, e) {
    return function(n) {
      if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
      return n.lift(new dr(t, e))
    }
  }
  var dr = function() {
      function t(t, e) {
        this.project = t, this.thisArg = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new yr(t, this.project, this.thisArg))
      }, t
    }(),
    yr = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.project = n, o.count = 0, o.thisArg = r || o, o
      }
      return We(e, t), e.prototype._next = function(t) {
        var e;
        try {
          e = this.project.call(this.thisArg, t, this.count++)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.next(e)
      }, e
    }(an);

  function vr(t) {
    return (vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function mr(t, e) {
    if (null != t) {
      if (function(t) {
          return t && "function" == typeof t[cn]
        }(t)) return function(t, e) {
        return new hn(function(n) {
          var r = new nn;
          return r.add(e.schedule(function() {
            var o = t[cn]();
            r.add(o.subscribe({
              next: function(t) {
                r.add(e.schedule(function() {
                  return n.next(t)
                }))
              },
              error: function(t) {
                r.add(e.schedule(function() {
                  return n.error(t)
                }))
              },
              complete: function() {
                r.add(e.schedule(function() {
                  return n.complete()
                }))
              }
            }))
          })), r
        })
      }(t, e);
      if (sr(t)) return function(t, e) {
        return new hn(function(n) {
          var r = new nn;
          return r.add(e.schedule(function() {
            return t.then(function(t) {
              r.add(e.schedule(function() {
                n.next(t), r.add(e.schedule(function() {
                  return n.complete()
                }))
              }))
            }, function(t) {
              r.add(e.schedule(function() {
                return n.error(t)
              }))
            })
          })), r
        })
      }(t, e);
      if (ir(t)) return An(t, e);
      if (function(t) {
          return t && "function" == typeof t[or]
        }(t) || "string" == typeof t) return function(t, e) {
        if (!t) throw new Error("Iterable cannot be null");
        return new hn(function(n) {
          var r, o = new nn;
          return o.add(function() {
            r && "function" == typeof r.return && r.return()
          }), o.add(e.schedule(function() {
            r = t[or](), o.add(e.schedule(function() {
              if (!n.closed) {
                var t, e;
                try {
                  var o = r.next();
                  t = o.value, e = o.done
                } catch (t) {
                  return void n.error(t)
                }
                e ? n.complete() : (n.next(t), this.schedule())
              }
            }))
          })), o
        })
      }(t, e)
    }
    throw new TypeError((null !== t && vr(t) || t) + " is not observable")
  }

  function br(t, e) {
    return e ? mr(t, e) : t instanceof hn ? t : new hn(ar(t))
  }

  function gr(t, e, n) {
    return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
      return r.pipe(gr(function(n, r) {
        return br(t(n, r)).pipe(pr(function(t, o) {
          return e(n, t, r, o)
        }))
      }, n))
    } : ("number" == typeof e && (n = e), function(e) {
      return e.lift(new _r(t, n))
    })
  }
  var _r = function() {
      function t(t, e) {
        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new wr(t, this.project, this.concurrent))
      }, t
    }(),
    wr = function(t) {
      function e(e, n, r) {
        void 0 === r && (r = Number.POSITIVE_INFINITY);
        var o = t.call(this, e) || this;
        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
      }
      return We(e, t), e.prototype._next = function(t) {
        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
      }, e.prototype._tryNext = function(t) {
        var e, n = this.index++;
        try {
          e = this.project(t, n)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.active++, this._innerSub(e, t, n)
      }, e.prototype._innerSub = function(t, e, n) {
        var r = new nr(this, void 0, void 0);
        this.destination.add(r), ur(this, t, e, n, r)
      }, e.prototype._complete = function() {
        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        this.destination.next(e)
      }, e.prototype.notifyComplete = function(t) {
        var e = this.buffer;
        this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
      }, e
    }(er);

  function Sr(t) {
    return t
  }

  function Er(t) {
    return void 0 === t && (t = Number.POSITIVE_INFINITY), gr(Sr, t)
  }

  function xr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = Number.POSITIVE_INFINITY,
      r = null,
      o = t[t.length - 1];
    return Cn(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof hn ? t[0] : Er(n)(Mn(t, r))
  }
  var Or = new hn(ln);
  Object.prototype.toString;

  function Tr(t, e, n, r) {
    return Ve(n) && (r = n, n = void 0), r ? Tr(t, e, n).pipe(pr(function(t) {
      return Ke(t) ? r.apply(void 0, t) : r(t)
    })) : new hn(function(r) {
      ! function t(e, n, r, o, i) {
        var s;
        if (function(t) {
            return t && "function" == typeof t.addEventListener && "function" == typeof t.removeEventListener
          }(e)) {
          var a = e;
          e.addEventListener(n, r, i), s = function() {
            return a.removeEventListener(n, r, i)
          }
        } else if (function(t) {
            return t && "function" == typeof t.on && "function" == typeof t.off
          }(e)) {
          var u = e;
          e.on(n, r), s = function() {
            return u.off(n, r)
          }
        } else if (function(t) {
            return t && "function" == typeof t.addListener && "function" == typeof t.removeListener
          }(e)) {
          var c = e;
          e.addListener(n, r), s = function() {
            return c.removeListener(n, r)
          }
        } else {
          if (!e || !e.length) throw new TypeError("Invalid event target");
          for (var l = 0, f = e.length; l < f; l++) t(e[l], n, r, o, i)
        }
        o.add(s)
      }(t, e, function(t) {
        arguments.length > 1 ? r.next(Array.prototype.slice.call(arguments)) : r.next(t)
      }, r, n)
    })
  }
  var Cr = n(11);

  function Nr(t, e) {
    return void 0 === e && (e = null), new Ir({
      method: "GET",
      url: t,
      headers: e
    })
  }

  function kr(t, e, n) {
    return new Ir({
      method: "POST",
      url: t,
      body: e,
      headers: n
    })
  }

  function Ar(t, e) {
    return new Ir({
      method: "DELETE",
      url: t,
      headers: e
    })
  }

  function Mr(t, e, n) {
    return new Ir({
      method: "PUT",
      url: t,
      body: e,
      headers: n
    })
  }

  function jr(t, e, n) {
    return new Ir({
      method: "PATCH",
      url: t,
      body: e,
      headers: n
    })
  }
  var Pr = pr(function(t, e) {
    return t.response
  });

  function Rr(t, e) {
    return Pr(new Ir({
      method: "GET",
      url: t,
      responseType: "json",
      headers: e
    }))
  }
  var Ir = function(t) {
      function e(e) {
        var n = t.call(this) || this,
          r = {
            async: !0,
            createXHR: function() {
              return this.crossDomain ? function() {
                if (Cr.a.XMLHttpRequest) return new Cr.a.XMLHttpRequest;
                if (Cr.a.XDomainRequest) return new Cr.a.XDomainRequest;
                throw new Error("CORS is not supported by your browser")
              }() : function() {
                if (Cr.a.XMLHttpRequest) return new Cr.a.XMLHttpRequest;
                var t = void 0;
                try {
                  for (var e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], n = 0; n < 3; n++) try {
                    if (t = e[n], new Cr.a.ActiveXObject(t)) break
                  } catch (t) {}
                  return new Cr.a.ActiveXObject(t)
                } catch (t) {
                  throw new Error("XMLHttpRequest is not supported by your browser")
                }
              }()
            },
            crossDomain: !0,
            withCredentials: !1,
            headers: {},
            method: "GET",
            responseType: "json",
            timeout: 0
          };
        if ("string" == typeof e) r.url = e;
        else
          for (var o in e) e.hasOwnProperty(o) && (r[o] = e[o]);
        return n.request = r, n
      }
      var n;
      return We(e, t), e.prototype._subscribe = function(t) {
        return new Lr(t, this.request)
      }, e.create = ((n = function(t) {
        return new e(t)
      }).get = Nr, n.post = kr, n.delete = Ar, n.put = Mr, n.patch = jr, n.getJSON = Rr, n), e
    }(hn),
    Lr = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        r.request = n, r.done = !1;
        var o = n.headers = n.headers || {};
        return n.crossDomain || r.getHeader(o, "X-Requested-With") || (o["X-Requested-With"] = "XMLHttpRequest"), r.getHeader(o, "Content-Type") || Cr.a.FormData && n.body instanceof Cr.a.FormData || void 0 === n.body || (o["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8"), n.body = r.serializeBody(n.body, r.getHeader(n.headers, "Content-Type")), r.send(), r
      }
      return We(e, t), e.prototype.next = function(t) {
        this.done = !0;
        var e, n = this.xhr,
          r = this.request,
          o = this.destination;
        try {
          e = new Dr(t, n, r)
        } catch (t) {
          return o.error(t)
        }
        o.next(e)
      }, e.prototype.send = function() {
        var t = this.request,
          e = this.request,
          n = e.user,
          r = e.method,
          o = e.url,
          i = e.async,
          s = e.password,
          a = e.headers,
          u = e.body;
        try {
          var c = this.xhr = t.createXHR();
          this.setupEvents(c, t), n ? c.open(r, o, i, n, s) : c.open(r, o, i), i && (c.timeout = t.timeout, c.responseType = t.responseType), "withCredentials" in c && (c.withCredentials = !!t.withCredentials), this.setHeaders(c, a), u ? c.send(u) : c.send()
        } catch (t) {
          this.error(t)
        }
      }, e.prototype.serializeBody = function(t, e) {
        if (!t || "string" == typeof t) return t;
        if (Cr.a.FormData && t instanceof Cr.a.FormData) return t;
        if (e) {
          var n = e.indexOf(";"); - 1 !== n && (e = e.substring(0, n))
        }
        switch (e) {
          case "application/x-www-form-urlencoded":
            return Object.keys(t).map(function(e) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&");
          case "application/json":
            return JSON.stringify(t);
          default:
            return t
        }
      }, e.prototype.setHeaders = function(t, e) {
        for (var n in e) e.hasOwnProperty(n) && t.setRequestHeader(n, e[n])
      }, e.prototype.getHeader = function(t, e) {
        for (var n in t)
          if (n.toLowerCase() === e.toLowerCase()) return t[n]
      }, e.prototype.setupEvents = function(t, e) {
        var n = e.progressSubscriber;

        function r(t) {
          var e, n = r,
            o = n.subscriber,
            i = n.progressSubscriber,
            s = n.request;
          i && i.error(t);
          try {
            e = new Br(this, s)
          } catch (t) {
            e = t
          }
          o.error(e)
        }
        if (t.ontimeout = r, r.request = e, r.subscriber = this, r.progressSubscriber = n, t.upload && "withCredentials" in t) {
          var o, i;
          if (n) o = function(t) {
            o.progressSubscriber.next(t)
          }, Cr.a.XDomainRequest ? t.onprogress = o : t.upload.onprogress = o, o.progressSubscriber = n;
          i = function(t) {
            var e, n = i,
              r = n.progressSubscriber,
              o = n.subscriber,
              s = n.request;
            r && r.error(t);
            try {
              e = new Hr("ajax error", this, s)
            } catch (t) {
              e = t
            }
            o.error(e)
          }, t.onerror = i, i.request = e, i.subscriber = this, i.progressSubscriber = n
        }

        function s(t) {}

        function a(t) {
          var e = a,
            n = e.subscriber,
            r = e.progressSubscriber,
            o = e.request;
          if (4 === this.readyState) {
            var i = 1223 === this.status ? 204 : this.status,
              s = "text" === this.responseType ? this.response || this.responseText : this.response;
            if (0 === i && (i = s ? 200 : 0), i < 400) r && r.complete(), n.next(t), n.complete();
            else {
              r && r.error(t);
              var u = void 0;
              try {
                u = new Hr("ajax error " + i, this, o)
              } catch (t) {
                u = t
              }
              n.error(u)
            }
          }
        }
        t.onreadystatechange = s, s.subscriber = this, s.progressSubscriber = n, s.request = e, t.onload = a, a.subscriber = this, a.progressSubscriber = n, a.request = e
      }, e.prototype.unsubscribe = function() {
        var e = this.done,
          n = this.xhr;
        !e && n && 4 !== n.readyState && "function" == typeof n.abort && n.abort(), t.prototype.unsubscribe.call(this)
      }, e
    }(an),
    Dr = function() {
      return function(t, e, n) {
        this.originalEvent = t, this.xhr = e, this.request = n, this.status = e.status, this.responseType = e.responseType || n.responseType, this.response = qr(this.responseType, e)
      }
    }();

  function Fr(t, e, n) {
    return Error.call(this), this.message = t, this.name = "AjaxError", this.xhr = e, this.request = n, this.status = e.status, this.responseType = e.responseType || n.responseType, this.response = qr(this.responseType, e), this
  }
  Fr.prototype = Object.create(Error.prototype);
  var Hr = Fr;

  function qr(t, e) {
    switch (t) {
      case "json":
        return function(t) {
          return "response" in t ? t.responseType ? t.response : JSON.parse(t.response || t.responseText || "null") : JSON.parse(t.responseText || "null")
        }(e);
      case "xml":
        return e.responseXML;
      case "text":
      default:
        return "response" in e ? e.response : e.responseText
    }
  }
  var Br = function(t, e) {
      return Hr.call(this, "ajax timeout", t, e), this.name = "AjaxTimeoutError", this
    },
    Ur = Ir.create;

  function zr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return Er(1)(jn.apply(void 0, t))
  }

  function Wr() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = t[t.length - 1];
    return Cn(n) ? (t.pop(), function(e) {
      return zr(t, e, n)
    }) : function(e) {
      return zr(t, e)
    }
  }

  function Vr(t) {
    return function(e) {
      return e.lift(new Xr(t))
    }
  }
  var Xr = function() {
      function t(t) {
        this.notifier = t
      }
      return t.prototype.call = function(t, e) {
        var n = new $r(t),
          r = ur(n, this.notifier);
        return r && !n.seenValue ? (n.add(r), e.subscribe(n)) : n
      }, t
    }(),
    $r = function(t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n.seenValue = !1, n
      }
      return We(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
        this.seenValue = !0, this.complete()
      }, e.prototype.notifyComplete = function() {}, e
    }(er);

  function Gr(t, e) {
    return "function" == typeof e ? function(n) {
      return n.pipe(Gr(function(n, r) {
        return br(t(n, r)).pipe(pr(function(t, o) {
          return e(n, t, r, o)
        }))
      }))
    } : function(e) {
      return e.lift(new Yr(t))
    }
  }
  var Yr = function() {
      function t(t) {
        this.project = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Kr(t, this.project))
      }, t
    }(),
    Kr = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.project = n, r.index = 0, r
      }
      return We(e, t), e.prototype._next = function(t) {
        var e, n = this.index++;
        try {
          e = this.project(t, n)
        } catch (t) {
          return void this.destination.error(t)
        }
        this._innerSub(e, t, n)
      }, e.prototype._innerSub = function(t, e, n) {
        var r = this.innerSubscription;
        r && r.unsubscribe();
        var o = new nr(this, void 0, void 0);
        this.destination.add(o), this.innerSubscription = ur(this, t, e, n, o)
      }, e.prototype._complete = function() {
        var e = this.innerSubscription;
        e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
      }, e.prototype._unsubscribe = function() {
        this.innerSubscription = null
      }, e.prototype.notifyComplete = function(e) {
        this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        this.destination.next(e)
      }, e
    }(er);

  function Jr() {
    return function(t) {
      return t.lift(new Zr(t))
    }
  }
  var Zr = function() {
      function t(t) {
        this.connectable = t
      }
      return t.prototype.call = function(t, e) {
        var n = this.connectable;
        n._refCount++;
        var r = new Qr(t, n),
          o = e.subscribe(r);
        return r.closed || (r.connection = n.connect()), o
      }, t
    }(),
    Qr = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.connectable = n, r
      }
      return We(e, t), e.prototype._unsubscribe = function() {
        var t = this.connectable;
        if (t) {
          this.connectable = null;
          var e = t._refCount;
          if (e <= 0) this.connection = null;
          else if (t._refCount = e - 1, e > 1) this.connection = null;
          else {
            var n = this.connection,
              r = t._connection;
            this.connection = null, !r || n && r !== n || r.unsubscribe()
          }
        } else this.connection = null
      }, e
    }(an),
    to = function(t) {
      function e(e, n) {
        var r = t.call(this) || this;
        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
      }
      return We(e, t), e.prototype._subscribe = function(t) {
        return this.getSubject().subscribe(t)
      }, e.prototype.getSubject = function() {
        var t = this._subject;
        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
      }, e.prototype.connect = function() {
        var t = this._connection;
        return t || (this._isComplete = !1, (t = this._connection = new nn).add(this.source.subscribe(new no(this.getSubject(), this))), t.closed && (this._connection = null, t = nn.EMPTY)), t
      }, e.prototype.refCount = function() {
        return Jr()(this)
      }, e
    }(hn).prototype,
    eo = {
      operator: {
        value: null
      },
      _refCount: {
        value: 0,
        writable: !0
      },
      _subject: {
        value: null,
        writable: !0
      },
      _connection: {
        value: null,
        writable: !0
      },
      _subscribe: {
        value: to._subscribe
      },
      _isComplete: {
        value: to._isComplete,
        writable: !0
      },
      getSubject: {
        value: to.getSubject
      },
      connect: {
        value: to.connect
      },
      refCount: {
        value: to.refCount
      }
    },
    no = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.connectable = n, r
      }
      return We(e, t), e.prototype._error = function(e) {
        this._unsubscribe(), t.prototype._error.call(this, e)
      }, e.prototype._complete = function() {
        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
      }, e.prototype._unsubscribe = function() {
        var t = this.connectable;
        if (t) {
          this.connectable = null;
          var e = t._connection;
          t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
        }
      }, e
    }(mn);
  var ro = function() {
    function t(t, e) {
      this.subjectFactory = t, this.selector = e
    }
    return t.prototype.call = function(t, e) {
      var n = this.selector,
        r = this.subjectFactory(),
        o = n(r).subscribe(t);
      return o.add(e.subscribe(r)), o
    }, t
  }();

  function oo() {
    return new bn
  }

  function io() {
    return function(t) {
      return Jr()((e = oo, function(t) {
        var r;
        if (r = "function" == typeof e ? e : function() {
            return e
          }, "function" == typeof n) return t.lift(new ro(r, n));
        var o = Object.create(t, eo);
        return o.source = t, o.subjectFactory = r, o
      })(t));
      var e, n
    }
  }

  function so(t, e) {
    return function(n) {
      return n.lift(new ao(t, e))
    }
  }
  var ao = function() {
      function t(t, e) {
        this.predicate = t, this.thisArg = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new uo(t, this.predicate, this.thisArg))
      }, t
    }(),
    uo = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.predicate = n, o.thisArg = r, o.count = 0, o
      }
      return We(e, t), e.prototype._next = function(t) {
        var e;
        try {
          e = this.predicate.call(this.thisArg, t, this.count++)
        } catch (t) {
          return void this.destination.error(t)
        }
        e && this.destination.next(t)
      }, e
    }(an);

  function co(t, e) {
    return function(n) {
      return n.lift(new lo(t, e))
    }
  }
  var lo = function() {
      function t(t, e) {
        this.compare = t, this.keySelector = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new fo(t, this.compare, this.keySelector))
      }, t
    }(),
    fo = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.keySelector = r, o.hasKey = !1, "function" == typeof n && (o.compare = n), o
      }
      return We(e, t), e.prototype.compare = function(t, e) {
        return t === e
      }, e.prototype._next = function(t) {
        var e;
        try {
          var n = this.keySelector;
          e = n ? n(t) : t
        } catch (t) {
          return this.destination.error(t)
        }
        var r = !1;
        if (this.hasKey) try {
          r = (0, this.compare)(this.key, e)
        } catch (t) {
          return this.destination.error(t)
        } else this.hasKey = !0;
        r || (this.key = e, this.destination.next(t))
      }, e
    }(an);

  function ho(t, e, n) {
    return function(r) {
      return r.lift(new po(t, e, n))
    }
  }
  var po = function() {
      function t(t, e, n) {
        this.nextOrObserver = t, this.error = e, this.complete = n
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new yo(t, this.nextOrObserver, this.error, this.complete))
      }, t
    }(),
    yo = function(t) {
      function e(e, n, r, o) {
        var i = t.call(this, e) || this;
        return i._tapNext = ln, i._tapError = ln, i._tapComplete = ln, i._tapError = r || ln, i._tapComplete = o || ln, Ve(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || ln, i._tapError = n.error || ln, i._tapComplete = n.complete || ln), i
      }
      return We(e, t), e.prototype._next = function(t) {
        try {
          this._tapNext.call(this._context, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.next(t)
      }, e.prototype._error = function(t) {
        try {
          this._tapError.call(this._context, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.error(t)
      }, e.prototype._complete = function() {
        try {
          this._tapComplete.call(this._context)
        } catch (t) {
          return void this.destination.error(t)
        }
        return this.destination.complete()
      }, e
    }(an),
    vo = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number;

  function mo(t) {
    var e = t.protocol,
      n = t.host,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
    return e !== r.protocol || n !== r.host
  }

  function bo(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  var go = /(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;

  function _o(t) {
    return new So([{
      url: t,
      width: void 0,
      dpr: 1
    }])
  }

  function wo(t) {
    for (var e, n = []; e = go.exec(t);) {
      var r = e[1],
        o = void 0,
        i = void 0;
      if (e[2]) {
        var s = e[3].toLowerCase();
        if ("w" == s) o = parseInt(e[2], 10);
        else {
          if ("x" != s) continue;
          i = parseFloat(e[2])
        }
      } else i = 1;
      n.push({
        url: r,
        width: o,
        dpr: i
      })
    }
    return new So(n)
  }
  var So = function() {
    function t(e) {
      ! function(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
      }(this, t), this.sources_ = e;
      for (var n = !1, r = !1, o = 0; o < e.length; o++) {
        var i = e[o];
        n = n || !!i.width, r = r || !!i.dpr
      }
      e.sort(n ? Eo : xo), this.widthBased_ = n, this.dprBased_ = r
    }
    var e, n, r;
    return e = t, (n = [{
      key: "select",
      value: function(t, e) {
        var n = 0;
        return n = this.widthBased_ ? this.selectByWidth_(t * e) : this.selectByDpr_(e), this.sources_[n].url
      }
    }, {
      key: "selectByWidth_",
      value: function(t) {
        for (var e = this.sources_, n = 0, r = 1 / 0, o = 1 / 0, i = 0; i < e.length; i++) {
          var s = e[i].width,
            a = Math.abs(s - t);
          if (!(a <= 1.1 * r || t / o > 1.2)) break;
          n = i, r = a, o = s
        }
        return n
      }
    }, {
      key: "selectByDpr_",
      value: function(t) {
        for (var e = this.sources_, n = 0, r = 1 / 0, o = 0; o < e.length; o++) {
          var i = Math.abs(e[o].dpr - t);
          if (!(i <= r)) break;
          n = o, r = i
        }
        return n
      }
    }, {
      key: "getUrls",
      value: function() {
        return this.sources_.map(function(t) {
          return t.url
        })
      }
    }, {
      key: "stringify",
      value: function(t) {
        for (var e = [], n = this.sources_, r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.url;
          t && (i = t(i)), this.widthBased_ ? i += " ".concat(o.width, "w") : i += " ".concat(o.dpr, "x"), e.push(i)
        }
        return e.join(", ")
      }
    }]) && bo(e.prototype, n), r && bo(e, r), t
  }();

  function Eo(t, e) {
    return t.width - e.width
  }

  function xo(t, e) {
    return t.dpr - e.dpr
  }

  function Oo(t) {
    return (Oo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function To(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function Co(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function No(t, e) {
    return !e || "object" !== Oo(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function ko(t, e, n) {
    return (ko = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
      var r = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Ao(t)););
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function Ao(t) {
    return (Ao = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Mo(t, e) {
    return (Mo = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var jo = new de([].concat(function(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }(Oe), ["eventlistener", "queryselector", "requestanimationframe"])),
    Po = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), No(this, Ao(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && Mo(t, e)
        }(n, Xn(Ae(t))), r = n, i = [{
          key: "componentName",
          get: function() {
            return "hy-img"
          }
        }, {
          key: "defaults",
          get: function() {
            return {
              root: null,
              rootMargin: "0px",
              src: null,
              srcset: null,
              width: null,
              height: null,
              dataWidth: null,
              dataHeight: null,
              alt: null,
              decoding: null,
              longdesc: null,
              ismap: !1,
              usemap: null
            }
          }
        }, {
          key: "types",
          get: function() {
            return {
              root: tr,
              rootMargin: tr,
              src: tr,
              srcset: tr,
              width: Jn,
              height: Jn,
              dataWidth: Jn,
              dataHeight: Jn,
              alt: tr,
              decoding: Zn(["sync", "async", "auto"]),
              longdesc: tr,
              ismap: Kn,
              usemap: tr
            }
          }
        }], (o = [{
          key: "setupComponent",
          value: function(t, e) {
            ko(Ao(n.prototype), "setupComponent", this).call(this, t, e), this.loadImage$ = new bn
          }
        }, {
          key: "connectComponent",
          value: function() {
            var t = this;
            ko(Ao(n.prototype), "connectComponent", this).call(this), this.img = document.createElement("img"), this.sizer = document.createElement("div"), this.loading = this.el.querySelector('[slot="loading"]'), this.loading && this.sizer.appendChild(this.loading), vo ? this.img.attributeStyleMap.set("display", "block") : this.img.style.display = "block", this.el.appendChild(this.sizer);
            var e = {
              contentRect: this.el.getBoundingClientRect()
            };
            this.resize$ = "ResizeObserver" in window ? $n(ResizeObserver)(this.el).pipe(Wr(e)) : jn(e);
            var r = function(t, e) {
                return t || e
              },
              o = lr(this.subjects.width, this.subjects.dataWidth, r),
              i = lr(this.subjects.height, this.subjects.dataHeight, r),
              s = lr(this.resize$, o, i),
              a = lr(this.subjects.root, this.subjects.rootMargin).pipe(Vr(this.subjects.disconnect), Gr(function(e) {
                var n = To(e, 2),
                  r = n[0],
                  o = n[1];
                return "IntersectionObserver" in window ? $n(IntersectionObserver)(t.el, {
                  root: r,
                  rootMargin: o
                }) : jn({
                  isIntersecting: !0
                })
              }), pr(function(t) {
                return t.isIntersecting
              }));
            this.trigger$ = xr(a, this.loadImage$).pipe(io()), s.pipe(Vr(this.subjects.disconnect)).subscribe(this.updateSizerStyle.bind(this)), this.trigger$.pipe(so(function(t) {
              return t
            }), co()).subscribe(this.triggered.bind(this)), this.fireEvent("init")
          }
        }, {
          key: "triggered",
          value: function() {
            var t, e, n = this,
              r = (this.cache = new Map, lr(this.subjects.src, this.subjects.srcset).pipe(so(function(t) {
                var e = To(t, 2),
                  n = e[0],
                  r = e[1];
                return null != n || null != r
              }), co(function(t, e) {
                var n = To(t, 2),
                  r = n[0],
                  o = n[1],
                  i = To(e, 2),
                  s = i[0],
                  a = i[1];
                return r === s && o === a
              }), pr(function(t) {
                var e = To(t, 2),
                  n = e[0],
                  r = e[1];
                return r ? wo(r) : _o(n)
              }))),
              o = lr(this.resize$, r).pipe(pr(this.selectImgURL.bind(this)), (t = "href", co(function(n, r) {
                return e ? e(n[t], r[t]) : n[t] === r[t]
              })));
            lr(o, this.trigger$.pipe(co(), Wr(!0))).pipe(Vr(this.subjects.disconnect), ho(function() {
              return n.loading && n.loading.removeAttribute("hidden")
            }), Gr(this.makeRequest.bind(this)), Gr(this.setImgSrcAndLoad.bind(this))).subscribe(function() {
              null != n.sizer.parentNode && n.el.removeChild(n.sizer), null == n.img.parentNode && n.el.appendChild(n.img), n.fireEvent("load")
            }, function(t) {
              n.loadImageFallback()
            }), this.updateAttr = this.updateAttr.bind(this), this.subjects.alt.subscribe(this.updateAttr("alt")), this.subjects.decoding.subscribe(this.updateAttr("decoding")), this.subjects.longdesc.subscribe(this.updateAttr("longdesc")), this.subjects.ismap.subscribe(this.updateAttr("ismap")), this.subjects.usemap.subscribe(this.updateAttr("usemap"))
          }
        }, {
          key: "selectImgURL",
          value: function(t) {
            var e = To(t, 2),
              n = e[0],
              r = e[1],
              o = n.contentRect.width;
            return new URL(r.select(o || window.screen.width, window.devicePixelRatio || 1), window.location)
          }
        }, {
          key: "makeRequest",
          value: function(t) {
            var e = To(t, 2),
              n = e[0],
              r = e[1],
              o = n.href,
              i = this.cache;
            return r && !i.has(o) ? Ur({
              method: "GET",
              responseType: "blob",
              url: n,
              crossDomain: mo(n),
              headers: {
                Accept: "image/*"
              }
            }).pipe(pr(function(t) {
              var e = t.response;
              return URL.createObjectURL(e)
            }), ho(function(t) {
              return i.set(o, t)
            })) : i.has(o) ? jn(i.get(o)) : Or
          }
        }, {
          key: "setImgSrcAndLoad",
          value: function(t) {
            var e = Tr(this.img, "load");
            return this.img.src = t, e
          }
        }, {
          key: "updateAttr",
          value: function(t) {
            var e = this;
            return function(n) {
              return null == n || !1 === n ? e.img.removeAttribute(t) : e.img.setAttribute(t, !0 === n ? "" : n)
            }
          }
        }, {
          key: "loadImageFallback",
          value: function() {
            this.el.hasAttribute("sizes") && this.img.setAttribute("sizes", this.getAttribute("sizes")), this.el.hasAttribute("crossorigin") && this.img.setAttribute("crossorigin", this.getAttribute("crossorigin")), this.el.hasAttribute("referrerpolicy") && this.img.setAttribute("referrerpolicy", this.getAttribute("referrerpolicy")), this.srcset && (this.img.srcset = this.srcset), this.src && (this.img.src = this.src), null != this.sizer.parentNode && this.el.removeChild(this.sizer), null == this.img.parentNode && this.el.appendChild(this.img), this.fireEvent("load")
          }
        }, {
          key: "updateSizerStyle",
          value: function(t) {
            var e = To(t, 3),
              n = e[0],
              r = e[1],
              o = e[2],
              i = n.contentRect.width;
            vo ? (this.sizer.attributeStyleMap.set("position", "relative"), null != r && null != o ? r >= i ? (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("padding-top", CSS.percent(o / r * 100))) : (this.sizer.attributeStyleMap.set("width", CSS.px(r)), this.sizer.attributeStyleMap.set("height", CSS.px(o))) : (this.sizer.attributeStyleMap.set("width", CSS.percent(100)), this.sizer.attributeStyleMap.set("height", CSS.percent(100)))) : (this.sizer.style.position = "relative", null != r && null != o ? r >= i ? (this.sizer.style.width = "100%", this.sizer.style.paddingTop = "".concat(o / r * 100, "%")) : (this.sizer.style.width = "".concat(r, "px"), this.sizer.style.height = "".concat(o, "px")) : (this.sizer.style.width = "100%", this.sizer.style.height = "100%"))
          }
        }, {
          key: "disconnectComponent",
          value: function() {
            ko(Ao(n.prototype), "disconnectComponent", this).call(this), this.cache && this.cache.forEach(function(t) {
              URL.revokeObjectURL(t)
            })
          }
        }, {
          key: "loadImage",
          value: function() {
            this.loadImage$.next(!0)
          }
        }]) && Co(r.prototype, o), i && Co(r, i), n
      }()
    };

  function Ro(t) {
    return (Ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Io(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Lo(t, e) {
    return !e || "object" !== Ro(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Do(t) {
    return (Do = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Fo(t, e) {
    return (Fo = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function Ho(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var qo = new de([].concat(Ho(He), Ho(jo))),
    Bo = function(t) {
      function e() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), Lo(this, Do(e).apply(this, arguments))
      }
      var n, r, o;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Fo(t, e)
      }(e, Be(Po(Ue))), n = e, o = [{
        key: "observedAttributes",
        get: function() {
          return this.getObservedAttributes()
        }
      }], (r = [{
        key: "getTemplate",
        value: function() {
          return null
        }
      }]) && Io(n.prototype, r), o && Io(n, o), e
    }();

  function Uo(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var zo = navigator.userAgent.toLowerCase(),
    Wo = zo.indexOf("safari") > 0 && zo.indexOf("chrome") < 0,
    Vo = zo.indexOf("mobile") > 0,
    Xo = Wo && Vo,
    $o = zo.indexOf("ucbrowser") > 0,
    Go = zo.indexOf("firefox") > 0,
    Yo = zo.indexOf("fxios") > 0 && zo.indexOf("safari") > 0,
    Ko = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number,
    Jo = new Promise(function(t) {
      window.webComponentsReady ? t(!0) : document.addEventListener("WebComponentsReady", t)
    });

  function Zo(t) {
    return !window.Modernizr || Uo(t).every(function(t) {
      var e = window.Modernizr[t];
      return e
    })
  }

  function Qo() {
    for (; this.firstChild;) this.removeChild(this.firstChild)
  }

  function ti(t, e, n) {
    return hn.create(function(r) {
      var o = t.animate(e, n);
      return o.addEventListener("finish", function(t) {
          return r.next(t), requestAnimationFrame(function() {
            return requestAnimationFrame(r.complete.bind(r))
          })
        }),
        function() {
          "finished" !== o.playState && o.cancel()
        }
    })
  }

  function ei(t) {
    var e = document.getElementById(t);
    return e && document.importNode(e.content, !0)
  }

  function ni(t) {
    return new hn(function(e) {
      var n;
      try {
        n = t()
      } catch (t) {
        return void e.error(t)
      }
      return (n ? br(n) : Tn()).subscribe(e)
    })
  }
  Zo(qo) ? window.customElements.define("hy-img", Bo) : Array.prototype.forEach.call(document.getElementsByTagName("hy-img"), function(t) {
    return t.innerHTML = t.children[0].innerText
  });
  var ri = function(t) {
      function e(e, n) {
        var r = t.call(this, e, n) || this;
        return r.scheduler = e, r.work = n, r
      }
      return We(e, t), e.prototype.requestAsyncId = function(e, n, r) {
        return void 0 === r && (r = 0), null !== r && r > 0 ? t.prototype.requestAsyncId.call(this, e, n, r) : (e.actions.push(this), e.scheduled || (e.scheduled = requestAnimationFrame(function() {
          return e.flush(null)
        })))
      }, e.prototype.recycleAsyncId = function(e, n, r) {
        if (void 0 === r && (r = 0), null !== r && r > 0 || null === r && this.delay > 0) return t.prototype.recycleAsyncId.call(this, e, n, r);
        0 === e.actions.length && (cancelAnimationFrame(n), e.scheduled = void 0)
      }, e
    }(_n),
    oi = new(function(t) {
      function e() {
        return null !== t && t.apply(this, arguments) || this
      }
      return We(e, t), e.prototype.flush = function(t) {
        this.active = !0, this.scheduled = void 0;
        var e, n = this.actions,
          r = -1,
          o = n.length;
        t = t || n.shift();
        do {
          if (e = t.execute(t.state, t.delay)) break
        } while (++r < o && (t = n.shift()));
        if (this.active = !1, e) {
          for (; ++r < o && (t = n.shift());) t.unsubscribe();
          throw e
        }
      }, e
    }(En))(ri);

  function ii() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return function(e) {
      var n;
      "function" == typeof t[t.length - 1] && (n = t.pop());
      var r = t;
      return e.lift(new si(r, n))
    }
  }
  var si = function() {
      function t(t, e) {
        this.observables = t, this.project = e
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new ai(t, this.observables, this.project))
      }, t
    }(),
    ai = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        o.observables = n, o.project = r, o.toRespond = [];
        var i = n.length;
        o.values = new Array(i);
        for (var s = 0; s < i; s++) o.toRespond.push(s);
        for (s = 0; s < i; s++) {
          var a = n[s];
          o.add(ur(o, a, a, s))
        }
        return o
      }
      return We(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
        this.values[n] = e;
        var i = this.toRespond;
        if (i.length > 0) {
          var s = i.indexOf(n); - 1 !== s && i.splice(s, 1)
        }
      }, e.prototype.notifyComplete = function() {}, e.prototype._next = function(t) {
        if (0 === this.toRespond.length) {
          var e = [t].concat(this.values);
          this.project ? this._tryProject(e) : this.destination.next(e)
        }
      }, e.prototype._tryProject = function(t) {
        var e;
        try {
          e = this.project.apply(this, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.next(e)
      }, e
    }(er);
  var ui = function() {
      function t(t) {
        this.notifier = t
      }
      return t.prototype.call = function(t, e) {
        var n = new ci(t),
          r = e.subscribe(n);
        return r.add(ur(n, this.notifier)), r
      }, t
    }(),
    ci = function(t) {
      function e() {
        var e = null !== t && t.apply(this, arguments) || this;
        return e.hasValue = !1, e
      }
      return We(e, t), e.prototype._next = function(t) {
        this.value = t, this.hasValue = !0
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        this.emitValue()
      }, e.prototype.notifyComplete = function() {
        this.emitValue()
      }, e.prototype.emitValue = function() {
        this.hasValue && (this.hasValue = !1, this.destination.next(this.value))
      }, e
    }(er),
    li = new En(_n);
  var fi = function() {
    return function(t, e) {
      this.value = t, this.timestamp = e
    }
  }();

  function hi() {
    return function(t) {
      return t.lift(new pi)
    }
  }
  var pi = function() {
      function t() {}
      return t.prototype.call = function(t, e) {
        return e.subscribe(new di(t))
      }, t
    }(),
    di = function(t) {
      function e(e) {
        var n = t.call(this, e) || this;
        return n.hasPrev = !1, n
      }
      return We(e, t), e.prototype._next = function(t) {
        var e;
        this.hasPrev ? e = [this.prev, t] : this.hasPrev = !0, this.prev = t, e && this.destination.next(e)
      }, e
    }(an);

  function yi(t) {
    return function(e) {
      return e.lift(new vi(t))
    }
  }
  var vi = function() {
      function t(t) {
        this.total = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new mi(t, this.total))
      }, t
    }(),
    mi = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.total = n, r.count = 0, r
      }
      return We(e, t), e.prototype._next = function(t) {
        ++this.count > this.total && this.destination.next(t)
      }, e
    }(an);

  function bi(t, e, n, r, o) {
    return hn.create(function(i) {
      var s, a = requestAnimationFrame(function u(c) {
        var l = c - (s = s || c);
        l < r ? (i.next(t(l, e, n, r, o)), a = requestAnimationFrame(u)) : (i.next(t(r, e, n, r, o)), a = requestAnimationFrame(function() {
          return i.complete()
        }))
      });
      return function() {
        a && cancelAnimationFrame(a)
      }
    })
  }

  function gi(t, e, n, r) {
    return n * Math.sin(t / r * (Math.PI / 2)) + e
  }

  function _i(t) {
    return Ei(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || Si()
  }

  function wi(t, e) {
    return Ei(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || Si()
  }

  function Si() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }

  function Ei(t) {
    if (Array.isArray(t)) return t
  }
  var xi = function(t) {
    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
    return function(e) {
      return 0 === n.length ? e.pipe(ii(t), so(function(t) {
        return wi(t, 2)[1]
      }), pr(function(t) {
        return wi(t, 1)[0]
      })) : e.pipe(ii.apply(void 0, [t].concat(n)), so(function(t) {
        return _i(t).slice(1).every(function(t) {
          return t
        })
      }), pr(function(t) {
        return wi(t, 1)[0]
      }))
    }
  };

  function Oi(t) {
    return (Oi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Ti(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function Ci(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Ni(t, e) {
    return !e || "object" !== Oi(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function ki(t) {
    return (ki = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ai(t, e) {
    return (Ai = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Mi = Math.min.bind(Math),
    ji = Math.max.bind(Math),
    Pi = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), Ni(this, ki(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && Ai(t, e)
        }(n, t), r = n, (o = [{
          key: "calcIsInRange",
          value: function(t, e) {
            switch (this.align) {
              case "left":
                var n = this.range[0],
                  r = this.range[1];
                return t > n && (e || t < r);
              case "right":
                var o = window.innerWidth - this.range[0],
                  i = window.innerWidth - this.range[1];
                return t < o && (e || t > i);
              default:
                throw Error()
            }
          }
        }, {
          key: "calcIsSwipe",
          value: function(t) {
            var e = Ti(t, 4),
              n = e[0].clientX,
              r = e[1].clientX,
              o = e[2],
              i = e[3];
            return n !== r || o > 0 && o < i
          }
        }, {
          key: "calcWillOpen",
          value: function(t) {
            var e = Ti(t, 5),
              n = e[2],
              r = e[3],
              o = e[4];
            switch (this.align) {
              case "left":
                return o > .15 || !(o < -.15) && n >= r / 2;
              case "right":
                return -o > .15 || !(-o < -.15) && n <= -r / 2;
              default:
                throw Error()
            }
          }
        }, {
          key: "calcTranslateX",
          value: function(t, e, n, r) {
            switch (this.align) {
              case "left":
                return ji(0, Mi(r, n + (t - e)));
              case "right":
                return Mi(0, ji(-r, n + (t - e)));
              default:
                throw Error()
            }
          }
        }]) && Ci(r.prototype, o), i && Ci(r, i), n
      }()
    };

  function Ri(t) {
    return (Ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Ii(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Li(t, e) {
    return !e || "object" !== Ri(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Di(t) {
    return (Di = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Fi(t, e) {
    return (Fi = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Hi = "attributeStyleMap" in Element.prototype && "CSS" in window && CSS.number,
    qi = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), Li(this, Di(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && Fi(t, e)
        }(n, t), r = n, (o = [{
          key: "histId",
          value: function() {
            return this.el.id || this.constructor.componentName
          }
        }, {
          key: "prepareInteraction",
          value: function() {
            Hi ? (this.contentEl.attributeStyleMap.set("will-change", "transform"), this.scrimEl.attributeStyleMap.set("will-change", "opacity")) : (this.contentEl.style.willChange = "transform", this.scrimEl.style.willChange = "opacity"), this.fireEvent("prepare")
          }
        }, {
          key: "cleanupInteraction",
          value: function(t) {
            Hi ? (this.contentEl.attributeStyleMap.delete("will-change"), this.scrimEl.attributeStyleMap.delete("will-change"), t ? this.scrimEl.attributeStyleMap.set("pointer-events", new CSSKeywordValue("all")) : this.scrimEl.attributeStyleMap.delete("pointer-events")) : (this.scrimEl.style.willChange = "", this.contentEl.style.willChange = "", this.scrimEl.style.pointerEvents = t ? "all" : ""), this.fireEvent("transitioned", {
              detail: t
            })
          }
        }, {
          key: "updateDOM",
          value: function(t, e) {
            this.translateX = t;
            var n = "left" === this.align ? 1 : -1,
              r = this.opacity = t / e * n;
            this.moveCallback && this.moveCallback({
              translateX: t,
              opacity: r
            }), Hi ? (this.contentEl.attributeStyleMap.set("transform", new CSSTransformValue([new CSSTranslate(CSS.px(t), CSS.px(0))])), this.scrimEl.attributeStyleMap.set("opacity", this.opacity)) : (this.contentEl.style.transform = "translateX(".concat(t, "px)"), this.scrimEl.style.opacity = this.opacity)
          }
        }]) && Ii(r.prototype, o), i && Ii(r, i), n
      }()
    };

  function Bi(t) {
    return function(e) {
      return e.lift(new Ui(t))
    }
  }
  var Ui = function() {
      function t(t) {
        this.value = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new zi(t, this.value))
      }, t
    }(),
    zi = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.value = n, r
      }
      return We(e, t), e.prototype._next = function(t) {
        this.destination.next(this.value)
      }, e
    }(an);

  function Wi() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
  }
  Wi.prototype = Object.create(Error.prototype);
  var Vi = Wi;

  function Xi(t) {
    return function(e) {
      return 0 === t ? Tn() : e.lift(new $i(t))
    }
  }
  var $i = function() {
      function t(t) {
        if (this.total = t, this.total < 0) throw new Vi
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Gi(t, this.total))
      }, t
    }(),
    Gi = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.total = n, r.count = 0, r
      }
      return We(e, t), e.prototype._next = function(t) {
        var e = this.total,
          n = ++this.count;
        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
      }, e
    }(an);
  var Yi = function() {
      function t(t) {
        this.notifier = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Ki(t, this.notifier, e))
      }, t
    }(),
    Ki = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.notifier = n, o.source = r, o.sourceIsBeingSubscribedTo = !0, o
      }
      return We(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
        this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this)
      }, e.prototype.notifyComplete = function(e) {
        if (!1 === this.sourceIsBeingSubscribedTo) return t.prototype.complete.call(this)
      }, e.prototype.complete = function() {
        if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
          if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed) return t.prototype.complete.call(this);
          this._unsubscribeAndRecycle(), this.notifications.next()
        }
      }, e.prototype._unsubscribe = function() {
        var t = this.notifications,
          e = this.retriesSubscription;
        t && (t.unsubscribe(), this.notifications = null), e && (e.unsubscribe(), this.retriesSubscription = null), this.retries = null
      }, e.prototype._unsubscribeAndRecycle = function() {
        var e = this._unsubscribe;
        return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = e, this
      }, e.prototype.subscribeToRetries = function() {
        var e;
        this.notifications = new bn;
        try {
          e = (0, this.notifier)(this.notifications)
        } catch (e) {
          return t.prototype.complete.call(this)
        }
        this.retries = e, this.retriesSubscription = ur(this, e)
      }, e
    }(er);
  var Ji = function() {
      function t(t) {
        this.predicate = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Zi(t, this.predicate))
      }, t
    }(),
    Zi = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.predicate = n, r.skipping = !0, r.index = 0, r
      }
      return We(e, t), e.prototype._next = function(t) {
        var e = this.destination;
        this.skipping && this.tryCallPredicate(t), this.skipping || e.next(t)
      }, e.prototype.tryCallPredicate = function(t) {
        try {
          var e = this.predicate(t, this.index++);
          this.skipping = Boolean(e)
        } catch (t) {
          this.destination.error(t)
        }
      }, e
    }(an);

  function Qi(t) {
    return (Qi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function ts(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function es(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function ns(t, e) {
    return !e || "object" !== Qi(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function rs(t) {
    return (rs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function os(t, e) {
    return (os = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var is = Math.abs.bind(Math),
    ss = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), ns(this, rs(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && os(t, e)
        }(n, t), r = n, (o = [{
          key: "getStartObservable",
          value: function() {
            return lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(Gr(function(t) {
              var e = ts(t, 3),
                n = e[0],
                r = e[1],
                o = e[2];
              return xr(r ? Tr(n, "touchstart", {
                passive: !0
              }).pipe(so(function(t) {
                return 1 === t.touches.length
              }), pr(function(t) {
                return t.touches[0]
              })) : Or, o ? Tr(n, "mousedown").pipe(ho(function(t) {
                return t.event = t, t
              })) : Or)
            }))
          }
        }, {
          key: "getMoveObservable",
          value: function(t, e) {
            return lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents, this.subjects.preventDefault).pipe(Gr(function(n) {
              var r, o = ts(n, 4),
                i = o[0],
                s = o[1],
                a = o[2],
                u = o[3],
                c = s ? Tr(i, "touchmove", {
                  passive: !u
                }).pipe(pr(function(t) {
                  return t.touches[0].event = t, t.touches[0]
                })) : Or,
                l = a ? Tr(i, "mousemove", {
                  passive: !u
                }).pipe((r = xr(t.pipe(Bi(!0)), e.pipe(Bi(!1))), function(t) {
                  return r.pipe(Gr(function(e) {
                    return e ? t : Or
                  }))
                }), ho(function(t) {
                  return t.event = t, t
                })) : Or;
              return xr(c, l)
            }))
          }
        }, {
          key: "getEndObservable",
          value: function() {
            return lr(this.subjects.document, this.subjects.touchEvents, this.subjects.mouseEvents).pipe(Gr(function(t) {
              var e = ts(t, 3),
                n = e[0],
                r = e[1],
                o = e[2];
              return xr(r ? Tr(n, "touchend", {
                passive: !0
              }).pipe(so(function(t) {
                return 0 === t.touches.length
              }), pr(function(t) {
                return t.changedTouches[0]
              })) : Or, o ? Tr(n, "mouseup", {
                passive: !0
              }) : Or)
            }))
          }
        }, {
          key: "getIsSlidingObservable",
          value: function(t, e, n) {
            return this.getIsSlidingObservable2(t, e).pipe(Xi(1), Wr(void 0), (r = function() {
              return n
            }, function(t) {
              return t.lift(new Yi(r))
            }));
            var r
          }
        }, {
          key: "getIsSlidingObservable2",
          value: function(t, e) {
            var n, r = this;
            return this.threshold ? t.pipe(ii(e), (n = function(t) {
              var e = ts(t, 2),
                n = e[0],
                o = n.clientX,
                i = n.clientY,
                s = e[1],
                a = s.clientX,
                u = s.clientY;
              return is(u - i) < r.threshold && is(a - o) < r.threshold
            }, function(t) {
              return t.lift(new Ji(n))
            }), pr(function(t) {
              var e = ts(t, 2),
                n = e[0],
                r = n.clientX,
                o = n.clientY,
                i = e[1],
                s = i.clientX,
                a = i.clientY;
              return is(s - r) >= is(a - o)
            })) : t.pipe(ii(e), pr(function(t) {
              var e = ts(t, 2),
                n = e[0],
                o = n.clientX,
                i = n.clientY,
                s = n.event,
                a = e[1],
                u = a.clientX,
                c = a.clientY,
                l = is(u - o) >= is(c - i);
              return r.preventDefault && l && s.preventDefault(), l
            }))
          }
        }]) && es(r.prototype, o), i && es(r, i), n
      }()
    };

  function as(t) {
    return (as = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function us(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function cs(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function ls(t, e) {
    return !e || "object" !== as(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function fs(t) {
    return (fs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function hs(t, e) {
    return (hs = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var ps = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), ls(this, fs(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && hs(t, e)
      }(n, ss(qi(Pi(t)))), r = n, (o = [{
        key: "setupObservables",
        value: function() {
          var t = this,
            e = {
              contentRect: this.contentEl.getBoundingClientRect()
            },
            n = ("ResizeObserver" in window ? $n(ResizeObserver)(this.contentEl).pipe(Wr(e)) : jn(e)).pipe(Vr(this.subjects.disconnect), pr(function(t) {
              return t.contentRect.width
            }), io(), Wr(e.contentRect.width));
          this._peek$ && (n = lr(n, this._peek$).pipe(pr(function(t) {
            var e = us(t, 2);
            return e[0] - e[1]
          })));
          var r, o = this.subjects.persistent.pipe(pr(function(t) {
              return !t
            })),
            i = this.getStartObservable().pipe(Vr(this.subjects.disconnect), xi(o), io()),
            s = ni(function() {
              return t.translateX$.pipe(pr(function(t) {
                return 0 != t
              }))
            }),
            a = i.pipe(ii(s), pr(function(e) {
              var n = us(e, 2),
                r = n[0].clientX,
                o = n[1];
              return t.calcIsInRange(r, o)
            }), ho(function(e) {
              e && (t.mouseEvents && t.contentEl.classList.add("hy-drawer-grabbing"), t.prepareInteraction())
            }), io()),
            u = this.getEndObservable().pipe(Vr(this.subjects.disconnect), xi(o, a), io()),
            c = this.getMoveObservable(i, u).pipe(Vr(this.subjects.disconnect), xi(o, a), io()),
            l = this.getIsSlidingObservable(c, i, u).pipe(ho(function(e) {
              e && t.fireEvent("slidestart", {
                detail: t.opened
              })
            }));
          this.translateX$ = ni(function() {
            return xr(t.tween$, c.pipe(xi(l), ho(function(e) {
              var n = e.event;
              return t.preventDefault && n.preventDefault()
            }), ii(i, t.startTranslateX$, n), (e = oi, void 0 === r && (r = 0), function(t) {
              return t.lift(new In(e, r))
            }), pr(function(e) {
              var n = us(e, 4),
                r = n[0].clientX,
                o = n[1].clientX,
                i = n[2],
                s = n[3];
              return t.calcTranslateX(r, o, i, s)
            })), lr(t.subjects.opened, t.subjects.align, n).pipe(ho(function(e) {
              var n = us(e, 1)[0];
              return t.cleanupInteraction(n)
            }), pr(function(t) {
              var e = us(t, 3),
                n = e[0],
                r = e[1],
                o = e[2];
              return n ? o * ("left" === r ? 1 : -1) : 0
            })));
            var e, r
          }).pipe(Vr(this.subjects.disconnect), io()), this.startTranslateX$ = this.translateX$.pipe((r = i, function(t) {
            return t.lift(new ui(r))
          }));
          var f, h = this.translateX$.pipe((void 0 === f && (f = li), pr(function(t) {
              return new fi(t, f.now())
            })), hi(), so(function(t) {
              var e = us(t, 2),
                n = e[0].timestamp;
              return e[1].timestamp - n > 0
            }), pr(function(t) {
              var e = us(t, 2),
                n = e[0],
                r = n.value,
                o = n.timestamp,
                i = e[1];
              return (i.value - r) / (i.timestamp - o)
            }), Wr(0)),
            p = xr(u.pipe(ho(function() {
              return t.contentEl.classList.remove("hy-drawer-grabbing")
            }), ii(i, this.translateX$, n, h), so(this.calcIsSwipe.bind(this)), pr(this.calcWillOpen.bind(this)), ho(function(e) {
              return t.fireEvent("slideend", {
                detail: e
              })
            })), this.animateTo$.pipe(ho(this.prepareInteraction.bind(this))));
          this.tween$ = p.pipe(ho(function(e) {
            return t.setInternalState("opened", e)
          }), ii(this.translateX$, n), Gr(function(e) {
            var n = us(e, 3),
              r = n[0],
              o = n[1],
              s = n[2],
              a = "left" === t.align ? 1 : -1;
            return bi(gi, o, (r ? s * a : 0) - o, 200 + .15 * s).pipe(ho({
              complete: function() {
                return t.subjects.opened.next(r)
              }
            }), Vr(i), Vr(t.subjects.align.pipe(yi(1))), io())
          })), this.translateX$.pipe(ii(n)).subscribe(function(e) {
            var n = us(e, 2),
              r = n[0],
              o = n[1];
            return t.updateDOM(r, o)
          }), Tr(this.scrimEl, "click").pipe(Vr(this.subjects.disconnect)).subscribe(function() {
            return t.close()
          }), o.pipe(Vr(this.subjects.disconnect)).subscribe(function(e) {
            t.scrimEl.style.display = e ? "block" : "none"
          }), this.subjects.align.pipe(Vr(this.subjects.disconnect)).subscribe(function(e) {
            t.contentEl.classList.remove("hy-drawer-left"), t.contentEl.classList.remove("hy-drawer-right"), t.contentEl.classList.add("hy-drawer-".concat(e))
          }), this.subjects.mouseEvents.pipe(Vr(this.subjects.disconnect), Gr(function(e) {
            return e ? t.contentEl.classList.add("hy-drawer-grab") : t.contentEl.classList.remove("hy-drawer-grab"), e ? i.pipe(ii(a)) : Or
          })).subscribe(function(t) {
            var e = us(t, 2),
              n = e[0].event;
            return e[1] && n && n.preventDefault()
          }), this.fireEvent("init", {
            detail: this.opened
          })
        }
      }]) && cs(r.prototype, o), i && cs(r, i), n
    }()
  };

  function ds(t) {
    return (ds = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function ys(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function vs(t, e) {
    return !e || "object" !== ds(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function ms(t, e, n) {
    return (ms = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
      var r = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = bs(t)););
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function bs(t) {
    return (bs = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function gs(t, e) {
    return (gs = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var _s = new de([].concat(function(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }(Oe), ["eventlistener", "queryselector", "requestanimationframe", "classlist", "opacity", "csstransforms", "csspointerevents"])),
    ws = function(t) {
      return function(e) {
        function n() {
          return function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
          }(this, n), vs(this, bs(n).apply(this, arguments))
        }
        var r, o, i;
        return function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), e && gs(t, e)
        }(n, ps(Xn(Ae(t)))), r = n, i = [{
          key: "componentName",
          get: function() {
            return "hy-drawer"
          }
        }, {
          key: "types",
          get: function() {
            return {
              opened: Kn,
              align: Zn(["left", "right"]),
              persistent: Kn,
              range: Yn(Jn),
              threshold: Jn,
              preventDefault: Kn,
              touchEvents: Kn,
              mouseEvents: Kn
            }
          }
        }, {
          key: "defaults",
          get: function() {
            return {
              opened: !1,
              align: "left",
              persistent: !1,
              range: [0, 100],
              threshold: 10,
              preventDefault: !1,
              touchEvents: !1,
              mouseEvents: !1
            }
          }
        }], (o = [{
          key: "setupComponent",
          value: function(t, e) {
            ms(bs(n.prototype), "setupComponent", this).call(this, t, e), this.animateTo$ = new bn, this.scrimEl = this.sroot.querySelector(".hy-drawer-scrim"), this.contentEl = this.sroot.querySelector(".hy-drawer-content"), this.contentEl.classList.add("hy-drawer-".concat(this.align))
          }
        }, {
          key: "connectComponent",
          value: function() {
            this.setupObservables(), ms(bs(n.prototype), "connectComponent", this).call(this)
          }
        }, {
          key: "open",
          value: function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t ? this.animateTo$.next(!0) : this.opened = !0
          }
        }, {
          key: "close",
          value: function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t ? this.animateTo$.next(!1) : this.opened = !1
          }
        }, {
          key: "toggle",
          value: function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t ? this.animateTo$.next(!this.opened) : this.opened = !this.opened
          }
        }]) && ys(r.prototype, o), i && ys(r, i), n
      }()
    };

  function Ss(t) {
    return (Ss = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Es(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function xs(t, e) {
    return !e || "object" !== Ss(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Os(t) {
    return (Os = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ts(t, e) {
    return (Ts = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function Cs(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Ns = new de([].concat(Cs(He), Cs(_s))),
    ks = function(t) {
      function e() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), xs(this, Os(e).apply(this, arguments))
      }
      var n, r, o;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ts(t, e)
      }(e, Be(ws(Ue))), n = e, o = [{
        key: "observedAttributes",
        get: function() {
          return this.getObservedAttributes()
        }
      }], (r = [{
        key: "getTemplate",
        value: function() {
          return t = '<div class="hy-drawer-scrim"></div> <div class="hy-drawer-content"> <slot></slot> </div> <style> @media screen { .hy-drawer-scrim { position: fixed; top: 0; left: 0; height: 100vh; width: 100vw; opacity: 0; pointer-events: none; transform: translateX(0); -webkit-tap-highlight-color: transparent; @apply --hy-drawer-scrim-container; background: rgba(0, 0, 0, 0.5); background: var(--hy-drawer-scrim-background, rgba(0, 0, 0, 0.5)); z-index: 20; z-index: var(--hy-drawer-scrim-z-index, 20); } .hy-drawer-content { position: fixed; top: 0; height: 100vh; overflow-x: hidden; overflow-y: auto; transform: translateX(0); contain: strict; -webkit-overflow-scrolling: touch; @apply --hy-drawer-content-container; width: 300px; width: var(--hy-drawer-width, 300px); background: #e8e8e8; background: var(--hy-drawer-background, #e8e8e8); box-shadow: 0 0 15px rgba(0, 0, 0, 0.25); box-shadow: var(--hy-drawer-box-shadow, 0 0 15px rgba(0, 0, 0, 0.25)); z-index: 30; z-index: var(--hy-drawer-z-index, 30); } .hy-drawer-content.hy-drawer-left { left: -300px; left: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-content.hy-drawer-right { right: -300px; right: calc( -1 * var(--hy-drawer-slide-width, var(--hy-drawer-width, 300px))); } .hy-drawer-grab { cursor: move; cursor: -webkit-grab; cursor: -moz-grab; cursor: grab; } .hy-drawer-grabbing { cursor: -webkit-grabbing; cursor: -moz-grabbing; cursor: grabbing; } } @media print { .hy-drawer-scrim { display: none !important; } .hy-drawer-content { transform: none !important; } } </style>', document.createRange().createContextualFragment(t);
          var t
        }
      }]) && Es(n.prototype, r), o && Es(n, o), e
    }(),
    As = {
      leading: !0,
      trailing: !1
    };
  var Ms = function() {
      function t(t, e, n, r) {
        this.duration = t, this.scheduler = e, this.leading = n, this.trailing = r
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new js(t, this.duration, this.scheduler, this.leading, this.trailing))
      }, t
    }(),
    js = function(t) {
      function e(e, n, r, o, i) {
        var s = t.call(this, e) || this;
        return s.duration = n, s.scheduler = r, s.leading = o, s.trailing = i, s._hasTrailingValue = !1, s._trailingValue = null, s
      }
      return We(e, t), e.prototype._next = function(t) {
        this.throttled ? this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(Ps, this.duration, {
          subscriber: this
        })), this.leading ? this.destination.next(t) : this.trailing && (this._trailingValue = t, this._hasTrailingValue = !0))
      }, e.prototype._complete = function() {
        this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete()
      }, e.prototype.clearThrottle = function() {
        var t = this.throttled;
        t && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), t.unsubscribe(), this.remove(t), this.throttled = null)
      }, e
    }(an);

  function Ps(t) {
    t.subscriber.clearThrottle()
  }

  function Rs(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var Is = new de([].concat(function(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }(Ns), ["cssremunit", "classlist", "customproperties", "eventlistener", "matchmedia"])),
    Ls = "(min-width: 64em)",
    Ds = "(min-width: 1666px)",
    Fs = 21,
    Hs = 28,
    qs = 1,
    Bs = 2,
    Us = 3;

  function zs() {
    return parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  function Ws() {
    return Fs * zs()
  }

  function Vs() {
    return document.body.clientWidth / 2 - Hs * zs()
  }
  var Xs = function(t) {
    return function(e) {
      return t.pipe(Gr(function(t) {
        return t ? e : Or
      }))
    }
  };
  window._noDrawer || !Zo(Is) || $o || Jo.then(function() {
    var t = document.getElementsByTagName("hy-drawer")[0],
      e = document.getElementById("_menu"),
      n = document.getElementById("_sidebar"),
      o = document.querySelector(".sidebar-sticky");

    function i() {
      var i = $n(r.a)(t).pipe(pr(function() {
          return window.matchMedia(Ds).matches ? Us : window.matchMedia(Ls).matches ? Bs : qs
        }), io(), Wr(window.matchMedia(Ds).matches ? Us : window.matchMedia(Ls).matches ? Bs : qs)),
        s = i.pipe(pr(function(t) {
          return t >= Us ? Vs() : Ws()
        })),
        u = s.pipe(ii(i), pr(function(t) {
          var e = Rs(t, 2),
            n = e[0];
          return e[1] >= Bs ? document.body.clientWidth / 2 - n / 2 : document.body.clientWidth / 2
        })),
        c = s.pipe(ii(i), pr(function(t) {
          var e = Rs(t, 2),
            n = e[0];
          return e[1] >= Bs ? [0, n] : Xo && !navigator.standalone ? [35, 150] : [0, 150]
        }));
      hn.create(function(e) {
        return t.moveCallback = function(t) {
          return e.next(t)
        }
      }).pipe(ii(u, i)).subscribe(function(t) {
        var e = Rs(t, 3),
          n = e[0].opacity,
          r = e[1];
        return a(e[2] >= Bs, r, n)
      }), t.addEventListener("hy-drawer-prepare", function() {
        Ko ? (n.attributeStyleMap.set("will-change", "transform"), o.attributeStyleMap.set("will-change", "opacity")) : (n.style.willChange = "transform", o.style.willChange = "opacity")
      }), t.addEventListener("hy-drawer-transitioned", function() {
        Ko ? (n.attributeStyleMap.delete("will-change"), o.attributeStyleMap.delete("will-change")) : (n.style.willChange = "", o.style.willChange = "")
      }), e.addEventListener("click", function(t) {
        Xo && t.preventDefault(), window._drawer.toggle()
      });
      var l, f, h, p = Tr(t, "hy-drawer-transitioned").pipe(pr(function(t) {
        return t.detail
      }), co(), ho(function(t) {
        var e;
        t || ((e = document.getElementById("_swipe")) && e.parentNode.removeChild(e), history.state || history.replaceState({}, document.title), history.state.closedOnce = !0)
      }));
      Tr(window, "popstate", {
        passive: !0
      }).pipe(Xs(p)).subscribe(function() {
        return window._drawer.close()
      }), Tr(document, "wheel", {
        passive: !1
      }).pipe(Xs(p), ho(function(e) {
        t.translateX > 0 && e.preventDefault()
      }), (l = 500, void 0 === f && (f = li), void 0 === h && (h = As), function(t) {
        return t.lift(new Ms(l, f, h.leading, h.trailing))
      })).subscribe(function() {
        return window._drawer.close()
      });
      var d = window.pageYOffset || document.body.scrollTop,
        y = t.classList.contains("cover") && d <= 0 && !(history.state && history.state.closedOnce);
      y || (history.state || history.replaceState({}, document.title), history.state.closedOnce = !0), t._peek$ = i.pipe(pr(function(t) {
        switch (t) {
          case Us:
            return Vs();
          case Bs:
            return Ws();
          case qs:
            return .5 * zs()
        }
      }));
      var v = y ? null : t.getBoundingClientRect().height;
      t.addEventListener("hy-drawer-init", function() {
        ! function() {
          var t = document.getElementById("_hrefSwipeSVG");
          if (t) {
            var e = document.createElement("img");
            e.id = "_swipe", e.src = t.href, e.alt = "Swipe image", e.addEventListener("click", function() {
              return window._drawer.close()
            }), document.getElementById("_sidebar").appendChild(e)
          }
        }(), t.classList.add("loaded"), v && d >= v && window.scrollTo(0, d - v)
      }, {
        once: !0
      }), u.pipe(ii(i), yi(1)).subscribe(function(e) {
        var n = Rs(e, 2),
          r = n[0];
        return a(n[1] >= Bs, r, void 0 !== t.opacity ? t.opacity : y ? 1 : 0)
      }), window._drawer = function(t, e) {
        return e && t.setAttribute("opened", ""), Wo && t.setAttribute("threshold", 0), Vo || t.setAttribute("mouse-events", ""), Go && t.removeAttribute("prevent-default"), window.customElements.define("hy-drawer", ks), t
      }(t, y), c.subscribe(function(e) {
        return t.range = e
      })
    }
    var s = Ko ? new CSSTransformValue([new CSSTranslate(CSS.px(0), CSS.px(0))]) : null;

    function a(t, e, r) {
      var i = e * (1 - r),
        a = t ? 1 : r;
      Ko ? (s[0].x.value = i, n.attributeStyleMap.set("transform", s), o.attributeStyleMap.set("opacity", a)) : (n.style.transform = "translateX(".concat(i, "px)"), o.style.opacity = a)
    }! function e() {
      getComputedStyle(t).getPropertyValue("--hy-drawer-width") ? i() : setTimeout(e, 300)
    }()
  });
  var $s = window.URL;
  if (!($s && $s.prototype && "href" in $s.prototype)) {
    ($s = function(t, e) {
      if (!t) throw new TypeError("Invalid argument");
      var n = document.implementation.createHTMLDocument("");
      if (e) {
        var r = n.createElement("base");
        r.href = e, n.head.appendChild(r)
      }
      var o = n.createElement("a");
      if (o.href = t, n.body.appendChild(o), ":" === o.protocol || !/:/.test(o.href)) throw new TypeError("Invalid URL");
      Object.defineProperty(this, "_anchorElement", {
        value: o
      })
    }).prototype = {
      toString: function() {
        return this.href
      },
      get href() {
        return this._anchorElement.href
      },
      set href(t) {
        this._anchorElement.href = t
      },
      get protocol() {
        return this._anchorElement.protocol
      },
      set protocol(t) {
        this._anchorElement.protocol = t
      },
      get host() {
        return this._anchorElement.host
      },
      set host(t) {
        this._anchorElement.host = t
      },
      get hostname() {
        return this._anchorElement.hostname
      },
      set hostname(t) {
        this._anchorElement.hostname = t
      },
      get port() {
        return this._anchorElement.port
      },
      set port(t) {
        this._anchorElement.port = t
      },
      get pathname() {
        return this._anchorElement.pathname
      },
      set pathname(t) {
        this._anchorElement.pathname = t
      },
      get search() {
        return this._anchorElement.search
      },
      set search(t) {
        this._anchorElement.search = t
      },
      get hash() {
        return this._anchorElement.hash
      },
      set hash(t) {
        this._anchorElement.hash = t
      }
    };
    var Gs = window.URL || window.webkitURL || window.mozURL;
    $s.createObjectURL = function(t) {
      return Gs.createObjectURL.apply(Gs, arguments)
    }, $s.revokeObjectURL = function(t) {
      return Gs.revokeObjectURL.apply(Gs, arguments)
    }, Object.defineProperty($s.prototype, "toString", {
      enumerable: !1
    })
  }
  var Ys = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector;

  function Ks(t) {
    var e = t.protocol,
      n = t.host,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
    return e !== r.protocol || n !== r.host
  }

  function Js() {
    return window.pageYOffset || document.body.scrollTop
  }
  var Zs = "push";

  function Qs(t, e) {
    function n() {
      return !n.pred.apply(n.thisArg, arguments)
    }
    return n.pred = t, n.thisArg = e, n
  }

  function ta(t, e) {
    return function(n) {
      return [so(t, e)(n), so(Qs(t, e))(n)]
    }
  }

  function ea(t) {
    return function(e) {
      var n = new na(t),
        r = e.lift(n);
      return n.caught = r
    }
  }
  var na = function() {
      function t(t) {
        this.selector = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new ra(t, this.selector, this.caught))
      }, t
    }(),
    ra = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.selector = n, o.caught = r, o
      }
      return We(e, t), e.prototype.error = function(e) {
        if (!this.isStopped) {
          var n = void 0;
          try {
            n = this.selector(e, this.caught)
          } catch (e) {
            return void t.prototype.error.call(this, e)
          }
          this._unsubscribeAndRecycle();
          var r = new nr(this, void 0, void 0);
          this.add(r), ur(this, n, void 0, void 0, r)
        }
      }, e
    }(er);

  function oa(t) {
    return (oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function ia(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function sa(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function aa(t, e) {
    return !e || "object" !== oa(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function ua(t) {
    return (ua = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function ca(t, e) {
    return (ca = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var la = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), aa(this, ua(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ca(t, e)
      }(n, t), r = n, (o = [{
        key: "histId",
        value: function() {
          return this.el.id || this.constructor.componentName
        }
      }, {
        key: "shouldLoadAnchor",
        value: function(t, e) {
          return t && "" === t.target && (!e || -1 !== t.href.search(e))
        }
      }, {
        key: "isPushEvent",
        value: function(t) {
          var e = t.url,
            n = t.anchor,
            r = t.event,
            o = r.metaKey,
            i = r.ctrlKey;
          return !o && !i && this.shouldLoadAnchor(n, this.hrefRegex) && !Ks(e, this)
        }
      }, {
        key: "isHintEvent",
        value: function(t) {
          var e = t.url,
            n = t.anchor;
          return this.shouldLoadAnchor(n, this.hrefRegex) && !Ks(e, this) && ! function(t) {
            var e = t.hash,
              n = t.origin,
              r = t.pathname,
              o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
            return "" !== e && n === o.origin && r === o.pathname
          }(e, this)
        }
      }, {
        key: "isHashChange",
        value: function(t) {
          var e = ia(t, 2),
            n = e[0].url.pathname,
            r = e[1],
            o = r.url,
            i = o.pathname,
            s = o.hash,
            a = r.type;
          return i === n && ("pop" === a || a === Zs && "" !== s)
        }
      }]) && sa(r.prototype, o), i && sa(r, i), n
    }()
  };

  function fa(t) {
    return (fa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function ha(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function pa(t, e) {
    return !e || "object" !== fa(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function da(t) {
    return (da = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function ya(t, e) {
    return (ya = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var va = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), pa(this, da(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ya(t, e)
      }(n, t), r = n, (o = [{
        key: "assignScrollPosition",
        value: function(t) {
          var e, n, r, o, i, s, a = this.histId();
          return Object.assign(t, (e = {}, n = a, r = Object.assign(t[a] || {}, {
            scrollTop: Js(),
            scrollHeight: (o = document.documentElement, i = document.body, s = "scrollHeight", o[s] || i[s])
          }), n in e ? Object.defineProperty(e, n, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : e[n] = r, e))
        }
      }, {
        key: "manageScrollPostion",
        value: function(t) {
          var e = t.type,
            n = t.url.hash;
          switch (e) {
            case Zs:
              this.scrollHashIntoView(n, {
                behavior: "smooth",
                block: "start",
                inline: "nearest"
              });
              break;
            case "pop":
              this.restoreScrollPostion();
              break;
            case INIT:
              break;
            default:
              0
          }
        }
      }, {
        key: "scrollHashIntoView",
        value: function(t, e) {
          if (t) {
            var n = document.getElementById(decodeURIComponent(t.substr(1)));
            n && n.scrollIntoView(e)
          } else window.scroll(window.pageXOffset, 0)
        }
      }, {
        key: "restoreScrollPostion",
        value: function() {
          var t = this.histId(),
            e = window.history.state && window.history.state[t] || {},
            n = e.scrollTop;
          e.scrollHeight;
          null != n && window.scroll(window.pageXOffset, n)
        }
      }, {
        key: "restoreScrollPostionOnReload",
        value: function() {
          0 != Js() || this.restoreScrollPostion()
        }
      }]) && ha(r.prototype, o), i && ha(r, i), n
    }()
  };

  function ma(t) {
    return (ma = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function ba(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t
  }

  function ga(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function _a(t, e) {
    return !e || "object" !== ma(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function wa(t) {
    return (wa = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Sa(t, e) {
    return (Sa = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Ea = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), _a(this, wa(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Sa(t, e)
      }(n, va(t)), r = n, (o = [{
        key: "updateHistoryState",
        value: function(t) {
          var e = t.type,
            n = t.replace,
            r = t.url.href;
          if (!Ks(this)) switch (e) {
            case "init":
            case Zs:
              var o = this.histId(),
                i = n || r === window.location.href ? "replaceState" : "pushState",
                s = Object.assign(window.history.state || {}, ba({}, o, {}));
              window.history[i](s, document.title, r);
            case "pop":
              break;
            default:
              0
          }
        }
      }, {
        key: "updateHistoryStateHash",
        value: function(t) {
          var e = t.type,
            n = t.url;
          if (!Ks(this) && e === Zs) {
            var r = this.histId();
            window.history.pushState(ba({}, r, {}), document.title, n)
          }
        }
      }, {
        key: "updateHistoryTitle",
        value: function(t) {
          var e = t.type,
            n = t.title;
          document.title = n, Ks(this) || e !== Zs || window.history.replaceState(window.history.state, n, window.location)
        }
      }, {
        key: "saveScrollPosition",
        value: function() {
          if (!Ks(this)) {
            var t = this.assignScrollPosition(window.history.state || {});
            window.history.replaceState(t, document.title, window.location)
          }
        }
      }]) && ga(r.prototype, o), i && ga(r, i), n
    }()
  };

  function xa() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = t[t.length - 1];
    return "function" == typeof n && t.pop(), Mn(t, void 0).lift(new Oa(n))
  }
  var Oa = function() {
      function t(t) {
        this.resultSelector = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Ta(t, this.resultSelector))
      }, t
    }(),
    Ta = function(t) {
      function e(e, n, r) {
        void 0 === r && (r = Object.create(null));
        var o = t.call(this, e) || this;
        return o.iterators = [], o.active = 0, o.resultSelector = "function" == typeof n ? n : null, o.values = r, o
      }
      return We(e, t), e.prototype._next = function(t) {
        var e = this.iterators;
        Ke(t) ? e.push(new Na(t)) : "function" == typeof t[or] ? e.push(new Ca(t[or]())) : e.push(new ka(this.destination, this, t))
      }, e.prototype._complete = function() {
        var t = this.iterators,
          e = t.length;
        if (this.unsubscribe(), 0 !== e) {
          this.active = e;
          for (var n = 0; n < e; n++) {
            var r = t[n];
            if (r.stillUnsubscribed) this.destination.add(r.subscribe(r, n));
            else this.active--
          }
        } else this.destination.complete()
      }, e.prototype.notifyInactive = function() {
        this.active--, 0 === this.active && this.destination.complete()
      }, e.prototype.checkIterators = function() {
        for (var t = this.iterators, e = t.length, n = this.destination, r = 0; r < e; r++) {
          if ("function" == typeof(s = t[r]).hasValue && !s.hasValue()) return
        }
        var o = !1,
          i = [];
        for (r = 0; r < e; r++) {
          var s, a = (s = t[r]).next();
          if (s.hasCompleted() && (o = !0), a.done) return void n.complete();
          i.push(a.value)
        }
        this.resultSelector ? this._tryresultSelector(i) : n.next(i), o && n.complete()
      }, e.prototype._tryresultSelector = function(t) {
        var e;
        try {
          e = this.resultSelector.apply(this, t)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.destination.next(e)
      }, e
    }(an),
    Ca = function() {
      function t(t) {
        this.iterator = t, this.nextResult = t.next()
      }
      return t.prototype.hasValue = function() {
        return !0
      }, t.prototype.next = function() {
        var t = this.nextResult;
        return this.nextResult = this.iterator.next(), t
      }, t.prototype.hasCompleted = function() {
        var t = this.nextResult;
        return t && t.done
      }, t
    }(),
    Na = function() {
      function t(t) {
        this.array = t, this.index = 0, this.length = 0, this.length = t.length
      }
      return t.prototype[or] = function() {
        return this
      }, t.prototype.next = function(t) {
        var e = this.index++,
          n = this.array;
        return e < this.length ? {
          value: n[e],
          done: !1
        } : {
          value: null,
          done: !0
        }
      }, t.prototype.hasValue = function() {
        return this.array.length > this.index
      }, t.prototype.hasCompleted = function() {
        return this.array.length === this.index
      }, t
    }(),
    ka = function(t) {
      function e(e, n, r) {
        var o = t.call(this, e) || this;
        return o.parent = n, o.observable = r, o.stillUnsubscribed = !0, o.buffer = [], o.isComplete = !1, o
      }
      return We(e, t), e.prototype[or] = function() {
        return this
      }, e.prototype.next = function() {
        var t = this.buffer;
        return 0 === t.length && this.isComplete ? {
          value: null,
          done: !0
        } : {
          value: t.shift(),
          done: !1
        }
      }, e.prototype.hasValue = function() {
        return this.buffer.length > 0
      }, e.prototype.hasCompleted = function() {
        return 0 === this.buffer.length && this.isComplete
      }, e.prototype.notifyComplete = function() {
        this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete()
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        this.buffer.push(e), this.parent.checkIterators()
      }, e.prototype.subscribe = function(t, e) {
        return ur(this, this.observable, this, e)
      }, e
    }(er);

  function Aa(t) {
    return (Aa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Ma(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function ja(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function Pa(t, e) {
    return !e || "object" !== Aa(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Ra(t) {
    return (Ra = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ia(t, e) {
    return (Ia = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var La = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), Pa(this, Ra(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ia(t, e)
      }(n, t), r = n, (o = [{
        key: "makeRequest",
        value: function(t) {
          var e = this;
          return Ur({
            method: "GET",
            responseType: "text",
            url: t.url,
            crossDomain: Ks(this),
            headers: {
              Accept: "text/html"
            }
          }).pipe(pr(function(e) {
            var n = e.response;
            return Object.assign(t, {
              response: n
            })
          }), ea(function(n) {
            return e.recoverIfResponse(t, n)
          }))
        }
      }, {
        key: "recoverIfResponse",
        value: function(t, e) {
          var n = e.status,
            r = e.xhr;
          return r && r.response && n > 400 && n < 598 ? jn(Object.assign(t, {
            response: r.response
          })) : jn(Object.assign(t, {
            error: e
          }))
        }
      }, {
        key: "getFetch$",
        value: function(t, e, n) {
          return t.url.href === e.url.href && null == e.error ? jn(e) : n.pipe(Xi(1))
        }
      }, {
        key: "getResponse",
        value: function(t, e) {
          var n = Ma(e, 2),
            r = n[0],
            o = n[1];
          return xa(this.getFetch$(r, o, t).pipe(pr(function(t) {
            return Object.assign(t, r)
          })), this.animPromise, function(t) {
            return t
          })
        }
      }]) && ja(r.prototype, o), i && ja(r, i), n
    }()
  };

  function Da(t) {
    return (Da = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Fa(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function Ha(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function qa(t, e) {
    return !e || "object" !== Da(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Ba(t) {
    return (Ba = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ua(t, e) {
    return (Ua = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var za = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), qa(this, Ba(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ua(t, e)
      }(n, t), r = n, (o = [{
        key: "tempRemoveScriptTags",
        value: function(t) {
          var e = this,
            n = [];
          return t.forEach(function(t) {
            return Array.from(t.querySelectorAll(e.scriptSelector)).forEach(function(t) {
              var e = [t, t.previousSibling];
              t.parentNode.removeChild(t), n.push(e)
            })
          }), n
        }
      }, {
        key: "insertScript",
        value: function(t) {
          var e = Fa(t, 2),
            n = e[0],
            r = e[1],
            o = document.write;
          return document.write = function() {
            for (var t = document.createElement("div"), e = arguments.length, n = new Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            t.innerHTML = n.join(), Array.from(t.childNodes).forEach(function(t) {
              r.parentNode.insertBefore(t, r.nextSibling)
            })
          }, "" !== n.src ? hn.create(function(t) {
            n.addEventListener("load", function(e) {
              document.write = o, t.complete(e)
            }), n.addEventListener("error", function(e) {
              document.write = o, t.error(e)
            }), r.parentNode.insertBefore(n, r.nextSibling)
          }) : jn({}).pipe(ho(function() {
            r.parentNode.insertBefore(n, r.nextSibling), document.write = o
          }))
        }
      }, {
        key: "reinsertScriptTags",
        value: function(t) {
          return this.scriptSelector ? br(t.scripts).pipe((e = this.insertScript.bind(this), gr(e, n, 1)), ea(function(e) {
            throw Object.assign(t, {
              error: e
            })
          })).toPromise().then(function() {
            return t
          }) : jn(t);
          var e, n
        }
      }]) && Ha(r.prototype, o), i && Ha(r, i), n
    }()
  };

  function Wa(t) {
    return (Wa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Va(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function Xa(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function $a(t, e) {
    return !e || "object" !== Wa(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Ga(t) {
    return (Ga = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Ya(t, e) {
    return (Ya = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Ka = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), $a(this, Ga(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Ya(t, e)
      }(n, za(t)), r = n, (o = [{
        key: "getTitle",
        value: function(t) {
          return (t.querySelector("title") || {}).textContent
        }
      }, {
        key: "getReplaceElements",
        value: function(t) {
          if (this.replaceIds.length > 0) return this.replaceIds.map(function(e) {
            return t.getElementById(e)
          });
          if (this.el.id) return [t.getElementById(this.el.id)];
          var e = Array.from(document.getElementsByTagName(this.el.tagName)).indexOf(this.el);
          return [t.querySelectorAll(this.el.tagName)[e]]
        }
      }, {
        key: "responseToContent",
        value: function(t) {
          var e, n = t.response,
            r = (e = n, document.createRange().createContextualFragment(e)),
            o = this.getTitle(r),
            i = this.getReplaceElements(r);
          if (i.some(function(t) {
              return null == t
            })) throw Object.assign(t, {
            replaceElMissing: !0
          });
          var s = this.scriptSelector ? this.tempRemoveScriptTags(i) : [];
          return Object.assign(t, {
            documentFragment: r,
            title: o,
            replaceEls: i,
            scripts: s
          })
        }
      }, {
        key: "replaceContentByIds",
        value: function(t) {
          this.replaceIds.map(function(t) {
            return document.getElementById(t)
          }).forEach(function(e, n) {
            return e.parentNode.replaceChild(t[n], e)
          })
        }
      }, {
        key: "replaceContentWholesale",
        value: function(t) {
          var e = Va(t, 1)[0];
          this.el.innerHTML = e.innerHTML
        }
      }, {
        key: "replaceContent",
        value: function(t) {
          this.replaceIds.length > 0 ? this.replaceContentByIds(t) : this.replaceContentWholesale(t)
        }
      }, {
        key: "updateDOM",
        value: function(t) {
          try {
            var e = t.replaceEls;
            this.updateHistoryTitle(t), Ks(this) && this.rewriteURLs(e), this.replaceContent(e)
          } catch (e) {
            throw Object.assign(t, {
              error: e
            })
          }
        }
      }, {
        key: "rewriteURLs",
        value: function(t) {
          var e = this;
          t.forEach(function(t) {
            t.querySelectorAll("[href]").forEach(e.rewriteURL("href")), t.querySelectorAll("[src]").forEach(e.rewriteURL("src")), t.querySelectorAll("img[srcset]").forEach(e.rewriteURLSrcSet("srcset")), t.querySelectorAll("blockquote[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("del[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("ins[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("q[cite]").forEach(e.rewriteURL("cite")), t.querySelectorAll("img[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("frame[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("iframe[longdesc]").forEach(e.rewriteURL("longdesc")), t.querySelectorAll("img[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("input[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("object[usemap]").forEach(e.rewriteURL("usemap")), t.querySelectorAll("form[action]").forEach(e.rewriteURL("action")), t.querySelectorAll("button[formaction]").forEach(e.rewriteURL("formaction")), t.querySelectorAll("input[formaction]").forEach(e.rewriteURL("formaction")), t.querySelectorAll("video[poster]").forEach(e.rewriteURL("poster")), t.querySelectorAll("object[data]").forEach(e.rewriteURL("data")), t.querySelectorAll("object[codebase]").forEach(e.rewriteURL("codebase")), t.querySelectorAll("object[archive]").forEach(e.rewriteURLList("archive"))
          })
        }
      }, {
        key: "rewriteURL",
        value: function(t) {
          var e = this;
          return function(n) {
            try {
              n.setAttribute(t, new URL(n.getAttribute(t), e.href).href)
            } catch (t) {
              0
            }
          }
        }
      }, {
        key: "rewriteURLSrcSet",
        value: function(t) {
          var e = this;
          return function(n) {
            try {
              n.setAttribute(t, n.getAttribute(t).split(/\s*,\s*/).map(function(t) {
                var n = t.split(/\s+/);
                return n[0] = new URL(n[0], e.href).href, n.join(" ")
              }).join(", "))
            } catch (t) {
              0
            }
          }
        }
      }, {
        key: "rewriteURLList",
        value: function(t) {
          var e = this;
          return function(n) {
            try {
              n.setAttribute(t, n.getAttribute(t).split(/[\s,]+/).map(function(t) {
                return new URL(t, e.href).href
              }).join(", "))
            } catch (t) {
              0
            }
          }
        }
      }]) && Xa(r.prototype, o), i && Xa(r, i), n
    }()
  };

  function Ja(t) {
    return !Ke(t) && t - parseFloat(t) + 1 >= 0
  }

  function Za(t, e, n) {
    void 0 === t && (t = 0);
    var r = -1;
    return Ja(e) ? r = Number(e) < 1 ? 1 : Number(e) : Cn(e) && (n = e), Cn(n) || (n = li), new hn(function(e) {
      var o = Ja(t) ? t : +t - n.now();
      return n.schedule(Qa, o, {
        index: 0,
        period: r,
        subscriber: e
      })
    })
  }

  function Qa(t) {
    var e = t.index,
      n = t.period,
      r = t.subscriber;
    if (r.next(e), !r.closed) {
      if (-1 === n) return r.complete();
      t.index = e + 1, this.schedule(t, n)
    }
  }

  function tu(t) {
    return (tu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function eu(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function nu(t, e) {
    return !e || "object" !== tu(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function ru(t) {
    return (ru = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function ou(t, e) {
    return (ou = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var iu = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), nu(this, ru(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && ou(t, e)
      }(n, t), r = n, (o = [{
        key: "onStart",
        value: function(t) {
          var e = this;
          this.animPromise = Za(this.duration);
          this.fireEvent("start", {
            detail: Object.assign(t, {
              transitionUntil: function(t) {
                e.animPromise = t
              }
            })
          })
        }
      }, {
        key: "onDOMError",
        value: function(t) {
          var e = t.replaceElMissing,
            n = t.url;
          e ? (window.history.back(), setTimeout(function() {
            document.location.href = n
          }, 100)) : this.fireEvent("error", {
            detail: t
          })
        }
      }, {
        key: "onNetworkError",
        value: function(t) {
          this.fireEvent("networkerror", {
            detail: t
          })
        }
      }, {
        key: "onError",
        value: function(t) {
          this.fireEvent("error", {
            detail: t
          })
        }
      }, {
        key: "onReady",
        value: function(t) {
          this.fireEvent("ready", {
            detail: t
          })
        }
      }, {
        key: "onAfter",
        value: function(t) {
          this.fireEvent("after", {
            detail: t
          })
        }
      }, {
        key: "onProgress",
        value: function(t) {
          this.fireEvent("progress", {
            detail: t
          })
        }
      }, {
        key: "onLoad",
        value: function(t) {
          this.fireEvent("load", {
            detail: t
          })
        }
      }]) && eu(r.prototype, o), i && eu(r, i), n
    }()
  };

  function su(t) {
    return (su = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function au(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function uu(t, e) {
    return !e || "object" !== su(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function cu(t) {
    return (cu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function lu(t, e) {
    return (lu = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var fu = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), uu(this, cu(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && lu(t, e)
      }(n, t), r = n, (o = [{
        key: "setupEventListeners",
        value: function() {
          var t = this;
          if ("MutationObserver" in window && "WeakSet" in window) {
            var e = new WeakSet,
              n = this.pushSubject.next.bind(this.pushSubject),
              r = this.hintSubject.next.bind(this.hintSubject),
              o = function(t) {
                e.has(t) || (e.add(t), t.addEventListener("click", n), t.addEventListener("mouseenter", r, {
                  passive: !0
                }), t.addEventListener("touchstart", r, {
                  passive: !0
                }), t.addEventListener("focus", r, {
                  passive: !0
                }))
              },
              i = function(e) {
                e instanceof Element && (Ys.call(e, t.linkSelector) ? o(e) : Array.from(e.querySelectorAll(t.linkSelector)).forEach(o))
              },
              s = function(t) {
                e.delete(t), t.removeEventListener("click", n), t.removeEventListener("mouseenter", r, {
                  passive: !0
                }), t.removeEventListener("touchstart", r, {
                  passive: !0
                }), t.removeEventListener("focus", r, {
                  passive: !0
                })
              };
            $n(MutationObserver)(this.el, {}, {
              childList: !0,
              subtree: !0
            }).subscribe(function(e) {
              var n = e.addedNodes,
                r = e.removedNodes;
              Array.from(r).forEach(function(e) {
                e instanceof Element && (Ys.call(e, t.linkSelector) ? s(e) : Array.from(e.querySelectorAll(t.linkSelector)).forEach(s))
              }.bind(t)), Array.from(n).forEach(i.bind(t))
            }), this.subjects.linkSelector.subscribe(function() {
              Array.from(e).forEach(s), i.call(t, t.el)
            })
          } else this.el.addEventListener("click", function(e) {
            var n = function(t) {
              for (var e = this; e !== document && e !== document.documentElement;) {
                if (Ys.call(e, t)) return e;
                e = e.parentNode
              }
              return null
            }.call(e.target, t.linkSelector);
            n && n.href && (e.currentTarget = n, pushSubject.next(e))
          })
        }
      }]) && au(r.prototype, o), i && au(r, i), n
    }()
  };

  function hu(t) {
    return (hu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function pu(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function du(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function yu(t, e) {
    return !e || "object" !== hu(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function vu(t) {
    return (vu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function mu(t, e) {
    return (mu = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var bu = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), yu(this, vu(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && mu(t, e)
      }(n, fu(iu(Ka(La(Ea(la(t))))))), r = n, (o = [{
        key: "compareContext",
        value: function(t, e) {
          return t.url.href === e.url.href && t.error === e.error && t.cacheNr === e.cacheNr
        }
      }, {
        key: "setupObservables",
        value: function() {
          var t = this;
          this.cacheNr = 1, this.pushSubject = new bn, this.hintSubject = new bn;
          var e = xr(this.pushSubject.pipe(Vr(this.subjects.disconnect), pr(function(e) {
              return {
                type: Zs,
                url: new $s(e.currentTarget.href, t.href),
                anchor: e.currentTarget,
                event: e,
                cacheNr: t.cacheNr
              }
            }), so(this.isPushEvent.bind(this)), ho(function(e) {
              e.event.preventDefault(), t.saveScrollPosition()
            })), Tr(window, "popstate").pipe(Vr(this.subjects.disconnect), so(function() {
              return window.history.state && window.history.state[t.histId()]
            }), pr(function(e) {
              return {
                type: "pop",
                url: new $s(window.location, t.href),
                event: e,
                cacheNr: t.cacheNr
              }
            })), this.reload$.pipe(Vr(this.subjects.disconnect))).pipe(Wr({
              url: new $s(this.initialHref)
            }), ho(function(e) {
              var n = e.url;
              return t._url = n
            }), hi(), io(), ta(this.isHashChange)).map(function(t) {
              return t.pipe(pr(function(t) {
                return pu(t, 2)[1]
              }), io())
            }),
            n = pu(e, 2),
            r = n[0],
            o = n[1],
            i = this.subjects.prefetch.pipe(Gr(function(e) {
              if (!e) return Or;
              var n = ni(function() {
                return xr(o.pipe(Bi(!0)), t.fetch$.pipe(Bi(!1)))
              }).pipe(Wr(!1), io());
              return t.hintSubject.pipe(Vr(t.subjects.disconnect), function(t) {
                return function(e) {
                  return t.pipe(Gr(function(t) {
                    return t ? Or : e
                  }))
                }
              }(n), pr(function(e) {
                return {
                  type: "hint",
                  url: new $s(e.currentTarget.href, t.href),
                  anchor: e.currentTarget,
                  event: e,
                  cacheNr: t.cacheNr
                }
              }), so(t.isHintEvent.bind(t)))
            })),
            s = xr(i, o).pipe(co(this.compareContext.bind(this)), Gr(this.makeRequest.bind(this)), Wr({
              url: {}
            }), io());
          this.fetch$ = o.pipe(ho(function(e) {
            t.updateHistoryState(e), t.onStart(e)
          }), ii(s), Gr(this.getResponse.bind(this, s)), io());
          var a = pu(this.fetch$.pipe(ta(function(t) {
              return !t.error
            })), 2),
            u = a[0],
            c = a[1];
          u.pipe(pr(this.responseToContent.bind(this)), ho(function(e) {
            t.onReady(e), t.updateDOM(e), t.onAfter(e), t.manageScrollPostion(e)
          }), ho({
            error: function(e) {
              return t.onDOMError(e)
            }
          }), ea(function(t, e) {
            return e
          }), Gr(this.reinsertScriptTags.bind(this)), ho({
            error: function(e) {
              return t.onError(e)
            }
          }), ea(function(t, e) {
            return e
          })).subscribe(this.onLoad.bind(this)), r.subscribe(function(e) {
            t.updateHistoryStateHash(e), t.manageScrollPostion(e)
          }), c.subscribe(this.onNetworkError.bind(this)), o.pipe(Gr(function(e) {
            return ni(function() {
              return t.animPromise
            }).pipe(Vr(t.fetch$), Bi(e))
          })).subscribe(this.onProgress.bind(this)), this.setupEventListeners()
        }
      }]) && du(r.prototype, o), i && du(r, i), n
    }()
  };

  function gu(t) {
    return (gu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function _u(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function wu(t, e) {
    return !e || "object" !== gu(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Su(t, e, n) {
    return (Su = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
      var r = function(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = Eu(t)););
        return t
      }(t, e);
      if (r) {
        var o = Object.getOwnPropertyDescriptor(r, e);
        return o.get ? o.get.call(n) : o.value
      }
    })(t, e, n || t)
  }

  function Eu(t) {
    return (Eu = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function xu(t, e) {
    return (xu = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }
  var Ou = new de([].concat(function(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }(Oe), ["documentfragment", "eventlistener", "history", "promises", "queryselector", "requestanimationframe"]));
  DocumentFragment.prototype.getElementById = DocumentFragment.prototype.getElementById || function(t) {
    return this.querySelector("#".concat(t))
  };
  var Tu = function(t) {
    return function(e) {
      function n() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, n), wu(this, Eu(n).apply(this, arguments))
      }
      var r, o, i;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && xu(t, e)
      }(n, bu(Xn(Ae(t)))), r = n, i = [{
        key: "componentName",
        get: function() {
          return "hy-push-state"
        }
      }, {
        key: "types",
        get: function() {
          return {
            replaceIds: Gn,
            linkSelector: tr,
            duration: Jn,
            hrefRegex: Qn,
            scriptSelector: tr,
            initialHref: tr,
            prefetch: Kn
          }
        }
      }, {
        key: "defaults",
        get: function() {
          return {
            replaceIds: [],
            linkSelector: "a[href]:not(.no-push-state)",
            duration: 0,
            hrefRegex: null,
            scriptSelector: null,
            initialHref: window.location.href,
            prefetch: !1
          }
        }
      }], (o = [{
        key: "setupComponent",
        value: function(t, e) {
          Su(Eu(n.prototype), "setupComponent", this).call(this, t, e), this.saveScrollPosition = this.saveScrollPosition.bind(this), this.reload$ = new bn
        }
      }, {
        key: "setupShadowDOM",
        value: function(t) {
          return t
        }
      }, {
        key: "connectComponent",
        value: function() {
          "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual"), this.restoreScrollPostionOnReload(), window.addEventListener("beforeunload", this.saveScrollPosition), this.setupObservables(), Su(Eu(n.prototype), "connectComponent", this).call(this);
          var t = new $s(this.initialHref);
          this.updateHistoryState({
            type: "init",
            replace: !0,
            url: t
          });
          var e = this.getReplaceElements(document);
          Ks(this) && this.rewriteURLs(e), this.fireEvent("init"), this.onLoad({
            type: "init",
            title: this.getTitle(document),
            replaceEls: e,
            url: t,
            cacheNr: this.cacheNr
          })
        }
      }, {
        key: "disconnectComponent",
        value: function() {
          Su(Eu(n.prototype), "disconnectComponent", this).call(this), window.removeEventListener("beforeunload", this.saveScrollPosition)
        }
      }, {
        key: "assign",
        value: function(t) {
          this.reload$.next({
            type: Zs,
            url: new $s(t, this.href),
            cacheNr: ++this.cacheNr
          })
        }
      }, {
        key: "reload",
        value: function() {
          this.reload$.next({
            type: Zs,
            url: new $s(this.href),
            cacheNr: ++this.cacheNr,
            replace: !0
          })
        }
      }, {
        key: "replace",
        value: function(t) {
          this.reload$.next({
            type: Zs,
            url: new $s(t, this.href),
            cacheNr: ++this.cacheNr,
            replace: !0
          })
        }
      }, {
        key: "hash",
        get: function() {
          return this._url.hash
        }
      }, {
        key: "host",
        get: function() {
          return this._url.host
        }
      }, {
        key: "hostname",
        get: function() {
          return this._url.hostname
        }
      }, {
        key: "href",
        get: function() {
          return this._url.href
        }
      }, {
        key: "origin",
        get: function() {
          return this._url.origin
        }
      }, {
        key: "pathname",
        get: function() {
          return this._url.pathname
        }
      }, {
        key: "port",
        get: function() {
          return this._url.port
        }
      }, {
        key: "protocol",
        get: function() {
          return this._url.protocol
        }
      }, {
        key: "search",
        get: function() {
          return this._url.search
        }
      }]) && _u(r.prototype, o), i && _u(r, i), n
    }()
  };

  function Cu(t) {
    return (Cu = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }

  function Nu(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }

  function ku(t, e) {
    return !e || "object" !== Cu(e) && "function" != typeof e ? function(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }(t) : e
  }

  function Au(t) {
    return (Au = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t)
    })(t)
  }

  function Mu(t, e) {
    return (Mu = Object.setPrototypeOf || function(t, e) {
      return t.__proto__ = e, t
    })(t, e)
  }

  function ju(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
        return n
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }
  var Pu = new de([].concat(ju(He), ju(Ou))),
    Ru = function(t) {
      function e() {
        return function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, e), ku(this, Au(e).apply(this, arguments))
      }
      var n, r, o;
      return function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), e && Mu(t, e)
      }(e, Be(Tu(Ue))), n = e, o = [{
        key: "observedAttributes",
        get: function() {
          return this.getObservedAttributes()
        }
      }], (r = [{
        key: "getTemplate",
        value: function() {
          return null
        }
      }]) && Nu(n.prototype, r), o && Nu(n, o), e
    }();
  var Iu = function() {
      function t(t) {
        this.project = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new Lu(t, this.project))
      }, t
    }(),
    Lu = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.project = n, r.hasSubscription = !1, r.hasCompleted = !1, r.index = 0, r
      }
      return We(e, t), e.prototype._next = function(t) {
        this.hasSubscription || this.tryNext(t)
      }, e.prototype.tryNext = function(t) {
        var e, n = this.index++;
        try {
          e = this.project(t, n)
        } catch (t) {
          return void this.destination.error(t)
        }
        this.hasSubscription = !0, this._innerSub(e, t, n)
      }, e.prototype._innerSub = function(t, e, n) {
        var r = new nr(this, void 0, void 0);
        this.destination.add(r), ur(this, t, e, n, r)
      }, e.prototype._complete = function() {
        this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe()
      }, e.prototype.notifyNext = function(t, e, n, r, o) {
        this.destination.next(e)
      }, e.prototype.notifyError = function(t) {
        this.destination.error(t)
      }, e.prototype.notifyComplete = function(t) {
        this.destination.remove(t), this.hasSubscription = !1, this.hasCompleted && this.destination.complete()
      }, e
    }(er),
    Du = n(65),
    Fu = n.n(Du),
    Hu = n(89),
    qu = n.n(Hu);

  function Bu(t) {
    return function(e) {
      return e.lift(new Uu(t))
    }
  }
  var Uu = function() {
      function t(t) {
        this.callback = t
      }
      return t.prototype.call = function(t, e) {
        return e.subscribe(new zu(t, this.callback))
      }, t
    }(),
    zu = function(t) {
      function e(e, n) {
        var r = t.call(this, e) || this;
        return r.add(new nn(n)), r
      }
      return We(e, t), e
    }(an);

  function Wu(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function Vu(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
    }
  }
  var Xu = function(t) {
    var e = t.background,
      n = t.color,
      r = t.image,
      o = t.overlay;
    return "".concat(n).concat(r || e).concat("" === o ? "overlay" : "")
  };

  function $u(t) {
    var e = t.protocol,
      n = t.host,
      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
    return e !== r.protocol || n !== r.host
  }
  var Gu, Yu = function() {
      function t(e) {
        ! function(t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var n = document.getElementById("_main"),
          r = document.getElementById("_pageStyle"),
          o = Array.from(document.styleSheets).find(function(t) {
            return t.ownerNode === r
          }) || {};
        this.sidebar = document.getElementById("_sidebar"), this.fadeDuration = e, this.rules = o.cssRules || o.rules, this.prevHash = Xu(qu()(n)), this.themeColorEl = document.querySelector('meta[name="theme-color"]')
      }
      var e, n, r;
      return e = t, (n = [{
        key: "fetchImage2",
        value: function(t) {
          var e = t.background,
            n = t.image;
          if (e || !n || "" === n || "none" === n) return jn(null);
          var r = new URL(n, window.location);
          return Ur({
            method: "GET",
            responseType: "blob",
            url: r,
            crossDomain: $u(r),
            headers: {
              Accept: "image/*"
            }
          }).pipe(pr(function(t) {
            var e = t.response;
            return URL.createObjectURL(e)
          }), ea(function() {
            return jn(n)
          }))
        }
      }, {
        key: "fetchImage",
        value: function(t) {
          var e = qu()(t),
            n = e.background,
            r = e.color,
            o = e.image,
            i = e.overlay,
            s = Xu(e);
          return s === this.prevHash ? Tn() : this.fetchImage2(e).pipe(pr(function(t) {
            var a = document.createElement("div");
            return a.classList.add("sidebar-bg"), "none" !== o && "" === i && a.classList.add("sidebar-overlay"), n ? a.style.background = n : (a.style.backgroundColor = r, t && (a.style.backgroundImage = "url(".concat(t, ")"), a.objectURL = t)), [a, e, s]
          }))
        }
      }, {
        key: "updateStyle",
        value: function() {
          var t = this,
            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = e.color,
            r = void 0 === n ? "#4fb1ba" : n,
            o = e.themeColor,
            i = void 0 === o ? "#193747" : o;
          if (this.themeColorEl && window.setTimeout(function() {
              return t.themeColorEl.content = i
            }, 250), this.rules) try {
            var s = Fu()(r),
              a = s.darken(.1);
            Fu.a.hsl(tc.hue(), 12.5, 20), Fu.a.hsl(tc.hue(), 12.5, 27.5);
            this.rules[0].style.color = r, this.rules[0].style.borderColor = s.fade(.8).string(), this.rules[1].style.borderColor = r, this.rules[2].style.outlineColor = r, this.rules[3].style.backgroundColor = r, this.rules[3].style.borderColor = r, this.rules[4].style.boxShadow = "0 0 0 3px ".concat(s.fade(.5)), this.rules[5].style.backgroundColor = a, this.rules[5].style.borderColor = a, this.rules[6].style.backgroundColor = r, this.rules[6].style.borderColor = r, this.rules[7].style.backgroundColor = a, this.rules[7].style.borderColor = a, this.rules[this.rules.length - 1].style.backgroundColor = r
          } catch (t) {
            0
          }
        }
      }, {
        key: "fade",
        value: function(t, e) {
          var n = Wu(t, 1)[0],
            r = Wu(e, 3),
            o = r[0],
            i = r[1],
            s = r[2];
          return n.parentNode.insertBefore(o, n.nextElementSibling), this.updateStyle(i), this.prevHash = s, ti(o, [{
            opacity: 0
          }, {
            opacity: 1
          }], {
            duration: this.fadeDuration,
            easing: "ease"
          }).pipe(Bu(function() {
            n.objectURL && URL.revokeObjectURL(n.objectURL), n.parentNode.removeChild(n)
          }))
        }
      }]) && Vu(e.prototype, n), r && Vu(e, r), t
    }(),
    Ku = Zo(["classlist", "eventlistener", "queryselector"]);

  function Ju(t) {
    try {
      for (var e = t.previousElementSibling; e && !e.classList.contains("MathJax_Preview");) e = e.previousElementSibling;
      var n = t.textContent.replace("% <![CDATA[", "").replace("%]]>", "");
      t.outerHTML = window.katex.renderToString(n, {
        displayMode: "math/tex; mode=display" === t.type
      }), e && e.parentNode.removeChild(e)
    } catch (t) {
      0
    }
  }
  var Zu = function(t, e) {
      return new Promise(function(n) {
        return t(e).addEventListener("load", n)
      })
    },
    Qu = Ku ? function() {
      var t = document.querySelectorAll('script[type^="math/tex"]');
      t.length && (Gu || (Gu = Promise.all([Zu(loadJS, document.getElementById("_hrefKatexJS").href), Zu(loadCSS, document.getElementById("_hrefKatexCSS").href), Zu(loadJS, document.getElementById("_hrefKatexCopyJS").href), Zu(loadCSS, document.getElementById("_hrefKatexCopyCSS").href)])), Gu.then(function() {
        Array.from(t).forEach(Ju)
      }))
    } : function() {};

  function ec(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  Qu();
  var nc = ".page-title, .post-title";
  var rc = ["title"];

  function oc(t, e, n, r) {
    var o = t.pipe(so(function(t) {
      var e = t.flipType;
      return !rc.includes(e)
    }));
    return xr(function(t, e, n, r) {
      var o = r.animationMain,
        i = r.settings;
      if (!o) return t;
      var s = t.pipe(so(function(t) {
        return "title" === t.flipType
      }), Gr(function(t) {
        var e = t.anchor;
        if (!e) return jn({});
        var n = document.createElement("h1");
        n.classList.add("page-title"), n.textContent = e.textContent, n.style.transformOrigin = "left top";
        var r = o.querySelector(".page");
        if (!r) return jn({});
        Qo.call(r), r.appendChild(n), o.style.position = "fixed", o.style.opacity = 1;
        var s = e.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          u = parseInt(getComputedStyle(e).fontSize, 10),
          c = parseInt(getComputedStyle(n).fontSize, 10),
          l = s.left - a.left,
          f = s.top - a.top,
          h = u / c;
        return e.style.opacity = 0, ti(n, [{
          transform: "translate3d(".concat(l, "px, ").concat(f, "px, 0) scale(").concat(h, ")")
        }, {
          transform: "translate3d(0, 0, 0) scale(1)"
        }], i).pipe(ho({
          complete: function() {
            o.style.position = "absolute"
          }
        }))
      }));
      return t.pipe(Gr(function(t) {
        var r = t.flipType;
        return xa(e.pipe(so(function() {
          return "title" === r
        }), pr(function(t) {
          var e = ec(t.replaceEls, 1)[0].querySelector(nc);
          return e && (e.style.opacity = 0), e
        })), n, function(t) {
          return t
        }).pipe(ho(function(t) {
          t && (t.style.opacity = 1), o.style.opacity = 0
        }), Bu(function() {
          o.style.opacity = 0
        }))
      })).subscribe(), s
    }(t, e, n, r), o)
  }

  function ic(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      var n = [],
        r = !0,
        o = !1,
        i = void 0;
      try {
        for (var s, a = t[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t
      } finally {
        try {
          r || null == a.return || a.return()
        } finally {
          if (o) throw i
        }
      }
      return n
    }(t, e) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }
  var sc = new de([].concat(function(t) {
      return function(t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n
        }
      }(t) || function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
      }(t) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
      }()
    }(Pu), ["classlist", "cssanimations", "cssremunit", "documentfragment", "eventlistener", "history", "matchmedia", "opacity", "queryselector", "requestanimationframe"])),
    ac = [{
      opacity: 1
    }, {
      opacity: 0
    }],
    uc = [{
      opacity: 0,
      transform: "translateY(-3rem)"
    }, {
      opacity: 1,
      transform: "translateY(0)"
    }],
    cc = {
      duration: 350,
      easing: "ease-out",
      fill: "forwards"
    };

  function lc(t) {
    var e = ei("_permalink-template"),
      n = e.querySelector(".permalink");
    requestAnimationFrame(function() {
      return n.href = "#".concat(t.id), t.appendChild(e)
    })
  }

  function fc(t, e, n) {
    var r = ei(e);
    return r.querySelector(".nav-btn").addEventListener("click", n), t.appendChild(r), t.lastElementChild
  }

  function hc(t) {
    t.type;
    var e = t.main,
      n = ti(e, ac, cc).pipe(Bi({
        main: e
      }));
    return window._drawer && window._drawer.opened ? (window._drawer.close(), xa(n, Tr(window._drawer.el, "hy-drawer-transitioned").pipe(Xi(1)), function(t) {
      return t
    })) : n
  }

  function pc(t) {
    t.type;
    var e = ic(t.replaceEls, 1)[0],
      n = t.flipType;
    return ti(e, uc, cc).pipe(Bi({
      main: e,
      flipType: n
    }))
  }
  window._noPushState || !Zo(sc) || Yo || Jo.then(function() {
    var t = !!navigator.standalone || window.matchMedia("(display-mode: standalone)").matches,
      e = document.getElementsByTagName("hy-push-state")[0],
      n = document.querySelector("#_navbar > .content > .nav-btn-bar"),
      r = document.querySelector("link[rel=canonical]"),
      o = document.querySelector("meta[name=description]"),
      i = function(t) {
        var e = ei("_animation-template");
        return t.parentNode.insertBefore(e, t), t.previousElementSibling
      }(e),
      s = function(t) {
        var e = ei("_loading-template");
        return t.appendChild(e), t.lastElementChild
      }(n);
    t && (fc(n, "_back-template", function() {
      return window.history.back()
    }), fc(n, "_forward-template", function() {
      return window.history.forward()
    }));
    var a = Tr(e, "hy-push-state-start").pipe(pr(function(t) {
        var e, n = t.detail;
        return Object.assign(n, {
          flipType: (e = n.anchor, e && e.classList ? e.classList.contains("flip-title") ? "title" : e.classList.contains("flip-project") ? "project" : e.getAttribute && e.getAttribute("data-flip") : null)
        })
      }), io()),
      u = Tr(e, "hy-push-state-ready").pipe(pr(function(t) {
        return t.detail
      }), io()),
      c = Tr(e, "hy-push-state-after").pipe(pr(function(t) {
        return t.detail
      }), io()),
      l = Tr(e, "hy-push-state-progress").pipe(pr(function(t) {
        return t.detail
      }), io()),
      f = Tr(e, "hy-push-state-networkerror").pipe(pr(function(t) {
        return t.detail
      }), io()),
      h = a.pipe(pr(function(t) {
        return Object.assign(t, {
          main: document.getElementById("_main")
        })
      }), ho(function(t) {
        return t.main.style.pointerEvents = "none"
      }), function t(e, n) {
        return n ? function(r) {
          return r.pipe(t(function(t, r) {
            return br(e(t, r)).pipe(pr(function(e, o) {
              return n(t, e, r, o)
            }))
          }))
        } : function(t) {
          return t.lift(new Iu(e))
        }
      }(hc), ho(function(t) {
        var e = t.main;
        return Qo.call(e)
      }), io());
    l.subscribe(function() {
      return s.style.display = "block"
    }), u.pipe(Wr({
      replaceEls: [document.getElementById("_main")]
    })).subscribe(function(t) {
      var e = ic(t.replaceEls, 1)[0];
      e.classList.remove("fade-in"), requestAnimationFrame(function() {
        return s.style.display = "none"
      }), requestIdleCallback(function() {
        return Array.from(e.querySelectorAll("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]")).forEach(lc)
      })
    }), c.pipe(Wr({
      replaceEls: [document.getElementById("_main")],
      documentFragment: document
    })).subscribe(function(t) {
      var e = ic(t.replaceEls, 1)[0],
        n = t.documentFragment,
        i = n.querySelector("link[rel=canonical]");
      r && i && (r.href = i.href);
      var s = n.querySelector("meta[name=description]");
      o && s && (o.content = s.content), Array.from(e.querySelectorAll("li[id^='fn:']")).forEach(function(t) {
        return t.tabIndex = 0
      }), Array.from(e.querySelectorAll("a[href^='#fn:']")).forEach(function(t) {
        return t.addEventListener("click", function(t) {
          return document.getElementById(t.currentTarget.hash.substr(1)).focus()
        })
      })
    });
    var p = c.pipe(Gr(pc), io()),
      d = oc(a, u, xr(p, f), {
        animationMain: i,
        settings: cc
      }).pipe(io());
    a.pipe(Gr(function(t) {
      var e = xa(Za(350), h, d).toPromise();
      return t.transitionUntil(e), e
    })).subscribe(), h.subscribe(), d.subscribe();
    var y = new Yu(2e3);
    c.pipe(Gr(function(t) {
      var e = ic(t.replaceEls, 1)[0];
      return xa(y.fetchImage(e), p, function(t) {
        return t
      }).pipe(Vr(a))
    }), Wr([document.querySelector(".sidebar-bg")]), hi(), gr(function(t) {
      var e = ic(t, 2),
        n = e[0],
        r = e[1];
      return y.fade(n, r)
    })).subscribe(), p.subscribe(function() {
      return Qu()
    }), f.pipe(Gr(function(t) {
      var e = t.url;
      s.style.display = "none";
      var n = document.getElementById("_main");
      return n.style.pointerEvents = "", Qo.call(i.querySelector(".page")), Qo.call(n),
        function(t, e) {
          var n = e.pathname,
            r = ei("_error-template"),
            o = r.querySelector(".this-link");
          o && (o.href = n, o.textContent = n), t.appendChild(r), t.lastElementChild
        }(n, e), ti(n, uc, cc)
    })).subscribe(), window._pushState = function(t) {
      return window.customElements.define("hy-push-state", Ru), t
    }(e)
  }), window.ResizeObserver = window.ResizeObserver || r.a, i.a.polyfill()
}]);
