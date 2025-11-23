function Nd(l) {
  return l && l.__esModule && Object.prototype.hasOwnProperty.call(l, "default") ? l.default : l;
}
var Bs = { exports: {} }, Lr = {}, Hs = { exports: {} }, oe = {};
var ec;
function Id() {
  if (ec) return oe;
  ec = 1;
  var l = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), S = Symbol.iterator;
  function E(C) {
    return C === null || typeof C != "object" ? null : (C = S && C[S] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var T = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, O = Object.assign, _ = {};
  function M(C, N, se) {
    this.props = C, this.context = N, this.refs = _, this.updater = se || T;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(C, N) {
    if (typeof C != "object" && typeof C != "function" && C != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, C, N, "setState");
  }, M.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function P() {
  }
  P.prototype = M.prototype;
  function A(C, N, se) {
    this.props = C, this.context = N, this.refs = _, this.updater = se || T;
  }
  var R = A.prototype = new P();
  R.constructor = A, O(R, M.prototype), R.isPureReactComponent = !0;
  var V = Array.isArray, Y = Object.prototype.hasOwnProperty, re = { current: null }, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ie(C, N, se) {
    var ae, fe = {}, de = null, ge = null;
    if (N != null) for (ae in N.ref !== void 0 && (ge = N.ref), N.key !== void 0 && (de = "" + N.key), N) Y.call(N, ae) && !W.hasOwnProperty(ae) && (fe[ae] = N[ae]);
    var me = arguments.length - 2;
    if (me === 1) fe.children = se;
    else if (1 < me) {
      for (var Ee = Array(me), et = 0; et < me; et++) Ee[et] = arguments[et + 2];
      fe.children = Ee;
    }
    if (C && C.defaultProps) for (ae in me = C.defaultProps, me) fe[ae] === void 0 && (fe[ae] = me[ae]);
    return { $$typeof: l, type: C, key: de, ref: ge, props: fe, _owner: re.current };
  }
  function U(C, N) {
    return { $$typeof: l, type: C.type, key: N, ref: C.ref, props: C.props, _owner: C._owner };
  }
  function ke(C) {
    return typeof C == "object" && C !== null && C.$$typeof === l;
  }
  function G(C) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(se) {
      return N[se];
    });
  }
  var X = /\/+/g;
  function b(C, N) {
    return typeof C == "object" && C !== null && C.key != null ? G("" + C.key) : N.toString(36);
  }
  function ue(C, N, se, ae, fe) {
    var de = typeof C;
    (de === "undefined" || de === "boolean") && (C = null);
    var ge = !1;
    if (C === null) ge = !0;
    else switch (de) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (C.$$typeof) {
          case l:
          case i:
            ge = !0;
        }
    }
    if (ge) return ge = C, fe = fe(ge), C = ae === "" ? "." + b(ge, 0) : ae, V(fe) ? (se = "", C != null && (se = C.replace(X, "$&/") + "/"), ue(fe, N, se, "", function(et) {
      return et;
    })) : fe != null && (ke(fe) && (fe = U(fe, se + (!fe.key || ge && ge.key === fe.key ? "" : ("" + fe.key).replace(X, "$&/") + "/") + C)), N.push(fe)), 1;
    if (ge = 0, ae = ae === "" ? "." : ae + ":", V(C)) for (var me = 0; me < C.length; me++) {
      de = C[me];
      var Ee = ae + b(de, me);
      ge += ue(de, N, se, Ee, fe);
    }
    else if (Ee = E(C), typeof Ee == "function") for (C = Ee.call(C), me = 0; !(de = C.next()).done; ) de = de.value, Ee = ae + b(de, me++), ge += ue(de, N, se, Ee, fe);
    else if (de === "object") throw N = String(C), Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function Oe(C, N, se) {
    if (C == null) return C;
    var ae = [], fe = 0;
    return ue(C, ae, "", "", function(de) {
      return N.call(se, de, fe++);
    }), ae;
  }
  function _e(C) {
    if (C._status === -1) {
      var N = C._result;
      N = N(), N.then(function(se) {
        (C._status === 0 || C._status === -1) && (C._status = 1, C._result = se);
      }, function(se) {
        (C._status === 0 || C._status === -1) && (C._status = 2, C._result = se);
      }), C._status === -1 && (C._status = 0, C._result = N);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var ee = { current: null }, B = { transition: null }, $ = { ReactCurrentDispatcher: ee, ReactCurrentBatchConfig: B, ReactCurrentOwner: re };
  function H() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return oe.Children = { map: Oe, forEach: function(C, N, se) {
    Oe(C, function() {
      N.apply(this, arguments);
    }, se);
  }, count: function(C) {
    var N = 0;
    return Oe(C, function() {
      N++;
    }), N;
  }, toArray: function(C) {
    return Oe(C, function(N) {
      return N;
    }) || [];
  }, only: function(C) {
    if (!ke(C)) throw Error("React.Children.only expected to receive a single React element child.");
    return C;
  } }, oe.Component = M, oe.Fragment = s, oe.Profiler = f, oe.PureComponent = A, oe.StrictMode = a, oe.Suspense = d, oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $, oe.act = H, oe.cloneElement = function(C, N, se) {
    if (C == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + C + ".");
    var ae = O({}, C.props), fe = C.key, de = C.ref, ge = C._owner;
    if (N != null) {
      if (N.ref !== void 0 && (de = N.ref, ge = re.current), N.key !== void 0 && (fe = "" + N.key), C.type && C.type.defaultProps) var me = C.type.defaultProps;
      for (Ee in N) Y.call(N, Ee) && !W.hasOwnProperty(Ee) && (ae[Ee] = N[Ee] === void 0 && me !== void 0 ? me[Ee] : N[Ee]);
    }
    var Ee = arguments.length - 2;
    if (Ee === 1) ae.children = se;
    else if (1 < Ee) {
      me = Array(Ee);
      for (var et = 0; et < Ee; et++) me[et] = arguments[et + 2];
      ae.children = me;
    }
    return { $$typeof: l, type: C.type, key: fe, ref: de, props: ae, _owner: ge };
  }, oe.createContext = function(C) {
    return C = { $$typeof: h, _currentValue: C, _currentValue2: C, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, C.Provider = { $$typeof: c, _context: C }, C.Consumer = C;
  }, oe.createElement = ie, oe.createFactory = function(C) {
    var N = ie.bind(null, C);
    return N.type = C, N;
  }, oe.createRef = function() {
    return { current: null };
  }, oe.forwardRef = function(C) {
    return { $$typeof: m, render: C };
  }, oe.isValidElement = ke, oe.lazy = function(C) {
    return { $$typeof: g, _payload: { _status: -1, _result: C }, _init: _e };
  }, oe.memo = function(C, N) {
    return { $$typeof: y, type: C, compare: N === void 0 ? null : N };
  }, oe.startTransition = function(C) {
    var N = B.transition;
    B.transition = {};
    try {
      C();
    } finally {
      B.transition = N;
    }
  }, oe.unstable_act = H, oe.useCallback = function(C, N) {
    return ee.current.useCallback(C, N);
  }, oe.useContext = function(C) {
    return ee.current.useContext(C);
  }, oe.useDebugValue = function() {
  }, oe.useDeferredValue = function(C) {
    return ee.current.useDeferredValue(C);
  }, oe.useEffect = function(C, N) {
    return ee.current.useEffect(C, N);
  }, oe.useId = function() {
    return ee.current.useId();
  }, oe.useImperativeHandle = function(C, N, se) {
    return ee.current.useImperativeHandle(C, N, se);
  }, oe.useInsertionEffect = function(C, N) {
    return ee.current.useInsertionEffect(C, N);
  }, oe.useLayoutEffect = function(C, N) {
    return ee.current.useLayoutEffect(C, N);
  }, oe.useMemo = function(C, N) {
    return ee.current.useMemo(C, N);
  }, oe.useReducer = function(C, N, se) {
    return ee.current.useReducer(C, N, se);
  }, oe.useRef = function(C) {
    return ee.current.useRef(C);
  }, oe.useState = function(C) {
    return ee.current.useState(C);
  }, oe.useSyncExternalStore = function(C, N, se) {
    return ee.current.useSyncExternalStore(C, N, se);
  }, oe.useTransition = function() {
    return ee.current.useTransition();
  }, oe.version = "18.3.1", oe;
}
var tc;
function no() {
  return tc || (tc = 1, Hs.exports = Id()), Hs.exports;
}
var nc;
function Rd() {
  if (nc) return Lr;
  nc = 1;
  var l = no(), i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, f = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, d, y) {
    var g, S = {}, E = null, T = null;
    y !== void 0 && (E = "" + y), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (T = d.ref);
    for (g in d) a.call(d, g) && !c.hasOwnProperty(g) && (S[g] = d[g]);
    if (m && m.defaultProps) for (g in d = m.defaultProps, d) S[g] === void 0 && (S[g] = d[g]);
    return { $$typeof: i, type: m, key: E, ref: T, props: S, _owner: f.current };
  }
  return Lr.Fragment = s, Lr.jsx = h, Lr.jsxs = h, Lr;
}
var rc;
function Dd() {
  return rc || (rc = 1, Bs.exports = Rd()), Bs.exports;
}
var Be = Dd(), ve = no();
const Re = /* @__PURE__ */ Nd(ve);
var Hi = {}, Us = { exports: {} }, be = {}, $s = { exports: {} }, Gs = {};
var ic;
function Ad() {
  return ic || (ic = 1, (function(l) {
    function i(B, $) {
      var H = B.length;
      B.push($);
      e: for (; 0 < H; ) {
        var C = H - 1 >>> 1, N = B[C];
        if (0 < f(N, $)) B[C] = $, B[H] = N, H = C;
        else break e;
      }
    }
    function s(B) {
      return B.length === 0 ? null : B[0];
    }
    function a(B) {
      if (B.length === 0) return null;
      var $ = B[0], H = B.pop();
      if (H !== $) {
        B[0] = H;
        e: for (var C = 0, N = B.length, se = N >>> 1; C < se; ) {
          var ae = 2 * (C + 1) - 1, fe = B[ae], de = ae + 1, ge = B[de];
          if (0 > f(fe, H)) de < N && 0 > f(ge, fe) ? (B[C] = ge, B[de] = H, C = de) : (B[C] = fe, B[ae] = H, C = ae);
          else if (de < N && 0 > f(ge, H)) B[C] = ge, B[de] = H, C = de;
          else break e;
        }
      }
      return $;
    }
    function f(B, $) {
      var H = B.sortIndex - $.sortIndex;
      return H !== 0 ? H : B.id - $.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      l.unstable_now = function() {
        return c.now();
      };
    } else {
      var h = Date, m = h.now();
      l.unstable_now = function() {
        return h.now() - m;
      };
    }
    var d = [], y = [], g = 1, S = null, E = 3, T = !1, O = !1, _ = !1, M = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, A = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function R(B) {
      for (var $ = s(y); $ !== null; ) {
        if ($.callback === null) a(y);
        else if ($.startTime <= B) a(y), $.sortIndex = $.expirationTime, i(d, $);
        else break;
        $ = s(y);
      }
    }
    function V(B) {
      if (_ = !1, R(B), !O) if (s(d) !== null) O = !0, _e(Y);
      else {
        var $ = s(y);
        $ !== null && ee(V, $.startTime - B);
      }
    }
    function Y(B, $) {
      O = !1, _ && (_ = !1, P(ie), ie = -1), T = !0;
      var H = E;
      try {
        for (R($), S = s(d); S !== null && (!(S.expirationTime > $) || B && !G()); ) {
          var C = S.callback;
          if (typeof C == "function") {
            S.callback = null, E = S.priorityLevel;
            var N = C(S.expirationTime <= $);
            $ = l.unstable_now(), typeof N == "function" ? S.callback = N : S === s(d) && a(d), R($);
          } else a(d);
          S = s(d);
        }
        if (S !== null) var se = !0;
        else {
          var ae = s(y);
          ae !== null && ee(V, ae.startTime - $), se = !1;
        }
        return se;
      } finally {
        S = null, E = H, T = !1;
      }
    }
    var re = !1, W = null, ie = -1, U = 5, ke = -1;
    function G() {
      return !(l.unstable_now() - ke < U);
    }
    function X() {
      if (W !== null) {
        var B = l.unstable_now();
        ke = B;
        var $ = !0;
        try {
          $ = W(!0, B);
        } finally {
          $ ? b() : (re = !1, W = null);
        }
      } else re = !1;
    }
    var b;
    if (typeof A == "function") b = function() {
      A(X);
    };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), Oe = ue.port2;
      ue.port1.onmessage = X, b = function() {
        Oe.postMessage(null);
      };
    } else b = function() {
      M(X, 0);
    };
    function _e(B) {
      W = B, re || (re = !0, b());
    }
    function ee(B, $) {
      ie = M(function() {
        B(l.unstable_now());
      }, $);
    }
    l.unstable_IdlePriority = 5, l.unstable_ImmediatePriority = 1, l.unstable_LowPriority = 4, l.unstable_NormalPriority = 3, l.unstable_Profiling = null, l.unstable_UserBlockingPriority = 2, l.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, l.unstable_continueExecution = function() {
      O || T || (O = !0, _e(Y));
    }, l.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : U = 0 < B ? Math.floor(1e3 / B) : 5;
    }, l.unstable_getCurrentPriorityLevel = function() {
      return E;
    }, l.unstable_getFirstCallbackNode = function() {
      return s(d);
    }, l.unstable_next = function(B) {
      switch (E) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = E;
      }
      var H = E;
      E = $;
      try {
        return B();
      } finally {
        E = H;
      }
    }, l.unstable_pauseExecution = function() {
    }, l.unstable_requestPaint = function() {
    }, l.unstable_runWithPriority = function(B, $) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var H = E;
      E = B;
      try {
        return $();
      } finally {
        E = H;
      }
    }, l.unstable_scheduleCallback = function(B, $, H) {
      var C = l.unstable_now();
      switch (typeof H == "object" && H !== null ? (H = H.delay, H = typeof H == "number" && 0 < H ? C + H : C) : H = C, B) {
        case 1:
          var N = -1;
          break;
        case 2:
          N = 250;
          break;
        case 5:
          N = 1073741823;
          break;
        case 4:
          N = 1e4;
          break;
        default:
          N = 5e3;
      }
      return N = H + N, B = { id: g++, callback: $, priorityLevel: B, startTime: H, expirationTime: N, sortIndex: -1 }, H > C ? (B.sortIndex = H, i(y, B), s(d) === null && B === s(y) && (_ ? (P(ie), ie = -1) : _ = !0, ee(V, H - C))) : (B.sortIndex = N, i(d, B), O || T || (O = !0, _e(Y))), B;
    }, l.unstable_shouldYield = G, l.unstable_wrapCallback = function(B) {
      var $ = E;
      return function() {
        var H = E;
        E = $;
        try {
          return B.apply(this, arguments);
        } finally {
          E = H;
        }
      };
    };
  })(Gs)), Gs;
}
var lc;
function Fd() {
  return lc || (lc = 1, $s.exports = Ad()), $s.exports;
}
var sc;
function jd() {
  if (sc) return be;
  sc = 1;
  var l = no(), i = Fd();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), f = {};
  function c(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (f[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), d = Object.prototype.hasOwnProperty, y = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, S = {};
  function E(e) {
    return d.call(S, e) ? !0 : d.call(g, e) ? !1 : y.test(e) ? S[e] = !0 : (g[e] = !0, !1);
  }
  function T(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function O(e, t, n, r) {
    if (t === null || typeof t > "u" || T(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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
  function _(e, t, n, r, o, u, p) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = p;
  }
  var M = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    M[e] = new _(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    M[t] = new _(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    M[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    M[e] = new _(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    M[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    M[e] = new _(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    M[e] = new _(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    M[e] = new _(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    M[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var P = /[\-:]([a-z])/g;
  function A(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      A
    );
    M[t] = new _(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, A);
    M[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, A);
    M[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    M[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), M.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    M[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function R(e, t, n, r) {
    var o = M.hasOwnProperty(t) ? M[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (O(t, n, o, r) && (n = null), r || o === null ? E(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var V = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = Symbol.for("react.element"), re = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ie = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), ue = Symbol.for("react.suspense_list"), Oe = Symbol.for("react.memo"), _e = Symbol.for("react.lazy"), ee = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = B && e[B] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var H = Object.assign, C;
  function N(e) {
    if (C === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      C = t && t[1] || "";
    }
    return `
` + C + e;
  }
  var se = !1;
  function ae(e, t) {
    if (!e || se) return "";
    se = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (z) {
          var r = z;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (z) {
          r = z;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (z) {
          r = z;
        }
        e();
      }
    } catch (z) {
      if (z && r && typeof z.stack == "string") {
        for (var o = z.stack.split(`
`), u = r.stack.split(`
`), p = o.length - 1, v = u.length - 1; 1 <= p && 0 <= v && o[p] !== u[v]; ) v--;
        for (; 1 <= p && 0 <= v; p--, v--) if (o[p] !== u[v]) {
          if (p !== 1 || v !== 1)
            do
              if (p--, v--, 0 > v || o[p] !== u[v]) {
                var w = `
` + o[p].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= p && 0 <= v);
          break;
        }
      }
    } finally {
      se = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? N(e) : "";
  }
  function fe(e) {
    switch (e.tag) {
      case 5:
        return N(e.type);
      case 16:
        return N("Lazy");
      case 13:
        return N("Suspense");
      case 19:
        return N("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = ae(e.type, !1), e;
      case 11:
        return e = ae(e.type.render, !1), e;
      case 1:
        return e = ae(e.type, !0), e;
      default:
        return "";
    }
  }
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case W:
        return "Fragment";
      case re:
        return "Portal";
      case U:
        return "Profiler";
      case ie:
        return "StrictMode";
      case b:
        return "Suspense";
      case ue:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case G:
        return (e.displayName || "Context") + ".Consumer";
      case ke:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oe:
        return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
      case _e:
        t = e._payload, e = e._init;
        try {
          return de(e(t));
        } catch {
        }
    }
    return null;
  }
  function ge(e) {
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
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
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
        return de(t);
      case 8:
        return t === ie ? "StrictMode" : "Mode";
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
  function me(e) {
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
  function Ee(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function et(e) {
    var t = Ee(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(p) {
        r = "" + p, u.call(this, p);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(p) {
        r = "" + p;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Or(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = Ee(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Nr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yi(e, t) {
    var n = t.checked;
    return H({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function so(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = me(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function oo(e, t) {
    t = t.checked, t != null && R(e, "checked", t, !1);
  }
  function Xi(e, t) {
    oo(e, t);
    var n = me(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ki(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ki(e, t.type, me(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function ao(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ki(e, t, n) {
    (t !== "number" || Nr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var $n = Array.isArray;
  function gn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + me(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function qi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return H({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function uo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if ($n(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: me(n) };
  }
  function co(e, t) {
    var n = me(t.value), r = me(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function fo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function po(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Zi(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? po(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ir, mo = (function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  })(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ir = Ir || document.createElement("div"), Ir.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ir.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Gn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Wn = {
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
    strokeWidth: !0
  }, Dc = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wn).forEach(function(e) {
    Dc.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Wn[t] = Wn[e];
    });
  });
  function ho(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Wn.hasOwnProperty(e) && Wn[e] ? ("" + t).trim() : t + "px";
  }
  function vo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = ho(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var Ac = H({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ji(e, t) {
    if (t) {
      if (Ac[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function bi(e, t) {
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
  var el = null;
  function tl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var nl = null, yn = null, wn = null;
  function go(e) {
    if (e = pr(e)) {
      if (typeof nl != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = ni(t), nl(e.stateNode, e.type, t));
    }
  }
  function yo(e) {
    yn ? wn ? wn.push(e) : wn = [e] : yn = e;
  }
  function wo() {
    if (yn) {
      var e = yn, t = wn;
      if (wn = yn = null, go(e), t) for (e = 0; e < t.length; e++) go(t[e]);
    }
  }
  function So(e, t) {
    return e(t);
  }
  function Eo() {
  }
  var rl = !1;
  function xo(e, t, n) {
    if (rl) return e(t, n);
    rl = !0;
    try {
      return So(e, t, n);
    } finally {
      rl = !1, (yn !== null || wn !== null) && (Eo(), wo());
    }
  }
  function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ni(n);
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var il = !1;
  if (m) try {
    var Yn = {};
    Object.defineProperty(Yn, "passive", { get: function() {
      il = !0;
    } }), window.addEventListener("test", Yn, Yn), window.removeEventListener("test", Yn, Yn);
  } catch {
    il = !1;
  }
  function Fc(e, t, n, r, o, u, p, v, w) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, z);
    } catch (D) {
      this.onError(D);
    }
  }
  var Xn = !1, Rr = null, Dr = !1, ll = null, jc = { onError: function(e) {
    Xn = !0, Rr = e;
  } };
  function Vc(e, t, n, r, o, u, p, v, w) {
    Xn = !1, Rr = null, Fc.apply(jc, arguments);
  }
  function Bc(e, t, n, r, o, u, p, v, w) {
    if (Vc.apply(this, arguments), Xn) {
      if (Xn) {
        var z = Rr;
        Xn = !1, Rr = null;
      } else throw Error(s(198));
      Dr || (Dr = !0, ll = z);
    }
  }
  function tn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function To(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Co(e) {
    if (tn(e) !== e) throw Error(s(188));
  }
  function Hc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = tn(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return Co(o), e;
          if (u === r) return Co(o), t;
          u = u.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = o, r = u;
      else {
        for (var p = !1, v = o.child; v; ) {
          if (v === n) {
            p = !0, n = o, r = u;
            break;
          }
          if (v === r) {
            p = !0, r = o, n = u;
            break;
          }
          v = v.sibling;
        }
        if (!p) {
          for (v = u.child; v; ) {
            if (v === n) {
              p = !0, n = u, r = o;
              break;
            }
            if (v === r) {
              p = !0, r = u, n = o;
              break;
            }
            v = v.sibling;
          }
          if (!p) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function ko(e) {
    return e = Hc(e), e !== null ? Po(e) : null;
  }
  function Po(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Po(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var _o = i.unstable_scheduleCallback, Lo = i.unstable_cancelCallback, Uc = i.unstable_shouldYield, $c = i.unstable_requestPaint, Le = i.unstable_now, Gc = i.unstable_getCurrentPriorityLevel, sl = i.unstable_ImmediatePriority, zo = i.unstable_UserBlockingPriority, Ar = i.unstable_NormalPriority, Wc = i.unstable_LowPriority, Mo = i.unstable_IdlePriority, Fr = null, Et = null;
  function Qc(e) {
    if (Et && typeof Et.onCommitFiberRoot == "function") try {
      Et.onCommitFiberRoot(Fr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var pt = Math.clz32 ? Math.clz32 : Kc, Yc = Math.log, Xc = Math.LN2;
  function Kc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Yc(e) / Xc | 0) | 0;
  }
  var jr = 64, Vr = 4194304;
  function Kn(e) {
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
  function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, u = e.pingedLanes, p = n & 268435455;
    if (p !== 0) {
      var v = p & ~o;
      v !== 0 ? r = Kn(v) : (u &= p, u !== 0 && (r = Kn(u)));
    } else p = n & ~o, p !== 0 ? r = Kn(p) : u !== 0 && (r = Kn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & o) === 0 && (o = r & -r, u = t & -t, o >= u || o === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - pt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function qc(e, t) {
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
  function Zc(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var p = 31 - pt(u), v = 1 << p, w = o[p];
      w === -1 ? ((v & n) === 0 || (v & r) !== 0) && (o[p] = qc(v, t)) : w <= t && (e.expiredLanes |= v), u &= ~v;
    }
  }
  function ol(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Oo() {
    var e = jr;
    return jr <<= 1, (jr & 4194240) === 0 && (jr = 64), e;
  }
  function al(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function qn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - pt(t), e[t] = n;
  }
  function Jc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - pt(n), u = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~u;
    }
  }
  function ul(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - pt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var he = 0;
  function No(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Io, cl, Ro, Do, Ao, fl = !1, Hr = [], Dt = null, At = null, Ft = null, Zn = /* @__PURE__ */ new Map(), Jn = /* @__PURE__ */ new Map(), jt = [], bc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Dt = null;
        break;
      case "dragenter":
      case "dragleave":
        At = null;
        break;
      case "mouseover":
      case "mouseout":
        Ft = null;
        break;
      case "pointerover":
      case "pointerout":
        Zn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Jn.delete(t.pointerId);
    }
  }
  function bn(e, t, n, r, o, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [o] }, t !== null && (t = pr(t), t !== null && cl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function ef(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return Dt = bn(Dt, e, t, n, r, o), !0;
      case "dragenter":
        return At = bn(At, e, t, n, r, o), !0;
      case "mouseover":
        return Ft = bn(Ft, e, t, n, r, o), !0;
      case "pointerover":
        var u = o.pointerId;
        return Zn.set(u, bn(Zn.get(u) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return u = o.pointerId, Jn.set(u, bn(Jn.get(u) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function jo(e) {
    var t = nn(e.target);
    if (t !== null) {
      var n = tn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = To(n), t !== null) {
            e.blockedOn = t, Ao(e.priority, function() {
              Ro(n);
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
  function Ur(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = pl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        el = r, n.target.dispatchEvent(r), el = null;
      } else return t = pr(n), t !== null && cl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Vo(e, t, n) {
    Ur(e) && n.delete(t);
  }
  function tf() {
    fl = !1, Dt !== null && Ur(Dt) && (Dt = null), At !== null && Ur(At) && (At = null), Ft !== null && Ur(Ft) && (Ft = null), Zn.forEach(Vo), Jn.forEach(Vo);
  }
  function er(e, t) {
    e.blockedOn === t && (e.blockedOn = null, fl || (fl = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, tf)));
  }
  function tr(e) {
    function t(o) {
      return er(o, e);
    }
    if (0 < Hr.length) {
      er(Hr[0], e);
      for (var n = 1; n < Hr.length; n++) {
        var r = Hr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Dt !== null && er(Dt, e), At !== null && er(At, e), Ft !== null && er(Ft, e), Zn.forEach(t), Jn.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null); ) jo(n), n.blockedOn === null && jt.shift();
  }
  var Sn = V.ReactCurrentBatchConfig, $r = !0;
  function nf(e, t, n, r) {
    var o = he, u = Sn.transition;
    Sn.transition = null;
    try {
      he = 1, dl(e, t, n, r);
    } finally {
      he = o, Sn.transition = u;
    }
  }
  function rf(e, t, n, r) {
    var o = he, u = Sn.transition;
    Sn.transition = null;
    try {
      he = 4, dl(e, t, n, r);
    } finally {
      he = o, Sn.transition = u;
    }
  }
  function dl(e, t, n, r) {
    if ($r) {
      var o = pl(e, t, n, r);
      if (o === null) Ml(e, t, r, Gr, n), Fo(e, r);
      else if (ef(o, e, t, n, r)) r.stopPropagation();
      else if (Fo(e, r), t & 4 && -1 < bc.indexOf(e)) {
        for (; o !== null; ) {
          var u = pr(o);
          if (u !== null && Io(u), u = pl(e, t, n, r), u === null && Ml(e, t, r, Gr, n), u === o) break;
          o = u;
        }
        o !== null && r.stopPropagation();
      } else Ml(e, t, r, null, n);
    }
  }
  var Gr = null;
  function pl(e, t, n, r) {
    if (Gr = null, e = tl(r), e = nn(e), e !== null) if (t = tn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = To(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Gr = e, null;
  }
  function Bo(e) {
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
        switch (Gc()) {
          case sl:
            return 1;
          case zo:
            return 4;
          case Ar:
          case Wc:
            return 16;
          case Mo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Vt = null, ml = null, Wr = null;
  function Ho() {
    if (Wr) return Wr;
    var e, t = ml, n = t.length, r, o = "value" in Vt ? Vt.value : Vt.textContent, u = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var p = n - e;
    for (r = 1; r <= p && t[n - r] === o[u - r]; r++) ;
    return Wr = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Qr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yr() {
    return !0;
  }
  function Uo() {
    return !1;
  }
  function tt(e) {
    function t(n, r, o, u, p) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = u, this.target = p, this.currentTarget = null;
      for (var v in e) e.hasOwnProperty(v) && (n = e[v], this[v] = n ? n(u) : u[v]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Yr : Uo, this.isPropagationStopped = Uo, this;
    }
    return H(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Yr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Yr);
    }, persist: function() {
    }, isPersistent: Yr }), t;
  }
  var En = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, hl = tt(En), nr = H({}, En, { view: 0, detail: 0 }), lf = tt(nr), vl, gl, rr, Xr = H({}, nr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? (vl = e.screenX - rr.screenX, gl = e.screenY - rr.screenY) : gl = vl = 0, rr = e), vl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : gl;
  } }), $o = tt(Xr), sf = H({}, Xr, { dataTransfer: 0 }), of = tt(sf), af = H({}, nr, { relatedTarget: 0 }), yl = tt(af), uf = H({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), cf = tt(uf), ff = H({}, En, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), df = tt(ff), pf = H({}, En, { data: 0 }), Go = tt(pf), mf = {
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
    MozPrintableKey: "Unidentified"
  }, hf = {
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
    224: "Meta"
  }, vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function gf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = vf[e]) ? !!t[e] : !1;
  }
  function wl() {
    return gf;
  }
  var yf = H({}, nr, { key: function(e) {
    if (e.key) {
      var t = mf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wl, charCode: function(e) {
    return e.type === "keypress" ? Qr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), wf = tt(yf), Sf = H({}, Xr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Wo = tt(Sf), Ef = H({}, nr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wl }), xf = tt(Ef), Tf = H({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Cf = tt(Tf), kf = H({}, Xr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pf = tt(kf), _f = [9, 13, 27, 32], Sl = m && "CompositionEvent" in window, ir = null;
  m && "documentMode" in document && (ir = document.documentMode);
  var Lf = m && "TextEvent" in window && !ir, Qo = m && (!Sl || ir && 8 < ir && 11 >= ir), Yo = " ", Xo = !1;
  function Ko(e, t) {
    switch (e) {
      case "keyup":
        return _f.indexOf(t.keyCode) !== -1;
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
  function qo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function zf(e, t) {
    switch (e) {
      case "compositionend":
        return qo(t);
      case "keypress":
        return t.which !== 32 ? null : (Xo = !0, Yo);
      case "textInput":
        return e = t.data, e === Yo && Xo ? null : e;
      default:
        return null;
    }
  }
  function Mf(e, t) {
    if (xn) return e === "compositionend" || !Sl && Ko(e, t) ? (e = Ho(), Wr = ml = Vt = null, xn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Of = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Of[e.type] : t === "textarea";
  }
  function Jo(e, t, n, r) {
    yo(r), t = br(t, "onChange"), 0 < t.length && (n = new hl("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var lr = null, sr = null;
  function Nf(e) {
    va(e, 0);
  }
  function Kr(e) {
    var t = _n(e);
    if (lo(t)) return e;
  }
  function If(e, t) {
    if (e === "change") return t;
  }
  var bo = !1;
  if (m) {
    var El;
    if (m) {
      var xl = "oninput" in document;
      if (!xl) {
        var ea = document.createElement("div");
        ea.setAttribute("oninput", "return;"), xl = typeof ea.oninput == "function";
      }
      El = xl;
    } else El = !1;
    bo = El && (!document.documentMode || 9 < document.documentMode);
  }
  function ta() {
    lr && (lr.detachEvent("onpropertychange", na), sr = lr = null);
  }
  function na(e) {
    if (e.propertyName === "value" && Kr(sr)) {
      var t = [];
      Jo(t, sr, e, tl(e)), xo(Nf, t);
    }
  }
  function Rf(e, t, n) {
    e === "focusin" ? (ta(), lr = t, sr = n, lr.attachEvent("onpropertychange", na)) : e === "focusout" && ta();
  }
  function Df(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kr(sr);
  }
  function Af(e, t) {
    if (e === "click") return Kr(t);
  }
  function Ff(e, t) {
    if (e === "input" || e === "change") return Kr(t);
  }
  function jf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : jf;
  function or(e, t) {
    if (mt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!d.call(t, o) || !mt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function ra(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ia(e, t) {
    var n = ra(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
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
      n = ra(n);
    }
  }
  function la(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? la(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function sa() {
    for (var e = window, t = Nr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Nr(e.document);
    }
    return t;
  }
  function Tl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Vf(e) {
    var t = sa(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && la(n.ownerDocument.documentElement, n)) {
      if (r !== null && Tl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, u = Math.min(r.start, o);
          r = r.end === void 0 ? u : Math.min(r.end, o), !e.extend && u > r && (o = r, r = u, u = o), o = ia(n, u);
          var p = ia(
            n,
            r
          );
          o && p && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== p.node || e.focusOffset !== p.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(p.node, p.offset)) : (t.setEnd(p.node, p.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Bf = m && "documentMode" in document && 11 >= document.documentMode, Tn = null, Cl = null, ar = null, kl = !1;
  function oa(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    kl || Tn == null || Tn !== Nr(r) || (r = Tn, "selectionStart" in r && Tl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ar && or(ar, r) || (ar = r, r = br(Cl, "onSelect"), 0 < r.length && (t = new hl("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Tn)));
  }
  function qr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Cn = { animationend: qr("Animation", "AnimationEnd"), animationiteration: qr("Animation", "AnimationIteration"), animationstart: qr("Animation", "AnimationStart"), transitionend: qr("Transition", "TransitionEnd") }, Pl = {}, aa = {};
  m && (aa = document.createElement("div").style, "AnimationEvent" in window || (delete Cn.animationend.animation, delete Cn.animationiteration.animation, delete Cn.animationstart.animation), "TransitionEvent" in window || delete Cn.transitionend.transition);
  function Zr(e) {
    if (Pl[e]) return Pl[e];
    if (!Cn[e]) return e;
    var t = Cn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in aa) return Pl[e] = t[n];
    return e;
  }
  var ua = Zr("animationend"), ca = Zr("animationiteration"), fa = Zr("animationstart"), da = Zr("transitionend"), pa = /* @__PURE__ */ new Map(), ma = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Bt(e, t) {
    pa.set(e, t), c(t, [e]);
  }
  for (var _l = 0; _l < ma.length; _l++) {
    var Ll = ma[_l], Hf = Ll.toLowerCase(), Uf = Ll[0].toUpperCase() + Ll.slice(1);
    Bt(Hf, "on" + Uf);
  }
  Bt(ua, "onAnimationEnd"), Bt(ca, "onAnimationIteration"), Bt(fa, "onAnimationStart"), Bt("dblclick", "onDoubleClick"), Bt("focusin", "onFocus"), Bt("focusout", "onBlur"), Bt(da, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ur = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(ur));
  function ha(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Bc(r, t, void 0, e), e.currentTarget = null;
  }
  function va(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var p = r.length - 1; 0 <= p; p--) {
          var v = r[p], w = v.instance, z = v.currentTarget;
          if (v = v.listener, w !== u && o.isPropagationStopped()) break e;
          ha(o, v, z), u = w;
        }
        else for (p = 0; p < r.length; p++) {
          if (v = r[p], w = v.instance, z = v.currentTarget, v = v.listener, w !== u && o.isPropagationStopped()) break e;
          ha(o, v, z), u = w;
        }
      }
    }
    if (Dr) throw e = ll, Dr = !1, ll = null, e;
  }
  function we(e, t) {
    var n = t[Al];
    n === void 0 && (n = t[Al] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ga(t, e, 2, !1), n.add(r));
  }
  function zl(e, t, n) {
    var r = 0;
    t && (r |= 4), ga(n, e, r, t);
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function cr(e) {
    if (!e[Jr]) {
      e[Jr] = !0, a.forEach(function(n) {
        n !== "selectionchange" && ($f.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || (t[Jr] = !0, zl("selectionchange", !1, t));
    }
  }
  function ga(e, t, n, r) {
    switch (Bo(t)) {
      case 1:
        var o = nf;
        break;
      case 4:
        o = rf;
        break;
      default:
        o = dl;
    }
    n = o.bind(null, t, n, e), o = void 0, !il || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function Ml(e, t, n, r, o) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var p = r.tag;
      if (p === 3 || p === 4) {
        var v = r.stateNode.containerInfo;
        if (v === o || v.nodeType === 8 && v.parentNode === o) break;
        if (p === 4) for (p = r.return; p !== null; ) {
          var w = p.tag;
          if ((w === 3 || w === 4) && (w = p.stateNode.containerInfo, w === o || w.nodeType === 8 && w.parentNode === o)) return;
          p = p.return;
        }
        for (; v !== null; ) {
          if (p = nn(v), p === null) return;
          if (w = p.tag, w === 5 || w === 6) {
            r = u = p;
            continue e;
          }
          v = v.parentNode;
        }
      }
      r = r.return;
    }
    xo(function() {
      var z = u, D = tl(n), F = [];
      e: {
        var I = pa.get(e);
        if (I !== void 0) {
          var Q = hl, q = e;
          switch (e) {
            case "keypress":
              if (Qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              Q = wf;
              break;
            case "focusin":
              q = "focus", Q = yl;
              break;
            case "focusout":
              q = "blur", Q = yl;
              break;
            case "beforeblur":
            case "afterblur":
              Q = yl;
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
              Q = $o;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = of;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = xf;
              break;
            case ua:
            case ca:
            case fa:
              Q = cf;
              break;
            case da:
              Q = Cf;
              break;
            case "scroll":
              Q = lf;
              break;
            case "wheel":
              Q = Pf;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = df;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Wo;
          }
          var Z = (t & 4) !== 0, ze = !Z && e === "scroll", k = Z ? I !== null ? I + "Capture" : null : I;
          Z = [];
          for (var x = z, L; x !== null; ) {
            L = x;
            var j = L.stateNode;
            if (L.tag === 5 && j !== null && (L = j, k !== null && (j = Qn(x, k), j != null && Z.push(fr(x, j, L)))), ze) break;
            x = x.return;
          }
          0 < Z.length && (I = new Q(I, q, null, n, D), F.push({ event: I, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", I && n !== el && (q = n.relatedTarget || n.fromElement) && (nn(q) || q[Pt])) break e;
          if ((Q || I) && (I = D.window === D ? D : (I = D.ownerDocument) ? I.defaultView || I.parentWindow : window, Q ? (q = n.relatedTarget || n.toElement, Q = z, q = q ? nn(q) : null, q !== null && (ze = tn(q), q !== ze || q.tag !== 5 && q.tag !== 6) && (q = null)) : (Q = null, q = z), Q !== q)) {
            if (Z = $o, j = "onMouseLeave", k = "onMouseEnter", x = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Wo, j = "onPointerLeave", k = "onPointerEnter", x = "pointer"), ze = Q == null ? I : _n(Q), L = q == null ? I : _n(q), I = new Z(j, x + "leave", Q, n, D), I.target = ze, I.relatedTarget = L, j = null, nn(D) === z && (Z = new Z(k, x + "enter", q, n, D), Z.target = L, Z.relatedTarget = ze, j = Z), ze = j, Q && q) t: {
              for (Z = Q, k = q, x = 0, L = Z; L; L = kn(L)) x++;
              for (L = 0, j = k; j; j = kn(j)) L++;
              for (; 0 < x - L; ) Z = kn(Z), x--;
              for (; 0 < L - x; ) k = kn(k), L--;
              for (; x--; ) {
                if (Z === k || k !== null && Z === k.alternate) break t;
                Z = kn(Z), k = kn(k);
              }
              Z = null;
            }
            else Z = null;
            Q !== null && ya(F, I, Q, Z, !1), q !== null && ze !== null && ya(F, ze, q, Z, !0);
          }
        }
        e: {
          if (I = z ? _n(z) : window, Q = I.nodeName && I.nodeName.toLowerCase(), Q === "select" || Q === "input" && I.type === "file") var J = If;
          else if (Zo(I)) if (bo) J = Ff;
          else {
            J = Df;
            var te = Rf;
          }
          else (Q = I.nodeName) && Q.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (J = Af);
          if (J && (J = J(e, z))) {
            Jo(F, J, n, D);
            break e;
          }
          te && te(e, I, z), e === "focusout" && (te = I._wrapperState) && te.controlled && I.type === "number" && Ki(I, "number", I.value);
        }
        switch (te = z ? _n(z) : window, e) {
          case "focusin":
            (Zo(te) || te.contentEditable === "true") && (Tn = te, Cl = z, ar = null);
            break;
          case "focusout":
            ar = Cl = Tn = null;
            break;
          case "mousedown":
            kl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            kl = !1, oa(F, n, D);
            break;
          case "selectionchange":
            if (Bf) break;
          case "keydown":
          case "keyup":
            oa(F, n, D);
        }
        var ne;
        if (Sl) e: {
          switch (e) {
            case "compositionstart":
              var le = "onCompositionStart";
              break e;
            case "compositionend":
              le = "onCompositionEnd";
              break e;
            case "compositionupdate":
              le = "onCompositionUpdate";
              break e;
          }
          le = void 0;
        }
        else xn ? Ko(e, n) && (le = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (le = "onCompositionStart");
        le && (Qo && n.locale !== "ko" && (xn || le !== "onCompositionStart" ? le === "onCompositionEnd" && xn && (ne = Ho()) : (Vt = D, ml = "value" in Vt ? Vt.value : Vt.textContent, xn = !0)), te = br(z, le), 0 < te.length && (le = new Go(le, e, null, n, D), F.push({ event: le, listeners: te }), ne ? le.data = ne : (ne = qo(n), ne !== null && (le.data = ne)))), (ne = Lf ? zf(e, n) : Mf(e, n)) && (z = br(z, "onBeforeInput"), 0 < z.length && (D = new Go("onBeforeInput", "beforeinput", null, n, D), F.push({ event: D, listeners: z }), D.data = ne));
      }
      va(F, t);
    });
  }
  function fr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function br(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, u = o.stateNode;
      o.tag === 5 && u !== null && (o = u, u = Qn(e, n), u != null && r.unshift(fr(e, u, o)), u = Qn(e, t), u != null && r.push(fr(e, u, o))), e = e.return;
    }
    return r;
  }
  function kn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ya(e, t, n, r, o) {
    for (var u = t._reactName, p = []; n !== null && n !== r; ) {
      var v = n, w = v.alternate, z = v.stateNode;
      if (w !== null && w === r) break;
      v.tag === 5 && z !== null && (v = z, o ? (w = Qn(n, u), w != null && p.unshift(fr(n, w, v))) : o || (w = Qn(n, u), w != null && p.push(fr(n, w, v)))), n = n.return;
    }
    p.length !== 0 && e.push({ event: t, listeners: p });
  }
  var Gf = /\r\n?/g, Wf = /\u0000|\uFFFD/g;
  function wa(e) {
    return (typeof e == "string" ? e : "" + e).replace(Gf, `
`).replace(Wf, "");
  }
  function ei(e, t, n) {
    if (t = wa(t), wa(e) !== t && n) throw Error(s(425));
  }
  function ti() {
  }
  var Ol = null, Nl = null;
  function Il(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Rl = typeof setTimeout == "function" ? setTimeout : void 0, Qf = typeof clearTimeout == "function" ? clearTimeout : void 0, Sa = typeof Promise == "function" ? Promise : void 0, Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sa < "u" ? function(e) {
    return Sa.resolve(null).then(e).catch(Xf);
  } : Rl;
  function Xf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Dl(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), tr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    tr(t);
  }
  function Ht(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Ea(e) {
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
  var Pn = Math.random().toString(36).slice(2), xt = "__reactFiber$" + Pn, dr = "__reactProps$" + Pn, Pt = "__reactContainer$" + Pn, Al = "__reactEvents$" + Pn, Kf = "__reactListeners$" + Pn, qf = "__reactHandles$" + Pn;
  function nn(e) {
    var t = e[xt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Pt] || n[xt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ea(e); e !== null; ) {
          if (n = e[xt]) return n;
          e = Ea(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function pr(e) {
    return e = e[xt] || e[Pt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function _n(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ni(e) {
    return e[dr] || null;
  }
  var Fl = [], Ln = -1;
  function Ut(e) {
    return { current: e };
  }
  function Se(e) {
    0 > Ln || (e.current = Fl[Ln], Fl[Ln] = null, Ln--);
  }
  function ye(e, t) {
    Ln++, Fl[Ln] = e.current, e.current = t;
  }
  var $t = {}, He = Ut($t), Xe = Ut(!1), rn = $t;
  function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return $t;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, u;
    for (u in n) o[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Ke(e) {
    return e = e.childContextTypes, e != null;
  }
  function ri() {
    Se(Xe), Se(He);
  }
  function xa(e, t, n) {
    if (He.current !== $t) throw Error(s(168));
    ye(He, t), ye(Xe, n);
  }
  function Ta(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(s(108, ge(e) || "Unknown", o));
    return H({}, n, r);
  }
  function ii(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || $t, rn = He.current, ye(He, e), ye(Xe, Xe.current), !0;
  }
  function Ca(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = Ta(e, t, rn), r.__reactInternalMemoizedMergedChildContext = e, Se(Xe), Se(He), ye(He, e)) : Se(Xe), ye(Xe, n);
  }
  var _t = null, li = !1, jl = !1;
  function ka(e) {
    _t === null ? _t = [e] : _t.push(e);
  }
  function Zf(e) {
    li = !0, ka(e);
  }
  function Gt() {
    if (!jl && _t !== null) {
      jl = !0;
      var e = 0, t = he;
      try {
        var n = _t;
        for (he = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        _t = null, li = !1;
      } catch (o) {
        throw _t !== null && (_t = _t.slice(e + 1)), _o(sl, Gt), o;
      } finally {
        he = t, jl = !1;
      }
    }
    return null;
  }
  var Mn = [], On = 0, si = null, oi = 0, ot = [], at = 0, ln = null, Lt = 1, zt = "";
  function sn(e, t) {
    Mn[On++] = oi, Mn[On++] = si, si = e, oi = t;
  }
  function Pa(e, t, n) {
    ot[at++] = Lt, ot[at++] = zt, ot[at++] = ln, ln = e;
    var r = Lt;
    e = zt;
    var o = 32 - pt(r) - 1;
    r &= ~(1 << o), n += 1;
    var u = 32 - pt(t) + o;
    if (30 < u) {
      var p = o - o % 5;
      u = (r & (1 << p) - 1).toString(32), r >>= p, o -= p, Lt = 1 << 32 - pt(t) + o | n << o | r, zt = u + e;
    } else Lt = 1 << u | n << o | r, zt = e;
  }
  function Vl(e) {
    e.return !== null && (sn(e, 1), Pa(e, 1, 0));
  }
  function Bl(e) {
    for (; e === si; ) si = Mn[--On], Mn[On] = null, oi = Mn[--On], Mn[On] = null;
    for (; e === ln; ) ln = ot[--at], ot[at] = null, zt = ot[--at], ot[at] = null, Lt = ot[--at], ot[at] = null;
  }
  var nt = null, rt = null, xe = !1, ht = null;
  function _a(e, t) {
    var n = dt(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function La(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = Ht(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, nt = e, rt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = ln !== null ? { id: Lt, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = dt(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, nt = e, rt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Hl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ul(e) {
    if (xe) {
      var t = rt;
      if (t) {
        var n = t;
        if (!La(e, t)) {
          if (Hl(e)) throw Error(s(418));
          t = Ht(n.nextSibling);
          var r = nt;
          t && La(e, t) ? _a(r, n) : (e.flags = e.flags & -4097 | 2, xe = !1, nt = e);
        }
      } else {
        if (Hl(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, xe = !1, nt = e;
      }
    }
  }
  function za(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    nt = e;
  }
  function ai(e) {
    if (e !== nt) return !1;
    if (!xe) return za(e), xe = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Il(e.type, e.memoizedProps)), t && (t = rt)) {
      if (Hl(e)) throw Ma(), Error(s(418));
      for (; t; ) _a(e, t), t = Ht(t.nextSibling);
    }
    if (za(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = Ht(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? Ht(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ma() {
    for (var e = rt; e; ) e = Ht(e.nextSibling);
  }
  function Nn() {
    rt = nt = null, xe = !1;
  }
  function $l(e) {
    ht === null ? ht = [e] : ht.push(e);
  }
  var Jf = V.ReactCurrentBatchConfig;
  function mr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var o = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(p) {
          var v = o.refs;
          p === null ? delete v[u] : v[u] = p;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function ui(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Oa(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Na(e) {
    function t(k, x) {
      if (e) {
        var L = k.deletions;
        L === null ? (k.deletions = [x], k.flags |= 16) : L.push(x);
      }
    }
    function n(k, x) {
      if (!e) return null;
      for (; x !== null; ) t(k, x), x = x.sibling;
      return null;
    }
    function r(k, x) {
      for (k = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? k.set(x.key, x) : k.set(x.index, x), x = x.sibling;
      return k;
    }
    function o(k, x) {
      return k = Jt(k, x), k.index = 0, k.sibling = null, k;
    }
    function u(k, x, L) {
      return k.index = L, e ? (L = k.alternate, L !== null ? (L = L.index, L < x ? (k.flags |= 2, x) : L) : (k.flags |= 2, x)) : (k.flags |= 1048576, x);
    }
    function p(k) {
      return e && k.alternate === null && (k.flags |= 2), k;
    }
    function v(k, x, L, j) {
      return x === null || x.tag !== 6 ? (x = Rs(L, k.mode, j), x.return = k, x) : (x = o(x, L), x.return = k, x);
    }
    function w(k, x, L, j) {
      var J = L.type;
      return J === W ? D(k, x, L.props.children, j, L.key) : x !== null && (x.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _e && Oa(J) === x.type) ? (j = o(x, L.props), j.ref = mr(k, x, L), j.return = k, j) : (j = Ii(L.type, L.key, L.props, null, k.mode, j), j.ref = mr(k, x, L), j.return = k, j);
    }
    function z(k, x, L, j) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== L.containerInfo || x.stateNode.implementation !== L.implementation ? (x = Ds(L, k.mode, j), x.return = k, x) : (x = o(x, L.children || []), x.return = k, x);
    }
    function D(k, x, L, j, J) {
      return x === null || x.tag !== 7 ? (x = mn(L, k.mode, j, J), x.return = k, x) : (x = o(x, L), x.return = k, x);
    }
    function F(k, x, L) {
      if (typeof x == "string" && x !== "" || typeof x == "number") return x = Rs("" + x, k.mode, L), x.return = k, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Y:
            return L = Ii(x.type, x.key, x.props, null, k.mode, L), L.ref = mr(k, null, x), L.return = k, L;
          case re:
            return x = Ds(x, k.mode, L), x.return = k, x;
          case _e:
            var j = x._init;
            return F(k, j(x._payload), L);
        }
        if ($n(x) || $(x)) return x = mn(x, k.mode, L, null), x.return = k, x;
        ui(k, x);
      }
      return null;
    }
    function I(k, x, L, j) {
      var J = x !== null ? x.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return J !== null ? null : v(k, x, "" + L, j);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Y:
            return L.key === J ? w(k, x, L, j) : null;
          case re:
            return L.key === J ? z(k, x, L, j) : null;
          case _e:
            return J = L._init, I(
              k,
              x,
              J(L._payload),
              j
            );
        }
        if ($n(L) || $(L)) return J !== null ? null : D(k, x, L, j, null);
        ui(k, L);
      }
      return null;
    }
    function Q(k, x, L, j, J) {
      if (typeof j == "string" && j !== "" || typeof j == "number") return k = k.get(L) || null, v(x, k, "" + j, J);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case Y:
            return k = k.get(j.key === null ? L : j.key) || null, w(x, k, j, J);
          case re:
            return k = k.get(j.key === null ? L : j.key) || null, z(x, k, j, J);
          case _e:
            var te = j._init;
            return Q(k, x, L, te(j._payload), J);
        }
        if ($n(j) || $(j)) return k = k.get(L) || null, D(x, k, j, J, null);
        ui(x, j);
      }
      return null;
    }
    function q(k, x, L, j) {
      for (var J = null, te = null, ne = x, le = x = 0, Fe = null; ne !== null && le < L.length; le++) {
        ne.index > le ? (Fe = ne, ne = null) : Fe = ne.sibling;
        var pe = I(k, ne, L[le], j);
        if (pe === null) {
          ne === null && (ne = Fe);
          break;
        }
        e && ne && pe.alternate === null && t(k, ne), x = u(pe, x, le), te === null ? J = pe : te.sibling = pe, te = pe, ne = Fe;
      }
      if (le === L.length) return n(k, ne), xe && sn(k, le), J;
      if (ne === null) {
        for (; le < L.length; le++) ne = F(k, L[le], j), ne !== null && (x = u(ne, x, le), te === null ? J = ne : te.sibling = ne, te = ne);
        return xe && sn(k, le), J;
      }
      for (ne = r(k, ne); le < L.length; le++) Fe = Q(ne, k, le, L[le], j), Fe !== null && (e && Fe.alternate !== null && ne.delete(Fe.key === null ? le : Fe.key), x = u(Fe, x, le), te === null ? J = Fe : te.sibling = Fe, te = Fe);
      return e && ne.forEach(function(bt) {
        return t(k, bt);
      }), xe && sn(k, le), J;
    }
    function Z(k, x, L, j) {
      var J = $(L);
      if (typeof J != "function") throw Error(s(150));
      if (L = J.call(L), L == null) throw Error(s(151));
      for (var te = J = null, ne = x, le = x = 0, Fe = null, pe = L.next(); ne !== null && !pe.done; le++, pe = L.next()) {
        ne.index > le ? (Fe = ne, ne = null) : Fe = ne.sibling;
        var bt = I(k, ne, pe.value, j);
        if (bt === null) {
          ne === null && (ne = Fe);
          break;
        }
        e && ne && bt.alternate === null && t(k, ne), x = u(bt, x, le), te === null ? J = bt : te.sibling = bt, te = bt, ne = Fe;
      }
      if (pe.done) return n(
        k,
        ne
      ), xe && sn(k, le), J;
      if (ne === null) {
        for (; !pe.done; le++, pe = L.next()) pe = F(k, pe.value, j), pe !== null && (x = u(pe, x, le), te === null ? J = pe : te.sibling = pe, te = pe);
        return xe && sn(k, le), J;
      }
      for (ne = r(k, ne); !pe.done; le++, pe = L.next()) pe = Q(ne, k, le, pe.value, j), pe !== null && (e && pe.alternate !== null && ne.delete(pe.key === null ? le : pe.key), x = u(pe, x, le), te === null ? J = pe : te.sibling = pe, te = pe);
      return e && ne.forEach(function(Od) {
        return t(k, Od);
      }), xe && sn(k, le), J;
    }
    function ze(k, x, L, j) {
      if (typeof L == "object" && L !== null && L.type === W && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Y:
            e: {
              for (var J = L.key, te = x; te !== null; ) {
                if (te.key === J) {
                  if (J = L.type, J === W) {
                    if (te.tag === 7) {
                      n(k, te.sibling), x = o(te, L.props.children), x.return = k, k = x;
                      break e;
                    }
                  } else if (te.elementType === J || typeof J == "object" && J !== null && J.$$typeof === _e && Oa(J) === te.type) {
                    n(k, te.sibling), x = o(te, L.props), x.ref = mr(k, te, L), x.return = k, k = x;
                    break e;
                  }
                  n(k, te);
                  break;
                } else t(k, te);
                te = te.sibling;
              }
              L.type === W ? (x = mn(L.props.children, k.mode, j, L.key), x.return = k, k = x) : (j = Ii(L.type, L.key, L.props, null, k.mode, j), j.ref = mr(k, x, L), j.return = k, k = j);
            }
            return p(k);
          case re:
            e: {
              for (te = L.key; x !== null; ) {
                if (x.key === te) if (x.tag === 4 && x.stateNode.containerInfo === L.containerInfo && x.stateNode.implementation === L.implementation) {
                  n(k, x.sibling), x = o(x, L.children || []), x.return = k, k = x;
                  break e;
                } else {
                  n(k, x);
                  break;
                }
                else t(k, x);
                x = x.sibling;
              }
              x = Ds(L, k.mode, j), x.return = k, k = x;
            }
            return p(k);
          case _e:
            return te = L._init, ze(k, x, te(L._payload), j);
        }
        if ($n(L)) return q(k, x, L, j);
        if ($(L)) return Z(k, x, L, j);
        ui(k, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, x !== null && x.tag === 6 ? (n(k, x.sibling), x = o(x, L), x.return = k, k = x) : (n(k, x), x = Rs(L, k.mode, j), x.return = k, k = x), p(k)) : n(k, x);
    }
    return ze;
  }
  var In = Na(!0), Ia = Na(!1), ci = Ut(null), fi = null, Rn = null, Gl = null;
  function Wl() {
    Gl = Rn = fi = null;
  }
  function Ql(e) {
    var t = ci.current;
    Se(ci), e._currentValue = t;
  }
  function Yl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Dn(e, t) {
    fi = e, Gl = Rn = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (qe = !0), e.firstContext = null);
  }
  function ut(e) {
    var t = e._currentValue;
    if (Gl !== e) if (e = { context: e, memoizedValue: t, next: null }, Rn === null) {
      if (fi === null) throw Error(s(308));
      Rn = e, fi.dependencies = { lanes: 0, firstContext: e };
    } else Rn = Rn.next = e;
    return t;
  }
  var on = null;
  function Xl(e) {
    on === null ? on = [e] : on.push(e);
  }
  function Ra(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Xl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Mt(e, r);
  }
  function Mt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Wt = !1;
  function Kl(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Da(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ot(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Qt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (ce & 2) !== 0) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Mt(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Xl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Mt(e, n);
  }
  function di(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
    }
  }
  function Aa(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var p = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? o = u = p : u = u.next = p, n = n.next;
        } while (n !== null);
        u === null ? o = u = t : u = u.next = t;
      } else o = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function pi(e, t, n, r) {
    var o = e.updateQueue;
    Wt = !1;
    var u = o.firstBaseUpdate, p = o.lastBaseUpdate, v = o.shared.pending;
    if (v !== null) {
      o.shared.pending = null;
      var w = v, z = w.next;
      w.next = null, p === null ? u = z : p.next = z, p = w;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, v = D.lastBaseUpdate, v !== p && (v === null ? D.firstBaseUpdate = z : v.next = z, D.lastBaseUpdate = w));
    }
    if (u !== null) {
      var F = o.baseState;
      p = 0, D = z = w = null, v = u;
      do {
        var I = v.lane, Q = v.eventTime;
        if ((r & I) === I) {
          D !== null && (D = D.next = {
            eventTime: Q,
            lane: 0,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null
          });
          e: {
            var q = e, Z = v;
            switch (I = t, Q = n, Z.tag) {
              case 1:
                if (q = Z.payload, typeof q == "function") {
                  F = q.call(Q, F, I);
                  break e;
                }
                F = q;
                break e;
              case 3:
                q.flags = q.flags & -65537 | 128;
              case 0:
                if (q = Z.payload, I = typeof q == "function" ? q.call(Q, F, I) : q, I == null) break e;
                F = H({}, F, I);
                break e;
              case 2:
                Wt = !0;
            }
          }
          v.callback !== null && v.lane !== 0 && (e.flags |= 64, I = o.effects, I === null ? o.effects = [v] : I.push(v));
        } else Q = { eventTime: Q, lane: I, tag: v.tag, payload: v.payload, callback: v.callback, next: null }, D === null ? (z = D = Q, w = F) : D = D.next = Q, p |= I;
        if (v = v.next, v === null) {
          if (v = o.shared.pending, v === null) break;
          I = v, v = I.next, I.next = null, o.lastBaseUpdate = I, o.shared.pending = null;
        }
      } while (!0);
      if (D === null && (w = F), o.baseState = w, o.firstBaseUpdate = z, o.lastBaseUpdate = D, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          p |= o.lane, o = o.next;
        while (o !== t);
      } else u === null && (o.shared.lanes = 0);
      cn |= p, e.lanes = p, e.memoizedState = F;
    }
  }
  function Fa(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(s(191, o));
        o.call(r);
      }
    }
  }
  var hr = {}, Tt = Ut(hr), vr = Ut(hr), gr = Ut(hr);
  function an(e) {
    if (e === hr) throw Error(s(174));
    return e;
  }
  function ql(e, t) {
    switch (ye(gr, t), ye(vr, e), ye(Tt, hr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Zi(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Zi(t, e);
    }
    Se(Tt), ye(Tt, t);
  }
  function An() {
    Se(Tt), Se(vr), Se(gr);
  }
  function ja(e) {
    an(gr.current);
    var t = an(Tt.current), n = Zi(t, e.type);
    t !== n && (ye(vr, e), ye(Tt, n));
  }
  function Zl(e) {
    vr.current === e && (Se(Tt), Se(vr));
  }
  var Te = Ut(0);
  function mi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Jl = [];
  function bl() {
    for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
    Jl.length = 0;
  }
  var hi = V.ReactCurrentDispatcher, es = V.ReactCurrentBatchConfig, un = 0, Ce = null, Ne = null, De = null, vi = !1, yr = !1, wr = 0, bf = 0;
  function Ue() {
    throw Error(s(321));
  }
  function ts(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!mt(e[n], t[n])) return !1;
    return !0;
  }
  function ns(e, t, n, r, o, u) {
    if (un = u, Ce = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, hi.current = e === null || e.memoizedState === null ? rd : id, e = n(r, o), yr) {
      u = 0;
      do {
        if (yr = !1, wr = 0, 25 <= u) throw Error(s(301));
        u += 1, De = Ne = null, t.updateQueue = null, hi.current = ld, e = n(r, o);
      } while (yr);
    }
    if (hi.current = wi, t = Ne !== null && Ne.next !== null, un = 0, De = Ne = Ce = null, vi = !1, t) throw Error(s(300));
    return e;
  }
  function rs() {
    var e = wr !== 0;
    return wr = 0, e;
  }
  function Ct() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return De === null ? Ce.memoizedState = De = e : De = De.next = e, De;
  }
  function ct() {
    if (Ne === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ne.next;
    var t = De === null ? Ce.memoizedState : De.next;
    if (t !== null) De = t, Ne = e;
    else {
      if (e === null) throw Error(s(310));
      Ne = e, e = { memoizedState: Ne.memoizedState, baseState: Ne.baseState, baseQueue: Ne.baseQueue, queue: Ne.queue, next: null }, De === null ? Ce.memoizedState = De = e : De = De.next = e;
    }
    return De;
  }
  function Sr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function is(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ne, o = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (o !== null) {
        var p = o.next;
        o.next = u.next, u.next = p;
      }
      r.baseQueue = o = u, n.pending = null;
    }
    if (o !== null) {
      u = o.next, r = r.baseState;
      var v = p = null, w = null, z = u;
      do {
        var D = z.lane;
        if ((un & D) === D) w !== null && (w = w.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), r = z.hasEagerState ? z.eagerState : e(r, z.action);
        else {
          var F = {
            lane: D,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          w === null ? (v = w = F, p = r) : w = w.next = F, Ce.lanes |= D, cn |= D;
        }
        z = z.next;
      } while (z !== null && z !== u);
      w === null ? p = r : w.next = v, mt(r, t.memoizedState) || (qe = !0), t.memoizedState = r, t.baseState = p, t.baseQueue = w, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        u = o.lane, Ce.lanes |= u, cn |= u, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ls(e) {
    var t = ct(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, u = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var p = o = o.next;
      do
        u = e(u, p.action), p = p.next;
      while (p !== o);
      mt(u, t.memoizedState) || (qe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function Va() {
  }
  function Ba(e, t) {
    var n = Ce, r = ct(), o = t(), u = !mt(r.memoizedState, o);
    if (u && (r.memoizedState = o, qe = !0), r = r.queue, ss($a.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || De !== null && De.memoizedState.tag & 1) {
      if (n.flags |= 2048, Er(9, Ua.bind(null, n, r, o, t), void 0, null), Ae === null) throw Error(s(349));
      (un & 30) !== 0 || Ha(n, t, o);
    }
    return o;
  }
  function Ha(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ua(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ga(t) && Wa(e);
  }
  function $a(e, t, n) {
    return n(function() {
      Ga(t) && Wa(e);
    });
  }
  function Ga(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mt(e, n);
    } catch {
      return !0;
    }
  }
  function Wa(e) {
    var t = Mt(e, 1);
    t !== null && wt(t, e, 1, -1);
  }
  function Qa(e) {
    var t = Ct();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Sr, lastRenderedState: e }, t.queue = e, e = e.dispatch = nd.bind(null, Ce, e), [t.memoizedState, e];
  }
  function Er(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Ce.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Ce.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ya() {
    return ct().memoizedState;
  }
  function gi(e, t, n, r) {
    var o = Ct();
    Ce.flags |= e, o.memoizedState = Er(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function yi(e, t, n, r) {
    var o = ct();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Ne !== null) {
      var p = Ne.memoizedState;
      if (u = p.destroy, r !== null && ts(r, p.deps)) {
        o.memoizedState = Er(t, n, u, r);
        return;
      }
    }
    Ce.flags |= e, o.memoizedState = Er(1 | t, n, u, r);
  }
  function Xa(e, t) {
    return gi(8390656, 8, e, t);
  }
  function ss(e, t) {
    return yi(2048, 8, e, t);
  }
  function Ka(e, t) {
    return yi(4, 2, e, t);
  }
  function qa(e, t) {
    return yi(4, 4, e, t);
  }
  function Za(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Ja(e, t, n) {
    return n = n != null ? n.concat([e]) : null, yi(4, 4, Za.bind(null, t, e), n);
  }
  function os() {
  }
  function ba(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ts(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function eu(e, t) {
    var n = ct();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && ts(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function tu(e, t, n) {
    return (un & 21) === 0 ? (e.baseState && (e.baseState = !1, qe = !0), e.memoizedState = n) : (mt(n, t) || (n = Oo(), Ce.lanes |= n, cn |= n, e.baseState = !0), t);
  }
  function ed(e, t) {
    var n = he;
    he = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = es.transition;
    es.transition = {};
    try {
      e(!1), t();
    } finally {
      he = n, es.transition = r;
    }
  }
  function nu() {
    return ct().memoizedState;
  }
  function td(e, t, n) {
    var r = qt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ru(e)) iu(t, n);
    else if (n = Ra(e, t, n, r), n !== null) {
      var o = Qe();
      wt(n, e, r, o), lu(n, t, r);
    }
  }
  function nd(e, t, n) {
    var r = qt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ru(e)) iu(t, o);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var p = t.lastRenderedState, v = u(p, n);
        if (o.hasEagerState = !0, o.eagerState = v, mt(v, p)) {
          var w = t.interleaved;
          w === null ? (o.next = o, Xl(t)) : (o.next = w.next, w.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = Ra(e, t, o, r), n !== null && (o = Qe(), wt(n, e, r, o), lu(n, t, r));
    }
  }
  function ru(e) {
    var t = e.alternate;
    return e === Ce || t !== null && t === Ce;
  }
  function iu(e, t) {
    yr = vi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function lu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ul(e, n);
    }
  }
  var wi = { readContext: ut, useCallback: Ue, useContext: Ue, useEffect: Ue, useImperativeHandle: Ue, useInsertionEffect: Ue, useLayoutEffect: Ue, useMemo: Ue, useReducer: Ue, useRef: Ue, useState: Ue, useDebugValue: Ue, useDeferredValue: Ue, useTransition: Ue, useMutableSource: Ue, useSyncExternalStore: Ue, useId: Ue, unstable_isNewReconciler: !1 }, rd = { readContext: ut, useCallback: function(e, t) {
    return Ct().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: ut, useEffect: Xa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, gi(
      4194308,
      4,
      Za.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return gi(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return gi(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Ct();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Ct();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = td.bind(null, Ce, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Ct();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Qa, useDebugValue: os, useDeferredValue: function(e) {
    return Ct().memoizedState = e;
  }, useTransition: function() {
    var e = Qa(!1), t = e[0];
    return e = ed.bind(null, e[1]), Ct().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = Ce, o = Ct();
    if (xe) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Ae === null) throw Error(s(349));
      (un & 30) !== 0 || Ha(r, t, n);
    }
    o.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return o.queue = u, Xa($a.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, Er(9, Ua.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Ct(), t = Ae.identifierPrefix;
    if (xe) {
      var n = zt, r = Lt;
      n = (r & ~(1 << 32 - pt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = wr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = bf++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, id = {
    readContext: ut,
    useCallback: ba,
    useContext: ut,
    useEffect: ss,
    useImperativeHandle: Ja,
    useInsertionEffect: Ka,
    useLayoutEffect: qa,
    useMemo: eu,
    useReducer: is,
    useRef: Ya,
    useState: function() {
      return is(Sr);
    },
    useDebugValue: os,
    useDeferredValue: function(e) {
      var t = ct();
      return tu(t, Ne.memoizedState, e);
    },
    useTransition: function() {
      var e = is(Sr)[0], t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Va,
    useSyncExternalStore: Ba,
    useId: nu,
    unstable_isNewReconciler: !1
  }, ld = { readContext: ut, useCallback: ba, useContext: ut, useEffect: ss, useImperativeHandle: Ja, useInsertionEffect: Ka, useLayoutEffect: qa, useMemo: eu, useReducer: ls, useRef: Ya, useState: function() {
    return ls(Sr);
  }, useDebugValue: os, useDeferredValue: function(e) {
    var t = ct();
    return Ne === null ? t.memoizedState = e : tu(t, Ne.memoizedState, e);
  }, useTransition: function() {
    var e = ls(Sr)[0], t = ct().memoizedState;
    return [e, t];
  }, useMutableSource: Va, useSyncExternalStore: Ba, useId: nu, unstable_isNewReconciler: !1 };
  function vt(e, t) {
    if (e && e.defaultProps) {
      t = H({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function as(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : H({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Si = { isMounted: function(e) {
    return (e = e._reactInternals) ? tn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = Qe(), o = qt(e), u = Ot(r, o);
    u.payload = t, n != null && (u.callback = n), t = Qt(e, u, o), t !== null && (wt(t, e, o, r), di(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = Qe(), o = qt(e), u = Ot(r, o);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Qt(e, u, o), t !== null && (wt(t, e, o, r), di(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = Qe(), r = qt(e), o = Ot(n, r);
    o.tag = 2, t != null && (o.callback = t), t = Qt(e, o, r), t !== null && (wt(t, e, r, n), di(t, e, r));
  } };
  function su(e, t, n, r, o, u, p) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, p) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(o, u) : !0;
  }
  function ou(e, t, n) {
    var r = !1, o = $t, u = t.contextType;
    return typeof u == "object" && u !== null ? u = ut(u) : (o = Ke(t) ? rn : He.current, r = t.contextTypes, u = (r = r != null) ? zn(e, o) : $t), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Si, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function au(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Si.enqueueReplaceState(t, t.state, null);
  }
  function us(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, Kl(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? o.context = ut(u) : (u = Ke(t) ? rn : He.current, o.context = zn(e, u)), o.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (as(e, t, u, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && Si.enqueueReplaceState(o, o.state, null), pi(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "", r = t;
      do
        n += fe(r), r = r.return;
      while (r);
      var o = n;
    } catch (u) {
      o = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function cs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function fs(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var sd = typeof WeakMap == "function" ? WeakMap : Map;
  function uu(e, t, n) {
    n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      _i || (_i = !0, Ps = r), fs(e, t);
    }, n;
  }
  function cu(e, t, n) {
    n = Ot(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        fs(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      fs(e, t), typeof r != "function" && (Xt === null ? Xt = /* @__PURE__ */ new Set([this]) : Xt.add(this));
      var p = t.stack;
      this.componentDidCatch(t.value, { componentStack: p !== null ? p : "" });
    }), n;
  }
  function fu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new sd();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Sd.bind(null, e, t, n), t.then(e, e));
  }
  function du(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function pu(e, t, n, r, o) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, Qt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e);
  }
  var od = V.ReactCurrentOwner, qe = !1;
  function We(e, t, n, r) {
    t.child = e === null ? Ia(t, null, n, r) : In(t, e.child, n, r);
  }
  function mu(e, t, n, r, o) {
    n = n.render;
    var u = t.ref;
    return Dn(t, o), r = ns(e, t, n, r, u, o), n = rs(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nt(e, t, o)) : (xe && n && Vl(t), t.flags |= 1, We(e, t, r, o), t.child);
  }
  function hu(e, t, n, r, o) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Is(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, vu(e, t, u, r, o)) : (e = Ii(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & o) === 0) {
      var p = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : or, n(p, r) && e.ref === t.ref) return Nt(e, t, o);
    }
    return t.flags |= 1, e = Jt(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function vu(e, t, n, r, o) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (or(u, r) && e.ref === t.ref) if (qe = !1, t.pendingProps = r = u, (e.lanes & o) !== 0) (e.flags & 131072) !== 0 && (qe = !0);
      else return t.lanes = e.lanes, Nt(e, t, o);
    }
    return ds(e, t, n, r, o);
  }
  function gu(e, t, n) {
    var r = t.pendingProps, o = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ye(Vn, it), it |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ye(Vn, it), it |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, ye(Vn, it), it |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, ye(Vn, it), it |= r;
    return We(e, t, o, n), t.child;
  }
  function yu(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ds(e, t, n, r, o) {
    var u = Ke(n) ? rn : He.current;
    return u = zn(t, u), Dn(t, o), n = ns(e, t, n, r, u, o), r = rs(), e !== null && !qe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Nt(e, t, o)) : (xe && r && Vl(t), t.flags |= 1, We(e, t, n, o), t.child);
  }
  function wu(e, t, n, r, o) {
    if (Ke(n)) {
      var u = !0;
      ii(t);
    } else u = !1;
    if (Dn(t, o), t.stateNode === null) xi(e, t), ou(t, n, r), us(t, n, r, o), r = !0;
    else if (e === null) {
      var p = t.stateNode, v = t.memoizedProps;
      p.props = v;
      var w = p.context, z = n.contextType;
      typeof z == "object" && z !== null ? z = ut(z) : (z = Ke(n) ? rn : He.current, z = zn(t, z));
      var D = n.getDerivedStateFromProps, F = typeof D == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      F || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (v !== r || w !== z) && au(t, p, r, z), Wt = !1;
      var I = t.memoizedState;
      p.state = I, pi(t, r, p, o), w = t.memoizedState, v !== r || I !== w || Xe.current || Wt ? (typeof D == "function" && (as(t, n, D, r), w = t.memoizedState), (v = Wt || su(t, n, v, r, I, w, z)) ? (F || typeof p.UNSAFE_componentWillMount != "function" && typeof p.componentWillMount != "function" || (typeof p.componentWillMount == "function" && p.componentWillMount(), typeof p.UNSAFE_componentWillMount == "function" && p.UNSAFE_componentWillMount()), typeof p.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = w), p.props = r, p.state = w, p.context = z, r = v) : (typeof p.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      p = t.stateNode, Da(e, t), v = t.memoizedProps, z = t.type === t.elementType ? v : vt(t.type, v), p.props = z, F = t.pendingProps, I = p.context, w = n.contextType, typeof w == "object" && w !== null ? w = ut(w) : (w = Ke(n) ? rn : He.current, w = zn(t, w));
      var Q = n.getDerivedStateFromProps;
      (D = typeof Q == "function" || typeof p.getSnapshotBeforeUpdate == "function") || typeof p.UNSAFE_componentWillReceiveProps != "function" && typeof p.componentWillReceiveProps != "function" || (v !== F || I !== w) && au(t, p, r, w), Wt = !1, I = t.memoizedState, p.state = I, pi(t, r, p, o);
      var q = t.memoizedState;
      v !== F || I !== q || Xe.current || Wt ? (typeof Q == "function" && (as(t, n, Q, r), q = t.memoizedState), (z = Wt || su(t, n, z, r, I, q, w) || !1) ? (D || typeof p.UNSAFE_componentWillUpdate != "function" && typeof p.componentWillUpdate != "function" || (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(r, q, w), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(r, q, w)), typeof p.componentDidUpdate == "function" && (t.flags |= 4), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof p.componentDidUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = q), p.props = r, p.state = q, p.context = w, r = z) : (typeof p.componentDidUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof p.getSnapshotBeforeUpdate != "function" || v === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ps(e, t, n, r, u, o);
  }
  function ps(e, t, n, r, o, u) {
    yu(e, t);
    var p = (t.flags & 128) !== 0;
    if (!r && !p) return o && Ca(t, n, !1), Nt(e, t, u);
    r = t.stateNode, od.current = t;
    var v = p && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && p ? (t.child = In(t, e.child, null, u), t.child = In(t, null, v, u)) : We(e, t, v, u), t.memoizedState = r.state, o && Ca(t, n, !0), t.child;
  }
  function Su(e) {
    var t = e.stateNode;
    t.pendingContext ? xa(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xa(e, t.context, !1), ql(e, t.containerInfo);
  }
  function Eu(e, t, n, r, o) {
    return Nn(), $l(o), t.flags |= 256, We(e, t, n, r), t.child;
  }
  var ms = { dehydrated: null, treeContext: null, retryLane: 0 };
  function hs(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function xu(e, t, n) {
    var r = t.pendingProps, o = Te.current, u = !1, p = (t.flags & 128) !== 0, v;
    if ((v = p) || (v = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), v ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), ye(Te, o & 1), e === null)
      return Ul(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (p = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, p = { mode: "hidden", children: p }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = p) : u = Ri(p, r, 0, null), e = mn(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = hs(n), t.memoizedState = ms, e) : vs(t, p));
    if (o = e.memoizedState, o !== null && (v = o.dehydrated, v !== null)) return ad(e, t, p, r, v, o, n);
    if (u) {
      u = r.fallback, p = t.mode, o = e.child, v = o.sibling;
      var w = { mode: "hidden", children: r.children };
      return (p & 1) === 0 && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = w, t.deletions = null) : (r = Jt(o, w), r.subtreeFlags = o.subtreeFlags & 14680064), v !== null ? u = Jt(v, u) : (u = mn(u, p, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, p = e.child.memoizedState, p = p === null ? hs(n) : { baseLanes: p.baseLanes | n, cachePool: null, transitions: p.transitions }, u.memoizedState = p, u.childLanes = e.childLanes & ~n, t.memoizedState = ms, r;
    }
    return u = e.child, e = u.sibling, r = Jt(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function vs(e, t) {
    return t = Ri({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Ei(e, t, n, r) {
    return r !== null && $l(r), In(t, e.child, null, n), e = vs(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function ad(e, t, n, r, o, u, p) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = cs(Error(s(422))), Ei(e, t, p, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, o = t.mode, r = Ri({ mode: "visible", children: r.children }, o, 0, null), u = mn(u, o, p, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && In(t, e.child, null, p), t.child.memoizedState = hs(p), t.memoizedState = ms, u);
    if ((t.mode & 1) === 0) return Ei(e, t, p, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var v = r.dgst;
      return r = v, u = Error(s(419)), r = cs(u, r, void 0), Ei(e, t, p, r);
    }
    if (v = (p & e.childLanes) !== 0, qe || v) {
      if (r = Ae, r !== null) {
        switch (p & -p) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = (o & (r.suspendedLanes | p)) !== 0 ? 0 : o, o !== 0 && o !== u.retryLane && (u.retryLane = o, Mt(e, o), wt(r, e, o, -1));
      }
      return Ns(), r = cs(Error(s(421))), Ei(e, t, p, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ed.bind(null, e), o._reactRetry = t, null) : (e = u.treeContext, rt = Ht(o.nextSibling), nt = t, xe = !0, ht = null, e !== null && (ot[at++] = Lt, ot[at++] = zt, ot[at++] = ln, Lt = e.id, zt = e.overflow, ln = t), t = vs(t, r.children), t.flags |= 4096, t);
  }
  function Tu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Yl(e.return, t, n);
  }
  function gs(e, t, n, r, o) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = o);
  }
  function Cu(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, u = r.tail;
    if (We(e, t, r.children, n), r = Te.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tu(e, n, t);
        else if (e.tag === 19) Tu(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (ye(Te, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && mi(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), gs(t, !1, o, n, u);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && mi(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        gs(t, !0, n, null, u);
        break;
      case "together":
        gs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xi(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Nt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), cn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Jt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Jt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function ud(e, t, n) {
    switch (t.tag) {
      case 3:
        Su(t), Nn();
        break;
      case 5:
        ja(t);
        break;
      case 1:
        Ke(t.type) && ii(t);
        break;
      case 4:
        ql(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        ye(ci, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ye(Te, Te.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? xu(e, t, n) : (ye(Te, Te.current & 1), e = Nt(e, t, n), e !== null ? e.sibling : null);
        ye(Te, Te.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Cu(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ye(Te, Te.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, gu(e, t, n);
    }
    return Nt(e, t, n);
  }
  var ku, ys, Pu, _u;
  ku = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ys = function() {
  }, Pu = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, an(Tt.current);
      var u = null;
      switch (n) {
        case "input":
          o = Yi(e, o), r = Yi(e, r), u = [];
          break;
        case "select":
          o = H({}, o, { value: void 0 }), r = H({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          o = qi(e, o), r = qi(e, r), u = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ti);
      }
      Ji(n, r);
      var p;
      n = null;
      for (z in o) if (!r.hasOwnProperty(z) && o.hasOwnProperty(z) && o[z] != null) if (z === "style") {
        var v = o[z];
        for (p in v) v.hasOwnProperty(p) && (n || (n = {}), n[p] = "");
      } else z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (f.hasOwnProperty(z) ? u || (u = []) : (u = u || []).push(z, null));
      for (z in r) {
        var w = r[z];
        if (v = o?.[z], r.hasOwnProperty(z) && w !== v && (w != null || v != null)) if (z === "style") if (v) {
          for (p in v) !v.hasOwnProperty(p) || w && w.hasOwnProperty(p) || (n || (n = {}), n[p] = "");
          for (p in w) w.hasOwnProperty(p) && v[p] !== w[p] && (n || (n = {}), n[p] = w[p]);
        } else n || (u || (u = []), u.push(
          z,
          n
        )), n = w;
        else z === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, v = v ? v.__html : void 0, w != null && v !== w && (u = u || []).push(z, w)) : z === "children" ? typeof w != "string" && typeof w != "number" || (u = u || []).push(z, "" + w) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (f.hasOwnProperty(z) ? (w != null && z === "onScroll" && we("scroll", e), u || v === w || (u = [])) : (u = u || []).push(z, w));
      }
      n && (u = u || []).push("style", n);
      var z = u;
      (t.updateQueue = z) && (t.flags |= 4);
    }
  }, _u = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function xr(e, t) {
    if (!xe) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function cd(e, t, n) {
    var r = t.pendingProps;
    switch (Bl(t), t.tag) {
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
        return $e(t), null;
      case 1:
        return Ke(t.type) && ri(), $e(t), null;
      case 3:
        return r = t.stateNode, An(), Se(Xe), Se(He), bl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ai(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ht !== null && (zs(ht), ht = null))), ys(e, t), $e(t), null;
      case 5:
        Zl(t);
        var o = an(gr.current);
        if (n = t.type, e !== null && t.stateNode != null) Pu(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return $e(t), null;
          }
          if (e = an(Tt.current), ai(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[xt] = t, r[dr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                we("cancel", r), we("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                we("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ur.length; o++) we(ur[o], r);
                break;
              case "source":
                we("error", r);
                break;
              case "img":
              case "image":
              case "link":
                we(
                  "error",
                  r
                ), we("load", r);
                break;
              case "details":
                we("toggle", r);
                break;
              case "input":
                so(r, u), we("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, we("invalid", r);
                break;
              case "textarea":
                uo(r, u), we("invalid", r);
            }
            Ji(n, u), o = null;
            for (var p in u) if (u.hasOwnProperty(p)) {
              var v = u[p];
              p === "children" ? typeof v == "string" ? r.textContent !== v && (u.suppressHydrationWarning !== !0 && ei(r.textContent, v, e), o = ["children", v]) : typeof v == "number" && r.textContent !== "" + v && (u.suppressHydrationWarning !== !0 && ei(
                r.textContent,
                v,
                e
              ), o = ["children", "" + v]) : f.hasOwnProperty(p) && v != null && p === "onScroll" && we("scroll", r);
            }
            switch (n) {
              case "input":
                Or(r), ao(r, u, !0);
                break;
              case "textarea":
                Or(r), fo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = ti);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            p = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = po(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = p.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = p.createElement(n, { is: r.is }) : (e = p.createElement(n), n === "select" && (p = e, r.multiple ? p.multiple = !0 : r.size && (p.size = r.size))) : e = p.createElementNS(e, n), e[xt] = t, e[dr] = r, ku(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (p = bi(n, r), n) {
                case "dialog":
                  we("cancel", e), we("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  we("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < ur.length; o++) we(ur[o], e);
                  o = r;
                  break;
                case "source":
                  we("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  we(
                    "error",
                    e
                  ), we("load", e), o = r;
                  break;
                case "details":
                  we("toggle", e), o = r;
                  break;
                case "input":
                  so(e, r), o = Yi(e, r), we("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = H({}, r, { value: void 0 }), we("invalid", e);
                  break;
                case "textarea":
                  uo(e, r), o = qi(e, r), we("invalid", e);
                  break;
                default:
                  o = r;
              }
              Ji(n, o), v = o;
              for (u in v) if (v.hasOwnProperty(u)) {
                var w = v[u];
                u === "style" ? vo(e, w) : u === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && mo(e, w)) : u === "children" ? typeof w == "string" ? (n !== "textarea" || w !== "") && Gn(e, w) : typeof w == "number" && Gn(e, "" + w) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (f.hasOwnProperty(u) ? w != null && u === "onScroll" && we("scroll", e) : w != null && R(e, u, w, p));
              }
              switch (n) {
                case "input":
                  Or(e), ao(e, r, !1);
                  break;
                case "textarea":
                  Or(e), fo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + me(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? gn(e, !!r.multiple, u, !1) : r.defaultValue != null && gn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = ti);
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
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return $e(t), null;
      case 6:
        if (e && t.stateNode != null) _u(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = an(gr.current), an(Tt.current), ai(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[xt] = t, (u = r.nodeValue !== n) && (e = nt, e !== null)) switch (e.tag) {
              case 3:
                ei(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ei(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[xt] = t, t.stateNode = r;
        }
        return $e(t), null;
      case 13:
        if (Se(Te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (xe && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Ma(), Nn(), t.flags |= 98560, u = !1;
          else if (u = ai(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(s(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
              u[xt] = t;
            } else Nn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), u = !1;
          } else ht !== null && (zs(ht), ht = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Te.current & 1) !== 0 ? Ie === 0 && (Ie = 3) : Ns())), t.updateQueue !== null && (t.flags |= 4), $e(t), null);
      case 4:
        return An(), ys(e, t), e === null && cr(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Ql(t.type._context), $e(t), null;
      case 17:
        return Ke(t.type) && ri(), $e(t), null;
      case 19:
        if (Se(Te), u = t.memoizedState, u === null) return $e(t), null;
        if (r = (t.flags & 128) !== 0, p = u.rendering, p === null) if (r) xr(u, !1);
        else {
          if (Ie !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (p = mi(e), p !== null) {
              for (t.flags |= 128, xr(u, !1), r = p.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, p = u.alternate, p === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = p.childLanes, u.lanes = p.lanes, u.child = p.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = p.memoizedProps, u.memoizedState = p.memoizedState, u.updateQueue = p.updateQueue, u.type = p.type, e = p.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ye(Te, Te.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Le() > Bn && (t.flags |= 128, r = !0, xr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = mi(p), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(u, !0), u.tail === null && u.tailMode === "hidden" && !p.alternate && !xe) return $e(t), null;
          } else 2 * Le() - u.renderingStartTime > Bn && n !== 1073741824 && (t.flags |= 128, r = !0, xr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (p.sibling = t.child, t.child = p) : (n = u.last, n !== null ? n.sibling = p : t.child = p, u.last = p);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Le(), t.sibling = null, n = Te.current, ye(Te, r ? n & 1 | 2 : n & 1), t) : ($e(t), null);
      case 22:
      case 23:
        return Os(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (it & 1073741824) !== 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function fd(e, t) {
    switch (Bl(t), t.tag) {
      case 1:
        return Ke(t.type) && ri(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return An(), Se(Xe), Se(He), bl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Zl(t), null;
      case 13:
        if (Se(Te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Nn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Se(Te), null;
      case 4:
        return An(), null;
      case 10:
        return Ql(t.type._context), null;
      case 22:
      case 23:
        return Os(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Ti = !1, Ge = !1, dd = typeof WeakSet == "function" ? WeakSet : Set, K = null;
  function jn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      Pe(e, t, r);
    }
    else n.current = null;
  }
  function ws(e, t, n) {
    try {
      n();
    } catch (r) {
      Pe(e, t, r);
    }
  }
  var Lu = !1;
  function pd(e, t) {
    if (Ol = $r, e = sa(), Tl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var p = 0, v = -1, w = -1, z = 0, D = 0, F = e, I = null;
          t: for (; ; ) {
            for (var Q; F !== n || o !== 0 && F.nodeType !== 3 || (v = p + o), F !== u || r !== 0 && F.nodeType !== 3 || (w = p + r), F.nodeType === 3 && (p += F.nodeValue.length), (Q = F.firstChild) !== null; )
              I = F, F = Q;
            for (; ; ) {
              if (F === e) break t;
              if (I === n && ++z === o && (v = p), I === u && ++D === r && (w = p), (Q = F.nextSibling) !== null) break;
              F = I, I = F.parentNode;
            }
            F = Q;
          }
          n = v === -1 || w === -1 ? null : { start: v, end: w };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Nl = { focusedElem: e, selectionRange: n }, $r = !1, K = t; K !== null; ) if (t = K, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, K = e;
    else for (; K !== null; ) {
      t = K;
      try {
        var q = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (q !== null) {
              var Z = q.memoizedProps, ze = q.memoizedState, k = t.stateNode, x = k.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : vt(t.type, Z), ze);
              k.__reactInternalSnapshotBeforeUpdate = x;
            }
            break;
          case 3:
            var L = t.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (j) {
        Pe(t, t.return, j);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, K = e;
        break;
      }
      K = t.return;
    }
    return q = Lu, Lu = !1, q;
  }
  function Tr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var u = o.destroy;
          o.destroy = void 0, u !== void 0 && ws(t, n, u);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Ci(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ss(e) {
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
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function zu(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zu(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[xt], delete t[dr], delete t[Al], delete t[Kf], delete t[qf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Mu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ou(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Mu(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Es(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ti));
    else if (r !== 4 && (e = e.child, e !== null)) for (Es(e, t, n), e = e.sibling; e !== null; ) Es(e, t, n), e = e.sibling;
  }
  function xs(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (xs(e, t, n), e = e.sibling; e !== null; ) xs(e, t, n), e = e.sibling;
  }
  var je = null, gt = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) Nu(e, t, n), n = n.sibling;
  }
  function Nu(e, t, n) {
    if (Et && typeof Et.onCommitFiberUnmount == "function") try {
      Et.onCommitFiberUnmount(Fr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ge || jn(n, t);
      case 6:
        var r = je, o = gt;
        je = null, Yt(e, t, n), je = r, gt = o, je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
        break;
      case 18:
        je !== null && (gt ? (e = je, n = n.stateNode, e.nodeType === 8 ? Dl(e.parentNode, n) : e.nodeType === 1 && Dl(e, n), tr(e)) : Dl(je, n.stateNode));
        break;
      case 4:
        r = je, o = gt, je = n.stateNode.containerInfo, gt = !0, Yt(e, t, n), je = r, gt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ge && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var u = o, p = u.destroy;
            u = u.tag, p !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && ws(n, t, p), o = o.next;
          } while (o !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (!Ge && (jn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (v) {
          Pe(n, t, v);
        }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ge = (r = Ge) || n.memoizedState !== null, Yt(e, t, n), Ge = r) : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function Iu(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new dd()), t.forEach(function(r) {
        var o = xd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function yt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var u = e, p = t, v = p;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 5:
              je = v.stateNode, gt = !1;
              break e;
            case 3:
              je = v.stateNode.containerInfo, gt = !0;
              break e;
            case 4:
              je = v.stateNode.containerInfo, gt = !0;
              break e;
          }
          v = v.return;
        }
        if (je === null) throw Error(s(160));
        Nu(u, p, o), je = null, gt = !1;
        var w = o.alternate;
        w !== null && (w.return = null), o.return = null;
      } catch (z) {
        Pe(o, t, z);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ru(t, e), t = t.sibling;
  }
  function Ru(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (yt(t, e), kt(e), r & 4) {
          try {
            Tr(3, e, e.return), Ci(3, e);
          } catch (Z) {
            Pe(e, e.return, Z);
          }
          try {
            Tr(5, e, e.return);
          } catch (Z) {
            Pe(e, e.return, Z);
          }
        }
        break;
      case 1:
        yt(t, e), kt(e), r & 512 && n !== null && jn(n, n.return);
        break;
      case 5:
        if (yt(t, e), kt(e), r & 512 && n !== null && jn(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Gn(o, "");
          } catch (Z) {
            Pe(e, e.return, Z);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var u = e.memoizedProps, p = n !== null ? n.memoizedProps : u, v = e.type, w = e.updateQueue;
          if (e.updateQueue = null, w !== null) try {
            v === "input" && u.type === "radio" && u.name != null && oo(o, u), bi(v, p);
            var z = bi(v, u);
            for (p = 0; p < w.length; p += 2) {
              var D = w[p], F = w[p + 1];
              D === "style" ? vo(o, F) : D === "dangerouslySetInnerHTML" ? mo(o, F) : D === "children" ? Gn(o, F) : R(o, D, F, z);
            }
            switch (v) {
              case "input":
                Xi(o, u);
                break;
              case "textarea":
                co(o, u);
                break;
              case "select":
                var I = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!u.multiple;
                var Q = u.value;
                Q != null ? gn(o, !!u.multiple, Q, !1) : I !== !!u.multiple && (u.defaultValue != null ? gn(
                  o,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : gn(o, !!u.multiple, u.multiple ? [] : "", !1));
            }
            o[dr] = u;
          } catch (Z) {
            Pe(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (yt(t, e), kt(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          o = e.stateNode, u = e.memoizedProps;
          try {
            o.nodeValue = u;
          } catch (Z) {
            Pe(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (yt(t, e), kt(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          tr(t.containerInfo);
        } catch (Z) {
          Pe(e, e.return, Z);
        }
        break;
      case 4:
        yt(t, e), kt(e);
        break;
      case 13:
        yt(t, e), kt(e), o = e.child, o.flags & 8192 && (u = o.memoizedState !== null, o.stateNode.isHidden = u, !u || o.alternate !== null && o.alternate.memoizedState !== null || (ks = Le())), r & 4 && Iu(e);
        break;
      case 22:
        if (D = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ge = (z = Ge) || D, yt(t, e), Ge = z) : yt(t, e), kt(e), r & 8192) {
          if (z = e.memoizedState !== null, (e.stateNode.isHidden = z) && !D && (e.mode & 1) !== 0) for (K = e, D = e.child; D !== null; ) {
            for (F = K = D; K !== null; ) {
              switch (I = K, Q = I.child, I.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, I, I.return);
                  break;
                case 1:
                  jn(I, I.return);
                  var q = I.stateNode;
                  if (typeof q.componentWillUnmount == "function") {
                    r = I, n = I.return;
                    try {
                      t = r, q.props = t.memoizedProps, q.state = t.memoizedState, q.componentWillUnmount();
                    } catch (Z) {
                      Pe(r, n, Z);
                    }
                  }
                  break;
                case 5:
                  jn(I, I.return);
                  break;
                case 22:
                  if (I.memoizedState !== null) {
                    Fu(F);
                    continue;
                  }
              }
              Q !== null ? (Q.return = I, K = Q) : Fu(F);
            }
            D = D.sibling;
          }
          e: for (D = null, F = e; ; ) {
            if (F.tag === 5) {
              if (D === null) {
                D = F;
                try {
                  o = F.stateNode, z ? (u = o.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (v = F.stateNode, w = F.memoizedProps.style, p = w != null && w.hasOwnProperty("display") ? w.display : null, v.style.display = ho("display", p));
                } catch (Z) {
                  Pe(e, e.return, Z);
                }
              }
            } else if (F.tag === 6) {
              if (D === null) try {
                F.stateNode.nodeValue = z ? "" : F.memoizedProps;
              } catch (Z) {
                Pe(e, e.return, Z);
              }
            } else if ((F.tag !== 22 && F.tag !== 23 || F.memoizedState === null || F === e) && F.child !== null) {
              F.child.return = F, F = F.child;
              continue;
            }
            if (F === e) break e;
            for (; F.sibling === null; ) {
              if (F.return === null || F.return === e) break e;
              D === F && (D = null), F = F.return;
            }
            D === F && (D = null), F.sibling.return = F.return, F = F.sibling;
          }
        }
        break;
      case 19:
        yt(t, e), kt(e), r & 4 && Iu(e);
        break;
      case 21:
        break;
      default:
        yt(
          t,
          e
        ), kt(e);
    }
  }
  function kt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Mu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Gn(o, ""), r.flags &= -33);
            var u = Ou(e);
            xs(e, u, o);
            break;
          case 3:
          case 4:
            var p = r.stateNode.containerInfo, v = Ou(e);
            Es(e, v, p);
            break;
          default:
            throw Error(s(161));
        }
      } catch (w) {
        Pe(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function md(e, t, n) {
    K = e, Du(e);
  }
  function Du(e, t, n) {
    for (var r = (e.mode & 1) !== 0; K !== null; ) {
      var o = K, u = o.child;
      if (o.tag === 22 && r) {
        var p = o.memoizedState !== null || Ti;
        if (!p) {
          var v = o.alternate, w = v !== null && v.memoizedState !== null || Ge;
          v = Ti;
          var z = Ge;
          if (Ti = p, (Ge = w) && !z) for (K = o; K !== null; ) p = K, w = p.child, p.tag === 22 && p.memoizedState !== null ? ju(o) : w !== null ? (w.return = p, K = w) : ju(o);
          for (; u !== null; ) K = u, Du(u), u = u.sibling;
          K = o, Ti = v, Ge = z;
        }
        Au(e);
      } else (o.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = o, K = u) : Au(e);
    }
  }
  function Au(e) {
    for (; K !== null; ) {
      var t = K;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ge || Ci(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ge) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : vt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && Fa(t, u, r);
              break;
            case 3:
              var p = t.updateQueue;
              if (p !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                Fa(t, p, n);
              }
              break;
            case 5:
              var v = t.stateNode;
              if (n === null && t.flags & 4) {
                n = v;
                var w = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    w.autoFocus && n.focus();
                    break;
                  case "img":
                    w.src && (n.src = w.src);
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
                var z = t.alternate;
                if (z !== null) {
                  var D = z.memoizedState;
                  if (D !== null) {
                    var F = D.dehydrated;
                    F !== null && tr(F);
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
              throw Error(s(163));
          }
          Ge || t.flags & 512 && Ss(t);
        } catch (I) {
          Pe(t, t.return, I);
        }
      }
      if (t === e) {
        K = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function Fu(e) {
    for (; K !== null; ) {
      var t = K;
      if (t === e) {
        K = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, K = n;
        break;
      }
      K = t.return;
    }
  }
  function ju(e) {
    for (; K !== null; ) {
      var t = K;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ci(4, t);
            } catch (w) {
              Pe(t, n, w);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (w) {
                Pe(t, o, w);
              }
            }
            var u = t.return;
            try {
              Ss(t);
            } catch (w) {
              Pe(t, u, w);
            }
            break;
          case 5:
            var p = t.return;
            try {
              Ss(t);
            } catch (w) {
              Pe(t, p, w);
            }
        }
      } catch (w) {
        Pe(t, t.return, w);
      }
      if (t === e) {
        K = null;
        break;
      }
      var v = t.sibling;
      if (v !== null) {
        v.return = t.return, K = v;
        break;
      }
      K = t.return;
    }
  }
  var hd = Math.ceil, ki = V.ReactCurrentDispatcher, Ts = V.ReactCurrentOwner, ft = V.ReactCurrentBatchConfig, ce = 0, Ae = null, Me = null, Ve = 0, it = 0, Vn = Ut(0), Ie = 0, Cr = null, cn = 0, Pi = 0, Cs = 0, kr = null, Ze = null, ks = 0, Bn = 1 / 0, It = null, _i = !1, Ps = null, Xt = null, Li = !1, Kt = null, zi = 0, Pr = 0, _s = null, Mi = -1, Oi = 0;
  function Qe() {
    return (ce & 6) !== 0 ? Le() : Mi !== -1 ? Mi : Mi = Le();
  }
  function qt(e) {
    return (e.mode & 1) === 0 ? 1 : (ce & 2) !== 0 && Ve !== 0 ? Ve & -Ve : Jf.transition !== null ? (Oi === 0 && (Oi = Oo()), Oi) : (e = he, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Bo(e.type)), e);
  }
  function wt(e, t, n, r) {
    if (50 < Pr) throw Pr = 0, _s = null, Error(s(185));
    qn(e, n, r), ((ce & 2) === 0 || e !== Ae) && (e === Ae && ((ce & 2) === 0 && (Pi |= n), Ie === 4 && Zt(e, Ve)), Je(e, r), n === 1 && ce === 0 && (t.mode & 1) === 0 && (Bn = Le() + 500, li && Gt()));
  }
  function Je(e, t) {
    var n = e.callbackNode;
    Zc(e, t);
    var r = Br(e, e === Ae ? Ve : 0);
    if (r === 0) n !== null && Lo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Lo(n), t === 1) e.tag === 0 ? Zf(Bu.bind(null, e)) : ka(Bu.bind(null, e)), Yf(function() {
        (ce & 6) === 0 && Gt();
      }), n = null;
      else {
        switch (No(r)) {
          case 1:
            n = sl;
            break;
          case 4:
            n = zo;
            break;
          case 16:
            n = Ar;
            break;
          case 536870912:
            n = Mo;
            break;
          default:
            n = Ar;
        }
        n = Xu(n, Vu.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Vu(e, t) {
    if (Mi = -1, Oi = 0, (ce & 6) !== 0) throw Error(s(327));
    var n = e.callbackNode;
    if (Hn() && e.callbackNode !== n) return null;
    var r = Br(e, e === Ae ? Ve : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Ni(e, r);
    else {
      t = r;
      var o = ce;
      ce |= 2;
      var u = Uu();
      (Ae !== e || Ve !== t) && (It = null, Bn = Le() + 500, dn(e, t));
      do
        try {
          yd();
          break;
        } catch (v) {
          Hu(e, v);
        }
      while (!0);
      Wl(), ki.current = u, ce = o, Me !== null ? t = 0 : (Ae = null, Ve = 0, t = Ie);
    }
    if (t !== 0) {
      if (t === 2 && (o = ol(e), o !== 0 && (r = o, t = Ls(e, o))), t === 1) throw n = Cr, dn(e, 0), Zt(e, r), Je(e, Le()), n;
      if (t === 6) Zt(e, r);
      else {
        if (o = e.current.alternate, (r & 30) === 0 && !vd(o) && (t = Ni(e, r), t === 2 && (u = ol(e), u !== 0 && (r = u, t = Ls(e, u))), t === 1)) throw n = Cr, dn(e, 0), Zt(e, r), Je(e, Le()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            pn(e, Ze, It);
            break;
          case 3:
            if (Zt(e, r), (r & 130023424) === r && (t = ks + 500 - Le(), 10 < t)) {
              if (Br(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                Qe(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Rl(pn.bind(null, e, Ze, It), t);
              break;
            }
            pn(e, Ze, It);
            break;
          case 4:
            if (Zt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var p = 31 - pt(r);
              u = 1 << p, p = t[p], p > o && (o = p), r &= ~u;
            }
            if (r = o, r = Le() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * hd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Rl(pn.bind(null, e, Ze, It), r);
              break;
            }
            pn(e, Ze, It);
            break;
          case 5:
            pn(e, Ze, It);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Je(e, Le()), e.callbackNode === n ? Vu.bind(null, e) : null;
  }
  function Ls(e, t) {
    var n = kr;
    return e.current.memoizedState.isDehydrated && (dn(e, t).flags |= 256), e = Ni(e, t), e !== 2 && (t = Ze, Ze = n, t !== null && zs(t)), e;
  }
  function zs(e) {
    Ze === null ? Ze = e : Ze.push.apply(Ze, e);
  }
  function vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], u = o.getSnapshot;
          o = o.value;
          try {
            if (!mt(u(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (t &= ~Cs, t &= ~Pi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - pt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Bu(e) {
    if ((ce & 6) !== 0) throw Error(s(327));
    Hn();
    var t = Br(e, 0);
    if ((t & 1) === 0) return Je(e, Le()), null;
    var n = Ni(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = ol(e);
      r !== 0 && (t = r, n = Ls(e, r));
    }
    if (n === 1) throw n = Cr, dn(e, 0), Zt(e, t), Je(e, Le()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, pn(e, Ze, It), Je(e, Le()), null;
  }
  function Ms(e, t) {
    var n = ce;
    ce |= 1;
    try {
      return e(t);
    } finally {
      ce = n, ce === 0 && (Bn = Le() + 500, li && Gt());
    }
  }
  function fn(e) {
    Kt !== null && Kt.tag === 0 && (ce & 6) === 0 && Hn();
    var t = ce;
    ce |= 1;
    var n = ft.transition, r = he;
    try {
      if (ft.transition = null, he = 1, e) return e();
    } finally {
      he = r, ft.transition = n, ce = t, (ce & 6) === 0 && Gt();
    }
  }
  function Os() {
    it = Vn.current, Se(Vn);
  }
  function dn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Qf(n)), Me !== null) for (n = Me.return; n !== null; ) {
      var r = n;
      switch (Bl(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ri();
          break;
        case 3:
          An(), Se(Xe), Se(He), bl();
          break;
        case 5:
          Zl(r);
          break;
        case 4:
          An();
          break;
        case 13:
          Se(Te);
          break;
        case 19:
          Se(Te);
          break;
        case 10:
          Ql(r.type._context);
          break;
        case 22:
        case 23:
          Os();
      }
      n = n.return;
    }
    if (Ae = e, Me = e = Jt(e.current, null), Ve = it = t, Ie = 0, Cr = null, Cs = Pi = cn = 0, Ze = kr = null, on !== null) {
      for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, u = n.pending;
        if (u !== null) {
          var p = u.next;
          u.next = o, r.next = p;
        }
        n.pending = r;
      }
      on = null;
    }
    return e;
  }
  function Hu(e, t) {
    do {
      var n = Me;
      try {
        if (Wl(), hi.current = wi, vi) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          vi = !1;
        }
        if (un = 0, De = Ne = Ce = null, yr = !1, wr = 0, Ts.current = null, n === null || n.return === null) {
          Ie = 1, Cr = t, Me = null;
          break;
        }
        e: {
          var u = e, p = n.return, v = n, w = t;
          if (t = Ve, v.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var z = w, D = v, F = D.tag;
            if ((D.mode & 1) === 0 && (F === 0 || F === 11 || F === 15)) {
              var I = D.alternate;
              I ? (D.updateQueue = I.updateQueue, D.memoizedState = I.memoizedState, D.lanes = I.lanes) : (D.updateQueue = null, D.memoizedState = null);
            }
            var Q = du(p);
            if (Q !== null) {
              Q.flags &= -257, pu(Q, p, v, u, t), Q.mode & 1 && fu(u, z, t), t = Q, w = z;
              var q = t.updateQueue;
              if (q === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(w), t.updateQueue = Z;
              } else q.add(w);
              break e;
            } else {
              if ((t & 1) === 0) {
                fu(u, z, t), Ns();
                break e;
              }
              w = Error(s(426));
            }
          } else if (xe && v.mode & 1) {
            var ze = du(p);
            if (ze !== null) {
              (ze.flags & 65536) === 0 && (ze.flags |= 256), pu(ze, p, v, u, t), $l(Fn(w, v));
              break e;
            }
          }
          u = w = Fn(w, v), Ie !== 4 && (Ie = 2), kr === null ? kr = [u] : kr.push(u), u = p;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var k = uu(u, w, t);
                Aa(u, k);
                break e;
              case 1:
                v = w;
                var x = u.type, L = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Xt === null || !Xt.has(L)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var j = cu(u, v, t);
                  Aa(u, j);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        Gu(n);
      } catch (J) {
        t = J, Me === n && n !== null && (Me = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Uu() {
    var e = ki.current;
    return ki.current = wi, e === null ? wi : e;
  }
  function Ns() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4), Ae === null || (cn & 268435455) === 0 && (Pi & 268435455) === 0 || Zt(Ae, Ve);
  }
  function Ni(e, t) {
    var n = ce;
    ce |= 2;
    var r = Uu();
    (Ae !== e || Ve !== t) && (It = null, dn(e, t));
    do
      try {
        gd();
        break;
      } catch (o) {
        Hu(e, o);
      }
    while (!0);
    if (Wl(), ce = n, ki.current = r, Me !== null) throw Error(s(261));
    return Ae = null, Ve = 0, Ie;
  }
  function gd() {
    for (; Me !== null; ) $u(Me);
  }
  function yd() {
    for (; Me !== null && !Uc(); ) $u(Me);
  }
  function $u(e) {
    var t = Yu(e.alternate, e, it);
    e.memoizedProps = e.pendingProps, t === null ? Gu(e) : Me = t, Ts.current = null;
  }
  function Gu(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = cd(n, t, it), n !== null) {
          Me = n;
          return;
        }
      } else {
        if (n = fd(n, t), n !== null) {
          n.flags &= 32767, Me = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ie = 6, Me = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Me = t;
        return;
      }
      Me = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
  }
  function pn(e, t, n) {
    var r = he, o = ft.transition;
    try {
      ft.transition = null, he = 1, wd(e, t, n, r);
    } finally {
      ft.transition = o, he = r;
    }
    return null;
  }
  function wd(e, t, n, r) {
    do
      Hn();
    while (Kt !== null);
    if ((ce & 6) !== 0) throw Error(s(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Jc(e, u), e === Ae && (Me = Ae = null, Ve = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Li || (Li = !0, Xu(Ar, function() {
      return Hn(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = ft.transition, ft.transition = null;
      var p = he;
      he = 1;
      var v = ce;
      ce |= 4, Ts.current = null, pd(e, n), Ru(n, e), Vf(Nl), $r = !!Ol, Nl = Ol = null, e.current = n, md(n), $c(), ce = v, he = p, ft.transition = u;
    } else e.current = n;
    if (Li && (Li = !1, Kt = e, zi = o), u = e.pendingLanes, u === 0 && (Xt = null), Qc(n.stateNode), Je(e, Le()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (_i) throw _i = !1, e = Ps, Ps = null, e;
    return (zi & 1) !== 0 && e.tag !== 0 && Hn(), u = e.pendingLanes, (u & 1) !== 0 ? e === _s ? Pr++ : (Pr = 0, _s = e) : Pr = 0, Gt(), null;
  }
  function Hn() {
    if (Kt !== null) {
      var e = No(zi), t = ft.transition, n = he;
      try {
        if (ft.transition = null, he = 16 > e ? 16 : e, Kt === null) var r = !1;
        else {
          if (e = Kt, Kt = null, zi = 0, (ce & 6) !== 0) throw Error(s(331));
          var o = ce;
          for (ce |= 4, K = e.current; K !== null; ) {
            var u = K, p = u.child;
            if ((K.flags & 16) !== 0) {
              var v = u.deletions;
              if (v !== null) {
                for (var w = 0; w < v.length; w++) {
                  var z = v[w];
                  for (K = z; K !== null; ) {
                    var D = K;
                    switch (D.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Tr(8, D, u);
                    }
                    var F = D.child;
                    if (F !== null) F.return = D, K = F;
                    else for (; K !== null; ) {
                      D = K;
                      var I = D.sibling, Q = D.return;
                      if (zu(D), D === z) {
                        K = null;
                        break;
                      }
                      if (I !== null) {
                        I.return = Q, K = I;
                        break;
                      }
                      K = Q;
                    }
                  }
                }
                var q = u.alternate;
                if (q !== null) {
                  var Z = q.child;
                  if (Z !== null) {
                    q.child = null;
                    do {
                      var ze = Z.sibling;
                      Z.sibling = null, Z = ze;
                    } while (Z !== null);
                  }
                }
                K = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && p !== null) p.return = u, K = p;
            else e: for (; K !== null; ) {
              if (u = K, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Tr(9, u, u.return);
              }
              var k = u.sibling;
              if (k !== null) {
                k.return = u.return, K = k;
                break e;
              }
              K = u.return;
            }
          }
          var x = e.current;
          for (K = x; K !== null; ) {
            p = K;
            var L = p.child;
            if ((p.subtreeFlags & 2064) !== 0 && L !== null) L.return = p, K = L;
            else e: for (p = x; K !== null; ) {
              if (v = K, (v.flags & 2048) !== 0) try {
                switch (v.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ci(9, v);
                }
              } catch (J) {
                Pe(v, v.return, J);
              }
              if (v === p) {
                K = null;
                break e;
              }
              var j = v.sibling;
              if (j !== null) {
                j.return = v.return, K = j;
                break e;
              }
              K = v.return;
            }
          }
          if (ce = o, Gt(), Et && typeof Et.onPostCommitFiberRoot == "function") try {
            Et.onPostCommitFiberRoot(Fr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        he = n, ft.transition = t;
      }
    }
    return !1;
  }
  function Wu(e, t, n) {
    t = Fn(n, t), t = uu(e, t, 1), e = Qt(e, t, 1), t = Qe(), e !== null && (qn(e, 1, t), Je(e, t));
  }
  function Pe(e, t, n) {
    if (e.tag === 3) Wu(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Wu(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Xt === null || !Xt.has(r))) {
          e = Fn(n, e), e = cu(t, e, 1), t = Qt(t, e, 1), e = Qe(), t !== null && (qn(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Sd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = Qe(), e.pingedLanes |= e.suspendedLanes & n, Ae === e && (Ve & n) === n && (Ie === 4 || Ie === 3 && (Ve & 130023424) === Ve && 500 > Le() - ks ? dn(e, 0) : Cs |= n), Je(e, t);
  }
  function Qu(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vr, Vr <<= 1, (Vr & 130023424) === 0 && (Vr = 4194304)));
    var n = Qe();
    e = Mt(e, t), e !== null && (qn(e, t, n), Je(e, n));
  }
  function Ed(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Qu(e, n);
  }
  function xd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Qu(e, n);
  }
  var Yu;
  Yu = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Xe.current) qe = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return qe = !1, ud(e, t, n);
      qe = (e.flags & 131072) !== 0;
    }
    else qe = !1, xe && (t.flags & 1048576) !== 0 && Pa(t, oi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        xi(e, t), e = t.pendingProps;
        var o = zn(t, He.current);
        Dn(t, n), o = ns(null, t, r, e, o, n);
        var u = rs();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Ke(r) ? (u = !0, ii(t)) : u = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, Kl(t), o.updater = Si, t.stateNode = o, o._reactInternals = t, us(t, r, e, n), t = ps(null, t, r, !0, u, n)) : (t.tag = 0, xe && u && Vl(t), We(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (xi(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Cd(r), e = vt(r, e), o) {
            case 0:
              t = ds(null, t, r, e, n);
              break e;
            case 1:
              t = wu(null, t, r, e, n);
              break e;
            case 11:
              t = mu(null, t, r, e, n);
              break e;
            case 14:
              t = hu(null, t, r, vt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), ds(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), wu(e, t, r, o, n);
      case 3:
        e: {
          if (Su(t), e === null) throw Error(s(387));
          r = t.pendingProps, u = t.memoizedState, o = u.element, Da(e, t), pi(t, r, null, n);
          var p = t.memoizedState;
          if (r = p.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: p.cache, pendingSuspenseBoundaries: p.pendingSuspenseBoundaries, transitions: p.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            o = Fn(Error(s(423)), t), t = Eu(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Fn(Error(s(424)), t), t = Eu(e, t, r, n, o);
            break e;
          } else for (rt = Ht(t.stateNode.containerInfo.firstChild), nt = t, xe = !0, ht = null, n = Ia(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Nn(), r === o) {
              t = Nt(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ja(t), e === null && Ul(t), r = t.type, o = t.pendingProps, u = e !== null ? e.memoizedProps : null, p = o.children, Il(r, o) ? p = null : u !== null && Il(r, u) && (t.flags |= 32), yu(e, t), We(e, t, p, n), t.child;
      case 6:
        return e === null && Ul(t), null;
      case 13:
        return xu(e, t, n);
      case 4:
        return ql(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = In(t, null, r, n) : We(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), mu(e, t, r, o, n);
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, u = t.memoizedProps, p = o.value, ye(ci, r._currentValue), r._currentValue = p, u !== null) if (mt(u.value, p)) {
            if (u.children === o.children && !Xe.current) {
              t = Nt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var v = u.dependencies;
            if (v !== null) {
              p = u.child;
              for (var w = v.firstContext; w !== null; ) {
                if (w.context === r) {
                  if (u.tag === 1) {
                    w = Ot(-1, n & -n), w.tag = 2;
                    var z = u.updateQueue;
                    if (z !== null) {
                      z = z.shared;
                      var D = z.pending;
                      D === null ? w.next = w : (w.next = D.next, D.next = w), z.pending = w;
                    }
                  }
                  u.lanes |= n, w = u.alternate, w !== null && (w.lanes |= n), Yl(
                    u.return,
                    n,
                    t
                  ), v.lanes |= n;
                  break;
                }
                w = w.next;
              }
            } else if (u.tag === 10) p = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (p = u.return, p === null) throw Error(s(341));
              p.lanes |= n, v = p.alternate, v !== null && (v.lanes |= n), Yl(p, n, t), p = u.sibling;
            } else p = u.child;
            if (p !== null) p.return = u;
            else for (p = u; p !== null; ) {
              if (p === t) {
                p = null;
                break;
              }
              if (u = p.sibling, u !== null) {
                u.return = p.return, p = u;
                break;
              }
              p = p.return;
            }
            u = p;
          }
          We(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Dn(t, n), o = ut(o), r = r(o), t.flags |= 1, We(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = vt(r, t.pendingProps), o = vt(r.type, o), hu(e, t, r, o, n);
      case 15:
        return vu(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : vt(r, o), xi(e, t), t.tag = 1, Ke(r) ? (e = !0, ii(t)) : e = !1, Dn(t, n), ou(t, r, o), us(t, r, o, n), ps(null, t, r, !0, e, n);
      case 19:
        return Cu(e, t, n);
      case 22:
        return gu(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function Xu(e, t) {
    return _o(e, t);
  }
  function Td(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dt(e, t, n, r) {
    return new Td(e, t, n, r);
  }
  function Is(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Cd(e) {
    if (typeof e == "function") return Is(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function Jt(e, t) {
    var n = e.alternate;
    return n === null ? (n = dt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Ii(e, t, n, r, o, u) {
    var p = 2;
    if (r = e, typeof e == "function") Is(e) && (p = 1);
    else if (typeof e == "string") p = 5;
    else e: switch (e) {
      case W:
        return mn(n.children, o, u, t);
      case ie:
        p = 8, o |= 8;
        break;
      case U:
        return e = dt(12, n, t, o | 2), e.elementType = U, e.lanes = u, e;
      case b:
        return e = dt(13, n, t, o), e.elementType = b, e.lanes = u, e;
      case ue:
        return e = dt(19, n, t, o), e.elementType = ue, e.lanes = u, e;
      case ee:
        return Ri(n, o, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ke:
            p = 10;
            break e;
          case G:
            p = 9;
            break e;
          case X:
            p = 11;
            break e;
          case Oe:
            p = 14;
            break e;
          case _e:
            p = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = dt(p, n, t, o), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function mn(e, t, n, r) {
    return e = dt(7, e, r, t), e.lanes = n, e;
  }
  function Ri(e, t, n, r) {
    return e = dt(22, e, r, t), e.elementType = ee, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Rs(e, t, n) {
    return e = dt(6, e, null, t), e.lanes = n, e;
  }
  function Ds(e, t, n) {
    return t = dt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function kd(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = al(0), this.expirationTimes = al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = al(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function As(e, t, n, r, o, u, p, v, w) {
    return e = new kd(e, t, n, v, w), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = dt(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Kl(u), e;
  }
  function Pd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ku(e) {
    if (!e) return $t;
    e = e._reactInternals;
    e: {
      if (tn(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ke(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ke(n)) return Ta(e, n, t);
    }
    return t;
  }
  function qu(e, t, n, r, o, u, p, v, w) {
    return e = As(n, r, !0, e, o, u, p, v, w), e.context = Ku(null), n = e.current, r = Qe(), o = qt(n), u = Ot(r, o), u.callback = t ?? null, Qt(n, u, o), e.current.lanes = o, qn(e, o, r), Je(e, r), e;
  }
  function Di(e, t, n, r) {
    var o = t.current, u = Qe(), p = qt(o);
    return n = Ku(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(u, p), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Qt(o, t, p), e !== null && (wt(e, o, p, u), di(e, o, p)), p;
  }
  function Ai(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Zu(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Fs(e, t) {
    Zu(e, t), (e = e.alternate) && Zu(e, t);
  }
  function _d() {
    return null;
  }
  var Ju = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function js(e) {
    this._internalRoot = e;
  }
  Fi.prototype.render = js.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Di(e, t, null, null);
  }, Fi.prototype.unmount = js.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      fn(function() {
        Di(null, e, null, null);
      }), t[Pt] = null;
    }
  };
  function Fi(e) {
    this._internalRoot = e;
  }
  Fi.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Do();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++) ;
      jt.splice(n, 0, e), n === 0 && jo(e);
    }
  };
  function Vs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ji(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function bu() {
  }
  function Ld(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var z = Ai(p);
          u.call(z);
        };
      }
      var p = qu(t, r, e, 0, null, !1, !1, "", bu);
      return e._reactRootContainer = p, e[Pt] = p.current, cr(e.nodeType === 8 ? e.parentNode : e), fn(), p;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var v = r;
      r = function() {
        var z = Ai(w);
        v.call(z);
      };
    }
    var w = As(e, 0, !1, null, null, !1, !1, "", bu);
    return e._reactRootContainer = w, e[Pt] = w.current, cr(e.nodeType === 8 ? e.parentNode : e), fn(function() {
      Di(t, w, n, r);
    }), w;
  }
  function Vi(e, t, n, r, o) {
    var u = n._reactRootContainer;
    if (u) {
      var p = u;
      if (typeof o == "function") {
        var v = o;
        o = function() {
          var w = Ai(p);
          v.call(w);
        };
      }
      Di(t, p, e, o);
    } else p = Ld(n, t, e, o, r);
    return Ai(p);
  }
  Io = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Kn(t.pendingLanes);
          n !== 0 && (ul(t, n | 1), Je(t, Le()), (ce & 6) === 0 && (Bn = Le() + 500, Gt()));
        }
        break;
      case 13:
        fn(function() {
          var r = Mt(e, 1);
          if (r !== null) {
            var o = Qe();
            wt(r, e, 1, o);
          }
        }), Fs(e, 1);
    }
  }, cl = function(e) {
    if (e.tag === 13) {
      var t = Mt(e, 134217728);
      if (t !== null) {
        var n = Qe();
        wt(t, e, 134217728, n);
      }
      Fs(e, 134217728);
    }
  }, Ro = function(e) {
    if (e.tag === 13) {
      var t = qt(e), n = Mt(e, t);
      if (n !== null) {
        var r = Qe();
        wt(n, e, t, r);
      }
      Fs(e, t);
    }
  }, Do = function() {
    return he;
  }, Ao = function(e, t) {
    var n = he;
    try {
      return he = e, t();
    } finally {
      he = n;
    }
  }, nl = function(e, t, n) {
    switch (t) {
      case "input":
        if (Xi(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = ni(r);
              if (!o) throw Error(s(90));
              lo(r), Xi(r, o);
            }
          }
        }
        break;
      case "textarea":
        co(e, n);
        break;
      case "select":
        t = n.value, t != null && gn(e, !!n.multiple, t, !1);
    }
  }, So = Ms, Eo = fn;
  var zd = { usingClientEntryPoint: !1, Events: [pr, _n, ni, yo, wo, Ms] }, _r = { findFiberByHostInstance: nn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Md = { bundleType: _r.bundleType, version: _r.version, rendererPackageName: _r.rendererPackageName, rendererConfig: _r.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: V.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = ko(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: _r.findFiberByHostInstance || _d, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bi.isDisabled && Bi.supportsFiber) try {
      Fr = Bi.inject(Md), Et = Bi;
    } catch {
    }
  }
  return be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zd, be.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vs(t)) throw Error(s(200));
    return Pd(e, t, null, n);
  }, be.createRoot = function(e, t) {
    if (!Vs(e)) throw Error(s(299));
    var n = !1, r = "", o = Ju;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = As(e, 1, !1, null, null, n, !1, r, o), e[Pt] = t.current, cr(e.nodeType === 8 ? e.parentNode : e), new js(t);
  }, be.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = ko(t), e = e === null ? null : e.stateNode, e;
  }, be.flushSync = function(e) {
    return fn(e);
  }, be.hydrate = function(e, t, n) {
    if (!ji(t)) throw Error(s(200));
    return Vi(null, e, t, !0, n);
  }, be.hydrateRoot = function(e, t, n) {
    if (!Vs(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, o = !1, u = "", p = Ju;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (p = n.onRecoverableError)), t = qu(t, null, e, 1, n ?? null, o, !1, u, p), e[Pt] = t.current, cr(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Fi(t);
  }, be.render = function(e, t, n) {
    if (!ji(t)) throw Error(s(200));
    return Vi(null, e, t, !1, n);
  }, be.unmountComponentAtNode = function(e) {
    if (!ji(e)) throw Error(s(40));
    return e._reactRootContainer ? (fn(function() {
      Vi(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Pt] = null;
      });
    }), !0) : !1;
  }, be.unstable_batchedUpdates = Ms, be.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!ji(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Vi(e, t, n, !1, r);
  }, be.version = "18.3.1-next-f1338f8080-20240426", be;
}
var oc;
function Vd() {
  if (oc) return Us.exports;
  oc = 1;
  function l() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l);
      } catch (i) {
        console.error(i);
      }
  }
  return l(), Us.exports = jd(), Us.exports;
}
var ac;
function Bd() {
  if (ac) return Hi;
  ac = 1;
  var l = Vd();
  return Hi.createRoot = l.createRoot, Hi.hydrateRoot = l.hydrateRoot, Hi;
}
var Hd = Bd();
function uc(l) {
  return l !== null && typeof l == "object" && "constructor" in l && l.constructor === Object;
}
function ro(l, i) {
  l === void 0 && (l = {}), i === void 0 && (i = {}), Object.keys(i).forEach((s) => {
    typeof l[s] > "u" ? l[s] = i[s] : uc(i[s]) && uc(l[s]) && Object.keys(i[s]).length > 0 && ro(l[s], i[s]);
  });
}
const yc = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function st() {
  const l = typeof document < "u" ? document : {};
  return ro(l, yc), l;
}
const Ud = {
  document: yc,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(l) {
    return typeof setTimeout > "u" ? (l(), null) : setTimeout(l, 0);
  },
  cancelAnimationFrame(l) {
    typeof setTimeout > "u" || clearTimeout(l);
  }
};
function Ye() {
  const l = typeof window < "u" ? window : {};
  return ro(l, Ud), l;
}
function $d(l) {
  const i = l;
  Object.keys(i).forEach((s) => {
    try {
      i[s] = null;
    } catch {
    }
    try {
      delete i[s];
    } catch {
    }
  });
}
function Zs(l, i) {
  return i === void 0 && (i = 0), setTimeout(l, i);
}
function Wi() {
  return Date.now();
}
function Gd(l) {
  const i = Ye();
  let s;
  return i.getComputedStyle && (s = i.getComputedStyle(l, null)), !s && l.currentStyle && (s = l.currentStyle), s || (s = l.style), s;
}
function Wd(l, i) {
  i === void 0 && (i = "x");
  const s = Ye();
  let a, f, c;
  const h = Gd(l);
  return s.WebKitCSSMatrix ? (f = h.transform || h.webkitTransform, f.split(",").length > 6 && (f = f.split(", ").map((m) => m.replace(",", ".")).join(", ")), c = new s.WebKitCSSMatrix(f === "none" ? "" : f)) : (c = h.MozTransform || h.OTransform || h.MsTransform || h.msTransform || h.transform || h.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = c.toString().split(",")), i === "x" && (s.WebKitCSSMatrix ? f = c.m41 : a.length === 16 ? f = parseFloat(a[12]) : f = parseFloat(a[4])), i === "y" && (s.WebKitCSSMatrix ? f = c.m42 : a.length === 16 ? f = parseFloat(a[13]) : f = parseFloat(a[5])), f || 0;
}
function zr(l) {
  return typeof l == "object" && l !== null && l.constructor && Object.prototype.toString.call(l).slice(8, -1) === "Object";
}
function Qd(l) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? l instanceof HTMLElement : l && (l.nodeType === 1 || l.nodeType === 11);
}
function lt() {
  const l = Object(arguments.length <= 0 ? void 0 : arguments[0]), i = ["__proto__", "constructor", "prototype"];
  for (let s = 1; s < arguments.length; s += 1) {
    const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
    if (a != null && !Qd(a)) {
      const f = Object.keys(Object(a)).filter((c) => i.indexOf(c) < 0);
      for (let c = 0, h = f.length; c < h; c += 1) {
        const m = f[c], d = Object.getOwnPropertyDescriptor(a, m);
        d !== void 0 && d.enumerable && (zr(l[m]) && zr(a[m]) ? a[m].__swiper__ ? l[m] = a[m] : lt(l[m], a[m]) : !zr(l[m]) && zr(a[m]) ? (l[m] = {}, a[m].__swiper__ ? l[m] = a[m] : lt(l[m], a[m])) : l[m] = a[m]);
      }
    }
  }
  return l;
}
function Ui(l, i, s) {
  l.style.setProperty(i, s);
}
function wc(l) {
  let {
    swiper: i,
    targetPosition: s,
    side: a
  } = l;
  const f = Ye(), c = -i.translate;
  let h = null, m;
  const d = i.params.speed;
  i.wrapperEl.style.scrollSnapType = "none", f.cancelAnimationFrame(i.cssModeFrameID);
  const y = s > c ? "next" : "prev", g = (E, T) => y === "next" && E >= T || y === "prev" && E <= T, S = () => {
    m = (/* @__PURE__ */ new Date()).getTime(), h === null && (h = m);
    const E = Math.max(Math.min((m - h) / d, 1), 0), T = 0.5 - Math.cos(E * Math.PI) / 2;
    let O = c + T * (s - c);
    if (g(O, s) && (O = s), i.wrapperEl.scrollTo({
      [a]: O
    }), g(O, s)) {
      i.wrapperEl.style.overflow = "hidden", i.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        i.wrapperEl.style.overflow = "", i.wrapperEl.scrollTo({
          [a]: O
        });
      }), f.cancelAnimationFrame(i.cssModeFrameID);
      return;
    }
    i.cssModeFrameID = f.requestAnimationFrame(S);
  };
  S();
}
function Sc(l) {
  return l.querySelector(".swiper-slide-transform") || l.shadowRoot && l.shadowRoot.querySelector(".swiper-slide-transform") || l;
}
function St(l, i) {
  return i === void 0 && (i = ""), [...l.children].filter((s) => s.matches(i));
}
function Ec(l, i) {
  i === void 0 && (i = []);
  const s = document.createElement(l);
  return s.classList.add(...Array.isArray(i) ? i : [i]), s;
}
function Yd(l) {
  const i = Ye(), s = st(), a = l.getBoundingClientRect(), f = s.body, c = l.clientTop || f.clientTop || 0, h = l.clientLeft || f.clientLeft || 0, m = l === i ? i.scrollY : l.scrollTop, d = l === i ? i.scrollX : l.scrollLeft;
  return {
    top: a.top + m - c,
    left: a.left + d - h
  };
}
function Xd(l, i) {
  const s = [];
  for (; l.previousElementSibling; ) {
    const a = l.previousElementSibling;
    i ? a.matches(i) && s.push(a) : s.push(a), l = a;
  }
  return s;
}
function Kd(l, i) {
  const s = [];
  for (; l.nextElementSibling; ) {
    const a = l.nextElementSibling;
    i ? a.matches(i) && s.push(a) : s.push(a), l = a;
  }
  return s;
}
function en(l, i) {
  return Ye().getComputedStyle(l, null).getPropertyValue(i);
}
function cc(l) {
  let i = l, s;
  if (i) {
    for (s = 0; (i = i.previousSibling) !== null; )
      i.nodeType === 1 && (s += 1);
    return s;
  }
}
function Js(l, i) {
  const s = [];
  let a = l.parentElement;
  for (; a; )
    i ? a.matches(i) && s.push(a) : s.push(a), a = a.parentElement;
  return s;
}
function qd(l, i) {
  function s(a) {
    a.target === l && (i.call(l, a), l.removeEventListener("transitionend", s));
  }
  i && l.addEventListener("transitionend", s);
}
function fc(l, i, s) {
  const a = Ye();
  return l[i === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(a.getComputedStyle(l, null).getPropertyValue(i === "width" ? "margin-right" : "margin-top")) + parseFloat(a.getComputedStyle(l, null).getPropertyValue(i === "width" ? "margin-left" : "margin-bottom"));
}
function Zd(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a,
    emit: f
  } = l;
  const c = st(), h = Ye();
  i.keyboard = {
    enabled: !1
  }, s({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function m(g) {
    if (!i.enabled) return;
    const {
      rtlTranslate: S
    } = i;
    let E = g;
    E.originalEvent && (E = E.originalEvent);
    const T = E.keyCode || E.charCode, O = i.params.keyboard.pageUpDown, _ = O && T === 33, M = O && T === 34, P = T === 37, A = T === 39, R = T === 38, V = T === 40;
    if (!i.allowSlideNext && (i.isHorizontal() && A || i.isVertical() && V || M) || !i.allowSlidePrev && (i.isHorizontal() && P || i.isVertical() && R || _))
      return !1;
    if (!(E.shiftKey || E.altKey || E.ctrlKey || E.metaKey) && !(c.activeElement && c.activeElement.nodeName && (c.activeElement.nodeName.toLowerCase() === "input" || c.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (i.params.keyboard.onlyInViewport && (_ || M || P || A || R || V)) {
        let Y = !1;
        if (Js(i.el, `.${i.params.slideClass}, swiper-slide`).length > 0 && Js(i.el, `.${i.params.slideActiveClass}`).length === 0)
          return;
        const re = i.el, W = re.clientWidth, ie = re.clientHeight, U = h.innerWidth, ke = h.innerHeight, G = Yd(re);
        S && (G.left -= re.scrollLeft);
        const X = [[G.left, G.top], [G.left + W, G.top], [G.left, G.top + ie], [G.left + W, G.top + ie]];
        for (let b = 0; b < X.length; b += 1) {
          const ue = X[b];
          if (ue[0] >= 0 && ue[0] <= U && ue[1] >= 0 && ue[1] <= ke) {
            if (ue[0] === 0 && ue[1] === 0) continue;
            Y = !0;
          }
        }
        if (!Y) return;
      }
      i.isHorizontal() ? ((_ || M || P || A) && (E.preventDefault ? E.preventDefault() : E.returnValue = !1), ((M || A) && !S || (_ || P) && S) && i.slideNext(), ((_ || P) && !S || (M || A) && S) && i.slidePrev()) : ((_ || M || R || V) && (E.preventDefault ? E.preventDefault() : E.returnValue = !1), (M || V) && i.slideNext(), (_ || R) && i.slidePrev()), f("keyPress", T);
    }
  }
  function d() {
    i.keyboard.enabled || (c.addEventListener("keydown", m), i.keyboard.enabled = !0);
  }
  function y() {
    i.keyboard.enabled && (c.removeEventListener("keydown", m), i.keyboard.enabled = !1);
  }
  a("init", () => {
    i.params.keyboard.enabled && d();
  }), a("destroy", () => {
    i.keyboard.enabled && y();
  }), Object.assign(i.keyboard, {
    enable: d,
    disable: y
  });
}
function Jd(l, i, s, a) {
  return l.params.createElements && Object.keys(a).forEach((f) => {
    if (!s[f] && s.auto === !0) {
      let c = St(l.el, `.${a[f]}`)[0];
      c || (c = Ec("div", a[f]), c.className = a[f], l.el.append(c)), s[f] = c, i[f] = c;
    }
  }), s;
}
function dc(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a,
    emit: f
  } = l;
  s({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), i.navigation = {
    nextEl: null,
    prevEl: null
  };
  const c = (_) => (Array.isArray(_) ? _ : [_]).filter((M) => !!M);
  function h(_) {
    let M;
    return _ && typeof _ == "string" && i.isElement && (M = i.el.querySelector(_), M) ? M : (_ && (typeof _ == "string" && (M = [...document.querySelectorAll(_)]), i.params.uniqueNavElements && typeof _ == "string" && M.length > 1 && i.el.querySelectorAll(_).length === 1 && (M = i.el.querySelector(_))), _ && !M ? _ : M);
  }
  function m(_, M) {
    const P = i.params.navigation;
    _ = c(_), _.forEach((A) => {
      A && (A.classList[M ? "add" : "remove"](...P.disabledClass.split(" ")), A.tagName === "BUTTON" && (A.disabled = M), i.params.watchOverflow && i.enabled && A.classList[i.isLocked ? "add" : "remove"](P.lockClass));
    });
  }
  function d() {
    const {
      nextEl: _,
      prevEl: M
    } = i.navigation;
    if (i.params.loop) {
      m(M, !1), m(_, !1);
      return;
    }
    m(M, i.isBeginning && !i.params.rewind), m(_, i.isEnd && !i.params.rewind);
  }
  function y(_) {
    _.preventDefault(), !(i.isBeginning && !i.params.loop && !i.params.rewind) && (i.slidePrev(), f("navigationPrev"));
  }
  function g(_) {
    _.preventDefault(), !(i.isEnd && !i.params.loop && !i.params.rewind) && (i.slideNext(), f("navigationNext"));
  }
  function S() {
    const _ = i.params.navigation;
    if (i.params.navigation = Jd(i, i.originalParams.navigation, i.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(_.nextEl || _.prevEl)) return;
    let M = h(_.nextEl), P = h(_.prevEl);
    Object.assign(i.navigation, {
      nextEl: M,
      prevEl: P
    }), M = c(M), P = c(P);
    const A = (R, V) => {
      R && R.addEventListener("click", V === "next" ? g : y), !i.enabled && R && R.classList.add(..._.lockClass.split(" "));
    };
    M.forEach((R) => A(R, "next")), P.forEach((R) => A(R, "prev"));
  }
  function E() {
    let {
      nextEl: _,
      prevEl: M
    } = i.navigation;
    _ = c(_), M = c(M);
    const P = (A, R) => {
      A.removeEventListener("click", R === "next" ? g : y), A.classList.remove(...i.params.navigation.disabledClass.split(" "));
    };
    _.forEach((A) => P(A, "next")), M.forEach((A) => P(A, "prev"));
  }
  a("init", () => {
    i.params.navigation.enabled === !1 ? O() : (S(), d());
  }), a("toEdge fromEdge lock unlock", () => {
    d();
  }), a("destroy", () => {
    E();
  }), a("enable disable", () => {
    let {
      nextEl: _,
      prevEl: M
    } = i.navigation;
    if (_ = c(_), M = c(M), i.enabled) {
      d();
      return;
    }
    [..._, ...M].filter((P) => !!P).forEach((P) => P.classList.add(i.params.navigation.lockClass));
  }), a("click", (_, M) => {
    let {
      nextEl: P,
      prevEl: A
    } = i.navigation;
    P = c(P), A = c(A);
    const R = M.target;
    if (i.params.navigation.hideOnClick && !A.includes(R) && !P.includes(R)) {
      if (i.pagination && i.params.pagination && i.params.pagination.clickable && (i.pagination.el === R || i.pagination.el.contains(R))) return;
      let V;
      P.length ? V = P[0].classList.contains(i.params.navigation.hiddenClass) : A.length && (V = A[0].classList.contains(i.params.navigation.hiddenClass)), f(V === !0 ? "navigationShow" : "navigationHide"), [...P, ...A].filter((Y) => !!Y).forEach((Y) => Y.classList.toggle(i.params.navigation.hiddenClass));
    }
  });
  const T = () => {
    i.el.classList.remove(...i.params.navigation.navigationDisabledClass.split(" ")), S(), d();
  }, O = () => {
    i.el.classList.add(...i.params.navigation.navigationDisabledClass.split(" ")), E();
  };
  Object.assign(i.navigation, {
    enable: T,
    disable: O,
    update: d,
    init: S,
    destroy: E
  });
}
function bd(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a,
    emit: f,
    params: c
  } = l;
  i.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, s({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !0,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let h, m, d = c && c.autoplay ? c.autoplay.delay : 3e3, y = c && c.autoplay ? c.autoplay.delay : 3e3, g, S = (/* @__PURE__ */ new Date()).getTime, E, T, O, _, M, P;
  function A(ee) {
    !i || i.destroyed || !i.wrapperEl || ee.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", A), U());
  }
  const R = () => {
    if (i.destroyed || !i.autoplay.running) return;
    i.autoplay.paused ? E = !0 : E && (y = g, E = !1);
    const ee = i.autoplay.paused ? g : S + y - (/* @__PURE__ */ new Date()).getTime();
    i.autoplay.timeLeft = ee, f("autoplayTimeLeft", ee, ee / d), m = requestAnimationFrame(() => {
      R();
    });
  }, V = () => {
    let ee;
    return i.virtual && i.params.virtual.enabled ? ee = i.slides.filter(($) => $.classList.contains("swiper-slide-active"))[0] : ee = i.slides[i.activeIndex], ee ? parseInt(ee.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, Y = (ee) => {
    if (i.destroyed || !i.autoplay.running) return;
    cancelAnimationFrame(m), R();
    let B = typeof ee > "u" ? i.params.autoplay.delay : ee;
    d = i.params.autoplay.delay, y = i.params.autoplay.delay;
    const $ = V();
    !Number.isNaN($) && $ > 0 && typeof ee > "u" && (B = $, d = $, y = $), g = B;
    const H = i.params.speed, C = () => {
      !i || i.destroyed || (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(H, !0, !0), f("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, H, !0, !0), f("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(H, !0, !0), f("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, H, !0, !0), f("autoplay")), i.params.cssMode && (S = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        Y();
      })));
    };
    return B > 0 ? (clearTimeout(h), h = setTimeout(() => {
      C();
    }, B)) : requestAnimationFrame(() => {
      C();
    }), B;
  }, re = () => {
    i.autoplay.running = !0, Y(), f("autoplayStart");
  }, W = () => {
    i.autoplay.running = !1, clearTimeout(h), cancelAnimationFrame(m), f("autoplayStop");
  }, ie = (ee, B) => {
    if (i.destroyed || !i.autoplay.running) return;
    clearTimeout(h), ee || (P = !0);
    const $ = () => {
      f("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", A) : U();
    };
    if (i.autoplay.paused = !0, B) {
      M && (g = i.params.autoplay.delay), M = !1, $();
      return;
    }
    g = (g || i.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - S), !(i.isEnd && g < 0 && !i.params.loop) && (g < 0 && (g = 0), $());
  }, U = () => {
    i.isEnd && g < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (S = (/* @__PURE__ */ new Date()).getTime(), P ? (P = !1, Y(g)) : Y(), i.autoplay.paused = !1, f("autoplayResume"));
  }, ke = () => {
    if (i.destroyed || !i.autoplay.running) return;
    const ee = st();
    ee.visibilityState === "hidden" && (P = !0, ie(!0)), ee.visibilityState === "visible" && U();
  }, G = (ee) => {
    ee.pointerType === "mouse" && (P = !0, !(i.animating || i.autoplay.paused) && ie(!0));
  }, X = (ee) => {
    ee.pointerType === "mouse" && i.autoplay.paused && U();
  }, b = () => {
    i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", G), i.el.addEventListener("pointerleave", X));
  }, ue = () => {
    i.el.removeEventListener("pointerenter", G), i.el.removeEventListener("pointerleave", X);
  }, Oe = () => {
    st().addEventListener("visibilitychange", ke);
  }, _e = () => {
    st().removeEventListener("visibilitychange", ke);
  };
  a("init", () => {
    i.params.autoplay.enabled && (b(), Oe(), S = (/* @__PURE__ */ new Date()).getTime(), re());
  }), a("destroy", () => {
    ue(), _e(), i.autoplay.running && W();
  }), a("beforeTransitionStart", (ee, B, $) => {
    i.destroyed || !i.autoplay.running || ($ || !i.params.autoplay.disableOnInteraction ? ie(!0, !0) : W());
  }), a("sliderFirstMove", () => {
    if (!(i.destroyed || !i.autoplay.running)) {
      if (i.params.autoplay.disableOnInteraction) {
        W();
        return;
      }
      T = !0, O = !1, P = !1, _ = setTimeout(() => {
        P = !0, O = !0, ie(!0);
      }, 200);
    }
  }), a("touchEnd", () => {
    if (!(i.destroyed || !i.autoplay.running || !T)) {
      if (clearTimeout(_), clearTimeout(h), i.params.autoplay.disableOnInteraction) {
        O = !1, T = !1;
        return;
      }
      O && i.params.cssMode && U(), O = !1, T = !1;
    }
  }), a("slideChange", () => {
    i.destroyed || !i.autoplay.running || (M = !0);
  }), Object.assign(i.autoplay, {
    start: re,
    stop: W,
    pause: ie,
    resume: U
  });
}
function ep(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a
  } = l;
  s({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let f = !1, c = !1;
  i.thumbs = {
    swiper: null
  };
  function h() {
    const y = i.thumbs.swiper;
    if (!y || y.destroyed) return;
    const g = y.clickedIndex, S = y.clickedSlide;
    if (S && S.classList.contains(i.params.thumbs.slideThumbActiveClass) || typeof g > "u" || g === null) return;
    let E;
    y.params.loop ? E = parseInt(y.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : E = g, i.params.loop ? i.slideToLoop(E) : i.slideTo(E);
  }
  function m() {
    const {
      thumbs: y
    } = i.params;
    if (f) return !1;
    f = !0;
    const g = i.constructor;
    if (y.swiper instanceof g)
      i.thumbs.swiper = y.swiper, Object.assign(i.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(i.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), i.thumbs.swiper.update();
    else if (zr(y.swiper)) {
      const S = Object.assign({}, y.swiper);
      Object.assign(S, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), i.thumbs.swiper = new g(S), c = !0;
    }
    return i.thumbs.swiper.el.classList.add(i.params.thumbs.thumbsContainerClass), i.thumbs.swiper.on("tap", h), !0;
  }
  function d(y) {
    const g = i.thumbs.swiper;
    if (!g || g.destroyed) return;
    const S = g.params.slidesPerView === "auto" ? g.slidesPerViewDynamic() : g.params.slidesPerView;
    let E = 1;
    const T = i.params.thumbs.slideThumbActiveClass;
    if (i.params.slidesPerView > 1 && !i.params.centeredSlides && (E = i.params.slidesPerView), i.params.thumbs.multipleActiveThumbs || (E = 1), E = Math.floor(E), g.slides.forEach((M) => M.classList.remove(T)), g.params.loop || g.params.virtual && g.params.virtual.enabled)
      for (let M = 0; M < E; M += 1)
        St(g.slidesEl, `[data-swiper-slide-index="${i.realIndex + M}"]`).forEach((P) => {
          P.classList.add(T);
        });
    else
      for (let M = 0; M < E; M += 1)
        g.slides[i.realIndex + M] && g.slides[i.realIndex + M].classList.add(T);
    const O = i.params.thumbs.autoScrollOffset, _ = O && !g.params.loop;
    if (i.realIndex !== g.realIndex || _) {
      const M = g.activeIndex;
      let P, A;
      if (g.params.loop) {
        const R = g.slides.filter((V) => V.getAttribute("data-swiper-slide-index") === `${i.realIndex}`)[0];
        P = g.slides.indexOf(R), A = i.activeIndex > i.previousIndex ? "next" : "prev";
      } else
        P = i.realIndex, A = P > i.previousIndex ? "next" : "prev";
      _ && (P += A === "next" ? O : -1 * O), g.visibleSlidesIndexes && g.visibleSlidesIndexes.indexOf(P) < 0 && (g.params.centeredSlides ? P > M ? P = P - Math.floor(S / 2) + 1 : P = P + Math.floor(S / 2) - 1 : P > M && g.params.slidesPerGroup, g.slideTo(P, y ? 0 : void 0));
    }
  }
  a("beforeInit", () => {
    const {
      thumbs: y
    } = i.params;
    if (!(!y || !y.swiper))
      if (typeof y.swiper == "string" || y.swiper instanceof HTMLElement) {
        const g = st(), S = () => {
          const T = typeof y.swiper == "string" ? g.querySelector(y.swiper) : y.swiper;
          if (T && T.swiper)
            y.swiper = T.swiper, m(), d(!0);
          else if (T) {
            const O = (_) => {
              y.swiper = _.detail[0], T.removeEventListener("init", O), m(), d(!0), y.swiper.update(), i.update();
            };
            T.addEventListener("init", O);
          }
          return T;
        }, E = () => {
          if (i.destroyed) return;
          S() || requestAnimationFrame(E);
        };
        requestAnimationFrame(E);
      } else
        m(), d(!0);
  }), a("slideChange update resize observerUpdate", () => {
    d();
  }), a("setTransition", (y, g) => {
    const S = i.thumbs.swiper;
    !S || S.destroyed || S.setTransition(g);
  }), a("beforeDestroy", () => {
    const y = i.thumbs.swiper;
    !y || y.destroyed || c && y.destroy();
  }), Object.assign(i.thumbs, {
    init: m,
    update: d
  });
}
function tp(l) {
  const {
    effect: i,
    swiper: s,
    on: a,
    setTranslate: f,
    setTransition: c,
    overwriteParams: h,
    perspective: m,
    recreateShadows: d,
    getEffectParams: y
  } = l;
  a("beforeInit", () => {
    if (s.params.effect !== i) return;
    s.classNames.push(`${s.params.containerModifierClass}${i}`), m && m() && s.classNames.push(`${s.params.containerModifierClass}3d`);
    const S = h ? h() : {};
    Object.assign(s.params, S), Object.assign(s.originalParams, S);
  }), a("setTranslate", () => {
    s.params.effect === i && f();
  }), a("setTransition", (S, E) => {
    s.params.effect === i && c(E);
  }), a("transitionEnd", () => {
    if (s.params.effect === i && d) {
      if (!y || !y().slideShadows) return;
      s.slides.forEach((S) => {
        S.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((E) => E.remove());
      }), d();
    }
  });
  let g;
  a("virtualUpdate", () => {
    s.params.effect === i && (s.slides.length || (g = !0), requestAnimationFrame(() => {
      g && s.slides && s.slides.length && (f(), g = !1);
    }));
  });
}
function np(l, i) {
  const s = Sc(i);
  return s !== i && (s.style.backfaceVisibility = "hidden", s.style["-webkit-backface-visibility"] = "hidden"), s;
}
function rp(l) {
  let {
    swiper: i,
    duration: s,
    transformElements: a
  } = l;
  const {
    activeIndex: f
  } = i;
  if (i.params.virtualTranslate && s !== 0) {
    let c = !1, h;
    h = a, h.forEach((m) => {
      qd(m, () => {
        if (c || !i || i.destroyed) return;
        c = !0, i.animating = !1;
        const d = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        i.wrapperEl.dispatchEvent(d);
      });
    });
  }
}
function ip(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a
  } = l;
  s({
    fadeEffect: {
      crossFade: !1
    }
  }), tp({
    effect: "fade",
    swiper: i,
    on: a,
    setTranslate: () => {
      const {
        slides: h
      } = i, m = i.params.fadeEffect;
      for (let d = 0; d < h.length; d += 1) {
        const y = i.slides[d];
        let S = -y.swiperSlideOffset;
        i.params.virtualTranslate || (S -= i.translate);
        let E = 0;
        i.isHorizontal() || (E = S, S = 0);
        const T = i.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(y.progress), 0) : 1 + Math.min(Math.max(y.progress, -1), 0), O = np(m, y);
        O.style.opacity = T, O.style.transform = `translate3d(${S}px, ${E}px, 0px)`;
      }
    },
    setTransition: (h) => {
      const m = i.slides.map((d) => Sc(d));
      m.forEach((d) => {
        d.style.transitionDuration = `${h}ms`;
      }), rp({
        swiper: i,
        duration: h,
        transformElements: m
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !i.params.cssMode
    })
  });
}
let Ws;
function lp() {
  const l = Ye(), i = st();
  return {
    smoothScroll: i.documentElement && i.documentElement.style && "scrollBehavior" in i.documentElement.style,
    touch: !!("ontouchstart" in l || l.DocumentTouch && i instanceof l.DocumentTouch)
  };
}
function xc() {
  return Ws || (Ws = lp()), Ws;
}
let Qs;
function sp(l) {
  let {
    userAgent: i
  } = l === void 0 ? {} : l;
  const s = xc(), a = Ye(), f = a.navigator.platform, c = i || a.navigator.userAgent, h = {
    ios: !1,
    android: !1
  }, m = a.screen.width, d = a.screen.height, y = c.match(/(Android);?[\s\/]+([\d.]+)?/);
  let g = c.match(/(iPad).*OS\s([\d_]+)/);
  const S = c.match(/(iPod)(.*OS\s([\d_]+))?/), E = !g && c.match(/(iPhone\sOS|iOS)\s([\d_]+)/), T = f === "Win32";
  let O = f === "MacIntel";
  const _ = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !g && O && s.touch && _.indexOf(`${m}x${d}`) >= 0 && (g = c.match(/(Version)\/([\d.]+)/), g || (g = [0, 1, "13_0_0"]), O = !1), y && !T && (h.os = "android", h.android = !0), (g || E || S) && (h.os = "ios", h.ios = !0), h;
}
function op(l) {
  return l === void 0 && (l = {}), Qs || (Qs = sp(l)), Qs;
}
let Ys;
function ap() {
  const l = Ye();
  let i = !1;
  function s() {
    const a = l.navigator.userAgent.toLowerCase();
    return a.indexOf("safari") >= 0 && a.indexOf("chrome") < 0 && a.indexOf("android") < 0;
  }
  if (s()) {
    const a = String(l.navigator.userAgent);
    if (a.includes("Version/")) {
      const [f, c] = a.split("Version/")[1].split(" ")[0].split(".").map((h) => Number(h));
      i = f < 16 || f === 16 && c < 2;
    }
  }
  return {
    isSafari: i || s(),
    needPerspectiveFix: i,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(l.navigator.userAgent)
  };
}
function up() {
  return Ys || (Ys = ap()), Ys;
}
function cp(l) {
  let {
    swiper: i,
    on: s,
    emit: a
  } = l;
  const f = Ye();
  let c = null, h = null;
  const m = () => {
    !i || i.destroyed || !i.initialized || (a("beforeResize"), a("resize"));
  }, d = () => {
    !i || i.destroyed || !i.initialized || (c = new ResizeObserver((S) => {
      h = f.requestAnimationFrame(() => {
        const {
          width: E,
          height: T
        } = i;
        let O = E, _ = T;
        S.forEach((M) => {
          let {
            contentBoxSize: P,
            contentRect: A,
            target: R
          } = M;
          R && R !== i.el || (O = A ? A.width : (P[0] || P).inlineSize, _ = A ? A.height : (P[0] || P).blockSize);
        }), (O !== E || _ !== T) && m();
      });
    }), c.observe(i.el));
  }, y = () => {
    h && f.cancelAnimationFrame(h), c && c.unobserve && i.el && (c.unobserve(i.el), c = null);
  }, g = () => {
    !i || i.destroyed || !i.initialized || a("orientationchange");
  };
  s("init", () => {
    if (i.params.resizeObserver && typeof f.ResizeObserver < "u") {
      d();
      return;
    }
    f.addEventListener("resize", m), f.addEventListener("orientationchange", g);
  }), s("destroy", () => {
    y(), f.removeEventListener("resize", m), f.removeEventListener("orientationchange", g);
  });
}
function fp(l) {
  let {
    swiper: i,
    extendParams: s,
    on: a,
    emit: f
  } = l;
  const c = [], h = Ye(), m = function(g, S) {
    S === void 0 && (S = {});
    const E = h.MutationObserver || h.WebkitMutationObserver, T = new E((O) => {
      if (i.__preventObserver__) return;
      if (O.length === 1) {
        f("observerUpdate", O[0]);
        return;
      }
      const _ = function() {
        f("observerUpdate", O[0]);
      };
      h.requestAnimationFrame ? h.requestAnimationFrame(_) : h.setTimeout(_, 0);
    });
    T.observe(g, {
      attributes: typeof S.attributes > "u" ? !0 : S.attributes,
      childList: typeof S.childList > "u" ? !0 : S.childList,
      characterData: typeof S.characterData > "u" ? !0 : S.characterData
    }), c.push(T);
  }, d = () => {
    if (i.params.observer) {
      if (i.params.observeParents) {
        const g = Js(i.hostEl);
        for (let S = 0; S < g.length; S += 1)
          m(g[S]);
      }
      m(i.hostEl, {
        childList: i.params.observeSlideChildren
      }), m(i.wrapperEl, {
        attributes: !1
      });
    }
  }, y = () => {
    c.forEach((g) => {
      g.disconnect();
    }), c.splice(0, c.length);
  };
  s({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), a("init", d), a("destroy", y);
}
var dp = {
  on(l, i, s) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof i != "function") return a;
    const f = s ? "unshift" : "push";
    return l.split(" ").forEach((c) => {
      a.eventsListeners[c] || (a.eventsListeners[c] = []), a.eventsListeners[c][f](i);
    }), a;
  },
  once(l, i, s) {
    const a = this;
    if (!a.eventsListeners || a.destroyed || typeof i != "function") return a;
    function f() {
      a.off(l, f), f.__emitterProxy && delete f.__emitterProxy;
      for (var c = arguments.length, h = new Array(c), m = 0; m < c; m++)
        h[m] = arguments[m];
      i.apply(a, h);
    }
    return f.__emitterProxy = i, a.on(l, f, s);
  },
  onAny(l, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof l != "function") return s;
    const a = i ? "unshift" : "push";
    return s.eventsAnyListeners.indexOf(l) < 0 && s.eventsAnyListeners[a](l), s;
  },
  offAny(l) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || !i.eventsAnyListeners) return i;
    const s = i.eventsAnyListeners.indexOf(l);
    return s >= 0 && i.eventsAnyListeners.splice(s, 1), i;
  },
  off(l, i) {
    const s = this;
    return !s.eventsListeners || s.destroyed || !s.eventsListeners || l.split(" ").forEach((a) => {
      typeof i > "u" ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].forEach((f, c) => {
        (f === i || f.__emitterProxy && f.__emitterProxy === i) && s.eventsListeners[a].splice(c, 1);
      });
    }), s;
  },
  emit() {
    const l = this;
    if (!l.eventsListeners || l.destroyed || !l.eventsListeners) return l;
    let i, s, a;
    for (var f = arguments.length, c = new Array(f), h = 0; h < f; h++)
      c[h] = arguments[h];
    return typeof c[0] == "string" || Array.isArray(c[0]) ? (i = c[0], s = c.slice(1, c.length), a = l) : (i = c[0].events, s = c[0].data, a = c[0].context || l), s.unshift(a), (Array.isArray(i) ? i : i.split(" ")).forEach((d) => {
      l.eventsAnyListeners && l.eventsAnyListeners.length && l.eventsAnyListeners.forEach((y) => {
        y.apply(a, [d, ...s]);
      }), l.eventsListeners && l.eventsListeners[d] && l.eventsListeners[d].forEach((y) => {
        y.apply(a, s);
      });
    }), l;
  }
};
function pp() {
  const l = this;
  let i, s;
  const a = l.el;
  typeof l.params.width < "u" && l.params.width !== null ? i = l.params.width : i = a.clientWidth, typeof l.params.height < "u" && l.params.height !== null ? s = l.params.height : s = a.clientHeight, !(i === 0 && l.isHorizontal() || s === 0 && l.isVertical()) && (i = i - parseInt(en(a, "padding-left") || 0, 10) - parseInt(en(a, "padding-right") || 0, 10), s = s - parseInt(en(a, "padding-top") || 0, 10) - parseInt(en(a, "padding-bottom") || 0, 10), Number.isNaN(i) && (i = 0), Number.isNaN(s) && (s = 0), Object.assign(l, {
    width: i,
    height: s,
    size: l.isHorizontal() ? i : s
  }));
}
function mp() {
  const l = this;
  function i(G) {
    return l.isHorizontal() ? G : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[G];
  }
  function s(G, X) {
    return parseFloat(G.getPropertyValue(i(X)) || 0);
  }
  const a = l.params, {
    wrapperEl: f,
    slidesEl: c,
    size: h,
    rtlTranslate: m,
    wrongRTL: d
  } = l, y = l.virtual && a.virtual.enabled, g = y ? l.virtual.slides.length : l.slides.length, S = St(c, `.${l.params.slideClass}, swiper-slide`), E = y ? l.virtual.slides.length : S.length;
  let T = [];
  const O = [], _ = [];
  let M = a.slidesOffsetBefore;
  typeof M == "function" && (M = a.slidesOffsetBefore.call(l));
  let P = a.slidesOffsetAfter;
  typeof P == "function" && (P = a.slidesOffsetAfter.call(l));
  const A = l.snapGrid.length, R = l.slidesGrid.length;
  let V = a.spaceBetween, Y = -M, re = 0, W = 0;
  if (typeof h > "u")
    return;
  typeof V == "string" && V.indexOf("%") >= 0 ? V = parseFloat(V.replace("%", "")) / 100 * h : typeof V == "string" && (V = parseFloat(V)), l.virtualSize = -V, S.forEach((G) => {
    m ? G.style.marginLeft = "" : G.style.marginRight = "", G.style.marginBottom = "", G.style.marginTop = "";
  }), a.centeredSlides && a.cssMode && (Ui(f, "--swiper-centered-offset-before", ""), Ui(f, "--swiper-centered-offset-after", ""));
  const ie = a.grid && a.grid.rows > 1 && l.grid;
  ie && l.grid.initSlides(E);
  let U;
  const ke = a.slidesPerView === "auto" && a.breakpoints && Object.keys(a.breakpoints).filter((G) => typeof a.breakpoints[G].slidesPerView < "u").length > 0;
  for (let G = 0; G < E; G += 1) {
    U = 0;
    let X;
    if (S[G] && (X = S[G]), ie && l.grid.updateSlide(G, X, E, i), !(S[G] && en(X, "display") === "none")) {
      if (a.slidesPerView === "auto") {
        ke && (S[G].style[i("width")] = "");
        const b = getComputedStyle(X), ue = X.style.transform, Oe = X.style.webkitTransform;
        if (ue && (X.style.transform = "none"), Oe && (X.style.webkitTransform = "none"), a.roundLengths)
          U = l.isHorizontal() ? fc(X, "width") : fc(X, "height");
        else {
          const _e = s(b, "width"), ee = s(b, "padding-left"), B = s(b, "padding-right"), $ = s(b, "margin-left"), H = s(b, "margin-right"), C = b.getPropertyValue("box-sizing");
          if (C && C === "border-box")
            U = _e + $ + H;
          else {
            const {
              clientWidth: N,
              offsetWidth: se
            } = X;
            U = _e + ee + B + $ + H + (se - N);
          }
        }
        ue && (X.style.transform = ue), Oe && (X.style.webkitTransform = Oe), a.roundLengths && (U = Math.floor(U));
      } else
        U = (h - (a.slidesPerView - 1) * V) / a.slidesPerView, a.roundLengths && (U = Math.floor(U)), S[G] && (S[G].style[i("width")] = `${U}px`);
      S[G] && (S[G].swiperSlideSize = U), _.push(U), a.centeredSlides ? (Y = Y + U / 2 + re / 2 + V, re === 0 && G !== 0 && (Y = Y - h / 2 - V), G === 0 && (Y = Y - h / 2 - V), Math.abs(Y) < 1 / 1e3 && (Y = 0), a.roundLengths && (Y = Math.floor(Y)), W % a.slidesPerGroup === 0 && T.push(Y), O.push(Y)) : (a.roundLengths && (Y = Math.floor(Y)), (W - Math.min(l.params.slidesPerGroupSkip, W)) % l.params.slidesPerGroup === 0 && T.push(Y), O.push(Y), Y = Y + U + V), l.virtualSize += U + V, re = U, W += 1;
    }
  }
  if (l.virtualSize = Math.max(l.virtualSize, h) + P, m && d && (a.effect === "slide" || a.effect === "coverflow") && (f.style.width = `${l.virtualSize + V}px`), a.setWrapperSize && (f.style[i("width")] = `${l.virtualSize + V}px`), ie && l.grid.updateWrapperSize(U, T, i), !a.centeredSlides) {
    const G = [];
    for (let X = 0; X < T.length; X += 1) {
      let b = T[X];
      a.roundLengths && (b = Math.floor(b)), T[X] <= l.virtualSize - h && G.push(b);
    }
    T = G, Math.floor(l.virtualSize - h) - Math.floor(T[T.length - 1]) > 1 && T.push(l.virtualSize - h);
  }
  if (y && a.loop) {
    const G = _[0] + V;
    if (a.slidesPerGroup > 1) {
      const X = Math.ceil((l.virtual.slidesBefore + l.virtual.slidesAfter) / a.slidesPerGroup), b = G * a.slidesPerGroup;
      for (let ue = 0; ue < X; ue += 1)
        T.push(T[T.length - 1] + b);
    }
    for (let X = 0; X < l.virtual.slidesBefore + l.virtual.slidesAfter; X += 1)
      a.slidesPerGroup === 1 && T.push(T[T.length - 1] + G), O.push(O[O.length - 1] + G), l.virtualSize += G;
  }
  if (T.length === 0 && (T = [0]), V !== 0) {
    const G = l.isHorizontal() && m ? "marginLeft" : i("marginRight");
    S.filter((X, b) => !a.cssMode || a.loop ? !0 : b !== S.length - 1).forEach((X) => {
      X.style[G] = `${V}px`;
    });
  }
  if (a.centeredSlides && a.centeredSlidesBounds) {
    let G = 0;
    _.forEach((b) => {
      G += b + (V || 0);
    }), G -= V;
    const X = G - h;
    T = T.map((b) => b <= 0 ? -M : b > X ? X + P : b);
  }
  if (a.centerInsufficientSlides) {
    let G = 0;
    if (_.forEach((X) => {
      G += X + (V || 0);
    }), G -= V, G < h) {
      const X = (h - G) / 2;
      T.forEach((b, ue) => {
        T[ue] = b - X;
      }), O.forEach((b, ue) => {
        O[ue] = b + X;
      });
    }
  }
  if (Object.assign(l, {
    slides: S,
    snapGrid: T,
    slidesGrid: O,
    slidesSizesGrid: _
  }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
    Ui(f, "--swiper-centered-offset-before", `${-T[0]}px`), Ui(f, "--swiper-centered-offset-after", `${l.size / 2 - _[_.length - 1] / 2}px`);
    const G = -l.snapGrid[0], X = -l.slidesGrid[0];
    l.snapGrid = l.snapGrid.map((b) => b + G), l.slidesGrid = l.slidesGrid.map((b) => b + X);
  }
  if (E !== g && l.emit("slidesLengthChange"), T.length !== A && (l.params.watchOverflow && l.checkOverflow(), l.emit("snapGridLengthChange")), O.length !== R && l.emit("slidesGridLengthChange"), a.watchSlidesProgress && l.updateSlidesOffset(), !y && !a.cssMode && (a.effect === "slide" || a.effect === "fade")) {
    const G = `${a.containerModifierClass}backface-hidden`, X = l.el.classList.contains(G);
    E <= a.maxBackfaceHiddenSlides ? X || l.el.classList.add(G) : X && l.el.classList.remove(G);
  }
}
function hp(l) {
  const i = this, s = [], a = i.virtual && i.params.virtual.enabled;
  let f = 0, c;
  typeof l == "number" ? i.setTransition(l) : l === !0 && i.setTransition(i.params.speed);
  const h = (m) => a ? i.slides[i.getSlideIndexByData(m)] : i.slides[m];
  if (i.params.slidesPerView !== "auto" && i.params.slidesPerView > 1)
    if (i.params.centeredSlides)
      (i.visibleSlides || []).forEach((m) => {
        s.push(m);
      });
    else
      for (c = 0; c < Math.ceil(i.params.slidesPerView); c += 1) {
        const m = i.activeIndex + c;
        if (m > i.slides.length && !a) break;
        s.push(h(m));
      }
  else
    s.push(h(i.activeIndex));
  for (c = 0; c < s.length; c += 1)
    if (typeof s[c] < "u") {
      const m = s[c].offsetHeight;
      f = m > f ? m : f;
    }
  (f || f === 0) && (i.wrapperEl.style.height = `${f}px`);
}
function vp() {
  const l = this, i = l.slides, s = l.isElement ? l.isHorizontal() ? l.wrapperEl.offsetLeft : l.wrapperEl.offsetTop : 0;
  for (let a = 0; a < i.length; a += 1)
    i[a].swiperSlideOffset = (l.isHorizontal() ? i[a].offsetLeft : i[a].offsetTop) - s - l.cssOverflowAdjustment();
}
function gp(l) {
  l === void 0 && (l = this && this.translate || 0);
  const i = this, s = i.params, {
    slides: a,
    rtlTranslate: f,
    snapGrid: c
  } = i;
  if (a.length === 0) return;
  typeof a[0].swiperSlideOffset > "u" && i.updateSlidesOffset();
  let h = -l;
  f && (h = l), a.forEach((d) => {
    d.classList.remove(s.slideVisibleClass);
  }), i.visibleSlidesIndexes = [], i.visibleSlides = [];
  let m = s.spaceBetween;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * i.size : typeof m == "string" && (m = parseFloat(m));
  for (let d = 0; d < a.length; d += 1) {
    const y = a[d];
    let g = y.swiperSlideOffset;
    s.cssMode && s.centeredSlides && (g -= a[0].swiperSlideOffset);
    const S = (h + (s.centeredSlides ? i.minTranslate() : 0) - g) / (y.swiperSlideSize + m), E = (h - c[0] + (s.centeredSlides ? i.minTranslate() : 0) - g) / (y.swiperSlideSize + m), T = -(h - g), O = T + i.slidesSizesGrid[d];
    (T >= 0 && T < i.size - 1 || O > 1 && O <= i.size || T <= 0 && O >= i.size) && (i.visibleSlides.push(y), i.visibleSlidesIndexes.push(d), a[d].classList.add(s.slideVisibleClass)), y.progress = f ? -S : S, y.originalProgress = f ? -E : E;
  }
}
function yp(l) {
  const i = this;
  if (typeof l > "u") {
    const g = i.rtlTranslate ? -1 : 1;
    l = i && i.translate && i.translate * g || 0;
  }
  const s = i.params, a = i.maxTranslate() - i.minTranslate();
  let {
    progress: f,
    isBeginning: c,
    isEnd: h,
    progressLoop: m
  } = i;
  const d = c, y = h;
  if (a === 0)
    f = 0, c = !0, h = !0;
  else {
    f = (l - i.minTranslate()) / a;
    const g = Math.abs(l - i.minTranslate()) < 1, S = Math.abs(l - i.maxTranslate()) < 1;
    c = g || f <= 0, h = S || f >= 1, g && (f = 0), S && (f = 1);
  }
  if (s.loop) {
    const g = i.getSlideIndexByData(0), S = i.getSlideIndexByData(i.slides.length - 1), E = i.slidesGrid[g], T = i.slidesGrid[S], O = i.slidesGrid[i.slidesGrid.length - 1], _ = Math.abs(l);
    _ >= E ? m = (_ - E) / O : m = (_ + O - T) / O, m > 1 && (m -= 1);
  }
  Object.assign(i, {
    progress: f,
    progressLoop: m,
    isBeginning: c,
    isEnd: h
  }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && i.updateSlidesProgress(l), c && !d && i.emit("reachBeginning toEdge"), h && !y && i.emit("reachEnd toEdge"), (d && !c || y && !h) && i.emit("fromEdge"), i.emit("progress", f);
}
function wp() {
  const l = this, {
    slides: i,
    params: s,
    slidesEl: a,
    activeIndex: f
  } = l, c = l.virtual && s.virtual.enabled, h = (d) => St(a, `.${s.slideClass}${d}, swiper-slide${d}`)[0];
  i.forEach((d) => {
    d.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass);
  });
  let m;
  if (c)
    if (s.loop) {
      let d = f - l.virtual.slidesBefore;
      d < 0 && (d = l.virtual.slides.length + d), d >= l.virtual.slides.length && (d -= l.virtual.slides.length), m = h(`[data-swiper-slide-index="${d}"]`);
    } else
      m = h(`[data-swiper-slide-index="${f}"]`);
  else
    m = i[f];
  if (m) {
    m.classList.add(s.slideActiveClass);
    let d = Kd(m, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !d && (d = i[0]), d && d.classList.add(s.slideNextClass);
    let y = Xd(m, `.${s.slideClass}, swiper-slide`)[0];
    s.loop && !y === 0 && (y = i[i.length - 1]), y && y.classList.add(s.slidePrevClass);
  }
  l.emitSlidesClasses();
}
const $i = (l, i) => {
  if (!l || l.destroyed || !l.params) return;
  const s = () => l.isElement ? "swiper-slide" : `.${l.params.slideClass}`, a = i.closest(s());
  if (a) {
    let f = a.querySelector(`.${l.params.lazyPreloaderClass}`);
    !f && l.isElement && (a.shadowRoot ? f = a.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      a.shadowRoot && (f = a.shadowRoot.querySelector(`.${l.params.lazyPreloaderClass}`), f && f.remove());
    })), f && f.remove();
  }
}, Xs = (l, i) => {
  if (!l.slides[i]) return;
  const s = l.slides[i].querySelector('[loading="lazy"]');
  s && s.removeAttribute("loading");
}, bs = (l) => {
  if (!l || l.destroyed || !l.params) return;
  let i = l.params.lazyPreloadPrevNext;
  const s = l.slides.length;
  if (!s || !i || i < 0) return;
  i = Math.min(i, s);
  const a = l.params.slidesPerView === "auto" ? l.slidesPerViewDynamic() : Math.ceil(l.params.slidesPerView), f = l.activeIndex;
  if (l.params.grid && l.params.grid.rows > 1) {
    const h = f, m = [h - i];
    m.push(...Array.from({
      length: i
    }).map((d, y) => h + a + y)), l.slides.forEach((d, y) => {
      m.includes(d.column) && Xs(l, y);
    });
    return;
  }
  const c = f + a - 1;
  if (l.params.rewind || l.params.loop)
    for (let h = f - i; h <= c + i; h += 1) {
      const m = (h % s + s) % s;
      (m < f || m > c) && Xs(l, m);
    }
  else
    for (let h = Math.max(f - i, 0); h <= Math.min(c + i, s - 1); h += 1)
      h !== f && (h > c || h < f) && Xs(l, h);
};
function Sp(l) {
  const {
    slidesGrid: i,
    params: s
  } = l, a = l.rtlTranslate ? l.translate : -l.translate;
  let f;
  for (let c = 0; c < i.length; c += 1)
    typeof i[c + 1] < "u" ? a >= i[c] && a < i[c + 1] - (i[c + 1] - i[c]) / 2 ? f = c : a >= i[c] && a < i[c + 1] && (f = c + 1) : a >= i[c] && (f = c);
  return s.normalizeSlideIndex && (f < 0 || typeof f > "u") && (f = 0), f;
}
function Ep(l) {
  const i = this, s = i.rtlTranslate ? i.translate : -i.translate, {
    snapGrid: a,
    params: f,
    activeIndex: c,
    realIndex: h,
    snapIndex: m
  } = i;
  let d = l, y;
  const g = (E) => {
    let T = E - i.virtual.slidesBefore;
    return T < 0 && (T = i.virtual.slides.length + T), T >= i.virtual.slides.length && (T -= i.virtual.slides.length), T;
  };
  if (typeof d > "u" && (d = Sp(i)), a.indexOf(s) >= 0)
    y = a.indexOf(s);
  else {
    const E = Math.min(f.slidesPerGroupSkip, d);
    y = E + Math.floor((d - E) / f.slidesPerGroup);
  }
  if (y >= a.length && (y = a.length - 1), d === c) {
    y !== m && (i.snapIndex = y, i.emit("snapIndexChange")), i.params.loop && i.virtual && i.params.virtual.enabled && (i.realIndex = g(d));
    return;
  }
  let S;
  i.virtual && f.virtual.enabled && f.loop ? S = g(d) : i.slides[d] ? S = parseInt(i.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : S = d, Object.assign(i, {
    previousSnapIndex: m,
    snapIndex: y,
    previousRealIndex: h,
    realIndex: S,
    previousIndex: c,
    activeIndex: d
  }), i.initialized && bs(i), i.emit("activeIndexChange"), i.emit("snapIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && (h !== S && i.emit("realIndexChange"), i.emit("slideChange"));
}
function xp(l, i) {
  const s = this, a = s.params;
  let f = l.closest(`.${a.slideClass}, swiper-slide`);
  !f && s.isElement && i && i.length > 1 && i.includes(l) && [...i.slice(i.indexOf(l) + 1, i.length)].forEach((m) => {
    !f && m.matches && m.matches(`.${a.slideClass}, swiper-slide`) && (f = m);
  });
  let c = !1, h;
  if (f) {
    for (let m = 0; m < s.slides.length; m += 1)
      if (s.slides[m] === f) {
        c = !0, h = m;
        break;
      }
  }
  if (f && c)
    s.clickedSlide = f, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(f.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = h;
  else {
    s.clickedSlide = void 0, s.clickedIndex = void 0;
    return;
  }
  a.slideToClickedSlide && s.clickedIndex !== void 0 && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide();
}
var Tp = {
  updateSize: pp,
  updateSlides: mp,
  updateAutoHeight: hp,
  updateSlidesOffset: vp,
  updateSlidesProgress: gp,
  updateProgress: yp,
  updateSlidesClasses: wp,
  updateActiveIndex: Ep,
  updateClickedSlide: xp
};
function Cp(l) {
  l === void 0 && (l = this.isHorizontal() ? "x" : "y");
  const i = this, {
    params: s,
    rtlTranslate: a,
    translate: f,
    wrapperEl: c
  } = i;
  if (s.virtualTranslate)
    return a ? -f : f;
  if (s.cssMode)
    return f;
  let h = Wd(c, l);
  return h += i.cssOverflowAdjustment(), a && (h = -h), h || 0;
}
function kp(l, i) {
  const s = this, {
    rtlTranslate: a,
    params: f,
    wrapperEl: c,
    progress: h
  } = s;
  let m = 0, d = 0;
  const y = 0;
  s.isHorizontal() ? m = a ? -l : l : d = l, f.roundLengths && (m = Math.floor(m), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? m : d, f.cssMode ? c[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -m : -d : f.virtualTranslate || (s.isHorizontal() ? m -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), c.style.transform = `translate3d(${m}px, ${d}px, ${y}px)`);
  let g;
  const S = s.maxTranslate() - s.minTranslate();
  S === 0 ? g = 0 : g = (l - s.minTranslate()) / S, g !== h && s.updateProgress(l), s.emit("setTranslate", s.translate, i);
}
function Pp() {
  return -this.snapGrid[0];
}
function _p() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Lp(l, i, s, a, f) {
  l === void 0 && (l = 0), i === void 0 && (i = this.params.speed), s === void 0 && (s = !0), a === void 0 && (a = !0);
  const c = this, {
    params: h,
    wrapperEl: m
  } = c;
  if (c.animating && h.preventInteractionOnTransition)
    return !1;
  const d = c.minTranslate(), y = c.maxTranslate();
  let g;
  if (a && l > d ? g = d : a && l < y ? g = y : g = l, c.updateProgress(g), h.cssMode) {
    const S = c.isHorizontal();
    if (i === 0)
      m[S ? "scrollLeft" : "scrollTop"] = -g;
    else {
      if (!c.support.smoothScroll)
        return wc({
          swiper: c,
          targetPosition: -g,
          side: S ? "left" : "top"
        }), !0;
      m.scrollTo({
        [S ? "left" : "top"]: -g,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return i === 0 ? (c.setTransition(0), c.setTranslate(g), s && (c.emit("beforeTransitionStart", i, f), c.emit("transitionEnd"))) : (c.setTransition(i), c.setTranslate(g), s && (c.emit("beforeTransitionStart", i, f), c.emit("transitionStart")), c.animating || (c.animating = !0, c.onTranslateToWrapperTransitionEnd || (c.onTranslateToWrapperTransitionEnd = function(E) {
    !c || c.destroyed || E.target === this && (c.wrapperEl.removeEventListener("transitionend", c.onTranslateToWrapperTransitionEnd), c.onTranslateToWrapperTransitionEnd = null, delete c.onTranslateToWrapperTransitionEnd, s && c.emit("transitionEnd"));
  }), c.wrapperEl.addEventListener("transitionend", c.onTranslateToWrapperTransitionEnd))), !0;
}
var zp = {
  getTranslate: Cp,
  setTranslate: kp,
  minTranslate: Pp,
  maxTranslate: _p,
  translateTo: Lp
};
function Mp(l, i) {
  const s = this;
  s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${l}ms`, s.wrapperEl.style.transitionDelay = l === 0 ? "0ms" : ""), s.emit("setTransition", l, i);
}
function Tc(l) {
  let {
    swiper: i,
    runCallbacks: s,
    direction: a,
    step: f
  } = l;
  const {
    activeIndex: c,
    previousIndex: h
  } = i;
  let m = a;
  if (m || (c > h ? m = "next" : c < h ? m = "prev" : m = "reset"), i.emit(`transition${f}`), s && c !== h) {
    if (m === "reset") {
      i.emit(`slideResetTransition${f}`);
      return;
    }
    i.emit(`slideChangeTransition${f}`), m === "next" ? i.emit(`slideNextTransition${f}`) : i.emit(`slidePrevTransition${f}`);
  }
}
function Op(l, i) {
  l === void 0 && (l = !0);
  const s = this, {
    params: a
  } = s;
  a.cssMode || (a.autoHeight && s.updateAutoHeight(), Tc({
    swiper: s,
    runCallbacks: l,
    direction: i,
    step: "Start"
  }));
}
function Np(l, i) {
  l === void 0 && (l = !0);
  const s = this, {
    params: a
  } = s;
  s.animating = !1, !a.cssMode && (s.setTransition(0), Tc({
    swiper: s,
    runCallbacks: l,
    direction: i,
    step: "End"
  }));
}
var Ip = {
  setTransition: Mp,
  transitionStart: Op,
  transitionEnd: Np
};
function Rp(l, i, s, a, f) {
  l === void 0 && (l = 0), i === void 0 && (i = this.params.speed), s === void 0 && (s = !0), typeof l == "string" && (l = parseInt(l, 10));
  const c = this;
  let h = l;
  h < 0 && (h = 0);
  const {
    params: m,
    snapGrid: d,
    slidesGrid: y,
    previousIndex: g,
    activeIndex: S,
    rtlTranslate: E,
    wrapperEl: T,
    enabled: O
  } = c;
  if (c.animating && m.preventInteractionOnTransition || !O && !a && !f)
    return !1;
  const _ = Math.min(c.params.slidesPerGroupSkip, h);
  let M = _ + Math.floor((h - _) / c.params.slidesPerGroup);
  M >= d.length && (M = d.length - 1);
  const P = -d[M];
  if (m.normalizeSlideIndex)
    for (let R = 0; R < y.length; R += 1) {
      const V = -Math.floor(P * 100), Y = Math.floor(y[R] * 100), re = Math.floor(y[R + 1] * 100);
      typeof y[R + 1] < "u" ? V >= Y && V < re - (re - Y) / 2 ? h = R : V >= Y && V < re && (h = R + 1) : V >= Y && (h = R);
    }
  if (c.initialized && h !== S && (!c.allowSlideNext && (E ? P > c.translate && P > c.minTranslate() : P < c.translate && P < c.minTranslate()) || !c.allowSlidePrev && P > c.translate && P > c.maxTranslate() && (S || 0) !== h))
    return !1;
  h !== (g || 0) && s && c.emit("beforeSlideChangeStart"), c.updateProgress(P);
  let A;
  if (h > S ? A = "next" : h < S ? A = "prev" : A = "reset", E && -P === c.translate || !E && P === c.translate)
    return c.updateActiveIndex(h), m.autoHeight && c.updateAutoHeight(), c.updateSlidesClasses(), m.effect !== "slide" && c.setTranslate(P), A !== "reset" && (c.transitionStart(s, A), c.transitionEnd(s, A)), !1;
  if (m.cssMode) {
    const R = c.isHorizontal(), V = E ? P : -P;
    if (i === 0) {
      const Y = c.virtual && c.params.virtual.enabled;
      Y && (c.wrapperEl.style.scrollSnapType = "none", c._immediateVirtual = !0), Y && !c._cssModeVirtualInitialSet && c.params.initialSlide > 0 ? (c._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        T[R ? "scrollLeft" : "scrollTop"] = V;
      })) : T[R ? "scrollLeft" : "scrollTop"] = V, Y && requestAnimationFrame(() => {
        c.wrapperEl.style.scrollSnapType = "", c._immediateVirtual = !1;
      });
    } else {
      if (!c.support.smoothScroll)
        return wc({
          swiper: c,
          targetPosition: V,
          side: R ? "left" : "top"
        }), !0;
      T.scrollTo({
        [R ? "left" : "top"]: V,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return c.setTransition(i), c.setTranslate(P), c.updateActiveIndex(h), c.updateSlidesClasses(), c.emit("beforeTransitionStart", i, a), c.transitionStart(s, A), i === 0 ? c.transitionEnd(s, A) : c.animating || (c.animating = !0, c.onSlideToWrapperTransitionEnd || (c.onSlideToWrapperTransitionEnd = function(V) {
    !c || c.destroyed || V.target === this && (c.wrapperEl.removeEventListener("transitionend", c.onSlideToWrapperTransitionEnd), c.onSlideToWrapperTransitionEnd = null, delete c.onSlideToWrapperTransitionEnd, c.transitionEnd(s, A));
  }), c.wrapperEl.addEventListener("transitionend", c.onSlideToWrapperTransitionEnd)), !0;
}
function Dp(l, i, s, a) {
  l === void 0 && (l = 0), i === void 0 && (i = this.params.speed), s === void 0 && (s = !0), typeof l == "string" && (l = parseInt(l, 10));
  const f = this;
  let c = l;
  return f.params.loop && (f.virtual && f.params.virtual.enabled ? c = c + f.virtual.slidesBefore : c = f.getSlideIndexByData(c)), f.slideTo(c, i, s, a);
}
function Ap(l, i, s) {
  l === void 0 && (l = this.params.speed), i === void 0 && (i = !0);
  const a = this, {
    enabled: f,
    params: c,
    animating: h
  } = a;
  if (!f) return a;
  let m = c.slidesPerGroup;
  c.slidesPerView === "auto" && c.slidesPerGroup === 1 && c.slidesPerGroupAuto && (m = Math.max(a.slidesPerViewDynamic("current", !0), 1));
  const d = a.activeIndex < c.slidesPerGroupSkip ? 1 : m, y = a.virtual && c.virtual.enabled;
  if (c.loop) {
    if (h && !y && c.loopPreventsSliding) return !1;
    if (a.loopFix({
      direction: "next"
    }), a._clientLeft = a.wrapperEl.clientLeft, a.activeIndex === a.slides.length - 1 && c.cssMode)
      return requestAnimationFrame(() => {
        a.slideTo(a.activeIndex + d, l, i, s);
      }), !0;
  }
  return c.rewind && a.isEnd ? a.slideTo(0, l, i, s) : a.slideTo(a.activeIndex + d, l, i, s);
}
function Fp(l, i, s) {
  l === void 0 && (l = this.params.speed), i === void 0 && (i = !0);
  const a = this, {
    params: f,
    snapGrid: c,
    slidesGrid: h,
    rtlTranslate: m,
    enabled: d,
    animating: y
  } = a;
  if (!d) return a;
  const g = a.virtual && f.virtual.enabled;
  if (f.loop) {
    if (y && !g && f.loopPreventsSliding) return !1;
    a.loopFix({
      direction: "prev"
    }), a._clientLeft = a.wrapperEl.clientLeft;
  }
  const S = m ? a.translate : -a.translate;
  function E(P) {
    return P < 0 ? -Math.floor(Math.abs(P)) : Math.floor(P);
  }
  const T = E(S), O = c.map((P) => E(P));
  let _ = c[O.indexOf(T) - 1];
  if (typeof _ > "u" && f.cssMode) {
    let P;
    c.forEach((A, R) => {
      T >= A && (P = R);
    }), typeof P < "u" && (_ = c[P > 0 ? P - 1 : P]);
  }
  let M = 0;
  if (typeof _ < "u" && (M = h.indexOf(_), M < 0 && (M = a.activeIndex - 1), f.slidesPerView === "auto" && f.slidesPerGroup === 1 && f.slidesPerGroupAuto && (M = M - a.slidesPerViewDynamic("previous", !0) + 1, M = Math.max(M, 0))), f.rewind && a.isBeginning) {
    const P = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
    return a.slideTo(P, l, i, s);
  } else if (f.loop && a.activeIndex === 0 && f.cssMode)
    return requestAnimationFrame(() => {
      a.slideTo(M, l, i, s);
    }), !0;
  return a.slideTo(M, l, i, s);
}
function jp(l, i, s) {
  l === void 0 && (l = this.params.speed), i === void 0 && (i = !0);
  const a = this;
  return a.slideTo(a.activeIndex, l, i, s);
}
function Vp(l, i, s, a) {
  l === void 0 && (l = this.params.speed), i === void 0 && (i = !0), a === void 0 && (a = 0.5);
  const f = this;
  let c = f.activeIndex;
  const h = Math.min(f.params.slidesPerGroupSkip, c), m = h + Math.floor((c - h) / f.params.slidesPerGroup), d = f.rtlTranslate ? f.translate : -f.translate;
  if (d >= f.snapGrid[m]) {
    const y = f.snapGrid[m], g = f.snapGrid[m + 1];
    d - y > (g - y) * a && (c += f.params.slidesPerGroup);
  } else {
    const y = f.snapGrid[m - 1], g = f.snapGrid[m];
    d - y <= (g - y) * a && (c -= f.params.slidesPerGroup);
  }
  return c = Math.max(c, 0), c = Math.min(c, f.slidesGrid.length - 1), f.slideTo(c, l, i, s);
}
function Bp() {
  const l = this, {
    params: i,
    slidesEl: s
  } = l, a = i.slidesPerView === "auto" ? l.slidesPerViewDynamic() : i.slidesPerView;
  let f = l.clickedIndex, c;
  const h = l.isElement ? "swiper-slide" : `.${i.slideClass}`;
  if (i.loop) {
    if (l.animating) return;
    c = parseInt(l.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? f < l.loopedSlides - a / 2 || f > l.slides.length - l.loopedSlides + a / 2 ? (l.loopFix(), f = l.getSlideIndex(St(s, `${h}[data-swiper-slide-index="${c}"]`)[0]), Zs(() => {
      l.slideTo(f);
    })) : l.slideTo(f) : f > l.slides.length - a ? (l.loopFix(), f = l.getSlideIndex(St(s, `${h}[data-swiper-slide-index="${c}"]`)[0]), Zs(() => {
      l.slideTo(f);
    })) : l.slideTo(f);
  } else
    l.slideTo(f);
}
var Hp = {
  slideTo: Rp,
  slideToLoop: Dp,
  slideNext: Ap,
  slidePrev: Fp,
  slideReset: jp,
  slideToClosest: Vp,
  slideToClickedSlide: Bp
};
function Up(l) {
  const i = this, {
    params: s,
    slidesEl: a
  } = i;
  if (!s.loop || i.virtual && i.params.virtual.enabled) return;
  St(a, `.${s.slideClass}, swiper-slide`).forEach((c, h) => {
    c.setAttribute("data-swiper-slide-index", h);
  }), i.loopFix({
    slideRealIndex: l,
    direction: s.centeredSlides ? void 0 : "next"
  });
}
function $p(l) {
  let {
    slideRealIndex: i,
    slideTo: s = !0,
    direction: a,
    setTranslate: f,
    activeSlideIndex: c,
    byController: h,
    byMousewheel: m
  } = l === void 0 ? {} : l;
  const d = this;
  if (!d.params.loop) return;
  d.emit("beforeLoopFix");
  const {
    slides: y,
    allowSlidePrev: g,
    allowSlideNext: S,
    slidesEl: E,
    params: T
  } = d;
  if (d.allowSlidePrev = !0, d.allowSlideNext = !0, d.virtual && T.virtual.enabled) {
    s && (!T.centeredSlides && d.snapIndex === 0 ? d.slideTo(d.virtual.slides.length, 0, !1, !0) : T.centeredSlides && d.snapIndex < T.slidesPerView ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0) : d.snapIndex === d.snapGrid.length - 1 && d.slideTo(d.virtual.slidesBefore, 0, !1, !0)), d.allowSlidePrev = g, d.allowSlideNext = S, d.emit("loopFix");
    return;
  }
  const O = T.slidesPerView === "auto" ? d.slidesPerViewDynamic() : Math.ceil(parseFloat(T.slidesPerView, 10));
  let _ = T.loopedSlides || O;
  _ % T.slidesPerGroup !== 0 && (_ += T.slidesPerGroup - _ % T.slidesPerGroup), d.loopedSlides = _;
  const M = [], P = [];
  let A = d.activeIndex;
  typeof c > "u" ? c = d.getSlideIndex(d.slides.filter((W) => W.classList.contains(T.slideActiveClass))[0]) : A = c;
  const R = a === "next" || !a, V = a === "prev" || !a;
  let Y = 0, re = 0;
  if (c < _) {
    Y = Math.max(_ - c, T.slidesPerGroup);
    for (let W = 0; W < _ - c; W += 1) {
      const ie = W - Math.floor(W / y.length) * y.length;
      M.push(y.length - ie - 1);
    }
  } else if (c > d.slides.length - _ * 2) {
    re = Math.max(c - (d.slides.length - _ * 2), T.slidesPerGroup);
    for (let W = 0; W < re; W += 1) {
      const ie = W - Math.floor(W / y.length) * y.length;
      P.push(ie);
    }
  }
  if (V && M.forEach((W) => {
    d.slides[W].swiperLoopMoveDOM = !0, E.prepend(d.slides[W]), d.slides[W].swiperLoopMoveDOM = !1;
  }), R && P.forEach((W) => {
    d.slides[W].swiperLoopMoveDOM = !0, E.append(d.slides[W]), d.slides[W].swiperLoopMoveDOM = !1;
  }), d.recalcSlides(), T.slidesPerView === "auto" && d.updateSlides(), T.watchSlidesProgress && d.updateSlidesOffset(), s) {
    if (M.length > 0 && V)
      if (typeof i > "u") {
        const W = d.slidesGrid[A], U = d.slidesGrid[A + Y] - W;
        m ? d.setTranslate(d.translate - U) : (d.slideTo(A + Y, 0, !1, !0), f && (d.touches[d.isHorizontal() ? "startX" : "startY"] += U, d.touchEventsData.currentTranslate = d.translate));
      } else
        f && (d.slideToLoop(i, 0, !1, !0), d.touchEventsData.currentTranslate = d.translate);
    else if (P.length > 0 && R)
      if (typeof i > "u") {
        const W = d.slidesGrid[A], U = d.slidesGrid[A - re] - W;
        m ? d.setTranslate(d.translate - U) : (d.slideTo(A - re, 0, !1, !0), f && (d.touches[d.isHorizontal() ? "startX" : "startY"] += U, d.touchEventsData.currentTranslate = d.translate));
      } else
        d.slideToLoop(i, 0, !1, !0);
  }
  if (d.allowSlidePrev = g, d.allowSlideNext = S, d.controller && d.controller.control && !h) {
    const W = {
      slideRealIndex: i,
      direction: a,
      setTranslate: f,
      activeSlideIndex: c,
      byController: !0
    };
    Array.isArray(d.controller.control) ? d.controller.control.forEach((ie) => {
      !ie.destroyed && ie.params.loop && ie.loopFix({
        ...W,
        slideTo: ie.params.slidesPerView === T.slidesPerView ? s : !1
      });
    }) : d.controller.control instanceof d.constructor && d.controller.control.params.loop && d.controller.control.loopFix({
      ...W,
      slideTo: d.controller.control.params.slidesPerView === T.slidesPerView ? s : !1
    });
  }
  d.emit("loopFix");
}
function Gp() {
  const l = this, {
    params: i,
    slidesEl: s
  } = l;
  if (!i.loop || l.virtual && l.params.virtual.enabled) return;
  l.recalcSlides();
  const a = [];
  l.slides.forEach((f) => {
    const c = typeof f.swiperSlideIndex > "u" ? f.getAttribute("data-swiper-slide-index") * 1 : f.swiperSlideIndex;
    a[c] = f;
  }), l.slides.forEach((f) => {
    f.removeAttribute("data-swiper-slide-index");
  }), a.forEach((f) => {
    s.append(f);
  }), l.recalcSlides(), l.slideTo(l.realIndex, 0);
}
var Wp = {
  loopCreate: Up,
  loopFix: $p,
  loopDestroy: Gp
};
function Qp(l) {
  const i = this;
  if (!i.params.simulateTouch || i.params.watchOverflow && i.isLocked || i.params.cssMode) return;
  const s = i.params.touchEventsTarget === "container" ? i.el : i.wrapperEl;
  i.isElement && (i.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = l ? "grabbing" : "grab", i.isElement && requestAnimationFrame(() => {
    i.__preventObserver__ = !1;
  });
}
function Yp() {
  const l = this;
  l.params.watchOverflow && l.isLocked || l.params.cssMode || (l.isElement && (l.__preventObserver__ = !0), l[l.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", l.isElement && requestAnimationFrame(() => {
    l.__preventObserver__ = !1;
  }));
}
var Xp = {
  setGrabCursor: Qp,
  unsetGrabCursor: Yp
};
function Kp(l, i) {
  i === void 0 && (i = this);
  function s(a) {
    if (!a || a === st() || a === Ye()) return null;
    a.assignedSlot && (a = a.assignedSlot);
    const f = a.closest(l);
    return !f && !a.getRootNode ? null : f || s(a.getRootNode().host);
  }
  return s(i);
}
function qp(l) {
  const i = this, s = st(), a = Ye(), f = i.touchEventsData;
  f.evCache.push(l);
  const {
    params: c,
    touches: h,
    enabled: m
  } = i;
  if (!m || !c.simulateTouch && l.pointerType === "mouse" || i.animating && c.preventInteractionOnTransition)
    return;
  !i.animating && c.cssMode && c.loop && i.loopFix();
  let d = l;
  d.originalEvent && (d = d.originalEvent);
  let y = d.target;
  if (c.touchEventsTarget === "wrapper" && !i.wrapperEl.contains(y) || "which" in d && d.which === 3 || "button" in d && d.button > 0 || f.isTouched && f.isMoved) return;
  const g = !!c.noSwipingClass && c.noSwipingClass !== "", S = l.composedPath ? l.composedPath() : l.path;
  g && d.target && d.target.shadowRoot && S && (y = S[0]);
  const E = c.noSwipingSelector ? c.noSwipingSelector : `.${c.noSwipingClass}`, T = !!(d.target && d.target.shadowRoot);
  if (c.noSwiping && (T ? Kp(E, y) : y.closest(E))) {
    i.allowClick = !0;
    return;
  }
  if (c.swipeHandler && !y.closest(c.swipeHandler))
    return;
  h.currentX = d.pageX, h.currentY = d.pageY;
  const O = h.currentX, _ = h.currentY, M = c.edgeSwipeDetection || c.iOSEdgeSwipeDetection, P = c.edgeSwipeThreshold || c.iOSEdgeSwipeThreshold;
  if (M && (O <= P || O >= a.innerWidth - P))
    if (M === "prevent")
      l.preventDefault();
    else
      return;
  Object.assign(f, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), h.startX = O, h.startY = _, f.touchStartTime = Wi(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, c.threshold > 0 && (f.allowThresholdMove = !1);
  let A = !0;
  y.matches(f.focusableElements) && (A = !1, y.nodeName === "SELECT" && (f.isTouched = !1)), s.activeElement && s.activeElement.matches(f.focusableElements) && s.activeElement !== y && s.activeElement.blur();
  const R = A && i.allowTouchMove && c.touchStartPreventDefault;
  (c.touchStartForcePreventDefault || R) && !y.isContentEditable && d.preventDefault(), c.freeMode && c.freeMode.enabled && i.freeMode && i.animating && !c.cssMode && i.freeMode.onTouchStart(), i.emit("touchStart", d);
}
function Zp(l) {
  const i = st(), s = this, a = s.touchEventsData, {
    params: f,
    touches: c,
    rtlTranslate: h,
    enabled: m
  } = s;
  if (!m || !f.simulateTouch && l.pointerType === "mouse") return;
  let d = l;
  if (d.originalEvent && (d = d.originalEvent), !a.isTouched) {
    a.startMoving && a.isScrolling && s.emit("touchMoveOpposite", d);
    return;
  }
  const y = a.evCache.findIndex((W) => W.pointerId === d.pointerId);
  y >= 0 && (a.evCache[y] = d);
  const g = a.evCache.length > 1 ? a.evCache[0] : d, S = g.pageX, E = g.pageY;
  if (d.preventedByNestedSwiper) {
    c.startX = S, c.startY = E;
    return;
  }
  if (!s.allowTouchMove) {
    d.target.matches(a.focusableElements) || (s.allowClick = !1), a.isTouched && (Object.assign(c, {
      startX: S,
      startY: E,
      prevX: s.touches.currentX,
      prevY: s.touches.currentY,
      currentX: S,
      currentY: E
    }), a.touchStartTime = Wi());
    return;
  }
  if (f.touchReleaseOnEdges && !f.loop) {
    if (s.isVertical()) {
      if (E < c.startY && s.translate <= s.maxTranslate() || E > c.startY && s.translate >= s.minTranslate()) {
        a.isTouched = !1, a.isMoved = !1;
        return;
      }
    } else if (S < c.startX && s.translate <= s.maxTranslate() || S > c.startX && s.translate >= s.minTranslate())
      return;
  }
  if (i.activeElement && d.target === i.activeElement && d.target.matches(a.focusableElements)) {
    a.isMoved = !0, s.allowClick = !1;
    return;
  }
  if (a.allowTouchCallbacks && s.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
  c.currentX = S, c.currentY = E;
  const T = c.currentX - c.startX, O = c.currentY - c.startY;
  if (s.params.threshold && Math.sqrt(T ** 2 + O ** 2) < s.params.threshold) return;
  if (typeof a.isScrolling > "u") {
    let W;
    s.isHorizontal() && c.currentY === c.startY || s.isVertical() && c.currentX === c.startX ? a.isScrolling = !1 : T * T + O * O >= 25 && (W = Math.atan2(Math.abs(O), Math.abs(T)) * 180 / Math.PI, a.isScrolling = s.isHorizontal() ? W > f.touchAngle : 90 - W > f.touchAngle);
  }
  if (a.isScrolling && s.emit("touchMoveOpposite", d), typeof a.startMoving > "u" && (c.currentX !== c.startX || c.currentY !== c.startY) && (a.startMoving = !0), a.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && a.evCache.length > 1) {
    a.isTouched = !1;
    return;
  }
  if (!a.startMoving)
    return;
  s.allowClick = !1, !f.cssMode && d.cancelable && d.preventDefault(), f.touchMoveStopPropagation && !f.nested && d.stopPropagation();
  let _ = s.isHorizontal() ? T : O, M = s.isHorizontal() ? c.currentX - c.previousX : c.currentY - c.previousY;
  f.oneWayMovement && (_ = Math.abs(_) * (h ? 1 : -1), M = Math.abs(M) * (h ? 1 : -1)), c.diff = _, _ *= f.touchRatio, h && (_ = -_, M = -M);
  const P = s.touchesDirection;
  s.swipeDirection = _ > 0 ? "prev" : "next", s.touchesDirection = M > 0 ? "prev" : "next";
  const A = s.params.loop && !f.cssMode, R = s.swipeDirection === "next" && s.allowSlideNext || s.swipeDirection === "prev" && s.allowSlidePrev;
  if (!a.isMoved) {
    if (A && R && s.loopFix({
      direction: s.swipeDirection
    }), a.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
      const W = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0
      });
      s.wrapperEl.dispatchEvent(W);
    }
    a.allowMomentumBounce = !1, f.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", d);
  }
  let V;
  a.isMoved && P !== s.touchesDirection && A && R && Math.abs(_) >= 1 && (s.loopFix({
    direction: s.swipeDirection,
    setTranslate: !0
  }), V = !0), s.emit("sliderMove", d), a.isMoved = !0, a.currentTranslate = _ + a.startTranslate;
  let Y = !0, re = f.resistanceRatio;
  if (f.touchReleaseOnEdges && (re = 0), _ > 0 ? (A && R && !V && a.currentTranslate > (f.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), a.currentTranslate > s.minTranslate() && (Y = !1, f.resistance && (a.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + a.startTranslate + _) ** re))) : _ < 0 && (A && R && !V && a.currentTranslate < (f.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: s.slides.length - (f.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(f.slidesPerView, 10)))
  }), a.currentTranslate < s.maxTranslate() && (Y = !1, f.resistance && (a.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - a.startTranslate - _) ** re))), Y && (d.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (a.currentTranslate = a.startTranslate), f.threshold > 0)
    if (Math.abs(_) > f.threshold || a.allowThresholdMove) {
      if (!a.allowThresholdMove) {
        a.allowThresholdMove = !0, c.startX = c.currentX, c.startY = c.currentY, a.currentTranslate = a.startTranslate, c.diff = s.isHorizontal() ? c.currentX - c.startX : c.currentY - c.startY;
        return;
      }
    } else {
      a.currentTranslate = a.startTranslate;
      return;
    }
  !f.followFinger || f.cssMode || ((f.freeMode && f.freeMode.enabled && s.freeMode || f.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), f.freeMode && f.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(a.currentTranslate), s.setTranslate(a.currentTranslate));
}
function Jp(l) {
  const i = this, s = i.touchEventsData, a = s.evCache.findIndex((R) => R.pointerId === l.pointerId);
  if (a >= 0 && s.evCache.splice(a, 1), ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(l.type) && !(["pointercancel", "contextmenu"].includes(l.type) && (i.browser.isSafari || i.browser.isWebView)))
    return;
  const {
    params: f,
    touches: c,
    rtlTranslate: h,
    slidesGrid: m,
    enabled: d
  } = i;
  if (!d || !f.simulateTouch && l.pointerType === "mouse") return;
  let y = l;
  if (y.originalEvent && (y = y.originalEvent), s.allowTouchCallbacks && i.emit("touchEnd", y), s.allowTouchCallbacks = !1, !s.isTouched) {
    s.isMoved && f.grabCursor && i.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
    return;
  }
  f.grabCursor && s.isMoved && s.isTouched && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!1);
  const g = Wi(), S = g - s.touchStartTime;
  if (i.allowClick) {
    const R = y.path || y.composedPath && y.composedPath();
    i.updateClickedSlide(R && R[0] || y.target, R), i.emit("tap click", y), S < 300 && g - s.lastClickTime < 300 && i.emit("doubleTap doubleClick", y);
  }
  if (s.lastClickTime = Wi(), Zs(() => {
    i.destroyed || (i.allowClick = !0);
  }), !s.isTouched || !s.isMoved || !i.swipeDirection || c.diff === 0 || s.currentTranslate === s.startTranslate) {
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    return;
  }
  s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
  let E;
  if (f.followFinger ? E = h ? i.translate : -i.translate : E = -s.currentTranslate, f.cssMode)
    return;
  if (f.freeMode && f.freeMode.enabled) {
    i.freeMode.onTouchEnd({
      currentPos: E
    });
    return;
  }
  let T = 0, O = i.slidesSizesGrid[0];
  for (let R = 0; R < m.length; R += R < f.slidesPerGroupSkip ? 1 : f.slidesPerGroup) {
    const V = R < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
    typeof m[R + V] < "u" ? E >= m[R] && E < m[R + V] && (T = R, O = m[R + V] - m[R]) : E >= m[R] && (T = R, O = m[m.length - 1] - m[m.length - 2]);
  }
  let _ = null, M = null;
  f.rewind && (i.isBeginning ? M = f.virtual && f.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1 : i.isEnd && (_ = 0));
  const P = (E - m[T]) / O, A = T < f.slidesPerGroupSkip - 1 ? 1 : f.slidesPerGroup;
  if (S > f.longSwipesMs) {
    if (!f.longSwipes) {
      i.slideTo(i.activeIndex);
      return;
    }
    i.swipeDirection === "next" && (P >= f.longSwipesRatio ? i.slideTo(f.rewind && i.isEnd ? _ : T + A) : i.slideTo(T)), i.swipeDirection === "prev" && (P > 1 - f.longSwipesRatio ? i.slideTo(T + A) : M !== null && P < 0 && Math.abs(P) > f.longSwipesRatio ? i.slideTo(M) : i.slideTo(T));
  } else {
    if (!f.shortSwipes) {
      i.slideTo(i.activeIndex);
      return;
    }
    i.navigation && (y.target === i.navigation.nextEl || y.target === i.navigation.prevEl) ? y.target === i.navigation.nextEl ? i.slideTo(T + A) : i.slideTo(T) : (i.swipeDirection === "next" && i.slideTo(_ !== null ? _ : T + A), i.swipeDirection === "prev" && i.slideTo(M !== null ? M : T));
  }
}
function pc() {
  const l = this, {
    params: i,
    el: s
  } = l;
  if (s && s.offsetWidth === 0) return;
  i.breakpoints && l.setBreakpoint();
  const {
    allowSlideNext: a,
    allowSlidePrev: f,
    snapGrid: c
  } = l, h = l.virtual && l.params.virtual.enabled;
  l.allowSlideNext = !0, l.allowSlidePrev = !0, l.updateSize(), l.updateSlides(), l.updateSlidesClasses();
  const m = h && i.loop;
  (i.slidesPerView === "auto" || i.slidesPerView > 1) && l.isEnd && !l.isBeginning && !l.params.centeredSlides && !m ? l.slideTo(l.slides.length - 1, 0, !1, !0) : l.params.loop && !h ? l.slideToLoop(l.realIndex, 0, !1, !0) : l.slideTo(l.activeIndex, 0, !1, !0), l.autoplay && l.autoplay.running && l.autoplay.paused && (clearTimeout(l.autoplay.resizeTimeout), l.autoplay.resizeTimeout = setTimeout(() => {
    l.autoplay && l.autoplay.running && l.autoplay.paused && l.autoplay.resume();
  }, 500)), l.allowSlidePrev = f, l.allowSlideNext = a, l.params.watchOverflow && c !== l.snapGrid && l.checkOverflow();
}
function bp(l) {
  const i = this;
  i.enabled && (i.allowClick || (i.params.preventClicks && l.preventDefault(), i.params.preventClicksPropagation && i.animating && (l.stopPropagation(), l.stopImmediatePropagation())));
}
function em() {
  const l = this, {
    wrapperEl: i,
    rtlTranslate: s,
    enabled: a
  } = l;
  if (!a) return;
  l.previousTranslate = l.translate, l.isHorizontal() ? l.translate = -i.scrollLeft : l.translate = -i.scrollTop, l.translate === 0 && (l.translate = 0), l.updateActiveIndex(), l.updateSlidesClasses();
  let f;
  const c = l.maxTranslate() - l.minTranslate();
  c === 0 ? f = 0 : f = (l.translate - l.minTranslate()) / c, f !== l.progress && l.updateProgress(s ? -l.translate : l.translate), l.emit("setTranslate", l.translate, !1);
}
function tm(l) {
  const i = this;
  $i(i, l.target), !(i.params.cssMode || i.params.slidesPerView !== "auto" && !i.params.autoHeight) && i.update();
}
let mc = !1;
function nm() {
}
const Cc = (l, i) => {
  const s = st(), {
    params: a,
    el: f,
    wrapperEl: c,
    device: h
  } = l, m = !!a.nested, d = i === "on" ? "addEventListener" : "removeEventListener", y = i;
  f[d]("pointerdown", l.onTouchStart, {
    passive: !1
  }), s[d]("pointermove", l.onTouchMove, {
    passive: !1,
    capture: m
  }), s[d]("pointerup", l.onTouchEnd, {
    passive: !0
  }), s[d]("pointercancel", l.onTouchEnd, {
    passive: !0
  }), s[d]("pointerout", l.onTouchEnd, {
    passive: !0
  }), s[d]("pointerleave", l.onTouchEnd, {
    passive: !0
  }), s[d]("contextmenu", l.onTouchEnd, {
    passive: !0
  }), (a.preventClicks || a.preventClicksPropagation) && f[d]("click", l.onClick, !0), a.cssMode && c[d]("scroll", l.onScroll), a.updateOnWindowResize ? l[y](h.ios || h.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", pc, !0) : l[y]("observerUpdate", pc, !0), f[d]("load", l.onLoad, {
    capture: !0
  });
};
function rm() {
  const l = this, i = st(), {
    params: s
  } = l;
  l.onTouchStart = qp.bind(l), l.onTouchMove = Zp.bind(l), l.onTouchEnd = Jp.bind(l), s.cssMode && (l.onScroll = em.bind(l)), l.onClick = bp.bind(l), l.onLoad = tm.bind(l), mc || (i.addEventListener("touchstart", nm), mc = !0), Cc(l, "on");
}
function im() {
  Cc(this, "off");
}
var lm = {
  attachEvents: rm,
  detachEvents: im
};
const hc = (l, i) => l.grid && i.grid && i.grid.rows > 1;
function sm() {
  const l = this, {
    realIndex: i,
    initialized: s,
    params: a,
    el: f
  } = l, c = a.breakpoints;
  if (!c || c && Object.keys(c).length === 0) return;
  const h = l.getBreakpoint(c, l.params.breakpointsBase, l.el);
  if (!h || l.currentBreakpoint === h) return;
  const d = (h in c ? c[h] : void 0) || l.originalParams, y = hc(l, a), g = hc(l, d), S = a.enabled;
  y && !g ? (f.classList.remove(`${a.containerModifierClass}grid`, `${a.containerModifierClass}grid-column`), l.emitContainerClasses()) : !y && g && (f.classList.add(`${a.containerModifierClass}grid`), (d.grid.fill && d.grid.fill === "column" || !d.grid.fill && a.grid.fill === "column") && f.classList.add(`${a.containerModifierClass}grid-column`), l.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((P) => {
    if (typeof d[P] > "u") return;
    const A = a[P] && a[P].enabled, R = d[P] && d[P].enabled;
    A && !R && l[P].disable(), !A && R && l[P].enable();
  });
  const E = d.direction && d.direction !== a.direction, T = a.loop && (d.slidesPerView !== a.slidesPerView || E), O = a.loop;
  E && s && l.changeDirection(), lt(l.params, d);
  const _ = l.params.enabled, M = l.params.loop;
  Object.assign(l, {
    allowTouchMove: l.params.allowTouchMove,
    allowSlideNext: l.params.allowSlideNext,
    allowSlidePrev: l.params.allowSlidePrev
  }), S && !_ ? l.disable() : !S && _ && l.enable(), l.currentBreakpoint = h, l.emit("_beforeBreakpoint", d), s && (T ? (l.loopDestroy(), l.loopCreate(i), l.updateSlides()) : !O && M ? (l.loopCreate(i), l.updateSlides()) : O && !M && l.loopDestroy()), l.emit("breakpoint", d);
}
function om(l, i, s) {
  if (i === void 0 && (i = "window"), !l || i === "container" && !s) return;
  let a = !1;
  const f = Ye(), c = i === "window" ? f.innerHeight : s.clientHeight, h = Object.keys(l).map((m) => {
    if (typeof m == "string" && m.indexOf("@") === 0) {
      const d = parseFloat(m.substr(1));
      return {
        value: c * d,
        point: m
      };
    }
    return {
      value: m,
      point: m
    };
  });
  h.sort((m, d) => parseInt(m.value, 10) - parseInt(d.value, 10));
  for (let m = 0; m < h.length; m += 1) {
    const {
      point: d,
      value: y
    } = h[m];
    i === "window" ? f.matchMedia(`(min-width: ${y}px)`).matches && (a = d) : y <= s.clientWidth && (a = d);
  }
  return a || "max";
}
var am = {
  setBreakpoint: sm,
  getBreakpoint: om
};
function um(l, i) {
  const s = [];
  return l.forEach((a) => {
    typeof a == "object" ? Object.keys(a).forEach((f) => {
      a[f] && s.push(i + f);
    }) : typeof a == "string" && s.push(i + a);
  }), s;
}
function cm() {
  const l = this, {
    classNames: i,
    params: s,
    rtl: a,
    el: f,
    device: c
  } = l, h = um(["initialized", s.direction, {
    "free-mode": l.params.freeMode && s.freeMode.enabled
  }, {
    autoheight: s.autoHeight
  }, {
    rtl: a
  }, {
    grid: s.grid && s.grid.rows > 1
  }, {
    "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
  }, {
    android: c.android
  }, {
    ios: c.ios
  }, {
    "css-mode": s.cssMode
  }, {
    centered: s.cssMode && s.centeredSlides
  }, {
    "watch-progress": s.watchSlidesProgress
  }], s.containerModifierClass);
  i.push(...h), f.classList.add(...i), l.emitContainerClasses();
}
function fm() {
  const l = this, {
    el: i,
    classNames: s
  } = l;
  i.classList.remove(...s), l.emitContainerClasses();
}
var dm = {
  addClasses: cm,
  removeClasses: fm
};
function pm() {
  const l = this, {
    isLocked: i,
    params: s
  } = l, {
    slidesOffsetBefore: a
  } = s;
  if (a) {
    const f = l.slides.length - 1, c = l.slidesGrid[f] + l.slidesSizesGrid[f] + a * 2;
    l.isLocked = l.size > c;
  } else
    l.isLocked = l.snapGrid.length === 1;
  s.allowSlideNext === !0 && (l.allowSlideNext = !l.isLocked), s.allowSlidePrev === !0 && (l.allowSlidePrev = !l.isLocked), i && i !== l.isLocked && (l.isEnd = !1), i !== l.isLocked && l.emit(l.isLocked ? "lock" : "unlock");
}
var mm = {
  checkOverflow: pm
}, eo = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopedSlides: null,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function hm(l, i) {
  return function(a) {
    a === void 0 && (a = {});
    const f = Object.keys(a)[0], c = a[f];
    if (typeof c != "object" || c === null) {
      lt(i, a);
      return;
    }
    if (l[f] === !0 && (l[f] = {
      enabled: !0
    }), f === "navigation" && l[f] && l[f].enabled && !l[f].prevEl && !l[f].nextEl && (l[f].auto = !0), ["pagination", "scrollbar"].indexOf(f) >= 0 && l[f] && l[f].enabled && !l[f].el && (l[f].auto = !0), !(f in l && "enabled" in c)) {
      lt(i, a);
      return;
    }
    typeof l[f] == "object" && !("enabled" in l[f]) && (l[f].enabled = !0), l[f] || (l[f] = {
      enabled: !1
    }), lt(i, a);
  };
}
const Ks = {
  eventsEmitter: dp,
  update: Tp,
  translate: zp,
  transition: Ip,
  slide: Hp,
  loop: Wp,
  grabCursor: Xp,
  events: lm,
  breakpoints: am,
  checkOverflow: mm,
  classes: dm
}, qs = {};
let io = class Rt {
  constructor() {
    let i, s;
    for (var a = arguments.length, f = new Array(a), c = 0; c < a; c++)
      f[c] = arguments[c];
    f.length === 1 && f[0].constructor && Object.prototype.toString.call(f[0]).slice(8, -1) === "Object" ? s = f[0] : [i, s] = f, s || (s = {}), s = lt({}, s), i && !s.el && (s.el = i);
    const h = st();
    if (s.el && typeof s.el == "string" && h.querySelectorAll(s.el).length > 1) {
      const g = [];
      return h.querySelectorAll(s.el).forEach((S) => {
        const E = lt({}, s, {
          el: S
        });
        g.push(new Rt(E));
      }), g;
    }
    const m = this;
    m.__swiper__ = !0, m.support = xc(), m.device = op({
      userAgent: s.userAgent
    }), m.browser = up(), m.eventsListeners = {}, m.eventsAnyListeners = [], m.modules = [...m.__modules__], s.modules && Array.isArray(s.modules) && m.modules.push(...s.modules);
    const d = {};
    m.modules.forEach((g) => {
      g({
        params: s,
        swiper: m,
        extendParams: hm(s, d),
        on: m.on.bind(m),
        once: m.once.bind(m),
        off: m.off.bind(m),
        emit: m.emit.bind(m)
      });
    });
    const y = lt({}, eo, d);
    return m.params = lt({}, y, qs, s), m.originalParams = lt({}, m.params), m.passedParams = lt({}, s), m.params && m.params.on && Object.keys(m.params.on).forEach((g) => {
      m.on(g, m.params.on[g]);
    }), m.params && m.params.onAny && m.onAny(m.params.onAny), Object.assign(m, {
      enabled: m.params.enabled,
      el: i,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return m.params.direction === "horizontal";
      },
      isVertical() {
        return m.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: m.params.allowSlideNext,
      allowSlidePrev: m.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: m.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        evCache: []
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: m.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), m.emit("_swiper"), m.params.init && m.init(), m;
  }
  getSlideIndex(i) {
    const {
      slidesEl: s,
      params: a
    } = this, f = St(s, `.${a.slideClass}, swiper-slide`), c = cc(f[0]);
    return cc(i) - c;
  }
  getSlideIndexByData(i) {
    return this.getSlideIndex(this.slides.filter((s) => s.getAttribute("data-swiper-slide-index") * 1 === i)[0]);
  }
  recalcSlides() {
    const i = this, {
      slidesEl: s,
      params: a
    } = i;
    i.slides = St(s, `.${a.slideClass}, swiper-slide`);
  }
  enable() {
    const i = this;
    i.enabled || (i.enabled = !0, i.params.grabCursor && i.setGrabCursor(), i.emit("enable"));
  }
  disable() {
    const i = this;
    i.enabled && (i.enabled = !1, i.params.grabCursor && i.unsetGrabCursor(), i.emit("disable"));
  }
  setProgress(i, s) {
    const a = this;
    i = Math.min(Math.max(i, 0), 1);
    const f = a.minTranslate(), h = (a.maxTranslate() - f) * i + f;
    a.translateTo(h, typeof s > "u" ? 0 : s), a.updateActiveIndex(), a.updateSlidesClasses();
  }
  emitContainerClasses() {
    const i = this;
    if (!i.params._emitClasses || !i.el) return;
    const s = i.el.className.split(" ").filter((a) => a.indexOf("swiper") === 0 || a.indexOf(i.params.containerModifierClass) === 0);
    i.emit("_containerClasses", s.join(" "));
  }
  getSlideClasses(i) {
    const s = this;
    return s.destroyed ? "" : i.className.split(" ").filter((a) => a.indexOf("swiper-slide") === 0 || a.indexOf(s.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const i = this;
    if (!i.params._emitClasses || !i.el) return;
    const s = [];
    i.slides.forEach((a) => {
      const f = i.getSlideClasses(a);
      s.push({
        slideEl: a,
        classNames: f
      }), i.emit("_slideClass", a, f);
    }), i.emit("_slideClasses", s);
  }
  slidesPerViewDynamic(i, s) {
    i === void 0 && (i = "current"), s === void 0 && (s = !1);
    const a = this, {
      params: f,
      slides: c,
      slidesGrid: h,
      slidesSizesGrid: m,
      size: d,
      activeIndex: y
    } = a;
    let g = 1;
    if (typeof f.slidesPerView == "number") return f.slidesPerView;
    if (f.centeredSlides) {
      let S = c[y] ? c[y].swiperSlideSize : 0, E;
      for (let T = y + 1; T < c.length; T += 1)
        c[T] && !E && (S += c[T].swiperSlideSize, g += 1, S > d && (E = !0));
      for (let T = y - 1; T >= 0; T -= 1)
        c[T] && !E && (S += c[T].swiperSlideSize, g += 1, S > d && (E = !0));
    } else if (i === "current")
      for (let S = y + 1; S < c.length; S += 1)
        (s ? h[S] + m[S] - h[y] < d : h[S] - h[y] < d) && (g += 1);
    else
      for (let S = y - 1; S >= 0; S -= 1)
        h[y] - h[S] < d && (g += 1);
    return g;
  }
  update() {
    const i = this;
    if (!i || i.destroyed) return;
    const {
      snapGrid: s,
      params: a
    } = i;
    a.breakpoints && i.setBreakpoint(), [...i.el.querySelectorAll('[loading="lazy"]')].forEach((h) => {
      h.complete && $i(i, h);
    }), i.updateSize(), i.updateSlides(), i.updateProgress(), i.updateSlidesClasses();
    function f() {
      const h = i.rtlTranslate ? i.translate * -1 : i.translate, m = Math.min(Math.max(h, i.maxTranslate()), i.minTranslate());
      i.setTranslate(m), i.updateActiveIndex(), i.updateSlidesClasses();
    }
    let c;
    if (a.freeMode && a.freeMode.enabled && !a.cssMode)
      f(), a.autoHeight && i.updateAutoHeight();
    else {
      if ((a.slidesPerView === "auto" || a.slidesPerView > 1) && i.isEnd && !a.centeredSlides) {
        const h = i.virtual && a.virtual.enabled ? i.virtual.slides : i.slides;
        c = i.slideTo(h.length - 1, 0, !1, !0);
      } else
        c = i.slideTo(i.activeIndex, 0, !1, !0);
      c || f();
    }
    a.watchOverflow && s !== i.snapGrid && i.checkOverflow(), i.emit("update");
  }
  changeDirection(i, s) {
    s === void 0 && (s = !0);
    const a = this, f = a.params.direction;
    return i || (i = f === "horizontal" ? "vertical" : "horizontal"), i === f || i !== "horizontal" && i !== "vertical" || (a.el.classList.remove(`${a.params.containerModifierClass}${f}`), a.el.classList.add(`${a.params.containerModifierClass}${i}`), a.emitContainerClasses(), a.params.direction = i, a.slides.forEach((c) => {
      i === "vertical" ? c.style.width = "" : c.style.height = "";
    }), a.emit("changeDirection"), s && a.update()), a;
  }
  changeLanguageDirection(i) {
    const s = this;
    s.rtl && i === "rtl" || !s.rtl && i === "ltr" || (s.rtl = i === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update());
  }
  mount(i) {
    const s = this;
    if (s.mounted) return !0;
    let a = i || s.params.el;
    if (typeof a == "string" && (a = document.querySelector(a)), !a)
      return !1;
    a.swiper = s, a.parentNode && a.parentNode.host && a.parentNode.host.nodeName === "SWIPER-CONTAINER" && (s.isElement = !0);
    const f = () => `.${(s.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let h = a && a.shadowRoot && a.shadowRoot.querySelector ? a.shadowRoot.querySelector(f()) : St(a, f())[0];
    return !h && s.params.createElements && (h = Ec("div", s.params.wrapperClass), a.append(h), St(a, `.${s.params.slideClass}`).forEach((m) => {
      h.append(m);
    })), Object.assign(s, {
      el: a,
      wrapperEl: h,
      slidesEl: s.isElement && !a.parentNode.host.slideSlots ? a.parentNode.host : h,
      hostEl: s.isElement ? a.parentNode.host : a,
      mounted: !0,
      // RTL
      rtl: a.dir.toLowerCase() === "rtl" || en(a, "direction") === "rtl",
      rtlTranslate: s.params.direction === "horizontal" && (a.dir.toLowerCase() === "rtl" || en(a, "direction") === "rtl"),
      wrongRTL: en(h, "display") === "-webkit-box"
    }), !0;
  }
  init(i) {
    const s = this;
    if (s.initialized || s.mount(i) === !1) return s;
    s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents();
    const f = [...s.el.querySelectorAll('[loading="lazy"]')];
    return s.isElement && f.push(...s.hostEl.querySelectorAll('[loading="lazy"]')), f.forEach((c) => {
      c.complete ? $i(s, c) : c.addEventListener("load", (h) => {
        $i(s, h.target);
      });
    }), bs(s), s.initialized = !0, bs(s), s.emit("init"), s.emit("afterInit"), s;
  }
  destroy(i, s) {
    i === void 0 && (i = !0), s === void 0 && (s = !0);
    const a = this, {
      params: f,
      el: c,
      wrapperEl: h,
      slides: m
    } = a;
    return typeof a.params > "u" || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), f.loop && a.loopDestroy(), s && (a.removeClasses(), c.removeAttribute("style"), h.removeAttribute("style"), m && m.length && m.forEach((d) => {
      d.classList.remove(f.slideVisibleClass, f.slideActiveClass, f.slideNextClass, f.slidePrevClass), d.removeAttribute("style"), d.removeAttribute("data-swiper-slide-index");
    })), a.emit("destroy"), Object.keys(a.eventsListeners).forEach((d) => {
      a.off(d);
    }), i !== !1 && (a.el.swiper = null, $d(a)), a.destroyed = !0), null;
  }
  static extendDefaults(i) {
    lt(qs, i);
  }
  static get extendedDefaults() {
    return qs;
  }
  static get defaults() {
    return eo;
  }
  static installModule(i) {
    Rt.prototype.__modules__ || (Rt.prototype.__modules__ = []);
    const s = Rt.prototype.__modules__;
    typeof i == "function" && s.indexOf(i) < 0 && s.push(i);
  }
  static use(i) {
    return Array.isArray(i) ? (i.forEach((s) => Rt.installModule(s)), Rt) : (Rt.installModule(i), Rt);
  }
};
Object.keys(Ks).forEach((l) => {
  Object.keys(Ks[l]).forEach((i) => {
    io.prototype[i] = Ks[l][i];
  });
});
io.use([cp, fp]);
const kc = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopedSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function vn(l) {
  return typeof l == "object" && l !== null && l.constructor && Object.prototype.toString.call(l).slice(8, -1) === "Object" && !l.__swiper__;
}
function hn(l, i) {
  const s = ["__proto__", "constructor", "prototype"];
  Object.keys(i).filter((a) => s.indexOf(a) < 0).forEach((a) => {
    typeof l[a] > "u" ? l[a] = i[a] : vn(i[a]) && vn(l[a]) && Object.keys(i[a]).length > 0 ? i[a].__swiper__ ? l[a] = i[a] : hn(l[a], i[a]) : l[a] = i[a];
  });
}
function Pc(l) {
  return l === void 0 && (l = {}), l.navigation && typeof l.navigation.nextEl > "u" && typeof l.navigation.prevEl > "u";
}
function _c(l) {
  return l === void 0 && (l = {}), l.pagination && typeof l.pagination.el > "u";
}
function Lc(l) {
  return l === void 0 && (l = {}), l.scrollbar && typeof l.scrollbar.el > "u";
}
function zc(l) {
  l === void 0 && (l = "");
  const i = l.split(" ").map((a) => a.trim()).filter((a) => !!a), s = [];
  return i.forEach((a) => {
    s.indexOf(a) < 0 && s.push(a);
  }), s.join(" ");
}
function vm(l) {
  return l === void 0 && (l = ""), l ? l.includes("swiper-wrapper") ? l : `swiper-wrapper ${l}` : "swiper-wrapper";
}
function gm(l) {
  let {
    swiper: i,
    slides: s,
    passedParams: a,
    changedParams: f,
    nextEl: c,
    prevEl: h,
    scrollbarEl: m,
    paginationEl: d
  } = l;
  const y = f.filter((U) => U !== "children" && U !== "direction" && U !== "wrapperClass"), {
    params: g,
    pagination: S,
    navigation: E,
    scrollbar: T,
    virtual: O,
    thumbs: _
  } = i;
  let M, P, A, R, V, Y, re, W;
  f.includes("thumbs") && a.thumbs && a.thumbs.swiper && g.thumbs && !g.thumbs.swiper && (M = !0), f.includes("controller") && a.controller && a.controller.control && g.controller && !g.controller.control && (P = !0), f.includes("pagination") && a.pagination && (a.pagination.el || d) && (g.pagination || g.pagination === !1) && S && !S.el && (A = !0), f.includes("scrollbar") && a.scrollbar && (a.scrollbar.el || m) && (g.scrollbar || g.scrollbar === !1) && T && !T.el && (R = !0), f.includes("navigation") && a.navigation && (a.navigation.prevEl || h) && (a.navigation.nextEl || c) && (g.navigation || g.navigation === !1) && E && !E.prevEl && !E.nextEl && (V = !0);
  const ie = (U) => {
    i[U] && (i[U].destroy(), U === "navigation" ? (i.isElement && (i[U].prevEl.remove(), i[U].nextEl.remove()), g[U].prevEl = void 0, g[U].nextEl = void 0, i[U].prevEl = void 0, i[U].nextEl = void 0) : (i.isElement && i[U].el.remove(), g[U].el = void 0, i[U].el = void 0));
  };
  f.includes("loop") && i.isElement && (g.loop && !a.loop ? Y = !0 : !g.loop && a.loop ? re = !0 : W = !0), y.forEach((U) => {
    if (vn(g[U]) && vn(a[U]))
      hn(g[U], a[U]), (U === "navigation" || U === "pagination" || U === "scrollbar") && "enabled" in a[U] && !a[U].enabled && ie(U);
    else {
      const ke = a[U];
      (ke === !0 || ke === !1) && (U === "navigation" || U === "pagination" || U === "scrollbar") ? ke === !1 && ie(U) : g[U] = a[U];
    }
  }), y.includes("controller") && !P && i.controller && i.controller.control && g.controller && g.controller.control && (i.controller.control = g.controller.control), f.includes("children") && s && O && g.virtual.enabled && (O.slides = s, O.update(!0)), f.includes("children") && s && g.loop && (W = !0), M && _.init() && _.update(!0), P && (i.controller.control = g.controller.control), A && (i.isElement && (!d || typeof d == "string") && (d = document.createElement("div"), d.classList.add("swiper-pagination"), d.part.add("pagination"), i.el.appendChild(d)), d && (g.pagination.el = d), S.init(), S.render(), S.update()), R && (i.isElement && (!m || typeof m == "string") && (m = document.createElement("div"), m.classList.add("swiper-scrollbar"), m.part.add("scrollbar"), i.el.appendChild(m)), m && (g.scrollbar.el = m), T.init(), T.updateSize(), T.setTranslate()), V && (i.isElement && ((!c || typeof c == "string") && (c = document.createElement("div"), c.classList.add("swiper-button-next"), c.innerHTML = i.hostEl.constructor.nextButtonSvg, c.part.add("button-next"), i.el.appendChild(c)), (!h || typeof h == "string") && (h = document.createElement("div"), h.classList.add("swiper-button-prev"), h.innerHTML = i.hostEl.constructor.prevButtonSvg, h.part.add("button-prev"), i.el.appendChild(h))), c && (g.navigation.nextEl = c), h && (g.navigation.prevEl = h), E.init(), E.update()), f.includes("allowSlideNext") && (i.allowSlideNext = a.allowSlideNext), f.includes("allowSlidePrev") && (i.allowSlidePrev = a.allowSlidePrev), f.includes("direction") && i.changeDirection(a.direction, !1), (Y || W) && i.loopDestroy(), (re || W) && i.loopCreate(), i.update();
}
function ym(l, i) {
  l === void 0 && (l = {}), i === void 0 && (i = !0);
  const s = {
    on: {}
  }, a = {}, f = {};
  hn(s, eo), s._emitClasses = !0, s.init = !1;
  const c = {}, h = kc.map((d) => d.replace(/_/, "")), m = Object.assign({}, l);
  return Object.keys(m).forEach((d) => {
    typeof l[d] > "u" || (h.indexOf(d) >= 0 ? vn(l[d]) ? (s[d] = {}, f[d] = {}, hn(s[d], l[d]), hn(f[d], l[d])) : (s[d] = l[d], f[d] = l[d]) : d.search(/on[A-Z]/) === 0 && typeof l[d] == "function" ? i ? a[`${d[2].toLowerCase()}${d.substr(3)}`] = l[d] : s.on[`${d[2].toLowerCase()}${d.substr(3)}`] = l[d] : c[d] = l[d]);
  }), ["navigation", "pagination", "scrollbar"].forEach((d) => {
    s[d] === !0 && (s[d] = {}), s[d] === !1 && delete s[d];
  }), {
    params: s,
    passedParams: f,
    rest: c,
    events: a
  };
}
function wm(l, i) {
  let {
    el: s,
    nextEl: a,
    prevEl: f,
    paginationEl: c,
    scrollbarEl: h,
    swiper: m
  } = l;
  Pc(i) && a && f && (m.params.navigation.nextEl = a, m.originalParams.navigation.nextEl = a, m.params.navigation.prevEl = f, m.originalParams.navigation.prevEl = f), _c(i) && c && (m.params.pagination.el = c, m.originalParams.pagination.el = c), Lc(i) && h && (m.params.scrollbar.el = h, m.originalParams.scrollbar.el = h), m.init(s);
}
function Sm(l, i, s, a, f) {
  const c = [];
  if (!i) return c;
  const h = (d) => {
    c.indexOf(d) < 0 && c.push(d);
  };
  if (s && a) {
    const d = a.map(f), y = s.map(f);
    d.join("") !== y.join("") && h("children"), a.length !== s.length && h("children");
  }
  return kc.filter((d) => d[0] === "_").map((d) => d.replace(/_/, "")).forEach((d) => {
    if (d in l && d in i)
      if (vn(l[d]) && vn(i[d])) {
        const y = Object.keys(l[d]), g = Object.keys(i[d]);
        y.length !== g.length ? h(d) : (y.forEach((S) => {
          l[d][S] !== i[d][S] && h(d);
        }), g.forEach((S) => {
          l[d][S] !== i[d][S] && h(d);
        }));
      } else l[d] !== i[d] && h(d);
  }), c;
}
const Em = (l) => {
  !l || l.destroyed || !l.params.virtual || l.params.virtual && !l.params.virtual.enabled || (l.updateSlides(), l.updateProgress(), l.updateSlidesClasses(), l.parallax && l.params.parallax && l.params.parallax.enabled && l.parallax.setTranslate());
};
function Qi() {
  return Qi = Object.assign ? Object.assign.bind() : function(l) {
    for (var i = 1; i < arguments.length; i++) {
      var s = arguments[i];
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (l[a] = s[a]);
    }
    return l;
  }, Qi.apply(this, arguments);
}
function Mc(l) {
  return l.type && l.type.displayName && l.type.displayName.includes("SwiperSlide");
}
function Oc(l) {
  const i = [];
  return Re.Children.toArray(l).forEach((s) => {
    Mc(s) ? i.push(s) : s.props && s.props.children && Oc(s.props.children).forEach((a) => i.push(a));
  }), i;
}
function xm(l) {
  const i = [], s = {
    "container-start": [],
    "container-end": [],
    "wrapper-start": [],
    "wrapper-end": []
  };
  return Re.Children.toArray(l).forEach((a) => {
    if (Mc(a))
      i.push(a);
    else if (a.props && a.props.slot && s[a.props.slot])
      s[a.props.slot].push(a);
    else if (a.props && a.props.children) {
      const f = Oc(a.props.children);
      f.length > 0 ? f.forEach((c) => i.push(c)) : s["container-end"].push(a);
    } else
      s["container-end"].push(a);
  }), {
    slides: i,
    slots: s
  };
}
function Tm(l, i, s) {
  if (!s) return null;
  const a = (g) => {
    let S = g;
    return g < 0 ? S = i.length + g : S >= i.length && (S = S - i.length), S;
  }, f = l.isHorizontal() ? {
    [l.rtlTranslate ? "right" : "left"]: `${s.offset}px`
  } : {
    top: `${s.offset}px`
  }, {
    from: c,
    to: h
  } = s, m = l.params.loop ? -i.length : 0, d = l.params.loop ? i.length * 2 : i.length, y = [];
  for (let g = m; g < d; g += 1)
    g >= c && g <= h && y.push(i[a(g)]);
  return y.map((g, S) => /* @__PURE__ */ Re.cloneElement(g, {
    swiper: l,
    style: f,
    key: `slide-${S}`
  }));
}
function Mr(l, i) {
  return typeof window > "u" ? ve.useEffect(l, i) : ve.useLayoutEffect(l, i);
}
const vc = /* @__PURE__ */ ve.createContext(null), Cm = /* @__PURE__ */ ve.createContext(null), to = /* @__PURE__ */ ve.forwardRef(function(l, i) {
  let {
    className: s,
    tag: a = "div",
    wrapperTag: f = "div",
    children: c,
    onSwiper: h,
    ...m
  } = l === void 0 ? {} : l, d = !1;
  const [y, g] = ve.useState("swiper"), [S, E] = ve.useState(null), [T, O] = ve.useState(!1), _ = ve.useRef(!1), M = ve.useRef(null), P = ve.useRef(null), A = ve.useRef(null), R = ve.useRef(null), V = ve.useRef(null), Y = ve.useRef(null), re = ve.useRef(null), W = ve.useRef(null), {
    params: ie,
    passedParams: U,
    rest: ke,
    events: G
  } = ym(m), {
    slides: X,
    slots: b
  } = xm(c), ue = () => {
    O(!T);
  };
  Object.assign(ie.on, {
    _containerClasses($, H) {
      g(H);
    }
  });
  const Oe = () => {
    Object.assign(ie.on, G), d = !0;
    const $ = {
      ...ie
    };
    if (delete $.wrapperClass, P.current = new io($), P.current.virtual && P.current.params.virtual.enabled) {
      P.current.virtual.slides = X;
      const H = {
        cache: !1,
        slides: X,
        renderExternal: E,
        renderExternalUpdate: !1
      };
      hn(P.current.params.virtual, H), hn(P.current.originalParams.virtual, H);
    }
  };
  M.current || Oe(), P.current && P.current.on("_beforeBreakpoint", ue);
  const _e = () => {
    d || !G || !P.current || Object.keys(G).forEach(($) => {
      P.current.on($, G[$]);
    });
  }, ee = () => {
    !G || !P.current || Object.keys(G).forEach(($) => {
      P.current.off($, G[$]);
    });
  };
  ve.useEffect(() => () => {
    P.current && P.current.off("_beforeBreakpoint", ue);
  }), ve.useEffect(() => {
    !_.current && P.current && (P.current.emitSlidesClasses(), _.current = !0);
  }), Mr(() => {
    if (i && (i.current = M.current), !!M.current)
      return P.current.destroyed && Oe(), wm({
        el: M.current,
        nextEl: V.current,
        prevEl: Y.current,
        paginationEl: re.current,
        scrollbarEl: W.current,
        swiper: P.current
      }, ie), h && h(P.current), () => {
        P.current && !P.current.destroyed && P.current.destroy(!0, !1);
      };
  }, []), Mr(() => {
    _e();
    const $ = Sm(U, A.current, X, R.current, (H) => H.key);
    return A.current = U, R.current = X, $.length && P.current && !P.current.destroyed && gm({
      swiper: P.current,
      slides: X,
      passedParams: U,
      changedParams: $,
      nextEl: V.current,
      prevEl: Y.current,
      scrollbarEl: W.current,
      paginationEl: re.current
    }), () => {
      ee();
    };
  }), Mr(() => {
    Em(P.current);
  }, [S]);
  function B() {
    return ie.virtual ? Tm(P.current, X, S) : X.map(($, H) => /* @__PURE__ */ Re.cloneElement($, {
      swiper: P.current,
      swiperSlideIndex: H
    }));
  }
  return /* @__PURE__ */ Re.createElement(a, Qi({
    ref: M,
    className: zc(`${y}${s ? ` ${s}` : ""}`)
  }, ke), /* @__PURE__ */ Re.createElement(Cm.Provider, {
    value: P.current
  }, b["container-start"], /* @__PURE__ */ Re.createElement(f, {
    className: vm(ie.wrapperClass)
  }, b["wrapper-start"], B(), b["wrapper-end"]), Pc(ie) && /* @__PURE__ */ Re.createElement(Re.Fragment, null, /* @__PURE__ */ Re.createElement("div", {
    ref: Y,
    className: "swiper-button-prev"
  }), /* @__PURE__ */ Re.createElement("div", {
    ref: V,
    className: "swiper-button-next"
  })), Lc(ie) && /* @__PURE__ */ Re.createElement("div", {
    ref: W,
    className: "swiper-scrollbar"
  }), _c(ie) && /* @__PURE__ */ Re.createElement("div", {
    ref: re,
    className: "swiper-pagination"
  }), b["container-end"]));
});
to.displayName = "Swiper";
const Gi = /* @__PURE__ */ ve.forwardRef(function(l, i) {
  let {
    tag: s = "div",
    children: a,
    className: f = "",
    swiper: c,
    zoom: h,
    lazy: m,
    virtualIndex: d,
    swiperSlideIndex: y,
    ...g
  } = l === void 0 ? {} : l;
  const S = ve.useRef(null), [E, T] = ve.useState("swiper-slide"), [O, _] = ve.useState(!1);
  function M(V, Y, re) {
    Y === S.current && T(re);
  }
  Mr(() => {
    if (typeof y < "u" && (S.current.swiperSlideIndex = y), i && (i.current = S.current), !(!S.current || !c)) {
      if (c.destroyed) {
        E !== "swiper-slide" && T("swiper-slide");
        return;
      }
      return c.on("_slideClass", M), () => {
        c && c.off("_slideClass", M);
      };
    }
  }), Mr(() => {
    c && S.current && !c.destroyed && T(c.getSlideClasses(S.current));
  }, [c]);
  const P = {
    isActive: E.indexOf("swiper-slide-active") >= 0,
    isVisible: E.indexOf("swiper-slide-visible") >= 0,
    isPrev: E.indexOf("swiper-slide-prev") >= 0,
    isNext: E.indexOf("swiper-slide-next") >= 0
  }, A = () => typeof a == "function" ? a(P) : a, R = () => {
    _(!0);
  };
  return /* @__PURE__ */ Re.createElement(s, Qi({
    ref: S,
    className: zc(`${E}${f ? ` ${f}` : ""}`),
    "data-swiper-slide-index": d,
    onLoad: R
  }, g), h && /* @__PURE__ */ Re.createElement(vc.Provider, {
    value: P
  }, /* @__PURE__ */ Re.createElement("div", {
    className: "swiper-zoom-container",
    "data-swiper-zoom": typeof h == "number" ? h : void 0
  }, A(), m && !O && /* @__PURE__ */ Re.createElement("div", {
    className: "swiper-lazy-preloader"
  }))), !h && /* @__PURE__ */ Re.createElement(vc.Provider, {
    value: P
  }, A(), m && !O && /* @__PURE__ */ Re.createElement("div", {
    className: "swiper-lazy-preloader"
  })));
});
Gi.displayName = "SwiperSlide";
function km(l) {
  if (!l?.resources) return [];
  const i = /* @__PURE__ */ new Map();
  let s = null;
  l.resources.forEach((f) => {
    let c = f.context?.custom?.alt || "";
    if (!c && f.metadata) {
      const y = f.metadata.find((g) => g.external_id === "alt" || g.label.toLowerCase() === "alt");
      y && (c = y.value);
    }
    let h = 0;
    if (f.metadata) {
      const y = f.metadata.find((g) => g.external_id === "sfcc-gallery-position");
      y && (h = parseInt(y.value, 10));
    }
    let m = !1;
    if (f.metadata) {
      const y = f.metadata.find((g) => g.external_id === "sfcc-is-main");
      y && (m = y.value?.value === "True");
    }
    const d = {
      id: f.asset_id,
      src: f.secure_url || f.url || f.public_id,
      type: f.resource_type || "image",
      // 'image' or 'video'
      width: f.width,
      height: f.height,
      format: f.format,
      alt: c,
      position: h,
      isMain: m,
      version: f.version || 0
    };
    m ? (!s || s.version < d.version) && (s = d) : (!i.has(h) || i.get(h).version < d.version) && i.set(h, d);
  });
  const a = Array.from(i.values()).sort((f, c) => f.position - c.position);
  return s && a.unshift(s), a;
}
function gc({ config: l }) {
  const [i, s] = ve.useState(null), [a, f] = ve.useState([]);
  ve.useEffect(() => {
    !l || !l.slidesUrl || fetch(l.slidesUrl).then((E) => E.json()).then((E) => f(km(E))).catch((E) => console.error("Failed to fetch slides JSON:", E));
  }, [l]);
  function c(E) {
    if (!E || !E.src) return "";
    if (!l || !l.resourcePath) return E.src;
    if (E.format) {
      const T = E.format === "mp4" || E.format === "webm" ? l.resourcePath.video : l.resourcePath.image;
      if (!l.transformations) return T + E.src;
      const O = l.transformations[E.format === "mp4" || E.format === "webm" ? "video" : E.format === "gif" ? "gif" : "image"];
      return new URL(T + O + "v1/" + E.src).toString();
    }
    return resourcePath + transformation + "v1/" + E.src;
  }
  function h(E) {
    if (!E || !E.src) return "";
    if (!l || !l.resourcePath) return E.src;
    const T = E.format === "mp4" || E.format === "webm" ? l.resourcePath.video : l.resourcePath.image;
    if (!l.transformations) return T + E.src;
    const O = l.transformations.thumbnail;
    return new URL(T + O + "v1/" + E.src).toString();
  }
  if (!l || a.length === 0) return null;
  const m = window.innerWidth >= (l.thumbnails?.breakpoint || 768), d = m ? l.thumbnails?.desktop : l.thumbnails?.mobile, y = d?.enabled && a.length > 0, g = d?.direction || "horizontal", S = m ? l.desktopCrop : l.mobileCrop;
  return /* @__PURE__ */ Be.jsxs("div", { "aria-live": "polite", style: { display: "flex", gap: "10px" }, children: [
    y && /* @__PURE__ */ Be.jsxs("div", { className: "thumb-column", children: [
      /* @__PURE__ */ Be.jsx("button", { className: "thumb-nav thumb-nav-prev", "aria-label": "Previous thumbnails", children: /* @__PURE__ */ Be.jsx("i", { class: "fa-solid fa-angle-up" }) }),
      /* @__PURE__ */ Be.jsx(
        to,
        {
          modules: [dc],
          autoplay: !1,
          onSwiper: s,
          direction: g,
          spaceBetween: 10,
          watchSlidesProgress: !0,
          slidesPerView: 6,
          navigation: {
            prevEl: ".thumb-nav-prev",
            nextEl: ".thumb-nav-next"
          },
          style: {
            height: g === "vertical" ? 70 * a.length + "px" : "auto",
            width: g === "vertical" ? "100px" : "100%"
          },
          children: a.map((E, T) => /* @__PURE__ */ Be.jsx(Gi, { style: { width: 80, height: 80 }, children: /* @__PURE__ */ Be.jsx(
            "img",
            {
              src: h(E),
              alt: E.alt || "",
              className: "thumb-slide",
              style: {
                width: 80,
                height: 80,
                objectFit: "cover",
                cursor: "pointer"
              }
            }
          ) }, T))
        }
      ),
      /* @__PURE__ */ Be.jsx("button", { className: "thumb-nav thumb-nav-next", "aria-label": "Next thumbnails", children: /* @__PURE__ */ Be.jsx("i", { class: "fa-solid fa-angle-down" }) })
    ] }),
    /* @__PURE__ */ Be.jsx(
      to,
      {
        modules: [dc, ep, bd, Zd, ip],
        keyboard: { enabled: !0, onlyInViewport: !0 },
        loop: l.loop || !1,
        navigation: !0,
        thumbs: { swiper: y ? i : null },
        lazy: { loadPrevNext: !0 },
        autoplay: l.videoProps?.autoplay ? { delay: 5e3 } : !1,
        slidesPerView: 1,
        effect: m ? "fade" : "slide",
        fadeEffect: { crossFade: !0 },
        speed: 600,
        a11y: {
          enabled: !0,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          slideLabelMessage: "{{index}} / {{slidesLength}}"
          // announces slide position
        },
        style: {
          height: S?.height || "auto",
          width: S?.width || "auto"
        },
        children: a.map((E, T) => E.type === "image" ? /* @__PURE__ */ Be.jsxs(Gi, { children: [
          /* @__PURE__ */ Be.jsx(
            "img",
            {
              src: c(E),
              "data-src": c(E),
              alt: E.alt || "",
              className: "swiper-lazy",
              style: {
                width: S?.width || "auto",
                height: S?.height || "auto",
                objectFit: l.imageProps?.objectFit || "cover"
              },
              loading: l.imageProps?.lazyLoad ? "lazy" : "eager"
            }
          ),
          /* @__PURE__ */ Be.jsx("div", { className: "swiper-lazy-preloader" })
        ] }, T) : E.type === "video" ? /* @__PURE__ */ Be.jsx(Gi, { children: /* @__PURE__ */ Be.jsx(
          "video",
          {
            src: c(E),
            poster: E.poster || "",
            muted: l.videoProps?.muted ?? !0,
            autoPlay: l.videoProps?.autoplay ?? !0,
            loop: l.videoProps?.loop ?? !0,
            playsInline: l.videoProps?.playsInline ?? !0,
            "aria-label": E.alt || "Product video",
            style: {
              width: S.width,
              height: S.height,
              objectFit: l.videoProps?.objectFit || "cover"
            }
          }
        ) }, T) : null)
      }
    )
  ] });
}
const Un = /* @__PURE__ */ new Map();
function Nc(l) {
  return typeof l == "string" ? document.querySelector(l) : l;
}
function Ic(l, i) {
  const s = Nc(l);
  if (!s)
    return console.error("[RemoteSlider] mount target not found:", l), null;
  if (Un.has(s)) {
    const { root: f } = Un.get(s);
    return f.render(/* @__PURE__ */ Be.jsx(gc, { config: i })), s;
  }
  const a = Hd.createRoot(s);
  return a.render(/* @__PURE__ */ Be.jsx(gc, { config: i })), Un.set(s, { root: a }), s;
}
function Rc(l) {
  const i = Nc(l);
  if (!i || !Un.has(i)) return;
  const { root: s } = Un.get(i);
  s.unmount(), Un.delete(i);
}
function Pm(l, i) {
  return Rc(l), Ic(l, i);
}
const _m = { mount: Ic, unmount: Rc, remount: Pm };
export {
  _m as default,
  Ic as mount,
  Pm as remount,
  Rc as unmount
};
