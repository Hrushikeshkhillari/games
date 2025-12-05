// script.js intentionally cleared. SecBypass is provided by `secbypass-only.js`
// Original application code removed per user request — backup saved as `script.js.bak`.
function zu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var mp = { exports: {} },
  Wa = {},
  gp = { exports: {} },
  ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = Symbol.for("react.element"),
  Qg = Symbol.for("react.portal"),
  Kg = Symbol.for("react.fragment"),
  Xg = Symbol.for("react.strict_mode"),
  Jg = Symbol.for("react.profiler"),
  Zg = Symbol.for("react.provider"),
  qg = Symbol.for("react.context"),
  $g = Symbol.for("react.forward_ref"),
  ev = Symbol.for("react.suspense"),
  tv = Symbol.for("react.memo"),
  nv = Symbol.for("react.lazy"),
  Sf = Symbol.iterator;
function rv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Sf && e[Sf]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yp = Object.assign,
  xp = {};
function Hr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = n || vp);
}
Hr.prototype.isReactComponent = {};
Hr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Hr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function wp() {}
wp.prototype = Hr.prototype;
function Uu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xp),
    (this.updater = n || vp);
}
var Hu = (Uu.prototype = new wp());
Hu.constructor = Uu;
yp(Hu, Hr.prototype);
Hu.isPureReactComponent = !0;
var kf = Array.isArray,
  Ap = Object.prototype.hasOwnProperty,
  Wu = { current: null },
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function kp(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Ap.call(t, r) && !Sp.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var l = Array(o), u = 0; u < o; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: Ji,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: Wu.current,
  };
}
function iv(e, t) {
  return {
    $$typeof: Ji,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Yu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ji;
}
function sv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Cf = /\/+/g;
function ko(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? sv("" + e.key)
    : t.toString(36);
}
function Ws(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ji:
          case Qg:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + ko(a, 0) : r),
      kf(i)
        ? ((n = ""),
          e != null && (n = e.replace(Cf, "$&/") + "/"),
          Ws(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (Yu(i) &&
            (i = iv(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Cf, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), kf(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var l = r + ko(s, o);
      a += Ws(s, t, n, l, i);
    }
  else if (((l = rv(e)), typeof l == "function"))
    for (e = l.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + ko(s, o++)), (a += Ws(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +"). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function hs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ws(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function av(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Ys = { transition: null },
  ov = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Ys,
    ReactCurrentOwner: Wu,
  };
function Cp() {
  throw Error("act(...) is not supported in production builds of React.");
}
ee.Children = {
  map: hs,
  forEach: function (e, t, n) {
    hs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      hs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      hs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Yu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
ee.Component = Hr;
ee.Fragment = Kg;
ee.Profiler = Jg;
ee.PureComponent = Uu;
ee.StrictMode = Xg;
ee.Suspense = ev;
ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ov;
ee.act = Cp;
ee.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = yp({}, e.props),
    i = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = Wu.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (l in t)
      Ap.call(t, l) &&
        !Sp.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && o !== void 0 ? o[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var u = 0; u < l; u++) o[u] = arguments[u + 2];
    r.children = o;
  }
  return { $$typeof: Ji, type: e.type, key: i, ref: s, props: r, _owner: a };
};
ee.createContext = function (e) {
  return (
    (e = {
      $$typeof: qg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zg, _context: e }),
    (e.Consumer = e)
  );
};
ee.createElement = kp;
ee.createFactory = function (e) {
  var t = kp.bind(null, e);
  return (t.type = e), t;
};
ee.createRef = function () {
  return { current: null };
};
ee.forwardRef = function (e) {
  return { $$typeof: $g, render: e };
};
ee.isValidElement = Yu;
ee.lazy = function (e) {
  return { $$typeof: nv, _payload: { _status: -1, _result: e }, _init: av };
};
ee.memo = function (e, t) {
  return { $$typeof: tv, type: e, compare: t === void 0 ? null : t };
};
ee.startTransition = function (e) {
  var t = Ys.transition;
  Ys.transition = {};
  try {
    e();
  } finally {
    Ys.transition = t;
  }
};
ee.unstable_act = Cp;
ee.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
ee.useContext = function (e) {
  return He.current.useContext(e);
};
ee.useDebugValue = function () {};
ee.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
ee.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
ee.useId = function () {
  return He.current.useId();
};
ee.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
ee.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
ee.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
ee.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
ee.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
ee.useRef = function (e) {
  return He.current.useRef(e);
};
ee.useState = function (e) {
  return He.current.useState(e);
};
ee.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
ee.useTransition = function () {
  return He.current.useTransition();
};
ee.version = "18.3.1";
gp.exports = ee;
var w = gp.exports;
const Zi = zu(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var lv = w,
  uv = Symbol.for("react.element"),
  cv = Symbol.for("react.fragment"),
  fv = Object.prototype.hasOwnProperty,
  dv = lv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  hv = { key: !0, ref: !0, __self: !0, __source: !0 };
function bp(e, t, n) {
  var r,
    i = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) fv.call(t, r) && !hv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: uv,
    type: e,
    key: s,
    ref: a,
    props: i,
    _owner: dv.current,
  };
}
Wa.Fragment = cv;
Wa.jsx = bp;
Wa.jsxs = bp;
mp.exports = Wa;
var f = mp.exports,
  jp = { exports: {} },
  nt = {},
  Ep = { exports: {} },
  Tp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(T, I) {
    var L = T.length;
    T.push(I);
    e: for (; 0 < L; ) {
      var D = (L - 1) >>> 1,
        U = T[D];
      if (0 < i(U, I)) (T[D] = I), (T[L] = U), (L = D);
      else break e;
    }
  }
  function n(T) {
    return T.length === 0 ? null : T[0];
  }
  function r(T) {
    if (T.length === 0) return null;
    var I = T[0],
      L = T.pop();
    if (L !== I) {
      T[0] = L;
      e: for (var D = 0, U = T.length, xe = U >>> 1; D < xe; ) {
        var P = 2 * (D + 1) - 1,
          q = T[P],
          O = P + 1,
          X = T[O];
        if (0 > i(q, L))
          O < U && 0 > i(X, q)
            ? ((T[D] = X), (T[O] = L), (D = O))
            : ((T[D] = q), (T[P] = L), (D = P));
        else if (O < U && 0 > i(X, L)) (T[D] = X), (T[O] = L), (D = O);
        else break e;
      }
    }
    return I;
  }
  function i(T, I) {
    var L = T.sortIndex - I.sortIndex;
    return L !== 0 ? L : T.id - I.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    u = [],
    c = 1,
    d = null,
    h = 3,
    p = !1,
    v = !1,
    y = !1,
    S = typeof setTimeout == "function" ? setTimeout : null,
    x = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function g(T) {
    for (var I = n(u); I !== null; ) {
      if (I.callback === null) r(u);
      else if (I.startTime <= T)
        r(u), (I.sortIndex = I.expirationTime), t(l, I);
      else break;
      I = n(u);
    }
  }
  function A(T) {
    if (((y = !1), g(T), !v))
      if (n(l) !== null) (v = !0), z(k);
      else {
        var I = n(u);
        I !== null && _(A, I.startTime - T);
      }
  }
  function k(T, I) {
    (v = !1), y && ((y = !1), x(j), (j = -1)), (p = !0);
    var L = h;
    try {
      for (
        g(I), d = n(l);
        d !== null && (!(d.expirationTime > I) || (T && !R()));

      ) {
        var D = d.callback;
        if (typeof D == "function") {
          (d.callback = null), (h = d.priorityLevel);
          var U = D(d.expirationTime <= I);
          (I = e.unstable_now()),
            typeof U == "function" ? (d.callback = U) : d === n(l) && r(l),
            g(I);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var xe = !0;
      else {
        var P = n(u);
        P !== null && _(A, P.startTime - I), (xe = !1);
      }
      return xe;
    } finally {
      (d = null), (h = L), (p = !1);
    }
  }
  var b = !1,
    C = null,
    j = -1,
    E = 5,
    N = -1;
  function R() {
    return !(e.unstable_now() - N < E);
  }
  function V() {
    if (C !== null) {
      var T = e.unstable_now();
      N = T;
      var I = !0;
      try {
        I = C(!0, T);
      } finally {
        I ? B() : ((b = !1), (C = null));
      }
    } else b = !1;
  }
  var B;
  if (typeof m == "function")
    B = function () {
      m(V);
    };
  else if (typeof MessageChannel < "u") {
    var F = new MessageChannel(),
      G = F.port2;
    (F.port1.onmessage = V),
      (B = function () {
        G.postMessage(null);
      });
  } else
    B = function () {
      S(V, 0);
    };
  function z(T) {
    (C = T), b || ((b = !0), B());
  }
  function _(T, I) {
    j = S(function () {
      T(e.unstable_now());
    }, I);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (T) {
      T.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || p || ((v = !0), z(k));
    }),
    (e.unstable_forceFrameRate = function (T) {
      0 > T || 125 < T
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (E = 0 < T ? Math.floor(1e3 / T) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (T) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = h;
      }
      var L = h;
      h = I;
      try {
        return T();
      } finally {
        h = L;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (T, I) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var L = h;
      h = T;
      try {
        return I();
      } finally {
        h = L;
      }
    }),
    (e.unstable_scheduleCallback = function (T, I, L) {
      var D = e.unstable_now();
      switch (
        (typeof L == "object" && L !== null
          ? ((L = L.delay), (L = typeof L == "number" && 0 < L ? D + L : D))
          : (L = D),
        T)
      ) {
        case 1:
          var U = -1;
          break;
        case 2:
          U = 250;
          break;
        case 5:
          U = 1073741823;
          break;
        case 4:
          U = 1e4;
          break;
        default:
          U = 5e3;
      }
      return (
        (U = L + U),
        (T = {
          id: c++,
          callback: I,
          priorityLevel: T,
          startTime: L,
          expirationTime: U,
          sortIndex: -1,
        }),
        L > D
          ? ((T.sortIndex = L),
            t(u, T),
            n(l) === null &&
              T === n(u) &&
              (y ? (x(j), (j = -1)) : (y = !0), _(A, L - D)))
          : ((T.sortIndex = U), t(l, T), v || p || ((v = !0), z(k))),
        T
      );
    }),
    (e.unstable_shouldYield = R),
    (e.unstable_wrapCallback = function (T) {
      var I = h;
      return function () {
        var L = h;
        h = I;
        try {
          return T.apply(this, arguments);
        } finally {
          h = L;
        }
      };
    });
})(Tp);
Ep.exports = Tp;
var pv = Ep.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var mv = w,
  et = pv;
function M(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Pp = new Set(),
  bi = {};
function $n(e, t) {
  Ir(e, t), Ir(e + "Capture", t);
}
function Ir(e, t) {
  for (bi[e] = t, e = 0; e < t.length; e++) Pp.add(t[e]);
}
var Ht = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ml = Object.prototype.hasOwnProperty,
  gv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  bf = {},
  jf = {};
function vv(e) {
  return ml.call(jf, e)
    ? !0
    : ml.call(bf, e)
    ? !1
    : gv.test(e)
    ? (jf[e] = !0)
    : ((bf[e] = !0), !1);
}
function yv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function xv(e, t, n, r) {
  if (t === null || typeof t > "u" || yv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function We(e, t, n, r, i, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var Ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new We(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ie[t] = new We(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ie[e] = new We(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ie[e] = new We(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ie[e] = new We(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ie[e] = new We(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ie[e] = new We(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ie[e] = new We(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ie[e] = new We(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Gu = /[\-:]([a-z])/g;
function _u(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gu, _u);
    Ie[t] = new We(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Gu, _u);
    Ie[t] = new We(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Gu, _u);
  Ie[t] = new We(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ie[e] = new We(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ie.xlinkHref = new We(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ie[e] = new We(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qu(e, t, n, r) {
  var i = Ie.hasOwnProperty(t) ? Ie[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (xv(t, n, i, r) && (n = null),
    r || i === null
      ? vv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Jt = mv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ps = Symbol.for("react.element"),
  ar = Symbol.for("react.portal"),
  or = Symbol.for("react.fragment"),
  Ku = Symbol.for("react.strict_mode"),
  gl = Symbol.for("react.profiler"),
  Np = Symbol.for("react.provider"),
  Lp = Symbol.for("react.context"),
  Xu = Symbol.for("react.forward_ref"),
  vl = Symbol.for("react.suspense"),
  yl = Symbol.for("react.suspense_list"),
  Ju = Symbol.for("react.memo"),
  tn = Symbol.for("react.lazy"),
  Ip = Symbol.for("react.offscreen"),
  Ef = Symbol.iterator;
function Qr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ef && e[Ef]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ge = Object.assign,
  Co;
function ii(e) {
  if (Co === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Co = (t && t[1]) || "";
    }
  return (
    `
` +
    Co +
    e
  );
}
var bo = !1;
function jo(e, t) {
  if (!e || bo) return "";
  bo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          s = r.stack.split(`
`),
          a = i.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && i[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== s[o])) {
                var l =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (bo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ii(e) : "";
}
function wv(e) {
  switch (e.tag) {
    case 5:
      return ii(e.type);
    case 16:
      return ii("Lazy");
    case 13:
      return ii("Suspense");
    case 19:
      return ii("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = jo(e.type, !1)), e;
    case 11:
      return (e = jo(e.type.render, !1)), e;
    case 1:
      return (e = jo(e.type, !0)), e;
    default:
      return "";
  }
}
function xl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case or:
      return "Fragment";
    case ar:
      return "Portal";
    case gl:
      return "Profiler";
    case Ku:
      return "StrictMode";
    case vl:
      return "Suspense";
    case yl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Lp:
        return (e.displayName || "Context") + ".Consumer";
      case Np:
        return (e._context.displayName || "Context") + ".Provider";
      case Xu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Ju:
        return (
          (t = e.displayName || null), t !== null ? t : xl(e.type) || "Memo"
        );
      case tn:
        (t = e._payload), (e = e._init);
        try {
          return xl(e(t));
        } catch {}
    }
  return null;
}
function Av(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return xl(t);
    case 8:
      return t === Ku ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function xn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Rp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Sv(e) {
  var t = Rp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ms(e) {
  e._valueTracker || (e._valueTracker = Sv(e));
}
function Op(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Rp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function aa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function wl(e, t) {
  var n = t.checked;
  return ge({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Tf(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = xn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Mp(e, t) {
  (t = t.checked), t != null && Qu(e, "checked", t, !1);
}
function Al(e, t) {
  Mp(e, t);
  var n = xn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Sl(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Sl(e, t.type, xn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Pf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Sl(e, t, n) {
  (t !== "number" || aa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var si = Array.isArray;
function br(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function kl(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(M(91));
  return ge({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Nf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(M(92));
      if (si(n)) {
        if (1 < n.length) throw Error(M(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: xn(n) };
}
function Dp(e, t) {
  var n = xn(t.value),
    r = xn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Lf(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Cl(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Vp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var gs,
  Bp = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        gs = gs || document.createElement("div"),
          gs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = gs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ji(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var ci = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  kv = ["Webkit", "ms", "Moz", "O"];
Object.keys(ci).forEach(function (e) {
  kv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ci[t] = ci[e]);
  });
});
function Fp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (ci.hasOwnProperty(e) && ci[e])
    ? ("" + t).trim()
    : t + "px";
}
function zp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = Fp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Cv = ge(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function bl(e, t) {
  if (t) {
    if (Cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(M(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(M(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(M(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(M(62));
  }
}
function jl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var El = null;
function Zu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Tl = null,
  jr = null,
  Er = null;
function If(e) {
  if ((e = es(e))) {
    if (typeof Tl != "function") throw Error(M(280));
    var t = e.stateNode;
    t && ((t = Ka(t)), Tl(e.stateNode, e.type, t));
  }
}
function Up(e) {
  jr ? (Er ? Er.push(e) : (Er = [e])) : (jr = e);
}
function Hp() {
  if (jr) {
    var e = jr,
      t = Er;
    if (((Er = jr = null), If(e), t)) for (e = 0; e < t.length; e++) If(t[e]);
  }
}
function Wp(e, t) {
  return e(t);
}
function Yp() {}
var Eo = !1;
function Gp(e, t, n) {
  if (Eo) return e(t, n);
  Eo = !0;
  try {
    return Wp(e, t, n);
  } finally {
    (Eo = !1), (jr !== null || Er !== null) && (Yp(), Hp());
  }
}
function Ei(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ka(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(M(231, t, typeof n));
  return n;
}
var Pl = !1;
if (Ht)
  try {
    var Kr = {};
    Object.defineProperty(Kr, "passive", {
      get: function () {
        Pl = !0;
      },
    }),
      window.addEventListener("test", Kr, Kr),
      window.removeEventListener("test", Kr, Kr);
  } catch {
    Pl = !1;
  }
function bv(e, t, n, r, i, s, a, o, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var fi = !1,
  oa = null,
  la = !1,
  Nl = null,
  jv = {
    onError: function (e) {
      (fi = !0), (oa = e);
    },
  };
function Ev(e, t, n, r, i, s, a, o, l) {
  (fi = !1), (oa = null), bv.apply(jv, arguments);
}
function Tv(e, t, n, r, i, s, a, o, l) {
  if ((Ev.apply(this, arguments), fi)) {
    if (fi) {
      var u = oa;
      (fi = !1), (oa = null);
    } else throw Error(M(198));
    la || ((la = !0), (Nl = u));
  }
}
function er(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _p(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Rf(e) {
  if (er(e) !== e) throw Error(M(188));
}
function Pv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = er(e)), t === null)) throw Error(M(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return Rf(i), e;
        if (s === r) return Rf(i), t;
        s = s.sibling;
      }
      throw Error(M(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          (a = !0), (n = i), (r = s);
          break;
        }
        if (o === r) {
          (a = !0), (r = i), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (r = i);
            break;
          }
          if (o === r) {
            (a = !0), (r = s), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(M(189));
      }
    }
    if (n.alternate !== r) throw Error(M(190));
  }
  if (n.tag !== 3) throw Error(M(188));
  return n.stateNode.current === n ? e : t;
}
function Qp(e) {
  return (e = Pv(e)), e !== null ? Kp(e) : null;
}
function Kp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Kp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xp = et.unstable_scheduleCallback,
  Of = et.unstable_cancelCallback,
  Nv = et.unstable_shouldYield,
  Lv = et.unstable_requestPaint,
  we = et.unstable_now,
  Iv = et.unstable_getCurrentPriorityLevel,
  qu = et.unstable_ImmediatePriority,
  Jp = et.unstable_UserBlockingPriority,
  ua = et.unstable_NormalPriority,
  Rv = et.unstable_LowPriority,
  Zp = et.unstable_IdlePriority,
  Ya = null,
  Pt = null;
function Ov(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Ya, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var wt = Math.clz32 ? Math.clz32 : Vv,
  Mv = Math.log,
  Dv = Math.LN2;
function Vv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Mv(e) / Dv) | 0)) | 0;
}
var vs = 64,
  ys = 4194304;
function ai(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ca(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (r = ai(o)) : ((s &= a), s !== 0 && (r = ai(s)));
  } else (a = n & ~i), a !== 0 ? (r = ai(a)) : s !== 0 && (r = ai(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - wt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function Bv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Fv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - wt(s),
      o = 1 << a,
      l = i[a];
    l === -1
      ? (!(o & n) || o & r) && (i[a] = Bv(o, t))
      : l <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Ll(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qp() {
  var e = vs;
  return (vs <<= 1), !(vs & 4194240) && (vs = 64), e;
}
function To(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function qi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - wt(t)),
    (e[t] = n);
}
function zv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - wt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function $u(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - wt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var ie = 0;
function $p(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var em,
  ec,
  tm,
  nm,
  rm,
  Il = !1,
  xs = [],
  cn = null,
  fn = null,
  dn = null,
  Ti = new Map(),
  Pi = new Map(),
  sn = [],
  Uv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      cn = null;
      break;
    case "dragenter":
    case "dragleave":
      fn = null;
      break;
    case "mouseover":
    case "mouseout":
      dn = null;
      break;
    case "pointerover":
    case "pointerout":
      Ti.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pi.delete(t.pointerId);
  }
}
function Xr(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = es(t)), t !== null && ec(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function Hv(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (cn = Xr(cn, e, t, n, r, i)), !0;
    case "dragenter":
      return (fn = Xr(fn, e, t, n, r, i)), !0;
    case "mouseover":
      return (dn = Xr(dn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return Ti.set(s, Xr(Ti.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), Pi.set(s, Xr(Pi.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function im(e) {
  var t = Vn(e.target);
  if (t !== null) {
    var n = er(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _p(n)), t !== null)) {
          (e.blockedOn = t),
            rm(e.priority, function () {
              tm(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gs(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (El = r), n.target.dispatchEvent(r), (El = null);
    } else return (t = es(n)), t !== null && ec(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Df(e, t, n) {
  Gs(e) && n.delete(t);
}
function Wv() {
  (Il = !1),
    cn !== null && Gs(cn) && (cn = null),
    fn !== null && Gs(fn) && (fn = null),
    dn !== null && Gs(dn) && (dn = null),
    Ti.forEach(Df),
    Pi.forEach(Df);
}
function Jr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Il ||
      ((Il = !0),
      et.unstable_scheduleCallback(et.unstable_NormalPriority, Wv)));
}
function Ni(e) {
  function t(i) {
    return Jr(i, e);
  }
  if (0 < xs.length) {
    Jr(xs[0], e);
    for (var n = 1; n < xs.length; n++) {
      var r = xs[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    cn !== null && Jr(cn, e),
      fn !== null && Jr(fn, e),
      dn !== null && Jr(dn, e),
      Ti.forEach(t),
      Pi.forEach(t),
      n = 0;
    n < sn.length;
    n++
  )
    (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
    im(n), n.blockedOn === null && sn.shift();
}
var Tr = Jt.ReactCurrentBatchConfig,
  fa = !0;
function Yv(e, t, n, r) {
  var i = ie,
    s = Tr.transition;
  Tr.transition = null;
  try {
    (ie = 1), tc(e, t, n, r);
  } finally {
    (ie = i), (Tr.transition = s);
  }
}
function Gv(e, t, n, r) {
  var i = ie,
    s = Tr.transition;
  Tr.transition = null;
  try {
    (ie = 4), tc(e, t, n, r);
  } finally {
    (ie = i), (Tr.transition = s);
  }
}
function tc(e, t, n, r) {
  if (fa) {
    var i = Rl(e, t, n, r);
    if (i === null) Bo(e, t, r, da, n), Mf(e, r);
    else if (Hv(i, e, t, n, r)) r.stopPropagation();
    else if ((Mf(e, r), t & 4 && -1 < Uv.indexOf(e))) {
      for (; i !== null; ) {
        var s = es(i);
        if (
          (s !== null && em(s),
          (s = Rl(e, t, n, r)),
          s === null && Bo(e, t, r, da, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Bo(e, t, r, null, n);
  }
}
var da = null;
function Rl(e, t, n, r) {
  if (((da = null), (e = Zu(r)), (e = Vn(e)), e !== null))
    if (((t = er(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _p(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (da = e), null;
}
function sm(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Iv()) {
        case qu:
          return 1;
        case Jp:
          return 4;
        case ua:
        case Rv:
          return 16;
        case Zp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var on = null,
  nc = null,
  _s = null;
function am() {
  if (_s) return _s;
  var e,
    t = nc,
    n = t.length,
    r,
    i = "value" in on ? on.value : on.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[s - r]; r++);
  return (_s = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Qs(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ws() {
  return !0;
}
function Vf() {
  return !1;
}
function rt(e) {
  function t(n, r, i, s, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ws
        : Vf),
      (this.isPropagationStopped = Vf),
      this
    );
  }
  return (
    ge(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ws));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ws));
      },
      persist: function () {},
      isPersistent: ws,
    }),
    t
  );
}
var Wr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  rc = rt(Wr),
  $i = ge({}, Wr, { view: 0, detail: 0 }),
  _v = rt($i),
  Po,
  No,
  Zr,
  Ga = ge({}, $i, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ic,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Zr &&
            (Zr && e.type === "mousemove"
              ? ((Po = e.screenX - Zr.screenX), (No = e.screenY - Zr.screenY))
              : (No = Po = 0),
            (Zr = e)),
          Po);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : No;
    },
  }),
  Bf = rt(Ga),
  Qv = ge({}, Ga, { dataTransfer: 0 }),
  Kv = rt(Qv),
  Xv = ge({}, $i, { relatedTarget: 0 }),
  Lo = rt(Xv),
  Jv = ge({}, Wr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zv = rt(Jv),
  qv = ge({}, Wr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $v = rt(qv),
  ey = ge({}, Wr, { data: 0 }),
  Ff = rt(ey),
  ty = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  ny = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function iy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
}
function ic() {
  return iy;
}
var sy = ge({}, $i, {
    key: function (e) {
      if (e.key) {
        var t = ty[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Qs(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? ny[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ic,
    charCode: function (e) {
      return e.type === "keypress" ? Qs(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Qs(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ay = rt(sy),
  oy = ge({}, Ga, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  zf = rt(oy),
  ly = ge({}, $i, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ic,
  }),
  uy = rt(ly),
  cy = ge({}, Wr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fy = rt(cy),
  dy = ge({}, Ga, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hy = rt(dy),
  py = [9, 13, 27, 32],
  sc = Ht && "CompositionEvent" in window,
  di = null;
Ht && "documentMode" in document && (di = document.documentMode);
var my = Ht && "TextEvent" in window && !di,
  om = Ht && (!sc || (di && 8 < di && 11 >= di)),
  Uf = " ",
  Hf = !1;
function lm(e, t) {
  switch (e) {
    case "keyup":
      return py.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function um(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var lr = !1;
function gy(e, t) {
  switch (e) {
    case "compositionend":
      return um(t);
    case "keypress":
      return t.which !== 32 ? null : ((Hf = !0), Uf);
    case "textInput":
      return (e = t.data), e === Uf && Hf ? null : e;
    default:
      return null;
  }
}
function vy(e, t) {
  if (lr)
    return e === "compositionend" || (!sc && lm(e, t))
      ? ((e = am()), (_s = nc = on = null), (lr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return om && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var yy = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Wf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!yy[e.type] : t === "textarea";
}
function cm(e, t, n, r) {
  Up(r),
    (t = ha(t, "onChange")),
    0 < t.length &&
      ((n = new rc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var hi = null,
  Li = null;
function xy(e) {
  Am(e, 0);
}
function _a(e) {
  var t = fr(e);
  if (Op(t)) return e;
}
function wy(e, t) {
  if (e === "change") return t;
}
var fm = !1;
if (Ht) {
  var Io;
  if (Ht) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var Yf = document.createElement("div");
      Yf.setAttribute("oninput", "return;"),
        (Ro = typeof Yf.oninput == "function");
    }
    Io = Ro;
  } else Io = !1;
  fm = Io && (!document.documentMode || 9 < document.documentMode);
}
function Gf() {
  hi && (hi.detachEvent("onpropertychange", dm), (Li = hi = null));
}
function dm(e) {
  if (e.propertyName === "value" && _a(Li)) {
    var t = [];
    cm(t, Li, e, Zu(e)), Gp(xy, t);
  }
}
function Ay(e, t, n) {
  e === "focusin"
    ? (Gf(), (hi = t), (Li = n), hi.attachEvent("onpropertychange", dm))
    : e === "focusout" && Gf();
}
function Sy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _a(Li);
}
function ky(e, t) {
  if (e === "click") return _a(t);
}
function Cy(e, t) {
  if (e === "input" || e === "change") return _a(t);
}
function by(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : by;
function Ii(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!ml.call(t, i) || !St(e[i], t[i])) return !1;
  }
  return !0;
}
function _f(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Qf(e, t) {
  var n = _f(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = _f(n);
  }
}
function hm(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? hm(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pm() {
  for (var e = window, t = aa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = aa(e.document);
  }
  return t;
}
function ac(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function jy(e) {
  var t = pm(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    hm(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ac(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Qf(n, s));
        var a = Qf(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Ey = Ht && "documentMode" in document && 11 >= document.documentMode,
  ur = null,
  Ol = null,
  pi = null,
  Ml = !1;
function Kf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ml ||
    ur == null ||
    ur !== aa(r) ||
    ((r = ur),
    "selectionStart" in r && ac(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (pi && Ii(pi, r)) ||
      ((pi = r),
      (r = ha(Ol, "onSelect")),
      0 < r.length &&
        ((t = new rc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = ur))));
}
function As(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var cr = {
    animationend: As("Animation", "AnimationEnd"),
    animationiteration: As("Animation", "AnimationIteration"),
    animationstart: As("Animation", "AnimationStart"),
    transitionend: As("Transition", "TransitionEnd"),
  },
  Oo = {},
  mm = {};
Ht &&
  ((mm = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete cr.animationend.animation,
    delete cr.animationiteration.animation,
    delete cr.animationstart.animation),
  "TransitionEvent" in window || delete cr.transitionend.transition);
function Qa(e) {
  if (Oo[e]) return Oo[e];
  if (!cr[e]) return e;
  var t = cr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in mm) return (Oo[e] = t[n]);
  return e;
}
var gm = Qa("animationend"),
  vm = Qa("animationiteration"),
  ym = Qa("animationstart"),
  xm = Qa("transitionend"),
  wm = new Map(),
  Xf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function jn(e, t) {
  wm.set(e, t), $n(t, [e]);
}
for (var Mo = 0; Mo < Xf.length; Mo++) {
  var Do = Xf[Mo],
    Ty = Do.toLowerCase(),
    Py = Do[0].toUpperCase() + Do.slice(1);
  jn(Ty, "on" + Py);
}
jn(gm, "onAnimationEnd");
jn(vm, "onAnimationIteration");
jn(ym, "onAnimationStart");
jn("dblclick", "onDoubleClick");
jn("focusin", "onFocus");
jn("focusout", "onBlur");
jn(xm, "onTransitionEnd");
Ir("onMouseEnter", ["mouseout", "mouseover"]);
Ir("onMouseLeave", ["mouseout", "mouseover"]);
Ir("onPointerEnter", ["pointerout", "pointerover"]);
Ir("onPointerLeave", ["pointerout", "pointerover"]);
$n(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
$n(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
$n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$n(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
$n(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var oi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ny = new Set("cancel close invalid load scroll toggle".split(" ").concat(oi));
function Jf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Tv(r, t, void 0, e), (e.currentTarget = null);
}
function Am(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            l = o.instance,
            u = o.currentTarget;
          if (((o = o.listener), l !== s && i.isPropagationStopped())) break e;
          Jf(i, o, u), (s = l);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (l = o.instance),
            (u = o.currentTarget),
            (o = o.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          Jf(i, o, u), (s = l);
        }
    }
  }
  if (la) throw ((e = Nl), (la = !1), (Nl = null), e);
}
function oe(e, t) {
  var n = t[zl];
  n === void 0 && (n = t[zl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Sm(t, e, 2, !1), n.add(r));
}
function Vo(e, t, n) {
  var r = 0;
  t && (r |= 4), Sm(n, e, r, t);
}
var Ss = "_reactListening" + Math.random().toString(36).slice(2);
function Ri(e) {
  if (!e[Ss]) {
    (e[Ss] = !0),
      Pp.forEach(function (n) {
        n !== "selectionchange" && (Ny.has(n) || Vo(n, !1, e), Vo(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ss] || ((t[Ss] = !0), Vo("selectionchange", !1, t));
  }
}
function Sm(e, t, n, r) {
  switch (sm(t)) {
    case 1:
      var i = Yv;
      break;
    case 4:
      i = Gv;
      break;
    default:
      i = tc;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Pl ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Bo(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Vn(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Gp(function () {
    var u = s,
      c = Zu(n),
      d = [];
    e: {
      var h = wm.get(e);
      if (h !== void 0) {
        var p = rc,
          v = e;
        switch (e) {
          case "keypress":
            if (Qs(n) === 0) break e;
          case "keydown":
          case "keyup":
            p = ay;
            break;
          case "focusin":
            (v = "focus"), (p = Lo);
            break;
          case "focusout":
            (v = "blur"), (p = Lo);
            break;
          case "beforeblur":
          case "afterblur":
            p = Lo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            p = Bf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            p = Kv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            p = uy;
            break;
          case gm:
          case vm:
          case ym:
            p = Zv;
            break;
          case xm:
            p = fy;
            break;
          case "scroll":
            p = _v;
            break;
          case "wheel":
            p = hy;
            break;
          case "copy":
          case "cut":
          case "paste":
            p = $v;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            p = zf;
        }
        var y = (t & 4) !== 0,
          S = !y && e === "scroll",
          x = y ? (h !== null ? h + "Capture" : null) : h;
        y = [];
        for (var m = u, g; m !== null; ) {
          g = m;
          var A = g.stateNode;
          if (
            (g.tag === 5 &&
              A !== null &&
              ((g = A),
              x !== null && ((A = Ei(m, x)), A != null && y.push(Oi(m, A, g)))),
            S)
          )
            break;
          m = m.return;
        }
        0 < y.length &&
          ((h = new p(h, v, null, n, c)), d.push({ event: h, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((h = e === "mouseover" || e === "pointerover"),
          (p = e === "mouseout" || e === "pointerout"),
          h &&
            n !== El &&
            (v = n.relatedTarget || n.fromElement) &&
            (Vn(v) || v[Wt]))
        )
          break e;
        if (
          (p || h) &&
          ((h =
            c.window === c
              ? c
              : (h = c.ownerDocument)
              ? h.defaultView || h.parentWindow
              : window),
          p
            ? ((v = n.relatedTarget || n.toElement),
              (p = u),
              (v = v ? Vn(v) : null),
              v !== null &&
                ((S = er(v)), v !== S || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((p = null), (v = u)),
          p !== v)
        ) {
          if (
            ((y = Bf),
            (A = "onMouseLeave"),
            (x = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = zf),
              (A = "onPointerLeave"),
              (x = "onPointerEnter"),
              (m = "pointer")),
            (S = p == null ? h : fr(p)),
            (g = v == null ? h : fr(v)),
            (h = new y(A, m + "leave", p, n, c)),
            (h.target = S),
            (h.relatedTarget = g),
            (A = null),
            Vn(c) === u &&
              ((y = new y(x, m + "enter", v, n, c)),
              (y.target = g),
              (y.relatedTarget = S),
              (A = y)),
            (S = A),
            p && v)
          )
            t: {
              for (y = p, x = v, m = 0, g = y; g; g = ir(g)) m++;
              for (g = 0, A = x; A; A = ir(A)) g++;
              for (; 0 < m - g; ) (y = ir(y)), m--;
              for (; 0 < g - m; ) (x = ir(x)), g--;
              for (; m--; ) {
                if (y === x || (x !== null && y === x.alternate)) break t;
                (y = ir(y)), (x = ir(x));
              }
              y = null;
            }
          else y = null;
          p !== null && Zf(d, h, p, y, !1),
            v !== null && S !== null && Zf(d, S, v, y, !0);
        }
      }
      e: {
        if (
          ((h = u ? fr(u) : window),
          (p = h.nodeName && h.nodeName.toLowerCase()),
          p === "select" || (p === "input" && h.type === "file"))
        )
          var k = wy;
        else if (Wf(h))
          if (fm) k = Cy;
          else {
            k = Sy;
            var b = Ay;
          }
        else
          (p = h.nodeName) &&
            p.toLowerCase() === "input" &&
            (h.type === "checkbox" || h.type === "radio") &&
            (k = ky);
        if (k && (k = k(e, u))) {
          cm(d, k, n, c);
          break e;
        }
        b && b(e, h, u),
          e === "focusout" &&
            (b = h._wrapperState) &&
            b.controlled &&
            h.type === "number" &&
            Sl(h, "number", h.value);
      }
      switch (((b = u ? fr(u) : window), e)) {
        case "focusin":
          (Wf(b) || b.contentEditable === "true") &&
            ((ur = b), (Ol = u), (pi = null));
          break;
        case "focusout":
          pi = Ol = ur = null;
          break;
        case "mousedown":
          Ml = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ml = !1), Kf(d, n, c);
          break;
        case "selectionchange":
          if (Ey) break;
        case "keydown":
        case "keyup":
          Kf(d, n, c);
      }
      var C;
      if (sc)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        lr
          ? lm(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (om &&
          n.locale !== "ko" &&
          (lr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && lr && (C = am())
            : ((on = c),
              (nc = "value" in on ? on.value : on.textContent),
              (lr = !0))),
        (b = ha(u, j)),
        0 < b.length &&
          ((j = new Ff(j, e, null, n, c)),
          d.push({ event: j, listeners: b }),
          C ? (j.data = C) : ((C = um(n)), C !== null && (j.data = C)))),
        (C = my ? gy(e, n) : vy(e, n)) &&
          ((u = ha(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new Ff("onBeforeInput", "beforeinput", null, n, c)),
            d.push({ event: c, listeners: u }),
            (c.data = C)));
    }
    Am(d, t);
  });
}
function Oi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ha(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = Ei(e, n)),
      s != null && r.unshift(Oi(e, s, i)),
      (s = Ei(e, t)),
      s != null && r.push(Oi(e, s, i))),
      (e = e.return);
  }
  return r;
}
function ir(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Zf(e, t, n, r, i) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      l = o.alternate,
      u = o.stateNode;
    if (l !== null && l === r) break;
    o.tag === 5 &&
      u !== null &&
      ((o = u),
      i
        ? ((l = Ei(n, s)), l != null && a.unshift(Oi(n, l, o)))
        : i || ((l = Ei(n, s)), l != null && a.push(Oi(n, l, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ly = /\r\n?/g,
  Iy = /\u0000|\uFFFD/g;
function qf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ly,
      `
`
    )
    .replace(Iy, "");
}
function ks(e, t, n) {
  if (((t = qf(t)), qf(e) !== t && n)) throw Error(M(425));
}
function pa() {}
var Dl = null,
  Vl = null;
function Bl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Fl = typeof setTimeout == "function" ? setTimeout : void 0,
  Ry = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $f = typeof Promise == "function" ? Promise : void 0,
  Oy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $f < "u"
      ? function (e) {
          return $f.resolve(null).then(e).catch(My);
        }
      : Fl;
function My(e) {
  setTimeout(function () {
    throw e;
  });
}
function Fo(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), Ni(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  Ni(t);
}
function hn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ed(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yr = Math.random().toString(36).slice(2),
  Et = "__reactFiber$" + Yr,
  Mi = "__reactProps$" + Yr,
  Wt = "__reactContainer$" + Yr,
  zl = "__reactEvents$" + Yr,
  Dy = "__reactListeners$" + Yr,
  Vy = "__reactHandles$" + Yr;
function Vn(e) {
  var t = e[Et];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Wt] || n[Et])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ed(e); e !== null; ) {
          if ((n = e[Et])) return n;
          e = ed(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function es(e) {
  return (
    (e = e[Et] || e[Wt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function fr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(M(33));
}
function Ka(e) {
  return e[Mi] || null;
}
var Ul = [],
  dr = -1;
function En(e) {
  return { current: e };
}
function ue(e) {
  0 > dr || ((e.current = Ul[dr]), (Ul[dr] = null), dr--);
}
function se(e, t) {
  dr++, (Ul[dr] = e.current), (e.current = t);
}
var wn = {},
  Ve = En(wn),
  _e = En(!1),
  _n = wn;
function Rr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Qe(e) {
  return (e = e.childContextTypes), e != null;
}
function ma() {
  ue(_e), ue(Ve);
}
function td(e, t, n) {
  if (Ve.current !== wn) throw Error(M(168));
  se(Ve, t), se(_e, n);
}
function km(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(M(108, Av(e) || "Unknown", i));
  return ge({}, n, r);
}
function ga(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || wn),
    (_n = Ve.current),
    se(Ve, e),
    se(_e, _e.current),
    !0
  );
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(M(169));
  n
    ? ((e = km(e, t, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      ue(_e),
      ue(Ve),
      se(Ve, e))
    : ue(_e),
    se(_e, n);
}
var Ot = null,
  Xa = !1,
  zo = !1;
function Cm(e) {
  Ot === null ? (Ot = [e]) : Ot.push(e);
}
function By(e) {
  (Xa = !0), Cm(e);
}
function Tn() {
  if (!zo && Ot !== null) {
    zo = !0;
    var e = 0,
      t = ie;
    try {
      var n = Ot;
      for (ie = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ot = null), (Xa = !1);
    } catch (i) {
      throw (Ot !== null && (Ot = Ot.slice(e + 1)), Xp(qu, Tn), i);
    } finally {
      (ie = t), (zo = !1);
    }
  }
  return null;
}
var hr = [],
  pr = 0,
  va = null,
  ya = 0,
  ut = [],
  ct = 0,
  Qn = null,
  Mt = 1,
  Dt = "";
function In(e, t) {
  (hr[pr++] = ya), (hr[pr++] = va), (va = e), (ya = t);
}
function bm(e, t, n) {
  (ut[ct++] = Mt), (ut[ct++] = Dt), (ut[ct++] = Qn), (Qn = e);
  var r = Mt;
  e = Dt;
  var i = 32 - wt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - wt(t) + i;
  if (30 < s) {
    var a = i - (i % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Mt = (1 << (32 - wt(t) + i)) | (n << i) | r),
      (Dt = s + e);
  } else (Mt = (1 << s) | (n << i) | r), (Dt = e);
}
function oc(e) {
  e.return !== null && (In(e, 1), bm(e, 1, 0));
}
function lc(e) {
  for (; e === va; )
    (va = hr[--pr]), (hr[pr] = null), (ya = hr[--pr]), (hr[pr] = null);
  for (; e === Qn; )
    (Qn = ut[--ct]),
      (ut[ct] = null),
      (Dt = ut[--ct]),
      (ut[ct] = null),
      (Mt = ut[--ct]),
      (ut[ct] = null);
}
var $e = null,
  qe = null,
  de = !1,
  yt = null;
function jm(e, t) {
  var n = ft(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function rd(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), ($e = e), (qe = hn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), ($e = e), (qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qn !== null ? { id: Mt, overflow: Dt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ft(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            ($e = e),
            (qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Hl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Wl(e) {
  if (de) {
    var t = qe;
    if (t) {
      var n = t;
      if (!rd(e, t)) {
        if (Hl(e)) throw Error(M(418));
        t = hn(n.nextSibling);
        var r = $e;
        t && rd(e, t)
          ? jm(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (de = !1), ($e = e));
      }
    } else {
      if (Hl(e)) throw Error(M(418));
      (e.flags = (e.flags & -4097) | 2), (de = !1), ($e = e);
    }
  }
}
function id(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  $e = e;
}
function Cs(e) {
  if (e !== $e) return !1;
  if (!de) return id(e), (de = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bl(e.type, e.memoizedProps))),
    t && (t = qe))
  ) {
    if (Hl(e)) throw (Em(), Error(M(418)));
    for (; t; ) jm(e, t), (t = hn(t.nextSibling));
  }
  if ((id(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(M(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              qe = hn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      qe = null;
    }
  } else qe = $e ? hn(e.stateNode.nextSibling) : null;
  return !0;
}
function Em() {
  for (var e = qe; e; ) e = hn(e.nextSibling);
}
function Or() {
  (qe = $e = null), (de = !1);
}
function uc(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var Fy = Jt.ReactCurrentBatchConfig;
function qr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(M(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(M(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(M(284));
    if (!n._owner) throw Error(M(290, e));
  }
  return e;
}
function bs(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      M(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function sd(e) {
  var t = e._init;
  return t(e._payload);
}
function Tm(e) {
  function t(x, m) {
    if (e) {
      var g = x.deletions;
      g === null ? ((x.deletions = [m]), (x.flags |= 16)) : g.push(m);
    }
  }
  function n(x, m) {
    if (!e) return null;
    for (; m !== null; ) t(x, m), (m = m.sibling);
    return null;
  }
  function r(x, m) {
    for (x = new Map(); m !== null; )
      m.key !== null ? x.set(m.key, m) : x.set(m.index, m), (m = m.sibling);
    return x;
  }
  function i(x, m) {
    return (x = vn(x, m)), (x.index = 0), (x.sibling = null), x;
  }
  function s(x, m, g) {
    return (
      (x.index = g),
      e
        ? ((g = x.alternate),
          g !== null
            ? ((g = g.index), g < m ? ((x.flags |= 2), m) : g)
            : ((x.flags |= 2), m))
        : ((x.flags |= 1048576), m)
    );
  }
  function a(x) {
    return e && x.alternate === null && (x.flags |= 2), x;
  }
  function o(x, m, g, A) {
    return m === null || m.tag !== 6
      ? ((m = Qo(g, x.mode, A)), (m.return = x), m)
      : ((m = i(m, g)), (m.return = x), m);
  }
  function l(x, m, g, A) {
    var k = g.type;
    return k === or
      ? c(x, m, g.props.children, A, g.key)
      : m !== null &&
        (m.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === tn &&
            sd(k) === m.type))
      ? ((A = i(m, g.props)), (A.ref = qr(x, m, g)), (A.return = x), A)
      : ((A = ea(g.type, g.key, g.props, null, x.mode, A)),
        (A.ref = qr(x, m, g)),
        (A.return = x),
        A);
  }
  function u(x, m, g, A) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== g.containerInfo ||
      m.stateNode.implementation !== g.implementation
      ? ((m = Ko(g, x.mode, A)), (m.return = x), m)
      : ((m = i(m, g.children || [])), (m.return = x), m);
  }
  function c(x, m, g, A, k) {
    return m === null || m.tag !== 7
      ? ((m = Yn(g, x.mode, A, k)), (m.return = x), m)
      : ((m = i(m, g)), (m.return = x), m);
  }
  function d(x, m, g) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Qo("" + m, x.mode, g)), (m.return = x), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case ps:
          return (
            (g = ea(m.type, m.key, m.props, null, x.mode, g)),
            (g.ref = qr(x, null, m)),
            (g.return = x),
            g
          );
        case ar:
          return (m = Ko(m, x.mode, g)), (m.return = x), m;
        case tn:
          var A = m._init;
          return d(x, A(m._payload), g);
      }
      if (si(m) || Qr(m))
        return (m = Yn(m, x.mode, g, null)), (m.return = x), m;
      bs(x, m);
    }
    return null;
  }
  function h(x, m, g, A) {
    var k = m !== null ? m.key : null;
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return k !== null ? null : o(x, m, "" + g, A);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case ps:
          return g.key === k ? l(x, m, g, A) : null;
        case ar:
          return g.key === k ? u(x, m, g, A) : null;
        case tn:
          return (k = g._init), h(x, m, k(g._payload), A);
      }
      if (si(g) || Qr(g)) return k !== null ? null : c(x, m, g, A, null);
      bs(x, g);
    }
    return null;
  }
  function p(x, m, g, A, k) {
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return (x = x.get(g) || null), o(m, x, "" + A, k);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case ps:
          return (x = x.get(A.key === null ? g : A.key) || null), l(m, x, A, k);
        case ar:
          return (x = x.get(A.key === null ? g : A.key) || null), u(m, x, A, k);
        case tn:
          var b = A._init;
          return p(x, m, g, b(A._payload), k);
      }
      if (si(A) || Qr(A)) return (x = x.get(g) || null), c(m, x, A, k, null);
      bs(m, A);
    }
    return null;
  }
  function v(x, m, g, A) {
    for (
      var k = null, b = null, C = m, j = (m = 0), E = null;
      C !== null && j < g.length;
      j++
    ) {
      C.index > j ? ((E = C), (C = null)) : (E = C.sibling);
      var N = h(x, C, g[j], A);
      if (N === null) {
        C === null && (C = E);
        break;
      }
      e && C && N.alternate === null && t(x, C),
        (m = s(N, m, j)),
        b === null ? (k = N) : (b.sibling = N),
        (b = N),
        (C = E);
    }
    if (j === g.length) return n(x, C), de && In(x, j), k;
    if (C === null) {
      for (; j < g.length; j++)
        (C = d(x, g[j], A)),
          C !== null &&
            ((m = s(C, m, j)), b === null ? (k = C) : (b.sibling = C), (b = C));
      return de && In(x, j), k;
    }
    for (C = r(x, C); j < g.length; j++)
      (E = p(C, x, j, g[j], A)),
        E !== null &&
          (e && E.alternate !== null && C.delete(E.key === null ? j : E.key),
          (m = s(E, m, j)),
          b === null ? (k = E) : (b.sibling = E),
          (b = E));
    return (
      e &&
        C.forEach(function (R) {
          return t(x, R);
        }),
      de && In(x, j),
      k
    );
  }
  function y(x, m, g, A) {
    var k = Qr(g);
    if (typeof k != "function") throw Error(M(150));
    if (((g = k.call(g)), g == null)) throw Error(M(151));
    for (
      var b = (k = null), C = m, j = (m = 0), E = null, N = g.next();
      C !== null && !N.done;
      j++, N = g.next()
    ) {
      C.index > j ? ((E = C), (C = null)) : (E = C.sibling);
      var R = h(x, C, N.value, A);
      if (R === null) {
        C === null && (C = E);
        break;
      }
      e && C && R.alternate === null && t(x, C),
        (m = s(R, m, j)),
        b === null ? (k = R) : (b.sibling = R),
        (b = R),
        (C = E);
    }
    if (N.done) return n(x, C), de && In(x, j), k;
    if (C === null) {
      for (; !N.done; j++, N = g.next())
        (N = d(x, N.value, A)),
          N !== null &&
            ((m = s(N, m, j)), b === null ? (k = N) : (b.sibling = N), (b = N));
      return de && In(x, j), k;
    }
    for (C = r(x, C); !N.done; j++, N = g.next())
      (N = p(C, x, j, N.value, A)),
        N !== null &&
          (e && N.alternate !== null && C.delete(N.key === null ? j : N.key),
          (m = s(N, m, j)),
          b === null ? (k = N) : (b.sibling = N),
          (b = N));
    return (
      e &&
        C.forEach(function (V) {
          return t(x, V);
        }),
      de && In(x, j),
      k
    );
  }
  function S(x, m, g, A) {
    if (
      (typeof g == "object" &&
        g !== null &&
        g.type === or &&
        g.key === null &&
        (g = g.props.children),
      typeof g == "object" && g !== null)
    ) {
      switch (g.$$typeof) {
        case ps:
          e: {
            for (var k = g.key, b = m; b !== null; ) {
              if (b.key === k) {
                if (((k = g.type), k === or)) {
                  if (b.tag === 7) {
                    n(x, b.sibling),
                      (m = i(b, g.props.children)),
                      (m.return = x),
                      (x = m);
                    break e;
                  }
                } else if (
                  b.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === tn &&
                    sd(k) === b.type)
                ) {
                  n(x, b.sibling),
                    (m = i(b, g.props)),
                    (m.ref = qr(x, b, g)),
                    (m.return = x),
                    (x = m);
                  break e;
                }
                n(x, b);
                break;
              } else t(x, b);
              b = b.sibling;
            }
            g.type === or
              ? ((m = Yn(g.props.children, x.mode, A, g.key)),
                (m.return = x),
                (x = m))
              : ((A = ea(g.type, g.key, g.props, null, x.mode, A)),
                (A.ref = qr(x, m, g)),
                (A.return = x),
                (x = A));
          }
          return a(x);
        case ar:
          e: {
            for (b = g.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === g.containerInfo &&
                  m.stateNode.implementation === g.implementation
                ) {
                  n(x, m.sibling),
                    (m = i(m, g.children || [])),
                    (m.return = x),
                    (x = m);
                  break e;
                } else {
                  n(x, m);
                  break;
                }
              else t(x, m);
              m = m.sibling;
            }
            (m = Ko(g, x.mode, A)), (m.return = x), (x = m);
          }
          return a(x);
        case tn:
          return (b = g._init), S(x, m, b(g._payload), A);
      }
      if (si(g)) return v(x, m, g, A);
      if (Qr(g)) return y(x, m, g, A);
      bs(x, g);
    }
    return (typeof g == "string" && g !== "") || typeof g == "number"
      ? ((g = "" + g),
        m !== null && m.tag === 6
          ? (n(x, m.sibling), (m = i(m, g)), (m.return = x), (x = m))
          : (n(x, m), (m = Qo(g, x.mode, A)), (m.return = x), (x = m)),
        a(x))
      : n(x, m);
  }
  return S;
}
var Mr = Tm(!0),
  Pm = Tm(!1),
  xa = En(null),
  wa = null,
  mr = null,
  cc = null;
function fc() {
  cc = mr = wa = null;
}
function dc(e) {
  var t = xa.current;
  ue(xa), (e._currentValue = t);
}
function Yl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Pr(e, t) {
  (wa = e),
    (cc = mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), mr === null)) {
      if (wa === null) throw Error(M(308));
      (mr = e), (wa.dependencies = { lanes: 0, firstContext: e });
    } else mr = mr.next = e;
  return t;
}
var Bn = null;
function hc(e) {
  Bn === null ? (Bn = [e]) : Bn.push(e);
}
function Nm(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), hc(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  );
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var nn = !1;
function pc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Lm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ft(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function pn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Yt(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), hc(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  );
}
function Ks(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
function ad(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Aa(e, t, n, r) {
  var i = e.updateQueue;
  nn = !1;
  var s = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var l = o,
      u = l.next;
    (l.next = null), a === null ? (s = u) : (a.next = u), (a = l);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (o = c.lastBaseUpdate),
      o !== a &&
        (o === null ? (c.firstBaseUpdate = u) : (o.next = u),
        (c.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (a = 0), (c = u = l = null), (o = s);
    do {
      var h = o.lane,
        p = o.eventTime;
      if ((r & h) === h) {
        c !== null &&
          (c = c.next =
            {
              eventTime: p,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            y = o;
          switch (((h = t), (p = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == "function")) {
                d = v.call(p, d, h);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = y.payload),
                (h = typeof v == "function" ? v.call(p, d, h) : v),
                h == null)
              )
                break e;
              d = ge({}, d, h);
              break e;
            case 2:
              nn = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (h = i.effects),
          h === null ? (i.effects = [o]) : h.push(o));
      } else
        (p = {
          eventTime: p,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          c === null ? ((u = c = p), (l = d)) : (c = c.next = p),
          (a |= h);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (h = o),
          (o = h.next),
          (h.next = null),
          (i.lastBaseUpdate = h),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (c === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (Xn |= a), (e.lanes = a), (e.memoizedState = d);
  }
}
function od(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(M(191, i));
        i.call(r);
      }
    }
}
var ts = {},
  Nt = En(ts),
  Di = En(ts),
  Vi = En(ts);
function Fn(e) {
  if (e === ts) throw Error(M(174));
  return e;
}
function mc(e, t) {
  switch ((se(Vi, t), se(Di, e), se(Nt, ts), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Cl(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Cl(t, e));
  }
  ue(Nt), se(Nt, t);
}
function Dr() {
  ue(Nt), ue(Di), ue(Vi);
}
function Im(e) {
  Fn(Vi.current);
  var t = Fn(Nt.current),
    n = Cl(t, e.type);
  t !== n && (se(Di, e), se(Nt, n));
}
function gc(e) {
  Di.current === e && (ue(Nt), ue(Di));
}
var he = En(0);
function Sa(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Uo = [];
function vc() {
  for (var e = 0; e < Uo.length; e++)
    Uo[e]._workInProgressVersionPrimary = null;
  Uo.length = 0;
}
var Xs = Jt.ReactCurrentDispatcher,
  Ho = Jt.ReactCurrentBatchConfig,
  Kn = 0,
  me = null,
  be = null,
  Te = null,
  ka = !1,
  mi = !1,
  Bi = 0,
  zy = 0;
function Re() {
  throw Error(M(321));
}
function yc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function xc(e, t, n, r, i, s) {
  if (
    ((Kn = s),
    (me = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xs.current = e === null || e.memoizedState === null ? Yy : Gy),
    (e = n(r, i)),
    mi)
  ) {
    s = 0;
    do {
      if (((mi = !1), (Bi = 0), 25 <= s)) throw Error(M(301));
      (s += 1),
        (Te = be = null),
        (t.updateQueue = null),
        (Xs.current = _y),
        (e = n(r, i));
    } while (mi);
  }
  if (
    ((Xs.current = Ca),
    (t = be !== null && be.next !== null),
    (Kn = 0),
    (Te = be = me = null),
    (ka = !1),
    t)
  )
    throw Error(M(300));
  return e;
}
function wc() {
  var e = Bi !== 0;
  return (Bi = 0), e;
}
function jt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Te === null ? (me.memoizedState = Te = e) : (Te = Te.next = e), Te;
}
function pt() {
  if (be === null) {
    var e = me.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = be.next;
  var t = Te === null ? me.memoizedState : Te.next;
  if (t !== null) (Te = t), (be = e);
  else {
    if (e === null) throw Error(M(310));
    (be = e),
      (e = {
        memoizedState: be.memoizedState,
        baseState: be.baseState,
        baseQueue: be.baseQueue,
        queue: be.queue,
        next: null,
      }),
      Te === null ? (me.memoizedState = Te = e) : (Te = Te.next = e);
  }
  return Te;
}
function Fi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Wo(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = be,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = s.next), (s.next = a);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var o = (a = null),
      l = null,
      u = s;
    do {
      var c = u.lane;
      if ((Kn & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((o = l = d), (a = r)) : (l = l.next = d),
          (me.lanes |= c),
          (Xn |= c);
      }
      u = u.next;
    } while (u !== null && u !== s);
    l === null ? (a = r) : (l.next = o),
      St(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (me.lanes |= s), (Xn |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yo(e) {
  var t = pt(),
    n = t.queue;
  if (n === null) throw Error(M(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== i);
    St(s, t.memoizedState) || (Ge = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Rm() {}
function Om(e, t) {
  var n = me,
    r = pt(),
    i = t(),
    s = !St(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (Ge = !0)),
    (r = r.queue),
    Ac(Vm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (Te !== null && Te.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      zi(9, Dm.bind(null, n, r, i, t), void 0, null),
      Pe === null)
    )
      throw Error(M(349));
    Kn & 30 || Mm(n, t, i);
  }
  return i;
}
function Mm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Dm(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bm(t) && Fm(e);
}
function Vm(e, t, n) {
  return n(function () {
    Bm(t) && Fm(e);
  });
}
function Bm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Fm(e) {
  var t = Yt(e, 1);
  t !== null && At(t, e, 1, -1);
}
function ld(e) {
  var t = jt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Wy.bind(null, me, e)),
    [t.memoizedState, e]
  );
}
function zi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = me.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (me.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function zm() {
  return pt().memoizedState;
}
function Js(e, t, n, r) {
  var i = jt();
  (me.flags |= e),
    (i.memoizedState = zi(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ja(e, t, n, r) {
  var i = pt();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (be !== null) {
    var a = be.memoizedState;
    if (((s = a.destroy), r !== null && yc(r, a.deps))) {
      i.memoizedState = zi(t, n, s, r);
      return;
    }
  }
  (me.flags |= e), (i.memoizedState = zi(1 | t, n, s, r));
}
function ud(e, t) {
  return Js(8390656, 8, e, t);
}
function Ac(e, t) {
  return Ja(2048, 8, e, t);
}
function Um(e, t) {
  return Ja(4, 2, e, t);
}
function Hm(e, t) {
  return Ja(4, 4, e, t);
}
function Wm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ym(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ja(4, 4, Wm.bind(null, t, e), n)
  );
}
function Sc() {}
function Gm(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _m(e, t) {
  var n = pt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && yc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Qm(e, t, n) {
  return Kn & 21
    ? (St(n, t) || ((n = qp()), (me.lanes |= n), (Xn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function Uy(e, t) {
  var n = ie;
  (ie = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ho.transition;
  Ho.transition = {};
  try {
    e(!1), t();
  } finally {
    (ie = n), (Ho.transition = r);
  }
}
function Km() {
  return pt().memoizedState;
}
function Hy(e, t, n) {
  var r = gn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xm(e))
  )
    Jm(t, n);
  else if (((n = Nm(e, t, n, r)), n !== null)) {
    var i = Ue();
    At(n, e, r, i), Zm(n, t, r);
  }
}
function Wy(e, t, n) {
  var r = gn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xm(e)) Jm(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), St(o, a))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), hc(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Nm(e, t, i, r)),
      n !== null && ((i = Ue()), At(n, e, r, i), Zm(n, t, r));
  }
}
function Xm(e) {
  var t = e.alternate;
  return e === me || (t !== null && t === me);
}
function Jm(e, t) {
  mi = ka = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $u(e, n);
  }
}
var Ca = {
    readContext: ht,
    useCallback: Re,
    useContext: Re,
    useEffect: Re,
    useImperativeHandle: Re,
    useInsertionEffect: Re,
    useLayoutEffect: Re,
    useMemo: Re,
    useReducer: Re,
    useRef: Re,
    useState: Re,
    useDebugValue: Re,
    useDeferredValue: Re,
    useTransition: Re,
    useMutableSource: Re,
    useSyncExternalStore: Re,
    useId: Re,
    unstable_isNewReconciler: !1,
  },
  Yy = {
    readContext: ht,
    useCallback: function (e, t) {
      return (jt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: ud,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Js(4194308, 4, Wm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Js(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Js(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = jt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = jt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Hy.bind(null, me, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = jt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ld,
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      return (jt().memoizedState = e);
    },
    useTransition: function () {
      var e = ld(!1),
        t = e[0];
      return (e = Uy.bind(null, e[1])), (jt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = me,
        i = jt();
      if (de) {
        if (n === void 0) throw Error(M(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(M(349));
        Kn & 30 || Mm(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        ud(Vm.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        zi(9, Dm.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = jt(),
        t = Pe.identifierPrefix;
      if (de) {
        var n = Dt,
          r = Mt;
        (n = (r & ~(1 << (32 - wt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Bi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = zy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Gy = {
    readContext: ht,
    useCallback: Gm,
    useContext: ht,
    useEffect: Ac,
    useImperativeHandle: Ym,
    useInsertionEffect: Um,
    useLayoutEffect: Hm,
    useMemo: _m,
    useReducer: Wo,
    useRef: zm,
    useState: function () {
      return Wo(Fi);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = pt();
      return Qm(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Wo(Fi)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rm,
    useSyncExternalStore: Om,
    useId: Km,
    unstable_isNewReconciler: !1,
  },
  _y = {
    readContext: ht,
    useCallback: Gm,
    useContext: ht,
    useEffect: Ac,
    useImperativeHandle: Ym,
    useInsertionEffect: Um,
    useLayoutEffect: Hm,
    useMemo: _m,
    useReducer: Yo,
    useRef: zm,
    useState: function () {
      return Yo(Fi);
    },
    useDebugValue: Sc,
    useDeferredValue: function (e) {
      var t = pt();
      return be === null ? (t.memoizedState = e) : Qm(t, be.memoizedState, e);
    },
    useTransition: function () {
      var e = Yo(Fi)[0],
        t = pt().memoizedState;
      return [e, t];
    },
    useMutableSource: Rm,
    useSyncExternalStore: Om,
    useId: Km,
    unstable_isNewReconciler: !1,
  };
function gt(e, t) {
  if (e && e.defaultProps) {
    (t = ge({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ge({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Za = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? er(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      i = gn(e),
      s = Ft(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = pn(e, s, i)),
      t !== null && (At(t, e, i, r), Ks(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ue(),
      i = gn(e),
      s = Ft(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = pn(e, s, i)),
      t !== null && (At(t, e, i, r), Ks(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ue(),
      r = gn(e),
      i = Ft(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = pn(e, i, r)),
      t !== null && (At(t, e, r, n), Ks(t, e, r));
  },
};
function cd(e, t, n, r, i, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ii(n, r) || !Ii(i, s)
      : !0
  );
}
function qm(e, t, n) {
  var r = !1,
    i = wn,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ht(s))
      : ((i = Qe(t) ? _n : Ve.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Rr(e, i) : wn)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Za),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function fd(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Za.enqueueReplaceState(t, t.state, null);
}
function _l(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), pc(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ht(s))
    : ((s = Qe(t) ? _n : Ve.current), (i.context = Rr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Gl(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Za.enqueueReplaceState(i, i.state, null),
      Aa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Vr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += wv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Go(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ql(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qy = typeof WeakMap == "function" ? WeakMap : Map;
function $m(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ja || ((ja = !0), (ru = r)), Ql(e, t);
    }),
    n
  );
}
function e0(e, t, n) {
  (n = Ft(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        Ql(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        Ql(e, t),
          typeof r != "function" &&
            (mn === null ? (mn = new Set([this])) : mn.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function dd(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Qy();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = o2.bind(null, e, t, n)), t.then(e, e));
}
function hd(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function pd(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ft(-1, 1)), (t.tag = 2), pn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ky = Jt.ReactCurrentOwner,
  Ge = !1;
function ze(e, t, n, r) {
  t.child = e === null ? Pm(t, null, n, r) : Mr(t, e.child, n, r);
}
function md(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Pr(t, i),
    (r = xc(e, t, n, r, s, i)),
    (n = wc()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (de && n && oc(t), (t.flags |= 1), ze(e, t, r, i), t.child)
  );
}
function gd(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Nc(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), t0(e, t, s, r, i))
      : ((e = ea(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ii), n(a, r) && e.ref === t.ref)
    )
      return Gt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = vn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function t0(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (Ii(s, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Gt(e, t, i);
  }
  return Kl(e, t, n, r, i);
}
function n0(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        se(vr, Ze),
        (Ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          se(vr, Ze),
          (Ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        se(vr, Ze),
        (Ze |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      se(vr, Ze),
      (Ze |= r);
  return ze(e, t, i, n), t.child;
}
function r0(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Kl(e, t, n, r, i) {
  var s = Qe(n) ? _n : Ve.current;
  return (
    (s = Rr(t, s)),
    Pr(t, i),
    (n = xc(e, t, n, r, s, i)),
    (r = wc()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Gt(e, t, i))
      : (de && r && oc(t), (t.flags |= 1), ze(e, t, n, i), t.child)
  );
}
function vd(e, t, n, r, i) {
  if (Qe(n)) {
    var s = !0;
    ga(t);
  } else s = !1;
  if ((Pr(t, i), t.stateNode === null))
    Zs(e, t), qm(t, n, r), _l(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var l = a.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ht(u))
      : ((u = Qe(n) ? _n : Ve.current), (u = Rr(t, u)));
    var c = n.getDerivedStateFromProps,
      d =
        typeof c == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || l !== u) && fd(t, a, r, u)),
      (nn = !1);
    var h = t.memoizedState;
    (a.state = h),
      Aa(t, r, a, i),
      (l = t.memoizedState),
      o !== r || h !== l || _e.current || nn
        ? (typeof c == "function" && (Gl(t, n, c, r), (l = t.memoizedState)),
          (o = nn || cd(t, n, o, r, h, l, u))
            ? (d ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Lm(e, t),
      (o = t.memoizedProps),
      (u = t.type === t.elementType ? o : gt(t.type, o)),
      (a.props = u),
      (d = t.pendingProps),
      (h = a.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ht(l))
        : ((l = Qe(n) ? _n : Ve.current), (l = Rr(t, l)));
    var p = n.getDerivedStateFromProps;
    (c =
      typeof p == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== d || h !== l) && fd(t, a, r, l)),
      (nn = !1),
      (h = t.memoizedState),
      (a.state = h),
      Aa(t, r, a, i);
    var v = t.memoizedState;
    o !== d || h !== v || _e.current || nn
      ? (typeof p == "function" && (Gl(t, n, p, r), (v = t.memoizedState)),
        (u = nn || cd(t, n, u, r, h, v, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, l),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, l)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && h === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Xl(e, t, n, r, s, i);
}
function Xl(e, t, n, r, i, s) {
  r0(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && nd(t, n, !1), Gt(e, t, s);
  (r = t.stateNode), (Ky.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Mr(t, e.child, null, s)), (t.child = Mr(t, null, o, s)))
      : ze(e, t, o, s),
    (t.memoizedState = r.state),
    i && nd(t, n, !0),
    t.child
  );
}
function i0(e) {
  var t = e.stateNode;
  t.pendingContext
    ? td(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && td(e, t.context, !1),
    mc(e, t.containerInfo);
}
function yd(e, t, n, r, i) {
  return Or(), uc(i), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var Jl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Zl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function s0(e, t, n) {
  var r = t.pendingProps,
    i = he.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    se(he, i & 1),
    e === null)
  )
    return (
      Wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = eo(a, r, 0, null)),
              (e = Yn(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Zl(n)),
              (t.memoizedState = Jl),
              e)
            : kc(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return Xy(e, t, a, r, o, i, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = vn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (s = vn(o, s)) : ((s = Yn(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Zl(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Jl),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = vn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function kc(e, t) {
  return (
    (t = eo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function js(e, t, n, r) {
  return (
    r !== null && uc(r),
    Mr(t, e.child, null, n),
    (e = kc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xy(e, t, n, r, i, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Go(Error(M(422)))), js(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = eo({ mode: "visible", children: r.children }, i, 0, null)),
        (s = Yn(s, i, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Mr(t, e.child, null, a),
        (t.child.memoizedState = Zl(a)),
        (t.memoizedState = Jl),
        s);
  if (!(t.mode & 1)) return js(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(M(419))), (r = Go(s, r, void 0)), js(e, t, a, r);
  }
  if (((o = (a & e.childLanes) !== 0), Ge || o)) {
    if (((r = Pe), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), Yt(e, i), At(r, e, i, -1));
    }
    return Pc(), (r = Go(Error(M(421)))), js(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = l2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (qe = hn(i.nextSibling)),
      ($e = t),
      (de = !0),
      (yt = null),
      e !== null &&
        ((ut[ct++] = Mt),
        (ut[ct++] = Dt),
        (ut[ct++] = Qn),
        (Mt = e.id),
        (Dt = e.overflow),
        (Qn = t)),
      (t = kc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function xd(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yl(e.return, t, n);
}
function _o(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function a0(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((ze(e, t, r.children, n), (r = he.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xd(e, n, t);
        else if (e.tag === 19) xd(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((se(he, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Sa(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          _o(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Sa(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        _o(t, !0, n, null, s);
        break;
      case "together":
        _o(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Zs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Gt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Xn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(M(153));
  if (t.child !== null) {
    for (
      e = t.child, n = vn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = vn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Jy(e, t, n) {
  switch (t.tag) {
    case 3:
      i0(t), Or();
      break;
    case 5:
      Im(t);
      break;
    case 1:
      Qe(t.type) && ga(t);
      break;
    case 4:
      mc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      se(xa, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (se(he, he.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? s0(e, t, n)
          : (se(he, he.current & 1),
            (e = Gt(e, t, n)),
            e !== null ? e.sibling : null);
      se(he, he.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return a0(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        se(he, he.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), n0(e, t, n);
  }
  return Gt(e, t, n);
}
var o0, ql, l0, u0;
o0 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ql = function () {};
l0 = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Fn(Nt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = wl(e, i)), (r = wl(e, r)), (s = []);
        break;
      case "select":
        (i = ge({}, i, { value: void 0 })),
          (r = ge({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = kl(e, i)), (r = kl(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = pa);
    }
    bl(n, r);
    var a;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var o = i[u];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (bi.hasOwnProperty(u)
              ? s || (s = [])
              : (s = s || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((o = i?.[u]),
        r.hasOwnProperty(u) && l !== o && (l != null || o != null))
      )
        if (u === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in l)
              l.hasOwnProperty(a) &&
                o[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]));
          } else n || (s || (s = []), s.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (s = s || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (bi.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && oe("scroll", e),
                  s || o === l || (s = []))
                : (s = s || []).push(u, l));
    }
    n && (s = s || []).push("style", n);
    var u = s;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
u0 = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $r(e, t) {
  if (!de)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Oe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Zy(e, t, n) {
  var r = t.pendingProps;
  switch ((lc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Oe(t), null;
    case 1:
      return Qe(t.type) && ma(), Oe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Dr(),
        ue(_e),
        ue(Ve),
        vc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Cs(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (au(yt), (yt = null)))),
        ql(e, t),
        Oe(t),
        null
      );
    case 5:
      gc(t);
      var i = Fn(Vi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        l0(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(M(166));
          return Oe(t), null;
        }
        if (((e = Fn(Nt.current)), Cs(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Et] = t), (r[Mi] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              oe("cancel", r), oe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              oe("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < oi.length; i++) oe(oi[i], r);
              break;
            case "source":
              oe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              oe("error", r), oe("load", r);
              break;
            case "details":
              oe("toggle", r);
              break;
            case "input":
              Tf(r, s), oe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                oe("invalid", r);
              break;
            case "textarea":
              Nf(r, s), oe("invalid", r);
          }
          bl(n, s), (i = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      ks(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      ks(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : bi.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  oe("scroll", r);
            }
          switch (n) {
            case "input":
              ms(r), Pf(r, s, !0);
              break;
            case "textarea":
              ms(r), Lf(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = pa);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Vp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Et] = t),
            (e[Mi] = r),
            o0(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = jl(n, r)), n)) {
              case "dialog":
                oe("cancel", e), oe("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                oe("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < oi.length; i++) oe(oi[i], e);
                i = r;
                break;
              case "source":
                oe("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                oe("error", e), oe("load", e), (i = r);
                break;
              case "details":
                oe("toggle", e), (i = r);
                break;
              case "input":
                Tf(e, r), (i = wl(e, r)), oe("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ge({}, r, { value: void 0 })),
                  oe("invalid", e);
                break;
              case "textarea":
                Nf(e, r), (i = kl(e, r)), oe("invalid", e);
                break;
              default:
                i = r;
            }
            bl(n, i), (o = i);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === "style"
                  ? zp(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && Bp(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ji(e, l)
                    : typeof l == "number" && ji(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (bi.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && oe("scroll", e)
                      : l != null && Qu(e, s, l, a));
              }
            switch (n) {
              case "input":
                ms(e), Pf(e, r, !1);
                break;
              case "textarea":
                ms(e), Lf(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? br(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      br(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = pa);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Oe(t), null;
    case 6:
      if (e && t.stateNode != null) u0(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(M(166));
        if (((n = Fn(Vi.current)), Fn(Nt.current), Cs(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Et] = t),
            (s = r.nodeValue !== n) && ((e = $e), e !== null))
          )
            switch (e.tag) {
              case 3:
                ks(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ks(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Et] = t),
            (t.stateNode = r);
      }
      return Oe(t), null;
    case 13:
      if (
        (ue(he),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (de && qe !== null && t.mode & 1 && !(t.flags & 128))
          Em(), Or(), (t.flags |= 98560), (s = !1);
        else if (((s = Cs(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(M(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(M(317));
            s[Et] = t;
          } else
            Or(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Oe(t), (s = !1);
        } else yt !== null && (au(yt), (yt = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || he.current & 1 ? je === 0 && (je = 3) : Pc())),
          t.updateQueue !== null && (t.flags |= 4),
          Oe(t),
          null);
    case 4:
      return (
        Dr(), ql(e, t), e === null && Ri(t.stateNode.containerInfo), Oe(t), null
      );
    case 10:
      return dc(t.type._context), Oe(t), null;
    case 17:
      return Qe(t.type) && ma(), Oe(t), null;
    case 19:
      if ((ue(he), (s = t.memoizedState), s === null)) return Oe(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) $r(s, !1);
        else {
          if (je !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = Sa(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    $r(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return se(he, (he.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            we() > Br &&
            ((t.flags |= 128), (r = !0), $r(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Sa(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $r(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !de)
            )
              return Oe(t), null;
          } else
            2 * we() - s.renderingStartTime > Br &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $r(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = we()),
          (t.sibling = null),
          (n = he.current),
          se(he, r ? (n & 1) | 2 : n & 1),
          t)
        : (Oe(t), null);
    case 22:
    case 23:
      return (
        Tc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ze & 1073741824 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Oe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(M(156, t.tag));
}
function qy(e, t) {
  switch ((lc(t), t.tag)) {
    case 1:
      return (
        Qe(t.type) && ma(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Dr(),
        ue(_e),
        ue(Ve),
        vc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gc(t), null;
    case 13:
      if (
        (ue(he), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(M(340));
        Or();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return ue(he), null;
    case 4:
      return Dr(), null;
    case 10:
      return dc(t.type._context), null;
    case 22:
    case 23:
      return Tc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Es = !1,
  De = !1,
  $y = typeof WeakSet == "function" ? WeakSet : Set,
  W = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function $l(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var wd = !1;
function e2(e, t) {
  if (((Dl = fa), (e = pm()), ac(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            u = 0,
            c = 0,
            d = e,
            h = null;
          t: for (;;) {
            for (
              var p;
              d !== n || (i !== 0 && d.nodeType !== 3) || (o = a + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = a + r),
                d.nodeType === 3 && (a += d.nodeValue.length),
                (p = d.firstChild) !== null;

            )
              (h = d), (d = p);
            for (;;) {
              if (d === e) break t;
              if (
                (h === n && ++u === i && (o = a),
                h === s && ++c === r && (l = a),
                (p = d.nextSibling) !== null)
              )
                break;
              (d = h), (h = d.parentNode);
            }
            d = p;
          }
          n = o === -1 || l === -1 ? null : { start: o, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vl = { focusedElem: e, selectionRange: n }, fa = !1, W = t; W !== null; )
    if (((t = W), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (W = e);
    else
      for (; W !== null; ) {
        t = W;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    S = v.memoizedState,
                    x = t.stateNode,
                    m = x.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : gt(t.type, y),
                      S
                    );
                  x.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var g = t.stateNode.containerInfo;
                g.nodeType === 1
                  ? (g.textContent = "")
                  : g.nodeType === 9 &&
                    g.documentElement &&
                    g.removeChild(g.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(M(163));
            }
        } catch (A) {
          ve(t, t.return, A);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (W = e);
          break;
        }
        W = t.return;
      }
  return (v = wd), (wd = !1), v;
}
function gi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && $l(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function qa(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function eu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function c0(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), c0(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Et], delete t[Mi], delete t[zl], delete t[Dy], delete t[Vy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function f0(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ad(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || f0(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function tu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = pa));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (tu(e, t, n), e = e.sibling; e !== null; ) tu(e, t, n), (e = e.sibling);
}
function nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (nu(e, t, n), e = e.sibling; e !== null; ) nu(e, t, n), (e = e.sibling);
}
var Ne = null,
  vt = !1;
function qt(e, t, n) {
  for (n = n.child; n !== null; ) d0(e, t, n), (n = n.sibling);
}
function d0(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Ya, n);
    } catch {}
  switch (n.tag) {
    case 5:
      De || gr(n, t);
    case 6:
      var r = Ne,
        i = vt;
      (Ne = null),
        qt(e, t, n),
        (Ne = r),
        (vt = i),
        Ne !== null &&
          (vt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (vt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Fo(e.parentNode, n)
              : e.nodeType === 1 && Fo(e, n),
            Ni(e))
          : Fo(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (i = vt),
        (Ne = n.stateNode.containerInfo),
        (vt = !0),
        qt(e, t, n),
        (Ne = r),
        (vt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !De &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && $l(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      qt(e, t, n);
      break;
    case 1:
      if (
        !De &&
        (gr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          ve(n, t, o);
        }
      qt(e, t, n);
      break;
    case 21:
      qt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((De = (r = De) || n.memoizedState !== null), qt(e, t, n), (De = r))
        : qt(e, t, n);
      break;
    default:
      qt(e, t, n);
  }
}
function Sd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $y()),
      t.forEach(function (r) {
        var i = u2.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function mt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Ne = o.stateNode), (vt = !1);
              break e;
            case 3:
              (Ne = o.stateNode.containerInfo), (vt = !0);
              break e;
            case 4:
              (Ne = o.stateNode.containerInfo), (vt = !0);
              break e;
          }
          o = o.return;
        }
        if (Ne === null) throw Error(M(160));
        d0(s, a, i), (Ne = null), (vt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        ve(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) h0(t, e), (t = t.sibling);
}
function h0(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((mt(t, e), bt(e), r & 4)) {
        try {
          gi(3, e, e.return), qa(3, e);
        } catch (y) {
          ve(e, e.return, y);
        }
        try {
          gi(5, e, e.return);
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 1:
      mt(t, e), bt(e), r & 512 && n !== null && gr(n, n.return);
      break;
    case 5:
      if (
        (mt(t, e),
        bt(e),
        r & 512 && n !== null && gr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ji(i, "");
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && Mp(i, s),
              jl(o, a);
            var u = jl(o, s);
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                d = l[a + 1];
              c === "style"
                ? zp(i, d)
                : c === "dangerouslySetInnerHTML"
                ? Bp(i, d)
                : c === "children"
                ? ji(i, d)
                : Qu(i, c, d, u);
            }
            switch (o) {
              case "input":
                Al(i, s);
                break;
              case "textarea":
                Dp(i, s);
                break;
              case "select":
                var h = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var p = s.value;
                p != null
                  ? br(i, !!s.multiple, p, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? br(i, !!s.multiple, s.defaultValue, !0)
                      : br(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[Mi] = s;
          } catch (y) {
            ve(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((mt(t, e), bt(e), r & 4)) {
        if (e.stateNode === null) throw Error(M(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (y) {
          ve(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (mt(t, e), bt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ni(t.containerInfo);
        } catch (y) {
          ve(e, e.return, y);
        }
      break;
    case 4:
      mt(t, e), bt(e);
      break;
    case 13:
      mt(t, e),
        bt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (jc = we())),
        r & 4 && Sd(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((De = (u = De) || c), mt(t, e), (De = u)) : mt(t, e),
        bt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (W = e, c = e.child; c !== null; ) {
            for (d = W = c; W !== null; ) {
              switch (((h = W), (p = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  gi(4, h, h.return);
                  break;
                case 1:
                  gr(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = h), (n = h.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ve(r, n, y);
                    }
                  }
                  break;
                case 5:
                  gr(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    Cd(d);
                    continue;
                  }
              }
              p !== null ? ((p.return = h), (W = p)) : Cd(d);
            }
            c = c.sibling;
          }
        e: for (c = null, d = e; ; ) {
          if (d.tag === 5) {
            if (c === null) {
              c = d;
              try {
                (i = d.stateNode),
                  u
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = d.stateNode),
                      (l = d.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (o.style.display = Fp("display", a)));
              } catch (y) {
                ve(e, e.return, y);
              }
            }
          } else if (d.tag === 6) {
            if (c === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (y) {
                ve(e, e.return, y);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            c === d && (c = null), (d = d.return);
          }
          c === d && (c = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      mt(t, e), bt(e), r & 4 && Sd(e);
      break;
    case 21:
      break;
    default:
      mt(t, e), bt(e);
  }
}
function bt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (f0(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(M(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ji(i, ""), (r.flags &= -33));
          var s = Ad(e);
          nu(e, s, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Ad(e);
          tu(e, o, a);
          break;
        default:
          throw Error(M(161));
      }
    } catch (l) {
      ve(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function t2(e, t, n) {
  (W = e), p0(e);
}
function p0(e, t, n) {
  for (var r = (e.mode & 1) !== 0; W !== null; ) {
    var i = W,
      s = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Es;
      if (!a) {
        var o = i.alternate,
          l = (o !== null && o.memoizedState !== null) || De;
        o = Es;
        var u = De;
        if (((Es = a), (De = l) && !u))
          for (W = i; W !== null; )
            (a = W),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? bd(i)
                : l !== null
                ? ((l.return = a), (W = l))
                : bd(i);
        for (; s !== null; ) (W = s), p0(s), (s = s.sibling);
        (W = i), (Es = o), (De = u);
      }
      kd(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (W = s)) : kd(e);
  }
}
function kd(e) {
  for (; W !== null; ) {
    var t = W;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || qa(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : gt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && od(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                od(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var d = c.dehydrated;
                    d !== null && Ni(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(M(163));
          }
        De || (t.flags & 512 && eu(t));
      } catch (h) {
        ve(t, t.return, h);
      }
    }
    if (t === e) {
      W = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function Cd(e) {
  for (; W !== null; ) {
    var t = W;
    if (t === e) {
      W = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (W = n);
      break;
    }
    W = t.return;
  }
}
function bd(e) {
  for (; W !== null; ) {
    var t = W;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            qa(4, t);
          } catch (l) {
            ve(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ve(t, i, l);
            }
          }
          var s = t.return;
          try {
            eu(t);
          } catch (l) {
            ve(t, s, l);
          }
          break;
        case 5:
          var a = t.return;
          try {
            eu(t);
          } catch (l) {
            ve(t, a, l);
          }
      }
    } catch (l) {
      ve(t, t.return, l);
    }
    if (t === e) {
      W = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (W = o);
      break;
    }
    W = t.return;
  }
}
var n2 = Math.ceil,
  ba = Jt.ReactCurrentDispatcher,
  Cc = Jt.ReactCurrentOwner,
  dt = Jt.ReactCurrentBatchConfig,
  te = 0,
  Pe = null,
  Ce = null,
  Le = 0,
  Ze = 0,
  vr = En(0),
  je = 0,
  Ui = null,
  Xn = 0,
  $a = 0,
  bc = 0,
  vi = null,
  Ye = null,
  jc = 0,
  Br = 1 / 0,
  It = null,
  ja = !1,
  ru = null,
  mn = null,
  Ts = !1,
  ln = null,
  Ea = 0,
  yi = 0,
  iu = null,
  qs = -1,
  $s = 0;
function Ue() {
  return te & 6 ? we() : qs !== -1 ? qs : (qs = we());
}
function gn(e) {
  return e.mode & 1
    ? te & 2 && Le !== 0
      ? Le & -Le
      : Fy.transition !== null
      ? ($s === 0 && ($s = qp()), $s)
      : ((e = ie),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : sm(e.type))),
        e)
    : 1;
}
function At(e, t, n, r) {
  if (50 < yi) throw ((yi = 0), (iu = null), Error(M(185)));
  qi(e, n, r),
    (!(te & 2) || e !== Pe) &&
      (e === Pe && (!(te & 2) && ($a |= n), je === 4 && an(e, Le)),
      Ke(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((Br = we() + 500), Xa && Tn()));
}
function Ke(e, t) {
  var n = e.callbackNode;
  Fv(e, t);
  var r = ca(e, e === Pe ? Le : 0);
  if (r === 0)
    n !== null && Of(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Of(n), t === 1))
      e.tag === 0 ? By(jd.bind(null, e)) : Cm(jd.bind(null, e)),
        Oy(function () {
          !(te & 6) && Tn();
        }),
        (n = null);
    else {
      switch ($p(r)) {
        case 1:
          n = qu;
          break;
        case 4:
          n = Jp;
          break;
        case 16:
          n = ua;
          break;
        case 536870912:
          n = Zp;
          break;
        default:
          n = ua;
      }
      n = S0(n, m0.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function m0(e, t) {
  if (((qs = -1), ($s = 0), te & 6)) throw Error(M(327));
  var n = e.callbackNode;
  if (Nr() && e.callbackNode !== n) return null;
  var r = ca(e, e === Pe ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ta(e, r);
  else {
    t = r;
    var i = te;
    te |= 2;
    var s = v0();
    (Pe !== e || Le !== t) && ((It = null), (Br = we() + 500), Wn(e, t));
    do
      try {
        s2();
        break;
      } catch (o) {
        g0(e, o);
      }
    while (!0);
    fc(),
      (ba.current = s),
      (te = i),
      Ce !== null ? (t = 0) : ((Pe = null), (Le = 0), (t = je));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Ll(e)), i !== 0 && ((r = i), (t = su(e, i)))), t === 1)
    )
      throw ((n = Ui), Wn(e, 0), an(e, r), Ke(e, we()), n);
    if (t === 6) an(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !r2(i) &&
          ((t = Ta(e, r)),
          t === 2 && ((s = Ll(e)), s !== 0 && ((r = s), (t = su(e, s)))),
          t === 1))
      )
        throw ((n = Ui), Wn(e, 0), an(e, r), Ke(e, we()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(M(345));
        case 2:
          Rn(e, Ye, It);
          break;
        case 3:
          if (
            (an(e, r), (r & 130023424) === r && ((t = jc + 500 - we()), 10 < t))
          ) {
            if (ca(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Ue(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Fl(Rn.bind(null, e, Ye, It), t);
            break;
          }
          Rn(e, Ye, It);
          break;
        case 4:
          if ((an(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - wt(r);
            (s = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~s);
          }
          if (
            ((r = i),
            (r = we() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * n2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Fl(Rn.bind(null, e, Ye, It), r);
            break;
          }
          Rn(e, Ye, It);
          break;
        case 5:
          Rn(e, Ye, It);
          break;
        default:
          throw Error(M(329));
      }
    }
  }
  return Ke(e, we()), e.callbackNode === n ? m0.bind(null, e) : null;
}
function su(e, t) {
  var n = vi;
  return (
    e.current.memoizedState.isDehydrated && (Wn(e, t).flags |= 256),
    (e = Ta(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && au(t)),
    e
  );
}
function au(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function r2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!St(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function an(e, t) {
  for (
    t &= ~bc,
      t &= ~$a,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - wt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function jd(e) {
  if (te & 6) throw Error(M(327));
  Nr();
  var t = ca(e, 0);
  if (!(t & 1)) return Ke(e, we()), null;
  var n = Ta(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ll(e);
    r !== 0 && ((t = r), (n = su(e, r)));
  }
  if (n === 1) throw ((n = Ui), Wn(e, 0), an(e, t), Ke(e, we()), n);
  if (n === 6) throw Error(M(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Rn(e, Ye, It),
    Ke(e, we()),
    null
  );
}
function Ec(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((Br = we() + 500), Xa && Tn());
  }
}
function Jn(e) {
  ln !== null && ln.tag === 0 && !(te & 6) && Nr();
  var t = te;
  te |= 1;
  var n = dt.transition,
    r = ie;
  try {
    if (((dt.transition = null), (ie = 1), e)) return e();
  } finally {
    (ie = r), (dt.transition = n), (te = t), !(te & 6) && Tn();
  }
}
function Tc() {
  (Ze = vr.current), ue(vr);
}
function Wn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ry(n)), Ce !== null))
    for (n = Ce.return; n !== null; ) {
      var r = n;
      switch ((lc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ma();
          break;
        case 3:
          Dr(), ue(_e), ue(Ve), vc();
          break;
        case 5:
          gc(r);
          break;
        case 4:
          Dr();
          break;
        case 13:
          ue(he);
          break;
        case 19:
          ue(he);
          break;
        case 10:
          dc(r.type._context);
          break;
        case 22:
        case 23:
          Tc();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Ce = e = vn(e.current, null)),
    (Le = Ze = t),
    (je = 0),
    (Ui = null),
    (bc = $a = Xn = 0),
    (Ye = vi = null),
    Bn !== null)
  ) {
    for (t = 0; t < Bn.length; t++)
      if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Bn = null;
  }
  return e;
}
function g0(e, t) {
  do {
    var n = Ce;
    try {
      if ((fc(), (Xs.current = Ca), ka)) {
        for (var r = me.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        ka = !1;
      }
      if (
        ((Kn = 0),
        (Te = be = me = null),
        (mi = !1),
        (Bi = 0),
        (Cc.current = null),
        n === null || n.return === null)
      ) {
        (je = 1), (Ui = t), (Ce = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          l = t;
        if (
          ((t = Le),
          (o.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            c = o,
            d = c.tag;
          if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var h = c.alternate;
            h
              ? ((c.updateQueue = h.updateQueue),
                (c.memoizedState = h.memoizedState),
                (c.lanes = h.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var p = hd(a);
          if (p !== null) {
            (p.flags &= -257),
              pd(p, a, o, s, t),
              p.mode & 1 && dd(s, u, t),
              (t = p),
              (l = u);
            var v = t.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (t.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              dd(s, u, t), Pc();
              break e;
            }
            l = Error(M(426));
          }
        } else if (de && o.mode & 1) {
          var S = hd(a);
          if (S !== null) {
            !(S.flags & 65536) && (S.flags |= 256),
              pd(S, a, o, s, t),
              uc(Vr(l, o));
            break e;
          }
        }
        (s = l = Vr(l, o)),
          je !== 4 && (je = 2),
          vi === null ? (vi = [s]) : vi.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var x = $m(s, l, t);
              ad(s, x);
              break e;
            case 1:
              o = l;
              var m = s.type,
                g = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (g !== null &&
                    typeof g.componentDidCatch == "function" &&
                    (mn === null || !mn.has(g))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var A = e0(s, o, t);
                ad(s, A);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      x0(n);
    } catch (k) {
      (t = k), Ce === n && n !== null && (Ce = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function v0() {
  var e = ba.current;
  return (ba.current = Ca), e === null ? Ca : e;
}
function Pc() {
  (je === 0 || je === 3 || je === 2) && (je = 4),
    Pe === null || (!(Xn & 268435455) && !($a & 268435455)) || an(Pe, Le);
}
function Ta(e, t) {
  var n = te;
  te |= 2;
  var r = v0();
  (Pe !== e || Le !== t) && ((It = null), Wn(e, t));
  do
    try {
      i2();
      break;
    } catch (i) {
      g0(e, i);
    }
  while (!0);
  if ((fc(), (te = n), (ba.current = r), Ce !== null)) throw Error(M(261));
  return (Pe = null), (Le = 0), je;
}
function i2() {
  for (; Ce !== null; ) y0(Ce);
}
function s2() {
  for (; Ce !== null && !Nv(); ) y0(Ce);
}
function y0(e) {
  var t = A0(e.alternate, e, Ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? x0(e) : (Ce = t),
    (Cc.current = null);
}
function x0(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qy(n, t)), n !== null)) {
        (n.flags &= 32767), (Ce = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (je = 6), (Ce = null);
        return;
      }
    } else if (((n = Zy(n, t, Ze)), n !== null)) {
      Ce = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ce = t;
      return;
    }
    Ce = t = e;
  } while (t !== null);
  je === 0 && (je = 5);
}
function Rn(e, t, n) {
  var r = ie,
    i = dt.transition;
  try {
    (dt.transition = null), (ie = 1), a2(e, t, n, r);
  } finally {
    (dt.transition = i), (ie = r);
  }
  return null;
}
function a2(e, t, n, r) {
  do Nr();
  while (ln !== null);
  if (te & 6) throw Error(M(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(M(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (zv(e, s),
    e === Pe && ((Ce = Pe = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ts ||
      ((Ts = !0),
      S0(ua, function () {
        return Nr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = dt.transition), (dt.transition = null);
    var a = ie;
    ie = 1;
    var o = te;
    (te |= 4),
      (Cc.current = null),
      e2(e, n),
      h0(n, e),
      jy(Vl),
      (fa = !!Dl),
      (Vl = Dl = null),
      (e.current = n),
      t2(n),
      Lv(),
      (te = o),
      (ie = a),
      (dt.transition = s);
  } else e.current = n;
  if (
    (Ts && ((Ts = !1), (ln = e), (Ea = i)),
    (s = e.pendingLanes),
    s === 0 && (mn = null),
    Ov(n.stateNode),
    Ke(e, we()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ja) throw ((ja = !1), (e = ru), (ru = null), e);
  return (
    Ea & 1 && e.tag !== 0 && Nr(),
    (s = e.pendingLanes),
    s & 1 ? (e === iu ? yi++ : ((yi = 0), (iu = e))) : (yi = 0),
    Tn(),
    null
  );
}
function Nr() {
  if (ln !== null) {
    var e = $p(Ea),
      t = dt.transition,
      n = ie;
    try {
      if (((dt.transition = null), (ie = 16 > e ? 16 : e), ln === null))
        var r = !1;
      else {
        if (((e = ln), (ln = null), (Ea = 0), te & 6)) throw Error(M(331));
        var i = te;
        for (te |= 4, W = e.current; W !== null; ) {
          var s = W,
            a = s.child;
          if (W.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var u = o[l];
                for (W = u; W !== null; ) {
                  var c = W;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      gi(8, c, s);
                  }
                  var d = c.child;
                  if (d !== null) (d.return = c), (W = d);
                  else
                    for (; W !== null; ) {
                      c = W;
                      var h = c.sibling,
                        p = c.return;
                      if ((c0(c), c === u)) {
                        W = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = p), (W = h);
                        break;
                      }
                      W = p;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var S = y.sibling;
                    (y.sibling = null), (y = S);
                  } while (y !== null);
                }
              }
              W = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (W = a);
          else
            e: for (; W !== null; ) {
              if (((s = W), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    gi(9, s, s.return);
                }
              var x = s.sibling;
              if (x !== null) {
                (x.return = s.return), (W = x);
                break e;
              }
              W = s.return;
            }
        }
        var m = e.current;
        for (W = m; W !== null; ) {
          a = W;
          var g = a.child;
          if (a.subtreeFlags & 2064 && g !== null) (g.return = a), (W = g);
          else
            e: for (a = m; W !== null; ) {
              if (((o = W), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      qa(9, o);
                  }
                } catch (k) {
                  ve(o, o.return, k);
                }
              if (o === a) {
                W = null;
                break e;
              }
              var A = o.sibling;
              if (A !== null) {
                (A.return = o.return), (W = A);
                break e;
              }
              W = o.return;
            }
        }
        if (
          ((te = i), Tn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Ya, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ie = n), (dt.transition = t);
    }
  }
  return !1;
}
function Ed(e, t, n) {
  (t = Vr(n, t)),
    (t = $m(e, t, 1)),
    (e = pn(e, t, 1)),
    (t = Ue()),
    e !== null && (qi(e, 1, t), Ke(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Ed(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Ed(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (mn === null || !mn.has(r)))
        ) {
          (e = Vr(n, e)),
            (e = e0(t, e, 1)),
            (t = pn(t, e, 1)),
            (e = Ue()),
            t !== null && (qi(t, 1, e), Ke(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function o2(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Le & n) === n &&
      (je === 4 || (je === 3 && (Le & 130023424) === Le && 500 > we() - jc)
        ? Wn(e, 0)
        : (bc |= n)),
    Ke(e, t);
}
function w0(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ys), (ys <<= 1), !(ys & 130023424) && (ys = 4194304))
      : (t = 1));
  var n = Ue();
  (e = Yt(e, t)), e !== null && (qi(e, t, n), Ke(e, n));
}
function l2(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), w0(e, n);
}
function u2(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(M(314));
  }
  r !== null && r.delete(t), w0(e, n);
}
var A0;
A0 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || _e.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), Jy(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), de && t.flags & 1048576 && bm(t, ya, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Zs(e, t), (e = t.pendingProps);
      var i = Rr(t, Ve.current);
      Pr(t, n), (i = xc(null, t, r, e, i, n));
      var s = wc();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Qe(r) ? ((s = !0), ga(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            pc(t),
            (i.updater = Za),
            (t.stateNode = i),
            (i._reactInternals = t),
            _l(t, r, e, n),
            (t = Xl(null, t, r, !0, s, n)))
          : ((t.tag = 0), de && s && oc(t), ze(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Zs(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = f2(r)),
          (e = gt(r, e)),
          i)
        ) {
          case 0:
            t = Kl(null, t, r, e, n);
            break e;
          case 1:
            t = vd(null, t, r, e, n);
            break e;
          case 11:
            t = md(null, t, r, e, n);
            break e;
          case 14:
            t = gd(null, t, r, gt(r.type, e), n);
            break e;
        }
        throw Error(M(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Kl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        vd(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((i0(t), e === null)) throw Error(M(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Lm(e, t),
          Aa(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Vr(Error(M(423)), t)), (t = yd(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Vr(Error(M(424)), t)), (t = yd(e, t, r, n, i));
            break e;
          } else
            for (
              qe = hn(t.stateNode.containerInfo.firstChild),
                $e = t,
                de = !0,
                yt = null,
                n = Pm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Or(), r === i)) {
            t = Gt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Im(t),
        e === null && Wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = i.children),
        Bl(r, i) ? (a = null) : s !== null && Bl(r, s) && (t.flags |= 32),
        r0(e, t),
        ze(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Wl(t), null;
    case 13:
      return s0(e, t, n);
    case 4:
      return (
        mc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Mr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        md(e, t, r, i, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (a = i.value),
          se(xa, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (St(s.value, a)) {
            if (s.children === i.children && !_e.current) {
              t = Gt(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = Ft(-1, n & -n)), (l.tag = 2);
                      var u = s.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Yl(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(M(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Yl(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        ze(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Pr(t, n),
        (i = ht(i)),
        (r = r(i)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = gt(r, t.pendingProps)),
        (i = gt(r.type, i)),
        gd(e, t, r, i, n)
      );
    case 15:
      return t0(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : gt(r, i)),
        Zs(e, t),
        (t.tag = 1),
        Qe(r) ? ((e = !0), ga(t)) : (e = !1),
        Pr(t, n),
        qm(t, r, i),
        _l(t, r, i, n),
        Xl(null, t, r, !0, e, n)
      );
    case 19:
      return a0(e, t, n);
    case 22:
      return n0(e, t, n);
  }
  throw Error(M(156, t.tag));
};
function S0(e, t) {
  return Xp(e, t);
}
function c2(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ft(e, t, n, r) {
  return new c2(e, t, n, r);
}
function Nc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function f2(e) {
  if (typeof e == "function") return Nc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xu)) return 11;
    if (e === Ju) return 14;
  }
  return 2;
}
function vn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ft(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ea(e, t, n, r, i, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Nc(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case or:
        return Yn(n.children, i, s, t);
      case Ku:
        (a = 8), (i |= 8);
        break;
      case gl:
        return (
          (e = ft(12, n, t, i | 2)), (e.elementType = gl), (e.lanes = s), e
        );
      case vl:
        return (e = ft(13, n, t, i)), (e.elementType = vl), (e.lanes = s), e;
      case yl:
        return (e = ft(19, n, t, i)), (e.elementType = yl), (e.lanes = s), e;
      case Ip:
        return eo(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Np:
              a = 10;
              break e;
            case Lp:
              a = 9;
              break e;
            case Xu:
              a = 11;
              break e;
            case Ju:
              a = 14;
              break e;
            case tn:
              (a = 16), (r = null);
              break e;
          }
        throw Error(M(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ft(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function Yn(e, t, n, r) {
  return (e = ft(7, e, r, t)), (e.lanes = n), e;
}
function eo(e, t, n, r) {
  return (
    (e = ft(22, e, r, t)),
    (e.elementType = Ip),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Qo(e, t, n) {
  return (e = ft(6, e, null, t)), (e.lanes = n), e;
}
function Ko(e, t, n) {
  return (
    (t = ft(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function d2(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = To(0)),
    (this.expirationTimes = To(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = To(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Lc(e, t, n, r, i, s, a, o, l) {
  return (
    (e = new d2(e, t, n, o, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ft(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pc(s),
    e
  );
}
function h2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: ar,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function k0(e) {
  if (!e) return wn;
  e = e._reactInternals;
  e: {
    if (er(e) !== e || e.tag !== 1) throw Error(M(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Qe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(M(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Qe(n)) return km(e, n, t);
  }
  return t;
}
function C0(e, t, n, r, i, s, a, o, l) {
  return (
    (e = Lc(n, r, !0, e, i, s, a, o, l)),
    (e.context = k0(null)),
    (n = e.current),
    (r = Ue()),
    (i = gn(n)),
    (s = Ft(r, i)),
    (s.callback = t ?? null),
    pn(n, s, i),
    (e.current.lanes = i),
    qi(e, i, r),
    Ke(e, r),
    e
  );
}
function to(e, t, n, r) {
  var i = t.current,
    s = Ue(),
    a = gn(i);
  return (
    (n = k0(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ft(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = pn(i, t, a)),
    e !== null && (At(e, i, a, s), Ks(e, i, a)),
    a
  );
}
function Pa(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Td(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ic(e, t) {
  Td(e, t), (e = e.alternate) && Td(e, t);
}
function p2() {
  return null;
}
var b0 =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Rc(e) {
  this._internalRoot = e;
}
no.prototype.render = Rc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(M(409));
  to(e, t, null, null);
};
no.prototype.unmount = Rc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jn(function () {
      to(null, e, null, null);
    }),
      (t[Wt] = null);
  }
};
function no(e) {
  this._internalRoot = e;
}
no.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nm();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && im(e);
  }
};
function Oc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ro(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Pd() {}
function m2(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = Pa(a);
        s.call(u);
      };
    }
    var a = C0(t, r, e, 0, null, !1, !1, "", Pd);
    return (
      (e._reactRootContainer = a),
      (e[Wt] = a.current),
      Ri(e.nodeType === 8 ? e.parentNode : e),
      Jn(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var u = Pa(l);
      o.call(u);
    };
  }
  var l = Lc(e, 0, !1, null, null, !1, !1, "", Pd);
  return (
    (e._reactRootContainer = l),
    (e[Wt] = l.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    Jn(function () {
      to(t, l, n, r);
    }),
    l
  );
}
function io(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var l = Pa(a);
        o.call(l);
      };
    }
    to(t, a, e, i);
  } else a = m2(n, t, e, i, r);
  return Pa(a);
}
em = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = ai(t.pendingLanes);
        n !== 0 &&
          ($u(t, n | 1), Ke(t, we()), !(te & 6) && ((Br = we() + 500), Tn()));
      }
      break;
    case 13:
      Jn(function () {
        var r = Yt(e, 1);
        if (r !== null) {
          var i = Ue();
          At(r, e, 1, i);
        }
      }),
        Ic(e, 1);
  }
};
ec = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Ue();
      At(t, e, 134217728, n);
    }
    Ic(e, 134217728);
  }
};
tm = function (e) {
  if (e.tag === 13) {
    var t = gn(e),
      n = Yt(e, t);
    if (n !== null) {
      var r = Ue();
      At(n, e, t, r);
    }
    Ic(e, t);
  }
};
nm = function () {
  return ie;
};
rm = function (e, t) {
  var n = ie;
  try {
    return (ie = e), t();
  } finally {
    ie = n;
  }
};
Tl = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Al(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Ka(r);
            if (!i) throw Error(M(90));
            Op(r), Al(r, i);
          }
        }
      }
      break;
    case "textarea":
      Dp(e, n);
      break;
    case "select":
      (t = n.value), t != null && br(e, !!n.multiple, t, !1);
  }
};
Wp = Ec;
Yp = Jn;
var g2 = { usingClientEntryPoint: !1, Events: [es, fr, Ka, Up, Hp, Ec] },
  ei = {
    findFiberByHostInstance: Vn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  v2 = {
    bundleType: ei.bundleType,
    version: ei.version,
    rendererPackageName: ei.rendererPackageName,
    rendererConfig: ei.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: ei.findFiberByHostInstance || p2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ps = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ps.isDisabled && Ps.supportsFiber)
    try {
      (Ya = Ps.inject(v2)), (Pt = Ps);
    } catch {}
}
nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g2;
nt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oc(t)) throw Error(M(200));
  return h2(e, t, null, n);
};
nt.createRoot = function (e, t) {
  if (!Oc(e)) throw Error(M(299));
  var n = !1,
    r = "",
    i = b0;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Lc(e, 1, !1, null, null, n, !1, r, i)),
    (e[Wt] = t.current),
    Ri(e.nodeType === 8 ? e.parentNode : e),
    new Rc(t)
  );
};
nt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(M(188))
      : ((e = Object.keys(e).join(",")), Error(M(268, e)));
  return (e = Qp(t)), (e = e === null ? null : e.stateNode), e;
};
nt.flushSync = function (e) {
  return Jn(e);
};
nt.hydrate = function (e, t, n) {
  if (!ro(t)) throw Error(M(200));
  return io(null, e, t, !0, n);
};
nt.hydrateRoot = function (e, t, n) {
  if (!Oc(e)) throw Error(M(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    a = b0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = C0(t, null, e, 1, n ?? null, i, !1, s, a)),
    (e[Wt] = t.current),
    Ri(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new no(t);
};
nt.render = function (e, t, n) {
  if (!ro(t)) throw Error(M(200));
  return io(null, e, t, !1, n);
};
nt.unmountComponentAtNode = function (e) {
  if (!ro(e)) throw Error(M(40));
  return e._reactRootContainer
    ? (Jn(function () {
        io(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Wt] = null);
        });
      }),
      !0)
    : !1;
};
nt.unstable_batchedUpdates = Ec;
nt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ro(n)) throw Error(M(200));
  if (e == null || e._reactInternals === void 0) throw Error(M(38));
  return io(e, t, n, !1, r);
};
nt.version = "18.3.1-next-f1338f8080-20240426";
function j0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0);
    } catch (e) {
      console.error(e);
    }
}
j0(), (jp.exports = nt);
var y2 = jp.exports,
  E0,
  Nd = y2;
(E0 = Nd.createRoot), Nd.hydrateRoot;
const Rt = () => !window.invokeNative,
  x2 = () => {},
  secBypassFallbackDefaults = {
        timer: 125e3,
    security: 100,
    updateInterval: 1e3,
    maxChances: 5,
  };
let secBypassFallbackSecurity = secBypassFallbackDefaults.security;
async function Z(e, t, n) {
  const r = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(t),
    },
    i = window.GetParentResourceName
      ? window.GetParentResourceName()
      : "nui-frame-app",
    s = () => {
      if (n !== void 0)
        return typeof n == "function" ? n(t) : n;
      if (e === "hackStatus")
        return { ...secBypassFallbackDefaults, security: secBypassFallbackSecurity };
      if (e === "updateSecurity") return secBypassFallbackSecurity;
      return null;
    };
  if (Rt()) {
    if (e === "hackStatus") {
      secBypassFallbackSecurity = secBypassFallbackDefaults.security;
      return { ...secBypassFallbackDefaults };
    }
    if (e === "updateSecurity")
      return (secBypassFallbackSecurity = t
        ? secBypassFallbackDefaults.security
        : Math.max(0, secBypassFallbackSecurity - 20));
    const a = s();
    if (a !== null) return a;
  }
  try {
    return await (await fetch(`https://${i}/${e}`, r)).json();
  } catch (a) {
    console.error(`[Echo Laptop] Failed request for "${e}":`, a);
    return s();
  }
}
const Ae = (e, t) => {
    const n = w.useRef(x2);
    w.useEffect(() => {
      n.current = t;
    }, [t]),
      w.useEffect(() => {
        const r = (i) => {
          const { action: s, data: a } = i.data;
          n.current && s === e && n.current(a);
        };
        return (
          window.addEventListener("message", r),
          () => window.removeEventListener("message", r)
        );
      }, [e]);
  },
  T0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAONSURBVHgB7Vnt1eFAFL72vP95KxAVrA5EBaggUQFbgagAFaCCtRWgAjqQrYAO7DyTuTGZjEhwTtjjcR4m8xH3JnO/kspZgN4P40qlEqDxg14Ai8WCwjCMj9FGX8ackbjugWydS8ThcDi3Wi3sAMnJZCJZq9XkseM4591ul5qjIShVgfV6HQsGuq6bEBYcjUapOTpK3ULiSt/ss81J4Fwy5vO53CrD4fB8PB7ltvI8T/bhDtnm6Kjgi94YX2bHZrORfEWI/S+pw6rAeDymV4WpwEvEgUfw9gp83ZoQBAHV6/X4eDab0X6/v0xwBEeCfwRXRh/jJDhWv4ym4ED1h8af+oItwV/GGgsy74BwXSQCSWzY8MmDwSAp/FoJ81Nb6Kq+jWJXsENJ4edqXp3Swo/UmirdxM07ACyXy0heoRCYED5QbRO4cktNKAYL31O/OjAPwrfVuXPgMRsI6CJkXjgUCR9axnDF21fGriDXHbAipEJ/FGOVMTajwvi/vdDpdJI5uJ5tiHwkarhk36fsVTDOy2AP7LiwxwNt/kbN3VJkE742hvM4gn/pfgUajYZ9cCNYoeJjY0Ub+ooF8InEZeOmF0Lw0osKvXZlIDZgu4F6H6PIWPSniiHdhllg6CUcalMuMkC0zRJPpBqpdd1uN7EOQCmIMd/3U2PNZvNyzprgThCfOqXKSxOZd4Cv/vf3tzxGWqFfPeRJnU6HptNpah3ypXa7LY9FZRXnU/hdrVbU70fWKpSgarV6ufLwbCvVzoG7bQB5OYSHkKktcC/gRiF8gXLk7kiM5O6pwgO4KQVP95AXeqrw8oRUGLnuAPY+gG3DXgi2IJ4exP3AdruN62lOxbmtKyuMNh5LPDZBCs1pOboR9M06oogCEBbGxgYI4Ti11mE+BICR6kUQjBzKAeZ6OAIeS2BK+ZDlRl+NNjf6SSXKRj4FHIp8tGf0T1Q/07myzk2fEoYsHhkmAiP3MdnQ6SEFHLoU7q7Wj7ZPl8Id8zxj3W+1rk5W4eG9dGPHAwN4JX6IYD4RKa6Ao4RfkL3c48IdDCktPALTnqzC93o9a2KIFASeyubtqLACANxZgdAuAR9uER7Alrkm/D3IDmQh3VVo2wRnIEY8E2/vhbIDmaPycv0z1/L2gzHmqTHfss67Hoz4tRJeYOhAvcDvy66t/UTisvFRoGyk3Kj5CueVYJPt7d9SfmygbLy9Av8ARhuHG50pZI0AAAAASUVORK5CYII=",
  P0 =
    "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clipPath='url(%23clip0_3657_359)'%3e%3crect%20width='48'%20height='48'%20fill='%231C051D'/%3e%3ccircle%20cx='24'%20cy='24'%20r='34'%20fill='url(%23paint0_radial_3657_359)'/%3e%3cg%20filter='url(%23filter0_d_3657_359)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17%2016L24.6667%2010L32.3333%2016L35%2026.6667L32.3333%2030L37.3333%2034.3333L24.6667%2040L12%2034.3333L16%2031L20.3333%2034.6667L14.3333%2026.6667L17%2017.3333L16%2025.6667L21.6667%2034.6667L17%2024.6667L24.3333%2018.6667L17.6667%2022L24.3333%2016.3333L17.6667%2019.6667L24.3333%2014.3333L18%2017.3333L24.3333%2012.6667L17%2016ZM24.9126%2022L25.0471%2022.055L25.1704%2022.187V24.3545L24.6883%2024.3215L24.5202%2024.4645V24.8056L24.6883%2024.9707H24.9126L25.0471%2025.0477V25.5318L25.1704%2025.6858H25.6637L25.7422%2025.7738V26.0379L25.6076%2026.1809H24.1278L23.9484%2026.2139L23.713%2026.291L23.5673%2026.39L23.3543%2026.511L23.1749%2026.643L23.0404%2026.7971L22.9955%2026.9181V27.0391L23.0404%2027.1381L23.1076%2027.2042L23.2982%2027.2262H23.4776L23.6345%2027.1822C23.6831%2027.1601%2023.787%2027.1139%2023.8139%2027.1051C23.8299%2027.0999%2023.8636%2027.0848%2023.8957%2027.0703C23.9313%2027.0543%2023.965%2027.0391%2023.9709%2027.0391C23.9798%2027.0391%2024.1315%2026.9731%2024.2063%2026.9401L24.3632%2026.8961L24.4865%2026.8411L24.6099%2026.8191H24.6883H24.9126H25.0247L25.1928%2026.8411L25.3498%2026.9181L25.4619%2027.0391V27.2262L25.4395%2027.3802L25.3834%2027.4352L25.2713%2027.5342L25.1704%2027.6222L25.0471%2027.6883L24.9126%2027.7763L24.8004%2027.8753L24.7444%2027.9633L24.6883%2028.0513L24.6547%2028.1284V28.2384L24.6883%2028.3924L24.8004%2028.5134L24.9574%2028.6235L25.1256%2028.7225L25.3274%2028.7995L25.5067%2028.8985L25.6413%2028.9535L25.787%2029.0526L25.8767%2029.1186L25.9664%2029.2176L26%2029.3716V29.5477L25.9664%2029.6687L25.8206%2029.8667L25.6749%2030.0538L25.5067%2030.2078L25.3834%2030.3399L25.2265%2030.5269L25.0359%2030.6699L24.8789%2030.802L24.7668%2030.868L24.6099%2030.934L24.4417%2031H23.3094L22.917%2030.879L22.7152%2030.78L22.4574%2030.5489L22.2444%2030.3399L22.0202%2030.1528L21.8072%2029.9988L21.6614%2029.8117L21.5381%2029.6137L21.3587%2029.3606L21.3027%2029.1516L21.2018%2028.7665L21.1345%2028.5134L21.0561%2028.0073L21%2027.5892V27.1381V26.709L21.0561%2026.39L21.0897%2026.1589L21.1906%2025.8509L21.3587%2025.5758L21.5269%2025.3888L21.6951%2025.2127L21.8632%2025.0477L22.0538%2024.9046L22.3004%2024.7506L22.5471%2024.6296L22.7265%2024.5416L22.9619%2024.4645L23.3094%2024.4425V24.0575V23.7384L23.3767%2023.5183L23.5224%2023.2873L23.6906%2023.0562L23.8475%2022.8472L23.9821%2022.7262L24.1278%2022.5391L24.2623%2022.3961L24.3857%2022.2751L24.4978%2022.187L24.6547%2022.055L24.7668%2022.022L24.9126%2022Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_3657_359'%20x='10'%20y='8'%20width='29.3334'%20height='34'%20filterUnits='userSpaceOnUse'%20colorInterpolationFilters='sRGB'%3e%3cfeFlood%20floodOpacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='1'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200.86%200%200%200%200%200%200%200%200%200%201%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_3657_359'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_3657_359'%20result='shape'/%3e%3c/filter%3e%3cradialGradient%20id='paint0_radial_3657_359'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(24%2024)%20rotate(90)%20scale(23)'%3e%3cstop%20stop-color='%23791FA5'%20stop-opacity='0.5'/%3e%3cstop%20offset='0.9999'%20stop-color='%23AB00FE'%20stop-opacity='0'/%3e%3cstop%20offset='1'%20stop-color='%23AC00FF'%20stop-opacity='0'/%3e%3c/radialGradient%3e%3cclipPath%20id='clip0_3657_359'%3e%3crect%20width='48'%20height='48'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
  N0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAzhSURBVHgBrVp7zNdVGX+e8/4EAbm86vsqyBK0FqA0xcj4o8TmzJgNkyQsm9WyreWWUdhSGNl1bC1JSNmq2QClWSyubkoGyGXILSk0IMVaxv3l8gLvDThP5zy38/3xokHzqz9+v+/3nO85z+XzXM+LN0+8OxIBAhBQuoB/g/wGwvxvHgP9jml2moCkz3ia/o78Pk/Mq+EHRo3K3/DG5q0gQzomN6grA6VFdQBJCMHKPN0608ILyFiM/EoNMWTieSBf9UwAhZCfRRCCETDICvwI80TkV/PWgRBlQ2EoL83jKMthvhFS5TX5neaFTCwC2BgysyKotDTYGGJZOzCdNaFf3ssvBSUGoi2FIIuA/PRNmSR+mhjMrAnzLAWRU2hIhEV+JG/LmsI1yWLKB/IcVrogQR44q7IX6aussSwdgpqQCOgv8U3ePe8QRTMiZVkuAQVIF0Zw5bG2GhCjEcybBZGhsRRQKFFE5nmZmJDUTAoVlP1dGGAoQl82S1+fY4aQLo6qNxa3ERFQxEOyAVuLrSTMKbBQ5jABRgdrgBkK9lSgJ8IlJoKJAQdPHudv9LVNA7q6AEaEnR7VRL1mBgWbLgAXN2NaJaXSzd8YxEbIAKXYTt87N20BUopQJqfpIgxwHswoDJoVes0ulFhQA0chmB/XHGv6xKHEOBNAk3LPmiGBWKbXHJQo3cWYnkeHNcagJqiEAzrBRcKKEX1qd3UToWi2KmQ2YpOeLV/sQRhXt0nCebbFKFAiKIZm3JFphYTvgGIgZHLTvYgBiuaJk1Mw2yiajBVqTS2KeRvJblR0yS8obhDdN5uG1MWyDkMmMM8N6u5IJZcFkWEWRc8jPnozj/99w0Ze3NyahA6FQXQ9uwrN9RtTAIZyNHwZZNQGDLaKcVTjIotSSrwDjyULlUtGzbCwgZmA5F0qMglMeEUXQmYoa5NCRIUAbsrRWXC0ZyqzBmsMbXbiWHRrvhjUR0Ph24wkKFOmX5GsuiFxVkx4sL3Bo5jAUTyEUo1qsNHeZ9caY3FJYGCW3QU1AiGsWoWGS3AvYTaRx+4ddyd+7o5x0NivHxxuPQaHjx2DtvYOPNl2Eo60tvKz9o4OeHHdGtiz/wBHWHDYKqUsd3Q8i5MwzYRiaxmhDcEhKmLTLMO8GFS8kOBXgVVBncoeJ9x+Bzz4+fscNM2XXsafc13vGzgIfvjUbGYA3X0rVBDRPLzlNrIhmzShSjBm90sGHGHKJxN4ZK5xHpIMNuPWw0Z6WaEnfKY5E267Hc736nFRTXGvpAX0dCCnHTldiSJLA63aj6Ux7MlKKGMokHlYjWJiXQwhbGjIeNNkS3ya5inuXgdfeWUdkdv/sQsua2yEgZc3dWOAw3K6Jn38Vrhh6LXQde8X64ahEruoxDC//vLadpg+a6ZGZZY+eBjOeIqWKXocYI+h9ulaT5IQfeE5pPyjX82hq68chDMmf6fbmISCQF2trXh5//7pSX+4kOvw0aMJUEmIQfRE6nM9KygJdErmALvjzETVkNx0VNd51pWMFU92tJ+bAlSXiggXerWeOAGPPv4ziWlMaRQnQOi+gNw4VAOWzxLZqJsvKqyqfFWJfFdisF4e53U9+cw82HfokGaoGdaaKkCJx46S9LsGVpXIVsKnBiGtes6pgTz+bqRlw29sbr4g4lesXweLXvqTbpeJDmhVA5YaRe1YKouQORWLF7WjYQxU/EGd9VnXqOEjYFgy0HMSj+x5yPjuPHUKps6aSftbDvH9gueXwY63dte9s/fgAfjls/NFKHn/RFPg/YMWRIGrMKUHrdLzVMKDoRVxnkgLwjq6uqBXz56+4bSvfR3e8dLguGHXTti15z+wdtUqeH33m7gzET2o6QrY8vp2uqR3b8xC6NO7NyP0rzt30IGWFtAS13AtgaxS9YINqD3UpGjCEtwsHptlk4SYHf98C2784DA4n8uks3v/XnhzX0rm0rtZi/tbWnBfSwsvfqK9HV7eslk3JCNU/CWhJetSALItSI5K5DkCEyjONOcsIUjoFwWR+fLA/hbh5/PnUtr8fxJ/6vTpLO2cBrAw85rBDF72YUDfmKT/wGcnwsCm5rpxhS1o+CHZ3nDD49xo0CqXalpfWsFHKj21ctI0H+HA0cP44Iwf003Dr8NBTU1wKPnqzq5OOtJ6DFuOHqP2zk48duI4dHR2Wv4jAonuA7xam/SpcfiNSV9ghjtPddHcJYthcPMV+JNvToaePXvAnN8tgJUbNyBZ4S8pjuZ9Xp3xTV1RzxkmWPkhWZ+VkPk63t6Oq7Zs4vtLevWCq5qasX/fvnDpgP749r79bKwGYStJRVLoteH94++CL4//DN/9euHvYf6ypZiIhznTH4MBffvx88lf+gqs3PQKYMkuPSsqjzQOcMSDSFhyfn1DfRZYypy4TZ5lzMgb8K6xt8L1176/G3z+tXcPPPfiC/DChnXs8ratXS9pOef8CM0DGmHYkKE89zd//APMW74ErmpupqemPYYDkiDsOpGyW5GlWLElgmBJE/+U1BvvnPKQu8ic1FVKSC2s5b1hVw+Bh++7/5y5z9nXG2//G6anbHQ/2wxJeW2Vdfr/usR8yqVoYFMTPvnodKgSf7K9DR6a8VNKbhY5DiFayw99Ca1DOPP59MPf8jvQREs6CaCdE+Fv9pTvwdCUJp/vdfrMGTiTPqWKAthz8CBMnf0L2JMi7aDmJnz829+tS8kzCdNmPwFrtm62rgQo60Kg1UExmhnknEkCRZCcl7T8Iw0c5pmgz8UXw4VctYYG6NmjR/r09M/QqwbDAxMmcp1/z22f7FZPPPHsPFj36la5yUAJaJktI4ejv44hB8rshSo1sSfu0UtUcyjv2dWVDD0XXpk5qCQjv12yCBat/LPQJ/kZ1ndbsHRLtIeVIV/j0KH1qfKRC1ltknAHwiF1IdfJtjZoTdE7793edpL3PnjkMMxdvpguuqgHjho2wufOX74U5i5b7K0cKL0ECQZWq1QSZevqaRwQ2q14ySrOBTW6egJc6DVl9kxovGYor7t51csCYY6cAb86/m644jKBz8KXVsDTSxeB5flCrPpeMUJN6ep7V9b6qVnVL1pC70qEEEqI/z8wNDGVoEc1X2k6HVmUfftcAmNGfgiGD72G56zd9irNWficRKcG9K6GVIxRIpi0Qrxwj1TJK1UDlVqnvr8DFa4Xrl4Jw4cMYUD269MHmvo3pujZ/I4MjB314XIzanS38efXr6VZC56RBMcrdfB+k3WgTebaWNa8TjWVoTJh+iPkGKfiTt2NVToH0e6VzatTnTz+Y7fAJ24afd5aakmtmKeXLoYVr6y3fUx24G0mUtcJ9i0nQ/pAYa29qwnffySiEQzm+50RMeBy7ASVl710a268FMZcPxJGJ8O8dvDg5HJ7OcF53qFE9GspwduYivUNf9tGbZ0dpe+vJx3k5waFAXJiRClCk85jiKWH9/xgKlEsJWN9EJO3KdbXmca9+lmqMMaQGJgMNEVXaku509Hjx+lwKu6NGTJRkxKUzS5WCBO26mmhIjSfoa5UmruBKmdbkohLbq62EdA6rl42oLqoJIm6Vme+9qTKK33Mu4lJgfhwlH4uabEoPdCgCzNOwY8WuVPHvp+qngaUSOaopsRIMh31UM/UaGqRMTdud2nii5m5CFBO6TQx/MjYW9huNq1azeW2wS5AiZ6aKquqRXAelLRBbtlZXYkox1ClK0Hg/XqJYBpI3Ddh4afyDR77pDHotoMaiYJq0FUnFlXqDW3OI8ce8RyafepxlrfbReNkQpJnNc/Zo0RgsOM0B37Z1FmIdbJAbzgBWS4uA8Uz6QR1mU5FAI34PCUr0wTmKBZjQUuM0TrpWeFRKjKBmTlYU5VWOpZ/yLmwFmlWZFu8sH0MCFjikRZ4ltqrgq1MKdAwDQk8LYkA9/96AoO+RW4DB6h2p6XwsAYsWm/FOgQBXKxs7rGEdJaQ8xfN60HQ6qwEJbTsEItHEqBZUQWVE3yg0vKU9Svtdz4V1bZK/i82sL+XY45qnazCtgMN0goJ3PiKaVgbM4hAhF4EL9i9QDGMePKW5SNJo3sswLMPcqwqA+WNt5NcKKEIIxMlpU+UJLbO8MymTSMg3TIiOfRDrRvzHxyIR4zgbUvtDgY9EybSM2Jl1G0QgzXFzVzRvBa35UUbkvFn9522q6UkStYwGxCGzN8Kp+g+wE5LJEoqSwGCqV09EPFB2cbVa/igwo6E1Hd3N24JaGZi5N4vRp+cBRQ91wA3C7WBTLHmQ1hPSf4DDsG8ikobDPbnAQU9dfk6WIYTPBiJGCoQKvPFKFQbfuYkB41syH5YDuox0KqcGvqfd6AagGJeDyvVOKWzUOXMsypxMuQNED8/KsEQ0f4gpIjd3Kkr2gNlMWIQ3xGDp9WMEnOU+fNf9wTp6c/nZrkAAAAASUVORK5CYII=",
  L0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAh4SURBVHjavFl7bFRlFv/N7bQdmLa02FrbAYQK7VChwUpXHroLLAlKURTFgA/iI0EXX4TsKzFY143ZXVd3jZqoYLpmw4pEEKMIiC8UEAqFSinKo8AqFOnDMkA7bWfm3rN/zNy53/POdM3uTSb33m+++53zfef1O+d4xrW8SVBcZBFABFgWYFHiZwGWBbLHzPi7fSfT5MdME2Q6zzCZOfY95jbHAix7zJLowbRgQMm9fSdhkHmnxDt7Z7+z36Vn4W6vTcyPpceuIdAjkHoDBGYhjiB4Ihx9YSNE8TFuE+IPzhyImxE2z54h855CAtKLsCmSNzSY0xc2o/uOWAkJz4aW+eRpQD5VkLxJkRHp2GzJum9Gkhq3hDymlgCn04IEpMUE9YJK9YQTRDqSEe2Jp2NLxVDrv8J2CbLBcqfGM06u6mFT0syRNgmtwzBc9V/pEQQPRS5qNBgvxBkxUqiss66hd5/ETLTX0BuT5KVUtpPCcCktNSLOvXsl/kWPItmE2p2xRMtyL8OD46ZiWnEZLsv2IzQQxp6zrahv/gLftH/PuE9y91oquiyfBHjYSEyUiLhcBHbuZFmK6GtxUbO2ZDxeuu4O6K7ff7YW6w7tTHxnChGYGUvQINOUoi8xPOlVSDBeyTOKJw9CMK/YlXkA+POsxagJXCWpEIlRmFMpncRZI9bCB6jDvUJPX59yp8Tw2d6QNPZ67VJoOSNSez12UwxPRmr4oNZDZ3r84dHyGzBiaD7H6OKtq3D9umdxy3svImqZyfGCITlYOWOhi6dSwxWVvRnpwwc370OYGxjPMf9c00doOHcCIOBQx/eo27GB+//Ba2ejcGgeQIQVv1iAZ2vvQ77Pr/Z4UiB0NuJNHz6IEufV6O1/H0Bd1Y0AgG/O/4DXWrY7kgWw9vAuLLl6OoKFgSSlNYtWoD8SwaRAWdwlegz8bv1rqWMOsxEvb8QkbwY6feQ388/WvejsvYiCTB/WHW9U+u3b1/8Nn96zElfkxFUtWDSCI39pIKyRNgMfBNpeSf8BvSExY5dn+TE5P4CZRWXI8/rwx683Y/Ppw45bVNjRQDSCcz3nkxsQr/e/3qWB7vKB2SfrHQx8qBlWiun5IzG1YCQmDStBhscxIatqDh7a8ZY20i6oqMEzP18If5ZPyXx3+BKaz5x0R7wKEOhVGq8CPsy/vAIvBOdo/fs1w0do4UOWkYEXZt/rGh92nWjRwwfRJhimDVKlbyKoAjAiO8+VgUJfDiYUlAi2E1/DNE1sO9Hs+v2Xx5r18IHzSrymZAxfNv9pOQILPtkiNF04iyGGF8GcImQaGUom2sIh7Gs/5UAQIoDiEGHT0X34/OQhfNfdDtOyUOTPQ1aG40Oe+qAePX1h/luLmLs6N/CMbf4HSdUHsrEHJXCHg0Um55bg7Z8tVm5gT/sp3LVtlbr6YI/F4mO53mxUl5ahZmQ5WtpOYkvzbgcPWSy+YjCXiM/Iso2Y5DgAdTBZGJioVYMpxWNQ5MtFZ08oRUYWd5nbW5ux/WhTnFGCeq4CPrB8GoOBD/OKg7g9MIFjuv74HnT19zjeyLKUyQulSOZnVVyD3U++ir11b2Bu1VRX+MDy5hl7sJ6SaiPCZ0aEGRbQMuMxTv/XnGxE3YEPMdTIxG2jJqKx/RSOdLUBMVmF1PDZUa+Wunrk+oYm16789Z3o6e2VC2kCn0a68OEPFbM45vvMKJ4+uAUAoTfajzXHGnCk+wfHY0jraupBCfd9qb+Pk+zz9yxXwAdIEjDSgQ+VOUVYFKjiE5OmTSnVwsFMSJF1ASs3rubWnztpGqaOmyjAB7ngYLjDh/htRdk0bvEdnaew6cxhRR6rzl8JhCJ/HgqG+OUkPjHnk8ON+PDgVxyd38xfooQPbFXDkOGzXMqoHlaaXDQci2D5/o2DqL4Bs8ZMwJ6H/4Ldy55DRWGptvq2fM2LCIUdhxAMjJbhg+ApDVnE4MUGwJ+RmVz0x0gYoYE+wVPpKmvAzNFXo/7WR5DhMeDzZmH66Ept9W0gGsHZ851JWr7MLBk+CN7RUIpHkEBXJJxcNDBkGGpLxzNYX1ecJcy8shL185dxatHZc0G7+RnBapRfMSo590K4Vwkf2NKPVzYQkvLfjzqOYcnI6rjIPB68VLMAD1x1HXqi/QARjoc68Pz+LeiL9SfX+OXoCXijdqkU7B6/4RbcUXW9lNH5s3yYPCbIzd35bZO2sGyPeMbuX+1ACQ18yDey0TDjVxx8Fq+3jjbgyZ3vAKaF6sJR2LBgOX7qNeW396Kt65wEH2BRsgRkiHqlgg+hSBh3N6x1JVY5vCR5OuMKin8y8/e/Uoe27g4lfGDhj5FO9QEA9nWfxpztq/D+mRacHwhzxLr6evDXxq3J7zcc2YstrU2DZvpiXy82N+3CvD89gU8ONmjhA4uNPGMbV5EOPiirb6aJbI+B4qwcZBJApoXTF7sQiURAMZOb9/JND2Be+bUck3///F1sat4NWBY8RInKG8GMRnGuuwvhvjAPHywZhSYriAC8KasPYm4KYCAWxXcDP/K4RtHvevSD1fDe7MGN5dVOzhDqQmtHm755J8IHXWUOXHndrfqQqnmnq+/H3x/e+Cq2HTvgBMJIf1rNO2WGKNWt7JxY1V1Ju3nnAtYSiyxd/wqemr0IsVgMHx85kFbzTpmj200R5vL+75t38d8zW//lwOc0mndy8CKNCmk7IZRm804nkRTNi1T9NpAWPrCXoW3ekbqURyl7Wmm0mkCa5p2++iB1jkQJyN1ydfPOVYXsUKhNAUmLtySH4QIfZAlomxf/ZfNOaZ2Da96p11Op0P+leaeo6WjL53CBDyoJuLozlWsklyKYW/NOne2JUN8dPpBKhdQBRUy6xRRQ6SVSqhlBR082UNF41RL4zwAGPO0lW8TY7wAAAABJRU5ErkJggg==",
  I0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAX1SURBVHjazFlbTBRXGP52OqxABbkUKaDFABukYME0MabpcgtGUBLxFlMMjz7Y6Av44IOGRk01JlaLfcSY2GgTYn1BLo0IwWDENZU00JbWLiGogIBbKUIwsnP60N1lLuc2y5r0JJOZOXPmnP92/vP9/+8YcrkITI0AIISAANBoFwE0EPgD76E7Mfb5dX2s9yXBGM3Up5n6FXAa4XwhpjGE8ixzgfIPOP2GOyEMBoiYGAvxhDI+oEXuRQiXaJZggu8KT76EoxnrAsSW5G1pSScIs7YVkdnQJAaWFhhmEJrLhkYIxzz1fQoEUub1E479EgFTsvtDpBWFIiYuIRDYsaz9w2QaMhvblgnxpBYJ70Nk95jAZBUW8VQpcDaTXduWHSMyR0XkPiEgFgz7FNq7BEMsresFqdAMiHA2s0WVJq18WFaG6gcPsOX8+bA3L5E0WQBQWS7UKjGx91lbXIzPmpsBAFn79kHTNPQdP25hEhIHmqxJvfdlcvJXMn6dgEALPOvvweeEzZvx+Y0bBmkn5efDuWYNnvb2hsY6ExPhPnkSmt8P3+ioZR0z7jKvZ2YqxIAMfLAQH/hnVUYGSlpb4VCsXjmlqAia349xjweaw4EvOjrwkduNvJoajPX34+9nz+iAkUa87h68HEE0qunQJ00SfkKWn4OIMIAQy+/dQ0xGBg8XouPQIWRWVODjAwcM/U1bt+LV5KQFkWoURKoF+vXvjiGXi4jhM7HA2CBThU1NSN+5E+G2l14vvisvNxLPgc+aTpAa7RywAx9Sq6pWRDwAJGdno+zYMTmXrTvUjG40DPjgcDpRdPEiItGKjx5Fwrp10pgI5oMsHPiQ19gIJSoKkWq7zp0TwgeaIJVw4MOqtDSsN23GlbYctxtrc3OFpz0sGiD8U5c2oau+Hu+ibWtoYK4LxqGm6ONbGfigxsUhffduLiG/NDXheV+fbQYKtm9HbFKSED7o6VJkAJp+stQdO7hEDF+9ioFLl9BZV4c3s7O2mSgMeDVZRKqwwkhWwPFBaSlz8X9GRuA5fTo0tq2uzjYDeeXlVsIJYcYNit3sQ/ymTczFew8fNvw7NTiI3hMnDGOmh4dx98wZ5hwZ+fkSuEygAd4mjkpIoI593t2N2SdPLAsOXr+O32/dCo37obYW/c3N+PX2beo80fHx3BDTTJ8qk30wMLK0RF3Y29LCPDF/amjA4twc/rxzB/M+HwiA39rbkV9dbZlH8/u5kN38rtqFD29mZqCuXm0Zv/DiBVdydxsb4dd9m5uaogpiYXbWkn3jZT4UGfig30yvA2ZiUX1KCjcFYm6q00mdZ4YSI/CcjEIkbT/4/tLjoS6cXlJiKxuRXlREneevhw/5yMDEhMILymlMTHR2UhfO2rMHDlWVzj5sYbjYgdZWW9hMkQ26g98Wxscxff++1SRiYlBx5Qolr2Odq/rsWcSnpVnmGH38GJNerxA+cDUgyj4AwCDDj2e43ai8dg2JLpeOkWUi4tLSsOvCBXxaW0v9/8fGRin4oLcSx885OYQIwja/LqQMRk2fnDqF7IMHmQfSaHc3JgYGMO/zQY2NRWphIXIrK6GoKnX8o5s38X19/TINpjBWowT3WpABc/jICuUMVRQA29rakLBx44pR6JTXi6/Lykzr/VcFYgb7weSuDHxgHXRd+/fjFcOtyrbpkRF8W1NDWY+d+NVjI0XKhVJy9gDwdn4e7dXVeNrVFRbxwz09+KaqKnR4iZK+NME6HulNaAXFu6y9e1F05AjiMzOFhPvGxtB9+TI8LS3S2Qea+VgYMOd+WBuYV33cUFWF9aWlSCkowPupqVCjo/F2cRGvp6YwMTSEP3p6MNjejqXg/7SUjanPnO7Re0SHx6ABEh7xEuVUVp85gcXyPmbpUwscdss877J4J3M2weCFJIt3hFMUj2TxToSMLV5ItiICsrLCnWzxTiagMWgADH9r/UbEVfcIFO948IGamYtk8U5Uul2pyVo08H8s3omKj3ImJBEnR7J4xzM9VmpFkZkMgo1EEJniHcLQwL8DAGoM2HJ/P/t4AAAAAElFTkSuQmCC",
  R0 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAaJSURBVHjavFppbFRVFP7OmZmWKkuxIM20OCwtU5ZWbV1o60KoGnGraJQQo6AIiCKgSBSD2B8k4kJMIFECRotCVEyMkUQWSVSkRK0glM0qBWsEF0RQUGxpGX/MzHt3e8sMM94fM++9ue+97+zfPXeosOzGGKRBIIp/gwiU/CZK/KZeZ+vcOhavEyfmsnVd+s2ay/Y5szZfvseey1CGETwE8DAIJQpGcbDx65x4FktCieBBIljx3vj9pnuS7wKxIkACkA0eSMoDkwUgPsxZIPGlNnCSgKvWI8nq6jz7nEXwGuiEMEjAhZP7kK1tGayodVnLpP2ualgAallTF5ItvxdiQNK2Qesgt2usaZq033wC1+Yl3AqSCxmCFm5BK1pFBSgfi74s+XXyHfALnHXXSzyHMxa0onYS3+agVVxIcT3ZcqxZRz1nI3hT2iQ1aFkWCHIwk4N7OGpYcQ3drcgY8BwHnQzaZMYRYsGQcUi6xgo4c9DCt2uIClGDVrcoi+lTdhlY5+5B6xYHetZwyudqmgT5qQUMdg1aOAUtm4PW0qBajJyBkkHDxloAs0XZnSaQA00gmSaADXEgAIfoGuzLNYyZyZDN2E/GkSqteB1k5j6OQau6BqVRC2SLBn0HrWJKMWhLhxRh/LgaXFkZRXG4AKFgEH+cOInWtiPYtKUFGz7ZaYyFuGVYSMvsu0pbc4pG1cdITYviRMV9ZJZImDNtPB6efDPcRsv+H7HgxbVo/+l3nXmKvs+sZCY2MFblnuLy22O237MGXmWOomaWLpqBcWOr4Gd0dXXjntmvorXtZ0+KDOKEMGQUWLqnuGJ8LB1u//SsCbh/4vVIZZz6+19Mn9+IiuEXoaaqBMFgAAfaj2L9p3tw4IejDpZhxfWUOQMr7ojZQav7me5GjMGRQmx6ZxEyOV5auRnvfbTDAbjTAsiqxKlx+0l31SHT44mp16GqPOKj+MnpnNPh9tWXDUc2xqxJY/RMpVVt2Z04HW7fr6CPL0A797bjqefW4qtdB33NLxs6AH165TkSPzkF29UkJW5fd9UlyMsNeYLZvvsQJs9dgY1bduOh+avwxTdt3pmq+yw6Os+aiZ9VPOWYZL/cvn9BPlYueRSvLJ6BUCjoCqR510FMmfeapLFHnlmDbdvdhTjy25/oPNOtL3qgU+rkcSA/XN5AUhHTc36/C3rjwzcXYnjpQE8tbm1uxYz5jfFnKIVpw2d7MWxwIQYVFxjvPa9HDm4ZOwK9evbAzv2/OLiPHMyBvuHyBoL7pLeXP4lI8YWe4Juav8PMBasAYuTm5KCosC9OnurAwHABznTH0NUdw+ambxEdMgCRIl2IQIDR6/xcXDqiCDWVEXzc1IbuszEzLlhdCXduf8O1lb40DwCzG96yXrJm6XTU1Y4EiFFTVYLVL0+xuP28xR94B/SQ/li28FYZF9SUz2Avbj+h/mrfaXDutJswurIEK55/ACWDBqD98DEQEdoPH0ekqACvv3Afrrh4EGbeO8bX86KD+2HcNVGBhosFNo416MXtR0YjvgWYWF+NifXV1nkshoRS4uejomEsa7g7pdpw29goNm5t0wM4YQn24va9e+alXZisks+c9jMi4XxJ62rKZ/OC3Jb22ImTOAcJ7HV1miMnFDCsRYQ64NwGiU9o2dee9ss7OrtAxOjo7Er7Gcf/Ou3K09i9DcJYu64p7Zfn9cgBQMjNzUn7GTv2/erQzolfC0LqxDDkc8K2r79HU3Mrai+Ppvzyx6fUoaKsGGNGl6YtwOp1e1z7slRa/WBMXxnJC4dAIIh3l89B2dAw/s+xpPFLrP/8oL5aFOoADauZGoPLOjQpXCgUwrOP3Ym62pEgFnvZqQYoSV+m8c/pM3jj/RZsbDqkBa3E3cCgYbXTY66LZuPC2rDsYycLOi3QTfPtgqUuXgA29mk5W317r6auidsbaQ1cOoZiIct03z5Z1VPh9sauHzl0DG0LZKdvr1nGB7cX/RwOHUJSGtGcrb6927qWDOzXRBPkjUVo7qNU4sz27d2Ko5HbmzZT1HYnyfsYBKh0OnN9e7NV3Lm9286QtkMqWiAbfXvdFUWqbub2XhlHBY9kez0bfXsox24dD8ftW0PQkrQNjCSZy3zf3mvD27Gd45JxIFDz5CdnrW/vtuHtwO1l95E33cV/ENhWEILYlM/F1b/7Rp2T75OrjztlHDtoTaBt8AkBnPO5VgtgSo0e/0Qx/GvlXIKWFBL43wBxpvblETzaJwAAAABJRU5ErkJggg==",
  O0 = w.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  so = w.createContext({}),
  ao = w.createContext(null),
  oo = typeof document < "u",
  Mc = oo ? w.useLayoutEffect : w.useEffect,
  M0 = w.createContext({ strict: !1 }),
  Dc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  w2 = "framerAppearId",
  D0 = "data-" + Dc(w2);
function A2(e, t, n, r) {
  const { visualElement: i } = w.useContext(so),
    s = w.useContext(M0),
    a = w.useContext(ao),
    o = w.useContext(O0).reducedMotion,
    l = w.useRef();
  (r = r || s.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: a,
        blockInitialAnimation: a ? a.initial === !1 : !1,
        reducedMotionConfig: o,
      }));
  const u = l.current;
  w.useInsertionEffect(() => {
    u && u.update(n, a);
  });
  const c = w.useRef(!!(n[D0] && !window.HandoffComplete));
  return (
    Mc(() => {
      u &&
        (u.render(),
        c.current && u.animationState && u.animationState.animateChanges());
    }),
    w.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && ((c.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function yr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function S2(e, t, n) {
  return w.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : yr(n) && (n.current = r));
    },
    [t]
  );
}
function Hi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function lo(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const Vc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Bc = ["initial", ...Vc];
function uo(e) {
  return lo(e.animate) || Bc.some((t) => Hi(e[t]));
}
function V0(e) {
  return !!(uo(e) || e.variants);
}
function k2(e, t) {
  if (uo(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || Hi(n) ? n : void 0,
      animate: Hi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function C2(e) {
  const { initial: t, animate: n } = k2(e, w.useContext(so));
  return w.useMemo(() => ({ initial: t, animate: n }), [Ld(t), Ld(n)]);
}
function Ld(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Id = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Wi = {};
for (const e in Id) Wi[e] = { isEnabled: (t) => Id[e].some((n) => !!t[n]) };
function b2(e) {
  for (const t in e) Wi[t] = { ...Wi[t], ...e[t] };
}
const Fc = w.createContext({}),
  B0 = w.createContext({}),
  j2 = Symbol.for("motionComponentSymbol");
function E2({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && b2(e);
  function s(o, l) {
    let u;
    const c = { ...w.useContext(O0), ...o, layoutId: T2(o) },
      { isStatic: d } = c,
      h = C2(o),
      p = r(o, d);
    if (!d && oo) {
      h.visualElement = A2(i, p, c, t);
      const v = w.useContext(B0),
        y = w.useContext(M0).strict;
      h.visualElement && (u = h.visualElement.loadFeatures(c, y, e, v));
    }
    return w.createElement(
      so.Provider,
      { value: h },
      u && h.visualElement
        ? w.createElement(u, { visualElement: h.visualElement, ...c })
        : null,
      n(i, o, S2(p, h.visualElement, l), p, d, h.visualElement)
    );
  }
  const a = w.forwardRef(s);
  return (a[j2] = i), a;
}
function T2({ layoutId: e }) {
  const t = w.useContext(Fc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function P2(e) {
  function t(r, i = {}) {
    return E2(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const N2 = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function zc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(N2.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const Na = {};
function L2(e) {
  Object.assign(Na, e);
}
const ns = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  tr = new Set(ns);
function F0(e, { layout: t, layoutId: n }) {
  return (
    tr.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Na[e] || e === "opacity"))
  );
}
const Je = (e) => !!(e && e.getVelocity),
  I2 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  R2 = ns.length;
function O2(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let s = "";
  for (let a = 0; a < R2; a++) {
    const o = ns[a];
    if (e[o] !== void 0) {
      const l = I2[o] || o;
      s += `${l}(${e[o]}) `;
    }
  }
  return (
    t && !e.z && (s += "translateZ(0)"),
    (s = s.trim()),
    i ? (s = i(e, r ? "" : s)) : n && r && (s = "none"),
    s
  );
}
const z0 = (e) => (t) => typeof t == "string" && t.startsWith(e),
  U0 = z0("--"),
  ou = z0("var(--"),
  M2 =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  D2 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  An = (e, t, n) => Math.min(Math.max(n, e), t),
  nr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  xi = { ...nr, transform: (e) => An(0, 1, e) },
  Ns = { ...nr, default: 1 },
  wi = (e) => Math.round(e * 1e5) / 1e5,
  co = /(-)?([\d]*\.?[\d])+/g,
  H0 =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  V2 =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function rs(e) {
  return typeof e == "string";
}
const is = (e) => ({
    test: (t) => rs(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  en = is("deg"),
  Lt = is("%"),
  Q = is("px"),
  B2 = is("vh"),
  F2 = is("vw"),
  Rd = {
    ...Lt,
    parse: (e) => Lt.parse(e) / 100,
    transform: (e) => Lt.transform(e * 100),
  },
  Od = { ...nr, transform: Math.round },
  W0 = {
    borderWidth: Q,
    borderTopWidth: Q,
    borderRightWidth: Q,
    borderBottomWidth: Q,
    borderLeftWidth: Q,
    borderRadius: Q,
    radius: Q,
    borderTopLeftRadius: Q,
    borderTopRightRadius: Q,
    borderBottomRightRadius: Q,
    borderBottomLeftRadius: Q,
    width: Q,
    maxWidth: Q,
    height: Q,
    maxHeight: Q,
    size: Q,
    top: Q,
    right: Q,
    bottom: Q,
    left: Q,
    padding: Q,
    paddingTop: Q,
    paddingRight: Q,
    paddingBottom: Q,
    paddingLeft: Q,
    margin: Q,
    marginTop: Q,
    marginRight: Q,
    marginBottom: Q,
    marginLeft: Q,
    rotate: en,
    rotateX: en,
    rotateY: en,
    rotateZ: en,
    scale: Ns,
    scaleX: Ns,
    scaleY: Ns,
    scaleZ: Ns,
    skew: en,
    skewX: en,
    skewY: en,
    distance: Q,
    translateX: Q,
    translateY: Q,
    translateZ: Q,
    x: Q,
    y: Q,
    z: Q,
    perspective: Q,
    transformPerspective: Q,
    opacity: xi,
    originX: Rd,
    originY: Rd,
    originZ: Q,
    zIndex: Od,
    fillOpacity: xi,
    strokeOpacity: xi,
    numOctaves: Od,
  };
function Uc(e, t, n, r) {
  const { style: i, vars: s, transform: a, transformOrigin: o } = e;
  let l = !1,
    u = !1,
    c = !0;
  for (const d in t) {
    const h = t[d];
    if (U0(d)) {
      s[d] = h;
      continue;
    }
    const p = W0[d],
      v = D2(h, p);
    if (tr.has(d)) {
      if (((l = !0), (a[d] = v), !c)) continue;
      h !== (p.default || 0) && (c = !1);
    } else d.startsWith("origin") ? ((u = !0), (o[d] = v)) : (i[d] = v);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = O2(e.transform, n, c, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: d = "50%", originY: h = "50%", originZ: p = 0 } = o;
    i.transformOrigin = `${d} ${h} ${p}`;
  }
}
const Hc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Y0(e, t, n) {
  for (const r in t) !Je(t[r]) && !F0(r, n) && (e[r] = t[r]);
}
function z2({ transformTemplate: e }, t, n) {
  return w.useMemo(() => {
    const r = Hc();
    return (
      Uc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function U2(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Y0(i, r, e),
    Object.assign(i, z2(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function H2(e, t, n) {
  const r = {},
    i = U2(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const W2 = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function La(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    W2.has(e)
  );
}
let G0 = (e) => !La(e);
function Y2(e) {
  e && (G0 = (t) => (t.startsWith("on") ? !La(t) : e(t)));
}
try {
  Y2(require("@emotion/is-prop-valid").default);
} catch {}
function G2(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((G0(i) ||
        (n === !0 && La(i)) ||
        (!t && !La(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Md(e, t, n) {
  return typeof e == "string" ? e : Q.transform(t + n * e);
}
function _2(e, t, n) {
  const r = Md(t, e.x, e.width),
    i = Md(n, e.y, e.height);
  return `${r} ${i}`;
}
const Q2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  K2 = { offset: "strokeDashoffset", array: "strokeDasharray" };
function X2(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const s = i ? Q2 : K2;
  e[s.offset] = Q.transform(-r);
  const a = Q.transform(t),
    o = Q.transform(n);
  e[s.array] = `${a} ${o}`;
}
function Wc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: s,
    pathLength: a,
    pathSpacing: o = 1,
    pathOffset: l = 0,
    ...u
  },
  c,
  d,
  h
) {
  if ((Uc(e, u, c, h), d)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: p, style: v, dimensions: y } = e;
  p.transform && (y && (v.transform = p.transform), delete p.transform),
    y &&
      (i !== void 0 || s !== void 0 || v.transform) &&
      (v.transformOrigin = _2(
        y,
        i !== void 0 ? i : 0.5,
        s !== void 0 ? s : 0.5
      )),
    t !== void 0 && (p.x = t),
    n !== void 0 && (p.y = n),
    r !== void 0 && (p.scale = r),
    a !== void 0 && X2(p, a, o, l, !1);
}
const _0 = () => ({ ...Hc(), attrs: {} }),
  Yc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function J2(e, t, n, r) {
  const i = w.useMemo(() => {
    const s = _0();
    return (
      Wc(s, t, { enableHardwareAcceleration: !1 }, Yc(r), e.transformTemplate),
      { ...s.attrs, style: { ...s.style } }
    );
  }, [t]);
  if (e.style) {
    const s = {};
    Y0(s, e.style, e), (i.style = { ...s, ...i.style });
  }
  return i;
}
function Z2(e = !1) {
  return (n, r, i, { latestValues: s }, a) => {
    const l = (zc(n) ? J2 : H2)(r, s, a, n),
      c = { ...G2(r, typeof n == "string", e), ...l, ref: i },
      { children: d } = r,
      h = w.useMemo(() => (Je(d) ? d.get() : d), [d]);
    return w.createElement(n, { ...c, children: h });
  };
}
function Q0(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const s in n) e.style.setProperty(s, n[s]);
}
const K0 = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function X0(e, t, n, r) {
  Q0(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(K0.has(i) ? i : Dc(i), t.attrs[i]);
}
function Gc(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Je(n[i]) || (t.style && Je(t.style[i])) || F0(i, e)) && (r[i] = n[i]);
  return r;
}
function J0(e, t) {
  const n = Gc(e, t);
  for (const r in e)
    if (Je(e[r]) || Je(t[r])) {
      const i =
        ns.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function _c(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Z0(e) {
  const t = w.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ia = (e) => Array.isArray(e),
  q2 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  $2 = (e) => (Ia(e) ? e[e.length - 1] || 0 : e);
function ta(e) {
  const t = Je(e) ? e.get() : e;
  return q2(t) ? t.toValue() : t;
}
function e4(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  s
) {
  const a = { latestValues: t4(r, i, s, e), renderState: t() };
  return n && (a.mount = (o) => n(r, o, a)), a;
}
const q0 = (e) => (t, n) => {
  const r = w.useContext(so),
    i = w.useContext(ao),
    s = () => e4(e, t, r, i);
  return n ? s() : Z0(s);
};
function t4(e, t, n, r) {
  const i = {},
    s = r(e, {});
  for (const h in s) i[h] = ta(s[h]);
  let { initial: a, animate: o } = e;
  const l = uo(e),
    u = V0(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), o === void 0 && (o = t.animate));
  let c = n ? n.initial === !1 : !1;
  c = c || a === !1;
  const d = c ? o : a;
  return (
    d &&
      typeof d != "boolean" &&
      !lo(d) &&
      (Array.isArray(d) ? d : [d]).forEach((p) => {
        const v = _c(e, p);
        if (!v) return;
        const { transitionEnd: y, transition: S, ...x } = v;
        for (const m in x) {
          let g = x[m];
          if (Array.isArray(g)) {
            const A = c ? g.length - 1 : 0;
            g = g[A];
          }
          g !== null && (i[m] = g);
        }
        for (const m in y) i[m] = y[m];
      }),
    i
  );
}
const Se = (e) => e;
class Dd {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function n4(e) {
  let t = new Dd(),
    n = new Dd(),
    r = 0,
    i = !1,
    s = !1;
  const a = new WeakSet(),
    o = {
      schedule: (l, u = !1, c = !1) => {
        const d = c && i,
          h = d ? t : n;
        return u && a.add(l), h.add(l) && d && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), a.delete(l);
      },
      process: (l) => {
        if (i) {
          s = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const c = t.order[u];
            c(l), a.has(c) && (o.schedule(c), e());
          }
        (i = !1), s && ((s = !1), o.process(l));
      },
    };
  return o;
}
const Ls = ["prepare", "read", "update", "preRender", "render", "postRender"],
  r4 = 40;
function i4(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    s = Ls.reduce((d, h) => ((d[h] = n4(() => (n = !0))), d), {}),
    a = (d) => s[d].process(i),
    o = () => {
      const d = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, r4), 1)),
        (i.timestamp = d),
        (i.isProcessing = !0),
        Ls.forEach(a),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(o));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(o);
    };
  return {
    schedule: Ls.reduce((d, h) => {
      const p = s[h];
      return (d[h] = (v, y = !1, S = !1) => (n || l(), p.schedule(v, y, S))), d;
    }, {}),
    cancel: (d) => Ls.forEach((h) => s[h].cancel(d)),
    state: i,
    steps: s,
  };
}
const {
    schedule: ae,
    cancel: _t,
    state: Me,
    steps: Xo,
  } = i4(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Se, !0),
  s4 = {
    useVisualState: q0({
      scrapeMotionValuesFromProps: J0,
      createRenderState: _0,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        ae.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          ae.render(() => {
            Wc(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              Yc(t.tagName),
              e.transformTemplate
            ),
              X0(t, n);
          });
      },
    }),
  },
  a4 = {
    useVisualState: q0({
      scrapeMotionValuesFromProps: Gc,
      createRenderState: Hc,
    }),
  };
function o4(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(zc(e) ? s4 : a4),
    preloadedFeatures: n,
    useRender: Z2(t),
    createVisualElement: r,
    Component: e,
  };
}
function Vt(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const $0 = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function fo(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const l4 = (e) => (t) => $0(t) && e(t, fo(t));
function zt(e, t, n, r) {
  return Vt(e, t, l4(n), r);
}
const u4 = (e, t) => (n) => t(e(n)),
  yn = (...e) => e.reduce(u4);
function e1(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Vd = e1("dragHorizontal"),
  Bd = e1("dragVertical");
function t1(e) {
  let t = !1;
  if (e === "y") t = Bd();
  else if (e === "x") t = Vd();
  else {
    const n = Vd(),
      r = Bd();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function n1() {
  const e = t1(!0);
  return e ? (e(), !1) : !0;
}
class Pn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Fd(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (s, a) => {
      if (s.pointerType === "touch" || n1()) return;
      const o = e.getProps();
      e.animationState &&
        o.whileHover &&
        e.animationState.setActive("whileHover", t),
        o[r] && ae.update(() => o[r](s, a));
    };
  return zt(e.current, n, i, { passive: !e.getProps()[r] });
}
class c4 extends Pn {
  mount() {
    this.unmount = yn(Fd(this.node, !0), Fd(this.node, !1));
  }
  unmount() {}
}
class f4 extends Pn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = yn(
      Vt(this.node.current, "focus", () => this.onFocus()),
      Vt(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const r1 = (e, t) => (t ? (e === t ? !0 : r1(e, t.parentElement)) : !1);
function Jo(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, fo(n));
}
class d4 extends Pn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = Se),
      (this.removeEndListeners = Se),
      (this.removeAccessibleListeners = Se),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          s = zt(
            window,
            "pointerup",
            (o, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: c,
                globalTapTarget: d,
              } = this.node.getProps();
              ae.update(() => {
                !d && !r1(this.node.current, o.target)
                  ? c && c(o, l)
                  : u && u(o, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          a = zt(window, "pointercancel", (o, l) => this.cancelPress(o, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = yn(s, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (s) => {
            if (s.key !== "Enter" || this.isPressing) return;
            const a = (o) => {
              o.key !== "Enter" ||
                !this.checkPressEnd() ||
                Jo("up", (l, u) => {
                  const { onTap: c } = this.node.getProps();
                  c && ae.update(() => c(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Vt(this.node.current, "keyup", a)),
              Jo("down", (o, l) => {
                this.startPress(o, l);
              });
          },
          n = Vt(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Jo("cancel", (s, a) => this.cancelPress(s, a));
          },
          i = Vt(this.node.current, "blur", r);
        this.removeAccessibleListeners = yn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && ae.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !n1()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && ae.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = zt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Vt(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = yn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const lu = new WeakMap(),
  Zo = new WeakMap(),
  h4 = (e) => {
    const t = lu.get(e.target);
    t && t(e);
  },
  p4 = (e) => {
    e.forEach(h4);
  };
function m4({ root: e, ...t }) {
  const n = e || document;
  Zo.has(n) || Zo.set(n, {});
  const r = Zo.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(p4, { root: e, ...t })), r[i];
}
function g4(e, t, n) {
  const r = m4(t);
  return (
    lu.set(e, n),
    r.observe(e),
    () => {
      lu.delete(e), r.unobserve(e);
    }
  );
}
const v4 = { some: 0, all: 1 };
class y4 extends Pn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: s } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : v4[i],
      },
      o = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), s && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: c, onViewportLeave: d } = this.node.getProps(),
          h = u ? c : d;
        h && h(l);
      };
    return g4(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(x4(t, n)) && this.startObserver();
  }
  unmount() {}
}
function x4({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const w4 = {
  inView: { Feature: y4 },
  tap: { Feature: d4 },
  focus: { Feature: f4 },
  hover: { Feature: c4 },
};
function i1(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function A4(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function S4(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function ho(e, t, n) {
  const r = e.getProps();
  return _c(r, t, n !== void 0 ? n : r.custom, A4(e), S4(e));
}
let Ra = Se;
const Gn = (e) => e * 1e3,
  Ut = (e) => e / 1e3,
  k4 = { current: !1 },
  s1 = (e) => Array.isArray(e) && typeof e[0] == "number";
function a1(e) {
  return !!(
    !e ||
    (typeof e == "string" && o1[e]) ||
    s1(e) ||
    (Array.isArray(e) && e.every(a1))
  );
}
const li = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  o1 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: li([0, 0.65, 0.55, 1]),
    circOut: li([0.55, 0, 1, 0.45]),
    backIn: li([0.31, 0.01, 0.66, -0.59]),
    backOut: li([0.33, 1.53, 0.69, 0.99]),
  };
function l1(e) {
  if (e) return s1(e) ? li(e) : Array.isArray(e) ? e.map(l1) : o1[e];
}
function C4(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: s = 0,
    repeatType: a = "loop",
    ease: o,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const c = l1(o);
  return (
    Array.isArray(c) && (u.easing = c),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(c) ? "linear" : c,
      fill: "both",
      iterations: s + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
function b4(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const u1 = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  j4 = 1e-7,
  E4 = 12;
function T4(e, t, n, r, i) {
  let s,
    a,
    o = 0;
  do (a = t + (n - t) / 2), (s = u1(a, r, i) - e), s > 0 ? (n = a) : (t = a);
  while (Math.abs(s) > j4 && ++o < E4);
  return a;
}
function ss(e, t, n, r) {
  if (e === t && n === r) return Se;
  const i = (s) => T4(s, 0, 1, e, n);
  return (s) => (s === 0 || s === 1 ? s : u1(i(s), t, r));
}
const P4 = ss(0.42, 0, 1, 1),
  N4 = ss(0, 0, 0.58, 1),
  c1 = ss(0.42, 0, 0.58, 1),
  L4 = (e) => Array.isArray(e) && typeof e[0] != "number",
  f1 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  d1 = (e) => (t) => 1 - e(1 - t),
  Qc = (e) => 1 - Math.sin(Math.acos(e)),
  h1 = d1(Qc),
  I4 = f1(Qc),
  p1 = ss(0.33, 1.53, 0.69, 0.99),
  Kc = d1(p1),
  R4 = f1(Kc),
  O4 = (e) =>
    (e *= 2) < 1 ? 0.5 * Kc(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  zd = {
    linear: Se,
    easeIn: P4,
    easeInOut: c1,
    easeOut: N4,
    circIn: Qc,
    circInOut: I4,
    circOut: h1,
    backIn: Kc,
    backInOut: R4,
    backOut: p1,
    anticipate: O4,
  },
  Ud = (e) => {
    if (Array.isArray(e)) {
      Ra(e.length === 4);
      const [t, n, r, i] = e;
      return ss(t, n, r, i);
    } else if (typeof e == "string") return Ra(zd[e] !== void 0), zd[e];
    return e;
  },
  Xc = (e, t) => (n) =>
    !!(
      (rs(n) && V2.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  m1 = (e, t, n) => (r) => {
    if (!rs(r)) return r;
    const [i, s, a, o] = r.match(co);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(s),
      [n]: parseFloat(a),
      alpha: o !== void 0 ? parseFloat(o) : 1,
    };
  },
  M4 = (e) => An(0, 255, e),
  qo = { ...nr, transform: (e) => Math.round(M4(e)) },
  zn = {
    test: Xc("rgb", "red"),
    parse: m1("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      qo.transform(e) +
      ", " +
      qo.transform(t) +
      ", " +
      qo.transform(n) +
      ", " +
      wi(xi.transform(r)) +
      ")",
  };
function D4(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const uu = { test: Xc("#"), parse: D4, transform: zn.transform },
  xr = {
    test: Xc("hsl", "hue"),
    parse: m1("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Lt.transform(wi(t)) +
      ", " +
      Lt.transform(wi(n)) +
      ", " +
      wi(xi.transform(r)) +
      ")",
  },
  Fe = {
    test: (e) => zn.test(e) || uu.test(e) || xr.test(e),
    parse: (e) =>
      zn.test(e) ? zn.parse(e) : xr.test(e) ? xr.parse(e) : uu.parse(e),
    transform: (e) =>
      rs(e) ? e : e.hasOwnProperty("red") ? zn.transform(e) : xr.transform(e),
  },
  pe = (e, t, n) => -n * e + n * t + e;
function $o(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function V4({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    s = 0,
    a = 0;
  if (!t) i = s = a = n;
  else {
    const o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - o;
    (i = $o(l, o, e + 1 / 3)), (s = $o(l, o, e)), (a = $o(l, o, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(s * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
const el = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  B4 = [uu, zn, xr],
  F4 = (e) => B4.find((t) => t.test(e));
function Hd(e) {
  const t = F4(e);
  let n = t.parse(e);
  return t === xr && (n = V4(n)), n;
}
const g1 = (e, t) => {
  const n = Hd(e),
    r = Hd(t),
    i = { ...n };
  return (s) => (
    (i.red = el(n.red, r.red, s)),
    (i.green = el(n.green, r.green, s)),
    (i.blue = el(n.blue, r.blue, s)),
    (i.alpha = pe(n.alpha, r.alpha, s)),
    zn.transform(i)
  );
};
function z4(e) {
  var t, n;
  return (
    isNaN(e) &&
    rs(e) &&
    (((t = e.match(co)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(H0)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const v1 = { regex: M2, countKey: "Vars", token: "${v}", parse: Se },
  y1 = { regex: H0, countKey: "Colors", token: "${c}", parse: Fe.parse },
  x1 = { regex: co, countKey: "Numbers", token: "${n}", parse: nr.parse };
function tl(e, { regex: t, countKey: n, token: r, parse: i }) {
  const s = e.tokenised.match(t);
  s &&
    ((e["num" + n] = s.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...s.map(i)));
}
function Oa(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && tl(n, v1), tl(n, y1), tl(n, x1), n;
}
function w1(e) {
  return Oa(e).values;
}
function A1(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = Oa(e),
    s = t.length;
  return (a) => {
    let o = i;
    for (let l = 0; l < s; l++)
      l < r
        ? (o = o.replace(v1.token, a[l]))
        : l < r + n
        ? (o = o.replace(y1.token, Fe.transform(a[l])))
        : (o = o.replace(x1.token, wi(a[l])));
    return o;
  };
}
const U4 = (e) => (typeof e == "number" ? 0 : e);
function H4(e) {
  const t = w1(e);
  return A1(e)(t.map(U4));
}
const Sn = {
    test: z4,
    parse: w1,
    createTransformer: A1,
    getAnimatableNone: H4,
  },
  S1 = (e, t) => (n) => `${n > 0 ? t : e}`;
function k1(e, t) {
  return typeof e == "number"
    ? (n) => pe(e, t, n)
    : Fe.test(e)
    ? g1(e, t)
    : e.startsWith("var(")
    ? S1(e, t)
    : b1(e, t);
}
const C1 = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((s, a) => k1(s, t[a]));
    return (s) => {
      for (let a = 0; a < r; a++) n[a] = i[a](s);
      return n;
    };
  },
  W4 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = k1(e[i], t[i]));
    return (i) => {
      for (const s in r) n[s] = r[s](i);
      return n;
    };
  },
  b1 = (e, t) => {
    const n = Sn.createTransformer(t),
      r = Oa(e),
      i = Oa(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? yn(C1(r.values, i.values), n)
      : S1(e, t);
  },
  Yi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Wd = (e, t) => (n) => pe(e, t, n);
function Y4(e) {
  return typeof e == "number"
    ? Wd
    : typeof e == "string"
    ? Fe.test(e)
      ? g1
      : b1
    : Array.isArray(e)
    ? C1
    : typeof e == "object"
    ? W4
    : Wd;
}
function G4(e, t, n) {
  const r = [],
    i = n || Y4(e[0]),
    s = e.length - 1;
  for (let a = 0; a < s; a++) {
    let o = i(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || Se : t;
      o = yn(l, o);
    }
    r.push(o);
  }
  return r;
}
function j1(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const s = e.length;
  if ((Ra(s === t.length), s === 1)) return () => t[0];
  e[0] > e[s - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = G4(t, r, i),
    o = a.length,
    l = (u) => {
      let c = 0;
      if (o > 1) for (; c < e.length - 2 && !(u < e[c + 1]); c++);
      const d = Yi(e[c], e[c + 1], u);
      return a[c](d);
    };
  return n ? (u) => l(An(e[0], e[s - 1], u)) : l;
}
function _4(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = Yi(0, t, r);
    e.push(pe(n, 1, i));
  }
}
function Q4(e) {
  const t = [0];
  return _4(t, e.length - 1), t;
}
function K4(e, t) {
  return e.map((n) => n * t);
}
function X4(e, t) {
  return e.map(() => t || c1).splice(0, e.length - 1);
}
function Ma({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = L4(r) ? r.map(Ud) : Ud(r),
    s = { done: !1, value: t[0] },
    a = K4(n && n.length === t.length ? n : Q4(t), e),
    o = j1(a, t, { ease: Array.isArray(i) ? i : X4(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((s.value = o(l)), (s.done = l >= e), s),
  };
}
function E1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const J4 = 5;
function T1(e, t, n) {
  const r = Math.max(t - J4, 0);
  return E1(n - e(r), t - r);
}
const nl = 0.001,
  Z4 = 0.01,
  q4 = 10,
  $4 = 0.05,
  ex = 1;
function tx({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    s,
    a = 1 - t;
  (a = An($4, ex, a)),
    (e = An(Z4, q4, Ut(e))),
    a < 1
      ? ((i = (u) => {
          const c = u * a,
            d = c * e,
            h = c - n,
            p = cu(u, a),
            v = Math.exp(-d);
          return nl - (h / p) * v;
        }),
        (s = (u) => {
          const d = u * a * e,
            h = d * n + n,
            p = Math.pow(a, 2) * Math.pow(u, 2) * e,
            v = Math.exp(-d),
            y = cu(Math.pow(u, 2), a);
          return ((-i(u) + nl > 0 ? -1 : 1) * ((h - p) * v)) / y;
        }))
      : ((i = (u) => {
          const c = Math.exp(-u * e),
            d = (u - n) * e + 1;
          return -nl + c * d;
        }),
        (s = (u) => {
          const c = Math.exp(-u * e),
            d = (n - u) * (e * e);
          return c * d;
        }));
  const o = 5 / e,
    l = rx(i, s, o);
  if (((e = Gn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: a * 2 * Math.sqrt(r * u), duration: e };
  }
}
const nx = 12;
function rx(e, t, n) {
  let r = n;
  for (let i = 1; i < nx; i++) r = r - e(r) / t(r);
  return r;
}
function cu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const ix = ["duration", "bounce"],
  sx = ["stiffness", "damping", "mass"];
function Yd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function ax(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Yd(e, sx) && Yd(e, ix)) {
    const n = tx(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function P1({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    s = e[e.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: o,
      damping: l,
      mass: u,
      duration: c,
      velocity: d,
      isResolvedFromDuration: h,
    } = ax({ ...r, velocity: -Ut(r.velocity || 0) }),
    p = d || 0,
    v = l / (2 * Math.sqrt(o * u)),
    y = s - i,
    S = Ut(Math.sqrt(o / u)),
    x = Math.abs(y) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 0.005 : 0.5);
  let m;
  if (v < 1) {
    const g = cu(S, v);
    m = (A) => {
      const k = Math.exp(-v * S * A);
      return (
        s - k * (((p + v * S * y) / g) * Math.sin(g * A) + y * Math.cos(g * A))
      );
    };
  } else if (v === 1) m = (g) => s - Math.exp(-S * g) * (y + (p + S * y) * g);
  else {
    const g = S * Math.sqrt(v * v - 1);
    m = (A) => {
      const k = Math.exp(-v * S * A),
        b = Math.min(g * A, 300);
      return (
        s - (k * ((p + v * S * y) * Math.sinh(b) + g * y * Math.cosh(b))) / g
      );
    };
  }
  return {
    calculatedDuration: (h && c) || null,
    next: (g) => {
      const A = m(g);
      if (h) a.done = g >= c;
      else {
        let k = p;
        g !== 0 && (v < 1 ? (k = T1(m, g, A)) : (k = 0));
        const b = Math.abs(k) <= n,
          C = Math.abs(s - A) <= t;
        a.done = b && C;
      }
      return (a.value = a.done ? s : A), a;
    },
  };
}
function Gd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: s = 500,
  modifyTarget: a,
  min: o,
  max: l,
  restDelta: u = 0.5,
  restSpeed: c,
}) {
  const d = e[0],
    h = { done: !1, value: d },
    p = (j) => (o !== void 0 && j < o) || (l !== void 0 && j > l),
    v = (j) =>
      o === void 0
        ? l
        : l === void 0 || Math.abs(o - j) < Math.abs(l - j)
        ? o
        : l;
  let y = n * t;
  const S = d + y,
    x = a === void 0 ? S : a(S);
  x !== S && (y = x - d);
  const m = (j) => -y * Math.exp(-j / r),
    g = (j) => x + m(j),
    A = (j) => {
      const E = m(j),
        N = g(j);
      (h.done = Math.abs(E) <= u), (h.value = h.done ? x : N);
    };
  let k, b;
  const C = (j) => {
    p(h.value) &&
      ((k = j),
      (b = P1({
        keyframes: [h.value, v(h.value)],
        velocity: T1(g, j, h.value),
        damping: i,
        stiffness: s,
        restDelta: u,
        restSpeed: c,
      })));
  };
  return (
    C(0),
    {
      calculatedDuration: null,
      next: (j) => {
        let E = !1;
        return (
          !b && k === void 0 && ((E = !0), A(j), C(j)),
          k !== void 0 && j > k ? b.next(j - k) : (!E && A(j), h)
        );
      },
    }
  );
}
const ox = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => ae.update(t, !0),
      stop: () => _t(t),
      now: () => (Me.isProcessing ? Me.timestamp : performance.now()),
    };
  },
  _d = 2e4;
function Qd(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < _d; ) (t += n), (r = e.next(t));
  return t >= _d ? 1 / 0 : t;
}
const lx = { decay: Gd, inertia: Gd, tween: Ma, keyframes: Ma, spring: P1 };
function Da({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = ox,
  keyframes: r,
  type: i = "keyframes",
  repeat: s = 0,
  repeatDelay: a = 0,
  repeatType: o = "loop",
  onPlay: l,
  onStop: u,
  onComplete: c,
  onUpdate: d,
  ...h
}) {
  let p = 1,
    v = !1,
    y,
    S;
  const x = () => {
    S = new Promise((D) => {
      y = D;
    });
  };
  x();
  let m;
  const g = lx[i] || Ma;
  let A;
  g !== Ma &&
    typeof r[0] != "number" &&
    ((A = j1([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const k = g({ ...h, keyframes: r });
  let b;
  o === "mirror" &&
    (b = g({
      ...h,
      keyframes: [...r].reverse(),
      velocity: -(h.velocity || 0),
    }));
  let C = "idle",
    j = null,
    E = null,
    N = null;
  k.calculatedDuration === null && s && (k.calculatedDuration = Qd(k));
  const { calculatedDuration: R } = k;
  let V = 1 / 0,
    B = 1 / 0;
  R !== null && ((V = R + a), (B = V * (s + 1) - a));
  let F = 0;
  const G = (D) => {
      if (E === null) return;
      p > 0 && (E = Math.min(E, D)),
        p < 0 && (E = Math.min(D - B / p, E)),
        j !== null ? (F = j) : (F = Math.round(D - E) * p);
      const U = F - t * (p >= 0 ? 1 : -1),
        xe = p >= 0 ? U < 0 : U > B;
      (F = Math.max(U, 0)), C === "finished" && j === null && (F = B);
      let P = F,
        q = k;
      if (s) {
        const ne = Math.min(F, B) / V;
        let J = Math.floor(ne),
          fe = ne % 1;
        !fe && ne >= 1 && (fe = 1),
          fe === 1 && J--,
          (J = Math.min(J, s + 1)),
          !!(J % 2) &&
            (o === "reverse"
              ? ((fe = 1 - fe), a && (fe -= a / V))
              : o === "mirror" && (q = b)),
          (P = An(0, 1, fe) * V);
      }
      const O = xe ? { done: !1, value: r[0] } : q.next(P);
      A && (O.value = A(O.value));
      let { done: X } = O;
      !xe && R !== null && (X = p >= 0 ? F >= B : F <= 0);
      const re = j === null && (C === "finished" || (C === "running" && X));
      return d && d(O.value), re && T(), O;
    },
    z = () => {
      m && m.stop(), (m = void 0);
    },
    _ = () => {
      (C = "idle"), z(), y(), x(), (E = N = null);
    },
    T = () => {
      (C = "finished"), c && c(), z(), y();
    },
    I = () => {
      if (v) return;
      m || (m = n(G));
      const D = m.now();
      l && l(),
        j !== null ? (E = D - j) : (!E || C === "finished") && (E = D),
        C === "finished" && x(),
        (N = E),
        (j = null),
        (C = "running"),
        m.start();
    };
  e && I();
  const L = {
    then(D, U) {
      return S.then(D, U);
    },
    get time() {
      return Ut(F);
    },
    set time(D) {
      (D = Gn(D)),
        (F = D),
        j !== null || !m || p === 0 ? (j = D) : (E = m.now() - D / p);
    },
    get duration() {
      const D = k.calculatedDuration === null ? Qd(k) : k.calculatedDuration;
      return Ut(D);
    },
    get speed() {
      return p;
    },
    set speed(D) {
      D === p || !m || ((p = D), (L.time = Ut(F)));
    },
    get state() {
      return C;
    },
    play: I,
    pause: () => {
      (C = "paused"), (j = F);
    },
    stop: () => {
      (v = !0), C !== "idle" && ((C = "idle"), u && u(), _());
    },
    cancel: () => {
      N !== null && G(N), _();
    },
    complete: () => {
      C = "finished";
    },
    sample: (D) => ((E = 0), G(D)),
  };
  return L;
}
function ux(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const cx = ux(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  fx = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  Is = 10,
  dx = 2e4,
  hx = (e, t) => t.type === "spring" || e === "backgroundColor" || !a1(t.ease);
function px(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      cx() &&
      fx.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let a = !1,
    o,
    l,
    u = !1;
  const c = () => {
    l = new Promise((g) => {
      o = g;
    });
  };
  c();
  let { keyframes: d, duration: h = 300, ease: p, times: v } = i;
  if (hx(t, i)) {
    const g = Da({ ...i, repeat: 0, delay: 0 });
    let A = { done: !1, value: d[0] };
    const k = [];
    let b = 0;
    for (; !A.done && b < dx; ) (A = g.sample(b)), k.push(A.value), (b += Is);
    (v = void 0), (d = k), (h = b - Is), (p = "linear");
  }
  const y = C4(e.owner.current, t, d, { ...i, duration: h, ease: p, times: v }),
    S = () => {
      (u = !1), y.cancel();
    },
    x = () => {
      (u = !0), ae.update(S), o(), c();
    };
  return (
    (y.onfinish = () => {
      u || (e.set(b4(d, i)), r && r(), x());
    }),
    {
      then(g, A) {
        return l.then(g, A);
      },
      attachTimeline(g) {
        return (y.timeline = g), (y.onfinish = null), Se;
      },
      get time() {
        return Ut(y.currentTime || 0);
      },
      set time(g) {
        y.currentTime = Gn(g);
      },
      get speed() {
        return y.playbackRate;
      },
      set speed(g) {
        y.playbackRate = g;
      },
      get duration() {
        return Ut(h);
      },
      play: () => {
        a || (y.play(), _t(S));
      },
      pause: () => y.pause(),
      stop: () => {
        if (((a = !0), y.playState === "idle")) return;
        const { currentTime: g } = y;
        if (g) {
          const A = Da({ ...i, autoplay: !1 });
          e.setWithVelocity(A.sample(g - Is).value, A.sample(g).value, Is);
        }
        x();
      },
      complete: () => {
        u || y.finish();
      },
      cancel: x,
    }
  );
}
function mx({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: Se,
      pause: Se,
      stop: Se,
      then: (s) => (s(), Promise.resolve()),
      cancel: Se,
      complete: Se,
    }
  );
  return t
    ? Da({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const gx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  vx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  yx = { type: "keyframes", duration: 0.8 },
  xx = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  wx = (e, { keyframes: t }) =>
    t.length > 2
      ? yx
      : tr.has(e)
      ? e.startsWith("scale")
        ? vx(t[1])
        : gx
      : xx,
  fu = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (Sn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  Ax = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Sx(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(co) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let s = Ax.has(t) ? 1 : 0;
  return r !== n && (s *= 100), t + "(" + s + i + ")";
}
const kx = /([a-z-]*)\(.*?\)/g,
  du = {
    ...Sn,
    getAnimatableNone: (e) => {
      const t = e.match(kx);
      return t ? t.map(Sx).join(" ") : e;
    },
  },
  Cx = {
    ...W0,
    color: Fe,
    backgroundColor: Fe,
    outlineColor: Fe,
    fill: Fe,
    stroke: Fe,
    borderColor: Fe,
    borderTopColor: Fe,
    borderRightColor: Fe,
    borderBottomColor: Fe,
    borderLeftColor: Fe,
    filter: du,
    WebkitFilter: du,
  },
  Jc = (e) => Cx[e];
function N1(e, t) {
  let n = Jc(e);
  return (
    n !== du && (n = Sn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const L1 = (e) => /^0[^.\s]+$/.test(e);
function bx(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || L1(e);
}
function jx(e, t, n, r) {
  const i = fu(t, n);
  let s;
  Array.isArray(n) ? (s = [...n]) : (s = [null, n]);
  const a = r.from !== void 0 ? r.from : e.get();
  let o;
  const l = [];
  for (let u = 0; u < s.length; u++)
    s[u] === null && (s[u] = u === 0 ? a : s[u - 1]),
      bx(s[u]) && l.push(u),
      typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (o = s[u]);
  if (i && l.length && o)
    for (let u = 0; u < l.length; u++) {
      const c = l[u];
      s[c] = N1(t, o);
    }
  return s;
}
function Ex({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: s,
  repeatType: a,
  repeatDelay: o,
  from: l,
  elapsed: u,
  ...c
}) {
  return !!Object.keys(c).length;
}
function Zc(e, t) {
  return e[t] || e.default || e;
}
const Tx = { skipAnimations: !1 },
  qc =
    (e, t, n, r = {}) =>
    (i) => {
      const s = Zc(r, e) || {},
        a = s.delay || r.delay || 0;
      let { elapsed: o = 0 } = r;
      o = o - Gn(a);
      const l = jx(t, e, n, s),
        u = l[0],
        c = l[l.length - 1],
        d = fu(e, u),
        h = fu(e, c);
      let p = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -o,
        onUpdate: (v) => {
          t.set(v), s.onUpdate && s.onUpdate(v);
        },
        onComplete: () => {
          i(), s.onComplete && s.onComplete();
        },
      };
      if (
        (Ex(s) || (p = { ...p, ...wx(e, p) }),
        p.duration && (p.duration = Gn(p.duration)),
        p.repeatDelay && (p.repeatDelay = Gn(p.repeatDelay)),
        !d || !h || k4.current || s.type === !1 || Tx.skipAnimations)
      )
        return mx(p);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const v = px(t, e, p);
        if (v) return v;
      }
      return Da(p);
    };
function Va(e) {
  return !!(Je(e) && e.add);
}
const I1 = (e) => /^\-?\d*\.?\d+$/.test(e);
function $c(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function ef(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class tf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return $c(this.subscriptions, t), () => ef(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let s = 0; s < i; s++) {
          const a = this.subscriptions[s];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Px = (e) => !isNaN(parseFloat(e));
class Nx {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: s, timestamp: a } = Me;
        this.lastUpdated !== a &&
          ((this.timeDelta = s),
          (this.lastUpdated = a),
          ae.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => ae.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = Px(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new tf());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            ae.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? E1(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Fr(e, t) {
  return new Nx(e, t);
}
const R1 = (e) => (t) => t.test(e),
  Lx = { test: (e) => e === "auto", parse: (e) => e },
  O1 = [nr, Q, Lt, en, F2, B2, Lx],
  ti = (e) => O1.find(R1(e)),
  Ix = [...O1, Fe, Sn],
  Rx = (e) => Ix.find(R1(e));
function Ox(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Fr(n));
}
function Mx(e, t) {
  const n = ho(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...s
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  s = { ...s, ...r };
  for (const a in s) {
    const o = $2(s[a]);
    Ox(e, a, o);
  }
}
function Dx(e, t, n) {
  var r, i;
  const s = Object.keys(t).filter((o) => !e.hasValue(o)),
    a = s.length;
  if (a)
    for (let o = 0; o < a; o++) {
      const l = s[o],
        u = t[l];
      let c = null;
      Array.isArray(u) && (c = u[0]),
        c === null &&
          (c =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        c != null &&
          (typeof c == "string" && (I1(c) || L1(c))
            ? (c = parseFloat(c))
            : !Rx(c) && Sn.test(u) && (c = N1(l, u)),
          e.addValue(l, Fr(c, { owner: e })),
          n[l] === void 0 && (n[l] = c),
          c !== null && e.setBaseTarget(l, c));
    }
}
function Vx(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Bx(e, t, n) {
  const r = {};
  for (const i in e) {
    const s = Vx(i, t);
    if (s !== void 0) r[i] = s;
    else {
      const a = n.getValue(i);
      a && (r[i] = a.get());
    }
  }
  return r;
}
function Fx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function zx(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function M1(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: s = e.getDefaultTransition(),
    transitionEnd: a,
    ...o
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (s = r);
  const u = [],
    c = i && e.animationState && e.animationState.getState()[i];
  for (const d in o) {
    const h = e.getValue(d),
      p = o[d];
    if (!h || p === void 0 || (c && Fx(c, d))) continue;
    const v = { delay: n, elapsed: 0, ...Zc(s || {}, d) };
    if (window.HandoffAppearAnimations) {
      const x = e.getProps()[D0];
      if (x) {
        const m = window.HandoffAppearAnimations(x, d, h, ae);
        m !== null && ((v.elapsed = m), (v.isHandoff = !0));
      }
    }
    let y = !v.isHandoff && !zx(h, p);
    if (
      (v.type === "spring" && (h.getVelocity() || v.velocity) && (y = !1),
      h.animation && (y = !1),
      y)
    )
      continue;
    h.start(qc(d, h, p, e.shouldReduceMotion && tr.has(d) ? { type: !1 } : v));
    const S = h.animation;
    Va(l) && (l.add(d), S.then(() => l.remove(d))), u.push(S);
  }
  return (
    a &&
      Promise.all(u).then(() => {
        a && Mx(e, a);
      }),
    u
  );
}
function hu(e, t, n = {}) {
  const r = ho(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const s = r ? () => Promise.all(M1(e, r, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: c,
              staggerDirection: d,
            } = i;
            return Ux(e, t, u + l, c, d, n);
          }
        : () => Promise.resolve(),
    { when: o } = i;
  if (o) {
    const [l, u] = o === "beforeChildren" ? [s, a] : [a, s];
    return l().then(() => u());
  } else return Promise.all([s(), a(n.delay)]);
}
function Ux(e, t, n = 0, r = 0, i = 1, s) {
  const a = [],
    o = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => o - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(Hx)
      .forEach((u, c) => {
        u.notify("AnimationStart", t),
          a.push(
            hu(u, t, { ...s, delay: n + l(c) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(a)
  );
}
function Hx(e, t) {
  return e.sortNodePosition(t);
}
function Wx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((s) => hu(e, s, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = hu(e, t, n);
  else {
    const i = typeof t == "function" ? ho(e, t, n.custom) : t;
    r = Promise.all(M1(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const Yx = [...Vc].reverse(),
  Gx = Vc.length;
function _x(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Wx(e, n, r)));
}
function Qx(e) {
  let t = _x(e);
  const n = Xx();
  let r = !0;
  const i = (l, u) => {
    const c = ho(e, u);
    if (c) {
      const { transition: d, transitionEnd: h, ...p } = c;
      l = { ...l, ...p, ...h };
    }
    return l;
  };
  function s(l) {
    t = l(e);
  }
  function a(l, u) {
    const c = e.getProps(),
      d = e.getVariantContext(!0) || {},
      h = [],
      p = new Set();
    let v = {},
      y = 1 / 0;
    for (let x = 0; x < Gx; x++) {
      const m = Yx[x],
        g = n[m],
        A = c[m] !== void 0 ? c[m] : d[m],
        k = Hi(A),
        b = m === u ? g.isActive : null;
      b === !1 && (y = x);
      let C = A === d[m] && A !== c[m] && k;
      if (
        (C && r && e.manuallyAnimateOnMount && (C = !1),
        (g.protectedKeys = { ...v }),
        (!g.isActive && b === null) ||
          (!A && !g.prevProp) ||
          lo(A) ||
          typeof A == "boolean")
      )
        continue;
      let E =
          Kx(g.prevProp, A) ||
          (m === u && g.isActive && !C && k) ||
          (x > y && k),
        N = !1;
      const R = Array.isArray(A) ? A : [A];
      let V = R.reduce(i, {});
      b === !1 && (V = {});
      const { prevResolvedValues: B = {} } = g,
        F = { ...B, ...V },
        G = (z) => {
          (E = !0),
            p.has(z) && ((N = !0), p.delete(z)),
            (g.needsAnimating[z] = !0);
        };
      for (const z in F) {
        const _ = V[z],
          T = B[z];
        if (v.hasOwnProperty(z)) continue;
        let I = !1;
        Ia(_) && Ia(T) ? (I = !i1(_, T)) : (I = _ !== T),
          I
            ? _ !== void 0
              ? G(z)
              : p.add(z)
            : _ !== void 0 && p.has(z)
            ? G(z)
            : (g.protectedKeys[z] = !0);
      }
      (g.prevProp = A),
        (g.prevResolvedValues = V),
        g.isActive && (v = { ...v, ...V }),
        r && e.blockInitialAnimation && (E = !1),
        E &&
          (!C || N) &&
          h.push(
            ...R.map((z) => ({ animation: z, options: { type: m, ...l } }))
          );
    }
    if (p.size) {
      const x = {};
      p.forEach((m) => {
        const g = e.getBaseTarget(m);
        g !== void 0 && (x[m] = g);
      }),
        h.push({ animation: x });
    }
    let S = !!h.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (S = !1),
      (r = !1),
      S ? t(h) : Promise.resolve()
    );
  }
  function o(l, u, c) {
    var d;
    if (n[l].isActive === u) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((p) => {
        var v;
        return (v = p.animationState) === null || v === void 0
          ? void 0
          : v.setActive(l, u);
      }),
      (n[l].isActive = u);
    const h = a(c, l);
    for (const p in n) n[p].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: s,
    getState: () => n,
  };
}
function Kx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !i1(t, e) : !1;
}
function Ln(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Xx() {
  return {
    animate: Ln(!0),
    whileInView: Ln(),
    whileHover: Ln(),
    whileTap: Ln(),
    whileDrag: Ln(),
    whileFocus: Ln(),
    exit: Ln(),
  };
}
class Jx extends Pn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = Qx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), lo(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let Zx = 0;
class qx extends Pn {
  constructor() {
    super(...arguments), (this.id = Zx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const s = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const $x = { animation: { Feature: Jx }, exit: { Feature: qx } },
  Kd = (e, t) => Math.abs(e - t);
function e3(e, t) {
  const n = Kd(e.x, t.x),
    r = Kd(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class D1 {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = il(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          p = e3(d.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !p) return;
        const { point: v } = d,
          { timestamp: y } = Me;
        this.history.push({ ...v, timestamp: y });
        const { onStart: S, onMove: x } = this.handlers;
        h ||
          (S && S(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, h) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = rl(h, this.transformPagePoint)),
          ae.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, h) => {
        this.end();
        const { onEnd: p, onSessionEnd: v, resumeAnimation: y } = this.handlers;
        if (
          (this.dragSnapToOrigin && y && y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const S = il(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : rl(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && p && p(d, S), v && v(d, S);
      }),
      !$0(t))
    )
      return;
    (this.dragSnapToOrigin = s),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const a = fo(t),
      o = rl(a, this.transformPagePoint),
      { point: l } = o,
      { timestamp: u } = Me;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: c } = n;
    c && c(t, il(o, this.history)),
      (this.removeListeners = yn(
        zt(this.contextWindow, "pointermove", this.handlePointerMove),
        zt(this.contextWindow, "pointerup", this.handlePointerUp),
        zt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), _t(this.updatePoint);
  }
}
function rl(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Xd(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function il({ point: e }, t) {
  return {
    point: e,
    delta: Xd(e, V1(t)),
    offset: Xd(e, t3(t)),
    velocity: n3(t, 0.1),
  };
}
function t3(e) {
  return e[0];
}
function V1(e) {
  return e[e.length - 1];
}
function n3(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = V1(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > Gn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const s = Ut(i.timestamp - r.timestamp);
  if (s === 0) return { x: 0, y: 0 };
  const a = { x: (i.x - r.x) / s, y: (i.y - r.y) / s };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function tt(e) {
  return e.max - e.min;
}
function pu(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Jd(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = pe(t.min, t.max, e.origin)),
    (e.scale = tt(n) / tt(t)),
    (pu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = pe(n.min, n.max, e.origin) - e.originPoint),
    (pu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ai(e, t, n, r) {
  Jd(e.x, t.x, n.x, r ? r.originX : void 0),
    Jd(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Zd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + tt(t));
}
function r3(e, t, n) {
  Zd(e.x, t.x, n.x), Zd(e.y, t.y, n.y);
}
function qd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + tt(t));
}
function Si(e, t, n) {
  qd(e.x, t.x, n.x), qd(e.y, t.y, n.y);
}
function i3(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? pe(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? pe(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function $d(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function s3(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: $d(e.x, n, i), y: $d(e.y, t, r) };
}
function eh(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function a3(e, t) {
  return { x: eh(e.x, t.x), y: eh(e.y, t.y) };
}
function o3(e, t) {
  let n = 0.5;
  const r = tt(e),
    i = tt(t);
  return (
    i > r
      ? (n = Yi(t.min, t.max - r, e.min))
      : r > i && (n = Yi(e.min, e.max - i, t.min)),
    An(0, 1, n)
  );
}
function l3(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const mu = 0.35;
function u3(e = mu) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = mu),
    { x: th(e, "left", "right"), y: th(e, "top", "bottom") }
  );
}
function th(e, t, n) {
  return { min: nh(e, t), max: nh(e, n) };
}
function nh(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const rh = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  wr = () => ({ x: rh(), y: rh() }),
  ih = () => ({ min: 0, max: 0 }),
  ke = () => ({ x: ih(), y: ih() });
function lt(e) {
  return [e("x"), e("y")];
}
function B1({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function c3({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function f3(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function sl(e) {
  return e === void 0 || e === 1;
}
function gu({ scale: e, scaleX: t, scaleY: n }) {
  return !sl(e) || !sl(t) || !sl(n);
}
function On(e) {
  return gu(e) || F1(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function F1(e) {
  return sh(e.x) || sh(e.y);
}
function sh(e) {
  return e && e !== "0%";
}
function Ba(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function ah(e, t, n, r, i) {
  return i !== void 0 && (e = Ba(e, i, r)), Ba(e, n, r) + t;
}
function vu(e, t = 0, n = 1, r, i) {
  (e.min = ah(e.min, t, n, r, i)), (e.max = ah(e.max, t, n, r, i));
}
function z1(e, { x: t, y: n }) {
  vu(e.x, t.translate, t.scale, t.originPoint),
    vu(e.y, n.translate, n.scale, n.originPoint);
}
function d3(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let s, a;
  for (let o = 0; o < i; o++) {
    (s = n[o]), (a = s.projectionDelta);
    const l = s.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        s.options.layoutScroll &&
        s.scroll &&
        s !== s.root &&
        Ar(e, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), z1(e, a)),
      r && On(s.latestValues) && Ar(e, s.latestValues));
  }
  (t.x = oh(t.x)), (t.y = oh(t.y));
}
function oh(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function rn(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function lh(e, t, [n, r, i]) {
  const s = t[i] !== void 0 ? t[i] : 0.5,
    a = pe(e.min, e.max, s);
  vu(e, t[n], t[r], a, t.scale);
}
const h3 = ["x", "scaleX", "originX"],
  p3 = ["y", "scaleY", "originY"];
function Ar(e, t) {
  lh(e.x, t, h3), lh(e.y, t, p3);
}
function U1(e, t) {
  return B1(f3(e.getBoundingClientRect(), t));
}
function m3(e, t, n) {
  const r = U1(e, n),
    { scroll: i } = t;
  return i && (rn(r.x, i.offset.x), rn(r.y, i.offset.y)), r;
}
const H1 = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  g3 = new WeakMap();
class v3 {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = ke()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (c) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(fo(c, "page").point);
      },
      s = (c, d) => {
        const { drag: h, dragPropagation: p, onDragStart: v } = this.getProps();
        if (
          h &&
          !p &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = t1(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          lt((S) => {
            let x = this.getAxisMotionValue(S).get() || 0;
            if (Lt.test(x)) {
              const { projection: m } = this.visualElement;
              if (m && m.layout) {
                const g = m.layout.layoutBox[S];
                g && (x = tt(g) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[S] = x;
          }),
          v && ae.update(() => v(c, d), !1, !0);
        const { animationState: y } = this.visualElement;
        y && y.setActive("whileDrag", !0);
      },
      a = (c, d) => {
        const {
          dragPropagation: h,
          dragDirectionLock: p,
          onDirectionLock: v,
          onDrag: y,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: S } = d;
        if (p && this.currentDirection === null) {
          (this.currentDirection = y3(S)),
            this.currentDirection !== null && v && v(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, S),
          this.updateAxis("y", d.point, S),
          this.visualElement.render(),
          y && y(c, d);
      },
      o = (c, d) => this.stop(c, d),
      l = () =>
        lt((c) => {
          var d;
          return (
            this.getAnimationState(c) === "paused" &&
            ((d = this.getAxisMotionValue(c).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new D1(
      t,
      {
        onSessionStart: i,
        onStart: s,
        onMove: a,
        onSessionEnd: o,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: H1(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: s } = this.getProps();
    s && ae.update(() => s(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !Rs(t, i, this.currentDirection)) return;
    const s = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = i3(a, this.constraints[t], this.elastic[t])),
      s.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      s = this.constraints;
    n && yr(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = s3(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = u3(r)),
      s !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        lt((a) => {
          this.getAxisMotionValue(a) &&
            (this.constraints[a] = l3(i.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !yr(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const s = m3(r, i.root, this.visualElement.getTransformPagePoint());
    let a = a3(i.layout.layoutBox, s);
    if (n) {
      const o = n(c3(a));
      (this.hasMutatedConstraints = !!o), o && (a = B1(o));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: s,
        dragSnapToOrigin: a,
        onDragTransitionEnd: o,
      } = this.getProps(),
      l = this.constraints || {},
      u = lt((c) => {
        if (!Rs(c, n, this.currentDirection)) return;
        let d = (l && l[c]) || {};
        a && (d = { min: 0, max: 0 });
        const h = i ? 200 : 1e6,
          p = i ? 40 : 1e7,
          v = {
            type: "inertia",
            velocity: r ? t[c] : 0,
            bounceStiffness: h,
            bounceDamping: p,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...s,
            ...d,
          };
        return this.startAxisValueAnimation(c, v);
      });
    return Promise.all(u).then(o);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(qc(t, r, 0, n));
  }
  stopAnimation() {
    lt((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    lt((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    lt((n) => {
      const { drag: r } = this.getProps();
      if (!Rs(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        s = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: a, max: o } = i.layout.layoutBox[n];
        s.set(t[n] - pe(a, o, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!yr(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    lt((a) => {
      const o = this.getAxisMotionValue(a);
      if (o) {
        const l = o.get();
        i[a] = o3({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: s } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      lt((a) => {
        if (!Rs(a, t, null)) return;
        const o = this.getAxisMotionValue(a),
          { min: l, max: u } = this.constraints[a];
        o.set(pe(l, u, i[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    g3.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = zt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: c = !0 } = this.getProps();
        u && c && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        yr(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      s = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const a = Vt(window, "resize", () => this.scalePositionWithinConstraints()),
      o = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (lt((c) => {
              const d = this.getAxisMotionValue(c);
              d &&
                ((this.originPoint[c] += l[c].translate),
                d.set(d.get() + l[c].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), s(), o && o();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: s = !1,
        dragElastic: a = mu,
        dragMomentum: o = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: s,
      dragElastic: a,
      dragMomentum: o,
    };
  }
}
function Rs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function y3(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class x3 extends Pn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = Se),
      (this.removeListeners = Se),
      (this.controls = new v3(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Se);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const uh = (e) => (t, n) => {
  e && ae.update(() => e(t, n));
};
class w3 extends Pn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = Se);
  }
  onPointerDown(t) {
    this.session = new D1(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: H1(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: uh(t),
      onStart: uh(n),
      onMove: r,
      onEnd: (s, a) => {
        delete this.session, i && ae.update(() => i(s, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = zt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function A3() {
  const e = w.useContext(ao);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = w.useId();
  return w.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const na = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function ch(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const ni = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (Q.test(e)) e = parseFloat(e);
        else return e;
      const n = ch(e, t.target.x),
        r = ch(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  S3 = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = Sn.parse(e);
      if (i.length > 5) return r;
      const s = Sn.createTransformer(e),
        a = typeof i[0] != "number" ? 1 : 0,
        o = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + a] /= o), (i[1 + a] /= l);
      const u = pe(o, l, 0.5);
      return (
        typeof i[2 + a] == "number" && (i[2 + a] /= u),
        typeof i[3 + a] == "number" && (i[3 + a] /= u),
        s(i)
      );
    },
  };
class k3 extends Zi.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: s } = t;
    L2(C3),
      s &&
        (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        s.setOptions({
          ...s.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (na.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: s,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = s),
        i || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== s &&
          (s
            ? a.promote()
            : a.relegate() ||
              ae.postRender(() => {
                const o = a.getStack();
                (!o || !o.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function W1(e) {
  const [t, n] = A3(),
    r = w.useContext(Fc);
  return Zi.createElement(k3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(B0),
    isPresent: t,
    safeToRemove: n,
  });
}
const C3 = {
    borderRadius: {
      ...ni,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: ni,
    borderTopRightRadius: ni,
    borderBottomLeftRadius: ni,
    borderBottomRightRadius: ni,
    boxShadow: S3,
  },
  Y1 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  b3 = Y1.length,
  fh = (e) => (typeof e == "string" ? parseFloat(e) : e),
  dh = (e) => typeof e == "number" || Q.test(e);
function j3(e, t, n, r, i, s) {
  i
    ? ((e.opacity = pe(0, n.opacity !== void 0 ? n.opacity : 1, E3(r))),
      (e.opacityExit = pe(t.opacity !== void 0 ? t.opacity : 1, 0, T3(r))))
    : s &&
      (e.opacity = pe(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < b3; a++) {
    const o = `border${Y1[a]}Radius`;
    let l = hh(t, o),
      u = hh(n, o);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || dh(l) === dh(u)
        ? ((e[o] = Math.max(pe(fh(l), fh(u), r), 0)),
          (Lt.test(u) || Lt.test(l)) && (e[o] += "%"))
        : (e[o] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = pe(t.rotate || 0, n.rotate || 0, r));
}
function hh(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const E3 = G1(0, 0.5, h1),
  T3 = G1(0.5, 0.95, Se);
function G1(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Yi(e, t, r)));
}
function ph(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function ot(e, t) {
  ph(e.x, t.x), ph(e.y, t.y);
}
function mh(e, t, n, r, i) {
  return (
    (e -= t), (e = Ba(e, 1 / n, r)), i !== void 0 && (e = Ba(e, 1 / i, r)), e
  );
}
function P3(e, t = 0, n = 1, r = 0.5, i, s = e, a = e) {
  if (
    (Lt.test(t) &&
      ((t = parseFloat(t)), (t = pe(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let o = pe(s.min, s.max, r);
  e === s && (o -= t),
    (e.min = mh(e.min, t, n, o, i)),
    (e.max = mh(e.max, t, n, o, i));
}
function gh(e, t, [n, r, i], s, a) {
  P3(e, t[n], t[r], t[i], t.scale, s, a);
}
const N3 = ["x", "scaleX", "originX"],
  L3 = ["y", "scaleY", "originY"];
function vh(e, t, n, r) {
  gh(e.x, t, N3, n ? n.x : void 0, r ? r.x : void 0),
    gh(e.y, t, L3, n ? n.y : void 0, r ? r.y : void 0);
}
function yh(e) {
  return e.translate === 0 && e.scale === 1;
}
function _1(e) {
  return yh(e.x) && yh(e.y);
}
function I3(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function Q1(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function xh(e) {
  return tt(e.x) / tt(e.y);
}
class R3 {
  constructor() {
    this.members = [];
  }
  add(t) {
    $c(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (ef(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const s = this.members[i];
      if (s.isPresent !== !1) {
        r = s;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function wh(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    s = e.y.translate / t.y;
  if (
    ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: c } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      c && (r += `rotateY(${c}deg) `);
  }
  const a = e.x.scale * t.x,
    o = e.y.scale * t.y;
  return (a !== 1 || o !== 1) && (r += `scale(${a}, ${o})`), r || "none";
}
const O3 = (e, t) => e.depth - t.depth;
class M3 {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    $c(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    ef(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(O3),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function D3(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const s = i - n;
      s >= t && (_t(r), e(s - t));
    };
  return ae.read(r, !0), () => _t(r);
}
function V3(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function B3(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function F3(e, t, n) {
  const r = Je(e) ? e : Fr(e);
  return r.start(qc("", r, t, n)), r.animation;
}
const Ah = ["", "X", "Y", "Z"],
  z3 = { visibility: "hidden" },
  Sh = 1e3;
let U3 = 0;
const Mn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function K1({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(a = {}, o = t?.()) {
      (this.id = U3++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Mn.totalNodes =
              Mn.resolvedTargetDeltas =
              Mn.recalculatedProjection =
                0),
            this.nodes.forEach(Y3),
            this.nodes.forEach(X3),
            this.nodes.forEach(J3),
            this.nodes.forEach(G3),
            V3(Mn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = a),
        (this.root = o ? o.root || o : this),
        (this.path = o ? [...o.path, o] : []),
        (this.parent = o),
        (this.depth = o ? o.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new M3());
    }
    addEventListener(a, o) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new tf()),
        this.eventHandlers.get(a).add(o)
      );
    }
    notifyListeners(a, ...o) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...o);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    mount(a, o = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = B3(a)), (this.instance = a);
      const { layoutId: l, layout: u, visualElement: c } = this.options;
      if (
        (c && !c.current && c.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        o && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = D3(h, 250)),
            na.hasAnimatedSinceResize &&
              ((na.hasAnimatedSinceResize = !1), this.nodes.forEach(Ch));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          c &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: p,
              layout: v,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const y =
                  this.options.transition || c.getDefaultTransition() || tw,
                { onLayoutAnimationStart: S, onLayoutAnimationComplete: x } =
                  c.getProps(),
                m = !this.targetLayout || !Q1(this.targetLayout, v) || p,
                g = !h && p;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                g ||
                (h && (m || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, g);
                const A = { ...Zc(y, "layout"), onPlay: S, onComplete: x };
                (c.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                h || Ch(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = v;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        _t(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Z3),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: o, layout: l } = this.options;
      if (o === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(kh);
        return;
      }
      this.isUpdating || this.nodes.forEach(Q3),
        (this.isUpdating = !1),
        this.nodes.forEach(K3),
        this.nodes.forEach(H3),
        this.nodes.forEach(W3),
        this.clearAllSnapshots();
      const o = performance.now();
      (Me.delta = An(0, 1e3 / 60, o - Me.timestamp)),
        (Me.timestamp = o),
        (Me.isProcessing = !0),
        Xo.update.process(Me),
        Xo.preRender.process(Me),
        Xo.render.process(Me),
        (Me.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(_3), this.sharedNodes.forEach(q3);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        ae.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      ae.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = ke()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: o } = this.options;
      o &&
        o.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let o = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (o = !1),
        o &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        o = this.projectionDelta && !_1(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        c = u !== this.prevTransformTemplateValue;
      a &&
        (o || On(this.latestValues) || c) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const o = this.measurePageBox();
      let l = this.removeElementScroll(o);
      return (
        a && (l = this.removeTransform(l)),
        nw(l),
        {
          animationId: this.root.animationId,
          measuredBox: o,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return ke();
      const o = a.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (rn(o.x, l.offset.x), rn(o.y, l.offset.y)), o;
    }
    removeElementScroll(a) {
      const o = ke();
      ot(o, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: c, options: d } = u;
        if (u !== this.root && c && d.layoutScroll) {
          if (c.isRoot) {
            ot(o, a);
            const { scroll: h } = this.root;
            h && (rn(o.x, -h.offset.x), rn(o.y, -h.offset.y));
          }
          rn(o.x, c.offset.x), rn(o.y, c.offset.y);
        }
      }
      return o;
    }
    applyTransform(a, o = !1) {
      const l = ke();
      ot(l, a);
      for (let u = 0; u < this.path.length; u++) {
        const c = this.path[u];
        !o &&
          c.options.layoutScroll &&
          c.scroll &&
          c !== c.root &&
          Ar(l, { x: -c.scroll.offset.x, y: -c.scroll.offset.y }),
          On(c.latestValues) && Ar(l, c.latestValues);
      }
      return On(this.latestValues) && Ar(l, this.latestValues), l;
    }
    removeTransform(a) {
      const o = ke();
      ot(o, a);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !On(u.latestValues)) continue;
        gu(u.latestValues) && u.updateSnapshot();
        const c = ke(),
          d = u.measurePageBox();
        ot(c, d),
          vh(o, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c);
      }
      return On(this.latestValues) && vh(o, this.latestValues), o;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Me.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var o;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          a ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (
          ((this.resolvedRelativeTargetAt = Me.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1
            ? ((this.relativeParent = p),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ke()),
              (this.relativeTargetOrigin = ke()),
              Si(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                p.layout.layoutBox
              ),
              ot(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = ke()), (this.targetWithTransforms = ke())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                r3(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ot(this.target, this.layout.layoutBox),
                z1(this.target, this.targetDelta))
              : ot(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p &&
            !!p.resumingFrom == !!this.resumingFrom &&
            !p.options.layoutScroll &&
            p.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = p),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = ke()),
                (this.relativeTargetOrigin = ke()),
                Si(this.relativeTargetOrigin, this.target, p.target),
                ot(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Mn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          gu(this.parent.latestValues) ||
          F1(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const o = this.getLead(),
        l = !!this.resumingFrom || this !== o;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === Me.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(c || d))
      )
        return;
      ot(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        p = this.treeScale.y;
      d3(this.layoutCorrected, this.treeScale, this.path, l),
        o.layout &&
          !o.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (o.target = o.layout.layoutBox);
      const { target: v } = o;
      if (!v) {
        this.projectionTransform &&
          ((this.projectionDelta = wr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = wr()),
        (this.projectionDeltaWithTransform = wr()));
      const y = this.projectionTransform;
      Ai(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
        (this.projectionTransform = wh(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== y ||
          this.treeScale.x !== h ||
          this.treeScale.y !== p) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", v)),
        Mn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const o = this.getStack();
        o && o.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, o = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        c = { ...this.latestValues },
        d = wr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !o);
      const h = ke(),
        p = l ? l.source : void 0,
        v = this.layout ? this.layout.source : void 0,
        y = p !== v,
        S = this.getStack(),
        x = !S || S.members.length <= 1,
        m = !!(y && !x && this.options.crossfade === !0 && !this.path.some(ew));
      this.animationProgress = 0;
      let g;
      (this.mixTargetDelta = (A) => {
        const k = A / 1e3;
        bh(d.x, a.x, k),
          bh(d.y, a.y, k),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Si(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            $3(this.relativeTarget, this.relativeTargetOrigin, h, k),
            g && I3(this.relativeTarget, g) && (this.isProjectionDirty = !1),
            g || (g = ke()),
            ot(g, this.relativeTarget)),
          y &&
            ((this.animationValues = c), j3(c, u, this.latestValues, k, m, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = k);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (_t(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = ae.update(() => {
          (na.hasAnimatedSinceResize = !0),
            (this.currentAnimation = F3(0, Sh, {
              ...a,
              onUpdate: (o) => {
                this.mixTargetDelta(o), a.onUpdate && a.onUpdate(o);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Sh),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: o,
        target: l,
        layout: u,
        latestValues: c,
      } = a;
      if (!(!o || !l || !u)) {
        if (
          this !== a &&
          this.layout &&
          u &&
          X1(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || ke();
          const d = tt(this.layout.layoutBox.x);
          (l.x.min = a.target.x.min), (l.x.max = l.x.min + d);
          const h = tt(this.layout.layoutBox.y);
          (l.y.min = a.target.y.min), (l.y.max = l.y.min + h);
        }
        ot(o, l),
          Ar(o, c),
          Ai(this.projectionDeltaWithTransform, this.layoutCorrected, o, c);
      }
    }
    registerSharedNode(a, o) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new R3()),
        this.sharedNodes.get(a).add(o);
      const u = o.options.initialPromotionConfig;
      o.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(o)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: o } = this.options;
      return o
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: o, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        o && this.setOptions({ transition: o });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let o = !1;
      const { latestValues: l } = a;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (o = !0), !o))
        return;
      const u = {};
      for (let c = 0; c < Ah.length; c++) {
        const d = "rotate" + Ah[c];
        l[d] && ((u[d] = l[d]), a.setStaticValue(d, 0));
      }
      a.render();
      for (const c in u) a.setStaticValue(c, u[c]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var o, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return z3;
      const u = { visibility: "" },
        c = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = ta(a?.pointerEvents) || ""),
          (u.transform = c ? c(this.latestValues, "") : "none"),
          u
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const y = {};
        return (
          this.options.layoutId &&
            ((y.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (y.pointerEvents = ta(a?.pointerEvents) || "")),
          this.hasProjected &&
            !On(this.latestValues) &&
            ((y.transform = c ? c({}, "") : "none"), (this.hasProjected = !1)),
          y
        );
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = wh(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        c && (u.transform = c(h, u.transform));
      const { x: p, y: v } = this.projectionDelta;
      (u.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`),
        d.animationValues
          ? (u.opacity =
              d === this
                ? (l =
                    (o = h.opacity) !== null && o !== void 0
                      ? o
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (u.opacity =
              d === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const y in Na) {
        if (h[y] === void 0) continue;
        const { correct: S, applyTo: x } = Na[y],
          m = u.transform === "none" ? h[y] : S(h[y], d);
        if (x) {
          const g = x.length;
          for (let A = 0; A < g; A++) u[x[A]] = m;
        } else u[y] = m;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents = d === this ? ta(a?.pointerEvents) || "" : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((a) => {
        var o;
        return (o = a.currentAnimation) === null || o === void 0
          ? void 0
          : o.stop();
      }),
        this.root.nodes.forEach(kh),
        this.root.sharedNodes.clear();
    }
  };
}
function H3(e) {
  e.updateLayout();
}
function W3(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: s } = e.options,
      a = n.source !== e.layout.source;
    s === "size"
      ? lt((d) => {
          const h = a ? n.measuredBox[d] : n.layoutBox[d],
            p = tt(h);
          (h.min = r[d].min), (h.max = h.min + p);
        })
      : X1(s, n.layoutBox, r) &&
        lt((d) => {
          const h = a ? n.measuredBox[d] : n.layoutBox[d],
            p = tt(r[d]);
          (h.max = h.min + p),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + p));
        });
    const o = wr();
    Ai(o, r, n.layoutBox);
    const l = wr();
    a ? Ai(l, e.applyTransform(i, !0), n.measuredBox) : Ai(l, r, n.layoutBox);
    const u = !_1(o);
    let c = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: p } = d;
        if (h && p) {
          const v = ke();
          Si(v, n.layoutBox, h.layoutBox);
          const y = ke();
          Si(y, r, p.layoutBox),
            Q1(v, y) || (c = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = y),
              (e.relativeTargetOrigin = v),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: o,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: c,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Y3(e) {
  Mn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function G3(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function _3(e) {
  e.clearSnapshot();
}
function kh(e) {
  e.clearMeasurements();
}
function Q3(e) {
  e.isLayoutDirty = !1;
}
function K3(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ch(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function X3(e) {
  e.resolveTargetDelta();
}
function J3(e) {
  e.calcProjection();
}
function Z3(e) {
  e.resetRotation();
}
function q3(e) {
  e.removeLeadSnapshot();
}
function bh(e, t, n) {
  (e.translate = pe(t.translate, 0, n)),
    (e.scale = pe(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function jh(e, t, n, r) {
  (e.min = pe(t.min, n.min, r)), (e.max = pe(t.max, n.max, r));
}
function $3(e, t, n, r) {
  jh(e.x, t.x, n.x, r), jh(e.y, t.y, n.y, r);
}
function ew(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const tw = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Eh = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  Th = Eh("applewebkit/") && !Eh("chrome/") ? Math.round : Se;
function Ph(e) {
  (e.min = Th(e.min)), (e.max = Th(e.max));
}
function nw(e) {
  Ph(e.x), Ph(e.y);
}
function X1(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !pu(xh(t), xh(n), 0.2))
  );
}
const rw = K1({
    attachResizeListener: (e, t) => Vt(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  al = { current: void 0 },
  J1 = K1({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!al.current) {
        const e = new rw({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (al.current = e);
      }
      return al.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  iw = {
    pan: { Feature: w3 },
    drag: { Feature: x3, ProjectionNode: J1, MeasureLayout: W1 },
  },
  sw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function aw(e) {
  const t = sw.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function yu(e, t, n = 1) {
  const [r, i] = aw(e);
  if (!r) return;
  const s = window.getComputedStyle(t).getPropertyValue(r);
  if (s) {
    const a = s.trim();
    return I1(a) ? parseFloat(a) : a;
  } else return ou(i) ? yu(i, t, n + 1) : i;
}
function ow(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const s = i.get();
      if (!ou(s)) return;
      const a = yu(s, r);
      a && i.set(a);
    });
  for (const i in t) {
    const s = t[i];
    if (!ou(s)) continue;
    const a = yu(s, r);
    a && ((t[i] = a), n || (n = {}), n[i] === void 0 && (n[i] = s));
  }
  return { target: t, transitionEnd: n };
}
const lw = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Z1 = (e) => lw.has(e),
  uw = (e) => Object.keys(e).some(Z1),
  Nh = (e) => e === nr || e === Q,
  Lh = (e, t) => parseFloat(e.split(", ")[t]),
  Ih =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return Lh(i[1], t);
      {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? Lh(s[1], e) : 0;
      }
    },
  cw = new Set(["x", "y", "z"]),
  fw = ns.filter((e) => !cw.has(e));
function dw(e) {
  const t = [];
  return (
    fw.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const zr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: Ih(4, 13),
  y: Ih(5, 14),
};
zr.translateX = zr.x;
zr.translateY = zr.y;
const hw = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      s = getComputedStyle(i),
      { display: a } = s,
      o = {};
    a === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        o[u] = zr[u](r, s);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const c = t.getValue(u);
        c && c.jump(o[u]), (e[u] = zr[u](l, s));
      }),
      e
    );
  },
  pw = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Z1);
    let s = [],
      a = !1;
    const o = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let c = n[l],
          d = ti(c);
        const h = t[l];
        let p;
        if (Ia(h)) {
          const v = h.length,
            y = h[0] === null ? 1 : 0;
          (c = h[y]), (d = ti(c));
          for (let S = y; S < v && h[S] !== null; S++)
            p ? Ra(ti(h[S]) === p) : (p = ti(h[S]));
        } else p = ti(h);
        if (d !== p)
          if (Nh(d) && Nh(p)) {
            const v = u.get();
            typeof v == "string" && u.set(parseFloat(v)),
              typeof h == "string"
                ? (t[l] = parseFloat(h))
                : Array.isArray(h) && p === Q && (t[l] = h.map(parseFloat));
          } else
            d?.transform && p?.transform && (c === 0 || h === 0)
              ? c === 0
                ? u.set(p.transform(c))
                : (t[l] = d.transform(h))
              : (a || ((s = dw(e)), (a = !0)),
                o.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(h));
      }),
      o.length)
    ) {
      const l = o.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = hw(t, e, o);
      return (
        s.length &&
          s.forEach(([c, d]) => {
            e.getValue(c).set(d);
          }),
        e.render(),
        oo && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function mw(e, t, n, r) {
  return uw(t) ? pw(e, t, n, r) : { target: t, transitionEnd: r };
}
const gw = (e, t, n, r) => {
    const i = ow(e, t, r);
    return (t = i.target), (r = i.transitionEnd), mw(e, t, n, r);
  },
  xu = { current: null },
  q1 = { current: !1 };
function vw() {
  if (((q1.current = !0), !!oo))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (xu.current = e.matches);
      e.addListener(t), t();
    } else xu.current = !1;
}
function yw(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const s = t[i],
      a = n[i];
    if (Je(s)) e.addValue(i, s), Va(r) && r.add(i);
    else if (Je(a)) e.addValue(i, Fr(s, { owner: e })), Va(r) && r.remove(i);
    else if (a !== s)
      if (e.hasValue(i)) {
        const o = e.getValue(i);
        !o.hasAnimated && o.set(s);
      } else {
        const o = e.getStaticValue(i);
        e.addValue(i, Fr(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const Rh = new WeakMap(),
  $1 = Object.keys(Wi),
  xw = $1.length,
  Oh = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  ww = Bc.length;
class Aw {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: s,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => ae.render(this.render, !1, !0));
    const { latestValues: o, renderState: l } = s;
    (this.latestValues = o),
      (this.baseTarget = { ...o }),
      (this.initialValues = n.initial ? { ...o } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = a),
      (this.isControllingVariants = uo(n)),
      (this.isVariantNode = V0(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...c } = this.scrapeMotionValuesFromProps(n, {});
    for (const d in c) {
      const h = c[d];
      o[d] !== void 0 && Je(h) && (h.set(o[d], !1), Va(u) && u.add(d));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      Rh.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      q1.current || vw(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : xu.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Rh.delete(this.current),
      this.projection && this.projection.unmount(),
      _t(this.notifyUpdate),
      _t(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = tr.has(t),
      i = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && ae.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      s = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), s();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, s) {
    let a, o;
    for (let l = 0; l < xw; l++) {
      const u = $1[l],
        {
          isEnabled: c,
          Feature: d,
          ProjectionNode: h,
          MeasureLayout: p,
        } = Wi[u];
      h && (a = h),
        c(n) &&
          (!this.features[u] && d && (this.features[u] = new d(this)),
          p && (o = p));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      a
    ) {
      this.projection = new a(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: c,
        dragConstraints: d,
        layoutScroll: h,
        layoutRoot: p,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!c || (d && yr(d)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: s,
        layoutScroll: h,
        layoutRoot: p,
      });
    }
    return o;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : ke();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Oh.length; r++) {
      const i = Oh[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const s = t["on" + i];
      s && (this.propEventSubscriptions[i] = this.on(i, s));
    }
    (this.prevMotionValues = yw(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < ww; r++) {
      const i = Bc[r],
        s = this.props[i];
      (Hi(s) || s === !1) && (n[i] = s);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Fr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = _c(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const s = this.getBaseTargetFromProps(this.props, t);
    return s !== void 0 && !Je(s)
      ? s
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new tf()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class eg extends Aw {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    s
  ) {
    let a = Bx(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), a && (a = i(a))), s)) {
      Dx(this, r, a);
      const o = gw(this, r, a, n);
      (n = o.transitionEnd), (r = o.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function Sw(e) {
  return window.getComputedStyle(e);
}
class kw extends eg {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (tr.has(n)) {
      const r = Jc(n);
      return (r && r.default) || 0;
    } else {
      const r = Sw(t),
        i = (U0(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return U1(t, n);
  }
  build(t, n, r, i) {
    Uc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return Gc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Je(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    Q0(t, n, r, i);
  }
}
class Cw extends eg {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (tr.has(n)) {
      const r = Jc(n);
      return (r && r.default) || 0;
    }
    return (n = K0.has(n) ? n : Dc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ke();
  }
  scrapeMotionValuesFromProps(t, n) {
    return J0(t, n);
  }
  build(t, n, r, i) {
    Wc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    X0(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = Yc(t.tagName)), super.mount(t);
  }
}
const bw = (e, t) =>
    zc(e)
      ? new Cw(t, { enableHardwareAcceleration: !1 })
      : new kw(t, { enableHardwareAcceleration: !0 }),
  jw = { layout: { ProjectionNode: J1, MeasureLayout: W1 } },
  Ew = { ...$x, ...w4, ...iw, ...jw },
  K = P2((e, t) => o4(e, t, Ew, bw));
function tg() {
  const e = w.useRef(!1);
  return (
    Mc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function Tw() {
  const e = tg(),
    [t, n] = w.useState(0),
    r = w.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [w.useCallback(() => ae.postRender(r), [r]), t];
}
class Pw extends w.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Nw({ children: e, isPresent: t }) {
  const n = w.useId(),
    r = w.useRef(null),
    i = w.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    w.useInsertionEffect(() => {
      const { width: s, height: a, top: o, left: l } = i.current;
      if (t || !r.current || !s || !a) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${o}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    w.createElement(
      Pw,
      { isPresent: t, childRef: r, sizeRef: i },
      w.cloneElement(e, { ref: r })
    )
  );
}
const ol = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: s,
  mode: a,
}) => {
  const o = Z0(Lw),
    l = w.useId(),
    u = w.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (c) => {
          o.set(c, !0);
          for (const d of o.values()) if (!d) return;
          r && r();
        },
        register: (c) => (o.set(c, !1), () => o.delete(c)),
      }),
      s ? void 0 : [n]
    );
  return (
    w.useMemo(() => {
      o.forEach((c, d) => o.set(d, !1));
    }, [n]),
    w.useEffect(() => {
      !n && !o.size && r && r();
    }, [n]),
    a === "popLayout" && (e = w.createElement(Nw, { isPresent: n }, e)),
    w.createElement(ao.Provider, { value: u }, e)
  );
};
function Lw() {
  return new Map();
}
function Iw(e) {
  return w.useEffect(() => () => e(), []);
}
const Dn = (e) => e.key || "";
function Rw(e, t) {
  e.forEach((n) => {
    const r = Dn(n);
    t.set(r, n);
  });
}
function Ow(e) {
  const t = [];
  return (
    w.Children.forEach(e, (n) => {
      w.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const Xe = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: s = !0,
    mode: a = "sync",
  }) => {
    const o = w.useContext(Fc).forceRender || Tw()[0],
      l = tg(),
      u = Ow(e);
    let c = u;
    const d = w.useRef(new Map()).current,
      h = w.useRef(c),
      p = w.useRef(new Map()).current,
      v = w.useRef(!0);
    if (
      (Mc(() => {
        (v.current = !1), Rw(u, p), (h.current = c);
      }),
      Iw(() => {
        (v.current = !0), p.clear(), d.clear();
      }),
      v.current)
    )
      return w.createElement(
        w.Fragment,
        null,
        c.map((m) =>
          w.createElement(
            ol,
            {
              key: Dn(m),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: s,
              mode: a,
            },
            m
          )
        )
      );
    c = [...c];
    const y = h.current.map(Dn),
      S = u.map(Dn),
      x = y.length;
    for (let m = 0; m < x; m++) {
      const g = y[m];
      S.indexOf(g) === -1 && !d.has(g) && d.set(g, void 0);
    }
    return (
      a === "wait" && d.size && (c = []),
      d.forEach((m, g) => {
        if (S.indexOf(g) !== -1) return;
        const A = p.get(g);
        if (!A) return;
        const k = y.indexOf(g);
        let b = m;
        if (!b) {
          const C = () => {
            d.delete(g);
            const j = Array.from(p.keys()).filter((E) => !S.includes(E));
            if (
              (j.forEach((E) => p.delete(E)),
              (h.current = u.filter((E) => {
                const N = Dn(E);
                return N === g || j.includes(N);
              })),
              !d.size)
            ) {
              if (l.current === !1) return;
              o(), r && r();
            }
          };
          (b = w.createElement(
            ol,
            {
              key: Dn(A),
              isPresent: !1,
              onExitComplete: C,
              custom: t,
              presenceAffectsLayout: s,
              mode: a,
            },
            A
          )),
            d.set(g, b);
        }
        c.splice(k, 0, b);
      }),
      (c = c.map((m) => {
        const g = m.key;
        return d.has(g)
          ? m
          : w.createElement(
              ol,
              { key: Dn(m), isPresent: !0, presenceAffectsLayout: s, mode: a },
              m
            );
      })),
      w.createElement(
        w.Fragment,
        null,
        d.size ? c : c.map((m) => w.cloneElement(m))
      )
    );
  },
  Mw = (e) => {
    const [t, n] = w.useState({
      blackmarket: Rt(),
      boosting: Rt(),
      secbypass: Rt(),
      captcha: Rt(),
      firewall: Rt(),
      interception: Rt(),
    });
    return (
      w.useEffect(() => {
        Rt() || Z("getHiddenApps").then((r) => n(r));
      }, []),
      f.jsxs("div", {
        className: "appList",
        children: [
          t.blackmarket &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("blackmarket");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.2 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "",
              children: [
                f.jsx("img", {
                  src: P0,
                  alt: "Black Market App",
                  draggable: !1,
                }),
                f.jsx("div", { children: "Black Market" }),
              ],
            }),
          t.boosting &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("boosting");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.3 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "boosting",
              children: [
                f.jsx("img", { src: N0, alt: "Boost App", draggable: !1 }),
                f.jsx("div", { children: "Boost Contracts" }),
              ],
            }),
          t.secbypass &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("secbypass");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.1 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "",
              children: [
                f.jsx("img", { src: T0, alt: "SecBypass App", draggable: !1 }),
                f.jsx("div", { children: "SecBypass" }),
              ],
            }),
          t.captcha &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("captcha");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.1 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "",
              children: [
                f.jsx("img", { src: L0, alt: "Captcha App", draggable: !1 }),
                f.jsx("div", { children: "Captcha" }),
              ],
            }),
          t.firewall &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("firewall");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.1 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "",
              children: [
                f.jsx("img", { src: I0, alt: "Firewall App", draggable: !1 }),
                f.jsx("div", { children: "Firewall" }),
              ],
            }),
          t.interception &&
            f.jsxs(K.div, {
              onClick: () => {
                e.setActiveApp("interception");
              },
              transition: { type: "spring", stiffness: 200, delay: 0.1 },
              animate: { scale: 1, opacity: 1 },
              initial: { scale: 0, opacity: 0 },
              className: "appItem",
              layoutId: "",
              children: [
                f.jsx("img", {
                  src: R0,
                  alt: "Interception App",
                  draggable: !1,
                }),
                f.jsx("div", { children: "Interception" }),
              ],
            }),
        ],
      })
    );
  },
  nf = (e) =>
    f.jsx("div", {
      className: "promptContainer",
      children: f.jsxs("div", {
        className: "prompt",
        children: [
          f.jsxs("div", {
            className: "titleBar",
            children: [
              f.jsx("span", { children: e.promptData.title }),
              f.jsx("svg", {
                onClick: e.close,
                width: "15",
                height: "15",
                viewBox: "0 0 15 15",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: f.jsxs("g", {
                  children: [
                    f.jsx("rect", {
                      x: "14.1426",
                      width: "1",
                      height: "20",
                      rx: "0.5",
                      transform: "rotate(45 14.1426 0)",
                      fill: "white",
                    }),
                    f.jsx("rect", {
                      x: "-0.150391",
                      y: "0.710938",
                      width: "1",
                      height: "20",
                      rx: "0.5",
                      transform: "rotate(-45 -0.150391 0.710938)",
                      fill: "white",
                    }),
                  ],
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "promptContent",
            children: [
              f.jsx("div", {
                className: "text",
                style: { fontSize: e.input !== void 0 ? 18 : 20 },
                children: e.promptData.text,
              }),
              e.input !== void 0 &&
                f.jsx("input", {
                  value: e.input,
                  placeholder: e.placeholder,
                  onChange: e.inputChange,
                }),
              f.jsxs("div", {
                className: "promptButtons",
                children: [
                  f.jsx("div", {
                    onClick: () => {
                      e.promptData.click
                        ? e.promptData.click(e.input)
                        : e.close();
                    },
                    className: "promptButton filled",
                    children: e.promptData.confirm || "ok",
                  }),
                  e.input !== void 0 &&
                    f.jsx("div", {
                      onClick: e.close,
                      className: "promptButton outline",
                      children: "Cancel",
                    }),
                  e.promptData.close &&
                    f.jsx("div", {
                      onClick: e.close,
                      className: "promptButton outline",
                      children: "Cancel",
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  ng = (e) =>
    f.jsxs("div", {
      className: "repContainer",
      children: [
        f.jsxs("div", {
          className: "repText",
          children: [
            f.jsx("span", { children: "Your reputation" }),
            f.jsxs("span", { children: [e.reputation, "/680"] }),
          ],
        }),
        f.jsx("div", {
          className: "repBar",
          children: f.jsx(K.div, {
            style: {
              height: "100%",
              borderRadius:
                (e.reputation / 680) * 100 > 99 ? 20 : "20px 0px 0px 20px",
            },
            initial: { width: "0%" },
            animate: { width: (e.reputation / 680) * 100 + "%" },
            transition: { duration: 1 },
            className: "barInside",
          }),
        }),
      ],
    }),
  rg = {
    hidden: { opacity: 0, scale: 0 },
    visible: (e) => {
      const t = 0.5 + e * 0.07;
      return {
        opacity: 1,
        scale: 1,
        transition: {
          opacity: { delay: t, duration: 0.01 },
          scale: { delay: t, type: "spring", duration: 1, bounce: 0 },
        },
      };
    },
  },
  ig = (e) => {
    const t = e.vehicles,
      n = e.page,
      [r, i] = w.useState(!1);
    w.useEffect(() => {
      if (n !== "activejobs") {
        i(!1);
        return;
      }
      if (t.length === 0) {
        i(!1);
        return;
      }
      i(t.some((u) => u.status === 1));
    }, [t]);
    const s = (u) => {
        e.page === "jobboard" &&
          Z("requestVehicle", { class: u.class, vin: u.vin }).then((c) => {
            if (
              !e.setPromptData ||
              !e.setPromptActive ||
              !e.setPromptInput ||
              ((c.click = void 0),
              e.setPromptInput(void 0),
              e.setPromptData(c),
              e.setPromptActive(!0),
              c.inQueue === void 0)
            )
              return;
            const d = [...t],
              h = d.findIndex((p) => p.id === u.id);
            h !== -1 &&
              ((d[h] = { ...d[h], inQueue: c.inQueue }), e.setVehicles(d));
          });
      },
      a = () => {
        !e.setPromptData ||
          !e.setPromptActive ||
          !e.setPromptInput ||
          (e.setPromptInput(""),
          e.setPromptData({
            title: "Invite Hacker",
            text: "Citizen ID",
            confirm: "Invite",
            click: (u) => {
              const c = Number(u);
              if (u === "" || !c) {
                e.setPromptActive && e.setPromptActive(!1);
                return;
              }
              e.setPromptActive && e.setPromptActive(!1),
                e.setPromptInput && e.setPromptInput(void 0),
                Z("inviteHacker", c);
            },
          }),
          e.setPromptActive(!0));
      },
      o = (u) => {
        Z("kickHacker").then((c) => {
          if (
            (e.setPromptActive && e.setPromptActive(!0),
            e.setPromptInput && e.setPromptInput(void 0),
            e.setPromptData && e.setPromptData(c),
            u.status === 2)
          )
            e.setVehicles([...t].filter((d) => d.id !== u.id));
          else if (u.status === 1) {
            const d = [...t],
              h = d.findIndex((p) => p.id === u.id);
            if (h === -1) return;
            (d[h].hacker = !1), e.setVehicles(d);
          }
        });
      },
      l = () => {
        Z("cancelJob").then((u) => {
          u &&
            (e.setPromptActive && e.setPromptActive(!0),
            e.setPromptInput && e.setPromptInput(void 0),
            e.setPromptData &&
              e.setPromptData({
                title: "Job Cancelled",
                text: "You have cancelled your active job",
              }),
            e.setVehicles([]));
        });
      };
    return f.jsxs("div", {
      className: "tableContainer",
      children: [
        f.jsxs("div", {
          className: "headers",
          children: [
            f.jsx("div", {
              className: "item",
              style: { flexBasis: "19%" },
              children: e.page === "jobboard" ? "JOB TYPE" : "JOB",
            }),
            f.jsx("div", {
              className: "item",
              style: { flexBasis: "8%" },
              children: "CLASS",
            }),
            f.jsx("div", {
              className: "item",
              style: { flexBasis: "19%" },
              children: "DIFFICULTY",
            }),
            f.jsx("div", {
              className: "item",
              style: { flexBasis: "12%" },
              children: "PRICE",
            }),
            f.jsx("div", {
              className: "item",
              style: { flexBasis: "12%" },
              children: "REPUTATION",
            }),
            f.jsx("div", { className: "item", style: { flexBasis: "30%" } }),
          ],
        }),
        f.jsxs("div", {
          className: "jobsList",
          children: [
            t.map((u) =>
              f.jsxs(
                "div",
                {
                  className: "jobItem",
                  children: [f.jsx("div", {
                      className: "item",
                      style: { flexBasis: "19%" },
                      children:
                        e.page === "jobboard"
                          ? u.vin
                            ? "Illegal Purchase Delivery"
                            : "Vehicle Delivery"
                          : u.name,
                    }),
                    f.jsxs("div", {
                      className: "item",
                      style: { flexBasis: "8%" },
                      children: [u.minClass ? `${u.minClass} - ` : "", u.class],
                    }),
                    f.jsx("div", {
                      className: "item",
                      style: { flexBasis: "19%" },
                      children: f.jsx("div", {
                        className: "difficulty",
                        children: Array(5)
                          .fill(null)
                          .map((c, d) =>
                            f.jsxs(
                              K.svg,
                              {
                                variants: rg,
                                custom: d,
                                initial: "hidden",
                                animate: "visible",
                                width: "18",
                                height: "20",
                                viewBox: "0 0 18 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                  f.jsx(K.path, {
                                    d: "M8.54492 0.999923C8.72264 0.609414 9.27736 0.609413 9.45508 0.999922L11.3971 5.26698C11.4856 5.46138 11.6878 5.57811 11.9004 5.55753L16.5668 5.10585C16.9938 5.06451 17.2712 5.5449 17.0218 5.89408L14.2975 9.70944C14.1734 9.88327 14.1734 10.1167 14.2975 10.2906L17.0218 14.1059C17.2712 14.4551 16.9938 14.9355 16.5668 14.8942L11.9004 14.4425C11.6878 14.4219 11.4856 14.5386 11.3971 14.733L9.45508 19.0001C9.27736 19.3906 8.72264 19.3906 8.54492 19.0001L6.60289 14.733C6.51442 14.5386 6.31223 14.4219 6.09964 14.4425L1.43325 14.8942C1.00619 14.9355 0.728835 14.4551 0.978161 14.1059L3.70253 10.2906C3.82665 10.1167 3.82665 9.88327 3.70253 9.70944L0.978162 5.89408C0.728835 5.54491 1.00619 5.06451 1.43325 5.10585L6.09963 5.55753C6.31223 5.57811 6.51442 5.46138 6.60289 5.26698L8.54492 0.999923Z",
                                    stroke: d >= u.difficulty ? "white" : "",
                                    strokeOpacity:
                                      d >= u.difficulty ? "0.2" : "0",
                                    fill:
                                      d < u.difficulty
                                        ? "url(#paint0_linear_2870_494)"
                                        : "",
                                  }),
                                  f.jsx(K.defs, {
                                    children: f.jsxs(K.linearGradient, {
                                      id: "paint0_linear_2870_494",
                                      x1: "9",
                                      y1: "0",
                                      x2: "9",
                                      y2: "20",
                                      gradientUnits: "userSpaceOnUse",
                                      children: [
                                        f.jsx(K.stop, { stopColor: "#CACD1E" }),
                                        f.jsx(K.stop, {
                                          offset: "1",
                                          stopColor: "#C19420",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              d
                            )
                          ),
                      }),
                    }),
                    f.jsx("div", {
                      className: "item",
                      style: { flexBasis: "12%" },
                      children: f.jsxs("div", {
                        className: "price",
                        children: [
                          f.jsxs("span", {
                            children: [
                              u.minPrice ? `${u.minPrice} to ` : "",
                              u.price,
                            ],
                          }),
                          f.jsxs(K.svg, {
                            width: "28",
                            initial: { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: { duration: 1 },
                            height: "30",
                            viewBox: "0 0 28 30",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              f.jsx("path", {
                                d: "M6.94336 3.76916L13.8865 0L20.8297 3.76916V26.1317L13.8865 30L6.94336 26.1317V3.76916Z",
                                fill: "white",
                                fillOpacity: "0.3",
                              }),
                              f.jsx("path", {
                                d: "M13.7872 14.7554L0 6.82031V14.7554L13.7872 22.8888V14.7554Z",
                                fill: "white",
                                fillOpacity: "0.3",
                              }),
                              f.jsx("path", {
                                d: "M27.6734 14.7554L13.8862 6.82031V14.7554L27.6734 22.8888V14.7554Z",
                                fill: "white",
                                fillOpacity: "0.3",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    f.jsxs("div", {
                      className: "item",
                      style: { flexBasis: "12%" },
                      children: [
                        u.minReputation
                          ? `${u.minReputation < 0 ? "-" : "+"}${
                              u.minReputation
                            } to `
                          : "",
                        u.reputation < 0 ? "-" : "+",
                        u.reputation,
                      ],
                    }),
                    f.jsx("div", {
                      className: "item",
                      style: { flexBasis: "30%" },
                      children:
                        e.page === "jobboard"
                          ? f.jsx("div", {
                              onClick: () => {
                                s(u);
                              },
                              style: { margin: 20 },
                              className: `button ${
                                u.inQueue ? "leavequeue" : "pickup"
                              }`,
                              children: u.inQueue ? "Leave Queue" : "Sign Up",
                            })
                          : u.hacker
                          ? f.jsxs("div", {
                              style: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                width: "95%",
                                justifyContent: "space-evenly",
                              },
                              children: [
                                "Hacker - ",
                                u.hacker,
                                " ",
                                f.jsx("div", {
                                  style: { width: 90, margin: 20 },
                                  onClick: () => {
                                    o(u);
                                  },
                                  className: "button leavequeue",
                                  children: u.status === 1 ? "Kick" : "Leave",
                                }),
                              ],
                            })
                          : u.class !== "D" &&
                            f.jsx("div", {
                              onClick: a,
                              style: { margin: 20 },
                              className: "button pickup",
                              children: "Invite Hacker",
                            }),
                    }),
                  ],
                },
                u.name
              )
            ),
            t.length === 0 &&
              f.jsx("span", {
                className: "listEmpty",
                children: "Nothing to see here",
              }),
            r &&
              f.jsx("div", {
                onClick: l,
                className: "button leavequeue",
                style: { marginLeft: "auto", margin: 20 },
                children: " Cancel Job ",
              }),
          ],
        }),
      ],
    });
  },
  Dw = (e) => {
    const [t, n] = w.useState([]);
    return (
      Ae("setVehicles", n),
      Ae("insertActiveVehicle", (r) => {
        const i = [...t];
        i.push(r), n(i);
      }),
      Ae("removeActiveVehicle", (r) => {
        n([...t].filter((i) => i.id !== r));
      }),
      Ae("updateActiveVehicle", (r) => {
        const i = [...t],
          s = i.findIndex((o) => o.id === r.id);
        if (s === -1) return;
        const a = { ...i[s], [r.key]: r.data };
        (i[s] = a), n(i);
      }),
      w.useEffect(() => {
        Z("getActiveJobs").then((r) => n(r));
      }, []),
      f.jsxs("div", {
        style: { padding: "21px 42px 37px 21px" },
        children: [
          f.jsx(ng, { reputation: e.reputation }),
          f.jsx(ig, {
            vehicles: t,
            setVehicles: n,
            page: "activejobs",
            setPromptActive: e.setPromptActive,
            setPromptData: e.setPromptData,
            setPromptInput: e.setPromptInput,
          }),
        ],
      })
    );
  },
  Vw = (e) => {
    const [t, n] = w.useState([]);
    return (
      Ae("setVehicles", n),
      w.useEffect(() => {
        Z("getJobBoard").then((r) => n(r));
      }, []),
      f.jsxs("div", {
        style: { padding: "21px 42px 37px 21px" },
        children: [
          f.jsx(ng, { reputation: e.reputation }),
          f.jsx(ig, {
            vehicles: t,
            setVehicles: n,
            page: "jobboard",
            setPromptActive: e.setPromptActive,
            setPromptData: e.setPromptData,
            setPromptInput: e.setPromptInput,
          }),
        ],
      })
    );
  },
  Bw = "modulepreload",
  Fw = function (e, t) {
    return new URL(e, t).href;
  },
  Mh = {},
  ll = function (t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
      const s = document.getElementsByTagName("link"),
        a = document.querySelector("meta[property=csp-nonce]"),
        o = a?.nonce || a?.getAttribute("nonce");
      i = Promise.all(
        n.map((l) => {
          if (((l = Fw(l, r)), l in Mh)) return;
          Mh[l] = !0;
          const u = l.endsWith(".css"),
            c = u ? '[rel="stylesheet"]' : "";
          if (!!r)
            for (let p = s.length - 1; p >= 0; p--) {
              const v = s[p];
              if (v.href === l && (!u || v.rel === "stylesheet")) return;
            }
          else if (document.querySelector(`link[href="${l}"]${c}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = u ? "stylesheet" : Bw),
            u || ((h.as = "script"), (h.crossOrigin = "")),
            (h.href = l),
            o && h.setAttribute("nonce", o),
            document.head.appendChild(h),
            u)
          )
            return new Promise((p, v) => {
              h.addEventListener("load", p),
                h.addEventListener("error", () =>
                  v(new Error(`Unable to preload CSS for ${l}`))
                );
            });
        })
      );
    }
    return i
      .then(() => t())
      .catch((s) => {
        const a = new Event("vite:preloadError", { cancelable: !0 });
        if (((a.payload = s), window.dispatchEvent(a), !a.defaultPrevented))
          throw s;
      });
  },
  zw = (e, t, n) => {
    const r = e[t];
    return r
      ? typeof r == "function"
        ? r()
        : Promise.resolve(r)
      : new Promise((i, s) => {
          (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(
            s.bind(
              null,
              new Error(
                "Unknown variable dynamic import: " +
                  t +
                  (t.split("/").length !== n
                    ? ". Note that variables only represent file names one level deep."
                    : "")
              )
            )
          );
        });
  },
  Uw = async (e) => {
    let t;
    try {
      t = await zw(
        Object.assign({
          "../Images/Vehicles/Invalid.png": () =>
            ll(() => import("./Invalid-BzSfiYtl.js"), [], import.meta.url),
          "../Images/Vehicles/Mystery.png": () =>
            ll(() => import("./Mystery-Hl1AXa48.js"), [], import.meta.url),
        }),
        `../Images/Vehicles/${e}.png`,
        4
      );
    } catch {
      t = await ll(() => import("./Invalid-BzSfiYtl.js"), [], import.meta.url);
    }
    return t.default;
  },
  Hw = (e) => {
    if (!e) return { minutes: 0, seconds: 0, hours: 0 };
    const t = e - new Date().getTime(),
      n = Math.floor(t / (1e3 * 60 * 60 * 24)),
      r = Math.floor((t % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)),
      i = Math.floor((t % (1e3 * 60 * 60)) / (1e3 * 60)),
      s = Math.floor((t % (1e3 * 60)) / 1e3);
    return { days: n, hours: r, minutes: i, seconds: s, distance: t };
  },
  Ww = (e) => {
    const t = e.vehicle,
      [n, r] = w.useState(""),
      [i, s] = w.useState(!1),
      [a, o] = w.useState(!1),
      [l, u] = w.useState(!1),
      [c, d] = w.useState(""),
      [h, p] = w.useState({ minutes: 0, seconds: 0, hours: 0 });
    w.useEffect(() => {
      if (!t.bidEnd || t.sold) {
        o(!1);
        return;
      }
      const y = () => {
        const x = Hw(t.bidEnd);
        o(x.distance ? x.distance < 30 * 60 * 1e3 : !1), p(x);
      };
      y();
      const S = setInterval(y, 1e3);
      return () => clearInterval(S);
    }, [t.bidEnd, t.sold]),
      w.useEffect(() => {
        t.bidder && Z("getCid").then((y) => u(y === t.bidder));
      }, [t.bidder]),
      w.useEffect(() => {
        c === "" && d(t.bidAmount.toString());
      }, [t.bidAmount]),
      w.useEffect(() => {
        const y = Number(c);
        s(y >= t.bidAmount);
      }, [c, t.bidAmount]);
    const v = () => {
      i && (Z("bidnow", { id: t.id, bid: Number(c) }), d(""));
    };
    return (
      w.useEffect(() => {
        (async () => {
          const S = await Uw(t.mystery ? "Mystery.png" : t.model);
          r(S);
        })();
      }, [t]),
      f.jsxs("div", {
        className: "vehicleItem",
        style: {
          border: l
            ? "1px solid rgba(143, 213, 204, 0.6)"
            : "1px solid rgba(255, 255, 255, 0.3)",
        },
        children: [
          f.jsxs("div", {
            className: "vehicleImage",
            children: [
              f.jsx("img", { style: { opacity: t.sold ? 0.5 : 1 }, src: n }),
              t.sold &&
                f.jsxs("svg", {
                  className: "soldSign",
                  width: "137",
                  height: "91",
                  viewBox: "0 0 137 91",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    f.jsxs("g", {
                      clipPath: "url(#clip0_2919_518)",
                      children: [
                        f.jsx("rect", {
                          y: "32.3516",
                          width: "125",
                          height: "60",
                          rx: "6",
                          transform: "rotate(-15 0 32.3516)",
                          fill: "black",
                          fillOpacity: "0.3",
                        }),
                        f.jsx("path", {
                          d: "M46.3372 67.9666C44.6449 68.4201 43.1439 68.4744 41.834 68.1297C40.5179 67.7618 39.3993 67.018 38.4781 65.8982C37.5569 64.7785 36.8131 63.3007 36.2466 61.4647L40.4299 59.4121C40.7682 60.4892 41.1535 61.4171 41.5857 62.1958C42.0412 62.9682 42.5512 63.5273 43.1159 63.8729C43.6976 64.1891 44.3593 64.2478 45.1012 64.0491C45.9357 63.8254 46.4617 63.4236 46.679 62.8436C46.89 62.2404 46.8931 61.5563 46.6881 60.7913C46.3589 59.5627 45.8105 58.6288 45.0429 57.9897C44.2753 57.3506 43.3223 56.7611 42.1838 56.2214L37.7984 54.0422C36.5717 53.4515 35.5172 52.7154 34.635 51.8337C33.7697 50.9226 33.129 49.6904 32.7128 48.1372C32.1165 45.9117 32.3059 44.0223 33.2811 42.469C34.2563 40.9157 35.8682 39.8377 38.1169 39.2352C39.4383 38.8811 40.5953 38.7947 41.5881 38.976C42.5746 39.134 43.4191 39.504 44.1217 40.086C44.8475 40.6618 45.4621 41.3792 45.9656 42.2382C46.4628 43.0739 46.8829 43.9925 47.2257 44.9939L43.0493 46.9329C42.7669 46.0644 42.4514 45.3042 42.1027 44.6522C41.7773 43.994 41.3647 43.5206 40.865 43.2321C40.3885 42.9374 39.7793 42.8895 39.0375 43.0882C38.2725 43.2932 37.7497 43.7066 37.469 44.3284C37.2054 44.9209 37.173 45.588 37.3717 46.3298C37.6264 47.2803 38.0347 48.0157 38.5965 48.536C39.1521 49.0331 39.8877 49.5069 40.8035 49.9572L45.1449 52.111C46.5649 52.774 47.8576 53.6576 49.023 54.7615C50.2054 55.8361 51.0451 57.3007 51.542 59.1553C51.9023 60.4999 51.9209 61.7745 51.5976 62.9792C51.2976 64.1777 50.6952 65.2212 49.7903 66.1096C48.9024 66.9687 47.7514 67.5877 46.3372 67.9666ZM63.7288 63.3066C61.7351 63.8408 60.0478 63.8954 58.6667 63.4703C57.2856 63.0453 56.1537 62.2056 55.271 60.9514C54.3883 59.6971 53.6923 58.1195 53.1829 56.2185L50.3597 45.6822C49.8504 43.7813 49.6706 42.0902 49.8203 40.609C49.9638 39.1046 50.5304 37.8346 51.5202 36.7992C52.5099 35.7637 54.0016 34.9789 55.9953 34.4447C58.0353 33.8981 59.7312 33.8288 61.0828 34.2369C62.4577 34.6387 63.5834 35.4552 64.4599 36.6863C65.3533 37.888 66.0547 39.4393 66.5641 41.3403L69.3966 51.9114C69.8998 53.7891 70.0711 55.4949 69.9106 57.0287C69.7671 58.5331 69.2067 59.8262 68.2294 60.908C67.269 61.9604 65.7688 62.76 63.7288 63.3066ZM62.7132 59.5163C63.5709 59.2865 64.1472 58.9333 64.4419 58.4568C64.7598 57.974 64.9013 57.3895 64.8665 56.7031C64.8316 56.0168 64.7117 55.2911 64.5067 54.526L61.0313 41.5556C60.8201 40.7674 60.5611 40.079 60.2543 39.4903C59.9475 38.9017 59.5389 38.4894 59.0284 38.2535C58.5349 37.9881 57.8593 37.9704 57.0016 38.2002C56.1902 38.4176 55.6256 38.7677 55.3077 39.2504C54.9836 39.71 54.8358 40.2713 54.8644 40.9345C54.8931 41.5977 55.013 42.3234 55.2242 43.1116L58.6996 56.0821C58.9046 56.8471 59.152 57.5386 59.4418 58.1567C59.7548 58.7685 60.1697 59.204 60.6863 59.4631C61.203 59.7222 61.8786 59.7399 62.7132 59.5163ZM75.2224 59.8169L67.6752 31.6505L72.8217 30.2715L79.4185 54.891L86.234 53.0648L87.1844 56.6117L75.2224 59.8169ZM89.5107 55.9884L81.9635 27.822L88.6052 26.0423C90.9003 25.4274 92.7692 25.262 94.2119 25.5463C95.6778 25.8244 96.8513 26.5411 97.7323 27.6964C98.6366 28.8455 99.3558 30.4169 99.89 32.4106L102.648 42.7035C103.195 44.7436 103.373 46.522 103.183 48.0388C103.01 49.5263 102.376 50.7769 101.281 51.7909C100.203 52.7754 98.5634 53.5627 96.361 54.1528L89.5107 55.9884ZM93.6974 51.0277L95.2622 50.6084C96.4445 50.2916 97.2348 49.8563 97.633 49.3023C98.0312 48.7484 98.1826 48.0618 98.0874 47.2426C97.9859 46.4001 97.7798 45.3994 97.4692 44.2402L94.5808 33.4605C94.2764 32.3246 93.9499 31.4306 93.6013 30.7786C93.2527 30.1267 92.7799 29.7067 92.1829 29.5188C91.586 29.3309 90.7195 29.3892 89.5836 29.6935L88.0883 30.0942L93.6974 51.0277Z",
                          fill: "#BD0000",
                        }),
                      ],
                    }),
                    f.jsx("rect", {
                      x: "2.44949",
                      y: "33.7658",
                      width: "121",
                      height: "56",
                      rx: "4",
                      transform: "rotate(-15 2.44949 33.7658)",
                      stroke: "#BD0000",
                      strokeWidth: "4",
                    }),
                    f.jsx("defs", {
                      children: f.jsx("clipPath", {
                        id: "clip0_2919_518",
                        children: f.jsx("rect", {
                          y: "32.3516",
                          width: "125",
                          height: "60",
                          rx: "6",
                          transform: "rotate(-15 0 32.3516)",
                          fill: "white",
                        }),
                      }),
                    }),
                  ],
                }),
            ],
          }),
          f.jsxs("div", {
            className: "carInfo",
            children: [
              f.jsx("div", {
                className: "carName",
                children: t.mystery ? "?̴͉̂?̷͇́?̸̠̽?̵̮̉?̵̝̉" : t.name,
              }),
              f.jsx("div", {
                className: "carDifficulty",
                children: "Difficulty",
              }),
              f.jsx("div", {
                className: "difficulty",
                children: Array(5)
                  .fill(null)
                  .map((y, S) =>
                    f.jsxs(
                      K.svg,
                      {
                        variants: rg,
                        custom: S,
                        initial: "hidden",
                        animate: "visible",
                        width: "18",
                        height: "20",
                        viewBox: "0 0 18 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          f.jsx(K.path, {
                            d: "M8.54492 0.999923C8.72264 0.609414 9.27736 0.609413 9.45508 0.999922L11.3971 5.26698C11.4856 5.46138 11.6878 5.57811 11.9004 5.55753L16.5668 5.10585C16.9938 5.06451 17.2712 5.5449 17.0218 5.89408L14.2975 9.70944C14.1734 9.88327 14.1734 10.1167 14.2975 10.2906L17.0218 14.1059C17.2712 14.4551 16.9938 14.9355 16.5668 14.8942L11.9004 14.4425C11.6878 14.4219 11.4856 14.5386 11.3971 14.733L9.45508 19.0001C9.27736 19.3906 8.72264 19.3906 8.54492 19.0001L6.60289 14.733C6.51442 14.5386 6.31223 14.4219 6.09964 14.4425L1.43325 14.8942C1.00619 14.9355 0.728835 14.4551 0.978161 14.1059L3.70253 10.2906C3.82665 10.1167 3.82665 9.88327 3.70253 9.70944L0.978162 5.89408C0.728835 5.54491 1.00619 5.06451 1.43325 5.10585L6.09963 5.55753C6.31223 5.57811 6.51442 5.46138 6.60289 5.26698L8.54492 0.999923Z",
                            stroke: S >= t.difficulty ? "white" : "",
                            strokeOpacity: S >= t.difficulty ? "0.2" : "0",
                            fill:
                              S < t.difficulty
                                ? "url(#paint0_linear_2870_494)"
                                : "",
                          }),
                          f.jsx(K.defs, {
                            children: f.jsxs(K.linearGradient, {
                              id: "paint0_linear_2870_494",
                              x1: "9",
                              y1: "0",
                              x2: "9",
                              y2: "20",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                f.jsx(K.stop, { stopColor: "#CACD1E" }),
                                f.jsx(K.stop, {
                                  offset: "1",
                                  stopColor: "#C19420",
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      "vehicle-item-key-" + S
                    )
                  ),
              }),
            ],
          }),
          f.jsx("div", { className: "line" }),
          f.jsxs("div", {
            className: "bidInfo",
            children: [
              f.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  justifyContent: "space-between",
                },
                children: [
                  f.jsx("div", {
                    className: "bidLabel",
                    children: "Time Remaining",
                  }),
                  f.jsx("div", {
                    className: "bidData",
                    children: t.sold
                      ? "00 : 00"
                      : a
                      ? `${h.minutes}min ${h.seconds}sec`
                      : "-- : --",
                  }),
                ],
              }),
              f.jsxs("div", {
                style: {
                  display: "flex",
                  flexDirection: "row",
                  width: "80%",
                  justifyContent: "space-between",
                },
                children: [
                  f.jsx("div", {
                    className: "bidLabel",
                    children: t.sold
                      ? "Sold For"
                      : a
                      ? "CURRENT BID"
                      : "STARTING BID",
                  }),
                  f.jsx("div", {
                    className: "bidData",
                    children: t.mystery ? "????" : t.bidAmount,
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "buttonArea",
            children: [
              t.sold &&
                f.jsx("div", {
                  className: "button leavequeue disabled",
                  style: { width: "100%", margin: 4 },
                  children: "SOLD",
                }),
              !a &&
                !t.sold &&
                f.jsx("div", {
                  className: "button leavequeue",
                  style: { width: "100%", margin: 4 },
                  children:
                    h.hours === 0
                      ? "STARTING BID SOON"
                      : `STARTING IN ${h.hours} ${
                          h.hours === 1 ? "HOUR" : "HOURS"
                        }`,
                }),
              a &&
                f.jsxs("div", {
                  className: "biddingContainer",
                  children: [
                    f.jsxs("div", {
                      style: {
                        background: i
                          ? "rgba(255, 255, 255, 0.05)"
                          : "rgba(51, 31, 31, 0.1)",
                      },
                      className: "bidInputBox",
                      children: [
                        f.jsx("input", {
                          onKeyDown: (y) => {
                            y.key !== "Backspace" &&
                              ((y.ctrlKey && y.key === "a") ||
                                /\d/.test(y.key) ||
                                y.preventDefault());
                          },
                          placeholder: "0",
                          value: c,
                          onChange: (y) => {
                            d(y.target.value);
                          },
                        }),
                        f.jsxs("svg", {
                          width: "28",
                          height: "30",
                          viewBox: "0 0 28 30",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            f.jsx("path", {
                              d: "M6.94336 3.76916L13.8865 0L20.8297 3.76916V26.1317L13.8865 30L6.94336 26.1317V3.76916Z",
                              fill: "white",
                              fillOpacity: "0.3",
                            }),
                            f.jsx("path", {
                              d: "M13.7872 14.7554L0 6.82031V14.7554L13.7872 22.8888V14.7554Z",
                              fill: "white",
                              fillOpacity: "0.3",
                            }),
                            f.jsx("path", {
                              d: "M27.6734 14.7554L13.8862 6.82031V14.7554L27.6734 22.8888V14.7554Z",
                              fill: "white",
                              fillOpacity: "0.3",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "button pickup",
                      onClick: v,
                      style: { flex: 0.5 },
                      children: "BID NOW",
                    }),
                  ],
                }),
            ],
          }),
        ],
      })
    );
  },
  Yw = (e) => {
    const [t, n] = w.useState([]);
    return (
      w.useEffect(() => {
        Z("getVehicleShop").then((r) => {
          n(r);
        });
      }, []),
      Ae("updateBid", (r) => {
        n((i) =>
          i.map((s) =>
            s.id === r.id ? { ...s, bidAmount: r.amount, bidder: r.cid } : s
          )
        );
      }),
      Ae("updateSold", (r) => {
        n((i) => i.map((s) => (s.id === r ? { ...s, sold: !0 } : s)));
      }),
      Ae("updateItem", (r) => {
        n((i) => i.map((s) => (s.id === r.id ? r : s)));
      }),
      f.jsxs("div", {
        style: { padding: "32px 62px 32px 52px" },
        children: [
          f.jsx("div", { className: "title", children: "Today's List" }),
          f.jsx("div", {
            className: "vehicleList",
            children: t.map((r) => f.jsx(Ww, { vehicle: r }, r.id)),
          }),
        ],
      })
    );
  },
  Gw = (e) => {
    const [t, n] = w.useState("jobboard"),
      [r, i] = w.useState(!1),
      [s, a] = w.useState(!1),
      [o, l] = w.useState({
        title: "You are in queue",
        text: "You will be notified on your phone.",
      });
    Ae("setPromptActive", a), Ae("setPromptData", l);
    const [u, c] = w.useState("");
    Ae("setPromptInput", (A) => {
      (A === "nothing" || A === "empty") && c(void 0);
    });
    const [d, h] = w.useState(0);
    Ae("setReputation", h);
    const [p, v] = w.useState("D");
    Ae("setRank", v),
      w.useEffect(() => {
        Z("getReputationRank").then((A) => {
          h(A.reputation), v(A.rank);
        });
      }, []),
      w.useEffect(() => {
        i(p === "S" || p === "A" || p === "B");
      }, [p]);
    const [y, S] = w.useState(0),
      [x, m] = w.useState(0);
    Ae("setQueue", (A) => {
      S(A.position), m(A.size);
    }),
      w.useEffect(() => {
        Z("getQueue").then((A) => {
          S(A.position), m(A.size);
        });
      }, []);
    const g = (A) => {
      c(A.target.value);
    };
    return f.jsx(Xe, {
      children:
        e.activeApp === "boosting" &&
        f.jsx(
          K.div,
          {
            className: "appContainer",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: f.jsxs("div", {
              className: "boostingApp",
              children: [
                f.jsxs("div", {
                  className: "header",
                  children: [
                    f.jsxs("div", {
                      className: "logoName",
                      children: [
                        f.jsx(K.img, {
                          src: N0,
                          animate: {
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                          },
                          transition: {
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: 1 / 0,
                            repeatDelay: 60,
                          },
                        }),
                        f.jsx("span", { children: "Boost Contracts" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "appControls",
                      children: [
                        f.jsx("svg", {
                          onClick: () => {
                            e.setActiveApp("");
                          },
                          width: "17",
                          height: "2",
                          viewBox: "0 0 17 2",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: f.jsx("rect", {
                            x: "0.0810547",
                            y: "0.539062",
                            width: "16",
                            height: "0.8",
                            rx: "0.4",
                            fill: "white",
                          }),
                        }),
                        f.jsxs("svg", {
                          onClick: () => {
                            e.setActiveApp("");
                          },
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            f.jsx("rect", {
                              x: "0.707275",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              transform: "rotate(45 0.707275 0)",
                              fill: "white",
                            }),
                            f.jsx("rect", {
                              x: "0.192627",
                              y: "11.4844",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              transform: "rotate(-45 0.192627 11.4844)",
                              fill: "white",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "contentContainer",
                  children: [
                    f.jsxs("div", {
                      className: "tabsContainer",
                      children: [
                        f.jsxs("div", {
                          onClick: () => {
                            n("jobboard");
                          },
                          className: "tabItem",
                          children: [
                            f.jsx("span", { children: "Job Board" }),
                            t === "jobboard"
                              ? f.jsx(K.div, {
                                  className: "rectangle",
                                  layoutId: "rectangle",
                                })
                              : f.jsx("div", { style: { height: 1 } }),
                          ],
                        }),
                        f.jsxs("div", {
                          onClick: () => {
                            n("activejobs");
                          },
                          className: "tabItem",
                          children: [
                            f.jsx("span", { children: "Active Jobs" }),
                            t === "activejobs"
                              ? f.jsx(K.div, {
                                  className: "rectangle",
                                  layoutId: "rectangle",
                                })
                              : f.jsx("div", { style: { height: 1 } }),
                          ],
                        }),
                        f.jsxs("div", {
                          onClick: () => {
                            r && n("vehicleshop");
                          },
                          className: "tabItem",
                          children: [
                            r
                              ? f.jsx("span", { children: "Vehicle Shop" })
                              : f.jsx("span", {
                                  className: "disabled",
                                  children: "?̴͉̂?̷͇́?̸̠̽?̵̮̉?̵̝̉",
                                }),
                            t === "vehicleshop"
                              ? f.jsx(K.div, {
                                  className: "rectangle",
                                  layoutId: "rectangle",
                                })
                              : f.jsx("div", { style: { height: 1 } }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "rightFlex",
                          children: [
                            y > 0 &&
                              f.jsxs("div", {
                                className: "queueContainer",
                                children: [
                                  f.jsxs("span", {
                                    children: [
                                      "You are in queue (",
                                      y,
                                      "/",
                                      x,
                                      ")",
                                    ],
                                  }),
                                  f.jsxs("div", {
                                    className: "dots",
                                    children: [
                                      f.jsx(K.span, {
                                        animate: { y: [0, -5, 0] },
                                        transition: {
                                          duration: 1,
                                          ease: "easeInOut",
                                          repeat: 1 / 0,
                                          repeatDelay: 1,
                                          delay: 0.1,
                                        },
                                      }),
                                      f.jsx(K.span, {
                                        animate: { y: [0, -5, 0] },
                                        transition: {
                                          duration: 1,
                                          ease: "easeInOut",
                                          repeat: 1 / 0,
                                          repeatDelay: 1,
                                          delay: 0.3,
                                        },
                                      }),
                                      f.jsx(K.span, {
                                        animate: { y: [0, -5, 0] },
                                        transition: {
                                          duration: 1,
                                          ease: "easeInOut",
                                          repeat: 1 / 0,
                                          repeatDelay: 1,
                                          delay: 0.5,
                                        },
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            f.jsx("div", { className: "rank", children: p }),
                          ],
                        }),
                      ],
                    }),
                    f.jsx(Xe, {
                      mode: "wait",
                      children: f.jsxs(
                        K.div,
                        {
                          initial: { scale: 0, opacity: 0 },
                          animate: { scale: 1, opacity: 1 },
                          exit: { scale: 0, opacity: 0 },
                          transition: { duration: 0.4 },
                          children: [
                            t === "jobboard" &&
                              f.jsx(Vw, {
                                reputation: d,
                                setPromptActive: a,
                                setPromptData: l,
                                setPromptInput: c,
                              }),
                            t === "activejobs" &&
                              f.jsx(Dw, {
                                reputation: d,
                                setPromptActive: a,
                                setPromptData: l,
                                setPromptInput: c,
                              }),
                            t === "vehicleshop" &&
                              f.jsx(Yw, {
                                setPromptActive: a,
                                setPromptData: l,
                                setPromptInput: c,
                              }),
                          ],
                        },
                        t
                      ),
                    }),
                  ],
                }),
                f.jsx(Xe, {
                  children:
                    s &&
                    f.jsx(
                      K.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        transition: { duration: 0.2 },
                        children: f.jsx(nf, {
                          close: () => a(!1),
                          promptData: o,
                          input: u,
                          inputChange: g,
                          placeholder: "######",
                        }),
                      },
                      "prompt-boosting"
                    ),
                }),
              ],
            }),
          },
          "appContainer"
        ),
    });
  };
var sg = { exports: {} };
(function (e, t) {
  (function (n, r) {
    e.exports = r(w);
  })(typeof self < "u" ? self : _g, (n) =>
    (() => {
      var r = {
          7403: (o, l, u) => {
            u.d(l, { default: () => T });
            var c = u(4087),
              d = u.n(c);
            const h = function (I) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(I);
              },
              p = function (I, L) {
                return Math.floor(Math.random() * (L - I + 1)) + I;
              };
            var v = "TYPE_CHARACTER",
              y = "REMOVE_CHARACTER",
              S = "REMOVE_ALL",
              x = "REMOVE_LAST_VISIBLE_NODE",
              m = "PAUSE_FOR",
              g = "CALL_FUNCTION",
              A = "ADD_HTML_TAG_ELEMENT",
              k = "CHANGE_DELETE_SPEED",
              b = "CHANGE_DELAY",
              C = "CHANGE_CURSOR",
              j = "PASTE_STRING",
              E = "HTML_TAG";
            function N(I) {
              return (
                (N =
                  typeof Symbol == "function" &&
                  typeof Symbol.iterator == "symbol"
                    ? function (L) {
                        return typeof L;
                      }
                    : function (L) {
                        return L &&
                          typeof Symbol == "function" &&
                          L.constructor === Symbol &&
                          L !== Symbol.prototype
                          ? "symbol"
                          : typeof L;
                      }),
                N(I)
              );
            }
            function R(I, L) {
              var D = Object.keys(I);
              if (Object.getOwnPropertySymbols) {
                var U = Object.getOwnPropertySymbols(I);
                L &&
                  (U = U.filter(function (xe) {
                    return Object.getOwnPropertyDescriptor(I, xe).enumerable;
                  })),
                  D.push.apply(D, U);
              }
              return D;
            }
            function V(I) {
              for (var L = 1; L < arguments.length; L++) {
                var D = arguments[L] != null ? arguments[L] : {};
                L % 2
                  ? R(Object(D), !0).forEach(function (U) {
                      z(I, U, D[U]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      I,
                      Object.getOwnPropertyDescriptors(D)
                    )
                  : R(Object(D)).forEach(function (U) {
                      Object.defineProperty(
                        I,
                        U,
                        Object.getOwnPropertyDescriptor(D, U)
                      );
                    });
              }
              return I;
            }
            function B(I) {
              return (
                (function (L) {
                  if (Array.isArray(L)) return F(L);
                })(I) ||
                (function (L) {
                  if (
                    (typeof Symbol < "u" && L[Symbol.iterator] != null) ||
                    L["@@iterator"] != null
                  )
                    return Array.from(L);
                })(I) ||
                (function (L, D) {
                  if (L) {
                    if (typeof L == "string") return F(L, D);
                    var U = Object.prototype.toString.call(L).slice(8, -1);
                    return (
                      U === "Object" &&
                        L.constructor &&
                        (U = L.constructor.name),
                      U === "Map" || U === "Set"
                        ? Array.from(L)
                        : U === "Arguments" ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(U)
                        ? F(L, D)
                        : void 0
                    );
                  }
                })(I) ||
                (function () {
                  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
                })()
              );
            }
            function F(I, L) {
              (L == null || L > I.length) && (L = I.length);
              for (var D = 0, U = new Array(L); D < L; D++) U[D] = I[D];
              return U;
            }
            function G(I, L) {
              for (var D = 0; D < L.length; D++) {
                var U = L[D];
                (U.enumerable = U.enumerable || !1),
                  (U.configurable = !0),
                  "value" in U && (U.writable = !0),
                  Object.defineProperty(I, _(U.key), U);
              }
            }
            function z(I, L, D) {
              return (
                (L = _(L)) in I
                  ? Object.defineProperty(I, L, {
                      value: D,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (I[L] = D),
                I
              );
            }
            function _(I) {
              var L = (function (D, U) {
                if (N(D) !== "object" || D === null) return D;
                var xe = D[Symbol.toPrimitive];
                if (xe !== void 0) {
                  var P = xe.call(D, "string");
                  if (N(P) !== "object") return P;
                  throw new TypeError(
                    "@@toPrimitive must return a primitive value."
                  );
                }
                return String(D);
              })(I);
              return N(L) === "symbol" ? L : String(L);
            }
            const T = (function () {
              function I(U, xe) {
                var P = this;
                if (
                  ((function (O, X) {
                    if (!(O instanceof X))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, I),
                  z(this, "state", {
                    cursorAnimation: null,
                    lastFrameTime: null,
                    pauseUntil: null,
                    eventQueue: [],
                    eventLoop: null,
                    eventLoopPaused: !1,
                    reverseCalledEvents: [],
                    calledEvents: [],
                    visibleNodes: [],
                    initialOptions: null,
                    elements: {
                      container: null,
                      wrapper: document.createElement("span"),
                      cursor: document.createElement("span"),
                    },
                  }),
                  z(this, "options", {
                    strings: null,
                    cursor: "|",
                    delay: "natural",
                    pauseFor: 1500,
                    deleteSpeed: "natural",
                    loop: !1,
                    autoStart: !1,
                    devMode: !1,
                    skipAddStyles: !1,
                    wrapperClassName: "Typewriter__wrapper",
                    cursorClassName: "Typewriter__cursor",
                    stringSplitter: null,
                    onCreateTextNode: null,
                    onRemoveNode: null,
                  }),
                  z(this, "setupWrapperElement", function () {
                    P.state.elements.container &&
                      ((P.state.elements.wrapper.className =
                        P.options.wrapperClassName),
                      (P.state.elements.cursor.className =
                        P.options.cursorClassName),
                      (P.state.elements.cursor.innerHTML = P.options.cursor),
                      (P.state.elements.container.innerHTML = ""),
                      P.state.elements.container.appendChild(
                        P.state.elements.wrapper
                      ),
                      P.state.elements.container.appendChild(
                        P.state.elements.cursor
                      ));
                  }),
                  z(this, "start", function () {
                    return (P.state.eventLoopPaused = !1), P.runEventLoop(), P;
                  }),
                  z(this, "pause", function () {
                    return (P.state.eventLoopPaused = !0), P;
                  }),
                  z(this, "stop", function () {
                    return (
                      P.state.eventLoop &&
                        ((0, c.cancel)(P.state.eventLoop),
                        (P.state.eventLoop = null)),
                      P
                    );
                  }),
                  z(this, "pauseFor", function (O) {
                    return P.addEventToQueue(m, { ms: O }), P;
                  }),
                  z(this, "typeOutAllStrings", function () {
                    return typeof P.options.strings == "string"
                      ? (P.typeString(P.options.strings).pauseFor(
                          P.options.pauseFor
                        ),
                        P)
                      : (P.options.strings.forEach(function (O) {
                          P.typeString(O)
                            .pauseFor(P.options.pauseFor)
                            .deleteAll(P.options.deleteSpeed);
                        }),
                        P);
                  }),
                  z(this, "typeString", function (O) {
                    var X =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (h(O)) return P.typeOutHTMLString(O, X);
                    if (O) {
                      var re = (P.options || {}).stringSplitter,
                        ne = typeof re == "function" ? re(O) : O.split("");
                      P.typeCharacters(ne, X);
                    }
                    return P;
                  }),
                  z(this, "pasteString", function (O) {
                    var X =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    return h(O)
                      ? P.typeOutHTMLString(O, X, !0)
                      : (O && P.addEventToQueue(j, { character: O, node: X }),
                        P);
                  }),
                  z(this, "typeOutHTMLString", function (O) {
                    var X =
                        arguments.length > 1 && arguments[1] !== void 0
                          ? arguments[1]
                          : null,
                      re = arguments.length > 2 ? arguments[2] : void 0,
                      ne = (function (kt) {
                        var at = document.createElement("div");
                        return (at.innerHTML = kt), at.childNodes;
                      })(O);
                    if (ne.length > 0)
                      for (var J = 0; J < ne.length; J++) {
                        var fe = ne[J],
                          st = fe.innerHTML;
                        fe && fe.nodeType !== 3
                          ? ((fe.innerHTML = ""),
                            P.addEventToQueue(A, { node: fe, parentNode: X }),
                            re ? P.pasteString(st, fe) : P.typeString(st, fe))
                          : fe.textContent &&
                            (re
                              ? P.pasteString(fe.textContent, X)
                              : P.typeString(fe.textContent, X));
                      }
                    return P;
                  }),
                  z(this, "deleteAll", function () {
                    var O =
                      arguments.length > 0 && arguments[0] !== void 0
                        ? arguments[0]
                        : "natural";
                    return P.addEventToQueue(S, { speed: O }), P;
                  }),
                  z(this, "changeDeleteSpeed", function (O) {
                    if (!O) throw new Error("Must provide new delete speed");
                    return P.addEventToQueue(k, { speed: O }), P;
                  }),
                  z(this, "changeDelay", function (O) {
                    if (!O) throw new Error("Must provide new delay");
                    return P.addEventToQueue(b, { delay: O }), P;
                  }),
                  z(this, "changeCursor", function (O) {
                    if (!O) throw new Error("Must provide new cursor");
                    return P.addEventToQueue(C, { cursor: O }), P;
                  }),
                  z(this, "deleteChars", function (O) {
                    if (!O)
                      throw new Error(
                        "Must provide amount of characters to delete"
                      );
                    for (var X = 0; X < O; X++) P.addEventToQueue(y);
                    return P;
                  }),
                  z(this, "callFunction", function (O, X) {
                    if (!O || typeof O != "function")
                      throw new Error("Callback must be a function");
                    return P.addEventToQueue(g, { cb: O, thisArg: X }), P;
                  }),
                  z(this, "typeCharacters", function (O) {
                    var X =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : null;
                    if (!O || !Array.isArray(O))
                      throw new Error("Characters must be an array");
                    return (
                      O.forEach(function (re) {
                        P.addEventToQueue(v, { character: re, node: X });
                      }),
                      P
                    );
                  }),
                  z(this, "removeCharacters", function (O) {
                    if (!O || !Array.isArray(O))
                      throw new Error("Characters must be an array");
                    return (
                      O.forEach(function () {
                        P.addEventToQueue(y);
                      }),
                      P
                    );
                  }),
                  z(this, "addEventToQueue", function (O, X) {
                    var re =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return P.addEventToStateProperty(O, X, re, "eventQueue");
                  }),
                  z(this, "addReverseCalledEvent", function (O, X) {
                    var re =
                      arguments.length > 2 &&
                      arguments[2] !== void 0 &&
                      arguments[2];
                    return P.options.loop
                      ? P.addEventToStateProperty(
                          O,
                          X,
                          re,
                          "reverseCalledEvents"
                        )
                      : P;
                  }),
                  z(this, "addEventToStateProperty", function (O, X) {
                    var re =
                        arguments.length > 2 &&
                        arguments[2] !== void 0 &&
                        arguments[2],
                      ne = arguments.length > 3 ? arguments[3] : void 0,
                      J = { eventName: O, eventArgs: X || {} };
                    return (
                      (P.state[ne] = re
                        ? [J].concat(B(P.state[ne]))
                        : [].concat(B(P.state[ne]), [J])),
                      P
                    );
                  }),
                  z(this, "runEventLoop", function () {
                    P.state.lastFrameTime ||
                      (P.state.lastFrameTime = Date.now());
                    var O = Date.now(),
                      X = O - P.state.lastFrameTime;
                    if (!P.state.eventQueue.length) {
                      if (!P.options.loop) return;
                      (P.state.eventQueue = B(P.state.calledEvents)),
                        (P.state.calledEvents = []),
                        (P.options = V({}, P.state.initialOptions));
                    }
                    if (
                      ((P.state.eventLoop = d()(P.runEventLoop)),
                      !P.state.eventLoopPaused)
                    ) {
                      if (P.state.pauseUntil) {
                        if (O < P.state.pauseUntil) return;
                        P.state.pauseUntil = null;
                      }
                      var re,
                        ne = B(P.state.eventQueue),
                        J = ne.shift();
                      if (
                        !(
                          X <=
                          (re =
                            J.eventName === x || J.eventName === y
                              ? P.options.deleteSpeed === "natural"
                                ? p(40, 80)
                                : P.options.deleteSpeed
                              : P.options.delay === "natural"
                              ? p(120, 160)
                              : P.options.delay)
                        )
                      ) {
                        var fe = J.eventName,
                          st = J.eventArgs;
                        switch (
                          (P.logInDevMode({
                            currentEvent: J,
                            state: P.state,
                            delay: re,
                          }),
                          fe)
                        ) {
                          case j:
                          case v:
                            var kt = st.character,
                              at = st.node,
                              yo = document.createTextNode(kt),
                              Nn = yo;
                            P.options.onCreateTextNode &&
                              typeof P.options.onCreateTextNode == "function" &&
                              (Nn = P.options.onCreateTextNode(kt, yo)),
                              Nn &&
                                (at
                                  ? at.appendChild(Nn)
                                  : P.state.elements.wrapper.appendChild(Nn)),
                              (P.state.visibleNodes = [].concat(
                                B(P.state.visibleNodes),
                                [{ type: "TEXT_NODE", character: kt, node: Nn }]
                              ));
                            break;
                          case y:
                            ne.unshift({
                              eventName: x,
                              eventArgs: { removingCharacterNode: !0 },
                            });
                            break;
                          case m:
                            var cs = J.eventArgs.ms;
                            P.state.pauseUntil = Date.now() + parseInt(cs);
                            break;
                          case g:
                            var Ct = J.eventArgs,
                              xf = Ct.cb,
                              zg = Ct.thisArg;
                            xf.call(zg, { elements: P.state.elements });
                            break;
                          case A:
                            var wf = J.eventArgs,
                              xo = wf.node,
                              wo = wf.parentNode;
                            wo
                              ? wo.appendChild(xo)
                              : P.state.elements.wrapper.appendChild(xo),
                              (P.state.visibleNodes = [].concat(
                                B(P.state.visibleNodes),
                                [
                                  {
                                    type: E,
                                    node: xo,
                                    parentNode: wo || P.state.elements.wrapper,
                                  },
                                ]
                              ));
                            break;
                          case S:
                            var Ug = P.state.visibleNodes,
                              Ao = st.speed,
                              fs = [];
                            Ao &&
                              fs.push({
                                eventName: k,
                                eventArgs: { speed: Ao, temp: !0 },
                              });
                            for (var Af = 0, Hg = Ug.length; Af < Hg; Af++)
                              fs.push({
                                eventName: x,
                                eventArgs: { removingCharacterNode: !1 },
                              });
                            Ao &&
                              fs.push({
                                eventName: k,
                                eventArgs: {
                                  speed: P.options.deleteSpeed,
                                  temp: !0,
                                },
                              }),
                              ne.unshift.apply(ne, fs);
                            break;
                          case x:
                            var Wg = J.eventArgs.removingCharacterNode;
                            if (P.state.visibleNodes.length) {
                              var So = P.state.visibleNodes.pop(),
                                Yg = So.type,
                                ds = So.node,
                                Gg = So.character;
                              P.options.onRemoveNode &&
                                typeof P.options.onRemoveNode == "function" &&
                                P.options.onRemoveNode({
                                  node: ds,
                                  character: Gg,
                                }),
                                ds && ds.parentNode.removeChild(ds),
                                Yg === E &&
                                  Wg &&
                                  ne.unshift({ eventName: x, eventArgs: {} });
                            }
                            break;
                          case k:
                            P.options.deleteSpeed = J.eventArgs.speed;
                            break;
                          case b:
                            P.options.delay = J.eventArgs.delay;
                            break;
                          case C:
                            (P.options.cursor = J.eventArgs.cursor),
                              (P.state.elements.cursor.innerHTML =
                                J.eventArgs.cursor);
                        }
                        P.options.loop &&
                          (J.eventName === x ||
                            (J.eventArgs && J.eventArgs.temp) ||
                            (P.state.calledEvents = [].concat(
                              B(P.state.calledEvents),
                              [J]
                            ))),
                          (P.state.eventQueue = ne),
                          (P.state.lastFrameTime = O);
                      }
                    }
                  }),
                  U)
                )
                  if (typeof U == "string") {
                    var q = document.querySelector(U);
                    if (!q) throw new Error("Could not find container element");
                    this.state.elements.container = q;
                  } else this.state.elements.container = U;
                xe && (this.options = V(V({}, this.options), xe)),
                  (this.state.initialOptions = V({}, this.options)),
                  this.init();
              }
              var L, D;
              return (
                (L = I),
                (D = [
                  {
                    key: "init",
                    value: function () {
                      var U, xe;
                      this.setupWrapperElement(),
                        this.addEventToQueue(
                          C,
                          { cursor: this.options.cursor },
                          !0
                        ),
                        this.addEventToQueue(S, null, !0),
                        !window ||
                          window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                          this.options.skipAddStyles ||
                          ((U =
                            ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                          (xe = document.createElement("style")).appendChild(
                            document.createTextNode(U)
                          ),
                          document.head.appendChild(xe),
                          (window.___TYPEWRITER_JS_STYLES_ADDED___ = !0)),
                        this.options.autoStart === !0 &&
                          this.options.strings &&
                          this.typeOutAllStrings().start();
                    },
                  },
                  {
                    key: "logInDevMode",
                    value: function (U) {
                      this.options.devMode && console.log(U);
                    },
                  },
                ]) && G(L.prototype, D),
                Object.defineProperty(L, "prototype", { writable: !1 }),
                I
              );
            })();
          },
          8552: (o, l, u) => {
            var c = u(852)(u(5639), "DataView");
            o.exports = c;
          },
          1989: (o, l, u) => {
            var c = u(1789),
              d = u(401),
              h = u(7667),
              p = u(1327),
              v = u(1866);
            function y(S) {
              var x = -1,
                m = S == null ? 0 : S.length;
              for (this.clear(); ++x < m; ) {
                var g = S[x];
                this.set(g[0], g[1]);
              }
            }
            (y.prototype.clear = c),
              (y.prototype.delete = d),
              (y.prototype.get = h),
              (y.prototype.has = p),
              (y.prototype.set = v),
              (o.exports = y);
          },
          8407: (o, l, u) => {
            var c = u(7040),
              d = u(4125),
              h = u(2117),
              p = u(7518),
              v = u(4705);
            function y(S) {
              var x = -1,
                m = S == null ? 0 : S.length;
              for (this.clear(); ++x < m; ) {
                var g = S[x];
                this.set(g[0], g[1]);
              }
            }
            (y.prototype.clear = c),
              (y.prototype.delete = d),
              (y.prototype.get = h),
              (y.prototype.has = p),
              (y.prototype.set = v),
              (o.exports = y);
          },
          7071: (o, l, u) => {
            var c = u(852)(u(5639), "Map");
            o.exports = c;
          },
          3369: (o, l, u) => {
            var c = u(4785),
              d = u(1285),
              h = u(6e3),
              p = u(9916),
              v = u(5265);
            function y(S) {
              var x = -1,
                m = S == null ? 0 : S.length;
              for (this.clear(); ++x < m; ) {
                var g = S[x];
                this.set(g[0], g[1]);
              }
            }
            (y.prototype.clear = c),
              (y.prototype.delete = d),
              (y.prototype.get = h),
              (y.prototype.has = p),
              (y.prototype.set = v),
              (o.exports = y);
          },
          3818: (o, l, u) => {
            var c = u(852)(u(5639), "Promise");
            o.exports = c;
          },
          8525: (o, l, u) => {
            var c = u(852)(u(5639), "Set");
            o.exports = c;
          },
          8668: (o, l, u) => {
            var c = u(3369),
              d = u(619),
              h = u(2385);
            function p(v) {
              var y = -1,
                S = v == null ? 0 : v.length;
              for (this.__data__ = new c(); ++y < S; ) this.add(v[y]);
            }
            (p.prototype.add = p.prototype.push = d),
              (p.prototype.has = h),
              (o.exports = p);
          },
          6384: (o, l, u) => {
            var c = u(8407),
              d = u(7465),
              h = u(3779),
              p = u(7599),
              v = u(4758),
              y = u(4309);
            function S(x) {
              var m = (this.__data__ = new c(x));
              this.size = m.size;
            }
            (S.prototype.clear = d),
              (S.prototype.delete = h),
              (S.prototype.get = p),
              (S.prototype.has = v),
              (S.prototype.set = y),
              (o.exports = S);
          },
          2705: (o, l, u) => {
            var c = u(5639).Symbol;
            o.exports = c;
          },
          1149: (o, l, u) => {
            var c = u(5639).Uint8Array;
            o.exports = c;
          },
          577: (o, l, u) => {
            var c = u(852)(u(5639), "WeakMap");
            o.exports = c;
          },
          4963: (o) => {
            o.exports = function (l, u) {
              for (
                var c = -1, d = l == null ? 0 : l.length, h = 0, p = [];
                ++c < d;

              ) {
                var v = l[c];
                u(v, c, l) && (p[h++] = v);
              }
              return p;
            };
          },
          4636: (o, l, u) => {
            var c = u(2545),
              d = u(5694),
              h = u(1469),
              p = u(4144),
              v = u(5776),
              y = u(6719),
              S = Object.prototype.hasOwnProperty;
            o.exports = function (x, m) {
              var g = h(x),
                A = !g && d(x),
                k = !g && !A && p(x),
                b = !g && !A && !k && y(x),
                C = g || A || k || b,
                j = C ? c(x.length, String) : [],
                E = j.length;
              for (var N in x)
                (!m && !S.call(x, N)) ||
                  (C &&
                    (N == "length" ||
                      (k && (N == "offset" || N == "parent")) ||
                      (b &&
                        (N == "buffer" ||
                          N == "byteLength" ||
                          N == "byteOffset")) ||
                      v(N, E))) ||
                  j.push(N);
              return j;
            };
          },
          2488: (o) => {
            o.exports = function (l, u) {
              for (var c = -1, d = u.length, h = l.length; ++c < d; )
                l[h + c] = u[c];
              return l;
            };
          },
          2908: (o) => {
            o.exports = function (l, u) {
              for (var c = -1, d = l == null ? 0 : l.length; ++c < d; )
                if (u(l[c], c, l)) return !0;
              return !1;
            };
          },
          8470: (o, l, u) => {
            var c = u(7813);
            o.exports = function (d, h) {
              for (var p = d.length; p--; ) if (c(d[p][0], h)) return p;
              return -1;
            };
          },
          8866: (o, l, u) => {
            var c = u(2488),
              d = u(1469);
            o.exports = function (h, p, v) {
              var y = p(h);
              return d(h) ? y : c(y, v(h));
            };
          },
          4239: (o, l, u) => {
            var c = u(2705),
              d = u(9607),
              h = u(2333),
              p = c ? c.toStringTag : void 0;
            o.exports = function (v) {
              return v == null
                ? v === void 0
                  ? "[object Undefined]"
                  : "[object Null]"
                : p && p in Object(v)
                ? d(v)
                : h(v);
            };
          },
          9454: (o, l, u) => {
            var c = u(4239),
              d = u(7005);
            o.exports = function (h) {
              return d(h) && c(h) == "[object Arguments]";
            };
          },
          939: (o, l, u) => {
            var c = u(2492),
              d = u(7005);
            o.exports = function h(p, v, y, S, x) {
              return (
                p === v ||
                (p == null || v == null || (!d(p) && !d(v))
                  ? p != p && v != v
                  : c(p, v, y, S, h, x))
              );
            };
          },
          2492: (o, l, u) => {
            var c = u(6384),
              d = u(7114),
              h = u(8351),
              p = u(6096),
              v = u(4160),
              y = u(1469),
              S = u(4144),
              x = u(6719),
              m = "[object Arguments]",
              g = "[object Array]",
              A = "[object Object]",
              k = Object.prototype.hasOwnProperty;
            o.exports = function (b, C, j, E, N, R) {
              var V = y(b),
                B = y(C),
                F = V ? g : v(b),
                G = B ? g : v(C),
                z = (F = F == m ? A : F) == A,
                _ = (G = G == m ? A : G) == A,
                T = F == G;
              if (T && S(b)) {
                if (!S(C)) return !1;
                (V = !0), (z = !1);
              }
              if (T && !z)
                return (
                  R || (R = new c()),
                  V || x(b) ? d(b, C, j, E, N, R) : h(b, C, F, j, E, N, R)
                );
              if (!(1 & j)) {
                var I = z && k.call(b, "__wrapped__"),
                  L = _ && k.call(C, "__wrapped__");
                if (I || L) {
                  var D = I ? b.value() : b,
                    U = L ? C.value() : C;
                  return R || (R = new c()), N(D, U, j, E, R);
                }
              }
              return !!T && (R || (R = new c()), p(b, C, j, E, N, R));
            };
          },
          8458: (o, l, u) => {
            var c = u(3560),
              d = u(5346),
              h = u(3218),
              p = u(346),
              v = /^\[object .+?Constructor\]$/,
              y = Function.prototype,
              S = Object.prototype,
              x = y.toString,
              m = S.hasOwnProperty,
              g = RegExp(
                "^" +
                  x
                    .call(m)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              );
            o.exports = function (A) {
              return !(!h(A) || d(A)) && (c(A) ? g : v).test(p(A));
            };
          },
          8749: (o, l, u) => {
            var c = u(4239),
              d = u(1780),
              h = u(7005),
              p = {};
            (p["[object Float32Array]"] =
              p["[object Float64Array]"] =
              p["[object Int8Array]"] =
              p["[object Int16Array]"] =
              p["[object Int32Array]"] =
              p["[object Uint8Array]"] =
              p["[object Uint8ClampedArray]"] =
              p["[object Uint16Array]"] =
              p["[object Uint32Array]"] =
                !0),
              (p["[object Arguments]"] =
                p["[object Array]"] =
                p["[object ArrayBuffer]"] =
                p["[object Boolean]"] =
                p["[object DataView]"] =
                p["[object Date]"] =
                p["[object Error]"] =
                p["[object Function]"] =
                p["[object Map]"] =
                p["[object Number]"] =
                p["[object Object]"] =
                p["[object RegExp]"] =
                p["[object Set]"] =
                p["[object String]"] =
                p["[object WeakMap]"] =
                  !1),
              (o.exports = function (v) {
                return h(v) && d(v.length) && !!p[c(v)];
              });
          },
          280: (o, l, u) => {
            var c = u(5726),
              d = u(6916),
              h = Object.prototype.hasOwnProperty;
            o.exports = function (p) {
              if (!c(p)) return d(p);
              var v = [];
              for (var y in Object(p))
                h.call(p, y) && y != "constructor" && v.push(y);
              return v;
            };
          },
          2545: (o) => {
            o.exports = function (l, u) {
              for (var c = -1, d = Array(l); ++c < l; ) d[c] = u(c);
              return d;
            };
          },
          1717: (o) => {
            o.exports = function (l) {
              return function (u) {
                return l(u);
              };
            };
          },
          4757: (o) => {
            o.exports = function (l, u) {
              return l.has(u);
            };
          },
          4429: (o, l, u) => {
            var c = u(5639)["__core-js_shared__"];
            o.exports = c;
          },
          7114: (o, l, u) => {
            var c = u(8668),
              d = u(2908),
              h = u(4757);
            o.exports = function (p, v, y, S, x, m) {
              var g = 1 & y,
                A = p.length,
                k = v.length;
              if (A != k && !(g && k > A)) return !1;
              var b = m.get(p),
                C = m.get(v);
              if (b && C) return b == v && C == p;
              var j = -1,
                E = !0,
                N = 2 & y ? new c() : void 0;
              for (m.set(p, v), m.set(v, p); ++j < A; ) {
                var R = p[j],
                  V = v[j];
                if (S) var B = g ? S(V, R, j, v, p, m) : S(R, V, j, p, v, m);
                if (B !== void 0) {
                  if (B) continue;
                  E = !1;
                  break;
                }
                if (N) {
                  if (
                    !d(v, function (F, G) {
                      if (!h(N, G) && (R === F || x(R, F, y, S, m)))
                        return N.push(G);
                    })
                  ) {
                    E = !1;
                    break;
                  }
                } else if (R !== V && !x(R, V, y, S, m)) {
                  E = !1;
                  break;
                }
              }
              return m.delete(p), m.delete(v), E;
            };
          },
          8351: (o, l, u) => {
            var c = u(2705),
              d = u(1149),
              h = u(7813),
              p = u(7114),
              v = u(8776),
              y = u(1814),
              S = c ? c.prototype : void 0,
              x = S ? S.valueOf : void 0;
            o.exports = function (m, g, A, k, b, C, j) {
              switch (A) {
                case "[object DataView]":
                  if (
                    m.byteLength != g.byteLength ||
                    m.byteOffset != g.byteOffset
                  )
                    return !1;
                  (m = m.buffer), (g = g.buffer);
                case "[object ArrayBuffer]":
                  return !(
                    m.byteLength != g.byteLength || !C(new d(m), new d(g))
                  );
                case "[object Boolean]":
                case "[object Date]":
                case "[object Number]":
                  return h(+m, +g);
                case "[object Error]":
                  return m.name == g.name && m.message == g.message;
                case "[object RegExp]":
                case "[object String]":
                  return m == g + "";
                case "[object Map]":
                  var E = v;
                case "[object Set]":
                  var N = 1 & k;
                  if ((E || (E = y), m.size != g.size && !N)) return !1;
                  var R = j.get(m);
                  if (R) return R == g;
                  (k |= 2), j.set(m, g);
                  var V = p(E(m), E(g), k, b, C, j);
                  return j.delete(m), V;
                case "[object Symbol]":
                  if (x) return x.call(m) == x.call(g);
              }
              return !1;
            };
          },
          6096: (o, l, u) => {
            var c = u(8234),
              d = Object.prototype.hasOwnProperty;
            o.exports = function (h, p, v, y, S, x) {
              var m = 1 & v,
                g = c(h),
                A = g.length;
              if (A != c(p).length && !m) return !1;
              for (var k = A; k--; ) {
                var b = g[k];
                if (!(m ? b in p : d.call(p, b))) return !1;
              }
              var C = x.get(h),
                j = x.get(p);
              if (C && j) return C == p && j == h;
              var E = !0;
              x.set(h, p), x.set(p, h);
              for (var N = m; ++k < A; ) {
                var R = h[(b = g[k])],
                  V = p[b];
                if (y) var B = m ? y(V, R, b, p, h, x) : y(R, V, b, h, p, x);
                if (!(B === void 0 ? R === V || S(R, V, v, y, x) : B)) {
                  E = !1;
                  break;
                }
                N || (N = b == "constructor");
              }
              if (E && !N) {
                var F = h.constructor,
                  G = p.constructor;
                F == G ||
                  !("constructor" in h) ||
                  !("constructor" in p) ||
                  (typeof F == "function" &&
                    F instanceof F &&
                    typeof G == "function" &&
                    G instanceof G) ||
                  (E = !1);
              }
              return x.delete(h), x.delete(p), E;
            };
          },
          1957: (o, l, u) => {
            var c =
              typeof u.g == "object" && u.g && u.g.Object === Object && u.g;
            o.exports = c;
          },
          8234: (o, l, u) => {
            var c = u(8866),
              d = u(9551),
              h = u(3674);
            o.exports = function (p) {
              return c(p, h, d);
            };
          },
          5050: (o, l, u) => {
            var c = u(7019);
            o.exports = function (d, h) {
              var p = d.__data__;
              return c(h) ? p[typeof h == "string" ? "string" : "hash"] : p.map;
            };
          },
          852: (o, l, u) => {
            var c = u(8458),
              d = u(7801);
            o.exports = function (h, p) {
              var v = d(h, p);
              return c(v) ? v : void 0;
            };
          },
          9607: (o, l, u) => {
            var c = u(2705),
              d = Object.prototype,
              h = d.hasOwnProperty,
              p = d.toString,
              v = c ? c.toStringTag : void 0;
            o.exports = function (y) {
              var S = h.call(y, v),
                x = y[v];
              try {
                y[v] = void 0;
                var m = !0;
              } catch {}
              var g = p.call(y);
              return m && (S ? (y[v] = x) : delete y[v]), g;
            };
          },
          9551: (o, l, u) => {
            var c = u(4963),
              d = u(479),
              h = Object.prototype.propertyIsEnumerable,
              p = Object.getOwnPropertySymbols,
              v = p
                ? function (y) {
                    return y == null
                      ? []
                      : ((y = Object(y)),
                        c(p(y), function (S) {
                          return h.call(y, S);
                        }));
                  }
                : d;
            o.exports = v;
          },
          4160: (o, l, u) => {
            var c = u(8552),
              d = u(7071),
              h = u(3818),
              p = u(8525),
              v = u(577),
              y = u(4239),
              S = u(346),
              x = "[object Map]",
              m = "[object Promise]",
              g = "[object Set]",
              A = "[object WeakMap]",
              k = "[object DataView]",
              b = S(c),
              C = S(d),
              j = S(h),
              E = S(p),
              N = S(v),
              R = y;
            ((c && R(new c(new ArrayBuffer(1))) != k) ||
              (d && R(new d()) != x) ||
              (h && R(h.resolve()) != m) ||
              (p && R(new p()) != g) ||
              (v && R(new v()) != A)) &&
              (R = function (V) {
                var B = y(V),
                  F = B == "[object Object]" ? V.constructor : void 0,
                  G = F ? S(F) : "";
                if (G)
                  switch (G) {
                    case b:
                      return k;
                    case C:
                      return x;
                    case j:
                      return m;
                    case E:
                      return g;
                    case N:
                      return A;
                  }
                return B;
              }),
              (o.exports = R);
          },
          7801: (o) => {
            o.exports = function (l, u) {
              return l?.[u];
            };
          },
          1789: (o, l, u) => {
            var c = u(4536);
            o.exports = function () {
              (this.__data__ = c ? c(null) : {}), (this.size = 0);
            };
          },
          401: (o) => {
            o.exports = function (l) {
              var u = this.has(l) && delete this.__data__[l];
              return (this.size -= u ? 1 : 0), u;
            };
          },
          7667: (o, l, u) => {
            var c = u(4536),
              d = Object.prototype.hasOwnProperty;
            o.exports = function (h) {
              var p = this.__data__;
              if (c) {
                var v = p[h];
                return v === "__lodash_hash_undefined__" ? void 0 : v;
              }
              return d.call(p, h) ? p[h] : void 0;
            };
          },
          1327: (o, l, u) => {
            var c = u(4536),
              d = Object.prototype.hasOwnProperty;
            o.exports = function (h) {
              var p = this.__data__;
              return c ? p[h] !== void 0 : d.call(p, h);
            };
          },
          1866: (o, l, u) => {
            var c = u(4536);
            o.exports = function (d, h) {
              var p = this.__data__;
              return (
                (this.size += this.has(d) ? 0 : 1),
                (p[d] = c && h === void 0 ? "__lodash_hash_undefined__" : h),
                this
              );
            };
          },
          5776: (o) => {
            var l = /^(?:0|[1-9]\d*)$/;
            o.exports = function (u, c) {
              var d = typeof u;
              return (
                !!(c = c ?? 9007199254740991) &&
                (d == "number" || (d != "symbol" && l.test(u))) &&
                u > -1 &&
                u % 1 == 0 &&
                u < c
              );
            };
          },
          7019: (o) => {
            o.exports = function (l) {
              var u = typeof l;
              return u == "string" ||
                u == "number" ||
                u == "symbol" ||
                u == "boolean"
                ? l !== "__proto__"
                : l === null;
            };
          },
          5346: (o, l, u) => {
            var c,
              d = u(4429),
              h = (c = /[^.]+$/.exec((d && d.keys && d.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + c
                : "";
            o.exports = function (p) {
              return !!h && h in p;
            };
          },
          5726: (o) => {
            var l = Object.prototype;
            o.exports = function (u) {
              var c = u && u.constructor;
              return u === ((typeof c == "function" && c.prototype) || l);
            };
          },
          7040: (o) => {
            o.exports = function () {
              (this.__data__ = []), (this.size = 0);
            };
          },
          4125: (o, l, u) => {
            var c = u(8470),
              d = Array.prototype.splice;
            o.exports = function (h) {
              var p = this.__data__,
                v = c(p, h);
              return !(
                v < 0 ||
                (v == p.length - 1 ? p.pop() : d.call(p, v, 1), --this.size, 0)
              );
            };
          },
          2117: (o, l, u) => {
            var c = u(8470);
            o.exports = function (d) {
              var h = this.__data__,
                p = c(h, d);
              return p < 0 ? void 0 : h[p][1];
            };
          },
          7518: (o, l, u) => {
            var c = u(8470);
            o.exports = function (d) {
              return c(this.__data__, d) > -1;
            };
          },
          4705: (o, l, u) => {
            var c = u(8470);
            o.exports = function (d, h) {
              var p = this.__data__,
                v = c(p, d);
              return (
                v < 0 ? (++this.size, p.push([d, h])) : (p[v][1] = h), this
              );
            };
          },
          4785: (o, l, u) => {
            var c = u(1989),
              d = u(8407),
              h = u(7071);
            o.exports = function () {
              (this.size = 0),
                (this.__data__ = {
                  hash: new c(),
                  map: new (h || d)(),
                  string: new c(),
                });
            };
          },
          1285: (o, l, u) => {
            var c = u(5050);
            o.exports = function (d) {
              var h = c(this, d).delete(d);
              return (this.size -= h ? 1 : 0), h;
            };
          },
          6e3: (o, l, u) => {
            var c = u(5050);
            o.exports = function (d) {
              return c(this, d).get(d);
            };
          },
          9916: (o, l, u) => {
            var c = u(5050);
            o.exports = function (d) {
              return c(this, d).has(d);
            };
          },
          5265: (o, l, u) => {
            var c = u(5050);
            o.exports = function (d, h) {
              var p = c(this, d),
                v = p.size;
              return p.set(d, h), (this.size += p.size == v ? 0 : 1), this;
            };
          },
          8776: (o) => {
            o.exports = function (l) {
              var u = -1,
                c = Array(l.size);
              return (
                l.forEach(function (d, h) {
                  c[++u] = [h, d];
                }),
                c
              );
            };
          },
          4536: (o, l, u) => {
            var c = u(852)(Object, "create");
            o.exports = c;
          },
          6916: (o, l, u) => {
            var c = u(5569)(Object.keys, Object);
            o.exports = c;
          },
          1167: (o, l, u) => {
            o = u.nmd(o);
            var c = u(1957),
              d = l && !l.nodeType && l,
              h = d && o && !o.nodeType && o,
              p = h && h.exports === d && c.process,
              v = (function () {
                try {
                  return (
                    (h && h.require && h.require("util").types) ||
                    (p && p.binding && p.binding("util"))
                  );
                } catch {}
              })();
            o.exports = v;
          },
          2333: (o) => {
            var l = Object.prototype.toString;
            o.exports = function (u) {
              return l.call(u);
            };
          },
          5569: (o) => {
            o.exports = function (l, u) {
              return function (c) {
                return l(u(c));
              };
            };
          },
          5639: (o, l, u) => {
            var c = u(1957),
              d =
                typeof self == "object" &&
                self &&
                self.Object === Object &&
                self,
              h = c || d || Function("return this")();
            o.exports = h;
          },
          619: (o) => {
            o.exports = function (l) {
              return this.__data__.set(l, "__lodash_hash_undefined__"), this;
            };
          },
          2385: (o) => {
            o.exports = function (l) {
              return this.__data__.has(l);
            };
          },
          1814: (o) => {
            o.exports = function (l) {
              var u = -1,
                c = Array(l.size);
              return (
                l.forEach(function (d) {
                  c[++u] = d;
                }),
                c
              );
            };
          },
          7465: (o, l, u) => {
            var c = u(8407);
            o.exports = function () {
              (this.__data__ = new c()), (this.size = 0);
            };
          },
          3779: (o) => {
            o.exports = function (l) {
              var u = this.__data__,
                c = u.delete(l);
              return (this.size = u.size), c;
            };
          },
          7599: (o) => {
            o.exports = function (l) {
              return this.__data__.get(l);
            };
          },
          4758: (o) => {
            o.exports = function (l) {
              return this.__data__.has(l);
            };
          },
          4309: (o, l, u) => {
            var c = u(8407),
              d = u(7071),
              h = u(3369);
            o.exports = function (p, v) {
              var y = this.__data__;
              if (y instanceof c) {
                var S = y.__data__;
                if (!d || S.length < 199)
                  return S.push([p, v]), (this.size = ++y.size), this;
                y = this.__data__ = new h(S);
              }
              return y.set(p, v), (this.size = y.size), this;
            };
          },
          346: (o) => {
            var l = Function.prototype.toString;
            o.exports = function (u) {
              if (u != null) {
                try {
                  return l.call(u);
                } catch {}
                try {
                  return u + "";
                } catch {}
              }
              return "";
            };
          },
          7813: (o) => {
            o.exports = function (l, u) {
              return l === u || (l != l && u != u);
            };
          },
          5694: (o, l, u) => {
            var c = u(9454),
              d = u(7005),
              h = Object.prototype,
              p = h.hasOwnProperty,
              v = h.propertyIsEnumerable,
              y = c(
                (function () {
                  return arguments;
                })()
              )
                ? c
                : function (S) {
                    return d(S) && p.call(S, "callee") && !v.call(S, "callee");
                  };
            o.exports = y;
          },
          1469: (o) => {
            var l = Array.isArray;
            o.exports = l;
          },
          8612: (o, l, u) => {
            var c = u(3560),
              d = u(1780);
            o.exports = function (h) {
              return h != null && d(h.length) && !c(h);
            };
          },
          4144: (o, l, u) => {
            o = u.nmd(o);
            var c = u(5639),
              d = u(5062),
              h = l && !l.nodeType && l,
              p = h && o && !o.nodeType && o,
              v = p && p.exports === h ? c.Buffer : void 0,
              y = (v ? v.isBuffer : void 0) || d;
            o.exports = y;
          },
          8446: (o, l, u) => {
            var c = u(939);
            o.exports = function (d, h) {
              return c(d, h);
            };
          },
          3560: (o, l, u) => {
            var c = u(4239),
              d = u(3218);
            o.exports = function (h) {
              if (!d(h)) return !1;
              var p = c(h);
              return (
                p == "[object Function]" ||
                p == "[object GeneratorFunction]" ||
                p == "[object AsyncFunction]" ||
                p == "[object Proxy]"
              );
            };
          },
          1780: (o) => {
            o.exports = function (l) {
              return (
                typeof l == "number" &&
                l > -1 &&
                l % 1 == 0 &&
                l <= 9007199254740991
              );
            };
          },
          3218: (o) => {
            o.exports = function (l) {
              var u = typeof l;
              return l != null && (u == "object" || u == "function");
            };
          },
          7005: (o) => {
            o.exports = function (l) {
              return l != null && typeof l == "object";
            };
          },
          6719: (o, l, u) => {
            var c = u(8749),
              d = u(1717),
              h = u(1167),
              p = h && h.isTypedArray,
              v = p ? d(p) : c;
            o.exports = v;
          },
          3674: (o, l, u) => {
            var c = u(4636),
              d = u(280),
              h = u(8612);
            o.exports = function (p) {
              return h(p) ? c(p) : d(p);
            };
          },
          479: (o) => {
            o.exports = function () {
              return [];
            };
          },
          5062: (o) => {
            o.exports = function () {
              return !1;
            };
          },
          75: function (o) {
            (function () {
              var l, u, c, d, h, p;
              typeof performance < "u" &&
              performance !== null &&
              performance.now
                ? (o.exports = function () {
                    return performance.now();
                  })
                : typeof process < "u" && process !== null && process.hrtime
                ? ((o.exports = function () {
                    return (l() - h) / 1e6;
                  }),
                  (u = process.hrtime),
                  (d = (l = function () {
                    var v;
                    return 1e9 * (v = u())[0] + v[1];
                  })()),
                  (p = 1e9 * process.uptime()),
                  (h = d - p))
                : Date.now
                ? ((o.exports = function () {
                    return Date.now() - c;
                  }),
                  (c = Date.now()))
                : ((o.exports = function () {
                    return new Date().getTime() - c;
                  }),
                  (c = new Date().getTime()));
            }).call(this);
          },
          4087: (o, l, u) => {
            for (
              var c = u(75),
                d = typeof window > "u" ? u.g : window,
                h = ["moz", "webkit"],
                p = "AnimationFrame",
                v = d["request" + p],
                y = d["cancel" + p] || d["cancelRequest" + p],
                S = 0;
              !v && S < h.length;
              S++
            )
              (v = d[h[S] + "Request" + p]),
                (y = d[h[S] + "Cancel" + p] || d[h[S] + "CancelRequest" + p]);
            if (!v || !y) {
              var x = 0,
                m = 0,
                g = [];
              (v = function (A) {
                if (g.length === 0) {
                  var k = c(),
                    b = Math.max(0, 16.666666666666668 - (k - x));
                  (x = b + k),
                    setTimeout(function () {
                      var C = g.slice(0);
                      g.length = 0;
                      for (var j = 0; j < C.length; j++)
                        if (!C[j].cancelled)
                          try {
                            C[j].callback(x);
                          } catch (E) {
                            setTimeout(function () {
                              throw E;
                            }, 0);
                          }
                    }, Math.round(b));
                }
                return g.push({ handle: ++m, callback: A, cancelled: !1 }), m;
              }),
                (y = function (A) {
                  for (var k = 0; k < g.length; k++)
                    g[k].handle === A && (g[k].cancelled = !0);
                });
            }
            (o.exports = function (A) {
              return v.call(d, A);
            }),
              (o.exports.cancel = function () {
                y.apply(d, arguments);
              }),
              (o.exports.polyfill = function (A) {
                A || (A = d),
                  (A.requestAnimationFrame = v),
                  (A.cancelAnimationFrame = y);
              });
          },
          8156: (o) => {
            o.exports = n;
          },
        },
        i = {};
      function s(o) {
        var l = i[o];
        if (l !== void 0) return l.exports;
        var u = (i[o] = { id: o, loaded: !1, exports: {} });
        return (
          r[o].call(u.exports, u, u.exports, s), (u.loaded = !0), u.exports
        );
      }
      (s.n = (o) => {
        var l = o && o.__esModule ? () => o.default : () => o;
        return s.d(l, { a: l }), l;
      }),
        (s.d = (o, l) => {
          for (var u in l)
            s.o(l, u) &&
              !s.o(o, u) &&
              Object.defineProperty(o, u, { enumerable: !0, get: l[u] });
        }),
        (s.g = (function () {
          if (typeof globalThis == "object") return globalThis;
          try {
            return this || new Function("return this")();
          } catch {
            if (typeof window == "object") return window;
          }
        })()),
        (s.o = (o, l) => Object.prototype.hasOwnProperty.call(o, l)),
        (s.nmd = (o) => ((o.paths = []), o.children || (o.children = []), o));
      var a = {};
      return (
        (() => {
          s.d(a, { default: () => g });
          var o = s(8156),
            l = s.n(o),
            u = s(7403),
            c = s(8446),
            d = s.n(c);
          function h(A) {
            return (
              (h =
                typeof Symbol == "function" &&
                typeof Symbol.iterator == "symbol"
                  ? function (k) {
                      return typeof k;
                    }
                  : function (k) {
                      return k &&
                        typeof Symbol == "function" &&
                        k.constructor === Symbol &&
                        k !== Symbol.prototype
                        ? "symbol"
                        : typeof k;
                    }),
              h(A)
            );
          }
          function p(A, k) {
            for (var b = 0; b < k.length; b++) {
              var C = k[b];
              (C.enumerable = C.enumerable || !1),
                (C.configurable = !0),
                "value" in C && (C.writable = !0),
                Object.defineProperty(A, x(C.key), C);
            }
          }
          function v(A, k) {
            return (
              (v = Object.setPrototypeOf
                ? Object.setPrototypeOf.bind()
                : function (b, C) {
                    return (b.__proto__ = C), b;
                  }),
              v(A, k)
            );
          }
          function y(A) {
            if (A === void 0)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return A;
          }
          function S(A) {
            return (
              (S = Object.setPrototypeOf
                ? Object.getPrototypeOf.bind()
                : function (k) {
                    return k.__proto__ || Object.getPrototypeOf(k);
                  }),
              S(A)
            );
          }
          function x(A) {
            var k = (function (b, C) {
              if (h(b) !== "object" || b === null) return b;
              var j = b[Symbol.toPrimitive];
              if (j !== void 0) {
                var E = j.call(b, "string");
                if (h(E) !== "object") return E;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value."
                );
              }
              return String(b);
            })(A);
            return h(k) === "symbol" ? k : String(k);
          }
          var m = (function (A) {
            (function (R, V) {
              if (typeof V != "function" && V !== null)
                throw new TypeError(
                  "Super expression must either be null or a function"
                );
              (R.prototype = Object.create(V && V.prototype, {
                constructor: { value: R, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(R, "prototype", { writable: !1 }),
                V && v(R, V);
            })(N, A);
            var k,
              b,
              C,
              j,
              E =
                ((C = N),
                (j = (function () {
                  if (
                    typeof Reflect > "u" ||
                    !Reflect.construct ||
                    Reflect.construct.sham
                  )
                    return !1;
                  if (typeof Proxy == "function") return !0;
                  try {
                    return (
                      Boolean.prototype.valueOf.call(
                        Reflect.construct(Boolean, [], function () {})
                      ),
                      !0
                    );
                  } catch {
                    return !1;
                  }
                })()),
                function () {
                  var R,
                    V = S(C);
                  if (j) {
                    var B = S(this).constructor;
                    R = Reflect.construct(V, arguments, B);
                  } else R = V.apply(this, arguments);
                  return (function (F, G) {
                    if (G && (h(G) === "object" || typeof G == "function"))
                      return G;
                    if (G !== void 0)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return y(F);
                  })(this, R);
                });
            function N() {
              var R, V, B, F;
              (function (T, I) {
                if (!(T instanceof I))
                  throw new TypeError("Cannot call a class as a function");
              })(this, N);
              for (
                var G = arguments.length, z = new Array(G), _ = 0;
                _ < G;
                _++
              )
                z[_] = arguments[_];
              return (
                (V = y((R = E.call.apply(E, [this].concat(z))))),
                (F = { instance: null }),
                (B = x((B = "state"))) in V
                  ? Object.defineProperty(V, B, {
                      value: F,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    })
                  : (V[B] = F),
                R
              );
            }
            return (
              (k = N),
              (b = [
                {
                  key: "componentDidMount",
                  value: function () {
                    var R = this,
                      V = new u.default(this.typewriter, this.props.options);
                    this.setState({ instance: V }, function () {
                      var B = R.props.onInit;
                      B && B(V);
                    });
                  },
                },
                {
                  key: "componentDidUpdate",
                  value: function (R) {
                    d()(this.props.options, R.options) ||
                      this.setState({
                        instance: new u.default(
                          this.typewriter,
                          this.props.options
                        ),
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.state.instance && this.state.instance.stop();
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var R = this,
                      V = this.props.component;
                    return l().createElement(V, {
                      ref: function (B) {
                        return (R.typewriter = B);
                      },
                      className: "Typewriter",
                      "data-testid": "typewriter-wrapper",
                    });
                  },
                },
              ]) && p(k.prototype, b),
              Object.defineProperty(k, "prototype", { writable: !1 }),
              N
            );
          })(o.Component);
          m.defaultProps = { component: "div" };
          const g = m;
        })(),
        a.default
      );
    })()
  );
})(sg);
var _w = sg.exports;
const Qw = zu(_w);
function Dh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dh(Object(n), !0).forEach(function (r) {
          Ee(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Dh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Fa(e) {
  "@babel/helpers - typeof";
  return (
    (Fa =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Fa(e)
  );
}
function Kw(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Xw(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function Jw(e, t, n) {
  return (
    t && Xw(e.prototype, t),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Ee(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function rf(e, t) {
  return qw(e) || e6(e, t) || ag(e, t) || n6();
}
function as(e) {
  return Zw(e) || $w(e) || ag(e) || t6();
}
function Zw(e) {
  if (Array.isArray(e)) return wu(e);
}
function qw(e) {
  if (Array.isArray(e)) return e;
}
function $w(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function e6(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      i = !0,
      s = !1,
      a,
      o;
    try {
      for (
        n = n.call(e);
        !(i = (a = n.next()).done) && (r.push(a.value), !(t && r.length === t));
        i = !0
      );
    } catch (l) {
      (s = !0), (o = l);
    } finally {
      try {
        !i && n.return != null && n.return();
      } finally {
        if (s) throw o;
      }
    }
    return r;
  }
}
function ag(e, t) {
  if (e) {
    if (typeof e == "string") return wu(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return wu(e, t);
  }
}
function wu(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function t6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function n6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Vh = function () {},
  sf = {},
  og = {},
  lg = null,
  ug = { mark: Vh, measure: Vh };
try {
  typeof window < "u" && (sf = window),
    typeof document < "u" && (og = document),
    typeof MutationObserver < "u" && (lg = MutationObserver),
    typeof performance < "u" && (ug = performance);
} catch {}
var r6 = sf.navigator || {},
  Bh = r6.userAgent,
  Fh = Bh === void 0 ? "" : Bh,
  kn = sf,
  ce = og,
  zh = lg,
  Os = ug;
kn.document;
var Zt =
    !!ce.documentElement &&
    !!ce.head &&
    typeof ce.addEventListener == "function" &&
    typeof ce.createElement == "function",
  cg = ~Fh.indexOf("MSIE") || ~Fh.indexOf("Trident/"),
  Ms,
  Ds,
  Vs,
  Bs,
  Fs,
  Qt = "___FONT_AWESOME___",
  Au = 16,
  fg = "fa",
  dg = "svg-inline--fa",
  Zn = "data-fa-i2svg",
  Su = "data-fa-pseudo-element",
  i6 = "data-fa-pseudo-element-pending",
  af = "data-prefix",
  of = "data-icon",
  Uh = "fontawesome-i2svg",
  s6 = "async",
  a6 = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  hg = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  le = "classic",
  ye = "sharp",
  lf = [le, ye];
function os(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[le];
    },
  });
}
var Gi = os(
    ((Ms = {}),
    Ee(Ms, le, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      fakd: "kit",
      "fa-kit": "kit",
      "fa-kit-duotone": "kit",
    }),
    Ee(Ms, ye, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
      fast: "thin",
      "fa-thin": "thin",
    }),
    Ms)
  ),
  _i = os(
    ((Ds = {}),
    Ee(Ds, le, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    Ee(Ds, ye, { solid: "fass", regular: "fasr", light: "fasl", thin: "fast" }),
    Ds)
  ),
  Qi = os(
    ((Vs = {}),
    Ee(Vs, le, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    Ee(Vs, ye, {
      fass: "fa-solid",
      fasr: "fa-regular",
      fasl: "fa-light",
      fast: "fa-thin",
    }),
    Vs)
  ),
  o6 = os(
    ((Bs = {}),
    Ee(Bs, le, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    Ee(Bs, ye, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
      "fa-thin": "fast",
    }),
    Bs)
  ),
  l6 = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,
  pg = "fa-layers-text",
  u6 =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  c6 = os(
    ((Fs = {}),
    Ee(Fs, le, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    Ee(Fs, ye, { 900: "fass", 400: "fasr", 300: "fasl", 100: "fast" }),
    Fs)
  ),
  mg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  f6 = mg.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  d6 = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Un = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Ki = new Set();
Object.keys(_i[le]).map(Ki.add.bind(Ki));
Object.keys(_i[ye]).map(Ki.add.bind(Ki));
var h6 = []
    .concat(lf, as(Ki), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Un.GROUP,
      Un.SWAP_OPACITY,
      Un.PRIMARY,
      Un.SECONDARY,
    ])
    .concat(
      mg.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      f6.map(function (e) {
        return "w-".concat(e);
      })
    ),
  ki = kn.FontAwesomeConfig || {};
function p6(e) {
  var t = ce.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function m6(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ce && typeof ce.querySelector == "function") {
  var g6 = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  g6.forEach(function (e) {
    var t = rf(e, 2),
      n = t[0],
      r = t[1],
      i = m6(p6(n));
    i != null && (ki[r] = i);
  });
}
var gg = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fg,
  replacementClass: dg,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
ki.familyPrefix && (ki.cssPrefix = ki.familyPrefix);
var Ur = H(H({}, gg), ki);
Ur.autoReplaceSvg || (Ur.observeMutations = !1);
var Y = {};
Object.keys(gg).forEach(function (e) {
  Object.defineProperty(Y, e, {
    enumerable: !0,
    set: function (n) {
      (Ur[e] = n),
        Ci.forEach(function (r) {
          return r(Y);
        });
    },
    get: function () {
      return Ur[e];
    },
  });
});
Object.defineProperty(Y, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (Ur.cssPrefix = t),
      Ci.forEach(function (n) {
        return n(Y);
      });
  },
  get: function () {
    return Ur.cssPrefix;
  },
});
kn.FontAwesomeConfig = Y;
var Ci = [];
function v6(e) {
  return (
    Ci.push(e),
    function () {
      Ci.splice(Ci.indexOf(e), 1);
    }
  );
}
var $t = Au,
  Tt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function y6(e) {
  if (!(!e || !Zt)) {
    var t = ce.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = ce.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
      var s = n[i],
        a = (s.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(a) > -1 && (r = s);
    }
    return ce.head.insertBefore(t, r), e;
  }
}
var x6 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Xi() {
  for (var e = 12, t = ""; e-- > 0; ) t += x6[(Math.random() * 62) | 0];
  return t;
}
function Gr(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function uf(e) {
  return e.classList
    ? Gr(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function vg(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function w6(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(vg(e[n]), '" ');
    }, "")
    .trim();
}
function po(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function cf(e) {
  return (
    e.size !== Tt.size ||
    e.x !== Tt.x ||
    e.y !== Tt.y ||
    e.rotate !== Tt.rotate ||
    e.flipX ||
    e.flipY
  );
}
function A6(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    i = { transform: "translate(".concat(n / 2, " 256)") },
    s = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    a = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    o = "rotate(".concat(t.rotate, " 0 0)"),
    l = { transform: "".concat(s, " ").concat(a, " ").concat(o) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: i, inner: l, path: u };
}
function S6(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? Au : n,
    i = e.height,
    s = i === void 0 ? Au : i,
    a = e.startCentered,
    o = a === void 0 ? !1 : a,
    l = "";
  return (
    o && cg
      ? (l += "translate("
          .concat(t.x / $t - r / 2, "em, ")
          .concat(t.y / $t - s / 2, "em) "))
      : o
      ? (l += "translate(calc(-50% + "
          .concat(t.x / $t, "em), calc(-50% + ")
          .concat(t.y / $t, "em)) "))
      : (l += "translate(".concat(t.x / $t, "em, ").concat(t.y / $t, "em) ")),
    (l += "scale("
      .concat((t.size / $t) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / $t) * (t.flipY ? -1 : 1), ") ")),
    (l += "rotate(".concat(t.rotate, "deg) ")),
    l
  );
}
var k6 = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function yg() {
  var e = fg,
    t = dg,
    n = Y.cssPrefix,
    r = Y.replacementClass,
    i = k6;
  if (n !== e || r !== t) {
    var s = new RegExp("\\.".concat(e, "\\-"), "g"),
      a = new RegExp("\\--".concat(e, "\\-"), "g"),
      o = new RegExp("\\.".concat(t), "g");
    i = i
      .replace(s, ".".concat(n, "-"))
      .replace(a, "--".concat(n, "-"))
      .replace(o, ".".concat(r));
  }
  return i;
}
var Hh = !1;
function ul() {
  Y.autoAddCss && !Hh && (y6(yg()), (Hh = !0));
}
var C6 = {
    mixout: function () {
      return { dom: { css: yg, insertCss: ul } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          ul();
        },
        beforeI2svg: function () {
          ul();
        },
      };
    },
  },
  Kt = kn || {};
Kt[Qt] || (Kt[Qt] = {});
Kt[Qt].styles || (Kt[Qt].styles = {});
Kt[Qt].hooks || (Kt[Qt].hooks = {});
Kt[Qt].shims || (Kt[Qt].shims = []);
var xt = Kt[Qt],
  xg = [],
  b6 = function e() {
    ce.removeEventListener("DOMContentLoaded", e),
      (za = 1),
      xg.map(function (t) {
        return t();
      });
  },
  za = !1;
Zt &&
  ((za = (ce.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    ce.readyState
  )),
  za || ce.addEventListener("DOMContentLoaded", b6));
function j6(e) {
  Zt && (za ? setTimeout(e, 0) : xg.push(e));
}
function ls(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    i = e.children,
    s = i === void 0 ? [] : i;
  return typeof e == "string"
    ? vg(e)
    : "<"
        .concat(t, " ")
        .concat(w6(r), ">")
        .concat(s.map(ls).join(""), "</")
        .concat(t, ">");
}
function Wh(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var cl = function (t, n, r, i) {
  var s = Object.keys(t),
    a = s.length,
    o = n,
    l,
    u,
    c;
  for (r === void 0 ? ((l = 1), (c = t[s[0]])) : ((l = 0), (c = r)); l < a; l++)
    (u = s[l]), (c = o(c, t[u], u, t));
  return c;
};
function E6(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      var s = e.charCodeAt(n++);
      (s & 64512) == 56320
        ? t.push(((i & 1023) << 10) + (s & 1023) + 65536)
        : (t.push(i), n--);
    } else t.push(i);
  }
  return t;
}
function ku(e) {
  var t = E6(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function T6(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    i;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((i = e.charCodeAt(t + 1)), i >= 56320 && i <= 57343)
    ? (r - 55296) * 1024 + i - 56320 + 65536
    : r;
}
function Yh(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      i = !!r.icon;
    return i ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function Cu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    i = r === void 0 ? !1 : r,
    s = Yh(t);
  typeof xt.hooks.addPack == "function" && !i
    ? xt.hooks.addPack(e, Yh(t))
    : (xt.styles[e] = H(H({}, xt.styles[e] || {}), s)),
    e === "fas" && Cu("fa", t);
}
var zs,
  Us,
  Hs,
  Sr = xt.styles,
  P6 = xt.shims,
  N6 =
    ((zs = {}),
    Ee(zs, le, Object.values(Qi[le])),
    Ee(zs, ye, Object.values(Qi[ye])),
    zs),
  ff = null,
  wg = {},
  Ag = {},
  Sg = {},
  kg = {},
  Cg = {},
  L6 =
    ((Us = {}),
    Ee(Us, le, Object.keys(Gi[le])),
    Ee(Us, ye, Object.keys(Gi[ye])),
    Us);
function I6(e) {
  return ~h6.indexOf(e);
}
function R6(e, t) {
  var n = t.split("-"),
    r = n[0],
    i = n.slice(1).join("-");
  return r === e && i !== "" && !I6(i) ? i : null;
}
var bg = function () {
  var t = function (s) {
    return cl(
      Sr,
      function (a, o, l) {
        return (a[l] = cl(o, s, {})), a;
      },
      {}
    );
  };
  (wg = t(function (i, s, a) {
    if ((s[3] && (i[s[3]] = a), s[2])) {
      var o = s[2].filter(function (l) {
        return typeof l == "number";
      });
      o.forEach(function (l) {
        i[l.toString(16)] = a;
      });
    }
    return i;
  })),
    (Ag = t(function (i, s, a) {
      if (((i[a] = a), s[2])) {
        var o = s[2].filter(function (l) {
          return typeof l == "string";
        });
        o.forEach(function (l) {
          i[l] = a;
        });
      }
      return i;
    })),
    (Cg = t(function (i, s, a) {
      var o = s[2];
      return (
        (i[a] = a),
        o.forEach(function (l) {
          i[l] = a;
        }),
        i
      );
    }));
  var n = "far" in Sr || Y.autoFetchSvg,
    r = cl(
      P6,
      function (i, s) {
        var a = s[0],
          o = s[1],
          l = s[2];
        return (
          o === "far" && !n && (o = "fas"),
          typeof a == "string" && (i.names[a] = { prefix: o, iconName: l }),
          typeof a == "number" &&
            (i.unicodes[a.toString(16)] = { prefix: o, iconName: l }),
          i
        );
      },
      { names: {}, unicodes: {} }
    );
  (Sg = r.names),
    (kg = r.unicodes),
    (ff = mo(Y.styleDefault, { family: Y.familyDefault }));
};
v6(function (e) {
  ff = mo(e.styleDefault, { family: Y.familyDefault });
});
bg();
function df(e, t) {
  return (wg[e] || {})[t];
}
function O6(e, t) {
  return (Ag[e] || {})[t];
}
function Hn(e, t) {
  return (Cg[e] || {})[t];
}
function jg(e) {
  return Sg[e] || { prefix: null, iconName: null };
}
function M6(e) {
  var t = kg[e],
    n = df("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function Cn() {
  return ff;
}
var hf = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function mo(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? le : n,
    i = Gi[r][e],
    s = _i[r][e] || _i[r][i],
    a = e in xt.styles ? e : null;
  return s || a || null;
}
var Gh =
  ((Hs = {}),
  Ee(Hs, le, Object.keys(Qi[le])),
  Ee(Hs, ye, Object.keys(Qi[ye])),
  Hs);
function go(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    i = r === void 0 ? !1 : r,
    s =
      ((t = {}),
      Ee(t, le, "".concat(Y.cssPrefix, "-").concat(le)),
      Ee(t, ye, "".concat(Y.cssPrefix, "-").concat(ye)),
      t),
    a = null,
    o = le;
  (e.includes(s[le]) ||
    e.some(function (u) {
      return Gh[le].includes(u);
    })) &&
    (o = le),
    (e.includes(s[ye]) ||
      e.some(function (u) {
        return Gh[ye].includes(u);
      })) &&
      (o = ye);
  var l = e.reduce(function (u, c) {
    var d = R6(Y.cssPrefix, c);
    if (
      (Sr[c]
        ? ((c = N6[o].includes(c) ? o6[o][c] : c), (a = c), (u.prefix = c))
        : L6[o].indexOf(c) > -1
        ? ((a = c), (u.prefix = mo(c, { family: o })))
        : d
        ? (u.iconName = d)
        : c !== Y.replacementClass &&
          c !== s[le] &&
          c !== s[ye] &&
          u.rest.push(c),
      !i && u.prefix && u.iconName)
    ) {
      var h = a === "fa" ? jg(u.iconName) : {},
        p = Hn(u.prefix, u.iconName);
      h.prefix && (a = null),
        (u.iconName = h.iconName || p || u.iconName),
        (u.prefix = h.prefix || u.prefix),
        u.prefix === "far" &&
          !Sr.far &&
          Sr.fas &&
          !Y.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, hf());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (l.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (l.prefix = "fad"),
    !l.prefix &&
      o === ye &&
      (Sr.fass || Y.autoFetchSvg) &&
      ((l.prefix = "fass"),
      (l.iconName = Hn(l.prefix, l.iconName) || l.iconName)),
    (l.prefix === "fa" || a === "fa") && (l.prefix = Cn() || "fas"),
    l
  );
}
var D6 = (function () {
    function e() {
      Kw(this, e), (this.definitions = {});
    }
    return (
      Jw(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, i = new Array(r), s = 0;
              s < r;
              s++
            )
              i[s] = arguments[s];
            var a = i.reduce(this._pullDefinitions, {});
            Object.keys(a).forEach(function (o) {
              (n.definitions[o] = H(H({}, n.definitions[o] || {}), a[o])),
                Cu(o, a[o]);
              var l = Qi[le][o];
              l && Cu(l, a[o]), bg();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var i = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(i).map(function (s) {
                var a = i[s],
                  o = a.prefix,
                  l = a.iconName,
                  u = a.icon,
                  c = u[2];
                n[o] || (n[o] = {}),
                  c.length > 0 &&
                    c.forEach(function (d) {
                      typeof d == "string" && (n[o][d] = u);
                    }),
                  (n[o][l] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  _h = [],
  kr = {},
  Lr = {},
  V6 = Object.keys(Lr);
function B6(e, t) {
  var n = t.mixoutsTo;
  return (
    (_h = e),
    (kr = {}),
    Object.keys(Lr).forEach(function (r) {
      V6.indexOf(r) === -1 && delete Lr[r];
    }),
    _h.forEach(function (r) {
      var i = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(i).forEach(function (a) {
          typeof i[a] == "function" && (n[a] = i[a]),
            Fa(i[a]) === "object" &&
              Object.keys(i[a]).forEach(function (o) {
                n[a] || (n[a] = {}), (n[a][o] = i[a][o]);
              });
        }),
        r.hooks)
      ) {
        var s = r.hooks();
        Object.keys(s).forEach(function (a) {
          kr[a] || (kr[a] = []), kr[a].push(s[a]);
        });
      }
      r.provides && r.provides(Lr);
    }),
    n
  );
}
function bu(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2;
    i < n;
    i++
  )
    r[i - 2] = arguments[i];
  var s = kr[e] || [];
  return (
    s.forEach(function (a) {
      t = a.apply(null, [t].concat(r));
    }),
    t
  );
}
function qn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var i = kr[e] || [];
  i.forEach(function (s) {
    s.apply(null, n);
  });
}
function Xt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return Lr[e] ? Lr[e].apply(null, t) : void 0;
}
function ju(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || Cn();
  if (t)
    return (t = Hn(n, t) || t), Wh(Eg.definitions, n, t) || Wh(xt.styles, n, t);
}
var Eg = new D6(),
  F6 = function () {
    (Y.autoReplaceSvg = !1), (Y.observeMutations = !1), qn("noAuto");
  },
  z6 = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Zt
        ? (qn("beforeI2svg", t), Xt("pseudoElements2svg", t), Xt("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      Y.autoReplaceSvg === !1 && (Y.autoReplaceSvg = !0),
        (Y.observeMutations = !0),
        j6(function () {
          H6({ autoReplaceSvgRoot: n }), qn("watch", t);
        });
    },
  },
  U6 = {
    icon: function (t) {
      if (t === null) return null;
      if (Fa(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Hn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = mo(t[0]);
        return { prefix: r, iconName: Hn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(Y.cssPrefix, "-")) > -1 || t.match(l6))
      ) {
        var i = go(t.split(" "), { skipLookups: !0 });
        return {
          prefix: i.prefix || Cn(),
          iconName: Hn(i.prefix, i.iconName) || i.iconName,
        };
      }
      if (typeof t == "string") {
        var s = Cn();
        return { prefix: s, iconName: Hn(s, t) || t };
      }
    },
  },
  it = {
    noAuto: F6,
    config: Y,
    dom: z6,
    parse: U6,
    library: Eg,
    findIconDefinition: ju,
    toHtml: ls,
  },
  H6 = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? ce : n;
    (Object.keys(xt.styles).length > 0 || Y.autoFetchSvg) &&
      Zt &&
      Y.autoReplaceSvg &&
      it.dom.i2svg({ node: r });
  };
function vo(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return ls(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Zt) {
          var r = ce.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function W6(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    i = e.attributes,
    s = e.styles,
    a = e.transform;
  if (cf(a) && n.found && !r.found) {
    var o = n.width,
      l = n.height,
      u = { x: o / l / 2, y: 0.5 };
    i.style = po(
      H(
        H({}, s),
        {},
        {
          "transform-origin": ""
            .concat(u.x + a.x / 16, "em ")
            .concat(u.y + a.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: i, children: t }];
}
function Y6(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    i = e.attributes,
    s = e.symbol,
    a = s === !0 ? "".concat(t, "-").concat(Y.cssPrefix, "-").concat(n) : s;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: H(H({}, i), {}, { id: a }), children: r },
      ],
    },
  ];
}
function pf(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    i = e.prefix,
    s = e.iconName,
    a = e.transform,
    o = e.symbol,
    l = e.title,
    u = e.maskId,
    c = e.titleId,
    d = e.extra,
    h = e.watchable,
    p = h === void 0 ? !1 : h,
    v = r.found ? r : n,
    y = v.width,
    S = v.height,
    x = i === "fak",
    m = [Y.replacementClass, s ? "".concat(Y.cssPrefix, "-").concat(s) : ""]
      .filter(function (E) {
        return d.classes.indexOf(E) === -1;
      })
      .filter(function (E) {
        return E !== "" || !!E;
      })
      .concat(d.classes)
      .join(" "),
    g = {
      children: [],
      attributes: H(
        H({}, d.attributes),
        {},
        {
          "data-prefix": i,
          "data-icon": s,
          class: m,
          role: d.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(y, " ").concat(S),
        }
      ),
    },
    A =
      x && !~d.classes.indexOf("fa-fw")
        ? { width: "".concat((y / S) * 16 * 0.0625, "em") }
        : {};
  p && (g.attributes[Zn] = ""),
    l &&
      (g.children.push({
        tag: "title",
        attributes: {
          id: g.attributes["aria-labelledby"] || "title-".concat(c || Xi()),
        },
        children: [l],
      }),
      delete g.attributes.title);
  var k = H(
      H({}, g),
      {},
      {
        prefix: i,
        iconName: s,
        main: n,
        mask: r,
        maskId: u,
        transform: a,
        symbol: o,
        styles: H(H({}, A), d.styles),
      }
    ),
    b =
      r.found && n.found
        ? Xt("generateAbstractMask", k) || { children: [], attributes: {} }
        : Xt("generateAbstractIcon", k) || { children: [], attributes: {} },
    C = b.children,
    j = b.attributes;
  return (k.children = C), (k.attributes = j), o ? Y6(k) : W6(k);
}
function Qh(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    i = e.transform,
    s = e.title,
    a = e.extra,
    o = e.watchable,
    l = o === void 0 ? !1 : o,
    u = H(
      H(H({}, a.attributes), s ? { title: s } : {}),
      {},
      { class: a.classes.join(" ") }
    );
  l && (u[Zn] = "");
  var c = H({}, a.styles);
  cf(i) &&
    ((c.transform = S6({
      transform: i,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var d = po(c);
  d.length > 0 && (u.style = d);
  var h = [];
  return (
    h.push({ tag: "span", attributes: u, children: [t] }),
    s &&
      h.push({ tag: "span", attributes: { class: "sr-only" }, children: [s] }),
    h
  );
}
function G6(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    i = H(
      H(H({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    s = po(r.styles);
  s.length > 0 && (i.style = s);
  var a = [];
  return (
    a.push({ tag: "span", attributes: i, children: [t] }),
    n &&
      a.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    a
  );
}
var fl = xt.styles;
function Eu(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    i = rf(r, 1),
    s = i[0],
    a = null;
  return (
    Array.isArray(s)
      ? (a = {
          tag: "g",
          attributes: { class: "".concat(Y.cssPrefix, "-").concat(Un.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(Un.SECONDARY),
                fill: "currentColor",
                d: s[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(Y.cssPrefix, "-").concat(Un.PRIMARY),
                fill: "currentColor",
                d: s[1],
              },
            },
          ],
        })
      : (a = { tag: "path", attributes: { fill: "currentColor", d: s } }),
    { found: !0, width: t, height: n, icon: a }
  );
}
var _6 = { found: !1, width: 512, height: 512 };
function Q6(e, t) {
  !hg &&
    !Y.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function Tu(e, t) {
  var n = t;
  return (
    t === "fa" && Y.styleDefault !== null && (t = Cn()),
    new Promise(function (r, i) {
      if ((Xt("missingIconAbstract"), n === "fa")) {
        var s = jg(e) || {};
        (e = s.iconName || e), (t = s.prefix || t);
      }
      if (e && t && fl[t] && fl[t][e]) {
        var a = fl[t][e];
        return r(Eu(a));
      }
      Q6(e, t),
        r(
          H(
            H({}, _6),
            {},
            {
              icon:
                Y.showMissingIcons && e ? Xt("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Kh = function () {},
  Pu =
    Y.measurePerformance && Os && Os.mark && Os.measure
      ? Os
      : { mark: Kh, measure: Kh },
  ui = 'FA "6.5.2"',
  K6 = function (t) {
    return (
      Pu.mark("".concat(ui, " ").concat(t, " begins")),
      function () {
        return Tg(t);
      }
    );
  },
  Tg = function (t) {
    Pu.mark("".concat(ui, " ").concat(t, " ends")),
      Pu.measure(
        "".concat(ui, " ").concat(t),
        "".concat(ui, " ").concat(t, " begins"),
        "".concat(ui, " ").concat(t, " ends")
      );
  },
  mf = { begin: K6, end: Tg },
  ra = function () {};
function Xh(e) {
  var t = e.getAttribute ? e.getAttribute(Zn) : null;
  return typeof t == "string";
}
function X6(e) {
  var t = e.getAttribute ? e.getAttribute(af) : null,
    n = e.getAttribute ? e.getAttribute(of) : null;
  return t && n;
}
function J6(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(Y.replacementClass)
  );
}
function Z6() {
  if (Y.autoReplaceSvg === !0) return ia.replace;
  var e = ia[Y.autoReplaceSvg];
  return e || ia.replace;
}
function q6(e) {
  return ce.createElementNS("http://www.w3.org/2000/svg", e);
}
function $6(e) {
  return ce.createElement(e);
}
function Pg(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? q6 : $6) : n;
  if (typeof e == "string") return ce.createTextNode(e);
  var i = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (a) {
    i.setAttribute(a, e.attributes[a]);
  });
  var s = e.children || [];
  return (
    s.forEach(function (a) {
      i.appendChild(Pg(a, { ceFn: r }));
    }),
    i
  );
}
function e5(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var ia = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (i) {
          n.parentNode.insertBefore(Pg(i), n);
        }),
        n.getAttribute(Zn) === null && Y.keepOriginalSource)
      ) {
        var r = ce.createComment(e5(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~uf(n).indexOf(Y.replacementClass)) return ia.replace(t);
    var i = new RegExp("".concat(Y.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var s = r[0].attributes.class.split(" ").reduce(
        function (o, l) {
          return (
            l === Y.replacementClass || l.match(i)
              ? o.toSvg.push(l)
              : o.toNode.push(l),
            o
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = s.toSvg.join(" ")),
        s.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", s.toNode.join(" "));
    }
    var a = r.map(function (o) {
      return ls(o);
    }).join(`
`);
    n.setAttribute(Zn, ""), (n.innerHTML = a);
  },
};
function Jh(e) {
  e();
}
function Ng(e, t) {
  var n = typeof t == "function" ? t : ra;
  if (e.length === 0) n();
  else {
    var r = Jh;
    Y.mutateApproach === s6 && (r = kn.requestAnimationFrame || Jh),
      r(function () {
        var i = Z6(),
          s = mf.begin("mutate");
        e.map(i), s(), n();
      });
  }
}
var gf = !1;
function Lg() {
  gf = !0;
}
function Nu() {
  gf = !1;
}
var Ua = null;
function Zh(e) {
  if (zh && Y.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? ra : t,
      r = e.nodeCallback,
      i = r === void 0 ? ra : r,
      s = e.pseudoElementsCallback,
      a = s === void 0 ? ra : s,
      o = e.observeMutationsRoot,
      l = o === void 0 ? ce : o;
    (Ua = new zh(function (u) {
      if (!gf) {
        var c = Cn();
        Gr(u).forEach(function (d) {
          if (
            (d.type === "childList" &&
              d.addedNodes.length > 0 &&
              !Xh(d.addedNodes[0]) &&
              (Y.searchPseudoElements && a(d.target), n(d.target)),
            d.type === "attributes" &&
              d.target.parentNode &&
              Y.searchPseudoElements &&
              a(d.target.parentNode),
            d.type === "attributes" &&
              Xh(d.target) &&
              ~d6.indexOf(d.attributeName))
          )
            if (d.attributeName === "class" && X6(d.target)) {
              var h = go(uf(d.target)),
                p = h.prefix,
                v = h.iconName;
              d.target.setAttribute(af, p || c),
                v && d.target.setAttribute(of, v);
            } else J6(d.target) && i(d.target);
        });
      }
    })),
      Zt &&
        Ua.observe(l, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function t5() {
  Ua && Ua.disconnect();
}
function n5(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, i) {
        var s = i.split(":"),
          a = s[0],
          o = s.slice(1);
        return a && o.length > 0 && (r[a] = o.join(":").trim()), r;
      }, {})),
    n
  );
}
function r5(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    i = go(uf(e));
  return (
    i.prefix || (i.prefix = Cn()),
    t && n && ((i.prefix = t), (i.iconName = n)),
    (i.iconName && i.prefix) ||
      (i.prefix &&
        r.length > 0 &&
        (i.iconName =
          O6(i.prefix, e.innerText) || df(i.prefix, ku(e.innerText))),
      !i.iconName &&
        Y.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (i.iconName = e.firstChild.data)),
    i
  );
}
function i5(e) {
  var t = Gr(e.attributes).reduce(function (i, s) {
      return (
        i.name !== "class" && i.name !== "style" && (i[s.name] = s.value), i
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    Y.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(Y.replacementClass, "-title-")
            .concat(r || Xi()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function s5() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Tt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function qh(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = r5(e),
    r = n.iconName,
    i = n.prefix,
    s = n.rest,
    a = i5(e),
    o = bu("parseNodeAttributes", {}, e),
    l = t.styleParser ? n5(e) : [];
  return H(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: i,
      transform: Tt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: s, styles: l, attributes: a },
    },
    o
  );
}
var a5 = xt.styles;
function Ig(e) {
  var t = Y.autoReplaceSvg === "nest" ? qh(e, { styleParser: !1 }) : qh(e);
  return ~t.extra.classes.indexOf(pg)
    ? Xt("generateLayersText", e, t)
    : Xt("generateSvgReplacementMutation", e, t);
}
var bn = new Set();
lf.map(function (e) {
  bn.add("fa-".concat(e));
});
Object.keys(Gi[le]).map(bn.add.bind(bn));
Object.keys(Gi[ye]).map(bn.add.bind(bn));
bn = as(bn);
function $h(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Zt) return Promise.resolve();
  var n = ce.documentElement.classList,
    r = function (d) {
      return n.add("".concat(Uh, "-").concat(d));
    },
    i = function (d) {
      return n.remove("".concat(Uh, "-").concat(d));
    },
    s = Y.autoFetchSvg
      ? bn
      : lf
          .map(function (c) {
            return "fa-".concat(c);
          })
          .concat(Object.keys(a5));
  s.includes("fa") || s.push("fa");
  var a = [".".concat(pg, ":not([").concat(Zn, "])")]
    .concat(
      s.map(function (c) {
        return ".".concat(c, ":not([").concat(Zn, "])");
      })
    )
    .join(", ");
  if (a.length === 0) return Promise.resolve();
  var o = [];
  try {
    o = Gr(e.querySelectorAll(a));
  } catch {}
  if (o.length > 0) r("pending"), i("complete");
  else return Promise.resolve();
  var l = mf.begin("onTree"),
    u = o.reduce(function (c, d) {
      try {
        var h = Ig(d);
        h && c.push(h);
      } catch (p) {
        hg || (p.name === "MissingIcon" && console.error(p));
      }
      return c;
    }, []);
  return new Promise(function (c, d) {
    Promise.all(u)
      .then(function (h) {
        Ng(h, function () {
          r("active"),
            r("complete"),
            i("pending"),
            typeof t == "function" && t(),
            l(),
            c();
        });
      })
      .catch(function (h) {
        l(), d(h);
      });
  });
}
function o5(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ig(e).then(function (n) {
    n && Ng([n], t);
  });
}
function l5(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : ju(t || {}),
      i = n.mask;
    return (
      i && (i = (i || {}).icon ? i : ju(i || {})),
      e(r, H(H({}, n), {}, { mask: i }))
    );
  };
}
var u5 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      i = r === void 0 ? Tt : r,
      s = n.symbol,
      a = s === void 0 ? !1 : s,
      o = n.mask,
      l = o === void 0 ? null : o,
      u = n.maskId,
      c = u === void 0 ? null : u,
      d = n.title,
      h = d === void 0 ? null : d,
      p = n.titleId,
      v = p === void 0 ? null : p,
      y = n.classes,
      S = y === void 0 ? [] : y,
      x = n.attributes,
      m = x === void 0 ? {} : x,
      g = n.styles,
      A = g === void 0 ? {} : g;
    if (t) {
      var k = t.prefix,
        b = t.iconName,
        C = t.icon;
      return vo(H({ type: "icon" }, t), function () {
        return (
          qn("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          Y.autoA11y &&
            (h
              ? (m["aria-labelledby"] = ""
                  .concat(Y.replacementClass, "-title-")
                  .concat(v || Xi()))
              : ((m["aria-hidden"] = "true"), (m.focusable = "false"))),
          pf({
            icons: {
              main: Eu(C),
              mask: l
                ? Eu(l.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: k,
            iconName: b,
            transform: H(H({}, Tt), i),
            symbol: a,
            title: h,
            maskId: c,
            titleId: v,
            extra: { attributes: m, styles: A, classes: S },
          })
        );
      });
    }
  },
  c5 = {
    mixout: function () {
      return { icon: l5(u5) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = $h), (n.nodeCallback = o5), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ce : r,
          s = n.callback,
          a = s === void 0 ? function () {} : s;
        return $h(i, a);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var i = r.iconName,
            s = r.title,
            a = r.titleId,
            o = r.prefix,
            l = r.transform,
            u = r.symbol,
            c = r.mask,
            d = r.maskId,
            h = r.extra;
          return new Promise(function (p, v) {
            Promise.all([
              Tu(i, o),
              c.iconName
                ? Tu(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (y) {
                var S = rf(y, 2),
                  x = S[0],
                  m = S[1];
                p([
                  n,
                  pf({
                    icons: { main: x, mask: m },
                    prefix: o,
                    iconName: i,
                    transform: l,
                    symbol: u,
                    maskId: d,
                    title: s,
                    titleId: a,
                    extra: h,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(v);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            i = n.attributes,
            s = n.main,
            a = n.transform,
            o = n.styles,
            l = po(o);
          l.length > 0 && (i.style = l);
          var u;
          return (
            cf(a) &&
              (u = Xt("generateAbstractTransformGrouping", {
                main: s,
                transform: a,
                containerWidth: s.width,
                iconWidth: s.width,
              })),
            r.push(u || s.icon),
            { children: r, attributes: i }
          );
        });
    },
  },
  f5 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.classes,
            s = i === void 0 ? [] : i;
          return vo({ type: "layer" }, function () {
            qn("beforeDOMElementCreation", { assembler: n, params: r });
            var a = [];
            return (
              n(function (o) {
                Array.isArray(o)
                  ? o.map(function (l) {
                      a = a.concat(l.abstract);
                    })
                  : (a = a.concat(o.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(Y.cssPrefix, "-layers")]
                      .concat(as(s))
                      .join(" "),
                  },
                  children: a,
                },
              ]
            );
          });
        },
      };
    },
  },
  d5 = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.title,
            s = i === void 0 ? null : i,
            a = r.classes,
            o = a === void 0 ? [] : a,
            l = r.attributes,
            u = l === void 0 ? {} : l,
            c = r.styles,
            d = c === void 0 ? {} : c;
          return vo({ type: "counter", content: n }, function () {
            return (
              qn("beforeDOMElementCreation", { content: n, params: r }),
              G6({
                content: n.toString(),
                title: s,
                extra: {
                  attributes: u,
                  styles: d,
                  classes: ["".concat(Y.cssPrefix, "-layers-counter")].concat(
                    as(o)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  h5 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            i = r.transform,
            s = i === void 0 ? Tt : i,
            a = r.title,
            o = a === void 0 ? null : a,
            l = r.classes,
            u = l === void 0 ? [] : l,
            c = r.attributes,
            d = c === void 0 ? {} : c,
            h = r.styles,
            p = h === void 0 ? {} : h;
          return vo({ type: "text", content: n }, function () {
            return (
              qn("beforeDOMElementCreation", { content: n, params: r }),
              Qh({
                content: n,
                transform: H(H({}, Tt), s),
                title: o,
                extra: {
                  attributes: d,
                  styles: p,
                  classes: ["".concat(Y.cssPrefix, "-layers-text")].concat(
                    as(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var i = r.title,
          s = r.transform,
          a = r.extra,
          o = null,
          l = null;
        if (cg) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (o = c.width / u), (l = c.height / u);
        }
        return (
          Y.autoA11y && !i && (a.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            Qh({
              content: n.innerHTML,
              width: o,
              height: l,
              transform: s,
              title: i,
              extra: a,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  p5 = new RegExp('"', "ug"),
  ep = [1105920, 1112319];
function m5(e) {
  var t = e.replace(p5, ""),
    n = T6(t, 0),
    r = n >= ep[0] && n <= ep[1],
    i = t.length === 2 ? t[0] === t[1] : !1;
  return { value: ku(i ? t[0] : t), isSecondary: r || i };
}
function tp(e, t) {
  var n = "".concat(i6).concat(t.replace(":", "-"));
  return new Promise(function (r, i) {
    if (e.getAttribute(n) !== null) return r();
    var s = Gr(e.children),
      a = s.filter(function (C) {
        return C.getAttribute(Su) === t;
      })[0],
      o = kn.getComputedStyle(e, t),
      l = o.getPropertyValue("font-family").match(u6),
      u = o.getPropertyValue("font-weight"),
      c = o.getPropertyValue("content");
    if (a && !l) return e.removeChild(a), r();
    if (l && c !== "none" && c !== "") {
      var d = o.getPropertyValue("content"),
        h = ~["Sharp"].indexOf(l[2]) ? ye : le,
        p = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(l[2])
          ? _i[h][l[2].toLowerCase()]
          : c6[h][u],
        v = m5(d),
        y = v.value,
        S = v.isSecondary,
        x = l[0].startsWith("FontAwesome"),
        m = df(p, y),
        g = m;
      if (x) {
        var A = M6(y);
        A.iconName && A.prefix && ((m = A.iconName), (p = A.prefix));
      }
      if (
        m &&
        !S &&
        (!a || a.getAttribute(af) !== p || a.getAttribute(of) !== g)
      ) {
        e.setAttribute(n, g), a && e.removeChild(a);
        var k = s5(),
          b = k.extra;
        (b.attributes[Su] = t),
          Tu(m, p)
            .then(function (C) {
              var j = pf(
                  H(
                    H({}, k),
                    {},
                    {
                      icons: { main: C, mask: hf() },
                      prefix: p,
                      iconName: g,
                      extra: b,
                      watchable: !0,
                    }
                  )
                ),
                E = ce.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(E, e.firstChild)
                : e.appendChild(E),
                (E.outerHTML = j.map(function (N) {
                  return ls(N);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(i);
      } else r();
    } else r();
  });
}
function g5(e) {
  return Promise.all([tp(e, "::before"), tp(e, "::after")]);
}
function v5(e) {
  return (
    e.parentNode !== document.head &&
    !~a6.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(Su) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function np(e) {
  if (Zt)
    return new Promise(function (t, n) {
      var r = Gr(e.querySelectorAll("*")).filter(v5).map(g5),
        i = mf.begin("searchPseudoElements");
      Lg(),
        Promise.all(r)
          .then(function () {
            i(), Nu(), t();
          })
          .catch(function () {
            i(), Nu(), n();
          });
    });
}
var y5 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = np), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          i = r === void 0 ? ce : r;
        Y.searchPseudoElements && np(i);
      };
    },
  },
  rp = !1,
  x5 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            Lg(), (rp = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          Zh(bu("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          t5();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          rp
            ? Nu()
            : Zh(bu("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  ip = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, i) {
        var s = i.toLowerCase().split("-"),
          a = s[0],
          o = s.slice(1).join("-");
        if (a && o === "h") return (r.flipX = !0), r;
        if (a && o === "v") return (r.flipY = !0), r;
        if (((o = parseFloat(o)), isNaN(o))) return r;
        switch (a) {
          case "grow":
            r.size = r.size + o;
            break;
          case "shrink":
            r.size = r.size - o;
            break;
          case "left":
            r.x = r.x - o;
            break;
          case "right":
            r.x = r.x + o;
            break;
          case "up":
            r.y = r.y - o;
            break;
          case "down":
            r.y = r.y + o;
            break;
          case "rotate":
            r.rotate = r.rotate + o;
            break;
        }
        return r;
      }, n);
  },
  w5 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return ip(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-transform");
          return i && (n.transform = ip(i)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          i = n.transform,
          s = n.containerWidth,
          a = n.iconWidth,
          o = { transform: "translate(".concat(s / 2, " 256)") },
          l = "translate(".concat(i.x * 32, ", ").concat(i.y * 32, ") "),
          u = "scale("
            .concat((i.size / 16) * (i.flipX ? -1 : 1), ", ")
            .concat((i.size / 16) * (i.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(i.rotate, " 0 0)"),
          d = { transform: "".concat(l, " ").concat(u, " ").concat(c) },
          h = { transform: "translate(".concat((a / 2) * -1, " -256)") },
          p = { outer: o, inner: d, path: h };
        return {
          tag: "g",
          attributes: H({}, p.outer),
          children: [
            {
              tag: "g",
              attributes: H({}, p.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: H(H({}, r.icon.attributes), p.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  dl = { x: 0, y: 0, width: "100%", height: "100%" };
function sp(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function A5(e) {
  return e.tag === "g" ? e.children : [e];
}
var S5 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-mask"),
            s = i
              ? go(
                  i.split(" ").map(function (a) {
                    return a.trim();
                  })
                )
              : hf();
          return (
            s.prefix || (s.prefix = Cn()),
            (n.mask = s),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          i = n.attributes,
          s = n.main,
          a = n.mask,
          o = n.maskId,
          l = n.transform,
          u = s.width,
          c = s.icon,
          d = a.width,
          h = a.icon,
          p = A6({ transform: l, containerWidth: d, iconWidth: u }),
          v = { tag: "rect", attributes: H(H({}, dl), {}, { fill: "white" }) },
          y = c.children ? { children: c.children.map(sp) } : {},
          S = {
            tag: "g",
            attributes: H({}, p.inner),
            children: [
              sp(
                H({ tag: c.tag, attributes: H(H({}, c.attributes), p.path) }, y)
              ),
            ],
          },
          x = { tag: "g", attributes: H({}, p.outer), children: [S] },
          m = "mask-".concat(o || Xi()),
          g = "clip-".concat(o || Xi()),
          A = {
            tag: "mask",
            attributes: H(
              H({}, dl),
              {},
              {
                id: m,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [v, x],
          },
          k = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: g }, children: A5(h) },
              A,
            ],
          };
        return (
          r.push(k, {
            tag: "rect",
            attributes: H(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(g, ")"),
                mask: "url(#".concat(m, ")"),
              },
              dl
            ),
          }),
          { children: r, attributes: i }
        );
      };
    },
  },
  k5 = {
    provides: function (t) {
      var n = !1;
      kn.matchMedia &&
        (n = kn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            i = { fill: "currentColor" },
            s = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: H(
              H({}, i),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var a = H(H({}, s), {}, { attributeName: "opacity" }),
            o = {
              tag: "circle",
              attributes: H(H({}, i), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              o.children.push(
                {
                  tag: "animate",
                  attributes: H(
                    H({}, s),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: H(H({}, a), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(o),
            r.push({
              tag: "path",
              attributes: H(
                H({}, i),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: H(H({}, a), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: H(
                  H({}, i),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: H(H({}, a), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  C5 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var i = r.getAttribute("data-fa-symbol"),
            s = i === null ? !1 : i === "" ? !0 : i;
          return (n.symbol = s), n;
        },
      };
    },
  },
  b5 = [C6, c5, f5, d5, h5, y5, x5, w5, S5, k5, C5];
B6(b5, { mixoutsTo: it });
it.noAuto;
it.config;
it.library;
it.dom;
var Lu = it.parse;
it.findIconDefinition;
it.toHtml;
var j5 = it.icon;
it.layer;
it.text;
it.counter;
var Rg = { exports: {} },
  E5 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  T5 = E5,
  P5 = T5;
function Og() {}
function Mg() {}
Mg.resetWarningCache = Og;
var N5 = function () {
  function e(r, i, s, a, o, l) {
    if (l !== P5) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Mg,
    resetWarningCache: Og,
  };
  return (n.PropTypes = n), n;
};
Rg.exports = N5();
var L5 = Rg.exports;
const $ = zu(L5);
function ap(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function un(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? ap(Object(n), !0).forEach(function (r) {
          Cr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ap(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Ha(e) {
  "@babel/helpers - typeof";
  return (
    (Ha =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    Ha(e)
  );
}
function Cr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function I5(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    i,
    s;
  for (s = 0; s < r.length; s++)
    (i = r[s]), !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function R5(e, t) {
  if (e == null) return {};
  var n = I5(e, t),
    r,
    i;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (i = 0; i < s.length; i++)
      (r = s[i]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function Iu(e) {
  return O5(e) || M5(e) || D5(e) || V5();
}
function O5(e) {
  if (Array.isArray(e)) return Ru(e);
}
function M5(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function D5(e, t) {
  if (e) {
    if (typeof e == "string") return Ru(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Ru(e, t);
  }
}
function Ru(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function V5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B5(e) {
  var t,
    n = e.beat,
    r = e.fade,
    i = e.beatFade,
    s = e.bounce,
    a = e.shake,
    o = e.flash,
    l = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    d = e.pulse,
    h = e.fixedWidth,
    p = e.inverse,
    v = e.border,
    y = e.listItem,
    S = e.flip,
    x = e.size,
    m = e.rotation,
    g = e.pull,
    A =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": i,
        "fa-bounce": s,
        "fa-shake": a,
        "fa-flash": o,
        "fa-spin": l,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": d,
        "fa-fw": h,
        "fa-inverse": p,
        "fa-border": v,
        "fa-li": y,
        "fa-flip": S === !0,
        "fa-flip-horizontal": S === "horizontal" || S === "both",
        "fa-flip-vertical": S === "vertical" || S === "both",
      }),
      Cr(t, "fa-".concat(x), typeof x < "u" && x !== null),
      Cr(t, "fa-rotate-".concat(m), typeof m < "u" && m !== null && m !== 0),
      Cr(t, "fa-pull-".concat(g), typeof g < "u" && g !== null),
      Cr(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(A)
    .map(function (k) {
      return A[k] ? k : null;
    })
    .filter(function (k) {
      return k;
    });
}
function F5(e) {
  return (e = e - 0), e === e;
}
function Dg(e) {
  return F5(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var z5 = ["style"];
function U5(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function H5(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        i = Dg(n.slice(0, r)),
        s = n.slice(r + 1).trim();
      return i.startsWith("webkit") ? (t[U5(i)] = s) : (t[i] = s), t;
    }, {});
}
function Vg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (l) {
      return Vg(e, l);
    }),
    i = Object.keys(t.attributes || {}).reduce(
      function (l, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (l.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            l.attrs.style = H5(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (l.attrs[u.toLowerCase()] = c)
              : (l.attrs[Dg(u)] = c);
        }
        return l;
      },
      { attrs: {} }
    ),
    s = n.style,
    a = s === void 0 ? {} : s,
    o = R5(n, z5);
  return (
    (i.attrs.style = un(un({}, i.attrs.style), a)),
    e.apply(void 0, [t.tag, un(un({}, i.attrs), o)].concat(Iu(r)))
  );
}
var Bg = !1;
try {
  Bg = !0;
} catch {}
function W5() {
  if (!Bg && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function op(e) {
  if (e && Ha(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Lu.icon) return Lu.icon(e);
  if (e === null) return null;
  if (e && Ha(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function hl(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Cr({}, e, t)
    : {};
}
var Bt = Zi.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    i = e.symbol,
    s = e.className,
    a = e.title,
    o = e.titleId,
    l = e.maskId,
    u = op(n),
    c = hl("classes", [].concat(Iu(B5(e)), Iu(s.split(" ")))),
    d = hl(
      "transform",
      typeof e.transform == "string" ? Lu.transform(e.transform) : e.transform
    ),
    h = hl("mask", op(r)),
    p = j5(
      u,
      un(
        un(un(un({}, c), d), h),
        {},
        { symbol: i, title: a, titleId: o, maskId: l }
      )
    );
  if (!p) return W5("Could not find icon", u), null;
  var v = p.abstract,
    y = { ref: t };
  return (
    Object.keys(e).forEach(function (S) {
      Bt.defaultProps.hasOwnProperty(S) || (y[S] = e[S]);
    }),
    Y5(v[0], y)
  );
});
Bt.displayName = "FontAwesomeIcon";
Bt.propTypes = {
  beat: $.bool,
  border: $.bool,
  beatFade: $.bool,
  bounce: $.bool,
  className: $.string,
  fade: $.bool,
  flash: $.bool,
  mask: $.oneOfType([$.object, $.array, $.string]),
  maskId: $.string,
  fixedWidth: $.bool,
  inverse: $.bool,
  flip: $.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: $.oneOfType([$.object, $.array, $.string]),
  listItem: $.bool,
  pull: $.oneOf(["right", "left"]),
  pulse: $.bool,
  rotation: $.oneOf([0, 90, 180, 270]),
  shake: $.bool,
  size: $.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: $.bool,
  spinPulse: $.bool,
  spinReverse: $.bool,
  symbol: $.oneOfType([$.bool, $.string]),
  title: $.string,
  titleId: $.string,
  transform: $.oneOfType([$.string, $.object]),
  swapOpacity: $.bool,
};
Bt.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var Y5 = Vg.bind(null, Zi.createElement),
  G5 = {
    prefix: "fas",
    iconName: "lock",
    icon: [
      448,
      512,
      [128274],
      "f023",
      "M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z",
    ],
  },
  _5 = {
    prefix: "fas",
    iconName: "star",
    icon: [
      576,
      512,
      [11088, 61446],
      "f005",
      "M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z",
    ],
  },
  Q5 = {
    prefix: "fas",
    iconName: "heart",
    icon: [
      512,
      512,
      [
        128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829,
        10084, 61578,
      ],
      "f004",
      "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
    ],
  },
  K5 = {
    prefix: "fas",
    iconName: "phone",
    icon: [
      512,
      512,
      [128222, 128379],
      "f095",
      "M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z",
    ],
  },
  X5 = {
    prefix: "fas",
    iconName: "tag",
    icon: [
      448,
      512,
      [127991],
      "f02b",
      "M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z",
    ],
  },
  J5 = {
    prefix: "fas",
    iconName: "car",
    icon: [
      512,
      512,
      [128664, "automobile"],
      "f1b9",
      "M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z",
    ],
  },
  Z5 = {
    prefix: "fas",
    iconName: "dinosaur",
    icon: [
      640,
      512,
      [],
      "e5fe",
      "M446.2 0H448C554 0 640 86 640 192v30.6c0 88-51.5 165.6-128 201.5V480c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V458c-15.3 3.9-31.4 6-48 6c-6.8 0-13.5-.4-20.1-1c-7.5-18.9-24.4-33.3-45.4-36.8L162 408.1c-19.6-3.3-34-20.2-34-40.1c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 35.5 25.7 65.8 60.7 71.7l108.5 18.1c13.2 2.2 22.8 13.6 22.8 26.9c0 15.1-12.2 27.3-27.3 27.3H256 224 192 120.7C54.1 512 0 457.9 0 391.3c0-34 14.4-66.5 39.5-89.3l89.7-81.6C172 181.5 227.6 160 285.3 160c50.2 0 99 16.3 139.2 46.4L480 248c6.9 5.2 15.3 8 24 8c22.1 0 40-17.9 40-40V192c0-35.3-28.7-64-64-64H448 415.7c-26.3 0-47.7-21.4-47.7-47.7V75.6c0-16.7 10.1-31.6 25.6-37.8l1.7-.7c8.2-3.3 14.8-9.4 18.7-17.2C420.2 7.7 432.6 0 446.2 0zM464 64a16 16 0 1 0 0-32 16 16 0 1 0 0 32z",
    ],
  },
  q5 = {
    prefix: "fas",
    iconName: "spinner",
    icon: [
      512,
      512,
      [],
      "f110",
      "M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z",
    ],
  },
  $5 = {
    prefix: "fas",
    iconName: "mug-saucer",
    icon: [
      640,
      512,
      ["coffee"],
      "f0f4",
      "M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z",
    ],
  },
  eA = $5;
const tA = window.tA || (() => {
    const e = [];
    for (; e.length < 6; ) {
      const t = Math.floor(Math.random() * 99) + 1,
        n = t < 10 ? `0${t}` : `${t}`;
      e.includes(n) || e.push(n);
    }
    return e;
  }),
  nA = (e) => {
    const t = e.activeApp,
      [n, r] = w.useState("spinner"),
      [i, s] = w.useState(!1);
    Ae("setCanHack", s);
    const [a, o] = w.useState(!1),
      [l, u] = w.useState(!1),
      [c, d] = w.useState(100);
    w.useEffect(() => {
      t === "secbypass" && r("spinner");
    }, [t]),
      w.useEffect(() => {
        n === "spinner" &&
          t === "secbypass" &&
          Z("hackStatus").then((q) => {
            s(typeof q != "boolean"),
              r("loading"),
              o(!1),
              u(!1),
              typeof q != "boolean" &&
                (C(q.timer),
                d(q.security),
                // Ensure shuffle timing is always 8-9 seconds, even if server sends different value
                R(q.updateInterval && typeof q.updateInterval === 'object' 
                  ? { min: Math.max(8000, q.updateInterval.min || 8000), max: Math.min(9000, q.updateInterval.max || 9000) }
                  : { min: 8000, max: 9000 }),
                _(q.maxChances));
          });
      }, [n, t]);
    const [h, p] = w.useState(0),
      [v, y] = w.useState(["10"]),
      [S, x] = w.useState(1),
      [m, g] = w.useState(1),
      [A, k] = w.useState([]),
      [b, C] = w.useState(3e4),
      [j, E] = w.useState(3e4),
      [N, R] = w.useState(() => {
        const config = window.secbypassConfig || { min: 8000, max: 9000 };
        // Ensure min is 8000 and max is 9000 (8-9 seconds)
        return { min: 8000, max: 9000 };
      }),
      [V, B] = w.useState(0),
      [F, G] = w.useState(0),
      [z, _] = w.useState(5),
      [T, I] = w.useState(5),
      [L, D] = w.useState(!1),
      U = () => (j / b) * 100;
    w.useEffect(() => {
      I(z);
    }, [z]),
      w.useEffect(() => {
        // Always use 8-9 second interval regardless of N state
        const shuffleInterval = Math.random() * (9000 - 8000) + 8000;
        B(shuffleInterval);
      }, [N]),
      w.useEffect(() => {
        const q = F - j;
        (q < 0 || q > V) && G(j);
      }, [j]);
    const xe = window.xe || ((q) => {
        // Only use lower rows (rows 2-5, indices 2-5) for target numbers
        // Lower rows: row 2 (index 34-50), row 3 (51-67), row 4 (68-84), row 5 (85-101)
        const lowerRowPositions = [];
        for (let row = 2; row < 6; row++) {
          for (let col = 0; col < 17; col++) {
            lowerRowPositions.push({ row, col });
          }
        }
        // Shuffle the lower row positions
        const shuffledLower = lowerRowPositions.sort(() => 0.5 - Math.random());
        // Create map of target numbers to lower row positions
        const fe = new Map(
          shuffledLower.slice(0, q.length).map((kt, at) => [`${kt.row}-${kt.col}`, q[at]])
        );
        return Array.from({ length: 6 }, (kt, at) =>
          Array.from({ length: 17 }, (yo, Nn) => {
            const cs = fe.get(`${at}-${Nn}`);
            if (cs) return cs;
            {
              let Ct;
              do
                (Ct = Math.floor(Math.random() * 99) + 1),
                  (Ct = Ct < 10 ? `0${Ct}` : `${Ct}`);
              while (q.includes(Ct));
              return Ct;
            }
          })
        );
      }),
      P = () => A[S - 1][m - 1];
    return (
      w.useEffect(() => {
        if (F === 0 || t !== "secbypass") return;
        // Only shuffle when F changes (triggered by timer), not when v changes
        k(xe(v));
      }, [F, t]),
      w.useEffect(() => {
        if (n !== "hack" || t !== "secbypass") return;
        let timeout = null;
        let isShuffling = false;
        // Force 8-9 second shuffle timing (8000-9000 milliseconds)
        const shuffleConfig = { min: 8000, max: 9000 };
        let lastShuffleTime = 0;
        const scheduleNextShuffle = () => {
          if (isShuffling) return; // Prevent multiple simultaneous shuffles
          // Always wait 8-9 seconds (8000-9000ms) between shuffles
          const interval = Math.random() * (shuffleConfig.max - shuffleConfig.min) + shuffleConfig.min;
          
          timeout = setTimeout(() => {
            isShuffling = true;
            lastShuffleTime = Date.now();
            G(Date.now()); // Trigger shuffle by updating F
            isShuffling = false;
            scheduleNextShuffle(); // Schedule next shuffle
          }, interval);
        };
        // Start first shuffle after 8 seconds, then continue at 8-9 second intervals
        lastShuffleTime = Date.now();
        scheduleNextShuffle();
        return () => {
          if (timeout) clearTimeout(timeout);
          isShuffling = false;
        };
      }, [n, t]),
      w.useEffect(() => {
        if (t !== "secbypass" || !a) return;
        const q = (O) => {
          if (O.key === "E" || O.key === "e")
            l && c > 0 && i && n === "loading" && r("hack");
          else if (O.key === "W" || O.key === "w") x(S === 1 ? 6 : S - 1);
          else if (O.key === "S" || O.key === "s") x(S === 6 ? 1 : S + 1);
          else if (O.key === "A" || O.key === "a") g(m === 1 ? 17 : m - 1);
          else if (O.key === "D" || O.key === "d") g(m === 17 ? 1 : m + 1);
          else if (O.key === "Enter") {
            if (n !== "hack") return;
            if (P() === v[h]) {
              p(h + 1),
                I(z),
                h === 5 &&
                  Z("updateSecurity", !0).then((J) => {
                    d(J), r("loading"), D(!1);
                  });
              return;
            }
            const re = T - 1,
              ne = re === 0;
            D(ne),
              I(re),
              ne &&
                Z("updateSecurity", !1).then((J) => {
                  d(J), r("loading");
                });
          }
        };
        return (
          window.addEventListener("keydown", q),
          () => {
            window.removeEventListener("keydown", q);
          }
        );
      }, [a, m, S, T, c, n]),
      w.useEffect(() => {
        if (n !== "hack" || t !== "secbypass") return;
        const q = tA();
        y(q), k(xe(q)), p(0), console.log(b), E(b), x(1), g(1), I(z);
        let O = null;
        const X = b;
        let re = !0;
        const ne = (J) => {
          if (!re) return;
          O === null && (O = J);
          const fe = J - O,
            st = X - fe;
          E(st <= 0 ? 0 : st),
            st > 0 ? requestAnimationFrame(ne) : (D(!0), r("loading"));
        };
        return (
          requestAnimationFrame(ne),
          () => {
            (O = null), (re = !1);
          }
        );
      }, [n, t]),
      f.jsx(Xe, {
        children:
          t === "secbypass" &&
          f.jsx(
            K.div,
            {
              className: "appContainer",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: f.jsxs("div", {
                className: "secBypass",
                children: [
                  f.jsxs("div", {
                    className: "header",
                    children: [
                      f.jsxs("div", {
                        className: "logoName",
                        children: [
                          f.jsx("img", { src: T0 }),
                          f.jsx("span", { children: "SecBypass" }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "appControls",
                        children: [
                          f.jsx("svg", {
                            onClick: () => {
                              e.setActiveApp("");
                            },
                            width: "17",
                            height: "2",
                            viewBox: "0 0 17 2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: f.jsx("rect", {
                              x: "0.0810547",
                              y: "0.539062",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              fill: "white",
                            }),
                          }),
                          f.jsxs("svg", {
                            onClick: () => {
                              e.setActiveApp("");
                            },
                            width: "13",
                            height: "13",
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              f.jsx("rect", {
                                x: "0.707275",
                                width: "16",
                                height: "0.8",
                                rx: "0.4",
                                transform: "rotate(45 0.707275 0)",
                                fill: "white",
                              }),
                              f.jsx("rect", {
                                x: "0.192627",
                                y: "11.4844",
                                width: "16",
                                height: "0.8",
                                rx: "0.4",
                                transform: "rotate(-45 0.192627 11.4844)",
                                fill: "white",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  n === "spinner" &&
                    f.jsx(
                      K.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "spinnerContainer",
                        children: f.jsx(Bt, {
                          icon: q5,
                          spin: !0,
                          color: "grey",
                          fontSize: 100,
                        }),
                      },
                      "spinnerContainer"
                    ),
                  n === "loading" &&
                    f.jsxs(
                      K.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "loadingTextContainer",
                        children: [
                          a
                            ? f.jsxs(f.Fragment, {
                                children: [
                                  f.jsx("span", {
                                    children: "INITIALIZING SYSTEM SETUP..",
                                  }),
                                  f.jsx("span", {
                                    children: "SUCCESSFULLY INITIALIZED...",
                                  }),
                                  f.jsxs("span", {
                                    children: [
                                      "SECURITY ECU MODEL:",
                                      f.jsx("span", {
                                        style: {
                                          color: "#80ABFF",
                                          paddingLeft: 24,
                                        },
                                        children: i ? "ANGEE" : "UNKNOWN",
                                      }),
                                    ],
                                  }),
                                  i &&
                                    f.jsx("span", {
                                      style: { opacity: 0.45 },
                                      children:
                                        "--------------------------------------------------------------------------------------------------------------------------------------",
                                    }),
                                  i &&
                                    f.jsxs("span", {
                                      children: [
                                        "SECURITY PROTOCOL INTEGRITY  ",
                                        f.jsxs("span", {
                                          style: { color: "#00FF00" },
                                          children: [c, "%"],
                                        }),
                                      ],
                                    }),
                                  (c !== 100 || L) &&
                                    f.jsxs("span", {
                                      children: [
                                        "SECURITY PROTOCOL  ",
                                        f.jsx("span", {
                                          style: {
                                            color: L ? "#EE1041" : "#00FF00",
                                          },
                                          children: L
                                            ? "BYPASS FAILED"
                                            : c <= 0
                                            ? "DISABLED"
                                            : "BYPASSED",
                                        }),
                                      ],
                                    }),
                                ],
                              })
                            : f.jsx(Qw, {
                                onInit: (q) => {
                                  q.changeDelay(25)
                                    .typeString("INITIALIZING SYSTEM SETUP...")
                                    .pauseFor(2e3)
                                    .typeString(
                                      "<br />SUCCESSFULLY INITIALIZED..."
                                    )
                                    .pauseFor(2e3)
                                    .typeString(
                                      `<br />SECURITY ECU MODEL:   <span style="color: #80ABFF; padding-left: 24px" >${
                                        i ? "ANGEE" : "UNKNOWN"
                                      }</span>`
                                    )
                                    .pauseFor(i ? 2e3 : 0)
                                    .changeDelay(5)
                                    .typeString(
                                      i
                                        ? '<br /><span style="opacity: 0.45" >--------------------------------------------------------------------------------------------------------------------------------------</span>'
                                        : ""
                                    )
                                    .changeDelay(25)
                                    .pauseFor(i ? 2e3 : 0)
                                    .typeString(
                                      i
                                        ? `<br />SECURITY PROTOCOL INTEGRITY  <span style="color: #00FF00" }} >${c}%</span>`
                                        : ""
                                    )
                                    .callFunction(() => {
                                      u(i), o(i);
                                    })
                                    .start();
                                },
                              }),
                          l &&
                            c > 0 &&
                            i &&
                            f.jsxs("span", {
                              style: {
                                marginTop: "auto",
                                alignSelf: "center",
                                textShadow:
                                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                              },
                              children: [
                                "PRESS ",
                                f.jsx("span", {
                                  style: { color: "#00FF00" },
                                  children: "E",
                                }),
                                " TO ACCESS SECURITY PROTOCOL",
                              ],
                            }),
                          c === 0 &&
                            l &&
                            f.jsx("span", {
                              style: {
                                marginTop: "auto",
                                alignSelf: "center",
                                textShadow:
                                  "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                              },
                              children: "LOSE THE COPS",
                            }),
                        ],
                      },
                      "loadingTextContainer"
                    ),
                  n === "hack" &&
                    f.jsxs(
                      K.div,
                      {
                        initial: { opacity: 0 },
                        animate: { opacity: 1 },
                        exit: { opacity: 0 },
                        className: "hackContainer",
                        children: [
                          f.jsx("div", {
                            className: "targetList",
                            children: v.map((q, O) => {
                              const X = z === 1 ? 1 : O === h ? T / z : 1;
                              return f.jsxs(
                                "span",
                                {
                                  style: {
                                    color:
                                      O < h
                                        ? "#00FF00"
                                        : X < 0.3
                                        ? "#EE1041"
                                        : X < 0.6
                                        ? "#EEA210"
                                        : "#505256",
                                  },
                                  children: [O === 0 ? "" : ".", q],
                                },
                                "target-" + O
                              );
                            }),
                          }),
                          f.jsx("div", {
                            className: "timer",
                            children: Array(70)
                              .fill(null)
                              .map((q, O) => {
                                const X = U(),
                                  re = (O / 70) * 100;
                                return f.jsx(
                                  "span",
                                  {
                                    style: {
                                      color:
                                        re <= X
                                          ? j <= 7500
                                            ? "#EE1041"
                                            : "#00FF00"
                                          : "white",
                                      transition: "color 0.2s ease",
                                    },
                                    children: "/",
                                  },
                                  "slash-" + O
                                );
                              }),
                          }),
                          f.jsx("div", {
                            className: "numberGrid",
                            children: A.map((q, O) => {
                              const X = O + 1 === S;
                              return f.jsx("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                },
                                children: q.map((re, ne) => {
                                  const J = ne + 1 === m;
                                  return f.jsx(
                                    "span",
                                    {
                                      style: {
                                        width: 32,
                                        color:
                                          J && X
                                            ? "#FFFFFF"
                                            : "rgba(255, 255, 255, 0.45)",
                                        transition: "color 0.2s ease",
                                      },
                                      children: re,
                                    },
                                    "grid-" + O + "-" + ne
                                  );
                                }),
                              });
                            }),
                          }),
                          f.jsxs("div", {
                            className: "controls",
                            children: [
                              f.jsx("span", {
                                style: { color: "#00FF00" },
                                children: "W S A D",
                              }),
                              " TO NAVIGATE ",
                              f.jsx("span", {
                                style: { color: "#00FF00" },
                                children: "ENTER",
                              }),
                              " TO CONFIRM",
                            ],
                          }),
                        ],
                      },
                      "hackContainer"
                    ),
                ],
              }),
            },
            "secBypassContainer"
          ),
      })
    );
  },
  lp = [
    "The dog barks at strangers",
    "He reads a book daily",
    "She paints colorful landscapes",
    "The sun sets behind mountains",
    "They swim in the pool",
    "The cat purrs when petted",
    "He cooks delicious Italian food",
    "She listens to calming music",
    "The car drives through town",
    "They play board games together",
    "He likes to watch action movies",
    "She goes for a walk",
    "The ocean waves crash loudly",
    "The bird sings a melody",
    "He works out at the gym",
    "She practices playing guitar",
    "The flower blooms in spring",
    "They visit family on holidays",
    "He likes to watch football",
    "She reads poetry out loud",
    "The wind blows through trees",
    "The horse gallops through fields",
    "He enjoys solving puzzles",
    "She writes short stories",
    "The baby crawls on floor",
    "They run in the park",
    "He takes photographs of nature",
    "She goes to bed early",
    "The moon shines brightly tonight",
    "The tree provides shade",
    "He rides his bike around town",
    "She sings in the choir",
    "The airplane takes off quickly",
    "They have a picnic in park",
    "He likes to watch comedy shows",
    "She cooks healthy meals",
    "The river flows gently downstream",
    "The snow falls softly from sky",
    "He drinks coffee in the morning",
    "She practices playing piano",
    "The child blows bubbles outside",
    "They ride on the rollercoaster",
    "He enjoys watching basketball",
    "She reads a novel before bed",
    "The clock chimes every hour",
    "The sun shines brightly today",
    "He plays video games on weekends",
    "She takes a dance class",
    "The bus drives through city",
    "The star twinkles in sky",
    "He takes a long hike",
    "She goes to the beach",
    "The camera captures the moment",
    "They explore the city together",
    "He is an avid fisherman",
    "She is learning a new language",
    "The butterfly flutters its wings",
    "The train travels through mountains",
    "He plays soccer with friends",
    "She goes shopping for clothes",
    "The bell rings loudly at school",
    "The apple falls from the tree",
    "He watches a movie with family",
    "She goes to the theater to watch a play",
    "The motorcycle speeds down highway",
    "They go to the arcade to play games",
    "He likes to play golf on weekends",
    "She practices ballet at the studio",
    "The church bell tolls on Sunday",
    "The lion roars in the jungle",
    "He climbs a mountain",
    "She goes to the art museum",
    "The ship sails across the ocean",
    "They go to the amusement park",
    "He enjoys listening to jazz music",
    "She cooks dinner for her family",
    "The airplane lands safely",
    "The snake slithers on the ground",
    "He goes to the basketball game",
    "She reads a magazine in the park",
    "The dolphin swims in the ocean",
    "They go on a road trip",
    "He likes to watch hockey",
    "She practices yoga in the morning",
    "The helicopter flies overhead",
    "The spider crawls up the wall",
    "He goes to the baseball game",
    "The boat sails on the lake",
    "He listens to podcasts daily",
    "She draws with colored pencils",
    "The wind chimes make music",
    "They go on a hike",
    "The snowman melts in the sun",
    "He writes poetry in his notebook",
    "She does yoga in the park",
    "The fire crackles in the fireplace",
    "They go for a bike ride",
    "He watches the sunset",
    "She eats lunch with friends",
    "The child plays with toys",
    "The sun is shining bright",
    "I like eating pizza sometimes",
    "Dogs are great companions always",
    "The sky is so blue",
    "Life is full of surprises",
    "He plays basketball very well",
    "I love spending time outdoors",
    "The ocean is vast and beautiful",
    "Music makes me happy always",
    "She dances like a pro",
    "I enjoy reading mystery novels",
    "Hes a good listener always",
    "The trees are turning green",
    "She sings like an angel",
    "Cooking is my favorite hobby",
    "The mountains are so majestic",
    "They love each other deeply",
    "Running is great exercise always",
    "The moon is full tonight",
    "She has a beautiful voice",
    "I like to travel often",
    "The stars are twinkling brightly",
    "Hes a talented musician always",
    "We should be kind always",
    "The beach is so relaxing",
    "Shes a skilled artist always",
    "I love spending time with friends",
    "The flowers smell so sweet",
    "Hes a great teacher always",
    "We should protect our environment",
    "The wind is blowing hard",
    "Shes a wonderful storyteller always",
    "I love watching movies sometimes",
    "The world is full of wonders",
    "Hes a hardworking student always",
    "We should appreciate what we have",
    "The snow is falling softly",
    "Shes a loyal friend always",
    "I love playing video games sometimes",
    "The city is so vibrant",
    "Hes a generous person always",
    "We should always help others",
    "The rain is pouring heavily",
    "Shes a brave warrior always",
    "I love listening to music always",
    "The desert is so vast",
    "Hes a loving father always",
    "We should be grateful always",
    "The leaves are changing colors",
    "Shes a reliable employee always",
    "I love swimming in the pool",
    "The park is so peaceful",
    "Hes a trustworthy friend always",
    "We should forgive each other",
    "The clouds are so fluffy",
    "Shes a talented dancer always",
    "I love hiking in the mountains",
    "The river is so refreshing",
    "Hes a responsible person always",
    "We should respect each other",
    "The sunsets are so beautiful",
    "Shes a creative writer always",
    "I love playing sports sometimes",
    "The architecture is so impressive",
    "Hes a patient doctor always",
    "We should be honest always",
    "The sea is so calm",
    "Shes a thoughtful listener always",
    "I love attending concerts sometimes",
    "The countryside is so peaceful",
    "Hes a dedicated worker always",
    "We should show compassion always",
    "The waves are so mesmerizing",
    "Shes a good public speaker always",
    "I love trying new things sometimes",
    "The wildlife is so diverse",
    "Hes a talented athlete always",
    "We should be understanding always",
    "The night sky is so mysterious",
    "Shes a skilled chef always",
    "I love visiting new places",
    "The history is so fascinating",
    "Hes a wise old man always",
    "We should be patient always",
    "The gardens are so beautiful",
    "Shes a passionate activist always",
    "I love eating ice cream sometimes",
    "The waterfalls are so breathtaking",
    "Hes a successful businessman always",
    "We should be tolerant always",
  ];
function up(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
function cp(e) {
  return e
    .split(" ")
    .map((i) =>
      i
        .split("")
        .sort(() => Math.random() - 0.5)
        .join("")
    )
    .join(" ");
}
const rA = (e) => {
  const t = e.activeApp,
    [n, r] = w.useState(1),
    [i, s] = w.useState(""),
    [a, o] = w.useState(!0),
    [l, u] = w.useState("EHS SAET HCUNL HTIW SDNFRIE"),
    [c, d] = w.useState(""),
    [h, p] = w.useState(60),
    [v, y] = w.useState(0),
    [S, x] = w.useState(""),
    [m, g] = w.useState(5),
    [A, k] = w.useState(0),
    [b, C] = w.useState(0),
    [j, E] = w.useState(3),
    [N, R] = w.useState(3),
    V = w.useRef(null),
    [B, F] = w.useState();
  w.useEffect(() => {
    y(0),
      r(1),
      g(Math.floor(Math.random() * 4) + 5),
      C(60),
      p(60),
      E(5),
      R(5),
      t === "captcha" &&
        Z("captchaStatus").then((_) => {
          _ !== !1 && o(!0);
        });
  }, [t]),
    w.useEffect(() => {
      if (t !== "captcha" || n !== 2) return;
      const _ = setInterval(() => {
        p((T) => T - 1);
      }, 1e3);
      return F(_), () => clearInterval(_);
    }, [n]),
    w.useEffect(() => {
      t === "captcha" &&
        n === 2 &&
        h <= 0 &&
        (clearInterval(B), r(3), E(0), Z("captchaResult", !1));
    }, [h, B]),
    w.useEffect(() => {
      if (t !== "captcha") return;
      const _ = setInterval(() => {
        y((T) => T + 1);
      }, 75);
      if (v >= 100) {
        clearInterval(_);
        let T = "";
        do T = lp[up(0, 100)].toLowerCase();
        while (T === c);
        d(T), p(60), s(T), u(cp(T)), p(b), r(2), V.current && V.current.focus();
      }
      return () => clearInterval(_);
    }, [t, v]);
  function G(_) {
    x(_.target.value);
  }
  const z = (_) => {
    if (t === "captcha" && _.key === "Enter") {
      if (S.toLowerCase() === i) {
        if ((k(A + 1), A === m - 1)) r(3), Z("captchaResult", !0);
        else if (A < m - 1) {
          let T = "";
          do T = lp[up(0, 100)].toLowerCase();
          while (T === c);
          d(T), s(T), u(cp(T)), r(2);
        }
      } else E(j - 1), j - 1 === 0 && (r(3), E(0), Z("captchaResult", !1));
      x("");
    }
  };
  return f.jsx(Xe, {
    children:
      t === "captcha" &&
      f.jsx(
        K.div,
        {
          className: "appContainer",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          children: f.jsxs("div", {
            className: "secBypass",
            children: [
              f.jsxs("div", {
                className: "header",
                children: [
                  f.jsxs("div", {
                    className: "logoName",
                    children: [
                      f.jsx("img", { src: L0, style: { borderRadius: "20%" } }),
                      f.jsx("span", { children: "Captcha" }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "appControls",
                    children: [
                      f.jsx("svg", {
                        onClick: () => {
                          e.setActiveApp("");
                        },
                        width: "17",
                        height: "2",
                        viewBox: "0 0 17 2",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: f.jsx("rect", {
                          x: "0.0810547",
                          y: "0.539062",
                          width: "16",
                          height: "0.8",
                          rx: "0.4",
                          fill: "white",
                        }),
                      }),
                      f.jsxs("svg", {
                        onClick: () => {
                          e.setActiveApp("");
                        },
                        width: "13",
                        height: "13",
                        viewBox: "0 0 13 13",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                          f.jsx("rect", {
                            x: "0.707275",
                            width: "16",
                            height: "0.8",
                            rx: "0.4",
                            transform: "rotate(45 0.707275 0)",
                            fill: "white",
                          }),
                          f.jsx("rect", {
                            x: "0.192627",
                            y: "11.4844",
                            width: "16",
                            height: "0.8",
                            rx: "0.4",
                            transform: "rotate(-45 0.192627 11.4844)",
                            fill: "white",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "hack-container",
                children:
                  n === 2
                    ? f.jsxs("div", {
                        className: "column",
                        children: [
                          f.jsx("div", {
                            className: "hack-title",
                            children: "PHRASE:",
                          }),
                          f.jsx("div", {
                            className: "hack-phrase",
                            children: l,
                          }),
                          f.jsx("div", { className: "line" }),
                          f.jsxs("div", {
                            className: "hack-attempts",
                            children: ["Attempts : ", j, "/", N],
                          }),
                          f.jsx("input", {
                            className: "phrase-input",
                            ref: V,
                            type: "text",
                            placeholder: "ANSWER",
                            value: S,
                            onChange: G,
                            onKeyPress: z,
                          }),
                          f.jsxs("div", {
                            className: "hack-timer",
                            children: [
                              "Time : ",
                              h,
                              " seconds | Score : ",
                              A,
                              "/",
                              m,
                            ],
                          }),
                        ],
                      })
                    : a === !1
                    ? f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "hack-title",
                            children: f.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "80px",
                              height: "80px",
                              viewBox: "0 0 448 512",
                              children: f.jsx("path", {
                                d: "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z",
                                fill: "white",
                              }),
                            }),
                          }),
                          f.jsx("div", {
                            className: "hack-title",
                            children: "No Connection Found...",
                          }),
                        ],
                      })
                    : n === 1
                    ? f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "hack-title",
                            children: f.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "80px",
                              height: "80px",
                              viewBox: "0 0 448 512",
                              children: f.jsx("path", {
                                d: "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z",
                                fill: "white",
                              }),
                            }),
                          }),
                          f.jsx("div", {
                            className: "hack-title",
                            children: "Initializing System...",
                          }),
                          f.jsx("div", {
                            className: "progressbar",
                            children: f.jsx("div", {
                              className: "progressbar-inner",
                              style: { width: `${v}%` },
                            }),
                          }),
                        ],
                      })
                    : f.jsxs("div", {
                        children: [
                          f.jsx("div", {
                            className: "hack-title",
                            children: f.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "80px",
                              height: "80px",
                              viewBox: "0 0 448 512",
                              children: f.jsx("path", {
                                d: "M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z",
                                fill: "white",
                              }),
                            }),
                          }),
                          f.jsx("div", {
                            className: "hack-title",
                            children:
                              j === 0
                                ? "Verification Aborted!"
                                : "System Bypassed!",
                          }),
                        ],
                      }),
              }),
            ],
          }),
        },
        "captchaContainer"
      ),
  });
};
function Be(e, t) {
  return Math.floor(Math.random() * (t - e + 1) + e);
}
const iA = (e) => {
    const t = e.activeApp,
      n = "abcdefghijklmnpqrstuvwxyz123456789",
      [r, i] = w.useState(!1),
      [s, a] = w.useState(!0),
      [o, l] = w.useState(""),
      [u, c] = w.useState(0),
      [d, h] = w.useState(0),
      [p, v] = w.useState(0),
      [y, S] = w.useState(0),
      [x, m] = w.useState(10),
      [g, A] = w.useState(0),
      [k, b] = w.useState(0),
      [C, j] = w.useState(0),
      [E, N] = w.useState(0),
      [R, V] = w.useState(!1),
      B = () => {
        const _ = Math.floor(Math.random() * n.length);
        return n[_];
      },
      F = (_) => {
        o === "" && (_.stopPropagation(), l(B()));
      },
      G = () => {
        j(C + 1),
          C + 1 == 3 &&
            (Z("firewallResult", !1), e.setActiveApp(""), V(!1), i(!0)),
          l(""),
          c(Be(5, 100)),
          v(Be(-200, 200)),
          h(Be(-200, 200));
      },
      z = () => {
        i(!1), c(Be(5, 25)), v(Be(-300, 300)), h(Be(-300, 300)), N(g);
      };
    return (
      w.useEffect(() => {
        t === "firewall" &&
          (Z("firewallStatus").then((_) => {
            _ !== !1 && a(!0);
          }),
          Z("firewallStart"),
          i(!0),
          j(0),
          l(""),
          S(0),
          V(!1),
          m(25),
          A(35),
          b(3));
      }, [t]),
      w.useEffect(() => {
        if (t !== "firewall" || o === "") return;
        if (C >= 3) {
          i(!0);
          return;
        }
        const _ = (T) => {
          if (T.key.toLowerCase() === o) {
            if (
              (l(""),
              c(Be(5, 100)),
              v(Be(-200, 200)),
              h(Be(-200, 200)),
              S(y + 1),
              y >= x - 1)
            ) {
              i(!0),
                V(!0),
                setTimeout(() => {
                  Z("firewallResult", !0), e.setActiveApp("");
                }, 3e3);
              return;
            }
            b(3);
          } else {
            if (
              (l(""),
              c(Be(5, 100)),
              v(Be(-200, 200)),
              h(Be(-200, 200)),
              j(C + 1),
              C - 1 >= 3)
            ) {
              Z("firewallResult", !1), e.setActiveApp(""), V(!1), i(!0);
              return;
            }
            b(3);
          }
        };
        return (
          window.addEventListener("keydown", _),
          () => {
            window.removeEventListener("keydown", _);
          }
        );
      }, [o, C]),
      w.useEffect(() => {
        const _ = setInterval(() => {
          N((T) => T - 1), b((T) => T - 1);
        }, 1e3);
        return (
          E <= 0 && !R && (clearInterval(_), i(!0), j(3)),
          () => clearInterval(_)
        );
      }, [E]),
      w.useEffect(() => {
        if (k === 0) {
          if (C + 1 == 3) {
            Z("firewallResult", !1), V(!1), i(!0);
            return;
          }
          b(3), l(""), c(Be(5, 100)), v(Be(-200, 200)), h(Be(-200, 200));
        }
      }, [k]),
      f.jsx(Xe, {
        children:
          t === "firewall" &&
          f.jsx(
            K.div,
            {
              className: "appContainer",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: f.jsxs("div", {
                className: "secBypass",
                children: [
                  f.jsxs("div", {
                    className: "header",
                    children: [
                      f.jsxs("div", {
                        className: "logoName",
                        children: [
                          f.jsx("img", {
                            src: I0,
                            style: { borderRadius: "20%" },
                          }),
                          f.jsx("span", { children: "Firewall" }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "appControls",
                        children: [
                          f.jsx("svg", {
                            onClick: () => {
                              e.setActiveApp("");
                            },
                            width: "17",
                            height: "2",
                            viewBox: "0 0 17 2",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: f.jsx("rect", {
                              x: "0.0810547",
                              y: "0.539062",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              fill: "white",
                            }),
                          }),
                          f.jsxs("svg", {
                            onClick: () => {
                              e.setActiveApp("");
                            },
                            width: "13",
                            height: "13",
                            viewBox: "0 0 13 13",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                              f.jsx("rect", {
                                x: "0.707275",
                                width: "16",
                                height: "0.8",
                                rx: "0.4",
                                transform: "rotate(45 0.707275 0)",
                                fill: "white",
                              }),
                              f.jsx("rect", {
                                x: "0.192627",
                                y: "11.4844",
                                width: "16",
                                height: "0.8",
                                rx: "0.4",
                                transform: "rotate(-45 0.192627 11.4844)",
                                fill: "white",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "hack-container",
                    children: [
                      r &&
                        f.jsx("div", {
                          style: { marginTop: "100px" },
                          children:
                            C >= 3
                              ? f.jsxs("div", {
                                  children: [
                                    f.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "75px",
                                      height: "75px",
                                      viewBox: "0 0 640 512",
                                      children: f.jsx("path", {
                                        d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                        fill: "white",
                                      }),
                                    }),
                                    f.jsx("div", {
                                      style: { fontSize: "32px" },
                                      children: "Manual Authorization Failed!",
                                    }),
                                  ],
                                })
                              : R
                              ? f.jsxs("div", {
                                  children: [
                                    f.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "75px",
                                      height: "75px",
                                      viewBox: "0 0 640 512",
                                      children: f.jsx("path", {
                                        d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                        fill: "white",
                                      }),
                                    }),
                                    f.jsx("div", {
                                      style: { fontSize: "32px" },
                                      children:
                                        "Manual Authorization Successful!",
                                    }),
                                  ],
                                })
                              : s === !1
                              ? f.jsxs("div", {
                                  children: [
                                    f.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "75px",
                                      height: "75px",
                                      viewBox: "0 0 640 512",
                                      children: f.jsx("path", {
                                        d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                        fill: "white",
                                      }),
                                    }),
                                    f.jsx("div", {
                                      style: { fontSize: "32px" },
                                      children: "No Connection Found",
                                    }),
                                  ],
                                })
                              : f.jsxs("div", {
                                  children: [
                                    f.jsx("svg", {
                                      xmlns: "http://www.w3.org/2000/svg",
                                      width: "75px",
                                      height: "75px",
                                      viewBox: "0 0 640 512",
                                      children: f.jsx("path", {
                                        d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                        fill: "white",
                                      }),
                                    }),
                                    f.jsx("div", {
                                      style: { fontSize: "32px" },
                                      children:
                                        "Manual Authorization Required!",
                                    }),
                                    f.jsx("div", {
                                      className: "button",
                                      onClick: z,
                                      style: { flex: 0.5, margin: 20 },
                                      children:
                                        "CLICK TO START MANUAL AUTHORIZATION",
                                    }),
                                  ],
                                }),
                        }),
                      !r &&
                        f.jsxs("div", {
                          className: "firewall-container",
                          children: [
                            f.jsxs("div", {
                              className: "fw-header",
                              children: [
                                "Strikes : ",
                                C,
                                "/3 | Score : ",
                                y,
                                " | Target : ",
                                x,
                              ],
                            }),
                            f.jsxs("div", {
                              className: "fw-timer",
                              children: ["Time : ", E, " seconds"],
                            }),
                            f.jsxs("div", {
                              className: "fw-targetGround",
                              onClick: () => {
                                G();
                              },
                              children: [
                                f.jsx("div", {
                                  className: "fw-target",
                                  style: {
                                    width: `${u}px`,
                                    height: `${u}px`,
                                    marginLeft: `${d}px`,
                                    marginTop: `${p}px`,
                                  },
                                  onClick: F,
                                }),
                                o !== "" &&
                                  f.jsx("div", {
                                    className: "fw-challengerNumber",
                                    children: o,
                                  }),
                              ],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            },
            "secBypassContainer"
          ),
      })
    );
  },
  sr = [eA, Q5, _5, K5, J5, G5, X5, Z5],
  sA = 40,
  aA = ["red", "green", "blue", "purple", "yellow", "orange"],
  ri = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
  oA = ({ activeApp: e, setActiveApp: t }) => {
    const n = w.useRef(null),
      [r, i] = w.useState([]),
      [s, a] = w.useState(0),
      [o, l] = w.useState(0),
      [u, c] = w.useState("noconn"),
      [d, h] = w.useState(!1),
      [p, v] = w.useState(-1),
      [y, S] = w.useState(-1),
      [x, m] = w.useState(""),
      [g, A] = w.useState(!1),
      k = () => {
        const E = ri(0, sr.length - 1);
        a(E);
      };
    w.useEffect(() => {
      k();
    }, []);
    const b = () => {
      l((E) => E + 1);
    };
    w.useEffect(() => {
      if (e !== "interception" || u !== "minigame") return;
      const E = setInterval(() => {
        const N = ri(0, sr.length - 1),
          R = sr[N];
        N === s && b();
        const V = {
          id: Date.now(),
          icon: R,
          isAnimating: !0,
          margin: ri(-240, 240),
          color: aA[ri(0, 5)],
          speed: ri(2, 3),
        };
        i((B) => [...B, V].slice(-sA)),
          setTimeout(() => {
            i((B) =>
              B.map((F) => (F.id === V.id ? { ...F, isAnimating: !1 } : F))
            );
          }, V.speed * 1e3);
      }, 150);
      return () => {
        clearInterval(E);
      };
    }, [u]),
      w.useEffect(() => {
        if (e !== "interception" || u !== "start") return;
        h(!1);
        const E = (N) => {
          (N.key == "E" || N.key == "e") && (h(!0), v(0));
        };
        return (
          window.addEventListener("keydown", E),
          () => {
            window.removeEventListener("keydown", E);
          }
        );
      }, [u]),
      w.useEffect(() => {
        e === "interception" && c("start");
      }, [e]),
      w.useEffect(() => {
        if (p === -1) return;
        const E = setInterval(() => {
          v((N) => N + 1);
        }, 75);
        return (
          p >= 100 && (clearInterval(E), c("minigame"), S(60)),
          () => clearInterval(E)
        );
      }, [p]),
      w.useEffect(() => {
        if (e !== "interception" || u !== "minigame") return;
        const E = setInterval(() => {
          S((N) => N - 1);
        }, 1e3);
        return y <= 0 && (clearInterval(E), c("guess")), () => clearInterval(E);
      }, [y]);
    function C(E) {
      m(E.target.value);
    }
    const j = (E) => {
      u === "guess" &&
        E.key === "Enter" &&
        (parseInt(x) === o
          ? (A(!0), c("result"), Z("interceptionResult", !0))
          : (A(!1), c("result"), Z("interceptionResult", !1)));
    };
    return f.jsx(Xe, {
      children:
        e === "interception" &&
        f.jsx(
          K.div,
          {
            className: "appContainer",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: f.jsxs("div", {
              className: "secBypass",
              children: [
                f.jsxs("div", {
                  className: "header",
                  children: [
                    f.jsxs("div", {
                      className: "logoName",
                      children: [
                        f.jsx("img", {
                          src: R0,
                          style: { borderRadius: "20%" },
                          alt: "Logo",
                        }),
                        f.jsx("span", { children: "Interception" }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "appControls",
                      children: [
                        f.jsx("svg", {
                          onClick: () => t(""),
                          width: "17",
                          height: "2",
                          viewBox: "0 0 17 2",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: f.jsx("rect", {
                            x: "0.0810547",
                            y: "0.539062",
                            width: "16",
                            height: "0.8",
                            rx: "0.4",
                            fill: "white",
                          }),
                        }),
                        f.jsxs("svg", {
                          onClick: () => t(""),
                          width: "13",
                          height: "13",
                          viewBox: "0 0 13 13",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: [
                            f.jsx("rect", {
                              x: "0.707275",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              transform: "rotate(45 0.707275 0)",
                              fill: "white",
                            }),
                            f.jsx("rect", {
                              x: "0.192627",
                              y: "11.4844",
                              width: "16",
                              height: "0.8",
                              rx: "0.4",
                              transform: "rotate(-45 0.192627 11.4844)",
                              fill: "white",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "hack-container",
                  children:
                    u === "minigame"
                      ? f.jsxs("div", {
                          className: "firewall-container",
                          children: [
                            f.jsxs("div", {
                              className: "fw-header",
                              children: [
                                "COUNT : ",
                                f.jsx(Bt, { icon: sr[s] }),
                              ],
                            }),
                            f.jsxs("div", {
                              className: "fw-timer",
                              children: ["Timer : ", y, " seconds"],
                            }),
                            f.jsx("div", {
                              className: "interception-container",
                              ref: n,
                              children: r.map((E) =>
                                E.isAnimating
                                  ? f.jsx(
                                      K.div,
                                      {
                                        className: "falling-icon",
                                        initial: { opacity: 0, y: -100 },
                                        animate: {
                                          opacity: 1,
                                          y: n.current?.clientHeight || 0,
                                          x: E.margin,
                                          scale: 1,
                                        },
                                        transition: {
                                          y: {
                                            duration: E.speed,
                                            ease: "linear",
                                          },
                                          opacity: { duration: E.speed / 2 },
                                          scale: {
                                            duration: E.speed,
                                            ease: "easeOut",
                                          },
                                        },
                                        children: f.jsx(Bt, {
                                          icon: E.icon,
                                          color: E.color,
                                          size: "2x",
                                        }),
                                      },
                                      E.id
                                    )
                                  : null
                              ),
                            }),
                          ],
                        })
                      : u === "start"
                      ? f.jsx("div", {
                          children: f.jsxs("div", {
                            style: { marginTop: "100px" },
                            children: [
                              f.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "75px",
                                height: "75px",
                                viewBox: "0 0 640 512",
                                children: f.jsx("path", {
                                  d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                  fill: "white",
                                }),
                              }),
                              f.jsx("div", {
                                style: { fontSize: "32px" },
                                children: "Manual Authorization Required!",
                              }),
                              f.jsx("div", {
                                style: {
                                  marginTop: "30px",
                                  fontSize: "100px",
                                  color: "green",
                                },
                                children: f.jsx(Bt, { icon: sr[s] }),
                              }),
                              d
                                ? f.jsx("div", {
                                    children: f.jsx("div", {
                                      className: "progressbar",
                                      style: {
                                        marginTop: "300px",
                                        marginBottom: "auto",
                                      },
                                      children: f.jsx("div", {
                                        className: "progressbar-inner",
                                        style: { width: `${p}%` },
                                      }),
                                    }),
                                  })
                                : f.jsxs("div", {
                                    style: {
                                      marginTop: "300px",
                                      marginBottom: "auto",
                                      textShadow:
                                        "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                    },
                                    children: [
                                      "PRESS ",
                                      f.jsx("span", {
                                        style: { color: "#00FF00" },
                                        children: "E",
                                      }),
                                      " TO START MANUAL AUTHORIZATION",
                                    ],
                                  }),
                            ],
                          }),
                        })
                      : u === "guess"
                      ? f.jsx("div", {
                          children: f.jsxs("div", {
                            style: { marginTop: "100px" },
                            children: [
                              f.jsxs("div", {
                                style: { fontSize: "32px" },
                                children: [
                                  "Guess the number : ",
                                  f.jsx(Bt, { icon: sr[s] }),
                                ],
                              }),
                              f.jsx("input", {
                                className: "phrase-input",
                                type: "text",
                                placeholder: "GUESS",
                                value: x,
                                onChange: C,
                                onKeyPress: j,
                              }),
                            ],
                          }),
                        })
                      : u === "noconn"
                      ? f.jsx("div", {
                          children: f.jsxs("div", {
                            style: { marginTop: "100px" },
                            children: [
                              f.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "75px",
                                height: "75px",
                                viewBox: "0 0 640 512",
                                children: f.jsx("path", {
                                  d: "M320 0c17.7 0 32 14.3 32 32V96H472c39.8 0 72 32.2 72 72V440c0 39.8-32.2 72-72 72H168c-39.8 0-72-32.2-72-72V168c0-39.8 32.2-72 72-72H288V32c0-17.7 14.3-32 32-32zM208 384c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H208zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H400zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM48 224H64V416H48c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H576V224h16z",
                                  fill: "white",
                                }),
                              }),
                              f.jsx("div", {
                                style: { fontSize: "32px" },
                                children: "NO CONNECTION",
                              }),
                            ],
                          }),
                        })
                      : f.jsx("div", {
                          children: f.jsxs("div", {
                            style: { marginTop: "100px" },
                            children: [
                              f.jsxs("div", {
                                style: { fontSize: "32px" },
                                children: [
                                  "AUTHORIZATION ",
                                  g ? "SUCCESSFUL" : "FAILED",
                                ],
                              }),
                              f.jsxs("div", { children: ["ANSWER : ", o] }),
                            ],
                          }),
                        }),
                }),
              ],
            }),
          },
          "secBypassContainer"
        ),
    });
  },
  lA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAYCAYAAAAcYhYyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANNSURBVHgBlVS/jxtVEP5m3rN31z7b64ud3AWCEAQJOjgKREEBVRpIjahS0VBADwg6KPgTKK5GSAYSkRYhQUkaBAVRUAIcIgln7oe96919j++9RUG5IpHHstb7PPPN92a+Gbn4+fd3sfCb6ChEAN81EKuAFfjbx3B/HACZheS9eCa9BEjp0+8CiUV9fW9q8Vu9ieMVHRUegEySFoAOknUhwwzoh2cK6dIntRFA8hTemA8uv/DyHZWM6euGXwcMLFyHbAzBnIPPTGQn4uEXJVxREcgyicLd3L8ye+rch8wL6ysC5KRf8W2+YjCdOgae7GVJRttD4J8CGhiRSbg2VH+Vl55+C/+ZxYoZSwKNSaFmoNGZb5oZKrJIQ50M3FY/nJNpCpBh/fOtK5d3zt+5B+IJgv0GUpDyBhnk2bUv33hxF2uYItDuerhYVhc/65piwfAlr9OQTUmg1fogrEnDbrjYIff7ITTUZ02T197/2vsbd4GDEjJI0Njqqjtlr7plCT0/helZNAtW/FQfKEt2cIlk+uTu7NJz83tM/E9/we/NIaMMvmBgIhdMMrjgsw1IFUSTwUw6sSvesP1PTKDjZMbY+f81KWqIsis1swXJD/twB0VsqacAlQqFY+c8otA0jMQrz9xfkwgQZMlMoCJxZiNkCjLlDFEjt4/gG4Lx3B+VrbJ/uHGisHVFEMYkDJwMOTMGSgDPrN61ndLTg8gKC/pWfH763QkQy2FSB9lk4TqCOqk++vaTSx8/qBtz2v0gDSd41IVX0i9XsPl2cdLpYaYYkYFhXYoFKfv2zmuaohsC2SF0+GVxDhdY1zRMblAtGrax5EtRY12TV1/f9WGPkEi7RzIUblkUupXXQTs67XP2qRR2Sp8/6+TsyAn9ZNyr68+uvf3Vuxe/sNlxgSWV6mv+Ydgpm6amp2kYRD0z4kJawu8voDuPAr9Q2Udk/VgODNnRvJ8HJnahQWgSVRtuxx/tjNDczXlcjfJIDtk7jLpx4co//gl5dptlWLU1UcOFElaJIVhCgJor8vHNuMkjwGSDoAwcpVFoQbUyYswRz47bTlo/xjs6PT3CMKy+Oi5hjMNmN+1CLlbQrQGaWwdt1nNjNNf/hoYpf3PnG7wH/Avu8mWYj1NlwgAAAABJRU5ErkJggg==",
  uA =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWRSURBVHgB7VZbbBRVGP7msrtd26Xb0pbaUiiWRNBI9IlEYwIhMTE++mCiD94elERiNDHxBbEPvsklRl9QQzSaYKJCookSCBLBWrkWKpabtIhtLXTbvc7uzJyL/zlnupSKW+qr/M3f/5zZmf/7/sv5Z4A78n8XCwuULVt2pVMteLoS+A+ykDUm4zEhBevvP3Lxk717d2SxQFkQgWc3vfuW7+W3TE9N2V6xAMZC2I6DhCOx+Y0XPl63Yf1LlmXxhfi0b/fG8fHxbrsy/drl8yfzucmRbW1NeGrVysZ1Ni+uS8e951tbmtF36MBmLFBuOwMXBs/uv3h28MujQ0Nf9Pb23pTq4eHhdGngmc1l3vRKU+fDh1tWbzzGGGv3/WB14AftBw72d50bymzYunXTof9EYPznRzcWg1XvxJof+2qs0Nkfj7vdQmBpGLJ7SmV/2XQ2v7TvSJ/bs7IHXV0dKHkV5AtF5PIlFIolTIxlcXpgcPvxo9+8Pi+B7bv2dCed2KtS8HbXte4n25aduLTk6riPgi8QMgZJ6NR54JxDwtTRdW1SB5ASgn6XkmsrBEdHeglODQz8euiH3Q/MxXPnXhgeKewOfG8tJyDGFVgEKGzlG5bjUuNJEBRiCp5+06BEiNIOweleIqbIqefDMESs1UZLuqEdt5CbmnDbR983205irWXHYdsuXMuBY7mkZG0HLqmtHpEWJJPgAUfgc1TKAcolH8U8pT5XQjZbxPR0HtNTRst+GalFjS19fX3JmhmYGC+sYX4JYD5A7C1Kn1EVqYrSWMkJnAujKlN0HMPIVpWThuZaoeihPpnE+5+fbCOYK/+agTq3goQdUKSMouf0I4FLU0/qBQhGqQ25cUypDYMAQajUrMOZtd7PEGK4NjmN+obFyA6faK9ZAidhZeKUE1ua5uEUhVLlUDkOFKBW31gC1MCBAiJLgFwrM88qS34mMxm4iTRGp/LLa5aAmjyvHlCsmXKuU8i1cj5b2Y3067WxgkAFPactNScT5qR4lTIqzMHV4cFFNQm4hc5RL8yYCCliTs5UysOo3iwioEshZojcsK2pIl5+4iJ4fgJ7Dtbhp7H76NjYKFU8VEQMbizZUbMEvb3rWeD7Yz6ldXXnH3jzye/w4kMfIpcZgx+aVGtlpt6hbj5TZ5X6gIj1tBeQihW1qiyq0qheyOZziCVSHTUzoKRYDibLFb/DqzAsqsshnyjDCqZQkrGoHIqIX3WsVOg1Nds47T11ghy0Jj1krg3DdeKgSYFrf43Q6eGL5iVwdeTy16VSbk0pU8Jzj3j0EJ3KyV8wGq5CPF4HetvptM6IowYTzQfHNadl37EkVtTncOySjVisDvG6BlOGUgHJVOvyeQkkUk1HadShyBrw2b67EVzn+NNrRX1zM9Uwpqeh1KdkltKehgVdt/HBvhVIUKBTRY66+gZNTt1f9ouwLWv+EkifDzEaNox8fnvmXoSVZahvldqRMOjRaBZ6L2euqT81sCjaspVGol59FlC2FDkSv1xQ9zfNxfvH98D1Nm+UpppUHa+dOzFKu1ONVne9srOi18qFjlSniNxaUZlk9M+vFIiP1bjy8fcSNQmc2LkzpCFyRc8CSkP1zadGsTp6es1vlEGDS72XwpCQOjOoRq+WAZVAqtl6bm97TQJKKJjfBTNvQgVaBRLyptqbER1ZOaskGlJE0Zu9oNOSuiuNxV1Lm+cnwMIzQpjhoqMWxopqlAZI1bwatap/NXphcBH1BykXAXq6ukeO//jpqdlY7q0ISMbO86gHTJOJqAGjKCMSELMB5ay1MOAzjap3kqZrfsdcrFsSsAU/LJn/ttAljOqoN4JOm9CfUUJdty1pUb0sx+KWYHQLvbjVK1TxsFSfOsKl6UPlojaR/m8XTu/HHbkjc+Rv+z2jFBCGcXUAAAAASUVORK5CYII=",
  Fg = w.createContext(null),
  cA = ({ children: e }) => {
    const [t, n] = w.useState("all"),
      [r, i] = w.useState(""),
      [s, a] = w.useState(!1),
      [o, l] = w.useState(!1),
      [u, c] = w.useState({
        cid: 0,
        id: 0,
        reputation: 0,
        username: "your-dads-house",
        earnings: [],
      });
    return (
      w.useEffect(() => {
        i("");
      }, [t]),
      f.jsx(Fg.Provider, {
        value: {
          page: t,
          setPage: n,
          searchQuery: r,
          setSearchQuery: i,
          postListing: s,
          setPostListing: a,
          postOrder: o,
          setPostOrder: l,
          account: u,
          setAccount: c,
        },
        children: e,
      })
    );
  },
  rr = () => w.useContext(Fg);
function fA({ ...e }) {
  return f.jsx("svg", {
    ...e,
    width: "17",
    height: "2",
    viewBox: "0 0 17 2",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: f.jsx("rect", {
      x: "0.0810547",
      y: "0.539062",
      width: "16",
      height: "0.8",
      rx: "0.4",
      fill: "white",
    }),
  });
}
function dA({ ...e }) {
  return f.jsxs("svg", {
    ...e,
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      f.jsx("rect", {
        x: "0.707275",
        width: "16",
        height: "0.8",
        rx: "0.4",
        transform: "rotate(45 0.707275 0)",
        fill: "white",
      }),
      f.jsx("rect", {
        x: "0.192627",
        y: "11.4844",
        width: "16",
        height: "0.8",
        rx: "0.4",
        transform: "rotate(-45 0.192627 11.4844)",
        fill: "white",
      }),
    ],
  });
}
const hA = {
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  },
  pA = {
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    repeat: 1 / 0,
    repeatDelay: 60,
  };
function mA({ setActiveApp: e }) {
  function t() {
    e("");
  }
  return f.jsxs("div", {
    className: "header",
    children: [
      f.jsxs("div", {
        className: "logoName",
        children: [
          f.jsx(K.img, { src: P0, draggable: !1, animate: hA, transition: pA }),
          f.jsx("span", { children: "Black Market" }),
        ],
      }),
      f.jsxs("div", {
        className: "appControls",
        children: [f.jsx(fA, { onClick: t }), f.jsx(dA, { onClick: t })],
      }),
    ],
  });
}
const gA =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAgCAYAAAArBentAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK3SURBVHgBNZRdctswDIQBkpLi9tS9VN96pLYPcSyRIol+yzSe0dii8bPYXdB//Po53cJnhHlK4Waec7ZjP+L58fTkiROzMkf3cA+bxIyhhHjbDx+j88phNnciy90albJZTKOolZx9jkFQtujdy/ZmrY8owaGqTfUGQp96n+rmo/eo1+W5bFS8eySqjzlcGGNOn9u0lJK1Wn32Qd7ppd+3stczaSVEk4dqJiyC4TlZ2cEEaOsDHCl5bXek/217u12VZ4tIqrRtJR7HwU9V6LSaBDUfdAswZ3cvrTYTrm3f7bpqjLt7hzvxSDm7qRqzWnFwlFKMN4Mkf12XqVKB6tfzCcVwHOGFaoSYn+dpNwEbSVLmqlfot7rdDFbAsyY7Xwpstm+7RZ62HQedsmXa79sW5fX+TvcASw19My3k0K0n5MyhajkXL6/nhykCtkmYS3KgWNp9KZaRd82xKAEHsELVFm9EyhT4Ka7z5ahnpZ0VUyBIFEge0PPyt8fDRhlLrgvsdMMsBAlHA+PSz4Q3IUI25HVMEbDgqJaZupmINukN3n4Pwyjq5N8e31zTpb9/fvNHMzI0Ma1vnXvvfDNEVpAkhHdHfOvRVNCVvuVCItNN6MJ+ogWbMR20+IIHf0Q3ZBQOMfCVXbImwxhaIpmAlssYko/I+IosBKxpJaPJpHymvHhLkbwGtEW4nJFTPCGWP5S0cI1+r4XTu/xQ6nUK9DLTWjKt63HAEcGfjeUgKx/vz6W1ZNwxr2RfK0yAfPr/E+VTIkRigVCCVR5r44M9srdjsaEiCXstLN8fj+Vk3tdg2hVtorZUu5/m+DTuXVkmNpAVMAQInVe6aa8xiwIxxFUX6TiaG4PWurRY36FHhqmXSZnAnK6hGCbqeQnyuj0KK7AuAqRM9HBZbWGZugFNO+JLTt1uXXs+7B+wC1fQgx96GAAAAABJRU5ErkJggg==";
function vA({ id: e, label: t, onClick: n }) {
  const { page: r } = rr(),
    i = () => {
      n && n();
    };
  return f.jsxs("div", {
    className: "tabItem",
    onClick: i,
    children: [
      f.jsx("span", {
        style: { opacity: e === r ? "100%" : "60%" },
        children: t,
      }),
      e === r
        ? f.jsx(K.div, { className: "rectangle", layoutId: "rectangle" })
        : f.jsx("div", { style: { height: 1 } }),
    ],
  });
}
const yA = [
  { id: "all", label: "All Markets" },
  { id: "local", label: "Local Market" },
  { id: "street", label: "Street Market" },
  { id: "mylistings", label: "My Listings" },
  { id: "listingHistory", label: "Listing History" },
];
function fp({ label: e, onClick: t }) {
  return f.jsx("div", {
    className: "button blackMarket",
    onClick: t,
    children: e,
  });
}
function xA() {
  const {
    page: e,
    setPage: t,
    searchQuery: n,
    setSearchQuery: r,
    setPostListing: i,
    setPostOrder: s,
    account: a,
    setAccount: o,
  } = rr();
  return f.jsxs("div", {
    className: "navContainer",
    children: [
      f.jsx("div", {
        className: "navItemContainer",
        children: yA.map((l) =>
          f.jsx(vA, { id: l.id, label: l.label, onClick: () => t(l.id) }, l.id)
        ),
      }),
      f.jsxs("div", {
        className: "rightFlex",
        children: [
          f.jsx("input", {
            className: "searchBar",
            placeholder: `Search ${
              e === "listingHistory" ? "History" : "Market"
            }`,
            value: n,
            onChange: (l) => {
              r(l.target.value);
            },
          }),
          f.jsxs("div", {
            className: "repContainer",
            children: [
              f.jsx("div", { className: "rep", children: a.reputation }),
              f.jsx("div", {
                className: "progress",
                children: f.jsx("img", {
                  src: gA,
                  style: { height: `${a.reputation}%` },
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            style: { display: "flex", gap: 10 },
            children: [
              f.jsx(fp, {
                label: "Post Listing",
                onClick: () => {
                  i(!0);
                },
              }),
              f.jsx(fp, {
                label: "Post Order",
                onClick: () => {
                  s(!0);
                },
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Ou =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlwSURBVHgB7VhpcJPXFT3aLMmyVkuWZMv7vmMMODTGQ4KBQshASjMJkDBZGppJyUx/hD90pkxL02kZSMqETpNAi0tISJOUlhCaQAyFEmIMCeBgvONdkmVsS7J2S5/U+7BoKBNiJZDJH13PGVn6lvfOu/ecd78PiEc84hGPeMQjHvGIx3cVPNxZsOv5UbCIEMLRT3ZMED3Gu+XYrbjj+LZE2HVCgoSQuHPntiqZTCrZtOmXF+x2u4d+m2LHt2/fnlNWlr/Qbp+wXrrUYRkYGHCOjY35GxsbXXQ8RAgSOPw/Qe6m32Mm+W2IsFVOICgbGhrqUk2KzcODw5XhUITdzSYUihstVtvRzZu3dHd3t207dfLYgvvuuxculwsymRpqdRLn9frHnU6H1e/zm73eqT7HZKhbp0tOo/mXu92Bt5Ys+eFRuj8jG4iSvKtEbmRBptVqU955782fd7Rd2TDpcguqqirg93pRu+AHuHDxIvg8AU3cbc3Pyzd0dXfxFPIknD1zHvNqZkEiTYRWp0GYJ8bY6DU6/zJkSUnIzU6HUCBCRrox2Dcwsv3+++tfpbHGCX5MZ2fGycUSjICYoNy586XanJz0F9vbu/LuX1iHkrJS+H3j4AtkGB+fgEajhN/vhc/rQ/+gGbJEMZxOF7IyTWht7YREpiTR8JCUJAPH+SGRiBCmNTeZ0pGamgaOCs5qGcCQ2fbuokXLfhEIBEZoXO9MZAQxkGBilbzy8rZZL+387S63y7EpzHGawsJ8lJQXY9xvR5I8Ge++dYAIuTE0ZMXs2XMhVyRDrzegra0TCSIJzYIHlVKJBGEYWVlpEIn4yM3JQ1e/FQK+EN1dPXA4J5BJhFXqFCRKxaUPPFA/z2IdO9/T0+PBDJqJhQg7R/bs0+uXZGikS0zpJpGAhMARv0n7ONQSKTwBD0qry6DSa1E9a/718Q5/cAx//ssB5GWlwpSqh3MygKHhYeh0Olgso5gYt+Pa2Di8rkkka9TQpShQXFSNCy2fQa1KRktLK5wuu0mu0iysnlvd8sl/PrmGaYP4Ss3EUlqsrJSEDEIlofrUR3vWeDze5MxsyogrhIB/CjxeGFWza2CzmXHkyAm0tnXTiptwT00VykpyMT7hxB9fO4Btv/s1+GIR3D4HvGMujNosMFutSFLIEeI4lBbPotJ0QkHfB3oHwHnGg/r0gov5JVU/prFHMW0AX7nasWSEuZSUZYaRkinTNA+tftSUrJFDm+iHnErG5+ehr28QV9racG3UjuEhG5568lFwET7+/o9jaGpuwfMbn4KRsiMiUYw5rkGtUYGvS0Jefi6M+lS4HQ6cOHkaI2QC5z5tQpoxEaMTnpbahcv/QOPaMO1kodut9tcF04eooWFPWVZW+mqr2VKUk5Nd0N8/ZGhq/gxOh5MsVUYupIXRqIJS6qEJVWL2LD6WLWdbCYfWy1fIqSRYv6IWBQUlCAfc2Hr6EGklAb1UklvK74FIJkJIEAGPtBKmvzmzK3C0cRKllXPQcfCDqry8HEVPTy9/ptWeiYh83ryKssWLFu2IcN5cgThBpTfqhYWlhaiorkRxeSHS0rKQnJyKKS6CT8+cwbmmU5g/rxIBTohQkNTEC0GhUtNnEHyhCCkqAzqdNvBCISzKLYVarkKA7NtAWWlr70BX9xAK8jKhVatgG/PisXWPhRv2NnxEc5m8XUZm0gjLWAqhzGzua3A7rMa0rEJwQT8USj3OnTmNnq4+8PkRzK9bgKngJCJU56GpKZgtI0g1aoigDsGQAINmG02wC3W1c2EwGMAjuxYIghAKhaQxP8QSOTleH458eJJcToh1ax6OvPDCpgsfN546Rdk4TnNoJTArnrrdRL8ubvRH/M8/v3S1OE9nTCDbFCWqri+Mz+2AiyxTJJFgcnISBUVF6Oy4AL1OjUSZBJ2dvXj/6DnaTwaxauk9KC4sovN8uNrbDBWJOS3dBGmilPYNMyZdPnjcXvTR3vPcT9aS6x29+qdX9zbSQBcJwwQP7tB+mdBVGk1S+vIVK6s8ronr+wbjp09NR2V1AYpKy2jjk9AoQSRrjSTWESQQOT6ttjhBiPr6RXC4gX8ePoT+q12kDwFZbTaGLA70XO1FwOOCl7LSO2hBbkYKud/84IMPrjpAbU0TDdRGsEaJhG5Hho+ZM8JaBMfrr+9rEUuUU8P9A4hEwrT50eCeCQSnqL8Lc1QaQgQDflrdIdqp5bBP+PH2ex/TnjGC5rPN0Gul2PDEWmx87mcoLimDIpHDwb9uh93c6eEJhN7ysuKIRikjk1iBhoa9TRaL5QKN204YZONjhr4rln1ERDARas43N22Vijx5haXzsP/NfUTEj/rFS9F8/iIy0w1ob+9GkAtSS+JGVoYJKToVcvOzybv8CLs9MGXm4vhx0oBYDF8gQmUlxMGD77fu3v1Gd6YpVfTI2jXatWtWGhbULXvF5fKcpTG7CHbE0GvNpBFEb8LSOn7+fFPHurUP5z359AbUzq9BdpYJW371IsiSoZInovbeOddXJsOkRBKt7pSfj3bnCPRiPRR6CWnAgcYTZ7Hj5a04duQwpJJ0yi6/hy45PTBs8W7btoNP8NH3fkzrggoytu43Fo2wYCUotZgtCc88+8zCNIN+SiASeGyjI87C/CL3iqV1IpGIE76x72/wut04e66T3CgB/gAPoTE7erv7SDvJ+NeH/8bSxXW4crkN7xw8ipWrlmP//rcP9fb2MS10EAYIQwQLpsuJlXVMzySxdr+s8zUQimkDrPR4PMySWcmxbLGsypctrs9atXpl5tw5FWlffHFFNGodxcCgFXOqS2nnV2NosB8isumfPr+RLLsj7PNz/NLychQVVWygjuA03cOML0soFP1/xpL6pkSuN44EHUHPJh699n9EosdS5TJpxvrH1xStW/dIrjpZq2pvvcQbHhpFwOfD40+swe7Xdg/85ve7OipKCp01tTUTu3btOYhpZ7LhNpvd3SRy4/mbZUaCL7UVjv4uiZJhvmxkhAhpOo3G9NCPVmY/uGJxhsGYqjEowp6ssvp9HBdmJcQslTWBrJTYRudCjHq43QS/6fk3X3PzSwZWaokEBUFN0GK6K2AZ1ETPYU98V6OTZ27kiYIJPIg7eBFxp29Rbr3XjcdhljlGimVJEQUjwibNssBIsKe+8E24o7cpd5PIrfdlTsdIJUTBvjMNBKKIWcixDvhdB++Wz7v2Lise8YhHPOLxvcd/AXHGvHJc0uXWAAAAAElFTkSuQmCC",
  Mu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAh6SURBVHgB7VhpbJPnHf/5PpL4ip2bHCUBkrByRBlQKAwCA9rRbUUb21RVSEWbOmlShdZP+zRp2od9mcSqgqaWQblLsrESChRYOZpAyEkuJ3FsiBPHV+z4im+/7/4vtjVUacIOh1TJP+knW/bz/p/n9/yv53mBHHLIIYcccsgBPDw7OBv8FDmwRCb1yeIlQYDFg1u4iJhHVH3wwf61O7dvelUklgpMpilOCCcwLeSFC1qsR4REKVH12ckj+4Ui3i8fTs3Um81WXnmpLsRjmbsTk8YjJ461dtGYADFMjCLpKQYvAIsRwonIb2nZUvfHP314eGJyuqmrewhNqxqg0igw53WhuLAQeVIxEvG4xWFzfNnbO3z1o4+O3qfngkgKihHjeI7CshXChWJ+fX3t0ra2z879/XhrrUQixesb1sIbDUDMF+LV2lcwpNejb0CPUDAEmVyMlSsbIBHFTOMd57/2zxpmvKGY5dowe8NgcLjIXigl7JnCLxsh3Fg5say7987hscmHLYGFECrLShEVxqGW5aO8SIuvb3+DK9c6MTA4gaqKYmi0WjQqh7CsRAVecTPmw2IsePzw241Wk3Ph4OnWm51k04tk+KW9lLWobJJdTCw8cuTjffkaza+/6RxEY0MdhAUSVBeVIRALo7qsAocOn0B5aTGkEgnKyxT4nvgGWNVbqNnwYzh9CZSUlkOQV4D65o0FKm3x3uUNtZsaG+uKWAHrsVkcCSSLSNYVL1OPcMYVS5dWNl67frPt42Oni5fX1WH3zhb0jA6D4UdRpS1BqVIBl9uJv/z1ExTIeXir6g4SK/6MSMSFOAVPUVEhbnZ0YdXKFfji0i3YnW7Me/0QCHm0EDa+bcvqLp/b3t7V1Xejs3NkAsmcimciKlOPcOPUf/jwwLsbN+/YoVCoePe6B9G8ZiVW1zdAU6CBTqkBjyeAVCzCnj0/xMrYIcjX/g1unxvBhSj4PBYm8yyUCgUuX7sLhsejvBGRyCg2b2zC++/9lB/0OCvHBnq258nk+8qrKm4bjdNcDmWUP5kK4SpVYTAYKn3jjW3ba2pqBa+/9n3cu9+NMYMRdTXVkMlkYFnaV2otUdMhhGS7gIIKzMxY8RoVg/v9emi1Gly+fhdymQQ2m4vE8bBn9xZs3fQqhvv7cfXSRUxOe8hDfIm2UBUZGjF207wLxMTTFshHFnC4fDG73e5nmDCYRAi7Wn6AzeubceHiJUryOxCJ+FSlAL+5BxVr9mHO5ce6dc0403oVK5Ytg8e7ALk8D9EYiyVlxdiyqQmbN6zGo0kDvmq/QN6LkzgBPJ4QwsGQkqZUpDbxqchUCFdJYhMTJmckEg/GmeQpJBLxQ0zTvLvvbdRWV+HT46dgfnAUitp3HodSHeVRMBjFz/b+BHqDGRNGK4RCIT0jgkajwp6dG+GwzqL9/GmE4gJaTJxCkwe5VEC2I1xxkWS6xmyEcOXRM26YGZNJZOALhAiHAhQG9EckhIqyQvz2vf2QszZ8+q9hzFjM0KiUqKyseZwXXl8AdocHKpUaDFn73W9+hXm3Fzfa/4mFMINCtRQSqRQadQE1UyniDD+ELJCpEDYlZP7gwd9ft83OBMQiMSSyPMoLPoVZhEYwiNMolTSE9w8cQHdvP46eOotZqxVxivDiYh10WiWikRje+cWbSFC5No4+gMFgQkW5hnLNCW6DWDIil0swPWN/hGSiZ9T5sz00CqPRqCQeCxfUL69cqtUtETCJGHh8Hi2WIS1xMPO3wMjWoKl5PXmpDCdOf45/X7qO/DwJ/L4gidHg52/vhm16Cu2tJ1FSooN9zgsRHWm45BfxGEjk8sCN2/1naD4jt3nIINmzFfK4DHb39Ps7Ou8Hly2tLF1SVUUdQ/B4EQKRFOyCCTyBDgKZBjKpEC1bt1JzFKGzswc+/wJ+tLsFSkkc969cwOycE0qVAn1Dk6heooXN7qcVM/AHogPGKetXNNUU0Y8MvJKNkPQ9gzv0hW02u+/EybOzE/qxRE1NeWFRcZGY5YKfmmPQZYS0sBEJ8lY46EMdnb92tGylZunGm7u2YnKwA2PjQ9DptJi2WBHwzSNOIeV0ByEQCJgRg/msPxDqo3msSDbFpyJbj3BC4injPqJHPzZuP/qPk9MPTSa2uqpEXVTVJPY+OAzlsr0kPUEdPZQsCnw+1jU3Yc4yilmzHtNmCzS6QoyOTqJzwIyaMjV84Si3W/3DY+aLZJvr7OmG+NyFpMVEU2I8RDfH4RG99dixM9OGcSNTU8aqNLpasUimAp8vpoIQQzAwB4/zERxTw5i3WRCMcJYS+PI/fTDOuKjkSulkwDju9k0cZ1k8oH+nkbzLZHTmWuwNMe0ZrkT6U2JcLMu6Rkf1tnOXx+2lzL2iFc27FUKxjIqBgEouCyE1zLwCNe7cuYvych0mjVOIRUPwhRJY8IfnJqbspxIJhuvmhpTNjLzxLEI4cDuVSE0WfEKQmxbtuXLPPtN69qy3srpSXVdXm8edTqVyNWIsVa+5h4jG4+jtHUIoHES+mBcwzDg+j0TjHTRshGhHstxnfOl6FiHfFpQONy53uPvFvMcfcrW1fWGddzuEq1c16GQyucDjtMBiGiFPRNHdN4xHlnl2xGhvC4Zjt+iZQaIFyZB6asl93kK+LSj2hCCuB3h6ewcd585fcOrUeaoV9cuVD7o6qJkKodeboo65hRGb23eBxg3gf+U2KxEcnsfroP9nl9skGVFNLCfWEuteqals2LZ5/XKZhC91zE7Hz7V3fEK/9xDHkQzNKBaBFyUkjfQro3yilliGpCgdkqdabuFc9zYRnUjmxaLu7i9aSHoOThB3kuUEKVOfnMe4qseFnzf1fdFvVF6GkCfn4gRxnhClvqdzKv3S4TuLl7mROeSQQw45PH/8F8F1p+hN8kcKAAAAAElFTkSuQmCC",
  Du =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVoSURBVHgB7VbLb1RVHP7Ofc9M6ftBH9iCtNMHSlsBbQOGhqioCSYiTYwL17LRBVsj8R9woe7YuDJpjSQmRBYGq+UhArYYwD4pLZ12hnl3OnPf9/i7RRN3TIMLTe6XnJl7z733nO87v+93fgcIECBAgAABAgQIECDA/wwM2wS3E0PgFSZkyaE7A/CKQEinRyVqLjDB/ffOnvXbUf73d+Oj4zg1duofI008Ye6jHmPMQ5mQsA1wnu778fvxCzPzK7IW0rhWEfLyqYKrapory7KuSLItyYKrRVReuKXwu78sW30vtWNzQ+cT6ZxhnvtC1SoFkXOP1kEUOQQmiCJ1CDwUVlg4HOKyLDDOGZ7vn71IU35ULrdtCXHdQn8ql63pH9wHxzGh6w4RkuF5HP7k9IdCqYSr16ZhbA5hcWEdCzMx7KiLUCQVMM9APp+GIAhkBdGXgWw2j4qQSn1syx+MWlE3EY5ICuf8DEXFKYfbtoSsPlw4ubujC+nMOvqe6yQBEgzLQEjT4LkuZDWCzz/7CjU1ldA9FcWcgcRSASOjTZAkBstQ0DcYhaYomPzpOgwivHNnPRLJFI0uItrTgfqGWrS2NWPp/v1WWpZD9OBqOdwElAnOH1UkYvED4QpgeHgAtdU1uHDhEj795Euc/+YSGhobcO3KDVi2BVXWwB2G2oYdaGyqxp2Jh6ioimD61h207W7Es73t2DcQhRlRML1OEaN33hk9jjdPHMGLw3NoatKgqbKSTc6dKJdf2UIA83A6lW1taWkEIxvZloP52RgGBvZDN4pkCQHxeAbcE5BKbkBSZCiagM6DTYi+XAeXDCIwFfH1DDzHRU80inyxAJVJ+OHmFI3nwrU8cHcJkvwt6uobkcqk3yJ7yeWwK9taxezaUcPQBVGQkc2lySoKPjg9ith6El1de+C4NlnNJa9z8r0JBR56BzvQuKuaxHkYE2YpyWRolA8u2TCRTuL0e29j8vo0Xj82hGT6Eaoawogo7yNUeQbNLcdw9cri3s5o4SDKsFdZEaFVkZaWV4+3tu9CqaQjmTGxvPKIVtaBSJEoFDaRy23ghQO9SKeLsIoOJOqXVNn/diuJZVWilVbQ3t5GmwJDLp/DZqmIvu49JNRFY2szYrEEfp2ax8zMh1h8kPEXS4rHFk6Ww7HMiKT611bX+xaW1rC6vAYuMqiUsJZhbl3naCe6eyeD6poqtLTVYWpyFY1hGTLZS9ddhEMSkXfQ09OHWzemyIa+QCCxloZCkZUkTtdxyi+HEj+DbF6FaduIyCrZdO0NzmMfM9Zaemohrp0aWH6wLMWWU7g/vwJZkxHWIoiEFPx2e5G2YgdV1TuwQVEJhcPojXbDizswDQtCicMxGFlKxoM/lrGUv0ffVSCT9t8NUe64ME0LtXW00+nmVvPIpvX1tdjMF7CRzUf39Q8PEo3LTy3k/Ph3Lc+0t2NvZxcEEVt1wPeLX9iGjuwHlTSQkx7XBqoH87cNXDmfw8Wxy0TK8XdWGDyPltZajJx6BZbpggvsse3gW49TjaHySJaDPzaNS1lPTzzqd9jd6cnef0WITuUgnlhJKOQVf26/AFKh2iLC4f511GDMF0Z9PJOEt77B2Vwsy0obnhAOS7g3l2BWWOITP5Ot/MMHI+30K/rEBb/G+7WQ7mloX5ivySUdru1dGnm16+sncSxLyK49h86NDO4dc7MFVaQjhaZxXiTXk3UE0RSFUIgx23ZFk5lMtEP25ORNe3Hhd/Hku6/JqgqZWRpr65iVol1VVm2zLOZ1Q3RsXZYkWXQNg/T4xxJbdAxTsixLsCx9axOybUcIV9ZOdXcfLiBAgAABAgQIECBAgAAB/qP4EwN/ep37GBX8AAAAAElFTkSuQmCC",
  Vu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAuOSURBVHgB7VhpbFxnFT1vnXlv9s32eHc2u7aTpkkTx0kaJVEUiiJa0iQVKohFAipoUcUfxD8UgViKoAJVIKQiCi0CkRao+qMJVlKFQtamjRNnqxM73sbLeMazvn3hvin8QYkb3IKE5CtZXuYt995z7jn3M7Acy7Ecy7Ecy7Ec4PBfjkOHDnERIdJoqkqPC2fthnXr1mvFYmfEH+YqhprFRxQMPkQc2rMnksmVVqum0lCtKCkTRqurak0mYzbbitsiiXxLEoycU1WhPxwDL3LYtGM7VNvE2aEh1Hd3nw2lQr+fK5qlaCjBcn5/4dkfPfsKlhD8vV64qm3VA7lCbsvnRX7gLxz3PcVld58ffCes6QYvCAIoYcQdG+2JJDJuAI/s34JKpYhYPIxr14fxyQOP4dJ77yEWTSAxPwlTCsG+eqVvtm1F32cOPoZ3XnkFTf198HPCZzXbfAn/YdwTIjt37gxeOHNulGOZJA/Gshyb13QLHZKAjXV1aA6H0LKpD2t6HwZvCJA2yahvSSMcZpGZmMG506exc89e5EsluJYDQR9H65peDPz2N0gE7sPlN16Hns3BYFy8OXIbs7YzpkaTp4vzs7mFUunpe8nxnmYkCP/WudzcV13HgQuXBc9gSzyKvQ0NCG/owkK6Hts+8SkMXX4X6dYI5LiNG0MXoFRsFIsZOPSEUmEBIk/I1SVx5sRprO1bAVNMQ5NF1D2wDo1b+3GbMTE+eRubmtPRc7fGennD3SyHo6aqKW99JIVYmvY6y7J1DMPAsS08uXoF9jxxEAd++F2Yfj/GpmfASxwaVkSQWtOC8cwc/IKCvv4NSIRtdN53P3LlKrJKGSvaOmAJMr755FPYQclv2LQd7Z3rYULFuVdfw8DVUTSBxfWFMgIBCYqiPxiLJqtVtXzuQxUSC4d/J8LZbVo6eJbDyrCML3zxy7AaU0Sbq9jSvxYTI9fwlWe+ASqWEChh+7YdePlXf0Jrh4ZU8yEUc0MQ+BR81IhbI8NoSTcgKlQwOXoTPVv2YPjGIFas6kTv1j4kKfkLfz8LRfSBJ+RN05itGsoWy7J++qEKiQSk5xzTipQsE5vXdWMnJdv1+Hasvn8dHtq+Ace+80v07lmLhZyG1hUdEAkhVdORbEygMFvEqs4I/vr8CwitTMLnA27dGIFeVTA2NIi2cA9QH0Q4FMK5M6fR3XM/ZgsqVj/QheMDJ4iSDkSGj2qqFgsHoxOqob57tzzZxYrYs3Fbq2uaLbqpg3Vd9MbjiG/sg803oWPNWuhMDPOj45CCvThx9A/wyVFC5zY91ES6XsKmnXtx+sQZrD7wabz4i1/D70uhrbMHJieio28f/B09yI3k8dbASVTVIjKZcaxe0YBjR4/i20/vh8twiCUjcOndhmvtwlIR8fm4hxXdOGiYJjyB279uA7p37cPRs6fx4OZtGBwdxfibJ0liI2jvfQA3bw0jFPETVcZw8+0LaGpOI9XRibGZSWzt24YiIbHxwX7EU3FIURlta5pgXbfgWyhg+s1BIB3H1Wvn8c7FEVw9eRG3K2XEQ2EqUoHt4phpmQNYCiKpRLTf5xcQCsiQfAIiDS2Ysn3YuuNj+PkLP8bm3vV44rmfID86iWsvvwrZBZpaVqJnbRe27DuIbFEjagCiA1yeGkf32vWAbcBSVQzduI66ZD34iomu/Q+js3MXNKWAjkgrtikK/jY7h0goAMe1EZD96O7qPoalItJS3/jUQqWwxjZtdNTVw7F4rE/64CvNonh7BDNXbsBayHsOjZaHtqBULqFjdTdK1Pmunl5EoynMzc7DKBXQ1dIEOdqIK5cuYGxsHJ2NbdBcE/qEDoMAd6ZtlHzjOP+zF/ESIc1wtNCQ54hCgIRCwHR25pSiaRfuluuihriuc9UpGo/+Kjl0T10a86TzKb+MIHE2FgzAyE6SpdhoZCRwrAgfGWOsvQ1t/ZuoRQzefusa9j3+cfIeBvOTo+AFHcFQE8QAddovgomFoRydgbijDq99/yUcP/9nXCqXSWBkUisTzfX1aOR8uJTLY8FQ/lgulw8sqZD72ttOcQzfn4zGwRbzECJhBGIxaJoJh1zYtmzqegR2ZQFsVQVLv8dDQbSnGyHRk+czxPH6CBYUGa0NDgytCl3RUZnNIkP0GSPkdFHAJfIhKSBCFoJQdYXeTLbruDAtC7samzEwkUFJrxYeefTR9iNHjhTvlOuiuxbDstVwMIS6eAI5vYqApmE+l4NNDm+YBpqbmsk3CuA5CUzQT6+3YfB+TM7loRsaCvkstAyNBfEcgw4ti2UCSiQeWVhHO9m8oWOikEdjIoGyaiC3MFdTqkQ0SjQtI0jIXKf9raxUPCkOHxs4/jlK645+suiwG7ZeEX0ihJAPcXqxq2skgzZcos21sTF4K8vKlSvBcg78Eq0aqRRa25vR6KlVXQpxGmaXPmNYl+gkkPwGESRKxlN1mCIkxqtVxGNx6JRsvpiDSdJEizFEMkOO8aNIxQzdvEnzwpLgBN74+jNfe/5uuS6KiKY6pfn5LHRTA2hJNGnLDZLiuIy3bjGIBIPQCaUgcd4wDBQKBUxlMlggAfA47tHDR2pXKhESfoYeYYLhOZQJRVo9IJNDzmWzkGQZ8ThRVtdhGRYWqIDZwnytAB/Lk2KKsFh27vDhw86SCuEYZkKlxBPJBMkgA0O3kaVdi2VqHQIzQnpvO5CpuwkSgALPU1ctohJ11ibkSI4T1F0hJqBMnsBREVWlWltlZELIJrnyijBIUaoqIUc3eO/LUSE+XgRLjUgm47X9TnHsG4vluii1pJh0xdt3LeqkRENskAz7fDTFHhpyABfzeUjE35GZacxQogWSX6NYRD1pSEKSEaLVg1W1WmGeF0VofemJxLCaFmgaE0Lapu9WrWASFSrCoDnnIfO+mi+0dTRT8S6mc1nUp9PDSy6krrF5jHMdmLQ7efMgCCxRCISAiKifwzBRSU43QSMa9dIM9VNCm6mACKEQDITBCBwUmgmLnkG30XkDGFrI4bKuoraEEkJ+Kk6iL4c+M2n+eIEUi37u7FoJy3QxNZdDIhQldNjCYrkuSq325vYbM9eH3RCtoTHqbIUoYVCyKqmNJ6+y34eZiXHqrImLRAmHCiBJIgR16GqZ6EgXOx6i1HkqxqLrWJah5MXa/pSmGcvTZ5WKVlM/ryi2VkQHsjMVZOYzaGmmbWJqCitl2fkWNf6w94I7xKLOPjg4qKaSyS+lwhSk+TzNwHuZSYQjMp0eeJoDC1n6uyzwaKHOa6RQnht7g88SfcAKni+SM3NEER4iDbdAaHr2lfZLmNHfl/M8nVWidH9AImQIedNwkKX9qyedwnS+CJfmcKMknYnw7MRuOpmc9Izm32JRanmhmvoph1aEjCzBItr4JR5Vkk3XtBCWAqCjKFIkuxXyD4KfsuYgUEIc7WjeeYIlpWMFsUYjb8htbzhoQ8hQEZQTmauFejJVHzWD1nVwHIc8UbapPo5CVadrbToaiBjOzmwjKAJX72LiH1iIJPhfqHiGxPEwKJGQHKpRwGAs3J7OkLrwJLfziAaCNMwSBFI09p/vYmuNI84TrVwivk0+wdJQuxDIMI2aT8h0D08yq9O24J1A6QCFaCxE17DIkwlHw1FSvComSbuq4fDUEfLXO+X5gQer+ULhVnNzk2bZdgM926hWNdWkqTT0CqepFsdTJ5OJGMaJxy0kw3HBD3I+GJSQJ59eA2uzQp0VxPcpliO6FOgkGaLTYEDy1eaF8TYyaoJLq48shqAZ1ZrqzdGWYJNhBoORHxyfnBi8W55L/b8Ws3fvXpmokrp88eImDtbuaChQx1rOGsEn1CuKKrEcy7msyNoOWTUh4ic5KquaNju3UBA4xohGo7oo8haddbwaOEVVad0FaziGHZRl0hVuvpjXJiumclGQ/VOKoryB/1W47zfmX1/LsRzLsRzLsRz/N/EPJSdONLeAcqEAAAAASUVORK5CYII=",
  Bu =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAsCAYAAAAn4+taAAAACXBIWXMAAC4jAAAuIwF4pT92AAAGGGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0wMi0yN1QyMToxNzo0MFoiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTAyLTI3VDIxOjI2OjUzWiIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNC0wMi0yN1QyMToyNjo1M1oiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmJlYTdkZDkzLTZiNmQtZmE0OS05YTRlLWM4YTYzYTU0ZTlmZSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjgyZDcyMWNmLWJlZjAtNjY0YS1hNTVlLWNjMTdjZDBlNzBiMyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhhMWQ2ZjY1LWEyNjEtZmE0Yy05NWU1LThmZDQ2MDIxN2U3NyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGExZDZmNjUtYTI2MS1mYTRjLTk1ZTUtOGZkNDYwMjE3ZTc3IiBzdEV2dDp3aGVuPSIyMDI0LTAyLTI3VDIxOjE3OjQwWiIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjb252ZXJ0ZWQiIHN0RXZ0OnBhcmFtZXRlcnM9ImZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmJlYTdkZDkzLTZiNmQtZmE0OS05YTRlLWM4YTYzYTU0ZTlmZSIgc3RFdnQ6d2hlbj0iMjAyNC0wMi0yN1QyMToyNjo1M1oiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7uusiUAAAIjklEQVRo3tVa+U9UVxQ2Ro0SNYSMEIKGIDIaaxqUEhaNpBpJTUX5AWnFBdkCFEEWxVYRrCaGpagpKEvZ1xmGdRZmZxHcTUzc/gDj/2G/MznXXMeRRd5gO8nJMG/ue3O+e7bvnMuKDx8+rHCXr3ytZFnFsgayFuLDsl4ScW0trxP3iGd4fHnS9aPOCgCRAayRlPaF+EFUEH9IgCT+fN2P1wlwa+YC5C0gMgCx876sICkbBAmGhELCIGpJwvh6CGQLr1dJoNZ6AuQNIO4W8OVdDmLlSNldkN2QSEgUJFqSKL6+m9ep+b4gfo6vBwspDkQGsZ7dI5AV2cnKkbJxaWlp6VVVVVc7OjpuDw4Otuj1+m6DwdAL6RoeHm7q6+uruXfv3h8lJSWn+L6d/JxAfu56GYySQISpZRBB7CrhkNjg4OAjN27cqBgYGOg2mUx6G154twKEeXR0dHxkZMQ0NjZmMhqNJvpqcnLSDBk2m83/4FWyZ8+eGH5eoGQZRYF4skQQuwXt5v5r1679DmU1VqvVjndrf3//eHd3t5mkq6vro4hrvb29Jq1Wq4d1xgBK/+jRI+PMzExrc3NzOlvGX7KKIkDcQahkEImJiclQrG5iYsKCnbeQgqRwe3u7ra2tzY6ddrhLS0uLA9/ZaB1czKjT6UbhcroHDx7oXr58OfD06dOKu3fvRrFVXMG/VCCeQFCm2QGJIEtAob8eP348MzQ0pAcIAylHSrLSTuzwRFNT0ydC1wUYsg5ZBi43CMv04lmd7969M7x9+7ZUaSAeQZw4ceLX5OTkTPydVF9f34pYcCI2bLCEhSxBipLCAowQvkYg7EgE1p6eHhPuG4M1B6anp7WvXr0ahJtVFBcXfycBWZJrCWv4SDFBICI3bdoUj93T2O12Y0RERB6upefn59+BQlb4/DQs42DXcrmXJATURgDIEuRWBAKbMDo7O2t48uRJP9yskOuMYjEirLGRs4ia8/9B7Ogdh8NhhV+bobglPT29BtezAbDg5s2b7XAVKwJ+Gko5EfQ2AKOdJzFTEoDyrgw2Pj5umpqaouw1gOdU5ebmHuHfCeLNW3LWkq2h4ixCKfbH7OzsIkqrUNaIXaUdtUEJ561bt7ojIyPJrzP9/f1zYKHahoaGPihuAKBxrKE0bEPqNcMCY9gELdUTuNvVjIyMRNz3PafeICXriLs1yKVi/fz8EjV4YbftnZ2d4+QiFBPYaQuCdQK7bKmtrW05cOBACdafXr16der27dtz9+3bV3j48OGSlJSU0szMzFK85wI0KR/L6XsHU5oApSu7HBsh/GMHCwoKyuAOE6S4CGgRtGQdWMmEnbY4nc5JZK9eADmD+6hyn1KpVGfxfhxyDBIP2SeB2OKBnijCtVaxaQPYZ4l2/AzFiV44uT64shGBoQDm4NXDdaww2iB2PB/3pF66dKkW1iMrGmCxobKysnIJSPhc7rRU9iu7VRATu/179+7NQK2gau0qclJNcAGBBSgOLFQTECPZlMnwnRbxMAkANsSJi57AWmYAbYZ7nWQCuZPdSnGLrOTc7cc/QLt26OLFi9cRrBOUQskSjY2NkwIIXeM4ccTHx1/F+ixcH8TnKUFJmJZQ4OsJDGQIayrWrVsngwnwAGZJQES2CuUK/hOCuAE7S0DsBICAyK5Fqbaurk6DtTlgtPcAYoZiR6olNlEAyQURS2NIvUYQxpbLly+fYcsLjrXRrS9ZEhB/9t8oER9Q1sWTBBCKExHsADmZlJR0E2vzsPtkIYeo7rReVHVaL3MsWMbw8OHDIdz/Z0JCQjQHvsrdKl8DxFOgJyBgB+D/LtInuZWT+ZKF6olarb4QHR1djnVTIiHQWvQd0yTCiiKuiGACzAisonv27NnI8+fPqU9JQoYLZKsoDuQYCtswxO4GxBUf+HGqK8YNGzacS01NvU1AWltbHaQ0iuKUACKDIaCCMOKlA93pfvHiRc/79+9H3rx5k79582Y/wbMUBQJlh+YDgsDNWywQQRjRi2hfv36tJQqPZ8VIcaKsa+FH53Wt0NDQktjY2HK4y2euRYBkEBwn1FgN379/3wD63oe4yvHUVC17sIPaV2Ltb6Qk/N8pgl2i8B97EJG5iPUiRupAXQRh/KzNXfb0i75ES+kXVKYe7jIrp18ummYO8FHwTiMsMQwXvMJURT1XhV/OgmiWCyLW6Kgg0nWygKgf1KPT0AGvDgA+JdGUwLloimIUBWk1faEUBSw5y52i4F4jUXiqG7BCzdatWw+xJbzGtb5IGrHzn5BG0XvLpJHYL7KbjknjabSs1XCxflw3ApAOzVMxMWl+pqjmAXPxrKUCkd3LRePz8vKuUG9OSrvTeHIdIoY0xyIaj2s9Pj4+gsanoC6kUX9PGZCBxLqxXxV7gaI03mNjRVbBbvd/qbEi16uurm6Ki4srImugrpxFSs6mz4idYmqsYJFSZLfs8PDwY2yVcLa6VxqrL7W6cUiThdTqom6IVtcKEJPU6m7bto0GB5khISHnRKtL7katLnWPUqs7incNrjXS2NSbra4nq4RxKv5k+AArmLOyslzDh+Dg4OLKysouAicNH+zuwwdyQXz/yfABn2uKioqOKT18mHccZLFYeqkWiHHQ+fPn7/AgYpoy22LGQbDOiBgH4XOB0uOgOQd0x48f/8XDgM7qPqCTh3OLGdChR9ml1IBurpGpehlGpheUHJnOO4k/evRoEpT/m9rXeYbYTk9DbEFZaIgN9xoki8DFroMS/aCkRRZ8rFBRUXEJAav92mMFdIl6AGmDu2V561hhwQc9YWFhCXTQo9FoOsGlTIs96ImJidnr7YOexRy9UeGMy8nJyUJxLKejN7hOKwB00dEbQHUCUDMy1m2qIYWFhSdROCOX8+jNW4ehO77FYehCj6e3/B+Op731DwNrv8U/DPyn/oXjX/4lsLQOjnaaAAAADmVYSWZNTQAqAAAACAAAAAAAAADSU5MAAAAASUVORK5CYII=";
var wA = Object.defineProperty,
  AA = (e, t, n) =>
    t in e
      ? wA(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  sa = (e, t, n) => (AA(e, typeof t != "symbol" ? t + "" : t, n), n);
const pl = (e, t) =>
    typeof getComputedStyle < "u"
      ? getComputedStyle(e, null).getPropertyValue(t)
      : e.style.getPropertyValue(t),
  SA = (e) => pl(e, "overflow") + pl(e, "overflow-y") + pl(e, "overflow-x"),
  kA = (e) => {
    if (!(e instanceof HTMLElement)) return window;
    let t = e;
    for (
      ;
      t &&
      !(t === document.body || t === document.documentElement || !t.parentNode);

    ) {
      if (/(scroll|auto)/.test(SA(t))) return t;
      t = t.parentNode;
    }
    return window;
  };
class vf extends w.Component {
  constructor(t) {
    super(t),
      sa(this, "elementObserver"),
      sa(this, "wrapper"),
      sa(this, "lazyLoadHandler", (n) => {
        var r, i;
        const { onContentVisible: s } = this.props,
          [a] = n,
          { isIntersecting: o } = a;
        if (o) {
          this.setState({ visible: !0 }, () => {
            s && s();
          });
          const l = (r = this.wrapper) == null ? void 0 : r.current;
          l &&
            l instanceof HTMLElement &&
            ((i = this.elementObserver) == null || i.unobserve(l));
        }
      }),
      (this.elementObserver = null),
      (this.wrapper = Zi.createRef()),
      (this.state = { visible: !1 });
  }
  componentDidMount() {
    var t;
    this.getEventNode();
    const { offset: n, threshold: r } = this.props,
      i = {
        rootMargin: typeof n == "number" ? `${n}px` : n || "0px",
        threshold: r || 0,
      };
    this.elementObserver = new IntersectionObserver(this.lazyLoadHandler, i);
    const s = (t = this.wrapper) == null ? void 0 : t.current;
    s instanceof HTMLElement && this.elementObserver.observe(s);
  }
  shouldComponentUpdate(t, n) {
    return n.visible;
  }
  componentWillUnmount() {
    var t, n;
    const r = (t = this.wrapper) == null ? void 0 : t.current;
    r &&
      r instanceof HTMLElement &&
      ((n = this.elementObserver) == null || n.unobserve(r));
  }
  getEventNode() {
    var t;
    return kA((t = this.wrapper) == null ? void 0 : t.current);
  }
  render() {
    const {
        children: t,
        className: n,
        height: r,
        width: i,
        elementType: s,
      } = this.props,
      { visible: a } = this.state,
      o = { height: r, width: i },
      l = `LazyLoad${a ? " is-visible" : ""}${n ? ` ${n}` : ""}`;
    return w.createElement(
      s || "div",
      { className: l, style: o, ref: this.wrapper },
      a && w.Children.only(t)
    );
  }
}
sa(vf, "defaultProps", {
  elementType: "div",
  className: "",
  offset: 0,
  threshold: 0,
  width: null,
  onContentVisible: null,
  height: null,
});
const us = (e) => {
    const [t, n] = w.useState(null);
    return (
      w.useEffect(() => {
        (async () => {
          console.log(JSON.stringify(e.type));
          const i = typeof e.type == "string" ? e.type : e.type.name;
          let s;
          i === "loosenotes"
            ? (s = Ou)
            : i === "rollofcash"
            ? (s = Mu)
            : i === "markedbills"
            ? (s = Du)
            : i === "inkedmoneybag"
            ? (s = Vu)
            : i === "evc"
            ? (s = Bu)
            : (s = await Z("currencyImage", i)),
            n(s);
        })();
      }, [e.type]),
      f.jsxs(f.Fragment, {
        children: [BA(e.price), "x", t && f.jsx("img", { src: t })],
      })
    );
  },
  CA = (e) =>
    e.type !== "money"
      ? f.jsx("div", { className: "price", children: f.jsx(us, { ...e }) })
      : f.jsx("div", { className: "price", children: _r(e.price) }),
  dp = (e) => {
    const t = Date.now(),
      n = e - t;
    if (n < 0) return "Expired";
    const r = Math.floor(n / (1e3 * 60 * 60)),
      i = Math.floor((n % (1e3 * 60 * 60)) / (1e3 * 60)),
      s = Math.floor((n % (1e3 * 60)) / 1e3);
    return `${r.toString().padStart(2, "0")}:${i
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  },
  bA = {
    cancelListing: "Cancel Listing",
    buy: "BUY",
    cancelBuyOrder: "Cancel Buy Order",
    sell: "SELL",
  };
function Fu(
  e = {
    id: 0,
    image: "",
    name: "",
    condition: "",
    type: "offer",
    stock: 0,
    seller: "",
    price: 0,
    title: "",
    currencyType: "money",
    expiry: 0,
  }
) {
  const { account: t } = rr(),
    [n, r] = w.useState(dp(e.expiry)),
    [i, s] = w.useState("buy"),
    [a, o] = w.useState(!0);
  return (
    w.useEffect(() => {
      const l =
        e.type === "offer"
          ? e.seller === t.username
            ? "cancelListing"
            : "buy"
          : e.seller === t.username
          ? "cancelBuyOrder"
          : "sell";
      if ((s(l), l == "buy" || l == "sell")) o(!0);
      else {
        const c = (new Date(e.expiry).getTime() - new Date().getTime()) / 1e3;
        o(c > 60);
      }
      const u = setInterval(() => {
        r(dp(e.expiry));
      }, 1e3);
      return () => clearInterval(u);
    }, [e.expiry]),
    f.jsxs("div", {
      className: "listingItem",
      children: [
        f.jsxs("div", {
          className: "infoContainer",
          children: [
            f.jsx(vf, {
              width: 100,
              height: 100,
              children: f.jsx("img", { src: e.image, className: "itemImage" }),
            }),
            f.jsxs("div", {
              className: "itemData",
              children: [
                f.jsxs("div", {
                  className: "listingName",
                  children: [e.name, " ", e.title ? `(${e.title})` : ""],
                }),
                f.jsxs("div", {
                  className: "data",
                  children: [
                    f.jsxs("div", {
                      className: "info",
                      children: [
                        f.jsx("span", {
                          className: "label",
                          children: "Condition:",
                        }),
                        f.jsx("span", {
                          className: "content",
                          children: e.condition,
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "info",
                      children: [
                        f.jsxs("span", {
                          className: "label",
                          children: [
                            e.type === "offer" ? "Stock" : "Buying",
                            ":",
                          ],
                        }),
                        f.jsx("span", {
                          className: "content",
                          style: { color: e.stock === 0 ? "#A5A74E" : "" },
                          children: e.stock === 0 ? "Reserved" : `${e.stock}x`,
                        }),
                      ],
                    }),
                    e.type === "offer" &&
                      f.jsxs("div", {
                        className: "info",
                        children: [
                          f.jsx("span", {
                            className: "label",
                            children: "Seller:",
                          }),
                          f.jsx("span", {
                            className: "content limited",
                            style: {
                              textOverflow: "ellipsis",
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              maxWidth: 92,
                            },
                            children: e.seller,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "pricingBuyContainer",
          children: [
            f.jsxs("div", {
              className: "pricingContainer",
              children: [
                f.jsx(CA, { type: e.currencyType, price: e.price }),
                f.jsx("div", { className: "time", children: n }),
              ],
            }),
            f.jsx("div", {
              className: `button blackmarket ${a ? "" : "disabled"}`,
              style: {
                paddingLeft: 20,
                paddingRight: 20,
                textTransform: "unset",
              },
              onClick: () => {
                if (a) {
                  if (e.seller && e.seller === t.username) {
                    Z("cancelListing", { postId: e.id });
                    return;
                  }
                  e.setPrompt && e.setPrompt(e.id);
                }
              },
              children: bA[i],
            }),
          ],
        }),
      ],
    })
  );
}
const jA = (e) =>
    f.jsxs("div", {
      className: "promptHeader",
      children: [
        f.jsx("div", {
          className: "promptLabel",
          children:
            e.data.type === "offer"
              ? `Buy ${e.data.name}`
              : `Sell ${e.data.name}`,
        }),
        f.jsx("div", {
          className: "promptClose",
          onClick: () => {
            e.setPrompt(0);
          },
          children: f.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "15",
            height: "15",
            viewBox: "0 0 15 15",
            fill: "none",
            children: f.jsxs("g", {
              opacity: "0.27",
              children: [
                f.jsx("rect", {
                  x: "14.1421",
                  width: "1",
                  height: "20",
                  rx: "0.5",
                  transform: "rotate(45 14.1421 0)",
                  fill: "white",
                }),
                f.jsx("rect", {
                  x: "-0.150879",
                  y: "0.710938",
                  width: "1",
                  height: "20",
                  rx: "0.5",
                  transform: "rotate(-45 -0.150879 0.710938)",
                  fill: "white",
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  EA = (e) =>
    e.type !== "money"
      ? f.jsx("div", {
          className: "value",
          style: { marginTop: -4 },
          children: f.jsx(us, { ...e }),
        })
      : f.jsx("div", { className: "value", children: _r(e.price) }),
  TA = (e) =>
    e.currency !== "money"
      ? f.jsxs("div", {
          className: `button ${e.price === 0 ? "disabled" : ""}`,
          onClick: e.submit,
          style: { paddingTop: 0, paddingBottom: 0 },
          children: [
            e.type === "offer" ? "BUY" : "SELL",
            " - ",
            f.jsx(us, { type: e.currency, price: e.price }),
          ],
        })
      : f.jsxs("div", {
          onClick: e.submit,
          className: `button ${e.price === 0 ? "disabled" : ""}`,
          children: [e.type === "offer" ? "BUY" : "SELL", "  - ", _r(e.price)],
        }),
  PA = (e) => {
    const { setPostListing: t, setPostOrder: n } = rr(),
      [r, i] = w.useState("0"),
      [s, a] = w.useState(0);
    w.useEffect(() => {
      const l = Number(r);
      a(l * e.data.price);
    }, [r]),
      w.useEffect(() => {
        i("1");
      }, [e.data.price]);
    const o = () => {
      e.data.price !== 0 &&
        Z("buyItem", { postId: e.id, amount: Number(r) }).then((l) => {
          l && (e.setPrompt(0), t(!1), n(!1));
        });
    };
    return f.jsxs("div", {
      className: "promptInfo",
      children: [
        f.jsxs("div", {
          className: "promptInside",
          children: [
            f.jsxs("div", {
              className: "promptImgQuality",
              children: [
                f.jsx("img", { src: e.data.image }),
                f.jsxs("div", {
                  className: "quality",
                  children: ["Quality: ", e.data.condition],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "promptQuantityPrice",
              children: [
                f.jsxs("div", {
                  className: "quantityContainer",
                  children: [
                    f.jsx("div", { className: "label", children: "Quantity" }),
                    f.jsx("input", {
                      type: "number",
                      value: r,
                      min: 1,
                      max: e.data.stock,
                      placeholder: "1",
                      onChange: (l) => {
                        i(l.target.value);
                      },
                    }),
                  ],
                }),
                f.jsx("div", {
                  className: "priceContainer",
                  children: f.jsxs("section", {
                    children: [
                      f.jsx("div", {
                        className: "label",
                        children: "Price Per Unit",
                      }),
                      f.jsx(EA, {
                        type: e.data.currencyType,
                        price: e.data.price,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
        f.jsxs("div", {
          className: "promptButtons",
          children: [
            f.jsx("div", {
              className: "button",
              onClick: () => {
                e.setPrompt(0);
              },
              children: "Cancel",
            }),
            f.jsx(TA, {
              type: e.data.type,
              currency: e.data.currencyType,
              price: s,
              submit: o,
            }),
          ],
        }),
      ],
    });
  };
function NA(e) {
  return f.jsx(Xe, {
    children:
      e.visible &&
      f.jsxs(K.div, {
        className: "blackmarketPrompt",
        initial: { scale: 0 },
        animate: { scale: 1, rotate: [0, 360] },
        exit: { scale: 0, rotate: [0, -180] },
        children: [f.jsx(jA, { ...e }), f.jsx(PA, { ...e })],
      }),
  });
}
const hp = (e) =>
  e.type !== "money"
    ? f.jsx("div", { className: "price", children: f.jsx(us, { ...e }) })
    : f.jsx("div", { className: "price", children: _r(e.price) });
function LA(e) {
  const [t, n] = w.useState("itemSelection"),
    [r, i] = w.useState(""),
    {
      account: s,
      postListing: a,
      setPostListing: o,
      postOrder: l,
      setPostOrder: u,
    } = rr(),
    c = () => {
      o(!1), u(!1);
    },
    [d, h] = w.useState([]);
  w.useEffect(() => {
    (!a && !l) ||
      Z(a ? "getSellableItems" : "getBlackmarketItems").then((T) => h(T));
  }, [a, l]);
  const [p, v] = w.useState([]);
  w.useEffect(() => {
    const T = yf(r).toLowerCase(),
      I = d.filter((L) => L.label.toLowerCase().search(T) > -1);
    v(I);
  }, [d, r]);
  const [y, S] = w.useState([]),
    [x, m] = w.useState([]),
    [g, A] = w.useState(0),
    [k, b] = w.useState();
  w.useEffect(() => {
    n("itemSelection"), A(0);
  }, [a, l]),
    w.useEffect(() => {
      if (g === 0) return;
      const T = p.find((I) => I.id === g);
      if (!T) {
        A(0), b(null);
        return;
      }
      b(T);
    }, [p, g]),
    w.useEffect(() => {
      if (!k) return;
      const T = e.listings,
        I = T.filter((D) => D.name === k.label && D.type === "request"),
        L = T.filter((D) => D.name === k.label && D.type === "offer");
      S(I), m(L);
    }, [k, e.listings]);
  const [C, j] = w.useState("money"),
    [E, N] = w.useState(!1),
    [R, V] = w.useState(1),
    [B, F] = w.useState(0),
    [G, z] = w.useState(1);
  w.useEffect(() => {
    k &&
      Z("calculatePostFee", {
        cost: {
          barter: C !== "money" && C !== "evc",
          item: { name: C, durability: k.durability },
          amount: Number(B),
        },
        amount: Number(R),
      }).then((T) => {
        z(T);
      });
  }, [k, R, C, B]);
  const _ = () => {
    k &&
      ((R > k.quantity && a) ||
        Z("createPost", {
          type: a ? "offer" : "request",
          item: k.item_id,
          quantity: Number(R),
          restrictions: {},
          cost: {
            type: C === "money" ? "money" : C === "evc" ? "evc" : "barter",
            item: C !== "money" && { name: C },
            amount: Number(B),
            barter: C !== "money" && C !== "evc",
          },
          condition: k.condition,
        }).then((T) => {
          T && c();
        }));
  };
  return f.jsx(Xe, {
    children:
      (a || l) &&
      f.jsxs(K.div, {
        className: "postListing",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        children: [
          f.jsxs("div", {
            className: "postListingHeader",
            children: [
              f.jsx("span", {
                children: a ? "Post Listing" : "Post Buy Order",
              }),
              f.jsx("div", {
                className: "postListingClose",
                onClick: c,
                children: f.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "15",
                  height: "15",
                  viewBox: "0 0 15 15",
                  fill: "none",
                  children: f.jsxs("g", {
                    opacity: "0.27",
                    children: [
                      f.jsx("rect", {
                        x: "14.1421",
                        width: "1",
                        height: "20",
                        rx: "0.5",
                        transform: "rotate(45 14.1421 0)",
                        fill: "white",
                      }),
                      f.jsx("rect", {
                        x: "-0.150879",
                        y: "0.710938",
                        width: "1",
                        height: "20",
                        rx: "0.5",
                        transform: "rotate(-45 -0.150879 0.710938)",
                        fill: "white",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          f.jsxs("div", {
            className: "postListingContainer",
            children: [
              t === "itemSelection" &&
                f.jsxs(f.Fragment, {
                  children: [
                    f.jsxs("div", {
                      className: "searchContainer",
                      children: [
                        f.jsx("span", {
                          children: l
                            ? "Search for an item you would like to post buy order"
                            : "Select item you would like to sell",
                        }),
                        f.jsx("input", {
                          className: "searchBar",
                          placeholder: "Search",
                          value: r,
                          onChange: (T) => {
                            i(T.target.value);
                          },
                        }),
                      ],
                    }),
                    f.jsx("div", {
                      className: "itemsContainer",
                      children: p.map((T) => {
                        const I = T.durability;
                        return f.jsxs(
                          "div",
                          {
                            onClick: () => {
                              A(T.id);
                            },
                            className: "item",
                            children: [
                              a &&
                                f.jsxs("div", {
                                  className: "durability",
                                  children: [
                                    " ",
                                    f.jsx("div", {
                                      className: "inside",
                                      style: {
                                        width: I > 5 ? `${I}%` : "100%",
                                        background:
                                          I > 50
                                            ? "#4E65A7"
                                            : I > 10
                                            ? "#A5A74E"
                                            : "#A74E4E",
                                      },
                                    }),
                                    " ",
                                  ],
                                }),
                              f.jsxs("div", {
                                className: "quantityWeight",
                                children: [
                                  a && `${T.quantity}x `,
                                  T.weight.toFixed(2),
                                ],
                              }),
                              f.jsx("div", {
                                className: "glow",
                                style: { opacity: g === T.id ? 1 : 0 },
                              }),
                              f.jsx(vf, {
                                children: f.jsx("img", { src: T.image }),
                              }),
                              f.jsx("div", {
                                className: "itemLabel",
                                children: T.label,
                              }),
                            ],
                          },
                          T.id
                        );
                      }),
                    }),
                    f.jsx("div", {
                      className: `button blackmarket ${
                        g > 0 ? "" : "disabled"
                      }`,
                      style: {
                        paddingLeft: 24,
                        paddingRight: 24,
                        width: "fit-content",
                        marginLeft: "auto",
                        marginTop: 8,
                        marginRight: 24,
                        marginBottom: 20,
                      },
                      onClick: () => {
                        g > 0 && n("itemListing");
                      },
                      children: "NEXT",
                    }),
                  ],
                }),
              t === "itemListing" &&
                f.jsxs(f.Fragment, {
                  children: [
                    f.jsxs("div", {
                      className: "listingContainer",
                      children: [
                        f.jsxs("div", {
                          className: "listingImageQuality",
                          children: [
                            f.jsx("img", { src: k?.image }),
                            f.jsxs("div", {
                              className: "listingQuality",
                              children: [
                                "Quality: ",
                                a ? k?.condition : "Used or Better",
                              ],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "listingColumn",
                          style: { marginLeft: 20 },
                          children: [
                            f.jsx("div", {
                              className: "columnLabel",
                              children: "Quantity",
                            }),
                            f.jsx("input", {
                              type: "number",
                              min: 1,
                              max: a ? k?.quantity : void 0,
                              value: R,
                              onChange: (T) => {
                                V(T.target.value);
                              },
                              defaultValue: k?.quantity,
                              placeholder: "1",
                              style: { width: 58 },
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "listingColumn",
                          style: { marginLeft: 10 },
                          children: [
                            f.jsx("div", {
                              className: "columnLabel",
                              children: "Currency",
                            }),
                            f.jsxs("div", {
                              className: "columnCurrency",
                              onClick: () => {
                                N(!E);
                              },
                              children: [
                                C === "money"
                                  ? f.jsx("span", { children: "$" })
                                  : f.jsx("img", {
                                      src:
                                        C === "loosenotes"
                                          ? Ou
                                          : C === "rollofcash"
                                          ? Mu
                                          : C === "markedbills"
                                          ? Du
                                          : C === "inkedmoneybag"
                                          ? Vu
                                          : Bu,
                                    }),
                                f.jsx("svg", {
                                  width: "20",
                                  height: "13",
                                  viewBox: "0 0 20 13",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: f.jsx("path", {
                                    d: "M2 2.5L10 10.5L18 2.5",
                                    stroke: "white",
                                    strokeWidth: "4",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                  }),
                                }),
                              ],
                            }),
                            f.jsx(Xe, {
                              children:
                                E &&
                                f.jsxs(K.div, {
                                  className: "currencyDropdown",
                                  initial: { opacity: 0 },
                                  transition: { timeConstant: 0.2 },
                                  animate: { opacity: 1 },
                                  exit: { opacity: 0, top: 120 },
                                  children: [
                                    f.jsx("div", {
                                      className: "dropdownItem textOnly",
                                      onClick: () => {
                                        N(!1), j("money");
                                      },
                                      children: f.jsx("span", {
                                        children: "$ Clean Cash",
                                      }),
                                    }),
                                    f.jsxs("div", {
                                      className: "dropdownItem",
                                      onClick: () => {
                                        N(!1), j("loosenotes");
                                      },
                                      children: [
                                        f.jsx("img", { src: Ou }),
                                        f.jsx("span", {
                                          children: "Loose Notes",
                                        }),
                                      ],
                                    }),
                                    f.jsxs("div", {
                                      className: "dropdownItem",
                                      onClick: () => {
                                        N(!1), j("rollofcash");
                                      },
                                      children: [
                                        f.jsx("img", { src: Mu }),
                                        f.jsx("span", {
                                          children: "Rolls of Cash",
                                        }),
                                      ],
                                    }),
                                    f.jsxs("div", {
                                      className: "dropdownItem",
                                      onClick: () => {
                                        N(!1), j("markedbills");
                                      },
                                      children: [
                                        f.jsx("img", { src: Du }),
                                        f.jsx("span", {
                                          children: "Marked Bills",
                                        }),
                                      ],
                                    }),
                                    f.jsxs("div", {
                                      className: "dropdownItem",
                                      onClick: () => {
                                        N(!1), j("inkedmoneybag");
                                      },
                                      children: [
                                        f.jsx("img", { src: Vu }),
                                        f.jsx("span", {
                                          children: "Inked Money Bags",
                                        }),
                                      ],
                                    }),
                                    f.jsxs("div", {
                                      className: "dropdownItem",
                                      onClick: () => {
                                        N(!1), j("evc");
                                      },
                                      children: [
                                        f.jsx("img", { src: Bu }),
                                        f.jsx("span", { children: "EVC" }),
                                      ],
                                    }),
                                  ],
                                }),
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "listingColumn",
                          style: { marginLeft: 10 },
                          children: [
                            f.jsx("div", {
                              className: "columnLabel",
                              children: "Price Per Unit",
                            }),
                            f.jsx("input", {
                              type: "number",
                              min: 1,
                              value: B,
                              onChange: (T) => {
                                F(T.target.value);
                              },
                              placeholder: "Price",
                              style: { width: 150 },
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "listingFeeButton",
                          children: [
                            f.jsx("div", {
                              className: "listingFees",
                              children: f.jsxs("span", {
                                className: "columnValue",
                                children: ["Listing Fee: ", _r(G)],
                              }),
                            }),
                            f.jsx("div", {
                              className: "button blackmarket",
                              style: {
                                paddingLeft: 24,
                                paddingRight: 24,
                                width: "fit-content",
                                marginLeft: 19,
                              },
                              onClick: _,
                              children: a ? "POST LISTING" : "POST BUY ORDER",
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("div", {
                      className: "listingTables",
                      children: [
                        f.jsxs("div", {
                          className: "listingTable",
                          children: [
                            f.jsxs("div", {
                              className: "tableHeader",
                              children: [
                                f.jsx("span", { children: "CURRENT BUYERS" }),
                                a &&
                                  f.jsx("span", {
                                    style: {
                                      marginLeft: "auto",
                                      marginRight: 68,
                                    },
                                    children: "Price per item",
                                  }),
                              ],
                            }),
                            y.map((T, I) => {
                              const L = T.seller === s.username;
                              return f.jsxs(
                                "div",
                                {
                                  className: "tableItem",
                                  style: {
                                    background:
                                      I % 2 === 1
                                        ? "rgba(255, 255, 255, 0.06)"
                                        : "",
                                  },
                                  children: [
                                    f.jsx("span", {
                                      style: { width: 185, textAlign: "left" },
                                      children: T.seller,
                                    }),
                                    f.jsxs("div", {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "auto",
                                        gap: 10,
                                      },
                                      children: [
                                        f.jsx("span", {
                                          children: f.jsx(hp, {
                                            type: T.currencyType,
                                            price: T.price,
                                          }),
                                        }),
                                        a &&
                                          f.jsx("div", {
                                            className: `tableButton ${
                                              L && "disabled"
                                            }`,
                                            onClick: () => {
                                              L || e.setPrompt(T.id);
                                            },
                                            children: "Sell Instantly",
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                T.id
                              );
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "listingTable",
                          children: [
                            f.jsxs("div", {
                              className: "tableHeader",
                              children: [
                                f.jsx("span", { children: "CURRENT SELLERS" }),
                                l &&
                                  f.jsx("span", {
                                    style: { marginLeft: 80 },
                                    children: "Condition",
                                  }),
                                l &&
                                  f.jsx("span", {
                                    style: { marginLeft: 50 },
                                    children: "Price",
                                  }),
                              ],
                            }),
                            x.map((T, I) => {
                              const L = T.seller === s.username;
                              return f.jsxs(
                                "div",
                                {
                                  className: "tableItem",
                                  style: {
                                    background:
                                      I % 2 === 1
                                        ? "rgba(255, 255, 255, 0.06)"
                                        : "",
                                  },
                                  children: [
                                    f.jsx("span", {
                                      style: { width: 185, textAlign: "left" },
                                      children: T.seller,
                                    }),
                                    f.jsxs("div", {
                                      style: {
                                        display: "flex",
                                        flexDirection: "row",
                                        marginLeft: "auto",
                                        gap: 10,
                                      },
                                      children: [
                                        f.jsx("span", {
                                          style: {
                                            width: 50,
                                            textAlign: "right",
                                          },
                                          children: T.condition,
                                        }),
                                        f.jsx("span", {
                                          style: {
                                            width: 70,
                                            textAlign: "right",
                                          },
                                          children: f.jsx(hp, {
                                            type: T.currencyType,
                                            price: T.price,
                                          }),
                                        }),
                                        l &&
                                          f.jsx("div", {
                                            className: `tableButton ${
                                              L && "disabled"
                                            }`,
                                            onClick: () => {
                                              L || e.setPrompt(T.id);
                                            },
                                            children: "Buy Instantly",
                                          }),
                                      ],
                                    }),
                                  ],
                                },
                                T.id
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
  });
}
function IA(e) {
  const [t, n] = w.useState([]),
    [r, i] = w.useState([]);
  return (
    w.useEffect(() => {
      const s = e.filteredListings,
        a = s.filter((l) => l.type === "offer"),
        o = s.filter((l) => l.type === "request");
      n(a), i(o);
    }, [e.filteredListings]),
    f.jsxs("div", {
      className: "myListings",
      children: [
        f.jsxs("section", {
          children: [
            f.jsx("span", {
              style: { paddingLeft: 61 },
              children: "Your Listings",
            }),
            f.jsx("div", {
              className: "listings",
              style: { paddingTop: 0, paddingRight: 0 },
              children: t.map((s) =>
                f.jsx(
                  Fu,
                  {
                    id: s.id,
                    image: s.image,
                    name: s.name,
                    condition: s.condition,
                    stock: s.stock,
                    seller: s.seller,
                    price: s.price,
                    currencyType: s.currencyType,
                    expiry: s.expiry,
                    type: s.type,
                  },
                  s.id
                )
              ),
            }),
          ],
        }),
        f.jsxs("section", {
          style: { paddingLeft: 0 },
          children: [
            f.jsx("span", { children: "Your Buy Orders" }),
            f.jsx("div", {
              className: "listings",
              style: { paddingTop: 0, paddingLeft: 0, paddingRight: 0 },
              children: r.map((s) =>
                f.jsx(
                  Fu,
                  {
                    id: s.id,
                    image: s.image,
                    name: s.name,
                    condition: s.condition,
                    stock: s.stock,
                    seller: s.seller,
                    price: s.price,
                    currencyType: s.currencyType,
                    expiry: s.expiry,
                    type: s.type,
                  },
                  s.id
                )
              ),
            }),
          ],
        }),
      ],
    })
  );
}
const RA = (e) => {
    const t = e.cost;
    return t
      ? t.item !== "money"
        ? f.jsx("div", {
            className: "price",
            children: f.jsx(us, { type: t.item, price: t.amount }),
          })
        : f.jsx("div", { className: "price", children: _r(t.amount) })
      : f.jsx("div", { className: "price", children: "-" });
  },
  OA = (e) => {
    var t = new Date(e);
    const n = (l) => {
      if (l > 3 && l < 21) return "th";
      switch (l % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    };
    var r = t.toLocaleString("default", { month: "short" }),
      i = t.getDate(),
      s = t.getHours() % 12 || 12,
      a = t.getMinutes().toString().padStart(2, "0"),
      o = t.getHours() < 12 ? "AM" : "PM";
    return `${r} ${i}${n(i)}, ${s}:${a}${o}`;
  };
function MA(e) {
  const [t, n] = w.useState(1),
    [r, i] = w.useState(0),
    [s, a] = w.useState(!1),
    [o, l] = w.useState(!1),
    u = w.useRef(null),
    c = () => {
      if (u.current) {
        const { scrollTop: E, scrollHeight: N, clientHeight: R } = u.current;
        if (E + R === N) {
          if (o) return;
          n(t + 1);
        }
      }
    },
    { searchQuery: d, account: h, setAccount: p } = rr(),
    [v, y] = w.useState([]),
    [S, x] = w.useState([]);
  w.useEffect(() => {
    !s &&
      r !== t &&
      !o &&
      (l(!0),
      Z("getBlackmarketHistory", t)
        .then((E) => {
          l(!1), (!E || E.length === 0) && a(!0), i(t), y([...v, ...E]);
        })
        .catch());
  }, [t, s, r]),
    w.useEffect(() => {
      const E = yf(d).toLowerCase(),
        N = v.filter(
          (R) =>
            R.event.toLowerCase().search(E) > -1 ||
            R.description.toLowerCase().search(E) > -1 ||
            R.item.toLowerCase().search(E) > -1
        );
      x(N);
    }, [v, d]);
  const [m, g] = w.useState(!1),
    [A, k] = w.useState({
      title: "",
      text: "",
      close: "",
      confirm: "",
      click: () => {},
    }),
    b = async () => {
      if (!C) return;
      const N = h.earnings.reduce((B, { quantity: F, item: G }) => {
        if (typeof G == "string") return (B[G] = (B[G] || 0) + F), B;
        if (typeof G == "object") {
          if (Array.isArray(G))
            return (B[G[0].name] = (B[G[0].name] || 0) + G.length), B;
          if (F) return (B[G.name] = (B[G.name] || 0) + F), B;
        }
        return B;
      }, {});
      let R = [];
      for (const [B, F] of Object.entries(N)) {
        const G = DA[B] || (await Z("itemLabel", B)) || "Unknown";
        let z = B === "money" ? `$${F}` : `${F} ${G}`;
        R.push(z);
      }
      let V;
      if (R.length > 1) {
        const B = R.pop();
        V = `${R.join(", ")} and ${B}`;
      } else V = `${R[0]}`;
      k({
        title: "Earnings",
        text: "You have " + V + " waiting to be collected",
        close: "Cancel",
        confirm: "Collect",
        click: () => {
          g(!1),
            Z("collectEarnings").then((B) => {
              if (!B) return;
              const F = { ...h };
              (F.earnings = []), p(F);
            });
        },
      }),
        g(!0);
    },
    [C, j] = w.useState(!1);
  return (
    w.useEffect(() => {
      j(h.earnings.length > 0);
    }, [h.earnings]),
    f.jsxs(f.Fragment, {
      children: [
        f.jsxs("div", {
          className: "listingHistory",
          children: [
            f.jsxs("div", {
              className: "listingTable",
              onScroll: c,
              ref: u,
              children: [
                f.jsxs("div", {
                  className: "listingRow rowHeader",
                  children: [
                    f.jsx("span", { children: "Created" }),
                    f.jsx("span", { children: "Transaction Type" }),
                    f.jsx("span", { children: "Description" }),
                    f.jsx("span", { children: "Item" }),
                    f.jsx("span", { children: "Quantity" }),
                    f.jsx("span", { children: "Price" }),
                    f.jsx("span", { children: "In Earnings?" }),
                  ],
                }),
                S.map((E) =>
                  f.jsxs("div", {
                    className: "listingRow",
                    children: [
                      f.jsx("span", { children: OA(E.created) }),
                      f.jsx("span", { children: E.event || "-" }),
                      f.jsx("span", { children: E.description || "-" }),
                      f.jsx("span", { children: E.item || "-" }),
                      f.jsx("span", { children: E.quantity || "-" }),
                      f.jsx("span", { children: f.jsx(RA, { cost: E.cost }) }),
                      f.jsx("span", {
                        children: (E.redeemed && "No") || "Yes",
                      }),
                    ],
                  })
                ),
              ],
            }),
            f.jsx("div", {
              className: `button blackMarket ${C ? "" : "disabled"}`,
              onClick: b,
              children: "Collect Earnings",
            }),
          ],
        }),
        f.jsx(Xe, {
          children:
            m &&
            f.jsx(
              K.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.2 },
                children: f.jsx(nf, { close: () => g(!1), promptData: A }),
              },
              "prompt-blackmarket"
            ),
        }),
      ],
    })
  );
}
const DA = {
    money: "Cash",
    loosenotes: "Loose Notes",
    rollofcash: "Roll of Cash",
    markedbills: "Marked Bills",
    inkedmoneybag: "Inked Money Bag",
    evc: "EVC",
  },
  yf = (e) => e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function VA() {
  const { page: e, searchQuery: t, account: n, setAccount: r } = rr(),
    [i, s] = w.useState(0),
    [a, o] = w.useState({
      id: 0,
      name: "",
      image: "",
      condition: "",
      type: "offer",
      stock: 1,
      seller: "",
      price: 0,
      market: "local",
      currencyType: "money",
      expiry: 0,
    }),
    [l, u] = w.useState([]),
    [c, d] = w.useState([]);
  return (
    Ae("newListing", (h) => {
      const p = [...l];
      p.push(h), u(p);
    }),
    Ae("updateListing", (h) => {
      const p = [...l],
        v = p.findIndex((y) => y.id === h.id);
      v !== -1 && ((p[v] = { ...p[v], [h.key]: h.data }), u(p));
    }),
    Ae("removeListing", (h) => {
      u([...l].filter((p) => p.id !== h));
    }),
    w.useEffect(() => {
      Z("getMarketItems").then((h) => u(h)),
        Z("getAccount").then((h) => {
          r(h);
        });
    }, []),
    w.useEffect(() => {
      const h = yf(t).toLowerCase(),
        p = l.filter((y) => y.name.toLowerCase().search(h) > -1);
      let v = [];
      e === "mylistings"
        ? (v = p.filter((y) => y.seller === n.username))
        : (v = e === "all" ? p : p.filter((y) => y.market === e)),
        d(v);
    }, [l, e, t]),
    w.useEffect(() => {
      if (
        (typeof i == "number" && i === 0) ||
        (typeof i == "string" && i.length === 0)
      )
        return;
      const h = l.find((p) => p.id === i);
      h && o(h);
    }, [i]),
    f.jsxs(f.Fragment, {
      children: [
        e !== "mylistings" &&
          e !== "listingHistory" &&
          f.jsx("div", {
            className: "listings",
            children: c.map((h) =>
              f.jsx(
                Fu,
                {
                  id: h.id,
                  title: h.title,
                  image: h.image,
                  name: h.name,
                  condition: h.condition,
                  type: h.type,
                  stock: h.stock,
                  seller: h.seller,
                  price: h.price,
                  currencyType: h.currencyType,
                  expiry: h.expiry,
                  setPrompt: s,
                },
                h.id
              )
            ),
          }),
        e === "mylistings" && f.jsx(IA, { filteredListings: c }),
        e === "listingHistory" && f.jsx(MA, {}),
        f.jsx(LA, { listings: l, setPrompt: s }),
        f.jsx(NA, {
          visible: typeof i == "number" ? i > 0 : i.length > 0,
          id: i,
          setPrompt: s,
          data: a,
        }),
      ],
    })
  );
}
const _r = (e, t = "en-US") =>
    new Intl.NumberFormat(t, {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(e),
  BA = (e) => e.toLocaleString("en-US");
function FA({ activeApp: e, setActiveApp: t }) {
  const [n, r] = w.useState(!1),
    [i, s] = w.useState({
      title: "You are in queue",
      text: "You will be notified on your phone.",
    });
  return (
    Ae("setPromptActive", r),
    Ae("setPromptData", s),
    f.jsx(f.Fragment, {
      children: f.jsx(Xe, {
        children:
          e === "blackmarket" &&
          f.jsxs(K.div, {
            className: "appContainer",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            children: [
              f.jsx(cA, {
                children: f.jsxs("div", {
                  className: "blackmarketApp",
                  children: [
                    f.jsx(mA, { setActiveApp: t }),
                    f.jsxs("div", {
                      className: "contentContainer",
                      children: [f.jsx(xA, {}), f.jsx(VA, {})],
                    }),
                  ],
                }),
              }),
              f.jsx(Xe, {
                children:
                  n &&
                  f.jsx(
                    K.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: { duration: 0.2 },
                      children: f.jsx(nf, {
                        close: () => r(!1),
                        promptData: i,
                      }),
                    },
                    "prompt-blackmarket"
                  ),
              }),
            ],
          }),
      }),
    })
  );
}
const zA = (e) => {
    const t = e.getTime() + e.getTimezoneOffset() * 6e4,
      n = -5;
    return new Date(t + 36e5 * n);
  },
  pp = (e) => {
    const t = zA(e),
      n = t.getHours(),
      r = t.getMinutes().toString().padStart(2, "0"),
      i = n >= 12 ? "PM" : "AM",
      s = `${n % 12 || 12}:${r} ${i}`,
      a = t.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });
    return { time: s, date: a };
  },
  UA = () => {
    const [e, t] = w.useState(!0);
    Ae("setVisible", t);
    const [n, r] = w.useState(pp(new Date()));
    w.useEffect(() => {
      if (!e) return;
      const l = (c) => {
          ["Escape"].includes(c.code) &&
            (Rt() ? t(!e) : (Z("hideFrame"), s("")));
        },
        u = setInterval(() => {
          r(pp(new Date()));
        }, 3e4);
      return (
        window.addEventListener("keydown", l),
        () => {
          window.removeEventListener("keydown", l), clearInterval(u), o(1);
        }
      );
    }, [e]);
    const [i, s] = w.useState(""),
      [a, o] = w.useState(1);
    return f.jsx(Xe, {
      children:
        e &&
        f.jsx(K.div, {
          className: "nui-wrapper",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.5 },
          children: f.jsxs("div", {
            className: "tabletContainer",
            style: { opacity: a },
            children: [
              f.jsx(Mw, { activeApp: i, setActiveApp: s }, "homepage"),
              f.jsx(Gw, { activeApp: i, setActiveApp: s }, "boostingpage"),
              f.jsx(nA, { activeApp: i, setActiveApp: s }, "secbypasspage"),
              f.jsx(rA, { activeApp: i, setActiveApp: s }, "captchapage"),
              f.jsx(iA, { activeApp: i, setActiveApp: s }, "firewallpage"),
              f.jsx(oA, { activeApp: i, setActiveApp: s }, "interceptionpage"),
              f.jsx(FA, { activeApp: i, setActiveApp: s }, "blackmarketpage"),
              f.jsxs("div", {
                className: "toolbar",
                children: [
                  f.jsx("img", {
                    src: lA,
                    onMouseEnter: () => {
                      o(0.5);
                    },
                    onMouseLeave: () => {
                      o(1);
                    },
                    className: "logo",
                  }),
                  i === "boosting" &&
                    f.jsx("div", {
                      className: "appIcon",
                      children: f.jsx("img", { src: uA }),
                    }),
                  f.jsxs("div", {
                    className: "dateTime",
                    children: [n.time, f.jsx("br", {}), n.date],
                  }),
                ],
              }),
            ],
          }),
        }),
    });
  },
  HA = document.getElementById("root");
E0(HA).render(f.jsx(UA, {}));
